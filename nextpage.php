<?php
    $server="localhost";
    $username="root";
    $password="";
    $database = "student"; 

    $con=mysqli_connect($server,$username,$password,$database);

    if(!$con){
        die("connection to the database failed ".mysqli_connect_error()); 

    }
    echo"Success connected to db"
    // INSERT INTO `student`(`Sno`, `full-name`, `email`, `password`, `confirm-password`, `mobile-number`, `10-marks`, `12-marks`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8])
?>