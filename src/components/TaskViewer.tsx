// TaskViewer.tsx - Moduł przeglądania bazy zadań i pełnych rozwiązań z podręcznika
import { useState, useMemo } from "react";
import { TASKS, TASK_CATEGORIES } from "../features/trainer/tryg/tasksData";
import { Icon } from "./icons";
import HtmlWithMath from "./HtmlWithMath";

function safeString(val: unknown, fallback = ""): string {
  if (val === null || val === undefined) return fallback;
  return String(val);
}

function safeArray(val: unknown): unknown[] {
  return Array.isArray(val) ? val : [];
}

function formatSolution(sol: string): string {
  if (!sol) return "";
  return sol
    .replace(/\n\n/g, "<br><br>")
    .replace(/\n/g, "<br>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

function formatHint(hint: string): string {
  if (!hint) return "";
  const withMarkdown = hint.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  if (withMarkdown.includes("$") || withMarkdown.includes("\\(") || withMarkdown.includes("\\[")) {
    return withMarkdown;
  }
  if (withMarkdown.includes("\\")) {
    return `$$${withMarkdown}$$`;
  }
  return withMarkdown;
}

export default function TaskViewer() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");

  const [openHints, setOpenHints] = useState<Record<string, boolean>>({});
  const [openSols, setOpenSols] = useState<Record<string, boolean>>({});

  const toggleHint = (id: string) => {
    setOpenHints(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSol = (id: string) => {
    setOpenSols(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOpenMaterial = () => {
    (window as Window & { openMaterial?: (topic: string) => void }).openMaterial?.("trygonometria");
  };

  const filteredTasks = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return TASKS.filter(t => {
      const cat = safeString(t.category);
      const diff = safeString(t.difficulty);
      const id = safeString(t.id);
      const title = safeString(t.title);
      const question = safeString(t.question);
      const examType = safeString(t.examType);
      const answer = safeString(t.answer);

      if (categoryFilter !== "all" && cat !== categoryFilter) return false;
      if (difficultyFilter !== "all" && !diff.includes(difficultyFilter)) return false;

      if (term !== "") {
        return (
          id.toLowerCase().includes(term) ||
          title.toLowerCase().includes(term) ||
          question.toLowerCase().includes(term) ||
          examType.toLowerCase().includes(term) ||
          answer.toLowerCase().includes(term)
        );
      }
      return true;
    });
  }, [categoryFilter, difficultyFilter, searchTerm]);

  return (
    <div className="tasks-card">
      <div className="tasks-toolbar">
        <div className="search-box">
          <Icon name="search" />
          <input
            type="text"
            id="task-search-input"
            placeholder="Szukaj zadania (np. 10.4, 501, parametr, tożsamość)..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Chipsy kategorii */}
        <div className="formula-cat-chips" style={{ overflowX: "auto" }}>
          {TASK_CATEGORIES.map(c => (
            <button
              key={c.id}
              className={`cat-chip ${categoryFilter === c.id ? "active" : ""}`}
              onClick={() => setCategoryFilter(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="filter-controls-row">
          <div className="select-group">
            <label>Kategoria:</label>
            <select
              id="task-cat-filter"
              className="form-select"
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
            >
              {TASK_CATEGORIES.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="select-group">
            <label>Poziom:</label>
            <select
              id="task-diff-filter"
              className="form-select"
              value={difficultyFilter}
              onChange={e => setDifficultyFilter(e.target.value)}
            >
              <option value="all">Wszystkie poziomy</option>
              <option value="Podstawowy">Podstawowy</option>
              <option value="Rozszerzony">Rozszerzony</option>
              <option value="Wyzwanie">Wyzwanie (gwiazdka/egzamin)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="results-info">
        <span id="task-count-info">
          Wyświetlanie: {filteredTasks.length} z {TASKS.length} zadań
        </span>
      </div>

      <div className="task-actions-row" style={{ marginBottom: 12 }}>
        <button className="btn-toggle-sol" id="btn-full-material" onClick={handleOpenMaterial}>
          <Icon name="book-open" /> Pełne zestawienie: teoria, wzory i zadania
        </button>
      </div>

      <div className="tasks-list" id="tasks-list-container">
        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <Icon name="help-circle" />
            <p>Nie znaleziono zadań odpowiadających wybranym kryteriom.</p>
          </div>
        ) : (
          filteredTasks.map(t => {
            const taskId = safeString(t.id);
            const title = safeString(t.title);
            const difficulty = safeString(t.difficulty);
            const examType = safeString(t.examType);
            const question = safeString(t.question);
            const hint = safeString(t.hint);
            const answer = safeString(t.answer);
            const solution = safeString(t.solution);
            const steps = safeArray(t.steps);

            const diffClass = difficulty.includes("Wyzwanie")
              ? "diff-challenge"
              : difficulty.includes("Rozszerzony")
              ? "diff-adv"
              : "diff-basic";

            const isHintOpen = Boolean(openHints[taskId]);
            const isSolOpen = Boolean(openSols[taskId]);

            return (
              <div key={taskId} className="task-card-item" id={`task-item-${taskId}`}>
                <div className="task-card-top">
                  <div className="task-badges">
                    <span className="badge-tag badge-id">Zadanie {taskId}</span>
                    <span className={`badge-tag ${diffClass}`}>{difficulty}</span>
                    <span className="badge-tag badge-exam">{examType}</span>
                  </div>
                </div>

                <h4 className="task-title">{title}</h4>

                <div className="task-question-box">
                  <div className="question-text">{question}</div>
                </div>

                {/* Pasek akcji zadania */}
                <div className="task-actions-row">
                  {hint ? (
                    <button
                      className={`btn-toggle-hint ${isHintOpen ? "active" : ""}`}
                      data-id={taskId}
                      onClick={() => toggleHint(taskId)}
                    >
                      <Icon name="lightbulb" /> <span className="hint-label">Wskazówka</span>
                    </button>
                  ) : null}

                  <button
                    className={`btn-toggle-sol ${isSolOpen ? "active" : ""}`}
                    data-id={taskId}
                    onClick={() => toggleSol(taskId)}
                  >
                    <Icon name="file-check" /> <span className="sol-label">Pełne Rozwiązanie</span>
                  </button>
                </div>

                {/* Blok wskazówki */}
                {hint && isHintOpen ? (
                  <div className="task-hint-box" id={`hint-box-${taskId}`}>
                    <div className="hint-header">
                      <Icon name="info" /> Wskazówka:
                    </div>
                    <HtmlWithMath html={formatHint(hint)} className="hint-text" />
                  </div>
                ) : null}

                {/* Blok rozwiązania */}
                {isSolOpen ? (
                  <div className="task-solution-box" id={`sol-box-${taskId}`}>
                    <div className="sol-header">
                      <Icon name="check-circle" /> Rozwiązanie krok po kroku (z klucza ze zdjęć):
                    </div>
                    {steps.length > 0 && (
                      <div className="task-steps-list" style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "8px" }}>
                        {steps.map((step, sIdx) => (
                          <div key={sIdx} className="step-item">
                            <HtmlWithMath html={formatSolution(safeString(step))} />
                          </div>
                        ))}
                      </div>
                    )}
                    <HtmlWithMath html={formatSolution(solution)} className="sol-content" />
                    <div className="sol-final-ans">
                      <strong>Odpowiedź końcowa:</strong> {answer}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
