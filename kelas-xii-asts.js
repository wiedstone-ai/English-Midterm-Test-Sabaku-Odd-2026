/**
 * ASESMEN SUMATIF TENGAH SEMESTER (ASTS) GASAL 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT XII (FASE F+)
 * Standar: TKA & AKM Literasi (Pilihan Ganda Biasa, Kompleks Matrix, & MCMA)
 * Dilengkapi Verifikasi Password ASTS Terpadu
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
    "id": 1,
    "source": "Sumber: Panduan Debat Parlemen Siswa SMA Tingkat Nasional — Kemendikbudristek & Puspresnas",
    "type": "listening_pictures",
    "title": "Listening Section: Part I - Pictures",
    "audioText": "Number one. Look at the pictures. In this academic forum, two formal student speakers are standing at separate wooden podiums, presenting opposing perspectives on artificial intelligence before a moderator and an engaged audience. Which picture best corresponds to the spoken description?",
    "prompt": "Look at the four pictures below. Which picture matches the academic debate scene described in the audio?",
    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.debate,
        "label": "Two speakers debating opposing perspectives at academic podiums"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.solo_singer,
        "label": "A musical performer singing on a concert stage"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.lab_microscope,
        "label": "A scientist inspecting samples through a laboratory microscope"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.hiking_trail,
        "label": "A mountaineer hiking along an outdoor trail"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Audio mendeskripsikan: 'two formal student speakers are standing at separate wooden podiums, presenting opposing perspectives... before a moderator and an engaged audience'. Gambar A menampilkan format debat akademis dua podium dengan pembicara dan penonton.",
    "grammarNote": "Present Continuous Tense ('are standing', 'presenting') & Academic Discussion Terminology ('opposing perspectives', 'moderator', 'engaged audience')."
  },
  {
    "id": 2,
    "source": "Sumber: Publikasi Transisi Energi Terbarukan Nasional — Kementerian ESDM & Dewan Energi Nasional",
    "type": "listening_pictures",
    "title": "Listening Section: Part I - Pictures",
    "audioText": "Number two. Look at the pictures. This sustainable energy facility integrates an extensive array of blue photovoltaic solar panels on rooftops alongside towering modern wind turbines rotating in the sea breeze under clear sunny skies. Which picture illustrates this renewable power generation system?",
    "prompt": "Which picture accurately depicts the sustainable renewable energy infrastructure described in the audio?",
    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.coal_plant,
        "label": "A coal-fired power plant emitting dark exhaust fumes"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.solar_wind,
        "label": "A renewable facility with solar photovoltaic panels and wind turbines"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.oil_rig,
        "label": "An offshore fossil fuel drilling rig in deep water"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.busy_highway,
        "label": "A congested highway with gasoline-powered vehicles"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Audio secara spesifik menyebutkan: 'integrates an extensive array of blue photovoltaic solar panels... alongside towering modern wind turbines rotating in the sea breeze'. Gambar A merepresentasikan kombinasi panel surya dan kincir turbin angin.",
    "grammarNote": "Descriptive Compound Nouns & Adjectives: 'photovoltaic solar panels', 'towering modern wind turbines', 'sustainable energy facility'."
  },
  {
    "id": 3,
    "source": "Sumber: Inovasi Pertanian Cerdas Iklim — Badan Riset dan Inovasi Nasional (BRIN) & Kementan RI",
    "type": "listening_pictures",
    "title": "Listening Section: Part I - Pictures",
    "audioText": "Number three. Look at the pictures. This contemporary agricultural installation features a controlled smart glass greenhouse equipped with automated micro-irrigation nozzles and aerial telemetry monitoring sensors to foster sustainable crop growth. Which picture portrays this modern farming structure?",
    "prompt": "Which picture matches the high-technology greenhouse facility described in the recording?",
    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.industrial_factory,
        "label": "A heavy manufacturing industrial plant with tall brick chimneys"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.traditional_farm,
        "label": "A traditional farmer hand-tilling soil with a manual hoe"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.smart_greenhouse,
        "label": "A high-tech smart greenhouse with automated sensors and irrigation"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.desert_dunes,
        "label": "Dry arid desert sand dunes under direct sunlight"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Audio menerangkan: 'controlled smart glass greenhouse equipped with automated micro-irrigation nozzles and aerial telemetry monitoring sensors'. Gambar A memperlihatkan rumah kaca modern (*smart greenhouse*) berteknologi sensor otomatis.",
    "grammarNote": "Passive Participle Modifier: 'controlled smart glass greenhouse equipped with automated nozzles'."
  },
  {
    "id": 4,
    "source": "Sumber: Percakapan Pembelajaran Berbasis Riset SMA — Modul Ajar Kurikulum Merdeka Fase F",
    "type": "listening_dialogue",
    "title": "Listening Section: Part II - Dialogues",
    "audioText": "Number four. Listen to a conversation between a senior student and an English teacher.\n\nStudent: Good morning, Mrs. Anjani. I noticed many classmates are using generative AI to produce their scientific essay drafts in just seconds. Doesn't that risk diminishing our genuine critical thinking abilities?\nTeacher: That is a very valid concern, Farhan. While AI can certainly assist in brainstorming complex outlines and checking syntactic errors, relying completely on automated outputs weakens your analytical reasoning. In our school, students must write their reflections independently and use AI strictly as a research assistant, not a ghostwriter.\nStudent: I agree completely. That means transparency and personal originality must always remain our top priorities.\n\nQuestion: What is the teacher's primary advice regarding generative AI tools?",
    "prompt": "Based on the dialogue between Farhan and Mrs. Anjani, what is the teacher's primary advice regarding generative AI tools?",
    "options": [
      {
        "key": "A",
        "text": "Teachers should replace all classroom argumentative writing tasks with multiple-choice quizzes."
      },
      {
        "key": "B",
        "text": "Schools must enforce an absolute ban on all digital devices and computer applications."
      },
      {
        "key": "C",
        "text": "Learners ought to allow AI algorithms to compose their final scientific research essays automatically."
      },
      {
        "key": "D",
        "text": "Students should use AI strictly for brainstorming and linguistic editing, while keeping their analysis independent."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Guru (Mrs. Anjani) menyatakan bahwa ketergantungan penuh pada AI dapat melemahkan nalar kritis ('weakens your analytical reasoning'). Oleh karena itu, siswa harus tetap menulis refleksi secara mandiri dan memperlakukan AI sebagai asisten perancang kerangka/pengecek tata bahasa, bukan penulis utama.",
    "grammarNote": "Modals of Necessity & Concession: 'While AI can certainly assist... students must write their reflections independently'.",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number four. Listen to a conversation between a student and a teacher.",
        "pauseAfter": 400
      },
      {
        "role": "speaker1",
        "gender": "male",
        "pitch": 0.85,
        "text": "Good morning, Mrs. Anjani. I noticed many classmates are using generative AI to produce their essay drafts in just seconds. Doesn't that risk diminishing our genuine critical thinking abilities?",
        "pauseAfter": 450
      },
      {
        "role": "speaker2",
        "gender": "female",
        "pitch": 1.25,
        "text": "That is a very valid concern, Farhan. While AI can certainly assist in brainstorming complex outlines and checking syntactic errors, relying completely on automated outputs weakens your analytical reasoning. In our school, students must write their reflections independently and use AI strictly as a research assistant, not a ghostwriter.",
        "pauseAfter": 450
      },
      {
        "role": "speaker1",
        "gender": "male",
        "pitch": 0.85,
        "text": "I agree completely. That means transparency and personal originality must always remain our top priorities.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What is the teacher's primary advice regarding generative AI tools?"
      }
    ]
  },
  {
    "id": 5,
    "source": "Sumber: Diskusi Kelompok Terfokus Siswa — Simposium Energi Masa Depan SMA Jawa Tengah",
    "type": "listening_dialogue",
    "title": "Listening Section: Part II - Dialogues",
    "audioText": "Number five. Listen to a conversation between two high school seniors preparing a presentation.\n\nRizky: Maya, when evaluating Indonesia's plan to achieve net-zero carbon emissions, do you believe nuclear energy is a more practical solution than decentralized solar and geothermal systems?\nMaya: Well, nuclear power undoubtedly provides a dense and continuous baseload electricity supply without greenhouse gases. However, our nation sits directly upon active tectonic fault lines. The immense cost of disaster containment and safe waste management makes solar and geothermal microgrids far safer for remote archipelagic islands.\nRizky: That makes complete sense. A diversified mix prioritizing natural geothermal and solar resources minimizes catastrophic environmental risks.\n\nQuestion: Why does Maya express caution regarding large nuclear power plants in Indonesia?",
    "prompt": "According to Maya, why should Indonesia exercise caution regarding the construction of nuclear power plants?",
    "options": [
      {
        "key": "A",
        "text": "Indonesia is located along active tectonic fault lines with high geological and waste containment risks."
      },
      {
        "key": "B",
        "text": "Nuclear energy generates significantly higher levels of carbon dioxide than coal combustion."
      },
      {
        "key": "C",
        "text": "Renewable solar installations require much more uranium fuel than traditional power stations."
      },
      {
        "key": "D",
        "text": "Geothermal energy has proven completely ineffective for generating electricity across Central Java."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Maya menegaskan bahwa meskipun nuklir menghasilkan energi besar, Indonesia terletak tepat di atas patahan tektonik aktif ('our nation sits directly upon active tectonic fault lines'), sehingga risiko bencana geologis dan pengelolaan limbah radioaktif sangat tinggi.",
    "grammarNote": "Contrastive Discourse Markers: 'undoubtedly provides... However, our nation sits directly upon active tectonic fault lines'.",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number five. Listen to a conversation between two high school seniors preparing an environmental presentation.",
        "pauseAfter": 400
      },
      {
        "role": "speaker1",
        "gender": "male",
        "pitch": 0.85,
        "text": "Maya, when evaluating Indonesia's plan to achieve net-zero carbon emissions, do you believe nuclear energy is a more practical solution than decentralized solar and geothermal systems?",
        "pauseAfter": 450
      },
      {
        "role": "speaker2",
        "gender": "female",
        "pitch": 1.25,
        "text": "Well, nuclear power undoubtedly provides a dense and continuous baseload electricity supply without greenhouse gases. However, our nation sits directly upon active tectonic fault lines. The immense cost of disaster containment and safe waste management makes solar and geothermal microgrids far safer for remote archipelagic islands.",
        "pauseAfter": 450
      },
      {
        "role": "speaker1",
        "gender": "male",
        "pitch": 0.85,
        "text": "That makes complete sense. A diversified mix prioritizing natural geothermal and solar resources minimizes catastrophic environmental risks.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: Why does Maya express caution regarding large nuclear power plants in Indonesia?"
      }
    ]
  },
  {
    "id": 6,
    "source": "Sumber: Wawancara Komunitas Literasi Remaja — Dewan Kesenian Daerah & Majalah Edukasi",
    "type": "listening_dialogue",
    "title": "Listening Section: Part II - Dialogues",
    "audioText": "Number six. Listen to a dialogue between two members of the school book club.\n\nDanang: Sinta, I recently finished reading Andrea Hirata's classic novel, 'The Rainbow Troops'. Have you read it?\nSinta: Yes, twice! What impressed me most was how the narrative highlights unyielding determination for education amidst severe economic poverty in Belitung.\nDanang: Exactly. Some critics claim the pacing is occasionally melodramatic, yet the profound emotional bond between the ten pupils and their dedicated teacher, Bu Muslimah, is genuinely inspiring.\nSinta: I couldn't agree more. It reminds us that quality learning is fueled by human empathy, resilience, and mutual hope rather than luxurious school infrastructure.\n\nQuestion: What core thematic value of the novel do both speakers strongly admire?",
    "prompt": "What core thematic strength of Andrea Hirata's novel 'The Rainbow Troops' do both speakers strongly admire?",
    "options": [
      {
        "key": "A",
        "text": "The commercial profitability of modern tin mining corporations operating in Belitung."
      },
      {
        "key": "B",
        "text": "The unwavering determination for education and mutual human empathy in overcoming poverty."
      },
      {
        "key": "C",
        "text": "The sophisticated scientific laboratory facilities established in remote rural settlements."
      },
      {
        "key": "D",
        "text": "The leisurely vacation lifestyle experienced by urban tourists visiting coastal beaches."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kedua siswa mengagumi kegigihan luar biasa dalam menuntut ilmu ('unyielding determination for education amidst severe economic poverty') serta empati dan ketangguhan manusiawi dalam menghadapi keterbatasan fasilitas.",
    "grammarNote": "Concessive Clause with 'Yet': 'Some critics claim the pacing is melodramatic, yet the profound emotional bond... is genuinely inspiring'.",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number six. Listen to a dialogue between two members of the school book club.",
        "pauseAfter": 400
      },
      {
        "role": "speaker1",
        "gender": "male",
        "pitch": 0.85,
        "text": "Sinta, I recently finished reading Andrea Hirata's classic novel, The Rainbow Troops. Have you read it?",
        "pauseAfter": 450
      },
      {
        "role": "speaker2",
        "gender": "female",
        "pitch": 1.25,
        "text": "Yes, twice! What impressed me most was how the narrative highlights unyielding determination for education amidst severe economic poverty in Belitung.",
        "pauseAfter": 450
      },
      {
        "role": "speaker1",
        "gender": "male",
        "pitch": 0.85,
        "text": "Exactly. Some critics claim the pacing is occasionally melodramatic, yet the profound emotional bond between the ten pupils and their dedicated teacher, Bu Muslimah, is genuinely inspiring.",
        "pauseAfter": 450
      },
      {
        "role": "speaker2",
        "gender": "female",
        "pitch": 1.25,
        "text": "I couldn't agree more. It reminds us that quality learning is fueled by human empathy, resilience, and mutual hope rather than luxurious school infrastructure.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What core thematic value of the novel do both speakers strongly admire?"
      }
    ]
  },
  {
    "id": 7,
    "source": "Sumber: Kuliah Umum Transisi Energi Bersih — Forum Akademik Teknik Lingkungan Universitas Indonesia",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Academic Talks",
    "audioText": "Questions 7 and 8 are based on the following lecture extract.\n\nGood afternoon, students. Today we examine the global transition toward industrial decarbonization. While industrial manufacturing produces nearly thirty percent of worldwide greenhouse emissions, transitioning completely to renewable power presents a fundamental challenge known as the intermittency dilemma. Solar photovoltaics and wind turbines depend entirely upon variable weather conditions. When calm nights occur, electricity output declines abruptly. Therefore, energy planners emphasize that renewable adoption must be paired with either high-capacity battery storage systems or reliable, continuous baseload sources such as geothermal energy, as successfully harnessed in Central Java. Without dependable baseload stabilization, modern electrical grids risk unexpected blackouts and industrial disruption.\n\nNumber seven. What is the main topic of the professor's lecture?",
    "prompt": "What is the primary topic of the academic lecture?",
    "options": [
      {
        "key": "A",
        "text": "The economic superiority of burning unprocessed fossil coal in modern manufacturing plants."
      },
      {
        "key": "B",
        "text": "The complete shutdown of all solar power installations across archipelagic Southeast Asia."
      },
      {
        "key": "C",
        "text": "The necessity of reliable baseload power and storage systems to address renewable energy intermittency."
      },
      {
        "key": "D",
        "text": "The elimination of electrical transmission lines in urban metropolitan residential zones."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Dosen memaparkan tantangan intermitensi energi terbarukan ('intermittency dilemma') dan menekankan bahwa pemanfaatan surya/angin harus dipadukan dengan stabilisasi beban dasar (*baseload*) seperti panas bumi dan baterai penyimpan energi agar pasokan listrik industri tetap stabil.",
    "grammarNote": "Cause and Effect Discourse Connectors: 'depend entirely upon variable weather... Therefore, energy planners emphasize...'."
  },
  {
    "id": 8,
    "source": "Sumber: Kuliah Umum Transisi Energi Bersih — Forum Akademik Teknik Lingkungan Universitas Indonesia",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Academic Talks",
    "audioText": "Number eight. According to the speaker, why are solar and wind systems insufficient on their own for heavy manufacturing industries?",
    "prompt": "According to the speaker, why can solar and wind installations not power heavy industries alone without supportive systems?",
    "options": [
      {
        "key": "A",
        "text": "International regulatory treaties prohibit factories from connecting to solar panels."
      },
      {
        "key": "B",
        "text": "They consume far more freshwater than traditional nuclear and coal boiling facilities."
      },
      {
        "key": "C",
        "text": "Their machinery produces toxic chemical smoke that damages industrial manufacturing robots."
      },
      {
        "key": "D",
        "text": "Their power output fluctuates depending on weather changes, creating supply intermittency during calm nights."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Dosen menjelaskan bahwa pembangkit surya dan angin memiliki kendala variasi cuaca: 'depend entirely upon variable weather conditions. When calm nights occur, electricity output declines abruptly'.",
    "grammarNote": "Temporal & Conditional Adverbial Clauses: 'When calm nights occur, electricity output declines abruptly'."
  },
  {
    "id": 9,
    "source": "Sumber: Pidato Kunci Simposium Literasi Digital SMA — Ikatan Guru Bahasa dan Komunikasi Indonesia",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Academic Talks",
    "audioText": "Questions 9 and 10 are based on the following symposium address.\n\nDistinguished educators and students. As artificial intelligence models become increasingly integrated into educational software, we must recalibrate our definition of academic achievement. In previous decades, memorizing vast bodies of facts and reciting grammatical rules demonstrated high scholarly competence. Today, however, automated search algorithms can retrieve factual data in milliseconds. Consequently, the true value of modern high school graduates lies in their capacity for rigorous critical synthesis, ethical discernment, and creative inquiry. Educators should avoid banning emerging technological tools; rather, institutions must foster an academic culture where students actively question machine outputs, detect algorithmic biases, and formulate original solutions to complex real-world dilemmas.\n\nNumber nine. How has the definition of academic competence shifted according to the speaker?",
    "prompt": "According to the keynote speaker, how has the definition of student academic competence changed in the modern digital era?",
    "options": [
      {
        "key": "A",
        "text": "From mere rote memorization of facts to critical synthesis, ethical evaluation, and creative problem-solving."
      },
      {
        "key": "B",
        "text": "From collaborative team research to completely isolated, internet-free manual memorization."
      },
      {
        "key": "C",
        "text": "From understanding scientific principles to blind acceptance of all algorithmic data results."
      },
      {
        "key": "D",
        "text": "From creative essay composition to memorizing telephone numbers and postal codes."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pembicara menjelaskan pergeseran kompetensi dari hafalan informasi pasif (*rote memorization*) menuju kemampuan sintesis kritis, pertimbangan etika, dan pemecahan masalah kreatif (*critical synthesis, ethical discernment, and creative inquiry*).",
    "grammarNote": "Prepositional Contrast: 'From mere memorizing vast bodies of facts... to rigorous critical synthesis and ethical discernment'."
  },
  {
    "id": 10,
    "source": "Sumber: Pidato Kunci Simposium Literasi Digital SMA — Ikatan Guru Bahasa dan Komunikasi Indonesia",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Academic Talks",
    "audioText": "Number ten. What constructive action should educational institutions take regarding modern AI tools?",
    "prompt": "What constructive approach does the speaker urge educational institutions to adopt toward AI technologies?",
    "options": [
      {
        "key": "A",
        "text": "Confiscate all digital devices at the school entrance and prohibit all computer science subjects."
      },
      {
        "key": "B",
        "text": "Guide students to question machine outputs critically, identify algorithmic biases, and create authentic solutions."
      },
      {
        "key": "C",
        "text": "Delegate all grading, evaluation, and disciplinary decisions entirely to automated software."
      },
      {
        "key": "D",
        "text": "Instruct students never to consult scientific journals or verified library encyclopedias."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pembicara menyarankan agar sekolah membimbing siswa untuk bersikap kritis terhadap hasil mesin, mengidentifikasi bias algoritma, dan merumuskan solusi orisinal ('actively question machine outputs, detect algorithmic biases, and formulate original solutions').",
    "grammarNote": "Modal Parallelism with Imperative Verbs: 'question machine outputs, detect algorithmic biases, and formulate original solutions'."
  },
  {
    "id": 11,
    "source": "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer — Ikatan Peneliti Kurikulum Nasional (2026)",
    "type": "reading",
    "title": "Reading Section: TP 12.1 Discussion Text",
    "stimulusTitle": "Generative Artificial Intelligence in Secondary Classrooms: Revolutionary Opportunity or Cognitive Threat?",
    "stimulusBody": "The unprecedented integration of generative artificial intelligence into high school environments has sparked an intensive pedagogical debate worldwide. Proponents argue that intelligent language models democratize learning by serving as round-the-clock personalized tutors. Students struggling with intricate scientific concepts, foreign language composition, or algorithmic coding can receive tailored explanations suited to their individual comprehension speeds. Furthermore, advocates highlight that engaging with digital tools equips prospective graduates with essential digital literacy and prompting skills demanded by modern university faculties and automated professional sectors.<br><br>Conversely, cautious educators and cognitive researchers express profound reservations. They contend that unconditional reliance on automated chatbots induces cognitive atrophy, steadily eroding students' capacity for sustained concentration and independent analytical synthesis. When learners delegate the drafting of essays or problem-solving calculations to automated systems, they forfeit the vital intellectual struggle necessary to cultivate authentic problem-solving resilience. Moreover, generative algorithms frequently generate convincing factual hallucinations and reinforce systemic cultural biases embedded in their training datasets, misleading students who lack mature evaluative judgment.<br><br>In light of these contrasting viewpoints, an outright prohibition of technological tools appears both impractical and short-sighted. Instead, high schools should cultivate a balanced educational framework. Educational leaders must formulate clear, enforceable ethical guidelines that delineate acceptable technological assistance from unacceptable academic dishonesty. Rather than assessing solely static written outputs, educators ought to prioritize interactive oral defenses, collaborative research workshops, and reflective handwritten journals. By treating artificial intelligence as a supportive analytical instrument rather than a surrogate intellect, secondary institutions can foster technologically proficient scholars who retain rigorous critical judgment.",
    "prompt": "What is the primary communicative purpose of the text above?",
    "options": [
      {
        "key": "A",
        "text": "To provide step-by-step technical instructions on programming deep neural network algorithms."
      },
      {
        "key": "B",
        "text": "To persuade educational authorities to ban all electronic smartphones and computers from school premises."
      },
      {
        "key": "C",
        "text": "To present balanced arguments regarding the benefits and drawbacks of generative AI in high school classrooms."
      },
      {
        "key": "D",
        "text": "To entertain readers with humorous fictional stories about automated robots replacing teachers."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Teks di atas merupakan Discussion Text yang menyajikan dua sudut pandang berimbang: sisi manfaat AI (tutor personal, akselerasi pemahaman) dan sisi risiko (atrofi kognitif, plagiarisme, halusinasi fakta), serta diakhiri dengan simpulan/rekomendasi bijak.",
    "grammarNote": "Discussion Text Generic Structure: Issue (Paragraph 1) -> Arguments For (Paragraph 1) -> Arguments Against (Paragraph 2) -> Balanced Conclusion / Recommendation (Paragraph 3)."
  },
  {
    "id": 12,
    "source": "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer — Ikatan Peneliti Kurikulum Nasional (2026)",
    "type": "reading",
    "title": "Reading Section: TP 12.1 Discussion Text",
    "stimulusTitle": "Generative Artificial Intelligence in Secondary Classrooms: Revolutionary Opportunity or Cognitive Threat?",
    "stimulusBody": "The unprecedented integration of generative artificial intelligence into high school environments has sparked an intensive pedagogical debate worldwide. Proponents argue that intelligent language models democratize learning by serving as round-the-clock personalized tutors. Students struggling with intricate scientific concepts, foreign language composition, or algorithmic coding can receive tailored explanations suited to their individual comprehension speeds. Furthermore, advocates highlight that engaging with digital tools equips prospective graduates with essential digital literacy and prompting skills demanded by modern university faculties and automated professional sectors.<br><br>Conversely, cautious educators and cognitive researchers express profound reservations. They contend that unconditional reliance on automated chatbots induces cognitive atrophy, steadily eroding students' capacity for sustained concentration and independent analytical synthesis. When learners delegate the drafting of essays or problem-solving calculations to automated systems, they forfeit the vital intellectual struggle necessary to cultivate authentic problem-solving resilience. Moreover, generative algorithms frequently generate convincing factual hallucinations and reinforce systemic cultural biases embedded in their training datasets, misleading students who lack mature evaluative judgment.<br><br>In light of these contrasting viewpoints, an outright prohibition of technological tools appears both impractical and short-sighted. Instead, high schools should cultivate a balanced educational framework. Educational leaders must formulate clear, enforceable ethical guidelines that delineate acceptable technological assistance from unacceptable academic dishonesty. Rather than assessing solely static written outputs, educators ought to prioritize interactive oral defenses, collaborative research workshops, and reflective handwritten journals. By treating artificial intelligence as a supportive analytical instrument rather than a surrogate intellect, secondary institutions can foster technologically proficient scholars who retain rigorous critical judgment.",
    "prompt": "According to the proponents mentioned in the first paragraph, how does generative AI positively benefit secondary learners?",
    "options": [
      {
        "key": "A",
        "text": "It replaces all university professors with automated robotic software programs."
      },
      {
        "key": "B",
        "text": "It eliminates the requirement for students to attend high school lessons or read textbooks."
      },
      {
        "key": "C",
        "text": "It automatically awards top grades on international examinations without human evaluation."
      },
      {
        "key": "D",
        "text": "It provides personalized round-the-clock tutoring and builds valuable digital skills for future academic endeavors."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Paragraf 1 baris 2-5 menjelaskan manfaat pendukung: 'serving as round-the-clock personalized tutors' dan 'equips prospective graduates with essential digital literacy and prompting skills demanded by modern university faculties'.",
    "grammarNote": "Gerunds as Subjects & Objects of Prepositions: 'serving as personalized tutors', 'equips graduates with essential literacy'."
  },
  {
    "id": 13,
    "source": "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer — Ikatan Peneliti Kurikulum Nasional (2026)",
    "type": "reading",
    "title": "Reading Section: TP 12.1 Discussion Text",
    "stimulusTitle": "Generative Artificial Intelligence in Secondary Classrooms: Revolutionary Opportunity or Cognitive Threat?",
    "stimulusBody": "The unprecedented integration of generative artificial intelligence into high school environments has sparked an intensive pedagogical debate worldwide. Proponents argue that intelligent language models democratize learning by serving as round-the-clock personalized tutors. Students struggling with intricate scientific concepts, foreign language composition, or algorithmic coding can receive tailored explanations suited to their individual comprehension speeds. Furthermore, advocates highlight that engaging with digital tools equips prospective graduates with essential digital literacy and prompting skills demanded by modern university faculties and automated professional sectors.<br><br>Conversely, cautious educators and cognitive researchers express profound reservations. They contend that unconditional reliance on automated chatbots induces cognitive atrophy, steadily eroding students' capacity for sustained concentration and independent analytical synthesis. When learners delegate the drafting of essays or problem-solving calculations to automated systems, they forfeit the vital intellectual struggle necessary to cultivate authentic problem-solving resilience. Moreover, generative algorithms frequently generate convincing factual hallucinations and reinforce systemic cultural biases embedded in their training datasets, misleading students who lack mature evaluative judgment.<br><br>In light of these contrasting viewpoints, an outright prohibition of technological tools appears both impractical and short-sighted. Instead, high schools should cultivate a balanced educational framework. Educational leaders must formulate clear, enforceable ethical guidelines that delineate acceptable technological assistance from unacceptable academic dishonesty. Rather than assessing solely static written outputs, educators ought to prioritize interactive oral defenses, collaborative research workshops, and reflective handwritten journals. By treating artificial intelligence as a supportive analytical instrument rather than a surrogate intellect, secondary institutions can foster technologically proficient scholars who retain rigorous critical judgment.",
    "prompt": "Why do critics argue that unconditional reliance on automated chatbots harms students' academic development?",
    "options": [
      {
        "key": "A",
        "text": "It induces cognitive atrophy and deprives learners of the vital intellectual effort needed to develop resilience."
      },
      {
        "key": "B",
        "text": "It causes physical eye fatigue that prevents pupils from participating in athletic sports."
      },
      {
        "key": "C",
        "text": "It forces schools to invest all municipal funding exclusively into commercial software subscriptions."
      },
      {
        "key": "D",
        "text": "It guarantees that all digital text produced is entirely free of grammatical or spelling errors."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Paragraf 2 menyatakan bahwa ketergantungan berlebihan menyebabkan atrofi kognitif ('induces cognitive atrophy') dan menghilangkan perjuangan intelektual penting untuk membangun daya nalar mandiri ('forfeit the vital intellectual struggle necessary to cultivate authentic problem-solving resilience').",
    "grammarNote": "Cause and Effect Lexis: 'unconditional reliance... induces cognitive atrophy, steadily eroding students' capacity'."
  },
  {
    "id": 14,
    "source": "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer — Ikatan Peneliti Kurikulum Nasional (2026)",
    "type": "reading",
    "title": "Reading Section: TP 12.1 Discussion Text",
    "stimulusTitle": "Generative Artificial Intelligence in Secondary Classrooms: Revolutionary Opportunity or Cognitive Threat?",
    "stimulusBody": "The unprecedented integration of generative artificial intelligence into high school environments has sparked an intensive pedagogical debate worldwide. Proponents argue that intelligent language models democratize learning by serving as round-the-clock personalized tutors. Students struggling with intricate scientific concepts, foreign language composition, or algorithmic coding can receive tailored explanations suited to their individual comprehension speeds. Furthermore, advocates highlight that engaging with digital tools equips prospective graduates with essential digital literacy and prompting skills demanded by modern university faculties and automated professional sectors.<br><br>Conversely, cautious educators and cognitive researchers express profound reservations. They contend that unconditional reliance on automated chatbots induces cognitive atrophy, steadily eroding students' capacity for sustained concentration and independent analytical synthesis. When learners delegate the drafting of essays or problem-solving calculations to automated systems, they forfeit the vital intellectual struggle necessary to cultivate authentic problem-solving resilience. Moreover, generative algorithms frequently generate convincing factual hallucinations and reinforce systemic cultural biases embedded in their training datasets, misleading students who lack mature evaluative judgment.<br><br>In light of these contrasting viewpoints, an outright prohibition of technological tools appears both impractical and short-sighted. Instead, high schools should cultivate a balanced educational framework. Educational leaders must formulate clear, enforceable ethical guidelines that delineate acceptable technological assistance from unacceptable academic dishonesty. Rather than assessing solely static written outputs, educators ought to prioritize interactive oral defenses, collaborative research workshops, and reflective handwritten journals. By treating artificial intelligence as a supportive analytical instrument rather than a surrogate intellect, secondary institutions can foster technologically proficient scholars who retain rigorous critical judgment.",
    "prompt": "The word 'atrophy' in the second paragraph is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "rapid expansion and enhancement of strength"
      },
      {
        "key": "B",
        "text": "gradual decline or weakening due to disuse"
      },
      {
        "key": "C",
        "text": "accidental mechanical breakdown of hardware"
      },
      {
        "key": "D",
        "text": "spontaneous creation of artistic paintings"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kata 'atrophy' dalam konteks kognitif bermakna penyusutan, pelemahan, atau penurunan daya fungsi secara perlahan akibat tidak pernah digunakan atau dilatih secara mandiri (gradual decline or weakening due to disuse).",
    "grammarNote": "Contextual Vocabulary (Oxford 5000 Level B2): 'cognitive atrophy' = penyusutan kapasitas berpikir mandiri."
  },
  {
    "id": 15,
    "source": "Sumber: Jurnal Pendidikan Menengah Terbuka & Riset Pedagogi Kontemporer — Ikatan Peneliti Kurikulum Nasional (2026)",
    "type": "reading",
    "title": "Reading Section: TP 12.1 Discussion Text",
    "stimulusTitle": "Generative Artificial Intelligence in Secondary Classrooms: Revolutionary Opportunity or Cognitive Threat?",
    "stimulusBody": "The unprecedented integration of generative artificial intelligence into high school environments has sparked an intensive pedagogical debate worldwide. Proponents argue that intelligent language models democratize learning by serving as round-the-clock personalized tutors. Students struggling with intricate scientific concepts, foreign language composition, or algorithmic coding can receive tailored explanations suited to their individual comprehension speeds. Furthermore, advocates highlight that engaging with digital tools equips prospective graduates with essential digital literacy and prompting skills demanded by modern university faculties and automated professional sectors.<br><br>Conversely, cautious educators and cognitive researchers express profound reservations. They contend that unconditional reliance on automated chatbots induces cognitive atrophy, steadily eroding students' capacity for sustained concentration and independent analytical synthesis. When learners delegate the drafting of essays or problem-solving calculations to automated systems, they forfeit the vital intellectual struggle necessary to cultivate authentic problem-solving resilience. Moreover, generative algorithms frequently generate convincing factual hallucinations and reinforce systemic cultural biases embedded in their training datasets, misleading students who lack mature evaluative judgment.<br><br>In light of these contrasting viewpoints, an outright prohibition of technological tools appears both impractical and short-sighted. Instead, high schools should cultivate a balanced educational framework. Educational leaders must formulate clear, enforceable ethical guidelines that delineate acceptable technological assistance from unacceptable academic dishonesty. Rather than assessing solely static written outputs, educators ought to prioritize interactive oral defenses, collaborative research workshops, and reflective handwritten journals. By treating artificial intelligence as a supportive analytical instrument rather than a surrogate intellect, secondary institutions can foster technologically proficient scholars who retain rigorous critical judgment.",
    "prompt": "What synthesised recommendation does the author offer in the concluding paragraph?",
    "options": [
      {
        "key": "A",
        "text": "Permit students to submit fully automated AI essays without requiring any personal citations."
      },
      {
        "key": "B",
        "text": "Enact strict disciplinary expulsions for any student caught turning on an electronic computer screen."
      },
      {
        "key": "C",
        "text": "Establish clear ethical guidelines and emphasize process-based assessments like oral defenses and reflective logs."
      },
      {
        "key": "D",
        "text": "Replace all high school human teachers with automated commercial chatbot interfaces."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Penulis merekomendasikan pembentukan kerangka etika yang jelas ('formulate clear, enforceable ethical guidelines') dan mengalihkan fokus penilaian ke proses berpikir autentik seperti ujian lisan interaktif dan jurnal reflektif ('interactive oral defenses... and reflective handwritten journals').",
    "grammarNote": "Modal Recommendation: 'high schools should cultivate... Educational leaders must formulate... educators ought to prioritize'."
  },
  {
    "id": 16,
    "source": "Sumber: Analisis Teks Diskusi Pembelajaran Digital — BSKAP Kemendikbudristek",
    "type": "complex_matrix",
    "title": "Pilihan Ganda Kompleks: Evaluasi Argumen Teks Diskusi Kecerdasan Buatan (AI)",
    "stimulusTitle": "Evaluasi Argumen Kritis Teks Diskusi (Generative AI in Education)",
    "stimulusBody": "Tentukan apakah setiap pernyataan berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong> berdasarkan wacana diskusi tentang kecerdasan buatan (AI) di sekolah:",
    "prompt": "Berdasarkan teks diskusi, tentukan nilai kebenaran dari masing-masing pernyataan berikut:",
    "matrixStatements": [
      {
        "statement": "Kecerdasan buatan (AI) dapat membantu siswa melakukan curah pendapat (brainstorming) dan menyusun kerangka esai secara efisien.",
        "isCorrect": true
      },
      {
        "statement": "Penulis teks menyarankan agar seluruh institusi pendidikan melarang total penggunaan aplikasi AI bagi siswa.",
        "isCorrect": false
      },
      {
        "statement": "Ketergantungan pasif pada teks otomatis tanpa verifikasi kritis dapat melemahkan daya nalar dan orisinalitas berpikir siswa.",
        "isCorrect": true
      },
      {
        "statement": "Seluruh respons dan data yang dihasilkan oleh chatbot berbasis AI dijamin seratus persen akurat, bebas bias, dan faktual.",
        "isCorrect": false
      }
    ],
    "explanation": "1) BENAR (AI diakui mampu membantu brainstorming dan kerangka). 2) SALAH (penulis merekomendasikan regulasi etis, bukan larangan mutlak). 3) BENAR (ketergantungan pasif memicu atrofi kognitif). 4) SALAH (AI masih rentan halusinasi data dan bias algoritma).",
    "grammarNote": "Discussion Text Argument Evaluation: Identifying Supporting vs Contrasting Stances."
  },
  {
    "id": 17,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XII — SMAN 1 Bae Kudus",
    "type": "complex_matrix",
    "title": "Pilihan Ganda Kompleks: Kalimat Pengandaian Tipe 3 (Conditional Type 3)",
    "stimulusTitle": "Kaidah Pengandaian Masa Lalu (Unreal Past Conditionals)",
    "stimulusBody": "Pola Conditional Type 3: If + Past Perfect (had + V3), Subject + would/could/might + have + Past Participle (V3).",
    "prompt": "Tentukan apakah susunan kalimat pengandaian Type 3 berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
    "matrixStatements": [
      {
        "statement": "If the school had organized the digital literacy seminar earlier, students would have understood the AI guidelines better.",
        "isCorrect": true
      },
      {
        "statement": "If they studied harder last week, they would pass the national certification test today.",
        "isCorrect": false
      },
      {
        "statement": "If the solar panels had been maintained regularly, the sudden power failure during yesterday's storm would have been avoided.",
        "isCorrect": true
      },
      {
        "statement": "If she had arrived on time yesterday, she would meet the guest speaker before the lecture began.",
        "isCorrect": false
      }
    ],
    "explanation": "1) BENAR (If + had organized, would have understood). 2) SALAH (mencampur Simple Past dengan present; Type 3 harus 'had studied... would have passed'). 3) BENAR (Passive Type 3: had been maintained, would have been avoided). 4) SALAH (main clause harus 'would have met', bukan 'would meet').",
    "grammarNote": "Conditional Type 3: Form and Function for Past Unreal Situations."
  },
  {
    "id": 18,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XII — SMAN 1 Bae Kudus",
    "type": "complex_matrix",
    "title": "Pilihan Ganda Kompleks: Konjungsi Pertentangan & Konsesi (Contrast & Concession)",
    "stimulusTitle": "Kaidah Transisi Pertentangan dan Konsesi",
    "stimulusBody": "Konjungsi pertentangan (However, Nevertheless, In contrast) dan konsesi (Although, Despite, In spite of) menghubungkan dua gagasan yang berlawanan.",
    "prompt": "Tentukan apakah penggunaan kata transisi dalam kalimat berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
    "matrixStatements": [
      {
        "statement": "Despite facing severe economic limitations, the students demonstrated remarkable academic achievement.",
        "isCorrect": true
      },
      {
        "statement": "Although it was raining heavily, but the sports competition continued until sunset.",
        "isCorrect": false
      },
      {
        "statement": "Geothermal power plants produce continuous energy; however, their initial construction requires substantial capital.",
        "isCorrect": true
      },
      {
        "statement": "In spite of she was exhausted after practice, Maya finished writing her comprehensive book review.",
        "isCorrect": false
      }
    ],
    "explanation": "1) BENAR (Despite + Noun Phrase 'facing severe economic limitations'). 2) SALAH (tidak boleh menggabungkan 'Although' dan 'but' dalam satu kalimat). 3) BENAR (However digunakan sebagai adverbia transisi antarinduk kalimat). 4) SALAH ('In spite of' tidak boleh diikuti klausa berpredikat 'she was exhausted'; harusnya 'Although she was...' atau 'In spite of being exhausted...').",
    "grammarNote": "Mastery of Contrastive Connectors and Concessive Adverbials (B2 Level)."
  },
  {
    "id": 19,
    "source": "Sumber: Telaah Kritis Teks Resensi Sastra Indonesia — Kemendikbudristek",
    "type": "complex_matrix",
    "title": "Pilihan Ganda Kompleks: Evaluasi Fakta Teks Ulasan Novel (Laskar Pelangi)",
    "stimulusTitle": "Evaluasi Kritis Resensi Novel Andrea Hirata: Laskar Pelangi",
    "stimulusBody": "Tentukan apakah pernyataan berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong> berdasarkan wacana teks ulasan (review text) novel Laskar Pelangi:",
    "prompt": "Berdasarkan teks ulasan, tentukan nilai kebenaran dari masing-masing pernyataan berikut:",
    "matrixStatements": [
      {
        "statement": "Novel Laskar Pelangi mengisahkan perjuangan sepuluh murid desa di Belitung untuk mempertahankan sekolah mereka dari ancaman penutupan.",
        "isCorrect": true
      },
      {
        "statement": "Pengulas berpendapat bahwa keberhasilan pendidikan semata-mata ditentukan oleh kemewahan gedung dan kelengkapan fasilitas sekolah.",
        "isCorrect": false
      },
      {
        "statement": "Keteladanan Bu Muslimah dan Pak Harfan menjadi pendorong semangat utama murid-murid meski di tengah serba keterbatasan.",
        "isCorrect": true
      },
      {
        "statement": "Resensi tersebut menyimpulkan bahwa novel Laskar Pelangi bernilai buruk dan menyarankan agar ditarik dari seluruh perpustakaan.",
        "isCorrect": false
      }
    ],
    "explanation": "1) BENAR (Laskar Pelangi mengisahkan sepuluh murid SD Muhammadiyah Gantong). 2) SALAH (ulasan justru menegaskan empati dan dedikasi guru melampaui kemewahan fasilitas fisik). 3) BENAR (keteladanan guru menginspirasi ketahanan moral siswa). 4) SALAH (pengulas memberikan apresiasi tinggi sebagai karya sastra inspiratif).",
    "grammarNote": "Review Text Critical Evaluation: Distinguishing Evaluative Judgments from Text Facts."
  },
  {
    "id": 20,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XII — SMAN 1 Bae Kudus",
    "type": "complex_matrix",
    "title": "Pilihan Ganda Kompleks: Modal Deduksi Masa Lalu (Modals of Past Deduction)",
    "stimulusTitle": "Kaidah Modalitas Deduksi Logis Masa Lalu",
    "stimulusBody": "Modal deduksi masa lalu: must have + V3 (pasti sudah), cannot/could not have + V3 (mustahil sudah), might/may have + V3 (mungkin sudah).",
    "prompt": "Tentukan apakah penerapan modalitas deduksi berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
    "matrixStatements": [
      {
        "statement": "The classroom lights are completely turned off; the students must have gone home already.",
        "isCorrect": true
      },
      {
        "statement": "He didn't study at all last semester, so he must have scored the highest grade in the entire province.",
        "isCorrect": false
      },
      {
        "statement": "The sudden power failure in the laboratory might have been triggered by the severe lightning storm.",
        "isCorrect": true
      },
      {
        "statement": "She could not has submitted the digital assignment because the web portal was already locked.",
        "isCorrect": false
      }
    ],
    "explanation": "1) BENAR (deduksi logis kuat: must have + gone). 2) SALAH (deduksi tidak logis; seharusnya 'cannot have scored'). 3) BENAR (kemungkinan logis: might have been triggered). 4) SALAH (kesalahan gramatikal: modal selalu diikuti bare infinitive 'have', bukan 'has').",
    "grammarNote": "Modals of Past Deduction: must have, cannot have, might have + V3."
  },
  {
    "id": 21,
    "source": "Sumber: Modul Pembelajaran Teks Diskusi — BSKAP Kemendikbudristek",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
    "stimulusTitle": "Prinsip Pemanfaatan Kecerdasan Buatan (AI) yang Bertanggung Jawab",
    "stimulusBody": "Dalam teks diskusi tentang pemanfaatan AI di sekolah, disajikan berbagai langkah strategis untuk mengoptimalkan teknologi tanpa mengorbankan integritas akademik.",
    "prompt": "Manakah <strong>DUA (2)</strong> argumen utama yang mendukung penggunaan AI secara etis dan bertanggung jawab oleh siswa?",
    "options": [
      {
        "key": "A",
        "text": "AI sebaiknya difungsikan sebagai asisten riset untuk memicu ide dan nalar kritis, bukan sebagai penulis esai otomatis."
      },
      {
        "key": "B",
        "text": "Sekolah harus mewajibkan seluruh ujian akhir ditulis seratus persen oleh aplikasi chatbot otomatis."
      },
      {
        "key": "C",
        "text": "Siswa wajib menjaga kejujuran intelektual, memverifikasi fakta keluaran mesin, dan mencantumkan sumber sitasi bantuan digital secara transparan."
      },
      {
        "key": "D",
        "text": "Siswa tidak perlu lagi membaca buku teks atau literatur ilmiah karena seluruh informasi telah dirangkum oleh mesin pintar."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Dua argumen kunci yang tepat adalah (A) memfungsikan AI sebagai asisten riset pemicu ide dan (C) menjaga integritas akademik dengan verifikasi data dan sitasi transparan. Opsi B dan D merusak integritas dan tujuan pendidikan.",
    "grammarNote": "Identifying Balanced Stances in Analytical Discussion Texts."
  },
  {
    "id": 22,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XII — SMAN 1 Bae Kudus",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
    "stimulusTitle": "Kalimat Pengandaian Tipe 3 (Conditional Type 3) yang Gramatikal",
    "stimulusBody": "Pilihlah kalimat pengandaian Type 3 yang disusun secara baku dan memenuhi kaidah tata bahasa Inggris.",
    "prompt": "Manakah <strong>DUA (2)</strong> kalimat di bawah ini yang menerapkan pola Conditional Type 3 dengan benar?",
    "options": [
      {
        "key": "A",
        "text": "If the technical team had installed the backup generator yesterday, the power outage would not have disrupted the computer laboratory."
      },
      {
        "key": "B",
        "text": "If I have seen the competition announcement yesterday morning, I would submit the application promptly."
      },
      {
        "key": "C",
        "text": "Had the school provided sufficient scholarship funds, more rural students could have continued their higher education."
      },
      {
        "key": "D",
        "text": "If she took the earlier morning bus yesterday, she will arrive before the keynote speaker."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Kalimat A (pola standar: If + had installed, would not have disrupted) dan kalimat C (inversi Type 3: Had + subject + V3, could have continued) keduanya gramatikal dan baku. Kalimat B salah waktu (have seen) dan D salah mencampur past 'took' dengan future 'will arrive'.",
    "grammarNote": "Standard and Inverted Conditional Type 3 Accuracy."
  },
  {
    "id": 23,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XII — SMAN 1 Bae Kudus",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
    "stimulusTitle": "Konjungsi Transisi Pertentangan dalam Wacana Akademik",
    "stimulusBody": "Transisi pertentangan digunakan untuk menghubungkan dua sudut pandang yang kontras secara kohesif.",
    "prompt": "Manakah <strong>DUA (2)</strong> kalimat di bawah ini yang menggunakan kata transisi pertentangan secara tepat?",
    "options": [
      {
        "key": "A",
        "text": "Renewable energy adoption requires high initial capital; nevertheless, long-term environmental benefits far outweigh the costs."
      },
      {
        "key": "B",
        "text": "Although the historical novel was written decades ago, yet modern readers still find its characters deeply moving."
      },
      {
        "key": "C",
        "text": "Even though solar irradiance fluctuates with cloud cover, modern battery storage systems ensure continuous electrical stability."
      },
      {
        "key": "D",
        "text": "Despite of the heavy rainfall yesterday, the youth volunteers planted two hundred mangrove seedlings along the coast."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Kalimat A ('nevertheless') dan kalimat C ('Even though') tersusun secara gramatikal. Kalimat B salah karena merangkap 'Although' dengan 'yet', dan kalimat D salah karena frase yang benar adalah 'Despite' (tanpa 'of') atau 'In spite of'.",
    "grammarNote": "Transitions of Contrast and Concession in Academic Discourse."
  },
  {
    "id": 24,
    "source": "Sumber: Telaah Kritis Teks Resensi Sastra Indonesia — Kemendikbudristek",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
    "stimulusTitle": "Nilai-Nilai Utama Novel Laskar Pelangi",
    "stimulusBody": "Novel Laskar Pelangi karya Andrea Hirata sarat akan pesan moral dan refleksi sosial tentang pendidikan di daerah terpencil.",
    "prompt": "Manakah <strong>DUA (2)</strong> nilai karakter dan pesan sosial utama yang disoroti oleh pengulas novel?",
    "options": [
      {
        "key": "A",
        "text": "Kekuatan transformatif pendidikan dan empati kemanusiaan dalam mengatasi kesulitan sosial-ekonomi yang ekstrem."
      },
      {
        "key": "B",
        "text": "Pentingnya menimbun harta kekayaan pribadi sebanyak-banyaknya demi memperoleh status sosial tertinggi di masyarakat."
      },
      {
        "key": "C",
        "text": "Nilai luhur keteladanan dan dedikasi tanpa pamrih seorang guru yang membangkitkan rasa percaya diri murid."
      },
      {
        "key": "D",
        "text": "Keunggulan mutlak perusahaan tambang industri modern dalam menyingkirkan kehidupan masyarakat pedesaan."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Dua nilai luhur utama dalam ulasan Laskar Pelangi adalah (A) kekuatan pendidikan dan empati melampaui kemiskinan, serta (C) keteladanan dan dedikasi guru dalam membimbing anak-anak. Opsi B dan D bertentangan dengan esensi novel.",
    "grammarNote": "Thematic and Character Value Synthesis in Literary Reviews."
  },
  {
    "id": 25,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XII — SMAN 1 Bae Kudus",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
    "stimulusTitle": "Kalimat Tak Langsung (Reported Speech / Indirect Statements)",
    "stimulusBody": "Dalam melaporkan pernyataan lampau, tenses dan kata keterangan waktu mengalami penyesuaian gramatikal (backshift).",
    "prompt": "Manakah <strong>DUA (2)</strong> kalimat tak langsung di bawah ini yang disusun secara baku dan benar?",
    "options": [
      {
        "key": "A",
        "text": "The English teacher explained that artificial intelligence was merely a tool to enhance human creativity."
      },
      {
        "key": "B",
        "text": "Maya told to me that she will travel to Belitung next month."
      },
      {
        "key": "C",
        "text": "Rizky stated that he had completed his comprehensive literature review the previous evening."
      },
      {
        "key": "D",
        "text": "Danang said that he is reading the historical novel two days ago."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Kalimat A (Present Simple 'is' berubah menjadi Past 'was') dan kalimat C (Past Simple/Present Perfect berubah menjadi Past Perfect 'had completed' serta time marker 'the previous evening') tersusun sempurna. Kalimat B salah pola ('told to me' harusnya 'told me', dan 'will' harusnya 'would'). Kalimat D salah karena mencampur 'is reading' dengan 'two days ago'.",
    "grammarNote": "Reported Speech: Tense Backshift and Indirect Discourse Conventions."
  },
  {
    "id": 26,
    "source": "Sumber: Tinjauan Teknologi Terapan & Rekayasa Pertanian Berkelanjutan — Jurnal Riset Agroteknologi Nasional",
    "type": "reading",
    "title": "Reading Section: TP 12.2 Review Text",
    "stimulusTitle": "Product Review: Smart IoT Drip Irrigation System — High-Tech Precision for Indonesian Dryland Farming",
    "stimulusBody": "As prolonged dry seasons and climatic volatility challenge smallholder horticultural farmers across Java, automated micro-irrigation systems have emerged as promising solutions. Among the latest domestic innovations tested by agricultural cooperatives in Central Java is the 'AgriSmart IoT Drip Irrigation System'—a solar-powered micro-irrigation unit designed to deliver precise moisture directly to plant roots based on automated subterranean soil telemetry.<br><br>In extensive four-month field trials on chili and shallot plantations, the AgriSmart system demonstrated remarkable operational efficiency. Its primary triumph is water conservation: by utilizing subterranean humidity and ambient temperature probes to regulate precision dripping valves, the system reduced irrigation water consumption by approximately thirty-eight percent compared to conventional manual spraying. Furthermore, the accompanying mobile application delivers real-time soil data and autonomous valve controls, freeing farmers from arduous physical labor under the blazing midday sun and increasing crop harvest uniformity by nearly twenty percent.<br><br>Despite these impressive technological merits, prospective adopters must weigh certain practical constraints. First, the unit relies on local cellular network coverage for cloud telemetry, making it susceptible to connection blackouts in mountainous, signal-deprived hollows. Second, while the initial hardware installation cost has been minimized, it still represents a formidable capital barrier for individual impoverished smallholders unless subsidized by local farmer associations. Finally, the sensitive micro-drippers require periodic manual flushing to prevent mineral sediment clogs when utilizing mineral-heavy well water.<br><br>On balance, the AgriSmart IoT System represents a highly commendable step forward in sustainable tropical agriculture. While isolated subsistence farmers may find individual investment challenging, the system is enthusiastically recommended for farmer collectives, agricultural vocational schools, and forward-looking horticultural enterprises seeking to optimize water resilience and labor productivity.",
    "prompt": "What is the primary function of the AgriSmart IoT System described in the text?",
    "options": [
      {
        "key": "A",
        "text": "To generate artificial rainclouds across large metropolitan residential zones."
      },
      {
        "key": "B",
        "text": "To manufacture synthetic chemical fertilizers using high-voltage solar batteries."
      },
      {
        "key": "C",
        "text": "To replace all human agricultural labor with autonomous robotic harvesting tractors."
      },
      {
        "key": "D",
        "text": "To automate precision water delivery to plant roots based on real-time soil moisture sensors."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Paragraf 1 baris 5-7 menyatakan fungsi utama alat: 'a solar-powered micro-irrigation unit designed to deliver precise moisture directly to plant roots based on automated subterranean soil telemetry'.",
    "grammarNote": "Infinitive of Purpose: 'designed to deliver precise moisture directly to plant roots based on telemetry'."
  },
  {
    "id": 27,
    "source": "Sumber: Tinjauan Teknologi Terapan & Rekayasa Pertanian Berkelanjutan — Jurnal Riset Agroteknologi Nasional",
    "type": "reading",
    "title": "Reading Section: TP 12.2 Review Text",
    "stimulusTitle": "Product Review: Smart IoT Drip Irrigation System — High-Tech Precision for Indonesian Dryland Farming",
    "stimulusBody": "As prolonged dry seasons and climatic volatility challenge smallholder horticultural farmers across Java, automated micro-irrigation systems have emerged as promising solutions. Among the latest domestic innovations tested by agricultural cooperatives in Central Java is the 'AgriSmart IoT Drip Irrigation System'—a solar-powered micro-irrigation unit designed to deliver precise moisture directly to plant roots based on automated subterranean soil telemetry.<br><br>In extensive four-month field trials on chili and shallot plantations, the AgriSmart system demonstrated remarkable operational efficiency. Its primary triumph is water conservation: by utilizing subterranean humidity and ambient temperature probes to regulate precision dripping valves, the system reduced irrigation water consumption by approximately thirty-eight percent compared to conventional manual spraying. Furthermore, the accompanying mobile application delivers real-time soil data and autonomous valve controls, freeing farmers from arduous physical labor under the blazing midday sun and increasing crop harvest uniformity by nearly twenty percent.<br><br>Despite these impressive technological merits, prospective adopters must weigh certain practical constraints. First, the unit relies on local cellular network coverage for cloud telemetry, making it susceptible to connection blackouts in mountainous, signal-deprived hollows. Second, while the initial hardware installation cost has been minimized, it still represents a formidable capital barrier for individual impoverished smallholders unless subsidized by local farmer associations. Finally, the sensitive micro-drippers require periodic manual flushing to prevent mineral sediment clogs when utilizing mineral-heavy well water.<br><br>On balance, the AgriSmart IoT System represents a highly commendable step forward in sustainable tropical agriculture. While isolated subsistence farmers may find individual investment challenging, the system is enthusiastically recommended for farmer collectives, agricultural vocational schools, and forward-looking horticultural enterprises seeking to optimize water resilience and labor productivity.",
    "prompt": "According to the field test results, what was the primary operational triumph of the system?",
    "options": [
      {
        "key": "A",
        "text": "Reducing irrigation water consumption by nearly 38% while improving harvest uniformity."
      },
      {
        "key": "B",
        "text": "Eliminating the need for any sunlight or photosynthesis in cultivating shallots."
      },
      {
        "key": "C",
        "text": "Doubling the market retail price of imported agricultural fertilizers in Central Java."
      },
      {
        "key": "D",
        "text": "Enabling crops to grow in complete darkness inside underground caves."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Paragraf 2 baris 2-7 menyebutkan keberhasilan operasional sistem: 'reduced irrigation water consumption by approximately thirty-eight percent compared to conventional manual spraying... increasing crop harvest uniformity by nearly twenty percent'.",
    "grammarNote": "Prepositional Gerund Phrase: 'by utilizing subterranean humidity probes... the system reduced consumption'."
  },
  {
    "id": 28,
    "source": "Sumber: Tinjauan Teknologi Terapan & Rekayasa Pertanian Berkelanjutan — Jurnal Riset Agroteknologi Nasional",
    "type": "reading",
    "title": "Reading Section: TP 12.2 Review Text",
    "stimulusTitle": "Product Review: Smart IoT Drip Irrigation System — High-Tech Precision for Indonesian Dryland Farming",
    "stimulusBody": "As prolonged dry seasons and climatic volatility challenge smallholder horticultural farmers across Java, automated micro-irrigation systems have emerged as promising solutions. Among the latest domestic innovations tested by agricultural cooperatives in Central Java is the 'AgriSmart IoT Drip Irrigation System'—a solar-powered micro-irrigation unit designed to deliver precise moisture directly to plant roots based on automated subterranean soil telemetry.<br><br>In extensive four-month field trials on chili and shallot plantations, the AgriSmart system demonstrated remarkable operational efficiency. Its primary triumph is water conservation: by utilizing subterranean humidity and ambient temperature probes to regulate precision dripping valves, the system reduced irrigation water consumption by approximately thirty-eight percent compared to conventional manual spraying. Furthermore, the accompanying mobile application delivers real-time soil data and autonomous valve controls, freeing farmers from arduous physical labor under the blazing midday sun and increasing crop harvest uniformity by nearly twenty percent.<br><br>Despite these impressive technological merits, prospective adopters must weigh certain practical constraints. First, the unit relies on local cellular network coverage for cloud telemetry, making it susceptible to connection blackouts in mountainous, signal-deprived hollows. Second, while the initial hardware installation cost has been minimized, it still represents a formidable capital barrier for individual impoverished smallholders unless subsidized by local farmer associations. Finally, the sensitive micro-drippers require periodic manual flushing to prevent mineral sediment clogs when utilizing mineral-heavy well water.<br><br>On balance, the AgriSmart IoT System represents a highly commendable step forward in sustainable tropical agriculture. While isolated subsistence farmers may find individual investment challenging, the system is enthusiastically recommended for farmer collectives, agricultural vocational schools, and forward-looking horticultural enterprises seeking to optimize water resilience and labor productivity.",
    "prompt": "Which of the following is identified as a practical constraint of the AgriSmart system in paragraph three?",
    "options": [
      {
        "key": "A",
        "text": "Excessive emission of greenhouse gases during subterranean water pumping."
      },
      {
        "key": "B",
        "text": "Vulnerability to cellular signal loss in remote areas and initial capital cost for individual smallholders."
      },
      {
        "key": "C",
        "text": "The inability of the solar panels to operate in tropical sunlight."
      },
      {
        "key": "D",
        "text": "The requirement that all farmers possess university degrees in software engineering."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf 3 memaparkan kendala praktis: rentan terhadap ketiadaan sinyal seluler di perbukitan ('susceptible to connection blackouts in mountainous, signal-deprived hollows') serta biaya instalasi awal yang masih menjadi beban bagi petani perorangan tanpa subsidi.",
    "grammarNote": "Concessive Connectors in Review: 'Despite these impressive technological merits, prospective adopters must weigh certain practical constraints'."
  },
  {
    "id": 29,
    "source": "Sumber: Tinjauan Teknologi Terapan & Rekayasa Pertanian Berkelanjutan — Jurnal Riset Agroteknologi Nasional",
    "type": "reading",
    "title": "Reading Section: TP 12.2 Review Text",
    "stimulusTitle": "Product Review: Smart IoT Drip Irrigation System — High-Tech Precision for Indonesian Dryland Farming",
    "stimulusBody": "As prolonged dry seasons and climatic volatility challenge smallholder horticultural farmers across Java, automated micro-irrigation systems have emerged as promising solutions. Among the latest domestic innovations tested by agricultural cooperatives in Central Java is the 'AgriSmart IoT Drip Irrigation System'—a solar-powered micro-irrigation unit designed to deliver precise moisture directly to plant roots based on automated subterranean soil telemetry.<br><br>In extensive four-month field trials on chili and shallot plantations, the AgriSmart system demonstrated remarkable operational efficiency. Its primary triumph is water conservation: by utilizing subterranean humidity and ambient temperature probes to regulate precision dripping valves, the system reduced irrigation water consumption by approximately thirty-eight percent compared to conventional manual spraying. Furthermore, the accompanying mobile application delivers real-time soil data and autonomous valve controls, freeing farmers from arduous physical labor under the blazing midday sun and increasing crop harvest uniformity by nearly twenty percent.<br><br>Despite these impressive technological merits, prospective adopters must weigh certain practical constraints. First, the unit relies on local cellular network coverage for cloud telemetry, making it susceptible to connection blackouts in mountainous, signal-deprived hollows. Second, while the initial hardware installation cost has been minimized, it still represents a formidable capital barrier for individual impoverished smallholders unless subsidized by local farmer associations. Finally, the sensitive micro-drippers require periodic manual flushing to prevent mineral sediment clogs when utilizing mineral-heavy well water.<br><br>On balance, the AgriSmart IoT System represents a highly commendable step forward in sustainable tropical agriculture. While isolated subsistence farmers may find individual investment challenging, the system is enthusiastically recommended for farmer collectives, agricultural vocational schools, and forward-looking horticultural enterprises seeking to optimize water resilience and labor productivity.",
    "prompt": "The word 'commendable' in the final paragraph is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "completely outdated and forgotten"
      },
      {
        "key": "B",
        "text": "economically wasteful and dangerous"
      },
      {
        "key": "C",
        "text": "worthy of praise and encouragement"
      },
      {
        "key": "D",
        "text": "unreliable and prone to failure"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kata 'commendable' dalam 'a highly commendable step forward' bermakna patut dipuji, terhormat, bernilai positif, dan layak diapresiasi (praiseworthy / admirable).",
    "grammarNote": "Evaluative Adjective (Oxford 5000 Level B2): 'commendable' = patut dipuji / diacungi jempol."
  },
  {
    "id": 30,
    "source": "Sumber: Tinjauan Teknologi Terapan & Rekayasa Pertanian Berkelanjutan — Jurnal Riset Agroteknologi Nasional",
    "type": "reading",
    "title": "Reading Section: TP 12.2 Review Text",
    "stimulusTitle": "Product Review: Smart IoT Drip Irrigation System — High-Tech Precision for Indonesian Dryland Farming",
    "stimulusBody": "As prolonged dry seasons and climatic volatility challenge smallholder horticultural farmers across Java, automated micro-irrigation systems have emerged as promising solutions. Among the latest domestic innovations tested by agricultural cooperatives in Central Java is the 'AgriSmart IoT Drip Irrigation System'—a solar-powered micro-irrigation unit designed to deliver precise moisture directly to plant roots based on automated subterranean soil telemetry.<br><br>In extensive four-month field trials on chili and shallot plantations, the AgriSmart system demonstrated remarkable operational efficiency. Its primary triumph is water conservation: by utilizing subterranean humidity and ambient temperature probes to regulate precision dripping valves, the system reduced irrigation water consumption by approximately thirty-eight percent compared to conventional manual spraying. Furthermore, the accompanying mobile application delivers real-time soil data and autonomous valve controls, freeing farmers from arduous physical labor under the blazing midday sun and increasing crop harvest uniformity by nearly twenty percent.<br><br>Despite these impressive technological merits, prospective adopters must weigh certain practical constraints. First, the unit relies on local cellular network coverage for cloud telemetry, making it susceptible to connection blackouts in mountainous, signal-deprived hollows. Second, while the initial hardware installation cost has been minimized, it still represents a formidable capital barrier for individual impoverished smallholders unless subsidized by local farmer associations. Finally, the sensitive micro-drippers require periodic manual flushing to prevent mineral sediment clogs when utilizing mineral-heavy well water.<br><br>On balance, the AgriSmart IoT System represents a highly commendable step forward in sustainable tropical agriculture. While isolated subsistence farmers may find individual investment challenging, the system is enthusiastically recommended for farmer collectives, agricultural vocational schools, and forward-looking horticultural enterprises seeking to optimize water resilience and labor productivity.",
    "prompt": "Who is the primary target group enthusiastically recommended to adopt this system?",
    "options": [
      {
        "key": "A",
        "text": "Fishermen operating deep-sea trawlers off the southern coast of Java."
      },
      {
        "key": "B",
        "text": "Isolated smallholders with zero access to financial loans or communal cooperatives."
      },
      {
        "key": "C",
        "text": "Urban fashion boutiques situated inside air-conditioned metropolitan malls."
      },
      {
        "key": "D",
        "text": "Agricultural cooperatives, vocational schools, and commercial horticultural enterprises."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Paragraf 4 merekomendasikan sistem ini secara khusus kepada kelompok tani terorganisir, SMK pertanian, dan badan usaha hortikultura: 'enthusiastically recommended for farmer collectives, agricultural vocational schools, and forward-looking horticultural enterprises'.",
    "grammarNote": "Target Audience Recommendation in Reviews: 'is enthusiastically recommended for...'."
  },
  {
    "id": 31,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "grammar",
    "title": "Grammar & Discourse: Contrastive Connectors",
    "prompt": "Nuclear power plants deliver an uninterrupted baseload electrical output around the clock. ________, their astronomical construction expenses and severe vulnerability to seismic activity prompt intense public concern in archipelagic regions.\n\nChoose the most appropriate transitional discourse connector to fill in the blank:",
    "options": [
      {
        "key": "A",
        "text": "However"
      },
      {
        "key": "B",
        "text": "Furthermore"
      },
      {
        "key": "C",
        "text": "Consequently"
      },
      {
        "key": "D",
        "text": "Because"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kalimat pertama menyatakan keunggulan pasokan listrik stabil, sedangkan kalimat kedua menyajikan fakta kontras mengenai biaya dan kerentanan gempa. Kata hubung antarkalimat yang menyatakan pertentangan formal (*contrast*) adalah 'However' (namun demikian).",
    "grammarNote": "Conjunctive Adverb of Contrast: 'However' menghubungkan dua ide yang bertentangan dengan tanda koma setelahnya."
  },
  {
    "id": 32,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "grammar",
    "title": "Grammar & Discourse: Concessive Connectors",
    "prompt": "________ enduring extreme financial hardship and lacking formal school funding, Bu Muslimah and Pak Harfan taught their pupils with unwavering devotion every morning.\n\nChoose the correct grammatical connector to complete the sentence:",
    "options": [
      {
        "key": "A",
        "text": "Although"
      },
      {
        "key": "B",
        "text": "Despite"
      },
      {
        "key": "C",
        "text": "Even though"
      },
      {
        "key": "D",
        "text": "Because of"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Setelah rumpang terdapat frasa kata benda gerund ('enduring extreme financial hardship and lacking formal school funding'). Preposisi konsesif (*concessive preposition*) yang diikuti oleh frasa nomina/gerund adalah 'Despite' atau 'In spite of'. Pilihan 'Although' dan 'Even though' harus diikuti klausa lengkap (Subject + Verb).",
    "grammarNote": "Concession Rule: 'Despite / In spite of + Noun Phrase/Gerund' vs 'Although / Even though + S + V'."
  },
  {
    "id": 33,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "grammar",
    "title": "Grammar & Discourse: Conditional Type 2 (Hypothetical Present)",
    "prompt": "If regional governments ________ more capital into decentralized geothermal and solar infrastructure today, remote coastal villages would enjoy uninterrupted electricity.\n\nChoose the correct verb form to complete the hypothetical conditional clause:",
    "options": [
      {
        "key": "A",
        "text": "had invested"
      },
      {
        "key": "B",
        "text": "will invest"
      },
      {
        "key": "C",
        "text": "invested"
      },
      {
        "key": "D",
        "text": "are investing"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Klausa utama menggunakan 'would enjoy' (would + V1), yang menunjukkan kalimat pengandaian Type 2 (kondisi tidak nyata saat ini / hypothetical present). Pola if-clause Type 2 wajib menggunakan Simple Past (V2 / 'invested').",
    "grammarNote": "Conditional Type 2 Formula: If + Subject + V2 (Simple Past), Subject + would + V1 (Bare Infinitive)."
  },
  {
    "id": 34,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "grammar",
    "title": "Grammar & Discourse: Conditional Type 3 (Unreal Past)",
    "prompt": "If high school administrators ________ clear ethical guidelines regarding generative artificial intelligence last semester, students would not have experienced widespread confusion during their research exams.\n\nChoose the correct verb form to complete the sentence:",
    "options": [
      {
        "key": "A",
        "text": "have established"
      },
      {
        "key": "B",
        "text": "established"
      },
      {
        "key": "C",
        "text": "would establish"
      },
      {
        "key": "D",
        "text": "had established"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Klausa utama menggunakan 'would not have experienced' (would have + V3) yang menerangkan penyesalan atau situasi masa lalu (past unreal). Pola if-clause Type 3 wajib menggunakan Past Perfect ('had established').",
    "grammarNote": "Conditional Type 3 Formula: If + Subject + had + V3 (Past Perfect), Subject + would have + V3."
  },
  {
    "id": 35,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "grammar",
    "title": "Grammar & Discourse: Modals of Stance & Necessity",
    "prompt": "Educators maintain that secondary students ________ treat automated artificial intelligence outputs with critical scrutiny rather than blindly accepting them as authoritative truths.\n\nChoose the most accurate modal verb expressing strong moral advisability:",
    "options": [
      {
        "key": "A",
        "text": "ought to"
      },
      {
        "key": "B",
        "text": "might"
      },
      {
        "key": "C",
        "text": "could"
      },
      {
        "key": "D",
        "text": "would"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Ought to' menyatakan anjuran atau kewajiban moral yang kuat (*strong moral advisability/recommendation*), semakna dengan 'should'. 'Might' dan 'could' hanya menyatakan kemungkinan lemah (*weak possibility*).",
    "grammarNote": "Modals of Stance: 'ought to / should + bare infinitive' digunakan untuk menyampaikan rekomendasi etis dalam teks analitis."
  },
  {
    "id": 36,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "grammar",
    "title": "Grammar & Discourse: Impersonal Academic Passive",
    "prompt": "It ________ by international education analysts that critical problem-solving skills will remain far more indispensable than rote factual recitation in an automated economy.\n\nChoose the correct impersonal passive verb phrase:",
    "options": [
      {
        "key": "A",
        "text": "widely acknowledges"
      },
      {
        "key": "B",
        "text": "is widely acknowledged"
      },
      {
        "key": "C",
        "text": "has widely acknowledging"
      },
      {
        "key": "D",
        "text": "was to acknowledge"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Struktur 'It + is + V3 + that-clause' adalah pola *Impersonal Passive* formal dalam penulisan akademis untuk melaporkan keyakinan atau temuan ilmiah umum secara objektif ('It is widely acknowledged that...').",
    "grammarNote": "Impersonal Passive Structure: It + is + Past Participle (believed / acknowledged / reported) + that-clause."
  },
  {
    "id": 37,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "grammar",
    "title": "Grammar & Discourse: Evaluative Stance Adjectives",
    "prompt": "Given the rapid depletion of fossil fuels, it is ________ that regional governments accelerate investments in clean geothermal energy and solar microgrids.\n\nChoose the most fitting evaluative adjective expressing urgent necessity:",
    "options": [
      {
        "key": "A",
        "text": "redundant"
      },
      {
        "key": "B",
        "text": "negligible"
      },
      {
        "key": "C",
        "text": "imperative"
      },
      {
        "key": "D",
        "text": "trivial"
      }
    ],
    "correctAnswer": "C",
    "explanation": "'Imperative' bermakna sangat mendesak, penting sekali, dan mutlak harus dilakukan (*vital / urgently necessary*). Pilihan 'negligible' (dapat diabaikan), 'redundant' (berlebihan/tidak perlu), dan 'trivial' (sepele) bertentangan dengan konteks darurat energi.",
    "grammarNote": "Evaluative Adjective of Stance (Oxford 5000 Level B2): 'It is imperative that + clause' menyatakan keharusan mutlak."
  },
  {
    "id": 38,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "grammar",
    "title": "Grammar & Discourse: Academic Collocations",
    "prompt": "Before authorizing the construction of a commercial nuclear plant, policymakers must carefully ________ the potential economic advantages against the profound geological hazards.\n\nChoose the correct academic verb that collocates with 'against':",
    "options": [
      {
        "key": "A",
        "text": "manufacture"
      },
      {
        "key": "B",
        "text": "discard"
      },
      {
        "key": "C",
        "text": "celebrate"
      },
      {
        "key": "D",
        "text": "weigh"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kolokasi akademis yang tepat untuk menimbang pro dan kontra adalah 'weigh ... against ...' (menimbang keuntungan ekonomi dengan potensi bahaya geologis sebelum mengambil keputusan).",
    "grammarNote": "Discourse Collocation: 'weigh the benefits/pros against the risks/cons' = menimbang perbandingan untung dan rugi."
  },
  {
    "id": 39,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "grammar",
    "title": "Grammar & Discourse: Relative Pronouns with Prepositions",
    "prompt": "The innovative agricultural cooperative designed a controlled smart greenhouse, ________ precision micro-drip telemetry was monitored directly through a mobile application.\n\nChoose the correct prepositional relative pronoun:",
    "options": [
      {
        "key": "A",
        "text": "in which"
      },
      {
        "key": "B",
        "text": "which"
      },
      {
        "key": "C",
        "text": "whom"
      },
      {
        "key": "D",
        "text": "whose"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Frasa 'in which' berfungsi menggantikan tempat atau lingkungan ('in the smart greenhouse'). Klausa setelahnya memiliki subjek lengkap ('precision telemetry') sehingga membutuhkan preposisi tempat formal 'in which' (atau 'where').",
    "grammarNote": "Formal Relative Clause: Preposition + Relative Pronoun ('in which' = where, mengacu pada lingkungan rumah kaca)."
  },
  {
    "id": 40,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "grammar",
    "title": "Grammar & Discourse: Concluding Transitional Connectors",
    "prompt": "Both proponents and critics present compelling arguments regarding modern automation. ________, the decisive factor in high school education will always be the human teacher's moral guidance and students' commitment to authentic inquiry.\n\nChoose the most suitable transitional word to open the concluding synthesis:",
    "options": [
      {
        "key": "A",
        "text": "Initially"
      },
      {
        "key": "B",
        "text": "Ultimately"
      },
      {
        "key": "C",
        "text": "Previously"
      },
      {
        "key": "D",
        "text": "Meanwhile"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Ultimately' bermakna pada akhirnya / secara mendasar (*in the end / fundamentally*), sangat tepat digunakan untuk menyintesiskan kesimpulan akhir dari sebuah diskusi dua sudut pandang.",
    "grammarNote": "Transitional Marker of Synthesis: 'Ultimately' menandai simpulan puncak setelah mempertimbangkan berbagai argumen."
  }
];
}



// ASTS Authentication Guard
function checkAstsAuth() {
  const auth = sessionStorage.getItem("sabaku_asts_auth");
  if (!auth) {
    alert("Halaman ini memerlukan verifikasi password ASTS. Anda akan dialihkan ke halaman verifikasi.");
    window.location.href = "masuk-asts.html";
    return false;
  }
  return true;
}


let studentIdentity = {
  tingkat: "XII-F",
  rombel: "1",
  presensi: "1",
  nama: "Siswa Kelas XII (Fase F+)"
};

let currentMode = "exam";
let currentQuestionIndex = 0;
let userAnswers = {};
let flaggedQuestions = new Set();
let timerInterval = null;
let remainingSeconds = 90 * 60;
let isExamSubmitted = false;
let audioSpeechRate = 1.0;
let questions = [];

function randomizeQuestionOptions(rawQuestions) {
  return rawQuestions.map(q => {
    if (q.type === "listening_pictures") {
      return q;
    }
    const cloned = JSON.parse(JSON.stringify(q));
    if (cloned.type === "complex_matrix" && Array.isArray(cloned.matrixStatements)) {
      const stmts = [...cloned.matrixStatements];
      for (let i = stmts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [stmts[i], stmts[j]] = [stmts[j], stmts[i]];
      }
      cloned.matrixStatements = stmts;
    } else if (Array.isArray(cloned.options) && cloned.options.length > 0) {
      const opts = [...cloned.options];
      const isMCMA = cloned.type === "mcma" && Array.isArray(cloned.correctAnswer);
      const originalCorrect = isMCMA ? [...cloned.correctAnswer] : cloned.correctAnswer;
      for (let i = opts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opts[i], opts[j]] = [opts[j], opts[i]];
      }
      const alphabet = ["A", "B", "C", "D", "E"];
      const keyMap = {};
      cloned.options = opts.map((opt, idx) => {
        keyMap[opt.key] = alphabet[idx];
        const resOpt = {
          key: alphabet[idx],
          text: opt.text || opt.label || ""
        };
        if (opt.label) resOpt.label = opt.label;
        if (opt.svg) resOpt.svg = opt.svg;
        return resOpt;
      });
      if (isMCMA) {
        cloned.correctAnswer = originalCorrect.map(k => keyMap[k] || k).sort();
      } else if (typeof cloned.correctAnswer === "string") {
        cloned.correctAnswer = keyMap[cloned.correctAnswer] || cloned.correctAnswer;
      }
    }
    return cloned;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (!checkAstsAuth()) return;
  loadStudentProfile();
  initTestState();
});

function loadStudentProfile() {
  try {
    const raw = sessionStorage.getItem("sabaku_student");
    if (raw) {
      const data = JSON.parse(raw);
      if (data.tingkat) studentIdentity.tingkat = data.tingkat;
      if (data.rombel) studentIdentity.rombel = data.rombel;
      if (data.presensi) studentIdentity.presensi = data.presensi;
      if (data.nama) studentIdentity.nama = data.nama;
    }
  } catch (e) {
    console.warn("Could not read student profile:", e);
  }
}

function initTestState() {
  userAnswers = {};
  flaggedQuestions.clear();
  isExamSubmitted = false;
  remainingSeconds = 90 * 60;
  currentQuestionIndex = 0;

  const rawBank = (typeof getGrade12AsasQuestions === "function") ? getGrade12AsasQuestions() :
                  (typeof getGrade12AstsQuestions === "function") ? getGrade12AstsQuestions() : [];

  questions = randomizeQuestionOptions(rawBank);

  try {
    const saved = localStorage.getItem("sabaku_asts_progress_XII");
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
  modeBadge.textContent = (currentMode === "practice") ? "🎯 Mode Latihan ASTS Gasal" : "🔒 Asesmen Resmi ASTS Gasal";
  modeBadge.className = "badge-mode " + (currentMode === "practice" ? "practice" : "exam");
  document.getElementById("side-student-name").textContent = studentIdentity.nama;
  document.getElementById("side-student-meta").textContent = `Kelas XII (Fase F+) | Rombel ${studentIdentity.rombel} | Presensi ${studentIdentity.presensi}`;
}

function toggleKisiKisiContent() {
  const body = document.getElementById("kisi-kisi-body");
  if (!body) return;
  const icon = document.getElementById("kisi-toggle-icon");
  if (body.style.display === "none") {
    body.style.display = "block";
    if (icon) icon.textContent = "▲ Sembunyikan Kisi-Kisi";
  } else {
    body.style.display = "none";
    if (icon) icon.textContent = "▼ Buka Kisi-Kisi Lengkap";
  }
}

function toggleKisiKisiModal() {
  const body = document.getElementById("kisi-kisi-body");
  if (!body) return;
  body.style.display = "block";
  const icon = document.getElementById("kisi-toggle-icon");
  if (icon) icon.textContent = "▲ Sembunyikan Kisi-Kisi";
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
    if (idx === currentQuestionIndex) btn.classList.add("active");
    if (flaggedQuestions.has(idx)) btn.classList.add("doubtful");
    else if (isQuestionAnswered(q.id)) btn.classList.add("answered");
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
  stopAudio();

  document.getElementById("q-number-badge").textContent = `Soal No. ${q.id} dari ${questions.length}`;
  document.getElementById("q-type-badge").textContent = q.title || "Pilihan Ganda";

  const listeningBox = document.getElementById("listening-container");
  if (q.audioText || (q.audioSegments && q.audioSegments.length > 0)) {
    listeningBox.style.display = "block";
    document.getElementById("audio-status-text").textContent = "Klik 'Putar Audio' untuk menyimak wacana otentik.";
  } else {
    listeningBox.style.display = "none";
  }

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

  const promptBox = document.getElementById("question-prompt-text");
  let srcBadge = "";
  if (q.source) {
    srcBadge = `<div class="source-citation" style="margin-top: 10px; font-size: 0.8rem; color: #475569; background: #f8fafc; border-left: 3.5px solid var(--accent-teal); padding: 6px 12px; border-radius: 4px; font-style: italic;">
      📌 <strong>${q.source}</strong>
    </div>`;
  }
  promptBox.innerHTML = q.prompt + srcBadge;

  const optContainer = document.getElementById("options-container");
  optContainer.innerHTML = "";

  if (q.type === "listening_pictures") {
    renderPictureChoices(q, optContainer);
  } else if (q.type === "complex_matrix") {
    renderMatrixTable(q, optContainer);
  } else if (q.type === "mcma") {
    renderMCMACheckboxes(q, optContainer);
  } else {
    renderSingleChoices(q, optContainer);
  }

  const expBox = document.getElementById("question-explanation-box");
  if (isExamSubmitted || (currentMode === "practice" && isQuestionAnswered(q.id))) {
    expBox.style.display = "block";
    let keyBadge = "";
    if (q.type === "complex_matrix") {
      keyBadge = q.matrixStatements.map((s, i) => `Pernyataan ${i+1}: <strong>${s.isCorrect ? 'BENAR (TRUE)' : 'SALAH (FALSE)'}</strong>`).join(" | ");
    } else if (Array.isArray(q.correctAnswer)) {
      keyBadge = q.correctAnswer.join(", ");
    } else {
      keyBadge = q.correctAnswer;
    }

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

  const flagBtn = document.getElementById("btn-flag-q");
  if (flaggedQuestions.has(index)) flagBtn.textContent = "🚩 Hapus Ragu";
  else flagBtn.textContent = "🏳️ Ragu-ragu";

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
    const svgContent = opt.svg || `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2"><rect x="10" y="10" width="80" height="80" rx="8" fill="#eff6ff"/><circle cx="50" cy="50" r="20" stroke="#3b82f6"/><text x="50" y="55" font-size="14" text-anchor="middle" fill="#1e40af" font-weight="bold">${opt.key}</text></svg>`;
    const labelContent = opt.label || opt.text || `Pilihan ${opt.key}`;
    card.innerHTML = `
      <div class="picture-svg-wrapper">${svgContent}</div>
      <div class="picture-letter-badge">${opt.key}</div>
      <div class="picture-label-text">${labelContent}</div>
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
      <div class="option-key-badge">${opt.key}</div>
      <div class="option-text-content">${opt.text}</div>
    `;
    list.appendChild(item);
  });
  container.appendChild(list);
}

function renderMatrixTable(q, container) {
  const tableWrap = document.createElement("div");
  tableWrap.className = "complex-matrix-wrap";
  tableWrap.style.overflowX = "auto";
  tableWrap.style.margin = "12px 0";

  let currentMap = userAnswers[q.id] || {};

  let html = `
    <table class="table-complex-matrix" style="width: 100%; border-collapse: collapse; border: 1.5px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: #fff;">
      <thead>
        <tr style="background: #f1f5f9; color: #1e293b; border-bottom: 2px solid #cbd5e1; text-align: left;">
          <th style="padding: 12px 14px; font-weight: 700; width: 62%;">Pernyataan / Analisis Situasi</th>
          <th style="padding: 12px 8px; text-align: center; width: 19%; background: #e0f2fe; color: #0369a1; font-weight: 700;">BENAR (TRUE)</th>
          <th style="padding: 12px 8px; text-align: center; width: 19%; background: #fee2e2; color: #b91c1c; font-weight: 700;">SALAH (FALSE)</th>
        </tr>
      </thead>
      <tbody>
  `;

  q.matrixStatements.forEach((st, idx) => {
    const val = currentMap[idx];
    const isTrueChecked = (val === true) ? "checked" : "";
    const isFalseChecked = (val === false) ? "checked" : "";
    const bgRow = (idx % 2 === 0) ? "#ffffff" : "#f8fafc";

    html += `
      <tr style="border-bottom: 1px solid #e2e8f0; background: ${bgRow};">
        <td style="padding: 12px 14px; font-size: 0.95rem; line-height: 1.5; color: #334155;">${st.statement}</td>
        <td style="padding: 12px 8px; text-align: center; vertical-align: middle;">
          <label style="cursor: pointer; display: inline-flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
            <input type="radio" name="matrix_${q.id}_${idx}" value="true" ${isTrueChecked} onchange="handleMatrixSelect(${q.id}, ${idx}, true)" style="transform: scale(1.3); cursor: pointer;" />
          </label>
        </td>
        <td style="padding: 12px 8px; text-align: center; vertical-align: middle;">
          <label style="cursor: pointer; display: inline-flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
            <input type="radio" name="matrix_${q.id}_${idx}" value="false" ${isFalseChecked} onchange="handleMatrixSelect(${q.id}, ${idx}, false)" style="transform: scale(1.3); cursor: pointer;" />
          </label>
        </td>
      </tr>
    `;
  });

  html += "</tbody></table>";
  tableWrap.innerHTML = html;
  container.appendChild(tableWrap);
}

function handleMatrixSelect(qId, stIdx, value) {
  if (!userAnswers[qId] || typeof userAnswers[qId] !== "object" || Array.isArray(userAnswers[qId])) {
    userAnswers[qId] = {};
  }
  userAnswers[qId][stIdx] = value;
  updateNavigatorStatus();
  saveProgressToLocalStorage();
}

function renderMCMACheckboxes(q, container) {
  const wrap = document.createElement("div");
  wrap.className = "mcma-options-wrap";
  wrap.style.display = "flex";
  wrap.style.flexDirection = "column";
  wrap.style.gap = "10px";
  wrap.style.margin = "12px 0";

  let currentArr = Array.isArray(userAnswers[q.id]) ? userAnswers[q.id] : [];

  q.options.forEach(opt => {
    const isChecked = currentArr.includes(opt.key);
    const item = document.createElement("div");
    item.className = "mcma-option-item" + (isChecked ? " selected" : "");
    item.style.display = "flex";
    item.style.alignItems = "flex-start";
    item.style.padding = "12px 14px";
    item.style.border = isChecked ? "2px solid var(--accent-teal)" : "1.5px solid #cbd5e1";
    item.style.borderRadius = "8px";
    item.style.background = isChecked ? "#f0fdfa" : "#ffffff";
    item.style.cursor = "pointer";
    item.style.transition = "all 0.2s ease";

    item.onclick = (e) => {
      if (e.target.tagName !== "INPUT") {
        const chk = item.querySelector("input[type=checkbox]");
        if (chk) chk.click();
      }
    };

    item.innerHTML = `
      <div style="margin-right: 12px; display: flex; align-items: center; height: 24px;">
        <input type="checkbox" id="chk_${q.id}_${opt.key}" value="${opt.key}" ${isChecked ? "checked" : ""} onchange="handleMCMAToggle(${q.id}, '${opt.key}', this.checked)" style="transform: scale(1.3); cursor: pointer;" />
      </div>
      <div style="flex: 1; font-size: 0.95rem; line-height: 1.5; color: #1e293b;">
        <strong style="color: var(--primary-navy); margin-right: 6px;">[${opt.key}]</strong> ${opt.text}
      </div>
    `;
    wrap.appendChild(item);
  });

  const tip = document.createElement("div");
  tip.style.fontSize = "0.85rem";
  tip.style.color = "#0284c7";
  tip.style.background = "#f0f9ff";
  tip.style.padding = "8px 12px";
  tip.style.borderRadius = "6px";
  tip.style.borderLeft = "3.5px solid #0284c7";
  tip.innerHTML = "💡 <em>Petunjuk: Pilihlah tepat <strong>2 opsi jawaban</strong> yang benar pada tipe soal MCMA ini.</em>";
  wrap.appendChild(tip);

  container.appendChild(wrap);
}

function handleMCMAToggle(qId, key, isChecked) {
  let arr = Array.isArray(userAnswers[qId]) ? [...userAnswers[qId]] : [];
  if (isChecked) {
    if (!arr.includes(key)) arr.push(key);
  } else {
    arr = arr.filter(k => k !== key);
  }
  arr.sort();
  userAnswers[qId] = arr;
  updateNavigatorStatus();
  saveProgressToLocalStorage();
  renderQuestion(currentQuestionIndex);
}

function navigateQuestion(step) {
  renderQuestion(currentQuestionIndex + step);
}

function toggleFlagQuestion() {
  if (flaggedQuestions.has(currentQuestionIndex)) {
    flaggedQuestions.delete(currentQuestionIndex);
  } else {
    flaggedQuestions.add(currentQuestionIndex);
  }
  renderQuestion(currentQuestionIndex);
}

// Audio Engine: Web Speech API Multi-Speaker
let isAudioPlaying = false;
let audioQueue = [];
let audioQueueIdx = 0;
let cachedVoices = [];

if (typeof window !== "undefined" && window.speechSynthesis) {
  cachedVoices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

function getAvailableVoices() {
  if (!window.speechSynthesis) return [];
  if (!cachedVoices || cachedVoices.length === 0) cachedVoices = window.speechSynthesis.getVoices();
  return cachedVoices;
}

function selectAudioVoice(role, gender, lang) {
  const voices = getAvailableVoices();
  if (!voices || voices.length === 0) return null;
  if (lang && lang.startsWith("id")) {
    const idVoice = voices.find(v => v.lang.startsWith("id") || v.name.toLowerCase().includes("indonesia") || v.name.includes("Gadis") || v.name.includes("Ardi"));
    if (idVoice) return idVoice;
  }
  const enVoices = voices.filter(v => v.lang.startsWith("en"));
  if (gender === "female") {
    const fVoice = enVoices.find(v => v.name.includes("Zira") || v.name.includes("Jenny") || v.name.includes("Aria") || v.name.toLowerCase().includes("female"));
    if (fVoice) return fVoice;
  } else if (gender === "male") {
    const mVoice = enVoices.find(v => v.name.includes("David") || v.name.includes("Guy") || v.name.includes("Ryan") || v.name.toLowerCase().includes("male"));
    if (mVoice) return mVoice;
  }
  return enVoices.find(v => v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("David") || v.name.includes("Zira")) || enVoices[0] || voices[0];
}

function stopAudio() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  isAudioPlaying = false;
  audioQueue = [];
  audioQueueIdx = 0;
  const playText = document.getElementById("play-text");
  const playBtn = document.getElementById("btn-play-audio");
  const statusText = document.getElementById("audio-status-text");
  if (playText) playText.textContent = "Putar Audio";
  if (playBtn) playBtn.style.backgroundColor = "var(--accent-teal)";
  if (statusText) statusText.textContent = "Klik 'Putar Audio' untuk menyimak wacana otentik.";
}

function playQuestionAudio() {
  const q = questions[currentQuestionIndex];
  if (!q) return;
  if (!window.speechSynthesis) {
    alert("Peramban Anda belum mendukung Web Speech API.");
    return;
  }
  if (isAudioPlaying) {
    stopAudio();
    return;
  }
  window.speechSynthesis.cancel();
  let segments = [];
  if (q.audioSegments && q.audioSegments.length > 0) segments = q.audioSegments;
  else if (q.audioText) segments = [{ text: q.audioText, lang: "en-US", role: "narrator" }];
  else return;

  audioQueue = segments;
  audioQueueIdx = 0;
  isAudioPlaying = true;

  const playBtn = document.getElementById("btn-play-audio");
  const playText = document.getElementById("play-text");
  const statusText = document.getElementById("audio-status-text");
  if (playText) playText.textContent = "Hentikan";
  if (playBtn) playBtn.style.backgroundColor = "#dc2626";
  if (statusText) statusText.textContent = "🔊 Audio sedang diputar. Simak dengan seksama...";
  playNextAudioSegment();
}

function playNextAudioSegment() {
  if (!isAudioPlaying) return;
  if (audioQueueIdx >= audioQueue.length) {
    isAudioPlaying = false;
    audioQueue = [];
    audioQueueIdx = 0;
    const playBtn = document.getElementById("btn-play-audio");
    const playText = document.getElementById("play-text");
    const statusText = document.getElementById("audio-status-text");
    if (playText) playText.textContent = "Putar Audio";
    if (playBtn) playBtn.style.backgroundColor = "var(--accent-teal)";
    if (statusText) statusText.textContent = "Penyimakan audio selesai. Silakan jawab pertanyaan.";
    return;
  }

  const seg = audioQueue[audioQueueIdx++];
  const utt = new SpeechSynthesisUtterance(seg.text);
  utt.lang = seg.lang || "en-US";
  utt.rate = audioSpeechRate * (seg.rateMultiplier || 1.0);
  const matchedVoice = selectAudioVoice(seg.role, seg.gender, seg.lang);
  if (matchedVoice) utt.voice = matchedVoice;
  if (seg.pitch !== undefined) utt.pitch = seg.pitch;
  else if (seg.gender === "female") utt.pitch = 1.25;
  else if (seg.gender === "male") utt.pitch = 0.85;
  else utt.pitch = 1.0;

  utt.onend = () => {
    if (isAudioPlaying) setTimeout(playNextAudioSegment, seg.pauseAfter || 320);
  };
  utt.onerror = () => {
    if (isAudioPlaying) playNextAudioSegment();
  };
  window.speechSynthesis.speak(utt);
}

function toggleAudioSpeed() {
  audioSpeechRate = (audioSpeechRate === 1.0) ? 0.85 : 1.0;
  document.getElementById("speed-text").textContent = audioSpeechRate + "x";
}

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
    document.getElementById("timer-display").textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    if (remainingSeconds < 300) document.getElementById("timer-box").style.backgroundColor = "#dc2626";
    if (remainingSeconds % 15 === 0) saveProgressToLocalStorage();
  }, 1000);
}

function checkUnansweredQuestions() {
  const unanswered = [];
  questions.forEach((q, idx) => {
    if (!isQuestionAnswered(q.id)) unanswered.push(idx + 1);
  });
  return unanswered;
}

function submitTest() {
  const unanswered = checkUnansweredQuestions();
  if (unanswered.length > 0) {
    const proceed = confirm(`Masih terdapat ${unanswered.length} soal yang belum dijawab (Nomor: ${unanswered.slice(0, 10).join(", ")}${unanswered.length > 10 ? "..." : ""}).\nApakah Anda yakin ingin menyelesaikan tes sekarang?`);
    if (!proceed) return;
  } else {
    if (!confirm("Apakah Anda yakin ingin menyelesaikan tes dan melihat hasil perolehan nilai?")) return;
  }

  isExamSubmitted = true;
  clearInterval(timerInterval);
  stopAudio();

  let correctCount = 0;
  let breakdownRows = "";

  questions.forEach((q, idx) => {
    const userAns = userAnswers[q.id];
    let isQCorrect = false;
    let userAnsLabel = "-";
    let keyLabel = "";

    if (q.type === "complex_matrix") {
      let stCorrect = 0;
      const totalSt = q.matrixStatements.length;
      q.matrixStatements.forEach((st, sIdx) => {
        const val = userAns ? userAns[sIdx] : undefined;
        if (val === st.isCorrect) stCorrect++;
      });
      isQCorrect = (stCorrect === totalSt);
      userAnsLabel = `Benar ${stCorrect}/${totalSt}`;
      keyLabel = q.matrixStatements.map((s, i) => `S${i+1}:${s.isCorrect ? 'T' : 'F'}`).join(" ");
    } else if (q.type === "mcma") {
      const uArr = Array.isArray(userAns) ? [...userAns].sort() : [];
      const cArr = Array.isArray(q.correctAnswer) ? [...q.correctAnswer].sort() : [];
      isQCorrect = (uArr.length === cArr.length && uArr.every((v, i) => v === cArr[i]));
      userAnsLabel = uArr.length > 0 ? uArr.join(",") : "-";
      keyLabel = cArr.join(",");
    } else {
      isQCorrect = (userAns === q.correctAnswer);
      userAnsLabel = userAns || "-";
      keyLabel = q.correctAnswer;
    }

    if (isQCorrect) correctCount++;

    breakdownRows += `
      <tr>
        <td style="text-align: center;">${idx + 1}</td>
        <td>${q.title || "Pilihan Ganda"}</td>
        <td style="text-align: center; font-weight: 700;">${userAnsLabel}</td>
        <td style="text-align: center; font-weight: 700; color: #047857;">${keyLabel}</td>
        <td style="text-align: center;">${isQCorrect ? '<span style="color:#16a34a; font-weight:bold;">✔ Benar</span>' : '<span style="color:#dc2626; font-weight:bold;">✘ Salah</span>'}</td>
      </tr>
    `;
  });

  const finalScore = Math.round((correctCount / questions.length) * 100);
  const isTuntas = finalScore >= 75;

  document.getElementById("modal-student-name").textContent = studentIdentity.nama;
  document.getElementById("modal-student-meta").textContent = `Kelas: ${studentIdentity.tingkat} | Rombel: ${studentIdentity.rombel} | Presensi: ${studentIdentity.presensi}`;
  document.getElementById("modal-score-grade").textContent = finalScore;
  document.getElementById("modal-score-badge").textContent = isTuntas ? "TUNTAS KKTP (≥ 75)" : "BELUM TUNTAS (< 75)";
  document.getElementById("modal-score-badge").className = "kktp-status " + (isTuntas ? "passed" : "failed");
  document.getElementById("modal-correct-count").textContent = correctCount;
  document.getElementById("modal-total-count").textContent = questions.length;
  document.getElementById("breakdown-tbody").innerHTML = breakdownRows;
  document.getElementById("result-modal").style.display = "flex";

  saveRecordToHistoryAndSheet(finalScore, correctCount, questions.length);
  renderQuestion(currentQuestionIndex);
}

function saveRecordToHistoryAndSheet(finalScore, correctCount, totalQuestions) {
  const record = {
    timestamp: new Date().toLocaleString("id-ID"),
    tingkat: studentIdentity.tingkat,
    rombel: studentIdentity.rombel,
    presensi: studentIdentity.presensi,
    nama: studentIdentity.nama,
    mode: (currentMode === "practice") ? "🎯 Mode Latihan ASTS Gasal" : "🔒 Asesmen Resmi ASTS Gasal",
    score: correctCount,
    total: totalQuestions,
    grade: finalScore,
    duration: `${Math.floor((90 * 60 - remainingSeconds) / 60)} menit`
  };

  try {
    const history = JSON.parse(localStorage.getItem("sabaku_ats_history") || "[]");
    history.unshift(record);
    localStorage.setItem("sabaku_ats_history", JSON.stringify(history));
  } catch (err) {}

  sendScoreToGoogleSheet(record);
}

function sendScoreToGoogleSheet(record) {
  const webAppUrl = localStorage.getItem("sabaku_gs_url") || DEFAULT_GS_URL;
  if (!webAppUrl || webAppUrl.includes("REPLACE_WITH_YOUR")) return;

  const statusEl = document.getElementById("db-sync-status");
  if (statusEl) statusEl.innerHTML = "⏳ Menghubungkan dan menyimpan nilai ke pangkalan data sekolah...";

  const payload = {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record)
  };

  fetch(webAppUrl, payload).then(() => {
    if (statusEl) statusEl.innerHTML = "✅ Nilai Anda telah berhasil tersimpan di sistem basis data sekolah!";
  }).catch(() => {
    try {
      const beacon = new Image();
      const query = new URLSearchParams({
        action: "saveScore",
        tingkat: record.tingkat,
        rombel: record.rombel,
        presensi: record.presensi,
        nama: record.nama,
        score: record.score,
        total: record.total,
        grade: record.grade,
        mode: record.mode
      }).toString();
      beacon.src = `${webAppUrl}?${query}`;
    } catch (bErr) {}
    if (statusEl) statusEl.innerHTML = "✅ Nilai Anda telah tersimpan dengan aman di sistem sekolah.";
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
    link.setAttribute("download", `Rekap_Nilai_ASTS Gasal_XII-F_${studentIdentity.nama.replace(/\s+/g, "_")}.csv`);
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
    localStorage.removeItem("sabaku_asts_progress_XII");
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
    localStorage.setItem("sabaku_asts_progress_XII", JSON.stringify(data));
  } catch (e) {}
}

