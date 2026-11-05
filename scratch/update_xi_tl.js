const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = path.join(__dirname, '..');

function processXITL(filename, funcName) {
  const filePath = path.join(baseDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // Load questions using VM
  const sandbox = { SVG_PICTURES: { library: 'library', theater: 'theater', weather_station: 'weather_station' } };
  vm.createContext(sandbox);

  const fnMatch = content.match(new RegExp('function\\s+' + funcName + '\\(\\)\\s*\\{([\\s\\S]*?)\\n\\}'));
  if (!fnMatch) {
    console.error(`Cannot find ${funcName} in ${filename}`);
    return;
  }

  vm.runInContext('function ' + funcName + '() {' + fnMatch[1] + '\n}', sandbox);
  const questions = sandbox[funcName]();

  // Targeted cleanups for Q1-Q40 in Kelas XI TL
  const cleanedExps = {
    1: "Audio mendeskripsikan seorang siswi yang sedang mempelajari naskah kuno tulisan tangan di perpustakaan ('reading an ancient handwritten manuscript in the library, carefully taking notes on her laptop'). Gambar yang sesuai mencerminkan naskah kuno dan laptop.",
    2: "Audio menyebutkan pementasan drama teater di panggung batu luar ruangan: 'performing a classic theatrical drama in traditional costumes'.",
    3: "Audio mendeskripsikan kubah stasiun pengamatan cuaca di atas bukit hijau tepi laut: 'automated weather station dome measures wind and solar energy'.",
    4: "Guru menjelaskan bahwa kesombongan akan membawa kegagalan, dan kebesaran sejati datang dari kerendahan hati: 'Arrogance and selfish ambition will always lead to failure... true greatness comes from humility'.",
    5: "Kedua siswa sepakat bahwa AI dapat digunakan sebagai panduan belajar, tetapi siswa harus tetap menyusun analisis kritis orisinal sendiri.",
    6: "Tujuan proposal OSIS adalah mengurangi sampah plastik dengan mewajibkan botol dan wadah makan isi ulang.",
    7: "Pembicara menyatakan bahwa dongeng tradisional diwariskan untuk mengajarkan nilai kehidupan yang penting: 'passed down by our ancestors to teach essential life lessons... respect parents, honor promises, and treat the poor with kindness'.",
    8: "Pembicara menjelaskan: 'we preserve our rich cultural identity while improving our English literacy skills' (melestarikan identitas budaya sekaligus melatih kecakapan literasi bahasa Inggris).",
    9: "Konselor menyebutkan dampak buruk penggunaan media sosial berlebih: 'excessive screen time often leads to sleep deprivation, reduced concentration during classes, and feelings of anxiety'.",
    10: "Konselor merekomendasikan: 'Set a daily limit for entertainment screen time, silence your phone notifications while studying, and always double-check news stories'.",
    11: "Tema moral utama cerita rakyat Rawa Pening adalah bahwa nilai sejati seseorang diukur dari kebaikan hati dan kerendahan hati, bukan dari kekayaan lahiriah atau kesombongan rupa: 'true human worth is found in kindness and humility, not in outward wealth or pride'.",
    12: "Paragraf 3 menyatakan secara eksplisit bahwa warga desa bersikap angkuh dan mencemooh pakaian koyak serta rupa kotor Baru Klinthing: 'the wealthy villagers were proud and arrogant... mocked his ragged clothes and dirty appearance'.",
    13: "Berbeda dari warga desa yang kaya namun sombong, Mbok Rondo menyambut Baru Klinthing dengan ketulusan dan memberinya makan serta minum: 'she generously offered him warm rice, fresh vegetables, and cool water'.",
    14: "Kata 'shunned' (bentuk lampau dari 'shun') bermakna dijauhi, dihindari, atau disisihkan oleh orang lain (avoided and rejected).",
    15: "Tantangan mencabut lidi dilakukan Baru Klinthing untuk mempermalukan kesombongan dan keangkuhan warga desa yang mengklaim diri mereka hebat dan kuat, namun tak satu pun sanggup mencabutnya.",
    16: "• Pernyataan 1: BENAR — Baru Klinthing diusir dan diperlakukan secara kejam oleh warga desa karena rupa fisiknya yang penuh luka.<br>• Pernyataan 2: SALAH — Mbok Rondo justru menyambut hangat Baru Klinthing dan memberinya makanan serta minuman.<br>• Pernyataan 3: BENAR — Tak seorang pun dari warga yang angkuh sanggup mencabut lidi yang ditancapkan Baru Klinthing.<br>• Pernyataan 4: SALAH — Seluruh desa tenggelam menjadi danau dan hanya Mbok Rondo yang selamat di atas lesung penumbuk padi.",
    17: "• Pernyataan 1: BENAR — Frasa 'heartbroken' adalah metafora kesedihan batin mendalam, bukan luka fisik pada jantung.<br>• Pernyataan 2: BENAR — Simile 'gushed forth like a powerful fountain' menggambarkan semburan air yang sangat deras dan cepat.<br>• Pernyataan 3: SALAH — Tokoh Mbok Rondo adalah figur penolong yang tulus, bukan antagonis utama.<br>• Pernyataan 4: BENAR — Lesung kayu penumbuk padi berfungsi sebagai simbol penyelamat bagi kebajikan dan ketulusan Mbok Rondo.",
    18: "• Pernyataan 1: BENAR — Teks eksposisi hortatori memuat rekomendasi aksi nyata bagi pelajar dalam memanfaatkan teknologi AI secara bertanggung jawab.<br>• Pernyataan 2: BENAR — Paragraf 2 menguraikan bahaya penurunan kapasitas nalar independen bila siswa sekadar menyalin jawaban AI.<br>• Pernyataan 3: SALAH — AI generatif tidak menjamin kebenaran mutlak dan dapat menghasilkan informasi yang keliru (halusinasi data).<br>• Pernyataan 4: BENAR — Paragraf penutup merekomendasikan pendekatan berimbang: memanfaatkan AI sebagai asisten belajar tanpa mengorbankan kerja keras orisinal.",
    19: "• Pernyataan 1: SALAH — Penulis menolak pelarangan AI secara mutlak dan merekomendasikan pemanfaatan secara seimbang dan beretika.<br>• Pernyataan 2: BENAR — Menulis analitis secara mandiri melatih daya berpikir kritis serta membangun orisinalitas pemikiran.<br>• Pernyataan 3: BENAR — Algoritma AI bekerja berdasarkan pola statistik sehingga rentan menghasilkan kutipan atau klaim faktual fiktif.<br>• Pernyataan 4: SALAH — Mengumpulkan tugas yang sepenuhnya dihasilkan oleh chatbot tanpa telaah kritis melanggar integritas akademik.",
    20: "• Pernyataan 1: BENAR — Pola it-cleft 'It was through her compassionate generosity that...' tersusun secara tepat untuk memberikan penekanan klausa preposisi.<br>• Pernyataan 2: BENAR — Pola wh-cleft 'What students need to cultivate is...' menggunakan to be singular 'is' yang selaras dengan klausa 'what'.<br>• Pernyataan 3: SALAH — Struktur it-cleft untuk objek non-orang menggunakan konjungsi 'that', bukan 'which'.<br>• Pernyataan 4: SALAH — Klausa subjek 'What astonished the arrogant villagers' memerlukan to be tunggal 'was', bukan 'were'.",
    21: "Dua nilai moral utama cerita rakyat Rawa Pening adalah memperlakukan sesama dengan ketulusan dan kerendahan hati tanpa memandang rupa atau status sosial, serta menyadari bahwa kesombongan dan kekejaman pada akhirnya akan mendatangkan kerugian dan kehancuran.",
    22: "Dua tindakan etis dan produktif dalam pemanfaatan AI adalah menggunakan AI untuk memantik sudut pandang analitis baru atau memperjelas konsep sains rumit, serta melakukan verifikasi silang kritis terhadap rangkuman AI dengan literatur akademik tepercaya.",
    23: "Kalimat yang menerapkan pola inversi negatif secara tepat adalah 'Seldom have researchers witnessed...' dan 'Under no circumstances should learners submit...'. Kedua kalimat tersebut menempatkan kata kerja bantu (auxiliary verb) mendahului subjek setelah adverbial negatif pembatas.",
    24: "Dua rekomendasi kunci penulis teks hortatori adalah memanfaatkan AI secara seimbang dan bertanggung jawab sebagai asisten belajar, serta membiasakan diri memverifikasi keakuratan informasi AI menggunakan sumber tepercaya.",
    25: "Kalimat yang menggunakan frasa preposisi konsesi secara baku adalah kalimat dengan 'Notwithstanding + Noun Phrase' ('Notwithstanding his severe physical wounds...') dan 'Despite + Noun Phrase' ('Despite its immense computational capabilities...'). Pilihan lainnya salah karena memadukan 'In spite of' langsung dengan klausa berpredikat dan 'but'.",
    26: "Tujuan komunikatif teks eksposisi hortatori adalah membujuk dan meyakinkan pembaca bahwa pelajar SMA harus memanfaatkan AI secara bertanggung jawab sebagai pendukung belajar mandiri.",
    27: "Tesis penulis ada pada kalimat terakhir paragraf 1: 'Therefore, high school students should learn to use AI responsibly as a supportive study assistant rather than letting it do all the thinking for them'.",
    28: "Paragraf 2 menyatakan bahwa menulis esai dengan kata-kata sendiri melatih otak merangkai argumen, berpikir kritis, dan mengekspresikan gagasan orisinal: 'they practice organizing arguments, thinking critically, and expressing their original voice'.",
    29: "Kata 'relying' (dari phrasal verb 'rely on') bermakna bergantung pada, mempercayakan diri sepenuhnya (depending on).",
    30: "Paragraf 3 menjelaskan bahwa AI memprediksi pola bahasa yang ditemukan di internet sehingga sewaktu-waktu dapat menghasilkan fakta keliru ('occasionally produce false facts... with high confidence'). AI tidak memahami kebenaran faktual secara sadar.",
    31: "Ketika kalimat diawali adverbial pembatas 'Rarely' dan subjeknya jamak ('students') dalam Present Simple, pola inversinya adalah: Rarely + do + Subject + V1 ('Rarely do students achieve...').",
    32: "Setelah kata kerja rekomendasi (recommend, suggest, insist) + that + Subject, kata kerja yang digunakan adalah Subjunctive bentuk dasar (Bare Infinitive / V1 tanpa akhiran -s): 'that every student revise'.",
    33: "Kata hubung yang menyatakan hubungan pertentangan (konsesif) yang diikuti oleh klausa lengkap (Subject + Verb) adalah 'Although' (meskipun/walaupun).",
    34: "Bentuk inversi untuk Conditional Type 3 menghilangkan kata 'If' dan memindahkan auxiliary 'Had' ke depan subjek: 'Had the students cross-checked...' = 'If the students had cross-checked...'.",
    35: "Subjek 'online claims' menerima tindakan verifikasi. Rumus passive modal anjuran kuat adalah: ought to + be + V3 ('ought to be carefully verified').",
    36: "Pola kalimat pasif impersonal untuk menyatakan pandangan umum adalah: Subject + is/are + Adverb + V3 + to-infinitive -> 'is widely recognized to be...'.",
    37: "Perfect Participle ('Having + V3') menyatakan bahwa suatu tindakan (mencabut lidi) telah tuntas sebelum tindakan berikutnya pada kalimat utama terjadi: 'Having pulled the small wooden stick... Baru Klinthing watched...'.",
    38: "Frasa 'their selfish pride and cruelty' adalah Noun Phrase. Kata penghubung penyebab yang diikuti oleh noun phrase adalah preposisi 'because of'. 'Although' dan 'even though' harus diikuti oleh klausa lengkap.",
    39: "Kolokasi akademis yang baku dan natural dengan kata 'role' adalah 'crucial role' (peran yang sangat penting/krusial) atau 'vital role'.",
    40: "Ketika diawali 'Not only' dalam Present Simple dengan subjek tunggal 'artificial intelligence', klausanya mengalami inversi: Not only + does + Subject + V1 ('Not only does artificial intelligence assist...')."
  };

  questions.forEach(q => {
    if (cleanedExps[q.id]) {
      q.explanation = cleanedExps[q.id];
    }
  });

  // Fix Q20 grammarNote in XI TL
  const q20 = questions.find(q => q.id === 20);
  if (q20) {
    q20.grammarNote = "Cleft Sentences & Focus Constructions for Emphatic Discourse.";
  }

  const jsonQuestions = JSON.stringify(questions, null, 2);
  const newFuncCode = `function ${funcName}() {\n  return ${jsonQuestions};\n}`;

  content = content.replace(new RegExp('function\\s+' + funcName + '\\(\\)\\s*\\{[\\s\\S]*?\\n\\}'), newFuncCode);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[${filename}] Updated ${funcName} cleanly!`);
}

processXITL('kelas-xi-tl-asas.js', 'getGrade11TLAsasQuestions');
processXITL('kelas-xi-tl-asts.js', 'getGrade11TLAstsQuestions');

