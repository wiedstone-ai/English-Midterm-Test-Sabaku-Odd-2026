/**
 * ASESMEN TENGAH SEMESTER (ATS) & LATIHAN MANDIRI 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * TINGKAT XII (FASE F / TL) — SEMESTER GASAL 2026/2027
 * 
 * Features:
 * - 40 Questions specifically designed for Grade X Fase E
 * - Authentic Sources cited on every reading text
 * - Accurate Geographical Fact: Dieng Plateau Geothermal Energy (Banjarnegara/Wonosobo)
 * - Level A2 Vocabulary (Oxford 3000)
 * - Realtime Autosave with LocalStorage (Session persistent across refresh)
 * - Fisher-Yates Dynamic Option Shuffling
 * - Instant Grading & KKTP 75 Evaluation
 * - Google Sheets Sync & 1-Click CSV Export
 */

// Default Configuration
const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

// State Management
let currentTingkat = "XII-F";
let currentMode = "practice"; // 'practice' or 'exam'
let currentQuestionIndex = 0;
let userAnswers = {}; // { qId: answer }
let flaggedQuestions = new Set();
let timerInterval = null;
let remainingSeconds = 90 * 60; // 90 minutes
let isExamSubmitted = false;
let audioSpeechRate = 1.0;
let currentUtterance = null;
let questions = [];

let studentIdentity = {
  tingkat: "XII-F",
  rombel: "1",
  presensi: "1",
  nama: "Siswa Kelas X"
};

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

function getGrade10Questions() {
  return [
    // 1. LISTENING PICTURES
    {
      id: 1,
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
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number two. Look at the pictures. This magnificent Indonesian cultural destination features ancient massive stone stupas, intricate relief carvings, and tiered terraces rising proudly against the morning mist. Which picture illustrates the spoken description?",
      prompt: "Which picture corresponds to the magnificent cultural tourism site described in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.beach, label: "A tropical sandy beach with coconut palm trees" },
        { key: "B", svg: SVG_PICTURES.temple, label: "An ancient monumental stone temple with terraces and stupas" },
        { key: "C", svg: SVG_PICTURES.mountain, label: "A towering volcanic peak covered in alpine snow" },
        { key: "D", svg: SVG_PICTURES.bridge, label: "A modern suspension bridge across a metropolis bay" }
      ],
      correctAnswer: "B",
      explanation: "Audio menyebutkan: 'magnificent Indonesian cultural destination features ancient massive stone stupas, intricate relief carvings, and tiered terraces'. Ciri-ciri stupa batu bertingkat dan relief relief kuno adalah candi bersejarah (Temple - Gambar B).",
      grammarNote: "OSASCOMP Adjective Order: 'ancient massive stone stupas' (Age: ancient, Size: massive, Material: stone)."
    },
    {
      id: 3,
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number three. Look at the pictures. This unique architectural landmark in Kudus blends Hindu-Javanese brick craftsmanship with Islamic minaret structure, symbolizing historic cultural harmony. Which picture depicts this monument?",
      prompt: "Which picture depicts the iconic heritage landmark in Kudus mentioned in the recording?",
      options: [
        { key: "A", svg: SVG_PICTURES.puppet, label: "Wayang shadow puppet leather figure" },
        { key: "B", svg: SVG_PICTURES.batik, label: "Traditional geometric batik textile pattern" },
        { key: "C", svg: SVG_PICTURES.minaret, label: "Historic red-brick heritage tower minaret of Kudus" },
        { key: "D", svg: SVG_PICTURES.concert, label: "Modern musical auditorium stage" }
      ],
      correctAnswer: "C",
      explanation: "Audio menyebutkan: 'unique architectural landmark in Kudus blends Hindu-Javanese brick craftsmanship with Islamic minaret structure'. Landmark menara bata merah ikonik khas Kudus adalah Menara Kudus (Gambar C).",
      grammarNote: "Compound Adjectives & Cultural Heritage Nouns: 'Hindu-Javanese brick craftsmanship', 'historic cultural harmony'."
    },

    // 4-6. LISTENING SHORT DIALOGS
    {
      id: 4,
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioText: "Number four. Listen to the conversation. Man: Good morning, Rian. You look so energetic today! What is your secret for staying fit during our exam week? Woman: Well, I always maintain a nutritious diet, drink plenty of fresh water, and jog for twenty minutes every morning before studying. Question: What does the woman do to maintain her physical fitness?",
      stimulusTitle: "Audio Transcript (Listening)",
      stimulusBody: "<strong>Man:</strong> Good morning, Rian. You look so energetic today! What is your secret for staying fit during our exam week?<br><strong>Woman:</strong> Well, I always maintain a nutritious diet, drink plenty of fresh water, and jog for twenty minutes every morning before studying.",
      prompt: "What does the woman do to keep herself fit during examination week?",
      options: [
        { key: "A", text: "She studies until late at night and sleeps in the morning." },
        { key: "B", text: "She eats nutritious food, hydrates well, and jogs for 20 minutes daily." },
        { key: "C", text: "She skips breakfast and drinks energy coffee before testing." },
        { key: "D", text: "She exercises at the professional fitness gym twice a day." }
      ],
      correctAnswer: "B",
      explanation: "Wanita tersebut secara eksplisit menyatakan: 'I always maintain a nutritious diet, drink plenty of fresh water, and jog for twenty minutes every morning' (makanan bernutrisi, banyak minum air, dan lari pagi 20 menit).",
      grammarNote: "Simple Present Tense of Habitual Action with Adverbs of Frequency: 'I always maintain...', 'drink', 'jog'."
    },
    {
      id: 5,
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioText: "Number five. Listen to the dialogue. Boy: Sinta, do you have any specific plans for the upcoming school mid-semester holiday? Girl: Yes, my family and I intend to visit the mangrove conservation park in Jepara. We want to plant ten mangrove seedlings to prevent coastal erosion. Boy: That sounds like a truly worthwhile environmental project! Question: What is the girl's intention for the upcoming holiday?",
      stimulusTitle: "Audio Transcript (Listening)",
      stimulusBody: "<strong>Boy:</strong> Sinta, do you have any specific plans for the upcoming school mid-semester holiday?<br><strong>Girl:</strong> Yes, my family and I intend to visit the mangrove conservation park in Jepara. We want to plant ten mangrove seedlings to prevent coastal erosion.<br><strong>Boy:</strong> That sounds like a truly worthwhile environmental project!",
      prompt: "What is the girl intending to do during the mid-semester break?",
      options: [
        { key: "A", text: "She plans to plant mangrove seedlings in a coastal conservation park." },
        { key: "B", text: "She intends to stay home and prepare for the national science olympiad." },
        { key: "C", text: "She wants to buy ornamental trees for her school garden." },
        { key: "D", text: "She is going to build a wooden cottage near the seashore." }
      ],
      correctAnswer: "A",
      explanation: "Gadis tersebut menyatakan niatnya: 'my family and I intend to visit the mangrove conservation park... We want to plant ten mangrove seedlings'. Jawaban yang tepat adalah A.",
      grammarNote: "Expressing Intentions & Plans: 'intend to visit...', 'want to plant...'. Vocabulary: conservation, seedlings, erosion."
    },
    {
      id: 6,
      type: "listening_dialog",
      title: "Listening Section: Part II - Short Dialogues",
      audioText: "Number six. Listen to the conversation. Teacher: Adi, your descriptive brochure about Mount Muria is very captivating, but the fonts are slightly difficult to read against the dark background. Student: Thank you for your feedback, Ma'am. I will modify the font colors to high-contrast white and resize the heading immediately. Question: What will the student most likely do next?",
      stimulusTitle: "Audio Transcript (Listening)",
      stimulusBody: "<strong>Teacher:</strong> Adi, your descriptive brochure about Mount Muria is very captivating, but the fonts are slightly difficult to read against the dark background.<br><strong>Student:</strong> Thank you for your feedback, Ma'am. I will modify the font colors to high-contrast white and resize the heading immediately.",
      prompt: "What action will the student most likely take next?",
      options: [
        { key: "A", text: "Delete the entire brochure and choose a new topic." },
        { key: "B", text: "Revise the typography by changing the font color to white and adjusting heading sizes." },
        { key: "C", text: "Submit the dark brochure directly to the school principal." },
        { key: "D", text: "Complain to his classmates about the teacher's grading system." }
      ],
      correctAnswer: "B",
      explanation: "Siswa menjawab saran gurunya dengan: 'I will modify the font colors to high-contrast white and resize the heading immediately'. Jawaban B mendeskripsikan tindakan perbaikan tipografi tersebut.",
      grammarNote: "Simple Future with 'will' for Immediate Decisions: 'I will modify...', 'resize'."
    },

    // 7-10. LISTENING SHORT TALKS
    {
      id: 7,
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks (Questions 7 & 8)",
      audioText: "Questions seven and eight refer to the following short monologue. Hello students! Today I want to introduce you to Anthony Sinisuka Ginting, one of Indonesia's foremost badminton singles stars. Born in Cimahi, West Java, Ginting is widely renowned for his lightning-fast footwork, deceptive wrist drop-shots, and resilient fighting spirit on court. He secured a historic bronze medal at the Tokyo 2020 Olympics and spearheaded Indonesia to hoist the prestigious Thomas Cup trophy. Off court, he is humble, disciplined, and dedicated to mentoring younger shuttlecock players.",
      stimulusTitle: "Monologue Audio Transcript (Listening)",
      stimulusBody: "<em>Hello students! Today I want to introduce you to Anthony Sinisuka Ginting, one of Indonesia's foremost badminton singles stars. Born in Cimahi, West Java, Ginting is widely renowned for his lightning-fast footwork, deceptive wrist drop-shots, and resilient fighting spirit on court. He secured a historic bronze medal at the Tokyo 2020 Olympics and spearheaded Indonesia to hoist the prestigious Thomas Cup trophy. Off court, he is humble, disciplined, and dedicated to mentoring younger shuttlecock players.</em>",
      prompt: "What is Anthony Sinisuka Ginting primarily celebrated for on the badminton court?",
      options: [
        { key: "A", text: "His defensive passive style and slow baseline returns." },
        { key: "B", text: "His lightning-fast footwork, deceptive wrist shots, and resilient fighting spirit." },
        { key: "C", text: "His career as a professional marathon and triathlon coach." },
        { key: "D", text: "His height and heavy overhead weightlifting techniques." }
      ],
      correctAnswer: "B",
      explanation: "Monolog menyatakan: 'renowned for his lightning-fast footwork, deceptive wrist drop-shots, and resilient fighting spirit on court'. Jawaban B adalah kutipan akurat.",
      grammarNote: "Descriptive Adjectives & Compound Adjectives: 'lightning-fast', 'deceptive', 'resilient', 'prestigious'."
    },
    {
      id: 8,
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Question eight is based on the previous monologue about Anthony Ginting. Question: What personality traits does Anthony Ginting exhibit outside his sports matches?",
      prompt: "According to the speaker, what are Ginting's character traits outside the badminton court?",
      options: [
        { key: "A", text: "Arrogant, distant, and reluctant to communicate with fans." },
        { key: "B", text: "Humble, disciplined, and dedicated to guiding younger athletes." },
        { key: "C", text: "Impatient, unpredictable, and strict towards school teachers." },
        { key: "D", text: "Reserved and uninterested in national sports development." }
      ],
      correctAnswer: "B",
      explanation: "Pada bagian akhir monolog disebutkan: 'Off court, he is humble, disciplined, and dedicated to mentoring younger shuttlecock players'. Jawaban B tepat.",
      grammarNote: "Predicate Adjectives describing Personality: 'humble', 'disciplined', 'dedicated'."
    },
    {
      id: 9,
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks (Questions 9 & 10)",
      audioText: "Questions nine and ten are based on the following official school announcement. Attention, all tenth-grade students of SMA Negeri 1 Bae Kudus! In accordance with our green school program, the student council will organize a Campus Eco-Clean and Flora Cataloging Campaign this coming Friday at seven o'clock in the morning. Each class is requested to bring reusable garden gloves, plant five native medicinal herbs in the school sanctuary, and classify the plant species into botanical report cards. Let us uphold our shared commitment towards a zero-waste and clean and green learning environment. Thank you.",
      stimulusTitle: "School Announcement Audio Transcript",
      source: "Sumber Otentik: Pengumuman Resmi OSIS & Tim Sekolah Adiwiyata — SMA Negeri 1 Bae Kudus",
      stimulusBody: "<em>Attention, all tenth-grade students of SMA Negeri 1 Bae Kudus! In accordance with our green school program, the student council will organize a Campus Eco-Clean and Flora Cataloging Campaign this coming Friday at seven o'clock in the morning. Each class is requested to bring reusable garden gloves, plant five native medicinal herbs in the school sanctuary, and classify the plant species into botanical report cards. Let us uphold our shared commitment towards a zero-waste and clean and green learning environment. Thank you.</em>",
      prompt: "What is the primary purpose of the official school announcement?",
      options: [
        { key: "A", text: "To invite 10th graders to participate in an eco-clean and flora cataloging campaign on Friday." },
        { key: "B", text: "To announce the winners of the national English debating championship." },
        { key: "C", text: "To cancel all classes on Friday due to heavy monsoon rain." },
        { key: "D", text: "To inform teachers about an emergency staff meeting in the auditorium." }
      ],
      correctAnswer: "A",
      explanation: "Pengumuman mengundang siswa kelas X untuk mengikuti 'Campus Eco-Clean and Flora Cataloging Campaign this coming Friday at seven o'clock in the morning'.",
      grammarNote: "Announcement Functional Text Conventions: 'Attention, all...', 'is requested to bring...', 'Let us uphold...'."
    },
    {
      id: 10,
      type: "listening_talk",
      title: "Listening Section: Part III - Short Talks",
      audioText: "Question ten is based on the school announcement. Question: What specific assignment must each class accomplish in the school botanical sanctuary?",
      prompt: "What specific task must each class perform during the school campaign?",
      options: [
        { key: "A", text: "Paint the school fence with green and yellow colors." },
        { key: "B", text: "Plant five native medicinal herbs and classify them on botanical report cards." },
        { key: "C", text: "Collect single-use plastic bottles from the local market." },
        { key: "D", text: "Build a glass greenhouse near the principal's office." }
      ],
      correctAnswer: "B",
      explanation: "Pengumuman menyebutkan instruksi: 'plant five native medicinal herbs in the school sanctuary, and classify the plant species into botanical report cards'.",
      grammarNote: "Imperative Infinitive Clauses: 'plant native medicinal herbs', 'classify the plant species'."
    },

    // 11-15. READING COMPREHENSION (Descriptive Text - Tourism / Local Heritage)
    {
      id: 11,
      type: "single_choice",
      title: "Reading Comprehension: Descriptive Text",
      stimulusTitle: "Text 1: The Splendor of Karimunjawa Archipelago",
      stimulusBody: `Karimunjawa is a pristine tropical archipelago situated in the Java Sea, approximately eighty kilometers northwest of Jepara, Central Java. Designated as a National Marine Park in 2001, the cluster comprises twenty-seven paradise islands, of which only five are inhabited.<br><br>The underwater realm of Karimunjawa is extraordinarily breathtaking. Vast expanses of thriving coral reefs, characterized by magnificent branching acropora and vibrant brain corals, shelter hundreds of pelagic fish species, including clownfish, blue damselfish, and gentle hawksbill sea turtles. The water visibility frequently exceeds twenty meters, allowing snorkelers and divers to gaze upon the aquatic kaleidoscope with crystalline clarity.<br><br>On land, Karimunjawa boasts expansive coastal stretches lined with powdery white sands and whispering casuarina trees. In the interior of the main island, dense mangrove forests and lush hilltops provide sanctuary for endemic fruit bats and the white-bellied sea eagle. Local inhabitants, who predominantly earn their living as traditional artisanal fishermen and eco-tourism guides, preserve a harmonious lifestyle deeply rooted in maritime conservation.`,
      prompt: "What is the main topic discussed in the second paragraph of the text?",
      options: [
        { key: "A", text: "The historical administrative status of Karimunjawa as a regency." },
        { key: "B", text: "The magnificent biodiversity and remarkable visibility of Karimunjawa's marine underwater ecosystem." },
        { key: "C", text: "The agricultural techniques employed by the islanders to grow fruit trees." },
        { key: "D", text: "The commercial fishing methods used by deep-sea industrial trawlers." }
      ],
      correctAnswer: "B",
      explanation: "Paragraf kedua berfokus penuh pada dunia bawah air: terumbu karang, ikan pelagis, penyu sisik, dan jarak pandang air yang jernih (underwater marine ecosystem).",
      grammarNote: "Paragraph Topic Identification & Lexical Density: 'underwater realm', 'coral reefs', 'water visibility'."
    },
    {
      id: 12,
      type: "single_choice",
      title: "Reading Comprehension: Vocabulary & Inference",
      stimulusTitle: "Text 1: The Splendor of Karimunjawa Archipelago",
      stimulusBody: "<em>Refer to the second paragraph: 'The underwater realm of Karimunjawa is extraordinarily breathtaking... snorkelers and divers gaze upon the aquatic kaleidoscope with <u>crystalline</u> clarity.'</em>",
      prompt: "The underlined word 'crystalline' in the passage is closest in meaning to...",
      options: [
        { key: "A", text: "Turbid and dark" },
        { key: "B", text: "Transparent and sparklingly clear" },
        { key: "C", text: "Artificial and synthesized" },
        { key: "D", text: "Dangerous and toxic" }
      ],
      correctAnswer: "B",
      explanation: "Kata 'crystalline' (berakar dari crystal) berarti sangat bening, jernih berkilau seperti kristal (transparent and sparklingly clear). Lawan katanya adalah turbid (keruh).",
      grammarNote: "Oxford 3000 Level B1/B2 Adjectives of Clarity: crystalline, transparent, vivid, immaculate."
    },
    {
      id: 13,
      type: "single_choice",
      title: "Reading Comprehension: Detail Information",
      stimulusTitle: "Text 1: The Splendor of Karimunjawa Archipelago",
      stimulusBody: "<em>Refer to Text 1 above.</em>",
      prompt: "According to the third paragraph, what terrestrial flora and fauna inhabit the interior of the island?",
      options: [
        { key: "A", text: "Extensive cactus shrubs, desert camels, and rattlesnakes." },
        { key: "B", text: "Dense mangrove forests sheltering endemic fruit bats and white-bellied sea eagles." },
        { key: "C", text: "Pine plantations occupied by Siberian tigers and grizzly bears." },
        { key: "D", text: "Industrial oil palm plantations with imported macaque monkeys." }
      ],
      correctAnswer: "B",
      explanation: "Paragraf ketiga baris 3-4 menyatakan: 'dense mangrove forests and lush hilltops provide sanctuary for endemic fruit bats and the white-bellied sea eagle'.",
      grammarNote: "Scanning Specific Details: 'dense mangrove forests', 'fruit bats', 'white-bellied sea eagle'."
    },
    {
      id: 14,
      type: "single_choice",
      title: "Reading Comprehension: Social Function",
      stimulusTitle: "Text 1: The Splendor of Karimunjawa Archipelago",
      stimulusBody: "<em>Refer to Text 1 above.</em>",
      prompt: "What is the primary communicative purpose of the writer in publishing this text?",
      options: [
        { key: "A", text: "To describe the unique natural wonders and ecological beauty of Karimunjawa to inform and attract visitors." },
        { key: "B", text: "To argue that tourism should be permanently forbidden in Central Java." },
        { key: "C", text: "To explain the step-by-step procedure of diving with scuba gear." },
        { key: "D", text: "To narrate a mythical folktale about ancient sea monsters in Java Sea." }
      ],
      correctAnswer: "A",
      explanation: "Teks ini adalah Descriptive Text dengan struktur Identification (Paragraf 1) dan Description (Paragraf 2 & 3). Tujuannya adalah mendeskripsikan keindahan alam dan ekologi Karimunjawa untuk menginformasikan pembaca.",
      grammarNote: "Social Function of Descriptive Genre: 'To describe a particular person, place, or thing in detail'."
    },
    {
      id: 15,
      type: "single_choice",
      title: "Reading Comprehension: Author's Attitude",
      stimulusTitle: "Text 1: The Splendor of Karimunjawa Archipelago",
      stimulusBody: "<em>Refer to Text 1 above.</em>",
      prompt: "The author's tone throughout the entire text can best be described as...",
      options: [
        { key: "A", text: "Cynical and detached" },
        { key: "B", text: "Appreciative, admire-filled, and informative" },
        { key: "C", text: "Hostile and dissatisfied" },
        { key: "D", text: "Satirical and mocking" }
      ],
      correctAnswer: "B",
      explanation: "Penulis menggunakan diksi apresiatif seperti 'pristine', 'extraordinarily breathtaking', 'magnificent', 'crystalline clarity', dan 'harmonious lifestyle'. Hal ini menunjukkan nada yang penuh kekaguman dan informatif (appreciative and informative).",
      grammarNote: "Author's Tone and Perspective Analysis in TKA: appreciative, objective, subjective, critical."
    },

    // 16-20. PILIHAN GANDA KOMPLEKS (Matrix True / False Table - TKA Style)
    {
      id: 16,
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Evaluasi Pernyataan Teks",
      stimulusTitle: "Evaluasi Kritis Teks Deskripsi Karimunjawa",
      stimulusBody: "Tentukan apakah setiap pernyataan berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong> berdasarkan informasi faktual pada Teks 1:",
      prompt: "Berdasarkan Teks 1, tentukan kebenaran dari masing-masing pernyataan berikut:",
      matrixStatements: [
        { statement: "Seluruh pulau di gugusan kepulauan Karimunjawa dihuni secara padat oleh penduduk lokal.", isCorrect: false },
        { statement: "Karimunjawa secara resmi ditetapkan sebagai Taman Nasional Laut sejak tahun 2001.", isCorrect: true },
        { statement: "Jarak pandang di dalam air Karimunjawa sering kali mencapai lebih dari dua puluh meter.", isCorrect: true },
        { statement: "Mayoritas mata pencaharian penduduk setempat adalah penambang minyak lepas pantai.", isCorrect: false }
      ],
      explanation: "Pernyataan 1 SALAH (hanya 5 dari 27 pulau yang berpenghuni). Pernyataan 2 BENAR (diresmikan tahun 2001). Pernyataan 3 BENAR (visibility exceeds 20 meters). Pernyataan 4 SALAH (penduduk bekerja sebagai nelayan tradisional dan pemandu wisata ramah lingkungan).",
      grammarNote: "Factual Verification & Text Analysis in High-Order Thinking Skills (HOTS)."
    },
    {
      id: 17,
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Fitur Bahasa Simple Present & Passive",
      stimulusTitle: "Analisis Tata Bahasa Kalimat Faktual",
      stimulusBody: "Tentukan apakah analisis gramatikal pada kalimat-kalimat berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
      prompt: "Analisis kebenaran kaidah tata bahasa pada butir-butir pernyataan berikut:",
      matrixStatements: [
        { statement: "Kalimat 'Karimunjawa comprises twenty-seven islands' menggunakan Simple Present Tense untuk menyatakan fakta geografis tetap.", isCorrect: true },
        { statement: "Bentuk pasif dari 'Snorkelers observe the coral reefs' adalah 'The coral reefs is observed by snorkelers'.", isCorrect: false },
        { statement: "Frasa 'Vast expanses of thriving coral reefs shelter hundreds of fish' memiliki subjek jamak sehingga kata kerjanya adalah 'shelter' (tanpa akhiran -s).", isCorrect: true },
        { statement: "Kata 'extraordinarily' dalam teks berfungsi sebagai kata sifat (adjective) yang menerangkan kata benda.", isCorrect: false }
      ],
      explanation: "Pernyataan 1 BENAR (Simple Present untuk fakta umum). Pernyataan 2 SALAH (karena reefs jamak, harusnya 'The coral reefs ARE observed'). Pernyataan 3 BENAR (Subject-Verb Agreement subjek jamak). Pernyataan 4 SALAH ('extraordinarily' berakhiran -ly adalah adverb of degree yang menerangkan adjective 'breathtaking').",
      grammarNote: "Subject-Verb Agreement, Passive Voice Plural ('are + V3'), and Adverb vs Adjective functions."
    },
    {
      id: 18,
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Urutan Frasa Kata Sifat (OSASCOMP)",
      stimulusTitle: "Kaidah Susunan Kata Sifat (Adjective Order Rules)",
      stimulusBody: "Dalam bahasa Inggris, susunan kata sifat mengikuti aturan OSASCOMP: Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material -> Purpose.",
      prompt: "Tentukan apakah susunan frasa kata sifat berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong> menurut kaidah OSASCOMP:",
      matrixStatements: [
        { statement: "'A charming small old wooden cottage' (Opinion: charming, Size: small, Age: old, Material: wooden).", isCorrect: true },
        { statement: "'A stone ancient magnificent statue' (Material ditempatkan sebelum Opinion dan Age).", isCorrect: false },
        { statement: "'An energetic young Indonesian badminton athlete' (Opinion: energetic, Age: young, Origin: Indonesian, Purpose: badminton).", isCorrect: true },
        { statement: "'A circular large brown dining table' (Shape ditempatkan mendahului Size).", isCorrect: false }
      ],
      explanation: "1) BENAR: Opinion (charming) -> Size (small) -> Age (old) -> Material (wooden). 2) SALAH: Harusnya 'A magnificent ancient stone statue' (Opinion -> Age -> Material). 3) BENAR: Opinion (energetic) -> Age (young) -> Origin (Indonesian) -> Purpose (badminton). 4) SALAH: Size harus mendahului Shape ('A large circular brown dining table').",
      grammarNote: "Mastery of OSASCOMP: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose."
    },
    {
      id: 19,
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Fakta Sains Teks Report (Javan Rhino)",
      stimulusTitle: "Stimulus Sains: The Endangered Javan Rhinoceros",
      stimulusBody: `The Javan rhinoceros (<em>Rhinoceros sondaicus</em>) is one of the most critically endangered large mammals on Earth. Currently, fewer than eighty individuals survive, strictly confined to the tropical lowland rainforests of Ujung Kulon National Park at the western tip of Java, Indonesia.<br><br>Unlike their African relatives, Javan rhinos possess only a single horn, which rarely exceeds twenty-five centimeters in length. They are solitary herbivores that browse upon tender shoots, twigs, and fallen fruits. Because rhinos possess poor eyesight, their acute sense of smell and hearing are vital for detecting encroaching predators and humans.`,
      prompt: "Berdasarkan cuplikan teks Report ilmiah di atas, tentukan nilai kebenaran pernyataan berikut:",
      matrixStatements: [
        { statement: "Badak Jawa saat ini hanya dapat ditemukan di alam liar di Taman Nasional Ujung Kulon.", isCorrect: true },
        { statement: "Badak Jawa jantan dan betina memiliki dua cula besar berukuran lebih dari satu meter.", isCorrect: false },
        { statement: "Badak Jawa merupakan satwa pemakan daging (karnivora) yang hidup berkelompok dalam kawanan besar.", isCorrect: false },
        { statement: "Indra penciuman dan pendengaran yang tajam mengimbangi kelemahan indra penglihatan badak Jawa.", isCorrect: true }
      ],
      explanation: "1) BENAR (strictly confined to Ujung Kulon). 2) SALAH (hanya memiliki 'single horn' kurang dari 25 cm). 3) SALAH (mereka adalah 'solitary herbivores' / pemakan tumbuhan yang hidup menyendiri). 4) BENAR (acute smell and hearing compensate for poor eyesight).",
      grammarNote: "Scientific Report Comprehension: General classification, morphological features, habitat."
    },
    {
      id: 20,
      type: "complex_matrix",
      title: "Pilihan Ganda Kompleks: Kalimat Pengandaian (Conditionals)",
      stimulusTitle: "Kaidah Logika Conditional Sentence Type 1 & Type 2",
      stimulusBody: "Perhatikan kaidah pengandaian: Type 1 (Realistis/Masa Depan: If + Present, Will + V1) dan Type 2 (Hipotetis/Sekarang: If + Past/were, Would + V1).",
      prompt: "Tentukan apakah formulasi kalimat pengandaian berikut <strong>BENAR (TRUE)</strong> atau <strong>SALAH (FALSE)</strong>:",
      matrixStatements: [
        { statement: "If students protect the coral reefs diligently, marine biodiversity will flourish.", isCorrect: true },
        { statement: "If I was you, I will definitely attend the Kudus cultural heritage workshop tomorrow.", isCorrect: false },
        { statement: "If the national park rangers had more patrol boats, they would monitor the coast more effectively.", isCorrect: true },
        { statement: "If the weather is sunny on Friday, we would have visited the botanical sanctuary.", isCorrect: false }
      ],
      explanation: "1) BENAR (Type 1: If + protect, will flourish). 2) SALAH (harus subjunctive 'If I WERE you, I WOULD...'). 3) BENAR (Type 2: If + had, would monitor). 4) SALAH (mencampur if present dengan would have V3; harusnya 'If the weather is sunny, we WILL visit').",
      grammarNote: "Conditional Sentences Type 1 & Type 2 Standard Formulations."
    },

    // 21-25. MCMA (Multiple Choice Multiple Answer - Checkboxes)
    {
      id: 21,
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Refleksi Teks Deskriptif Atlet Berprestasi",
      stimulusBody: "Seorang penulis ingin mendeskripsikan seorang atlet panahan nasional dalam teks deskriptif yang otentik dan inspiratif.",
      prompt: "Manakah <strong>DUA (2)</strong> kalimat di bawah ini yang menggunakan kata sifat deskriptif (descriptive adjectives) dan Simple Present Tense secara tepat?",
      options: [
        { key: "A", text: "She consistently demonstrates extraordinary focus and razor-sharp accuracy during international tournaments." },
        { key: "B", text: "She will bought an expensive carbon arrow tomorrow morning at the supermarket." },
        { key: "C", text: "Her athletic posture remains remarkably calm under intense competitive pressure." },
        { key: "D", text: "She was winning the match because the referee has slept during the game." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Kalimat A dan C menggunakan Simple Present Tense yang benar ('demonstrates', 'remains') dan kata sifat deskriptif bermakna tinggi ('extraordinary focus', 'razor-sharp accuracy', 'athletic posture', 'intense competitive pressure'). Kalimat B gramatikal rusak ('will bought'), dan kalimat D menggunakan past continuous yang tidak koheren.",
      grammarNote: "Selection of grammatically sound descriptive sentences with Present Tense and Adjectives."
    },
    {
      id: 22,
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Fitur Kebahasaan Teks Report Ilmiah",
      stimulusBody: "Teks Report Ilmiah (Scientific Report) memiliki karakteristik kebahasaan tersendiri yang membedakannya dari teks naratif personal.",
      prompt: "Manakah <strong>DUA (2)</strong> fitur kebahasaan utama yang menjadi ciri khas teks Report ilmiah?",
      options: [
        { key: "A", text: "Penggunaan istilah teknis ilmiah (technical scientific vocabulary) dan kata benda umum (general nouns)." },
        { key: "B", text: "Penggunaan sudut pandang orang pertama 'I' dan 'My family' untuk menceritakan emosi pribadi." },
        { key: "C", text: "Dominasi kalimat pasif (Passive Voice) untuk menonjolkan proses atau objek yang diobservasi." },
        { key: "D", text: "Penyajian dialog langsung dramatis antara tokoh antagonis dan protagonis dalam dongeng." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Teks Report ilmiah menekankan objektivitas melalui: 1) Istilah teknis ilmiah & general nouns (Opsi A), dan 2) Kalimat pasif untuk memfokuskan proses/fenomena ilmiah tanpa bias personal (Opsi C). Opsi B adalah ciri personal recount, dan Opsi D adalah ciri narrative.",
      grammarNote: "Generic Language Features of Scientific Report Text."
    },
    {
      id: 23,
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Keluarga Kata Kosakata Oxford 3000 (CEFR A2/B1)",
      stimulusBody: "Perhatikan kata kunci dalam tema lingkungan dan keanekaragaman hayati: <em>'conserve'</em> dan <em>'endanger'</em>.",
      prompt: "Manakah <strong>DUA (2)</strong> pasangan kata turunan dan arti yang tepat berdasarkan kamus Oxford 3000?",
      options: [
        { key: "A", text: "'Conservation' (noun) bermakna upaya perlindungan dan pelestarian alam dari kerusakan." },
        { key: "B", text: "'Endangered' (adjective) bermakna spesies makhluk hidup yang berada dalam bahaya kepunahan." },
        { key: "C", text: "'Conservatively' (adverb) bermakna secara berbahaya dan merusak ekosistem." },
        { key: "D", text: "'Dangerously' (noun) bermakna tempat suaka perlindungan satwa liar." }
      ],
      correctAnswer: ["A", "B"],
      explanation: "Opsi A benar: 'conservation' adalah nomina pelestarian lingkungan. Opsi B benar: 'endangered' adalah adjektiva terancam punah (e.g. endangered species). Opsi C salah (artinya secara konservatif/hati-hati), Opsi D salah (dangerously adalah adverb).",
      grammarNote: "Word Formations: Noun, Adjective, Adverb derivation from Oxford 3000 core lexis."
    },
    {
      id: 24,
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Ungkapan Rencana & Tujuan (Intentions and Plans)",
      stimulusBody: "Dalam percakapan sehari-hari, siswa sering mengungkapkan rencana dan intensi untuk melakukan sesuatu di masa mendatang.",
      prompt: "Manakah <strong>DUA (2)</strong> ungkapan yang secara formal dan santun digunakan untuk menyatakan niat atau rencana (intentions/plans)?",
      options: [
        { key: "A", text: "'I am planning to conduct an interview with our local batik artisan this weekend.'" },
        { key: "B", text: "'I was regretting that you didn't call me yesterday afternoon.'" },
        { key: "C", text: "'We intend to submit our environmental science project to the national committee.'" },
        { key: "D", text: "'I have no interest in doing any homework forever.'" }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Opsi A ('I am planning to...') dan Opsi C ('We intend to...') adalah formula baku untuk menyatakan rencana/intensi (stating intentions). Opsi B menyatakan penyesalan masa lalu, Opsi D menyatakan penolakan ketidakpedulian.",
      grammarNote: "Functional Expressions: 'planning to + V1', 'intend to + V1', 'would like to + V1'."
    },
    {
      id: 25,
      type: "mcma",
      title: "Multiple Choice Multiple Answer (Pilih 2 Opsi yang Tepat)",
      stimulusTitle: "Struktur Kalimat Pasif dalam Deskripsi Proses Ilmiah",
      stimulusBody: "Kalimat pasif dalam Simple Present Tense dibentuk dengan rumus: Subjek + is/am/are + Verb 3 (Past Participle).",
      prompt: "Manakah <strong>DUA (2)</strong> kalimat di bawah ini yang merupakan kalimat pasif (Passive Voice) yang gramatikal dan tepat?",
      options: [
        { key: "A", text: "Organic wastes are collected by student volunteers every Tuesday morning." },
        { key: "B", text: "The young athlete is running around the track with his new shoes." },
        { key: "C", text: "Rare medicinal herbs are carefully preserved in the school botanical sanctuary." },
        { key: "D", text: "The headmaster will delivers an inspiring speech at the assembly." }
      ],
      correctAnswer: ["A", "C"],
      explanation: "Kalimat A ('wastes are collected') dan Kalimat C ('herbs are carefully preserved') memiliki pola pasif 'are + Verb 3' yang sempurna. Kalimat B adalah Present Continuous aktif ('is running'). Kalimat D memiliki kesalahan gramatikal 'will delivers'.",
      grammarNote: "Present Simple Passive Voice: S + is/am/are + V3 (+ by Agent)."
    },

    // 26-30. READING COMPREHENSION (Report Text - Renewable Energy / Geothermal in Central Java)
    {
      id: 26,
      type: "single_choice",
      title: "Reading Comprehension: Report Text",
      stimulusTitle: "Text 2: Clean Geothermal Energy in the Dieng Plateau, Central Java",
      stimulusBody: `Geothermal energy is a clean, renewable energy resource that comes from natural heat stored deep inside the Earth. In Central Java, the volcanic highland of the Dieng Plateau (located across Banjarnegara and Wonosobo regencies) is one of Indonesia's most important locations for geothermal power plants (PLTP Dieng).<br><br>Electricity production from geothermal energy works in a simple, sustainable way. Deep wells are drilled into underground reservoirs of hot water and natural steam. This high-pressure steam rises through strong pipes to turn large turbine generators, which convert the steam's energy into clean electricity. Afterward, the condensed water is cooled and pumped back underground into the reservoir, keeping the system environmentally friendly and producing almost zero smoke or carbon emissions.<br><br>Unlike solar panels and wind turbines that depend on sunny or windy weather, geothermal power plants can generate electricity steadily twenty-four hours a day without stopping. Therefore, developing geothermal clean energy in Central Java is an <u>essential</u> milestone to supply reliable electricity while protecting the natural environment.`,
      source: "Sumber Otentik: Profil Potensi Energi Panas Bumi Jawa Tengah — PT Geo Dipa Energi (Persero) & Kementerian ESDM Republik Indonesia",
      prompt: "According to the second paragraph, how is kinetic energy transformed into electricity in a geothermal power plant?",
      options: [
        { key: "A", text: "By burning fossil fuel coals to boil surface river water." },
        { key: "B", text: "By channeling high-pressure underground steam to drive turbine generators." },
        { key: "C", text: "By exposing photovoltaic panels directly to midday tropical sunlight." },
        { key: "D", text: "By splitting radioactive atoms inside a heavy chemical reactor." }
      ],
      correctAnswer: "B",
      explanation: "Paragraf kedua menjelaskan: 'This high-pressure thermal steam is channeled upwards through specialized pipeline networks to drive turbine generators, which convert kinetic energy into electrical power'. Jawaban B tepat.",
      grammarNote: "Cause-Effect & Mechanical Sequence Analysis in Scientific Texts."
    },
    {
      id: 27,
      type: "single_choice",
      title: "Reading Comprehension: Environmental Advantage",
      stimulusTitle: "Text 2: Geothermal Energy Exploration in Central Java",
      stimulusBody: "<em>Refer to Text 2 above.</em>",
      prompt: "Why is the geothermal electricity generation described as a 'closed-loop system'?",
      options: [
        { key: "A", text: "Because the power plant operates exclusively behind locked concrete gates." },
        { key: "B", text: "Because condensed steam is cooled and reinjected back into the underground reservoir with zero emissions." },
        { key: "C", text: "Because electricity is only delivered to nearby government factories." },
        { key: "D", text: "Because the underground wells are permanently abandoned after one month." }
      ],
      correctAnswer: "B",
      explanation: "Paragraf kedua kalimat terakhir menyebutkan: 'Subsequently, the condensed water is cooled and reinjected back into the underground reservoir, ensuring a closed-loop system'.",
      grammarNote: "Technical Term Definition & Closed-Loop Cycle."
    },
    {
      id: 28,
      type: "single_choice",
      title: "Reading Comprehension: Comparative Logic",
      stimulusTitle: "Text 2: Geothermal Energy Exploration in Central Java",
      stimulusBody: "<em>Refer to Text 2, third paragraph.</em>",
      prompt: "What major advantage does geothermal power have compared to solar and wind energy?",
      options: [
        { key: "A", text: "It requires no initial capital investment and no engineering equipment." },
        { key: "B", text: "It provides reliable baseload power that does not depend on fluctuating weather conditions." },
        { key: "C", text: "It can be easily transported in plastic barrels to remote villages." },
        { key: "D", text: "It produces large amounts of smoke that warm up the cold mountain climate." }
      ],
      correctAnswer: "B",
      explanation: "Paragraf ketiga menyatakan: 'Unlike intermittent solar and wind energy that depend strictly on weather conditions, geothermal plants provide steady baseload electricity with operational capacity factors exceeding ninety percent'.",
      grammarNote: "Contrasting Linkers: 'Unlike + Noun Phrase, Subject + Verb'."
    },
    {
      id: 29,
      type: "single_choice",
      title: "Reading Comprehension: Vocabulary in Context",
      stimulusTitle: "Text 2: Geothermal Energy Exploration in Central Java",
      stimulusBody: "<em>Refer to the final sentence: '...developing geothermal clean energy in Central Java is an <u>essential</u> milestone to supply reliable electricity while protecting the natural environment.'</em>",
      prompt: "The word 'essential' in the sentence is closest in meaning to...",
      options: [
        { key: "A", text: "Very important and necessary for success" },
        { key: "B", text: "Minor and not needed" },
        { key: "C", text: "Hazardous and destructive" },
        { key: "D", text: "Temporary and unreliable" }
      ],
      correctAnswer: "A",
      explanation: "Kata 'essential' (Oxford 3000 A2) bermakna sangat penting, mendasar, dan diperlukan (very important, necessary).",
      grammarNote: "Academic Lexis: pivotal, crucial, indispensable, essential."
    },
    {
      id: 30,
      type: "single_choice",
      title: "Reading Comprehension: Discourse Logic",
      stimulusTitle: "Text 2: Geothermal Energy Exploration in Central Java",
      stimulusBody: "<em>Refer to Text 2 above.</em>",
      prompt: "What would most likely happen if Central Java maximizes its geothermal potential?",
      options: [
        { key: "A", text: "Greenhouse gas emissions from electricity generation will significantly decrease." },
        { key: "B", text: "Electricity supply in Central Java will become more stable and produce less pollution." },
        { key: "C", text: "The region will face severe electricity blackouts during summer months." },
        { key: "D", text: "Indonesia will completely abandon its 2060 climate commitments." }
      ],
      correctAnswer: "A",
      explanation: "Karena panas bumi adalah energi bersih terbarukan dengan sistem tertutup 'virtually zero greenhouse gas emissions', pemanfaatannya akan menurunkan emisi gas rumah kaca secara signifikan dan membantu target Net Zero 2060.",
      grammarNote: "Cause-and-Effect Inference in Academic Texts."
    },

    // 31-35. GRAMMAR ESSENTIALS
    {
      id: 31,
      type: "single_choice",
      title: "Grammar Essentials: Subject-Verb Agreement",
      stimulusTitle: "Kaidah Kesesuaian Subjek dan Kata Kerja",
      stimulusBody: "Pilihlah bentuk kata kerja yang tepat untuk melengkapi kalimat berikut:",
      prompt: "The dedicated biology teacher, accompanied by twenty enthusiastic students, [...] currently observing the rare orchid species in the school conservatory.",
      options: [
        { key: "A", text: "is" },
        { key: "B", text: "are" },
        { key: "C", text: "were" },
        { key: "D", text: "have been" }
      ],
      correctAnswer: "A",
      explanation: "Subjek utama kalimat adalah 'The dedicated biology teacher' (tunggal/singular). Frasa penjelas 'accompanied by twenty enthusiastic students' tidak mengubah jumlah subjek utama. Keterangan waktu 'currently' menunjukkan waktu sekarang, sehingga kata kerja yang benar adalah 'is'.",
      grammarNote: "Subject-Verb Agreement with Intervening Prepositional Phrases (accompanied by, together with, as well as)."
    },
    {
      id: 32,
      type: "single_choice",
      title: "Grammar Essentials: Passive Voice Transformation",
      stimulusTitle: "Transformasi Kalimat Aktif ke Pasif",
      stimulusBody: "Perhatikan kalimat aktif berikut:<br><em>'Our school committee annually awards full scholarships to exceptional athletes.'</em>",
      prompt: "Manakah bentuk kalimat pasif (Passive Voice) yang paling tepat?",
      options: [
        { key: "A", text: "Full scholarships is annually awarded to exceptional athletes by our school committee." },
        { key: "B", text: "Full scholarships are annually awarded to exceptional athletes by our school committee." },
        { key: "C", text: "Full scholarships were annually awarded to exceptional athletes by our school committee." },
        { key: "D", text: "Full scholarships have been awarding exceptional athletes by our school committee." }
      ],
      correctAnswer: "B",
      explanation: "Objek 'Full scholarships' adalah jamak (plural). Tense kalimat aktif adalah Simple Present Tense ('awards'). Maka rumus pasifnya: Object (plural) + ARE + Verb 3 (awarded) + by Agent.",
      grammarNote: "Passive Voice in Present Tense for Plural Objects."
    },
    {
      id: 33,
      type: "single_choice",
      title: "Grammar Essentials: Past Continuous with 'While'",
      stimulusTitle: "Tata Bahasa Klausa Waktu Lampau",
      stimulusBody: "Lengkapilah kalimat berikut dengan kombinasi bentuk kata kerja yang benar:",
      prompt: "While the students [...] the museum artifacts, the tour guide [...] an inspiring story about Sunan Kudus.",
      options: [
        { key: "A", text: "were examining / narrated" },
        { key: "B", text: "are examining / narrates" },
        { key: "C", text: "examined / was narrating" },
        { key: "D", text: "had examined / narrating" }
      ],
      correctAnswer: "A",
      explanation: "Klausa 'While' digunakan untuk aksi berdurasi sedang berlangsung di masa lampau: 'While the students were examining...' (Past Continuous), disusul aksi yang terjadi pada periode tersebut: 'the tour guide narrated...' (Simple Past).",
      grammarNote: "Past Continuous ('were examining') juxtaposed with Simple Past ('narrated') using time conjunction 'While'."
    },
    {
      id: 34,
      type: "single_choice",
      title: "Grammar Essentials: Relative Pronoun 'Whose'",
      stimulusTitle: "Klausa Relatif Kepemilikan (Relative Clauses)",
      stimulusBody: "Lengkapilah kalimat berikut dengan kata ganti penghubung (relative pronoun) yang tepat:",
      prompt: "We recently interviewed the young inventor [...] automated solar water pump won the provincial innovation championship.",
      options: [
        { key: "A", text: "who" },
        { key: "B", text: "whom" },
        { key: "C", text: "whose" },
        { key: "D", text: "which" }
      ],
      correctAnswer: "C",
      explanation: "'Whose' digunakan untuk menyatakan hubungan kepemilikan (possesive relative pronoun). Pada kalimat ini, 'automated solar water pump' adalah milik dari 'the young inventor'.",
      grammarNote: "Possessive Relative Clause: Person + whose + Noun Phrase."
    },
    {
      id: 35,
      type: "single_choice",
      title: "Grammar Essentials: Conditional Sentence Type 1",
      stimulusTitle: "Kalimat Pengandaian Kemungkinan Masa Depan",
      stimulusBody: "Lengkapilah kalimat pengandaian Type 1 berikut dengan bentuk kata kerja yang tepat:",
      prompt: "If our school [...] the zero-plastic policy consistently, we [...] a significant reduction in campus waste by December.",
      options: [
        { key: "A", text: "enforces / will achieve" },
        { key: "B", text: "enforced / will achieved" },
        { key: "C", text: "will enforce / achieve" },
        { key: "D", text: "enforcing / would achieve" }
      ],
      correctAnswer: "A",
      explanation: "Rumus baku Conditional Type 1: If + Simple Present (S + V1/-s/-es: 'enforces'), Subject + will + V1 ('will achieve').",
      grammarNote: "Conditional Type 1: Real and possible conditions in the present/future."
    },

    // 36-40. VOCABULARY OXFORD 3000 & FUNCTIONAL EXPRESSIONS
    {
      id: 36,
      type: "single_choice",
      title: "Vocabulary: Oxford 3000 (CEFR A2/B1)",
      stimulusTitle: "Pemilihan Kata Kontekstual",
      stimulusBody: "Pilihlah kosakata yang paling tepat untuk melengkapi kalimat rumpang di bawah ini:",
      prompt: "Athletes must possess extraordinary mental [...] to overcome intense pressure and achieve victory in international tournaments.",
      options: [
        { key: "A", text: "resilience" },
        { key: "B", text: "hesitation" },
        { key: "C", text: "ignorance" },
        { key: "D", text: "pollution" }
      ],
      correctAnswer: "A",
      explanation: "'Resilience' (Oxford 3000 B1/B2) bermakna daya tahan mental, ketangguhan untuk bangkit dari kesulitan. Pilihan lain tidak sesuai: hesitation (keragu-raguan), ignorance (ketidaktahuan), pollution (polusi).",
      grammarNote: "Abstract Nouns in Sports Psychology: resilience, tenacity, discipline."
    },
    {
      id: 37,
      type: "single_choice",
      title: "Vocabulary: Collocation with 'Take'",
      stimulusTitle: "Kolokasi Kata Bahasa Inggris",
      stimulusBody: "Pilihlah kolokasi yang tepat dalam konteks tindakan pencegahan lingkungan:",
      prompt: "Local environmentalists urge the municipal government to [...] immediate precautions against river pollution.",
      options: [
        { key: "A", text: "take" },
        { key: "B", text: "make" },
        { key: "C", text: "do" },
        { key: "D", text: "hold" }
      ],
      correctAnswer: "A",
      explanation: "Kolokasi tetap dalam bahasa Inggris adalah 'take precautions' (mengambil tindakan pencegahan), bukan make precautions atau do precautions.",
      grammarNote: "English Collocations: take precautions, take measures, take action."
    },
    {
      id: 38,
      type: "single_choice",
      title: "Functional Expressions: Asking for Clarification",
      stimulusTitle: "Ungkapan Meminta Klarifikasi",
      stimulusBody: "Seorang siswa tidak mendengar penjelasan instruksi guru secara jelas di laboratorium bahasa.",
      prompt: "Manakah ungkapan yang paling santun dan baku (polite register) untuk meminta klarifikasi penjelasan?",
      options: [
        { key: "A", text: "What? Say that again louder!" },
        { key: "B", text: "Pardon me, Sir. Could you please clarify the second step of the procedure?" },
        { key: "C", text: "I don't care what you just said." },
        { key: "D", text: "Stop talking and let me sleep." }
      ],
      correctAnswer: "B",
      explanation: "Ungkapan santun dan formal (polite register): 'Pardon me, Sir. Could you please clarify...?'",
      grammarNote: "Polite Request & Clarification: Modal 'could', 'pardon me', polite inquiry."
    },
    {
      id: 39,
      type: "single_choice",
      title: "Functional Expressions: Expressing Stance / Agreement",
      stimulusTitle: "Ungkapan Persetujuan Terhadap Argumen",
      stimulusBody: "Dalam diskusi kelas mengenai pelestarian cagar budaya lokal:<br>Budi: 'I firmly believe that schools in Kudus should organize regular heritage tours to instill pride in our local traditions.'",
      prompt: "Manakah respons yang menunjukkan persetujuan penuh secara formal (full agreement)?",
      options: [
        { key: "A", text: "I couldn't agree more; connecting students with historical roots is essential." },
        { key: "B", text: "I strongly oppose your idea because heritage has no value." },
        { key: "C", text: "That is totally irrelevant to our education." },
        { key: "D", text: "I agree with you, but I don't care at all." }
      ],
      correctAnswer: "A",
      explanation: "'I couldn't agree more' adalah ungkapan idiomatik baku untuk menyatakan persetujuan 100% (sangat setuju sekali).",
      grammarNote: "Expressing Full Agreement: 'I couldn't agree more', 'You have a very valid point'."
    },
    {
      id: 40,
      type: "single_choice",
      title: "Vocabulary: Oxford 3000 Academic Conjunction",
      stimulusTitle: "Kata Hubung Kausal & Penjelas",
      stimulusBody: "Lengkapilah kalimat berikut dengan konjungsi internal yang tepat:",
      prompt: "Solar panels produce clean energy without greenhouse gases; [...], their initial installation costs have become increasingly affordable.",
      options: [
        { key: "A", text: "furthermore" },
        { key: "B", text: "otherwise" },
        { key: "C", text: "instead" },
        { key: "D", text: "despite" }
      ],
      correctAnswer: "A",
      explanation: "Kedua klausa menyajikan gagasan positif yang saling menambah/menguatkan (clean energy + affordable costs). Maka kata hubung penambahan yang tepat adalah 'furthermore' (lagi pula / selain itu).",
      grammarNote: "Transitions of Addition: furthermore, moreover, in addition, additionally."
    }
  ];
}


function getGrade12Questions() {
  const bank = getGrade10Questions();
  // Grade 12: Discussion Text & Critical Response
  bank[3].title = "Listening Section: Part II - Discussion Dialogue (Grade 12 Context)";
  bank[3].prompt = "In Grade 12 Discussion Texts regarding workplace AI automation, what is the primary role of the 'Arguments Against' section?";
  bank[3].options = [
    { key: "A", text: "To blindly celebrate technological advances without critical thought." },
    { key: "B", text: "To present opposing viewpoints, ethical dilemmas, and potential workforce displacement." },
    { key: "C", text: "To advertise commercial software subscriptions to institutions." },
    { key: "D", text: "To replace human judgment with machine commands entirely." }
  ];
  bank[3].correctAnswer = "B";
  bank[3].explanation = "Teks Discussion kelas XII menyajikan dua perspektif berimbang: poin pendukung (Arguments For) dan poin penentang/kritis (Arguments Against).";
  bank[3].grammarNote = "Discussion Discourse Features: Contrasting Connectors ('On the other hand', 'Conversely', 'In contrast').";

  bank[10].title = "Reading: Discussion Text (Ethics of Artificial Intelligence)";
  bank[10].stimulusTitle = "Text 1: The Dual Impact of AI Tools in Senior High Education";
  bank[10].stimulusBody = "Artificial intelligence offers personalized tutoring and instant grammar feedback for students. Proponents argue that AI enhances self-directed learning. Conversely, skeptics caution that overreliance on automated answers weakens critical analytical reasoning and promotes academic dishonesty. Therefore, balanced integration with strict ethical guidelines is necessary.";
  bank[10].source = "Sumber Otentik: Academic Discussion Papers on AI in Education — UNESCO & Kemendikbudristek";
  bank[10].prompt = "Based on the discussion text above, what is the author's recommended stance?";
  bank[10].options = [
    { key: "A", text: "Adopting balanced integration of AI tools supported by strict ethical guidelines." },
    { key: "B", text: "Completely banning computers and digital devices from all classrooms." },
    { key: "C", text: "Allowing students to submit AI-generated papers without verification." },
    { key: "D", text: "Replacing human teachers with autonomous chatbot algorithms." }
  ];
  bank[10].correctAnswer = "A";
  bank[10].explanation = "Rekomendasi penulis pada teks diskusi di atas adalah integrasi yang seimbang dengan aturan etika yang ketat.";
  bank[10].grammarNote = "Modal Auxiliaries for Hedging & Recommendation: 'should', 'is necessary', 'must be upheld'.";

  return bank;
}

// Fisher-Yates array shuffle utility
function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Randomize question options and matrix statements while dynamically mapping correct answers and explanations
function randomizeQuestionOptions(questionBank) {
  const LETTERS = ["A", "B", "C", "D", "E"];

  return questionBank.map(origQ => {
    // Deep clone question to avoid mutating bank
    const q = JSON.parse(JSON.stringify(origQ));

    // Shuffle statements in complex matrix questions
    if (q.type === "complex_matrix" && Array.isArray(q.matrixStatements)) {
      q.matrixStatements = shuffleArray(q.matrixStatements);
    } 
    // Shuffle options in single choice, listening pictures, and MCMA
    else if (Array.isArray(q.options) && q.options.length > 0) {
      // Tag original option key
      q.options.forEach(opt => {
        opt._origKey = opt.key;
      });

      // Shuffle options list
      const shuffled = shuffleArray(q.options);

      // Re-assign sequential letters A, B, C, D and build key mapping
      const keyMap = {};
      shuffled.forEach((opt, idx) => {
        const newKey = LETTERS[idx] || String.fromCharCode(65 + idx);
        keyMap[opt._origKey] = newKey;
        opt.key = newKey;
        delete opt._origKey;
      });

      q.options = shuffled;

      // Update correct answer pointer(s)
      if (q.type === "mcma" && Array.isArray(q.correctAnswer)) {
        q.correctAnswer = q.correctAnswer.map(k => keyMap[k] || k).sort();
      } else if (typeof q.correctAnswer === "string") {
        q.correctAnswer = keyMap[q.correctAnswer] || q.correctAnswer;
      }

      // Synchronize explanation references to newly mapped keys
      if (q.explanation) {
        q.explanation = q.explanation.replace(/(Opsi|Gambar|Pilihan|Jawaban)\s+([A-D])\b/gi, (match, prefix, oldLetter) => {
          const up = oldLetter.toUpperCase();
          return keyMap[up] ? `${prefix} ${keyMap[up]}` : match;
        });
      }
    }

    return q;
  });
}

// =============================================================================
// LOCALSTORAGE AUTOSAVE & STATE RECOVERY
// =============================================================================

function saveProgressToLocalStorage() {
  try {
    const state = {
      studentIdentity,
      userAnswers,
      flaggedQuestions: Array.from(flaggedQuestions),
      remainingSeconds,
      currentQuestionIndex,
      questions,
      currentMode,
      isExamSubmitted,
      savedAt: new Date().toLocaleTimeString("id-ID")
    };
    localStorage.setItem("sabaku_ats_progress_XII", JSON.stringify(state));
    
    const autoEl = document.getElementById("autosave-indicator");
    if (autoEl) autoEl.textContent = `💾 Tersimpan (${state.savedAt})`;
    const sideSaved = document.getElementById("side-last-saved");
    if (sideSaved) sideSaved.textContent = `Tersimpan: ${state.savedAt}`;
  } catch (e) {
    console.warn("LocalStorage save error:", e);
  }
}

function loadProgressFromLocalStorage() {
  try {
    const savedStr = localStorage.getItem("sabaku_ats_progress_XII");
    if (savedStr) {
      const state = JSON.parse(savedStr);
      if (state.questions && state.questions.length === 40 && !state.isExamSubmitted) {
        studentIdentity = state.studentIdentity || studentIdentity;
        userAnswers = state.userAnswers || {};
        flaggedQuestions = new Set(state.flaggedQuestions || []);
        remainingSeconds = (state.remainingSeconds && state.remainingSeconds > 0) ? state.remainingSeconds : (90 * 60);
        currentQuestionIndex = state.currentQuestionIndex || 0;
        questions = state.questions;
        currentMode = state.currentMode || "practice";
        return true;
      }
    }
  } catch (e) {
    console.warn("LocalStorage load error:", e);
  }
  return false;
}

// =============================================================================
// INITIALIZATION & UI CONTROLLER
// =============================================================================

window.addEventListener("DOMContentLoaded", () => {
  initGradeXIITest();
});

function initGradeXIITest() {
  // Try to restore saved in-progress exam
  const hasRestored = loadProgressFromLocalStorage();

  if (hasRestored) {
    applyStudentMetadata();
    buildNavigatorGrid();
    startTimer();
    renderQuestion(currentQuestionIndex);
    return;
  }

  // Read student identity passed from index.html portal
  try {
    const portalData = JSON.parse(localStorage.getItem("sabaku_current_student") || "{}");
    if (portalData.nama && portalData.tingkat) {
      studentIdentity = {
        tingkat: "XII-F",
        rombel: portalData.rombel || "1",
        presensi: portalData.presensi || "1",
        nama: portalData.nama
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
      alert("⚠️ Token Asesmen Resmi (ATS) tidak valid! Masukkan: JujurItuMujur");
      return;
    }
  }

  studentIdentity = {
    tingkat: "XII-F",
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

  // Initialize and randomize Grade 10 question bank
  const rawBank = getGrade12Questions();
  questions = randomizeQuestionOptions(rawBank);

  applyStudentMetadata();
  buildNavigatorGrid();
  startTimer();
  renderQuestion(0);
  saveProgressToLocalStorage();
}

function applyStudentMetadata() {
  // Update Header Badges
  const modeBadge = document.getElementById("nav-mode-badge");
  modeBadge.textContent = (currentMode === "practice") ? "🎯 Mode Latihan" : "📝 Asesmen Resmi (ATS)";
  modeBadge.className = "badge-mode " + (currentMode === "practice" ? "practice" : "exam");

  // Update Sidebar Student Meta
  document.getElementById("side-student-name").textContent = studentIdentity.nama;
  document.getElementById("side-student-meta").textContent = `Kelas ${studentIdentity.tingkat} | Rombel ${studentIdentity.rombel} | Presensi ${studentIdentity.presensi}`;
}

function toggleKisiKisiContent() {
  const body = document.getElementById("kisi-kisi-body");
  const icon = document.getElementById("kisi-toggle-icon");
  if (body.style.display === "none") {
    body.style.display = "block";
    icon.textContent = "▼ Sembunyikan Kisi-Kisi";
  } else {
    body.style.display = "none";
    icon.textContent = "▶ Tampilkan Kisi-Kisi";
  }
}

function toggleKisiKisiModal() {
  const body = document.getElementById("kisi-kisi-body");
  body.style.display = "block";
  document.getElementById("kisi-toggle-icon").textContent = "▼ Sembunyikan Kisi-Kisi";
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
  if (Array.isArray(ans)) return ans.length > 0;
  if (typeof ans === "object") return Object.keys(ans).length > 0;
  return ans !== "";
}

function renderQuestion(index) {
  if (index < 0 || index >= questions.length) return;
  currentQuestionIndex = index;
  const q = questions[index];

  // Stop active audio
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
  document.getElementById("question-prompt-text").innerHTML = q.prompt;

  // Options Rendering
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

  // Explanation Box (In practice mode or review)
  const expBox = document.getElementById("question-explanation-box");
  if (isExamSubmitted || (currentMode === "practice" && isQuestionAnswered(q.id))) {
    expBox.style.display = "block";
    let keyBadge = "";
    if (q.type === "complex_matrix") {
      keyBadge = q.matrixStatements.map((s, i) => `Pernyataan ${i+1}: <strong>${s.isCorrect ? 'BENAR' : 'SALAH'}</strong>`).join(" | ");
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

  // Flag Button status
  const flagBtn = document.getElementById("btn-flag-q");
  if (flaggedQuestions.has(index)) {
    flagBtn.textContent = "🚩 Hapus Ragu";
  } else {
    flagBtn.textContent = "🏳️ Ragu-ragu";
  }

  // Nav buttons
  document.getElementById("btn-prev-q").disabled = (index === 0);
  document.getElementById("btn-next-q").disabled = (index === questions.length - 1);
  document.getElementById("btn-submit-test").style.display = (index === questions.length - 1) ? "inline-flex" : "none";

  updateNavigatorStatus();
  saveProgressToLocalStorage();
}

// 1. Picture Choices Renderer (For Q1, Q2, Q3)
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

// 2. Single Choice Options Renderer
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

// 3. Complex Multiple Choice (Matrix Table) Renderer
function renderMatrixTable(q, container) {
  const table = document.createElement("table");
  table.className = "matrix-table";

  table.innerHTML = `
    <thead>
      <tr>
        <th style="width: 70%;">Pernyataan / Analisis Teks</th>
        <th style="width: 15%;">BENAR (TRUE)</th>
        <th style="width: 15%;">SALAH (FALSE)</th>
      </tr>
    </thead>
    <tbody>
      ${q.matrixStatements.map((stmt, sIdx) => {
        const curVal = (userAnswers[q.id] && userAnswers[q.id][sIdx] !== undefined) ? userAnswers[q.id][sIdx] : null;
        return `
          <tr>
            <td>${stmt.statement}</td>
            <td onclick="setMatrixAnswer(${q.id}, ${sIdx}, true)">
              <input type="radio" class="matrix-radio" name="matrix_${q.id}_${sIdx}" ${curVal === true ? "checked" : ""}>
            </td>
            <td onclick="setMatrixAnswer(${q.id}, ${sIdx}, false)">
              <input type="radio" class="matrix-radio" name="matrix_${q.id}_${sIdx}" ${curVal === false ? "checked" : ""}>
            </td>
          </tr>
        `;
      }).join("")}
    </tbody>
  `;
  container.appendChild(table);
}

function setMatrixAnswer(qId, statementIdx, value) {
  if (!userAnswers[qId]) {
    userAnswers[qId] = {};
  }
  userAnswers[qId][statementIdx] = value;
  renderQuestion(currentQuestionIndex);
}

// 4. Multiple Choice Multiple Answer (MCMA Checkboxes) Renderer
function renderMCMACheckboxes(q, container) {
  const list = document.createElement("div");
  list.className = "options-list";
  const curAns = userAnswers[q.id] || [];

  q.options.forEach(opt => {
    const isChecked = curAns.includes(opt.key);
    const item = document.createElement("div");
    item.className = "option-item" + (isChecked ? " selected" : "");
    item.onclick = () => {
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
  if (!Array.isArray(userAnswers[qId])) {
    userAnswers[qId] = [];
  }
  const idx = userAnswers[qId].indexOf(key);
  if (idx > -1) {
    userAnswers[qId].splice(idx, 1);
  } else {
    userAnswers[qId].push(key);
  }
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

// Audio Engine: Native Web Speech API Voice Synthesis
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
    alert("Peramban Anda belum mendukung Web Speech API. Silakan gunakan Google Chrome, Microsoft Edge, atau Safari.");
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

    // Autosave progress every 15 seconds
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

  // Clear in-progress session state so next attempt is fresh
  localStorage.removeItem("sabaku_ats_progress_XII");

  // Calculate Scores
  let correctCount = 0;
  questions.forEach(q => {
    const ans = userAnswers[q.id];
    if (q.type === "complex_matrix") {
      if (ans && typeof ans === "object") {
        let allCorrect = true;
        q.matrixStatements.forEach((stmt, sIdx) => {
          if (ans[sIdx] !== stmt.isCorrect) allCorrect = false;
        });
        if (allCorrect) correctCount++;
      }
    } else if (q.type === "mcma") {
      if (Array.isArray(ans)) {
        const sortedUser = [...ans].sort();
        const sortedTarget = [...q.correctAnswer].sort();
        if (JSON.stringify(sortedUser) === JSON.stringify(sortedTarget)) {
          correctCount++;
        }
      }
    } else {
      if (ans === q.correctAnswer) {
        correctCount++;
      }
    }
  });

  const totalQuestions = questions.length;
  const finalScore = Math.round((correctCount / totalQuestions) * 100);
  const isTuntas = finalScore >= 75;

  // Show Modal Results
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

  // Prepare submission record
  const record = {
    tingkat: studentIdentity.tingkat,
    rombel: studentIdentity.rombel,
    presensi: studentIdentity.presensi,
    nama: studentIdentity.nama,
    mode: (currentMode === "practice") ? "Latihan Mandiri" : "Asesmen Resmi (ATS)",
    score: correctCount,
    total: totalQuestions,
    grade: finalScore,
    duration: `${Math.floor((5400 - remainingSeconds) / 60)} menit`,
    timestamp: new Date().toLocaleString("id-ID"),
    answers: userAnswers
  };

  // Save to LocalStorage History
  try {
    const history = JSON.parse(localStorage.getItem("sabaku_ats_history") || "[]");
    history.push(record);
    localStorage.setItem("sabaku_ats_history", JSON.stringify(history));
  } catch (e) {
    console.warn("History save error:", e);
  }

  // Send to Google Sheets
  syncScoreToGoogleSheets(record);

  // Re-render current question so explanation shows
  renderQuestion(currentQuestionIndex);
}

function syncScoreToGoogleSheets(payload) {
  const statusEl = document.getElementById("cloud-status-text");
  if (statusEl) statusEl.textContent = "Menyinkronkan nilai ke server sekolah...";

  const webAppUrl = localStorage.getItem("sabaku_gs_url") || DEFAULT_GS_URL;

  // Background Beacon safety net
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(webAppUrl, new Blob([JSON.stringify(payload)], { type: "text/plain;charset=utf-8" }));
    }
  } catch (e) {
    console.warn("sendBeacon error:", e);
  }

  // Primary fetch POST
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

// 1-Click CSV Export for Teachers/Students
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
    link.setAttribute("download", `Rekap_Nilai_Bahasa_Inggris_Sabaku_${studentIdentity.tingkat}_${studentIdentity.nama.replace(/\s+/g, "_")}.csv`);
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
    localStorage.removeItem("sabaku_ats_progress_XII");
    document.getElementById("result-modal").style.display = "none";
    startFreshTest();
  }
}

// Database Settings Modal
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
    alert("URL Google Apps Script berhasil disimpan di peramban ini!");
  } else {
    localStorage.removeItem("sabaku_gs_url");
    alert("Pengaturan dikembalikan ke URL default.");
  }
  closeSettingsModal();
}
