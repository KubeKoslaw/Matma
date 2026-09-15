// sounds.ts - Port SoundFX z legacy/js/modules/trainer.js (Web Audio, 100% offline).
// Zachowuje kontrakt window.trainerSounds — z niego korzysta też materiały (celebrate).
// PR2: trener przejdzie na import bezpośredni; kontrakt window zostaje dla kompatybilności.

class SoundFX {
  private ctx: AudioContext | null = null;
  muted: boolean;

  constructor() {
    this.muted = localStorage.getItem("trig_sound_muted") === "true";
  }

  init() {
    if (!this.ctx && typeof AudioContext !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      if (this.ctx.state === "suspended") this.ctx.resume();
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, t); // C5
      osc.frequency.setValueAtTime(659.25, t + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, t + 0.16); // G5
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      osc.start(t);
      osc.stop(t + 0.35);
    } catch { /* brak wsparcia audio — ignorujemy */ }
  }

  playWrong() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      if (this.ctx.state === "suspended") this.ctx.resume();
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = "triangle";
      osc.frequency.setValueAtTime(220, t); // A3
      osc.frequency.linearRampToValueAtTime(140, t + 0.25);
      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      osc.start(t);
      osc.stop(t + 0.3);
    } catch { /* brak wsparcia audio — ignorujemy */ }
  }

  playLevelUp() {
    if (this.muted) return;
    this.init();
    const ctx = this.ctx;
    if (!ctx) return;
    try {
      if (ctx.state === "suspended") ctx.resume();
      const t = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, t + i * 0.09);
        gain.gain.setValueAtTime(0.15, t + i * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.09 + 0.3);
        osc.start(t + i * 0.09);
        osc.stop(t + i * 0.09 + 0.3);
      });
    } catch { /* brak wsparcia audio — ignorujemy */ }
  }
}

export const trainerSounds = new SoundFX();
window.trainerSounds = trainerSounds;
