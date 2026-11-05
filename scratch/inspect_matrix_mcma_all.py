import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"

def inspect_range(fname, q_range):
    fpath = os.path.join(base_dir, fname)
    with open(fpath, encoding='utf-8') as f:
        text = f.read()
    print(f"\n==================== {fname} ====================")
    for qid in q_range:
        m = re.search(r'\{\s*"id":\s*' + str(qid) + r',[\s\S]*?\n  \},', text)
        if m:
            # print prompt, ans, and explanation
            q_chunk = m.group(0)
            title = re.search(r'"title":\s*"([^"]+)"', q_chunk)
            exp = re.search(r'"explanation":\s*"([^"]+)"', q_chunk)
            print(f"--- Q{qid}: {title.group(1) if title else ''} ---")
            print(f"  EXP: {exp.group(1) if exp else ''}")

inspect_range('kelas-xi-asas.js', range(16, 26))
inspect_range('kelas-x-asas.js', range(16, 26))

