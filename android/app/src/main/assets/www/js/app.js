// js/app.js - Główny kontroler aplikacji Trygonometria

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
  // 1. Inicjalizacja motywu (Dark / Light)
  initTheme();

  // 2. Inicjalizacja modułów aplikacji w ich kontenerach
  initUnitCircle("view-circle");
  initTableViewer("view-table");
  initFormulaVerifier("view-formulas");
  initTaskViewer("view-tasks");
  initTrainer("view-trainer");
  initCalculators("view-calculators");

  // 3. Konfiguracja paska nawigacji dolnej
  setupNavigation();

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

// Obsługa zakładek i nawigacji dolnej
function setupNavigation() {
  const navItems = document.querySelectorAll("#bottom-nav .nav-item");
  const viewPanels = document.querySelectorAll(".view-panel");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetViewId = item.getAttribute("data-target");
      if (!targetViewId) return;

      // Aktywacja przycisku nawigacji
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");

      // Przełączenie widoku
      viewPanels.forEach(panel => {
        if (panel.id === targetViewId) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });

      // Płynny powrót na górę ekranu
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Odświeżenie ikon i matematyki w nowym widoku
      if (window.lucide) window.lucide.createIcons();
      const activePanel = document.getElementById(targetViewId);
      if (activePanel) window.renderMath(activePanel);

      // Jeżeli przełączono na okrąg, wyślij zdarzenie resize by dopasować canvas
      if (targetViewId === "view-circle") {
        window.dispatchEvent(new Event("resize"));
      }
    });
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
