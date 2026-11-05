const fs = require('fs');
const vm = require('vm');

const files = [
  'kelas-x-asas.js', 'kelas-x-asts.js',
  'kelas-xi-asas.js', 'kelas-xi-asts.js',
  'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js',
  'kelas-xii-asas.js', 'kelas-xii-asts.js',
  'kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js'
];

let missingCount = 0;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const sandbox = {
    window: { addEventListener: () => {} },
    document: { addEventListener: () => {}, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [] },
    localStorage: { getItem: () => null, setItem: () => {} },
    console: console,
    speechSynthesis: { getVoices: () => [] }
  };
  sandbox.window.window = sandbox.window;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(content, ctx);

  let qFn = Object.keys(ctx).find(k => typeof ctx[k] === 'function' && k.startsWith('getGrade'));
  const questions = ctx[qFn]();

  // Check reading sets: Q11-Q15 and Q26-Q30
  const readingIds = [11, 12, 13, 14, 15, 26, 27, 28, 29, 30];
  readingIds.forEach(id => {
    const q = questions.find(item => item.id === id);
    if (!q) return;
    const body = (q.stimulusBody || '').trim();
    if (body.length < 150) {
      console.log(`[SHORT/MISSING STIMULUS] ${file} Q${id}: len=${body.length} snippet="${body.slice(0, 50)}"`);
      missingCount++;
    }
  });
});

console.log('Total short/missing reading stimuli:', missingCount);
