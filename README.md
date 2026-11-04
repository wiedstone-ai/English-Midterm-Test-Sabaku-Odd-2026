# 📚 English Midterm Test Sabaku Odd 2026
## Portal Asesmen Tengah Semester (ATS) & Latihan Mandiri Bahasa Inggris — Semester Gasal 2026/2027
**SMA Negeri 1 Bae Kudus (Sabaku) — Kurikulum Merdeka**

🌐 **Live GitHub Pages URL:** [https://wiedstone-ai.github.io/English-Midterm-Test-Sabaku-Odd-2026/](https://wiedstone-ai.github.io/English-Midterm-Test-Sabaku-Odd-2026/)

Aplikasi web interaktif terpadu berbasis HTML5, CSS3, dan Vanilla JavaScript modern untuk Asesmen Tengah Semester (ATS) dan Latihan Mandiri berbasis **Tes Kemampuan Akademik (TKA / AKM / UTBK)** dengan arsitektur multi-halaman untuk tiap jenjang kelas.

---

### 🏛️ Struktur Arsitektur Multi-Halaman:

1. **Halaman Utama / Portal Identitas:** [`index.html`](file:///c:/Users/LILI/OneDrive%20-%20PDK%20Jateng/Dokumen/English-Midterm-Test-Sabaku-Odd-2026/index.html)
   * Mengumpulkan identitas siswa: *Nama Lengkap, Tingkat Kelas, Rombel (1–12), dan Nomor Presensi (1–36)*.
   * Pemilihan mode pengerjaan (*Mode Latihan Mandiri* atau *Mode Asesmen Resmi*).
   * Verifikasi token pengawas ujian (**`JujurItuMujur`**).
   * Mengarahkan siswa secara otomatis ke ruang ujian tingkat yang dipilih.
   * Menampilkan ringkasan kisi-kisi dan materi semester gasal tiap jenjang.

2. **Ruang Asesmen Kelas X (Fase E):** [`kelas-x.html`](file:///c:/Users/LILI/OneDrive%20-%20PDK%20Jateng/Dokumen/English-Midterm-Test-Sabaku-Odd-2026/kelas-x.html) & [`kelas-x.js`](file:///c:/Users/LILI/OneDrive%20-%20PDK%20Jateng/Dokumen/English-Midterm-Test-Sabaku-Odd-2026/kelas-x.js)
   * **Cakupan Kisi-Kisi Materi Tingkat X Semester Gasal:**
     * **10 Soal Listening:**
       * *Soal 1 s.d. 3:* Listening with Pictures (Vektor visual atlet & situs budaya).
       * *Soal 4 s.d. 6:* Short Dialogues (Aktivitas harian & kebiasaan hidup sehat).
       * *Soal 7 s.d. 10:* Short Talks (Cagar Budaya Menara Kudus & Program Sekolah Adiwiyata).
     * **Teks Deskriptif Otentik:** Atlet bulutangkis nasional (Anthony Sinisuka Ginting), Candi Borobudur, Menara Kudus, dan Taman Nasional Laut Karimunjawa.
     * **Teks Report Ilmiah Faktual:** Satwa langka dilindungi (Komodo, Badak Jawa Ujung Kulon) & Energi Panas Bumi Dataran Tinggi Dieng (PLTP Dieng Jawa Tengah, bukan Gunung Muria).
     * **Grammar in Context:** *Simple Present Tense*, *Present Continuous*, *Adjective Order (OSASCOMP)*, dan *Passive Voice*.
     * **Kosakata Oxford 3000 Level A2:** Kosakata fungsional, praktis, dan komunikatif (menghilangkan istilah arkais/terlalu rumit seperti *verdant*).
     * **Sumber Otentik:** Dicantumkan secara eksplisit pada setiap stimulus wacana.

3. **Ruang Asesmen Kelas XI (Fase F):** [`kelas-xi.html`](file:///c:/Users/LILI/OneDrive%20-%20PDK%20Jateng/Dokumen/English-Midterm-Test-Sabaku-Odd-2026/kelas-xi.html) & [`kelas-xi.js`](file:///c:/Users/LILI/OneDrive%20-%20PDK%20Jateng/Dokumen/English-Midterm-Test-Sabaku-Odd-2026/kelas-xi.js)
   * **Cakupan Kisi-Kisi Materi Tingkat XI Semester Gasal:**
     * *Contemporary Narrative Text* (Cerita Rakyat Nusantara, Dongeng Moral, Nilai Karakter).
     * *Analytical Exposition Text* (Literasi Digital, Lingkungan Hidup, Pola Hidup Sehat).
     * *Grammar & Lexis:* Simple Past, Past Continuous, Causal & Contrast Conjunctions, dan Kosakata Oxford 3000 Level B1.

4. **Ruang Asesmen Kelas XII (Fase F / TL):** [`kelas-xii.html`](file:///c:/Users/LILI/OneDrive%20-%20PDK%20Jateng/Dokumen/English-Midterm-Test-Sabaku-Odd-2026/kelas-xii.html) & [`kelas-xii.js`](file:///c:/Users/LILI/OneDrive%20-%20PDK%20Jateng/Dokumen/English-Midterm-Test-Sabaku-Odd-2026/kelas-xii.js)
   * **Cakupan Kisi-Kisi Materi Tingkat XII Semester Gasal:**
     * *Discussion Text* (Isu Kecerdasan Buatan / AI dalam Pendidikan, Transisi Energi Hijau).
     * *Review & Critical Response Text* (Evaluasi karya literatur dan riset ilmiah).
     * *Grammar & Lexis:* Complex Conditionals (Type 2 & 3), Contrastive Connectors, dan Kosakata Oxford 3000 Level B2.

---

### 🌟 Fitur Keandalan & Integritas:

* **Penyimpanan Lokal Realtime (*LocalStorage Autosave*):**
  * Seluruh progres jawaban (`userAnswers`), tanda ragu-ragu (`flaggedQuestions`), dan sisa waktu timer disimpan secara realtime di `localStorage`.
  * **Anti-Kehilangan Data saat Refresh:** Jika siswa memuat ulang halaman (*refresh/F5*), peramban tertutup, atau koneksi terputus, seluruh jawaban yang telah dipilih dan sisa waktu ujian akan langsung dipulihkan 100%!
* **Pengacakan Pilihan Jawaban (*Fisher-Yates Shuffle*):**
  * Semua opsi pilihan jawaban ($A, B, C, D$) dan butir baris pernyataan matriks diacak secara dinamis pada setiap awal sesi ujian baru.
  * Kunci jawaban dan rujukan pembahasan (*explanation*) otomatis tersinkronisasi.
* **Integrasi Google Sheets & Cadangan CSV:**
  * Terhubung secara otomatis ke Google Spreadsheet internal melalui Google Apps Script Web App terenkripsi.
  * Tautan spreadsheet bersifat rahasia (*private*) dan tidak ditampilkan di sisi siswa demi privasi dan keamanan data rekapitulasi.
  * Dilengkapi tombol **"📥 Unduh Rekap Nilai CSV"** pada modal hasil akhir sebagai opsi cadangan penyimpanan lokal.

---

### 📂 Struktur Berkas Repositori:

```text
English-Midterm-Test-Sabaku-Odd-2026/
├── index.html               # Portal utama pengisian identitas peserta & router kelas
├── style.css                # Desain CSS responsif, kisi-kisi accordion, & badge
├── kelas-x.html             # Ruang ujian khusus Tingkat X (Fase E)
├── kelas-x.js               # Mesin soal, autosave, audio, dan penilaian Kelas X
├── kelas-xi.html            # Ruang ujian khusus Tingkat XI (Fase F)
├── kelas-xi.js              # Mesin soal, autosave, audio, dan penilaian Kelas XI
├── kelas-xii.html           # Ruang ujian khusus Tingkat XII (Fase F / TL)
├── kelas-xii.js             # Mesin soal, autosave, audio, dan penilaian Kelas XII
├── google_apps_script.js    # Backend Google Apps Script untuk Google Sheets sync
└── README.md                # Dokumentasi teknis & panduan operasional
```

---

### 🚀 Cara Menjalankan:
1. **Online (GitHub Pages):** Kunjungi [https://wiedstone-ai.github.io/English-Midterm-Test-Sabaku-Odd-2026/](https://wiedstone-ai.github.io/English-Midterm-Test-Sabaku-Odd-2026/)
2. **Offline:** Buka `index.html` pada browser modern (Google Chrome, Microsoft Edge, Safari, Firefox).
