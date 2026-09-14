// materialy.js - Widoki materiałów działu w STYLU Trygonometrii:
//  • tryb "theory" — karty teorii/wzorów (jak karty wzorów)
//  • tryb "tasks"  — karty zadań z wyszukiwarką, filtrami grup i rozwijanymi
//    odpowiedziami/rozwiązaniami (jak widok Zadania)
// Dane: js/data/material-*.js generowane przez `npm run build:materials`.

const GROUP_LABELS = {
  intro: "Wprowadzające",
  m202250: "Maturalne 202–250",
  m251296: "Maturalne 251–296",
  m465505: "Maturalne 465–505",
  m506546: "Maturalne 506–546"
};

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Formatowanie inline — matematyka ($...$ / $$...$$) wycinana na placeholdery,
// żeby KaTeX dostał surowy LaTeX, a **pogrubienia** działały w poprzek wzorów
function inlineMd(s) {
  const math = [];
  const text = s.replace(/(\$\$[^$]*\$\$|\$[^$]*\$)/g, (m) => {
    math.push(m);
    return `\x00M${math.length - 1}\x00`;
  });
  const formatted = escapeHtml(text)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
  return formatted.replace(/\x00M(\d+)\x00/g, (_, i) => math[Number(i)]);
}

// Minimalny renderer markdown block-level dla fragmentów zadania/karty teorii
function mdToHtml(md) {
  const out = [];
  const listStack = [];
  let para = [];
  let mathBuf = null;
  let quoteBuf = null;

  const closeLists = () => {
    while (listStack.length) out.push(`</${listStack.pop().type}>`);
  };
  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${para.map(inlineMd).join("<br>")}</p>`);
      para = [];
    }
  };
  const flushQuote = () => {
    if (quoteBuf) {
      out.push(`<blockquote>${quoteBuf.map(inlineMd).join("<br>")}</blockquote>`);
      quoteBuf = null;
    }
  };

  for (const line of md.split("\n")) {
    const trimmed = line.trim();

    if (mathBuf !== null) {
      mathBuf.push(line);
      if (trimmed.includes("$$")) {
        out.push(`<div class="material-math">${mathBuf.join("\n")}</div>`);
        mathBuf = null;
      }
      continue;
    }
    if (trimmed.startsWith("$$")) {
      flushPara();
      flushQuote();
      if (trimmed.slice(2).includes("$$")) {
        out.push(`<div class="material-math">${trimmed}</div>`);
      } else {
        mathBuf = [trimmed];
      }
      continue;
    }

    if (trimmed === "") {
      flushPara();
      flushQuote();
      closeLists();
      continue;
    }

    const h = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      flushPara();
      flushQuote();
      const level = Math.min(6, h[1].length + 1);
      out.push(`<h${level}>${inlineMd(h[2].trim())}</h${level}>`);
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(trimmed)) {
      flushPara();
      flushQuote();
      out.push("<hr>");
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushPara();
      closeLists();
      if (!quoteBuf) quoteBuf = [];
      quoteBuf.push(trimmed.replace(/^>\s?/, ""));
      continue;
    }
    flushQuote();

    const ul = line.match(/^(\s*)[-*]\s+(.*)$/);
    const ol = line.match(/^(\s*)\d+\.\s+(.*)$/);
    if (ul || ol) {
      flushPara();
      const indent = (ul || ol)[1].length;
      const type = ul ? "ul" : "ol";
      const top = listStack[listStack.length - 1];
      if (!top || indent < top.indent) {
        closeLists();
        out.push(`<${type}>`);
        listStack.push({ type, indent });
      } else if (type !== top.type) {
        out.push(`</${top.type}>`);
        out.push(`<${type}>`);
        listStack.push({ type, indent });
      }
      out.push(`<li>${inlineMd(ul ? ul[2] : ol[2])}</li>`);
      continue;
    }
    closeLists();

    para.push(trimmed);
  }

  flushPara();
  flushQuote();
  closeLists();
  if (mathBuf !== null) out.push(`<div class="material-math">${mathBuf.join("\n")}</div>`);
  return out.join("\n");
}

// --- widok ---------------------------------------------------------------

let currentMaterial = null;
let currentTab = "theory";
let currentGroup = "all";
let taskQuery = "";

export function initMaterialy(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="material-card">
      <div class="material-loading" id="material-loading" style="display:none;">
        <i data-lucide="loader"></i> Wczytywanie…
      </div>
      <div id="material-content"></div>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();
}

function setLoading(on) {
  const el = document.getElementById("material-loading");
  if (el) el.style.display = on ? "flex" : "none";
}

function contentEl() {
  return document.getElementById("material-content");
}

function renderTheory() {
  const content = contentEl();
  content.innerHTML = `
    <div class="material-theory-list">
      ${currentMaterial.theory.map((card) => `
        <div class="formula-item-card material-theory-card">
          <div class="formula-card-top">
            <div class="formula-card-title">${inlineMd(card.title)}</div>
          </div>
          <div class="material-body">${mdToHtml(card.md)}</div>
        </div>
      `).join("")}
    </div>
  `;
  window.renderMath?.(content);
}

function taskCard(t, idx) {
  const groupLabel = GROUP_LABELS[t.group] || t.group;
  return `
    <div class="task-card-item" data-task-idx="${idx}">
      <div class="task-card-top">
        <div class="task-badges">
          <span class="badge-tag badge-id">Zadanie ${escapeHtml(t.id)}</span>
          <span class="badge-tag badge-basic">${groupLabel}</span>
          ${t.flaggedR ? '<span class="badge-tag badge-extended">R</span>' : ""}
        </div>
      </div>
      <div class="task-question-box"><div class="question-text">${mdToHtml(t.question)}</div></div>
      <div class="task-actions-row">
        ${t.answer ? `
          <button class="btn-toggle-hint" data-toggle="answer">
            <i data-lucide="lightbulb"></i> Odpowiedź
          </button>` : ""}
        ${t.solution ? `
          <button class="btn-toggle-sol" data-toggle="solution">
            <i data-lucide="file-check"></i> Rozwiązanie
          </button>` : ""}
      </div>
      ${t.answer ? `
        <div class="task-solution-box" data-box="answer" style="display:none;">
          <div class="sol-header"><strong>Odpowiedź:</strong></div>
          ${mdToHtml(t.answer)}
        </div>` : ""}
      ${t.solution ? `
        <div class="task-solution-box" data-box="solution" style="display:none;">
          <div class="sol-header"><strong>Rozwiązanie krok po kroku:</strong></div>
          ${mdToHtml(t.solution)}
        </div>` : ""}
    </div>
  `;
}

function filteredTasks() {
  const q = taskQuery.toLowerCase().trim();
  return currentMaterial.tasks.filter((t) => {
    if (currentGroup !== "all" && t.group !== currentGroup) return false;
    if (q === "") return true;
    const plain = (t.id + " " + t.question).replace(/[$\\{}]/g, "").toLowerCase();
    return plain.includes(q);
  });
}

function renderTaskList() {
  const content = contentEl();
  const tasks = currentMaterial.tasks;
  const groups = [...new Set(tasks.map((t) => t.group))];
  const filtered = filteredTasks();

  const count = filtered.length === tasks.length
    ? `Wszystkie ${tasks.length} zadań`
    : `Wyświetlanie: ${filtered.length} z ${tasks.length} zadań`;

  content.innerHTML = `
    <div class="material-toolbar">
      <div class="search-box">
        <i data-lucide="search"></i>
        <input type="text" id="material-task-search" placeholder="Szukaj zadania (np. 2.5, 251, prosta)..." value="${escapeHtml(taskQuery)}" />
      </div>
      <div class="quad-filter-group" id="material-group-filters">
        <button class="filter-pill ${currentGroup === "all" ? "active" : ""}" data-group="all">Wszystkie</button>
        ${groups.map((g) => `
          <button class="filter-pill ${currentGroup === g ? "active" : ""}" data-group="${g}">${GROUP_LABELS[g] || g}</button>
        `).join("")}
      </div>
      <div class="results-info"><span>${count}</span></div>
    </div>
    <div class="tasks-list" id="material-task-list">
      ${filtered.map((t, i) => taskCard(t, i)).join("") || `
        <div class="task-card-item"><p class="material-nomatch">Brak zadań dla wybranych filtrów.</p></div>
      `}
    </div>
  `;
  window.renderMath?.(content);
  if (window.lucide) window.lucide.createIcons();

  const list = document.getElementById("material-task-list");
  list.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-toggle]");
    if (!btn) return;
    const card = btn.closest(".task-card-item");
    const box = card?.querySelector(`[data-box="${btn.dataset.toggle}"]`);
    if (!box) return;
    const isHidden = box.style.display === "none";
    box.style.display = isHidden ? "block" : "none";
    btn.classList.toggle("active", isHidden);
    if (isHidden && !box.dataset.rendered) {
      box.dataset.rendered = "1";
      window.renderMath?.(box);
    }
  });

  const search = document.getElementById("material-task-search");
  search.addEventListener("input", () => {
    taskQuery = search.value;
    renderTaskList();
    const fresh = document.getElementById("material-task-search");
    fresh.focus();
    fresh.setSelectionRange(fresh.value.length, fresh.value.length);
  });

  document.getElementById("material-group-filters").addEventListener("click", (e) => {
    const pill = e.target.closest("[data-group]");
    if (!pill) return;
    currentGroup = pill.dataset.group;
    renderTaskList();
  });
}

function renderTab() {
  if (!currentMaterial) return;
  if (currentTab === "tasks" && currentMaterial.tasks.length) {
    renderTaskList();
  } else {
    renderTheory();
  }
}

// loader: async () => MATERIAL {theory, tasks}; defaultTab: "theory" | "tasks"
export async function showMaterial(loader, defaultTab) {
  const content = contentEl();
  setLoading(true);
  if (content) content.innerHTML = "";

  try {
    currentMaterial = await loader();
    currentTab = defaultTab || (currentMaterial.theory.length ? "theory" : "tasks");
    currentGroup = "all";
    taskQuery = "";
    setLoading(false);
    renderTab();
  } catch (err) {
    setLoading(false);
    if (content) {
      content.innerHTML = `
        <div class="material-error">
          <p>Nie udało się wczytać materiału (${err.message}).</p>
          <button class="action-btn" onclick="location.reload()">Spróbuj ponownie</button>
        </div>
      `;
    }
  }
}

// Przełączenie zakładki z dolnej nawigacji działu
export function materialShowTab(tab) {
  currentTab = tab;
  renderTab();
}
