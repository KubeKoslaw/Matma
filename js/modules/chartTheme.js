// chartTheme.js - Wspólna paleta rysunków canvas/SVG czytana z aktualnego motywu
// (zmienne --canvas-* definiowane w css/app.css dla motywu ciemnego i jasnego)

export function chartTheme() {
  const cs = getComputedStyle(document.documentElement);
  const v = (name, fallback) => (cs.getPropertyValue(name) || "").trim() || fallback;
  return {
    axis: v("--canvas-axis", "#334155"),
    axisText: v("--canvas-axis-text", "#94a3b8"),
    circle: v("--canvas-circle", "#64748b"),
    radiusLine: v("--canvas-radius-line", "#e2e8f0"),
    angleText: v("--canvas-angle-text", "#93c5fd"),
    pointFill: v("--canvas-point-fill", "#ffffff"),
    pointStroke: v("--canvas-point-stroke", "#2563eb"),
    text: v("--text-primary", "#f1f5f9"),
    panel: v("--bg-card-hover", "#1b2640")
  };
}
