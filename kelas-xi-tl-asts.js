/**
 * ASESMEN SUMATIF TENGAH SEMESTER GASAL (ASTS) & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT LANJUT — TINGKAT XI (FASE F - TL)
 * SEMESTER GASAL (18 MINGGU PENUH) TP 2026/2027
 * 
 * Komposisi Soal:
 * - 60% (24 Butir Soal) Diambil Langsung dari Bank Soal ASAS Gasal Kelas XI Tingkat Lanjut
 * - 40% (16 Butir Soal) Melengkapi Seluruh Materi Semester Gasal (Narrative, Hortatory, & Advanced Grammar)
 * 
 * Standar: Tes Kemampuan Akademik (TKA / AKM Literasi Tingkat Lanjut / UTBK SNBT)
 * Bebas Token / Password — Langsung Masuk Latihan & Asesmen
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";


const SVG_PICTURES = {
  digitalManuscript: `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="18" y="22" width="64" height="46" rx="4" fill="#eff6ff" stroke="#2563eb"/>
    <circle cx="50" cy="45" r="14" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3 3"/>
    <line x1="50" y1="36" x2="50" y2="54" stroke="#1d4ed8"/>
    <line x1="41" y1="45" x2="59" y2="45" stroke="#1d4ed8"/>
    <path d="M26 32h14M26 38h10M60 52h14M60 58h10" stroke="#93c5fd"/>
    <path d="M30 76l20-8 20 8" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="68" x2="50" y2="84" stroke="#475569" stroke-width="3"/>
  </svg>`,

  amphitheaterDrama: `<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 75c8-18 36-24 76 0" stroke="#78350f" stroke-width="3"/>
    <path d="M22 62c6-14 28-18 56 0" stroke="#b45309" stroke-dasharray="2 2"/>
    <polygon points="50,15 35,45 65,45" fill="#fef3c7" stroke="#d97706"/>
    <circle cx="50" cy="30" r="5" fill="#d97706"/>
    <path d="M38 48h24v20H38z" fill="#fef9c3" stroke="#ca8a04"/>
    <path d="M42 48v20M58 48v20" stroke="#b45309"/>
    <line x1="15" y1="84" x2="85" y2="84" stroke="#64748b"/>
  </svg>`,

  climateObservatory: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 85c15-8 30-14 70-4" stroke="#16a34a" stroke-width="3"/>
    <path d="M35 80V50c0-12 12-22 25-22s25 10 25 22v30H35z" fill="#ecfdf5" stroke="#059669"/>
    <path d="M50 28v-12M42 16h16" stroke="#047857" stroke-width="2"/>
    <circle cx="60" cy="46" r="6" fill="#fef08a" stroke="#ca8a04"/>
    <line x1="60" y1="40" x2="75" y2="28" stroke="#0284c7" stroke-width="2.5"/>
    <circle cx="75" cy="28" r="3" fill="#0284c7"/>
  </svg>`,

  oilRefinery: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="20" y="50" width="30" height="35" fill="#f1f5f9"/>
    <rect x="55" y="40" width="25" height="45" fill="#e2e8f0"/>
    <line x1="35" y1="50" x2="35" y2="25" stroke="#64748b" stroke-width="2.5"/>
    <line x1="68" y1="40" x2="68" y2="20" stroke="#64748b" stroke-width="2.5"/>
    <path d="M30 20c3-5 7-5 10 0M63 15c3-5 7-5 10 0" stroke="#94a3b8"/>
  </svg>`,
  agriculturalDrone: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="50" cy="50" rx="20" ry="10" fill="#f0fdf4" stroke="#059669"/>
    <line x1="30" y1="50" x2="16" y2="34" stroke="#047857" stroke-width="2.5"/>
    <line x1="70" y1="50" x2="84" y2="34" stroke="#047857" stroke-width="2.5"/>
    <line x1="30" y1="50" x2="16" y2="66" stroke="#047857" stroke-width="2.5"/>
    <line x1="70" y1="50" x2="84" y2="66" stroke="#047857" stroke-width="2.5"/>
    <circle cx="16" cy="34" r="7" stroke="#10b981" stroke-dasharray="2 2"/>
    <circle cx="84" cy="34" r="7" stroke="#10b981" stroke-dasharray="2 2"/>
    <circle cx="16" cy="66" r="7" stroke="#10b981" stroke-dasharray="2 2"/>
    <circle cx="84" cy="66" r="7" stroke="#10b981" stroke-dasharray="2 2"/>
    <circle cx="50" cy="50" r="4" fill="#047857"/>
    <path d="M10 85c15-4 35 2 50-2s20-6 30-4" stroke="#16a34a"/>
    <path d="M10 92c20-3 40 2 60-3s15-5 20-3" stroke="#15803d"/>
  </svg>`
};

function getGrade11TLAstsQuestions() {
  return [
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 1,
      source: "Sumber: Advanced English Academic Listening Series â€” Cambridge Assessment English & Kemendikbudristek",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number one. Look at the pictures. A university student of digital humanities is using high-resolution magnifying apparatus to examine an ancient illuminated manuscript, transcribing fragile ancient calligraphy onto her laptop screen. Which picture best illustrates the spoken statement?",
      prompt: "Which picture corresponds to the digital manuscript examination described in the recording?",
      options: [
        { key: "A", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="18" y="22" width="64" height="46" rx="4" fill="#eff6ff" stroke="#2563eb"/>
    <circle cx="50" cy="45" r="14" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3 3"/>
    <line x1="50" y1="36" x2="50" y2="54" stroke="#1d4ed8"/>
    <line x1="41" y1="45" x2="59" y2="45" stroke="#1d4ed8"/>
    <path d="M26 32h14M26 38h10M60 52h14M60 58h10" stroke="#93c5fd"/>
    <path d="M30 76l20-8 20 8" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="68" x2="50" y2="84" stroke="#475569" stroke-width="3"/>
  </svg>`, label: "Scholarly digital analysis of an illuminated manuscript" },
        { key: "B", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 75c8-18 36-24 76 0" stroke="#78350f" stroke-width="3"/>
    <path d="M22 62c6-14 28-18 56 0" stroke="#b45309" stroke-dasharray="2 2"/>
    <polygon points="50,15 35,45 65,45" fill="#fef3c7" stroke="#d97706"/>
    <circle cx="50" cy="30" r="5" fill="#d97706"/>
    <path d="M38 48h24v20H38z" fill="#fef9c3" stroke="#ca8a04"/>
    <path d="M42 48v20M58 48v20" stroke="#b45309"/>
    <line x1="15" y1="84" x2="85" y2="84" stroke="#64748b"/>
  </svg>`, label: "Dramatic theatrical performance in an open amphitheater" },
        { key: "C", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 85c15-8 30-14 70-4" stroke="#16a34a" stroke-width="3"/>
    <path d="M35 80V50c0-12 12-22 25-22s25 10 25 22v30H35z" fill="#ecfdf5" stroke="#059669"/>
    <path d="M50 28v-12M42 16h16" stroke="#047857" stroke-width="2"/>
    <circle cx="60" cy="46" r="6" fill="#fef08a" stroke="#ca8a04"/>
    <line x1="60" y1="40" x2="75" y2="28" stroke="#0284c7" stroke-width="2.5"/>
    <circle cx="75" cy="28" r="3" fill="#0284c7"/>
  </svg>`, label: "Coastal meteorological climate observatory" },
        { key: "D", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="20" y="50" width="30" height="35" fill="#f1f5f9"/>
    <rect x="55" y="40" width="25" height="45" fill="#e2e8f0"/>
    <line x1="35" y1="50" x2="35" y2="25" stroke="#64748b" stroke-width="2.5"/>
    <line x1="68" y1="40" x2="68" y2="20" stroke="#64748b" stroke-width="2.5"/>
    <path d="M30 20c3-5 7-5 10 0M63 15c3-5 7-5 10 0" stroke="#94a3b8"/>
  </svg>`, label: "Fossil fuel industrial refining facility" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan aktivitas akademis filologi digital: 'student of digital humanities is using high-resolution magnifying apparatus to examine an ancient illuminated manuscript'. Gambar A mencerminkan analisis naskah kuno beriluminasi.",
      grammarNote: "Participle Clauses & Academic Register: 'using high-resolution apparatus', 'transcribing fragile calligraphy'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 2,
      source: "Sumber: International Arts & Theatre Education Council â€” Journal of Literary Performance",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number two. Look at the pictures. In an open-air stone amphitheater surrounded by tiered seating, senior high school performers are staging a dramatic literary tragedy under focused spotlight illumination. Which picture matches the description?",
      prompt: "Which picture depicts the classical theatrical drama in the stone amphitheater described in the audio?",
      options: [
        { key: "A", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="18" y="22" width="64" height="46" rx="4" fill="#eff6ff" stroke="#2563eb"/>
    <circle cx="50" cy="45" r="14" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3 3"/>
    <line x1="50" y1="36" x2="50" y2="54" stroke="#1d4ed8"/>
    <line x1="41" y1="45" x2="59" y2="45" stroke="#1d4ed8"/>
    <path d="M26 32h14M26 38h10M60 52h14M60 58h10" stroke="#93c5fd"/>
    <path d="M30 76l20-8 20 8" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="68" x2="50" y2="84" stroke="#475569" stroke-width="3"/>
  </svg>`, label: "Scholarly digital analysis of an illuminated manuscript" },
        { key: "B", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 75c8-18 36-24 76 0" stroke="#78350f" stroke-width="3"/>
    <path d="M22 62c6-14 28-18 56 0" stroke="#b45309" stroke-dasharray="2 2"/>
    <polygon points="50,15 35,45 65,45" fill="#fef3c7" stroke="#d97706"/>
    <circle cx="50" cy="30" r="5" fill="#d97706"/>
    <path d="M38 48h24v20H38z" fill="#fef9c3" stroke="#ca8a04"/>
    <path d="M42 48v20M58 48v20" stroke="#b45309"/>
    <line x1="15" y1="84" x2="85" y2="84" stroke="#64748b"/>
  </svg>`, label: "Dramatic theatrical performance in an open amphitheater" },
        { key: "C", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 85c15-8 30-14 70-4" stroke="#16a34a" stroke-width="3"/>
    <path d="M35 80V50c0-12 12-22 25-22s25 10 25 22v30H35z" fill="#ecfdf5" stroke="#059669"/>
    <path d="M50 28v-12M42 16h16" stroke="#047857" stroke-width="2"/>
    <circle cx="60" cy="46" r="6" fill="#fef08a" stroke="#ca8a04"/>
    <line x1="60" y1="40" x2="75" y2="28" stroke="#0284c7" stroke-width="2.5"/>
    <circle cx="75" cy="28" r="3" fill="#0284c7"/>
  </svg>`, label: "Coastal meteorological climate observatory" },
        { key: "D", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="20" y="50" width="30" height="35" fill="#f1f5f9"/>
    <rect x="55" y="40" width="25" height="45" fill="#e2e8f0"/>
    <line x1="35" y1="50" x2="35" y2="25" stroke="#64748b" stroke-width="2.5"/>
    <line x1="68" y1="40" x2="68" y2="20" stroke="#64748b" stroke-width="2.5"/>
    <path d="M30 20c3-5 7-5 10 0M63 15c3-5 7-5 10 0" stroke="#94a3b8"/>
  </svg>`, label: "Fossil fuel industrial refining facility" }
      ],
      correctAnswer: "B",
      explanation: "Audio menyebutkan pementasan drama sastra klasik: 'In an open-air stone amphitheater surrounded by tiered seating, senior high school performers are staging a dramatic literary tragedy'. Gambar B tepat.",
      grammarNote: "Prepositional Phrase of Place: 'In an open-air stone amphitheater surrounded by tiered seating'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 3,
      source: "Sumber: Advanced English Academic Listening Series — Cambridge Assessment English & Kemendikbudristek",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number three. Look at the pictures. An autonomous agricultural drone with multi-directional rotors is hovering steadily above lush terraced hillside crops, capturing infrared thermal imagery to monitor real-time crop hydration and pest infestation. Which picture best corresponds to the spoken description?",
      prompt: "Which picture corresponds to the agricultural drone monitoring terraced hillside crops described in the recording?",
      options: [
        { key: "A", svg: SVG_PICTURES.agriculturalDrone, label: "Autonomous agricultural drone scanning terraced hillside fields" },
        { key: "B", svg: SVG_PICTURES.amphitheaterDrama, label: "Dramatic theatrical performance in an open amphitheater" },
        { key: "C", svg: SVG_PICTURES.climateObservatory, label: "Coastal meteorological climate observatory" },
        { key: "D", svg: SVG_PICTURES.oilRefinery, label: "Fossil fuel industrial refining facility" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan drone pertanian otonom berputar di atas lahan sawah terasering untuk memantau hidrasi tanaman secara presisi: 'autonomous agricultural drone... hovering steadily above lush terraced hillside crops'. Gambar A tepat merepresentasikan deskripsi audio.",
      grammarNote: "Participial Modifiers & Precision Technology Terminology: 'hovering steadily', 'capturing infrared imagery'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 4,
      source: "Sumber: Modul Pembelajaran Bahasa Inggris Tingkat Lanjut Fase F â€” Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioText: "Number four. Listen to the academic dialogue between Tari and her literature instructor, Mr. Wicaksono. Tari: Mr. Wicaksono, in our analysis of the Prambanan legend, why does Bandung Bondowoso's hubris ultimately cause his downfall despite his immense supernatural prowess? Mr. Wicaksono: That is a keen literary observation, Tari. Ancient narratives frequently caution that raw power without ethical restraint and humility inevitably breeds self-destruction. Question: What central literary theme does Mr. Wicaksono highlight regarding the protagonist?",
      prompt: "What central literary insight does Mr. Wicaksono emphasize regarding the protagonist's downfall?",
      options: [
        { key: "A", text: "Physical strength alone is always sufficient to win genuine loyalty" },
        { key: "B", text: "Raw power devoid of ethical restraint and humility inevitably leads to self-ruin" },
        { key: "C", text: "Supernatural abilities should be concealed from royal advisers" },
        { key: "D", text: "Traditional legends avoid addressing moral complexities" }
      ],
      correctAnswer: "B",
      explanation: "Mr. Wicaksono menyatakan secara gamblang: 'raw power without ethical restraint and humility inevitably breeds self-destruction' (kekuatan tanpa kendali etika dan kerendahan hati pasti melahirkan kehancuran diri). Pilihan B tepat.",
      grammarNote: "Advanced Noun Phrase & Theme Synthesis: 'raw power devoid of ethical restraint and humility'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 5,
      source: "Sumber: Seminar Prosiding Literasi Digital & Etika AI â€” Dewan Pendidikan Nasional",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioText: "Number five. Listen to the conversation between Kevin and Amanda. Kevin: Amanda, our debate team is arguing against a complete ban on Generative AI tools in high schools. Amanda: Exactly. Banning modern technology is counterproductive. Instead, schools ought to teach prompt critical evaluation and mandate transparent source disclosure. Kevin: I agree entirely; developing critical discernment is far superior to blind prohibition. Question: What policy recommendation do the speakers advocate?",
      prompt: "What progressive educational approach do Kevin and Amanda recommend regarding Generative AI?",
      options: [
        { key: "A", text: "Banning all digital devices and returning to handwritten paper exams" },
        { key: "B", text: "Teaching critical evaluation and mandating transparent disclosure rather than imposing bans" },
        { key: "C", text: "Allowing students to submit automated essays without any teacher supervision" },
        { key: "D", text: "Eliminating essay writing entirely from high school curricula" }
      ],
      correctAnswer: "B",
      explanation: "Kedua siswa sepakat: 'schools ought to teach prompt critical evaluation and mandate transparent source disclosure... discernment is far superior to blind prohibition'. Pilihan B akurat.",
      grammarNote: "Modal of Hortatory Recommendation: 'schools ought to teach prompt critical evaluation and mandate transparent disclosure'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 6,
      source: "Sumber: Cambridge English for Academic Dialogues & Pusat Kurikulum Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Academic Dialogues",
      audioText: "Narrator: Questions 6 refers to the following scholarly conversation.\nMan: Many novice readers assume the legend of Mount Merapi merely celebrates supernatural folklore spectacle.\nWoman: That is an oversimplification. If we examine the text structurally, Nyi Sekar's sacred craft represents ethical resistance against feudal coercion, where spiritual humility triumphs over aristocratic arrogance.\nMan: Exactly. Grounded textual evidence reveals that her craft is an act of principled defiance rather than passive submission.\nNarrator: What analytical insight do the speakers agree upon regarding the legend?",
      prompt: "What analytical insight do the speakers agree upon regarding the legend of Nyi Sekar?",
      options: [
        { key: "A", text: "The narrative represents principled ethical resistance against aristocratic coercion rather than mere supernatural spectacle." },
        { key: "B", text: "Traditional Javanese folklore lacks structural depth and moral nuance for modern literary analysis." },
        { key: "C", text: "Feudal warlords were fully justified in commandeering sacred village heirlooms to protect regional peace." },
        { key: "D", text: "Supernatural interventions are the sole determining factor in resolving ethical village disputes." }
      ],
      correctAnswer: "A",
      explanation: "Kedua pembicara sepakat bahwa tenunan keramat Nyi Sekar merupakan bentuk resistensi etis berprinsip terhadap koersi feodal ('principled defiance against feudal coercion'), bukan sekadar tontonan magis.",
      grammarNote: "Contrastive Discourse Markers & Academic Register: 'oversimplification', 'grounded textual evidence', 'principled defiance'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 7,
      source: "Sumber: Oxford University Literary Studies â€” Contemporary Narrative Theory Lecture Series",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Questions seven and eight are based on the following academic talk. Good morning, students of Advanced English. In traditional European folklore, antagonists are commonly depicted as irredeemably wicked, while protagonists embody immaculate virtue. However, modern contemporary authors frequently deconstruct these simplistic binaries through what literary theorists call fractured fairy tales. By reimagining stories from the marginalized antagonist's psychological viewpoint, authors expose social prejudices, challenge rigid gender stereotypes, and foster deeper emotional empathy. In doing so, contemporary literature encourages young readers to interrogate the narrator's reliability rather than passively absorbing inherited folklore dogmas. Now answer question number seven: What is a primary objective of fractured fairy tales according to the speaker?",
      prompt: "According to the literary lecture, what is a primary objective of contemporary fractured fairy tales?",
      options: [
        { key: "A", text: "To reinforce traditional archetypes of flawless heroes and pure evil villains" },
        { key: "B", text: "To deconstruct simplistic binaries and cultivate critical empathy by examining alternative perspectives" },
        { key: "C", text: "To prove that antique folklore has zero cultural value in modern societies" },
        { key: "D", text: "To shorten lengthy stories into five-minute children's cartoons" }
      ],
      correctAnswer: "B",
      explanation: "Pembicara menjelaskan bahwa tujuan dongeng kontemporer (fractured fairy tales) adalah mendekonstruksi biner yang terlalu sederhana dan menumbuhkan empati kritis: 'deconstruct these simplistic binaries... expose social prejudices, and foster deeper emotional empathy'.",
      grammarNote: "Academic Exposition Register: 'deconstruct simplistic binaries and cultivate critical empathy'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 8,
      source: "Sumber: Monash University Southeast Asian Literary Studies Lecture Series & Kemendikbudristek",
      type: "listening_talk",
      title: "Listening Section: Part III - Literary Lectures",
      audioText: "Narrator: Question 8 refers to the following literary lecture.\nLecturer: Good morning, scholars. When analyzing classical Southeast Asian folklore, notice how oral narrative traditions employ anthropomorphism—attributing moral agency and ethical judgment to ancient landscapes like banyan groves or sacred volcanoes. In Javanese literary traditions, nature is never an indifferent backdrop; it acts as an active moral arbiter that censures hubristic rulers and safeguards the humble. Recognizing this mythic trope enables learners to discern how indigenous cultures inscribed ecological ethics and societal taboos into ancestral narratives.\nNarrator: According to the lecturer, what symbolic role do natural landmarks fulfill in classical folklore?",
      prompt: "According to the lecturer, what symbolic role do natural landmarks fulfill in classical folklore?",
      options: [
        { key: "A", text: "They act as active moral arbiters that censure human hubris and encode indigenous ecological ethics." },
        { key: "B", text: "They serve exclusively as passive visual backdrops designed to enhance romantic narrative aesthetics." },
        { key: "C", text: "They symbolize uncontrollable chaotic forces completely detached from human ethical conduct." },
        { key: "D", text: "They were designed solely to record geological dates of ancient volcanic eruptions." }
      ],
      correctAnswer: "A",
      explanation: "Dosen menjelaskan bahwa dalam cerita rakyat, bentang alam bertindak sebagai wasit moral aktif ('active moral arbiter that censures hubristic rulers and safeguards the humble') yang memuat etika ekologis masyarakat leluhur.",
      grammarNote: "Relative Clauses & Academic Lexis: 'attributing moral agency to ancient landscapes', 'censure hubristic rulers'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 9,
      source: "Sumber: Global Media Literacy & Cyber Ethics Summit â€” UNESCO Policy Directorate",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Questions nine and ten are based on the following hortatory address. Esteemed educators and senior students: We are witnessing an unprecedented algorithmic phenomenon in modern digital culture. Commercial social platforms systematically curate newsfeeds to confirm existing ideological predispositions, thereby trapping adolescents inside invisible echo chambers. When algorithmic echo chambers remain unchecked, nuance disappears, polarization intensifies, and democratic discourse fractures. Therefore, we urgently recommend that educational institutions integrate algorithmic audit exercises into the core curriculum. High school learners must be trained to actively cross-examine algorithmic recommendations, diversify their information diets, and recognize cognitive confirmation bias before formulating opinions. Now answer question number nine: What societal hazard arises when algorithmic echo chambers remain unchecked?",
      prompt: "According to the hortatory address, what hazard is caused by unchecked algorithmic echo chambers?",
      options: [
        { key: "A", text: "A dramatic reduction in the speed of home internet connections" },
        { key: "B", text: "Loss of nuanced thinking, intensified social polarization, and fractured civil discourse" },
        { key: "C", text: "The disappearance of all commercial online shopping platforms" },
        { key: "D", text: "An immediate collapse of global telecommunication satellites" }
      ],
      correctAnswer: "B",
      explanation: "Pembicara menyatakan: 'When algorithmic echo chambers remain unchecked, nuance disappears, polarization intensifies, and democratic discourse fractures'. Hilangnya nuansa berpikir kritis dan meningkatnya polarisasi sosial.",
      grammarNote: "Cause and Effect / Predictive Result: 'nuance disappears, polarization intensifies, and democratic discourse fractures'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 10,
      source: "Sumber: Harvard Kennedy School Civic Technology Address & Cambridge Assessment English",
      type: "listening_talk",
      title: "Listening Section: Part III - Expository Addresses",
      audioText: "Narrator: Question 10 refers to the following civic address.\nSpeaker: In our discussion on digital democracy, let us address algorithmic echo chambers. When commercial recommendation engines curate information streams based strictly on engagement metrics, users are systematically insulated from divergent viewpoints. Consequently, cognitive polarization hardens, debilitating our collective capacity for reasoned civic discourse. To remediate this democratic deficit, educational institutions must institute critical algorithmic literacy programs, training pupils to audit automated recommendation biases and deliberately seek contrarian, peer-reviewed evidence.\nNarrator: What concrete recommendation does the speaker propose to counter algorithmic polarization?",
      prompt: "What concrete recommendation does the speaker propose to counter algorithmic polarization?",
      options: [
        { key: "A", text: "Instituting algorithmic literacy curricula to empower students to audit automated bias and explore divergent evidence." },
        { key: "B", text: "Prohibiting secondary students from utilizing digital search engines and online research repositories." },
        { key: "C", text: "Allowing commercial recommendation algorithms to autonomously determine secondary educational curricula." },
        { key: "D", text: "Restricting student civic debates exclusively to standardized multiple-choice factual assessments." }
      ],
      correctAnswer: "A",
      explanation: "Pembicara merekomendasikan institusi pendidikan menerapkan program literasi algoritmik kritis agar siswa mampu mengaudit bias sistem rekomendasi dan mencari bukti yang beragam ('instituting critical algorithmic literacy programs').",
      grammarNote: "Subjunctive / Resolutive Mandates: 'must institute critical algorithmic literacy programs'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 11,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah â€” Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Central Theme & Conflict",
      prompt: "What is the primary thematic conflict explored throughout the narrative text above?",
      options: [
        { key: "A", text: "A territorial dispute over boundary lines between two neighboring mountain farmers" },
        { key: "B", text: "The ethical confrontation between sacred, selfless craftsmanship and tyrannical military conquest" },
        { key: "C", text: "The difficulty of domesticating wild silk cocoon moths in volcanic climates" },
        { key: "D", text: "A competition between two royal tailors to produce the most expensive bridal gown" }
      ],
      correctAnswer: "B",
      explanation: "Tema sentral cerita naratif tingkat lanjut ini adalah pergulatan etis antara seni kriya yang sakral dan suci untuk kedamaian melawan arogansi tirani militer yang serakah: 'ethical confrontation between sacred, selfless craftsmanship and tyrannical military conquest'.",
      grammarNote: "Advanced Thematic Synthesis: Craftsmanship as ethical resistance against tyranny."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 12,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah â€” Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Explicit Moral Dilemma",
      prompt: "According to paragraph 2, what acute moral dilemma did Nyi Sekar confront when Senopati Kresna issued his ultimatum?",
      options: [
        { key: "A", text: "She lacked sufficient food supplies to feed the armed soldiers" },
        { key: "B", text: "She was torn between preserving the sacred vow of her craft and shielding innocent villagers from massacre" },
        { key: "C", text: "She forgot the traditional weaving patterns passed down by her ancestors" },
        { key: "D", text: "She desired to accept the warlord's offer of royal gold and palace titles" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 2 menyatakan secara eksplisit: 'Torn between preserving the sacred sanctity of her craft and shielding innocent villagers from catastrophic slaughter...'. Pilihan B tepat.",
      grammarNote: "Participial Adjective Phrase of Dilemma: 'Torn between preserving... and shielding...'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 13,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah â€” Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Literary Symbolism",
      prompt: "What does the sacred banyan root fiber woven into the tunic symbolize within the story's deeper discourse?",
      options: [
        { key: "A", text: "The superiority of expensive royal fabrics over ordinary village cotton" },
        { key: "B", text: "Nature's moral counterweight that turns tyrannical malice against the perpetrator" },
        { key: "C", text: "A hidden treasure map leading to the mountain's gold mine" },
        { key: "D", text: "A physical poison intended to kill the warlord instantly" }
      ],
      correctAnswer: "B",
      explanation: "Serat akar beringin sakral yang mengikat dan memberat saat terkena niat jahat melambangkan kekuatan penyeimbang moral alam (moral counterweight) yang membalikkan kesombongan tirani kepada pelakunya sendiri. Pilihan B benar.",
      grammarNote: "Symbolism in Literature: The woven plant fibers symbolize natural cosmic justice."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 14,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah â€” Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Contextual Lexis (CEFR B2)",
      prompt: "The word 'coveted' in paragraph 1 ('feudal warlords coveted her fabled golden cloth for imperial conquest') is closest in meaning to...",
      options: [
        { key: "A", text: "intensely desired and craved" },
        { key: "B", text: "openly rejected" },
        { key: "C", text: "carefully protected" },
        { key: "D", text: "thoroughly forgotten" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'coveted' bermakna sangat mendambakan, menginginkan dengan penuh ketamakan (intensely desired and craved).",
      grammarNote: "Literary Verb Lexis: covet = yearn for, crave greedily, desire intensely."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 15,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah â€” Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Figurative Language Analysis",
      prompt: "Which literary device is employed in the phrase: 'the sacred threads tightened, constricting like living vines around his chest' (paragraph 4)?",
      options: [
        { key: "A", text: "Simile (using 'like' to compare the threads to living vines)" },
        { key: "B", text: "Oxymoron (combining two contradictory terms)" },
        { key: "C", text: "Euphemism (softening an unpleasant reality)" },
        { key: "D", text: "Hyperbolic understatement" }
      ],
      correctAnswer: "A",
      explanation: "Penggunaan kata 'like' dalam 'constricting like living vines' secara eksplisit merupakan majas perumpamaan (Simile) yang membandingkan benang tenun dengan tanaman merambat yang hidup.",
      grammarNote: "Figurative Device Identification: Simile (comparison using 'like' or 'as')."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 16,
      source: "Sumber: Wacana Sastra Klasik Nusantara — Folklor Terjemahan Akademik Kemendikbudristek & KITLV",
      type: "reading_narrative",
      title: "Advanced Reading 1: Literary Narrative Analysis",
      readingRef: "The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      prompt: "In paragraph 3, what psychological and symbolic function is served by Nyi Sekar's stoic silence when confronted by the warlord's emissary?",
      options: [
        { key: "A", text: "It conveys supreme moral composure and quiet dignity, refusing to validate tyranny through impetuous hostility." },
        { key: "B", text: "It demonstrates her paralyzing fear and unconditional submission before the warlord's martial power." },
        { key: "C", text: "It reveals her total ignorance regarding the enchanted properties of the sacred root tunic." },
        { key: "D", text: "It signals that she was secretly negotiating alliances with rival provincial monarchs." }
      ],
      correctAnswer: "A",
      explanation: "Keheningan Nyi Sekar saat berhadapan dengan utusan panglima melambangkan ketenangan batin yang luhur dan martabat moral tak tergoyahkan, menolak memvalidasi tirani dengan kemarahan impulsif.",
      grammarNote: "Nuanced Evaluative Lexis: 'stoic silence', 'moral composure', 'quiet dignity'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 17,
      source: "Sumber: Wacana Sastra Klasik Nusantara — Folklor Terjemahan Akademik Kemendikbudristek & KITLV",
      type: "reading_narrative",
      title: "Advanced Reading 1: Literary Narrative Analysis",
      readingRef: "The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      prompt: "How does the author utilize the contrasting motifs of imported gold thread and wild banyan root fibers in the narrative?",
      options: [
        { key: "A", text: "To juxtapose fleeting, corrupting aristocratic hubris against enduring, organic spiritual humility." },
        { key: "B", text: "To suggest that synthetic imported metallurgy is aesthetically superior to indigenous woven textiles." },
        { key: "C", text: "To demonstrate that luxurious gold-embroidered armor provides genuine military invincibility in battle." },
        { key: "D", text: "To illustrate the tremendous economic profits reaped by highland villagers from imperial court trade." }
      ],
      correctAnswer: "A",
      explanation: "Kontras antara benang emas impor yang dipaksakan sang panglima (lambang kesombongan aristokratik yang fana) dan serat akar beringin liar (lambang kerendahan hati dan ketahanan spiritual alami) menjadi inti simbolis cerita.",
      grammarNote: "Symbolic Juxtaposition & Figurative Language Analysis: 'ephemeral hubris vs enduring organic humility'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 18,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah â€” Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Turning Point (Peripeteia)",
      prompt: "What exact incident marks the peripeteia (dramatic reversal of fortune) in the narrative?",
      options: [
        { key: "A", text: "When Senopati Kresna first rode his horse into the mountain village" },
        { key: "B", text: "When the warlord drew his blade to inaugurate the conquest, causing the tunic to tighten under the weight of his hubris" },
        { key: "C", text: "When Nyi Sekar gathered golden cocoons beside the crater" },
        { key: "D", text: "When the village elders celebrated their annual harvest" }
      ],
      correctAnswer: "B",
      explanation: "Titik balik dramatis (peripeteia) terjadi pada paragraf 4 ketika sang panglima menghunus pedang untuk memulai invasi, namun seketika jubah emasnya memberat dan melilit dadanya akibat arogansi dan niat jahatnya sendiri. Pilihan B tepat.",
      grammarNote: "Literary Theory Term: Peripeteia (sudden reversal of fortune or circumstances)."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 19,
      source: "Sumber: Wacana Sastra Klasik Nusantara — Folklor Terjemahan Akademik Kemendikbudristek & KITLV",
      type: "reading_narrative",
      title: "Advanced Reading 1: Literary Narrative Analysis",
      readingRef: "The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      prompt: "What effect does the author's reflective, third-person omniscient perspective exert on the reader's understanding of the conflict?",
      options: [
        { key: "A", text: "It illuminates both the internal psychological insecurity of the warlord and the serene philosophical resilience of Nyi Sekar." },
        { key: "B", text: "It restricts the narrative entirely to dry historical chronicles devoid of ethical or emotional depth." },
        { key: "C", text: "It fosters ambiguity by frequently switching between incompatible first-person memoirs." },
        { key: "D", text: "It portrays the villagers as powerless victims devoid of cultural discernment or ethical agency." }
      ],
      correctAnswer: "A",
      explanation: "Perspektif narator orang ketiga serba tahu memungkinkan pembaca menyelami kontras psikologis antara kegelisahan batin sang panglima yang haus kekuasaan dengan keteguhan falsafah hidup Nyi Sekar.",
      grammarNote: "Narrative Point of View Analysis: 'third-person omniscient perspective', 'philosophical resilience'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 20,
      source: "Sumber: Wacana Sastra Klasik Nusantara — Folklor Terjemahan Akademik Kemendikbudristek & KITLV",
      type: "reading_narrative",
      title: "Advanced Reading 1: Literary Narrative Analysis",
      readingRef: "The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      prompt: "Which statement best articulates the timeless philosophical worldview enshrined in the denouement of the narrative?",
      options: [
        { key: "A", text: "True artistic creation and cultural heritage cannot be subjugated by coercive force or self-glorifying ambition." },
        { key: "B", text: "Military conquerors invariably triumph over indigenous artistic traditions through armed intimidation." },
        { key: "C", text: "Artisans must strictly avoid innovating with traditional patterns to maintain community harmony." },
        { key: "D", text: "Spiritual humility is inherently incompatible with the survival of sovereign highland kingdoms." }
      ],
      correctAnswer: "A",
      explanation: "Resolusi akhir cerita mengukuhkan falsafah luhur: kriya seni sejati dan warisan spiritual budaya tidak akan pernah dapat ditundukkan oleh intimidasi senjata atau ambisi kekuasaan egoistis.",
      grammarNote: "Thematic Synthesis & Formal Academic Diction: 'cultural heritage cannot be subjugated by coercive force'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 21,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence â€” UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Communicative Purpose",
      prompt: "What is the defining communicative purpose of the hortatory exposition text above?",
      options: [
        { key: "A", text: "To entertain readers with a futuristic science fiction story about self-aware robots" },
        { key: "B", text: "To persuade educational stakeholders that high schools must establish ethical AI frameworks and recommendations" },
        { key: "C", text: "To describe the physical hardware specifications of modern computer graphics cards" },
        { key: "D", text: "To provide a step-by-step programming tutorial on building a neural network from scratch" }
      ],
      correctAnswer: "B",
      explanation: "Tujuan komunikatif teks eksposisi hortatori adalah meyakinkan pemangku kepentingan pendidikan bahwa sekolah harus menetapkan kerangka kerja dan rekomendasi etis dalam pemanfaatan AI (to persuade that high schools must establish ethical AI frameworks).",
      grammarNote: "Generic Purpose of Hortatory Exposition: To persuade that something should or should not be done."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 22,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence â€” UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Thesis Statement Identification",
      prompt: "Which sentence from paragraph 1 directly expresses the author's central thesis statement?",
      options: [
        { key: "A", text: "The meteoric emergence of generative artificial intelligence has revolutionized academic landscapes" },
        { key: "B", text: "With simple prompts, language models can instantaneously generate persuasive essays" },
        { key: "C", text: "Senior high schools must proactively establish comprehensive ethical AI frameworks that train students to harness technologies responsibly" },
        { key: "D", text: "Some conservative educators reflexively advocate for a blanket ban on AI tools" }
      ],
      correctAnswer: "C",
      explanation: "Tesis penulis tercantum jelas di akhir paragraf 1: 'Therefore, senior high schools must proactively establish comprehensive ethical AI frameworks that train students to harness these technologies responsibly...'. Pilihan C tepat.",
      grammarNote: "Thesis Statement Identification: Modal of strong necessity ('must proactively establish')."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 23,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence â€” UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Structural Distinction",
      prompt: "How does the conclusion of this Hortatory Exposition differ structurally from an Analytical Exposition text?",
      options: [
        { key: "A", text: "It concludes with actionable recommendations ('should mandate... integrate... reorient') rather than merely reiterating the thesis" },
        { key: "B", text: "It ends with a poetic rhyming verse about computer screens" },
        { key: "C", text: "It introduces a brand-new fictional conflict between dragons and machines" },
        { key: "D", text: "It refuses to summarize any of the previous arguments" }
      ],
      correctAnswer: "A",
      explanation: "Perbedaan struktural utama teks Eksposisi Hortatori dibandingkan Eksposisi Analitis adalah bahwa paragraf penutupnya memuat Rekomendasi tindakan ('should mandate... integrate... reorient') bukan hanya sekadar Reiteration (penegasan ulang). Pilihan A tepat.",
      grammarNote: "Text Genre Theory: Hortatory Exposition ends with Recommendation, whereas Analytical Exposition ends with Reiteration."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 24,
      source: "Sumber: Journal of Advanced Educational Technology & Society — Cambridge Academic Publishing & Kemendikbudristek",
      type: "reading_hortatory",
      title: "Advanced Reading 2: Hortatory Exposition Discourse",
      readingRef: "Harnessing Generative AI in Secondary Education: Why Banning Fails and Critical Integration Must Prevail",
      prompt: "In paragraph 2, how does the author refute the reactionary argument that AI ought to be banned to prevent student plagiarism?",
      options: [
        { key: "A", text: "By demonstrating that prohibition merely drives misconduct underground, whereas process-oriented assessment builds authentic integrity." },
        { key: "B", text: "By asserting that authorial integrity and intellectual originality have become obsolete in modern education." },
        { key: "C", text: "By advocating severe legal prosecution and expulsion for students using automated editing software." },
        { key: "D", text: "By declaring that algorithmic detection utilities are infallible and fully eliminate dishonest practices." }
      ],
      correctAnswer: "A",
      explanation: "Penulis membantah gagasan pelarangan total dengan menunjukkan bahwa larangan hanya mendorong kecurangan ke bawah tanah, sementara asesmen berbasis proses autentik justru membangun integritas intelektual sejati.",
      grammarNote: "Refutation Discourse & Academic Logic: 'prohibition merely drives misconduct underground'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 25,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence â€” UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Academic Lexis in Context",
      prompt: "The word 'myopic' in paragraph 1 ('such prohibitionist stances are fundamentally unfeasible and myopic') is closest in meaning to...",
      options: [
        { key: "A", text: "short-sighted and lacking foresight" },
        { key: "B", text: "broad-minded and progressive" },
        { key: "C", text: "extremely economical" },
        { key: "D", text: "scientifically proven" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'myopic' secara kiasan dalam wacana akademis bermakna berpikiran sempit, tidak berpandangan jauh ke depan (short-sighted and lacking foresight).",
      grammarNote: "Advanced Evaluative Adjective: myopic = short-sighted, narrow-minded, improvident."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 26,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence â€” UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Cause and Effect Logic",
      prompt: "Based on paragraph 3, why can generative AI systems produce convincing yet entirely fabricated misinformation (hallucinations)?",
      options: [
        { key: "A", text: "Because they operate on statistical probabilities of word sequences rather than genuine human comprehension" },
        { key: "B", text: "Because their computer servers are purposely hacked by international cyber criminals" },
        { key: "C", text: "Because software engineers program them to tell deliberate lies" },
        { key: "D", text: "Because high school electricity grids provide unstable voltage" }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 3 menjelaskan: 'Generative systems do not possess genuine comprehension; they merely compute probabilistic sequences of words based on vast training datasets'. Sistem AI tidak memiliki pemahaman sejati melainkan urutan probabilitas kata. Pilihan A benar.",
      grammarNote: "Causal Explanation Clause: 'operate on statistical probabilities... rather than genuine comprehension'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 27,
      source: "Sumber: Journal of Advanced Educational Technology & Society — Cambridge Academic Publishing & Kemendikbudristek",
      type: "reading_hortatory",
      title: "Advanced Reading 2: Hortatory Exposition Discourse",
      readingRef: "Harnessing Generative AI in Secondary Education: Why Banning Fails and Critical Integration Must Prevail",
      prompt: "Which pair of adjectives most accurately captures the author's communicative stance and rhetorical tone throughout the hortatory text?",
      options: [
        { key: "A", text: "Analytically rigorous and pedagogically progressive." },
        { key: "B", text: "Hostile and technologically reactionary." },
        { key: "C", text: "Indifferent and aesthetically disengaged." },
        { key: "D", text: "Dogmatic and dismissive of empirical research." }
      ],
      correctAnswer: "A",
      explanation: "Nada tulisan penulis bersifat analitis berbobot ('analytically rigorous') dan progresif secara pedagogis ('pedagogically progressive') dalam merespons disrupsi kecerdasan buatan.",
      grammarNote: "Authorial Tone & Stance Identification: 'rigorous and progressive'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 28,
      source: "Sumber: Journal of Advanced Educational Technology & Society — Cambridge Academic Publishing & Kemendikbudristek",
      type: "reading_hortatory",
      title: "Advanced Reading 2: Hortatory Exposition Discourse",
      readingRef: "Harnessing Generative AI in Secondary Education: Why Banning Fails and Critical Integration Must Prevail",
      prompt: "What structural transition in student assessment does the author urge educators to enact in paragraph 2?",
      options: [
        { key: "A", text: "Transitioning from formulaic finished essays toward iterative drafts, oral defenses, and metacognitive audits." },
        { key: "B", text: "Abolishing all evaluation rubrics in favor of arbitrary teacher intuition." },
        { key: "C", text: "Restricting student composition exclusively to memorized pen-and-paper fill-in-the-blank drills." },
        { key: "D", text: "Delegating the grading of student research entirely to autonomous algorithmic software." }
      ],
      correctAnswer: "A",
      explanation: "Penulis mengusulkan transisi struktural pada evaluasi: beralih dari teks jadi hafalan ke draf iteratif, pertahanan lisan, dan audit metakognitif ('iterative drafts, oral defenses, and metacognitive audits').",
      grammarNote: "Prepositional Phrases & Nominalizations: 'transitioning from formulaic essays toward iterative drafts'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 29,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence â€” UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Paraphrasing the Recommendation",
      prompt: "Which statement best restates the recommendation in paragraph 4?",
      options: [
        { key: "A", text: "Schools should completely shut down their computer labs to eliminate digital cheating" },
        { key: "B", text: "Institutions should implement transparent disclosure rules and equip students with critical literacy rather than futile bans" },
        { key: "C", text: "All students must purchase the most expensive proprietary AI software available" },
        { key: "D", text: "Teachers should let students use AI without any verification or ethical boundaries" }
      ],
      correctAnswer: "B",
      explanation: "Parafrase rekomendasi paragraf 4 yang paling tepat: Sekolah harus menerapkan aturan transparansi dan membekali siswa dengan literasi kritis alih-alih larangan yang sia-sia. Pilihan B tepat.",
      grammarNote: "Paraphrasing Hortatory Recommendation: Transparent rules + critical literacy over futile bans."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 30,
      source: "Sumber: Journal of Advanced Educational Technology & Society — Cambridge Academic Publishing & Kemendikbudristek",
      type: "reading_hortatory",
      title: "Advanced Reading 2: Hortatory Exposition Discourse",
      readingRef: "Harnessing Generative AI in Secondary Education: Why Banning Fails and Critical Integration Must Prevail",
      prompt: "According to the concluding recommendation, what overarching capability will empower learners to thrive in an AI-driven society?",
      options: [
        { key: "A", text: "Cultivating critical inquiry, algorithmic skepticism, and ethical discernment as active creators rather than passive consumers." },
        { key: "B", text: "Accepting algorithmic summaries without questioning their factual verifiability or political neutrality." },
        { key: "C", text: "Rejecting all technological apparatuses in favor of medieval scholastic instruction." },
        { key: "D", text: "Outsourcing original intellectual syntheses entirely to generative neural models." }
      ],
      correctAnswer: "A",
      explanation: "Kesimpulan menegaskan bahwa kemampuan kritis, skeptisisme algoritmik, dan pertimbangan etis akan memampukan siswa menjadi kreator aktif berdaya saing, bukan konsumen pasif.",
      grammarNote: "Concluding Hortatory Synthesis: 'empowering learners as active creators with ethical discernment'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 31,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) â€” Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Grammar: Inversion after Restrictive Adverbial",
      prompt: "Choose the correct inverted verb structure to complete the formal academic sentence:",
      options: [
        { key: "A", text: "have educators observed" },
        { key: "B", text: "educators have observed" },
        { key: "C", text: "educators observed" },
        { key: "D", text: "educators are observing" }
      ],
      correctAnswer: "A",
      explanation: "Ketika kalimat formal diawali oleh adverbial negatif/pembatas seperti 'Seldom', 'Rarely', atau 'Hardly', klausa mengalami inversi (Auxiliary + Subject + Verb): 'Seldom have educators observed...'.",
      grammarNote: "Formal Negative Inversion: Negative/Restrictive Adverb + Auxiliary + Subject + Main Verb."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 32,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) â€” Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Grammar: Present Subjunctive in Formal Recommendation",
      prompt: "Select the correct subjunctive verb form for the 'that-clause':",
      options: [
        { key: "A", text: "disclose" },
        { key: "B", text: "discloses" },
        { key: "C", text: "disclosed" },
        { key: "D", text: "is disclosing" }
      ],
      correctAnswer: "A",
      explanation: "Setelah kata kerja rekomendasi formal (recommend, mandate, demand, insist) + that + Subject, kata kerja yang digunakan adalah Subjunctive bentuk dasar (Base Form / Bare Infinitive): 'that every student disclose' (tanpa akhiran -s meskipun subjeknya tunggal).",
      grammarNote: "Mandative Subjunctive Formula: Verb of Recommendation + that + Subject + Base Verb (V1)."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 33,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) â€” Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Grammar: Concessive Conjunction of Contrast",
      prompt: "Which conjunction of concession correctly establishes the formal contrast?",
      options: [
        { key: "A", text: "Notwithstanding that" },
        { key: "B", text: "Because" },
        { key: "C", text: "Inasmuch as" },
        { key: "D", text: "Provided that" }
      ],
      correctAnswer: "A",
      explanation: "'Notwithstanding that' adalah konjungsi konsesif formal bertaraf B2/C1 yang bermakna 'meskipun / walaupun' (synonymous with although / even though) dan diikuti oleh klausa lengkap. 'Inasmuch as' bermakna karena/mengingat bahwa.",
      grammarNote: "Formal Concessive Subordinator: 'Notwithstanding that' + Subject + Verb = Although + Subject + Verb."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 34,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) â€” Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Grammar: Inverted Conditional Type 3",
      prompt: "Choose the correct inverted conditional structure to replace 'If the school administration had implemented':",
      options: [
        { key: "A", text: "Had the school administration implemented" },
        { key: "B", text: "Were the school administration to implement" },
        { key: "C", text: "Did the school administration implement" },
        { key: "D", text: "Should the school administration implement" }
      ],
      correctAnswer: "A",
      explanation: "Bentuk inversi untuk Conditional Type 3 (pengandaian lampau) menghilangkan kata 'If' dan memindahkan auxiliary 'Had' ke depan subjek: 'Had the school administration implemented...' = 'If the school administration had implemented...'.",
      grammarNote: "Inverted Conditional Type 3: Had + Subject + Past Participle (V3), Subject + would have + V3."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 35,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) â€” Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Grammar: Modal of Stance in Hortatory Discourse",
      prompt: "Which passive modal construction best expresses strong principled advice?",
      options: [
        { key: "A", text: "ought to be treated" },
        { key: "B", text: "ought to treat" },
        { key: "C", text: "might have treated" },
        { key: "D", text: "was being treated" }
      ],
      correctAnswer: "A",
      explanation: "Subjek kalimat adalah 'algorithmically generated claims' yang menerima perlakuan secara pasif dengan modal anjuran kuat: ought to + be + V3 -> 'ought to be treated'.",
      grammarNote: "Modal Passive in Hortatory Discourse: ought to + be + Past Participle (V3)."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 36,
      source: "Sumber: Oxford English Grammar Course (Advanced) & Cambridge C1 Advanced Handbook",
      type: "grammar_structure",
      title: "Advanced Structure: Cleft Sentence Construction",
      prompt: "Select the sentence that accurately employs an 'it-cleft' structure to highlight the focal agent of change:",
      options: [
        { key: "A", text: "It was Nyi Sekar's steadfast ethical conviction that ultimately unmasked the warlord's tyrannical hubris." },
        { key: "B", text: "Nyi Sekar had a steadfast ethical conviction which it unmasked the warlord's tyrannical hubris." },
        { key: "C", text: "It being Nyi Sekar's ethical conviction, that unmasked the warlord's tyrannical hubris." },
        { key: "D", text: "What unmasked the warlord it was because of Nyi Sekar's steadfast conviction." }
      ],
      correctAnswer: "A",
      explanation: "Konstruksi 'it-cleft' formal menggunakan pola: It + was + focal element + that + rest of clause: 'It was Nyi Sekar's steadfast ethical conviction that ultimately unmasked...'. Pola B, C, dan D tidak baku.",
      grammarNote: "Cleft Sentences for Focus: It + be + Focus + that/who-clause."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XI-TL]
      id: 37,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) â€” Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Grammar: Perfect Participial Clause",
      prompt: "Select the correct participial phrase indicating an action completed prior to the main clause:",
      options: [
        { key: "A", text: "Having woven" },
        { key: "B", text: "Weaving" },
        { key: "C", text: "Being woven" },
        { key: "D", text: "To weave" }
      ],
      correctAnswer: "A",
      explanation: "Perfect Participle ('Having + V3') digunakan untuk menekankan bahwa suatu aksi telah selesai sempurna sebelum aksi pada induk kalimat dimulai: 'Having woven the intricate patterns... Nyi Sekar presented...'. Pilihan A tepat.",
      grammarNote: "Perfect Participle Clause: Having + V3 expresses anteriority (action finished prior to main verb)."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 38,
      source: "Sumber: Cambridge Grammar of the English Language & TOEFL/IELTS Academic Writing Standards",
      type: "grammar_structure",
      title: "Advanced Structure: Negative Inversion with 'Under no circumstances'",
      prompt: "Choose the grammatically correct academic sentence featuring negative inversion with 'Under no circumstances':",
      options: [
        { key: "A", text: "Under no circumstances should researchers misrepresent algorithmic outputs as autonomous human scholarship." },
        { key: "B", text: "Under no circumstances researchers should misrepresent algorithmic outputs as autonomous human scholarship." },
        { key: "C", text: "Under no circumstances should researchers misrepresenting algorithmic outputs as autonomous human scholarship." },
        { key: "D", text: "Under no circumstances researchers must not misrepresent algorithmic outputs as autonomous human scholarship." }
      ],
      correctAnswer: "A",
      explanation: "Frasa keterangan negatif pembuka 'Under no circumstances' mewajibkan inversi: Modal/Auxiliary (should) mendahului subjek (researchers): 'Under no circumstances should researchers misrepresent...'. Opsi D salah karena redundan dengan negasi ganda 'must not'.",
      grammarNote: "Negative Inversion: Negative phrase + Auxiliary + Subject + Main Verb."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 39,
      source: "Sumber: Advanced Grammar in Use — Martin Hewings & Cambridge Assessment English",
      type: "grammar_structure",
      title: "Advanced Structure: Concessive Clause with 'Much as'",
      prompt: "Select the formal concessive construction that expresses the meaning 'Although technocrats promote full automation...':",
      options: [
        { key: "A", text: "Much as technocrats promote full automation, human pedagogical empathy remains entirely irreplaceable." },
        { key: "B", text: "In spite technocrats promote full automation, human pedagogical empathy remains irreplaceable." },
        { key: "C", text: "Even technocrats promote full automation, human pedagogical empathy remains irreplaceable." },
        { key: "D", text: "Regardless technocrats promote full automation, human pedagogical empathy remains irreplaceable." }
      ],
      correctAnswer: "A",
      explanation: "'Much as + clause' adalah konstruksi konsesif tingkat tinggi yang sepadan dengan 'Although/Even though + clause': 'Much as technocrats promote full automation...'. 'In spite' membutuhkan 'of' atau frasa nomina.",
      grammarNote: "Advanced Concession: Much as + Subject + Verb."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 40,
      source: "Sumber: The Blue Book of Grammar and Punctuation & Harvard Writing Center Standards",
      type: "grammar_structure",
      title: "Advanced Structure: Mandative Subjunctive in Policy Resolutions",
      prompt: "Choose the correct subjunctive verb form following the formal policy verb 'resolved':",
      options: [
        { key: "A", text: "The educational council resolved that every academic faculty integrate ethical AI guidelines into syllabus designs." },
        { key: "B", text: "The educational council resolved that every academic faculty integrates ethical AI guidelines into syllabus designs." },
        { key: "C", text: "The educational council resolved that every academic faculty integrated ethical AI guidelines into syllabus designs." },
        { key: "D", text: "The educational council resolved that every academic faculty is integrating ethical AI guidelines into syllabus designs." }
      ],
      correctAnswer: "A",
      explanation: "Klausa that setelah kata kerja ketetapan/resolusi (resolved, recommended, insisted) menggunakan bentuk kata kerja dasar (bare infinitive / mandative subjunctive): 'integrate' (bukan 'integrates' atau 'integrated').",
      grammarNote: "Mandative Subjunctive: Verb of resolution + that + Subject + bare infinitive."
    }
  ];
}

// Global State Management
let studentIdentity = {
  tingkat: "XI-TL",
  rombel: "1",
  presensi: "1",
  nama: "Siswa Kelas XI Tingkat Lanjut"
};

let currentMode = "practice"; // 'practice' or 'exam'
let currentQuestionIndex = 0;
let userAnswers = {}; // { questionId: answerKey }
let flaggedQuestions = new Set();
let timerInterval = null;
let remainingSeconds = 90 * 60; // 90 minutes
let isExamSubmitted = false;
let audioSpeechRate = 1.0;
let currentUtterance = null;
let questions = [];

// Fisher-Yates Shuffle for Options (Single choice questions only, without SVGs)
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
});

function initStudentData() {
  try {
    const rawPortal = localStorage.getItem("sabaku_current_student");
    if (rawPortal) {
      const portalData = JSON.parse(rawPortal);
      studentIdentity = {
        tingkat: portalData.tingkat || "XI-TL",
        rombel: portalData.rombel || "1",
        presensi: portalData.presensi || "1",
        nama: portalData.nama || "Siswa Kelas XI Tingkat Lanjut"
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

  // Tidak perlu token atau password untuk latihan / ujian

  studentIdentity = {
    tingkat: "XI-TL",
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

function toggleDirectToken(mode) {}

function startFreshTest() {
  userAnswers = {};
  flaggedQuestions.clear();
  isExamSubmitted = false;
  remainingSeconds = 90 * 60;
  currentQuestionIndex = 0;

  // Initialize and randomize Grade 11 TL question bank
  const rawBank = getGrade11TLAstsQuestions();
  questions = randomizeQuestionOptions(rawBank);

  // Restore session from LocalStorage if available
  try {
    const saved = localStorage.getItem("sabaku_asts_progress_XI_TL");
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
  modeBadge.textContent = (currentMode === "practice") ? "🎯 Mode Latihan" : "📝 Asesmen Resmi (ASAS)";
  modeBadge.className = "badge-mode " + (currentMode === "practice" ? "practice" : "exam");

  document.getElementById("side-student-name").textContent = studentIdentity.nama;
  document.getElementById("side-student-meta").textContent = `Kelas XI Tingkat Lanjut | Rombel ${studentIdentity.rombel} | Presensi ${studentIdentity.presensi}`;
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
  return ans !== "";
}

function renderQuestion(index) {
  if (index < 0 || index >= questions.length) return;
  currentQuestionIndex = index;
  const q = questions[index];

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

  // Explanation Box
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

// Audio Engine via Web Speech API
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
    alert("Peramban Anda belum mendukung Web Speech API.");
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

  localStorage.removeItem("sabaku_asts_progress_XI_TL");

  let correctCount = 0;
  questions.forEach(q => {
    if (userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
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
  document.getElementById("stat-accuracy").textContent = `${Math.round((correctCount / totalQuestions) * 100)}%`;

  const record = {
    tingkat: studentIdentity.tingkat,
    rombel: studentIdentity.rombel,
    presensi: studentIdentity.presensi,
    nama: studentIdentity.nama,
    mode: (currentMode === "practice") ? "Latihan ASAS Gasal Tingkat Lanjut" : "Asesmen Resmi ASAS Gasal Tingkat Lanjut",
    score: correctCount,
    total: totalQuestions,
    grade: finalScore,
    duration: `${Math.floor((5400 - remainingSeconds) / 60)} menit`,
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
  } catch (e) {
    console.warn("sendBeacon error:", e);
  }

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
    link.setAttribute("download", `Rekap_Nilai_ASAS_XI_TL_${studentIdentity.nama.replace(/\s+/g, "_")}.csv`);
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
    localStorage.removeItem("sabaku_asts_progress_XI_TL");
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
    localStorage.setItem("sabaku_asts_progress_XI_TL", JSON.stringify(data));
  } catch (e) {
    console.warn("Autosave error:", e);
  }
}
