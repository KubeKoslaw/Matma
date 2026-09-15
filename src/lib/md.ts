export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Formatowanie inline — matematyka ($...$ / $$...$$) wycinana na placeholdery,
// żeby KaTeX dostał surowy LaTeX, a **pogrubienia** działały w poprzek wzorów
export function inlineMd(s: string): string {
  const math: string[] = [];
  const text = s.replace(/(\$\$[^$]*\$\$|\$[^$]*\$)/g, (m) => {
    math.push(m);
    return `\x00M${math.length - 1}\x00`;
  });
  const formatted = escapeHtml(text)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
  return formatted.replace(/\x00M(\d+)\x00/g, (_, i) => math[Number(i)]);
}

interface ListStackItem {
  type: "ul" | "ol";
  indent: number;
}

// Minimalny renderer markdown block-level dla fragmentów zadania/karty teorii.
// Obsługuje: nagłówki (degradowane o poziom), listy z prawdziwym zagnieżdżeniem
// (wg wcięcia), podtytuły w rodzaju *Analitycznie:* jako etykiety sekcji,
// cytaty, hr, akapity i matematykę $$...$$.
export function mdToHtml(md: string): string {
  const out: string[] = [];
  const listStack: ListStackItem[] = []; // {type, indent}
  let para: string[] = [];
  let mathBuf: string[] | null = null;
  let quoteBuf: string[] | null = null;

  const closeAllLists = (): void => {
    while (listStack.length) out.push(`</${listStack.pop()!.type}>`);
  };
  const flushPara = (): void => {
    if (para.length) {
      out.push(`<p>${para.map(inlineMd).join("<br>")}</p>`);
      para = [];
    }
  };
  const flushQuote = (): void => {
    if (quoteBuf) {
      out.push(`<blockquote>${quoteBuf.map(inlineMd).join("<br>")}</blockquote>`);
      quoteBuf = null;
    }
  };
  const flushInline = (): void => {
    flushPara();
    flushQuote();
  };

  for (const line of md.split("\n")) {
    const trimmed = line.trim();

    if (mathBuf !== null) {
      mathBuf.push(line);
      if (trimmed.includes("$$")) {
        out.push(`<div class="material-math">${mathBuf.join("\n")}</div>`);
        mathBuf = null;
      }
      continue;
    }
    if (trimmed.startsWith("$$")) {
      flushInline();
      if (trimmed.slice(2).includes("$$")) {
        out.push(`<div class="material-math">${trimmed}</div>`);
      } else {
        mathBuf = [trimmed];
      }
      continue;
    }

    if (trimmed === "") {
      flushInline();
      closeAllLists();
      continue;
    }

    const h = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      flushInline();
      closeAllLists();
      const level = Math.min(6, h[1].length + 1);
      out.push(`<h${level}>${inlineMd(h[2].trim())}</h${level}>`);
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(trimmed)) {
      flushInline();
      closeAllLists();
      out.push("<hr>");
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushPara();
      closeAllLists();
      if (!quoteBuf) quoteBuf = [];
      quoteBuf.push(trimmed.replace(/^>\s?/, ""));
      continue;
    }
    flushQuote();

    // Podtytuł w rodzaju *Analitycznie:* / **Geometrycznie:** — etykieta sekcji
    const sub = trimmed.match(/^\*{1,2}([^*_][^*]{0,60})\*{1,2}:?\s*$/);
    if (sub) {
      flushInline();
      closeAllLists();
      out.push(`<div class="material-sublabel">${escapeHtml(sub[1].trim())}</div>`);
      continue;
    }

    const ul = line.match(/^(\s*)[-*]\s+(.*)$/);
    const ol = line.match(/^(\s*)\d+\.\s+(.*)$/);
    if (ul || ol) {
      flushPara();
      flushQuote();
      const indent = (ul || ol)![1].length;
      const type: "ul" | "ol" = ul ? "ul" : "ol";

      // Zamknij listy płytsze niż bieżący poziom
      while (listStack.length && indent < listStack[listStack.length - 1].indent) {
        out.push(`</${listStack.pop()!.type}>`);
      }
      const top = listStack[listStack.length - 1];
      if (!top) {
        out.push(`<${type}>`);
        listStack.push({ type, indent });
      } else if (indent > top.indent + 1) {
        // Prawdziwe zagnieżdżenie — lista wewnątrz ostatniego <li>
        out.push(`<${type}>`);
        listStack.push({ type, indent });
      } else if (top.type !== type) {
        out.push(`</${top.type}>`);
        out.push(`<${type}>`);
        listStack.push({ type, indent });
      }
      out.push(`<li>${inlineMd(ul ? ul[2] : ol![2])}</li>`);
      continue;
    }
    closeAllLists();

    para.push(trimmed);
  }

  flushInline();
  closeAllLists();
  if (mathBuf !== null) out.push(`<div class="material-math">${mathBuf.join("\n")}</div>`);
  return out.join("\n");
}
