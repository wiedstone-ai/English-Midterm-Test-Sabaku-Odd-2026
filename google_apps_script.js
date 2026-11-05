/**
 * GOOGLE APPS SCRIPT - REKAP NILAI ASESMEN SUMATIF TENGAH SEMESTER GASAL (ASTS) 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * 
 * Spreadsheet ID: 1-PVYGcdgjIfEe4zc2P1kYF5PIXXoZAGNRHd3e02Why4
 * URL: https://docs.google.com/spreadsheets/d/1-PVYGcdgjIfEe4zc2P1kYF5PIXXoZAGNRHd3e02Why4/edit?usp=sharing
 * 
 * CARA PEMASANGAN (1 MENIT):
 * 1. Buka spreadsheet: https://docs.google.com/spreadsheets/d/1-PVYGcdgjIfEe4zc2P1kYF5PIXXoZAGNRHd3e02Why4/edit
 * 2. Klik menu 'Extensions' (Ekstensi) -> 'Apps Script'.
 * 3. Hapus seluruh kode default di editor, lalu paste seluruh isi file ini.
 * 4. Klik ikon Save (Disket / Ctrl+S).
 * 5. Klik tombol biru 'Deploy' (Terapkan) -> 'New deployment' (Penerapan baru).
 *    - Pilih jenis: 'Web app' (Aplikasi web)
 *    - Description: 'ASTS Sabaku 2026'
 *    - Execute as: 'Me' (Saya)
 *    - Who has access: 'Anyone' (Siapa saja)
 *    - Klik 'Deploy'. Berikan izin otorisasi Google jika diminta.
 * 6. Salin Web App URL yang berakhiran '/exec'.
 * 7. Tempelkan URL tersebut ke dalam aplikasi pada menu 'Pengaturan Database'. Selesai!
 */

const SPREADSHEET_ID = "1-PVYGcdgjIfEe4zc2P1kYF5PIXXoZAGNRHd3e02Why4";
const SHEET_NAME = "Rekap_Nilai_ASTS_2026";

function getTargetSheet() {
  let ss;
  try {
    ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  } catch (err) {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  }
  
  let sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheetByName("Rekap_Nilai_ATS_2026");
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Setup Header Row
    const headers = [
      "Timestamp",
      "Tingkat",
      "Rombel",
      "No. Presensi",
      "Nama Lengkap",
      "Mode Ujian",
      "Skor Benar",
      "Total Soal",
      "Nilai (0-100)",
      "Status KKTP (Min. 75)",
      "Durasi Pengerjaan",
      "Detail Jawaban Siswa"
    ];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length)
         .setBackground("#1E3A8A")
         .setFontColor("#FFFFFF")
         .setFontWeight("bold")
         .setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  try {
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }
    
    const sheet = getTargetSheet();
    const timestamp = new Date();
    
    const row = [
      timestamp,
      data.tingkat || "-",
      data.rombel || "-",
      data.presensi || "-",
      data.nama || "-",
      data.mode || "Asesmen Resmi",
      Number(data.score || 0),
      Number(data.total || 40),
      Number(data.grade || 0),
      (Number(data.grade || 0) >= 75) ? "TUNTAS" : "BELUM TUNTAS",
      data.duration || "-",
      data.answers ? JSON.stringify(data.answers) : "-"
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data nilai berhasil disimpan ke Google Sheets",
      rowNumber: sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Dukungan GET request (JSONP / Beacon) agar bebas dari kendala CORS
  if (e && e.parameter && e.parameter.action === "submit") {
    return doPost(e);
  }
  
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    school: "SMA Negeri 1 Bae Kudus (Sabaku)",
    system: "Rekapitulasi Nilai Asesmen Sumatif Tengah Semester Gasal 2026",
    sheetId: SPREADSHEET_ID
  })).setMimeType(ContentService.MimeType.JSON);
}

