#!/usr/bin/env node
// build_materials.js - Konwertuje materiały markdown Gemini na dane strukturalne:
//   teoria  -> karty (podział części teoretycznej na H2)
//   zadania -> obiekty {id, group, flaggedR, question, answer, solution}
// Wyjście: www/js/data/material-*.js (export default MATERIAL)
// Uruchamianie: npm run build:materials  (po każdej aktualizacji plików .md)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.resolve(ROOT, "android", "app", "src", "main", "assets", "www", "js", "data");

const ID_RE = /^[a-z0-9-]+$/; // whitelist identyfikatorów materiałów

const MATERIALS = [
  {
    id: "trygonometria",
    src: path.resolve(ROOT, "Trygonometria", "zadania_odpowiedzi_rozwiazania.md"),
    groups: [
      { id: "intro", match: /WPROWADZAJĄCE/i, label: "Wprowadzające" },
      { id: "m465505", match: /465|505/, label: "Maturalne 465–505" },
      { id: "m506546", match: /506|546/, label: "Maturalne 506–546" }
    ]
  },
  {
    id: "geometria-analityczna",
    src: path.resolve(ROOT, "Geometria Analiityczna", "zadania_odpowiedzi_rozwiazania.md"),
    groups: [
      { id: "intro", match: /WPROWADZAJĄCE/i, label: "Wprowadzające" },
      { id: "m202250", match: /202|250/, label: "Maturalne 202–250" },
      { id: "m251296", match: /251|296/, label: "Maturalne 251–296" }
    ]
  }
];

// Podział tekstu na kawałki po nagłówkach zadanego poziomu
function splitByHeading(text, level) {
  const re = new RegExp("^#{" + level + "}\\s+(.*)$");
  const chunks = [];
  let cur = { title: null, lines: [] };
  for (const line of text.split("\n")) {
    const m = line.match(re);
    if (m) {
      chunks.push(cur);
      cur = { title: m[1].trim(), lines: [] };
    } else {
      cur.lines.push(line);
    }
  }
  chunks.push(cur);
  return chunks;
}

const stripTrailingHr = (s) => s.replace(/\n-{3,}\s*$/, "").trim();

const LABEL_RE =
  /^\*\*\s*(Odpowiedź i Rozwiązanie krok po kroku|Rozwiązanie krok po kroku|Odpowiedź|Treść zadania)\s*:?\s*\*\*.*$/;

// Parsuje zadania (### Zadanie X) z kawałka tekstu
function parseTasks(text, groupId, out, usedIds) {
  const re = /^###\s+Zadanie\s+([0-9][0-9.]*)\s*(\[R\])?\s*.*$/gm;
  const marks = [];
  for (const m of text.matchAll(re)) {
    marks.push({ id: m[1], flaggedR: Boolean(m[2]), start: m.index, bodyStart: m.index + m[0].length });
  }
  marks.forEach((mk, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].start : text.length;
    const body = text.slice(mk.bodyStart, end);

    const labels = [];
    for (const line of body.split("\n")) {
      const lm = line.match(LABEL_RE);
      if (lm) labels.push({ key: lm[1], at: line });
    }
    let rest = body;
    const take = (label) => {
      const idx = labels.findIndex((l) => l.key === label);
      if (idx < 0) return null;
      const startLine = labels[idx].at;
      const endLine = idx + 1 < labels.length ? labels[idx + 1].at : null;
      const from = rest.indexOf(startLine);
      const to = endLine ? rest.indexOf(endLine, from) : rest.length;
      const seg = rest.slice(from + startLine.length, to === -1 ? rest.length : to);
      rest = rest.slice(0, from) + rest.slice(to === -1 ? rest.length : to);
      labels.splice(idx, 1);
      return stripTrailingHr(seg);
    };
    const combined = take("Odpowiedź i Rozwiązanie krok po kroku");
    const question = take("Treść zadania") ?? (stripTrailingHr(rest).trim() || "");
    const answer = combined === null ? take("Odpowiedź") : null;
    const solution = combined ?? take("Rozwiązanie krok po kroku");

    const key = groupId + "/" + mk.id;
    if (usedIds.has(key)) return;
    usedIds.add(key);
    out.push({
      id: mk.id,
      group: groupId,
      flaggedR: mk.flaggedR,
      question: question,
      answer: answer,
      solution: solution
    });
  });
}

function parseMaterial(md, groups) {
  const theory = [];
  const tasks = [];
  const usedIds = new Set();
  let group = groups[0].id;

  for (const chunk of splitByHeading(md, 1)) {
    const title = chunk.title || "";
    const body = chunk.lines.join("\n");

    if (/CZĘŚĆ TEORETYCZNA|PRZYDATNE WZORY/i.test(title)) {
      for (const c of splitByHeading(body, 2)) {
        if (c.title && c.lines.join("").trim() !== "") {
          theory.push({ title: c.title, md: stripTrailingHr(c.lines.join("\n")) });
        }
      }
      continue;
    }

    for (const g of groups) {
      if (g.match.test(title)) { group = g.id; break; }
    }
    parseTasks(body, group, tasks, usedIds);
  }
  return { theory: theory, tasks: tasks };
}

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const m of MATERIALS) {
  if (!ID_RE.test(m.id)) {
    console.error("[build:materials] Niedozwolony identyfikator: " + m.id);
    process.exitCode = 1;
    continue;
  }
  if (!fs.existsSync(m.src)) {
    console.error("[build:materials] BRAK pliku źródłowego: " + m.src);
    process.exitCode = 1;
    continue;
  }
  const md = fs.readFileSync(m.src, "utf8");
  const parsed = parseMaterial(md, m.groups);

  const byGroup = {};
  for (const t of parsed.tasks) byGroup[t.group] = (byGroup[t.group] || 0) + 1;
  console.log("[build:materials] " + m.id + ": teoria=" + parsed.theory.length + " kart, zadania=" + parsed.tasks.length + " " + JSON.stringify(byGroup));

  const outFile = path.resolve(OUT_DIR, "material-" + m.id + ".js");
  if (outFile !== OUT_DIR && !outFile.startsWith(OUT_DIR + path.sep)) {
    console.error("[build:materials] Ścieżka wyjściowa poza katalogiem: " + outFile);
    process.exitCode = 1;
    continue;
  }

  const out =
    "// AUTO-GENERATED by scripts/build_materials.js — nie edytuj ręcznie.\n" +
    "// Źródło: " + path.relative(ROOT, m.src) + " (odśwież: npm run build:materials)\n" +
    "const MATERIAL = " + JSON.stringify(parsed) + ";\n" +
    "export default MATERIAL;\n";
  fs.writeFileSync(outFile, out, "utf8");
  console.log("[build:materials] " + m.id + ": " + (out.length / 1024).toFixed(0) + " kB -> " + path.relative(ROOT, outFile));
}
