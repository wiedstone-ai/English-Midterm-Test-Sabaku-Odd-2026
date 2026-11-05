const fs = require('fs');

const files = ['kelas-x-asas.js', 'kelas-xi-asas.js', 'kelas-xi-tl-asas.js', 'kelas-xii-asas.js', 'kelas-xii-tl-asas.js'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`=== ${f} ===`);
  for (let id = 11; id <= 40; id++) {
    const reg = new RegExp('["\']?id["\']?\\s*:\\s*' + id + '\\s*,[\\s\\S]*?["\']?options["\']?');
    const m = content.match(reg);
    if (m) {
      const hasStim = m[0].includes('stimulusBody');
      const hasAudio = m[0].includes('audioText') || m[0].includes('audioSegments');
      if (!hasStim && !hasAudio) {
        console.log(`  Q${id} has NO stimulusBody and NO audio`);
      }
    }
  }
});
