import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"

def test_clean_patterns(filename):
    fpath = os.path.join(base_dir, filename)
    with open(fpath, encoding='utf-8') as f:
        text = f.read()
    
    print(f"\n--- Checking {filename} ---")
    for m in re.finditer(r'"id":\s*(\d+)[\s\S]*?"explanation":\s*"([^"]+)"', text):
        qid = m.group(1)
        exp = m.group(2)
        # Check if there is letter reference
        if re.search(r'\b(?:Opsi\s+[A-E]|Jawaban\s+[A-E]|Pilihan\s+[A-E]|Kalimat\s+[A-E]|Gambar\s+[A-E]|\([A-E]\))\b', exp, re.IGNORECASE):
            print(f"Q{qid}: {exp[:100]}...")

test_clean_patterns('kelas-xi-tl-asas.js')
test_clean_patterns('kelas-xi-asas.js')
test_clean_patterns('kelas-x-asas.js')

