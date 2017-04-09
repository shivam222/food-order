<?php
include ('connect.php');
if(!empty($_POST['name'])&&!empty($_POST['password'])){
$name=$_POST['name'];
$password=$_POST['password'];
$pass=md5($password);
$query="SELECT password FROM admin WHERE name='$name'";
$run=mysql_query($query);
		$ansi=mysql_fetch_assoc($run);
		if($pass==$ansi['password']){
		  $query1="SELECT * FROM orderz ORDER BY id DESC;";
		  $run1=mysql_query($query1);
		  echo '<h4>Registered Users Orders</h4>';
		  echo '<table>';
		      echo '<tr>';
		         echo '<td>'.'id'.'</td>';
				 echo '<td>'.'email'.'</td>';
				 echo '<td>'.'mobile'.'</td>';
				 echo '<td>'.'total'.'</td>';
				 echo '<td>'.'address'.'</td>';
				 echo '<td>'.'order'.'</td>';
				 echo '<td>'.'slot'.'</td>';
				 echo '<td>'.'orderTime'.'</td>';
				 echo '</tr>';
		  while($ansi=mysql_fetch_assoc($run1)){
			     echo '<tr>';
		         echo '<td>'.$ansi["id"].'</td>';
				 echo '<td>'.$ansi["email"].'</td>';
				 echo '<td>'.$ansi["mobile"].'</td>';
				 echo '<td>'.$ansi["tot_cost"].'</td>';
				 echo '<td>'.$ansi["address"].'</td>';
				 echo '<td>'.$ansi["orders"].'</td>';
				 echo '<td>'.$ansi["slot"].'</td>';
				 echo '<td>'.$ansi["orderTime"].'</td>';
				 echo '</tr>';
		   }
		  echo '</table>';
		  
		  $query2="SELECT * FROM orderzn ORDER BY id DESC;";
		  $run2=mysql_query($query2);
		  echo '<h4>Non-Registered Users Orders</h4>';
		  echo '<table>';
		   echo '<tr>';
		         echo '<td>'.'id'.'</td>';
				 echo '<td>'.'email'.'</td>';
				 echo '<td>'.'mobile'.'</td>';
				 echo '<td>'.'total'.'</td>';
				 echo '<td>'.'address'.'</td>';
				 echo '<td>'.'order'.'</td>';
				 echo '<td>'.'name'.'</td>';
				 echo '<td>'.'slot'.'</td>';
				 echo '<td>'.'orderTime'.'</td>';
				 echo '</tr>';
		  while($ansi=mysql_fetch_assoc($run2)){
			     echo '<tr>';
		         echo '<td>'.$ansi["id"].'</td>';
				 echo '<td>'.$ansi["email"].'</td>';
				 echo '<td>'.$ansi["mobile"].'</td>';
				 echo '<td>'.$ansi["tot_cost"].'</td>';
				 echo '<td>'.$ansi["address"].'</td>';
				 echo '<td>'.$ansi["orders"].'</td>';
				 echo '<td>'.$ansi["name"].'</td>';
				 echo '<td>'.$ansi["slot"].'</td>';
				 echo '<td>'.$ansi["orderTime"].'</td>';
				 echo '</tr>';
		   }
		  echo '</table>';
		}
}
else{
	echo '<h2>Admin Panel</h2>'.'<br>';
	echo '<form action="admin.php" method="post">';
	echo 'Username:'.'<input type="text" name="name" />'.'<br>';
	echo 'Password:'.'<input type="password" name="password"/>'.'<br>';
	echo '<button type="submit">submit</button>';
	echo '</form>'; 
	

}
echo '<link rel="stylesheet" href="admin.css" type="text/css">';
?>