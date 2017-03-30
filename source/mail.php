<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

require("class.PHPMailer.php");

$mail = new PHPMailer();

$mail->IsSMTP();                                      // set mailer to use SMTP
$mail->Host = "mobilnestudiomakijazu.pl";  // specify main and backup server
$mail->SMTPAuth = true;     // turn on SMTP authentication
$mail->Username = "kontakt@mobilnestudiomakijazu.pl";  // SMTP username
$mail->Password = "Carmello56"; // SMTP password

$mail->From = "kontakt@mobilnestudiomakijazu.pl";
$mail->FromName = "Mobilne Studio Makijazu";
$mail->AddAddress("micpap07@gmail.com");

$mail->WordWrap = 50;                                 // set word wrap to 50 characters
$mail->IsHTML(true);                                  // set email format to HTML

$mail->Subject = "Zapytanie od ".$_POST['name']." ".$_POST['surname'];
$mail->Body    = "<p><strong>Adresat:</strong> ".$_POST['name']." ".$_POST['surname']."</p>"
              ."<p><strong>Email:</strong> ".$_POST['email']."</p>"
              ."<p><strong>Telefon:</strong> ".$_POST['phone']."</p>"
              ."<p><strong>Wiadomosc:</strong> \n".$_POST['message']."</p>";

if(!$mail->Send())
{
   echo "0";
   exit;
}
echo "1";
?>
