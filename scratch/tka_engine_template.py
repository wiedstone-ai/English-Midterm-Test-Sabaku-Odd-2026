# -*- coding: utf-8 -*-
"""
Unified TKA Client Engine Template for all 10 ASAS and ASTS tests.
Features:
- Full support for:
  * type: "single_choice"
  * type: "listening_pictures"
  * type: "listening_dialog"
  * type: "listening_talk"
  * type: "complex_matrix" (True/False Table)
  * type: "mcma" (Multiple Choice Multiple Answer Checkboxes)
- Multi-Speaker Web Speech API audio player:
  * Indonesian names pronounced with native Indonesian voice (lang: 'id-ID')
  * Dialogues with voice timbre modulation (female pitch 1.25, male pitch 0.85) without speaking person names
- Fisher-Yates Shuffler for options, matrix statements, and key re-mapping
- LocalStorage autosave and progress restoration
- Automatic scoring, KKTP 75 evaluation, and explanation key formatting
- Google Apps Script sync (POST with Image beacon fallback)
- Offline CSV result download
- ASTS authentication guard support (checkAstsAuth)
"""

def get_engine_js(test_type, grade_code, grade_name, storage_key, default_mode, is_asts=False):
    auth_guard = ""
    if is_asts:
        auth_guard = """
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
"""

    init_auth_call = "if (!checkAstsAuth()) return;" if is_asts else ""
    mode_label_practice = "🎯 Mode Latihan " + test_type
    mode_label_exam = "📝 Asesmen Resmi " + test_type

    return f"""{auth_guard}
let studentIdentity = {{
  tingkat: "{grade_code}",
  rombel: "1",
  presensi: "1",
  nama: "Siswa {grade_name}"
}};

let currentMode = "{default_mode}"; // 'practice' or 'exam'
let currentQuestionIndex = 0;
let userAnswers = {{}}; // {{ questionId: answerKey or object or array }}
let flaggedQuestions = new Set();
let timerInterval = null;
let remainingSeconds = 90 * 60; // 90 minutes
let isExamSubmitted = false;
let audioSpeechRate = 1.0;
let questions = [];

// =========================================================================
// FISHER-YATES SHUFFLER (OPTIONS, MATRIX STATEMENTS, AND MCMA)
// =========================================================================
function randomizeQuestionOptions(rawQuestions) {{
  return rawQuestions.map(q => {{
    const cloned = JSON.parse(JSON.stringify(q));
    
    // Shuffle matrix statements if complex_matrix
    if (cloned.type === "complex_matrix" && Array.isArray(cloned.matrixStatements)) {{
      const stmts = [...cloned.matrixStatements];
      for (let i = stmts.length - 1; i > 0; i--) {{
        const j = Math.floor(Math.random() * (i + 1));
        [stmts[i], stmts[j]] = [stmts[j], stmts[i]];
      }}
      cloned.matrixStatements = stmts;
    }}
    // Shuffle options for single_choice, mcma, listening_dialog, listening_talk (exclude SVGs)
    else if (Array.isArray(cloned.options) && cloned.options.length > 0 && !cloned.options[0].svg) {{
      const opts = [...cloned.options];
      const isMCMA = cloned.type === "mcma" && Array.isArray(cloned.correctAnswer);
      const originalCorrect = isMCMA ? [...cloned.correctAnswer] : cloned.correctAnswer;
      
      for (let i = opts.length - 1; i > 0; i--) {{
        const j = Math.floor(Math.random() * (i + 1));
        [opts[i], opts[j]] = [opts[j], opts[i]];
      }}
      
      const alphabet = ["A", "B", "C", "D", "E"];
      const keyMap = {{}};
      cloned.options = opts.map((opt, idx) => {{
        keyMap[opt.key] = alphabet[idx];
        return {{
          key: alphabet[idx],
          text: opt.text
        }};
      }});
      
      if (isMCMA) {{
        cloned.correctAnswer = originalCorrect.map(k => keyMap[k] || k).sort();
      }} else if (typeof cloned.correctAnswer === "string") {{
        cloned.correctAnswer = keyMap[cloned.correctAnswer] || cloned.correctAnswer;
      }}
    }}
    return cloned;
  }});
}}

// =========================================================================
// LIFECYCLE INITIALIZATION
// =========================================================================
window.addEventListener("DOMContentLoaded", () => {{
  {init_auth_call}
  initStudentData();
}});

function initStudentData() {{
  try {{
    const rawPortal = localStorage.getItem("sabaku_current_student");
    if (rawPortal) {{
      const portalData = JSON.parse(rawPortal);
      studentIdentity = {{
        tingkat: portalData.tingkat || "{grade_code}",
        rombel: portalData.rombel || "1",
        presensi: portalData.presensi || "1",
        nama: portalData.nama || "Siswa {grade_name}"
      }};
      currentMode = portalData.mode || "{default_mode}";
      startFreshTest();
      return;
    }}
  }} catch (e) {{
    console.warn("Portal data error:", e);
  }}

  document.getElementById("identity-prompt-modal").style.display = "flex";
}}

function handleDirectIdentitySubmit(e) {{
  e.preventDefault();
  const nama = document.getElementById("direct-nama").value.trim();
  const rombel = document.getElementById("direct-rombel").value;
  const presensi = document.getElementById("direct-presensi").value.trim();
  const mode = document.getElementById("direct-mode").value;

  studentIdentity = {{
    tingkat: "{grade_code}",
    rombel,
    presensi,
    nama
  }};
  currentMode = mode;

  document.getElementById("identity-prompt-modal").style.display = "none";
  startFreshTest();
}}

function validateDirectPresensi(input) {{
  let val = input.value.replace(/\\D/g, "");
  if (val.startsWith("0")) val = val.replace(/^0+/, "");
  let num = parseInt(val, 10);
  if (num > 36) val = "36";
  input.value = val;
}}

function toggleDirectToken(mode) {{}}

function startFreshTest() {{
  userAnswers = {{}};
  flaggedQuestions.clear();
  isExamSubmitted = false;
  remainingSeconds = 90 * 60;
  currentQuestionIndex = 0;

  const rawBank = getQuestionBank();
  questions = randomizeQuestionOptions(rawBank);

  try {{
    const saved = localStorage.getItem("{storage_key}");
    if (saved) {{
      const parsed = JSON.parse(saved);
      if (parsed.userAnswers) userAnswers = parsed.userAnswers;
      if (parsed.flaggedQuestions) flaggedQuestions = new Set(parsed.flaggedQuestions);
      if (parsed.remainingSeconds) remainingSeconds = parsed.remainingSeconds;
      if (parsed.currentIndex !== undefined) currentQuestionIndex = parsed.currentIndex;
    }}
  }} catch (err) {{
    console.warn("Progress restore warning:", err);
  }}

  applyStudentMetadata();
  buildNavigatorGrid();
  startTimer();
  renderQuestion(currentQuestionIndex);
  saveProgressToLocalStorage();
}}

function applyStudentMetadata() {{
  const modeBadge = document.getElementById("nav-mode-badge");
  modeBadge.textContent = (currentMode === "practice") ? "{mode_label_practice}" : "{mode_label_exam}";
  modeBadge.className = "badge-mode " + (currentMode === "practice" ? "practice" : "exam");

  document.getElementById("side-student-name").textContent = studentIdentity.nama;
  document.getElementById("side-student-meta").textContent = `{grade_name} | Rombel ${{studentIdentity.rombel}} | Presensi ${{studentIdentity.presensi}}`;
}}

function toggleKisiKisiContent() {{
  const body = document.getElementById("kisi-kisi-body");
  const icon = document.getElementById("kisi-toggle-icon");
  if (body.style.display === "none") {{
    body.style.display = "block";
    icon.textContent = "▲ Sembunyikan Kisi-Kisi";
  }} else {{
    body.style.display = "none";
    icon.textContent = "▼ Buka Kisi-Kisi Lengkap";
  }}
}}

function toggleKisiKisiModal() {{
  const body = document.getElementById("kisi-kisi-body");
  body.style.display = "block";
  document.getElementById("kisi-toggle-icon").textContent = "▲ Sembunyikan Kisi-Kisi";
  window.scrollTo({{ top: 0, behavior: 'smooth' }});
}}

function buildNavigatorGrid() {{
  const grid = document.getElementById("question-navigator-grid");
  grid.innerHTML = "";
  
  questions.forEach((q, idx) => {{
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "q-num-btn";
    btn.id = `nav-btn-${{idx}}`;
    btn.textContent = idx + 1;
    btn.onclick = () => renderQuestion(idx);
    grid.appendChild(btn);
  }});
  updateNavigatorStatus();
}}

function updateNavigatorStatus() {{
  questions.forEach((q, idx) => {{
    const btn = document.getElementById(`nav-btn-${{idx}}`);
    if (!btn) return;
    
    btn.classList.remove("active", "answered", "doubtful");
    
    if (idx === currentQuestionIndex) {{
      btn.classList.add("active");
    }}
    
    if (flaggedQuestions.has(idx)) {{
      btn.classList.add("doubtful");
    }} else if (isQuestionAnswered(q.id)) {{
      btn.classList.add("answered");
    }}
  }});
}}

function isQuestionAnswered(qId) {{
  const ans = userAnswers[qId];
  if (ans === undefined || ans === null) return false;
  if (Array.isArray(ans)) return ans.length > 0;
  if (typeof ans === "object") return Object.keys(ans).length > 0;
  return ans !== "";
}}

// =========================================================================
// QUESTION RENDERER
// =========================================================================
function renderQuestion(index) {{
  if (index < 0 || index >= questions.length) return;
  currentQuestionIndex = index;
  const q = questions[index];

  stopAudio();

  // Header badges
  document.getElementById("q-number-badge").textContent = `Soal No. ${{q.id}} dari ${{questions.length}}`;
  document.getElementById("q-type-badge").textContent = q.title || "Pilihan Ganda";

  // Listening Audio Box
  const listeningBox = document.getElementById("listening-container");
  if (q.audioText || (q.audioSegments && q.audioSegments.length > 0)) {{
    listeningBox.style.display = "block";
    document.getElementById("audio-status-text").textContent = "Klik 'Putar Audio' untuk menyimak wacana otentik.";
  }} else {{
    listeningBox.style.display = "none";
  }}

  // Stimulus Text Box
  const stimBox = document.getElementById("stimulus-container");
  if (q.stimulusBody && q.type !== "listening_pictures") {{
    stimBox.style.display = "block";
    document.getElementById("stimulus-title").textContent = q.stimulusTitle || "Teks Stimulus";
    document.getElementById("stimulus-body").innerHTML = q.stimulusBody;
    const srcEl = document.getElementById("stimulus-source");
    if (srcEl) {{
      if (q.source) {{
        srcEl.style.display = "block";
        srcEl.innerHTML = `📌 <strong>${{q.source}}</strong>`;
      }} else {{
        srcEl.style.display = "none";
      }}
    }}
  }} else {{
    stimBox.style.display = "none";
  }}

  // Question Prompt
  const promptBox = document.getElementById("question-prompt-text");
  let srcBadge = "";
  if (q.source) {{
    srcBadge = `<div class="source-citation" style="margin-top: 10px; font-size: 0.8rem; color: #475569; background: #f8fafc; border-left: 3.5px solid var(--accent-teal); padding: 6px 12px; border-radius: 4px; font-style: italic;">
      📌 <strong>${{q.source}}</strong>
    </div>`;
  }}
  promptBox.innerHTML = q.prompt + srcBadge;

  // Options Rendering
  const optContainer = document.getElementById("options-container");
  optContainer.innerHTML = "";

  if (q.type === "listening_pictures") {{
    renderPictureChoices(q, optContainer);
  }} else if (q.type === "complex_matrix") {{
    renderMatrixTable(q, optContainer);
  }} else if (q.type === "mcma") {{
    renderMCMACheckboxes(q, optContainer);
  }} else {{
    renderSingleChoices(q, optContainer);
  }}

  // Explanation Box
  const expBox = document.getElementById("question-explanation-box");
  if (isExamSubmitted || (currentMode === "practice" && isQuestionAnswered(q.id))) {{
    expBox.style.display = "block";
    let keyBadge = "";
    if (q.type === "complex_matrix") {{
      keyBadge = q.matrixStatements.map((s, i) => `Pernyataan ${{i+1}}: <strong>${{s.isCorrect ? 'BENAR (TRUE)' : 'SALAH (FALSE)'}}</strong>`).join(" | ");
    }} else if (Array.isArray(q.correctAnswer)) {{
      keyBadge = q.correctAnswer.join(", ");
    }} else {{
      keyBadge = q.correctAnswer;
    }}

    document.getElementById("explanation-text").innerHTML = `
      <div style="margin-bottom: 10px; padding: 6px 12px; background: #ecfdf5; border: 1.5px solid #a7f3d0; border-radius: 8px; color: #065f46; font-size: 0.95rem; display: inline-block;">
        🔑 <strong>Kunci Jawaban:</strong> <span style="font-weight: 800; color: #047857; margin-left: 4px;">${{keyBadge}}</span>
      </div>
      <div>${{q.explanation}}</div>
    `;
    document.getElementById("explanation-meta-text").innerHTML = `<strong>Kaidah &amp; Kosakata:</strong> ${{q.grammarNote || "-"}}`;
  }} else {{
    expBox.style.display = "none";
  }}

  // Flag Button status
  const flagBtn = document.getElementById("btn-flag-q");
  if (flaggedQuestions.has(index)) {{
    flagBtn.textContent = "🔄 Hapus Ragu";
  }} else {{
    flagBtn.textContent = "🟡 Ragu-ragu";
  }}

  // Nav buttons
  document.getElementById("btn-prev-q").disabled = (index === 0);
  document.getElementById("btn-next-q").disabled = (index === questions.length - 1);
  document.getElementById("btn-submit-test").style.display = (index === questions.length - 1) ? "inline-flex" : "none";

  updateNavigatorStatus();
  saveProgressToLocalStorage();
}}

// 1. Picture Choices Renderer (For Q1, Q2, Q3)
function renderPictureChoices(q, container) {{
  const grid = document.createElement("div");
  grid.className = "picture-choices-grid";

  q.options.forEach(opt => {{
    const card = document.createElement("div");
    card.className = "picture-option-card" + (userAnswers[q.id] === opt.key ? " selected" : "");
    card.onclick = () => {{
      userAnswers[q.id] = opt.key;
      renderQuestion(currentQuestionIndex);
    }};

    card.innerHTML = `
      <div class="picture-svg-wrapper">${{opt.svg}}</div>
      <div class="picture-letter-badge">${{opt.key}}</div>
      <div class="picture-label-text">${{opt.label}}</div>
    `;
    grid.appendChild(card);
  }});
  container.appendChild(grid);
}}

// 2. Single Choice Options Renderer
function renderSingleChoices(q, container) {{
  const list = document.createElement("div");
  list.className = "options-list";

  q.options.forEach(opt => {{
    const item = document.createElement("div");
    item.className = "option-item" + (userAnswers[q.id] === opt.key ? " selected" : "");
    item.onclick = () => {{
      userAnswers[q.id] = opt.key;
      renderQuestion(currentQuestionIndex);
    }};

    item.innerHTML = `
      <div class="option-circle">${{opt.key}}</div>
      <div class="option-text">${{opt.text}}</div>
    `;
    list.appendChild(item);
  }});
  container.appendChild(list);
}}

// 3. Complex Multiple Choice (Matrix Table) Renderer
function renderMatrixTable(q, container) {{
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
      ${{q.matrixStatements.map((stmt, sIdx) => {{
        const curVal = (userAnswers[q.id] && userAnswers[q.id][sIdx] !== undefined) ? userAnswers[q.id][sIdx] : null;
        return `
          <tr>
            <td>${{stmt.statement}}</td>
            <td onclick="setMatrixAnswer(${{q.id}}, ${{sIdx}}, true)">
              <input type="radio" class="matrix-radio" name="matrix_${{q.id}}_${{sIdx}}" ${{curVal === true ? "checked" : ""}}>
            </td>
            <td onclick="setMatrixAnswer(${{q.id}}, ${{sIdx}}, false)">
              <input type="radio" class="matrix-radio" name="matrix_${{q.id}}_${{sIdx}}" ${{curVal === false ? "checked" : ""}}>
            </td>
          </tr>
        `;
      }}).join("")}}
    </tbody>
  `;
  container.appendChild(table);
}}

function setMatrixAnswer(qId, statementIdx, value) {{
  if (!userAnswers[qId] || typeof userAnswers[qId] !== "object" || Array.isArray(userAnswers[qId])) {{
    userAnswers[qId] = {{}};
  }}
  userAnswers[qId][statementIdx] = value;
  renderQuestion(currentQuestionIndex);
}}

// 4. Multiple Choice Multiple Answer (MCMA Checkboxes) Renderer
function renderMCMACheckboxes(q, container) {{
  const list = document.createElement("div");
  list.className = "options-list";
  const curAns = Array.isArray(userAnswers[q.id]) ? userAnswers[q.id] : [];

  q.options.forEach(opt => {{
    const isChecked = curAns.includes(opt.key);
    const item = document.createElement("div");
    item.className = "option-item" + (isChecked ? " selected" : "");
    item.onclick = () => {{
      toggleMCMAAnswer(q.id, opt.key);
      renderQuestion(currentQuestionIndex);
    }};

    item.innerHTML = `
      <div class="option-checkbox">${{isChecked ? "✓" : ""}}</div>
      <div class="option-text"><strong>[${{opt.key}}]</strong> ${{opt.text}}</div>
    `;
    list.appendChild(item);
  }});
  container.appendChild(list);
}}

function toggleMCMAAnswer(qId, key) {{
  if (!Array.isArray(userAnswers[qId])) {{
    userAnswers[qId] = [];
  }}
  const idx = userAnswers[qId].indexOf(key);
  if (idx > -1) {{
    userAnswers[qId].splice(idx, 1);
  }} else {{
    userAnswers[qId].push(key);
  }}
}}

function navigateQuestion(delta) {{
  renderQuestion(currentQuestionIndex + delta);
}}

function toggleFlagQuestion() {{
  if (flaggedQuestions.has(currentQuestionIndex)) {{
    flaggedQuestions.delete(currentQuestionIndex);
  }} else {{
    flaggedQuestions.add(currentQuestionIndex);
  }}
  renderQuestion(currentQuestionIndex);
}}

// =========================================================================
// MULTI-SPEAKER & INDONESIAN PRONUNCIATION AUDIO ENGINE (WEB SPEECH API)
// =========================================================================
let isAudioPlaying = false;
let audioQueue = [];
let audioQueueIdx = 0;
let cachedVoices = [];

if (typeof window !== "undefined" && window.speechSynthesis) {{
  cachedVoices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {{
    cachedVoices = window.speechSynthesis.getVoices();
  }};
}}

function getAvailableVoices() {{
  if (!window.speechSynthesis) return [];
  if (!cachedVoices || cachedVoices.length === 0) {{
    cachedVoices = window.speechSynthesis.getVoices();
  }}
  return cachedVoices;
}}

function selectAudioVoice(role, gender, lang) {{
  const voices = getAvailableVoices();
  if (!voices || voices.length === 0) return null;

  if (lang && lang.startsWith("id")) {{
    const idVoice = voices.find(v => v.lang.startsWith("id") || v.name.toLowerCase().includes("indonesia") || v.name.includes("Gadis") || v.name.includes("Ardi"));
    if (idVoice) return idVoice;
  }}

  const enVoices = voices.filter(v => v.lang.startsWith("en"));
  if (gender === "female") {{
    const fVoice = enVoices.find(v => 
      v.name.includes("Zira") || v.name.includes("Jenny") || v.name.includes("Aria") || 
      v.name.toLowerCase().includes("female") || v.name.toLowerCase().includes("woman") ||
      (v.name.includes("Google") && !v.name.toLowerCase().includes("male"))
    );
    if (fVoice) return fVoice;
  }} else if (gender === "male") {{
    const mVoice = enVoices.find(v => 
      v.name.includes("David") || v.name.includes("Guy") || v.name.includes("Ryan") || 
      v.name.includes("Mark") || v.name.toLowerCase().includes("male")
    );
    if (mVoice) return mVoice;
  }}

  const narratorVoice = enVoices.find(v => v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("David") || v.name.includes("Zira")) || enVoices[0];
  return narratorVoice || voices[0];
}}

function stopAudio() {{
  if (window.speechSynthesis) {{
    window.speechSynthesis.cancel();
  }}
  isAudioPlaying = false;
  audioQueue = [];
  audioQueueIdx = 0;
  const playText = document.getElementById("play-text");
  const playBtn = document.getElementById("btn-play-audio");
  const statusText = document.getElementById("audio-status-text");
  if (playText) playText.textContent = "Putar Audio";
  if (playBtn) playBtn.style.backgroundColor = "var(--accent-teal)";
  if (statusText) statusText.textContent = "Klik 'Putar Audio' untuk menyimak wacana otentik.";
}}

function playQuestionAudio() {{
  const q = questions[currentQuestionIndex];
  if (!q) return;

  if (!window.speechSynthesis) {{
    alert("Peramban Anda belum mendukung Web Speech API.");
    return;
  }}

  if (isAudioPlaying) {{
    stopAudio();
    return;
  }}

  window.speechSynthesis.cancel();

  let segments = [];
  if (q.audioSegments && q.audioSegments.length > 0) {{
    segments = q.audioSegments;
  }} else if (q.audioText) {{
    segments = [{{ text: q.audioText, lang: "en-US", role: "narrator" }}];
  }} else {{
    return;
  }}

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
}}

function playNextAudioSegment() {{
  if (!isAudioPlaying) return;

  if (audioQueueIdx >= audioQueue.length) {{
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
  }}

  const seg = audioQueue[audioQueueIdx];
  audioQueueIdx++;

  const utt = new SpeechSynthesisUtterance(seg.text);
  utt.lang = seg.lang || "en-US";
  utt.rate = audioSpeechRate * (seg.rateMultiplier || 1.0);

  const matchedVoice = selectAudioVoice(seg.role, seg.gender, seg.lang);
  if (matchedVoice) {{
    utt.voice = matchedVoice;
  }}

  if (seg.pitch !== undefined) {{
    utt.pitch = seg.pitch;
  }} else if (seg.gender === "female") {{
    utt.pitch = 1.25;
  }} else if (seg.gender === "male") {{
    utt.pitch = 0.85;
  }} else {{
    utt.pitch = 1.0;
  }}

  utt.onend = () => {{
    if (isAudioPlaying) {{
      setTimeout(() => {{
        playNextAudioSegment();
      }}, seg.pauseAfter || 320);
    }}
  }};

  utt.onerror = (e) => {{
    console.warn("Audio segment error:", e);
    if (isAudioPlaying) {{
      playNextAudioSegment();
    }}
  }};

  window.speechSynthesis.speak(utt);
}}

function toggleAudioSpeed() {{
  if (audioSpeechRate === 1.0) {{
    audioSpeechRate = 0.85;
  }} else {{
    audioSpeechRate = 1.0;
  }}
  document.getElementById("speed-text").textContent = audioSpeechRate + "x";
}}

// =========================================================================
// TIMER & SUBMISSION ENGINE
// =========================================================================
function startTimer() {{
  if (timerInterval) clearInterval(timerInterval);
  
  timerInterval = setInterval(() => {{
    remainingSeconds--;
    if (remainingSeconds <= 0) {{
      clearInterval(timerInterval);
      alert("Waktu pengerjaan tes telah berakhir! Jawaban Anda akan otomatis dikumpulkan.");
      submitTest();
      return;
    }}

    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    const disp = `${{mins.toString().padStart(2, "0")}}:${{secs.toString().padStart(2, "0")}}`;
    document.getElementById("timer-display").textContent = disp;

    if (remainingSeconds < 300) {{
      document.getElementById("timer-box").style.backgroundColor = "#dc2626";
    }}

    if (remainingSeconds % 15 === 0) {{
      saveProgressToLocalStorage();
    }}
  }}, 1000);
}}

function confirmSubmitTest() {{
  const answeredCount = questions.filter(q => isQuestionAnswered(q.id)).length;
  const unansweredCount = questions.length - answeredCount;

  let msg = `Anda telah menjawab ${{answeredCount}} dari ${{questions.length}} butir soal.`;
  if (unansweredCount > 0) {{
    msg += ` Masih ada ${{unansweredCount}} butir soal yang belum dijawab.`;
  }}
  msg += "\\n\\nApakah Anda yakin ingin menyelesaikan dan mengumpulkan tes sekarang?";

  if (confirm(msg)) {{
    submitTest();
  }}
}}

function submitTest() {{
  clearInterval(timerInterval);
  isExamSubmitted = true;
  stopAudio();

  localStorage.removeItem("{storage_key}");

  let correctCount = 0;
  questions.forEach(q => {{
    const ans = userAnswers[q.id];
    if (q.type === "complex_matrix") {{
      if (ans && typeof ans === "object") {{
        let allCorrect = true;
        q.matrixStatements.forEach((stmt, sIdx) => {{
          if (ans[sIdx] !== stmt.isCorrect) allCorrect = false;
        }});
        if (allCorrect) correctCount++;
      }}
    }} else if (q.type === "mcma") {{
      if (Array.isArray(ans)) {{
        const sortedUser = [...ans].sort();
        const sortedTarget = [...q.correctAnswer].sort();
        if (JSON.stringify(sortedUser) === JSON.stringify(sortedTarget)) {{
          correctCount++;
        }}
      }}
    }} else {{
      if (ans === q.correctAnswer) {{
        correctCount++;
      }}
    }}
  }});

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
  document.getElementById("stat-accuracy").textContent = `${{Math.round((correctCount / totalQuestions) * 100)}}%`;

  const record = {{
    tingkat: studentIdentity.tingkat,
    rombel: studentIdentity.rombel,
    presensi: studentIdentity.presensi,
    nama: studentIdentity.nama,
    mode: (currentMode === "practice") ? "Latihan {test_type} {grade_name}" : "Asesmen Resmi {test_type} {grade_name}",
    score: correctCount,
    total: totalQuestions,
    grade: finalScore,
    duration: `${{Math.floor((5400 - remainingSeconds) / 60)}} menit`,
    timestamp: new Date().toLocaleString("id-ID"),
    answers: userAnswers
  }};

  try {{
    const history = JSON.parse(localStorage.getItem("sabaku_ats_history") || "[]");
    history.push(record);
    localStorage.setItem("sabaku_ats_history", JSON.stringify(history));
  }} catch (e) {{
    console.warn("History save error:", e);
  }}

  syncScoreToGoogleSheets(record);
  renderQuestion(currentQuestionIndex);
}}

function syncScoreToGoogleSheets(payload) {{
  const statusEl = document.getElementById("cloud-status-text");
  if (statusEl) statusEl.textContent = "Menyinkronkan nilai ke server sekolah...";

  const webAppUrl = localStorage.getItem("sabaku_gs_url") || DEFAULT_GS_URL;

  try {{
    if (navigator.sendBeacon) {{
      navigator.sendBeacon(webAppUrl, new Blob([JSON.stringify(payload)], {{ type: "text/plain;charset=utf-8" }}));
    }}
  }} catch (e) {{
    console.warn("sendBeacon error:", e);
  }}

  fetch(webAppUrl, {{
    method: "POST",
    mode: "no-cors",
    headers: {{ "Content-Type": "application/json" }},
    body: JSON.stringify(payload)
  }}).then(() => {{
    if (statusEl) statusEl.innerHTML = "✅ Nilai Anda telah berhasil tercatat di server rekapitulasi sekolah.";
  }}).catch(err => {{
    console.warn("Direct POST fallback to Image beacon:", err);
    try {{
      const beacon = new Image();
      const query = new URLSearchParams({{
        action: "submit",
        tingkat: payload.tingkat || "",
        rombel: payload.rombel || "",
        presensi: payload.presensi || "",
        nama: payload.nama || "",
        grade: payload.grade || 0,
        score: payload.score || 0,
        duration: payload.duration || "",
        mode: payload.mode || ""
      }}).toString();
      beacon.src = `${{webAppUrl}}?${{query}}`;
    }} catch (bErr) {{
      console.warn("Beacon error:", bErr);
    }}
    if (statusEl) statusEl.innerHTML = "💾 Nilai Anda telah tersimpan dengan aman di sistem sekolah.";
  }});
}}

function downloadResultCSV() {{
  try {{
    const history = JSON.parse(localStorage.getItem("sabaku_ats_history") || "[]");
    if (history.length === 0) {{
      alert("Belum ada data nilai yang tersimpan untuk diunduh.");
      return;
    }}

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Timestamp,Tingkat,Rombel,Presensi,Nama Siswa,Mode,Skor Benar,Total Soal,Nilai (0-100),Status KKTP,Durasi\\n";

    history.forEach(r => {{
      const kktp = r.grade >= 75 ? "TUNTAS" : "BELUM TUNTAS";
      const line = `"${{r.timestamp}}","${{r.tingkat}}","${{r.rombel}}","${{r.presensi}}","${{r.nama}}","${{r.mode}}",${{r.score}},${{r.total}},${{r.grade}},"${{kktp}}","${{r.duration}}"`;
      csvContent += line + "\\n";
    }});

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Rekap_Nilai_{test_type}_{grade_code}_${{studentIdentity.nama.replace(/\\s+/g, "_")}}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }} catch (e) {{
    alert("Gagal mengunduh file CSV: " + e.message);
  }}
}}

function reviewAllAnswers() {{
  document.getElementById("result-modal").style.display = "none";
  renderQuestion(0);
}}

function restartTest() {{
  if (confirm("Apakah Anda ingin mengulangi pengerjaan dari awal?\\nSemua jawaban saat ini akan direset.")) {{
    localStorage.removeItem("{storage_key}");
    document.getElementById("result-modal").style.display = "none";
    startFreshTest();
  }}
}}

function openSettingsModal() {{
  const url = localStorage.getItem("sabaku_gs_url") || DEFAULT_GS_URL;
  document.getElementById("input-gs-url").value = url;
  document.getElementById("settings-modal").style.display = "flex";
}}

function closeSettingsModal() {{
  document.getElementById("settings-modal").style.display = "none";
}}

function saveSettings() {{
  const val = document.getElementById("input-gs-url").value.trim();
  if (val) {{
    localStorage.setItem("sabaku_gs_url", val);
    alert("Pengaturan tautan basis data berhasil disimpan!");
    closeSettingsModal();
  }}
}}

function saveProgressToLocalStorage() {{
  try {{
    const data = {{
      userAnswers,
      flaggedQuestions: Array.from(flaggedQuestions),
      remainingSeconds,
      currentIndex: currentQuestionIndex
    }};
    localStorage.setItem("{storage_key}", JSON.stringify(data));
  }} catch (e) {{
    console.warn("Autosave error:", e);
  }}
}}
"""

