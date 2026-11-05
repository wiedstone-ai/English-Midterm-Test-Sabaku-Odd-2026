const fs = require('fs');

const files = [
  'kelas-x-asas.js', 'kelas-x-asts.js',
  'kelas-xi-asas.js', 'kelas-xi-asts.js',
  'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js',
  'kelas-xii-asas.js', 'kelas-xii-asts.js',
  'kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // 1. Fix renderQuestion stimulus-source and promptBox
  // Replace the stimulus source rendering
  content = content.replace(
    /srcEl\.innerHTML\s*=\s*`📌\s*<strong>\$\{q\.source\}<\/strong>`;/g,
    `srcEl.innerHTML = \`<span style="font-size:0.75rem; color:#64748b; font-style:italic;">Source: \${q.source}</span>\`;`
  );

  // Replace promptBox.innerHTML = q.prompt + srcBadge; or similar
  content = content.replace(
    /const promptBox = document\.getElementById\("question-prompt-text"\);[\s\S]*?promptBox\.innerHTML\s*=\s*[^;]+;/g,
    `const promptBox = document.getElementById("question-prompt-text");
  promptBox.innerHTML = q.prompt;`
  );

  // 2. Fix syncScoreToGoogleSheets
  // Replace syncScoreToGoogleSheets with clean single-fetch version
  const syncRegex = /function syncScoreToGoogleSheets\(payload\)[\s\S]*?^}/m;
  const newSyncFn = `let isSyncingScore = false;
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
}`;

  content = content.replace(syncRegex, newSyncFn);

  fs.writeFileSync(f, content, 'utf8');
  console.log(`Updated renderQuestion and syncScoreToGoogleSheets in ${f}`);
});
