const fs = require('fs');

const SVG_X = `const SVG_PICTURES = {
  badminton: \`<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="22" r="10"/><path d="M50 32v28M30 42l20-8 20 12M50 60l-16 26M50 60l18 26"/><path d="M70 46l14-14M84 32a7 7 0 10-10-10 7 7 0 0010 10zM77 25l7 7"/></svg>\`,
  runner: \`<svg viewBox="0 0 100 100" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="65" cy="22" r="9"/><path d="M60 31l-14 16 10 12-14 26M46 47l-18-6M56 59l18 6 12 18"/><path d="M15 88h70" stroke="#94a3b8" stroke-dasharray="4 4"/></svg>\`,
  swimmer: \`<svg viewBox="0 0 100 100" fill="none" stroke="#0d9488" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="38" r="9"/><path d="M41 38l24 4 15-18M25 50l30 4 18 10"/><path d="M10 65c10-5 20 5 30 0s20 5 30 0 20 5 20 0M10 78c10-5 20 5 30 0s20 5 30 0 20 5 20 0" stroke="#0284c7"/></svg>\`,
  weightlifter: \`<svg viewBox="0 0 100 100" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="38" r="8"/><path d="M50 46v24M38 56l12-8 12 8M42 70l-8 20M58 70l8 20"/><path d="M15 26h70" stroke="#475569" stroke-width="4"/><circle cx="15" cy="26" r="12" fill="#94a3b8"/><circle cx="85" cy="26" r="12" fill="#94a3b8"/></svg>\`,

  temple: \`<svg viewBox="0 0 100 100" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 85h80M20 70h60M30 55h40M40 40h20M50 20v20"/><path d="M35 85v-15M65 85v-15M42 70v-15M58 70v-15"/><circle cx="50" cy="18" r="3" fill="#d97706"/></svg>\`,
  beach: \`<svg viewBox="0 0 100 100" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="25" cy="25" r="10" fill="#fef08a" stroke="#eab308"/><path d="M60 85c-5-25 15-45 25-50M85 35c-15 0-25-10-30-5M85 35c5-10 15-12 20-10M85 35c-5 12-12 18-18 20"/><path d="M10 85c15-4 35 2 50-2s25-6 30-2" stroke="#16a34a" stroke-width="3"/></svg>\`,
  mountain: \`<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 85l35-50 15 20 15-15 20 45H10z"/><path d="M38 45l7 8 10-5" stroke="#cbd5e1" fill="#f8fafc"/></svg>\`,
  bridge: \`<svg viewBox="0 0 100 100" fill="none" stroke="#7c3aed" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 65h80M25 25v55M75 25v55M10 50c15-15 25-25 40 0s25-15 40 0M25 25l25 25 25-25"/><path d="M10 80c10-3 20 3 40 0s30 3 40 0" stroke="#0284c7"/></svg>\`,

  minaret: \`<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M30 85h40M35 85V45h30v40M32 45h36M38 45V28h24v17M35 28h30M45 28V15h10v13M42 15h16M50 10v5"/><circle cx="50" cy="8" r="2" fill="#b45309"/><path d="M42 65h16v20H42z"/></svg>\`,
  puppet: \`<svg viewBox="0 0 100 100" fill="none" stroke="#9333ea" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="50" cy="30" rx="12" ry="16"/><path d="M50 46v30M32 38l-12 24 14 16M68 38l12 24-14 16M50 76l-14 16M50 76l14 16M45 14c5-8 15-5 18 2"/></svg>\`,
  batik: \`<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="15" y="15" width="70" height="70" rx="6"/><circle cx="50" cy="50" r="14"/><path d="M50 20v16M50 64v16M20 50h16M64 50h16M28 28l12 12M60 60l12 12M28 72l12-12M60 40l12-12"/></svg>\`,
  concert: \`<svg viewBox="0 0 100 100" fill="none" stroke="#e11d48" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="25" y="45" width="50" height="40" rx="4"/><path d="M35 45V25l30-8v28M35 35l30-8"/><circle cx="38" cy="72" r="6" fill="#f43f5e"/><circle cx="62" cy="65" r="6" fill="#f43f5e"/></svg>\`
};`;

const Q_OPTIONS_X = `    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.badminton,
        "label": "A world badminton champion executing a powerful smash"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.runner,
        "label": "A marathon athlete sprinting towards the finish line"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.swimmer,
        "label": "A swimmer competing in the freestyle race"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.weightlifter,
        "label": "A weightlifter lifting a heavy barbell overhead"
      }
    ]`;

const Q2_OPTIONS_X = `    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.beach,
        "label": "A tropical sandy beach with coconut palm trees"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.temple,
        "label": "An ancient monumental stone temple with terraces and stupas"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.mountain,
        "label": "A towering volcanic peak covered in alpine snow"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.bridge,
        "label": "A modern suspension bridge across a metropolis bay"
      }
    ]`;

const Q3_OPTIONS_X = `    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.puppet,
        "label": "Wayang shadow puppet leather figure"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.batik,
        "label": "Traditional geometric batik textile pattern"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.minaret,
        "label": "Historic red-brick heritage tower minaret of Kudus"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.concert,
        "label": "Modern musical auditorium stage"
      }
    ]`;

const SVG_XI_WAJIB = `const SVG_PICTURES = {
  laptopResearch: \`<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="24" width="60" height="42" rx="3" fill="#eff6ff" stroke="#2563eb"/><path d="M12 70h76l-4 6H16l-4-6z" fill="#cbd5e1" stroke="#2563eb"/><circle cx="50" cy="45" r="10" stroke="#3b82f6" stroke-dasharray="3 3"/><path d="M50 39v12M44 45h12" stroke="#1d4ed8"/><circle cx="50" cy="73" r="1.5" fill="#475569"/></svg>\`,
  antiqueBook: \`<svg viewBox="0 0 100 100" fill="none" stroke="#b45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 72c15-8 35-4 35 10 0-14 20-18 35-10V28c-15-8-35-4-35 10 0-14-20-18-35-10v44z" fill="#fef3c7" stroke="#b45309"/><path d="M50 38v44M25 40h15M25 50h15M60 40h15M60 50h15" stroke="#d97706"/></svg>\`,
  microphoneStage: \`<svg viewBox="0 0 100 100" fill="none" stroke="#7c3aed" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="42" y="16" width="16" height="26" rx="8" fill="#f3e8ff" stroke="#7c3aed"/><path d="M34 32c0 10 7 18 16 18s16-8 16-18M50 50v24M35 74h30" stroke="#7c3aed" stroke-width="2.5"/><path d="M20 85h60" stroke="#64748b" stroke-width="3"/></svg>\`,
  smartphoneVideo: \`<svg viewBox="0 0 100 100" fill="none" stroke="#e11d48" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="34" y="16" width="32" height="54" rx="5" fill="#fff1f2" stroke="#e11d48"/><circle cx="50" cy="62" r="3" fill="#e11d48"/><circle cx="50" cy="36" r="8" fill="#fda4af" stroke="#e11d48"/><polygon points="48,32 55,36 48,40" fill="#be123c"/><path d="M30 84l20-14 20 14" stroke="#475569" stroke-width="2.5"/></svg>\`,

  fishingPort: \`<svg viewBox="0 0 100 100" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 75c12-4 24 2 36-2s24-2 44 2" stroke="#0284c7" stroke-width="2.5"/><path d="M20 65l10 10h24l6-10H20z" fill="#e0f2fe" stroke="#0369a1"/><path d="M42 65V42l16 8-16 4" stroke="#0369a1" fill="#bae6fd"/><path d="M12 70v15M24 70v15M8 72h24" stroke="#78350f" stroke-width="2"/></svg>\`,
  templeRuins: \`<svg viewBox="0 0 100 100" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 85h80M22 70h56M34 55h32M44 40h12M50 20v20"/><path d="M30 85V70M70 85V70M40 70V55M60 70V55M47 55V40M53 55V40"/><circle cx="50" cy="17" r="3" fill="#d97706"/><path d="M15 85l6-15M85 85l-6-15" stroke="#b45309"/></svg>\`,
  suspensionBridge: \`<svg viewBox="0 0 100 100" fill="none" stroke="#6366f1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 68h80M25 22v52M75 22v52" stroke="#4338ca" stroke-width="2.5"/><path d="M10 50c15-15 25-22 40 0s25 15 40 0" stroke="#6366f1"/><path d="M25 22l25 28 25-28" stroke="#818cf8"/><path d="M10 80c10-3 20 3 40 0s30 3 40 0" stroke="#38bdf8"/></svg>\`,
  mountainSummit: \`<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="28" r="8" fill="#fef08a" stroke="#eab308"/><path d="M10 85l32-45 18 22 14-16 16 39H10z" fill="#f8fafc" stroke="#475569" stroke-width="2.2"/><path d="M36 48l6 8 8-4" stroke="#94a3b8"/></svg>\`,

  fuelStation: \`<svg viewBox="0 0 100 100" fill="none" stroke="#ef4444" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="25" y="32" width="36" height="52" rx="4" fill="#fef2f2" stroke="#dc2626"/><rect x="33" y="40" width="20" height="15" fill="#fee2e2" stroke="#ef4444"/><path d="M61 44h10c4 0 6 3 6 7v20l-4 3" stroke="#b91c1c" stroke-width="2.5"/><rect x="20" y="84" width="46" height="5" fill="#64748b"/></svg>\`,
  smokestackFactory: \`<svg viewBox="0 0 100 100" fill="none" stroke="#475569" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="52" width="60" height="32" fill="#f1f5f9" stroke="#475569"/><polygon points="30,52 32,25 40,25 42,52" fill="#e2e8f0" stroke="#475569"/><polygon points="50,52 52,30 58,30 60,52" fill="#e2e8f0" stroke="#475569"/><path d="M36 20c2-5 6-5 8 0s6 5 8 0M55 24c2-4 5-4 7 0" stroke="#94a3b8" stroke-width="2"/></svg>\`,
  solarRooftop: \`<svg viewBox="0 0 100 100" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 85V50l35-22 35 22v35H15z" fill="#f0fdf4" stroke="#059669"/><path d="M22 46l28-18 28 18" stroke="#047857" stroke-width="3"/><path d="M52 58h28v24H52z" fill="#bae6fd" stroke="#0284c7"/><path d="M66 58v24M52 70h28" stroke="#0284c7"/><circle cx="82" cy="22" r="8" fill="#fef08a" stroke="#eab308"/></svg>\`,
  hydroDam: \`<svg viewBox="0 0 100 100" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 40h70l-10 44H25L15 40z" fill="#e0f2fe" stroke="#0369a1" stroke-width="2.5"/><path d="M35 40v44M50 40v44M65 40v44" stroke="#0284c7" stroke-width="2"/><path d="M40 70c4 5 8 5 12 0s8-5 12 0" stroke="#38bdf8" stroke-width="2"/><path d="M10 84h80" stroke="#64748b" stroke-width="3"/></svg>\`
};`;

const Q_OPTIONS_XI_WAJIB = `    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.laptopResearch,
        "label": "A student conducting digital research and fact-checking on a laptop"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.antiqueBook,
        "label": "Reading an antique book quietly in a library"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.microphoneStage,
        "label": "Speaking into a microphone on an empty stage"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.smartphoneVideo,
        "label": "Recording a vertical short video with a smartphone camera"
      }
    ]`;

const Q2_OPTIONS_XI_WAJIB = `    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.fishingPort,
        "label": "A coastal wooden fishing port with docked boats"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.templeRuins,
        "label": "An ancient multi-tiered stone temple complex"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.suspensionBridge,
        "label": "A suspension steel bridge over a city river"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.mountainSummit,
        "label": "A rocky mountain summit under the morning sun"
      }
    ]`;

const Q3_OPTIONS_XI_WAJIB = `    "options": [
      {
        "key": "A",
        "svg": SVG_PICTURES.fuelStation,
        "label": "A conventional roadside petroleum fuel station"
      },
      {
        "key": "B",
        "svg": SVG_PICTURES.smokestackFactory,
        "label": "An industrial factory releasing dark smoke plumes"
      },
      {
        "key": "C",
        "svg": SVG_PICTURES.solarRooftop,
        "label": "Rooftop solar photovoltaic panels capturing sunlight"
      },
      {
        "key": "D",
        "svg": SVG_PICTURES.hydroDam,
        "label": "A heavy concrete hydro dam structure"
      }
    ]`;

const NEW_RANDOMIZE_FN = `function randomizeQuestionOptions(rawQuestions) {
  return rawQuestions.map(q => {
    if (q.type === "listening_pictures") {
      return q;
    }
    const cloned = JSON.parse(JSON.stringify(q));
    if (cloned.type === "complex_matrix" && Array.isArray(cloned.matrixStatements)) {
      const stmts = [...cloned.matrixStatements];
      for (let i = stmts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [stmts[i], stmts[j]] = [stmts[j], stmts[i]];
      }
      cloned.matrixStatements = stmts;
    } else if (Array.isArray(cloned.options) && cloned.options.length > 0) {
      const opts = [...cloned.options];
      const isMCMA = cloned.type === "mcma" && Array.isArray(cloned.correctAnswer);
      const originalCorrect = isMCMA ? [...cloned.correctAnswer] : cloned.correctAnswer;
      for (let i = opts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opts[i], opts[j]] = [opts[j], opts[i]];
      }
      const alphabet = ["A", "B", "C", "D", "E"];
      const keyMap = {};
      cloned.options = opts.map((opt, idx) => {
        keyMap[opt.key] = alphabet[idx];
        const resOpt = {
          key: alphabet[idx],
          text: opt.text || opt.label || ""
        };
        if (opt.label) resOpt.label = opt.label;
        if (opt.svg) resOpt.svg = opt.svg;
        return resOpt;
      });
      if (isMCMA) {
        cloned.correctAnswer = originalCorrect.map(k => keyMap[k] || k).sort();
      } else if (typeof cloned.correctAnswer === "string") {
        cloned.correctAnswer = keyMap[cloned.correctAnswer] || cloned.correctAnswer;
      }
    }
    return cloned;
  });
}`;

const NEW_RENDER_PICTURES_FN = `function renderPictureChoices(q, container) {
  const grid = document.createElement("div");
  grid.className = "picture-choices-grid";
  q.options.forEach(opt => {
    const card = document.createElement("div");
    card.className = "picture-option-card" + (userAnswers[q.id] === opt.key ? " selected" : "");
    card.onclick = () => {
      userAnswers[q.id] = opt.key;
      renderQuestion(currentQuestionIndex);
    };
    const svgContent = opt.svg || \`<svg viewBox="0 0 100 100" fill="none" stroke="#2563eb" stroke-width="2"><rect x="10" y="10" width="80" height="80" rx="8" fill="#eff6ff"/><circle cx="50" cy="50" r="20" stroke="#3b82f6"/><text x="50" y="55" font-size="14" text-anchor="middle" fill="#1e40af" font-weight="bold">\${opt.key}</text></svg>\`;
    const labelContent = opt.label || opt.text || \`Pilihan \${opt.key}\`;
    card.innerHTML = \`
      <div class="picture-svg-wrapper">\${svgContent}</div>
      <div class="picture-letter-badge">\${opt.key}</div>
      <div class="picture-label-text">\${labelContent}</div>
    \`;
    grid.appendChild(card);
  });
  container.appendChild(grid);
}`;

// Process Kelas X files
['kelas-x-asas.js', 'kelas-x-asts.js'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Replace SVG_PICTURES block
  content = content.replace(/const SVG_PICTURES = \{[\s\S]*?\n\};/, SVG_X);
  
  // Replace Q1 options
  content = content.replace(/"id":\s*1,[\s\S]*?"options":\s*\[[\s\S]*?\]\s*,\s*"correctAnswer"/, (match) => {
    return match.replace(/"options":\s*\[[\s\S]*?\]/, Q_OPTIONS_X.trim());
  });
  // Replace Q2 options
  content = content.replace(/"id":\s*2,[\s\S]*?"options":\s*\[[\s\S]*?\]\s*,\s*"correctAnswer"/, (match) => {
    return match.replace(/"options":\s*\[[\s\S]*?\]/, Q2_OPTIONS_X.trim());
  });
  // Replace Q3 options
  content = content.replace(/"id":\s*3,[\s\S]*?"options":\s*\[[\s\S]*?\]\s*,\s*"correctAnswer"/, (match) => {
    return match.replace(/"options":\s*\[[\s\S]*?\]/, Q3_OPTIONS_X.trim());
  });

  // Replace randomizeQuestionOptions
  content = content.replace(/function randomizeQuestionOptions[\s\S]*?^}/m, NEW_RANDOMIZE_FN);
  // Replace renderPictureChoices
  content = content.replace(/function renderPictureChoices[\s\S]*?^}/m, NEW_RENDER_PICTURES_FN);

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file}`);
});

// Process Kelas XI Wajib files
['kelas-xi-asas.js', 'kelas-xi-asts.js'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Replace SVG_PICTURES block
  content = content.replace(/const SVG_PICTURES = \{[\s\S]*?\n\};/, SVG_XI_WAJIB);
  
  // Replace Q1 options
  content = content.replace(/"id":\s*1,[\s\S]*?"options":\s*\[[\s\S]*?\]\s*,\s*"correctAnswer"/, (match) => {
    return match.replace(/"options":\s*\[[\s\S]*?\]/, Q_OPTIONS_XI_WAJIB.trim());
  });
  // Replace Q2 options
  content = content.replace(/"id":\s*2,[\s\S]*?"options":\s*\[[\s\S]*?\]\s*,\s*"correctAnswer"/, (match) => {
    return match.replace(/"options":\s*\[[\s\S]*?\]/, Q2_OPTIONS_XI_WAJIB.trim());
  });
  // Replace Q3 options
  content = content.replace(/"id":\s*3,[\s\S]*?"options":\s*\[[\s\S]*?\]\s*,\s*"correctAnswer"/, (match) => {
    return match.replace(/"options":\s*\[[\s\S]*?\]/, Q3_OPTIONS_XI_WAJIB.trim());
  });

  // Replace randomizeQuestionOptions
  content = content.replace(/function randomizeQuestionOptions[\s\S]*?^}/m, NEW_RANDOMIZE_FN);
  // Replace renderPictureChoices
  content = content.replace(/function renderPictureChoices[\s\S]*?^}/m, NEW_RENDER_PICTURES_FN);

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file}`);
});

// Update randomizeQuestionOptions and renderPictureChoices in remaining active test files
const otherFiles = [
  'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js',
  'kelas-xii-asas.js', 'kelas-xii-asts.js',
  'kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js'
];

otherFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/function randomizeQuestionOptions[\s\S]*?^}/m, NEW_RANDOMIZE_FN);
  content = content.replace(/function renderPictureChoices[\s\S]*?^}/m, NEW_RENDER_PICTURES_FN);
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated randomize & render in ${file}`);
});
