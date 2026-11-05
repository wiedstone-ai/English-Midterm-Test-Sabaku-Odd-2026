const fs = require('fs');

const files = [
  'kelas-x-asas.js', 'kelas-x-asts.js', 'kelas-x.js',
  'kelas-xi-asas.js', 'kelas-xi-asts.js', 'kelas-xi.js',
  'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js',
  'kelas-xii-asas.js', 'kelas-xii-asts.js', 'kelas-xii.js',
  'kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('=== ' + f + ' ===');
  [4, 5, 6].forEach(id => {
    const reg = new RegExp('["\']?id["\']?\\s*:\\s*' + id + '\\s*,[\\s\\S]*?["\']?correctAnswer["\']?');
    const m = content.match(reg);
    if (m) {
      const hasSegs = m[0].includes('audioSegments');
      const audioTextMatch = m[0].match(/["\']?audioText["\']?\s*:\s*"([^"]*)"/);
      console.log(`  Q${id}: hasAudioSegments=${hasSegs}, audioText=${audioTextMatch ? audioTextMatch[1].slice(0, 70) + '...' : 'none'}`);
      if (hasSegs) {
        const segsMatch = m[0].match(/audioSegments["\']?\s*:\s*(\[[^\]]*\])/s);
        if (segsMatch) {
          console.log(`    Segments: ${segsMatch[1].replace(/\s+/g, ' ').slice(0, 150)}...`);
        }
      }
    } else {
      console.log(`  Q${id}: not matched`);
    }
  });
});
