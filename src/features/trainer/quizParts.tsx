// quizParts.tsx - Wspólne elementy karty pytania dla trenerów: display wzoru,
// siatka opcji, panel feedbacku z chibi, pasek odliczania i box „zero serduszek".
import { useEffect, useRef } from "react";
import { renderMath } from "../../lib/katex";
import { Icon } from "../../components/icons";
import { TIMER_SECONDS } from "./quizEngine";
import type { QuizQuestion } from "./quizEngine";

/** Display wzoru pytania — pytania z banku mogą już zawierać $…$ (nie wolno
 *  owijać drugi raz w $$…$$ — podwójny delimiter = uszkodzony wzór). */
export function QuizMathDisplay({ math }: { math: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const html = math.includes("$") ? math : `$$${math}$$`;
  useEffect(() => {
    if (ref.current) renderMath(ref.current);
  }, [html]);
  return <div ref={ref} className="q-math-display" dangerouslySetInnerHTML={{ __html: html }} />;
}

export function QuizOptions({
  question, answered, chosenIndex, onAnswer
}: {
  question: QuizQuestion;
  answered: boolean;
  chosenIndex: number | null;
  onAnswer: (idx: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hasLongOption = question.options.some((opt) => String(opt || "").length > 25);
  useEffect(() => {
    if (ref.current) renderMath(ref.current);
  }, [question]);
  return (
    <div ref={ref} className={`q-options-grid ${hasLongOption ? "cols-1" : ""}`}>
      {question.options.map((opt, idx) => {
        const optStr = String(opt ?? "");
        const isMath = optStr.includes("\\") || optStr.includes("^") || optStr.includes("_") || optStr.includes("/");
        return (
          <button
            key={idx}
            className={`quiz-option-btn ${
              answered
                ? idx === question.correctIndex
                  ? "opt-correct"
                  : idx === chosenIndex
                    ? "opt-wrong"
                    : ""
                : ""
            }`}
            disabled={answered}
            onClick={() => !answered && onAnswer(idx)}
          >
            <span className="opt-key">{String.fromCharCode(65 + idx)}</span>
            <span className="opt-label" dangerouslySetInnerHTML={{ __html: isMath ? `\\(${optStr}\\)` : optStr }} />
          </button>
        );
      })}
    </div>
  );
}

export interface TrainerFeedback {
  mood: "happy" | "sad";
  img: string;
  title: string;
  /** HTML wyjaśnienia (inline \(…\) renderowane przez KaTeX) */
  explanationHtml: string;
}

export function FeedbackPanel({
  feedback, onNext, nextLabel = "Następne pytanie"
}: {
  feedback: TrainerFeedback;
  onNext: () => void;
  nextLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      renderMath(ref.current);
      try {
        ref.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } catch { /* brak wsparcia scrollowania — ignorujemy */ }
    }
  }, [feedback]);
  return (
    <div ref={ref} className="q-feedback-panel" style={{ display: "flex" }}>
      <div className="feedback-chibi-row">
        <img className={`chibi-reaction-img ${feedback.mood}`} src={`assets/emotes/${feedback.img}`} alt="Reakcja Chibi" />
        <div className="feedback-bubble-content">
          <div className="feedback-title">{feedback.title}</div>
          <p className="feedback-explanation" dangerouslySetInnerHTML={{ __html: feedback.explanationHtml }} />
        </div>
      </div>
      <button className="next-q-btn" onClick={onNext}>
        <span>{nextLabel}</span> <Icon name="arrow-right" />
      </button>
    </div>
  );
}

/** Smukły pasek odliczania z licznikiem sekund (kolor wg pozostałego czasu). */
export function CountdownBar({ timeLeft, maxTime }: { timeLeft: number; maxTime: number }) {
  const pct = maxTime > 0 ? Math.max(0, (timeLeft / maxTime) * 100) : 0;
  const color = pct > 50 ? "var(--accent-success)" : pct > 25 ? "var(--accent-warn)" : "var(--accent-error)";
  return (
    <div className="countdown-bar-wrap" style={{ display: "flex" }}>
      <div className="countdown-bar-track">
        <div className="countdown-bar-fill" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <span className="countdown-seconds-label">{Math.ceil(timeLeft)}s</span>
    </div>
  );
}

export function TimerChip({ label, active, onToggle }: { label: string; active: boolean; onToggle: () => void }) {
  return (
    <div className="timer-control-row">
      <button className={`timer-chip-toggle ${active ? "active" : ""}`} title="Kliknij, aby przełączyć tryb na czas" onClick={onToggle}>
        <Icon name="timer" />
        <span>{label}</span>
      </button>
    </div>
  );
}

export function timerSecondsFor(diff: string | undefined): number {
  return TIMER_SECONDS[(diff as keyof typeof TIMER_SECONDS) ?? "easy"] ?? 30;
}
