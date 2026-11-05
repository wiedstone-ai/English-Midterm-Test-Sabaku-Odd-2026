// -*- coding: utf-8 -*-
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve('.');

const testFiles = [
  { name: 'Kelas X ASAS', file: 'kelas-x-asas.js', fn: 'getGrade10Questions', isAsts: false },
  { name: 'Kelas X ASTS', file: 'kelas-x-asts.js', fn: 'getGrade10Questions', isAsts: true },
  { name: 'Kelas XI Wajib ASAS', file: 'kelas-xi-asas.js', fn: 'getGrade11AsasQuestions', isAsts: false },
  { name: 'Kelas XI Wajib ASTS', file: 'kelas-xi-asts.js', fn: 'getGrade11AstsQuestions', isAsts: true },
  { name: 'Kelas XI TL ASAS', file: 'kelas-xi-tl-asas.js', fn: 'getGrade11TLAsasQuestions', isAsts: false },
  { name: 'Kelas XI TL ASTS', file: 'kelas-xi-tl-asts.js', fn: 'getGrade11TLAstsQuestions', isAsts: true },
  { name: 'Kelas XII Wajib ASAS', file: 'kelas-xii-asas.js', fn: 'getGrade12AsasQuestions', isAsts: false },
  { name: 'Kelas XII Wajib ASTS', file: 'kelas-xii-asts.js', fn: 'getGrade12AstsQuestions', isAsts: true },
  { name: 'Kelas XII TL ASAS', file: 'kelas-xii-tl-asas.js', fn: 'getGrade12TLAsasQuestions', isAsts: false },
  { name: 'Kelas XII TL ASTS', file: 'kelas-xii-tl-asts.js', fn: 'getGrade12TLAstsQuestions', isAsts: true },
];

console.log('=== VERIFYING ALL 10 TESTS ACROSS ALL GRADES ===\n');

let allPassed = true;

testFiles.forEach(t => {
  const filePath = path.join(rootDir, t.file);
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] ${t.file} not found!`);
    allPassed = false;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Check auth guard
  if (t.isAsts) {
    if (!content.includes('checkAstsAuth')) {
      console.error(`[FAIL] ${t.file} missing checkAstsAuth!`);
      allPassed = false;
    }
  }

  // Check randomizeQuestionOptions
  if (!content.includes('randomizeQuestionOptions')) {
    console.error(`[FAIL] ${t.file} missing randomizeQuestionOptions!`);
    allPassed = false;
  }

  // Check questions
  const fnRegex = new RegExp(`function ${t.fn}\\([\\s\\S]*?\\n\\}`);
  const match = content.match(fnRegex);
  if (!match) {
    console.error(`[FAIL] ${t.file} missing function ${t.fn}!`);
    allPassed = false;
    return;
  }

  const mockCtx = {
    SVG_PICTURES: new Proxy({}, { get: () => '<svg></svg>' })
  };
  vm.createContext(mockCtx);
  try {
    vm.runInContext(match[0], mockCtx);
    const qs = mockCtx[t.fn]();

    if (qs.length !== 40) {
      console.error(`[FAIL] ${t.file} has ${qs.length} questions (expected 40)!`);
      allPassed = false;
    }

    const types = {};
    const scAnswers = {};
    let matrixCount = 0;
    let mcmaCount = 0;

    qs.forEach(q => {
      types[q.type] = (types[q.type] || 0) + 1;
      if (q.type === 'complex_matrix') {
        matrixCount++;
      } else if (q.type === 'mcma') {
        mcmaCount++;
      } else {
        const a = q.correctAnswer;
        scAnswers[a] = (scAnswers[a] || 0) + 1;
      }
    });

    const isMatrixValid = matrixCount === 5;
    const isMcmaValid = mcmaCount === 5;
    const scTotal = Object.values(scAnswers).reduce((a, b) => a + b, 0);
    const isScTotalValid = scTotal === 30;

    // Check balance: each of A, B, C, D should be roughly 6-9
    const isBalanced = ['A', 'B', 'C', 'D'].every(k => (scAnswers[k] || 0) >= 6 && (scAnswers[k] || 0) <= 9);

    if (!isMatrixValid || !isMcmaValid || !isScTotalValid || !isBalanced) {
      console.error(`[WARN] ${t.name} (${t.file}): Matrix=${matrixCount}, MCMA=${mcmaCount}, SC=${scTotal}, Distribution:`, scAnswers);
      allPassed = false;
    } else {
      console.log(`[PASS] ${t.name} (${t.file})`);
      console.log(`       Matrix: ${matrixCount}, MCMA: ${mcmaCount}, Single-Choice: ${scTotal}`);
      console.log(`       SC Balance: A=${scAnswers.A}, B=${scAnswers.B}, C=${scAnswers.C}, D=${scAnswers.D}`);
    }
  } catch (err) {
    console.error(`[ERROR] Executing ${t.fn} in ${t.file}:`, err.message);
    allPassed = false;
  }
});

console.log('\n=================================================');
if (allPassed) {
  console.log('🎉 ALL 10 TESTS PASSED COMPLETE TKA STANDARDIZATION & VERIFICATION!');
} else {
  console.error('❌ SOME TESTS FAILED VERIFICATION.');
}
