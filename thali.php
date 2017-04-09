<?php
include ('connect.php');
	
	    
		$query1="SELECT * FROM thali";
		$run1=mysql_query($query1);
	    //echo $run1[0];
		$data=array();
		$i=0;
		while($ansi=mysql_fetch_assoc($run1)){
		   $data[$i]= $ansi['item'];
		   $price=$ansi['price'];
		   $i++;
		   }
		  $data[$i]=$price;
		   echo json_encode($data);
		
		
?>