<?php
include ('connect.php');	
$menuAll=array();
$query1="SELECT name,price FROM windsor";
$run1=mysql_query($query1);
$i=0;
		while($ansi=mysql_fetch_assoc($run1)){
		   $menuAll[$i][0]= $ansi['name'];
	       $menuAll[$i][1]= $ansi['price'];
		   $i++;
		   }	
$query2="SELECT name,price FROM barabais";
$run2=mysql_query($query2);
        while($ansi=mysql_fetch_assoc($run2)){
		   $menuAll[$i][0]= $ansi['name'];
	       $menuAll[$i][1]= $ansi['price'];
		   $i++;
		   }

echo json_encode($menuAll);
?>