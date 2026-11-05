import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
with open(os.path.join(base_dir, 'kelas-xii-tl-asas.js'), encoding='utf-8') as f:
    text = f.read()

for qid in [17, 22, 31, 32]:
    m = re.search(r'\{\s*"id":\s*' + str(qid) + r',[\s\S]*?\n  \},', text)
    if m:
        print(f"==================== Q{qid} ====================")
        print(m.group(0))

