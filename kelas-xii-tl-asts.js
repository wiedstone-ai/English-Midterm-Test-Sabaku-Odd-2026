/**
 * ASESMEN SUMATIF TENGAH SEMESTER GASAL (ASTS) & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT LANJUT — TINGKAT XII (FASE F - TL)
 * SEMESTER GASAL (18 MINGGU PENUH) TP 2026/2027
 * 
 * Komposisi Soal:
 * - 60% (24 Butir Soal) Diambil Langsung dari Bank Soal ASAS Gasal Kelas XII Tingkat Lanjut
 * - 40% (16 Butir Soal) Melengkapi Seluruh Materi Semester Gasal (Bioethics Discussion, Pramoedya Review, & Advanced Syntax)
 * 
 * Standar: Tes Kemampuan Akademik (TKA / AKM Literasi Tingkat Lanjut / UTBK SNBT)
 * Bebas Token / Password — Langsung Masuk Latihan & Asesmen
 */

const DEFAULT_GS_URL = "https://script.google.com/macros/s/AKfycbz1dnapNS6sFak-BlG-xxaFhGR9f0BhGYKyyddEvmIEOTxPrlARC2tHkeLLP1owzBToIw/exec";


const SVG_PICTURES = {
  biotech_lab: `<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="15" y="20" width="70" height="55" rx="5" fill="#eff6ff" stroke="#2563eb"/>
    <path d="M30 45c5-10 15-10 20 0s15 10 20 0" stroke="#3b82f6" stroke-width="2.5"/>
    <path d="M30 55c5 10 15 10 20 0s15-10 20 0" stroke="#1d4ed8" stroke-width="2.5"/>
    <line x1="35" y1="42" x2="35" y2="58" stroke="#93c5fd" stroke-width="2"/>
    <line x1="50" y1="45" x2="50" y2="55" stroke="#93c5fd" stroke-width="2"/>
    <line x1="65" y1="42" x2="65" y2="58" stroke="#93c5fd" stroke-width="2"/>
    <circle cx="50" cy="82" r="3" fill="#2563eb"/>
  </svg>`,
  un_assembly: `<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="50" cy="40" rx="35" ry="18" fill="#f0fdf4" stroke="#059669"/>
    <ellipse cx="50" cy="52" rx="42" ry="20" stroke="#10b981" stroke-dasharray="3 3"/>
    <path d="M25 75h50M35 85h30" stroke="#047857" stroke-width="2.5"/>
    <rect x="42" y="28" width="16" height="12" rx="2" fill="#bae6fd" stroke="#0284c7"/>
    <circle cx="50" cy="22" r="4" fill="#0284c7"/>
  </svg>`,
  tokamak_fusion: `<svg viewBox="0 0 100 100" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="50" r="35" stroke="#d97706" stroke-width="3"/>
    <circle cx="50" cy="50" r="18" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
    <circle cx="50" cy="50" r="8" fill="#ea580c"/>
    <path d="M50 15v17M50 68v17M15 50h17M68 50h17" stroke="#f59e0b" stroke-width="2.5"/>
    <path d="M25 25l12 12M63 63l12 12M75 25l-12 12M37 63l-12 12" stroke="#d97706" stroke-dasharray="2 2"/>
  </svg>`,
  printing_press: `<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="20" y="35" width="60" height="45" rx="3" fill="#f8fafc" stroke="#475569"/>
    <circle cx="50" cy="50" r="12" stroke="#334155" stroke-width="2"/>
    <path d="M30 20h40v15H30z" fill="#e2e8f0" stroke="#475569"/>
    <path d="M15 80h70" stroke="#0f172a" stroke-width="3"/>
    <line x1="50" y1="20" x2="50" y2="10" stroke="#334155" stroke-width="3"/>
    <circle cx="50" cy="8" r="3" fill="#0f172a"/>
  </svg>`
};

function getGrade12TLAstsQuestions() {
  return [
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 1,
      source: "Sumber: Advanced English Academic Listening Series — Cambridge Assessment English & Kemendikbudristek",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number one. Look at the pictures. In a specialized bioengineering cleanroom, a senior molecular geneticist is examining high-resolution holographic DNA sequencing strands inside an automated CRISPR base-editing chamber. Which picture best illustrates the spoken statement?",
      prompt: "Look at the four pictures below. Which picture matches the molecular CRISPR bioengineering laboratory described in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.biotech_lab, label: "Molecular bioengineering laboratory featuring holographic DNA sequencing analysis" },
        { key: "B", svg: SVG_PICTURES.un_assembly, label: "Multilateral diplomatic plenary assembly chamber" },
        { key: "C", svg: SVG_PICTURES.tokamak_fusion, label: "Experimental magnetic confinement nuclear fusion reactor" },
        { key: "D", svg: SVG_PICTURES.printing_press, label: "Mechanical cylinder printing press from the early industrial era" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan aktivitas laboratorium rekayasa genetika molekuler: 'senior molecular geneticist is examining high-resolution holographic DNA sequencing strands inside an automated CRISPR base-editing chamber'. Gambar A mencerminkan laboratorium bioteknologi dengan untaian heliks ganda DNA.",
      grammarNote: "Participle Clauses & Academic Register: 'examining high-resolution holographic DNA sequencing strands'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 2,
      source: "Sumber: United Nations Academic Impact & Harvard Model UN Conference Transcripts",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number two. Look at the pictures. In an imposing semicircular plenary chamber, international delegates and legal scholars are seated beneath tiered acoustic balconies, engaging in multilateral treaty deliberations on global biomedical governance. Which picture best corresponds to the spoken description?",
      prompt: "Look at the four pictures below. Which picture matches the multilateral diplomatic assembly chamber described in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.un_assembly, label: "Imposing semicircular plenary chamber for multilateral diplomatic negotiations" },
        { key: "B", svg: SVG_PICTURES.biotech_lab, label: "Molecular bioengineering cleanroom with holographic DNA strands" },
        { key: "C", svg: SVG_PICTURES.tokamak_fusion, label: "High-energy magnetic confinement experimental physics facility" },
        { key: "D", svg: SVG_PICTURES.printing_press, label: "Traditional mechanical printing press workshop" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan ruang sidang pleno diplomatik internasional: 'semicircular plenary chamber, international delegates and legal scholars are seated... engaging in multilateral treaty deliberations'. Gambar A menggambarkan format ruang sidang multilateral setengah lingkaran.",
      grammarNote: "Complex Prepositional Phrases: 'beneath tiered acoustic balconies', 'engaging in multilateral treaty deliberations'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 3,
      source: "Sumber: International Tokamak Physics Activity (ITPA) & Cambridge Scientific Transcripts",
      type: "listening_pictures",
      title: "Listening Section: Part I - Pictures",
      audioText: "Number three. Look at the pictures. Inside an advanced physics research facility, engineers monitor a toroidal vacuum vessel equipped with powerful superconducting magnetic coils designed to confine scorching hydrogen plasma for nuclear fusion energy. Which picture best illustrates the spoken statement?",
      prompt: "Look at the four pictures below. Which picture matches the magnetic confinement nuclear fusion facility described in the audio?",
      options: [
        { key: "A", svg: SVG_PICTURES.tokamak_fusion, label: "Toroidal magnetic confinement chamber for nuclear fusion plasma research" },
        { key: "B", svg: SVG_PICTURES.printing_press, label: "Vintage movable-type printing press mechanism" },
        { key: "C", svg: SVG_PICTURES.biotech_lab, label: "Cellular genetics microscopy laboratory" },
        { key: "D", svg: SVG_PICTURES.un_assembly, label: "Diplomatic conference hall with tiered delegation desks" }
      ],
      correctAnswer: "A",
      explanation: "Audio mendeskripsikan fasilitas fusi nuklir berbentuk donat (toroidal) dengan kumparan magnet superkonduktor untuk mengurung plasma hidrogen panas: 'toroidal vacuum vessel equipped with powerful superconducting magnetic coils designed to confine hydrogen plasma'. Gambar A tepat merepresentasikan reaktor fusi tokamak.",
      grammarNote: "Relative Clauses & Specialized Physics Diction: 'equipped with superconducting magnetic coils designed to confine plasma'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 4,
      source: "Sumber: Cambridge English for Academic Dialogues & Oxford Bioethics Forum",
      type: "listening_dialog",
      title: "Listening Section: Part II - Academic Dialogues",
      audioText: "Narrator: Question 4 refers to the following conversation between two bioethicists.\nMan: Germline genome editing holds unprecedented promise for permanently eradicating debilitating monogenic disorders like Huntington's disease before an embryo even implants.\nWoman: Undeniably. However, altering heritable DNA carries profound intergenerational hazards. If unintended off-target mutations occur, they will propagate indefinitely through future human lineages. Furthermore, commercializing enhancement traits risks inaugurating a biological caste system where only the affluent afford cognitive or physiological optimization.\nMan: You raise an imperative caveat. Scientific feasibility must never be mistaken for ethical sanction.\nNarrator: What central ethical dilemma does the woman highlight regarding germline gene editing?",
      prompt: "What primary ethical risk does the woman emphasize regarding heritable germline genome editing?",
      options: [
        { key: "A", text: "Unintended off-target mutations propagating across generations and the exacerbation of societal inequality into biological castes." },
        { key: "B", text: "The complete inability of modern genetic sequencing tools to identify hereditary disorders in human embryos." },
        { key: "C", text: "The exorbitant manufacturing cost of sterile laboratory glassware in bioengineering cleanrooms." },
        { key: "D", text: "The refusal of sovereign states to permit any medical research regarding somatic cell therapies." }
      ],
      correctAnswer: "A",
      explanation: "Wanita tersebut menekankan dua bahaya utama penyuntingan sel nutfah (germline): mutasi di luar target yang diwariskan ke generasi mendatang ('propagate indefinitely through future lineages') dan komersialisasi sifat unggul yang menciptakan kasta biologis ('inaugurating a biological caste system').",
      grammarNote: "First Conditional with Future Consequence: 'If unintended off-target mutations occur, they will propagate indefinitely'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 5,
      source: "Sumber: Southeast Asian Post-Colonial Literary Colloquium — NUS & Kemendikbudristek",
      type: "listening_dialog",
      title: "Listening Section: Part II - Academic Dialogues",
      audioText: "Narrator: Question 5 refers to the following literary seminar discussion.\nMan: In Pramoedya Ananta Toer's 'This Earth of Mankind', Minke's mastery of the Dutch language is fascinating. At first, it allows him entry into elite colonial institutions.\nWoman: Exactly, but Pramoedya subverts that dynamic brilliantly. Rather than remaining an assimilated colonial subject, Minke transforms European Enlightenment ideals—liberty, equality, and empirical reason—into a journalistic weapon against the very hypocrisy of Dutch colonial jurisprudence.\nMan: Indeed. His pen and the indigenous press become instruments of collective anticolonial awakening.\nNarrator: What does the woman assert regarding Minke's utilization of European education?",
      prompt: "According to the woman, how does Minke appropriate European education and language in the novel?",
      options: [
        { key: "A", text: "He transforms European Enlightenment ideals into journalistic weapons to expose and resist colonial injustice." },
        { key: "B", text: "He renounces all vernacular languages to assimilate completely into the Dutch colonial aristocracy." },
        { key: "C", text: "He uses his literacy exclusively to amass immense personal wealth in private commercial enterprises." },
        { key: "D", text: "He abandons political writing to compose conventional romantic poetry for colonial journals." }
      ],
      correctAnswer: "A",
      explanation: "Wanita tersebut menjelaskan bahwa Minke mengubah nilai-nilai Pencerahan Eropa (kebebasan, kesetaraan, rasionalitas) menjadi senjata jurnalistik untuk melawan kemunafikan hukum kolonial Belanda ('transforms European Enlightenment ideals into a journalistic weapon against colonial jurisprudence').",
      grammarNote: "Subversion Rhetoric & Contrastive Prepositions: 'Rather than remaining an assimilated subject, Minke transforms...'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 6,
      source: "Sumber: Harvard Kennedy School Neuroethics Symposium & Cambridge Assessment English",
      type: "listening_dialog",
      title: "Listening Section: Part II - Academic Dialogues",
      audioText: "Narrator: Question 6 refers to the following conversation on emerging neuro-technologies.\nWoman: Emerging non-invasive neural interfaces can now detect cognitive fatigue and attentional lapses in real time during examinations. School administrators are eager to deploy them to personalize learning pacing.\nMan: While the pedagogical intention appears benign, we must interrogate the fundamental right to mental privacy. If biometric neural data is continuously harvested and algorithmically scored, students' cognitive autonomy is compromised. We risk constructing a panoptic disciplinary environment that penalizes neurodivergence.\nWoman: I concede that point. Unfettered surveillance under the guise of optimization threatens the very essence of human educational freedom.\nNarrator: What core concern does the man articulate regarding neural monitoring in schools?",
      prompt: "What core objection does the man articulate regarding the implementation of neural monitoring interfaces in educational settings?",
      options: [
        { key: "A", text: "It compromises students' mental privacy and cognitive autonomy, risking a punitive disciplinary surveillance system." },
        { key: "B", text: "Current neural sensor headsets consume excessive electrical wattage and overheat during standard examinations." },
        { key: "C", text: "School administrators lack the financial capital to purchase digital tablet computers for secondary libraries." },
        { key: "D", text: "Personalized pacing invariably impedes students from mastering foreign language vocabulary." }
      ],
      correctAnswer: "A",
      explanation: "Pria tersebut menekankan bahwa pengawasan saraf merusak privasi mental dan otonomi kognitif siswa ('mental privacy and cognitive autonomy is compromised'), serta berisiko menciptakan sistem pengawasan panoptik yang menghukum keberagaman cara berpikir siswa.",
      grammarNote: "Hedging & Concessive Argumentation: 'While the pedagogical intention appears benign, we must interrogate...'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 7,
      source: "Sumber: Cornell Southeast Asia Program — Distinguished Literary Lecture Series & Kemendikbudristek",
      type: "listening_talk",
      title: "Listening Section: Part III - Literary Lectures",
      audioText: "Narrator: Questions 7 and 8 refer to the following lecture on post-colonial Southeast Asian literature.\nLecturer: Good morning, ladies and gentlemen. In analyzing Pramoedya Ananta Toer's Buru Quartet, particularly its opening masterpiece 'This Earth of Mankind', literary scholars must scrutinize the monumental character of Nyai Ontosoroh. Sold as a youthful concubine to a Dutch estate owner, Sanikem refuses victimhood. Through sheer autodidactic perseverance, she masters complex Dutch commercial law, administrative bookkeeping, and estate management, effectively managing the Boerderij Buitenzorg enterprise far more astutely than its European master. Her existence constitutes a formidable ideological paradox for the colonial regime: an indigenous concubine possessing superior intellectual, moral, and organizational prowess compared to European magistrates. Yet, when colonial court jurisprudence rules her marriage legally invalid, the novel unveils how the colonial legal apparatus existed not to dispense justice, but to preserve racial hierarchy and confiscate indigenous wealth.\nNarrator: Question 7. According to the lecturer, how does Nyai Ontosoroh subvert colonial expectations?",
      prompt: "According to the lecturer, how does Nyai Ontosoroh subvert colonial and patriarchal stereotypes?",
      options: [
        { key: "A", text: "By mastering European law and commerce through self-education, managing the estate with intellectual and moral superiority." },
        { key: "B", text: "By passively accepting her subservient status as an illiterate concubine without economic autonomy." },
        { key: "C", text: "By leading an armed military rebellion to overthrow the municipal administrative council." },
        { key: "D", text: "By seeking royal pardon from the Dutch monarchy to legitimize her personal fortune." }
      ],
      correctAnswer: "A",
      explanation: "Dosen menegaskan bahwa Nyai Ontosoroh mematahkan stereotipe kolonial dan patriarkal dengan belajar mandiri hingga menguasai hukum dan administrasi niaga Belanda, serta mengelola perkebunan dengan keunggulan intelektual dan moral ('mastering European law and commerce through autodidactic perseverance').",
      grammarNote: "Participial Phrase of Cause: 'Sold as a youthful concubine... Sanikem refuses victimhood through autodidactic perseverance'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 8,
      source: "Sumber: Cornell Southeast Asia Program — Distinguished Literary Lecture Series & Kemendikbudristek",
      type: "listening_talk",
      title: "Listening Section: Part III - Literary Lectures",
      audioText: "Narrator: Question 8 refers to the lecture you just heard.\nNarrator: What profound critique does the colonial court's final ruling in 'This Earth of Mankind' demonstrate, according to the lecturer?",
      prompt: "What profound institutional critique is revealed through the colonial court's ruling, according to the lecturer?",
      options: [
        { key: "A", text: "The colonial legal apparatus was designed to uphold racial supremacy and confiscate wealth rather than dispense authentic justice." },
        { key: "B", text: "The colonial judiciary was universally impartial and treated indigenous citizens with absolute egalitarian fairness." },
        { key: "C", text: "Dutch magistrates were completely uneducated regarding international civil law codes." },
        { key: "D", text: "Customary indigenous marriage contracts were granted constitutional supremacy over European civil statutes." }
      ],
      correctAnswer: "A",
      explanation: "Dosen menyimpulkan bahwa putusan pengadilan kolonial membuktikan bahwa hukum kolonial diciptakan bukan untuk menegakkan keadilan sejati, melainkan demi melanggengkan supremasi rasial kulit putih dan merampas hak milik kaum pribumi.",
      grammarNote: "Correlative Conjunctions: 'not to dispense justice, but to preserve racial hierarchy'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 9,
      source: "Sumber: WHO Global Summit on Human Genome Editing & Cambridge Scientific Transcripts",
      type: "listening_talk",
      title: "Listening Section: Part III - Academic Talks",
      audioText: "Narrator: Questions 9 and 10 refer to the following address on international biotechnology ethics.\nSpeaker: Distinguished colleagues, in formulating international governance for genetic engineering, the scientific community must draw an unequivocal line of demarcation between somatic gene therapy and germline editing. Somatic interventions modify genes exclusively within non-reproductive human tissues—such as targeting defective bone marrow cells to cure sickle cell anemia. The modifications terminate with the patient and pose zero heritable risk to future generations. Germline editing, conversely, alters embryos or gametes, ensuring that synthetic genetic variations become permanently woven into the human gene pool. Recognizing these irreversible stakes, the Oviedo Convention and international bioethics guidelines insist that germline alterations remain under a strict multilateral moratorium until profound consensus on safety, efficacy, and global equity is attained.\nNarrator: Question 9. What is the defining medical distinction between somatic and germline gene interventions?",
      prompt: "What is the defining distinction between somatic gene therapy and germline genome editing, according to the speaker?",
      options: [
        { key: "A", text: "Somatic therapy alters non-reproductive tissues with zero heritable impact, whereas germline editing permanently alters the hereditary human gene pool." },
        { key: "B", text: "Somatic therapy is strictly prohibited by international law, while germline editing is universally practiced in secondary schools." },
        { key: "C", text: "Somatic interventions affect future generations indefinitely, while germline edits dissolve after three weeks." },
        { key: "D", text: "There are no scientific or legal distinctions between somatic and germline interventions in contemporary medicine." }
      ],
      correctAnswer: "A",
      explanation: "Pembicara mendefinisikan perbedaan esensial: terapi somatik hanya menyunting sel jaringan non-reproduktif pasien tanpa risiko pewarisan keturunan, sedangkan penyuntingan sel nutfah (germline) mengubah DNA embrio/gamet secara permanen ke dalam lungkang gen (gene pool) generasi mendatang.",
      grammarNote: "Adversative Conjunctions: 'The modifications terminate with the patient... Germline editing, conversely, alters embryos'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 10,
      source: "Sumber: WHO Global Summit on Human Genome Editing & Cambridge Scientific Transcripts",
      type: "listening_talk",
      title: "Listening Section: Part III - Academic Talks",
      audioText: "Narrator: Question 10 refers to the address you just heard.\nNarrator: Why does the speaker urge sovereign nations to uphold a strict multilateral moratorium on germline genetic modification?",
      prompt: "Why does the speaker urge sovereign nations to maintain a strict multilateral moratorium on germline editing?",
      options: [
        { key: "A", text: "To prevent irreversible intergenerational harms until robust consensus on safety, efficacy, and global equity is achieved." },
        { key: "B", text: "To completely discontinue all scientific funding for medical biology and clinical cancer research." },
        { key: "C", text: "To encourage private commercial pharmaceutical conglomerates to operate without regulatory oversight." },
        { key: "D", text: "Because genetic engineering tools are completely incapable of modifying biological sequences in laboratory trials." }
      ],
      correctAnswer: "A",
      explanation: "Pembicara mendesak moratoriun internasional guna mencegah dampak buruk antargenerasi yang tidak dapat diubah ('irreversible intergenerational harms') hingga tercapai konsensus global yang solid mengenai keselamatan, efikasi, dan keadilan akses.",
      grammarNote: "Infinitive of Purpose: 'To prevent irreversible harms until robust consensus... is achieved'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 11,
      source: "Sumber: The Lancet Bioethics & Cambridge Journal of Healthcare Ethics & Kemendikbudristek",
      type: "reading_discussion",
      title: "Advanced Reading 1: Discussion Text Analysis",
      stimulusTitle: "Text 1: Advanced Discussion — Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      stimulusBody: `<b>[1]</b> The revolutionary advent of CRISPR-Cas9 base-editing biotechnology has propelled human civilization toward an unprecedented biomedical frontier. For the first time in evolutionary history, scientists possess molecular precision tools capable not merely of treating symptomatic pathologies in adult tissues, but of directly altering the heritable genetic architecture of human gametes and pre-implantation embryos. However, this profound scientific breakthrough has ignited a worldwide bioethical debate, sharply polarizing geneticists, clinicians, sociologists, and international policymakers.<br><br><b>[2]</b> On the one hand, proponents of germline gene editing put forward compelling humanitarian and economic justifications. Advocates emphasize that heritable genomic editing offers a curative horizon for thousands of debilitating monogenic disorders—such as Huntington's chorea, beta-thalassemia, and cystic fibrosis—which have inflicted intergenerational agony upon countless families. By permanently repairing deleterious mutations at the single-cell embryonic stage, humanity could entirely eliminate these lethal hereditary conditions from ancestral lineages. Furthermore, healthcare economists argue that eradicating chronic congenital illnesses would alleviate trillions of dollars in lifelong palliative care expenditures, thereby unburdening vulnerable public health systems and democratizing curative medicine across emerging societies.<br><br><b>[3]</b> On the other hand, skeptics, clinical researchers, and bioethicists urge extreme vigilance and advocate stringent international prohibitions. First, the technical hazards of off-target mutations—where molecular scissors inadvertently excise essential non-targeted DNA sequences—remain dangerously unpredictable, creating irreversible chromosomal anomalies that would be perpetually transmitted to subsequent generations. Second, sociologists warn against the insidious slide from curative gene therapy toward cosmetic enhancement and neo-eugenics. If wealthy demographics are permitted to commercialize genetic optimization—such as engineering cognitive faculties, athletic stamina, or aesthetic traits—the inevitable result will be the emergence of an entrenched biological caste system, where preexisting socioeconomic inequality transforms into unbridgeable biological stratification.<br><br><b>[4]</b> In synthesizing these divergent perspectives, the consensus among global bioethics commissions underscores that scientific capability must never be equated with moral justification. While somatic gene therapies should be accelerated to alleviate existing suffering, heritable germline modifications must remain governed by a strict multilateral moratorium until foolproof technical safety, transparent democratic accountability, and equitable global access can be guaranteed. Technological mastery must remain subordinate to ethical discernment, lest humanity inadvertently sacrifice its shared egalitarian dignity in the reckless pursuit of genetic perfection.`,
      readingRef: "Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      prompt: "What is the primary communicative purpose of the text above?",
      options: [
        { key: "A", text: "To present a balanced, multi-perspective discourse examining the therapeutic potentials and acute ethical dilemmas of germline gene editing." },
        { key: "B", text: "To persuade sovereign nations to completely outlaw all biomedical research involving molecular biotechnology." },
        { key: "C", text: "To provide an instructional technical manual detailing how to operate a CRISPR-Cas9 base-editing laboratory synthesizer." },
        { key: "D", text: "To narrate the fictional journey of a genetically modified superhuman living in a dystopian future." }
      ],
      correctAnswer: "A",
      explanation: "Teks bergenre Discussion Text dengan tujuan komunikatif menyajikan wacana berimbang multi-perspektif mengenai potensi terapeutik sekaligus dilema etis mendalam dari penyuntingan gen sel nutfah (germline gene editing).",
      grammarNote: "Communicative Purpose of Discussion Text: Exploring multiple perspectives on a controversial issue."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 12,
      source: "Sumber: The Lancet Bioethics & Cambridge Journal of Healthcare Ethics & Kemendikbudristek",
      type: "reading_discussion",
      title: "Advanced Reading 1: Discussion Text Analysis",
      stimulusTitle: "Text 1: Advanced Discussion — Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      stimulusBody: `<b>[1]</b> The revolutionary advent of CRISPR-Cas9 base-editing biotechnology has propelled human civilization toward an unprecedented biomedical frontier. For the first time in evolutionary history, scientists possess molecular precision tools capable not merely of treating symptomatic pathologies in adult tissues, but of directly altering the heritable genetic architecture of human gametes and pre-implantation embryos. However, this profound scientific breakthrough has ignited a worldwide bioethical debate, sharply polarizing geneticists, clinicians, sociologists, and international policymakers.<br><br><b>[2]</b> On the one hand, proponents of germline gene editing put forward compelling humanitarian and economic justifications. Advocates emphasize that heritable genomic editing offers a curative horizon for thousands of debilitating monogenic disorders—such as Huntington's chorea, beta-thalassemia, and cystic fibrosis—which have inflicted intergenerational agony upon countless families. By permanently repairing deleterious mutations at the single-cell embryonic stage, humanity could entirely eliminate these lethal hereditary conditions from ancestral lineages. Furthermore, healthcare economists argue that eradicating chronic congenital illnesses would alleviate trillions of dollars in lifelong palliative care expenditures, thereby unburdening vulnerable public health systems and democratizing curative medicine across emerging societies.<br><br><b>[3]</b> On the other hand, skeptics, clinical researchers, and bioethicists urge extreme vigilance and advocate stringent international prohibitions. First, the technical hazards of off-target mutations—where molecular scissors inadvertently excise essential non-targeted DNA sequences—remain dangerously unpredictable, creating irreversible chromosomal anomalies that would be perpetually transmitted to subsequent generations. Second, sociologists warn against the insidious slide from curative gene therapy toward cosmetic enhancement and neo-eugenics. If wealthy demographics are permitted to commercialize genetic optimization—such as engineering cognitive faculties, athletic stamina, or aesthetic traits—the inevitable result will be the emergence of an entrenched biological caste system, where preexisting socioeconomic inequality transforms into unbridgeable biological stratification.<br><br><b>[4]</b> In synthesizing these divergent perspectives, the consensus among global bioethics commissions underscores that scientific capability must never be equated with moral justification. While somatic gene therapies should be accelerated to alleviate existing suffering, heritable germline modifications must remain governed by a strict multilateral moratorium until foolproof technical safety, transparent democratic accountability, and equitable global access can be guaranteed. Technological mastery must remain subordinate to ethical discernment, lest humanity inadvertently sacrifice its shared egalitarian dignity in the reckless pursuit of genetic perfection.`,
      readingRef: "Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      prompt: "According to paragraph 2, what humanitarian argument do proponents advance in favor of germline genome editing?",
      options: [
        { key: "A", text: "It presents a curative breakthrough capable of permanently eradicating debilitating monogenic hereditary diseases across family bloodlines." },
        { key: "B", text: "It guarantees that all human beings will possess identical physical heights and artistic talents." },
        { key: "C", text: "It completely eradicates the necessity for public hospitals, physicians, and pharmaceutical medicines." },
        { key: "D", text: "It enables commercial corporations to patent and monopolize all indigenous floral DNA sequences." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 menyatakan argumen pendukung: penyuntingan sel nutfah menawarkan terobosan kuratif untuk menghapus penyakit keturunan monogenik yang melumpuhkan (seperti anemia sel sabit, fibrosis kistik) secara permanen dari silsilah keluarga.",
      grammarNote: "Modal Expressions of Capability: 'capable of permanently eradicating debilitating hereditary diseases'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 13,
      source: "Sumber: The Lancet Bioethics & Cambridge Journal of Healthcare Ethics & Kemendikbudristek",
      type: "reading_discussion",
      title: "Advanced Reading 1: Discussion Text Analysis",
      stimulusTitle: "Text 1: Advanced Discussion — Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      stimulusBody: `<b>[1]</b> The revolutionary advent of CRISPR-Cas9 base-editing biotechnology has propelled human civilization toward an unprecedented biomedical frontier. For the first time in evolutionary history, scientists possess molecular precision tools capable not merely of treating symptomatic pathologies in adult tissues, but of directly altering the heritable genetic architecture of human gametes and pre-implantation embryos. However, this profound scientific breakthrough has ignited a worldwide bioethical debate, sharply polarizing geneticists, clinicians, sociologists, and international policymakers.<br><br><b>[2]</b> On the one hand, proponents of germline gene editing put forward compelling humanitarian and economic justifications. Advocates emphasize that heritable genomic editing offers a curative horizon for thousands of debilitating monogenic disorders—such as Huntington's chorea, beta-thalassemia, and cystic fibrosis—which have inflicted intergenerational agony upon countless families. By permanently repairing deleterious mutations at the single-cell embryonic stage, humanity could entirely eliminate these lethal hereditary conditions from ancestral lineages. Furthermore, healthcare economists argue that eradicating chronic congenital illnesses would alleviate trillions of dollars in lifelong palliative care expenditures, thereby unburdening vulnerable public health systems and democratizing curative medicine across emerging societies.<br><br><b>[3]</b> On the other hand, skeptics, clinical researchers, and bioethicists urge extreme vigilance and advocate stringent international prohibitions. First, the technical hazards of off-target mutations—where molecular scissors inadvertently excise essential non-targeted DNA sequences—remain dangerously unpredictable, creating irreversible chromosomal anomalies that would be perpetually transmitted to subsequent generations. Second, sociologists warn against the insidious slide from curative gene therapy toward cosmetic enhancement and neo-eugenics. If wealthy demographics are permitted to commercialize genetic optimization—such as engineering cognitive faculties, athletic stamina, or aesthetic traits—the inevitable result will be the emergence of an entrenched biological caste system, where preexisting socioeconomic inequality transforms into unbridgeable biological stratification.<br><br><b>[4]</b> In synthesizing these divergent perspectives, the consensus among global bioethics commissions underscores that scientific capability must never be equated with moral justification. While somatic gene therapies should be accelerated to alleviate existing suffering, heritable germline modifications must remain governed by a strict multilateral moratorium until foolproof technical safety, transparent democratic accountability, and equitable global access can be guaranteed. Technological mastery must remain subordinate to ethical discernment, lest humanity inadvertently sacrifice its shared egalitarian dignity in the reckless pursuit of genetic perfection.`,
      readingRef: "Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      prompt: "In paragraph 3, what socioeconomic peril do bioethicists foresee if genetic enhancement traits become commercialized?",
      options: [
        { key: "A", text: "The emergence of an entrenched biological caste system where genetic advantages are monopolized by the wealthy elite." },
        { key: "B", text: "A sudden and catastrophic decline in the market value of global computer microprocessors." },
        { key: "C", text: "The complete equalization of financial wealth across developed and developing nations." },
        { key: "D", text: "An immediate global prohibition against patenting computational artificial intelligence models." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 3 memaparkan kekhawatiran para pakar etika: komersialisasi penyuntingan sifat peningkatan (enhancement) akan melahirkan sistem kasta biologis yang mengakar ('entrenched biological caste system'), di mana ketimpangan finansial bertransformasi menjadi ketimpangan biologis absolut.",
      grammarNote: "Nominalization & Social Critique: 'the emergence of an entrenched biological caste system'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 14,
      source: "Sumber: The Lancet Bioethics & Cambridge Journal of Healthcare Ethics & Kemendikbudristek",
      type: "reading_discussion",
      title: "Advanced Reading 1: Discussion Text Analysis",
      stimulusTitle: "Text 1: Advanced Discussion — Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      stimulusBody: `<b>[1]</b> The revolutionary advent of CRISPR-Cas9 base-editing biotechnology has propelled human civilization toward an unprecedented biomedical frontier. For the first time in evolutionary history, scientists possess molecular precision tools capable not merely of treating symptomatic pathologies in adult tissues, but of directly altering the heritable genetic architecture of human gametes and pre-implantation embryos. However, this profound scientific breakthrough has ignited a worldwide bioethical debate, sharply polarizing geneticists, clinicians, sociologists, and international policymakers.<br><br><b>[2]</b> On the one hand, proponents of germline gene editing put forward compelling humanitarian and economic justifications. Advocates emphasize that heritable genomic editing offers a curative horizon for thousands of debilitating monogenic disorders—such as Huntington's chorea, beta-thalassemia, and cystic fibrosis—which have inflicted intergenerational agony upon countless families. By permanently repairing deleterious mutations at the single-cell embryonic stage, humanity could entirely eliminate these lethal hereditary conditions from ancestral lineages. Furthermore, healthcare economists argue that eradicating chronic congenital illnesses would alleviate trillions of dollars in lifelong palliative care expenditures, thereby unburdening vulnerable public health systems and democratizing curative medicine across emerging societies.<br><br><b>[3]</b> On the other hand, skeptics, clinical researchers, and bioethicists urge extreme vigilance and advocate stringent international prohibitions. First, the technical hazards of off-target mutations—where molecular scissors inadvertently excise essential non-targeted DNA sequences—remain dangerously unpredictable, creating irreversible chromosomal anomalies that would be perpetually transmitted to subsequent generations. Second, sociologists warn against the insidious slide from curative gene therapy toward cosmetic enhancement and neo-eugenics. If wealthy demographics are permitted to commercialize genetic optimization—such as engineering cognitive faculties, athletic stamina, or aesthetic traits—the inevitable result will be the emergence of an entrenched biological caste system, where preexisting socioeconomic inequality transforms into unbridgeable biological stratification.<br><br><b>[4]</b> In synthesizing these divergent perspectives, the consensus among global bioethics commissions underscores that scientific capability must never be equated with moral justification. While somatic gene therapies should be accelerated to alleviate existing suffering, heritable germline modifications must remain governed by a strict multilateral moratorium until foolproof technical safety, transparent democratic accountability, and equitable global access can be guaranteed. Technological mastery must remain subordinate to ethical discernment, lest humanity inadvertently sacrifice its shared egalitarian dignity in the reckless pursuit of genetic perfection.`,
      readingRef: "Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      prompt: "The word 'commodification' in paragraph 3 ('the commodification of human traits') most closely means:",
      options: [
        { key: "A", text: "the commercial treatment of human attributes as marketable commercial products" },
        { key: "B", text: "the biological degradation of cellular structures under viral attack" },
        { key: "C", text: "the charitable distribution of essential medicines to underprivileged communities" },
        { key: "D", text: "the clinical sterilization of medical laboratory apparatus" }
      ],
      correctAnswer: "A",
      explanation: "'Commodification' dalam konteks sosiologi dan bioetika bermakna komodifikasi, yaitu perlakuan terhadap sifat-sifat kodrati manusia sebagai barang dagangan/produk komersial yang dapat diperjualbelikan.",
      grammarNote: "Academic Abstract Nouns: Commodification (verb: commodify, adjective: commodified)."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 15,
      source: "Sumber: The Lancet Bioethics & Cambridge Journal of Healthcare Ethics & Kemendikbudristek",
      type: "reading_discussion",
      title: "Advanced Reading 1: Discussion Text Analysis",
      stimulusTitle: "Text 1: Advanced Discussion — Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      stimulusBody: `<b>[1]</b> The revolutionary advent of CRISPR-Cas9 base-editing biotechnology has propelled human civilization toward an unprecedented biomedical frontier. For the first time in evolutionary history, scientists possess molecular precision tools capable not merely of treating symptomatic pathologies in adult tissues, but of directly altering the heritable genetic architecture of human gametes and pre-implantation embryos. However, this profound scientific breakthrough has ignited a worldwide bioethical debate, sharply polarizing geneticists, clinicians, sociologists, and international policymakers.<br><br><b>[2]</b> On the one hand, proponents of germline gene editing put forward compelling humanitarian and economic justifications. Advocates emphasize that heritable genomic editing offers a curative horizon for thousands of debilitating monogenic disorders—such as Huntington's chorea, beta-thalassemia, and cystic fibrosis—which have inflicted intergenerational agony upon countless families. By permanently repairing deleterious mutations at the single-cell embryonic stage, humanity could entirely eliminate these lethal hereditary conditions from ancestral lineages. Furthermore, healthcare economists argue that eradicating chronic congenital illnesses would alleviate trillions of dollars in lifelong palliative care expenditures, thereby unburdening vulnerable public health systems and democratizing curative medicine across emerging societies.<br><br><b>[3]</b> On the other hand, skeptics, clinical researchers, and bioethicists urge extreme vigilance and advocate stringent international prohibitions. First, the technical hazards of off-target mutations—where molecular scissors inadvertently excise essential non-targeted DNA sequences—remain dangerously unpredictable, creating irreversible chromosomal anomalies that would be perpetually transmitted to subsequent generations. Second, sociologists warn against the insidious slide from curative gene therapy toward cosmetic enhancement and neo-eugenics. If wealthy demographics are permitted to commercialize genetic optimization—such as engineering cognitive faculties, athletic stamina, or aesthetic traits—the inevitable result will be the emergence of an entrenched biological caste system, where preexisting socioeconomic inequality transforms into unbridgeable biological stratification.<br><br><b>[4]</b> In synthesizing these divergent perspectives, the consensus among global bioethics commissions underscores that scientific capability must never be equated with moral justification. While somatic gene therapies should be accelerated to alleviate existing suffering, heritable germline modifications must remain governed by a strict multilateral moratorium until foolproof technical safety, transparent democratic accountability, and equitable global access can be guaranteed. Technological mastery must remain subordinate to ethical discernment, lest humanity inadvertently sacrifice its shared egalitarian dignity in the reckless pursuit of genetic perfection.`,
      readingRef: "Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      prompt: "Which transitional phrase in paragraph 3 signals a fundamental shift to opposing counter-arguments?",
      options: [
        { key: "A", text: "'On the other hand, skeptics and ethicists caution...'" },
        { key: "B", text: "'Consequently, physicians have observed...'" },
        { key: "C", text: "'In addition to these therapeutic milestones...'" },
        { key: "D", text: "'Similarly, molecular biologists emphasize...'" }
      ],
      correctAnswer: "A",
      explanation: "Frasa transisi 'On the other hand' (Sebaliknya / Di sisi lain) adalah penanda wacana adversatif yang secara eksplisit menandai perpindahan fokus ke argumen lawan (kontra).",
      grammarNote: "Adversative Discourse Markers in Discussion Genre: 'On the one hand... On the other hand'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 16,
      source: "Sumber: The Lancet Bioethics & Cambridge Journal of Healthcare Ethics & Kemendikbudristek",
      type: "reading_discussion",
      title: "Advanced Reading 1: Discussion Text Analysis",
      stimulusTitle: "Text 1: Advanced Discussion — Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      stimulusBody: `<b>[1]</b> The revolutionary advent of CRISPR-Cas9 base-editing biotechnology has propelled human civilization toward an unprecedented biomedical frontier. For the first time in evolutionary history, scientists possess molecular precision tools capable not merely of treating symptomatic pathologies in adult tissues, but of directly altering the heritable genetic architecture of human gametes and pre-implantation embryos. However, this profound scientific breakthrough has ignited a worldwide bioethical debate, sharply polarizing geneticists, clinicians, sociologists, and international policymakers.<br><br><b>[2]</b> On the one hand, proponents of germline gene editing put forward compelling humanitarian and economic justifications. Advocates emphasize that heritable genomic editing offers a curative horizon for thousands of debilitating monogenic disorders—such as Huntington's chorea, beta-thalassemia, and cystic fibrosis—which have inflicted intergenerational agony upon countless families. By permanently repairing deleterious mutations at the single-cell embryonic stage, humanity could entirely eliminate these lethal hereditary conditions from ancestral lineages. Furthermore, healthcare economists argue that eradicating chronic congenital illnesses would alleviate trillions of dollars in lifelong palliative care expenditures, thereby unburdening vulnerable public health systems and democratizing curative medicine across emerging societies.<br><br><b>[3]</b> On the other hand, skeptics, clinical researchers, and bioethicists urge extreme vigilance and advocate stringent international prohibitions. First, the technical hazards of off-target mutations—where molecular scissors inadvertently excise essential non-targeted DNA sequences—remain dangerously unpredictable, creating irreversible chromosomal anomalies that would be perpetually transmitted to subsequent generations. Second, sociologists warn against the insidious slide from curative gene therapy toward cosmetic enhancement and neo-eugenics. If wealthy demographics are permitted to commercialize genetic optimization—such as engineering cognitive faculties, athletic stamina, or aesthetic traits—the inevitable result will be the emergence of an entrenched biological caste system, where preexisting socioeconomic inequality transforms into unbridgeable biological stratification.<br><br><b>[4]</b> In synthesizing these divergent perspectives, the consensus among global bioethics commissions underscores that scientific capability must never be equated with moral justification. While somatic gene therapies should be accelerated to alleviate existing suffering, heritable germline modifications must remain governed by a strict multilateral moratorium until foolproof technical safety, transparent democratic accountability, and equitable global access can be guaranteed. Technological mastery must remain subordinate to ethical discernment, lest humanity inadvertently sacrifice its shared egalitarian dignity in the reckless pursuit of genetic perfection.`,
      readingRef: "Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      prompt: "Based on paragraph 3, what technical hazard distinguishes germline gene alterations from conventional pharmaceutical treatments?",
      options: [
        { key: "A", text: "Off-target genetic mutations become irreversible and are permanently transmitted to all future offspring." },
        { key: "B", text: "Germline editing can only be conducted using toxic synthetic petroleum solvents." },
        { key: "C", text: "CRISPR molecular enzymes dissolve immediately upon entering blood vessels without causing any effect." },
        { key: "D", text: "Somatic therapies require daily intravenous injections for the remainder of a patient's lifespan." }
      ],
      correctAnswer: "A",
      explanation: "Bahaya teknis spesifik penyuntingan sel nutfah adalah bahwa kesalahan penyuntingan di luar target (off-target mutations) bersifat permanen dan tak dapat ditarik kembali, serta akan diwariskan ke seluruh keturunan pasien di masa depan.",
      grammarNote: "Relative Clauses with Modal Meaning: 'mutations that become irreversible and are transmitted to offspring'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 17,
      source: "Sumber: The Lancet Bioethics & Cambridge Journal of Healthcare Ethics & Kemendikbudristek",
      type: "reading_discussion",
      title: "Advanced Reading 1: Discussion Text Analysis",
      stimulusTitle: "Text 1: Advanced Discussion — Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      stimulusBody: `<b>[1]</b> The revolutionary advent of CRISPR-Cas9 base-editing biotechnology has propelled human civilization toward an unprecedented biomedical frontier. For the first time in evolutionary history, scientists possess molecular precision tools capable not merely of treating symptomatic pathologies in adult tissues, but of directly altering the heritable genetic architecture of human gametes and pre-implantation embryos. However, this profound scientific breakthrough has ignited a worldwide bioethical debate, sharply polarizing geneticists, clinicians, sociologists, and international policymakers.<br><br><b>[2]</b> On the one hand, proponents of germline gene editing put forward compelling humanitarian and economic justifications. Advocates emphasize that heritable genomic editing offers a curative horizon for thousands of debilitating monogenic disorders—such as Huntington's chorea, beta-thalassemia, and cystic fibrosis—which have inflicted intergenerational agony upon countless families. By permanently repairing deleterious mutations at the single-cell embryonic stage, humanity could entirely eliminate these lethal hereditary conditions from ancestral lineages. Furthermore, healthcare economists argue that eradicating chronic congenital illnesses would alleviate trillions of dollars in lifelong palliative care expenditures, thereby unburdening vulnerable public health systems and democratizing curative medicine across emerging societies.<br><br><b>[3]</b> On the other hand, skeptics, clinical researchers, and bioethicists urge extreme vigilance and advocate stringent international prohibitions. First, the technical hazards of off-target mutations—where molecular scissors inadvertently excise essential non-targeted DNA sequences—remain dangerously unpredictable, creating irreversible chromosomal anomalies that would be perpetually transmitted to subsequent generations. Second, sociologists warn against the insidious slide from curative gene therapy toward cosmetic enhancement and neo-eugenics. If wealthy demographics are permitted to commercialize genetic optimization—such as engineering cognitive faculties, athletic stamina, or aesthetic traits—the inevitable result will be the emergence of an entrenched biological caste system, where preexisting socioeconomic inequality transforms into unbridgeable biological stratification.<br><br><b>[4]</b> In synthesizing these divergent perspectives, the consensus among global bioethics commissions underscores that scientific capability must never be equated with moral justification. While somatic gene therapies should be accelerated to alleviate existing suffering, heritable germline modifications must remain governed by a strict multilateral moratorium until foolproof technical safety, transparent democratic accountability, and equitable global access can be guaranteed. Technological mastery must remain subordinate to ethical discernment, lest humanity inadvertently sacrifice its shared egalitarian dignity in the reckless pursuit of genetic perfection.`,
      readingRef: "Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      prompt: "In paragraph 4, what essential policy boundary does the author recommend to resolve the controversy?",
      options: [
        { key: "A", text: "Drawing a strict regulatory line between therapeutic somatic corrections and non-therapeutic germline enhancements under multilateral supervision." },
        { key: "B", text: "Permitting unregulated commercial competition among private biotechnology firms worldwide." },
        { key: "C", text: "Banning all medical treatments that utilize digital computer algorithms or robotic assistance." },
        { key: "D", text: "Mandating that every citizen undergo compulsory genetic modification before reaching adulthood." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 4 merekomendasikan batas kebijakan yang tegas: memisahkan terapi koreksi somatik untuk penyembuhan penyakit dari penyuntingan peningkatan (enhancement) sel nutfah, di bawah pengawasan multilateral yang ketat.",
      grammarNote: "Drawing Distinctions in Policy Discourse: 'drawing a strict regulatory line between... and...'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 18,
      source: "Sumber: The Lancet Bioethics & Cambridge Journal of Healthcare Ethics & Kemendikbudristek",
      type: "reading_discussion",
      title: "Advanced Reading 1: Discussion Text Analysis",
      stimulusTitle: "Text 1: Advanced Discussion — Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      stimulusBody: `<b>[1]</b> The revolutionary advent of CRISPR-Cas9 base-editing biotechnology has propelled human civilization toward an unprecedented biomedical frontier. For the first time in evolutionary history, scientists possess molecular precision tools capable not merely of treating symptomatic pathologies in adult tissues, but of directly altering the heritable genetic architecture of human gametes and pre-implantation embryos. However, this profound scientific breakthrough has ignited a worldwide bioethical debate, sharply polarizing geneticists, clinicians, sociologists, and international policymakers.<br><br><b>[2]</b> On the one hand, proponents of germline gene editing put forward compelling humanitarian and economic justifications. Advocates emphasize that heritable genomic editing offers a curative horizon for thousands of debilitating monogenic disorders—such as Huntington's chorea, beta-thalassemia, and cystic fibrosis—which have inflicted intergenerational agony upon countless families. By permanently repairing deleterious mutations at the single-cell embryonic stage, humanity could entirely eliminate these lethal hereditary conditions from ancestral lineages. Furthermore, healthcare economists argue that eradicating chronic congenital illnesses would alleviate trillions of dollars in lifelong palliative care expenditures, thereby unburdening vulnerable public health systems and democratizing curative medicine across emerging societies.<br><br><b>[3]</b> On the other hand, skeptics, clinical researchers, and bioethicists urge extreme vigilance and advocate stringent international prohibitions. First, the technical hazards of off-target mutations—where molecular scissors inadvertently excise essential non-targeted DNA sequences—remain dangerously unpredictable, creating irreversible chromosomal anomalies that would be perpetually transmitted to subsequent generations. Second, sociologists warn against the insidious slide from curative gene therapy toward cosmetic enhancement and neo-eugenics. If wealthy demographics are permitted to commercialize genetic optimization—such as engineering cognitive faculties, athletic stamina, or aesthetic traits—the inevitable result will be the emergence of an entrenched biological caste system, where preexisting socioeconomic inequality transforms into unbridgeable biological stratification.<br><br><b>[4]</b> In synthesizing these divergent perspectives, the consensus among global bioethics commissions underscores that scientific capability must never be equated with moral justification. While somatic gene therapies should be accelerated to alleviate existing suffering, heritable germline modifications must remain governed by a strict multilateral moratorium until foolproof technical safety, transparent democratic accountability, and equitable global access can be guaranteed. Technological mastery must remain subordinate to ethical discernment, lest humanity inadvertently sacrifice its shared egalitarian dignity in the reckless pursuit of genetic perfection.`,
      readingRef: "Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      prompt: "Which pair of adjectives most accurately reflects the author's authorial stance and tone throughout the discussion text?",
      options: [
        { key: "A", text: "Objective, analytical, and ethically prudent." },
        { key: "B", text: "Sensationalist, alarmist, and scientifically uninformed." },
        { key: "C", text: "Apathetic, indifferent, and commercially biased." },
        { key: "D", text: "Dogmatic, belligerent, and anti-technological." }
      ],
      correctAnswer: "A",
      explanation: "Sikap dan nada penulis objektif (menghargai fakta sains), analitis (menimbang dua kutub perspektif), dan bijaksana secara etis ('ethically prudent') dalam merumuskan kesimpulan kebijakan.",
      grammarNote: "Authorial Tone & Epistemic Stance: 'objective, analytical, and prudent'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 19,
      source: "Sumber: The Lancet Bioethics & Cambridge Journal of Healthcare Ethics & Kemendikbudristek",
      type: "reading_discussion",
      title: "Advanced Reading 1: Discussion Text Analysis",
      stimulusTitle: "Text 1: Advanced Discussion — Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      stimulusBody: `<b>[1]</b> The revolutionary advent of CRISPR-Cas9 base-editing biotechnology has propelled human civilization toward an unprecedented biomedical frontier. For the first time in evolutionary history, scientists possess molecular precision tools capable not merely of treating symptomatic pathologies in adult tissues, but of directly altering the heritable genetic architecture of human gametes and pre-implantation embryos. However, this profound scientific breakthrough has ignited a worldwide bioethical debate, sharply polarizing geneticists, clinicians, sociologists, and international policymakers.<br><br><b>[2]</b> On the one hand, proponents of germline gene editing put forward compelling humanitarian and economic justifications. Advocates emphasize that heritable genomic editing offers a curative horizon for thousands of debilitating monogenic disorders—such as Huntington's chorea, beta-thalassemia, and cystic fibrosis—which have inflicted intergenerational agony upon countless families. By permanently repairing deleterious mutations at the single-cell embryonic stage, humanity could entirely eliminate these lethal hereditary conditions from ancestral lineages. Furthermore, healthcare economists argue that eradicating chronic congenital illnesses would alleviate trillions of dollars in lifelong palliative care expenditures, thereby unburdening vulnerable public health systems and democratizing curative medicine across emerging societies.<br><br><b>[3]</b> On the other hand, skeptics, clinical researchers, and bioethicists urge extreme vigilance and advocate stringent international prohibitions. First, the technical hazards of off-target mutations—where molecular scissors inadvertently excise essential non-targeted DNA sequences—remain dangerously unpredictable, creating irreversible chromosomal anomalies that would be perpetually transmitted to subsequent generations. Second, sociologists warn against the insidious slide from curative gene therapy toward cosmetic enhancement and neo-eugenics. If wealthy demographics are permitted to commercialize genetic optimization—such as engineering cognitive faculties, athletic stamina, or aesthetic traits—the inevitable result will be the emergence of an entrenched biological caste system, where preexisting socioeconomic inequality transforms into unbridgeable biological stratification.<br><br><b>[4]</b> In synthesizing these divergent perspectives, the consensus among global bioethics commissions underscores that scientific capability must never be equated with moral justification. While somatic gene therapies should be accelerated to alleviate existing suffering, heritable germline modifications must remain governed by a strict multilateral moratorium until foolproof technical safety, transparent democratic accountability, and equitable global access can be guaranteed. Technological mastery must remain subordinate to ethical discernment, lest humanity inadvertently sacrifice its shared egalitarian dignity in the reckless pursuit of genetic perfection.`,
      readingRef: "Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      prompt: "According to paragraph 2, how does germline editing promise economic relief to national healthcare systems?",
      options: [
        { key: "A", text: "By eliminating lifelong palliative care expenditures associated with severe chronic genetic conditions." },
        { key: "B", text: "By enabling hospitals to dismiss all registered nurses and administrative staff." },
        { key: "C", text: "By generating immense tax windfalls from exporting human embryos to foreign sovereign states." },
        { key: "D", text: "By replacing all public healthcare infrastructure with speculative cryptocurrency investments." }
      ],
      correctAnswer: "A",
      explanation: "Pencegahan penyakit turunan sejak awal menghilangkan biaya perawatan paliatif seumur hidup yang sangat membebani sistem jaminan kesehatan publik nasional ('eliminating lifelong palliative care expenditures').",
      grammarNote: "Prepositional Phrases of Means: 'By eliminating lifelong palliative care expenditures'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 20,
      source: "Sumber: The Lancet Bioethics & Cambridge Journal of Healthcare Ethics & Kemendikbudristek",
      type: "reading_discussion",
      title: "Advanced Reading 1: Discussion Text Analysis",
      stimulusTitle: "Text 1: Advanced Discussion — Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      stimulusBody: `<b>[1]</b> The revolutionary advent of CRISPR-Cas9 base-editing biotechnology has propelled human civilization toward an unprecedented biomedical frontier. For the first time in evolutionary history, scientists possess molecular precision tools capable not merely of treating symptomatic pathologies in adult tissues, but of directly altering the heritable genetic architecture of human gametes and pre-implantation embryos. However, this profound scientific breakthrough has ignited a worldwide bioethical debate, sharply polarizing geneticists, clinicians, sociologists, and international policymakers.<br><br><b>[2]</b> On the one hand, proponents of germline gene editing put forward compelling humanitarian and economic justifications. Advocates emphasize that heritable genomic editing offers a curative horizon for thousands of debilitating monogenic disorders—such as Huntington's chorea, beta-thalassemia, and cystic fibrosis—which have inflicted intergenerational agony upon countless families. By permanently repairing deleterious mutations at the single-cell embryonic stage, humanity could entirely eliminate these lethal hereditary conditions from ancestral lineages. Furthermore, healthcare economists argue that eradicating chronic congenital illnesses would alleviate trillions of dollars in lifelong palliative care expenditures, thereby unburdening vulnerable public health systems and democratizing curative medicine across emerging societies.<br><br><b>[3]</b> On the other hand, skeptics, clinical researchers, and bioethicists urge extreme vigilance and advocate stringent international prohibitions. First, the technical hazards of off-target mutations—where molecular scissors inadvertently excise essential non-targeted DNA sequences—remain dangerously unpredictable, creating irreversible chromosomal anomalies that would be perpetually transmitted to subsequent generations. Second, sociologists warn against the insidious slide from curative gene therapy toward cosmetic enhancement and neo-eugenics. If wealthy demographics are permitted to commercialize genetic optimization—such as engineering cognitive faculties, athletic stamina, or aesthetic traits—the inevitable result will be the emergence of an entrenched biological caste system, where preexisting socioeconomic inequality transforms into unbridgeable biological stratification.<br><br><b>[4]</b> In synthesizing these divergent perspectives, the consensus among global bioethics commissions underscores that scientific capability must never be equated with moral justification. While somatic gene therapies should be accelerated to alleviate existing suffering, heritable germline modifications must remain governed by a strict multilateral moratorium until foolproof technical safety, transparent democratic accountability, and equitable global access can be guaranteed. Technological mastery must remain subordinate to ethical discernment, lest humanity inadvertently sacrifice its shared egalitarian dignity in the reckless pursuit of genetic perfection.`,
      readingRef: "Human Germline Gene Editing: The Frontier of Preventive Medicine or the Precipice of Genetic Caste Inequity?",
      prompt: "What philosophical warning is encapsulated in the concluding sentence of the text?",
      options: [
        { key: "A", text: "Technological mastery must remain subordinate to ethical discernment, lest humanity inadvertently sacrifice its shared egalitarian dignity." },
        { key: "B", text: "Commercial profits must dictate the trajectory of scientific discovery without legislative interference." },
        { key: "C", text: "Human nature is fundamentally flawed and should be entirely redesigned by autonomous computational neural models." },
        { key: "D", text: "Medical research should cease completely to ensure that nature remains untouched by human knowledge." }
      ],
      correctAnswer: "A",
      explanation: "Kalimat penutup mengingatkan bahwa kemajuan teknologi harus tunduk pada pertimbangan etika luhur agar umat manusia tidak kehilangan martabat kemanusiaan dan nilai kesetaraan bersama.",
      grammarNote: "Negative Purpose Clauses with 'lest': 'lest humanity inadvertently sacrifice its shared dignity'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 21,
      source: "Sumber: The Jakarta Post Literary Review, Modern Asian Studies — Cambridge University Press & Kemendikbudristek",
      type: "reading_review",
      title: "Advanced Reading 2: Critical Literary Review",
      stimulusTitle: "Text 2: Critical Literary Review — Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      stimulusBody: `<b>[1]</b> Written orally under harrowing conditions of political imprisonment on the remote penal colony of Buru Island and first published in Jakarta in 1980, Pramoedya Ananta Toer's <i>This Earth of Mankind</i> (<i>Bumi Manusia</i>) stands as the undisputed monumental epic of modern Indonesian literature. As the opening volume of the celebrated Buru Quartet, the novel chronicles the intellectual and political coming-of-age of Minke, a brilliant aristocratic Javanese youth admitted to the prestigious Dutch-medium H.B.S. (Hogere Burgerschool) in Surabaya at the twilight of the nineteenth century.<br><br><b>[2]</b> The narrative engine is ignited when Minke enters the magnetic orbit of Boerderij Buitenzorg in Wonokromo, where he falls profoundly in love with the fragile Indo-European Annelies Mellema. However, the emotional and intellectual epicenter of the novel is unequivocally Annelies's mother, Nyai Ontosoroh (born Sanikem). Sold into concubinage at fourteen by an ambitious father eager for colonial bureaucratic promotion, Sanikem refuses the passive victimization prescribed by feudal Javanese and colonial Dutch patriarchies. Through relentless autodidactic rigor, she masters Dutch civil jurisprudence, commercial accounting, and modern agricultural estate management, governing the prosperous plantation far more sagaciously than its dissolute European patriarch. Yet, when Dutch colonial courts ruthlessly annul her de facto marriage and declare her indigenous parenthood legally void under the discriminatory <i>Wetboek van Strafrecht</i>, the novel delivers an unrelenting indictment of European colonial law as a racist apparatus engineered solely to confiscate native wealth and subjugate indigenous sovereignty.<br><br><b>[3]</b> Stylistically, Pramoedya achieves an extraordinary synthesis of historical realism, socio-political critique, and epic lyricism. Minke's psychological evolution—from an uncritical admirer of Dutch scientific rationality to a defiant vernacular journalist mobilizing public conscience through the printing press—mirrors the painful birth of Indonesian national consciousness. If a minor aesthetic flaw may be noted, the early romantic dialogues between Minke and Annelies occasionally border on nineteenth-century European melodrama. Nevertheless, this sentimental cadence is swiftly dismantled by the brutal reality of colonial state violence, culminating in Nyai Ontosoroh's unforgettable, defiant declaration of moral victory: <i>'We have fought back, Child, with all our might, as honorably as we could.'</i><br><br><b>[4]</b> Ultimately, <i>This Earth of Mankind</i> is far more than an anti-colonial historical period piece; it is an enduring meditation on human dignity, the hypocrisy of imperialist legalism, and the transformative power of literacy against systemic tyranny. Pramoedya's unflinching gaze into the mechanisms of colonial hegemony renders this masterpiece indispensable reading for secondary school scholars of world literature, post-colonial history, and human rights.`,
      readingRef: "Literary Review: Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      prompt: "What is the primary communicative purpose of the literary review above?",
      options: [
        { key: "A", text: "To evaluate the thematic depth, stylistic prowess, historical significance, and critical impact of Pramoedya's 'This Earth of Mankind'." },
        { key: "B", text: "To provide a verbatim chronological summary of every chapter in the Buru Quartet novels." },
        { key: "C", text: "To draft a commercial advertisement promoting the sales of antique Dutch colonial furniture." },
        { key: "D", text: "To condemn the protagonist Minke for choosing journalism over a colonial administrative career." }
      ],
      correctAnswer: "A",
      explanation: "Tujuan komunikatif teks ulasan (Review Text) adalah mengevaluasi keunggulan tematik, kekuatan gaya bahasa, nilai sejarah, serta dampak kritis dari karya sastra mahakarya Pramoedya Ananta Toer.",
      grammarNote: "Communicative Function of Critical Literary Review: Evaluative critique of a literary artwork."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 22,
      source: "Sumber: The Jakarta Post Literary Review, Modern Asian Studies — Cambridge University Press & Kemendikbudristek",
      type: "reading_review",
      title: "Advanced Reading 2: Critical Literary Review",
      stimulusTitle: "Text 2: Critical Literary Review — Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      stimulusBody: `<b>[1]</b> Written orally under harrowing conditions of political imprisonment on the remote penal colony of Buru Island and first published in Jakarta in 1980, Pramoedya Ananta Toer's <i>This Earth of Mankind</i> (<i>Bumi Manusia</i>) stands as the undisputed monumental epic of modern Indonesian literature. As the opening volume of the celebrated Buru Quartet, the novel chronicles the intellectual and political coming-of-age of Minke, a brilliant aristocratic Javanese youth admitted to the prestigious Dutch-medium H.B.S. (Hogere Burgerschool) in Surabaya at the twilight of the nineteenth century.<br><br><b>[2]</b> The narrative engine is ignited when Minke enters the magnetic orbit of Boerderij Buitenzorg in Wonokromo, where he falls profoundly in love with the fragile Indo-European Annelies Mellema. However, the emotional and intellectual epicenter of the novel is unequivocally Annelies's mother, Nyai Ontosoroh (born Sanikem). Sold into concubinage at fourteen by an ambitious father eager for colonial bureaucratic promotion, Sanikem refuses the passive victimization prescribed by feudal Javanese and colonial Dutch patriarchies. Through relentless autodidactic rigor, she masters Dutch civil jurisprudence, commercial accounting, and modern agricultural estate management, governing the prosperous plantation far more sagaciously than its dissolute European patriarch. Yet, when Dutch colonial courts ruthlessly annul her de facto marriage and declare her indigenous parenthood legally void under the discriminatory <i>Wetboek van Strafrecht</i>, the novel delivers an unrelenting indictment of European colonial law as a racist apparatus engineered solely to confiscate native wealth and subjugate indigenous sovereignty.<br><br><b>[3]</b> Stylistically, Pramoedya achieves an extraordinary synthesis of historical realism, socio-political critique, and epic lyricism. Minke's psychological evolution—from an uncritical admirer of Dutch scientific rationality to a defiant vernacular journalist mobilizing public conscience through the printing press—mirrors the painful birth of Indonesian national consciousness. If a minor aesthetic flaw may be noted, the early romantic dialogues between Minke and Annelies occasionally border on nineteenth-century European melodrama. Nevertheless, this sentimental cadence is swiftly dismantled by the brutal reality of colonial state violence, culminating in Nyai Ontosoroh's unforgettable, defiant declaration of moral victory: <i>'We have fought back, Child, with all our might, as honorably as we could.'</i><br><br><b>[4]</b> Ultimately, <i>This Earth of Mankind</i> is far more than an anti-colonial historical period piece; it is an enduring meditation on human dignity, the hypocrisy of imperialist legalism, and the transformative power of literacy against systemic tyranny. Pramoedya's unflinching gaze into the mechanisms of colonial hegemony renders this masterpiece indispensable reading for secondary school scholars of world literature, post-colonial history, and human rights.`,
      readingRef: "Literary Review: Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      prompt: "In paragraph 1, what historical circumstance surrounding the novel's genesis does the reviewer emphasize?",
      options: [
        { key: "A", text: "It was composed orally while the author was imprisoned as a political exile on the remote penal island of Buru." },
        { key: "B", text: "It was commissioned as a promotional pamphlet by the Dutch colonial governor-general in 1898." },
        { key: "C", text: "It was written entirely in modern digital word-processing software during a fellowship at Leiden University." },
        { key: "D", text: "It was compiled anonymously by an underground guild of Surabayan textile merchants." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 1 menonjolkan genesis penulisan karya: Pramoedya merangkainya secara lisan kepada sesama tahanan politik di pengasingan Pulau Buru sebelum akhirnya berhasil dituangkan dalam bentuk naskah cetak.",
      grammarNote: "Passive Voice in Historical Narration: 'It was composed orally while the author was imprisoned as a political exile'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 23,
      source: "Sumber: The Jakarta Post Literary Review, Modern Asian Studies — Cambridge University Press & Kemendikbudristek",
      type: "reading_review",
      title: "Advanced Reading 2: Critical Literary Review",
      stimulusTitle: "Text 2: Critical Literary Review — Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      stimulusBody: `<b>[1]</b> Written orally under harrowing conditions of political imprisonment on the remote penal colony of Buru Island and first published in Jakarta in 1980, Pramoedya Ananta Toer's <i>This Earth of Mankind</i> (<i>Bumi Manusia</i>) stands as the undisputed monumental epic of modern Indonesian literature. As the opening volume of the celebrated Buru Quartet, the novel chronicles the intellectual and political coming-of-age of Minke, a brilliant aristocratic Javanese youth admitted to the prestigious Dutch-medium H.B.S. (Hogere Burgerschool) in Surabaya at the twilight of the nineteenth century.<br><br><b>[2]</b> The narrative engine is ignited when Minke enters the magnetic orbit of Boerderij Buitenzorg in Wonokromo, where he falls profoundly in love with the fragile Indo-European Annelies Mellema. However, the emotional and intellectual epicenter of the novel is unequivocally Annelies's mother, Nyai Ontosoroh (born Sanikem). Sold into concubinage at fourteen by an ambitious father eager for colonial bureaucratic promotion, Sanikem refuses the passive victimization prescribed by feudal Javanese and colonial Dutch patriarchies. Through relentless autodidactic rigor, she masters Dutch civil jurisprudence, commercial accounting, and modern agricultural estate management, governing the prosperous plantation far more sagaciously than its dissolute European patriarch. Yet, when Dutch colonial courts ruthlessly annul her de facto marriage and declare her indigenous parenthood legally void under the discriminatory <i>Wetboek van Strafrecht</i>, the novel delivers an unrelenting indictment of European colonial law as a racist apparatus engineered solely to confiscate native wealth and subjugate indigenous sovereignty.<br><br><b>[3]</b> Stylistically, Pramoedya achieves an extraordinary synthesis of historical realism, socio-political critique, and epic lyricism. Minke's psychological evolution—from an uncritical admirer of Dutch scientific rationality to a defiant vernacular journalist mobilizing public conscience through the printing press—mirrors the painful birth of Indonesian national consciousness. If a minor aesthetic flaw may be noted, the early romantic dialogues between Minke and Annelies occasionally border on nineteenth-century European melodrama. Nevertheless, this sentimental cadence is swiftly dismantled by the brutal reality of colonial state violence, culminating in Nyai Ontosoroh's unforgettable, defiant declaration of moral victory: <i>'We have fought back, Child, with all our might, as honorably as we could.'</i><br><br><b>[4]</b> Ultimately, <i>This Earth of Mankind</i> is far more than an anti-colonial historical period piece; it is an enduring meditation on human dignity, the hypocrisy of imperialist legalism, and the transformative power of literacy against systemic tyranny. Pramoedya's unflinching gaze into the mechanisms of colonial hegemony renders this masterpiece indispensable reading for secondary school scholars of world literature, post-colonial history, and human rights.`,
      readingRef: "Literary Review: Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      prompt: "According to paragraph 2, how does Nyai Ontosoroh embody a profound subversion of Dutch colonial authority?",
      options: [
        { key: "A", text: "Despite her legally degraded status as a concubine, her self-taught intellectual mastery and moral fortitude eclipse the European elite." },
        { key: "B", text: "She collaborates with colonial judges to disenfranchise indigenous Javanese peasants." },
        { key: "C", text: "She surrenders all family inheritance without asserting any legal or ethical resistance." },
        { key: "D", text: "She orchestrates a maritime smuggling cartel operating throughout the Malacca Strait." }
      ],
      correctAnswer: "A",
      explanation: "Paragraf 2 melukiskan bagaimana Nyai Ontosoroh mematahkan otoritas kolonial: meski status hukumnya direndahkan sebagai gundik ('njai'), kecerdasan otodidaknya dan keteguhan moralnya melampaui para elit Eropa penjajah.",
      grammarNote: "Concessive Prepositional Phrases: 'Despite her legally degraded status... her intellectual mastery eclipses the elite'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 24,
      source: "Sumber: The Jakarta Post Literary Review, Modern Asian Studies — Cambridge University Press & Kemendikbudristek",
      type: "reading_review",
      title: "Advanced Reading 2: Critical Literary Review",
      stimulusTitle: "Text 2: Critical Literary Review — Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      stimulusBody: `<b>[1]</b> Written orally under harrowing conditions of political imprisonment on the remote penal colony of Buru Island and first published in Jakarta in 1980, Pramoedya Ananta Toer's <i>This Earth of Mankind</i> (<i>Bumi Manusia</i>) stands as the undisputed monumental epic of modern Indonesian literature. As the opening volume of the celebrated Buru Quartet, the novel chronicles the intellectual and political coming-of-age of Minke, a brilliant aristocratic Javanese youth admitted to the prestigious Dutch-medium H.B.S. (Hogere Burgerschool) in Surabaya at the twilight of the nineteenth century.<br><br><b>[2]</b> The narrative engine is ignited when Minke enters the magnetic orbit of Boerderij Buitenzorg in Wonokromo, where he falls profoundly in love with the fragile Indo-European Annelies Mellema. However, the emotional and intellectual epicenter of the novel is unequivocally Annelies's mother, Nyai Ontosoroh (born Sanikem). Sold into concubinage at fourteen by an ambitious father eager for colonial bureaucratic promotion, Sanikem refuses the passive victimization prescribed by feudal Javanese and colonial Dutch patriarchies. Through relentless autodidactic rigor, she masters Dutch civil jurisprudence, commercial accounting, and modern agricultural estate management, governing the prosperous plantation far more sagaciously than its dissolute European patriarch. Yet, when Dutch colonial courts ruthlessly annul her de facto marriage and declare her indigenous parenthood legally void under the discriminatory <i>Wetboek van Strafrecht</i>, the novel delivers an unrelenting indictment of European colonial law as a racist apparatus engineered solely to confiscate native wealth and subjugate indigenous sovereignty.<br><br><b>[3]</b> Stylistically, Pramoedya achieves an extraordinary synthesis of historical realism, socio-political critique, and epic lyricism. Minke's psychological evolution—from an uncritical admirer of Dutch scientific rationality to a defiant vernacular journalist mobilizing public conscience through the printing press—mirrors the painful birth of Indonesian national consciousness. If a minor aesthetic flaw may be noted, the early romantic dialogues between Minke and Annelies occasionally border on nineteenth-century European melodrama. Nevertheless, this sentimental cadence is swiftly dismantled by the brutal reality of colonial state violence, culminating in Nyai Ontosoroh's unforgettable, defiant declaration of moral victory: <i>'We have fought back, Child, with all our might, as honorably as we could.'</i><br><br><b>[4]</b> Ultimately, <i>This Earth of Mankind</i> is far more than an anti-colonial historical period piece; it is an enduring meditation on human dignity, the hypocrisy of imperialist legalism, and the transformative power of literacy against systemic tyranny. Pramoedya's unflinching gaze into the mechanisms of colonial hegemony renders this masterpiece indispensable reading for secondary school scholars of world literature, post-colonial history, and human rights.`,
      readingRef: "Literary Review: Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      prompt: "The word 'crucible' in the review's title and text metaphorically signifies:",
      options: [
        { key: "A", text: "a severe, transformative test in which disparate forces interact to forge a resilient new consciousness" },
        { key: "B", text: "a decorative ceramic vase placed on colonial drawing room tables" },
        { key: "C", text: "a legal document formalizing the sale of agricultural livestock" },
        { key: "D", text: "an obsolete military cannon used in coastal artillery defense" }
      ],
      correctAnswer: "A",
      explanation: "'Crucible' (kawah candradimuka / peleburan yang keras) secara metaforis bermakna ujian berat yang mentransformasi dan mematangkan kesadaran kritis serta watak perjuangan baru.",
      grammarNote: "Metaphorical Extension in Literary Analysis: 'Crucible of Awakening'."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 25,
      source: "Sumber: The Jakarta Post Literary Review, Modern Asian Studies — Cambridge University Press & Kemendikbudristek",
      type: "reading_review",
      title: "Advanced Reading 2: Critical Literary Review",
      stimulusTitle: "Text 2: Critical Literary Review — Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      stimulusBody: `<b>[1]</b> Written orally under harrowing conditions of political imprisonment on the remote penal colony of Buru Island and first published in Jakarta in 1980, Pramoedya Ananta Toer's <i>This Earth of Mankind</i> (<i>Bumi Manusia</i>) stands as the undisputed monumental epic of modern Indonesian literature. As the opening volume of the celebrated Buru Quartet, the novel chronicles the intellectual and political coming-of-age of Minke, a brilliant aristocratic Javanese youth admitted to the prestigious Dutch-medium H.B.S. (Hogere Burgerschool) in Surabaya at the twilight of the nineteenth century.<br><br><b>[2]</b> The narrative engine is ignited when Minke enters the magnetic orbit of Boerderij Buitenzorg in Wonokromo, where he falls profoundly in love with the fragile Indo-European Annelies Mellema. However, the emotional and intellectual epicenter of the novel is unequivocally Annelies's mother, Nyai Ontosoroh (born Sanikem). Sold into concubinage at fourteen by an ambitious father eager for colonial bureaucratic promotion, Sanikem refuses the passive victimization prescribed by feudal Javanese and colonial Dutch patriarchies. Through relentless autodidactic rigor, she masters Dutch civil jurisprudence, commercial accounting, and modern agricultural estate management, governing the prosperous plantation far more sagaciously than its dissolute European patriarch. Yet, when Dutch colonial courts ruthlessly annul her de facto marriage and declare her indigenous parenthood legally void under the discriminatory <i>Wetboek van Strafrecht</i>, the novel delivers an unrelenting indictment of European colonial law as a racist apparatus engineered solely to confiscate native wealth and subjugate indigenous sovereignty.<br><br><b>[3]</b> Stylistically, Pramoedya achieves an extraordinary synthesis of historical realism, socio-political critique, and epic lyricism. Minke's psychological evolution—from an uncritical admirer of Dutch scientific rationality to a defiant vernacular journalist mobilizing public conscience through the printing press—mirrors the painful birth of Indonesian national consciousness. If a minor aesthetic flaw may be noted, the early romantic dialogues between Minke and Annelies occasionally border on nineteenth-century European melodrama. Nevertheless, this sentimental cadence is swiftly dismantled by the brutal reality of colonial state violence, culminating in Nyai Ontosoroh's unforgettable, defiant declaration of moral victory: <i>'We have fought back, Child, with all our might, as honorably as we could.'</i><br><br><b>[4]</b> Ultimately, <i>This Earth of Mankind</i> is far more than an anti-colonial historical period piece; it is an enduring meditation on human dignity, the hypocrisy of imperialist legalism, and the transformative power of literacy against systemic tyranny. Pramoedya's unflinching gaze into the mechanisms of colonial hegemony renders this masterpiece indispensable reading for secondary school scholars of world literature, post-colonial history, and human rights.`,
      readingRef: "Literary Review: Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      prompt: "In paragraph 3, what minor aesthetic flaw does the reviewer critically identify in the novel's initial chapters?",
      options: [
        { key: "A", text: "Occasional melodrama and sentimentality in the romantic interactions between Minke and Annelies." },
        { key: "B", text: "A total lack of historical authenticity regarding early twentieth-century Javanese society." },
        { key: "C", text: "Unbearably tedious technical expositions detailing botanical irrigation methods." },
        { key: "D", text: "The complete absence of dialogue among secondary characters in the plantation." }
      ],
      correctAnswer: "A",
      explanation: "Ciri khas ulasan yang objektif adalah mengidentifikasi kelemahan minor karya: pengulas mencatat adanya sedikit melodrama dan sentimen berlebihan pada kisah romansa Minke dan Annelies di bab-bab awal.",
      grammarNote: "Nuanced Critical Appraisal: Balancing high commendation with constructive critique."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 26,
      source: "Sumber: The Jakarta Post Literary Review, Modern Asian Studies — Cambridge University Press & Kemendikbudristek",
      type: "reading_review",
      title: "Advanced Reading 2: Critical Literary Review",
      stimulusTitle: "Text 2: Critical Literary Review — Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      stimulusBody: `<b>[1]</b> Written orally under harrowing conditions of political imprisonment on the remote penal colony of Buru Island and first published in Jakarta in 1980, Pramoedya Ananta Toer's <i>This Earth of Mankind</i> (<i>Bumi Manusia</i>) stands as the undisputed monumental epic of modern Indonesian literature. As the opening volume of the celebrated Buru Quartet, the novel chronicles the intellectual and political coming-of-age of Minke, a brilliant aristocratic Javanese youth admitted to the prestigious Dutch-medium H.B.S. (Hogere Burgerschool) in Surabaya at the twilight of the nineteenth century.<br><br><b>[2]</b> The narrative engine is ignited when Minke enters the magnetic orbit of Boerderij Buitenzorg in Wonokromo, where he falls profoundly in love with the fragile Indo-European Annelies Mellema. However, the emotional and intellectual epicenter of the novel is unequivocally Annelies's mother, Nyai Ontosoroh (born Sanikem). Sold into concubinage at fourteen by an ambitious father eager for colonial bureaucratic promotion, Sanikem refuses the passive victimization prescribed by feudal Javanese and colonial Dutch patriarchies. Through relentless autodidactic rigor, she masters Dutch civil jurisprudence, commercial accounting, and modern agricultural estate management, governing the prosperous plantation far more sagaciously than its dissolute European patriarch. Yet, when Dutch colonial courts ruthlessly annul her de facto marriage and declare her indigenous parenthood legally void under the discriminatory <i>Wetboek van Strafrecht</i>, the novel delivers an unrelenting indictment of European colonial law as a racist apparatus engineered solely to confiscate native wealth and subjugate indigenous sovereignty.<br><br><b>[3]</b> Stylistically, Pramoedya achieves an extraordinary synthesis of historical realism, socio-political critique, and epic lyricism. Minke's psychological evolution—from an uncritical admirer of Dutch scientific rationality to a defiant vernacular journalist mobilizing public conscience through the printing press—mirrors the painful birth of Indonesian national consciousness. If a minor aesthetic flaw may be noted, the early romantic dialogues between Minke and Annelies occasionally border on nineteenth-century European melodrama. Nevertheless, this sentimental cadence is swiftly dismantled by the brutal reality of colonial state violence, culminating in Nyai Ontosoroh's unforgettable, defiant declaration of moral victory: <i>'We have fought back, Child, with all our might, as honorably as we could.'</i><br><br><b>[4]</b> Ultimately, <i>This Earth of Mankind</i> is far more than an anti-colonial historical period piece; it is an enduring meditation on human dignity, the hypocrisy of imperialist legalism, and the transformative power of literacy against systemic tyranny. Pramoedya's unflinching gaze into the mechanisms of colonial hegemony renders this masterpiece indispensable reading for secondary school scholars of world literature, post-colonial history, and human rights.`,
      readingRef: "Literary Review: Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      prompt: "According to paragraph 2, what does the tragic legal separation of Annelies from Minke and Nyai Ontosoroh represent politically?",
      options: [
        { key: "A", text: "An indictment of colonial jurisprudence that stripped indigenous mothers and customary unions of legal recognition." },
        { key: "B", text: "A triumph of modern progressive human rights over antiquated feudal traditions." },
        { key: "C", text: "A routine municipal administrative disagreement devoid of broader ideological consequences." },
        { key: "D", text: "A demonstration of Annelies's voluntary desire to abandon her Javanese upbringing." }
      ],
      correctAnswer: "A",
      explanation: "Pemisahan paksa Annelies oleh pengadilan kolonial Belanda merupakan dakwaan moral dan politik terhadap hukum kolonial yang menginjak-injak hak seorang ibu pribumi serta menolak keabsahan ikatan perkawinan adat.",
      grammarNote: "Evaluative Nominalization: 'an indictment of colonial jurisprudence'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 27,
      source: "Sumber: The Jakarta Post Literary Review, Modern Asian Studies — Cambridge University Press & Kemendikbudristek",
      type: "reading_review",
      title: "Advanced Reading 2: Critical Literary Review",
      stimulusTitle: "Text 2: Critical Literary Review — Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      stimulusBody: `<b>[1]</b> Written orally under harrowing conditions of political imprisonment on the remote penal colony of Buru Island and first published in Jakarta in 1980, Pramoedya Ananta Toer's <i>This Earth of Mankind</i> (<i>Bumi Manusia</i>) stands as the undisputed monumental epic of modern Indonesian literature. As the opening volume of the celebrated Buru Quartet, the novel chronicles the intellectual and political coming-of-age of Minke, a brilliant aristocratic Javanese youth admitted to the prestigious Dutch-medium H.B.S. (Hogere Burgerschool) in Surabaya at the twilight of the nineteenth century.<br><br><b>[2]</b> The narrative engine is ignited when Minke enters the magnetic orbit of Boerderij Buitenzorg in Wonokromo, where he falls profoundly in love with the fragile Indo-European Annelies Mellema. However, the emotional and intellectual epicenter of the novel is unequivocally Annelies's mother, Nyai Ontosoroh (born Sanikem). Sold into concubinage at fourteen by an ambitious father eager for colonial bureaucratic promotion, Sanikem refuses the passive victimization prescribed by feudal Javanese and colonial Dutch patriarchies. Through relentless autodidactic rigor, she masters Dutch civil jurisprudence, commercial accounting, and modern agricultural estate management, governing the prosperous plantation far more sagaciously than its dissolute European patriarch. Yet, when Dutch colonial courts ruthlessly annul her de facto marriage and declare her indigenous parenthood legally void under the discriminatory <i>Wetboek van Strafrecht</i>, the novel delivers an unrelenting indictment of European colonial law as a racist apparatus engineered solely to confiscate native wealth and subjugate indigenous sovereignty.<br><br><b>[3]</b> Stylistically, Pramoedya achieves an extraordinary synthesis of historical realism, socio-political critique, and epic lyricism. Minke's psychological evolution—from an uncritical admirer of Dutch scientific rationality to a defiant vernacular journalist mobilizing public conscience through the printing press—mirrors the painful birth of Indonesian national consciousness. If a minor aesthetic flaw may be noted, the early romantic dialogues between Minke and Annelies occasionally border on nineteenth-century European melodrama. Nevertheless, this sentimental cadence is swiftly dismantled by the brutal reality of colonial state violence, culminating in Nyai Ontosoroh's unforgettable, defiant declaration of moral victory: <i>'We have fought back, Child, with all our might, as honorably as we could.'</i><br><br><b>[4]</b> Ultimately, <i>This Earth of Mankind</i> is far more than an anti-colonial historical period piece; it is an enduring meditation on human dignity, the hypocrisy of imperialist legalism, and the transformative power of literacy against systemic tyranny. Pramoedya's unflinching gaze into the mechanisms of colonial hegemony renders this masterpiece indispensable reading for secondary school scholars of world literature, post-colonial history, and human rights.`,
      readingRef: "Literary Review: Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      prompt: "How does Minke's evolution as a writer throughout the narrative symbolize national awakening?",
      options: [
        { key: "A", text: "His shift from admiring Dutch imperial civilization to deploying vernacular journalism mirrors the nascent birth of Indonesian civic consciousness." },
        { key: "B", text: "His writing was strictly confined to translating European romantic poetry for private Dutch salons." },
        { key: "C", text: "He ceased composing essays to pursue a lucrative career as a sugar commodities speculator." },
        { key: "D", text: "He drafted administrative legal proclamations reinforcing Dutch racial caste legislation." }
      ],
      correctAnswer: "A",
      explanation: "Perjalanan intelektual Minke—dari kekaguman naif terhadap bangsa Belanda beralih menjadi jurnalisme pribumi yang membela martabat bangsanya—merefleksikan lahirnya kebangkitan nasional dan kesadaran sipil Indonesia modern.",
      grammarNote: "Symbolic Evolution in Characterization: 'shift from admiring imperial culture to deploying vernacular journalism'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 28,
      source: "Sumber: The Jakarta Post Literary Review, Modern Asian Studies — Cambridge University Press & Kemendikbudristek",
      type: "reading_review",
      title: "Advanced Reading 2: Critical Literary Review",
      stimulusTitle: "Text 2: Critical Literary Review — Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      stimulusBody: `<b>[1]</b> Written orally under harrowing conditions of political imprisonment on the remote penal colony of Buru Island and first published in Jakarta in 1980, Pramoedya Ananta Toer's <i>This Earth of Mankind</i> (<i>Bumi Manusia</i>) stands as the undisputed monumental epic of modern Indonesian literature. As the opening volume of the celebrated Buru Quartet, the novel chronicles the intellectual and political coming-of-age of Minke, a brilliant aristocratic Javanese youth admitted to the prestigious Dutch-medium H.B.S. (Hogere Burgerschool) in Surabaya at the twilight of the nineteenth century.<br><br><b>[2]</b> The narrative engine is ignited when Minke enters the magnetic orbit of Boerderij Buitenzorg in Wonokromo, where he falls profoundly in love with the fragile Indo-European Annelies Mellema. However, the emotional and intellectual epicenter of the novel is unequivocally Annelies's mother, Nyai Ontosoroh (born Sanikem). Sold into concubinage at fourteen by an ambitious father eager for colonial bureaucratic promotion, Sanikem refuses the passive victimization prescribed by feudal Javanese and colonial Dutch patriarchies. Through relentless autodidactic rigor, she masters Dutch civil jurisprudence, commercial accounting, and modern agricultural estate management, governing the prosperous plantation far more sagaciously than its dissolute European patriarch. Yet, when Dutch colonial courts ruthlessly annul her de facto marriage and declare her indigenous parenthood legally void under the discriminatory <i>Wetboek van Strafrecht</i>, the novel delivers an unrelenting indictment of European colonial law as a racist apparatus engineered solely to confiscate native wealth and subjugate indigenous sovereignty.<br><br><b>[3]</b> Stylistically, Pramoedya achieves an extraordinary synthesis of historical realism, socio-political critique, and epic lyricism. Minke's psychological evolution—from an uncritical admirer of Dutch scientific rationality to a defiant vernacular journalist mobilizing public conscience through the printing press—mirrors the painful birth of Indonesian national consciousness. If a minor aesthetic flaw may be noted, the early romantic dialogues between Minke and Annelies occasionally border on nineteenth-century European melodrama. Nevertheless, this sentimental cadence is swiftly dismantled by the brutal reality of colonial state violence, culminating in Nyai Ontosoroh's unforgettable, defiant declaration of moral victory: <i>'We have fought back, Child, with all our might, as honorably as we could.'</i><br><br><b>[4]</b> Ultimately, <i>This Earth of Mankind</i> is far more than an anti-colonial historical period piece; it is an enduring meditation on human dignity, the hypocrisy of imperialist legalism, and the transformative power of literacy against systemic tyranny. Pramoedya's unflinching gaze into the mechanisms of colonial hegemony renders this masterpiece indispensable reading for secondary school scholars of world literature, post-colonial history, and human rights.`,
      readingRef: "Literary Review: Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      prompt: "The word 'unflinching' in paragraph 4 ('Pramoedya's unflinching gaze into the mechanisms of colonial hegemony') is closest in meaning to:",
      options: [
        { key: "A", text: "courageous and uncompromising" },
        { key: "B", text: "hesitant and timid" },
        { key: "C", text: "superficial and detached" },
        { key: "D", text: "evasive and ambiguous" }
      ],
      correctAnswer: "A",
      explanation: "'Unflinching' bermakna teguh, berani tanpa gentar, dan tidak berkompromi dalam menelanjangi kepalsuan dan ketidakadilan kekuasaan kolonial.",
      grammarNote: "Participial Adjectives: Unflinching (synonym: steadfast, resolute, uncompromising)."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 29,
      source: "Sumber: The Jakarta Post Literary Review, Modern Asian Studies — Cambridge University Press & Kemendikbudristek",
      type: "reading_review",
      title: "Advanced Reading 2: Critical Literary Review",
      stimulusTitle: "Text 2: Critical Literary Review — Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      stimulusBody: `<b>[1]</b> Written orally under harrowing conditions of political imprisonment on the remote penal colony of Buru Island and first published in Jakarta in 1980, Pramoedya Ananta Toer's <i>This Earth of Mankind</i> (<i>Bumi Manusia</i>) stands as the undisputed monumental epic of modern Indonesian literature. As the opening volume of the celebrated Buru Quartet, the novel chronicles the intellectual and political coming-of-age of Minke, a brilliant aristocratic Javanese youth admitted to the prestigious Dutch-medium H.B.S. (Hogere Burgerschool) in Surabaya at the twilight of the nineteenth century.<br><br><b>[2]</b> The narrative engine is ignited when Minke enters the magnetic orbit of Boerderij Buitenzorg in Wonokromo, where he falls profoundly in love with the fragile Indo-European Annelies Mellema. However, the emotional and intellectual epicenter of the novel is unequivocally Annelies's mother, Nyai Ontosoroh (born Sanikem). Sold into concubinage at fourteen by an ambitious father eager for colonial bureaucratic promotion, Sanikem refuses the passive victimization prescribed by feudal Javanese and colonial Dutch patriarchies. Through relentless autodidactic rigor, she masters Dutch civil jurisprudence, commercial accounting, and modern agricultural estate management, governing the prosperous plantation far more sagaciously than its dissolute European patriarch. Yet, when Dutch colonial courts ruthlessly annul her de facto marriage and declare her indigenous parenthood legally void under the discriminatory <i>Wetboek van Strafrecht</i>, the novel delivers an unrelenting indictment of European colonial law as a racist apparatus engineered solely to confiscate native wealth and subjugate indigenous sovereignty.<br><br><b>[3]</b> Stylistically, Pramoedya achieves an extraordinary synthesis of historical realism, socio-political critique, and epic lyricism. Minke's psychological evolution—from an uncritical admirer of Dutch scientific rationality to a defiant vernacular journalist mobilizing public conscience through the printing press—mirrors the painful birth of Indonesian national consciousness. If a minor aesthetic flaw may be noted, the early romantic dialogues between Minke and Annelies occasionally border on nineteenth-century European melodrama. Nevertheless, this sentimental cadence is swiftly dismantled by the brutal reality of colonial state violence, culminating in Nyai Ontosoroh's unforgettable, defiant declaration of moral victory: <i>'We have fought back, Child, with all our might, as honorably as we could.'</i><br><br><b>[4]</b> Ultimately, <i>This Earth of Mankind</i> is far more than an anti-colonial historical period piece; it is an enduring meditation on human dignity, the hypocrisy of imperialist legalism, and the transformative power of literacy against systemic tyranny. Pramoedya's unflinching gaze into the mechanisms of colonial hegemony renders this masterpiece indispensable reading for secondary school scholars of world literature, post-colonial history, and human rights.`,
      readingRef: "Literary Review: Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      prompt: "Which memorable quote from the novel's climax exemplifies Nyai Ontosoroh's dignified moral victory over defeat?",
      options: [
        { key: "A", text: "'We have fought back, Child, with all our might, as honorably as we could.'" },
        { key: "B", text: "'To surrender unconditionally is the highest wisdom of the oppressed.'" },
        { key: "C", text: "'Wealth alone guarantees eternal peace in the face of tyranny.'" },
        { key: "D", text: "'He who speaks the colonizer's language must forget his ancestral motherland.'" }
      ],
      correctAnswer: "A",
      explanation: "Kutipan legendaris di akhir novel: 'Kita telah melawan, Nak, sebaik-baiknya, sehormat-hormatnya' ('We have fought back, Child, with all our might, as honorably as we could') menjadi puncak penegasan martabat manusia.",
      grammarNote: "Direct Quotation Analysis & Thematic Culmination in Literary Review."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 30,
      source: "Sumber: The Jakarta Post Literary Review, Modern Asian Studies — Cambridge University Press & Kemendikbudristek",
      type: "reading_review",
      title: "Advanced Reading 2: Critical Literary Review",
      stimulusTitle: "Text 2: Critical Literary Review — Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      stimulusBody: `<b>[1]</b> Written orally under harrowing conditions of political imprisonment on the remote penal colony of Buru Island and first published in Jakarta in 1980, Pramoedya Ananta Toer's <i>This Earth of Mankind</i> (<i>Bumi Manusia</i>) stands as the undisputed monumental epic of modern Indonesian literature. As the opening volume of the celebrated Buru Quartet, the novel chronicles the intellectual and political coming-of-age of Minke, a brilliant aristocratic Javanese youth admitted to the prestigious Dutch-medium H.B.S. (Hogere Burgerschool) in Surabaya at the twilight of the nineteenth century.<br><br><b>[2]</b> The narrative engine is ignited when Minke enters the magnetic orbit of Boerderij Buitenzorg in Wonokromo, where he falls profoundly in love with the fragile Indo-European Annelies Mellema. However, the emotional and intellectual epicenter of the novel is unequivocally Annelies's mother, Nyai Ontosoroh (born Sanikem). Sold into concubinage at fourteen by an ambitious father eager for colonial bureaucratic promotion, Sanikem refuses the passive victimization prescribed by feudal Javanese and colonial Dutch patriarchies. Through relentless autodidactic rigor, she masters Dutch civil jurisprudence, commercial accounting, and modern agricultural estate management, governing the prosperous plantation far more sagaciously than its dissolute European patriarch. Yet, when Dutch colonial courts ruthlessly annul her de facto marriage and declare her indigenous parenthood legally void under the discriminatory <i>Wetboek van Strafrecht</i>, the novel delivers an unrelenting indictment of European colonial law as a racist apparatus engineered solely to confiscate native wealth and subjugate indigenous sovereignty.<br><br><b>[3]</b> Stylistically, Pramoedya achieves an extraordinary synthesis of historical realism, socio-political critique, and epic lyricism. Minke's psychological evolution—from an uncritical admirer of Dutch scientific rationality to a defiant vernacular journalist mobilizing public conscience through the printing press—mirrors the painful birth of Indonesian national consciousness. If a minor aesthetic flaw may be noted, the early romantic dialogues between Minke and Annelies occasionally border on nineteenth-century European melodrama. Nevertheless, this sentimental cadence is swiftly dismantled by the brutal reality of colonial state violence, culminating in Nyai Ontosoroh's unforgettable, defiant declaration of moral victory: <i>'We have fought back, Child, with all our might, as honorably as we could.'</i><br><br><b>[4]</b> Ultimately, <i>This Earth of Mankind</i> is far more than an anti-colonial historical period piece; it is an enduring meditation on human dignity, the hypocrisy of imperialist legalism, and the transformative power of literacy against systemic tyranny. Pramoedya's unflinching gaze into the mechanisms of colonial hegemony renders this masterpiece indispensable reading for secondary school scholars of world literature, post-colonial history, and human rights.`,
      readingRef: "Literary Review: Pramoedya Ananta Toer's 'This Earth of Mankind' — The Crucible of Awakening, Law, and Resistance in the Dutch East Indies",
      prompt: "According to the final paragraph, to whom does the reviewer most enthusiastically recommend 'This Earth of Mankind'?",
      options: [
        { key: "A", text: "Students of world literature, post-colonial history, and human rights seeking to comprehend the power of the written word against systemic oppression." },
        { key: "B", text: "Novice readers seeking lighthearted escapist fairy tales with predictable happy endings." },
        { key: "C", text: "Commercial accountants looking strictly for nineteenth-century bookkeeping calculation worksheets." },
        { key: "D", text: "Military strategists interested exclusively in naval torpedo weaponry design." }
      ],
      correctAnswer: "A",
      explanation: "Pengulas merekomendasikan karya ini dengan sangat antusias kepada para pembelajar sastra dunia, sejarah pascakolonial, dan pejuang hak asasi manusia yang ingin memahami daya juang pena melawan penindasan sistemik.",
      grammarNote: "Target Audience Recommendation in Evaluative Discourse."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 31,
      source: "Sumber: Oxford English Grammar Course (Advanced) & Cambridge C1 Advanced Standards",
      type: "grammar_structure",
      title: "Advanced Syntax: It-Cleft Sentence Construction",
      prompt: "Identify the sentence that correctly employs an 'it-cleft' construction to emphasize the primary ethical agency:",
      options: [
        { key: "A", text: "It was Nyai Ontosoroh's profound moral fortitude that shattered the colonial court's facade of civilizational superiority." },
        { key: "B", text: "Nyai Ontosoroh had a profound moral fortitude that it shattered the colonial court's facade." },
        { key: "C", text: "It being Nyai Ontosoroh's moral fortitude, shattered the colonial court's facade of superiority." },
        { key: "D", text: "What shattered the colonial court it was because of Nyai Ontosoroh's profound fortitude." }
      ],
      correctAnswer: "A",
      explanation: "Pola 'it-cleft' baku: It + was + unsur yang ditekankan (Nyai Ontosoroh's profound moral fortitude) + that + sisa klausa. Konstruksi B, C, dan D tidak gramatikal dalam bahasa Inggris akademik.",
      grammarNote: "Cleft Sentences for Focus: It + be + Focus + that-clause."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 32,
      source: "Sumber: Cambridge Grammar of the English Language & TOEFL/IELTS Academic Writing Standards",
      type: "grammar_structure",
      title: "Advanced Syntax: Wh-Cleft (Pseudo-Cleft) Construction",
      prompt: "Select the correct 'wh-cleft' sentence highlighting the central concern of modern bioethicists:",
      options: [
        { key: "A", text: "What deeply alarms contemporary bioethicists is the potential commodification of heritable human traits." },
        { key: "B", text: "Which deeply alarms contemporary bioethicists that is the potential commodification of heritable human traits." },
        { key: "C", text: "What does deeply alarm contemporary bioethicists it is the commodification of human traits." },
        { key: "D", text: "That deeply alarms contemporary bioethicists is what the commodification of heritable human traits." }
      ],
      correctAnswer: "A",
      explanation: "'Wh-cleft' (pseudo-cleft) diawali klausa 'What' + verb/klausa sebagai subjek, diikuti 'is/was' dan konstituen penjelas: 'What deeply alarms contemporary bioethicists is the potential commodification...'.",
      grammarNote: "Wh-Cleft Sentences: What-clause + be + Focused Complement."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 33,
      source: "Sumber: Advanced Grammar in Use — Martin Hewings & Cambridge Assessment English",
      type: "grammar_structure",
      title: "Advanced Syntax: Negative Inversion with 'Scarcely ... when'",
      prompt: "Choose the sentence that correctly applies negative inversion to describe two sequential past actions:",
      options: [
        { key: "A", text: "Scarcely had the international bioethics summit convened when dissenting delegates demanded a mandatory moratorium." },
        { key: "B", text: "Scarcely the international bioethics summit had convened when dissenting delegates demanded a mandatory moratorium." },
        { key: "C", text: "Scarcely had the international bioethics summit convened than dissenting delegates demanded a mandatory moratorium." },
        { key: "D", text: "Scarcely did the international bioethics summit convened when dissenting delegates demanded a mandatory moratorium." }
      ],
      correctAnswer: "A",
      explanation: "Inversi negatif dengan 'Scarcely' menggunakan rumus: Scarcely + had + Subject + V3 + when + Simple Past. Opsi C salah karena memasangkan Scarcely dengan 'than' (seharusnya 'No sooner ... than'). Opsi B tidak menginversi.",
      grammarNote: "Negative Inversion with Correlative Time Markers: Scarcely had + S + V3 ... when + S + V2."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 34,
      source: "Sumber: The Blue Book of Grammar and Punctuation & Harvard Writing Center Standards",
      type: "grammar_structure",
      title: "Advanced Conditionals: Inverted Third Conditional (Omission of 'If')",
      prompt: "Select the grammatically accurate inverted conditional sentence that replaces 'If the colonial judiciary had recognized customary indigenous unions...':",
      options: [
        { key: "A", text: "Had the colonial judiciary recognized customary indigenous unions, the heartbreaking separation of Annelies would have been averted." },
        { key: "B", text: "Did the colonial judiciary had recognized customary indigenous unions, the separation would have been averted." },
        { key: "C", text: "Were the colonial judiciary recognized customary indigenous unions, the separation would have been averted." },
        { key: "D", text: "Had the colonial judiciary recognize customary indigenous unions, the separation would have been averted." }
      ],
      correctAnswer: "A",
      explanation: "Inversi pengandaian tipe 3 (Inverted Third Conditional) menghilangkan 'If' dengan memindahkan kata kerja bantu 'Had' ke depan: 'Had + Subject + V3 (Had the judiciary recognized...), would have been averted'.",
      grammarNote: "Inverted Conditional Type 3: Had + Subject + Past Participle, S + would have + V3."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 35,
      source: "Sumber: Cambridge C1 Advanced Handbook & Oxford Academic English Reference",
      type: "grammar_structure",
      title: "Advanced Syntax: Mandative Subjunctive in Resolutive Resolutions",
      prompt: "Choose the correct subjunctive verb form following the resolutive verb 'recommended':\n'The World Health Organization recommended that germline genetic intervention ________ strictly prohibited until universal safety consensus is established.'",
      options: [
        { key: "A", text: "remain" },
        { key: "B", text: "remains" },
        { key: "C", text: "remained" },
        { key: "D", text: "is remaining" }
      ],
      correctAnswer: "A",
      explanation: "Mandative Subjunctive digunakan dalam klausa that setelah kata kerja rekomendasi formal (recommended, demanded, insisted). Kata kerja wajib berupa bare infinitive (bentuk dasar): 'remain' (tanpa akhiran -s atau -ed).",
      grammarNote: "Mandative Subjunctive: Verb of Recommendation + that + Subject + bare infinitive."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 36,
      source: "Sumber: Academic Writing for Graduate Students — Swales & Feak & Cambridge Assessment English",
      type: "grammar_structure",
      title: "Academic Register: Impersonal Passive Reporting",
      prompt: "Complete the scholarly literary statement with the correct impersonal passive reporting construction:\n'________ by contemporary post-colonial scholars that Minke's vernacular journalism laid the intellectual groundwork for national sovereignty.'",
      options: [
        { key: "A", text: "It is widely posited" },
        { key: "B", text: "There has widely posited" },
        { key: "C", text: "What is widely positing" },
        { key: "D", text: "It has widely positing" }
      ],
      correctAnswer: "A",
      explanation: "Konstruksi pasif impersonal untuk pelaporan akademis (impersonal passive reporting) mengikuti pola: It + is/was + V3 (past participle) + that-clause: 'It is widely posited that...'.",
      grammarNote: "Impersonal Passive: It + passive verb of reporting + that-clause."
    },
    {
      // [60% DARI BANK SOAL ASAS KELAS XII-TL]
      id: 37,
      source: "Sumber: Fowler's Modern English Usage & Oxford C1 Academic Writing Guide",
      type: "grammar_structure",
      title: "Advanced Syntax: Perfect Participial Clause of Prior Completion",
      prompt: "Select the correct participial phrase expressing an action completed prior to the main clause:\n'________ all legal avenues in the colonial supreme court, Nyai Ontosoroh resolved to record their struggle in the court of public opinion.'",
      options: [
        { key: "A", text: "Having exhausted" },
        { key: "B", text: "Exhausted having" },
        { key: "C", text: "To exhaust" },
        { key: "D", text: "Having been exhausting" }
      ],
      correctAnswer: "A",
      explanation: "Klausa partisipial sempurna (Perfect Participial Clause): 'Having + V3' (Having exhausted all legal avenues) digunakan untuk menyatakan tindakan aktif yang telah selesai terjadi sebelum tindakan pada klausa utama berlangsung.",
      grammarNote: "Perfect Participle: Having + Past Participle indicating anteriority."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 38,
      source: "Sumber: Advanced Grammar in Use — Martin Hewings & Cambridge Assessment English",
      type: "grammar_structure",
      title: "Discourse Connectors: Concessive Expression 'Be that as it may'",
      prompt: "Choose the formal transitional expression that acknowledges an established premise before asserting a decisive counter-argument:\n'Commercial biotechnology firms tout the economic profitability of patenting genomic sequences. ________, the ethical peril of monopolizing human heredity cannot be brushed aside.'",
      options: [
        { key: "A", text: "Be that as it may" },
        { key: "B", text: "In the same manner" },
        { key: "C", text: "Consequently" },
        { key: "D", text: "For instance" }
      ],
      correctAnswer: "A",
      explanation: "'Be that as it may' adalah idiom retoris formal tingkat lanjut yang bermakna 'Walaupun demikian' / 'Kendati hal itu benar' untuk mengakui premis lawan sebelum menyampaikan sanggahan yang kuat.",
      grammarNote: "Advanced Concessive Transitions: 'Be that as it may' (synonym: 'Nonetheless', 'Even so')."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 39,
      source: "Sumber: Oxford Collocations Dictionary for Students of English & Cambridge Academic Writing",
      type: "grammar_structure",
      title: "Academic Lexis: Evaluative Adverb-Adjective Collocation",
      prompt: "Select the adverb that correctly collocates in formal literary criticism to mean 'without any reservations or hesitations':\n'The cultural critic offered an ________ laudatory evaluation of Pramoedya's Buru Quartet.'",
      options: [
        { key: "A", text: "unreservedly" },
        { key: "B", text: "scantily" },
        { key: "C", text: "reluctantly" },
        { key: "D", text: "ambiguously" }
      ],
      correctAnswer: "A",
      explanation: "Dalam kritik sastra akademis, kata 'unreservedly' (tanpa keraguan / sepenuh hati) lazim berkolokasi dengan 'laudatory' (memuji tinggi): 'an unreservedly laudatory evaluation'.",
      grammarNote: "Adverb-Adjective Academic Collocations: 'unreservedly laudatory' / 'deeply poignant'."
    },
    {
      // [40% SOAL KOMPLEMENTER SEMESTER GASAL]
      id: 40,
      source: "Sumber: Cambridge Grammar of the English Language & TOEFL/IELTS Academic Writing Standards",
      type: "grammar_structure",
      title: "Complex Sentence Structure: Adverbial Clause of Result with 'So ... that'",
      prompt: "Complete the historical sentence showing cause and extreme result:\n'Dutch colonial authorities drafted the racial caste statutes ________ stringently ________ indigenous wives were stripped of all parental custody upon their European husbands' death.'",
      options: [
        { key: "A", text: "so ... that" },
        { key: "B", text: "such ... as" },
        { key: "C", text: "too ... to" },
        { key: "D", text: "neither ... nor" }
      ],
      correctAnswer: "A",
      explanation: "Struktur 'so + adverb (stringently) + that + clause' digunakan untuk menunjukkan intensitas sebab yang menghasilkan akibat ekstrem dalam kalimat kompleks.",
      grammarNote: "Clauses of Result: So + adverb + that-clause."
    }
  ];
}

// Compatibility aliases
function getGrade12TLAsasQuestions() {
  return getGrade12TLAstsQuestions();
}

function getGrade12AsasQuestions() {
  return getGrade12TLAstsQuestions();
}

function getGrade12Questions() {
  return getGrade12TLAstsQuestions();
}


