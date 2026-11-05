const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = path.join(__dirname, '..');

function processXIWajib(filename, funcName) {
  const filePath = path.join(baseDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // Load questions using VM
  const sandbox = { SVG_PICTURES: { desk: 'desk', temple: 'temple', solar_school: 'solar_school' } };
  vm.createContext(sandbox);

  const fnMatch = content.match(new RegExp('function\\s+' + funcName + '\\(\\)\\s*\\{([\\s\\S]*?)\\n\\}'));
  if (!fnMatch) {
    console.error(`Cannot find ${funcName} in ${filename}`);
    return;
  }

  vm.runInContext('function ' + funcName + '() {' + fnMatch[1] + '\n}', sandbox);
  const questions = sandbox[funcName]();

  const cleanedExps = {
    1: "Audio mendeskripsikan seorang siswa yang duduk di meja belajarnya dengan laptop terbuka modern, sedang tekun menyusun artikel esai analitis di kamarnya yang tertata rapi.",
    2: "Audio menyebutkan destinasi budaya Indonesia yang menampilkan candi-candi batu megah berlatar perbukitan berkabut dengan relief berukir rumit.",
    3: "Audio mendeskripsikan instalasi panel surya fotovoltaik yang terpasang membentang di atap gedung sekolah modern untuk memasok energi bersih terbarukan.",
    4: "Siswa laki-laki menyarankan untuk memverifikasi berita: 'We should check trusted national news outlets and official government portals before sharing'.",
    5: "Siswi perempuan menegaskan pesan moral pementasan: 'deceitful shortcuts always bring regret in the end... true success demands honesty and patience'.",
    6: "Inisiatif ramah lingkungan yang diusulkan adalah membawa botol dan wadah makan reusable: 'If every student carries a reusable tumbler and food container, our school plastic waste will drop by half'.",
    7: "Monolog menguraikan bahwa literasi digital kritis bukan sekadar keterampilan mengoperasikan gadget, melainkan kemampuan mengevaluasi kebenaran informasi dan melindungi data pribadi.",
    8: "Pembicara menyarankan agar siswa meluangkan waktu sejenak untuk memverifikasi sumber berita sebelum membagikannya (pause and verify).",
    9: "Dokter menjelaskan bahwa tidur berkualitas 7-8 jam per malam esensial untuk konsolidasi memori dan menjaga fokus belajar jangka panjang.",
    10: "Rekomendasi gaya hidup sehat mencakup asupan gizi seimbang, pembatasan konsumsi gula berlebih, dan olahraga teratur.",
    11: "Teks analitis eksposisi bertujuan meyakinkan pembaca bahwa literasi digital kritis mutlak diperlukan oleh generasi muda di era limpahan informasi digital.",
    12: "Paragraf 2 menyatakan bahwa Roro Jonggrang menyusun siasat cerdik karena penolakan langsung akan memicu kemarahan berbahaya: 'Knowing that a direct refusal would provoke dangerous anger, she devised a clever plan'.",
    13: "Paragraf 4 menjelaskan bahwa Roro Jonggrang memerintahkan dayang-dayang membakar jerami kering di ufuk timur untuk menciptakan ilusi fajar: 'She instructed them to burn piles of dry straw to the east to illuminate the sky with an orange glow'.",
    14: "Kata 'deceptive' bersinonim dengan 'misleading' (menyesatkan atau memperdaya).",
    15: "Pesan moral dari kisah Roro Jonggrang dan Bandung Bondowoso adalah bahwa pemaksaan kehendak dan tipu muslihat pada akhirnya akan membuahkan penyesalan.",
    16: "• Pernyataan 1: SALAH — Literasi digital kritis bukan sekadar kecakapan teknis mengoperasikan gawai, melainkan kemampuan mengevaluasi kebenaran informasi.<br>• Pernyataan 2: BENAR — Judul bernada sensasional (clickbait) sengaja dirancang untuk memancing respons emosional pengguna internet.<br>• Pernyataan 3: SALAH — Jejak digital meninggalkan rekam elektronik yang tersimpan di server dan sangat sulit dihapus secara permanen.<br>• Pernyataan 4: BENAR — Kesadaran akan cara kerja algoritma membantu pengguna dalam mengatur alokasi waktu layar secara mandiri.",
    17: "• Pernyataan 1: SALAH — Preposisi 'because of' tidak boleh langsung diikuti oleh anak kalimat lengkap berpredikat ('they spend').<br>• Pernyataan 2: BENAR — Preposisi 'Due to' diikuti oleh frasa nomina ('excessive screen time') secara gramatikal.<br>• Pernyataan 3: BENAR — Konjungsi subordinatif 'because' diikuti oleh klausa lengkap (Subject + Verb) secara tepat.<br>• Pernyataan 4: SALAH — 'Owing to' adalah preposisi kausal yang tidak boleh langsung diikuti klausa berpredikat.",
    18: "• Pernyataan 1: BENAR — Pola modal pasif 'should not be + V3' ('should not be shared') tersusun secara tepat.<br>• Pernyataan 2: SALAH — Bentuk present continuous passive membutuhkan 'is being + V3' ('is being implemented'), bukan 'implementing'.<br>• Pernyataan 3: BENAR — Subjek jamak 'data' dalam past passive menggunakan to be jamak ('data were collected').<br>• Pernyataan 4: SALAH — Bentuk past participle (V3) dari kata kerja 'spread' adalah 'spread', bukan 'spreaded'.",
    19: "• Pernyataan 1: BENAR — Aktivitas fisik aerobik teratur meningkatkan sirkulasi oksigen ke otak dan mendukung daya ingat.<br>• Pernyataan 2: SALAH — Kurang tidur kronis justru menurunkan daya konsentrasi belajar dan kestabilan emosi.<br>• Pernyataan 3: BENAR — Pelepasan hormon endorfin saat berolahraga terbukti meredakan stres mental dan memperbaiki suasana hati.<br>• Pernyataan 4: SALAH — Asupan makanan berkadar gula tinggi berlebih memicu lonjakan gula darah mendadak yang diikuti rasa kantuk.",
    20: "• Pernyataan 1: BENAR — Kalimat pengandaian tipe 2 menggunakan pola baku: 'If + past simple, would + bare infinitive'.<br>• Pernyataan 2: SALAH — Bentuk subjunctive pengandaian resmi untuk orang pertama tunggal adalah 'If I WERE you', bukan 'If I was you'.<br>• Pernyataan 3: BENAR — Pola second conditional hipotesis 'If + V2, would + V1' tersusun secara gramatikal.<br>• Pernyataan 4: SALAH — Tidak boleh memadukan present simple 'study' dengan bentuk modal past perfect 'would have passed'.",
    21: "Argumen utama penulis dalam teks adalah menyaring kebenaran dan melindungi dari manipulasi hoaks, serta melindungi reputasi jejak digital dan menjaga kesehatan mental.",
    22: "Kalimat yang menggunakan konjungsi kausalitas secara tepat adalah yang berpola 'Owing to + Noun Phrase' ('Owing to the severe typhoon...') dan 'because + Clause' ('...because the regional weather was severe'). Kalimat lainnya salah penempatan konjungsi atau tidak diikuti klausa.",
    23: "Kalimat yang menggunakan konjungsi transisi pertentangan dengan tanda baca dan makna yang tepat adalah yang menggunakan 'however' dan 'nevertheless'. Kalimat lainnya salah karena menggabungkan 'Although' dengan 'but', atau 'in spite of' yang langsung diikuti klausa.",
    24: "Rekomendasi gaya hidup sehat yang efektif dan ilmiah menurut teks adalah menjaga waktu tidur berkualitas 7-8 jam per malam, serta melakukan aktivitas fisik/olahraga teratur minimal 30 menit sehari.",
    25: "Kalimat pasif baku adalah yang menggunakan bentuk 'have been introduced' (Present Perfect Passive) dan 'were announced' (Past Simple Passive). Kalimat lainnya salah pola kata kerja ('was did') atau tidak selaras subjek-predikat ('articles is').",
    26: "Teks analitis eksposisi berfokus membuktikan suatu tesis dengan argumen-argumen logis pendukung.",
    27: "Tesis utama artikel menekankan urgensi evaluasi kritis terhadap informasi digital.",
    28: "Paragraf 3 menyoroti dampak psikologis paparan konten negatif berkelanjutan.",
    29: "Kata 'verifying' bermakna mengonfirmasi atau membuktikan kebenaran suatu klaim fakta (confirming).",
    30: "Paragraf 4 merekomendasikan penetapan batas waktu penggunaan gawai secara sadar ('setting intentional screen time boundaries') serta aktif dalam komunitas digital yang suportif.",
    31: "Kaidah modal verb 'should' diikuti bentuk kata kerja dasar (bare infinitive): 'should verify'.",
    32: "Frasa 'Due to' berfungsi sebagai preposisi yang harus diikuti oleh frasa nomina (noun phrase).",
    33: "Bentuk pasif Simple Present Tense untuk subjek jamak adalah: are + Verb 3 ('are examined').",
    34: "Subjek kalimat adalah 'online claims' yang menerima aksi pasif dengan modal keharusan: Modal + be + V3 -> 'must be verified'.",
    35: "Konjungsi konsesif 'Although' digunakan untuk menghubungkan dua klausa yang saling bertolak belakang.",
    36: "Pola second conditional baku dibentuk dengan 'If + past simple, would + bare infinitive'.",
    37: "'Ought to' memiliki makna setara dengan 'should', digunakan untuk menyatakan anjuran moral yang kuat atau kewajiban etis (strong recommendation/moral duty).",
    38: "Konjungsi koordinatif 'so' digunakan untuk menyatakan hubungan sebab-akibat langsung.",
    39: "Ungkapan 'I couldn't agree more with your point' adalah idiom formal untuk menyatakan persetujuan mutlak (strong agreement). Pilihan lainnya menyatakan keraguan atau penolakan.",
    40: "Konektor transisi antarkalimat 'Furthermore' digunakan untuk menambahkan argumen pendukung yang sejalan."
  };

  questions.forEach(q => {
    if (cleanedExps[q.id]) {
      q.explanation = cleanedExps[q.id];
    }
  });

  const jsonQuestions = JSON.stringify(questions, null, 2);
  const newFuncCode = `function ${funcName}() {\n  return ${jsonQuestions};\n}`;

  content = content.replace(new RegExp('function\\s+' + funcName + '\\(\\)\\s*\\{[\\s\\S]*?\\n\\}'), newFuncCode);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[${filename}] Updated ${funcName} cleanly!`);
}

processXIWajib('kelas-xi-asas.js', 'getGrade11AsasQuestions');
processXIWajib('kelas-xi-asts.js', 'getGrade11AstsQuestions');

