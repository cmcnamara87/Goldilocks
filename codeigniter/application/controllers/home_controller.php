<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home_controller extends CI_Controller {

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     * 		http://example.com/index.php/welcome
     *	- or -
     * 		http://example.com/index.php/welcome/index
     *	- or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see http://codeigniter.com/user_guide/general/urls.html
     */
    public function index()
    {
        // craigmcn_goldilo
        // jacr7Nap

        // Load up facebook
        $fb_config = array(
            'appId'  => '352423091536507',
            'secret' => '0c71f3d7ac8ee20a1ebfe34f6ab8a48a'
        );
        $this->load->library('facebook', $fb_config);

        // Get the facebook user
        $user = $this->facebook->getUser();

        if ($user) {
            try {
                $this->load->model('User_model');

                $facebook_profile = $this->facebook->api('/me');


                // Check if user is in database
                $user_profile = $this->User_model->get_by_email($facebook_profile['email']);

                if(!$user_profile) {
                    $user_profile = $this->User_model->create_from_facebook_profile($facebook_profile);

                    // Go ask for height and weight
                }

            } catch (FacebookApiException $e) {
                $user = null;
            }
        }

        $data['logout_url'] = $this->facebook->getLogoutUrl();
        $params = array(
            'scope'  => 'email,user_birthday'
        );
        $data['login_url'] = $this->facebook->getLoginUrl($params);

        $this->load->view('home_view', $data);
    }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */