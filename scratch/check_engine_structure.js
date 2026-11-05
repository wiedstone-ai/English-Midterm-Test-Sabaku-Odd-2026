const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..');
const files = [
  'kelas-xii-asas.js', 'kelas-xii-asts.js',
  'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js',
  'kelas-xi-asas.js', 'kelas-xi-asts.js',
  'kelas-x-asas.js', 'kelas-x-asts.js'
];

files.forEach(f => {
  const p = path.join(baseDir, f);
  const text = fs.readFileSync(p, 'utf8');
  console.log(`=== ${f} ===`);
  console.log(`  has randomizeQuestionOptions: ${text.includes('function randomizeQuestionOptions')}`);
  console.log(`  has isExamSubmitted expBox: ${text.includes('if (isExamSubmitted')}`);
  console.log(`  has card.onclick: ${text.includes('card.onclick')}`);
  console.log(`  has item.onclick: ${text.includes('item.onclick')}`);
  console.log(`  has handleMatrixSelect: ${text.includes('function handleMatrixSelect')}`);
  console.log(`  has handleMCMAToggle: ${text.includes('function handleMCMAToggle')}`);
});

