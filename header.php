<?php

session_start();

?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<header>
	<nav>
		<div class="main-wrapper">
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="macros.html">What Are Macros?</a></li> 
				<li><a href="signup.php">Sign Up Here</a></li>
				<li><a href="calculator.php">Macro Calculator</a></li> 
			</ul>
			<div class="nav-login">
				<form action="includes/login.inc.php" method="POST">
					<input type="text" name="uid" placeholder="Username">
					<input type="password" name="pwd" placeholder="Password">
					<button type="Submit" name="submit">Log In</button>
				</form>
				<a href="signup.php">Sign Up</a>
			</div>
			
		</div>
	</nav>
</header>