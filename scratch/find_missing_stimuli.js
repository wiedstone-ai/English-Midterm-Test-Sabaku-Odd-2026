const fs = require('fs');

const files = [
  'kelas-x-asas.js', 'kelas-x-asts.js',
  'kelas-xi-asas.js', 'kelas-xi-asts.js',
  'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js',
  'kelas-xii-asas.js', 'kelas-xii-asts.js',
  'kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n========================================\nFILE: ${f}\n========================================`);
  
  // Find question objects by evaluating or regex
  // Let's inspect all questions that mention "text", "passage", "story", "paragraph" in prompt, but have NO stimulusBody
  const qRegex = /\{\s*["']?id["']?\s*:\s*(\d+)[\s\S]*?(?=\n\s*\{\s*["']?id["']?\s*:\s*\d+|\n\s*\])/g;
  let m;
  while ((m = qRegex.exec(content)) !== null) {
    const qStr = m[0];
    const id = m[1];
    const hasStim = qStr.includes('stimulusBody');
    const hasAudio = qStr.includes('audioText') || qStr.includes('audioSegments');
    
    // Check if prompt mentions text/passage
    const promptMatch = qStr.match(/["']?prompt["']?\s*:\s*"([^"]*)"/);
    const prompt = promptMatch ? promptMatch[1] : '';

    if (!hasAudio && !hasStim) {
      console.log(`Q${id} (NO STIMULUS): prompt="${prompt.slice(0, 70)}..."`);
    } else if (hasStim) {
      const stimBodyMatch = qStr.match(/["']?stimulusBody["']?\s*:\s*"([^"]*)"/);
      const stimLen = stimBodyMatch ? stimBodyMatch[1].length : 0;
      if (stimLen < 20) {
        console.log(`Q${id} (VERY SHORT STIMULUS ${stimLen} chars): prompt="${prompt.slice(0, 50)}..."`);
      }
    }
  }
});
