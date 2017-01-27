<?php

$servername = "localhost:3307";
$username = "root";
$password = "";
$db_name="users";
$connection=mysql_connect($servername,$username,$password);

$database=mysql_select_db($db_name,$connection);
	
	//$_POST = json_decode(file_get_contents('php://input'), true);
	    $name=$_POST['name'];
	    $pass=$_POST['pass'];
		$hashed=md5($pass);
		
		$query="SELECT password,address FROM food WHERE email='$name'";
		$run=mysql_query($query);
		$ansi=mysql_fetch_assoc($run);
		if($hashed==$ansi['password']){
		   echo $ansi['address'];
		}
	    else{
		
		echo false;
		}
		
?>
		
	
	
	
	


