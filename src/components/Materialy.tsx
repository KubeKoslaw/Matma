// Materialy.tsx - Port legacy/js/modules/materialy.js na React.
// tryb "theory" — akordeon tematów z maskotką i postępem czytania
// tryb "tasks"  — karty zadań z wyszukiwarką, filtrami i dopaminą
// (✓ Zrobione → konfetti + chibi + dźwięk — wzorzec trenera).
// Dane: src/data/generated/material-*.json generowane przez `npm run build:materials`.

import { useEffect, useMemo, useRef, useState } from "react";
import { loadMaterial } from "../dzialy";
import type { Dzial } from "../dzialy";
import type { Material, MaterialTab, MaterialTask } from "../data/types";
import { mdToHtml, inlineMd } from "../lib/md";
import { renderMath } from "../lib/katex";
import {
  ENCOURAGEMENTS, celebrateSmall, celebrateGroup, celebrateAllTheory,
  pick, randomMascot
} from "../lib/celebrate";
import { Icon } from "./icons";

const GROUP_LABELS: Record<string, string> = {
  intro: "Wprowadzające",
  m202250: "Maturalne 202–250",
  m251296: "Maturalne 251–296",
  m465505: "Maturalne 465–505",
  m506546: "Maturalne 506–546"
};

interface Progress {
  theory: Record<number, boolean>;
  tasks: Record<string, boolean>;
}

function loadProgress(dzialId: string): Progress {
  try {
    const raw = localStorage.getItem("trig_mat_" + dzialId);
    if (raw) {
      const p = JSON.parse(raw) as Partial<Progress>;
      return { theory: p.theory ?? {}, tasks: p.tasks ?? {} };
    }
  } catch { /* świeży start */ }
  return { theory: {}, tasks: {} };
}

// Blok HTML z markdownu + automatyczny render KaTeX przy montowaniu
function HtmlWithMath({ html, className }: { html: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) renderMath(ref.current);
  }, [html]);
  return <div ref={ref} className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function Materialy({ dzial, tab }: { dzial: Dzial; tab: MaterialTab }) {
  const [material, setMaterial] = useState<Material | null>(null);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState<Progress>({ theory: {}, tasks: {} });
  const [group, setGroup] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    setMaterial(null);
    setError("");
    setGroup("all");
    setQuery("");
    loadMaterial(dzial.id)
      .then((m) => {
        if (cancelled) return;
        setMaterial(m);
        setProgress(loadProgress(dzial.id));
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err));
      });
    return () => { cancelled = true; };
  }, [dzial.id]);

  const updateProgress = (fn: (p: Progress) => Progress) => {
    setProgress((prev) => {
      const next = fn(prev);
      try {
        localStorage.setItem("trig_mat_" + dzial.id, JSON.stringify(next));
      } catch { /* brak miejsca — ignorujemy */ }
      return next;
    });
  };

  if (error) {
    return (
      <div className="material-wrap">
        <div className="material-error">
          <p>Nie udało się wczytać materiału ({error}).</p>
          <button className="action-btn" onClick={() => location.reload()}>Spróbuj ponownie</button>
        </div>
      </div>
    );
  }

  if (!material) {
    return (
      <div className="material-wrap">
        <div className="material-loading" style={{ display: "flex" }}>
          <Icon name="loader" /> Wczytywanie…
        </div>
      </div>
    );
  }

  if (tab === "tasks" && material.tasks.length) {
    return (
      <div className="material-wrap">
        <TaskList
          tasks={material.tasks}
          progress={progress}
          onUpdateProgress={updateProgress}
          group={group}
          onGroupChange={setGroup}
          query={query}
          onQueryChange={setQuery}
        />
      </div>
    );
  }

  return (
    <div className="material-wrap">
      <Theory cards={material.theory} progress={progress} onUpdateProgress={updateProgress} />
    </div>
  );
}

// --- tryb: teoria (akordeon) ------------------------------------------------

function Theory({
  cards, progress, onUpdateProgress
}: {
  cards: Material["theory"];
  progress: Progress;
  onUpdateProgress: (fn: (p: Progress) => Progress) => void;
}) {
  // Losowa maskotka i hasło stabilne w czasie życia widoku (parity z legacy)
  const mascot = useMemo(randomMascot, []);
  const encouragement = useMemo(() => pick(ENCOURAGEMENTS), []);
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set([0]));

  const readCount = Object.keys(progress.theory).filter((k) => progress.theory[Number(k)]).length;
  const pct = cards.length ? Math.round((readCount / cards.length) * 100) : 0;

  const toggleCard = (idx: number) => {
    const opening = !expanded.has(idx);
    setExpanded((prev) => {
      const next = new Set(prev);
      if (opening) next.add(idx); else next.delete(idx);
      return next;
    });

    if (opening && !progress.theory[idx]) {
      onUpdateProgress((p) => ({ ...p, theory: { ...p.theory, [idx]: true } }));
      const all = cards.length;
      const doneCount = readCount + 1;
      if (doneCount >= all) celebrateAllTheory();
    }
  };

  return (
    <>
      <div className="material-progress-banner">
        <img className="mat-mascot" src={`assets/emotes/${mascot}`} alt="" />
        <div className="mat-progress-info">
          <div className="mat-encourage">{encouragement}</div>
          <div className="progress-track"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
          <div className="mat-progress-text">Przeczytane tematy: {readCount} z {cards.length}</div>
        </div>
      </div>
      <div className="material-theory-list">
        {cards.map((card, idx) => {
          const isRead = !!progress.theory[idx];
          const isOpen = expanded.has(idx);
          return (
            <div key={idx} className={`material-theory-card ${isRead ? "done" : ""}`} data-theory-idx={idx}>
              <button
                className="theory-toggle"
                aria-expanded={isOpen}
                onClick={() => toggleCard(idx)}
              >
                <span className="theory-check">{isRead ? "✓" : ""}</span>
                <span className="theory-title" dangerouslySetInnerHTML={{ __html: inlineMd(card.title) }} />
                <Icon name="chevron-down" className={`theory-chevron ${isOpen ? "open" : ""}`} />
              </button>
              {isOpen && <HtmlWithMath html={mdToHtml(card.md)} className="material-body" />}
            </div>
          );
        })}
      </div>
    </>
  );
}

// --- tryb: zadania -----------------------------------------------------------

function TaskList({
  tasks, progress, onUpdateProgress, group, onGroupChange, query, onQueryChange
}: {
  tasks: MaterialTask[];
  progress: Progress;
  onUpdateProgress: (fn: (p: Progress) => Progress) => void;
  group: string;
  onGroupChange: (g: string) => void;
  query: string;
  onQueryChange: (q: string) => void;
}) {
  const groups = [...new Set(tasks.map((t) => t.group))];

  const groupDoneCount = (g: string) =>
    tasks.filter((t) => t.group === g && progress.tasks[t.id]).length;

  const filtered = tasks.filter((t) => {
    if (group === "todo" && progress.tasks[t.id]) return false;
    if (group !== "all" && group !== "todo" && t.group !== group) return false;
    const q = query.toLowerCase().trim();
    if (q === "") return true;
    const plain = (t.id + " " + t.question).replace(/[$\\{}]/g, "").toLowerCase();
    return plain.includes(q);
  });

  const todoCount = tasks.filter((t) => !progress.tasks[t.id]).length;
  const doneTotal = tasks.length - todoCount;
  const count = filtered.length === tasks.length
    ? `Wszystkie ${tasks.length} zadań (zrobione: ${doneTotal})`
    : `Wyświetlanie: ${filtered.length} z ${tasks.length} zadań (zrobione: ${doneTotal})`;

  const toggleTaskDone = (taskId: string) => {
    const wasDone = !!progress.tasks[taskId];
    onUpdateProgress((p) => {
      const tasksNext = { ...p.tasks };
      if (wasDone) delete tasksNext[taskId];
      else tasksNext[taskId] = true;
      return { ...p, tasks: tasksNext };
    });

    if (!wasDone) {
      // Dopamina: konfetti + chibi + dźwięk; ukończenie grupy = wielka feta
      const task = tasks.find((t) => t.id === taskId);
      const g = task?.group;
      const groupTasks = tasks.filter((t) => t.group === g);
      const allDone = g !== undefined && groupTasks.every((t) => t.id === taskId || progress.tasks[t.id]);
      if (allDone && g !== undefined) {
        celebrateGroup(GROUP_LABELS[g] || g);
      } else {
        celebrateSmall();
      }
    }
  };

  return (
    <>
      <div className="material-toolbar">
        <div className="search-box">
          <Icon name="search" />
          <input
            type="text"
            placeholder="Szukaj zadania (np. 2.5, 251, prosta)..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
          />
        </div>
        <div className="quad-filter-group">
          <button className={`filter-pill ${group === "all" ? "active" : ""}`} onClick={() => onGroupChange("all")}>Wszystkie</button>
          <button className={`filter-pill ${group === "todo" ? "active" : ""}`} onClick={() => onGroupChange("todo")}>Do zrobienia ({todoCount})</button>
          {groups.map((g) => {
            const total = tasks.filter((t) => t.group === g).length;
            const done = groupDoneCount(g);
            return (
              <button key={g} className={`filter-pill ${group === g ? "active" : ""}`} onClick={() => onGroupChange(g)}>
                {GROUP_LABELS[g] || g} ✓{done}/{total}
              </button>
            );
          })}
        </div>
        <div className="results-info"><span>{count}</span></div>
      </div>
      <div className="tasks-list">
        {filtered.map((t) => (
          <TaskCard key={t.id} task={t} isDone={!!progress.tasks[t.id]} onToggleDone={() => toggleTaskDone(t.id)} />
        ))}
        {filtered.length === 0 && (
          <div className="task-card-item"><p className="material-nomatch">Brak zadań dla wybranych filtrów.</p></div>
        )}
      </div>
    </>
  );
}

function TaskCard({ task, isDone, onToggleDone }: { task: MaterialTask; isDone: boolean; onToggleDone: () => void }) {
  const groupLabel = GROUP_LABELS[task.group] || task.group;
  const [openBox, setOpenBox] = useState<"answer" | "solution" | null>(null);

  return (
    <div className={`task-card-item ${isDone ? "task-done" : ""}`}>
      <div className="task-card-top">
        <div className="task-badges">
          <span className="badge-tag badge-id">Zadanie {task.id}</span>
          <span className="badge-tag badge-basic">{groupLabel}</span>
          {task.flaggedR && <span className="badge-tag badge-extended">R</span>}
        </div>
        <button
          className={`btn-toggle-done ${isDone ? "active" : ""}`}
          aria-label="Oznacz jako zrobione"
          onClick={onToggleDone}
        >
          <Icon name="check" />
        </button>
      </div>
      <div className="task-question-box">
        <HtmlWithMath html={mdToHtml(task.question)} className="question-text" />
      </div>
      <div className="task-actions-row">
        {task.answer && (
          <button
            className={`btn-toggle-hint ${openBox === "answer" ? "active" : ""}`}
            onClick={() => setOpenBox(openBox === "answer" ? null : "answer")}
          >
            <Icon name="lightbulb" /> Odpowiedź
          </button>
        )}
        {task.solution && (
          <button
            className={`btn-toggle-sol ${openBox === "solution" ? "active" : ""}`}
            onClick={() => setOpenBox(openBox === "solution" ? null : "solution")}
          >
            <Icon name="file-check" /> Rozwiązanie
          </button>
        )}
      </div>
      {openBox === "answer" && task.answer && (
        <div className="task-solution-box">
          <div className="sol-header"><strong>Odpowiedź:</strong></div>
          <HtmlWithMath html={mdToHtml(task.answer)} />
        </div>
      )}
      {openBox === "solution" && task.solution && (
        <div className="task-solution-box">
          <div className="sol-header"><strong>Rozwiązanie krok po kroku:</strong></div>
          <HtmlWithMath html={mdToHtml(task.solution)} />
        </div>
      )}
    </div>
  );
}
