<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->SMTPDebug = 3;

try {

    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'neycomy@gmail.com';
    $mail->Password   = 'Calopsita123';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('neycomy@gmail.com', 'NeyComY');
    $mail->addAddress('neyaraujophp@gmail.com', 'Ney Araujo');

    $mail->isHTML(true);
    $mail->Subject = 'Teste Envio de Email';
    $mail->Body    = 'Este é o corpo da mensagem <b>Olá</b>';
    $mail->AltBody = 'Este é o corpo da mensagem sem HTML';

    $mail->send();

    echo 'A mensagem foi enviada com sucesso!';

} catch (Exception $e) {

    echo "Erro ao enviar: {$mail->ErrorInfo}";
}