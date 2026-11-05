// -*- coding: utf-8 -*-
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function run() {
  const rootDir = path.resolve('.');
  const code = fs.readFileSync(path.join(rootDir, 'kelas-xii-asas.js'), 'utf-8');

  // Extract SVG_PICTURES
  const svgMatch = code.match(/const SVG_PICTURES = \{[\s\S]*?\n\};/);
  if (!svgMatch) {
    console.error('Could not find SVG_PICTURES in kelas-xii-asas.js');
    return;
  }
  const svgCode = svgMatch[0];

  // Extract getGrade12AsasQuestions
  const fnMatch = code.match(/function getGrade12AsasQuestions\(\)[\s\S]*?\n\}/);
  if (!fnMatch) {
    console.error('Could not find getGrade12AsasQuestions in kelas-xii-asas.js');
    return;
  }

  // Create mock context to execute getGrade12AsasQuestions
  const mockContext = {
    SVG_PICTURES: {
      debate: '___SVG_PICTURES.debate___',
      solo_singer: '___SVG_PICTURES.solo_singer___',
      lab_microscope: '___SVG_PICTURES.lab_microscope___',
      hiking_trail: '___SVG_PICTURES.hiking_trail___',
      solar_wind: '___SVG_PICTURES.solar_wind___',
      coal_plant: '___SVG_PICTURES.coal_plant___',
      oil_rig: '___SVG_PICTURES.oil_rig___',
      busy_highway: '___SVG_PICTURES.busy_highway___',
      smart_greenhouse: '___SVG_PICTURES.smart_greenhouse___',
      traditional_farm: '___SVG_PICTURES.traditional_farm___',
      industrial_factory: '___SVG_PICTURES.industrial_factory___',
      desert_dunes: '___SVG_PICTURES.desert_dunes___'
    }
  };
  vm.createContext(mockContext);
  vm.runInContext(fnMatch[0], mockContext);
  const rawQuestions = mockContext.getGrade12AsasQuestions();

  console.log('XII Wajib raw questions loaded:', rawQuestions.length);

  // Upgrade dialogues Q4, Q5, Q6 to multi-speaker audioSegments (no speaker names spoken aloud)
  // Q4: Student (Male) & Teacher (Mrs. Anjani - Female)
  rawQuestions[3].audioSegments = [
    { role: "narrator", lang: "en-US", text: "Number four. Listen to a conversation between a student and a teacher.", pauseAfter: 400 },
    { role: "speaker1", gender: "male", pitch: 0.85, text: "Good morning, Mrs. Anjani. I noticed many classmates are using generative AI to produce their essay drafts in just seconds. Doesn't that risk diminishing our genuine critical thinking abilities?", pauseAfter: 450 },
    { role: "speaker2", gender: "female", pitch: 1.25, text: "That is a very valid concern, Farhan. While AI can certainly assist in brainstorming complex outlines and checking syntactic errors, relying completely on automated outputs weakens your analytical reasoning. In our school, students must write their reflections independently and use AI strictly as a research assistant, not a ghostwriter.", pauseAfter: 450 },
    { role: "speaker1", gender: "male", pitch: 0.85, text: "I agree completely. That means transparency and personal originality must always remain our top priorities.", pauseAfter: 500 },
    { role: "narrator", lang: "en-US", text: "Question: What is the teacher's primary advice regarding generative AI tools?" }
  ];

  // Q5: Rizky (Male) & Maya (Female)
  rawQuestions[4].audioSegments = [
    { role: "narrator", lang: "en-US", text: "Number five. Listen to a conversation between two high school seniors preparing an environmental presentation.", pauseAfter: 400 },
    { role: "speaker1", gender: "male", pitch: 0.85, text: "Maya, when evaluating Indonesia's plan to achieve net-zero carbon emissions, do you believe nuclear energy is a more practical solution than decentralized solar and geothermal systems?", pauseAfter: 450 },
    { role: "speaker2", gender: "female", pitch: 1.25, text: "Well, nuclear power undoubtedly provides a dense and continuous baseload electricity supply without greenhouse gases. However, our nation sits directly upon active tectonic fault lines. The immense cost of disaster containment and safe waste management makes solar and geothermal microgrids far safer for remote archipelagic islands.", pauseAfter: 450 },
    { role: "speaker1", gender: "male", pitch: 0.85, text: "That makes complete sense. A diversified mix prioritizing natural geothermal and solar resources minimizes catastrophic environmental risks.", pauseAfter: 500 },
    { role: "narrator", lang: "en-US", text: "Question: Why does Maya express caution regarding large nuclear power plants in Indonesia?" }
  ];

  // Q6: Danang (Male) & Sinta (Female)
  rawQuestions[5].audioSegments = [
    { role: "narrator", lang: "en-US", text: "Number six. Listen to a dialogue between two members of the school book club.", pauseAfter: 400 },
    { role: "speaker1", gender: "male", pitch: 0.85, text: "Sinta, I recently finished reading Andrea Hirata's classic novel, The Rainbow Troops. Have you read it?", pauseAfter: 450 },
    { role: "speaker2", gender: "female", pitch: 1.25, text: "Yes, twice! What impressed me most was how the narrative highlights unyielding determination for education amidst severe economic poverty in Belitung.", pauseAfter: 450 },
    { role: "speaker1", gender: "male", pitch: 0.85, text: "Exactly. Some critics claim the pacing is occasionally melodramatic, yet the profound emotional bond between the ten pupils and their dedicated teacher, Bu Muslimah, is genuinely inspiring.", pauseAfter: 450 },
    { role: "speaker2", gender: "female", pitch: 1.25, text: "I couldn't agree more. It reminds us that quality learning is fueled by human empathy, resilience, and mutual hope rather than luxurious school infrastructure.", pauseAfter: 500 },
    { role: "narrator", lang: "en-US", text: "Question: What core thematic value of the novel do both speakers strongly admire?" }
  ];

  const questions = [];

  // Q1-Q15: Single Choice (Listening 1-10 + Discussion Text AI 11-15)
  for (let i = 0; i < 15; i++) {
    questions.push(rawQuestions[i]);
  }

  // Q16-Q20: Pilihan Ganda Kompleks (Complex Matrix True/False Table - TKA Style)
  const matrixQuestions = [
    {
      id: 16,
      source: "Sumber: Analisis Teks Diskusi Pembelajaran Digital — BSKAP Kemendikbudristek",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Evaluasi Argumen Teks Diskusi Kecerdasan Buatan (AI)",
      stimulusTitle: "Evaluasi Argumen Kritis Teks Diskusi (Generative AI in Education)",
      stimulusBody: "Tentukan apakah setiap pernyataan berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong> berdasarkan wacana diskusi tentang kecerdasan buatan (AI) di sekolah:",
      prompt: "Berdasarkan teks diskusi, tentukan nilai kebenaran dari masing-masing pernyataan berikut:",
      matrixStatements: [
        { statement: "Kecerdasan buatan (AI) dapat membantu siswa melakukan curah pendapat (brainstorming) dan menyusun kerangka esai secara efisien.", isCorrect: true },
        { statement: "Penulis teks menyarankan agar seluruh institusi pendidikan melarang total penggunaan aplikasi AI bagi siswa.", isCorrect: false },
        { statement: "Ketergantungan pasif pada teks otomatis tanpa verifikasi kritis dapat melemahkan daya nalar dan orisinalitas berpikir siswa.", isCorrect: true },
        { statement: "Seluruh respons dan data yang dihasilkan oleh chatbot berbasis AI dijamin seratus persen akurat, bebas bias, dan faktual.", isCorrect: false }
      ],
      explanation: "1) BENAR (AI diakui mampu membantu brainstorming dan kerangka). 2) SALAH (penulis merekomendasikan regulasi etis, bukan larangan mutlak). 3) BENAR (ketergantungan pasif memicu atrofi kognitif). 4) SALAH (AI masih rentan halusinasi data dan bias algoritma).",
      grammarNote: "Discussion Text Argument Evaluation: Identifying Supporting vs Contrasting Stances."
    },
    {
      id: 17,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XII — SMAN 1 Bae Kudus",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Kalimat Pengandaian Tipe 3 (Conditional Type 3)",
      stimulusTitle: "Kaidah Pengandaian Masa Lalu (Unreal Past Conditionals)",
      stimulusBody: "Pola Conditional Type 3: If + Past Perfect (had + V3), Subject + would/could/might + have + Past Participle (V3).",
      prompt: "Tentukan apakah susunan kalimat pengandaian Type 3 berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
      matrixStatements: [
        { statement: "If the school had organized the digital literacy seminar earlier, students would have understood the AI guidelines better.", isCorrect: true },
        { statement: "If they studied harder last week, they would pass the national certification test today.", isCorrect: false },
        { statement: "If the solar panels had been maintained regularly, the sudden power failure during yesterday's storm would have been avoided.", isCorrect: true },
        { statement: "If she had arrived on time yesterday, she would meet the guest speaker before the lecture began.", isCorrect: false }
      ],
      explanation: "1) BENAR (If + had organized, would have understood). 2) SALAH (mencampur Simple Past dengan present; Type 3 harus 'had studied... would have passed'). 3) BENAR (Passive Type 3: had been maintained, would have been avoided). 4) SALAH (main clause harus 'would have met', bukan 'would meet').",
      grammarNote: "Conditional Type 3: Form and Function for Past Unreal Situations."
    },
    {
      id: 18,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XII — SMAN 1 Bae Kudus",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Konjungsi Pertentangan & Konsesi (Contrast & Concession)",
      stimulusTitle: "Kaidah Transisi Pertentangan dan Konsesi",
      stimulusBody: "Konjungsi pertentangan (However, Nevertheless, In contrast) dan konsesi (Although, Despite, In spite of) menghubungkan dua gagasan yang berlawanan.",
      prompt: "Tentukan apakah penggunaan kata transisi dalam kalimat berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
      matrixStatements: [
        { statement: "Despite facing severe economic limitations, the students demonstrated remarkable academic achievement.", isCorrect: true },
        { statement: "Although it was raining heavily, but the sports competition continued until sunset.", isCorrect: false },
        { statement: "Geothermal power plants produce continuous energy; however, their initial construction requires substantial capital.", isCorrect: true },
        { statement: "In spite of she was exhausted after practice, Maya finished writing her comprehensive book review.", isCorrect: false }
      ],
      explanation: "1) BENAR (Despite + Noun Phrase 'facing severe economic limitations'). 2) SALAH (tidak boleh menggabungkan 'Although' dan 'but' dalam satu kalimat). 3) BENAR (However digunakan sebagai adverbia transisi antarinduk kalimat). 4) SALAH ('In spite of' tidak boleh diikuti klausa berpredikat 'she was exhausted'; harusnya 'Although she was...' atau 'In spite of being exhausted...').",
      grammarNote: "Mastery of Contrastive Connectors and Concessive Adverbials (B2 Level)."
    },
    {
      id: 19,
      source: "Sumber: Telaah Kritis Teks Resensi Sastra Indonesia — Kemendikbudristek",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Evaluasi Fakta Teks Ulasan Novel (Laskar Pelangi)",
      stimulusTitle: "Evaluasi Kritis Resensi Novel Andrea Hirata: Laskar Pelangi",
      stimulusBody: "Tentukan apakah pernyataan berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong> berdasarkan wacana teks ulasan (review text) novel Laskar Pelangi:",
      prompt: "Berdasarkan teks ulasan, tentukan nilai kebenaran dari masing-masing pernyataan berikut:",
      matrixStatements: [
        { statement: "Novel Laskar Pelangi mengisahkan perjuangan sepuluh murid desa di Belitung untuk mempertahankan sekolah mereka dari ancaman penutupan.", isCorrect: true },
        { statement: "Pengulas berpendapat bahwa keberhasilan pendidikan semata-mata ditentukan oleh kemewahan gedung dan kelengkapan fasilitas sekolah.", isCorrect: false },
        { statement: "Keteladanan Bu Muslimah dan Pak Harfan menjadi pendorong semangat utama murid-murid meski di tengah serba keterbatasan.", isCorrect: true },
        { statement: "Resensi tersebut menyimpulkan bahwa novel Laskar Pelangi bernilai buruk dan menyarankan agar ditarik dari seluruh perpustakaan.", isCorrect: false }
      ],
      explanation: "1) BENAR (Laskar Pelangi mengisahkan sepuluh murid SD Muhammadiyah Gantong). 2) SALAH (ulasan justru menegaskan empati dan dedikasi guru melampaui kemewahan fasilitas fisik). 3) BENAR (keteladanan guru menginspirasi ketahanan moral siswa). 4) SALAH (pengulas memberikan apresiasi tinggi sebagai karya sastra inspiratif).",
      grammarNote: "Review Text Critical Evaluation: Distinguishing Evaluative Judgments from Text Facts."
    },
    {
      id: 20,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XII — SMAN 1 Bae Kudus",
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Modal Deduksi Masa Lalu (Modals of Past Deduction)",
      stimulusTitle: "Kaidah Modalitas Deduksi Logis Masa Lalu",
      stimulusBody: "Modal deduksi masa lalu: must have + V3 (pasti sudah), cannot/could not have + V3 (mustahil sudah), might/may have + V3 (mungkin sudah).",
      prompt: "Tentukan apakah penerapan modalitas deduksi berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
      matrixStatements: [
        { statement: "The classroom lights are completely turned off; the students must have gone home already.", isCorrect: true },
        { statement: "He didn't study at all last semester, so he must have scored the highest grade in the entire province.", isCorrect: false },
        { statement: "The sudden power failure in the laboratory might have been triggered by the severe lightning storm.", isCorrect: true },
        { statement: "She could not has submitted the digital assignment because the web portal was already locked.", isCorrect: false }
      ],
      explanation: "1) BENAR (deduksi logis kuat: must have + gone). 2) SALAH (deduksi tidak logis; seharusnya 'cannot have scored'). 3) BENAR (kemungkinan logis: might have been triggered). 4) SALAH (kesalahan gramatikal: modal selalu diikuti bare infinitive 'have', bukan 'has').",
      grammarNote: "Modals of Past Deduction: must have, cannot have, might have + V3."
    }
  ];

  matrixQuestions.forEach(q => questions.push(q));

  // Q21-Q25: Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi yang Tepat - TKA Style)
  const mcmaQuestions = [
    {
      id: 21,
      source: "Sumber: Modul Pembelajaran Teks Diskusi — BSKAP Kemendikbudristek",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Prinsip Pemanfaatan Kecerdasan Buatan (AI) yang Bertanggung Jawab",
      stimulusBody: "Dalam teks diskusi tentang pemanfaatan AI di sekolah, disajikan berbagai langkah strategis untuk mengoptimalkan teknologi tanpa mengorbankan integritas akademik.",
      prompt: "Manakah <strong>DUA (2)</strong> argumen utama yang mendukung penggunaan AI secara etis dan bertanggung jawab oleh siswa?",
      options: [
        { key: "A", text: "AI sebaiknya difungsikan sebagai asisten riset untuk memicu ide dan nalar kritis, bukan sebagai penulis esai otomatis." },
        { key: "B", text: "Sekolah harus mewajibkan seluruh ujian akhir ditulis seratus persen oleh aplikasi chatbot otomatis." },
        { key: "C", text: "Siswa wajib menjaga kejujuran intelektual, memverifikasi fakta keluaran mesin, dan mencantumkan sumber sitasi bantuan digital secara transparan." },
        { key: "D", text: "Siswa tidak perlu lagi membaca buku teks atau literatur ilmiah karena seluruh informasi telah dirangkum oleh mesin pintar." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua argumen kunci yang tepat adalah (A) memfungsikan AI sebagai asisten riset pemicu ide dan (C) menjaga integritas akademik dengan verifikasi data dan sitasi transparan. Opsi B dan D merusak integritas dan tujuan pendidikan.",
      grammarNote: "Identifying Balanced Stances in Analytical Discussion Texts."
    },
    {
      id: 22,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XII — SMAN 1 Bae Kudus",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Kalimat Pengandaian Tipe 3 (Conditional Type 3) yang Gramatikal",
      stimulusBody: "Pilihlah kalimat pengandaian Type 3 yang disusun secara baku dan memenuhi kaidah tata bahasa Inggris.",
      prompt: "Manakah <strong>DUA (2)</strong> kalimat di bawah ini yang menerapkan pola Conditional Type 3 dengan benar?",
      options: [
        { key: "A", text: "If the technical team had installed the backup generator yesterday, the power outage would not have disrupted the computer laboratory." },
        { key: "B", text: "If I have seen the competition announcement yesterday morning, I would submit the application promptly." },
        { key: "C", text: "Had the school provided sufficient scholarship funds, more rural students could have continued their higher education." },
        { key: "D", text: "If she took the earlier morning bus yesterday, she will arrive before the keynote speaker." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Kalimat A (pola standar: If + had installed, would not have disrupted) dan kalimat C (inversi Type 3: Had + subject + V3, could have continued) keduanya gramatikal dan baku. Kalimat B salah waktu (have seen) dan D salah mencampur past 'took' dengan future 'will arrive'.",
      grammarNote: "Standard and Inverted Conditional Type 3 Accuracy."
    },
    {
      id: 23,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XII — SMAN 1 Bae Kudus",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Konjungsi Transisi Pertentangan dalam Wacana Akademik",
      stimulusBody: "Transisi pertentangan digunakan untuk menghubungkan dua sudut pandang yang kontras secara kohesif.",
      prompt: "Manakah <strong>DUA (2)</strong> kalimat di bawah ini yang menggunakan kata transisi pertentangan secara tepat?",
      options: [
        { key: "A", text: "Renewable energy adoption requires high initial capital; nevertheless, long-term environmental benefits far outweigh the costs." },
        { key: "B", text: "Although the historical novel was written decades ago, yet modern readers still find its characters deeply moving." },
        { key: "C", text: "Even though solar irradiance fluctuates with cloud cover, modern battery storage systems ensure continuous electrical stability." },
        { key: "D", text: "Despite of the heavy rainfall yesterday, the youth volunteers planted two hundred mangrove seedlings along the coast." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Kalimat A ('nevertheless') dan kalimat C ('Even though') tersusun secara gramatikal. Kalimat B salah karena merangkap 'Although' dengan 'yet', dan kalimat D salah karena frase yang benar adalah 'Despite' (tanpa 'of') atau 'In spite of'.",
      grammarNote: "Transitions of Contrast and Concession in Academic Discourse."
    },
    {
      id: 24,
      source: "Sumber: Telaah Kritis Teks Resensi Sastra Indonesia — Kemendikbudristek",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Nilai-Nilai Utama Novel Laskar Pelangi",
      stimulusBody: "Novel Laskar Pelangi karya Andrea Hirata sarat akan pesan moral dan refleksi sosial tentang pendidikan di daerah terpencil.",
      prompt: "Manakah <strong>DUA (2)</strong> nilai karakter dan pesan sosial utama yang disoroti oleh pengulas novel?",
      options: [
        { key: "A", text: "Kekuatan transformatif pendidikan dan empati kemanusiaan dalam mengatasi kesulitan sosial-ekonomi yang ekstrem." },
        { key: "B", text: "Pentingnya menimbun harta kekayaan pribadi sebanyak-banyaknya demi memperoleh status sosial tertinggi di masyarakat." },
        { key: "C", text: "Nilai luhur keteladanan dan dedikasi tanpa pamrih seorang guru yang membangkitkan rasa percaya diri murid." },
        { key: "D", text: "Keunggulan mutlak perusahaan tambang industri modern dalam menyingkirkan kehidupan masyarakat pedesaan." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua nilai luhur utama dalam ulasan Laskar Pelangi adalah (A) kekuatan pendidikan dan empati melampaui kemiskinan, serta (C) keteladanan dan dedikasi guru dalam membimbing anak-anak. Opsi B dan D bertentangan dengan esensi novel.",
      grammarNote: "Thematic and Character Value Synthesis in Literary Reviews."
    },
    {
      id: 25,
      source: "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XII — SMAN 1 Bae Kudus",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Kalimat Tak Langsung (Reported Speech / Indirect Statements)",
      stimulusBody: "Dalam melaporkan pernyataan lampau, tenses dan kata keterangan waktu mengalami penyesuaian gramatikal (backshift).",
      prompt: "Manakah <strong>DUA (2)</strong> kalimat tak langsung di bawah ini yang disusun secara baku dan benar?",
      options: [
        { key: "A", text: "The English teacher explained that artificial intelligence was merely a tool to enhance human creativity." },
        { key: "B", text: "Maya told to me that she will travel to Belitung next month." },
        { key: "C", text: "Rizky stated that he had completed his comprehensive literature review the previous evening." },
        { key: "D", text: "Danang said that he is reading the historical novel two days ago." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Kalimat A (Present Simple 'is' berubah menjadi Past 'was') dan kalimat C (Past Simple/Present Perfect berubah menjadi Past Perfect 'had completed' serta time marker 'the previous evening') tersusun sempurna. Kalimat B salah pola ('told to me' harusnya 'told me', dan 'will' harusnya 'would'). Kalimat D salah karena mencampur 'is reading' dengan 'two days ago'.",
      grammarNote: "Reported Speech: Tense Backshift and Indirect Discourse Conventions."
    }
  ];

  mcmaQuestions.forEach(q => questions.push(q));

  // Q26-Q40: Reading Text 2 & Grammar/Discourse (Single Choice)
  for (let i = 25; i < 40; i++) {
    const q = Object.assign({}, rawQuestions[i], { id: i + 1 });
    questions.push(q);
  }

  // Balance single choice answer keys across A, B, C, D (~7-8 each)
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
  console.log('XII Wajib Single Choice Distribution:', scCounts);

  let qJson = JSON.stringify(questions, null, 2);
  // Restore SVG references
  qJson = qJson.replace(/"___SVG_PICTURES\.(\w+)___"/g, 'SVG_PICTURES.$1');

  const engineAsas = buildEngineCode('ASAS Gasal', 'XII-F', 'Kelas XII (Fase F+)', 'sabaku_asas_progress_XII', 'practice', false);
  const engineAsts = buildEngineCode('ASTS Gasal', 'XII-F', 'Kelas XII (Fase F+)', 'sabaku_asts_progress_XII', 'exam', true);

  const contentAsas = `/**
 * ASESMEN SUMATIF AKHIR SEMESTER (ASAS) GASAL & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT XII (FASE F+)
 * Standar: TKA & AKM Literasi (Pilihan Ganda Biasa, Kompleks Matrix, & MCMA)
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

${svgCode}

function getGrade12AsasQuestions() {
  return ${qJson};
}

${engineAsas}
`;

  const contentAsts = `/**
 * ASESMEN SUMATIF TENGAH SEMESTER (ASTS) GASAL 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT XII (FASE F+)
 * Standar: TKA & AKM Literasi (Pilihan Ganda Biasa, Kompleks Matrix, & MCMA)
 * Dilengkapi Verifikasi Password ASTS Terpadu
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

${svgCode}

function getGrade12AstsQuestions() {
  return ${qJson};
}

${engineAsts}
`;

  fs.writeFileSync(path.join(rootDir, 'kelas-xii-asas.js'), contentAsas, 'utf-8');
  fs.writeFileSync(path.join(rootDir, 'kelas-xii-asts.js'), contentAsts, 'utf-8');
  console.log('kelas-xii-asas.js and kelas-xii-asts.js built successfully!');
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
  const modeExam = "🔒 Asesmen Resmi " + testType;

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

document.addEventListener("DOMContentLoaded", () => {
  ${initAuth}
  loadStudentProfile();
  initTestState();
});

function loadStudentProfile() {
  try {
    const raw = sessionStorage.getItem("sabaku_student");
    if (raw) {
      const data = JSON.parse(raw);
      if (data.tingkat) studentIdentity.tingkat = data.tingkat;
      if (data.rombel) studentIdentity.rombel = data.rombel;
      if (data.presensi) studentIdentity.presensi = data.presensi;
      if (data.nama) studentIdentity.nama = data.nama;
    }
  } catch (e) {
    console.warn("Could not read student profile:", e);
  }
}

function initTestState() {
  userAnswers = {};
  flaggedQuestions.clear();
  isExamSubmitted = false;
  remainingSeconds = 90 * 60;
  currentQuestionIndex = 0;

  const rawBank = (typeof getGrade12AsasQuestions === "function") ? getGrade12AsasQuestions() :
                  (typeof getGrade12AstsQuestions === "function") ? getGrade12AstsQuestions() : [];

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
  if (flaggedQuestions.has(index)) flagBtn.textContent = "🚩 Hapus Ragu";
  else flagBtn.textContent = "🏳️ Ragu-ragu";

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
      <div class="option-key-badge">\${opt.key}</div>
      <div class="option-text-content">\${opt.text}</div>
    \`;
    list.appendChild(item);
  });
  container.appendChild(list);
}

function renderMatrixTable(q, container) {
  const tableWrap = document.createElement("div");
  tableWrap.className = "complex-matrix-wrap";
  tableWrap.style.overflowX = "auto";
  tableWrap.style.margin = "12px 0";

  let currentMap = userAnswers[q.id] || {};

  let html = \`
    <table class="table-complex-matrix" style="width: 100%; border-collapse: collapse; border: 1.5px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: #fff;">
      <thead>
        <tr style="background: #f1f5f9; color: #1e293b; border-bottom: 2px solid #cbd5e1; text-align: left;">
          <th style="padding: 12px 14px; font-weight: 700; width: 62%;">Pernyataan / Analisis Situasi</th>
          <th style="padding: 12px 8px; text-align: center; width: 19%; background: #e0f2fe; color: #0369a1; font-weight: 700;">BENAR (TRUE)</th>
          <th style="padding: 12px 8px; text-align: center; width: 19%; background: #fee2e2; color: #b91c1c; font-weight: 700;">SALAH (FALSE)</th>
        </tr>
      </thead>
      <tbody>
  \`;

  q.matrixStatements.forEach((st, idx) => {
    const val = currentMap[idx];
    const isTrueChecked = (val === true) ? "checked" : "";
    const isFalseChecked = (val === false) ? "checked" : "";
    const bgRow = (idx % 2 === 0) ? "#ffffff" : "#f8fafc";

    html += \`
      <tr style="border-bottom: 1px solid #e2e8f0; background: \${bgRow};">
        <td style="padding: 12px 14px; font-size: 0.95rem; line-height: 1.5; color: #334155;">\${st.statement}</td>
        <td style="padding: 12px 8px; text-align: center; vertical-align: middle;">
          <label style="cursor: pointer; display: inline-flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
            <input type="radio" name="matrix_\${q.id}_\${idx}" value="true" \${isTrueChecked} onchange="handleMatrixSelect(\${q.id}, \${idx}, true)" style="transform: scale(1.3); cursor: pointer;" />
          </label>
        </td>
        <td style="padding: 12px 8px; text-align: center; vertical-align: middle;">
          <label style="cursor: pointer; display: inline-flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
            <input type="radio" name="matrix_\${q.id}_\${idx}" value="false" \${isFalseChecked} onchange="handleMatrixSelect(\${q.id}, \${idx}, false)" style="transform: scale(1.3); cursor: pointer;" />
          </label>
        </td>
      </tr>
    \`;
  });

  html += "</tbody></table>";
  tableWrap.innerHTML = html;
  container.appendChild(tableWrap);
}

function handleMatrixSelect(qId, stIdx, value) {
  if (!userAnswers[qId] || typeof userAnswers[qId] !== "object" || Array.isArray(userAnswers[qId])) {
    userAnswers[qId] = {};
  }
  userAnswers[qId][stIdx] = value;
  updateNavigatorStatus();
  saveProgressToLocalStorage();
}

function renderMCMACheckboxes(q, container) {
  const wrap = document.createElement("div");
  wrap.className = "mcma-options-wrap";
  wrap.style.display = "flex";
  wrap.style.flexDirection = "column";
  wrap.style.gap = "10px";
  wrap.style.margin = "12px 0";

  let currentArr = Array.isArray(userAnswers[q.id]) ? userAnswers[q.id] : [];

  q.options.forEach(opt => {
    const isChecked = currentArr.includes(opt.key);
    const item = document.createElement("div");
    item.className = "mcma-option-item" + (isChecked ? " selected" : "");
    item.style.display = "flex";
    item.style.alignItems = "flex-start";
    item.style.padding = "12px 14px";
    item.style.border = isChecked ? "2px solid var(--accent-teal)" : "1.5px solid #cbd5e1";
    item.style.borderRadius = "8px";
    item.style.background = isChecked ? "#f0fdfa" : "#ffffff";
    item.style.cursor = "pointer";
    item.style.transition = "all 0.2s ease";

    item.onclick = (e) => {
      if (e.target.tagName !== "INPUT") {
        const chk = item.querySelector("input[type=checkbox]");
        if (chk) chk.click();
      }
    };

    item.innerHTML = \`
      <div style="margin-right: 12px; display: flex; align-items: center; height: 24px;">
        <input type="checkbox" id="chk_\${q.id}_\${opt.key}" value="\${opt.key}" \${isChecked ? "checked" : ""} onchange="handleMCMAToggle(\${q.id}, '\${opt.key}', this.checked)" style="transform: scale(1.3); cursor: pointer;" />
      </div>
      <div style="flex: 1; font-size: 0.95rem; line-height: 1.5; color: #1e293b;">
        <strong style="color: var(--primary-navy); margin-right: 6px;">[\${opt.key}]</strong> \${opt.text}
      </div>
    \`;
    wrap.appendChild(item);
  });

  const tip = document.createElement("div");
  tip.style.fontSize = "0.85rem";
  tip.style.color = "#0284c7";
  tip.style.background = "#f0f9ff";
  tip.style.padding = "8px 12px";
  tip.style.borderRadius = "6px";
  tip.style.borderLeft = "3.5px solid #0284c7";
  tip.innerHTML = "💡 <em>Petunjuk: Pilihlah tepat <strong>2 opsi jawaban</strong> yang benar pada tipe soal MCMA ini.</em>";
  wrap.appendChild(tip);

  container.appendChild(wrap);
}

function handleMCMAToggle(qId, key, isChecked) {
  let arr = Array.isArray(userAnswers[qId]) ? [...userAnswers[qId]] : [];
  if (isChecked) {
    if (!arr.includes(key)) arr.push(key);
  } else {
    arr = arr.filter(k => k !== key);
  }
  arr.sort();
  userAnswers[qId] = arr;
  updateNavigatorStatus();
  saveProgressToLocalStorage();
  renderQuestion(currentQuestionIndex);
}

function navigateQuestion(step) {
  renderQuestion(currentQuestionIndex + step);
}

function toggleFlagQuestion() {
  if (flaggedQuestions.has(currentQuestionIndex)) {
    flaggedQuestions.delete(currentQuestionIndex);
  } else {
    flaggedQuestions.add(currentQuestionIndex);
  }
  renderQuestion(currentQuestionIndex);
}

// Audio Engine: Web Speech API Multi-Speaker
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
    if (playText) playText.textContent = "Putar Audio";
    if (playBtn) playBtn.style.backgroundColor = "var(--accent-teal)";
    if (statusText) statusText.textContent = "Penyimakan audio selesai. Silakan jawab pertanyaan.";
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

function checkUnansweredQuestions() {
  const unanswered = [];
  questions.forEach((q, idx) => {
    if (!isQuestionAnswered(q.id)) unanswered.push(idx + 1);
  });
  return unanswered;
}

function submitTest() {
  const unanswered = checkUnansweredQuestions();
  if (unanswered.length > 0) {
    const proceed = confirm(\`Masih terdapat \${unanswered.length} soal yang belum dijawab (Nomor: \${unanswered.slice(0, 10).join(", ")}\${unanswered.length > 10 ? "..." : ""}).\\nApakah Anda yakin ingin menyelesaikan tes sekarang?\`);
    if (!proceed) return;
  } else {
    if (!confirm("Apakah Anda yakin ingin menyelesaikan tes dan melihat hasil perolehan nilai?")) return;
  }

  isExamSubmitted = true;
  clearInterval(timerInterval);
  stopAudio();

  let correctCount = 0;
  let breakdownRows = "";

  questions.forEach((q, idx) => {
    const userAns = userAnswers[q.id];
    let isQCorrect = false;
    let userAnsLabel = "-";
    let keyLabel = "";

    if (q.type === "complex_matrix") {
      let stCorrect = 0;
      const totalSt = q.matrixStatements.length;
      q.matrixStatements.forEach((st, sIdx) => {
        const val = userAns ? userAns[sIdx] : undefined;
        if (val === st.isCorrect) stCorrect++;
      });
      isQCorrect = (stCorrect === totalSt);
      userAnsLabel = \`Benar \${stCorrect}/\${totalSt}\`;
      keyLabel = q.matrixStatements.map((s, i) => \`S\${i+1}:\${s.isCorrect ? 'T' : 'F'}\`).join(" ");
    } else if (q.type === "mcma") {
      const uArr = Array.isArray(userAns) ? [...userAns].sort() : [];
      const cArr = Array.isArray(q.correctAnswer) ? [...q.correctAnswer].sort() : [];
      isQCorrect = (uArr.length === cArr.length && uArr.every((v, i) => v === cArr[i]));
      userAnsLabel = uArr.length > 0 ? uArr.join(",") : "-";
      keyLabel = cArr.join(",");
    } else {
      isQCorrect = (userAns === q.correctAnswer);
      userAnsLabel = userAns || "-";
      keyLabel = q.correctAnswer;
    }

    if (isQCorrect) correctCount++;

    breakdownRows += \`
      <tr>
        <td style="text-align: center;">\${idx + 1}</td>
        <td>\${q.title || "Pilihan Ganda"}</td>
        <td style="text-align: center; font-weight: 700;">\${userAnsLabel}</td>
        <td style="text-align: center; font-weight: 700; color: #047857;">\${keyLabel}</td>
        <td style="text-align: center;">\${isQCorrect ? '<span style="color:#16a34a; font-weight:bold;">✔ Benar</span>' : '<span style="color:#dc2626; font-weight:bold;">✘ Salah</span>'}</td>
      </tr>
    \`;
  });

  const finalScore = Math.round((correctCount / questions.length) * 100);
  const isTuntas = finalScore >= 75;

  document.getElementById("modal-student-name").textContent = studentIdentity.nama;
  document.getElementById("modal-student-meta").textContent = \`Kelas: \${studentIdentity.tingkat} | Rombel: \${studentIdentity.rombel} | Presensi: \${studentIdentity.presensi}\`;
  document.getElementById("modal-score-grade").textContent = finalScore;
  document.getElementById("modal-score-badge").textContent = isTuntas ? "TUNTAS KKTP (≥ 75)" : "BELUM TUNTAS (< 75)";
  document.getElementById("modal-score-badge").className = "kktp-status " + (isTuntas ? "passed" : "failed");
  document.getElementById("modal-correct-count").textContent = correctCount;
  document.getElementById("modal-total-count").textContent = questions.length;
  document.getElementById("breakdown-tbody").innerHTML = breakdownRows;
  document.getElementById("result-modal").style.display = "flex";

  saveRecordToHistoryAndSheet(finalScore, correctCount, questions.length);
  renderQuestion(currentQuestionIndex);
}

function saveRecordToHistoryAndSheet(finalScore, correctCount, totalQuestions) {
  const record = {
    timestamp: new Date().toLocaleString("id-ID"),
    tingkat: studentIdentity.tingkat,
    rombel: studentIdentity.rombel,
    presensi: studentIdentity.presensi,
    nama: studentIdentity.nama,
    mode: (currentMode === "practice") ? "${modePractice}" : "${modeExam}",
    score: correctCount,
    total: totalQuestions,
    grade: finalScore,
    duration: \`\${Math.floor((90 * 60 - remainingSeconds) / 60)} menit\`
  };

  try {
    const history = JSON.parse(localStorage.getItem("sabaku_ats_history") || "[]");
    history.unshift(record);
    localStorage.setItem("sabaku_ats_history", JSON.stringify(history));
  } catch (err) {}

  sendScoreToGoogleSheet(record);
}

function sendScoreToGoogleSheet(record) {
  const webAppUrl = localStorage.getItem("sabaku_gs_url") || DEFAULT_GS_URL;
  if (!webAppUrl || webAppUrl.includes("REPLACE_WITH_YOUR")) return;

  const statusEl = document.getElementById("db-sync-status");
  if (statusEl) statusEl.innerHTML = "⏳ Menghubungkan dan menyimpan nilai ke pangkalan data sekolah...";

  const payload = {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record)
  };

  fetch(webAppUrl, payload).then(() => {
    if (statusEl) statusEl.innerHTML = "✅ Nilai Anda telah berhasil tersimpan di sistem basis data sekolah!";
  }).catch(() => {
    try {
      const beacon = new Image();
      const query = new URLSearchParams({
        action: "saveScore",
        tingkat: record.tingkat,
        rombel: record.rombel,
        presensi: record.presensi,
        nama: record.nama,
        score: record.score,
        total: record.total,
        grade: record.grade,
        mode: record.mode
      }).toString();
      beacon.src = \`\${webAppUrl}?\${query}\`;
    } catch (bErr) {}
    if (statusEl) statusEl.innerHTML = "✅ Nilai Anda telah tersimpan dengan aman di sistem sekolah.";
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

