import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
with open(os.path.join(base_dir, 'kelas-xii-tl-asas.js'), encoding='utf-8') as f:
    text = f.read()

questions_raw = text.split('"id": ')
print(f"Total questions found: {len(questions_raw)-1}")

for i, q_chunk in enumerate(questions_raw[1:], 1):
    qid = q_chunk.split(',')[0].strip()
    
    # Extract fields
    q_type = re.search(r'"type":\s*"([^"]+)"', q_chunk)
    title = re.search(r'"title":\s*"([^"]+)"', q_chunk)
    ans = re.search(r'"correctAnswer":\s*(\[[^\]]+\]|"[^"]+")', q_chunk)
    exp = re.search(r'"explanation":\s*"([^"]+)"', q_chunk)
    
    q_type_str = q_type.group(1) if q_type else ""
    title_str = title.group(1) if title else ""
    ans_str = ans.group(1) if ans else ""
    exp_str = exp.group(1) if exp else ""
    
    # Check for hardcoded option letters in explanation:
    # like "Opsi A", "Jawaban A", "Pilihan A", "(A)", "Kalimat A"
    letter_matches = re.findall(r'(?:Opsi\s+[A-E]|Jawaban\s+[A-E]|Pilihan\s+[A-E]|Kalimat\s+[A-E]|\([A-E]\))', exp_str, re.IGNORECASE)
    
    # Check for inversion
    has_inversion = bool(re.search(r'invers', q_chunk, re.IGNORECASE))
    
    flag = ""
    if letter_matches:
        flag += f" [HARDCODED LETTERS: {letter_matches}]"
    if has_inversion:
        flag += " [INVERSION!]"
    if q_type_str == "complex_matrix":
        flag += " [MATRIX]"
        
    print(f"Q{qid} ({q_type_str}): ans={ans_str}{flag}")
    if flag:
        print(f"    exp: {exp_str[:120]}...")

