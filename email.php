<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "paloiris@gmail.com";
    $subject = "New Message from Contact Form";
    $headers = "From: $email";

    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo "Message sent successfully.";
    } else {
        echo "Message could not be sent. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
