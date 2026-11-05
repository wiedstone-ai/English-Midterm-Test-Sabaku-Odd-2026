const fs = require('fs');
const vm = require('vm');

const files = [
  'kelas-x-asas.js', 'kelas-x-asts.js',
  'kelas-xi-asas.js', 'kelas-xi-asts.js',
  'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js',
  'kelas-xii-asas.js', 'kelas-xii-asts.js',
  'kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js'
];

const indoRegex = /(Berdasarkan|Tentukan|Manakah|Pilihlah|\bapakah\b|\bpernyataan\b|\bwacana\b|\bkalimat\b|\bpengandaian\b|\bpertentangan\b|\bulasan\b|tidak langsung|\bmerupakan\b|\badalah\b)/i;

let totalFound = 0;

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

  for (let id = 16; id <= 25; id++) {
    const q = questions.find(item => item.id === id);
    if (!q) continue;

    // Check prompt
    if (indoRegex.test(q.prompt)) {
      console.log(`[INDO PROMPT] ${file} Q${id}: ${q.prompt}`);
      totalFound++;
    }

    // Check statements
    if (q.matrixStatements) {
      q.matrixStatements.forEach((s, idx) => {
        if (indoRegex.test(s.statement)) {
          console.log(`[INDO STMT] ${file} Q${id} #${idx+1}: ${s.statement}`);
          totalFound++;
        }
      });
    }

    // Check options
    if (q.options) {
      q.options.forEach(opt => {
        if (indoRegex.test(opt.text)) {
          console.log(`[INDO OPT] ${file} Q${id} (${opt.key}): ${opt.text}`);
          totalFound++;
        }
      });
    }
  }
});

console.log('Total Indonesian occurrences in Q16-Q25:', totalFound);
