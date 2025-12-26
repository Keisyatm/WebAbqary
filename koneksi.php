<?php
$con = mysqli_connect(hostname: "localhost", username: "root", password: "", database: "abqary");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " .mysqli_connect_eror();
  exit();
}
?>