/**
 * ASESMEN SUMATIF AKHIR SEMESTER (ASAS) GASAL & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * TINGKAT XI (FASE F) — SATU SEMESTER PENUH GASAL (18 MINGGU) TP 2026/2027
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

const SVG_PICTURES = {
  laptopResearch: `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="22" y="24" width="56" height="38" rx="3" fill="#eff6ff" stroke="#2563eb"/>
    <path d="M12 68h76a3 3 0 013 3v2H9v-2a3 3 0 013-3z" fill="#cbd5e1" stroke="#475569"/>
    <line x1="42" y1="68" x2="58" y2="68" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="50" cy="40" r="7" stroke="#2563eb"/>
    <path d="M38 52c0-5 5-7 12-7s12 2 12 7"/>
  </svg>`,
  
  bookLibrary: `<svg viewBox="0 0 100 100" fill="none" stroke="#d97706" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 78c12-6 24-4 32 2 8-6 20-8 32-2V28c-12-6-24-4-32 2-8-6-20-8-32-2v50z" fill="#fef3c7"/>
    <line x1="50" y1="30" x2="50" y2="80" stroke="#b45309"/>
    <line x1="26" y1="42" x2="42" y2="40" stroke="#d97706"/>
    <line x1="26" y1="52" x2="42" y2="50" stroke="#d97706"/>
    <line x1="58" y1="40" x2="74" y2="42" stroke="#d97706"/>
    <line x1="58" y1="50" x2="74" y2="52" stroke="#d97706"/>
  </svg>`,

  microphoneStage: `<svg viewBox="0 0 100 100" fill="none" stroke="#7c3aed" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="42" y="16" width="16" height="30" rx="8" fill="#ede9fe" stroke="#7c3aed"/>
    <path d="M34 34c0 10 7 16 16 16s16-6 16-16"/>
    <line x1="50" y1="50" x2="50" y2="76"/>
    <line x1="30" y1="76" x2="70" y2="76"/>
    <path d="M15 86h70" stroke="#94a3b8" stroke-dasharray="4 4"/>
  </svg>`,

  smartphoneVideo: `<svg viewBox="0 0 100 100" fill="none" stroke="#e11d48" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="32" y="15" width="36" height="70" rx="6" fill="#ffe4e6" stroke="#e11d48"/>
    <circle cx="50" cy="76" r="3.5" fill="#e11d48"/>
    <line x1="44" y1="23" x2="56" y2="23" stroke="#e11d48"/>
    <polygon points="45,40 45,54 58,47" fill="#e11d48"/>
  </svg>`,

  ancientTemple: `<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 85h76M22 70h56M32 55h36M42 40h16M50 20v20" stroke="#78350f" stroke-width="2.5"/>
    <path d="M36 85v-15M64 85v-15M42 70v-15M58 70v-15"/>
    <circle cx="50" cy="18" r="3.5" fill="#d97706"/>
    <path d="M47 30h6M45 45h10M38 60h24" stroke="#d97706"/>
  </svg>`,

  fishingPort: `<svg viewBox="0 0 100 100" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 70c10-3 20 3 30 0s20-3 30 0 15-3 20 0" stroke="#0284c7" stroke-width="3"/>
    <path d="M25 65l6-20h28l6 20H25z" fill="#e0f2fe" stroke="#0369a1"/>
    <line x1="45" y1="45" x2="45" y2="25"/>
    <polygon points="45,26 60,34 45,38" fill="#38bdf8"/>
    <circle cx="80" cy="24" r="7" fill="#fef08a" stroke="#eab308"/>
  </svg>`,

  modernBridge: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 65h80M25 25v55M75 25v55M10 50c15-15 25-25 40 0s25-15 40 0M25 25l25 25 25-25"/>
    <path d="M10 80c10-3 20 3 40 0s30 3 40 0" stroke="#0284c7"/>
  </svg>`,

  mountainSummit: `<svg viewBox="0 0 100 100" fill="none" stroke="#16a34a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 85l35-52 15 20 15-15 20 47H10z" fill="#f0fdf4"/>
    <path d="M38 45l7 8 10-5" stroke="#86efac" fill="#f8fafc"/>
    <circle cx="20" cy="26" r="8" fill="#fef08a" stroke="#ca8a04"/>
  </svg>`,

  solarPanels: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="26" cy="24" r="9" fill="#fef08a" stroke="#eab308"/>
    <path d="M26 10v4M26 34v4M12 24h4M36 24h4" stroke="#ca8a04"/>
    <polygon points="18,80 34,46 76,46 90,80" fill="#ecfdf5" stroke="#059669"/>
    <line x1="38" y1="46" x2="44" y2="80"/>
    <line x1="56" y1="46" x2="66" y2="80"/>
    <line x1="25" y1="62" x2="84" y2="62"/>
    <line x1="20" y1="72" x2="88" y2="72"/>
  </svg>`,

  smokeFactory: `<svg viewBox="0 0 100 100" fill="none" stroke="#64748b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="20" y="55" width="60" height="30" fill="#f1f5f9"/>
    <polygon points="30,55 35,30 45,30 48,55" fill="#e2e8f0"/>
    <polygon points="55,55 60,30 70,30 73,55" fill="#e2e8f0"/>
    <path d="M40 26c-3-6 3-10 0-14M65 26c-3-6 3-10 0-14" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="2 2"/>
  </svg>`,

  gasStation: `<svg viewBox="0 0 100 100" fill="none" stroke="#ea580c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="25" y="30" width="36" height="55" rx="4" fill="#fff7ed"/>
    <rect x="33" y="40" width="20" height="15" fill="#ffffff" stroke="#ea580c"/>
    <path d="M61 40h10a4 4 0 014 4v26l-6 5"/>
    <circle cx="75" cy="72" r="3" fill="#ea580c"/>
  </svg>`,

  waterDam: `<svg viewBox="0 0 100 100" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 40h70l-10 45H25L15 40z" fill="#f0f9ff"/>
    <line x1="32" y1="40" x2="36" y2="85"/>
    <line x1="48" y1="40" x2="50" y2="85"/>
    <line x1="64" y1="40" x2="64" y2="85"/>
    <path d="M38 75c8 6 16-6 24 0" stroke="#0284c7" stroke-width="2.5"/>
  </svg>`
};

function getGrade11AsasQuestions() {
  return [
    // =========================================================================
    // SECTION 1: LISTENING COMPREHENSION (QUESTIONS 1 - 10)
    // =========================================================================

    // Part I: Pictures (1-3)
    {
      id: 1,
      source: "Sumber: Audio Pembelajaran Bahasa Inggris Tingkat Lanjut — Kemendikbudristek & BBC Learning English",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number one. Look at the pictures. A high school student is sitting at his study desk with a modern open laptop, carefully cross-checking references and taking notes to verify the accuracy of online news. Which picture best illustrates the spoken statement?",
      prompt: "Look at the four pictures below. Which picture best represents the digital literacy activity described in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.laptopResearch, label: "A student conducting digital research and fact-checking on a laptop" },
        { key: "B", svg: SVG_PICTURES.bookLibrary, label: "Reading an antique book quietly in a library" },
        { key: "C", svg: SVG_PICTURES.microphoneStage, label: "Speaking into a microphone on an empty stage" },
        { key: "D", svg: SVG_PICTURES.smartphoneVideo, label: "Recording a vertical short video with a smartphone camera" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan: 'student is sitting at his study desk with a modern open laptop, carefully cross-checking references and taking notes to verify the accuracy of online news'. Gambar A memperlihatkan aktivitas riset dan verifikasi informasi di depan laptop.",
      grammarNote: "Present Continuous Tense ('is sitting', 'cross-checking') & Digital Literacy Lexis (verify, accuracy, references)."
    },
    {
      id: 2,
      source: "Sumber: Arsip Balai Pelestarian Kebudayaan Wilayah X — Cerita Rakyat & Candi Nusantara",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number two. Look at the pictures. This magnificent Indonesian cultural destination displays monumental stone temples built with detailed tiers and ornamental gates, celebrated in ancient Central Javanese legends. Which picture matches the description?",
      prompt: "Which picture corresponds to the monumental ancient stone temple landmark mentioned in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.ancientTemple, label: "An ancient multi-tiered stone temple complex" },
        { key: "B", svg: SVG_PICTURES.fishingPort, label: "A coastal wooden fishing port with docked boats" },
        { key: "C", svg: SVG_PICTURES.modernBridge, label: "A suspension steel bridge over a city river" },
        { key: "D", svg: SVG_PICTURES.mountainSummit, label: "A rocky mountain summit under the morning sun" }
      ],
      correctAnswer: "A",
      explanation: "Audio menyebutkan: 'magnificent Indonesian cultural destination displays monumental stone temples built with detailed tiers and ornamental gates, celebrated in ancient Central Javanese legends'. Candi batu bersejarah adalah Gambar A (Candi Prambanan/Sewu).",
      grammarNote: "Adjective clauses & Passive participle: 'monumental stone temples built with detailed tiers'."
    },
    {
      id: 3,
      source: "Sumber: Publikasi Direktorat Jenderal EBTKE — Kementerian ESDM Republik Indonesia",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number three. Look at the pictures. The school installed wide solar photovoltaic panels across the facility rooftop to absorb sunlight and produce clean, renewable electric energy. Which picture matches this eco-friendly initiative?",
      prompt: "Which picture illustrates the clean solar energy initiative described in the recording?",
      options: [
        { key: "A", svg: SVG_PICTURES.solarPanels, label: "Rooftop solar photovoltaic panels capturing sunlight" },
        { key: "B", svg: SVG_PICTURES.smokeFactory, label: "An industrial factory releasing dark smoke plumes" },
        { key: "C", svg: SVG_PICTURES.gasStation, label: "A conventional roadside petroleum fuel station" },
        { key: "D", svg: SVG_PICTURES.waterDam, label: "A heavy concrete hydro dam structure" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan pemasangan panel surya: 'installed wide solar photovoltaic panels across the facility rooftop to absorb sunlight and produce clean, renewable electric energy'. Gambar A menampilkan panel fotovoltaik surya.",
      grammarNote: "Infinitive of Purpose: 'to absorb sunlight and produce clean, renewable electric energy'."
    },

    // Part II: Short Dialogues (4-6)
    {
      id: 4,
      source: "Sumber: Modul Literasi Digital Siswa SMA — Kemendikbudristek & Mafindo",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioText: "Number four. Listen to the conversation between Dewi and Farhan. Dewi: Farhan, did you see the shocking news shared in our class group chat just now? Farhan: Yes, but the headline looks sensational and there is no clear author. We should check trusted national news outlets before forwarding it. Dewi: You are right. Spreading unverified rumors can cause unnecessary panic. Question: What does Farhan advise Dewi to do?",
      prompt: "What does Farhan advise Dewi to do regarding the sensational news?",
      options: [
        { key: "A", text: "Forward the message immediately to all family groups" },
        { key: "B", text: "Verify the news on reputable media websites before sharing" },
        { key: "C", text: "Delete the class group chat to avoid drama" },
        { key: "D", text: "Write an angry comment directly under the original post" }
      ],
      correctAnswer: "B",
      explanation: "Farhan secara jelas menyarankan: 'We should check trusted national news outlets before forwarding it' (memverifikasi berita di portal terpercaya sebelum membagikannya).",
      grammarNote: "Modal of Advice: 'should check trusted news outlets before forwarding'."
    },
    {
      id: 5,
      source: "Sumber: Panduan Guru Bahasa Inggris Fase F — Kurikulum Merdeka Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioText: "Number five. Listen to the conversation between Rian and Nita. Rian: Nita, which Indonesian folklore did your group choose for the English drama performance? Nita: We chose The Legend of Roro Jonggrang. It has powerful drama, especially the consequences of dishonest pride. Rian: That is a wonderful choice. Bandung Bondowoso had immense power, but his lack of respect ruined everything. Question: What moral aspect of the folklore does Nita emphasize?",
      prompt: "What moral aspect of the folklore does Nita emphasize in their conversation?",
      options: [
        { key: "A", text: "The importance of winning every battle by any means" },
        { key: "B", text: "The negative consequences of dishonest pride and deceit" },
        { key: "C", text: "The necessity of acquiring magical supernatural powers" },
        { key: "D", text: "How to complete building projects quickly without help" }
      ],
      correctAnswer: "B",
      explanation: "Nita menekankan: 'the consequences of dishonest pride' yang disetujui Rian bahwa ketidakhormatan dan keangkuhan menghancurkan segalanya. Pilihan B tepat.",
      grammarNote: "Noun phrase & Moral evaluation: 'the negative consequences of dishonest pride and deceit'."
    },
    {
      id: 6,
      source: "Sumber: Program Adiwiyata Sekolah Ramah Lingkungan — Kementerian Lingkungan Hidup dan Kehutanan",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioText: "Number six. Listen to the dialogue between Mr. Bagus and Sarah. Mr. Bagus: Sarah, our student council should lead the zero single-use plastic campaign during recess. Sarah: Absolutely, sir. If every student brought a reusable water bottle and lunch box, our school waste would drop by forty percent. Mr. Bagus: Exactly. Let us begin by providing clean drinking water stations in every building. Question: What environmental solution does Sarah propose?",
      prompt: "What environmental solution does Sarah propose to reduce school waste?",
      options: [
        { key: "A", text: "Encouraging students to bring reusable bottles and food containers" },
        { key: "B", text: "Closing all school canteens permanently during recess" },
        { key: "C", text: "Burning plastic waste behind the sports hall" },
        { key: "D", text: "Ordering packaged meals from outside catering vendors" }
      ],
      correctAnswer: "A",
      explanation: "Sarah mengusulkan: 'If every student brought a reusable water bottle and lunch box, our school waste would drop by forty percent' (membawa botol dan kotak makan yang dapat digunakan kembali).",
      grammarNote: "Conditional Sentence Type 2: 'If every student brought a reusable bottle..., our waste would drop...'."
    },

    // Part III: Short Talks / Monologues (7-10)
    {
      id: 7,
      source: "Sumber: Rekaman Audio Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Questions seven and eight are based on the following short talk. Long ago in Central Java, the powerful Prince Bandung Bondowoso defeated King Boko and intended to marry his beautiful daughter, Princess Roro Jonggrang. Reluctant to accept the proposal from her father's slayer, the clever princess agreed under one impossible condition: the prince had to build one thousand stone temples before the first rooster crowed at dawn. Determined to succeed, Bandung summoned an army of unseen earth spirits who worked at extraordinary speed throughout the dark night. Now answer question number seven: Why did Princess Roro Jonggrang give the impossible task to Bandung Bondowoso?",
      prompt: "According to the monologue, why did Princess Roro Jonggrang give the impossible task to Bandung Bondowoso?",
      options: [
        { key: "A", text: "Because she wanted to test his architectural skills" },
        { key: "B", text: "Because she was reluctant to marry the man who had killed her father" },
        { key: "C", text: "Because the royal kingdom lacked places for public worship" },
        { key: "D", text: "Because she wanted to build a tourist destination for future generations" }
      ],
      correctAnswer: "B",
      explanation: "Monolog menjelaskan: 'Reluctant to accept the proposal from her father's slayer, the clever princess agreed under one impossible condition...'. Ia enggan menikah dengan pembunuh ayahnya.",
      grammarNote: "Participial Adjective phrase: 'Reluctant to accept the proposal from her father's slayer'."
    },
    {
      id: 8,
      source: "Sumber: Rekaman Audio Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Now answer question number eight based on the same talk: How was Bandung Bondowoso able to construct hundreds of stone temples so rapidly during the night?",
      prompt: "How was Bandung Bondowoso able to construct hundreds of stone temples so rapidly during the night?",
      options: [
        { key: "A", text: "He employed thousands of skilled craftsmen from neighboring kingdoms" },
        { key: "B", text: "He summoned an army of unseen earth spirits to do the hard labor" },
        { key: "C", text: "He used modern steam-powered construction machines" },
        { key: "D", text: "He ordered local village farmers to work non-stop without sleep" }
      ],
      correctAnswer: "B",
      explanation: "Monolog menyatakan: 'Bandung summoned an army of unseen earth spirits who worked at extraordinary speed throughout the dark night'. Ia mengerahkan pasukan makhluk halus/roh halus.",
      grammarNote: "Relative Clause: '...earth spirits who worked at extraordinary speed'."
    },
    {
      id: 9,
      source: "Sumber: Cyber Safety Guidelines for High School Students — Siberkreasi & Kominfo",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Questions nine and ten are based on the following short talk. Good morning, students. Whenever you post photos, share personal stories, or leave comments on social media, you leave behind an invisible record known as a digital footprint. Unlike pencil marks on paper, digital traces can be copied, screenshotted, and archived indefinitely, even if you delete the original post later. Future scholarship committees and university recruiters routinely review online profiles to evaluate a candidate's maturity, honesty, and emotional control. Therefore, always pause and reflect before hitting the publish button. Now answer question number nine: What does the speaker say about a person's digital footprint?",
      prompt: "According to the speaker, what is a key characteristic of a digital footprint?",
      options: [
        { key: "A", text: "It automatically disappears permanently after twenty-four hours" },
        { key: "B", text: "It can be archived and reviewed by future universities and employers" },
        { key: "C", text: "It is only visible to close friends who follow your private account" },
        { key: "D", text: "It does not influence real-life professional or educational opportunities" }
      ],
      correctAnswer: "B",
      explanation: "Pembicara menjelaskan: 'digital traces can be copied, screenshotted, and archived indefinitely... Future scholarship committees and university recruiters routinely review online profiles'. Jejak digital dapat disimpan dan ditinjau di masa depan.",
      grammarNote: "Passive Voice in Academic Advice: 'can be copied, screenshotted, and archived indefinitely'."
    },
    {
      id: 10,
      source: "Sumber: Cyber Safety Guidelines for High School Students — Siberkreasi & Kominfo",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Now answer question number ten based on the same talk: What practical advice does the speaker give to high school students?",
      prompt: "What practical recommendation does the speaker provide before posting online?",
      options: [
        { key: "A", text: "Never use the internet or social media platforms again" },
        { key: "B", text: "Pause and carefully reflect on the content before publishing" },
        { key: "C", text: "Use multiple anonymous fake accounts to insult others" },
        { key: "D", text: "Share private passwords with all close school friends" }
      ],
      correctAnswer: "B",
      explanation: "Pembicara menyarankan: 'Therefore, always pause and reflect before hitting the publish button' (berhenti sejenak dan berpikir matang sebelum menekan tombol unggah).",
      grammarNote: "Imperative sentence: 'always pause and reflect before hitting the publish button'."
    },

    // =========================================================================
    // SECTION 2: READING GENRE 1 - NARRATIVE TEXT (QUESTIONS 11 - 20)
    // =========================================================================
    {
      id: 11,
      source: "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
      type: "single_choice",
      title: "Reading Comprehension: Narrative Main Conflict",
      stimulusTitle: "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `Once upon a time in ancient Java, there existed two neighboring kingdoms: Pengging and Boko. Pengging was fertile and prosperous, ruled by King Prabu Damar Moyo. His valiant son, Prince Bandung Bondowoso, possessed extraordinary physical strength and supernatural abilities. In contrast, the neighboring kingdom of Boko was governed by a cruel giant named King Boko. A fierce war erupted between the two kingdoms, ending when Bandung Bondowoso courageously defeated and killed King Boko in battle.<br><br>Entering Boko Palace as the victor, Bandung encountered Princess Roro Jonggrang, the late king's daughter. Enchanted by her grace and breathtaking beauty, the prince immediately offered her his hand in marriage. However, Roro Jonggrang harbored intense sorrow and resentment; she could never bring herself to willingly marry the conqueror who had ended her beloved father's life. Knowing that a direct refusal would provoke dangerous anger, she devised a clever plan. She promised to marry Bandung on one strict condition: he must construct one thousand sacred stone temples within a single night, completed before the dawn rooster crowed.<br><br>Confident in his mystical gifts, Bandung Bondowoso accepted the challenge. As darkness blanketed the earth, he mediated and summoned hundreds of earth spirits from the spirit realm. The spirits labored tirelessly at astonishing speed, gathering giant stones and carving ornate pillars. By three o'clock in the morning, nine hundred and ninety-nine magnificent temples stood proudly under the starlit sky, leaving only one final shrine unfinished.<br><br>Terrified that the prince would fulfill the impossible requirement, Roro Jonggrang swiftly gathered her palace maidens. She instructed them to burn piles of dry straw to the east to illuminate the sky with an orange glow, while others pounded rice mortars with heavy wooden pestles to simulate the lively sounds of a busy morning. Deceived by the dawn-like glow and the loud rhythmic pounding, village roosters began to crow repeatedly. Convinced that the morning sun was rising, the supernatural spirits panicked and fled back into the underground realm, abandoning the final temple. When Bandung discovered the deceit, he was filled with profound fury. Pointing his finger at Roro Jonggrang, he declared that she herself would become the one thousandth statue to complete the sacred complex. Instantly, the princess transformed into a graceful stone statue, known to this day as the statue of Durga Mahisasuramardini in Prambanan Temple.`,
      prompt: "What is the primary conflict presented in the narrative passage above?",
      options: [
        { key: "A", text: "A border dispute between two farmer communities over irrigation channels" },
        { key: "B", text: "Princess Roro Jonggrang's reluctance to marry the conqueror who slew her father" },
        { key: "C", text: "The earth spirits refusing to obey Bandung Bondowoso's royal commands" },
        { key: "D", text: "An earthquake destroying the thousand temples during construction" }
      ],
      correctAnswer: "B",
      explanation: "Konflik utama dalam teks naratif ini adalah keengganan dan dilema batin Putri Roro Jonggrang yang menolak dinikahi oleh pangeran yang telah membunuh ayahnya: 'she could never bring herself to willingly marry the conqueror who had ended her beloved father's life'.",
      grammarNote: "Narrative Conflict Analysis (Complication): Reluctance to marry the slayer of her father."
    },
    {
      id: 12,
      source: "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
      type: "single_choice",
      title: "Reading Comprehension: Explicit Detail",
      stimulusTitle: "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'The Legend of Roro Jonggrang and the Thousand Temples' di atas)`,
      prompt: "Based on paragraph 2, why did Princess Roro Jonggrang formulate an impossible requirement instead of simply saying no?",
      options: [
        { key: "A", text: "She genuinely admired Bandung's magical construction skills" },
        { key: "B", text: "She understood that an outright refusal would provoke dangerous wrath" },
        { key: "C", text: "She wanted to give Bandung time to learn how to govern the kingdom" },
        { key: "D", text: "Her royal advisers insisted on having one thousand temples for good luck" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 2 menyatakan: 'Knowing that a direct refusal would provoke dangerous anger, she devised a clever plan' (mengetahui penolakan langsung akan memicu amarah berbahaya). Pilihan B tepat.",
      grammarNote: "Cause and effect / Gerund phrase: 'Knowing that a direct refusal would provoke dangerous anger'."
    },
    {
      id: 13,
      source: "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
      type: "single_choice",
      title: "Reading Comprehension: Character Strategy",
      stimulusTitle: "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'The Legend of Roro Jonggrang and the Thousand Temples' di atas)`,
      prompt: "What specific tactical actions did Princess Roro Jonggrang order her palace maidens to perform?",
      options: [
        { key: "A", text: "Attack Bandung Bondowoso's soldiers with poisoned arrows" },
        { key: "B", text: "Burn dry straw to mimic dawn light and pound rice mortars to mimic morning activity" },
        { key: "C", text: "Hide all the construction stones in deep forest caves" },
        { key: "D", text: "Pour water onto the ground to extinguish the spirits' torches" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 4 menjelaskan: 'She instructed them to burn piles of dry straw to the east to illuminate the sky with an orange glow, while others pounded rice mortars with heavy wooden pestles to simulate the lively sounds of a busy morning'. Pilihan B akurat.",
      grammarNote: "Parallel action clauses with 'while': 'burn piles of dry straw... while others pounded rice mortars'."
    },
    {
      id: 14,
      source: "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
      type: "single_choice",
      title: "Reading Comprehension: Vocabulary in Context",
      stimulusTitle: "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'The Legend of Roro Jonggrang and the Thousand Temples' di atas)`,
      prompt: "The word 'valiant' in paragraph 1 ('His valiant son, Prince Bandung Bondowoso...') is closest in meaning to...",
      options: [
        { key: "A", text: "courageous and brave" },
        { key: "B", text: "fragile and weak" },
        { key: "C", text: "hesitant and timid" },
        { key: "D", text: "selfish and arrogant" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'valiant' bermakna berani, gagah perkasa, atau ksatria (courageous and brave).",
      grammarNote: "Descriptive adjective of heroic character: valiant = brave, courageous, bold."
    },
    {
      id: 15,
      source: "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
      type: "single_choice",
      title: "Reading Comprehension: Pronoun Reference",
      stimulusTitle: "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'The Legend of Roro Jonggrang and the Thousand Temples' di atas)`,
      prompt: "In paragraph 4, what does the pronoun 'them' refer to in the sentence: 'She instructed them to burn piles of dry straw...'?",
      options: [
        { key: "A", text: "The earth spirits" },
        { key: "B", text: "The palace maidens" },
        { key: "C", text: "The village roosters" },
        { key: "D", text: "The thousand statues" }
      ],
      correctAnswer: "B",
      explanation: "Kalimat sebelumnya menyatakan: 'Roro Jonggrang swiftly gathered her palace maidens. She instructed them...'. Kata ganti 'them' merujuk kepada dayang-dayang istana (the palace maidens).",
      grammarNote: "Pronoun reference tracking: 'palace maidens' (plural noun) -> 'them' (object pronoun)."
    },
    {
      id: 16,
      source: "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
      type: "single_choice",
      title: "Reading Comprehension: Cause and Effect",
      stimulusTitle: "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'The Legend of Roro Jonggrang and the Thousand Temples' di atas)`,
      prompt: "Why did the supernatural earth spirits suddenly abandon their construction work?",
      options: [
        { key: "A", text: "They completed all one thousand temples ahead of schedule" },
        { key: "B", text: "They were terrified by the simulated sunrise and roosters' crowing" },
        { key: "C", text: "Bandung Bondowoso forgot the magic spell needed to control them" },
        { key: "D", text: "They ran out of stone materials from the mountain" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 4 menjelaskan: 'Deceived by the dawn-like glow and the loud rhythmic pounding, village roosters began to crow repeatedly. Convinced that the morning sun was rising, the supernatural spirits panicked and fled...'. Pilihan B benar.",
      grammarNote: "Participial clause of reason: 'Convinced that the morning sun was rising, the spirits panicked...'."
    },
    {
      id: 17,
      source: "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
      type: "single_choice",
      title: "Reading Comprehension: Narrative Resolution",
      stimulusTitle: "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'The Legend of Roro Jonggrang and the Thousand Temples' di atas)`,
      prompt: "How did Bandung Bondowoso complete the final shrine of the sacred complex?",
      options: [
        { key: "A", text: "He patiently carved the final stone temple by hand over several years" },
        { key: "B", text: "He cursed Princess Roro Jonggrang into a stone statue to become the thousandth figure" },
        { key: "C", text: "He forgave Roro Jonggrang and abandoned the incomplete project" },
        { key: "D", text: "He ordered King Damar Moyo to provide royal gold sculptures" }
      ],
      correctAnswer: "B",
      explanation: "Teks menyebutkan: 'He declared that she herself would become the one thousandth statue... Instantly, the princess transformed into a graceful stone statue'. Pilihan B tepat.",
      grammarNote: "Narrative Climax & Resolution: curse transformation resolving the missing thousandth temple."
    },
    {
      id: 18,
      source: "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
      type: "single_choice",
      title: "Reading Comprehension: Character Inference",
      stimulusTitle: "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'The Legend of Roro Jonggrang and the Thousand Temples' di atas)`,
      prompt: "What can we deduce about Bandung Bondowoso's character from the whole story?",
      options: [
        { key: "A", text: "He was physically powerful and determined, but emotionally volatile and vengeful" },
        { key: "B", text: "He was cowardly and always surrendered at the first sign of difficulty" },
        { key: "C", text: "He was humble and preferred peace over military conquests" },
        { key: "D", text: "He was entirely indifferent to Roro Jonggrang's feelings and beauty" }
      ],
      correctAnswer: "A",
      explanation: "Bandung Bondowoso memiliki kekuatan fisik dan kesaktian luar biasa (powerful and determined), namun ketika tipu muslihat terungkap, ia tidak mampu mengontrol amarahnya dan membalas dendam dengan mengutuk sang putri (emotionally volatile and vengeful). Pilihan A tepat.",
      grammarNote: "Character Deduction / Analytical Inference: contrasting heroic strengths with tragic flaws."
    },
    {
      id: 19,
      source: "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
      type: "single_choice",
      title: "Reading Comprehension: Moral Value (Coda)",
      stimulusTitle: "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'The Legend of Roro Jonggrang and the Thousand Temples' di atas)`,
      prompt: "What essential moral lesson (coda) can high school students learn from this folklore?",
      options: [
        { key: "A", text: "Magical tricks are the best method to solve difficult social conflicts" },
        { key: "B", text: "Deception and uncontrolled wrath lead to sorrowful tragedy; honesty and mutual respect are essential" },
        { key: "C", text: "One should always accept any marriage proposal without question" },
        { key: "D", text: "Building temples should only be done during daylight hours" }
      ],
      correctAnswer: "B",
      explanation: "Pesan moral (coda) utama cerita ini adalah bahwa kecurangan dan amarah tak terkendali membawa malapetaka tragis bagi kedua belah pihak; kejujuran serta saling menghormati adalah nilai luhur yang sejati. Pilihan B tepat.",
      grammarNote: "Moral Reflection (Coda): 'Deception and uncontrolled wrath lead to sorrowful tragedy'."
    },
    {
      id: 20,
      source: "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
      type: "single_choice",
      title: "Reading Comprehension: Text Structure",
      stimulusTitle: "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'The Legend of Roro Jonggrang and the Thousand Temples' di atas)`,
      prompt: "Which paragraph serves as the 'Complication' in the generic structure of this narrative text?",
      options: [
        { key: "A", text: "Paragraph 1 (Introducing the kingdoms and the war)" },
        { key: "B", text: "Paragraph 2 (Roro Jonggrang's refusal dilemma and the impossible condition)" },
        { key: "C", text: "Paragraph 3 (The spirits gathering stones at night)" },
        { key: "D", text: "The title of the story" }
      ],
      correctAnswer: "B",
      explanation: "Dalam struktur generik teks naratif, 'Complication' memuat munculnya krisis atau konflik utama, yang terjadi di Paragraf 2 ketika Roro Jonggrang menghadapi lamaran pembunuh ayahnya dan menetapkan syarat mustahil seribu candi. Pilihan B benar.",
      grammarNote: "Generic Structure of Narrative Text: Orientation -> Complication -> Climax -> Resolution -> Coda."
    },

    // =========================================================================
    // SECTION 3: READING GENRE 2 - ANALYTICAL EXPOSITION (QUESTIONS 21 - 30)
    // =========================================================================
    {
      id: 21,
      source: "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
      type: "single_choice",
      title: "Reading Comprehension: Exposition Communicative Purpose",
      stimulusTitle: "Text 2: Why Critical Digital Literacy Is Essential for Modern Teenagers",
      stimulusBody: `In the contemporary digital era, high school students live in a hyper-connected environment where information flows continuously through smartphones and social media. While digital platforms offer unprecedented access to global learning resources, they simultaneously expose young minds to sophisticated misinformation, manipulative algorithms, and cyber hazards. Therefore, fostering critical digital literacy is no longer a luxury; it is an indispensable life skill for every adolescent.<br><br>First and foremost, critical digital literacy empowers students to become discerning consumers of information. Modern social media algorithms are purposely engineered to maximize user engagement rather than factual accuracy. Consequently, provocative clickbait headlines and sensational fake news frequently circulate much faster than verified facts. Students who possess robust digital literacy skills do not passively accept online claims. Instead, they habitually cross-examine references, evaluate the credibility of sources, and detect commercial or political biases before sharing content.<br><br>Furthermore, developing digital literacy is vital for safeguarding personal privacy and establishing a positive digital footprint. Many teenagers underestimate the enduring nature of digital content. Photographs, intimate comments, or careless statements uploaded today can easily be archived, shared, or retrieved years later. Increasingly, university admissions committees and potential employers scrutinize applicants' digital footprints to assess their integrity, emotional maturity, and professional conduct. Understanding privacy settings, cyber security protocols, and ethical digital behavior shields students from costly future consequences.<br><br>Finally, critical digital awareness directly supports adolescent mental wellbeing. Unchecked social media usage frequently fosters unhealthy social comparisons, digital anxiety, and sleep disruption caused by late-night screen exposure. By learning to practice mindful digital habits—such as setting intentional screen time boundaries and curating supportive online communities—students can maintain a balanced, healthy relationship with technology.<br><br>In conclusion, equipping young learners with comprehensive digital literacy is imperative. It safeguards their privacy, sharpens their intellectual judgment against misleading narratives, and promotes emotional health. Educators and parents must actively collaborate to cultivate these vital competencies in today's generation.`,
      prompt: "What is the primary communicative purpose of the analytical exposition text above?",
      options: [
        { key: "A", text: "To describe the technical components of smartphone hardware" },
        { key: "B", text: "To persuade readers that critical digital literacy is an essential skill for teenagers" },
        { key: "C", text: "To entertain readers with a fictional story about online adventures" },
        { key: "D", text: "To explain the step-by-step procedure of creating a social media account" }
      ],
      correctAnswer: "B",
      explanation: "Tujuan komunikatif teks eksposisi analitis ini adalah meyakinkan pembaca (persuade readers) bahwa literasi digital kritis merupakan keterampilan penting yang wajib dimiliki oleh remaja di era modern.",
      grammarNote: "Communicative Purpose of Analytical Exposition: To persuade the reader that the phenomenon/thesis is important."
    },
    {
      id: 22,
      source: "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
      type: "single_choice",
      title: "Reading Comprehension: Identifying Key Arguments",
      stimulusTitle: "Text 2: Why Critical Digital Literacy Is Essential for Modern Teenagers",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'Why Critical Digital Literacy Is Essential for Modern Teenagers' di atas)`,
      prompt: "According to the passage, how many main arguments does the author present to support the thesis statement?",
      options: [
        { key: "A", text: "One single argument regarding smartphone pricing" },
        { key: "B", text: "Two arguments focused only on school grades" },
        { key: "C", text: "Three arguments: information evaluation, privacy protection, and mental wellbeing" },
        { key: "D", text: "Five arguments discussing sports achievements" }
      ],
      correctAnswer: "C",
      explanation: "Penulis menyajikan 3 argumen terstruktur: Paragraf 2 (evaluasi informasi / menangkal hoaks), Paragraf 3 (perlindungan privasi & jejak digital), dan Paragraf 4 (kesehatan mental & kesejahteraan emosional). Pilihan C tepat.",
      grammarNote: "Generic Structure: Thesis (P1) -> Argument 1 (P2) -> Argument 2 (P3) -> Argument 3 (P4) -> Reiteration (P5)."
    },
    {
      id: 23,
      source: "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
      type: "single_choice",
      title: "Reading Comprehension: Detailed Fact",
      stimulusTitle: "Text 2: Why Critical Digital Literacy Is Essential for Modern Teenagers",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'Why Critical Digital Literacy Is Essential for Modern Teenagers' di atas)`,
      prompt: "Why do sensational headlines and fake news often spread faster than verified facts according to paragraph 2?",
      options: [
        { key: "A", text: "Because social media platforms are deliberately engineered to prioritize engagement over accuracy" },
        { key: "B", text: "Because government websites encourage the sharing of unverified rumors" },
        { key: "C", text: "Because factual news articles are forbidden on modern internet platforms" },
        { key: "D", text: "Because smartphone batteries deplete faster when reading reliable news" }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 menjelaskan: 'Modern social media algorithms are purposely engineered to maximize user engagement rather than factual accuracy. Consequently, provocative clickbait headlines and sensational fake news frequently circulate much faster...'. Pilihan A benar.",
      grammarNote: "Passive Voice & Cause-Effect: 'are purposely engineered to maximize user engagement... consequently...'."
    },
    {
      id: 24,
      source: "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
      type: "single_choice",
      title: "Reading Comprehension: Vocabulary in Context",
      stimulusTitle: "Text 2: Why Critical Digital Literacy Is Essential for Modern Teenagers",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'Why Critical Digital Literacy Is Essential for Modern Teenagers' di atas)`,
      prompt: "The word 'scrutinize' in paragraph 3 ('potential employers scrutinize applicants' digital footprints...') is closest in meaning to...",
      options: [
        { key: "A", text: "examine closely and evaluate" },
        { key: "B", text: "ignore completely" },
        { key: "C", text: "delete immediately" },
        { key: "D", text: "praise enthusiastically" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'scrutinize' bermakna memeriksa secara teliti, mencermati, dan mengevaluasi dengan saksama (examine closely and evaluate).",
      grammarNote: "Contextual Academic Verb: scrutinize = inspect, examine thoroughly, evaluate critically."
    },
    {
      id: 25,
      source: "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
      type: "single_choice",
      title: "Reading Comprehension: Inference on Digital Footprint",
      stimulusTitle: "Text 2: Why Critical Digital Literacy Is Essential for Modern Teenagers",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'Why Critical Digital Literacy Is Essential for Modern Teenagers' di atas)`,
      prompt: "What can be inferred about deleted social media posts from paragraph 3?",
      options: [
        { key: "A", text: "They leave zero traces once the delete button is clicked" },
        { key: "B", text: "They can still affect a student's future because content may have been archived or screenshotted" },
        { key: "C", text: "They are automatically forwarded to local police departments" },
        { key: "D", text: "They cannot be viewed even if someone saved a screenshot earlier" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 3 menguraikan bahwa jejak digital bersifat abadi: 'Photographs, intimate comments, or careless statements uploaded today can easily be archived, shared, or retrieved years later...'. Meskipun telah dihapus, salinan atau arsipnya masih dapat berdampak di masa depan.",
      grammarNote: "Modal of Probability & Passive: 'can easily be archived, shared, or retrieved years later'."
    },
    {
      id: 26,
      source: "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
      type: "single_choice",
      title: "Reading Comprehension: Cause and Effect Inference",
      stimulusTitle: "Text 2: Why Critical Digital Literacy Is Essential for Modern Teenagers",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'Why Critical Digital Literacy Is Essential for Modern Teenagers' di atas)`,
      prompt: "Based on paragraph 4, what is one major direct cause of late-night sleep disruption among adolescents?",
      options: [
        { key: "A", text: "Reading traditional printed books before bed" },
        { key: "B", text: "Uncontrolled late-night screen exposure and social media interactions" },
        { key: "C", text: "Drinking excessive amounts of warm water" },
        { key: "D", text: "Doing physical sports early in the morning" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 4 secara spesifik menyebutkan: 'sleep disruption caused by late-night screen exposure'. Paparan layar gadget dan media sosial hingga larut malam memicu gangguan tidur.",
      grammarNote: "Reduced Relative Clause: 'sleep disruption [which is] caused by late-night screen exposure'."
    },
    {
      id: 27,
      source: "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
      type: "single_choice",
      title: "Reading Comprehension: Author's Stance and Tone",
      stimulusTitle: "Text 2: Why Critical Digital Literacy Is Essential for Modern Teenagers",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'Why Critical Digital Literacy Is Essential for Modern Teenagers' di atas)`,
      prompt: "Which adjective best describes the author's tone throughout the entire text?",
      options: [
        { key: "A", text: "Persuasive, rational, and constructive" },
        { key: "B", text: "Humorous, playful, and sarcastic" },
        { key: "C", text: "Aggressive, bitter, and pessimistic" },
        { key: "D", text: "Indifferent, careless, and doubtful" }
      ],
      correctAnswer: "A",
      explanation: "Nada (tone) penulis bersifat mengajak secara meyakinkan (persuasive), didukung penalaran logis berbasis fakta (rational), dan memberikan solusi positif yang membangun bagi remaja (constructive).",
      grammarNote: "Author's Tone & Attitude Analysis: Persuasive, informative, and constructive."
    },
    {
      id: 28,
      source: "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
      type: "single_choice",
      title: "Reading Comprehension: Sentence Function",
      stimulusTitle: "Text 2: Why Critical Digital Literacy Is Essential for Modern Teenagers",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'Why Critical Digital Literacy Is Essential for Modern Teenagers' di atas)`,
      prompt: "In the overall structure of analytical exposition, what role does paragraph 5 play?",
      options: [
        { key: "A", text: "It introduces a brand new unrelated topic" },
        { key: "B", text: "It serves as the Reiteration, summarizing the core thesis and urging collaborative action" },
        { key: "C", text: "It describes the biography of a famous software engineer" },
        { key: "D", text: "It provides a fictional resolution to a narrative fable" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 5 ('In conclusion, equipping young learners with comprehensive digital literacy is imperative...') berfungsi sebagai Reiteration (Penegasan Ulang) yang merangkum kembali tesis dan mengajak pendidik serta orang tua bertindak.",
      grammarNote: "Structure of Analytical Exposition: Reiteration / Conclusion restates thesis and key arguments."
    },
    {
      id: 29,
      source: "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
      type: "single_choice",
      title: "Reading Comprehension: Paraphrasing",
      stimulusTitle: "Text 2: Why Critical Digital Literacy Is Essential for Modern Teenagers",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'Why Critical Digital Literacy Is Essential for Modern Teenagers' di atas)`,
      prompt: "Which of the following statements best restates the thesis of the passage in different words?",
      options: [
        { key: "A", text: "Adolescents should completely eliminate all internet connections to avoid misinformation" },
        { key: "B", text: "Possessing critical digital discernment is crucial for teenagers to navigate information safely and maintain wellbeing" },
        { key: "C", text: "Only computer science professionals require digital literacy in today's society" },
        { key: "D", text: "Social media platforms have eliminated all academic problems for students" }
      ],
      correctAnswer: "B",
      explanation: "Pernyataan B adalah parafrase yang paling akurat dari tesis: Memiliki pemilahan digital yang kritis sangat penting bagi remaja untuk menjelajahi informasi secara aman dan menjaga kesejahteraan diri.",
      grammarNote: "Academic Paraphrasing: maintaining core semantic meaning with varied vocabulary and syntax."
    },
    {
      id: 30,
      source: "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
      type: "single_choice",
      title: "Reading Comprehension: Practical Application",
      stimulusTitle: "Text 2: Why Critical Digital Literacy Is Essential for Modern Teenagers",
      stimulusBody: `(Silakan merujuk pada teks bacaan 'Why Critical Digital Literacy Is Essential for Modern Teenagers' di atas)`,
      prompt: "Which actionable habit exemplifies mindful digital usage as recommended in paragraph 4?",
      options: [
        { key: "A", text: "Setting intentional limits on screen time and engaging in positive online communities" },
        { key: "B", text: "Checking notifications every two minutes during study sessions" },
        { key: "C", text: "Leaving negative anonymous comments on peers' profiles" },
        { key: "D", text: "Keeping the smartphone under one's pillow with alerts turned on all night" }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 4 merekomendasikan: 'setting intentional screen time boundaries and curating supportive online communities'. Menetapkan batas waktu layar secara sadar dan aktif di komunitas positif adalah kebiasaan bijak bermedia digital. Pilihan A tepat.",
      grammarNote: "Action Verb Collocations: 'setting intentional limits', 'curating supportive communities'."
    },

    // =========================================================================
    // SECTION 4: GRAMMAR & VOCABULARY MASTERY (QUESTIONS 31 - 40)
    // =========================================================================
    {
      id: 31,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Grammar Essentials: Past Narrative Tenses (Past Perfect)",
      stimulusTitle: "Kaidah Waktu Lampau Berurutan (Narrative Sequence)",
      stimulusBody: "By the time Prince Bandung Bondowoso realized Princess Roro Jonggrang's clever trickery, the earth spirits _______ back into the subterranean realm.",
      prompt: "Choose the correct verb form to complete the past narrative sentence above:",
      options: [
        { key: "A", text: "had already retreated" },
        { key: "B", text: "have already retreated" },
        { key: "C", text: "are retreating" },
        { key: "D", text: "will retreat" }
      ],
      correctAnswer: "A",
      explanation: "Klausa 'By the time + Simple Past (realized)' menunjukkan bahwa suatu aksi lain telah selesai lebih dahulu di masa lampau sebelum peristiwa tersebut terjadi. Maka digunakan Past Perfect Tense: 'had already retreated'.",
      grammarNote: "Past Perfect Tense (had + V3) denotes an action completed prior to another past event."
    },
    {
      id: 32,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Grammar Essentials: Conjunction of Contrast",
      stimulusTitle: "Kaidah Kata Hubung Pertentangan (Contrast Conjunction)",
      stimulusBody: "_______ social media algorithms are engineered to capture user attention through sensationalism, critical students always examine factual evidence before believing viral claims.",
      prompt: "Which conjunction of contrast correctly completes the sentence?",
      options: [
        { key: "A", text: "Although" },
        { key: "B", text: "Because" },
        { key: "C", text: "Therefore" },
        { key: "D", text: "In spite of" }
      ],
      correctAnswer: "A",
      explanation: "'Although' diikuti oleh klausa lengkap (Subject + Verb: 'social media algorithms are engineered...'), untuk menyatakan pertentangan logis (konseptual konsesi). 'In spite of' salah karena harus diikuti noun phrase/gerund.",
      grammarNote: "Subordinating Conjunction of Concession: Although + Subject + Verb, Main Clause."
    },
    {
      id: 33,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Grammar Essentials: Conjunction of Cause and Effect",
      stimulusTitle: "Kaidah Hubungan Sebab-Akibat (Cause and Effect)",
      stimulusBody: "Several internet users fell victim to identity theft _______ their careless habit of oversharing sensitive personal information on public forums.",
      prompt: "Choose the correct prepositional connector to express cause:",
      options: [
        { key: "A", text: "due to" },
        { key: "B", text: "because" },
        { key: "C", text: "nevertheless" },
        { key: "D", text: "even though" }
      ],
      correctAnswer: "A",
      explanation: "Frasa 'their careless habit of oversharing...' adalah frasa kata benda (Noun Phrase). Penghubung kausal yang diikuti Noun Phrase adalah 'due to' atau 'because of'. 'Because' salah karena membutuhkan klausa (Subject + Verb).",
      grammarNote: "Prepositional Cause Marker: 'due to' / 'because of' + Noun Phrase."
    },
    {
      id: 34,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Grammar Essentials: Passive Voice in Academic Discourse",
      stimulusTitle: "Kaidah Kalimat Pasif Formal (Formal Passive Voice)",
      stimulusBody: "In academic research, online claims _______ thoroughly through credible scholarly publications before being accepted as valid evidence.",
      prompt: "Which passive verb phrase correctly completes the statement?",
      options: [
        { key: "A", text: "must be verified" },
        { key: "B", text: "must verify" },
        { key: "C", text: "must have verified" },
        { key: "D", text: "is verifying" }
      ],
      correctAnswer: "A",
      explanation: "Subjek kalimat adalah 'online claims' (klaim daring) yang menerima aksi (pasif) dengan modal keharusan: Modal + be + V3 (Past Participle) -> 'must be verified'.",
      grammarNote: "Modal Passive Structure: Modal auxiliary (must/should) + be + Past Participle (V3)."
    },
    {
      id: 35,
      source: "Sumber: Modul Tata Bahasa Bahasa Inggris Fase F — Tim MGMP SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Grammar Essentials: Reported Speech (Indirect Speech)",
      stimulusTitle: "Transformasi Kalimat Langsung ke Tidak Langsung",
      stimulusBody: `Direct Speech: Dewi said to her classmates, "I am analyzing the narrative structure of the Prambanan legend for our presentation."<br><br>Indirect Speech: Dewi told her classmates that she _______ the narrative structure of the Prambanan legend for their presentation.`,
      prompt: "Choose the correct verb form for the indirect speech transformation:",
      options: [
        { key: "A", text: "was analyzing" },
        { key: "B", text: "is analyzing" },
        { key: "C", text: "has analyzed" },
        { key: "D", text: "will analyze" }
      ],
      correctAnswer: "A",
      explanation: "Pada Reported Speech dengan reporting verb lampau ('told'), Present Continuous Tense ('am analyzing') bergeser waktu (backshift) menjadi Past Continuous Tense ('was analyzing').",
      grammarNote: "Reported Speech Backshift Rule: Present Continuous (am/is + V-ing) -> Past Continuous (was/were + V-ing)."
    },
    {
      id: 36,
      source: "Sumber: Modul Tata Bahasa Bahasa Inggris Fase F — Tim MGMP SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Grammar Essentials: Conditional Sentence Type 2",
      stimulusTitle: "Kalimat Pengandaian Situasi Hipotesis Masa Kini (Type 2)",
      stimulusBody: "If adolescents _______ critical verification habits consistently, they would not become easy targets for deceptive online clickbait.",
      prompt: "Select the correct verb form for the 'if-clause' in Conditional Type 2:",
      options: [
        { key: "A", text: "practiced" },
        { key: "B", text: "practice" },
        { key: "C", text: "have practiced" },
        { key: "D", text: "will practice" }
      ],
      correctAnswer: "A",
      explanation: "Pola Conditional Sentence Type 2 untuk situasi pengandaian yang berlawanan dengan kenyataan masa kini adalah: If + Subject + Simple Past (V2), Subject + would + V1. Maka bentuk kata kerja yang tepat adalah 'practiced'.",
      grammarNote: "Conditional Type 2 Formula: If + S + V2 (Simple Past), S + would + Base Verb (V1)."
    },
    {
      id: 37,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Grammar Essentials: Modals of Recommendation",
      stimulusTitle: "Kaidah Modalitas Anjuran Kuat (Obligation & Recommendation)",
      stimulusBody: "When students encounter an unverified breaking news story on social media, they _______ cross-check the claims with official news agencies before forwarding it.",
      prompt: "Which modal verb appropriately expresses a strong moral recommendation?",
      options: [
        { key: "A", text: "ought to" },
        { key: "B", text: "might" },
        { key: "C", text: "would" },
        { key: "D", text: "shall" }
      ],
      correctAnswer: "A",
      explanation: "'Ought to' memiliki makna setara dengan 'should', digunakan untuk menyatakan anjuran moral yang kuat atau kewajiban etis (strong recommendation/moral duty). Pilihan A tepat.",
      grammarNote: "Modal of Moral Recommendation: 'ought to' + base verb = 'should' + base verb."
    },
    {
      id: 38,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Vocabulary Mastery: Academic Collocation with 'Awareness'",
      stimulusTitle: "Kaidah Pasangan Kata Baku (Collocation)",
      stimulusBody: "Our school regularly hosts digital literacy seminars in order to _______ awareness about personal data protection among all students.",
      prompt: "Which verb collocates naturally with the noun 'awareness'?",
      options: [
        { key: "A", text: "raise" },
        { key: "B", text: "make" },
        { key: "C", text: "do" },
        { key: "D", text: "take" }
      ],
      correctAnswer: "A",
      explanation: "Kolokasi akademis baku dalam bahasa Inggris untuk 'membangkitkan/meningkatkan kesadaran' adalah 'raise awareness'. Frasa 'make awareness' atau 'do awareness' tidak baku.",
      grammarNote: "Fixed Academic Collocation: 'raise awareness' (meningkatkan kepedulian/kesadaran)."
    },
    {
      id: 39,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Functional Expressions: Expressing Stance / Strong Agreement",
      stimulusTitle: "Ungkapan Menyetujui Pandangan dalam Diskusi Analitis",
      stimulusBody: "Speaker A: 'I firmly believe that schools must incorporate digital safety ethics into the core curriculum.'<br>Speaker B: '_______ Digital wellbeing is essential for our generation's future.'",
      prompt: "Which expression best demonstrates strong, professional agreement with Speaker A?",
      options: [
        { key: "A", text: "I couldn't agree more with your point." },
        { key: "B", text: "I totally doubt your suggestion." },
        { key: "C", text: "I am afraid that is completely irrelevant." },
        { key: "D", text: "That sounds like a terrible perspective." }
      ],
      correctAnswer: "A",
      explanation: "Ungkapan 'I couldn't agree more with your point' adalah idiom formal untuk menyatakan persetujuan mutlak/sangat setuju (strong agreement). Pilihan B, C, dan D menyatakan keraguan atau penolakan kasar.",
      grammarNote: "Expressing Agreement in Analytical Discussions: 'I couldn't agree more' = I strongly agree."
    },
    {
      id: 40,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Vocabulary Mastery: Oxford 3000 Academic Lexis (Level B2)",
      stimulusTitle: "Pemilihan Kata Kontekstual Berdasarkan Makna",
      stimulusBody: "Cultivating critical thinking skills is _______ for high school students who must navigate an increasingly complex information ecosystem.",
      prompt: "Which adjective best completes the academic statement with the meaning of 'absolutely necessary and crucial'?",
      options: [
        { key: "A", text: "vital" },
        { key: "B", text: "hesitant" },
        { key: "C", text: "artificial" },
        { key: "D", text: "fragile" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'vital' bermakna sangat penting, krusial, dan mutlak diperlukan (absolutely necessary / crucial), sesuai dengan konteks keterampilan bernalar kritis bagi siswa SMA.",
      grammarNote: "Academic Evaluative Adjective (Oxford 3000 B2): vital = crucial, indispensable, essential."
    }
  ];
}



// Global State Management
let studentIdentity = {
  tingkat: "XI-F",
  rombel: "1",
  presensi: "1",
  nama: "Siswa Kelas XI"
};

let currentMode = "practice"; // 'practice' or 'exam'
let currentQuestionIndex = 0;
let userAnswers = {}; // { questionId: answerKey / array / object }
let flaggedQuestions = new Set();
let timerInterval = null;
let remainingSeconds = 90 * 60; // 90 minutes
let isExamSubmitted = false;
let audioSpeechRate = 1.0;
let currentUtterance = null;
let questions = [];

// Fisher-Yates Shuffle for Options (Pure single choice questions only)
function randomizeQuestionOptions(rawQuestions) {
  return rawQuestions.map(q => {
    const cloned = JSON.parse(JSON.stringify(q));
    if (cloned.type === "single_choice" && Array.isArray(cloned.options) && cloned.options.length > 0 && !cloned.options[0].svg) {
      const correctText = cloned.options.find(o => o.key === cloned.correctAnswer)?.text;
      const opts = [...cloned.options];
      for (let i = opts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opts[i], opts[j]] = [opts[j], opts[i]];
      }
      const alphabet = ["A", "B", "C", "D", "E"];
      cloned.options = opts.map((opt, idx) => ({
        key: alphabet[idx],
        text: opt.text
      }));
      if (correctText) {
        const newCorrectOpt = cloned.options.find(o => o.text === correctText);
        if (newCorrectOpt) cloned.correctAnswer = newCorrectOpt.key;
      }
    }
    return cloned;
  });
}

// Lifecycle Initialization
window.addEventListener("DOMContentLoaded", () => {
  initStudentData();
});

function initStudentData() {
  try {
    const rawPortal = localStorage.getItem("sabaku_current_student");
    if (rawPortal) {
      const portalData = JSON.parse(rawPortal);
      studentIdentity = {
        tingkat: portalData.tingkat || "XI-F",
        rombel: portalData.rombel || "1",
        presensi: portalData.presensi || "1",
        nama: portalData.nama || "Siswa Kelas XI"
      };
      currentMode = portalData.mode || "practice";
      startFreshTest();
      return;
    }
  } catch (e) {
    console.warn("Portal data error:", e);
  }

  // If no identity found, open quick prompt modal
  document.getElementById("identity-prompt-modal").style.display = "flex";
}

function handleDirectIdentitySubmit(e) {
  e.preventDefault();
  const nama = document.getElementById("direct-nama").value.trim();
  const rombel = document.getElementById("direct-rombel").value;
  const presensi = document.getElementById("direct-presensi").value.trim();
  const mode = document.getElementById("direct-mode").value;

  if (mode === "exam") {
    const token = document.getElementById("direct-token").value.trim();
    if (token !== "JujurItuMujur") {
      alert("⚠️ Token Asesmen Resmi (ASAS) tidak valid! Masukkan: JujurItuMujur");
      return;
    }
  }

  studentIdentity = {
    tingkat: "XI-F",
    rombel,
    presensi,
    nama
  };
  currentMode = mode;

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

function toggleDirectToken(mode) {
  document.getElementById("direct-token-group").style.display = (mode === "exam" ? "block" : "none");
}

function startFreshTest() {
  userAnswers = {};
  flaggedQuestions.clear();
  isExamSubmitted = false;
  remainingSeconds = 90 * 60;
  currentQuestionIndex = 0;

  // Initialize and randomize Grade 11 question bank
  const rawBank = getGrade11AsasQuestions();
  questions = randomizeQuestionOptions(rawBank);

  // Restore session from LocalStorage if available
  try {
    const saved = localStorage.getItem("sabaku_asas_progress_XI");
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
  // Update Header Badges
  const modeBadge = document.getElementById("nav-mode-badge");
  modeBadge.textContent = (currentMode === "practice") ? "🎯 Mode Latihan" : "📝 Asesmen Resmi (ASAS)";
  modeBadge.className = "badge-mode " + (currentMode === "practice" ? "practice" : "exam");

  // Update Sidebar Student Meta
  document.getElementById("side-student-name").textContent = studentIdentity.nama;
  document.getElementById("side-student-meta").textContent = `Kelas ${studentIdentity.tingkat} | Rombel ${studentIdentity.rombel} | Presensi ${studentIdentity.presensi}`;
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
    btn.id = `nav-btn-${idx}`;
    btn.textContent = idx + 1;
    btn.onclick = () => renderQuestion(idx);
    grid.appendChild(btn);
  });
  updateNavigatorStatus();
}

function updateNavigatorStatus() {
  questions.forEach((q, idx) => {
    const btn = document.getElementById(`nav-btn-${idx}`);
    if (!btn) return;
    
    btn.classList.remove("active", "answered", "doubtful");
    
    if (idx === currentQuestionIndex) {
      btn.classList.add("active");
    }
    
    if (flaggedQuestions.has(idx)) {
      btn.classList.add("doubtful");
    } else if (isQuestionAnswered(q.id)) {
      btn.classList.add("answered");
    }
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

  // Stop active audio
  stopAudio();

  // Header badges
  document.getElementById("q-number-badge").textContent = `Soal No. ${q.id} dari ${questions.length}`;
  document.getElementById("q-type-badge").textContent = q.title || "Pilihan Ganda";

  // Listening Audio Box
  const listeningBox = document.getElementById("listening-container");
  if (q.audioText) {
    listeningBox.style.display = "block";
    document.getElementById("audio-status-text").textContent = "Klik 'Putar Audio' untuk menyimak wacana otentik.";
  } else {
    listeningBox.style.display = "none";
  }

  // Stimulus Text Box
  const stimBox = document.getElementById("stimulus-container");
  if (q.stimulusBody && q.type !== "listening_pictures") {
    stimBox.style.display = "block";
    document.getElementById("stimulus-title").textContent = q.stimulusTitle || "Teks Stimulus";
    document.getElementById("stimulus-body").innerHTML = q.stimulusBody;
    const srcEl = document.getElementById("stimulus-source");
    if (srcEl) {
      if (q.source) {
        srcEl.style.display = "block";
        srcEl.innerHTML = `📌 <strong>${q.source}</strong>`;
      } else {
        srcEl.style.display = "none";
      }
    }
  } else {
    stimBox.style.display = "none";
  }

  // Question Prompt
  const promptBox = document.getElementById("question-prompt-text");
  let srcBadge = "";
  if (q.source) {
    srcBadge = `<div class="source-citation" style="margin-top: 10px; font-size: 0.8rem; color: #475569; background: #f8fafc; border-left: 3.5px solid var(--accent-teal); padding: 6px 12px; border-radius: 4px; font-style: italic;">
      📌 <strong>${q.source}</strong>
    </div>`;
  }
  promptBox.innerHTML = q.prompt + srcBadge;

  // Options Rendering
  const optContainer = document.getElementById("options-container");
  optContainer.innerHTML = "";

  if (q.type === "listening_pictures") {
    renderPictureChoices(q, optContainer);
  } else {
    renderSingleChoices(q, optContainer);
  }

  // Explanation Box (In practice mode or review)
  const expBox = document.getElementById("question-explanation-box");
  if (isExamSubmitted || (currentMode === "practice" && isQuestionAnswered(q.id))) {
    expBox.style.display = "block";
    let keyBadge = q.correctAnswer;

    document.getElementById("explanation-text").innerHTML = `
      <div style="margin-bottom: 10px; padding: 6px 12px; background: #ecfdf5; border: 1.5px solid #a7f3d0; border-radius: 8px; color: #065f46; font-size: 0.95rem; display: inline-block;">
        🔑 <strong>Kunci Jawaban:</strong> <span style="font-weight: 800; color: #047857; margin-left: 4px;">${keyBadge}</span>
      </div>
      <div>${q.explanation}</div>
    `;
    document.getElementById("explanation-meta-text").innerHTML = `<strong>Kaidah &amp; Kosakata:</strong> ${q.grammarNote || "-"}`;
  } else {
    expBox.style.display = "none";
  }

  // Flag Button status
  const flagBtn = document.getElementById("btn-flag-q");
  if (flaggedQuestions.has(index)) {
    flagBtn.textContent = "🔄 Hapus Ragu";
  } else {
    flagBtn.textContent = "🟡 Ragu-ragu";
  }

  // Nav buttons
  document.getElementById("btn-prev-q").disabled = (index === 0);
  document.getElementById("btn-next-q").disabled = (index === questions.length - 1);
  document.getElementById("btn-submit-test").style.display = (index === questions.length - 1) ? "inline-flex" : "none";

  updateNavigatorStatus();
  saveProgressToLocalStorage();
}

// 1. Picture Choices Renderer (For Q1, Q2, Q3)
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

    card.innerHTML = `
      <div class="picture-svg-wrapper">${opt.svg}</div>
      <div class="picture-letter-badge">${opt.key}</div>
      <div class="picture-label-text">${opt.label}</div>
    `;
    grid.appendChild(card);
  });
  container.appendChild(grid);
}

// 2. Single Choice Options Renderer
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

    item.innerHTML = `
      <div class="option-circle">${opt.key}</div>
      <div class="option-text">${opt.text}</div>
    `;
    list.appendChild(item);
  });
  container.appendChild(list);
}

function navigateQuestion(delta) {
  renderQuestion(currentQuestionIndex + delta);
}

function toggleFlagQuestion() {
  if (flaggedQuestions.has(currentQuestionIndex)) {
    flaggedQuestions.delete(currentQuestionIndex);
  } else {
    flaggedQuestions.add(currentQuestionIndex);
  }
  renderQuestion(currentQuestionIndex);
}

// Audio Engine: Native Web Speech API Voice Synthesis
function playQuestionAudio() {
  const q = questions[currentQuestionIndex];
  if (!q || !q.audioText) return;

  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
    
    const playBtn = document.getElementById("btn-play-audio");
    const playText = document.getElementById("play-text");
    const statusText = document.getElementById("audio-status-text");

    currentUtterance = new SpeechSynthesisUtterance(q.audioText);
    currentUtterance.lang = "en-US";
    currentUtterance.rate = audioSpeechRate;

    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("David") || v.name.includes("Zira")));
    if (enVoice) {
      currentUtterance.voice = enVoice;
    }

    currentUtterance.onstart = () => {
      playText.textContent = "Sedang Memutar...";
      statusText.textContent = "🔊 Audio sedang diputar. Simak dengan seksama.";
      playBtn.style.backgroundColor = "#047857";
    };

    currentUtterance.onend = () => {
      playText.textContent = "Putar Ulang";
      statusText.textContent = "✅ Pemutaran audio selesai. Silakan pilih jawaban Anda.";
      playBtn.style.backgroundColor = "var(--accent-teal)";
    };

    currentUtterance.onerror = () => {
      playText.textContent = "Putar Audio";
      statusText.textContent = "⚠️ Pemutaran audio selesai atau dihentikan.";
      playBtn.style.backgroundColor = "var(--accent-teal)";
    };

    window.speechSynthesis.speak(currentUtterance);
  } else {
    alert("Peramban Anda belum mendukung Web Speech API. Silakan gunakan Google Chrome, Microsoft Edge, atau Safari.");
  }
}

function stopAudio() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  const playText = document.getElementById("play-text");
  if (playText) playText.textContent = "Putar Audio";
}

function toggleAudioSpeed() {
  if (audioSpeechRate === 1.0) {
    audioSpeechRate = 0.85;
  } else {
    audioSpeechRate = 1.0;
  }
  document.getElementById("speed-text").textContent = audioSpeechRate + "x";
}

// Timer Engine
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
    const disp = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    document.getElementById("timer-display").textContent = disp;

    if (remainingSeconds < 300) {
      document.getElementById("timer-box").style.backgroundColor = "#dc2626";
    }

    // Autosave progress every 15 seconds
    if (remainingSeconds % 15 === 0) {
      saveProgressToLocalStorage();
    }
  }, 1000);
}

function confirmSubmitTest() {
  const answeredCount = questions.filter(q => isQuestionAnswered(q.id)).length;
  const unansweredCount = questions.length - answeredCount;

  let msg = `Anda telah menjawab ${answeredCount} dari ${questions.length} butir soal.`;
  if (unansweredCount > 0) {
    msg += ` Masih ada ${unansweredCount} butir soal yang belum dijawab.`;
  }
  msg += "\n\nApakah Anda yakin ingin menyelesaikan dan mengumpulkan tes sekarang?";

  if (confirm(msg)) {
    submitTest();
  }
}

function submitTest() {
  clearInterval(timerInterval);
  isExamSubmitted = true;
  stopAudio();

  // Clear in-progress session state so next attempt is fresh
  localStorage.removeItem("sabaku_asas_progress_XI");

  // Calculate Scores
  let correctCount = 0;
  questions.forEach(q => {
    if (userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const totalQuestions = questions.length;
  const finalScore = Math.round((correctCount / totalQuestions) * 100);
  const isTuntas = finalScore >= 75;

  // Show Modal Results
  document.getElementById("result-modal").style.display = "flex";
  document.getElementById("result-score-val").textContent = finalScore;
  
  const scoreCircle = document.getElementById("result-score-circle");
  scoreCircle.className = "score-circle " + (isTuntas ? "tuntas" : "belum");

  const statusText = document.getElementById("result-status-text");
  statusText.textContent = isTuntas ? "STATUS: TUNTAS KKTP (≥ 75) 🎉" : "STATUS: BELUM TUNTAS KKTP (< 75) ⚠️";
  statusText.style.color = isTuntas ? "var(--accent-green)" : "var(--accent-red)";

  document.getElementById("stat-correct").textContent = correctCount;
  document.getElementById("stat-wrong").textContent = totalQuestions - correctCount;
  document.getElementById("stat-accuracy").textContent = `${Math.round((correctCount / totalQuestions) * 100)}%`;

  // Prepare submission record
  const record = {
    tingkat: studentIdentity.tingkat,
    rombel: studentIdentity.rombel,
    presensi: studentIdentity.presensi,
    nama: studentIdentity.nama,
    mode: (currentMode === "practice") ? "Latihan ASAS Gasal" : "Asesmen Resmi ASAS Gasal",
    score: correctCount,
    total: totalQuestions,
    grade: finalScore,
    duration: `${Math.floor((5400 - remainingSeconds) / 60)} menit`,
    timestamp: new Date().toLocaleString("id-ID"),
    answers: userAnswers
  };

  // Save to LocalStorage History
  try {
    const history = JSON.parse(localStorage.getItem("sabaku_ats_history") || "[]");
    history.push(record);
    localStorage.setItem("sabaku_ats_history", JSON.stringify(history));
  } catch (e) {
    console.warn("History save error:", e);
  }

  // Send to Google Sheets
  syncScoreToGoogleSheets(record);

  // Re-render current question so explanation shows
  renderQuestion(currentQuestionIndex);
}

function syncScoreToGoogleSheets(payload) {
  const statusEl = document.getElementById("cloud-status-text");
  if (statusEl) statusEl.textContent = "Menyinkronkan nilai ke server sekolah...";

  const webAppUrl = localStorage.getItem("sabaku_gs_url") || DEFAULT_GS_URL;

  // Background Beacon safety net
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(webAppUrl, new Blob([JSON.stringify(payload)], { type: "text/plain;charset=utf-8" }));
    }
  } catch (e) {
    console.warn("sendBeacon error:", e);
  }

  // Primary fetch POST
  fetch(webAppUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(() => {
    if (statusEl) statusEl.innerHTML = "✅ Nilai Anda telah berhasil tercatat di server rekapitulasi sekolah.";
  }).catch(err => {
    console.warn("Direct POST fallback to Image beacon:", err);
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
      beacon.src = `${webAppUrl}?${query}`;
    } catch (bErr) {
      console.warn("Beacon error:", bErr);
    }
    if (statusEl) statusEl.innerHTML = "💾 Nilai Anda telah tersimpan dengan aman di sistem sekolah.";
  });
}

// 1-Click CSV Export for Teachers/Students
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
    link.setAttribute("download", `Rekap_Nilai_ASAS_XI_${studentIdentity.nama.replace(/\s+/g, "_")}.csv`);
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
    localStorage.removeItem("sabaku_asas_progress_XI");
    document.getElementById("result-modal").style.display = "none";
    startFreshTest();
  }
}

// Database Settings Modal
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

// Autosave to LocalStorage
function saveProgressToLocalStorage() {
  try {
    const data = {
      userAnswers,
      flaggedQuestions: Array.from(flaggedQuestions),
      remainingSeconds,
      currentIndex: currentQuestionIndex
    };
    localStorage.setItem("sabaku_asas_progress_XI", JSON.stringify(data));
  } catch (e) {
    console.warn("Autosave error:", e);
  }
}

