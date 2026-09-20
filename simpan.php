<?php

include "koneksi.php";

$judul = $_POST['judul'];
$penulis = $_POST['penulis'];
$tahun = $_POST['tahun'];
$deskripsi = $_POST['deskripsi'];


$query = "INSERT INTO buku 
(judul, penulis, tahun, deskripsi)

VALUES

('$judul',
'$penulis',
'$tahun',
'$deskripsi')";


$result = mysqli_query($conn, $query);


if($result){

    echo "Data buku berhasil disimpan";

}else{

    echo "Data gagal disimpan";

}

?>