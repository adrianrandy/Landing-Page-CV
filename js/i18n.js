// Terjemahan Bahasa Indonesia.
// Versi Inggris diambil langsung dari index.html, jadi cukup tambahkan kunci di sini
// dengan nama yang sama seperti atribut data-i18n di HTML.
const translations = {
  id: {
    "meta.title": "Adrian Randy Pratama — IT Developer & System Implementation",
    "meta.description": "Adrian Randy Pratama — IT Developer & System Implementation dengan pengalaman 3+ tahun di industri pelabuhan.",

    // Navbar
    "nav.about": "Tentang",
    "nav.experience": "Pengalaman",
    "nav.education": "Pendidikan",
    "nav.projects": "Proyek",
    "nav.skills": "Keahlian",
    "nav.contact": "Kontak",

    // Profil
    "profile.alt": "Foto Adrian Randy Pratama",
    "profile.eyebrow": "Halo, saya",
    "profile.lead": "Lulusan IT yang berorientasi, berfokus pada analisis data untuk menghasilkan wawasan yang dapat ditindaklanjuti, dengan pengalaman 3+ tahun di industri pelabuhan.",
    "profile.download": "Unduh CV",
    "profile.contact": "Hubungi Saya",

    // Tentang
    "about.title": "Tentang Saya",
    "about.text": "Adrian adalah lulusan IT yang berorientasi dengan gelar Sarjana Sistem Informasi, berfokus pada analisis data untuk menghasilkan wawasan yang dapat ditindaklanjuti. Dengan pengalaman lebih dari tiga tahun sebagai IT Developer dan System Implementation di industri pelabuhan, ia memiliki rekam jejak yang terbukti dalam mengembangkan solusi yang andal serta membangun hubungan profesional yang kuat. Saat ini Adrian mencari kesempatan baru untuk menerapkan keahliannya di bidang IT development atau Business Analyst, di mana ia dapat terus memanfaatkan kemampuan analitis dan keterampilan teknisnya.",
    "about.stat1": "Tahun Pengalaman",
    "about.stat2": "Perusahaan",
    "about.stat3": "Sarjana Sistem Informasi",

    // Pengalaman
    "exp.title": "Pengalaman",
    "exp1.period": "Feb 2025 — Sekarang",
    "exp1.b1": "Berkolaborasi dengan full stack developer untuk memastikan alur data yang lancar antara server dan client.",
    "exp1.b2": "Membuat integrasi API agar front-end dapat berkomunikasi dengan server dan database.",
    "exp1.b3": "Membuat logika yang menjalankan aplikasi: menangani permintaan pengguna, memproses data, dan mengirimkan respons yang tepat.",
    "exp1.b4": "Merancang dan mengelola database — desain skema, query, dan optimasi menggunakan Oracle dan PostgreSQL.",
    "exp1.b5": "Mengintegrasikan aplikasi dengan API dan layanan pihak ketiga, termasuk sistem pelabuhan di sekitarnya.",
    "exp1.b6": "Menyelesaikan masalah kompleks terkait data, performa, atau logika yang mendukung fitur dan fungsi perangkat lunak.",
    "exp1.b7": "Menulis logika sisi server yang memproses permintaan front-end dan mengembalikan hasil dalam format yang sesuai (JSON atau XML).",

    "exp2.b1": "Menerapkan seluruh prosedur di lokasi dan memastikan konfigurasi aplikasi sesuai dengan daftar tugas.",
    "exp2.b2": "Pelatihan perangkat lunak untuk pengguna akhir (individu maupun kelompok).",
    "exp2.b3": "Memahami permasalahan pelanggan dan memberikan dukungan yang tepat beserta solusinya.",
    "exp2.b4": "Memberikan pelatihan Proses Bisnis Pelabuhan, Alur Pelayanan Kapal, serta Website &amp; Aplikasi Phinnisi bagi anggota baru Proyek VASA dan Phinnisi.",
    "exp2.b5": "Memberikan sosialisasi &amp; pelatihan kepada cabang (pihak yang terlibat dalam pelayanan kapal) dan agen pelayaran.",
    "exp2.b6": "Menganalisis dan menstandarkan sistem serta prosedur pelayanan kapal di seluruh cabang Pelabuhan Indonesia (Pelindo).",
    "exp2.b7": "Mengidentifikasi peluang perbaikan dan solusi atas kesenjangan melalui manajemen perubahan dan kematangan data.",
    "exp2.b8": "Mengelola dokumentasi harian dan memasukkan seluruh master data klien ke dalam database.",

    "exp3.b1": "Pengembangan backend dan API, desain database (Oracle, PostgreSQL), serta integrasi dengan sistem pelabuhan pihak ketiga.",

    "exp4.b1": "Mengembangkan aplikasi web dan website menggunakan HTML, PHP, JavaScript, jQuery, dan CSS.",
    "exp4.b2": "Memungkinkan website dan aplikasi mengambil, menampilkan, dan memperbarui artikel berita secara dinamis dari API eksternal atau database.",
    "exp4.b3": "Menggunakan integrasi JSON di back-end untuk penyimpanan, pemrosesan, dan komunikasi data antarsistem yang efisien.",
    "exp4.b4": "Merancang dan mengelola database — desain skema, query, dan optimasi menggunakan MySQL.",
    "exp4.b5": "Menulis logika sisi server yang memproses permintaan front-end dan mengembalikan hasil dalam format yang sesuai (JSON atau XML).",

    "exp5.period": "Agu 2019 — Sep 2019",
    "exp5.b1": "Analisis data: memeriksa, memproses, dan menafsirkan data untuk mendapatkan wawasan yang bermakna bagi pengambilan keputusan.",
    "exp5.b2": "Manajemen data: mengatur, menyimpan, mengamankan, dan memelihara data sepanjang siklus hidupnya.",
    "exp5.b3": "Pelaporan data: merangkum dan menyajikan data dalam format yang terstruktur.",
    "exp5.b4": "Manajemen risiko: mengidentifikasi, menganalisis, dan memitigasi risiko menggunakan wawasan berbasis data.",

    // Pendidikan
    "edu.title": "Pendidikan",
    "edu1.degree": "Sarjana Sistem Informasi",
    "edu1.gpa": "IPK 3,03 / 4,00",

    // Proyek
    "proj.title": "Proyek",
    "proj1.sub": "Implementasi &amp; Pendampingan Pengguna",
    "proj1.desc": "Mendukung implementasi Phinnisi, platform pelayanan kapal milik Pelindo, untuk memastikan adopsi yang lancar di seluruh cabang pelabuhan dan agen pelayaran.",
    "proj1.b1": "Memberikan pendampingan implementasi langsung di lokasi, menyelaraskan konfigurasi aplikasi dengan prosedur operasional di setiap cabang.",
    "proj1.b2": "Mengelola dan memelihara database aplikasi, termasuk penyiapan master data dan kontrol kualitas data.",
    "proj1.b3": "Membimbing dan melatih pengguna akhir dalam menggunakan aplikasi, sehingga mereka dapat mengoperasikan sistem dengan percaya diri dan mandiri.",
    "proj2.sub": "Pengembangan Aplikasi",
    "proj2.desc": "Mengembangkan Simpanda, aplikasi manajemen sumber daya terpusat yang memberikan pelabuhan di seluruh Indonesia satu tampilan yang andal atas sumber daya operasional mereka.",
    "proj2.b1": "Membangun fitur untuk mengelola sumber daya utama pelabuhan, termasuk pegawai, awak kapal, kapal, dan aset pelabuhan.",
    "proj2.b2": "Memungkinkan pelabuhan di seluruh Indonesia mengelola data sumber dayanya dalam satu platform terintegrasi.",
    "proj2.b3": "Mendukung perencanaan sumber daya dan pengambilan keputusan yang lebih baik melalui data yang akurat dan terkini.",

    // Tag
    "tag.sysimpl": "Implementasi Sistem",
    "tag.dbmgmt": "Manajemen Database",
    "tag.training": "Pelatihan Pengguna",
    "tag.appdev": "Pengembangan Aplikasi",
    "tag.resmgmt": "Manajemen Sumber Daya",
    "tag.dataint": "Integrasi Data",

    // Keahlian
    "skills.title": "Kompetensi Utama",
    "skills.software": "Keahlian Perangkat Lunak",
    "skills.interpersonal": "Keahlian Interpersonal",
    "skills.i1": "Berbicara di Depan Umum",
    "skills.i2": "Manajemen Waktu",
    "skills.i3": "Berpikir Kritis",
    "skills.i4": "Analisis Risiko",
    "skills.i5": "Komunikasi",
    "skills.i6": "Kerja Sama Tim",
    "skills.i7": "Teliti",
    "skills.languages": "Bahasa",
    "skills.l1": "Bahasa Indonesia (Baik)",
    "skills.l2": "Bahasa Inggris (Baik)",

    // Kontak & footer
    "contact.title": "Mari Terhubung",
    "contact.lead": "Terbuka untuk peluang di bidang IT Development dan Business Analysis.",
    "footer.rights": "Hak cipta dilindungi.",
  },
};

// Teks kecil yang dipakai oleh JavaScript (label tombol)
const uiText = {
  en: { toDark: "Switch to dark mode", toLight: "Switch to light mode", openMenu: "Open menu", lang: "Ganti ke Bahasa Indonesia" },
  id: { toDark: "Ganti ke mode gelap", toLight: "Ganti ke mode terang", openMenu: "Buka menu", lang: "Switch to English" },
};
