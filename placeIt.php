<?php
include ('connect.php');
	
	    $email=$_POST['email2'];
	    $mob=$_POST['mob2'];
		$total=$_POST['tot2'];
	    $name=$_POST['namearr'];
		$stock=$_POST['stockarr'];
	    $price=$_POST['pricearr'];
		$area=$_POST['area2'];
		//$thalis=$_POST['thalis'];
		$slot=$_POST['tslot'];
		date_default_timezone_set("Asia/Kolkata");
		$time=date("Y-m-d H:i:s");
		$orderr=array();
		$str='';
		//if($thalis>0){
			//$str='thali'.'-'.$thalis;
		//}
		for($i=0;$i<count($name);$i++){
			  //$current=strval($stock[$i]);
			   $orderr[$i]= $name[$i].'-'.$stock[$i];
			   $str=$str." ".$orderr[$i];
/* $orderr[$i]= '$name[$i]'."-".'$stock[$i]'; */
		}
		$query="INSERT INTO orderz (email,mobile,tot_cost,address,orders,slot,orderTime) VALUES ('$email',$mob,'$total','$area','$str','$slot','$time')";
		$run1=mysql_query($query);
		if ( $run1 == false ){
           echo false;
}
else{
	echo true;
}

?>