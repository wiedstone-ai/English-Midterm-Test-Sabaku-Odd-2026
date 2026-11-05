/**
 * =========================================================================
 * GOOGLE APPS SCRIPT — SISTEM MANAJEMEN ASESMEN & REKAP NILAI TERPADU 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * 
 * SPREADSHEET ID : 1-PVYGcdgjIfEe4zc2P1kYF5PIXXoZAGNRHd3e02Why4
 * SPREADSHEET URL: https://docs.google.com/spreadsheets/d/1-PVYGcdgjIfEe4zc2P1kYF5PIXXoZAGNRHd3e02Why4/edit
 * 
 * FITUR TERBARU:
 * 1. Manajemen Password ASTS Dinamis pada Sheet 'pass':
 *    - Guru dapat melihat, menyetel, dan mengubah password ASTS kapan saja lewat pass.html.
 *    - Mendukung password umum (semua tingkat) dan password spesifik per tingkat kelas.
 * 2. Penyimpanan Rekapitulasi Nilai pada Sheet Terpisah Otomatis:
 *    - ASTS_Kelas_X
 *    - ASTS_Kelas_XI_Wajib
 *    - ASTS_Kelas_XI_TL
 *    - ASTS_Kelas_XII_Wajib
 *    - ASTS_Kelas_XII_TL
 *    - ASAS_Kelas_X, ASAS_Kelas_XI_Wajib, dst.
 *    - Master Rekapitulasi: 'Rekap_Semua_Nilai'
 * 3. Verifikasi Password Realtime untuk Siswa (masuk-asts.html).
 * =========================================================================
 */

const SPREADSHEET_ID = "1-PVYGcdgjIfEe4zc2P1kYF5PIXXoZAGNRHd3e02Why4";
const PASS_SHEET_NAME = "pass";
const MASTER_SCORE_SHEET = "Rekap_Semua_Nilai";

/**
 * Mendapatkan objek Spreadsheet aktif
 */
function getSpreadsheet() {
  try {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  } catch (err) {
    return SpreadsheetApp.getActiveSpreadsheet();
  }
}

/**
 * Menginisialisasi atau mengambil Sheet 'pass'
 */
function getPassSheet(ss) {
  let sheet = ss.getSheetByName(PASS_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(PASS_SHEET_NAME);
    const headers = ["Tingkat", "Password", "Keterangan", "Terakhir Diperbarui", "Status"];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length)
         .setBackground("#4F46E5")
         .setFontColor("#FFFFFF")
         .setFontWeight("bold")
         .setHorizontalAlignment("center");
    sheet.setFrozenRows(1);

    // Nilai Default Awal
    const defaultPass = [
      ["ALL", "SABAKU2026", "Password Umum (Semua Tingkat)", new Date(), "AKTIF"],
      ["X-E", "SABAKU-X", "Kelas X (Fase E)", new Date(), "AKTIF"],
      ["XI-F", "SABAKU-XI", "Kelas XI (Fase F - B. Inggris Wajib)", new Date(), "AKTIF"],
      ["XI-TL", "SABAKU-XI-TL", "Kelas XI (Fase F - B. Inggris Tingkat Lanjut)", new Date(), "AKTIF"],
      ["XII-F", "SABAKU-XII", "Kelas XII (Fase F - B. Inggris Wajib)", new Date(), "AKTIF"],
      ["XII-TL", "SABAKU-XII-TL", "Kelas XII (Fase F - B. Inggris Tingkat Lanjut)", new Date(), "AKTIF"]
    ];
    for (let i = 0; i < defaultPass.length; i++) {
      sheet.appendRow(defaultPass[i]);
    }
  }
  return sheet;
}

/**
 * Membaca seluruh password dari sheet 'pass'
 */
function getAllPasswords() {
  const ss = getSpreadsheet();
  const sheet = getPassSheet(ss);
  const data = sheet.getDataRange().getValues();
  const passwords = {};
  
  // Lewati baris 0 (header)
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const tingkat = String(row[0] || "").trim().toUpperCase();
    const pass = String(row[1] || "").trim();
    const status = String(row[4] || "AKTIF").trim().toUpperCase();
    if (tingkat) {
      passwords[tingkat] = {
        password: pass,
        keterangan: String(row[2] || ""),
        updatedAt: row[3] ? new Date(row[3]).toLocaleString("id-ID") : "-",
        status: status
      };
    }
  }
  return passwords;
}

/**
 * Mengubah atau memperbarui password pada sheet 'pass'
 */
function setPassword(tingkat, newPassword, keterangan) {
  const ss = getSpreadsheet();
  const sheet = getPassSheet(ss);
  const data = sheet.getDataRange().getValues();
  const targetTingkat = String(tingkat || "ALL").trim().toUpperCase();
  const passVal = String(newPassword || "").trim();
  const now = new Date();
  
  let foundRow = -1;
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]).trim().toUpperCase() === targetTingkat) {
      foundRow = i + 1; // 1-indexed
      break;
    }
  }
  
  if (foundRow > 0) {
    sheet.getRange(foundRow, 2).setValue(passVal);
    if (keterangan) sheet.getRange(foundRow, 3).setValue(keterangan);
    sheet.getRange(foundRow, 4).setValue(now);
    sheet.getRange(foundRow, 5).setValue("AKTIF");
  } else {
    sheet.appendRow([targetTingkat, passVal, keterangan || ("Tingkat " + targetTingkat), now, "AKTIF"]);
  }
  
  return {
    status: "success",
    message: "Password untuk " + targetTingkat + " berhasil disimpan ke Google Sheets",
    tingkat: targetTingkat,
    password: passVal
  };
}

/**
 * Memverifikasi kecocokan password yang diinput siswa
 */
function verifyPassword(tingkat, inputPassword) {
  const passwords = getAllPasswords();
  const targetTingkat = String(tingkat || "").trim().toUpperCase();
  const inputPass = String(inputPassword || "").trim();
  
  if (!inputPass) {
    return { valid: false, message: "Password tidak boleh kosong!" };
  }
  
  // Cek kecocokan password spesifik tingkat
  if (passwords[targetTingkat] && passwords[targetTingkat].status === "AKTIF") {
    if (passwords[targetTingkat].password === inputPass) {
      return { valid: true, message: "Password valid untuk " + targetTingkat };
    }
  }
  
  // Cek kecocokan password umum (ALL)
  if (passwords["ALL"] && passwords["ALL"].status === "AKTIF") {
    if (passwords["ALL"].password === inputPass) {
      return { valid: true, message: "Password umum (Master) valid!" };
    }
  }
  
  return { valid: false, message: "Password ASTS salah atau tidak sesuai tingkat kelas Anda!" };
}

/**
 * Menentukan nama sheet terpisah berdasarkan jenis asesmen dan tingkat kelas
 */
function resolveSheetName(data) {
  if (!data) data = {};
  if (data.sheetName) return String(data.sheetName).trim();
  
  var jenisAsesmenInput = String(data.jenisAsesmen || data.assessmentType || "").trim().toUpperCase();
  var tingkatInput = String(data.tingkat || "").trim().toUpperCase();
  var modeStrInput = String(data.mode || "").toUpperCase();
  
  var tingkatLabel = "Lainnya";
  if (tingkatInput === "X-E" || (tingkatInput.includes("X") && !tingkatInput.includes("XI") && !tingkatInput.includes("XII"))) {
    tingkatLabel = "Kelas_X";
  } else if (tingkatInput === "XI-F" || (tingkatInput === "XI" && !tingkatInput.includes("TL"))) {
    tingkatLabel = "Kelas_XI_Wajib";
  } else if (tingkatInput === "XI-TL" || (tingkatInput.includes("XI") && tingkatInput.includes("TL"))) {
    tingkatLabel = "Kelas_XI_TL";
  } else if (tingkatInput === "XII-F" || (tingkatInput === "XII" && !tingkatInput.includes("TL"))) {
    tingkatLabel = "Kelas_XII_Wajib";
  } else if (tingkatInput === "XII-TL" || (tingkatInput.includes("XII") && tingkatInput.includes("TL"))) {
    tingkatLabel = "Kelas_XII_TL";
  }
  
  var isAsas = jenisAsesmenInput.includes("ASAS") || modeStrInput.includes("ASAS") || String(data.testType || "").toUpperCase().includes("ASAS");
  var prefix = isAsas ? "ASAS" : "ASTS";
  return prefix + "_" + tingkatLabel;
}

/**
 * Mengambil atau membuat sheet terpisah dengan header berformat profesional
 */
function getTargetScoreSheet(ss, sheetName, jenisKategori) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    var headers = [
      "Timestamp",
      "Tingkat",
      "Rombel",
      "No. Presensi",
      "Nama Lengkap Siswa",
      "Jenis Asesmen",
      "Mode Ujian",
      "Skor Benar",
      "Total Soal",
      "Nilai (0-100)",
      "Status KKTP (Min. 75)",
      "Durasi Pengerjaan",
      "Detail Jawaban Siswa"
    ];
    sheet.appendRow(headers);
    
    // Warna Header: Biru Tua untuk ASTS, Hijau Emerald untuk ASAS
    var headerColor = (jenisKategori && jenisKategori.includes("ASAS")) ? "#065F46" : "#1E3A8A";
    
    sheet.getRange(1, 1, 1, headers.length)
         .setBackground(headerColor)
         .setFontColor("#FFFFFF")
         .setFontWeight("bold")
         .setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * Menyimpan data nilai siswa ke Sheet terpisah dan Sheet Master
 */
function recordStudentScore(data) {
  if (!data) data = {};
  var ss = getSpreadsheet();
  var modeStr = String(data.mode || "").toUpperCase();
  var jenisAsesmenStr = String(data.jenisAsesmen || data.assessmentType || (modeStr.includes("ASAS") ? "ASAS" : "ASTS")).toUpperCase();
  var targetSheetName = resolveSheetName(data);
  var targetSheet = getTargetScoreSheet(ss, targetSheetName, jenisAsesmenStr);
  
  var timestamp = new Date();
  var score = Number(data.score || 0);
  var total = Number(data.total || 40);
  var grade = Number(data.grade !== undefined ? data.grade : Math.round((score / total) * 100));
  var kktpStatus = grade >= 75 ? "TUNTAS" : "BELUM TUNTAS";
  
  // Deduplication check: cegah pencatatan ganda jika request terkirim 2x berturut-turut dalam 30 detik
  var lastRow = targetSheet.getLastRow();
  if (lastRow > 1) {
    try {
      var lastData = targetSheet.getRange(lastRow, 1, 1, 7).getValues()[0];
      var lastTimestamp = lastData[0] ? new Date(lastData[0]) : null;
      var lastRombel = String(lastData[2]);
      var lastPresensi = String(lastData[3]);
      var lastNama = String(lastData[4]);
      var lastMode = String(lastData[6]);
      
      var isSameStudent = (lastRombel === String(data.rombel || "-") &&
                           lastPresensi === String(data.presensi || "-") &&
                           lastNama.toLowerCase() === String(data.nama || "-").toLowerCase() &&
                           lastMode === String(data.mode || "Asesmen Resmi"));
      
      if (isSameStudent && lastTimestamp && (timestamp.getTime() - lastTimestamp.getTime() < 30000)) {
        return {
          status: "success",
          message: "Data nilai sudah tercatat sebelumnya (duplikasi dicegah).",
          sheetName: targetSheetName
        };
      }
    } catch (dupErr) {
      Logger.log("Deduplication check error: " + dupErr);
    }
  }

  var row = [
    timestamp,
    data.tingkat || "-",
    data.rombel || "-",
    data.presensi || "-",
    data.nama || "-",
    jenisAsesmenStr,
    data.mode || "Asesmen Resmi",
    score,
    total,
    grade,
    kktpStatus,
    data.duration || "-",
    data.answers ? (typeof data.answers === "object" ? JSON.stringify(data.answers) : data.answers) : "-"
  ];
  
  // Simpan ke sheet terpisah per jenjang
  targetSheet.appendRow(row);
  
  // Simpan pula salinan ke Sheet Master 'Rekap_Semua_Nilai'
  try {
    const masterSheet = getTargetScoreSheet(ss, MASTER_SCORE_SHEET, "MASTER");
    masterSheet.appendRow(row);
  } catch (mErr) {
    Logger.log("Master sheet log error: " + mErr);
  }
  
  return {
    status: "success",
    message: "Data nilai berhasil disimpan ke sheet " + targetSheetName,
    sheetName: targetSheetName,
    rowNumber: targetSheet.getLastRow()
  };
}

/**
 * Handle HTTP POST Request
 */
function doPost(e) {
  try {
    let data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter;
      }
    } else {
      data = e.parameter || {};
    }
    
    const action = String(data.action || "").toLowerCase();
    
    // 1. Aksi Ubah Password (dari pass.html)
    if (action === "set_password" || action === "save_password") {
      const res = setPassword(data.tingkat, data.password, data.keterangan);
      return sendJsonResponse(res);
    }
    
    // 2. Aksi Baca Seluruh Password (dari pass.html)
    if (action === "get_passwords") {
      const passwords = getAllPasswords();
      return sendJsonResponse({ status: "success", passwords: passwords });
    }
    
    // 3. Aksi Verifikasi Password (dari masuk-asts.html)
    if (action === "check_password" || action === "verify_password") {
      const res = verifyPassword(data.tingkat, data.password);
      return sendJsonResponse(res);
    }
    
    // 4. Aksi Standar: Simpan Rekap Nilai Siswa
    const saveRes = recordStudentScore(data);
    return sendJsonResponse(saveRes);
    
  } catch (error) {
    return sendJsonResponse({
      status: "error",
      message: error.toString()
    });
  }
}

/**
 * Handle HTTP GET Request (Mendukung JSONP / Fetch bebas CORS)
 */
function doGet(e) {
  try {
    const params = e && e.parameter ? e.parameter : {};
    const action = String(params.action || "").toLowerCase();
    
    // 1. Verifikasi Password via GET (Sangat cepat dan bebas CORS untuk siswa)
    if (action === "check_password" || action === "verify_password") {
      const res = verifyPassword(params.tingkat, params.password);
      return sendJsonResponse(res, params.callback);
    }
    
    // 2. Ambil Daftar Password via GET (untuk pass.html)
    if (action === "get_passwords") {
      const passwords = getAllPasswords();
      return sendJsonResponse({ status: "success", passwords: passwords }, params.callback);
    }
    
    // 3. Set Password via GET (opsi fleksibel)
    if (action === "set_password" || action === "save_password") {
      const res = setPassword(params.tingkat, params.password, params.keterangan);
      return sendJsonResponse(res, params.callback);
    }
    
    // 4. Submit Nilai via GET (Beacon / Image ping fallback)
    if (action === "submit" || action === "save_score") {
      const res = recordStudentScore(params);
      return sendJsonResponse(res, params.callback);
    }
    
    // 5. Default Info
    return sendJsonResponse({
      status: "active",
      school: "SMA Negeri 1 Bae Kudus (Sabaku)",
      system: "Portal Asesmen Bahasa Inggris Kurikulum Merdeka 2026/2027",
      sheetId: SPREADSHEET_ID,
      serverTime: new Date().toISOString()
    }, params.callback);
    
  } catch (error) {
    return sendJsonResponse({
      status: "error",
      message: error.toString()
    });
  }
}

/**
 * Helper untuk output JSON / JSONP
 */
function sendJsonResponse(obj, callback) {
  let outputText = JSON.stringify(obj);
  let mimeType = ContentService.MimeType.JSON;
  
  if (callback) {
    outputText = callback + "(" + outputText + ");";
    mimeType = ContentService.MimeType.JAVASCRIPT;
  }
  
  return ContentService.createTextOutput(outputText).setMimeType(mimeType);
}
