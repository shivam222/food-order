<?php
include ('connect.php');
	
	    $order=$_POST['namenstock'];
		$number=$_POST['number'];
		$total=$_POST['tot'];
		$name=$_POST['naam'];
		$email=$_POST['mailn'];
		$address=$_POST['addn'];
		$sector=$_POST['sector'];
		if($sector=="Sector"){
			echo "select your sector";
		}
		else{
		$address="Noida".",".$sector.",".$address;
	   // $thali=$_POST['thaliz'];
		$slot=$_POST['slot'];
		date_default_timezone_set("Asia/Kolkata");
		$time=date("Y-m-d H:i:s");
		//if($thali>0){
			//$order=$order.',thali-'.$thali;
		//}
		
		$query="INSERT INTO orderzn (email,mobile,tot_cost,address,orders,name,slot,orderTime) VALUES ('$email',$number,'$total','$address','$order','$name','$slot','$time')";
		$run1=mysql_query($query);
		if ( $run1 == false ){
           echo "An error was occured in placing your order please try again by refreshing the page.";
}
else{
	//echo "Your order was successfully placed";
	mail("shivamb61@gmail.com","your order",$order);
	echo "<script type='text/javascript'>alert('Sir,your order was successfully placed...just wait for the delicious food to arrive');</script>";
	header( "refresh:1;url=rough.html#/order" );
}
		}
?>