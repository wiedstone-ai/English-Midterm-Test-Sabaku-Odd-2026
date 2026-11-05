const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = path.join(__dirname, '..');

function processXIIWajib(filename, funcName) {
  const filePath = path.join(baseDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Update engine randomizeQuestionOptions
  const oldRand = `    if (cloned.type === "complex_matrix" && Array.isArray(cloned.matrixStatements)) {
      const stmts = [...cloned.matrixStatements];
      for (let i = stmts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [stmts[i], stmts[j]] = [stmts[j], stmts[i]];
      }
      cloned.matrixStatements = stmts;
    } else if (Array.isArray(cloned.options) && cloned.options.length > 0) {`;

  const newRand = `    // NOTE: DO NOT shuffle complex_matrix statements so that Pernyataan 1, 2, 3, 4
    // always correspond strictly with the explanation and table rows.
    if (cloned.type !== "complex_matrix" && Array.isArray(cloned.options) && cloned.options.length > 0) {`;

  if (content.includes(oldRand)) {
    content = content.replace(oldRand, newRand);
    console.log(`[${filename}] Updated randomizeQuestionOptions.`);
  }

  // 2. Update expBox display condition
  const oldExp = 'if (isExamSubmitted || (currentMode === "practice" && isQuestionAnswered(q.id))) {';
  const newExp = 'if (isExamSubmitted) {';
  if (content.includes(oldExp)) {
    content = content.replace(oldExp, newExp);
    console.log(`[${filename}] Updated expBox condition.`);
  }

  // 3. Guard click handlers
  content = content.replace(
    /card\.onclick = \(\) => \{\s*userAnswers\[q\.id\] = opt\.key;\s*renderQuestion\(currentQuestionIndex\);\s*\};/g,
    'card.onclick = () => {\n      if (isExamSubmitted) return;\n      userAnswers[q.id] = opt.key;\n      renderQuestion(currentQuestionIndex);\n    };'
  );
  content = content.replace(
    /item\.onclick = \(\) => \{\s*userAnswers\[q\.id\] = opt\.key;\s*renderQuestion\(currentQuestionIndex\);\s*\};/g,
    'item.onclick = () => {\n      if (isExamSubmitted) return;\n      userAnswers[q.id] = opt.key;\n      renderQuestion(currentQuestionIndex);\n    };'
  );
  content = content.replace(
    /function handleMatrixSelect\(qId, stIdx, value\) \{\s*if \(!userAnswers\[qId\]/g,
    'function handleMatrixSelect(qId, stIdx, value) {\n  if (isExamSubmitted) return;\n  if (!userAnswers[qId]'
  );
  content = content.replace(
    /function handleMCMAToggle\(qId, optKey\) \{\s*let selected = userAnswers\[qId\]/g,
    'function handleMCMAToggle(qId, optKey) {\n  if (isExamSubmitted) return;\n  let selected = userAnswers[qId]'
  );

  // Load questions using VM
  const sandbox = { SVG_PICTURES: { debate: 'debate', energy_farm: 'energy_farm', smart_farm: 'smart_farm' } };
  vm.createContext(sandbox);

  const fnMatch = content.match(new RegExp('function\\s+' + funcName + '\\(\\)\\s*\\{([\\s\\S]*?)\\n\\}'));
  if (!fnMatch) {
    console.error(`Cannot find ${funcName} in ${filename}`);
    return;
  }

  vm.runInContext('function ' + funcName + '() {' + fnMatch[1] + '\n}', sandbox);
  const questions = sandbox[funcName]();

  const cleanedExps = {
    1: "Audio mendeskripsikan dua pembicara siswa formal yang berdiri di podium terpisah dan menyampaikan sudut pandang berlawanan di hadapan moderator dan audiens.",
    2: "Audio menyebutkan instalasi pembangkit listrik ramah lingkungan terdesentralisasi yang memadukan panel surya fotovoltaik biru dan kincir turbin angin modern.",
    3: "Audio menerangkan fasilitas rumah kaca pintar modern (*smart glass greenhouse*) yang dilengkapi dengan nosel mikro-irigasi otomatis dan sensor telemetri udara.",
    4: "Kekhawatiran utama yang dibahas adalah ketergantungan berlebihan pada AI dapat melemahkan daya pikir kritis serta orisinalitas ide siswa.",
    5: "Pembicara menjelaskan bahwa energi terbarukan terdesentralisasi lebih unggul karena investasi modal lebih terjangkau, pembangunan jauh lebih cepat, dan cocok untuk negara kepulauan tanpa risiko limbah radioaktif.",
    6: "Kedua pembicara sepakat bahwa pendidikan berkualitas digerakkan oleh semangat juang dan dedikasi guru, bukan semata kelengkapan fasilitas materi.",
    16: "• Pernyataan 1: BENAR — Teks menyatakan bahwa AI generatif mampu menghasilkan draf tulisan dan ringkasan dalam hitungan detik.<br>• Pernyataan 2: SALAH — Penulis tidak menganjurkan pelarangan AI secara mutlak, melainkan pemanfaatan secara etis dan bertanggung jawab.<br>• Pernyataan 3: BENAR — Ketergantungan berlebih berisiko melemahkan kemampuan penalaran mandiri dan pemecahan masalah kompleks.<br>• Pernyataan 4: SALAH — Penggunaan AI tanpa sitasi dan verifikasi justru berisiko menimbulkan plagiarisme dan kesalahan informasi.",
    17: "• Pernyataan 1: BENAR — Keuntungan energi surya dan angin terdesentralisasi adalah fleksibilitas instalasi di pulau-pulau terpencil.<br>• Pernyataan 2: SALAH — Pembangkit nuklir konvensional membutuhkan modal investasi awal yang sangat besar serta waktu konstruksi panjang.<br>• Pernyataan 3: SALAH — Teks menyoroti bahwa isu limbah radioaktif tetap menjadi tantangan keselamatan jangka panjang.<br>• Pernyataan 4: BENAR — Pendekatan bauran energi hijau bertahap merupakan solusi realistis untuk stabilitas pasokan listrik nasional.",
    18: "• Pernyataan 1: BENAR — Latar novel Laskar Pelangi menggambarkan keterbatasan fasilitas sekolah di pedalaman Belitung.<br>• Pernyataan 2: BENAR — Figur Bu Muslimah dan Pak Harfan menjadi teladan dedikasi pendidik sejati yang menginspirasi murid-muridnya.<br>• Pernyataan 3: SALAH — Resensi menekankan bahwa kemiskinan bukanlah penghalang untuk meraih cita-cita luhur melalui pendidikan.<br>• Pernyataan 4: SALAH — Resensi menyimpulkan bahwa novel Laskar Pelangi sarat dengan pesan moral dan nilai kemanusiaan yang mendalam.",
    19: "• Pernyataan 1: BENAR — Pola 'Even though' diikuti oleh klausa lengkap tanpa konjungsi koordinatif 'but'.<br>• Pernyataan 2: SALAH — 'Despite' tidak boleh diikuti oleh anak kalimat lengkap dengan predikat finite tanpa 'the fact that'.<br>• Pernyataan 3: BENAR — 'Whereas' membandingkan dua fakta yang berkebalikan secara simetris.<br>• Pernyataan 4: BENAR — 'Nevertheless' digunakan sebagai konjungsi transisi antarkalimat yang diawali tanda titik koma atau titik.",
    20: "• Pernyataan 1: BENAR — Perubahan kalimat langsung ke tidak langsung dengan kata kerja pelapor 'said' mengubah Simple Present menjadi Simple Past.<br>• Pernyataan 2: SALAH — Perubahan kalimat tanya dalam reported speech harus menggunakan susunan afirmatif (S + V), bukan susunan inversi tanya.<br>• Pernyataan 3: BENAR — Keterangan waktu 'tomorrow' berubah menjadi 'the following day' atau 'the next day'.<br>• Pernyataan 4: SALAH — Kalimat perintah/larangan menggunakan pola 'told ... not to + verb base', bukan 'did not'.",
    21: "Dua argumen kunci yang tepat adalah memfungsikan AI sebagai asisten riset pemicu ide dan menjaga integritas akademik dengan verifikasi data serta sitasi transparan.",
    22: "Kalimat yang menggunakan pola Third Conditional baku (If + had + V3, would/could have + V3) adalah 'If the technical team had installed the backup generator yesterday...' dan 'If the school had provided sufficient scholarship funds...'. Kalimat lainnya salah karena memadukan present perfect 'have seen' dengan waktu lampau 'yesterday' serta mencampur past tense 'took' dengan future 'will arrive'.",
    23: "Kalimat dengan konjungsi kontras yang baku adalah kalimat dengan konjungsi antarkalimat 'nevertheless' dan konjungsi subordinatif 'Even though'. Kalimat lainnya salah karena merangkap 'Although' dengan 'yet', atau menggunakan bentuk 'Despite of' yang tidak baku.",
    24: "Dua nilai luhur utama dalam ulasan Laskar Pelangi adalah kekuatan pendidikan dan empati melampaui kemiskinan, serta keteladanan dan dedikasi guru dalam membimbing anak-anak.",
    25: "Kalimat tidak langsung (reported speech) yang baku adalah kalimat yang mengubah Present Simple 'is' menjadi Past 'was', serta yang mengubah tenses lampau menjadi Past Perfect 'had completed' disertai time marker 'the previous evening'. Kalimat lainnya salah dalam pola ('told to me') atau memadukan present continuous dengan 'two days ago'."
  };

  questions.forEach(q => {
    if (cleanedExps[q.id]) {
      q.explanation = cleanedExps[q.id];
    }
  });

  // Fix Q22 Option C (remove Inversion)
  const q22 = questions.find(q => q.id === 22);
  if (q22) {
    const optC = q22.options.find(o => o.key === "C");
    if (optC) {
      optC.text = "If the school had provided sufficient scholarship funds, more rural students could have continued their higher education.";
    }
    q22.grammarNote = "Standard Third Conditional Accuracy.";
  }

  const jsonQuestions = JSON.stringify(questions, null, 2);
  const newFuncCode = `function ${funcName}() {\n  return ${jsonQuestions};\n}`;

  content = content.replace(new RegExp('function\\s+' + funcName + '\\(\\)\\s*\\{[\\s\\S]*?\\n\\}'), newFuncCode);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[${filename}] Processed successfully!`);
}

processXIIWajib('kelas-xii-asas.js', 'getGrade12AsasQuestions');
processXIIWajib('kelas-xii-asts.js', 'getGrade12AstsQuestions');

