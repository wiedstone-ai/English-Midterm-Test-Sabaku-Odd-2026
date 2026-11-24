import os

BASE_DIR = r"c:\Users\LILI\OneDrive - PDK Jateng\Dokumen\English-Midterm-Test-Sabaku-Odd-2026"
OLD_URL = "https://script.google.com/macros/s/AKfycbz3M4guY77PrNH89TFG-NR_1S7gMaJjQ2TFh8xgOvNeDMyuwZWfwZVvv1YyXgOa3Xu9-Q/exec"
NEW_URL = "https://script.google.com/macros/s/AKfycbzEAZ06v-tooNexfkonEizne2ou015Ik0f2GND8m0x97psfWmMqDNl4I2fDkNmDcTwx/exec"

def update_file_text(filepath, transform_fn):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = transform_fn(content)
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8', newline='\n') as f:
            f.write(new_content)
        print(f"Updated: {os.path.basename(filepath)}")
        return True
    return False

# 1. Update GAS URL across all files
for root, dirs, files in os.walk(BASE_DIR):
    if ".git" in root:
        continue
    for file in files:
        if file.endswith((".js", ".html")):
            fp = os.path.join(root, file)
            def replace_url(text):
                return text.replace(OLD_URL, NEW_URL)
            update_file_text(fp, replace_url)

# 2. Add proctoring.js to all kelas-*.html files
for file in os.listdir(BASE_DIR):
    if file.startswith("kelas-") and file.endswith(".html"):
        fp = os.path.join(BASE_DIR, file)
        def add_proctoring_script(text):
            if "proctoring.js" in text:
                return text
            target = "</body>"
            replacement = '  <!-- Live Proctoring & Anti-Cheat Engine -->\n  <script src="proctoring.js"></script>\n</body>'
            return text.replace(target, replacement)
        update_file_text(fp, add_proctoring_script)

# 3. Update masuk-asts.html with clean SVG camera test
masuk_fp = os.path.join(BASE_DIR, "masuk-asts.html")
with open(masuk_fp, 'r', encoding='utf-8') as f:
    masuk_text = f.read()

if "Integritas Asesmen Jarak Jauh &amp; Kamera Pengawas" not in masuk_text:
    card_html = (
        '      <!-- Protokol Pengawasan & Uji Kamera -->\n'
        '      <div style="background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 8px; padding: 14px 16px; margin-bottom: 20px;">\n'
        '        <div style="font-weight: 700; color: #166534; font-size: 0.92rem; display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">\n'
        '          <svg width="20" height="20" fill="none" stroke="#166534" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>\n'
        '          <span>Integritas Asesmen Jarak Jauh &amp; Kamera Pengawas</span>\n'
        '        </div>\n'
        '        <p style="font-size: 0.82rem; color: #334155; line-height: 1.45; margin-bottom: 10px;">\n'
        '          Selama ujian, <strong>kamera peramban wajib aktif</strong> dan sistem secara otomatis <strong>mencatat jika Anda berpindah tab / membuka aplikasi lain</strong> (maksimal 3x peringatan sebelum ujian otomatis dihentikan).\n'
        '        </p>\n'
        '        <div id="cam-test-area" style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; border: 1px solid #bbf7d0; border-radius: 6px; padding: 8px 12px; gap: 10px;">\n'
        '          <div style="display: flex; align-items: center; gap: 10px;">\n'
        '            <video id="preview-test-video" autoplay playsinline muted style="display: none; width: 60px; height: 45px; object-fit: cover; border-radius: 4px; border: 2px solid #22c55e; transform: scaleX(-1);"></video>\n'
        '            <div id="cam-status-label" style="font-size: 0.82rem; font-weight: 600; color: #64748b;">\n'
        '              Status Kamera: <span style="color: #ea580c;">Belum Diuji</span>\n'
        '            </div>\n'
        '          </div>\n'
        '          <button type="button" id="btn-test-cam" onclick="testStudentWebcam()" class="btn btn-outline" style="padding: 5px 12px; font-size: 0.8rem; border-color: #16a34a; color: #166534; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">\n'
        '            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>\n'
        '            <span>Uji Kamera</span>\n'
        '          </button>\n'
        '        </div>\n'
        '      </div>\n\n'
        '      <!-- Form Input Password -->'
    )
    masuk_text = masuk_text.replace('      <!-- Form Input Password -->', card_html)

if "testStudentWebcam" not in masuk_text:
    script_hook = (
        '    let previewStream = null;\n'
        '    let isWebcamReady = false;\n\n'
        '    async function testStudentWebcam() {\n'
        '      const lbl = document.getElementById("cam-status-label");\n'
        '      const btn = document.getElementById("btn-test-cam");\n'
        '      const vid = document.getElementById("preview-test-video");\n\n'
        '      lbl.innerHTML = "Status Kamera: <span style=\\"color: #2563eb;\\">Menghubungkan...</span>";\n'
        '      try {\n'
        '        previewStream = await navigator.mediaDevices.getUserMedia({\n'
        '          video: { facingMode: "user", width: { ideal: 320 }, height: { ideal: 240 } },\n'
        '          audio: false\n'
        '        });\n'
        '        vid.srcObject = previewStream;\n'
        '        vid.style.display = "block";\n'
        '        lbl.innerHTML = "Status Kamera: <span style=\\"color: #16a34a; font-weight: 700;\\">Aktif &amp; Siap</span>";\n'
        '        btn.innerHTML = "<span style=\\"color: #16a34a;\\">Kamera OK</span>";\n'
        '        btn.disabled = true;\n'
        '        btn.style.borderColor = "#16a34a";\n'
        '        isWebcamReady = true;\n'
        '      } catch (err) {\n'
        '        console.warn("Webcam test failed:", err);\n'
        '        lbl.innerHTML = "Status Kamera: <span style=\\"color: #dc2626; font-weight: 700;\\">Ditolak/Tidak Ditemukan</span>";\n'
        '        alert("Izin kamera belum diberikan! Silakan klik ikon gembok / kamera di bilah alamat browser untuk mengizinkan akses kamera.");\n'
        '      }\n'
        '    }\n\n'
        '    function grantAccess() {\n'
        '      if (previewStream) {\n'
        '        try {\n'
        '          previewStream.getTracks().forEach(function(t) { t.stop(); });\n'
        '        } catch (e) {}\n'
        '      }\n'
    )
    masuk_text = masuk_text.replace('    function grantAccess() {', script_hook)

with open(masuk_fp, 'w', encoding='utf-8', newline='\n') as f:
    f.write(masuk_text)
print("Updated masuk-asts.html successfully.")
