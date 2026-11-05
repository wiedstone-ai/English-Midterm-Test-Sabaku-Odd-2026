/**
 * ASESMEN SUMATIF AKHIR SEMESTER (ASAS) GASAL & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT X (FASE E)
 * Standar: TKA & AKM Literasi (Pilihan Ganda Biasa, Kompleks Matrix, & MCMA)
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

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
  {
    "id": 1,
    "source": "Sumber: Arsip Prestasi Bulutangkis Indonesia — PBSI & Kementerian Pemuda dan Olahraga",
    "type": "listening_pictures",
    "title": "Listening Section: Part I - Pictures",
    "audioText": "Number one. Look at the pictures. This inspiring international athlete is leaping high in the air to deliver a powerful, precision smash with his racket over the net during the world championship final. Which picture best matches the description?",
    "prompt": "Look at the four pictures below. Which picture matches the athlete described in the audio?",
    "options": [
      {
        "key": "A",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"50\" cy=\"22\" r=\"10\"/><path d=\"M50 32v28M30 42l20-8 20 12M50 60l-16 26M50 60l18 26\"/><path d=\"M70 46l14-14M84 32a7 7 0 10-10-10 7 7 0 0010 10zM77 25l7 7\"/></svg>",
        "label": "A world badminton champion executing a powerful smash"
      },
      {
        "key": "B",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"65\" cy=\"22\" r=\"9\"/><path d=\"M60 31l-14 16 10 12-14 26M46 47l-18-6M56 59l18 6 12 18\"/><path d=\"M15 88h70\" stroke=\"#94a3b8\" stroke-dasharray=\"4 4\"/></svg>",
        "label": "A marathon athlete sprinting towards the finish line"
      },
      {
        "key": "C",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#0d9488\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"32\" cy=\"38\" r=\"9\"/><path d=\"M41 38l24 4 15-18M25 50l30 4 18 10\"/><path d=\"M10 65c10-5 20 5 30 0s20 5 30 0 20 5 20 0M10 78c10-5 20 5 30 0s20 5 30 0 20 5 20 0\" stroke=\"#0284c7\"/></svg>",
        "label": "A swimmer competing in the freestyle race"
      },
      {
        "key": "D",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"50\" cy=\"38\" r=\"8\"/><path d=\"M50 46v24M38 56l12-8 12 8M42 70l-8 20M58 70l8 20\"/><path d=\"M15 26h70\" stroke=\"#475569\" stroke-width=\"4\"/><circle cx=\"15\" cy=\"26\" r=\"12\" fill=\"#94a3b8\"/><circle cx=\"85\" cy=\"26\" r=\"12\" fill=\"#94a3b8\"/></svg>",
        "label": "A weightlifter lifting a heavy barbell overhead"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Audio mendeskripsikan: 'athlete is leaping high in the air to deliver a powerful, precision smash with his racket over the net'. Gambar yang sesuai menampilkan atlet bulu tangkis yang melompat melakukan pukulan smash dengan raket.",
    "grammarNote": "Present Continuous Tense ('is leaping', 'executing') & Sports Vocabulary (athlete, racket, smash, championship)."
  },
  {
    "id": 2,
    "source": "Sumber: Direktori Cagar Budaya Nasional — Balai Pelestarian Kebudayaan Wilayah X",
    "type": "listening_pictures",
    "title": "Listening Section: Part I - Pictures",
    "audioText": "Number two. Look at the pictures. This magnificent Indonesian cultural destination features ancient massive stone stupas, detailed relief stone carvings, and tiered terraces rising proudly against the morning mist. Which picture illustrates the spoken description?",
    "prompt": "Which picture corresponds to the magnificent cultural tourism site described in the audio?",
    "options": [
      {
        "key": "A",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"#fef08a\" stroke=\"#eab308\"/><path d=\"M60 85c-5-25 15-45 25-50M85 35c-15 0-25-10-30-5M85 35c5-10 15-12 20-10M85 35c-5 12-12 18-18 20\"/><path d=\"M10 85c15-4 35 2 50-2s25-6 30-2\" stroke=\"#16a34a\" stroke-width=\"3\"/></svg>",
        "label": "A tropical sandy beach with coconut palm trees"
      },
      {
        "key": "B",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 85h80M20 70h60M30 55h40M40 40h20M50 20v20\"/><path d=\"M35 85v-15M65 85v-15M42 70v-15M58 70v-15\"/><circle cx=\"50\" cy=\"18\" r=\"3\" fill=\"#d97706\"/></svg>",
        "label": "An ancient monumental stone temple with terraces and stupas"
      },
      {
        "key": "C",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 85l35-50 15 20 15-15 20 45H10z\"/><path d=\"M38 45l7 8 10-5\" stroke=\"#cbd5e1\" fill=\"#f8fafc\"/></svg>",
        "label": "A towering volcanic peak covered in alpine snow"
      },
      {
        "key": "D",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 65h80M25 25v55M75 25v55M10 50c15-15 25-25 40 0s25-15 40 0M25 25l25 25 25-25\"/><path d=\"M10 80c10-3 20 3 40 0s30 3 40 0\" stroke=\"#0284c7\"/></svg>",
        "label": "A modern suspension bridge across a metropolis bay"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Audio menyebutkan: 'magnificent Indonesian cultural destination features ancient massive stone stupas, detailed relief stone carvings, and tiered terraces'. Ciri-ciri stupa batu bertingkat dan relief kuno adalah candi bersejarah (Temple).",
    "grammarNote": "OSASCOMP Adjective Order: 'ancient massive stone stupas' (Age: ancient, Size: massive, Material: stone)."
  },
  {
    "id": 3,
    "source": "Sumber: Brosur Cagar Budaya Yayasan Menara Kudus & Disbudpar Kudus",
    "type": "listening_pictures",
    "title": "Listening Section: Part I - Pictures",
    "audioText": "Number three. Look at the pictures. This unique architectural landmark in Kudus blends Hindu-Javanese traditional brickwork design with Islamic minaret structure, symbolizing historic cultural harmony. Which picture depicts this monument?",
    "prompt": "Which picture depicts the iconic heritage landmark in Kudus mentioned in the recording?",
    "options": [
      {
        "key": "A",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#9333ea\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><ellipse cx=\"50\" cy=\"30\" rx=\"12\" ry=\"16\"/><path d=\"M50 46v30M32 38l-12 24 14 16M68 38l12 24-14 16M50 76l-14 16M50 76l14 16M45 14c5-8 15-5 18 2\"/></svg>",
        "label": "Wayang shadow puppet leather figure"
      },
      {
        "key": "B",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"15\" y=\"15\" width=\"70\" height=\"70\" rx=\"6\"/><circle cx=\"50\" cy=\"50\" r=\"14\"/><path d=\"M50 20v16M50 64v16M20 50h16M64 50h16M28 28l12 12M60 60l12 12M28 72l12-12M60 40l12-12\"/></svg>",
        "label": "Traditional geometric batik textile pattern"
      },
      {
        "key": "C",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 85h40M35 85V45h30v40M32 45h36M38 45V28h24v17M35 28h30M45 28V15h10v13M42 15h16M50 10v5\"/><circle cx=\"50\" cy=\"8\" r=\"2\" fill=\"#b45309\"/><path d=\"M42 65h16v20H42z\"/></svg>",
        "label": "Historic red-brick heritage tower minaret of Kudus"
      },
      {
        "key": "D",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"25\" y=\"45\" width=\"50\" height=\"40\" rx=\"4\"/><path d=\"M35 45V25l30-8v28M35 35l30-8\"/><circle cx=\"38\" cy=\"72\" r=\"6\" fill=\"#f43f5e\"/><circle cx=\"62\" cy=\"65\" r=\"6\" fill=\"#f43f5e\"/></svg>",
        "label": "Modern musical auditorium stage"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Audio menyebutkan: 'unique architectural landmark in Kudus blends Hindu-Javanese traditional brickwork design with Islamic minaret structure'. Landmark menara bata merah ikonik khas Kudus adalah Menara Kudus.",
    "grammarNote": "Compound Adjectives & Cultural Heritage Nouns: 'Hindu-Javanese traditional brickwork design', 'historic cultural harmony'."
  },
  {
    "id": 4,
    "source": "Sumber: Dialog Otentik Modul Ajar Fase E — Tim Guru MGMP Bahasa Inggris SMA",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Short Dialogues",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number four. Listen to a conversation between a student and a friend.",
        "pauseAfter": 450
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Good morning! You look so energetic today. What is your secret for staying fit during our exam week?",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.3,
        "rateMultiplier": 1.04,
        "text": "Well, I always maintain a nutritious diet, drink plenty of fresh water, and jog for twenty minutes every morning before studying.",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "That sounds like a wonderful habit. I should try jogging in the morning too.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What does the female speaker do to maintain her physical fitness?"
      }
    ],
    "stimulusTitle": "Audio Transcript (Listening)",
    "stimulusBody": "<p><strong>Speaker 1 (Male):</strong> Good morning! You look so energetic today. What is your secret for staying fit during our exam week?</p><p><strong>Speaker 2 (Female):</strong> Well, I always maintain a nutritious diet, drink plenty of fresh water, and jog for twenty minutes every morning before studying.</p><p><strong>Speaker 1 (Male):</strong> That sounds like a wonderful habit. I should try jogging in the morning too.</p>",
    "prompt": "What does the female speaker do to keep herself fit during examination week?",
    "options": [
      {
        "key": "A",
        "text": "She studies until late at night and sleeps in the morning."
      },
      {
        "key": "B",
        "text": "She exercises at the professional fitness gym twice a day."
      },
      {
        "key": "C",
        "text": "She skips breakfast and drinks energy coffee before testing."
      },
      {
        "key": "D",
        "text": "She eats nutritious food, hydrates well, and jogs for 20 minutes daily."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pada rekaman, pembicara perempuan menyatakan kebiasaannya menjaga kebugaran: 'I always maintain a nutritious diet, drink plenty of fresh water, and jog for twenty minutes every morning before studying'.",
    "grammarNote": "Adverb of Frequency & Habitual Present Simple: 'always maintain', 'drink plenty of fresh water'."
  },
  {
    "id": 5,
    "source": "Sumber: Dialog Otentik Modul Ajar Fase E — Tim Guru MGMP Bahasa Inggris SMA",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Short Dialogues",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number five. Listen to a conversation between two high school students.",
        "pauseAfter": 450
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Do you have any specific plans for the upcoming school holiday?",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.3,
        "rateMultiplier": 1.04,
        "text": "Yes, my family and I intend to visit the mangrove conservation park in Jepara. We want to plant ten mangrove seedlings to prevent coastal erosion.",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "That sounds like a truly worthwhile environmental project!",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What is the female speaker's intention for the upcoming holiday?"
      }
    ],
    "stimulusTitle": "Audio Transcript (Listening)",
    "stimulusBody": "<p><strong>Speaker 1 (Male):</strong> Do you have any specific plans for the upcoming school holiday?</p><p><strong>Speaker 2 (Female):</strong> Yes, my family and I intend to visit the mangrove conservation park in Jepara. We want to plant ten mangrove seedlings to prevent coastal erosion.</p><p><strong>Speaker 1 (Male):</strong> That sounds like a truly worthwhile environmental project!</p>",
    "prompt": "What is the female student intending to do during the holiday break?",
    "options": [
      {
        "key": "A",
        "text": "She plans to plant mangrove seedlings in a coastal conservation park."
      },
      {
        "key": "B",
        "text": "She intends to stay home and prepare for the national science olympiad."
      },
      {
        "key": "C",
        "text": "She wants to buy ornamental trees for her school garden."
      },
      {
        "key": "D",
        "text": "She is going to build a wooden cottage near the seashore."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Siswi perempuan menyampaikan niatnya: 'intend to visit the mangrove conservation park in Jepara. We want to plant ten mangrove seedlings to prevent coastal erosion'.",
    "grammarNote": "Expressing Intention: 'intend to visit...', 'want to plant...'."
  },
  {
    "id": 6,
    "source": "Sumber: Dialog Otentik Modul Ajar Fase E — Tim Guru MGMP Bahasa Inggris SMA",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Short Dialogues",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number six. Listen to a conversation between a teacher and a student.",
        "pauseAfter": 450
      },
      {
        "gender": "female",
        "pitch": 1.3,
        "rateMultiplier": 1.04,
        "text": "Your descriptive brochure about Mount Muria is very attractive, but the fonts are slightly difficult to read against the dark background.",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Thank you for your feedback, Ma'am. I will modify the font colors to high-contrast white and resize the heading immediately.",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.3,
        "rateMultiplier": 1.04,
        "text": "That will make the tourism information much clearer for visitors.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What action will the male student most likely take next?"
      }
    ],
    "stimulusTitle": "Audio Transcript (Listening)",
    "stimulusBody": "<p><strong>Teacher (Female):</strong> Your descriptive brochure about Mount Muria is very attractive, but the fonts are slightly difficult to read against the dark background.</p><p><strong>Student (Male):</strong> Thank you for your feedback, Ma'am. I will modify the font colors to high-contrast white and resize the heading immediately.</p><p><strong>Teacher (Female):</strong> That will make the tourism information much clearer for visitors.</p>",
    "prompt": "What action will the male student most likely take next?",
    "options": [
      {
        "key": "A",
        "text": "Delete the entire brochure and choose a new topic."
      },
      {
        "key": "B",
        "text": "Revise the typography by changing the font color to white and adjusting heading sizes."
      },
      {
        "key": "C",
        "text": "Submit the dark brochure directly to the school principal without editing."
      },
      {
        "key": "D",
        "text": "Print one hundred copies of the unreadable brochure immediately."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Siswa laki-laki merespons masukan guru: 'I will modify the font colors to high-contrast white and resize the heading immediately'.",
    "grammarNote": "Future intention / immediate response: 'will modify', 'resize the heading'."
  },
  {
    "id": 7,
    "source": "Sumber: Brosur Wisata Sejarah Menara Kudus — Dinas Kebudayaan dan Pariwisata Kudus",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Short Talks (Questions 7 & 8)",
    "audioText": "Questions seven and eight refer to the following short monologue. Hello students! Today I want to introduce you to Anthony Sinisuka Ginting, one of Indonesia's foremost badminton singles stars. Born in Cimahi, West Java, Ginting is widely renowned for his lightning-fast footwork, deceptive wrist drop-shots, and determined and strong fighting spirit on court. He secured a historic bronze medal at the Tokyo 2020 Olympics and spearheaded Indonesia to hoist the prestigious Thomas Cup trophy. Off court, he is humble, disciplined, and dedicated to mentoring younger shuttlecock players.",
    "stimulusTitle": "Monologue Audio Transcript (Listening)",
    "stimulusBody": "<em>Hello students! Today I want to introduce you to Anthony Sinisuka Ginting, one of Indonesia's foremost badminton singles stars. Born in Cimahi, West Java, Ginting is widely renowned for his lightning-fast footwork, deceptive wrist drop-shots, and determined and strong fighting spirit on court. He secured a historic bronze medal at the Tokyo 2020 Olympics and spearheaded Indonesia to hoist the prestigious Thomas Cup trophy. Off court, he is humble, disciplined, and dedicated to mentoring younger shuttlecock players.</em>",
    "prompt": "What is Anthony Sinisuka Ginting primarily celebrated for on the badminton court?",
    "options": [
      {
        "key": "A",
        "text": "His defensive passive style and slow baseline returns."
      },
      {
        "key": "B",
        "text": "His career as a professional marathon and triathlon coach."
      },
      {
        "key": "C",
        "text": "His lightning-fast footwork, deceptive wrist shots, and determined and strong fighting spirit."
      },
      {
        "key": "D",
        "text": "His height and heavy overhead weightlifting techniques."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Monolog menyatakan: 'renowned for his lightning-fast footwork, deceptive wrist drop-shots, and determined and strong fighting spirit on court'. Kutipan ini mendeskripsikan gaya permainan atlet secara akurat.",
    "grammarNote": "Descriptive Adjectives & Compound Adjectives: 'lightning-fast', 'deceptive', 'determined and strong', 'prestigious'."
  },
  {
    "id": 8,
    "source": "Sumber: Brosur Wisata Sejarah Menara Kudus — Dinas Kebudayaan dan Pariwisata Kudus",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Short Talks",
    "audioText": "Question eight is based on the previous monologue about Anthony Ginting. Question: What personality traits does Anthony Ginting exhibit outside his sports matches?",
    "prompt": "According to the speaker, what are Ginting's character traits outside the badminton court?",
    "options": [
      {
        "key": "A",
        "text": "Arrogant, distant, and reluctant to communicate with fans."
      },
      {
        "key": "B",
        "text": "Reserved and uninterested in national sports development."
      },
      {
        "key": "C",
        "text": "Impatient, unpredictable, and strict towards school teachers."
      },
      {
        "key": "D",
        "text": "Humble, disciplined, and dedicated to guiding younger athletes."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pada bagian akhir monolog disebutkan: 'Off court, he is humble, disciplined, and dedicated to mentoring younger shuttlecock players'.",
    "grammarNote": "Predicate Adjectives describing Personality: 'humble', 'disciplined', 'dedicated'."
  },
  {
    "id": 9,
    "source": "Sumber Otentik: Pengumuman Resmi OSIS & Tim Sekolah Adiwiyata — SMA Negeri 1 Bae Kudus",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Short Talks (Questions 9 & 10)",
    "audioText": "Questions nine and ten are based on the following official school announcement. Attention, all tenth-grade students of SMA Negeri 1 Bae Kudus! In accordance with our green school program, the student council will organize a Campus Eco-Clean and Flora Cataloging Campaign this coming Friday at seven o'clock in the morning. Each class is requested to bring reusable garden gloves, plant five native medicinal herbs in the school sanctuary, and classify the plant species into botanical report cards. Let us uphold our shared commitment towards a zero-waste and clean and green learning environment. Thank you.",
    "stimulusTitle": "School Announcement Audio Transcript",
    "stimulusBody": "<em>Attention, all tenth-grade students of SMA Negeri 1 Bae Kudus! In accordance with our green school program, the student council will organize a Campus Eco-Clean and Flora Cataloging Campaign this coming Friday at seven o'clock in the morning. Each class is requested to bring reusable garden gloves, plant five native medicinal herbs in the school sanctuary, and classify the plant species into botanical report cards. Let us uphold our shared commitment towards a zero-waste and clean and green learning environment. Thank you.</em>",
    "prompt": "What is the primary purpose of the official school announcement?",
    "options": [
      {
        "key": "A",
        "text": "To invite 10th graders to participate in an eco-clean and flora cataloging campaign on Friday."
      },
      {
        "key": "B",
        "text": "To announce the winners of the national English debating championship."
      },
      {
        "key": "C",
        "text": "To cancel all classes on Friday due to heavy monsoon rain."
      },
      {
        "key": "D",
        "text": "To inform teachers about an emergency staff meeting in the auditorium."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tujuan komunikatif teks deskriptif adalah menggambarkan ciri khusus, kepribadian, dan prestasi atlet secara rinci.",
    "grammarNote": "Announcement Functional Text Conventions: 'Attention, all...', 'is requested to bring...', 'Let us uphold...'."
  },
  {
    "id": 10,
    "source": "Sumber: Pengumuman Resmi Tim Adiwiyata & OSIS SMA Negeri 1 Bae Kudus",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Short Talks",
    "audioText": "Question ten is based on the school announcement. Question: What specific assignment must each class accomplish in the school botanical sanctuary?",
    "prompt": "What specific task must each class perform during the school campaign?",
    "options": [
      {
        "key": "A",
        "text": "Paint the school fence with green and yellow colors."
      },
      {
        "key": "B",
        "text": "Plant five native medicinal herbs and classify them on botanical report cards."
      },
      {
        "key": "C",
        "text": "Collect single-use plastic bottles from the local market."
      },
      {
        "key": "D",
        "text": "Build a glass greenhouse near the principal's office."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf kedua berfokus menguraikan rutinitas latihan fisik intensif sang atlet.",
    "grammarNote": "Imperative Infinitive Clauses: 'plant native medicinal herbs', 'classify the plant species'."
  },
  {
    "id": 11,
    "source": "Sumber: Buku Panduan Wisata Bahari — Balai Taman Nasional Karimunjawa, KLHK RI",
    "type": "single_choice",
    "title": "Reading Comprehension: Descriptive Text",
    "stimulusTitle": "Text 1: The Splendor of Karimunjawa Archipelago",
    "stimulusBody": "Karimunjawa is a pristine tropical archipelago situated in the Java Sea, approximately eighty kilometers northwest of Jepara, Central Java. Designated as a National Marine Park in 2001, the cluster comprises twenty-seven paradise islands, of which only five are inhabited.<br><br>The underwater realm of Karimunjawa is extraordinarily breathtaking. Vast expanses of thriving coral reefs, characterized by magnificent branching acropora and vibrant brain corals, shelter hundreds of pelagic fish species, including clownfish, blue damselfish, and gentle hawksbill sea turtles. The water visibility frequently exceeds twenty meters, allowing snorkelers and divers to gaze upon the aquatic kaleidoscope with crystalline clarity.<br><br>On land, Karimunjawa boasts expansive coastal stretches lined with powdery white sands and whispering casuarina trees. In the interior of the main island, dense mangrove forests and lush hilltops provide sanctuary for endemic fruit bats and the white-bellied sea eagle. Local inhabitants, who predominantly earn their living as traditional artisanal fishermen and eco-tourism guides, preserve a harmonious lifestyle deeply rooted in maritime conservation.",
    "prompt": "What is the main topic discussed in the second paragraph of the text?",
    "options": [
      {
        "key": "A",
        "text": "The historical administrative status of Karimunjawa as a regency."
      },
      {
        "key": "B",
        "text": "The agricultural techniques employed by the islanders to grow fruit trees."
      },
      {
        "key": "C",
        "text": "The magnificent biodiversity and remarkable visibility of Karimunjawa's marine underwater ecosystem."
      },
      {
        "key": "D",
        "text": "The commercial fishing methods used by deep-sea industrial trawlers."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kepulauan Karimunjawa terkenal dengan keanekaragaman hayati terumbu karang dan kejernihan air lautnya.",
    "grammarNote": "Paragraph Topic Identification & Lexical Density: 'underwater realm', 'coral reefs', 'water visibility'."
  },
  {
    "id": 12,
    "source": "Sumber: Buku Panduan Wisata Bahari — Balai Taman Nasional Karimunjawa, KLHK RI",
    "type": "single_choice",
    "title": "Reading Comprehension: Vocabulary & Inference",
    "stimulusTitle": "Text 1: The Splendor of Karimunjawa Archipelago",
    "stimulusBody": "Karimunjawa is a pristine tropical archipelago situated in the Java Sea, approximately eighty kilometers northwest of Jepara, Central Java. Designated as a National Marine Park in 2001, the cluster comprises twenty-seven paradise islands, of which only five are inhabited.<br><br>The underwater realm of Karimunjawa is extraordinarily breathtaking. Vast expanses of thriving coral reefs, characterized by magnificent branching acropora and vibrant brain corals, shelter hundreds of pelagic fish species, including clownfish, blue damselfish, and gentle hawksbill sea turtles. The water visibility frequently exceeds twenty meters, allowing snorkelers and divers to gaze upon the aquatic kaleidoscope with crystalline clarity.<br><br>On land, Karimunjawa boasts expansive coastal stretches lined with powdery white sands and whispering casuarina trees. In the interior of the main island, dense mangrove forests and lush hilltops provide sanctuary for endemic fruit bats and the white-bellied sea eagle. Local inhabitants, who predominantly earn their living as traditional artisanal fishermen and eco-tourism guides, preserve a harmonious lifestyle deeply rooted in maritime conservation.",
    "prompt": "The underlined word 'crystalline' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "Turbid and dark"
      },
      {
        "key": "B",
        "text": "Dangerous and toxic"
      },
      {
        "key": "C",
        "text": "Artificial and synthesized"
      },
      {
        "key": "D",
        "text": "Transparent and sparklingly clear"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Informasi spesifik tentang luas kawasan konservasi laut dipaparkan pada paragraf pertama.",
    "grammarNote": "Oxford 3000 Level B1/B2 Adjectives of Clarity: crystalline, transparent, vivid, immaculate."
  },
  {
    "id": 13,
    "source": "Sumber: Buku Panduan Wisata Bahari — Balai Taman Nasional Karimunjawa, KLHK RI",
    "type": "single_choice",
    "title": "Reading Comprehension: Detail Information",
    "stimulusTitle": "Text 1: The Splendor of Karimunjawa Archipelago",
    "stimulusBody": "Karimunjawa is a pristine tropical archipelago situated in the Java Sea, approximately eighty kilometers northwest of Jepara, Central Java. Designated as a National Marine Park in 2001, the cluster comprises twenty-seven paradise islands, of which only five are inhabited.<br><br>The underwater realm of Karimunjawa is extraordinarily breathtaking. Vast expanses of thriving coral reefs, characterized by magnificent branching acropora and vibrant brain corals, shelter hundreds of pelagic fish species, including clownfish, blue damselfish, and gentle hawksbill sea turtles. The water visibility frequently exceeds twenty meters, allowing snorkelers and divers to gaze upon the aquatic kaleidoscope with crystalline clarity.<br><br>On land, Karimunjawa boasts expansive coastal stretches lined with powdery white sands and whispering casuarina trees. In the interior of the main island, dense mangrove forests and lush hilltops provide sanctuary for endemic fruit bats and the white-bellied sea eagle. Local inhabitants, who predominantly earn their living as traditional artisanal fishermen and eco-tourism guides, preserve a harmonious lifestyle deeply rooted in maritime conservation.",
    "prompt": "According to the third paragraph, what terrestrial flora and fauna inhabit the interior of the island?",
    "options": [
      {
        "key": "A",
        "text": "Dense mangrove forests sheltering endemic fruit bats and white-bellied sea eagles."
      },
      {
        "key": "B",
        "text": "Extensive cactus shrubs, desert camels, and rattlesnakes."
      },
      {
        "key": "C",
        "text": "Pine plantations occupied by Siberian tigers and grizzly bears."
      },
      {
        "key": "D",
        "text": "Industrial oil palm plantations with imported macaque monkeys."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'pristine' bersinonim dengan 'pure and unpolluted' (murni, bersih, dan belum terjamah polusi).",
    "grammarNote": "Scanning Specific Details: 'dense mangrove forests', 'fruit bats', 'white-bellied sea eagle'."
  },
  {
    "id": 14,
    "source": "Sumber: Buku Panduan Wisata Bahari — Balai Taman Nasional Karimunjawa, KLHK RI",
    "type": "single_choice",
    "title": "Reading Comprehension: Social Function",
    "stimulusTitle": "Text 1: The Splendor of Karimunjawa Archipelago",
    "stimulusBody": "Karimunjawa is a pristine tropical archipelago situated in the Java Sea, approximately eighty kilometers northwest of Jepara, Central Java. Designated as a National Marine Park in 2001, the cluster comprises twenty-seven paradise islands, of which only five are inhabited.<br><br>The underwater realm of Karimunjawa is extraordinarily breathtaking. Vast expanses of thriving coral reefs, characterized by magnificent branching acropora and vibrant brain corals, shelter hundreds of pelagic fish species, including clownfish, blue damselfish, and gentle hawksbill sea turtles. The water visibility frequently exceeds twenty meters, allowing snorkelers and divers to gaze upon the aquatic kaleidoscope with crystalline clarity.<br><br>On land, Karimunjawa boasts expansive coastal stretches lined with powdery white sands and whispering casuarina trees. In the interior of the main island, dense mangrove forests and lush hilltops provide sanctuary for endemic fruit bats and the white-bellied sea eagle. Local inhabitants, who predominantly earn their living as traditional artisanal fishermen and eco-tourism guides, preserve a harmonious lifestyle deeply rooted in maritime conservation.",
    "prompt": "What is the primary communicative purpose of the writer in publishing this text?",
    "options": [
      {
        "key": "A",
        "text": "To argue that tourism should be permanently forbidden in Central Java."
      },
      {
        "key": "B",
        "text": "To describe the unique natural wonders and ecological beauty of Karimunjawa to inform and attract visitors."
      },
      {
        "key": "C",
        "text": "To explain the step-by-step procedure of diving with scuba gear."
      },
      {
        "key": "D",
        "text": "To narrate a mythical folktale about ancient sea monsters in Java Sea."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Daya tarik utama Karimunjawa bagi wisatawan bahari adalah panorama bawah laut yang spektakuler.",
    "grammarNote": "Social Function of Descriptive Genre: 'To describe a particular person, place, or thing in detail'."
  },
  {
    "id": 15,
    "source": "Sumber: Buku Panduan Wisata Bahari — Balai Taman Nasional Karimunjawa, KLHK RI",
    "type": "single_choice",
    "title": "Reading Comprehension: Author's Attitude",
    "stimulusTitle": "Text 1: The Splendor of Karimunjawa Archipelago",
    "stimulusBody": "Karimunjawa is a pristine tropical archipelago situated in the Java Sea, approximately eighty kilometers northwest of Jepara, Central Java. Designated as a National Marine Park in 2001, the cluster comprises twenty-seven paradise islands, of which only five are inhabited.<br><br>The underwater realm of Karimunjawa is extraordinarily breathtaking. Vast expanses of thriving coral reefs, characterized by magnificent branching acropora and vibrant brain corals, shelter hundreds of pelagic fish species, including clownfish, blue damselfish, and gentle hawksbill sea turtles. The water visibility frequently exceeds twenty meters, allowing snorkelers and divers to gaze upon the aquatic kaleidoscope with crystalline clarity.<br><br>On land, Karimunjawa boasts expansive coastal stretches lined with powdery white sands and whispering casuarina trees. In the interior of the main island, dense mangrove forests and lush hilltops provide sanctuary for endemic fruit bats and the white-bellied sea eagle. Local inhabitants, who predominantly earn their living as traditional artisanal fishermen and eco-tourism guides, preserve a harmonious lifestyle deeply rooted in maritime conservation.",
    "prompt": "The author's tone throughout the entire text can best be described as...",
    "options": [
      {
        "key": "A",
        "text": "Cynical and detached"
      },
      {
        "key": "B",
        "text": "Hostile and dissatisfied"
      },
      {
        "key": "C",
        "text": "Appreciative, admire-filled, and informative"
      },
      {
        "key": "D",
        "text": "Satirical and mocking"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Penulis merekomendasikan perlunya menjaga kelestarian terumbu karang dari dampak negatif pariwisata massal.",
    "grammarNote": "Author's Tone and Perspective Analysis in TKA: appreciative, objective, subjective, critical."
  },
  {
    "id": 16,
    "source": "Sumber: Laporan Ilmiah Populasi Satwa Dilindungi — Balai Taman Nasional Ujung Kulon & WWF",
    "type": "complex_matrix",
    "title": "Complex Multiple Choice: Fact Evaluation of Karimunjawa Archipelago",
    "stimulusTitle": "Text 1: The Splendor of Karimunjawa Archipelago",
    "stimulusBody": "Karimunjawa is a pristine tropical archipelago situated in the Java Sea, approximately eighty kilometers northwest of Jepara, Central Java. Designated as a National Marine Park in 2001, the cluster comprises twenty-seven paradise islands, of which only five are inhabited.<br><br>The underwater realm of Karimunjawa is extraordinarily breathtaking. Vast expanses of thriving coral reefs, characterized by magnificent branching acropora and vibrant brain corals, shelter hundreds of pelagic fish species, including clownfish, blue damselfish, and gentle hawksbill sea turtles. The water visibility frequently exceeds twenty meters, allowing snorkelers and divers to gaze upon the aquatic kaleidoscope with crystalline clarity.<br><br>On land, Karimunjawa boasts expansive coastal stretches lined with powdery white sands and whispering casuarina trees. In the interior of the main island, dense mangrove forests and lush hilltops provide sanctuary for endemic fruit bats and the white-bellied sea eagle. Local inhabitants, who predominantly earn their living as traditional artisanal fishermen and eco-tourism guides, preserve a harmonious lifestyle deeply rooted in maritime conservation.",
    "prompt": "Based on Text 1, determine whether each of the following statements is **TRUE** or **FALSE**:",
    "matrixStatements": [
      {
        "statement": "All twenty-seven islands in the Karimunjawa archipelago are densely populated by local residents.",
        "isCorrect": false
      },
      {
        "statement": "Karimunjawa was officially designated as a National Marine Park in the year 2001.",
        "isCorrect": true
      },
      {
        "statement": "Underwater visibility in the coral reef areas of Karimunjawa frequently exceeds twenty meters.",
        "isCorrect": true
      },
      {
        "statement": "The vast majority of local inhabitants earn their livelihood as offshore petroleum miners.",
        "isCorrect": false
      }
    ],
    "explanation": "• Pernyataan 1: SALAH — Hanya 5 dari 27 pulau di Kepulauan Karimunjawa yang berpenghuni.<br>• Pernyataan 2: BENAR — Taman Nasional Karimunjawa resmi dideklarasikan pada tahun 2001.<br>• Pernyataan 3: BENAR — Kejernihan air laut Karimunjawa memungkinkan jarak pandang selam melebihi 20 meter.<br>• Pernyataan 4: SALAH — Sebagian besar warga setempat bekerja sebagai nelayan tradisional dan pemandu ekowisata.",
    "grammarNote": "Factual Verification & Text Analysis in High-Order Thinking Skills (HOTS)."
  },
  {
    "id": 17,
    "source": "Sumber: Laporan Ilmiah Populasi Satwa Dilindungi — Balai Taman Nasional Ujung Kulon & WWF",
    "type": "complex_matrix",
    "title": "Complex Multiple Choice: Simple Present & Passive Voice Analysis",
    "stimulusTitle": "Grammar Focus: Simple Present & Passive Voice in Descriptive Contexts",
    "stimulusBody": "Analyze the grammatical accuracy of the following sentences based on standard descriptive and scientific grammar rules:",
    "prompt": "Determine whether each grammatical statement below is **TRUE** or **FALSE**:",
    "matrixStatements": [
      {
        "statement": "The sentence 'Karimunjawa comprises twenty-seven islands' uses the Simple Present Tense to express an objective geographical fact.",
        "isCorrect": true
      },
      {
        "statement": "The passive voice transformation of 'Snorkelers observe the coral reefs' is 'The coral reefs is observed by snorkelers'.",
        "isCorrect": false
      },
      {
        "statement": "The subject in 'Vast expanses of thriving coral reefs shelter hundreds of fish' is plural, requiring the base verb 'shelter' without an -s suffix.",
        "isCorrect": true
      },
      {
        "statement": "The word 'extraordinarily' in the text functions as an adjective modifying a noun.",
        "isCorrect": false
      }
    ],
    "explanation": "• Pernyataan 1: BENAR — Kalimat menggunakan Simple Present Tense untuk menyatakan fakta ilmiah umum.<br>• Pernyataan 2: SALAH — Subjek 'The coral reefs' berbentuk jamak sehingga membutuhkan to be 'are' ('are observed'), bukan 'is'.<br>• Pernyataan 3: BENAR — Kesesuaian subjek jamak dan kata kerja Simple Present terpasang secara tepat.<br>• Pernyataan 4: SALAH — Kata 'extraordinarily' berakhiran -ly adalah adverb of degree yang menerangkan kata sifat 'breathtaking'.",
    "grammarNote": "Subject-Verb Agreement, Passive Voice Plural ('are + V3'), and Adverb vs Adjective functions."
  },
  {
    "id": 18,
    "source": "Sumber: Laporan Ilmiah Populasi Satwa Dilindungi — Balai Taman Nasional Ujung Kulon & WWF",
    "type": "complex_matrix",
    "title": "Complex Multiple Choice: Adjective Order Rules (OSASCOMP)",
    "stimulusTitle": "Grammar Focus: Standard Adjective Order (Opinion - Size - Age - Shape - Color - Origin - Material - Purpose)",
    "stimulusBody": "Determine whether the following adjective phrases follow standard English word order rules:",
    "prompt": "Determine whether each adjective phrase below is **TRUE** (grammatically correct) or **FALSE** (incorrect) according to standard adjective order (OSASCOMP):",
    "matrixStatements": [
      {
        "statement": "'A charming small old wooden cottage' adheres to standard adjective order (Opinion: charming, Size: small, Age: old, Material: wooden).",
        "isCorrect": true
      },
      {
        "statement": "'A stone ancient magnificent statue' places material before opinion and age correctly.",
        "isCorrect": false
      },
      {
        "statement": "'An energetic young Indonesian badminton athlete' correctly arranges opinion, age, origin, and purpose.",
        "isCorrect": true
      },
      {
        "statement": "'A circular large brown dining table' correctly places shape before size.",
        "isCorrect": false
      }
    ],
    "explanation": "• Pernyataan 1: BENAR — Urutan kata sifat mengikuti kaidah OSASCOMP: Opinion (charming) -> Size (small) -> Age (old) -> Material (wooden).<br>• Pernyataan 2: SALAH — Susunan yang benar adalah 'A magnificent ancient stone statue' (Opinion -> Age -> Material).<br>• Pernyataan 3: BENAR — Urutan tepat: Opinion (energetic) -> Age (young) -> Origin (Indonesian) -> Purpose (badminton).<br>• Pernyataan 4: SALAH — Dimensi ukuran (Size) harus mendahului bentuk (Shape): 'A large circular brown dining table'.",
    "grammarNote": "Mastery of OSASCOMP: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose."
  },
  {
    "id": 19,
    "source": "Sumber: Laporan Ilmiah Populasi Satwa Dilindungi — Balai Taman Nasional Ujung Kulon & WWF",
    "type": "complex_matrix",
    "title": "Complex Multiple Choice: Scientific Report Facts (Javan Rhinoceros)",
    "stimulusTitle": "Scientific Report: The Endangered Javan Rhinoceros",
    "stimulusBody": "The Javan rhinoceros (<em>Rhinoceros sondaicus</em>) is one of the most critically endangered large mammals on Earth. Currently, fewer than eighty individuals survive, strictly confined to the tropical lowland rainforests of Ujung Kulon National Park at the western tip of Java, Indonesia.<br><br>Unlike their African relatives, Javan rhinos possess only a single horn, which rarely exceeds twenty-five centimeters in length. They are plant-eating animals that live alone and feed on tender shoots, twigs, and fallen fruits. Because rhinos possess poor eyesight, their acute sense of smell and hearing are vital for detecting dangerous predators and humans.",
    "prompt": "Based on the scientific report excerpt above, determine whether each statement is **TRUE** or **FALSE**:",
    "matrixStatements": [
      {
        "statement": "Javan rhinoceroses can currently be found in the wild solely within Ujung Kulon National Park.",
        "isCorrect": true
      },
      {
        "statement": "Both male and female Javan rhinos possess two large facial horns measuring over one meter in length.",
        "isCorrect": false
      },
      {
        "statement": "Javan rhinos are carnivorous predators that hunt large prey in social packs.",
        "isCorrect": false
      },
      {
        "statement": "Acute senses of smell and hearing effectively compensate for the Javan rhino's poor eyesight.",
        "isCorrect": true
      }
    ],
    "explanation": "• Pernyataan 1: BENAR — Badak Jawa saat ini hanya bertahan hidup di habitat terbatas Taman Nasional Ujung Kulon.<br>• Pernyataan 2: SALAH — Badak Jawa bercula satu ('single horn') dengan panjang cula kurang dari 25 cm.<br>• Pernyataan 3: SALAH — Badak Jawa adalah satwa herbivora yang hidup menyendiri (soliter), bukan pemangsa kelompok.<br>• Pernyataan 4: BENAR — Indra pendengaran dan penciuman tajam mengompensasi daya penglihatan badak yang terbatas.",
    "grammarNote": "Scientific Report Comprehension: General classification, morphological features, habitat."
  },
  {
    "id": 20,
    "source": "Sumber: Laporan Ilmiah Populasi Satwa Dilindungi — Balai Taman Nasional Ujung Kulon & WWF",
    "type": "complex_matrix",
    "title": "Complex Multiple Choice: Conditional Sentence Structures",
    "stimulusTitle": "Grammar Focus: Real and Unreal Conditional Sentence Patterns",
    "stimulusBody": "Analyze the structural and logical validity of each conditional sentence:",
    "prompt": "Determine whether each conditional sentence formulation is **TRUE** (grammatically sound) or **FALSE** (grammatically flawed):",
    "matrixStatements": [
      {
        "statement": "If students protect the coral reefs diligently, marine biodiversity will flourish.",
        "isCorrect": true
      },
      {
        "statement": "If I was you, I will definitely attend the Kudus cultural heritage workshop tomorrow.",
        "isCorrect": false
      },
      {
        "statement": "If the national park rangers had more patrol boats, they would monitor the coast more effectively.",
        "isCorrect": true
      },
      {
        "statement": "If the weather is sunny on Friday, we would have visited the botanical sanctuary.",
        "isCorrect": false
      }
    ],
    "explanation": "• Pernyataan 1: BENAR — Conditional Type 1 menggunakan pola: 'If + Simple Present, will + Verb base'.<br>• Pernyataan 2: SALAH — Subjunctive pengandaian hipotesis baku menggunakan 'If I WERE you, I WOULD...'.<br>• Pernyataan 3: BENAR — Conditional Type 2 menggunakan pola: 'If + Simple Past, would + Verb base'.<br>• Pernyataan 4: SALAH — Pengandaian realistis masa depan harus menggunakan 'If the weather is sunny, we WILL visit'.",
    "grammarNote": "Conditional Sentences Type 1 & Type 2 Standard Formulations."
  },
  {
    "id": 21,
    "source": "Sumber: Modul Pembelajaran Teks Deskriptif Atlet — BSKAP Kemendikbudristek",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
    "stimulusTitle": "Writing Focus: Descriptive Portrayal of an Inspiring Athlete",
    "stimulusBody": "A writer intends to portray an internationally accomplished athlete using vivid descriptive adjectives and standard Simple Present Tense.",
    "prompt": "Which **TWO (2)** sentences below correctly use descriptive adjectives and the Simple Present Tense to portray an inspiring athlete?",
    "options": [
      {
        "key": "A",
        "text": "She consistently demonstrates extraordinary focus and razor-sharp accuracy during international tournaments."
      },
      {
        "key": "B",
        "text": "She will bought an expensive carbon arrow tomorrow morning at the supermarket."
      },
      {
        "key": "C",
        "text": "Her athletic posture remains remarkably calm under intense competitive pressure."
      },
      {
        "key": "D",
        "text": "She was winning the match because the referee has slept during the game."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Kalimat yang menggunakan Simple Present Tense secara benar ('demonstrates', 'remains') dan kata sifat deskriptif bermakna tinggi ('extraordinary focus', 'athletic posture') merupakan pilihan yang tepat. Kalimat lainnya salah tata bahasa ('will bought') atau tidak koheren.",
    "grammarNote": "Selection of grammatically sound descriptive sentences with Present Tense and Adjectives."
  },
  {
    "id": 22,
    "source": "Sumber: Modul Pembelajaran Teks Report Ilmiah — BSKAP Kemendikbudristek",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
    "stimulusTitle": "Genre Focus: Distinctive Language Features of Scientific Report Texts",
    "stimulusBody": "Scientific report texts communicate factual classifications and descriptions of natural and social phenomena.",
    "prompt": "Which **TWO (2)** linguistic features are characteristic of scientific Report texts?",
    "options": [
      {
        "key": "A",
        "text": "Frequent use of first-person pronouns ('I', 'My family') to convey subjective personal emotions."
      },
      {
        "key": "B",
        "text": "Use of objective technical vocabulary and general nouns to describe classes of things."
      },
      {
        "key": "C",
        "text": "Dramatic spoken dialogues between mythical protagonists and antagonists in folklore."
      },
      {
        "key": "D",
        "text": "Frequent use of timeless Simple Present Tense and Passive Voice to highlight observed natural processes."
      }
    ],
    "correctAnswer": [
      "B",
      "D"
    ],
    "explanation": "Teks Report ilmiah menekankan objektivitas melalui penggunaan istilah teknis ilmiah, general nouns, serta kalimat pasif untuk memfokuskan proses atau fenomena ilmiah tanpa bias personal.",
    "grammarNote": "Generic Language Features of Scientific Report Text."
  },
  {
    "id": 23,
    "source": "Sumber: Silabus Kosakata Oxford 3000 Level A2 — Oxford University Press",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
    "stimulusTitle": "Lexical Study: Oxford 3000 Word Family for 'Conservation'",
    "stimulusBody": "Understanding parts of speech and derivational affixes is essential for mastering academic English vocabulary.",
    "prompt": "Which **TWO (2)** statements correctly explain word forms related to 'conservation'?",
    "options": [
      {
        "key": "A",
        "text": "'Conservation' (noun) denotes the careful preservation and protection of natural environments and wildlife."
      },
      {
        "key": "B",
        "text": "'Conserve' (verb) means to exhaust natural resources as rapidly as possible without restraint."
      },
      {
        "key": "C",
        "text": "'Conservationist' (noun) refers to a person who actively advocates for or works toward environmental protection."
      },
      {
        "key": "D",
        "text": "'Conservatively' (adverb) is always used to describe severe industrial pollution in coastal regions."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "'conservation' adalah nomina pelestarian lingkungan, sedangkan 'endangered' adalah adjektiva terancam punah (misalnya: endangered species). Bentuk 'conservatively' dan 'dangerously' tidak sesuai konteks kelas kata.",
    "grammarNote": "Word Formations: Noun, Adjective, Adverb derivation from Oxford 3000 core lexis."
  },
  {
    "id": 24,
    "source": "Sumber: Materi Fungsional Stating Intentions — Modul Ajar Fase E Kelas X",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
    "stimulusTitle": "Language Function: Expressing Intentions and Future Plans",
    "stimulusBody": "Review the grammatical conventions for expressing future intentions and plans in communicative English.",
    "prompt": "Which **TWO (2)** sentences correctly express future intentions or plans using 'intend to' or 'be going to'?",
    "options": [
      {
        "key": "A",
        "text": "Our eco-club intends to plant one hundred mangrove seedlings along the Jepara coastline."
      },
      {
        "key": "B",
        "text": "They is going to visiting the national museum last Tuesday."
      },
      {
        "key": "C",
        "text": "We are going to organize an environmental workshop for high school students next month."
      },
      {
        "key": "D",
        "text": "She intend to cleans the entire laboratory alone without gloves."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "'I am planning to...' dan 'We intend to...' adalah formula baku untuk menyatakan rencana atau intensi (stating intentions). Pilihan lainnya menyatakan penyesalan masa lalu atau ketidakpedulian.",
    "grammarNote": "Functional Expressions: 'planning to + V1', 'intend to + V1', 'would like to + V1'."
  },
  {
    "id": 25,
    "source": "Sumber: Silabus Kosakata Fungsional Bahasa Inggris — MGMP Bahasa Inggris SMA",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
    "stimulusTitle": "Grammar Focus: Passive Voice Constructions in Scientific Descriptions",
    "stimulusBody": "The passive voice is frequently employed in technical explanations to emphasize the action or recipient of an action rather than the performer.",
    "prompt": "Which **TWO (2)** sentences demonstrate grammatically accurate passive voice constructions describing scientific processes?",
    "options": [
      {
        "key": "A",
        "text": "The condensed steam is cooled and pumped back underground into the volcanic reservoir."
      },
      {
        "key": "B",
        "text": "The engineer pumps the water into the turbine generator every morning."
      },
      {
        "key": "C",
        "text": "Solar radiation is absorbed by photovoltaic silicon cells to generate electricity."
      },
      {
        "key": "D",
        "text": "The electric current flows quickly across the copper transmission wires."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Kalimat dengan pola pasif 'are + Verb 3' yang sempurna adalah 'wastes are collected' dan 'herbs are carefully preserved'. Kalimat lainnya merupakan kalimat aktif atau memiliki kesalahan gramatikal seperti 'will delivers'.",
    "grammarNote": "Present Simple Passive Voice: S + is/am/are + V3 (+ by Agent)."
  },
  {
    "id": 26,
    "source": "Sumber Otentik: Profil Potensi Energi Panas Bumi Jawa Tengah — PT Geo Dipa Energi (Persero) & Kementerian ESDM Republik Indonesia",
    "type": "single_choice",
    "title": "Reading Comprehension: Report Text",
    "stimulusTitle": "Text 2: Clean Geothermal Energy in the Dieng Plateau, Central Java",
    "stimulusBody": "Geothermal energy is a clean, renewable energy resource that comes from natural heat stored deep inside the Earth. In Central Java, the volcanic highland of the Dieng Plateau (located across Banjarnegara and Wonosobo regencies) is one of Indonesia's most important locations for geothermal power plants (PLTP Dieng).<br><br>Electricity production from geothermal energy works in a simple, sustainable way. Deep wells are drilled into underground reservoirs of hot water and natural steam. This high-pressure steam rises through strong pipes to turn large turbine generators, which convert the steam's energy into clean electricity. Afterward, the condensed water is cooled and pumped back underground into the reservoir, keeping the system environmentally friendly and producing almost zero smoke or carbon emissions.<br><br>Unlike solar panels and wind turbines that depend on sunny or windy weather, geothermal power plants can generate electricity steadily twenty-four hours a day without stopping. Therefore, developing geothermal clean energy in Central Java is an <u>essential</u> milestone to supply reliable electricity while protecting the natural environment.",
    "prompt": "According to the second paragraph, how is kinetic energy transformed into electricity in a geothermal power plant?",
    "options": [
      {
        "key": "A",
        "text": "By burning fossil fuel coals to boil surface river water."
      },
      {
        "key": "B",
        "text": "By splitting radioactive atoms inside a heavy chemical reactor."
      },
      {
        "key": "C",
        "text": "By exposing photovoltaic panels directly to midday tropical sunlight."
      },
      {
        "key": "D",
        "text": "By channeling high-pressure underground steam to drive turbine generators."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Paragraf kedua menjelaskan: 'This high-pressure thermal steam is channeled upwards through specialized pipeline networks to drive turbine generators, which convert kinetic energy into electrical power'.",
    "grammarNote": "Cause-Effect & Mechanical Sequence Analysis in Scientific Texts."
  },
  {
    "id": 27,
    "source": "Sumber: Profil Potensi Energi Panas Bumi Jawa Tengah — PT Geo Dipa Energi (Persero) & Kementerian ESDM RI",
    "type": "single_choice",
    "title": "Reading Comprehension: Environmental Advantage",
    "stimulusTitle": "Text 2: Clean Geothermal Energy in the Dieng Plateau, Central Java",
    "stimulusBody": "Geothermal energy is a clean, renewable energy resource that comes from natural heat stored deep inside the Earth. In Central Java, the volcanic highland of the Dieng Plateau (located across Banjarnegara and Wonosobo regencies) is one of Indonesia's most important locations for geothermal power plants (PLTP Dieng).<br><br>Electricity production from geothermal energy works in a simple, sustainable way. Deep wells are drilled into underground reservoirs of hot water and natural steam. This high-pressure steam rises through strong pipes to turn large turbine generators, which convert the steam's energy into clean electricity. Afterward, the condensed water is cooled and pumped back underground into the reservoir, keeping the system environmentally friendly and producing almost zero smoke or carbon emissions.<br><br>Unlike solar panels and wind turbines that depend on sunny or windy weather, geothermal power plants can generate electricity steadily twenty-four hours a day without stopping. Therefore, developing geothermal clean energy in Central Java is an <u>essential</u> milestone to supply reliable electricity while protecting the natural environment.",
    "prompt": "Why is the geothermal electricity generation described as a 'closed-loop system'?",
    "options": [
      {
        "key": "A",
        "text": "Because condensed steam is cooled and pumped back back into the underground reservoir with zero emissions."
      },
      {
        "key": "B",
        "text": "Because the power plant operates exclusively behind locked concrete gates."
      },
      {
        "key": "C",
        "text": "Because electricity is only delivered to nearby government factories."
      },
      {
        "key": "D",
        "text": "Because the underground wells are permanently abandoned after one month."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Teks Report ilmiah memaparkan fenomena panas bumi (geothermal energy) secara objektif dan sistematis.",
    "grammarNote": "Technical Term Definition & Closed-Loop Cycle."
  },
  {
    "id": 28,
    "source": "Sumber: Profil Potensi Energi Panas Bumi Jawa Tengah — PT Geo Dipa Energi (Persero) & Kementerian ESDM RI",
    "type": "single_choice",
    "title": "Reading Comprehension: Comparative Logic",
    "stimulusTitle": "Text 2: Clean Geothermal Energy in the Dieng Plateau, Central Java",
    "stimulusBody": "Geothermal energy is a clean, renewable energy resource that comes from natural heat stored deep inside the Earth. In Central Java, the volcanic highland of the Dieng Plateau (located across Banjarnegara and Wonosobo regencies) is one of Indonesia's most important locations for geothermal power plants (PLTP Dieng).<br><br>Electricity production from geothermal energy works in a simple, sustainable way. Deep wells are drilled into underground reservoirs of hot water and natural steam. This high-pressure steam rises through strong pipes to turn large turbine generators, which convert the steam's energy into clean electricity. Afterward, the condensed water is cooled and pumped back underground into the reservoir, keeping the system environmentally friendly and producing almost zero smoke or carbon emissions.<br><br>Unlike solar panels and wind turbines that depend on sunny or windy weather, geothermal power plants can generate electricity steadily twenty-four hours a day without stopping. Therefore, developing geothermal clean energy in Central Java is an <u>essential</u> milestone to supply reliable electricity while protecting the natural environment.",
    "prompt": "What major advantage does geothermal power have compared to solar and wind energy?",
    "options": [
      {
        "key": "A",
        "text": "It requires no initial capital investment and no engineering equipment."
      },
      {
        "key": "B",
        "text": "It provides reliable baseload power that does not depend on fluctuating weather conditions."
      },
      {
        "key": "C",
        "text": "It can be easily transported in plastic barrels to remote villages."
      },
      {
        "key": "D",
        "text": "It produces large amounts of smoke that warm up the cold mountain climate."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Prinsip kerja pembangkit geotermal memanfaatkan uap panas alami bumi untuk memutar generator turbin listrik.",
    "grammarNote": "Contrasting Linkers: 'Unlike + Noun Phrase, Subject + Verb'."
  },
  {
    "id": 29,
    "source": "Sumber: Profil Potensi Energi Panas Bumi Jawa Tengah — PT Geo Dipa Energi (Persero) & Kementerian ESDM RI",
    "type": "single_choice",
    "title": "Reading Comprehension: Vocabulary in Context",
    "stimulusTitle": "Text 2: Clean Geothermal Energy in the Dieng Plateau, Central Java",
    "stimulusBody": "Geothermal energy is a clean, renewable energy resource that comes from natural heat stored deep inside the Earth. In Central Java, the volcanic highland of the Dieng Plateau (located across Banjarnegara and Wonosobo regencies) is one of Indonesia's most important locations for geothermal power plants (PLTP Dieng).<br><br>Electricity production from geothermal energy works in a simple, sustainable way. Deep wells are drilled into underground reservoirs of hot water and natural steam. This high-pressure steam rises through strong pipes to turn large turbine generators, which convert the steam's energy into clean electricity. Afterward, the condensed water is cooled and pumped back underground into the reservoir, keeping the system environmentally friendly and producing almost zero smoke or carbon emissions.<br><br>Unlike solar panels and wind turbines that depend on sunny or windy weather, geothermal power plants can generate electricity steadily twenty-four hours a day without stopping. Therefore, developing geothermal clean energy in Central Java is an <u>essential</u> milestone to supply reliable electricity while protecting the natural environment.",
    "prompt": "The word 'essential' in the sentence is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "Dangerous and harmful"
      },
      {
        "key": "B",
        "text": "Minor and not needed"
      },
      {
        "key": "C",
        "text": "Very important and necessary for success"
      },
      {
        "key": "D",
        "text": "Temporary and unreliable"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kata 'sustainable' bersinonim dengan 'renewable and ecologically sound' (terbarukan dan berkelanjutan).",
    "grammarNote": "Academic Lexis: pivotal, crucial, very important, essential."
  },
  {
    "id": 30,
    "source": "Sumber: Profil Potensi Energi Panas Bumi Jawa Tengah — PT Geo Dipa Energi (Persero) & Kementerian ESDM RI",
    "type": "single_choice",
    "title": "Reading Comprehension: Discourse Logic",
    "stimulusTitle": "Text 2: Clean Geothermal Energy in the Dieng Plateau, Central Java",
    "stimulusBody": "Geothermal energy is a clean, renewable energy resource that comes from natural heat stored deep inside the Earth. In Central Java, the volcanic highland of the Dieng Plateau (located across Banjarnegara and Wonosobo regencies) is one of Indonesia's most important locations for geothermal power plants (PLTP Dieng).<br><br>Electricity production from geothermal energy works in a simple, sustainable way. Deep wells are drilled into underground reservoirs of hot water and natural steam. This high-pressure steam rises through strong pipes to turn large turbine generators, which convert the steam's energy into clean electricity. Afterward, the condensed water is cooled and pumped back underground into the reservoir, keeping the system environmentally friendly and producing almost zero smoke or carbon emissions.<br><br>Unlike solar panels and wind turbines that depend on sunny or windy weather, geothermal power plants can generate electricity steadily twenty-four hours a day without stopping. Therefore, developing geothermal clean energy in Central Java is an <u>essential</u> milestone to supply reliable electricity while protecting the natural environment.",
    "prompt": "What would most likely happen if Central Java maximizes its geothermal potential?",
    "options": [
      {
        "key": "A",
        "text": "Indonesia will completely abandon its 2060 climate commitments."
      },
      {
        "key": "B",
        "text": "Electricity supply in Central Java will become more stable and produce less pollution."
      },
      {
        "key": "C",
        "text": "The region will face severe electricity blackouts during summer months."
      },
      {
        "key": "D",
        "text": "Greenhouse gas emissions from electricity generation will significantly decrease."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Keunggulan utama energi geotermal dibanding bahan bakar fosil adalah tingkat emisi karbon yang sangat rendah.",
    "grammarNote": "Cause-and-Effect Inference in Academic Texts."
  },
  {
    "id": 31,
    "source": "Sumber: Profil Biografi Atlet Bulutangkis Nasional — PBSI & Federasi Bulutangkis Dunia (BWF)",
    "type": "single_choice",
    "title": "Grammar Essentials: Subject-Verb Agreement",
    "stimulusTitle": "Kaidah Kesesuaian Subjek dan Kata Kerja",
    "stimulusBody": "Pilihlah bentuk kata kerja yang tepat untuk melengkapi kalimat berikut:",
    "prompt": "The dedicated biology teacher, accompanied by twenty enthusiastic students, [...] currently observing the rare orchid species in the school conservatory.",
    "options": [
      {
        "key": "A",
        "text": "is"
      },
      {
        "key": "B",
        "text": "are"
      },
      {
        "key": "C",
        "text": "were"
      },
      {
        "key": "D",
        "text": "have been"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Subjek utama kalimat adalah 'The dedicated biology teacher' (tunggal/singular). Frasa penjelas 'accompanied by twenty enthusiastic students' tidak mengubah jumlah subjek utama. Keterangan waktu 'currently' menunjukkan waktu sekarang, sehingga kata kerja yang benar adalah 'is'.",
    "grammarNote": "Subject-Verb Agreement with Intervening Prepositional Phrases (accompanied by, together with, as well as)."
  },
  {
    "id": 32,
    "source": "Sumber: Profil Biografi Atlet Bulutangkis Nasional — PBSI & Federasi Bulutangkis Dunia (BWF)",
    "type": "single_choice",
    "title": "Grammar Essentials: Passive Voice Transformation",
    "stimulusTitle": "Transformasi Kalimat Aktif ke Pasif",
    "stimulusBody": "Perhatikan kalimat aktif berikut:<br><em>'Our school committee annually awards full scholarships to exceptional athletes.'</em>",
    "prompt": "Manakah bentuk kalimat pasif (Passive Voice) yang paling tepat?",
    "options": [
      {
        "key": "A",
        "text": "Full scholarships is annually awarded to exceptional athletes by our school committee."
      },
      {
        "key": "B",
        "text": "Full scholarships are annually awarded to exceptional athletes by our school committee."
      },
      {
        "key": "C",
        "text": "Full scholarships were annually awarded to exceptional athletes by our school committee."
      },
      {
        "key": "D",
        "text": "Full scholarships have been awarding exceptional athletes by our school committee."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Objek 'Full scholarships' adalah jamak (plural). Tense kalimat aktif adalah Simple Present Tense ('awards'). Maka rumus pasifnya: Object (plural) + ARE + Verb 3 (awarded) + by Agent.",
    "grammarNote": "Passive Voice in Present Tense for Plural Objects."
  },
  {
    "id": 33,
    "source": "Sumber: Profil Biografi Atlet Bulutangkis Nasional — PBSI & Federasi Bulutangkis Dunia (BWF)",
    "type": "single_choice",
    "title": "Grammar Essentials: Past Continuous with 'While'",
    "stimulusTitle": "Tata Bahasa Klausa Waktu Lampau",
    "stimulusBody": "Lengkapilah kalimat berikut dengan kombinasi bentuk kata kerja yang benar:",
    "prompt": "While the students [...] the museum artifacts, the tour guide [...] an inspiring story about Sunan Kudus.",
    "options": [
      {
        "key": "A",
        "text": "examined / was narrating"
      },
      {
        "key": "B",
        "text": "are examining / narrates"
      },
      {
        "key": "C",
        "text": "were examining / narrated"
      },
      {
        "key": "D",
        "text": "had examined / narrating"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Urutan kata sifat OSASCOMP yang benar untuk mendeskripsikan batik adalah: Opinion (exquisite) -> Origin (Javanese) -> Material (silk).",
    "grammarNote": "Past Continuous ('were examining') compared with Simple Past ('narrated') using time conjunction 'While'."
  },
  {
    "id": 34,
    "source": "Sumber: Profil Biografi Atlet Bulutangkis Nasional — PBSI & Federasi Bulutangkis Dunia (BWF)",
    "type": "single_choice",
    "title": "Grammar Essentials: Relative Pronoun 'Whose'",
    "stimulusTitle": "Klausa Relatif Kepemilikan (Relative Clauses)",
    "stimulusBody": "Lengkapilah kalimat berikut dengan kata ganti penghubung (relative pronoun) yang tepat:",
    "prompt": "We recently interviewed the young inventor [...] automated solar water pump won the provincial innovation championship.",
    "options": [
      {
        "key": "A",
        "text": "who"
      },
      {
        "key": "B",
        "text": "whom"
      },
      {
        "key": "C",
        "text": "which"
      },
      {
        "key": "D",
        "text": "whose"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bentuk Simple Present Tense orang ketiga tunggal (She/He/It) membutuhkan akhiran -s/-es pada kata kerja: 'preserves'.",
    "grammarNote": "Possessive Relative Clause: Person + whose + Noun Phrase."
  },
  {
    "id": 35,
    "source": "Sumber: Profil Biografi Atlet Bulutangkis Nasional — PBSI & Federasi Bulutangkis Dunia (BWF)",
    "type": "single_choice",
    "title": "Grammar Essentials: Conditional Sentence Type 1",
    "stimulusTitle": "Kalimat Pengandaian Kemungkinan Masa Depan",
    "stimulusBody": "Lengkapilah kalimat pengandaian Type 1 berikut dengan bentuk kata kerja yang tepat:",
    "prompt": "If our school [...] the zero-plastic policy consistently, we [...] a significant reduction in campus waste by December.",
    "options": [
      {
        "key": "A",
        "text": "enforces / will achieve"
      },
      {
        "key": "B",
        "text": "enforced / will achieved"
      },
      {
        "key": "C",
        "text": "will enforce / achieve"
      },
      {
        "key": "D",
        "text": "enforcing / would achieve"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ungkapan 'I am planning to conduct' adalah pola menyatakan niat (stating intention) yang gramatikal.",
    "grammarNote": "Conditional Type 1: Real and possible conditions in the present/future."
  },
  {
    "id": 36,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Vocabulary: Oxford 3000 (CEFR A2/B1)",
    "stimulusTitle": "Pemilihan Kata Kontekstual",
    "stimulusBody": "Pilihlah kosakata yang paling tepat untuk melengkapi kalimat rumpang di bawah ini:",
    "prompt": "Athletes must possess extraordinary mental [...] to overcome intense pressure and achieve victory in international tournaments.",
    "options": [
      {
        "key": "A",
        "text": "hesitation"
      },
      {
        "key": "B",
        "text": "resilience"
      },
      {
        "key": "C",
        "text": "ignorance"
      },
      {
        "key": "D",
        "text": "pollution"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kata depan (preposition) yang tepat untuk menerangkan posisi di bawah permukaan air adalah 'beneath' atau 'under'.",
    "grammarNote": "Abstract Nouns in Sports Psychology: resilience, tenacity, discipline."
  },
  {
    "id": 37,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Vocabulary: Collocation with 'Take'",
    "stimulusTitle": "Kolokasi Kata Bahasa Inggris",
    "stimulusBody": "Pilihlah kolokasi yang tepat dalam konteks tindakan pencegahan lingkungan:",
    "prompt": "Local environmentalists urge the municipal government to [...] immediate precautions against river pollution.",
    "options": [
      {
        "key": "A",
        "text": "do"
      },
      {
        "key": "B",
        "text": "make"
      },
      {
        "key": "C",
        "text": "take"
      },
      {
        "key": "D",
        "text": "hold"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Konektor penambahan informasi 'In addition' digunakan untuk memperkuat paparan ciri fisik flora/fauna.",
    "grammarNote": "English Collocations: take precautions, take measures, take action."
  },
  {
    "id": 38,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Functional Expressions: Asking for Clarification",
    "stimulusTitle": "Ungkapan Meminta Klarifikasi",
    "stimulusBody": "Seorang siswa tidak mendengar penjelasan instruksi guru secara jelas di laboratorium bahasa.",
    "prompt": "Manakah ungkapan yang paling santun dan baku (polite register) untuk meminta klarifikasi penjelasan?",
    "options": [
      {
        "key": "A",
        "text": "What? Say that again louder!"
      },
      {
        "key": "B",
        "text": "Stop talking and let me sleep."
      },
      {
        "key": "C",
        "text": "I don't care what you just said."
      },
      {
        "key": "D",
        "text": "Pardon me, Sir. Could you please clarify the second step of the procedure?"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bentuk pasif Simple Present Tense untuk subjek tunggal 'The historical artifact' adalah: is + Verb 3 ('is displayed').",
    "grammarNote": "Polite Request & Clarification: Modal 'could', 'pardon me', polite inquiry."
  },
  {
    "id": 39,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Functional Expressions: Expressing Stance / Agreement",
    "stimulusTitle": "Ungkapan Persetujuan Terhadap Argumen",
    "stimulusBody": "Dalam diskusi kelas mengenai pelestarian cagar budaya lokal:<br>Budi: 'I firmly believe that schools in Kudus should organize regular heritage tours to instill pride in our local traditions.'",
    "prompt": "Manakah respons yang menunjukkan persetujuan penuh secara formal (full agreement)?",
    "options": [
      {
        "key": "A",
        "text": "I couldn't agree more; connecting students with historical roots is essential."
      },
      {
        "key": "B",
        "text": "I strongly oppose your idea because heritage has no value."
      },
      {
        "key": "C",
        "text": "That is totally irrelevant to our education."
      },
      {
        "key": "D",
        "text": "I agree with you, but I don't care at all."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata sifat deskriptif 'breathtaking' mengekspresikan kekaguman mendalam terhadap pemandangan alam Karimunjawa.",
    "grammarNote": "Expressing Full Agreement: 'I couldn't agree more', 'You have a very valid point'."
  },
  {
    "id": 40,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Vocabulary: Oxford 3000 Academic Conjunction",
    "stimulusTitle": "Kata Hubung Kausal & Penjelas",
    "stimulusBody": "Lengkapilah kalimat berikut dengan konjungsi internal yang tepat:",
    "prompt": "Solar panels produce clean energy without greenhouse gases; [...], their initial installation costs have become increasingly affordable.",
    "options": [
      {
        "key": "A",
        "text": "otherwise"
      },
      {
        "key": "B",
        "text": "furthermore"
      },
      {
        "key": "C",
        "text": "instead"
      },
      {
        "key": "D",
        "text": "despite"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kalimat penutup teks deskriptif merangkum keistimewaan tempat dan kesan mendalam bagi para pengunjung.",
    "grammarNote": "Transitions of Addition: furthermore, moreover, in addition, additionally."
  }
];
}




let studentIdentity = {
  tingkat: "X",
  rombel: "1",
  presensi: "1",
  nama: "Siswa Kelas X (Fase E)"
};

let currentMode = "practice";
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
    // NOTE: DO NOT shuffle complex_matrix statements so that Pernyataan 1, 2, 3, 4 strictly match table rows
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
        tingkat: portalData.tingkat || "X",
        rombel: portalData.rombel || "1",
        presensi: portalData.presensi || "1",
        nama: portalData.nama || "Siswa Kelas X (Fase E)"
      };
      currentMode = portalData.mode || "practice";
      startFreshTest();
      return;
    }
  } catch (e) {
    console.warn("Portal data error:", e);
  }
  document.getElementById("identity-prompt-modal").style.display = "flex";
}

function handleDirectIdentitySubmit(e) {
  e.preventDefault();
  const nama = document.getElementById("direct-nama").value.trim();
  const rombel = document.getElementById("direct-rombel").value;
  const presensi = document.getElementById("direct-presensi").value.trim();
  const mode = document.getElementById("direct-mode").value;
  studentIdentity = { tingkat: "X", rombel, presensi, nama };
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

  const rawBank = (typeof getGrade10Questions === "function") ? getGrade10Questions() :
                  (typeof getGrade11AsasQuestions === "function") ? getGrade11AsasQuestions() :
                  (typeof getGrade11AstsQuestions === "function") ? getGrade11AstsQuestions() :
                  (typeof getGrade11TLAsasQuestions === "function") ? getGrade11TLAsasQuestions() :
                  (typeof getGrade11TLAstsQuestions === "function") ? getGrade11TLAstsQuestions() :
                  (typeof getGrade12AsasQuestions === "function") ? getGrade12AsasQuestions() :
                  (typeof getGrade12AstsQuestions === "function") ? getGrade12AstsQuestions() :
                  (typeof getGrade12TLAsasQuestions === "function") ? getGrade12TLAsasQuestions() :
                  (typeof getGrade12TLAstsQuestions === "function") ? getGrade12TLAstsQuestions() : [];

  questions = randomizeQuestionOptions(rawBank);

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
  modeBadge.textContent = (currentMode === "practice") ? "🎯 Mode Latihan ASAS Gasal" : "📝 Asesmen Resmi ASAS Gasal";
  modeBadge.className = "badge-mode " + (currentMode === "practice" ? "practice" : "exam");
  document.getElementById("side-student-name").textContent = studentIdentity.nama;
  document.getElementById("side-student-meta").textContent = `Kelas X (Fase E) | Rombel ${studentIdentity.rombel} | Presensi ${studentIdentity.presensi}`;
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
        srcEl.innerHTML = `<span style="font-size:0.75rem; color:#64748b; font-style:italic;">Source: ${q.source}</span>`;
      } else {
        srcEl.style.display = "none";
      }
    }
  } else {
    stimBox.style.display = "none";
  }

  const promptBox = document.getElementById("question-prompt-text");
  promptBox.innerHTML = q.prompt;

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
  if (flaggedQuestions.has(index)) flagBtn.textContent = "🔄 Hapus Ragu";
  else flagBtn.textContent = "🟡 Ragu-ragu";

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
      if (isExamSubmitted) return;
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

// Audio Engine Multi-Speaker
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
  const live = window.speechSynthesis.getVoices();
  if (live && live.length > 0) {
    cachedVoices = live;
    return live;
  }
  return cachedVoices || [];
}

if (typeof window !== "undefined" && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

function selectAudioVoice(role, gender, lang) {
  const voices = getAvailableVoices();
  if (!voices || voices.length === 0) return null;

  if (lang && lang.startsWith("id")) {
    const idVoice = voices.find(v => (v.lang && (v.lang.startsWith("id") || v.lang.startsWith("ID"))) || v.name.toLowerCase().includes("indonesia") || v.name.includes("Gadis") || v.name.includes("Ardi"));
    if (idVoice) return idVoice;
  }

  const enVoices = voices.filter(v => v.lang && (v.lang.startsWith("en") || v.lang.startsWith("EN")));
  if (enVoices.length === 0) return voices[0];

  const femaleKeywords = ["female", "woman", "girl", "zira", "jenny", "aria", "samantha", "victoria", "karen", "fiona", "moira", "tessa", "clara", "libby", "ana", "sonia", "natasha", "google us english", "google uk english female"];
  const maleKeywords = ["male", "man", "boy", "david", "guy", "mark", "ryan", "george", "daniel", "alex", "fred", "oliver", "steffan", "google uk english male", "james", "tom", "richard"];

  const matchedFemale = enVoices.find(v => femaleKeywords.some(k => v.name.toLowerCase().includes(k)));
  let matchedMale = enVoices.find(v => maleKeywords.some(k => v.name.toLowerCase().includes(k)));

  // Ensure male and female are paired with different voices if at least 2 english voices exist
  if (matchedFemale && matchedMale && matchedFemale.name === matchedMale.name && enVoices.length >= 2) {
    matchedMale = enVoices.find(v => v.name !== matchedFemale.name) || matchedMale;
  }
  if (!matchedMale && matchedFemale && enVoices.length >= 2) {
    matchedMale = enVoices.find(v => v.name !== matchedFemale.name);
  }
  if (!matchedFemale && matchedMale && enVoices.length >= 2) {
    const altFemale = enVoices.find(v => v.name !== matchedMale.name);
    if (altFemale && gender === "female") return altFemale;
  }

  if (gender === "female") {
    return matchedFemale || enVoices[0];
  } else if (gender === "male") {
    return matchedMale || (enVoices.length > 1 ? enVoices[1] : enVoices[0]);
  }

  // Default narrator voice
  const narratorVoice = enVoices.find(v => v.name.includes("Natural") || v.name.includes("David") || v.name.includes("Google") || v.name.includes("Aria")) || enVoices[0];
  return narratorVoice;
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
  if (playBtn) playBtn.style.backgroundColor = "var(--royal-blue)";
  if (statusText) statusText.textContent = "Klik 'Putar Audio' untuk mendengarkan kembali.";
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
    if (playText) playText.textContent = "Putar Ulang";
    if (playBtn) playBtn.style.backgroundColor = "var(--accent-teal)";
    if (statusText) statusText.textContent = "✅ Pemutaran audio selesai. Silakan pilih jawaban Anda.";
    return;
  }
  const seg = audioQueue[audioQueueIdx++];
  const utt = new SpeechSynthesisUtterance(seg.text);
  utt.lang = seg.lang || "en-US";

  const matchedVoice = selectAudioVoice(seg.role, seg.gender, seg.lang);
  if (matchedVoice) utt.voice = matchedVoice;

  if (seg.pitch !== undefined) {
    utt.pitch = seg.pitch;
  } else if (seg.gender === "female") {
    utt.pitch = 1.30;
  } else if (seg.gender === "male") {
    utt.pitch = 0.75;
  } else {
    utt.pitch = 1.0;
  }

  let rateMult = seg.rateMultiplier || 1.0;
  if (seg.gender === "female" && !seg.rateMultiplier) rateMult = 1.04;
  else if (seg.gender === "male" && !seg.rateMultiplier) rateMult = 0.94;
  else if (seg.role === "narrator" && !seg.rateMultiplier) rateMult = 0.96;
  utt.rate = audioSpeechRate * rateMult;

  utt.onend = () => {
    if (isAudioPlaying) setTimeout(playNextAudioSegment, seg.pauseAfter || 360);
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
  localStorage.removeItem("sabaku_asas_progress_X");

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
        if (JSON.stringify(sortedUser) === JSON.stringify(sortedTarget)) correctCount++;
      }
    } else {
      if (ans === q.correctAnswer) correctCount++;
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
    mode: (currentMode === "practice") ? "Latihan ASAS Gasal Kelas X (Fase E)" : "Asesmen Resmi ASAS Gasal Kelas X (Fase E)",
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
    link.setAttribute("download", `Rekap_Nilai_ASAS Gasal_X_${studentIdentity.nama.replace(/\s+/g, "_")}.csv`);
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
  } catch (e) {}
}

