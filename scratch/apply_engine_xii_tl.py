import os
import re

base_dir = r"c:\Users\KOMPUTERKU2\Documents\English-Midterm-Test-Sabaku-Odd-2026"

def update_xii_tl(filename):
    filepath = os.path.join(base_dir, filename)
    with open(filepath, encoding='utf-8') as f:
        content = f.read()
    
    # 1. Update engine randomizeQuestionOptions to not shuffle matrixStatements
    old_rand = '''    if (cloned.type === "complex_matrix" && Array.isArray(cloned.matrixStatements)) {
      const stmts = [...cloned.matrixStatements];
      for (let i = stmts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [stmts[i], stmts[j]] = [stmts[j], stmts[i]];
      }
      cloned.matrixStatements = stmts;
    } else if (Array.isArray(cloned.options) && cloned.options.length > 0) {'''
    
    new_rand = '''    // NOTE: DO NOT shuffle complex_matrix statements so that Pernyataan 1, 2, 3, 4
    // always correspond strictly with the explanation and table rows.
    if (cloned.type !== "complex_matrix" && Array.isArray(cloned.options) && cloned.options.length > 0) {'''
    
    if old_rand in content:
        content = content.replace(old_rand, new_rand)
        print(f"[{filename}] Updated randomizeQuestionOptions successfully.")
    else:
        print(f"[{filename}] WARNING: old_rand pattern not found.")
        
    # 2. Update expBox condition in renderQuestion
    old_exp = 'if (isExamSubmitted || (currentMode === "practice" && isQuestionAnswered(q.id))) {'
    new_exp = 'if (isExamSubmitted) {'
    if old_exp in content:
        content = content.replace(old_exp, new_exp)
        print(f"[{filename}] Updated expBox condition successfully.")
    else:
        print(f"[{filename}] WARNING: old_exp pattern not found.")
        
    # 3. Guard click handlers when isExamSubmitted is true
    # renderPictureChoices:
    old_pic_click = '''    card.onclick = () => {
      userAnswers[q.id] = opt.key;
      renderQuestion(currentQuestionIndex);
    };'''
    new_pic_click = '''    card.onclick = () => {
      if (isExamSubmitted) return;
      userAnswers[q.id] = opt.key;
      renderQuestion(currentQuestionIndex);
    };'''
    if old_pic_click in content:
        content = content.replace(old_pic_click, new_pic_click)
        print(f"[{filename}] Updated pic click handler.")
        
    # renderSingleChoices:
    old_single_click = '''    item.onclick = () => {
      userAnswers[q.id] = opt.key;
      renderQuestion(currentQuestionIndex);
    };'''
    new_single_click = '''    item.onclick = () => {
      if (isExamSubmitted) return;
      userAnswers[q.id] = opt.key;
      renderQuestion(currentQuestionIndex);
    };'''
    if old_single_click in content:
        content = content.replace(old_single_click, new_single_click)
        print(f"[{filename}] Updated single click handler.")

    # handleMatrixSelect:
    old_matrix_sel = '''function handleMatrixSelect(qId, stIdx, value) {
  if (!userAnswers[qId] || typeof userAnswers[qId] !== "object" || Array.isArray(userAnswers[qId])) {'''
    new_matrix_sel = '''function handleMatrixSelect(qId, stIdx, value) {
  if (isExamSubmitted) return;
  if (!userAnswers[qId] || typeof userAnswers[qId] !== "object" || Array.isArray(userAnswers[qId])) {'''
    if old_matrix_sel in content:
        content = content.replace(old_matrix_sel, new_matrix_sel)
        print(f"[{filename}] Updated handleMatrixSelect.")

    # handleMCMAToggle:
    old_mcma_tog = '''function handleMCMAToggle(qId, optKey) {
  let selected = userAnswers[qId] || [];'''
    new_mcma_tog = '''function handleMCMAToggle(qId, optKey) {
  if (isExamSubmitted) return;
  let selected = userAnswers[qId] || [];'''
    if old_mcma_tog in content:
        content = content.replace(old_mcma_tog, new_mcma_tog)
        print(f"[{filename}] Updated handleMCMAToggle.")
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"[{filename}] File written.")

update_xii_tl('kelas-xii-tl-asas.js')
update_xii_tl('kelas-xii-tl-asts.js')

