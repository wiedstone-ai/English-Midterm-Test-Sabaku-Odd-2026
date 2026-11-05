import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
text = open(os.path.join(base_dir, 'kelas-xi-tl-asas.js'), encoding='utf-8').read()
pos = text.find('function submitTest')
print(text[pos:pos+1500])

