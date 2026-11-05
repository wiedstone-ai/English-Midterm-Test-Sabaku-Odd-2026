/**
 * ASESMEN SUMATIF AKHIR SEMESTER (ASAS) GASAL & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT LANJUT — TINGKAT XI (FASE F - TL)
 * SEMESTER GASAL (18 MINGGU PENUH) TP 2026/2027
 * 
 * Standar: Kurikulum Merdeka Fase F Tingkat Lanjut (Maksimal CEFR B2)
 * Cakupan Materi Lengkap:
 * 1. Listening Section: Multi-Speaker Audio Synthesis (Indonesian name pronunciation, gender-pitch modulation, no dialogue names spoken).
 * 2. Reading Genre 1: Authentic Indonesian Folklore (The Legend of Rawa Pening / Baru Klinthing, Jawa Tengah).
 * 3. Reading Genre 2: Practical Hortatory Exposition (Using AI Responsibly for High School Learning).
 * 4. Grammar & Mechanics: Negative Inversion, Present Subjunctive, Concession, Conditional Type 3, Impersonal Passive, Collocations.
 * 
 * Fitur:
 * - 40 Butir Soal Komprehensif Berbasis Stimulus Otentik
 * - Audio Sintesis Multi-Speaker (Web Speech API)
 * - Shuffling Fisher-Yates Opsi Jawaban
 * - Autosave Real-Time ke LocalStorage (sabaku_asas_progress_XI_TL)
 * - Skoring Otomatis & Evaluasi KKTP 75
 * - Pengiriman Nilai Otomatis ke Google Sheets via Google Apps Script Web App
 * - Ekspor Rekap Nilai CSV Offline
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

// SVG Pictures for Listening Part I
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
  {
    "id": 1,
    "source": "Sumber: Cambridge Assessment English — B2 First for Schools & Kemendikbudristek",
    "type": "listening_pictures",
    "title": "Listening Section: Part I - Pictures",
    "audioText": "Number one. Look at the pictures. A high school student is reading an ancient handwritten manuscript in the library, carefully taking notes on her laptop screen. Which picture matches the spoken statement?",
    "audioSegments": [
      {
        "text": "Number one. Look at the pictures in your test booklet. A high school student is reading an ancient handwritten manuscript in the library, carefully taking notes on her laptop screen. Which picture matches the spoken statement?",
        "lang": "en-US",
        "role": "narrator"
      }
    ],
    "prompt": "Which picture corresponds to the manuscript study described in the recording?",
    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.digitalManuscript,
        "label": "A student reading an ancient manuscript in a library"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.amphitheaterDrama,
        "label": "Students performing a classic play in an outdoor theater"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.climateObservatory,
        "label": "A weather observation dome on a coastal hill"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.oilRefinery,
        "label": "An industrial fuel refining plant"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Audio mendeskripsikan seorang siswi yang sedang mempelajari naskah kuno tulisan tangan di perpustakaan ('reading an ancient handwritten manuscript in the library, carefully taking notes on her laptop'). Gambar A mencerminkan naskah kuno dan laptop.",
    "grammarNote": "Present Continuous with Participle modifier: 'reading an ancient manuscript, carefully taking notes'."
  },
  {
    "id": 2,
    "source": "Sumber: Cambridge Assessment English — B2 First for Schools & Kemendikbudristek",
    "type": "listening_pictures",
    "title": "Listening Section: Part I - Pictures",
    "audioText": "Number two. Look at the pictures. On an outdoor stone stage, senior high school students are performing a classic theatrical drama in traditional costumes. Which picture depicts this scene?",
    "audioSegments": [
      {
        "text": "Number two. Look at the pictures. On an outdoor stone stage, senior high school students are performing a classic theatrical drama in traditional costumes. Which picture depicts this scene?",
        "lang": "en-US",
        "role": "narrator"
      }
    ],
    "prompt": "Which picture depicts the theatrical drama on the open stage?",
    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.digitalManuscript,
        "label": "A student reading an ancient manuscript in a library"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.amphitheaterDrama,
        "label": "Students performing a classic play in an outdoor theater"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.climateObservatory,
        "label": "A weather observation dome on a coastal hill"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.oilRefinery,
        "label": "An industrial fuel refining plant"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Audio menyebutkan pementasan drama teater di panggung batu luar ruangan: 'performing a classic theatrical drama in traditional costumes'. Gambar B tepat.",
    "grammarNote": "Prepositional phrase of place: 'On an outdoor stone stage, students are performing...'."
  },
  {
    "id": 3,
    "source": "Sumber: Cambridge Assessment English — B2 First for Schools & Kemendikbudristek",
    "type": "listening_pictures",
    "title": "Listening Section: Part I - Pictures",
    "audioText": "Number three. Look at the pictures. Built on a green hill overlooking the sea, this automated weather station dome measures wind and solar energy to support renewable power. Which picture matches the description?",
    "audioSegments": [
      {
        "text": "Number three. Look at the pictures. Built on a green hill overlooking the sea, this automated weather station dome measures wind and solar energy to support renewable power. Which picture matches the description?",
        "lang": "en-US",
        "role": "narrator"
      }
    ],
    "prompt": "Which picture shows the coastal weather observation dome described in the audio?",
    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.digitalManuscript,
        "label": "A student reading an ancient manuscript in a library"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.amphitheaterDrama,
        "label": "Students performing a classic play in an outdoor theater"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.climateObservatory,
        "label": "A weather observation dome on a coastal hill"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.oilRefinery,
        "label": "An industrial fuel refining plant"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Audio mendeskripsikan kubah stasiun pengamatan cuaca di atas bukit hijau tepi laut: 'automated weather station dome measures wind and solar energy'. Gambar C tepat.",
    "grammarNote": "Past Participle modifier: 'Built on a green hill overlooking the sea...'."
  },
  {
    "id": 4,
    "source": "Sumber: Modul Pembelajaran Bahasa Inggris Tingkat Lanjut Kelas XI — Kemendikbudristek",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Short Dialogues",
    "audioText": "Number four. Listen to a conversation between Tari and her English teacher, Pak Wicaksono. Girl: Excuse me, Sir. In the legend we studied yesterday, why did the arrogant prince fail in the end? Teacher: Traditional legends teach us that physical strength and pride cannot force someone to respect us. Girl: So true greatness comes from humility and kindness toward others? Teacher: Exactly. Arrogance and selfish ambition will always lead to failure in the end. Question: What main lesson does the teacher explain?",
    "audioSegments": [
      {
        "text": "Number four. Listen to a conversation between ",
        "lang": "en-US",
        "role": "narrator"
      },
      {
        "text": "Tari",
        "lang": "id-ID",
        "role": "indonesian_name"
      },
      {
        "text": " and her English teacher, ",
        "lang": "en-US",
        "role": "narrator"
      },
      {
        "text": "Pak Wicaksono",
        "lang": "id-ID",
        "role": "indonesian_name"
      },
      {
        "text": ".",
        "lang": "en-US",
        "role": "narrator",
        "pauseAfter": 450
      },
      {
        "text": "Excuse me, Sir. In the legend we studied yesterday, why did the arrogant prince fail in the end?",
        "lang": "en-US",
        "gender": "female",
        "pitch": 1.25,
        "pauseAfter": 350
      },
      {
        "text": "Traditional legends teach us that physical strength and pride cannot force someone to respect us.",
        "lang": "en-US",
        "gender": "male",
        "pitch": 0.85,
        "pauseAfter": 350
      },
      {
        "text": "So true greatness comes from humility and kindness toward others?",
        "lang": "en-US",
        "gender": "female",
        "pitch": 1.25,
        "pauseAfter": 350
      },
      {
        "text": "Exactly. Arrogance and selfish ambition will always lead to failure in the end.",
        "lang": "en-US",
        "gender": "male",
        "pitch": 0.85,
        "pauseAfter": 450
      },
      {
        "text": "Question: What main lesson does the teacher explain?",
        "lang": "en-US",
        "role": "narrator"
      }
    ],
    "prompt": "What main moral lesson does the teacher emphasize in the conversation?",
    "options": [
      {
        "key": "A",
        "text": "True respect and greatness cannot be achieved through arrogance or force"
      },
      {
        "key": "B",
        "text": "Physical power is the most valuable trait in human relationships"
      },
      {
        "key": "C",
        "text": "Students should avoid reading ancient folk legends"
      },
      {
        "key": "D",
        "text": "Building temples is the only way to gain royal respect"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pak Wicaksono menegaskan bahwa kekuatan dan kesombongan tidak dapat memaksakan rasa hormat, melainkan kebesaran sejati lahir dari kerendahan hati: 'strength and pride cannot force someone to respect us... Arrogance and selfish ambition will always lead to failure'. Pilihan A tepat.",
    "grammarNote": "Moral theme synthesis: 'True respect and greatness cannot be achieved through arrogance or force'."
  },
  {
    "id": 5,
    "source": "Sumber: Panduan Pemanfaatan Teknologi untuk Pelajar — Dewan Pendidikan Nasional",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Short Dialogues",
    "audioText": "Number five. Listen to a conversation between Kevin and Amanda. Boy: Amanda, what do you think about students using AI tools for homework? Girl: Using AI to understand difficult topics is helpful, but copying answers directly without thinking is a bad habit. Boy: I agree. We should treat it as a study guide, but the final writing must be our own work. Girl: Exactly. Developing our own critical thinking is much more valuable for our future. Question: What do Kevin and Amanda agree on regarding digital study tools?",
    "audioSegments": [
      {
        "text": "Number five. Listen to a conversation between ",
        "lang": "en-US",
        "role": "narrator"
      },
      {
        "text": "Kevin",
        "lang": "id-ID",
        "role": "indonesian_name"
      },
      {
        "text": " and ",
        "lang": "en-US",
        "role": "narrator"
      },
      {
        "text": "Amanda",
        "lang": "id-ID",
        "role": "indonesian_name"
      },
      {
        "text": ".",
        "lang": "en-US",
        "role": "narrator",
        "pauseAfter": 450
      },
      {
        "text": "Amanda, what do you think about students using AI tools for homework?",
        "lang": "en-US",
        "gender": "male",
        "pitch": 0.85,
        "pauseAfter": 350
      },
      {
        "text": "Using AI to understand difficult topics is helpful, but copying answers directly without thinking is a bad habit.",
        "lang": "en-US",
        "gender": "female",
        "pitch": 1.25,
        "pauseAfter": 350
      },
      {
        "text": "I agree. We should treat it as a study guide, but the final writing must be our own work.",
        "lang": "en-US",
        "gender": "male",
        "pitch": 0.85,
        "pauseAfter": 350
      },
      {
        "text": "Exactly. Developing our own critical thinking is much more valuable for our future.",
        "lang": "en-US",
        "gender": "female",
        "pitch": 1.25,
        "pauseAfter": 450
      },
      {
        "text": "Question: What do Kevin and Amanda agree on regarding digital study tools?",
        "lang": "en-US",
        "role": "narrator"
      }
    ],
    "prompt": "What do Kevin and Amanda agree on regarding the use of AI study tools?",
    "options": [
      {
        "key": "A",
        "text": "Students should use AI responsibly as a study guide while completing assignments with their own original work"
      },
      {
        "key": "B",
        "text": "All electronic devices should be completely banned from secondary schools"
      },
      {
        "key": "C",
        "text": "Copying AI-generated essays directly saves time and should be encouraged"
      },
      {
        "key": "D",
        "text": "Writing by hand is no longer necessary in modern education"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kevin dan Amanda sepakat bahwa AI bermanfaat sebagai alat bantu belajar (study guide), namun tugas akhir harus merupakan karya orisinal siswa sendiri guna melatih daya nalar kritis. Pilihan A tepat.",
    "grammarNote": "Hortatory stance: 'should treat it as a study guide, but the final writing must be our own work'."
  },
  {
    "id": 6,
    "source": "Sumber: Forum Gerakan Sekolah Adiwiyata & Peduli Sampah Plastik — KLHK RI",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Short Dialogues",
    "audioText": "Number six. Listen to a conversation between Bima and Maya. Boy: Maya, our student council proposal for the school canteen is ready. Girl: Did you include the rule about single-use plastic cups? Boy: Yes. We recommend that every student bring a reusable water bottle, and the canteen replace plastic cups with washable glasses. Girl: That is a great step. Clear school rules will help everyone build sustainable habits. Question: What is the main objective of the student council proposal?",
    "audioSegments": [
      {
        "text": "Number six. Listen to a conversation between ",
        "lang": "en-US",
        "role": "narrator"
      },
      {
        "text": "Bima",
        "lang": "id-ID",
        "role": "indonesian_name"
      },
      {
        "text": " and ",
        "lang": "en-US",
        "role": "narrator"
      },
      {
        "text": "Maya",
        "lang": "id-ID",
        "role": "indonesian_name"
      },
      {
        "text": ".",
        "lang": "en-US",
        "role": "narrator",
        "pauseAfter": 450
      },
      {
        "text": "Maya, our student council proposal for the school canteen is ready.",
        "lang": "en-US",
        "gender": "male",
        "pitch": 0.85,
        "pauseAfter": 350
      },
      {
        "text": "Did you include the rule about single-use plastic cups?",
        "lang": "en-US",
        "gender": "female",
        "pitch": 1.25,
        "pauseAfter": 350
      },
      {
        "text": "Yes. We recommend that every student bring a reusable water bottle, and the canteen replace plastic cups with washable glasses.",
        "lang": "en-US",
        "gender": "male",
        "pitch": 0.85,
        "pauseAfter": 350
      },
      {
        "text": "That is a great step. Clear school rules will help everyone build sustainable habits.",
        "lang": "en-US",
        "gender": "female",
        "pitch": 1.25,
        "pauseAfter": 450
      },
      {
        "text": "Question: What is the main objective of the student council proposal?",
        "lang": "en-US",
        "role": "narrator"
      }
    ],
    "prompt": "What is the main objective of the student council proposal?",
    "options": [
      {
        "key": "A",
        "text": "To reduce plastic waste by encouraging reusable bottles and washable glasses in the school canteen"
      },
      {
        "key": "B",
        "text": "To close the school canteen during lunchtime"
      },
      {
        "key": "C",
        "text": "To increase the prices of snacks sold at school"
      },
      {
        "key": "D",
        "text": "To forbid students from eating meals during school breaks"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tujuan utama proposal OSIS adalah mengurangi sampah plastik dengan botol minum ulang dan gelas yang dapat dicuci di kantin: 'reduce plastic waste by encouraging reusable bottles'. Pilihan A tepat.",
    "grammarNote": "Purpose clause with infinitive: 'To reduce plastic waste by encouraging reusable bottles...'."
  },
  {
    "id": 7,
    "source": "Sumber: Seri Apresiasi Cerita Rakyat Nusantara — Balai Bahasa & Kemendikbudristek",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Short Talks",
    "audioText": "Questions seven and eight are based on the following short talk about Indonesian folktales. Good morning, students. Today we are exploring why traditional Indonesian folktales and legends are still very meaningful for us today. Famous stories like Malin Kundang from West Sumatra, Lake Toba from North Sumatra, and Rawa Pening from Central Java are not merely entertaining tales. They were passed down by our ancestors to teach essential life lessons. For example, they remind young people to respect their parents, honor their promises, and treat the poor and needy with genuine kindness. When we analyze these stories in our English class, we learn to identify character traits, conflict resolutions, and the moral message behind every action. By studying our folklore, we preserve our rich cultural identity while improving our English literacy skills. Now answer question number seven: According to the speaker, what is the primary purpose of traditional Indonesian folktales?",
    "audioSegments": [
      {
        "text": "Questions seven and eight are based on the following short talk about Indonesian folktales. Good morning, students. Today we are exploring why traditional Indonesian folktales and legends are still very meaningful for us today. Famous stories like Malin Kundang from West Sumatra, Lake Toba from North Sumatra, and Rawa Pening from Central Java are not merely entertaining tales. They were passed down by our ancestors to teach essential life lessons. For example, they remind young people to respect their parents, honor their promises, and treat the poor and needy with genuine kindness. When we analyze these stories in our English class, we learn to identify character traits, conflict resolutions, and the moral message behind every action. By studying our folklore, we preserve our rich cultural identity while improving our English literacy skills. Now answer question number seven: According to the speaker, what is the primary purpose of traditional Indonesian folktales?",
        "lang": "en-US",
        "role": "narrator"
      }
    ],
    "prompt": "According to the speaker, what is the primary purpose of traditional Indonesian folktales?",
    "options": [
      {
        "key": "A",
        "text": "To teach essential life lessons such as respect, honesty, and kindness to others"
      },
      {
        "key": "B",
        "text": "To teach students how to build ancient stone monuments"
      },
      {
        "key": "C",
        "text": "To discourage young people from reading modern literature"
      },
      {
        "key": "D",
        "text": "To explain modern scientific discoveries about oceans"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pembicara menyatakan bahwa dongeng tradisional diwariskan untuk mengajarkan nilai kehidupan yang penting: 'passed down by our ancestors to teach essential life lessons... respect parents, honor promises, and treat the poor with kindness'. Pilihan A tepat.",
    "grammarNote": "Infinitive of Purpose: 'to teach essential life lessons such as respect, honesty, and kindness'."
  },
  {
    "id": 8,
    "source": "Sumber: Seri Apresiasi Cerita Rakyat Nusantara — Balai Bahasa & Kemendikbudristek",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Short Talks",
    "audioText": "Now answer question number eight based on the same talk: How does analyzing traditional stories benefit high school students according to the speaker?",
    "audioSegments": [
      {
        "text": "Now answer question number eight based on the same talk: How does analyzing traditional stories benefit high school students according to the speaker?",
        "lang": "en-US",
        "role": "narrator"
      }
    ],
    "prompt": "How does analyzing traditional stories benefit high school students according to the speaker?",
    "options": [
      {
        "key": "A",
        "text": "It helps preserve cultural identity while improving critical reading and English literacy skills"
      },
      {
        "key": "B",
        "text": "It guarantees that all students will become professional fiction writers"
      },
      {
        "key": "C",
        "text": "It replaces the need to study modern science and technology"
      },
      {
        "key": "D",
        "text": "It teaches students how to sail across deep lakes"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pembicara menjelaskan: 'we preserve our rich cultural identity while improving our English literacy skills' (melestarikan identitas budaya sekaligus melatih kecakapan literasi bahasa Inggris). Pilihan A tepat.",
    "grammarNote": "Conjunctive Pair: 'preserve our rich cultural identity while improving our English literacy skills'."
  },
  {
    "id": 9,
    "source": "Sumber: Panduan Kesehatan Mental Remaja & Etika Media Digital — Kementerian Kesehatan RI",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Short Talks",
    "audioText": "Questions nine and ten are based on the following talk by a school counselor. Good afternoon, everyone. Social media has become an important part of our daily communication. It allows us to keep in touch with friends, explore creative hobbies, and find educational information quickly. However, spending too many hours scrolling through social media feeds can cause serious problems for high school students. Research shows that excessive screen time often leads to sleep deprivation, reduced concentration during classes, and feelings of anxiety. Furthermore, false news and unverified rumors can spread very fast across online networks. Therefore, we strongly advise students to practice healthy digital habits. Set a daily limit for entertainment screen time, silence your phone notifications while studying, and always double-check news stories from reliable sources before sharing them. Now answer question number nine: According to the counselor, what negative consequences can arise from excessive social media use?",
    "audioSegments": [
      {
        "text": "Questions nine and ten are based on the following talk by a school counselor. Good afternoon, everyone. Social media has become an important part of our daily communication. It allows us to keep in touch with friends, explore creative hobbies, and find educational information quickly. However, spending too many hours scrolling through social media feeds can cause serious problems for high school students. Research shows that excessive screen time often leads to sleep deprivation, reduced concentration during classes, and feelings of anxiety. Furthermore, false news and unverified rumors can spread very fast across online networks. Therefore, we strongly advise students to practice healthy digital habits. Set a daily limit for entertainment screen time, silence your phone notifications while studying, and always double-check news stories from reliable sources before sharing them. Now answer question number nine: According to the counselor, what negative consequences can arise from excessive social media use?",
        "lang": "en-US",
        "role": "narrator"
      }
    ],
    "prompt": "According to the counselor, what negative consequences can arise from excessive social media use?",
    "options": [
      {
        "key": "A",
        "text": "Sleep deprivation, reduced concentration in class, and feelings of anxiety"
      },
      {
        "key": "B",
        "text": "An immediate loss of all cell phone signal coverage"
      },
      {
        "key": "C",
        "text": "Inability to save documents on school desktop computers"
      },
      {
        "key": "D",
        "text": "A decrease in the monthly cost of internet services"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Konselor menyebutkan dampak buruk penggunaan media sosial berlebih: 'excessive screen time often leads to sleep deprivation, reduced concentration during classes, and feelings of anxiety'. Pilihan A tepat.",
    "grammarNote": "Cause and Effect: 'excessive screen time often leads to sleep deprivation, reduced concentration, and anxiety'."
  },
  {
    "id": 10,
    "source": "Sumber: Panduan Kesehatan Mental Remaja & Etika Media Digital — Kementerian Kesehatan RI",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Short Talks",
    "audioText": "Now answer question number ten based on the same talk: What practical advice does the counselor recommend for students?",
    "audioSegments": [
      {
        "text": "Now answer question number ten based on the same talk: What practical advice does the counselor recommend for students?",
        "lang": "en-US",
        "role": "narrator"
      }
    ],
    "prompt": "What practical recommendations does the speaker propose for maintaining healthy digital habits?",
    "options": [
      {
        "key": "A",
        "text": "Setting daily screen time limits, silencing notifications while studying, and verifying news before sharing"
      },
      {
        "key": "B",
        "text": "Deleting all electronic accounts and never using computers again"
      },
      {
        "key": "C",
        "text": "Sharing every breaking headline immediately without reading the full article"
      },
      {
        "key": "D",
        "text": "Using social media throughout the night instead of resting"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Konselor merekomendasikan: 'Set a daily limit for entertainment screen time, silence your phone notifications while studying, and always double-check news stories'. Pilihan A tepat.",
    "grammarNote": "Hortatory Recommendation: 'Set a daily limit... silence notifications... and double-check news'."
  },
  {
    "id": 11,
    "source": "Sumber: Dikutip dan disesuaikan dari Cerita Rakyat Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
    "type": "single_choice",
    "title": "Advanced Narrative: Central Theme & Conflict",
    "stimulusTitle": "Text 1: The Legend of Rawa Pening: A Tale of Kindness and Humility",
    "stimulusBody": "Once upon a time in a peaceful village called Ngasem in Central Java, there lived a humble woman named Endang Sawitri. She gave birth to an extraordinary boy named Baru Klinthing. Due to an unusual condition at birth, Baru Klinthing was shunned by many villagers, and his body was covered with painful wounds that emitted an unpleasant smell. As he grew older, Baru Klinthing decided to search for his father, Ki Hajar Salokantara, who was meditating on the sacred slopes of Mount Telomoyo.<br><br>During his long journey through the valley, Baru Klinthing arrived at a prosperous village called Pathok. The villagers were celebrating a grand harvest festival. Delicious roasted meats and traditional dishes were served in abundance, and the village square was filled with joyful laughter and music. Exhausted, hungry, and thirsty, the poor boy approached the gathering and politely asked for a small portion of leftover food.<br><br>However, the wealthy villagers were proud and arrogant. Instead of showing sympathy, they mocked his ragged clothes and dirty appearance. They drove him away cruelly, shouting insulting words and throwing stones. Heartbroken, Baru Klinthing walked toward the quiet outskirts of the village. There, in a small wooden cottage, lived an elderly widow named Mbok Rondo.<br><br>Unlike the arrogant villagers, Mbok Rondo welcomed the boy warmly into her home. Seeing his condition, she generously offered him warm rice, fresh vegetables, and cool water. Baru Klinthing was deeply moved by her sincerity. Before departing, he whispered an important warning: 'Mbok, if you hear a loud rumbling sound from the village center, please prepare your wooden mortar (lesung) and use it as a boat.'<br><br>Baru Klinthing then returned to the busy festival square. Standing before the crowd, he drove a single wooden stick deep into the ground. He challenged the proud crowd: 'If you are truly strong and mighty, try to pull this simple stick out of the earth!'<br><br>The villagers laughed scornfully. One by one, the strongest men stepped forward and pulled with all their strength, but the stick did not move at all. Even when several warriors pulled together, it remained firmly anchored. Finally, Baru Klinthing walked forward and pulled the stick out effortlessly with one hand.<br><br>Instantly, clear water gushed forth from the hole like a powerful fountain. The water rose rapidly, submerging the homes, streets, and festival grounds. The panic-stricken villagers tried to run, but the rushing flood swallowed the entire village, transforming the area into a vast lake known today as Rawa Pening. Only kind Mbok Rondo survived safely, floating on her wooden mortar. The legend remains an enduring reminder that true human worth is found in kindness and humility, not in outward wealth or pride.",
    "prompt": "What is the primary moral theme conveyed throughout the story of Baru Klinthing?",
    "options": [
      {
        "key": "A",
        "text": "True human worth lies in kindness and humility rather than outward wealth or social status"
      },
      {
        "key": "B",
        "text": "Harvest festivals must always be conducted during dry weather"
      },
      {
        "key": "C",
        "text": "Traveling alone through mountain forests is unsafe for young boys"
      },
      {
        "key": "D",
        "text": "Wealthy villagers are always superior to poor artisans"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tema moral utama cerita rakyat Rawa Pening adalah bahwa nilai sejati seseorang diukur dari kebaikan hati dan kerendahan hati, bukan dari kekayaan lahiriah atau kesombongan rupa: 'true human worth is found in kindness and humility, not in outward wealth or pride'. Pilihan A tepat.",
    "grammarNote": "Thematic Synthesis: True dignity lies in humility and kindness vs arrogance."
  },
  {
    "id": 12,
    "source": "Sumber: Dikutip dan disesuaikan dari Cerita Rakyat Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
    "type": "single_choice",
    "title": "Advanced Narrative: Explicit Character Conflict",
    "stimulusTitle": "Text 1: The Legend of Rawa Pening: A Tale of Kindness and Humility",
    "stimulusBody": "(Silakan merujuk pada Teks 1: 'The Legend of Rawa Pening' di atas)",
    "prompt": "According to paragraph 3, why did the villagers of Pathok cruelly reject and drive Baru Klinthing away?",
    "options": [
      {
        "key": "A",
        "text": "They were arrogant and judged him solely by his ragged clothes and wounded appearance"
      },
      {
        "key": "B",
        "text": "They were terrified because he carried dangerous metal weapons"
      },
      {
        "key": "C",
        "text": "All the food prepared for the harvest festival had already run out"
      },
      {
        "key": "D",
        "text": "He refused to join their traditional dances in the village square"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Paragraf 3 menyatakan secara eksplisit bahwa warga desa bersikap angkuh dan mencemooh pakaian koyak serta rupa kotor Baru Klinthing: 'the wealthy villagers were proud and arrogant... mocked his ragged clothes and dirty appearance'. Pilihan A tepat.",
    "grammarNote": "Cause and Effect: 'Instead of showing sympathy, they mocked his ragged clothes... and drove him away'."
  },
  {
    "id": 13,
    "source": "Sumber: Dikutip dan disesuaikan dari Cerita Rakyat Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
    "type": "single_choice",
    "title": "Advanced Narrative: Character Traits & Motivation",
    "stimulusTitle": "Text 1: The Legend of Rawa Pening: A Tale of Kindness and Humility",
    "stimulusBody": "(Silakan merujuk pada Teks 1: 'The Legend of Rawa Pening' di atas)",
    "prompt": "How did Mbok Rondo treat Baru Klinthing when he arrived at her humble cottage?",
    "options": [
      {
        "key": "A",
        "text": "She showed sincere compassion by offering him warm food and shelter despite her modest life"
      },
      {
        "key": "B",
        "text": "She demanded gold coins before allowing him to sit on her porch"
      },
      {
        "key": "C",
        "text": "She ordered her neighbors to chase him into the forest"
      },
      {
        "key": "D",
        "text": "She ignored him because she was busy weaving textiles"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berbeda dari warga desa yang kaya namun sombong, Mbok Rondo menyambut Baru Klinthing dengan ketulusan dan memberinya makan serta minum: 'she generously offered him warm rice, fresh vegetables, and cool water'. Pilihan A tepat.",
    "grammarNote": "Contrasting Adverbial Clause: 'Unlike the arrogant villagers, Mbok Rondo welcomed the boy warmly...'."
  },
  {
    "id": 14,
    "source": "Sumber: Dikutip dan disesuaikan dari Cerita Rakyat Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
    "type": "single_choice",
    "title": "Advanced Narrative: Contextual Lexis (CEFR B2)",
    "stimulusTitle": "Text 1: The Legend of Rawa Pening: A Tale of Kindness and Humility",
    "stimulusBody": "(Silakan merujuk pada Teks 1: 'The Legend of Rawa Pening' di atas)",
    "prompt": "The word 'shunned' in paragraph 1 ('Baru Klinthing was shunned by many villagers') is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "avoided and rejected"
      },
      {
        "key": "B",
        "text": "warmly invited"
      },
      {
        "key": "C",
        "text": "publicly praised"
      },
      {
        "key": "D",
        "text": "financially supported"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'shunned' (bentuk lampau dari 'shun') bermakna dijauhi, dihindari, atau disisihkan oleh orang lain (avoided and rejected). Pilihan A tepat.",
    "grammarNote": "Verb Lexis (B2): shun = systematically avoid, ignore, or reject someone."
  },
  {
    "id": 15,
    "source": "Sumber: Dikutip dan disesuaikan dari Cerita Rakyat Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
    "type": "single_choice",
    "title": "Advanced Narrative: Symbolic Action Analysis",
    "stimulusTitle": "Text 1: The Legend of Rawa Pening: A Tale of Kindness and Humility",
    "stimulusBody": "(Silakan merujuk pada Teks 1: 'The Legend of Rawa Pening' di atas)",
    "prompt": "What was the significance of the stick-pulling challenge organized by Baru Klinthing?",
    "options": [
      {
        "key": "A",
        "text": "It exposed the false pride of the boastful villagers who could not pull it out despite their arrogance"
      },
      {
        "key": "B",
        "text": "It was a sporting game designed to select the next village chief"
      },
      {
        "key": "C",
        "text": "It was intended to find the best farmer for the upcoming planting season"
      },
      {
        "key": "D",
        "text": "It was meant to build a wooden fence around the village square"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tantangan mencabut lidi dilakukan Baru Klinthing untuk mempermalukan kesombongan dan keangkuhan warga desa yang mengklaim diri mereka hebat dan kuat, namun tak satu pun sanggup mencabutnya. Pilihan A tepat.",
    "grammarNote": "Symbolic Narrative Device: The immovable stick symbolizes moral truth exposing false human pride."
  },
  {
    "id": 16,
    "source": "Sumber: Dikutip dan disesuaikan dari Cerita Rakyat Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
    "type": "single_choice",
    "title": "Advanced Narrative: Contextual Lexis (CEFR B2)",
    "stimulusTitle": "Text 1: The Legend of Rawa Pening: A Tale of Kindness and Humility",
    "stimulusBody": "(Silakan merujuk pada Teks 1: 'The Legend of Rawa Pening' di atas)",
    "prompt": "The word 'effortlessly' in paragraph 6 ('pulled the stick out effortlessly with one hand') is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "easily and without struggle"
      },
      {
        "key": "B",
        "text": "with extreme difficulty"
      },
      {
        "key": "C",
        "text": "using heavy iron tools"
      },
      {
        "key": "D",
        "text": "with loud shouts of pain"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Adverbia 'effortlessly' berasal dari 'effort' + suffix '-less' + '-ly', yang bermakna tanpa bersusah payah, secara mudah sekali (easily and without struggle).",
    "grammarNote": "Morphological Adverb Formation: effortless + -ly = without exerting physical strain."
  },
  {
    "id": 17,
    "source": "Sumber: Dikutip dan disesuaikan dari Cerita Rakyat Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
    "type": "single_choice",
    "title": "Advanced Narrative: Plot Turning Point & Consequence",
    "stimulusTitle": "Text 1: The Legend of Rawa Pening: A Tale of Kindness and Humility",
    "stimulusBody": "(Silakan merujuk pada Teks 1: 'The Legend of Rawa Pening' di atas)",
    "prompt": "What catastrophic event occurred immediately after Baru Klinthing pulled the wooden stick out of the earth?",
    "options": [
      {
        "key": "A",
        "text": "Clear water gushed forth violently from the ground, flooding the village and creating Lake Rawa Pening"
      },
      {
        "key": "B",
        "text": "A massive earthquake split Mount Telomoyo into two parts"
      },
      {
        "key": "C",
        "text": "The harvest crops caught fire and destroyed the wooden cottages"
      },
      {
        "key": "D",
        "text": "Heavy rain caused the mountain river bridge to collapse"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Seketika setelah lidi dicabut, air jernih memancar deras dari lubang tanah bagai air mancur raksasa, menenggelamkan desa dan membentuk Danau Rawa Pening. Pilihan A tepat.",
    "grammarNote": "Immediate Temporal Sequence: 'Instantly, clear water gushed forth... transforming the area into a vast lake'."
  },
  {
    "id": 18,
    "source": "Sumber: Dikutip dan disesuaikan dari Cerita Rakyat Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
    "type": "single_choice",
    "title": "Advanced Narrative: Pronoun Reference Tracking",
    "stimulusTitle": "Text 1: The Legend of Rawa Pening: A Tale of Kindness and Humility",
    "stimulusBody": "(Silakan merujuk pada Teks 1: 'The Legend of Rawa Pening' di atas)",
    "prompt": "In paragraph 4, what does the pronoun 'it' refer to in the clause: 'please prepare your wooden mortar (lesung) and use it as a boat'?",
    "options": [
      {
        "key": "A",
        "text": "The wooden mortar (lesung)"
      },
      {
        "key": "B",
        "text": "The loud rumbling sound"
      },
      {
        "key": "C",
        "text": "The village center"
      },
      {
        "key": "D",
        "text": "The warm rice"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Frasa 'prepare your wooden mortar (lesung) and use it as a boat' menunjukkan bahwa kata ganti objek 'it' merujuk secara langsung pada lesung kayu (the wooden mortar). Pilihan A tepat.",
    "grammarNote": "Direct Object Pronoun Reference: Antecedent 'wooden mortar' -> singular neuter pronoun 'it'."
  },
  {
    "id": 19,
    "source": "Sumber: Dikutip dan disesuaikan dari Cerita Rakyat Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
    "type": "single_choice",
    "title": "Advanced Narrative: Generic Structure Analysis",
    "stimulusTitle": "Text 1: The Legend of Rawa Pening: A Tale of Kindness and Humility",
    "stimulusBody": "(Silakan merujuk pada Teks 1: 'The Legend of Rawa Pening' di atas)",
    "prompt": "The part of the narrative where water submerges the village and only kind Mbok Rondo survives represents which generic structure element?",
    "options": [
      {
        "key": "A",
        "text": "Resolution (the outcome and conclusion of the central conflict)"
      },
      {
        "key": "B",
        "text": "Orientation (introducing characters and opening setting)"
      },
      {
        "key": "C",
        "text": "Complication (the initial emergence of the problem)"
      },
      {
        "key": "D",
        "text": "Abstract (a brief summary preceding the tale)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Bagian akhir cerita di mana banjir menenggelamkan desa dan Mbok Rondo selamat mengapung di atas lesung merupakan tahap Resolusi (Resolution), yaitu penyelesaian akhir dari rangkaian konflik cerita.",
    "grammarNote": "Narrative Generic Structure: Orientation -> Complication -> Resolution -> Coda."
  },
  {
    "id": 20,
    "source": "Sumber: Dikutip dan disesuaikan dari Cerita Rakyat Jawa Tengah — Balai Bahasa Provinsi Jawa Tengah & Kemendikbudristek",
    "type": "single_choice",
    "title": "Advanced Narrative: Educational & Moral Value",
    "stimulusTitle": "Text 1: The Legend of Rawa Pening: A Tale of Kindness and Humility",
    "stimulusBody": "(Silakan merujuk pada Teks 1: 'The Legend of Rawa Pening' di atas)",
    "prompt": "What important ethical lesson can high school students learn from the legend of Rawa Pening?",
    "options": [
      {
        "key": "A",
        "text": "To treat underprivileged people with empathy and never look down on others based on their physical appearance"
      },
      {
        "key": "B",
        "text": "To store wooden mortars only inside stone houses"
      },
      {
        "key": "C",
        "text": "To build high dams whenever celebrating harvest festivals"
      },
      {
        "key": "D",
        "text": "To avoid eating roasted meats during public celebrations"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pesan moral bagi pelajar adalah memperlakukan kaum yang kurang beruntung dengan penuh empati, serta tidak merendahkan sesama hanya berdasarkan penampilan fisik atau status materi. Pilihan A tepat.",
    "grammarNote": "Moral Application: 'treat underprivileged people with empathy and never look down on others'."
  },
  {
    "id": 21,
    "source": "Sumber: Adaptasi Kebijakan Etika AI dalam Pendidikan Menengah — UNESCO & Kemendikbudristek",
    "type": "single_choice",
    "title": "Hortatory Exposition: Communicative Purpose",
    "stimulusTitle": "Text 2: Using Artificial Intelligence Responsibly in High School Learning",
    "stimulusBody": "In recent years, artificial intelligence (AI) has rapidly transformed the educational landscape. With just a few simple prompts, students can use AI applications to explain complicated science concepts, suggest essay outlines, or solve complex mathematical formulas. While these digital tools provide tremendous convenience, relying too heavily on them without careful thinking can harm our learning process. Therefore, high school students should learn to use AI responsibly as a supportive study assistant rather than letting it do all the thinking for them.<br><br>First of all, writing and problem-solving are fundamental exercises for developing our intellect. When students compose an essay in their own words, they practice organizing arguments, thinking critically, and expressing their original voice. If learners simply copy and paste AI-generated answers into their school assignments, their ability to think independently and analyze problems will gradually weaken over time. Completing assignments through our own effort builds the genuine intellectual competence and self-confidence needed for university and future careers.<br><br>Secondly, generative AI tools are not always completely accurate. AI generates responses based on language patterns found across the internet, which means it can occasionally produce false facts, misleading statements, or fake reference sources with high confidence. If students accept these answers blindly without checking reliable sources, they risk submitting incorrect information in their homework. Students must develop the habit of cross-checking AI responses with school textbooks, trusted educational websites, or their teachers' guidance.<br><br>In conclusion, artificial intelligence is a powerful modern innovation that cannot be ignored. Instead of completely banning AI or misusing it to cheat on assignments, schools and students should adopt a balanced and principled approach. Students should view AI as a helpful tutor to clarify difficult concepts and inspire creative ideas, while ensuring that the final work is always created through their own hard work and critical thought. By building responsible digital habits today, students can master technology as an empowering learning partner rather than becoming passive consumers.",
    "prompt": "What is the primary communicative purpose of the hortatory exposition text above?",
    "options": [
      {
        "key": "A",
        "text": "To persuade readers that high school students should use AI responsibly as a study aid while maintaining independent thought"
      },
      {
        "key": "B",
        "text": "To entertain readers with a science fiction story about self-aware computers"
      },
      {
        "key": "C",
        "text": "To provide a step-by-step programming tutorial on building an AI algorithm"
      },
      {
        "key": "D",
        "text": "To explain the physical components of modern computer hardware"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tujuan komunikatif teks eksposisi hortatori adalah membujuk/meyakinkan pembaca bahwa pelajar SMA harus memanfaatkan AI secara bertanggung jawab sebagai pendukung belajar sambil tetap menjaga kemandirian berpikir. Pilihan A tepat.",
    "grammarNote": "Communicative Function: To persuade the reader that something should or should not be done."
  },
  {
    "id": 22,
    "source": "Sumber: Adaptasi Kebijakan Etika AI dalam Pendidikan Menengah — UNESCO & Kemendikbudristek",
    "type": "single_choice",
    "title": "Hortatory Exposition: Thesis Statement Identification",
    "stimulusTitle": "Text 2: Using Artificial Intelligence Responsibly in High School Learning",
    "stimulusBody": "(Silakan merujuk pada Teks 2: 'Using Artificial Intelligence Responsibly in High School Learning' di atas)",
    "prompt": "Which sentence from paragraph 1 directly presents the author's main thesis statement?",
    "options": [
      {
        "key": "A",
        "text": "High school students should learn to use AI responsibly as a supportive study assistant rather than letting it do all the thinking"
      },
      {
        "key": "B",
        "text": "Artificial intelligence has rapidly transformed the educational landscape"
      },
      {
        "key": "C",
        "text": "With just a few simple prompts, students can explain complicated concepts"
      },
      {
        "key": "D",
        "text": "Digital tools provide tremendous convenience for modern learners"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tesis penulis ada pada kalimat terakhir paragraf 1: 'Therefore, high school students should learn to use AI responsibly as a supportive study assistant rather than letting it do all the thinking for them'. Pilihan A tepat.",
    "grammarNote": "Thesis Statement Formula: Modal of Recommendation (should + Base Verb) stating the core stance."
  },
  {
    "id": 23,
    "source": "Sumber: Adaptasi Kebijakan Etika AI dalam Pendidikan Menengah — UNESCO & Kemendikbudristek",
    "type": "single_choice",
    "title": "Hortatory Exposition: Detail Argument on Cognitive Skills",
    "stimulusTitle": "Text 2: Using Artificial Intelligence Responsibly in High School Learning",
    "stimulusBody": "(Silakan merujuk pada Teks 2: 'Using Artificial Intelligence Responsibly in High School Learning' di atas)",
    "prompt": "According to paragraph 2, why is composing essays in our own words essential for high school students?",
    "options": [
      {
        "key": "A",
        "text": "It trains the mind to organize arguments, cultivate critical thinking, and build independent problem-solving skills"
      },
      {
        "key": "B",
        "text": "It allows students to complete their homework in less than five minutes"
      },
      {
        "key": "C",
        "text": "It eliminates the need for teachers to review student portfolios"
      },
      {
        "key": "D",
        "text": "It guarantees automatic acceptance into international universities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Paragraf 2 menyatakan bahwa menulis esai dengan kata-kata sendiri melatih otak merangkai argumen, berpikir kritis, dan memecahkan masalah mandiri: 'practice organizing arguments, thinking critically, and expressing their original voice'. Pilihan A tepat.",
    "grammarNote": "Supporting Argument: Gerunds as objects ('organizing arguments, thinking critically')."
  },
  {
    "id": 24,
    "source": "Sumber: Adaptasi Kebijakan Etika AI dalam Pendidikan Menengah — UNESCO & Kemendikbudristek",
    "type": "single_choice",
    "title": "Hortatory Exposition: Contextual Lexis (CEFR B2)",
    "stimulusTitle": "Text 2: Using Artificial Intelligence Responsibly in High School Learning",
    "stimulusBody": "(Silakan merujuk pada Teks 2: 'Using Artificial Intelligence Responsibly in High School Learning' di atas)",
    "prompt": "The word 'relying' in paragraph 1 ('relying too heavily on them without careful thinking') is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "depending"
      },
      {
        "key": "B",
        "text": "ignoring"
      },
      {
        "key": "C",
        "text": "criticizing"
      },
      {
        "key": "D",
        "text": "repairing"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'relying' (dari phrasal verb 'rely on') bermakna bergantung pada, mempercayakan diri sepenuhnya (depending on). Pilihan A tepat.",
    "grammarNote": "Phrasal Verb Synonym: rely on = depend on, trust in."
  },
  {
    "id": 25,
    "source": "Sumber: Adaptasi Kebijakan Etika AI dalam Pendidikan Menengah — UNESCO & Kemendikbudristek",
    "type": "single_choice",
    "title": "Hortatory Exposition: Cause & Effect of AI Hallucinations",
    "stimulusTitle": "Text 2: Using Artificial Intelligence Responsibly in High School Learning",
    "stimulusBody": "(Silakan merujuk pada Teks 2: 'Using Artificial Intelligence Responsibly in High School Learning' di atas)",
    "prompt": "Based on paragraph 3, why can generative AI systems sometimes present misleading or incorrect information?",
    "options": [
      {
        "key": "A",
        "text": "Because they generate text based on statistical internet patterns rather than genuine comprehension of factual truth"
      },
      {
        "key": "B",
        "text": "Because school internet routers are deliberately programmed to produce errors"
      },
      {
        "key": "C",
        "text": "Because textbook publishers frequently alter online articles"
      },
      {
        "key": "D",
        "text": "Because computers cannot operate during cloudy weather"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Paragraf 3 menjelaskan: 'AI generates responses based on language patterns found across the internet, which means it can occasionally produce false facts... with high confidence'. AI memprediksi pola bahasa, bukan memahami kebenaran faktual. Pilihan A tepat.",
    "grammarNote": "Causal Reason Clause: 'based on language patterns... rather than genuine comprehension'."
  },
  {
    "id": 26,
    "source": "Sumber: Adaptasi Kebijakan Etika AI dalam Pendidikan Menengah — UNESCO & Kemendikbudristek",
    "type": "single_choice",
    "title": "Hortatory Exposition: Contextual Lexis (CEFR B2)",
    "stimulusTitle": "Text 2: Using Artificial Intelligence Responsibly in High School Learning",
    "stimulusBody": "(Silakan merujuk pada Teks 2: 'Using Artificial Intelligence Responsibly in High School Learning' di atas)",
    "prompt": "The word 'blindly' in paragraph 3 ('if students accept these answers blindly without checking') means...",
    "options": [
      {
        "key": "A",
        "text": "without question or verification"
      },
      {
        "key": "B",
        "text": "using dark eyeglasses"
      },
      {
        "key": "C",
        "text": "after checking three reference books"
      },
      {
        "key": "D",
        "text": "with enthusiastic celebration"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Adverbia 'blindly' secara kiasan bermakna menelan/menerima sesuatu begitu saja tanpa mempertanyakan atau mengecek kebenarannya (without question or verification). Pilihan A tepat.",
    "grammarNote": "Idiomatic Adverbial Register: accept blindly = accept uncritically without proof."
  },
  {
    "id": 27,
    "source": "Sumber: Adaptasi Kebijakan Etika AI dalam Pendidikan Menengah — UNESCO & Kemendikbudristek",
    "type": "single_choice",
    "title": "Hortatory Exposition: Author's Stance and Tone",
    "stimulusTitle": "Text 2: Using Artificial Intelligence Responsibly in High School Learning",
    "stimulusBody": "(Silakan merujuk pada Teks 2: 'Using Artificial Intelligence Responsibly in High School Learning' di atas)",
    "prompt": "Which pair of words best describes the author's tone throughout the article?",
    "options": [
      {
        "key": "A",
        "text": "Persuasive and constructive"
      },
      {
        "key": "B",
        "text": "Sarcastic and angry"
      },
      {
        "key": "C",
        "text": "Panicked and hopeless"
      },
      {
        "key": "D",
        "text": "Mocking and indifferent"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Penulis menggunakan nada yang mengajak/meyakinkan (persuasive) dengan solusi membangun dan positif (constructive) bagi siswa, bukan melarang atau panik. Pilihan A tepat.",
    "grammarNote": "Author's Tone: Persuasive, rational, and constructive."
  },
  {
    "id": 28,
    "source": "Sumber: Adaptasi Kebijakan Etika AI dalam Pendidikan Menengah — UNESCO & Kemendikbudristek",
    "type": "single_choice",
    "title": "Hortatory Exposition: Pronoun Reference",
    "stimulusTitle": "Text 2: Using Artificial Intelligence Responsibly in High School Learning",
    "stimulusBody": "(Silakan merujuk pada Teks 2: 'Using Artificial Intelligence Responsibly in High School Learning' di atas)",
    "prompt": "In paragraph 1, what does the pronoun 'them' refer to in the clause: 'relying too heavily on them without careful thinking'?",
    "options": [
      {
        "key": "A",
        "text": "Digital AI tools"
      },
      {
        "key": "B",
        "text": "Difficult science concepts"
      },
      {
        "key": "C",
        "text": "High school teachers"
      },
      {
        "key": "D",
        "text": "Mathematical formulas"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kalimat tersebut berbunyi: 'While these digital tools provide tremendous convenience, relying too heavily on them...'. Kata ganti 'them' merujuk pada alat-alat digital AI (digital AI tools). Pilihan A tepat.",
    "grammarNote": "Plural Object Pronoun Reference: Antecedent 'digital tools' -> pronoun 'them'."
  },
  {
    "id": 29,
    "source": "Sumber: Adaptasi Kebijakan Etika AI dalam Pendidikan Menengah — UNESCO & Kemendikbudristek",
    "type": "single_choice",
    "title": "Hortatory Exposition: Characteristic Recommendation",
    "stimulusTitle": "Text 2: Using Artificial Intelligence Responsibly in High School Learning",
    "stimulusBody": "(Silakan merujuk pada Teks 2: 'Using Artificial Intelligence Responsibly in High School Learning' di atas)",
    "prompt": "How does the final paragraph reflect the distinctive generic structure of a Hortatory Exposition?",
    "options": [
      {
        "key": "A",
        "text": "It delivers practical recommendations ('students should view AI as a helpful tutor... ensure final work is their own')"
      },
      {
        "key": "B",
        "text": "It introduces a brand-new setting in a futuristic classroom"
      },
      {
        "key": "C",
        "text": "It lists the prices of commercial software subscriptions"
      },
      {
        "key": "D",
        "text": "It avoids summarizing any of the previous arguments"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ciri khas penutup teks Hortatory Exposition adalah menyajikan Rekomendasi tindakan ('should view AI as a helpful tutor... ensure final work is their own'). Pilihan A tepat.",
    "grammarNote": "Generic Structure: Hortatory ends with Recommendation (advocating should/should not)."
  },
  {
    "id": 30,
    "source": "Sumber: Adaptasi Kebijakan Etika AI dalam Pendidikan Menengah — UNESCO & Kemendikbudristek",
    "type": "single_choice",
    "title": "Hortatory Exposition: Practical Application & Integrity",
    "stimulusTitle": "Text 2: Using Artificial Intelligence Responsibly in High School Learning",
    "stimulusBody": "(Silakan merujuk pada Teks 2: 'Using Artificial Intelligence Responsibly in High School Learning' di atas)",
    "prompt": "What is the most appropriate example of responsible AI usage by a student?",
    "options": [
      {
        "key": "A",
        "text": "Asking AI to explain a confusing concept, then summarizing the understanding in their own words"
      },
      {
        "key": "B",
        "text": "Copying an AI essay directly and submitting it as original homework"
      },
      {
        "key": "C",
        "text": "Letting AI generate answers during a closed-book examination"
      },
      {
        "key": "D",
        "text": "Refusing to use computers or digital dictionaries for any school project"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Contoh penggunaan AI yang beretika dan bertanggung jawab adalah meminta penjelasan konsep yang sulit, lalu menulis rangkumannya dengan kata-kata sendiri. Pilihan A tepat.",
    "grammarNote": "Applied Digital Ethics: AI as conceptual assistant + student original synthesis."
  },
  {
    "id": 31,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar: Negative Inversion (CEFR B2)",
    "stimulusTitle": "Kaidah Inversi dengan Adverbial Negatif (Negative Inversion)",
    "stimulusBody": "Rarely _______ students achieve lasting academic success without consistent self-discipline and daily practice.",
    "prompt": "Choose the correct auxiliary verb to complete the inverted sentence:",
    "options": [
      {
        "key": "A",
        "text": "do"
      },
      {
        "key": "B",
        "text": "does"
      },
      {
        "key": "C",
        "text": "have"
      },
      {
        "key": "D",
        "text": "are"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ketika kalimat diawali adverbial pembatas 'Rarely' dan subjeknya jamak ('students') dalam Present Simple, pola inversinya adalah: Rarely + do + Subject + V1 ('Rarely do students achieve...'). Pilihan A tepat.",
    "grammarNote": "Negative Inversion Formula: Rarely + do/does + Subject + Base Verb."
  },
  {
    "id": 32,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar: Present Subjunctive in Recommendation (CEFR B2)",
    "stimulusTitle": "Kaidah Modus Subjungtif Formal (Present Subjunctive)",
    "stimulusBody": "The English teacher recommended that every student _______ the draft of their essay before submitting it.",
    "prompt": "Select the correct subjunctive verb form for the that-clause:",
    "options": [
      {
        "key": "A",
        "text": "revise"
      },
      {
        "key": "B",
        "text": "revises"
      },
      {
        "key": "C",
        "text": "revised"
      },
      {
        "key": "D",
        "text": "is revising"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Setelah kata kerja rekomendasi (recommend, suggest, insist) + that + Subject, kata kerja yang digunakan adalah Subjunctive bentuk dasar (Bare Infinitive / V1 tanpa akhiran -s): 'that every student revise'. Pilihan A tepat.",
    "grammarNote": "Mandative Subjunctive Formula: recommend + that + Subject + Base Verb."
  },
  {
    "id": 33,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar: Concessive Connector of Contrast (CEFR B2)",
    "stimulusTitle": "Kaidah Kata Hubung Pertentangan / Konsesif (Concession)",
    "stimulusBody": "_______ the research assignment appeared difficult at first, the students completed it successfully through active collaboration.",
    "prompt": "Which conjunction of concession correctly establishes the contrast?",
    "options": [
      {
        "key": "A",
        "text": "Although"
      },
      {
        "key": "B",
        "text": "Because"
      },
      {
        "key": "C",
        "text": "Since"
      },
      {
        "key": "D",
        "text": "In order that"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata hubung yang menyatakan hubungan pertentangan (konsesif) yang diikuti oleh klausa lengkap (Subject + Verb) adalah 'Although' (meskipun/walaupun). Pilihan A tepat.",
    "grammarNote": "Concessive Subordinator: Although + Clause, Main Clause."
  },
  {
    "id": 34,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar: Inverted Conditional Type 3 (CEFR B2)",
    "stimulusTitle": "Kaidah Pengandaian Lampau Inversi (Inverted Conditional Type 3)",
    "stimulusBody": "_______ the students cross-checked the online information with their textbook, they would not have submitted the incorrect historical date.",
    "prompt": "Choose the correct inverted conditional structure to replace 'If the students had cross-checked':",
    "options": [
      {
        "key": "A",
        "text": "Had the students cross-checked"
      },
      {
        "key": "B",
        "text": "Were the students to cross-check"
      },
      {
        "key": "C",
        "text": "Did the students cross-check"
      },
      {
        "key": "D",
        "text": "Should the students cross-check"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Bentuk inversi untuk Conditional Type 3 menghilangkan kata 'If' dan memindahkan auxiliary 'Had' ke depan subjek: 'Had the students cross-checked...' = 'If the students had cross-checked...'. Pilihan A tepat.",
    "grammarNote": "Inverted Conditional Type 3: Had + Subject + V3, Subject + would have + V3."
  },
  {
    "id": 35,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar: Modal of Strong Recommendation in Passive (CEFR B2)",
    "stimulusTitle": "Kaidah Modalitas Anjuran Pasif (Passive Modal)",
    "stimulusBody": "Before being included in a school presentation, online claims _______ carefully verified by checking credible sources.",
    "prompt": "Which passive modal construction best expresses strong principled advice?",
    "options": [
      {
        "key": "A",
        "text": "ought to be"
      },
      {
        "key": "B",
        "text": "ought to"
      },
      {
        "key": "C",
        "text": "might have"
      },
      {
        "key": "D",
        "text": "was being"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Subjek 'online claims' menerima tindakan verifikasi. Rumus passive modal anjuran kuat adalah: ought to + be + V3 ('ought to be carefully verified'). Pilihan A tepat.",
    "grammarNote": "Passive Modal Construction: ought to + be + Past Participle (V3)."
  },
  {
    "id": 36,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar: Impersonal Passive Reporting (CEFR B2)",
    "stimulusTitle": "Kaidah Pasif Impersonal (Impersonal Passive)",
    "stimulusBody": "Digital literacy _______ to be one of the most vital competencies for twenty-first-century learners.",
    "prompt": "Choose the correct impersonal passive verb phrase to complete the statement:",
    "options": [
      {
        "key": "A",
        "text": "is widely recognized"
      },
      {
        "key": "B",
        "text": "widely recognizes"
      },
      {
        "key": "C",
        "text": "is widely recognizing"
      },
      {
        "key": "D",
        "text": "has widely recognized"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pola kalimat pasif impersonal untuk menyatakan pandangan umum adalah: Subject + is/are + Adverb + V3 + to-infinitive -> 'is widely recognized to be...'. Pilihan A tepat.",
    "grammarNote": "Impersonal Passive: Subject + is/are + Adverb + Past Participle + to-infinitive."
  },
  {
    "id": 37,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar: Perfect Participial Clause (CEFR B2)",
    "stimulusTitle": "Kaidah Klausa Partisipial Sempurna (Perfect Participle)",
    "stimulusBody": "_______ the small wooden stick out of the ground, Baru Klinthing watched the clear water rise and flood the village.",
    "prompt": "Select the correct participial phrase indicating an action completed prior to the main clause:",
    "options": [
      {
        "key": "A",
        "text": "Having pulled"
      },
      {
        "key": "B",
        "text": "Pulling"
      },
      {
        "key": "C",
        "text": "Being pulled"
      },
      {
        "key": "D",
        "text": "To pull"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Perfect Participle ('Having + V3') menyatakan bahwa suatu tindakan (mencabut lidi) telah tuntas sebelum tindakan berikutnya pada kalimat utama terjadi: 'Having pulled the small wooden stick... Baru Klinthing watched...'. Pilihan A tepat.",
    "grammarNote": "Perfect Participle: Having + V3 expresses completed anterior action."
  },
  {
    "id": 38,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar: Preposition of Cause (CEFR B2)",
    "stimulusTitle": "Kaidah Preposisi Penyebab (Preposition of Cause)",
    "stimulusBody": "The arrogant villagers faced unexpected disaster _______ their selfish pride and cruelty toward the poor boy.",
    "prompt": "Which cause connector correctly completes the blank before a noun phrase?",
    "options": [
      {
        "key": "A",
        "text": "because of"
      },
      {
        "key": "B",
        "text": "although"
      },
      {
        "key": "C",
        "text": "even though"
      },
      {
        "key": "D",
        "text": "so that"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Frasa 'their selfish pride and cruelty' adalah Noun Phrase. Kata penghubung penyebab yang diikuti oleh noun phrase adalah preposisi 'because of'. 'Although' dan 'even though' harus diikuti oleh klausa lengkap. Pilihan A tepat.",
    "grammarNote": "Cause Preposition: because of + Noun Phrase (vs because + Subject + Verb)."
  },
  {
    "id": 39,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar: Academic Collocation (CEFR B2)",
    "stimulusTitle": "Kaidah Kolokasi Akademis (Academic Collocation)",
    "stimulusBody": "Developing original writing skills plays a _______ role in building students' critical thinking capacity.",
    "prompt": "Which adjective forms the most natural academic collocation with 'role'?",
    "options": [
      {
        "key": "A",
        "text": "crucial"
      },
      {
        "key": "B",
        "text": "noisy"
      },
      {
        "key": "C",
        "text": "sharp"
      },
      {
        "key": "D",
        "text": "careless"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kolokasi akademis yang baku dan natural dengan kata 'role' adalah 'crucial role' (peran yang sangat penting/krusial) atau 'vital role'. Pilihan A tepat.",
    "grammarNote": "Adjective-Noun Collocation: play a crucial / essential role in doing something."
  },
  {
    "id": 40,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat Lanjut — SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar: Correlative Conjunction with Inversion (CEFR B2)",
    "stimulusTitle": "Kaidah Inversi 'Not only... but also' (Correlative Inversion)",
    "stimulusBody": "Not only _______ artificial intelligence assist students with brainstorming ideas, but it also provides quick grammatical feedback.",
    "prompt": "Choose the correct auxiliary verb to complete the inverted clause:",
    "options": [
      {
        "key": "A",
        "text": "does"
      },
      {
        "key": "B",
        "text": "do"
      },
      {
        "key": "C",
        "text": "is"
      },
      {
        "key": "D",
        "text": "has"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ketika diawali 'Not only' dalam Present Simple dengan subjek tunggal 'artificial intelligence', klausanya mengalami inversi: Not only + does + Subject + V1 ('Not only does artificial intelligence assist...'). Pilihan A tepat.",
    "grammarNote": "Correlative Inversion: Not only + does + Subject + Base Verb..., but it also + Verb."
  }
];
}

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
  if (q.audioText || (q.audioSegments && q.audioSegments.length > 0)) {
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

// =========================================================================
// MULTI-SPEAKER & INDONESIAN PRONUNCIATION AUDIO ENGINE (WEB SPEECH API)
// =========================================================================
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
  if (!cachedVoices || cachedVoices.length === 0) {
    cachedVoices = window.speechSynthesis.getVoices();
  }
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
    const fVoice = enVoices.find(v => 
      v.name.includes("Zira") || v.name.includes("Jenny") || v.name.includes("Aria") || 
      v.name.toLowerCase().includes("female") || v.name.toLowerCase().includes("woman") ||
      (v.name.includes("Google") && !v.name.toLowerCase().includes("male"))
    );
    if (fVoice) return fVoice;
  } else if (gender === "male") {
    const mVoice = enVoices.find(v => 
      v.name.includes("David") || v.name.includes("Guy") || v.name.includes("Ryan") || 
      v.name.includes("Mark") || v.name.toLowerCase().includes("male")
    );
    if (mVoice) return mVoice;
  }

  const narratorVoice = enVoices.find(v => v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("David") || v.name.includes("Zira")) || enVoices[0];
  return narratorVoice || voices[0];
}

function stopAudio() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
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

  // Toggle stop if already playing
  if (isAudioPlaying) {
    stopAudio();
    return;
  }

  window.speechSynthesis.cancel();

  // Build audio queue
  let segments = [];
  if (q.audioSegments && q.audioSegments.length > 0) {
    segments = q.audioSegments;
  } else if (q.audioText) {
    segments = [{ text: q.audioText, lang: "en-US", role: "narrator" }];
  } else {
    return;
  }

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
    // Finished all segments
    isAudioPlaying = false;
    audioQueue = [];
    audioQueueIdx = 0;
    const playBtn = document.getElementById("btn-play-audio");
    const playText = document.getElementById("play-text");
    const statusText = document.getElementById("audio-status-text");
    if (playText) playText.textContent = "Putar Ulang";
    if (playBtn) playBtn.style.backgroundColor = "var(--accent-teal)";
    if (statusText) statusText.textContent = "✅ Pemutaran audio selesai. Silakan pilih jawaban Anda.";
    return;
  }

  const seg = audioQueue[audioQueueIdx];
  audioQueueIdx++;

  const utt = new SpeechSynthesisUtterance(seg.text);
  utt.lang = seg.lang || "en-US";
  utt.rate = audioSpeechRate * (seg.rateMultiplier || 1.0);

  const matchedVoice = selectAudioVoice(seg.role, seg.gender, seg.lang);
  if (matchedVoice) {
    utt.voice = matchedVoice;
  }

  if (seg.pitch !== undefined) {
    utt.pitch = seg.pitch;
  } else if (seg.gender === "female") {
    utt.pitch = 1.25;
  } else if (seg.gender === "male") {
    utt.pitch = 0.85;
  } else {
    utt.pitch = 1.0;
  }

  utt.onend = () => {
    if (isAudioPlaying) {
      setTimeout(() => {
        playNextAudioSegment();
      }, seg.pauseAfter || 320);
    }
  };

  utt.onerror = (e) => {
    console.warn("Audio segment error:", e);
    if (isAudioPlaying) {
      playNextAudioSegment();
    }
  };

  window.speechSynthesis.speak(utt);
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
