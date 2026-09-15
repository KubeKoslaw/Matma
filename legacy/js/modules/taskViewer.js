// taskViewer.js - Moduł przeglądania bazy zadań i pełnych rozwiązań z podręcznika
import { TASKS, TASK_CATEGORIES } from "../data/tasks.js";

export function initTaskViewer(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="tasks-card">
      <div class="tasks-toolbar">
        <div class="search-box">
          <i data-lucide="search"></i>
          <input type="text" id="task-search-input" placeholder="Szukaj zadania (np. 10.4, 501, parametr, tożsamość)..." />
        </div>

        <div class="filter-controls-row">
          <div class="select-group">
            <label>Kategoria:</label>
            <select id="task-cat-filter" class="form-select">
              ${TASK_CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join("")}
            </select>
          </div>

          <div class="select-group">
            <label>Poziom:</label>
            <select id="task-diff-filter" class="form-select">
              <option value="all">Wszystkie poziomy</option>
              <option value="Podstawowy">Podstawowy</option>
              <option value="Rozszerzony">Rozszerzony</option>
              <option value="Wyzwanie">Wyzwanie (gwiazdka/egzamin)</option>
            </select>
          </div>
        </div>
      </div>

      <div class="results-info">
        <span id="task-count-info">Baza: ${TASKS.length} zadań ze zdjęć z pełnymi rozwiązaniami</span>
      </div>

      <div class="task-actions-row" style="margin-bottom: 12px;">
        <button class="btn-toggle-sol" id="btn-full-material">
          <i data-lucide="book-open"></i> Pełne zestawienie: teoria, wzory i zadania
        </button>
      </div>

      <div class="tasks-list" id="tasks-list-container">
        <!-- Zadania renderowane dynamicznie -->
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  const searchInput = document.getElementById("task-search-input");
  const catFilter = document.getElementById("task-cat-filter");
  const diffFilter = document.getElementById("task-diff-filter");
  const listContainer = document.getElementById("tasks-list-container");
  const countInfo = document.getElementById("task-count-info");

  function renderTasks() {
    const term = searchInput.value.toLowerCase().trim();
    const cat = catFilter.value;
    const diff = diffFilter.value;

    const filtered = TASKS.filter(t => {
      if (cat !== "all" && t.category !== cat) return false;
      if (diff !== "all" && !t.difficulty.includes(diff)) return false;

      if (term !== "") {
        return t.id.toLowerCase().includes(term) ||
               t.title.toLowerCase().includes(term) ||
               t.question.toLowerCase().includes(term) ||
               t.examType.toLowerCase().includes(term) ||
               t.answer.toLowerCase().includes(term);
      }
      return true;
    });

    countInfo.textContent = `Wyświetlanie: ${filtered.length} z ${TASKS.length} zadań`;

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <i data-lucide="help-circle"></i>
          <p>Nie znaleziono zadań odpowiadających wybranym kryteriom.</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    listContainer.innerHTML = filtered.map(t => {
      const diffClass = t.difficulty.includes("Wyzwanie") ? "diff-challenge" :
                        t.difficulty.includes("Rozszerzony") ? "diff-adv" : "diff-basic";

      return `
        <div class="task-card-item" id="task-item-${t.id}">
          <div class="task-card-top">
            <div class="task-badges">
              <span class="badge-tag badge-id">Zadanie ${t.id}</span>
              <span class="badge-tag ${diffClass}">${t.difficulty}</span>
              <span class="badge-tag badge-exam">${t.examType}</span>
            </div>
          </div>

          <h4 class="task-title">${t.title}</h4>

          <div class="task-question-box">
            <div class="question-text">${escapeHtml(t.question)}</div>
          </div>

          <!-- Pasek akcji zadania -->
          <div class="task-actions-row">
            ${t.hint ? `
              <button class="btn-toggle-hint" data-id="${t.id}">
                <i data-lucide="lightbulb"></i> <span class="hint-label">Wskazówka</span>
              </button>
            ` : ''}

            <button class="btn-toggle-sol" data-id="${t.id}">
              <i data-lucide="file-check"></i> <span class="sol-label">Pełne Rozwiązanie</span>
            </button>
          </div>

          <!-- Blok wskazówki -->
          ${t.hint ? `
            <div class="task-hint-box" id="hint-box-${t.id}" style="display: none;">
              <div class="hint-header"><i data-lucide="info"></i> Wskazówka:</div>
              <p class="hint-text" data-latex="${escapeHtml(t.hint)}">${escapeHtml(t.hint)}</p>
            </div>
          ` : ''}

          <!-- Blok rozwiązania -->
          <div class="task-solution-box" id="sol-box-${t.id}" style="display: none;">
            <div class="sol-header"><i data-lucide="check-circle"></i> Rozwiązanie krok po kroku (z klucza ze zdjęć):</div>
            <div class="sol-content" id="sol-content-${t.id}">${formatSolution(t.solution)}</div>
            <div class="sol-final-ans">
              <strong>Odpowiedź końcowa:</strong> ${t.answer}
            </div>
          </div>
        </div>
      `;
    }).join("");

    if (window.lucide) window.lucide.createIcons();

    // Akcje rozwijania
    listContainer.querySelectorAll(".btn-toggle-hint").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const box = document.getElementById(`hint-box-${id}`);
        const isHidden = box.style.display === "none";
        box.style.display = isHidden ? "block" : "none";
        btn.classList.toggle("active", isHidden);
      });
    });

    listContainer.querySelectorAll(".btn-toggle-sol").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const box = document.getElementById(`sol-box-${id}`);
        const isHidden = box.style.display === "none";
        box.style.display = isHidden ? "block" : "none";
        btn.classList.toggle("active", isHidden);

        // Render KaTeX in solution if first time opened
        if (isHidden && window.katex) {
          const contentEl = document.getElementById(`sol-content-${id}`);
          if (window.renderMathInElement) {
            window.renderMathInElement(contentEl, {
              delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false }
              ],
              throwOnError: false
            });
          }
        }
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatSolution(sol) {
    if (!sol) return "";
    // Konwersja markdown nagłówków i list
    return sol
      .replace(/\n\n/g, "<br><br>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  }

  searchInput.addEventListener("input", renderTasks);
  catFilter.addEventListener("change", renderTasks);
  diffFilter.addEventListener("change", renderTasks);

  document.getElementById("btn-full-material")?.addEventListener("click", () => {
    window.openMaterial?.("trygonometria");
  });

  renderTasks();
}
