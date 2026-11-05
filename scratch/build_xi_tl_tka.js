// -*- coding: utf-8 -*-
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function run() {
  const rootDir = path.resolve('.');
  const code = fs.readFileSync(path.join(rootDir, 'kelas-xi-tl-asas.js'), 'utf-8');

  // Extract getGrade11TLAsasQuestions function
  const fnMatch = code.match(/function getGrade11TLAsasQuestions\(\)[\s\S]*?\n\}/);
  if (!fnMatch) {
    console.error('Could not find getGrade11TLAsasQuestions in kelas-xi-tl-asas.js');
    return;
  }

  const mockContext = {
    SVG_PICTURES: {
      digitalManuscript: '___SVG_PICTURES.digitalManuscript___',
      amphitheaterDrama: '___SVG_PICTURES.amphitheaterDrama___',
      climateObservatory: '___SVG_PICTURES.climateObservatory___',
      oilRefinery: '___SVG_PICTURES.oilRefinery___'
    }
  };
  vm.createContext(mockContext);
  vm.runInContext(fnMatch[0], mockContext);
  const rawQuestions = mockContext.getGrade11TLAsasQuestions();

  console.log('XI-TL questions loaded:', rawQuestions.length);

  // We will build full 40 TKA questions:
  // Q1-Q10: Listening (from rawQuestions)
  // Q11-Q15: Reading Text 1 Rawa Pening (Single Choice)
  // Q16-Q20: Pilihan Ganda Kompleks (Matrix True/False)
  // Q21-Q25: MCMA (Checkboxes, choose 2)
  // Q26-Q40: Reading Text 2 & Grammar (Single Choice)

  const questions = [];

  // Q1-Q15
  for (let i = 0; i < 15; i++) {
    questions.push(rawQuestions[i]);
  }

  // Q16-Q20: Complex Matrix Questions (TKA True/False Table)
  const matrixQuestions = [
    {
      id: 16,
      source: "Sumber: Kajian Cerita Rakyat Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Evaluasi Fakta Cerita Rawa Pening",
      stimulusTitle: "Evaluasi Kritis: The Legend of Rawa Pening",
      stimulusBody: "Tentukan apakah setiap pernyataan berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong> berdasarkan isi cerita rakyat Rawa Pening:",
      prompt: "Berdasarkan Teks 1, tentukan nilai kebenaran dari masing-masing pernyataan berikut:",
      matrixStatements: [
        { statement: "Baru Klinthing dihina dan diusir oleh warga Desa Pathok karena rupa fisik dan pakaiannya yang compang-camping.", isCorrect: true },
        { statement: "Mbok Rondo menolak memberikan makanan kepada Baru Klinthing karena ia juga sedang kekurangan beras.", isCorrect: false },
        { statement: "Tidak ada seorang pun pria terkuat di desa yang sanggup mencabut lidi yang ditancapkan Baru Klinthing.", isCorrect: true },
        { statement: "Seluruh warga desa yang sombong berhasil menyelamatkan diri ke puncak Gunung Telomoyo saat air bah datang.", isCorrect: false }
      ],
      explanation: "1) BENAR (diusir karena rupa fisik). 2) SALAH (Mbok Rondo menyambut hangat dan memberi makan). 3) BENAR (tidak ada yang sanggup mencabut). 4) SALAH (warga tenggelam dan hanya Mbok Rondo yang selamat di atas lesung).",
      grammarNote: "Factual Verification & Narrative Detail Identification (TKA Standard)."
    },
    {
      id: 17,
      source: "Sumber: Analisis Unsur Sastra Naratif Nusantara — Balai Bahasa Provinsi Jawa Tengah",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Fitur Kebahasaan & Majas Naratif",
      stimulusTitle: "Analisis Majas & Struktur Naratif",
      stimulusBody: "Tentukan apakah analisis kebahasaan berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
      prompt: "Analisis kebenaran kaidah sastra dan kebahasaan pada butir-butir pernyataan berikut:",
      matrixStatements: [
        { statement: "Frasa 'water gushed forth from the hole like a powerful fountain' menggunakan majas Simile (perumpamaan dengan kata 'like').", isCorrect: true },
        { statement: "Karakter Mbok Rondo berfungsi sebagai 'foil' (penegas kontras moral) terhadap keangkuhan para warga desa yang kaya.", isCorrect: true },
        { statement: "Kata 'effortlessly' pada kalimat 'pulled the stick out effortlessly' berfungsi sebagai kata sifat (adjective) yang menerangkan kata benda 'stick'.", isCorrect: false },
        { statement: "Bagian tenggelamnya desa menjadi danau Rawa Pening merupakan tahap 'Orientation' dalam struktur generik teks naratif.", isCorrect: false }
      ],
      explanation: "1) BENAR (Simile dengan 'like'). 2) BENAR (Karakter foil penegas kontras moral). 3) SALAH ('effortlessly' berakhiran -ly adalah adverb of manner yang menerangkan kata kerja 'pulled'). 4) SALAH (bagian tersebut adalah Resolution, bukan Orientation).",
      grammarNote: "Literary Devices (Simile, Character Foil) and Narrative Generic Structure."
    },
    {
      id: 18,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Kaidah Inversi Bahasa Inggris (Negative Inversion)",
      stimulusTitle: "Kaidah Inversi dengan Adverbial Negatif / Pembatas",
      stimulusBody: "Inversi terjadi ketika kalimat diawali adverbial negatif/pembatas seperti Rarely, Seldom, atau Scarcely (Adverbial + Auxiliary + Subject + Main Verb).",
      prompt: "Tentukan apakah formulasi kalimat inversi berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
      matrixStatements: [
        { statement: "'Rarely do students achieve high literacy scores without consistent reading habits.'", isCorrect: true },
        { statement: "'Seldom the arrogant villagers listened to the wise advice of the elderly widow.'", isCorrect: false },
        { statement: "'Not only did Baru Klinthing expose their false pride, but he also revealed the power of nature.'", isCorrect: true },
        { statement: "'Hardly had the stick been pulled when clear water gushing from the soil.'", isCorrect: false }
      ],
      explanation: "1) BENAR (Rarely + do + students + achieve). 2) SALAH (harus inversi: 'Seldom did the arrogant villagers listen...'). 3) BENAR (Not only + did + Subject + Base Verb). 4) SALAH (klausa kedua harus 'gushed' bentuk lampau teratur).",
      grammarNote: "Mastery of Inversion after Restrictive Adverbials (CEFR B2)."
    },
    {
      id: 19,
      source: "Sumber: Panduan Pemanfaatan Etis AI untuk Siswa — BSKAP Kemendikbudristek",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Argumen Teks Hortatori AI",
      stimulusTitle: "Evaluasi Argumen Teks: Using AI Responsibly in Learning",
      stimulusBody: "Tentukan apakah pernyataan berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong> berdasarkan wacana eksposisi hortatori pada Teks 2:",
      prompt: "Berdasarkan Teks 2, tentukan nilai kebenaran dari masing-masing pernyataan argumentatif berikut:",
      matrixStatements: [
        { statement: "Penulis menyarankan agar sekolah melarang secara mutlak seluruh penggunaan teknologi kecerdasan buatan.", isCorrect: false },
        { statement: "Menulis esai dengan kata-kata sendiri merupakan sarana penting untuk melatih kemandirian berpikir kritis.", isCorrect: true },
        { statement: "Model AI dapat menghasilkan informasi yang keliru (halusinasi) karena ia menyusun kata berdasarkan pola statistik internet.", isCorrect: true },
        { statement: "Siswa dianjurkan untuk langsung menyalin jawaban dari AI tanpa perlu memverifikasi ke buku teks atau penjelasan guru.", isCorrect: false }
      ],
      explanation: "1) SALAH (penulis menolak pelarangan mutlak dan menyarankan pendekatan seimbang). 2) BENAR (menulis mandiri melatih daya kritis). 3) BENAR (AI bekerja berdasarkan pola statistik sehingga bisa membuat kesalahan). 4) SALAH (siswa wajib memverifikasi jawaban AI).",
      grammarNote: "Critical Argument Analysis in Hortatory Exposition (TKA Hot Skills)."
    },
    {
      id: 20,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Modus Subjungtif (Mandative Subjunctive)",
      stimulusTitle: "Kaidah Subjungtif Formal (Present Subjunctive)",
      stimulusBody: "Setelah kata kerja rekomendasi formal (recommend, demand, insist) + that + Subject, kata kerja berbentuk Bare Infinitive (bentuk dasar tanpa akhiran -s).",
      prompt: "Tentukan apakah susunan kalimat subjungtif berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
      matrixStatements: [
        { statement: "The school guidelines recommend that every learner check online facts before quoting them.", isCorrect: true },
        { statement: "The teacher insisted that the student submits his original essay without plagiarism.", isCorrect: false },
        { statement: "It is essential that each student verify artificial intelligence responses carefully.", isCorrect: true },
        { statement: "The principal demands that smartphones are banned permanently from the campus.", isCorrect: false }
      ],
      explanation: "1) BENAR (that every learner check - V1 dasar). 2) SALAH (harus 'submit', bukan 'submits'). 3) BENAR (that each student verify - V1 dasar). 4) SALAH (harus subjunctive 'be banned', bukan 'are banned').",
      grammarNote: "Mandative Subjunctive in Academic Register (CEFR B2)."
    }
  ];

  matrixQuestions.forEach(q => questions.push(q));

  // Q21-Q25: MCMA Checkbox Questions (Pilih 2 Opsi yang Tepat)
  const mcmaQuestions = [
    {
      id: 21,
      source: "Sumber: Kajian Cerita Rakyat Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Nilai Moral Cerita Rakyat Rawa Pening",
      stimulusBody: "Cerita rakyat Rawa Pening mengandung banyak amanat luhur yang relevan bagi pendidikan budi pekerti remaja masa kini.",
      prompt: "Manakah <strong>DUA (2)</strong> nilai moral utama yang diajarkan melalui kisah Baru Klinthing dan Mbok Rondo?",
      options: [
        { key: "A", text: "Menghargai sesama manusia dengan ketulusan dan kerendahan hati tanpa memandang rupa fisik atau status harta." },
        { key: "B", text: "Menuntut imbalan emas setiap kali menolong musafir yang tersesat di desa." },
        { key: "C", text: "Kesombongan dan keangkuhan sosial pada akhirnya akan mendatangkan kerugian dan penyesalan bagi diri sendiri." },
        { key: "D", text: "Menolak seluruh perayaan panen padi di lingkungan masyarakat pedesaan." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua nilai moral utama cerita adalah: (A) menghargai orang lain dengan kerendahan hati tanpa memandang rupa, dan (C) kesombongan pada akhirnya membawa kerugian bagi diri sendiri. Pilihan B dan D tidak sesuai dengan pesan moral cerita.",
      grammarNote: "Multi-Perspective Moral Synthesis in Narrative Texts."
    },
    {
      id: 22,
      source: "Sumber: Adaptasi Kebijakan Etika AI dalam Pendidikan — UNESCO & Kemendikbudristek",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Dampak Negatif Ketergantungan Berlebih pada AI",
      stimulusBody: "Berdasarkan argumen pada Teks 2 (Using Artificial Intelligence Responsibly in High School Learning), ketergantungan berlebih pada AI membawa risiko bagi pelajar.",
      prompt: "Manakah <strong>DUA (2)</strong> dampak negatif ketergantungan penuh pada alat teks otomatis yang diungkapkan penulis?",
      options: [
        { key: "A", text: "Biaya langganan jaringan internet sekolah akan mengalami kenaikan drastis setiap bulan." },
        { key: "B", text: "Kemampuan nalar mandiri dan ketahanan berpikir kritis siswa akan berangsur-angsur melemah." },
        { key: "C", text: "Seluruh buku pelajaran fisik di perpustakaan sekolah akan hilang dalam sepekan." },
        { key: "D", text: "Siswa berisiko menyebarkan informasi palsu atau keliru karena tidak memverifikasi sumber data." }
      ],
      correctAnswer: ["B", "D"],
      explanation: "Dua risiko utama yang diuraikan pada teks adalah: (B) melemahnya daya nalar dan berpikir kritis siswa, serta (D) risiko mengumpulkan atau menyebarkan fakta keliru akibat halusinasi AI yang tidak dicek ulang.",
      grammarNote: "Argumentative Risk Identification in Hortatory Exposition."
    },
    {
      id: 23,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Identifikasi Kalimat Inversi Gramatikal",
      stimulusBody: "Pilihlah kalimat yang menggunakan kaidah Inversi Bahasa Inggris secara tepat dan baku menurut standar CEFR B2.",
      prompt: "Manakah <strong>DUA (2)</strong> kalimat di bawah ini yang menerapkan aturan inversi gramatikal dengan benar?",
      options: [
        { key: "A", text: "Seldom have researchers witnessed such rapid evolution in educational technology as we see today." },
        { key: "B", text: "Barely the alarm rang when the students entered the examination hall." },
        { key: "C", text: "Only yesterday the headmaster has warned all candidates about exam regulations." },
        { key: "D", text: "Under no circumstances should learners submit unverified automated text as their original work." }
      ],
      correctAnswer: ["A", "D"],
      explanation: "Kalimat A ('Seldom have researchers witnessed...') dan kalimat D ('Under no circumstances should learners submit...') menerapkan pola inversi baku (Negative Adverbial + Auxiliary + Subject + Verb). Kalimat B dan C tidak menginversi auxiliary.",
      grammarNote: "Identification of Formal Negative Inversion Structures."
    },
    {
      id: 24,
      source: "Sumber: Panduan Literasi Digital Remaja — Balai Pengembangan Talenta Indonesia",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Penerapan Praktis Penggunaan AI yang Bertanggung Jawab",
      stimulusBody: "Pelajar SMA diharapkan mampu menjadi pengguna teknologi cerdas yang berintegritas tinggi.",
      prompt: "Manakah <strong>DUA (2)</strong> contoh tindakan yang mencerminkan pemanfaatan kecerdasan buatan secara etis dan bertanggung jawab oleh siswa?",
      options: [
        { key: "A", text: "Menyalin seluruh esai dari aplikasi AI lima menit sebelum tenggat waktu pengumpulan." },
        { key: "B", text: "Menggunakan AI untuk membantu menjelaskan konsep ilmiah yang rumit, lalu menyusun rangkuman sendiri." },
        { key: "C", text: "Melakukan verifikasi silang terhadap data yang diberikan AI dengan memeriksa buku teks rujukan." },
        { key: "D", text: "Membiarkan AI menyelesaikan seluruh soal ulangan harian secara daring tanpa membaca soalnya." }
      ],
      correctAnswer: ["B", "C"],
      explanation: "Tindakan B (menggunakan AI sebagai tutor penjelas konsep lalu merangkum sendiri) dan C (memverifikasi data AI dengan buku teks) merupakan wujud nyata pemanfaatan AI yang bertanggung jawab dan berintegritas.",
      grammarNote: "Applied Ethics in Educational Technology (Hortatory Recommendation)."
    },
    {
      id: 25,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Kaidah Kata Hubung Konsesif (Concession Connectors)",
      stimulusBody: "Konjungsi konsesif (seperti Although, Even though, Despite the fact that) digunakan untuk menghubungkan dua klausa yang bertentangan secara logis.",
      prompt: "Manakah <strong>DUA (2)</strong> kalimat di bawah ini yang menggunakan kata hubung konsesif secara tepat dan gramatikal?",
      options: [
        { key: "A", text: "Although the assignment was intellectually demanding, the students finished it successfully through teamwork." },
        { key: "B", text: "Even though Mbok Rondo lived in a modest wooden hut, she shared her warm food with true generosity." },
        { key: "C", text: "Despite the boy was exhausted and hungry, but the villagers chased him away." },
        { key: "D", text: "In spite of the weather was rainy, the harvest festival proceeded joyfully." }
      ],
      correctAnswer: ["A", "B"],
      explanation: "Kalimat A dan B menggunakan 'Although' dan 'Even though' yang diikuti oleh klausa lengkap (Subject + Verb) secara gramatikal. Kalimat C dan D salah karena 'Despite' dan 'In spite of' tidak boleh langsung diikuti klausa tanpa 'the fact that' dan tidak boleh digabung dengan 'but'.",
      grammarNote: "Concessive Connectors: Although / Even though + Clause vs Despite / In spite of + Noun."
    }
  ];

  mcmaQuestions.forEach(q => questions.push(q));

  // Q26-Q40: Reading Text 2 (Responsible AI) & Grammar (Single Choice)
  // Let's take the single-choice questions from rawQuestions (formerly 21-30 and 31-40)
  // We need 15 questions for Q26-Q40:
  // We can take rawQuestions[20] to rawQuestions[34] (which are the AI reading & grammar questions!)
  const scRest = [
    // Q26: Communicative purpose of AI text (formerly Q21)
    Object.assign({}, rawQuestions[20], { id: 26 }),
    // Q27: Thesis statement of AI text (formerly Q22)
    Object.assign({}, rawQuestions[21], { id: 27 }),
    // Q28: Cognitive exercise of writing (formerly Q23)
    Object.assign({}, rawQuestions[22], { id: 28 }),
    // Q29: Contextual lexis 'relying' (formerly Q24)
    Object.assign({}, rawQuestions[23], { id: 29 }),
    // Q30: Cause & effect AI hallucination (formerly Q25)
    Object.assign({}, rawQuestions[24], { id: 30 }),
    // Q31: Negative Inversion (formerly Q31)
    Object.assign({}, rawQuestions[30], { id: 31 }),
    // Q32: Present Subjunctive (formerly Q32)
    Object.assign({}, rawQuestions[31], { id: 32 }),
    // Q33: Concessive connector (formerly Q33)
    Object.assign({}, rawQuestions[32], { id: 33 }),
    // Q34: Inverted Conditional Type 3 (formerly Q34)
    Object.assign({}, rawQuestions[33], { id: 34 }),
    // Q35: Modal passive (formerly Q35)
    Object.assign({}, rawQuestions[34], { id: 35 }),
    // Q36: Impersonal passive (formerly Q36)
    Object.assign({}, rawQuestions[35], { id: 36 }),
    // Q37: Perfect participle (formerly Q37)
    Object.assign({}, rawQuestions[36], { id: 37 }),
    // Q38: Cause connector (formerly Q38)
    Object.assign({}, rawQuestions[37], { id: 38 }),
    // Q39: Academic collocation (formerly Q39)
    Object.assign({}, rawQuestions[38], { id: 39 }),
    // Q40: Correlative inversion (formerly Q40)
    Object.assign({}, rawQuestions[39], { id: 40 })
  ];

  scRest.forEach(q => questions.push(q));

  // Now, balance single-choice answer keys across A, B, C, D (30 SC questions total)!
  // Exactly 7-8 of A, 7-8 of B, 7-8 of C, 7-8 of D:
  const targetSC = {
    1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'A', 6: 'B', 7: 'C', 8: 'D', 9: 'A', 10: 'B',
    11: 'C', 12: 'D', 13: 'A', 14: 'B', 15: 'C',
    26: 'D', 27: 'A', 28: 'B', 29: 'C', 30: 'D',
    31: 'A', 32: 'B', 33: 'C', 34: 'D', 35: 'A', 36: 'B', 37: 'C', 38: 'D', 39: 'A', 40: 'B'
  };

  questions.forEach(q => {
    if (q.type !== 'complex_matrix' && q.type !== 'mcma') {
      const tgt = targetSC[q.id];
      if (tgt && q.correctAnswer && Array.isArray(q.options) && q.options.length === 4) {
        swapSC(q, q.correctAnswer, tgt);
      }
    }
  });

  // Check distribution
  const scAns = questions.filter(q => q.type !== 'complex_matrix' && q.type !== 'mcma').map(q => q.correctAnswer);
  const scCounts = {};
  scAns.forEach(a => scCounts[a] = (scCounts[a] || 0) + 1);
  console.log('XI-TL Single Choice Distribution:', scCounts);

  // Render question bank JS string
  let qJson = JSON.stringify(questions, null, 2);
  qJson = qJson.replace(/"___SVG_PICTURES\.(\w+)___"/g, 'SVG_PICTURES.$1');

  const svgCode = `const SVG_PICTURES = {
  digitalManuscript: \`<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="22" width="64" height="46" rx="4" fill="#eff6ff" stroke="#2563eb"/><circle cx="50" cy="45" r="14" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3 3"/><line x1="50" y1="36" x2="50" y2="54" stroke="#1d4ed8"/><line x1="41" y1="45" x2="59" y2="45" stroke="#1d4ed8"/><path d="M26 32h14M26 38h10M60 52h14M60 58h10" stroke="#93c5fd"/><path d="M30 76l20-8 20 8" stroke="#475569" stroke-width="2"/><line x1="50" y1="68" x2="50" y2="84" stroke="#475569" stroke-width="3"/></svg>\`,
  amphitheaterDrama: \`<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 75c8-18 36-24 76 0" stroke="#78350f" stroke-width="3"/><path d="M22 62c6-14 28-18 56 0" stroke="#b45309" stroke-dasharray="2 2"/><polygon points="50,15 35,45 65,45" fill="#fef3c7" stroke="#d97706"/><circle cx="50" cy="30" r="5" fill="#d97706"/><path d="M38 48h24v20H38z" fill="#fef9c3" stroke="#ca8a04"/><path d="M42 48v20M58 48v20" stroke="#b45309"/><line x1="15" y1="84" x2="85" y2="84" stroke="#64748b"/></svg>\`,
  climateObservatory: \`<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 85c15-8 30-14 70-4" stroke="#16a34a" stroke-width="3"/><path d="M35 80V50c0-12 12-22 25-22s25 10 25 22v30H35z" fill="#ecfdf5" stroke="#059669"/><path d="M50 28v-12M42 16h16" stroke="#047857" stroke-width="2"/><circle cx="60" cy="46" r="6" fill="#fef08a" stroke="#ca8a04"/><line x1="60" y1="40" x2="75" y2="28" stroke="#0284c7" stroke-width="2.5"/><circle cx="75" cy="28" r="3" fill="#0284c7"/></svg>\`,
  oilRefinery: \`<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="50" width="30" height="35" fill="#f1f5f9"/><rect x="55" y="40" width="25" height="45" fill="#e2e8f0"/><line x1="35" y1="50" x2="35" y2="25" stroke="#64748b" stroke-width="2.5"/><line x1="68" y1="40" x2="68" y2="20" stroke="#64748b" stroke-width="2.5"/><path d="M30 20c3-5 7-5 10 0M63 15c3-5 7-5 10 0" stroke="#94a3b8"/></svg>\`
};`;

  const engineAsas = buildEngineCode('ASAS Gasal Tingkat Lanjut', 'XI-TL', 'Kelas XI Tingkat Lanjut', 'sabaku_asas_progress_XI_TL', 'practice', false);
  const engineAsts = buildEngineCode('ASTS Gasal Tingkat Lanjut', 'XI-TL', 'Kelas XI Tingkat Lanjut', 'sabaku_asts_progress_XI_TL', 'exam', true);

  const contentAsas = `/**
 * ASESMEN SUMATIF AKHIR SEMESTER (ASAS) GASAL & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT LANJUT — TINGKAT XI (FASE F - TL)
 * Standar: TKA & AKM Literasi (Pilihan Ganda Biasa, Kompleks Matrix, & MCMA - Max CEFR B2)
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

${svgCode}

function getGrade11TLAsasQuestions() {
  return ${qJson};
}

${engineAsas}
`;

  const contentAsts = `/**
 * ASESMEN SUMATIF TENGAH SEMESTER (ASTS) GASAL 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT LANJUT — TINGKAT XI (FASE F - TL)
 * Standar: TKA & AKM Literasi (Pilihan Ganda Biasa, Kompleks Matrix, & MCMA - Max CEFR B2)
 * Dilengkapi Verifikasi Password ASTS Terpadu
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

${svgCode}

function getGrade11TLAstsQuestions() {
  return ${qJson};
}

${engineAsts}
`;

  fs.writeFileSync(path.join(rootDir, 'kelas-xi-tl-asas.js'), contentAsas, 'utf-8');
  fs.writeFileSync(path.join(rootDir, 'kelas-xi-tl-asts.js'), contentAsts, 'utf-8');
  console.log('kelas-xi-tl-asas.js and kelas-xi-tl-asts.js built successfully!');
}

function swapSC(q, oldKey, newKey) {
  if (oldKey === newKey) return;
  const optOld = q.options.find(o => o.key === oldKey);
  const optNew = q.options.find(o => o.key === newKey);
  if (!optOld || !optNew) return;

  ['text', 'svg', 'label'].forEach(f => {
    const vo = optOld[f];
    const vn = optNew[f];
    if (vn !== undefined) optOld[f] = vn; else delete optOld[f];
    if (vo !== undefined) optNew[f] = vo; else delete optNew[f];
  });
  q.correctAnswer = newKey;
}

function buildEngineCode(testType, gradeCode, gradeName, storageKey, defaultMode, isAsts) {
  // Use the same engine builder logic
  let authGuard = "";
  let initAuth = "";
  if (isAsts) {
    authGuard = `
// ASTS Authentication Guard
function checkAstsAuth() {
  const auth = sessionStorage.getItem("sabaku_asts_auth");
  if (!auth) {
    alert("Halaman ini memerlukan verifikasi password ASTS. Anda akan dialihkan ke halaman verifikasi.");
    window.location.href = "masuk-asts.html";
    return false;
  }
  return true;
}
`;
    initAuth = "if (!checkAstsAuth()) return;";
  }

  const modePractice = "🎯 Mode Latihan " + testType;
  const modeExam = "📝 Asesmen Resmi " + testType;

  return `
${authGuard}

let studentIdentity = {
  tingkat: "${gradeCode}",
  rombel: "1",
  presensi: "1",
  nama: "Siswa ${gradeName}"
};

let currentMode = "${defaultMode}";
let currentQuestionIndex = 0;
let userAnswers = {};
let flaggedQuestions = new Set();
let timerInterval = null;
let remainingSeconds = 90 * 60;
let isExamSubmitted = false;
let audioSpeechRate = 1.0;
let questions = [];

function randomizeQuestionOptions(rawQuestions) {
  return rawQuestions.map(q => {
    const cloned = JSON.parse(JSON.stringify(q));
    if (cloned.type === "complex_matrix" && Array.isArray(cloned.matrixStatements)) {
      const stmts = [...cloned.matrixStatements];
      for (let i = stmts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [stmts[i], stmts[j]] = [stmts[j], stmts[i]];
      }
      cloned.matrixStatements = stmts;
    } else if (Array.isArray(cloned.options) && cloned.options.length > 0 && !cloned.options[0].svg) {
      const opts = [...cloned.options];
      const isMCMA = cloned.type === "mcma" && Array.isArray(cloned.correctAnswer);
      const originalCorrect = isMCMA ? [...cloned.correctAnswer] : cloned.correctAnswer;
      for (let i = opts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opts[i], opts[j]] = [opts[j], opts[i]];
      }
      const alphabet = ["A", "B", "C", "D", "E"];
      const keyMap = {};
      cloned.options = opts.map((opt, idx) => {
        keyMap[opt.key] = alphabet[idx];
        return {
          key: alphabet[idx],
          text: opt.text
        };
      });
      if (isMCMA) {
        cloned.correctAnswer = originalCorrect.map(k => keyMap[k] || k).sort();
      } else if (typeof cloned.correctAnswer === "string") {
        cloned.correctAnswer = keyMap[cloned.correctAnswer] || cloned.correctAnswer;
      }
    }
    return cloned;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  ${initAuth}
  initStudentData();
});

function initStudentData() {
  try {
    const rawPortal = localStorage.getItem("sabaku_current_student");
    if (rawPortal) {
      const portalData = JSON.parse(rawPortal);
      studentIdentity = {
        tingkat: portalData.tingkat || "${gradeCode}",
        rombel: portalData.rombel || "1",
        presensi: portalData.presensi || "1",
        nama: portalData.nama || "Siswa ${gradeName}"
      };
      currentMode = portalData.mode || "${defaultMode}";
      startFreshTest();
      return;
    }
  } catch (e) {
    console.warn("Portal data error:", e);
  }
  document.getElementById("identity-prompt-modal").style.display = "flex";
}

function handleDirectIdentitySubmit(e) {
  e.preventDefault();
  const nama = document.getElementById("direct-nama").value.trim();
  const rombel = document.getElementById("direct-rombel").value;
  const presensi = document.getElementById("direct-presensi").value.trim();
  const mode = document.getElementById("direct-mode").value;
  studentIdentity = { tingkat: "${gradeCode}", rombel, presensi, nama };
  currentMode = mode;
  document.getElementById("identity-prompt-modal").style.display = "none";
  startFreshTest();
}

function validateDirectPresensi(input) {
  let val = input.value.replace(/\\D/g, "");
  if (val.startsWith("0")) val = val.replace(/^0+/, "");
  let num = parseInt(val, 10);
  if (num > 36) val = "36";
  input.value = val;
}

function toggleDirectToken(mode) {}

function startFreshTest() {
  userAnswers = {};
  flaggedQuestions.clear();
  isExamSubmitted = false;
  remainingSeconds = 90 * 60;
  currentQuestionIndex = 0;

  const rawBank = (typeof getGrade11TLAsasQuestions === "function") ? getGrade11TLAsasQuestions() :
                  (typeof getGrade11TLAstsQuestions === "function") ? getGrade11TLAstsQuestions() : [];

  questions = randomizeQuestionOptions(rawBank);

  try {
    const saved = localStorage.getItem("${storageKey}");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.userAnswers) userAnswers = parsed.userAnswers;
      if (parsed.flaggedQuestions) flaggedQuestions = new Set(parsed.flaggedQuestions);
      if (parsed.remainingSeconds) remainingSeconds = parsed.remainingSeconds;
      if (parsed.currentIndex !== undefined) currentQuestionIndex = parsed.currentIndex;
    }
  } catch (err) {
    console.warn("Progress restore warning:", err);
  }

  applyStudentMetadata();
  buildNavigatorGrid();
  startTimer();
  renderQuestion(currentQuestionIndex);
  saveProgressToLocalStorage();
}

function applyStudentMetadata() {
  const modeBadge = document.getElementById("nav-mode-badge");
  modeBadge.textContent = (currentMode === "practice") ? "${modePractice}" : "${modeExam}";
  modeBadge.className = "badge-mode " + (currentMode === "practice" ? "practice" : "exam");
  document.getElementById("side-student-name").textContent = studentIdentity.nama;
  document.getElementById("side-student-meta").textContent = \`${gradeName} | Rombel \${studentIdentity.rombel} | Presensi \${studentIdentity.presensi}\`;
}

function toggleKisiKisiContent() {
  const body = document.getElementById("kisi-kisi-body");
  const icon = document.getElementById("kisi-toggle-icon");
  if (body.style.display === "none") {
    body.style.display = "block";
    icon.textContent = "▲ Sembunyikan Kisi-Kisi";
  } else {
    body.style.display = "none";
    icon.textContent = "▼ Buka Kisi-Kisi Lengkap";
  }
}

function toggleKisiKisiModal() {
  const body = document.getElementById("kisi-kisi-body");
  body.style.display = "block";
  document.getElementById("kisi-toggle-icon").textContent = "▲ Sembunyikan Kisi-Kisi";
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildNavigatorGrid() {
  const grid = document.getElementById("question-navigator-grid");
  grid.innerHTML = "";
  questions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "q-num-btn";
    btn.id = \`nav-btn-\${idx}\`;
    btn.textContent = idx + 1;
    btn.onclick = () => renderQuestion(idx);
    grid.appendChild(btn);
  });
  updateNavigatorStatus();
}

function updateNavigatorStatus() {
  questions.forEach((q, idx) => {
    const btn = document.getElementById(\`nav-btn-\${idx}\`);
    if (!btn) return;
    btn.classList.remove("active", "answered", "doubtful");
    if (idx === currentQuestionIndex) btn.classList.add("active");
    if (flaggedQuestions.has(idx)) btn.classList.add("doubtful");
    else if (isQuestionAnswered(q.id)) btn.classList.add("answered");
  });
}

function isQuestionAnswered(qId) {
  const ans = userAnswers[qId];
  if (ans === undefined || ans === null) return false;
  if (Array.isArray(ans)) return ans.length > 0;
  if (typeof ans === "object") return Object.keys(ans).length > 0;
  return ans !== "";
}

function renderQuestion(index) {
  if (index < 0 || index >= questions.length) return;
  currentQuestionIndex = index;
  const q = questions[index];
  stopAudio();

  document.getElementById("q-number-badge").textContent = \`Soal No. \${q.id} dari \${questions.length}\`;
  document.getElementById("q-type-badge").textContent = q.title || "Pilihan Ganda";

  const listeningBox = document.getElementById("listening-container");
  if (q.audioText || (q.audioSegments && q.audioSegments.length > 0)) {
    listeningBox.style.display = "block";
    document.getElementById("audio-status-text").textContent = "Klik 'Putar Audio' untuk menyimak wacana otentik.";
  } else {
    listeningBox.style.display = "none";
  }

  const stimBox = document.getElementById("stimulus-container");
  if (q.stimulusBody && q.type !== "listening_pictures") {
    stimBox.style.display = "block";
    document.getElementById("stimulus-title").textContent = q.stimulusTitle || "Teks Stimulus";
    document.getElementById("stimulus-body").innerHTML = q.stimulusBody;
    const srcEl = document.getElementById("stimulus-source");
    if (srcEl) {
      if (q.source) {
        srcEl.style.display = "block";
        srcEl.innerHTML = \`📌 <strong>\${q.source}</strong>\`;
      } else {
        srcEl.style.display = "none";
      }
    }
  } else {
    stimBox.style.display = "none";
  }

  const promptBox = document.getElementById("question-prompt-text");
  let srcBadge = "";
  if (q.source) {
    srcBadge = \`<div class="source-citation" style="margin-top: 10px; font-size: 0.8rem; color: #475569; background: #f8fafc; border-left: 3.5px solid var(--accent-teal); padding: 6px 12px; border-radius: 4px; font-style: italic;">
      📌 <strong>\${q.source}</strong>
    </div>\`;
  }
  promptBox.innerHTML = q.prompt + srcBadge;

  const optContainer = document.getElementById("options-container");
  optContainer.innerHTML = "";

  if (q.type === "listening_pictures") {
    renderPictureChoices(q, optContainer);
  } else if (q.type === "complex_matrix") {
    renderMatrixTable(q, optContainer);
  } else if (q.type === "mcma") {
    renderMCMACheckboxes(q, optContainer);
  } else {
    renderSingleChoices(q, optContainer);
  }

  const expBox = document.getElementById("question-explanation-box");
  if (isExamSubmitted || (currentMode === "practice" && isQuestionAnswered(q.id))) {
    expBox.style.display = "block";
    let keyBadge = "";
    if (q.type === "complex_matrix") {
      keyBadge = q.matrixStatements.map((s, i) => \`Pernyataan \${i+1}: <strong>\${s.isCorrect ? 'BENAR (TRUE)' : 'SALAH (FALSE)'}</strong>\`).join(" | ");
    } else if (Array.isArray(q.correctAnswer)) {
      keyBadge = q.correctAnswer.join(", ");
    } else {
      keyBadge = q.correctAnswer;
    }

    document.getElementById("explanation-text").innerHTML = \`
      <div style="margin-bottom: 10px; padding: 6px 12px; background: #ecfdf5; border: 1.5px solid #a7f3d0; border-radius: 8px; color: #065f46; font-size: 0.95rem; display: inline-block;">
        🔑 <strong>Kunci Jawaban:</strong> <span style="font-weight: 800; color: #047857; margin-left: 4px;">\${keyBadge}</span>
      </div>
      <div>\${q.explanation}</div>
    \`;
    document.getElementById("explanation-meta-text").innerHTML = \`<strong>Kaidah &amp; Kosakata:</strong> \${q.grammarNote || "-"}\`;
  } else {
    expBox.style.display = "none";
  }

  const flagBtn = document.getElementById("btn-flag-q");
  if (flaggedQuestions.has(index)) flagBtn.textContent = "🔄 Hapus Ragu";
  else flagBtn.textContent = "🟡 Ragu-ragu";

  document.getElementById("btn-prev-q").disabled = (index === 0);
  document.getElementById("btn-next-q").disabled = (index === questions.length - 1);
  document.getElementById("btn-submit-test").style.display = (index === questions.length - 1) ? "inline-flex" : "none";

  updateNavigatorStatus();
  saveProgressToLocalStorage();
}

function renderPictureChoices(q, container) {
  const grid = document.createElement("div");
  grid.className = "picture-choices-grid";
  q.options.forEach(opt => {
    const card = document.createElement("div");
    card.className = "picture-option-card" + (userAnswers[q.id] === opt.key ? " selected" : "");
    card.onclick = () => {
      userAnswers[q.id] = opt.key;
      renderQuestion(currentQuestionIndex);
    };
    card.innerHTML = \`
      <div class="picture-svg-wrapper">\${opt.svg}</div>
      <div class="picture-letter-badge">\${opt.key}</div>
      <div class="picture-label-text">\${opt.label}</div>
    \`;
    grid.appendChild(card);
  });
  container.appendChild(grid);
}

function renderSingleChoices(q, container) {
  const list = document.createElement("div");
  list.className = "options-list";
  q.options.forEach(opt => {
    const item = document.createElement("div");
    item.className = "option-item" + (userAnswers[q.id] === opt.key ? " selected" : "");
    item.onclick = () => {
      userAnswers[q.id] = opt.key;
      renderQuestion(currentQuestionIndex);
    };
    item.innerHTML = \`
      <div class="option-circle">\${opt.key}</div>
      <div class="option-text">\${opt.text}</div>
    \`;
    list.appendChild(item);
  });
  container.appendChild(list);
}

function renderMatrixTable(q, container) {
  const table = document.createElement("table");
  table.className = "matrix-table";
  table.innerHTML = \`
    <thead>
      <tr>
        <th style="width: 70%;">Pernyataan / Analisis Teks</th>
        <th style="width: 15%;">BENAR (TRUE)</th>
        <th style="width: 15%;">SALAH (FALSE)</th>
      </tr>
    </thead>
    <tbody>
      \${q.matrixStatements.map((stmt, sIdx) => {
        const curVal = (userAnswers[q.id] && userAnswers[q.id][sIdx] !== undefined) ? userAnswers[q.id][sIdx] : null;
        return \`
          <tr>
            <td>\${stmt.statement}</td>
            <td onclick="setMatrixAnswer(\${q.id}, \${sIdx}, true)">
              <input type="radio" class="matrix-radio" name="matrix_\${q.id}_\${sIdx}" \${curVal === true ? "checked" : ""}>
            </td>
            <td onclick="setMatrixAnswer(\${q.id}, \${sIdx}, false)">
              <input type="radio" class="matrix-radio" name="matrix_\${q.id}_\${sIdx}" \${curVal === false ? "checked" : ""}>
            </td>
          </tr>
        \`;
      }).join("")}
    </tbody>
  \`;
  container.appendChild(table);
}

function setMatrixAnswer(qId, statementIdx, value) {
  if (!userAnswers[qId] || typeof userAnswers[qId] !== "object" || Array.isArray(userAnswers[qId])) {
    userAnswers[qId] = {};
  }
  userAnswers[qId][statementIdx] = value;
  renderQuestion(currentQuestionIndex);
}

function renderMCMACheckboxes(q, container) {
  const list = document.createElement("div");
  list.className = "options-list";
  const curAns = Array.isArray(userAnswers[q.id]) ? userAnswers[q.id] : [];
  q.options.forEach(opt => {
    const isChecked = curAns.includes(opt.key);
    const item = document.createElement("div");
    item.className = "option-item" + (isChecked ? " selected" : "");
    item.onclick = () => {
      toggleMCMAAnswer(q.id, opt.key);
      renderQuestion(currentQuestionIndex);
    };
    item.innerHTML = \`
      <div class="option-checkbox">\${isChecked ? "✓" : ""}</div>
      <div class="option-text"><strong>[\${opt.key}]</strong> \${opt.text}</div>
    \`;
    list.appendChild(item);
  });
  container.appendChild(list);
}

function toggleMCMAAnswer(qId, key) {
  if (!Array.isArray(userAnswers[qId])) userAnswers[qId] = [];
  const idx = userAnswers[qId].indexOf(key);
  if (idx > -1) userAnswers[qId].splice(idx, 1);
  else userAnswers[qId].push(key);
}

function navigateQuestion(delta) {
  renderQuestion(currentQuestionIndex + delta);
}

function toggleFlagQuestion() {
  if (flaggedQuestions.has(currentQuestionIndex)) flaggedQuestions.delete(currentQuestionIndex);
  else flaggedQuestions.add(currentQuestionIndex);
  renderQuestion(currentQuestionIndex);
}

// Multi-speaker audio player with Indonesian name pronunciation
let isAudioPlaying = false;
let audioQueue = [];
let audioQueueIdx = 0;
let cachedVoices = [];

if (typeof window !== "undefined" && window.speechSynthesis) {
  cachedVoices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

function getAvailableVoices() {
  if (!window.speechSynthesis) return [];
  if (!cachedVoices || cachedVoices.length === 0) cachedVoices = window.speechSynthesis.getVoices();
  return cachedVoices;
}

function selectAudioVoice(role, gender, lang) {
  const voices = getAvailableVoices();
  if (!voices || voices.length === 0) return null;
  if (lang && lang.startsWith("id")) {
    const idVoice = voices.find(v => v.lang.startsWith("id") || v.name.toLowerCase().includes("indonesia") || v.name.includes("Gadis") || v.name.includes("Ardi"));
    if (idVoice) return idVoice;
  }
  const enVoices = voices.filter(v => v.lang.startsWith("en"));
  if (gender === "female") {
    const fVoice = enVoices.find(v => v.name.includes("Zira") || v.name.includes("Jenny") || v.name.includes("Aria") || v.name.toLowerCase().includes("female"));
    if (fVoice) return fVoice;
  } else if (gender === "male") {
    const mVoice = enVoices.find(v => v.name.includes("David") || v.name.includes("Guy") || v.name.includes("Ryan") || v.name.toLowerCase().includes("male"));
    if (mVoice) return mVoice;
  }
  return enVoices.find(v => v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("David") || v.name.includes("Zira")) || enVoices[0] || voices[0];
}

function stopAudio() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  isAudioPlaying = false;
  audioQueue = [];
  audioQueueIdx = 0;
  const playText = document.getElementById("play-text");
  const playBtn = document.getElementById("btn-play-audio");
  const statusText = document.getElementById("audio-status-text");
  if (playText) playText.textContent = "Putar Audio";
  if (playBtn) playBtn.style.backgroundColor = "var(--accent-teal)";
  if (statusText) statusText.textContent = "Klik 'Putar Audio' untuk menyimak wacana otentik.";
}

function playQuestionAudio() {
  const q = questions[currentQuestionIndex];
  if (!q) return;
  if (!window.speechSynthesis) {
    alert("Peramban Anda belum mendukung Web Speech API.");
    return;
  }
  if (isAudioPlaying) {
    stopAudio();
    return;
  }
  window.speechSynthesis.cancel();
  let segments = [];
  if (q.audioSegments && q.audioSegments.length > 0) segments = q.audioSegments;
  else if (q.audioText) segments = [{ text: q.audioText, lang: "en-US", role: "narrator" }];
  else return;

  audioQueue = segments;
  audioQueueIdx = 0;
  isAudioPlaying = true;

  const playBtn = document.getElementById("btn-play-audio");
  const playText = document.getElementById("play-text");
  const statusText = document.getElementById("audio-status-text");
  if (playText) playText.textContent = "Hentikan";
  if (playBtn) playBtn.style.backgroundColor = "#dc2626";
  if (statusText) statusText.textContent = "🔊 Audio sedang diputar. Simak dengan seksama...";
  playNextAudioSegment();
}

function playNextAudioSegment() {
  if (!isAudioPlaying) return;
  if (audioQueueIdx >= audioQueue.length) {
    isAudioPlaying = false;
    audioQueue = [];
    audioQueueIdx = 0;
    const playBtn = document.getElementById("btn-play-audio");
    const playText = document.getElementById("play-text");
    const statusText = document.getElementById("audio-status-text");
    if (playText) playText.textContent = "Putar Ulang";
    if (playBtn) playBtn.style.backgroundColor = "var(--accent-teal)";
    if (statusText) statusText.textContent = "✅ Pemutaran audio selesai. Silakan pilih jawaban Anda.";
    return;
  }
  const seg = audioQueue[audioQueueIdx++];
  const utt = new SpeechSynthesisUtterance(seg.text);
  utt.lang = seg.lang || "en-US";
  utt.rate = audioSpeechRate * (seg.rateMultiplier || 1.0);
  const matchedVoice = selectAudioVoice(seg.role, seg.gender, seg.lang);
  if (matchedVoice) utt.voice = matchedVoice;
  if (seg.pitch !== undefined) utt.pitch = seg.pitch;
  else if (seg.gender === "female") utt.pitch = 1.25;
  else if (seg.gender === "male") utt.pitch = 0.85;
  else utt.pitch = 1.0;

  utt.onend = () => {
    if (isAudioPlaying) setTimeout(playNextAudioSegment, seg.pauseAfter || 320);
  };
  utt.onerror = () => {
    if (isAudioPlaying) playNextAudioSegment();
  };
  window.speechSynthesis.speak(utt);
}

function toggleAudioSpeed() {
  audioSpeechRate = (audioSpeechRate === 1.0) ? 0.85 : 1.0;
  document.getElementById("speed-text").textContent = audioSpeechRate + "x";
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    remainingSeconds--;
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      alert("Waktu pengerjaan tes telah berakhir! Jawaban Anda akan otomatis dikumpulkan.");
      submitTest();
      return;
    }
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    document.getElementById("timer-display").textContent = \`\${mins.toString().padStart(2, "0")}:\${secs.toString().padStart(2, "0")}\`;
    if (remainingSeconds < 300) document.getElementById("timer-box").style.backgroundColor = "#dc2626";
    if (remainingSeconds % 15 === 0) saveProgressToLocalStorage();
  }, 1000);
}

function confirmSubmitTest() {
  const answeredCount = questions.filter(q => isQuestionAnswered(q.id)).length;
  const unansweredCount = questions.length - answeredCount;
  let msg = \`Anda telah menjawab \${answeredCount} dari \${questions.length} butir soal.\`;
  if (unansweredCount > 0) msg += \` Masih ada \${unansweredCount} butir soal yang belum dijawab.\`;
  msg += "\\n\\nApakah Anda yakin ingin menyelesaikan dan mengumpulkan tes sekarang?";
  if (confirm(msg)) submitTest();
}

function submitTest() {
  clearInterval(timerInterval);
  isExamSubmitted = true;
  stopAudio();
  localStorage.removeItem("${storageKey}");

  let correctCount = 0;
  questions.forEach(q => {
    const ans = userAnswers[q.id];
    if (q.type === "complex_matrix") {
      if (ans && typeof ans === "object") {
        let allCorrect = true;
        q.matrixStatements.forEach((stmt, sIdx) => {
          if (ans[sIdx] !== stmt.isCorrect) allCorrect = false;
        });
        if (allCorrect) correctCount++;
      }
    } else if (q.type === "mcma") {
      if (Array.isArray(ans)) {
        const sortedUser = [...ans].sort();
        const sortedTarget = [...q.correctAnswer].sort();
        if (JSON.stringify(sortedUser) === JSON.stringify(sortedTarget)) correctCount++;
      }
    } else {
      if (ans === q.correctAnswer) correctCount++;
    }
  });

  const totalQuestions = questions.length;
  const finalScore = Math.round((correctCount / totalQuestions) * 100);
  const isTuntas = finalScore >= 75;

  document.getElementById("result-modal").style.display = "flex";
  document.getElementById("result-score-val").textContent = finalScore;
  const scoreCircle = document.getElementById("result-score-circle");
  scoreCircle.className = "score-circle " + (isTuntas ? "tuntas" : "belum");

  const statusText = document.getElementById("result-status-text");
  statusText.textContent = isTuntas ? "STATUS: TUNTAS KKTP (≥ 75) 🎉" : "STATUS: BELUM TUNTAS KKTP (< 75) ⚠️";
  statusText.style.color = isTuntas ? "var(--accent-green)" : "var(--accent-red)";

  document.getElementById("stat-correct").textContent = correctCount;
  document.getElementById("stat-wrong").textContent = totalQuestions - correctCount;
  document.getElementById("stat-accuracy").textContent = \`\${Math.round((correctCount / totalQuestions) * 100)}%\`;

  const record = {
    tingkat: studentIdentity.tingkat,
    rombel: studentIdentity.rombel,
    presensi: studentIdentity.presensi,
    nama: studentIdentity.nama,
    mode: (currentMode === "practice") ? "Latihan ${testType} ${gradeName}" : "Asesmen Resmi ${testType} ${gradeName}",
    score: correctCount,
    total: totalQuestions,
    grade: finalScore,
    duration: \`\${Math.floor((5400 - remainingSeconds) / 60)} menit\`,
    timestamp: new Date().toLocaleString("id-ID"),
    answers: userAnswers
  };

  try {
    const history = JSON.parse(localStorage.getItem("sabaku_ats_history") || "[]");
    history.push(record);
    localStorage.setItem("sabaku_ats_history", JSON.stringify(history));
  } catch (e) {
    console.warn("History save error:", e);
  }

  syncScoreToGoogleSheets(record);
  renderQuestion(currentQuestionIndex);
}

function syncScoreToGoogleSheets(payload) {
  const statusEl = document.getElementById("cloud-status-text");
  if (statusEl) statusEl.textContent = "Menyinkronkan nilai ke server sekolah...";
  const webAppUrl = localStorage.getItem("sabaku_gs_url") || DEFAULT_GS_URL;
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(webAppUrl, new Blob([JSON.stringify(payload)], { type: "text/plain;charset=utf-8" }));
    }
  } catch (e) {}
  fetch(webAppUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(() => {
    if (statusEl) statusEl.innerHTML = "✅ Nilai Anda telah berhasil tercatat di server rekapitulasi sekolah.";
  }).catch(err => {
    try {
      const beacon = new Image();
      const query = new URLSearchParams({
        action: "submit",
        tingkat: payload.tingkat || "",
        rombel: payload.rombel || "",
        presensi: payload.presensi || "",
        nama: payload.nama || "",
        grade: payload.grade || 0,
        score: payload.score || 0,
        duration: payload.duration || "",
        mode: payload.mode || ""
      }).toString();
      beacon.src = \`\${webAppUrl}?\${query}\`;
    } catch (bErr) {}
    if (statusEl) statusEl.innerHTML = "💾 Nilai Anda telah tersimpan dengan aman di sistem sekolah.";
  });
}

function downloadResultCSV() {
  try {
    const history = JSON.parse(localStorage.getItem("sabaku_ats_history") || "[]");
    if (history.length === 0) {
      alert("Belum ada data nilai yang tersimpan untuk diunduh.");
      return;
    }
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Timestamp,Tingkat,Rombel,Presensi,Nama Siswa,Mode,Skor Benar,Total Soal,Nilai (0-100),Status KKTP,Durasi\\n";
    history.forEach(r => {
      const kktp = r.grade >= 75 ? "TUNTAS" : "BELUM TUNTAS";
      const line = \`"\${r.timestamp}","\${r.tingkat}","\${r.rombel}","\${r.presensi}","\${r.nama}","\${r.mode}",\${r.score},\${r.total},\${r.grade},"\${kktp}","\${r.duration}"\`;
      csvContent += line + "\\n";
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", \`Rekap_Nilai_${testType}_${gradeCode}_\${studentIdentity.nama.replace(/\\s+/g, "_")}.csv\`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (e) {
    alert("Gagal mengunduh file CSV: " + e.message);
  }
}

function reviewAllAnswers() {
  document.getElementById("result-modal").style.display = "none";
  renderQuestion(0);
}

function restartTest() {
  if (confirm("Apakah Anda ingin mengulangi pengerjaan dari awal?\\nSemua jawaban saat ini akan direset.")) {
    localStorage.removeItem("${storageKey}");
    document.getElementById("result-modal").style.display = "none";
    startFreshTest();
  }
}

function openSettingsModal() {
  const url = localStorage.getItem("sabaku_gs_url") || DEFAULT_GS_URL;
  document.getElementById("input-gs-url").value = url;
  document.getElementById("settings-modal").style.display = "flex";
}

function closeSettingsModal() {
  document.getElementById("settings-modal").style.display = "none";
}

function saveSettings() {
  const val = document.getElementById("input-gs-url").value.trim();
  if (val) {
    localStorage.setItem("sabaku_gs_url", val);
    alert("Pengaturan tautan basis data berhasil disimpan!");
    closeSettingsModal();
  }
}

function saveProgressToLocalStorage() {
  try {
    const data = {
      userAnswers,
      flaggedQuestions: Array.from(flaggedQuestions),
      remainingSeconds,
      currentIndex: currentQuestionIndex
    };
    localStorage.setItem("${storageKey}", JSON.stringify(data));
  } catch (e) {}
}
`;
}

run();
