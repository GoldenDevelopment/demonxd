<?php
$name = $_POST['nombre']
$mail = $_POST['correo']
$msg = $_POST['mensaje']

$header = 'From' . $mail . " \r\n";
$header .= 'X-Mailer: PHP/' . phpversion() . " \r\n";
$header .= 'Mime-Version: 1.0' . " \r\n"
$header .= "Content-Type: text/plain";

$message = "Mensaje enviado por: " . $name . " \r\n";
$message .= "Correo: " . $name . " \r\n";
$message .= "Mensaje: " . $msg . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = "itsnotking6@gmail.com";
$asunto = "Demon Hosting | Contacto";

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html")