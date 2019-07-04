<!doctype html>
<html>

<head>
    <title>Macro Calculator</title>
    <link href="styles.css" rel="stylesheet" type="text/css">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
  </head>

<nav>
      <div class="main-wrapper">
      <ul class="navigation">
        <li><a href="calculator.html">Macro Calculator</a></li>
        <li><a href="signup.php">Sign Up Here</a></li>
        <li><a href="macros.html">What Are Macros?</a></li> 
        <li><a href="index.html">Home</a></li>
      </ul>
     </div>
    </nav>
<br></br>
<section class="main-container">
	<div class="main-wrapper">
		<h2>Sign Up</h2>
		<p>Use the form below to sign up to the website, when you have made a user you will be able to track how well you are doing on achieving your goal.</p>
		<form class="signup-form" action="includes/signup.inc.php" method="POST">
			<input type="text" name="first" placeholder="First Name"><br>
			<input type="text" name="last" placeholder="Last Name"><br>
			<input type="text" name="email" placeholder="Email"><br>
			<input type="text" name="uid" placeholder="Username"><br>
			<input type="password" name="pwd" placeholder="Password"><br>
			<button type="submit" name="submit">Sign Up</button>
		</form>
	</div>	
</section>

<?php
include_once 'footer.php';
?>