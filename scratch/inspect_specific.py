import json
import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
with open(os.path.join(base_dir, 'kelas-xii-tl-asas.js'), encoding='utf-8') as f:
    text = f.read()

for qid in [19, 20, 21]:
    pos = text.find(f'"id": {qid},')
    if pos != -1:
        print(f"==================== Q{qid} ====================")
        print(text[pos:pos+1500])

