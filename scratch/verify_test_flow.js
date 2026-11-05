const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = path.join(__dirname, '..');

function testExamFlow(filename) {
  console.log(`\n================ Testing ${filename} ================`);
  const filePath = path.join(baseDir, filename);
  const code = fs.readFileSync(filePath, 'utf8');

  // Create mock DOM environment
  const elements = {};
  function getMockEl(id) {
    if (!elements[id]) {
      elements[id] = {
        id,
        style: {},
        classList: {
          add: () => {},
          remove: () => {},
          contains: () => false
        },
        children: [],
        appendChild: (child) => elements[id].children.push(child),
        innerHTML: '',
        textContent: '',
        disabled: false
      };
    }
    return elements[id];
  }

  const mockDocument = {
    getElementById: (id) => getMockEl(id),
    createElement: (tag) => ({
      tagName: tag,
      style: {},
      classList: { add: () => {}, remove: () => {} },
      appendChild: () => {},
      innerHTML: '',
      textContent: '',
      onclick: null
    }),
    addEventListener: () => {}
  };

  const mockWindow = {
    speechSynthesis: null,
    scrollTo: () => {},
    addEventListener: () => {}
  };

  const mockLocalStorage = {
    store: {},
    getItem: (k) => mockLocalStorage.store[k] || null,
    setItem: (k, v) => { mockLocalStorage.store[k] = v; },
    removeItem: (k) => { delete mockLocalStorage.store[k]; }
  };

  const sandbox = {
    document: mockDocument,
    window: mockWindow,
    localStorage: mockLocalStorage,
    sessionStorage: mockLocalStorage,
    console: console,
    fetch: () => Promise.resolve(),
    setInterval: () => 123,
    clearInterval: () => {},
    setTimeout: (fn) => fn(),
    alert: (msg) => console.log('  [Alert]:', msg),
    confirm: () => true
  };

  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);

  // Initialize test
  vm.runInContext('if (typeof initTestState === "function") initTestState(); else if (typeof startFreshTest === "function") startFreshTest();', sandbox);
  const qBank = vm.runInContext('questions', sandbox);
  console.log(`  Initialized test with ${qBank.length} questions.`);

  const expBox = getMockEl("question-explanation-box");
  console.log(`  Initial expBox display: "${expBox.style.display}" (Expected: "none")`);
  if (expBox.style.display !== "none") throw new Error("expBox should be hidden initially!");

  // Question 1
  const q1 = qBank[0];
  console.log(`  Q1 Type: ${q1.type}, Answer: ${q1.correctAnswer}`);

  // Simulate user answering Q1 with incorrect option first
  const wrongChoice = (q1.correctAnswer === "A") ? "B" : "A";
  vm.runInContext(`userAnswers[${q1.id}] = "${wrongChoice}"; renderQuestion(0);`, sandbox);
  console.log(`  After selecting ${wrongChoice}, expBox display: "${expBox.style.display}" (Expected: "none")`);
  if (expBox.style.display !== "none") throw new Error("expBox should still be hidden after answering!");

  // Simulate user changing mind to correct option before navigating
  vm.runInContext(`userAnswers[${q1.id}] = "${q1.correctAnswer}"; renderQuestion(0);`, sandbox);
  console.log(`  After changing answer to ${q1.correctAnswer}, expBox display: "${expBox.style.display}" (Expected: "none")`);
  if (expBox.style.display !== "none") throw new Error("expBox should still be hidden!");

  // Navigate to Q2
  vm.runInContext('navigateQuestion(1);', sandbox);
  const curIdx = vm.runInContext('currentQuestionIndex', sandbox);
  const userAnswers = vm.runInContext('userAnswers', sandbox);
  console.log(`  Navigated to Q2. Current index: ${curIdx}`);
  console.log(`  Recorded answer for Q1 before navigation: ${userAnswers[q1.id]}`);
  if (userAnswers[q1.id] !== q1.correctAnswer) throw new Error("Q1 recorded answer should be retained!");
  console.log(`  At Q2, expBox display: "${expBox.style.display}" (Expected: "none")`);
  if (expBox.style.display !== "none") throw new Error("expBox should still be hidden at Q2!");

  // Answer remaining questions correctly
  for (let i = 1; i < qBank.length; i++) {
    const q = qBank[i];
    if (q.type === "complex_matrix") {
      const ansObj = {};
      q.matrixStatements.forEach((st, idx) => {
        ansObj[idx] = st.isCorrect;
      });
      vm.runInContext(`userAnswers[${q.id}] = ${JSON.stringify(ansObj)};`, sandbox);
    } else if (q.type === "mcma") {
      const cAns = Array.isArray(q.correctAnswer) ? [...q.correctAnswer] : [q.correctAnswer];
      vm.runInContext(`userAnswers[${q.id}] = ${JSON.stringify(cAns)};`, sandbox);
    } else {
      vm.runInContext(`userAnswers[${q.id}] = "${q.correctAnswer}";`, sandbox);
    }
  }

  // Submit test
  vm.runInContext('submitTest();', sandbox);
  const isExamSubmitted = vm.runInContext('isExamSubmitted', sandbox);
  console.log(`  Test submitted! isExamSubmitted: ${isExamSubmitted}`);
  const scoreVal = getMockEl("modal-score-grade").textContent || getMockEl("result-score-val").textContent;
  console.log(`  Modal final score: ${scoreVal} (Expected: 100)`);
  if (scoreVal != 100) throw new Error("Score should be 100!");

  // Now review question 1
  vm.runInContext('reviewAllAnswers();', sandbox);
  console.log(`  In Review Mode, expBox display: "${expBox.style.display}" (Expected: "block")`);
  if (expBox.style.display !== "block") throw new Error("expBox should be shown during review!");

  console.log(`  Explanation text rendered: ${getMockEl("explanation-text").innerHTML.slice(0, 100)}...`);
  console.log(`  [SUCCESS] All checks passed for ${filename}!`);
}

testExamFlow('kelas-xii-tl-asas.js');
testExamFlow('kelas-xii-tl-asts.js');
testExamFlow('kelas-xii-asas.js');
testExamFlow('kelas-xii-asts.js');
testExamFlow('kelas-xi-tl-asas.js');
testExamFlow('kelas-xi-tl-asts.js');
testExamFlow('kelas-xi-asas.js');
testExamFlow('kelas-xi-asts.js');
testExamFlow('kelas-x-asas.js');
testExamFlow('kelas-x-asts.js');
