// js/app.js - Główny kontroler aplikacji Trygonometria

import { initHub } from "./modules/hub.js";
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
  initUnitCircle("view-circle");
  initTableViewer("view-table");
  initFormulaVerifier("view-formulas");
  initTaskViewer("view-tasks");
  initTrainer("view-trainer");
  initCalculators("view-calculators");

  // 3. Konfiguracja paska nawigacji dolnego i powrotu do menu
  setupNavigation();
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
  trygonometria: "view-circle"
};

const DZIAL_TITLES = {
  trygonometria: "Trygonometria"
};

function activateView(viewId) {
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

// Wejście do działu (z wpisaniem stanu do historii — systemowy "wstecz" wraca do menu)
function openDzial(id, push = true) {
  document.body.classList.remove("in-hub");
  activateView(DZIAL_START_VIEW[id] || "view-circle");
  setHeaderTitle(DZIAL_TITLES[id] || id);
  if (push) history.pushState({ dzial: id }, "");
}

// Powrót do menu działów
function showHub(push = true) {
  document.body.classList.add("in-hub");
  activateView("view-hub");
  setHeaderTitle("Matematyka");
  if (push) history.pushState({ dzial: null }, "");
}

window.openDzial = openDzial;
window.showHub = showHub;

// Obsługa zakładek i nawigacji dolnej
function setupNavigation() {
  const navItems = document.querySelectorAll("#bottom-nav .nav-item");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetViewId = item.getAttribute("data-target");
      if (!targetViewId) return;

      document.body.classList.remove("in-hub");
      activateView(targetViewId);
    });
  });
}

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
    const dzial = e.state && e.state.dzial;
    if (dzial) {
      openDzial(dzial, false);
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
