import os
import json
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
file_path = os.path.join(base_dir, 'kelas-xii-tl-asas.js')
with open(file_path, encoding='utf-8') as f:
    content = f.read()

# Extract getGrade12TLAsasQuestions function
match = re.search(r'function getGrade12TLAsasQuestions\(\)\s*\{([\s\S]*?)\n\}\s*\nlet studentIdentity', content)
if not match:
    print("Could not find getGrade12TLAsasQuestions function")
else:
    print("Found getGrade12TLAsasQuestions!")

