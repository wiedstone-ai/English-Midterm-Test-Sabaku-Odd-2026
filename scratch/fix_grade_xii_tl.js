const fs = require('fs');

['kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  const vm = require('vm');
  const sandbox = {
    window: { addEventListener: () => {} },
    document: { addEventListener: () => {}, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [] },
    localStorage: { getItem: () => null, setItem: () => {} },
    console: console,
    speechSynthesis: { getVoices: () => [] }
  };
  sandbox.window.window = sandbox.window;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(content, ctx);

  const questions = ctx.getGrade12TLAsasQuestions ? ctx.getGrade12TLAsasQuestions() : ctx.getGrade12TLAstsQuestions();
  const qFnName = ctx.getGrade12TLAsasQuestions ? "getGrade12TLAsasQuestions" : "getGrade12TLAstsQuestions";

  const q11 = questions.find(item => item.id === 11);
  const TEXT1_CASHLESS = q11.stimulusBody;
  const q26 = questions.find(item => item.id === 26);
  const TEXT2_BUMI_MANUSIA = q26.stimulusBody;

  // Propagate Text 1 to Q11 - Q15
  [11, 12, 13, 14, 15].forEach(id => {
    const q = questions.find(item => item.id === id);
    if (q) {
      q.stimulusTitle = "Text 1: Navigating the Transition Towards a Cashless Society";
      q.stimulusBody = TEXT1_CASHLESS;
    }
  });

  // Update Q16
  const q16 = questions.find(item => item.id === 16);
  if (q16) {
    q16.title = "Complex Multiple Choice: Fact & Opinion Analysis (Cashless Society & Digital Finance)";
    q16.stimulusTitle = "Text 1: Navigating the Transition Towards a Cashless Society";
    q16.stimulusBody = TEXT1_CASHLESS;
    q16.prompt = "Based on Text 1, determine whether each statement regarding digital payment ecosystems is **TRUE** or **FALSE**:";
    q16.matrixStatements = [
      { statement: "Digital payment architectures like QRIS and mobile e-wallets streamline bookkeeping for small vendors and reduce risks of physical cash theft.", isCorrect: true },
      { statement: "The author advocates that the government immediately enact an outright ban on physical banknotes and penalize cash users.", isCorrect: false },
      { statement: "Elderly populations and rural citizens facing unstable connectivity are vulnerable to acute financial exclusion.", isCorrect: true },
      { statement: "Cashless payment systems are entirely immune to electrical blackouts, server failures, and sophisticated cyber phishing scams.", isCorrect: false }
    ];
  }

  // Update Q17
  const q17 = questions.find(item => item.id === 17);
  if (q17) {
    q17.title = "Complex Multiple Choice: Inverted Conditionals";
    q17.stimulusTitle = "Grammar Focus: Inverted Conditionals (Had / Should / Were)";
    q17.stimulusBody = `<p style="margin-bottom:0;">Inverted conditional structures omit <em>if</em> and begin with auxiliary verbs: <code>Had + Subject + V3</code>, <code>Should + Subject + base verb</code>, <code>Were + Subject + to + verb</code>.</p>`;
    q17.prompt = "Determine whether each inverted conditional sentence below is grammatically **TRUE** (correct) or **FALSE** (incorrect):";
    q17.matrixStatements = [
      { statement: "Had the school provided comprehensive cybersecurity training, students would have recognized the phishing link immediately.", isCorrect: true },
      { statement: "Should you require additional resources for your literary review, please consult the senior librarian.", isCorrect: true },
      { statement: "Were the regional government to invest heavily in rural broadband, digital financial inclusion would expand significantly.", isCorrect: true },
      { statement: "Had they studied the vocabulary list last night, they will achieve a perfect score on the grammar test today.", isCorrect: false }
    ];
  }

  // Update Q18
  const q18 = questions.find(item => item.id === 18);
  if (q18) {
    q18.title = "Complex Multiple Choice: Cleft Sentences for Focus and Emphasis";
    q18.stimulusTitle = "Grammar Focus: It-Cleft and Wh-Cleft Structures";
    q18.stimulusBody = `<p style="margin-bottom:0;">Cleft sentences split a clause into two parts to highlight focal information: <code>It + be + focus + that/who...</code> or <code>What + clause + be + complement</code>.</p>`;
    q18.prompt = "Determine whether each cleft sentence below is grammatically **TRUE** (correct) or **FALSE** (incorrect):";
    q18.matrixStatements = [
      { statement: "It was Nyai Ontosoroh's perseverance and moral dignity that inspired Minke to challenge colonial prejudice.", isCorrect: true },
      { statement: "What students need most in the modern digital era is critical discernment rather than passive memorization.", isCorrect: true },
      { statement: "It is through social media which all students learn their scientific concepts.", isCorrect: false },
      { statement: "What surprised the literary critics were the novel's profound psychological depth.", isCorrect: false }
    ];
  }

  // Update Q19
  const q19 = questions.find(item => item.id === 19);
  if (q19) {
    q19.title = "Complex Multiple Choice: Literary Review Analysis (This Earth of Mankind)";
    q19.stimulusTitle = "Text 2: Literary Review — Pramoedya Ananta Toer's This Earth of Mankind";
    q19.stimulusBody = TEXT2_BUMI_MANUSIA;
    q19.prompt = "Based on the literary review in Text 2, evaluate whether each statement is **TRUE** or **FALSE**:";
    q19.matrixStatements = [
      { statement: "The narrative of This Earth of Mankind is set in late 19th-century Java during the Dutch colonial administration.", isCorrect: true },
      { statement: "The protagonist Minke is portrayed as an illiterate youth who refuses to acquire modern Western education.", isCorrect: false },
      { statement: "Nyai Ontosoroh manages a large-scale agricultural enterprise independently through intellect, resilience, and personal dignity.", isCorrect: true },
      { statement: "The reviewer concludes that the novel lacks enduring relevance and should be avoided by high school literature students.", isCorrect: false }
    ];
  }

  // Update Q20
  const q20 = questions.find(item => item.id === 20);
  if (q20) {
    q20.title = "Complex Multiple Choice: Advanced Concession & Contrast Connectors";
    q20.stimulusTitle = "Grammar Focus: Advanced Concession and Contrast Connectors";
    q20.stimulusBody = `<p style="margin-bottom:0;">Evaluate advanced discourse markers of concession (<em>Much as, Whereas, While, In contrast to</em>).</p>`;
    q20.prompt = "Determine whether each transitional sentence below is grammatically **TRUE** (correct) or **FALSE** (incorrect):";
    q20.matrixStatements = [
      { statement: "Much as she appreciated the convenience of digital payments, Maya remained cautious about personal data privacy.", isCorrect: true },
      { statement: "Whereas physical banknotes guarantee complete anonymity, digital payments leave an electronic audit trail.", isCorrect: true },
      { statement: "Even though the colonial court ruled unjustly, but Nyai Ontosoroh refused to compromise her dignity.", isCorrect: false },
      { statement: "In contrast to urban centers with fast 5G coverage, remote rural villages often experience unreliable connectivity.", isCorrect: true }
    ];
  }

  // Update Q21
  const q21 = questions.find(item => item.id === 21);
  if (q21) {
    q21.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q21.stimulusTitle = "Text 1: Navigating the Transition Towards a Cashless Society";
    q21.stimulusBody = TEXT1_CASHLESS;
    q21.prompt = "Which **TWO (2)** primary benefits of digital payment systems are emphasized in Text 1?";
    q21.options = [
      { key: "A", text: "Instant transaction speed that eliminates the burden of carrying physical banknotes and loose coins." },
      { key: "B", text: "An absolute guarantee that banking servers will never suffer power outages or cyber incursions." },
      { key: "C", text: "Neat, transparent electronic transaction records that facilitate small business credit eligibility." },
      { key: "D", text: "The automatic elimination of all personal household debt whenever digital wallet applications update." }
    ];
    q21.correctAnswer = ["A", "C"];
  }

  // Update Q22
  const q22 = questions.find(item => item.id === 22);
  if (q22) {
    q22.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q22.stimulusTitle = "Grammar Focus: Inverted Conditionals";
    q22.stimulusBody = `<p style="margin-bottom:0;">Select sentences that correctly utilize inverted conditional patterns.</p>`;
    q22.prompt = "Which **TWO (2)** sentences correctly demonstrate inverted conditional structures?";
    q22.options = [
      { key: "A", text: "If I have seen the competition announcement yesterday morning, I would submit the application promptly." },
      { key: "B", text: "Had the agricultural cooperative adopted smart irrigation earlier, crop yields would have doubled during the drought." },
      { key: "C", text: "Were the school to organize an international literature workshop, many aspiring writers would participate enthusiastically." },
      { key: "D", text: "Had she arrived earlier yesterday, she will meet the visiting novelist in the auditorium." }
    ];
    q22.correctAnswer = ["B", "C"];
  }

  // Update Q23
  const q23 = questions.find(item => item.id === 23);
  if (q23) {
    q23.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q23.stimulusTitle = "Grammar Focus: Grammatically Accurate Cleft Sentences";
    q23.stimulusBody = `<p style="margin-bottom:0;">Select cleft sentences that correctly satisfy subject-verb concord and relative pronoun conventions.</p>`;
    q23.prompt = "Which **TWO (2)** cleft sentences below are grammatically accurate and standard?";
    q23.options = [
      { key: "A", text: "It was Minke's eloquent journalistic writing that exposed colonial injustice to the wider public." },
      { key: "B", text: "What impressed the literary critics were the novel's fast pacing and humorous ending." },
      { key: "C", text: "What the author wants to emphasize are that wealth is the only measure of human achievement." },
      { key: "D", text: "It is through empathy and mutual respect that diverse communities can live together harmoniously." }
    ];
    q23.correctAnswer = ["A", "D"];
  }

  // Update Q24
  const q24 = questions.find(item => item.id === 24);
  if (q24) {
    q24.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q24.stimulusTitle = "Text 2: Literary Review — Pramoedya Ananta Toer's This Earth of Mankind";
    q24.stimulusBody = TEXT2_BUMI_MANUSIA;
    q24.prompt = "Which **TWO (2)** character virtues and social critiques are commended by the reviewer of *This Earth of Mankind*?";
    q24.options = [
      { key: "A", text: "The extraordinary intellect, entrepreneurial resilience, and unyielding self-worth demonstrated by Nyai Ontosoroh." },
      { key: "B", text: "Minke's dedication to literacy, social awareness, and moral courage in giving voice to the marginalized." },
      { key: "C", text: "The absolute impartiality and judicial fairness exhibited by the Dutch colonial legal system." },
      { key: "D", text: "Annelies's ambition to abandon her Javanese heritage in order to become a commercial trader in Europe." }
    ];
    q24.correctAnswer = ["A", "B"];
  }

  // Update Q25
  const q25 = questions.find(item => item.id === 25);
  if (q25) {
    q25.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q25.stimulusTitle = "Grammar Focus: Contrast Transitions in Academic English";
    q25.stimulusBody = `<p style="margin-bottom:0;">Select sentences that correctly employ contrast discourse markers.</p>`;
    q25.prompt = "Which **TWO (2)** sentences below correctly employ contrast transitions to connect conflicting ideas?";
    q25.options = [
      { key: "A", text: "Although the historical novel contains profound philosophical insights, because many secondary students find it challenging." },
      { key: "B", text: "The digital economy creates boundless opportunities for young entrepreneurs; on the other hand, it widens the gap for those without digital access." },
      { key: "C", text: "In spite of the student studied diligently, but he was unable to answer the complex essay question." },
      { key: "D", text: "While physical cash offers complete privacy, digital transactions provide unmatched convenience and speed." }
    ];
    q25.correctAnswer = ["B", "D"];
  }

  // Propagate Text 2 to Q26 - Q30
  [26, 27, 28, 29, 30].forEach(id => {
    const q = questions.find(item => item.id === id);
    if (q) {
      q.stimulusTitle = "Text 2: Literary Review — Pramoedya Ananta Toer's This Earth of Mankind";
      q.stimulusBody = TEXT2_BUMI_MANUSIA;
    }
  });

  // Serialize back
  const fnDecl = `function ${qFnName}() {\n  return ` + JSON.stringify(questions, null, 2) + `;\n}`;
  const qFnRegex = new RegExp(`function ${qFnName}\\(\\)\\s*\\{[\\s\\S]*?^}`, 'm');
  content = content.replace(qFnRegex, fnDecl);
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file} successfully.`);
});
