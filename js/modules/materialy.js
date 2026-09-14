// materialy.js - Widoki materiałów działu w STYLU Trygonometrii:
//  • tryb "theory" — akordeon tematów z maskotką i postępem czytania
//  • tryb "tasks"  — karty zadań z wyszukiwarką, filtrami, licznikami
//    i dopaminą: ✓ Zrobione → konfetti + chibi + dźwięk (wzorzec trenera)
// Dane: js/data/material-*.js generowane przez `npm run build:materials`.

const GROUP_LABELS = {
  intro: "Wprowadzające",
  m202250: "Maturalne 202–250",
  m251296: "Maturalne 251–296",
  m465505: "Maturalne 465–505",
  m506546: "Maturalne 506–546"
};

const HAPPY_EMOTES = ["happy_wave.png", "wink_heart.png", "wink_star.png", "magic_star.png", "smug_thumbsup.png", "devil_cheer.png", "devil_jumping.png"];
const HAPPY_CAPTIONS = ["Świetnie!", "Yaaay!", "Kolejny zdobyty!", "Nieźle, mistrzu!", "Tak trzymaj! ⭐", "Czysta perfekcja!"];
const CHEER_EMOTES = ["devil_cheer.png", "broom_fly.png", "magic_star.png", "sparkle_pray.png"];
const ENCOURAGEMENTS = [
  "Powtórka to podstawa!",
  "Teoria = pewne punkty!",
  "Krok po kroku do mistrzostwa!",
  "Wzory lubią tych, którzy je czytają!",
  "Czytasz — rośniesz w siłę! 💪"
];
const MASCOT_EMOTES = ["happy_wave.png", "excited_peek.png", "blep.png", "smug.png", "scheming.png"];

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

// Minimalny renderer markdown block-level dla fragmentów zadania/karty teorii.
// Obsługuje: nagłówki (degradowane o poziom), listy z prawdziwym zagnieżdżeniem
// (wg wcięcia), podtytuły w rodzaju *Analitycznie:* jako etykiety sekcji,
// cytaty, hr, akapity i matematykę $$...$$.
function mdToHtml(md) {
  const out = [];
  const listStack = []; // {type, indent}
  let para = [];
  let mathBuf = null;
  let quoteBuf = null;

  const closeAllLists = () => {
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
  const flushInline = () => {
    flushPara();
    flushQuote();
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
      flushInline();
      if (trimmed.slice(2).includes("$$")) {
        out.push(`<div class="material-math">${trimmed}</div>`);
      } else {
        mathBuf = [trimmed];
      }
      continue;
    }

    if (trimmed === "") {
      flushInline();
      closeAllLists();
      continue;
    }

    const h = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      flushInline();
      closeAllLists();
      const level = Math.min(6, h[1].length + 1);
      out.push(`<h${level}>${inlineMd(h[2].trim())}</h${level}>`);
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(trimmed)) {
      flushInline();
      closeAllLists();
      out.push("<hr>");
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushPara();
      closeAllLists();
      if (!quoteBuf) quoteBuf = [];
      quoteBuf.push(trimmed.replace(/^>\s?/, ""));
      continue;
    }
    flushQuote();

    // Podtytuł w rodzaju *Analitycznie:* / **Geometrycznie:** — etykieta sekcji
    const sub = trimmed.match(/^\*{1,2}([^*_][^*]{0,60})\*{1,2}:?\s*$/);
    if (sub) {
      flushInline();
      closeAllLists();
      out.push(`<div class="material-sublabel">${escapeHtml(sub[1].trim())}</div>`);
      continue;
    }

    const ul = line.match(/^(\s*)[-*]\s+(.*)$/);
    const ol = line.match(/^(\s*)\d+\.\s+(.*)$/);
    if (ul || ol) {
      flushPara();
      flushQuote();
      const indent = (ul || ol)[1].length;
      const type = ul ? "ul" : "ol";

      // Zamknij listy płytsze niż bieżący poziom
      while (listStack.length && indent < listStack[listStack.length - 1].indent) {
        out.push(`</${listStack.pop().type}>`);
      }
      const top = listStack[listStack.length - 1];
      if (!top) {
        out.push(`<${type}>`);
        listStack.push({ type, indent });
      } else if (indent > top.indent + 1) {
        // Prawdziwe zagnieżdżenie — lista wewnątrz ostatniego <li>
        out.push(`<${type}>`);
        listStack.push({ type, indent });
      } else if (top.type !== type) {
        out.push(`</${top.type}>`);
        out.push(`<${type}>`);
        listStack.push({ type, indent });
      }
      out.push(`<li>${inlineMd(ul ? ul[2] : ol[2])}</li>`);
      continue;
    }
    closeAllLists();

    para.push(trimmed);
  }

  flushInline();
  closeAllLists();
  if (mathBuf !== null) out.push(`<div class="material-math">${mathBuf.join("\n")}</div>`);
  return out.join("\n");
}

// --- stan ----------------------------------------------------------------

let currentMaterial = null;
let currentDzialId = "";
let currentTab = "theory";
let currentGroup = "all";
let taskQuery = "";
let progress = { theory: {}, tasks: {} };

function loadProgress(dzialId) {
  try {
    const raw = localStorage.getItem("trig_mat_" + dzialId);
    if (raw) {
      const p = JSON.parse(raw);
      return { theory: p.theory || {}, tasks: p.tasks || {} };
    }
  } catch (e) { /* świeży start */ }
  return { theory: {}, tasks: {} };
}

function saveProgress() {
  try {
    localStorage.setItem("trig_mat_" + currentDzialId, JSON.stringify(progress));
  } catch (e) { /* brak miejsca — ignorujemy */ }
}

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Reakcja chibi (wzorzec trenera): wyskakująca anime-dziewczyna + okrzyk
function chibiPop(img, caption) {
  const el = document.createElement("div");
  el.className = "mat-chibi-pop";
  el.innerHTML = `<img src="assets/emotes/${img}" alt=""><span>${caption}</span>`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1900);
}

function celebrateSmall() {
  window.launchConfetti?.();
  window.trainerSounds?.playCorrect();
  chibiPop(pick(HAPPY_EMOTES), pick(HAPPY_CAPTIONS));
}

function celebrateGroup(groupLabel) {
  window.launchConfetti?.();
  window.trainerSounds?.playLevelUp();
  chibiPop(pick(CHEER_EMOTES), "Grupa opanowana! ⭐");
  window.showToast?.(`🎉 ${groupLabel} — wszystko zrobione! Świetna robota!`, 3200);
}

// --- widok ---------------------------------------------------------------

export function initMaterialy(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="material-wrap">
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

// --- tryb: teoria (akordeon) ----------------------------------------------

function renderTheory() {
  const content = contentEl();
  const cards = currentMaterial.theory;
  const readCount = Object.keys(progress.theory).filter((k) => progress.theory[k]).length;
  const pct = cards.length ? Math.round((readCount / cards.length) * 100) : 0;

  content.innerHTML = `
    <div class="material-progress-banner">
      <img class="mat-mascot" src="assets/emotes/${pick(MASCOT_EMOTES)}" alt="">
      <div class="mat-progress-info">
        <div class="mat-encourage">${pick(ENCOURAGEMENTS)}</div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="mat-progress-text">Przeczytane tematy: ${readCount} z ${cards.length}</div>
      </div>
    </div>
    <div class="material-theory-list">
      ${cards.map((card, idx) => {
        const isRead = !!progress.theory[idx];
        const expanded = idx === 0;
        return `
          <div class="material-theory-card ${isRead ? "done" : ""}" data-theory-idx="${idx}">
            <button class="theory-toggle" aria-expanded="${expanded}">
              <span class="theory-check">${isRead ? "✓" : ""}</span>
              <span class="theory-title">${inlineMd(card.title)}</span>
              <i data-lucide="chevron-down" class="theory-chevron ${expanded ? "open" : ""}"></i>
            </button>
            <div class="theory-content" style="display:${expanded ? "block" : "none"};">
              <div class="material-body">${mdToHtml(card.md)}</div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();

  content.querySelectorAll(".theory-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cardEl = btn.closest(".material-theory-card");
      const body = cardEl.querySelector(".theory-content");
      const idx = Number(cardEl.dataset.theoryIdx);
      const opening = body.style.display === "none";
      body.style.display = opening ? "block" : "none";
      btn.querySelector(".theory-chevron")?.classList.toggle("open", opening);

      if (opening && !body.dataset.rendered) {
        body.dataset.rendered = "1";
        window.renderMath?.(body);
      }
      if (opening && !progress.theory[idx]) {
        progress.theory[idx] = true;
        cardEl.classList.add("done");
        btn.querySelector(".theory-check").textContent = "✓";
        saveProgress();
        refreshTheoryProgress();
        const all = currentMaterial.theory.length;
        if (Object.keys(progress.theory).filter((k) => progress.theory[k]).length >= all) {
          window.launchConfetti?.();
          window.trainerSounds?.playLevelUp();
          chibiPop(pick(CHEER_EMOTES), "Cała teoria przeczytana! 🎓");
          window.showToast?.("🎓 Cała teoria działu opanowana!", 3000);
        }
      }
    });
  });

  window.renderMath?.(content.querySelector(".material-theory-card .theory-content"));
}

function refreshTheoryProgress() {
  const cards = currentMaterial.theory;
  const readCount = Object.keys(progress.theory).filter((k) => progress.theory[k]).length;
  const pct = cards.length ? Math.round((readCount / cards.length) * 100) : 0;
  const banner = contentEl()?.querySelector(".material-progress-banner");
  if (!banner) return;
  banner.querySelector(".progress-fill").style.width = pct + "%";
  banner.querySelector(".mat-progress-text").textContent =
    `Przeczytane tematy: ${readCount} z ${cards.length}`;
}

// --- tryb: zadania ---------------------------------------------------------

function groupDoneCount(group) {
  return currentMaterial.tasks.filter((t) => t.group === group && progress.tasks[t.id]).length;
}

function taskCard(t) {
  const groupLabel = GROUP_LABELS[t.group] || t.group;
  const isDone = !!progress.tasks[t.id];
  return `
    <div class="task-card-item ${isDone ? "task-done" : ""}" data-task-id="${escapeHtml(t.id)}">
      <div class="task-card-top">
        <div class="task-badges">
          <span class="badge-tag badge-id">Zadanie ${escapeHtml(t.id)}</span>
          <span class="badge-tag badge-basic">${groupLabel}</span>
          ${t.flaggedR ? '<span class="badge-tag badge-extended">R</span>' : ""}
        </div>
        <button class="btn-toggle-done ${isDone ? "active" : ""}" data-done-id="${escapeHtml(t.id)}" aria-label="Oznacz jako zrobione">
          <i data-lucide="check"></i>
        </button>
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
    if (currentGroup === "todo" && progress.tasks[t.id]) return false;
    if (currentGroup !== "all" && currentGroup !== "todo" && t.group !== currentGroup) return false;
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
  const todoCount = tasks.filter((t) => !progress.tasks[t.id]).length;
  const doneTotal = tasks.length - todoCount;

  const count = filtered.length === tasks.length
    ? `Wszystkie ${tasks.length} zadań (zrobione: ${doneTotal})`
    : `Wyświetlanie: ${filtered.length} z ${tasks.length} zadań (zrobione: ${doneTotal})`;

  content.innerHTML = `
    <div class="material-toolbar">
      <div class="search-box">
        <i data-lucide="search"></i>
        <input type="text" id="material-task-search" placeholder="Szukaj zadania (np. 2.5, 251, prosta)..." value="${escapeHtml(taskQuery)}" />
      </div>
      <div class="quad-filter-group" id="material-group-filters">
        <button class="filter-pill ${currentGroup === "all" ? "active" : ""}" data-group="all">Wszystkie</button>
        <button class="filter-pill ${currentGroup === "todo" ? "active" : ""}" data-group="todo">Do zrobienia (${todoCount})</button>
        ${groups.map((g) => {
          const total = tasks.filter((t) => t.group === g).length;
          const done = groupDoneCount(g);
          return `<button class="filter-pill ${currentGroup === g ? "active" : ""}" data-group="${g}">${GROUP_LABELS[g] || g} ✓${done}/${total}</button>`;
        }).join("")}
      </div>
      <div class="results-info"><span>${count}</span></div>
    </div>
    <div class="tasks-list" id="material-task-list">
      ${filtered.map((t) => taskCard(t)).join("") || `
        <div class="task-card-item"><p class="material-nomatch">Brak zadań dla wybranych filtrów.</p></div>
      `}
    </div>
  `;
  window.renderMath?.(content);
  if (window.lucide) window.lucide.createIcons();

  const list = document.getElementById("material-task-list");
  list.addEventListener("click", (e) => {
    const doneBtn = e.target.closest("[data-done-id]");
    if (doneBtn) {
      toggleTaskDone(doneBtn.dataset.doneId, doneBtn);
      return;
    }
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

function toggleTaskDone(taskId, btn) {
  const wasDone = !!progress.tasks[taskId];
  progress.tasks[taskId] = !wasDone;
  if (!progress.tasks[taskId]) delete progress.tasks[taskId];
  saveProgress();

  if (!wasDone) {
    // Dopamina: konfetti + chibi + dźwięk; ukończenie grupy = wielka feta
    const task = currentMaterial.tasks.find((t) => t.id === taskId);
    const group = task?.group;
    const groupTasks = currentMaterial.tasks.filter((t) => t.group === group);
    const allDone = groupTasks.every((t) => progress.tasks[t.id]);
    if (allDone) {
      celebrateGroup(GROUP_LABELS[group] || group);
    } else {
      celebrateSmall();
    }
    const card = btn.closest(".task-card-item");
    card?.classList.add("task-done");
    btn.classList.add("active");
  }
  refreshTaskCounts();
}

function refreshTaskCounts() {
  const tasks = currentMaterial.tasks;
  const groups = [...new Set(tasks.map((t) => t.group))];
  const todoCount = tasks.filter((t) => !progress.tasks[t.id]).length;
  const doneTotal = tasks.length - todoCount;

  document.querySelectorAll("#material-group-filters .filter-pill").forEach((pill) => {
    const g = pill.dataset.group;
    if (g === "all") return;
    if (g === "todo") {
      pill.textContent = `Do zrobienia (${todoCount})`;
      return;
    }
    const total = tasks.filter((t) => t.group === g).length;
    pill.textContent = `${GROUP_LABELS[g] || g} ✓${groupDoneCount(g)}/${total}`;
  });

  const info = document.querySelector(".material-toolbar .results-info span");
  if (info) {
    const filtered = filteredTasks();
    info.textContent = filtered.length === tasks.length
      ? `Wszystkie ${tasks.length} zadań (zrobione: ${doneTotal})`
      : `Wyświetlanie: ${filtered.length} z ${tasks.length} zadań (zrobione: ${doneTotal})`;
  }
}

// --- przełączanie ----------------------------------------------------------

function renderTab() {
  if (!currentMaterial) return;
  if (currentTab === "tasks" && currentMaterial.tasks.length) {
    renderTaskList();
  } else {
    renderTheory();
  }
}

// loader: async () => MATERIAL {theory, tasks}
// defaultTab: "theory" | "tasks"; dzialId: klucz postępu (localStorage)
export async function showMaterial(loader, defaultTab, dzialId) {
  const content = contentEl();
  setLoading(true);
  if (content) content.innerHTML = "";

  try {
    currentMaterial = await loader();
    currentDzialId = dzialId || "";
    progress = loadProgress(currentDzialId);
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
