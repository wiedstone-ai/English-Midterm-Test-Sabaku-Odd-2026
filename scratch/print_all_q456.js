const fs = require('fs');

const files = [
  'kelas-x-asas.js',
  'kelas-xi-asas.js',
  'kelas-xi-tl-asas.js',
  'kelas-xii-asas.js',
  'kelas-xii-tl-asas.js'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('========================================================');
  console.log('FILE: ' + f);
  console.log('========================================================');
  [4, 5, 6].forEach(id => {
    const reg = new RegExp('["\']?id["\']?\\s*:\\s*' + id + '\\s*,[\\s\\S]*?["\']?explanation["\']?');
    const m = content.match(reg);
    if (m) {
      console.log(`\n----- Q${id} -----`);
      console.log(m[0]);
    }
  });
});

