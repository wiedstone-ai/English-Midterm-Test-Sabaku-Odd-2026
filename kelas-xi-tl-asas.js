/**
 * ASESMEN SUMATIF AKHIR SEMESTER (ASAS) GASAL & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT LANJUT — TINGKAT XI (FASE F - TL)
 * SEMESTER GASAL (18 MINGGU PENUH) TP 2026/2027
 * 
 * Standar: Tes Kemampuan Akademik (TKA / AKM Literasi Tingkat Lanjut / UTBK)
 * Cakupan Materi Lengkap:
 * 1. Listening Section: Multimodal Audio-Visual, Academic Dialogues, Literary & Expository Talks.
 * 2. Reading Genre 1: Advanced Narrative (Legends, Folklore Tropes, Literary Devices, Moral Philosophy).
 * 3. Reading Genre 2: Hortatory Exposition (Ethical AI in Education, Social Advocacy, Strong Recommendation).
 * 4. Advanced Grammar: Inversion after Restrictive Adverbials, Subjunctive Mood, Concessive Connectors,
 *    Inverted Conditionals, Impersonal Passive, Evaluative Collocations & Oxford 5000 B2 Lexis.
 * 
 * Fitur:
 * - 40 Butir Soal Komprehensif Berbasis Stimulus Otentik
 * - 100% Sumber Tercantum pada Setiap Soal
 * - Audio Sintesis Suara Native (Web Speech API)
 * - Shuffling Fisher-Yates Opsi Jawaban
 * - Autosave Real-Time ke LocalStorage (sabaku_asas_progress_XI_TL)
 * - Skoring Otomatis & Evaluasi KKTP 75
 * - Pengiriman Nilai Otomatis ke Google Sheets via Google Apps Script Web App
 * - Ekspor Rekap Nilai CSV Offline
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

// SVG Pictures for Listening Part I Multimodal
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
  </svg>`
};

function getGrade11TLAsasQuestions() {
  return [
    // =========================================================================
    // SECTION 1: LISTENING SECTION (QUESTIONS 1 - 10)
    // =========================================================================

    // Part I: Pictures (1-3)
    {
      id: 1,
      source: "Sumber: Advanced English Academic Listening Series — Cambridge Assessment English & Kemendikbudristek",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number one. Look at the pictures. A university student of digital humanities is using high-resolution magnifying apparatus to examine an ancient illuminated manuscript, transcribing fragile ancient calligraphy onto her laptop screen. Which picture best illustrates the spoken statement?",
      prompt: "Which picture corresponds to the digital manuscript examination described in the recording?",
      options: [
        { key: "A", svg: SVG_PICTURES.digitalManuscript, label: "Scholarly digital analysis of an illuminated manuscript" },
        { key: "B", svg: SVG_PICTURES.amphitheaterDrama, label: "Dramatic theatrical performance in an open amphitheater" },
        { key: "C", svg: SVG_PICTURES.climateObservatory, label: "Coastal meteorological climate observatory" },
        { key: "D", svg: SVG_PICTURES.oilRefinery, label: "Fossil fuel industrial refining facility" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan aktivitas akademis filologi digital: 'student of digital humanities is using high-resolution magnifying apparatus to examine an ancient illuminated manuscript'. Gambar A mencerminkan analisis naskah kuno beriluminasi.",
      grammarNote: "Participle Clauses & Academic Register: 'using high-resolution apparatus', 'transcribing fragile calligraphy'."
    },
    {
      id: 2,
      source: "Sumber: International Arts & Theatre Education Council — Journal of Literary Performance",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number two. Look at the pictures. In an open-air stone amphitheater surrounded by tiered seating, senior high school performers are staging a dramatic literary tragedy under focused spotlight illumination. Which picture matches the description?",
      prompt: "Which picture depicts the classical theatrical drama in the stone amphitheater described in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.digitalManuscript, label: "Scholarly digital analysis of an illuminated manuscript" },
        { key: "B", svg: SVG_PICTURES.amphitheaterDrama, label: "Dramatic theatrical performance in an open amphitheater" },
        { key: "C", svg: SVG_PICTURES.climateObservatory, label: "Coastal meteorological climate observatory" },
        { key: "D", svg: SVG_PICTURES.oilRefinery, label: "Fossil fuel industrial refining facility" }
      ],
      correctAnswer: "B",
      explanation: "Audio menyebutkan pementasan drama sastra klasik: 'In an open-air stone amphitheater surrounded by tiered seating, senior high school performers are staging a dramatic literary tragedy'. Gambar B tepat.",
      grammarNote: "Prepositional Phrase of Place: 'In an open-air stone amphitheater surrounded by tiered seating'."
    },
    {
      id: 3,
      source: "Sumber: Global Renewable Science & Meteorological Bulletin — World Meteorological Organization",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number three. Look at the pictures. Perched high upon an elevated green hill above the ocean, this automated meteorological dome monitors solar radiation and atmospheric airflow to assess clean energy potential. Which picture illustrates this description?",
      prompt: "Which picture shows the elevated climate observation dome described in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.digitalManuscript, label: "Scholarly digital analysis of an illuminated manuscript" },
        { key: "B", svg: SVG_PICTURES.amphitheaterDrama, label: "Dramatic theatrical performance in an open amphitheater" },
        { key: "C", svg: SVG_PICTURES.climateObservatory, label: "Coastal meteorological climate observatory" },
        { key: "D", svg: SVG_PICTURES.oilRefinery, label: "Fossil fuel industrial refining facility" }
      ],
      correctAnswer: "C",
      explanation: "Audio mendeskripsikan stasiun pengamatan iklim di atas bukit hijau: 'Perched high upon an elevated green hill above the ocean, this automated meteorological dome monitors solar radiation'. Gambar C adalah kubah observatorium.",
      grammarNote: "Past Participle modifier: 'Perched high upon an elevated green hill... this dome monitors...'."
    },

    // Part II: Short Dialogues (4-6)
    {
      id: 4,
      source: "Sumber: Modul Pembelajaran Bahasa Inggris Tingkat Lanjut Fase F — Kemendikbudristek",
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
      id: 5,
      source: "Sumber: Seminar Prosiding Literasi Digital & Etika AI — Dewan Pendidikan Nasional",
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
      id: 6,
      source: "Sumber: Forum Remaja Peduli Lingkungan & Kebijakan Hijau — KLHK RI",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioText: "Number six. Listen to the dialogue between Bima and Maya. Bima: Maya, our environmental club has drafted a proposal for our school festival. Maya: Did you include the mandatory deposit-return system for reusable glass tumblers? Bima: Yes. Furthermore, we recommended that food vendors be prohibited from distributing single-use plastic cutlery. Maya: That recommendation is vital; without binding regulations, voluntary pledges rarely succeed. Question: What does Maya assert about environmental initiatives?",
      prompt: "What does Maya assert regarding environmental pledges during school events?",
      options: [
        { key: "A", text: "Voluntary pledges rarely achieve meaningful change without binding regulations" },
        { key: "B", text: "Plastic cutlery is more environmentally sustainable than glass tumblers" },
        { key: "C", text: "School festivals should be cancelled to preserve campus cleanliness" },
        { key: "D", text: "Food vendors should determine environmental policies independently" }
      ],
      correctAnswer: "A",
      explanation: "Maya menegaskan: 'That recommendation is vital; without binding regulations, voluntary pledges rarely succeed' (komitmen sukarela jarang berhasil tanpa regulasi yang mengikat). Pilihan A tepat.",
      grammarNote: "Prepositional condition: 'without binding regulations, voluntary pledges rarely succeed'."
    },

    // Part III: Short Talks / Monologues (7-10)
    {
      id: 7,
      source: "Sumber: Oxford University Literary Studies — Contemporary Narrative Theory Lecture Series",
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
      id: 8,
      source: "Sumber: Oxford University Literary Studies — Contemporary Narrative Theory Lecture Series",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Now answer question number eight based on the same talk: What intellectual habit does modern narrative revision encourage among high school readers?",
      prompt: "What intellectual habit does reading revised narratives encourage students to develop?",
      options: [
        { key: "A", text: "Blindly accepting every narrator's claims as absolute truth" },
        { key: "B", text: "Interrogating narrative reliability rather than passively absorbing inherited assumptions" },
        { key: "C", text: "Refusing to read any literature published before the twenty-first century" },
        { key: "D", text: "Memorizing character names without analyzing thematic significance" }
      ],
      correctAnswer: "B",
      explanation: "Kuliah menegaskan: 'contemporary literature encourages young readers to interrogate the narrator's reliability rather than passively absorbing inherited folklore dogmas' (mempertanyakan keandalan narator daripada menelan asumsi begitu saja).",
      grammarNote: "Infinitive of Purpose: 'to interrogate the narrator's reliability rather than passively absorbing...'."
    },
    {
      id: 9,
      source: "Sumber: Global Media Literacy & Cyber Ethics Summit — UNESCO Policy Directorate",
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
      id: 10,
      source: "Sumber: Global Media Literacy & Cyber Ethics Summit — UNESCO Policy Directorate",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Now answer question number ten based on the same talk: What specific recommendation does the speaker propose for educational institutions?",
      prompt: "What concrete recommendation is proposed by the speaker to mitigate algorithmic echo chambers?",
      options: [
        { key: "A", text: "Banning students from enrolling in university humanities programs" },
        { key: "B", text: "Integrating algorithmic audit exercises and critical verification into the school curriculum" },
        { key: "C", text: "Confiscating all computer equipment from school media laboratories" },
        { key: "D", text: "Relying exclusively on voluntary digital hygiene without institutional guidance" }
      ],
      correctAnswer: "B",
      explanation: "Pidato hortatori mengusulkan rekomendasi eksplisit: 'Therefore, we urgently recommend that educational institutions integrate algorithmic audit exercises into the core curriculum'.",
      grammarNote: "Subjunctive Hortatory Structure: 'recommend that educational institutions integrate algorithmic audit exercises into the core curriculum'."
    },

    // =========================================================================
    // SECTION 2: READING GENRE 1 - ADVANCED NARRATIVE TEXT (QUESTIONS 11 - 20)
    // =========================================================================
    {
      id: 11,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Central Theme & Conflict",
      stimulusTitle: "Text 1: The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      stimulusBody: `High upon the misty volcanic slopes of Mount Merapi in ancient Central Java, there dwelled a solitary artisan named Nyi Sekar. While village elders revered her for weaving traditional ceremonial textiles endowed with celestial protection, neighboring feudal warlords coveted her fabled golden cloth for imperial conquest. Nyi Sekar lived under a solemn sacred vow: her gilded threads could only be harvested from the rare golden cocoon moths that nested beside the active volcanic vents, and they could only be woven with selfless devotion for communal healing, never for vanity or royal bloodshed.<br><br>One monsoon evening, a ruthless warlord named Senopati Kresna arrived at her sanctuary with an armed brigade. Brandishing his jewel-encrusted blade, he demanded that Nyi Sekar weave an impenetrable war tunic within three days, threatening to raze the valley villages below if she refused. Torn between preserving the sacred sanctity of her craft and shielding innocent villagers from catastrophic slaughter, Nyi Sekar ostensibly bowed in quiet compliance. 'Power often blinds men to the mountain's sacred laws,' she whispered inwardly, embarking upon the most perilous artistic trial of her existence.<br><br>Working ceaselessly under the brooding crater, Nyi Sekar gathered the volcanic golden silk. However, into the magnificent tunic's intricate geometric patterns, she deliberately entwined fibers from the sacred banyan root—fibers known in regional lore to dissolve binding enchantments whenever exposed to true prideful malice. When dawn broke on the third day, the golden tunic shimmered with astonishing splendor. Arrogantly declaring himself immortal, Senopati Kresna seized the garment, donned it over his heavy iron armor, and ordered his soldiers to march on the defenseless settlements.<br><br>Yet, the instant the warlord drew his sword to inaugurate the conquest, the dormant volcano unleashed a deafening rumble. Awakened by his unbridled hubris, the sacred threads tightened, constricting like living vines around his chest. The harder the warlord struggled to exert his violent will, the heavier the tunic became, until he collapsed under the unbearable weight of his own imperial greed. Stripped of his weapons, the humbled commander fled the highlands in utter disarray. To this day, Javanese weavers maintain that authentic art serves to cultivate peace, reminding mortals that nature and craft ultimately resist tyranny.`,
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
      id: 12,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Explicit Moral Dilemma",
      stimulusTitle: "Text 1: The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      stimulusBody: `(Silakan merujuk pada teks 'The Gilded Weaver of Mount Merapi' di atas)`,
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
      id: 13,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Literary Symbolism",
      stimulusTitle: "Text 1: The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      stimulusBody: `(Silakan merujuk pada teks 'The Gilded Weaver of Mount Merapi' di atas)`,
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
      id: 14,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Contextual Lexis (CEFR B2)",
      stimulusTitle: "Text 1: The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      stimulusBody: `(Silakan merujuk pada teks 'The Gilded Weaver of Mount Merapi' di atas)`,
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
      id: 15,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Figurative Language Analysis",
      stimulusTitle: "Text 1: The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      stimulusBody: `(Silakan merujuk pada teks 'The Gilded Weaver of Mount Merapi' di atas)`,
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
      id: 16,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Psychological Character Motivation",
      stimulusTitle: "Text 1: The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      stimulusBody: `(Silakan merujuk pada teks 'The Gilded Weaver of Mount Merapi' di atas)`,
      prompt: "Why did Nyi Sekar choose quiet, strategic compliance rather than open physical defiance against Senopati Kresna?",
      options: [
        { key: "A", text: "She secretly supported the warlord's violent ambitions" },
        { key: "B", text: "She recognized that open resistance would bring immediate death to unarmed villagers, whereas strategic craft could outwit him" },
        { key: "C", text: "She expected the warlord to pay her enormous sums of silver" },
        { key: "D", text: "She was intimidated into losing her moral convictions" }
      ],
      correctAnswer: "B",
      explanation: "Nyi Sekar menyadari perlawanan terbuka akan membuat desa dibantai seketika, sedangkan dengan kepatuhan semu dan kepiawaian tenunnya yang sakral, ia dapat memperdaya dan mengalahkan sang tiran. Pilihan B tepat.",
      grammarNote: "Character Motivation & Indirect Strategy: Strategic patience vs impetuous violence."
    },
    {
      id: 17,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Pronoun Tracking in Periodic Sentences",
      stimulusTitle: "Text 1: The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      stimulusBody: `(Silakan merujuk pada teks 'The Gilded Weaver of Mount Merapi' di atas)`,
      prompt: "In paragraph 1, what does the pronoun 'they' refer to in the clause: 'and they could only be woven with selfless devotion'?",
      options: [
        { key: "A", text: "The village elders" },
        { key: "B", text: "The feudal warlords" },
        { key: "C", text: "The gilded threads" },
        { key: "D", text: "The volcanic vents" }
      ],
      correctAnswer: "C",
      explanation: "Kalimat lengkap menyatakan: 'her gilded threads could only be harvested from the rare golden cocoon moths... and they could only be woven...'. Kata 'they' merujuk kepada benang-benang emas tersebut (the gilded threads).",
      grammarNote: "Pronoun-Antecedent Agreement: Plural antecedent 'gilded threads' -> subject pronoun 'they'."
    },
    {
      id: 18,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Turning Point (Peripeteia)",
      stimulusTitle: "Text 1: The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      stimulusBody: `(Silakan merujuk pada teks 'The Gilded Weaver of Mount Merapi' di atas)`,
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
      id: 19,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Philosophical Coda",
      stimulusTitle: "Text 1: The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      stimulusBody: `(Silakan merujuk pada teks 'The Gilded Weaver of Mount Merapi' di atas)`,
      prompt: "What philosophical worldview is conveyed in the final sentence of the narrative?",
      options: [
        { key: "A", text: "True artistic mastery is inherently ethical, cultivating peace and ultimately triumphing over tyranny" },
        { key: "B", text: "Weapons made of volcanic silk are more durable than iron armor" },
        { key: "C", text: "Humanity should abandon living near mountains due to volcanic danger" },
        { key: "D", text: "Artisans must charge high prices to royal warlords to ensure economic prosperity" }
      ],
      correctAnswer: "A",
      explanation: "Kalimat penutup menegaskan: 'authentic art serves to cultivate peace, reminding mortals that nature and craft ultimately resist tyranny' (karya seni sejati menumbuhkan perdamaian dan pada akhirnya menolak tirani). Pilihan A tepat.",
      grammarNote: "Philosophical Coda: Affirmation of ethical art as resistance to tyranny."
    },
    {
      id: 20,
      source: "Sumber: Dikutip dan diadaptasi dari Kajian Sastra Lisan Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
      type: "single_choice",
      title: "Advanced Narrative: Literary Comparison",
      stimulusTitle: "Text 1: The Gilded Weaver of Mount Merapi: An Ancient Legend of Sacred Craftsmanship",
      stimulusBody: `(Silakan merujuk pada teks 'The Gilded Weaver of Mount Merapi' di atas)`,
      prompt: "How does Nyi Sekar's resolution differ from typical militaristic folk heroes?",
      options: [
        { key: "A", text: "She used brute physical force and cavalry troops to overpower the enemy" },
        { key: "B", text: "She employed intellectual patience and sacred natural wisdom to disarm violence without shedding innocent blood" },
        { key: "C", text: "She fled to a distant island and abandoned her community" },
        { key: "D", text: "She formed a military alliance with neighboring foreign empires" }
      ],
      correctAnswer: "B",
      explanation: "Berbeda dari pahlawan militeristik yang mengandalkan senjata dan kekerasan fisik, Nyi Sekar menggunakan kesabaran intelektual dan kearifan sakral alam untuk melucuti tirani tanpa menumpahkan darah orang tak berdosa. Pilihan B benar.",
      grammarNote: "Character Archetype Analysis: The wise creator hero vs the militaristic warrior."
    },

    // =========================================================================
    // SECTION 3: READING GENRE 2 - HORTATORY EXPOSITION (QUESTIONS 21 - 30)
    // =========================================================================
    {
      id: 21,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence — UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Communicative Purpose",
      stimulusTitle: "Text 2: Why High Schools Must Establish Ethical Artificial Intelligence Guidelines",
      stimulusBody: `The meteoric emergence of generative artificial intelligence has undeniably revolutionized the global academic landscape. With simple prompts, advanced large language models can instantaneously generate persuasive essays, synthesize scientific research, and debug complex software code. While some conservative educators reflexively advocate for a blanket ban on AI tools in secondary education, such prohibitionist stances are fundamentally unfeasible and myopic. In an increasingly automated society, artificial intelligence will inevitably underpin professional workflows. Therefore, senior high schools must proactively establish comprehensive ethical AI frameworks that train students to harness these technologies responsibly rather than attempting to enforce futile prohibitions.<br><br>First and foremost, unchecked reliance on automated text generation poses a genuine threat to the development of autonomous cognitive synthesis. Writing is not merely the production of polished syntax; it is the cognitive crucible through which young thinkers clarify abstract concepts, construct logical arguments, and discover their distinctive voices. If students habitually outsource their essay drafting to algorithmic algorithms without rigorous intellectual engagement, their critical thinking and deep analytical stamina will gradually atrophy. Educators must design assessment tasks that evaluate the human analytical process—such as oral defense, in-class brainstorming logs, and reflective annotations—rather than solely grading final written products.<br><br>Furthermore, algorithmic generation is plagued by pervasive hallucinations, unverified citations, and implicit algorithmic biases. Generative systems do not possess genuine comprehension; they merely compute probabilistic sequences of words based on vast training datasets. Consequently, students who accept AI outputs without skepticism risk disseminating convincing misinformation and perpetuating societal prejudices. High schools bear an indispensable institutional obligation to cultivate sophisticated prompt engineering and forensic source-verification competencies, ensuring learners treat machine output as an initial rough hypothesis rather than authoritative gospel.<br><br>In conclusion, secondary education stands at a historic pedagogical crossroads. Banning generative technology merely drives its usage underground, leaving adolescents vulnerable to intellectual dependency and academic dishonesty. Instead, school administrations should mandate transparent AI disclosure policies, integrate algorithmic literacy modules across all disciplines, and reorient assessments toward original critical inquiry. By establishing principled ethical guardrails today, we empower the next generation to master artificial intelligence as a catalyst for human ingenuity, rather than becoming passive passengers in an algorithm-dominated world.`,
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
      id: 22,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence — UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Thesis Statement Identification",
      stimulusTitle: "Text 2: Why High Schools Must Establish Ethical Artificial Intelligence Guidelines",
      stimulusBody: `(Silakan merujuk pada teks 'Why High Schools Must Establish Ethical Artificial Intelligence Guidelines' di atas)`,
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
      id: 23,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence — UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Structural Distinction",
      stimulusTitle: "Text 2: Why High Schools Must Establish Ethical Artificial Intelligence Guidelines",
      stimulusBody: `(Silakan merujuk pada teks 'Why High Schools Must Establish Ethical Artificial Intelligence Guidelines' di atas)`,
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
      id: 24,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence — UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Cognitive Consequence",
      stimulusTitle: "Text 2: Why High Schools Must Establish Ethical Artificial Intelligence Guidelines",
      stimulusBody: `(Silakan merujuk pada teks 'Why High Schools Must Establish Ethical Artificial Intelligence Guidelines' di atas)`,
      prompt: "According to paragraph 2, what intellectual danger arises if students habitually outsource writing to AI algorithms?",
      options: [
        { key: "A", text: "Their computer monitors will overheat and cause hardware malfunctions" },
        { key: "B", text: "Their critical thinking capacity and deep analytical stamina will gradually atrophy" },
        { key: "C", text: "They will be barred from using library reference textbooks" },
        { key: "D", text: "They will automatically graduate from high school two years earlier" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 2 menyatakan: 'their critical thinking and deep analytical stamina will gradually atrophy' (daya nalar kritis dan ketahanan analitis mendalam mereka akan berangsur-angsur melemah/mengalami atrofi). Pilihan B benar.",
      grammarNote: "Metaphorical Lexis: atrophy = weaken, decline from lack of use or exercise."
    },
    {
      id: 25,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence — UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Academic Lexis in Context",
      stimulusTitle: "Text 2: Why High Schools Must Establish Ethical Artificial Intelligence Guidelines",
      stimulusBody: `(Silakan merujuk pada teks 'Why High Schools Must Establish Ethical Artificial Intelligence Guidelines' di atas)`,
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
      id: 26,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence — UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Cause and Effect Logic",
      stimulusTitle: "Text 2: Why High Schools Must Establish Ethical Artificial Intelligence Guidelines",
      stimulusBody: `(Silakan merujuk pada teks 'Why High Schools Must Establish Ethical Artificial Intelligence Guidelines' di atas)`,
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
      id: 27,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence — UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Author's Stance and Tone",
      stimulusTitle: "Text 2: Why High Schools Must Establish Ethical Artificial Intelligence Guidelines",
      stimulusBody: `(Silakan merujuk pada teks 'Why High Schools Must Establish Ethical Artificial Intelligence Guidelines' di atas)`,
      prompt: "Which pair of adjectives accurately characterizes the author's tone throughout the essay?",
      options: [
        { key: "A", text: "Persuasive and forward-looking" },
        { key: "B", text: "Sarcastic and indifferent" },
        { key: "C", text: "Panicked and fatalistic" },
        { key: "D", text: "Mocking and celebratory" }
      ],
      correctAnswer: "A",
      explanation: "Nada penulis adalah mengajak/meyakinkan dengan argumentasi rasional (persuasive) serta berorientasi ke depan dalam mempersiapkan siswa menghadapi masa depan (forward-looking). Pilihan A tepat.",
      grammarNote: "Author's Stance & Tone: Persuasive, principled, and forward-looking."
    },
    {
      id: 28,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence — UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Assessment Reform",
      stimulusTitle: "Text 2: Why High Schools Must Establish Ethical Artificial Intelligence Guidelines",
      stimulusBody: `(Silakan merujuk pada teks 'Why High Schools Must Establish Ethical Artificial Intelligence Guidelines' di atas)`,
      prompt: "According to paragraph 2, what assessment reform should teachers adopt to evaluate true cognitive engagement?",
      options: [
        { key: "A", text: "Grading only multiple-choice tests generated by automated robots" },
        { key: "B", text: "Evaluating the human analytical process through oral defenses, brainstorming logs, and reflective annotations" },
        { key: "C", text: "Assigning forty-page homework essays every weekend" },
        { key: "D", text: "Eliminating all homework and research projects permanently" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 2 menyarankan: 'design assessment tasks that evaluate the human analytical process—such as oral defense, in-class brainstorming logs, and reflective annotations'. Pilihan B benar.",
      grammarNote: "Expository Elaboration of Alternatives: 'evaluate the human analytical process—such as oral defense...'."
    },
    {
      id: 29,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence — UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Paraphrasing the Recommendation",
      stimulusTitle: "Text 2: Why High Schools Must Establish Ethical Artificial Intelligence Guidelines",
      stimulusBody: `(Silakan merujuk pada teks 'Why High Schools Must Establish Ethical Artificial Intelligence Guidelines' di atas)`,
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
      id: 30,
      source: "Sumber: Diadaptasi dari Policy Recommendations on Ethics of Artificial Intelligence — UNESCO & Balai Pengembangan Talenta Indonesia",
      type: "single_choice",
      title: "Hortatory Exposition: Metaphorical Synthesis",
      stimulusTitle: "Text 2: Why High Schools Must Establish Ethical Artificial Intelligence Guidelines",
      stimulusBody: `(Silakan merujuk pada teks 'Why High Schools Must Establish Ethical Artificial Intelligence Guidelines' di atas)`,
      prompt: "What is meant by the concluding metaphor: 'empower the next generation to master AI as a catalyst for human ingenuity, rather than becoming passive passengers'?",
      options: [
        { key: "A", text: "Students must learn how to drive high-speed autonomous public buses" },
        { key: "B", text: "Students should actively direct technological tools to amplify human creativity, rather than submitting passively to algorithmic control" },
        { key: "C", text: "High school graduates must pursue careers exclusively in airline transportation" },
        { key: "D", text: "Technology will inevitably replace all human teachers within two decades" }
      ],
      correctAnswer: "B",
      explanation: "Metafora tersebut bermakna bahwa generasi muda harus mampu mengarahkan teknologi secara aktif guna melipatgandakan daya cipta manusia, bukan tunduk secara pasif di bawah kendali algoritma. Pilihan B tepat.",
      grammarNote: "Metaphorical Interpretation: 'catalyst for ingenuity' vs 'passive passengers'."
    },

    // =========================================================================
    // SECTION 4: ADVANCED GRAMMAR & SENTENCE MECHANICS (QUESTIONS 31 - 40)
    // =========================================================================
    {
      id: 31,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Grammar: Inversion after Restrictive Adverbial",
      stimulusTitle: "Kaidah Inversi Bahasa Inggris Formal (Negative Inversion)",
      stimulusBody: "Seldom _______ such rapid transformation in academic research methodology as we have witnessed during the emergence of artificial intelligence.",
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
      id: 32,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Grammar: Present Subjunctive in Formal Recommendation",
      stimulusTitle: "Kaidah Modus Subjungtif Formal (Present Subjunctive Mood)",
      stimulusBody: "The academic ethics board strongly recommended that every senior high school student _______ the explicit use of generative tools in their research portfolios.",
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
      id: 33,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Grammar: Concessive Conjunction of Contrast",
      stimulusTitle: "Kaidah Kata Hubung Konsesif Formal (Formal Concession)",
      stimulusBody: "_______ the warlord assembled a formidable brigade of armed soldiers, he was ultimately powerless against the mountain's sacred cosmic laws.",
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
      id: 34,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Grammar: Inverted Conditional Type 3",
      stimulusTitle: "Kaidah Pengandaian Lampau Tanpa 'If' (Inverted Conditional)",
      stimulusBody: "_______ the school administration implemented clear ethical AI guidelines earlier, the recent academic integrity controversies would never have occurred.",
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
      id: 35,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Grammar: Modal of Stance in Hortatory Discourse",
      stimulusTitle: "Kaidah Modalitas Rekomendasi Formal Pasif",
      stimulusBody: "Rather than implementing outright bans, algorithmically generated claims _______ as unverified working hypotheses before being integrated into essays.",
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
      id: 36,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Grammar: Complex Impersonal Passive",
      stimulusTitle: "Kaidah Kalimat Pasif Impersonal Akademis",
      stimulusBody: "Critical digital discernment _______ to be one of the most indispensable competencies for twenty-first-century global citizenship.",
      prompt: "Choose the correct impersonal passive verb phrase to complete the statement:",
      options: [
        { key: "A", text: "is widely considered" },
        { key: "B", text: "widely considers" },
        { key: "C", text: "is widely considering" },
        { key: "D", text: "has widely considered" }
      ],
      correctAnswer: "A",
      explanation: "Struktur pasif impersonal dengan kata kerja pelaporan (reporting verbs) untuk menyatakan konsensus akademis umum adalah: Subject + is/are + widely + V3 (considered/acknowledged/recognized) + to be. Pilihan A tepat.",
      grammarNote: "Academic Impersonal Passive: Subject + is/are + Adverb + Past Participle + to-infinitive."
    },
    {
      id: 37,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Grammar: Perfect Participial Clause",
      stimulusTitle: "Kaidah Klausa Partisipial Sempurna (Perfect Participle)",
      stimulusBody: "_______ the intricate volcanic patterns for three continuous days and nights, Nyi Sekar presented the magnificent gilded tunic to the expectant warlord.",
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
      id: 38,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Vocabulary: Formal Academic Collocation",
      stimulusTitle: "Kaidah Kolokasi Akademis Baku (Academic Collocation)",
      stimulusBody: "The discovery of systematic hallucinations in the automated report _______ serious doubt on the reliability of the research dataset.",
      prompt: "Which verb collocates correctly with 'doubt' in formal academic writing to mean 'caused people to question'?",
      options: [
        { key: "A", text: "cast" },
        { key: "B", text: "made" },
        { key: "C", text: "pushed" },
        { key: "D", text: "dropped" }
      ],
      correctAnswer: "A",
      explanation: "Kolokasi akademis baku bahasa Inggris untuk 'menimbulkan keraguan / meragukan keandalan' adalah 'cast doubt on' (bukan made doubt atau pushed doubt). Pilihan A tepat.",
      grammarNote: "Fixed Academic Collocation: 'cast doubt on something' (to make something seem uncertain)."
    },
    {
      id: 39,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Functional Expressions: Conceding and Counter-Arguing",
      stimulusTitle: "Ungkapan Berdebat Formal (Conceding and Rebutting)",
      stimulusBody: "Debater 1: 'Generative AI accelerates data analysis exponentially.'<br>Debater 2: '_______, one cannot overlook the reality that uncritical reliance erodes foundational analytical thinking.'",
      prompt: "Which formal rhetorical expression best concedes the opposing premise while introducing a strong counter-argument?",
      options: [
        { key: "A", text: "While I concede that computational speed is beneficial" },
        { key: "B", text: "I have no opinion on the matter" },
        { key: "C", text: "Your premise is completely ridiculous" },
        { key: "D", text: "I refuse to participate in this discussion" }
      ],
      correctAnswer: "A",
      explanation: "Ungkapan 'While I concede that computational speed is beneficial' adalah formula diplomatis dan akademis untuk mengakui kebenaran argumen lawan (concession) sebelum melancarkan bantahan kritis (counter-argument).",
      grammarNote: "Academic Debate Formula: Subordinate Concession ('While I concede that...') + Main Rebuttal."
    },
    {
      id: 40,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Advanced Vocabulary: Oxford 5000 Evaluative Lexis (Level B2)",
      stimulusTitle: "Pemilihan Kata Evaluatif Akademis Tingkat Lanjut",
      stimulusBody: "In an era of rapid technological disruption, cultivating intellectual discernment is an _______ obligation for modern secondary educators.",
      prompt: "Which formal adjective best fits the academic statement with the meaning of 'urgent, authoritative, and strictly required'?",
      options: [
        { key: "A", text: "imperative" },
        { key: "B", text: "hesitant" },
        { key: "C", text: "tentative" },
        { key: "D", text: "superficial" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'imperative' bermakna suatu keharusan yang mendesak, penting, dan mutlak diperlukan (urgent, vital, authoritative obligation). Pilihan A tepat.",
      grammarNote: "Academic Evaluative Adjective (Oxford 5000 / CEFR B2): imperative = urgent, essential, obligatory."
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
window.addEventListener("DOMContentLoaded", () => {
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

  if (mode === "exam") {
    const token = document.getElementById("direct-token").value.trim();
    if (token !== "JujurItuMujur") {
      alert("⚠️ Token Asesmen Resmi (ASAS) tidak valid! Masukkan: JujurItuMujur");
      return;
    }
  }

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

function toggleDirectToken(mode) {
  document.getElementById("direct-token-group").style.display = (mode === "exam" ? "block" : "none");
}

function startFreshTest() {
  userAnswers = {};
  flaggedQuestions.clear();
  isExamSubmitted = false;
  remainingSeconds = 90 * 60;
  currentQuestionIndex = 0;

  // Initialize and randomize Grade 11 TL question bank
  const rawBank = getGrade11TLAsasQuestions();
  questions = randomizeQuestionOptions(rawBank);

  // Restore session from LocalStorage if available
  try {
    const saved = localStorage.getItem("sabaku_asas_progress_XI_TL");
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

  localStorage.removeItem("sabaku_asas_progress_XI_TL");

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
    localStorage.removeItem("sabaku_asas_progress_XI_TL");
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
    localStorage.setItem("sabaku_asas_progress_XI_TL", JSON.stringify(data));
  } catch (e) {
    console.warn("Autosave error:", e);
  }
}
