const fs = require('fs');

global.window = { addEventListener: () => {} };
global.document = { addEventListener: () => {}, getElementById: () => ({ addEventListener: () => {} }) };
global.localStorage = { getItem: () => null, setItem: () => {} };
global.navigator = {};

const code = fs.readFileSync('kelas-xi-tl-asas.js', 'utf8');
const modified = code.replace(/const questions\s*=/, 'global.questions =');
eval(modified);
console.log('global.questions is:', typeof global.questions, Array.isArray(global.questions) ? global.questions.length : 'not array');
if (global.questions) {
  for (let i = 0; i < 3; i++) {
    console.log(`Q${i+1}:`, global.questions[i]);
  }
}
