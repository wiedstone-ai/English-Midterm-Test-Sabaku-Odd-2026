const fs = require('fs');
const path = require('path');
const { generateGrade10Bank } = require('./generate_bank_x.js');
const { getEngineCode } = require('./engine_template.js');

// 1. Build kelas-x-asas.js
const asasBank = generateGrade10Bank(false);
const asasEngine = getEngineCode({
  storageKey: "sabaku_asas_progress_X",
  tingkatCode: "X",
  tingkatLabel: "Kelas X",
  bankFnName: "getGrade10Questions",
  isAsts: false
});
const asasPath = path.join(__dirname, '..', 'kelas-x-asas.js');
fs.writeFileSync(asasPath, asasBank + '\n' + asasEngine, 'utf8');
console.log('Built kelas-x-asas.js successfully.');

// 2. Build kelas-x-asts.js
const astsBank = generateGrade10Bank(true);
const astsEngine = getEngineCode({
  storageKey: "sabaku_asts_progress_X",
  tingkatCode: "X",
  tingkatLabel: "Kelas X",
  bankFnName: "getGrade10Questions",
  isAsts: true
});
const astsPath = path.join(__dirname, '..', 'kelas-x-asts.js');
fs.writeFileSync(astsPath, astsBank + '\n' + astsEngine, 'utf8');
console.log('Built kelas-x-asts.js successfully.');

// 3. Build kelas-x.js
const xPortalPath = path.join(__dirname, '..', 'kelas-x.js');
fs.writeFileSync(xPortalPath, astsBank + '\n' + astsEngine, 'utf8');
console.log('Built kelas-x.js successfully.');
