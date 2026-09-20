function showDetail(book){ 


let title = document.getElementById("detail-title"); 

let text = document.getElementById("detail-text"); 




if(book === "filosofi"){ 


title.innerHTML = "Filosofi Teras"; 


text.innerHTML = `

<b>Penulis:</b> Henry Manampiring<br>

<b>Tahun Terbit:</b> 2018<br>

<b>Kategori:</b> Pengembangan Diri & Filosofi<br><br>


<b>Tentang Buku:</b><br>

Filosofi Teras merupakan buku yang mengenalkan filosofi Stoikisme 
kepada pembaca modern dengan bahasa yang sederhana dan mudah dipahami. 
Buku ini membahas cara manusia menghadapi emosi negatif, tekanan hidup, 
dan berbagai permasalahan sehari-hari.


<br><br>


<b>Isi Utama:</b><br>

• Memahami hal yang dapat dan tidak dapat dikendalikan.<br>
• Mengelola pikiran dan emosi dengan lebih tenang.<br>
• Melatih cara berpikir rasional dalam menghadapi masalah.<br>


<br>


<b>Cocok untuk:</b><br>

Orang yang ingin meningkatkan ketenangan, 
mengurangi kecemasan, dan memahami diri sendiri.

`; 


}




else if(book === "principles"){ 


title.innerHTML = "Principles"; 


text.innerHTML = `


<b>Penulis:</b> Ray Dalio<br>

<b>Tahun Terbit:</b> 2017<br>

<b>Kategori:</b> Bisnis & Leadership<br><br>


<b>Tentang Buku:</b><br>


Principles adalah buku yang berisi kumpulan prinsip kehidupan 
dan pekerjaan dari Ray Dalio, pendiri perusahaan investasi Bridgewater. 
Buku ini menjelaskan bagaimana pengalaman, kesalahan, 
dan proses belajar dapat menjadi dasar dalam mengambil keputusan.


<br><br>


<b>Isi Utama:</b><br>


• Membuat prinsip dalam kehidupan pribadi.<br>

• Mengambil keputusan berdasarkan proses yang jelas.<br>

• Membangun sistem kerja yang efektif.<br>


<br>


<b>Cocok untuk:</b><br>

Pemimpin, mahasiswa, pengusaha, 
dan siapa saja yang ingin meningkatkan kemampuan berpikir.

`; 

}




else if(book === "atomic"){ 


title.innerHTML = "Atomic Habits"; 


text.innerHTML = `


<b>Penulis:</b> James Clear<br>

<b>Tahun Terbit:</b> 2018<br>

<b>Kategori:</b> Self Improvement<br><br>


<b>Tentang Buku:</b><br>


Atomic Habits menjelaskan bagaimana perubahan kecil 
yang dilakukan secara konsisten dapat menghasilkan perubahan besar. 
James Clear memberikan strategi praktis untuk membangun kebiasaan baik 
dan menghilangkan kebiasaan buruk.


<br><br>


<b>Isi Utama:</b><br>


• Empat hukum perubahan perilaku.<br>

• Membuat kebiasaan menjadi lebih mudah dilakukan.<br>

• Fokus pada sistem, bukan hanya tujuan akhir.<br>


<br>


<b>Cocok untuk:</b><br>

Siapa saja yang ingin membangun disiplin, 
produktivitas, dan perkembangan diri.

`; 

}




else if(book === "bumi"){


title.innerHTML = "Bumi Manusia";


text.innerHTML = `


<b>Penulis:</b> Pramoedya Ananta Toer<br>

<b>Tahun Terbit:</b> 1980<br>

<b>Kategori:</b> Novel Sejarah Indonesia<br><br>


<b>Tentang Buku:</b><br>


Bumi Manusia merupakan novel sejarah Indonesia yang 
menggambarkan kehidupan masyarakat Indonesia pada masa kolonial Belanda. 
Novel ini menceritakan perjalanan Minke, seorang pemuda pribumi 
yang berjuang memperoleh pendidikan, kebebasan berpikir, 
dan menghadapi ketidakadilan sosial pada masa penjajahan.


<br><br>


<b>Isi Utama:</b><br>


• Gambaran kehidupan masyarakat Hindia Belanda.<br>

• Perjuangan pendidikan dan pemikiran modern.<br>

• Konflik sosial antara pribumi dan kolonialisme.<br>


<br>


<b>Cocok untuk:</b><br>

Pembaca yang tertarik dengan sejarah Indonesia, 
sastra, perjuangan pendidikan, dan perjalanan bangsa.

`; 


}




document.getElementById("popup").style.display="flex";


}




function closeDetail(){ 


document.getElementById("popup").style.display="none";


}