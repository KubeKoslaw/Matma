// levels.ts - Rangi i poziomy Duolingo (port z legacy trainer.js).
// Ikony lucide zamiast emoji — spójny wygląd na każdym urządzeniu.

export interface LevelInfo {
  level: number;
  name: string;
  xpNeeded: number;
  icon: string;
  emote: string;
}

export const LEVELS: LevelInfo[] = [
  { level: 1, name: "Nowicjusz Kątów", xpNeeded: 0, icon: "sprout", emote: "happy_wave.png" },
  { level: 2, name: "Adept I Ćwiartki", xpNeeded: 60, icon: "zap", emote: "witch_wand.png" },
  { level: 3, name: "Pogromca Redukcji", xpNeeded: 160, icon: "flame", emote: "smug_thumbsup.png" },
  { level: 4, name: "Mistrz Jedynki", xpNeeded: 320, icon: "gem", emote: "magic_star.png" },
  { level: 5, name: "Władca Trygonometrii", xpNeeded: 550, icon: "crown", emote: "broom_fly.png" },
  { level: 6, name: "Arcymistrz Matematyki", xpNeeded: 900, icon: "trophy", emote: "devil_jumping.png" }
];

export function getCurrentLevel(xp: number): LevelInfo {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xpNeeded) return LEVELS[i];
  }
  return LEVELS[0];
}

export function getXpProgressText(xp: number): string {
  const cur = getCurrentLevel(xp);
  const nextIdx = LEVELS.findIndex((l) => l.level === cur.level) + 1;
  if (nextIdx >= LEVELS.length) return "MAX POZIOM!";
  const next = LEVELS[nextIdx];
  return `${xp} / ${next.xpNeeded} XP`;
}

export function getLevelProgressPercent(xp: number): number {
  const cur = getCurrentLevel(xp);
  const nextIdx = LEVELS.findIndex((l) => l.level === cur.level) + 1;
  if (nextIdx >= LEVELS.length) return 100;
  const next = LEVELS[nextIdx];
  const needed = next.xpNeeded - cur.xpNeeded;
  const current = xp - cur.xpNeeded;
  return Math.min(100, Math.max(0, Math.round((current / needed) * 100)));
}
