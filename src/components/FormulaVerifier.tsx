// FormulaVerifier.tsx - Kompendium wzorów, weryfikator tożsamości i kalkulator redukcyjny
import { useState, useMemo } from "react";
import { FORMULAS, FORMULA_CATEGORIES, explainReduction } from "../features/formulas/formulasData";
import type { Formula, ReductionExplanation } from "../features/formulas/formulasData";
import { Icon } from "./icons";
import HtmlWithMath from "./HtmlWithMath";

export default function FormulaVerifier() {
  const [currentView, setCurrentView] = useState<"catalog" | "verifier" | "reduction">("catalog");

  // --- WIDOK 1: KATALOG WZORÓW ---
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [catalogSearch, setCatalogSearch] = useState<string>("");

  const filteredFormulas = useMemo(() => {
    return FORMULAS.filter(f => {
      if (activeCategory !== "all" && f.category !== activeCategory) return false;
      if (catalogSearch.trim() !== "") {
        const term = catalogSearch.toLowerCase();
        return (
          f.title.toLowerCase().includes(term) ||
          f.description.toLowerCase().includes(term) ||
          f.latex.toLowerCase().includes(term) ||
          (Boolean(f.notes) && String(f.notes).toLowerCase().includes(term))
        );
      }
      return true;
    });
  }, [activeCategory, catalogSearch]);

  // --- WIDOK 2: WERYFIKATOR TOŻSAMOŚCI ---
  const verifiableFormulas = useMemo(() => FORMULAS.filter(f => f.hasVerifier), []);
  const [selectedFormulaId, setSelectedFormulaId] = useState<string>(verifiableFormulas[0]?.id ?? "");
  const [degAlpha, setDegAlpha] = useState<number>(30);
  const [degBeta, setDegBeta] = useState<number>(45);

  const selectedFormula: Formula | undefined = useMemo(() => {
    return verifiableFormulas.find(x => x.id === selectedFormulaId) ?? verifiableFormulas[0];
  }, [verifiableFormulas, selectedFormulaId]);

  const radA = (degAlpha * Math.PI) / 180;
  const radB = (degBeta * Math.PI) / 180;

  let valL = NaN;
  let valR = NaN;
  let calcError = false;

  if (selectedFormula?.evalLhs && selectedFormula?.evalRhs) {
    try {
      valL = selectedFormula.evalLhs(radA, radB);
      valR = selectedFormula.evalRhs(radA, radB);
    } catch {
      calcError = true;
    }
  }

  const isInvalid = calcError || isNaN(valL) || isNaN(valR) || !isFinite(valL) || !isFinite(valR);
  const diff = Math.abs(valL - valR);

  const handleTestVerifier = (fId: string) => {
    setSelectedFormulaId(fId);
    setCurrentView("verifier");
  };

  // --- WIDOK 3: KALKULATOR REDUKCYJNY ---
  const [reductionFunc, setReductionFunc] = useState<string>("sin");
  const [reductionAngle, setReductionAngle] = useState<string>("150");
  const [activeReduction, setActiveReduction] = useState<{
    func: string;
    deg: number;
    info: ReductionExplanation | null;
  }>({
    func: "sin",
    deg: 150,
    info: explainReduction(150, "sin")
  });

  const handleRunReduction = () => {
    const deg = parseInt(reductionAngle, 10);
    if (isNaN(deg)) {
      setActiveReduction({ func: reductionFunc, deg: NaN, info: null });
    } else {
      setActiveReduction({
        func: reductionFunc,
        deg,
        info: explainReduction(deg, reductionFunc)
      });
    }
  };

  return (
    <div className="formulas-card">
      {/* Pasek zakładek modułu wzorów */}
      <div className="module-subnav">
        <button
          className={`subnav-btn ${currentView === "catalog" ? "active" : ""}`}
          id="btn-subnav-catalog"
          onClick={() => setCurrentView("catalog")}
        >
          <Icon name="book-open" /> Baza Wzorów
        </button>
        <button
          className={`subnav-btn ${currentView === "verifier" ? "active" : ""}`}
          id="btn-subnav-verifier"
          onClick={() => setCurrentView("verifier")}
        >
          <Icon name="check-check" /> Tożsamości (L=P)
        </button>
        <button
          className={`subnav-btn ${currentView === "reduction" ? "active" : ""}`}
          id="btn-subnav-reduction"
          onClick={() => setCurrentView("reduction")}
        >
          <Icon name="calculator" /> Redukcja Kąta
        </button>
      </div>

      {/* WIDOK 1: KATALOG WZORÓW */}
      <div id="view-catalog" className={`subview-panel ${currentView === "catalog" ? "active" : ""}`}>
        <div className="formula-search-bar">
          <div className="search-box">
            <Icon name="search" />
            <input
              type="text"
              id="formula-search-input"
              placeholder="Szukaj wzoru (np. jedynka, podwojony, suma, redukcyjne)..."
              value={catalogSearch}
              onChange={e => setCatalogSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="formula-cat-chips" id="formula-category-chips">
          {FORMULA_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`cat-chip ${activeCategory === cat.id ? "active" : ""}`}
              data-cat={cat.id}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="formulas-list" id="formulas-list-container">
          {filteredFormulas.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              Nie znaleziono wzorów dla zapytania &quot;{catalogSearch}&quot;.
            </div>
          ) : (
            filteredFormulas.map(f => (
              <div key={f.id} className="formula-item-card">
                <div className="formula-card-top">
                  <h4 className="formula-card-title">{f.title}</h4>
                  {f.hasVerifier && (
                    <button
                      className="test-verifier-btn"
                      data-formula-id={f.id}
                      onClick={() => handleTestVerifier(f.id)}
                    >
                      <Icon name="check" /> Sprawdź L=P
                    </button>
                  )}
                </div>
                <p className="formula-card-desc">{f.description}</p>
                <HtmlWithMath html={`$$${f.latex}$$`} className="formula-math-display" />
                {f.notes && (
                  <div className="formula-card-notes">
                    <Icon name="info" /> {f.notes}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* WIDOK 2: SPRAWDZARKA TOŻSAMOŚCI (L = P) */}
      <div id="view-verifier" className={`subview-panel ${currentView === "verifier" ? "active" : ""}`}>
        <div className="verifier-box">
          <div className="verifier-header">
            <h3>Wybierz tożsamość do numerycznego sprawdzenia:</h3>
            <select
              id="verifier-formula-select"
              className="form-select"
              value={selectedFormulaId}
              onChange={e => setSelectedFormulaId(e.target.value)}
            >
              {verifiableFormulas.map(f => (
                <option key={f.id} value={f.id}>
                  {f.title}
                </option>
              ))}
            </select>
          </div>

          <div className="verifier-inputs">
            <div className="input-control">
              <label>
                Kąt α: <strong id="lbl-val-alpha" className="text-blue-400">{degAlpha}°</strong> (w radianach:{" "}
                <span id="lbl-rad-alpha">{radA.toFixed(4)} rad</span>)
              </label>
              <input
                type="range"
                id="input-angle-alpha"
                min="0"
                max="360"
                value={degAlpha}
                step="1"
                className="angle-slider"
                onChange={e => setDegAlpha(Number(e.target.value))}
              />
            </div>

            {selectedFormula?.needsBeta ? (
              <div className="input-control" id="ctrl-beta-group">
                <label>
                  Kąt β: <strong id="lbl-val-beta" className="text-purple-400">{degBeta}°</strong> (w radianach:{" "}
                  <span id="lbl-rad-beta">{radB.toFixed(4)} rad</span>)
                </label>
                <input
                  type="range"
                  id="input-angle-beta"
                  min="0"
                  max="360"
                  value={degBeta}
                  step="1"
                  className="angle-slider"
                  onChange={e => setDegBeta(Number(e.target.value))}
                />
              </div>
            ) : null}
          </div>

          {selectedFormula ? (
            <div className="verifier-results-card">
              <div className="sides-comparison">
                <div className="side-box side-lhs">
                  <div className="side-tag">Lewa Strona (L)</div>
                  <div className="side-formula" id="math-lhs-formula">
                    <HtmlWithMath html={`$$${selectedFormula.lhsLatex || ""}$$`} />
                  </div>
                  <div className="side-value" id="val-lhs-eval">
                    {isInvalid ? "nieoznaczony" : valL.toFixed(5)}
                  </div>
                </div>

                <div className="equality-sign">
                  <span className="sign-equal" id="status-equal-icon">
                    ＝
                  </span>
                </div>

                <div className="side-box side-rhs">
                  <div className="side-tag">Prawa Strona (P)</div>
                  <div className="side-formula" id="math-rhs-formula">
                    <HtmlWithMath html={`$$${selectedFormula.rhsLatex || ""}$$`} />
                  </div>
                  <div className="side-value" id="val-rhs-eval">
                    {isInvalid ? "nieoznaczony" : valR.toFixed(5)}
                  </div>
                </div>
              </div>

              {isInvalid ? (
                <div className="verification-status status-warn" id="verification-status-banner">
                  <Icon name="alert-triangle" />
                  <span>
                    Dla tego kąta ({degAlpha}°) funkcja nie jest określona (dzielenie przez 0 w tangensie/cotangensie).
                  </span>
                </div>
              ) : diff < 1e-6 ? (
                <div className="verification-status status-match" id="verification-status-banner">
                  <Icon name="check-circle-2" />
                  <span>
                    Tożsamość zachodzi! Lewa strona równa prawej: <strong>L = P ({valL.toFixed(5)})</strong>
                  </span>
                </div>
              ) : (
                <div className="verification-status status-diff" id="verification-status-banner">
                  <Icon name="x-circle" />
                  <span>Różnica: {diff.toExponential(2)}</span>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>

      {/* WIDOK 3: KALKULATOR WZORÓW REDUKCYJNYCH */}
      <div id="view-reduction" className={`subview-panel ${currentView === "reduction" ? "active" : ""}`}>
        <div className="reduction-box">
          <div className="reduction-prompt">
            Wprowadź dowolną funkcję oraz kąt, aby otrzymać natychmiastowe wyjaśnienie redukcji krok po kroku:
          </div>

          <div className="reduction-form-row">
            <div className="select-wrapper">
              <label>Funkcja:</label>
              <select
                id="reduction-func-select"
                className="form-select"
                value={reductionFunc}
                onChange={e => setReductionFunc(e.target.value)}
              >
                <option value="sin">sinus (sin)</option>
                <option value="cos">cosinus (cos)</option>
                <option value="tg">tangens (tg)</option>
                <option value="ctg">cotangens (ctg)</option>
              </select>
            </div>

            <div className="input-wrapper">
              <label>Kąt w stopniach (°):</label>
              <input
                type="number"
                id="reduction-angle-input"
                value={reductionAngle}
                className="form-input"
                onChange={e => setReductionAngle(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter") handleRunReduction();
                }}
              />
            </div>

            <button id="btn-run-reduction" className="action-btn" onClick={handleRunReduction}>
              <Icon name="play" /> Oblicz redukcję
            </button>
          </div>

          <div className="reduction-steps-card" id="reduction-steps-result">
            {activeReduction.info === null ? (
              <p className="text-red-400">Podaj prawidłową liczbę stopni.</p>
            ) : (
              <>
                <div className="red-result-header">
                  <span className="red-badge quad">{activeReduction.info.quadrant} ćwiartka</span>
                  <span className="red-badge sign">Znak: {activeReduction.info.sign}</span>
                  <span className="red-badge val">Wynik: {activeReduction.info.finalVal}</span>
                </div>

                <div className="steps-container">
                  <h5>Wyjaśnienie krok po kroku:</h5>
                  <ul>
                    {activeReduction.info.steps.map((s, idx) => (
                      <li
                        key={idx}
                        dangerouslySetInnerHTML={{
                          __html: s.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        }}
                      />
                    ))}
                  </ul>
                </div>

                <div className="reduction-summary-box">
                  Wartość:{" "}
                  <strong>
                    {activeReduction.func}({activeReduction.deg}°) = {activeReduction.info.finalVal}
                  </strong>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
