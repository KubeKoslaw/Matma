// App.tsx - Powłoka aplikacji: nagłówek, routing ekranów, dolna nawigacja, toasty.
// Model routingowy i kształt historii (history.state = {dzial} itd.) utrzymany w parności
// z legacy/js/app.js — systemowy „wstecz" Androida (popstate) działa identycznie.

import { useCallback, useEffect, useState } from "react";
import { getDzial, materialHeaderTitle } from "./dzialy";
import type { Dzial, PanelId } from "./dzialy";
import type { MaterialTab } from "./data/types";
import { Icon } from "./components/icons";
import Hub from "./components/Hub";
import Materialy from "./components/Materialy";
import Placeholder from "./components/Placeholder";
import "./lib/celebrate"; // rejestruje window.launchConfetti / window.trainerSounds

type Route =
  | { screen: "hub" }
  | { screen: "material"; dzial: string; tab: MaterialTab }
  | { screen: "panel"; dzial: string; panel: PanelId };

const PANEL_VIEW_IDS: Record<PanelId, string> = {
  circle: "view-circle",
  table: "view-table",
  formulas: "view-formulas",
  "tasks-tryg": "view-tasks",
  "trainer-tryg": "view-trainer",
  "trainer-dzial": "view-dzial-trainer",
  calculators: "view-calculators"
};

function routeFromState(state: unknown): Route {
  const s = (state ?? {}) as { dzial?: string | null };
  if (!s.dzial) return { screen: "hub" };
  const dzial = getDzial(s.dzial);
  return dzial.start.kind === "material"
    ? { screen: "material", dzial: dzial.id, tab: "theory" }
    : { screen: "panel", dzial: dzial.id, panel: dzial.start.panel };
}

export default function App() {
  const [route, setRoute] = useState<Route>({ screen: "hub" });
  const [theme, setTheme] = useState<string>(() => document.documentElement.getAttribute("data-theme") || "dark");

  const dzial: Dzial | null = route.screen === "hub" ? null : getDzial(route.dzial);

  // Tytuł nagłówka (parity z legacy)
  let headerTitle = "Matematyka";
  if (dzial) {
    headerTitle = route.screen === "material" ? materialHeaderTitle(dzial) : dzial.title;
  }

  const showHub = useCallback((push = true) => {
    if (push) history.pushState({ dzial: null }, "");
    setRoute({ screen: "hub" });
  }, []);

  const openDzial = useCallback((id: string, push = true) => {
    const d = getDzial(id);
    if (push) history.pushState({ dzial: id }, "");
    setRoute(
      d.start.kind === "material"
        ? { screen: "material", dzial: id, tab: "theory" }
        : { screen: "panel", dzial: id, panel: d.start.panel }
    );
  }, []);

  // Przycisk „wstecz" w nagłówku + systemowy wstecz Androida (popstate)
  const onBackClick = useCallback(() => {
    if (route.screen === "hub") return;
    if (history.state && (history.state as { dzial?: string | null }).dzial !== undefined) {
      history.back();
    } else {
      showHub(true);
    }
  }, [route.screen, showHub]);

  useEffect(() => {
    const onPop = (e: PopStateEvent) => setRoute(routeFromState(e.state));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Klasy body sterują CSS-em (ukrycie nawigacji w hubie, przycisku wstecz itd.)
  useEffect(() => {
    document.body.classList.toggle("in-hub", route.screen === "hub");
    document.body.classList.toggle("in-material", route.screen === "material");
  }, [route]);

  // Każda zmiana ekranu = scroll do góry (parity z activateView)
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [route]);

  const toggleTheme = useCallback(() => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("trig_theme", next);
    setTheme(next);
    // Moduły z canvas/SVG słuchają tego zdarzenia i przemalowują rysunki
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme: next } }));
  }, []);

  const activeNavIdx = (() => {
    if (!dzial || route.screen === "hub") return -1;
    return dzial.nav.findIndex((t) =>
      t.target.kind === "material"
        ? route.screen === "material" && t.target.tab === route.tab
        : route.screen === "panel" && t.target.panel === route.panel
    );
  })();

  const onNavClick = useCallback(
    (idx: number) => {
      if (!dzial || route.screen === "hub") return;
      const t = dzial.nav[idx];
      if (!t) return;
      if (t.target.kind === "material") {
        // Zmiana zakładki materiału bez wpisu w historii (parity: materialShowTab)
        setRoute({ screen: "material", dzial: dzial.id, tab: t.target.tab });
      } else {
        setRoute({ screen: "panel", dzial: dzial.id, panel: t.target.panel });
      }
    },
    [dzial, route.screen]
  );

  return (
    <>
      <header id="app-header">
        <div className="header-brand">
          <div className="header-logo-icon">
            <span>∑</span>
          </div>
          <div className="header-title-wrap">
            <h1>
              <span id="header-title-text">{headerTitle}</span>
            </h1>
          </div>
        </div>
        <div className="header-actions">
          <button className="icon-btn" id="btn-back-hub" title="Powrót do menu działów" aria-label="Powrót do menu działów" onClick={onBackClick}>
            <Icon name="arrow-left" />
          </button>
          <button className="icon-btn" id="btn-toggle-theme" title="Zmień motyw jasny/ciemny" aria-label="Zmień motyw jasny/ciemny" onClick={toggleTheme}>
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
        </div>
      </header>

      <main id="app-main">
        {route.screen === "hub" && (
          <section id="view-hub" className="view-panel active">
            <Hub onOpen={openDzial} />
          </section>
        )}
        {route.screen === "material" && (
          <section id="view-materialy" className="view-panel active">
            <Materialy key={route.dzial} dzial={getDzial(route.dzial)} tab={route.tab} />
          </section>
        )}
        {route.screen === "panel" && (
          <section id={PANEL_VIEW_IDS[route.panel]} className="view-panel active">
            <Placeholder dzial={getDzial(route.dzial)} panel={route.panel} />
          </section>
        )}
      </main>

      {dzial && route.screen !== "hub" && (
        <nav id="bottom-nav">
          {dzial.nav.map((t, i) => (
            <button
              key={t.label}
              className={`nav-item ${i === activeNavIdx ? "active" : ""}`}
              onClick={() => onNavClick(i)}
            >
              <Icon name={t.icon} />
              <span>{t.label}</span>
            </button>
          ))}
        </nav>
      )}

      <div id="toast-container" role="status" aria-live="polite">Powiadomienie</div>
      <canvas id="confetti-canvas"></canvas>
    </>
  );
}
