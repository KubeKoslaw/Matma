// katex.ts - Renderowanie LaTeX (parity z window.renderMath z legacy/js/app.js).
import renderMathInElement from "katex/contrib/auto-render";

export function renderMath(target: HTMLElement = document.body) {
  try {
    renderMathInElement(target, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  } catch (err) {
    console.warn("KaTeX render error:", err);
  }
}

window.renderMath = renderMath;
