import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
files = [
    'kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js',
    'kelas-xii-asas.js', 'kelas-xii-asts.js', 'kelas-xii.js',
    'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js',
    'kelas-xi-asas.js', 'kelas-xi-asts.js', 'kelas-xi.js',
    'kelas-x-asas.js', 'kelas-x-asts.js', 'kelas-x.js',
    'app.js'
]

print("=== AUDIT OF ALL JS FILES ===")
for fname in files:
    path = os.path.join(base_dir, fname)
    if not os.path.exists(path):
        continue
    with open(path, encoding='utf-8') as f:
        text = f.read()
    
    # 1. expBox condition
    expbox_cond = re.findall(r'if\s*\(([^)]*isExamSubmitted[^)]*)\)', text)
    
    # 2. matrix shuffling
    matrix_shuffled = "cloned.matrixStatements" in text or "q.matrixStatements = shuffleArray" in text
    
    # 3. letter references
    letter_refs = re.findall(r'(?:Opsi\s+[A-E]|Jawaban\s+[A-E]|Pilihan\s+[A-E]|Kalimat\s+[A-E]|\([A-E]\))', text, re.IGNORECASE)
    
    print(f"\n{fname}:")
    print(f"  expBox condition: {expbox_cond}")
    print(f"  matrixStatements shuffled: {matrix_shuffled}")
    print(f"  hardcoded letter count: {len(letter_refs)}")

