const fs = require('fs');
const content = fs.readFileSync('kelas-xi-tl-asas.js', 'utf8');

[4, 5, 6].forEach(id => {
  const reg = new RegExp('["\']?id["\']?\\s*:\\s*' + id + '\\s*,[\\s\\S]*?"audioSegments"\\s*:\\s*(\\[[\\s\\S]*?\\])\\s*,');
  const m = content.match(reg);
  console.log(`=== kelas-xi-tl-asas.js Q${id} ===`);
  if (m) {
    const segs = eval('(' + m[1] + ')');
    console.log(JSON.stringify(segs.map(s => ({ role: s.role, gender: s.gender, text: s.text.slice(0, 50) })), null, 2));
  }
});
