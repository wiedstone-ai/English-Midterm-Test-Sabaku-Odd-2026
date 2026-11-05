const fs = require('fs');

const files = ['kelas-x-asas.js', 'kelas-xi-asas.js', 'kelas-xi-tl-asas.js', 'kelas-xii-asas.js'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n========================================\nFILE: ${f}\n========================================`);
  const vm = require('vm');
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
  let qFnName = Object.keys(ctx).find(k => typeof ctx[k] === 'function' && k.startsWith('getGrade'));
  if (!qFnName) qFnName = Object.keys(ctx.window).find(k => typeof ctx.window[k] === 'function' && k.startsWith('getGrade'));
  const questions = (ctx[qFnName] || ctx.window[qFnName])();

  questions.forEach(q => {
    const hasStim = Boolean(q.stimulusBody);
    const hasAudio = Boolean(q.audioText || q.audioSegments);
    console.log(`Q${q.id} (${q.type}): hasAudio=${hasAudio}, hasStim=${hasStim}, stimTitle="${q.stimulusTitle || ''}", stimBodyLen=${q.stimulusBody ? q.stimulusBody.length : 0}`);
  });
});
