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

for fname in js_files:
    fpath = os.path.join(base_dir, fname)
    if not os.path.exists(fpath):
        continue
    with open(fpath, encoding='utf-8') as f:
        content = f.read()
    
    orig = content
    
    # 1. randomizeQuestionOptions - remove matrix statements shuffle
    # Matches:
    # if (cloned.type === "complex_matrix" ... cloned.matrixStatements = stmts; \s* } else if (Array.isArray(cloned.options)
    content = re.sub(
        r'if\s*\(\s*cloned\.type\s*===\s*"complex_matrix"\s*&&[\s\S]*?cloned\.matrixStatements\s*=\s*stmts;\s*\}\s*else\s*if\s*\(Array\.isArray\(cloned\.options\)',
        r'// NOTE: DO NOT shuffle complex_matrix statements so that Pernyataan 1, 2, 3, 4 strictly match table rows\n    if (cloned.type !== "complex_matrix" && Array.isArray(cloned.options)',
        content
    )
    # in app.js / others where q.matrixStatements = shuffleArray(q.matrixStatements);
    content = re.sub(
        r'if\s*\(\s*q\.type\s*===\s*"complex_matrix"\s*&&[\s\S]*?q\.matrixStatements\s*=\s*shuffleArray\(q\.matrixStatements\);\s*\}\s*else\s*if',
        r'// DO NOT shuffle matrix statements\n    if (q.type !== "complex_matrix" &&',
        content
    )
    
    # 2. expBox display condition
    content = re.sub(
        r'if\s*\(\s*isExamSubmitted\s*\|\|\s*\(\s*currentMode\s*===\s*"practice"\s*&&[\s\S]*?isQuestionAnswered\(q\.id\)\s*\)\s*\)\s*\{',
        r'if (isExamSubmitted) {',
        content
    )
    
    # 3. Guard click handlers when test is submitted
    # card.onclick
    content = re.sub(
        r'(card\.onclick\s*=\s*\(\)\s*=>\s*\{)(?!\s*if\s*\(isExamSubmitted\)\s*return;)',
        r'\1\n      if (isExamSubmitted) return;',
        content
    )
    # item.onclick
    content = re.sub(
        r'(item\.onclick\s*=\s*\(\)\s*=>\s*\{)(?!\s*if\s*\(isExamSubmitted\)\s*return;)',
        r'\1\n      if (isExamSubmitted) return;',
        content
    )
    # handleMatrixSelect
    content = re.sub(
        r'(function\s+handleMatrixSelect\([^{]+\{\s*)(?!\s*if\s*\(isExamSubmitted\)\s*return;)',
        r'\1if (isExamSubmitted) return;\n  ',
        content
    )
    # setMatrixAnswer
    content = re.sub(
        r'(function\s+setMatrixAnswer\([^{]+\{\s*)(?!\s*if\s*\(isExamSubmitted\)\s*return;)',
        r'\1if (isExamSubmitted) return;\n  ',
        content
    )
    # handleMCMAToggle
    content = re.sub(
        r'(function\s+handleMCMAToggle\([^{]+\{\s*)(?!\s*if\s*\(isExamSubmitted\)\s*return;)',
        r'\1if (isExamSubmitted) return;\n  ',
        content
    )
    # toggleMCMAAnswer
    content = re.sub(
        r'(function\s+toggleMCMAAnswer\([^{]+\{\s*)(?!\s*if\s*\(isExamSubmitted\)\s*return;)',
        r'\1if (isExamSubmitted) return;\n  ',
        content
    )
    
    if content != orig:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"[OK] Updated engine in {fname}")
    else:
        print(f"[NO CHANGE] {fname}")

