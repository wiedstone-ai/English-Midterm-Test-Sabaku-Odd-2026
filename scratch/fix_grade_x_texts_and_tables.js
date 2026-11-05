const fs = require('fs');

const TEXT1_KARIMUNJAWA = `Karimunjawa is a pristine tropical archipelago situated in the Java Sea, approximately eighty kilometers northwest of Jepara, Central Java. Designated as a National Marine Park in 2001, the cluster comprises twenty-seven paradise islands, of which only five are inhabited.<br><br>The underwater realm of Karimunjawa is extraordinarily breathtaking. Vast expanses of thriving coral reefs, characterized by magnificent branching acropora and vibrant brain corals, shelter hundreds of pelagic fish species, including clownfish, blue damselfish, and gentle hawksbill sea turtles. The water visibility frequently exceeds twenty meters, allowing snorkelers and divers to gaze upon the aquatic kaleidoscope with crystalline clarity.<br><br>On land, Karimunjawa boasts expansive coastal stretches lined with powdery white sands and whispering casuarina trees. In the interior of the main island, dense mangrove forests and lush hilltops provide sanctuary for endemic fruit bats and the white-bellied sea eagle. Local inhabitants, who predominantly earn their living as traditional artisanal fishermen and eco-tourism guides, preserve a harmonious lifestyle deeply rooted in maritime conservation.`;

const TEXT2_GEOTHERMAL = `Geothermal energy is a clean, renewable energy resource that comes from natural heat stored deep inside the Earth. In Central Java, the volcanic highland of the Dieng Plateau (located across Banjarnegara and Wonosobo regencies) is one of Indonesia's most important locations for geothermal power plants (PLTP Dieng).<br><br>Electricity production from geothermal energy works in a simple, sustainable way. Deep wells are drilled into underground reservoirs of hot water and natural steam. This high-pressure steam rises through strong pipes to turn large turbine generators, which convert the steam's energy into clean electricity. Afterward, the condensed water is cooled and pumped back underground into the reservoir, keeping the system environmentally friendly and producing almost zero smoke or carbon emissions.<br><br>Unlike solar panels and wind turbines that depend on sunny or windy weather, geothermal power plants can generate electricity steadily twenty-four hours a day without stopping. Therefore, developing geothermal clean energy in Central Java is an <u>essential</u> milestone to supply reliable electricity while protecting the natural environment.`;

['kelas-x-asas.js', 'kelas-x-asts.js'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Parse questions in file to find and replace Q11-Q30
  const vm = require('vm');
  const sandbox = { window: { addEventListener: () => {} }, document: { addEventListener: () => {}, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [] }, localStorage: { getItem: () => null, setItem: () => {} }, console: console, speechSynthesis: { getVoices: () => [] } };
  sandbox.window.window = sandbox.window;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(content, ctx);
  const questions = ctx.getGrade10Questions();

  // Update Q11 to Q15 stimulusBody
  [11, 12, 13, 14, 15].forEach(id => {
    const q = questions.find(item => item.id === id);
    if (q) {
      q.stimulusTitle = "Text 1: The Splendor of Karimunjawa Archipelago";
      q.stimulusBody = TEXT1_KARIMUNJAWA;
    }
  });

  // Update Q16
  const q16 = questions.find(item => item.id === 16);
  if (q16) {
    q16.title = "Complex Multiple Choice: Fact Evaluation of Karimunjawa Archipelago";
    q16.stimulusTitle = "Text 1: The Splendor of Karimunjawa Archipelago";
    q16.stimulusBody = TEXT1_KARIMUNJAWA;
    q16.prompt = "Based on Text 1, determine whether each of the following statements is **TRUE** or **FALSE**:";
    q16.matrixStatements = [
      { statement: "All twenty-seven islands in the Karimunjawa archipelago are densely populated by local residents.", isCorrect: false },
      { statement: "Karimunjawa was officially designated as a National Marine Park in the year 2001.", isCorrect: true },
      { statement: "Underwater visibility in the coral reef areas of Karimunjawa frequently exceeds twenty meters.", isCorrect: true },
      { statement: "The vast majority of local inhabitants earn their livelihood as offshore petroleum miners.", isCorrect: false }
    ];
  }

  // Update Q17
  const q17 = questions.find(item => item.id === 17);
  if (q17) {
    q17.title = "Complex Multiple Choice: Simple Present & Passive Voice Analysis";
    q17.stimulusTitle = "Grammar Focus: Simple Present & Passive Voice in Descriptive Contexts";
    q17.stimulusBody = "Analyze the grammatical accuracy of the following sentences based on standard descriptive and scientific grammar rules:";
    q17.prompt = "Determine whether each grammatical statement below is **TRUE** or **FALSE**:";
    q17.matrixStatements = [
      { statement: "The sentence 'Karimunjawa comprises twenty-seven islands' uses the Simple Present Tense to express an objective geographical fact.", isCorrect: true },
      { statement: "The passive voice transformation of 'Snorkelers observe the coral reefs' is 'The coral reefs is observed by snorkelers'.", isCorrect: false },
      { statement: "The subject in 'Vast expanses of thriving coral reefs shelter hundreds of fish' is plural, requiring the base verb 'shelter' without an -s suffix.", isCorrect: true },
      { statement: "The word 'extraordinarily' in the text functions as an adjective modifying a noun.", isCorrect: false }
    ];
  }

  // Update Q18
  const q18 = questions.find(item => item.id === 18);
  if (q18) {
    q18.title = "Complex Multiple Choice: Adjective Order Rules (OSASCOMP)";
    q18.stimulusTitle = "Grammar Focus: Standard Adjective Order (Opinion - Size - Age - Shape - Color - Origin - Material - Purpose)";
    q18.stimulusBody = "Determine whether the following adjective phrases follow standard English word order rules:";
    q18.prompt = "Determine whether each adjective phrase below is **TRUE** (grammatically correct) or **FALSE** (incorrect) according to standard adjective order (OSASCOMP):";
    q18.matrixStatements = [
      { statement: "'A charming small old wooden cottage' adheres to standard adjective order (Opinion: charming, Size: small, Age: old, Material: wooden).", isCorrect: true },
      { statement: "'A stone ancient magnificent statue' places material before opinion and age correctly.", isCorrect: false },
      { statement: "'An energetic young Indonesian badminton athlete' correctly arranges opinion, age, origin, and purpose.", isCorrect: true },
      { statement: "'A circular large brown dining table' correctly places shape before size.", isCorrect: false }
    ];
  }

  // Update Q19
  const q19 = questions.find(item => item.id === 19);
  if (q19) {
    q19.title = "Complex Multiple Choice: Scientific Report Facts (Javan Rhinoceros)";
    q19.stimulusTitle = "Scientific Report: The Endangered Javan Rhinoceros";
    q19.prompt = "Based on the scientific report excerpt above, determine whether each statement is **TRUE** or **FALSE**:";
    q19.matrixStatements = [
      { statement: "Javan rhinoceroses can currently be found in the wild solely within Ujung Kulon National Park.", isCorrect: true },
      { statement: "Both male and female Javan rhinos possess two large facial horns measuring over one meter in length.", isCorrect: false },
      { statement: "Javan rhinos are carnivorous predators that hunt large prey in social packs.", isCorrect: false },
      { statement: "Acute senses of smell and hearing effectively compensate for the Javan rhino's poor eyesight.", isCorrect: true }
    ];
  }

  // Update Q20
  const q20 = questions.find(item => item.id === 20);
  if (q20) {
    q20.title = "Complex Multiple Choice: Conditional Sentence Structures";
    q20.stimulusTitle = "Grammar Focus: Real and Unreal Conditional Sentence Patterns";
    q20.stimulusBody = "Analyze the structural and logical validity of each conditional sentence:";
    q20.prompt = "Determine whether each conditional sentence formulation is **TRUE** (grammatically sound) or **FALSE** (grammatically flawed):";
    q20.matrixStatements = [
      { statement: "If students protect the coral reefs diligently, marine biodiversity will flourish.", isCorrect: true },
      { statement: "If I was you, I will definitely attend the Kudus cultural heritage workshop tomorrow.", isCorrect: false },
      { statement: "If the national park rangers had more patrol boats, they would monitor the coast more effectively.", isCorrect: true },
      { statement: "If the weather is sunny on Friday, we would have visited the botanical sanctuary.", isCorrect: false }
    ];
  }

  // Update Q21
  const q21 = questions.find(item => item.id === 21);
  if (q21) {
    q21.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q21.stimulusTitle = "Writing Focus: Descriptive Portrayal of an Inspiring Athlete";
    q21.stimulusBody = "A writer intends to portray an internationally accomplished athlete using vivid descriptive adjectives and standard Simple Present Tense.";
    q21.prompt = "Which **TWO (2)** sentences below correctly use descriptive adjectives and the Simple Present Tense to portray an inspiring athlete?";
    q21.options = [
      { key: "A", text: "She consistently demonstrates extraordinary focus and razor-sharp accuracy during international tournaments." },
      { key: "B", text: "She will bought an expensive carbon arrow tomorrow morning at the supermarket." },
      { key: "C", text: "Her athletic posture remains remarkably calm under intense competitive pressure." },
      { key: "D", text: "She was winning the match because the referee has slept during the game." }
    ];
    q21.correctAnswer = ["A", "C"];
  }

  // Update Q22
  const q22 = questions.find(item => item.id === 22);
  if (q22) {
    q22.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q22.stimulusTitle = "Genre Focus: Distinctive Language Features of Scientific Report Texts";
    q22.stimulusBody = "Scientific report texts communicate factual classifications and descriptions of natural and social phenomena.";
    q22.prompt = "Which **TWO (2)** linguistic features are characteristic of scientific Report texts?";
    q22.options = [
      { key: "A", text: "Frequent use of first-person pronouns ('I', 'My family') to convey subjective personal emotions." },
      { key: "B", text: "Use of objective technical vocabulary and general nouns to describe classes of things." },
      { key: "C", text: "Dramatic spoken dialogues between mythical protagonists and antagonists in folklore." },
      { key: "D", text: "Frequent use of timeless Simple Present Tense and Passive Voice to highlight observed natural processes." }
    ];
    q22.correctAnswer = ["B", "D"];
  }

  // Update Q23
  const q23 = questions.find(item => item.id === 23);
  if (q23) {
    q23.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q23.stimulusTitle = "Lexical Study: Oxford 3000 Word Family for 'Conservation'";
    q23.stimulusBody = "Understanding parts of speech and derivational affixes is essential for mastering academic English vocabulary.";
    q23.prompt = "Which **TWO (2)** statements correctly explain word forms related to 'conservation'?";
    q23.options = [
      { key: "A", text: "'Conservation' (noun) denotes the careful preservation and protection of natural environments and wildlife." },
      { key: "B", text: "'Conserve' (verb) means to exhaust natural resources as rapidly as possible without restraint." },
      { key: "C", text: "'Conservationist' (noun) refers to a person who actively advocates for or works toward environmental protection." },
      { key: "D", text: "'Conservatively' (adverb) is always used to describe severe industrial pollution in coastal regions." }
    ];
    q23.correctAnswer = ["A", "C"];
  }

  // Update Q24
  const q24 = questions.find(item => item.id === 24);
  if (q24) {
    q24.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q24.stimulusTitle = "Language Function: Expressing Intentions and Future Plans";
    q24.stimulusBody = "Review the grammatical conventions for expressing future intentions and plans in communicative English.";
    q24.prompt = "Which **TWO (2)** sentences correctly express future intentions or plans using 'intend to' or 'be going to'?";
    q24.options = [
      { key: "A", text: "Our eco-club intends to plant one hundred mangrove seedlings along the Jepara coastline." },
      { key: "B", text: "They is going to visiting the national museum last Tuesday." },
      { key: "C", text: "We are going to organize an environmental workshop for high school students next month." },
      { key: "D", text: "She intend to cleans the entire laboratory alone without gloves." }
    ];
    q24.correctAnswer = ["A", "C"];
  }

  // Update Q25
  const q25 = questions.find(item => item.id === 25);
  if (q25) {
    q25.title = "Multiple Choice Multiple Answer (Choose 2 Correct Options)";
    q25.stimulusTitle = "Grammar Focus: Passive Voice Constructions in Scientific Descriptions";
    q25.stimulusBody = "The passive voice is frequently employed in technical explanations to emphasize the action or recipient of an action rather than the performer.";
    q25.prompt = "Which **TWO (2)** sentences demonstrate grammatically accurate passive voice constructions describing scientific processes?";
    q25.options = [
      { key: "A", text: "The condensed steam is cooled and pumped back underground into the volcanic reservoir." },
      { key: "B", text: "The engineer pumps the water into the turbine generator every morning." },
      { key: "C", text: "Solar radiation is absorbed by photovoltaic silicon cells to generate electricity." },
      { key: "D", text: "The electric current flows quickly across the copper transmission wires." }
    ];
    q25.correctAnswer = ["A", "C"];
  }

  // Update Q26 to Q30 stimulusBody
  [26, 27, 28, 29, 30].forEach(id => {
    const q = questions.find(item => item.id === id);
    if (q) {
      q.stimulusTitle = "Text 2: Clean Geothermal Energy in the Dieng Plateau, Central Java";
      q.stimulusBody = TEXT2_GEOTHERMAL;
    }
  });

  // Write updated questions back into file
  const fnDecl = 'function getGrade10Questions() {\n  return ' + JSON.stringify(questions, null, 2) + ';\n}';
  const qFnRegex = /function getGrade10Questions\(\)\s*\{[\s\S]*?^}/m;
  content = content.replace(qFnRegex, fnDecl);
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file} successfully.`);
});
