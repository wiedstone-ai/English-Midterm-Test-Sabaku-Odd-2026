const fs = require('fs');

const content = fs.readFileSync('kelas-x-asas.js', 'utf8');
const vm = require('vm');
const sandbox = { window: { addEventListener: () => {} }, document: { addEventListener: () => {}, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [] }, localStorage: { getItem: () => null, setItem: () => {} }, console: console, speechSynthesis: { getVoices: () => [] } };
sandbox.window.window = sandbox.window;
const ctx = vm.createContext(sandbox);
vm.runInContext(content, ctx);
const questions = ctx.getGrade10Questions();

[11, 12, 13, 14, 15, 16, 19, 21, 26, 27, 28, 29, 30].forEach(id => {
  const q = questions.find(item => item.id === id);
  console.log(`=== Q${id} ===`);
  console.log('stimulusTitle:', q.stimulusTitle);
  console.log('stimulusBody:', q.stimulusBody);
  console.log('prompt:', q.prompt);
});
