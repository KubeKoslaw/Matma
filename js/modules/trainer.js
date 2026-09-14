// trainer.js - Gamifikowany trener trygonometrii w stylu Duolingo z dopaminą, trybem na czas i etapami
import { SPECIAL_ANGLES } from "../data/angles.js";
import { FORMULAS } from "../data/formulas.js";
import { TASKS } from "../data/tasks.js";

// Syntezator dźwięków Web Audio API (100% offline, bez plików audio)
class SoundFX {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem("trig_sound_muted") === "true";
  }

  init() {
    if (!this.ctx && typeof AudioContext !== "undefined") {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
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
    } catch (e) {}
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
    } catch (e) {}
  }

  playLevelUp() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      if (this.ctx.state === "suspended") this.ctx.resume();
      const t = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, t + i * 0.09);
        gain.gain.setValueAtTime(0.15, t + i * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.09 + 0.3);
        osc.start(t + i * 0.09);
        osc.stop(t + i * 0.09 + 0.3);
      });
    } catch (e) {}
  }
}

const sounds = new SoundFX();
// Udostępnienie dźwięków innym modułom (materialy.js) — respektuje wyciszenie
window.trainerSounds = sounds;

// Rangi i poziomy Duolingo (ikony lucide zamiast emoji — spójny wygląd na każdym urządzeniu)
const LEVELS = [
  { level: 1, name: "Nowicjusz Kątów", xpNeeded: 0, icon: "sprout", emote: "happy_wave.png" },
  { level: 2, name: "Adept I Ćwiartki", xpNeeded: 60, icon: "zap", emote: "witch_wand.png" },
  { level: 3, name: "Pogromca Redukcji", xpNeeded: 160, icon: "flame", emote: "smug_thumbsup.png" },
  { level: 4, name: "Mistrz Jedynki", xpNeeded: 320, icon: "gem", emote: "magic_star.png" },
  { level: 5, name: "Władca Trygonometrii", xpNeeded: 550, icon: "crown", emote: "broom_fly.png" },
  { level: 6, name: "Arcymistrz Matematyki", xpNeeded: 900, icon: "trophy", emote: "devil_jumping.png" }
];

// 8 Etapów Nauki (Ścieżka Duolingo z postaciami chibi)
const STAGES = [
  { id: 1, title: "Kąty Osiowe", desc: "Wartości dla 0°, 90°, 180°, 270°, 360°", icon: "🧭", category: "axes", emote: "happy_wave.png" },
  { id: 2, title: "Kąty Ostre (I Ćwiartka)", desc: "Wartości dla 30°, 45°, 60°", icon: "📐", category: "sharp", emote: "wink_heart.png" },
  { id: 3, title: "Znaki & Wierszyk Ćwiartek", desc: "W której ćwiartce co jest dodatnie?", icon: "✨", category: "signs", emote: "scheming.png" },
  { id: 4, title: "Kąty Rozwarte (II Ćwiartka)", desc: "Wartości dla 120°, 135°, 150°", icon: "🌓", category: "quad2", emote: "smug_thumbsup.png" },
  { id: 5, title: "III i IV Ćwiartka", desc: "Wartości dla 210°, 225°, 240°, 300°, 315°, 330°", icon: "🌕", category: "quad34", emote: "broom_fly.png" },
  { id: 6, title: "Jedynka i Wzory Ilorazowe", desc: "sin²α + cos²α = 1, tg·ctg = 1", icon: "🔗", category: "identities", emote: "magic_star.png" },
  { id: 7, title: "Kąt Podwojony & Redukcja", desc: "sin 2α, cos 2α, kąty ujemne", icon: "⚡", category: "advanced_reduction", emote: "staff.png" },
  { id: 8, title: "Turniej Maturalny", desc: "Wielki miks wszystkich zagadnień", icon: "🏆", category: "matura_exam", emote: "devil_jumping.png" }
];

export function initTrainer(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Wczytanie stanu z localStorage
  let stats = loadStats();

  container.innerHTML = `
    <!-- Pływające płótno konfetti -->
    <canvas id="confetti-canvas"></canvas>

    <div class="trainer-card">
      <!-- 2-TIER HUD: Tier 1 (Ranga + Progres), Tier 2 (Statystyki + Dźwięk) -->
      <div class="duo-compact-hud">
        <div class="hud-tier-rank">
          <img id="duo-avatar-img" class="duo-avatar-chibi" src="assets/emotes/happy_wave.png" alt="Mascot" />
          <div class="hud-rank-details">
            <div class="hud-rank-title-row">
              <span class="level-badge" id="duo-level-badge"><i data-lucide="${getCurrentLevel(stats.xp).icon}"></i><span>${getCurrentLevel(stats.xp).name}</span></span>
              <span class="level-xp-text" id="duo-level-xp-text">${getXpProgressText(stats.xp)}</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" id="duo-level-fill" style="width: ${getLevelProgressPercent(stats.xp)}%;"></div>
            </div>
          </div>
        </div>

        <div class="hud-tier-stats">
          <div class="hud-stat streak-pill" title="Seria poprawnych odpowiedzi">
            <span class="flame-icon"><i data-lucide="flame"></i></span>
            <span class="stat-num" id="duo-streak">${stats.streak}</span>
          </div>

          <div class="hud-stat xp-pill" title="Punkty XP">
            <span class="gem-icon"><i data-lucide="gem"></i></span>
            <span class="stat-num" id="duo-xp">${stats.xp}</span>
          </div>

          <div class="hud-stat hearts-pill" title="Dostępne serduszka">
            <span class="heart-icon"><i data-lucide="heart"></i></span>
            <span class="stat-num" id="duo-hearts">${stats.hearts}</span>
          </div>

          <button class="sound-toggle-btn" id="btn-toggle-sound" aria-label="Włącz lub wyłącz dźwięk" title="Dźwięk">
            <span id="sound-icon-text"><i data-lucide="${sounds.muted ? "volume-x" : "volume-2"}"></i></span>
          </button>
        </div>
      </div>

      <!-- KOMPAKTOWE PRZEŁĄCZANIE: Szybki Trening vs Ścieżka Etapów -->
      <div class="trainer-segmented-nav">
        <button class="segmented-btn active" id="btn-tab-trainer-free">
          <i data-lucide="zap"></i> Szybki Trening
        </button>
        <button class="segmented-btn" id="btn-tab-trainer-stages">
          <i data-lucide="map"></i> Ścieżka Etapów (8)
        </button>
      </div>

      <!-- WIDOK 1: SZYBKI TRENING -->
      <div id="panel-trainer-free" class="trainer-subpanel active">
        <!-- 2x2 TRYBY TRENINGU + PASEK CZASU -->
        <div class="mode-grid-2x2">
          <button class="mode-chip-btn active" data-mode="values">Kąty 0-360°</button>
          <button class="mode-chip-btn" data-mode="signs">Ćwiartki & Znaki</button>
          <button class="mode-chip-btn" data-mode="reduction">Wzory Redukcyjne</button>
          <button class="mode-chip-btn" data-mode="matura">Zadania maturalne</button>
        </div>
        <div class="timer-control-row">
          <button class="timer-chip-toggle" id="btn-toggle-timer-chip" title="Kliknij, aby przełączyć tryb na czas">
            <i data-lucide="timer"></i>
            <span id="timer-chip-text">Czas: Wył.</span>
          </button>
        </div>

        <!-- Pasek odliczania czasu (smukły pasek z licznikiem sekund) -->
        <div class="countdown-bar-wrap" id="countdown-bar-wrap" style="display: none;">
          <div class="countdown-bar-track">
            <div class="countdown-bar-fill" id="countdown-bar-fill" style="width: 100%;"></div>
          </div>
          <span class="countdown-seconds-label" id="countdown-seconds-label">30s</span>
        </div>

        <!-- KARTA PYTANIA -->
        <div class="quiz-question-card" id="quiz-question-card">
          <div class="q-header-compact">
            <span id="quiz-category-tag" class="badge-tag">Kąty 0-360°</span>
            <div class="combo-banner" id="combo-banner" style="display: none;">
              <span>⚡ COMBO x2!</span>
            </div>
          </div>

          <div class="q-prompt" id="quiz-prompt-text">
            Wskaż dokładną wartość funkcji:
          </div>

          <div class="q-math-display" id="quiz-math-target">
            <!-- KaTeX display -->
          </div>

          <!-- Opcje odpowiedzi (2x2 na smartfonie) -->
          <div class="q-options-grid" id="quiz-options-container">
            <!-- Przyciski z odpowiedziami -->
          </div>

          <!-- Panel wyjaśnienia po odpowiedzi z reakcją Chibi -->
          <div class="q-feedback-panel" id="quiz-feedback-box" style="display: none;">
            <div class="feedback-chibi-row">
              <img id="feedback-chibi-img" class="chibi-reaction-img happy" src="assets/emotes/happy_wave.png" alt="Reakcja Chibi" />
              <div class="feedback-bubble-content">
                <div class="feedback-title" id="quiz-feedback-title">
                  <span id="feedback-headline">Świetnie! Poprawna odpowiedź!</span>
                </div>
                <p class="feedback-explanation" id="quiz-feedback-desc"></p>
              </div>
            </div>
            <button class="next-q-btn" id="btn-next-question">
              <span>Następne pytanie</span> <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- WIDOK 2: ŚCIEŻKA ETAPÓW (DUOLINGO PATH) -->
      <div id="panel-trainer-stages" class="trainer-subpanel" style="display: none;">
        <div class="stages-header-banner">
          <h3>Ścieżka Opanowania Trygonometrii</h3>
          <p>Ukończ każdy z 8 etapów, aby zdobyć 3 gwiazdki ⭐ i odblokować tytuł Arcymistrza!</p>
        </div>

        <div class="stages-path-grid" id="stages-path-container">
          <!-- Wstrzykiwane przez renderStages() -->
        </div>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  // Elementy DOM
  const duoStreak = document.getElementById("duo-streak");
  const duoXp = document.getElementById("duo-xp");
  const duoHearts = document.getElementById("duo-hearts");
  const soundBtn = document.getElementById("btn-toggle-sound");
  const soundIcon = document.getElementById("sound-icon-text");
  const levelBadge = document.getElementById("duo-level-badge");
  const levelXpText = document.getElementById("duo-level-xp-text");
  const levelFill = document.getElementById("duo-level-fill");
  const comboBanner = document.getElementById("combo-banner");

  const btnTabFree = document.getElementById("btn-tab-trainer-free");
  const btnTabStages = document.getElementById("btn-tab-trainer-stages");
  const panelFree = document.getElementById("panel-trainer-free");
  const panelStages = document.getElementById("panel-trainer-stages");

  const btnTimerChip = document.getElementById("btn-toggle-timer-chip");
  const timerChipText = document.getElementById("timer-chip-text");
  const countdownWrap = document.getElementById("countdown-bar-wrap");
  const countdownFill = document.getElementById("countdown-bar-fill");
  const countdownLabel = document.getElementById("countdown-seconds-label");

  const promptEl = document.getElementById("quiz-prompt-text");
  const mathTarget = document.getElementById("quiz-math-target");
  const optionsContainer = document.getElementById("quiz-options-container");
  const feedbackBox = document.getElementById("quiz-feedback-box");
  const feedbackHeadline = document.getElementById("feedback-headline");
  const feedbackDesc = document.getElementById("quiz-feedback-desc");
  const feedbackChibi = document.getElementById("feedback-chibi-img");
  const duoAvatarImg = document.getElementById("duo-avatar-img");
  const nextBtn = document.getElementById("btn-next-question");
  const catTag = document.getElementById("quiz-category-tag");

  // Zmienne stanu
  let currentMode = "values";
  let activeStageId = null;
  let timerMode = false;
  let timerDifficulty = "easy"; // easy (30s), medium (15s), hard (8s)
  let timerInterval = null;
  let timeLeft = 30;
  let maxTime = 30;
  let currentQuestion = null;
  let answered = false;

  // Inicjalizacja konfetti
  initConfetti();

  // Obsługa zakładek (Szybki Trening vs Ścieżka Etapów)
  btnTabFree.addEventListener("click", () => {
    activeStageId = null;
    btnTabFree.classList.add("active");
    btnTabStages.classList.remove("active");
    panelFree.style.display = "block";
    panelStages.style.display = "none";
    generateQuestion();
  });

  btnTabStages.addEventListener("click", () => {
    btnTabStages.classList.add("active");
    btnTabFree.classList.remove("active");
    panelFree.style.display = "none";
    panelStages.style.display = "block";
    renderStages();
  });

  // Obsługa dźwięku
  soundBtn.addEventListener("click", () => {
    sounds.muted = !sounds.muted;
    localStorage.setItem("trig_sound_muted", sounds.muted);
    soundIcon.innerHTML = `<i data-lucide="${sounds.muted ? "volume-x" : "volume-2"}"></i>`;
    if (window.lucide) window.lucide.createIcons();
  });

  // Cykl timera: Wył -> 30s -> 15s -> 8s -> Wył
  const TIMER_CYCLES = [
    { mode: false, diff: "easy", label: "Czas: Wył." },
    { mode: true, diff: "easy", label: "30 s" },
    { mode: true, diff: "medium", label: "15 s" },
    { mode: true, diff: "hard", label: "8 s" }
  ];
  let timerCycleIndex = 0;

  function updateTimerChipUI() {
    const cur = TIMER_CYCLES[timerCycleIndex];
    timerMode = cur.mode;
    timerDifficulty = cur.diff;
    if (timerChipText) timerChipText.textContent = cur.label;
    if (timerMode) {
      btnTimerChip?.classList.add("active");
      if (countdownWrap) countdownWrap.style.display = "flex";
    } else {
      btnTimerChip?.classList.remove("active");
      if (countdownWrap) countdownWrap.style.display = "none";
      stopTimer();
    }
  }

  btnTimerChip?.addEventListener("click", () => {
    timerCycleIndex = (timerCycleIndex + 1) % TIMER_CYCLES.length;
    updateTimerChipUI();
    generateQuestion();
  });

  // Obsługa chipów trybów szybkiego treningu
  document.querySelectorAll(".mode-chip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mode-chip-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentMode = btn.getAttribute("data-mode");
      activeStageId = null;
      generateQuestion();
    });
  });

  nextBtn.addEventListener("click", () => {
    generateQuestion();
  });

  // Start pierwszego pytania
  generateQuestion();

  // GENEROWANIE PYTAŃ
  function generateQuestion() {
    stopTimer();
    answered = false;
    feedbackBox.style.display = "none";
    optionsContainer.innerHTML = "";

    // Sprawdzenie serduszek
    if (stats.hearts <= 0) {
      showZeroHeartsModal();
      return;
    }

    if (activeStageId !== null) {
      generateStageQuestion(activeStageId);
    } else if (currentMode === "values") {
      generateValuesQuestion();
    } else if (currentMode === "signs") {
      generateSignsQuestion();
    } else if (currentMode === "reduction") {
      generateReductionQuestion();
    } else {
      generateMaturaQuestion();
    }

    // Jeśli tryb na czas jest włączony -> start timera
    if (timerMode) {
      startTimer();
    }
  }

  // TIMER
  function startTimer() {
    maxTime = timerDifficulty === "easy" ? 30 : (timerDifficulty === "medium" ? 15 : 8);
    timeLeft = maxTime;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
      timeLeft -= 0.1;
      if (timeLeft <= 0) {
        timeLeft = 0;
        updateTimerDisplay();
        handleTimeOut();
      } else {
        updateTimerDisplay();
      }
    }, 100);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function updateTimerDisplay() {
    const pct = Math.max(0, (timeLeft / maxTime) * 100);
    countdownFill.style.width = `${pct}%`;
    countdownLabel.textContent = `${Math.ceil(timeLeft)}s`;

    if (pct > 50) {
      countdownFill.style.backgroundColor = "var(--accent-success)";
    } else if (pct > 25) {
      countdownFill.style.backgroundColor = "var(--accent-warn)";
    } else {
      countdownFill.style.backgroundColor = "var(--accent-error)";
    }
  }

  function handleTimeOut() {
    stopTimer();
    if (answered) return;
    answered = true;

    sounds.playWrong();
    stats.streak = 0;
    stats.hearts = Math.max(0, stats.hearts - 1);
    saveStats(stats);
    updateDuoUI();

    // Podświetlenie opcji
    const buttons = optionsContainer.querySelectorAll(".quiz-option-btn");
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === currentQuestion.correctIndex) {
        btn.classList.add("opt-correct");
      }
    });

    feedbackHeadline.textContent = "Czas minął! ⏰ Stracono serduszko";
    if (feedbackChibi) {
      feedbackChibi.src = "assets/emotes/sweat_nervous.png";
      feedbackChibi.className = "chibi-reaction-img sad";
    }
    const correctOpt = currentQuestion.options[currentQuestion.correctIndex];
    feedbackDesc.innerHTML = `<strong>Poprawna odpowiedź:</strong> \\(${correctOpt}\\)<br/>${currentQuestion.explanation}`;
    feedbackBox.style.display = "flex";
    if (window.renderMath) window.renderMath(feedbackBox);
  }

  // 1. MODUŁ: WARTOŚCI KĄTÓW (Osiowe 0°, 90°, 180°, 270°, 360°, I ćwiartka 30°, 45°, 60° oraz pozostałe ćwiartki)
  function generateValuesQuestion() {
    catTag.textContent = "Wartości Kątów (0-360°)";
    promptEl.textContent = "Wskaż dokładną wartość funkcji trygonometrycznej:";

    const anglesPool = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360];
    const pickedDeg = anglesPool[Math.floor(Math.random() * anglesPool.length)];
    const angleObj = SPECIAL_ANGLES.find(a => a.deg === pickedDeg) || SPECIAL_ANGLES[0];

    const funcs = ["sin", "cos", "tg", "ctg"];
    const validFuncs = funcs.filter(f => {
      const v = angleObj[f + "Latex"];
      return v && v !== "\\text{brak}";
    });
    const pickedFunc = validFuncs[Math.floor(Math.random() * validFuncs.length)];

    const targetMath = `\\${pickedFunc}(${pickedDeg}^\\circ)`;
    const correctVal = angleObj[pickedFunc + "Latex"];

    // Dystraktory
    const distractors = getDistractors(correctVal, pickedFunc);
    const options = shuffle([correctVal, ...distractors]);
    const correctIndex = options.indexOf(correctVal);

    currentQuestion = {
      correctIndex,
      options,
      explanation: `Dla kąta ${pickedDeg}° (${angleObj.radLatex}): ${angleObj.quadrant}. Wartość: \\(\\${pickedFunc}(${pickedDeg}^\\circ) = ${correctVal}\\).`
    };

    renderQuestionMath(targetMath, options);
  }

  // 2. MODUŁ: ZNAKI & ĆWIARTKI
  function generateSignsQuestion() {
    catTag.textContent = "Znaki Funkcji w Ćwiartkach";
    promptEl.textContent = "Jaki znak ma podana funkcja w tej ćwiartce?";

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

    currentQuestion = {
      correctIndex,
      options,
      explanation: `Kąt ${deg}° leży w <strong>${quad} ćwiartce</strong>. Z wierszyka: <em>${getMnemonicForQuad(quad)}</em>, więc wartość jest <strong>${correctVal}</strong>.`
    };

    renderQuestionMath(targetMath, options);
  }

  // 3. MODUŁ: WZORY REDUKCYJNE & TOŻSAMOŚCI
  function generateReductionQuestion() {
    catTag.textContent = "Wzory Redukcyjne i Tożsamości";
    promptEl.textContent = "Do jakiej prostszej postaci redukuje się to wyrażenie?";

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

    currentQuestion = {
      correctIndex,
      options,
      explanation: picked.note
    };

    renderQuestionMath(picked.expr, options);
  }

  // 4. MODUŁ: MATURALNE PYTANIA CKE
  function generateMaturaQuestion() {
    catTag.textContent = "Zadania Maturalne";
    promptEl.textContent = "Rozwiąż zadanie maturalne:";

    const maturaPool = TASKS.filter(t => t.type === "closed" || t.category === "exam");
    const t = maturaPool[Math.floor(Math.random() * maturaPool.length)] || TASKS[0];

    const targetMath = t.question;
    const options = t.options ? [...t.options] : ["A", "B", "C", "D"];
    const correctIndex = t.correctAnswer !== undefined ? t.correctAnswer : 0;

    currentQuestion = {
      correctIndex,
      options,
      explanation: `Z klucza odpowiedzi: poprawna to opcja <strong>${String.fromCharCode(65 + correctIndex)}</strong>.<br/>${t.solution.steps.slice(0, 2).join("<br/>")}`
    };

    renderQuestionMath(targetMath, options);
  }

  // 5. PYTANIA DLA KONKRETNEGO ETAPU (Ścieżka Duolingo)
  function generateStageQuestion(stageId) {
    const stage = STAGES.find(s => s.id === stageId) || STAGES[0];
    catTag.textContent = `Etap ${stage.id}: ${stage.title}`;

    if (stage.category === "axes") {
      // Kąty 0, 90, 180, 270, 360
      const axesAngles = [0, 90, 180, 270, 360];
      const deg = axesAngles[Math.floor(Math.random() * axesAngles.length)];
      const angleObj = SPECIAL_ANGLES.find(a => a.deg === deg) || SPECIAL_ANGLES[0];
      const funcs = ["sin", "cos"].filter(f => {
        const v = angleObj[f + "Latex"];
        return v && v !== "\\text{brak}";
      });
      const fn = funcs[Math.floor(Math.random() * funcs.length)];
      const targetMath = `\\${fn}(${deg}^\\circ)`;
      const correctVal = angleObj[fn + "Latex"];
      const options = shuffle([correctVal, ...getDistractors(correctVal, fn)]);
      currentQuestion = {
        correctIndex: options.indexOf(correctVal),
        options,
        explanation: `Kąt osiowy ${deg}° leży na osi współrzędnych. \\(\\${fn}(${deg}^\\circ) = ${correctVal}\\).`
      };
      renderQuestionMath(targetMath, options);
    } else if (stage.category === "sharp") {
      // 30, 45, 60
      const sharpAngles = [30, 45, 60];
      const deg = sharpAngles[Math.floor(Math.random() * sharpAngles.length)];
      const angleObj = SPECIAL_ANGLES.find(a => a.deg === deg);
      const fn = ["sin", "cos", "tg", "ctg"][Math.floor(Math.random() * 4)];
      const targetMath = `\\${fn}(${deg}^\\circ)`;
      const correctVal = angleObj[fn + "Latex"];
      const options = shuffle([correctVal, ...getDistractors(correctVal, fn)]);
      currentQuestion = {
        correctIndex: options.indexOf(correctVal),
        options,
        explanation: `Kąt ostry I ćwiartki: \\(\\${fn}(${deg}^\\circ) = ${correctVal}\\).`
      };
      renderQuestionMath(targetMath, options);
    } else if (stage.category === "signs") {
      generateSignsQuestion();
    } else if (stage.category === "quad2") {
      // 120, 135, 150
      const q2Angles = [120, 135, 150];
      const deg = q2Angles[Math.floor(Math.random() * q2Angles.length)];
      const angleObj = SPECIAL_ANGLES.find(a => a.deg === deg);
      const fn = ["sin", "cos", "tg"][Math.floor(Math.random() * 3)];
      const targetMath = `\\${fn}(${deg}^\\circ)`;
      const correctVal = angleObj[fn + "Latex"];
      const options = shuffle([correctVal, ...getDistractors(correctVal, fn)]);
      currentQuestion = {
        correctIndex: options.indexOf(correctVal),
        options,
        explanation: `II ćwiartka (180° - α): tylko sinus jest dodatni. \\(\\${fn}(${deg}^\\circ) = ${correctVal}\\).`
      };
      renderQuestionMath(targetMath, options);
    } else if (stage.category === "quad34") {
      // 210, 225, 240, 300, 315, 330
      const q34Angles = [210, 225, 240, 300, 315, 330];
      const deg = q34Angles[Math.floor(Math.random() * q34Angles.length)];
      const angleObj = SPECIAL_ANGLES.find(a => a.deg === deg);
      const fn = ["sin", "cos", "tg"][Math.floor(Math.random() * 3)];
      const targetMath = `\\${fn}(${deg}^\\circ)`;
      const correctVal = angleObj[fn + "Latex"];
      const options = shuffle([correctVal, ...getDistractors(correctVal, fn)]);
      currentQuestion = {
        correctIndex: options.indexOf(correctVal),
        options,
        explanation: `Kąt ${deg}° (${angleObj.quadrant}). Wartość: \\(\\${fn}(${deg}^\\circ) = ${correctVal}\\).`
      };
      renderQuestionMath(targetMath, options);
    } else if (stage.category === "identities" || stage.category === "advanced_reduction") {
      generateReductionQuestion();
    } else {
      generateMaturaQuestion();
    }
  }

  // RENDEROWANIE FORMULARZA PYTANIA
  function renderQuestionMath(mathCode, options) {
    // Pytanie już z delimiterami $ — nie owijamy ponownie (uszkodzony wzór)
    mathTarget.innerHTML = mathCode.includes("$") ? mathCode : `$$${mathCode}$$`;

    const hasLongOption = options.some(opt => String(opt || "").length > 25);
    if (hasLongOption) {
      optionsContainer.classList.add("cols-1");
    } else {
      optionsContainer.classList.remove("cols-1");
    }

    optionsContainer.innerHTML = options.map((opt, idx) => {
      const letter = String.fromCharCode(65 + idx);
      const optStr = String(opt !== undefined && opt !== null ? opt : "");
      const isMath = optStr.includes("\\") || optStr.includes("^") || optStr.includes("_") || optStr.includes("/");
      return `
        <button class="quiz-option-btn" data-index="${idx}">
          <span class="opt-key">${letter}</span>
          <span class="opt-label">${isMath ? `\\(${optStr}\\)` : optStr}</span>
        </button>
      `;
    }).join("");

    if (window.renderMath) {
      window.renderMath(mathTarget);
      window.renderMath(optionsContainer);
    }

    // Nasłuchiwanie kliknięć odpowiedzi
    optionsContainer.querySelectorAll(".quiz-option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        const chosenIdx = parseInt(btn.getAttribute("data-index"), 10);
        checkAnswer(chosenIdx);
      });
    });
  }

  // SPRAWDZANIE ODPOWIEDZI & DOPAMINA
  function checkAnswer(chosenIndex) {
    if (answered) return;
    answered = true;
    stopTimer();

    const isCorrect = chosenIndex === currentQuestion.correctIndex;
    const buttons = optionsContainer.querySelectorAll(".quiz-option-btn");

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === currentQuestion.correctIndex) {
        btn.classList.add("opt-correct");
      } else if (idx === chosenIndex) {
        btn.classList.add("opt-wrong");
      }
    });

    const oldLevel = getCurrentLevel(stats.xp).level;

    if (isCorrect) {
      sounds.playCorrect();
      stats.streak += 1;
      if (stats.streak > stats.maxStreak) stats.maxStreak = stats.streak;

      // Obliczanie punktów XP z bonusem za czas i combo
      let gainedXp = 10;
      if (timerMode) {
        const timeBonus = Math.round((timeLeft / maxTime) * 10);
        gainedXp += timeBonus;
      }
      if (stats.streak >= 3) {
        gainedXp = Math.round(gainedXp * 1.5);
      }
      stats.xp += gainedXp;
      stats.totalCorrect += 1;

      // Jeśli jesteśmy w etapie -> zaliczamy postęp: co 2 poprawne odpowiedzi
      // jedna gwiazdka; pierwsza gwiazdka odblokowuje kolejny etap.
      if (activeStageId !== null) {
        stats.stageProgress = stats.stageProgress || {};
        stats.stageProgress[activeStageId] = (stats.stageProgress[activeStageId] || 0) + 1;

        stats.stageStars = stats.stageStars || {};
        const stars = Math.min(3, Math.floor(stats.stageProgress[activeStageId] / 2));
        stats.stageStars[activeStageId] = Math.max(stats.stageStars[activeStageId] || 0, stars);

        if (stars >= 1) {
          stats.unlockedStages = stats.unlockedStages || [1];
          const nextStage = activeStageId + 1;
          if (nextStage <= STAGES.length && !stats.unlockedStages.includes(nextStage)) {
            stats.unlockedStages.push(nextStage);
          }
        }
      }

      // Efekt konfetti i celebracji
      if (window.launchConfetti) window.launchConfetti();

      // Wybór wesołej emotki z reakcją z arkusza postaci
      const happyReactions = [
        { img: "assets/emotes/happy_wave.png", text: "Świetnie! Poprawna odpowiedź! 🌟" },
        { img: "assets/emotes/devil_jumping.png", text: "Yaaay! Mistrzowska precyzja! 💎" },
        { img: "assets/emotes/wink_heart.png", text: "Genialnie! Kąt opanowany perfekcyjnie! 💖" },
        { img: "assets/emotes/smug_thumbsup.png", text: "Czysta perfekcja! Tak trzymaj! 👍" },
        { img: "assets/emotes/devil_cheer.png", text: "Lecisz jak burza! Brawo! 🚀" },
        { img: "assets/emotes/magic_star.png", text: "Magia trygonometrii opanowana! ✨" },
        { img: "assets/emotes/wink_star.png", text: "Wspaniale! Punkt dla Ciebie! ⭐" }
      ];
      const picked = happyReactions[Math.floor(Math.random() * happyReactions.length)];
      if (feedbackChibi) {
        feedbackChibi.src = picked.img;
        feedbackChibi.className = "chibi-reaction-img happy";
      }
      feedbackHeadline.textContent = picked.text;

      if (stats.streak >= 3) {
        comboBanner.style.display = "flex";
        comboBanner.innerHTML = `
          <img src="assets/emotes/devil_cheer.png" class="combo-chibi-badge" alt="Cheer" />
          <span><i data-lucide="flame"></i> SERIA ${stats.streak}! COMBO +${gainedXp} XP!</span>
          <img src="assets/emotes/broom_fly.png" class="combo-chibi-badge" alt="Broom" />
        `;
        if (window.lucide) window.lucide.createIcons();
      } else {
        comboBanner.style.display = "none";
      }

      // Sprawdzenie awansu na wyższy poziom
      const newLevel = getCurrentLevel(stats.xp).level;
      if (newLevel > oldLevel) {
        sounds.playLevelUp();
        window.showToast?.(`👑 AWANS NA POZIOM ${newLevel}: ${getCurrentLevel(stats.xp).name}!`, 3500);
      }
    } else {
      sounds.playWrong();
      stats.streak = 0;
      stats.hearts = Math.max(0, stats.hearts - 1);
      comboBanner.style.display = "none";

      const sadReactions = [
        { img: "assets/emotes/crying_stream.png", text: "Niestety błąd! Tracisz serduszko 💔" },
        { img: "assets/emotes/crying_tremble.png", text: "Uuuć... Pomyłka, ale nie poddawaj się! 💧" },
        { img: "assets/emotes/devil_pout.png", text: "Grrr! Ten kąt był podchwytliwy! Sprawdź wzór: 💡" },
        { img: "assets/emotes/bandage.png", text: "Aua! Tracisz serduszko, zobacz wyjaśnienie: 🩹" }
      ];
      const picked = sadReactions[Math.floor(Math.random() * sadReactions.length)];
      if (feedbackChibi) {
        feedbackChibi.src = picked.img;
        feedbackChibi.className = "chibi-reaction-img sad";
      }
      feedbackHeadline.textContent = picked.text;
    }

    stats.totalAnswered += 1;
    saveStats(stats);
    updateDuoUI();

    feedbackDesc.innerHTML = currentQuestion.explanation;
    feedbackBox.style.display = "flex";
    if (window.renderMath) window.renderMath(feedbackBox);
    try {
      feedbackBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } catch (e) {}
  }

  // RENDEROWANIE ŚCIEŻKI ETAPÓW (Z POSTACIAMI CHIBI)
  function renderStages() {
    const container = document.getElementById("stages-path-container");
    if (!container) return;

    container.innerHTML = STAGES.map((s) => {
      const isUnlocked = s.id === 1 || (stats.unlockedStages && stats.unlockedStages.includes(s.id));
      const starsCount = (stats.stageStars && stats.stageStars[s.id]) || 0;
      const stars = isUnlocked
        ? "⭐".repeat(starsCount) + "☆".repeat(3 - starsCount)
        : "🔒";

      return `
        <div class="stage-node-card ${isUnlocked ? 'unlocked' : 'locked'} ${starsCount >= 3 ? 'completed' : ''}" data-stage-id="${s.id}">
          <div class="stage-chibi-avatar">
            <img src="assets/emotes/${s.emote}" class="stage-chibi-img" alt="${s.title}" />
          </div>
          <div class="stage-node-info">
            <div class="stage-node-title">
              <strong>Etap ${s.id}: ${s.title}</strong>
              <span class="stage-stars">${stars}</span>
            </div>
            <p class="stage-node-desc">${s.desc}</p>
          </div>
          <button class="stage-play-btn" ${!isUnlocked ? 'disabled' : ''}>
            ${starsCount >= 1 ? 'Powtórz' : 'Graj'}
          </button>
        </div>
      `;
    }).join("");

    container.querySelectorAll(".stage-node-card.unlocked").forEach(card => {
      card.addEventListener("click", () => {
        const sId = parseInt(card.getAttribute("data-stage-id"), 10);
        activeStageId = sId;
        btnTabFree.classList.add("active");
        btnTabStages.classList.remove("active");
        panelFree.style.display = "block";
        panelStages.style.display = "none";
        generateQuestion();
      });
    });
  }

  // Aktualizacja elementów UI w stylu Duolingo
  function updateDuoUI() {
    duoStreak.textContent = stats.streak;
    duoXp.textContent = stats.xp;
    duoHearts.textContent = stats.hearts;

    const curLvl = getCurrentLevel(stats.xp);
    levelBadge.innerHTML = `<i data-lucide="${curLvl.icon}"></i><span>${curLvl.name}</span>`;
    levelXpText.textContent = getXpProgressText(stats.xp);
    levelFill.style.width = `${getLevelProgressPercent(stats.xp)}%`;
    if (duoAvatarImg && curLvl.emote) {
      duoAvatarImg.src = `assets/emotes/${curLvl.emote}`;
    }
    if (window.lucide) window.lucide.createIcons();
  }

  function showZeroHeartsModal() {
    optionsContainer.innerHTML = `
      <div class="zero-hearts-box">
        <div class="zero-hearts-chibi-wrap">
          <img src="assets/emotes/crying_stream.png" class="zero-hearts-chibi" alt="Płaczący chibi" />
        </div>
        <span class="broken-heart-huge">💔</span>
        <h3>Skończyły Ci się serduszka!</h3>
        <p>Twoja postać płacze z powodu błędów, ale eliksir z kociołka natychmiast przywróci pełne siły!</p>
        <button class="action-btn refill-hearts-btn" id="btn-refill-hearts">
          <img src="assets/emotes/potion.png" class="btn-chibi-icon" alt="Eliksir" /> Odnów 5 serduszek (Eliksir energii)
        </button>
      </div>
    `;
    document.getElementById("btn-refill-hearts")?.addEventListener("click", () => {
      stats.hearts = 5;
      saveStats(stats);
      updateDuoUI();
      generateQuestion();
    });
  }

  // Pomocniki obliczeń poziomów
  function getCurrentLevel(xp) {
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (xp >= LEVELS[i].xpNeeded) return LEVELS[i];
    }
    return LEVELS[0];
  }

  function getXpProgressText(xp) {
    const cur = getCurrentLevel(xp);
    const nextIdx = LEVELS.findIndex(l => l.level === cur.level) + 1;
    if (nextIdx >= LEVELS.length) return "MAX POZIOM!";
    const next = LEVELS[nextIdx];
    return `${xp} / ${next.xpNeeded} XP`;
  }

  function getLevelProgressPercent(xp) {
    const cur = getCurrentLevel(xp);
    const nextIdx = LEVELS.findIndex(l => l.level === cur.level) + 1;
    if (nextIdx >= LEVELS.length) return 100;
    const next = LEVELS[nextIdx];
    const needed = next.xpNeeded - cur.xpNeeded;
    const current = xp - cur.xpNeeded;
    return Math.min(100, Math.max(0, Math.round((current / needed) * 100)));
  }

  // Wierszyk mnemotechniczny dla ćwiartki
  function getMnemonicForQuad(q) {
    if (q === "I") return "W pierwszej ćwiartce same plusy (+)";
    if (q === "II") return "W drugiej tylko sinus (+)";
    if (q === "III") return "W trzeciej tangens i cotangens (+)";
    return "A w czwartej cosinus (+)";
  }

  // Dystraktory do pytań
  function getDistractors(correct, func) {
    const pool = ["0", "1", "-1", "\\frac{1}{2}", "-\\frac{1}{2}", "\\frac{\\sqrt{2}}{2}", "-\\frac{\\sqrt{2}}{2}", "\\frac{\\sqrt{3}}{2}", "-\\frac{\\sqrt{3}}{2}", "\\frac{\\sqrt{3}}{3}", "-\\frac{\\sqrt{3}}{3}", "\\sqrt{3}", "-\\sqrt{3}"];
    const filtered = pool.filter(v => v !== correct);
    return shuffle(filtered).slice(0, 3);
  }

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function loadStats() {
    const defaults = {
      xp: 0,
      streak: 0,
      maxStreak: 0,
      hearts: 5,
      totalAnswered: 0,
      totalCorrect: 0,
      unlockedStages: [1],
      stageStars: {},
      stageProgress: {}
    };
    let s = defaults;
    const raw = localStorage.getItem("trig_duo_stats");
    if (raw) {
      try { s = { ...defaults, ...JSON.parse(raw) }; } catch (e) { s = defaults; }
    }

    // Migracja starego zapisu completedStages: etapy stają się odblokowane,
    // a gwiazdki (1) dostają tylko te faktycznie ukończone (przed maksymalnym)
    if (Array.isArray(s.completedStages) && s.completedStages.length) {
      const maxId = Math.max(...s.completedStages);
      s.completedStages.forEach(id => {
        if (!s.unlockedStages.includes(id)) s.unlockedStages.push(id);
      });
      for (let id = 1; id < maxId; id++) {
        if (s.stageStars[id] === undefined) s.stageStars[id] = 1;
      }
      delete s.completedStages;
    }
    return s;
  }

  function saveStats(s) {
    localStorage.setItem("trig_duo_stats", JSON.stringify(s));
  }

  // PURE JS KONFETTI (Zero zewnętrznych bibliotek)
  function initConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animId = null;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    window.launchConfetti = function() {
      particles = [];
      const colors = ["#38bdf8", "#34d399", "#c084fc", "#fbbf24", "#f43f5e", "#60a5fa"];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          vx: (Math.random() - 0.5) * 14,
          vy: (Math.random() - 0.7) * 14,
          size: Math.random() * 8 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10,
          alpha: 1
        });
      }

      if (animId) cancelAnimationFrame(animId);
      render();
    };

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // grawitacja
        p.rotation += p.rotationSpeed;
        p.alpha -= 0.015;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (alive) {
        animId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }
}
