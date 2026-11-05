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
  console.log('==================== ' + f + ' ====================');
  [4, 5, 6].forEach(id => {
    const reg = new RegExp('["\']?id["\']?\\s*:\\s*' + id + '\\s*,[\\s\\S]*?(?:["\']?options["\']?\\s*:|["\']?prompt["\']?\\s*:)');
    const m = content.match(reg);
    if (m) {
      console.log(`--- Q${id} ---`);
      console.log(m[0].slice(0, 500));
    }
  });
});
