const fs = require('fs');

const NEW_VOICE_ENGINE = `function getAvailableVoices() {
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

`;

// BLOCK FOR GRADE X (Q4, Q5, Q6)
const BLOCK_X = `
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
        "pitch": 1.30,
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
    "explanation": "Pada rekaman, pembicara perempuan menyatakan kebiasaannya menjaga kebugaran: 'I always maintain a nutritious diet, drink plenty of fresh water, and jog for twenty minutes every morning before studying'. Pilihan D tepat.",
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
        "pitch": 1.30,
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
    "explanation": "Siswi perempuan menyampaikan niatnya: 'intend to visit the mangrove conservation park in Jepara. We want to plant ten mangrove seedlings to prevent coastal erosion'. Pilihan A paling tepat.",
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
        "pitch": 1.30,
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
        "pitch": 1.30,
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
    "explanation": "Siswa laki-laki merespons masukan guru: 'I will modify the font colors to high-contrast white and resize the heading immediately'. Pilihan B tepat.",
    "grammarNote": "Future intention / immediate response: 'will modify', 'resize the heading'."
  },
`;

// BLOCK FOR GRADE XI WAJIB (Q4, Q5, Q6)
const BLOCK_XI_WAJIB = `
  {
    "id": 4,
    "source": "Sumber: Modul Literasi Digital Siswa SMA — Kemendikbudristek & Mafindo",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Short Dialogues",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number four. Listen to a conversation between two students discussing online news.",
        "pauseAfter": 450
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "Did you see the shocking news shared in our class group chat just now?",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Yes, but the headline looks sensational and there is no clear author. We should check trusted national news outlets before forwarding it.",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "That makes total sense. We should never spread unverified rumors.",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Exactly. Verifying sources is our responsibility as smart digital citizens.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What does the male speaker suggest doing before sharing online news?"
      }
    ],
    "stimulusTitle": "Audio Transcript (Listening)",
    "stimulusBody": "<p><strong>Speaker 1 (Female):</strong> Did you see the shocking news shared in our class group chat just now?</p><p><strong>Speaker 2 (Male):</strong> Yes, but the headline looks sensational and there is no clear author. We should check trusted national news outlets before forwarding it.</p><p><strong>Speaker 1 (Female):</strong> That makes total sense. We should never spread unverified rumors.</p><p><strong>Speaker 2 (Male):</strong> Exactly. Verifying sources is our responsibility as smart digital citizens.</p>",
    "prompt": "What does the male student advise before forwarding news from social media?",
    "options": [
      {
        "key": "A",
        "text": "Forward the breaking story immediately to all family contacts."
      },
      {
        "key": "B",
        "text": "Verify the article by checking trusted national news sources."
      },
      {
        "key": "C",
        "text": "Post angry comments on the unverified social media account."
      },
      {
        "key": "D",
        "text": "Ignore school assignments and read clickbait gossip all afternoon."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Siswa laki-laki menyarankan untuk memverifikasi berita: 'We should check trusted national news outlets before forwarding it'. Pilihan B tepat.",
    "grammarNote": "Modals of Recommendation: 'should check trusted outlets before forwarding'."
  },
  {
    "id": 5,
    "source": "Sumber: Panduan Guru Bahasa Inggris Fase F — Kurikulum Merdeka Kemendikbudristek",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Short Dialogues",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number five. Listen to a conversation between two students preparing a drama performance.",
        "pauseAfter": 450
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Which Indonesian folklore did your group choose for the English drama performance?",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "We chose The Legend of Roro Jonggrang. It has powerful drama, especially the consequences of dishonest pride.",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "That is a great choice! What moral lesson will your group emphasize?",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "We want to remind everyone that deceitful shortcuts always bring regret in the end.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What moral message will the students emphasize in their drama performance?"
      }
    ],
    "stimulusTitle": "Audio Transcript (Listening)",
    "stimulusBody": "<p><strong>Speaker 1 (Male):</strong> Which Indonesian folklore did your group choose for the English drama performance?</p><p><strong>Speaker 2 (Female):</strong> We chose The Legend of Roro Jonggrang. It has powerful drama, especially the consequences of dishonest pride.</p><p><strong>Speaker 1 (Male):</strong> That is a great choice! What moral lesson will your group emphasize?</p><p><strong>Speaker 2 (Female):</strong> We want to remind everyone that deceitful shortcuts always bring regret in the end.</p>",
    "prompt": "What moral message will the students emphasize in their drama performance?",
    "options": [
      {
        "key": "A",
        "text": "That deceitful shortcuts and dishonesty always lead to regret."
      },
      {
        "key": "B",
        "text": "That building stone temples overnight is an easy task for anyone."
      },
      {
        "key": "C",
        "text": "That breaking promises is acceptable when facing difficult challenges."
      },
      {
        "key": "D",
        "text": "That physical wealth is the only important measure of human success."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Siswi perempuan menegaskan pesan moral pementasan: 'deceitful shortcuts always bring regret in the end'. Pilihan A paling tepat.",
    "grammarNote": "Noun Clauses & Moral Lexis: 'that deceitful shortcuts always bring regret'."
  },
  {
    "id": 6,
    "source": "Sumber: Program Adiwiyata Sekolah Ramah Lingkungan — Kementerian Lingkungan Hidup dan Kehutanan",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Short Dialogues",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number six. Listen to a dialogue between a teacher and a student council representative.",
        "pauseAfter": 450
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Our student council should lead the zero single-use plastic campaign during recess.",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "Absolutely, sir. If every student brought a reusable water bottle and lunch box, our school waste would drop dramatically.",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Excellent. Let us draft an official announcement for the school assembly on Monday.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What eco-friendly initiative is proposed for the school assembly?"
      }
    ],
    "stimulusTitle": "Audio Transcript (Listening)",
    "stimulusBody": "<p><strong>Teacher (Male):</strong> Our student council should lead the zero single-use plastic campaign during recess.</p><p><strong>Student (Female):</strong> Absolutely, sir. If every student brought a reusable water bottle and lunch box, our school waste would drop dramatically.</p><p><strong>Teacher (Male):</strong> Excellent. Let us draft an official announcement for the school assembly on Monday.</p>",
    "prompt": "What eco-friendly initiative is proposed for the school assembly?",
    "options": [
      {
        "key": "A",
        "text": "Banning lunch breaks entirely during school examination week."
      },
      {
        "key": "B",
        "text": "Encouraging all students to bring reusable bottles and lunch boxes to reduce plastic waste."
      },
      {
        "key": "C",
        "text": "Buying disposable plastic cups in bulk for the school cafeteria."
      },
      {
        "key": "D",
        "text": "Canceling the student council meeting until next semester."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Inisiatif ramah lingkungan yang diusulkan adalah membawa botol dan wadah makan reusable: 'If every student brought a reusable water bottle and lunch box, our school waste would drop dramatically'. Pilihan B tepat.",
    "grammarNote": "Second Conditional (Hypothetical): 'If every student brought..., our school waste would drop'."
  },
`;

// BLOCK FOR GRADE XI TINGKAT LANJUT (Q4, Q5, Q6)
const BLOCK_XI_TL = `
  {
    "id": 4,
    "source": "Sumber: Modul Pembelajaran Bahasa Inggris Tingkat Lanjut Kelas XI — Kemendikbudristek",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Short Dialogues",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number four. Listen to a conversation between a student and an English teacher.",
        "pauseAfter": 450
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "Excuse me, Sir. In the legend we studied yesterday, why did the arrogant prince fail in the end?",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Traditional legends teach us that physical strength and pride cannot force someone to respect us.",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "So true greatness comes from humility and kindness toward others?",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Exactly. Arrogance and selfish ambition will always lead to failure in the end.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What main lesson does the teacher explain?"
      }
    ],
    "stimulusTitle": "Audio Transcript (Listening)",
    "stimulusBody": "<p><strong>Student (Female):</strong> Excuse me, Sir. In the legend we studied yesterday, why did the arrogant prince fail in the end?</p><p><strong>Teacher (Male):</strong> Traditional legends teach us that physical strength and pride cannot force someone to respect us.</p><p><strong>Student (Female):</strong> So true greatness comes from humility and kindness toward others?</p><p><strong>Teacher (Male):</strong> Exactly. Arrogance and selfish ambition will always lead to failure in the end.</p>",
    "prompt": "What main moral lesson does the teacher explain in the conversation?",
    "options": [
      {
        "key": "A",
        "text": "True greatness stems from humility, as arrogance leads to failure."
      },
      {
        "key": "B",
        "text": "Physical power alone is enough to command genuine respect."
      },
      {
        "key": "C",
        "text": "Selfish ambition should be pursued at all costs."
      },
      {
        "key": "D",
        "text": "Ancient stories have no relevance to contemporary life."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Guru menjelaskan bahwa kesombongan akan membawa kegagalan, dan kebesaran sejati datang dari kerendahan hati: 'Arrogance and selfish ambition will always lead to failure... true greatness comes from humility'. Pilihan A tepat.",
    "grammarNote": "Noun Clauses & Inversion nuance: 'physical strength and pride cannot force someone to respect us'."
  },
  {
    "id": 5,
    "source": "Sumber: Cambridge Assessment English — B2 First for Schools & Kemendikbudristek",
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
        "text": "What do you think about students using AI tools to write their English book reviews?",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "Using AI to understand difficult topics is helpful, but letting it write our assignments means we miss the chance to develop our own critical thinking.",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "I agree. We should treat it as a study guide, but write our own original analyses.",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "Exactly. Developing our own critical thinking is much more valuable.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What do both students conclude regarding artificial intelligence in learning?"
      }
    ],
    "stimulusTitle": "Audio Transcript (Listening)",
    "stimulusBody": "<p><strong>Speaker 1 (Male):</strong> What do you think about students using AI tools to write their English book reviews?</p><p><strong>Speaker 2 (Female):</strong> Using AI to understand difficult topics is helpful, but letting it write our assignments means we miss the chance to develop our own critical thinking.</p><p><strong>Speaker 1 (Male):</strong> I agree. We should treat it as a study guide, but write our own original analyses.</p><p><strong>Speaker 2 (Female):</strong> Exactly. Developing our own critical thinking is much more valuable.</p>",
    "prompt": "What do both students agree on regarding the use of AI in learning?",
    "options": [
      {
        "key": "A",
        "text": "AI should be used as a helpful guide while students write their own original critical thoughts."
      },
      {
        "key": "B",
        "text": "AI software should be banned completely from all academic institutions."
      },
      {
        "key": "C",
        "text": "Students should submit AI-generated book reviews without checking them."
      },
      {
        "key": "D",
        "text": "Critical thinking is no longer needed in the modern digital age."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kedua siswa sepakat bahwa AI dapat digunakan sebagai panduan belajar, tetapi siswa harus tetap menyusun analisis kritis orisinal sendiri. Pilihan A tepat.",
    "grammarNote": "Gerund as Subject & Evaluative Adjectives: 'Using AI... is helpful', 'Developing our own critical thinking is much more valuable'."
  },
  {
    "id": 6,
    "source": "Sumber: Modul Pembelajaran Bahasa Inggris Tingkat Lanjut Kelas XI — Kemendikbudristek",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Short Dialogues",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number six. Listen to a conversation between two student council members.",
        "pauseAfter": 450
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Our student council proposal for the green school campaign is almost ready.",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "Did you include the rule about single-use plastic bottles in the canteen?",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Yes. We recommend that every student bring a reusable bottle and food container from home.",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "That is a great step. Clear school rules will help reduce our plastic waste significantly.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What is the main objective of the student council proposal?"
      }
    ],
    "stimulusTitle": "Audio Transcript (Listening)",
    "stimulusBody": "<p><strong>Speaker 1 (Male):</strong> Our student council proposal for the green school campaign is almost ready.</p><p><strong>Speaker 2 (Female):</strong> Did you include the rule about single-use plastic bottles in the canteen?</p><p><strong>Speaker 1 (Male):</strong> Yes. We recommend that every student bring a reusable bottle and food container from home.</p><p><strong>Speaker 2 (Female):</strong> That is a great step. Clear school rules will help reduce our plastic waste significantly.</p>",
    "prompt": "What is the primary objective of the student council proposal?",
    "options": [
      {
        "key": "A",
        "text": "To reduce plastic waste by encouraging reusable bottles and food containers."
      },
      {
        "key": "B",
        "text": "To close down the school cafeteria permanently during recess."
      },
      {
        "key": "C",
        "text": "To sell branded bottled water at higher prices to students."
      },
      {
        "key": "D",
        "text": "To cancel all environmental programs for the remainder of the year."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tujuan proposal OSIS adalah mengurangi sampah plastik dengan mewajibkan botol dan wadah makan isi ulang. Pilihan A tepat.",
    "grammarNote": "Subjunctive / Recommendation Structure: 'recommend that every student bring a reusable bottle'."
  },
`;

// BLOCK FOR GRADE XII WAJIB (Q4, Q5, Q6)
const BLOCK_XII_WAJIB = `
  {
    "id": 4,
    "source": "Sumber: Percakapan Pembelajaran Berbasis Riset SMA — Modul Ajar Kurikulum Merdeka Fase F",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Dialogues",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number four. Listen to a conversation between a student and an English teacher.",
        "pauseAfter": 450
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Good morning. I noticed many classmates are using generative AI to produce their scientific essay drafts in seconds. Doesn't that risk diminishing our genuine critical thinking?",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "You raise an insightful concern. While generative algorithms can assist in outlining concepts, over-relying on them deprives students of personal voice. True academic mastery comes from wrestling with complex ideas yourself.",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Exactly. I believe articulating our own original arguments is far more valuable than simply generating polished paragraphs.",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "Precisely. AI should be an assistive tool for inspiration, never a substitute for human intellect.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What central concern regarding artificial intelligence is discussed by the student and teacher?"
      }
    ],
    "stimulusTitle": "Audio Transcript (Listening)",
    "stimulusBody": "<p><strong>Student (Male):</strong> Good morning. I noticed many classmates are using generative AI to produce their scientific essay drafts in seconds. Doesn't that risk diminishing our genuine critical thinking?</p><p><strong>Teacher (Female):</strong> You raise an insightful concern. While generative algorithms can assist in outlining concepts, over-relying on them deprives students of personal voice. True academic mastery comes from wrestling with complex ideas yourself.</p><p><strong>Student (Male):</strong> Exactly. I believe articulating our own original arguments is far more valuable than simply generating polished paragraphs.</p><p><strong>Teacher (Female):</strong> Precisely. AI should be an assistive tool for inspiration, never a substitute for human intellect.</p>",
    "prompt": "What central concern regarding artificial intelligence is discussed by the student and teacher?",
    "options": [
      {
        "key": "A",
        "text": "Excessive reliance on generative AI weakens students' critical thinking and personal synthesis."
      },
      {
        "key": "B",
        "text": "AI models require too much electricity to run on school laptop computers."
      },
      {
        "key": "C",
        "text": "Students cannot afford software subscriptions for advanced essay generators."
      },
      {
        "key": "D",
        "text": "Teachers prefer handwritten essays to eliminate computer screens entirely."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kekhawatiran utama yang dibahas adalah bahwa ketergantungan berlebihan pada AI melemahkan pemikiran kritis dan suara pribadi siswa ('deprives students of personal voice... wrestling with complex ideas yourself'). Pilihan A tepat.",
    "grammarNote": "Complex Gerund & Concession Clauses: 'over-relying on them deprives...', 'While generative algorithms can assist...'."
  },
  {
    "id": 5,
    "source": "Sumber: Diskusi Kelompok Terfokus Siswa — Simposium Energi Masa Depan SMA Jawa Tengah",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Dialogues",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number five. Listen to a conversation between two high school seniors preparing a presentation.",
        "pauseAfter": 450
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "When evaluating Indonesia's plan to achieve net-zero carbon emissions, do you believe nuclear energy is a more practical solution than decentralized solar and geothermal power?",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "Nuclear power provides a stable baseload without weather dependency. However, the capital investment is immense, construction takes over a decade, and managing radioactive waste remains contentious. Decentralized renewable microgrids can be deployed much faster across our archipelago.",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "That is true. Besides, Indonesia has abundant geothermal potential along the volcanic belt that has barely been tapped.",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "Exactly. A diversified grid combining regional solar, geothermal, and smart storage is both safer and more resilient for our geography.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: According to the female speaker, why is decentralized renewable energy preferable to nuclear power for Indonesia?"
      }
    ],
    "stimulusTitle": "Audio Transcript (Listening)",
    "stimulusBody": "<p><strong>Speaker 1 (Male):</strong> When evaluating Indonesia's plan to achieve net-zero carbon emissions, do you believe nuclear energy is a more practical solution than decentralized solar and geothermal power?</p><p><strong>Speaker 2 (Female):</strong> Nuclear power provides a stable baseload without weather dependency. However, the capital investment is immense, construction takes over a decade, and managing radioactive waste remains contentious. Decentralized renewable microgrids can be deployed much faster across our archipelago.</p><p><strong>Speaker 1 (Male):</strong> That is true. Besides, Indonesia has abundant geothermal potential along the volcanic belt that has barely been tapped.</p><p><strong>Speaker 2 (Female):</strong> Exactly. A diversified grid combining regional solar, geothermal, and smart storage is both safer and more resilient for our geography.</p>",
    "prompt": "According to the female speaker, why is decentralized renewable energy preferable to nuclear power for Indonesia?",
    "options": [
      {
        "key": "A",
        "text": "It requires significantly less initial capital, deploys faster, and fits Indonesia's island geography without radioactive waste concerns."
      },
      {
        "key": "B",
        "text": "Nuclear power plants can be constructed overnight without any government safety inspection."
      },
      {
        "key": "C",
        "text": "Solar panels generate more baseline electricity during rainy night storms than nuclear reactors."
      },
      {
        "key": "D",
        "text": "Geothermal energy is cheaper because it does not require steam turbines or electrical transformers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pembicara perempuan menjelaskan bahwa energi terbarukan terdesentralisasi lebih unggul karena investasi modal lebih terjangkau, pembangunan jauh lebih cepat, dan cocok untuk negara kepulauan tanpa risiko limbah radioaktif. Pilihan A tepat.",
    "grammarNote": "Comparative discourse markers & contrastive lexis: 'However, the capital investment is immense... can be deployed much faster'."
  },
  {
    "id": 6,
    "source": "Sumber: Wawancara Komunitas Literasi Remaja — Dewan Kesenian Daerah & Majalah Edukasi",
    "type": "listening_dialog",
    "title": "Listening Section: Part II - Dialogues",
    "audioSegments": [
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Number six. Listen to a dialogue between two members of the school book club.",
        "pauseAfter": 450
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "I recently finished reading Andrea Hirata's classic novel, 'The Rainbow Troops'. Have you read it?",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "Yes, twice! What impressed me most was how the narrative highlights unyielding perseverance in education despite extreme poverty on Belitung Island.",
        "pauseAfter": 400
      },
      {
        "gender": "male",
        "pitch": 0.75,
        "rateMultiplier": 0.94,
        "text": "Absolutely. The teachers proved that passionate, dedicated mentorship can inspire students even inside a decaying classroom.",
        "pauseAfter": 400
      },
      {
        "gender": "female",
        "pitch": 1.30,
        "rateMultiplier": 1.04,
        "text": "Indeed. It reminds us that quality education is fundamentally driven by human spirit and empathy, not just lavish facilities.",
        "pauseAfter": 500
      },
      {
        "role": "narrator",
        "lang": "en-US",
        "text": "Question: What core message from the novel do both speakers find most inspiring?"
      }
    ],
    "stimulusTitle": "Audio Transcript (Listening)",
    "stimulusBody": "<p><strong>Speaker 1 (Male):</strong> I recently finished reading Andrea Hirata's classic novel, 'The Rainbow Troops'. Have you read it?</p><p><strong>Speaker 2 (Female):</strong> Yes, twice! What impressed me most was how the narrative highlights unyielding perseverance in education despite extreme poverty on Belitung Island.</p><p><strong>Speaker 1 (Male):</strong> Absolutely. The teachers proved that passionate, dedicated mentorship can inspire students even inside a decaying classroom.</p><p><strong>Speaker 2 (Female):</strong> Indeed. It reminds us that quality education is fundamentally driven by human spirit and empathy, not just lavish facilities.</p>",
    "prompt": "What core message from the novel do both speakers find most inspiring?",
    "options": [
      {
        "key": "A",
        "text": "Quality education is driven by passionate mentorship and human perseverance, not merely luxurious facilities."
      },
      {
        "key": "B",
        "text": "Children in remote regions should give up schooling and work in tin mines instead."
      },
      {
        "key": "C",
        "text": "Literature books should only describe wealthy urban families to motivate poor readers."
      },
      {
        "key": "D",
        "text": "School buildings are unimportant and teachers should not maintain classrooms."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kedua pembicara sepakat bahwa pesan inti novel adalah pendidikan berkualitas digerakkan oleh kegigihan dan dedikasi guru, bukan sekadar fasilitas mewah ('quality education is fundamentally driven by human spirit... not just lavish facilities'). Pilihan A tepat.",
    "grammarNote": "Passive voice & Emphatic adverbials: 'fundamentally driven by human spirit and empathy'."
  },
`;

function processFile(filePath, newBlock) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Q4-Q6 block if provided
  if (newBlock) {
    const reg = /(\n\s*\{\s*["']?id["']?\s*:\s*4\b[\s\S]*?\n\s*\},\s*)(?=\n\s*\{\s*["']?id["']?\s*:\s*7\b)/;
    if (reg.test(content)) {
      content = content.replace(reg, newBlock);
      console.log(`  Successfully replaced Q4-Q6 in ${filePath}`);
    } else {
      console.warn(`  FAILED to match Q4-Q6 block in ${filePath}`);
    }
  }

  // Replace Voice Engine Block
  const start = content.indexOf('function getAvailableVoices');
  const end = content.indexOf('function toggleAudioSpeed');
  if (start !== -1 && end !== -1) {
    content = content.substring(0, start) + NEW_VOICE_ENGINE + content.substring(end);
    console.log(`  Successfully replaced voice engine in ${filePath}`);
  } else {
    console.warn(`  FAILED to match voice engine range in ${filePath}`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

// 1. Grade X
['kelas-x-asas.js', 'kelas-x-asts.js'].forEach(f => {
  console.log(`Processing ${f}...`);
  processFile(f, BLOCK_X);
});

// 2. Grade XI Wajib
['kelas-xi-asas.js', 'kelas-xi-asts.js'].forEach(f => {
  console.log(`Processing ${f}...`);
  processFile(f, BLOCK_XI_WAJIB);
});

// 3. Grade XI Tingkat Lanjut
['kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js'].forEach(f => {
  console.log(`Processing ${f}...`);
  processFile(f, BLOCK_XI_TL);
});

// 4. Grade XII Wajib
['kelas-xii-asas.js', 'kelas-xii-asts.js'].forEach(f => {
  console.log(`Processing ${f}...`);
  processFile(f, BLOCK_XII_WAJIB);
});

// 5. Grade XII Tingkat Lanjut (Voice engine update)
['kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js'].forEach(f => {
  console.log(`Processing ${f}...`);
  processFile(f, null);
});

console.log('Finished all file processing!');
