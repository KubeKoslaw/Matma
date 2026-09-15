// Placeholder.tsx - Panel zastępczy dla widoków portowanych w kolejnych PR-ach
// (okrąg, trenerzy, kalkulatory…). Zachowuje styl aplikacji; PR2/PR3 podmieniają.
import type { Dzial, PanelId } from "../dzialy";
import { Icon } from "./icons";

const PANEL_LABELS: Record<PanelId, string> = {
  circle: "Okrąg trygonometryczny",
  table: "Tabela wartości 0–360°",
  formulas: "Kompendium wzorów",
  "tasks-tryg": "Baza zadań",
  "trainer-tryg": "Trener trygonometrii",
  "trainer-dzial": "Trener działowy",
  calculators: "Kalkulatory i narzędzia"
};

export default function Placeholder({ dzial, panel }: { dzial: Dzial; panel: PanelId }) {
  return (
    <div className="view-placeholder">
      <div className="placeholder-card">
        <div className="placeholder-icon">
          <Icon name="construction" />
        </div>
        <h2>{PANEL_LABELS[panel]}</h2>
        <p>
          Ten moduł wraca w kolejnej aktualizacji — przechodzimy na nowy silnik aplikacji.
        </p>
        <p className="placeholder-dzial">{dzial.title}</p>
      </div>
    </div>
  );
}
