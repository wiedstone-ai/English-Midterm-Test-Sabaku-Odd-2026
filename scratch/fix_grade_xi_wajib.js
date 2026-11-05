const fs = require('fs');

const TEXT2_DIGITAL_LITERACY = `In the contemporary era of hyper-connected social networks, secondary students are continuously inundated with immense streams of digital information. While access to the internet offers unprecedented learning opportunities, it simultaneously exposes youths to pervasive misinformation, deceptive clickbait, and algorithmic echo chambers. Therefore, cultivating critical digital literacy is no longer merely an optional scholastic skill; it has become an indispensable life competence for modern teenagers.<br><br>First and foremost, critical digital literacy empowers adolescents to distinguish between factual evidence and fabricated falsehoods. Sensationalized headlines are deliberately engineered to trigger volatile emotional responses, enticing users to share misleading posts without prior verification. Digitally literate students possess the cognitive discipline to evaluate the authority of sources, cross-check claims against verified databases, and recognize commercial or political biases.<br><br>Furthermore, possessing mature digital awareness is paramount for safeguarding one's permanent digital footprint. Every comment, shared image, and forum reaction leaves persistent electronic traces that cannot be completely erased by hitting 'delete'. Admissions committees for prestigious universities and scholarship foundations now routinely scrutinize applicants' public profiles to evaluate personal integrity and constructive communication habits.<br><br>Finally, critical digital awareness shields adolescent mental wellbeing from algorithmic manipulation. Social media algorithms intentionally prioritize outrage-inducing content and idealized portrayals of peer lifestyle, which can foster profound social anxiety, body dissatisfaction, and depression among vulnerable youths. By understanding how algorithmic engagement metrics operate, students can consciously regulate their screen exposure and consume digital media intentionally rather than passively.<br><br>In conclusion, critical digital literacy is not simply about operating software applications; it is about cultivating intellectual autonomy, safeguarding ethical reputation, and protecting psychological health in an automated society. Secondary schools must systematically embed comprehensive digital literacy frameworks across all academic curricula.`;

['kelas-xi-asas.js', 'kelas-xi-asts.js'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  const vm = require('vm');
  const sandbox = { window: { addEventListener: () => {} }, document: { addEventListener: () => {}, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [] }, localStorage: { getItem: () => null, setItem: () => {} }, console: console, speechSynthesis: { getVoices: () => [] } };
  sandbox.window.window = sandbox.window;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(content, ctx);
  const questions = ctx.getGrade11AsasQuestions ? ctx.getGrade11AsasQuestions() : ctx.getGrade11AstsQuestions();
  const qFnName = ctx.getGrade11AsasQuestions ? "getGrade11AsasQuestions" : "getGrade11AstsQuestions";

  // Get Text 1 from Q11
  const q11 = questions.find(item => item.id === 11);
  const TEXT1_RORO = q11.stimulusBody;

  // Update Q11 to Q15 with full Text 1
  [11, 12, 13, 14, 15].forEach(id => {
    const q = questions.find(item => item.id === id);
    if (q) {
      q.stimulusTitle = "Text 1: The Legend of Roro Jonggrang and the Thousand Temples";
      q.stimulusBody = TEXT1_RORO;
    }
  });

  // Update Q16
  const q16 = questions.find(item => item.id === 16);
  if (q16) {
    q16.title = "Complex Multiple Choice: Fact Evaluation of Critical Digital Literacy";
    q16.stimulusTitle = "Text 2: Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers";
    q16.stimulusBody = TEXT2_DIGITAL_LITERACY;
    q16.prompt = "Based on the text on Critical Digital Literacy, determine whether each statement is **TRUE** or **FALSE**:";
    q16.matrixStatements = [
      { statement: "Critical digital literacy relates solely to the technical ability to operate computers and smartphone devices.", isCorrect: false },
      { statement: "Sensationalized headlines are intentionally engineered to trigger emotional reactions and encourage unverified sharing.", isCorrect: true },
      { statement: "University admissions committees and scholarship foundations routinely scrutinize applicants' digital footprints.", isCorrect: true },
      { statement: "Understanding algorithmic engagement metrics helps teenagers regulate their screen exposure and consume media intentionally.", isCorrect: true }
    ];
  }

  // Update Q17
  const q17 = questions.find(item => item.id === 17);
  if (q17) {
    q17.title = "Complex Multiple Choice: Analytical Exposition Language Features";
    q17.stimulusTitle = "Genre Focus: Linguistic Features of Analytical Exposition Texts";
    q17.stimulusBody = "Analyze the grammatical accuracy and language features of analytical exposition texts based on Text 2:";
    q17.prompt = "Determine whether each grammatical statement below is **TRUE** or **FALSE** based on Text 2:";
    q17.matrixStatements = [
      { statement: "The conjunction 'Therefore' in paragraph 1 introduces the writer's central thesis statement.", isCorrect: true },
      { statement: "The phrase 'algorithmic echo chambers' uses noun adjuncts to specify a digital communication phenomenon.", isCorrect: true },
      { statement: "The sentence 'Students possess the cognitive discipline to evaluate sources' uses the Past Continuous Tense.", isCorrect: false },
      { statement: "In the sentence 'Admissions committees routinely scrutinize applicants', 'scrutinize' means to examine very closely and critically.", isCorrect: true }
    ];
  }

  // Update Q18
  const q18 = questions.find(item => item.id === 18);
  if (q18) {
    q18.title = "Complex Multiple Choice: Modals & Passive Voice Grammar";
    q18.stimulusTitle = "Grammar Focus: Passive Voice and Modal Auxiliaries in Academic Writing";
    q18.stimulusBody = "Evaluate the grammatical accuracy of the following modal and passive constructions:";
    q18.prompt = "Determine whether each sentence formulation below is **TRUE** (grammatically sound) or **FALSE** (grammatically flawed):";
    q18.matrixStatements = [
      { statement: "'Misleading information can be easily spread across social media networks' demonstrates accurate modal passive voice.", isCorrect: true },
      { statement: "'Sensational headlines was engineered by algorithms yesterday' correctly agrees in subject-verb number.", isCorrect: false },
      { statement: "'Digital footprints cannot be completely erased simply by hitting delete' is grammatically correct.", isCorrect: true },
      { statement: "'Students should verified every online claim before believing it' correctly uses the modal verb 'should'.", isCorrect: false }
    ];
  }

  // Update Q19
  const q19 = questions.find(item => item.id === 19);
  if (q19) {
    q19.title = "Complex Multiple Choice: Adolescent Lifestyle & Cognitive Focus";
    q19.stimulusTitle = "Health Focus: The Science of Adolescent Sleep and Brain Function";
    q19.stimulusBody = "Medical and educational research highlights the direct correlation between adolescent lifestyle habits, sleep quality, and academic performance:";
    q19.prompt = "Determine whether each statement regarding adolescent health habits and focus is **TRUE** or **FALSE**:";
    q19.matrixStatements = [
      { statement: "Regular physical exercise increases blood circulation and oxygen supply to the brain, enhancing cognitive focus.", isCorrect: true },
      { statement: "Sleeping fewer than five hours nightly consistently boosts academic performance and long-term memory retention.", isCorrect: false },
      { statement: "Excessive late-night screen time disrupts natural circadian rhythms due to blue light emissions from devices.", isCorrect: true },
      { statement: "A balanced nutritious diet rich in whole foods supports sustained mental energy during rigorous school examination weeks.", isCorrect: true }
    ];
  }

  // Update Q20
  const q20 = questions.find(item => item.id === 20);
  if (q20) {
    q20.title = "Complex Multiple Choice: Cause and Effect Conjunctions";
    q20.stimulusTitle = "Grammar Focus: Cause and Effect Connectors (Because, Because of, Due to, As a consequence)";
    q20.stimulusBody = "Analyze the syntax and prepositional rules governing causal connectors:";
    q20.prompt = "Determine whether each causal connector sentence below is **TRUE** (grammatically correct) or **FALSE** (grammatically flawed):";
    q20.matrixStatements = [
      { statement: "'Due to social media algorithms prioritize sensational posts, many users share hoaxes' correctly uses 'due to'.", isCorrect: false },
      { statement: "'Because of persistent blue light emissions, teenagers often experience delayed sleep onset' is grammatically accurate.", isCorrect: true },
      { statement: "'As a consequence of rigorous daily training, the athlete secured a gold medal for her school' correctly expresses result.", isCorrect: true },
      { statement: "'He failed the exam owing to he did not study the course materials' is standard formal English.", isCorrect: false }
    ];
  }

  // Update Q21
  const q21 = questions.find(item => item.id === 21);
  if (q21) {
    q21.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q21.stimulusTitle = "Text 2: Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers";
    q21.stimulusBody = TEXT2_DIGITAL_LITERACY;
    q21.prompt = "Which **TWO (2)** statements correctly represent the core benefits of critical digital literacy according to the text?";
    q21.options = [
      { key: "A", text: "It trains adolescents to filter online information and protects them from deceptive clickbait and algorithmic manipulation." },
      { key: "B", text: "It guarantees that software developers will automatically delete negative public comments after twenty-four hours." },
      { key: "C", text: "It fosters intellectual autonomy and helps students maintain a constructive, responsible digital footprint." },
      { key: "D", text: "It allows students to browse social media during all school lectures without paying attention to teachers." }
    ];
    q21.correctAnswer = ["A", "C"];
  }

  // Update Q22
  const q22 = questions.find(item => item.id === 22);
  if (q22) {
    q22.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q22.stimulusTitle = "Literary Focus: Moral Reflection in Javanese Narrative Folklore (Roro Jonggrang)";
    q22.stimulusBody = TEXT1_RORO;
    q22.prompt = "Which **TWO (2)** moral values or character insights can be deduced from the legend of Roro Jonggrang?";
    q22.options = [
      { key: "A", text: "Arrogance and deceitful shortcuts ultimately lead to tragic consequences and bitter regret." },
      { key: "B", text: "Physical power and magical commands are the only admirable virtues in human relationships." },
      { key: "C", text: "Honesty, mutual respect, and humility are foundational virtues in traditional cultural heritage." },
      { key: "D", text: "Breaking solemn promises is considered an honorable path to victory in ancient folklore." }
    ];
    q22.correctAnswer = ["A", "C"];
  }

  // Update Q23
  const q23 = questions.find(item => item.id === 23);
  if (q23) {
    q23.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q23.stimulusTitle = "Grammar Focus: Connectors of Concession and Contrast (Although, Despite, In spite of)";
    q23.stimulusBody = "Review the proper grammatical usage of subordinating conjunctions and prepositional phrases that indicate concession:";
    q23.prompt = "Which **TWO (2)** sentences correctly demonstrate concession connectors to express contrast between ideas?";
    q23.options = [
      { key: "A", text: "Although social media offers vast educational resources, it also presents significant risks of misinformation." },
      { key: "B", text: "Despite the news looked very genuine, but Farhan did not forward it to the class group." },
      { key: "C", text: "In spite of facing severe academic pressure, she maintained disciplined study and sleep habits." },
      { key: "D", text: "However she studied all night, because she felt exhausted during the morning exam." }
    ];
    q23.correctAnswer = ["A", "C"];
  }

  // Update Q24
  const q24 = questions.find(item => item.id === 24);
  if (q24) {
    q24.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q24.stimulusTitle = "Practical Study Habits: Optimizing Adolescent Cognitive Health";
    q24.stimulusBody = "Health and educational specialists recommend evidence-based study and lifestyle habits for optimal high school performance:";
    q24.prompt = "Which **TWO (2)** habits reflect responsible time management and optimal cognitive health for high school students?";
    q24.options = [
      { key: "A", text: "Maintaining a consistent nightly sleep schedule of 7 to 8 hours to consolidate newly learned information." },
      { key: "B", text: "Staying awake until 3 AM every night playing multiplayer online games before examination morning." },
      { key: "C", text: "Scheduling twenty minutes of brisk morning physical exercise and staying well-hydrated throughout the day." },
      { key: "D", text: "Consuming excessive sugary energy drinks while completely skipping nutritious meals during exam week." }
    ];
    q24.correctAnswer = ["A", "C"];
  }

  // Update Q25
  const q25 = questions.find(item => item.id === 25);
  if (q25) {
    q25.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q25.stimulusTitle = "Academic Lexis: Oxford 3000 Vocabulary for 'Verify' and 'Evaluate'";
    q25.stimulusBody = "Precision in understanding core academic English verbs is critical for analytical literacy:";
    q25.prompt = "Which **TWO (2)** statements correctly define academic vocabulary forms from the text?";
    q25.options = [
      { key: "A", text: "'Verify' (verb) means to prove or confirm the truth, accuracy, or reality of a statement or report." },
      { key: "B", text: "'Verifiable' (adjective) describes a claim that cannot be proven by any factual evidence." },
      { key: "C", text: "'Evaluation' (noun) denotes the systematic assessment of the value, authority, or credibility of an information source." },
      { key: "D", text: "'Manipulate' (verb) means to tell the truth openly and sincerely to all audiences." }
    ];
    q25.correctAnswer = ["A", "C"];
  }

  // Update Q26 to Q30 with full Text 2
  [26, 27, 28, 29, 30].forEach(id => {
    const q = questions.find(item => item.id === id);
    if (q) {
      q.stimulusTitle = "Text 2: Why Critical Digital Literacy Is an Essential Competence for Modern Teenagers";
      q.stimulusBody = TEXT2_DIGITAL_LITERACY;
    }
  });

  // Serialize back
  const fnDecl = `function ${qFnName}() {\n  return ` + JSON.stringify(questions, null, 2) + `;\n}`;
  const qFnRegex = new RegExp(`function ${qFnName}\\(\\)\\s*\\{[\\s\\S]*?^}`, 'm');
  content = content.replace(qFnRegex, fnDecl);
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file} successfully with full texts and English tables.`);
});
