<?php

include ('connect.php');	
$email=$_POST['emaill'];
$npass=$_POST['npass'];
$opass=$_POST['opass'];
$opass=md5($opass);
$npass=md5($npass);

$query="SELECT password FROM food WHERE email='$email'";
		$run=mysql_query($query);
		$ansi=mysql_fetch_assoc($run);
		if($opass==$ansi['password']){
		   
		   $query="UPDATE food SET password='$npass'  WHERE email='$email'";
		   $run=mysql_query($query);
if($run){
	echo true; 
}
else{
	echo false;
}

		}
		else{
			echo false;
		}


?>
		