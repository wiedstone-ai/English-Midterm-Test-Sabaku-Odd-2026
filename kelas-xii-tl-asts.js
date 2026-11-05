/**
 * ASESMEN SUMATIF TENGAH SEMESTER (ASTS) GASAL 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT XII (TINGKAT LANJUT)
 * Standar: TKA & AKM Literasi (Pilihan Ganda Biasa, Kompleks Matrix, & MCMA)
 * Dilengkapi Verifikasi Password ASTS Terpadu
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

const SVG_PICTURES = {
  biotech_lab: `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="15" y="20" width="70" height="55" rx="5" fill="#eff6ff" stroke="#2563eb"/>
    <path d="M30 45c5-10 15-10 20 0s15 10 20 0" stroke="#3b82f6" stroke-width="2.5"/>
    <path d="M30 55c5 10 15 10 20 0s15-10 20 0" stroke="#1d4ed8" stroke-width="2.5"/>
    <line x1="35" y1="42" x2="35" y2="58" stroke="#93c5fd" stroke-width="2"/>
    <line x1="50" y1="45" x2="50" y2="55" stroke="#93c5fd" stroke-width="2"/>
    <line x1="65" y1="42" x2="65" y2="58" stroke="#93c5fd" stroke-width="2"/>
    <circle cx="50" cy="82" r="3" fill="#2563eb"/>
  </svg>`,
  un_assembly: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="50" cy="40" rx="35" ry="18" fill="#f0fdf4" stroke="#059669"/>
    <ellipse cx="50" cy="52" rx="42" ry="20" stroke="#10b981" stroke-dasharray="3 3"/>
    <path d="M25 75h50M35 85h30" stroke="#047857" stroke-width="2.5"/>
    <rect x="42" y="28" width="16" height="12" rx="2" fill="#bae6fd" stroke="#0284c7"/>
    <circle cx="50" cy="22" r="4" fill="#0284c7"/>
  </svg>`,
  tokamak_fusion: `<svg viewBox="0 0 100 100" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="50" r="35" stroke="#d97706" stroke-width="3"/>
    <circle cx="50" cy="50" r="18" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
    <circle cx="50" cy="50" r="8" fill="#ea580c"/>
    <path d="M50 15v17M50 68v17M15 50h17M68 50h17" stroke="#f59e0b" stroke-width="2.5"/>
    <path d="M25 25l12 12M63 63l12 12M75 25l-12 12M37 63l-12 12" stroke="#d97706" stroke-dasharray="2 2"/>
  </svg>`,
  printing_press: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="20" y="35" width="60" height="45" rx="3" fill="#f8fafc" stroke="#475569"/>
    <circle cx="50" cy="50" r="12" stroke="#334155" stroke-width="2"/>
    <path d="M30 20h40v15H30z" fill="#e2e8f0" stroke="#475569"/>
    <path d="M15 80h70" stroke="#0f172a" stroke-width="3"/>
    <line x1="50" y1="20" x2="50" y2="10" stroke="#334155" stroke-width="3"/>
    <circle cx="50" cy="8" r="3" fill="#0f172a"/>
  </svg>`
};

function getGrade12TLAstsQuestions() {
  return [
  {
    "id": 1,
    "source": "Sumber: Advanced English Assessment Series — BSKAP Kemendikbudristek",
    "type": "listening_pictures",
    "title": "Listening Section: Part I — Pictures",
    "audioText": "Number one. Look at the pictures. In a modern science laboratory, a researcher is analyzing digital DNA strands on a computer screen to study genetic traits. Which picture best illustrates the spoken statement?",
    "prompt": "Look at the four pictures below. Which picture matches the modern science laboratory described in the audio?",
    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.biotech_lab,
        "label": "Modern science laboratory with digital DNA sequencing display"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.un_assembly,
        "label": "International assembly hall for youth diplomacy and conferences"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.tokamak_fusion,
        "label": "Advanced clean energy research reactor for renewable power"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.printing_press,
        "label": "Historical mechanical printing press workshop for early newspapers"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Audio menggambarkan peneliti sains di laboratorium modern yang menganalisis untaian DNA digital pada layar komputer (Gambar A).",
    "grammarNote": "Present Continuous for Workplace Research Actions."
  },
  {
    "id": 2,
    "source": "Sumber: Advanced English Assessment Series — BSKAP Kemendikbudristek",
    "type": "listening_pictures",
    "title": "Listening Section: Part I — Pictures",
    "audioText": "Number two. Look at the pictures. In a large international assembly hall, youth delegates are seated around a semicircle discussing sustainable development goals. Which picture best corresponds to the spoken description?",
    "prompt": "Look at the four pictures below. Which picture matches the international assembly hall described in the audio?",
    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.biotech_lab,
        "label": "Modern science laboratory with digital DNA sequencing display"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.un_assembly,
        "label": "International assembly hall for youth diplomacy and conferences"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.tokamak_fusion,
        "label": "Advanced clean energy research reactor for renewable power"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.printing_press,
        "label": "Historical mechanical printing press workshop for early newspapers"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Audio menggambarkan ruang sidang majelis internasional di mana delegasi muda duduk melingkar mendiskusikan tujuan pembangunan (Gambar B).",
    "grammarNote": "Spatial and Descriptive Prepositional Phrases."
  },
  {
    "id": 3,
    "source": "Sumber: Advanced English Assessment Series — BSKAP Kemendikbudristek",
    "type": "listening_pictures",
    "title": "Listening Section: Part I — Pictures",
    "audioText": "Number three. Look at the pictures. Inside an advanced clean energy facility, engineers monitor a central solar-fusion reactor designed for renewable power. Which picture best illustrates the spoken statement?",
    "prompt": "Look at the four pictures below. Which picture matches the clean energy research reactor described in the audio?",
    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.biotech_lab,
        "label": "Modern science laboratory with digital DNA sequencing display"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.printing_press,
        "label": "Historical mechanical printing press workshop for early newspapers"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.tokamak_fusion,
        "label": "Advanced clean energy research reactor for renewable power"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.un_assembly,
        "label": "International assembly hall for youth diplomacy and conferences"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Audio menggambarkan instalasi reaktor riset energi bersih terbarukan berbentuk sirkular (Gambar C).",
    "grammarNote": "Scientific Facilities Identification."
  },
  {
    "id": 4,
    "source": "Sumber: Advanced English Assessment Series — SMAN 1 Bae Kudus",
    "type": "listening_dialog",
    "title": "Listening Section: Part II — Dialogue on Digital Currency",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number four. Listen to a conversation between two students discussing digital payments.",
        "pauseAfter": 400
      },
      {
        "role": "speaker1",
        "gender": "male",
        "pitch": 0.85,
        "text": "I rarely carry paper cash nowadays because digital payment apps and QR codes are so convenient for buying lunch and school books.",
        "pauseAfter": 450
      },
      {
        "role": "speaker2",
        "gender": "female",
        "pitch": 1.25,
        "text": "That is true for students in big cities. However, in many rural markets, small traders still depend entirely on physical banknotes. Besides, server downtime and digital fraud can leave people without access to their money.",
        "pauseAfter": 450
      },
      {
        "role": "speaker1",
        "gender": "male",
        "pitch": 0.85,
        "text": "You make a great point. That is why digital financial literacy and secure banking infrastructure are essential before going completely cashless.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What is the female speaker's primary concern regarding a cashless society?"
      }
    ],
    "prompt": "What is the female speaker's primary concern regarding a cashless society?",
    "options": [
      {
        "key": "A",
        "text": "The difficulty of printing paper banknotes for commercial state banks."
      },
      {
        "key": "B",
        "text": "The complete absence of mobile banking and QR payment apps across Indonesia."
      },
      {
        "key": "C",
        "text": "The high financial cost of purchasing new smartphones for all school teachers."
      },
      {
        "key": "D",
        "text": "Financial exclusion for rural traders and potential server downtime or digital fraud."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pembicara wanita menekankan bahwa pedagang kecil pedesaan masih bergantung pada uang tunai fisik, serta risiko kegagalan server dan penipuan digital (Opsi D).",
    "grammarNote": "Stating Reservations and Expressing Contrasting Opinions."
  },
  {
    "id": 5,
    "source": "Sumber: Advanced English Assessment Series — SMAN 1 Bae Kudus",
    "type": "listening_dialog",
    "title": "Listening Section: Part II — Literary Dialogue on 'This Earth of Mankind'",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number five. Listen to a literary discussion between two students about Pramoedya Ananta Toer's novel, This Earth of Mankind.",
        "pauseAfter": 400
      },
      {
        "role": "speaker1",
        "gender": "male",
        "pitch": 0.85,
        "text": "I really admire how Nyai Ontosoroh is depicted in This Earth of Mankind. Even without formal schooling, she manages a large agricultural business through hard work and self-education.",
        "pauseAfter": 450
      },
      {
        "role": "speaker2",
        "gender": "female",
        "pitch": 1.25,
        "text": "Absolutely. In colonial times, native women were given very few legal rights. Yet Nyai Ontosoroh stood proud and defended her family dignity against unfair colonial laws.",
        "pauseAfter": 450
      },
      {
        "role": "speaker1",
        "gender": "male",
        "pitch": 0.85,
        "text": "And Minke learns from her that true dignity comes from moral courage and standing up for justice, not from European titles.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What central quality in Nyai Ontosoroh do both students strongly admire?"
      }
    ],
    "prompt": "What central quality in Nyai Ontosoroh do both students strongly admire?",
    "options": [
      {
        "key": "A",
        "text": "Her remarkable business acumen and moral courage in defending family dignity against injustice."
      },
      {
        "key": "B",
        "text": "Her desire to move permanently to Europe and abandon her native agricultural business."
      },
      {
        "key": "C",
        "text": "Her willingness to accept unfair colonial court judgments without any spoken protest."
      },
      {
        "key": "D",
        "text": "Her decision to prohibit Minke from writing articles in the Malay press."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kedua pembicara mengagumi ketangguhan Nyai Ontosoroh yang mengelola perkebunan melalui kerja keras dan membela martabat keluarga di tengah diskriminasi kolonial (Opsi A).",
    "grammarNote": "Literary Character Analysis & Evaluative Adjectives."
  },
  {
    "id": 6,
    "source": "Sumber: Advanced English Assessment Series — SMAN 1 Bae Kudus",
    "type": "listening_dialog",
    "title": "Listening Section: Part II — Dialogue on Environmental Action",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number six. Listen to a conversation between two youth leaders about community environmental projects.",
        "pauseAfter": 400
      },
      {
        "role": "speaker1",
        "gender": "female",
        "pitch": 1.25,
        "text": "Our school eco-club collected over five hundred kilograms of plastic waste during the coastal clean-up last Saturday. The students were truly enthusiastic.",
        "pauseAfter": 450
      },
      {
        "role": "speaker2",
        "gender": "male",
        "pitch": 0.85,
        "text": "That is a fantastic accomplishment! Still, coastal clean-ups only address the symptoms. To truly protect our marine life, local governments must enforce strict bans on single-use plastics and provide accessible recycling facilities.",
        "pauseAfter": 450
      },
      {
        "role": "speaker1",
        "gender": "female",
        "pitch": 1.25,
        "text": "I completely agree. Youth initiatives must be supported by systemic policies and stronger waste management regulations.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What do both youth leaders conclude about protecting the environment?"
      }
    ],
    "prompt": "What do both youth leaders conclude about protecting the environment?",
    "options": [
      {
        "key": "A",
        "text": "Voluntary student clean-ups alone are completely sufficient to end marine plastic pollution."
      },
      {
        "key": "B",
        "text": "Grassroots youth clean-ups must be reinforced by systemic regulations and waste management facilities."
      },
      {
        "key": "C",
        "text": "Schools should stop organizing recycling projects because waste pollution cannot be solved."
      },
      {
        "key": "D",
        "text": "Plastic pollution only occurs in landlocked cities and does not affect coastal shorelines."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kedua tokoh pemuda bersepakat bahwa aksi nyata bersih pantai oleh pelajar harus diperkuat dengan regulasi pembatasan plastik dan fasilitas daur ulang dari pemerintah (Opsi B).",
    "grammarNote": "Agreement and Synthesizing Solutions in Environmental Discussions."
  },
  {
    "id": 7,
    "source": "Sumber: Advanced English Assessment Series — Kemendikbudristek",
    "type": "listening_talk",
    "title": "Listening Section: Part III — Monologue on Indonesian Literature",
    "audioText": "Questions 7 and 8 are based on the following lecture extract. Good afternoon, class. Today we explore how modern Indonesian literature helped foster national consciousness during the twentieth century. Early colonial literature was often written in Dutch and accessible only to a small aristocratic elite. However, pioneers like Pramoedya Ananta Toer chose to write compelling narratives in Indonesian and Malay, using literature to illuminate social injustice and give a voice to marginalized communities. Through realistic character development and vivid historical settings, these writers demonstrated that literature is not merely personal entertainment, but a powerful instrument for social reflection, collective empathy, and civic responsibility. Number seven. What is the primary topic of the lecturer's address?",
    "prompt": "What is the primary topic of the lecturer's address?",
    "options": [
      {
        "key": "A",
        "text": "The industrial printing techniques used for school textbooks in the twentieth century."
      },
      {
        "key": "B",
        "text": "The commercial sales figures of foreign translated novels across Southeast Asia."
      },
      {
        "key": "C",
        "text": "The role of modern Indonesian literature in fostering national consciousness and social justice."
      },
      {
        "key": "D",
        "text": "A technical comparison between ancient Javanese poetry and modern Dutch grammar."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Topik utama kuliah adalah bagaimana sastra modern Indonesia membangun kesadaran kebangsaan dan memperjuangkan keadilan sosial (Opsi C).",
    "grammarNote": "Identifying Main Idea in Academic Lectures."
  },
  {
    "id": 8,
    "source": "Sumber: Advanced English Assessment Series — Kemendikbudristek",
    "type": "listening_talk",
    "title": "Listening Section: Part III — Monologue on Indonesian Literature",
    "audioText": "Number eight. According to the lecturer, how did pioneer writers view the true role of literature?",
    "prompt": "According to the lecturer, how did pioneer writers view the true role of literature?",
    "options": [
      {
        "key": "A",
        "text": "As a private business venture meant solely to generate wealth for aristocratic authors."
      },
      {
        "key": "B",
        "text": "As exclusive pastime entertainment reserved strictly for colonial administrators."
      },
      {
        "key": "C",
        "text": "As an obsolete artistic medium that should be replaced entirely by commercial radio."
      },
      {
        "key": "D",
        "text": "As a powerful instrument for social reflection, collective empathy, and civic responsibility."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Dosen menyatakan bahwa para penulis perintis memandang sastra sebagai instrumen kuat untuk refleksi sosial, empati kolektif, dan tanggung jawab sipil (Opsi D).",
    "grammarNote": "Detail Comprehension in Academic Monologues."
  },
  {
    "id": 9,
    "source": "Sumber: Advanced English Assessment Series — Kemendikbudristek",
    "type": "listening_talk",
    "title": "Listening Section: Part III — Symposium on Digital Literacy",
    "audioText": "Questions 9 and 10 are based on the following symposium address. Distinguished teachers and students. In an era dominated by automated news feeds and social media algorithms, digital literacy must evolve beyond basic keyboard skills. Algorithms are specifically engineered to capture our attention by promoting sensational and emotionally charged content. When high school graduates accept viral posts without scrutiny, misinformation spreads rapidly, creating polarization and anxiety. Therefore, schools must empower students to become discerning digital citizens. This means learning how to investigate sources, cross-check evidence, and understand how algorithms shape the information we consume every day. Number nine. Why do social media algorithms promote sensational content according to the speaker?",
    "prompt": "Why do social media algorithms promote sensational content according to the speaker?",
    "options": [
      {
        "key": "A",
        "text": "To maximize user engagement and capture online attention through emotional triggers."
      },
      {
        "key": "B",
        "text": "To help high school students memorize grammatical rules for national examinations."
      },
      {
        "key": "C",
        "text": "To eliminate the need for physical public libraries and professional journalists."
      },
      {
        "key": "D",
        "text": "To verify whether viral digital posts are completely factual and objective."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pembicara menjelaskan bahwa algoritma dirancang untuk memaksimalkan atensi dan keterlibatan pengguna dengan memicu emosi (Opsi A).",
    "grammarNote": "Cause and Effect Reasoning in Spoken Texts."
  },
  {
    "id": 10,
    "source": "Sumber: Advanced English Assessment Series — Kemendikbudristek",
    "type": "listening_talk",
    "title": "Listening Section: Part III — Symposium on Digital Literacy",
    "audioText": "Number ten. What should schools empower students to do in response to algorithmic media?",
    "prompt": "What should schools empower students to do in response to algorithmic media?",
    "options": [
      {
        "key": "A",
        "text": "Stop using the internet entirely and return to manual paper typewriters."
      },
      {
        "key": "B",
        "text": "Investigate sources, cross-check evidence, and develop into discerning digital citizens."
      },
      {
        "key": "C",
        "text": "Share breaking news immediately across social media feeds before fact-checking."
      },
      {
        "key": "D",
        "text": "Rely solely on automated chatbot summaries without consulting authentic books."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sekolah harus membekali siswa dengan kemampuan meneliti sumber, memverifikasi bukti, dan menjadi warga digital yang kritis (Opsi B).",
    "grammarNote": "Action Recommendations & Modals of Suggestion."
  },
  {
    "id": 11,
    "source": "Sumber: Kajian Literasi Keuangan Digital — BSKAP Kemendikbudristek",
    "type": "reading_discussion",
    "title": "Reading Section: Discussion Text Analysis",
    "stimulusTitle": "Text 1: The Transition to a Cashless Society: Modern Convenience vs. Financial Inclusion and Security",
    "stimulusBody": "<p>In recent years, the rapid advancement of financial technology has propelled the global shift toward a cashless society. Across Indonesia, electronic wallets, mobile banking applications, and standardized QR codes (QRIS) have become omnipresent in modern commerce. Proponents argue that digital payment systems offer unmatched speed and financial efficiency. For consumers, carrying a smartphone eliminates the physical burden of paper currency and reduces the risk of street robbery. For small businesses, digital transactions streamline accounting records, accelerate payments, and expand access to formal microfinance loans. Moreover, governments benefit from enhanced fiscal transparency, as electronic records make tax evasion and illegal transactions significantly harder to conceal.</p>\n      <p>Conversely, critical economists and consumer advocates urge caution regarding a completely cashless economy. Their primary concern revolves around financial exclusion. Millions of rural citizens, small traditional market vendors, and elderly individuals still lack reliable smartphone connectivity, digital literacy, or access to formal bank accounts. Forcing an abrupt transition to cashless systems threatens to marginalize these vulnerable groups from everyday economic life. Furthermore, overreliance on digital networks introduces grave cybersecurity vulnerabilities. Server outages, cyberattacks, and sophisticated phishing scams can suddenly freeze access to funds. In addition, storing every financial transaction on private servers creates serious privacy concerns, enabling corporate tracking of personal consumer habits.</p>\n      <p>In conclusion, while the transition toward digital payments brings undeniable economic benefits, policymakers must balance technological innovation with social inclusion. Rather than completely outlawing physical banknotes, nations should adopt a hybrid financial ecosystem. By simultaneously strengthening cybersecurity regulations, expanding affordable internet access, and safeguarding the legal status of cash, society can harness the efficiency of digital finance without leaving marginalized citizens behind.</p>",
    "prompt": "What is the primary communicative purpose of the text above?",
    "options": [
      {
        "key": "A",
        "text": "To persuade readers to completely boycott all electronic banking and online payments."
      },
      {
        "key": "B",
        "text": "To provide step-by-step technical instructions for installing a mobile banking application."
      },
      {
        "key": "C",
        "text": "To present balanced perspectives regarding the advantages and challenges of a cashless society."
      },
      {
        "key": "D",
        "text": "To narrate the historical biography of an Indonesian central banking executive."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Tujuan komunikatif teks diskusi adalah menyajikan dua sudut pandang yang berimbang (keuntungan efisiensi vs tantangan inklusi dan privasi) mengenai masyarakat nontunai (Opsi C).",
    "grammarNote": "Discussion Text Communicative Purpose."
  },
  {
    "id": 12,
    "source": "Sumber: Kajian Literasi Keuangan Digital — BSKAP Kemendikbudristek",
    "type": "reading_discussion",
    "title": "Reading Section: Discussion Text Analysis",
    "stimulusTitle": "Text 1: The Transition to a Cashless Society: Modern Convenience vs. Financial Inclusion and Security",
    "stimulusBody": "Lihat wacana Text 1 pada soal sebelumnya.",
    "prompt": "According to proponents in paragraph 1, how do digital payment systems benefit small enterprises?",
    "options": [
      {
        "key": "A",
        "text": "By exempting small business owners from paying any regional taxes to local governments."
      },
      {
        "key": "B",
        "text": "By guaranteeing that small businesses will never experience commercial competition."
      },
      {
        "key": "C",
        "text": "By providing free smartphones and high-speed computers to all store employees."
      },
      {
        "key": "D",
        "text": "By streamlining bookkeeping records, accelerating payments, and facilitating microfinance access."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Paragraf 1 menyatakan manfaat transaksi digital bagi UMKM: 'streamline accounting records, accelerate payments, and expand access to formal microfinance loans' (Opsi D).",
    "grammarNote": "Scanning for Specific Factual Evidence in Expository Texts."
  },
  {
    "id": 13,
    "source": "Sumber: Kajian Literasi Keuangan Digital — BSKAP Kemendikbudristek",
    "type": "reading_discussion",
    "title": "Reading Section: Discussion Text Analysis",
    "stimulusTitle": "Text 1: The Transition to a Cashless Society: Modern Convenience vs. Financial Inclusion and Security",
    "stimulusBody": "Lihat wacana Text 1 pada soal sebelumnya.",
    "prompt": "What major socioeconomic risk of an abrupt cashless transition is highlighted in paragraph 2?",
    "options": [
      {
        "key": "A",
        "text": "The financial exclusion of rural citizens, small market vendors, and the elderly who lack digital access."
      },
      {
        "key": "B",
        "text": "A sudden worldwide shortage of paper and metal materials for manufacturing goods."
      },
      {
        "key": "C",
        "text": "An immediate requirement for high school students to manage corporate banking servers."
      },
      {
        "key": "D",
        "text": "The complete collapse of all international tourism and commercial aviation systems."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Paragraf 2 menyoroti risiko eksklusi keuangan bagi warga desa, pedagang pasar tradisional, dan lansia yang belum memiliki akses internet atau rekening bank (Opsi A).",
    "grammarNote": "Identifying Arguments Against (Negative Stance)."
  },
  {
    "id": 14,
    "source": "Sumber: Kajian Literasi Keuangan Digital — BSKAP Kemendikbudristek",
    "type": "reading_discussion",
    "title": "Reading Section: Discussion Text Analysis",
    "stimulusTitle": "Text 1: The Transition to a Cashless Society: Modern Convenience vs. Financial Inclusion and Security",
    "stimulusBody": "Lihat wacana Text 1 pada soal sebelumnya.",
    "prompt": "The word 'streamline' in the first paragraph is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "complicate and delay through bureaucratic red tape."
      },
      {
        "key": "B",
        "text": "make an organization or process more efficient and simpler."
      },
      {
        "key": "C",
        "text": "abandon an ongoing commercial project due to bankruptcy."
      },
      {
        "key": "D",
        "text": "decorate an office building with modern artistic furnishings."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kata 'streamline' berarti mengefisienkan atau menyederhanakan suatu alur proses agar berjalan lebih lancar dan hemat waktu (Opsi B).",
    "grammarNote": "Contextual Vocabulary Mastery (CEFR B2 Academic Words)."
  },
  {
    "id": 15,
    "source": "Sumber: Kajian Literasi Keuangan Digital — BSKAP Kemendikbudristek",
    "type": "reading_discussion",
    "title": "Reading Section: Discussion Text Analysis",
    "stimulusTitle": "Text 1: The Transition to a Cashless Society: Modern Convenience vs. Financial Inclusion and Security",
    "stimulusBody": "Lihat wacana Text 1 pada soal sebelumnya.",
    "prompt": "What constructive policy does the author recommend in the final paragraph?",
    "options": [
      {
        "key": "A",
        "text": "Mandate that high schools replace all textbooks with cryptocurrency tokens."
      },
      {
        "key": "B",
        "text": "Outlaw physical banknotes immediately and penalize merchants who accept cash."
      },
      {
        "key": "C",
        "text": "Adopt a hybrid financial ecosystem that promotes digital innovation while safeguarding cash access."
      },
      {
        "key": "D",
        "text": "Shut down all online banking servers during evening hours to prevent cyberattacks."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Penulis merekomendasikan ekosistem hibrida: merangkul efisiensi digital sambil tetap menjamin akses uang tunai bagi masyarakat rentan (Opsi C).",
    "grammarNote": "Authorial Recommendation & Synthesis in Discussion Texts."
  },
  {
    "id": 16,
    "source": "Sumber: Kajian Kebijakan Ekonomi Digital — Kemendikbudristek & Bank Indonesia",
    "type": "complex_matrix",
    "title": "Pilihan Ganda Kompleks: Evaluasi Fakta Wacana Masyarakat Nontunai (Cashless Society)",
    "stimulusTitle": "Evaluasi Argumen Kritis Teks Diskusi Ekonomi Digital",
    "stimulusBody": "Tentukan apakah setiap pernyataan berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong> berdasarkan wacana diskusi tentang peralihan menuju masyarakat nontunai:",
    "prompt": "Berdasarkan wacana Text 1, tentukan nilai kebenaran dari masing-masing pernyataan berikut:",
    "matrixStatements": [
      {
        "statement": "Sistem pembayaran digital seperti QRIS dan dompet elektronik menyederhanakan pencatatan keuangan UMKM dan mengurangi risiko pencurian uang tunai.",
        "isCorrect": true
      },
      {
        "statement": "Penulis teks menyarankan agar pemerintah segera melarang total uang tunai dan menghukum warga yang bertransaksi dengan uang kertas.",
        "isCorrect": false
      },
      {
        "statement": "Masyarakat lanjut usia dan warga di pelosok dengan koneksi internet terbatas berisiko mengalami keterasingan finansial (financial exclusion).",
        "isCorrect": true
      },
      {
        "statement": "Sistem pembayaran nontunai sepenuhnya kebal dari gangguan pemadaman listrik, kegagalan server, dan serangan penipuan siber.",
        "isCorrect": false
      }
    ],
    "explanation": "1) BENAR (keuntungan QRIS bagi pembukuan dan keamanan). 2) SALAH (penulis justru menyarankan ekosistem hibrida dan mempertahankan uang tunai). 3) BENAR (lansia dan warga terpencil rentan terasing). 4) SALAH (server downtime dan phishing tetap menjadi ancaman nyata).",
    "grammarNote": "Complex Factual Synthesis in Advanced Discussion Texts."
  },
  {
    "id": 17,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "complex_matrix",
    "title": "Pilihan Ganda Kompleks: Kalimat Pengandaian Inversi (Inverted Conditionals)",
    "stimulusTitle": "Kaidah Pengandaian Bentuk Inversi (Had, Were, Should)",
    "stimulusBody": "Pola inversi tanpa 'If': Had + S + V3 (Type 3), Were + S + to V1 (Type 2), Should + S + V1 (Type 1).",
    "prompt": "Tentukan apakah susunan kalimat pengandaian inversi berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
    "matrixStatements": [
      {
        "statement": "Had the school provided comprehensive cybersecurity training, students would have recognized the phishing link immediately.",
        "isCorrect": true
      },
      {
        "statement": "Should you require additional resources for your literary review, please consult the senior librarian.",
        "isCorrect": true
      },
      {
        "statement": "Were the regional government to invest heavily in rural broadband, digital financial inclusion would expand significantly.",
        "isCorrect": true
      },
      {
        "statement": "Had they studied the vocabulary list last night, they will achieve a perfect score on the grammar test today.",
        "isCorrect": false
      }
    ],
    "explanation": "1) BENAR (Inversi Type 3: Had + S + V3, would have + V3). 2) BENAR (Inversi Type 1: Should + S + V1, imperative). 3) BENAR (Inversi Type 2: Were + S + to V1, would + V1). 4) SALAH (mencampur Past Perfect 'Had they studied' dengan future 'will achieve'; harusnya 'would have achieved').",
    "grammarNote": "Inverted Conditionals (Had, Were, Should) at CEFR B2 Level."
  },
  {
    "id": 18,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "complex_matrix",
    "title": "Pilihan Ganda Kompleks: Kalimat Cleft untuk Penekanan (Cleft Sentences)",
    "stimulusTitle": "Kaidah Kalimat Cleft (It-cleft & Wh-cleft for Emphasis)",
    "stimulusBody": "Pola: It is/was + [elemen fokus] + that/who... dan What + S + V + is/was...",
    "prompt": "Tentukan apakah pembentukan kalimat cleft berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
    "matrixStatements": [
      {
        "statement": "It was Nyai Ontosoroh's perseverance and moral dignity that inspired Minke to challenge colonial prejudice.",
        "isCorrect": true
      },
      {
        "statement": "What students need most in the modern digital era is critical discernment rather than passive memorization.",
        "isCorrect": true
      },
      {
        "statement": "It is through social media which all students learn their scientific concepts.",
        "isCorrect": false
      },
      {
        "statement": "What surprised the literary critics were the novel's profound psychological depth.",
        "isCorrect": false
      }
    ],
    "explanation": "1) BENAR (It was... that...). 2) BENAR (What students need... is...). 3) SALAH (pola cleft penekanan menggunakan 'that', bukan 'which'). 4) SALAH (subjek klausa wh bernilai tunggal sehingga to be yang tepat adalah 'was', bukan 'were').",
    "grammarNote": "Cleft Sentences for Thematic Prominence and Information Packaging."
  },
  {
    "id": 19,
    "source": "Sumber: Kajian Resensi Sastra Klasik Indonesia — Balai Bahasa & Kemendikbudristek",
    "type": "complex_matrix",
    "title": "Pilihan Ganda Kompleks: Evaluasi Fakta Resensi 'Bumi Manusia'",
    "stimulusTitle": "Evaluasi Resensi Novel Pramoedya Ananta Toer: Bumi Manusia",
    "stimulusBody": "Tentukan apakah pernyataan berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong> berdasarkan teks ulasan sastra novel Bumi Manusia:",
    "prompt": "Berdasarkan ulasan novel Bumi Manusia, tentukan nilai kebenaran dari masing-masing pernyataan berikut:",
    "matrixStatements": [
      {
        "statement": "Latar cerita novel Bumi Manusia berada pada akhir abad ke-19 pada masa pemerintahan kolonial Belanda di Jawa.",
        "isCorrect": true
      },
      {
        "statement": "Tokoh Minke digambarkan sebagai pemuda buta huruf yang menolak mempelajari ilmu pengetahuan modern.",
        "isCorrect": false
      },
      {
        "statement": "Nyai Ontosoroh mengelola perusahaan pertanian besar secara mandiri melalui kecerdasan, ketekunan, dan martabat moral.",
        "isCorrect": true
      },
      {
        "statement": "Pengulas menyimpulkan bahwa novel Bumi Manusia tidak bermakna dan sebaiknya dihindari oleh pelajar SMA.",
        "isCorrect": false
      }
    ],
    "explanation": "1) BENAR (latar akhir abad ke-19 di Hindia Belanda). 2) SALAH (Minke adalah siswa cerdas HBS yang fasih berbahasa Belanda). 3) BENAR (Nyai Ontosoroh sosok mandiri dan tangguh). 4) SALAH (pengulas menilai novel sebagai karya klasik tak lekang waktu yang sangat direkomendasikan).",
    "grammarNote": "Literary Review Factual Verification."
  },
  {
    "id": 20,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "complex_matrix",
    "title": "Pilihan Ganda Kompleks: Konjungsi Konsesi & Pertentangan Maju (Advanced Concession)",
    "stimulusTitle": "Kaidah Kata Hubung Konsesi dan Kontras Tingkat Lanjut",
    "stimulusBody": "Much as (meskipun sangat), Whereas (sedangkan/sebaliknya), In contrast to, Even though.",
    "prompt": "Tentukan apakah kalimat dengan kata hubung pertentangan berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
    "matrixStatements": [
      {
        "statement": "Much as she appreciated the convenience of digital payments, Maya remained cautious about personal data privacy.",
        "isCorrect": true
      },
      {
        "statement": "Whereas physical banknotes guarantee complete anonymity, digital payments leave an electronic audit trail.",
        "isCorrect": true
      },
      {
        "statement": "Even though the colonial court ruled unjustly, but Nyai Ontosoroh refused to compromise her dignity.",
        "isCorrect": false
      },
      {
        "statement": "In contrast to urban centers with fast 5G coverage, remote rural villages often experience unreliable connectivity.",
        "isCorrect": true
      }
    ],
    "explanation": "1) BENAR ('Much as' berarti 'Although very much'). 2) BENAR ('Whereas' membandingkan dua fakta kontras). 3) SALAH (tidak boleh memasang 'but' setelah klausa 'Even though'). 4) BENAR ('In contrast to + Noun Phrase' membandingkan dua wilayah secara kontras).",
    "grammarNote": "Advanced Concessive and Contrastive Clauses."
  },
  {
    "id": 21,
    "source": "Sumber: Kajian Literasi Keuangan Digital — BSKAP Kemendikbudristek",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
    "stimulusTitle": "Keunggulan Utama Sistem Pembayaran Digital",
    "stimulusBody": "Wacana teks diskusi menguraikan berbagai manfaat positif pembayaran nontunai bagi konsumen dan pelaku usaha kecil.",
    "prompt": "Manakah <strong>DUA (2)</strong> keunggulan utama dari adopsi transaksi digital berdasarkan teks?",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan transaksi instan yang meniadakan repotnya membawa uang kertas dan koin fisik."
      },
      {
        "key": "B",
        "text": "Jaminan mutlak bahwa server perbankan tidak akan pernah mengalami mati listrik atau peretasan."
      },
      {
        "key": "C",
        "text": "Pencatatan riwayat transaksi elektronik yang rapi, transparan, dan memudahkan akses kredit mikro."
      },
      {
        "key": "D",
        "text": "Penghapusan seluruh utang pribadi secara otomatis setiap kali aplikasi dompet digital diperbarui."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Dua keunggulan utama menurut teks adalah (A) kecepatan transaksi tanpa repot membawa uang tunai, dan (C) pencatatan pembukuan transparan yang memudahkan pinjaman mikro. Opsi B dan D keliru.",
    "grammarNote": "Synthesizing Core Arguments in Expository Texts."
  },
  {
    "id": 22,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
    "stimulusTitle": "Pola Kalimat Pengandaian Inversi yang Tepat",
    "stimulusBody": "Pilihlah kalimat pengandaian bentuk inversi yang memenuhi kaidah tata bahasa Inggris baku.",
    "prompt": "Manakah <strong>DUA (2)</strong> kalimat di bawah ini yang menggunakan pola inversi pengandaian secara benar?",
    "options": [
      {
        "key": "A",
        "text": "If I have seen the competition announcement yesterday morning, I would submit the application promptly."
      },
      {
        "key": "B",
        "text": "Had the agricultural cooperative adopted smart irrigation earlier, crop yields would have doubled during the drought."
      },
      {
        "key": "C",
        "text": "Were the school to organize an international literature workshop, many aspiring writers would participate enthusiastically."
      },
      {
        "key": "D",
        "text": "Had she arrived earlier yesterday, she will meet the visiting novelist in the auditorium."
      }
    ],
    "correctAnswer": [
      "B",
      "C"
    ],
    "explanation": "Kalimat B (Had + S + V3, would have + V3) dan kalimat C (Were + S + to V1, would + V1) merupakan inversi kondisional yang baku. Kalimat A salah tenses dan kalimat D mencampur 'Had arrived' dengan 'will meet'.",
    "grammarNote": "Inversion Syntax across Conditional Structures."
  },
  {
    "id": 23,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
    "stimulusTitle": "Kalimat Cleft untuk Penekanan Makna",
    "stimulusBody": "Kalimat cleft membagi klausa tunggal menjadi dua bagian guna memberikan fokus penekanan yang kuat.",
    "prompt": "Manakah <strong>DUA (2)</strong> kalimat cleft di bawah ini yang disusun secara gramatikal dan baku?",
    "options": [
      {
        "key": "A",
        "text": "It was Minke's eloquent journalistic writing that exposed colonial injustice to the wider public."
      },
      {
        "key": "B",
        "text": "What impressed the literary critics were the novel's fast pacing and humorous ending."
      },
      {
        "key": "C",
        "text": "What the author wants to emphasize are that wealth is the only measure of human achievement."
      },
      {
        "key": "D",
        "text": "It is through empathy and mutual respect that diverse communities can live together harmoniously."
      }
    ],
    "correctAnswer": [
      "A",
      "D"
    ],
    "explanation": "Kalimat A ('It was... that...') dan kalimat D ('It is through... that...') tersusun sempurna. Kalimat B dan C salah dalam kesesuaian subjek-kata kerja (subject-verb agreement), di mana klausa 'what' sebagai subjek memerlukan to be singular 'was/is'.",
    "grammarNote": "It-Cleft and Wh-Cleft Agreement Rules."
  },
  {
    "id": 24,
    "source": "Sumber: Kajian Resensi Sastra Klasik Indonesia — Balai Bahasa & Kemendikbudristek",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
    "stimulusTitle": "Keteladanan Karakter dalam Novel 'Bumi Manusia'",
    "stimulusBody": "Novel Bumi Manusia menyajikan tokoh-tokoh dengan karakter moral yang kuat dalam menghadapi penindasan sistemik.",
    "prompt": "Manakah <strong>DUA (2)</strong> nilai karakter utama yang dipuji oleh pengulas dalam novel Bumi Manusia?",
    "options": [
      {
        "key": "A",
        "text": "Kecerdasan luar biasa, kepiawaian bisnis, dan keteguhan harga diri Nyai Ontosoroh."
      },
      {
        "key": "B",
        "text": "Komitmen Minke terhadap literasi, kepekaan sosial, dan keberanian membela kaum tertindas."
      },
      {
        "key": "C",
        "text": "Keadilan dan kenetralan mutlak yang ditunjukkan oleh para hakim pengadilan kolonial Belanda."
      },
      {
        "key": "D",
        "text": "Ambisi Annelies untuk melupakan asal-usul tanah Jawa demi menjadi saudagar di Eropa."
      }
    ],
    "correctAnswer": [
      "A",
      "B"
    ],
    "explanation": "Dua nilai luhur yang ditonjolkan adalah (A) kecerdasan dan keteguhan harga diri Nyai Ontosoroh, serta (B) komitmen Minke pada literasi dan keadilan bagi kaum tertindas. Opsi C dan D bertolak belakang dengan alur cerita.",
    "grammarNote": "Literary Character Virtues Synthesis."
  },
  {
    "id": 25,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
    "stimulusTitle": "Konjungsi Transisi Pertentangan dalam Esai Akademik",
    "stimulusBody": "Pilihlah kalimat yang menggunakan kata transisi pertentangan secara kohesif dan baku.",
    "prompt": "Manakah <strong>DUA (2)</strong> kalimat di bawah ini yang menerapkan kata transisi kontras dengan tepat?",
    "options": [
      {
        "key": "A",
        "text": "Although the historical novel contains profound philosophical insights, because many secondary students find it challenging."
      },
      {
        "key": "B",
        "text": "The digital economy creates boundless opportunities for young entrepreneurs; on the other hand, it widens the gap for those without digital access."
      },
      {
        "key": "C",
        "text": "In spite of the student studied diligently, but he was unable to answer the complex essay question."
      },
      {
        "key": "D",
        "text": "While physical cash offers complete privacy, digital transactions provide unmatched convenience and speed."
      }
    ],
    "correctAnswer": [
      "B",
      "D"
    ],
    "explanation": "Kalimat B ('on the other hand') dan kalimat D ('While') menghubungkan dua gagasan kontras secara gramatikal. Kalimat A menggabungkan 'Although' dengan 'because' tanpa klausa utama mandiri, dan kalimat C salah memadukan 'In spite of' dengan klausa subjek-predikat serta 'but'.",
    "grammarNote": "Cohesive Contrast Markers in Advanced Essays."
  },
  {
    "id": 26,
    "source": "Sumber: Telaah Kritis Sastra Indonesia Klasik — Balai Bahasa Jawa Tengah & Kemendikbudristek",
    "type": "reading_review",
    "title": "Reading Section: Literary Review Text",
    "stimulusTitle": "Text 2: Literary Review — Pramoedya Ananta Toer’s 'This Earth of Mankind' (Bumi Manusia): A Masterpiece of Dignity, Education, and Moral Courage",
    "stimulusBody": "<p>First published in 1980, Pramoedya Ananta Toer’s historical novel <em>This Earth of Mankind</em> (Bumi Manusia) stands as one of the most powerful milestones in Indonesian and world literature. Set in the late nineteenth-century Dutch East Indies (colonial Indonesia), the narrative chronicles the coming of age of Minke, an exceptionally gifted Javanese youth permitted to study at the elite Dutch High School (H.B.S.) in Surabaya. Through Minke's journey, Pramoedya crafts a profound reflection on human dignity, social inequality, and the awakening of national consciousness.</p>\n      <p>The beating heart of the novel is Nyai Ontosoroh, a native concubine sold by her own father to a Dutch merchant in her youth. Rather than succumbing to despair or accepting a submissive status, she educates herself in Dutch commerce, law, and culture. Through sheer intellect and relentless perseverance, she becomes the master administrator of a sprawling agricultural enterprise. When Minke falls in love with her gentle daughter, Annelies, Nyai Ontosoroh becomes his greatest mentor, demonstrating that true aristocracy is defined not by royal blood or colonial privilege, but by moral courage and self-respect.</p>\n      <p>From a literary standpoint, Pramoedya’s prose is both evocative and accessible. He skillfully blends historical realism with dramatic intimacy, transforming personal romance into a broader struggle against prejudice. While some modern readers may find the opening chapters somewhat deliberate in pacing, the dramatic momentum intensifies grippingly as colonial legal authorities attempt to strip Nyai Ontosoroh and Minke of their rights. The novel concludes with one of the most memorable declarations in world literature: \"We have fought back, child, with all our might.\"</p>\n      <p>Ultimately, <em>This Earth of Mankind</em> transcends its historical setting. It is an indispensable classic for high school students and general readers alike, offering timeless insights into the transformative power of education, literacy, and ethical resistance against injustice.</p>",
    "prompt": "What is the primary communicative purpose of the text above?",
    "options": [
      {
        "key": "A",
        "text": "To advertise guided heritage tours across historical landmarks in Surabaya."
      },
      {
        "key": "B",
        "text": "To present financial profit statistics of agricultural companies in the nineteenth century."
      },
      {
        "key": "C",
        "text": "To give technical instructions for writing historical fiction manuscripts."
      },
      {
        "key": "D",
        "text": "To provide a critical literary evaluation of Pramoedya's classic novel and recommend it to readers."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Tujuan teks resensi adalah mengevaluasi karya sastra (novel Bumi Manusia) secara mendalam serta merekomendasikannya kepada pembaca (Opsi D).",
    "grammarNote": "Communicative Purpose of Literary Reviews."
  },
  {
    "id": 27,
    "source": "Sumber: Telaah Kritis Sastra Indonesia Klasik — Balai Bahasa Jawa Tengah & Kemendikbudristek",
    "type": "reading_review",
    "title": "Reading Section: Literary Review Text",
    "stimulusTitle": "Text 2: Literary Review — Pramoedya Ananta Toer’s 'This Earth of Mankind' (Bumi Manusia)",
    "stimulusBody": "Lihat wacana Text 2 pada soal sebelumnya.",
    "prompt": "According to the review, what historical setting forms the backdrop of Minke's narrative?",
    "options": [
      {
        "key": "A",
        "text": "The late nineteenth-century Dutch colonial period in Java."
      },
      {
        "key": "B",
        "text": "The ancient kingdom of Majapahit during the fourteenth century."
      },
      {
        "key": "C",
        "text": "The immediate post-independence era of Jakarta in the 1960s."
      },
      {
        "key": "D",
        "text": "A futuristic science-fiction setting on a distant space station."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Paragraf 1 menyatakan: 'Set in the late nineteenth-century Dutch East Indies (colonial Indonesia)' (Opsi A).",
    "grammarNote": "Historical Narrative Setting."
  },
  {
    "id": 28,
    "source": "Sumber: Telaah Kritis Sastra Indonesia Klasik — Balai Bahasa Jawa Tengah & Kemendikbudristek",
    "type": "reading_review",
    "title": "Reading Section: Literary Review Text",
    "stimulusTitle": "Text 2: Literary Review — Pramoedya Ananta Toer’s 'This Earth of Mankind' (Bumi Manusia)",
    "stimulusBody": "Lihat wacana Text 2 pada soal sebelumnya.",
    "prompt": "How does Nyai Ontosoroh overcome her tragic past according to paragraph 2?",
    "options": [
      {
        "key": "A",
        "text": "By moving permanently to Europe and relinquishing all commercial interests."
      },
      {
        "key": "B",
        "text": "By educating herself in Dutch law and business to masterfully manage an agricultural enterprise."
      },
      {
        "key": "C",
        "text": "By relying entirely on aristocratic royal relatives to protect her family wealth."
      },
      {
        "key": "D",
        "text": "By convincing colonial judges to grant her honorary Dutch citizenship."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Nyai Ontosoroh mendidik dirinya sendiri dalam hukum dan perdagangan Belanda hingga menjadi pengelola sukses perusahaan pertanian besar (Opsi B).",
    "grammarNote": "Character Agency and Motivation Comprehension."
  },
  {
    "id": 29,
    "source": "Sumber: Telaah Kritis Sastra Indonesia Klasik — Balai Bahasa Jawa Tengah & Kemendikbudristek",
    "type": "reading_review",
    "title": "Reading Section: Literary Review Text",
    "stimulusTitle": "Text 2: Literary Review — Pramoedya Ananta Toer’s 'This Earth of Mankind' (Bumi Manusia)",
    "stimulusBody": "Lihat wacana Text 2 pada soal sebelumnya.",
    "prompt": "What minor critique of the novel does the reviewer mention in paragraph 3?",
    "options": [
      {
        "key": "A",
        "text": "The author completely avoids discussing any historical or social themes."
      },
      {
        "key": "B",
        "text": "The entire novel is written in outdated Middle English poetry."
      },
      {
        "key": "C",
        "text": "The opening chapters may feel somewhat deliberate in pacing for some modern readers."
      },
      {
        "key": "D",
        "text": "The main characters lack any distinct emotional personalities or motivations."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Paragraf 3 mencatat kritik minor bahwa sebagian pembaca modern mungkin merasa ritme bab-bab awal agak lambat/terencana ('somewhat deliberate in pacing') sebelum tensinya meningkat (Opsi C).",
    "grammarNote": "Identifying Evaluative Critique in Reviews."
  },
  {
    "id": 30,
    "source": "Sumber: Telaah Kritis Sastra Indonesia Klasik — Balai Bahasa Jawa Tengah & Kemendikbudristek",
    "type": "reading_review",
    "title": "Reading Section: Literary Review Text",
    "stimulusTitle": "Text 2: Literary Review — Pramoedya Ananta Toer’s 'This Earth of Mankind' (Bumi Manusia)",
    "stimulusBody": "Lihat wacana Text 2 pada soal sebelumnya.",
    "prompt": "The word 'transcends' in the concluding paragraph is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "copies word for word from an earlier text."
      },
      {
        "key": "B",
        "text": "fails completely to achieve an intended objective."
      },
      {
        "key": "C",
        "text": "limits its relevance strictly to a single historical date."
      },
      {
        "key": "D",
        "text": "goes beyond the normal boundaries or limits of time and place."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kata 'transcends' berarti melampaui batasan ruang dan waktu, menunjukkan relevansi novel yang abadi melintasi zaman (Opsi D).",
    "grammarNote": "Academic Vocabulary in Review Conclusion."
  },
  {
    "id": 31,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "grammar_structure",
    "title": "Grammar & Structure: Inverted Conditional Type 3",
    "prompt": "________ the technical team investigated the electrical system earlier, the laboratory blackout would have been averted.",
    "options": [
      {
        "key": "A",
        "text": "Had"
      },
      {
        "key": "B",
        "text": "Were"
      },
      {
        "key": "C",
        "text": "Should"
      },
      {
        "key": "D",
        "text": "Unless"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Inversi Conditional Type 3 menggunakan kata kerja bantu 'Had' + Subject + V3 (Had the technical team investigated = If the technical team had investigated).",
    "grammarNote": "Inversion in Unreal Past Conditionals."
  },
  {
    "id": 32,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "grammar_structure",
    "title": "Grammar & Structure: Inverted Conditional Type 1",
    "prompt": "________ any candidate require special accommodations during the examination, they should notify the committee promptly.",
    "options": [
      {
        "key": "A",
        "text": "Had"
      },
      {
        "key": "B",
        "text": "Should"
      },
      {
        "key": "C",
        "text": "Were"
      },
      {
        "key": "D",
        "text": "Would"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Inversi Conditional Type 1 formal diawali dengan 'Should' + Subject + Bare Infinitive (Should any candidate require = If any candidate requires).",
    "grammarNote": "Formal Conditional Inversion with Should."
  },
  {
    "id": 33,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "grammar_structure",
    "title": "Grammar & Structure: It-Cleft Sentence for Focus",
    "prompt": "It was Nyai Ontosoroh's immense moral courage ________ inspired Minke to write bravely against social injustice.",
    "options": [
      {
        "key": "A",
        "text": "which"
      },
      {
        "key": "B",
        "text": "whom"
      },
      {
        "key": "C",
        "text": "that"
      },
      {
        "key": "D",
        "text": "whose"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rumus kalimat It-cleft baku menggunakan kata penghubung 'that' untuk memfokuskan elemen subjek/objek yang ditegaskan.",
    "grammarNote": "It-Cleft Sentences for Emphasis."
  },
  {
    "id": 34,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "grammar_structure",
    "title": "Grammar & Structure: Wh-Cleft (Pseudo-Cleft)",
    "prompt": "________ secondary students need most when evaluating digital information is sharp critical thinking.",
    "options": [
      {
        "key": "A",
        "text": "Which"
      },
      {
        "key": "B",
        "text": "Where"
      },
      {
        "key": "C",
        "text": "Why"
      },
      {
        "key": "D",
        "text": "What"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Wh-cleft diawali dengan 'What' (bermakna 'hal yang...'): 'What secondary students need most... is sharp critical thinking'.",
    "grammarNote": "Wh-Cleft Clauses."
  },
  {
    "id": 35,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "grammar_structure",
    "title": "Grammar & Structure: Concessive Clauses with 'Much as'",
    "prompt": "________ he appreciated the efficiency of digital wallets, Rizky always carried some emergency physical cash.",
    "options": [
      {
        "key": "A",
        "text": "Much as"
      },
      {
        "key": "B",
        "text": "Because of"
      },
      {
        "key": "C",
        "text": "In spite"
      },
      {
        "key": "D",
        "text": "Due to"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Frasa 'Much as' berfungsi sebagai konjungsi konsesi bermakna 'Meskipun sangat': 'Much as he appreciated...' = 'Although he greatly appreciated...'.",
    "grammarNote": "Concessive Connectors: Much as + Clause."
  },
  {
    "id": 36,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "grammar_structure",
    "title": "Grammar & Structure: Contrast Transition Adverb",
    "prompt": "Physical banknotes provide total personal anonymity. ________, digital payments offer unmatched convenience and speed.",
    "options": [
      {
        "key": "A",
        "text": "Furthermore"
      },
      {
        "key": "B",
        "text": "On the other hand"
      },
      {
        "key": "C",
        "text": "Consequently"
      },
      {
        "key": "D",
        "text": "In addition"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'On the other hand' digunakan untuk menyajikan sudut pandang lain yang berlawanan/kontras dengan pernyataan sebelumnya.",
    "grammarNote": "Transitions of Contrast: On the other hand."
  },
  {
    "id": 37,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "grammar_structure",
    "title": "Grammar & Structure: Subjunctive Mood after Verbs of Recommendation",
    "prompt": "The education board recommended that the school committee ________ comprehensive digital ethics guidelines.",
    "options": [
      {
        "key": "A",
        "text": "adopts"
      },
      {
        "key": "B",
        "text": "adopted"
      },
      {
        "key": "C",
        "text": "adopt"
      },
      {
        "key": "D",
        "text": "was adopting"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Setelah kata kerja rekomendasi (recommend that...), pola mandative subjunctive mewajibkan kata kerja bentuk dasar (bare infinitive) 'adopt' tanpa akhiran -s.",
    "grammarNote": "Subjunctive Mood in Formal Academic Prose."
  },
  {
    "id": 38,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "grammar_structure",
    "title": "Grammar & Structure: Prepositional Concession",
    "prompt": "________ facing severe financial limitations, the rural school produced outstanding graduates.",
    "options": [
      {
        "key": "A",
        "text": "Although"
      },
      {
        "key": "B",
        "text": "Even though"
      },
      {
        "key": "C",
        "text": "Whereas"
      },
      {
        "key": "D",
        "text": "In spite of"
      }
    ],
    "correctAnswer": "D",
    "explanation": "'In spite of' diikuti gerund/noun phrase ('facing severe financial limitations'). Opsi Although, Even though, Whereas harus diikuti klausa dengan subjek dan finite verb.",
    "grammarNote": "Prepositional Concessive Phrases: In spite of + Gerund."
  },
  {
    "id": 39,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "grammar_structure",
    "title": "Grammar & Structure: Impersonal Academic Passive",
    "prompt": "It is widely ________ by literary scholars that Pramoedya's tetralogy revolutionized modern Southeast Asian literature.",
    "options": [
      {
        "key": "A",
        "text": "acknowledged"
      },
      {
        "key": "B",
        "text": "acknowledging"
      },
      {
        "key": "C",
        "text": "acknowledge"
      },
      {
        "key": "D",
        "text": "has acknowledge"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pola pasif impersonal akademis: 'It is + adverb + Past Participle (V3) + that-clause' -> 'It is widely acknowledged that...'.",
    "grammarNote": "Impersonal Passive Stance in Academic Writing."
  },
  {
    "id": 40,
    "source": "Sumber: Bank Soal Evaluasi Tingkat XII Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "grammar_structure",
    "title": "Grammar & Structure: Concluding Transitional Adverb",
    "prompt": "Both digital convenience and security risks must be considered. ________, a balanced hybrid approach serves citizens best.",
    "options": [
      {
        "key": "A",
        "text": "On the contrary"
      },
      {
        "key": "B",
        "text": "In conclusion"
      },
      {
        "key": "C",
        "text": "Otherwise"
      },
      {
        "key": "D",
        "text": "In spite of"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'In conclusion' digunakan untuk menarik sintesis atau kesimpulan akhir dari argumen yang telah dipaparkan.",
    "grammarNote": "Discourse Synthesis & Concluding Connectors."
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
  tingkat: "XII-TL",
  rombel: "1",
  presensi: "1",
  nama: "Siswa Kelas XII Tingkat Lanjut"
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
    const cloned = JSON.parse(JSON.stringify(q));
    if (cloned.type === "complex_matrix" && Array.isArray(cloned.matrixStatements)) {
      const stmts = [...cloned.matrixStatements];
      for (let i = stmts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [stmts[i], stmts[j]] = [stmts[j], stmts[i]];
      }
      cloned.matrixStatements = stmts;
    } else if (Array.isArray(cloned.options) && cloned.options.length > 0 && !cloned.options[0].svg) {
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
        return {
          key: alphabet[idx],
          text: opt.text
        };
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

  const rawBank = (typeof getGrade12TLAsasQuestions === "function") ? getGrade12TLAsasQuestions() :
                  (typeof getGrade12TLAstsQuestions === "function") ? getGrade12TLAstsQuestions() : [];

  questions = randomizeQuestionOptions(rawBank);

  try {
    const saved = localStorage.getItem("sabaku_asts_progress_XII_TL");
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
  document.getElementById("side-student-meta").textContent = `Kelas XII Tingkat Lanjut | Rombel ${studentIdentity.rombel} | Presensi ${studentIdentity.presensi}`;
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
    link.setAttribute("download", `Rekap_Nilai_ASTS Gasal_XII-TL_${studentIdentity.nama.replace(/\s+/g, "_")}.csv`);
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
    localStorage.removeItem("sabaku_asts_progress_XII_TL");
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
    localStorage.setItem("sabaku_asts_progress_XII_TL", JSON.stringify(data));
  } catch (e) {}
}

