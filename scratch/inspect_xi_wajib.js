const fs = require('fs');
const content = fs.readFileSync('kelas-xi-asas.js', 'utf8');

const q1_match = content.match(/\{\s*"id":\s*1,[\s\S]*?"grammarNote":\s*"[^"]*"\s*\}/);
const q2_match = content.match(/\{\s*"id":\s*2,[\s\S]*?"grammarNote":\s*"[^"]*"\s*\}/);
const q3_match = content.match(/\{\s*"id":\s*3,[\s\S]*?"grammarNote":\s*"[^"]*"\s*\}/);

console.log('Q1:\n', q1_match ? q1_match[0] : 'not found');
console.log('Q2:\n', q2_match ? q2_match[0] : 'not found');
console.log('Q3:\n', q3_match ? q3_match[0] : 'not found');
