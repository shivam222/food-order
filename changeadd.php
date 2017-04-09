<?php
include ('connect.php');
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
		