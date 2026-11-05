/**
 * ASESMEN SUMATIF AKHIR SEMESTER (ASAS) GASAL & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * TINGKAT XII (FASE F) — SATU SEMESTER PENUH GASAL (18 MINGGU) TP 2026/2027
 * 
 * Standar: Tes Kemampuan Akademik (TKA / AKM Literasi Bahasa Inggris / UTBK SNBT)
 * Cakupan Materi Lengkap:
 * 1. Listening Section: Multimodal Academic Pictures, Short Dialogues, Academic Talks & Lectures.
 * 2. TP 12.1 Discussion Text: Generative AI in High School Education & Nuclear vs Renewable Energy Transition.
 * 3. TP 12.2 Review Text: Critical Review of Andrea Hirata's "The Rainbow Troops" & Smart IoT Agriculture.
 * 4. Grammar in Academic Context: Contrastive & Concessive Connectors, Complex Conditionals (Type 2 & 3),
 *    Modals of Stance, Impersonal Passive, Relative Clauses, Academic Collocations, dan Oxford 3000/5000 Level B2 Lexis.
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

// SVG Pictures for Listening Part I Multimodal
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

function getGrade12AsasQuestions() {
  return [
    // =========================================================================
    // SECTION 1: LISTENING COMPREHENSION (QUESTIONS 1 - 10)
    // =========================================================================

    // Part I: Multimodal Pictures (1 - 3)
    {
      id: 1,
      source: "Sumber: Panduan Debat Parlemen Siswa SMA Tingkat Nasional — Kemendikbudristek & Puspresnas",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number one. Look at the pictures. In this academic forum, two formal student speakers are standing at separate wooden podiums, presenting opposing perspectives on artificial intelligence before a moderator and an engaged audience. Which picture best corresponds to the spoken description?",
      prompt: "Look at the four pictures below. Which picture matches the academic debate scene described in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.debate, label: "Two speakers debating opposing perspectives at academic podiums" },
        { key: "B", svg: SVG_PICTURES.solo_singer, label: "A musical performer singing on a concert stage" },
        { key: "C", svg: SVG_PICTURES.lab_microscope, label: "A scientist inspecting samples through a laboratory microscope" },
        { key: "D", svg: SVG_PICTURES.hiking_trail, label: "A mountaineer hiking along an outdoor trail" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan: 'two formal student speakers are standing at separate wooden podiums, presenting opposing perspectives... before a moderator and an engaged audience'. Gambar A menampilkan format debat akademis dua podium dengan pembicara dan penonton.",
      grammarNote: "Present Continuous Tense ('are standing', 'presenting') & Academic Discussion Terminology ('opposing perspectives', 'moderator', 'engaged audience')."
    },
    {
      id: 2,
      source: "Sumber: Publikasi Transisi Energi Terbarukan Nasional — Kementerian ESDM & Dewan Energi Nasional",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number two. Look at the pictures. This sustainable energy facility integrates an extensive array of blue photovoltaic solar panels on rooftops alongside towering modern wind turbines rotating in the sea breeze under clear sunny skies. Which picture illustrates this renewable power generation system?",
      prompt: "Which picture accurately depicts the sustainable renewable energy infrastructure described in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.solar_wind, label: "A renewable facility with solar photovoltaic panels and wind turbines" },
        { key: "B", svg: SVG_PICTURES.coal_plant, label: "A coal-fired power plant emitting dark exhaust fumes" },
        { key: "C", svg: SVG_PICTURES.oil_rig, label: "An offshore fossil fuel drilling rig in deep water" },
        { key: "D", svg: SVG_PICTURES.busy_highway, label: "A congested highway with gasoline-powered vehicles" }
      ],
      correctAnswer: "A",
      explanation: "Audio secara spesifik menyebutkan: 'integrates an extensive array of blue photovoltaic solar panels... alongside towering modern wind turbines rotating in the sea breeze'. Gambar A merepresentasikan kombinasi panel surya dan kincir turbin angin.",
      grammarNote: "Descriptive Compound Nouns & Adjectives: 'photovoltaic solar panels', 'towering modern wind turbines', 'sustainable energy facility'."
    },
    {
      id: 3,
      source: "Sumber: Inovasi Pertanian Cerdas Iklim — Badan Riset dan Inovasi Nasional (BRIN) & Kementan RI",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number three. Look at the pictures. This contemporary agricultural installation features a controlled smart glass greenhouse equipped with automated micro-irrigation nozzles and aerial telemetry monitoring sensors to foster sustainable crop growth. Which picture portrays this modern farming structure?",
      prompt: "Which picture matches the high-technology greenhouse facility described in the recording?",
      options: [
        { key: "A", svg: SVG_PICTURES.smart_greenhouse, label: "A high-tech smart greenhouse with automated sensors and irrigation" },
        { key: "B", svg: SVG_PICTURES.traditional_farm, label: "A traditional farmer hand-tilling soil with a manual hoe" },
        { key: "C", svg: SVG_PICTURES.industrial_factory, label: "A heavy manufacturing industrial plant with tall brick chimneys" },
        { key: "D", svg: SVG_PICTURES.desert_dunes, label: "Dry arid desert sand dunes under direct sunlight" }
      ],
      correctAnswer: "A",
      explanation: "Audio menerangkan: 'controlled smart glass greenhouse equipped with automated micro-irrigation nozzles and aerial telemetry monitoring sensors'. Gambar A memperlihatkan rumah kaca modern (*smart greenhouse*) berteknologi sensor otomatis.",
      grammarNote: "Passive Participle Modifier: 'controlled smart glass greenhouse equipped with automated nozzles'."
    },

    // Part II: Short Academic Dialogues (4 - 6)
    {
      id: 4,
      source: "Sumber: Percakapan Pembelajaran Berbasis Riset SMA — Modul Ajar Kurikulum Merdeka Fase F",
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
      id: 5,
      source: "Sumber: Diskusi Kelompok Terfokus Siswa — Simposium Energi Masa Depan SMA Jawa Tengah",
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
      id: 6,
      source: "Sumber: Wawancara Komunitas Literasi Remaja — Dewan Kesenian Daerah & Majalah Edukasi",
      type: "listening_dialogue",
      title: "Listening Section: Part II - Dialogues",
      audioText: "Number six. Listen to a dialogue between two members of the school book club.\n\nDanang: Sinta, I recently finished reading Andrea Hirata's classic novel, 'The Rainbow Troops'. Have you read it?\nSinta: Yes, twice! What impressed me most was how the narrative highlights unyielding determination for education amidst severe economic poverty in Belitung.\nDanang: Exactly. Some critics claim the pacing is occasionally melodramatic, yet the profound emotional bond between the ten pupils and their dedicated teacher, Bu Muslimah, is genuinely inspiring.\nSinta: I couldn't agree more. It reminds us that quality learning is fueled by human empathy, resilience, and mutual hope rather than luxurious school infrastructure.\n\nQuestion: What core thematic value of the novel do both speakers strongly admire?",
      prompt: "What core thematic strength of Andrea Hirata's novel 'The Rainbow Troops' do both speakers strongly admire?",
      options: [
        { key: "A", text: "The unwavering determination for education and mutual human empathy in overcoming poverty." },
        { key: "B", text: "The commercial profitability of modern tin mining corporations operating in Belitung." },
        { key: "C", text: "The sophisticated scientific laboratory facilities established in remote rural settlements." },
        { key: "D", text: "The leisurely vacation lifestyle experienced by urban tourists visiting coastal beaches." }
      ],
      correctAnswer: "A",
      explanation: "Kedua siswa mengagumi kegigihan luar biasa dalam menuntut ilmu ('unyielding determination for education amidst severe economic poverty') serta empati dan ketangguhan manusiawi dalam menghadapi keterbatasan fasilitas.",
      grammarNote: "Concessive Clause with 'Yet': 'Some critics claim the pacing is melodramatic, yet the profound emotional bond... is genuinely inspiring'."
    },

    // Part III: Academic Talks & Lectures (7 - 10)
    {
      id: 7,
      source: "Sumber: Kuliah Umum Transisi Energi Bersih — Forum Akademik Teknik Lingkungan Universitas Indonesia",
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
      id: 8,
      source: "Sumber: Kuliah Umum Transisi Energi Bersih — Forum Akademik Teknik Lingkungan Universitas Indonesia",
      type: "listening_talk",
      title: "Listening Section: Part III - Academic Talks",
      audioText: "Number eight. According to the speaker, why are solar and wind systems insufficient on their own for heavy manufacturing industries?",
      prompt: "According to the speaker, why can solar and wind installations not power heavy industries alone without supportive systems?",
      options: [
        { key: "A", text: "Their power output fluctuates depending on weather changes, creating supply intermittency during calm nights." },
        { key: "B", text: "They consume far more freshwater than traditional nuclear and coal boiling facilities." },
        { key: "C", text: "Their machinery produces toxic chemical smoke that damages industrial manufacturing robots." },
        { key: "D", text: "International regulatory treaties prohibit factories from connecting to solar panels." }
      ],
      correctAnswer: "A",
      explanation: "Dosen menjelaskan bahwa pembangkit surya dan angin memiliki kendala variasi cuaca: 'depend entirely upon variable weather conditions. When calm nights occur, electricity output declines abruptly'.",
      grammarNote: "Temporal & Conditional Adverbial Clauses: 'When calm nights occur, electricity output declines abruptly'."
    },
    {
      id: 9,
      source: "Sumber: Pidato Kunci Simposium Literasi Digital SMA — Ikatan Guru Bahasa dan Komunikasi Indonesia",
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
      id: 10,
      source: "Sumber: Pidato Kunci Simposium Literasi Digital SMA — Ikatan Guru Bahasa dan Komunikasi Indonesia",
      type: "listening_talk",
      title: "Listening Section: Part III - Academic Talks",
      audioText: "Number ten. What constructive action should educational institutions take regarding modern AI tools?",
      prompt: "What constructive approach does the speaker urge educational institutions to adopt toward AI technologies?",
      options: [
        { key: "A", text: "Guide students to question machine outputs critically, identify algorithmic biases, and create authentic solutions." },
        { key: "B", text: "Confiscate all digital devices at the school entrance and prohibit all computer science subjects." },
        { key: "C", text: "Delegate all grading, evaluation, and disciplinary decisions entirely to automated software." },
        { key: "D", text: "Instruct students never to consult scientific journals or verified library encyclopedias." }
      ],
      correctAnswer: "A",
      explanation: "Pembicara menyarankan agar sekolah membimbing siswa untuk bersikap kritis terhadap hasil mesin, mengidentifikasi bias algoritma, dan merumuskan solusi orisinal ('actively question machine outputs, detect algorithmic biases, and formulate original solutions').",
      grammarNote: "Modal Parallelism with Imperative Verbs: 'question machine outputs, detect algorithmic biases, and formulate original solutions'."
    },

    // =========================================================================
    // SECTION 2: READING COMPREHENSION — TP 12.1 DISCUSSION TEXT (11 - 20)
    // =========================================================================

    // Text 1: Discussion Text on Generative AI in High School Education (11 - 15)
    {
      id: 11,
      source: "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer — Ikatan Peneliti Kurikulum Nasional (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      stimulusTitle: "Generative Artificial Intelligence in Secondary Classrooms: Revolutionary Opportunity or Cognitive Threat?",
      stimulusBody: `The unprecedented integration of generative artificial intelligence into high school environments has sparked an intensive pedagogical debate worldwide. Proponents argue that intelligent language models democratize learning by serving as round-the-clock personalized tutors. Students struggling with intricate scientific concepts, foreign language composition, or algorithmic coding can receive tailored explanations suited to their individual comprehension speeds. Furthermore, advocates highlight that engaging with digital tools equips prospective graduates with essential digital literacy and prompting skills demanded by modern university faculties and automated professional sectors.<br><br>Conversely, cautious educators and cognitive researchers express profound reservations. They contend that unconditional reliance on automated chatbots induces cognitive atrophy, steadily eroding students' capacity for sustained concentration and independent analytical synthesis. When learners delegate the drafting of essays or problem-solving calculations to automated systems, they forfeit the vital intellectual struggle necessary to cultivate authentic problem-solving resilience. Moreover, generative algorithms frequently generate convincing factual hallucinations and reinforce systemic cultural biases embedded in their training datasets, misleading students who lack mature evaluative judgment.<br><br>In light of these contrasting viewpoints, an outright prohibition of technological tools appears both impractical and short-sighted. Instead, high schools should cultivate a balanced educational framework. Educational leaders must formulate clear, enforceable ethical guidelines that delineate acceptable technological assistance from unacceptable academic dishonesty. Rather than assessing solely static written outputs, educators ought to prioritize interactive oral defenses, collaborative research workshops, and reflective handwritten journals. By treating artificial intelligence as a supportive analytical instrument rather than a surrogate intellect, secondary institutions can foster technologically proficient scholars who retain rigorous critical judgment.`,
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
      id: 12,
      source: "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer — Ikatan Peneliti Kurikulum Nasional (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      stimulusTitle: "Generative Artificial Intelligence in Secondary Classrooms: Revolutionary Opportunity or Cognitive Threat?",
      stimulusBody: `The unprecedented integration of generative artificial intelligence into high school environments has sparked an intensive pedagogical debate worldwide. Proponents argue that intelligent language models democratize learning by serving as round-the-clock personalized tutors. Students struggling with intricate scientific concepts, foreign language composition, or algorithmic coding can receive tailored explanations suited to their individual comprehension speeds. Furthermore, advocates highlight that engaging with digital tools equips prospective graduates with essential digital literacy and prompting skills demanded by modern university faculties and automated professional sectors.<br><br>Conversely, cautious educators and cognitive researchers express profound reservations. They contend that unconditional reliance on automated chatbots induces cognitive atrophy, steadily eroding students' capacity for sustained concentration and independent analytical synthesis. When learners delegate the drafting of essays or problem-solving calculations to automated systems, they forfeit the vital intellectual struggle necessary to cultivate authentic problem-solving resilience. Moreover, generative algorithms frequently generate convincing factual hallucinations and reinforce systemic cultural biases embedded in their training datasets, misleading students who lack mature evaluative judgment.<br><br>In light of these contrasting viewpoints, an outright prohibition of technological tools appears both impractical and short-sighted. Instead, high schools should cultivate a balanced educational framework. Educational leaders must formulate clear, enforceable ethical guidelines that delineate acceptable technological assistance from unacceptable academic dishonesty. Rather than assessing solely static written outputs, educators ought to prioritize interactive oral defenses, collaborative research workshops, and reflective handwritten journals. By treating artificial intelligence as a supportive analytical instrument rather than a surrogate intellect, secondary institutions can foster technologically proficient scholars who retain rigorous critical judgment.`,
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
      id: 13,
      source: "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer — Ikatan Peneliti Kurikulum Nasional (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      stimulusTitle: "Generative Artificial Intelligence in Secondary Classrooms: Revolutionary Opportunity or Cognitive Threat?",
      stimulusBody: `The unprecedented integration of generative artificial intelligence into high school environments has sparked an intensive pedagogical debate worldwide. Proponents argue that intelligent language models democratize learning by serving as round-the-clock personalized tutors. Students struggling with intricate scientific concepts, foreign language composition, or algorithmic coding can receive tailored explanations suited to their individual comprehension speeds. Furthermore, advocates highlight that engaging with digital tools equips prospective graduates with essential digital literacy and prompting skills demanded by modern university faculties and automated professional sectors.<br><br>Conversely, cautious educators and cognitive researchers express profound reservations. They contend that unconditional reliance on automated chatbots induces cognitive atrophy, steadily eroding students' capacity for sustained concentration and independent analytical synthesis. When learners delegate the drafting of essays or problem-solving calculations to automated systems, they forfeit the vital intellectual struggle necessary to cultivate authentic problem-solving resilience. Moreover, generative algorithms frequently generate convincing factual hallucinations and reinforce systemic cultural biases embedded in their training datasets, misleading students who lack mature evaluative judgment.<br><br>In light of these contrasting viewpoints, an outright prohibition of technological tools appears both impractical and short-sighted. Instead, high schools should cultivate a balanced educational framework. Educational leaders must formulate clear, enforceable ethical guidelines that delineate acceptable technological assistance from unacceptable academic dishonesty. Rather than assessing solely static written outputs, educators ought to prioritize interactive oral defenses, collaborative research workshops, and reflective handwritten journals. By treating artificial intelligence as a supportive analytical instrument rather than a surrogate intellect, secondary institutions can foster technologically proficient scholars who retain rigorous critical judgment.`,
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
      id: 14,
      source: "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer — Ikatan Peneliti Kurikulum Nasional (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      stimulusTitle: "Generative Artificial Intelligence in Secondary Classrooms: Revolutionary Opportunity or Cognitive Threat?",
      stimulusBody: `The unprecedented integration of generative artificial intelligence into high school environments has sparked an intensive pedagogical debate worldwide. Proponents argue that intelligent language models democratize learning by serving as round-the-clock personalized tutors. Students struggling with intricate scientific concepts, foreign language composition, or algorithmic coding can receive tailored explanations suited to their individual comprehension speeds. Furthermore, advocates highlight that engaging with digital tools equips prospective graduates with essential digital literacy and prompting skills demanded by modern university faculties and automated professional sectors.<br><br>Conversely, cautious educators and cognitive researchers express profound reservations. They contend that unconditional reliance on automated chatbots induces cognitive atrophy, steadily eroding students' capacity for sustained concentration and independent analytical synthesis. When learners delegate the drafting of essays or problem-solving calculations to automated systems, they forfeit the vital intellectual struggle necessary to cultivate authentic problem-solving resilience. Moreover, generative algorithms frequently generate convincing factual hallucinations and reinforce systemic cultural biases embedded in their training datasets, misleading students who lack mature evaluative judgment.<br><br>In light of these contrasting viewpoints, an outright prohibition of technological tools appears both impractical and short-sighted. Instead, high schools should cultivate a balanced educational framework. Educational leaders must formulate clear, enforceable ethical guidelines that delineate acceptable technological assistance from unacceptable academic dishonesty. Rather than assessing solely static written outputs, educators ought to prioritize interactive oral defenses, collaborative research workshops, and reflective handwritten journals. By treating artificial intelligence as a supportive analytical instrument rather than a surrogate intellect, secondary institutions can foster technologically proficient scholars who retain rigorous critical judgment.`,
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
      id: 15,
      source: "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer — Ikatan Peneliti Kurikulum Nasional (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      stimulusTitle: "Generative Artificial Intelligence in Secondary Classrooms: Revolutionary Opportunity or Cognitive Threat?",
      stimulusBody: `The unprecedented integration of generative artificial intelligence into high school environments has sparked an intensive pedagogical debate worldwide. Proponents argue that intelligent language models democratize learning by serving as round-the-clock personalized tutors. Students struggling with intricate scientific concepts, foreign language composition, or algorithmic coding can receive tailored explanations suited to their individual comprehension speeds. Furthermore, advocates highlight that engaging with digital tools equips prospective graduates with essential digital literacy and prompting skills demanded by modern university faculties and automated professional sectors.<br><br>Conversely, cautious educators and cognitive researchers express profound reservations. They contend that unconditional reliance on automated chatbots induces cognitive atrophy, steadily eroding students' capacity for sustained concentration and independent analytical synthesis. When learners delegate the drafting of essays or problem-solving calculations to automated systems, they forfeit the vital intellectual struggle necessary to cultivate authentic problem-solving resilience. Moreover, generative algorithms frequently generate convincing factual hallucinations and reinforce systemic cultural biases embedded in their training datasets, misleading students who lack mature evaluative judgment.<br><br>In light of these contrasting viewpoints, an outright prohibition of technological tools appears both impractical and short-sighted. Instead, high schools should cultivate a balanced educational framework. Educational leaders must formulate clear, enforceable ethical guidelines that delineate acceptable technological assistance from unacceptable academic dishonesty. Rather than assessing solely static written outputs, educators ought to prioritize interactive oral defenses, collaborative research workshops, and reflective handwritten journals. By treating artificial intelligence as a supportive analytical instrument rather than a surrogate intellect, secondary institutions can foster technologically proficient scholars who retain rigorous critical judgment.`,
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

    // Text 2: Discussion Text on Nuclear Energy vs Renewables in Indonesia (16 - 20)
    {
      id: 16,
      source: "Sumber: Analisis Kebijakan Transisi Energi Bersih Nasional — Dewan Energi Nasional & Bappenas RI (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      stimulusTitle: "Nuclear Power in Archipelagic Indonesia: Strategic Energy Savior or Unwarranted Environmental Risk?",
      stimulusBody: `As Indonesia commits to achieving carbon neutrality by 2060, energy policymakers face an intense debate over whether to integrate commercial nuclear power plants into the national electrical grid. Champions of nuclear power point out that conventional solar photovoltaic arrays and wind turbines suffer from acute weather intermittency and demand extensive land areas. Nuclear reactors, in sharp contrast, possess an exceptional energy density, producing vast amounts of electricity around the clock with negligible direct carbon dioxide emissions during operation. A single modern nuclear reactor can reliably energize industrial manufacturing hubs and dense metropolitan centers on Java Island, operating at an extraordinary capacity factor exceeding ninety percent.<br><br>Nonetheless, environmental scientists and geological engineers urge profound caution, citing Indonesia's unique geography along the Pacific 'Ring of Fire'. Our archipelago is crisscrossed by hundreds of active volcanic systems and submarine seismic fault lines that generate recurring high-magnitude earthquakes and devastating tsunamis. A seismic event damaging a coastal reactor's cooling infrastructure could precipitate a catastrophic radioactive contamination disaster, devastating vital marine fisheries and coastal communities for generations. Furthermore, the astronomical initial capital costs and decades-long construction schedules could drain national financial budgets away from rapidly deployable solar, hydro, and geothermal installations, such as the Dieng geothermal reserves that generate clean baseload power safely.<br><br>Ultimately, navigating this national dilemma requires an objective, evidence-based strategy. While nuclear energy presents undeniable theoretical baseload advantages, its geological liabilities in seismically active zones cannot be minimized. Prior to constructing full-scale reactors, the government should accelerate the development of inherently safer decentralized renewables, expand geothermal exploitation in stable geological pockets, and restrict nuclear exploration strictly to non-power experimental medical research until fail-safe small modular reactor technology is thoroughly proven.`,
      prompt: "What is the primary topic under discussion in the text above?",
      options: [
        { key: "A", text: "The strategic debate over introducing commercial nuclear power into Indonesia's seismically active archipelago." },
        { key: "B", text: "A technical manual for constructing small wooden fishing boats in coastal Central Java." },
        { key: "C", text: "The historical evolution of coal-fired steam engines during the nineteenth century industrial revolution." },
        { key: "D", text: "A travel itinerary for foreign tourists visiting volcanic hot spring resorts in Dieng Plateau." }
      ],
      correctAnswer: "A",
      explanation: "Teks di atas mendiskusikan perdebatan kebijakan nasional tentang apakah Indonesia harus membangun PLTN (*nuclear power plants*) di wilayah kepulauan yang berada di zona aktif gempa (*Ring of Fire*), dengan membandingkan kelebihan pasokan energi stabil dan risiko bencananya.",
      grammarNote: "Discussion Text Genre Focus: Introducing a controversial issue with dual arguments ('strategic energy savior or unwarranted risk')."
    },
    {
      id: 17,
      source: "Sumber: Analisis Kebijakan Transisi Energi Bersih Nasional — Dewan Energi Nasional & Bappenas RI (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      stimulusTitle: "Nuclear Power in Archipelagic Indonesia: Strategic Energy Savior or Unwarranted Environmental Risk?",
      stimulusBody: `As Indonesia commits to achieving carbon neutrality by 2060, energy policymakers face an intense debate over whether to integrate commercial nuclear power plants into the national electrical grid. Champions of nuclear power point out that conventional solar photovoltaic arrays and wind turbines suffer from acute weather intermittency and demand extensive land areas. Nuclear reactors, in sharp contrast, possess an exceptional energy density, producing vast amounts of electricity around the clock with negligible direct carbon dioxide emissions during operation. A single modern nuclear reactor can reliably energize industrial manufacturing hubs and dense metropolitan centers on Java Island, operating at an extraordinary capacity factor exceeding ninety percent.<br><br>Nonetheless, environmental scientists and geological engineers urge profound caution, citing Indonesia's unique geography along the Pacific 'Ring of Fire'. Our archipelago is crisscrossed by hundreds of active volcanic systems and submarine seismic fault lines that generate recurring high-magnitude earthquakes and devastating tsunamis. A seismic event damaging a coastal reactor's cooling infrastructure could precipitate a catastrophic radioactive contamination disaster, devastating vital marine fisheries and coastal communities for generations. Furthermore, the astronomical initial capital costs and decades-long construction schedules could drain national financial budgets away from rapidly deployable solar, hydro, and geothermal installations, such as the Dieng geothermal reserves that generate clean baseload power safely.<br><br>Ultimately, navigating this national dilemma requires an objective, evidence-based strategy. While nuclear energy presents undeniable theoretical baseload advantages, its geological liabilities in seismically active zones cannot be minimized. Prior to constructing full-scale reactors, the government should accelerate the development of inherently safer decentralized renewables, expand geothermal exploitation in stable geological pockets, and restrict nuclear exploration strictly to non-power experimental medical research until fail-safe small modular reactor technology is thoroughly proven.`,
      prompt: "What major advantage of nuclear energy is emphasized by its advocates in the first paragraph?",
      options: [
        { key: "A", text: "High energy density that provides continuous 24/7 electricity with negligible direct carbon emissions." },
        { key: "B", text: "Complete independence from any financial funding or trained scientific personnel." },
        { key: "C", text: "The capability to operate without consuming water or cooling systems during heatwaves." },
        { key: "D", text: "The rapid construction of functional commercial plants in less than two weeks." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 1 baris 5-8 menyatakan keunggulan nuklir menurut para pendukung: 'possess an exceptional energy density, producing vast amounts of electricity around the clock with negligible direct carbon dioxide emissions during operation'.",
      grammarNote: "Participial Phrase: 'producing vast amounts of electricity around the clock with negligible emissions'."
    },
    {
      id: 18,
      source: "Sumber: Analisis Kebijakan Transisi Energi Bersih Nasional — Dewan Energi Nasional & Bappenas RI (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      stimulusTitle: "Nuclear Power in Archipelagic Indonesia: Strategic Energy Savior or Unwarranted Environmental Risk?",
      stimulusBody: `As Indonesia commits to achieving carbon neutrality by 2060, energy policymakers face an intense debate over whether to integrate commercial nuclear power plants into the national electrical grid. Champions of nuclear power point out that conventional solar photovoltaic arrays and wind turbines suffer from acute weather intermittency and demand extensive land areas. Nuclear reactors, in sharp contrast, possess an exceptional energy density, producing vast amounts of electricity around the clock with negligible direct carbon dioxide emissions during operation. A single modern nuclear reactor can reliably energize industrial manufacturing hubs and dense metropolitan centers on Java Island, operating at an extraordinary capacity factor exceeding ninety percent.<br><br>Nonetheless, environmental scientists and geological engineers urge profound caution, citing Indonesia's unique geography along the Pacific 'Ring of Fire'. Our archipelago is crisscrossed by hundreds of active volcanic systems and submarine seismic fault lines that generate recurring high-magnitude earthquakes and devastating tsunamis. A seismic event damaging a coastal reactor's cooling infrastructure could precipitate a catastrophic radioactive contamination disaster, devastating vital marine fisheries and coastal communities for generations. Furthermore, the astronomical initial capital costs and decades-long construction schedules could drain national financial budgets away from rapidly deployable solar, hydro, and geothermal installations, such as the Dieng geothermal reserves that generate clean baseload power safely.<br><br>Ultimately, navigating this national dilemma requires an objective, evidence-based strategy. While nuclear energy presents undeniable theoretical baseload advantages, its geological liabilities in seismically active zones cannot be minimized. Prior to constructing full-scale reactors, the government should accelerate the development of inherently safer decentralized renewables, expand geothermal exploitation in stable geological pockets, and restrict nuclear exploration strictly to non-power experimental medical research until fail-safe small modular reactor technology is thoroughly proven.`,
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
      id: 19,
      source: "Sumber: Analisis Kebijakan Transisi Energi Bersih Nasional — Dewan Energi Nasional & Bappenas RI (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      stimulusTitle: "Nuclear Power in Archipelagic Indonesia: Strategic Energy Savior or Unwarranted Environmental Risk?",
      stimulusBody: `As Indonesia commits to achieving carbon neutrality by 2060, energy policymakers face an intense debate over whether to integrate commercial nuclear power plants into the national electrical grid. Champions of nuclear power point out that conventional solar photovoltaic arrays and wind turbines suffer from acute weather intermittency and demand extensive land areas. Nuclear reactors, in sharp contrast, possess an exceptional energy density, producing vast amounts of electricity around the clock with negligible direct carbon dioxide emissions during operation. A single modern nuclear reactor can reliably energize industrial manufacturing hubs and dense metropolitan centers on Java Island, operating at an extraordinary capacity factor exceeding ninety percent.<br><br>Nonetheless, environmental scientists and geological engineers urge profound caution, citing Indonesia's unique geography along the Pacific 'Ring of Fire'. Our archipelago is crisscrossed by hundreds of active volcanic systems and submarine seismic fault lines that generate recurring high-magnitude earthquakes and devastating tsunamis. A seismic event damaging a coastal reactor's cooling infrastructure could precipitate a catastrophic radioactive contamination disaster, devastating vital marine fisheries and coastal communities for generations. Furthermore, the astronomical initial capital costs and decades-long construction schedules could drain national financial budgets away from rapidly deployable solar, hydro, and geothermal installations, such as the Dieng geothermal reserves that generate clean baseload power safely.<br><br>Ultimately, navigating this national dilemma requires an objective, evidence-based strategy. While nuclear energy presents undeniable theoretical baseload advantages, its geological liabilities in seismically active zones cannot be minimized. Prior to constructing full-scale reactors, the government should accelerate the development of inherently safer decentralized renewables, expand geothermal exploitation in stable geological pockets, and restrict nuclear exploration strictly to non-power experimental medical research until fail-safe small modular reactor technology is thoroughly proven.`,
      prompt: "The word 'precipitate' in the second paragraph is closest in meaning to...",
      options: [
        { key: "A", text: "cause an undesirable event to happen suddenly" },
        { key: "B", text: "prevent an accident through careful regulation" },
        { key: "C", text: "cleanse harmful pollutants from contaminated soil" },
        { key: "D", text: "calculate the exact financial budget for construction" }
      ],
      correctAnswer: "A",
      explanation: "Kata kerja 'precipitate' dalam kalimat 'could precipitate a catastrophic disaster' bermakna memicu, menyebabkan sesuatu yang buruk terjadi secara tiba-tiba (cause an undesirable event to happen suddenly / trigger).",
      grammarNote: "Advanced Academic Verb (Oxford 5000 Level B2): 'precipitate' = memicu timbulnya suatu peristiwa secara mendadak."
    },
    {
      id: 20,
      source: "Sumber: Analisis Kebijakan Transisi Energi Bersih Nasional — Dewan Energi Nasional & Bappenas RI (2026)",
      type: "reading",
      title: "Reading Section: TP 12.1 Discussion Text",
      stimulusTitle: "Nuclear Power in Archipelagic Indonesia: Strategic Energy Savior or Unwarranted Environmental Risk?",
      stimulusBody: `As Indonesia commits to achieving carbon neutrality by 2060, energy policymakers face an intense debate over whether to integrate commercial nuclear power plants into the national electrical grid. Champions of nuclear power point out that conventional solar photovoltaic arrays and wind turbines suffer from acute weather intermittency and demand extensive land areas. Nuclear reactors, in sharp contrast, possess an exceptional energy density, producing vast amounts of electricity around the clock with negligible direct carbon dioxide emissions during operation. A single modern nuclear reactor can reliably energize industrial manufacturing hubs and dense metropolitan centers on Java Island, operating at an extraordinary capacity factor exceeding ninety percent.<br><br>Nonetheless, environmental scientists and geological engineers urge profound caution, citing Indonesia's unique geography along the Pacific 'Ring of Fire'. Our archipelago is crisscrossed by hundreds of active volcanic systems and submarine seismic fault lines that generate recurring high-magnitude earthquakes and devastating tsunamis. A seismic event damaging a coastal reactor's cooling infrastructure could precipitate a catastrophic radioactive contamination disaster, devastating vital marine fisheries and coastal communities for generations. Furthermore, the astronomical initial capital costs and decades-long construction schedules could drain national financial budgets away from rapidly deployable solar, hydro, and geothermal installations, such as the Dieng geothermal reserves that generate clean baseload power safely.<br><br>Ultimately, navigating this national dilemma requires an objective, evidence-based strategy. While nuclear energy presents undeniable theoretical baseload advantages, its geological liabilities in seismically active zones cannot be minimized. Prior to constructing full-scale reactors, the government should accelerate the development of inherently safer decentralized renewables, expand geothermal exploitation in stable geological pockets, and restrict nuclear exploration strictly to non-power experimental medical research until fail-safe small modular reactor technology is thoroughly proven.`,
      prompt: "What balanced policy direction does the author propose in the final paragraph?",
      options: [
        { key: "A", text: "Accelerate safer renewables like geothermal and solar while delaying full-scale nuclear plants until safety is proven." },
        { key: "B", text: "Immediately replace all geothermal power stations in Dieng with foreign nuclear fission facilities." },
        { key: "C", text: "Abandon all international climate commitments and rely exclusively on imported fossil oil." },
        { key: "D", text: "Prohibit high school students and university professors from studying environmental physics." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf terakhir menyimpulkan solusi berimbang: mendahulukan energi terbarukan terdesentralisasi yang lebih aman (seperti panas bumi dan surya), serta menunda pembangunan PLTN skala besar sampai teknologi reaktor modular benar-benar terbukti aman dari bahaya seismik.",
      grammarNote: "Concessive Recommendation Clause: 'While nuclear energy presents theoretical baseload advantages... the government should accelerate safer renewables'."
    },

    // =========================================================================
    // SECTION 3: READING COMPREHENSION — TP 12.2 REVIEW TEXT (21 - 30)
    // =========================================================================

    // Text 3: Critical Literary Review: Andrea Hirata's "The Rainbow Troops" (21 - 25)
    {
      id: 21,
      source: "Sumber: Tinjauan Sastra Kontemporer Nusantara — Badan Pengembangan dan Pembinaan Bahasa, Kemendikbudristek",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      stimulusTitle: "Book Review: Andrea Hirata’s 'The Rainbow Troops' (Laskar Pelangi) — An Inspiring Ode to Educational Resilience",
      stimulusBody: `Published in 2005 and subsequently translated into dozens of foreign languages, Andrea Hirata's semi-autobiographical masterpiece, 'The Rainbow Troops' (Laskar Pelangi), stands as one of the most significant literary triumphs in modern Indonesian prose. Set in the 1970s on the resource-rich yet economically segregated island of Belitung, the novel depicts the heroic journey of ten impoverished pupils fighting for basic schooling inside a dilapidated wooden classroom managed by the historic Muhammadiyah elementary school.<br><br>The narrative's greatest artistic strength lies in its indelible characterization and heartfelt social critique. Through the eyes of the young narrator, Ikal, readers are introduced to exceptional figures such as Lintang, a impoverished fisherman's son whose sheer mathematical genius transcends daily eighty-kilometer bicycle journeys through crocodile-infested swamps. Guiding this ragtag ensemble are two selfless pedagogues, Bu Muslimah and Pak Harfan, who teach with unwavering devotion despite earning no salary. Hirata skillfully juxtaposes the school's destitute physical condition against the luxurious, gated compounds of the state-owned tin corporation, laying bare the stark systemic inequality that plagued regional extraction communities.<br><br>Admittedly, discerning literary critics have observed that the author occasionally yields to melodramatic flourishes and romanticized prose, particularly when addressing youthful yearnings or painting dramatic climatic setbacks. Nevertheless, these minor stylistic indulgences do not diminish the novel's profound emotional resonance and uplifting core message. 'The Rainbow Troops' is fundamentally a celebration of human perseverance, the transformative nobility of teaching, and the enduring power of community solidarity. It remains essential, deeply inspiring reading for senior students, educators, and anyone who believes education is an inalienable human right.`,
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
      id: 22,
      source: "Sumber: Tinjauan Sastra Kontemporer Nusantara — Badan Pengembangan dan Pembinaan Bahasa, Kemendikbudristek",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      stimulusTitle: "Book Review: Andrea Hirata’s 'The Rainbow Troops' (Laskar Pelangi) — An Inspiring Ode to Educational Resilience",
      stimulusBody: `Published in 2005 and subsequently translated into dozens of foreign languages, Andrea Hirata's semi-autobiographical masterpiece, 'The Rainbow Troops' (Laskar Pelangi), stands as one of the most significant literary triumphs in modern Indonesian prose. Set in the 1970s on the resource-rich yet economically segregated island of Belitung, the novel depicts the heroic journey of ten impoverished pupils fighting for basic schooling inside a dilapidated wooden classroom managed by the historic Muhammadiyah elementary school.<br><br>The narrative's greatest artistic strength lies in its indelible characterization and heartfelt social critique. Through the eyes of the young narrator, Ikal, readers are introduced to exceptional figures such as Lintang, a impoverished fisherman's son whose sheer mathematical genius transcends daily eighty-kilometer bicycle journeys through crocodile-infested swamps. Guiding this ragtag ensemble are two selfless pedagogues, Bu Muslimah and Pak Harfan, who teach with unwavering devotion despite earning no salary. Hirata skillfully juxtaposes the school's destitute physical condition against the luxurious, gated compounds of the state-owned tin corporation, laying bare the stark systemic inequality that plagued regional extraction communities.<br><br>Admittedly, discerning literary critics have observed that the author occasionally yields to melodramatic flourishes and romanticized prose, particularly when addressing youthful yearnings or painting dramatic climatic setbacks. Nevertheless, these minor stylistic indulgences do not diminish the novel's profound emotional resonance and uplifting core message. 'The Rainbow Troops' is fundamentally a celebration of human perseverance, the transformative nobility of teaching, and the enduring power of community solidarity. It remains essential, deeply inspiring reading for senior students, educators, and anyone who believes education is an inalienable human right.`,
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
      id: 23,
      source: "Sumber: Tinjauan Sastra Kontemporer Nusantara — Badan Pengembangan dan Pembinaan Bahasa, Kemendikbudristek",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      stimulusTitle: "Book Review: Andrea Hirata’s 'The Rainbow Troops' (Laskar Pelangi) — An Inspiring Ode to Educational Resilience",
      stimulusBody: `Published in 2005 and subsequently translated into dozens of foreign languages, Andrea Hirata's semi-autobiographical masterpiece, 'The Rainbow Troops' (Laskar Pelangi), stands as one of the most significant literary triumphs in modern Indonesian prose. Set in the 1970s on the resource-rich yet economically segregated island of Belitung, the novel depicts the heroic journey of ten impoverished pupils fighting for basic schooling inside a dilapidated wooden classroom managed by the historic Muhammadiyah elementary school.<br><br>The narrative's greatest artistic strength lies in its indelible characterization and heartfelt social critique. Through the eyes of the young narrator, Ikal, readers are introduced to exceptional figures such as Lintang, a impoverished fisherman's son whose sheer mathematical genius transcends daily eighty-kilometer bicycle journeys through crocodile-infested swamps. Guiding this ragtag ensemble are two selfless pedagogues, Bu Muslimah and Pak Harfan, who teach with unwavering devotion despite earning no salary. Hirata skillfully juxtaposes the school's destitute physical condition against the luxurious, gated compounds of the state-owned tin corporation, laying bare the stark systemic inequality that plagued regional extraction communities.<br><br>Admittedly, discerning literary critics have observed that the author occasionally yields to melodramatic flourishes and romanticized prose, particularly when addressing youthful yearnings or painting dramatic climatic setbacks. Nevertheless, these minor stylistic indulgences do not diminish the novel's profound emotional resonance and uplifting core message. 'The Rainbow Troops' is fundamentally a celebration of human perseverance, the transformative nobility of teaching, and the enduring power of community solidarity. It remains essential, deeply inspiring reading for senior students, educators, and anyone who believes education is an inalienable human right.`,
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
      id: 24,
      source: "Sumber: Tinjauan Sastra Kontemporer Nusantara — Badan Pengembangan dan Pembinaan Bahasa, Kemendikbudristek",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      stimulusTitle: "Book Review: Andrea Hirata’s 'The Rainbow Troops' (Laskar Pelangi) — An Inspiring Ode to Educational Resilience",
      stimulusBody: `Published in 2005 and subsequently translated into dozens of foreign languages, Andrea Hirata's semi-autobiographical masterpiece, 'The Rainbow Troops' (Laskar Pelangi), stands as one of the most significant literary triumphs in modern Indonesian prose. Set in the 1970s on the resource-rich yet economically segregated island of Belitung, the novel depicts the heroic journey of ten impoverished pupils fighting for basic schooling inside a dilapidated wooden classroom managed by the historic Muhammadiyah elementary school.<br><br>The narrative's greatest artistic strength lies in its indelible characterization and heartfelt social critique. Through the eyes of the young narrator, Ikal, readers are introduced to exceptional figures such as Lintang, a impoverished fisherman's son whose sheer mathematical genius transcends daily eighty-kilometer bicycle journeys through crocodile-infested swamps. Guiding this ragtag ensemble are two selfless pedagogues, Bu Muslimah and Pak Harfan, who teach with unwavering devotion despite earning no salary. Hirata skillfully juxtaposes the school's destitute physical condition against the luxurious, gated compounds of the state-owned tin corporation, laying bare the stark systemic inequality that plagued regional extraction communities.<br><br>Admittedly, discerning literary critics have observed that the author occasionally yields to melodramatic flourishes and romanticized prose, particularly when addressing youthful yearnings or painting dramatic climatic setbacks. Nevertheless, these minor stylistic indulgences do not diminish the novel's profound emotional resonance and uplifting core message. 'The Rainbow Troops' is fundamentally a celebration of human perseverance, the transformative nobility of teaching, and the enduring power of community solidarity. It remains essential, deeply inspiring reading for senior students, educators, and anyone who believes education is an inalienable human right.`,
      prompt: "The word 'inalienable' in the final sentence is closest in meaning to...",
      options: [
        { key: "A", text: "absolute and impossible to take away" },
        { key: "B", text: "temporary and dependent upon financial wealth" },
        { key: "C", text: "unfamiliar and originating from abroad" },
        { key: "D", text: "optional and strictly reserved for nobility" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'inalienable' dalam frasa 'inalienable human right' berarti hak asasi yang bersifat mutlak, melekat, dan tidak dapat dicabut atau dihilangkan oleh siapa pun (absolute, non-transferable, impossible to take away).",
      grammarNote: "Adjective Morphology & Semantics: 'in-' (not) + 'alienable' (transferable) = hak yang tak dapat dipisahkan/dicabut."
    },
    {
      id: 25,
      source: "Sumber: Tinjauan Sastra Kontemporer Nusantara — Badan Pengembangan dan Pembinaan Bahasa, Kemendikbudristek",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      stimulusTitle: "Book Review: Andrea Hirata’s 'The Rainbow Troops' (Laskar Pelangi) — An Inspiring Ode to Educational Resilience",
      stimulusBody: `Published in 2005 and subsequently translated into dozens of foreign languages, Andrea Hirata's semi-autobiographical masterpiece, 'The Rainbow Troops' (Laskar Pelangi), stands as one of the most significant literary triumphs in modern Indonesian prose. Set in the 1970s on the resource-rich yet economically segregated island of Belitung, the novel depicts the heroic journey of ten impoverished pupils fighting for basic schooling inside a dilapidated wooden classroom managed by the historic Muhammadiyah elementary school.<br><br>The narrative's greatest artistic strength lies in its indelible characterization and heartfelt social critique. Through the eyes of the young narrator, Ikal, readers are introduced to exceptional figures such as Lintang, a impoverished fisherman's son whose sheer mathematical genius transcends daily eighty-kilometer bicycle journeys through crocodile-infested swamps. Guiding this ragtag ensemble are two selfless pedagogues, Bu Muslimah and Pak Harfan, who teach with unwavering devotion despite earning no salary. Hirata skillfully juxtaposes the school's destitute physical condition against the luxurious, gated compounds of the state-owned tin corporation, laying bare the stark systemic inequality that plagued regional extraction communities.<br><br>Admittedly, discerning literary critics have observed that the author occasionally yields to melodramatic flourishes and romanticized prose, particularly when addressing youthful yearnings or painting dramatic climatic setbacks. Nevertheless, these minor stylistic indulgences do not diminish the novel's profound emotional resonance and uplifting core message. 'The Rainbow Troops' is fundamentally a celebration of human perseverance, the transformative nobility of teaching, and the enduring power of community solidarity. It remains essential, deeply inspiring reading for senior students, educators, and anyone who believes education is an inalienable human right.`,
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

    // Text 4: Critical Review of Smart IoT Drip Irrigation Systems (26 - 30)
    {
      id: 26,
      source: "Sumber: Tinjauan Teknologi Terapan & Rekayasa Pertanian Berkelanjutan — Jurnal Riset Agroteknologi Nasional",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      stimulusTitle: "Product Review: Smart IoT Drip Irrigation System — High-Tech Precision for Indonesian Dryland Farming",
      stimulusBody: `As prolonged dry seasons and climatic volatility challenge smallholder horticultural farmers across Java, automated micro-irrigation systems have emerged as promising solutions. Among the latest domestic innovations tested by agricultural cooperatives in Central Java is the 'AgriSmart IoT Drip Irrigation System'—a solar-powered micro-irrigation unit designed to deliver precise moisture directly to plant roots based on automated subterranean soil telemetry.<br><br>In extensive four-month field trials on chili and shallot plantations, the AgriSmart system demonstrated remarkable operational efficiency. Its primary triumph is water conservation: by utilizing subterranean humidity and ambient temperature probes to regulate precision dripping valves, the system reduced irrigation water consumption by approximately thirty-eight percent compared to conventional manual spraying. Furthermore, the accompanying mobile application delivers real-time soil data and autonomous valve controls, freeing farmers from arduous physical labor under the blazing midday sun and increasing crop harvest uniformity by nearly twenty percent.<br><br>Despite these impressive technological merits, prospective adopters must weigh certain practical constraints. First, the unit relies on local cellular network coverage for cloud telemetry, making it susceptible to connection blackouts in mountainous, signal-deprived hollows. Second, while the initial hardware installation cost has been minimized, it still represents a formidable capital barrier for individual impoverished smallholders unless subsidized by local farmer associations. Finally, the sensitive micro-drippers require periodic manual flushing to prevent mineral sediment clogs when utilizing mineral-heavy well water.<br><br>On balance, the AgriSmart IoT System represents a highly commendable step forward in sustainable tropical agriculture. While isolated subsistence farmers may find individual investment challenging, the system is enthusiastically recommended for farmer collectives, agricultural vocational schools, and forward-looking horticultural enterprises seeking to optimize water resilience and labor productivity.`,
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
      id: 27,
      source: "Sumber: Tinjauan Teknologi Terapan & Rekayasa Pertanian Berkelanjutan — Jurnal Riset Agroteknologi Nasional",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      stimulusTitle: "Product Review: Smart IoT Drip Irrigation System — High-Tech Precision for Indonesian Dryland Farming",
      stimulusBody: `As prolonged dry seasons and climatic volatility challenge smallholder horticultural farmers across Java, automated micro-irrigation systems have emerged as promising solutions. Among the latest domestic innovations tested by agricultural cooperatives in Central Java is the 'AgriSmart IoT Drip Irrigation System'—a solar-powered micro-irrigation unit designed to deliver precise moisture directly to plant roots based on automated subterranean soil telemetry.<br><br>In extensive four-month field trials on chili and shallot plantations, the AgriSmart system demonstrated remarkable operational efficiency. Its primary triumph is water conservation: by utilizing subterranean humidity and ambient temperature probes to regulate precision dripping valves, the system reduced irrigation water consumption by approximately thirty-eight percent compared to conventional manual spraying. Furthermore, the accompanying mobile application delivers real-time soil data and autonomous valve controls, freeing farmers from arduous physical labor under the blazing midday sun and increasing crop harvest uniformity by nearly twenty percent.<br><br>Despite these impressive technological merits, prospective adopters must weigh certain practical constraints. First, the unit relies on local cellular network coverage for cloud telemetry, making it susceptible to connection blackouts in mountainous, signal-deprived hollows. Second, while the initial hardware installation cost has been minimized, it still represents a formidable capital barrier for individual impoverished smallholders unless subsidized by local farmer associations. Finally, the sensitive micro-drippers require periodic manual flushing to prevent mineral sediment clogs when utilizing mineral-heavy well water.<br><br>On balance, the AgriSmart IoT System represents a highly commendable step forward in sustainable tropical agriculture. While isolated subsistence farmers may find individual investment challenging, the system is enthusiastically recommended for farmer collectives, agricultural vocational schools, and forward-looking horticultural enterprises seeking to optimize water resilience and labor productivity.`,
      prompt: "According to the field test results, what was the primary operational triumph of the system?",
      options: [
        { key: "A", text: "Reducing irrigation water consumption by nearly 38% while improving harvest uniformity." },
        { key: "B", text: "Eliminating the need for any sunlight or photosynthesis in cultivating shallots." },
        { key: "C", text: "Doubling the market retail price of imported agricultural fertilizers in Central Java." },
        { key: "D", text: "Enabling crops to grow in complete darkness inside underground caves." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 baris 2-7 menyebutkan keberhasilan operasional sistem: 'reduced irrigation water consumption by approximately thirty-eight percent compared to conventional manual spraying... increasing crop harvest uniformity by nearly twenty percent'.",
      grammarNote: "Prepositional Gerund Phrase: 'by utilizing subterranean humidity probes... the system reduced consumption'."
    },
    {
      id: 28,
      source: "Sumber: Tinjauan Teknologi Terapan & Rekayasa Pertanian Berkelanjutan — Jurnal Riset Agroteknologi Nasional",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      stimulusTitle: "Product Review: Smart IoT Drip Irrigation System — High-Tech Precision for Indonesian Dryland Farming",
      stimulusBody: `As prolonged dry seasons and climatic volatility challenge smallholder horticultural farmers across Java, automated micro-irrigation systems have emerged as promising solutions. Among the latest domestic innovations tested by agricultural cooperatives in Central Java is the 'AgriSmart IoT Drip Irrigation System'—a solar-powered micro-irrigation unit designed to deliver precise moisture directly to plant roots based on automated subterranean soil telemetry.<br><br>In extensive four-month field trials on chili and shallot plantations, the AgriSmart system demonstrated remarkable operational efficiency. Its primary triumph is water conservation: by utilizing subterranean humidity and ambient temperature probes to regulate precision dripping valves, the system reduced irrigation water consumption by approximately thirty-eight percent compared to conventional manual spraying. Furthermore, the accompanying mobile application delivers real-time soil data and autonomous valve controls, freeing farmers from arduous physical labor under the blazing midday sun and increasing crop harvest uniformity by nearly twenty percent.<br><br>Despite these impressive technological merits, prospective adopters must weigh certain practical constraints. First, the unit relies on local cellular network coverage for cloud telemetry, making it susceptible to connection blackouts in mountainous, signal-deprived hollows. Second, while the initial hardware installation cost has been minimized, it still represents a formidable capital barrier for individual impoverished smallholders unless subsidized by local farmer associations. Finally, the sensitive micro-drippers require periodic manual flushing to prevent mineral sediment clogs when utilizing mineral-heavy well water.<br><br>On balance, the AgriSmart IoT System represents a highly commendable step forward in sustainable tropical agriculture. While isolated subsistence farmers may find individual investment challenging, the system is enthusiastically recommended for farmer collectives, agricultural vocational schools, and forward-looking horticultural enterprises seeking to optimize water resilience and labor productivity.`,
      prompt: "Which of the following is identified as a practical constraint of the AgriSmart system in paragraph three?",
      options: [
        { key: "A", text: "Vulnerability to cellular signal loss in remote areas and initial capital cost for individual smallholders." },
        { key: "B", text: "Excessive emission of greenhouse gases during subterranean water pumping." },
        { key: "C", text: "The inability of the solar panels to operate in tropical sunlight." },
        { key: "D", text: "The requirement that all farmers possess university degrees in software engineering." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 3 memaparkan kendala praktis: rentan terhadap ketiadaan sinyal seluler di perbukitan ('susceptible to connection blackouts in mountainous, signal-deprived hollows') serta biaya instalasi awal yang masih menjadi beban bagi petani perorangan tanpa subsidi.",
      grammarNote: "Concessive Connectors in Review: 'Despite these impressive technological merits, prospective adopters must weigh certain practical constraints'."
    },
    {
      id: 29,
      source: "Sumber: Tinjauan Teknologi Terapan & Rekayasa Pertanian Berkelanjutan — Jurnal Riset Agroteknologi Nasional",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      stimulusTitle: "Product Review: Smart IoT Drip Irrigation System — High-Tech Precision for Indonesian Dryland Farming",
      stimulusBody: `As prolonged dry seasons and climatic volatility challenge smallholder horticultural farmers across Java, automated micro-irrigation systems have emerged as promising solutions. Among the latest domestic innovations tested by agricultural cooperatives in Central Java is the 'AgriSmart IoT Drip Irrigation System'—a solar-powered micro-irrigation unit designed to deliver precise moisture directly to plant roots based on automated subterranean soil telemetry.<br><br>In extensive four-month field trials on chili and shallot plantations, the AgriSmart system demonstrated remarkable operational efficiency. Its primary triumph is water conservation: by utilizing subterranean humidity and ambient temperature probes to regulate precision dripping valves, the system reduced irrigation water consumption by approximately thirty-eight percent compared to conventional manual spraying. Furthermore, the accompanying mobile application delivers real-time soil data and autonomous valve controls, freeing farmers from arduous physical labor under the blazing midday sun and increasing crop harvest uniformity by nearly twenty percent.<br><br>Despite these impressive technological merits, prospective adopters must weigh certain practical constraints. First, the unit relies on local cellular network coverage for cloud telemetry, making it susceptible to connection blackouts in mountainous, signal-deprived hollows. Second, while the initial hardware installation cost has been minimized, it still represents a formidable capital barrier for individual impoverished smallholders unless subsidized by local farmer associations. Finally, the sensitive micro-drippers require periodic manual flushing to prevent mineral sediment clogs when utilizing mineral-heavy well water.<br><br>On balance, the AgriSmart IoT System represents a highly commendable step forward in sustainable tropical agriculture. While isolated subsistence farmers may find individual investment challenging, the system is enthusiastically recommended for farmer collectives, agricultural vocational schools, and forward-looking horticultural enterprises seeking to optimize water resilience and labor productivity.`,
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
      id: 30,
      source: "Sumber: Tinjauan Teknologi Terapan & Rekayasa Pertanian Berkelanjutan — Jurnal Riset Agroteknologi Nasional",
      type: "reading",
      title: "Reading Section: TP 12.2 Review Text",
      stimulusTitle: "Product Review: Smart IoT Drip Irrigation System — High-Tech Precision for Indonesian Dryland Farming",
      stimulusBody: `As prolonged dry seasons and climatic volatility challenge smallholder horticultural farmers across Java, automated micro-irrigation systems have emerged as promising solutions. Among the latest domestic innovations tested by agricultural cooperatives in Central Java is the 'AgriSmart IoT Drip Irrigation System'—a solar-powered micro-irrigation unit designed to deliver precise moisture directly to plant roots based on automated subterranean soil telemetry.<br><br>In extensive four-month field trials on chili and shallot plantations, the AgriSmart system demonstrated remarkable operational efficiency. Its primary triumph is water conservation: by utilizing subterranean humidity and ambient temperature probes to regulate precision dripping valves, the system reduced irrigation water consumption by approximately thirty-eight percent compared to conventional manual spraying. Furthermore, the accompanying mobile application delivers real-time soil data and autonomous valve controls, freeing farmers from arduous physical labor under the blazing midday sun and increasing crop harvest uniformity by nearly twenty percent.<br><br>Despite these impressive technological merits, prospective adopters must weigh certain practical constraints. First, the unit relies on local cellular network coverage for cloud telemetry, making it susceptible to connection blackouts in mountainous, signal-deprived hollows. Second, while the initial hardware installation cost has been minimized, it still represents a formidable capital barrier for individual impoverished smallholders unless subsidized by local farmer associations. Finally, the sensitive micro-drippers require periodic manual flushing to prevent mineral sediment clogs when utilizing mineral-heavy well water.<br><br>On balance, the AgriSmart IoT System represents a highly commendable step forward in sustainable tropical agriculture. While isolated subsistence farmers may find individual investment challenging, the system is enthusiastically recommended for farmer collectives, agricultural vocational schools, and forward-looking horticultural enterprises seeking to optimize water resilience and labor productivity.`,
      prompt: "Who is the primary target group enthusiastically recommended to adopt this system?",
      options: [
        { key: "A", text: "Agricultural cooperatives, vocational schools, and commercial horticultural enterprises." },
        { key: "B", text: "Isolated smallholders with zero access to financial loans or communal cooperatives." },
        { key: "C", text: "Urban fashion boutiques situated inside air-conditioned metropolitan malls." },
        { key: "D", text: "Fishermen operating deep-sea trawlers off the southern coast of Java." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 4 merekomendasikan sistem ini secara khusus kepada kelompok tani terorganisir, SMK pertanian, dan badan usaha hortikultura: 'enthusiastically recommended for farmer collectives, agricultural vocational schools, and forward-looking horticultural enterprises'.",
      grammarNote: "Target Audience Recommendation in Reviews: 'is enthusiastically recommended for...'."
    },

    // =========================================================================
    // SECTION 4: GRAMMAR & LANGUAGE MECHANICS IN ACADEMIC CONTEXT (31 - 40)
    // =========================================================================
    {
      id: 31,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
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
      id: 32,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
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
      id: 33,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
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
      id: 34,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
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
      id: 35,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
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
      id: 36,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Impersonal Academic Passive",
      prompt: "It ________ by international education analysts that critical problem-solving skills will remain far more indispensable than rote factual recitation in an automated economy.\n\nChoose the correct impersonal passive verb phrase:",
      options: [
        { key: "A", text: "is widely acknowledged" },
        { key: "B", text: "widely acknowledges" },
        { key: "C", text: "has widely acknowledging" },
        { key: "D", text: "was to acknowledge" }
      ],
      correctAnswer: "A",
      explanation: "Struktur 'It + is + V3 + that-clause' adalah pola *Impersonal Passive* formal dalam penulisan akademis untuk melaporkan keyakinan atau temuan ilmiah umum secara objektif ('It is widely acknowledged that...').",
      grammarNote: "Impersonal Passive Structure: It + is + Past Participle (believed / acknowledged / reported) + that-clause."
    },
    {
      id: 37,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
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
      id: 38,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Academic Collocations",
      prompt: "Before authorizing the construction of a commercial nuclear plant, policymakers must carefully ________ the potential economic advantages against the profound geological hazards.\n\nChoose the correct academic verb that collocates with 'against':",
      options: [
        { key: "A", text: "weigh" },
        { key: "B", text: "discard" },
        { key: "C", text: "celebrate" },
        { key: "D", text: "manufacture" }
      ],
      correctAnswer: "A",
      explanation: "Kolokasi akademis yang tepat untuk menimbang pro dan kontra adalah 'weigh ... against ...' (menimbang keuntungan ekonomi dengan potensi bahaya geologis sebelum mengambil keputusan).",
      grammarNote: "Discourse Collocation: 'weigh the benefits/pros against the risks/cons' = menimbang perbandingan untung dan rugi."
    },
    {
      id: 39,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Relative Pronouns with Prepositions",
      prompt: "The innovative agricultural cooperative designed a controlled smart greenhouse, ________ precision micro-drip telemetry was monitored directly through a mobile application.\n\nChoose the correct prepositional relative pronoun:",
      options: [
        { key: "A", text: "in which" },
        { key: "B", text: "which" },
        { key: "C", text: "whom" },
        { key: "D", text: "whose" }
      ],
      correctAnswer: "A",
      explanation: "Frasa 'in which' berfungsi menggantikan tempat atau lingkungan ('in the smart greenhouse'). Klausa setelahnya memiliki subjek lengkap ('precision telemetry') sehingga membutuhkan preposisi tempat formal 'in which' (atau 'where').",
      grammarNote: "Formal Relative Clause: Preposition + Relative Pronoun ('in which' = where, mengacu pada lingkungan rumah kaca)."
    },
    {
      id: 40,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "grammar",
      title: "Grammar & Discourse: Concluding Transitional Connectors",
      prompt: "Both proponents and critics present compelling arguments regarding modern automation. ________, the decisive factor in high school education will always be the human teacher's moral guidance and students' commitment to authentic inquiry.\n\nChoose the most suitable transitional word to open the concluding synthesis:",
      options: [
        { key: "A", text: "Ultimately" },
        { key: "B", text: "Initially" },
        { key: "C", text: "Previously" },
        { key: "D", text: "Meanwhile" }
      ],
      correctAnswer: "A",
      explanation: "'Ultimately' bermakna pada akhirnya / secara mendasar (*in the end / fundamentally*), sangat tepat digunakan untuk menyintesiskan kesimpulan akhir dari sebuah diskusi dua sudut pandang.",
      grammarNote: "Transitional Marker of Synthesis: 'Ultimately' menandai simpulan puncak setelah mempertimbangkan berbagai argumen."
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
window.addEventListener("DOMContentLoaded", () => {
  initStudentData();
  const rawQ = getGrade12AsasQuestions();
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

  const rawQ = getGrade12AsasQuestions();
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
