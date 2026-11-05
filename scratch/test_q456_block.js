const fs = require('fs');

const files = [
  'kelas-x-asas.js', 'kelas-x-asts.js',
  'kelas-xi-asas.js', 'kelas-xi-asts.js',
  'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js',
  'kelas-xii-asas.js', 'kelas-xii-asts.js',
  'kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const reg = /(\n\s*\{\s*["']?id["']?\s*:\s*4\b[\s\S]*?\n\s*\},\s*)(?=\n\s*\{\s*["']?id["']?\s*:\s*7\b)/;
  const m = content.match(reg);
  console.log(`${f}: matched ${Boolean(m)} (len: ${m ? m[1].length : 0})`);
});

