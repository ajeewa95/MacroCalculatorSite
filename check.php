<?php
$servername   = "localhost";
$database = "MacroCalculatorUsers";
$username = "AymanJeewa";
$password = "sp00ks95";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}
  echo "Connected successfully";
?>