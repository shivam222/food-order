<?php
include ('connect.php');	
	
	    $name=$_POST['signname'];
		$uname=$_POST['username'];
	    $mail=$_POST['signmail'];
		$pass=$_POST['signpass'];
		$hashed=md5($pass);
		$add=$_POST['address'];
		$sector=$_POST['sector'];
		if($sector=="Sector"){
			echo 'Choose a sector';
		}
		else{
		$add="Noida,".$sector.",".$add;
		$query1="SELECT name FROM food WHERE email='$mail'";
		$run1=mysql_query($query1);
		if(mysql_num_rows($run1)==0){
		$query="INSERT INTO food (name,uname,email,password,address) VALUES ('$name','$uname','$mail','$hashed','$add')";
		$run=mysql_query($query);
		if($run)
		{
	    echo 'successful...go back and login.';
		}
		else{
			echo 'try again.';
		}
		}
		else{
			echo 'this mail Id is already registered.';
		}
		}
?>