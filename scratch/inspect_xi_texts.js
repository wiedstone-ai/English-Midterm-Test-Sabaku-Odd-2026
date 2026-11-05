const fs = require('fs');

['kelas-xi-asas.js', 'kelas-xi-tl-asas.js', 'kelas-xii-tl-asas.js'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n================== ${f} ==================`);
  const vm = require('vm');
  const sandbox = { window: { addEventListener: () => {} }, document: { addEventListener: () => {}, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [] }, localStorage: { getItem: () => null, setItem: () => {} }, console: console, speechSynthesis: { getVoices: () => [] } };
  sandbox.window.window = sandbox.window;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(content, ctx);
  let qFnName = Object.keys(ctx).find(k => typeof ctx[k] === 'function' && k.startsWith('getGrade'));
  if (!qFnName) qFnName = Object.keys(ctx.window).find(k => typeof ctx.window[k] === 'function' && k.startsWith('getGrade'));
  const questions = (ctx[qFnName] || ctx.window[qFnName])();

  [11, 12, 13, 14, 15, 26, 27, 28, 29, 30].forEach(id => {
    const q = questions.find(item => item.id === id);
    if (!q) return;
    console.log(`Q${id} stimLen: ${q.stimulusBody ? q.stimulusBody.length : 0}, preview: "${(q.stimulusBody || '').slice(0, 70)}..."`);
  });
});
