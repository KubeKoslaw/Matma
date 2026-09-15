// quizEngine.ts - Wspólny kontrakt pytań i cyklu timera dla trenerów
// (trygonometria + działowe). Port z legacy trainer.js / dzialTrainer.js.

export interface QuizQuestion {
  /** Etykieta kategorii nad pytaniem (badge-tag) */
  categoryTag: string;
  /** Tekst polecenia nad wzorem */
  prompt: string;
  /** Wyrażenie LaTeX — jeśli nie zawiera $, owijane w $$…$$ przy renderze */
  math: string;
  options: string[];
  correctIndex: number;
  /** Wyjaśnienie HTML po odpowiedzi (może zawierać inline \(…\) dla KaTeX) */
  explanation: string;
}

export interface TimerCycle {
  mode: boolean;
  diff?: "easy" | "medium" | "hard";
  label: string;
}

/** Cykl timera: Wył. → 30 s → 15 s → 8 s → Wył. */
export const TIMER_CYCLES: TimerCycle[] = [
  { mode: false, label: "Czas: Wył." },
  { mode: true, diff: "easy", label: "30 s" },
  { mode: true, diff: "medium", label: "15 s" },
  { mode: true, diff: "hard", label: "8 s" }
];

export const TIMER_SECONDS: Record<NonNullable<TimerCycle["diff"]>, number> = {
  easy: 30,
  medium: 15,
  hard: 8
};

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
