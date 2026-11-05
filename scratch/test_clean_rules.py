import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"

def clean_exp(text):
    # Regex cleanups
    t = text
    # Remove trailing "(Opsi X)." or "(Opsi X)"
    t = re.sub(r'\s*\(Opsi\s+[A-E]\)\.?', '.', t)
    # Remove "(Gambar X)"
    t = re.sub(r'\s*\(Gambar\s+[A-E]\)\.?', '', t)
    # Remove "Pilihan X tepat." / "Pilihan X paling tepat."
    t = re.sub(r'\s*Pilihan\s+[A-E]\s+(?:paling\s+)?tepat\.?', '', t)
    # Remove "Jawaban X tepat." / "Jawaban X adalah kutipan akurat."
    t = re.sub(r'\s*Jawaban\s+[A-E]\s+(?:adalah\s+kutipan\s+akurat|paling\s+tepat|tepat)\.?', '', t)
    # Remove "Gambar X tepat."
    t = re.sub(r'\s*Gambar\s+[A-E]\s+tepat\.?', '', t)
    # Replace "Gambar X menampilkan" -> "Gambar yang sesuai menampilkan"
    t = re.sub(r'Gambar\s+[A-E]\s+menampilkan', 'Gambar yang sesuai menampilkan', t)
    t = re.sub(r'Gambar\s+[A-E]\s+mencerminkan', 'Gambar yang sesuai mencerminkan', t)
    t = re.sub(r'Gambar\s+[A-E]\s+merepresentasikan', 'Gambar yang sesuai merepresentasikan', t)
    t = re.sub(r'Gambar\s+[A-E]\s+memperlihatkan', 'Gambar yang sesuai memperlihatkan', t)
    
    # Clean up double spaces or dangling punctuation
    t = re.sub(r'\s+', ' ', t).strip()
    if not t.endswith('.'):
        t += '.'
    return t

with open(os.path.join(base_dir, 'kelas-xi-tl-asas.js'), encoding='utf-8') as f:
    raw = f.read()

for m in re.finditer(r'\{\s*"id":\s*(\d+)[\s\S]*?"explanation":\s*"([^"]+)"', raw):
    qid = m.group(1)
    orig = m.group(2)
    cleaned = clean_exp(orig)
    if orig != cleaned:
        print(f"Q{qid}:")
        print(f"  ORIG : {orig}")
        print(f"  CLEAN: {cleaned}")

