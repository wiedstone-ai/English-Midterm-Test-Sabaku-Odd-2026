const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = path.join(__dirname, '..');

function processFile(filename, funcName) {
  const filePath = path.join(baseDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // Load questions using VM
  const sandbox = { SVG_PICTURES: { biotech_lab: 'biotech_lab', un_assembly: 'un_assembly', tokamak_fusion: 'tokamak_fusion', printing_press: 'printing_press' } };
  vm.createContext(sandbox);

  const fnMatch = content.match(new RegExp('function\\s+' + funcName + '\\(\\)\\s*\\{([\\s\\S]*?)\\n\\}'));
  if (!fnMatch) {
    console.error(`Cannot find ${funcName} in ${filename}`);
    return;
  }

  vm.runInContext('function ' + funcName + '() {' + fnMatch[1] + '\n}', sandbox);
  const questions = sandbox[funcName]();

  // Clean explanations for all questions and replace Q17, Q22, Q31, Q32
  const cleanedExps = {
    1: "Audio mendeskripsikan peneliti sains di laboratorium modern yang menganalisis untaian DNA digital pada layar komputer.",
    2: "Audio mendeskripsikan ruang sidang majelis internasional di mana delegasi muda duduk melingkar mendiskusikan tujuan pembangunan berkelanjutan.",
    3: "Audio mendeskripsikan instalasi fasilitas riset fusi energi bersih terbarukan dengan ruang reaktor sentral sirkular.",
    4: "Pembicara wanita menekankan bahwa pedagang kecil pedesaan masih bergantung pada uang tunai fisik, serta terdapat risiko gangguan server dan ancaman penipuan digital.",
    5: "Kedua pembicara mengagumi ketangguhan Nyai Ontosoroh yang mengelola perkebunan melalui kerja keras dan membela martabat keluarga di tengah diskriminasi kolonial.",
    6: "Kedua tokoh pemuda bersepakat bahwa aksi nyata bersih pantai oleh pelajar harus diperkuat dengan regulasi pembatasan plastik dan fasilitas daur ulang dari pemerintah.",
    7: "Topik utama kuliah adalah bagaimana sastra modern Indonesia membangun kesadaran kebangsaan dan memperjuangkan keadilan sosial.",
    8: "Dosen menyatakan bahwa para penulis perintis memandang sastra sebagai instrumen berdaya kuat untuk refleksi sosial, empati kolektif, dan tanggung jawab sipil.",
    9: "Pembicara menjelaskan bahwa algoritma media sosial dirancang untuk memaksimalkan atensi dan keterlibatan pengguna dengan memicu respons emosional.",
    10: "Sekolah harus membekali siswa dengan kemampuan meneliti sumber, memverifikasi bukti, dan menjadi warga digital yang kritis.",
    11: "Tujuan komunikatif teks diskusi adalah menyajikan dua sudut pandang yang berimbang (keuntungan efisiensi vs tantangan inklusi dan privasi) mengenai masyarakat nontunai.",
    12: "Paragraf 1 menyatakan manfaat transaksi digital bagi UMKM, yaitu merampingkan pencatatan pembukuan, mempercepat proses pembayaran, dan memperluas akses ke pinjaman mikro resmi.",
    13: "Paragraf 2 menyoroti risiko eksklusi keuangan bagi warga pedesaan, pedagang pasar tradisional, dan lansia yang belum memiliki akses internet atau rekening bank formal.",
    14: "Kata 'streamline' berarti mengefisienkan atau menyederhanakan suatu alur proses agar berjalan lebih lancar, teratur, dan hemat waktu.",
    15: "Penulis merekomendasikan ekosistem keuangan hibrida, yaitu merangkul efisiensi teknologi digital sambil tetap menjamin akses uang tunai fisik bagi masyarakat rentan.",
    16: "• Pernyataan 1: BENAR — Keuntungan QRIS bagi pembukuan dan efisiensi serta keamanan transaksi dinyatakan jelas pada paragraf 1.<br>• Pernyataan 2: SALAH — Penulis tidak menyarankan pelarangan uang tunai, melainkan merekomendasikan ekosistem keuangan hibrida.<br>• Pernyataan 3: BENAR — Lansia dan masyarakat di daerah terpencil memang rentan mengalami eksklusi keuangan digital.<br>• Pernyataan 4: SALAH — Sistem pembayaran digital tetap memiliki risiko gangguan server, pemadaman listrik, dan penipuan siber.",
    17: "• Pernyataan 1: BENAR — Kalimat pengandaian tipe 3 (Third Conditional) menggunakan pola baku 'If + had + V3, would have + V3'.<br>• Pernyataan 2: BENAR — Konjungsi 'Unless' (jika tidak) digunakan secara tepat bersama Simple Present Tense untuk menyatakan kondisi realistis.<br>• Pernyataan 3: BENAR — Frasa 'Provided that' (dengan syarat) berfungsi setara dengan 'If' dalam kalimat pengandaian tipe 1.<br>• Pernyataan 4: SALAH — Terjadi kerancuan tenses; pengandaian tentang peristiwa tadi malam ('last night') yang tidak terwujud seharusnya menggunakan past perfect ('had studied') berpasangan dengan modal past ('would have achieved').",
    18: "• Pernyataan 1: BENAR — Pola it-cleft 'It was ... that ...' tersusun secara tepat untuk memberikan penekanan pada subjek.<br>• Pernyataan 2: BENAR — Pola wh-cleft 'What students need most ... is ...' menggunakan to be tunggal 'is' yang selaras dengan klausa 'what'.<br>• Pernyataan 3: SALAH — Struktur cleft penekanan menggunakan kata hubung 'that' ('It is through social media that...'), bukan 'which'.<br>• Pernyataan 4: SALAH — Klausa subjek 'What surprised the literary critics' memerlukan to be tunggal 'was', bukan 'were'.",
    19: "• Pernyataan 1: BENAR — Latar novel berlangsung pada akhir abad ke-19 di Hindia Belanda (Surabaya).<br>• Pernyataan 2: SALAH — Minke adalah siswa pribumi cerdas di H.B.S. yang fasih berbahasa Belanda dan berpikir maju.<br>• Pernyataan 3: BENAR — Nyai Ontosoroh digambarkan sebagai figur teladan berkarakter tangguh yang mandiri dan menguasai hukum perniagaan.<br>• Pernyataan 4: SALAH — Resensi menyimpulkan bahwa novel Bumi Manusia adalah karya sastra klasik penting yang abadi dan sangat bernilai bagi siswa.",
    20: "• Pernyataan 1: BENAR — Klausa konsesif 'Much as' bermakna 'Meskipun sangat...' dan tersusun dengan tata bahasa yang tepat.<br>• Pernyataan 2: BENAR — Konjungsi 'Whereas' digunakan secara tepat untuk membandingkan dua fakta yang berkebalikan secara langsung.<br>• Pernyataan 3: SALAH — Tidak boleh menggunakan konjungsi koordinatif 'but' setelah anak kalimat yang diawali 'Even though'.<br>• Pernyataan 4: BENAR — Frasa preposisi 'In contrast to' diikuti oleh frasa nomina ('urban centers with fast 5G coverage') untuk menunjukkan perbedaan kontras.",
    21: "Dua keunggulan utama sistem pembayaran digital menurut teks adalah kecepatan transaksi tanpa repot membawa uang tunai fisik, serta pencatatan pembukuan transparan yang mempermudah akses kredit bagi usaha kecil.",
    22: "Kalimat pengandaian tipe 3 baku dibentuk dengan 'If + had + V3, would have + V3' ('If the agricultural cooperative had adopted smart irrigation earlier...'). Kalimat pengandaian tipe 2 baku dibentuk dengan 'If + past simple, would + bare infinitive' ('If the school organized an international literature workshop...'). Dua kalimat lainnya tidak tepat karena memadukan present perfect 'have seen' dengan keterangan waktu lampau 'yesterday' serta mencampur past simple 'arrived' dengan future 'will meet'.",
    23: "Kalimat yang menggunakan pola cleft secara baku adalah 'It was Minke's eloquent journalistic writing that exposed colonial injustice...' dan 'It is through empathy and mutual respect that diverse communities can live together...'. Sementara itu, kalimat dengan klausa 'what' sebagai subjek memerlukan kata kerja tunggal ('was' / 'is'), bukan jamak ('were' / 'are').",
    24: "Dua nilai luhur yang ditonjolkan adalah kecerdasan luar biasa, ketangguhan berwirausaha, dan keteguhan harga diri Nyai Ontosoroh, serta komitmen Minke pada literasi, kesadaran sosial, dan keberanian moral menyuarakan hak kaum tertindas.",
    25: "Kalimat yang menggunakan penanda transisi kontras secara tepat adalah kalimat dengan konjungsi antarkalimat 'on the other hand' dan konjungsi subordinatif 'While'. Kalimat lainnya salah karena menggabungkan 'Although' dengan 'because', atau salah memadukan preposisi 'In spite of' dengan klausa berpredikat dan 'but'.",
    26: "Tujuan utama teks resensi sastra adalah mengevaluasi karya sastra (novel Bumi Manusia) secara mendalam serta merekomendasikannya kepada para pembaca dan pelajar.",
    27: "Paragraf 1 menyatakan secara spesifik bahwa novel berlatar di Surabaya, Hindia Belanda (kolonial Indonesia) pada akhir abad ke-19.",
    28: "Nyai Ontosoroh mendidik dirinya sendiri dalam bidang hukum dan perdagangan Belanda hingga berhasil menjadi pengelola sukses perusahaan perkebunan besar.",
    29: "Paragraf 3 mencatat kritik minor bahwa sebagian pembaca modern mungkin merasa tempo pembuka novel agak lambat/terencana ('somewhat deliberate in pacing') sebelum ketegangan dramatisnya memuncak.",
    30: "Kata 'transcends' bermakna melampaui batasan ruang dan waktu, menunjukkan relevansi novel yang abadi melintasi generasi zaman.",
    31: "Klausul syarat 'if' pada kalimat pengandaian tipe 3 (Third Conditional) membutuhkan bentuk Past Perfect Tense ('had investigated') untuk berpasangan dengan klausa utama hipotesis masa lampau 'would have been averted'.",
    32: "Frasa konjungsi 'provided that' bermakna 'dengan syarat' atau 'asalkan', berfungsi menghubungkan klausa utama dengan klausa kondisi atau prasyarat yang harus dipenuhi.",
    33: "Rumus kalimat It-cleft baku menggunakan kata penghubung 'that' ('It was his perseverance that...') untuk memfokuskan elemen subjek yang ditegaskan.",
    34: "Rumus Wh-cleft baku menempatkan klausa 'what' di awal kalimat dengan kata kerja to be berbentuk tunggal ('was') yang selaras dengan pelengkap kalimat.",
    35: "Kaidah subjunctive mood formal setelah kata kerja seperti 'recommend', 'demand', atau 'insist' mewajibkan kata kerja dasar (bare infinitive / base form): 'recommend that the system be updated'.",
    36: "Konjungsi subordinatif 'Whereas' digunakan secara tepat untuk menghubungkan dua klausa yang membandingkan fakta berkebalikan secara langsung.",
    37: "Kata 'meticulously' bersinonim dengan 'carefully and thoroughly' (secara teliti, cermat, dan mendalam).",
    38: "Frasa preposisi 'In spite of' diikuti oleh gerund atau frasa nomina ('facing severe financial limitations'). Konjungsi seperti Although, Even though, dan Whereas harus diikuti oleh klausa lengkap berpredikat.",
    39: "Konteks kalimat menunjukkan target cita-cita yang tinggi namun dibatasi oleh sumber daya, sehingga kata sifat yang paling berterima adalah 'ambitious'.",
    40: "Konektor diskursus penutup 'In conclusion' digunakan secara tepat untuk merangkum dan menutup argumen esai secara komprehensif."
  };

  questions.forEach(q => {
    if (cleanedExps[q.id]) {
      q.explanation = cleanedExps[q.id];
    }
  });

  // Specifically replace Q17 (Inversion -> Conditionals If/Unless/Provided that)
  const q17 = questions.find(q => q.id === 17);
  if (q17) {
    q17.title = "Complex Multiple Choice: Conditional Sentences (If, Unless, Provided That)";
    q17.stimulusTitle = "Grammar Focus: Real and Hypothetical Conditionals (If / Unless / Provided That)";
    q17.stimulusBody = "<p style=\"margin-bottom:0;\">Evaluate conditional sentence structures with conditional conjunctions (<em>If, Unless, Provided that</em>).</p>";
    q17.prompt = "Determine whether each conditional sentence below is grammatically **TRUE** (correct) or **FALSE** (incorrect):";
    q17.matrixStatements = [
      {
        statement: "If the school had provided comprehensive cybersecurity training, students would have recognized the phishing link immediately.",
        isCorrect: true
      },
      {
        statement: "Unless students exercise caution when opening email attachments, their personal accounts are at risk of cyber fraud.",
        isCorrect: true
      },
      {
        statement: "Provided that the regional government invests in rural broadband, digital financial inclusion will expand significantly.",
        isCorrect: true
      },
      {
        statement: "If they studied the vocabulary list last night, they will achieve a perfect score on the grammar test today.",
        isCorrect: false
      }
    ];
    q17.grammarNote = "Mastery of Conditional Clauses (If, Unless, Provided That) in Advanced English.";
  }

  // Specifically replace Q22 (Inversion -> Standard Conditionals Types 2 & 3)
  const q22 = questions.find(q => q.id === 22);
  if (q22) {
    q22.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q22.stimulusTitle = "Grammar Focus: Standard Conditional Sentences (Types 2 & 3)";
    q22.stimulusBody = "<p style=\"margin-bottom:0;\">Select sentences that correctly adhere to standard conditional frameworks.</p>";
    q22.prompt = "Which **TWO (2)** sentences correctly demonstrate standard conditional sentence structures?";
    q22.options = [
      {
        key: "A",
        text: "If the agricultural cooperative had adopted smart irrigation earlier, crop yields would have doubled during the drought."
      },
      {
        key: "B",
        text: "If the school organized an international literature workshop, many aspiring writers would participate enthusiastically."
      },
      {
        key: "C",
        text: "If I have seen the competition announcement yesterday morning, I would submit the application promptly."
      },
      {
        key: "D",
        text: "If she arrived earlier yesterday, she will meet the visiting novelist in the auditorium."
      }
    ];
    q22.correctAnswer = ["A", "B"];
    q22.grammarNote = "Conditional Sentence Syntax across Hypothetical Structures.";
  }

  // Specifically replace Q31 (Inversion -> Third Conditional with If)
  const q31 = questions.find(q => q.id === 31);
  if (q31) {
    q31.title = "Grammar & Structure: Third Conditional with If";
    q31.prompt = "If the technical team ________ the electrical system earlier, the laboratory blackout would have been averted.";
    q31.options = [
      { key: "A", text: "had investigated" },
      { key: "B", text: "investigates" },
      { key: "C", text: "has investigated" },
      { key: "D", text: "would investigate" }
    ];
    q31.correctAnswer = "A";
    q31.grammarNote = "Third Conditional Structure in Technical Contexts.";
  }

  // Specifically replace Q32 (Inversion -> Conditional Conjunction: Provided that)
  const q32 = questions.find(q => q.id === 32);
  if (q32) {
    q32.title = "Grammar & Structure: Conditional Conjunction (Provided that)";
    q32.prompt = "Candidates will be granted special accommodations during the examination ________ they submit an official medical certificate in advance.";
    q32.options = [
      { key: "A", text: "provided that" },
      { key: "B", text: "in spite of" },
      { key: "C", text: "although" },
      { key: "D", text: "unless" }
    ];
    q32.correctAnswer = "A";
    q32.grammarNote = "Conditional Conjunctions ('Provided that' / 'As long as') in Formal Contexts.";
  }

  // Format question bank as clean JSON indented code
  const jsonQuestions = JSON.stringify(questions, null, 2);
  const newFuncCode = `function ${funcName}() {\n  return ${jsonQuestions};\n}`;

  content = content.replace(new RegExp('function\\s+' + funcName + '\\(\\)\\s*\\{[\\s\\S]*?\\n\\}'), newFuncCode);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[${filename}] Updated ${funcName} with 40 clean questions!`);
}

processFile('kelas-xii-tl-asas.js', 'getGrade12TLAsasQuestions');
processFile('kelas-xii-tl-asts.js', 'getGrade12TLAstsQuestions');

