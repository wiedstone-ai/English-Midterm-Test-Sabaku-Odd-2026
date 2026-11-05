const fs = require('fs');
const content = fs.readFileSync('kelas-x-asas.js', 'utf8');

const selectFnMatch = content.match(/function selectAudioVoice[\s\S]*?^}/m);
const playNextMatch = content.match(/function playNextAudioSegment[\s\S]*?^}/m);

console.log('selectAudioVoice:\n', selectFnMatch ? selectFnMatch[0] : 'not found');
console.log('playNextAudioSegment:\n', playNextMatch ? playNextMatch[0] : 'not found');
