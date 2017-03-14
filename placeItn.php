<?php
$servername = "localhost:3307";
$username = "root";
$password = "";
$db_name="users";
$connection=mysql_connect($servername,$username,$password);

$database=mysql_select_db($db_name,$connection);
	
	
	    $order=$_POST['namenstock'];
		$number=$_POST['number'];
		$total=$_POST['tot'];
		$name=$_POST['naam'];
		$email=$_POST['mailn'];
		$address=$_POST['addn'];
	    $thali=$_POST['thaliz'];
		if($thali>0){
			$order=$order.',thali-'.$thali;
		}
		echo $order;
		//000echo $thali;
		/*if($thalis>0){
			$str='thali'.'-'.$thalis;
		}
		for($i=0;$i<count($name);$i++){
			  //$current=strval($stock[$i]);
			   $orderr[$i]= $name[$i].'-'.$stock[$i];
			   $str=$str." ".$orderr[$i];
/* $orderr[$i]= '$name[$i]'."-".'$stock[$i]'; */
		//}2
		/*$query="INSERT INTO orderz (email,mobile,tot_cost,address,orders) VALUES ('$email',$mob,'$total','$area','$str')";
		$run1=mysql_query($query);
		if ( $run1 == false ){
           echo false;
}
else{
	echo true;
}*/

?>