import os

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"
files = [f for f in os.listdir(base_dir) if f.endswith('.js')]
print("JS files:", files)

