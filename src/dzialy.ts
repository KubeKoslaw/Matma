// dzialy.ts - JEDYNE miejsce rejestracji działów (zastępuje rozproszone listy
// z legacy: hub.js DZIALY + app.js DZIAL_START_VIEW/TITLES/NAV/MATERIALS).
// Dodanie działu = nowy wpis tutaj + plik markdown + wpis w scripts/build_materials.js.

import type { Material, MaterialTab } from "./data/types";

// Lazy chunk per dział — Vite rozbija dane materiałów na osobne pliki
const materialModules = import.meta.glob<{ default: Material }>(
  "./data/generated/material-*.json"
);

function materialLoader(id: string): () => Promise<Material> {
  const loader = materialModules[`./data/generated/material-${id}.json`];
  if (!loader) throw new Error(`Brak materiału dla działu: ${id}`);
  return async () => (await loader()).default;
}

// Panele pełnoekranowe poza materiałami (docelowo: porty modułów legacy).
// PR1: renderowane jako Placeholder; kolejne PR-y podmieniają na prawdziwe widoki.
export type PanelId =
  | "circle"
  | "table"
  | "formulas"
  | "tasks-tryg"
  | "trainer-tryg"
  | "trainer-dzial"
  | "calculators";

export type NavTarget =
  | { kind: "panel"; panel: PanelId }
  | { kind: "material"; tab: MaterialTab };

export interface NavTab {
  label: string;
  icon: string;
  target: NavTarget;
}

export interface Dzial {
  id: string;
  /** Tytuł w nagłówku aplikacji */
  title: string;
  /** Tytuł na karcie huba (historycznie różni się dla probabilitata) */
  hubTitle: string;
  desc: string;
  icon: string;
  /** Ekran startowy działu: panel albo materiał (zakładka theory) */
  start: { kind: "panel"; panel: PanelId } | { kind: "material" };
  nav: NavTab[];
}

const STANDARD_NAV: NavTab[] = [
  { label: "Teoria i wzory", icon: "book-open", target: { kind: "material", tab: "theory" } },
  { label: "Zadania", icon: "graduation-cap", target: { kind: "material", tab: "tasks" } },
  { label: "Trener", icon: "flame", target: { kind: "panel", panel: "trainer-dzial" } }
];

export const DZIALY: Dzial[] = [
  {
    id: "trygonometria",
    title: "Trygonometria",
    hubTitle: "Trygonometria",
    desc: "Okrąg • Tabela 0-360° • Teoria i wzory • Zadania • Trener",
    icon: "sigma",
    start: { kind: "panel", panel: "circle" },
    nav: [
      { label: "Okrąg", icon: "circle-dot", target: { kind: "panel", panel: "circle" } },
      { label: "Tabela 360°", icon: "table", target: { kind: "panel", panel: "table" } },
      { label: "Wzory", icon: "book-open", target: { kind: "panel", panel: "formulas" } },
      { label: "Teoria", icon: "graduation-cap", target: { kind: "material", tab: "theory" } },
      { label: "Zadania", icon: "list-checks", target: { kind: "panel", panel: "tasks-tryg" } },
      { label: "Trener", icon: "flame", target: { kind: "panel", panel: "trainer-tryg" } },
      { label: "Kalkulator", icon: "calculator", target: { kind: "panel", panel: "calculators" } }
    ]
  },
  {
    id: "wyrazenia",
    title: "Wyrażenia algebraiczne i równania",
    hubTitle: "Wyrażenia algebraiczne",
    desc: "Teoria, procenty, równania i nierówności — z zadaniami",
    icon: "variable",
    start: { kind: "material" },
    nav: STANDARD_NAV
  },
  {
    id: "funkcje",
    title: "Funkcje",
    hubTitle: "Funkcje",
    desc: "Teoria, wzory i zadania z rozwiązaniami",
    icon: "chart-line",
    start: { kind: "material" },
    nav: STANDARD_NAV
  },
  {
    id: "planimetria",
    title: "Planimetria",
    hubTitle: "Planimetria",
    desc: "Teoria, wzory i zadania z rozwiązaniami",
    icon: "shapes",
    start: { kind: "material" },
    nav: STANDARD_NAV
  },
  {
    id: "geometria-analityczna",
    title: "Geometria analityczna",
    hubTitle: "Geometria analityczna",
    desc: "Teoria, wzory i 129 zadań z rozwiązaniami",
    icon: "ruler",
    start: { kind: "material" },
    nav: STANDARD_NAV
  },
  {
    id: "ciagi",
    title: "Ciągi",
    hubTitle: "Ciągi",
    desc: "Teoria, wzory i zadania z rozwiązaniami",
    icon: "list-ordered",
    start: { kind: "material" },
    nav: STANDARD_NAV
  },
  {
    id: "probabilitata",
    title: "Prawdopodobieństwo i statystyka",
    hubTitle: "Probabilitata i statystyka",
    desc: "Teoria, wzory i zadania z rozwiązaniami",
    icon: "dice-5",
    start: { kind: "material" },
    nav: STANDARD_NAV
  }
];

export function getDzial(id: string): Dzial {
  const dzial = DZIALY.find((d) => d.id === id);
  if (!dzial) throw new Error(`Nieznany dział: ${id}`);
  return dzial;
}

export function loadMaterial(id: string): Promise<Material> {
  return materialLoader(id)();
}

/** Tytuł nagłówka na ekranie materiału (parity z legacy: „— zestawienie") */
export function materialHeaderTitle(dzial: Dzial): string {
  return dzial.start.kind === "material" ? `${dzial.title} — zestawienie` : dzial.title;
}
