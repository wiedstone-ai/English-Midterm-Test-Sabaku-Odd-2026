import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
with open(os.path.join(base_dir, 'kelas-xii-asas.js'), encoding='utf-8') as f:
    text = f.read()

pos = text.find('"id": 22,')
print(text[pos:pos+1500])

