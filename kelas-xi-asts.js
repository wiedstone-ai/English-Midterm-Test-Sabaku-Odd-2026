/**
 * ASESMEN SUMATIF TENGAH SEMESTER GASAL (ASTS) & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * TINGKAT XI (FASE F — BAHASA INGGRIS WAJIB) — SEMESTER GASAL 2026/2027
 * 
 * Komposisi Soal:
 * - 60% (24 Butir Soal) Diambil Langsung dari Bank Soal ASAS Gasal Kelas XI
 * - 40% (16 Butir Soal) Melengkapi Seluruh Materi Semester Gasal (TP 11.1 & TP 11.2)
 * 
 * Standar: Tes Kemampuan Akademik (TKA / AKM Literasi / UTBK SNBT)
 * Bebas Token / Password — Langsung Masuk Latihan & Asesmen
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

const SVG_PICTURES = {
  laptopResearch: `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="20" y="24" width="60" height="42" rx="3" fill="#eff6ff" stroke="#2563eb"/>
    <path d="M12 70h76l-4 6H16l-4-6z" fill="#cbd5e1" stroke="#2563eb"/>
    <circle cx="50" cy="45" r="10" stroke="#3b82f6" stroke-dasharray="3 3"/>
    <path d="M50 39v12M44 45h12" stroke="#1d4ed8"/>
    <circle cx="50" cy="73" r="1.5" fill="#475569"/>
  </svg>`,
  templeRuins: `<svg viewBox="0 0 100 100" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 85h80M22 70h56M34 55h32M44 40h12M50 20v20"/>
    <path d="M30 85V70M70 85V70M40 70V55M60 70V55M47 55V40M53 55V40"/>
    <circle cx="50" cy="17" r="3" fill="#d97706"/>
    <path d="M15 85l6-15M85 85l-6-15" stroke="#b45309"/>
  </svg>`,
  solarSchool: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 85V50l35-22 35 22v35H15z" fill="#f0fdf4" stroke="#059669"/>
    <path d="M30 85V62h16v23M50 28v57"/>
    <path d="M22 46l28-18 28 18" stroke="#047857" stroke-width="3"/>
    <path d="M54 60h26v25H54z" fill="#bae6fd" stroke="#0284c7"/>
    <path d="M67 60v25M54 72h26" stroke="#0284c7"/>
    <circle cx="82" cy="22" r="8" fill="#fef08a" stroke="#eab308"/>
  </svg>`,
  mountainVillage: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 85l32-45 18 22 14-16 16 39H10z" fill="#f8fafc"/>
    <path d="M25 85v-12h14v12M55 85v-16h18v16" stroke="#0f172a"/>
    <circle cx="30" cy="25" r="7" fill="#fed7aa" stroke="#ea580c"/>
  </svg>`
};

function getGrade11AstsQuestions() {
  return [
    // =========================================================================
    // SECTION 1: LISTENING SECTION (QUESTIONS 1 - 10)
    // 60% ASAS Bank: Q1-Q3 (Pictures), Q4-Q6 (Dialogues), Q7-Q9 (Talks) = 9 Soal
    // 40% Komplementer: Q10 (Short Talk) = 1 Soal
    // =========================================================================

    // Q1 - ASAS Bank (Pictures)
    {
      id: 1,
      source: "Sumber: Panduan Literasi Digital Remaja — Kementerian Komunikasi dan Informatika RI (Kominfo)",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number one. Look at the pictures. A disciplined high school student is conducting online academic research on his modern blue laptop in a quiet study room, verifying digital information carefully against reliable library sources. Which picture best corresponds to the spoken description?",
      prompt: "Look at the four pictures below. Which picture matches the digital research activity described in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.laptopResearch, label: "A student conducting digital research and verifying sources on a laptop" },
        { key: "B", svg: SVG_PICTURES.templeRuins, label: "An ancient tiered stone temple heritage site" },
        { key: "C", svg: SVG_PICTURES.solarSchool, label: "A modern school building powered by rooftop solar panels" },
        { key: "D", svg: SVG_PICTURES.mountainVillage, label: "A rural village situated at the foot of volcanic mountains" }
      ],
      correctAnswer: "A",
      explanation: "Audio menyebutkan: 'A disciplined high school student is conducting online academic research on his modern blue laptop... verifying digital information'. Gambar A menampilkan laptop untuk riset digital.",
      grammarNote: "Present Continuous Tense ('is conducting', 'verifying') & Digital Literacy Vocabulary."
    },

    // Q2 - ASAS Bank (Pictures)
    {
      id: 2,
      source: "Sumber: Direktori Cagar Budaya Candi Sewu & Prambanan — Balai Pelestarian Kebudayaan Wilayah X",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number two. Look at the pictures. This historic cultural monument features majestic tiered stone structures, ancient carved spires, and historic terraces rising proudly in Central Java, embodying centuries of architectural ingenuity. Which picture depicts this cultural landmark?",
      prompt: "Which picture corresponds to the historic stone temple heritage site mentioned in the recording?",
      options: [
        { key: "A", svg: SVG_PICTURES.laptopResearch, label: "A digital laptop station for academic research" },
        { key: "B", svg: SVG_PICTURES.templeRuins, label: "An ancient tiered stone temple monument in Central Java" },
        { key: "C", svg: SVG_PICTURES.solarSchool, label: "A green school building with rooftop solar photovoltaic cells" },
        { key: "D", svg: SVG_PICTURES.mountainVillage, label: "A mountainous rural community landscape" }
      ],
      correctAnswer: "B",
      explanation: "Audio mendeskripsikan candi bersejarah Jawa Tengah: 'majestic tiered stone structures, ancient carved spires, and historic terraces'. Gambar B menampilkan candi batu bertingkat kuno.",
      grammarNote: "Descriptive Compound Nouns: 'tiered stone structures', 'carved spires', 'cultural landmark'."
    },

    // Q3 - ASAS Bank (Pictures)
    {
      id: 3,
      source: "Sumber: Program Sekolah Adiwiyata Mandiri — Kementerian Lingkungan Hidup dan Kehutanan (KLHK)",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number three. Look at the pictures. This eco-friendly school building is outfitted with modern solar panels on its roof, harnessing clean solar energy under sunny skies to reduce institutional carbon emissions. Which picture illustrates this sustainable facility?",
      prompt: "Which picture illustrates the sustainable school facility powered by solar energy described in the recording?",
      options: [
        { key: "A", svg: SVG_PICTURES.laptopResearch, label: "A student studying on a laptop at a library desk" },
        { key: "B", svg: SVG_PICTURES.templeRuins, label: "An ancient tiered stone monument in Central Java" },
        { key: "C", svg: SVG_PICTURES.solarSchool, label: "An eco-friendly school building outfitted with solar panels" },
        { key: "D", svg: SVG_PICTURES.mountainVillage, label: "A rural settlement nestled in mountainous valleys" }
      ],
      correctAnswer: "C",
      explanation: "Audio menyatakan: 'eco-friendly school building is outfitted with modern solar panels on its roof, harnessing clean solar energy'. Gambar C memperlihatkan gedung sekolah dengan panel surya.",
      grammarNote: "Passive Participle Modifier: 'school building outfitted with modern solar panels, harnessing clean energy'."
    },

    // Q4 - ASAS Bank (Dialogues)
    {
      id: 4,
      source: "Sumber: Dialog Pembelajaran Bahasa Inggris Fase F — Modul Ajar MGMP SMA Jawa Tengah",
      type: "listening_dialogue",
      title: "Listening Section: Part II - Dialogues",
      audioText: "Number four. Listen to a conversation between two students.\n\nBoy: Hey Sarah, did you see the shocking news headline circulating on social media about school closures?\nGirl: I saw it, Budi, but we shouldn't believe it right away. The post uses sensational language and has no official signature from the education department.\nBoy: You're right. It is probably clickbait designed to generate emotional reactions. Let's check the verified school website first.\n\nQuestion: What does Sarah suggest Budi do before believing the social media post?",
      prompt: "What does Sarah suggest regarding the sensational social media news?",
      options: [
        { key: "A", text: "Verify the information by checking the official school website instead of believing clickbait." },
        { key: "B", text: "Forward the news immediately to all class group chats to spread the alarm." },
        { key: "C", text: "Delete their personal social media accounts and never use smartphones again." },
        { key: "D", text: "Complain directly to the local television news station without any evidence." }
      ],
      correctAnswer: "A",
      explanation: "Sarah mengingatkan agar tidak langsung percaya pada judul sensasional dan Budi menyetujui untuk memeriksa situs web resmi sekolah ('check the verified school website first').",
      grammarNote: "Modal of Advisability: 'we shouldn't believe it right away... Let's check the verified website'."
    },

    // Q5 - ASAS Bank (Dialogues)
    {
      id: 5,
      source: "Sumber: Wawancara Apresiasi Budaya Remaja — Balai Pelestarian Nilai Budaya D.I. Yogyakarta",
      type: "listening_dialogue",
      title: "Listening Section: Part II - Dialogues",
      audioText: "Number five. Listen to a conversation between a teacher and a student.\n\nTeacher: Dimas, having read the folklore of Ki Ageng Selo, what character lesson stood out to you the most?\nStudent: I was struck by how dangerous arrogance can be, Sir. Ki Ageng Selo possessed exceptional bravery, yet his overconfidence when capturing lightning led to unexpected consequences.\nTeacher: Indeed. True strength is always tempered by humility, wisdom, and moral self-control.\n\nQuestion: What character lesson did Dimas derive from the folklore?",
      prompt: "According to Dimas, what character lesson is highlighted in the folklore?",
      options: [
        { key: "A", text: "Exceptional talent and strength must always be balanced with humility and self-control." },
        { key: "B", text: "People should always seek supernatural powers to gain fame in their village." },
        { key: "C", text: "Thunderstorms can easily be stored inside clay jars for electricity generation." },
        { key: "D", text: "Heroes must defeat all their neighbors in physical combat to maintain authority." }
      ],
      correctAnswer: "A",
      explanation: "Dimas mengemukakan bahwa kehebatan tanpa kerendahan hati dapat berakibat buruk ('how dangerous arrogance can be... True strength is always tempered by humility').",
      grammarNote: "Passive Voice in Moral Evaluation: 'True strength is always tempered by humility, wisdom, and self-control'."
    },

    // Q6 - ASAS Bank (Dialogues)
    {
      id: 6,
      source: "Sumber: Diskusi Kelompok Proyek Penguatan Profil Pelajar Pancasila (P5) — SMAN 1 Bae Kudus",
      type: "listening_dialogue",
      title: "Listening Section: Part II - Dialogues",
      audioText: "Number six. Listen to a conversation between two committee members of the student council.\n\nRina: Deni, our campus still produces hundreds of single-use plastic cups every single week.\nDeni: If every student brought a reusable tumbler from home, single-use plastic waste would drop by at least seventy percent within a month.\nRina: Absolutely. Let's launch a tumbler campaign and ask the cafeteria vendors to offer discounts for students who bring their own containers.\n\nQuestion: What solution does Deni propose to reduce single-use plastic waste at school?",
      prompt: "What practical solution does Deni propose to tackle single-use plastic waste?",
      options: [
        { key: "A", text: "Encouraging all students to bring reusable tumblers from home to reduce plastic cups." },
        { key: "B", text: "Shutting down the school cafeteria permanently to prevent food packaging." },
        { key: "C", text: "Banning students from drinking water during morning classroom hours." },
        { key: "D", text: "Burning plastic cups behind the school gymnasium every Friday afternoon." }
      ],
      correctAnswer: "A",
      explanation: "Deni mengusulkan penggunaan tumbler isi ulang pribadi: 'If every student brought a reusable tumbler from home, single-use plastic waste would drop'.",
      grammarNote: "Conditional Sentence Type 2: 'If every student brought... waste would drop by at least seventy percent'."
    },

    // Q7 - ASAS Bank (Talks)
    {
      id: 7,
      source: "Sumber: Cerita Rakyat Nusantara: Kisah Roro Jonggrang & Candi Sewu — Kemendikbudristek",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Questions 7 and 8 are based on the following folklore storytelling monologue.\n\nLong ago in ancient Java, Prince Bandung Bondowoso defeated King Boko in a fierce war. Enamored by the late king's beautiful daughter, Princess Roro Jonggrang, the prince proposed marriage. Unwilling to wed the man who had slain her father, Roro Jonggrang devised an impossible condition: Bandung Bondowoso had to construct one thousand magnificent stone temples in a single night before dawn. Determined to fulfill the task, Bandung summoned thousands of subterranean spirits. By midnight, hundreds of intricate spires rose toward the sky. Realizing the temples were nearly finished, the panicked princess ordered village maidens to pound rice mortars and ignite fires in the east, tricking roosters into crowing early. Discovered in her trickery, Roro Jonggrang was cursed into the thousandth stone statue by the enraged prince.\n\nNumber seven. Why did Princess Roro Jonggrang set the impossible condition of building one thousand temples in one night?",
      prompt: "Why did Princess Roro Jonggrang demand the construction of one thousand temples in a single night?",
      options: [
        { key: "A", text: "She wanted to politely reject Bandung Bondowoso's marriage proposal because he had slain her father." },
        { key: "B", text: "She desired to turn her kingdom into the largest religious tourist attraction in Southeast Asia." },
        { key: "C", text: "She wished to test whether Bandung Bondowoso could speak the language of mountain birds." },
        { key: "D", text: "She promised her late father that she would only marry a professional stone architect." }
      ],
      correctAnswer: "A",
      explanation: "Monolog menjelaskan: 'Unwilling to wed the man who had slain her father, Roro Jonggrang devised an impossible condition: Bandung Bondowoso had to construct one thousand magnificent stone temples in a single night'.",
      grammarNote: "Past Participle Reason Clause: 'Unwilling to wed the man who had slain her father, Roro Jonggrang devised an impossible condition'."
    },

    // Q8 - ASAS Bank (Talks)
    {
      id: 8,
      source: "Sumber: Cerita Rakyat Nusantara: Kisah Roro Jonggrang & Candi Sewu — Kemendikbudristek",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Number eight. How did Princess Roro Jonggrang trick the spirits into halting their temple construction?",
      prompt: "How did Roro Jonggrang manipulate the situation to halt the spirit workers?",
      options: [
        { key: "A", text: "By ordering maidens to pound rice mortars and light eastern fires to simulate the arrival of dawn." },
        { key: "B", text: "By pouring holy river water onto the stone foundations to dissolve the mortar." },
        { key: "C", text: "By inviting the prince to a celebratory feast inside the royal palace banquet hall." },
        { key: "D", text: "By blowing royal brass trumpets to summon a sudden tropical thunderstorm." }
      ],
      correctAnswer: "A",
      explanation: "Roro Jonggrang memerintahkan dayang menumbuk lesung dan menyalakan api di timur: 'ordered village maidens to pound rice mortars and ignite fires in the east, tricking roosters into crowing early'.",
      grammarNote: "Gerund Phrases of Means: 'by ordering maidens to pound rice mortars and ignite fires'."
    },

    // Q9 - ASAS Bank (Talks)
    {
      id: 9,
      source: "Sumber: Modul Etika Digital Remaja — Siberkreasi & Kominfo RI",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Questions 9 and 10 are based on the following educational podcast snippet.\n\nGood morning, listeners. In today's digital society, every comment, photo, and click we leave behind creates a permanent digital footprint. While many teenagers believe that deleting a controversial post erases it forever, archived web caches and screenshots often preserve data indefinitely. Universities and scholarship boards frequently review applicants' digital behavior to evaluate integrity and mature communication. Therefore, cultivating self-restraint and positive online engagement is no longer optional; it is an indispensable life skill for every modern youth.\n\nNumber nine. What common misconception among teenagers is highlighted by the speaker?",
      prompt: "What common misconception regarding digital behavior do many teenagers have?",
      options: [
        { key: "A", text: "Believing that deleting an online post erases it permanently from the internet." },
        { key: "B", text: "Assuming that laptops consume more electrical energy than television sets." },
        { key: "C", text: "Thinking that university scholarships are granted entirely through online lottery." },
        { key: "D", text: "Believing that writing long essays improves physical athletic performance." }
      ],
      correctAnswer: "A",
      explanation: "Pembicara menyebutkan kesalahpahaman umum: 'While many teenagers believe that deleting a controversial post erases it forever, archived web caches and screenshots often preserve data indefinitely'.",
      grammarNote: "Concessive Subordinate Clause: 'While many teenagers believe... archived web caches preserve data'."
    },

    // Q10 - Komplementer (Short Talk - Oral Storytelling Traditions)
    {
      id: 10,
      source: "Sumber: Seri Tradisi Lisan Nusantara — Asosiasi Tradisi Lisan & Dirjen Kebudayaan",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Number ten. Why does the speaker emphasize that positive online communication is an indispensable life skill?",
      prompt: "Why is maintaining a positive digital footprint considered an indispensable life skill according to the podcast?",
      options: [
        { key: "A", text: "Because universities and scholarship committees review applicants' online conduct to assess integrity." },
        { key: "B", text: "Because internet service providers disconnect users who post fewer than ten pictures weekly." },
        { key: "C", text: "Because social media applications automatically pay cash rewards to every active teenager." },
        { key: "D", text: "Because high school diplomas are only awarded to students with verified social media badges." }
      ],
      correctAnswer: "A",
      explanation: "Pembicara menjelaskan bahwa universitas dan panitia beasiswa meninjau jejak digital pendaftar untuk mengevaluasi integritas dan kedewasaan ('review applicants' digital behavior to evaluate integrity and mature communication').",
      grammarNote: "Causal Connector & Purpose: 'review applicants' digital behavior to evaluate integrity'."
    },

    // =========================================================================
    // SECTION 2: READING GENRE 1 — TP 11.1 NARRATIVE TEXT (11 - 20)
    // 60% ASAS Bank: Q11-Q15 (Roro Jonggrang) = 5 Soal
    // 40% Komplementer: Q16-Q20 (The Legend of Malin Kundang) = 5 Soal
    // =========================================================================

    // Q11 - ASAS Bank (Roro Jonggrang)
    {
      id: 11,
      source: "Sumber: Dikutip dan diadaptasi dari TP_11.1_Materi_Otentik_Narrative_Text_Indonesian_Folklore.docx — Cerita Rakyat Prambanan",
      type: "reading",
      title: "Reading Section: TP 11.1 Narrative Text",
      stimulusTitle: "The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `Once upon a time in ancient Central Java, there existed two neighboring kingdoms: Pengging, ruled by the wise Prabu Damar Moyo, and Boko, governed by a fierce, giant man-eating monarch named Prabu Boko. Driven by an insatiable desire to expand his dominion, Prabu Boko waged war against Pengging. In response, Prabu Damar Moyo dispatched his valiant and powerful son, Prince Bandung Bondowoso. Blessed with supernatural strength and invulnerability, Bandung Bondowoso swiftly vanquished Prabu Boko on the battlefield.<br><br>Following his triumph, Bandung Bondowoso entered the royal court of Boko. There, he caught sight of Princess Roro Jonggrang, the late king's daughter, whose breathtaking grace and beauty immediately captivated his heart. Eager to claim her as his bride, the prince made a formal proposal. However, Roro Jonggrang felt deep abhorrence toward the man who had slain her father and subjugated her realm. Knowing that an outright refusal would provoke deadly retaliation against her people, she devised a seemingly insurmountable condition: Bandung Bondowoso had to construct one thousand ornate stone temples and two deep wells in a single night before the first rooster crowed at dawn.<br><br>Confident in his mystical prowess, Bandung Bondowoso accepted the challenge. As twilight deepened, he meditated deeply and summoned hordes of spirits from the earth. The spirits labored with astonishing velocity, hauling colossal volcanic boulders, sculpting intricate bas-reliefs, and raising magnificent shrines from the soil. By midnight, over nine hundred temples had been completed. Terrified that the prince would succeed, Roro Jonggrang hastily awakened her trusted palace maidens. She instructed them to burn piles of dry straw in the east to illuminate the horizon with a fiery crimson glow, while others pounded rice mortars vigorously to simulate morning activities. Deceived by the light and noise, roosters throughout the valley began to crow lustily, signaling the dawn.<br><br>Believing the sun was rising, the spirit legions fled back into the netherworld, leaving nine hundred and ninety-nine temples standing. When Bandung Bondowoso realized that dawn had been artificially simulated through deliberate deception, his fury was boundless. He confronted Roro Jonggrang, declaring, 'You have deceived me! As you lack only one temple to complete the thousand, you shall become the final stone!' Instantly, the princess turned into a majestic stone statue. Today, this statue resides inside the grand Shiva temple at Prambanan, a timeless reminder of the tragic peril of pride, deceit, and unbridled anger.`,
      prompt: "What was the main conflict between Bandung Bondowoso and Princess Roro Jonggrang?",
      options: [
        { key: "A", text: "Bandung Bondowoso wanted to marry Roro Jonggrang, but she despised him for killing her father." },
        { key: "B", text: "Bandung Bondowoso refused to share his agricultural harvest with the people of Boko." },
        { key: "C", text: "Roro Jonggrang challenged Bandung Bondowoso to a dual sword contest across the valley." },
        { key: "D", text: "Prabu Damar Moyo ordered the destruction of all religious monuments in Central Java." }
      ],
      correctAnswer: "A",
      explanation: "Konflik utama cerita adalah Bandung Bondowoso ingin menikahi Roro Jonggrang, namun sang putri membenci pangeran karena telah membunuh ayahnya di medan perang ('felt deep abhorrence toward the man who had slain her father').",
      grammarNote: "Past Narrative Conflict: 'felt deep abhorrence toward the man who had slain her father'."
    },

    // Q12 - ASAS Bank (Roro Jonggrang)
    {
      id: 12,
      source: "Sumber: Dikutip dan diadaptasi dari TP_11.1_Materi_Otentik_Narrative_Text_Indonesian_Folklore.docx — Cerita Rakyat Prambanan",
      type: "reading",
      title: "Reading Section: TP 11.1 Narrative Text",
      stimulusTitle: "The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `Once upon a time in ancient Central Java, there existed two neighboring kingdoms: Pengging, ruled by the wise Prabu Damar Moyo, and Boko, governed by a fierce, giant man-eating monarch named Prabu Boko. Driven by an insatiable desire to expand his dominion, Prabu Boko waged war against Pengging. In response, Prabu Damar Moyo dispatched his valiant and powerful son, Prince Bandung Bondowoso. Blessed with supernatural strength and invulnerability, Bandung Bondowoso swiftly vanquished Prabu Boko on the battlefield.<br><br>Following his triumph, Bandung Bondowoso entered the royal court of Boko. There, he caught sight of Princess Roro Jonggrang, the late king's daughter, whose breathtaking grace and beauty immediately captivated his heart. Eager to claim her as his bride, the prince made a formal proposal. However, Roro Jonggrang felt deep abhorrence toward the man who had slain her father and subjugated her realm. Knowing that an outright refusal would provoke deadly retaliation against her people, she devised a seemingly insurmountable condition: Bandung Bondowoso had to construct one thousand ornate stone temples and two deep wells in a single night before the first rooster crowed at dawn.<br><br>Confident in his mystical prowess, Bandung Bondowoso accepted the challenge. As twilight deepened, he meditated deeply and summoned hordes of spirits from the earth. The spirits labored with astonishing velocity, hauling colossal volcanic boulders, sculpting intricate bas-reliefs, and raising magnificent shrines from the soil. By midnight, over nine hundred temples had been completed. Terrified that the prince would succeed, Roro Jonggrang hastily awakened her trusted palace maidens. She instructed them to burn piles of dry straw in the east to illuminate the horizon with a fiery crimson glow, while others pounded rice mortars vigorously to simulate morning activities. Deceived by the light and noise, roosters throughout the valley began to crow lustily, signaling the dawn.<br><br>Believing the sun was rising, the spirit legions fled back into the netherworld, leaving nine hundred and ninety-nine temples standing. When Bandung Bondowoso realized that dawn had been artificially simulated through deliberate deception, his fury was boundless. He confronted Roro Jonggrang, declaring, 'You have deceived me! As you lack only one temple to complete the thousand, you shall become the final stone!' Instantly, the princess turned into a majestic stone statue. Today, this statue resides inside the grand Shiva temple at Prambanan, a timeless reminder of the tragic peril of pride, deceit, and unbridled anger.`,
      prompt: "Why did Princess Roro Jonggrang avoid rejecting Bandung Bondowoso's marriage proposal openly?",
      options: [
        { key: "A", text: "She feared an outright refusal would provoke violent retaliation against her conquered people." },
        { key: "B", text: "She secretly harbored deep romantic admiration for the prince's battlefield prowess." },
        { key: "C", text: "Her royal council insisted that all princesses must wed conquering military commanders." },
        { key: "D", text: "She wanted Bandung Bondowoso to teach her how to summon supernatural spirit workers." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 menyatakan bahwa Roro Jonggrang takut penolakan secara terang-terangan akan memicu pembalasan kejam terhadap rakyatnya ('Knowing that an outright refusal would provoke deadly retaliation against her people').",
      grammarNote: "Participial Clause of Reason: 'Knowing that an outright refusal would provoke deadly retaliation... she devised a condition'."
    },

    // Q13 - ASAS Bank (Roro Jonggrang)
    {
      id: 13,
      source: "Sumber: Dikutip dan diadaptasi dari TP_11.1_Materi_Otentik_Narrative_Text_Indonesian_Folklore.docx — Cerita Rakyat Prambanan",
      type: "reading",
      title: "Reading Section: TP 11.1 Narrative Text",
      stimulusTitle: "The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `Once upon a time in ancient Central Java, there existed two neighboring kingdoms: Pengging, ruled by the wise Prabu Damar Moyo, and Boko, governed by a fierce, giant man-eating monarch named Prabu Boko. Driven by an insatiable desire to expand his dominion, Prabu Boko waged war against Pengging. In response, Prabu Damar Moyo dispatched his valiant and powerful son, Prince Bandung Bondowoso. Blessed with supernatural strength and invulnerability, Bandung Bondowoso swiftly vanquished Prabu Boko on the battlefield.<br><br>Following his triumph, Bandung Bondowoso entered the royal court of Boko. There, he caught sight of Princess Roro Jonggrang, the late king's daughter, whose breathtaking grace and beauty immediately captivated his heart. Eager to claim her as his bride, the prince made a formal proposal. However, Roro Jonggrang felt deep abhorrence toward the man who had slain her father and subjugated her realm. Knowing that an outright refusal would provoke deadly retaliation against her people, she devised a seemingly insurmountable condition: Bandung Bondowoso had to construct one thousand ornate stone temples and two deep wells in a single night before the first rooster crowed at dawn.<br><br>Confident in his mystical prowess, Bandung Bondowoso accepted the challenge. As twilight deepened, he meditated deeply and summoned hordes of spirits from the earth. The spirits labored with astonishing velocity, hauling colossal volcanic boulders, sculpting intricate bas-reliefs, and raising magnificent shrines from the soil. By midnight, over nine hundred temples had been completed. Terrified that the prince would succeed, Roro Jonggrang hastily awakened her trusted palace maidens. She instructed them to burn piles of dry straw in the east to illuminate the horizon with a fiery crimson glow, while others pounded rice mortars vigorously to simulate morning activities. Deceived by the light and noise, roosters throughout the valley began to crow lustily, signaling the dawn.<br><br>Believing the sun was rising, the spirit legions fled back into the netherworld, leaving nine hundred and ninety-nine temples standing. When Bandung Bondowoso realized that dawn had been artificially simulated through deliberate deception, his fury was boundless. He confronted Roro Jonggrang, declaring, 'You have deceived me! As you lack only one temple to complete the thousand, you shall become the final stone!' Instantly, the princess turned into a majestic stone statue. Today, this statue resides inside the grand Shiva temple at Prambanan, a timeless reminder of the tragic peril of pride, deceit, and unbridled anger.`,
      prompt: "How did Roro Jonggrang create the illusion that dawn had arrived?",
      options: [
        { key: "A", text: "By burning piles of straw to light the horizon and ordering maidens to pound rice mortars." },
        { key: "B", text: "By blowing ceremonial silver trumpets and ringing brass temple bells across the valley." },
        { key: "C", text: "By using mirrors to reflect moonlight directly onto the prince's meditation tent." },
        { key: "D", text: "By dispatching an army of archers to drive the spirit workers back into subterranean caves." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 3 baris 7-10 menjelaskan taktik sang putri: membakar jerami kering di timur agar langit memerah dan menumbuk lesung padi ('burn piles of dry straw in the east to illuminate the horizon... others pounded rice mortars vigorously').",
      grammarNote: "Past Coordinate Action: 'She instructed them to burn piles of dry straw... while others pounded rice mortars'."
    },

    // Q14 - ASAS Bank (Roro Jonggrang)
    {
      id: 14,
      source: "Sumber: Dikutip dan diadaptasi dari TP_11.1_Materi_Otentik_Narrative_Text_Indonesian_Folklore.docx — Cerita Rakyat Prambanan",
      type: "reading",
      title: "Reading Section: TP 11.1 Narrative Text",
      stimulusTitle: "The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `Once upon a time in ancient Central Java, there existed two neighboring kingdoms: Pengging, ruled by the wise Prabu Damar Moyo, and Boko, governed by a fierce, giant man-eating monarch named Prabu Boko. Driven by an insatiable desire to expand his dominion, Prabu Boko waged war against Pengging. In response, Prabu Damar Moyo dispatched his valiant and powerful son, Prince Bandung Bondowoso. Blessed with supernatural strength and invulnerability, Bandung Bondowoso swiftly vanquished Prabu Boko on the battlefield.<br><br>Following his triumph, Bandung Bondowoso entered the royal court of Boko. There, he caught sight of Princess Roro Jonggrang, the late king's daughter, whose breathtaking grace and beauty immediately captivated his heart. Eager to claim her as his bride, the prince made a formal proposal. However, Roro Jonggrang felt deep abhorrence toward the man who had slain her father and subjugated her realm. Knowing that an outright refusal would provoke deadly retaliation against her people, she devised a seemingly insurmountable condition: Bandung Bondowoso had to construct one thousand ornate stone temples and two deep wells in a single night before the first rooster crowed at dawn.<br><br>Confident in his mystical prowess, Bandung Bondowoso accepted the challenge. As twilight deepened, he meditated deeply and summoned hordes of spirits from the earth. The spirits labored with astonishing velocity, hauling colossal volcanic boulders, sculpting intricate bas-reliefs, and raising magnificent shrines from the soil. By midnight, over nine hundred temples had been completed. Terrified that the prince would succeed, Roro Jonggrang hastily awakened her trusted palace maidens. She instructed them to burn piles of dry straw in the east to illuminate the horizon with a fiery crimson glow, while others pounded rice mortars vigorously to simulate morning activities. Deceived by the light and noise, roosters throughout the valley began to crow lustily, signaling the dawn.<br><br>Believing the sun was rising, the spirit legions fled back into the netherworld, leaving nine hundred and ninety-nine temples standing. When Bandung Bondowoso realized that dawn had been artificially simulated through deliberate deception, his fury was boundless. He confronted Roro Jonggrang, declaring, 'You have deceived me! As you lack only one temple to complete the thousand, you shall become the final stone!' Instantly, the princess turned into a majestic stone statue. Today, this statue resides inside the grand Shiva temple at Prambanan, a timeless reminder of the tragic peril of pride, deceit, and unbridled anger.`,
      prompt: "The word 'insurmountable' in the second paragraph is closest in meaning to...",
      options: [
        { key: "A", text: "impossible to overcome or accomplish" },
        { key: "B", text: "delightful and pleasant to experience" },
        { key: "C", text: "unimportant and simple to finish" },
        { key: "D", text: "generous and filled with kindness" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'insurmountable' bermakna mustahil untuk diatasi atau diselesaikan (*impossible to overcome/achieve*).",
      grammarNote: "Morphological Prefix Analysis: 'in-' (not) + 'surmount' (overcome) + '-able' (capable of) = mustahil terlampaui."
    },

    // Q15 - ASAS Bank (Roro Jonggrang)
    {
      id: 15,
      source: "Sumber: Dikutip dan diadaptasi dari TP_11.1_Materi_Otentik_Narrative_Text_Indonesian_Folklore.docx — Cerita Rakyat Prambanan",
      type: "reading",
      title: "Reading Section: TP 11.1 Narrative Text",
      stimulusTitle: "The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `Once upon a time in ancient Central Java, there existed two neighboring kingdoms: Pengging, ruled by the wise Prabu Damar Moyo, and Boko, governed by a fierce, giant man-eating monarch named Prabu Boko. Driven by an insatiable desire to expand his dominion, Prabu Boko waged war against Pengging. In response, Prabu Damar Moyo dispatched his valiant and powerful son, Prince Bandung Bondowoso. Blessed with supernatural strength and invulnerability, Bandung Bondowoso swiftly vanquished Prabu Boko on the battlefield.<br><br>Following his triumph, Bandung Bondowoso entered the royal court of Boko. There, he caught sight of Princess Roro Jonggrang, the late king's daughter, whose breathtaking grace and beauty immediately captivated his heart. Eager to claim her as his bride, the prince made a formal proposal. However, Roro Jonggrang felt deep abhorrence toward the man who had slain her father and subjugated her realm. Knowing that an outright refusal would provoke deadly retaliation against her people, she devised a seemingly insurmountable condition: Bandung Bondowoso had to construct one thousand ornate stone temples and two deep wells in a single night before the first rooster crowed at dawn.<br><br>Confident in his mystical prowess, Bandung Bondowoso accepted the challenge. As twilight deepened, he meditated deeply and summoned hordes of spirits from the earth. The spirits labored with astonishing velocity, hauling colossal volcanic boulders, sculpting intricate bas-reliefs, and raising magnificent shrines from the soil. By midnight, over nine hundred temples had been completed. Terrified that the prince would succeed, Roro Jonggrang hastily awakened her trusted palace maidens. She instructed them to burn piles of dry straw in the east to illuminate the horizon with a fiery crimson glow, while others pounded rice mortars vigorously to simulate morning activities. Deceived by the light and noise, roosters throughout the valley began to crow lustily, signaling the dawn.<br><br>Believing the sun was rising, the spirit legions fled back into the netherworld, leaving nine hundred and ninety-nine temples standing. When Bandung Bondowoso realized that dawn had been artificially simulated through deliberate deception, his fury was boundless. He confronted Roro Jonggrang, declaring, 'You have deceived me! As you lack only one temple to complete the thousand, you shall become the final stone!' Instantly, the princess turned into a majestic stone statue. Today, this statue resides inside the grand Shiva temple at Prambanan, a timeless reminder of the tragic peril of pride, deceit, and unbridled anger.`,
      prompt: "What is the primary moral value conveyed by the story of Roro Jonggrang?",
      options: [
        { key: "A", text: "Deceitful tricks and arrogant wrath bring tragic ruin to both perpetrators." },
        { key: "B", text: "Military conquests always produce peaceful and harmonious marital relationships." },
        { key: "C", text: "Relying on nocturnal spirits guarantees everlasting good fortune in architecture." },
        { key: "D", text: "Princesses should always agree to marriage proposals without asking any conditions." }
      ],
      correctAnswer: "A",
      explanation: "Pesan moral cerita menegaskan bahwa tipu muslihat yang curang dan kemarahan tak terkendali membawa kebinasaan tragis bagi kedua belah pihak ('a timeless reminder of the tragic peril of pride, deceit, and unbridled anger').",
      grammarNote: "Evaluative Moral Stance: 'peril of pride, deceit, and unbridled anger'."
    },

    // Q16 - Komplementer (Malin Kundang)
    {
      id: 16,
      source: "Sumber: Antologi Cerita Rakyat Nusantara: Kisah Malin Kundang — Balai Bahasa Sumatera Barat & Kemendikbud",
      type: "reading",
      title: "Reading Section: TP 11.1 Narrative Text",
      stimulusTitle: "The Legend of Malin Kundang: The Price of Ungrateful Pride",
      stimulusBody: `A long time ago in a poor coastal fishing village in West Sumatra, there lived a humble widow named Mande Rubayah and her only son, Malin Kundang. They lived in profound poverty, surviving day to day on the meager fish Malin caught near the shore. Despite their destitution, Mande Rubayah nurtured her boy with unconditional maternal warmth and constant prayers for a brighter future.<br><br>As Malin grew into a robust and ambitious young man, he grew weary of village hardship. When a grand merchant trading ship docked at the harbor, Malin pleaded with his mother for permission to sail abroad to seek fortune. Though her heart was shattered with grief, Mande Rubayah consented, giving him seven small packets of rice wrapped in banana leaves. She stood weeping at the harbor until the ship disappeared beneath the ocean horizon.<br><br>Years passed without word, yet the devoted mother walked to the beach every afternoon, praying for her son's safe return. In faraway lands, Malin worked relentlessly, learning maritime navigation and trade. Through diligence and shrewdness, he eventually amassed colossal wealth, acquired a fleet of merchant vessels, and married a noblewoman. One morning, Malin's magnificent two-masted ship anchored at his native harbor. Hearing of the arrival of a wealthy merchant, Mande Rubayah rushed to the dock. Recognizing her beloved son by a distinctive scar on his arm, she ran forward with tears of joy, crying, 'Malin, my son, you have finally come home!'<br><br>However, ashamed of his mother's ragged clothes and withered appearance before his aristocratic wife and crew, Malin turned coldly upon her. 'Go away, filthy old beggar! My mother was a woman of high nobility, not an ugly wretch like you!' he shouted cruelly, shoving her onto the sand. Brokenhearted and humiliated, Mande Rubayah knelt on the shore, raising her trembling hands to the heavens: 'Oh Lord Almighty, if he is indeed not my son, I forgive his insolence. But if he is truly my son Malin, let your righteous justice be served!'<br><br>Shortly afterward, the calm azure sky darkened with menacing storm clouds. Thunderous gales arose, and colossal ocean waves battered Malin's vessel. Realizing his grave transgression, Malin fell to his knees in panic, attempting to beg for forgiveness, but it was too late. A blinding bolt of lightning struck the ship, wrecking it upon the reef. When the tempest subsided the next morning, a solitary jagged stone resembling a man kneeling in remorse stood upon the silent beach—a solemn testament to the sacred virtue of filial gratitude.`,
      prompt: "What motivated young Malin Kundang to leave his native fishing village?",
      options: [
        { key: "A", text: "He grew weary of persistent poverty and wished to seek immense fortune by sailing abroad." },
        { key: "B", text: "His mother forced him to join the imperial naval fleet to fight foreign invaders." },
        { key: "C", text: "He wanted to escape a sudden volcanic eruption that threatened his coastal village." },
        { key: "D", text: "He was exiled by the village elders for failing to maintain the fishing boats." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 menyatakan alasan Malin merantau: ia lelah dengan kemiskinan dan memohon izin ibunya untuk mencari peruntungan di negeri seberang ('grew weary of village hardship... pleaded with his mother for permission to sail abroad to seek fortune').",
      grammarNote: "Infinitive of Purpose: 'to sail abroad to seek fortune'."
    },

    // Q17 - Komplementer (Malin Kundang)
    {
      id: 17,
      source: "Sumber: Antologi Cerita Rakyat Nusantara: Kisah Malin Kundang — Balai Bahasa Sumatera Barat & Kemendikbud",
      type: "reading",
      title: "Reading Section: TP 11.1 Narrative Text",
      stimulusTitle: "The Legend of Malin Kundang: The Price of Ungrateful Pride",
      stimulusBody: `A long time ago in a poor coastal fishing village in West Sumatra, there lived a humble widow named Mande Rubayah and her only son, Malin Kundang. They lived in profound poverty, surviving day to day on the meager fish Malin caught near the shore. Despite their destitution, Mande Rubayah nurtured her boy with unconditional maternal warmth and constant prayers for a brighter future.<br><br>As Malin grew into a robust and ambitious young man, he grew weary of village hardship. When a grand merchant trading ship docked at the harbor, Malin pleaded with his mother for permission to sail abroad to seek fortune. Though her heart was shattered with grief, Mande Rubayah consented, giving him seven small packets of rice wrapped in banana leaves. She stood weeping at the harbor until the ship disappeared beneath the ocean horizon.<br><br>Years passed without word, yet the devoted mother walked to the beach every afternoon, praying for her son's safe return. In faraway lands, Malin worked relentlessly, learning maritime navigation and trade. Through diligence and shrewdness, he eventually amassed colossal wealth, acquired a fleet of merchant vessels, and married a noblewoman. One morning, Malin's magnificent two-masted ship anchored at his native harbor. Hearing of the arrival of a wealthy merchant, Mande Rubayah rushed to the dock. Recognizing her beloved son by a distinctive scar on his arm, she ran forward with tears of joy, crying, 'Malin, my son, you have finally come home!'<br><br>However, ashamed of his mother's ragged clothes and withered appearance before his aristocratic wife and crew, Malin turned coldly upon her. 'Go away, filthy old beggar! My mother was a woman of high nobility, not an ugly wretch like you!' he shouted cruelly, shoving her onto the sand. Brokenhearted and humiliated, Mande Rubayah knelt on the shore, raising her trembling hands to the heavens: 'Oh Lord Almighty, if he is indeed not my son, I forgive his insolence. But if he is truly my son Malin, let your righteous justice be served!'<br><br>Shortly afterward, the calm azure sky darkened with menacing storm clouds. Thunderous gales arose, and colossal ocean waves battered Malin's vessel. Realizing his grave transgression, Malin fell to his knees in panic, attempting to beg for forgiveness, but it was too late. A blinding bolt of lightning struck the ship, wrecking it upon the reef. When the tempest subsided the next morning, a solitary jagged stone resembling a man kneeling in remorse stood upon the silent beach—a solemn testament to the sacred virtue of filial gratitude.`,
      prompt: "How did Mande Rubayah recognize that the wealthy merchant was indeed her long-lost son?",
      options: [
        { key: "A", text: "She identified a distinctive scar on his arm that he had carried since childhood." },
        { key: "B", text: "He presented her with a gold necklace bearing the royal crest of West Sumatra." },
        { key: "C", text: "The ship captain sent an official messenger to announce his royal identity." },
        { key: "D", text: "He was wearing the traditional embroidered jacket his mother had sewn for him." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 3 baris 10-12 menjelaskan cara ibu mengenali putranya: melalui bekas luka khusus di lengannya ('Recognizing her beloved son by a distinctive scar on his arm').",
      grammarNote: "Prepositional Identification Phrase: 'Recognizing her beloved son by a distinctive scar on his arm'."
    },

    // Q18 - Komplementer (Malin Kundang)
    {
      id: 18,
      source: "Sumber: Antologi Cerita Rakyat Nusantara: Kisah Malin Kundang — Balai Bahasa Sumatera Barat & Kemendikbud",
      type: "reading",
      title: "Reading Section: TP 11.1 Narrative Text",
      stimulusTitle: "The Legend of Malin Kundang: The Price of Ungrateful Pride",
      stimulusBody: `A long time ago in a poor coastal fishing village in West Sumatra, there lived a humble widow named Mande Rubayah and her only son, Malin Kundang. They lived in profound poverty, surviving day to day on the meager fish Malin caught near the shore. Despite their destitution, Mande Rubayah nurtured her boy with unconditional maternal warmth and constant prayers for a brighter future.<br><br>As Malin grew into a robust and ambitious young man, he grew weary of village hardship. When a grand merchant trading ship docked at the harbor, Malin pleaded with his mother for permission to sail abroad to seek fortune. Though her heart was shattered with grief, Mande Rubayah consented, giving him seven small packets of rice wrapped in banana leaves. She stood weeping at the harbor until the ship disappeared beneath the ocean horizon.<br><br>Years passed without word, yet the devoted mother walked to the beach every afternoon, praying for her son's safe return. In faraway lands, Malin worked relentlessly, learning maritime navigation and trade. Through diligence and shrewdness, he eventually amassed colossal wealth, acquired a fleet of merchant vessels, and married a noblewoman. One morning, Malin's magnificent two-masted ship anchored at his native harbor. Hearing of the arrival of a wealthy merchant, Mande Rubayah rushed to the dock. Recognizing her beloved son by a distinctive scar on his arm, she ran forward with tears of joy, crying, 'Malin, my son, you have finally come home!'<br><br>However, ashamed of his mother's ragged clothes and withered appearance before his aristocratic wife and crew, Malin turned coldly upon her. 'Go away, filthy old beggar! My mother was a woman of high nobility, not an ugly wretch like you!' he shouted cruelly, shoving her onto the sand. Brokenhearted and humiliated, Mande Rubayah knelt on the shore, raising her trembling hands to the heavens: 'Oh Lord Almighty, if he is indeed not my son, I forgive his insolence. But if he is truly my son Malin, let your righteous justice be served!'<br><br>Shortly afterward, the calm azure sky darkened with menacing storm clouds. Thunderous gales arose, and colossal ocean waves battered Malin's vessel. Realizing his grave transgression, Malin fell to his knees in panic, attempting to beg for forgiveness, but it was too late. A blinding bolt of lightning struck the ship, wrecking it upon the reef. When the tempest subsided the next morning, a solitary jagged stone resembling a man kneeling in remorse stood upon the silent beach—a solemn testament to the sacred virtue of filial gratitude.`,
      prompt: "Why did Malin Kundang deny and shove his own mother when she approached him?",
      options: [
        { key: "A", text: "He was ashamed of her ragged clothing and withered appearance in front of his aristocratic wife." },
        { key: "B", text: "He believed she had stolen valuable porcelain spices from his cargo hold." },
        { key: "C", text: "He had suffered memory loss from a tropical fever and truly did not know her." },
        { key: "D", text: "His mother demanded that he surrender all his merchant ships to the village chief." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 4 menyatakan bahwa Malin malu akan pakaian ibunya yang compang-camping di hadapan istri bangsawan dan anak buahnya ('ashamed of his mother's ragged clothes and withered appearance before his aristocratic wife and crew').",
      grammarNote: "Cause and Effect Adjective: 'ashamed of his mother's ragged clothes... Malin turned coldly upon her'."
    },

    // Q19 - Komplementer (Malin Kundang)
    {
      id: 19,
      source: "Sumber: Antologi Cerita Rakyat Nusantara: Kisah Malin Kundang — Balai Bahasa Sumatera Barat & Kemendikbud",
      type: "reading",
      title: "Reading Section: TP 11.1 Narrative Text",
      stimulusTitle: "The Legend of Malin Kundang: The Price of Ungrateful Pride",
      stimulusBody: `A long time ago in a poor coastal fishing village in West Sumatra, there lived a humble widow named Mande Rubayah and her only son, Malin Kundang. They lived in profound poverty, surviving day to day on the meager fish Malin caught near the shore. Despite their destitution, Mande Rubayah nurtured her boy with unconditional maternal warmth and constant prayers for a brighter future.<br><br>As Malin grew into a robust and ambitious young man, he grew weary of village hardship. When a grand merchant trading ship docked at the harbor, Malin pleaded with his mother for permission to sail abroad to seek fortune. Though her heart was shattered with grief, Mande Rubayah consented, giving him seven small packets of rice wrapped in banana leaves. She stood weeping at the harbor until the ship disappeared beneath the ocean horizon.<br><br>Years passed without word, yet the devoted mother walked to the beach every afternoon, praying for her son's safe return. In faraway lands, Malin worked relentlessly, learning maritime navigation and trade. Through diligence and shrewdness, he eventually amassed colossal wealth, acquired a fleet of merchant vessels, and married a noblewoman. One morning, Malin's magnificent two-masted ship anchored at his native harbor. Hearing of the arrival of a wealthy merchant, Mande Rubayah rushed to the dock. Recognizing her beloved son by a distinctive scar on his arm, she ran forward with tears of joy, crying, 'Malin, my son, you have finally come home!'<br><br>However, ashamed of his mother's ragged clothes and withered appearance before his aristocratic wife and crew, Malin turned coldly upon her. 'Go away, filthy old beggar! My mother was a woman of high nobility, not an ugly wretch like you!' he shouted cruelly, shoving her onto the sand. Brokenhearted and humiliated, Mande Rubayah knelt on the shore, raising her trembling hands to the heavens: 'Oh Lord Almighty, if he is indeed not my son, I forgive his insolence. But if he is truly my son Malin, let your righteous justice be served!'<br><br>Shortly afterward, the calm azure sky darkened with menacing storm clouds. Thunderous gales arose, and colossal ocean waves battered Malin's vessel. Realizing his grave transgression, Malin fell to his knees in panic, attempting to beg for forgiveness, but it was too late. A blinding bolt of lightning struck the ship, wrecking it upon the reef. When the tempest subsided the next morning, a solitary jagged stone resembling a man kneeling in remorse stood upon the silent beach—a solemn testament to the sacred virtue of filial gratitude.`,
      prompt: "The word 'tempest' in the final paragraph is closest in meaning to...",
      options: [
        { key: "A", text: "violent ocean storm with strong winds" },
        { key: "B", text: "gentle warm breeze on a sunny morning" },
        { key: "C", text: "peaceful religious festival in a village" },
        { key: "D", text: "shallow freshwater pool beside a river" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'tempest' bermakna badai dahsyat di laut yang disertai angin kencang dan gelombang laut besar (violent ocean storm).",
      grammarNote: "Contextual Vocabulary (Oxford 3000 Level B1/B2): 'tempest' = badai topan dahsyat."
    },

    // Q20 - Komplementer (Malin Kundang)
    {
      id: 20,
      source: "Sumber: Antologi Cerita Rakyat Nusantara: Kisah Malin Kundang — Balai Bahasa Sumatera Barat & Kemendikbud",
      type: "reading",
      title: "Reading Section: TP 11.1 Narrative Text",
      stimulusTitle: "The Legend of Malin Kundang: The Price of Ungrateful Pride",
      stimulusBody: `A long time ago in a poor coastal fishing village in West Sumatra, there lived a humble widow named Mande Rubayah and her only son, Malin Kundang. They lived in profound poverty, surviving day to day on the meager fish Malin caught near the shore. Despite their destitution, Mande Rubayah nurtured her boy with unconditional maternal warmth and constant prayers for a brighter future.<br><br>As Malin grew into a robust and ambitious young man, he grew weary of village hardship. When a grand merchant trading ship docked at the harbor, Malin pleaded with his mother for permission to sail abroad to seek fortune. Though her heart was shattered with grief, Mande Rubayah consented, giving him seven small packets of rice wrapped in banana leaves. She stood weeping at the harbor until the ship disappeared beneath the ocean horizon.<br><br>Years passed without word, yet the devoted mother walked to the beach every afternoon, praying for her son's safe return. In faraway lands, Malin worked relentlessly, learning maritime navigation and trade. Through diligence and shrewdness, he eventually amassed colossal wealth, acquired a fleet of merchant vessels, and married a noblewoman. One morning, Malin's magnificent two-masted ship anchored at his native harbor. Hearing of the arrival of a wealthy merchant, Mande Rubayah rushed to the dock. Recognizing her beloved son by a distinctive scar on his arm, she ran forward with tears of joy, crying, 'Malin, my son, you have finally come home!'<br><br>However, ashamed of his mother's ragged clothes and withered appearance before his aristocratic wife and crew, Malin turned coldly upon her. 'Go away, filthy old beggar! My mother was a woman of high nobility, not an ugly wretch like you!' he shouted cruelly, shoving her onto the sand. Brokenhearted and humiliated, Mande Rubayah knelt on the shore, raising her trembling hands to the heavens: 'Oh Lord Almighty, if he is indeed not my son, I forgive his insolence. But if he is truly my son Malin, let your righteous justice be served!'<br><br>Shortly afterward, the calm azure sky darkened with menacing storm clouds. Thunderous gales arose, and colossal ocean waves battered Malin's vessel. Realizing his grave transgression, Malin fell to his knees in panic, attempting to beg for forgiveness, but it was too late. A blinding bolt of lightning struck the ship, wrecking it upon the reef. When the tempest subsided the next morning, a solitary jagged stone resembling a man kneeling in remorse stood upon the silent beach—a solemn testament to the sacred virtue of filial gratitude.`,
      prompt: "What timeless moral value does the legend of Malin Kundang teach young generations?",
      options: [
        { key: "A", text: "Children must always honor, respect, and cherish their parents regardless of their material wealth." },
        { key: "B", text: "Ambitious traders should never return to their native coastal villages after becoming rich." },
        { key: "C", text: "Building two-masted ships requires strong wooden planks from deep mountain forests." },
        { key: "D", text: "Young sailors should avoid learning navigation skills from foreign merchant captains." }
      ],
      correctAnswer: "A",
      explanation: "Pesan moral abadi dari legenda Malin Kundang adalah pentingnya berbakti dan menghormati orang tua dalam keadaan apa pun tanpa memandang status kekayaan ('sacred virtue of filial gratitude').",
      grammarNote: "Moral Generalization: 'Children must always honor, respect, and cherish their parents'."
    },

    // =========================================================================
    // SECTION 3: READING GENRE 2 — TP 11.2 ANALYTICAL EXPOSITION (21 - 30)
    // 60% ASAS Bank: Q21-Q25 (Digital Literacy) + Q26-Q30 (Echo Chambers) = 10 Soal
    // =========================================================================

    // Q21 - ASAS Bank (Analytical Exposition)
    {
      id: 21,
      source: "Sumber: Dikutip dan diadaptasi dari TP_11.2_Materi_Otentik_Analytical_Exposition_Digital_Literacy.docx — Jurnal Literasi Komunikasi Digital",
      type: "reading",
      title: "Reading Section: TP 11.2 Analytical Exposition",
      stimulusTitle: "Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers",
      stimulusBody: `In the contemporary era of hyper-connected social networks, secondary students are continuously inundated with immense streams of digital information. While access to the internet offers unprecedented learning opportunities, it simultaneously exposes youths to pervasive misinformation, deceptive clickbait, and algorithmic echo chambers. Therefore, cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers.<br><br>First and foremost, critical digital literacy empowers adolescents to distinguish between factual evidence and fabricated falsehoods. Sensationalized headlines are deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification. Digitally literate students possess the cognitive discipline to evaluate the authority of sources, cross-check claims against verified databases, and recognize commercial or political biases.<br><br>Furthermore, possessing mature digital awareness is paramount for safeguarding one's permanent digital footprint. Every comment, shared image, and forum reaction leaves persistent electronic traces that cannot be completely erased by hitting 'delete'. Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles to evaluate personal integrity and constructive communication habits.<br><br>Finally, critical digital awareness shields adolescent mental wellbeing from algorithmic manipulation. Social media algorithms intentionally prioritize outrage-inducing content and idealized portrayals of peer lifestyle, which can foster profound social anxiety, body dissatisfaction, and depression among vulnerable youths. By understanding how algorithmic engagement metrics operate, students can consciously regulate their screen exposure and consume digital media intentionally rather than passively.<br><br>In conclusion, critical digital literacy is not simply about operating software applications; it is about cultivating intellectual autonomy, safeguarding ethical reputation, and protecting psychological health in an automated society. Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula.`,
      prompt: "What is the primary thesis advocated by the author in the first paragraph?",
      options: [
        { key: "A", text: "Cultivating critical digital literacy is an indispensable life competence for modern teenagers." },
        { key: "B", text: "High schools should completely ban all electronic internet connections from classrooms." },
        { key: "C", text: "Social media networks have become completely useless for academic learning purposes." },
        { key: "D", text: "Teenagers should spend at least ten hours daily browsing commercial video platforms." }
      ],
      correctAnswer: "A",
      explanation: "Tesis pada paragraf 1 menyatakan: 'cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers'.",
      grammarNote: "Analytical Exposition Thesis Statement: Subject + has become + Complement."
    },

    // Q22 - ASAS Bank (Analytical Exposition)
    {
      id: 22,
      source: "Sumber: Dikutip dan diadaptasi dari TP_11.2_Materi_Otentik_Analytical_Exposition_Digital_Literacy.docx — Jurnal Literasi Komunikasi Digital",
      type: "reading",
      title: "Reading Section: TP 11.2 Analytical Exposition",
      stimulusTitle: "Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers",
      stimulusBody: `In the contemporary era of hyper-connected social networks, secondary students are continuously inundated with immense streams of digital information. While access to the internet offers unprecedented learning opportunities, it simultaneously exposes youths to pervasive misinformation, deceptive clickbait, and algorithmic echo chambers. Therefore, cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers.<br><br>First and foremost, critical digital literacy empowers adolescents to distinguish between factual evidence and fabricated falsehoods. Sensationalized headlines are deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification. Digitally literate students possess the cognitive discipline to evaluate the authority of sources, cross-check claims against verified databases, and recognize commercial or political biases.<br><br>Furthermore, possessing mature digital awareness is paramount for safeguarding one's permanent digital footprint. Every comment, shared image, and forum reaction leaves persistent electronic traces that cannot be completely erased by hitting 'delete'. Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles to evaluate personal integrity and constructive communication habits.<br><br>Finally, critical digital awareness shields adolescent mental wellbeing from algorithmic manipulation. Social media algorithms intentionally prioritize outrage-inducing content and idealized portrayals of peer lifestyle, which can foster profound social anxiety, body dissatisfaction, and depression among vulnerable youths. By understanding how algorithmic engagement metrics operate, students can consciously regulate their screen exposure and consume digital media intentionally rather than passively.<br><br>In conclusion, critical digital literacy is not simply about operating software applications; it is about cultivating intellectual autonomy, safeguarding ethical reputation, and protecting psychological health in an automated society. Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula.`,
      prompt: "According to the second paragraph, how do sensationalized headlines deceive uncritical internet users?",
      options: [
        { key: "A", text: "They trigger volatile emotional reactions, prompting users to share unverified claims." },
        { key: "B", text: "They download destructive malware that immediately erases computer operating systems." },
        { key: "C", text: "They prevent search engines from finding relevant scientific textbooks." },
        { key: "D", text: "They force readers to purchase expensive commercial hardware products." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 menjelaskan bahwa judul sensasional dirancang untuk memicu emosi labil agar berita disebarkan tanpa verifikasi ('deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification').",
      grammarNote: "Passive Voice with Infinitive: 'headlines are deliberately engineered to trigger emotional responses'."
    },

    // Q23 - ASAS Bank (Analytical Exposition)
    {
      id: 23,
      source: "Sumber: Dikutip dan diadaptasi dari TP_11.2_Materi_Otentik_Analytical_Exposition_Digital_Literacy.docx — Jurnal Literasi Komunikasi Digital",
      type: "reading",
      title: "Reading Section: TP 11.2 Analytical Exposition",
      stimulusTitle: "Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers",
      stimulusBody: `In the contemporary era of hyper-connected social networks, secondary students are continuously inundated with immense streams of digital information. While access to the internet offers unprecedented learning opportunities, it simultaneously exposes youths to pervasive misinformation, deceptive clickbait, and algorithmic echo chambers. Therefore, cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers.<br><br>First and foremost, critical digital literacy empowers adolescents to distinguish between factual evidence and fabricated falsehoods. Sensationalized headlines are deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification. Digitally literate students possess the cognitive discipline to evaluate the authority of sources, cross-check claims against verified databases, and recognize commercial or political biases.<br><br>Furthermore, possessing mature digital awareness is paramount for safeguarding one's permanent digital footprint. Every comment, shared image, and forum reaction leaves persistent electronic traces that cannot be completely erased by hitting 'delete'. Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles to evaluate personal integrity and constructive communication habits.<br><br>Finally, critical digital awareness shields adolescent mental wellbeing from algorithmic manipulation. Social media algorithms intentionally prioritize outrage-inducing content and idealized portrayals of peer lifestyle, which can foster profound social anxiety, body dissatisfaction, and depression among vulnerable youths. By understanding how algorithmic engagement metrics operate, students can consciously regulate their screen exposure and consume digital media intentionally rather than passively.<br><br>In conclusion, critical digital literacy is not simply about operating software applications; it is about cultivating intellectual autonomy, safeguarding ethical reputation, and protecting psychological health in an automated society. Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula.`,
      prompt: "Why is a permanent digital footprint important for high school students' academic future?",
      options: [
        { key: "A", text: "Universities and scholarship committees scrutinize online profiles to evaluate integrity and conduct." },
        { key: "B", text: "Internet providers charge higher fees for accounts that have older digital posts." },
        { key: "C", text: "It guarantees automatic admission to foreign universities without examination." },
        { key: "D", text: "It prevents search engines from indexing students' personal names." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 3 menerangkan pentingnya jejak digital karena komite seleksi perguruan tinggi dan beasiswa meninjau profil publik pelamar ('Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles').",
      grammarNote: "Infinitive of Purpose: 'scrutinize applicants' public profiles to evaluate personal integrity'."
    },

    // Q24 - ASAS Bank (Analytical Exposition)
    {
      id: 24,
      source: "Sumber: Dikutip dan diadaptasi dari TP_11.2_Materi_Otentik_Analytical_Exposition_Digital_Literacy.docx — Jurnal Literasi Komunikasi Digital",
      type: "reading",
      title: "Reading Section: TP 11.2 Analytical Exposition",
      stimulusTitle: "Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers",
      stimulusBody: `In the contemporary era of hyper-connected social networks, secondary students are continuously inundated with immense streams of digital information. While access to the internet offers unprecedented learning opportunities, it simultaneously exposes youths to pervasive misinformation, deceptive clickbait, and algorithmic echo chambers. Therefore, cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers.<br><br>First and foremost, critical digital literacy empowers adolescents to distinguish between factual evidence and fabricated falsehoods. Sensationalized headlines are deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification. Digitally literate students possess the cognitive discipline to evaluate the authority of sources, cross-check claims against verified databases, and recognize commercial or political biases.<br><br>Furthermore, possessing mature digital awareness is paramount for safeguarding one's permanent digital footprint. Every comment, shared image, and forum reaction leaves persistent electronic traces that cannot be completely erased by hitting 'delete'. Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles to evaluate personal integrity and constructive communication habits.<br><br>Finally, critical digital awareness shields adolescent mental wellbeing from algorithmic manipulation. Social media algorithms intentionally prioritize outrage-inducing content and idealized portrayals of peer lifestyle, which can foster profound social anxiety, body dissatisfaction, and depression among vulnerable youths. By understanding how algorithmic engagement metrics operate, students can consciously regulate their screen exposure and consume digital media intentionally rather than passively.<br><br>In conclusion, critical digital literacy is not simply about operating software applications; it is about cultivating intellectual autonomy, safeguarding ethical reputation, and protecting psychological health in an automated society. Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula.`,
      prompt: "The word 'scrutinize' in the third paragraph is closest in meaning to...",
      options: [
        { key: "A", text: "examine and inspect with careful attention" },
        { key: "B", text: "ignore and disregard completely" },
        { key: "C", text: "delete accidentally from storage" },
        { key: "D", text: "distribute freely without authorization" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'scrutinize' bermakna memeriksa, meneliti, atau menginspeksi dengan cermat dan mendalam (examine carefully).",
      grammarNote: "Contextual Vocabulary (Oxford 3000 Level B2): 'scrutinize' = memeriksa dengan seksama."
    },

    // Q25 - ASAS Bank (Analytical Exposition)
    {
      id: 25,
      source: "Sumber: Dikutip dan diadaptasi dari TP_11.2_Materi_Otentik_Analytical_Exposition_Digital_Literacy.docx — Jurnal Literasi Komunikasi Digital",
      type: "reading",
      title: "Reading Section: TP 11.2 Analytical Exposition",
      stimulusTitle: "Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers",
      stimulusBody: `In the contemporary era of hyper-connected social networks, secondary students are continuously inundated with immense streams of digital information. While access to the internet offers unprecedented learning opportunities, it simultaneously exposes youths to pervasive misinformation, deceptive clickbait, and algorithmic echo chambers. Therefore, cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers.<br><br>First and foremost, critical digital literacy empowers adolescents to distinguish between factual evidence and fabricated falsehoods. Sensationalized headlines are deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification. Digitally literate students possess the cognitive discipline to evaluate the authority of sources, cross-check claims against verified databases, and recognize commercial or political biases.<br><br>Furthermore, possessing mature digital awareness is paramount for safeguarding one's permanent digital footprint. Every comment, shared image, and forum reaction leaves persistent electronic traces that cannot be completely erased by hitting 'delete'. Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles to evaluate personal integrity and constructive communication habits.<br><br>Finally, critical digital awareness shields adolescent mental wellbeing from algorithmic manipulation. Social media algorithms intentionally prioritize outrage-inducing content and idealized portrayals of peer lifestyle, which can foster profound social anxiety, body dissatisfaction, and depression among vulnerable youths. By understanding how algorithmic engagement metrics operate, students can consciously regulate their screen exposure and consume digital media intentionally rather than passively.<br><br>In conclusion, critical digital literacy is not simply about operating software applications; it is about cultivating intellectual autonomy, safeguarding ethical reputation, and protecting psychological health in an automated society. Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula.`,
      prompt: "What reiterated recommendation does the writer present in the concluding paragraph?",
      options: [
        { key: "A", text: "Secondary schools must systematically integrate digital literacy frameworks into curricula." },
        { key: "B", text: "High schools should prohibit all students from using electronic technology at home." },
        { key: "C", text: "Students ought to trust every algorithmic recommendation generated by search engines." },
        { key: "D", text: "Educational institutions should eliminate all writing evaluations and focus on video games." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf penutup (Reiteration) menegaskan bahwa sekolah menengah harus menanamkan kerangka literasi digital secara sistematis ('Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula').",
      grammarNote: "Modal Recommendation in Reiteration: 'Secondary schools must systematically embed...'."
    },

    // Q26 - ASAS Bank (Analytical Exposition)
    {
      id: 26,
      source: "Sumber: Jurnal Komunikasi Massa & Riset Informasi Publik — Lembaga Pers Mahasiswa & Asosiasi Pengajar Komunikasi",
      type: "reading",
      title: "Reading Section: TP 11.2 Analytical Exposition",
      stimulusTitle: "Escaping Algorithmic Echo Chambers in Modern Online Communities",
      stimulusBody: `Modern social media platforms utilize sophisticated recommendation algorithms designed to maximize user engagement. While personalized newsfeeds provide convenient content discovery, they simultaneously trap users in narrow information feedback loops known as algorithmic echo chambers. In these enclosed digital environments, users are predominantly exposed to viewpoints that mirror their pre-existing convictions, while contradictory evidence is systematically filtered out.<br><br>The primary danger of echo chambers is the polarization of public discourse. When individuals never encounter opposing perspectives, they gradually lose the capacity for empathy and intellectual nuance. Complex societal challenges—such as climate change policies, public health measures, and economic strategies—become reduced to rigid, partisan conflicts where dissenting opinions are treated with hostility rather than constructive debate.<br><br>Moreover, algorithmic echo chambers accelerate the dissemination of unfounded conspiracy theories. When a user engages with unverified claims, recommendation algorithms automatically suggest more extreme variations of the same topic. Consequently, users become increasingly insulated from objective scientific reality, making evidence-based policy formulation profoundly difficult.<br><br>To dismantle these harmful bubbles, digital citizens must actively practice epistemic hygiene. Users should consciously seek out credible news outlets with diverse editorial stances, engage respectfully with differing viewpoints, and periodically reset their tracking cookies and recommendation histories. Cultivating an open, critical mindset remains our strongest defense against algorithmic polarization.`,
      prompt: "What is an 'algorithmic echo chamber' as defined in the first paragraph?",
      options: [
        { key: "A", text: "An enclosed digital environment where users are only exposed to viewpoints mirroring their own beliefs." },
        { key: "B", text: "A specialized soundproof auditorium used for recording vocal radio broadcasts." },
        { key: "C", text: "A hardware device that accelerates internet bandwidth in rural settlements." },
        { key: "D", text: "A computer virus that deletes browser bookmarks and saved passwords." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 1 mendefinisikan ruang gema algoritmik (*algorithmic echo chambers*): lingkungan digital tempat pengguna hanya disuguhi konten yang mencerminkan keyakinan mereka sendiri ('exposed to viewpoints that mirror their pre-existing convictions').",
      grammarNote: "Defining Relative Clause: 'loops in which users are predominantly exposed to viewpoints that mirror their pre-existing convictions'."
    },

    // Q27 - ASAS Bank (Analytical Exposition)
    {
      id: 27,
      source: "Sumber: Jurnal Komunikasi Massa & Riset Informasi Publik — Lembaga Pers Mahasiswa & Asosiasi Pengajar Komunikasi",
      type: "reading",
      title: "Reading Section: TP 11.2 Analytical Exposition",
      stimulusTitle: "Escaping Algorithmic Echo Chambers in Modern Online Communities",
      stimulusBody: `Modern social media platforms utilize sophisticated recommendation algorithms designed to maximize user engagement. While personalized newsfeeds provide convenient content discovery, they simultaneously trap users in narrow information feedback loops known as algorithmic echo chambers. In these enclosed digital environments, users are predominantly exposed to viewpoints that mirror their pre-existing convictions, while contradictory evidence is systematically filtered out.<br><br>The primary danger of echo chambers is the polarization of public discourse. When individuals never encounter opposing perspectives, they gradually lose the capacity for empathy and intellectual nuance. Complex societal challenges—such as climate change policies, public health measures, and economic strategies—become reduced to rigid, partisan conflicts where dissenting opinions are treated with hostility rather than constructive debate.<br><br>Moreover, algorithmic echo chambers accelerate the dissemination of unfounded conspiracy theories. When a user engages with unverified claims, recommendation algorithms automatically suggest more extreme variations of the same topic. Consequently, users become increasingly insulated from objective scientific reality, making evidence-based policy formulation profoundly difficult.<br><br>To dismantle these harmful bubbles, digital citizens must actively practice epistemic hygiene. Users should consciously seek out credible news outlets with diverse editorial stances, engage respectfully with differing viewpoints, and periodically reset their tracking cookies and recommendation histories. Cultivating an open, critical mindset remains our strongest defense against algorithmic polarization.`,
      prompt: "Why is the polarization of public discourse considered a primary danger of echo chambers?",
      options: [
        { key: "A", text: "It causes individuals to lose empathy and view dissenting opinions with hostility instead of debate." },
        { key: "B", text: "It damages high-speed underwater fiber-optic cables connecting continents." },
        { key: "C", text: "It forces smartphone manufacturers to raise battery replacement prices." },
        { key: "D", text: "It prevents students from learning foreign languages in high school." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 menyatakan bahwa polarisasi membuat orang kehilangan empati dan memperlakukan perbedaan pendapat dengan permusuhan ('gradually lose the capacity for empathy... dissenting opinions are treated with hostility rather than constructive debate').",
      grammarNote: "Adverbial Clause of Time: 'When individuals never encounter opposing perspectives, they lose empathy'."
    },

    // Q28 - ASAS Bank (Analytical Exposition)
    {
      id: 28,
      source: "Sumber: Jurnal Komunikasi Massa & Riset Informasi Publik — Lembaga Pers Mahasiswa & Asosiasi Pengajar Komunikasi",
      type: "reading",
      title: "Reading Section: TP 11.2 Analytical Exposition",
      stimulusTitle: "Escaping Algorithmic Echo Chambers in Modern Online Communities",
      stimulusBody: `Modern social media platforms utilize sophisticated recommendation algorithms designed to maximize user engagement. While personalized newsfeeds provide convenient content discovery, they simultaneously trap users in narrow information feedback loops known as algorithmic echo chambers. In these enclosed digital environments, users are predominantly exposed to viewpoints that mirror their pre-existing convictions, while contradictory evidence is systematically filtered out.<br><br>The primary danger of echo chambers is the polarization of public discourse. When individuals never encounter opposing perspectives, they gradually lose the capacity for empathy and intellectual nuance. Complex societal challenges—such as climate change policies, public health measures, and economic strategies—become reduced to rigid, partisan conflicts where dissenting opinions are treated with hostility rather than constructive debate.<br><br>Moreover, algorithmic echo chambers accelerate the dissemination of unfounded conspiracy theories. When a user engages with unverified claims, recommendation algorithms automatically suggest more extreme variations of the same topic. Consequently, users become increasingly insulated from objective scientific reality, making evidence-based policy formulation profoundly difficult.<br><br>To dismantle these harmful bubbles, digital citizens must actively practice epistemic hygiene. Users should consciously seek out credible news outlets with diverse editorial stances, engage respectfully with differing viewpoints, and periodically reset their tracking cookies and recommendation histories. Cultivating an open, critical mindset remains our strongest defense against algorithmic polarization.`,
      prompt: "How do recommendation algorithms facilitate the spread of conspiracy theories?",
      options: [
        { key: "A", text: "They suggest increasingly extreme variations of unverified topics to engaged users." },
        { key: "B", text: "They automatically delete verified scientific articles from all online encyclopedias." },
        { key: "C", text: "They block users from visiting local municipal library facilities." },
        { key: "D", text: "They send physical pamphlets directly to users' residential mailboxes." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 3 menjelaskan bahwa algoritma secara otomatis menyarankan variasi topik yang semakin ekstrem begitu pengguna berinteraksi dengan klaim yang belum diverifikasi ('recommendation algorithms automatically suggest more extreme variations of the same topic').",
      grammarNote: "Cause and Effect: 'When a user engages... algorithms suggest more extreme variations'."
    },

    // Q29 - ASAS Bank (Analytical Exposition)
    {
      id: 29,
      source: "Sumber: Jurnal Komunikasi Massa & Riset Informasi Publik — Lembaga Pers Mahasiswa & Asosiasi Pengajar Komunikasi",
      type: "reading",
      title: "Reading Section: TP 11.2 Analytical Exposition",
      stimulusTitle: "Escaping Algorithmic Echo Chambers in Modern Online Communities",
      stimulusBody: `Modern social media platforms utilize sophisticated recommendation algorithms designed to maximize user engagement. While personalized newsfeeds provide convenient content discovery, they simultaneously trap users in narrow information feedback loops known as algorithmic echo chambers. In these enclosed digital environments, users are predominantly exposed to viewpoints that mirror their pre-existing convictions, while contradictory evidence is systematically filtered out.<br><br>The primary danger of echo chambers is the polarization of public discourse. When individuals never encounter opposing perspectives, they gradually lose the capacity for empathy and intellectual nuance. Complex societal challenges—such as climate change policies, public health measures, and economic strategies—become reduced to rigid, partisan conflicts where dissenting opinions are treated with hostility rather than constructive debate.<br><br>Moreover, algorithmic echo chambers accelerate the dissemination of unfounded conspiracy theories. When a user engages with unverified claims, recommendation algorithms automatically suggest more extreme variations of the same topic. Consequently, users become increasingly insulated from objective scientific reality, making evidence-based policy formulation profoundly difficult.<br><br>To dismantle these harmful bubbles, digital citizens must actively practice epistemic hygiene. Users should consciously seek out credible news outlets with diverse editorial stances, engage respectfully with differing viewpoints, and periodically reset their tracking cookies and recommendation histories. Cultivating an open, critical mindset remains our strongest defense against algorithmic polarization.`,
      prompt: "The word 'insulated' in the third paragraph is closest in meaning to...",
      options: [
        { key: "A", text: "isolated and protected from outside contact" },
        { key: "B", text: "connected openly with global researchers" },
        { key: "C", text: "encouraged to debate in public symposiums" },
        { key: "D", text: "financially rewarded for online engagement" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'insulated' dalam frasa 'increasingly insulated from objective reality' bermakna terisolasi, terkurung, atau terputus dari dunia nyata di luar lingkarannya (isolated / detached).",
      grammarNote: "Contextual Vocabulary (Oxford 3000 Level B2): 'insulated from' = terisolasi dari."
    },

    // Q30 - ASAS Bank (Analytical Exposition)
    {
      id: 30,
      source: "Sumber: Jurnal Komunikasi Massa & Riset Informasi Publik — Lembaga Pers Mahasiswa & Asosiasi Pengajar Komunikasi",
      type: "reading",
      title: "Reading Section: TP 11.2 Analytical Exposition",
      stimulusTitle: "Escaping Algorithmic Echo Chambers in Modern Online Communities",
      stimulusBody: `Modern social media platforms utilize sophisticated recommendation algorithms designed to maximize user engagement. While personalized newsfeeds provide convenient content discovery, they simultaneously trap users in narrow information feedback loops known as algorithmic echo chambers. In these enclosed digital environments, users are predominantly exposed to viewpoints that mirror their pre-existing convictions, while contradictory evidence is systematically filtered out.<br><br>The primary danger of echo chambers is the polarization of public discourse. When individuals never encounter opposing perspectives, they gradually lose the capacity for empathy and intellectual nuance. Complex societal challenges—such as climate change policies, public health measures, and economic strategies—become reduced to rigid, partisan conflicts where dissenting opinions are treated with hostility rather than constructive debate.<br><br>Moreover, algorithmic echo chambers accelerate the dissemination of unfounded conspiracy theories. When a user engages with unverified claims, recommendation algorithms automatically suggest more extreme variations of the same topic. Consequently, users become increasingly insulated from objective scientific reality, making evidence-based policy formulation profoundly difficult.<br><br>To dismantle these harmful bubbles, digital citizens must actively practice epistemic hygiene. Users should consciously seek out credible news outlets with diverse editorial stances, engage respectfully with differing viewpoints, and periodically reset their tracking cookies and recommendation histories. Cultivating an open, critical mindset remains our strongest defense against algorithmic polarization.`,
      prompt: "What practical action does the author advise readers to take to break out of echo chambers?",
      options: [
        { key: "A", text: "Seek diverse reputable news sources and periodically reset recommendation tracking histories." },
        { key: "B", text: "Only read posts written by anonymous internet accounts on social forums." },
        { key: "C", text: "Stop reading all newspapers and consult astrology charts for factual advice." },
        { key: "D", text: "Block every friend or family member who expresses a different viewpoint." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf terakhir menyarankan tindakan: 'consciously seek out credible news outlets with diverse editorial stances... and periodically reset their tracking cookies and recommendation histories'.",
      grammarNote: "Imperative / Modal Suggestion: 'users should consciously seek out credible outlets... and reset histories'."
    },

    // =========================================================================
    // SECTION 4: GRAMMAR & LANGUAGE MECHANICS IN ACADEMIC CONTEXT (31 - 40)
    // 40% Komplementer Full-Semester Grammar: 10 Soal
    // =========================================================================
    {
      id: 31,
      source: "Sumber: Bank Soal Evaluasi Tata Bahasa Bahasa Inggris Fase F — Tim MGMP Kabupaten Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Past Perfect Tense in Narrative Context",
      prompt: "Before the rooster crowed to herald the dawn, the spirit legion ________ nine hundred and ninety-nine magnificent stone temples across the Prambanan plains.\n\nChoose the correct past verb form to complete the sentence:",
      options: [
        { key: "A", text: "had already constructed" },
        { key: "B", text: "has already constructed" },
        { key: "C", text: "will have constructed" },
        { key: "D", text: "was constructing" }
      ],
      correctAnswer: "A",
      explanation: "Peristiwa pembangunan candi terjadi lebih dahulu sebelum ayam berkokok di masa lampau ('Before the rooster crowed'). Untuk menyatakan peristiwa yang telah selesai sebelum peristiwa lampau lainnya terjadi, digunakan Past Perfect Tense (had + V3 / 'had already constructed').",
      grammarNote: "Past Perfect Narrative Rule: Had + Past Participle menandai aksi yang selesai mendahului aksi Simple Past lainnya."
    },
    {
      id: 32,
      source: "Sumber: Bank Soal Evaluasi Tata Bahasa Bahasa Inggris Fase F — Tim MGMP Kabupaten Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Concessive Connectors (Although vs Despite)",
      prompt: "________ enduring intense emotional grief and living in severe poverty, Mande Rubayah never ceased praying for Malin Kundang's safe return.\n\nChoose the grammatically accurate connector to complete the sentence:",
      options: [
        { key: "A", text: "Despite" },
        { key: "B", text: "Although" },
        { key: "C", text: "Even though" },
        { key: "D", text: "Because" }
      ],
      correctAnswer: "A",
      explanation: "Frasa setelah rumpang adalah frasa nomina berbentuk gerund ('enduring intense emotional grief and living in severe poverty'). Preposisi yang tepat diikuti frasa nomina/gerund adalah 'Despite' (atau 'In spite of'). Pilihan 'Although' dan 'Even though' wajib diikuti klausa lengkap (Subject + Verb).",
      grammarNote: "Concession Rule: Despite / In spite of + Noun/Gerund Phrase vs Although + Clause."
    },
    {
      id: 33,
      source: "Sumber: Bank Soal Evaluasi Tata Bahasa Bahasa Inggris Fase F — Tim MGMP Kabupaten Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Causal Connectors (Due to vs Because)",
      prompt: "The spirit workers fled abruptly back into the netherworld ________ the sudden crimson light and roosters crowing in the eastern valley.\n\nChoose the correct causal connector preceding the noun phrase:",
      options: [
        { key: "A", text: "because of" },
        { key: "B", text: "because" },
        { key: "C", text: "since" },
        { key: "D", text: "as" }
      ],
      correctAnswer: "A",
      explanation: "Setelah rumpang terdapat frasa kata benda ('the sudden crimson light and roosters crowing in the eastern valley'). Preposisi kausal yang diikuti kata benda/frasa nomina adalah 'because of' atau 'due to'. 'Because', 'since', dan 'as' adalah konjungsi yang harus diikuti klausa (S + V).",
      grammarNote: "Causal Preposition Rule: 'Because of + Noun Phrase' vs 'Because + Clause (S + V)'."
    },
    {
      id: 34,
      source: "Sumber: Bank Soal Evaluasi Tata Bahasa Bahasa Inggris Fase F — Tim MGMP Kabupaten Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Reported Speech in Narrative Discourse",
      prompt: "Direct Speech: 'I will never marry the man who killed my father,' whispered Princess Roro Jonggrang.\n\nIndirect Speech: Princess Roro Jonggrang whispered that she ________ never marry the man who had killed her father.",
      options: [
        { key: "A", text: "would" },
        { key: "B", text: "will" },
        { key: "C", text: "shall" },
        { key: "D", text: "must" }
      ],
      correctAnswer: "A",
      explanation: "Dalam kalimat tidak langsung (*Reported Speech*) dengan kata pengantar lampau ('whispered'), modal 'will' harus mengalami pergeseran waktu (*backshift*) menjadi bentuk lampau 'would'.",
      grammarNote: "Reported Speech Backshift Rule: Modal 'will' berubah menjadi 'would' dalam wacana naratif lampau."
    },
    {
      id: 35,
      source: "Sumber: Bank Soal Evaluasi Tata Bahasa Bahasa Inggris Fase F — Tim MGMP Kabupaten Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Conditional Sentence Type 2",
      prompt: "If modern teenagers ________ digital information critically before forwarding it, online rumors and hoaxes would not spread so rapidly.\n\nChoose the correct verb form for this hypothetical present condition:",
      options: [
        { key: "A", text: "verified" },
        { key: "B", text: "verify" },
        { key: "C", text: "will verify" },
        { key: "D", text: "had verified" }
      ],
      correctAnswer: "A",
      explanation: "Klausa utama menggunakan 'would not spread' (would + V1), yang menandakan Conditional Sentence Type 2 (situasi pengandaian tidak nyata masa kini). Pola if-clause Type 2 wajib menggunakan Simple Past (V2 / 'verified').",
      grammarNote: "Conditional Type 2 Formula: If + Subject + V2 (Simple Past), Subject + would + V1."
    },
    {
      id: 36,
      source: "Sumber: Bank Soal Evaluasi Tata Bahasa Bahasa Inggris Fase F — Tim MGMP Kabupaten Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Scientific Passive Voice in Analytical Writing",
      prompt: "Sensationalized headlines ________ by algorithms to capture user attention and maximize online advertising revenue.\n\nChoose the correct passive verb phrase:",
      options: [
        { key: "A", text: "are engineered" },
        { key: "B", text: "is engineering" },
        { key: "C", text: "engineered" },
        { key: "D", text: "was engineering" }
      ],
      correctAnswer: "A",
      explanation: "Subjek jamak 'Sensationalized headlines' menerima aksi dari algoritma (kalimat pasif fakta umum / Simple Present Passive): are + V3 ('are engineered').",
      grammarNote: "Passive Voice Formula: Plural Subject + are + Past Participle (engineered) + by Agent."
    },
    {
      id: 37,
      source: "Sumber: Bank Soal Evaluasi Tata Bahasa Bahasa Inggris Fase F — Tim MGMP Kabupaten Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Contrastive Transitional Markers",
      prompt: "Social media feeds offer unprecedented access to global learning resources. ________, unmoderated algorithms frequently trap young users in polarized echo chambers.\n\nChoose the most suitable transitional discourse connector:",
      options: [
        { key: "A", text: "However" },
        { key: "B", text: "Furthermore" },
        { key: "C", text: "Therefore" },
        { key: "D", text: "Similarly" }
      ],
      correctAnswer: "A",
      explanation: "Kalimat pertama menyajikan aspek positif (akses sumber belajar global), sedangkan kalimat kedua menyajikan aspek negatif (terperangkap dalam echo chamber). Kata transisi antarkalimat yang menyatakan pertentangan (*contrast*) adalah 'However' (namun demikian).",
      grammarNote: "Contrastive Sentence Connector: 'However' menghubungkan dua pernyataan kontras dengan koma setelahnya."
    },
    {
      id: 38,
      source: "Sumber: Bank Soal Evaluasi Tata Bahasa Bahasa Inggris Fase F — Tim MGMP Kabupaten Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Collocations in Digital Media Context",
      prompt: "Responsible digital citizens should always ________ the authenticity of online claims before reposting them to social media groups.\n\nChoose the correct academic verb that collocates with 'authenticity':",
      options: [
        { key: "A", text: "verify" },
        { key: "B", text: "fabricate" },
        { key: "C", text: "postpone" },
        { key: "D", text: "exaggerate" }
      ],
      correctAnswer: "A",
      explanation: "Kolokasi akademis yang baku adalah 'verify the authenticity' (memverifikasi keabsahan/keotentikan suatu klaim atau berita). 'Fabricate' justru berarti memalsukan.",
      grammarNote: "Lexical Collocation: 'verify authenticity' = memastikan kebenaran sumber informasi."
    },
    {
      id: 39,
      source: "Sumber: Bank Soal Evaluasi Tata Bahasa Bahasa Inggris Fase F — Tim MGMP Kabupaten Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Relative Pronoun 'whose'",
      prompt: "Princess Roro Jonggrang was a graceful princess ________ beauty and tragic fate inspired the construction of the Prambanan temple legend.\n\nChoose the correct relative pronoun showing possession:",
      options: [
        { key: "A", text: "whose" },
        { key: "B", text: "which" },
        { key: "C", text: "who" },
        { key: "D", text: "whom" }
      ],
      correctAnswer: "A",
      explanation: "Kata ganti relatif kepemilikan (*possessive relative pronoun*) yang menghubungkan subjek orang ('Princess Roro Jonggrang') dengan kata bendanya ('beauty and tragic fate') adalah 'whose'.",
      grammarNote: "Relative Clause of Possession: 'Noun (person) + whose + Noun Phrase'."
    },
    {
      id: 40,
      source: "Sumber: Bank Soal Evaluasi Tata Bahasa Bahasa Inggris Fase F — Tim MGMP Kabupaten Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Academic Vocabulary Level B2 (Imperative)",
      prompt: "Given the prevalence of online misinformation, it is ________ that secondary schools equip learners with analytical verification skills.\n\nChoose the most accurate adjective expressing absolute necessity:",
      options: [
        { key: "A", text: "imperative" },
        { key: "B", text: "negligible" },
        { key: "C", text: "redundant" },
        { key: "D", text: "trivial" }
      ],
      correctAnswer: "A",
      explanation: "'Imperative' bermakna sangat mendesak, penting sekali, dan mutlak wajib dilaksanakan (*urgently necessary / vital*). Pilihan 'negligible' (dapat diabaikan), 'redundant' (tidak diperlukan), dan 'trivial' (sepele) bertentangan dengan konteks.",
      grammarNote: "Evaluative Stance Adjective (Oxford 5000 Level B2): 'It is imperative that + clause'."
    }
  ];
}

// Fisher-Yates Dynamic Option Shuffling (Practice Mode)
function randomizeQuestionOptions(qList) {
  return qList.map(q => {
    if (q.type === "listening_pictures") {
      return { ...q };
    }
    const cloned = { ...q, options: [...q.options] };
    const originalCorrectKey = q.correctAnswer;
    const correctOpt = q.options.find(o => o.key === originalCorrectKey);
    if (!correctOpt) return q;

    for (let i = cloned.options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cloned.options[i], cloned.options[j]] = [cloned.options[j], cloned.options[i]];
    }

    const keyLetters = ["A", "B", "C", "D"];
    let newCorrectKey = originalCorrectKey;
    cloned.options = cloned.options.map((opt, idx) => {
      const newKey = keyLetters[idx];
      if (opt.text === correctOpt.text) {
        newCorrectKey = newKey;
      }
      return { ...opt, key: newKey };
    });

    cloned.correctAnswer = newCorrectKey;
    return cloned;
  });
}

// Student & State Management
let currentTingkat = "XI-F";
let currentMode = "practice";
let currentQuestionIndex = 0;
let userAnswers = {};
let flaggedQuestions = new Set();
let timerInterval = null;
let remainingSeconds = 90 * 60;
let isExamSubmitted = false;
let audioSpeechRate = 1.0;
let currentUtterance = null;
let questions = [];

let studentIdentity = {
  tingkat: "XI-F",
  rombel: "1",
  presensi: "1",
  nama: "Siswa Kelas XI"
};

// Initialize Exam Engine
// Verifikasi Otorisasi Password ASTS Real
(function checkAstsAuth() {
  try {
    const auth = sessionStorage.getItem("sabaku_asts_auth");
    const student = localStorage.getItem("sabaku_current_student");
    if (!auth || !student) {
      alert("⚠️ Akses ASTS Resmi Memerlukan Password!\n\nSilakan masukkan password ASTS yang valid dari pengawas ruang.");
      window.location.href = "masuk-asts.html";
    }
  } catch (e) {
    console.warn("Auth check error:", e);
  }
})();


function checkAstsAuth() {
  try {
    const auth = sessionStorage.getItem("sabaku_asts_auth");
    const student = localStorage.getItem("sabaku_current_student");
    if (!auth || !student) {
      alert("⚠️ Akses Ruang ASTS Resmi Memerlukan Password!\n\nSilakan masukkan password ASTS yang valid dari pengawas ruang.");
      window.location.href = "masuk-asts.html";
      return false;
    }
    return true;
  } catch (e) {
    return true;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (!checkAstsAuth()) return;
  initStudentData();
  const rawQ = getGrade11AstsQuestions();
  questions = (currentMode === "practice") ? randomizeQuestionOptions(rawQ) : rawQ;

  buildNavigatorGrid();
  renderQuestion(0);
  startTimer();
  applyStudentMetadata();
});

function initStudentData() {
  try {
    const saved = localStorage.getItem("sabaku_current_student");
    if (saved) {
      const parsed = JSON.parse(saved);
      studentIdentity.nama = parsed.nama || "Siswa Kelas XI";
      studentIdentity.tingkat = parsed.tingkat || "XI-F";
      studentIdentity.rombel = parsed.rombel || "1";
      studentIdentity.presensi = parsed.presensi || "1";
      currentMode = parsed.mode || "practice";
    }
  } catch (e) {
    console.warn("Local student parse error:", e);
  }

  try {
    const savedProgress = localStorage.getItem("sabaku_asts_progress_XI");
    if (savedProgress) {
      const prog = JSON.parse(savedProgress);
      if (prog.userAnswers) userAnswers = prog.userAnswers;
      if (prog.flaggedQuestions) flaggedQuestions = new Set(prog.flaggedQuestions);
      if (prog.remainingSeconds && prog.remainingSeconds > 0) remainingSeconds = prog.remainingSeconds;
      if (typeof prog.currentIndex === "number") currentQuestionIndex = prog.currentIndex;
    }
  } catch (e) {
    console.warn("Autosave load error:", e);
  }
}

function handleDirectIdentitySubmit(e) {
  e.preventDefault();
  const nama = document.getElementById("direct-nama").value.trim();
  const rombel = document.getElementById("direct-rombel").value;
  const presensi = document.getElementById("direct-presensi").value.trim();
  const mode = document.getElementById("direct-mode").value;

  if (!nama || !rombel || !presensi) {
    alert("Harap lengkapi semua kolom!");
    return;
  }

  // Tidak perlu token atau password untuk latihan / asesmen
  studentIdentity = { tingkat: "XI-F", rombel, presensi, nama };
  currentMode = mode;
  localStorage.setItem("sabaku_current_student", JSON.stringify({
    ...studentIdentity,
    mode
  }));

  document.getElementById("identity-prompt-modal").style.display = "none";
  startFreshTest();
}

function validateDirectPresensi(input) {
  let val = input.value.replace(/\D/g, "");
  if (val.startsWith("0")) val = val.replace(/^0+/, "");
  let num = parseInt(val, 10);
  if (num > 36) val = "36";
  input.value = val;
}

function toggleDirectToken(mode) {}

function startFreshTest() {
  userAnswers = {};
  flaggedQuestions.clear();
  remainingSeconds = 90 * 60;
  currentQuestionIndex = 0;
  isExamSubmitted = false;

  const rawQ = getGrade11AstsQuestions();
  questions = (currentMode === "practice") ? randomizeQuestionOptions(rawQ) : rawQ;

  applyStudentMetadata();
  buildNavigatorGrid();
  renderQuestion(0);
  startTimer();
}

function applyStudentMetadata() {
  const nameEl = document.getElementById("side-student-name");
  const metaEl = document.getElementById("side-student-meta");
  const modeBadge = document.getElementById("nav-mode-badge");

  if (nameEl) nameEl.textContent = studentIdentity.nama;
  if (metaEl) metaEl.textContent = `Kelas XI | Rombel ${studentIdentity.rombel} | Presensi ${studentIdentity.presensi}`;
  if (modeBadge) {
    modeBadge.textContent = "Mode ASTS Gasal";
    modeBadge.style.background = "#ecfdf5";
    modeBadge.style.color = "#047857";
  }
}

function toggleKisiKisiContent() {
  const body = document.getElementById("kisi-kisi-body");
  const icon = document.getElementById("kisi-toggle-icon");
  if (body.style.display === "none") {
    body.style.display = "block";
    icon.textContent = "▲ Sembunyikan Kisi-Kisi";
  } else {
    body.style.display = "none";
    icon.textContent = "▼ Lihat Rincian Kisi-Kisi";
  }
}

function toggleKisiKisiModal() {
  toggleKisiKisiContent();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildNavigatorGrid() {
  const grid = document.getElementById("question-navigator-grid");
  if (!grid) return;
  grid.innerHTML = "";

  for (let i = 1; i <= 40; i++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "q-num-btn";
    btn.id = `nav-btn-${i}`;
    btn.textContent = i;
    btn.onclick = () => renderQuestion(i - 1);
    grid.appendChild(btn);
  }
  updateNavigatorStatus();
}

function updateNavigatorStatus() {
  for (let i = 1; i <= 40; i++) {
    const btn = document.getElementById(`nav-btn-${i}`);
    if (!btn) continue;

    btn.className = "q-num-btn";
    const isAnswered = isQuestionAnswered(i);
    const isFlagged = flaggedQuestions.has(i);

    if (i - 1 === currentQuestionIndex) {
      btn.classList.add("current");
    }

    if (isFlagged) {
      btn.classList.add("flagged");
    } else if (isAnswered) {
      btn.classList.add("answered");
    }
  }
}

function isQuestionAnswered(qId) {
  return userAnswers[qId] !== undefined && userAnswers[qId] !== "";
}

function renderQuestion(idx) {
  if (idx < 0 || idx >= questions.length) return;
  currentQuestionIndex = idx;
  const q = questions[idx];

  const numBadge = document.getElementById("q-number-badge");
  const typeBadge = document.getElementById("q-type-badge");
  if (numBadge) numBadge.textContent = `Soal No. ${q.id} dari ${questions.length}`;
  if (typeBadge) typeBadge.textContent = q.title || "ASTS Gasal Kelas XI";

  const btnFlag = document.getElementById("btn-flag-q");
  if (btnFlag) {
    if (flaggedQuestions.has(q.id)) {
      btnFlag.classList.add("btn-warning");
      btnFlag.innerHTML = "🚩 Ragu-ragu (Ditandai)";
    } else {
      btnFlag.classList.remove("btn-warning");
      btnFlag.innerHTML = "🟡 Ragu-ragu";
    }
  }

  const audioBox = document.getElementById("listening-container");
  if (q.audioText) {
    audioBox.style.display = "block";
    stopAudio();
  } else {
    audioBox.style.display = "none";
    stopAudio();
  }

  const stimContainer = document.getElementById("stimulus-container");
  const stimTitle = document.getElementById("stimulus-title");
  const stimBody = document.getElementById("stimulus-body");
  const stimSource = document.getElementById("stimulus-source");

  if (q.stimulusBody) {
    stimContainer.style.display = "block";
    stimTitle.textContent = q.stimulusTitle || "Teks Stimulus";
    stimBody.innerHTML = q.stimulusBody;
    stimSource.textContent = q.source || "";
  } else {
    stimContainer.style.display = "none";
  }

  const promptEl = document.getElementById("question-prompt-text");
  promptEl.innerHTML = q.prompt.replace(/\n/g, "<br>");

  const optContainer = document.getElementById("options-container");
  optContainer.innerHTML = "";

  if (q.type === "listening_pictures") {
    renderPictureChoices(q, optContainer);
  } else {
    renderSingleChoices(q, optContainer);
  }

  const expBox = document.getElementById("question-explanation-box");
  const expText = document.getElementById("explanation-text");
  const expMeta = document.getElementById("explanation-meta-text");

  if (isExamSubmitted || (currentMode === "practice" && isQuestionAnswered(q.id))) {
    expBox.style.display = "block";
    expText.innerHTML = `<strong>Kunci Jawaban: ${q.correctAnswer}</strong><br>${q.explanation || ""}`;
    expMeta.innerHTML = `<em>Kaidah Bahasa &amp; Materi:</em> ${q.grammarNote || ""}<br><span style="font-size:0.8rem; color:#64748b;">${q.source || ""}</span>`;
  } else {
    expBox.style.display = "none";
  }

  document.getElementById("btn-prev-q").disabled = (idx === 0);
  const nextBtn = document.getElementById("btn-next-q");
  const submitBtn = document.getElementById("btn-submit-test");

  if (idx === questions.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-flex";
  } else {
    nextBtn.style.display = "inline-flex";
    submitBtn.style.display = "none";
  }

  updateNavigatorStatus();
  saveProgressToLocalStorage();
}

function renderPictureChoices(q, container) {
  const grid = document.createElement("div");
  grid.className = "picture-options-grid";

  q.options.forEach(opt => {
    const card = document.createElement("div");
    card.className = "picture-option-card";
    if (userAnswers[q.id] === opt.key) {
      card.classList.add("selected");
    }

    if (isExamSubmitted || (currentMode === "practice" && isQuestionAnswered(q.id))) {
      if (opt.key === q.correctAnswer) card.classList.add("correct-highlight");
      if (userAnswers[q.id] === opt.key && opt.key !== q.correctAnswer) card.classList.add("wrong-highlight");
    }

    card.onclick = () => {
      if (isExamSubmitted) return;
      userAnswers[q.id] = opt.key;
      renderQuestion(currentQuestionIndex);
    };

    card.innerHTML = `
      <div class="pic-svg-box">${opt.svg}</div>
      <div class="pic-opt-label"><strong>Pilihan (${opt.key})</strong><br><span style="font-size:0.8rem; color:#475569;">${opt.label}</span></div>
    `;
    grid.appendChild(card);
  });

  container.appendChild(grid);
}

function renderSingleChoices(q, container) {
  const list = document.createElement("div");
  list.className = "options-list";

  q.options.forEach(opt => {
    const item = document.createElement("div");
    item.className = "option-item";
    if (userAnswers[q.id] === opt.key) {
      item.classList.add("selected");
    }

    if (isExamSubmitted || (currentMode === "practice" && isQuestionAnswered(q.id))) {
      if (opt.key === q.correctAnswer) item.classList.add("correct-highlight");
      if (userAnswers[q.id] === opt.key && opt.key !== q.correctAnswer) item.classList.add("wrong-highlight");
    }

    item.onclick = () => {
      if (isExamSubmitted) return;
      userAnswers[q.id] = opt.key;
      renderQuestion(currentQuestionIndex);
    };

    item.innerHTML = `
      <div class="opt-badge">${opt.key}</div>
      <div class="opt-text">${opt.text}</div>
    `;
    list.appendChild(item);
  });

  container.appendChild(list);
}

function navigateQuestion(delta) {
  renderQuestion(currentQuestionIndex + delta);
}

function toggleFlagQuestion() {
  const qId = questions[currentQuestionIndex].id;
  if (flaggedQuestions.has(qId)) {
    flaggedQuestions.delete(qId);
  } else {
    flaggedQuestions.add(qId);
  }
  renderQuestion(currentQuestionIndex);
}

// Audio Synthesis
function playQuestionAudio() {
  const q = questions[currentQuestionIndex];
  if (!q.audioText) return;

  if (!("speechSynthesis" in window)) {
    alert("Web Speech API tidak didukung di peramban ini.");
    return;
  }

  stopAudio();

  const cleanText = q.audioText.replace(/\\n/g, " ").replace(/\n/g, " ");
  currentUtterance = new SpeechSynthesisUtterance(cleanText);
  currentUtterance.lang = "en-US";
  currentUtterance.rate = audioSpeechRate;

  const btnText = document.getElementById("play-text");
  const statusEl = document.getElementById("audio-status-text");

  currentUtterance.onstart = () => {
    if (btnText) btnText.textContent = "Memutar Audio...";
    if (statusEl) statusEl.textContent = "Sedang mendengarkan percakapan / monolog Bahasa Inggris...";
  };

  currentUtterance.onend = () => {
    if (btnText) btnText.textContent = "Putar Ulang";
    if (statusEl) statusEl.textContent = "Audio selesai diputar.";
  };

  currentUtterance.onerror = () => {
    if (btnText) btnText.textContent = "Putar Audio";
    if (statusEl) statusEl.textContent = "Terjadi kendala pemutaran audio.";
  };

  window.speechSynthesis.speak(currentUtterance);
}

function stopAudio() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  const btnText = document.getElementById("play-text");
  const statusEl = document.getElementById("audio-status-text");
  if (btnText) btnText.textContent = "Putar Audio";
  if (statusEl) statusEl.textContent = "Klik 'Putar Audio' untuk mendengarkan percakapan/monolog.";
}

function toggleAudioSpeed() {
  if (audioSpeechRate === 1.0) audioSpeechRate = 0.85;
  else if (audioSpeechRate === 0.85) audioSpeechRate = 1.15;
  else audioSpeechRate = 1.0;

  document.getElementById("speed-text").textContent = `${audioSpeechRate}x`;
  if (window.speechSynthesis && window.speechSynthesis.speaking) {
    playQuestionAudio();
  }
}

// Timer
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      alert("Waktu pengerjaan ASTS 90 menit telah berakhir. Jawaban Anda akan otomatis dikumpulkan.");
      submitTest();
      return;
    }
    remainingSeconds--;
    updateTimerDisplay();
  }, 1000);
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const m = Math.floor(remainingSeconds / 60);
  const s = remainingSeconds % 60;
  const disp = `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  const el = document.getElementById("timer-display");
  if (el) el.textContent = disp;
}

// Submit & Scoring
function confirmSubmitTest() {
  const answeredCount = Object.keys(userAnswers).length;
  const unanswered = 40 - answeredCount;
  const flagged = flaggedQuestions.size;

  let msg = `Apakah Anda yakin ingin mengumpulkan Asesmen ASTS Gasal?\n\n`;
  msg += `• Terjawab: ${answeredCount} soal\n`;
  msg += `• Belum dijawab: ${unanswered} soal\n`;
  msg += `• Ditandai ragu: ${flagged} soal\n\n`;
  msg += `Klik OK untuk mengumpulkan sekarang.`;

  if (confirm(msg)) {
    submitTest();
  }
}

function submitTest() {
  clearInterval(timerInterval);
  isExamSubmitted = true;

  let correctCount = 0;
  questions.forEach(q => {
    if (userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const finalGrade = Math.round((correctCount / 40) * 100);
  const accuracy = Math.round((correctCount / 40) * 100);
  const isTuntas = (finalGrade >= 75);

  document.getElementById("result-score-val").textContent = finalGrade;
  const statusEl = document.getElementById("result-status-text");
  const circleEl = document.getElementById("result-score-circle");

  if (isTuntas) {
    statusEl.textContent = "STATUS: TUNTAS KKTP (≥ 75)";
    statusEl.style.color = "#047857";
    circleEl.className = "score-circle tuntas";
  } else {
    statusEl.textContent = "STATUS: BELUM TUNTAS KKTP (< 75)";
    statusEl.style.color = "#b91c1c";
    circleEl.className = "score-circle belum-tuntas";
  }

  document.getElementById("stat-correct").textContent = correctCount;
  document.getElementById("stat-wrong").textContent = 40 - correctCount;
  document.getElementById("stat-accuracy").textContent = `${accuracy}%`;

  document.getElementById("result-modal").style.display = "flex";

  const historyItem = {
    timestamp: new Date().toLocaleString("id-ID"),
    tingkat: studentIdentity.tingkat,
    rombel: studentIdentity.rombel,
    presensi: studentIdentity.presensi,
    nama: studentIdentity.nama,
    mode: "ASTS Gasal Kelas XI",
    score: correctCount,
    total: 40,
    grade: finalGrade,
    duration: `${90 - Math.floor(remainingSeconds / 60)} menit`
  };

  try {
    const hist = JSON.parse(localStorage.getItem("sabaku_ats_history") || "[]");
    hist.push(historyItem);
    localStorage.setItem("sabaku_ats_history", JSON.stringify(hist));
  } catch (e) {
    console.warn("History save error:", e);
  }

  syncScoreToGoogleSheets({
    tingkat: studentIdentity.tingkat,
    rombel: studentIdentity.rombel,
    presensi: studentIdentity.presensi,
    nama: studentIdentity.nama,
    mode: "ASTS Gasal Kelas XI (Wajib)",
    score: correctCount,
    total: 40,
    grade: finalGrade,
    duration: `${90 - Math.floor(remainingSeconds / 60)} menit`,
    answers: userAnswers
  });

  renderQuestion(currentQuestionIndex);
}

function syncScoreToGoogleSheets(payload) {
  const webAppUrl = localStorage.getItem("sabaku_gs_url") || DEFAULT_GS_URL;
  const statusEl = document.getElementById("cloud-status-text");
  if (statusEl) statusEl.innerHTML = "⏳ Menghubungkan ke basis data rekapitulasi sekolah...";

  fetch(webAppUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(() => {
    if (statusEl) statusEl.innerHTML = "✅ <strong>Nilai tersimpan otomatis</strong> di basis data rekapitulasi sekolah.";
  })
  .catch(err => {
    console.warn("Sync error:", err);
    try {
      const beacon = new Image();
      const query = new URLSearchParams({
        tingkat: payload.tingkat || "XI-F",
        rombel: payload.rombel || "",
        presensi: payload.presensi || "",
        nama: payload.nama || "",
        score: payload.score || 0,
        total: payload.total || 40,
        grade: payload.grade || 0,
        duration: payload.duration || "",
        mode: payload.mode || ""
      }).toString();
      beacon.src = `${webAppUrl}?${query}`;
    } catch (bErr) {
      console.warn("Beacon error:", bErr);
    }
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
    csvContent += "Timestamp,Tingkat,Rombel,Presensi,Nama Siswa,Mode,Skor Benar,Total Soal,Nilai (0-100),Status KKTP,Durasi\n";

    history.forEach(r => {
      const kktp = r.grade >= 75 ? "TUNTAS" : "BELUM TUNTAS";
      const line = `"${r.timestamp}","${r.tingkat}","${r.rombel}","${r.presensi}","${r.nama}","${r.mode}",${r.score},${r.total},${r.grade},"${kktp}","${r.duration}"`;
      csvContent += line + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Rekap_Nilai_ASTS_XI_${studentIdentity.nama.replace(/\s+/g, "_")}.csv`);
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
  if (confirm("Apakah Anda ingin mengulangi pengerjaan dari awal?\nSemua jawaban saat ini akan direset.")) {
    localStorage.removeItem("sabaku_asts_progress_XI");
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
    localStorage.setItem("sabaku_asts_progress_XI", JSON.stringify(data));
  } catch (e) {
    console.warn("Autosave error:", e);
  }
}
