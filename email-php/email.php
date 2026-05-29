<?php 
$para = "neycomy@gmail.com"; //para onde vamos enviar
$assunto = "Teste simple de envio de email via PHP"; //assunto ou subject
$corpo = "Olá, este é um emaill de teste enviado por PHP Script"; // corpo do email text
$headers = "From:neycomy@.gmail.com"; //cabeçalho

if (mail($para, $assunto, $corpo, $headers)) {
    echo "Email enviado para $para com sucesso!";
} else {
    echo "Falha no envio  do email.";
}
?>