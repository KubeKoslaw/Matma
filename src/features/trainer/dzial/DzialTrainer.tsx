// DzialTrainer.tsx - Trener działowy (port legacy dzialTrainer.js, uogólniony):
// tryby „Wzory i własności" (bank MCQ), „Obliczenia" (generatory) i „Zadania
// (fiszki)" z samoceną Zgadłem/Nie (✓ synchronizuje się z widokiem Zadania).
// Banki pytań są per dział — na razie pełny bank ma geometria analityczna;
// nowy dział = nowy plik banku + wpis w dzialBanks.ts.
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dzial } from "../../../dzialy";
import { loadMaterial } from "../../../dzialy";
import type { MaterialTask } from "../../../data/types";
import type { QuizQuestion } from "../quizEngine";
import { TIMER_CYCLES } from "../quizEngine";
import { getCurrentLevel } from "../levels";
import { useDuoStats, useTrainerTimer, timeFraction } from "../hooks";
import { trainerSounds } from "../../../lib/sounds";
import { launchConfetti } from "../../../lib/confetti";
import { showToast } from "../../../lib/toast";
import { markTaskDone } from "../../../lib/materialProgress";
import { getDzialTrainerBank } from "./dzialBanks";
import TrainerHud from "../TrainerHud";
import ZeroHearts from "../ZeroHearts";
import { QuizMathDisplay, QuizOptions, FeedbackPanel, CountdownBar, TimerChip, timerSecondsFor } from "../quizParts";
import type { TrainerFeedback } from "../quizParts";
import HtmlWithMath from "../../../components/HtmlWithMath";
import { miniMd } from "./miniMd";
import { Icon } from "../../../components/icons";

type DzialMode = "formulas" | "calc" | "flash";

const HAPPY = ["happy_wave.png", "wink_heart.png", "wink_star.png", "magic_star.png", "smug_thumbsup.png", "devil_cheer.png"];
const SAD = ["crying_stream.png", "crying_tremble.png", "devil_pout.png", "bandage.png"];
const HAPPY_TXT = ["Świetnie! 🌟", "Yaaay! 💎", "Genialnie! 💖", "Czysta perfekcja! 👍", "Lecisz jak burza! 🚀"];
const SAD_TXT = ["Niestety błąd! 💔", "Uuuć... nie poddawaj się! 💧", "Podchwytliwe! Sprawdź rozwiązanie: 💡"];

const pickOne = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export default function DzialTrainer({ dzial }: { dzial: Dzial }) {
  const { stats, update } = useDuoStats();
  const bank = getDzialTrainerBank(dzial.id);
  const [mode, setMode] = useState<DzialMode>(bank ? "formulas" : "flash");
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [answered, setAnswered] = useState(false);
  const [chosenIndex, setChosenIndex] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<TrainerFeedback | null>(null);
  const [zeroHearts, setZeroHearts] = useState(false);
  const [flashcard, setFlashcard] = useState<MaterialTask | null>(null);
  const [flashRevealed, setFlashRevealed] = useState(false);
  const [flashEmpty, setFlashEmpty] = useState(false);
  const [timerCycleIndex, setTimerCycleIndex] = useState(0);
  const [materialTasks, setMaterialTasks] = useState<MaterialTask[]>([]);

  const timer = useTrainerTimer(() => handleExpire());
  const timerModeRef = useRef(false);
  const stateRef = useRef({ answered: false, question: null as QuizQuestion | null, mode: "formulas" as DzialMode, flashcard: null as MaterialTask | null });
  stateRef.current = { answered, question, mode, flashcard };

  useEffect(() => {
    let cancelled = false;
    loadMaterial(dzial.id)
      .then((m) => {
        if (!cancelled) setMaterialTasks(m.tasks || []);
      })
      .catch(() => {
        if (!cancelled) setMaterialTasks([]);
      });
    return () => {
      cancelled = true;
    };
  }, [dzial.id]);

  const nextRef = useRef<() => void>(() => {});
  const pendingTimerDiff = useRef<"easy" | "medium" | "hard" | null>(null);

  const nextQuestion = useCallback(() => {
    timer.stop();
    setAnswered(false);
    setChosenIndex(null);
    setFeedback(null);
    setFlashRevealed(false);

    if (stats.hearts <= 0) {
      setZeroHearts(true);
      setQuestion(null);
      setFlashcard(null);
      return;
    }
    setZeroHearts(false);

    if (stateRef.current.mode === "flash") {
      setQuestion(null);
      const tasks = materialTasks;
      if (!tasks.length) {
        setFlashcard(null);
        setFlashEmpty(true);
        return;
      }
      setFlashEmpty(false);
      setFlashcard(pickOne(tasks));
      return;
    }
    setFlashcard(null);
    setFlashEmpty(false);

    const bankNow = getDzialTrainerBank(dzial.id);
    if (!bankNow) {
      // Dział bez własnego banku — tylko fiszki
      setMode("flash");
      stateRef.current.mode = "flash";
      return;
    }
    const q = stateRef.current.mode === "formulas" ? bankNow.genFormulaQuestion() : pickOne(bankNow.generators)();
    setQuestion(q);
    if (timerModeRef.current) {
      const diff = pendingTimerDiff.current ?? TIMER_CYCLES[timerCycleIndex].diff;
      pendingTimerDiff.current = null;
      timer.start(timerSecondsFor(diff));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats.hearts, materialTasks, timerCycleIndex, dzial.id, timer]);

  nextRef.current = nextQuestion;

  // Pierwsze pytanie + regeneracja po doładowaniu zadań materiału
  useEffect(() => {
    nextRef.current();
  }, [materialTasks]);

  function registerAnswer(correct: boolean, explanationHtml: string, correctLatex: string) {
    const oldLevel = getCurrentLevel(stats.xp).level;
    let gainedXp = 0;

    if (correct) {
      trainerSounds.playCorrect();
      const newStreak = stats.streak + 1;
      gainedXp = 10;
      const frac = timerModeRef.current ? timeFraction(timer.timeLeft, timer.maxTime) : null;
      if (frac !== null) gainedXp += Math.round(frac * 10);
      if (newStreak >= 3) gainedXp = Math.round(gainedXp * 1.5);
      update((s) => ({
        ...s,
        streak: s.streak + 1,
        maxStreak: Math.max(s.maxStreak, s.streak + 1),
        xp: s.xp + gainedXp,
        totalCorrect: s.totalCorrect + 1
      }));
      launchConfetti();
      setFeedback({
        mood: "happy",
        img: pickOne(HAPPY),
        title: pickOne(HAPPY_TXT) + ` (+${gainedXp} XP)`,
        explanationHtml
      });

      const newLevel = getCurrentLevel(stats.xp + gainedXp).level;
      if (newLevel > oldLevel) {
        trainerSounds.playLevelUp();
        showToast(`👑 AWANS NA POZIOM ${newLevel}: ${getCurrentLevel(stats.xp + gainedXp).name}!`, 3500);
      }
    } else {
      trainerSounds.playWrong();
      update((s) => ({ ...s, streak: 0, hearts: Math.max(0, s.hearts - 1) }));
      setFeedback({
        mood: "sad",
        img: pickOne(SAD),
        title: pickOne(SAD_TXT),
        explanationHtml:
          (explanationHtml ? explanationHtml + (correctLatex ? "<br>" : "") : "") +
          (correctLatex ? `<strong>Poprawna odpowiedź:</strong> ${correctLatex}` : "")
      });
    }

    update((s) => ({ ...s, totalAnswered: s.totalAnswered + 1 }));
  }

  function handleAnswer(idx: number) {
    if (answered || !question) return;
    setAnswered(true);
    setChosenIndex(idx);
    timer.stop();
    const correct = idx === question.correctIndex;
    registerAnswer(correct, question.explanation, "\\(" + question.options[question.correctIndex] + "\\)");
  }

  function handleExpire() {
    const { answered: wasAnswered, question: q } = stateRef.current;
    if (wasAnswered) return;
    setAnswered(true);
    timer.stop();
    update((s) => ({ ...s, streak: 0, hearts: Math.max(0, s.hearts - 1) }));
    if (q) {
      registerAnswer(false, "Czas minął! ⏰", "\\(" + q.options[q.correctIndex] + "\\)");
    } else {
      registerAnswer(false, "Czas minął! ⏰", "");
    }
  }

  function selfGrade(good: boolean) {
    const card = stateRef.current.flashcard;
    if (!card || answered) return;
    setAnswered(true);
    if (good) {
      markTaskDone(dzial.id, card.id);
    }
    registerAnswer(good, "", "");
  }

  const timerCycle = TIMER_CYCLES[timerCycleIndex];

  const cycleTimer = () => {
    const nextIdx = (timerCycleIndex + 1) % TIMER_CYCLES.length;
    setTimerCycleIndex(nextIdx);
    timerModeRef.current = TIMER_CYCLES[nextIdx].mode;
    // przekazujemy diff świeżo wybranego cyklu — stan byłby jeszcze stary
    pendingTimerDiff.current = TIMER_CYCLES[nextIdx].diff;
    nextRef.current();
  };

  const switchMode = (m: DzialMode) => {
    setMode(m);
    stateRef.current.mode = m;
    nextRef.current();
  };

  const refillHearts = () => {
    update((s) => ({ ...s, hearts: 5 }));
    setZeroHearts(false);
    nextRef.current();
  };

  const categoryTag = mode === "flash"
    ? flashcard
      ? `Zadanie ${flashcard.id}${flashcard.flaggedR ? " [R]" : ""}`
      : "Fiszki"
    : mode === "formulas"
      ? "Wzory i własności"
      : "Obliczenia";

  return (
    <div className="trainer-card">
      <TrainerHud stats={stats} />

      <div className="mode-grid-2x2" style={{ marginBottom: 8 }}>
        {(
          [
            ...(bank ? ([["formulas", "Wzory i własności"], ["calc", "Obliczenia"]] as Array<[DzialMode, string]>) : []),
            ["flash", "Zadania (fiszki)"] as [DzialMode, string]
          ] as Array<[DzialMode, string]>
        ).map(([m, label]) => (
          <button key={m} className={`mode-chip-btn ${mode === m ? "active" : ""}`} onClick={() => switchMode(m)}>
            {label}
          </button>
        ))}
      </div>

      <TimerChip label={timerCycle.label} active={timerCycle.mode} onToggle={cycleTimer} />
      {timerCycle.mode && <CountdownBar timeLeft={timer.timeLeft} maxTime={timer.maxTime} />}

      <div className="quiz-question-card">
        <div className="q-header-compact">
          <span className="badge-tag">{categoryTag}</span>
        </div>

        {zeroHearts ? (
          <ZeroHearts onRefill={refillHearts} note="Eliksir z kociołka przywróci pełne siły!" />
        ) : mode === "flash" ? (
          flashcard ? (
            <>
              <div className="q-prompt">Rozwiąż w zeszycie, potem oceń siebie:</div>
              <div className="q-math-display q-math-flashcard">
                <HtmlWithMath html={`<div class="flashcard-question-content">${miniMd(flashcard.question)}</div>`} />
              </div>
              {!flashRevealed ? (
                <button className="next-q-btn" style={{ width: "100%" }} onClick={() => setFlashRevealed(true)}>
                  <Icon name="eye" /> Pokaż odpowiedź
                </button>
              ) : (
                <>
                  <div className="task-solution-box" style={{ display: "block" }}>
                    <div className="sol-header"><strong>Odpowiedź:</strong></div>
                    <HtmlWithMath html={miniMd(flashcard.answer || "(brak krótkiej odpowiedzi — sprawdź rozwiązanie)")} />
                    {flashcard.solution && (
                      <>
                        <div className="sol-header" style={{ marginTop: 8 }}><strong>Rozwiązanie krok po kroku:</strong></div>
                        <HtmlWithMath html={miniMd(flashcard.solution)} />
                      </>
                    )}
                  </div>
                  <div className="q-options-grid" style={{ display: "grid" }}>
                    <button className="quiz-option-btn dt-yes" disabled={answered} onClick={() => selfGrade(true)}>
                      <Icon name="check" /> Zgadłem
                    </button>
                    <button className="quiz-option-btn dt-no" disabled={answered} onClick={() => selfGrade(false)}>
                      <Icon name="x" /> Nie
                    </button>
                  </div>
                  {feedback && <FeedbackPanel feedback={feedback} onNext={() => nextRef.current()} nextLabel="Następne" />}
                </>
              )}
            </>
          ) : (
            <div className="q-prompt">
              {flashEmpty ? "Zadania tego działu są jeszcze wczytywane…" : ""}
            </div>
          )
        ) : (
          question && (
            <>
              <div className="q-prompt">{question.prompt}</div>
              <QuizMathDisplay math={question.math} />
              <QuizOptions question={question} answered={answered} chosenIndex={chosenIndex} onAnswer={handleAnswer} />
              {feedback && <FeedbackPanel feedback={feedback} onNext={() => nextRef.current()} nextLabel="Następne" />}
            </>
          )
        )}
      </div>
    </div>
  );
}
