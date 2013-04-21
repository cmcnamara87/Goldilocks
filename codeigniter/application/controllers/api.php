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

    function day_get() {
        // get the day
        if(isset($_GET['type'])) {
            // special types of get
            if($_GET['type'] == "today") {

                $user = R::load('user', $this->get('userId'));

                // get today's day
                $day = R::findOne(
                    'day',
                    'date = :date AND user_id = :user_id
                    ORDER BY date DESC',
                    array(
                        ':date'     => date('Y-m-d'),
                        ':user_id'  => $user->id
                    )
                );

                if(!$day && !$day->id) {
                    // we didnt find a day, so lets make a bunch for the next 30 for this user
                    // get the user first

                    $days = R::dispense('day', 30);
                    $dayCount = 0;
                    foreach($days as $day) {
                        $day->user = $user;
                        $day->day = $dayCount + 1;
                        $day->date = date('Y-m-d', strtotime("+" . $dayCount++ .  "day"));
                    }
                    R::storeAll($days);
                    $day = $days[0];
                }
            }
        } else {
            // probaby getting by id
        }

        // Load the meals
        $day->with('ORDER BY id DESC')->ownMeal;

        // Load the food eaten
        foreach($day->ownMeal as $meal) {
            $meal->with('ORDER BY id DESC')->ownFood;
        }

        if ($day->id) {
            $this->response($day->export(), 200); // 200 being the HTTP response code
        } else {
            $this->response(array('error' => 'Day could not be found'), 404);
        }

    }

    function meal_get() {

    }

    function meal_post() {
        if(!$this->post('dayId') && !$this->post('ownFood')) {
            $this->response(NULL, 400);
        }

        // Create a meal
        $meal = R::dispense('meal');
        $meal->day = R::load('day', $this->post('dayId'));
        $meal->ownFood = array();

        // Add in all the foods
        foreach($this->post('ownFood') as $ownFood) {
            $food = R::dispense('food');
            $food->import($ownFood);
            $meal->ownFood[] = $food;
        }
        // Save the meal
        R::store($meal);

        $meal->ownFood;

        // Return the meal
        $this->response($meal->export(), 200); // 200 being the HTTP response code
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

        // Create the user
        $user = R::dispense('user');
        $user->import($_POST);
        R::store($user);

        // Create the days
        // Lets create all the days for hte user
        $days = R::dispense('day', 30);
        $dayCount = 0;
        foreach($days as $day) {
            $day->user = $user;
            $day->day = $dayCount + 1;
            $day->date = date('Y-m-d', strtotime("+" . $dayCount++ .  "day"));
        }
        R::storeAll($days);

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