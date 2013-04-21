<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Example
 *
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array.
 *
 * @package        CodeIgniter
 * @subpackage    Rest Server
 * @category    Controller
 * @author        Phil Sturgeon
 * @link        http://philsturgeon.co.uk/code/
 */

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH . '/libraries/REST_Controller.php';

class Api extends REST_Controller
{
    protected $rest_format = 'json';

    function days_get() {
        $userId = $_GET['userId'];


    }

    function weight_post() {
        // Get out the posted values
        if(!$this->post('userId') && !$this->post('kilograms')) {
            $this->response(NULL, 400);
        }

        $weight = R::dispense('weight');
        $weight->date = date('Y-m-d');
        $weight->kilograms = $this->post('kilograms');

        // Get the user
        $user = R::load('user', $this->post('userId'));
        $weight->user = $user;
        R::store($weight);

        $this->response($weight->export(), 200); // 200 being the HTTP response code
    }

    function user_get()
    {

        // Now accepting login requests lol, dont ask why
        // its just the only way i can work this out with angularjs lol
        if(isset($_GET['type']) && $_GET['type'] == "login") {
            $user = R::findOne(
                'user',
                'email = :email AND password = :password',
                array(
                    ':email'    => $_GET['email'],
                    ':password' => $_GET['password']
                )
            );
        } else {
            // This is for regular out resty stuff
            if (!$this->get('id') && !count($_GET)) {
                $this->response(NULL, 400);
            }

            $user_id = $this->get('id');
            $user = R::load('user', $user_id);
        }

        R::preload(array($user), array(
            'ownWeight'=>'weight'
        ));

        unset($user->password);

        if ($user->id) {
            $this->response($user->export(), 200); // 200 being the HTTP response code
        } else {
            $this->response(array('error' => 'User could not be found'), 404);
        }


//        list($today,$yesterday) = R::dispense('weight',2);
//        $today->weight = 182;
//        $yesterday->weight = 105;
//        $user->ownWeight[] = $today;
//        $user->ownWeight[] = $yesterday;
//        R::store($user);

//        $user->fullName = "hello";



//        $user->ownWeight;

//        $user->weight;
//
//        $user_obj = $user->export(false, true, true);
//


    }

    function user_post()
    {
        // Get out the Post stuff from angularjs
        if(stripos($_SERVER["CONTENT_TYPE"], "application/json") === 0) {
            $_POST = json_decode(file_get_contents("php://input"), true);
        }

        $user = R::dispense('user');
        $user->import($_POST);
        R::store($user);

        $this->response($user->export(), 200); // 200 being the HTTP response code
    }

    function user_delete()
    {
        if (!$this->get('id')) {
            $this->response(NULL, 400);
        }
        $user = R::load('user', $this->get('id'));

        R::trash( $user );

        $this->response($user, 200); // 200 being the HTTP response code
    }

    function users_get()
    {
        $users = R::findAll('user');

        if ($users) {
            $this->response($users, 200); // 200 being the HTTP response code
        } else {
            $this->response(array('error' => 'Couldn\'t find any users!'), 404);
        }
    }


    public function send_post()
    {
        var_dump($this->request->body);
    }


    public function send_put()
    {
        var_dump($this->put('foo'));
    }
}