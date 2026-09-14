// materialy.js - Przeglądarka materiałów działu w SEKCJACH (jak widoki Trygonometrii):
// pasy sekcji (H1) + pasy podsekcji (H2), treść renderowana leniwie na żądanie.
// Dane materiałów to moduły JS generowane przez `npm run build:materials`
// (js/data/material-*.js) — brak fetch, działa offline w WebView.

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Formatowanie inline — matematyka ($...$ / $$...$$) jest wycinana na placeholdery,
// żeby KaTeX dostał surowy LaTeX, a **pogrubienia** działały w poprzek wzorów
function inlineMd(s) {
  const math = [];
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

function mdToHtml(md) {
  const lines = md.split("\n");
  const out = [];
  const listStack = []; // {type, indent}
  let para = [];
  let tableBuf = null;
  let mathBuf = null;
  let quoteBuf = null;

  const closeLists = () => {
    while (listStack.length) out.push(`</${listStack.pop().type}>`);
  };
  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${para.map(inlineMd).join("<br>")}</p>`);
      para = [];
    }
  };
  const flushQuote = () => {
    if (quoteBuf) {
      out.push(`<blockquote>${quoteBuf.map(inlineMd).join("<br>")}</blockquote>`);
      quoteBuf = null;
    }
  };
  const flushTable = () => {
    if (!tableBuf) return;
    const rows = tableBuf
      .map(l => l.trim())
      .filter(l => !/^\|[\s:\-|]+\|$/.test(l))
      .map(l => l.replace(/^\||\|$/g, "").split("|").map(c => c.trim()));
    if (rows.length) {
      const [head, ...body] = rows;
      out.push("<table class=\"material-table\"><thead><tr>");
      head.forEach(c => out.push(`<th>${inlineMd(c)}</th>`));
      out.push("</tr></thead><tbody>");
      body.forEach(r => {
        out.push("<tr>");
        r.forEach(c => out.push(`<td>${inlineMd(c)}</td>`));
        out.push("</tr>");
      });
      out.push("</tbody></table>");
    }
    tableBuf = null;
  };
  const flushAll = () => {
    flushPara();
    flushQuote();
    flushTable();
    closeLists();
  };

  for (const line of lines) {
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
      flushAll();
      if (trimmed.slice(2).includes("$$")) {
        out.push(`<div class="material-math">${trimmed}</div>`);
      } else {
        mathBuf = [trimmed];
      }
      continue;
    }

    if (trimmed.startsWith("|")) {
      flushPara();
      flushQuote();
      closeLists();
      if (!tableBuf) tableBuf = [];
      tableBuf.push(line);
      continue;
    }
    flushTable();

    if (trimmed === "") {
      flushPara();
      flushQuote();
      closeLists();
      continue;
    }

    const h = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      flushAll();
      const level = h[1].length;
      out.push(`<h${level}>${inlineMd(h[2].trim())}</h${level}>`);
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(trimmed)) {
      flushAll();
      out.push("<hr>");
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushPara();
      closeLists();
      if (!quoteBuf) quoteBuf = [];
      quoteBuf.push(trimmed.replace(/^>\s?/, ""));
      continue;
    }
    flushQuote();

    const ul = line.match(/^(\s*)[-*]\s+(.*)$/);
    const ol = line.match(/^(\s*)\d+\.\s+(.*)$/);
    if (ul || ol) {
      flushPara();
      const indent = (ul || ol)[1].length;
      const type = ul ? "ul" : "ol";
      const top = listStack[listStack.length - 1];
      if (!top || indent < top.indent) {
        closeLists();
        out.push(`<${type}>`);
        listStack.push({ type, indent });
      } else if (type !== top.type) {
        out.push(`</${top.type}>`);
        out.push(`<${type}>`);
        listStack.push({ type, indent });
      }
      out.push(`<li>${inlineMd(ul ? ul[2] : ol[2])}</li>`);
      continue;
    }
    closeLists();

    para.push(trimmed);
  }

  flushAll();
  if (mathBuf !== null) out.push(`<div class="material-math">${mathBuf.join("\n")}</div>`);
  return out.join("\n");
}

// Podział materiału na sekcje po nagłówkach zadanego poziomu
function splitByHeading(md, level) {
  const re = new RegExp(`^#{${level}}\\s+(.*)$`);
  const chunks = [];
  let cur = { title: null, lines: [] };
  for (const line of md.split("\n")) {
    const m = line.match(re);
    if (m) {
      if (cur.title !== null || cur.lines.some(l => l.trim() !== "")) chunks.push(cur);
      cur = { title: m[1].trim(), lines: [] };
    } else if (cur.title !== null) {
      cur.lines.push(line);
    } else {
      cur.lines.push(line); // treść przed pierwszym nagłówkiem (np. cytat)
    }
  }
  if (cur.title !== null || cur.lines.some(l => l.trim() !== "")) chunks.push(cur);
  return chunks.filter(c => c.title !== null || c.lines.some(l => l.trim() !== ""));
}

// Czytelna etykieta sekcji na pasie chipów
function sectionLabel(title) {
  const t = title
    .replace(/CZĘŚĆ TEORETYCZNA.*/i, "Teoria i wzory")
    .replace(/ZADANIA WPROWADZAJĄCE.*/i, "Zadania wprowadzające")
    .replace(/\s*[–—]\s*PEŁNE ZESTAWIENIE.*/i, "")
    .replace(/(.*?)\s*[–—]\s*Zadania [Mm]aturalne\s*(\([^)]*\))?/, "Zadania maturalne $2")
    .replace(/[–—]\s*$/, "")
    .replace(/\$\$|\$/g, "")
    .trim();
  return t.length > 30 ? t.slice(0, 28) + "…" : t;
}

function subsectionLabel(title) {
  const t = title.replace(/\$\$|\$/g, "").trim();
  return t.length > 34 ? t.slice(0, 32) + "…" : t;
}

export function initMaterialy(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="material-card">
      <div class="material-header" id="material-header"></div>
      <div class="material-sections module-subnav" id="material-sections"></div>
      <div class="material-subsections module-subnav" id="material-subsections" style="display:none;"></div>
      <div class="material-loading" id="material-loading" style="display:none;">
        <i data-lucide="loader"></i> Wczytywanie sekcji…
      </div>
      <div class="material-body" id="material-body"></div>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();

  const sectionsEl = document.getElementById("material-sections");
  const subsEl = document.getElementById("material-subsections");

  sectionsEl.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-sec-idx]");
    if (!chip) return;
    selectSection(Number(chip.dataset.secIdx));
  });
  subsEl.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-sub-idx]");
    if (!chip) return;
    selectSubsection(Number(chip.dataset.subIdx));
  });
}

let currentLoader = null;
let currentData = null;
let currentSections = [];
let currentSectionIdx = 0;
let currentSubs = [];
let currentSubIdx = 0;

function setLoading(on) {
  const el = document.getElementById("material-loading");
  if (el) el.style.display = on ? "flex" : "none";
}

function renderChips(el, items, activeIdx, dataAttr, cls) {
  if (!el) return;
  el.innerHTML = items.map((label, i) => `
    <button class="subnav-btn ${cls} ${i === activeIdx ? "active" : ""}" data-${dataAttr}="${i}">${escapeHtml(label)}</button>
  `).join("");
  el.style.display = items.length > 1 ? "flex" : "none";
}

function renderCurrentSubsection() {
  const sec = currentSections[currentSectionIdx];
  const body = document.getElementById("material-body");
  if (!sec || !body) return;

  setLoading(true);
  // Parse w następnym tiku, żeby spinner zdążył się pokazać
  setTimeout(() => {
    let chunkMd = `# ${sec.title}\n${sec.lines.join("\n")}`;
    if (currentSubs.length) {
      const sub = currentSubs[currentSubIdx];
      chunkMd = `# ${sub.title}\n${sub.lines.join("\n")}`;
    }
    body.innerHTML = mdToHtml(chunkMd);
    setLoading(false);
    window.scrollTo({ top: 0 });
    if (window.renderMath) window.renderMath(body);
  }, 30);
}

function selectSection(idx) {
  currentSectionIdx = idx;
  currentSubIdx = 0;
  renderChips(
    document.getElementById("material-sections"),
    currentSections.map(s => s.label),
    idx, "sec-idx", "material-sec-btn"
  );

  const sec = currentSections[idx];
  currentSubs = sec.subs;
  const subsEl = document.getElementById("material-subsections");
  if (currentSubs.length) {
    renderChips(subsEl, currentSubs.map(s => s.label), 0, "sub-idx", "material-sub-btn");
  } else if (subsEl) {
    subsEl.style.display = "none";
  }
  renderCurrentSubsection();
}

function selectSubsection(idx) {
  currentSubIdx = idx;
  renderChips(
    document.getElementById("material-subsections"),
    currentSubs.map(s => s.label),
    idx, "sub-idx", "material-sub-btn"
  );
  renderCurrentSubsection();
}

// loader: async () => tekst markdown
export async function showMaterial(loader) {
  currentLoader = loader;
  const header = document.getElementById("material-header");
  const body = document.getElementById("material-body");
  if (header) header.innerHTML = "";
  if (body) body.innerHTML = "";
  setLoading(true);

  try {
    currentData = await currentLoader();

    // Sekcje H1; pierwszy kawałek (tytuł dokumentu + cytat) to nagłówek materiału
    const chunks = splitByHeading(currentData, 1);
    let headerChunk = null;
    if (chunks.length && /PEŁNE ZESTAWIENIE/i.test(chunks[0].title || "")) {
      headerChunk = chunks.shift();
    } else if (chunks.length > 1 && chunks[0].lines.join("").trim() === "") {
      chunks.shift();
    }
    currentSections = chunks
      .filter(c => c.lines.join("").trim() !== "" || /TEORETYCZNA|ZADANIA/i.test(c.title || ""))
      .map(c => ({
        title: c.title || "",
        label: sectionLabel(c.title || ""),
        lines: c.lines,
        subs: []
      }));

    // Podsekcje H2 wewnątrz każdej sekcji (leniwie, tylko tytuły teraz)
    currentSections.forEach(sec => {
      const md = `# ${sec.title}\n${sec.lines.join("\n")}`;
      const parts = splitByHeading(md, 2);
      const preamble = parts.length && parts[0].title === null ? parts.shift() : null;
      sec.subs = parts
        .filter(s => s.lines.join("").trim() !== "")
        .map(s => ({ title: s.title, label: subsectionLabel(s.title), lines: s.lines }));
      // Treść między tytułem sekcji a pierwszą podsekcją doklej do pierwszej podsekcji
      // (bez powtarzania nagłówka H1 sekcji — tytuł jest już na chipie)
      if (preamble && sec.subs.length) {
        const pre = preamble.lines.filter(l => !/^#\s/.test(l));
        sec.subs[0].lines = [...pre, ...sec.subs[0].lines];
      }
    });

    if (header) {
      const quote = headerChunk ? headerChunk.lines.filter(l => l.trim().startsWith(">")) : [];
      header.innerHTML = quote.length
        ? quote.map(l => inlineMd(l.replace(/^\s*>\s?/, ""))).join("<br>")
        : "";
      header.style.display = header.innerHTML ? "block" : "none";
    }

    setLoading(false);
    selectSection(0);
  } catch (err) {
    setLoading(false);
    if (body) {
      body.innerHTML = `
        <div class="material-error">
          <p>Nie udało się wczytać materiału (${err.message}).</p>
          <button class="action-btn" onclick="location.reload()">Spróbuj ponownie</button>
        </div>
      `;
    }
  }
}
