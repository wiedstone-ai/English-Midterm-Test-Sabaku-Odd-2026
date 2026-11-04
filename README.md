# 📚 English Midterm Test Sabaku Odd 2026
## Asesmen Tengah Semester (ATS) & Latihan Mandiri Bahasa Inggris — Semester Gasal 2026
**SMA Negeri 1 Bae Kudus (Sabaku) — Kurikulum Merdeka**

🌐 **Live GitHub Pages URL:** [https://wiedstone-ai.github.io/English-Midterm-Test-Sabaku-Odd-2026/](https://wiedstone-ai.github.io/English-Midterm-Test-Sabaku-Odd-2026/)

Aplikasi web interaktif modern berbasis HTML5, CSS3, dan JavaScript murni untuk Asesmen Tengah Semester (ATS) resmi dan Latihan Mandiri Terpadu dengan pendekatan **Tes Kemampuan Akademik (TKA / AKM / UTBK)**.

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
       * Pilihan Ganda Tunggal (*Single Choice*)
       * Pilihan Ganda Kompleks (*Matrix Table True/False*)
       * Multiple Choice Multiple Answer (*MCMA Checkboxes - Pilih 2 Opsi Benar*)
     * Tata bahasa terintegrasi: *Simple Present*, *OSASCOMP Adjective Order*, *Passive Voice*, *Past Continuous*, *Conditionals Type 1 & 2*, dan *Internal Conjunctions*.
     * Kosakata terkurasi dari **Oxford 3000 (CEFR Level A2, B1, dan B2)**.

2. **Pengacakan Pilihan Jawaban (Randomized Options):**
   * Semua pilihan jawaban (A, B, C, D) diacak secara dinamis menggunakan algoritma *Fisher-Yates Shuffle* pada setiap pengerjaan tes.
   * Pernyataan evaluasi pada soal Pilihan Ganda Kompleks (*Matrix Table*) juga diacak.
   * Kunci jawaban dan rujukan pembahasan (*explanation*) tersinkronisasi otomatis dengan posisi opsi yang baru.

3. **Dua Mode Pengerjaan dengan Proteksi Token Ujian:**
   * **🎯 Mode Latihan Mandiri:** Skor langsung muncul setelah selesai dan siswa dapat melihat **kunci jawaban serta pembahasan mendalam** pada setiap butir soal.
   * **📝 Mode Asesmen Resmi (ATS):** Simulasi ujian dengan hitung mundur waktu (90 menit). Dilengkapi proteksi token pengawas ujian:
     * **Token Resmi ATS:** `JujurItuMujur`
     * Skor langsung terekap dan otomatis tersinkronisasi ke basis data Google Sheets.

4. **Formulir Identitas Siswa Lengkap:**
   * **Tingkat:** Dropdown pilihan (`X-E`, `XI-F`, atau `XII-F`).
   * **Rombel:** Pilihan 1 s.d. 12.
   * **Nomor Presensi:** Isian angka 1 s.d. 36 (validasi otomatis tanpa angka nol di depan).
   * **Nama Lengkap:** Isian nama lengkap siswa sesuai daftar presensi.

5. **Integrasi Rekapitulasi Nilai Google Sheets:**
   * Terhubung langsung dengan Google Spreadsheet:
     [Spreadsheet Rekap Nilai ATS 2026](https://docs.google.com/spreadsheets/d/1-PVYGcdgjIfEe4zc2P1kYF5PIXXoZAGNRHd3e02Why4/edit?usp=sharing)
   * Kolom data: *Timestamp, Tingkat, Rombel, Presensi, Nama Lengkap, Mode, Skor Benar, Total Soal, Nilai (0-100), Status KKTP (≥ 75), dan Durasi Pengerjaan*.

---

### 📂 Struktur Repositori:

```text
English-Midterm-Test-Sabaku-Odd-2026/
├── index.html               # Halaman utama aplikasi asesmen & formulir peserta
├── style.css                # Desain antarmuka modern, responsif & accessible
├── app.js                   # Mesin soal, audio player, pengacakan opsi, token, & scoring
├── google_apps_script.js    # Backend Google Apps Script untuk Google Sheets sync
└── README.md                # Dokumentasi & panduan teknis
```

---

### 🚀 Cara Menjalankan Aplikasi:
1. Akses secara daring melalui **GitHub Pages**: [https://wiedstone-ai.github.io/English-Midterm-Test-Sabaku-Odd-2026/](https://wiedstone-ai.github.io/English-Midterm-Test-Sabaku-Odd-2026/)
2. Atau jalankan secara luring dengan membuka file `index.html` pada peramban web modern manapun.
3. Audio listening didukung secara native melalui *Web Speech API Voice Synthesis* dan audio player terintegrasi.
