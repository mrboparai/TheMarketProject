<?php 
    //this gets in the values from the text boxes
    $username = test_input($_POST['username']);
    $password = test_input($_POST['password']);

    //this checks just incase there isnt anythign wrong with them
    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    //this is hte array of usernames and passwords
    $users = array("admin" => "Admin25", "bob" => "Bob123", "carl" => "Carl1", "batman" => "Batman2", "superman" => "Superman4", "sonic" => "Sonic1",
                     "bob@gmail.com" => "Password4");

    $correct_username = 0;
    $correct_password = 0;

    //this loops through the list of users and checks to see if they are correct
    foreach($users as $user => $pass)
    {
        if($username == $user)
        {
            $correct_username = 1;

            if($password == $pass)
            {
                $correct_password = 1;
            }
        }
    }

    echo "$correct_username, $correct_password";

?>