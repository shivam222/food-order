<?php
include ('connect.php');
	    
		$query1="SELECT * FROM windsor";
		$run1=mysql_query($query1);
	    //echo $run1[0];
		$data=array();
		$i=0;
		while($ansi=mysql_fetch_assoc($run1)){
		   $data[$i]= $ansi['price'];
	       
		   $i++;
		   }

		   echo json_encode($data);
		//header('Content-Type: application/json');
		//if($run1)
		//{
	    //echo $ansi['item'];
		//}
		
?>