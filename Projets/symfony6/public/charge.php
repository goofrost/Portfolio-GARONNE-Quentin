<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Stripe\Stripe;
use Stripe\Exception\CardException; // Importing necessary exception classes
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

Stripe::setApiKey('sk_test_51Q8GHeRwhrTFnrY9FnnJ0KSuqBNLwdBuYmasZMZTLhTcJwNNyDXEkjIq5kf5k7bYKLc6iU5e9L2XyFJXyRk5hfu200vP35m815');

try {
    // Check if the stripeToken is set
    if (!isset($_POST['stripeToken']) || empty($_POST['stripeToken'])) {
        throw new Exception('Stripe token is missing.');
    }

    // Get Stripe token from POST request
    $token = $_POST['stripeToken']; 

    // Create a charge (20 USD)
    $charge = \Stripe\Charge::create([
        'amount' => 2000, // in cents ($20.00)
        'currency' => 'usd',
        'source' => $token,
    ]);

    // Check if the charge was successful
    if ($charge->status == 'succeeded') {
        $mail = new PHPMailer(true);

        try {
            // SMTP server configuration
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;

            // Use App Password for Gmail or enable "Less Secure Apps"
            $mail->Username = 'quentingaronne1@gmail.com'; // Replace with your Gmail
            $mail->Password = 'vgex jqjw wizb ncdo'; // Use an App Password, not your actual Gmail password
            
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;

            // Email details
            $mail->setFrom('quentingaronne1@gmail.com', 'Quentin Garonne'); // Replace with your details
            $mail->addAddress('quentingaronne1@gmail.com', 'Quentin Garonne');
            $mail->Subject = 'Charge successful';
            $mail->Body = 'A charge of ' . ($charge->amount / 100) . ' ' . strtoupper($charge->currency) . ' has been made successfully.';

            // Send the email
            $mail->send();
            echo 'Email sent successfully';
        } catch (Exception $e) {
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        }
    } else {
        throw new Exception('Charge failed with status: ' . $charge->status);
    }
} catch (CardException $e) {
    // Catch Stripe card-related exceptions (e.g., card declined)
    echo 'Charge Error: ' . $e->getError()->message;
} catch (Exception $e) {
    // Catch any other errors
    echo 'Error: ' . $e->getMessage();
}