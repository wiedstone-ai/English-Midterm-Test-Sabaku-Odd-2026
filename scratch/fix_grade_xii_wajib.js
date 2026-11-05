const fs = require('fs');

const LASKAR_PELANGI_REVIEW = `<div style="font-size:0.95rem; line-height:1.6; color:#1e293b;">
<p style="margin-bottom:8px;"><strong>Title:</strong> The Rainbow Troops (<em>Laskar Pelangi</em>)<br><strong>Author:</strong> Andrea Hirata | <strong>Setting:</strong> Belitung Island, Indonesia</p>
<p style="margin-bottom:8px;">Andrea Hirata's celebrated novel, <em>The Rainbow Troops</em>, chronicles the heroic educational struggle of ten impoverished students attending SD Muhammadiyah Gantong on the remote island of Belitung. Facing severe material deprivation, dilapidated school infrastructure, and the constant threat of closure by the local education department, these resilient children—affectionately dubbed the "Rainbow Troops" by their beloved teacher—demonstrate an extraordinary passion for learning.</p>
<p style="margin-bottom:8px;">Central to their success is the selfless dedication of their devoted educators, Bu Muslimah and Pak Harfan, who refuse to let poverty extinguish their students' dreams. Rather than relying on modern facilities or wealthy corporate sponsorship, the school thrives on unyielding moral integrity, mutual camaraderie, and deep community solidarity. Andrea Hirata artfully weaves humor and poignant socio-economic critiques, highlighting the stark contrast between prosperous tin-mining conglomerates and the marginalized local population.</p>
<p style="margin-bottom:0;">In conclusion, <em>The Rainbow Troops</em> is far more than a heartwarming coming-of-age memoir; it is a profound testament to the transformative power of human empathy and universal education. The novel delivers a timeless reminder that authentic scholastic achievement stems not from opulent buildings, but from an indomitable spirit, passionate teaching, and unwavering perseverance in the face of adversity.</p>
</div>`;

['kelas-xii-asas.js', 'kelas-xii-asts.js'].forEach(file => {
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

  const questions = ctx.getGrade12AsasQuestions ? ctx.getGrade12AsasQuestions() : ctx.getGrade12AstsQuestions();
  const qFnName = ctx.getGrade12AsasQuestions ? "getGrade12AsasQuestions" : "getGrade12AstsQuestions";

  const q11 = questions.find(item => item.id === 11);
  const TEXT1_AI = q11.stimulusBody;
  const q26 = questions.find(item => item.id === 26);
  const TEXT2_AGRITECH = q26.stimulusBody;

  // Ensure Q11-Q15 have full Text 1
  [11, 12, 13, 14, 15].forEach(id => {
    const q = questions.find(item => item.id === id);
    if (q) {
      q.stimulusTitle = "Text 1: Generative Artificial Intelligence in High School Education";
      q.stimulusBody = TEXT1_AI;
    }
  });

  // Update Q16
  const q16 = questions.find(item => item.id === 16);
  if (q16) {
    q16.title = "Complex Multiple Choice: Critical Argument Evaluation (Generative AI in Education)";
    q16.stimulusTitle = "Text 1: Generative Artificial Intelligence in High School Education";
    q16.stimulusBody = TEXT1_AI;
    q16.prompt = "Based on Text 1, determine whether each statement regarding the ethical adoption of AI is **TRUE** or **FALSE**:";
    q16.matrixStatements = [
      { statement: "Artificial Intelligence (AI) can assist students in brainstorming ideas and structuring essay outlines efficiently.", isCorrect: true },
      { statement: "The author advises educational institutions to implement an absolute ban on all student AI usage.", isCorrect: false },
      { statement: "Passive dependence on automated text generation without critical verification can atrophy students' analytical reasoning and cognitive stamina.", isCorrect: true },
      { statement: "All analytical responses and statistical data produced by generative AI models are guaranteed to be completely unbiased and entirely factual.", isCorrect: false }
    ];
  }

  // Update Q17
  const q17 = questions.find(item => item.id === 17);
  if (q17) {
    q17.title = "Complex Multiple Choice: Past Unreal Conditionals (Third Conditional)";
    q17.stimulusTitle = "Grammar Focus: Unreal Past Conditionals (Third Conditional)";
    q17.stimulusBody = `<p style="margin-bottom:0;">Third conditional pattern: <code>If + had + V3, Subject + would / could / might + have + V3</code>.</p>`;
    q17.prompt = "Determine whether each conditional sentence below is grammatically **TRUE** (correct) or **FALSE** (incorrect):";
    q17.matrixStatements = [
      { statement: "If the school had organized the digital literacy seminar earlier, students would have understood the AI guidelines better.", isCorrect: true },
      { statement: "If they studied harder last week, they would pass the national certification test today.", isCorrect: false },
      { statement: "If the solar panels had been maintained regularly, the sudden power failure during yesterday's storm would have been avoided.", isCorrect: true },
      { statement: "If she had arrived on time yesterday, she would meet the guest speaker before the lecture began.", isCorrect: false }
    ];
  }

  // Update Q18
  const q18 = questions.find(item => item.id === 18);
  if (q18) {
    q18.title = "Complex Multiple Choice: Contrast & Concession Discourse Markers";
    q18.stimulusTitle = "Grammar Focus: Transitions of Contrast and Concession";
    q18.stimulusBody = `<p style="margin-bottom:0;">Concession markers (<em>Although, Even though, Despite, In spite of</em>) and contrast transitions (<em>However, Nevertheless, In contrast</em>) connect conflicting propositions.</p>`;
    q18.prompt = "Determine whether each transitional sentence below is grammatically **TRUE** (correct) or **FALSE** (incorrect):";
    q18.matrixStatements = [
      { statement: "Despite facing severe economic limitations, the students demonstrated remarkable academic achievement.", isCorrect: true },
      { statement: "Although it was raining heavily, but the sports competition continued until sunset.", isCorrect: false },
      { statement: "Geothermal power plants produce continuous energy; however, their initial construction requires substantial capital.", isCorrect: true },
      { statement: "In spite of she was exhausted after practice, Maya finished writing her comprehensive book review.", isCorrect: false }
    ];
  }

  // Update Q19
  const q19 = questions.find(item => item.id === 19);
  if (q19) {
    q19.title = "Complex Multiple Choice: Review Text Analysis (The Rainbow Troops / Laskar Pelangi)";
    q19.stimulusTitle = "Review Text: The Inspiring Journey of Laskar Pelangi";
    q19.stimulusBody = LASKAR_PELANGI_REVIEW;
    q19.prompt = "Based on the review text above, evaluate whether each statement is **TRUE** or **FALSE**:";
    q19.matrixStatements = [
      { statement: "The novel Laskar Pelangi chronicles the resilient struggle of ten village pupils in Belitung to prevent their humble school from being closed.", isCorrect: true },
      { statement: "The reviewer argues that educational excellence is exclusively determined by luxurious facilities and modern campus architecture.", isCorrect: false },
      { statement: "The inspirational leadership and dedication of Bu Muslimah and Pak Harfan motivated the students despite severe resource constraints.", isCorrect: true },
      { statement: "The review concludes that Laskar Pelangi lacks literary value and recommends that public libraries remove it from their collections.", isCorrect: false }
    ];
  }

  // Update Q20
  const q20 = questions.find(item => item.id === 20);
  if (q20) {
    q20.title = "Complex Multiple Choice: Modals of Past Deduction";
    q20.stimulusTitle = "Grammar Focus: Modal Auxiliaries for Past Logical Deductions";
    q20.stimulusBody = `<p style="margin-bottom:0;">Past deduction modals: <code>must have + V3</code> (certainty), <code>cannot / could not have + V3</code> (impossibility), <code>might / could have + V3</code> (possibility).</p>`;
    q20.prompt = "Determine whether each past deduction sentence below is grammatically **TRUE** (correct) or **FALSE** (incorrect):";
    q20.matrixStatements = [
      { statement: "The laboratory door was locked from the inside, so the missing tablet computer could not have been taken by an outsider.", isCorrect: true },
      { statement: "He must left his student identity card at home because it is not in his backpack.", isCorrect: false },
      { statement: "Given her outstanding debate performance yesterday, Siti might have practiced with the coach all weekend.", isCorrect: true },
      { statement: "They should have arrived two hours ago, but their bus was held up in an unexpected expressway traffic jam.", isCorrect: true }
    ];
  }

  // Update Q21
  const q21 = questions.find(item => item.id === 21);
  if (q21) {
    q21.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q21.stimulusTitle = "Text 1: Generative Artificial Intelligence in High School Education";
    q21.stimulusBody = TEXT1_AI;
    q21.prompt = "Which **TWO (2)** arguments does the author support regarding the ethical and responsible use of AI by high school students?";
    q21.options = [
      { key: "A", text: "AI should serve as an interactive research assistant to stimulate critical inquiry and idea generation rather than replace independent authorship." },
      { key: "B", text: "Secondary schools should mandate that all final examination essays be written entirely by automated conversational bots." },
      { key: "C", text: "Students must uphold intellectual honesty by rigorously validating machine output and transparently citing algorithmic assistance." },
      { key: "D", text: "Students no longer need to read scholarly books or peer-reviewed literature since generative models synthesize information instantaneously." }
    ];
    q21.correctAnswer = ["A", "C"];
  }

  // Update Q22
  const q22 = questions.find(item => item.id === 22);
  if (q22) {
    q22.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q22.stimulusTitle = "Grammar Focus: Grammatically Accurate Third Conditionals";
    q22.stimulusBody = `<p style="margin-bottom:0;">Select sentences that correctly adhere to the unreal past conditional framework.</p>`;
    q22.prompt = "Which **TWO (2)** sentences correctly employ Third Conditional structures to express hypothetical past situations?";
    q22.options = [
      { key: "A", text: "If the technical team had installed the backup generator yesterday, the power outage would not have disrupted the computer laboratory." },
      { key: "B", text: "If I have seen the competition announcement yesterday morning, I would submit the application promptly." },
      { key: "C", text: "Had the school provided sufficient scholarship funds, more rural students could have continued their higher education." },
      { key: "D", text: "If she took the earlier morning bus yesterday, she will arrive before the keynote speaker." }
    ];
    q22.correctAnswer = ["A", "C"];
  }

  // Update Q23
  const q23 = questions.find(item => item.id === 23);
  if (q23) {
    q23.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q23.stimulusTitle = "Grammar Focus: Contrast Transitions in Academic Writing";
    q23.stimulusBody = `<p style="margin-bottom:0;">Select sentences that correctly utilize conjunctive adverbs and subordinating conjunctions of contrast.</p>`;
    q23.prompt = "Which **TWO (2)** sentences correctly demonstrate discourse markers of contrast or concession?";
    q23.options = [
      { key: "A", text: "Renewable energy adoption requires high initial capital; nevertheless, long-term environmental benefits far outweigh the costs." },
      { key: "B", text: "Although the historical novel was written decades ago, yet modern readers still find its characters deeply moving." },
      { key: "C", text: "Even though solar irradiance fluctuates with cloud cover, modern battery storage systems ensure continuous electrical stability." },
      { key: "D", text: "Despite of the heavy rainfall yesterday, the youth volunteers planted two hundred mangrove seedlings along the coast." }
    ];
    q23.correctAnswer = ["A", "C"];
  }

  // Update Q24
  const q24 = questions.find(item => item.id === 24);
  if (q24) {
    q24.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q24.stimulusTitle = "Review Text: The Inspiring Journey of Laskar Pelangi";
    q24.stimulusBody = LASKAR_PELANGI_REVIEW;
    q24.prompt = "Which **TWO (2)** core virtues and societal lessons does the reviewer emphasize regarding Andrea Hirata's novel *Laskar Pelangi*?";
    q24.options = [
      { key: "A", text: "The transformative power of inclusive education and genuine human empathy in surmounting severe socio-economic deprivation." },
      { key: "B", text: "The imperative of accumulating vast personal material wealth to secure the highest prestige in contemporary society." },
      { key: "C", text: "The noble values of exemplary mentorship and selfless teaching dedication that foster unyielding confidence among pupils." },
      { key: "D", text: "The unquestioned superiority of industrial tin mining corporations over traditional rural indigenous communities." }
    ];
    q24.correctAnswer = ["A", "C"];
  }

  // Update Q25
  const q25 = questions.find(item => item.id === 25);
  if (q25) {
    q25.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q25.stimulusTitle = "Grammar Focus: Indirect Speech / Reported Statements";
    q25.stimulusBody = `<p style="margin-bottom:0;">Select indirect speech sentences that correctly execute backshift rules.</p>`;
    q25.prompt = "Which **TWO (2)** sentences correctly report past statements adhering to standard English backshift rules?";
    q25.options = [
      { key: "A", text: "The English teacher explained that artificial intelligence was merely a tool to enhance human creativity." },
      { key: "B", text: "Maya told to me that she will travel to Belitung next month." },
      { key: "C", text: "Rizky stated that he had completed his comprehensive literature review the previous evening." },
      { key: "D", text: "Danang said that he is reading the historical novel two days ago." }
    ];
    q25.correctAnswer = ["A", "C"];
  }

  // Ensure Q26-Q30 have full Text 2
  [26, 27, 28, 29, 30].forEach(id => {
    const q = questions.find(item => item.id === id);
    if (q) {
      q.stimulusTitle = "Text 2: Agro-Technology Innovation for Sustainable Rice Farming";
      q.stimulusBody = TEXT2_AGRITECH;
    }
  });

  // Serialize back
  const fnDecl = `function ${qFnName}() {\n  return ` + JSON.stringify(questions, null, 2) + `;\n}`;
  const qFnRegex = new RegExp(`function ${qFnName}\\(\\)\\s*\\{[\\s\\S]*?^}`, 'm');
  content = content.replace(qFnRegex, fnDecl);
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file} successfully.`);
});
