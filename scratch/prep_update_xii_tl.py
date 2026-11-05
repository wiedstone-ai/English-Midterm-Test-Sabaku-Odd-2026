import os
import json
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"

def update_xii_tl_questions(filename, func_name):
    filepath = os.path.join(base_dir, filename)
    with open(filepath, encoding='utf-8') as f:
        content = f.read()

    # Find the function definition
    pattern = r'function\s+' + func_name + r'\(\)\s*\{[\s\S]*?\n\}'
    m = re.search(pattern, content)
    if not m:
        print(f"Error: {func_name} not found in {filename}")
        return

    # Let's extract the SVG_PICTURES references cleanly by reading the whole file or loading via node
    # It's cleaner to use Node.js to update the question array objects and re-serialize them.
    print(f"[{filename}] Ready to update {func_name}")

update_xii_tl_questions('kelas-xii-tl-asas.js', 'getGrade12TLAsasQuestions')
update_xii_tl_questions('kelas-xii-tl-asts.js', 'getGrade12TLAstsQuestions')

