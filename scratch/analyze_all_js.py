import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
js_files = [f for f in os.listdir(base_dir) if f.endswith('.js') and f != 'google_apps_script.js']

print("Analyzing JS files...")
for fname in sorted(js_files):
    path = os.path.join(base_dir, fname)
    with open(path, encoding='utf-8') as f:
        content = f.read()
    
    # 1. expBox condition
    exp_matches = re.findall(r'if\s*\(([^)]*isExamSubmitted[^)]*)\)', content)
    
    # 2. randomizeQuestionOptions
    has_rand = "function randomizeQuestionOptions" in content
    shuffles_matrix = "cloned.matrixStatements" in content or "q.matrixStatements" in content
    
    # 3. occurrences of "Jawaban A" or "(Opsi " or similar
    letter_refs = len(re.findall(r'(?:Jawaban\s+[A-E]|Opsi\s+[A-E]|Pilihan\s+[A-E]|Kalimat\s+[A-E])', content, re.IGNORECASE))
    
    # 4. inversion
    inversion_count = len(re.findall(r'invers', content, re.IGNORECASE))
    
    print(f"\n[{fname}]")
    print(f"  expBox condition: {exp_matches}")
    print(f"  has randomizeQuestionOptions: {has_rand}, shuffles_matrix: {shuffles_matrix}")
    print(f"  hardcoded option letter references: {letter_refs}")
    print(f"  inversion occurrences: {inversion_count}")

