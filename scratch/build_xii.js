const fs = require('fs');
const path = require('path');
const { generateGrade12Bank } = require('./generate_bank_xii.js');
const { getEngineCode } = require('./engine_template.js');

// 1. Build kelas-xii-asas.js (Grade 12 Wajib ASAS)
const asasBank = generateGrade12Bank(false, false);
const asasEngine = getEngineCode({
  storageKey: "sabaku_asas_progress_XII",
  tingkatCode: "XII",
  tingkatLabel: "Kelas XII",
  bankFnName: "getGrade12AsasQuestions",
  isAsts: false
});
const asasPath = path.join(__dirname, '..', 'kelas-xii-asas.js');
fs.writeFileSync(asasPath, asasBank + '\n' + asasEngine, 'utf8');
console.log('Built kelas-xii-asas.js successfully.');

// 2. Build kelas-xii-asts.js (Grade 12 Wajib ASTS)
const astsBank = generateGrade12Bank(true, false);
const astsEngine = getEngineCode({
  storageKey: "sabaku_asts_progress_XII",
  tingkatCode: "XII",
  tingkatLabel: "Kelas XII",
  bankFnName: "getGrade12AstsQuestions",
  isAsts: true
});
const astsPath = path.join(__dirname, '..', 'kelas-xii-asts.js');
fs.writeFileSync(astsPath, astsBank + '\n' + astsEngine, 'utf8');
console.log('Built kelas-xii-asts.js successfully.');

// 3. Build kelas-xii.js (Grade 12 Portal / Latihan)
const xiiPortalPath = path.join(__dirname, '..', 'kelas-xii.js');
fs.writeFileSync(xiiPortalPath, asasBank + '\n' + asasEngine, 'utf8');
console.log('Built kelas-xii.js successfully.');

// 4. Build kelas-xii-tl-asas.js (Grade 12 Tingkat Lanjut ASAS)
const tlAsasBank = generateGrade12Bank(false, true);
const tlAsasEngine = getEngineCode({
  storageKey: "sabaku_asas_progress_XII_TL",
  tingkatCode: "XII-TL",
  tingkatLabel: "Kelas XII Tingkat Lanjut",
  bankFnName: "getGrade12TLAsasQuestions",
  isAsts: false
});
const tlAsasPath = path.join(__dirname, '..', 'kelas-xii-tl-asas.js');
fs.writeFileSync(tlAsasPath, tlAsasBank + '\n' + tlAsasEngine, 'utf8');
console.log('Built kelas-xii-tl-asas.js successfully.');

// 5. Build kelas-xii-tl-asts.js (Grade 12 Tingkat Lanjut ASTS)
const tlAstsBank = generateGrade12Bank(true, true);
const tlAstsEngine = getEngineCode({
  storageKey: "sabaku_asts_progress_XII_TL",
  tingkatCode: "XII-TL",
  tingkatLabel: "Kelas XII Tingkat Lanjut",
  bankFnName: "getGrade12TLAstsQuestions",
  isAsts: true
});
const tlAstsPath = path.join(__dirname, '..', 'kelas-xii-tl-asts.js');
fs.writeFileSync(tlAstsPath, tlAstsBank + '\n' + tlAstsEngine, 'utf8');
console.log('Built kelas-xii-tl-asts.js successfully.');

