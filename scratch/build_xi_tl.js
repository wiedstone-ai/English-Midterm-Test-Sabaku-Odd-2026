const fs = require('fs');
const path = require('path');
const { generateGrade11TLBank } = require('./generate_bank_xi_tl.js');
const { getEngineCode } = require('./engine_template.js');

// 1. Build kelas-xi-tl-asas.js
const asasBank = generateGrade11TLBank(false);
const asasEngine = getEngineCode({
  storageKey: "sabaku_asas_progress_XI_TL",
  tingkatCode: "XI-TL",
  tingkatLabel: "Kelas XI Tingkat Lanjut",
  bankFnName: "getGrade11TLAsasQuestions",
  isAsts: false
});
const asasPath = path.join(__dirname, '..', 'kelas-xi-tl-asas.js');
fs.writeFileSync(asasPath, asasBank + '\n' + asasEngine, 'utf8');
console.log('Built kelas-xi-tl-asas.js successfully.');

// 2. Build kelas-xi-tl-asts.js
const astsBank = generateGrade11TLBank(true);
const astsEngine = getEngineCode({
  storageKey: "sabaku_asts_progress_XI_TL",
  tingkatCode: "XI-TL",
  tingkatLabel: "Kelas XI Tingkat Lanjut",
  bankFnName: "getGrade11TLAstsQuestions",
  isAsts: true
});
const astsPath = path.join(__dirname, '..', 'kelas-xi-tl-asts.js');
fs.writeFileSync(astsPath, astsBank + '\n' + astsEngine, 'utf8');
console.log('Built kelas-xi-tl-asts.js successfully.');
