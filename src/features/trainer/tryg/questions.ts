// questions.ts - Generatory pytań quizowych dla Trenera Trygonometrii.
// Port z legacy/js/modules/trainer.js.

import { SPECIAL_ANGLES, type SpecialAngle } from "./anglesData";
import { TASKS, type LegacyTask } from "./tasksData";
import { STAGES } from "./stages";
import { shuffle, type QuizQuestion } from "../quizEngine";

// Dystraktory do pytań (byte-identical z trainer.js:958-962)
export function getDistractors(correct: string, _func?: string): string[] {
  const pool = [
    "0",
    "1",
    "-1",
    "\\frac{1}{2}",
    "-\\frac{1}{2}",
    "\\frac{\\sqrt{2}}{2}",
    "-\\frac{\\sqrt{2}}{2}",
    "\\frac{\\sqrt{3}}{2}",
    "-\\frac{\\sqrt{3}}{2}",
    "\\frac{\\sqrt{3}}{3}",
    "-\\frac{\\sqrt{3}}{3}",
    "\\sqrt{3}",
    "-\\sqrt{3}"
  ];
  const filtered = pool.filter(v => v !== correct);
  return shuffle(filtered).slice(0, 3);
}

// Mnemonic dla ćwiartek (byte-identical z trainer.js:950-955)
export function getMnemonicForQuad(q: string): string {
  if (q === "I") return "W pierwszej ćwiartce same plusy (+)";
  if (q === "II") return "W drugiej tylko sinus (+)";
  if (q === "III") return "W trzeciej tangens i cotangens (+)";
  return "A w czwartej cosinus (+)";
}

// Pomocnik do bezpiecznego wyciągania kroków rozwiązania z zadania LegacyTask
function getSolutionSteps(task: LegacyTask): string[] {
  const sol = task.solution;
  if (sol && typeof sol === "object" && "steps" in sol && Array.isArray((sol as { steps: unknown }).steps)) {
    return (sol as { steps: unknown[] }).steps.map(s => String(s));
  }
  return [];
}

// Pomocnik do bezpiecznego wyciągania opcji z zadania LegacyTask
function getTaskOptions(task: LegacyTask): string[] {
  if (Array.isArray(task.options)) {
    return task.options.map(o => String(o));
  }
  return ["A", "B", "C", "D"];
}

// 1. MODUŁ: WARTOŚCI KĄTÓW (Osiowe 0°, 90°, 180°, 270°, 360°, I ćwiartka 30°, 45°, 60° oraz pozostałe ćwiartki)
export function generateValuesQuestion(): QuizQuestion {
  const categoryTag = "Wartości Kątów (0-360°)";
  const prompt = "Wskaż dokładną wartość funkcji trygonometrycznej:";

  const anglesPool = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360];
  const pickedDeg = anglesPool[Math.floor(Math.random() * anglesPool.length)];
  const angleObj: SpecialAngle = SPECIAL_ANGLES.find(a => a.deg === pickedDeg) || SPECIAL_ANGLES[0];

  const funcs = ["sin", "cos", "tg", "ctg"] as const;
  const validFuncs = funcs.filter(f => {
    const v = angleObj[`${f}Latex` as const];
    return v && v !== "\\text{brak}";
  });
  const pickedFunc = validFuncs[Math.floor(Math.random() * validFuncs.length)];

  const targetMath = `\\${pickedFunc}(${pickedDeg}^\\circ)`;
  const correctVal = angleObj[`${pickedFunc}Latex` as const] as string;

  // Dystraktory
  const distractors = getDistractors(correctVal, pickedFunc);
  const options = shuffle([correctVal, ...distractors]);
  const correctIndex = options.indexOf(correctVal);

  return {
    categoryTag,
    prompt,
    math: targetMath,
    options,
    correctIndex,
    explanation: `Dla kąta ${pickedDeg}° (\\(${angleObj.radLatex}\\)): ${angleObj.quadrant}. Wartość: \\(\\${pickedFunc}(${pickedDeg}^\\circ) = ${correctVal}\\).`
  };
}

// 2. MODUŁ: ZNAKI & ĆWIARTKI
export function generateSignsQuestion(): QuizQuestion {
  const categoryTag = "Znaki Funkcji w Ćwiartkach";
  const prompt = "Jaki znak ma podana funkcja w tej ćwiartce?";

  const angles = [35, 75, 110, 145, 200, 245, 290, 340];
  const deg = angles[Math.floor(Math.random() * angles.length)];
  const funcs = [
    { id: "sin", name: "\\sin" },
    { id: "cos", name: "\\cos" },
    { id: "tg", name: "\\text{tg}" },
    { id: "ctg", name: "\\text{ctg}" }
  ];
  const fn = funcs[Math.floor(Math.random() * funcs.length)];

  const quad = deg < 90 ? "I" : (deg < 180 ? "II" : (deg < 270 ? "III" : "IV"));
  let isPositive = false;
  if (quad === "I") isPositive = true;
  else if (quad === "II") isPositive = fn.id === "sin";
  else if (quad === "III") isPositive = (fn.id === "tg" || fn.id === "ctg");
  else if (quad === "IV") isPositive = fn.id === "cos";

  const targetMath = `${fn.name}(${deg}^\\circ)`;
  const correctVal = isPositive ? "Dodatni (+)" : "Ujemny (-)";
  const options = ["Dodatni (+)", "Ujemny (-)"];
  const correctIndex = options.indexOf(correctVal);

  return {
    categoryTag,
    prompt,
    math: targetMath,
    options,
    correctIndex,
    explanation: `Kąt ${deg}° leży w <strong>${quad} ćwiartce</strong>. Z wierszyka: <em>${getMnemonicForQuad(quad)}</em>, więc wartość jest <strong>${correctVal}</strong>.`
  };
}

// 3. MODUŁ: WZORY REDUKCYJNE & TOŻSAMOŚCI
export function generateReductionQuestion(): QuizQuestion {
  const categoryTag = "Wzory Redukcyjne i Tożsamości";
  const prompt = "Do jakiej prostszej postaci redukuje się to wyrażenie?";

  const templates = [
    { expr: "\\sin(180^\\circ - \\alpha)", ans: "\\sin\\alpha", dist: ["-\\sin\\alpha", "\\cos\\alpha", "-\\cos\\alpha"], note: "II ćwiartka: sinus jest dodatni i nie zmienia się na kofunkcję." },
    { expr: "\\cos(180^\\circ - \\alpha)", ans: "-\\cos\\alpha", dist: ["\\cos\\alpha", "-\\sin\\alpha", "\\sin\\alpha"], note: "II ćwiartka: cosinus jest ujemny." },
    { expr: "\\text{tg}(180^\\circ - \\alpha)", ans: "-\\text{tg}\\alpha", dist: ["\\text{tg}\\alpha", "\\text{ctg}\\alpha", "-\\text{ctg}\\alpha"], note: "II ćwiartka: tangens jest ujemny." },
    { expr: "\\sin(90^\\circ - \\alpha)", ans: "\\cos\\alpha", dist: ["\\sin\\alpha", "-\\cos\\alpha", "-\\sin\\alpha"], note: "Oś pionowa 90°: zmiana na kofunkcję, I ćwiartka: znak dodatni." },
    { expr: "\\cos(90^\\circ - \\alpha)", ans: "\\sin\\alpha", dist: ["-\\sin\\alpha", "\\cos\\alpha", "-\\cos\\alpha"], note: "Kofunkcja: cos zamienia się w sin." },
    { expr: "\\sin(180^\\circ + \\alpha)", ans: "-\\sin\\alpha", dist: ["\\sin\\alpha", "-\\cos\\alpha", "\\cos\\alpha"], note: "III ćwiartka: sinus jest ujemny." },
    { expr: "\\cos(180^\\circ + \\alpha)", ans: "-\\cos\\alpha", dist: ["\\cos\\alpha", "\\sin\\alpha", "-\\sin\\alpha"], note: "III ćwiartka: cosinus jest ujemny." },
    { expr: "\\text{tg}(180^\\circ + \\alpha)", ans: "\\text{tg}\\alpha", dist: ["-\\text{tg}\\alpha", "\\text{ctg}\\alpha", "-\\text{ctg}\\alpha"], note: "III ćwiartka: tangens i cotangens są dodatnie." },
    { expr: "\\sin(360^\\circ - \\alpha)", ans: "-\\sin\\alpha", dist: ["\\sin\\alpha", "\\cos\\alpha", "-\\cos\\alpha"], note: "IV ćwiartka: sinus ujemny." },
    { expr: "\\cos(360^\\circ - \\alpha)", ans: "\\cos\\alpha", dist: ["-\\cos\\alpha", "\\sin\\alpha", "-\\sin\\alpha"], note: "IV ćwiartka: cosinus dodatni!" },
    { expr: "\\sin(-\\alpha)", ans: "-\\sin\\alpha", dist: ["\\sin\\alpha", "\\cos\\alpha", "-\\cos\\alpha"], note: "Funkcja sinus jest nieparzysta: sin(-α) = -sin(α)." },
    { expr: "\\cos(-\\alpha)", ans: "\\cos\\alpha", dist: ["-\\cos\\alpha", "\\sin\\alpha", "-\\sin\\alpha"], note: "Funkcja cosinus jest parzysta: cos(-α) = cos(α)." },
    { expr: "\\sin^2\\alpha + \\cos^2\\alpha", ans: "1", dist: ["0", "2", "\\text{tg}^2\\alpha"], note: "Podstawowa jedynka trygonometryczna dla każdego kąta." },
    { expr: "\\text{tg}\\alpha \\cdot \\text{ctg}\\alpha", ans: "1", dist: ["0", "\\sin\\alpha", "-1"], note: "Tangens i cotangens są wzajemnymi odwrotnościami." }
  ];

  const picked = templates[Math.floor(Math.random() * templates.length)];
  const options = shuffle([picked.ans, ...picked.dist]);
  const correctIndex = options.indexOf(picked.ans);

  return {
    categoryTag,
    prompt,
    math: picked.expr,
    options,
    correctIndex,
    explanation: picked.note
  };
}

// 4. MODUŁ: MATURALNE PYTANIA CKE
export function generateMaturaQuestion(): QuizQuestion {
  const categoryTag = "Zadania Maturalne";
  const prompt = "Rozwiąż zadanie maturalne:";

  const maturaPool = TASKS.filter(t => (t as { type?: unknown }).type === "closed" || t.category === "exam");
  const t = maturaPool[Math.floor(Math.random() * maturaPool.length)] || TASKS[0];

  const targetMath = typeof t.question === "string" ? t.question : String(t.question ?? "");
  const options = getTaskOptions(t);
  const correctIndex = typeof t.correctAnswer === "number" ? t.correctAnswer : 0;
  const steps = getSolutionSteps(t);
  const stepsSnippet = steps.length > 0 ? `<br/>${steps.slice(0, 2).join("<br/>")}` : "";

  return {
    categoryTag,
    prompt,
    math: targetMath,
    options,
    correctIndex,
    explanation: `Z klucza odpowiedzi: poprawna to opcja <strong>${String.fromCharCode(65 + correctIndex)}</strong>.${stepsSnippet}`
  };
}

// 5. PYTANIA DLA KONKRETNEGO ETAPU (Ścieżka Duolingo)
export function generateStageQuestion(stageId: number): QuizQuestion {
  const stage = STAGES.find(s => s.id === stageId) || STAGES[0];
  const categoryTag = `Etap ${stage.id}: ${stage.title}`;

  if (stage.category === "axes") {
    // Kąty 0, 90, 180, 270, 360
    const axesAngles = [0, 90, 180, 270, 360];
    const deg = axesAngles[Math.floor(Math.random() * axesAngles.length)];
    const angleObj: SpecialAngle = SPECIAL_ANGLES.find(a => a.deg === deg) || SPECIAL_ANGLES[0];
    const funcs = (["sin", "cos"] as const).filter(f => {
      const v = angleObj[`${f}Latex` as const];
      return v && v !== "\\text{brak}";
    });
    const fn = funcs[Math.floor(Math.random() * funcs.length)];
    const targetMath = `\\${fn}(${deg}^\\circ)`;
    const correctVal = angleObj[`${fn}Latex` as const] as string;
    const options = shuffle([correctVal, ...getDistractors(correctVal, fn)]);
    return {
      categoryTag,
      prompt: "Wskaż dokładną wartość funkcji trygonometrycznej:",
      math: targetMath,
      options,
      correctIndex: options.indexOf(correctVal),
      explanation: `Kąt osiowy ${deg}° leży na osi współrzędnych. \\(\\${fn}(${deg}^\\circ) = ${correctVal}\\).`
    };
  } else if (stage.category === "sharp") {
    // 30, 45, 60
    const sharpAngles = [30, 45, 60];
    const deg = sharpAngles[Math.floor(Math.random() * sharpAngles.length)];
    const angleObj: SpecialAngle = SPECIAL_ANGLES.find(a => a.deg === deg) || SPECIAL_ANGLES[0];
    const fn = (["sin", "cos", "tg", "ctg"] as const)[Math.floor(Math.random() * 4)];
    const targetMath = `\\${fn}(${deg}^\\circ)`;
    const correctVal = angleObj[`${fn}Latex` as const] as string;
    const options = shuffle([correctVal, ...getDistractors(correctVal, fn)]);
    return {
      categoryTag,
      prompt: "Wskaż dokładną wartość funkcji trygonometrycznej:",
      math: targetMath,
      options,
      correctIndex: options.indexOf(correctVal),
      explanation: `Kąt ostry I ćwiartki: \\(\\${fn}(${deg}^\\circ) = ${correctVal}\\).`
    };
  } else if (stage.category === "signs") {
    const q = generateSignsQuestion();
    return { ...q, categoryTag };
  } else if (stage.category === "quad2") {
    // 120, 135, 150
    const q2Angles = [120, 135, 150];
    const deg = q2Angles[Math.floor(Math.random() * q2Angles.length)];
    const angleObj: SpecialAngle = SPECIAL_ANGLES.find(a => a.deg === deg) || SPECIAL_ANGLES[0];
    const fn = (["sin", "cos", "tg"] as const)[Math.floor(Math.random() * 3)];
    const targetMath = `\\${fn}(${deg}^\\circ)`;
    const correctVal = angleObj[`${fn}Latex` as const] as string;
    const options = shuffle([correctVal, ...getDistractors(correctVal, fn)]);
    return {
      categoryTag,
      prompt: "Wskaż dokładną wartość funkcji trygonometrycznej:",
      math: targetMath,
      options,
      correctIndex: options.indexOf(correctVal),
      explanation: `II ćwiartka (180° - α): tylko sinus jest dodatni. \\(\\${fn}(${deg}^\\circ) = ${correctVal}\\).`
    };
  } else if (stage.category === "quad34") {
    // 210, 225, 240, 300, 315, 330
    const q34Angles = [210, 225, 240, 300, 315, 330];
    const deg = q34Angles[Math.floor(Math.random() * q34Angles.length)];
    const angleObj: SpecialAngle = SPECIAL_ANGLES.find(a => a.deg === deg) || SPECIAL_ANGLES[0];
    const fn = (["sin", "cos", "tg"] as const)[Math.floor(Math.random() * 3)];
    const targetMath = `\\${fn}(${deg}^\\circ)`;
    const correctVal = angleObj[`${fn}Latex` as const] as string;
    const options = shuffle([correctVal, ...getDistractors(correctVal, fn)]);
    return {
      categoryTag,
      prompt: "Wskaż dokładną wartość funkcji trygonometrycznej:",
      math: targetMath,
      options,
      correctIndex: options.indexOf(correctVal),
      explanation: `Kąt ${deg}° (${angleObj.quadrant}). Wartość: \\(\\${fn}(${deg}^\\circ) = ${correctVal}\\).`
    };
  } else if (stage.category === "identities" || stage.category === "advanced_reduction") {
    const q = generateReductionQuestion();
    return { ...q, categoryTag };
  } else {
    const q = generateMaturaQuestion();
    return { ...q, categoryTag };
  }
}
