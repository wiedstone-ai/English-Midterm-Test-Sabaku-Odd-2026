/**
 * ============================================================================
 * PROCTORING & INTEGRITY MONITORING ENGINE 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * 
 * Fitur:
 * 1. Live In-Browser Webcam Feed (Kotak Kamera Pengawas Mengambang)
 * 2. Deteksi Perpindahan Tab & Jendela (Tab-Switch & Blur Detection)
 * 3. Sistem Peringatan Tiga Tingkat (Maks. 3x Pelanggaran -> Auto-Submit)
 * 4. Pemblokiran Klik Kanan, Salin-Tempel (Anti-Copy Paste) & Developer Tools
 * 5. Sinkronisasi Data Pelanggaran ke Google Sheets
 * 6. Penampil Rekap Integritas Siswa pada Modal Hasil Nilai
 * ============================================================================
 */

(function () {
  "use strict";

  // Konfigurasi Pengawas
  const PROCTOR_CONFIG = {
    maxViolations: 3,
    debounceTimeMs: 1800,
    cameraWidth: 170,
    cameraHeight: 125,
  };

  // State
  let tabSwitchCount = 0;
  let lastViolationTime = 0;
  let cameraStream = null;
  let isProctorActive = true;
  let isModalOpen = false;

  // Inisialisasi Web Audio Context untuk Nada Alarm Peringatan
  function playAlarmBeep(isSevere = false) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = isSevere ? "sawtooth" : "sine";
      osc.frequency.setValueAtTime(isSevere ? 880 : 587, ctx.currentTime); // A5 atau D5
      if (isSevere) {
        osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.35);
      }

      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  // --------------------------------------------------------------------------
  // 1. KAMERA PENGAWAS MENGAMBANG (FLOATING WEBCAM PROCTOR)
  // --------------------------------------------------------------------------
  async function initWebcamProctor() {
    // Buat Container Widget Kamera
    const container = document.createElement("div");
    container.id = "sabaku-proctor-cam";
    container.style.cssText = `
      position: fixed;
      bottom: 18px;
      right: 18px;
      width: ${PROCTOR_CONFIG.cameraWidth}px;
      background: #0f172a;
      border: 2.5px solid #10b981;
      border-radius: 10px;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.4), 0 8px 10px -6px rgba(0,0,0,0.2);
      z-index: 99998;
      overflow: hidden;
      font-family: 'Segoe UI', system-ui, sans-serif;
      transition: transform 0.2s ease, opacity 0.2s ease;
      user-select: none;
    `;

    // Header Widget Kamera (Dapat didrag / minimize)
    const header = document.createElement("div");
    header.style.cssText = `
      background: #1e293b;
      padding: 6px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: move;
      color: #ffffff;
      font-size: 11px;
      font-weight: 700;
      border-bottom: 1px solid #334155;
    `;
    header.innerHTML = `
      <span style="display: flex; align-items: center; gap: 6px;">
        <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 8px #22c55e; animation: pulse 1.5s infinite;"></span>
        <span>KAMERA PENGAWAS</span>
      </span>
      <span id="sabaku-cam-toggle" style="cursor: pointer; font-size: 12px; padding: 0 4px; color: #94a3b8;" title="Kecilkan/Perbesar">−</span>
    `;

    // Video Element
    const video = document.createElement("video");
    video.id = "sabaku-proctor-video";
    video.autoplay = true;
    video.playsInline = true;
    video.muted = true;
    video.style.cssText = `
      width: 100%;
      height: ${PROCTOR_CONFIG.cameraHeight}px;
      object-fit: cover;
      transform: scaleX(-1);
      display: block;
      background: #000;
    `;

    // Footer Info Pelanggaran
    const footer = document.createElement("div");
    footer.id = "sabaku-cam-footer";
    footer.style.cssText = `
      background: rgba(15, 23, 42, 0.95);
      color: #94a3b8;
      font-size: 10px;
      padding: 4px 8px;
      text-align: center;
      border-top: 1px solid #1e293b;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;
    footer.innerHTML = `
      <span>Status: <strong style="color: #22c55e;">Aktif</strong></span>
      <span id="sabaku-cam-strike-text">Pelanggaran: <strong style="color: #22c55e;">0/3</strong></span>
    `;

    container.appendChild(header);
    container.appendChild(video);
    container.appendChild(footer);
    document.body.appendChild(container);

    // Minimize / Expand logic
    let isMinimized = false;
    const toggleBtn = header.querySelector("#sabaku-cam-toggle");
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isMinimized = !isMinimized;
      if (isMinimized) {
        video.style.display = "none";
        footer.style.display = "none";
        toggleBtn.innerText = "+";
        container.style.width = "150px";
      } else {
        video.style.display = "block";
        footer.style.display = "flex";
        toggleBtn.innerText = "−";
        container.style.width = `${PROCTOR_CONFIG.cameraWidth}px`;
      }
    });

    // Make Draggable
    makeElementDraggable(container, header);

    // Request Webcam Stream
    try {
      cameraStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 320 },
          height: { ideal: 240 }
        },
        audio: false
      });
      video.srcObject = cameraStream;
    } catch (camErr) {
      console.warn("Proctor camera stream error:", camErr);
      header.querySelector("span span").style.background = "#ef4444";
      header.querySelector("span span").style.boxShadow = "none";
      video.style.display = "none";
      const errorMsg = document.createElement("div");
      errorMsg.style.cssText = "padding: 12px 8px; color: #fca5a5; font-size: 10px; text-align: center; line-height: 1.4;";
      errorMsg.innerHTML = "⚠️ <strong>Kamera Tidak Aktif</strong><br>Izinkan kamera pada peramban Anda.";
      container.insertBefore(errorMsg, footer);
    }
  }

  // Utilitas Drag Element
  function makeElementDraggable(elmnt, dragHandle) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    dragHandle.onmousedown = dragMouseDown;
    dragHandle.ontouchstart = dragTouchStart;

    function dragMouseDown(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      elmnt.style.bottom = "auto";
      elmnt.style.right = "auto";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }

    function dragTouchStart(e) {
      const touch = e.touches[0];
      pos3 = touch.clientX;
      pos4 = touch.clientY;
      document.ontouchend = closeTouchDrag;
      document.ontouchmove = elementTouchDrag;
    }

    function elementTouchDrag(e) {
      const touch = e.touches[0];
      pos1 = pos3 - touch.clientX;
      pos2 = pos4 - touch.clientY;
      pos3 = touch.clientX;
      pos4 = touch.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      elmnt.style.bottom = "auto";
      elmnt.style.right = "auto";
    }

    function closeTouchDrag() {
      document.ontouchend = null;
      document.ontouchmove = null;
    }
  }

  // --------------------------------------------------------------------------
  // 2. DETEKSI TAB SWITCH & JENDELA (TAB-SWITCH DETECTOR)
  // --------------------------------------------------------------------------
  function initTabSwitchDetector() {
    // Deteksi saat tab tidak aktif (siswa ganti tab / buka aplikasi lain)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        recordTabViolation("Berpindah tab atau membuka aplikasi lain di luar ruang ujian.");
      }
    });

    // Deteksi saat jendela peramban kehilangan fokus
    window.addEventListener("blur", () => {
      // Hanya jika bukan karena modal peringatan internal
      if (!isModalOpen) {
        recordTabViolation("Meninggalkan jendela peramban ujian.");
      }
    });
  }

  function recordTabViolation(reason) {
    if (!isProctorActive) return;
    if (window.isExamSubmitted) return; // Jika tes sudah dikumpulkan, abaikan

    const now = Date.now();
    // Debounce agar 1 kali tindakan alt-tab tidak terhitung 2x secara bersamaan
    if (now - lastViolationTime < PROCTOR_CONFIG.debounceTimeMs) {
      return;
    }
    lastViolationTime = now;

    tabSwitchCount++;
    playAlarmBeep(tabSwitchCount >= 2);

    // Update Badge di Widget Kamera
    const strikeText = document.getElementById("sabaku-cam-strike-text");
    if (strikeText) {
      const color = tabSwitchCount >= 2 ? "#ef4444" : "#f59e0b";
      strikeText.innerHTML = `Pelanggaran: <strong style="color: ${color};">${tabSwitchCount}/3</strong>`;
    }

    // Tampilkan Peringatan
    showViolationModal(tabSwitchCount, reason);
  }

  // Modal Peringatan Khusus (Tidak memblokir event peramban seperti native alert)
  function showViolationModal(count, reason) {
    isModalOpen = true;

    // Hapus modal lama jika ada
    const oldModal = document.getElementById("sabaku-violation-modal");
    if (oldModal) oldModal.remove();

    const isFinalStrike = count >= PROCTOR_CONFIG.maxViolations;
    const remaining = Math.max(0, PROCTOR_CONFIG.maxViolations - count);

    const modal = document.createElement("div");
    modal.id = "sabaku-violation-modal";
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(4px);
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      font-family: 'Segoe UI', system-ui, sans-serif;
      animation: fadeIn 0.2s ease;
    `;

    const card = document.createElement("div");
    card.style.cssText = `
      background: #ffffff;
      border-radius: 14px;
      max-width: 480px;
      width: 100%;
      padding: 28px 24px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      border: 3px solid ${isFinalStrike ? "#dc2626" : (count === 2 ? "#ea580c" : "#f59e0b")};
      text-align: center;
    `;

    const icon = isFinalStrike ? "⛔" : (count === 2 ? "🚨" : "⚠️");
    const title = isFinalStrike 
      ? "PELANGGARAN MAKSIMAL! UJIAN DIHENTIKAN"
      : `PERINGATAN KECURANGAN #${count} DARI 3`;

    let bodyMsg = "";
    if (isFinalStrike) {
      bodyMsg = `
        <p style="color: #991b1b; font-size: 1rem; font-weight: 700; margin-bottom: 10px;">
          Anda telah berpindah tab atau meninggalkan jendela ujian sebanyak 3 kali!
        </p>
        <p style="color: #475569; font-size: 0.9rem; line-height: 1.5; margin-bottom: 18px;">
          Sesuai tata tertib asesmen jarak jauh SMA Negeri 1 Bae Kudus, ujian Anda dihentikan secara otomatis. Jawaban yang telah Anda pilih segera dikirimkan ke server rekapitulasi sekolah dengan catatan pelanggaran.
        </p>
      `;
    } else {
      bodyMsg = `
        <p style="color: #1e293b; font-size: 0.95rem; font-weight: 600; margin-bottom: 8px;">
          Alasan: <span style="color: #dc2626;">${reason}</span>
        </p>
        <p style="color: #475569; font-size: 0.88rem; line-height: 1.5; margin-bottom: 14px;">
          Anda <strong>DILARANG</strong> membuka tab lain, mesin pencari (Google), catatan, atau aplikasi lain selama asesmen berlangsung.
        </p>
        <div style="background: #fef2f2; border: 1.5px solid #fecaca; border-radius: 8px; padding: 10px; margin-bottom: 18px;">
          <strong style="color: #b91c1c; font-size: 0.95rem;">
            Sisa Peringatan: ${remaining} kali lagi!
          </strong>
          <div style="font-size: 0.8rem; color: #7f1d1d; margin-top: 4px;">
            Jika mencapai 3 kali, ujian Anda akan otomatis dikumpulkan dan dikunci secara permanen.
          </div>
        </div>
      `;
    }

    card.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 10px;">${icon}</div>
      <h3 style="color: ${isFinalStrike ? "#b91c1c" : "#1e293b"}; font-size: 1.25rem; font-weight: 800; margin-bottom: 12px;">
        ${title}
      </h3>
      ${bodyMsg}
    `;

    const actionBtn = document.createElement("button");
    actionBtn.className = "btn";
    if (isFinalStrike) {
      actionBtn.innerText = "Kumpulkan Ujian Sekarang ➔";
      actionBtn.style.cssText = "background: #dc2626; color: #fff; padding: 12px 24px; font-weight: 700; border-radius: 8px; border: none; cursor: pointer; width: 100%; font-size: 1rem;";
      actionBtn.onclick = () => {
        modal.remove();
        isModalOpen = false;
        triggerAutoSubmit();
      };
    } else {
      actionBtn.innerText = "Saya Mengerti & Kembali ke Ujian";
      actionBtn.style.cssText = "background: #0f172a; color: #fff; padding: 12px 24px; font-weight: 700; border-radius: 8px; border: none; cursor: pointer; width: 100%; font-size: 0.95rem;";
      actionBtn.onclick = () => {
        modal.remove();
        isModalOpen = false;
      };
    }

    card.appendChild(actionBtn);
    modal.appendChild(card);
    document.body.appendChild(modal);

    // Jika final strike, auto trigger submit setelah 4 detik jika tombol tidak ditekan
    if (isFinalStrike) {
      setTimeout(() => {
        if (modal.parentNode) modal.remove();
        isModalOpen = false;
        triggerAutoSubmit();
      }, 4000);
    }
  }

  function triggerAutoSubmit() {
    isProctorActive = false;
    if (typeof window.submitTest === "function") {
      window.submitTest();
    } else {
      const submitBtn = document.getElementById("btn-submit-test");
      if (submitBtn) submitBtn.click();
    }
  }

  // --------------------------------------------------------------------------
  // 3. KEAMANAN INTERAKSI (ANTI-COPY PASTE & DEVTOOLS)
  // --------------------------------------------------------------------------
  function initInteractionRestrictions() {
    // Blokir klik kanan
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      return false;
    });

    // Blokir pintasan tombol
    document.addEventListener("keydown", (e) => {
      // Ctrl/Cmd + (C, V, X, A, U, S, P)
      if (e.ctrlKey || e.metaKey) {
        const key = e.key.toLowerCase();
        if (["c", "v", "x", "a", "u", "s", "p"].includes(key)) {
          e.preventDefault();
          return false;
        }
      }

      // F12 (Inspect Element)
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }

      // Ctrl + Shift + (I, J, C)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
        const key = e.key.toLowerCase();
        if (["i", "j", "c"].includes(key)) {
          e.preventDefault();
          return false;
        }
      }
    });

    // Mencegah seleksi teks pada kontainer soal
    const style = document.createElement("style");
    style.innerHTML = `
      #question-card, .question-container, .stimulus-card, #options-container {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(0.85); }
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.96); }
        to { opacity: 1; transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
  }

  // --------------------------------------------------------------------------
  // 4. HOOK & ENRICH DATA SINKRONISASI KE GOOGLE SHEETS
  // --------------------------------------------------------------------------
  function hookGoogleSheetsSync() {
    // Jika window.syncScoreToGoogleSheets sudah ada di halaman
    if (typeof window.syncScoreToGoogleSheets === "function" && !window.syncScoreToGoogleSheets._isHooked) {
      const origSync = window.syncScoreToGoogleSheets;
      window.syncScoreToGoogleSheets = function (payload) {
        if (payload && typeof payload === "object") {
          payload.pelanggaran = tabSwitchCount;
          payload.integritasStatus = (tabSwitchCount === 0)
            ? "✅ AMAN (Tertib)"
            : (tabSwitchCount >= PROCTOR_CONFIG.maxViolations
              ? "🚨 AUTO-SUBMIT (3x PELANGGARAN TAB)"
              : `⚠️ PERINGATAN (${tabSwitchCount}x KELUAR TAB)`);
        }
        return origSync.apply(this, arguments);
      };
      window.syncScoreToGoogleSheets._isHooked = true;
    }

    // Tampilkan data integritas pada Modal Hasil jika muncul
    const observer = new MutationObserver(() => {
      const resModal = document.getElementById("result-modal");
      if (resModal && resModal.style.display !== "none") {
        injectIntegrityReportIntoResultModal();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
  }

  function injectIntegrityReportIntoResultModal() {
    if (document.getElementById("stat-integrity-box")) return; // Sudah diinjeksi

    const statsRow = document.querySelector("#result-modal .stats-row");
    if (statsRow) {
      const box = document.createElement("div");
      box.id = "stat-integrity-box";
      box.className = "stat-box";

      const isClean = (tabSwitchCount === 0);
      box.innerHTML = `
        <div class="val" style="color: ${isClean ? "#16a34a" : "#dc2626"}; font-size: 1.35rem;">
          ${tabSwitchCount}x
        </div>
        <div class="lbl">Pelanggaran Tab</div>
      `;
      statsRow.appendChild(box);
    }

    const cloudStatus = document.getElementById("cloud-status-text");
    if (cloudStatus) {
      const note = document.createElement("div");
      note.style.cssText = "margin-top: 8px; font-size: 0.82rem; color: #475569;";
      note.innerHTML = `Catatan Integritas Pengawas: <strong>${tabSwitchCount === 0 ? "Tertib / Bersih (0 pelanggaran)" : tabSwitchCount + "x terdeteksi keluar halaman ujian"}</strong> tercatat di database sekolah.`;
      cloudStatus.appendChild(note);
    }
  }

  // --------------------------------------------------------------------------
  // 5. TOMBOL MODE LAYAR PENUH (FULLSCREEN TOGGLE)
  // --------------------------------------------------------------------------
  function initFullscreenButton() {
    const headerActions = document.getElementById("header-actions");
    if (headerActions) {
      const fsBtn = document.createElement("button");
      fsBtn.id = "btn-proctor-fs";
      fsBtn.className = "btn btn-outline";
      fsBtn.style.cssText = "color: white; border-color: rgba(255,255,255,0.4); font-size: 0.85rem; padding: 4px 10px;";
      fsBtn.innerHTML = "⛶ Layar Penuh";
      fsBtn.onclick = toggleFullscreen;
      headerActions.insertBefore(fsBtn, headerActions.firstChild);
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  // Expose API ke Window
  window.sabakuProctor = {
    getViolationCount: () => tabSwitchCount,
    stopCamera: () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
      }
    }
  };

  function bootProctor() {
    initWebcamProctor();
    initTabSwitchDetector();
    initInteractionRestrictions();
    hookGoogleSheetsSync();
    initFullscreenButton();
  }

  // Jalankan saat DOM siap atau langsung jika dokumen sudah selesai dimuat
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", bootProctor);
  } else {
    bootProctor();
  }

})();
