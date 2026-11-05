import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
js_files = [
    'kelas-xii-tl-asas.js', 'kelas-xii-tl-asts.js',
    'kelas-xii-asas.js', 'kelas-xii-asts.js',
    'kelas-xi-tl-asas.js', 'kelas-xi-tl-asts.js',
    'kelas-xi-asas.js', 'kelas-xi-asts.js',
    'kelas-x-asas.js', 'kelas-x-asts.js',
    'app.js', 'kelas-x.js', 'kelas-xi.js', 'kelas-xii.js'
]

pattern = re.compile(r'(?:Opsi\s+[A-E]|Jawaban\s+[A-E]|Pilihan\s+[A-E]|Kalimat\s+[A-E]|Gambar\s+[A-E]|\([A-E]\))', re.IGNORECASE)

for fname in js_files:
    fpath = os.path.join(base_dir, fname)
    if not os.path.exists(fpath):
        continue
    with open(fpath, encoding='utf-8') as f:
        text = f.read()
    
    matches = []
    # search within explanation fields
    for m in re.finditer(r'"id":\s*(\d+)[\s\S]*?"explanation":\s*"([^"]+)"', text):
        qid = m.group(1)
        exp = m.group(2)
        found = pattern.findall(exp)
        if found:
            matches.append((qid, found, exp))
    print(f"=== {fname}: {len(matches)} questions with letter references ===")

