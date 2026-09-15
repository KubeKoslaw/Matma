// UnitCircle.tsx - Interaktywny okrąg trygonometryczny (port z legacy/js/modules/unitCircle.js)
// Wykres na canvasie (2D context, DPR, logika 340x340), obsługa dotyku/myszy,
// suwak, szybkie kąty, LaTeX w kartach wartości, motywy dynamiczne.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import katex from "katex";
import { chartTheme } from "../lib/chartTheme";
import { SPECIAL_ANGLES } from "../features/trainer/tryg/anglesData";
import type { SpecialAngle } from "../features/trainer/tryg/anglesData";
import { Icon } from "./icons";

const LOGICAL = 340;
const PRESET_ANGLES = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360] as const;
const SPECIAL_MAP = new Map<number, SpecialAngle>(SPECIAL_ANGLES.map((s) => [s.deg, s]));

function renderLatex(latexStr: string): string {
  try {
    return katex.renderToString(latexStr, { throwOnError: false });
  } catch {
    return latexStr;
  }
}

function fitCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
  const dpr = window.devicePixelRatio || 1;
  const cssSize = canvas.clientWidth || LOGICAL;
  canvas.width = Math.max(1, Math.round(cssSize * dpr));
  canvas.height = canvas.width;
  const scale = canvas.width / LOGICAL;
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
}

function drawCanvas(ctx: CanvasRenderingContext2D, deg: number): void {
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

  // Etykieta punktu P — canvas ma border-radius:50%, więc etykieta musi
  // zmieścić się w OKRĘGU przycinającym, nie w prostokącie płótna
  ctx.fillStyle = t.radiusLine;
  ctx.font = "bold 11px Inter, sans-serif";
  const label = "P(cos α, sin α)";
  const labelWidth = ctx.measureText(label).width;
  const clipR = w / 2 - 3;
  const fits = (x0: number, x1: number, y: number): boolean => {
    const dy = y - cy;
    const ok = (x: number): boolean => {
      const dx = x - cx;
      return dx * dx + dy * dy <= clipR * clipR;
    };
    return ok(x0) && ok(x1);
  };

  const candidates: Array<{ align: CanvasTextAlign; x: number; y: number }> = [
    { align: "left", x: px + 8, y: py - 8 },
    { align: "right", x: px - 8, y: py - 8 },
    { align: "center", x: px, y: py + 22 },
    { align: "center", x: px, y: py - 18 },
    { align: "center", x: cx, y: py - 8 }
  ];
  const spot = candidates.find((c) => {
    const x0 = c.align === "left" ? c.x : c.align === "right" ? c.x - labelWidth : c.x - labelWidth / 2;
    const x1 = x0 + labelWidth;
    return fits(x0, x1, c.y);
  }) || { align: "center" as CanvasTextAlign, x: cx, y: cy + clipR - 14 };

  ctx.textAlign = spot.align;
  ctx.fillText(label, spot.x, spot.y);
}

export default function UnitCircle() {
  const [angle, setAngle] = useState<number>(45);
  const angleRef = useRef<number>(angle);
  angleRef.current = angle;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDraggingRef = useRef<boolean>(false);

  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    fitCanvas(canvas, ctx);
    drawCanvas(ctx, angleRef.current);
  }, []);

  // Redraw przy zmianie kąta
  useEffect(() => {
    redraw();
  }, [angle, redraw]);

  // Nasłuchiwanie na zmiany motywu i rozmiaru okna / płótna
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleThemeChange = () => {
      redraw();
    };

    const handleResize = () => {
      redraw();
    };

    window.addEventListener("themechange", handleThemeChange);
    window.addEventListener("resize", handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        redraw();
      });
      resizeObserver.observe(canvas);
    }

    return () => {
      window.removeEventListener("themechange", handleThemeChange);
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [redraw]);

  // Obsługa przeciągania wskaźnika (mysz i dotyk)
  const handlePointer = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

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

    setAngle(deg);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      handlePointer(e.clientX, e.clientY);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handlePointer(e.clientX, e.clientY);
      }
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      isDraggingRef.current = true;
      if (e.touches.length > 0) {
        handlePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
      e.preventDefault();
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current) {
        if (e.touches.length > 0) {
          handlePointer(e.touches[0].clientX, e.touches[0].clientY);
        }
        e.preventDefault();
      }
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);
    canvas.addEventListener("touchcancel", onTouchEnd);

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      canvas.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [handlePointer]);

  // Obliczenia wartości i etykiet dla aktualnego kąta
  const {
    quadrantBadge,
    mnemonicText,
    mnemonicClass,
    radHtml,
    sinHtml,
    sinDec,
    cosHtml,
    cosDec,
    tgHtml,
    tgDec,
    ctgHtml,
    ctgDec
  } = useMemo(() => {
    const rad = (angle * Math.PI) / 180;
    const spec = SPECIAL_MAP.get(angle);

    let badge: string;
    let text: string;
    let mClass: string;

    if (angle === 0 || angle === 360) {
      badge = "Oś +OX";
      text = "Kąt na osi: sin 0° = 0, cos 0° = 1";
      mClass = "mnemonic-banner bg-gray";
    } else if (angle === 90) {
      badge = "Oś +OY";
      text = "Kąt prosty (π/2): sin 90° = 1, cos 90° = 0, tg 90° nie istnieje!";
      mClass = "mnemonic-banner bg-gray";
    } else if (angle === 180) {
      badge = "Oś -OX";
      text = "Kąt półpełny (π): sin 180° = 0, cos 180° = -1";
      mClass = "mnemonic-banner bg-gray";
    } else if (angle === 270) {
      badge = "Oś -OY";
      text = "Kąt 3π/2: sin 270° = -1, cos 270° = 0, tg 270° nie istnieje!";
      mClass = "mnemonic-banner bg-gray";
    } else if (angle > 0 && angle < 90) {
      badge = "I ćwiartka";
      text = "W pierwszej ćwiartce same plusy (+)";
      mClass = "mnemonic-banner q1";
    } else if (angle > 90 && angle < 180) {
      badge = "II ćwiartka";
      text = "W drugiej tylko sinus (+)";
      mClass = "mnemonic-banner q2";
    } else if (angle > 180 && angle < 270) {
      badge = "III ćwiartka";
      text = "W trzeciej tangens i cotangens (+)";
      mClass = "mnemonic-banner q3";
    } else {
      badge = "IV ćwiartka";
      text = "A w czwartej cosinus (+)";
      mClass = "mnemonic-banner q4";
    }

    const radLatex = spec
      ? `${spec.radLatex} \\approx ${rad.toFixed(4)}\\text{ rad}`
      : `\\approx ${rad.toFixed(4)}\\text{ rad}`;

    const sinVal = Math.sin(rad);
    const cosVal = Math.cos(rad);
    const tgVal = angle === 90 || angle === 270 ? null : Math.tan(rad);
    const ctgVal = angle === 0 || angle === 180 || angle === 360 ? null : 1 / Math.tan(rad);

    const sinLatex = spec ? spec.sinLatex : sinVal.toFixed(4);
    const cosLatex = spec ? spec.cosLatex : cosVal.toFixed(4);
    const tgLatex = spec ? spec.tgLatex : tgVal !== null ? tgVal.toFixed(4) : "\\text{brak}";
    const ctgLatex = spec ? spec.ctgLatex : ctgVal !== null ? ctgVal.toFixed(4) : "\\text{brak}";

    return {
      quadrantBadge: badge,
      mnemonicText: text,
      mnemonicClass: mClass,
      radHtml: renderLatex(radLatex),
      sinHtml: renderLatex(sinLatex),
      sinDec: `≈ ${sinVal.toFixed(4)}`,
      cosHtml: renderLatex(cosLatex),
      cosDec: `≈ ${cosVal.toFixed(4)}`,
      tgHtml: renderLatex(tgLatex),
      tgDec: tgVal !== null ? `≈ ${tgVal.toFixed(4)}` : "nieokreślony",
      ctgHtml: renderLatex(ctgLatex),
      ctgDec: ctgVal !== null ? `≈ ${ctgVal.toFixed(4)}` : "nieokreślony"
    };
  }, [angle]);

  return (
    <div className="circle-card">
      <div className="circle-header">
        <div className="angle-display">
          <span className="angle-deg" id="circle-deg-display">{angle}°</span>
          <span className="angle-rad" id="circle-rad-display" dangerouslySetInnerHTML={{ __html: radHtml }} />
        </div>
        <div className="quadrant-badge" id="circle-quad-badge">{quadrantBadge}</div>
      </div>

      {/* Wierszyk o ćwiartkach */}
      <div className={mnemonicClass} id="circle-mnemonic">
        <Icon name="sparkles" />
        <span id="circle-mnemonic-text">{mnemonicText}</span>
      </div>

      {/* Płótno Canvas / SVG */}
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} id="trig-canvas" width={340} height={340} />
      </div>

      {/* Pasek sterowania kątem */}
      <div className="controls-panel">
        <div className="slider-row">
          <label htmlFor="circle-angle-slider">Kąt α (0° - 360°):</label>
          <input
            type="range"
            id="circle-angle-slider"
            min={0}
            max={360}
            value={angle}
            step={1}
            className="angle-slider"
            onChange={(e) => setAngle(Number(e.target.value))}
          />
          <span className="slider-value" id="circle-slider-value">{angle}°</span>
        </div>

        <div className="quick-angles-scroll">
          <span className="quick-angles-label">Kąty:</span>
          {PRESET_ANGLES.map((deg) => (
            <button
              key={deg}
              className={`quick-angle-btn${angle === deg ? " active" : ""}`}
              data-deg={deg}
              onClick={() => setAngle(deg)}
            >
              {deg}°
            </button>
          ))}
        </div>
      </div>

      {/* Karty wartości funkcji */}
      <div className="values-grid">
        <div className="val-card val-sin">
          <div className="val-title"><span className="color-dot bg-blue"></span> sin α (oś Y)</div>
          <div className="val-math" id="circle-sin-val" dangerouslySetInnerHTML={{ __html: sinHtml }} />
          <div className="val-dec" id="circle-sin-dec">{sinDec}</div>
        </div>

        <div className="val-card val-cos">
          <div className="val-title"><span className="color-dot bg-emerald"></span> cos α (oś X)</div>
          <div className="val-math" id="circle-cos-val" dangerouslySetInnerHTML={{ __html: cosHtml }} />
          <div className="val-dec" id="circle-cos-dec">{cosDec}</div>
        </div>

        <div className="val-card val-tg">
          <div className="val-title"><span className="color-dot bg-purple"></span> tg α (styczna X=1)</div>
          <div className="val-math" id="circle-tg-val" dangerouslySetInnerHTML={{ __html: tgHtml }} />
          <div className="val-dec" id="circle-tg-dec">{tgDec}</div>
        </div>

        <div className="val-card val-ctg">
          <div className="val-title"><span className="color-dot bg-amber"></span> ctg α (styczna Y=1)</div>
          <div className="val-math" id="circle-ctg-val" dangerouslySetInnerHTML={{ __html: ctgHtml }} />
          <div className="val-dec" id="circle-ctg-dec">{ctgDec}</div>
        </div>
      </div>
    </div>
  );
}
