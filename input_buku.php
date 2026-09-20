<?php

include "koneksi.php";


$judul = "Bumi Manusia";
$penulis = "Pramoedya Ananta Toer";
$tahun = 1980;
$deskripsi = "Novel sejarah Indonesia";


$sql = "INSERT INTO buku 
(judul, penulis, tahun, deskripsi)

VALUES

('$judul',
'$penulis',
'$tahun',
'$deskripsi')";


if(mysqli_query($conn, $sql)){

    echo "Data berhasil masuk database";

}else{

    echo "Gagal memasukkan data";

}

?>