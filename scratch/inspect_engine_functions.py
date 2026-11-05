import os

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
with open(os.path.join(base_dir, 'kelas-xii-tl-asas.js'), encoding='utf-8') as f:
    text = f.read()

pos1 = text.find('function initTestState')
pos2 = text.find('function saveRecordToHistoryAndSheet')
print(text[pos1:pos2])

