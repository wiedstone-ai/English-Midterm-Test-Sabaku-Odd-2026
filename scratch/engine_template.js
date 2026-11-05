function getEngineCode(config) {
  const {
    storageKey,
    tingkatCode,
    tingkatLabel,
    bankFnName,
    isAsts
  } = config;

  return `
let currentQuestionIndex = 0;
let userAnswers = {};
let flaggedQuestions = new Set();
let timerInterval = null;
let remainingSeconds = 90 * 60;
let studentIdentity = { tingkat: "${tingkatCode}", rombel: "1", presensi: "1", nama: "Siswa SMA 1 Bae" };
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
        tingkat: portalData.tingkat || "${tingkatCode}",
        rombel: portalData.rombel || "1",
        presensi: portalData.presensi || "1",
        nama: portalData.nama || "Siswa ${tingkatLabel}"
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
    tingkat: "${tingkatCode}",
    rombel: rombelEl ? rombelEl.value : "1",
    presensi: presensiEl ? presensiEl.value.trim() : "1",
    nama: (namaEl && namaEl.value.trim()) ? namaEl.value.trim() : "Siswa ${tingkatLabel}"
  };
  if (modeEl) currentMode = modeEl.value;
  const modal = document.getElementById("identity-prompt-modal");
  if (modal) modal.style.display = "none";
  startFreshTest();
}

function validateDirectPresensi(input) {
  let val = input.value.replace(/\\D/g, "");
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

  const rawBank = (typeof ${bankFnName} === "function") ? ${bankFnName}() : [];

  let restoredQuestions = null;
  try {
    const saved = localStorage.getItem("${storageKey}");
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
    modeBadge.textContent = (currentMode === "practice") ? "🎯 Mode Latihan ${isAsts ? 'ASTS' : 'ASAS'} Gasal ${tingkatLabel}" : "📝 Asesmen Resmi ${isAsts ? 'ASTS' : 'ASAS'} Gasal ${tingkatLabel}";
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
    btn.id = \`nav-btn-\${idx}\`;
    btn.textContent = idx + 1;
    btn.onclick = () => renderQuestion(idx);
    grid.appendChild(btn);
  });
  updateNavigatorStatus();
}

function updateNavigatorStatus() {
  questions.forEach((q, idx) => {
    const btn = document.getElementById(\`nav-btn-\${idx}\`);
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
  if (numBadge) numBadge.textContent = \`Soal No. \${q.id} dari \${questions.length}\`;
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
          srcEl.innerHTML = \`<span style="font-size:0.75rem; color:#64748b; font-style:italic;">Source: \${q.source}</span>\`;
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
        keyBadge = q.matrixStatements.map((s, i) => \`Pernyataan \${i+1}: <strong>\${s.isCorrect ? 'BENAR (TRUE)' : 'SALAH (FALSE)'}</strong>\`).join(" | ");
      } else if (Array.isArray(q.correctAnswer)) {
        keyBadge = q.correctAnswer.join(", ");
      } else {
        keyBadge = q.correctAnswer;
      }

      const expText = document.getElementById("explanation-text");
      if (expText) {
        expText.innerHTML = \`
          <div style="margin-bottom: 10px; padding: 6px 12px; background: #ecfdf5; border: 1.5px solid #a7f3d0; border-radius: 8px; color: #065f46; font-size: 0.95rem; display: inline-block;">
            🔑 <strong>Kunci Jawaban:</strong> <span style="font-weight: 800; color: #047857; margin-left: 4px;">\${keyBadge}</span>
          </div>
          <div>\${q.explanation}</div>
        \`;
      }
      const expMeta = document.getElementById("explanation-meta-text");
      if (expMeta) {
        expMeta.innerHTML = \`<strong>Kaidah &amp; Kosakata:</strong> \${q.grammarNote || "-"}\`;
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
    const svgContent = opt.svg || \`<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2"><rect x="10" y="10" width="80" height="80" rx="8" fill="#eff6ff"/><circle cx="50" cy="50" r="20" stroke="#3b82f6"/><text x="50" y="55" font-size="14" text-anchor="middle" fill="#1e40af" font-weight="bold">\${opt.key}</text></svg>\`;
    const labelContent = opt.label || opt.text || \`Pilihan \${opt.key}\`;
    card.innerHTML = \`
      <div class="picture-svg-wrapper">\${svgContent}</div>
      <div class="picture-card-footer">
        <span class="picture-key-badge">\${opt.key}</span>
        <span class="picture-label-text">\${labelContent}</span>
      </div>
    \`;
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
    item.innerHTML = \`
      <div class="option-circle">\${opt.key}</div>
      <div class="option-text">\${opt.text}</div>
    \`;
    list.appendChild(item);
  });
  container.appendChild(list);
}

function renderMatrixTable(q, container) {
  const table = document.createElement("table");
  table.className = "matrix-table";
  table.innerHTML = \`
    <thead>
      <tr>
        <th style="width: 70%;">Pernyataan / Analisis Teks</th>
        <th style="width: 15%; text-align: center;">BENAR (TRUE)</th>
        <th style="width: 15%; text-align: center;">SALAH (FALSE)</th>
      </tr>
    </thead>
    <tbody>
      \${q.matrixStatements.map((stmt, sIdx) => {
        const curVal = (userAnswers[q.id] && userAnswers[q.id][sIdx] !== undefined) ? userAnswers[q.id][sIdx] : null;
        return \`
          <tr>
            <td>\${stmt.statement}</td>
            <td onclick="setMatrixAnswer(\${q.id}, \${sIdx}, true)" style="cursor: pointer; text-align: center;">
              <input type="radio" class="matrix-radio" name="matrix_\${q.id}_\${sIdx}" \${curVal === true ? "checked" : ""} onclick="event.stopPropagation(); setMatrixAnswer(\${q.id}, \${sIdx}, true)">
            </td>
            <td onclick="setMatrixAnswer(\${q.id}, \${sIdx}, false)" style="cursor: pointer; text-align: center;">
              <input type="radio" class="matrix-radio" name="matrix_\${q.id}_\${sIdx}" \${curVal === false ? "checked" : ""} onclick="event.stopPropagation(); setMatrixAnswer(\${q.id}, \${sIdx}, false)">
            </td>
          </tr>
        \`;
      }).join("")}
    </tbody>
  \`;
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
    item.innerHTML = \`
      <div class="option-checkbox">\${isChecked ? "✓" : ""}</div>
      <div class="option-text"><strong>[\${opt.key}]</strong> \${opt.text}</div>
    \`;
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
    .replace(/\\bEndang Sawitri\\b/gi, "Ehn-dahng Sah-weet-tree")
    .replace(/\\bBaru Klinthing\\b/gi, "Bah-roo Kleen-teeng")
    .replace(/\\bKi Hajar Salokantara\\b/gi, "Kee Hah-jahr Sah-loh-kahn-tah-rah")
    .replace(/\\bMount Telomoyo\\b/gi, "Mount Teh-loh-moh-yoh")
    .replace(/\\bMbok Rondo\\b/gi, "Em-bock Ron-doh")
    .replace(/\\bRawa Pening\\b/gi, "Rah-wah Peh-neeng")
    .replace(/\\bPathok\\b/gi, "Pah-tock")
    .replace(/\\bNgasem\\b/gi, "Nga-sem");
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
    const speakerLabel = seg.name ? \`\${seg.name} (\${seg.role.includes('_f') ? 'Female' : 'Male'})\` : (seg.role === "narrator" ? "Narrator" : "Audio");
    statusText.textContent = \`Sedang memutar: [\${speakerLabel}] - Bagian \${currentSegmentIndex + 1} dari \${activeAudioSegments.length}\`;
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
  if (speedText) speedText.textContent = \`\${audioSpeechRate}x\`;
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
      timerDisplay.textContent = \`\${mins.toString().padStart(2, "0")}:\${secs.toString().padStart(2, "0")}\`;
    }
  }, 1000);
}

function confirmSubmitTest() {
  const answeredCount = questions.filter(q => isQuestionAnswered(q.id)).length;
  const unansweredCount = questions.length - answeredCount;
  let msg = \`Anda telah menjawab \${answeredCount} dari \${questions.length} butir soal.\`;
  if (unansweredCount > 0) msg += \` Masih ada \${unansweredCount} butir soal yang belum dijawab.\`;
  msg += "\\n\\nApakah Anda yakin ingin menyelesaikan dan mengumpulkan tes sekarang?";
  if (confirm(msg)) submitTest();
}

function submitTest() {
  clearInterval(timerInterval);
  isExamSubmitted = true;
  stopAudio();
  localStorage.removeItem("${storageKey}");

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
  if (statAcc) statAcc.textContent = \`\${finalScore}%\`;

  const record = {
    tingkat: studentIdentity.tingkat,
    rombel: studentIdentity.rombel,
    presensi: studentIdentity.presensi,
    nama: studentIdentity.nama,
    mode: (currentMode === "practice") ? "Latihan ${isAsts ? 'ASTS' : 'ASAS'} Gasal ${tingkatLabel}" : "Asesmen Resmi ${isAsts ? 'ASTS' : 'ASAS'} Gasal ${tingkatLabel}",
    score: correctCount,
    total: totalQuestions,
    grade: finalScore,
    duration: \`\${Math.floor((5400 - remainingSeconds) / 60)} menit\`,
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
  let csv = "NO,ID_SOAL,TIPE_SOAL,JAWABAN_SISWA,KUNCI_JAWABAN,STATUS\\n";
  questions.forEach((q, idx) => {
    const ans = userAnswers[q.id];
    let userStr = "";
    let keyStr = "";
    let isCorrect = false;

    if (q.type === "complex_matrix") {
      userStr = ans ? Object.keys(ans).map(k => \`P\${parseInt(k)+1}:\${ans[k] ? 'T' : 'F'}\`).join(";") : "KOSONG";
      keyStr = q.matrixStatements.map((s, i) => \`P\${i+1}:\${s.isCorrect ? 'T' : 'F'}\`).join(";");
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
    csv += \`\${idx + 1},\${q.id},"\${q.type}","\${userStr}","\${keyStr}",\${isCorrect ? "BENAR" : "SALAH"}\\n\`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = \`Hasil_\${studentIdentity.tingkat}_\${studentIdentity.nama.replace(/\\s+/g, "_")}_\${studentIdentity.presensi}.csv\`;
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
  if (confirm("Apakah Anda ingin mengulangi pengerjaan dari awal?\\nSemua jawaban saat ini akan direset.")) {
    localStorage.removeItem("${storageKey}");
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
    localStorage.setItem("${storageKey}", JSON.stringify(data));
  } catch (e) {}
}
`;
}

module.exports = { getEngineCode };
