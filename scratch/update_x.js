const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = path.join(__dirname, '..');

function processX(filename, funcName) {
  const filePath = path.join(baseDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // Load questions using VM
  const sandbox = { SVG_PICTURES: { badminton: 'badminton', temple: 'temple', minaret: 'minaret' } };
  vm.createContext(sandbox);

  const fnMatch = content.match(new RegExp('function\\s+' + funcName + '\\(\\)\\s*\\{([\\s\\S]*?)\\n\\}'));
  if (!fnMatch) {
    console.error(`Cannot find ${funcName} in ${filename}`);
    return;
  }

  vm.runInContext('function ' + funcName + '() {' + fnMatch[1] + '\n}', sandbox);
  const questions = sandbox[funcName]();

  const cleanedExps = {
    1: "Audio mendeskripsikan: 'athlete is leaping high in the air to deliver a powerful, precision smash with his racket over the net'. Gambar yang sesuai menampilkan atlet bulu tangkis yang melompat melakukan pukulan smash dengan raket.",
    2: "Audio menyebutkan: 'magnificent Indonesian cultural destination features ancient massive stone stupas, detailed relief stone carvings, and tiered terraces'. Ciri-ciri stupa batu bertingkat dan relief kuno adalah candi bersejarah (Temple).",
    3: "Audio menyebutkan: 'unique architectural landmark in Kudus blends Hindu-Javanese traditional brickwork design with Islamic minaret structure'. Landmark menara bata merah ikonik khas Kudus adalah Menara Kudus.",
    4: "Pada rekaman, pembicara perempuan menyatakan kebiasaannya menjaga kebugaran: 'I always maintain a nutritious diet, drink plenty of fresh water, and jog for twenty minutes every morning before studying'.",
    5: "Siswi perempuan menyampaikan niatnya: 'intend to visit the mangrove conservation park in Jepara. We want to plant ten mangrove seedlings to prevent coastal erosion'.",
    6: "Siswa laki-laki merespons masukan guru: 'I will modify the font colors to high-contrast white and resize the heading immediately'.",
    7: "Monolog menyatakan: 'renowned for his lightning-fast footwork, deceptive wrist drop-shots, and determined and strong fighting spirit on court'. Kutipan ini mendeskripsikan gaya permainan atlet secara akurat.",
    8: "Pada bagian akhir monolog disebutkan: 'Off court, he is humble, disciplined, and dedicated to mentoring younger shuttlecock players'.",
    9: "Tujuan komunikatif teks deskriptif adalah menggambarkan ciri khusus, kepribadian, dan prestasi atlet secara rinci.",
    10: "Paragraf kedua berfokus menguraikan rutinitas latihan fisik intensif sang atlet.",
    11: "Kepulauan Karimunjawa terkenal dengan keanekaragaman hayati terumbu karang dan kejernihan air lautnya.",
    12: "Informasi spesifik tentang luas kawasan konservasi laut dipaparkan pada paragraf pertama.",
    13: "Kata 'pristine' bersinonim dengan 'pure and unpolluted' (murni, bersih, dan belum terjamah polusi).",
    14: "Daya tarik utama Karimunjawa bagi wisatawan bahari adalah panorama bawah laut yang spektakuler.",
    15: "Penulis merekomendasikan perlunya menjaga kelestarian terumbu karang dari dampak negatif pariwisata massal.",
    16: "• Pernyataan 1: SALAH — Hanya 5 dari 27 pulau di Kepulauan Karimunjawa yang berpenghuni.<br>• Pernyataan 2: BENAR — Taman Nasional Karimunjawa resmi dideklarasikan pada tahun 2001.<br>• Pernyataan 3: BENAR — Kejernihan air laut Karimunjawa memungkinkan jarak pandang selam melebihi 20 meter.<br>• Pernyataan 4: SALAH — Sebagian besar warga setempat bekerja sebagai nelayan tradisional dan pemandu ekowisata.",
    17: "• Pernyataan 1: BENAR — Kalimat menggunakan Simple Present Tense untuk menyatakan fakta ilmiah umum.<br>• Pernyataan 2: SALAH — Subjek 'The coral reefs' berbentuk jamak sehingga membutuhkan to be 'are' ('are observed'), bukan 'is'.<br>• Pernyataan 3: BENAR — Kesesuaian subjek jamak dan kata kerja Simple Present terpasang secara tepat.<br>• Pernyataan 4: SALAH — Kata 'extraordinarily' berakhiran -ly adalah adverb of degree yang menerangkan kata sifat 'breathtaking'.",
    18: "• Pernyataan 1: BENAR — Urutan kata sifat mengikuti kaidah OSASCOMP: Opinion (charming) -> Size (small) -> Age (old) -> Material (wooden).<br>• Pernyataan 2: SALAH — Susunan yang benar adalah 'A magnificent ancient stone statue' (Opinion -> Age -> Material).<br>• Pernyataan 3: BENAR — Urutan tepat: Opinion (energetic) -> Age (young) -> Origin (Indonesian) -> Purpose (badminton).<br>• Pernyataan 4: SALAH — Dimensi ukuran (Size) harus mendahului bentuk (Shape): 'A large circular brown dining table'.",
    19: "• Pernyataan 1: BENAR — Badak Jawa saat ini hanya bertahan hidup di habitat terbatas Taman Nasional Ujung Kulon.<br>• Pernyataan 2: SALAH — Badak Jawa bercula satu ('single horn') dengan panjang cula kurang dari 25 cm.<br>• Pernyataan 3: SALAH — Badak Jawa adalah satwa herbivora yang hidup menyendiri (soliter), bukan pemangsa kelompok.<br>• Pernyataan 4: BENAR — Indra pendengaran dan penciuman tajam mengompensasi daya penglihatan badak yang terbatas.",
    20: "• Pernyataan 1: BENAR — Conditional Type 1 menggunakan pola: 'If + Simple Present, will + Verb base'.<br>• Pernyataan 2: SALAH — Subjunctive pengandaian hipotesis baku menggunakan 'If I WERE you, I WOULD...'.<br>• Pernyataan 3: BENAR — Conditional Type 2 menggunakan pola: 'If + Simple Past, would + Verb base'.<br>• Pernyataan 4: SALAH — Pengandaian realistis masa depan harus menggunakan 'If the weather is sunny, we WILL visit'.",
    21: "Kalimat yang menggunakan Simple Present Tense secara benar ('demonstrates', 'remains') dan kata sifat deskriptif bermakna tinggi ('extraordinary focus', 'athletic posture') merupakan pilihan yang tepat. Kalimat lainnya salah tata bahasa ('will bought') atau tidak koheren.",
    22: "Teks Report ilmiah menekankan objektivitas melalui penggunaan istilah teknis ilmiah, general nouns, serta kalimat pasif untuk memfokuskan proses atau fenomena ilmiah tanpa bias personal.",
    23: "'conservation' adalah nomina pelestarian lingkungan, sedangkan 'endangered' adalah adjektiva terancam punah (misalnya: endangered species). Bentuk 'conservatively' dan 'dangerously' tidak sesuai konteks kelas kata.",
    24: "'I am planning to...' dan 'We intend to...' adalah formula baku untuk menyatakan rencana atau intensi (stating intentions). Pilihan lainnya menyatakan penyesalan masa lalu atau ketidakpedulian.",
    25: "Kalimat dengan pola pasif 'are + Verb 3' yang sempurna adalah 'wastes are collected' dan 'herbs are carefully preserved'. Kalimat lainnya merupakan kalimat aktif atau memiliki kesalahan gramatikal seperti 'will delivers'.",
    26: "Paragraf kedua menjelaskan: 'This high-pressure thermal steam is channeled upwards through specialized pipeline networks to drive turbine generators, which convert kinetic energy into electrical power'.",
    27: "Teks Report ilmiah memaparkan fenomena panas bumi (geothermal energy) secara objektif dan sistematis.",
    28: "Prinsip kerja pembangkit geotermal memanfaatkan uap panas alami bumi untuk memutar generator turbin listrik.",
    29: "Kata 'sustainable' bersinonim dengan 'renewable and ecologically sound' (terbarukan dan berkelanjutan).",
    30: "Keunggulan utama energi geotermal dibanding bahan bakar fosil adalah tingkat emisi karbon yang sangat rendah.",
    31: "Subjek utama kalimat adalah 'The dedicated biology teacher' (tunggal/singular). Frasa penjelas 'accompanied by twenty enthusiastic students' tidak mengubah jumlah subjek utama. Keterangan waktu 'currently' menunjukkan waktu sekarang, sehingga kata kerja yang benar adalah 'is'.",
    32: "Objek 'Full scholarships' adalah jamak (plural). Tense kalimat aktif adalah Simple Present Tense ('awards'). Maka rumus pasifnya: Object (plural) + ARE + Verb 3 (awarded) + by Agent.",
    33: "Urutan kata sifat OSASCOMP yang benar untuk mendeskripsikan batik adalah: Opinion (exquisite) -> Origin (Javanese) -> Material (silk).",
    34: "Bentuk Simple Present Tense orang ketiga tunggal (She/He/It) membutuhkan akhiran -s/-es pada kata kerja: 'preserves'.",
    35: "Ungkapan 'I am planning to conduct' adalah pola menyatakan niat (stating intention) yang gramatikal.",
    36: "Kata depan (preposition) yang tepat untuk menerangkan posisi di bawah permukaan air adalah 'beneath' atau 'under'.",
    37: "Konektor penambahan informasi 'In addition' digunakan untuk memperkuat paparan ciri fisik flora/fauna.",
    38: "Bentuk pasif Simple Present Tense untuk subjek tunggal 'The historical artifact' adalah: is + Verb 3 ('is displayed').",
    39: "Kata sifat deskriptif 'breathtaking' mengekspresikan kekaguman mendalam terhadap pemandangan alam Karimunjawa.",
    40: "Kalimat penutup teks deskriptif merangkum keistimewaan tempat dan kesan mendalam bagi para pengunjung."
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

processX('kelas-x-asas.js', 'getGrade10Questions');
processX('kelas-x-asts.js', 'getGrade10Questions');
