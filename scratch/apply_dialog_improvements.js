const fs = require('fs');

const NEW_VOICE_ENGINE = `function getAvailableVoices() {
  if (!window.speechSynthesis) return [];
  const live = window.speechSynthesis.getVoices();
  if (live && live.length > 0) {
    cachedVoices = live;
    return live;
  }
  return cachedVoices || [];
}

if (typeof window !== "undefined" && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

function selectAudioVoice(role, gender, lang) {
  const voices = getAvailableVoices();
  if (!voices || voices.length === 0) return null;

  if (lang && lang.startsWith("id")) {
    const idVoice = voices.find(v => (v.lang && (v.lang.startsWith("id") || v.lang.startsWith("ID"))) || v.name.toLowerCase().includes("indonesia") || v.name.includes("Gadis") || v.name.includes("Ardi"));
    if (idVoice) return idVoice;
  }

  const enVoices = voices.filter(v => v.lang && (v.lang.startsWith("en") || v.lang.startsWith("EN")));
  if (enVoices.length === 0) return voices[0];

  const femaleKeywords = ["female", "woman", "girl", "zira", "jenny", "aria", "samantha", "victoria", "karen", "fiona", "moira", "tessa", "clara", "libby", "ana", "sonia", "natasha", "google us english", "google uk english female"];
  const maleKeywords = ["male", "man", "boy", "david", "guy", "mark", "ryan", "george", "daniel", "alex", "fred", "oliver", "steffan", "google uk english male", "james", "tom", "richard"];

  const matchedFemale = enVoices.find(v => femaleKeywords.some(k => v.name.toLowerCase().includes(k)));
  let matchedMale = enVoices.find(v => maleKeywords.some(k => v.name.toLowerCase().includes(k)));

  // Ensure male and female are paired with different voices if at least 2 english voices exist
  if (matchedFemale && matchedMale && matchedFemale.name === matchedMale.name && enVoices.length >= 2) {
    matchedMale = enVoices.find(v => v.name !== matchedFemale.name) || matchedMale;
  }
  if (!matchedMale && matchedFemale && enVoices.length >= 2) {
    matchedMale = enVoices.find(v => v.name !== matchedFemale.name);
  }
  if (!matchedFemale && matchedMale && enVoices.length >= 2) {
    const altFemale = enVoices.find(v => v.name !== matchedMale.name);
    if (altFemale && gender === "female") return altFemale;
  }

  if (gender === "female") {
    return matchedFemale || enVoices[0];
  } else if (gender === "male") {
    return matchedMale || (enVoices.length > 1 ? enVoices[1] : enVoices[0]);
  }

  // Default narrator voice
  const narratorVoice = enVoices.find(v => v.name.includes("Natural") || v.name.includes("David") || v.name.includes("Google") || v.name.includes("Aria")) || enVoices[0];
  return narratorVoice;
}

function playNextAudioSegment() {
  if (!isAudioPlaying) return;
  if (audioQueueIdx >= audioQueue.length) {
    isAudioPlaying = false;
    audioQueue = [];
    audioQueueIdx = 0;
    const playBtn = document.getElementById("btn-play-audio");
    const playText = document.getElementById("play-text");
    const statusText = document.getElementById("audio-status-text");
    if (playText) playText.textContent = "Putar Ulang";
    if (playBtn) playBtn.style.backgroundColor = "var(--accent-teal)";
    if (statusText) statusText.textContent = "✅ Pemutaran audio selesai. Silakan pilih jawaban Anda.";
    return;
  }
  const seg = audioQueue[audioQueueIdx++];
  const utt = new SpeechSynthesisUtterance(seg.text);
  utt.lang = seg.lang || "en-US";

  const matchedVoice = selectAudioVoice(seg.role, seg.gender, seg.lang);
  if (matchedVoice) utt.voice = matchedVoice;

  if (seg.pitch !== undefined) {
    utt.pitch = seg.pitch;
  } else if (seg.gender === "female") {
    utt.pitch = 1.30;
  } else if (seg.gender === "male") {
    utt.pitch = 0.75;
  } else {
    utt.pitch = 1.0;
  }

  let rateMult = seg.rateMultiplier || 1.0;
  if (seg.gender === "female" && !seg.rateMultiplier) rateMult = 1.04;
  else if (seg.gender === "male" && !seg.rateMultiplier) rateMult = 0.94;
  else if (seg.role === "narrator" && !seg.rateMultiplier) rateMult = 0.96;
  utt.rate = audioSpeechRate * rateMult;

  utt.onend = () => {
    if (isAudioPlaying) setTimeout(playNextAudioSegment, seg.pauseAfter || 360);
  };
  utt.onerror = () => {
    if (isAudioPlaying) playNextAudioSegment();
  };
  window.speechSynthesis.speak(utt);
}`;

console.log('Voice engine snippet prepared.');

