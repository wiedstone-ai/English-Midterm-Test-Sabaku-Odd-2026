const fs = require('fs');
const vm = require('vm');

const files = [
  'kelas-x-asas.js', 'kelas-x-asts.js', 'kelas-x.js',
  'kelas-xi-asas.js', 'kelas-xi-asts.js', 'kelas-xi.js',
  'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js',
  'kelas-xii-asas.js', 'kelas-xii-asts.js', 'kelas-xii.js',
  'kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js'
];

files.forEach(f => {
  const code = fs.readFileSync(f, 'utf8');
  const sandbox = {
    window: {
      addEventListener: () => {}
    },
    document: {
      addEventListener: () => {},
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => []
    },
    localStorage: {
      getItem: () => null,
      setItem: () => {}
    },
    console: console,
    speechSynthesis: {
      getVoices: () => []
    }
  };
  sandbox.window.window = sandbox.window;
  sandbox.window.document = sandbox.document;
  sandbox.window.localStorage = sandbox.localStorage;
  const ctx = vm.createContext(sandbox);
  try {
    vm.runInContext(code, ctx);
    let qFnName = Object.keys(ctx).find(k => typeof ctx[k] === 'function' && k.startsWith('getGrade'));
    if (!qFnName) {
      qFnName = Object.keys(ctx.window).find(k => typeof ctx.window[k] === 'function' && k.startsWith('getGrade'));
    }
    if (!qFnName) {
      console.log(`${f}: NO getGrade* function found`);
      return;
    }
    const fn = ctx[qFnName] || ctx.window[qFnName];
    const rawQ = fn();
    let processedQ = rawQ;
    const randFn = ctx.randomizeQuestionOptions || ctx.window.randomizeQuestionOptions;
    if (typeof randFn === 'function') {
      processedQ = randFn(rawQ);
    }
    const q1to3 = processedQ.slice(0, 3);
    console.log(`\n=== Checking ${f} (${qFnName}) ===`);
    q1to3.forEach(q => {
      console.log(`Q${q.id} type: ${q.type}`);
      if (q.options) {
        q.options.forEach((opt, idx) => {
          const hasSvg = typeof opt.svg === 'string' && opt.svg.length > 10;
          const hasLabel = typeof opt.label === 'string' && opt.label.length > 0;
          const hasText = typeof opt.text === 'string' && opt.text.length > 0;
          if (!hasSvg || !hasLabel) {
            console.log(`  FAIL Option ${opt.key || idx}: svg=${typeof opt.svg} (${opt.svg ? opt.svg.slice(0, 15) : 'EMPTY'}), label=${opt.label}, text=${opt.text}`);
          }
        });
      }
    });
  } catch (err) {
    console.log(`${f}: Error running: ${err.message}`);
  }
});
