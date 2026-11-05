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
  console.log(`\n========================================\nFILE: ${f}\n========================================`);
  const vm = require('vm');
  const sandbox = { window: { addEventListener: () => {} }, document: { addEventListener: () => {}, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [] }, localStorage: { getItem: () => null, setItem: () => {} }, console: console, speechSynthesis: { getVoices: () => [] } };
  sandbox.window.window = sandbox.window;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(content, ctx);
  let qFnName = Object.keys(ctx).find(k => typeof ctx[k] === 'function' && k.startsWith('getGrade'));
  if (!qFnName) qFnName = Object.keys(ctx.window).find(k => typeof ctx.window[k] === 'function' && k.startsWith('getGrade'));
  const questions = (ctx[qFnName] || ctx.window[qFnName])();

  for (let id = 16; id <= 25; id++) {
    const q = questions.find(item => item.id === id);
    if (!q) continue;
    console.log(`--- Q${id} (${q.type}) ---`);
    console.log(`Title: ${q.title}`);
    console.log(`Prompt: ${q.prompt}`);
    if (q.matrixStatements) {
      console.log('Matrix Statements:');
      q.matrixStatements.forEach((s, idx) => console.log(`  [${s.isCorrect ? 'TRUE' : 'FALSE'}] ${s.statement}`));
    }
    if (q.options) {
      console.log('Options: (Correct: ' + JSON.stringify(q.correctAnswer) + ')');
      q.options.forEach(o => console.log(`  [${o.key}] ${o.text}`));
    }
  }
});
