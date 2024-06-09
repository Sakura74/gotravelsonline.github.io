<?php
if(isset($_POST['submit']))
{
extract($_POST);

$to = "support@gotravelsonline.com";
$headers1 = "MIME-Version: 1.0" . "\r\n";
$headers1 .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
$headers1 .= "From:support@gotravelsonline.com\r\n";
$content1="<p>Venueplanner.live Enquiry details form Website:</p>";
$content1.="<p><b>Name  :</b>$name</p>";
$content1.="<p><b>Email :</b>$email</p>";
$content1.="<p><b>Contact no. :</b>$phone</p>";
$content1.="<p><b>Country :</b>$country</p>";
$content1.="<p><b>City :</b>$city</p>";
$content1.="<p><b>Venue Type :</b>$Type</p>";
$content1.="<p><b>message :</b>$message</p>";
$content1.="<p>Regards,</p>";
mail($to,'Website Inquiry',$content1,$headers1);
echo "<script>window.alert('Your Contact Details Have Been Sent !')</script>";
echo "<script>window.location.href = 'Contact-Us.html';</script>";
}
?>


