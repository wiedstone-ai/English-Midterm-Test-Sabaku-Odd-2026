// -*- coding: utf-8 -*-
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function run() {
  const rootDir = path.resolve('.');
  const code = fs.readFileSync(path.join(rootDir, 'kelas-xi-asas.js'), 'utf-8');

  const fnMatch = code.match(/function getGrade11AsasQuestions\(\)[\s\S]*?\n\}/);
  if (!fnMatch) {
    console.error('Could not find getGrade11AsasQuestions in kelas-xi-asas.js');
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
  const rawQuestions = mockContext.getGrade11AsasQuestions();

  console.log('XI Wajib questions loaded:', rawQuestions.length);

  const questions = [];

  // Q1-Q15 from rawQuestions
  for (let i = 0; i < 15; i++) {
    questions.push(rawQuestions[i]);
  }

  // Q16-Q20: Pilihan Ganda Kompleks (Matrix True / False Table - TKA Style)
  const matrixQuestions = [
    {
      id: 16,
      source: "Sumber: Modul Pembelajaran Literasi Digital & Analisis Isu Sosial — BSKAP Kemendikbudristek",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Evaluasi Fakta Wacana Literasi Digital",
      stimulusTitle: "Evaluasi Argumen Kritis Teks Literasi Digital",
      stimulusBody: "Tentukan apakah setiap pernyataan berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong> berdasarkan wacana eksposisi analitis tentang literasi digital:",
      prompt: "Berdasarkan teks wacana, tentukan kebenaran dari masing-masing pernyataan berikut:",
      matrixStatements: [
        { statement: "Literasi digital kritis hanya berkaitan dengan keterampilan teknis mengoperasikan komputer dan gawai pintar.", isCorrect: false },
        { statement: "Judul berita yang sensasional sengaja dirancang untuk memancing emosi pembaca agar membagikan berita tanpa verifikasi.", isCorrect: true },
        { statement: "Jejak digital (digital footprint) seseorang dapat dihapus secara permanen dan total hanya dengan menekan tombol delete.", isCorrect: false },
        { statement: "Memahami cara kerja algoritma media sosial membantu remaja mengontrol waktu layar secara sadar dan mandiri.", isCorrect: true }
      ],
      explanation: "1) SALAH (literasi digital bukan sekadar kemampuan teknis, melainkan kecakapan mengevaluasi kebenaran informasi). 2) BENAR (clickbait memancing reaksi emosional). 3) SALAH (jejak digital meninggalkan rekam elektronik yang sulit dihapus tuntas). 4) BENAR (kesadaran algoritma membantu pengaturan waktu layar mandiri).",
      grammarNote: "Critical Reading Analysis: Evaluating Thesis, Claims, and Supporting Arguments (TKA)."
    },
    {
      id: 17,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XI — SMAN 1 Bae Kudus",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Kata Hubung Sebab-Akibat (Cause and Effect)",
      stimulusTitle: "Kaidah Hubungan Kausalitas (Cause & Effect Connectors)",
      stimulusBody: "Perhatikan kaidah kata hubung penyebab: 'because of / due to / owing to' diikuti oleh Noun Phrase, sedangkan 'because / since / as' diikuti oleh Klausa (Subject + Verb).",
      prompt: "Tentukan apakah formulasi kalimat kausalitas berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
      matrixStatements: [
        { statement: "'Many teenagers experience social anxiety because of they spend ten hours daily on social media.'", isCorrect: false },
        { statement: "'Due to the widespread dissemination of false rumors, the local authorities issued an immediate public clarification.'", isCorrect: true },
        { statement: "'The research project succeeded because the students analyzed credible academic journals together.'", isCorrect: true },
        { statement: "'Owing to the internet was down, the class could not take the online literacy quiz.'", isCorrect: false }
      ],
      explanation: "1) SALAH ('because of' tidak boleh diikuti klausa lengkap 'they spend'). 2) BENAR ('Due to' diikuti Noun Phrase). 3) BENAR ('because' diikuti klausa lengkap). 4) SALAH ('Owing to' adalah preposisi yang tidak boleh langsung diikuti klausa 'the internet was down').",
      grammarNote: "Mastery of Cause and Effect: Prepositional vs Clausal Connectors."
    },
    {
      id: 18,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XI — SMAN 1 Bae Kudus",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Kalimat Pasif dalam Wacana Ilmiah",
      stimulusTitle: "Kaidah Kalimat Pasif (Passive Voice in Analytical Discourse)",
      stimulusBody: "Kalimat pasif dibentuk dengan pola: Subject + to be (sesuai tenses & subjek) + Past Participle (V3).",
      prompt: "Tentukan apakah bentuk kalimat pasif berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
      matrixStatements: [
        { statement: "Unverified claims should not be shared across online social networks without prior verification.", isCorrect: true },
        { statement: "The digital literacy curriculum is being implement in secondary schools this semester.", isCorrect: false },
        { statement: "Crucial study data were collected through an extensive anonymous student questionnaire.", isCorrect: true },
        { statement: "Misinformation can easily spreaded if internet users ignore fact-checking tools.", isCorrect: false }
      ],
      explanation: "1) BENAR (Modal passive: should not be + shared). 2) SALAH (Continuous passive harus 'is being IMPLEMENTED'). 3) BENAR (Past passive plural: 'data were collected'). 4) SALAH (Bentuk V3 dari spread adalah 'spread', bukan 'spreaded').",
      grammarNote: "Passive Voice Accuracy across Present, Past, and Modal Auxiliaries."
    },
    {
      id: 19,
      source: "Sumber: Analisis Isu Kesehatan Remaja & Pola Hidup Sehat — Kemenkes RI",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Evaluasi Fakta Gaya Hidup Sehat",
      stimulusTitle: "Evaluasi Argumen: Manfaat Aktivitas Fisik bagi Remaja",
      stimulusBody: "Tentukan apakah pernyataan berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong> berdasarkan prinsip ilmiah kesehatan remaja:",
      prompt: "Tentukan nilai kebenaran dari masing-masing pernyataan berikut:",
      matrixStatements: [
        { statement: "Olahraga teratur meningkatkan aliran darah dan oksigen ke otak sehingga mempertajam memori dan fokus belajar.", isCorrect: true },
        { statement: "Tidur malam selama kurang dari empat jam terbukti meningkatkan nilai akademik siswa secara permanen.", isCorrect: false },
        { statement: "Aktivitas fisik memicu pelepasan hormon endorfin yang secara alami meredakan stres dan kecemasan mental.", isCorrect: true },
        { statement: "Mengonsumsi makanan cepat saji kaya gula secara terus-menerus disarankan sebelum mengikuti ujian penting.", isCorrect: false }
      ],
      explanation: "1) BENAR (olahraga meningkatkan oksigen ke otak dan memori). 2) SALAH (kurang tidur justru menurunkan daya konsentrasi). 3) BENAR (endorfin meredakan stres dan memperbaiki mood). 4) SALAH (makanan manis berlebih menyebabkan lonjakan gula darah dan kantuk).",
      grammarNote: "Health and Expository Text Factual Verification (AKM Standar)."
    },
    {
      id: 20,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XI — SMAN 1 Bae Kudus",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Kalimat Pengandaian Tipe 2 (Conditional Type 2)",
      stimulusTitle: "Kaidah Pengandaian Tipe 2 (Unreal Present Conditionals)",
      stimulusBody: "Conditional Type 2 digunakan untuk mengandaikan hal yang tidak nyata saat ini: If + Simple Past (were untuk semua subjek), Subject + would/could + V1.",
      prompt: "Tentukan apakah susunan kalimat pengandaian Type 2 berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
      matrixStatements: [
        { statement: "If students balanced their screen time with physical activity, they would feel more energized throughout the day.", isCorrect: true },
        { statement: "If I was the school principal, I will install solar panels on every classroom building.", isCorrect: false },
        { statement: "If teenagers verified online rumors before sharing, misinformation would decrease significantly.", isCorrect: true },
        { statement: "If they study harder yesterday, they would have passed the scholarship selection.", isCorrect: false }
      ],
      explanation: "1) BENAR (If + balanced, would feel). 2) SALAH (harus 'If I WERE... I WOULD...'). 3) BENAR (If + verified, would decrease). 4) SALAH (mencampur 'study' masa lalu dengan 'would have passed'; harusnya Type 3: 'If they had studied...').",
      grammarNote: "Conditional Type 2: Hypothetical Present Condition and Consequence."
    }
  ];

  matrixQuestions.forEach(q => questions.push(q));

  // Q21-Q25: MCMA Questions (Pilih 2 Opsi yang Tepat)
  const mcmaQuestions = [
    {
      id: 21,
      source: "Sumber: Modul Pembelajaran Teks Eksposisi Analitis — BSKAP Kemendikbudristek",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Argumen Pentingnya Literasi Digital Kritis",
      stimulusBody: "Penulis teks eksposisi analitis menyajikan berbagai alasan mengapa remaja masa kini harus menguasai literasi digital kritis.",
      prompt: "Manakah <strong>DUA (2)</strong> argumen utama yang mendukung tesis penulis dalam teks?",
      options: [
        { key: "A", text: "Literasi digital kritis melatih remaja menyaring kebenaran berita dan melindungi diri dari manipulasi informasi hoaks." },
        { key: "B", text: "Menguasai media sosial menjamin setiap siswa akan langsung diterima bekerja di perusahaan multinasional." },
        { key: "C", text: "Kesadaran digital melindungi reputasi jangka panjang siswa serta menjaga kesehatan mental dari kecemasan berlebih." },
        { key: "D", text: "Remaja harus membeli tiga perangkat laptop baru setiap tahun untuk mengikuti perkembangan teknologi." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Argumen utama penulis dalam teks adalah (A) menyaring kebenaran dan melindungi dari manipulasi hoaks, serta (C) melindungi reputasi jejak digital dan menjaga kesehatan mental. Opsi B dan D tidak relevan dengan esensi teks.",
      grammarNote: "Identifying Main Supporting Arguments in Analytical Exposition."
    },
    {
      id: 22,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XI — SMAN 1 Bae Kudus",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Konektor Kausalitas (Cause & Effect) yang Tepat",
      stimulusBody: "Pilihlah kalimat yang menggunakan kata penghubung sebab-akibat secara tepat dan gramatikal.",
      prompt: "Manakah <strong>DUA (2)</strong> kalimat di bawah ini yang menggunakan konjungsi kausalitas dengan benar?",
      options: [
        { key: "A", text: "The school cancelled the outdoor sports event because heavy storm." },
        { key: "B", text: "Owing to diligent practice and strategic teamwork, our debate club won first place in the provincial tournament." },
        { key: "C", text: "Consequently the student forgot his homework, the teacher asked him to write a summary." },
        { key: "D", text: "The students achieved outstanding test scores because they reviewed their study notes consistently." }
      ],
      correctAnswer: ["B", "D"],
      explanation: "Kalimat B ('Owing to + Noun Phrase') dan kalimat D ('because + Clause') menggunakan konjungsi kausalitas secara tepat. Kalimat A salah (karena 'because' harus diikuti klausa, bukan 'heavy storm'), dan kalimat C salah penempatan 'consequently' sebagai konjungsi antarklausa.",
      grammarNote: "Grammatical Accuracy of Cause and Effect Linkers."
    },
    {
      id: 23,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XI — SMAN 1 Bae Kudus",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Konjungsi Pertentangan (Contrast Connectors)",
      stimulusBody: "Konektor pertentangan (seperti However, On the other hand, Whereas) digunakan untuk menghubungkan dua gagasan yang kontras.",
      prompt: "Manakah <strong>DUA (2)</strong> kalimat di bawah ini yang menerapkan kata transisi pertentangan dengan benar?",
      options: [
        { key: "A", text: "Online learning offers great flexibility; however, it requires strong self-discipline from students to succeed." },
        { key: "B", text: "Although the rain was pouring heavily, but the soccer match continued." },
        { key: "C", text: "In spite of she was very tired, she finished her science assignment." },
        { key: "D", text: "Social media allows instant global communication; nevertheless, unverified news can spread rapidly through feeds." }
      ],
      correctAnswer: ["A", "D"],
      explanation: "Kalimat A ('however') dan kalimat D ('nevertheless') menggunakan konjungsi transisi pertentangan dengan tanda baca dan makna yang tepat. Kalimat B salah (tidak boleh menggabungkan 'Although' dengan 'but'), dan kalimat C salah ('in spite of' tidak boleh langsung diikuti klausa 'she was').",
      grammarNote: "Transitions of Contrast: however, nevertheless, on the contrary."
    },
    {
      id: 24,
      source: "Sumber: Panduan Kesehatan Fisik & Mental Pelajar — Kemenkes RI",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Penerapan Kebiasaan Gaya Hidup Sehat bagi Pelajar",
      stimulusBody: "Menerapkan gaya hidup seimbang sangat penting bagi ketahanan fisik dan konsentrasi belajar siswa.",
      prompt: "Manakah <strong>DUA (2)</strong> rekomendasi praktis yang paling efektif untuk menjaga kesehatan fisik dan konsentrasi belajar remaja?",
      options: [
        { key: "A", text: "Menghabiskan waktu hingga larut malam bermain game online agar merasa terhibur sebelum ujian." },
        { key: "B", text: "Menyediakan waktu tidur teratur antara 7 hingga 8 jam setiap malam untuk memulihkan fungsi kognitif otak." },
        { key: "C", text: "Melakukan aktivitas fisik aerobik ringan atau olahraga teratur minimal 30 menit setiap hari." },
        { key: "D", text: "Mengganti seluruh konsumsi air putih dengan minuman berenergi berkadar kafein tinggi." }
      ],
      correctAnswer: ["B", "C"],
      explanation: "Rekomendasi gaya hidup sehat yang efektif dan ilmiah adalah (B) menjaga waktu tidur berkualitas 7-8 jam per malam, serta (C) melakukan aktivitas fisik/olahraga teratur minimal 30 menit sehari.",
      grammarNote: "Practical Life Skills & Analytical Text Conclusion Application."
    },
    {
      id: 25,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XI — SMAN 1 Bae Kudus",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Kalimat Pasif Akademis (Academic Passive Sentences)",
      stimulusBody: "Dalam penulisan ilmiah dan analitis, kalimat pasif digunakan untuk memfokuskan perhatian pada proses atau hasil tindakan.",
      prompt: "Manakah <strong>DUA (2)</strong> kalimat pasif di bawah ini yang disusun secara gramatikal dan baku?",
      options: [
        { key: "A", text: "Comprehensive guidelines on digital ethics have been introduced by the school committee." },
        { key: "B", text: "Important safety warnings were announced by the principal during the morning assembly." },
        { key: "C", text: "The scientific experiment was did by the biology students in the laboratory yesterday." },
        { key: "D", text: "Valuable research articles is published in international journals every semester." }
      ],
      correctAnswer: ["A", "B"],
      explanation: "Kalimat A ('have been introduced' - Present Perfect Passive) dan B ('were announced' - Past Simple Passive) tersusun sempurna. Kalimat C salah ('was did' harusnya 'was DONE'), dan kalimat D salah ('articles is' harusnya 'articles ARE published').",
      grammarNote: "Passive Voice Subject-Verb Agreement and Irregular Past Participle Mastery."
    }
  ];

  mcmaQuestions.forEach(q => questions.push(q));

  // Q26-Q40: Reading Text 2 & Grammar (Single Choice)
  for (let i = 25; i < 40; i++) {
    const q = Object.assign({}, rawQuestions[i], { id: i + 1 });
    questions.push(q);
  }

  // Balance single choice answer keys across A, B, C, D (approx 7-8 of each)
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

  const scAns = questions.filter(q => q.type !== 'complex_matrix' && q.type !== 'mcma').map(q => q.correctAnswer);
  const scCounts = {};
  scAns.forEach(a => scCounts[a] = (scCounts[a] || 0) + 1);
  console.log('XI Wajib Single Choice Distribution:', scCounts);

  let qJson = JSON.stringify(questions, null, 2);
  qJson = qJson.replace(/"___SVG_PICTURES\.(\w+)___"/g, 'SVG_PICTURES.$1');

  const svgCode = `const SVG_PICTURES = {
  digitalManuscript: \`<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="22" width="64" height="46" rx="4" fill="#eff6ff" stroke="#2563eb"/><circle cx="50" cy="45" r="14" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3 3"/><line x1="50" y1="36" x2="50" y2="54" stroke="#1d4ed8"/><line x1="41" y1="45" x2="59" y2="45" stroke="#1d4ed8"/><path d="M26 32h14M26 38h10M60 52h14M60 58h10" stroke="#93c5fd"/><path d="M30 76l20-8 20 8" stroke="#475569" stroke-width="2"/><line x1="50" y1="68" x2="50" y2="84" stroke="#475569" stroke-width="3"/></svg>\`,
  amphitheaterDrama: \`<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 75c8-18 36-24 76 0" stroke="#78350f" stroke-width="3"/><path d="M22 62c6-14 28-18 56 0" stroke="#b45309" stroke-dasharray="2 2"/><polygon points="50,15 35,45 65,45" fill="#fef3c7" stroke="#d97706"/><circle cx="50" cy="30" r="5" fill="#d97706"/><path d="M38 48h24v20H38z" fill="#fef9c3" stroke="#ca8a04"/><path d="M42 48v20M58 48v20" stroke="#b45309"/><line x1="15" y1="84" x2="85" y2="84" stroke="#64748b"/></svg>\`,
  climateObservatory: \`<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 85c15-8 30-14 70-4" stroke="#16a34a" stroke-width="3"/><path d="M35 80V50c0-12 12-22 25-22s25 10 25 22v30H35z" fill="#ecfdf5" stroke="#059669"/><path d="M50 28v-12M42 16h16" stroke="#047857" stroke-width="2"/><circle cx="60" cy="46" r="6" fill="#fef08a" stroke="#ca8a04"/><line x1="60" y1="40" x2="75" y2="28" stroke="#0284c7" stroke-width="2.5"/><circle cx="75" cy="28" r="3" fill="#0284c7"/></svg>\`,
  oilRefinery: \`<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="50" width="30" height="35" fill="#f1f5f9"/><rect x="55" y="40" width="25" height="45" fill="#e2e8f0"/><line x1="35" y1="50" x2="35" y2="25" stroke="#64748b" stroke-width="2.5"/><line x1="68" y1="40" x2="68" y2="20" stroke="#64748b" stroke-width="2.5"/><path d="M30 20c3-5 7-5 10 0M63 15c3-5 7-5 10 0" stroke="#94a3b8"/></svg>\`
};`;

  const engineAsas = buildEngineCode('ASAS Gasal', 'XI-F', 'Kelas XI (Fase F)', 'sabaku_asas_progress_XI', 'practice', false);
  const engineAsts = buildEngineCode('ASTS Gasal', 'XI-F', 'Kelas XI (Fase F)', 'sabaku_asts_progress_XI', 'exam', true);

  const contentAsas = `/**
 * ASESMEN SUMATIF AKHIR SEMESTER (ASAS) GASAL & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT XI (FASE F)
 * Standar: TKA & AKM Literasi (Pilihan Ganda Biasa, Kompleks Matrix, & MCMA)
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

${svgCode}

function getGrade11AsasQuestions() {
  return ${qJson};
}

${engineAsas}
`;

  const contentAsts = `/**
 * ASESMEN SUMATIF TENGAH SEMESTER (ASTS) GASAL 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT XI (FASE F)
 * Standar: TKA & AKM Literasi (Pilihan Ganda Biasa, Kompleks Matrix, & MCMA)
 * Dilengkapi Verifikasi Password ASTS Terpadu
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

${svgCode}

function getGrade11AstsQuestions() {
  return ${qJson};
}

${engineAsts}
`;

  fs.writeFileSync(path.join(rootDir, 'kelas-xi-asas.js'), contentAsas, 'utf-8');
  fs.writeFileSync(path.join(rootDir, 'kelas-xi-asts.js'), contentAsts, 'utf-8');
  console.log('kelas-xi-asas.js and kelas-xi-asts.js built successfully!');
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

  const rawBank = (typeof getGrade11AsasQuestions === "function") ? getGrade11AsasQuestions() :
                  (typeof getGrade11AstsQuestions === "function") ? getGrade11AstsQuestions() : [];

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
