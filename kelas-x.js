/**
 * ASESMEN SUMATIF AKHIR SEMESTER (ASAS) GASAL & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * TINGKAT X (FASE E) — SATU SEMESTER PENUH GASAL (18 MINGGU) TP 2026/2027
 * 
 * Komposisi Soal:
 * - 60% (24 Butir Soal) Diambil Langsung dari Bank Soal ASAS Gasal
 * - 40% (16 Butir Soal) Melengkapi Seluruh Materi Semester Gasal (TP 10.1 & TP 10.2)
 * 
 * Standar: Tes Kemampuan Akademik (TKA / AKM / UTBK)
 * Cakupan Materi Lengkap:
 * 1. Listening Section: Multimodal Pictures, Short Dialogues, Short Talks.
 * 2. TP 10.1 Descriptive Text: Karimunjawa Marine Tourism & Anthony Sinisuka Ginting.
 * 3. TP 10.2 Scientific Report Text: Orangutans (Fauna) & Dieng Geothermal Energy (Renewable Energy).
 * 4. Grammar in Context: Simple Present, Passive Voice Ilmiah, OSASCOMP, Conditionals Type 1 & 0,
 *    Relative Pronouns, Oxford 3000 Level A2/B1 Vocabulary, dan Functional Expressions.
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

// SVG Pictures for Listening Part I Multimodal
const SVG_PICTURES = {
  badminton: `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="22" r="10"/><path d="M50 32v28M30 42l20-8 20 12M50 60l-16 26M50 60l18 26"/><path d="M70 46l14-14M84 32a7 7 0 10-10-10 7 7 0 0010 10zM77 25l7 7"/></svg>`,
  runner: `<svg viewBox="0 0 100 100" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="65" cy="22" r="9"/><path d="M60 31l-14 16 10 12-14 26M46 47l-18-6M56 59l18 6 12 18"/><path d="M15 88h70" stroke="#94a3b8" stroke-dasharray="4 4"/></svg>`,
  swimmer: `<svg viewBox="0 0 100 100" fill="none" stroke="#0d9488" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="38" r="9"/><path d="M41 38l24 4 15-18M25 50l30 4 18 10"/><path d="M10 65c10-5 20 5 30 0s20 5 30 0 20 5 20 0M10 78c10-5 20 5 30 0s20 5 30 0 20 5 20 0" stroke="#0284c7"/></svg>`,
  weightlifter: `<svg viewBox="0 0 100 100" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="38" r="8"/><path d="M50 46v24M38 56l12-8 12 8M42 70l-8 20M58 70l8 20"/><path d="M15 26h70" stroke="#475569" stroke-width="4"/><circle cx="15" cy="26" r="12" fill="#94a3b8"/><circle cx="85" cy="26" r="12" fill="#94a3b8"/></svg>`,

  temple: `<svg viewBox="0 0 100 100" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 85h80M20 70h60M30 55h40M40 40h20M50 20v20"/><path d="M35 85v-15M65 85v-15M42 70v-15M58 70v-15"/><circle cx="50" cy="18" r="3" fill="#d97706"/></svg>`,
  beach: `<svg viewBox="0 0 100 100" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="25" cy="25" r="10" fill="#fef08a" stroke="#eab308"/><path d="M60 85c-5-25 15-45 25-50M85 35c-15 0-25-10-30-5M85 35c5-10 15-12 20-10M85 35c-5 12-12 18-18 20"/><path d="M10 85c15-4 35 2 50-2s25-6 30-2" stroke="#16a34a" stroke-width="3"/></svg>`,
  mountain: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 85l35-50 15 20 15-15 20 45H10z"/><path d="M38 45l7 8 10-5" stroke="#cbd5e1" fill="#f8fafc"/></svg>`,
  bridge: `<svg viewBox="0 0 100 100" fill="none" stroke="#7c3aed" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 65h80M25 25v55M75 25v55M10 50c15-15 25-25 40 0s25-15 40 0M25 25l25 25 25-25"/><path d="M10 80c10-3 20 3 40 0s30 3 40 0" stroke="#0284c7"/></svg>`,

  minaret: `<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M30 85h40M35 85V45h30v40M32 45h36M38 45V28h24v17M35 28h30M45 28V15h10v13M42 15h16M50 10v5"/><circle cx="50" cy="8" r="2" fill="#b45309"/><path d="M42 65h16v20H42z"/></svg>`,
  puppet: `<svg viewBox="0 0 100 100" fill="none" stroke="#9333ea" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="50" cy="30" rx="12" ry="16"/><path d="M50 46v30M32 38l-12 24 14 16M68 38l12 24-14 16M50 76l-14 16M50 76l14 16M45 14c5-8 15-5 18 2"/></svg>`,
  batik: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="15" y="15" width="70" height="70" rx="6"/><circle cx="50" cy="50" r="14"/><path d="M50 20v16M50 64v16M20 50h16M64 50h16M28 28l12 12M60 60l12 12M28 72l12-12M60 40l12-12"/></svg>`,
  concert: `<svg viewBox="0 0 100 100" fill="none" stroke="#e11d48" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="25" y="45" width="50" height="40" rx="4"/><path d="M35 45V25l30-8v28M35 35l30-8"/><circle cx="38" cy="72" r="6" fill="#f43f5e"/><circle cx="62" cy="65" r="6" fill="#f43f5e"/></svg>`
};

function getGrade10AsasCompleteQuestions() {
  return [
    // =========================================================================
    // SECTION 1: LISTENING SECTION (QUESTIONS 1 - 10)
    // =========================================================================

    // Part I: Pictures (1-3) - Taken from ASAS Bank (3 questions)
    {
      id: 1,
      source: "Sumber: Arsip Prestasi Bulutangkis Indonesia — PBSI & Kementerian Pemuda dan Olahraga",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number one. Look at the pictures. This inspiring international athlete is leaping high in the air to deliver a powerful, precision smash with his racket over the net during the world championship final. Which picture best matches the description?",
      prompt: "Look at the four pictures below. Which picture matches the athlete described in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.badminton, label: "A world badminton champion executing a powerful smash" },
        { key: "B", svg: SVG_PICTURES.runner, label: "A marathon athlete sprinting towards the finish line" },
        { key: "C", svg: SVG_PICTURES.swimmer, label: "A swimmer competing in the freestyle race" },
        { key: "D", svg: SVG_PICTURES.weightlifter, label: "A weightlifter lifting a heavy barbell overhead" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan: 'athlete is leaping high in the air to deliver a powerful, precision smash with his racket over the net'. Gambar A menampilkan atlet bulu tangkis yang melompat melakukan pukulan smash dengan raket.",
      grammarNote: "Present Continuous Tense ('is leaping', 'executing') & Sports Vocabulary (athlete, racket, smash, championship)."
    },
    {
      id: 2,
      source: "Sumber: Direktori Cagar Budaya Nasional — Balai Pelestarian Kebudayaan Wilayah X",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number two. Look at the pictures. This magnificent Indonesian cultural destination features ancient massive stone stupas, detailed relief stone carvings, and tiered terraces rising proudly against the morning mist. Which picture illustrates the spoken description?",
      prompt: "Which picture corresponds to the magnificent cultural tourism site described in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.beach, label: "A tropical sandy beach with coconut palm trees" },
        { key: "B", svg: SVG_PICTURES.temple, label: "An ancient tiered stone stupa temple landmark" },
        { key: "C", svg: SVG_PICTURES.mountain, label: "A rocky volcanic mountain summit" },
        { key: "D", svg: SVG_PICTURES.bridge, label: "A modern suspension bridge across a metropolis bay" }
      ],
      correctAnswer: "B",
      explanation: "Audio menyebutkan: 'magnificent Indonesian cultural destination features ancient massive stone stupas, detailed relief stone carvings, and tiered terraces'. Ciri-ciri stupa batu bertingkat dan relief kuno adalah candi bersejarah (Temple - Gambar B).",
      grammarNote: "OSASCOMP Adjective Order: 'ancient massive stone stupas' (Age: ancient, Size: massive, Material: stone)."
    },
    {
      id: 3,
      source: "Sumber: Brosur Cagar Budaya Yayasan Menara Kudus & Disbudpar Kudus",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number three. Look at the pictures. This unique architectural landmark in Kudus blends Hindu-Javanese traditional brickwork design with Islamic minaret structure, symbolizing historic cultural harmony. Which picture depicts this monument?",
      prompt: "Which picture depicts the iconic heritage landmark in Kudus mentioned in the recording?",
      options: [
        { key: "A", svg: SVG_PICTURES.puppet, label: "Wayang shadow puppet leather figure" },
        { key: "B", svg: SVG_PICTURES.batik, label: "Traditional Javanese batik textile pattern" },
        { key: "C", svg: SVG_PICTURES.minaret, label: "Historic red-brick Menara Kudus monument" },
        { key: "D", svg: SVG_PICTURES.concert, label: "Modern musical auditorium stage" }
      ],
      correctAnswer: "C",
      explanation: "Audio menyebutkan: 'unique architectural landmark in Kudus blends Hindu-Javanese traditional brickwork design with Islamic minaret structure'. Landmark menara bata merah khas Kudus adalah Menara Kudus (Gambar C).",
      grammarNote: "Compound Adjectives & Cultural Heritage Nouns: 'Hindu-Javanese traditional brickwork design', 'historic cultural harmony'."
    },

    // Part II: Short Dialogues (4-6) - Taken from ASAS Bank (3 questions)
    {
      id: 4,
      source: "Sumber: Dialog Otentik Modul Ajar Fase E — Tim Guru MGMP Bahasa Inggris SMA",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioText: "Number four. Listen to the conversation between Siti and Budi. Siti: Budi, have you read the latest interview with Anthony Sinisuka Ginting? Budi: Yes! His daily training routine is intensely demanding. He practices footwork for four hours every morning before starting tactical sparring. Siti: That dedication explains his extraordinary speed and agility on the court. Question: What are the speakers discussing?",
      prompt: "What is the primary topic of the dialogue between Siti and Budi?",
      options: [
        { key: "A", text: "The prize money awarded at the recent Olympic games" },
        { key: "B", text: "The rigorous training routine and athletic discipline of Anthony Ginting" },
        { key: "C", text: "How to purchase professional badminton rackets online" },
        { key: "D", text: "Rules and scoring systems of international badminton matches" }
      ],
      correctAnswer: "B",
      explanation: "Dialog mendiskusikan rutinitas latihan harian Anthony Ginting yang sangat disiplin ('daily training routine is intensely demanding... footwork for four hours') yang membentuk kelincahan dan kecepatannya di lapangan. Pilihan B tepat.",
      grammarNote: "Subject-Verb Agreement & Habitual Actions: 'He practices footwork...', 'His dedication explains...'."
    },
    {
      id: 5,
      source: "Sumber: Dialog Otentik Modul Ajar Fase E — Tim Guru MGMP Bahasa Inggris SMA",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioText: "Number five. Listen to the conversation between a travel agent and a tourist. Tourist: Excuse me, I want to explore Karimunjawa National Park next weekend. What marine activities do you highly recommend? Agent: You definitely should go snorkeling at Menjangan Kecil island. The water visibility is crystalline, and you can swim alongside wild sea turtles among vibrant coral reefs. Question: What activity does the travel agent recommend to the tourist?",
      prompt: "Which activity does the travel agent strongly recommend in Karimunjawa?",
      options: [
        { key: "A", text: "Hiking through dense upland pine forests" },
        { key: "B", text: "Snorkeling among vibrant coral reefs and swimming near sea turtles" },
        { key: "C", text: "Renting a jet ski to race in the deep ocean" },
        { key: "D", text: "Visiting commercial shopping malls in downtown Jepara" }
      ],
      correctAnswer: "B",
      explanation: "Petugas agen perjalanan menyarankan: 'You definitely should go snorkeling at Menjangan Kecil island... swim alongside wild sea turtles among vibrant coral reefs'. Pilihan B benar.",
      grammarNote: "Modal Auxiliary for Recommendation: 'should go snorkeling', 'can swim alongside wild sea turtles'."
    },
    {
      id: 6,
      source: "Sumber: Wawancara Edukasi Sains Populer — Balai Konservasi Sumber Daya Alam (BKSDA)",
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioText: "Number six. Listen to the dialogue between a biology teacher and a student. Student: Ma'am, why are orangutans called the gardeners of the forest? Teacher: Because wild orangutans consume hundreds of fruit species and travel across vast canopy territories. When they drop seeds across the jungle floor, they naturally regenerate the rainforest ecosystem. Question: Why do orangutans earn the nickname 'gardeners of the forest'?",
      prompt: "Why are orangutans regarded as the 'gardeners of the forest' according to the teacher?",
      options: [
        { key: "A", text: "They actively plant fruit trees using agricultural tools" },
        { key: "B", text: "They eat diverse fruits and disperse seeds across the rainforest floor" },
        { key: "C", text: "They protect small forest animals from predatory leopards" },
        { key: "D", text: "They build wooden fences around their nesting territories" }
      ],
      correctAnswer: "B",
      explanation: "Guru menjelaskan bahwa orangutan memakan ratusan jenis buah dan menyebarkan biji-bijian di lantai hutan saat menjelajah ('drop seeds across the jungle floor, they naturally regenerate the rainforest'). Pilihan B tepat.",
      grammarNote: "Cause and Effect / Present Simple: 'Because wild orangutans consume... when they drop seeds, they naturally regenerate...'."
    },

    // Part III: Short Talks / Monologues (7-10) - 3 from ASAS + 1 complementary (4 questions)
    {
      id: 7,
      source: "Sumber: WWF Indonesia & Balai Taman Nasional Tanjung Puting — Seri Konservasi Satwa Tropis",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks (Questions 7 & 8)",
      audioText: "Questions seven and eight are based on the following short talk about fauna conservation. Good morning, visitors of the Tanjung Puting National Park conservation center. Today, we observe the Bornean orangutan, one of our planet's largest arboreal mammals. Adult female orangutans exhibit remarkable maternal care, nurturing their single infant for over seven years. During this period, the mother teaches her offspring how to identify edible forest fruits, avoid toxic vines, and weave sturdy sleeping nests from leafy tree branches high up in the canopy every single evening. Now answer question number seven: What is the main focus of the speaker's presentation?",
      prompt: "What is the main topic of the presentation about orangutans?",
      options: [
        { key: "A", text: "The construction of steel cages in urban zoos" },
        { key: "B", text: "The devoted maternal care and vital survival skills taught by mother orangutans" },
        { key: "C", text: "The commercial export of tropical fruits to foreign countries" },
        { key: "D", text: "Hunting techniques of carnivorous predators in Borneo" }
      ],
      correctAnswer: "B",
      explanation: "Monolog berfokus pada pengasuhan induk orangutan yang luar biasa: 'Adult female orangutans exhibit remarkable maternal care, nurturing their single infant for over seven years... teaches her offspring how to identify edible forest fruits... and weave sturdy sleeping nests'. Pilihan B tepat.",
      grammarNote: "Gerunds as Objects & Adverb of Frequency: 'weaving sturdy sleeping nests... every single evening'."
    },
    {
      id: 8,
      source: "Sumber: WWF Indonesia & Balai Taman Nasional Tanjung Puting — Seri Konservasi Satwa Tropis",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Now answer question number eight based on the same talk: What architectural skill does a young orangutan learn to build high in the canopy every evening?",
      prompt: "What survival skill does an orangutan learn to construct every single night?",
      options: [
        { key: "A", text: "Digging underground burrows near riverbanks" },
        { key: "B", text: "Weaving sturdy, comfortable sleeping nests from leafy branches high in trees" },
        { key: "C", text: "Carving hollow tree trunks to store collected rainwater" },
        { key: "D", text: "Assembling stone shelters to avoid strong monsoon winds" }
      ],
      correctAnswer: "B",
      explanation: "Audio menyebutkan: 'weave sturdy sleeping nests from leafy tree branches high up in the canopy every single evening' (merajut sarang tidur yang kokoh dari dahan berdaun di kanopi pohon).",
      grammarNote: "Infinitive Construction: 'teaches her offspring how to identify... and weave sturdy sleeping nests'."
    },
    {
      id: 9,
      source: "Sumber: Pengumuman Edukasi Sains & Energi Bersih — PT Geo Dipa Energi Dieng & Dinas ESDM Jateng",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks (Questions 9 & 10)",
      audioText: "Questions nine and ten are based on the following educational briefing. Welcome to the Dieng Geothermal Information Center in Banjarnegara and Wonosobo, Central Java. Geothermal energy harnesses the natural heat stored beneath the Earth's crust. Deep production wells tap high-pressure underground steam reservoirs to spin electrical turbine generators. Unlike coal-fired power plants, geothermal systems emit negligible greenhouse gases and provide steady, uninterrupted electricity twenty-four hours a day, regardless of weather conditions or seasonal rain. Now answer question number nine: Where is this geothermal power plant facility located?",
      prompt: "According to the briefing, where is this Indonesian geothermal energy facility situated?",
      options: [
        { key: "A", text: "On the slopes of Mount Muria in northern Kudus" },
        { key: "B", text: "In the Dieng Plateau across Banjarnegara and Wonosobo, Central Java" },
        { key: "C", text: "Along the coastal fishing beaches of Jepara" },
        { key: "D", text: "In the urban industrial center of Semarang" }
      ],
      correctAnswer: "B",
      explanation: "Audio menegaskan lokasi fasilitas: 'Welcome to the Dieng Geothermal Information Center in Banjarnegara and Wonosobo, Central Java'. Pilihan B akurat.",
      grammarNote: "Geographical Prepositional Phrases: 'in Banjarnegara and Wonosobo, Central Java'."
    },
    {
      id: 10,
      source: "Sumber: Pengumuman Edukasi Sains & Energi Bersih — PT Geo Dipa Energi Dieng & Dinas ESDM Jateng",
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Now answer question number ten based on the same briefing: What key operational advantage does geothermal energy offer compared to conventional fossil fuels?",
      prompt: "What is a major environmental and operational advantage of Dieng geothermal energy mentioned in the talk?",
      options: [
        { key: "A", text: "It consumes millions of barrels of imported petroleum" },
        { key: "B", text: "It releases zero carbon smoke and generates steady electricity 24 hours a day" },
        { key: "C", text: "It only operates when bright sunny weather occurs" },
        { key: "D", text: "It requires cutting down entire highland conservation forests" }
      ],
      correctAnswer: "B",
      explanation: "Audio menyatakan: 'Unlike coal-fired power plants, geothermal systems emit negligible greenhouse gases and provide steady, uninterrupted electricity twenty-four hours a day'. Pilihan B tepat.",
      grammarNote: "Contrastive Prepositional Phrase: 'Unlike coal-fired power plants, geothermal systems emit negligible greenhouse gases...'."
    },

    // =========================================================================
    // SECTION 2: READING GENRE 1 - DESCRIPTIVE TEXT (QUESTIONS 11 - 20)
    // =========================================================================

    // Text 1: Karimunjawa (Questions 11 - 15) - Taken from ASAS Bank (5 questions)
    {
      id: 11,
      source: "Sumber: Balai Taman Nasional Karimunjawa & Dinas Kepemudaan, Olahraga dan Pariwisata Jawa Tengah",
      type: "single_choice",
      title: "Reading Comprehension: Descriptive Text",
      stimulusTitle: "Text 1: The Splendor of Karimunjawa Archipelago",
      stimulusBody: `Karimunjawa is a pristine tropical archipelago situated in the Java Sea, approximately eighty kilometers northwest of Jepara, Central Java. Designated as a National Marine Park in 2001, the cluster comprises twenty-seven paradise islands, of which only five are inhabited.<br><br>The underwater realm of Karimunjawa is extraordinarily breathtaking. Vast expanses of thriving coral reefs, characterized by magnificent branching acropora and vibrant brain corals, shelter hundreds of pelagic fish species, including clownfish, blue damselfish, and gentle hawksbill sea turtles. The water visibility frequently exceeds twenty meters, allowing snorkelers and divers to gaze upon the aquatic kaleidoscope with crystalline clarity.<br><br>On land, Karimunjawa boasts expansive coastal stretches lined with powdery white sands and whispering casuarina trees. In the interior of the main island, dense mangrove forests and lush hilltops provide sanctuary for endemic fruit bats and the white-bellied sea eagle. Local inhabitants, who predominantly earn their living as traditional artisanal fishermen and eco-tourism guides, preserve a harmonious lifestyle deeply rooted in maritime conservation.`,
      prompt: "What is the primary topic of the descriptive text above?",
      options: [
        { key: "A", text: "The industrial fishing factory developments in northern Central Java" },
        { key: "B", text: "The natural splendor, marine biodiversity, and eco-tourism of Karimunjawa Archipelago" },
        { key: "C", text: "The history of ancient stone temple constructions in Java" },
        { key: "D", text: "A technical report on ship manufacturing in Jepara harbor" }
      ],
      correctAnswer: "B",
      explanation: "Teks mendeskripsikan keindahan alam tropis, keanekaragaman hayati bawah laut, serta kehidupan ramah lingkungan di Kepulauan Karimunjawa secara komprehensif. Pilihan B paling tepat.",
      grammarNote: "Main Idea of Descriptive Text: Identification and physical/environmental descriptions of a specific tourist destination."
    },
    {
      id: 12,
      source: "Sumber: Balai Taman Nasional Karimunjawa & Dinas Kepemudaan, Olahraga dan Pariwisata Jawa Tengah",
      type: "single_choice",
      title: "Reading Comprehension: Vocabulary & Inference",
      stimulusTitle: "Text 1: The Splendor of Karimunjawa Archipelago",
      stimulusBody: `(Silakan merujuk pada teks 'The Splendor of Karimunjawa Archipelago' di atas)`,
      prompt: "The word 'pristine' in paragraph 1 is closest in meaning to...",
      options: [
        { key: "A", text: "heavily polluted and crowded" },
        { key: "B", text: "pure, untouched, and unspoiled" },
        { key: "C", text: "dry, barren, and rocky" },
        { key: "D", text: "recently abandoned by people" }
      ],
      correctAnswer: "B",
      explanation: "Kata 'pristine' bermakna murni, alami, belum terjamah polusi/kerusakan (pure, untouched, and unspoiled).",
      grammarNote: "Descriptive Adjectives: pristine = unspoiled, immaculate, unpolluted."
    },
    {
      id: 13,
      source: "Sumber: Balai Taman Nasional Karimunjawa & Dinas Kepemudaan, Olahraga dan Pariwisata Jawa Tengah",
      type: "single_choice",
      title: "Reading Comprehension: Detail Information",
      stimulusTitle: "Text 1: The Splendor of Karimunjawa Archipelago",
      stimulusBody: `(Silakan merujuk pada teks 'The Splendor of Karimunjawa Archipelago' di atas)`,
      prompt: "According to paragraph 2, what factors allow divers to experience the underwater world with exceptional clarity?",
      options: [
        { key: "A", text: "The use of artificial ultraviolet floodlights" },
        { key: "B", text: "Water visibility that frequently exceeds twenty meters" },
        { key: "C", text: "Submarine glass viewing tunnels installed on the ocean floor" },
        { key: "D", text: "The shallow depth of the entire Java Sea basin" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 2 menyatakan: 'The water visibility frequently exceeds twenty meters, allowing snorkelers and divers to gaze upon the aquatic kaleidoscope with crystalline clarity'. Pilihan B tepat.",
      grammarNote: "Participial Phrase of Result: 'frequently exceeds twenty meters, allowing snorkelers and divers to gaze...'."
    },
    {
      id: 14,
      source: "Sumber: Balai Taman Nasional Karimunjawa & Dinas Kepemudaan, Olahraga dan Pariwisata Jawa Tengah",
      type: "single_choice",
      title: "Reading Comprehension: Social Function",
      stimulusTitle: "Text 1: The Splendor of Karimunjawa Archipelago",
      stimulusBody: `(Silakan merujuk pada teks 'The Splendor of Karimunjawa Archipelago' di atas)`,
      prompt: "What is the primary communicative purpose of the text?",
      options: [
        { key: "A", text: "To persuade readers to boycott maritime tourism destinations" },
        { key: "B", text: "To describe the unique features, natural charm, and wildlife of Karimunjawa" },
        { key: "C", text: "To explain the meteorological process of tropical monsoon rains" },
        { key: "D", text: "To narrate a fictional myth about ocean mermaids" }
      ],
      correctAnswer: "B",
      explanation: "Tujuan komunikatif teks deskriptif adalah mendeskripsikan ciri-ciri khusus, keindahan alam, dan ekosistem suatu objek/tempat wisata tertentu (Karimunjawa). Pilihan B benar.",
      grammarNote: "Communicative Purpose of Descriptive Text: To describe a particular person, place, or thing."
    },
    {
      id: 15,
      source: "Sumber: Balai Taman Nasional Karimunjawa & Dinas Kepemudaan, Olahraga dan Pariwisata Jawa Tengah",
      type: "single_choice",
      title: "Reading Comprehension: Author's Stance",
      stimulusTitle: "Text 1: The Splendor of Karimunjawa Archipelago",
      stimulusBody: `(Silakan merujuk pada teks 'The Splendor of Karimunjawa Archipelago' di atas)`,
      prompt: "How does the author view the lifestyle of local residents in the concluding sentence?",
      options: [
        { key: "A", text: "Neglectful of environmental sustainability rules" },
        { key: "B", text: "Harmonious and deeply committed to maritime preservation" },
        { key: "C", text: "Uninterested in welcoming foreign visitors" },
        { key: "D", text: "Entirely dependent on industrial factory labor" }
      ],
      correctAnswer: "B",
      explanation: "Kalimat penutup menyatakan bahwa penduduk setempat menjaga gaya hidup harmonis yang berakar kuat pada pelestarian laut ('preserve a harmonious lifestyle deeply rooted in maritime conservation'). Pilihan B tepat.",
      grammarNote: "Participial Adjective Phrase: 'deeply rooted in maritime conservation'."
    },

    // Text 2: Anthony Sinisuka Ginting (Questions 16 - 20) - Complementary TP 10.1 (5 questions)
    {
      id: 16,
      source: "Sumber: Profil Biografi Atlet Bulutangkis Nasional — PBSI & Federasi Bulutangkis Dunia (BWF)",
      type: "single_choice",
      title: "Reading Comprehension: Descriptive Text (Great Athlete)",
      stimulusTitle: "Text 2: Anthony Sinisuka Ginting: Speed, Agility, and Tenacity",
      stimulusBody: `Anthony Sinisuka Ginting is one of Indonesia's most celebrated badminton singles champions, renowned internationally for his electric footwork, tactical intellect, and fierce determination. Born in Cimahi, West Java, Ginting developed his passion for badminton at an early age, displaying an innate talent for rapid court coverage and deception at the net.<br><br>Physically, Ginting possesses a lean, compact athletic build standing at approximately 171 centimeters. While he is not the tallest shuttler on the international tour, he compensates with blistering acceleration, dynamic leaping ability, and razor-sharp reflexes. His signature weapon is a lightning-fast wrist snap that can abruptly disguise a delicate net drop-shot into a lethal cross-court smash, leaving opponents completely flat-footed.<br><br>Beyond his technical mastery, Ginting's psychological resilience distinguishes him on the world stage. Even when trailing by several points against top-ranked global competitors, he remains composed and tenacious, persistently chasing every shuttlecock until the final whistle. Off the court, he is known for his humility, warm demeanor, and quiet sportsmanship, serving as an outstanding role model for aspiring young Indonesian athletes.`,
      prompt: "What is the primary focus of the descriptive passage about Anthony Sinisuka Ginting?",
      options: [
        { key: "A", text: "The historical evolution of badminton racket string manufacturing" },
        { key: "B", text: "The physical attributes, athletic strengths, and inspiring character of Anthony Ginting" },
        { key: "C", text: "A detailed comparison of ticket prices at badminton arenas" },
        { key: "D", text: "The official referee scoring rules of international tournaments" }
      ],
      correctAnswer: "B",
      explanation: "Teks ini mendeskripsikan profil atlet bulutangkis kebanggaan Indonesia, Anthony Sinisuka Ginting: ciri fisik, kelincahan teknik, pukulan khas, serta ketangguhan mental dan kerendahan hatinya. Pilihan B paling tepat.",
      grammarNote: "Generic Structure of Descriptive Text (Person): Identification (P1) followed by Description of physical features, skills, and personality (P2 & P3)."
    },
    {
      id: 17,
      source: "Sumber: Profil Biografi Atlet Bulutangkis Nasional — PBSI & Federasi Bulutangkis Dunia (BWF)",
      type: "single_choice",
      title: "Reading Comprehension: Athletic Attributes",
      stimulusTitle: "Text 2: Anthony Sinisuka Ginting: Speed, Agility, and Tenacity",
      stimulusBody: `(Silakan merujuk pada teks 'Anthony Sinisuka Ginting: Speed, Agility, and Tenacity' di atas)`,
      prompt: "According to paragraph 2, how does Anthony Ginting compensate for not having the tallest height on the tour?",
      options: [
        { key: "A", text: "By using an unusually heavy racket" },
        { key: "B", text: "With blistering acceleration, leaping ability, and razor-sharp reflexes" },
        { key: "C", text: "By arguing frequently with match umpires" },
        { key: "D", text: "By delaying tournament games whenever he feels tired" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 2 menyatakan secara jelas: 'he compensates with blistering acceleration, dynamic leaping ability, and razor-sharp reflexes'. Pilihan B benar.",
      grammarNote: "Adjective-Noun Collocations: 'blistering acceleration', 'dynamic leaping ability', 'razor-sharp reflexes'."
    },
    {
      id: 18,
      source: "Sumber: Profil Biografi Atlet Bulutangkis Nasional — PBSI & Federasi Bulutangkis Dunia (BWF)",
      type: "single_choice",
      title: "Reading Comprehension: Vocabulary in Context",
      stimulusTitle: "Text 2: Anthony Sinisuka Ginting: Speed, Agility, and Tenacity",
      stimulusBody: `(Silakan merujuk pada teks 'Anthony Sinisuka Ginting: Speed, Agility, and Tenacity' di atas)`,
      prompt: "The word 'tenacious' in paragraph 3 ('he remains composed and tenacious...') is closest in meaning to...",
      options: [
        { key: "A", text: "hesitant and timid" },
        { key: "B", text: "persistent, determined, and unyielding" },
        { key: "C", text: "fragile and easily discouraged" },
        { key: "D", text: "careless and unfocused" }
      ],
      correctAnswer: "B",
      explanation: "Kata 'tenacious' bermakna ulet, gigih pantang menyerah, dan tekun (persistent, determined, and unyielding).",
      grammarNote: "Personality Adjective: tenacious = persistent, resolute, steadfast."
    },
    {
      id: 19,
      source: "Sumber: Profil Biografi Atlet Bulutangkis Nasional — PBSI & Federasi Bulutangkis Dunia (BWF)",
      type: "single_choice",
      title: "Reading Comprehension: Psychological Character",
      stimulusTitle: "Text 2: Anthony Sinisuka Ginting: Speed, Agility, and Tenacity",
      stimulusBody: `(Silakan merujuk pada teks 'Anthony Sinisuka Ginting: Speed, Agility, and Tenacity' di atas)`,
      prompt: "What can be inferred about Anthony Ginting's attitude when he is trailing behind on points?",
      options: [
        { key: "A", text: "He readily gives up and stops running" },
        { key: "B", text: "He maintains composure and fights relentlessly for every single shuttlecock" },
        { key: "C", text: "He blames his racket equipment for errors" },
        { key: "D", text: "He leaves the court before the referee calls time" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 3 menguraikan ketangguhan mentalnya: 'Even when trailing by several points... he remains composed and tenacious, persistently chasing every shuttlecock until the final whistle'. Pilihan B tepat.",
      grammarNote: "Participial Phrase: 'persistently chasing every shuttlecock until the final whistle'."
    },
    {
      id: 20,
      source: "Sumber: Profil Biografi Atlet Bulutangkis Nasional — PBSI & Federasi Bulutangkis Dunia (BWF)",
      type: "single_choice",
      title: "Reading Comprehension: Communicative Function",
      stimulusTitle: "Text 2: Anthony Sinisuka Ginting: Speed, Agility, and Tenacity",
      stimulusBody: `(Silakan merujuk pada teks 'Anthony Sinisuka Ginting: Speed, Agility, and Tenacity' di atas)`,
      prompt: "Why does the author describe Ginting's off-court demeanor in the concluding paragraph?",
      options: [
        { key: "A", text: "To show that a great athlete inspires not only through athletic prowess but also through humility and sportsmanship" },
        { key: "B", text: "To prove that athletes should avoid participating in public charities" },
        { key: "C", text: "To demonstrate how expensive badminton equipment has become" },
        { key: "D", text: "To advise students to quit school and play sports exclusively" }
      ],
      correctAnswer: "A",
      explanation: "Penulis menampilkan sikap Ginting di luar lapangan ('humility, warm demeanor, and quiet sportsmanship') untuk menegaskan bahwa atlet teladan menginspirasi lewat kepribadian luhur dan sportivitas, bukan semata prestasi fisik. Pilihan A tepat.",
      grammarNote: "Descriptive Synthesis & Value Evaluation: Sportsmanship and humility as role model virtues."
    },

    // =========================================================================
    // SECTION 3: READING GENRE 2 - SCIENTIFIC REPORT TEXT (QUESTIONS 21 - 30)
    // =========================================================================

    // Text 3: Orangutans (Questions 21 - 25) - Taken from ASAS Bank (5 questions)
    {
      id: 21,
      source: "Sumber: Dikutip dan diadaptasi dari TP_10.2_Materi_Otentik_Report_Text_Science_and_Fauna.docx — WWF & Yayasan Penyelamatan Orangutan Borneo (BOSF)",
      type: "single_choice",
      title: "Reading Comprehension: Scientific Report Text",
      stimulusTitle: "Text 3: Orangutans: The Gardeners of Asia's Rainforests",
      stimulusBody: `Orangutans are great apes native to the tropical rainforests of Indonesia and Malaysia, currently surviving only on the islands of Borneo and Sumatra. Classified under the genus Pongo, they represent the only surviving genus of great apes native to Asia.<br><br>Physically, orangutans are uniquely adapted for an arboreal lifestyle, spending over ninety percent of their lives high above the ground in forest canopies. They possess distinct reddish-brown hair, long and powerful arms reaching up to two meters in span, and highly flexible feet with opposable big toes that function like hands. Adult males often develop prominent fibrous cheek pads, known as flanges, and large throat sacs that amplify loud, resonant vocalizations called 'long calls' across several kilometers of dense jungle.<br><br>Orangutans are predominantly frugivorous, consuming over three hundred varieties of wild forest fruits, complemented by young leaves, bark, flowers, and insects. Because they travel across extensive home ranges and defecate seeds intact, orangutans play an indispensable ecological role as primary seed dispersers, earning their well-deserved moniker as the 'gardeners of the forest.' Without their foraging habits, numerous hardwood canopy tree species would fail to disperse and naturally regenerate.`,
      prompt: "What is the primary topic of the scientific report text above?",
      options: [
        { key: "A", text: "The commercial farming of tropical fruits in Sumatra" },
        { key: "B", text: "The biological characteristics, arboreal adaptations, and ecological significance of orangutans" },
        { key: "C", text: "The migration habits of predatory leopards in Southeast Asia" },
        { key: "D", text: "The production of synthetic rubber in Malaysian plantations" }
      ],
      correctAnswer: "B",
      explanation: "Teks laporan ilmiah ini menyajikan klasifikasi umum, adaptasi fisik untuk hidup di kanopi pohon (arboreal), serta peran ekologis penting orangutan sebagai penyebar biji hutan tropis. Pilihan B paling komprehensif.",
      grammarNote: "Generic Structure of Scientific Report Text: General Classification (P1) followed by Description of physical features and ecological roles (P2 & P3)."
    },
    {
      id: 22,
      source: "Sumber: Dikutip dan diadaptasi dari TP_10.2_Materi_Otentik_Report_Text_Science_and_Fauna.docx — WWF & Yayasan Penyelamatan Orangutan Borneo (BOSF)",
      type: "single_choice",
      title: "Reading Comprehension: Detail Identification",
      stimulusTitle: "Text 3: Orangutans: The Gardeners of Asia's Rainforests",
      stimulusBody: `(Silakan merujuk pada teks 'Orangutans: The Gardeners of Asia's Rainforests' di atas)`,
      prompt: "According to paragraph 2, what physical adaptation enables male orangutans to project their voices across kilometers of dense forest?",
      options: [
        { key: "A", text: "Sharp claws on their front limbs" },
        { key: "B", text: "Large throat sacs that amplify loud resonant vocalizations" },
        { key: "C", text: "Extraordinarily long tails that rattle against trees" },
        { key: "D", text: "Specialized ears sensitive to ultrasonic sounds" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 2 menyatakan: 'Adult males often develop prominent fibrous cheek pads... and large throat sacs that amplify loud, resonant vocalizations called 'long calls' across several kilometers of dense jungle'. Pilihan B akurat.",
      grammarNote: "Defining Relative Clause: 'large throat sacs that amplify loud, resonant vocalizations'."
    },
    {
      id: 23,
      source: "Sumber: Dikutip dan diadaptasi dari TP_10.2_Materi_Otentik_Report_Text_Science_and_Fauna.docx — WWF & Yayasan Penyelamatan Orangutan Borneo (BOSF)",
      type: "single_choice",
      title: "Reading Comprehension: Vocabulary in Context",
      stimulusTitle: "Text 3: Orangutans: The Gardeners of Asia's Rainforests",
      stimulusBody: `(Silakan merujuk pada teks 'Orangutans: The Gardeners of Asia's Rainforests' di atas)`,
      prompt: "The word 'indispensable' in paragraph 3 ('play an indispensable ecological role...') is closest in meaning to...",
      options: [
        { key: "A", text: "completely unnecessary and optional" },
        { key: "B", text: "essential, vital, and absolutely necessary" },
        { key: "C", text: "harmful to the balance of nature" },
        { key: "D", text: "temporary and easily replaced" }
      ],
      correctAnswer: "B",
      explanation: "Kata 'indispensable' bermakna sangat penting, vital, dan tidak dapat digantikan (essential, vital, and absolutely necessary).",
      grammarNote: "Academic Evaluative Adjective: indispensable = essential, imperative, vital."
    },
    {
      id: 24,
      source: "Sumber: Dikutip dan diadaptasi dari TP_10.2_Materi_Otentik_Report_Text_Science_and_Fauna.docx — WWF & Yayasan Penyelamatan Orangutan Borneo (BOSF)",
      type: "single_choice",
      title: "Reading Comprehension: Reference Word",
      stimulusTitle: "Text 3: Orangutans: The Gardeners of Asia's Rainforests",
      stimulusBody: `(Silakan merujuk pada teks 'Orangutans: The Gardeners of Asia's Rainforests' di atas)`,
      prompt: "In paragraph 3, what does the pronoun 'their' refer to in the phrase 'their well-deserved moniker'?",
      options: [
        { key: "A", text: "Rainforest trees" },
        { key: "B", text: "Wild orangutans" },
        { key: "C", text: "Fruit seeds" },
        { key: "D", text: "Borneo islands" }
      ],
      correctAnswer: "B",
      explanation: "Frasa 'their well-deserved moniker as the gardeners of the forest' merujuk kepada sebutan bagi orangutan (wild orangutans). Pilihan B benar.",
      grammarNote: "Pronoun-Antecedent Agreement: Plural antecedent 'orangutans' -> possessive pronoun 'their'."
    },
    {
      id: 25,
      source: "Sumber: Dikutip dan diadaptasi dari TP_10.2_Materi_Otentik_Report_Text_Science_and_Fauna.docx — WWF & Yayasan Penyelamatan Orangutan Borneo (BOSF)",
      type: "single_choice",
      title: "Reading Comprehension: Ecological Consequence",
      stimulusTitle: "Text 3: Orangutans: The Gardeners of Asia's Rainforests",
      stimulusBody: `(Silakan merujuk pada teks 'Orangutans: The Gardeners of Asia's Rainforests' di atas)`,
      prompt: "What ecological catastrophe would occur in the rainforest if orangutans were to become extinct?",
      options: [
        { key: "A", text: "Forest fruits would grow twice as fast" },
        { key: "B", text: "Numerous hardwood canopy tree species would fail to disperse seeds and regenerate naturally" },
        { key: "C", text: "Rainforest soil would turn into volcanic lava" },
        { key: "D", text: "All insects and birds would immediately abandon the jungle" }
      ],
      correctAnswer: "B",
      explanation: "Kalimat terakhir menyatakan: 'Without their foraging habits, numerous hardwood canopy tree species would fail to disperse and naturally regenerate'. Pilihan B tepat.",
      grammarNote: "Hypothetical Conditional without 'if': 'Without their foraging habits, numerous tree species would fail to disperse...'."
    },

    // Text 4: Dieng Geothermal (Questions 26 - 30) - Taken from ASAS Bank (5 questions)
    {
      id: 26,
      source: "Sumber: Publikasi Resmi Kementerian Energi dan Sumber Daya Mineral (ESDM) & PT Geo Dipa Energi Dieng",
      type: "single_choice",
      title: "Reading Comprehension: Report Text (Renewable Energy)",
      stimulusTitle: "Text 4: Clean Geothermal Energy in the Dieng Plateau, Central Java",
      stimulusBody: `Geothermal energy is a clean, renewable energy source derived from the intense natural thermal heat stored deep within the Earth's sub-surface crust. In Central Java, one of the most prominent geothermal exploration sites is located in the Dieng Plateau, spanning the regencies of Banjarnegara and Wonosobo.<br><br>The mechanics of geothermal energy conversion rely on tapping hydrothermal fluid reservoirs located several thousand meters beneath volcanic rock formations. Deep production wells extract superheated water and dry steam under intense geological pressure. Once brought to the surface, the high-pressure steam is directed into powerful turbine generators to produce clean electricity. Crucially, the remaining condensed thermal water is not discharged into local rivers; rather, it is continuously reinjected into the deep underground reservoir through injection wells, sustaining the pressure and preventing surface water contamination.<br><br>Unlike fossil-fueled thermal power plants, the Dieng Geothermal Power Plant generates steady electricity without burning coal or emitting harmful carbon smoke. Furthermore, unlike solar or wind power which fluctuate with weather, geothermal energy provides continuous baseload power twenty-four hours a day, making it an indispensable cornerstone of Indonesia's renewable green energy transition.`,
      prompt: "What is the primary communicative purpose of the scientific report text on Dieng Geothermal Energy?",
      options: [
        { key: "A", text: "To persuade readers to stop using electrical home appliances" },
        { key: "B", text: "To explain the technical process and environmental benefits of geothermal energy in Dieng Plateau" },
        { key: "C", text: "To narrate an ancient legend about mountain spirits in Wonosobo" },
        { key: "D", text: "To advertise holiday resort villas in Banjarnegara" }
      ],
      correctAnswer: "B",
      explanation: "Teks ini menyajikan fakta ilmiah obyektif mengenai definisi, mekanisme kerja konversi uap panas bumi menjadi listrik, serta keunggulan ekologis PLTP Dieng di Jawa Tengah. Pilihan B paling akurat.",
      grammarNote: "Communicative Purpose of Scientific Report Text: To present information about a technical/natural phenomenon through objective scientific classification and descriptions."
    },
    {
      id: 27,
      source: "Sumber: Publikasi Resmi Kementerian Energi dan Sumber Daya Mineral (ESDM) & PT Geo Dipa Energi Dieng",
      type: "single_choice",
      title: "Reading Comprehension: Environmental Advantage",
      stimulusTitle: "Text 4: Clean Geothermal Energy in the Dieng Plateau, Central Java",
      stimulusBody: `(Silakan merujuk pada teks 'Clean Geothermal Energy in the Dieng Plateau, Central Java' di atas)`,
      prompt: "Why is the condensed thermal water reinjected back into deep underground reservoirs?",
      options: [
        { key: "A", text: "To extinguish active volcanic magma chambers permanently" },
        { key: "B", text: "To sustain reservoir pressure and prevent local surface water contamination" },
        { key: "C", text: "To freeze subterranean soil rocks into ice" },
        { key: "D", text: "To wash minerals directly into agricultural rice paddies" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 2 menyatakan: 'it is continuously reinjected into the deep underground reservoir through injection wells, sustaining the pressure and preventing surface water contamination'. Pilihan B benar.",
      grammarNote: "Participle Clauses of Purpose: 'sustaining the pressure and preventing surface water contamination'."
    },
    {
      id: 28,
      source: "Sumber: Publikasi Resmi Kementerian Energi dan Sumber Daya Mineral (ESDM) & PT Geo Dipa Energi Dieng",
      type: "single_choice",
      title: "Reading Comprehension: Comparative Logic",
      stimulusTitle: "Text 4: Clean Geothermal Energy in the Dieng Plateau, Central Java",
      stimulusBody: `(Silakan merujuk pada teks 'Clean Geothermal Energy in the Dieng Plateau, Central Java' di atas)`,
      prompt: "What operational advantage does geothermal energy have over solar and wind power according to paragraph 3?",
      options: [
        { key: "A", text: "It requires clear cloudless skies every single day" },
        { key: "B", text: "It supplies steady baseload electricity 24 hours a day without weather fluctuation" },
        { key: "C", text: "It produces large clouds of smoke that protect trees from sunlight" },
        { key: "D", text: "It can be transported inside plastic barrels" }
      ],
      correctAnswer: "B",
      explanation: "Paragraf 3 menguraikan: 'unlike solar or wind power which fluctuate with weather, geothermal energy provides continuous baseload power twenty-four hours a day'. Pilihan B tepat.",
      grammarNote: "Contrastive Complex Clause: 'unlike solar or wind power which fluctuate... geothermal energy provides continuous baseload power...'."
    },
    {
      id: 29,
      source: "Sumber: Publikasi Resmi Kementerian Energi dan Sumber Daya Mineral (ESDM) & PT Geo Dipa Energi Dieng",
      type: "single_choice",
      title: "Reading Comprehension: Vocabulary in Context",
      stimulusTitle: "Text 4: Clean Geothermal Energy in the Dieng Plateau, Central Java",
      stimulusBody: `(Silakan merujuk pada teks 'Clean Geothermal Energy in the Dieng Plateau, Central Java' di atas)`,
      prompt: "The phrase 'baseload power' in paragraph 3 refers to electrical power that is...",
      options: [
        { key: "A", text: "supplied only during midnight hours" },
        { key: "B", text: "continuous, reliable, and available around the clock" },
        { key: "C", text: "expensive and reserved only for factory machines" },
        { key: "D", text: "generated exclusively by burning diesel fuel" }
      ],
      correctAnswer: "B",
      explanation: "Istilah 'baseload power' dalam teknik energi listrik merujuk pada daya beban dasar yang beroperasi stabil, andal, dan terus-menerus 24 jam sehari (continuous, reliable, and available around the clock). Pilihan B benar.",
      grammarNote: "Technical Energy Vocabulary: baseload power = minimum continuous electrical supply needed by a power grid."
    },
    {
      id: 30,
      source: "Sumber: Publikasi Resmi Kementerian Energi dan Sumber Daya Mineral (ESDM) & PT Geo Dipa Energi Dieng",
      type: "single_choice",
      title: "Reading Comprehension: Discourse Logic",
      stimulusTitle: "Text 4: Clean Geothermal Energy in the Dieng Plateau, Central Java",
      stimulusBody: `(Silakan merujuk pada teks 'Clean Geothermal Energy in the Dieng Plateau, Central Java' di atas)`,
      prompt: "Why is geothermal energy considered a 'closed-loop' eco-friendly system?",
      options: [
        { key: "A", text: "Because thermal fluids are extracted, used to spin turbines, and reinjected underground without open environmental waste" },
        { key: "B", text: "Because production buildings are completely locked without human operators" },
        { key: "C", text: "Because the power plant operates for only one month each calendar year" },
        { key: "D", text: "Because electricity cables are buried under concrete roads" }
      ],
      correctAnswer: "A",
      explanation: "Sistem tertutup (closed-loop) pada PLTP terjadi karena fluida termal diekstraksi dari bawah tanah, uapnya memutar turbin generator, dan sisa airnya diinjeksikan kembali ke dalam reservoir tanah tanpa membuang limbah ke lingkungan permukaan. Pilihan A tepat.",
      grammarNote: "Scientific Process Reasoning: Closed-loop cycle in geothermal energy production."
    },

    // =========================================================================
    // SECTION 4: GRAMMAR & VOCABULARY MASTERY (QUESTIONS 31 - 40)
    // =========================================================================

    // Complementary Full Semester Questions (10 questions)
    {
      id: 31,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Grammar Essentials: Subject-Verb Agreement in Scientific Fact",
      stimulusTitle: "Kaidah Kesesuaian Subjek dan Kata Kerja (Simple Present)",
      stimulusBody: "The tropical rainforest of Tanjung Puting _______ sanctuary and abundant nourishment for hundreds of endangered wildlife species.",
      prompt: "Choose the grammatically correct verb form to complete the factual statement:",
      options: [
        { key: "A", text: "provides" },
        { key: "B", text: "provide" },
        { key: "C", text: "is provide" },
        { key: "D", text: "providing" }
      ],
      correctAnswer: "A",
      explanation: "Subjek kalimat adalah 'The tropical rainforest' (kata benda tunggal / singular noun, third-person singular). Dalam Simple Present Tense untuk menyatakan fakta ilmiah, kata kerja berakhiran -s/-es: 'provides'.",
      grammarNote: "Subject-Verb Agreement Rule: Singular Subject (Third Person) + Verb-s/es in Simple Present."
    },
    {
      id: 32,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Grammar Essentials: Passive Voice in Technical Descriptions",
      stimulusTitle: "Transformasi Kalimat Pasif dalam Laporan Ilmiah",
      stimulusBody: "At the Dieng power plant, superheated geothermal steam _______ directly into electrical turbine generators to produce clean power.",
      prompt: "Select the correct passive verb construction:",
      options: [
        { key: "A", text: "is directed" },
        { key: "B", text: "directs" },
        { key: "C", text: "is directing" },
        { key: "D", text: "has directed" }
      ],
      correctAnswer: "A",
      explanation: "Subjek 'superheated geothermal steam' menerima tindakan (pasif): be (is) + V3 (directed). Maka bentuk pasif Simple Present yang tepat adalah 'is directed'.",
      grammarNote: "Simple Present Passive: Subject + is/are + Past Participle (V3)."
    },
    {
      id: 33,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Grammar Essentials: Adjective Order (OSASCOMP)",
      stimulusTitle: "Kaidah Urutan Kata Sifat Deskriptif (OSASCOMP)",
      stimulusBody: "Karimunjawa National Park is celebrated for its _______ reefs that shelter diverse marine life.",
      prompt: "Which phrase follows the correct English adjective order (Opinion - Size - Age - Color)?",
      options: [
        { key: "A", text: "magnificent expansive vibrant" },
        { key: "B", text: "vibrant magnificent expansive" },
        { key: "C", text: "expansive vibrant magnificent" },
        { key: "D", text: "magnificent vibrant expansive" }
      ],
      correctAnswer: "A",
      explanation: "Berdasarkan kaidah OSASCOMP: Opinion ('magnificent' - luar biasa) mendahului Size ('expansive' - luas membentang), disusul Color/Quality ('vibrant' - beraneka ragam cerah). Urutan yang benar adalah 'magnificent expansive vibrant'.",
      grammarNote: "OSASCOMP Rule: Opinion (magnificent) -> Size (expansive) -> Quality/Color (vibrant)."
    },
    {
      id: 34,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Grammar Essentials: Conditional Sentence Type 1",
      stimulusTitle: "Kalimat Pengandaian Kemungkinan Masa Depan (Type 1)",
      stimulusBody: "If the government and local communities _______ national park boundaries diligently, endangered orangutans will thrive in their natural habitat.",
      prompt: "Select the correct verb form for the 'if-clause' in Conditional Type 1:",
      options: [
        { key: "A", text: "protect" },
        { key: "B", text: "protected" },
        { key: "C", text: "will protect" },
        { key: "D", text: "had protected" }
      ],
      correctAnswer: "A",
      explanation: "Pola Conditional Sentence Type 1 (kemungkinan nyata di masa depan) adalah: If + Subject + Simple Present (V1), Subject + will + V1. Subjek jamak 'government and local communities' menggunakan 'protect'.",
      grammarNote: "Conditional Type 1 Formula: If + S + V1 (Simple Present), S + will + Base Verb (V1)."
    },
    {
      id: 35,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Grammar Essentials: Conditional Sentence Type 0 (Scientific Fact)",
      stimulusTitle: "Kalimat Pengandaian Kebenaran Ilmiah Mutlak (Type 0)",
      stimulusBody: "When underground hydrothermal water _______ intense volcanic heat beneath the earth's crust, it naturally turns into high-pressure steam.",
      prompt: "Which verb form completes the Zero Conditional scientific statement?",
      options: [
        { key: "A", text: "absorbs" },
        { key: "B", text: "absorbed" },
        { key: "C", text: "would absorb" },
        { key: "D", text: "will absorb" }
      ],
      correctAnswer: "A",
      explanation: "Zero Conditional digunakan untuk menyatakan fakta ilmiah yang selalu benar: When/If + Simple Present (absorbs), Simple Present (turns into). Subjek 'hydrothermal water' tunggal sehingga menggunakan 'absorbs'.",
      grammarNote: "Zero Conditional Formula: When/If + S + V1(s/es), S + V1(s/es) for universal scientific truths."
    },
    {
      id: 36,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Grammar Essentials: Relative Pronoun 'Whose'",
      stimulusTitle: "Klausa Relatif Kepemilikan (Relative Clauses)",
      stimulusBody: "Anthony Sinisuka Ginting is a world-class badminton athlete _______ electric court footwork inspires millions of young sports fans.",
      prompt: "Which relative pronoun correctly shows possession?",
      options: [
        { key: "A", text: "whose" },
        { key: "B", text: "whom" },
        { key: "C", text: "which" },
        { key: "D", text: "where" }
      ],
      correctAnswer: "A",
      explanation: "'Whose' digunakan untuk menunjukkan kepemilikan (possession): atlet yang kelincahan kakinya (whose footwork) menginspirasi jutaan penggemar. 'Whom' untuk objek manusia, 'which' untuk benda.",
      grammarNote: "Relative Pronoun: 'whose' indicates possession for people or entities."
    },
    {
      id: 37,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Vocabulary Mastery: Oxford 3000 Level A2/B1 Contextual Lexis",
      stimulusTitle: "Pemilihan Kata Kontekstual Berdasarkan Makna",
      stimulusBody: "Establishing strict conservation rules is _______ to guarantee that future generations can witness wild fauna in their natural habitat.",
      prompt: "Which adjective best completes the sentence with the meaning of 'crucial and absolutely necessary'?",
      options: [
        { key: "A", text: "vital" },
        { key: "B", text: "artificial" },
        { key: "C", text: "hesitant" },
        { key: "D", text: "fragile" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'vital' bermakna sangat penting, esensial, dan mutlak diperlukan (crucial and absolutely necessary). Pilihan A tepat.",
      grammarNote: "Evaluative Adjective (Oxford 3000 A2/B1): vital = essential, crucial, necessary."
    },
    {
      id: 38,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Vocabulary Mastery: Academic Collocation with 'Role'",
      stimulusTitle: "Kaidah Kolokasi Baku Bahasa Inggris",
      stimulusBody: "Environmental scientists agree that tropical rainforests _______ a critical role in regulating global climate patterns.",
      prompt: "Which verb collocates naturally with 'a critical role'?",
      options: [
        { key: "A", text: "play" },
        { key: "B", text: "make" },
        { key: "C", text: "do" },
        { key: "D", text: "put" }
      ],
      correctAnswer: "A",
      explanation: "Kolokasi baku dalam bahasa Inggris untuk 'memegang/memainkan peranan penting' adalah 'play a critical role' (bukan make a role atau do a role). Pilihan A tepat.",
      grammarNote: "Fixed Collocation: 'play a vital/critical/key role in doing something'."
    },
    {
      id: 39,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Functional Expressions: Asking for Clarification",
      stimulusTitle: "Ungkapan Meminta Klarifikasi dalam Diskusi Kelas",
      stimulusBody: "Teacher: 'Geothermal energy provides baseload power because its production wells are closed-loop.'<br>Student: '_______ Could you please explain what you mean by closed-loop system?'",
      prompt: "Which phrase politely asks for clarification from the instructor?",
      options: [
        { key: "A", text: "I'm not quite sure I follow, Sir." },
        { key: "B", text: "I strongly disagree with your statement." },
        { key: "C", text: "That is completely obvious to everyone." },
        { key: "D", text: "I already know everything about this topic." }
      ],
      correctAnswer: "A",
      explanation: "Ungkapan 'I'm not quite sure I follow, Sir' adalah bentuk santun formal untuk menyatakan belum sepenuhnya paham dan meminta penjelasan lebih lanjut (asking for clarification). Pilihan A tepat.",
      grammarNote: "Functional English: Polite clarification request ('I'm not quite sure I follow... Could you explain...?')."
    },
    {
      id: 40,
      source: "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
      type: "single_choice",
      title: "Functional Expressions: Expressing Agreement & Conjunction",
      stimulusTitle: "Ungkapan Persetujuan Terhadap Solusi Energi Bersih",
      stimulusBody: "Speaker A: 'Investing in renewable geothermal energy will significantly reduce our carbon footprint in Central Java.'<br>Speaker B: '_______ It is clean, reliable, and sustainable for future generations.'",
      prompt: "Which expression best demonstrates complete agreement with Speaker A?",
      options: [
        { key: "A", text: "I couldn't agree more." },
        { key: "B", text: "I doubt that very much." },
        { key: "C", text: "I am totally against that idea." },
        { key: "D", text: "That sounds completely unrealistic." }
      ],
      correctAnswer: "A",
      explanation: "Ungkapan 'I couldn't agree more' menyatakan persetujuan mutlak / sangat setuju (complete agreement). Pilihan B, C, dan D menyatakan keraguan atau penolakan.",
      grammarNote: "Functional English: Expressing strong agreement ('I couldn't agree more' = I totally agree)."
    }
  ];
}

// Global State Management
let studentIdentity = {
  tingkat: "X-E",
  rombel: "1",
  presensi: "1",
  nama: "Siswa Kelas X"
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
        tingkat: "X-E",
        rombel: portalData.rombel || "1",
        presensi: portalData.presensi || "1",
        nama: portalData.nama || "Siswa Kelas X"
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
    tingkat: "X-E",
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

  // Initialize and randomize Grade 10 ASAS complete question bank
  const rawBank = getGrade10AsasCompleteQuestions();
  questions = randomizeQuestionOptions(rawBank);

  // Restore session from LocalStorage if available
  try {
    const saved = localStorage.getItem("sabaku_asas_progress_X");
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
  document.getElementById("side-student-meta").textContent = `Kelas X — Rombel ${studentIdentity.rombel} | Presensi ${studentIdentity.presensi}`;
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

  localStorage.removeItem("sabaku_asas_progress_X");

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
    mode: (currentMode === "practice") ? "Latihan ASAS Gasal Kelas X" : "Asesmen Resmi ASAS Gasal Kelas X",
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
    link.setAttribute("download", `Rekap_Nilai_ASAS_X_${studentIdentity.nama.replace(/\s+/g, "_")}.csv`);
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
    localStorage.removeItem("sabaku_asas_progress_X");
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
    localStorage.setItem("sabaku_asas_progress_X", JSON.stringify(data));
  } catch (e) {
    console.warn("Autosave error:", e);
  }
}
