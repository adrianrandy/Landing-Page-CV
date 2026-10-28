# Landing Page CV

Website CV pribadi yang dibuat dengan HTML, CSS, dan JavaScript murni.
Tidak perlu install apa pun dan tidak ada proses build. Tampilannya
responsive di desktop dan mobile, dan otomatis memakai mode gelap
kalau perangkat pengunjung diatur ke mode gelap.

## Struktur Folder

```
├── index.html        ← SEMUA ISI CV ada di sini (nama, pengalaman, dll.)
├── css/style.css     ← Tampilan (warna tema ada di bagian paling atas)
├── js/main.js        ← Menu mobile & animasi
└── assets/
    ├── profile.jpg   ← Foto profil
    ├── favicon.svg   ← Ikon tab browser
    └── Adrian_Randy_CV_rev.pdf ← file CV untuk tombol "Download CV"
```

## Cara Mengubah Isi

1. Buka `index.html` lalu ubah teks di dalamnya. Setiap bagian (About, Experience, Education, Skills, Contact) diberi komentar penanda.
2. **Foto:** ganti file `assets/profile.jpg` dengan foto baru (nama file sama).
3. **CV PDF:** taruh file baru di `assets/`, lalu ubah `href` tombol "Download CV" di `index.html` sesuai nama filenya.
4. **Menambah pengalaman / pendidikan:** salin satu blok `<article ...> ... </article>` lalu ubah isinya.
5. **Warna tema:** ubah variabel `--primary` dan `--accent` di bagian atas `css/style.css`.

## Melihat di Komputer

Cukup klik dua kali `index.html` untuk membukanya di browser.

## Upload ke GitHub

```bash
git init
git add .
git commit -m "Initial commit: landing page CV"
git branch -M main
git remote add origin https://github.com/USERNAME/landing-page-cv.git
git push -u origin main
```

Repository-nya harus sudah dibuat dulu di github.com (tombol **New repository**).

## Deploy ke Vercel

1. Login ke [vercel.com](https://vercel.com) memakai akun GitHub.
2. Klik **Add New → Project**, lalu pilih repository `landing-page-cv`.
3. Framework Preset: **Other**. Biarkan semua pengaturan lain default.
4. Klik **Deploy**. Situs Anda akan online di `https://nama-project.vercel.app`.

Setiap kali Anda `git push` ke GitHub, Vercel akan meng-update situs secara otomatis.
