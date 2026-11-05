import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"

def inspect_file(fname):
    fpath = os.path.join(base_dir, fname)
    with open(fpath, encoding='utf-8') as f:
        text = f.read()
    pattern = re.compile(r'(?:Opsi\s+[A-E]|Jawaban\s+[A-E]|Pilihan\s+[A-E]|Kalimat\s+[A-E]|Gambar\s+[A-E]|\([A-E]\))', re.IGNORECASE)
    
    print(f"==================== {fname} ====================")
    for m in re.finditer(r'\{\s*"id":\s*(\d+)[\s\S]*?"explanation":\s*"([^"]+)"', text):
        qid = m.group(1)
        exp = m.group(2)
        found = pattern.findall(exp)
        if found:
            print(f"Q{qid} [{', '.join(found)}]: {exp}")

inspect_file('kelas-xii-tl-asas.js')
inspect_file('kelas-xii-asas.js')

