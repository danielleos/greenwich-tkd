<?php
if(isset($_POST['email'])) {
    $email_to = "danielle.oh.es@gmail.com";

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
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if(!preg_match($email_exp,$email_from)) {
        $error_message .= 'The email you entered does not seem to be valid.<br />';
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
    $email_message .= "Message: ".clean_string($message)."\n";


// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
mail($email_to, $subject, $message, $headers);
?>

  <div class="feedback">Thank you for contacting us. We will be in touch soon.</div>
  <?php
}
?>