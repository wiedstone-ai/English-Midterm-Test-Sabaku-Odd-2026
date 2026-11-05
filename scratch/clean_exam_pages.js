// -*- coding: utf-8 -*-
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve('.');

const pages = [
  {
    file: 'kelas-x-asas.html',
    badgeBg: '#eff6ff',
    badgeColor: '#1d4ed8',
    badgeText: 'LATIHAN ASAS GASAL',
    testTitle: 'Kelas X (Fase E) — Bahasa Inggris'
  },
  {
    file: 'kelas-x-asts.html',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    badgeText: 'ASESMEN RESMI ASTS GASAL',
    testTitle: 'Kelas X (Fase E) — Bahasa Inggris'
  },
  {
    file: 'kelas-xi-asas.html',
    badgeBg: '#eff6ff',
    badgeColor: '#1d4ed8',
    badgeText: 'LATIHAN ASAS GASAL',
    testTitle: 'Kelas XI (Fase F) — Bahasa Inggris Wajib'
  },
  {
    file: 'kelas-xi-asts.html',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    badgeText: 'ASESMEN RESMI ASTS GASAL',
    testTitle: 'Kelas XI (Fase F) — Bahasa Inggris Wajib'
  },
  {
    file: 'kelas-xi-tl-asas.html',
    badgeBg: '#f5f3ff',
    badgeColor: '#6b21a8',
    badgeText: 'LATIHAN ASAS GASAL',
    testTitle: 'Kelas XI (Fase F) — Bahasa Inggris Tingkat Lanjut'
  },
  {
    file: 'kelas-xi-tl-asts.html',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    badgeText: 'ASESMEN RESMI ASTS GASAL',
    testTitle: 'Kelas XI (Fase F) — Bahasa Inggris Tingkat Lanjut'
  },
  {
    file: 'kelas-xii-asas.html',
    badgeBg: '#eff6ff',
    badgeColor: '#1d4ed8',
    badgeText: 'LATIHAN ASAS GASAL',
    testTitle: 'Kelas XII (Fase F+) — Bahasa Inggris Wajib'
  },
  {
    file: 'kelas-xii-asts.html',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    badgeText: 'ASESMEN RESMI ASTS GASAL',
    testTitle: 'Kelas XII (Fase F+) — Bahasa Inggris Wajib'
  },
  {
    file: 'kelas-xii-tl-asas.html',
    badgeBg: '#f5f3ff',
    badgeColor: '#6b21a8',
    badgeText: 'LATIHAN ASAS GASAL',
    testTitle: 'Kelas XII (Fase F+) — Bahasa Inggris Tingkat Lanjut'
  },
  {
    file: 'kelas-xii-tl-asts.html',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    badgeText: 'ASESMEN RESMI ASTS GASAL',
    testTitle: 'Kelas XII (Fase F+) — Bahasa Inggris Tingkat Lanjut'
  },
  // Legacy files if accessed
  {
    file: 'kelas-x.html',
    badgeBg: '#eff6ff',
    badgeColor: '#1d4ed8',
    badgeText: 'ASESMEN BAHASA INGGRIS',
    testTitle: 'Kelas X (Fase E) — Bahasa Inggris'
  },
  {
    file: 'kelas-xi.html',
    badgeBg: '#eff6ff',
    badgeColor: '#1d4ed8',
    badgeText: 'ASESMEN BAHASA INGGRIS',
    testTitle: 'Kelas XI (Fase F) — Bahasa Inggris'
  },
  {
    file: 'kelas-xii.html',
    badgeBg: '#eff6ff',
    badgeColor: '#1d4ed8',
    badgeText: 'ASESMEN BAHASA INGGRIS',
    testTitle: 'Kelas XII (Fase F+) — Bahasa Inggris'
  }
];

pages.forEach(p => {
  const filePath = path.join(rootDir, p.file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  // 1. Remove toggleKisiKisiModal button from header
  content = content.replace(/<button[^>]*onclick="toggleKisiKisiModal\(\)"[^>]*>[\s\S]*?<\/button>\s*/gi, '');

  // 2. Replace section between <section id="test-screen"> and <div class="exam-layout">
  const startTag = '<section id="test-screen">';
  const endTag = '<div class="exam-layout">';

  const sIdx = content.indexOf(startTag);
  const eIdx = content.indexOf(endTag);

  if (sIdx !== -1 && eIdx !== -1) {
    const cleanHeaderBar = `
      <!-- Clean Exam Status Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: #ffffff; border: 1.5px solid var(--border-light); border-radius: var(--radius-md); padding: 12px 18px; margin-bottom: 20px; box-shadow: var(--shadow-sm); flex-wrap: wrap; gap: 12px;">
        <div style="font-size: 0.92rem; color: var(--text-dark); display: flex; align-items: center; gap: 10px;">
          <span style="background: ${p.badgeBg}; color: ${p.badgeColor}; padding: 4px 10px; border-radius: 6px; font-weight: 700; font-size: 0.8rem; letter-spacing: 0.5px;">${p.badgeText}</span>
          <span><strong>${p.testTitle}</strong> — 40 Butir Soal Standar TKA (Waktu: 90 Menit).</span>
        </div>
        <div>
          <a href="index.html" onclick="return confirm('Apakah Anda yakin ingin keluar ke Portal Masuk?\\nJawaban Anda saat ini tetap tersimpan secara aman di peramban ini.')" style="font-size: 0.85rem; font-weight: 700; color: #475569; text-decoration: none; padding: 6px 14px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s;">
            🏠 Kembali ke Portal
          </a>
        </div>
      </div>
      `;

    content = content.substring(0, sIdx + startTag.length) + cleanHeaderBar + content.substring(eIdx);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Cleaned:', p.file);
});

