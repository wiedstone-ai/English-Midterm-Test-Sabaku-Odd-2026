function generateGrade11WajibBank(isAsts = false) {
  const bankFnName = isAsts ? "getGrade11AstsQuestions" : "getGrade11AsasQuestions";

  return `/**
 * ASESMEN SUMATIF ${isAsts ? "TENGAH" : "AKHIR"} SEMESTER (${isAsts ? "ASTS" : "ASAS"}) GASAL 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT XI — FASE F (REGULER / WAJIB)
 * Standar: TKA & AKM Literasi (Pilihan Ganda, Matrix Kompleks, & MCMA - CEFR A2 Menuju B1)
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

const SVG_PICTURES = {
  digitalClass: \`<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="22" width="64" height="46" rx="4" fill="#eff6ff" stroke="#2563eb"/><circle cx="50" cy="45" r="14" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3 3"/><line x1="50" y1="36" x2="50" y2="54" stroke="#1d4ed8"/><line x1="41" y1="45" x2="59" y2="45" stroke="#1d4ed8"/><path d="M26 32h14M26 38h10M60 52h14M60 58h10" stroke="#93c5fd"/><path d="M30 76l20-8 20 8" stroke="#475569" stroke-width="2"/><line x1="50" y1="68" x2="50" y2="84" stroke="#475569" stroke-width="3"/></svg>\`,
  ancientTemple: \`<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 75c8-18 36-24 76 0" stroke="#78350f" stroke-width="3"/><path d="M22 62c6-14 28-18 56 0" stroke="#b45309" stroke-dasharray="2 2"/><polygon points="50,15 35,45 65,45" fill="#fef3c7" stroke="#d97706"/><circle cx="50" cy="30" r="5" fill="#d97706"/><path d="M38 48h24v20H38z" fill="#fef9c3" stroke="#ca8a04"/><path d="M42 48v20M58 48v20" stroke="#b45309"/><line x1="15" y1="84" x2="85" y2="84" stroke="#64748b"/></svg>\`,
  solarRooftop: \`<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 85c15-8 30-14 70-4" stroke="#16a34a" stroke-width="3"/><path d="M35 80V50c0-12 12-22 25-22s25 10 25 22v30H35z" fill="#ecfdf5" stroke="#059669"/><path d="M50 28v-12M42 16h16" stroke="#047857" stroke-width="2"/><circle cx="60" cy="46" r="6" fill="#fef08a" stroke="#ca8a04"/><line x1="60" y1="40" x2="75" y2="28" stroke="#0284c7" stroke-width="2.5"/><circle cx="75" cy="28" r="3" fill="#0284c7"/></svg>\`,
  industrialFactory: \`<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="50" width="30" height="35" fill="#f1f5f9"/><rect x="55" y="40" width="25" height="45" fill="#e2e8f0"/><line x1="35" y1="50" x2="35" y2="25" stroke="#64748b" stroke-width="2.5"/><line x1="68" y1="40" x2="68" y2="20" stroke="#64748b" stroke-width="2.5"/><path d="M30 20c3-5 7-5 10 0M63 15c3-5 7-5 10 0" stroke="#94a3b8"/></svg>\`
};

function ${bankFnName}() {
  return [
    {
      id: 1,
      source: "Kemendikbudristek — Listening Practice Fase F",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number one. Look at the pictures. A high school student is typing on her laptop in the library, carefully studying digital articles for her English project. Which picture matches the statement?",
      audioSegments: [
        {
          text: "Number one. Look at the pictures in your test booklet. A high school student is typing on her laptop in the library, carefully studying digital articles for her English project. Which picture matches the statement?",
          lang: "en-US",
          role: "narrator"
        }
      ],
      prompt: "Which picture matches the student studying digital articles on a laptop in the library?",
      options: [
        { key: "A", svg: SVG_PICTURES.digitalClass, label: "A student studying on a laptop in a library" },
        { key: "B", svg: SVG_PICTURES.ancientTemple, label: "A grand ancient stone temple" },
        { key: "C", svg: SVG_PICTURES.solarRooftop, label: "Solar panels installed on a green school roof" },
        { key: "D", svg: SVG_PICTURES.industrialFactory, label: "A manufacturing factory with tall chimneys" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan seorang siswi yang sedang menggunakan laptop di perpustakaan untuk mempelajari artikel digital bahasa Inggris ('typing on her laptop in the library, carefully studying digital articles').",
      grammarNote: "Present continuous tense: 'is typing on her laptop, studying digital articles'."
    },
    {
      id: 2,
      source: "Kemendikbudristek — Listening Practice Fase F",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number two. Look at the pictures. Located in Central Java, this ancient stone temple has tall spires that attract thousands of cultural tourists every year. Which picture shows this historical monument?",
      audioSegments: [
        {
          text: "Number two. Look at the pictures. Located in Central Java, this ancient stone temple has tall spires that attract thousands of cultural tourists every year. Which picture shows this historical monument?",
          lang: "en-US",
          role: "narrator"
        }
      ],
      prompt: "Which picture shows the ancient stone temple landmark mentioned in the recording?",
      options: [
        { key: "A", svg: SVG_PICTURES.digitalClass, label: "A student studying on a laptop in a library" },
        { key: "B", svg: SVG_PICTURES.ancientTemple, label: "A grand ancient stone temple" },
        { key: "C", svg: SVG_PICTURES.solarRooftop, label: "Solar panels installed on a green school roof" },
        { key: "D", svg: SVG_PICTURES.industrialFactory, label: "A manufacturing factory with tall chimneys" }
      ],
      correctAnswer: "B",
      explanation: "Audio mendeskripsikan candi batu kuno di Jawa Tengah dengan puncak menara yang tinggi ('ancient stone temple has tall spires that attract thousands of cultural tourists').",
      grammarNote: "Relative clause: 'ancient stone temple that has tall spires'."
    },
    {
      id: 3,
      source: "Kemendikbudristek — Listening Practice Fase F",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number three. Look at the pictures. Modern blue solar panels are installed on the roof of a green school building to generate clean and renewable electricity. Which picture matches this description?",
      audioSegments: [
        {
          text: "Number three. Look at the pictures. Modern blue solar panels are installed on the roof of a green school building to generate clean and renewable electricity. Which picture matches this description?",
          lang: "en-US",
          role: "narrator"
        }
      ],
      prompt: "Which picture illustrates the clean solar energy panels on the school roof?",
      options: [
        { key: "A", svg: SVG_PICTURES.digitalClass, label: "A student studying on a laptop in a library" },
        { key: "B", svg: SVG_PICTURES.ancientTemple, label: "A grand ancient stone temple" },
        { key: "C", svg: SVG_PICTURES.solarRooftop, label: "Solar panels installed on a green school roof" },
        { key: "D", svg: SVG_PICTURES.industrialFactory, label: "A manufacturing factory with tall chimneys" }
      ],
      correctAnswer: "C",
      explanation: "Audio mendeskripsikan panel surya yang dipasang di atap gedung sekolah untuk menghasilkan listrik bersih ('solar panels are installed on the roof of a green school building').",
      grammarNote: "Passive voice: 'solar panels are installed on the roof'."
    },
    {
      id: 4,
      source: "Modul Pembelajaran Bahasa Inggris Kelas XI — Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Number four. Listen to a conversation between two high school students.", pauseAfter: 450 },
        { role: "student_m", lang: "en-US", name: "Budi", text: "Look at this dramatic news story on Instagram! It says our semester vacation will be shortened to three days.", pauseAfter: 350 },
        { role: "student_f", lang: "en-US", name: "Rina", text: "Wait, do not forward it immediately! Let us check the official school website or ask our homeroom teacher first. Many sensational stories on social media are fake.", pauseAfter: 400 },
        { role: "narrator", lang: "en-US", text: "Question: What does the female student advise before forwarding news from social media?", pauseAfter: 300 }
      ],
      stimulusTitle: "Dialogue: Checking Online Information",
      stimulusBody: "<p><strong>Speaker 1 (Male):</strong> Look at this dramatic news story on Instagram! It says our semester vacation will be shortened to three days.</p><p><strong>Speaker 2 (Female):</strong> Wait, do not forward it immediately! Let us check the official school website or ask our homeroom teacher first. Many sensational stories on social media are fake.</p>",
      prompt: "What does the female student advise before forwarding news from social media?",
      options: [
        { key: "A", text: "Forward the news immediately to all class group chats." },
        { key: "B", text: "Check official school sources and verify facts before sharing." },
        { key: "C", text: "Turn off smartphones permanently during the holidays." },
        { key: "D", text: "Believe everything published on social media platforms." }
      ],
      correctAnswer: "B",
      explanation: "Siswi perempuan menyarankan untuk tidak langsung membagikan berita tersebut, melainkan memverifikasi kebenarannya melalui situs resmi sekolah atau bertanya kepada wali kelas terlebih dahulu.",
      grammarNote: "Imperative advice: 'Let us check the official school website first'."
    },
    {
      id: 5,
      source: "Modul Pembelajaran Bahasa Inggris Kelas XI — Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Number five. Listen to two students preparing a drama performance.", pauseAfter: 450 },
        { role: "student_m", lang: "en-US", name: "Eko", text: "In our school drama about Prambanan, what moral message should we emphasize in the final scene?", pauseAfter: 350 },
        { role: "student_f", lang: "en-US", name: "Siti", text: "We should show that deception and broken promises bring sorrow, while honesty and mutual respect create peace.", pauseAfter: 400 },
        { role: "narrator", lang: "en-US", text: "Question: What moral message will the students emphasize in their drama performance?", pauseAfter: 300 }
      ],
      stimulusTitle: "Dialogue: Moral Lesson in School Drama",
      stimulusBody: "<p><strong>Speaker 1 (Male):</strong> In our school drama about Prambanan, what moral message should we emphasize in the final scene?</p><p><strong>Speaker 2 (Female):</strong> We should show that deception and broken promises bring sorrow, while honesty and mutual respect create peace.</p>",
      prompt: "What moral message will the students emphasize in their drama performance?",
      options: [
        { key: "A", text: "Deception and broken promises cause sorrow, while honesty creates peace." },
        { key: "B", text: "Winning a war with physical force is the best achievement." },
        { key: "C", text: "Ancient legends are only designed for entertaining young children." },
        { key: "D", text: "People should never help others during difficult times." }
      ],
      correctAnswer: "A",
      explanation: "Pesan moral yang ditekankan dalam pementasan drama adalah bahwa tipu daya dan janji yang diingkari membawa duka, sedangkan kejujuran dan saling menghargai menciptakan kedamaian ('deception and broken promises bring sorrow, while honesty and mutual respect create peace').",
      grammarNote: "Conjunction of contrast: 'while honesty and mutual respect create peace'."
    },
    {
      id: 6,
      source: "Modul Pembelajaran Bahasa Inggris Kelas XI — Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Number six. Listen to two students discussing their green school program.", pauseAfter: 450 },
        { role: "student_m", lang: "en-US", name: "Dani", text: "Our student council wants to make our school cleaner and greener.", pauseAfter: 300 },
        { role: "student_f", lang: "en-US", name: "Maya", text: "What is our first practical step?", pauseAfter: 300 },
        { role: "student_m", lang: "en-US", name: "Dani", text: "We will invite all students to bring reusable food boxes and tumblers to stop single-use plastics in the canteen.", pauseAfter: 400 },
        { role: "narrator", lang: "en-US", text: "Question: What eco-friendly initiative is proposed for the school?", pauseAfter: 300 }
      ],
      stimulusTitle: "Dialogue: Green School Project",
      stimulusBody: "<p><strong>Speaker 1 (Male):</strong> Our student council wants to make our school cleaner and greener.</p><p><strong>Speaker 2 (Female):</strong> What is our first practical step?</p><p><strong>Speaker 1 (Male):</strong> We will invite all students to bring reusable food boxes and tumblers to stop single-use plastics in the canteen.</p>",
      prompt: "What eco-friendly initiative is proposed for the school?",
      options: [
        { key: "A", text: "Closing all school gardens permanently." },
        { key: "B", text: "Bringing reusable containers and tumblers to reduce plastic waste." },
        { key: "C", text: "Buying bottled soft drinks every day at the canteen." },
        { key: "D", text: "Canceling all cleaning activities on Fridays." }
      ],
      correctAnswer: "B",
      explanation: "Inisiatif ramah lingkungan yang diusulkan adalah mengajak seluruh siswa membawa kotak makan dan botol minum isi ulang untuk mengurangi sampah plastik sekali pakai.",
      grammarNote: "Infinitive of purpose: 'to stop single-use plastics'."
    },
    {
      id: 7,
      source: "Kemendikbudristek — Listening Monologue: The Legend of Prambanan",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Questions seven and eight are based on the following monologue about an Indonesian folktale.", pauseAfter: 400 },
        { role: "narrator", lang: "en-US", text: "Long ago, after Prince Bandung Bondowoso defeated King Boko, he wanted to marry Princess Roro Jonggrang. The princess did not love him because he had killed her father. To reject his proposal without causing war, she gave him an impossible condition: to build one thousand stone temples in just one night. Bandung accepted the challenge and asked supernatural spirits to assist him.", pauseAfter: 500 },
        { role: "narrator", lang: "en-US", text: "Number seven. According to the monologue, why did Princess Roro Jonggrang give the difficult task to Bandung Bondowoso?", pauseAfter: 350 }
      ],
      prompt: "According to the monologue, why did Princess Roro Jonggrang give the difficult task to Bandung Bondowoso?",
      options: [
        { key: "A", text: "She wanted to test his cooking skills for the royal banquet." },
        { key: "B", text: "She wanted to become the chief architect of Prambanan." },
        { key: "C", text: "She wanted to reject his marriage proposal without starting a war." },
        { key: "D", text: "She wanted to sell stone statues to neighboring kingdoms." }
      ],
      correctAnswer: "C",
      explanation: "Putri Roro Jonggrang memberikan syarat mustahil tersebut karena ingin menolak lamaran Bandung Bondowoso secara halus tanpa menimbulkan perang baru ('to reject his proposal without causing war').",
      grammarNote: "Infinitive phrase of purpose: 'to reject his proposal'."
    },
    {
      id: 8,
      source: "Kemendikbudristek — Listening Monologue: The Legend of Prambanan",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Bandung accepted the challenge and asked supernatural spirits to assist him. By midnight, hundreds of temples were almost completed.", pauseAfter: 350 },
        { role: "narrator", lang: "en-US", text: "Number eight. How was Bandung Bondowoso able to construct hundreds of stone temples so rapidly during the night?", pauseAfter: 300 }
      ],
      prompt: "How was Bandung Bondowoso able to construct hundreds of stone temples so rapidly during the night?",
      options: [
        { key: "A", text: "He used modern industrial cranes and tractors." },
        { key: "B", text: "He hired thousands of foreign builders from overseas." },
        { key: "C", text: "He built all the temples alone without any assistance." },
        { key: "D", text: "He called upon supernatural spirits to help him build the temples." }
      ],
      correctAnswer: "D",
      explanation: "Bandung Bondowoso mampu mendirikan ratusan candi dalam waktu singkat karena memanggil bantuan makhluk halus / jin ('asked supernatural spirits to assist him').",
      grammarNote: "Past simple: 'called upon supernatural spirits to help him'."
    },
    {
      id: 9,
      source: "Kemendikbudristek — Listening Monologue: Healthy Sleep Habits for Students",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Questions nine and ten are based on the following advice from a school counselor.", pauseAfter: 400 },
        { role: "counselor_f", lang: "en-US", name: "Mrs. Maya", text: "Dear students, sleep is very important for your brain. When teenagers get seven to eight hours of good sleep each night, their memory improves and they can focus easily during morning classes. On the other hand, playing games or scrolling through social media past midnight makes you feel tired, moody, and stressed. Please turn off your screens thirty minutes before bedtime to rest well.", pauseAfter: 500 },
        { role: "narrator", lang: "en-US", text: "Number nine. According to the counselor, what is a primary benefit of getting enough sleep each night?", pauseAfter: 350 }
      ],
      prompt: "According to the counselor, what is a primary benefit of getting enough sleep each night?",
      options: [
        { key: "A", text: "Better memory and improved focus during morning classes." },
        { key: "B", text: "An automatic increase in monthly social media followers." },
        { key: "C", text: "Never having to do English homework again." },
        { key: "D", text: "The ability to run faster than school athletes." }
      ],
      correctAnswer: "A",
      explanation: "Konselor menjelaskan bahwa manfaat utama tidur cukup bagi remaja adalah daya ingat yang lebih baik dan konsentrasi yang meningkat saat pelajaran pagi ('memory improves and they can focus easily during morning classes').",
      grammarNote: "Compound sentence with coordinating conjunction 'and'."
    },
    {
      id: 10,
      source: "Kemendikbudristek — Listening Monologue: Healthy Sleep Habits for Students",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        { role: "counselor_f", lang: "en-US", name: "Mrs. Maya", text: "Please turn off your screens thirty minutes before bedtime to rest well.", pauseAfter: 350 },
        { role: "narrator", lang: "en-US", text: "Number ten. What practical advice does the speaker give to help students rest well?", pauseAfter: 300 }
      ],
      prompt: "What practical advice does the speaker give to help students rest well?",
      options: [
        { key: "A", text: "Keep phone screens on under the pillow all night." },
        { key: "B", text: "Turn off electronic screens thirty minutes before bedtime." },
        { key: "C", text: "Drink three cups of strong coffee before sleeping." },
        { key: "D", text: "Play video games until sunrise." }
      ],
      correctAnswer: "B",
      explanation: "Konselor menyarankan untuk mematikan layar gawai 30 menit sebelum tidur agar dapat beristirahat dengan baik ('turn off your screens thirty minutes before bedtime').",
      grammarNote: "Prepositional time phrase: 'thirty minutes before bedtime'."
    },
    {
      id: 11,
      source: "Cerita Rakyat Jawa Tengah — The Legend of Prambanan Temple (Fase F)",
      type: "single_choice",
      title: "Reading Section: Narrative Comprehension",
      stimulusTitle: "Text 1: The Legend of Prambanan Temple",
      stimulusBody: "A long time ago in Central Java, there were two neighboring kingdoms: Pengging and Prambanan. The King of Pengging had a powerful son named Bandung Bondowoso. Bandung was strong and skilled in martial arts, and he also possessed supernatural powers. When war broke out between the two kingdoms, Bandung Bondowoso defeated the King of Prambanan, Prabu Boko, in a fierce battle.<br><br>Following his victory, Bandung Bondowoso entered the palace of Prambanan. There, he saw the late king's daughter, the beautiful Princess Roro Jonggrang. Bandung fell in love with her immediately and asked her to marry him. However, Roro Jonggrang did not want to marry Bandung because he had killed her beloved father. She knew she could not refuse him directly without putting her people in danger. Therefore, she devised a clever plan.<br><br>'I will marry you, Bandung,' said the princess politely. 'However, you must build one thousand stone temples and two deep wells for me in just one single night before the first rooster crows at dawn.'<br><br>Confident in his magical power, Bandung Bondowoso agreed. When night fell, he called upon a horde of supernatural spirits to help him carve and stack the stones. The spirits worked with incredible speed. By midnight, more than nine hundred temples were already standing tall. Seeing this, Roro Jonggrang panicked. She knew Bandung would finish the task in time.<br><br>Quickly, the princess woke up the palace maids and village women. She commanded them to burn dried straw in the east and pound rice loudly in wooden mortars (lesung). Soon, the eastern sky glowed bright red like morning dawn, and the roosters began to crow. Hearing the roosters and seeing the red sky, the spirits thought that morning had arrived. Terrified of sunlight, they abandoned their work and fled into the underworld, leaving only 999 temples completed.<br><br>Bandung Bondowoso soon realized that he had been tricked. Furious with Roro Jonggrang's deceit, he confronted her and said, 'You have cheated me! You will complete the thousandth temple yourself!' With his supernatural power, he cursed the princess, turning her into a magnificent stone statue. Today, this statue can still be seen inside the largest temple of Prambanan, known as Candi Roro Jonggrang. The legend teaches us about the consequences of broken promises and the danger of arrogance.",
      prompt: "What is the primary conflict presented in the narrative passage?",
      options: [
        { key: "A", text: "A trade dispute between the merchants of Pengging and Prambanan." },
        { key: "B", text: "A disagreement between palace maids about preparing morning rice." },
        { key: "C", text: "Roro Jonggrang's rejection of Bandung Bondowoso's marriage proposal through a difficult condition." },
        { key: "D", text: "A natural disaster that destroyed all the ancient stone monuments." }
      ],
      correctAnswer: "C",
      explanation: "Konflik utama dalam cerita adalah penolakan halus Roro Jonggrang terhadap pinangan Bandung Bondowoso dengan mengajukan syarat mustahil yaitu membangun seribu candi dalam satu malam.",
      grammarNote: "Narrative conflict: protagonist versus antagonist."
    },
    {
      id: 12,
      source: "Cerita Rakyat Jawa Tengah — The Legend of Prambanan Temple (Fase F)",
      type: "single_choice",
      title: "Reading Section: Narrative Comprehension",
      stimulusTitle: "Text 1: The Legend of Prambanan Temple",
      stimulusBody: "A long time ago in Central Java, there were two neighboring kingdoms: Pengging and Prambanan. The King of Pengging had a powerful son named Bandung Bondowoso. Bandung was strong and skilled in martial arts, and he also possessed supernatural powers. When war broke out between the two kingdoms, Bandung Bondowoso defeated the King of Prambanan, Prabu Boko, in a fierce battle.<br><br>Following his victory, Bandung Bondowoso entered the palace of Prambanan. There, he saw the late king's daughter, the beautiful Princess Roro Jonggrang. Bandung fell in love with her immediately and asked her to marry him. However, Roro Jonggrang did not want to marry Bandung because he had killed her beloved father. She knew she could not refuse him directly without putting her people in danger. Therefore, she devised a clever plan.<br><br>'I will marry you, Bandung,' said the princess politely. 'However, you must build one thousand stone temples and two deep wells for me in just one single night before the first rooster crows at dawn.'<br><br>Confident in his magical power, Bandung Bondowoso agreed. When night fell, he called upon a horde of supernatural spirits to help him carve and stack the stones. The spirits worked with incredible speed. By midnight, more than nine hundred temples were already standing tall. Seeing this, Roro Jonggrang panicked. She knew Bandung would finish the task in time.<br><br>Quickly, the princess woke up the palace maids and village women. She commanded them to burn dried straw in the east and pound rice loudly in wooden mortars (lesung). Soon, the eastern sky glowed bright red like morning dawn, and the roosters began to crow. Hearing the roosters and seeing the red sky, the spirits thought that morning had arrived. Terrified of sunlight, they abandoned their work and fled into the underworld, leaving only 999 temples completed.<br><br>Bandung Bondowoso soon realized that he had been tricked. Furious with Roro Jonggrang's deceit, he confronted her and said, 'You have cheated me! You will complete the thousandth temple yourself!' With his supernatural power, he cursed the princess, turning her into a magnificent stone statue. Today, this statue can still be seen inside the largest temple of Prambanan, known as Candi Roro Jonggrang. The legend teaches us about the consequences of broken promises and the danger of arrogance.",
      prompt: "Based on paragraph 2, why did Princess Roro Jonggrang refuse to marry Bandung Bondowoso?",
      options: [
        { key: "A", text: "Because Bandung was too poor to support her lifestyle." },
        { key: "B", text: "Because she wanted to travel overseas to another kingdom." },
        { key: "C", text: "Because Bandung refused to learn martial arts." },
        { key: "D", text: "Because Bandung had killed her father during the war between their kingdoms." }
      ],
      correctAnswer: "D",
      explanation: "Paragraf 2 menyatakan dengan jelas bahwa Roro Jonggrang menolak menikah dengan Bandung karena Bandung telah membunuh ayah tercintanya dalam pertempuran ('because he had killed her beloved father').",
      grammarNote: "Past perfect in cause clause: 'because he had killed her beloved father'."
    },
    {
      id: 13,
      source: "Cerita Rakyat Jawa Tengah — The Legend of Prambanan Temple (Fase F)",
      type: "single_choice",
      title: "Reading Section: Narrative Comprehension",
      stimulusTitle: "Text 1: The Legend of Prambanan Temple",
      stimulusBody: "A long time ago in Central Java, there were two neighboring kingdoms: Pengging and Prambanan. The King of Pengging had a powerful son named Bandung Bondowoso. Bandung was strong and skilled in martial arts, and he also possessed supernatural powers. When war broke out between the two kingdoms, Bandung Bondowoso defeated the King of Prambanan, Prabu Boko, in a fierce battle.<br><br>Following his victory, Bandung Bondowoso entered the palace of Prambanan. There, he saw the late king's daughter, the beautiful Princess Roro Jonggrang. Bandung fell in love with her immediately and asked her to marry him. However, Roro Jonggrang did not want to marry Bandung because he had killed her beloved father. She knew she could not refuse him directly without putting her people in danger. Therefore, she devised a clever plan.<br><br>'I will marry you, Bandung,' said the princess politely. 'However, you must build one thousand stone temples and two deep wells for me in just one single night before the first rooster crows at dawn.'<br><br>Confident in his magical power, Bandung Bondowoso agreed. When night fell, he called upon a horde of supernatural spirits to help him carve and stack the stones. The spirits worked with incredible speed. By midnight, more than nine hundred temples were already standing tall. Seeing this, Roro Jonggrang panicked. She knew Bandung would finish the task in time.<br><br>Quickly, the princess woke up the palace maids and village women. She commanded them to burn dried straw in the east and pound rice loudly in wooden mortars (lesung). Soon, the eastern sky glowed bright red like morning dawn, and the roosters began to crow. Hearing the roosters and seeing the red sky, the spirits thought that morning had arrived. Terrified of sunlight, they abandoned their work and fled into the underworld, leaving only 999 temples completed.<br><br>Bandung Bondowoso soon realized that he had been tricked. Furious with Roro Jonggrang's deceit, he confronted her and said, 'You have cheated me! You will complete the thousandth temple yourself!' With his supernatural power, he cursed the princess, turning her into a magnificent stone statue. Today, this statue can still be seen inside the largest temple of Prambanan, known as Candi Roro Jonggrang. The legend teaches us about the consequences of broken promises and the danger of arrogance.",
      prompt: "What actions did Princess Roro Jonggrang take to trick the supernatural spirits?",
      options: [
        { key: "A", text: "She ordered women to burn straw in the east and pound rice loudly to imitate dawn." },
        { key: "B", text: "She attacked the spirits with bows and arrows during the night." },
        { key: "C", text: "She hid all the stones deep inside the underground forest." },
        { key: "D", text: "She invited Bandung Bondowoso to a midnight feast." }
      ],
      correctAnswer: "A",
      explanation: "Roro Jonggrang memerintahkan dayang istana dan wanita desa untuk membakar jerami di sebelah timur dan menumbuk padi di lesung agar suasana fajar tiruan tercipta dan ayam jago berkokok ('burn dried straw in the east and pound rice loudly in wooden mortars').",
      grammarNote: "Infinitive clauses: 'to burn dried straw... and pound rice'."
    },
    {
      id: 14,
      source: "Cerita Rakyat Jawa Tengah — The Legend of Prambanan Temple (Fase F)",
      type: "single_choice",
      title: "Reading Section: Narrative Comprehension",
      stimulusTitle: "Text 1: The Legend of Prambanan Temple",
      stimulusBody: "A long time ago in Central Java, there were two neighboring kingdoms: Pengging and Prambanan. The King of Pengging had a powerful son named Bandung Bondowoso. Bandung was strong and skilled in martial arts, and he also possessed supernatural powers. When war broke out between the two kingdoms, Bandung Bondowoso defeated the King of Prambanan, Prabu Boko, in a fierce battle.<br><br>Following his victory, Bandung Bondowoso entered the palace of Prambanan. There, he saw the late king's daughter, the beautiful Princess Roro Jonggrang. Bandung fell in love with her immediately and asked her to marry him. However, Roro Jonggrang did not want to marry Bandung because he had killed her beloved father. She knew she could not refuse him directly without putting her people in danger. Therefore, she devised a clever plan.<br><br>'I will marry you, Bandung,' said the princess politely. 'However, you must build one thousand stone temples and two deep wells for me in just one single night before the first rooster crows at dawn.'<br><br>Confident in his magical power, Bandung Bondowoso agreed. When night fell, he called upon a horde of supernatural spirits to help him carve and stack the stones. The spirits worked with incredible speed. By midnight, more than nine hundred temples were already standing tall. Seeing this, Roro Jonggrang panicked. She knew Bandung would finish the task in time.<br><br>Quickly, the princess woke up the palace maids and village women. She commanded them to burn dried straw in the east and pound rice loudly in wooden mortars (lesung). Soon, the eastern sky glowed bright red like morning dawn, and the roosters began to crow. Hearing the roosters and seeing the red sky, the spirits thought that morning had arrived. Terrified of sunlight, they abandoned their work and fled into the underworld, leaving only 999 temples completed.<br><br>Bandung Bondowoso soon realized that he had been tricked. Furious with Roro Jonggrang's deceit, he confronted her and said, 'You have cheated me! You will complete the thousandth temple yourself!' With his supernatural power, he cursed the princess, turning her into a magnificent stone statue. Today, this statue can still be seen inside the largest temple of Prambanan, known as Candi Roro Jonggrang. The legend teaches us about the consequences of broken promises and the danger of arrogance.",
      prompt: "The word 'furious' in paragraph 6 ('Furious with Roro Jonggrang's deceit...') is closest in meaning to...",
      options: [
        { key: "A", text: "extremely happy" },
        { key: "B", text: "very angry" },
        { key: "C", text: "deeply confused" },
        { key: "D", text: "politely patient" }
      ],
      correctAnswer: "B",
      explanation: "Kata 'furious' bermakna sangat marah ('very angry').",
      grammarNote: "Adjective synonym: furious = extremely angry."
    },
    {
      id: 15,
      source: "Cerita Rakyat Jawa Tengah — The Legend of Prambanan Temple (Fase F)",
      type: "single_choice",
      title: "Reading Section: Narrative Comprehension",
      stimulusTitle: "Text 1: The Legend of Prambanan Temple",
      stimulusBody: "A long time ago in Central Java, there were two neighboring kingdoms: Pengging and Prambanan. The King of Pengging had a powerful son named Bandung Bondowoso. Bandung was strong and skilled in martial arts, and he also possessed supernatural powers. When war broke out between the two kingdoms, Bandung Bondowoso defeated the King of Prambanan, Prabu Boko, in a fierce battle.<br><br>Following his victory, Bandung Bondowoso entered the palace of Prambanan. There, he saw the late king's daughter, the beautiful Princess Roro Jonggrang. Bandung fell in love with her immediately and asked her to marry him. However, Roro Jonggrang did not want to marry Bandung because he had killed her beloved father. She knew she could not refuse him directly without putting her people in danger. Therefore, she devised a clever plan.<br><br>'I will marry you, Bandung,' said the princess politely. 'However, you must build one thousand stone temples and two deep wells for me in just one single night before the first rooster crows at dawn.'<br><br>Confident in his magical power, Bandung Bondowoso agreed. When night fell, he called upon a horde of supernatural spirits to help him carve and stack the stones. The spirits worked with incredible speed. By midnight, more than nine hundred temples were already standing tall. Seeing this, Roro Jonggrang panicked. She knew Bandung would finish the task in time.<br><br>Quickly, the princess woke up the palace maids and village women. She commanded them to burn dried straw in the east and pound rice loudly in wooden mortars (lesung). Soon, the eastern sky glowed bright red like morning dawn, and the roosters began to crow. Hearing the roosters and seeing the red sky, the spirits thought that morning had arrived. Terrified of sunlight, they abandoned their work and fled into the underworld, leaving only 999 temples completed.<br><br>Bandung Bondowoso soon realized that he had been tricked. Furious with Roro Jonggrang's deceit, he confronted her and said, 'You have cheated me! You will complete the thousandth temple yourself!' With his supernatural power, he cursed the princess, turning her into a magnificent stone statue. Today, this statue can still be seen inside the largest temple of Prambanan, known as Candi Roro Jonggrang. The legend teaches us about the consequences of broken promises and the danger of arrogance.",
      prompt: "In paragraph 5, what does the pronoun 'they' refer to in 'they abandoned their work and fled into the underworld'?",
      options: [
        { key: "A", text: "The village women" },
        { key: "B", text: "The palace maids" },
        { key: "C", text: "The supernatural spirits" },
        { key: "D", text: "The roosters" }
      ],
      correctAnswer: "C",
      explanation: "Kata ganti 'they' pada kalimat tersebut merujuk kepada para makhluk halus / jin pembangun candi ('the supernatural spirits') yang takut pada sinar matahari dan melarikan diri.",
      grammarNote: "Pronoun reference in narrative text."
    },
    {
      id: 16,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Narrative Plot Analysis",
      stimulusTitle: "Text 1: The Legend of Prambanan Temple",
      stimulusBody: "Review Text 1 (The Legend of Prambanan Temple).",
      prompt: "Based on Text 1, determine whether each statement regarding the narrative plot is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "Bandung Bondowoso asked supernatural spirits to help him build the stone temples.",
          isCorrect: true
        },
        {
          statement: "Princess Roro Jonggrang accepted Bandung's marriage proposal happily without any condition.",
          isCorrect: false
        },
        {
          statement: "The spirits abandoned the construction because they thought dawn had arrived.",
          isCorrect: true
        },
        {
          statement: "All one thousand temples were completely finished before the roosters crowed.",
          isCorrect: false
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Bandung Bondowoso meminta bantuan bangsa jin untuk mendirikan candi.<br>• Pernyataan 2: SALAH — Roro Jonggrang menolak dan memberikan syarat yang sangat berat.<br>• Pernyataan 3: BENAR — Bangsa jin lari ketakutan karena mengira fajar pagi telah tiba.<br>• Pernyataan 4: SALAH — Hanya 999 candi yang tuntas diselesaikan oleh bangsa jin.",
      grammarNote: "Reading comprehension of narrative sequence."
    },
    {
      id: 17,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Character Traits Analysis",
      stimulusTitle: "Text 1: The Legend of Prambanan Temple",
      stimulusBody: "Review Text 1 (The Legend of Prambanan Temple).",
      prompt: "Based on the character traits shown in Text 1, determine whether each statement is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "Bandung Bondowoso possessed remarkable physical power and supernatural abilities.",
          isCorrect: true
        },
        {
          statement: "Roro Jonggrang wanted to protect her people from war while avoiding marriage with her father's killer.",
          isCorrect: true
        },
        {
          statement: "Bandung Bondowoso praised Roro Jonggrang after finding out that she had burned straw.",
          isCorrect: false
        },
        {
          statement: "Roro Jonggrang used deception to prevent the completion of the thousandth temple.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Bandung memiliki kesaktian dan kekuatan luar biasa.<br>• Pernyataan 2: BENAR — Roro Jonggrang ingin melindungi rakyatnya dan menolak pembunuh ayahnya.<br>• Pernyataan 3: SALAH — Bandung sangat murka saat mengetahui dirinya diperdaya.<br>• Pernyataan 4: BENAR — Roro Jonggrang membuat fajar palsu untuk menggagalkan penyelesaian candi ke-1000.",
      grammarNote: "Character analysis in Indonesian legend."
    },
    {
      id: 18,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Cause and Effect Relations",
      stimulusTitle: "Text 1: The Legend of Prambanan Temple",
      stimulusBody: "Review Text 1 (The Legend of Prambanan Temple).",
      prompt: "Based on cause-and-effect relationships in the text, determine whether each statement is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "The spirits worked very quickly because Bandung Bondowoso commanded them with his magical power.",
          isCorrect: true
        },
        {
          statement: "The roosters crowed because the village women burned dried straw and pounded rice.",
          isCorrect: true
        },
        {
          statement: "Bandung cursed the princess because she openly defeated him in a physical battle.",
          isCorrect: false
        },
        {
          statement: "The thousandth temple was incomplete because the spirits fled before dawn.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Bangsa jin bekerja sangat cepat di bawah kendali sihir Bandung.<br>• Pernyataan 2: BENAR — Ayam jantan berkokok karena cahaya merah jerami dan bunyi lesung padi.<br>• Pernyataan 3: SALAH — Bandung mengutuk sang putri karena tipu daya sang putri yang membatalkan syarat.<br>• Pernyataan 4: BENAR — Candi ke-1000 tidak selesai karena jin melarikan diri sebelum fajar asli tiba.",
      grammarNote: "Cause-effect relations with 'because' and 'so that'."
    },
    {
      id: 19,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Healthy Lifestyle Insights",
      stimulusTitle: "Context: Teenager Digital Habits",
      stimulusBody: "Healthy habits help students study effectively and avoid stress.",
      prompt: "Determine whether each statement below regarding adolescent sleep and digital habits is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "Getting 7 to 8 hours of sleep helps high school students concentrate better during morning classes.",
          isCorrect: true
        },
        {
          statement: "Playing online games late into the night improves a student's immune system and memory.",
          isCorrect: false
        },
        {
          statement: "Turning off phone screens before bedtime allows the brain to relax and fall asleep naturally.",
          isCorrect: true
        },
        {
          statement: "Checking news on official school websites helps students avoid fake information.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Tidur 7-8 jam meningkatkan konsentrasi belajar di kelas pagi.<br>• Pernyataan 2: SALAH — Bermain gim larut malam justru menurunkan daya tahan tubuh dan merusak ingatan.<br>• Pernyataan 3: BENAR — Mematikan layar ponsel sebelum tidur membuat otak lebih rileks.<br>• Pernyataan 4: BENAR — Mengecek laman resmi sekolah membantu siswa terhindar dari kabar bohong (hoaks).",
      grammarNote: "Factual understanding of healthy habits."
    },
    {
      id: 20,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Moral Values Evaluation",
      stimulusTitle: "Text 1: The Legend of Prambanan Temple",
      stimulusBody: "Review Text 1 (The Legend of Prambanan Temple).",
      prompt: "Determine whether each statement below correctly reflects the moral values of the legend (**TRUE**) or contradicts them (**FALSE**):",
      matrixStatements: [
        {
          statement: "Using tricks and breaking promises can lead to tragic consequences for everyone involved.",
          isCorrect: true
        },
        {
          statement: "Forcing someone into marriage against their will is an honorable action in society.",
          isCorrect: false
        },
        {
          statement: "Arrogance and anger prevent people from solving problems peacefully.",
          isCorrect: true
        },
        {
          statement: "Mutual respect and honesty are essential for building peaceful relationships.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Menggunakan tipu daya dan mengingkari kesepakatan berujung pada akhir yang tragis.<br>• Pernyataan 2: SALAH — Memaksa seseorang untuk menikah secara paksa adalah tindakan yang salah.<br>• Pernyataan 3: BENAR — Kesombongan dan amarah menghalangi penyelesaian masalah secara damai.<br>• Pernyataan 4: BENAR — Saling menghargai dan kejujuran adalah dasar dari hubungan yang damai.",
      grammarNote: "Evaluation of ethical and moral lessons."
    },
    {
      id: 21,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Context: Digital Literacy",
      stimulusBody: "Digital literacy teaches students to be smart and responsible internet users.",
      prompt: "Which **TWO (2)** actions demonstrate responsible digital habits for senior high school students?",
      options: [
        { key: "A", text: "Verifying the source of breaking news before sharing it on social media groups." },
        { key: "B", text: "Forwarding unverified rumors immediately to create excitement among classmates." },
        { key: "C", text: "Setting daily screen time limits to ensure sufficient rest and study time." },
        { key: "D", text: "Using smartphones all night without sleeping during examination week." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua kebiasaan digital yang bijak dan bertanggung jawab adalah memeriksa kebenaran sumber berita sebelum membagikannya, serta membatasi waktu layar gawai setiap hari agar tubuh cukup istirahat.",
      grammarNote: "Gerunds indicating positive student habits."
    },
    {
      id: 22,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Text 1: The Legend of Prambanan Temple",
      stimulusBody: "Review Text 1 (The Legend of Prambanan Temple).",
      prompt: "Which **TWO (2)** character insights can be drawn from the story of Bandung Bondowoso and Roro Jonggrang?",
      options: [
        { key: "A", text: "Bandung Bondowoso relied heavily on his magical powers to accomplish an impossible challenge." },
        { key: "B", text: "Princess Roro Jonggrang genuinely loved Bandung Bondowoso from their first meeting." },
        { key: "C", text: "Roro Jonggrang used her quick wit and palace community to stop the spirits from finishing the temples." },
        { key: "D", text: "The King of Pengging surrendered his kingdom peacefully to the people of Prambanan." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua kesimpulan karakter yang tepat adalah bahwa Bandung Bondowoso mengandalkan kekuatan gaibnya untuk menuntaskan syarat mustahil, dan Roro Jonggrang menggunakan kecerdikan serta bantuan wanita istana untuk menghentikan bangsa jin.",
      grammarNote: "Character traits: supernatural reliance and quick wit."
    },
    {
      id: 23,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Grammar in Context: Connectors of Contrast",
      stimulusBody: "Connectors like 'Although' and 'Despite' express contrast between ideas.",
      prompt: "Which **TWO (2)** sentences correctly express contrast using **Although** or **Despite**?",
      options: [
        { key: "A", text: "Although Bandung Bondowoso had magical power, he could not win Roro Jonggrang's genuine affection." },
        { key: "B", text: "Despite the task was very hard, but Bandung agreed to build the temples." },
        { key: "C", text: "Despite the darkness of the night, the spirits worked with astonishing speed." },
        { key: "D", text: "Although the rooster crowed, because the morning sun had not risen yet." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua kalimat yang menggunakan kata hubung pertentangan secara benar adalah kalimat dengan 'Although + Subject + Verb' ('Although Bandung Bondowoso had magical power...') dan 'Despite + Noun Phrase' ('Despite the darkness of the night...'). Pilihan lain salah karena memadukan 'Despite' langsung dengan klausa berpredikat dan 'but', atau 'Although' bersama 'because'.",
      grammarNote: "Grammar rules of concession: Although + clause, Despite + noun phrase."
    },
    {
      id: 24,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Context: School Environment Initiatives",
      stimulusBody: "Green schools protect the environment through simple daily actions.",
      prompt: "Which **TWO (2)** practices help high school students reduce plastic waste on campus?",
      options: [
        { key: "A", text: "Bringing reusable water tumblers and lunch containers from home." },
        { key: "B", text: "Purchasing single-use bottled drinks every break time." },
        { key: "C", text: "Refilling water bottles at clean school drinking stations." },
        { key: "D", text: "Throwing plastic wrappers into open drainage canals." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua praktik ramah lingkungan untuk mengurangi sampah plastik di sekolah adalah membawa botol minum dan wadah makan isi ulang dari rumah, serta mengisi ulang botol di stasiun air minum sekolah.",
      grammarNote: "Parallel gerund structures: bringing, refilling."
    },
    {
      id: 25,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Context: Narrative & Descriptive Language",
      stimulusBody: "Descriptive words help readers visualize characters and settings.",
      prompt: "Which **TWO (2)** sentences use descriptive adjectives correctly in context?",
      options: [
        { key: "A", text: "The ancient stone temples of Prambanan stand tall under the clear morning sky." },
        { key: "B", text: "The princess was angrily because her father lost the kingdom." },
        { key: "C", text: "Bandung Bondowoso was a powerful warrior who possessed extraordinary strength." },
        { key: "D", text: "The spirits were happiness when they heard the roosters crow." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua kalimat yang menggunakan kata sifat (adjectives) dengan tepat adalah kalimat dengan 'ancient stone temples' dan 'powerful warrior... extraordinary strength'. Pilihan B salah karena menggunakan adverb 'angrily' setelah to-be, dan pilihan D salah karena menggunakan noun 'happiness' setelah to-be.",
      grammarNote: "Adjective usage after linking verbs and before nouns."
    },
    {
      id: 26,
      source: "Kemendikbudristek — Analytical Exposition: Healthy Sleep Habits",
      type: "single_choice",
      title: "Reading Section: Analytical Exposition",
      stimulusTitle: "Text 2: The Importance of Good Sleep for High School Students",
      stimulusBody: "In today's fast-paced digital world, many high school students stay awake until late at night. Some stay up late to finish school projects, but many others spend hours playing online games or scrolling through social media feeds on their phones. While staying connected with friends is enjoyable, sleeping late on a regular basis can negatively affect a student's health and academic achievement. Therefore, getting adequate sleep is vital for every teenager.<br><br>First and foremost, sleep is essential for brain function and memory. During deep sleep, the brain organizes and stores information that students learned throughout the day. When students do not get enough rest, they often experience difficulty focusing during morning classes, take longer to solve math problems, and find it hard to remember important facts during exams. A well-rested mind, on the other hand, is sharp, creative, and ready to learn.<br><br>Secondly, chronic lack of sleep harms physical and emotional well-being. Teenagers who consistently sleep fewer than six hours a night are more likely to catch colds and suffer from headaches because their immune system becomes weak. In addition, sleep deprivation often leads to mood swings, irritation, and higher levels of stress. When teenagers feel tired all day, they may lose motivation to participate in sports or join school clubs.<br><br>In conclusion, sleep is not a waste of time; it is a fundamental pillar of health and academic success. High school students should aim for seven to eight hours of restful sleep every night by managing their study time wisely and putting away electronic devices at least thirty minutes before going to bed.",
      prompt: "What is the primary communicative purpose of the text above?",
      options: [
        { key: "A", text: "To give step-by-step instructions on how to install video games." },
        { key: "B", text: "To persuade readers that good sleep is essential for students' health and learning." },
        { key: "C", text: "To describe the physical components of modern smartphones." },
        { key: "D", text: "To tell an entertaining folktale about an ancient king who loved sleeping." }
      ],
      correctAnswer: "B",
      explanation: "Tujuan komunikatif teks eksposisi analitis adalah meyakinkan pembaca bahwa tidur yang cukup sangat penting bagi kesehatan dan keberhasilan belajar siswa SMA ('to persuade readers that good sleep is essential for students' health and learning').",
      grammarNote: "Communicative purpose of analytical exposition: to persuade the reader about an important issue."
    },
    {
      id: 27,
      source: "Kemendikbudristek — Analytical Exposition: Healthy Sleep Habits",
      type: "single_choice",
      title: "Reading Section: Analytical Exposition",
      stimulusTitle: "Text 2: The Importance of Good Sleep for High School Students",
      stimulusBody: "In today's fast-paced digital world, many high school students stay awake until late at night. Some stay up late to finish school projects, but many others spend hours playing online games or scrolling through social media feeds on their phones. While staying connected with friends is enjoyable, sleeping late on a regular basis can negatively affect a student's health and academic achievement. Therefore, getting adequate sleep is vital for every teenager.<br><br>First and foremost, sleep is essential for brain function and memory. During deep sleep, the brain organizes and stores information that students learned throughout the day. When students do not get enough rest, they often experience difficulty focusing during morning classes, take longer to solve math problems, and find it hard to remember important facts during exams. A well-rested mind, on the other hand, is sharp, creative, and ready to learn.<br><br>Secondly, chronic lack of sleep harms physical and emotional well-being. Teenagers who consistently sleep fewer than six hours a night are more likely to catch colds and suffer from headaches because their immune system becomes weak. In addition, sleep deprivation often leads to mood swings, irritation, and higher levels of stress. When teenagers feel tired all day, they may lose motivation to participate in sports or join school clubs.<br><br>In conclusion, sleep is not a waste of time; it is a fundamental pillar of health and academic success. High school students should aim for seven to eight hours of restful sleep every night by managing their study time wisely and putting away electronic devices at least thirty minutes before going to bed.",
      prompt: "According to paragraph 2, what happens to the brain during deep sleep?",
      options: [
        { key: "A", text: "The brain stops working completely until morning." },
        { key: "B", text: "The brain organizes and stores information learned during the day." },
        { key: "C", text: "The brain forgets all foreign language words." },
        { key: "D", text: "The brain produces electric signals that prevent dreaming." }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 2 menyatakan bahwa saat tidur nyenyak, otak merapikan dan menyimpan informasi yang dipelajari siswa sepanjang hari ('the brain organizes and stores information that students learned throughout the day').",
      grammarNote: "Simple present fact: 'the brain organizes and stores information'."
    },
    {
      id: 28,
      source: "Kemendikbudristek — Analytical Exposition: Healthy Sleep Habits",
      type: "single_choice",
      title: "Reading Section: Analytical Exposition",
      stimulusTitle: "Text 2: The Importance of Good Sleep for High School Students",
      stimulusBody: "In today's fast-paced digital world, many high school students stay awake until late at night. Some stay up late to finish school projects, but many others spend hours playing online games or scrolling through social media feeds on their phones. While staying connected with friends is enjoyable, sleeping late on a regular basis can negatively affect a student's health and academic achievement. Therefore, getting adequate sleep is vital for every teenager.<br><br>First and foremost, sleep is essential for brain function and memory. During deep sleep, the brain organizes and stores information that students learned throughout the day. When students do not get enough rest, they often experience difficulty focusing during morning classes, take longer to solve math problems, and find it hard to remember important facts during exams. A well-rested mind, on the other hand, is sharp, creative, and ready to learn.<br><br>Secondly, chronic lack of sleep harms physical and emotional well-being. Teenagers who consistently sleep fewer than six hours a night are more likely to catch colds and suffer from headaches because their immune system becomes weak. In addition, sleep deprivation often leads to mood swings, irritation, and higher levels of stress. When teenagers feel tired all day, they may lose motivation to participate in sports or join school clubs.<br><br>In conclusion, sleep is not a waste of time; it is a fundamental pillar of health and academic success. High school students should aim for seven to eight hours of restful sleep every night by managing their study time wisely and putting away electronic devices at least thirty minutes before going to bed.",
      prompt: "Based on paragraph 3, what physical problems can happen if teenagers consistently sleep fewer than six hours a night?",
      options: [
        { key: "A", text: "They will gain extraordinary physical stamina." },
        { key: "B", text: "They may catch colds easily and suffer from headaches." },
        { key: "C", text: "Their vision will automatically improve." },
        { key: "D", text: "They will grow taller much faster." }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 3 menyatakan bahwa remaja yang tidur kurang dari enam jam rentan terkena pilek/flu dan sakit kepala karena sistem kekebalan tubuh yang melemah ('more likely to catch colds and suffer from headaches').",
      grammarNote: "Comparative phrase: 'more likely to catch colds'."
    },
    {
      id: 29,
      source: "Kemendikbudristek — Analytical Exposition: Healthy Sleep Habits",
      type: "single_choice",
      title: "Reading Section: Analytical Exposition",
      stimulusTitle: "Text 2: The Importance of Good Sleep for High School Students",
      stimulusBody: "In today's fast-paced digital world, many high school students stay awake until late at night. Some stay up late to finish school projects, but many others spend hours playing online games or scrolling through social media feeds on their phones. While staying connected with friends is enjoyable, sleeping late on a regular basis can negatively affect a student's health and academic achievement. Therefore, getting adequate sleep is vital for every teenager.<br><br>First and foremost, sleep is essential for brain function and memory. During deep sleep, the brain organizes and stores information that students learned throughout the day. When students do not get enough rest, they often experience difficulty focusing during morning classes, take longer to solve math problems, and find it hard to remember important facts during exams. A well-rested mind, on the other hand, is sharp, creative, and ready to learn.<br><br>Secondly, chronic lack of sleep harms physical and emotional well-being. Teenagers who consistently sleep fewer than six hours a night are more likely to catch colds and suffer from headaches because their immune system becomes weak. In addition, sleep deprivation often leads to mood swings, irritation, and higher levels of stress. When teenagers feel tired all day, they may lose motivation to participate in sports or join school clubs.<br><br>In conclusion, sleep is not a waste of time; it is a fundamental pillar of health and academic success. High school students should aim for seven to eight hours of restful sleep every night by managing their study time wisely and putting away electronic devices at least thirty minutes before going to bed.",
      prompt: "The word 'adequate' in paragraph 1 ('getting adequate sleep is vital for every teenager') is closest in meaning to...",
      options: [
        { key: "A", text: "insufficient" },
        { key: "B", text: "excessive" },
        { key: "C", text: "sufficient" },
        { key: "D", text: "harmful" }
      ],
      correctAnswer: "C",
      explanation: "Kata 'adequate' bermakna cukup atau memadai ('sufficient').",
      grammarNote: "Adjective synonym: adequate = sufficient."
    },
    {
      id: 30,
      source: "Kemendikbudristek — Analytical Exposition: Healthy Sleep Habits",
      type: "single_choice",
      title: "Reading Section: Analytical Exposition",
      stimulusTitle: "Text 2: The Importance of Good Sleep for High School Students",
      stimulusBody: "In today's fast-paced digital world, many high school students stay awake until late at night. Some stay up late to finish school projects, but many others spend hours playing online games or scrolling through social media feeds on their phones. While staying connected with friends is enjoyable, sleeping late on a regular basis can negatively affect a student's health and academic achievement. Therefore, getting adequate sleep is vital for every teenager.<br><br>First and foremost, sleep is essential for brain function and memory. During deep sleep, the brain organizes and stores information that students learned throughout the day. When students do not get enough rest, they often experience difficulty focusing during morning classes, take longer to solve math problems, and find it hard to remember important facts during exams. A well-rested mind, on the other hand, is sharp, creative, and ready to learn.<br><br>Secondly, chronic lack of sleep harms physical and emotional well-being. Teenagers who consistently sleep fewer than six hours a night are more likely to catch colds and suffer from headaches because their immune system becomes weak. In addition, sleep deprivation often leads to mood swings, irritation, and higher levels of stress. When teenagers feel tired all day, they may lose motivation to participate in sports or join school clubs.<br><br>In conclusion, sleep is not a waste of time; it is a fundamental pillar of health and academic success. High school students should aim for seven to eight hours of restful sleep every night by managing their study time wisely and putting away electronic devices at least thirty minutes before going to bed.",
      prompt: "What practical recommendation does the author give in the concluding paragraph?",
      options: [
        { key: "A", text: "Drinking energy drinks every night to stay awake." },
        { key: "B", text: "Sleeping only during weekend afternoons." },
        { key: "C", text: "Never studying for school tests." },
        { key: "D", text: "Putting away electronic devices thirty minutes before going to bed." }
      ],
      correctAnswer: "D",
      explanation: "Penulis merekomendasikan siswa untuk tidur 7-8 jam per malam dan menjauhkan gawai elektronik setidaknya 30 menit sebelum tidur ('putting away electronic devices at least thirty minutes before going to bed').",
      grammarNote: "Reiteration in analytical exposition: 'High school students should aim for seven to eight hours of restful sleep'."
    },
    {
      id: 31,
      source: "Kaidah Tata Bahasa Kelas XI — Past Simple Tense",
      type: "single_choice",
      title: "Grammar & Structure: Past Narrative Tense",
      prompt: "Choose the correct past verb form to complete the sentence:<br><br><em>'Prince Bandung Bondowoso _______ the kingdom of Prambanan in a fierce battle.'</em>",
      options: [
        { key: "A", text: "defeated" },
        { key: "B", text: "defeats" },
        { key: "C", text: "is defeating" },
        { key: "D", text: "will defeat" }
      ],
      correctAnswer: "A",
      explanation: "Untuk menyatakan peristiwa lampau dalam teks naratif, kata kerja yang digunakan adalah bentuk Past Simple (V2): 'defeated' (mengalahkan).",
      grammarNote: "Past simple tense (V2) for completed past events in narratives."
    },
    {
      id: 32,
      source: "Kaidah Tata Bahasa Kelas XI — Connectors of Contrast",
      type: "single_choice",
      title: "Grammar & Structure: Conjunction of Contrast",
      prompt: "Which conjunction of contrast correctly completes the sentence?<br><br><em>'_______ the task was very difficult, Bandung Bondowoso accepted the challenge confidently.'</em>",
      options: [
        { key: "A", text: "Because" },
        { key: "B", text: "Although" },
        { key: "C", text: "Since" },
        { key: "D", text: "So that" }
      ],
      correctAnswer: "B",
      explanation: "Kata hubung yang menyatakan hubungan pertentangan yang diikuti oleh klausa lengkap (Subject + Verb) adalah 'Although' (meskipun/walaupun).",
      grammarNote: "Concession connector: Although + clause."
    },
    {
      id: 33,
      source: "Kaidah Tata Bahasa Kelas XI — Cause and Effect Connectors",
      type: "single_choice",
      title: "Grammar & Structure: Cause Connectors",
      prompt: "Choose the correct connector to express cause before a noun phrase:<br><br><em>'Roro Jonggrang devised a clever plan _______ her fear of Bandung\\'s magical power.'</em>",
      options: [
        { key: "A", text: "so that" },
        { key: "B", text: "although" },
        { key: "C", text: "because of" },
        { key: "D", text: "in order to" }
      ],
      correctAnswer: "C",
      explanation: "Frasa 'her fear of Bandung\\'s magical power' adalah Noun Phrase. Kata hubung penyebab yang diikuti oleh noun phrase adalah preposisi 'because of'.",
      grammarNote: "Because of + Noun Phrase."
    },
    {
      id: 34,
      source: "Kaidah Tata Bahasa Kelas XI — Simple Past Passive Voice",
      type: "single_choice",
      title: "Grammar & Structure: Passive Voice",
      prompt: "Which passive verb phrase correctly completes the sentence?<br><br><em>'Nearly one thousand stone temples _______ by the spirits in a single night.'</em>",
      options: [
        { key: "A", text: "were built" },
        { key: "B", text: "is built" },
        { key: "C", text: "builds" },
        { key: "D", text: "was building" }
      ],
      correctAnswer: "A",
      explanation: "Subjek jamak 'Nearly one thousand stone temples' menerima tindakan di masa lampau. Rumus kalimat pasif Past Simple jamak adalah: were + V3 ('were built').",
      grammarNote: "Past passive voice (plural): were + past participle (V3)."
    },
    {
      id: 35,
      source: "Kaidah Tata Bahasa Kelas XI — Relative Pronouns",
      type: "single_choice",
      title: "Grammar & Structure: Relative Clauses",
      prompt: "Choose the correct relative pronoun to connect the person with her action:<br><br><em>'Princess Roro Jonggrang, _______ was the daughter of King Boko, refused to marry the prince.'</em>",
      options: [
        { key: "A", text: "who" },
        { key: "B", text: "which" },
        { key: "C", text: "whose" },
        { key: "D", text: "where" }
      ],
      correctAnswer: "A",
      explanation: "Kata ganti penghubung (relative pronoun) yang digunakan untuk merujuk pada subjek orang (Princess Roro Jonggrang) adalah 'who'.",
      grammarNote: "Relative pronoun for persons: who."
    },
    {
      id: 36,
      source: "Kaidah Tata Bahasa Kelas XI — First Conditional",
      type: "single_choice",
      title: "Grammar & Structure: Conditionals",
      prompt: "Select the correct verb form for the if-clause in this first conditional sentence:<br><br><em>'If high school students _______ enough sleep every night, they will concentrate better during classes.'</em>",
      options: [
        { key: "A", text: "get" },
        { key: "B", text: "got" },
        { key: "C", text: "had got" },
        { key: "D", text: "will get" }
      ],
      correctAnswer: "A",
      explanation: "Pola baku kalimat pengandaian tipe 1 (First Conditional) adalah: If + Subject + V1 (Simple Present), Subject + will + V1. Maka kata kerja pada klausa 'if' adalah bentuk dasar 'get'.",
      grammarNote: "First conditional formula: If + Simple Present (V1), will + V1."
    },
    {
      id: 37,
      source: "Kaidah Tata Bahasa Kelas XI — Modals for Recommendation",
      type: "single_choice",
      title: "Grammar & Structure: Modal Auxiliaries",
      prompt: "Which modal verb appropriately expresses strong positive advice?<br><br><em>'Teenagers _______ put away their smartphones thirty minutes before sleeping.'</em>",
      options: [
        { key: "A", text: "should" },
        { key: "B", text: "might have" },
        { key: "C", text: "would have" },
        { key: "D", text: "was" }
      ],
      correctAnswer: "A",
      explanation: "Kata kerja bantu modal yang tepat untuk menyatakan saran atau anjuran baik adalah 'should' (sebaiknya/seharusnya).",
      grammarNote: "Modal of recommendation: Subject + should + V1."
    },
    {
      id: 38,
      source: "Kaidah Tata Bahasa Kelas XI — Verb-Noun Collocation",
      type: "single_choice",
      title: "Grammar & Structure: Collocation",
      prompt: "Which verb pairs naturally with the noun phrase 'close attention'?<br><br><em>'Students should _______ close attention to the teacher\\'s explanation in class.'</em>",
      options: [
        { key: "A", text: "pay" },
        { key: "B", text: "make" },
        { key: "C", text: "do" },
        { key: "D", text: "buy" }
      ],
      correctAnswer: "A",
      explanation: "Kolokasi kata kerja yang baku dan alami dengan 'attention' adalah 'pay attention' (memperhatikan).",
      grammarNote: "Collocation: pay attention."
    },
    {
      id: 39,
      source: "Kaidah Tata Bahasa Kelas XI — Expressing Agreement",
      type: "single_choice",
      title: "Grammar & Structure: Expressing Agreement",
      prompt: "Which expression best demonstrates complete agreement with a friend's opinion?<br><br><em>Budi: 'I think reducing plastic waste makes our school much cleaner.'<br>Siti: '_______ It is a very positive project for all of us.'</em>",
      options: [
        { key: "A", text: "I completely agree with you." },
        { key: "B", text: "I totally disagree with that." },
        { key: "C", text: "I doubt that is true." },
        { key: "D", text: "I am not sure about your idea." }
      ],
      correctAnswer: "A",
      explanation: "Ungkapan yang menunjukkan persetujuan penuh terhadap pendapat teman adalah 'I completely agree with you' (Saya sangat setuju denganmu).",
      grammarNote: "Language function: expressing full agreement."
    },
    {
      id: 40,
      source: "Kaidah Tata Bahasa Kelas XI — Subject-Verb Agreement",
      type: "single_choice",
      title: "Grammar & Structure: Subject-Verb Agreement",
      prompt: "Choose the correct verb form that agrees with the plural subject in this sentence:<br><br><em>'Both the teachers and the students _______ delighted with the green school project.'</em>",
      options: [
        { key: "A", text: "are" },
        { key: "B", text: "is" },
        { key: "C", text: "was" },
        { key: "D", text: "has" }
      ],
      correctAnswer: "A",
      explanation: "Subjek gabungan dengan konjungsi 'Both... and...' selalu bernilai jamak (plural). Maka to-be yang tepat dalam Present Tense adalah 'are'.",
      grammarNote: "Subject-verb agreement: Both A and B + plural verb (are)."
    }
  ];
}
`;
}

module.exports = { generateGrade11WajibBank };

