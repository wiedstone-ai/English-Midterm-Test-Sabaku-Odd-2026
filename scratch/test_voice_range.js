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
  const start = content.indexOf('function getAvailableVoices');
  const end = content.indexOf('function toggleAudioSpeed');
  console.log(`${f}: start=${start}, end=${end}, diff=${end - start}`);
});

