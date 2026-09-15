// TableView.tsx - Przeglądarka tabeli wartości trygonometrycznych (0-360)
import { useState, useMemo, useEffect, useRef } from "react";
import { SPECIAL_ANGLES } from "../features/trainer/tryg/anglesData";
import { Icon } from "./icons";
import { renderMath } from "../lib/katex";

export interface AngleRow {
  deg: number;
  radLatex: string;
  radDecimal: number;
  quadrant: string;
  wierszyk?: string;
  isSpecial?: boolean;
  sinVal: number | null;
  cosVal: number | null;
  tgVal: number | null;
  ctgVal: number | null;
  sinLatex: string;
  cosLatex: string;
  tgLatex: string;
  ctgLatex: string;
}

function getPiFraction(deg: number): string {
  if (deg === 0) return "0";
  if (deg === 360) return "2\\pi";
  if (deg === 180) return "\\pi";

  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const div = gcd(deg, 180);
  const num = deg / div;
  const den = 180 / div;

  if (den === 1) return `${num}\\pi`;
  if (num === 1) return `\\frac{\\pi}{${den}}`;
  return `\\frac{${num}\\pi}{${den}}`;
}

function generateFullTable(): AngleRow[] {
  const specialMap = new Map<number, typeof SPECIAL_ANGLES[0]>(SPECIAL_ANGLES.map(a => [a.deg, a]));
  const full: AngleRow[] = [];

  for (let deg = 0; deg <= 360; deg++) {
    const rad = (deg * Math.PI) / 180;
    const isSpecial = specialMap.has(deg);
    const spec = specialMap.get(deg);

    let quadrant = "I";
    let wierszyk = "I: same plusy (+)";
    if (deg === 0 || deg === 180 || deg === 360) {
      quadrant = "Oś X";
      wierszyk = "Granica ćwiartek";
    } else if (deg === 90 || deg === 270) {
      quadrant = "Oś Y";
      wierszyk = "Granica ćwiartek";
    } else if (deg > 0 && deg < 90) {
      quadrant = "I";
      wierszyk = "I: same plusy (+)";
    } else if (deg > 90 && deg < 180) {
      quadrant = "II";
      wierszyk = "II: tylko sinus (+)";
    } else if (deg > 180 && deg < 270) {
      quadrant = "III";
      wierszyk = "III: tangens i cotangens (+)";
    } else if (deg > 270 && deg < 360) {
      quadrant = "IV";
      wierszyk = "IV: tylko cosinus (+)";
    }

    const sinVal = Math.sin(rad);
    const cosVal = Math.cos(rad);
    const cleanSin = Math.abs(sinVal) < 1e-12 ? 0 : sinVal;
    const cleanCos = Math.abs(cosVal) < 1e-12 ? 0 : cosVal;

    let tgVal: number | null = null;
    let ctgVal: number | null = null;

    if (deg !== 90 && deg !== 270) {
      tgVal = Math.tan(rad);
    }

    if (deg !== 0 && deg !== 180 && deg !== 360) {
      ctgVal = 1 / Math.tan(rad);
    }

    full.push({
      deg,
      radLatex: getPiFraction(deg),
      radDecimal: Number(rad.toFixed(4)),
      quadrant,
      wierszyk,
      isSpecial,
      sinVal: Number(cleanSin.toFixed(4)),
      cosVal: Number(cleanCos.toFixed(4)),
      tgVal: tgVal !== null ? Number(tgVal.toFixed(4)) : null,
      ctgVal: ctgVal !== null ? Number(ctgVal.toFixed(4)) : null,
      sinLatex: isSpecial && spec ? spec.sinLatex : cleanSin.toFixed(4),
      cosLatex: isSpecial && spec ? spec.cosLatex : cleanCos.toFixed(4),
      tgLatex: isSpecial && spec ? spec.tgLatex : (tgVal !== null ? tgVal.toFixed(4) : "\\text{brak}"),
      ctgLatex: isSpecial && spec ? spec.ctgLatex : (ctgVal !== null ? ctgVal.toFixed(4) : "\\text{brak}")
    });
  }

  return full;
}

const FULL_TABLE_DATA: AngleRow[] = generateFullTable();
const SPECIAL_ROWS: AngleRow[] = SPECIAL_ANGLES.map(a => ({
  ...a,
  isSpecial: true
}));

function latexToPlain(latex: string): string {
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

function normalizeSearchTerm(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/pi/g, "π")
    .replace(/sqrt/g, "√");
}

function quadClass(q: string): string {
  if (q === "I") return "q-I";
  if (q === "II") return "q-II";
  if (q === "III") return "q-III";
  if (q === "IV") return "q-IV";
  return "q-axis";
}

const QUAD_FILTERS = [
  { id: "all", label: "Wszystkie" },
  { id: "I", label: "I ćw. (0-90°)" },
  { id: "II", label: "II ćw. (90-180°)" },
  { id: "III", label: "III ćw. (180-270°)" },
  { id: "IV", label: "IV ćw. (270-360°)" }
];

export default function TableView() {
  const [currentTab, setCurrentTab] = useState<"special" | "full">("special");
  const [activeQuadFilter, setActiveQuadFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const useKatex = currentTab === "special";

  const rawData = useKatex ? SPECIAL_ROWS : FULL_TABLE_DATA;

  const filtered = useMemo(() => {
    const term = normalizeSearchTerm(searchTerm);

    return rawData.filter(item => {
      if (activeQuadFilter !== "all") {
        if (activeQuadFilter === "I" && item.quadrant !== "I") return false;
        if (activeQuadFilter === "II" && item.quadrant !== "II") return false;
        if (activeQuadFilter === "III" && item.quadrant !== "III") return false;
        if (activeQuadFilter === "IV" && item.quadrant !== "IV") return false;
      }

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
  }, [rawData, activeQuadFilter, searchTerm]);

  useEffect(() => {
    if (tbodyRef.current && currentTab === "special") {
      renderMath(tbodyRef.current);
    }
  }, [currentTab, filtered]);

  const handleRowClick = (item: AngleRow) => {
    const text = `${item.deg}° | ${item.radDecimal} rad | sin: ${item.sinVal} | cos: ${item.cosVal} | tg: ${item.tgVal ?? "brak"} | ctg: ${item.ctgVal ?? "brak"}`;
    navigator.clipboard?.writeText(text).catch(() => {});
    window.showToast?.(`Skopiowano dane dla kąta ${item.deg}°!`);
  };

  const renderValCell = (plain: number | null, latex: string, decimal: number | null) => {
    if (useKatex) {
      return (
        <>
          <div className="math-expr" data-latex={latex} dangerouslySetInnerHTML={{ __html: `\\(${latex}\\)` }} />
          <span className="sub-dec">{decimal !== null && decimal !== undefined ? decimal : ""}</span>
        </>
      );
    }
    return (
      <span className="cell-plain">{plain !== null && plain !== undefined ? plain : "—"}</span>
    );
  };

  return (
    <div className="table-card">
      <div className="table-nav-header">
        <div className="table-tabs">
          <button
            className={`tab-btn ${currentTab === "special" ? "active" : ""}`}
            id="tab-special-angles"
            onClick={() => setCurrentTab("special")}
          >
            <Icon name="star" /> Dokładne (CKE)
          </button>
          <button
            className={`tab-btn ${currentTab === "full" ? "active" : ""}`}
            id="tab-full-angles"
            onClick={() => setCurrentTab("full")}
          >
            <Icon name="list" /> Co 1° (0-360°)
          </button>
        </div>
      </div>

      {/* Filtry i szukajka */}
      <div className="table-toolbar">
        <div className="search-box">
          <Icon name="search" />
          <input
            type="text"
            id="table-search-input"
            placeholder="Szukaj kąta (np. 45, 120, π/3, I)..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="quad-filter-group">
          {QUAD_FILTERS.map(q => (
            <button
              key={q.id}
              className={`filter-pill ${activeQuadFilter === q.id ? "active" : ""}`}
              data-quad={q.id}
              onClick={() => setActiveQuadFilter(q.id)}
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>

      {/* Licznik wyników */}
      <div className="results-info">
        <span id="table-row-count">
          Wyświetlanie: {filtered.length} kątów ({currentTab === "special" ? "charakterystyczne z pierwiastkami" : "pełna tabela 0°-360°"})
        </span>
        <span className="tip-text">
          <Icon name="info" /> Dotknij wiersza, aby skopiować wartości
        </span>
      </div>

      {/* Kontener tabeli */}
      <div className="table-responsive-wrapper">
        <table className="trig-data-table" id="trig-main-table">
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
          <tbody id="trig-table-body" ref={tbodyRef}>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="table-empty-cell">
                  Brak wyników dla podanych filtrów &quot;{searchTerm}&quot;.
                </td>
              </tr>
            ) : (
              filtered.map(row => (
                <tr
                  key={row.deg}
                  className={`table-data-row ${row.isSpecial ? "special-row" : ""}`}
                  data-deg={row.deg}
                  onClick={() => handleRowClick(row)}
                >
                  <td className="cell-deg">{row.deg}°</td>
                  <td className="cell-rad">
                    {useKatex ? (
                      <>
                        <div className="math-expr" data-latex={row.radLatex} dangerouslySetInnerHTML={{ __html: `\\(${row.radLatex}\\)` }} />
                        <span className="sub-dec">{row.radDecimal}</span>
                      </>
                    ) : (
                      <>
                        <span className="cell-plain">{latexToPlain(row.radLatex)}</span>
                        <span className="sub-dec">{row.radDecimal}</span>
                      </>
                    )}
                  </td>
                  <td className="cell-quad">
                    <span className={`q-badge ${quadClass(row.quadrant)}`}>{row.quadrant}</span>
                  </td>
                  <td className="cell-val sin-col">{renderValCell(row.sinVal, row.sinLatex, row.sinVal)}</td>
                  <td className="cell-val cos-col">{renderValCell(row.cosVal, row.cosLatex, row.cosVal)}</td>
                  <td className="cell-val tg-col">{renderValCell(row.tgVal, row.tgLatex, row.tgVal)}</td>
                  <td className="cell-val ctg-col">{renderValCell(row.ctgVal, row.ctgLatex, row.ctgVal)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
