// generators.ts - Generatory zadań obliczeniowych z geometrii analitycznej.
// Port z legacy/js/modules/dzialTrainer.js (linie 145-273).

import { shuffle, type QuizQuestion } from "../quizEngine";

// Losowa liczba całkowita z przedziału [a, b] włącznie
export const rint = (a: number, b: number): number => a + Math.floor(Math.random() * (b - a + 1));

// Losowy element z tablicy z zachowaniem typu elementu
export const pick = <T>(arr: readonly T[] | T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Trójki pitagorejskie używane do generowania odcinków o całkowitej długości
export const TRIPLES: readonly [number, number, number][] = [
  [3, 4, 5],
  [6, 8, 10],
  [5, 12, 13],
  [8, 15, 17]
];

// Budowanie 4 opcji odpowiedzi z unikalnymi dystraktorami i losową permutacją
function makeOptions(correct: string, distractors: string[]): { options: string[]; correctIndex: number } {
  const uniq: string[] = [correct];
  for (const d of shuffle(distractors)) {
    if (uniq.length >= 4) break;
    if (!uniq.includes(d)) uniq.push(d);
  }
  while (uniq.length < 4) uniq.push(correct + uniq.length);
  const options = shuffle(uniq);
  return { options, correctIndex: options.indexOf(correct) };
}

// Generator: współrzędne wektora AB
export function genVectorAB(): QuizQuestion {
  const A = [rint(-9, 9), rint(-9, 9)];
  const B = [rint(-9, 9), rint(-9, 9)];
  const dx = B[0] - A[0];
  const dy = B[1] - A[1];
  const correct = `[${dx},\\; ${dy}]`;
  const { options, correctIndex } = makeOptions(correct, [
    `[${-dx},\\; ${-dy}]`,
    `[${dy},\\; ${dx}]`,
    `[${A[0] + B[0]},\\; ${A[1] + B[1]}]`
  ]);
  return {
    categoryTag: "Obliczenia",
    prompt: "Wyznacz współrzędne wektora:",
    math: `A = (${A[0]}, ${A[1]}),\\quad B = (${B[0]}, ${B[1]}),\\quad \\vec{AB} = ?`,
    options,
    correctIndex,
    explanation: `$\\vec{AB} = [x_B - x_A,\\; y_B - y_A] = [${B[0]} - (${A[0]}),\\; ${B[1]} - (${A[1]})] = [${dx}, ${dy}]$`
  };
}

// Generator: długość odcinka AB
export function genLengthAB(): QuizQuestion {
  const [dx, dy, c] = pick(TRIPLES);
  const sx = Math.random() < 0.5 ? -1 : 1;
  const sy = Math.random() < 0.5 ? -1 : 1;
  const A = [rint(-5, 5), rint(-5, 5)];
  const B = [A[0] + sx * dx, A[1] + sy * dy];
  const correct = `${c}`;
  const { options, correctIndex } = makeOptions(correct, [`${c + 1}`, `${c - 1}`, `${dx + dy}`, `${c + 2}`]);
  return {
    categoryTag: "Obliczenia",
    prompt: "Oblicz długość odcinka:",
    math: `A = (${A[0]}, ${A[1]}),\\quad B = (${B[0]}, ${B[1]}),\\quad |AB| = ?`,
    options,
    correctIndex,
    explanation: `$|AB| = \\sqrt{(${B[0]} - (${A[0]}))^2 + (${B[1]} - (${A[1]}))^2} = \\sqrt{${dx * dx} + ${dy * dy}} = ${c}$`
  };
}

// Generator: środek odcinka AB
export function genMidpoint(): QuizQuestion {
  const A = [2 * rint(-6, 6), 2 * rint(-6, 6)];
  const B = [2 * rint(-6, 6), 2 * rint(-6, 6)];
  const S = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
  const correct = `(${S[0]},\\; ${S[1]})`;
  const { options, correctIndex } = makeOptions(correct, [
    `(${S[0] + 1},\\; ${S[1]})`,
    `(${S[0]},\\; ${S[1] - 1})`,
    `(${S[0] - 2},\\; ${S[1] + 1})`
  ]);
  return {
    categoryTag: "Obliczenia",
    prompt: "Wyznacz środek odcinka:",
    math: `A = (${A[0]}, ${A[1]}),\\quad B = (${B[0]}, ${B[1]}),\\quad S = ?`,
    options,
    correctIndex,
    explanation: `$S = \\left(\\frac{${A[0]} + ${B[0]}}{2}, \\frac{${A[1]} + ${B[1]}}{2}\\right) = (${S[0]}, ${S[1]})$`
  };
}

// Generator: odległość punktu od prostej
export function genDistPointLine(): QuizQuestion {
  const x0 = rint(-4, 4);
  const y0 = rint(-4, 4);
  const k = rint(1, 4) * (Math.random() < 0.5 ? -1 : 1);
  const C = -(3 * x0 + 4 * y0) + 5 * k; // |licznik| = 5|k|, d = |k|
  const correct = `${Math.abs(k)}`;
  const { options, correctIndex } = makeOptions(correct, [
    `${Math.abs(k) + 1}`,
    `${Math.abs(k) - 1}`,
    `${Math.abs(2 * k)}`,
    `${Math.abs(k) + 2}`
  ]);
  return {
    categoryTag: "Obliczenia",
    prompt: "Oblicz odległość punktu od prostej:",
    math: `3x + 4y ${C >= 0 ? "+" : "-"} ${Math.abs(C)} = 0,\\quad P = (${x0}, ${y0}),\\quad d = ?`,
    options,
    correctIndex,
    explanation: `$d = \\frac{|3 \\cdot ${x0} + 4 \\cdot ${y0} ${C >= 0 ? "+" : "-"} ${Math.abs(C)}|}{\\sqrt{9 + 16}} = \\frac{${Math.abs(5 * k)}}{5} = ${Math.abs(k)}$`
  };
}

// Generator: odczytanie środka i promienia okręgu z równania kanonicznego
export function genCircle(): QuizQuestion {
  const a = rint(-5, 5);
  const b = rint(-5, 5);
  const r = rint(2, 6);
  const correct = `S = (${a}, ${b}),\\; r = ${r}`;
  const { options, correctIndex } = makeOptions(correct, [
    `S = (${-a}, ${b}),\\; r = ${r}`,
    `S = (${a}, ${-b}),\\; r = ${r}`,
    `S = (${a}, ${b}),\\; r = ${r * r}`
  ]);
  return {
    categoryTag: "Obliczenia",
    prompt: "Odczytaj środek i promień okręgu:",
    math: `(x ${a >= 0 ? "-" : "+"} ${Math.abs(a)})^2 + (y ${b >= 0 ? "-" : "+"} ${Math.abs(b)})^2 = ${r * r}`,
    options,
    correctIndex,
    explanation: `$S = (${a}, ${b})$, bo równanie ma postać $(x - a)^2 + (y - b)^2 = r^2$; $r = \\sqrt{${r * r}} = ${r}$.`
  };
}

// Generator: prosta równoległa do danej, przechodząca przez punkt P
export function genParallelLine(): QuizQuestion {
  const a = rint(1, 3);
  const P = [rint(-4, 4), rint(-4, 4)];
  const b = P[1] - a * P[0];
  const correct = `y = ${a}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)}`;
  const { options, correctIndex } = makeOptions(correct, [
    `y = ${a}x ${b + 1 >= 0 ? "+" : "-"} ${Math.abs(b + 1)}`,
    `y = ${-a}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)}`,
    `y = ${a}x ${b - 1 >= 0 ? "+" : "-"} ${Math.abs(Math.max(0, b - 1))}`
  ]);
  return {
    categoryTag: "Obliczenia",
    prompt: "Prosta równoległa do danej, przechodząca przez punkt:",
    math: `y = ${a}x + c \\;\\parallel\\; ?,\\quad P = (${P[0]}, ${P[1]})`,
    options,
    correctIndex,
    explanation: `Równoległa ⇒ ten sam współczynnik $a = ${a}$; podstawiamy $P$: $${P[1]} = ${a} \\cdot ${P[0]} + b$, stąd $b = ${b}$.`
  };
}

// Generator: pole trójkąta rozpiętego na wektorach (pętla while aż ux będzie całkowite)
export function genTriangleArea(): QuizQuestion {
  let wx = 0;
  let uy = 1;
  let wy = 0;
  let ux = 0;
  let isInt = false;

  while (!isInt) {
    wx = rint(-4, 4);
    uy = rint(1, 4);
    wy = rint(-4, 4);
    const det2 = 2 * rint(1, 6); // docelowy 2·P
    ux = (det2 + wy * wx) / uy;
    if (Number.isInteger(ux)) {
      isInt = true;
    }
  }

  const P = Math.abs(wx * uy - wy * ux) / 2;
  const correct = `${P}`;
  const { options, correctIndex } = makeOptions(correct, [`${P + 1}`, `${P - 1}`, `${2 * P}`, `${P + 2}`]);
  return {
    categoryTag: "Obliczenia",
    prompt: "Oblicz pole trójkąta rozpiętego na wektorach:",
    math: `\\vec{v} = [${wx}, ${wy}],\\quad \\vec{u} = [${ux}, ${uy}],\\quad P = ?`,
    options,
    correctIndex,
    explanation: `$P = \\frac{1}{2}|${wx} \\cdot ${uy} - (${wy}) \\cdot ${ux}| = \\frac{1}{2}|${wx * uy - wy * ux}| = ${P}$`
  };
}

export const CALC_GENS: Array<() => QuizQuestion> = [
  genVectorAB,
  genLengthAB,
  genMidpoint,
  genDistPointLine,
  genCircle,
  genParallelLine,
  genTriangleArea
];
