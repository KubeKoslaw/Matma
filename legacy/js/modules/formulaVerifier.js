// formulaVerifier.js - Kompendium wzorów, weryfikator tożsamości i kalkulator redukcyjny
import { FORMULAS, FORMULA_CATEGORIES, explainReduction } from "../data/formulas.js";

export function initFormulaVerifier(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="formulas-card">
      <!-- Pasek zakładek modułu wzorów -->
      <div class="module-subnav">
        <button class="subnav-btn active" id="btn-subnav-catalog">
          <i data-lucide="book-open"></i> Baza Wzorów
        </button>
        <button class="subnav-btn" id="btn-subnav-verifier">
          <i data-lucide="check-check"></i> Tożsamości (L=P)
        </button>
        <button class="subnav-btn" id="btn-subnav-reduction">
          <i data-lucide="calculator"></i> Redukcja Kąta
        </button>
      </div>

      <!-- WIDOK 1: KATALOG WZORÓW -->
      <div id="view-catalog" class="subview-panel active">
        <div class="formula-search-bar">
          <div class="search-box">
            <i data-lucide="search"></i>
            <input type="text" id="formula-search-input" placeholder="Szukaj wzoru (np. jedynka, podwojony, suma, redukcyjne)..." />
          </div>
        </div>

        <div class="formula-cat-chips" id="formula-category-chips">
          ${FORMULA_CATEGORIES.map(cat => `
            <button class="cat-chip ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}">
              ${cat.name}
            </button>
          `).join("")}
        </div>

        <div class="formulas-list" id="formulas-list-container">
          <!-- Karty wzorów renderowane dynamicznie -->
        </div>
      </div>

      <!-- WIDOK 2: SPRAWDZARKA TOŻSAMOŚCI (L = P) -->
      <div id="view-verifier" class="subview-panel">
        <div class="verifier-box">
          <div class="verifier-header">
            <h3>Wybierz tożsamość do numerycznego sprawdzenia:</h3>
            <select id="verifier-formula-select" class="form-select">
              <!-- Opcje tożsamości -->
            </select>
          </div>

          <div class="verifier-inputs">
            <div class="input-control">
              <label>Kąt α: <strong id="lbl-val-alpha" class="text-blue-400">30°</strong> (w radianach: <span id="lbl-rad-alpha">π/6</span>)</label>
              <input type="range" id="input-angle-alpha" min="0" max="360" value="30" step="1" class="angle-slider" />
            </div>

            <div class="input-control" id="ctrl-beta-group" style="display: none;">
              <label>Kąt β: <strong id="lbl-val-beta" class="text-purple-400">45°</strong> (w radianach: <span id="lbl-rad-beta">π/4</span>)</label>
              <input type="range" id="input-angle-beta" min="0" max="360" value="45" step="1" class="angle-slider" />
            </div>
          </div>

          <div class="verifier-results-card">
            <div class="sides-comparison">
              <div class="side-box side-lhs">
                <div class="side-tag">Lewa Strona (L)</div>
                <div class="side-formula" id="math-lhs-formula"></div>
                <div class="side-value" id="val-lhs-eval">1.00000</div>
              </div>

              <div class="equality-sign">
                <span class="sign-equal" id="status-equal-icon">＝</span>
              </div>

              <div class="side-box side-rhs">
                <div class="side-tag">Prawa Strona (P)</div>
                <div class="side-formula" id="math-rhs-formula"></div>
                <div class="side-value" id="val-rhs-eval">1.00000</div>
              </div>
            </div>

            <div class="verification-status status-match" id="verification-status-banner">
              <i data-lucide="check-circle-2"></i>
              <span>Tożsamość zachodzi! Lewa strona jest równa prawej: <strong>L = P</strong></span>
            </div>
          </div>
        </div>
      </div>

      <!-- WIDOK 3: KALKULATOR WZORÓW REDUKCYJNYCH -->
      <div id="view-reduction" class="subview-panel">
        <div class="reduction-box">
          <div class="reduction-prompt">
            Wprowadź dowolną funkcję oraz kąt, aby otrzymać natychmiastowe wyjaśnienie redukcji krok po kroku:
          </div>

          <div class="reduction-form-row">
            <div class="select-wrapper">
              <label>Funkcja:</label>
              <select id="reduction-func-select" class="form-select">
                <option value="sin">sinus (sin)</option>
                <option value="cos">cosinus (cos)</option>
                <option value="tg">tangens (tg)</option>
                <option value="ctg">cotangens (ctg)</option>
              </select>
            </div>

            <div class="input-wrapper">
              <label>Kąt w stopniach (°):</label>
              <input type="number" id="reduction-angle-input" value="150" class="form-input" />
            </div>

            <button id="btn-run-reduction" class="action-btn">
              <i data-lucide="play"></i> Oblicz redukcję
            </button>
          </div>

          <div class="reduction-steps-card" id="reduction-steps-result">
            <!-- Wynik generowany dynamicznie -->
          </div>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  // Nawigacja między zakładkami wewnętrznymi
  const subnavBtns = container.querySelectorAll(".subnav-btn");
  const subviews = container.querySelectorAll(".subview-panel");

  function switchSubview(targetViewId, targetBtn) {
    subnavBtns.forEach(b => b.classList.remove("active"));
    subviews.forEach(v => v.classList.remove("active"));

    targetBtn.classList.add("active");
    const view = document.getElementById(targetViewId);
    if (view) view.classList.add("active");
  }

  document.getElementById("btn-subnav-catalog").addEventListener("click", (e) => switchSubview("view-catalog", e.currentTarget));
  document.getElementById("btn-subnav-verifier").addEventListener("click", (e) => switchSubview("view-verifier", e.currentTarget));
  document.getElementById("btn-subnav-reduction").addEventListener("click", (e) => switchSubview("view-reduction", e.currentTarget));

  // --- LOGIKA KATALOGU WZORÓW ---
  const listContainer = document.getElementById("formulas-list-container");
  const searchInput = document.getElementById("formula-search-input");
  let activeCategory = "all";
  let catalogSearch = "";

  function renderFormulaCards() {
    const filtered = FORMULAS.filter(f => {
      if (activeCategory !== "all" && f.category !== activeCategory) return false;
      if (catalogSearch.trim() !== "") {
        const term = catalogSearch.toLowerCase();
        return f.title.toLowerCase().includes(term) ||
               f.description.toLowerCase().includes(term) ||
               f.latex.toLowerCase().includes(term) ||
               (f.notes && f.notes.toLowerCase().includes(term));
      }
      return true;
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = `<div class="text-center py-8 text-gray-400">Nie znaleziono wzorów dla zapytania "${catalogSearch}".</div>`;
      return;
    }

    listContainer.innerHTML = filtered.map(f => `
      <div class="formula-item-card">
        <div class="formula-card-top">
          <h4 class="formula-card-title">${f.title}</h4>
          ${f.hasVerifier ? `<button class="test-verifier-btn" data-formula-id="${f.id}"><i data-lucide="check"></i> Sprawdź L=P</button>` : ''}
        </div>
        <p class="formula-card-desc">${f.description}</p>
        <div class="formula-math-display" data-latex="${f.latex}"></div>
        ${f.notes ? `<div class="formula-card-notes"><i data-lucide="info"></i> ${f.notes}</div>` : ''}
      </div>
    `).join("");

    if (window.lucide) window.lucide.createIcons();

    // Render KaTeX
    if (window.katex) {
      listContainer.querySelectorAll(".formula-math-display").forEach(el => {
        const latex = el.dataset.latex;
        if (latex) {
          try {
            window.katex.render(latex, el, { displayMode: true, throwOnError: false });
          } catch (e) {
            el.textContent = latex;
          }
        }
      });
    }

    // Podpięcie przycisków "Sprawdź L=P"
    listContainer.querySelectorAll(".test-verifier-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const fId = btn.dataset.formulaId;
        const verifierSelect = document.getElementById("verifier-formula-select");
        verifierSelect.value = fId;
        switchSubview("view-verifier", document.getElementById("btn-subnav-verifier"));
        runVerifier();
      });
    });
  }

  // Kategorie w katalogu
  container.querySelectorAll(".cat-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      container.querySelectorAll(".cat-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.cat;
      renderFormulaCards();
    });
  });

  searchInput.addEventListener("input", (e) => {
    catalogSearch = e.target.value;
    renderFormulaCards();
  });

  // --- LOGIKA WERYFIKATORA TOŻSAMOŚCI ---
  const verifierSelect = document.getElementById("verifier-formula-select");
  const verifiableFormulas = FORMULAS.filter(f => f.hasVerifier);

  verifierSelect.innerHTML = verifiableFormulas.map(f => `
    <option value="${f.id}">${f.title}</option>
  `).join("");

  const sliderAlpha = document.getElementById("input-angle-alpha");
  const sliderBeta = document.getElementById("input-angle-beta");
  const ctrlBetaGroup = document.getElementById("ctrl-beta-group");

  function runVerifier() {
    const fId = verifierSelect.value;
    const f = verifiableFormulas.find(x => x.id === fId);
    if (!f) return;

    ctrlBetaGroup.style.display = f.needsBeta ? "block" : "none";

    const degA = Number(sliderAlpha.value);
    const degB = Number(sliderBeta.value);

    document.getElementById("lbl-val-alpha").textContent = `${degA}°`;
    document.getElementById("lbl-rad-alpha").textContent = `${((degA * Math.PI) / 180).toFixed(4)} rad`;

    document.getElementById("lbl-val-beta").textContent = `${degB}°`;
    document.getElementById("lbl-rad-beta").textContent = `${((degB * Math.PI) / 180).toFixed(4)} rad`;

    const radA = (degA * Math.PI) / 180;
    const radB = (degB * Math.PI) / 180;

    // Render KaTeX for LHS / RHS formulas
    const mathLhs = document.getElementById("math-lhs-formula");
    const mathRhs = document.getElementById("math-rhs-formula");
    if (window.katex) {
      try {
        window.katex.render(f.lhsLatex, mathLhs, { throwOnError: false });
        window.katex.render(f.rhsLatex, mathRhs, { throwOnError: false });
      } catch (e) {}
    }

    try {
      const valL = f.evalLhs(radA, radB);
      const valR = f.evalRhs(radA, radB);

      const elValL = document.getElementById("val-lhs-eval");
      const elValR = document.getElementById("val-rhs-eval");
      const banner = document.getElementById("verification-status-banner");

      const isInvalid = isNaN(valL) || isNaN(valR) || !isFinite(valL) || !isFinite(valR);

      if (isInvalid) {
        elValL.textContent = "nieoznaczony";
        elValR.textContent = "nieoznaczony";
        banner.className = "verification-status status-warn";
        banner.innerHTML = `<i data-lucide="alert-triangle"></i><span>Dla tego kąta (${degA}°) funkcja nie jest określona (dzielenie przez 0 w tangensie/cotangensie).</span>`;
      } else {
        elValL.textContent = valL.toFixed(5);
        elValR.textContent = valR.toFixed(5);

        const diff = Math.abs(valL - valR);
        if (diff < 1e-6) {
          banner.className = "verification-status status-match";
          banner.innerHTML = `<i data-lucide="check-circle-2"></i><span>Tożsamość zachodzi! Lewa strona równa prawej: <strong>L = P (${valL.toFixed(5)})</strong></span>`;
        } else {
          banner.className = "verification-status status-diff";
          banner.innerHTML = `<i data-lucide="x-circle"></i><span>Różnica: ${diff.toExponential(2)}</span>`;
        }
      }

      if (window.lucide) window.lucide.createIcons();
    } catch (err) {
      console.error(err);
    }
  }

  verifierSelect.addEventListener("change", runVerifier);
  sliderAlpha.addEventListener("input", runVerifier);
  sliderBeta.addEventListener("input", runVerifier);

  // --- LOGIKA KALKULATORA REDUKCYJNEGO ---
  const funcSelect = document.getElementById("reduction-func-select");
  const angleInput = document.getElementById("reduction-angle-input");
  const btnRunReduction = document.getElementById("btn-run-reduction");
  const reductionResult = document.getElementById("reduction-steps-result");

  function runReductionCalculation() {
    const func = funcSelect.value;
    const deg = parseInt(angleInput.value, 10);

    if (isNaN(deg)) {
      reductionResult.innerHTML = `<p class="text-red-400">Podaj prawidłową liczbę stopni.</p>`;
      return;
    }

    const info = explainReduction(deg, func);

    reductionResult.innerHTML = `
      <div class="red-result-header">
        <span class="red-badge quad">${info.quadrant} ćwiartka</span>
        <span class="red-badge sign">Znak: ${info.sign}</span>
        <span class="red-badge val">Wynik: ${info.finalVal}</span>
      </div>

      <div class="steps-container">
        <h5>Wyjaśnienie krok po kroku:</h5>
        <ul>
          ${info.steps.map(s => `<li>${s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`).join("")}
        </ul>
      </div>

      <div class="reduction-summary-box">
        Wartość: <strong>${func}(${deg}°) = ${info.finalVal}</strong>
      </div>
    `;
  }

  btnRunReduction.addEventListener("click", runReductionCalculation);
  angleInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") runReductionCalculation();
  });

  // Inicjalne renderowanie
  renderFormulaCards();
  runVerifier();
  runReductionCalculation();
}
