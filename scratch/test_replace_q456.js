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
  console.log(`Checking ${f}:`);
  [4, 5, 6].forEach(id => {
    // Match question block from { "id": X, up to the closing }, before next question
    const reg = new RegExp('(\\{\\s*["\']?id["\']?\\s*:\\s*' + id + '\\s*,[\\s\\S]*?\\n\\s*\\},)');
    const m = content.match(reg);
    console.log(`  Q${id} matched: ${Boolean(m)} (len: ${m ? m[0].length : 0})`);
  });
});

