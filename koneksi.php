<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "perpustakaan"
);


if (!$conn) {
    die("Database gagal terhubung : " . mysqli_connect_error());
}

?>