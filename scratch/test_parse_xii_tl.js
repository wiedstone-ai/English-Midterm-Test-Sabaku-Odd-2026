const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.join(__dirname, '..', 'kelas-xii-tl-asas.js');
const content = fs.readFileSync(filePath, 'utf8');

// We can extract getGrade12TLAsasQuestions
const sandbox = {
  console: console,
  SVG_PICTURES: {
    biotech_lab: '',
    un_assembly: '',
    tokamak_fusion: '',
    printing_press: ''
  }
};
vm.createContext(sandbox);

// evaluate function getGrade12TLAsasQuestions
const fnCode = content.match(/function getGrade12TLAsasQuestions\(\)\s*\{[\s\S]*?\n\}/)[0];
vm.runInContext(fnCode, sandbox);
const qs = sandbox.getGrade12TLAsasQuestions();
console.log(`Loaded ${qs.length} questions successfully!`);
