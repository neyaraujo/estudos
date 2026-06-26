<?php 
    $host = "127.0.0.1";
    $user = "root";
    $password = "";
    $dbname = "bolao";

    $con = mysqli_connect($host, $user, $password, $dbname);

    if(mysqli_connect_error()) {
        echo "<p>ERRO: (".mysqli_connect_errno($con) . ") " . mysqli_connect_error() . " </p>";
    }
?>