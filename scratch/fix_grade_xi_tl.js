const fs = require('fs');

['kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  const vm = require('vm');
  const sandbox = { window: { addEventListener: () => {} }, document: { addEventListener: () => {}, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [] }, localStorage: { getItem: () => null, setItem: () => {} }, console: console, speechSynthesis: { getVoices: () => [] } };
  sandbox.window.window = sandbox.window;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(content, ctx);
  const questions = ctx.getGrade11TLAsasQuestions ? ctx.getGrade11TLAsasQuestions() : ctx.getGrade11TLAstsQuestions();
  const qFnName = ctx.getGrade11TLAsasQuestions ? "getGrade11TLAsasQuestions" : "getGrade11TLAstsQuestions";

  // Get Text 1 from Q11 and Text 2 from Q26
  const q11 = questions.find(item => item.id === 11);
  const TEXT1_RAWA = q11.stimulusBody;
  const q26 = questions.find(item => item.id === 26);
  const TEXT2_AI = q26.stimulusBody;

  // Update Q11 to Q15 with full Text 1
  [11, 12, 13, 14, 15].forEach(id => {
    const q = questions.find(item => item.id === id);
    if (q) {
      q.stimulusTitle = "Text 1: The Legend of Rawa Pening";
      q.stimulusBody = TEXT1_RAWA;
    }
  });

  // Update Q16
  const q16 = questions.find(item => item.id === 16);
  if (q16) {
    q16.title = "Complex Multiple Choice: Narrative Plot & Character Actions (The Legend of Rawa Pening)";
    q16.stimulusTitle = "Text 1: The Legend of Rawa Pening";
    q16.stimulusBody = TEXT1_RAWA;
    q16.prompt = "Based on Text 1, determine whether each statement regarding the narrative plot is **TRUE** or **FALSE**:";
    q16.matrixStatements = [
      { statement: "Baru Klinthing was humiliated and driven away by the villagers of Pathok because of his ragged appearance and bodily wounds.", isCorrect: true },
      { statement: "Mbok Rondo refused to offer food or shelter to the starving boy when he knocked on her door.", isCorrect: false },
      { statement: "None of the arrogant villagers was capable of pulling out the small wooden stick planted firmly in the ground.", isCorrect: true },
      { statement: "The entire village was saved from the flood because the village chief apologized immediately.", isCorrect: false }
    ];
  }

  // Update Q17
  const q17 = questions.find(item => item.id === 17);
  if (q17) {
    q17.title = "Complex Multiple Choice: Figurative Language & Literary Elements";
    q17.stimulusTitle = "Text 1: The Legend of Rawa Pening";
    q17.stimulusBody = TEXT1_RAWA;
    q17.prompt = "Analyze the literary devices and character archetypes in the narrative text (TRUE/FALSE):";
    q17.matrixStatements = [
      { statement: "The phrase 'water gushed forth from the hole like a powerful fountain' employs a Simile to describe the sudden torrent.", isCorrect: true },
      { statement: "Mbok Rondo's character exemplifies the literary archetype of the compassionate helper who receives salvation through kindness.", isCorrect: true },
      { statement: "The sentence 'The villagers were enjoying a grand feast' employs the Simple Future Tense.", isCorrect: false },
      { statement: "The moral of the narrative demonstrates that arrogance and selfishness ultimately bring destruction.", isCorrect: true }
    ];
  }

  // Update Q18
  const q18 = questions.find(item => item.id === 18);
  if (q18) {
    q18.title = "Complex Multiple Choice: Subjunctive Mood & Inverted Conditionals";
    q18.stimulusTitle = "Grammar Focus: Subjunctive Mood and Conditional Inversion in Advanced English";
    q18.stimulusBody = "Evaluate the grammatical accuracy of each sentence structure below:";
    q18.prompt = "Determine whether each grammatical formulation below is **TRUE** (grammatically correct) or **FALSE** (incorrect):";
    q18.matrixStatements = [
      { statement: "'The wise village elder recommended that the celebration proceed without delay' correctly uses the present subjunctive base verb 'proceed'.", isCorrect: true },
      { statement: "'It is essential that every student understands how to evaluate folklore allegories' uses standard subjunctive form.", isCorrect: false },
      { statement: "'Had Baru Klinthing revealed his divine dragon form earlier, the villagers might have reacted with terror' demonstrates standard inverted past conditional.", isCorrect: true },
      { statement: "'If Mbok Rondo did not provide the mortar boat, she would have drowned in the flood' is grammatically flawed.", isCorrect: true }
    ];
  }

  // Update Q19
  const q19 = questions.find(item => item.id === 19);
  if (q19) {
    q19.title = "Complex Multiple Choice: Critical Argument Evaluation (AI in High School Writing)";
    q19.stimulusTitle = "Text 2: Using Artificial Intelligence Responsibly in High School Writing";
    q19.stimulusBody = TEXT2_AI;
    q19.prompt = "Based on Text 2, determine whether each evaluative argument is **TRUE** or **FALSE**:";
    q19.matrixStatements = [
      { statement: "The author argues that educational institutions should enforce an absolute and total prohibition on all artificial intelligence technologies.", isCorrect: false },
      { statement: "Writing analytical essays independently allows secondary students to cultivate critical thinking and authentic voice.", isCorrect: true },
      { statement: "Automated AI algorithms can experience hallucination by generating fabricated citations and misleading factual claims.", isCorrect: true },
      { statement: "Submitting an essay entirely composed by an automated AI chatbot without review is considered a standard academic best practice.", isCorrect: false }
    ];
  }

  // Update Q20
  const q20 = questions.find(item => item.id === 20);
  if (q20) {
    q20.title = "Complex Multiple Choice: Cleft Sentences & Focus Constructions";
    q20.stimulusTitle = "Grammar Focus: Cleft Sentences (It-Cleft and Wh-Cleft) for Emphatic Discourse";
    q20.stimulusBody = "Analyze the syntax and agreement in the following emphatic cleft structures:";
    q20.prompt = "Determine whether each advanced focus construction below is **TRUE** (grammatically sound) or **FALSE** (grammatically flawed):";
    q20.matrixStatements = [
      { statement: "'It was through her compassionate generosity that Mbok Rondo survived the great flood' is a grammatically accurate it-cleft sentence.", isCorrect: true },
      { statement: "'What students need to cultivate is intellectual autonomy rather than passive reliance on algorithms' correctly uses a wh-cleft structure.", isCorrect: true },
      { statement: "'It is artificial intelligence which compose all original scientific research in universities' is grammatically accurate.", isCorrect: false },
      { statement: "'What astonished the arrogant villagers were the sudden torrent of water gushing from the ground' correctly agrees in subject-verb number.", isCorrect: false }
    ];
  }

  // Update Q21
  const q21 = questions.find(item => item.id === 21);
  if (q21) {
    q21.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q21.stimulusTitle = "Text 1: The Legend of Rawa Pening";
    q21.stimulusBody = TEXT1_RAWA;
    q21.prompt = "Which **TWO (2)** moral themes are prominently conveyed through the narrative of Baru Klinthing and Rawa Pening?";
    q21.options = [
      { key: "A", text: "Treating fellow human beings with sincerity and humility, regardless of outward appearance or socioeconomic standing." },
      { key: "B", text: "Demanding monetary tribute before assisting travelers who are hungry or in distress." },
      { key: "C", text: "Recognizing that unbridled arrogance and cruelty toward the vulnerable lead to collective ruin." },
      { key: "D", text: "Relying on physical weaponry as the only legitimate basis for community justice." }
    ];
    q21.correctAnswer = ["A", "C"];
  }

  // Update Q22
  const q22 = questions.find(item => item.id === 22);
  if (q22) {
    q22.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q22.stimulusTitle = "Text 2: Using Artificial Intelligence Responsibly in High School Writing";
    q22.stimulusBody = TEXT2_AI;
    q22.prompt = "Which **TWO (2)** negative outcomes does the author associate with excessive student dependency on generative AI tools?";
    q22.options = [
      { key: "A", text: "The atrophy of independent analytical reasoning and diminished stamina for wrestling with complex ideas." },
      { key: "B", text: "A permanent surge in internet subscription fees for all public school students." },
      { key: "C", text: "The erosion of personal academic integrity and the unwitting dissemination of unverified AI hallucinations." },
      { key: "D", text: "The immediate hardware obsolescence of all school computer laboratories." }
    ];
    q22.correctAnswer = ["A", "C"];
  }

  // Update Q23
  const q23 = questions.find(item => item.id === 23);
  if (q23) {
    q23.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q23.stimulusTitle = "Grammar Focus: Negative Inversion for Dramatic Emphasis";
    q23.stimulusBody = "Negative adverbials placed at the beginning of a clause require inverted auxiliary-subject word order:";
    q23.prompt = "Which **TWO (2)** sentences correctly demonstrate negative inversion to emphasize dramatic narrative moments?";
    q23.options = [
      { key: "A", text: "Scarcely had the boy pulled out the wooden stick when torrents of water gushed across the village square." },
      { key: "B", text: "Never the villagers realized that pride would cause their own destruction." },
      { key: "C", text: "Under no circumstances should students submit automated AI-generated drafts as their own original work." },
      { key: "D", text: "Seldom secondary schools provides instruction on mythological folklore analysis." }
    ];
    q23.correctAnswer = ["A", "C"];
  }

  // Update Q24
  const q24 = questions.find(item => item.id === 24);
  if (q24) {
    q24.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q24.stimulusTitle = "Academic Ethics: Responsible AI Adoption Strategies in High Schools";
    q24.stimulusBody = TEXT2_AI;
    q24.prompt = "Which **TWO (2)** actions illustrate ethical and intellectually productive uses of AI by high school students?";
    q24.options = [
      { key: "A", text: "Using AI to brainstorm diverse analytical angles or clarify intricate scientific terminology while drafting one's own arguments." },
      { key: "B", text: "Copying and pasting an entire AI response five minutes before the assignment deadline to obtain full marks." },
      { key: "C", text: "Critically cross-referencing AI-generated summaries against peer-reviewed academic literature and primary historical records." },
      { key: "D", text: "Allowing an AI model to fabricate fictitious bibliographic sources for a scientific research paper." }
    ];
    q24.correctAnswer = ["A", "C"];
  }

  // Update Q25
  const q25 = questions.find(item => item.id === 25);
  if (q25) {
    q25.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q25.stimulusTitle = "Grammar Focus: Complex Prepositional Phrases Indicating Concession";
    q25.stimulusBody = "Prepositional phrases of concession introduce unexpected contrasting facts:";
    q25.prompt = "Which **TWO (2)** sentences correctly employ complex prepositional phrases indicating concession or contrast?";
    q25.options = [
      { key: "A", text: "Notwithstanding his severe physical wounds, Baru Klinthing preserved an unwavering spirit of dignity." },
      { key: "B", text: "In spite of the boy was hungry, but no villager offered him a grain of rice." },
      { key: "C", text: "Despite its immense computational capabilities, generative AI lacks authentic emotional intuition and ethical consciousness." },
      { key: "D", text: "Regardless of he studied until dawn, because he could not remember the mythological chronology." }
    ];
    q25.correctAnswer = ["A", "C"];
  }

  // Update Q26 to Q30 with full Text 2
  [26, 27, 28, 29, 30].forEach(id => {
    const q = questions.find(item => item.id === id);
    if (q) {
      q.stimulusTitle = "Text 2: Using Artificial Intelligence Responsibly in High School Writing";
      q.stimulusBody = TEXT2_AI;
    }
  });

  // Serialize back
  const fnDecl = `function ${qFnName}() {\n  return ` + JSON.stringify(questions, null, 2) + `;\n}`;
  const qFnRegex = new RegExp(`function ${qFnName}\\(\\)\\s*\\{[\\s\\S]*?^}`, 'm');
  content = content.replace(qFnRegex, fnDecl);
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file} successfully with full texts and English tables.`);
});
