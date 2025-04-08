<?php 
    $hostName = "localhost";
    $dbUser = "root";
    $dbPassword = "root";
    $dbName = "registration";
    $dbMen = "addToCart";
    $conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName);
    $conn2 = mysqli_connect($hostName, $dbUser, $dbPassword, $dbMen);

    if (!$conn) {
        die("Something went wrong");
    } 
    if (!$conn2) {
        die("Not connected to kurta database");
    }
?>