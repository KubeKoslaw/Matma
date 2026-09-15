// stages.ts - 8 etapów nauki (Ścieżka Duolingo z postaciami chibi), port z legacy trainer.js.

export type StageCategory =
  | "axes"
  | "sharp"
  | "signs"
  | "quad2"
  | "quad34"
  | "identities"
  | "advanced_reduction"
  | "matura_exam";

export interface Stage {
  id: number;
  title: string;
  desc: string;
  icon: string;
  category: StageCategory;
  emote: string;
}

export const STAGES: Stage[] = [
  { id: 1, title: "Kąty Osiowe", desc: "Wartości dla 0°, 90°, 180°, 270°, 360°", icon: "🧭", category: "axes", emote: "happy_wave.png" },
  { id: 2, title: "Kąty Ostre (I Ćwiartka)", desc: "Wartości dla 30°, 45°, 60°", icon: "📐", category: "sharp", emote: "wink_heart.png" },
  { id: 3, title: "Znaki & Wierszyk Ćwiartek", desc: "W której ćwiartce co jest dodatnie?", icon: "✨", category: "signs", emote: "scheming.png" },
  { id: 4, title: "Kąty Rozwarte (II Ćwiartka)", desc: "Wartości dla 120°, 135°, 150°", icon: "🌓", category: "quad2", emote: "smug_thumbsup.png" },
  { id: 5, title: "III i IV Ćwiartka", desc: "Wartości dla 210°, 225°, 240°, 300°, 315°, 330°", icon: "🌕", category: "quad34", emote: "broom_fly.png" },
  { id: 6, title: "Jedynka i Wzory Ilorazowe", desc: "sin²α + cos²α = 1, tg·ctg = 1", icon: "🔗", category: "identities", emote: "magic_star.png" },
  { id: 7, title: "Kąt Podwojony & Redukcja", desc: "sin 2α, cos 2α, kąty ujemne", icon: "⚡", category: "advanced_reduction", emote: "staff.png" },
  { id: 8, title: "Turniej Maturalny", desc: "Wielki miks wszystkich zagadnień", icon: "🏆", category: "matura_exam", emote: "devil_jumping.png" }
];
