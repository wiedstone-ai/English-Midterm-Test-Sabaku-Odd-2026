import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
pattern = re.compile(r'(?:Opsi\s+[A-E]|Jawaban\s+[A-E]|Pilihan\s+[A-E]|Kalimat\s+[A-E]|Gambar\s+[A-E]|\([A-E]\))', re.IGNORECASE)

for fname in ['kelas-xii-tl-asas.js', 'kelas-xii-asas.js', 'kelas-xi-tl-asas.js', 'kelas-xi-asas.js', 'kelas-x-asas.js']:
    fpath = os.path.join(base_dir, fname)
    with open(fpath, encoding='utf-8') as f:
        text = f.read()
    print(f"\n=== {fname} ===")
    for m in re.finditer(r'\{\s*"id":\s*(\d+)[\s\S]*?"explanation":\s*"([^"]+)"', text):
        qid = m.group(1)
        exp = m.group(2)
        found = pattern.findall(exp)
        if found:
            print(f"  Q{qid} [{', '.join(found)}]: {exp}")

