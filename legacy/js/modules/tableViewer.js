// tableViewer.js - Przeglądarka tabeli wartości trygonometrycznych (0-360)
import { SPECIAL_ANGLES, generateFullTable } from "../data/angles.js";

export function initTableViewer(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const fullTableData = generateFullTable();

  container.innerHTML = `
    <div class="table-card">
      <div class="table-nav-header">
        <div class="table-tabs">
          <button class="tab-btn active" id="tab-special-angles">
            <i data-lucide="star"></i> Dokładne (CKE)
          </button>
          <button class="tab-btn" id="tab-full-angles">
            <i data-lucide="list"></i> Co 1° (0-360°)
          </button>
        </div>
      </div>

      <!-- Filtry i szukajka -->
      <div class="table-toolbar">
        <div class="search-box">
          <i data-lucide="search"></i>
          <input type="text" id="table-search-input" placeholder="Szukaj kąta (np. 45, 120, π/3, I)..." />
        </div>

        <div class="quad-filter-group">
          <button class="filter-pill active" data-quad="all">Wszystkie</button>
          <button class="filter-pill" data-quad="I">I ćw. (0-90°)</button>
          <button class="filter-pill" data-quad="II">II ćw. (90-180°)</button>
          <button class="filter-pill" data-quad="III">III ćw. (180-270°)</button>
          <button class="filter-pill" data-quad="IV">IV ćw. (270-360°)</button>
        </div>
      </div>

      <!-- Licznik wyników -->
      <div class="results-info">
        <span id="table-row-count">Wyświetlanie: 25 kątów charakterystycznych</span>
        <span class="tip-text"><i data-lucide="info"></i> Dotknij wiersza, aby skopiować wartości</span>
      </div>

      <!-- Kontener tabeli -->
      <div class="table-responsive-wrapper">
        <table class="trig-data-table" id="trig-main-table">
          <thead>
            <tr>
              <th>Kąt (°)</th>
              <th>Radiany (rad)</th>
              <th>Ćwiartka</th>
              <th>sin α</th>
              <th>cos α</th>
              <th>tg α</th>
              <th>ctg α</th>
            </tr>
          </thead>
          <tbody id="trig-table-body">
            <!-- Dynamicznie generowane wiersze -->
          </tbody>
        </table>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  let currentTab = "special"; // "special" | "full"
  let activeQuadFilter = "all";
  let searchTerm = "";

  const tableBody = document.getElementById("trig-table-body");
  const rowCount = document.getElementById("table-row-count");
  const searchInput = document.getElementById("table-search-input");
  const tabSpecial = document.getElementById("tab-special-angles");
  const tabFull = document.getElementById("tab-full-angles");

  function latexToPlain(latex) {
    if (!latex) return "";
    return latex
      .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, "$1/$2")
      .replace(/\\sqrt\{([^}]*)\}/g, "√($1)")
      .replace(/\\pi/g, "π")
      .replace(/\\text\{([^}]*)\}/g, "$1")
      .replace(/\\cdot/g, "·")
      .replace(/\\[a-z]+/g, "")
      .replace(/[{}]/g, "");
  }

  // Normalizacja frazy użytkownika: "pi/3" → "π/3", "sqrt2" → "√(2)"-friendly
  function normalizeSearchTerm(raw) {
    return raw
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/pi/g, "π")
      .replace(/sqrt/g, "√");
  }

  function renderRows() {
    const rawData = currentTab === "special" ? SPECIAL_ANGLES : fullTableData;
    const useKatex = currentTab === "special";
    const term = normalizeSearchTerm(searchTerm);

    const filtered = rawData.filter(item => {
      // Filtr ćwiartek
      if (activeQuadFilter !== "all") {
        if (activeQuadFilter === "I" && item.quadrant !== "I") return false;
        if (activeQuadFilter === "II" && item.quadrant !== "II") return false;
        if (activeQuadFilter === "III" && item.quadrant !== "III") return false;
        if (activeQuadFilter === "IV" && item.quadrant !== "IV") return false;
      }

      // Szukajka (deg, radiany w zapisie π, wartość dziesiętna, ćwiartka)
      if (term !== "") {
        const matchesDeg = String(item.deg).includes(term);
        const matchesRadPlain = latexToPlain(item.radLatex || "").toLowerCase().includes(term);
        const matchesRadLatex = (item.radLatex || "").toLowerCase().includes(term);
        const matchesDec = String(item.radDecimal).includes(term);
        const matchesQuad = item.quadrant.toLowerCase().includes(term);
        return matchesDeg || matchesRadPlain || matchesRadLatex || matchesDec || matchesQuad;
      }

      return true;
    });

    rowCount.textContent = `Wyświetlanie: ${filtered.length} kątów (${currentTab === "special" ? "charakterystyczne z pierwiastkami" : "pełna tabela 0°-360°"})`;

    if (filtered.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="table-empty-cell">
            Brak wyników dla podanych filtrów "${searchTerm}".
          </td>
        </tr>
      `;
      return;
    }

    const quadClass = q => (
      q === "I" ? "q-I" :
      q === "II" ? "q-II" :
      q === "III" ? "q-III" :
      q === "IV" ? "q-IV" : "q-axis"
    );

    tableBody.innerHTML = filtered.map(row => {
      // Zakładka "Co 1°" renderuje czyste liczby (bez KaTeX) — 361 wierszy
      // natychmiast; KaTeX zostaje dla kątów charakterystycznych.
      const radCell = useKatex
        ? `<div class="math-expr" data-latex="${row.radLatex}"></div>
           <span class="sub-dec">${row.radDecimal}</span>`
        : `<span class="cell-plain">${latexToPlain(row.radLatex)}</span>
           <span class="sub-dec">${row.radDecimal}</span>`;

      const valCell = (plain, latex, decimal) => useKatex
        ? `<div class="math-expr" data-latex="${latex}"></div>
           <span class="sub-dec">${decimal !== null && decimal !== undefined ? decimal : ''}</span>`
        : `<span class="cell-plain">${plain !== null && plain !== undefined ? plain : '—'}</span>`;

      return `
        <tr class="table-data-row ${row.isSpecial ? 'special-row' : ''}" data-deg="${row.deg}">
          <td class="cell-deg">${row.deg}°</td>
          <td class="cell-rad">${radCell}</td>
          <td class="cell-quad">
            <span class="q-badge ${quadClass(row.quadrant)}">${row.quadrant}</span>
          </td>
          <td class="cell-val sin-col">${valCell(row.sinVal, row.sinLatex, row.sinVal)}</td>
          <td class="cell-val cos-col">${valCell(row.cosVal, row.cosLatex, row.cosVal)}</td>
          <td class="cell-val tg-col">${valCell(row.tgVal, row.tgLatex, row.tgVal)}</td>
          <td class="cell-val ctg-col">${valCell(row.ctgVal, row.ctgLatex, row.ctgVal)}</td>
        </tr>
      `;
    }).join("");

    // Render KaTeX tylko dla kątów charakterystycznych
    if (useKatex && window.katex) {
      tableBody.querySelectorAll(".math-expr").forEach(el => {
        const latex = el.dataset.latex;
        if (latex) {
          try {
            window.katex.render(latex, el, { throwOnError: false });
          } catch (e) {
            el.textContent = latex;
          }
        }
      });
    }

    // Dodaj akcję kopiowania po kliknięciu wiersza
    tableBody.querySelectorAll(".table-data-row").forEach(row => {
      row.addEventListener("click", () => {
        const deg = row.dataset.deg;
        const item = fullTableData.find(x => x.deg === Number(deg));
        if (item) {
          const text = `${item.deg}° | ${item.radDecimal} rad | sin: ${item.sinVal} | cos: ${item.cosVal} | tg: ${item.tgVal ?? 'brak'} | ctg: ${item.ctgVal ?? 'brak'}`;
          navigator.clipboard?.writeText(text);
          window.showToast?.(`Skopiowano dane dla kąta ${item.deg}°!`);
        }
      });
    });
  }

  // Przełączanie zakładek
  tabSpecial.addEventListener("click", () => {
    currentTab = "special";
    tabSpecial.classList.add("active");
    tabFull.classList.remove("active");
    renderRows();
  });

  tabFull.addEventListener("click", () => {
    currentTab = "full";
    tabFull.classList.add("active");
    tabSpecial.classList.remove("active");
    renderRows();
  });

  // Filtrowanie ćwiartek
  container.querySelectorAll(".filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeQuadFilter = btn.dataset.quad;
      renderRows();
    });
  });

  // Wyszukiwarka
  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderRows();
  });

  // Pierwsze renderowanie
  renderRows();
}
