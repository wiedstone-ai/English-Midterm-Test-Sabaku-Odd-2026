const fs = require('fs');
const vm = require('vm');

const files = [
  'kelas-x-asas.js', 'kelas-x-asts.js',
  'kelas-xi-asas.js', 'kelas-xi-asts.js',
  'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js',
  'kelas-xii-asas.js', 'kelas-xii-asts.js',
  'kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js'
];

let allPassed = true;

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
    const fn = ctx[qFnName] || ctx.window[qFnName];
    const rawQuestions = fn();
    if (!rawQuestions || rawQuestions.length !== 40) {
      console.error(`FAIL: ${f} question count is ${rawQuestions ? rawQuestions.length : 0}, expected 40!`);
      allPassed = false;
      return;
    }

    // Verify Q4, Q5, Q6
    [4, 5, 6].forEach(id => {
      const q = rawQuestions.find(item => item.id === id);
      if (!q) {
        console.error(`FAIL: ${f} missing Q${id}!`);
        allPassed = false;
        return;
      }
      if (!Array.isArray(q.audioSegments) || q.audioSegments.length < 3) {
        console.error(`FAIL: ${f} Q${id} audioSegments invalid or too short!`);
        allPassed = false;
        return;
      }

      // Check segments for gender and lack of redundant character prefixes
      let hasMale = false;
      let hasFemale = false;
      const forbiddenPrefixes = /^(Boy|Girl|Man|Woman|Teacher|Student|Tari|Danang|Maya|Rian|Nita|Siti|Budi|Amanda|Kevin|Bima):/i;

      q.audioSegments.forEach((seg, sIdx) => {
        if (seg.gender === 'male') hasMale = true;
        if (seg.gender === 'female') hasFemale = true;
        if (forbiddenPrefixes.test(seg.text.trim())) {
          console.error(`FAIL: ${f} Q${id} segment ${sIdx} has prefix: "${seg.text}"`);
          allPassed = false;
        }
      });

      if (!hasMale || !hasFemale) {
        console.error(`FAIL: ${f} Q${id} does not have both male and female speakers! (hasMale=${hasMale}, hasFemale=${hasFemale})`);
        allPassed = false;
      }
    });

    console.log(`PASS: ${f} (40 questions, Q4-Q6 have male & female audioSegments with no prefixes)`);
  } catch (err) {
    console.error(`ERROR in ${f}: ${err.message}`);
    allPassed = false;
  }
});

if (allPassed) {
  console.log('\n>>> ALL 10 TEST ENGINES PASSED 100% OF VERIFICATION CHECKS! <<<');
} else {
  console.error('\n>>> SOME CHECKS FAILED! <<<');
  process.exit(1);
}

