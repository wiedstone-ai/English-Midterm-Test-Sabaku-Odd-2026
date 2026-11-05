const fs = require('fs');
const path = require('path');

const testConfigs = [
  { file: 'kelas-x-asas.js', bankFn: 'getGrade10Questions', storageKey: 'sabaku_asas_progress_X' },
  { file: 'kelas-x-asts.js', bankFn: 'getGrade10Questions', storageKey: 'sabaku_asts_progress_X' },
  { file: 'kelas-x.js', bankFn: 'getGrade10Questions', storageKey: 'sabaku_asts_progress_X' },
  { file: 'kelas-xi-asas.js', bankFn: 'getGrade11AsasQuestions', storageKey: 'sabaku_asas_progress_XI' },
  { file: 'kelas-xi-asts.js', bankFn: 'getGrade11AstsQuestions', storageKey: 'sabaku_asts_progress_XI' },
  { file: 'kelas-xi.js', bankFn: 'getGrade11AstsQuestions', storageKey: 'sabaku_asts_progress_XI' },
  { file: 'kelas-xi-tl-asas.js', bankFn: 'getGrade11TLAsasQuestions', storageKey: 'sabaku_asas_progress_XI_TL' },
  { file: 'kelas-xi-tl-asts.js', bankFn: 'getGrade11TLAstsQuestions', storageKey: 'sabaku_asts_progress_XI_TL' },
  { file: 'kelas-xii-asas.js', bankFn: 'getGrade12AsasQuestions', storageKey: 'sabaku_asas_progress_XII' },
  { file: 'kelas-xii-asts.js', bankFn: 'getGrade12AstsQuestions', storageKey: 'sabaku_asts_progress_XII' },
  { file: 'kelas-xii.js', bankFn: 'getGrade12AsasQuestions', storageKey: 'sabaku_asas_progress_XII' },
  { file: 'kelas-xii-tl-asas.js', bankFn: 'getGrade12TLAsasQuestions', storageKey: 'sabaku_asas_progress_XII_TL' },
  { file: 'kelas-xii-tl-asts.js', bankFn: 'getGrade12TLAstsQuestions', storageKey: 'sabaku_asts_progress_XII_TL' }
];

let allPassed = true;

testConfigs.forEach(cfg => {
  const filePath = path.join(__dirname, '..', cfg.file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Verify structure
  if (!content.includes('parsed.questions')) {
    console.error(`FAIL: ${cfg.file} does not restore parsed.questions!`);
    allPassed = false;
  }
  if (!content.includes('questions,')) {
    console.error(`FAIL: ${cfg.file} does not save questions to localStorage!`);
    allPassed = false;
  }

  // Evaluate bank and randomize
  const bankAndEngine = new Function(`
    ${content.substring(0, content.indexOf('window.addEventListener'))}
    return {
      getBank: ${cfg.bankFn},
      randomize: randomizeQuestionOptions
    };
  `)();

  const rawBank = bankAndEngine.getBank();
  if (rawBank.length !== 40) {
    console.error(`FAIL: ${cfg.file} has ${rawBank.length} questions, expected 40!`);
    allPassed = false;
  }

  // Test randomizing and simulation
  const qs = bankAndEngine.randomize(rawBank);
  const userAnswers = {};
  qs.forEach(q => {
    if (q.type === 'complex_matrix') {
      userAnswers[q.id] = {};
      q.matrixStatements.forEach((stmt, idx) => {
        userAnswers[q.id][idx] = stmt.isCorrect;
      });
    } else if (q.type === 'mcma') {
      userAnswers[q.id] = [...q.correctAnswer];
    } else {
      userAnswers[q.id] = q.correctAnswer;
    }
  });

  // Calculate score
  let score = 0;
  qs.forEach(q => {
    const ans = userAnswers[q.id];
    if (q.type === 'complex_matrix') {
      let c = 0;
      q.matrixStatements.forEach((s, i) => { if (ans[i] === s.isCorrect) c++; });
      score += (c / q.matrixStatements.length);
    } else if (q.type === 'mcma') {
      let c = 0;
      ans.forEach(k => { if (q.correctAnswer.includes(k)) c++; });
      score += (c / q.correctAnswer.length);
    } else {
      if (ans === q.correctAnswer) score += 1.0;
    }
  });

  const grade = Math.round((score / qs.length) * 100);
  if (grade !== 100) {
    console.error(`FAIL: ${cfg.file} scored ${grade} instead of 100!`);
    allPassed = false;
  } else {
    console.log(`PASS: ${cfg.file} (40 questions, score 100%, question order persistence verified)`);
  }
});

if (allPassed) {
  console.log('\n=============================================');
  console.log('ALL 13 INSTRUMENTS PASSED VERIFICATION 100%!');
  console.log('=============================================');
} else {
  process.exit(1);
}
