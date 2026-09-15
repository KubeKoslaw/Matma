// Calculators.tsx - Narzędzia obliczeniowe (port legacy/js/modules/calculators.js):
// trójkąt prostokątny, punkt P(a, b) w układzie współrzędnych i konwerter stopni ⇄ rad,
// wszystkie z żywą wizualizacją SVG czytaną z aktualnego motywu.
import { useEffect, useState } from "react";
import { chartTheme } from "../lib/chartTheme";
import HtmlWithMath from "./HtmlWithMath";
import { Icon } from "./icons";

type CalcTab = "triangle" | "point" | "converter";

const QUICK_DEG = [0, 30, 45, 60, 90, 120, 135, 180, 270, 360];

function getFracPi(deg: number): string {
  const gcd = (x: number, y: number): number => (y === 0 ? x : gcd(y, x % y));
  const d = Math.abs(Math.round(deg));
  if (d === 0) return "0";
  const div = gcd(d, 180);
  const num = d / div;
  const den = 180 / div;
  const sign = deg < 0 ? "-" : "";
  if (den === 1) return `${sign}${num}π`;
  if (num === 1) return `${sign}π/${den}`;
  return `${sign}${num}π/${den}`;
}

export default function Calculators() {
  const [tab, setTab] = useState<CalcTab>("triangle");

  // Trójkąt
  const [triA, setTriA] = useState("4");
  const [triB, setTriB] = useState("3");

  // Punkt P(a, b)
  const [ptA, setPtA] = useState("-4");
  const [ptB, setPtB] = useState("3");

  // Konwerter
  const [degText, setDegText] = useState("135");
  const [radText, setRadText] = useState("2.3562");

  // Przemalowanie SVG po zmianie motywu
  const [, setThemeTick] = useState(0);
  useEffect(() => {
    const onTheme = () => setThemeTick((t) => t + 1);
    window.addEventListener("themechange", onTheme);
    return () => window.removeEventListener("themechange", onTheme);
  }, []);

  // --- trójkąt: obliczenia pochodne ---
  const ta = parseFloat(triA) || 1;
  const tb = parseFloat(triB) || 1;
  const c = Math.sqrt(ta * ta + tb * tb);
  const alphaRad = Math.atan2(tb, ta);
  const alphaDeg = (alphaRad * 180) / Math.PI;
  const betaDeg = 90 - alphaDeg;
  const betaRad = (betaDeg * Math.PI) / 180;
  const area = 0.5 * ta * tb;
  const perim = ta + tb + c;

  const t = chartTheme();
  const maxW = 160;
  const maxH = 130;
  const scale = Math.min(maxW / ta, maxH / tb);
  const drawA = ta * scale;
  const drawB = tb * scale;
  const ox = 35;
  const oy = 150;

  // --- punkt: obliczenia pochodne ---
  const pa = parseFloat(ptA) || 0;
  const pb = parseFloat(ptB) || 0;
  const r = Math.sqrt(pa * pa + pb * pb);
  let angleRad = Math.atan2(pb, pa);
  if (angleRad < 0) angleRad += 2 * Math.PI;
  const angleDeg = (angleRad * 180) / Math.PI;

  let quad = "I";
  if (pa === 0 || pb === 0) quad = "Oś układu";
  else if (pa > 0 && pb > 0) quad = "I ćwiartka";
  else if (pa < 0 && pb > 0) quad = "II ćwiartka";
  else if (pa < 0 && pb < 0) quad = "III ćwiartka";
  else quad = "IV ćwiartka";

  const cx = 110;
  const cy = 100;
  const maxCoord = Math.max(Math.abs(pa), Math.abs(pb), 4);
  const pScale = 75 / maxCoord;
  const px = cx + pa * pScale;
  const py = cy - pb * pScale;

  // --- konwerter ---
  const degNum = parseFloat(degText) || 0;

  const applyDeg = (v: string) => {
    setDegText(v);
    const d = parseFloat(v) || 0;
    setRadText(((d * Math.PI) / 180).toFixed(4));
  };
  const applyRad = (v: string) => {
    setRadText(v);
    const rr = parseFloat(v) || 0;
    setDegText(((rr * 180) / Math.PI).toFixed(2));
  };

  const subnavBtn = (id: CalcTab, icon: string, label: string) => (
    <button className={`subnav-btn ${tab === id ? "active" : ""}`} onClick={() => setTab(id)}>
      <Icon name={icon} /> {label}
    </button>
  );

  return (
    <div className="calc-card">
      <div className="module-subnav">
        {subnavBtn("triangle", "triangle", "Trójkąt")}
        {subnavBtn("point", "crosshair", "Punkt P(a, b)")}
        {subnavBtn("converter", "arrow-left-right", "Stopnie ⇄ Rad")}
      </div>

      {tab === "triangle" && (
        <div className="subview-panel active">
          <div className="calc-inner-box">
            <HtmlWithMath
              className="calc-desc"
              html={`<p>Wprowadź długości przyprostokątnych $a$ i $b$, aby obliczyć przeciwprostokątną $c$, kąty oraz wartości wszystkich funkcji trygonometrycznych (jak w zadaniu 10.3):</p>`}
            />

            <div className="inputs-grid-2">
              <div className="input-wrapper">
                <label>Przyprostokątna a (przyległa):</label>
                <input type="number" value={triA} min={0.1} step={0.1} className="form-input" onChange={(e) => setTriA(e.target.value)} />
              </div>
              <div className="input-wrapper">
                <label>Przyprostokątna b (naprzeciw):</label>
                <input type="number" value={triB} min={0.1} step={0.1} className="form-input" onChange={(e) => setTriB(e.target.value)} />
              </div>
            </div>

            <div className="triangle-preview-row">
              <div className="svg-visualizer-box">
                <svg width={220} height={180} viewBox="0 0 220 180">
                  <rect x={ox} y={oy - 16} width={16} height={16} fill={t.panel} stroke={t.axisText} strokeWidth={1} />
                  <circle cx={ox + 8} cy={oy - 8} r={2} fill={t.axisText} />
                  <polygon points={`${ox},${oy} ${ox + drawA},${oy} ${ox},${oy - drawB}`} fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth={2.5} />
                  <text x={ox + drawA / 2} y={oy + 16} fill="#10b981" fontSize={12} textAnchor="middle" fontWeight="bold">a = {ta}</text>
                  <text x={ox - 16} y={oy - drawB / 2} fill="#3b82f6" fontSize={12} textAnchor="middle" fontWeight="bold">b = {tb}</text>
                  <text x={ox + drawA / 2 + 12} y={oy - drawB / 2 - 8} fill={t.text} fontSize={12} textAnchor="middle" fontWeight="bold">c = {c.toFixed(2)}</text>
                  <path d={`M ${ox + drawA - 24} ${oy} A 24 24 0 0 0 ${ox + drawA - 20} ${oy - 12}`} fill="none" stroke="#f59e0b" strokeWidth={2} />
                  <text x={ox + drawA - 32} y={oy - 8} fill="#f59e0b" fontSize={11} fontWeight="bold">α</text>
                </svg>
              </div>

              <div className="tri-results-summary">
                <div className="tri-metric-item">
                  <span>Przeciwprostokątna c:</span>
                  <strong>{c.toFixed(4)}</strong>
                </div>
                <div className="tri-metric-item">
                  <span>Pole trójkąta (P):</span>
                  <strong>{area.toFixed(4)}</strong>
                </div>
                <div className="tri-metric-item">
                  <span>Kąt α (naprzeciw b):</span>
                  <strong>{alphaDeg.toFixed(2)}° ({alphaRad.toFixed(3)} rad)</strong>
                </div>
                <div className="tri-metric-item">
                  <span>Kąt β (naprzeciw a):</span>
                  <strong>{betaDeg.toFixed(2)}° ({betaRad.toFixed(3)} rad)</strong>
                </div>
                <div className="tri-metric-item" style={{ gridColumn: "span 2" }}>
                  <span>Obwód trójkąta (L):</span>
                  <strong>{perim.toFixed(4)}</strong>
                </div>
              </div>
            </div>

            <div className="tri-trig-values-grid">
              <div className="tri-func-pill"><span className="lbl">sin α = b/c</span><strong>{(tb / c).toFixed(4)}</strong></div>
              <div className="tri-func-pill"><span className="lbl">cos α = a/c</span><strong>{(ta / c).toFixed(4)}</strong></div>
              <div className="tri-func-pill"><span className="lbl">tg α = b/a</span><strong>{(tb / ta).toFixed(4)}</strong></div>
              <div className="tri-func-pill"><span className="lbl">ctg α = a/b</span><strong>{(ta / tb).toFixed(4)}</strong></div>
            </div>
          </div>
        </div>
      )}

      {tab === "point" && (
        <div className="subview-panel active">
          <div className="calc-inner-box">
            <HtmlWithMath
              className="calc-desc"
              html={`<p>Wprowadź współrzędne punktu $P(a, b)$ leżącego na ramieniu kąta skierowanego $\\alpha$ (jak w zadaniach 10.4 i 10.5):</p>`}
            />

            <div className="inputs-grid-2">
              <div className="input-wrapper">
                <label>Współrzędna a (oś X):</label>
                <input type="number" value={ptA} step={0.5} className="form-input" onChange={(e) => setPtA(e.target.value)} />
              </div>
              <div className="input-wrapper">
                <label>Współrzędna b (oś Y):</label>
                <input type="number" value={ptB} step={0.5} className="form-input" onChange={(e) => setPtB(e.target.value)} />
              </div>
            </div>

            <div className="point-visualizer-row">
              <div className="svg-visualizer-box">
                <svg width={220} height={200} viewBox="0 0 220 200">
                  <line x1={15} y1={cy} x2={205} y2={cy} stroke={t.axis} strokeWidth={1.5} />
                  <line x1={cx} y1={185} x2={cx} y2={15} stroke={t.axis} strokeWidth={1.5} />
                  <polygon points={`205,${cy} 197,${cy - 4} 197,${cy + 4}`} fill={t.axisText} />
                  <polygon points={`${cx},15 ${cx - 4},23 ${cx + 4},23`} fill={t.axisText} />
                  <line x1={px} y1={cy} x2={px} y2={py} stroke="#3b82f6" strokeWidth={1.5} strokeDasharray="3,3" />
                  <line x1={cx} y1={py} x2={px} y2={py} stroke="#10b981" strokeWidth={1.5} strokeDasharray="3,3" />
                  <line x1={cx} y1={cy} x2={px} y2={py} stroke="#f43f5e" strokeWidth={2.5} />
                  <circle cx={px} cy={py} r={5} fill={t.pointFill} stroke="#f43f5e" strokeWidth={2} />
                  <text x={px + (px > cx ? 8 : -8)} y={py - 8} fill={t.text} fontSize={11} fontWeight="bold" textAnchor={px > cx ? "start" : "end"}>P({pa}, {pb})</text>
                </svg>
              </div>

              <div className="tri-results-summary">
                <div className="tri-metric-item">
                  <span>Promień wodzący r:</span>
                  <strong>{r.toFixed(4)}</strong>
                </div>
                <div className="tri-metric-item">
                  <span>Ćwiartka kąta:</span>
                  <strong className="val-warn">{quad}</strong>
                </div>
                <div className="tri-metric-item" style={{ gridColumn: "span 2" }}>
                  <span>Kąt skierowany α:</span>
                  <strong>{angleDeg.toFixed(2)}° ({angleRad.toFixed(3)} rad)</strong>
                </div>
              </div>
            </div>

            <div className="tri-trig-values-grid">
              <div className="tri-func-pill"><span className="lbl">sin α = b/r</span><strong>{r !== 0 ? (pb / r).toFixed(4) : "0"}</strong></div>
              <div className="tri-func-pill"><span className="lbl">cos α = a/r</span><strong>{r !== 0 ? (pa / r).toFixed(4) : "0"}</strong></div>
              <div className="tri-func-pill"><span className="lbl">tg α = b/a</span><strong>{pa !== 0 ? (pb / pa).toFixed(4) : "brak"}</strong></div>
              <div className="tri-func-pill"><span className="lbl">ctg α = a/b</span><strong>{pb !== 0 ? (pa / pb).toFixed(4) : "brak"}</strong></div>
            </div>
          </div>
        </div>
      )}

      {tab === "converter" && (
        <div className="subview-panel active">
          <div className="calc-inner-box">
            <p className="calc-desc">
              Szybkie przeliczanie między miarą stopniową (°) a miarą łukową (rad):
            </p>

            <div className="converter-cards-pair">
              <div className="converter-side-box">
                <label>Stopnie (°):</label>
                <input type="number" value={degText} className="form-input" onChange={(e) => applyDeg(e.target.value)} />
                <span className="conv-hint">Wpisz kąt w stopniach</span>
              </div>

              <div className="conv-arrows-center">
                <Icon name="arrow-right-left" />
              </div>

              <div className="converter-side-box">
                <label>Radiany (rad):</label>
                <input type="number" value={radText} step={0.0001} className="form-input" onChange={(e) => applyRad(e.target.value)} />
                <span className="conv-hint">Wielokrotność π: <strong>{getFracPi(degNum)}</strong></span>
              </div>
            </div>

            <div className="conv-quick-list">
              <span>Popularne kąty:</span>
              <div className="quick-chips-wrap">
                {QUICK_DEG.map((d) => (
                  <button key={d} className="conv-quick-btn" onClick={() => applyDeg(String(d))}>
                    {d}°
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
