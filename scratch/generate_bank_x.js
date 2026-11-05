function generateGrade10Bank(isAsts = false) {
  const bankFnName = isAsts ? "getGrade10Questions" : "getGrade10Questions";

  return `/**
 * ASESMEN SUMATIF ${isAsts ? "TENGAH" : "AKHIR"} SEMESTER (${isAsts ? "ASTS" : "ASAS"}) GASAL 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT X — FASE E
 * Standar: TKA & AKM Literasi (Pilihan Ganda, Matrix Kompleks, & MCMA - CEFR Level A2)
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

const SVG_PICTURES = {
  athlete: \`<svg viewBox="0 0 100 100" fill="none" stroke="#dc2626" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="22" r="10" fill="#fee2e2" stroke="#dc2626"/><path d="M50 32v24M50 42l18-12M50 42l-18 8M50 56l-14 24M50 56l16 22" stroke="#dc2626" stroke-width="3"/><circle cx="74" cy="26" r="4" fill="#fca5a5" stroke="#b91c1c"/></svg>\`,
  borobudur: \`<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 80h70M22 68h56M30 56h40M38 44h24M46 32h8" stroke="#78350f" stroke-width="3"/><path d="M50 16v16" stroke="#b45309" stroke-width="3.5"/><circle cx="50" cy="22" r="6" fill="#fef3c7" stroke="#d97706"/></svg>\`,
  menaraKudus: \`<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="36" y="30" width="28" height="52" fill="#ecfdf5" stroke="#047857" stroke-width="2.5"/><polygon points="32,30 50,12 68,30" fill="#d1fae5" stroke="#047857" stroke-width="2"/><line x1="50" y1="36" x2="50" y2="76" stroke="#059669"/><line x1="36" y1="52" x2="64" y2="52" stroke="#059669"/><rect x="44" y="62" width="12" height="20" fill="#a7f3d0" stroke="#047857"/></svg>\`,
  karimunjawa: \`<svg viewBox="0 0 100 100" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 82c20-6 40 4 80-2" stroke="#0369a1" stroke-width="3"/><circle cx="78" cy="28" r="10" fill="#fef08a" stroke="#ca8a04"/><path d="M25 82c4-20 18-36 22-44M47 38c6-6 16-6 22 0M47 38c2-10 10-14 18-10M47 38c-6-8-16-6-20-2" stroke="#16a34a" stroke-width="2.5"/></svg>\`
};

function ${bankFnName}() {
  return [
    {
      id: 1,
      source: "Kemendikbudristek — Listening Practice Fase E",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number one. Look at the pictures. A young male badminton player in a red jersey is jumping high to smash the shuttlecock on the court. Which picture matches the description?",
      audioSegments: [
        {
          text: "Number one. Look at the pictures in your test booklet. A young male badminton player in a red jersey is jumping high to smash the shuttlecock on the court. Which picture matches the description?",
          lang: "en-US",
          role: "narrator"
        }
      ],
      prompt: "Which picture matches the badminton athlete jumping to smash on the court?",
      options: [
        { key: "A", svg: SVG_PICTURES.athlete, label: "A badminton athlete jumping to smash" },
        { key: "B", svg: SVG_PICTURES.borobudur, label: "Borobudur ancient stone temple" },
        { key: "C", svg: SVG_PICTURES.menaraKudus, label: "Menara Kudus historical heritage tower" },
        { key: "D", svg: SVG_PICTURES.karimunjawa, label: "A tropical beach with palm trees" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan seorang atlet bulu tangkis yang melompat tinggi untuk melakukan pukulan smash di lapangan ('badminton player in a red jersey is jumping high to smash').",
      grammarNote: "Present continuous tense: 'is jumping high to smash'."
    },
    {
      id: 2,
      source: "Kemendikbudristek — Listening Practice Fase E",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number two. Look at the pictures. Built in the eighth century in Central Java, this famous stone temple has many Buddha statues and bell-shaped stupas. Which picture shows this heritage site?",
      audioSegments: [
        {
          text: "Number two. Look at the pictures. Built in the eighth century in Central Java, this famous stone temple has many Buddha statues and bell-shaped stupas. Which picture shows this heritage site?",
          lang: "en-US",
          role: "narrator"
        }
      ],
      prompt: "Which picture shows the famous ancient stone temple in Central Java?",
      options: [
        { key: "A", svg: SVG_PICTURES.athlete, label: "A badminton athlete jumping to smash" },
        { key: "B", svg: SVG_PICTURES.borobudur, label: "Borobudur ancient stone temple" },
        { key: "C", svg: SVG_PICTURES.menaraKudus, label: "Menara Kudus historical heritage tower" },
        { key: "D", svg: SVG_PICTURES.karimunjawa, label: "A tropical beach with palm trees" }
      ],
      correctAnswer: "B",
      explanation: "Audio mendeskripsikan Candi Borobudur dengan stupa lonceng dan patung Buddha di Jawa Tengah ('stone temple has many Buddha statues and bell-shaped stupas').",
      grammarNote: "Descriptive adjectives: 'famous stone temple', 'bell-shaped stupas'."
    },
    {
      id: 3,
      source: "Kemendikbudristek — Listening Practice Fase E",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number three. Look at the pictures. Located in the town of Kudus, this historic red-brick tower combines Hindu architecture and Islamic culture. Which picture shows this tower?",
      audioSegments: [
        {
          text: "Number three. Look at the pictures. Located in the town of Kudus, this historic red-brick tower combines Hindu architecture and Islamic culture. Which picture shows this tower?",
          lang: "en-US",
          role: "narrator"
        }
      ],
      prompt: "Which picture shows the historic Menara Kudus tower?",
      options: [
        { key: "A", svg: SVG_PICTURES.athlete, label: "A badminton athlete jumping to smash" },
        { key: "B", svg: SVG_PICTURES.borobudur, label: "Borobudur ancient stone temple" },
        { key: "C", svg: SVG_PICTURES.menaraKudus, label: "Menara Kudus historical heritage tower" },
        { key: "D", svg: SVG_PICTURES.karimunjawa, label: "A tropical beach with palm trees" }
      ],
      correctAnswer: "C",
      explanation: "Audio mendeskripsikan Menara Kudus yang dibangun dari bata merah dengan perpaduan corak Hindu dan Islam ('red-brick tower combines Hindu architecture and Islamic culture').",
      grammarNote: "Prepositional phrase of place: 'Located in the town of Kudus'."
    },
    {
      id: 4,
      source: "Modul Pembelajaran Bahasa Inggris Kelas X — Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Number four. Listen to a conversation between two students.", pauseAfter: 450 },
        { role: "student_m", lang: "en-US", name: "Budi", text: "How do you stay healthy during exam week, Siti?", pauseAfter: 300 },
        { role: "student_f", lang: "en-US", name: "Siti", text: "I drink plenty of water, eat fresh fruit, and jog for twenty minutes every morning before studying.", pauseAfter: 400 },
        { role: "narrator", lang: "en-US", text: "Question: What does the female student do to keep healthy during exam week?", pauseAfter: 300 }
      ],
      stimulusTitle: "Dialogue: Healthy Habits During Exams",
      stimulusBody: "<p><strong>Speaker 1 (Male):</strong> How do you stay healthy during exam week, Siti?</p><p><strong>Speaker 2 (Female):</strong> I drink plenty of water, eat fresh fruit, and jog for twenty minutes every morning before studying.</p>",
      prompt: "What does the female student do to keep healthy during exam week?",
      options: [
        { key: "A", text: "She drinks water, eats fresh fruit, and jogs every morning." },
        { key: "B", text: "She sleeps only two hours every night." },
        { key: "C", text: "She eats instant noodles all day." },
        { key: "D", text: "She avoids drinking clean water." }
      ],
      correctAnswer: "A",
      explanation: "Siti menjelaskan kebiasaan sehatnya: banyak minum air, makan buah segar, dan berolahraga lari pagi selama 20 menit sebelum belajar.",
      grammarNote: "Simple present tense for daily routines: 'drink, eat, and jog'."
    },
    {
      id: 5,
      source: "Modul Pembelajaran Bahasa Inggris Kelas X — Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Number five. Listen to a conversation about holiday plans.", pauseAfter: 450 },
        { role: "student_m", lang: "en-US", name: "Rizky", text: "What are your plans for the upcoming holiday, Maya?", pauseAfter: 300 },
        { role: "student_f", lang: "en-US", name: "Maya", text: "My family and I will visit Karimunjawa. I cannot wait to swim with colorful fish and walk on the white sand beaches.", pauseAfter: 400 },
        { role: "narrator", lang: "en-US", text: "Question: What is Maya planning to do during the holiday?", pauseAfter: 300 }
      ],
      stimulusTitle: "Dialogue: Vacation Plans to Karimunjawa",
      stimulusBody: "<p><strong>Speaker 1 (Male):</strong> What are your plans for the upcoming holiday, Maya?</p><p><strong>Speaker 2 (Female):</strong> My family and I will visit Karimunjawa. I cannot wait to swim with colorful fish and walk on the white sand beaches.</p>",
      prompt: "What is Maya planning to do during the holiday?",
      options: [
        { key: "A", text: "Visit Karimunjawa with her family to swim and enjoy the beach." },
        { key: "B", text: "Stay inside her bedroom doing extra homework." },
        { key: "C", text: "Build a wooden fishing boat in the garage." },
        { key: "D", text: "Work as an English teacher in Jakarta." }
      ],
      correctAnswer: "A",
      explanation: "Maya berencana mengunjungi Karimunjawa bersama keluarganya untuk berenang melihat ikan warna-warni dan menikmati pantai berpasir putih.",
      grammarNote: "Future intention: 'My family and I will visit Karimunjawa'."
    },
    {
      id: 6,
      source: "Modul Pembelajaran Bahasa Inggris Kelas X — Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Number six. Listen to a conversation in the school library.", pauseAfter: 450 },
        { role: "student_m", lang: "en-US", name: "Ahmad", text: "Excuse me, where can I find the English storybooks?", pauseAfter: 300 },
        { role: "student_f", lang: "en-US", name: "Dewi", text: "They are on the second shelf next to the window. You can read them here or borrow them with your student card.", pauseAfter: 400 },
        { role: "student_m", lang: "en-US", name: "Ahmad", text: "Thank you! I will borrow one right now.", pauseAfter: 350 },
        { role: "narrator", lang: "en-US", text: "Question: What will the male student do next?", pauseAfter: 300 }
      ],
      stimulusTitle: "Dialogue: Finding Storybooks in the Library",
      stimulusBody: "<p><strong>Speaker 1 (Male):</strong> Excuse me, where can I find the English storybooks?</p><p><strong>Speaker 2 (Female):</strong> They are on the second shelf next to the window. You can read them here or borrow them with your student card.</p><p><strong>Speaker 1 (Male):</strong> Thank you! I will borrow one right now.</p>",
      prompt: "What will the male student do next?",
      options: [
        { key: "A", text: "Borrow an English storybook from the second shelf." },
        { key: "B", text: "Buy a new dictionary at the city bookstore." },
        { key: "C", text: "Go to the canteen to buy food." },
        { key: "D", text: "Leave his school bag on the bus." }
      ],
      correctAnswer: "A",
      explanation: "Siswa laki-laki tersebut akan meminjam buku cerita bahasa Inggris dari rak kedua di dekat jendela perpustakaan ('borrow one right now').",
      grammarNote: "Future action: 'I will borrow one right now'."
    },
    {
      id: 7,
      source: "Kemendikbudristek — Listening Monologue: Anthony Sinisuka Ginting",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Questions seven and eight are based on the following short talk about an Indonesian sports figure.", pauseAfter: 400 },
        { role: "teacher_m", lang: "en-US", name: "Mr. Joko", text: "Anthony Sinisuka Ginting is one of Indonesia's most famous badminton athletes. Born in Cimahi, West Java, he started playing badminton when he was in elementary school. On the court, Ginting is well known for his fast footwork and powerful smashes. He trains hard every single day to bring honor to our country.", pauseAfter: 500 },
        { role: "narrator", lang: "en-US", text: "Number seven. What is Anthony Ginting famous for on the badminton court?", pauseAfter: 350 }
      ],
      prompt: "What is Anthony Ginting famous for on the badminton court?",
      options: [
        { key: "A", text: "His fast footwork and powerful smashes." },
        { key: "B", text: "His tall height and slow running." },
        { key: "C", text: "His singing ability on television." },
        { key: "D", text: "His collection of racing cars." }
      ],
      correctAnswer: "A",
      explanation: "Anthony Ginting terkenal di lapangan bulu tangkis karena pergerakan kakinya yang cepat dan pukulan smash yang kuat ('fast footwork and powerful smashes').",
      grammarNote: "Compound noun phrase: 'fast footwork and powerful smashes'."
    },
    {
      id: 8,
      source: "Kemendikbudristek — Listening Monologue: Anthony Sinisuka Ginting",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        { role: "teacher_m", lang: "en-US", name: "Mr. Joko", text: "Outside the court, Anthony Ginting is a humble and polite person. He always smiles, respects his opponents, and loves meeting his fans. Young people look up to him as a positive role model.", pauseAfter: 350 },
        { role: "narrator", lang: "en-US", text: "Number eight. How does Anthony Ginting behave outside the court?", pauseAfter: 300 }
      ],
      prompt: "How does Anthony Ginting behave outside the court?",
      options: [
        { key: "A", text: "He is humble, polite, and always respects other people." },
        { key: "B", text: "He is arrogant and refuses to talk to fans." },
        { key: "C", text: "He complains about his training schedule." },
        { key: "D", text: "He avoids sports competitions completely." }
      ],
      correctAnswer: "A",
      explanation: "Di luar lapangan, Anthony Ginting dikenal ramah, rendah hati, dan menghormati lawan serta penggemarnya ('humble, polite, and always respects other people').",
      grammarNote: "Personality adjectives: 'humble, polite'."
    },
    {
      id: 9,
      source: "Kemendikbudristek — Listening Monologue: School Reading Week",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Questions nine and ten are based on the following school library announcement.", pauseAfter: 400 },
        { role: "teacher_f", lang: "en-US", name: "Mrs. Indah", text: "Attention, all students. Next Monday, our school will start the English Reading Week. Every student is invited to visit the library and choose one English storybook to read. Reading stories helps you learn new vocabulary and enjoy reading.", pauseAfter: 500 },
        { role: "narrator", lang: "en-US", text: "Number nine. What is the school announcement about?", pauseAfter: 350 }
      ],
      prompt: "What is the school announcement about?",
      options: [
        { key: "A", text: "The English Reading Week starting next Monday." },
        { key: "B", text: "A football competition between teachers." },
        { key: "C", text: "A school trip to a waterpark." },
        { key: "D", text: "The closing of the school library." }
      ],
      correctAnswer: "A",
      explanation: "Pengumuman tersebut berisi informasi tentang Pekan Membaca Bahasa Inggris (English Reading Week) yang akan dimulai hari Senin depan.",
      grammarNote: "Announcement language: 'Attention, all students'."
    },
    {
      id: 10,
      source: "Kemendikbudristek — Listening Monologue: School Reading Week",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        { role: "teacher_f", lang: "en-US", name: "Mrs. Indah", text: "At the end of the week, write a short book review on a colorful card and pin it to your classroom board.", pauseAfter: 350 },
        { role: "narrator", lang: "en-US", text: "Number ten. What will students do at the end of the English Reading Week?", pauseAfter: 300 }
      ],
      prompt: "What will students do at the end of the English Reading Week?",
      options: [
        { key: "A", text: "Write a short book review on a card and pin it to the board." },
        { key: "B", text: "Sell storybooks to other students." },
        { key: "C", text: "Paint the classroom desks green." },
        { key: "D", text: "Take a three-hour written exam." }
      ],
      correctAnswer: "A",
      explanation: "Pada akhir pekan kegiatan, siswa diminta menulis ulasan singkat buku di kartu warna-warni dan menempelkannya di papan kelas ('write a short book review on a colorful card').",
      grammarNote: "Imperative instructions: 'write a short book review'."
    },
    {
      id: 11,
      source: "Teks Deskriptif Pariwisata Jawa Tengah — Karimunjawa (Fase E)",
      type: "single_choice",
      title: "Reading Section: Descriptive Text",
      stimulusTitle: "Text 1: The Beautiful Karimunjawa Islands",
      stimulusBody: "Karimunjawa is a beautiful group of twenty-seven small islands located in the Java Sea, north of Jepara, Central Java. It is famous for its clean beaches, clear turquoise water, and rich marine life. Many local and foreign tourists visit Karimunjawa to relax and enjoy nature.<br><br>The main attraction of Karimunjawa is its underwater beauty. The sea around the islands is very clean and clear, so visitors can easily see colorful coral reefs and swimming tropical fish. Snorkeling and diving are the most popular activities here. Tourists can also visit Menjangan Island, where they can see baby sharks swimming safely in a protected pool.<br><br>Besides its underwater life, Karimunjawa also has beautiful land scenery. The islands are covered with green hills, coconut trees, and peaceful mangrove forests. In the late afternoon, visitors love to sit on the white sand of Tanjung Gelam beach to watch the golden sunset.<br><br>Karimunjawa is a wonderful place for anyone who loves nature. To keep this paradise beautiful, visitors are encouraged to protect the coral reefs and avoid throwing plastic trash into the ocean.",
      prompt: "What is the main topic of paragraph 2?",
      options: [
        { key: "A", text: "The underwater beauty and popular water activities in Karimunjawa." },
        { key: "B", text: "The history of the ancient kings in Jepara." },
        { key: "C", text: "How to build hotels on the beach." },
        { key: "D", text: "The price of airline tickets to Central Java." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 membahas tentang keindahan bawah laut Karimunjawa dan kegiatan air yang populer seperti snorkeling dan diving.",
      grammarNote: "Main idea of a descriptive paragraph."
    },
    {
      id: 12,
      source: "Teks Deskriptif Pariwisata Jawa Tengah — Karimunjawa (Fase E)",
      type: "single_choice",
      title: "Reading Section: Descriptive Text",
      stimulusTitle: "Text 1: The Beautiful Karimunjawa Islands",
      stimulusBody: "Karimunjawa is a beautiful group of twenty-seven small islands located in the Java Sea, north of Jepara, Central Java. It is famous for its clean beaches, clear turquoise water, and rich marine life. Many local and foreign tourists visit Karimunjawa to relax and enjoy nature.<br><br>The main attraction of Karimunjawa is its underwater beauty. The sea around the islands is very clean and clear, so visitors can easily see colorful coral reefs and swimming tropical fish. Snorkeling and diving are the most popular activities here. Tourists can also visit Menjangan Island, where they can see baby sharks swimming safely in a protected pool.<br><br>Besides its underwater life, Karimunjawa also has beautiful land scenery. The islands are covered with green hills, coconut trees, and peaceful mangrove forests. In the late afternoon, visitors love to sit on the white sand of Tanjung Gelam beach to watch the golden sunset.<br><br>Karimunjawa is a wonderful place for anyone who loves nature. To keep this paradise beautiful, visitors are encouraged to protect the coral reefs and avoid throwing plastic trash into the ocean.",
      prompt: "The word 'clear' in paragraph 2 ('The sea around the islands is very clean and clear') is closest in meaning to...",
      options: [
        { key: "A", text: "transparent and clean" },
        { key: "B", text: "muddy and dark" },
        { key: "C", text: "very noisy" },
        { key: "D", text: "cold and icy" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'clear' dalam konteks air laut bermakna jernih, tembus pandang, dan bersih ('transparent and clean').",
      grammarNote: "Adjective synonym: clear = transparent/clean."
    },
    {
      id: 13,
      source: "Teks Deskriptif Pariwisata Jawa Tengah — Karimunjawa (Fase E)",
      type: "single_choice",
      title: "Reading Section: Descriptive Text",
      stimulusTitle: "Text 1: The Beautiful Karimunjawa Islands",
      stimulusBody: "Karimunjawa is a beautiful group of twenty-seven small islands located in the Java Sea, north of Jepara, Central Java. It is famous for its clean beaches, clear turquoise water, and rich marine life. Many local and foreign tourists visit Karimunjawa to relax and enjoy nature.<br><br>The main attraction of Karimunjawa is its underwater beauty. The sea around the islands is very clean and clear, so visitors can easily see colorful coral reefs and swimming tropical fish. Snorkeling and diving are the most popular activities here. Tourists can also visit Menjangan Island, where they can see baby sharks swimming safely in a protected pool.<br><br>Besides its underwater life, Karimunjawa also has beautiful land scenery. The islands are covered with green hills, coconut trees, and peaceful mangrove forests. In the late afternoon, visitors love to sit on the white sand of Tanjung Gelam beach to watch the golden sunset.<br><br>Karimunjawa is a wonderful place for anyone who loves nature. To keep this paradise beautiful, visitors are encouraged to protect the coral reefs and avoid throwing plastic trash into the ocean.",
      prompt: "What special marine animals can visitors see at Menjangan Island according to paragraph 2?",
      options: [
        { key: "A", text: "Baby sharks swimming in a protected pool." },
        { key: "B", text: "Wild tigers resting under trees." },
        { key: "C", text: "Penguins walking on the ice." },
        { key: "D", text: "Camels carrying luggage." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 menyebutkan bahwa di Pulau Menjangan wisatawan dapat melihat anak hiu yang berenang aman di kolam perlindungan ('baby sharks swimming safely in a protected pool').",
      grammarNote: "Explicit detail from descriptive text."
    },
    {
      id: 14,
      source: "Teks Deskriptif Pariwisata Jawa Tengah — Karimunjawa (Fase E)",
      type: "single_choice",
      title: "Reading Section: Descriptive Text",
      stimulusTitle: "Text 1: The Beautiful Karimunjawa Islands",
      stimulusBody: "Karimunjawa is a beautiful group of twenty-seven small islands located in the Java Sea, north of Jepara, Central Java. It is famous for its clean beaches, clear turquoise water, and rich marine life. Many local and foreign tourists visit Karimunjawa to relax and enjoy nature.<br><br>The main attraction of Karimunjawa is its underwater beauty. The sea around the islands is very clean and clear, so visitors can easily see colorful coral reefs and swimming tropical fish. Snorkeling and diving are the most popular activities here. Tourists can also visit Menjangan Island, where they can see baby sharks swimming safely in a protected pool.<br><br>Besides its underwater life, Karimunjawa also has beautiful land scenery. The islands are covered with green hills, coconut trees, and peaceful mangrove forests. In the late afternoon, visitors love to sit on the white sand of Tanjung Gelam beach to watch the golden sunset.<br><br>Karimunjawa is a wonderful place for anyone who loves nature. To keep this paradise beautiful, visitors are encouraged to protect the coral reefs and avoid throwing plastic trash into the ocean.",
      prompt: "Why do tourists like to visit Tanjung Gelam beach in the late afternoon?",
      options: [
        { key: "A", text: "To sit on the white sand and watch the golden sunset." },
        { key: "B", text: "To buy groceries at the night market." },
        { key: "C", text: "To climb tall mountain rocks." },
        { key: "D", text: "To play football in the rain." }
      ],
      correctAnswer: "A",
      explanation: "Wisatawan suka duduk di pasir putih Pantai Tanjung Gelam pada sore hari untuk menyaksikan matahari terbenam yang indah ('watch the golden sunset').",
      grammarNote: "Infinitive of purpose: 'to watch the golden sunset'."
    },
    {
      id: 15,
      source: "Teks Deskriptif Pariwisata Jawa Tengah — Karimunjawa (Fase E)",
      type: "single_choice",
      title: "Reading Section: Descriptive Text",
      stimulusTitle: "Text 1: The Beautiful Karimunjawa Islands",
      stimulusBody: "Karimunjawa is a beautiful group of twenty-seven small islands located in the Java Sea, north of Jepara, Central Java. It is famous for its clean beaches, clear turquoise water, and rich marine life. Many local and foreign tourists visit Karimunjawa to relax and enjoy nature.<br><br>The main attraction of Karimunjawa is its underwater beauty. The sea around the islands is very clean and clear, so visitors can easily see colorful coral reefs and swimming tropical fish. Snorkeling and diving are the most popular activities here. Tourists can also visit Menjangan Island, where they can see baby sharks swimming safely in a protected pool.<br><br>Besides its underwater life, Karimunjawa also has beautiful land scenery. The islands are covered with green hills, coconut trees, and peaceful mangrove forests. In the late afternoon, visitors love to sit on the white sand of Tanjung Gelam beach to watch the golden sunset.<br><br>Karimunjawa is a wonderful place for anyone who loves nature. To keep this paradise beautiful, visitors are encouraged to protect the coral reefs and avoid throwing plastic trash into the ocean.",
      prompt: "What environmental message is given to visitors at the end of the text?",
      options: [
        { key: "A", text: "Protect the coral reefs and avoid throwing plastic trash into the sea." },
        { key: "B", text: "Collect as many coral pieces as possible as souvenirs." },
        { key: "C", text: "Catch baby sharks and sell them to markets." },
        { key: "D", text: "Cut down mangrove trees on the beach." }
      ],
      correctAnswer: "A",
      explanation: "Pesan lingkungan di akhir teks mengajak wisatawan untuk menjaga terumbu karang dan tidak membuang sampah plastik ke laut ('protect the coral reefs and avoid throwing plastic trash into the ocean').",
      grammarNote: "Conjunction with gerund: 'avoid throwing plastic trash'."
    },
    {
      id: 16,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Karimunjawa Facts",
      stimulusTitle: "Text 1: The Beautiful Karimunjawa Islands",
      stimulusBody: "Review Text 1 (The Beautiful Karimunjawa Islands).",
      prompt: "Based on Text 1, determine whether each statement below is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "Karimunjawa consists of twenty-seven small islands located north of Jepara.",
          isCorrect: true
        },
        {
          statement: "The water around Karimunjawa is very dirty so people cannot see the corals.",
          isCorrect: false
        },
        {
          statement: "Snorkeling and diving are the most popular water activities in Karimunjawa.",
          isCorrect: true
        },
        {
          statement: "Tanjung Gelam beach is famous for its beautiful sunset view in the late afternoon.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Karimunjawa terdiri dari 27 pulau di utara Jepara.<br>• Pernyataan 2: SALAH — Air laut di Karimunjawa sangat bersih dan jernih.<br>• Pernyataan 3: BENAR — Snorkeling dan diving adalah kegiatan paling populer.<br>• Pernyataan 4: BENAR — Pantai Tanjung Gelam terkenal dengan pemandangan matahari terbenamnya.",
      grammarNote: "Literal reading comprehension of descriptive facts."
    },
    {
      id: 17,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Athlete Character & Habits",
      stimulusTitle: "Context: Anthony Sinisuka Ginting",
      stimulusBody: "Anthony Ginting is a hardworking Indonesian badminton player.",
      prompt: "Based on the monologue about Anthony Ginting, determine whether each statement is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "Anthony Ginting was born in Cimahi and started playing badminton in elementary school.",
          isCorrect: true
        },
        {
          statement: "On the badminton court, Ginting is known for his fast footwork and powerful smashes.",
          isCorrect: true
        },
        {
          statement: "Ginting behaves arrogantly and refuses to smile at his fans.",
          isCorrect: false
        },
        {
          statement: "Ginting trains hard every day and respects his opponents.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Ginting lahir di Cimahi dan berlatih sejak sekolah dasar.<br>• Pernyataan 2: BENAR — Terkenal dengan pergerakan kaki cepat dan smash kuat.<br>• Pernyataan 3: SALAH — Ginting berkepribadian ramah dan rendah hati.<br>• Pernyataan 4: BENAR — Ginting berlatih keras dan menghormati lawan.",
      grammarNote: "Character traits and facts in descriptive text."
    },
    {
      id: 18,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Menara Kudus Cultural Landmark",
      stimulusTitle: "Context: Historical Landmarks in Kudus",
      stimulusBody: "Menara Kudus is a historic monument in Central Java.",
      prompt: "Determine whether each statement below regarding Menara Kudus is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "Menara Kudus is an iconic historical tower located in the town of Kudus.",
          isCorrect: true
        },
        {
          statement: "The tower's design reflects a blend of Hindu architecture and Islamic culture.",
          isCorrect: true
        },
        {
          statement: "The tower was built recently using modern blue glass and metal pipes.",
          isCorrect: false
        },
        {
          statement: "Menara Kudus is visited by many pilgrims and cultural tourists each year.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Menara Kudus adalah menara bersejarah di kota Kudus.<br>• Pernyataan 2: BENAR — Desain menara memadukan arsitektur Hindu dan Islam.<br>• Pernyataan 3: SALAH — Menara dibangun dari bata merah kuno, bukan kaca modern.<br>• Pernyataan 4: BENAR — Dikunjungi banyak peziarah dan wisatawan budaya.",
      grammarNote: "Historical and cultural descriptive facts."
    },
    {
      id: 19,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Green School Practices",
      stimulusTitle: "Context: School Environment Cleanliness",
      stimulusBody: "Keeping the school environment clean helps students learn comfortably.",
      prompt: "Determine whether each statement below regarding school environmental habits is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "Bringing a reusable water bottle helps reduce plastic trash at school.",
          isCorrect: true
        },
        {
          statement: "Students should throw plastic food wrappers into the garden plants.",
          isCorrect: false
        },
        {
          statement: "A clean and green school environment creates a comfortable atmosphere for learning.",
          isCorrect: true
        },
        {
          statement: "Planting trees in the school yard makes the air fresher and cooler.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Membawa botol minum isi ulang mengurangi sampah plastik.<br>• Pernyataan 2: SALAH — Sampah harus dibuang ke tempat sampah, bukan di tanaman.<br>• Pernyataan 3: BENAR — Lingkungan yang bersih menciptakan suasana belajar yang nyaman.<br>• Pernyataan 4: BENAR — Menanam pohon membuat udara sekolah lebih segar dan sejuk.",
      grammarNote: "Cause and effect in daily environmental practices."
    },
    {
      id: 20,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Library Reading Week",
      stimulusTitle: "Context: School Reading Week",
      stimulusBody: "Reading storybooks expands students' English knowledge.",
      prompt: "Determine whether each statement below regarding the English Reading Week is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "The English Reading Week will begin next Monday in the school library.",
          isCorrect: true
        },
        {
          statement: "Students are encouraged to borrow and read an English storybook.",
          isCorrect: true
        },
        {
          statement: "Students must buy expensive new laptops to join the Reading Week.",
          isCorrect: false
        },
        {
          statement: "Students will pin their book reviews on the classroom notice board.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Kegiatan dimulai hari Senin depan di perpustakaan.<br>• Pernyataan 2: BENAR — Siswa diajak membaca buku cerita bahasa Inggris.<br>• Pernyataan 3: SALAH — Tidak ada syarat membeli laptop baru.<br>• Pernyataan 4: BENAR — Siswa menempelkan ulasan buku di papan pengumuman kelas.",
      grammarNote: "Factual understanding of school announcements."
    },
    {
      id: 21,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Text 1: The Beautiful Karimunjawa Islands",
      stimulusBody: "Review Text 1 (The Beautiful Karimunjawa Islands).",
      prompt: "Which **TWO (2)** water activities are very popular for tourists in Karimunjawa?",
      options: [
        { key: "A", text: "Snorkeling to see colorful coral reefs and tropical fish." },
        { key: "B", text: "Snow skiing on the sandy hills." },
        { key: "C", text: "Visiting Menjangan Island to see baby sharks swimming safely." },
        { key: "D", text: "Hunting wild animals inside the forest." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua aktivitas air yang populer di Karimunjawa menurut teks adalah melakukan snorkeling melihat terumbu karang dan ikan hias, serta mengunjungi Pulau Menjangan untuk melihat penangkaran anak hiu.",
      grammarNote: "Gerunds of activities: snorkeling, visiting."
    },
    {
      id: 22,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Context: Anthony Sinisuka Ginting",
      stimulusBody: "Anthony Ginting is admired for his sportsmanship.",
      prompt: "Which **TWO (2)** positive traits make Anthony Ginting admired by young sports fans?",
      options: [
        { key: "A", text: "His calm spirit and hard work during badminton matches." },
        { key: "B", text: "His proud and rude behavior toward opponents." },
        { key: "C", text: "His humble and friendly attitude toward fans outside the court." },
        { key: "D", text: "His habit of skipping daily training sessions." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua karakter positif Anthony Ginting yang dikagumi adalah kerja keras dan ketenangannya saat bertanding, serta sikap rendah hati dan ramah kepada penggemar di luar lapangan.",
      grammarNote: "Character attributes: calm spirit, humble attitude."
    },
    {
      id: 23,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Grammar: Simple Present Tense for General Truths",
      stimulusBody: "The Simple Present tense describes facts and regular habits.",
      prompt: "Which **TWO (2)** sentences correctly use the Simple Present tense to state general facts?",
      options: [
        { key: "A", text: "The sun rises in the east and sets in the west." },
        { key: "B", text: "Karimunjawa had twenty-seven islands next year." },
        { key: "C", text: "Many tourists visit Central Java every school holiday." },
        { key: "D", text: "She is walk on the beach yesterday." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua kalimat yang menggunakan Simple Present secara benar untuk menyatakan fakta umum adalah 'The sun rises in the east...' dan 'Many tourists visit Central Java every school holiday'. Pilihan B salah tenses lampau/masa depan, dan pilihan D salah bentuk to-be.",
      grammarNote: "Simple present tense: Subject + V1(s/es) for general facts."
    },
    {
      id: 24,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Context: Study Habits",
      stimulusBody: "Good study habits help high school students succeed.",
      prompt: "Which **TWO (2)** habits help students improve their English vocabulary?",
      options: [
        { key: "A", text: "Reading simple English storybooks and articles regularly." },
        { key: "B", text: "Refusing to write down new English words." },
        { key: "C", text: "Looking up unfamiliar words in a dictionary." },
        { key: "D", text: "Sleeping during English class every morning." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua kebiasaan efektif untuk memperkaya kosakata bahasa Inggris adalah rutin membaca buku cerita sederhana dan mencari arti kata yang belum dipahami di kamus.",
      grammarNote: "Gerund phrase expressing study habits: reading, looking up."
    },
    {
      id: 25,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Grammar: Descriptive Adjectives",
      stimulusBody: "Adjectives describe the quality, color, or condition of a noun.",
      prompt: "Which **TWO (2)** sentences correctly use descriptive adjectives to describe a place?",
      options: [
        { key: "A", text: "Karimunjawa has peaceful beaches and clean blue water." },
        { key: "B", text: "The beach was very beauty in the morning." },
        { key: "C", text: "Borobudur is a magnificent stone temple in Central Java." },
        { key: "D", text: "The tourists walked quickly because the weather was rain." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua kalimat yang menggunakan kata sifat (adjectives) dengan benar adalah kalimat dengan 'peaceful beaches and clean blue water' serta 'magnificent stone temple'. Pilihan B salah karena 'beauty' adalah noun (seharusnya 'beautiful'), dan pilihan D salah karena 'rain' adalah noun (seharusnya 'rainy').",
      grammarNote: "Adjective vs noun usage in descriptive sentences."
    },
    {
      id: 26,
      source: "Kemendikbudristek — Recount Text: School Trip to Borobudur (Fase E)",
      type: "single_choice",
      title: "Reading Section: Recount Text",
      stimulusTitle: "Text 2: Our Unforgettable Study Tour to Borobudur",
      stimulusBody: "Last month, tenth-grade students of SMA 1 Bae went on a study tour to Borobudur Temple in Magelang. We departed from school at six in the morning by bus. The journey took about three hours. During the trip, we sang songs and enjoyed the green rice fields along the road.<br><br>When we arrived at Borobudur, our friendly tour guide welcomed us warmly. He explained that Borobudur was built in the eighth century during the Syailendra Dynasty. We walked up the stone stairs together. On the walls, we saw thousands of detailed stone carvings depicting the life of Buddha. At the top level, there were many round stupas, and the view of the green mountains around the temple was breathtaking.<br><br>Before going home, we bought souvenirs such as keychains and miniature stupas from local sellers outside the temple gate. We returned to Kudus in the evening feeling tired but very happy. It was an unforgettable trip that taught us to appreciate Indonesia's rich cultural heritage.",
      prompt: "What is Text 2 mostly about?",
      options: [
        { key: "A", text: "A tenth-grade students' study tour to Borobudur Temple." },
        { key: "B", text: "Instructions on how to make stone stupas at home." },
        { key: "C", text: "A shopping guide for clothing stores in Magelang." },
        { key: "D", text: "A speed race between school buses." }
      ],
      correctAnswer: "A",
      explanation: "Teks recount di atas menceritakan pengalaman perjalanan studi wisata siswa kelas sepuluh SMA 1 Bae ke Candi Borobudur di Magelang.",
      grammarNote: "Main topic of a personal recount text."
    },
    {
      id: 27,
      source: "Kemendikbudristek — Recount Text: School Trip to Borobudur (Fase E)",
      type: "single_choice",
      title: "Reading Section: Recount Text",
      stimulusTitle: "Text 2: Our Unforgettable Study Tour to Borobudur",
      stimulusBody: "Last month, tenth-grade students of SMA 1 Bae went on a study tour to Borobudur Temple in Magelang. We departed from school at six in the morning by bus. The journey took about three hours. During the trip, we sang songs and enjoyed the green rice fields along the road.<br><br>When we arrived at Borobudur, our friendly tour guide welcomed us warmly. He explained that Borobudur was built in the eighth century during the Syailendra Dynasty. We walked up the stone stairs together. On the walls, we saw thousands of detailed stone carvings depicting the life of Buddha. At the top level, there were many round stupas, and the view of the green mountains around the temple was breathtaking.<br><br>Before going home, we bought souvenirs such as keychains and miniature stupas from local sellers outside the temple gate. We returned to Kudus in the evening feeling tired but very happy. It was an unforgettable trip that taught us to appreciate Indonesia's rich cultural heritage.",
      prompt: "What historical feature did the students see on the stone walls of Borobudur?",
      options: [
        { key: "A", text: "Thousands of detailed stone carvings." },
        { key: "B", text: "Modern colorful digital television screens." },
        { key: "C", text: "Large oil paintings of cars." },
        { key: "D", text: "Wooden clocks hanging from the ceiling." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 menyatakan bahwa para siswa melihat ribuan relief ukiran batu pada dinding candi ('thousands of detailed stone carvings').",
      grammarNote: "Noun phrase: 'thousands of detailed stone carvings'."
    },
    {
      id: 28,
      source: "Kemendikbudristek — Recount Text: School Trip to Borobudur (Fase E)",
      type: "single_choice",
      title: "Reading Section: Recount Text",
      stimulusTitle: "Text 2: Our Unforgettable Study Tour to Borobudur",
      stimulusBody: "Last month, tenth-grade students of SMA 1 Bae went on a study tour to Borobudur Temple in Magelang. We departed from school at six in the morning by bus. The journey took about three hours. During the trip, we sang songs and enjoyed the green rice fields along the road.<br><br>When we arrived at Borobudur, our friendly tour guide welcomed us warmly. He explained that Borobudur was built in the eighth century during the Syailendra Dynasty. We walked up the stone stairs together. On the walls, we saw thousands of detailed stone carvings depicting the life of Buddha. At the top level, there were many round stupas, and the view of the green mountains around the temple was breathtaking.<br><br>Before going home, we bought souvenirs such as keychains and miniature stupas from local sellers outside the temple gate. We returned to Kudus in the evening feeling tired but very happy. It was an unforgettable trip that taught us to appreciate Indonesia's rich cultural heritage.",
      prompt: "How long did the bus journey from the school to the temple take?",
      options: [
        { key: "A", text: "About three hours." },
        { key: "B", text: "Only ten minutes." },
        { key: "C", text: "More than two full days." },
        { key: "D", text: "Exactly twelve hours." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 1 menyatakan secara jelas bahwa perjalanan bus memakan waktu sekitar tiga jam ('The journey took about three hours').",
      grammarNote: "Time duration phrase: 'took about three hours'."
    },
    {
      id: 29,
      source: "Kemendikbudristek — Recount Text: School Trip to Borobudur (Fase E)",
      type: "single_choice",
      title: "Reading Section: Recount Text",
      stimulusTitle: "Text 2: Our Unforgettable Study Tour to Borobudur",
      stimulusBody: "Last month, tenth-grade students of SMA 1 Bae went on a study tour to Borobudur Temple in Magelang. We departed from school at six in the morning by bus. The journey took about three hours. During the trip, we sang songs and enjoyed the green rice fields along the road.<br><br>When we arrived at Borobudur, our friendly tour guide welcomed us warmly. He explained that Borobudur was built in the eighth century during the Syailendra Dynasty. We walked up the stone stairs together. On the walls, we saw thousands of detailed stone carvings depicting the life of Buddha. At the top level, there were many round stupas, and the view of the green mountains around the temple was breathtaking.<br><br>Before going home, we bought souvenirs such as keychains and miniature stupas from local sellers outside the temple gate. We returned to Kudus in the evening feeling tired but very happy. It was an unforgettable trip that taught us to appreciate Indonesia's rich cultural heritage.",
      prompt: "The word 'breathtaking' in paragraph 2 ('the view of the green mountains... was breathtaking') is closest in meaning to...",
      options: [
        { key: "A", text: "amazing and wonderful" },
        { key: "B", text: "dark and frightening" },
        { key: "C", text: "boring and plain" },
        { key: "D", text: "noisy and crowded" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'breathtaking' dalam konteks pemandangan alam bermakna luar biasa indah dan menakjubkan ('amazing and wonderful').",
      grammarNote: "Adjective synonym: breathtaking = amazing/wonderful."
    },
    {
      id: 30,
      source: "Kemendikbudristek — Recount Text: School Trip to Borobudur (Fase E)",
      type: "single_choice",
      title: "Reading Section: Recount Text",
      stimulusTitle: "Text 2: Our Unforgettable Study Tour to Borobudur",
      stimulusBody: "Last month, tenth-grade students of SMA 1 Bae went on a study tour to Borobudur Temple in Magelang. We departed from school at six in the morning by bus. The journey took about three hours. During the trip, we sang songs and enjoyed the green rice fields along the road.<br><br>When we arrived at Borobudur, our friendly tour guide welcomed us warmly. He explained that Borobudur was built in the eighth century during the Syailendra Dynasty. We walked up the stone stairs together. On the walls, we saw thousands of detailed stone carvings depicting the life of Buddha. At the top level, there were many round stupas, and the view of the green mountains around the temple was breathtaking.<br><br>Before going home, we bought souvenirs such as keychains and miniature stupas from local sellers outside the temple gate. We returned to Kudus in the evening feeling tired but very happy. It was an unforgettable trip that taught us to appreciate Indonesia's rich cultural heritage.",
      prompt: "How did the students feel about the study tour when they returned home?",
      options: [
        { key: "A", text: "Tired but very happy and proud of their cultural heritage." },
        { key: "B", text: "Angry because their bus broke down on the road." },
        { key: "C", text: "Disappointed because the temple gate was locked." },
        { key: "D", text: "Bored because they did not see any stupas." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf terakhir menyatakan bahwa para siswa kembali ke Kudus dengan perasaan lelah tetapi sangat bahagia dan bangga akan warisan budaya bangsa ('feeling tired but very happy').",
      grammarNote: "Reorientation of recount text: feelings and reflection."
    },
    {
      id: 31,
      source: "Kaidah Tata Bahasa Kelas X — Simple Present Tense (To Be)",
      type: "single_choice",
      title: "Grammar & Structure: Simple Present Tense",
      prompt: "Complete the sentence with the correct form of the verb **'be'**:<br><br><em>'Anthony Sinisuka Ginting _______ a famous badminton player from Indonesia.'</em>",
      options: [
        { key: "A", text: "is" },
        { key: "B", text: "are" },
        { key: "C", text: "were" },
        { key: "D", text: "am" }
      ],
      correctAnswer: "A",
      explanation: "Subjek tunggal orang ketiga (Anthony Sinisuka Ginting) menggunakan to-be 'is' dalam Present Tense.",
      grammarNote: "Subject-verb agreement: singular subject + is."
    },
    {
      id: 32,
      source: "Kaidah Tata Bahasa Kelas X — Past Simple (Regular & Irregular)",
      type: "single_choice",
      title: "Grammar & Structure: Past Simple Tense",
      prompt: "Choose the correct past verb form to complete the recount sentence:<br><br><em>'Yesterday, the tenth-grade students _______ to Magelang by bus.'</em>",
      options: [
        { key: "A", text: "went" },
        { key: "B", text: "go" },
        { key: "C", text: "goes" },
        { key: "D", text: "is going" }
      ],
      correctAnswer: "A",
      explanation: "Keterangan waktu lampau 'Yesterday' menunjukkan bahwa kalimat menggunakan Past Simple. Bentuk lampau (V2) dari 'go' adalah 'went'.",
      grammarNote: "Irregular past tense: go -> went."
    },
    {
      id: 33,
      source: "Kaidah Tata Bahasa Kelas X — Connectors of Reason",
      type: "single_choice",
      title: "Grammar & Structure: Conjunctions",
      prompt: "Choose the correct conjunction showing reason:<br><br><em>'Tourists love visiting Karimunjawa _______ the sea is clean and clear.'</em>",
      options: [
        { key: "A", text: "because" },
        { key: "B", text: "but" },
        { key: "C", text: "although" },
        { key: "D", text: "so that" }
      ],
      correctAnswer: "A",
      explanation: "Kata hubung yang menyatakan alasan/sebab adalah 'because' (karena). Wisatawan senang mengunjungi Karimunjawa karena air lautnya bersih dan jernih.",
      grammarNote: "Subordinating conjunction of reason: because."
    },
    {
      id: 34,
      source: "Kaidah Tata Bahasa Kelas X — Relative Pronouns",
      type: "single_choice",
      title: "Grammar & Structure: Relative Clauses",
      prompt: "Complete the sentence with the correct relative pronoun for a person:<br><br><em>'The friendly tour guide _______ showed us the ancient temple was very polite.'</em>",
      options: [
        { key: "A", text: "who" },
        { key: "B", text: "which" },
        { key: "C", text: "where" },
        { key: "D", text: "whose" }
      ],
      correctAnswer: "A",
      explanation: "Kata ganti penghubung (relative pronoun) yang digunakan untuk merujuk pada subjek orang ('The friendly tour guide') adalah 'who'.",
      grammarNote: "Relative pronoun for persons: who."
    },
    {
      id: 35,
      source: "Kaidah Tata Bahasa Kelas X — Degrees of Comparison",
      type: "single_choice",
      title: "Grammar & Structure: Comparative Adjectives",
      prompt: "Select the correct comparative adjective form:<br><br><em>'Mount Merapi is _______ than the green hills around our town.'</em>",
      options: [
        { key: "A", text: "higher" },
        { key: "B", text: "highest" },
        { key: "C", text: "high" },
        { key: "D", text: "more high" }
      ],
      correctAnswer: "A",
      explanation: "Untuk membandingkan dua hal menggunakan kata sifat bersuku kata satu ('high'), tambahkan akhiran '-er' + than -> 'higher than'.",
      grammarNote: "Comparative degree of one-syllable adjectives: adjective + -er + than."
    },
    {
      id: 36,
      source: "Kaidah Tata Bahasa Kelas X — Subject Pronouns",
      type: "single_choice",
      title: "Grammar & Structure: Pronouns",
      prompt: "Choose the correct subject pronoun to complete the sentence:<br><br><em>'My classmates and I love reading. _______ visit the school library every Friday.'</em>",
      options: [
        { key: "A", text: "We" },
        { key: "B", text: "They" },
        { key: "C", text: "He" },
        { key: "D", text: "She" }
      ],
      correctAnswer: "A",
      explanation: "Subjek 'My classmates and I' (teman-teman saya dan saya) digantikan oleh kata ganti jamak orang pertama 'We' (kami/kita).",
      grammarNote: "Subject pronoun replacement: X and I = We."
    },
    {
      id: 37,
      source: "Kaidah Tata Bahasa Kelas X — Prepositions of Time",
      type: "single_choice",
      title: "Grammar & Structure: Prepositions",
      prompt: "Choose the correct preposition of time for clock hours:<br><br><em>'Our school bus departed _______ six o\\'clock in the morning.'</em>",
      options: [
        { key: "A", text: "at" },
        { key: "B", text: "on" },
        { key: "C", text: "in" },
        { key: "D", text: "under" }
      ],
      correctAnswer: "A",
      explanation: "Preposisi waktu yang tepat untuk menunjukkan jam tertentu (clock time) adalah 'at': 'at six o\\'clock'.",
      grammarNote: "Preposition of time: at + clock time."
    },
    {
      id: 38,
      source: "Kaidah Tata Bahasa Kelas X — Polite Requests",
      type: "single_choice",
      title: "Grammar & Structure: Polite Expressions",
      prompt: "Which modal verb makes this request polite and courteous?<br><br><em>'_______ you please help me carry these English dictionaries to the shelf?'</em>",
      options: [
        { key: "A", text: "Could" },
        { key: "B", text: "Should" },
        { key: "C", text: "Must" },
        { key: "D", text: "Shall" }
      ],
      correctAnswer: "A",
      explanation: "Modal 'Could' digunakan untuk membuat permintaan bantuan secara sopan dan santun: 'Could you please help me...?'.",
      grammarNote: "Polite request: Could you please + V1...?"
    },
    {
      id: 39,
      source: "Kaidah Tata Bahasa Kelas X — Coordinating Conjunctions",
      type: "single_choice",
      title: "Grammar & Structure: Conjunctions",
      prompt: "Choose the correct coordinating conjunction showing contrast:<br><br><em>'The stone stairs were steep, _______ all the students reached the top of the temple safely.'</em>",
      options: [
        { key: "A", text: "but" },
        { key: "B", text: "because" },
        { key: "C", text: "so" },
        { key: "D", text: "or" }
      ],
      correctAnswer: "A",
      explanation: "Konjungsi koordinatif yang menunjukkan hubungan pertentangan adalah 'but' (tetapi). Tangga batunya curam, tetapi semua siswa sampai di puncak dengan selamat.",
      grammarNote: "Coordinating conjunction of contrast: but."
    },
    {
      id: 40,
      source: "Kaidah Tata Bahasa Kelas X — Negative Sentences in Simple Present",
      type: "single_choice",
      title: "Grammar & Structure: Present Negative",
      prompt: "Complete the sentence with the correct negative auxiliary for a plural subject:<br><br><em>'Responsible tourists _______ throw plastic trash into the ocean.'</em>",
      options: [
        { key: "A", text: "do not" },
        { key: "B", text: "does not" },
        { key: "C", text: "is not" },
        { key: "D", text: "was not" }
      ],
      correctAnswer: "A",
      explanation: "Subjek jamak (Responsible tourists) menggunakan kata kerja bantu negatif 'do not' + V1 dalam Simple Present Tense.",
      grammarNote: "Simple present negative for plural subjects: Subject (plural) + do not + V1."
    }
  ];
}
`;
}

module.exports = { generateGrade10Bank };

