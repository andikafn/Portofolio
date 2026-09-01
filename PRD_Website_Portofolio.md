# Product Requirements Document (PRD)
## Website Portofolio Pribadi

**Versi:** 1.0
**Tanggal:** 31 Agustus 2026
**Pemilik Produk:** [Nama Anda]

---

## 1. Latar Belakang & Tujuan

### 1.1 Latar Belakang
Website portofolio dibutuhkan sebagai representasi diri secara digital untuk menampilkan keahlian, pengalaman, dan hasil karya kepada calon klien, perekrut (recruiter), atau kolaborator.

### 1.2 Tujuan Produk
- Menampilkan profil profesional secara ringkas dan menarik.
- Memamerkan proyek/karya terbaik (portofolio) secara terstruktur.
- Memudahkan calon klien/perekrut untuk menghubungi pemilik website.
- Meningkatkan personal branding dan kredibilitas di mata publik.

### 1.3 Target Pengguna
- Perekrut (HR/hiring manager)
- Calon klien freelance/bisnis
- Sesama profesional/kolaborator
- Publik umum yang ingin mengenal profil pemilik

---

## 2. Ruang Lingkup (Scope)

### 2.1 Termasuk dalam Scope
- Website responsif (desktop, tablet, mobile)
- Halaman utama, portofolio, tentang saya, kontak
- Form kontak sederhana
- Integrasi ke media sosial & CV (download)

### 2.2 Di Luar Scope (Fase 1)
- Blog/CMS penuh
- Sistem login/dashboard admin
- E-commerce/pembayaran online
- Multi-bahasa (dipertimbangkan di fase berikutnya)

---

## 3. Fitur & Kebutuhan Fungsional

| No | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| 1 | Hero Section | Nama, tagline, foto profil, CTA (Lihat Portofolio / Hubungi Saya) | Must Have |
| 2 | Tentang Saya | Ringkasan latar belakang, keahlian, pengalaman | Must Have |
| 3 | Daftar Proyek/Portofolio | Grid/list proyek dengan gambar, deskripsi singkat, tautan/demo | Must Have |
| 4 | Detail Proyek | Halaman/modal detail: masalah, solusi, teknologi, hasil | Should Have |
| 5 | Keahlian (Skills) | Daftar/visualisasi skill teknis & non-teknis | Must Have |
| 6 | Pengalaman & Pendidikan | Timeline riwayat kerja & pendidikan | Should Have |
| 7 | Testimoni | Kutipan testimoni dari klien/rekan kerja | Could Have |
| 8 | Form Kontak | Nama, email, pesan, terkirim ke email pemilik | Must Have |
| 9 | Tautan Sosial Media | Link ke LinkedIn, GitHub, Instagram, dll | Must Have |
| 10 | Download CV | Tombol unduh CV format PDF | Should Have |
| 11 | Dark/Light Mode | Toggle tema tampilan | Could Have |
| 12 | Animasi/Interaksi | Efek scroll, hover, transisi halaman | Could Have |

*Prioritas menggunakan MoSCoW (Must/Should/Could/Won't Have).*

---

## 4. Kebutuhan Non-Fungsional

- **Performa:** Waktu muat halaman < 3 detik (skor Lighthouse ≥ 90).
- **Responsif:** Tampil optimal di layar mobile, tablet, dan desktop.
- **SEO:** Meta title/description, struktur heading yang benar, sitemap.xml.
- **Aksesibilitas:** Kontras warna memadai, navigasi keyboard, alt text gambar.
- **Keamanan:** Validasi input form, proteksi spam (captcha/honeypot).
- **Kompatibilitas Browser:** Chrome, Firefox, Safari, Edge (versi terbaru).
- **Maintainability:** Kode terstruktur, mudah diperbarui secara mandiri.

---

## 5. Struktur Halaman (Sitemap)

```
Home
├── Hero / Introduction
├── About Me
├── Skills
├── Portfolio / Projects
│   └── Project Detail (per proyek)
├── Experience & Education
├── Testimonials
└── Contact
```

---

## 6. User Flow Utama

1. Pengunjung membuka website → melihat Hero Section.
2. Pengunjung scroll/navigasi ke bagian Portofolio.
3. Pengunjung klik salah satu proyek → melihat detail proyek.
4. Pengunjung tertarik → menuju bagian Kontak.
5. Pengunjung mengisi form kontak / klik link sosial media / unduh CV.
6. Pesan terkirim → pemilik menerima notifikasi email.

---

## 7. Rekomendasi Teknologi (Opsional)

| Kebutuhan | Opsi Teknologi |
|-----------|-----------------|
| Frontend | HTML/CSS/JS, React/Next.js, atau website builder (Webflow, Framer) |
| Styling | Tailwind CSS |
| Hosting | Vercel, Netlify, GitHub Pages |
| Form Kontak | Formspree, EmailJS, atau backend sederhana |
| Domain | Custom domain (misal: namaanda.com) |

*Pemilihan teknologi disesuaikan dengan kemampuan teknis dan kebutuhan skalabilitas.*

---

## 8. Metrik Keberhasilan (Success Metrics)

- Jumlah pengunjung unik per bulan
- Rata-rata waktu kunjungan (time on site)
- Jumlah pesan masuk melalui form kontak
- Jumlah klik ke tautan proyek/demo
- Skor performa (Lighthouse/PageSpeed) ≥ 90

---

## 9. Timeline & Milestone (Contoh)

| Fase | Aktivitas | Estimasi Waktu |
|------|-----------|-----------------|
| 1 | Riset & penentuan konten, wireframe | 3-5 hari |
| 2 | Desain UI (mockup) | 5-7 hari |
| 3 | Pengembangan (development) | 7-14 hari |
| 4 | Pengisian konten & testing | 3-5 hari |
| 5 | Peluncuran (launch) & QA | 2-3 hari |

---

## 10. Risiko & Mitigasi

| Risiko | Mitigasi |
|--------|----------|
| Konten portofolio belum lengkap | Siapkan draft konten sebelum development dimulai |
| Desain tidak konsisten | Gunakan design system/style guide sejak awal |
| Website lambat karena gambar besar | Kompresi & optimasi gambar (WebP, lazy load) |
| Minim pengunjung | Rencanakan strategi SEO & promosi di media sosial |

---

## 11. Lampiran / Catatan Tambahan
- [ ] Kumpulkan aset: foto profil, logo, screenshot proyek
- [ ] Siapkan CV terbaru (PDF)
- [ ] Tentukan nama domain
- [ ] Tentukan palet warna & tipografi brand pribadi

---

*Dokumen ini dapat disesuaikan sesuai kebutuhan spesifik dan skala proyek Anda.*
