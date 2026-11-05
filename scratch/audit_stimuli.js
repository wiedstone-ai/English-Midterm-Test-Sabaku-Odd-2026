const fs = require('fs');

const files = [
  'kelas-x-asas.js', 'kelas-x-asts.js',
  'kelas-xi-asas.js', 'kelas-xi-asts.js',
  'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js',
  'kelas-xii-asas.js', 'kelas-xii-asts.js',
  'kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n========================================\nFILE: ${f}\n========================================`);
  
  // Parse all questions
  const sandbox = {
    window: { addEventListener: () => {} },
    document: { addEventListener: () => {}, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [] },
    localStorage: { getItem: () => null, setItem: () => {} },
    console: console,
    speechSynthesis: { getVoices: () => [] }
  };
  sandbox.window.window = sandbox.window;
  const vm = require('vm');
  const ctx = vm.createContext(sandbox);
  vm.runInContext(code = content, ctx);
  let qFnName = Object.keys(ctx).find(k => typeof ctx[k] === 'function' && k.startsWith('getGrade'));
  if (!qFnName) qFnName = Object.keys(ctx.window).find(k => typeof ctx.window[k] === 'function' && k.startsWith('getGrade'));
  const questions = (ctx[qFnName] || ctx.window[qFnName])();

  questions.forEach(q => {
    // Check if prompt refers to text/dialogue/reading/story/passage/table
    const p = (q.prompt || '').toLowerCase();
    const isReadingRef = p.includes('text') || p.includes('passage') || p.includes('author') || p.includes('paragraph') || p.includes('story') || p.includes('article') || p.includes('dialogue') || p.includes('conversation');
    const hasStim = Boolean(q.stimulusBody && q.stimulusBody.trim().length > 0);
    const hasAudio = Boolean(q.audioText || (q.audioSegments && q.audioSegments.length > 0));

    // Print questions where isReadingRef is true, but hasStim is false and hasAudio is false
    if (isReadingRef && !hasStim && !hasAudio) {
      console.log(`  [MISSING TEXT] Q${q.id} (${q.type}): "${q.prompt.slice(0, 80)}..."`);
    }

    // Also check if stimulusBody exists on some questions in a passage set (e.g. Q11 has text, but Q12-15 don't have it repeated or shown!)
  });
});
