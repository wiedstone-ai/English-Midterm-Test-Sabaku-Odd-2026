// -*- coding: utf-8 -*-
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve('.');

// Kelas XII Wajib Kisi-Kisi HTML
const kisiWajib = `          <div class="kisi-kisi-grid">
            <div class="kisi-item">
              <strong>1. Listening Section (10 Soal - Multi-Speaker Audio):</strong>
              Part I (1-3): Multimodal Pictures (Academic Debate, Renewable Solar/Wind Array, &amp; Smart IoT Greenhouse)<br>
              Part II (4-6): Short Dialogues (Generative AI Ethics, Clean Geothermal vs Nuclear Energy, &amp; Literary Resilience in "The Rainbow Troops")<br>
              Part III (7-10): Academic Talks (Renewable Energy Intermittency Dilemma &amp; Shifting Cognitive Competence in the AI Era)
            </div>
            <div class="kisi-item">
              <strong>2. Reading Discussion Text (5 Soal):</strong>
              Soal 11-15: Generative Artificial Intelligence in Secondary Classrooms (Tujuan komunikatif teks, gagasan pro/kontra, rekomendasi kebijakan berimbang, kosakata B2)
            </div>
            <div class="kisi-item">
              <strong>3. Pilihan Ganda Kompleks Matrix True/False — Standar TKA (5 Soal):</strong>
              Soal 16-20: Evaluasi Argumen Kritis Teks AI, Kaidah Pengandaian Type 3 (Unreal Past Conditionals), Konjungsi Pertentangan/Konsesi (However, Despite, In spite of), Fakta Resensi Sastra Laskar Pelangi, dan Modal Deduksi Masa Lalu (must have, might have).
            </div>
            <div class="kisi-item">
              <strong>4. Pilihan Ganda Kompleks MCMA — Pilih 2 Opsi Benar (5 Soal):</strong>
              Soal 21-25: Prinsip Pemanfaatan AI yang Etis dan Kritis, Pola Kalimat Conditional Type 3 Baku, Konjungsi Transisi Pertentangan, Nilai Karakter Novel Laskar Pelangi, dan Kalimat Tak Langsung (Reported Speech).
            </div>
            <div class="kisi-item">
              <strong>5. Reading Review Text &amp; Grammar Applied (15 Soal):</strong>
              Soal 26-30: Critical Review Text Andrea Hirata's "The Rainbow Troops" (Laskar Pelangi)<br>
              Soal 31-40: Contrastive Connectors (However, On the other hand), Concessive Clauses (Despite vs In spite of), Conditionals Type 2 &amp; Type 3, Modals of Deduction, Impersonal Passive, dan Relative Clauses.
            </div>
          </div>`;

// Kelas XII TL Kisi-Kisi HTML
const kisiTL = `          <div class="kisi-kisi-grid">
            <div class="kisi-item">
              <strong>1. Listening Section (10 Soal - Multi-Speaker Audio):</strong>
              Part I (1-3): Multimodal Pictures (Modern Science Lab, Youth Diplomatic Assembly, &amp; Clean Energy Fusion Reactor)<br>
              Part II (4-6): Advanced Dialogues (Cashless Society for Youth, Pramoedya's "This Earth of Mankind", &amp; Community Environmental Leadership)<br>
              Part III (7-10): Lectures &amp; Addresses (Indonesian Literature &amp; Social Awakening, Algorithmic Literacy &amp; Digital Citizenship)
            </div>
            <div class="kisi-item">
              <strong>2. Reading Discussion Text (5 Soal):</strong>
              Soal 11-15: The Transition to a Cashless Society: Financial Inclusion and Modern Convenience vs. Digital Security (Tujuan komunikatif, argumen pro/kontra, kosakata B2, rekomendasi ekosistem hibrida)
            </div>
            <div class="kisi-item">
              <strong>3. Pilihan Ganda Kompleks Matrix True/False — Standar TKA (5 Soal):</strong>
              Soal 16-20: Evaluasi Fakta Wacana Masyarakat Nontunai, Pengandaian Bentuk Inversi (Had, Were, Should), Kalimat Cleft untuk Penekanan (It-cleft &amp; Wh-cleft), Evaluasi Fakta Resensi Novel "Bumi Manusia", dan Konjungsi Konsesi Maju (Much as, Whereas).
            </div>
            <div class="kisi-item">
              <strong>4. Pilihan Ganda Kompleks MCMA — Pilih 2 Opsi Benar (5 Soal):</strong>
              Soal 21-25: Keunggulan Utama Transaksi Digital, Pola Inversi Pengandaian Baku, Kalimat Cleft Gramatikal, Keteladanan Karakter Novel "Bumi Manusia", dan Transisi Pertentangan Akademik.
            </div>
            <div class="kisi-item">
              <strong>5. Reading Literary Review &amp; Advanced Grammar (15 Soal):</strong>
              Soal 26-30: Literary Review: Pramoedya Ananta Toer's "This Earth of Mankind" (Bumi Manusia) - Masterpiece of Human Dignity and Education<br>
              Soal 31-40: Inverted Conditionals Type 1 &amp; Type 3, Cleft Sentences (that, what), Concession (Much as, In spite of), Subjunctive Mood (recommend that... adopt), Impersonal Passive, dan Transitional Discourse Adverbs.
            </div>
          </div>`;

function updateFile(filename, newKisi) {
  const filePath = path.join(rootDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(filename, 'does not exist');
    return;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  const regex = /<div class="kisi-kisi-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  if (!regex.test(content)) {
    console.log(filename, 'kisi grid not matched');
    return;
  }
  content = content.replace(regex, newKisi + '\n        </div>\n      </div>');
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(filename, 'kisi-kisi updated!');
}

updateFile('kelas-xii-asas.html', kisiWajib);
updateFile('kelas-xii-asts.html', kisiWajib);
updateFile('kelas-xii-tl-asas.html', kisiTL);
updateFile('kelas-xii-tl-asts.html', kisiTL);
