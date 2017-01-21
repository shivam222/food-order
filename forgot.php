<?php

$servername = "localhost:3307";
$username = "root";
$password = "";
$db_name="users";
$connection=mysql_connect($servername,$username,$password);

$database=mysql_select_db($db_name,$connection);
	
	//$_POST = json_decode(file_get_contents('php://input'), true);
	    $name=$_POST['forgotField'];
	    
		
		$query="SELECT password,uname FROM food WHERE email='$name'";
		$run=mysql_query($query);
		$ansi=mysql_fetch_assoc($run);
		$pass=md5($ansi['uname']);
		if($ansi['password']){
		  $query2="UPDATE food SET password='$pass' WHERE email='$name'";
		  $run2=mysql_query($query2);
		 
		   //send it to respective mail id.
		   echo 'your new password is sent to your email id ...Go back and login with new password:)';
		}
	    else{
		   echo 'This email id is not registered on our site...Go back and register first ';
		}
		
?>
		
	
	
	
	


