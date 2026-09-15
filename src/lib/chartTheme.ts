// chartTheme.ts - Wspólna paleta rysunków canvas/SVG czytana z aktualnego motywu
// (zmienne --canvas-* definiowane w css/app.css dla motywu ciemnego i jasnego)

export interface ChartTheme {
  axis: string;
  axisText: string;
  circle: string;
  radiusLine: string;
  angleText: string;
  pointFill: string;
  pointStroke: string;
  text: string;
  panel: string;
}

export function chartTheme(): ChartTheme {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return {
      axis: "#334155",
      axisText: "#94a3b8",
      circle: "#64748b",
      radiusLine: "#e2e8f0",
      angleText: "#93c5fd",
      pointFill: "#ffffff",
      pointStroke: "#2563eb",
      text: "#f1f5f9",
      panel: "#1b2640"
    };
  }
  const cs = getComputedStyle(document.documentElement);
  const v = (name: string, fallback: string): string => (cs.getPropertyValue(name) || "").trim() || fallback;
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
