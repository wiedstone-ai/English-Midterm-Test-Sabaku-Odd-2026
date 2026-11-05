const fs = require('fs');
const path = require('path');

const rootDir = path.resolve('.');

const jsFiles = [
  'kelas-x-asas.js', 'kelas-x-asts.js', 'kelas-x.js',
  'kelas-xi-asas.js', 'kelas-xi-asts.js', 'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js', 'kelas-xi.js',
  'kelas-xii-asas.js', 'kelas-xii-asts.js', 'kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js', 'kelas-xii.js'
];

jsFiles.forEach(f => {
  const filePath = path.join(rootDir, f);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace toggleKisiKisiContent
  content = content.replace(
    /function toggleKisiKisiContent\(\)\s*\{[\s\S]*?\n\}/g,
    `function toggleKisiKisiContent() {
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
}`
  );

  // Replace toggleKisiKisiModal
  content = content.replace(
    /function toggleKisiKisiModal\(\)\s*\{[\s\S]*?\n\}/g,
    `function toggleKisiKisiModal() {
  const body = document.getElementById("kisi-kisi-body");
  if (!body) return;
  body.style.display = "block";
  const icon = document.getElementById("kisi-toggle-icon");
  if (icon) icon.textContent = "▲ Sembunyikan Kisi-Kisi";
  window.scrollTo({ top: 0, behavior: 'smooth' });
}`
  );

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Guarded:', f);
});

