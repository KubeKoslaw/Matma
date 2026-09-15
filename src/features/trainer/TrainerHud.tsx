// TrainerHud.tsx - Wspólny HUD trenerów w stylu Duolingo: ranga + pasek XP
// (tier 1) oraz seria / XP / serduszka / opcjonalny przełącznik dźwięku (tier 2).
import { useState } from "react";
import { getCurrentLevel, getXpProgressText, getLevelProgressPercent } from "./levels";
import type { DuoStats } from "./stats";
import { trainerSounds } from "../../lib/sounds";
import { Icon } from "../../components/icons";

interface TrainerHudProps {
  stats: DuoStats;
  showSoundToggle?: boolean;
}

export default function TrainerHud({ stats, showSoundToggle = false }: TrainerHudProps) {
  const [muted, setMuted] = useState(trainerSounds.muted);
  const lvl = getCurrentLevel(stats.xp);

  const toggleSound = () => {
    trainerSounds.muted = !trainerSounds.muted;
    localStorage.setItem("trig_sound_muted", String(trainerSounds.muted));
    setMuted(trainerSounds.muted);
  };

  return (
    <div className="duo-compact-hud">
      <div className="hud-tier-rank">
        <img className="duo-avatar-chibi" src={`assets/emotes/${lvl.emote}`} alt="Mascot" />
        <div className="hud-rank-details">
          <div className="hud-rank-title-row">
            <span className="level-badge">
              <Icon name={lvl.icon} />
              <span>{lvl.name}</span>
            </span>
            <span className="level-xp-text">{getXpProgressText(stats.xp)}</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${getLevelProgressPercent(stats.xp)}%` }} />
          </div>
        </div>
      </div>

      <div className="hud-tier-stats">
        <div className="hud-stat streak-pill" title="Seria poprawnych odpowiedzi">
          <span className="flame-icon"><Icon name="flame" /></span>
          <span className="stat-num">{stats.streak}</span>
        </div>

        <div className="hud-stat xp-pill" title="Punkty XP">
          <span className="gem-icon"><Icon name="gem" /></span>
          <span className="stat-num">{stats.xp}</span>
        </div>

        <div className="hud-stat hearts-pill" title="Dostępne serduszka">
          <span className="heart-icon"><Icon name="heart" /></span>
          <span className="stat-num">{stats.hearts}</span>
        </div>

        {showSoundToggle && (
          <button
            className="sound-toggle-btn"
            aria-label="Włącz lub wyłącz dźwięk"
            title="Dźwięk"
            onClick={toggleSound}
          >
            <Icon name={muted ? "volume-x" : "volume-2"} />
          </button>
        )}
      </div>
    </div>
  );
}
