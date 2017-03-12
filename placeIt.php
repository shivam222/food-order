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
		$thalis=$_POST['thalis'];
		$orderr=array();
		$str='';
		if($thalis>0){
			$str='thali'.'-'.$thalis;
		}
		for($i=0;$i<count($name);$i++){
			  //$current=strval($stock[$i]);
			   $orderr[$i]= $name[$i].'-'.$stock[$i];
			   $str=$str." ".$orderr[$i];
/* $orderr[$i]= '$name[$i]'."-".'$stock[$i]'; */
		}
		$query="INSERT INTO orderz (email,mobile,tot_cost,address,orders) VALUES ('$email',$mob,'$total','$area','$str')";
		$run1=mysql_query($query);
		if ( $run1 == false ){
           echo "error";
}

?>