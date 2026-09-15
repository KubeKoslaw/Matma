// Hub.tsx - Menu startowe: wybór działu (port legacy/js/modules/hub.js na React).
// Lista działów pochodzi z rejestru src/dzialy.ts — pojedyncze źródło prawdy.
import { DZIALY } from "../dzialy";
import type { Dzial } from "../dzialy";
import { Icon } from "./icons";

export default function Hub({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <>
      <div className="hub-header">
        <h2>Matematyka</h2>
        <p>Wybierz dział, aby rozpocząć naukę</p>
      </div>

      <div className="hub-list">
        {DZIALY.map((d) => (
          <HubCard key={d.id} dzial={d} onOpen={onOpen} />
        ))}
      </div>
    </>
  );
}

function HubCard({ dzial, onOpen }: { dzial: Dzial; onOpen: (id: string) => void }) {
  const open = () => onOpen(dzial.id);
  return (
    <div
      className="hub-card available"
      data-dzial={dzial.id}
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      }}
    >
      <div className="hub-icon"><Icon name={dzial.icon} /></div>
      <div className="hub-info">
        <h3>{dzial.hubTitle}</h3>
        <p>{dzial.desc}</p>
      </div>
      <Icon name="chevron-right" className="hub-chevron" />
    </div>
  );
}
