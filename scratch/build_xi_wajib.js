const fs = require('fs');
const path = require('path');
const { generateGrade11WajibBank } = require('./generate_bank_xi_wajib.js');
const { getEngineCode } = require('./engine_template.js');

// 1. Build kelas-xi-asas.js
const asasBank = generateGrade11WajibBank(false);
const asasEngine = getEngineCode({
  storageKey: "sabaku_asas_progress_XI",
  tingkatCode: "XI",
  tingkatLabel: "Kelas XI",
  bankFnName: "getGrade11AsasQuestions",
  isAsts: false
});
const asasPath = path.join(__dirname, '..', 'kelas-xi-asas.js');
fs.writeFileSync(asasPath, asasBank + '\n' + asasEngine, 'utf8');
console.log('Built kelas-xi-asas.js successfully.');

// 2. Build kelas-xi-asts.js
const astsBank = generateGrade11WajibBank(true);
const astsEngine = getEngineCode({
  storageKey: "sabaku_asts_progress_XI",
  tingkatCode: "XI",
  tingkatLabel: "Kelas XI",
  bankFnName: "getGrade11AstsQuestions",
  isAsts: true
});
const astsPath = path.join(__dirname, '..', 'kelas-xi-asts.js');
fs.writeFileSync(astsPath, astsBank + '\n' + astsEngine, 'utf8');
console.log('Built kelas-xi-asts.js successfully.');

// 3. Build kelas-xi.js (Latihan / Portal Kelas XI)
const xiPortalPath = path.join(__dirname, '..', 'kelas-xi.js');
fs.writeFileSync(xiPortalPath, astsBank + '\n' + astsEngine, 'utf8');
console.log('Built kelas-xi.js successfully.');
