// formulaBank.ts - Bank wzorów i własności dla trenera geometrii analitycznej.
// Port z legacy/js/modules/dzialTrainer.js (linie 55-143).

import { shuffle, type QuizQuestion } from "../quizEngine";

export interface FormulaBankEntry {
  /** Pytanie / opis wzoru (LaTeX) */
  q: string;
  /** Poprawny wzór (LaTeX) */
  a: string;
  /** Dystraktory - błędne wzory (LaTeX) */
  d: string[];
}

export const FORMULA_BANK: FormulaBankEntry[] = [
  {
    q: "Współrzędne wektora $\\vec{AB}$ o początku $A=(x_A, y_A)$ i końcu $B=(x_B, y_B)$:",
    a: "[x_B - x_A,\\; y_B - y_A]",
    d: ["[x_A - x_B,\\; y_A - y_B]", "[x_A + x_B,\\; y_A + y_B]", "[y_B - y_A,\\; x_B - x_A]"]
  },
  {
    q: "Długość wektora $\\vec{v} = [v_x, v_y]$:",
    a: "|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}",
    d: ["|\\vec{v}| = \\sqrt{v_x^2 - v_y^2}", "|\\vec{v}| = v_x^2 + v_y^2", "|\\vec{v}| = \\sqrt{v_x + v_y}"]
  },
  {
    q: "Środek $S$ odcinka $AB$:",
    a: "S = \\left(\\frac{x_A + x_B}{2},\\; \\frac{y_A + y_B}{2}\\right)",
    d: [
      "S = \\left(\\frac{x_B - x_A}{2},\\; \\frac{y_B - y_A}{2}\\right)",
      "S = (x_A + x_B,\\; y_A + y_B)",
      "S = \\left(\\frac{x_A - x_B}{2},\\; \\frac{y_A - y_B}{2}\\right)"
    ]
  },
  {
    q: "Warunek równoległości prostych $A_1x + B_1y + C_1 = 0$ i $A_2x + B_2y + C_2 = 0$:",
    a: "A_1B_2 - A_2B_1 = 0",
    d: ["A_1A_2 + B_1B_2 = 0", "A_1B_2 + A_2B_1 = 0", "A_1A_2 - B_1B_2 = 0"]
  },
  {
    q: "Warunek prostopadłości prostych w postaci ogólnej ($A_1x + B_1y + C_1 = 0$ oraz $A_2x + B_2y + C_2 = 0$):",
    a: "A_1A_2 + B_1B_2 = 0",
    d: ["A_1B_2 - A_2B_1 = 0", "A_1A_2 - B_1B_2 = 0", "A_1B_2 + A_2B_1 = 0"]
  },
  {
    q: "Warunek prostopadłości prostych $y = a_1x + b_1$ i $y = a_2x + b_2$:",
    a: "a_1 \\cdot a_2 = -1",
    d: ["a_1 = a_2", "a_1 \\cdot a_2 = 1", "a_1 + a_2 = 0"]
  },
  {
    q: "Warunek równoległości prostych w postaci kierunkowej:",
    a: "a_1 = a_2",
    d: ["a_1 \\cdot a_2 = -1", "a_1 = -a_2", "a_1 \\cdot a_2 = 1"]
  },
  {
    q: "Odległość punktu $(x_0, y_0)$ od prostej $Ax + By + C = 0$:",
    a: "d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}",
    d: [
      "d = \\frac{Ax_0 + By_0 + C}{A^2 + B^2}",
      "d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 - B^2}}",
      "d = \\frac{|Ax_0 + By_0|}{\\sqrt{A^2 + B^2}}"
    ]
  },
  {
    q: "Równanie okręgu o środku $S = (a, b)$ i promieniu $r$:",
    a: "(x - a)^2 + (y - b)^2 = r^2",
    d: ["(x + a)^2 + (y + b)^2 = r^2", "(x - a)^2 + (y - b)^2 = r", "(x - b)^2 + (y - a)^2 = r^2"]
  },
  {
    q: "Pole trójkąta rozpiętego na wektorach $\\vec{v}$ i $\\vec{u}$:",
    a: "P = \\frac{1}{2}|v_x u_y - v_y u_x|",
    d: ["P = |v_x u_y - v_y u_x|", "P = \\frac{1}{2}|v_x u_x - v_y u_y|", "P = \\frac{1}{2}(v_x u_y + v_y u_x)"]
  },
  {
    q: "Wektor normalny (prostopadły) do prostej $Ax + By + C = 0$:",
    a: "\\vec{n} = [A, B]",
    d: ["\\vec{n} = [-B, A]", "\\vec{n} = [B, A]", "\\vec{n} = [-A, -B]"]
  },
  {
    q: "Wektor kierunkowy (równoległy) do prostej $Ax + By + C = 0$:",
    a: "\\vec{u} = [-B, A]",
    d: ["\\vec{u} = [A, B]", "\\vec{u} = [B, -A]", "\\vec{u} = [A, -B]"]
  },
  {
    q: "Kąt nachylenia prostej $y = ax + b$ do osi $Ox$:",
    a: "a = \\tg\\alpha",
    d: ["a = \\sin\\alpha", "a = \\cos\\alpha", "a = \\ctg\\alpha"]
  }
];

export function genFormulaQuestion(): QuizQuestion {
  const f = FORMULA_BANK[Math.floor(Math.random() * FORMULA_BANK.length)];
  const options = shuffle([f.a, ...shuffle(f.d).slice(0, 3)]);
  return {
    categoryTag: "Wzory i własności",
    prompt: "Wybierz poprawny wzór:",
    math: f.q,
    options,
    correctIndex: options.indexOf(f.a),
    explanation: ""
  };
}
