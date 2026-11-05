import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
with open(os.path.join(base_dir, 'kelas-xii-tl-asas.js'), encoding='utf-8') as f:
    text = f.read()

questions_raw = text.split('"id": ')
for q_chunk in questions_raw[1:]:
    qid = q_chunk.split(',')[0].strip()
    exp_m = re.search(r'"explanation":\s*"([^"]+)"', q_chunk)
    if exp_m:
        exp = exp_m.group(1)
        if re.search(r'(?:Opsi|Jawaban|Pilihan|Kalimat|\([A-E]\))', exp, re.IGNORECASE):
            print(f"Q{qid}: {exp}")

