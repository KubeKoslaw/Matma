// TrygTrainer.tsx - Trener trygonometrii w stylu Duolingo (port legacy trainer.js):
// Szybki Trening (4 tryby) + Ścieżka Etapów (8 etapów z gwiazdkami), timer z cyklem
// Wył.→30 s→15 s→8 s, combo za serię, XP/poziomy/serduszka (wspólne trig_duo_stats).
import { useCallback, useEffect, useRef, useState } from "react";
import {
  generateMaturaQuestion, generateReductionQuestion,
  generateSignsQuestion, generateStageQuestion, generateValuesQuestion
} from "./questions";
import { STAGES } from "./stages";
import type { QuizQuestion } from "../quizEngine";
import { TIMER_CYCLES } from "../quizEngine";
import { getCurrentLevel } from "../levels";
import { useDuoStats, useTrainerTimer, timeFraction } from "../hooks";
import { trainerSounds } from "../../../lib/sounds";
import { launchConfetti } from "../../../lib/confetti";
import { showToast } from "../../../lib/toast";
import TrainerHud from "../TrainerHud";
import ZeroHearts from "../ZeroHearts";
import { QuizMathDisplay, QuizOptions, FeedbackPanel, CountdownBar, TimerChip, timerSecondsFor } from "../quizParts";
import type { TrainerFeedback } from "../quizParts";
import { Icon } from "../../../components/icons";

type QuickMode = "values" | "signs" | "reduction" | "matura";

const HAPPY_REACTIONS = [
  { img: "happy_wave.png", text: "Świetnie! Poprawna odpowiedź! 🌟" },
  { img: "devil_jumping.png", text: "Yaaay! Mistrzowska precyzja! 💎" },
  { img: "wink_heart.png", text: "Genialnie! Kąt opanowany perfekcyjnie! 💖" },
  { img: "smug_thumbsup.png", text: "Czysta perfekcja! Tak trzymaj! 👍" },
  { img: "devil_cheer.png", text: "Lecisz jak burza! Brawo! 🚀" },
  { img: "magic_star.png", text: "Magia trygonometrii opanowana! ✨" },
  { img: "wink_star.png", text: "Wspaniale! Punkt dla Ciebie! ⭐" }
];
const SAD_REACTIONS = [
  { img: "crying_stream.png", text: "Niestety błąd! Tracisz serduszko 💔" },
  { img: "crying_tremble.png", text: "Uuuć... Pomyłka, ale nie poddawaj się! 💧" },
  { img: "devil_pout.png", text: "Grrr! Ten kąt był podchwytliwy! Sprawdź wzór: 💡" },
  { img: "bandage.png", text: "Aua! Tracisz serduszko, zobacz wyjaśnienie: 🩹" }
];

const pickOne = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export default function TrygTrainer() {
  const { stats, update } = useDuoStats();
  const [tab, setTab] = useState<"free" | "stages">("free");
  const [mode, setMode] = useState<QuickMode>("values");
  const [activeStageId, setActiveStageId] = useState<number | null>(null);
  const [timerCycleIndex, setTimerCycleIndex] = useState(0);
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [answered, setAnswered] = useState(false);
  const [chosenIndex, setChosenIndex] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<TrainerFeedback | null>(null);
  const [combo, setCombo] = useState<{ streak: number; gainedXp: number } | null>(null);
  const [zeroHearts, setZeroHearts] = useState(false);

  const timer = useTrainerTimer(() => handleExpire());
  const timerStateRef = useRef({ mode: false, timeLeft: 0, maxTime: 0 });
  timerStateRef.current = { mode: timer.running, timeLeft: timer.timeLeft, maxTime: timer.maxTime };
  // Aktywny tryb timera wg wybranego cyklu (niezależnie od startu odliczania)
  const timerModeRef = useRef(false);

  const generateFor = useCallback((stageId: number | null, m: QuickMode): QuizQuestion => {
    if (stageId !== null) return generateStageQuestion(stageId);
    if (m === "values") return generateValuesQuestion();
    if (m === "signs") return generateSignsQuestion();
    if (m === "reduction") return generateReductionQuestion();
    return generateMaturaQuestion();
  }, []);

  interface NextOpts {
    stageId?: number | null;
    mode?: QuickMode;
    hearts?: number;
    /** Świeżo wybrany diff timera (cykl zmieniony w tej samej turze) */
    timerDiff?: "easy" | "medium" | "hard";
  }

  const nextQuestion = useCallback(
    (opts: NextOpts = {}) => {
      const stageId = opts.stageId !== undefined ? opts.stageId : activeStageId;
      const m = opts.mode ?? mode;
      const hearts = opts.hearts ?? stats.hearts;
      const timerDiff = opts.timerDiff ?? TIMER_CYCLES[timerCycleIndex].diff;

      timer.stop();
      setAnswered(false);
      setChosenIndex(null);
      setFeedback(null);
      setCombo(null);

      if (hearts <= 0) {
        setZeroHearts(true);
        setQuestion(null);
        return;
      }
      setZeroHearts(false);
      const q = generateFor(stageId, m);
      setQuestion(q);
      if (timerModeRef.current) {
        timer.start(timerSecondsFor(timerDiff));
      }
    },
    [activeStageId, mode, stats.hearts, timerCycleIndex, generateFor, timer]
  );

  // Świeża wersja nextQuestion dla handlerów timera (bez stale closures)
  const nextRef = useRef(nextQuestion);
  nextRef.current = nextQuestion;

  // Start pierwszego pytania po zamontowaniu trenera (parity z legacy)
  useEffect(() => {
    nextRef.current();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleExpire() {
    if (answered || !question) return;
    setAnswered(true);
    trainerSounds.playWrong();
    update((s) => ({ ...s, streak: 0, hearts: Math.max(0, s.hearts - 1) }));
    const correctOpt = question.options[question.correctIndex];
    setFeedback({
      mood: "sad",
      img: "sweat_nervous.png",
      title: "Czas minął! ⏰ Stracono serduszko",
      explanationHtml: `<strong>Poprawna odpowiedź:</strong> \\(${correctOpt}\\)<br/>${question.explanation}`
    });
  }

  function handleAnswer(idx: number) {
    if (answered || !question) return;
    setAnswered(true);
    setChosenIndex(idx);
    timer.stop();

    const isCorrect = idx === question.correctIndex;
    const oldLevel = getCurrentLevel(stats.xp).level;
    const stageId = activeStageId;
    let gainedXp = 0;

    if (isCorrect) {
      trainerSounds.playCorrect();
      const newStreak = stats.streak + 1;
      gainedXp = 10;
      const frac = timerModeRef.current ? timeFraction(timer.timeLeft, timer.maxTime) : null;
      if (frac !== null) gainedXp += Math.round(frac * 10);
      if (newStreak >= 3) gainedXp = Math.round(gainedXp * 1.5);

      update((s) => {
        const next = {
          ...s,
          streak: s.streak + 1,
          maxStreak: Math.max(s.maxStreak, s.streak + 1),
          xp: s.xp + gainedXp,
          totalCorrect: s.totalCorrect + 1
        };

        // Postęp etapu: co 2 poprawne odpowiedzi gwiazdka; pierwsza odblokowuje kolejny etap
        if (stageId !== null) {
          const prog = (s.stageProgress[String(stageId)] ?? 0) + 1;
          next.stageProgress = { ...s.stageProgress, [String(stageId)]: prog };
          const stars = Math.min(3, Math.floor(prog / 2));
          next.stageStars = {
            ...s.stageStars,
            [String(stageId)]: Math.max(s.stageStars[String(stageId)] ?? 0, stars)
          };
          if (stars >= 1) {
            const nextStage = stageId + 1;
            if (nextStage <= STAGES.length && !next.unlockedStages.includes(nextStage)) {
              next.unlockedStages = [...next.unlockedStages, nextStage];
            }
          }
        }
        return next;
      });

      launchConfetti();
      const reaction = pickOne(HAPPY_REACTIONS);
      setFeedback({ mood: "happy", img: reaction.img, title: reaction.text, explanationHtml: question.explanation });

      if (newStreak >= 3) setCombo({ streak: newStreak, gainedXp });

      // Awans na wyższy poziom (po doliczeniu XP za tę odpowiedź)
      const newLevel = getCurrentLevel(stats.xp + gainedXp).level;
      if (newLevel > oldLevel) {
        trainerSounds.playLevelUp();
        showToast(`👑 AWANS NA POZIOM ${newLevel}: ${getCurrentLevel(stats.xp + gainedXp).name}!`, 3500);
      }
    } else {
      trainerSounds.playWrong();
      update((s) => ({ ...s, streak: 0, hearts: Math.max(0, s.hearts - 1) }));
      const reaction = pickOne(SAD_REACTIONS);
      setFeedback({ mood: "sad", img: reaction.img, title: reaction.text, explanationHtml: question.explanation });
    }

    update((s) => ({ ...s, totalAnswered: s.totalAnswered + 1 }));
  }

  const timerCycle = TIMER_CYCLES[timerCycleIndex];

  const cycleTimer = () => {
    const nextIdx = (timerCycleIndex + 1) % TIMER_CYCLES.length;
    setTimerCycleIndex(nextIdx);
    timerModeRef.current = TIMER_CYCLES[nextIdx].mode;
    // przekazujemy diff świeżo wybranego cyklu — stan byłby jeszcze stary
    nextRef.current({ timerDiff: TIMER_CYCLES[nextIdx].diff });
  };

  const switchMode = (m: QuickMode) => {
    setMode(m);
    setActiveStageId(null);
    nextRef.current({ mode: m, stageId: null });
  };

  const playStage = (stageId: number) => {
    setActiveStageId(stageId);
    setTab("free");
    nextRef.current({ stageId });
  };

  const refillHearts = () => {
    update((s) => ({ ...s, hearts: 5 }));
    setZeroHearts(false);
    nextRef.current({ hearts: 5 });
  };

  return (
    <div className="trainer-card">
      <TrainerHud stats={stats} showSoundToggle />

      <div className="trainer-segmented-nav">
        <button
          className={`segmented-btn ${tab === "free" ? "active" : ""}`}
          onClick={() => {
            setActiveStageId(null);
            setTab("free");
            nextRef.current({ stageId: null });
          }}
        >
          <Icon name="zap" /> Szybki Trening
        </button>
        <button className={`segmented-btn ${tab === "stages" ? "active" : ""}`} onClick={() => setTab("stages")}>
          <Icon name="map" /> Ścieżka Etapów ({STAGES.length})
        </button>
      </div>

      {tab === "free" ? (
        <div className="trainer-subpanel active">
          <div className="mode-grid-2x2">
            {(
              [
                ["values", "Kąty 0-360°"],
                ["signs", "Ćwiartki & Znaki"],
                ["reduction", "Wzory Redukcyjne"],
                ["matura", "Zadania maturalne"]
              ] as Array<[QuickMode, string]>
            ).map(([m, label]) => (
              <button
                key={m}
                className={`mode-chip-btn ${mode === m && activeStageId === null ? "active" : ""}`}
                onClick={() => switchMode(m)}
              >
                {label}
              </button>
            ))}
          </div>

          <TimerChip label={timerCycle.label} active={timerCycle.mode} onToggle={cycleTimer} />

          {timerCycle.mode && <CountdownBar timeLeft={timer.timeLeft} maxTime={timer.maxTime} />}

          <div className="quiz-question-card">
            <div className="q-header-compact">
              <span className="badge-tag">{question?.categoryTag ?? (zeroHearts ? "" : "…")}</span>
              {combo && (
                <div className="combo-banner" style={{ display: "flex" }}>
                  <img src="assets/emotes/devil_cheer.png" className="combo-chibi-badge" alt="Cheer" />
                  <span><Icon name="flame" /> SERIA {combo.streak}! COMBO +{combo.gainedXp} XP!</span>
                  <img src="assets/emotes/broom_fly.png" className="combo-chibi-badge" alt="Broom" />
                </div>
              )}
            </div>

            {zeroHearts ? (
              <ZeroHearts onRefill={refillHearts} />
            ) : (
              question && (
                <>
                  <div className="q-prompt">{question.prompt}</div>
                  <QuizMathDisplay math={question.math} />
                  <QuizOptions question={question} answered={answered} chosenIndex={chosenIndex} onAnswer={handleAnswer} />
                  {feedback && <FeedbackPanel feedback={feedback} onNext={() => nextRef.current()} />}
                </>
              )
            )}
          </div>
        </div>
      ) : (
        <div className="trainer-subpanel active">
          <div className="stages-header-banner">
            <h3>Ścieżka Opanowania Trygonometrii</h3>
            <p>Ukończ każdy z 8 etapów, aby zdobyć 3 gwiazdki ⭐ i odblokować tytuł Arcymistrza!</p>
          </div>
          <div className="stages-path-grid">
            {STAGES.map((s) => {
              const isUnlocked = s.id === 1 || stats.unlockedStages.includes(s.id);
              const starsCount = stats.stageStars[String(s.id)] ?? 0;
              const stars = isUnlocked
                ? "⭐".repeat(starsCount) + "☆".repeat(3 - starsCount)
                : "🔒";
              return (
                <div
                  key={s.id}
                  className={`stage-node-card ${isUnlocked ? "unlocked" : "locked"} ${starsCount >= 3 ? "completed" : ""}`}
                  onClick={() => {
                    if (isUnlocked) playStage(s.id);
                  }}
                >
                  <div className="stage-chibi-avatar">
                    <img src={`assets/emotes/${s.emote}`} className="stage-chibi-img" alt={s.title} />
                  </div>
                  <div className="stage-node-info">
                    <div className="stage-node-title">
                      <strong>Etap {s.id}: {s.title}</strong>
                      <span className="stage-stars">{stars}</span>
                    </div>
                    <p className="stage-node-desc">{s.desc}</p>
                  </div>
                  <button className="stage-play-btn" disabled={!isUnlocked}>
                    {starsCount >= 1 ? "Powtórz" : "Graj"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
