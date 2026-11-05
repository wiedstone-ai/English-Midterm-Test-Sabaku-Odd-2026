/**
 * ASESMEN SUMATIF TENGAH SEMESTER (ASTS) GASAL 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT XII (FASE F - TL)
 * Standar: TKA & AKM Literasi (Pilihan Ganda, Matrix Kompleks, & MCMA - CEFR Level B1)
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

const SVG_PICTURES = {
  debateContest: `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="22" width="64" height="46" rx="4" fill="#eff6ff" stroke="#2563eb"/><circle cx="50" cy="45" r="14" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3 3"/><line x1="50" y1="36" x2="50" y2="54" stroke="#1d4ed8"/><line x1="41" y1="45" x2="59" y2="45" stroke="#1d4ed8"/><path d="M26 32h14M26 38h10M60 52h14M60 58h10" stroke="#93c5fd"/><path d="M30 76l20-8 20 8" stroke="#475569" stroke-width="2"/><line x1="50" y1="68" x2="50" y2="84" stroke="#475569" stroke-width="3"/></svg>`,
  cleanWindSolar: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 85c15-8 30-14 70-4" stroke="#16a34a" stroke-width="3"/><path d="M35 80V50c0-12 12-22 25-22s25 10 25 22v30H35z" fill="#ecfdf5" stroke="#059669"/><path d="M50 28v-12M42 16h16" stroke="#047857" stroke-width="2"/><circle cx="60" cy="46" r="6" fill="#fef08a" stroke="#ca8a04"/><line x1="60" y1="40" x2="75" y2="28" stroke="#0284c7" stroke-width="2.5"/><circle cx="75" cy="28" r="3" fill="#0284c7"/></svg>`,
  smartGreenhouse: `<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 75c8-18 36-24 76 0" stroke="#78350f" stroke-width="3"/><path d="M22 62c6-14 28-18 56 0" stroke="#b45309" stroke-dasharray="2 2"/><polygon points="50,15 35,45 65,45" fill="#fef3c7" stroke="#d97706"/><circle cx="50" cy="30" r="5" fill="#d97706"/><path d="M38 48h24v20H38z" fill="#fef9c3" stroke="#ca8a04"/><path d="M42 48v20M58 48v20" stroke="#b45309"/><line x1="15" y1="84" x2="85" y2="84" stroke="#64748b"/></svg>`,
  manufacturingPlant: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="50" width="30" height="35" fill="#f1f5f9"/><rect x="55" y="40" width="25" height="45" fill="#e2e8f0"/><line x1="35" y1="50" x2="35" y2="25" stroke="#64748b" stroke-width="2.5"/><line x1="68" y1="40" x2="68" y2="20" stroke="#64748b" stroke-width="2.5"/><path d="M30 20c3-5 7-5 10 0M63 15c3-5 7-5 10 0" stroke="#94a3b8"/></svg>`
};

function getGrade12TLAstsQuestions() {
  return [
    {
      id: 1,
      source: "Kemendikbudristek — Listening Practice Fase F Kelas XII",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number one. Look at the pictures. In the school auditorium, two teams of senior high school students are holding an English debate competition about renewable energy. Which picture matches the description?",
      audioSegments: [
        {
          text: "Number one. Look at the pictures in your test booklet. In the school auditorium, two teams of senior high school students are holding an English debate competition about renewable energy. Which picture matches the description?",
          lang: "en-US",
          role: "narrator"
        }
      ],
      prompt: "Which picture matches the high school students holding an English debate in an auditorium?",
      options: [
        { key: "A", svg: SVG_PICTURES.debateContest, label: "Students holding an English debate in an auditorium" },
        { key: "B", svg: SVG_PICTURES.cleanWindSolar, label: "Clean wind turbines and solar panels on a coastal hill" },
        { key: "C", svg: SVG_PICTURES.smartGreenhouse, label: "A modern agricultural greenhouse with vegetables" },
        { key: "D", svg: SVG_PICTURES.manufacturingPlant, label: "A traditional industrial manufacturing plant" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan dua tim siswa SMA yang sedang berkompetisi dalam lomba debat bahasa Inggris di auditorium ('holding an English debate competition about renewable energy').",
      grammarNote: "Present continuous tense: 'students are holding an English debate competition'."
    },
    {
      id: 2,
      source: "Kemendikbudristek — Listening Practice Fase F Kelas XII",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number two. Look at the pictures. Built on an open green field, tall white wind turbines and clean solar panels produce renewable electricity for local houses. Which picture shows this clean energy site?",
      audioSegments: [
        {
          text: "Number two. Look at the pictures. Built on an open green field, tall white wind turbines and clean solar panels produce renewable electricity for local houses. Which picture shows this clean energy site?",
          lang: "en-US",
          role: "narrator"
        }
      ],
      prompt: "Which picture accurately depicts the renewable wind turbines and solar panels?",
      options: [
        { key: "A", svg: SVG_PICTURES.debateContest, label: "Students holding an English debate in an auditorium" },
        { key: "B", svg: SVG_PICTURES.cleanWindSolar, label: "Clean wind turbines and solar panels on a coastal hill" },
        { key: "C", svg: SVG_PICTURES.smartGreenhouse, label: "A modern agricultural greenhouse with vegetables" },
        { key: "D", svg: SVG_PICTURES.manufacturingPlant, label: "A traditional industrial manufacturing plant" }
      ],
      correctAnswer: "B",
      explanation: "Audio mendeskripsikan instalasi turbin angin dan panel surya di padang rumput hijau yang menghasilkan listrik bersih ('tall white wind turbines and clean solar panels produce renewable electricity').",
      grammarNote: "Compound subject: 'tall white wind turbines and clean solar panels'."
    },
    {
      id: 3,
      source: "Kemendikbudristek — Listening Practice Fase F Kelas XII",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number three. Look at the pictures. Inside a modern agricultural greenhouse, rows of fresh organic vegetables are grown using hydroponic water systems. Which picture matches this scene?",
      audioSegments: [
        {
          text: "Number three. Look at the pictures. Inside a modern agricultural greenhouse, rows of fresh organic vegetables are grown using hydroponic water systems. Which picture matches this scene?",
          lang: "en-US",
          role: "narrator"
        }
      ],
      prompt: "Which picture matches the agricultural greenhouse with hydroponic vegetables?",
      options: [
        { key: "A", svg: SVG_PICTURES.debateContest, label: "Students holding an English debate in an auditorium" },
        { key: "B", svg: SVG_PICTURES.cleanWindSolar, label: "Clean wind turbines and solar panels on a coastal hill" },
        { key: "C", svg: SVG_PICTURES.smartGreenhouse, label: "A modern agricultural greenhouse with vegetables" },
        { key: "D", svg: SVG_PICTURES.manufacturingPlant, label: "A traditional industrial manufacturing plant" }
      ],
      correctAnswer: "C",
      explanation: "Audio mendeskripsikan fasilitas rumah kaca modern dengan tanaman sayuran organik hidroponik ('modern agricultural greenhouse, rows of fresh organic vegetables are grown').",
      grammarNote: "Passive voice: 'vegetables are grown using hydroponic water systems'."
    },
    {
      id: 4,
      source: "Modul Pembelajaran Bahasa Inggris Kelas XII — Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Number four. Listen to a conversation between a student and a teacher.", pauseAfter: 450 },
        { role: "student_m", lang: "en-US", name: "Fajar", text: "Ma'am, is it acceptable to use artificial intelligence to write my internship application letter?", pauseAfter: 350 },
        { role: "teacher_f", lang: "en-US", name: "Mrs. Retno", text: "AI can help you format your letter and check grammar, Fajar. However, you must include your own real experiences, school projects, and honest voice. Employers look for personal sincerity and genuine passion.", pauseAfter: 450 },
        { role: "narrator", lang: "en-US", text: "Question: What advice does the teacher give regarding application letters?", pauseAfter: 300 }
      ],
      stimulusTitle: "Dialogue: Writing an Internship Application Letter",
      stimulusBody: "<p><strong>Speaker 1 (Male):</strong> Ma'am, is it acceptable to use artificial intelligence to write my internship application letter?</p><p><strong>Speaker 2 (Female):</strong> AI can help you format your letter and check grammar, Fajar. However, you must include your own real experiences, school projects, and honest voice. Employers look for personal sincerity and genuine passion.</p>",
      prompt: "What advice does the teacher give regarding internship application letters?",
      options: [
        { key: "A", text: "Personalize the letter with genuine experiences, projects, and an honest voice." },
        { key: "B", text: "Copy an entire online template without making any changes." },
        { key: "C", text: "Avoid applying for internships until graduating from university." },
        { key: "D", text: "Pay a professional writer to compose the letter." }
      ],
      correctAnswer: "A",
      explanation: "Guru menyarankan agar siswa menyertakan pengalaman nyata, proyek sekolah, dan kejujuran diri sendiri dalam surat lamaran ('include your own real experiences, school projects, and honest voice').",
      grammarNote: "Modal verb of obligation: 'you must include your own real experiences'."
    },
    {
      id: 5,
      source: "Modul Pembelajaran Bahasa Inggris Kelas XII — Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Number five. Listen to two students discussing renewable energy.", pauseAfter: 450 },
        { role: "student_m", lang: "en-US", name: "Ilham", text: "Why do many countries invest heavily in solar and wind energy instead of coal?", pauseAfter: 350 },
        { role: "student_f", lang: "en-US", name: "Nadia", text: "Because solar and wind power do not create air pollution or harmful greenhouse gases. They help protect our planet from climate change.", pauseAfter: 400 },
        { role: "narrator", lang: "en-US", text: "Question: Why is renewable energy preferred according to the female speaker?", pauseAfter: 300 }
      ],
      stimulusTitle: "Dialogue: Benefits of Renewable Energy",
      stimulusBody: "<p><strong>Speaker 1 (Male):</strong> Why do many countries invest heavily in solar and wind energy instead of coal?</p><p><strong>Speaker 2 (Female):</strong> Because solar and wind power do not create air pollution or harmful greenhouse gases. They help protect our planet from climate change.</p>",
      prompt: "Why is renewable energy preferred according to the female speaker?",
      options: [
        { key: "A", text: "It does not produce air pollution or harmful greenhouse gases." },
        { key: "B", text: "It costs more money to build and maintain than coal plants." },
        { key: "C", text: "It causes factories to close permanently." },
        { key: "D", text: "It only generates electricity during heavy storms." }
      ],
      correctAnswer: "A",
      explanation: "Siswi tersebut menjelaskan bahwa energi terbarukan lebih disukai karena tidak menimbulkan polusi udara maupun gas rumah kaca berbahaya ('do not create air pollution or harmful greenhouse gases').",
      grammarNote: "Conjunction of reason: 'Because solar and wind power do not create air pollution'."
    },
    {
      id: 6,
      source: "Modul Pembelajaran Bahasa Inggris Kelas XII — Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Number six. Listen to two seniors preparing for a job interview.", pauseAfter: 450 },
        { role: "student_m", lang: "en-US", name: "Rian", text: "I feel quite nervous about my first job interview tomorrow morning.", pauseAfter: 350 },
        { role: "student_f", lang: "en-US", name: "Siti", text: "Do not worry, Rian! Research the company beforehand, dress neatly, and answer questions calmly and politely. Good preparation builds confidence.", pauseAfter: 400 },
        { role: "narrator", lang: "en-US", text: "Question: What practical tips does the female student suggest for the interview?", pauseAfter: 300 }
      ],
      stimulusTitle: "Dialogue: Preparing for a Job Interview",
      stimulusBody: "<p><strong>Speaker 1 (Male):</strong> I feel quite nervous about my first job interview tomorrow morning.</p><p><strong>Speaker 2 (Female):</strong> Do not worry, Rian! Research the company beforehand, dress neatly, and answer questions calmly and politely. Good preparation builds confidence.</p>",
      prompt: "What practical tips does the female student suggest for the interview?",
      options: [
        { key: "A", text: "Research the company, dress neatly, and answer questions calmly." },
        { key: "B", text: "Arrive two hours late to test the interviewer's patience." },
        { key: "C", text: "Memorize long speeches in foreign languages." },
        { key: "D", text: "Refuse to answer questions about school activities." }
      ],
      correctAnswer: "A",
      explanation: "Saran praktis menghadapi wawancara kerja adalah mempelajari profil perusahaan terlebih dahulu, berpakaian rapi, serta menjawab pertanyaan dengan tenang dan santun ('Research the company beforehand, dress neatly, and answer questions calmly and politely').",
      grammarNote: "Imperative advice: 'Research the company, dress neatly'."
    },
    {
      id: 7,
      source: "Kemendikbudristek — Listening Monologue: Career Guidance",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Questions seven and eight are based on the following talk by a school career counselor.", pauseAfter: 400 },
        { role: "counselor_m", lang: "en-US", name: "Mr. Pratama", text: "Good morning, twelfth-grade students. As graduation approaches, many of you will write your first job application letters. A well-written application letter must be clear, concise, and professional. In the opening paragraph, state the position you are applying for. In the body, highlight your relevant school achievements, practical skills, and leadership experiences. Finally, in the closing paragraph, express your enthusiasm and politely request an interview.", pauseAfter: 500 },
        { role: "narrator", lang: "en-US", text: "Number seven. What is the primary topic of the counselor's talk?", pauseAfter: 350 }
      ],
      prompt: "What is the primary topic of the counselor's talk?",
      options: [
        { key: "A", text: "How to compose a clear and professional job application letter." },
        { key: "B", text: "How to program mobile computer games." },
        { key: "C", text: "Why students should avoid entering the job market." },
        { key: "D", text: "The history of printing presses in Europe." }
      ],
      correctAnswer: "A",
      explanation: "Topik utama arahan konselor karir adalah cara menyusun surat lamaran kerja yang jelas dan profesional menjelang kelulusan sekolah ('how to write a clear and professional job application letter').",
      grammarNote: "Infinitive of purpose: 'to compose a clear and professional letter'."
    },
    {
      id: 8,
      source: "Kemendikbudristek — Listening Monologue: Career Guidance",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        { role: "counselor_m", lang: "en-US", name: "Mr. Pratama", text: "Finally, in the closing paragraph, express your enthusiasm and politely request an interview.", pauseAfter: 350 },
        { role: "narrator", lang: "en-US", text: "Number eight. According to the counselor, what should applicants do in the closing paragraph?", pauseAfter: 300 }
      ],
      prompt: "According to the counselor, what should applicants do in the closing paragraph?",
      options: [
        { key: "A", text: "Express enthusiasm and politely request an interview opportunity." },
        { key: "B", text: "Demand an immediate starting salary decision." },
        { key: "C", text: "List every negative experience from junior high school." },
        { key: "D", text: "Write a poem about their favorite movies." }
      ],
      correctAnswer: "A",
      explanation: "Pada paragraf penutup surat lamaran kerja, pelamar hendaknya menyampaikan antusiasme dan dengan santun meminta kesempatan untuk diwawancarai ('express your enthusiasm and politely request an interview').",
      grammarNote: "Polite closing register in business correspondence."
    },
    {
      id: 9,
      source: "Kemendikbudristek — Listening Monologue: Climate Change & Clean Energy",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        { role: "narrator", lang: "en-US", text: "Questions nine and ten are based on the following short lecture on energy transition.", pauseAfter: 400 },
        { role: "teacher_f", lang: "en-US", name: "Dr. Laras", text: "Climate change is one of the most critical challenges facing our world. Burning fossil fuels like coal and petroleum produces huge amounts of carbon emissions, which trap heat in the atmosphere and cause extreme weather. Transitioning to renewable energy like solar, wind, and geothermal power helps reduce pollution and creates new green jobs for young graduates.", pauseAfter: 500 },
        { role: "narrator", lang: "en-US", text: "Number nine. According to the speaker, what is a primary cause of global climate change?", pauseAfter: 350 }
      ],
      prompt: "According to the speaker, what is a primary cause of global climate change?",
      options: [
        { key: "A", text: "Burning fossil fuels such as coal and petroleum." },
        { key: "B", text: "Installing solar panels on school rooftops." },
        { key: "C", text: "Planting organic vegetable gardens in greenhouses." },
        { key: "D", text: "Using bicycles for short neighborhood trips." }
      ],
      correctAnswer: "A",
      explanation: "Pembicara menjelaskan bahwa penyebab utama perubahan iklim adalah pembakaran bahan bakar fosil seperti batu bara dan minyak bumi yang menghasilkan emisi karbon ('burning fossil fuels like coal and petroleum').",
      grammarNote: "Gerund phrase as subject: 'Burning fossil fuels produces carbon emissions'."
    },
    {
      id: 10,
      source: "Kemendikbudristek — Listening Monologue: Climate Change & Clean Energy",
      type: "listening_talk",
      title: "Listening Section: Part III - Monologues",
      audioSegments: [
        { role: "teacher_f", lang: "en-US", name: "Dr. Laras", text: "Transitioning to renewable energy like solar, wind, and geothermal power helps reduce pollution and creates new green jobs for young graduates.", pauseAfter: 350 },
        { role: "narrator", lang: "en-US", text: "Number ten. What positive benefits of renewable energy are mentioned in the talk?", pauseAfter: 300 }
      ],
      prompt: "What positive benefits of renewable energy are mentioned in the talk?",
      options: [
        { key: "A", text: "Reducing pollution and creating new green jobs for young graduates." },
        { key: "B", text: "Generating electricity only during winter months." },
        { key: "C", text: "Stopping public transportation in urban areas." },
        { key: "D", text: "Decreasing the quality of agricultural products." }
      ],
      correctAnswer: "A",
      explanation: "Manfaat positif energi terbarukan yang disebutkan adalah mengurangi polusi dan menciptakan lapangan kerja hijau baru bagi para lulusan muda ('helps reduce pollution and creates new green jobs').",
      grammarNote: "Compound predicate: 'helps reduce pollution and creates new green jobs'."
    },
    {
      id: 11,
      source: "Kemendikbudristek — Discussion Text: Renewable Energy vs Fossil Fuels (Fase F)",
      type: "single_choice",
      title: "Reading Section: Discussion Text",
      stimulusTitle: "Text 1: The Energy Transition: Opportunities and Challenges",
      stimulusBody: "Energy is essential for modern human life. We need electricity to light our homes, power school computers, and run industrial factories. For more than a century, fossil fuels such as coal, oil, and natural gas have been the primary energy sources worldwide. However, the environmental impact of burning fossil fuels has sparked an intense global discussion about shifting toward renewable energy.<br><br>Supporters of renewable energy emphasize its environmental and health benefits. Unlike coal and oil, renewable energy sources such as solar, wind, and hydropower do not produce harmful carbon emissions or toxic air pollutants. By investing in clean energy, nations can reduce global warming, improve public air quality, and create thousands of green jobs in engineering and construction. Furthermore, sunlight and wind are inexhaustible resources that will never run out.<br><br>On the other hand, critics point out several practical challenges of renewable energy. First, solar and wind power are dependent on weather conditions; solar panels cannot generate electricity at night, and wind turbines stop turning on calm days. Therefore, countries need expensive battery storage systems to guarantee an uninterrupted power supply. Second, building new renewable facilities requires high initial costs and large areas of land, which can be difficult for developing nations with limited budgets.<br><br>In conclusion, while fossil fuels still provide reliable energy today, renewable energy is clearly the sustainable path for our future. Governments and communities should adopt a balanced transition by improving energy efficiency, supporting clean energy research, and gradually replacing fossil fuels with modern renewable solutions.",
      prompt: "What is the primary communicative purpose of the discussion text?",
      options: [
        { key: "A", text: "To present two different perspectives on renewable energy and fossil fuels." },
        { key: "B", text: "To provide step-by-step instructions on installing solar panels." },
        { key: "C", text: "To tell an imaginary story about a world without electricity." },
        { key: "D", text: "To promote a specific brand of household electrical batteries." }
      ],
      correctAnswer: "A",
      explanation: "Tujuan komunikatif teks diskusi adalah menyajikan dua sudut pandang berbeda (pro dan kontra) mengenai pemanfaatan energi terbarukan dibandingkan bahan bakar fosil ('to present two different perspectives on renewable energy and fossil fuels').",
      grammarNote: "Communicative purpose of discussion text: presenting two or more viewpoints on an issue."
    },
    {
      id: 12,
      source: "Kemendikbudristek — Discussion Text: Renewable Energy vs Fossil Fuels (Fase F)",
      type: "single_choice",
      title: "Reading Section: Discussion Text",
      stimulusTitle: "Text 1: The Energy Transition: Opportunities and Challenges",
      stimulusBody: "Energy is essential for modern human life. We need electricity to light our homes, power school computers, and run industrial factories. For more than a century, fossil fuels such as coal, oil, and natural gas have been the primary energy sources worldwide. However, the environmental impact of burning fossil fuels has sparked an intense global discussion about shifting toward renewable energy.<br><br>Supporters of renewable energy emphasize its environmental and health benefits. Unlike coal and oil, renewable energy sources such as solar, wind, and hydropower do not produce harmful carbon emissions or toxic air pollutants. By investing in clean energy, nations can reduce global warming, improve public air quality, and create thousands of green jobs in engineering and construction. Furthermore, sunlight and wind are inexhaustible resources that will never run out.<br><br>On the other hand, critics point out several practical challenges of renewable energy. First, solar and wind power are dependent on weather conditions; solar panels cannot generate electricity at night, and wind turbines stop turning on calm days. Therefore, countries need expensive battery storage systems to guarantee an uninterrupted power supply. Second, building new renewable facilities requires high initial costs and large areas of land, which can be difficult for developing nations with limited budgets.<br><br>In conclusion, while fossil fuels still provide reliable energy today, renewable energy is clearly the sustainable path for our future. Governments and communities should adopt a balanced transition by improving energy efficiency, supporting clean energy research, and gradually replacing fossil fuels with modern renewable solutions.",
      prompt: "According to paragraph 2, what is a major advantage of renewable energy sources?",
      options: [
        { key: "A", text: "They do not produce harmful carbon emissions and their sources never run out." },
        { key: "B", text: "They require massive burning of coal to generate electricity." },
        { key: "C", text: "They only function in cold mountainous regions." },
        { key: "D", text: "They completely eliminate the need for electrical wires." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 menyatakan bahwa energi terbarukan tidak menghasilkan emisi karbon berbahaya dan sumbernya tidak akan pernah habis ('do not produce harmful carbon emissions... and will never run out').",
      grammarNote: "Compound sentence showing advantages: 'reduce global warming and create green jobs'."
    },
    {
      id: 13,
      source: "Kemendikbudristek — Discussion Text: Renewable Energy vs Fossil Fuels (Fase F)",
      type: "single_choice",
      title: "Reading Section: Discussion Text",
      stimulusTitle: "Text 1: The Energy Transition: Opportunities and Challenges",
      stimulusBody: "Energy is essential for modern human life. We need electricity to light our homes, power school computers, and run industrial factories. For more than a century, fossil fuels such as coal, oil, and natural gas have been the primary energy sources worldwide. However, the environmental impact of burning fossil fuels has sparked an intense global discussion about shifting toward renewable energy.<br><br>Supporters of renewable energy emphasize its environmental and health benefits. Unlike coal and oil, renewable energy sources such as solar, wind, and hydropower do not produce harmful carbon emissions or toxic air pollutants. By investing in clean energy, nations can reduce global warming, improve public air quality, and create thousands of green jobs in engineering and construction. Furthermore, sunlight and wind are inexhaustible resources that will never run out.<br><br>On the other hand, critics point out several practical challenges of renewable energy. First, solar and wind power are dependent on weather conditions; solar panels cannot generate electricity at night, and wind turbines stop turning on calm days. Therefore, countries need expensive battery storage systems to guarantee an uninterrupted power supply. Second, building new renewable facilities requires high initial costs and large areas of land, which can be difficult for developing nations with limited budgets.<br><br>In conclusion, while fossil fuels still provide reliable energy today, renewable energy is clearly the sustainable path for our future. Governments and communities should adopt a balanced transition by improving energy efficiency, supporting clean energy research, and gradually replacing fossil fuels with modern renewable solutions.",
      prompt: "What main practical challenge of renewable energy is discussed in paragraph 3?",
      options: [
        { key: "A", text: "It depends on weather conditions and requires costly battery storage systems." },
        { key: "B", text: "It produces more poisonous smoke than coal power plants." },
        { key: "C", text: "It cannot be connected to school computers." },
        { key: "D", text: "It is illegal in all developing countries." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 3 menguraikan tantangan praktis: pembangkit tenaga surya dan angin sangat bergantung pada cuaca (intermittent) dan membutuhkan sistem baterai penyimpan daya yang mahal ('dependent on weather conditions... expensive battery storage systems').",
      grammarNote: "Conjunction of contrast introducing counter-arguments: 'On the other hand'."
    },
    {
      id: 14,
      source: "Kemendikbudristek — Discussion Text: Renewable Energy vs Fossil Fuels (Fase F)",
      type: "single_choice",
      title: "Reading Section: Discussion Text",
      stimulusTitle: "Text 1: The Energy Transition: Opportunities and Challenges",
      stimulusBody: "Energy is essential for modern human life. We need electricity to light our homes, power school computers, and run industrial factories. For more than a century, fossil fuels such as coal, oil, and natural gas have been the primary energy sources worldwide. However, the environmental impact of burning fossil fuels has sparked an intense global discussion about shifting toward renewable energy.<br><br>Supporters of renewable energy emphasize its environmental and health benefits. Unlike coal and oil, renewable energy sources such as solar, wind, and hydropower do not produce harmful carbon emissions or toxic air pollutants. By investing in clean energy, nations can reduce global warming, improve public air quality, and create thousands of green jobs in engineering and construction. Furthermore, sunlight and wind are inexhaustible resources that will never run out.<br><br>On the other hand, critics point out several practical challenges of renewable energy. First, solar and wind power are dependent on weather conditions; solar panels cannot generate electricity at night, and wind turbines stop turning on calm days. Therefore, countries need expensive battery storage systems to guarantee an uninterrupted power supply. Second, building new renewable facilities requires high initial costs and large areas of land, which can be difficult for developing nations with limited budgets.<br><br>In conclusion, while fossil fuels still provide reliable energy today, renewable energy is clearly the sustainable path for our future. Governments and communities should adopt a balanced transition by improving energy efficiency, supporting clean energy research, and gradually replacing fossil fuels with modern renewable solutions.",
      prompt: "The word 'inexhaustible' in paragraph 2 ('inexhaustible resources that will never run out') is closest in meaning to...",
      options: [
        { key: "A", text: "limitless and endless" },
        { key: "B", text: "extremely expensive" },
        { key: "C", text: "easily damaged" },
        { key: "D", text: "harmful to health" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'inexhaustible' bermakna tidak ada habisnya, tak terbatas, dan selalu tersedia ('limitless and endless').",
      grammarNote: "Adjective prefix: in- (not) + exhaustible (can be used up)."
    },
    {
      id: 15,
      source: "Kemendikbudristek — Discussion Text: Renewable Energy vs Fossil Fuels (Fase F)",
      type: "single_choice",
      title: "Reading Section: Discussion Text",
      stimulusTitle: "Text 1: The Energy Transition: Opportunities and Challenges",
      stimulusBody: "Energy is essential for modern human life. We need electricity to light our homes, power school computers, and run industrial factories. For more than a century, fossil fuels such as coal, oil, and natural gas have been the primary energy sources worldwide. However, the environmental impact of burning fossil fuels has sparked an intense global discussion about shifting toward renewable energy.<br><br>Supporters of renewable energy emphasize its environmental and health benefits. Unlike coal and oil, renewable energy sources such as solar, wind, and hydropower do not produce harmful carbon emissions or toxic air pollutants. By investing in clean energy, nations can reduce global warming, improve public air quality, and create thousands of green jobs in engineering and construction. Furthermore, sunlight and wind are inexhaustible resources that will never run out.<br><br>On the other hand, critics point out several practical challenges of renewable energy. First, solar and wind power are dependent on weather conditions; solar panels cannot generate electricity at night, and wind turbines stop turning on calm days. Therefore, countries need expensive battery storage systems to guarantee an uninterrupted power supply. Second, building new renewable facilities requires high initial costs and large areas of land, which can be difficult for developing nations with limited budgets.<br><br>In conclusion, while fossil fuels still provide reliable energy today, renewable energy is clearly the sustainable path for our future. Governments and communities should adopt a balanced transition by improving energy efficiency, supporting clean energy research, and gradually replacing fossil fuels with modern renewable solutions.",
      prompt: "What balanced recommendation does the author provide in the final paragraph?",
      options: [
        { key: "A", text: "Adopt a balanced transition by improving efficiency and gradually replacing fossil fuels." },
        { key: "B", text: "Close all electrical power stations immediately without replacement." },
        { key: "C", text: "Stop using household lighting and computers." },
        { key: "D", text: "Prohibit the installation of solar panels in all public schools." }
      ],
      correctAnswer: "A",
      explanation: "Penulis merekomendasikan transisi energi yang seimbang dengan meningkatkan efisiensi energi dan mengganti bahan bakar fosil secara bertahap dengan energi terbarukan ('adopt a balanced transition by improving energy efficiency... and gradually replacing fossil fuels').",
      grammarNote: "Concluding recommendation in discussion text."
    },
    {
      id: 16,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Renewable Energy Facts",
      stimulusTitle: "Text 1: The Energy Transition: Opportunities and Challenges",
      stimulusBody: "Review Text 1 (The Energy Transition: Opportunities and Challenges).",
      prompt: "Based on Text 1, determine whether each statement regarding energy transition is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "Solar and wind energy sources do not emit toxic air pollutants during power generation.",
          isCorrect: true
        },
        {
          statement: "Solar panels can generate full electrical output at midnight without sunlight.",
          isCorrect: false
        },
        {
          statement: "Investing in renewable energy can create green employment opportunities for engineers.",
          isCorrect: true
        },
        {
          statement: "Fossil fuels will remain completely inexhaustible for thousands of years.",
          isCorrect: false
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Energi surya dan angin tidak mengeluarkan polutan udara saat beroperasi.<br>• Pernyataan 2: SALAH — Panel surya tidak dapat menghasilkan listrik di malam hari tanpa sinar matahari.<br>• Pernyataan 3: BENAR — Investasi energi bersih menciptakan lapangan kerja hijau bagi teknisi.<br>• Pernyataan 4: SALAH — Bahan bakar fosil adalah sumber daya yang terbatas dan akan habis.",
      grammarNote: "Evaluating factual statements in discussion text."
    },
    {
      id: 17,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Job Application Writing Principles",
      stimulusTitle: "Context: Professional Application Letters",
      stimulusBody: "A job application letter introduces your skills and experiences to prospective employers.",
      prompt: "Determine whether each statement regarding professional application letters is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "The opening paragraph should clearly state the specific position you are applying for.",
          isCorrect: true
        },
        {
          statement: "Applicants should invent fake diplomas and unearned awards to impress employers.",
          isCorrect: false
        },
        {
          statement: "Highlighting relevant school projects and organizational leadership demonstrates competence.",
          isCorrect: true
        },
        {
          statement: "Proofreading the letter helps eliminate spelling mistakes and grammatical errors.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Paragraf pembuka harus menyebutkan posisi yang dilamar secara jelas.<br>• Pernyataan 2: SALAH — Berbohong atau memalsukan ijazah adalah pelanggaran hukum dan etika.<br>• Pernyataan 3: BENAR — Menjelaskan proyek sekolah dan pengalaman organisasi membuktikan kompetensi diri.<br>• Pernyataan 4: BENAR — Memeriksa ulang tulisan (proofreading) mencegah kesalahan ejaan dan tata bahasa.",
      grammarNote: "Principles of formal application letters."
    },
    {
      id: 18,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Cause and Effect Relations",
      stimulusTitle: "Text 1: The Energy Transition: Opportunities and Challenges",
      stimulusBody: "Review Text 1 (The Energy Transition: Opportunities and Challenges).",
      prompt: "Based on cause-and-effect relationships in Text 1, determine whether each statement is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "Carbon emissions from burning coal trap atmospheric heat, contributing to global warming.",
          isCorrect: true
        },
        {
          statement: "Because solar and wind power depend on weather conditions, backup storage systems are required.",
          isCorrect: true
        },
        {
          statement: "Renewable energy facilities are cheap and require no initial capital investment.",
          isCorrect: false
        },
        {
          statement: "Shifting to clean energy helps improve air quality and public respiratory health.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Emisi karbon memerangkap panas di atmosfer sehingga memicu pemanasan global.<br>• Pernyataan 2: BENAR — Karena bergantung pada cuaca, sistem penyimpanan baterai sangat diperlukan.<br>• Pernyataan 3: SALAH — Fasilitas energi terbarukan memerlukan biaya investasi awal yang cukup tinggi.<br>• Pernyataan 4: BENAR — Beralih ke energi bersih memperbaiki kualitas udara dan kesehatan pernapasan masyarakat.",
      grammarNote: "Cause and effect logic in expository text."
    },
    {
      id: 19,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Interview Preparation Standards",
      stimulusTitle: "Context: Job Interview Etiquette",
      stimulusBody: "Proper interview preparation boosts self-confidence and leaves a positive impression.",
      prompt: "Determine whether each statement below regarding job interview preparation is **TRUE** or **FALSE**:",
      matrixStatements: [
        {
          statement: "Researching the company's background helps applicants answer questions knowledgeably.",
          isCorrect: true
        },
        {
          statement: "Arriving fifteen minutes early demonstrates punctuality and professional commitment.",
          isCorrect: true
        },
        {
          statement: "Wearing casual beach clothes to a formal interview makes a professional impression.",
          isCorrect: false
        },
        {
          statement: "Speaking calmly and maintaining eye contact conveys confidence and sincerity.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Mempelajari profil perusahaan membantu pelamar menjawab pertanyaan dengan berbobot.<br>• Pernyataan 2: BENAR — Hadir 15 menit lebih awal menunjukkan kedisiplinan dan komitmen profesional.<br>• Pernyataan 3: SALAH — Pakaian santai pantai tidak pantas untuk wawancara kerja formal.<br>• Pernyataan 4: BENAR — Berbicara tenang dan menjaga kontak mata menunjukkan rasa percaya diri dan ketulusan.",
      grammarNote: "Professional workplace communication standards."
    },
    {
      id: 20,
      source: "AKM Literasi Membaca — Pilihan Ganda Kompleks (True/False Matrix)",
      type: "complex_matrix",
      title: "Complex Multiple Choice: Discussion Text Perspectives",
      stimulusTitle: "Text 1: The Energy Transition: Opportunities and Challenges",
      stimulusBody: "Review Text 1 (The Energy Transition: Opportunities and Challenges).",
      prompt: "Determine whether each viewpoint accurately reflects arguments presented in Text 1 (**TRUE**) or misrepresents them (**FALSE**):",
      matrixStatements: [
        {
          statement: "Proponents argue that renewable energy provides endless power without air pollution.",
          isCorrect: true
        },
        {
          statement: "Critics emphasize that initial installation costs and land requirements pose financial challenges.",
          isCorrect: true
        },
        {
          statement: "The author demands that developing nations stop all electrical power immediately.",
          isCorrect: false
        },
        {
          statement: "The author advocates for a balanced transition supported by energy efficiency improvements.",
          isCorrect: true
        }
      ],
      explanation: "• Pernyataan 1: BENAR — Pendukung menyatakan energi bersih tidak terbatas dan bebas polusi.<br>• Pernyataan 2: BENAR — Pengkritik menyoroti biaya instalasi dan kebutuhan lahan yang besar.<br>• Pernyataan 3: SALAH — Penulis tidak pernah menuntut penghentian listrik secara mendadak.<br>• Pernyataan 4: BENAR — Penulis menganjurkan transisi bertahap yang seimbang dengan efisiensi energi.",
      grammarNote: "Identifying supporting and opposing arguments in discussion texts."
    },
    {
      id: 21,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Text 1: The Energy Transition: Opportunities and Challenges",
      stimulusBody: "Review Text 1 (The Energy Transition: Opportunities and Challenges).",
      prompt: "Which **TWO (2)** core benefits of renewable energy are emphasized by proponents in Text 1?",
      options: [
        { key: "A", text: "It produces clean power without harmful carbon emissions or toxic air pollutants." },
        { key: "B", text: "It eliminates the need for electricity bills in all homes immediately." },
        { key: "C", text: "It relies on natural resources like sunlight and wind that will never run out." },
        { key: "D", text: "It operates without needing any land or electrical maintenance." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua keunggulan utama energi terbarukan menurut teks adalah tidak menghasilkan emisi karbon atau polusi beracun, serta bersumber dari alam (matahari dan angin) yang tidak akan pernah habis.",
      grammarNote: "Two supporting points in discussion text."
    },
    {
      id: 22,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Context: Application Letter Structure",
      stimulusBody: "A standard job application letter contains essential structural elements.",
      prompt: "Which **TWO (2)** structural components must be clearly stated in a professional application letter?",
      options: [
        { key: "A", text: "The specific job title being applied for and where the vacancy was advertised." },
        { key: "B", text: "A detailed list of the applicant's childhood arguments with siblings." },
        { key: "C", text: "Relevant academic background, practical skills, and organizational achievements." },
        { key: "D", text: "A demand for guaranteed promotions before the interview takes place." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua komponen wajib dalam surat lamaran kerja adalah posisi spesifik yang dilamar beserta sumber info lowongan, serta kualifikasi relevan seperti latar belakang pendidikan, keahlian, dan prestasi organisasi.",
      grammarNote: "Key elements of formal business letters."
    },
    {
      id: 23,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Grammar: Real Conditionals with Unless & If",
      stimulusBody: "Conditionals express conditions and their expected results.",
      prompt: "Which **TWO (2)** sentences correctly use conditional conjunctions (**If** or **Unless**)?",
      options: [
        { key: "A", text: "If applicants prepare thoroughly, they will feel more confident during the interview." },
        { key: "B", text: "Unless you do not practice, you will fail the speaking test." },
        { key: "C", text: "You will not make a good impression unless you arrive on time for the meeting." },
        { key: "D", text: "If the company will hire him, he started working yesterday." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua kalimat yang menggunakan kondisional secara baku adalah kalimat 'If applicants prepare thoroughly, they will feel...' dan 'You will not make a good impression unless you arrive on time...'. Pilihan B salah karena terjadi 'double negative' (Unless + do not), dan pilihan D salah tenses pada if-clause.",
      grammarNote: "First conditional and unless clause rules."
    },
    {
      id: 24,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Context: Career Readiness",
      stimulusBody: "Preparation helps high school graduates transition into work and higher study.",
      prompt: "Which **TWO (2)** actions demonstrate proactive career preparation for graduating seniors?",
      options: [
        { key: "A", text: "Building a portfolio of school design projects and certificates of achievement." },
        { key: "B", text: "Submitting incomplete application forms five minutes after the deadline." },
        { key: "C", text: "Practicing common interview questions with classmates or teachers." },
        { key: "D", text: "Refusing to learn how to compose formal email messages." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua tindakan proaktif mempersiapkan karir adalah menyusun portofolio karya dan sertifikat prestasi, serta berlatih menjawab pertanyaan wawancara kerja bersama teman atau guru.",
      grammarNote: "Parallel gerund phrases: building, practicing."
    },
    {
      id: 25,
      source: "AKM Literasi — Pilihan Ganda Kompleks MCMA (Pilih 2 Opsi Benar)",
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
      stimulusTitle: "Grammar: Cause and Effect Connectors",
      stimulusBody: "Connectors like 'because of' and 'therefore' show cause and effect.",
      prompt: "Which **TWO (2)** sentences correctly employ cause-and-effect connectors?",
      options: [
        { key: "A", text: "The flight was delayed because of the severe rainstorm over the airport." },
        { key: "B", text: "Because of he studied hard, he achieved the highest mark in English." },
        { key: "C", text: "Siti organized her study time effectively; therefore, she completed the project early." },
        { key: "D", text: "Therefore the weather was hot, the workers continued their shift." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Dua kalimat yang menggunakan konjungsi sebab-akibat secara tepat adalah kalimat dengan 'because of + noun phrase' ('because of the severe rainstorm') dan konjungsi internal 'therefore' ('therefore, she completed the project early'). Pilihan B salah karena 'because of' diikuti klausa berpredikat, dan pilihan D salah karena 'therefore' bukan kata hubung pertentangan.",
      grammarNote: "Cause and effect rules: because of + NP; therefore + independent clause."
    },
    {
      id: 26,
      source: "Kemendikbudristek — Application Letter Analysis (Fase F Kelas XII)",
      type: "single_choice",
      title: "Reading Section: Job Application Letter",
      stimulusTitle: "Text 2: Graphic Design Internship Application",
      stimulusBody: "Dear Mr. Pratama,<br><br>I am writing to express my strong interest in the Graphic Design Internship position advertised on your company website on October 12, 2026. As a dedicated twelfth-grade student majoring in Visual Communication at SMA 1 Bae Kudus, I have developed solid skills in digital illustration, photo editing, and creative layout design.<br><br>During my high school studies, I served as the head of the publication team for our school magazine. In this role, I designed event posters, created social media graphics, and collaborated with teammates under strict deadlines. My teachers commend me for my creativity, attention to detail, and positive work ethic. I am proficient in using design software such as Adobe Photoshop and Canva.<br><br>I believe that my creative background and eagerness to learn make me a valuable addition to your creative department. Enclosed are my curriculum vitae, academic certificates, and design portfolio for your review.<br><br>Thank you for considering my application. I would welcome the opportunity to discuss my qualifications in an interview. I can be contacted at 0812-3456-7890 or via email at siti.rahma@email.com.<br><br>Sincerely,<br>Siti Rahma",
      prompt: "What is the primary objective of Siti Rahma's letter?",
      options: [
        { key: "A", text: "To apply for the Graphic Design Internship position at the company." },
        { key: "B", text: "To complain about a malfunctioning design computer." },
        { key: "C", text: "To invite Mr. Pratama to a school sports tournament." },
        { key: "D", text: "To resign from her position as head of publication." }
      ],
      correctAnswer: "A",
      explanation: "Tujuan utama surat Siti Rahma adalah melamar posisi magang Desain Grafis (Graphic Design Internship) yang diiklankan di situs web perusahaan ('apply for the Graphic Design Internship position').",
      grammarNote: "Communicative purpose of an application letter: to apply for a job/internship."
    },
    {
      id: 27,
      source: "Kemendikbudristek — Application Letter Analysis (Fase F Kelas XII)",
      type: "single_choice",
      title: "Reading Section: Job Application Letter",
      stimulusTitle: "Text 2: Graphic Design Internship Application",
      stimulusBody: "Dear Mr. Pratama,<br><br>I am writing to express my strong interest in the Graphic Design Internship position advertised on your company website on October 12, 2026. As a dedicated twelfth-grade student majoring in Visual Communication at SMA 1 Bae Kudus, I have developed solid skills in digital illustration, photo editing, and creative layout design.<br><br>During my high school studies, I served as the head of the publication team for our school magazine. In this role, I designed event posters, created social media graphics, and collaborated with teammates under strict deadlines. My teachers commend me for my creativity, attention to detail, and positive work ethic. I am proficient in using design software such as Adobe Photoshop and Canva.<br><br>I believe that my creative background and eagerness to learn make me a valuable addition to your creative department. Enclosed are my curriculum vitae, academic certificates, and design portfolio for your review.<br><br>Thank you for considering my application. I would welcome the opportunity to discuss my qualifications in an interview. I can be contacted at 0812-3456-7890 or via email at siti.rahma@email.com.<br><br>Sincerely,<br>Siti Rahma",
      prompt: "What practical leadership experience did Siti gain during her time at SMA 1 Bae?",
      options: [
        { key: "A", text: "Leading the school magazine publication team and designing event posters." },
        { key: "B", text: "Managing financial audit reports for an international bank." },
        { key: "C", text: "Driving the school tour bus across Central Java." },
        { key: "D", text: "Working as a full-time university lecturer." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 menyatakan bahwa Siti memimpin tim publikasi majalah sekolah dan merancang poster kegiatan serta grafis media sosial ('head of the publication team for our school magazine... designed event posters').",
      grammarNote: "Past simple recount in body paragraph: 'I served as the head of the publication team'."
    },
    {
      id: 28,
      source: "Kemendikbudristek — Application Letter Analysis (Fase F Kelas XII)",
      type: "single_choice",
      title: "Reading Section: Job Application Letter",
      stimulusTitle: "Text 2: Graphic Design Internship Application",
      stimulusBody: "Dear Mr. Pratama,<br><br>I am writing to express my strong interest in the Graphic Design Internship position advertised on your company website on October 12, 2026. As a dedicated twelfth-grade student majoring in Visual Communication at SMA 1 Bae Kudus, I have developed solid skills in digital illustration, photo editing, and creative layout design.<br><br>During my high school studies, I served as the head of the publication team for our school magazine. In this role, I designed event posters, created social media graphics, and collaborated with teammates under strict deadlines. My teachers commend me for my creativity, attention to detail, and positive work ethic. I am proficient in using design software such as Adobe Photoshop and Canva.<br><br>I believe that my creative background and eagerness to learn make me a valuable addition to your creative department. Enclosed are my curriculum vitae, academic certificates, and design portfolio for your review.<br><br>Thank you for considering my application. I would welcome the opportunity to discuss my qualifications in an interview. I can be contacted at 0812-3456-7890 or via email at siti.rahma@email.com.<br><br>Sincerely,<br>Siti Rahma",
      prompt: "Which software applications is the applicant proficient in using?",
      options: [
        { key: "A", text: "Adobe Photoshop and Canva." },
        { key: "B", text: "Heavy industrial welding tools." },
        { key: "C", text: "Electronic surgical machinery." },
        { key: "D", text: "Automated greenhouse water pipes." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 menyebutkan secara eksplisit bahwa Siti mahir menggunakan perangkat lunak Adobe Photoshop dan Canva ('proficient in using design software such as Adobe Photoshop and Canva').",
      grammarNote: "Prepositional phrase: 'proficient in using design software'."
    },
    {
      id: 29,
      source: "Kemendikbudristek — Application Letter Analysis (Fase F Kelas XII)",
      type: "single_choice",
      title: "Reading Section: Job Application Letter",
      stimulusTitle: "Text 2: Graphic Design Internship Application",
      stimulusBody: "Dear Mr. Pratama,<br><br>I am writing to express my strong interest in the Graphic Design Internship position advertised on your company website on October 12, 2026. As a dedicated twelfth-grade student majoring in Visual Communication at SMA 1 Bae Kudus, I have developed solid skills in digital illustration, photo editing, and creative layout design.<br><br>During my high school studies, I served as the head of the publication team for our school magazine. In this role, I designed event posters, created social media graphics, and collaborated with teammates under strict deadlines. My teachers commend me for my creativity, attention to detail, and positive work ethic. I am proficient in using design software such as Adobe Photoshop and Canva.<br><br>I believe that my creative background and eagerness to learn make me a valuable addition to your creative department. Enclosed are my curriculum vitae, academic certificates, and design portfolio for your review.<br><br>Thank you for considering my application. I would welcome the opportunity to discuss my qualifications in an interview. I can be contacted at 0812-3456-7890 or via email at siti.rahma@email.com.<br><br>Sincerely,<br>Siti Rahma",
      prompt: "The word 'proficient' in paragraph 2 ('I am proficient in using design software') is closest in meaning to...",
      options: [
        { key: "A", text: "skilled and competent" },
        { key: "B", text: "completely untrained" },
        { key: "C", text: "hesitant and fearful" },
        { key: "D", text: "careless and slow" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'proficient' bermakna mahir, terampil, dan menguasai bidang tertentu ('skilled and competent').",
      grammarNote: "Adjective synonym: proficient = skilled/competent."
    },
    {
      id: 30,
      source: "Kemendikbudristek — Application Letter Analysis (Fase F Kelas XII)",
      type: "single_choice",
      title: "Reading Section: Job Application Letter",
      stimulusTitle: "Text 2: Graphic Design Internship Application",
      stimulusBody: "Dear Mr. Pratama,<br><br>I am writing to express my strong interest in the Graphic Design Internship position advertised on your company website on October 12, 2026. As a dedicated twelfth-grade student majoring in Visual Communication at SMA 1 Bae Kudus, I have developed solid skills in digital illustration, photo editing, and creative layout design.<br><br>During my high school studies, I served as the head of the publication team for our school magazine. In this role, I designed event posters, created social media graphics, and collaborated with teammates under strict deadlines. My teachers commend me for my creativity, attention to detail, and positive work ethic. I am proficient in using design software such as Adobe Photoshop and Canva.<br><br>I believe that my creative background and eagerness to learn make me a valuable addition to your creative department. Enclosed are my curriculum vitae, academic certificates, and design portfolio for your review.<br><br>Thank you for considering my application. I would welcome the opportunity to discuss my qualifications in an interview. I can be contacted at 0812-3456-7890 or via email at siti.rahma@email.com.<br><br>Sincerely,<br>Siti Rahma",
      prompt: "What action does Siti politely request in the closing paragraph of her letter?",
      options: [
        { key: "A", text: "An opportunity to discuss her qualifications in an interview." },
        { key: "B", text: "An immediate advance payment for three months." },
        { key: "C", text: "Free airplane tickets to Magelang." },
        { key: "D", text: "A letter canceling all school exams." }
      ],
      correctAnswer: "A",
      explanation: "Di bagian penutup, Siti dengan santun meminta kesempatan untuk mendiskusikan kualifikasinya dalam sesi wawancara ('welcome the opportunity to discuss my qualifications in an interview').",
      grammarNote: "Formal closing request: 'I would welcome the opportunity to discuss my qualifications'."
    },
    {
      id: 31,
      source: "Kaidah Tata Bahasa Kelas XII — Concession Connectors",
      type: "single_choice",
      title: "Grammar & Structure: Connectors of Concession",
      prompt: "Choose the correct conjunction to complete the sentence showing contrast:<br><br><em>'_______ the installation cost of solar panels is high, it saves significant money on electricity bills over time.'</em>",
      options: [
        { key: "A", text: "Although" },
        { key: "B", text: "Because" },
        { key: "C", text: "Unless" },
        { key: "D", text: "Since" }
      ],
      correctAnswer: "A",
      explanation: "Kata hubung yang menyatakan hubungan konsesif (pertentangan) yang diikuti oleh klausa lengkap adalah 'Although' (meskipun/walaupun).",
      grammarNote: "Concession: Although + clause, main clause."
    },
    {
      id: 32,
      source: "Kaidah Tata Bahasa Kelas XII — Cause Prepositions",
      type: "single_choice",
      title: "Grammar & Structure: Cause Connectors",
      prompt: "Select the correct connector before the noun phrase 'global climate change':<br><br><em>'Many coastal regions face higher flood risks _______ global climate change.'</em>",
      options: [
        { key: "A", text: "because of" },
        { key: "B", text: "so that" },
        { key: "C", text: "although" },
        { key: "D", text: "in order to" }
      ],
      correctAnswer: "A",
      explanation: "Frasa 'global climate change' adalah Noun Phrase. Kata hubung penyebab yang diikuti oleh noun phrase adalah 'because of'.",
      grammarNote: "Because of + Noun Phrase (menyatakan sebab)."
    },
    {
      id: 33,
      source: "Kaidah Tata Bahasa Kelas XII — Conditionals (Unless)",
      type: "single_choice",
      title: "Grammar & Structure: Conditional Clauses",
      prompt: "Complete the sentence with the conditional conjunction meaning **'if not'**:<br><br><em>'You will not succeed in a job interview _______ you prepare thoroughly and research the company.'</em>",
      options: [
        { key: "A", text: "unless" },
        { key: "B", text: "although" },
        { key: "C", text: "because" },
        { key: "D", text: "so that" }
      ],
      correctAnswer: "A",
      explanation: "Konjungsi 'unless' bermakna 'if not' (kecuali jika / jika tidak). Pelamar tidak akan sukses dalam wawancara kecuali jika mereka mempersiapkan diri dengan matang.",
      grammarNote: "Unless = if... not."
    },
    {
      id: 34,
      source: "Kaidah Tata Bahasa Kelas XII — Real Conditionals",
      type: "single_choice",
      title: "Grammar & Structure: First Conditional",
      prompt: "Select the correct verb form to complete the first conditional sentence:<br><br><em>'If the company offers Siti the internship, she _______ accept it enthusiastically.'</em>",
      options: [
        { key: "A", text: "will" },
        { key: "B", text: "would have" },
        { key: "C", text: "had" },
        { key: "D", text: "was" }
      ],
      correctAnswer: "A",
      explanation: "Pola baku kalimat pengandaian tipe 1 (First Conditional) adalah: If + Subject + V1 (Simple Present), Subject + will + V1. Maka kata kerja bantu yang tepat adalah 'will'.",
      grammarNote: "First conditional: If + V1, will + V1."
    },
    {
      id: 35,
      source: "Kaidah Tata Bahasa Kelas XII — Modals for Professional Advice",
      type: "single_choice",
      title: "Grammar & Structure: Modal Auxiliaries",
      prompt: "Which modal verb appropriately expresses strong professional advice?<br><br><em>'Job applicants _______ arrive at the interview location fifteen minutes early.'</em>",
      options: [
        { key: "A", text: "should" },
        { key: "B", text: "might have" },
        { key: "C", text: "would have" },
        { key: "D", text: "were" }
      ],
      correctAnswer: "A",
      explanation: "Modal 'should' digunakan untuk menyatakan saran atau anjuran profesional yang sangat dianjurkan ('should arrive').",
      grammarNote: "Modal for recommendation: Subject + should + V1."
    },
    {
      id: 36,
      source: "Kaidah Tata Bahasa Kelas XII — Present Passive Voice",
      type: "single_choice",
      title: "Grammar & Structure: Passive Voice",
      prompt: "Complete the passive sentence with the correct auxiliary verb:<br><br><em>'Clean electricity _______ generated by solar panels without producing carbon emissions.'</em>",
      options: [
        { key: "A", text: "is" },
        { key: "B", text: "are" },
        { key: "C", text: "were" },
        { key: "D", text: "has" }
      ],
      correctAnswer: "A",
      explanation: "Subjek tak dapat dihitung (uncountable noun) 'Clean electricity' bernilai tunggal. Rumus pasif Simple Present tunggal adalah: is + V3 ('is generated').",
      grammarNote: "Passive voice (singular/uncountable): is + V3."
    },
    {
      id: 37,
      source: "Kaidah Tata Bahasa Kelas XII — Conjunctive Adverbs (Therefore)",
      type: "single_choice",
      title: "Grammar & Structure: Cause-and-Effect Connectors",
      prompt: "Choose the correct conjunctive adverb expressing result:<br><br><em>'Siti practiced digital design software diligently; _______, she created an outstanding portfolio.'</em>",
      options: [
        { key: "A", text: "therefore" },
        { key: "B", text: "although" },
        { key: "C", text: "because" },
        { key: "D", text: "unless" }
      ],
      correctAnswer: "A",
      explanation: "Kata keterangan penghubung yang menyatakan hasil/akibat setelah tanda titik koma adalah 'therefore' (oleh karena itu).",
      grammarNote: "Conjunctive adverb of result: therefore."
    },
    {
      id: 38,
      source: "Kaidah Tata Bahasa Kelas XII — Preposition with Gerund",
      type: "single_choice",
      title: "Grammar & Structure: Preposition + Gerund",
      prompt: "Choose the correct form to complete the sentence after the preposition 'before':<br><br><em>'Before _______ her application letter, Siti proofread every paragraph carefully.'</em>",
      options: [
        { key: "A", text: "submitting" },
        { key: "B", text: "submit" },
        { key: "C", text: "submitted" },
        { key: "D", text: "submits" }
      ],
      correctAnswer: "A",
      explanation: "Setelah preposisi seperti 'before', 'after', atau 'without', kata kerja harus diubah ke bentuk gerund (V-ing): 'Before submitting...'.",
      grammarNote: "Preposition + Gerund (V-ing)."
    },
    {
      id: 39,
      source: "Kaidah Tata Bahasa Kelas XII — Collocations",
      type: "single_choice",
      title: "Grammar & Structure: Word Collocation",
      prompt: "Which adjective pairs naturally with the noun 'role' in an environmental context?<br><br><em>'Renewable energy plays an _______ role in reducing harmful air pollution.'</em>",
      options: [
        { key: "A", text: "essential" },
        { key: "B", text: "expensive" },
        { key: "C", text: "angry" },
        { key: "D", text: "impolite" }
      ],
      correctAnswer: "A",
      explanation: "Kolokasi kata sifat yang tepat dan alami dengan kata 'role' adalah 'an essential role' (peran yang sangat penting/esensial) atau 'a vital role'.",
      grammarNote: "Collocation: play an essential role."
    },
    {
      id: 40,
      source: "Kaidah Tata Bahasa Kelas XII — Correlative Conjunctions",
      type: "single_choice",
      title: "Grammar & Structure: Subject-Verb Agreement",
      prompt: "Choose the correct verb form agreeing with the plural subject in this sentence:<br><br><em>'Neither the manager nor the applicants _______ informed about the room change.'</em>",
      options: [
        { key: "A", text: "were" },
        { key: "B", text: "was" },
        { key: "C", text: "is" },
        { key: "D", text: "has" }
      ],
      correctAnswer: "A",
      explanation: "Dalam konstruksi 'Neither... nor...', kata kerja menyesuaikan dengan subjek yang paling dekat (proximity rule). Subjek terdekat adalah 'the applicants' (jamak), sehingga to-be lampau yang tepat adalah 'were'.",
      grammarNote: "Proximity rule in correlative conjunctions: Neither A nor B + verb agrees with B."
    }
  ];
}


let currentQuestionIndex = 0;
let userAnswers = {};
let flaggedQuestions = new Set();
let timerInterval = null;
let remainingSeconds = 90 * 60;
let studentIdentity = { tingkat: "XII-TL", rombel: "1", presensi: "1", nama: "Siswa SMA 1 Bae" };
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
        tingkat: portalData.tingkat || "XII-TL",
        rombel: portalData.rombel || "1",
        presensi: portalData.presensi || "1",
        nama: portalData.nama || "Siswa Kelas XII Tingkat Lanjut"
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
    tingkat: "XII-TL",
    rombel: rombelEl ? rombelEl.value : "1",
    presensi: presensiEl ? presensiEl.value.trim() : "1",
    nama: (namaEl && namaEl.value.trim()) ? namaEl.value.trim() : "Siswa Kelas XII Tingkat Lanjut"
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

  const rawBank = (typeof getGrade12TLAstsQuestions === "function") ? getGrade12TLAstsQuestions() : [];

  let restoredQuestions = null;
  try {
    const saved = localStorage.getItem("sabaku_asts_progress_XII_TL");
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
    modeBadge.textContent = (currentMode === "practice") ? "🎯 Mode Latihan ASTS Gasal Kelas XII Tingkat Lanjut" : "📝 Asesmen Resmi ASTS Gasal Kelas XII Tingkat Lanjut";
    modeBadge.className = "badge-mode " + (currentMode === "practice" ? "practice" : "exam");
  }
  const nameEl = document.getElementById("side-student-name");
  if (nameEl) nameEl.textContent = studentIdentity.nama;
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
  const grid = document.getElementById("navigator-grid");
  if (!grid) return;
  grid.innerHTML = "";
  questions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.className = "nav-btn";
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
  localStorage.removeItem("sabaku_asts_progress_XII_TL");

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
    mode: (currentMode === "practice") ? "Latihan ASTS Gasal Kelas XII Tingkat Lanjut" : "Asesmen Resmi ASTS Gasal Kelas XII Tingkat Lanjut",
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
    localStorage.removeItem("sabaku_asts_progress_XII_TL");
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
    localStorage.setItem("sabaku_asts_progress_XII_TL", JSON.stringify(data));
  } catch (e) {}
}
