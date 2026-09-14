// js/app.js - Główny kontroler aplikacji Trygonometria

import { MODULES as MATERIAL_MODULES } from "./data/materials-manifest.js";
import { initHub } from "./modules/hub.js";
import { initMaterialy, showMaterial, materialShowTab } from "./modules/materialy.js";
import { initDzialTrainer } from "./modules/dzialTrainer.js";
import { initUnitCircle } from "./modules/unitCircle.js";
import { initTableViewer } from "./modules/tableViewer.js";
import { initFormulaVerifier } from "./modules/formulaVerifier.js";
import { initTaskViewer } from "./modules/taskViewer.js";
import { initTrainer } from "./modules/trainer.js";
import { initCalculators } from "./modules/calculators.js";

// Globalny pomocnik renderowania matematyki KaTeX
window.renderMath = function(targetElement = document.body) {
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(targetElement, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false }
        ],
        throwOnError: false
      });
    } catch (err) {
      console.warn("KaTeX render error:", err);
    }
  }
};

// Globalny system powiadomień Toast
window.showToast = function(message, duration = 2200) {
  const toast = document.getElementById("toast-container");
  if (!toast) return;

  toast.textContent = message;
  toast.style.display = "block";

  if (window._toastTimeout) clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.style.display = "none";
  }, duration);
};

document.addEventListener("DOMContentLoaded", () => {
  // 0. Aplikacja startuje w menu działów (hub)
  document.body.classList.add("in-hub");

  // 1. Inicjalizacja motywu (Dark / Light)
  initTheme();

  // 2. Inicjalizacja modułów aplikacji w ich kontenerach
  initHub("view-hub");
  initMaterialy("view-materialy");
  initUnitCircle("view-circle");
  initTableViewer("view-table");
  initFormulaVerifier("view-formulas");
  initTaskViewer("view-tasks");
  initTrainer("view-trainer");
  initCalculators("view-calculators");
  initDzialTrainer(
    "view-dzial-trainer",
    "geometria-analityczna",
    async () => (await import(DZIAL_MATERIALS["geometria-analityczna"].module)).default
  );

  // 3. Konfiguracja powrotu do menu (dolna nawigacja renderuje się per dział
  //    w openDzial — wzorzec Trygonometrii)
  setupHubBack();

  // 4. Inicjalizacja ikon Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 5. Pierwsze renderowanie formuł LaTeX
  setTimeout(() => {
    window.renderMath(document.body);
  }, 100);

  // 6. Rejestracja Service Workera dla wsparcia offline / PWA
  if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(err => {
      console.log("ServiceWorker registration skipped or failed:", err);
    });
  }
});

// Pierwszy widok dla danego działu (dla przyszłych działów: dodaj wpis + moduł)
const DZIAL_START_VIEW = {
  trygonometria: "view-circle",
  "geometria-analityczna": "view-materialy"
};

const DZIAL_TITLES = {
  trygonometria: "Trygonometria",
  "geometria-analityczna": "Geometria analityczna"
};

// Materiały (pełne zestawienia) dostępne dla działów — moduły z treścią generuje
// `npm run build:materials`; ścieżki wersjonowane (?v=...) gwarantują świeże dane
const DZIAL_MATERIALS = {
  trygonometria: { module: MATERIAL_MODULES["trygonometria"] },
  "geometria-analityczna": { module: MATERIAL_MODULES["geometria-analityczna"] }
};

// Zakładki dolnej nawigacji per dział — wzorzec Trygonometrii:
// każdy dział dzieli się na pod-strony (teoria / wzory / zadania / trener…).
// Tab `.view` → widok natywny; tab `.sec` → sekcja materiału (materialJump);
// tab `.soon` → placeholder z toastem.
const TRYGO_NAV = [
  { label: "Okrąg", icon: "circle-dot", view: "view-circle" },
  { label: "Tabela 360°", icon: "table", view: "view-table" },
  { label: "Wzory", icon: "book-open", view: "view-formulas" },
  { label: "Teoria", icon: "graduation-cap", mat: "trygonometria", tab: "theory" },
  { label: "Zadania", icon: "list-checks", view: "view-tasks" },
  { label: "Trener", icon: "flame", view: "view-trainer" },
  { label: "Kalkulator", icon: "calculator", view: "view-calculators" }
];

const DZIAL_NAV = {
  trygonometria: TRYGO_NAV,
  "geometria-analityczna": [
    { label: "Teoria i wzory", icon: "book-open", tab: "theory" },
    { label: "Zadania", icon: "graduation-cap", tab: "tasks" },
    { label: "Trener", icon: "flame", view: "view-dzial-trainer" }
  ]
};

// Aktywny widok — potrzebny do powrotu po obejrzeniu materiału
let activeViewId = "view-hub";

function activateView(viewId) {
  activeViewId = viewId;
  document.querySelectorAll("#bottom-nav .nav-item").forEach(n => {
    n.classList.toggle("active", n.getAttribute("data-target") === viewId);
  });
  document.querySelectorAll(".view-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === viewId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (window.lucide) window.lucide.createIcons();
  const activePanel = document.getElementById(viewId);
  if (activePanel) window.renderMath(activePanel);
  window.dispatchEvent(new Event("resize"));
}

function setHeaderTitle(text) {
  const el = document.getElementById("header-title-text");
  if (el) el.textContent = text;
}

// Dolna nawigacja renderowana per dział (wzorzec Trygonometrii)
function renderBottomNav(dzialId, activeIdx = 0) {
  const nav = document.getElementById("bottom-nav");
  const tabs = DZIAL_NAV[dzialId] || [];
  nav.innerHTML = tabs.map((t, i) => `
    <button class="nav-item ${i === activeIdx ? "active" : ""}" data-nav-idx="${i}">
      <i data-lucide="${t.icon}"></i>
      <span>${t.label}</span>
    </button>
  `).join("");
  if (window.lucide) window.lucide.createIcons();

  nav.querySelectorAll("[data-nav-idx]").forEach(btn => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.navIdx);
      const t = tabs[i];
      if (!t) return;
      if (t.soon) {
        window.showToast?.(`„${t.label}” dla tego działu będzie dostępny wkrótce`);
        return;
      }
      markNav(i);
      if (t.view) {
        document.body.classList.remove("in-material");
        activateView(t.view);
      } else if (t.mat) {
        // Zakładka otwierająca materiał innego niż bieżący kontekst (np. Teoria w trig)
        const info = DZIAL_MATERIALS[t.mat];
        if (info) {
          document.body.classList.add("in-material");
          activateView("view-materialy");
          showMaterial(async () => (await import(info.module)).default, t.tab || "theory", t.mat);
        }
      } else if (t.tab) {
        document.body.classList.add("in-material");
        activateView("view-materialy");
        materialShowTab(t.tab);
      }
    });
  });
}

function markNav(idx) {
  document.querySelectorAll("#bottom-nav .nav-item").forEach((b, i) => {
    b.classList.toggle("active", i === idx);
  });
}

// Wejście do działu (z wpisaniem stanu do historii — systemowy "wstecz" wraca do menu)
function openDzial(id, push = true) {
  document.body.classList.remove("in-hub");

  // Działy oparte o materiały (teoria + zadania) — własne zakładki w nawigacji
  const info = DZIAL_MATERIALS[id];
  if (info && DZIAL_START_VIEW[id] === "view-materialy") {
    document.body.classList.add("in-material");
    renderBottomNav(id, 0);
    activateView("view-materialy");
    setHeaderTitle(`${DZIAL_TITLES[id] || id} — zestawienie`);
    if (push) history.pushState({ dzial: id }, "");
    showMaterial(async () => (await import(info.module)).default, "theory", id);
    return;
  }

  document.body.classList.remove("in-material");
  const startView = DZIAL_START_VIEW[id] || "view-circle";
  renderBottomNav(id, (DZIAL_NAV[id] || []).findIndex(t => t.view === startView));
  activateView(startView);
  setHeaderTitle(DZIAL_TITLES[id] || id);
  if (push) history.pushState({ dzial: id }, "");
}

// Widok materiału działu (np. pełne zestawienie otwierane z widoku Zadania)
function openMaterial(dzialId, push = true) {
  const info = DZIAL_MATERIALS[dzialId];
  if (!info) return;
  const returnTo = activeViewId;
  document.body.classList.remove("in-hub");
  document.body.classList.add("in-material");
  markNav((DZIAL_NAV[dzialId] || []).findIndex(t => t.view === returnTo));
  activateView("view-materialy");
  setHeaderTitle(`${DZIAL_TITLES[dzialId] || dzialId} — zestawienie`);
  if (push) history.pushState({ dzial: dzialId, material: true, returnTo, tab: "tasks" }, "");
  showMaterial(async () => (await import(info.module)).default, "tasks", dzialId);
}

// Powrót do menu działów
function showHub(push = true) {
  document.body.classList.add("in-hub");
  document.body.classList.remove("in-material");
  activateView("view-hub");
  setHeaderTitle("Matematyka");
  if (push) history.pushState({ dzial: null }, "");
}

window.openDzial = openDzial;
window.openMaterial = openMaterial;
window.showHub = showHub;

// Przycisk "wstecz" w nagłówku + systemowy przycisk wstecz Androida (popstate)
function setupHubBack() {
  document.getElementById("btn-back-hub")?.addEventListener("click", () => {
    if (document.body.classList.contains("in-hub")) return;
    if (history.state && history.state.dzial) {
      history.back();
    } else {
      showHub(true);
    }
  });

  window.addEventListener("popstate", (e) => {
    const s = e.state || {};
    if (s.material && s.dzial && DZIAL_MATERIALS[s.dzial]) {
      document.body.classList.remove("in-hub");
      document.body.classList.add("in-material");
      markNav((DZIAL_NAV[s.dzial] || []).findIndex(t => t.view === s.returnTo));
      activateView("view-materialy");
      setHeaderTitle(`${DZIAL_TITLES[s.dzial] || s.dzial} — zestawienie`);
      const info = DZIAL_MATERIALS[s.dzial];
      showMaterial(async () => (await import(info.module)).default, s.tab || "theory", s.dzial);
    } else if (s.returnTo && s.dzial) {
      // Powrót z materiału do widoku, z którego go otwarto
      document.body.classList.remove("in-material");
      activateView(s.returnTo);
      setHeaderTitle(DZIAL_TITLES[s.dzial] || s.dzial);
    } else if (s.dzial) {
      openDzial(s.dzial, false);
    } else {
      showHub(false);
    }
  });
}

// Obsługa przełączania motywu (Dark / Light)
function initTheme() {
  const toggleBtn = document.getElementById("btn-toggle-theme");
  const themeIcon = document.getElementById("theme-icon");
  const savedTheme = localStorage.getItem("trig_theme") || "dark";

  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem("trig_theme", nextTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeIcon) {
      themeIcon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
      if (window.lucide) window.lucide.createIcons();
    }
    // Moduły z canvas/SVG słuchają tego zdarzenia i przemalowują rysunki
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
  }
}
