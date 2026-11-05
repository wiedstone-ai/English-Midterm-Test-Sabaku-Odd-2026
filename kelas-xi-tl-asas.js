/**
 * ASESMEN SUMATIF AKHIR SEMESTER (ASAS) GASAL 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT LANJUT — TINGKAT XI (FASE F - TL)
 * Standar: TKA & AKM Literasi (Pilihan Ganda, Matrix Kompleks, & MCMA - CEFR A2 Menuju B1)
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

const SVG_PICTURES = {
  digitalManuscript: `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="22" width="64" height="46" rx="4" fill="#eff6ff" stroke="#2563eb"/><circle cx="50" cy="45" r="14" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3 3"/><line x1="50" y1="36" x2="50" y2="54" stroke="#1d4ed8"/><line x1="41" y1="45" x2="59" y2="45" stroke="#1d4ed8"/><path d="M26 32h14M26 38h10M60 52h14M60 58h10" stroke="#93c5fd"/><path d="M30 76l20-8 20 8" stroke="#475569" stroke-width="2"/><line x1="50" y1="68" x2="50" y2="84" stroke="#475569" stroke-width="3"/></svg>`,
  amphitheaterDrama: `<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 75c8-18 36-24 76 0" stroke="#78350f" stroke-width="3"/><path d="M22 62c6-14 28-18 56 0" stroke="#b45309" stroke-dasharray="2 2"/><polygon points="50,15 35,45 65,45" fill="#fef3c7" stroke="#d97706"/><circle cx="50" cy="30" r="5" fill="#d97706"/><path d="M38 48h24v20H38z" fill="#fef9c3" stroke="#ca8a04"/><path d="M42 48v20M58 48v20" stroke="#b45309"/><line x1="15" y1="84" x2="85" y2="84" stroke="#64748b"/></svg>`,
  climateObservatory: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 85c15-8 30-14 70-4" stroke="#16a34a" stroke-width="3"/><path d="M35 80V50c0-12 12-22 25-22s25 10 25 22v30H35z" fill="#ecfdf5" stroke="#059669"/><path d="M50 28v-12M42 16h16" stroke="#047857" stroke-width="2"/><circle cx="60" cy="46" r="6" fill="#fef08a" stroke="#ca8a04"/><line x1="60" y1="40" x2="75" y2="28" stroke="#0284c7" stroke-width="2.5"/><circle cx="75" cy="28" r="3" fill="#0284c7"/></svg>`,
  oilRefinery: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="50" width="30" height="35" fill="#f1f5f9"/><rect x="55" y="40" width="25" height="45" fill="#e2e8f0"/><line x1="35" y1="50" x2="35" y2="25" stroke="#64748b" stroke-width="2.5"/><line x1="68" y1="40" x2="68" y2="20" stroke="#64748b" stroke-width="2.5"/><path d="M30 20c3-5 7-5 10 0M63 15c3-5 7-5 10 0" stroke="#94a3b8"/></svg>`
};

function getGrade11TLAsasQuestions() {
  return [
    {
      id: 1,
      source: "Kemendikbudristek — Listening Practice Fase F Tingkat Lanjut",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number one. Look at the pictures. A high school student is reading an ancient handwritten book in the library, carefully taking notes on her laptop screen. Which picture matches the description?",
      audioSegments: [
        {
          text: "Number one. Look at the pictures in your test booklet. A high school student is reading an ancient handwritten book in the library, carefully taking notes on her laptop screen. Which picture matches the description?",
          lang: "en-US",
          role: "narrator"
        }
      ],
      prompt: "Which picture matches the student studying an ancient book in the library?",
      options: [
        {
          key: "A",
          svg: SVG_PICTURES.digitalManuscript,
          label: "A student reading an ancient book in a library"
        },
        {
          key: "B",
          svg: SVG_PICTURES.amphitheaterDrama,
          label: "Students performing a drama play on an outdoor stage"
        },
        {
          key: "C",
          svg: SVG_PICTURES.climateObservatory,
          label: "A round weather station on a green hill"
        },
        {
          key: "D",
          svg: SVG_PICTURES.oilRefinery,
          label: "An industrial factory with tall metal pipes"
        }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan seorang siswi yang membaca naskah kuno di perpustakaan sambil mencatat di laptop ('reading an ancient handwritten book in the library, carefully taking notes on her laptop screen'). Gambar yang sesuai adalah siswi yang sedang membaca buku di depan laptop.",
      grammarNote: "Present continuous with participle modifier: 'is reading an ancient book, carefully taking notes'."
    },
    {
      id: 2,
      source: "Kemendikbudristek — Listening Practice Fase F Tingkat Lanjut",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number two. Look at the pictures. On an outdoor stone stage, high school students are performing a traditional drama in colorful costumes. Which picture depicts this scene?",
      audioSegments: [
        {
          text: "Number two. Look at the pictures. On an outdoor stone stage, high school students are performing a traditional drama in colorful costumes. Which picture depicts this scene?",
          lang: "en-US",
          role: "narrator"
        }
      ],
      prompt: "Which picture depicts the students performing a drama play on the outdoor stage?",
      options: [
        {
          key: "A",
          svg: SVG_PICTURES.digitalManuscript,
          label: "A student reading an ancient book in a library"
        },
        {
          key: "B",
          svg: SVG_PICTURES.amphitheaterDrama,
          label: "Students performing a drama play on an outdoor stage"
        },
        {
          key: "C",
          svg: SVG_PICTURES.climateObservatory,
          label: "A round weather station on a green hill"
        },
        {
          key: "D",
          svg: SVG_PICTURES.oilRefinery,
          label: "An industrial factory with tall metal pipes"
        }
      ],
      correctAnswer: "B",
      explanation: "Audio mendeskripsikan pementasan drama tradisional siswa di panggung batu luar ruangan ('On an outdoor stone stage, high school students are performing a traditional drama in colorful costumes'). Gambar yang tepat adalah panggung pementasan drama luar ruangan.",
      grammarNote: "Prepositional phrase of place: 'On an outdoor stone stage, students are performing...'"
    },
    {
      id: 3,
      source: "Kemendikbudristek — Listening Practice Fase F Tingkat Lanjut",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number three. Look at the pictures. Built on a green hill overlooking the sea, this round weather station dome measures wind and sunlight to support clean energy. Which picture matches the description?",
      audioSegments: [
        {
          text: "Number three. Look at the pictures. Built on a green hill overlooking the sea, this round weather station dome measures wind and sunlight to support clean energy. Which picture matches the description?",
          lang: "en-US",
          role: "narrator"
        }
      ],
      prompt: "Which picture shows the round weather station on a coastal green hill?",
      options: [
        {
          key: "A",
          svg: SVG_PICTURES.digitalManuscript,
          label: "A student reading an ancient book in a library"
        },
        {
          key: "B",
          svg: SVG_PICTURES.amphitheaterDrama,
          label: "Students performing a drama play on an outdoor stage"
        },
        {
          key: "C",
          svg: SVG_PICTURES.climateObservatory,
          label: "A round weather station on a green hill"
        },
        {
          key: "D",
          svg: SVG_PICTURES.oilRefinery,
          label: "An industrial factory with tall metal pipes"
        }
      ],
      correctAnswer: "C",
      explanation: "Audio mendeskripsikan stasiun pengamatan cuaca berbentuk kubah di atas bukit hijau tepi pantai ('Built on a green hill overlooking the sea, this round weather station dome measures wind and sunlight'). Gambar yang tepat adalah kubah stasiun cuaca.",
      grammarNote: "Past Participle modifier: 'Built on a green hill... this round weather station measures...'"
    },
    {
      id: 4,
      source: "Modul Pembelajaran Bahasa Inggris Tingkat Lanjut Kelas XI — Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioSegments: [
        {
          role: "narrator",
          lang: "en-US",
          text: "Number four. Listen to a conversation between a student and an English teacher.",
          pauseAfter: 450
        },
        {
          role: "student_f",
          lang: "en-US",
          name: "Siti",
          text: "Excuse me, Sir. In the story of Rawa Pening that we studied yesterday, why did the proud villagers lose everything in the end?",
          pauseAfter: 350
        },
        {
          role: "teacher_m",
          lang: "en-US",
          name: "Mr. Budi",
          text: "Because of their pride, Siti. They looked down on the poor boy and refused to share their food. The story reminds us that true greatness comes from humility and kindness, while arrogance leads to failure.",
          pauseAfter: 400
        },
        {
          role: "narrator",
          lang: "en-US",
          text: "Question: What main moral lesson does the teacher explain in the conversation?",
          pauseAfter: 300
        }
      ],
      stimulusTitle: "Dialogue: Discussion on Folktale Moral Value",
      stimulusBody: "<p><strong>Student (Female):</strong> Excuse me, Sir. In the story of Rawa Pening that we studied yesterday, why did the proud villagers lose everything in the end?</p><p><strong>Teacher (Male):</strong> Because of their pride, Siti. They looked down on the poor boy and refused to share their food. The story reminds us that true greatness comes from humility and kindness, while arrogance leads to failure.</p>",
      prompt: "What main moral lesson does the teacher explain in the conversation?",
      options: [
        { key: "A", text: "True greatness comes from humility and kindness, while arrogance leads to failure." },
        { key: "B", text: "Physical strength alone is enough to gain true respect." },
        { key: "C", text: "People should only think about their own wealth." },
        { key: "D", text: "Traditional stories have no useful lessons for students today." }
      ],
      correctAnswer: "A",
      explanation: "Guru menjelaskan bahwa kebesaran sejati lahir dari kerendahan hati dan kebaikan, sedangkan kesombongan membawa kehancuran ('true greatness comes from humility and kindness, while arrogance leads to failure').",
      grammarNote: "Conjunction of contrast: 'while arrogance leads to failure'."
    },
    {
      id: 5,
      source: "Modul Pembelajaran Bahasa Inggris Tingkat Lanjut Kelas XI — Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioSegments: [
        {
          role: "narrator",
          lang: "en-US",
          text: "Number five. Listen to two high school students discussing modern technology.",
          pauseAfter: 450
        },
        {
          role: "student_m",
          lang: "en-US",
          name: "Rizky",
          text: "What do you think about students using AI tools like ChatGPT to write their English book reviews?",
          pauseAfter: 350
        },
        {
          role: "student_f",
          lang: "en-US",
          name: "Dewi",
          text: "I think AI can help give ideas or check grammar. However, we must write our own sentences and think for ourselves. If we simply copy everything, we won't learn.",
          pauseAfter: 350
        },
        {
          role: "student_m",
          lang: "en-US",
          name: "Rizky",
          text: "I completely agree. Technology should support our learning, not replace our own brain.",
          pauseAfter: 400
        },
        {
          role: "narrator",
          lang: "en-US",
          text: "Question: What do both students agree on regarding the use of AI in learning?",
          pauseAfter: 300
        }
      ],
      stimulusTitle: "Dialogue: Using AI Responsibly for School",
      stimulusBody: "<p><strong>Speaker 1 (Male):</strong> What do you think about students using AI tools like ChatGPT to write their English book reviews?</p><p><strong>Speaker 2 (Female):</strong> I think AI can help give ideas or check grammar. However, we must write our own sentences and think for ourselves. If we simply copy everything, we won't learn.</p><p><strong>Speaker 1 (Male):</strong> I completely agree. Technology should support our learning, not replace our own brain.</p>",
      prompt: "What do both students agree on regarding the use of AI in learning?",
      options: [
        { key: "A", text: "AI can be a helpful guide, but students must write their own thoughts." },
        { key: "B", text: "AI software should be banned completely from all schools." },
        { key: "C", text: "Students should copy and paste AI essays directly without checking." },
        { key: "D", text: "Students do not need to practice writing essays anymore." }
      ],
      correctAnswer: "A",
      explanation: "Kedua siswa sepakat bahwa kecerdasan buatan (AI) dapat membantu memberi ide atau memeriksa tata bahasa, tetapi siswa harus tetap menyusun pemikiran mereka sendiri ('AI can help give ideas... but we must write our own sentences').",
      grammarNote: "Modal verb of obligation: 'we must write our own sentences and think for ourselves'."
    },
    {
      id: 6,
      source: "Modul Pembelajaran Bahasa Inggris Tingkat Lanjut Kelas XI — Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioSegments: [
        {
          role: "narrator",
          lang: "en-US",
          text: "Number six. Listen to two student council members discussing an environmental project.",
          pauseAfter: 450
        },
        {
          role: "student_m",
          lang: "en-US",
          name: "Fajar",
          text: "Our student council proposal for the green school campaign is ready.",
          pauseAfter: 300
        },
        {
          role: "student_f",
          lang: "en-US",
          name: "Rina",
          text: "That is great! What is the main action we will ask students to take?",
          pauseAfter: 350
        },
        {
          role: "student_m",
          lang: "en-US",
          name: "Fajar",
          text: "We want every student to bring their own reusable water bottle and lunch box to school. This simple habit will reduce plastic waste in our canteen.",
          pauseAfter: 400
        },
        {
          role: "narrator",
          lang: "en-US",
          text: "Question: What is the main goal of the student council proposal?",
          pauseAfter: 300
        }
      ],
      stimulusTitle: "Dialogue: Green School Campaign Proposal",
      stimulusBody: "<p><strong>Speaker 1 (Male):</strong> Our student council proposal for the green school campaign is ready.</p><p><strong>Speaker 2 (Female):</strong> That is great! What is the main action we will ask students to take?</p><p><strong>Speaker 1 (Male):</strong> We want every student to bring their own reusable water bottle and lunch box to school. This simple habit will reduce plastic waste in our canteen.</p>",
      prompt: "What is the main goal of the student council proposal?",
      options: [
        { key: "A", text: "To reduce plastic waste by encouraging reusable bottles and lunch boxes." },
        { key: "B", text: "To close down the school canteen permanently during recess." },
        { key: "C", text: "To sell expensive bottled water to students." },
        { key: "D", text: "To stop all green activities in the school." }
      ],
      correctAnswer: "A",
      explanation: "Tujuan proposal OSIS adalah mengurangi sampah plastik di sekolah dengan mengajak siswa membawa botol dan kotak makan yang dapat digunakan kembali ('reduce plastic waste in our canteen by bringing reusable water bottles and lunch boxes').",
      grammarNote: "Infinitive of purpose: 'to reduce plastic waste'."
    },
    {
      id: 7,
      source: "Kemendikbudristek — Listening Monologue: Indonesian Folktales",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        {
          role: "narrator",
          lang: "en-US",
          text: "Questions seven and eight are based on the following short talk by an English teacher.",
          pauseAfter: 400
        },
        {
          role: "teacher_m",
          lang: "en-US",
          name: "Mr. Budi",
          text: "Good morning, class. Today we will explore Indonesian folktales such as the Legend of Rawa Pening. Our ancestors created these stories not only to entertain, but also to teach important life lessons. They teach us to respect our parents, keep our promises, and help people who are in need. By reading these traditional stories in English, we appreciate our cultural heritage while improving our reading and communication skills.",
          pauseAfter: 500
        },
        {
          role: "narrator",
          lang: "en-US",
          text: "Number seven. According to the speaker, what is the main purpose of traditional folktales?",
          pauseAfter: 350
        }
      ],
      prompt: "According to the speaker, what is the main purpose of traditional folktales?",
      options: [
        { key: "A", text: "To discourage young people from reading modern literature." },
        { key: "B", text: "To teach students how to build ancient stone monuments." },
        { key: "C", text: "To teach important life lessons such as respect, honesty, and kindness." },
        { key: "D", text: "To explain scientific discoveries about lakes and rivers." }
      ],
      correctAnswer: "C",
      explanation: "Pembicara menyatakan bahwa dongeng tradisional bertujuan mengajarkan nilai-nilai kehidupan yang penting: 'to teach important life lessons... respect our parents, keep our promises, and help people in need'.",
      grammarNote: "Not only... but also structure: 'not only to entertain, but also to teach important life lessons'."
    },
    {
      id: 8,
      source: "Kemendikbudristek — Listening Monologue: Indonesian Folktales",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        {
          role: "teacher_m",
          lang: "en-US",
          name: "Mr. Budi",
          text: "By reading these traditional stories in English, we appreciate our cultural heritage while improving our reading and communication skills.",
          pauseAfter: 350
        },
        {
          role: "narrator",
          lang: "en-US",
          text: "Number eight. How does studying folktales benefit high school students according to the speaker?",
          pauseAfter: 300
        }
      ],
      prompt: "How does studying folktales benefit high school students according to the speaker?",
      options: [
        { key: "A", text: "It teaches students how to sail across deep lakes." },
        { key: "B", text: "It guarantees that all students will become fiction authors." },
        { key: "C", text: "It replaces the need to study modern science and technology." },
        { key: "D", text: "It preserves cultural heritage while improving English reading skills." }
      ],
      correctAnswer: "D",
      explanation: "Pembicara menjelaskan bahwa mempelajari cerita rakyat dalam bahasa Inggris membantu melestarikan warisan budaya sekaligus meningkatkan keterampilan membaca dan komunikasi bahasa Inggris ('appreciate our cultural heritage while improving our reading and communication skills').",
      grammarNote: "Preposition with gerund: 'By reading these traditional stories in English...'"
    },
    {
      id: 9,
      source: "Kemendikbudristek — Listening Monologue: Healthy Digital Habits",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        {
          role: "narrator",
          lang: "en-US",
          text: "Questions nine and ten are based on the following talk by a school counselor.",
          pauseAfter: 400
        },
        {
          role: "counselor_f",
          lang: "en-US",
          name: "Mrs. Maya",
          text: "Good morning, students. Today, many teenagers spend four to six hours every day looking at their phone screens. While the internet helps us study and connect with friends, staying up late scrolling on social media often leads to lack of sleep, poor focus in class, and feelings of stress. To build healthy digital habits, set a daily time limit for your phone, silence notifications while studying, and always check news before sharing it with others.",
          pauseAfter: 500
        },
        {
          role: "narrator",
          lang: "en-US",
          text: "Number nine. According to the counselor, what problems can happen from spending too much time on phones?",
          pauseAfter: 350
        }
      ],
      prompt: "According to the counselor, what problems can happen from spending too much time on phones?",
      options: [
        { key: "A", text: "Lack of sleep, poor focus during classes, and feelings of stress." },
        { key: "B", text: "A sudden loss of telephone signal everywhere." },
        { key: "C", text: "Inability to save documents on school computers." },
        { key: "D", text: "A lower monthly internet bill for families." }
      ],
      correctAnswer: "A",
      explanation: "Konselor menjelaskan dampak negatif terlalu banyak waktu di depan layar ponsel: kurang tidur, sulit fokus di kelas, dan timbulnya rasa cemas/stres ('leads to lack of sleep, poor focus in class, and feelings of stress').",
      grammarNote: "Cause and effect verb phrase: 'leads to lack of sleep'."
    },
    {
      id: 10,
      source: "Kemendikbudristek — Listening Monologue: Healthy Digital Habits",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        {
          role: "counselor_f",
          lang: "en-US",
          name: "Mrs. Maya",
          text: "To build healthy digital habits, set a daily time limit for your phone, silence notifications while studying, and always check news before sharing it with others.",
          pauseAfter: 350
        },
        {
          role: "narrator",
          lang: "en-US",
          text: "Number ten. What practical habit does the counselor suggest to maintain a healthy lifestyle?",
          pauseAfter: 300
        }
      ],
      prompt: "What practical habit does the counselor suggest to maintain a healthy lifestyle?",
      options: [
        { key: "A", text: "Deleting all social accounts and never using smartphones again." },
        { key: "B", text: "Setting daily phone limits and checking news before sharing it." },
        { key: "C", text: "Sharing every breaking headline immediately without reading it." },
        { key: "D", text: "Using smartphones late at night instead of resting." }
      ],
      correctAnswer: "B",
      explanation: "Konselor menyarankan kebiasaan praktis: membuat batasan waktu harian bermain ponsel, mematikan notifikasi saat belajar, dan memverifikasi berita sebelum membagikannya ('set a daily time limit... and check news before sharing').",
      grammarNote: "Imperative sentences for advice: 'set a daily time limit', 'silence notifications'."
    },
    {
      id: 11,
      source: "Cerita Rakyat Jawa Tengah — The Legend of Rawa Pening (Fase F)",
      type: "single_choice",
      title: "Reading Section: Narrative Comprehension",
      stimulusTitle: "Text 1: The Legend of Rawa Pening",
      stimulusBody: "Once upon a time in a peaceful village called Ngasem in Central Java, there lived a humble woman named Endang Sawitri. She gave birth to an extraordinary boy named Baru Klinthing. Because of a strange illness, Baru Klinthing had many painful wounds on his skin that caused an unpleasant smell. As a result, many villagers avoided him. When he grew older, Baru Klinthing decided to travel to find his father, Ki Hajar Salokantara, who was meditating on the sacred slopes of Mount Telomoyo.<br><br>During his long journey through the valley, Baru Klinthing arrived at a rich village called Pathok. The villagers were holding a grand harvest festival. Delicious roasted meat and rice were served in abundance, and the village square was full of joyful music and laughter. Exhausted and very hungry, the poor boy approached the gathering and politely asked for a small portion of leftover food.<br><br>However, the wealthy villagers were proud and selfish. Instead of helping him, they laughed at his ragged clothes and dirty appearance. They threw stones and cruelly chased him out of the village. Sad and hungry, Baru Klinthing walked toward the quiet outskirts of the village. There, in a small wooden house, lived an elderly widow named Mbok Rondo.<br><br>Unlike the proud villagers, Mbok Rondo welcomed the boy warmly into her home. Seeing his condition, she generously offered him warm rice, fresh vegetables, and cool water. Baru Klinthing was deeply touched by her kindness. Before leaving, he whispered an important warning: 'Mbok, if you hear a loud rumbling sound from the village square, please prepare your wooden mortar (lesung) and use it like a boat.'<br><br>Baru Klinthing then walked back to the busy festival square. Standing before the crowd, he drove a single wooden stick deep into the ground. He challenged the proud villagers: 'If you are truly strong and mighty, try to pull this simple stick out of the earth!'<br><br>The villagers laughed scornfully. One by one, the strongest men stepped forward and pulled with all their strength, but the stick did not move at all. Even when several men pulled together, it stayed firmly in the ground. Finally, Baru Klinthing stepped forward and easily pulled the stick out with one hand.<br><br>Immediately, fresh water gushed out of the hole like a powerful fountain. The water rose rapidly, submerging the houses, streets, and fields. The villagers panicked and tried to run, but the rushing flood swallowed the entire village, transforming the area into a vast lake known today as Rawa Pening. Only kind Mbok Rondo survived safely, floating on her wooden mortar. This legend reminds us that true worth is found in kindness and humility, not in outward wealth or pride.",
      prompt: "What is the primary moral lesson conveyed throughout the story of Baru Klinthing?",
      options: [
        { key: "A", text: "Traveling alone through mountain forests is dangerous for young children." },
        { key: "B", text: "Harvest festivals must always be held during dry weather." },
        { key: "C", text: "True human worth lies in kindness and humility rather than outward wealth or social status." },
        { key: "D", text: "Wealthy villagers are always superior to poor travelers." }
      ],
      correctAnswer: "C",
      explanation: "Nilai moral utama cerita rakyat Rawa Pening adalah bahwa nilai sejati seseorang ditentukan oleh kebaikan dan kerendahan hati, bukan kekayaan lahiriah atau kesombongan rupa ('true human worth is found in kindness and humility, not in outward wealth or pride').",
      grammarNote: "Conjunction of contrast: 'rather than outward wealth'."
    },
    {
      id: 12,
      source: "Cerita Rakyat Jawa Tengah — The Legend of Rawa Pening (Fase F)",
      type: "single_choice",
      title: "Reading Section: Narrative Comprehension",
      stimulusTitle: "Text 1: The Legend of Rawa Pening",
      stimulusBody: "Once upon a time in a peaceful village called Ngasem in Central Java, there lived a humble woman named Endang Sawitri. She gave birth to an extraordinary boy named Baru Klinthing. Because of a strange illness, Baru Klinthing had many painful wounds on his skin that caused an unpleasant smell. As a result, many villagers avoided him. When he grew older, Baru Klinthing decided to travel to find his father, Ki Hajar Salokantara, who was meditating on the sacred slopes of Mount Telomoyo.<br><br>During his long journey through the valley, Baru Klinthing arrived at a rich village called Pathok. The villagers were holding a grand harvest festival. Delicious roasted meat and rice were served in abundance, and the village square was full of joyful music and laughter. Exhausted and very hungry, the poor boy approached the gathering and politely asked for a small portion of leftover food.<br><br>However, the wealthy villagers were proud and selfish. Instead of helping him, they laughed at his ragged clothes and dirty appearance. They threw stones and cruelly chased him out of the village. Sad and hungry, Baru Klinthing walked toward the quiet outskirts of the village. There, in a small wooden house, lived an elderly widow named Mbok Rondo.<br><br>Unlike the proud villagers, Mbok Rondo welcomed the boy warmly into her home. Seeing his condition, she generously offered him warm rice, fresh vegetables, and cool water. Baru Klinthing was deeply touched by her kindness. Before leaving, he whispered an important warning: 'Mbok, if you hear a loud rumbling sound from the village square, please prepare your wooden mortar (lesung) and use it like a boat.'<br><br>Baru Klinthing then walked back to the busy festival square. Standing before the crowd, he drove a single wooden stick deep into the ground. He challenged the proud villagers: 'If you are truly strong and mighty, try to pull this simple stick out of the earth!'<br><br>The villagers laughed scornfully. One by one, the strongest men stepped forward and pulled with all their strength, but the stick did not move at all. Even when several men pulled together, it stayed firmly in the ground. Finally, Baru Klinthing stepped forward and easily pulled the stick out with one hand.<br><br>Immediately, fresh water gushed out of the hole like a powerful fountain. The water rose rapidly, submerging the houses, streets, and fields. The villagers panicked and tried to run, but the rushing flood swallowed the entire village, transforming the area into a vast lake known today as Rawa Pening. Only kind Mbok Rondo survived safely, floating on her wooden mortar. This legend reminds us that true worth is found in kindness and humility, not in outward wealth or pride.",
      prompt: "According to paragraph 3, why did the villagers of Pathok cruelly chase Baru Klinthing away?",
      options: [
        { key: "A", text: "He refused to join their traditional dances in the village square." },
        { key: "B", text: "They were frightened because he carried dangerous weapons." },
        { key: "C", text: "All the food prepared for the harvest festival had already finished." },
        { key: "D", text: "They were proud and judged him solely by his ragged clothes and dirty appearance." }
      ],
      correctAnswer: "D",
      explanation: "Paragraf 3 menyatakan secara jelas bahwa warga desa bersikap angkuh dan mencemooh pakaian lusuh serta rupa kotor Baru Klinthing ('the wealthy villagers were proud and selfish... laughed at his ragged clothes and dirty appearance').",
      grammarNote: "Adverbial modifier: 'judged him solely by his ragged clothes'."
    },
    {
      id: 13,
      source: "Cerita Rakyat Jawa Tengah — The Legend of Rawa Pening (Fase F)",
      type: "single_choice",
      title: "Reading Section: Narrative Comprehension",
      stimulusTitle: "Text 1: The Legend of Rawa Pening",
      stimulusBody: "Once upon a time in a peaceful village called Ngasem in Central Java, there lived a humble woman named Endang Sawitri. She gave birth to an extraordinary boy named Baru Klinthing. Because of a strange illness, Baru Klinthing had many painful wounds on his skin that caused an unpleasant smell. As a result, many villagers avoided him. When he grew older, Baru Klinthing decided to travel to find his father, Ki Hajar Salokantara, who was meditating on the sacred slopes of Mount Telomoyo.<br><br>During his long journey through the valley, Baru Klinthing arrived at a rich village called Pathok. The villagers were holding a grand harvest festival. Delicious roasted meat and rice were served in abundance, and the village square was full of joyful music and laughter. Exhausted and very hungry, the poor boy approached the gathering and politely asked for a small portion of leftover food.<br><br>However, the wealthy villagers were proud and selfish. Instead of helping him, they laughed at his ragged clothes and dirty appearance. They threw stones and cruelly chased him out of the village. Sad and hungry, Baru Klinthing walked toward the quiet outskirts of the village. There, in a small wooden house, lived an elderly widow named Mbok Rondo.<br><br>Unlike the proud villagers, Mbok Rondo welcomed the boy warmly into her home. Seeing his condition, she generously offered him warm rice, fresh vegetables, and cool water. Baru Klinthing was deeply touched by her kindness. Before leaving, he whispered an important warning: 'Mbok, if you hear a loud rumbling sound from the village square, please prepare your wooden mortar (lesung) and use it like a boat.'<br><br>Baru Klinthing then walked back to the busy festival square. Standing before the crowd, he drove a single wooden stick deep into the ground. He challenged the proud villagers: 'If you are truly strong and mighty, try to pull this simple stick out of the earth!'<br><br>The villagers laughed scornfully. One by one, the strongest men stepped forward and pulled with all their strength, but the stick did not move at all. Even when several men pulled together, it stayed firmly in the ground. Finally, Baru Klinthing stepped forward and easily pulled the stick out with one hand.<br><br>Immediately, fresh water gushed out of the hole like a powerful fountain. The water rose rapidly, submerging the houses, streets, and fields. The villagers panicked and tried to run, but the rushing flood swallowed the entire village, transforming the area into a vast lake known today as Rawa Pening. Only kind Mbok Rondo survived safely, floating on her wooden mortar. This legend reminds us that true worth is found in kindness and humility, not in outward wealth or pride.",
      prompt: "How did Mbok Rondo treat Baru Klinthing when he arrived at her cottage?",
      options: [
        { key: "A", text: "She showed sincere compassion by offering him warm food and water." },
        { key: "B", text: "She demanded money before allowing him to sit on her porch." },
        { key: "C", text: "She ordered her neighbors to chase him into the dark forest." },
        { key: "D", text: "She locked her door and refused to speak with him." }
      ],
      correctAnswer: "A",
      explanation: "Mbok Rondo menyambut Baru Klinthing dengan ketulusan hati dan memberinya nasi hangat, sayuran segar, dan air minum ('welcomed the boy warmly into her home... offered him warm rice, fresh vegetables, and cool water').",
      grammarNote: "Past simple: 'she generously offered him warm rice'."
    },
    {
      id: 14,
      source: "Cerita Rakyat Jawa Tengah — The Legend of Rawa Pening (Fase F)",
      type: "single_choice",
      title: "Reading Section: Narrative Comprehension",
      stimulusTitle: "Text 1: The Legend of Rawa Pening",
      stimulusBody: "Once upon a time in a peaceful village called Ngasem in Central Java, there lived a humble woman named Endang Sawitri. She gave birth to an extraordinary boy named Baru Klinthing. Because of a strange illness, Baru Klinthing had many painful wounds on his skin that caused an unpleasant smell. As a result, many villagers avoided him. When he grew older, Baru Klinthing decided to travel to find his father, Ki Hajar Salokantara, who was meditating on the sacred slopes of Mount Telomoyo.<br><br>During his long journey through the valley, Baru Klinthing arrived at a rich village called Pathok. The villagers were holding a grand harvest festival. Delicious roasted meat and rice were served in abundance, and the village square was full of joyful music and laughter. Exhausted and very hungry, the poor boy approached the gathering and politely asked for a small portion of leftover food.<br><br>However, the wealthy villagers were proud and selfish. Instead of helping him, they laughed at his ragged clothes and dirty appearance. They threw stones and cruelly chased him out of the village. Sad and hungry, Baru Klinthing walked toward the quiet outskirts of the village. There, in a small wooden house, lived an elderly widow named Mbok Rondo.<br><br>Unlike the proud villagers, Mbok Rondo welcomed the boy warmly into her home. Seeing his condition, she generously offered him warm rice, fresh vegetables, and cool water. Baru Klinthing was deeply touched by her kindness. Before leaving, he whispered an important warning: 'Mbok, if you hear a loud rumbling sound from the village square, please prepare your wooden mortar (lesung) and use it like a boat.'<br><br>Baru Klinthing then walked back to the busy festival square. Standing before the crowd, he drove a single wooden stick deep into the ground. He challenged the proud villagers: 'If you are truly strong and mighty, try to pull this simple stick out of the earth!'<br><br>The villagers laughed scornfully. One by one, the strongest men stepped forward and pulled with all their strength, but the stick did not move at all. Even when several men pulled together, it stayed firmly in the ground. Finally, Baru Klinthing stepped forward and easily pulled the stick out with one hand.<br><br>Immediately, fresh water gushed out of the hole like a powerful fountain. The water rose rapidly, submerging the houses, streets, and fields. The villagers panicked and tried to run, but the rushing flood swallowed the entire village, transforming the area into a vast lake known today as Rawa Pening. Only kind Mbok Rondo survived safely, floating on her wooden mortar. This legend reminds us that true worth is found in kindness and humility, not in outward wealth or pride.",
      prompt: "The word 'avoided' in paragraph 1 ('many villagers avoided him') is closest in meaning to...",
      options: [
        { key: "A", text: "warmly invited" },
        { key: "B", text: "stayed away from" },
        { key: "C", text: "loudly praised" },
        { key: "D", text: "financially supported" }
      ],
      correctAnswer: "B",
      explanation: "Kata 'avoided' bermakna menjauhi atau menghindar dari seseorang ('stayed away from').",
      grammarNote: "Synonym context: avoid = stay away from."
    },
    {
      id: 15,
      source: "Cerita Rakyat Jawa Tengah — The Legend of Rawa Pening (Fase F)",
      type: "single_choice",
      title: "Reading Section: Narrative Comprehension",
      stimulusTitle: "Text 1: The Legend of Rawa Pening",
      stimulusBody: "Once upon a time in a peaceful village called Ngasem in Central Java, there lived a humble woman named Endang Sawitri. She gave birth to an extraordinary boy named Baru Klinthing. Because of a strange illness, Baru Klinthing had many painful wounds on his skin that caused an unpleasant smell. As a result, many villagers avoided him. When he grew older, Baru Klinthing decided to travel to find his father, Ki Hajar Salokantara, who was meditating on the sacred slopes of Mount Telomoyo.<br><br>During his long journey through the valley, Baru Klinthing arrived at a rich village called Pathok. The villagers were holding a grand harvest festival. Delicious roasted meat and rice were served in abundance, and the village square was full of joyful music and laughter. Exhausted and very hungry, the poor boy approached the gathering and politely asked for a small portion of leftover food.<br><br>However, the wealthy villagers were proud and selfish. Instead of helping him, they laughed at his ragged clothes and dirty appearance. They threw stones and cruelly chased him out of the village. Sad and hungry, Baru Klinthing walked toward the quiet outskirts of the village. There, in a small wooden house, lived an elderly widow named Mbok Rondo.<br><br>Unlike the proud villagers, Mbok Rondo welcomed the boy warmly into her home. Seeing his condition, she generously offered him warm rice, fresh vegetables, and cool water. Baru Klinthing was deeply touched by her kindness. Before leaving, he whispered an important warning: 'Mbok, if you hear a loud rumbling sound from the village square, please prepare your wooden mortar (lesung) and use it like a boat.'<br><br>Baru Klinthing then walked back to the busy festival square. Standing before the crowd, he drove a single wooden stick deep into the ground. He challenged the proud villagers: 'If you are truly strong and mighty, try to pull this simple stick out of the earth!'<br><br>The villagers laughed scornfully. One by one, the strongest men stepped forward and pulled with all their strength, but the stick did not move at all. Even when several men pulled together, it stayed firmly in the ground. Finally, Baru Klinthing stepped forward and easily pulled the stick out with one hand.<br><br>Immediately, fresh water gushed out of the hole like a powerful fountain. The water rose rapidly, submerging the houses, streets, and fields. The villagers panicked and tried to run, but the rushing flood swallowed the entire village, transforming the area into a vast lake known today as Rawa Pening. Only kind Mbok Rondo survived safely, floating on her wooden mortar. This legend reminds us that true worth is found in kindness and humility, not in outward wealth or pride.",
      prompt: "What was the significance of the stick-pulling challenge organized by Baru Klinthing?",
      options: [
        { key: "A", text: "It was intended to select the best farmer for the planting season." },
        { key: "B", text: "It was a sporting game designed to choose a new village head." },
        { key: "C", text: "It exposed the false pride of the boastful villagers who could not pull it out." },
        { key: "D", text: "It was meant to build a wooden fence around the festival ground." }
      ],
      correctAnswer: "C",
      explanation: "Tantangan mencabut lidi membuktikan kepalsuan kesombongan warga desa yang menganggap diri mereka paling kuat, namun tak satu pun dari mereka sanggup mencabut lidi tersebut ('exposed the false pride of the boastful villagers').",
      grammarNote: "Relative clause: 'who could not pull it out'."
    },
    {
      id: 16,
      source: "AKM Literasi Membaca — Soal Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Narrative Plot & Character Actions",
      stimulusTitle: "Text 1: The Legend of Rawa Pening",
      stimulusBody: "Once upon a time in a peaceful village called Ngasem in Central Java, there lived a humble woman named Endang Sawitri. She gave birth to an extraordinary boy named Baru Klinthing. Because of a strange illness, Baru Klinthing had many painful wounds on his skin that caused an unpleasant smell. As a result, many villagers avoided him. When he grew older, Baru Klinthing decided to travel to find his father, Ki Hajar Salokantara, who was meditating on the sacred slopes of Mount Telomoyo.<br><br>During his long journey through the valley, Baru Klinthing arrived at a rich village called Pathok. The villagers were holding a grand harvest festival. Delicious roasted meat and rice were served in abundance, and the village square was full of joyful music and laughter. Exhausted and very hungry, the poor boy approached the gathering and politely asked for a small portion of leftover food.<br><br>However, the wealthy villagers were proud and selfish. Instead of helping him, they laughed at his ragged clothes and dirty appearance. They threw stones and cruelly chased him out of the village. Sad and hungry, Baru Klinthing walked toward the quiet outskirts of the village. There, in a small wooden house, lived an elderly widow named Mbok Rondo.<br><br>Unlike the proud villagers, Mbok Rondo welcomed the boy warmly into her home. Seeing his condition, she generously offered him warm rice, fresh vegetables, and cool water. Baru Klinthing was deeply touched by her kindness. Before leaving, he whispered an important warning: 'Mbok, if you hear a loud rumbling sound from the village square, please prepare your wooden mortar (lesung) and use it like a boat.'<br><br>Baru Klinthing then walked back to the busy festival square. Standing before the crowd, he drove a single wooden stick deep into the ground. He challenged the proud villagers: 'If you are truly strong and mighty, try to pull this simple stick out of the earth!'<br><br>The villagers laughed scornfully. One by one, the strongest men stepped forward and pulled with all their strength, but the stick did not move at all. Even when several men pulled together, it stayed firmly in the ground. Finally, Baru Klinthing stepped forward and easily pulled the stick out with one hand.<br><br>Immediately, fresh water gushed out of the hole like a powerful fountain. The water rose rapidly, submerging the houses, streets, and fields. The villagers panicked and tried to run, but the rushing flood swallowed the entire village, transforming the area into a vast lake known today as Rawa Pening. Only kind Mbok Rondo survived safely, floating on her wooden mortar. This legend reminds us that true worth is found in kindness and humility, not in outward wealth or pride.",
      prompt: "Based on Text 1, determine whether each statement regarding the narrative plot is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "Baru Klinthing was mocked and chased away by the villagers of Pathok because of his ragged appearance.",
          isCorrect: true
        },
        {
          statement: "Mbok Rondo refused to offer food or shelter to the hungry boy when he arrived at her cottage.",
          isCorrect: false
        },
        {
          statement: "None of the proud villagers was able to pull out the small wooden stick from the earth.",
          isCorrect: true
        },
        {
          statement: "The entire village was flooded and transformed into a lake named Rawa Pening.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Baru Klinthing diusir oleh warga Pathok karena penampilannya yang lusuh.<br>• Pernyataan 2: SALAH — Mbok Rondo menyambut hangat dan memberi makan Baru Klinthing.<br>• Pernyataan 3: BENAR — Tak satu pun warga sombong yang mampu mencabut lidi dari tanah.<br>• Pernyataan 4: BENAR — Seluruh desa tenggelam oleh air bah dan berubah menjadi danau Rawa Pening.",
      grammarNote: "Reading comprehension of explicit narrative facts."
    },
    {
      id: 17,
      source: "AKM Literasi Membaca — Soal Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Character Traits Analysis",
      stimulusTitle: "Text 1: The Legend of Rawa Pening",
      stimulusBody: "Once upon a time in a peaceful village called Ngasem in Central Java, there lived a humble woman named Endang Sawitri. She gave birth to an extraordinary boy named Baru Klinthing. Because of a strange illness, Baru Klinthing had many painful wounds on his skin that caused an unpleasant smell. As a result, many villagers avoided him. When he grew older, Baru Klinthing decided to travel to find his father, Ki Hajar Salokantara, who was meditating on the sacred slopes of Mount Telomoyo.<br><br>During his long journey through the valley, Baru Klinthing arrived at a rich village called Pathok. The villagers were holding a grand harvest festival. Delicious roasted meat and rice were served in abundance, and the village square was full of joyful music and laughter. Exhausted and very hungry, the poor boy approached the gathering and politely asked for a small portion of leftover food.<br><br>However, the wealthy villagers were proud and selfish. Instead of helping him, they laughed at his ragged clothes and dirty appearance. They threw stones and cruelly chased him out of the village. Sad and hungry, Baru Klinthing walked toward the quiet outskirts of the village. There, in a small wooden house, lived an elderly widow named Mbok Rondo.<br><br>Unlike the proud villagers, Mbok Rondo welcomed the boy warmly into her home. Seeing his condition, she generously offered him warm rice, fresh vegetables, and cool water. Baru Klinthing was deeply touched by her kindness. Before leaving, he whispered an important warning: 'Mbok, if you hear a loud rumbling sound from the village square, please prepare your wooden mortar (lesung) and use it like a boat.'<br><br>Baru Klinthing then walked back to the busy festival square. Standing before the crowd, he drove a single wooden stick deep into the ground. He challenged the proud villagers: 'If you are truly strong and mighty, try to pull this simple stick out of the earth!'<br><br>The villagers laughed scornfully. One by one, the strongest men stepped forward and pulled with all their strength, but the stick did not move at all. Even when several men pulled together, it stayed firmly in the ground. Finally, Baru Klinthing stepped forward and easily pulled the stick out with one hand.<br><br>Immediately, fresh water gushed out of the hole like a powerful fountain. The water rose rapidly, submerging the houses, streets, and fields. The villagers panicked and tried to run, but the rushing flood swallowed the entire village, transforming the area into a vast lake known today as Rawa Pening. Only kind Mbok Rondo survived safely, floating on her wooden mortar. This legend reminds us that true worth is found in kindness and humility, not in outward wealth or pride.",
      prompt: "Based on the character traits shown in Text 1, determine whether each statement is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "The villagers of Pathok showed great kindness and respect to poor strangers.",
          isCorrect: false
        },
        {
          statement: "Mbok Rondo was a generous and caring woman who helped someone in need.",
          isCorrect: true
        },
        {
          statement: "Baru Klinthing was grateful to Mbok Rondo and warned her before the flood arrived.",
          isCorrect: true
        },
        {
          statement: "The arrogant villagers apologized to Baru Klinthing before the water came out.",
          isCorrect: false
        }
      ],
      explanation: "• Pernyataan 1: SALAH — Warga Pathok bersikap angkuh dan kejam kepada orang miskin.<br>• Pernyataan 2: BENAR — Mbok Rondo memiliki watak dermawan dan tulus hati.<br>• Pernyataan 3: BENAR — Baru Klinthing membalas kebaikan Mbok Rondo dengan memberi peringatan penting.<br>• Pernyataan 4: SALAH — Warga desa tidak pernah meminta maaf, mereka hanya panik saat air bah datang.",
      grammarNote: "Inference of character attitudes and behaviors."
    },
    {
      id: 18,
      source: "AKM Literasi Membaca — Soal Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Cause and Effect Relations",
      stimulusTitle: "Text 1: The Legend of Rawa Pening",
      stimulusBody: "Once upon a time in a peaceful village called Ngasem in Central Java, there lived a humble woman named Endang Sawitri. She gave birth to an extraordinary boy named Baru Klinthing. Because of a strange illness, Baru Klinthing had many painful wounds on his skin that caused an unpleasant smell. As a result, many villagers avoided him. When he grew older, Baru Klinthing decided to travel to find his father, Ki Hajar Salokantara, who was meditating on the sacred slopes of Mount Telomoyo.<br><br>During his long journey through the valley, Baru Klinthing arrived at a rich village called Pathok. The villagers were holding a grand harvest festival. Delicious roasted meat and rice were served in abundance, and the village square was full of joyful music and laughter. Exhausted and very hungry, the poor boy approached the gathering and politely asked for a small portion of leftover food.<br><br>However, the wealthy villagers were proud and selfish. Instead of helping him, they laughed at his ragged clothes and dirty appearance. They threw stones and cruelly chased him out of the village. Sad and hungry, Baru Klinthing walked toward the quiet outskirts of the village. There, in a small wooden house, lived an elderly widow named Mbok Rondo.<br><br>Unlike the proud villagers, Mbok Rondo welcomed the boy warmly into her home. Seeing his condition, she generously offered him warm rice, fresh vegetables, and cool water. Baru Klinthing was deeply touched by her kindness. Before leaving, he whispered an important warning: 'Mbok, if you hear a loud rumbling sound from the village square, please prepare your wooden mortar (lesung) and use it like a boat.'<br><br>Baru Klinthing then walked back to the busy festival square. Standing before the crowd, he drove a single wooden stick deep into the ground. He challenged the proud villagers: 'If you are truly strong and mighty, try to pull this simple stick out of the earth!'<br><br>The villagers laughed scornfully. One by one, the strongest men stepped forward and pulled with all their strength, but the stick did not move at all. Even when several men pulled together, it stayed firmly in the ground. Finally, Baru Klinthing stepped forward and easily pulled the stick out with one hand.<br><br>Immediately, fresh water gushed out of the hole like a powerful fountain. The water rose rapidly, submerging the houses, streets, and fields. The villagers panicked and tried to run, but the rushing flood swallowed the entire village, transforming the area into a vast lake known today as Rawa Pening. Only kind Mbok Rondo survived safely, floating on her wooden mortar. This legend reminds us that true worth is found in kindness and humility, not in outward wealth or pride.",
      prompt: "Based on cause-and-effect relationships in the text, determine whether each statement is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "The villagers drove Baru Klinthing away because they only judged people by outward appearances.",
          isCorrect: true
        },
        {
          statement: "Mbok Rondo survived the disaster because she followed the boy's advice and used her wooden mortar as a boat.",
          isCorrect: true
        },
        {
          statement: "The rushing water stopped rising after several strong men pulled the stick out.",
          isCorrect: false
        },
        {
          statement: "The pride and cruelty of the villagers brought unexpected ruin to their community.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Warga mengusir Baru Klinthing karena menilai orang hanya dari penampilan fisik.<br>• Pernyataan 2: BENAR — Mbok Rondo selamat karena menaiki lesung penumbuk padi sesuai pesan Baru Klinthing.<br>• Pernyataan 3: SALAH — Air tidak berhenti mengalir; justru air membanjiri seluruh desa hingga jadi danau.<br>• Pernyataan 4: BENAR — Kesombongan dan kekejaman warga membawa malapetaka bagi desa mereka.",
      grammarNote: "Cause and effect indicators: 'because', 'so that', 'as a result'."
    },
    {
      id: 19,
      source: "AKM Literasi Membaca — Soal Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Sequence of Narrative Events",
      stimulusTitle: "Text 1: The Legend of Rawa Pening",
      stimulusBody: "Once upon a time in a peaceful village called Ngasem in Central Java, there lived a humble woman named Endang Sawitri. She gave birth to an extraordinary boy named Baru Klinthing. Because of a strange illness, Baru Klinthing had many painful wounds on his skin that caused an unpleasant smell. As a result, many villagers avoided him. When he grew older, Baru Klinthing decided to travel to find his father, Ki Hajar Salokantara, who was meditating on the sacred slopes of Mount Telomoyo.<br><br>During his long journey through the valley, Baru Klinthing arrived at a rich village called Pathok. The villagers were holding a grand harvest festival. Delicious roasted meat and rice were served in abundance, and the village square was full of joyful music and laughter. Exhausted and very hungry, the poor boy approached the gathering and politely asked for a small portion of leftover food.<br><br>However, the wealthy villagers were proud and selfish. Instead of helping him, they laughed at his ragged clothes and dirty appearance. They threw stones and cruelly chased him out of the village. Sad and hungry, Baru Klinthing walked toward the quiet outskirts of the village. There, in a small wooden house, lived an elderly widow named Mbok Rondo.<br><br>Unlike the proud villagers, Mbok Rondo welcomed the boy warmly into her home. Seeing his condition, she generously offered him warm rice, fresh vegetables, and cool water. Baru Klinthing was deeply touched by her kindness. Before leaving, he whispered an important warning: 'Mbok, if you hear a loud rumbling sound from the village square, please prepare your wooden mortar (lesung) and use it like a boat.'<br><br>Baru Klinthing then walked back to the busy festival square. Standing before the crowd, he drove a single wooden stick deep into the ground. He challenged the proud villagers: 'If you are truly strong and mighty, try to pull this simple stick out of the earth!'<br><br>The villagers laughed scornfully. One by one, the strongest men stepped forward and pulled with all their strength, but the stick did not move at all. Even when several men pulled together, it stayed firmly in the ground. Finally, Baru Klinthing stepped forward and easily pulled the stick out with one hand.<br><br>Immediately, fresh water gushed out of the hole like a powerful fountain. The water rose rapidly, submerging the houses, streets, and fields. The villagers panicked and tried to run, but the rushing flood swallowed the entire village, transforming the area into a vast lake known today as Rawa Pening. Only kind Mbok Rondo survived safely, floating on her wooden mortar. This legend reminds us that true worth is found in kindness and humility, not in outward wealth or pride.",
      prompt: "Determine whether each statement about the sequence of events is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "Baru Klinthing challenged the villagers with the wooden stick before he visited Mbok Rondo's house.",
          isCorrect: false
        },
        {
          statement: "Mbok Rondo gave food to Baru Klinthing before he returned to the festival square.",
          isCorrect: true
        },
        {
          statement: "Baru Klinthing pulled the wooden stick out effortlessly with one hand.",
          isCorrect: true
        },
        {
          statement: "Mbok Rondo drowned in the rising water along with the other villagers.",
          isCorrect: false
        }
      ],
      explanation: "• Pernyataan 1: SALAH — Baru Klinthing menancapkan lidi setelah ia mengunjungi Mbok Rondo.<br>• Pernyataan 2: BENAR — Mbok Rondo memberi makan sebelum Baru Klinthing kembali ke alun-alun festival.<br>• Pernyataan 3: BENAR — Baru Klinthing mencabut lidi tersebut dengan mudah hanya menggunakan satu tangan.<br>• Pernyataan 4: SALAH — Mbok Rondo selamat mengapung di atas lesung penumbuk padinya.",
      grammarNote: "Chronological time order: 'before', 'then', 'finally'."
    },
    {
      id: 20,
      source: "AKM Literasi Membaca — Soal Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Moral Lessons and Values",
      stimulusTitle: "Text 1: The Legend of Rawa Pening",
      stimulusBody: "Once upon a time in a peaceful village called Ngasem in Central Java, there lived a humble woman named Endang Sawitri. She gave birth to an extraordinary boy named Baru Klinthing. Because of a strange illness, Baru Klinthing had many painful wounds on his skin that caused an unpleasant smell. As a result, many villagers avoided him. When he grew older, Baru Klinthing decided to travel to find his father, Ki Hajar Salokantara, who was meditating on the sacred slopes of Mount Telomoyo.<br><br>During his long journey through the valley, Baru Klinthing arrived at a rich village called Pathok. The villagers were holding a grand harvest festival. Delicious roasted meat and rice were served in abundance, and the village square was full of joyful music and laughter. Exhausted and very hungry, the poor boy approached the gathering and politely asked for a small portion of leftover food.<br><br>However, the wealthy villagers were proud and selfish. Instead of helping him, they laughed at his ragged clothes and dirty appearance. They threw stones and cruelly chased him out of the village. Sad and hungry, Baru Klinthing walked toward the quiet outskirts of the village. There, in a small wooden house, lived an elderly widow named Mbok Rondo.<br><br>Unlike the proud villagers, Mbok Rondo welcomed the boy warmly into her home. Seeing his condition, she generously offered him warm rice, fresh vegetables, and cool water. Baru Klinthing was deeply touched by her kindness. Before leaving, he whispered an important warning: 'Mbok, if you hear a loud rumbling sound from the village square, please prepare your wooden mortar (lesung) and use it like a boat.'<br><br>Baru Klinthing then walked back to the busy festival square. Standing before the crowd, he drove a single wooden stick deep into the ground. He challenged the proud villagers: 'If you are truly strong and mighty, try to pull this simple stick out of the earth!'<br><br>The villagers laughed scornfully. One by one, the strongest men stepped forward and pulled with all their strength, but the stick did not move at all. Even when several men pulled together, it stayed firmly in the ground. Finally, Baru Klinthing stepped forward and easily pulled the stick out with one hand.<br><br>Immediately, fresh water gushed out of the hole like a powerful fountain. The water rose rapidly, submerging the houses, streets, and fields. The villagers panicked and tried to run, but the rushing flood swallowed the entire village, transforming the area into a vast lake known today as Rawa Pening. Only kind Mbok Rondo survived safely, floating on her wooden mortar. This legend reminds us that true worth is found in kindness and humility, not in outward wealth or pride.",
      prompt: "Determine whether each statement reflects the moral values of the story (**TRUE**) or contradicts them (**FALSE**):",
      matrixStatements: [
        {
          statement: "Sincere kindness and hospitality are more valuable than outward wealth and physical power.",
          isCorrect: true
        },
        {
          statement: "Arrogance and cruelty toward poor people can lead to serious consequences.",
          isCorrect: true
        },
        {
          statement: "People should only help others if they receive money or gifts in return.",
          isCorrect: false
        },
        {
          statement: "Judging someone only by their clothes or look is a foolish mistake.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Kebaikan dan ketulusan hati lebih bernilai daripada kekayaan lahiriah.<br>• Pernyataan 2: BENAR — Kesombongan dan kekejaman terhadap orang miskin berujung pada kehancuran.<br>• Pernyataan 3: SALAH — Membantu sesama harus didasarkan pada ketulusan, bukan pamrih uang atau hadiah.<br>• Pernyataan 4: BENAR — Menilai seseorang hanya dari penampilan fisiknya adalah kesalahan fatal.",
      grammarNote: "Evaluative moral statements."
    },
    {
      id: 21,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Text 1: The Legend of Rawa Pening",
      stimulusBody: "Review Text 1 (The Legend of Rawa Pening).",
      prompt: "Which **TWO (2)** moral themes are clearly taught through the legend of Baru Klinthing and Rawa Pening?",
      options: [
        { key: "A", text: "Treating fellow human beings with sincerity and respect, regardless of their appearance." },
        { key: "B", text: "Demanding money before offering food or shelter to someone who is hungry." },
        { key: "C", text: "Recognizing that arrogance and cruelty toward poor people lead to disaster." },
        { key: "D", text: "Relying on physical weapons and fighting as the best way to solve village conflicts." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua pesan moral utama dari legenda Rawa Pening adalah memperlakukan sesama dengan tulus dan hormat tanpa memandang penampilan fisik, serta menyadari bahwa kesombongan dan kekejaman terhadap orang yang lemah akan mendatangkan malapetaka.",
      grammarNote: "Two correct moral takeaways."
    },
    {
      id: 22,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Context: AI in Education",
      stimulusBody: "Relying too heavily on artificial intelligence without thinking can hurt students' learning habits.",
      prompt: "Which **TWO (2)** negative outcomes can happen if high school students rely too heavily on AI for schoolwork?",
      options: [
        { key: "A", text: "Students may lose the habit of thinking critically and solving problems independently." },
        { key: "B", text: "A permanent increase in monthly internet subscription fees for all families." },
        { key: "C", text: "Students might submit inaccurate or fake information without realizing it." },
        { key: "D", text: "The immediate hardware breakdown of all desktop computers in the school." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua dampak negatif utama ketergantungan berlebihan pada AI adalah melemahnya kemampuan berpikir kritis dan mandiri, serta risiko mengumpulkan informasi palsu/keliru tanpa disadari.",
      grammarNote: "Cause and effect with modal auxiliary: 'may lose', 'might submit'."
    },
    {
      id: 23,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Grammar in Context: Relative Clauses",
      stimulusBody: "Relative pronouns (who, which, whose) connect information to a noun.",
      prompt: "Which **TWO (2)** sentences correctly use relative pronouns to connect clauses?",
      options: [
        { key: "A", text: "Mbok Rondo, who lived alone in a humble wooden house, warmly welcomed the boy." },
        { key: "B", text: "The students whose essays were well written received praise from their teacher." },
        { key: "C", text: "The wooden stick who Baru Klinthing planted firmly in the ground could not be pulled out." },
        { key: "D", text: "The school computer which it broke down yesterday has already been repaired." }
      ],
      correctAnswer: ["A", "B"],
      explanation: "Dua kalimat yang menggunakan relative clause secara tepat adalah kalimat dengan 'who' untuk subjek orang ('Mbok Rondo, who lived alone...') dan 'whose' untuk menyatakan kepemilikan ('The students whose essays were well written...'). Kalimat lainnya salah karena menggunakan 'who' untuk benda ('wooden stick') dan pengulangan kata ganti redundan ('which it broke down').",
      grammarNote: "Relative pronouns: who (person), whose (possession)."
    },
    {
      id: 24,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Context: Responsible Technology Use",
      stimulusBody: "Technology should be used wisely to support student learning.",
      prompt: "Which **TWO (2)** actions illustrate responsible and productive uses of AI by high school students?",
      options: [
        { key: "A", text: "Using AI to brainstorm ideas and explain difficult lessons while writing in one's own words." },
        { key: "B", text: "Copying and pasting an entire AI response into homework five minutes before the deadline." },
        { key: "C", text: "Checking information from AI against school textbooks and reliable websites." },
        { key: "D", text: "Asking AI to invent fake reference sources for a school research paper." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua tindakan bijak dan bertanggung jawab dalam memanfaatkan AI adalah menggunakannya sebagai teman belajar untuk memahami konsep sulit sambil tetap menulis dengan kata-kata sendiri, serta selalu memeriksa kebenaran data AI dengan buku teks dan sumber tepercaya.",
      grammarNote: "Participial phrases indicating positive actions."
    },
    {
      id: 25,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Grammar in Context: Concession and Contrast",
      stimulusBody: "Connectors of concession (although, despite) show unexpected contrasts.",
      prompt: "Which **TWO (2)** sentences correctly express contrast using connectors like **Although** or **Despite**?",
      options: [
        { key: "A", text: "Although Baru Klinthing had painful wounds, he remained humble and polite." },
        { key: "B", text: "Despite the boy was hungry, nobody offered him any food." },
        { key: "C", text: "Despite its fast answers, AI cannot replace a student's own critical thinking." },
        { key: "D", text: "Although he studied hard, but he forgot the main answers during the test." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua kalimat yang menyatakan pertentangan (konsesi) secara benar adalah kalimat yang menggunakan 'Although + Subject + Verb' ('Although Baru Klinthing had painful wounds...') dan 'Despite + Noun Phrase' ('Despite its fast answers...'). Kalimat lainnya salah karena menggabungkan 'Despite' langsung dengan klausa berpredikat, atau menggabungkan 'Although' bersama 'but'.",
      grammarNote: "Concession rules: Although + clause; Despite + noun phrase."
    },
    {
      id: 26,
      source: "Kemendikbudristek — Hortatory Exposition: Digital Learning in Senior High",
      type: "single_choice",
      title: "Reading Section: Hortatory Exposition",
      stimulusTitle: "Text 2: Using Artificial Intelligence Responsibly in High School",
      stimulusBody: "In recent years, artificial intelligence (AI) has become popular among high school students. With simple prompts on a smartphone or computer, AI applications can explain math formulas, translate foreign languages, or suggest ideas for school essays. While these digital tools provide great convenience, relying on them too heavily can harm our learning. Therefore, high school students should learn to use AI responsibly as a supportive study helper rather than letting it do all the thinking for them.<br><br>First of all, writing and problem-solving are essential exercises for training our minds. When students compose essays in their own words, they learn to organize thoughts, think critically, and express their original voice. If students simply copy and paste AI-generated answers, their ability to think independently will weaken over time. Completing assignments through our own effort builds the real confidence and competence needed for university and future careers.<br><br>Secondly, generative AI tools are not always completely accurate. AI produces answers based on language patterns found on the internet, which means it can occasionally generate false facts, fake names, or incorrect statements with high confidence. If students accept these answers without checking, they risk submitting wrong information in their homework. Students must develop the habit of cross-checking AI answers with school textbooks, trusted educational websites, or their teachers' advice.<br><br>In conclusion, artificial intelligence is an amazing technology that can support our education. Instead of using AI to cheat or avoid thinking, students should adopt a responsible approach. We should view AI as a smart study partner to clarify difficult concepts, while ensuring that the final work is always created through our own hard work and critical thought.",
      prompt: "What is the primary communicative purpose of the hortatory exposition text above?",
      options: [
        { key: "A", text: "To explain the physical components of modern computer hardware." },
        { key: "B", text: "To entertain readers with a science fiction story about talking computers." },
        { key: "C", text: "To provide a step-by-step programming tutorial on building an AI algorithm." },
        { key: "D", text: "To persuade students to use AI responsibly as a study helper while thinking for themselves." }
      ],
      correctAnswer: "D",
      explanation: "Tujuan komunikatif teks hortatori eksposisi adalah meyakinkan pembaca (siswa SMA) agar memanfaatkan AI secara bertanggung jawab sebagai asisten belajar tanpa menghilangkan pemikiran mandiri ('to persuade students to use AI responsibly as a study helper while thinking for themselves').",
      grammarNote: "Communicative purpose of hortatory exposition: to persuade readers that something should or should not be done."
    },
    {
      id: 27,
      source: "Kemendikbudristek — Hortatory Exposition: Digital Learning in Senior High",
      type: "single_choice",
      title: "Reading Section: Hortatory Exposition",
      stimulusTitle: "Text 2: Using Artificial Intelligence Responsibly in High School",
      stimulusBody: "In recent years, artificial intelligence (AI) has become popular among high school students. With simple prompts on a smartphone or computer, AI applications can explain math formulas, translate foreign languages, or suggest ideas for school essays. While these digital tools provide great convenience, relying on them too heavily can harm our learning. Therefore, high school students should learn to use AI responsibly as a supportive study helper rather than letting it do all the thinking for them.<br><br>First of all, writing and problem-solving are essential exercises for training our minds. When students compose essays in their own words, they learn to organize thoughts, think critically, and express their original voice. If students simply copy and paste AI-generated answers, their ability to think independently will weaken over time. Completing assignments through our own effort builds the real confidence and competence needed for university and future careers.<br><br>Secondly, generative AI tools are not always completely accurate. AI produces answers based on language patterns found on the internet, which means it can occasionally generate false facts, fake names, or incorrect statements with high confidence. If students accept these answers without checking, they risk submitting wrong information in their homework. Students must develop the habit of cross-checking AI answers with school textbooks, trusted educational websites, or their teachers' advice.<br><br>In conclusion, artificial intelligence is an amazing technology that can support our education. Instead of using AI to cheat or avoid thinking, students should adopt a responsible approach. We should view AI as a smart study partner to clarify difficult concepts, while ensuring that the final work is always created through our own hard work and critical thought.",
      prompt: "Which sentence from paragraph 1 directly presents the author's main thesis statement?",
      options: [
        { key: "A", text: "High school students should learn to use AI responsibly as a supportive study helper rather than letting it do all the thinking." },
        { key: "B", text: "Artificial intelligence has become popular among high school students in recent years." },
        { key: "C", text: "With simple prompts, AI can explain math formulas and translate foreign languages." },
        { key: "D", text: "Digital tools provide great convenience for modern high school learners." }
      ],
      correctAnswer: "A",
      explanation: "Tesis utama penulis pada paragraf 1 menyatakan rekomendasi intinya: siswa SMA hendaknya menggunakan AI secara bertanggung jawab sebagai pendukung belajar, bukan menyerahkan seluruh proses berpikir pada AI ('students should learn to use AI responsibly as a supportive study helper rather than letting it do all the thinking').",
      grammarNote: "Thesis statement in hortatory exposition."
    },
    {
      id: 28,
      source: "Kemendikbudristek — Hortatory Exposition: Digital Learning in Senior High",
      type: "single_choice",
      title: "Reading Section: Hortatory Exposition",
      stimulusTitle: "Text 2: Using Artificial Intelligence Responsibly in High School",
      stimulusBody: "In recent years, artificial intelligence (AI) has become popular among high school students. With simple prompts on a smartphone or computer, AI applications can explain math formulas, translate foreign languages, or suggest ideas for school essays. While these digital tools provide great convenience, relying on them too heavily can harm our learning. Therefore, high school students should learn to use AI responsibly as a supportive study helper rather than letting it do all the thinking for them.<br><br>First of all, writing and problem-solving are essential exercises for training our minds. When students compose essays in their own words, they learn to organize thoughts, think critically, and express their original voice. If students simply copy and paste AI-generated answers, their ability to think independently will weaken over time. Completing assignments through our own effort builds the real confidence and competence needed for university and future careers.<br><br>Secondly, generative AI tools are not always completely accurate. AI produces answers based on language patterns found on the internet, which means it can occasionally generate false facts, fake names, or incorrect statements with high confidence. If students accept these answers without checking, they risk submitting wrong information in their homework. Students must develop the habit of cross-checking AI answers with school textbooks, trusted educational websites, or their teachers' advice.<br><br>In conclusion, artificial intelligence is an amazing technology that can support our education. Instead of using AI to cheat or avoid thinking, students should adopt a responsible approach. We should view AI as a smart study partner to clarify difficult concepts, while ensuring that the final work is always created through our own hard work and critical thought.",
      prompt: "According to paragraph 2, why is writing essays in our own words essential for high school students?",
      options: [
        { key: "A", text: "It allows students to finish their homework in less than two minutes." },
        { key: "B", text: "It trains the mind to organize thoughts, develop critical thinking, and build problem-solving skills." },
        { key: "C", text: "It stops teachers from reviewing and grading student assignments." },
        { key: "D", text: "It guarantees instant admission to international universities." }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 2 menyatakan bahwa menulis dengan kata-kata sendiri melatih pikiran untuk menyusun argumen, berpikir kritis, dan mengekspresikan gagasan orisinal ('trains our minds... learn to organize thoughts, think critically, and express their original voice').",
      grammarNote: "Argument elaboration with gerund: 'writing and problem-solving are essential exercises'."
    },
    {
      id: 29,
      source: "Kemendikbudristek — Hortatory Exposition: Digital Learning in Senior High",
      type: "single_choice",
      title: "Reading Section: Hortatory Exposition",
      stimulusTitle: "Text 2: Using Artificial Intelligence Responsibly in High School",
      stimulusBody: "In recent years, artificial intelligence (AI) has become popular among high school students. With simple prompts on a smartphone or computer, AI applications can explain math formulas, translate foreign languages, or suggest ideas for school essays. While these digital tools provide great convenience, relying on them too heavily can harm our learning. Therefore, high school students should learn to use AI responsibly as a supportive study helper rather than letting it do all the thinking for them.<br><br>First of all, writing and problem-solving are essential exercises for training our minds. When students compose essays in their own words, they learn to organize thoughts, think critically, and express their original voice. If students simply copy and paste AI-generated answers, their ability to think independently will weaken over time. Completing assignments through our own effort builds the real confidence and competence needed for university and future careers.<br><br>Secondly, generative AI tools are not always completely accurate. AI produces answers based on language patterns found on the internet, which means it can occasionally generate false facts, fake names, or incorrect statements with high confidence. If students accept these answers without checking, they risk submitting wrong information in their homework. Students must develop the habit of cross-checking AI answers with school textbooks, trusted educational websites, or their teachers' advice.<br><br>In conclusion, artificial intelligence is an amazing technology that can support our education. Instead of using AI to cheat or avoid thinking, students should adopt a responsible approach. We should view AI as a smart study partner to clarify difficult concepts, while ensuring that the final work is always created through our own hard work and critical thought.",
      prompt: "The word 'relying' in paragraph 1 ('relying on them too heavily can harm our learning') is closest in meaning to...",
      options: [
        { key: "A", text: "criticizing" },
        { key: "B", text: "ignoring" },
        { key: "C", text: "depending" },
        { key: "D", text: "repairing" }
      ],
      correctAnswer: "C",
      explanation: "Kata 'relying' (rely on) bermakna bergantung atau menggantungkan diri pada sesuatu ('depending on').",
      grammarNote: "Phrasal verb synonym: rely on = depend on."
    },
    {
      id: 30,
      source: "Kemendikbudristek — Hortatory Exposition: Digital Learning in Senior High",
      type: "single_choice",
      title: "Reading Section: Hortatory Exposition",
      stimulusTitle: "Text 2: Using Artificial Intelligence Responsibly in High School",
      stimulusBody: "In recent years, artificial intelligence (AI) has become popular among high school students. With simple prompts on a smartphone or computer, AI applications can explain math formulas, translate foreign languages, or suggest ideas for school essays. While these digital tools provide great convenience, relying on them too heavily can harm our learning. Therefore, high school students should learn to use AI responsibly as a supportive study helper rather than letting it do all the thinking for them.<br><br>First of all, writing and problem-solving are essential exercises for training our minds. When students compose essays in their own words, they learn to organize thoughts, think critically, and express their original voice. If students simply copy and paste AI-generated answers, their ability to think independently will weaken over time. Completing assignments through our own effort builds the real confidence and competence needed for university and future careers.<br><br>Secondly, generative AI tools are not always completely accurate. AI produces answers based on language patterns found on the internet, which means it can occasionally generate false facts, fake names, or incorrect statements with high confidence. If students accept these answers without checking, they risk submitting wrong information in their homework. Students must develop the habit of cross-checking AI answers with school textbooks, trusted educational websites, or their teachers' advice.<br><br>In conclusion, artificial intelligence is an amazing technology that can support our education. Instead of using AI to cheat or avoid thinking, students should adopt a responsible approach. We should view AI as a smart study partner to clarify difficult concepts, while ensuring that the final work is always created through our own hard work and critical thought.",
      prompt: "Based on paragraph 3, why can generative AI systems sometimes give misleading or incorrect answers?",
      options: [
        { key: "A", text: "Because computers cannot operate during rainy weather." },
        { key: "B", text: "Because school internet routers are deliberately set up to create errors." },
        { key: "C", text: "Because textbook publishers change online articles every morning." },
        { key: "D", text: "Because they generate text from internet patterns without truly understanding facts." }
      ],
      correctAnswer: "D",
      explanation: "Paragraf 3 menjelaskan bahwa AI menghasilkan jawaban berdasarkan pola bahasa di internet, sehingga tidak benar-benar memahami fakta yang sesungguhnya ('produces answers based on language patterns... without truly understanding factual truth').",
      grammarNote: "Cause and effect reason: 'AI produces answers based on language patterns...'"
    },
    {
      id: 31,
      source: "Kaidah Tata Bahasa Kelas XI — Conditionals & Conjunctions",
      type: "single_choice",
      title: "Grammar & Structure: Conditional Conjunctions",
      prompt: "Complete the sentence with the correct conditional conjunction meaning **'if not'**:<br><br><em>'High school students will not build strong reading habits _______ they practice reading English books every week.'</em>",
      options: [
        { key: "A", text: "unless" },
        { key: "B", text: "although" },
        { key: "C", text: "because" },
        { key: "D", text: "so that" }
      ],
      correctAnswer: "A",
      explanation: "Kata hubung 'unless' bermakna 'if not' (kecuali jika / jika tidak). Kalimat ini menyatakan bahwa siswa tidak akan membangun kebiasaan membaca yang kuat 'kecuali jika' mereka berlatih membaca buku bahasa Inggris setiap minggu.",
      grammarNote: "Unless = if... not. Pola: Subject + will not + V1 + unless + Subject + V1."
    },
    {
      id: 32,
      source: "Kaidah Tata Bahasa Kelas XI — Modal Auxiliaries for Advice",
      type: "single_choice",
      title: "Grammar & Structure: Modals for Advice",
      prompt: "Choose the correct modal verb to express polite advice:<br><br><em>'Every student _______ check their homework carefully before giving it to the teacher.'</em>",
      options: [
        { key: "A", text: "should" },
        { key: "B", text: "would have" },
        { key: "C", text: "might have" },
        { key: "D", text: "was" }
      ],
      correctAnswer: "A",
      explanation: "Kata kerja bantu modal yang digunakan untuk menyatakan saran atau anjuran yang baik adalah 'should' (sebaiknya/seharusnya) yang diikuti oleh kata kerja bentuk pertama ('check').",
      grammarNote: "Modal for giving advice: Subject + should + V1."
    },
    {
      id: 33,
      source: "Kaidah Tata Bahasa Kelas XI — Conjunctions of Contrast",
      type: "single_choice",
      title: "Grammar & Structure: Connectors of Contrast",
      prompt: "Which conjunction of contrast correctly completes the sentence?<br><br><em>'_______ the English assignment seemed difficult at first, the students completed it successfully together.'</em>",
      options: [
        { key: "A", text: "Since" },
        { key: "B", text: "Because" },
        { key: "C", text: "Although" },
        { key: "D", text: "In order that" }
      ],
      correctAnswer: "C",
      explanation: "Kata hubung yang menyatakan hubungan pertentangan yang diikuti oleh klausa lengkap (Subject + Verb) adalah 'Although' (meskipun/walaupun).",
      grammarNote: "Subordinating conjunction of concession: Although + clause, main clause."
    },
    {
      id: 34,
      source: "Kaidah Tata Bahasa Kelas XI — First Conditional",
      type: "single_choice",
      title: "Grammar & Structure: Real Conditionals",
      prompt: "Select the correct verb form to complete the first conditional sentence:<br><br><em>'If you ask the teacher politely, she _______ explain the difficult lesson again.'</em>",
      options: [
        { key: "A", text: "will" },
        { key: "B", text: "would have" },
        { key: "C", text: "had" },
        { key: "D", text: "was" }
      ],
      correctAnswer: "A",
      explanation: "Kalimat pengandaian tipe 1 (First Conditional) digunakan untuk situasi nyata di masa kini atau mendatang. Pola bakunya: If + Subject + V1 (Simple Present), Subject + will + V1. Maka kata kerja bantu yang tepat adalah 'will'.",
      grammarNote: "First conditional formula: If + Simple Present, will + V1."
    },
    {
      id: 35,
      source: "Kaidah Tata Bahasa Kelas XI — Passive Voice with Modals",
      type: "single_choice",
      title: "Grammar & Structure: Passive Voice",
      prompt: "Complete the sentence with the correct passive modal auxiliary:<br><br><em>'Plastic bottles and cans ought to _______ recycled to keep our school clean.'</em>",
      options: [
        { key: "A", text: "be" },
        { key: "B", text: "being" },
        { key: "C", text: "been" },
        { key: "D", text: "have" }
      ],
      correctAnswer: "A",
      explanation: "Rumus kalimat pasif dengan modal auxiliary (ought to / should) adalah: modal + be + V3 ('ought to be recycled').",
      grammarNote: "Passive modal construction: ought to + be + V3."
    },
    {
      id: 36,
      source: "Kaidah Tata Bahasa Kelas XI — Simple Passive Voice",
      type: "single_choice",
      title: "Grammar & Structure: Simple Present Passive",
      prompt: "Choose the correct passive verb phrase to complete the statement:<br><br><em>'Digital literacy _______ by teachers as a vital skill for modern high school students.'</em>",
      options: [
        { key: "A", text: "is regarded" },
        { key: "B", text: "regarding" },
        { key: "C", text: "regards" },
        { key: "D", text: "was regarding" }
      ],
      correctAnswer: "A",
      explanation: "Subjek tunggal 'Digital literacy' menerima tindakan (dianggap). Pola pasif Simple Present untuk subjek tunggal adalah: is + V3 ('is regarded').",
      grammarNote: "Present passive voice: is + past participle (V3)."
    },
    {
      id: 37,
      source: "Kaidah Tata Bahasa Kelas XI — Preposition with Gerund",
      type: "single_choice",
      title: "Grammar & Structure: Preposition + Gerund",
      prompt: "Select the correct form to complete the sentence after the preposition 'after':<br><br><em>'After _______ the small stick out of the ground, Baru Klinthing watched the clear water rise and flood the village.'</em>",
      options: [
        { key: "A", text: "pulling" },
        { key: "B", text: "pulled" },
        { key: "C", text: "pulls" },
        { key: "D", text: "to pull" }
      ],
      correctAnswer: "A",
      explanation: "Setelah kata depan (preposition) seperti 'after', 'before', atau 'by', kata kerja harus diubah menjadi bentuk gerund (V-ing): 'After pulling the small stick...'.",
      grammarNote: "Preposition + Gerund (V-ing)."
    },
    {
      id: 38,
      source: "Kaidah Tata Bahasa Kelas XI — Cause and Effect Connectors",
      type: "single_choice",
      title: "Grammar & Structure: Cause Connectors",
      prompt: "Which connector correctly completes the blank before the noun phrase 'their selfish pride'?<br><br><em>'The arrogant villagers faced unexpected disaster _______ their selfish pride and cruelty toward the poor boy.'</em>",
      options: [
        { key: "A", text: "so that" },
        { key: "B", text: "although" },
        { key: "C", text: "even though" },
        { key: "D", text: "because of" }
      ],
      correctAnswer: "D",
      explanation: "Frasa 'their selfish pride and cruelty' adalah Noun Phrase (bukan kalimat lengkap dengan kata kerja). Kata hubung penyebab yang diikuti oleh noun phrase adalah 'because of'. Sedangkan 'although' dan 'even though' harus diikuti oleh klausa lengkap.",
      grammarNote: "Because of + Noun Phrase (menyatakan sebab)."
    },
    {
      id: 39,
      source: "Kaidah Tata Bahasa Kelas XI — Natural Adjective Collocation",
      type: "single_choice",
      title: "Grammar & Structure: Word Collocation",
      prompt: "Which adjective naturally pairs with the word 'role' in this sentence?<br><br><em>'Reading books regularly plays an _______ role in expanding a student\'s English vocabulary.'</em>",
      options: [
        { key: "A", text: "important" },
        { key: "B", text: "expensive" },
        { key: "C", text: "angry" },
        { key: "D", text: "impolite" }
      ],
      correctAnswer: "A",
      explanation: "Pasangan kata yang alami dan tepat (collocation) dengan kata 'role' adalah 'an important role' (peran yang penting) atau 'plays a vital role'.",
      grammarNote: "Collocation: play an important role."
    },
    {
      id: 40,
      source: "Kaidah Tata Bahasa Kelas XI — Subject-Verb Agreement",
      type: "single_choice",
      title: "Grammar & Structure: Subject-Verb Agreement",
      prompt: "Choose the correct verb form that agrees with the nearest plural subject in this sentence:<br><br><em>'Not only the teacher but also the students _______ excited about the cultural festival.'</em>",
      options: [
        { key: "A", text: "are" },
        { key: "B", text: "is" },
        { key: "C", text: "was" },
        { key: "D", text: "has" }
      ],
      correctAnswer: "A",
      explanation: "Dalam pola 'Not only... but also...', keselarasan kata kerja (subject-verb agreement) mengikuti subjek yang paling dekat dengan to-be/kata kerja. Subjek terdekat adalah 'the students' (jamak), sehingga kata kerja bantu yang tepat adalah 'are'.",
      grammarNote: "Subject-verb agreement with correlative conjunctions: Not only A but also B + verb agrees with B."
    }
  ];
}


let currentQuestionIndex = 0;
let userAnswers = {};
let flaggedQuestions = new Set();
let timerInterval = null;
let remainingSeconds = 90 * 60;
let studentIdentity = { tingkat: "XI-TL", rombel: "1", presensi: "1", nama: "Siswa SMA 1 Bae" };
let currentMode = "practice";
let isExamSubmitted = false;
let audioSpeechRate = 1.0;
let questions = [];

function randomizeQuestionOptions(rawQuestions) {
  return rawQuestions.map(q => {
    if (q.type === "listening_pictures") {
      return q;
    }
    const cloned = JSON.parse(JSON.stringify(q));
    // Complex matrix statements maintain their logical order
    if (cloned.type !== "complex_matrix" && Array.isArray(cloned.options) && cloned.options.length > 0) {
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
  const modal = document.getElementById("identity-prompt-modal");
  if (modal) modal.style.display = "flex";
  else startFreshTest();
}

function handleDirectIdentitySubmit(e) {
  if (e) e.preventDefault();
  const namaEl = document.getElementById("direct-nama");
  const rombelEl = document.getElementById("direct-rombel");
  const presensiEl = document.getElementById("direct-presensi");
  const modeEl = document.getElementById("direct-mode");
  
  studentIdentity = {
    tingkat: "XI-TL",
    rombel: rombelEl ? rombelEl.value : "1",
    presensi: presensiEl ? presensiEl.value.trim() : "1",
    nama: (namaEl && namaEl.value.trim()) ? namaEl.value.trim() : "Siswa Kelas XI Tingkat Lanjut"
  };
  if (modeEl) currentMode = modeEl.value;
  const modal = document.getElementById("identity-prompt-modal");
  if (modal) modal.style.display = "none";
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

  const rawBank = (typeof getGrade11TLAsasQuestions === "function") ? getGrade11TLAsasQuestions() : [];

  let restoredQuestions = null;
  try {
    const saved = localStorage.getItem("sabaku_asas_progress_XI_TL");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed.questions) && parsed.questions.length > 0) {
        restoredQuestions = parsed.questions;
      }
      if (parsed.userAnswers) userAnswers = parsed.userAnswers;
      if (parsed.flaggedQuestions) flaggedQuestions = new Set(parsed.flaggedQuestions);
      if (parsed.remainingSeconds !== undefined) remainingSeconds = parsed.remainingSeconds;
      if (parsed.currentIndex !== undefined) currentQuestionIndex = parsed.currentIndex;
    }
  } catch (err) {
    console.warn("Progress restore warning:", err);
  }

  questions = restoredQuestions || randomizeQuestionOptions(rawBank);

  applyStudentMetadata();
  buildNavigatorGrid();
  startTimer();
  renderQuestion(currentQuestionIndex);
  saveProgressToLocalStorage();
}

function applyStudentMetadata() {
  const modeBadge = document.getElementById("nav-mode-badge");
  if (modeBadge) {
    modeBadge.textContent = (currentMode === "practice") ? "🎯 Mode Latihan ASAS Gasal Kelas XI Tingkat Lanjut" : "📝 Asesmen Resmi ASAS Gasal Kelas XI Tingkat Lanjut";
    modeBadge.className = "badge-mode " + (currentMode === "practice" ? "practice" : "exam");
  }
  const nameEl = document.getElementById("side-student-name");
  if (nameEl) nameEl.textContent = studentIdentity.nama;
  const metaEl = document.getElementById("side-student-meta");
  if (metaEl) {
    metaEl.textContent = `${studentIdentity.tingkat || "XI-TL"} | Rombel ${studentIdentity.rombel} | Presensi ${studentIdentity.presensi}`;
  }
  const rombelEl = document.getElementById("side-student-rombel");
  if (rombelEl) rombelEl.textContent = studentIdentity.rombel;
  const presensiEl = document.getElementById("side-student-presensi");
  if (presensiEl) presensiEl.textContent = studentIdentity.presensi;
}

function toggleKisiKisiContent() {
  const content = document.getElementById("kisi-kisi-content-area");
  const icon = document.getElementById("kisi-kisi-expand-icon");
  if (!content) return;
  const isHidden = content.style.display === "none";
  content.style.display = isHidden ? "block" : "none";
  if (icon) icon.textContent = isHidden ? "▲" : "▼";
}

function toggleKisiKisiModal() {
  const modal = document.getElementById("kisi-kisi-modal");
  if (!modal) return;
  modal.style.display = (modal.style.display === "flex") ? "none" : "flex";
}

function buildNavigatorGrid() {
  const grid = document.getElementById("question-navigator-grid") || document.getElementById("navigator-grid");
  if (!grid) return;
  grid.innerHTML = "";
  questions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "q-num-btn nav-btn";
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

  const numBadge = document.getElementById("q-number-badge");
  if (numBadge) numBadge.textContent = `Soal No. ${q.id} dari ${questions.length}`;
  const typeBadge = document.getElementById("q-type-badge");
  if (typeBadge) typeBadge.textContent = q.title || "Pilihan Ganda";

  const listeningBox = document.getElementById("listening-container");
  if (listeningBox) {
    if (q.audioText || (q.audioSegments && q.audioSegments.length > 0)) {
      listeningBox.style.display = "block";
      const statusText = document.getElementById("audio-status-text");
      if (statusText) statusText.textContent = "Klik 'Putar Audio' untuk mendengarkan audio rekaman penutur asli.";
    } else {
      listeningBox.style.display = "none";
    }
  }

  const stimBox = document.getElementById("stimulus-container");
  if (stimBox) {
    if (q.stimulusBody && q.type !== "listening_pictures") {
      stimBox.style.display = "block";
      const stimTitle = document.getElementById("stimulus-title");
      if (stimTitle) stimTitle.textContent = q.stimulusTitle || "Teks Stimulus";
      const stimBody = document.getElementById("stimulus-body");
      if (stimBody) stimBody.innerHTML = q.stimulusBody;
      const srcEl = document.getElementById("stimulus-source");
      if (srcEl) {
        if (q.source) {
          srcEl.style.display = "block";
          srcEl.innerHTML = `<span style="font-size:0.75rem; color:#64748b; font-style:italic;">Source: ${q.source}</span>`;
        } else {
          srcEl.style.display = "none";
        }
      }
    } else {
      stimBox.style.display = "none";
    }
  }

  const promptBox = document.getElementById("question-prompt-text");
  if (promptBox) promptBox.innerHTML = q.prompt;

  const optContainer = document.getElementById("options-container");
  if (optContainer) {
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
  }

  const expBox = document.getElementById("question-explanation-box");
  if (expBox) {
    if (isExamSubmitted) {
      expBox.style.display = "block";
      let keyBadge = "";
      if (q.type === "complex_matrix") {
        keyBadge = q.matrixStatements.map((s, i) => `Pernyataan ${i+1}: <strong>${s.isCorrect ? 'BENAR (TRUE)' : 'SALAH (FALSE)'}</strong>`).join(" | ");
      } else if (Array.isArray(q.correctAnswer)) {
        keyBadge = q.correctAnswer.join(", ");
      } else {
        keyBadge = q.correctAnswer;
      }

      const expText = document.getElementById("explanation-text");
      if (expText) {
        expText.innerHTML = `
          <div style="margin-bottom: 10px; padding: 6px 12px; background: #ecfdf5; border: 1.5px solid #a7f3d0; border-radius: 8px; color: #065f46; font-size: 0.95rem; display: inline-block;">
            🔑 <strong>Kunci Jawaban:</strong> <span style="font-weight: 800; color: #047857; margin-left: 4px;">${keyBadge}</span>
          </div>
          <div>${q.explanation}</div>
        `;
      }
      const expMeta = document.getElementById("explanation-meta-text");
      if (expMeta) {
        expMeta.innerHTML = `<strong>Kaidah &amp; Kosakata:</strong> ${q.grammarNote || "-"}`;
      }
    } else {
      expBox.style.display = "none";
    }
  }

  const flagBtn = document.getElementById("btn-flag-q");
  if (flagBtn) {
    flagBtn.textContent = flaggedQuestions.has(index) ? "🔄 Hapus Ragu" : "🟡 Ragu-ragu";
  }

  const btnPrev = document.getElementById("btn-prev-q");
  if (btnPrev) btnPrev.disabled = (index === 0);
  const btnNext = document.getElementById("btn-next-q");
  if (btnNext) btnNext.disabled = (index === questions.length - 1);
  const btnSubmit = document.getElementById("btn-submit-test");
  if (btnSubmit) btnSubmit.style.display = (index === questions.length - 1) ? "inline-flex" : "none";

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
      if (isExamSubmitted) return;
      userAnswers[q.id] = opt.key;
      renderQuestion(currentQuestionIndex);
    };
    const svgContent = opt.svg || `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2"><rect x="10" y="10" width="80" height="80" rx="8" fill="#eff6ff"/><circle cx="50" cy="50" r="20" stroke="#3b82f6"/><text x="50" y="55" font-size="14" text-anchor="middle" fill="#1e40af" font-weight="bold">${opt.key}</text></svg>`;
    const labelContent = opt.label || opt.text || `Pilihan ${opt.key}`;
    card.innerHTML = `
      <div class="picture-svg-wrapper">${svgContent}</div>
      <div class="picture-card-footer">
        <span class="picture-key-badge">${opt.key}</span>
        <span class="picture-label-text">${labelContent}</span>
      </div>
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
      if (isExamSubmitted) return;
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

function renderMatrixTable(q, container) {
  const table = document.createElement("table");
  table.className = "matrix-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th style="width: 70%;">Pernyataan / Analisis Teks</th>
        <th style="width: 15%; text-align: center;">BENAR (TRUE)</th>
        <th style="width: 15%; text-align: center;">SALAH (FALSE)</th>
      </tr>
    </thead>
    <tbody>
      ${q.matrixStatements.map((stmt, sIdx) => {
        const curVal = (userAnswers[q.id] && userAnswers[q.id][sIdx] !== undefined) ? userAnswers[q.id][sIdx] : null;
        return `
          <tr>
            <td>${stmt.statement}</td>
            <td onclick="setMatrixAnswer(${q.id}, ${sIdx}, true)" style="cursor: pointer; text-align: center;">
              <input type="radio" class="matrix-radio" name="matrix_${q.id}_${sIdx}" ${curVal === true ? "checked" : ""} onclick="event.stopPropagation(); setMatrixAnswer(${q.id}, ${sIdx}, true)">
            </td>
            <td onclick="setMatrixAnswer(${q.id}, ${sIdx}, false)" style="cursor: pointer; text-align: center;">
              <input type="radio" class="matrix-radio" name="matrix_${q.id}_${sIdx}" ${curVal === false ? "checked" : ""} onclick="event.stopPropagation(); setMatrixAnswer(${q.id}, ${sIdx}, false)">
            </td>
          </tr>
        `;
      }).join("")}
    </tbody>
  `;
  container.appendChild(table);
}

function setMatrixAnswer(qId, statementIdx, value) {
  if (isExamSubmitted) return;
  if (!userAnswers[qId] || typeof userAnswers[qId] !== "object" || Array.isArray(userAnswers[qId])) {
    userAnswers[qId] = {};
  }
  userAnswers[qId][statementIdx] = value;
  renderQuestion(currentQuestionIndex);
}

function renderMCMACheckboxes(q, container) {
  const list = document.createElement("div");
  list.className = "options-list";
  const curAns = Array.isArray(userAnswers[q.id]) ? userAnswers[q.id] : [];
  q.options.forEach(opt => {
    const isChecked = curAns.includes(opt.key);
    const item = document.createElement("div");
    item.className = "option-item" + (isChecked ? " selected" : "");
    item.onclick = () => {
      if (isExamSubmitted) return;
      toggleMCMAAnswer(q.id, opt.key);
      renderQuestion(currentQuestionIndex);
    };
    item.innerHTML = `
      <div class="option-checkbox">${isChecked ? "✓" : ""}</div>
      <div class="option-text"><strong>[${opt.key}]</strong> ${opt.text}</div>
    `;
    list.appendChild(item);
  });
  container.appendChild(list);
}

function toggleMCMAAnswer(qId, key) {
  if (isExamSubmitted) return;
  if (!Array.isArray(userAnswers[qId])) userAnswers[qId] = [];
  const idx = userAnswers[qId].indexOf(key);
  if (idx > -1) userAnswers[qId].splice(idx, 1);
  else userAnswers[qId].push(key);
}

function navigateQuestion(delta) {
  renderQuestion(currentQuestionIndex + delta);
}

function toggleFlagQuestion() {
  if (flaggedQuestions.has(currentQuestionIndex)) flaggedQuestions.delete(currentQuestionIndex);
  else flaggedQuestions.add(currentQuestionIndex);
  renderQuestion(currentQuestionIndex);
}

// Multi-speaker audio player with Indonesian name pronunciation
let isAudioPlaying = false;
let currentSegmentIndex = 0;
let activeAudioSegments = [];
let audioPlayTimeout = null;

function getAvailableVoices() {
  if (!("speechSynthesis" in window)) return [];
  return window.speechSynthesis.getVoices();
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    getAvailableVoices();
  };
}

function selectAudioVoice(role, gender, lang) {
  const voices = getAvailableVoices();
  if (!voices.length) return null;
  const isTargetLang = (v, l) => {
    if (!v.lang) return false;
    const clean = v.lang.replace("_", "-").toLowerCase();
    const prefix = l.toLowerCase().split("-")[0];
    return clean.startsWith(prefix);
  };
  const voiceLang = lang || "en-US";
  let pool = voices.filter(v => isTargetLang(v, voiceLang));
  if (!pool.length) pool = voices.filter(v => v.lang.startsWith("en"));
  if (!pool.length) pool = voices;

  const isFemaleRole = role && (role.includes("_f") || role.includes("female") || role.includes("student_f") || role.includes("teacher_f"));
  const femaleKeywords = ["female", "zira", "samantha", "victoria", "karen", "susan", "helena", "catherine", "jenny", "aria"];
  const maleKeywords = ["male", "david", "george", "mark", "james", "richard", "guy", "christopher"];

  if (isFemaleRole) {
    const fMatch = pool.find(v => femaleKeywords.some(kw => v.name.toLowerCase().includes(kw)));
    if (fMatch) return fMatch;
  } else if (role && (role.includes("_m") || role.includes("male"))) {
    const mMatch = pool.find(v => maleKeywords.some(kw => v.name.toLowerCase().includes(kw)));
    if (mMatch) return mMatch;
  }
  return pool[0] || voices[0];
}

function preprocessIndonesianNames(text) {
  return text
    .replace(/\bEndang Sawitri\b/gi, "Ehn-dahng Sah-weet-tree")
    .replace(/\bBaru Klinthing\b/gi, "Bah-roo Kleen-teeng")
    .replace(/\bKi Hajar Salokantara\b/gi, "Kee Hah-jahr Sah-loh-kahn-tah-rah")
    .replace(/\bMount Telomoyo\b/gi, "Mount Teh-loh-moh-yoh")
    .replace(/\bMbok Rondo\b/gi, "Em-bock Ron-doh")
    .replace(/\bRawa Pening\b/gi, "Rah-wah Peh-neeng")
    .replace(/\bPathok\b/gi, "Pah-tock")
    .replace(/\bNgasem\b/gi, "Nga-sem");
}

function stopAudio() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  if (audioPlayTimeout) {
    clearTimeout(audioPlayTimeout);
    audioPlayTimeout = null;
  }
  isAudioPlaying = false;
  activeAudioSegments = [];
  currentSegmentIndex = 0;
  const btn = document.getElementById("btn-play-audio");
  if (btn) btn.classList.remove("playing");
  const playText = document.getElementById("play-text");
  if (playText) playText.textContent = "Putar Audio";
}

function playQuestionAudio() {
  if (isAudioPlaying) {
    stopAudio();
    return;
  }
  const q = questions[currentQuestionIndex];
  if (!q) return;

  if (q.audioSegments && q.audioSegments.length > 0) {
    activeAudioSegments = q.audioSegments;
  } else if (q.audioText) {
    activeAudioSegments = [{ role: "narrator", lang: "en-US", text: q.audioText }];
  } else {
    return;
  }

  isAudioPlaying = true;
  currentSegmentIndex = 0;
  const btn = document.getElementById("btn-play-audio");
  if (btn) btn.classList.add("playing");
  const playText = document.getElementById("play-text");
  if (playText) playText.textContent = "Hentikan";

  playNextAudioSegment();
}

function playNextAudioSegment() {
  if (!isAudioPlaying) return;
  if (currentSegmentIndex >= activeAudioSegments.length) {
    stopAudio();
    return;
  }

  const seg = activeAudioSegments[currentSegmentIndex];
  const cleanedText = preprocessIndonesianNames(seg.text);
  const utterance = new SpeechSynthesisUtterance(cleanedText);
  utterance.rate = audioSpeechRate;
  utterance.lang = seg.lang || "en-US";

  const voice = selectAudioVoice(seg.role, null, seg.lang);
  if (voice) utterance.voice = voice;

  const statusText = document.getElementById("audio-status-text");
  if (statusText) {
    const speakerLabel = seg.name ? `${seg.name} (${seg.role.includes('_f') ? 'Female' : 'Male'})` : (seg.role === "narrator" ? "Narrator" : "Audio");
    statusText.textContent = `Sedang memutar: [${speakerLabel}] - Bagian ${currentSegmentIndex + 1} dari ${activeAudioSegments.length}`;
  }

  utterance.onend = () => {
    currentSegmentIndex++;
    const pauseTime = seg.pauseAfter || 300;
    audioPlayTimeout = setTimeout(() => {
      playNextAudioSegment();
    }, pauseTime);
  };

  utterance.onerror = (e) => {
    console.warn("Speech error:", e);
    currentSegmentIndex++;
    playNextAudioSegment();
  };

  window.speechSynthesis.speak(utterance);
}

function toggleAudioSpeed() {
  if (audioSpeechRate === 1.0) audioSpeechRate = 0.85;
  else if (audioSpeechRate === 0.85) audioSpeechRate = 1.15;
  else audioSpeechRate = 1.0;
  const speedText = document.getElementById("speed-text");
  if (speedText) speedText.textContent = `${audioSpeechRate}x`;
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      alert("Waktu pengerjaan telah habis! Sistem akan mengumpulkan jawaban Anda secara otomatis.");
      submitTest();
      return;
    }
    remainingSeconds--;
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    const timerDisplay = document.getElementById("timer-display");
    if (timerDisplay) {
      timerDisplay.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
  }, 1000);
}

function confirmSubmitTest() {
  const answeredCount = questions.filter(q => isQuestionAnswered(q.id)).length;
  const unansweredCount = questions.length - answeredCount;
  let msg = `Anda telah menjawab ${answeredCount} dari ${questions.length} butir soal.`;
  if (unansweredCount > 0) msg += ` Masih ada ${unansweredCount} butir soal yang belum dijawab.`;
  msg += "\n\nApakah Anda yakin ingin menyelesaikan dan mengumpulkan tes sekarang?";
  if (confirm(msg)) submitTest();
}

function submitTest() {
  clearInterval(timerInterval);
  isExamSubmitted = true;
  stopAudio();
  localStorage.removeItem("sabaku_asas_progress_XI_TL");

  let totalScoreEarned = 0;
  questions.forEach(q => {
    const ans = userAnswers[q.id];
    if (q.type === "complex_matrix") {
      if (ans && typeof ans === "object") {
        let correctStatements = 0;
        q.matrixStatements.forEach((stmt, sIdx) => {
          if (ans[sIdx] === stmt.isCorrect) correctStatements++;
        });
        totalScoreEarned += (correctStatements / q.matrixStatements.length);
      }
    } else if (q.type === "mcma") {
      if (Array.isArray(ans) && ans.length > 0) {
        const target = Array.isArray(q.correctAnswer) ? q.correctAnswer : [];
        let correctPicks = 0;
        let wrongPicks = 0;
        ans.forEach(key => {
          if (target.includes(key)) correctPicks++;
          else wrongPicks++;
        });
        const netPicks = Math.max(0, correctPicks - (wrongPicks * 0.5));
        totalScoreEarned += (target.length > 0 ? (netPicks / target.length) : 0);
      }
    } else {
      if (ans === q.correctAnswer) totalScoreEarned += 1.0;
    }
  });

  const totalQuestions = questions.length;
  const finalScore = Math.min(100, Math.round((totalScoreEarned / totalQuestions) * 100));
  const isTuntas = finalScore >= 75;
  const correctCount = Math.round(totalScoreEarned);

  const resModal = document.getElementById("result-modal");
  if (resModal) resModal.style.display = "flex";
  const scoreVal = document.getElementById("result-score-val");
  if (scoreVal) scoreVal.textContent = finalScore;
  const scoreCircle = document.getElementById("result-score-circle");
  if (scoreCircle) scoreCircle.className = "score-circle " + (isTuntas ? "tuntas" : "belum");

  const statusText = document.getElementById("result-status-text");
  if (statusText) {
    statusText.textContent = isTuntas ? "STATUS: TUNTAS KKTP (≥ 75) 🎉" : "STATUS: BELUM TUNTAS KKTP (< 75) ⚠️";
    statusText.style.color = isTuntas ? "var(--accent-green)" : "var(--accent-red)";
  }

  const statCorr = document.getElementById("stat-correct");
  if (statCorr) statCorr.textContent = correctCount;
  const statWrong = document.getElementById("stat-wrong");
  if (statWrong) statWrong.textContent = totalQuestions - correctCount;
  const statAcc = document.getElementById("stat-accuracy");
  if (statAcc) statAcc.textContent = `${finalScore}%`;

  const record = {
    tingkat: studentIdentity.tingkat,
    rombel: studentIdentity.rombel,
    presensi: studentIdentity.presensi,
    nama: studentIdentity.nama,
    mode: (currentMode === "practice") ? "Latihan ASAS Gasal Kelas XI Tingkat Lanjut" : "Asesmen Resmi ASAS Gasal Kelas XI Tingkat Lanjut",
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

let isSyncingScore = false;
function syncScoreToGoogleSheets(payload) {
  if (isSyncingScore) return;
  isSyncingScore = true;
  const statusEl = document.getElementById("cloud-status-text");
  if (statusEl) statusEl.textContent = "Menyinkronkan nilai ke server sekolah...";
  const webAppUrl = localStorage.getItem("sabaku_gs_url") || DEFAULT_GS_URL;
  fetch(webAppUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(() => {
    if (statusEl) statusEl.innerHTML = "✅ Nilai Anda telah berhasil tercatat di server rekapitulasi sekolah.";
  }).catch(err => {
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(webAppUrl, new Blob([JSON.stringify(payload)], { type: "text/plain;charset=utf-8" }));
      }
    } catch (bErr) {}
    if (statusEl) statusEl.innerHTML = "⚠️ Nilai tercatat di penyimpanan lokal peramban (offline mode).";
  });
}

function downloadResultCSV() {
  const answeredCount = questions.filter(q => isQuestionAnswered(q.id)).length;
  let csv = "NO,ID_SOAL,TIPE_SOAL,JAWABAN_SISWA,KUNCI_JAWABAN,STATUS\n";
  questions.forEach((q, idx) => {
    const ans = userAnswers[q.id];
    let userStr = "";
    let keyStr = "";
    let isCorrect = false;

    if (q.type === "complex_matrix") {
      userStr = ans ? Object.keys(ans).map(k => `P${parseInt(k)+1}:${ans[k] ? 'T' : 'F'}`).join(";") : "KOSONG";
      keyStr = q.matrixStatements.map((s, i) => `P${i+1}:${s.isCorrect ? 'T' : 'F'}`).join(";");
      isCorrect = (userStr === keyStr);
    } else if (Array.isArray(q.correctAnswer)) {
      userStr = Array.isArray(ans) ? ans.sort().join(";") : (ans || "KOSONG");
      keyStr = q.correctAnswer.sort().join(";");
      isCorrect = (userStr === keyStr);
    } else {
      userStr = ans || "KOSONG";
      keyStr = q.correctAnswer;
      isCorrect = (userStr === keyStr);
    }
    csv += `${idx + 1},${q.id},"${q.type}","${userStr}","${keyStr}",${isCorrect ? "BENAR" : "SALAH"}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Hasil_${studentIdentity.tingkat}_${studentIdentity.nama.replace(/\s+/g, "_")}_${studentIdentity.presensi}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function reviewAllAnswers() {
  const resModal = document.getElementById("result-modal");
  if (resModal) resModal.style.display = "none";
  renderQuestion(0);
}

function restartTest() {
  if (confirm("Apakah Anda ingin mengulangi pengerjaan dari awal?\nSemua jawaban saat ini akan direset.")) {
    localStorage.removeItem("sabaku_asas_progress_XI_TL");
    const resModal = document.getElementById("result-modal");
    if (resModal) resModal.style.display = "none";
    startFreshTest();
  }
}

function openSettingsModal() {
  const url = localStorage.getItem("sabaku_gs_url") || DEFAULT_GS_URL;
  const inputEl = document.getElementById("input-gs-url");
  if (inputEl) inputEl.value = url;
  const modal = document.getElementById("settings-modal");
  if (modal) modal.style.display = "flex";
}

function closeSettingsModal() {
  const modal = document.getElementById("settings-modal");
  if (modal) modal.style.display = "none";
}

function saveSettings() {
  const inputEl = document.getElementById("input-gs-url");
  const val = inputEl ? inputEl.value.trim() : "";
  if (val) {
    localStorage.setItem("sabaku_gs_url", val);
    alert("Pengaturan tautan basis data berhasil disimpan!");
    closeSettingsModal();
  }
}

function saveProgressToLocalStorage() {
  try {
    const data = {
      questions,
      userAnswers,
      flaggedQuestions: Array.from(flaggedQuestions),
      remainingSeconds,
      currentIndex: currentQuestionIndex
    };
    localStorage.setItem("sabaku_asas_progress_XI_TL", JSON.stringify(data));
  } catch (e) {}
}
