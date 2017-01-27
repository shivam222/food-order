<?php

$servername = "localhost:3307";
$username = "root";
$password = "";
$db_name="users";
$connection=mysql_connect($servername,$username,$password);

$database=mysql_select_db($db_name,$connection);
	
$email=$_POST['emaill'];
$add=$_POST['add'];

$query="UPDATE food SET address='$add'  WHERE email='$email'";
$run=mysql_query($query);
if($run){
	echo true; 
}
else{
	echo false;
}

?>
		