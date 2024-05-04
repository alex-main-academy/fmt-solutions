<?php
$email = $_POST['email'];
$name = $_POST['name'];
$surname = $_POST['surname'];
$comment = $_POST['comment'];

$to = 'oleksandrilnytskyi@gmail.com';
$subject = 'Заявка с сайта "Промышленное оборудование"';
$message = "
Email: $email
Имя: $name
Фамилия: $surname
Комментарий: $comment
";

$headers = 'From: Site';

$sendToMail = mail($to, $subject, $message, $headers);


// if ($sendToMail) {
//   header('Location: thanks.html');
//   exit();
// } else {
//   echo "Error";
// }
?>