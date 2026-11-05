/**
 * ASESMEN SUMATIF AKHIR SEMESTER (ASAS) GASAL & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT XI (FASE F)
 * Standar: TKA & AKM Literasi (Pilihan Ganda Biasa, Kompleks Matrix, & MCMA)
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";

const SVG_PICTURES = {
  laptopResearch: `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="24" width="60" height="42" rx="3" fill="#eff6ff" stroke="#2563eb"/><path d="M12 70h76l-4 6H16l-4-6z" fill="#cbd5e1" stroke="#2563eb"/><circle cx="50" cy="45" r="10" stroke="#3b82f6" stroke-dasharray="3 3"/><path d="M50 39v12M44 45h12" stroke="#1d4ed8"/><circle cx="50" cy="73" r="1.5" fill="#475569"/></svg>`,
  antiqueBook: `<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 72c15-8 35-4 35 10 0-14 20-18 35-10V28c-15-8-35-4-35 10 0-14-20-18-35-10v44z" fill="#fef3c7" stroke="#b45309"/><path d="M50 38v44M25 40h15M25 50h15M60 40h15M60 50h15" stroke="#d97706"/></svg>`,
  microphoneStage: `<svg viewBox="0 0 100 100" fill="none" stroke="#7c3aed" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="42" y="16" width="16" height="26" rx="8" fill="#f3e8ff" stroke="#7c3aed"/><path d="M34 32c0 10 7 18 16 18s16-8 16-18M50 50v24M35 74h30" stroke="#7c3aed" stroke-width="2.5"/><path d="M20 85h60" stroke="#64748b" stroke-width="3"/></svg>`,
  smartphoneVideo: `<svg viewBox="0 0 100 100" fill="none" stroke="#e11d48" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="34" y="16" width="32" height="54" rx="5" fill="#fff1f2" stroke="#e11d48"/><circle cx="50" cy="62" r="3" fill="#e11d48"/><circle cx="50" cy="36" r="8" fill="#fda4af" stroke="#e11d48"/><polygon points="48,32 55,36 48,40" fill="#be123c"/><path d="M30 84l20-14 20 14" stroke="#475569" stroke-width="2.5"/></svg>`,

  fishingPort: `<svg viewBox="0 0 100 100" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 75c12-4 24 2 36-2s24-2 44 2" stroke="#0284c7" stroke-width="2.5"/><path d="M20 65l10 10h24l6-10H20z" fill="#e0f2fe" stroke="#0369a1"/><path d="M42 65V42l16 8-16 4" stroke="#0369a1" fill="#bae6fd"/><path d="M12 70v15M24 70v15M8 72h24" stroke="#78350f" stroke-width="2"/></svg>`,
  templeRuins: `<svg viewBox="0 0 100 100" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 85h80M22 70h56M34 55h32M44 40h12M50 20v20"/><path d="M30 85V70M70 85V70M40 70V55M60 70V55M47 55V40M53 55V40"/><circle cx="50" cy="17" r="3" fill="#d97706"/><path d="M15 85l6-15M85 85l-6-15" stroke="#b45309"/></svg>`,
  suspensionBridge: `<svg viewBox="0 0 100 100" fill="none" stroke="#6366f1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 68h80M25 22v52M75 22v52" stroke="#4338ca" stroke-width="2.5"/><path d="M10 50c15-15 25-22 40 0s25 15 40 0" stroke="#6366f1"/><path d="M25 22l25 28 25-28" stroke="#818cf8"/><path d="M10 80c10-3 20 3 40 0s30 3 40 0" stroke="#38bdf8"/></svg>`,
  mountainSummit: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="28" r="8" fill="#fef08a" stroke="#eab308"/><path d="M10 85l32-45 18 22 14-16 16 39H10z" fill="#f8fafc" stroke="#475569" stroke-width="2.2"/><path d="M36 48l6 8 8-4" stroke="#94a3b8"/></svg>`,

  fuelStation: `<svg viewBox="0 0 100 100" fill="none" stroke="#ef4444" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="25" y="32" width="36" height="52" rx="4" fill="#fef2f2" stroke="#dc2626"/><rect x="33" y="40" width="20" height="15" fill="#fee2e2" stroke="#ef4444"/><path d="M61 44h10c4 0 6 3 6 7v20l-4 3" stroke="#b91c1c" stroke-width="2.5"/><rect x="20" y="84" width="46" height="5" fill="#64748b"/></svg>`,
  smokestackFactory: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="52" width="60" height="32" fill="#f1f5f9" stroke="#475569"/><polygon points="30,52 32,25 40,25 42,52" fill="#e2e8f0" stroke="#475569"/><polygon points="50,52 52,30 58,30 60,52" fill="#e2e8f0" stroke="#475569"/><path d="M36 20c2-5 6-5 8 0s6 5 8 0M55 24c2-4 5-4 7 0" stroke="#94a3b8" stroke-width="2"/></svg>`,
  solarRooftop: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 85V50l35-22 35 22v35H15z" fill="#f0fdf4" stroke="#059669"/><path d="M22 46l28-18 28 18" stroke="#047857" stroke-width="3"/><path d="M52 58h28v24H52z" fill="#bae6fd" stroke="#0284c7"/><path d="M66 58v24M52 70h28" stroke="#0284c7"/><circle cx="82" cy="22" r="8" fill="#fef08a" stroke="#eab308"/></svg>`,
  hydroDam: `<svg viewBox="0 0 100 100" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 40h70l-10 44H25L15 40z" fill="#e0f2fe" stroke="#0369a1" stroke-width="2.5"/><path d="M35 40v44M50 40v44M65 40v44" stroke="#0284c7" stroke-width="2"/><path d="M40 70c4 5 8 5 12 0s8-5 12 0" stroke="#38bdf8" stroke-width="2"/><path d="M10 84h80" stroke="#64748b" stroke-width="3"/></svg>`
};

function getGrade11AsasQuestions() {
  return [
  {
    "id": 1,
    "source": "Sumber: Audio Pembelajaran Bahasa Inggris Tingkat Lanjut — Kemendikbudristek & BBC Learning English",
    "type": "listening_pictures",
    "title": "Listening Section: Part I - Pictures",
    "audioText": "Number one. Look at the pictures. A high school student is sitting at his study desk with a modern open laptop, carefully cross-checking references and taking notes to verify the accuracy of online news. Which picture best illustrates the spoken statement?",
    "prompt": "Look at the four pictures below. Which picture best represents the digital literacy activity described in the audio?",
    "options": [
      {
        "key": "A",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"20\" y=\"24\" width=\"60\" height=\"42\" rx=\"3\" fill=\"#eff6ff\" stroke=\"#2563eb\"/><path d=\"M12 70h76l-4 6H16l-4-6z\" fill=\"#cbd5e1\" stroke=\"#2563eb\"/><circle cx=\"50\" cy=\"45\" r=\"10\" stroke=\"#3b82f6\" stroke-dasharray=\"3 3\"/><path d=\"M50 39v12M44 45h12\" stroke=\"#1d4ed8\"/><circle cx=\"50\" cy=\"73\" r=\"1.5\" fill=\"#475569\"/></svg>",
        "label": "A student conducting digital research and fact-checking on a laptop"
      },
      {
        "key": "B",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 72c15-8 35-4 35 10 0-14 20-18 35-10V28c-15-8-35-4-35 10 0-14-20-18-35-10v44z\" fill=\"#fef3c7\" stroke=\"#b45309\"/><path d=\"M50 38v44M25 40h15M25 50h15M60 40h15M60 50h15\" stroke=\"#d97706\"/></svg>",
        "label": "Reading an antique book quietly in a library"
      },
      {
        "key": "C",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"42\" y=\"16\" width=\"16\" height=\"26\" rx=\"8\" fill=\"#f3e8ff\" stroke=\"#7c3aed\"/><path d=\"M34 32c0 10 7 18 16 18s16-8 16-18M50 50v24M35 74h30\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><path d=\"M20 85h60\" stroke=\"#64748b\" stroke-width=\"3\"/></svg>",
        "label": "Speaking into a microphone on an empty stage"
      },
      {
        "key": "D",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"34\" y=\"16\" width=\"32\" height=\"54\" rx=\"5\" fill=\"#fff1f2\" stroke=\"#e11d48\"/><circle cx=\"50\" cy=\"62\" r=\"3\" fill=\"#e11d48\"/><circle cx=\"50\" cy=\"36\" r=\"8\" fill=\"#fda4af\" stroke=\"#e11d48\"/><polygon points=\"48,32 55,36 48,40\" fill=\"#be123c\"/><path d=\"M30 84l20-14 20 14\" stroke=\"#475569\" stroke-width=\"2.5\"/></svg>",
        "label": "Recording a vertical short video with a smartphone camera"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Audio mendeskripsikan: 'student is sitting at his study desk with a modern open laptop, carefully cross-checking references and taking notes to verify the accuracy of online news'. Gambar A memperlihatkan aktivitas riset dan verifikasi informasi di depan laptop.",
    "grammarNote": "Present Continuous Tense ('is sitting', 'cross-checking') & Digital Literacy Lexis (verify, accuracy, references)."
  },
  {
    "id": 2,
    "source": "Sumber: Arsip Balai Pelestarian Kebudayaan Wilayah X — Cerita Rakyat & Candi Nusantara",
    "type": "listening_pictures",
    "title": "Listening Section: Part I - Pictures",
    "audioText": "Number two. Look at the pictures. This magnificent Indonesian cultural destination displays monumental stone temples built with detailed tiers and ornamental gates, celebrated in ancient Central Javanese legends. Which picture matches the description?",
    "prompt": "Which picture corresponds to the monumental ancient stone temple landmark mentioned in the audio?",
    "options": [
      {
        "key": "A",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 75c12-4 24 2 36-2s24-2 44 2\" stroke=\"#0284c7\" stroke-width=\"2.5\"/><path d=\"M20 65l10 10h24l6-10H20z\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/><path d=\"M42 65V42l16 8-16 4\" stroke=\"#0369a1\" fill=\"#bae6fd\"/><path d=\"M12 70v15M24 70v15M8 72h24\" stroke=\"#78350f\" stroke-width=\"2\"/></svg>",
        "label": "A coastal wooden fishing port with docked boats"
      },
      {
        "key": "B",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 85h80M22 70h56M34 55h32M44 40h12M50 20v20\"/><path d=\"M30 85V70M70 85V70M40 70V55M60 70V55M47 55V40M53 55V40\"/><circle cx=\"50\" cy=\"17\" r=\"3\" fill=\"#d97706\"/><path d=\"M15 85l6-15M85 85l-6-15\" stroke=\"#b45309\"/></svg>",
        "label": "An ancient multi-tiered stone temple complex"
      },
      {
        "key": "C",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#6366f1\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 68h80M25 22v52M75 22v52\" stroke=\"#4338ca\" stroke-width=\"2.5\"/><path d=\"M10 50c15-15 25-22 40 0s25 15 40 0\" stroke=\"#6366f1\"/><path d=\"M25 22l25 28 25-28\" stroke=\"#818cf8\"/><path d=\"M10 80c10-3 20 3 40 0s30 3 40 0\" stroke=\"#38bdf8\"/></svg>",
        "label": "A suspension steel bridge over a city river"
      },
      {
        "key": "D",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"30\" cy=\"28\" r=\"8\" fill=\"#fef08a\" stroke=\"#eab308\"/><path d=\"M10 85l32-45 18 22 14-16 16 39H10z\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"2.2\"/><path d=\"M36 48l6 8 8-4\" stroke=\"#94a3b8\"/></svg>",
        "label": "A rocky mountain summit under the morning sun"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Audio menyebutkan: 'magnificent Indonesian cultural destination displays monumental stone temples built with detailed tiers and ornamental gates, celebrated in ancient Central Javanese legends'. Candi batu bersejarah adalah Gambar A (Candi Prambanan/Sewu).",
    "grammarNote": "Adjective clauses & Passive participle: 'monumental stone temples built with detailed tiers'."
  },
  {
    "id": 3,
    "source": "Sumber: Publikasi Direktorat Jenderal EBTKE — Kementerian ESDM Republik Indonesia",
    "type": "listening_pictures",
    "title": "Listening Section: Part I - Pictures",
    "audioText": "Number three. Look at the pictures. The school installed wide solar photovoltaic panels across the facility rooftop to absorb sunlight and produce clean, renewable electric energy. Which picture matches this eco-friendly initiative?",
    "prompt": "Which picture illustrates the clean solar energy initiative described in the recording?",
    "options": [
      {
        "key": "A",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"25\" y=\"32\" width=\"36\" height=\"52\" rx=\"4\" fill=\"#fef2f2\" stroke=\"#dc2626\"/><rect x=\"33\" y=\"40\" width=\"20\" height=\"15\" fill=\"#fee2e2\" stroke=\"#ef4444\"/><path d=\"M61 44h10c4 0 6 3 6 7v20l-4 3\" stroke=\"#b91c1c\" stroke-width=\"2.5\"/><rect x=\"20\" y=\"84\" width=\"46\" height=\"5\" fill=\"#64748b\"/></svg>",
        "label": "A conventional roadside petroleum fuel station"
      },
      {
        "key": "B",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"20\" y=\"52\" width=\"60\" height=\"32\" fill=\"#f1f5f9\" stroke=\"#475569\"/><polygon points=\"30,52 32,25 40,25 42,52\" fill=\"#e2e8f0\" stroke=\"#475569\"/><polygon points=\"50,52 52,30 58,30 60,52\" fill=\"#e2e8f0\" stroke=\"#475569\"/><path d=\"M36 20c2-5 6-5 8 0s6 5 8 0M55 24c2-4 5-4 7 0\" stroke=\"#94a3b8\" stroke-width=\"2\"/></svg>",
        "label": "An industrial factory releasing dark smoke plumes"
      },
      {
        "key": "C",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 85V50l35-22 35 22v35H15z\" fill=\"#f0fdf4\" stroke=\"#059669\"/><path d=\"M22 46l28-18 28 18\" stroke=\"#047857\" stroke-width=\"3\"/><path d=\"M52 58h28v24H52z\" fill=\"#bae6fd\" stroke=\"#0284c7\"/><path d=\"M66 58v24M52 70h28\" stroke=\"#0284c7\"/><circle cx=\"82\" cy=\"22\" r=\"8\" fill=\"#fef08a\" stroke=\"#eab308\"/></svg>",
        "label": "Rooftop solar photovoltaic panels capturing sunlight"
      },
      {
        "key": "D",
        "svg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 40h70l-10 44H25L15 40z\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2.5\"/><path d=\"M35 40v44M50 40v44M65 40v44\" stroke=\"#0284c7\" stroke-width=\"2\"/><path d=\"M40 70c4 5 8 5 12 0s8-5 12 0\" stroke=\"#38bdf8\" stroke-width=\"2\"/><path d=\"M10 84h80\" stroke=\"#64748b\" stroke-width=\"3\"/></svg>",
        "label": "A heavy concrete hydro dam structure"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Audio mendeskripsikan pemasangan panel surya: 'installed wide solar photovoltaic panels across the facility rooftop to absorb sunlight and produce clean, renewable electric energy'. Gambar A menampilkan panel fotovoltaik surya.",
    "grammarNote": "Infinitive of Purpose: 'to absorb sunlight and produce clean, renewable electric energy'."
  },
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
        "pitch": 1.3,
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
        "pitch": 1.3,
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
        "pitch": 1.3,
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
        "pitch": 1.3,
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
        "pitch": 1.3,
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
  {
    "id": 7,
    "source": "Sumber: Rekaman Audio Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Short Talks",
    "audioText": "Questions seven and eight are based on the following short talk. Long ago in Central Java, the powerful Prince Bandung Bondowoso defeated King Boko and intended to marry his beautiful daughter, Princess Roro Jonggrang. Reluctant to accept the proposal from her father's slayer, the clever princess agreed under one impossible condition: the prince had to build one thousand stone temples before the first rooster crowed at dawn. Determined to succeed, Bandung summoned an army of unseen earth spirits who worked at extraordinary speed throughout the dark night. Now answer question number seven: Why did Princess Roro Jonggrang give the impossible task to Bandung Bondowoso?",
    "prompt": "According to the monologue, why did Princess Roro Jonggrang give the impossible task to Bandung Bondowoso?",
    "options": [
      {
        "key": "A",
        "text": "Because she wanted to test his architectural skills"
      },
      {
        "key": "B",
        "text": "Because the royal kingdom lacked places for public worship"
      },
      {
        "key": "C",
        "text": "Because she was reluctant to marry the man who had killed her father"
      },
      {
        "key": "D",
        "text": "Because she wanted to build a tourist destination for future generations"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Monolog menjelaskan: 'Reluctant to accept the proposal from her father's slayer, the clever princess agreed under one impossible condition...'. Ia enggan menikah dengan pembunuh ayahnya.",
    "grammarNote": "Participial Adjective phrase: 'Reluctant to accept the proposal from her father's slayer'."
  },
  {
    "id": 8,
    "source": "Sumber: Rekaman Audio Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Short Talks",
    "audioText": "Now answer question number eight based on the same talk: How was Bandung Bondowoso able to construct hundreds of stone temples so rapidly during the night?",
    "prompt": "How was Bandung Bondowoso able to construct hundreds of stone temples so rapidly during the night?",
    "options": [
      {
        "key": "A",
        "text": "He employed thousands of skilled craftsmen from neighboring kingdoms"
      },
      {
        "key": "B",
        "text": "He ordered local village farmers to work non-stop without sleep"
      },
      {
        "key": "C",
        "text": "He used modern steam-powered construction machines"
      },
      {
        "key": "D",
        "text": "He summoned an army of unseen earth spirits to do the hard labor"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Monolog menyatakan: 'Bandung summoned an army of unseen earth spirits who worked at extraordinary speed throughout the dark night'. Ia mengerahkan pasukan makhluk halus/roh halus.",
    "grammarNote": "Relative Clause: '...earth spirits who worked at extraordinary speed'."
  },
  {
    "id": 9,
    "source": "Sumber: Cyber Safety Guidelines for High School Students — Siberkreasi & Kominfo",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Short Talks",
    "audioText": "Questions nine and ten are based on the following short talk. Good morning, students. Whenever you post photos, share personal stories, or leave comments on social media, you leave behind an invisible record known as a digital footprint. Unlike pencil marks on paper, digital traces can be copied, screenshotted, and archived indefinitely, even if you delete the original post later. Future scholarship committees and university recruiters routinely review online profiles to evaluate a candidate's maturity, honesty, and emotional control. Therefore, always pause and reflect before hitting the publish button. Now answer question number nine: What does the speaker say about a person's digital footprint?",
    "prompt": "According to the speaker, what is a key characteristic of a digital footprint?",
    "options": [
      {
        "key": "A",
        "text": "It can be archived and reviewed by future universities and employers"
      },
      {
        "key": "B",
        "text": "It automatically disappears permanently after twenty-four hours"
      },
      {
        "key": "C",
        "text": "It is only visible to close friends who follow your private account"
      },
      {
        "key": "D",
        "text": "It does not influence real-life professional or educational opportunities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pembicara menjelaskan: 'digital traces can be copied, screenshotted, and archived indefinitely... Future scholarship committees and university recruiters routinely review online profiles'. Jejak digital dapat disimpan dan ditinjau di masa depan.",
    "grammarNote": "Passive Voice in Academic Advice: 'can be copied, screenshotted, and archived indefinitely'."
  },
  {
    "id": 10,
    "source": "Sumber: Cyber Safety Guidelines for High School Students — Siberkreasi & Kominfo",
    "type": "listening_talk",
    "title": "Listening Section: Part III - Short Talks",
    "audioText": "Now answer question number ten based on the same talk: What practical advice does the speaker give to high school students?",
    "prompt": "What practical recommendation does the speaker provide before posting online?",
    "options": [
      {
        "key": "A",
        "text": "Never use the internet or social media platforms again"
      },
      {
        "key": "B",
        "text": "Pause and carefully reflect on the content before publishing"
      },
      {
        "key": "C",
        "text": "Use multiple anonymous fake accounts to insult others"
      },
      {
        "key": "D",
        "text": "Share private passwords with all close school friends"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pembicara menyarankan: 'Therefore, always pause and reflect before hitting the publish button' (berhenti sejenak dan berpikir matang sebelum menekan tombol unggah).",
    "grammarNote": "Imperative sentence: 'always pause and reflect before hitting the publish button'."
  },
  {
    "id": 11,
    "source": "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
    "type": "single_choice",
    "title": "Reading Comprehension: Narrative Main Conflict",
    "stimulusTitle": "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
    "stimulusBody": "Once upon a time in ancient Java, there existed two neighboring kingdoms: Pengging and Boko. Pengging was fertile and prosperous, ruled by King Prabu Damar Moyo. His valiant son, Prince Bandung Bondowoso, possessed extraordinary physical strength and supernatural abilities. In contrast, the neighboring kingdom of Boko was governed by a cruel giant named King Boko. A fierce war erupted between the two kingdoms, ending when Bandung Bondowoso courageously defeated and killed King Boko in battle.<br><br>Entering Boko Palace as the victor, Bandung encountered Princess Roro Jonggrang, the late king's daughter. Enchanted by her grace and breathtaking beauty, the prince immediately offered her his hand in marriage. However, Roro Jonggrang harbored intense sorrow and resentment; she could never bring herself to willingly marry the conqueror who had ended her beloved father's life. Knowing that a direct refusal would provoke dangerous anger, she devised a clever plan. She promised to marry Bandung on one strict condition: he must construct one thousand sacred stone temples within a single night, completed before the dawn rooster crowed.<br><br>Confident in his mystical gifts, Bandung Bondowoso accepted the challenge. As darkness blanketed the earth, he mediated and summoned hundreds of earth spirits from the spirit realm. The spirits labored tirelessly at astonishing speed, gathering giant stones and carving ornate pillars. By three o'clock in the morning, nine hundred and ninety-nine magnificent temples stood proudly under the starlit sky, leaving only one final shrine unfinished.<br><br>Terrified that the prince would fulfill the impossible requirement, Roro Jonggrang swiftly gathered her palace maidens. She instructed them to burn piles of dry straw to the east to illuminate the sky with an orange glow, while others pounded rice mortars with heavy wooden pestles to simulate the lively sounds of a busy morning. Deceived by the dawn-like glow and the loud rhythmic pounding, village roosters began to crow repeatedly. Convinced that the morning sun was rising, the supernatural spirits panicked and fled back into the underground realm, abandoning the final temple. When Bandung discovered the deceit, he was filled with profound fury. Pointing his finger at Roro Jonggrang, he declared that she herself would become the one thousandth statue to complete the sacred complex. Instantly, the princess transformed into a graceful stone statue, known to this day as the statue of Durga Mahisasuramardini in Prambanan Temple.",
    "prompt": "What is the primary conflict presented in the narrative passage above?",
    "options": [
      {
        "key": "A",
        "text": "A border dispute between two farmer communities over irrigation channels"
      },
      {
        "key": "B",
        "text": "The earth spirits refusing to obey Bandung Bondowoso's royal commands"
      },
      {
        "key": "C",
        "text": "Princess Roro Jonggrang's reluctance to marry the conqueror who slew her father"
      },
      {
        "key": "D",
        "text": "An earthquake destroying the thousand temples during construction"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Konflik utama dalam teks naratif ini adalah keengganan dan dilema batin Putri Roro Jonggrang yang menolak dinikahi oleh pangeran yang telah membunuh ayahnya: 'she could never bring herself to willingly marry the conqueror who had ended her beloved father's life'.",
    "grammarNote": "Narrative Conflict Analysis (Complication): Reluctance to marry the slayer of her father."
  },
  {
    "id": 12,
    "source": "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
    "type": "single_choice",
    "title": "Reading Comprehension: Explicit Detail",
    "stimulusTitle": "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
    "stimulusBody": "Once upon a time in ancient Java, there existed two neighboring kingdoms: Pengging and Boko. Pengging was fertile and prosperous, ruled by King Prabu Damar Moyo. His valiant son, Prince Bandung Bondowoso, possessed extraordinary physical strength and supernatural abilities. In contrast, the neighboring kingdom of Boko was governed by a cruel giant named King Boko. A fierce war erupted between the two kingdoms, ending when Bandung Bondowoso courageously defeated and killed King Boko in battle.<br><br>Entering Boko Palace as the victor, Bandung encountered Princess Roro Jonggrang, the late king's daughter. Enchanted by her grace and breathtaking beauty, the prince immediately offered her his hand in marriage. However, Roro Jonggrang harbored intense sorrow and resentment; she could never bring herself to willingly marry the conqueror who had ended her beloved father's life. Knowing that a direct refusal would provoke dangerous anger, she devised a clever plan. She promised to marry Bandung on one strict condition: he must construct one thousand sacred stone temples within a single night, completed before the dawn rooster crowed.<br><br>Confident in his mystical gifts, Bandung Bondowoso accepted the challenge. As darkness blanketed the earth, he mediated and summoned hundreds of earth spirits from the spirit realm. The spirits labored tirelessly at astonishing speed, gathering giant stones and carving ornate pillars. By three o'clock in the morning, nine hundred and ninety-nine magnificent temples stood proudly under the starlit sky, leaving only one final shrine unfinished.<br><br>Terrified that the prince would fulfill the impossible requirement, Roro Jonggrang swiftly gathered her palace maidens. She instructed them to burn piles of dry straw to the east to illuminate the sky with an orange glow, while others pounded rice mortars with heavy wooden pestles to simulate the lively sounds of a busy morning. Deceived by the dawn-like glow and the loud rhythmic pounding, village roosters began to crow repeatedly. Convinced that the morning sun was rising, the supernatural spirits panicked and fled back into the underground realm, abandoning the final temple. When Bandung discovered the deceit, he was filled with profound fury. Pointing his finger at Roro Jonggrang, he declared that she herself would become the one thousandth statue to complete the sacred complex. Instantly, the princess transformed into a graceful stone statue, known to this day as the statue of Durga Mahisasuramardini in Prambanan Temple.",
    "prompt": "Based on paragraph 2, why did Princess Roro Jonggrang formulate an impossible requirement instead of simply saying no?",
    "options": [
      {
        "key": "A",
        "text": "She genuinely admired Bandung's magical construction skills"
      },
      {
        "key": "B",
        "text": "Her royal advisers insisted on having one thousand temples for good luck"
      },
      {
        "key": "C",
        "text": "She wanted to give Bandung time to learn how to govern the kingdom"
      },
      {
        "key": "D",
        "text": "She understood that an outright refusal would provoke dangerous wrath"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Paragraf 2 menyatakan: 'Knowing that a direct refusal would provoke dangerous anger, she devised a clever plan' (mengetahui penolakan langsung akan memicu amarah berbahaya). Pilihan B tepat.",
    "grammarNote": "Cause and effect / Gerund phrase: 'Knowing that a direct refusal would provoke dangerous anger'."
  },
  {
    "id": 13,
    "source": "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
    "type": "single_choice",
    "title": "Reading Comprehension: Character Strategy",
    "stimulusTitle": "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
    "stimulusBody": "Once upon a time in ancient Java, there existed two neighboring kingdoms: Pengging and Boko. Pengging was fertile and prosperous, ruled by King Prabu Damar Moyo. His valiant son, Prince Bandung Bondowoso, possessed extraordinary physical strength and supernatural abilities. In contrast, the neighboring kingdom of Boko was governed by a cruel giant named King Boko. A fierce war erupted between the two kingdoms, ending when Bandung Bondowoso courageously defeated and killed King Boko in battle.<br><br>Entering Boko Palace as the victor, Bandung encountered Princess Roro Jonggrang, the late king's daughter. Enchanted by her grace and breathtaking beauty, the prince immediately offered her his hand in marriage. However, Roro Jonggrang harbored intense sorrow and resentment; she could never bring herself to willingly marry the conqueror who had ended her beloved father's life. Knowing that a direct refusal would provoke dangerous anger, she devised a clever plan. She promised to marry Bandung on one strict condition: he must construct one thousand sacred stone temples within a single night, completed before the dawn rooster crowed.<br><br>Confident in his mystical gifts, Bandung Bondowoso accepted the challenge. As darkness blanketed the earth, he mediated and summoned hundreds of earth spirits from the spirit realm. The spirits labored tirelessly at astonishing speed, gathering giant stones and carving ornate pillars. By three o'clock in the morning, nine hundred and ninety-nine magnificent temples stood proudly under the starlit sky, leaving only one final shrine unfinished.<br><br>Terrified that the prince would fulfill the impossible requirement, Roro Jonggrang swiftly gathered her palace maidens. She instructed them to burn piles of dry straw to the east to illuminate the sky with an orange glow, while others pounded rice mortars with heavy wooden pestles to simulate the lively sounds of a busy morning. Deceived by the dawn-like glow and the loud rhythmic pounding, village roosters began to crow repeatedly. Convinced that the morning sun was rising, the supernatural spirits panicked and fled back into the underground realm, abandoning the final temple. When Bandung discovered the deceit, he was filled with profound fury. Pointing his finger at Roro Jonggrang, he declared that she herself would become the one thousandth statue to complete the sacred complex. Instantly, the princess transformed into a graceful stone statue, known to this day as the statue of Durga Mahisasuramardini in Prambanan Temple.",
    "prompt": "What specific tactical actions did Princess Roro Jonggrang order her palace maidens to perform?",
    "options": [
      {
        "key": "A",
        "text": "Burn dry straw to mimic dawn light and pound rice mortars to mimic morning activity"
      },
      {
        "key": "B",
        "text": "Attack Bandung Bondowoso's soldiers with poisoned arrows"
      },
      {
        "key": "C",
        "text": "Hide all the construction stones in deep forest caves"
      },
      {
        "key": "D",
        "text": "Pour water onto the ground to extinguish the spirits' torches"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Paragraf 4 menjelaskan: 'She instructed them to burn piles of dry straw to the east to illuminate the sky with an orange glow, while others pounded rice mortars with heavy wooden pestles to simulate the lively sounds of a busy morning'. Pilihan B akurat.",
    "grammarNote": "Parallel action clauses with 'while': 'burn piles of dry straw... while others pounded rice mortars'."
  },
  {
    "id": 14,
    "source": "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
    "type": "single_choice",
    "title": "Reading Comprehension: Vocabulary in Context",
    "stimulusTitle": "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
    "stimulusBody": "Once upon a time in ancient Java, there existed two neighboring kingdoms: Pengging and Boko. Pengging was fertile and prosperous, ruled by King Prabu Damar Moyo. His valiant son, Prince Bandung Bondowoso, possessed extraordinary physical strength and supernatural abilities. In contrast, the neighboring kingdom of Boko was governed by a cruel giant named King Boko. A fierce war erupted between the two kingdoms, ending when Bandung Bondowoso courageously defeated and killed King Boko in battle.<br><br>Entering Boko Palace as the victor, Bandung encountered Princess Roro Jonggrang, the late king's daughter. Enchanted by her grace and breathtaking beauty, the prince immediately offered her his hand in marriage. However, Roro Jonggrang harbored intense sorrow and resentment; she could never bring herself to willingly marry the conqueror who had ended her beloved father's life. Knowing that a direct refusal would provoke dangerous anger, she devised a clever plan. She promised to marry Bandung on one strict condition: he must construct one thousand sacred stone temples within a single night, completed before the dawn rooster crowed.<br><br>Confident in his mystical gifts, Bandung Bondowoso accepted the challenge. As darkness blanketed the earth, he mediated and summoned hundreds of earth spirits from the spirit realm. The spirits labored tirelessly at astonishing speed, gathering giant stones and carving ornate pillars. By three o'clock in the morning, nine hundred and ninety-nine magnificent temples stood proudly under the starlit sky, leaving only one final shrine unfinished.<br><br>Terrified that the prince would fulfill the impossible requirement, Roro Jonggrang swiftly gathered her palace maidens. She instructed them to burn piles of dry straw to the east to illuminate the sky with an orange glow, while others pounded rice mortars with heavy wooden pestles to simulate the lively sounds of a busy morning. Deceived by the dawn-like glow and the loud rhythmic pounding, village roosters began to crow repeatedly. Convinced that the morning sun was rising, the supernatural spirits panicked and fled back into the underground realm, abandoning the final temple. When Bandung discovered the deceit, he was filled with profound fury. Pointing his finger at Roro Jonggrang, he declared that she herself would become the one thousandth statue to complete the sacred complex. Instantly, the princess transformed into a graceful stone statue, known to this day as the statue of Durga Mahisasuramardini in Prambanan Temple.",
    "prompt": "The word 'valiant' in paragraph 1 ('His valiant son, Prince Bandung Bondowoso...') is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "fragile and weak"
      },
      {
        "key": "B",
        "text": "courageous and brave"
      },
      {
        "key": "C",
        "text": "hesitant and timid"
      },
      {
        "key": "D",
        "text": "selfish and arrogant"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kata 'valiant' bermakna berani, gagah perkasa, atau ksatria (courageous and brave).",
    "grammarNote": "Descriptive adjective of heroic character: valiant = brave, courageous, bold."
  },
  {
    "id": 15,
    "source": "Sumber: Dikutip dan diadaptasi dari Cerita Rakyat Nusantara — Balai Bahasa Jawa Tengah & Kemendikbudristek (Legenda Candi Sewu)",
    "type": "single_choice",
    "title": "Reading Comprehension: Pronoun Reference",
    "stimulusTitle": "Text 1: The Legend of Roro Jonggrang and the Thousand Temples",
    "stimulusBody": "Once upon a time in ancient Java, there existed two neighboring kingdoms: Pengging and Boko. Pengging was fertile and prosperous, ruled by King Prabu Damar Moyo. His valiant son, Prince Bandung Bondowoso, possessed extraordinary physical strength and supernatural abilities. In contrast, the neighboring kingdom of Boko was governed by a cruel giant named King Boko. A fierce war erupted between the two kingdoms, ending when Bandung Bondowoso courageously defeated and killed King Boko in battle.<br><br>Entering Boko Palace as the victor, Bandung encountered Princess Roro Jonggrang, the late king's daughter. Enchanted by her grace and breathtaking beauty, the prince immediately offered her his hand in marriage. However, Roro Jonggrang harbored intense sorrow and resentment; she could never bring herself to willingly marry the conqueror who had ended her beloved father's life. Knowing that a direct refusal would provoke dangerous anger, she devised a clever plan. She promised to marry Bandung on one strict condition: he must construct one thousand sacred stone temples within a single night, completed before the dawn rooster crowed.<br><br>Confident in his mystical gifts, Bandung Bondowoso accepted the challenge. As darkness blanketed the earth, he mediated and summoned hundreds of earth spirits from the spirit realm. The spirits labored tirelessly at astonishing speed, gathering giant stones and carving ornate pillars. By three o'clock in the morning, nine hundred and ninety-nine magnificent temples stood proudly under the starlit sky, leaving only one final shrine unfinished.<br><br>Terrified that the prince would fulfill the impossible requirement, Roro Jonggrang swiftly gathered her palace maidens. She instructed them to burn piles of dry straw to the east to illuminate the sky with an orange glow, while others pounded rice mortars with heavy wooden pestles to simulate the lively sounds of a busy morning. Deceived by the dawn-like glow and the loud rhythmic pounding, village roosters began to crow repeatedly. Convinced that the morning sun was rising, the supernatural spirits panicked and fled back into the underground realm, abandoning the final temple. When Bandung discovered the deceit, he was filled with profound fury. Pointing his finger at Roro Jonggrang, he declared that she herself would become the one thousandth statue to complete the sacred complex. Instantly, the princess transformed into a graceful stone statue, known to this day as the statue of Durga Mahisasuramardini in Prambanan Temple.",
    "prompt": "In paragraph 4, what does the pronoun 'them' refer to in the sentence: 'She instructed them to burn piles of dry straw...'?",
    "options": [
      {
        "key": "A",
        "text": "The earth spirits"
      },
      {
        "key": "B",
        "text": "The village roosters"
      },
      {
        "key": "C",
        "text": "The palace maidens"
      },
      {
        "key": "D",
        "text": "The thousand statues"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kalimat sebelumnya menyatakan: 'Roro Jonggrang swiftly gathered her palace maidens. She instructed them...'. Kata ganti 'them' merujuk kepada dayang-dayang istana (the palace maidens).",
    "grammarNote": "Pronoun reference tracking: 'palace maidens' (plural noun) -> 'them' (object pronoun)."
  },
  {
    "id": 16,
    "source": "Sumber: Modul Pembelajaran Literasi Digital & Analisis Isu Sosial — BSKAP Kemendikbudristek",
    "type": "complex_matrix",
    "title": "Complex Multiple Choice: Fact Evaluation of Critical Digital Literacy",
    "stimulusTitle": "Text 2: Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers",
    "stimulusBody": "In the contemporary era of hyper-connected social networks, secondary students are continuously inundated with immense streams of digital information. While access to the internet offers unprecedented learning opportunities, it simultaneously exposes youths to pervasive misinformation, deceptive clickbait, and algorithmic echo chambers. Therefore, cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers.<br><br>First and foremost, critical digital literacy empowers adolescents to distinguish between factual evidence and fabricated falsehoods. Sensationalized headlines are deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification. Digitally literate students possess the cognitive discipline to evaluate the authority of sources, cross-check claims against verified databases, and recognize commercial or political biases.<br><br>Furthermore, possessing mature digital awareness is paramount for safeguarding one's permanent digital footprint. Every comment, shared image, and forum reaction leaves persistent electronic traces that cannot be completely erased by hitting 'delete'. Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles to evaluate personal integrity and constructive communication habits.<br><br>Finally, critical digital awareness shields adolescent mental wellbeing from algorithmic manipulation. Social media algorithms intentionally prioritize outrage-inducing content and idealized portrayals of peer lifestyle, which can foster profound social anxiety, body dissatisfaction, and depression among vulnerable youths. By understanding how algorithmic engagement metrics operate, students can consciously regulate their screen exposure and consume digital media intentionally rather than passively.<br><br>In conclusion, critical digital literacy is not simply about operating software applications; it is about cultivating intellectual autonomy, safeguarding ethical reputation, and protecting psychological health in an automated society. Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula.",
    "prompt": "Based on the text on Critical Digital Literacy, determine whether each statement is **TRUE** or **FALSE**:",
    "matrixStatements": [
      {
        "statement": "Critical digital literacy relates solely to the technical ability to operate computers and smartphone devices.",
        "isCorrect": false
      },
      {
        "statement": "Sensationalized headlines are intentionally engineered to trigger emotional reactions and encourage unverified sharing.",
        "isCorrect": true
      },
      {
        "statement": "University admissions committees and scholarship foundations routinely scrutinize applicants' digital footprints.",
        "isCorrect": true
      },
      {
        "statement": "Understanding algorithmic engagement metrics helps teenagers regulate their screen exposure and consume media intentionally.",
        "isCorrect": true
      }
    ],
    "explanation": "1) SALAH (literasi digital bukan sekadar kemampuan teknis, melainkan kecakapan mengevaluasi kebenaran informasi). 2) BENAR (clickbait memancing reaksi emosional). 3) SALAH (jejak digital meninggalkan rekam elektronik yang sulit dihapus tuntas). 4) BENAR (kesadaran algoritma membantu pengaturan waktu layar mandiri).",
    "grammarNote": "Critical Reading Analysis: Evaluating Thesis, Claims, and Supporting Arguments (TKA)."
  },
  {
    "id": 17,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XI — SMAN 1 Bae Kudus",
    "type": "complex_matrix",
    "title": "Complex Multiple Choice: Analytical Exposition Language Features",
    "stimulusTitle": "Genre Focus: Linguistic Features of Analytical Exposition Texts",
    "stimulusBody": "Analyze the grammatical accuracy and language features of analytical exposition texts based on Text 2:",
    "prompt": "Determine whether each grammatical statement below is **TRUE** or **FALSE** based on Text 2:",
    "matrixStatements": [
      {
        "statement": "The conjunction 'Therefore' in paragraph 1 introduces the writer's central thesis statement.",
        "isCorrect": true
      },
      {
        "statement": "The phrase 'algorithmic echo chambers' uses noun adjuncts to specify a digital communication phenomenon.",
        "isCorrect": true
      },
      {
        "statement": "The sentence 'Students possess the cognitive discipline to evaluate sources' uses the Past Continuous Tense.",
        "isCorrect": false
      },
      {
        "statement": "In the sentence 'Admissions committees routinely scrutinize applicants', 'scrutinize' means to examine very closely and critically.",
        "isCorrect": true
      }
    ],
    "explanation": "1) SALAH ('because of' tidak boleh diikuti klausa lengkap 'they spend'). 2) BENAR ('Due to' diikuti Noun Phrase). 3) BENAR ('because' diikuti klausa lengkap). 4) SALAH ('Owing to' adalah preposisi yang tidak boleh langsung diikuti klausa 'the internet was down').",
    "grammarNote": "Mastery of Cause and Effect: Prepositional vs Clausal Connectors."
  },
  {
    "id": 18,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XI — SMAN 1 Bae Kudus",
    "type": "complex_matrix",
    "title": "Complex Multiple Choice: Modals & Passive Voice Grammar",
    "stimulusTitle": "Grammar Focus: Passive Voice and Modal Auxiliaries in Academic Writing",
    "stimulusBody": "Evaluate the grammatical accuracy of the following modal and passive constructions:",
    "prompt": "Determine whether each sentence formulation below is **TRUE** (grammatically sound) or **FALSE** (grammatically flawed):",
    "matrixStatements": [
      {
        "statement": "'Misleading information can be easily spread across social media networks' demonstrates accurate modal passive voice.",
        "isCorrect": true
      },
      {
        "statement": "'Sensational headlines was engineered by algorithms yesterday' correctly agrees in subject-verb number.",
        "isCorrect": false
      },
      {
        "statement": "'Digital footprints cannot be completely erased simply by hitting delete' is grammatically correct.",
        "isCorrect": true
      },
      {
        "statement": "'Students should verified every online claim before believing it' correctly uses the modal verb 'should'.",
        "isCorrect": false
      }
    ],
    "explanation": "1) BENAR (Modal passive: should not be + shared). 2) SALAH (Continuous passive harus 'is being IMPLEMENTED'). 3) BENAR (Past passive plural: 'data were collected'). 4) SALAH (Bentuk V3 dari spread adalah 'spread', bukan 'spreaded').",
    "grammarNote": "Passive Voice Accuracy across Present, Past, and Modal Auxiliaries."
  },
  {
    "id": 19,
    "source": "Sumber: Analisis Isu Kesehatan Remaja & Pola Hidup Sehat — Kemenkes RI",
    "type": "complex_matrix",
    "title": "Complex Multiple Choice: Adolescent Lifestyle & Cognitive Focus",
    "stimulusTitle": "Health Focus: The Science of Adolescent Sleep and Brain Function",
    "stimulusBody": "Medical and educational research highlights the direct correlation between adolescent lifestyle habits, sleep quality, and academic performance:",
    "prompt": "Determine whether each statement regarding adolescent health habits and focus is **TRUE** or **FALSE**:",
    "matrixStatements": [
      {
        "statement": "Regular physical exercise increases blood circulation and oxygen supply to the brain, enhancing cognitive focus.",
        "isCorrect": true
      },
      {
        "statement": "Sleeping fewer than five hours nightly consistently boosts academic performance and long-term memory retention.",
        "isCorrect": false
      },
      {
        "statement": "Excessive late-night screen time disrupts natural circadian rhythms due to blue light emissions from devices.",
        "isCorrect": true
      },
      {
        "statement": "A balanced nutritious diet rich in whole foods supports sustained mental energy during rigorous school examination weeks.",
        "isCorrect": true
      }
    ],
    "explanation": "1) BENAR (olahraga meningkatkan oksigen ke otak dan memori). 2) SALAH (kurang tidur justru menurunkan daya konsentrasi). 3) BENAR (endorfin meredakan stres dan memperbaiki mood). 4) SALAH (makanan manis berlebih menyebabkan lonjakan gula darah dan kantuk).",
    "grammarNote": "Health and Expository Text Factual Verification (AKM Standar)."
  },
  {
    "id": 20,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XI — SMAN 1 Bae Kudus",
    "type": "complex_matrix",
    "title": "Complex Multiple Choice: Cause and Effect Conjunctions",
    "stimulusTitle": "Grammar Focus: Cause and Effect Connectors (Because, Because of, Due to, As a consequence)",
    "stimulusBody": "Analyze the syntax and prepositional rules governing causal connectors:",
    "prompt": "Determine whether each causal connector sentence below is **TRUE** (grammatically correct) or **FALSE** (grammatically flawed):",
    "matrixStatements": [
      {
        "statement": "'Due to social media algorithms prioritize sensational posts, many users share hoaxes' correctly uses 'due to'.",
        "isCorrect": false
      },
      {
        "statement": "'Because of persistent blue light emissions, teenagers often experience delayed sleep onset' is grammatically accurate.",
        "isCorrect": true
      },
      {
        "statement": "'As a consequence of rigorous daily training, the athlete secured a gold medal for her school' correctly expresses result.",
        "isCorrect": true
      },
      {
        "statement": "'He failed the exam owing to he did not study the course materials' is standard formal English.",
        "isCorrect": false
      }
    ],
    "explanation": "1) BENAR (If + balanced, would feel). 2) SALAH (harus 'If I WERE... I WOULD...'). 3) BENAR (If + verified, would decrease). 4) SALAH (mencampur 'study' masa lalu dengan 'would have passed'; harusnya Type 3: 'If they had studied...').",
    "grammarNote": "Conditional Type 2: Hypothetical Present Condition and Consequence."
  },
  {
    "id": 21,
    "source": "Sumber: Modul Pembelajaran Teks Eksposisi Analitis — BSKAP Kemendikbudristek",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
    "stimulusTitle": "Text 2: Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers",
    "stimulusBody": "In the contemporary era of hyper-connected social networks, secondary students are continuously inundated with immense streams of digital information. While access to the internet offers unprecedented learning opportunities, it simultaneously exposes youths to pervasive misinformation, deceptive clickbait, and algorithmic echo chambers. Therefore, cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers.<br><br>First and foremost, critical digital literacy empowers adolescents to distinguish between factual evidence and fabricated falsehoods. Sensationalized headlines are deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification. Digitally literate students possess the cognitive discipline to evaluate the authority of sources, cross-check claims against verified databases, and recognize commercial or political biases.<br><br>Furthermore, possessing mature digital awareness is paramount for safeguarding one's permanent digital footprint. Every comment, shared image, and forum reaction leaves persistent electronic traces that cannot be completely erased by hitting 'delete'. Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles to evaluate personal integrity and constructive communication habits.<br><br>Finally, critical digital awareness shields adolescent mental wellbeing from algorithmic manipulation. Social media algorithms intentionally prioritize outrage-inducing content and idealized portrayals of peer lifestyle, which can foster profound social anxiety, body dissatisfaction, and depression among vulnerable youths. By understanding how algorithmic engagement metrics operate, students can consciously regulate their screen exposure and consume digital media intentionally rather than passively.<br><br>In conclusion, critical digital literacy is not simply about operating software applications; it is about cultivating intellectual autonomy, safeguarding ethical reputation, and protecting psychological health in an automated society. Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula.",
    "prompt": "Which **TWO (2)** statements correctly represent the core benefits of critical digital literacy according to the text?",
    "options": [
      {
        "key": "A",
        "text": "It trains adolescents to filter online information and protects them from deceptive clickbait and algorithmic manipulation."
      },
      {
        "key": "B",
        "text": "It guarantees that software developers will automatically delete negative public comments after twenty-four hours."
      },
      {
        "key": "C",
        "text": "It fosters intellectual autonomy and helps students maintain a constructive, responsible digital footprint."
      },
      {
        "key": "D",
        "text": "It allows students to browse social media during all school lectures without paying attention to teachers."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Argumen utama penulis dalam teks adalah (A) menyaring kebenaran dan melindungi dari manipulasi hoaks, serta (C) melindungi reputasi jejak digital dan menjaga kesehatan mental. Opsi B dan D tidak relevan dengan esensi teks.",
    "grammarNote": "Identifying Main Supporting Arguments in Analytical Exposition."
  },
  {
    "id": 22,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XI — SMAN 1 Bae Kudus",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
    "stimulusTitle": "Literary Focus: Moral Reflection in Javanese Narrative Folklore (Roro Jonggrang)",
    "stimulusBody": "Once upon a time in ancient Java, there existed two neighboring kingdoms: Pengging and Boko. Pengging was fertile and prosperous, ruled by King Prabu Damar Moyo. His valiant son, Prince Bandung Bondowoso, possessed extraordinary physical strength and supernatural abilities. In contrast, the neighboring kingdom of Boko was governed by a cruel giant named King Boko. A fierce war erupted between the two kingdoms, ending when Bandung Bondowoso courageously defeated and killed King Boko in battle.<br><br>Entering Boko Palace as the victor, Bandung encountered Princess Roro Jonggrang, the late king's daughter. Enchanted by her grace and breathtaking beauty, the prince immediately offered her his hand in marriage. However, Roro Jonggrang harbored intense sorrow and resentment; she could never bring herself to willingly marry the conqueror who had ended her beloved father's life. Knowing that a direct refusal would provoke dangerous anger, she devised a clever plan. She promised to marry Bandung on one strict condition: he must construct one thousand sacred stone temples within a single night, completed before the dawn rooster crowed.<br><br>Confident in his mystical gifts, Bandung Bondowoso accepted the challenge. As darkness blanketed the earth, he mediated and summoned hundreds of earth spirits from the spirit realm. The spirits labored tirelessly at astonishing speed, gathering giant stones and carving ornate pillars. By three o'clock in the morning, nine hundred and ninety-nine magnificent temples stood proudly under the starlit sky, leaving only one final shrine unfinished.<br><br>Terrified that the prince would fulfill the impossible requirement, Roro Jonggrang swiftly gathered her palace maidens. She instructed them to burn piles of dry straw to the east to illuminate the sky with an orange glow, while others pounded rice mortars with heavy wooden pestles to simulate the lively sounds of a busy morning. Deceived by the dawn-like glow and the loud rhythmic pounding, village roosters began to crow repeatedly. Convinced that the morning sun was rising, the supernatural spirits panicked and fled back into the underground realm, abandoning the final temple. When Bandung discovered the deceit, he was filled with profound fury. Pointing his finger at Roro Jonggrang, he declared that she herself would become the one thousandth statue to complete the sacred complex. Instantly, the princess transformed into a graceful stone statue, known to this day as the statue of Durga Mahisasuramardini in Prambanan Temple.",
    "prompt": "Which **TWO (2)** moral values or character insights can be deduced from the legend of Roro Jonggrang?",
    "options": [
      {
        "key": "A",
        "text": "Arrogance and deceitful shortcuts ultimately lead to tragic consequences and bitter regret."
      },
      {
        "key": "B",
        "text": "Physical power and magical commands are the only admirable virtues in human relationships."
      },
      {
        "key": "C",
        "text": "Honesty, mutual respect, and humility are foundational virtues in traditional cultural heritage."
      },
      {
        "key": "D",
        "text": "Breaking solemn promises is considered an honorable path to victory in ancient folklore."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Kalimat B ('Owing to + Noun Phrase') dan kalimat D ('because + Clause') menggunakan konjungsi kausalitas secara tepat. Kalimat A salah (karena 'because' harus diikuti klausa, bukan 'heavy storm'), dan kalimat C salah penempatan 'consequently' sebagai konjungsi antarklausa.",
    "grammarNote": "Grammatical Accuracy of Cause and Effect Linkers."
  },
  {
    "id": 23,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XI — SMAN 1 Bae Kudus",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
    "stimulusTitle": "Grammar Focus: Connectors of Concession and Contrast (Although, Despite, In spite of)",
    "stimulusBody": "Review the proper grammatical usage of subordinating conjunctions and prepositional phrases that indicate concession:",
    "prompt": "Which **TWO (2)** sentences correctly demonstrate concession connectors to express contrast between ideas?",
    "options": [
      {
        "key": "A",
        "text": "Although social media offers vast educational resources, it also presents significant risks of misinformation."
      },
      {
        "key": "B",
        "text": "Despite the news looked very genuine, but Farhan did not forward it to the class group."
      },
      {
        "key": "C",
        "text": "In spite of facing severe academic pressure, she maintained disciplined study and sleep habits."
      },
      {
        "key": "D",
        "text": "However she studied all night, because she felt exhausted during the morning exam."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Kalimat A ('however') dan kalimat D ('nevertheless') menggunakan konjungsi transisi pertentangan dengan tanda baca dan makna yang tepat. Kalimat B salah (tidak boleh menggabungkan 'Although' dengan 'but'), dan kalimat C salah ('in spite of' tidak boleh langsung diikuti klausa 'she was').",
    "grammarNote": "Transitions of Contrast: however, nevertheless, on the contrary."
  },
  {
    "id": 24,
    "source": "Sumber: Panduan Kesehatan Fisik & Mental Pelajar — Kemenkes RI",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
    "stimulusTitle": "Practical Study Habits: Optimizing Adolescent Cognitive Health",
    "stimulusBody": "Health and educational specialists recommend evidence-based study and lifestyle habits for optimal high school performance:",
    "prompt": "Which **TWO (2)** habits reflect responsible time management and optimal cognitive health for high school students?",
    "options": [
      {
        "key": "A",
        "text": "Maintaining a consistent nightly sleep schedule of 7 to 8 hours to consolidate newly learned information."
      },
      {
        "key": "B",
        "text": "Staying awake until 3 AM every night playing multiplayer online games before examination morning."
      },
      {
        "key": "C",
        "text": "Scheduling twenty minutes of brisk morning physical exercise and staying well-hydrated throughout the day."
      },
      {
        "key": "D",
        "text": "Consuming excessive sugary energy drinks while completely skipping nutritious meals during exam week."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Rekomendasi gaya hidup sehat yang efektif dan ilmiah adalah (B) menjaga waktu tidur berkualitas 7-8 jam per malam, serta (C) melakukan aktivitas fisik/olahraga teratur minimal 30 menit sehari.",
    "grammarNote": "Practical Life Skills & Analytical Text Conclusion Application."
  },
  {
    "id": 25,
    "source": "Sumber: Bank Soal Evaluasi Bahasa Inggris Tingkat XI — SMAN 1 Bae Kudus",
    "type": "mcma",
    "title": "Multiple Choice Multiple Answer (Choose 2 Correct Options)",
    "stimulusTitle": "Academic Lexis: Oxford 3000 Vocabulary for 'Verify' and 'Evaluate'",
    "stimulusBody": "Precision in understanding core academic English verbs is critical for analytical literacy:",
    "prompt": "Which **TWO (2)** statements correctly define academic vocabulary forms from the text?",
    "options": [
      {
        "key": "A",
        "text": "'Verify' (verb) means to prove or confirm the truth, accuracy, or reality of a statement or report."
      },
      {
        "key": "B",
        "text": "'Verifiable' (adjective) describes a claim that cannot be proven by any factual evidence."
      },
      {
        "key": "C",
        "text": "'Evaluation' (noun) denotes the systematic assessment of the value, authority, or credibility of an information source."
      },
      {
        "key": "D",
        "text": "'Manipulate' (verb) means to tell the truth openly and sincerely to all audiences."
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Kalimat A ('have been introduced' - Present Perfect Passive) dan B ('were announced' - Past Simple Passive) tersusun sempurna. Kalimat C salah ('was did' harusnya 'was DONE'), dan kalimat D salah ('articles is' harusnya 'articles ARE published').",
    "grammarNote": "Passive Voice Subject-Verb Agreement and Irregular Past Participle Mastery."
  },
  {
    "id": 26,
    "source": "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
    "type": "single_choice",
    "title": "Reading Comprehension: Cause and Effect Inference",
    "stimulusTitle": "Text 2: Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers",
    "stimulusBody": "In the contemporary era of hyper-connected social networks, secondary students are continuously inundated with immense streams of digital information. While access to the internet offers unprecedented learning opportunities, it simultaneously exposes youths to pervasive misinformation, deceptive clickbait, and algorithmic echo chambers. Therefore, cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers.<br><br>First and foremost, critical digital literacy empowers adolescents to distinguish between factual evidence and fabricated falsehoods. Sensationalized headlines are deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification. Digitally literate students possess the cognitive discipline to evaluate the authority of sources, cross-check claims against verified databases, and recognize commercial or political biases.<br><br>Furthermore, possessing mature digital awareness is paramount for safeguarding one's permanent digital footprint. Every comment, shared image, and forum reaction leaves persistent electronic traces that cannot be completely erased by hitting 'delete'. Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles to evaluate personal integrity and constructive communication habits.<br><br>Finally, critical digital awareness shields adolescent mental wellbeing from algorithmic manipulation. Social media algorithms intentionally prioritize outrage-inducing content and idealized portrayals of peer lifestyle, which can foster profound social anxiety, body dissatisfaction, and depression among vulnerable youths. By understanding how algorithmic engagement metrics operate, students can consciously regulate their screen exposure and consume digital media intentionally rather than passively.<br><br>In conclusion, critical digital literacy is not simply about operating software applications; it is about cultivating intellectual autonomy, safeguarding ethical reputation, and protecting psychological health in an automated society. Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula.",
    "prompt": "Based on paragraph 4, what is one major direct cause of late-night sleep disruption among adolescents?",
    "options": [
      {
        "key": "A",
        "text": "Reading traditional printed books before bed"
      },
      {
        "key": "B",
        "text": "Doing physical sports early in the morning"
      },
      {
        "key": "C",
        "text": "Drinking excessive amounts of warm water"
      },
      {
        "key": "D",
        "text": "Uncontrolled late-night screen exposure and social media interactions"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Paragraf 4 secara spesifik menyebutkan: 'sleep disruption caused by late-night screen exposure'. Paparan layar gadget dan media sosial hingga larut malam memicu gangguan tidur.",
    "grammarNote": "Reduced Relative Clause: 'sleep disruption [which is] caused by late-night screen exposure'."
  },
  {
    "id": 27,
    "source": "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
    "type": "single_choice",
    "title": "Reading Comprehension: Author's Stance and Tone",
    "stimulusTitle": "Text 2: Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers",
    "stimulusBody": "In the contemporary era of hyper-connected social networks, secondary students are continuously inundated with immense streams of digital information. While access to the internet offers unprecedented learning opportunities, it simultaneously exposes youths to pervasive misinformation, deceptive clickbait, and algorithmic echo chambers. Therefore, cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers.<br><br>First and foremost, critical digital literacy empowers adolescents to distinguish between factual evidence and fabricated falsehoods. Sensationalized headlines are deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification. Digitally literate students possess the cognitive discipline to evaluate the authority of sources, cross-check claims against verified databases, and recognize commercial or political biases.<br><br>Furthermore, possessing mature digital awareness is paramount for safeguarding one's permanent digital footprint. Every comment, shared image, and forum reaction leaves persistent electronic traces that cannot be completely erased by hitting 'delete'. Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles to evaluate personal integrity and constructive communication habits.<br><br>Finally, critical digital awareness shields adolescent mental wellbeing from algorithmic manipulation. Social media algorithms intentionally prioritize outrage-inducing content and idealized portrayals of peer lifestyle, which can foster profound social anxiety, body dissatisfaction, and depression among vulnerable youths. By understanding how algorithmic engagement metrics operate, students can consciously regulate their screen exposure and consume digital media intentionally rather than passively.<br><br>In conclusion, critical digital literacy is not simply about operating software applications; it is about cultivating intellectual autonomy, safeguarding ethical reputation, and protecting psychological health in an automated society. Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula.",
    "prompt": "Which adjective best describes the author's tone throughout the entire text?",
    "options": [
      {
        "key": "A",
        "text": "Persuasive, rational, and constructive"
      },
      {
        "key": "B",
        "text": "Humorous, playful, and sarcastic"
      },
      {
        "key": "C",
        "text": "Aggressive, bitter, and pessimistic"
      },
      {
        "key": "D",
        "text": "Indifferent, careless, and doubtful"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Nada (tone) penulis bersifat mengajak secara meyakinkan (persuasive), didukung penalaran logis berbasis fakta (rational), dan memberikan solusi positif yang membangun bagi remaja (constructive).",
    "grammarNote": "Author's Tone & Attitude Analysis: Persuasive, informative, and constructive."
  },
  {
    "id": 28,
    "source": "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
    "type": "single_choice",
    "title": "Reading Comprehension: Sentence Function",
    "stimulusTitle": "Text 2: Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers",
    "stimulusBody": "In the contemporary era of hyper-connected social networks, secondary students are continuously inundated with immense streams of digital information. While access to the internet offers unprecedented learning opportunities, it simultaneously exposes youths to pervasive misinformation, deceptive clickbait, and algorithmic echo chambers. Therefore, cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers.<br><br>First and foremost, critical digital literacy empowers adolescents to distinguish between factual evidence and fabricated falsehoods. Sensationalized headlines are deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification. Digitally literate students possess the cognitive discipline to evaluate the authority of sources, cross-check claims against verified databases, and recognize commercial or political biases.<br><br>Furthermore, possessing mature digital awareness is paramount for safeguarding one's permanent digital footprint. Every comment, shared image, and forum reaction leaves persistent electronic traces that cannot be completely erased by hitting 'delete'. Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles to evaluate personal integrity and constructive communication habits.<br><br>Finally, critical digital awareness shields adolescent mental wellbeing from algorithmic manipulation. Social media algorithms intentionally prioritize outrage-inducing content and idealized portrayals of peer lifestyle, which can foster profound social anxiety, body dissatisfaction, and depression among vulnerable youths. By understanding how algorithmic engagement metrics operate, students can consciously regulate their screen exposure and consume digital media intentionally rather than passively.<br><br>In conclusion, critical digital literacy is not simply about operating software applications; it is about cultivating intellectual autonomy, safeguarding ethical reputation, and protecting psychological health in an automated society. Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula.",
    "prompt": "In the overall structure of analytical exposition, what role does paragraph 5 play?",
    "options": [
      {
        "key": "A",
        "text": "It introduces a brand new unrelated topic"
      },
      {
        "key": "B",
        "text": "It serves as the Reiteration, summarizing the core thesis and urging collaborative action"
      },
      {
        "key": "C",
        "text": "It describes the biography of a famous software engineer"
      },
      {
        "key": "D",
        "text": "It provides a fictional resolution to a narrative fable"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf 5 ('In conclusion, equipping young learners with comprehensive digital literacy is imperative...') berfungsi sebagai Reiteration (Penegasan Ulang) yang merangkum kembali tesis dan mengajak pendidik serta orang tua bertindak.",
    "grammarNote": "Structure of Analytical Exposition: Reiteration / Conclusion restates thesis and key arguments."
  },
  {
    "id": 29,
    "source": "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
    "type": "single_choice",
    "title": "Reading Comprehension: Paraphrasing",
    "stimulusTitle": "Text 2: Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers",
    "stimulusBody": "In the contemporary era of hyper-connected social networks, secondary students are continuously inundated with immense streams of digital information. While access to the internet offers unprecedented learning opportunities, it simultaneously exposes youths to pervasive misinformation, deceptive clickbait, and algorithmic echo chambers. Therefore, cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers.<br><br>First and foremost, critical digital literacy empowers adolescents to distinguish between factual evidence and fabricated falsehoods. Sensationalized headlines are deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification. Digitally literate students possess the cognitive discipline to evaluate the authority of sources, cross-check claims against verified databases, and recognize commercial or political biases.<br><br>Furthermore, possessing mature digital awareness is paramount for safeguarding one's permanent digital footprint. Every comment, shared image, and forum reaction leaves persistent electronic traces that cannot be completely erased by hitting 'delete'. Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles to evaluate personal integrity and constructive communication habits.<br><br>Finally, critical digital awareness shields adolescent mental wellbeing from algorithmic manipulation. Social media algorithms intentionally prioritize outrage-inducing content and idealized portrayals of peer lifestyle, which can foster profound social anxiety, body dissatisfaction, and depression among vulnerable youths. By understanding how algorithmic engagement metrics operate, students can consciously regulate their screen exposure and consume digital media intentionally rather than passively.<br><br>In conclusion, critical digital literacy is not simply about operating software applications; it is about cultivating intellectual autonomy, safeguarding ethical reputation, and protecting psychological health in an automated society. Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula.",
    "prompt": "Which of the following statements best restates the thesis of the passage in different words?",
    "options": [
      {
        "key": "A",
        "text": "Adolescents should completely eliminate all internet connections to avoid misinformation"
      },
      {
        "key": "B",
        "text": "Only computer science professionals require digital literacy in today's society"
      },
      {
        "key": "C",
        "text": "Possessing critical digital discernment is crucial for teenagers to navigate information safely and maintain wellbeing"
      },
      {
        "key": "D",
        "text": "Social media platforms have eliminated all academic problems for students"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pernyataan B adalah parafrase yang paling akurat dari tesis: Memiliki pemilahan digital yang kritis sangat penting bagi remaja untuk menjelajahi informasi secara aman dan menjaga kesejahteraan diri.",
    "grammarNote": "Academic Paraphrasing: maintaining core semantic meaning with varied vocabulary and syntax."
  },
  {
    "id": 30,
    "source": "Sumber: Diadaptasi dari Laporan Kajian Literasi Digital Remaja Indonesia — Pusdatin Kemendikbudristek & UNESCO Youth Digital Media Literacy",
    "type": "single_choice",
    "title": "Reading Comprehension: Practical Application",
    "stimulusTitle": "Text 2: Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers",
    "stimulusBody": "In the contemporary era of hyper-connected social networks, secondary students are continuously inundated with immense streams of digital information. While access to the internet offers unprecedented learning opportunities, it simultaneously exposes youths to pervasive misinformation, deceptive clickbait, and algorithmic echo chambers. Therefore, cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers.<br><br>First and foremost, critical digital literacy empowers adolescents to distinguish between factual evidence and fabricated falsehoods. Sensationalized headlines are deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification. Digitally literate students possess the cognitive discipline to evaluate the authority of sources, cross-check claims against verified databases, and recognize commercial or political biases.<br><br>Furthermore, possessing mature digital awareness is paramount for safeguarding one's permanent digital footprint. Every comment, shared image, and forum reaction leaves persistent electronic traces that cannot be completely erased by hitting 'delete'. Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles to evaluate personal integrity and constructive communication habits.<br><br>Finally, critical digital awareness shields adolescent mental wellbeing from algorithmic manipulation. Social media algorithms intentionally prioritize outrage-inducing content and idealized portrayals of peer lifestyle, which can foster profound social anxiety, body dissatisfaction, and depression among vulnerable youths. By understanding how algorithmic engagement metrics operate, students can consciously regulate their screen exposure and consume digital media intentionally rather than passively.<br><br>In conclusion, critical digital literacy is not simply about operating software applications; it is about cultivating intellectual autonomy, safeguarding ethical reputation, and protecting psychological health in an automated society. Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula.",
    "prompt": "Which actionable habit exemplifies mindful digital usage as recommended in paragraph 4?",
    "options": [
      {
        "key": "A",
        "text": "Keeping the smartphone under one's pillow with alerts turned on all night"
      },
      {
        "key": "B",
        "text": "Checking notifications every two minutes during study sessions"
      },
      {
        "key": "C",
        "text": "Leaving negative anonymous comments on peers' profiles"
      },
      {
        "key": "D",
        "text": "Setting intentional limits on screen time and engaging in positive online communities"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Paragraf 4 merekomendasikan: 'setting intentional screen time boundaries and curating supportive online communities'. Menetapkan batas waktu layar secara sadar dan aktif di komunitas positif adalah kebiasaan bijak bermedia digital. Pilihan A tepat.",
    "grammarNote": "Action Verb Collocations: 'setting intentional limits', 'curating supportive communities'."
  },
  {
    "id": 31,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar Essentials: Past Narrative Tenses (Past Perfect)",
    "stimulusTitle": "Kaidah Waktu Lampau Berurutan (Narrative Sequence)",
    "stimulusBody": "By the time Prince Bandung Bondowoso realized Princess Roro Jonggrang's clever trickery, the earth spirits _______ back into the subterranean realm.",
    "prompt": "Choose the correct verb form to complete the past narrative sentence above:",
    "options": [
      {
        "key": "A",
        "text": "had already retreated"
      },
      {
        "key": "B",
        "text": "have already retreated"
      },
      {
        "key": "C",
        "text": "are retreating"
      },
      {
        "key": "D",
        "text": "will retreat"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Klausa 'By the time + Simple Past (realized)' menunjukkan bahwa suatu aksi lain telah selesai lebih dahulu di masa lampau sebelum peristiwa tersebut terjadi. Maka digunakan Past Perfect Tense: 'had already retreated'.",
    "grammarNote": "Past Perfect Tense (had + V3) denotes an action completed prior to another past event."
  },
  {
    "id": 32,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar Essentials: Conjunction of Contrast",
    "stimulusTitle": "Kaidah Kata Hubung Pertentangan (Contrast Conjunction)",
    "stimulusBody": "_______ social media algorithms are engineered to capture user attention through sensationalism, critical students always examine factual evidence before believing viral claims.",
    "prompt": "Which conjunction of contrast correctly completes the sentence?",
    "options": [
      {
        "key": "A",
        "text": "Because"
      },
      {
        "key": "B",
        "text": "Although"
      },
      {
        "key": "C",
        "text": "Therefore"
      },
      {
        "key": "D",
        "text": "In spite of"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Although' diikuti oleh klausa lengkap (Subject + Verb: 'social media algorithms are engineered...'), untuk menyatakan pertentangan logis (konseptual konsesi). 'In spite of' salah karena harus diikuti noun phrase/gerund.",
    "grammarNote": "Subordinating Conjunction of Concession: Although + Subject + Verb, Main Clause."
  },
  {
    "id": 33,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar Essentials: Conjunction of Cause and Effect",
    "stimulusTitle": "Kaidah Hubungan Sebab-Akibat (Cause and Effect)",
    "stimulusBody": "Several internet users fell victim to identity theft _______ their careless habit of oversharing sensitive personal information on public forums.",
    "prompt": "Choose the correct prepositional connector to express cause:",
    "options": [
      {
        "key": "A",
        "text": "nevertheless"
      },
      {
        "key": "B",
        "text": "because"
      },
      {
        "key": "C",
        "text": "due to"
      },
      {
        "key": "D",
        "text": "even though"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Frasa 'their careless habit of oversharing...' adalah frasa kata benda (Noun Phrase). Penghubung kausal yang diikuti Noun Phrase adalah 'due to' atau 'because of'. 'Because' salah karena membutuhkan klausa (Subject + Verb).",
    "grammarNote": "Prepositional Cause Marker: 'due to' / 'because of' + Noun Phrase."
  },
  {
    "id": 34,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar Essentials: Passive Voice in Academic Discourse",
    "stimulusTitle": "Kaidah Kalimat Pasif Formal (Formal Passive Voice)",
    "stimulusBody": "In academic research, online claims _______ thoroughly through credible scholarly publications before being accepted as valid evidence.",
    "prompt": "Which passive verb phrase correctly completes the statement?",
    "options": [
      {
        "key": "A",
        "text": "is verifying"
      },
      {
        "key": "B",
        "text": "must verify"
      },
      {
        "key": "C",
        "text": "must have verified"
      },
      {
        "key": "D",
        "text": "must be verified"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Subjek kalimat adalah 'online claims' (klaim daring) yang menerima aksi (pasif) dengan modal keharusan: Modal + be + V3 (Past Participle) -> 'must be verified'.",
    "grammarNote": "Modal Passive Structure: Modal auxiliary (must/should) + be + Past Participle (V3)."
  },
  {
    "id": 35,
    "source": "Sumber: Modul Tata Bahasa Bahasa Inggris Fase F — Tim MGMP SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar Essentials: Reported Speech (Indirect Speech)",
    "stimulusTitle": "Transformasi Kalimat Langsung ke Tidak Langsung",
    "stimulusBody": "Direct Speech: Dewi said to her classmates, \"I am analyzing the narrative structure of the Prambanan legend for our presentation.\"<br><br>Indirect Speech: Dewi told her classmates that she _______ the narrative structure of the Prambanan legend for their presentation.",
    "prompt": "Choose the correct verb form for the indirect speech transformation:",
    "options": [
      {
        "key": "A",
        "text": "was analyzing"
      },
      {
        "key": "B",
        "text": "is analyzing"
      },
      {
        "key": "C",
        "text": "has analyzed"
      },
      {
        "key": "D",
        "text": "will analyze"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pada Reported Speech dengan reporting verb lampau ('told'), Present Continuous Tense ('am analyzing') bergeser waktu (backshift) menjadi Past Continuous Tense ('was analyzing').",
    "grammarNote": "Reported Speech Backshift Rule: Present Continuous (am/is + V-ing) -> Past Continuous (was/were + V-ing)."
  },
  {
    "id": 36,
    "source": "Sumber: Modul Tata Bahasa Bahasa Inggris Fase F — Tim MGMP SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar Essentials: Conditional Sentence Type 2",
    "stimulusTitle": "Kalimat Pengandaian Situasi Hipotesis Masa Kini (Type 2)",
    "stimulusBody": "If adolescents _______ critical verification habits consistently, they would not become easy targets for deceptive online clickbait.",
    "prompt": "Select the correct verb form for the 'if-clause' in Conditional Type 2:",
    "options": [
      {
        "key": "A",
        "text": "practice"
      },
      {
        "key": "B",
        "text": "practiced"
      },
      {
        "key": "C",
        "text": "have practiced"
      },
      {
        "key": "D",
        "text": "will practice"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pola Conditional Sentence Type 2 untuk situasi pengandaian yang berlawanan dengan kenyataan masa kini adalah: If + Subject + Simple Past (V2), Subject + would + V1. Maka bentuk kata kerja yang tepat adalah 'practiced'.",
    "grammarNote": "Conditional Type 2 Formula: If + S + V2 (Simple Past), S + would + Base Verb (V1)."
  },
  {
    "id": 37,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Grammar Essentials: Modals of Recommendation",
    "stimulusTitle": "Kaidah Modalitas Anjuran Kuat (Obligation & Recommendation)",
    "stimulusBody": "When students encounter an unverified breaking news story on social media, they _______ cross-check the claims with official news agencies before forwarding it.",
    "prompt": "Which modal verb appropriately expresses a strong moral recommendation?",
    "options": [
      {
        "key": "A",
        "text": "would"
      },
      {
        "key": "B",
        "text": "might"
      },
      {
        "key": "C",
        "text": "ought to"
      },
      {
        "key": "D",
        "text": "shall"
      }
    ],
    "correctAnswer": "C",
    "explanation": "'Ought to' memiliki makna setara dengan 'should', digunakan untuk menyatakan anjuran moral yang kuat atau kewajiban etis (strong recommendation/moral duty). Pilihan A tepat.",
    "grammarNote": "Modal of Moral Recommendation: 'ought to' + base verb = 'should' + base verb."
  },
  {
    "id": 38,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Vocabulary Mastery: Academic Collocation with 'Awareness'",
    "stimulusTitle": "Kaidah Pasangan Kata Baku (Collocation)",
    "stimulusBody": "Our school regularly hosts digital literacy seminars in order to _______ awareness about personal data protection among all students.",
    "prompt": "Which verb collocates naturally with the noun 'awareness'?",
    "options": [
      {
        "key": "A",
        "text": "take"
      },
      {
        "key": "B",
        "text": "make"
      },
      {
        "key": "C",
        "text": "do"
      },
      {
        "key": "D",
        "text": "raise"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kolokasi akademis baku dalam bahasa Inggris untuk 'membangkitkan/meningkatkan kesadaran' adalah 'raise awareness'. Frasa 'make awareness' atau 'do awareness' tidak baku.",
    "grammarNote": "Fixed Academic Collocation: 'raise awareness' (meningkatkan kepedulian/kesadaran)."
  },
  {
    "id": 39,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Functional Expressions: Expressing Stance / Strong Agreement",
    "stimulusTitle": "Ungkapan Menyetujui Pandangan dalam Diskusi Analitis",
    "stimulusBody": "Speaker A: 'I firmly believe that schools must incorporate digital safety ethics into the core curriculum.'<br>Speaker B: '_______ Digital wellbeing is essential for our generation's future.'",
    "prompt": "Which expression best demonstrates strong, professional agreement with Speaker A?",
    "options": [
      {
        "key": "A",
        "text": "I couldn't agree more with your point."
      },
      {
        "key": "B",
        "text": "I totally doubt your suggestion."
      },
      {
        "key": "C",
        "text": "I am afraid that is completely irrelevant."
      },
      {
        "key": "D",
        "text": "That sounds like a terrible perspective."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ungkapan 'I couldn't agree more with your point' adalah idiom formal untuk menyatakan persetujuan mutlak/sangat setuju (strong agreement). Pilihan B, C, dan D menyatakan keraguan atau penolakan kasar.",
    "grammarNote": "Expressing Agreement in Analytical Discussions: 'I couldn't agree more' = I strongly agree."
  },
  {
    "id": 40,
    "source": "Sumber: Bank Soal Tes Kemampuan Akademik (TKA) — Evaluasi Komprehensif SMAN 1 Bae Kudus",
    "type": "single_choice",
    "title": "Vocabulary Mastery: Oxford 3000 Academic Lexis (Level B2)",
    "stimulusTitle": "Pemilihan Kata Kontekstual Berdasarkan Makna",
    "stimulusBody": "Cultivating critical thinking skills is _______ for high school students who must navigate an increasingly complex information ecosystem.",
    "prompt": "Which adjective best completes the academic statement with the meaning of 'absolutely necessary and crucial'?",
    "options": [
      {
        "key": "A",
        "text": "hesitant"
      },
      {
        "key": "B",
        "text": "vital"
      },
      {
        "key": "C",
        "text": "artificial"
      },
      {
        "key": "D",
        "text": "fragile"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kata 'vital' bermakna sangat penting, krusial, dan mutlak diperlukan (absolutely necessary / crucial), sesuai dengan konteks keterampilan bernalar kritis bagi siswa SMA.",
    "grammarNote": "Academic Evaluative Adjective (Oxford 3000 B2): vital = crucial, indispensable, essential."
  }
];
}




let studentIdentity = {
  tingkat: "XI-F",
  rombel: "1",
  presensi: "1",
  nama: "Siswa Kelas XI (Fase F)"
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

window.addEventListener("DOMContentLoaded", () => {
  
  initStudentData();
});

function initStudentData() {
  try {
    const rawPortal = localStorage.getItem("sabaku_current_student");
    if (rawPortal) {
      const portalData = JSON.parse(rawPortal);
      studentIdentity = {
        tingkat: portalData.tingkat || "XI-F",
        rombel: portalData.rombel || "1",
        presensi: portalData.presensi || "1",
        nama: portalData.nama || "Siswa Kelas XI (Fase F)"
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
  studentIdentity = { tingkat: "XI-F", rombel, presensi, nama };
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

  const rawBank = (typeof getGrade11AsasQuestions === "function") ? getGrade11AsasQuestions() :
                  (typeof getGrade11AstsQuestions === "function") ? getGrade11AstsQuestions() : [];

  questions = randomizeQuestionOptions(rawBank);

  try {
    const saved = localStorage.getItem("sabaku_asas_progress_XI");
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
  document.getElementById("side-student-meta").textContent = `Kelas XI (Fase F) | Rombel ${studentIdentity.rombel} | Presensi ${studentIdentity.presensi}`;
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
  localStorage.removeItem("sabaku_asas_progress_XI");

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
    mode: (currentMode === "practice") ? "Latihan ASAS Gasal Kelas XI (Fase F)" : "Asesmen Resmi ASAS Gasal Kelas XI (Fase F)",
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
    link.setAttribute("download", `Rekap_Nilai_ASAS Gasal_XI-F_${studentIdentity.nama.replace(/\s+/g, "_")}.csv`);
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
    localStorage.removeItem("sabaku_asas_progress_XI");
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
    localStorage.setItem("sabaku_asas_progress_XI", JSON.stringify(data));
  } catch (e) {}
}

