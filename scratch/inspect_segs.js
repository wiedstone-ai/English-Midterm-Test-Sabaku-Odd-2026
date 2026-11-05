const fs = require('fs');

const xi_tl = fs.readFileSync('kelas-xi-tl-asas.js', 'utf8');
const xii_tl = fs.readFileSync('kelas-xii-tl-asas.js', 'utf8');

function printSegments(content, fileName, id) {
  const reg = new RegExp('["\']?id["\']?\\s*:\\s*' + id + '\\s*,[\\s\\S]*?"audioSegments"\\s*:\\s*(\\[[\\s\\S]*?\\])\\s*,');
  const m = content.match(reg);
  console.log(`=== ${fileName} Q${id} ===`);
  if (m) {
    try {
      const segs = eval('(' + m[1] + ')');
      console.log(JSON.stringify(segs, null, 2));
    } catch(e) {
      console.log('Error parsing:', e.message, m[1].slice(0, 200));
    }
  } else {
    console.log('No segments found');
  }
}

printSegments(xi_tl, 'kelas-xi-tl-asas.js', 4);
printSegments(xii_tl, 'kelas-xii-tl-asas.js', 4);

