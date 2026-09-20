<!DOCTYPE html>
<html>
<head>
    <title>Tambah Buku</title>
</head>

<body>

<h2>Tambah Data Buku</h2>

<form action="simpan.php" method="POST">

    <label>Judul Buku</label><br>
    <input type="text" name="judul">
    <br><br>

    <label>Penulis</label><br>
    <input type="text" name="penulis">
    <br><br>

    <label>Tahun</label><br>
    <input type="number" name="tahun">
    <br><br>

    <label>Deskripsi</label><br>
    <textarea name="deskripsi"></textarea>
    <br><br>

    <button type="submit">
        Simpan Buku
    </button>

</form>

</body>
</html>