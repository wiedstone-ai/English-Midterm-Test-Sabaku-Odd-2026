const fs = require('fs');

const files = [
  'kelas-x-asas.html', 'kelas-x-asts.html',
  'kelas-xi-asas.html', 'kelas-xi-asts.html',
  'kelas-xi-tl-asas.html', 'kelas-xi-tl-asts.html',
  'kelas-xii-asas.html', 'kelas-xii-asts.html',
  'kelas-xii-tl-asas.html', 'kelas-xii-tl-asts.html'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const startIdx = content.indexOf('<section id="test-screen">');
  const endIdx = content.indexOf('<div class="exam-layout">');
  if (startIdx !== -1 && endIdx !== -1) {
    const snippet = content.substring(startIdx + '<section id="test-screen">'.length, endIdx).trim();
    console.log('=== ' + f + ' === (' + snippet.length + ' chars)');
    console.log(snippet.substring(0, 100) + '...');
  } else {
    console.log('NOT FOUND in ' + f);
  }
});
