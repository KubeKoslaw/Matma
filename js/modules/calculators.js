// calculators.js - Narzędzia obliczeniowe: Trójkąt prostokątny, Punkt P(a,b) i konwerter kątów
import { chartTheme } from "./chartTheme.js";

export function initCalculators(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="calc-card">
      <div class="module-subnav">
        <button class="subnav-btn active" id="btn-calc-triangle">
          <i data-lucide="triangle"></i> Trójkąt
        </button>
        <button class="subnav-btn" id="btn-calc-point">
          <i data-lucide="crosshair"></i> Punkt P(a, b)
        </button>
        <button class="subnav-btn" id="btn-calc-converter">
          <i data-lucide="arrow-left-right"></i> Stopnie ⇄ Rad
        </button>
      </div>

      <!-- WIDOK 1: TRÓJKĄT PROSTOKĄTNY -->
      <div id="calc-view-triangle" class="subview-panel active">
        <div class="calc-inner-box">
          <p class="calc-desc">
            Wprowadź długości przyprostokątnych $a$ i $b$, aby obliczyć przeciwprostokątną $c$, kąty oraz wartości wszystkich funkcji trygonometrycznych (jak w zadaniu 10.3):
          </p>

          <div class="inputs-grid-2">
            <div class="input-wrapper">
              <label>Przyprostokątna a (przyległa):</label>
              <input type="number" id="tri-side-a" value="4" min="0.1" step="0.1" class="form-input" />
            </div>

            <div class="input-wrapper">
              <label>Przyprostokątna b (naprzeciw):</label>
              <input type="number" id="tri-side-b" value="3" min="0.1" step="0.1" class="form-input" />
            </div>
          </div>

          <div class="triangle-preview-row">
            <!-- SVG trójkąta -->
            <div class="svg-visualizer-box">
              <svg id="tri-svg" width="220" height="180" viewBox="0 0 220 180"></svg>
            </div>

            <div class="tri-results-summary">
              <div class="tri-metric-item">
                <span>Przeciwprostokątna c:</span>
                <strong id="tri-res-c">5.000</strong>
              </div>
              <div class="tri-metric-item">
                <span>Pole trójkąta (P):</span>
                <strong id="tri-res-area">6.000</strong>
              </div>
              <div class="tri-metric-item">
                <span>Kąt α (naprzeciw b):</span>
                <strong id="tri-res-alpha">36.87° (0.643 rad)</strong>
              </div>
              <div class="tri-metric-item">
                <span>Kąt β (naprzeciw a):</span>
                <strong id="tri-res-beta">53.13° (0.927 rad)</strong>
              </div>
              <div class="tri-metric-item" style="grid-column: span 2;">
                <span>Obwód trójkąta (L):</span>
                <strong id="tri-res-perim">12.000</strong>
              </div>
            </div>
          </div>

          <div class="tri-trig-values-grid">
            <div class="tri-func-pill">
              <span class="lbl">sin α = b/c</span>
              <strong id="tri-val-sin">0.6000</strong>
            </div>
            <div class="tri-func-pill">
              <span class="lbl">cos α = a/c</span>
              <strong id="tri-val-cos">0.8000</strong>
            </div>
            <div class="tri-func-pill">
              <span class="lbl">tg α = b/a</span>
              <strong id="tri-val-tg">0.7500</strong>
            </div>
            <div class="tri-func-pill">
              <span class="lbl">ctg α = a/b</span>
              <strong id="tri-val-ctg">1.3333</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- WIDOK 2: PUNKT P(a,b) W UKŁADZIE -->
      <div id="calc-view-point" class="subview-panel">
        <div class="calc-inner-box">
          <p class="calc-desc">
            Wprowadź współrzędne punktu $P(a, b)$ leżącego na ramieniu kąta skierowanego $\alpha$ (jak w zadaniach 10.4 i 10.5):
          </p>

          <div class="inputs-grid-2">
            <div class="input-wrapper">
              <label>Współrzędna a (oś X):</label>
              <input type="number" id="pt-coord-a" value="-4" step="0.5" class="form-input" />
            </div>

            <div class="input-wrapper">
              <label>Współrzędna b (oś Y):</label>
              <input type="number" id="pt-coord-b" value="3" step="0.5" class="form-input" />
            </div>
          </div>

          <div class="point-visualizer-row">
            <div class="svg-visualizer-box">
              <svg id="pt-svg" width="220" height="200" viewBox="0 0 220 200"></svg>
            </div>

            <div class="tri-results-summary">
              <div class="tri-metric-item">
                <span>Promień wodzący r:</span>
                <strong id="pt-res-r">5.000</strong>
              </div>
              <div class="tri-metric-item">
                <span>Ćwiartka kąta:</span>
                <strong id="pt-res-quad" class="val-warn">II ćwiartka</strong>
              </div>
              <div class="tri-metric-item" style="grid-column: span 2;">
                <span>Kąt skierowany α:</span>
                <strong id="pt-res-angle">143.13° (2.498 rad)</strong>
              </div>
            </div>
          </div>

          <div class="tri-trig-values-grid">
            <div class="tri-func-pill">
              <span class="lbl">sin α = b/r</span>
              <strong id="pt-val-sin">0.6000</strong>
            </div>
            <div class="tri-func-pill">
              <span class="lbl">cos α = a/r</span>
              <strong id="pt-val-cos">-0.8000</strong>
            </div>
            <div class="tri-func-pill">
              <span class="lbl">tg α = b/a</span>
              <strong id="pt-val-tg">-0.7500</strong>
            </div>
            <div class="tri-func-pill">
              <span class="lbl">ctg α = a/b</span>
              <strong id="pt-val-ctg">-1.3333</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- WIDOK 3: KONWERTER KĄTÓW -->
      <div id="calc-view-converter" class="subview-panel">
        <div class="calc-inner-box">
          <p class="calc-desc">
            Szybkie przeliczanie między miarą stopniową (°) a miarą łukową (rad):
          </p>

          <div class="converter-cards-pair">
            <div class="converter-side-box">
              <label>Stopnie (°):</label>
              <input type="number" id="conv-input-deg" value="135" class="form-input" />
              <span class="conv-hint">Wpisz kąt w stopniach</span>
            </div>

            <div class="conv-arrows-center">
              <i data-lucide="arrow-right-left"></i>
            </div>

            <div class="converter-side-box">
              <label>Radiany (rad):</label>
              <input type="number" id="conv-input-rad" value="2.3562" step="0.0001" class="form-input" />
              <span class="conv-hint" id="conv-pi-fraction">Wielokrotność π: <strong>3π/4</strong></span>
            </div>
          </div>

          <div class="conv-quick-list">
            <span>Popularne kąty:</span>
            <div class="quick-chips-wrap">
              ${[0, 30, 45, 60, 90, 120, 135, 180, 270, 360].map(d => `
                <button class="conv-quick-btn" data-deg="${d}">${d}°</button>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  // Przełączanie zakładek
  const subnavBtns = container.querySelectorAll(".subnav-btn");
  const subviews = container.querySelectorAll(".subview-panel");

  function switchCalcView(targetViewId, targetBtn) {
    subnavBtns.forEach(b => b.classList.remove("active"));
    subviews.forEach(v => v.classList.remove("active"));

    targetBtn.classList.add("active");
    const view = document.getElementById(targetViewId);
    if (view) view.classList.add("active");
  }

  document.getElementById("btn-calc-triangle").addEventListener("click", (e) => switchCalcView("calc-view-triangle", e.currentTarget));
  document.getElementById("btn-calc-point").addEventListener("click", (e) => switchCalcView("calc-view-point", e.currentTarget));
  document.getElementById("btn-calc-converter").addEventListener("click", (e) => switchCalcView("calc-view-converter", e.currentTarget));

  // --- LOGIKA TRÓJKĄTA ---
  const triA = document.getElementById("tri-side-a");
  const triB = document.getElementById("tri-side-b");
  const triSvg = document.getElementById("tri-svg");

  function updateTriangle() {
    const a = parseFloat(triA.value) || 1;
    const b = parseFloat(triB.value) || 1;

    const c = Math.sqrt(a * a + b * b);
    const alphaRad = Math.atan2(b, a);
    const alphaDeg = (alphaRad * 180) / Math.PI;
    const betaDeg = 90 - alphaDeg;
    const betaRad = (betaDeg * Math.PI) / 180;
    const area = 0.5 * a * b;
    const perim = a + b + c;

    document.getElementById("tri-res-c").textContent = c.toFixed(4);
    document.getElementById("tri-res-alpha").textContent = `${alphaDeg.toFixed(2)}° (${alphaRad.toFixed(3)} rad)`;
    document.getElementById("tri-res-beta").textContent = `${betaDeg.toFixed(2)}° (${betaRad.toFixed(3)} rad)`;
    document.getElementById("tri-res-area").textContent = area.toFixed(4);
    document.getElementById("tri-res-perim").textContent = perim.toFixed(4);

    document.getElementById("tri-val-sin").textContent = (b / c).toFixed(4);
    document.getElementById("tri-val-cos").textContent = (a / c).toFixed(4);
    document.getElementById("tri-val-tg").textContent = (b / a).toFixed(4);
    document.getElementById("tri-val-ctg").textContent = (a / b).toFixed(4);

    // Rysowanie SVG trójkąta
    const t = chartTheme();
    const maxW = 160;
    const maxH = 130;
    const scale = Math.min(maxW / a, maxH / b);
    const drawA = a * scale;
    const drawB = b * scale;

    const ox = 35;
    const oy = 150;

    triSvg.innerHTML = `
      <!-- Kąt prosty -->
      <rect x="${ox}" y="${oy - 16}" width="16" height="16" fill="${t.panel}" stroke="${t.axisText}" stroke-width="1"/>
      <circle cx="${ox + 8}" cy="${oy - 8}" r="2" fill="${t.axisText}" />

      <!-- Boki trójkąta -->
      <polygon points="${ox},${oy} ${ox + drawA},${oy} ${ox},${oy - drawB}" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" stroke-width="2.5" />

      <!-- Etykiety boków -->
      <text x="${ox + drawA / 2}" y="${oy + 16}" fill="#10b981" font-size="12" text-anchor="middle" font-weight="bold">a = ${a}</text>
      <text x="${ox - 16}" y="${oy - drawB / 2}" fill="#3b82f6" font-size="12" text-anchor="middle" font-weight="bold">b = ${b}</text>
      <text x="${ox + drawA / 2 + 12}" y="${oy - drawB / 2 - 8}" fill="${t.text}" font-size="12" text-anchor="middle" font-weight="bold">c = ${c.toFixed(2)}</text>

      <!-- Kąt alfa -->
      <path d="M ${ox + drawA - 24} ${oy} A 24 24 0 0 0 ${ox + drawA - 20} ${oy - 12}" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <text x="${ox + drawA - 32}" y="${oy - 8}" fill="#f59e0b" font-size="11" font-weight="bold">α</text>
    `;
  }

  triA.addEventListener("input", updateTriangle);
  triB.addEventListener("input", updateTriangle);
  window.addEventListener("themechange", updateTriangle);
  updateTriangle();

  // --- LOGIKA PUNKTU P(a, b) ---
  const ptA = document.getElementById("pt-coord-a");
  const ptB = document.getElementById("pt-coord-b");
  const ptSvg = document.getElementById("pt-svg");

  function updatePoint() {
    const a = parseFloat(ptA.value) || 0;
    const b = parseFloat(ptB.value) || 0;

    const r = Math.sqrt(a * a + b * b);
    let angleRad = Math.atan2(b, a);
    if (angleRad < 0) angleRad += 2 * Math.PI;
    const angleDeg = (angleRad * 180) / Math.PI;

    let quad = "I";
    if (a === 0 || b === 0) quad = "Oś układu";
    else if (a > 0 && b > 0) quad = "I ćwiartka";
    else if (a < 0 && b > 0) quad = "II ćwiartka";
    else if (a < 0 && b < 0) quad = "III ćwiartka";
    else quad = "IV ćwiartka";

    document.getElementById("pt-res-r").textContent = r.toFixed(4);
    document.getElementById("pt-res-quad").textContent = quad;
    document.getElementById("pt-res-angle").textContent = `${angleDeg.toFixed(2)}° (${angleRad.toFixed(3)} rad)`;

    document.getElementById("pt-val-sin").textContent = r !== 0 ? (b / r).toFixed(4) : "0";
    document.getElementById("pt-val-cos").textContent = r !== 0 ? (a / r).toFixed(4) : "0";
    document.getElementById("pt-val-tg").textContent = a !== 0 ? (b / a).toFixed(4) : "brak";
    document.getElementById("pt-val-ctg").textContent = b !== 0 ? (a / b).toFixed(4) : "brak";

    // Rysowanie SVG punktu
    const t = chartTheme();
    const cx = 110;
    const cy = 100;
    const maxCoord = Math.max(Math.abs(a), Math.abs(b), 4);
    const scale = 75 / maxCoord;

    const px = cx + a * scale;
    const py = cy - b * scale;

    ptSvg.innerHTML = `
      <!-- Osie -->
      <line x1="15" y1="${cy}" x2="205" y2="${cy}" stroke="${t.axis}" stroke-width="1.5" />
      <line x1="${cx}" y1="185" x2="${cx}" y2="15" stroke="${t.axis}" stroke-width="1.5" />

      <!-- Strzałki -->
      <polygon points="205,${cy} 197,${cy - 4} 197,${cy + 4}" fill="${t.axisText}" />
      <polygon points="${cx},15 ${cx - 4},23 ${cx + 4},23" fill="${t.axisText}" />

      <!-- Rzuty punktu (przerywane) -->
      <line x1="${px}" y1="${cy}" x2="${px}" y2="${py}" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,3" />
      <line x1="${cx}" y1="${py}" x2="${px}" y2="${py}" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,3" />

      <!-- Wektor wodzący r -->
      <line x1="${cx}" y1="${cy}" x2="${px}" y2="${py}" stroke="#f43f5e" stroke-width="2.5" />

      <!-- Punkt P -->
      <circle cx="${px}" cy="${py}" r="5" fill="${t.pointFill}" stroke="#f43f5e" stroke-width="2" />
      <text x="${px + (px > cx ? 8 : -8)}" y="${py - 8}" fill="${t.text}" font-size="11" font-weight="bold" text-anchor="${px > cx ? 'start' : 'end'}">P(${a}, ${b})</text>
    `;
  }

  ptA.addEventListener("input", updatePoint);
  ptB.addEventListener("input", updatePoint);
  window.addEventListener("themechange", updatePoint);
  updatePoint();

  // --- LOGIKA KONWERTERA ---
  const convDeg = document.getElementById("conv-input-deg");
  const convRad = document.getElementById("conv-input-rad");
  const convPi = document.getElementById("conv-pi-fraction");

  function getFracPi(deg) {
    const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
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

  convDeg.addEventListener("input", () => {
    const d = parseFloat(convDeg.value) || 0;
    const r = (d * Math.PI) / 180;
    convRad.value = r.toFixed(4);
    convPi.innerHTML = `Wielokrotność π: <strong>${getFracPi(d)}</strong>`;
  });

  convRad.addEventListener("input", () => {
    const r = parseFloat(convRad.value) || 0;
    const d = (r * 180) / Math.PI;
    convDeg.value = d.toFixed(2);
    convPi.innerHTML = `Wielokrotność π: <strong>${getFracPi(d)}</strong>`;
  });

  container.querySelectorAll(".conv-quick-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const d = Number(btn.dataset.deg);
      convDeg.value = d;
      convDeg.dispatchEvent(new Event("input"));
    });
  });
}
