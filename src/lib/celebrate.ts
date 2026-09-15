// celebrate.ts - Reakcje „dopaminowe" materiałów (port z legacy/js/modules/materialy.js):
// chibi-pop z emotsym, konfetti, dźwięki. Zachowane 1:1 — UI Rules: elementy dopaminowe.

import "./sounds";
import "./confetti";

const HAPPY_EMOTES = ["happy_wave.png", "wink_heart.png", "wink_star.png", "magic_star.png", "smug_thumbsup.png", "devil_cheer.png", "devil_jumping.png"];
const HAPPY_CAPTIONS = ["Świetnie!", "Yaaay!", "Kolejny zdobyty!", "Nieźle, mistrzu!", "Tak trzymaj! ⭐", "Czysta perfekcja!"];
const CHEER_EMOTES = ["devil_cheer.png", "broom_fly.png", "magic_star.png", "sparkle_pray.png"];
const MASCOT_EMOTES = ["happy_wave.png", "excited_peek.png", "blep.png", "smug.png", "scheming.png"];
export const ENCOURAGEMENTS = [
  "Powtórka to podstawa!",
  "Teoria = pewne punkty!",
  "Krok po kroku do mistrzostwa!",
  "Wzory lubią tych, którzy je czytają!",
  "Czytasz — rośniesz w siłę! 💪"
];

export const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
export const randomMascot = () => pick(MASCOT_EMOTES);

// Reakcja chibi (wzorzec trenera): wyskakująca anime-dziewczyna + okrzyk
export function chibiPop(img: string, caption: string) {
  const el = document.createElement("div");
  el.className = "mat-chibi-pop";
  el.innerHTML = `<img src="assets/emotes/${img}" alt=""><span>${caption}</span>`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1900);
}

export function celebrateSmall() {
  window.launchConfetti?.();
  window.trainerSounds?.playCorrect();
  chibiPop(pick(HAPPY_EMOTES), pick(HAPPY_CAPTIONS));
}

export function celebrateGroup(groupLabel: string) {
  window.launchConfetti?.();
  window.trainerSounds?.playLevelUp();
  chibiPop(pick(CHEER_EMOTES), "Grupa opanowana! ⭐");
  window.showToast?.(`🎉 ${groupLabel} — wszystko zrobione! Świetna robota!`, 3200);
}

export function celebrateAllTheory() {
  window.launchConfetti?.();
  window.trainerSounds?.playLevelUp();
  chibiPop(pick(CHEER_EMOTES), "Cała teoria przeczytana! 🎓");
  window.showToast?.("🎓 Cała teoria działu opanowana!", 3000);
}
