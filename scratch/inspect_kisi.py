import os

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
with open(os.path.join(base_dir, 'kisi-kisi.html'), encoding='utf-8') as f:
    text = f.read()

pos = text.find('id="card-xii-tl"')
print(text[pos:pos+3000])

