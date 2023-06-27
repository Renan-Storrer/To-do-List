<?php 
    include 'config.php';

    $txt = $_POST['$txt'];

    $sql = "INSERT INTO demo (txt) VALUES('$txt')";
    
?>