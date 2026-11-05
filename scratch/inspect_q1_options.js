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
  console.log('==================== ' + f + ' ====================');
  
  // Find options for first 3 questions
  let re = /"id":\s*([1-3]),[\s\S]*?"options":\s*(\[[\s\S]*?\])\s*,\s*"correctAnswer"/g;
  let match;
  let count = 0;
  while ((match = re.exec(content)) !== null) {
    count++;
    console.log(`Q${match[1]} options preview:`);
    console.log(match[2].slice(0, 300));
  }
  if (count === 0) {
    // Try without quotes around keys
    re = /id:\s*([1-3]),[\s\S]*?options:\s*(\[[\s\S]*?\])\s*,\s*correctAnswer/g;
    while ((match = re.exec(content)) !== null) {
      count++;
      console.log(`Q${match[1]} (unquoted) options preview:`);
      console.log(match[2].slice(0, 300));
    }
  }
  console.log(`Total Q1-3 matched: ${count}`);
});
