<?php
$servername = "localhost:3307";
$username = "root";
$password = "";
$db_name="users";
$connection=mysql_connect($servername,$username,$password);

$database=mysql_select_db($db_name,$connection);
	
	
	    $email=$_POST['email2'];
	    $mob=$_POST['mob2'];
		$total=$_POST['tot2'];
	    $name=$_POST['namearr'];
		$stock=$_POST['stockarr'];
	    $price=$_POST['pricearr'];
		$area=$_POST['area2'];
		$orderr=array();
		$str='';
		for($i=0;$i<count($name);$i++){
			  //$current=strval($stock[$i]);
			   $orderr[$i]= $name[$i].'-'.$stock[$i];
			   $str=$str." ".$orderr[$i];
/* $orderr[$i]= '$name[$i]'."-".'$stock[$i]'; */
		}
		echo $str;
?>