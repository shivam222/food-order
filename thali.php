<?php
$servername = "localhost:3307";
$username = "root";
$password = "";
$db_name="users";
$connection=mysql_connect($servername,$username,$password);

$database=mysql_select_db($db_name,$connection);
	
	
	    
		$query1="SELECT item FROM thali";
		$run1=mysql_query($query1);
		$ansi=mysql_fetch_assoc($run1);
		if($run1)
		{
	    echo $ansi['item'];
		}
		
?>