<?php

class User_model extends CI_Model
{

    var $title = '';
    var $content = '';
    var $date = '';

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }

    /**
     * @param $email
     * @return null
     */
    function get_by_email($email) {
        $sql = "SELECT *
                FROM users
                WHERE users.email = '$email'";
        $query = $this->db->query($sql);

        if ($query->num_rows() > 0) {
            return $query->result_array();
        } else {
            return null;
        }
    }

    /**
     * @param $facebook_profile
     */
    function create_from_facebook_profile($facebook_profile) {
        $this->db->insert('users', array(
            'email'     => $facebook_profile['email'],
            'fb_id'     => $facebook_profile['id'],
            'name'      => $facebook_profile['name'],
            'gender'    => $facebook_profile['gender'],
            'dob'       => date("Y-m-d", strtotime($facebook_profile['birthday']))
        ));

        return $this->get_by_email($facebook_profile['email']);
    }

    function get_last_ten_entries()
    {
        $query = $this->db->get('entries', 10);
        return $query->result();
    }

    function insert_entry()
    {
        $this->title = $_POST['title']; // please read the below note
        $this->content = $_POST['content'];
        $this->date = time();

        $this->db->insert('entries', $this);
    }

    function update_entry()
    {
        $this->title = $_POST['title'];
        $this->content = $_POST['content'];
        $this->date = time();

        $this->db->update('entries', $this, array('id' => $_POST['id']));
    }

}