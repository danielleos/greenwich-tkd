<?php
if(isset($_POST['email'])) {
    $email_to = "example@example.com"; //change to greenwich tkd email

    function died($error) {
        echo "Error(s) have been found with the form you submitted. ";
        echo $error."<br /><br />";
        echo "Please try again.<br /><br />";
        die();
    }

    if(!isset($_POST['fname']) ||
        !isset($_POST['lname']) ||
        !isset($_POST['email']) ||
        !isset($_POST['subject']) ||
        !isset($_POST['message'])) {
        died("All fields are required.");       
    }

    $fname = $_POST['fname']; // required
    $lname = $_POSR['lname']; // required
    $email_from = $_POST['email']; // required
    $subject = $_POST['subject']; // required
    $message = $_POST['message']; // required

    $error_message = "";

    function valid_email($email) { 
        // Check the formatting is correct
        if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
            return false;
        }
        // Next check the domain is real.
        $domain = explode("@", $email, 2);
        return checkdnsrr($domain[1]); // returns TRUE/FALSE;
    }

    if(strlen($error_message) > 0) {
        died($error_message);
    }

    function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
    }

    $email_message = "FORM DETAILS:\n\n";
    $email_message .= "First Name: ".clean_string($fname)."\n";
    $email_message .= "Last Name: ".clean_string($lname)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Subject: ".clean_string($subject)."\n";
    $email_message .= "Message:\n\n".clean_string($message)."\n";


// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
if (valid_email($email_from) == false) {
    header('Location: sorry.html');
} else {
    mail($email_to, $subject, $email_message, $headers);
    header('Location: thankyou.html');
}
?>
  <?php
}
?>