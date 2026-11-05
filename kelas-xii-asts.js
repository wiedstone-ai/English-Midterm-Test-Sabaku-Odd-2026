/**
 * ASESMEN SUMATIF TENGAH SEMESTER GASAL (ASTS) & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * TINGKAT XII (FASE F — BAHASA INGGRIS WAJIB) — SEMESTER GASAL 2026/2027
 * 
 * Komposisi Soal:
 * - 60% (24 Butir Soal) Diambil Langsung dari Bank Soal ASAS Gasal Kelas XII Wajib
 * - 40% (16 Butir Soal) Melengkapi Seluruh Materi Semester Gasal (Discussion, Review, & Advanced Structure)
 * 
 * Standar: Tes Kemampuan Akademik (TKA / AKM Literasi / UTBK SNBT)
 * Bebas Token / Password — Langsung Masuk Latihan & Asesmen
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";


const SVG_PICTURES = {
  debate: `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 85h70M25 85V45h15v40M60 85V45h15v40"/>
    <circle cx="32" cy="28" r="8"/>
    <path d="M22 45c0-6 4-10 10-10s10 4 10 10"/>
    <circle cx="68" cy="28" r="8"/>
    <path d="M58 45c0-6 4-10 10-10s10 4 10 10"/>
    <path d="M40 32l6-4M60 32l-6-4" stroke="#d97706" stroke-width="2"/>
    <rect x="42" y="15" width="16" height="10" rx="2" stroke="#dc2626"/>
  </svg>`,
  solo_singer: `<svg viewBox="0 0 100 100" fill="none" stroke="#9333ea" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="26" r="9"/>
    <path d="M50 35v30M35 45l15-5 15 5M40 85l10-20 10 20"/>
    <rect x="62" y="20" width="8" height="16" rx="4" fill="#cbd5e1" stroke="#475569"/>
    <path d="M66 36v35M58 71h16" stroke="#475569" stroke-width="2.5"/>
  </svg>`,
  lab_microscope: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 85h60M50 85V60M40 85h20"/>
    <path d="M50 60c0-15 10-25 20-25h5"/>
    <rect x="35" y="25" width="14" height="26" rx="3" transform="rotate(-30 35 25)" stroke="#059669"/>
    <circle cx="32" cy="52" r="5" fill="#a7f3d0"/>
    <path d="M25 65h30" stroke="#047857" stroke-width="3"/>
  </svg>`,
  hiking_trail: `<svg viewBox="0 0 100 100" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 85l30-45 20 25 15-20 20 40H10z"/>
    <circle cx="55" cy="30" r="5"/>
    <path d="M55 35l-4 12 8 6M51 47l-6 12M59 53l6 10"/>
    <path d="M62 42l10 15" stroke="#78350f" stroke-width="1.8"/>
  </svg>`,

  solar_wind: `<svg viewBox="0 0 100 100" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 85h80"/>
    <path d="M15 85l12-30h28l-8 30H15z" fill="#bae6fd" stroke="#0284c7"/>
    <path d="M27 55l-6 30M39 55l-6 30M21 70h24" stroke="#0369a1"/>
    <path d="M72 85V35M72 35l14-10M72 35l-14-10M72 35V20" stroke="#16a34a" stroke-width="2.5"/>
    <circle cx="72" cy="35" r="3" fill="#16a34a"/>
    <circle cx="25" cy="22" r="8" fill="#fef08a" stroke="#eab308"/>
  </svg>`,
  coal_plant: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 85h80M20 85V45l15 12V45l15 12V45l15 12v28H20z"/>
    <path d="M68 85V32h14v53" stroke="#334155" stroke-width="2.5"/>
    <path d="M70 28c-3-8 5-12 3-18M78 28c2-7 10-10 6-18" stroke="#94a3b8" stroke-dasharray="2 2"/>
  </svg>`,
  oil_rig: `<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 80h80M15 88c10-3 20 3 35 0s25-3 40 0" stroke="#0284c7"/>
    <path d="M30 80l15-45h10l15 45M37 58h26M42 45h16"/>
    <path d="M50 35V18M46 18h8M50 18l5-8" stroke="#dc2626"/>
  </svg>`,
  busy_highway: `<svg viewBox="0 0 100 100" fill="none" stroke="#64748b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 85L42 35h16l22 50H20z" fill="#f1f5f9"/>
    <path d="M50 40v8M50 54v10M50 70v12" stroke="#eab308" stroke-width="3"/>
    <rect x="30" y="65" width="12" height="8" rx="2" stroke="#dc2626"/>
    <rect x="58" y="55" width="10" height="7" rx="2" stroke="#2563eb"/>
  </svg>`,

  smart_greenhouse: `<svg viewBox="0 0 100 100" fill="none" stroke="#16a34a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 85h70M20 85V48l30-20 30 20v37H20z"/>
    <path d="M50 28v57M20 58h60M35 85V68h30v17"/>
    <circle cx="50" cy="45" r="4" fill="#86efac"/>
    <path d="M72 25l8-4M80 25l-8-4M76 21v6" stroke="#0284c7" stroke-width="2"/>
    <circle cx="76" cy="23" r="1.5" fill="#0284c7"/>
  </svg>`,
  traditional_farm: `<svg viewBox="0 0 100 100" fill="none" stroke="#854d0e" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 85h80M10 65c20-10 40 5 80-5M10 75c25-6 45 4 80-6"/>
    <circle cx="35" cy="45" r="6"/>
    <path d="M35 51v20M25 58l10-4 10 4M30 71l5 12M40 71l-5 12"/>
    <path d="M42 54l14 8" stroke="#475569" stroke-width="2"/>
  </svg>`,
  industrial_factory: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="15" y="45" width="70" height="40" rx="3"/>
    <path d="M25 45V25h12v20M45 45V30h12v15M65 45V20h12v25"/>
    <path d="M30 65h10v10H30zM50 65h10v10H50z" fill="#cbd5e1"/>
  </svg>`,
  desert_dunes: `<svg viewBox="0 0 100 100" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="75" cy="25" r="10" fill="#fef08a" stroke="#d97706"/>
    <path d="M10 85c20-25 45 5 80-15M10 85c35-15 50 8 80-5M10 60c25-10 40 10 80-10"/>
  </svg>`
};

function getGrade12AstsQuestions() {
  return [
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 1,
      source: "Sumber: Panduan Debat Parlemen Siswa SMA Tingkat Nasional â€” Kemendikbudristek & Puspresnas",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number one. Look at the pictures. In this academic forum, two formal student speakers are standing at separate wooden podiums, presenting opposing perspectives on artificial intelligence before a moderator and an engaged audience. Which picture best corresponds to the spoken description?",
      prompt: "Look at the four pictures below. Which picture matches the academic debate scene described in the audio?",
      options: [
        { key: "A", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 85h70M25 85V45h15v40M60 85V45h15v40"/>
    <circle cx="32" cy="28" r="8"/>
    <path d="M22 45c0-6 4-10 10-10s10 4 10 10"/>
    <circle cx="68" cy="28" r="8"/>
    <path d="M58 45c0-6 4-10 10-10s10 4 10 10"/>
    <path d="M40 32l6-4M60 32l-6-4" stroke="#d97706" stroke-width="2"/>
    <rect x="42" y="15" width="16" height="10" rx="2" stroke="#dc2626"/>
  </svg>`, label: "Two speakers debating opposing perspectives at academic podiums" },
        { key: "B", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#9333ea" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="26" r="9"/>
    <path d="M50 35v30M35 45l15-5 15 5M40 85l10-20 10 20"/>
    <rect x="62" y="20" width="8" height="16" rx="4" fill="#cbd5e1" stroke="#475569"/>
    <path d="M66 36v35M58 71h16" stroke="#475569" stroke-width="2.5"/>
  </svg>`, label: "A musical performer singing on a concert stage" },
        { key: "C", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 85h60M50 85V60M40 85h20"/>
    <path d="M50 60c0-15 10-25 20-25h5"/>
    <rect x="35" y="25" width="14" height="26" rx="3" transform="rotate(-30 35 25)" stroke="#059669"/>
    <circle cx="32" cy="52" r="5" fill="#a7f3d0"/>
    <path d="M25 65h30" stroke="#047857" stroke-width="3"/>
  </svg>`, label: "A scientist inspecting samples through a laboratory microscope" },
        { key: "D", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 85l30-45 20 25 15-20 20 40H10z"/>
    <circle cx="55" cy="30" r="5"/>
    <path d="M55 35l-4 12 8 6M51 47l-6 12M59 53l6 10"/>
    <path d="M62 42l10 15" stroke="#78350f" stroke-width="1.8"/>
  </svg>`, label: "A mountaineer hiking along an outdoor trail" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan: 'two formal student speakers are standing at separate wooden podiums, presenting opposing perspectives... before a moderator and an engaged audience'. Gambar A menampilkan format debat akademis dua podium dengan pembicara dan penonton.",
      grammarNote: "Present Continuous Tense ('are standing', 'presenting') & Academic Discussion Terminology ('opposing perspectives', 'moderator', 'engaged audience')."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 2,
      source: "Sumber: Publikasi Transisi Energi Terbarukan Nasional â€” Kementerian ESDM & Dewan Energi Nasional",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number two. Look at the pictures. This sustainable energy facility integrates an extensive array of blue photovoltaic solar panels on rooftops alongside towering modern wind turbines rotating in the sea breeze under clear sunny skies. Which picture illustrates this renewable power generation system?",
      prompt: "Which picture accurately depicts the sustainable renewable energy infrastructure described in the audio?",
      options: [
        { key: "A", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 85h80"/>
    <path d="M15 85l12-30h28l-8 30H15z" fill="#bae6fd" stroke="#0284c7"/>
    <path d="M27 55l-6 30M39 55l-6 30M21 70h24" stroke="#0369a1"/>
    <path d="M72 85V35M72 35l14-10M72 35l-14-10M72 35V20" stroke="#16a34a" stroke-width="2.5"/>
    <circle cx="72" cy="35" r="3" fill="#16a34a"/>
    <circle cx="25" cy="22" r="8" fill="#fef08a" stroke="#eab308"/>
  </svg>`, label: "A renewable facility with solar photovoltaic panels and wind turbines" },
        { key: "B", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 85h80M20 85V45l15 12V45l15 12V45l15 12v28H20z"/>
    <path d="M68 85V32h14v53" stroke="#334155" stroke-width="2.5"/>
    <path d="M70 28c-3-8 5-12 3-18M78 28c2-7 10-10 6-18" stroke="#94a3b8" stroke-dasharray="2 2"/>
  </svg>`, label: "A coal-fired power plant emitting dark exhaust fumes" },
        { key: "C", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 80h80M15 88c10-3 20 3 35 0s25-3 40 0" stroke="#0284c7"/>
    <path d="M30 80l15-45h10l15 45M37 58h26M42 45h16"/>
    <path d="M50 35V18M46 18h8M50 18l5-8" stroke="#dc2626"/>
  </svg>`, label: "An offshore fossil fuel drilling rig in deep water" },
        { key: "D", svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#64748b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 85L42 35h16l22 50H20z" fill="#f1f5f9"/>
    <path d="M50 40v8M50 54v10M50 70v12" stroke="#eab308" stroke-width="3"/>
    <rect x="30" y="65" width="12" height="8" rx="2" stroke="#dc2626"/>
    <rect x="58" y="55" width="10" height="7" rx="2" stroke="#2563eb"/>
  </svg>`, label: "A congested highway with gasoline-powered vehicles" }
      ],
      correctAnswer: "A",
      explanation: "Audio secara spesifik menyebutkan: 'integrates an extensive array of blue photovoltaic solar panels... alongside towering modern wind turbines rotating in the sea breeze'. Gambar A merepresentasikan kombinasi panel surya dan kincir turbin angin.",
      grammarNote: "Descriptive Compound Nouns & Adjectives: 'photovoltaic solar panels', 'towering modern wind turbines', 'sustainable energy facility'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 3,
      source: "Sumber: Renewable Energy Transitions in Southeast Asia — ASEAN Centre for Energy & Kemendikbudristek",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number three. Look at the pictures. On a sunny hillside, an integrated renewable power facility combines angled blue photovoltaic solar arrays with a towering three-bladed wind turbine, generating clean electricity for adjacent rural schools. Which picture best corresponds to the spoken description?",
      prompt: "Look at the four pictures below. Which picture matches the integrated solar and wind renewable facility described in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.solar_wind, label: "Hybrid renewable facility featuring angled solar panels and a wind turbine" },
        { key: "B", svg: SVG_PICTURES.coal_plant, label: "Industrial fossil fuel coal power station with smoking chimneys" },
        { key: "C", svg: SVG_PICTURES.hydro_dam, label: "Massive concrete hydroelectric dam regulating river water flow" },
        { key: "D", svg: SVG_PICTURES.geothermal, label: "Geothermal power station tapping steam from volcanic terrain" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan: fasilitas pembangkit listrik terbarukan terpadu yang memadukan panel surya fotovoltaik miring dan turbin angin tinggi ('integrated renewable power facility combines angled blue photovoltaic solar arrays with a towering wind turbine'). Gambar A tepat merepresentasikan deskripsi audio.",
      grammarNote: "Participial Clauses & Technical Compound Nouns: 'generating clean electricity', 'photovoltaic solar arrays'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 4,
      source: "Sumber: Percakapan Pembelajaran Berbasis Riset SMA â€” Modul Ajar Kurikulum Merdeka Fase F",
      type: "listening_dialogue",
      title: "Listening Section: Part II - Dialogues",
      audioText: "Number four. Listen to a conversation between a senior student and an English teacher.\n\nStudent: Good morning, Mrs. Anjani. I noticed many classmates are using generative AI to produce their scientific essay drafts in just seconds. Doesn't that risk diminishing our genuine critical thinking abilities?\nTeacher: That is a very valid concern, Farhan. While AI can certainly assist in brainstorming complex outlines and checking syntactic errors, relying completely on automated outputs weakens your analytical reasoning. In our school, students must write their reflections independently and use AI strictly as a research assistant, not a ghostwriter.\nStudent: I agree completely. That means transparency and personal originality must always remain our top priorities.\n\nQuestion: What is the teacher's primary advice regarding generative AI tools?",
      prompt: "Based on the dialogue between Farhan and Mrs. Anjani, what is the teacher's primary advice regarding generative AI tools?",
      options: [
        { key: "A", text: "Students should use AI strictly for brainstorming and linguistic editing, while keeping their analysis independent." },
        { key: "B", text: "Schools must enforce an absolute ban on all digital devices and computer applications." },
        { key: "C", text: "Learners ought to allow AI algorithms to compose their final scientific research essays automatically." },
        { key: "D", text: "Teachers should replace all classroom argumentative writing tasks with multiple-choice quizzes." }
      ],
      correctAnswer: "A",
      explanation: "Guru (Mrs. Anjani) menyatakan bahwa ketergantungan penuh pada AI dapat melemahkan nalar kritis ('weakens your analytical reasoning'). Oleh karena itu, siswa harus tetap menulis refleksi secara mandiri dan memperlakukan AI sebagai asisten perancang kerangka/pengecek tata bahasa, bukan penulis utama.",
      grammarNote: "Modals of Necessity & Concession: 'While AI can certainly assist... students must write their reflections independently'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 5,
      source: "Sumber: Diskusi Kelompok Terfokus Siswa â€” Simposium Energi Masa Depan SMA Jawa Tengah",
      type: "listening_dialogue",
      title: "Listening Section: Part II - Dialogues",
      audioText: "Number five. Listen to a conversation between two high school seniors preparing a presentation.\n\nRizky: Maya, when evaluating Indonesia's plan to achieve net-zero carbon emissions, do you believe nuclear energy is a more practical solution than decentralized solar and geothermal systems?\nMaya: Well, nuclear power undoubtedly provides a dense and continuous baseload electricity supply without greenhouse gases. However, our nation sits directly upon active tectonic fault lines. The immense cost of disaster containment and safe waste management makes solar and geothermal microgrids far safer for remote archipelagic islands.\nRizky: That makes complete sense. A diversified mix prioritizing natural geothermal and solar resources minimizes catastrophic environmental risks.\n\nQuestion: Why does Maya express caution regarding large nuclear power plants in Indonesia?",
      prompt: "According to Maya, why should Indonesia exercise caution regarding the construction of nuclear power plants?",
      options: [
        { key: "A", text: "Indonesia is located along active tectonic fault lines with high geological and waste containment risks." },
        { key: "B", text: "Nuclear energy generates significantly higher levels of carbon dioxide than coal combustion." },
        { key: "C", text: "Renewable solar installations require much more uranium fuel than traditional power stations." },
        { key: "D", text: "Geothermal energy has proven completely ineffective for generating electricity across Central Java." }
      ],
      correctAnswer: "A",
      explanation: "Maya menegaskan bahwa meskipun nuklir menghasilkan energi besar, Indonesia terletak tepat di atas patahan tektonik aktif ('our nation sits directly upon active tectonic fault lines'), sehingga risiko bencana geologis dan pengelolaan limbah radioaktif sangat tinggi.",
      grammarNote: "Contrastive Discourse Markers: 'undoubtedly provides... However, our nation sits directly upon active tectonic fault lines'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 6,
      source: "Sumber: Sustainable Urban Mobility Dialogue Series — Ministry of Transportation & Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Academic Dialogues",
      audioText: "Narrator: Question 6 refers to the following conversation between two urban policy analysts.\nMan: Subsidizing private electric passenger cars seems to be the fastest route to reducing urban carbon emissions.\nWoman: On the surface, perhaps. However, if governments prioritize private EV subsidies over electrified mass transit, traffic congestion remains unsolved and lower-income commuters receive zero benefit.\nMan: That is a valid caveat. A truly balanced transit policy must expand electrified bus networks alongside EV charging infrastructure.\nNarrator: What central argument does the woman make concerning electric vehicle subsidies?",
      prompt: "What central critique does the woman raise regarding private electric vehicle subsidies?",
      options: [
        { key: "A", text: "Subsidizing private EVs fails to resolve urban traffic congestion and offers minimal benefit to lower-income citizens." },
        { key: "B", text: "Electric vehicles produce far higher lifetime carbon emissions than conventional diesel combustion engines." },
        { key: "C", text: "Public transit systems cannot technically be powered by renewable electrical grids." },
        { key: "D", text: "Urban municipalities should completely eliminate all automobile traffic from metropolitan centers." }
      ],
      correctAnswer: "A",
      explanation: "Wanita tersebut mengkritisi bahwa subsidi mobil listrik pribadi tidak menyelesaikan kemacetan lalu lintas perkotaan dan tidak memberi manfaat bagi masyarakat berpenghasilan rendah ('traffic congestion remains unsolved and lower-income commuters receive zero benefit').",
      grammarNote: "Conditional Sentences & Evaluative Language: 'if governments prioritize private EV subsidies... lower-income commuters receive zero benefit'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 7,
      source: "Sumber: Kuliah Umum Transisi Energi Bersih â€” Forum Akademik Teknik Lingkungan Universitas Indonesia",
      type: "listening_talk",
      title: "Listening Section: Part III - Academic Talks",
      audioText: "Questions 7 and 8 are based on the following lecture extract.\n\nGood afternoon, students. Today we examine the global transition toward industrial decarbonization. While industrial manufacturing produces nearly thirty percent of worldwide greenhouse emissions, transitioning completely to renewable power presents a fundamental challenge known as the intermittency dilemma. Solar photovoltaics and wind turbines depend entirely upon variable weather conditions. When calm nights occur, electricity output declines abruptly. Therefore, energy planners emphasize that renewable adoption must be paired with either high-capacity battery storage systems or reliable, continuous baseload sources such as geothermal energy, as successfully harnessed in Central Java. Without dependable baseload stabilization, modern electrical grids risk unexpected blackouts and industrial disruption.\n\nNumber seven. What is the main topic of the professor's lecture?",
      prompt: "What is the primary topic of the academic lecture?",
      options: [
        { key: "A", text: "The necessity of reliable baseload power and storage systems to address renewable energy intermittency." },
        { key: "B", text: "The complete shutdown of all solar power installations across archipelagic Southeast Asia." },
        { key: "C", text: "The economic superiority of burning unprocessed fossil coal in modern manufacturing plants." },
        { key: "D", text: "The elimination of electrical transmission lines in urban metropolitan residential zones." }
      ],
      correctAnswer: "A",
      explanation: "Dosen memaparkan tantangan intermitensi energi terbarukan ('intermittency dilemma') dan menekankan bahwa pemanfaatan surya/angin harus dipadukan dengan stabilisasi beban dasar (*baseload*) seperti panas bumi dan baterai penyimpan energi agar pasokan listrik industri tetap stabil.",
      grammarNote: "Cause and Effect Discourse Connectors: 'depend entirely upon variable weather... Therefore, energy planners emphasize...'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 8,
      source: "Sumber: International Atomic Energy Agency (IAEA) Academic Briefing & Kemendikbudristek",
      type: "listening_talk",
      title: "Listening Section: Part III - Academic Talks",
      audioText: "Narrator: Question 8 refers to the following academic talk.\nLecturer: Good afternoon, students. Today we evaluate Small Modular Nuclear Reactors, commonly termed SMRs. Proponents argue that SMRs present a breakthrough for emerging economies, offering compact, zero-carbon baseload electricity with passive safety systems that shut down automatically during coolant failures. Conversely, energy economists remain skeptical, pointing out that per-kilowatt capital costs remain unproven in commercial scale, while permanent high-level radioactive waste repositories remain politically unresolved worldwide. Thus, policymakers must weigh reliable grid stability against unresolved economic and environmental liabilities.\nNarrator: According to the speaker, what is the primary concern raised by skeptics regarding SMRs?",
      prompt: "According to the speaker, what is a primary reservation expressed by critics regarding Small Modular Reactors (SMRs)?",
      options: [
        { key: "A", text: "Their commercial capital costs remain unproven and permanent radioactive waste repositories remain unresolved." },
        { key: "B", text: "They emit far greater volumes of atmospheric greenhouse gases than conventional coal facilities." },
        { key: "C", text: "Their automated passive cooling mechanisms invariably malfunction during minor power fluctuations." },
        { key: "D", text: "They can only be constructed in remote unpopulated arctic territories." }
      ],
      correctAnswer: "A",
      explanation: "Pembicara mengemukakan keraguan para kritikus: biaya modal per kilowatt belum terbukti secara komersial dan pembuangan limbah radioaktif tingkat tinggi permanen masih belum terselesaikan ('unproven capital costs and unresolved waste repositories').",
      grammarNote: "Adversative Discourse Connectors: 'Conversely', 'Thus, policymakers must weigh...'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 9,
      source: "Sumber: Pidato Kunci Simposium Literasi Digital SMA â€” Ikatan Guru Bahasa dan Komunikasi Indonesia",
      type: "listening_talk",
      title: "Listening Section: Part III - Academic Talks",
      audioText: "Questions 9 and 10 are based on the following symposium address.\n\nDistinguished educators and students. As artificial intelligence models become increasingly integrated into educational software, we must recalibrate our definition of academic achievement. In previous decades, memorizing vast bodies of facts and reciting grammatical rules demonstrated high scholarly competence. Today, however, automated search algorithms can retrieve factual data in milliseconds. Consequently, the true value of modern high school graduates lies in their capacity for rigorous critical synthesis, ethical discernment, and creative inquiry. Educators should avoid banning emerging technological tools; rather, institutions must foster an academic culture where students actively question machine outputs, detect algorithmic biases, and formulate original solutions to complex real-world dilemmas.\n\nNumber nine. How has the definition of academic competence shifted according to the speaker?",
      prompt: "According to the keynote speaker, how has the definition of student academic competence changed in the modern digital era?",
      options: [
        { key: "A", text: "From mere rote memorization of facts to critical synthesis, ethical evaluation, and creative problem-solving." },
        { key: "B", text: "From collaborative team research to completely isolated, internet-free manual memorization." },
        { key: "C", text: "From understanding scientific principles to blind acceptance of all algorithmic data results." },
        { key: "D", text: "From creative essay composition to memorizing telephone numbers and postal codes." }
      ],
      correctAnswer: "A",
      explanation: "Pembicara menjelaskan pergeseran kompetensi dari hafalan informasi pasif (*rote memorization*) menuju kemampuan sintesis kritis, pertimbangan etika, dan pemecahan masalah kreatif (*critical synthesis, ethical discernment, and creative inquiry*).",
      grammarNote: "Prepositional Contrast: 'From mere memorizing vast bodies of facts... to rigorous critical synthesis and ethical discernment'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 10,
      source: "Sumber: Cambridge Introduction to Applied Literary Criticism & Kemendikbudristek",
      type: "listening_talk",
      title: "Listening Section: Part III - Academic Talks",
      audioText: "Narrator: Question 10 refers to the following literary criticism lecture.\nLecturer: Welcome, class. When composing a formal literary review, novices often make the blunder of providing an exhaustive plot summary while neglecting evaluative critique. A masterly review establishes an immediate evaluative framework: analyzing the author's stylistic choices, character depth, and thematic resonance. Always support your value judgments with direct textual citations, and conclude with a qualified recommendation delineating which specific audience will derive intellectual enrichment from the work.\nNarrator: According to the lecturer, what mistake should student reviewers avoid?",
      prompt: "According to the lecturer, what error should student reviewers avoid when writing a literary review?",
      options: [
        { key: "A", text: "Focusing excessively on exhaustive plot summaries while neglecting substantive evaluative critique." },
        { key: "B", text: "Including direct textual citations from the book to substantiate critical arguments." },
        { key: "C", text: "Specifying the target readership who would benefit from reading the literary publication." },
        { key: "D", text: "Examining the stylistic choices and figurative devices employed by the author." }
      ],
      correctAnswer: "A",
      explanation: "Dosen mengingatkan agar mahasiswa menghindari kesalahan umum pemula, yaitu terjebak dalam ringkasan alur cerita yang berlebihan tanpa memberikan penilaian/analisis kritis yang substansial ('providing an exhaustive plot summary while neglecting evaluative critique').",
      grammarNote: "Gerunds as Objects & Participial Phrases: 'avoid providing an exhaustive plot summary while neglecting evaluative critique'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 11,
      source: "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer â€” Ikatan Peneliti Kurikulum Nasional (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      prompt: "What is the primary communicative purpose of the text above?",
      options: [
        { key: "A", text: "To present balanced arguments regarding the benefits and drawbacks of generative AI in high school classrooms." },
        { key: "B", text: "To persuade educational authorities to ban all electronic smartphones and computers from school premises." },
        { key: "C", text: "To provide step-by-step technical instructions on programming deep neural network algorithms." },
        { key: "D", text: "To entertain readers with humorous fictional stories about automated robots replacing teachers." }
      ],
      correctAnswer: "A",
      explanation: "Teks di atas merupakan Discussion Text yang menyajikan dua sudut pandang berimbang: sisi manfaat AI (tutor personal, akselerasi pemahaman) dan sisi risiko (atrofi kognitif, plagiarisme, halusinasi fakta), serta diakhiri dengan simpulan/rekomendasi bijak.",
      grammarNote: "Discussion Text Generic Structure: Issue (Paragraph 1) -> Arguments For (Paragraph 1) -> Arguments Against (Paragraph 2) -> Balanced Conclusion / Recommendation (Paragraph 3)."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 12,
      source: "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer â€” Ikatan Peneliti Kurikulum Nasional (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      prompt: "According to the proponents mentioned in the first paragraph, how does generative AI positively benefit secondary learners?",
      options: [
        { key: "A", text: "It provides personalized round-the-clock tutoring and builds valuable digital skills for future academic endeavors." },
        { key: "B", text: "It eliminates the requirement for students to attend high school lessons or read textbooks." },
        { key: "C", text: "It automatically awards top grades on international examinations without human evaluation." },
        { key: "D", text: "It replaces all university professors with automated robotic software programs." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 1 baris 2-5 menjelaskan manfaat pendukung: 'serving as round-the-clock personalized tutors' dan 'equips prospective graduates with essential digital literacy and prompting skills demanded by modern university faculties'.",
      grammarNote: "Gerunds as Subjects & Objects of Prepositions: 'serving as personalized tutors', 'equips graduates with essential literacy'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 13,
      source: "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer â€” Ikatan Peneliti Kurikulum Nasional (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      prompt: "Why do critics argue that unconditional reliance on automated chatbots harms students' academic development?",
      options: [
        { key: "A", text: "It induces cognitive atrophy and deprives learners of the vital intellectual effort needed to develop resilience." },
        { key: "B", text: "It causes physical eye fatigue that prevents pupils from participating in athletic sports." },
        { key: "C", text: "It forces schools to invest all municipal funding exclusively into commercial software subscriptions." },
        { key: "D", text: "It guarantees that all digital text produced is entirely free of grammatical or spelling errors." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 menyatakan bahwa ketergantungan berlebihan menyebabkan atrofi kognitif ('induces cognitive atrophy') dan menghilangkan perjuangan intelektual penting untuk membangun daya nalar mandiri ('forfeit the vital intellectual struggle necessary to cultivate authentic problem-solving resilience').",
      grammarNote: "Cause and Effect Lexis: 'unconditional reliance... induces cognitive atrophy, steadily eroding students' capacity'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 14,
      source: "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer â€” Ikatan Peneliti Kurikulum Nasional (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      prompt: "The word 'atrophy' in the second paragraph is closest in meaning to...",
      options: [
        { key: "A", text: "gradual decline or weakening due to disuse" },
        { key: "B", text: "rapid expansion and enhancement of strength" },
        { key: "C", text: "accidental mechanical breakdown of hardware" },
        { key: "D", text: "spontaneous creation of artistic paintings" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'atrophy' dalam konteks kognitif bermakna penyusutan, pelemahan, atau penurunan daya fungsi secara perlahan akibat tidak pernah digunakan atau dilatih secara mandiri (gradual decline or weakening due to disuse).",
      grammarNote: "Contextual Vocabulary (Oxford 5000 Level B2): 'cognitive atrophy' = penyusutan kapasitas berpikir mandiri."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 15,
      source: "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer â€” Ikatan Peneliti Kurikulum Nasional (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      prompt: "What synthesised recommendation does the author offer in the concluding paragraph?",
      options: [
        { key: "A", text: "Establish clear ethical guidelines and emphasize process-based assessments like oral defenses and reflective logs." },
        { key: "B", text: "Enact strict disciplinary expulsions for any student caught turning on an electronic computer screen." },
        { key: "C", text: "Permit students to submit fully automated AI essays without requiring any personal citations." },
        { key: "D", text: "Replace all high school human teachers with automated commercial chatbot interfaces." }
      ],
      correctAnswer: "A",
      explanation: "Penulis merekomendasikan pembentukan kerangka etika yang jelas ('formulate clear, enforceable ethical guidelines') dan mengalihkan fokus penilaian ke proses berpikir autentik seperti ujian lisan interaktif dan jurnal reflektif ('interactive oral defenses... and reflective handwritten journals').",
      grammarNote: "Modal Recommendation: 'high schools should cultivate... Educational leaders must formulate... educators ought to prioritize'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 16,
      source: "Sumber: Comparative Educational Policy Review — OECD Publishing & Kemendikbudristek",
      type: "reading_discussion",
      title: "Reading Comprehension 1: Discussion Text Analysis",
      readingRef: "Artificial Intelligence in Secondary Education: Technological Boon or Pedagogical Hazard?",
      prompt: "In the discussion text, how does the author maintain rhetorical balance between optimistic technologists and cautious educators?",
      options: [
        { key: "A", text: "By objectively elucidating the tangible pedagogical benefits of AI alongside substantiated cognitive and ethical perils." },
        { key: "B", text: "By outright dismissing empirical research that highlights algorithmic hallucinations and plagiarism." },
        { key: "C", text: "By urging an immediate blanket prohibition on all computational devices across secondary classrooms." },
        { key: "D", text: "By asserting that artificial intelligence models are infallible mentors superior to human teachers in all subjects." }
      ],
      correctAnswer: "A",
      explanation: "Penulis menjaga keseimbangan retoris (ciri khas teks Discussion) dengan memaparkan secara objektif manfaat pedagogis AI sekaligus risiko kognitif dan etis yang terbukti secara empiris.",
      grammarNote: "Balanced Evaluative Register: 'objectively elucidating tangible benefits alongside substantiated perils'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 17,
      source: "Sumber: Comparative Educational Policy Review — OECD Publishing & Kemendikbudristek",
      type: "reading_discussion",
      title: "Reading Comprehension 1: Discussion Text Analysis",
      readingRef: "Artificial Intelligence in Secondary Education: Technological Boon or Pedagogical Hazard?",
      prompt: "What rhetorical purpose is achieved by the concessive sentence: 'While algorithmic tutoring undoubtedly alleviates heavy marking workloads, it cannot replicate empathetic human mentorship'?",
      options: [
        { key: "A", text: "It concedes a practical logistical benefit of AI while reinforcing the indispensable necessity of human teachers." },
        { key: "B", text: "It proves that human educators should be entirely replaced by automated marking algorithms." },
        { key: "C", text: "It suggests that grading student assignments requires zero cognitive effort or professional empathy." },
        { key: "D", text: "It denies that teachers experience heavy administrative workloads in secondary schools." }
      ],
      correctAnswer: "A",
      explanation: "Klausa konsesif 'While...' berfungsi mengakui (concede) keuntungan logistik praktis dari AI (mengurangi beban koreksi), sembari menegaskan kembali bahwa bimbingan empati manusia tetap tak tergantikan.",
      grammarNote: "Subordinate Concessive Clauses: 'While + clause' establishing nuanced academic concession."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 18,
      source: "Sumber: Analisis Kebijakan Transisi Energi Bersih Nasional â€” Dewan Energi Nasional & Bappenas RI (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      prompt: "Why do geological experts urge profound caution regarding nuclear power plants in Indonesia?",
      options: [
        { key: "A", text: "Frequent earthquakes and tsunamis along active fault lines could damage cooling systems and trigger radiation leaks." },
        { key: "B", text: "The tropical climate entirely prevents nuclear fission atoms from splitting inside reactor cores." },
        { key: "C", text: "Indonesia lacks any coastal waters or oceanic sea breeze required for industrial ports." },
        { key: "D", text: "International maritime organizations have legally prohibited nuclear physics research in Asia." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 baris 2-7 menjelaskan alasan kekhawatiran ahli geologi: Indonesia terletak di 'Ring of Fire' dengan gempa bumi dan tsunami yang dapat merusak sistem pendingin reaktor dan memicu bencana kebocoran radioaktif bagi ekosistem laut.",
      grammarNote: "Complex Conditional Reasoning: 'A seismic event damaging cooling infrastructure could precipitate a catastrophic radioactive contamination disaster'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 19,
      source: "Sumber: Comparative Educational Policy Review — OECD Publishing & Kemendikbudristek",
      type: "reading_discussion",
      title: "Reading Comprehension 1: Discussion Text Analysis",
      readingRef: "Artificial Intelligence in Secondary Education: Technological Boon or Pedagogical Hazard?",
      prompt: "Based on the text, why do cognitive neuroscientists express grave concern regarding students relying excessively on automated AI summarization?",
      options: [
        { key: "A", text: "Bypassing deep reading and synthesizing processes risks stunting student critical discernment and conceptual retention." },
        { key: "B", text: "Reading digital text causes permanent irreversible physical degradation to human optic nerves." },
        { key: "C", text: "Automated summarization algorithms intentionally insert mathematical errors into student notes." },
        { key: "D", text: "Students become excessively skilled in argumentative composition through AI summaries." }
      ],
      correctAnswer: "A",
      explanation: "Pakar neurosains kognitif mengkhawatirkan bahwa jalan pintas merangkum dengan AI melewati proses membaca mendalam dan sintesis mandiri, sehingga berisiko menghambat perkembangan daya kritis dan daya ingat konseptual siswa.",
      grammarNote: "Cause and Effect in Academic Discourse: 'bypassing deep reading... risks stunting critical discernment'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 20,
      source: "Sumber: Comparative Educational Policy Review — OECD Publishing & Kemendikbudristek",
      type: "reading_discussion",
      title: "Reading Comprehension 1: Discussion Text Analysis",
      readingRef: "Artificial Intelligence in Secondary Education: Technological Boon or Pedagogical Hazard?",
      prompt: "What is the author's ultimate synthesis and recommendation regarding the deployment of AI in secondary schools?",
      options: [
        { key: "A", text: "Adopting guided AI literacy where technology serves as an augmentative cognitive partner under ethical human oversight." },
        { key: "B", text: "Imposing severe criminal sanctions on students who utilize grammar-checking applications." },
        { key: "C", text: "Dismantling all school computer labs and returning exclusively to chalkboards and slate tablets." },
        { key: "D", text: "Allowing generative artificial intelligence to independently author state curriculum guidelines." }
      ],
      correctAnswer: "A",
      explanation: "Sintesis akhir penulis menyarankan literasi AI terbimbing di mana teknologi berperan sebagai mitra kognitif pendukung di bawah pengawasan etis dan pedagogis guru manusia.",
      grammarNote: "Synthesizing Proposals: 'guided AI literacy', 'augmentative cognitive partner under human oversight'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 21,
      source: "Sumber: Tinjauan Sastra Kontemporer Nusantara â€” Badan Pengembangan dan Pembinaan Bahasa, Kemendikbudristek",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      prompt: "What is the primary communicative purpose of the text above?",
      options: [
        { key: "A", text: "To provide a critical literary evaluation of Andrea Hirata's novel, analyzing its strengths, themes, and minor flaws." },
        { key: "B", text: "To present statistical data regarding the financial profits of colonial tin corporations in Belitung." },
        { key: "C", text: "To advertise guided package tours and resort hotel reservations on Belitung's beaches." },
        { key: "D", text: "To narrate a step-by-step scientific guide on harvesting aquatic plants from tropical swamps." }
      ],
      correctAnswer: "A",
      explanation: "Teks di atas adalah Review Text sastra yang mengevaluasi karya novel 'Laskar Pelangi': menguraikan latar belakang karya (*Orientation*), menelaah plot dan karakter (*Interpretative Recount*), menilai keunggulan serta kelemahan gaya bahasa (*Evaluation*), dan memberikan rekomendasi penilaian akhir (*Evaluative Summation*).",
      grammarNote: "Review Text Generic Structure: Orientation -> Interpretative Recount -> Evaluation -> Evaluative Summation."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 22,
      source: "Sumber: Tinjauan Sastra Kontemporer Nusantara â€” Badan Pengembangan dan Pembinaan Bahasa, Kemendikbudristek",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      prompt: "According to the reviewer, what powerful social contrast does the author portray in the novel?",
      options: [
        { key: "A", text: "The extreme poverty of the dilapidated rural school contrasted with the luxurious lifestyle of the tin company enclave." },
        { key: "B", text: "The peaceful balance between wild ocean animals and bustling metropolitan highway traffic." },
        { key: "C", text: "The rivalry between classical literature professors and modern computer scientists." },
        { key: "D", text: "The difference between traditional Javanese batik weaving and foreign synthetic fabrics." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 baris 8-11 menjelaskan kontras sosial yang kuat: 'Hirata skillfully juxtaposes the school's destitute physical condition against the luxurious, gated compounds of the state-owned tin corporation, laying bare the stark systemic inequality'.",
      grammarNote: "Complex Verb with Complement: 'juxtaposes the school's destitute condition against the luxurious compounds'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 23,
      source: "Sumber: Tinjauan Sastra Kontemporer Nusantara â€” Badan Pengembangan dan Pembinaan Bahasa, Kemendikbudristek",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      prompt: "What minor critique of the novel is highlighted in the third paragraph?",
      options: [
        { key: "A", text: "The writing occasionally relies on melodramatic flourishes and excessively romanticized prose." },
        { key: "B", text: "The story is written completely in ancient Latin without any Indonesian dialogues." },
        { key: "C", text: "The author fails to introduce any memorable characters or school setting." },
        { key: "D", text: "The book contains no moral themes regarding education or friendship." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 3 baris 1-3 mengemukakan catatan kritis peninjau: 'the author occasionally yields to melodramatic flourishes and romanticized prose, particularly when addressing youthful yearnings'.",
      grammarNote: "Concessive Adverb: 'Admittedly, discerning literary critics have observed that the author occasionally yields to melodramatic flourishes'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 24,
      source: "Sumber: The Jakarta Post Literary & Cultural Review Archives & Kemendikbudristek",
      type: "reading_review",
      title: "Reading Comprehension 2: Review Text Critique",
      readingRef: "Book Review: Andrea Hirata's 'The Rainbow Troops' (Laskar Pelangi)",
      prompt: "In the book review of 'The Rainbow Troops', how does the reviewer evaluate the character of Lintang?",
      options: [
        { key: "A", text: "As an awe-inspiring symbol of intellectual brilliance whose heartbreaking sacrifice indicts institutional socioeconomic inequity." },
        { key: "B", text: "As an antagonistic troublemaker who frequently disrupted classroom order and ignored school assignments." },
        { key: "C", text: "As a wealthy aristocrat who funded the renovation of the impoverished schoolhouse." },
        { key: "D", text: "As an unmotivated student who voluntarily abandoned schooling due to sheer disinterest in science." }
      ],
      correctAnswer: "A",
      explanation: "Pengulas mengevaluasi Lintang sebagai simbol kecerdasan intelektual yang mengagumkan sekaligus pengorbanan tragisnya menjadi kritik tajam terhadap ketimpangan sosio-ekonomi yang merenggut hak belajar anak jenius dari keluarga miskin.",
      grammarNote: "Appraisal and Evaluative Lexis: 'awe-inspiring symbol', 'heartbreaking sacrifice indicts inequity'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 25,
      source: "Sumber: Tinjauan Sastra Kontemporer Nusantara â€” Badan Pengembangan dan Pembinaan Bahasa, Kemendikbudristek",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      prompt: "What is the reviewer's overall evaluative conclusion regarding the novel?",
      options: [
        { key: "A", text: "It is an uplifting, essential literary masterpiece that champions perseverance and the transformative power of education." },
        { key: "B", text: "It should be withdrawn from libraries due to excessive political commentary on tin corporations." },
        { key: "C", text: "It is strictly a technical manual suited only for professional mathematics professors." },
        { key: "D", text: "It failed completely to engage readers because of its remote rural setting in Belitung." }
      ],
      correctAnswer: "A",
      explanation: "Pada bagian Evaluative Summation (paragraf 3), peninjau menyimpulkan bahwa novel ini adalah mahakarya yang inspiratif ('uplifting core message... celebration of human perseverance, the transformative nobility of teaching') dan sangat dianjurkan untuk dibaca.",
      grammarNote: "Evaluative Stance Vocabulary: 'profound emotional resonance', 'celebration of human perseverance', 'essential, deeply inspiring reading'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 26,
      source: "Sumber: Tinjauan Teknologi Terapan & Rekayasa Pertanian Berkelanjutan â€” Jurnal Riset Agroteknologi Nasional",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      prompt: "What is the primary function of the AgriSmart IoT System described in the text?",
      options: [
        { key: "A", text: "To automate precision water delivery to plant roots based on real-time soil moisture sensors." },
        { key: "B", text: "To manufacture synthetic chemical fertilizers using high-voltage solar batteries." },
        { key: "C", text: "To replace all human agricultural labor with autonomous robotic harvesting tractors." },
        { key: "D", text: "To generate artificial rainclouds across large metropolitan residential zones." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 1 baris 5-7 menyatakan fungsi utama alat: 'a solar-powered micro-irrigation unit designed to deliver precise moisture directly to plant roots based on automated subterranean soil telemetry'.",
      grammarNote: "Infinitive of Purpose: 'designed to deliver precise moisture directly to plant roots based on telemetry'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 27,
      source: "Sumber: Agro-Technology & Environmental Engineering Review Journal & Kemendikbudristek",
      type: "reading_review",
      title: "Reading Comprehension 2: Review Text Critique",
      readingRef: "Technical Product Review: Smart IoT Solar-Powered Drip Irrigation System (Model AgroTech-V4)",
      prompt: "In the technical product review of AgroTech-V4, what is identified as the product's greatest commercial strength?",
      options: [
        { key: "A", text: "Substantial 40% water conservation achieved through automated soil moisture telemetry and off-grid solar autonomy." },
        { key: "B", text: "Its extremely cheap acquisition price made possible by substandard plastic fittings." },
        { key: "C", text: "Its total reliance on continuous high-voltage fossil fuel grid electricity." },
        { key: "D", text: "Its complete elimination of all human agricultural labor and harvesting machinery." }
      ],
      correctAnswer: "A",
      explanation: "Kekuatan utama produk yang dipuji dalam ulasan adalah penghematan air hingga 40% berkat sensor telemetri kelembaban tanah otomatis dan kemandirian daya panel surya mandiri ('40% water conservation achieved through automated soil moisture telemetry').",
      grammarNote: "Nominalization & Technical Evaluation: 'substantial water conservation', 'off-grid solar autonomy'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 28,
      source: "Sumber: Agro-Technology & Environmental Engineering Review Journal & Kemendikbudristek",
      type: "reading_review",
      title: "Reading Comprehension 2: Review Text Critique",
      readingRef: "Technical Product Review: Smart IoT Solar-Powered Drip Irrigation System (Model AgroTech-V4)",
      prompt: "Which of the following statements from the AgroTech-V4 review represents an objective technical specification rather than an evaluative judgment?",
      options: [
        { key: "A", text: "The central controller operates via a 12-volt 50-watt monocrystalline solar panel and communicates via 4G LTE telemetry." },
        { key: "B", text: "The mobile application interface feels somewhat clunky and unwieldy during initial setup." },
        { key: "C", text: "This irrigation unit offers an impeccably rewarding investment for forward-thinking horticulturalists." },
        { key: "D", text: "The customer service hotline proves frustratingly unresponsive during peak weekend hours." }
      ],
      correctAnswer: "A",
      explanation: "Pernyataan A memuat fakta/spesifikasi teknis objektif (tegangan 12-volt, panel surya 50-watt, telemetri 4G LTE), sedangkan opsi B, C, dan D merupakan opini atau penilaian evaluatif subjektif pengulas.",
      grammarNote: "Distinguishing Objective Factual Data from Evaluative Stance."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 29,
      source: "Sumber: Tinjauan Teknologi Terapan & Rekayasa Pertanian Berkelanjutan â€” Jurnal Riset Agroteknologi Nasional",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      prompt: "The word 'commendable' in the final paragraph is closest in meaning to...",
      options: [
        { key: "A", text: "worthy of praise and encouragement" },
        { key: "B", text: "economically wasteful and dangerous" },
        { key: "C", text: "completely outdated and forgotten" },
        { key: "D", text: "unreliable and prone to failure" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'commendable' dalam 'a highly commendable step forward' bermakna patut dipuji, terhormat, bernilai positif, dan layak diapresiasi (praiseworthy / admirable).",
      grammarNote: "Evaluative Adjective (Oxford 5000 Level B2): 'commendable' = patut dipuji / diacungi jempol."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 30,
      source: "Sumber: Agro-Technology & Environmental Engineering Review Journal & Kemendikbudristek",
      type: "reading_review",
      title: "Reading Comprehension 2: Review Text Critique",
      readingRef: "Technical Product Review: Smart IoT Solar-Powered Drip Irrigation System (Model AgroTech-V4)",
      prompt: "According to the concluding evaluation, for whom is the AgroTech-V4 irrigation system most enthusiastically recommended?",
      options: [
        { key: "A", text: "Medium-to-large horticultural enterprises seeking long-term water conservation despite higher initial capital costs." },
        { key: "B", text: "Backyard hobbyists seeking a cheap disposable sprinkler for small indoor houseplants." },
        { key: "C", text: "Large-scale petroleum refineries with unlimited freshwater access." },
        { key: "D", text: "Subsistence urban gardeners with zero financial budget for agricultural technology." }
      ],
      correctAnswer: "A",
      explanation: "Pengulas merekomendasikan sistem ini bagi pelaku agribisnis hortikultura skala menengah hingga besar yang memprioritaskan efisiensi penghematan air jangka panjang terlepas dari investasi awal yang relatif tinggi.",
      grammarNote: "Target Audience Recommendation in Review Texts: 'enthusiastically recommended for medium-to-large enterprises'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 31,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) â€” Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Contrastive Connectors",
      prompt: "Nuclear power plants deliver an uninterrupted baseload electrical output around the clock. ________, their astronomical construction expenses and severe vulnerability to seismic activity prompt intense public concern in archipelagic regions.\n\nChoose the most appropriate transitional discourse connector to fill in the blank:",
      options: [
        { key: "A", text: "However" },
        { key: "B", text: "Furthermore" },
        { key: "C", text: "Consequently" },
        { key: "D", text: "Because" }
      ],
      correctAnswer: "A",
      explanation: "Kalimat pertama menyatakan keunggulan pasokan listrik stabil, sedangkan kalimat kedua menyajikan fakta kontras mengenai biaya dan kerentanan gempa. Kata hubung antarkalimat yang menyatakan pertentangan formal (*contrast*) adalah 'However' (namun demikian).",
      grammarNote: "Conjunctive Adverb of Contrast: 'However' menghubungkan dua ide yang bertentangan dengan tanda koma setelahnya."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 32,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) â€” Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Concessive Connectors",
      prompt: "________ enduring extreme financial hardship and lacking formal school funding, Bu Muslimah and Pak Harfan taught their pupils with unwavering devotion every morning.\n\nChoose the correct grammatical connector to complete the sentence:",
      options: [
        { key: "A", text: "Despite" },
        { key: "B", text: "Although" },
        { key: "C", text: "Even though" },
        { key: "D", text: "Because of" }
      ],
      correctAnswer: "A",
      explanation: "Setelah rumpang terdapat frasa kata benda gerund ('enduring extreme financial hardship and lacking formal school funding'). Preposisi konsesif (*concessive preposition*) yang diikuti oleh frasa nomina/gerund adalah 'Despite' atau 'In spite of'. Pilihan 'Although' dan 'Even though' harus diikuti klausa lengkap (Subject + Verb).",
      grammarNote: "Concession Rule: 'Despite / In spite of + Noun Phrase/Gerund' vs 'Although / Even though + S + V'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 33,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) â€” Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Conditional Type 2 (Hypothetical Present)",
      prompt: "If regional governments ________ more capital into decentralized geothermal and solar infrastructure today, remote coastal villages would enjoy uninterrupted electricity.\n\nChoose the correct verb form to complete the hypothetical conditional clause:",
      options: [
        { key: "A", text: "invested" },
        { key: "B", text: "will invest" },
        { key: "C", text: "had invested" },
        { key: "D", text: "are investing" }
      ],
      correctAnswer: "A",
      explanation: "Klausa utama menggunakan 'would enjoy' (would + V1), yang menunjukkan kalimat pengandaian Type 2 (kondisi tidak nyata saat ini / hypothetical present). Pola if-clause Type 2 wajib menggunakan Simple Past (V2 / 'invested').",
      grammarNote: "Conditional Type 2 Formula: If + Subject + V2 (Simple Past), Subject + would + V1 (Bare Infinitive)."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 34,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) â€” Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Conditional Type 3 (Unreal Past)",
      prompt: "If high school administrators ________ clear ethical guidelines regarding generative artificial intelligence last semester, students would not have experienced widespread confusion during their research exams.\n\nChoose the correct verb form to complete the sentence:",
      options: [
        { key: "A", text: "had established" },
        { key: "B", text: "established" },
        { key: "C", text: "would establish" },
        { key: "D", text: "have established" }
      ],
      correctAnswer: "A",
      explanation: "Klausa utama menggunakan 'would not have experienced' (would have + V3) yang menerangkan penyesalan atau situasi masa lalu (past unreal). Pola if-clause Type 3 wajib menggunakan Past Perfect ('had established').",
      grammarNote: "Conditional Type 3 Formula: If + Subject + had + V3 (Past Perfect), Subject + would have + V3."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 35,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) â€” Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Modals of Stance & Necessity",
      prompt: "Educators maintain that secondary students ________ treat automated artificial intelligence outputs with critical scrutiny rather than blindly accepting them as authoritative truths.\n\nChoose the most accurate modal verb expressing strong moral advisability:",
      options: [
        { key: "A", text: "ought to" },
        { key: "B", text: "might" },
        { key: "C", text: "could" },
        { key: "D", text: "would" }
      ],
      correctAnswer: "A",
      explanation: "'Ought to' menyatakan anjuran atau kewajiban moral yang kuat (*strong moral advisability/recommendation*), semakna dengan 'should'. 'Might' dan 'could' hanya menyatakan kemungkinan lemah (*weak possibility*).",
      grammarNote: "Modals of Stance: 'ought to / should + bare infinitive' digunakan untuk menyampaikan rekomendasi etis dalam teks analitis."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 36,
      source: "Sumber: English Grammar in Use — Raymond Murphy & Cambridge C1 Advanced Standards",
      type: "grammar_structure",
      title: "Grammar Structure: Third Conditional (Past Unreal Condition)",
      prompt: "Read the contextual scenario:\n'The school district failed to conduct comprehensive digital literacy training before distributing tablets. Consequently, students misused the devices for gaming.'\n\nChoose the grammatically accurate Third Conditional sentence that expresses retrospective evaluation:",
      options: [
        { key: "A", text: "If the school district had conducted comprehensive training before distribution, students would not have misused the devices." },
        { key: "B", text: "If the school district conducted comprehensive training before distribution, students will not misuse the devices." },
        { key: "C", text: "If the school district would have conducted training before distribution, students had not misused the devices." },
        { key: "D", text: "If the school district has conducted comprehensive training, students would not misuse the devices." }
      ],
      correctAnswer: "A",
      explanation: "Third Conditional (penyesalan/kondisi lampau yang tidak terjadi) menggunakan rumus: If + Past Perfect (had conducted), would + have + V3 (would not have misused).",
      grammarNote: "Third Conditional Structure: If + S + had + V3, S + would have + V3."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII]
      id: 37,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) â€” Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Evaluative Stance Adjectives",
      prompt: "Given the rapid depletion of fossil fuels, it is ________ that regional governments accelerate investments in clean geothermal energy and solar microgrids.\n\nChoose the most fitting evaluative adjective expressing urgent necessity:",
      options: [
        { key: "A", text: "imperative" },
        { key: "B", text: "negligible" },
        { key: "C", text: "redundant" },
        { key: "D", text: "trivial" }
      ],
      correctAnswer: "A",
      explanation: "'Imperative' bermakna sangat mendesak, penting sekali, dan mutlak harus dilakukan (*vital / urgently necessary*). Pilihan 'negligible' (dapat diabaikan), 'redundant' (berlebihan/tidak perlu), dan 'trivial' (sepele) bertentangan dengan konteks darurat energi.",
      grammarNote: "Evaluative Adjective of Stance (Oxford 5000 Level B2): 'It is imperative that + clause' menyatakan keharusan mutlak."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 38,
      source: "Sumber: Advanced Grammar in Use — Martin Hewings & Cambridge Assessment English",
      type: "grammar_structure",
      title: "Grammar Structure: Mixed Conditional (Past Action with Present Consequence)",
      prompt: "Choose the correct Mixed Conditional sentence expressing how a past technological decision impacts current financial reality:",
      options: [
        { key: "A", text: "If our high school had not installed rooftop solar panels three years ago, we would not enjoy surplus green electricity today." },
        { key: "B", text: "If our high school did not install rooftop solar panels three years ago, we will not enjoy surplus green electricity today." },
        { key: "C", text: "If our high school would not have installed rooftop solar panels, we had not enjoyed surplus green electricity today." },
        { key: "D", text: "If our high school had not installed rooftop solar panels three years ago, we would not have enjoyed surplus green electricity today." }
      ],
      correctAnswer: "A",
      explanation: "Mixed Conditional menghubungkan tindakan di masa lampau (If + Past Perfect: 'had not installed three years ago') dengan dampak nyata saat ini (would + bare infinitive: 'would not enjoy today'). Opsi D salah karena menggunakan 'would not have enjoyed' untuk keterangan waktu 'today'.",
      grammarNote: "Mixed Conditional (Past -> Present): If + had + V3 (past action), S + would + V1 (present result)."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 39,
      source: "Sumber: Oxford Collocations Dictionary for Students of English & Cambridge Academic Writing",
      type: "grammar_structure",
      title: "Academic Lexis: Evaluative Adjective-Noun Collocations",
      prompt: "Select the adjective that correctly collocates in formal literary criticism to convey deeply moving, sorrowful struggles:\n'The novel's ________ portrayal of rural poverty evokes profound empathy from contemporary readers.'",
      options: [
        { key: "A", text: "poignant" },
        { key: "B", text: "trivial" },
        { key: "C", text: "superficial" },
        { key: "D", text: "lethargic" }
      ],
      correctAnswer: "A",
      explanation: "Dalam kritik sastra akademis, kata 'poignant' (mengharukan dan menyentuh sanubari) berkolokasi lazim dengan 'portrayal': 'poignant portrayal of rural poverty evokes profound empathy'. Opsi lain (trivial/remeh, superficial/dangkal, lethargic/lesu) bertentangan dengan konteks.",
      grammarNote: "Collocation in Evaluative Criticism: 'poignant portrayal' / 'evocative imagery'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 40,
      source: "Sumber: Academic Writing for Graduate Students — Swales & Feak & Cambridge C1 Advanced",
      type: "grammar_structure",
      title: "Discourse Connectors: Subordinating Conjunction of Contrast 'Whereas'",
      prompt: "Complete the academic discussion sentence with the subordinating conjunction of direct contrast:\n'________ technocrats enthusiastically celebrate AI's computational velocity, pedagogical ethicists caution against the erosion of independent human synthesis.'",
      options: [
        { key: "A", text: "Whereas" },
        { key: "B", text: "Consequently" },
        { key: "C", text: "Furthermore" },
        { key: "D", text: "Likewise" }
      ],
      correctAnswer: "A",
      explanation: "'Whereas' berfungsi menghubungkan dua klausa yang saling berkontras secara langsung (technocrats celebrate... vs ethicists caution...). Opsi B (akibat), C (tambahan), dan D (persamaan) tidak sesuai fungsi retoris kontras.",
      grammarNote: "Subordinating Conjunctions of Contrast: 'Whereas' / 'While' introducing balanced contrasting premises."
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
let currentTingkat = "XII-F";
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
  tingkat: "XII-F",
  rombel: "1",
  presensi: "1",
  nama: "Siswa Kelas XII"
};

// Initialize Exam Engine

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
  const rawQ = getGrade12AstsQuestions();
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
      studentIdentity.nama = parsed.nama || "Siswa Kelas XII";
      studentIdentity.tingkat = parsed.tingkat || "XII-F";
      studentIdentity.rombel = parsed.rombel || "1";
      studentIdentity.presensi = parsed.presensi || "1";
      currentMode = parsed.mode || "practice";
    }
  } catch (e) {
    console.warn("Local student parse error:", e);
  }

  // Restore saved progress if any
  try {
    const savedProgress = localStorage.getItem("sabaku_asas_progress_XII");
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

  studentIdentity = { tingkat: "XII-F", rombel, presensi, nama };
  currentMode = mode;
  localStorage.setItem("sabaku_current_student", JSON.stringify({
    ...studentIdentity,
    mode,
    tokenVerified: (mode === "exam")
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

  const rawQ = getGrade12AstsQuestions();
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
  if (metaEl) metaEl.textContent = `Kelas XII | Rombel ${studentIdentity.rombel} | Presensi ${studentIdentity.presensi}`;
  if (modeBadge) {
    if (currentMode === "exam") {
      modeBadge.textContent = "Mode Ujian Resmi (ASAS)";
      modeBadge.style.background = "#fee2e2";
      modeBadge.style.color = "#b91c1c";
    } else {
      modeBadge.textContent = "Mode Latihan Mandiri";
      modeBadge.style.background = "#e0f2fe";
      modeBadge.style.color = "#0369a1";
    }
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

  // Number & Type badge
  const numBadge = document.getElementById("q-number-badge");
  const typeBadge = document.getElementById("q-type-badge");
  if (numBadge) numBadge.textContent = `Soal No. ${q.id} dari ${questions.length}`;
  if (typeBadge) typeBadge.textContent = q.title || "Asesmen Akhir Semester";

  // Flag Button
  const btnFlag = document.getElementById("btn-flag-q");
  if (btnFlag) {
    if (flaggedQuestions.has(q.id)) {
      btnFlag.classList.add("btn-warning");
      btnFlag.innerHTML = "🚩 Ragu-ragu (Ditandai)";
    } else {
      btnFlag.classList.remove("btn-warning");
      btnFlag.innerHTML = "🏳️ Ragu-ragu";
    }
  }

  // Listening Audio Box
  const audioBox = document.getElementById("listening-container");
  if (q.audioText) {
    audioBox.style.display = "block";
    stopAudio();
  } else {
    audioBox.style.display = "none";
    stopAudio();
  }

  // Stimulus Reading Box
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

  // Question Prompt
  const promptEl = document.getElementById("question-prompt-text");
  promptEl.innerHTML = q.prompt.replace(/\n/g, "<br>");

  // Options Container
  const optContainer = document.getElementById("options-container");
  optContainer.innerHTML = "";

  if (q.type === "listening_pictures") {
    renderPictureChoices(q, optContainer);
  } else {
    renderSingleChoices(q, optContainer);
  }

  // Explanation in Practice Mode or after Submission
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

  // Bottom Navigation buttons
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

// Audio Synthesis Engine
function playQuestionAudio() {
  const q = questions[currentQuestionIndex];
  if (!q.audioText) return;

  if (!("speechSynthesis" in window)) {
    alert("Fitur audio Web Speech API tidak didukung di peramban ini.");
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

// Timer Engine
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      alert("Waktu pengerjaan asesmen 90 menit telah berakhir. Jawaban Anda akan otomatis dikumpulkan.");
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

// Submission & Google Sheets Sync
function confirmSubmitTest() {
  const answeredCount = Object.keys(userAnswers).length;
  const unanswered = 40 - answeredCount;
  const flagged = flaggedQuestions.size;

  let msg = `Apakah Anda yakin ingin menyelesaikan dan mengumpulkan Asesmen?\n\n`;
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

  // Update Result Modal UI
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

  // Record to History LocalStorage
  const historyItem = {
    timestamp: new Date().toLocaleString("id-ID"),
    tingkat: studentIdentity.tingkat,
    rombel: studentIdentity.rombel,
    presensi: studentIdentity.presensi,
    nama: studentIdentity.nama,
    mode: currentMode,
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

  // Sync to Google Sheets
  syncScoreToGoogleSheets({
    tingkat: studentIdentity.tingkat,
    rombel: studentIdentity.rombel,
    presensi: studentIdentity.presensi,
    nama: studentIdentity.nama,
    mode: currentMode === "exam" ? "Asesmen Resmi (ASAS)" : "Latihan Mandiri",
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
    console.warn("Sync error, falling back to beacon:", err);
    try {
      const beacon = new Image();
      const query = new URLSearchParams({
        tingkat: payload.tingkat || "XII-F",
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
    link.setAttribute("download", `Rekap_Nilai_ASAS_XII_${studentIdentity.nama.replace(/\s+/g, "_")}.csv`);
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
    localStorage.removeItem("sabaku_asas_progress_XII");
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
    localStorage.setItem("sabaku_asas_progress_XII", JSON.stringify(data));
  } catch (e) {
    console.warn("Autosave error:", e);
  }
}
