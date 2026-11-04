# 📚 English Midterm Test Sabaku Odd 2026
## Asesmen Tengah Semester (ATS) & Latihan Mandiri Bahasa Inggris — Semester Gasal 2026
**SMA Negeri 1 Bae Kudus (Sabaku) — Kurikulum Merdeka**

Aplikasi web interaktif berbasis HTML, CSS, dan JavaScript murni untuk Asesmen Tengah Semester (ATS) dan Latihan Mandiri Terpadu dengan pendekatan **Tes Kemampuan Akademik (TKA / AKM / UTBK)**.

---

### 🌟 Fitur Utama Aplikasi:

1. **40 Butir Soal Komprehensif Berstandar TKA:**
   * **10 Soal Listening (Audio + Speech Synthesis + Link):**
     * **Soal 1 s.d. 3:** *Listening with Pictures* (Ilustrasi vektor SVG jernih).
     * **Soal 4 s.d. 6:** *Short Dialogues* (Percakapan sehari-hari & fungsional).
     * **Soal 7 s.d. 10:** *Short Talks* (Monolog & pengumuman resmi sekolah).
   * **30 Soal Reading, Grammar, Vocabulary, & TKA:**
     * Teks otentik: *Descriptive Text*, *Report Text*, *Narrative*, *Analytical Exposition*, & *Discussion*.
     * **Variasi Tipe Soal:**
       * Pilihan Ganda Tunggal (Single Choice)
       * Pilihan Ganda Kompleks (*Matrix Table True/False*)
       * Multiple Choice Multiple Answer (*MCMA Checkboxes - Pilih 2 Opsi Benar*)
     * Tata bahasa terintegrasi: *Simple Present*, *OSASCOMP Adjective Order*, *Passive Voice*, *Past Continuous*, *Conditionals Type 1 & 2*, dan *Internal Conjunctions*.
     * Kosakata terkurasi dari **Oxford 3000 (CEFR Level A2, B1, dan B2)**.

2. **Dua Mode Pengerjaan:**
   * **🎯 Mode Latihan Mandiri:** Skor langsung muncul setelah selesai dan siswa dapat melihat **pembahasan mendalam serta kunci jawaban** pada setiap butir soal.
   * **📝 Mode Asesmen Resmi (ATS):** Simulasi ujian dengan hitung mundur waktu (90 menit), anti-kecurangan, dan skor otomatis tersinkronisasi ke basis data cloud.

3. **Formulir Identitas Siswa Lengkap:**
   * **Tingkat:** Dropdown pilihan (`X-E`, `XI-F`, atau `XII-F`).
   * **Rombel:** Pilihan 1 s.d. 12.
   * **Nomor Presensi:** Isian angka 1 s.d. 36 (validasi otomatis tanpa angka nol di depan).
   * **Nama Lengkap:** Isian nama lengkap siswa.

4. **Integrasi Rekapitulasi Nilai Google Sheets:**
   * Terhubung langsung dengan Google Spreadsheet:
     [Spreadsheet Rekap Nilai ATS 2026](https://docs.google.com/spreadsheets/d/1-PVYGcdgjIfEe4zc2P1kYF5PIXXoZAGNRHd3e02Why4/edit?usp=sharing)
   * Menyimpan: Timestamp, Tingkat, Rombel, No. Presensi, Nama Lengkap, Mode, Skor Benar, Total Soal, Nilai (0-100), Status KKTP (Tuntas/Belum), dan Durasi Pengerjaan.

---

### 📂 Struktur Repositori:

```text
English-Midterm-Test-Sabaku-Odd-2026/
├── index.html               # Halaman utama aplikasi asesmen
├── style.css                # Desain antarmuka modern, responsif & accessible
├── app.js                   # Mesin soal, audio player, validasi, penilaian & cloud sync
├── google_apps_script.js    # Backend Google Apps Script untuk Google Sheets
└── README.md                # Dokumentasi & panduan teknis
```

---

### 🚀 Cara Menjalankan Aplikasi:
1. Buka file `index.html` langsung di browser modern manapun (Google Chrome, Microsoft Edge, Safari, Mozilla Firefox).
2. Tidak memerlukan server atau dependensi node.js eksternal.
3. Audio listening didukung secara native melalui *Web Speech API Voice Synthesis* dan audio player terintegrasi.
