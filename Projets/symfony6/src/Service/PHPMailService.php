<?php

// src/Service/MessageGenerator.php
namespace App\Service;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception; // For error handling
use PHPMailer\PHPMailer\SMTP; // For SMTP constants like DEBUG_SERVER
use Symfony\Component\HttpFoundation\Response;

class PHPMailService extends \PHPMailer\PHPMailer\PHPMailer
{
    public function __construct()
    {

        try {
            // Server settings
            $this->SMTPDebug = SMTP::DEBUG_SERVER; // Enable verbose debug output
            $this->isSMTP();                       // Send using SMTP
            $this->Host       = 'smtp.gmail.com';  // Set the SMTP server to send through Gmail
            $this->SMTPAuth   = true;              // Enable SMTP authentication
            $this->Username   = 'referencementschool@gmail.com'; // Gmail username
            $this->Password   = 'vgex jqjw wizb ncdo'; // Gmail App Password
            $this->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable implicit TLS encryption
            $this->Port       = 587;               // TCP port to connect to

            // Recipients
            $this->setFrom('referencementschool@gmail.com', 'Mailer');
            $this->addAddress('quentingaronne1@gmail.com', 'Joe User'); // Add recipient

            // Content
            $this->isHTML(true); // Set email format to HTML
            $this->Subject = 'Here is the subject';
            $this->Body    = 'Mail is the HTML message body <b>in bold!</b>';

            // Send email
            $this->send();
            new Response('this has been sent');
        } catch (Exception $e) {
            new Response("Message could not be sent. Mailer Error: {$this->ErrorInfo}");
        }
    }
}