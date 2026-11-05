# -*- coding: utf-8 -*-
"""
Builder for Grade X: kelas-x-asas.js and kelas-x-asts.js
"""
import json
import re
import sys
import os

sys.path.append(os.path.abspath("scratch"))
from svg_library import SVG_LIBRARY_JS
from tka_engine_template import get_engine_js

# We will generate balanced Grade X question banks
def build_grade_x():
    # Load questions from existing kelas-x-asts.js as base
    with open("kelas-x-asts.js", "r", encoding="utf-8") as f:
        content = f.read()

    # Extract getGrade10AstsQuestions body
    match = re.search(r'function getGrade10AstsQuestions\(\)\s*\{\s*return\s*(\[\s*\{[\s\S]*\}\s*\]);\s*\}', content)
    if not match:
        print("Error: Could not extract getGrade10AstsQuestions")
        return

    raw_json_str = match.group(1)
    # Temporary placeholder for SVGs
    svg_pattern = r'SVG_PICTURES\.(\w+)'
    clean_json_str = re.sub(svg_pattern, r'"___SVG_PICTURES.\1___"', raw_json_str)
    
    # Also handle raw `<svg...` in options if any
    # Parse JSON
    try:
        questions = json.loads(clean_json_str)
    except Exception as e:
        # If raw JS object with unquoted keys, use JS eval via node or regex
        print("JSON parse error:", e)
        return

    print(f"Extracted {len(questions)} questions for Grade X.")

    # Now let's balance the answer keys for single-choice questions and MCMA!
    # Desired single-choice answer distribution: ~7-8 A, ~7-8 B, ~7-8 C, ~7-8 D
    # Target answer sequence for single-choice questions:
    # Q1: A, Q2: B, Q3: C, Q4: D, Q5: A, Q6: B, Q7: C, Q8: D, Q9: A, Q10: B,
    # Q11: C, Q12: D, Q13: A, Q14: B, Q15: C,
    # Q26: D, Q27: A, Q28: B, Q29: C, Q30: D, Q31: A, Q32: B, Q33: C, Q34: D, Q35: A, Q36: B, Q37: C, Q38: D, Q39: A, Q40: B

    target_sc_keys = {
        1: "A", 2: "B", 3: "C", 4: "D", 5: "A", 6: "B", 7: "C", 8: "D", 9: "A", 10: "B",
        11: "C", 12: "D", 13: "A", 14: "B", 15: "C",
        26: "D", 27: "A", 28: "B", 29: "C", 30: "D",
        31: "A", 32: "B", 33: "C", 34: "D", 35: "A", 36: "B", 37: "C", 38: "D", 39: "A", 40: "B"
    }

    # Desired MCMA keys (Q21-Q25)
    target_mcma_keys = {
        21: ["A", "C"],
        22: ["B", "D"],
        23: ["A", "D"],
        24: ["B", "C"],
        25: ["A", "B"]
    }

    # Rotate / swap options in each question so that the target key holds the correct answer
    for q in questions:
        qid = q["id"]
        qtype = q.get("type", "single_choice")

        if qtype in ["single_choice", "listening_pictures", "listening_dialog", "listening_talk"]:
            target_key = target_sc_keys.get(qid)
            current_correct = q["correctAnswer"]
            if target_key and target_key != current_correct and Array_has_options(q):
                swap_single_choice_target(q, current_correct, target_key)

        elif qtype == "mcma":
            target_keys = target_mcma_keys.get(qid)
            current_keys = q["correctAnswer"]
            if target_keys and sorted(target_keys) != sorted(current_keys):
                swap_mcma_target(q, current_keys, target_keys)

    # Convert back to JS string
    q_out_str = json.dumps(questions, indent=2, ensure_ascii=False)
    q_out_str = re.sub(r'"___SVG_PICTURES\.(\w+)___"', r'SVG_PICTURES.\1', q_out_str)

    # Build kelas-x-asas.js
    engine_asas = get_engine_js("ASAS Gasal", "X", "Kelas X (Fase E)", "sabaku_asas_progress_X", "practice", is_asts=False)
    full_asas = f"""/**
 * ASESMEN SUMATIF AKHIR SEMESTER (ASAS) GASAL & LATIHAN KOMPREHENSIF 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT X (FASE E)
 * Standar: TKA & AKM Literasi (Pilihan Ganda Biasa, Kompleks Matrix, & MCMA)
 */

{SVG_LIBRARY_JS}

function getQuestionBank() {{
  return {q_out_str};
}}

{engine_asas}
"""
    with open("kelas-x-asas.js", "w", encoding="utf-8") as f:
        f.write(full_asas)
    print("kelas-x-asas.js generated.")

    # Build kelas-x-asts.js
    engine_asts = get_engine_js("ASTS Gasal", "X", "Kelas X (Fase E)", "sabaku_asts_progress_X", "exam", is_asts=True)
    full_asts = f"""/**
 * ASESMEN SUMATIF TENGAH SEMESTER (ASTS) GASAL 2026
 * SMA NEGERI 1 BAE KUDUS (SABAKU)
 * BAHASA INGGRIS TINGKAT X (FASE E)
 * Standar: TKA & AKM Literasi (Pilihan Ganda Biasa, Kompleks Matrix, & MCMA)
 * Dilengkapi Verifikasi Password ASTS Terpadu
 */

{SVG_LIBRARY_JS}

function getQuestionBank() {{
  return {q_out_str};
}}

{engine_asts}
"""
    with open("kelas-x-asts.js", "w", encoding="utf-8") as f:
        f.write(full_asts)
    print("kelas-x-asts.js generated.")

def Array_has_options(q):
    return "options" in q and isinstance(q["options"], list) and len(q["options"]) == 4

def swap_single_choice_target(q, old_key, new_key):
    # Find option with old_key and option with new_key
    opt_old = None
    opt_new = None
    for opt in q["options"]:
        if opt["key"] == old_key:
            opt_old = opt
        elif opt["key"] == new_key:
            opt_new = opt
    
    if opt_old and opt_new:
        # Swap their text/content (keeping key letter untouched)
        for field in ["text", "svg", "label"]:
            if field in opt_old or field in opt_new:
                val_old = opt_old.get(field)
                val_new = opt_new.get(field)
                if val_new is not None:
                    opt_old[field] = val_new
                else:
                    opt_old.pop(field, None)
                if val_old is not None:
                    opt_new[field] = val_old
                else:
                    opt_new.pop(field, None)
        q["correctAnswer"] = new_key

def swap_mcma_target(q, old_keys, new_keys):
    # Map old_keys options to new_keys positions
    # We want options corresponding to old_keys to now be at new_keys
    # Let's collect options content
    key_to_opt = {opt["key"]: dict(opt) for opt in q["options"]}
    
    # We want new_keys to have the correct options
    correct_contents = [key_to_opt[k] for k in old_keys]
    incorrect_contents = [key_to_opt[k] for k in ["A", "B", "C", "D"] if k not in old_keys]
    
    # Reassign
    corr_idx = 0
    incorr_idx = 0
    for opt in q["options"]:
        k = opt["key"]
        if k in new_keys:
            c = correct_contents[corr_idx]
            corr_idx += 1
        else:
            c = incorrect_contents[incorr_idx]
            incorr_idx += 1
        opt["text"] = c["text"]
    
    q["correctAnswer"] = sorted(new_keys)

if __name__ == "__main__":
    build_grade_x()
