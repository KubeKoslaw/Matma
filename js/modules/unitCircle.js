// unitCircle.js - Interaktywny okrąg trygonometryczny ze wsparciem dotyku i wierszykiem o ćwiartkach
import { SPECIAL_ANGLES } from "../data/angles.js";
import { chartTheme } from "./chartTheme.js";

export function initUnitCircle(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="circle-card">
      <div class="circle-header">
        <div class="angle-display">
          <span class="angle-deg" id="circle-deg-display">45°</span>
          <span class="angle-rad" id="circle-rad-display">\\frac{\\pi}{4} \\approx 0.7854\\text{ rad}</span>
        </div>
        <div class="quadrant-badge" id="circle-quad-badge">I ćwiartka</div>
      </div>

      <!-- Wierszyk o ćwiartkach -->
      <div class="mnemonic-banner" id="circle-mnemonic">
        <i data-lucide="sparkles"></i>
        <span id="circle-mnemonic-text">I ćwiartka: w pierwszej ćwiartce same plusy (+)</span>
      </div>

      <!-- Płótno Canvas / SVG -->
      <div class="canvas-wrapper">
        <canvas id="trig-canvas" width="340" height="340"></canvas>
      </div>

      <!-- Pasek sterowania kątem -->
      <div class="controls-panel">
        <div class="slider-row">
          <label for="circle-angle-slider">Kąt α (0° - 360°):</label>
          <input type="range" id="circle-angle-slider" min="0" max="360" value="45" step="1" class="angle-slider" />
          <span class="slider-value" id="circle-slider-value">45°</span>
        </div>
        
        <div class="quick-angles-scroll">
          <span class="quick-angles-label">Kąty:</span>
          ${[0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360]
            .map(deg => `<button class="quick-angle-btn" data-deg="${deg}">${deg}°</button>`)
            .join("")}
        </div>
      </div>

      <!-- Karty wartości funkcji -->
      <div class="values-grid">
        <div class="val-card val-sin">
          <div class="val-title"><span class="color-dot bg-blue"></span> sin α (oś Y)</div>
          <div class="val-math" id="circle-sin-val">\\frac{\\sqrt{2}}{2}</div>
          <div class="val-dec" id="circle-sin-dec">≈ 0.7071</div>
        </div>

        <div class="val-card val-cos">
          <div class="val-title"><span class="color-dot bg-emerald"></span> cos α (oś X)</div>
          <div class="val-math" id="circle-cos-val">\\frac{\\sqrt{2}}{2}</div>
          <div class="val-dec" id="circle-cos-dec">≈ 0.7071</div>
        </div>

        <div class="val-card val-tg">
          <div class="val-title"><span class="color-dot bg-purple"></span> tg α (styczna X=1)</div>
          <div class="val-math" id="circle-tg-val">1</div>
          <div class="val-dec" id="circle-tg-dec">≈ 1.0000</div>
        </div>

        <div class="val-card val-ctg">
          <div class="val-title"><span class="color-dot bg-amber"></span> ctg α (styczna Y=1)</div>
          <div class="val-math" id="circle-ctg-val">1</div>
          <div class="val-dec" id="circle-ctg-dec">≈ 1.0000</div>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  const canvas = document.getElementById("trig-canvas");
  const ctx = canvas.getContext("2d");
  const slider = document.getElementById("circle-angle-slider");
  let currentAngle = 45;
  let isDragging = false;

  // Rysujemy w stałym logicznym układzie 340x340 — setTransform mapuje go na
  // fizyczne piksele (devicePixelRatio), więc wykres jest ostry na każdym ekranie.
  const LOGICAL = 340;

  function fitCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const cssSize = canvas.clientWidth || LOGICAL;
    canvas.width = Math.max(1, Math.round(cssSize * dpr));
    canvas.height = canvas.width;
    const scale = canvas.width / LOGICAL;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
  }

  window.addEventListener("resize", () => {
    fitCanvas();
    drawCanvas(currentAngle);
  });

  // Przemalowanie po zmianie motywu (app.js wysyła "themechange")
  window.addEventListener("themechange", () => {
    drawCanvas(currentAngle);
  });

  const specialMap = new Map(SPECIAL_ANGLES.map(s => [s.deg, s]));

  function renderMath(elementId, latexStr) {
    const el = document.getElementById(elementId);
    if (!el) return;
    if (window.katex) {
      try {
        window.katex.render(latexStr, el, { throwOnError: false });
      } catch (e) {
        el.textContent = latexStr;
      }
    } else {
      el.textContent = latexStr;
    }
  }

  function updateDisplay(deg) {
    currentAngle = deg;
    slider.value = deg;
    document.getElementById("circle-deg-display").textContent = `${deg}°`;
    const sliderValueEl = document.getElementById("circle-slider-value");
    if (sliderValueEl) sliderValueEl.textContent = `${deg}°`;

    const rad = (deg * Math.PI) / 180;
    const spec = specialMap.get(deg);

    // Radian display
    if (spec) {
      renderMath("circle-rad-display", `${spec.radLatex} \\approx ${rad.toFixed(4)}\\text{ rad}`);
    } else {
      renderMath("circle-rad-display", `\\approx ${rad.toFixed(4)}\\text{ rad}`);
    }

    // Quadrant and mnemonic
    const quadBadge = document.getElementById("circle-quad-badge");
    const mnemonicText = document.getElementById("circle-mnemonic-text");
    const mnemonicBox = document.getElementById("circle-mnemonic");

    if (deg === 0 || deg === 360) {
      quadBadge.textContent = "Oś +OX";
      mnemonicText.textContent = "Kąt na osi: sin 0° = 0, cos 0° = 1";
      mnemonicBox.className = "mnemonic-banner bg-gray";
    } else if (deg === 90) {
      quadBadge.textContent = "Oś +OY";
      mnemonicText.textContent = "Kąt prosty (π/2): sin 90° = 1, cos 90° = 0, tg 90° nie istnieje!";
      mnemonicBox.className = "mnemonic-banner bg-gray";
    } else if (deg === 180) {
      quadBadge.textContent = "Oś -OX";
      mnemonicText.textContent = "Kąt półpełny (π): sin 180° = 0, cos 180° = -1";
      mnemonicBox.className = "mnemonic-banner bg-gray";
    } else if (deg === 270) {
      quadBadge.textContent = "Oś -OY";
      mnemonicText.textContent = "Kąt 3π/2: sin 270° = -1, cos 270° = 0, tg 270° nie istnieje!";
      mnemonicBox.className = "mnemonic-banner bg-gray";
    } else if (deg > 0 && deg < 90) {
      quadBadge.textContent = "I ćwiartka";
      mnemonicText.textContent = "W pierwszej ćwiartce same plusy (+)";
      mnemonicBox.className = "mnemonic-banner q1";
    } else if (deg > 90 && deg < 180) {
      quadBadge.textContent = "II ćwiartka";
      mnemonicText.textContent = "W drugiej tylko sinus (+)";
      mnemonicBox.className = "mnemonic-banner q2";
    } else if (deg > 180 && deg < 270) {
      quadBadge.textContent = "III ćwiartka";
      mnemonicText.textContent = "W trzeciej tangens i cotangens (+)";
      mnemonicBox.className = "mnemonic-banner q3";
    } else {
      quadBadge.textContent = "IV ćwiartka";
      mnemonicText.textContent = "A w czwartej cosinus (+)";
      mnemonicBox.className = "mnemonic-banner q4";
    }

    // Function values
    const sinVal = Math.sin(rad);
    const cosVal = Math.cos(rad);
    const tgVal = (deg === 90 || deg === 270) ? null : Math.tan(rad);
    const ctgVal = (deg === 0 || deg === 180 || deg === 360) ? null : 1 / Math.tan(rad);

    if (spec) {
      renderMath("circle-sin-val", spec.sinLatex);
      renderMath("circle-cos-val", spec.cosLatex);
      renderMath("circle-tg-val", spec.tgLatex);
      renderMath("circle-ctg-val", spec.ctgLatex);
    } else {
      renderMath("circle-sin-val", sinVal.toFixed(4));
      renderMath("circle-cos-val", cosVal.toFixed(4));
      renderMath("circle-tg-val", tgVal !== null ? tgVal.toFixed(4) : "\\text{brak}");
      renderMath("circle-ctg-val", ctgVal !== null ? ctgVal.toFixed(4) : "\\text{brak}");
    }

    document.getElementById("circle-sin-dec").textContent = `≈ ${sinVal.toFixed(4)}`;
    document.getElementById("circle-cos-dec").textContent = `≈ ${cosVal.toFixed(4)}`;
    document.getElementById("circle-tg-dec").textContent = tgVal !== null ? `≈ ${tgVal.toFixed(4)}` : "nieokreślony";
    document.getElementById("circle-ctg-dec").textContent = ctgVal !== null ? `≈ ${ctgVal.toFixed(4)}` : "nieokreślony";

    // Highlight active quick button
    container.querySelectorAll(".quick-angle-btn").forEach(btn => {
      btn.classList.toggle("active", Number(btn.dataset.deg) === deg);
    });

    drawCanvas(deg);
  }

  function drawCanvas(deg) {
    const t = chartTheme();
    const w = LOGICAL;
    const h = LOGICAL;
    const cx = w / 2;
    const cy = h / 2;
    const r = 115; // Promień okręgu w px

    ctx.clearRect(0, 0, w, h);

    // Osie współrzędnych
    ctx.strokeStyle = t.axis;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(15, cy);
    ctx.lineTo(w - 15, cy);
    ctx.moveTo(cx, h - 15);
    ctx.lineTo(cx, 15);
    ctx.stroke();

    // Strzałki osi
    ctx.fillStyle = t.axisText;
    ctx.beginPath();
    ctx.moveTo(w - 12, cy); ctx.lineTo(w - 20, cy - 4); ctx.lineTo(w - 20, cy + 4); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(cx, 12); ctx.lineTo(cx - 4, 20); ctx.lineTo(cx + 4, 20); ctx.fill();

    ctx.font = "11px Inter, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("X", w - 10, cy - 8);
    ctx.fillText("Y", cx + 8, 20);

    // Okrąg jednostkowy
    ctx.strokeStyle = t.circle;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.stroke();

    // Zaznaczenie kąta (łuk wypełniony)
    const rad = (deg * Math.PI) / 180;
    ctx.fillStyle = "rgba(59, 130, 246, 0.15)";
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, 32, 0, -rad, true);
    ctx.closePath();
    ctx.fill();

    // Kąt w stopniach na łuku
    if (deg > 15) {
      const midRad = rad / 2;
      const textX = cx + 45 * Math.cos(midRad);
      const textY = cy - 45 * Math.sin(midRad);
      ctx.fillStyle = t.angleText;
      ctx.font = "10px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${deg}°`, textX, textY);
    }

    // Punkt P(x, y) na okręgu
    const px = cx + r * Math.cos(rad);
    const py = cy - r * Math.sin(rad);

    // Rzutowanie Cosinusa (zielony, na osi X)
    ctx.strokeStyle = "#10b981";
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(px, cy);
    ctx.stroke();

    // Rzutowanie Sinusa (niebieski, pionowy do punktu P)
    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(px, cy);
    ctx.lineTo(px, py);
    ctx.stroke();

    // Linia przerywana od (cx, cy) do P (promień wodzący r=1)
    ctx.strokeStyle = t.radiusLine;
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(px, py);
    ctx.stroke();
    ctx.setLineDash([]);

    // Styczna tangensa przy x = 1 (px = cx + r)
    if (deg !== 90 && deg !== 270) {
      const tanY = cy - r * Math.tan(rad);
      // Narysuj pionową prostą tangensa
      ctx.strokeStyle = "rgba(168, 85, 247, 0.25)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx + r, 10);
      ctx.lineTo(cx + r, h - 10);
      ctx.stroke();

      // Jeśli punkt przecięcia mieści się w widoku
      if (tanY >= 5 && tanY <= h - 5) {
        ctx.strokeStyle = "#a855f7";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx + r, cy);
        ctx.lineTo(cx + r, tanY);
        ctx.stroke();

        ctx.fillStyle = "#a855f7";
        ctx.beginPath();
        ctx.arc(cx + r, tanY, 4, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    // Punkt P(x, y)
    ctx.fillStyle = t.pointFill;
    ctx.beginPath();
    ctx.arc(px, py, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = t.pointStroke;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Etykieta punktu P — szerokość mierzona, żeby nie ucinało tekstu przy krawędzi
    ctx.fillStyle = t.radiusLine;
    ctx.font = "bold 11px Inter, sans-serif";
    const label = "P(cos α, sin α)";
    const labelWidth = ctx.measureText(label).width;
    let labelAlign, labelX;
    if (px > cx) {
      if (px + 8 + labelWidth > w - 2) {
        labelAlign = "right";
        labelX = px - 8;
      } else {
        labelAlign = "left";
        labelX = px + 8;
      }
    } else {
      if (px - 8 - labelWidth < 2) {
        labelAlign = "left";
        labelX = px + 8;
      } else {
        labelAlign = "right";
        labelX = px - 8;
      }
    }
    // Ostateczny clamp do krawędzi płótna, gdy etykieta nie mieści się po żadnej stronie
    if (labelAlign === "left" && labelX + labelWidth > w - 2) {
      labelX = w - 2 - labelWidth;
    } else if (labelAlign === "right" && labelX - labelWidth < 2) {
      labelX = 2 + labelWidth;
    }
    ctx.textAlign = labelAlign;
    ctx.fillText(label, labelX, py - 6);
  }

  function handlePointer(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    // Mapuj dotyk do logicznego układu 340x340 (środek = środek prostokąta),
    // niezależnie od faktycznego rozmiaru wyświetlania płótna
    const x = ((clientX - rect.left) * LOGICAL) / rect.width - LOGICAL / 2;
    const y = LOGICAL / 2 - ((clientY - rect.top) * LOGICAL) / rect.height;

    let angleRad = Math.atan2(y, x);
    if (angleRad < 0) angleRad += 2 * Math.PI;

    let deg = Math.round((angleRad * 180) / Math.PI);

    // Przyciągaj (snap) do kątów charakterystycznych w granicach 3 stopni
    for (const spec of SPECIAL_ANGLES) {
      if (Math.abs(deg - spec.deg) <= 3) {
        deg = spec.deg;
        break;
      }
    }

    updateDisplay(deg);
  }

  // Obsługa zdarzeń myszy i dotyku
  canvas.addEventListener("mousedown", (e) => {
    isDragging = true;
    handlePointer(e);
  });
  window.addEventListener("mousemove", (e) => {
    if (isDragging) handlePointer(e);
  });
  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  canvas.addEventListener("touchstart", (e) => {
    isDragging = true;
    handlePointer(e);
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener("touchmove", (e) => {
    if (isDragging) {
      handlePointer(e);
      e.preventDefault();
    }
  }, { passive: false });

  canvas.addEventListener("touchend", () => {
    isDragging = false;
  });

  // Obsługa suwaka
  slider.addEventListener("input", (e) => {
    updateDisplay(Number(e.target.value));
  });

  // Obsługa szybkich przycisków
  container.querySelectorAll(".quick-angle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      updateDisplay(Number(btn.dataset.deg));
    });
  });

  // Początkowe wywołanie
  fitCanvas();
  updateDisplay(45);
}
