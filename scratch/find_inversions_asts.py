import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
with open(os.path.join(base_dir, 'kelas-xii-tl-asts.js'), encoding='utf-8') as f:
    text = f.read()

questions = text.split('"id": ')
print(f"Total question blocks in kelas-xii-tl-asts.js: {len(questions)-1}")

for i, q in enumerate(questions[1:], 1):
    qid = q.split(',')[0].strip()
    if re.search(r'invers', q, re.IGNORECASE):
        print(f"\n--- Question ID {qid} has inversion ---")
        for field in ['title', 'stimulusTitle', 'prompt', 'grammarNote']:
            m = re.search(r'"' + field + r'":\s*"([^"]+)"', q)
            if m:
                print(f"  {field}: {m.group(1)}")

