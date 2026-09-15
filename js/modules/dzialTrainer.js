// dzialTrainer.js - Trener działu (Geometria analityczna) w stylu trenera
// Trygonometrii: wspólne XP/poziomy/serduszka (klucz trig_duo_stats), chibi,
// konfetti i dźwięki. Tryby: wzory i własności, obliczenia (generatory),
// fiszki z zadań działu (samocena Zgadłem/Nie).

const LEVELS = [
  { level: 1, name: "Nowicjusz Kątów", xpNeeded: 0, icon: "sprout", emote: "happy_wave.png" },
  { level: 2, name: "Adept I Ćwiartki", xpNeeded: 60, icon: "zap", emote: "witch_wand.png" },
  { level: 3, name: "Pogromca Redukcji", xpNeeded: 160, icon: "flame", emote: "smug_thumbsup.png" },
  { level: 4, name: "Mistrz Jedynki", xpNeeded: 320, icon: "gem", emote: "magic_star.png" },
  { level: 5, name: "Władca Trygonometrii", xpNeeded: 550, icon: "crown", emote: "broom_fly.png" },
  { level: 6, name: "Arcymistrz Matematyki", xpNeeded: 900, icon: "trophy", emote: "devil_jumping.png" }
];

const HAPPY = ["happy_wave.png", "wink_heart.png", "wink_star.png", "magic_star.png", "smug_thumbsup.png", "devil_cheer.png"];
const SAD = ["crying_stream.png", "crying_tremble.png", "devil_pout.png", "bandage.png"];
const HAPPY_TXT = ["Świetnie! 🌟", "Yaaay! 💎", "Genialnie! 💖", "Czysta perfekcja! 👍", "Lecisz jak burza! 🚀"];
const SAD_TXT = ["Niestety błąd! 💔", "Uuuć... nie poddawaj się! 💧", "Podchwytliwe! Sprawdź rozwiązanie: 💡"];

const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function shuffle(arr) {
  const c = [...arr];
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [c[i], c[j]] = [c[j], c[i]];
  }
  return c;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Mini-formatowanie treści zadań (bold + KaTeX + nowa linia przez renderMath).
// Matematyka ($...$ / $$...$$) schowana na placeholdery, żeby pogrubienia
// nie rozdzielały par dolarów (inaczej KaTeX bierze całe zdania jako wzór).
function miniMd(s) {
  const math = [];
  const text = String(s).replace(/(\$\$[^$]*\$\$|\$[^$]*\$)/g, (m) => {
    math.push(m);
    return `\x00M${math.length - 1}\x00`;
  });
  const formatted = escapeHtml(text)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<strong>$1</strong>")
    .replace(/^[\*\-]\s+(.*)$/gm, "• $1")
    .replace(/\r?\n/g, "<br>");
  return formatted.replace(/\x00M(\d+)\x00/g, (_, i) => math[Number(i)]);
}

// --- bank pytań: wzory i własności ----------------------------------------

const FORMULA_BANK = [
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

function genFormulaQuestion() {
  const f = pick(FORMULA_BANK);
  const options = shuffle([f.a, ...shuffle(f.d).slice(0, 3)]);
  return {
    prompt: "Wybierz poprawny wzór:",
    math: f.q,
    options,
    correctIndex: options.indexOf(f.a),
    explanation: ""
  };
}

// --- generatory obliczeń ----------------------------------------------------

const TRIPLES = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]];

function makeOptions(correct, distractors) {
  const uniq = [correct];
  for (const d of shuffle(distractors)) {
    if (uniq.length >= 4) break;
    if (!uniq.includes(d)) uniq.push(d);
  }
  while (uniq.length < 4) uniq.push(correct + uniq.length);
  const options = shuffle(uniq);
  return { options, correctIndex: options.indexOf(correct) };
}

function genVectorAB() {
  const A = [rint(-9, 9), rint(-9, 9)];
  const B = [rint(-9, 9), rint(-9, 9)];
  const dx = B[0] - A[0], dy = B[1] - A[1];
  const correct = `[${dx},\\; ${dy}]`;
  const { options, correctIndex } = makeOptions(correct, [
    `[${-dx},\\; ${-dy}]`, `[${dy},\\; ${dx}]`, `[${A[0] + B[0]},\\; ${A[1] + B[1]}]`
  ]);
  return {
    prompt: "Wyznacz współrzędne wektora:",
    math: `A = (${A[0]}, ${A[1]}),\\quad B = (${B[0]}, ${B[1]}),\\quad \\vec{AB} = ?`,
    options, correctIndex,
    explanation: `$\\vec{AB} = [x_B - x_A,\\; y_B - y_A] = [${B[0]} - (${A[0]}),\\; ${B[1]} - (${A[1]})] = [${dx}, ${dy}]$`
  };
}

function genLengthAB() {
  const [dx, dy, c] = pick(TRIPLES);
  const sx = Math.random() < 0.5 ? -1 : 1;
  const sy = Math.random() < 0.5 ? -1 : 1;
  const A = [rint(-5, 5), rint(-5, 5)];
  const B = [A[0] + sx * dx, A[1] + sy * dy];
  const correct = `${c}`;
  const { options, correctIndex } = makeOptions(correct, [`${c + 1}`, `${c - 1}`, `${dx + dy}`, `${c + 2}`]);
  return {
    prompt: "Oblicz długość odcinka:",
    math: `A = (${A[0]}, ${A[1]}),\\quad B = (${B[0]}, ${B[1]}),\\quad |AB| = ?`,
    options, correctIndex,
    explanation: `$|AB| = \\sqrt{(${B[0]} - (${A[0]}))^2 + (${B[1]} - (${A[1]}))^2} = \\sqrt{${dx * dx} + ${dy * dy}} = ${c}$`
  };
}

function genMidpoint() {
  const A = [2 * rint(-6, 6), 2 * rint(-6, 6)];
  const B = [2 * rint(-6, 6), 2 * rint(-6, 6)];
  const S = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
  const correct = `(${S[0]},\\; ${S[1]})`;
  const { options, correctIndex } = makeOptions(correct, [
    `(${S[0] + 1},\\; ${S[1]})`, `(${S[0]},\\; ${S[1] - 1})`, `(${S[0] - 2},\\; ${S[1] + 1})`
  ]);
  return {
    prompt: "Wyznacz środek odcinka:",
    math: `A = (${A[0]}, ${A[1]}),\\quad B = (${B[0]}, ${B[1]}),\\quad S = ?`,
    options, correctIndex,
    explanation: `$S = \\left(\\frac{${A[0]} + ${B[0]}}{2}, \\frac{${A[1]} + ${B[1]}}{2}\\right) = (${S[0]}, ${S[1]})$`
  };
}

function genDistPointLine() {
  const x0 = rint(-4, 4), y0 = rint(-4, 4);
  const k = rint(1, 4) * (Math.random() < 0.5 ? -1 : 1);
  const C = -(3 * x0 + 4 * y0) + 5 * k; // |licznik| = 5|k|, d = |k|
  const correct = `${Math.abs(k)}`;
  const { options, correctIndex } = makeOptions(correct, [
    `${Math.abs(k) + 1}`, `${Math.abs(k) - 1}`, `${Math.abs(2 * k)}`, `${Math.abs(k) + 2}`
  ]);
  return {
    prompt: "Oblicz odległość punktu od prostej:",
    math: `3x + 4y ${C >= 0 ? "+" : "-"} ${Math.abs(C)} = 0,\\quad P = (${x0}, ${y0}),\\quad d = ?`,
    options, correctIndex,
    explanation: `$d = \\frac{|3 \\cdot ${x0} + 4 \\cdot ${y0} ${C >= 0 ? "+" : "-"} ${Math.abs(C)}|}{\\sqrt{9 + 16}} = \\frac{${Math.abs(5 * k)}}{5} = ${Math.abs(k)}$`
  };
}

function genCircle() {
  const a = rint(-5, 5), b = rint(-5, 5), r = rint(2, 6);
  const correct = `S = (${a}, ${b}),\\; r = ${r}`;
  const { options, correctIndex } = makeOptions(correct, [
    `S = (${-a}, ${b}),\\; r = ${r}`, `S = (${a}, ${-b}),\\; r = ${r}`, `S = (${a}, ${b}),\\; r = ${r * r}`
  ]);
  return {
    prompt: "Odczytaj środek i promień okręgu:",
    math: `(x ${a >= 0 ? "-" : "+"} ${Math.abs(a)})^2 + (y ${b >= 0 ? "-" : "+"} ${Math.abs(b)})^2 = ${r * r}`,
    options, correctIndex,
    explanation: `$S = (${a}, ${b})$, bo równanie ma postać $(x - a)^2 + (y - b)^2 = r^2$; $r = \\sqrt{${r * r}} = ${r}$.`
  };
}

function genParallelLine() {
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
    prompt: "Prosta równoległa do danej, przechodząca przez punkt:",
    math: `y = ${a}x + c \\;\\parallel\\; ?,\\quad P = (${P[0]}, ${P[1]})`,
    options, correctIndex,
    explanation: `Równoległa ⇒ ten sam współczynnik $a = ${a}$; podstawiamy $P$: $${P[1]} = ${a} \\cdot ${P[0]} + b$, stąd $b = ${b}$.`
  };
}

function genTriangleArea() {
  // zapewniamy parzysty wyznacznik: wybieramy det, potem dobieramy wx,uy,wy,ux
  const wx = rint(-4, 4), uy = rint(1, 4), wy = rint(-4, 4);
  const det2 = 2 * rint(1, 6); // docelowy 2·P
  const ux = (det2 + wy * wx) / uy;
  if (!Number.isInteger(ux)) return genTriangleArea();
  const P = Math.abs(wx * uy - wy * ux) / 2;
  const correct = `${P}`;
  const { options, correctIndex } = makeOptions(correct, [`${P + 1}`, `${P - 1}`, `${2 * P}`, `${P + 2}`]);
  return {
    prompt: "Oblicz pole trójkąta rozpiętego na wektorach:",
    math: `\\vec{v} = [${wx}, ${wy}],\\quad \\vec{u} = [${ux}, ${uy}],\\quad P = ?`,
    options, correctIndex,
    explanation: `$P = \\frac{1}{2}|${wx} \\cdot ${uy} - (${wy}) \\cdot ${ux}| = \\frac{1}{2}|${wx * uy - wy * ux}| = ${P}$`
  };
}

const CALC_GENS = [genVectorAB, genLengthAB, genMidpoint, genDistPointLine, genCircle, genParallelLine, genTriangleArea];

// --- moduł ------------------------------------------------------------------

let stats = null;
let containerRef = null;
let dzialIdRef = "";
let materialTasks = [];
let currentMode = "formulas";
let currentQ = null;
let answered = false;
let flashcard = null;
let timerMode = false;
let timerInterval = null;
let timeLeft = 0, maxTime = 0;
let timerCycleIndex = 0;

const TIMER_CYCLES = [
  { mode: false, label: "Czas: Wył." },
  { mode: true, diff: "easy", label: "30 s" },
  { mode: true, diff: "medium", label: "15 s" },
  { mode: true, diff: "hard", label: "8 s" }
];

function loadStats() {
  const defaults = { xp: 0, streak: 0, maxStreak: 0, hearts: 5, totalAnswered: 0, totalCorrect: 0 };
  try {
    const raw = localStorage.getItem("trig_duo_stats");
    if (raw) return { ...defaults, ...JSON.parse(raw) };
  } catch (e) { /* świeży start */ }
  return defaults;
}

function saveStats() {
  try { localStorage.setItem("trig_duo_stats", JSON.stringify(stats)); } catch (e) { /* ignore */ }
}

function getLevel(xp) {
  for (let i = LEVELS.length - 1; i >= 0; i--) if (xp >= LEVELS[i].xpNeeded) return LEVELS[i];
  return LEVELS[0];
}

function xpProgressText(xp) {
  const cur = getLevel(xp);
  const next = LEVELS[LEVELS.indexOf(cur) + 1];
  if (!next) return "MAX POZIOM!";
  return `${xp} / ${next.xpNeeded} XP`;
}

function xpProgressPct(xp) {
  const cur = getLevel(xp);
  const next = LEVELS[LEVELS.indexOf(cur) + 1];
  if (!next) return 100;
  return Math.min(100, Math.round(((xp - cur.xpNeeded) / (next.xpNeeded - cur.xpNeeded)) * 100));
}

export function initDzialTrainer(containerId, dzialId, materialLoader) {
  const container = document.getElementById(containerId);
  if (!container) return;
  containerRef = container;
  dzialIdRef = dzialId;
  stats = loadStats();

  container.innerHTML = `
    <div class="trainer-card">
      <div class="duo-compact-hud">
        <div class="hud-tier-rank">
          <img id="dt-avatar" class="duo-avatar-chibi" src="assets/emotes/${getLevel(stats.xp).emote}" alt="">
          <div class="hud-rank-details">
            <div class="hud-rank-title-row">
              <span class="level-badge" id="dt-level"><i data-lucide="${getLevel(stats.xp).icon}"></i><span>${getLevel(stats.xp).name}</span></span>
              <span class="level-xp-text" id="dt-xp-text">${xpProgressText(stats.xp)}</span>
            </div>
            <div class="progress-track"><div class="progress-fill" id="dt-xp-fill" style="width:${xpProgressPct(stats.xp)}%"></div></div>
          </div>
        </div>
        <div class="hud-tier-stats">
          <div class="hud-stat streak-pill"><span class="flame-icon"><i data-lucide="flame"></i></span><span id="dt-streak">${stats.streak}</span></div>
          <div class="hud-stat xp-pill"><span class="gem-icon"><i data-lucide="gem"></i></span><span id="dt-xp">${stats.xp}</span></div>
          <div class="hud-stat hearts-pill"><span class="heart-icon"><i data-lucide="heart"></i></span><span id="dt-hearts">${stats.hearts}</span></div>
        </div>
      </div>

      <div class="mode-grid-2x2" style="margin-bottom:8px;">
        <button class="mode-chip-btn active" data-mode="formulas">Wzory i własności</button>
        <button class="mode-chip-btn" data-mode="calc">Obliczenia</button>
        <button class="mode-chip-btn" data-mode="flash">Zadania (fiszki)</button>
      </div>

      <div class="timer-control-row">
        <button class="timer-chip-toggle" id="dt-timer-chip">
          <i data-lucide="timer"></i><span id="dt-timer-text">Czas: Wył.</span>
        </button>
      </div>
      <div class="countdown-bar-wrap" id="dt-countdown" style="display:none;">
        <div class="countdown-bar-track"><div class="countdown-bar-fill" id="dt-countdown-fill" style="width:100%"></div></div>
        <span class="countdown-seconds-label" id="dt-countdown-label">30s</span>
      </div>

      <div class="quiz-question-card">
        <div class="q-header-compact">
          <span id="dt-cat" class="badge-tag">Wzory i własności</span>
        </div>
        <div class="q-prompt" id="dt-prompt"></div>
        <div class="q-math-display" id="dt-math"></div>

        <div class="q-options-grid" id="dt-options"></div>

        <!-- Fiszka: odpowiedź + samocena -->
        <div id="dt-flash" style="display:none;">
          <button class="next-q-btn" id="dt-reveal" style="width:100%;">
            <i data-lucide="eye"></i> Pokaż odpowiedź
          </button>
          <div class="task-solution-box" id="dt-flash-answer" style="display:none;"></div>
          <div class="q-options-grid" id="dt-selfgrade" style="display:none;">
            <button class="quiz-option-btn dt-yes" id="dt-yes"><i data-lucide="check"></i> Zgadłem</button>
            <button class="quiz-option-btn dt-no" id="dt-no"><i data-lucide="x"></i> Nie</button>
          </div>
        </div>

        <div class="q-feedback-panel" id="dt-feedback" style="display:none;">
          <div class="feedback-chibi-row">
            <img id="dt-chibi" class="chibi-reaction-img happy" src="assets/emotes/happy_wave.png" alt="">
            <div class="feedback-bubble-content">
              <div class="feedback-title" id="dt-feedback-title"></div>
              <p class="feedback-explanation" id="dt-feedback-desc"></p>
            </div>
          </div>
          <button class="next-q-btn" id="dt-next"><span>Następne</span> <i data-lucide="arrow-right"></i></button>
        </div>
      </div>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();

  if (materialLoader) {
    materialLoader().then((m) => { materialTasks = m.tasks || []; }).catch(() => { materialTasks = []; });
  }

  container.querySelectorAll(".mode-chip-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".mode-chip-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentMode = btn.dataset.mode;
      nextQuestion();
    });
  });

  document.getElementById("dt-timer-chip")?.addEventListener("click", () => {
    timerCycleIndex = (timerCycleIndex + 1) % TIMER_CYCLES.length;
    applyTimerCycle();
    nextQuestion();
  });

  document.getElementById("dt-next")?.addEventListener("click", nextQuestion);
  document.getElementById("dt-reveal")?.addEventListener("click", revealAnswer);
  document.getElementById("dt-yes")?.addEventListener("click", () => selfGrade(true));
  document.getElementById("dt-no")?.addEventListener("click", () => selfGrade(false));

  nextQuestion();
}

function applyTimerCycle() {
  const cur = TIMER_CYCLES[timerCycleIndex];
  timerMode = cur.mode;
  document.getElementById("dt-timer-text").textContent = cur.label;
  const wrap = document.getElementById("dt-countdown");
  if (timerMode) wrap.style.display = "flex";
  else { wrap.style.display = "none"; stopTimer(); }
  wrap.dataset.diff = cur.diff || "";
}

function updateHUD() {
  const lvl = getLevel(stats.xp);
  document.getElementById("dt-level").innerHTML = `<i data-lucide="${lvl.icon}"></i><span>${lvl.name}</span>`;
  document.getElementById("dt-xp-text").textContent = xpProgressText(stats.xp);
  document.getElementById("dt-xp-fill").style.width = xpProgressPct(stats.xp) + "%";
  document.getElementById("dt-streak").textContent = stats.streak;
  document.getElementById("dt-xp").textContent = stats.xp;
  document.getElementById("dt-hearts").textContent = stats.hearts;
  document.getElementById("dt-avatar").src = `assets/emotes/${lvl.emote}`;
  if (window.lucide) window.lucide.createIcons();
}

function nextQuestion() {
  stopTimer();
  answered = false;
  flashcard = null;
  document.getElementById("dt-feedback").style.display = "none";
  document.getElementById("dt-flash").style.display = "none";
  document.getElementById("dt-flash-answer").style.display = "none";
  document.getElementById("dt-selfgrade").style.display = "none";
  document.getElementById("dt-reveal").style.display = "flex";
  const optGrid = document.getElementById("dt-options");
  optGrid.innerHTML = "";
  optGrid.style.display = "grid";

  if (stats.hearts <= 0) { showZeroHearts(); return; }

  if (currentMode === "flash") {
    if (!materialTasks.length) {
      document.getElementById("dt-cat").textContent = "Fiszki";
      document.getElementById("dt-prompt").textContent = "Zadania tego działu są jeszcze wczytywane…";
      document.getElementById("dt-math").textContent = "";
      return;
    }
    currentQ = null;
    showFlashcard();
    return;
  }

  currentQ = currentMode === "formulas" ? genFormulaQuestion() : pick(CALC_GENS)();
  document.getElementById("dt-cat").textContent =
    currentMode === "formulas" ? "Wzory i własności" : "Obliczenia";
  document.getElementById("dt-prompt").textContent = currentQ.prompt;
  // Pytania z banku mogą już zawierać $...$ — nie wolno owijać ich drugi raz
  // w $$...$$ (podwójny delimiter = uszkodzony wzór = czerwony KaTeX-error)
  const mathEl = document.getElementById("dt-math");
  mathEl.innerHTML = currentQ.math.includes("$")
    ? currentQ.math
    : `$$${currentQ.math}$$`;

  optGrid.innerHTML = currentQ.options
    .map((o, i) => `
      <button class="quiz-option-btn" data-idx="${i}">
        <span class="opt-key">${String.fromCharCode(65 + i)}</span>
        <span class="opt-label">\\(${o}\\)</span>
      </button>`)
    .join("");
  window.renderMath?.(document.getElementById("dt-math"));
  window.renderMath?.(optGrid);

  optGrid.querySelectorAll(".quiz-option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (answered) return;
      checkMC(Number(btn.dataset.idx));
    });
  });

  if (timerMode) startTimer();
}

function checkMC(idx) {
  answered = true;
  stopTimer();
  const btns = document.querySelectorAll("#dt-options .quiz-option-btn");
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === currentQ.correctIndex) b.classList.add("opt-correct");
    else if (i === idx) b.classList.add("opt-wrong");
  });
  const correct = idx === currentQ.correctIndex;
  registerAnswer(correct, currentQ.explanation, "\\(" + currentQ.options[currentQ.correctIndex] + "\\)");
}

// --- fiszki -----------------------------------------------------------------

function showFlashcard() {
  const task = pick(materialTasks);
  flashcard = task;
  document.getElementById("dt-cat").textContent = `Zadanie ${task.id}${task.flaggedR ? " [R]" : ""}`;
  document.getElementById("dt-prompt").textContent = "Rozwiąż w zeszycie, potem oceń siebie:";
  const mathEl = document.getElementById("dt-math");
  mathEl.classList.add("q-math-flashcard");
  mathEl.innerHTML = `<div class="flashcard-question-content">${miniMd(task.question)}</div>`;
  window.renderMath?.(mathEl);

  const optGrid = document.getElementById("dt-options");
  optGrid.style.display = "none";
  optGrid.innerHTML = "";
  document.getElementById("dt-flash").style.display = "block";
}

function revealAnswer() {
  const box = document.getElementById("dt-flash-answer");
  box.innerHTML = `
    <div class="sol-header"><strong>Odpowiedź:</strong></div>
    <div>${miniMd(flashcard.answer || "(brak krótkiej odpowiedzi — sprawdź rozwiązanie)")}</div>
    ${flashcard.solution ? `
      <div class="sol-header" style="margin-top:8px;"><strong>Rozwiązanie krok po kroku:</strong></div>
      <div>${miniMd(flashcard.solution)}</div>` : ""}
  `;
  box.style.display = "block";
  window.renderMath?.(box);
  document.getElementById("dt-reveal").style.display = "none";
  document.getElementById("dt-selfgrade").style.display = "grid";
}

function selfGrade(good) {
  if (!flashcard || answered) return;
  answered = true;
  if (good) {
    import("./materialy.js").then((m) => m.markTaskDone?.(dzialIdRef, flashcard.id));
  }
  registerAnswer(good, "", "");
}

// --- wspólna obsługa odpowiedzi ----------------------------------------------

function registerAnswer(correct, explanation, correctLatex) {
  const oldLevel = getLevel(stats.xp).level;
  const chibi = document.getElementById("dt-chibi");
  const title = document.getElementById("dt-feedback-title");
  const desc = document.getElementById("dt-feedback-desc");

  if (correct) {
    window.trainerSounds?.playCorrect();
    stats.streak += 1;
    if (stats.streak > stats.maxStreak) stats.maxStreak = stats.streak;
    let gained = 10;
    if (timerMode) gained += Math.round((timeLeft / maxTime) * 10);
    if (stats.streak >= 3) gained = Math.round(gained * 1.5);
    stats.xp += gained;
    stats.totalCorrect += 1;
    window.launchConfetti?.();
    chibi.src = `assets/emotes/${pick(HAPPY)}`;
    chibi.className = "chibi-reaction-img happy";
    title.textContent = pick(HAPPY_TXT) + ` (+${gained} XP)`;
  } else {
    window.trainerSounds?.playWrong();
    stats.streak = 0;
    stats.hearts = Math.max(0, stats.hearts - 1);
    chibi.src = `assets/emotes/${pick(SAD)}`;
    chibi.className = "chibi-reaction-img sad";
    title.textContent = pick(SAD_TXT);
  }

  stats.totalAnswered += 1;
  saveStats();
  updateHUD();

  desc.innerHTML = (explanation ? explanation + (correctLatex ? "<br>" : "") : "") +
    (correctLatex && !correct ? `<strong>Poprawna odpowiedź:</strong> ${correctLatex}` : "");
  document.getElementById("dt-feedback").style.display = "flex";
  window.renderMath?.(document.getElementById("dt-feedback"));

  const newLevel = getLevel(stats.xp).level;
  if (newLevel > oldLevel) {
    window.trainerSounds?.playLevelUp();
    window.showToast?.(`👑 AWANS NA POZIOM ${newLevel}: ${getLevel(stats.xp).name}!`, 3500);
  }
}

// --- timer -------------------------------------------------------------------

function startTimer() {
  const diff = document.getElementById("dt-countdown").dataset.diff || "easy";
  maxTime = diff === "easy" ? 30 : diff === "medium" ? 15 : 8;
  timeLeft = maxTime;
  updateTimerBar();
  timerInterval = setInterval(() => {
    timeLeft = Math.max(0, timeLeft - 0.1);
    updateTimerBar();
    if (timeLeft <= 0) {
      stopTimer();
      if (!answered) {
        answered = true;
        stats.streak = 0;
        stats.hearts = Math.max(0, stats.hearts - 1);
        saveStats();
        updateHUD();
        document.querySelectorAll("#dt-options .quiz-option-btn").forEach((b, i) => {
          b.disabled = true;
          if (currentQ && i === currentQ.correctIndex) b.classList.add("opt-correct");
        });
        registerAnswer(false, "Czas minął! ⏰", currentQ ? "\\(" + currentQ.options[currentQ.correctIndex] + "\\)" : "");
      }
    }
  }, 100);
}

function stopTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function updateTimerBar() {
  const pct = maxTime ? (timeLeft / maxTime) * 100 : 0;
  const fill = document.getElementById("dt-countdown-fill");
  fill.style.width = pct + "%";
  fill.style.backgroundColor = pct > 50 ? "var(--accent-success)" : pct > 25 ? "var(--accent-warn)" : "var(--accent-error)";
  document.getElementById("dt-countdown-label").textContent = Math.ceil(timeLeft) + "s";
}

function showZeroHearts() {
  const optGrid = document.getElementById("dt-options");
  optGrid.style.display = "block";
  optGrid.innerHTML = `
    <div class="zero-hearts-box">
      <div class="zero-hearts-chibi-wrap"><img src="assets/emotes/crying_stream.png" class="zero-hearts-chibi" alt=""></div>
      <span class="broken-heart-huge">💔</span>
      <h3>Skończyły Ci się serduszka!</h3>
      <p>Eliksir z kociołka przywróci pełne siły!</p>
      <button class="action-btn refill-hearts-btn" id="dt-refill">
        <img src="assets/emotes/potion.png" class="btn-chibi-icon" alt=""> Odnów 5 serduszek
      </button>
    </div>`;
  document.getElementById("dt-prompt").textContent = "";
  document.getElementById("dt-math").textContent = "";
  document.getElementById("dt-refill")?.addEventListener("click", () => {
    stats.hearts = 5;
    saveStats();
    updateHUD();
    nextQuestion();
  });
}
