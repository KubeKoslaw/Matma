// stats.ts - Wspólny stan Duolingo dla wszystkich trenerów (klucz trig_duo_stats,
// port z legacy trainer.js/dzialTrainer.js). Jeden zapis — XP, seria i serduszka
// są wspólne dla trenera trygonometrii i trenerów działowych.

export interface DuoStats {
  xp: number;
  streak: number;
  maxStreak: number;
  hearts: number;
  totalAnswered: number;
  totalCorrect: number;
  unlockedStages: number[];
  stageStars: Record<string, number>;
  stageProgress: Record<string, number>;
  /** Stary zapis (przed migracją) — usuwany przy wczytaniu */
  completedStages?: number[];
}

const STORAGE_KEY = "trig_duo_stats";

export function loadStats(): DuoStats {
  const defaults: DuoStats = {
    xp: 0,
    streak: 0,
    maxStreak: 0,
    hearts: 5,
    totalAnswered: 0,
    totalCorrect: 0,
    unlockedStages: [1],
    stageStars: {},
    stageProgress: {}
  };
  let s = defaults;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      s = { ...defaults, ...JSON.parse(raw) };
    } catch {
      s = defaults;
    }
  }

  // Migracja starego zapisu completedStages: etapy stają się odblokowane,
  // a gwiazdki (1) dostają tylko te faktycznie ukończone (przed maksymalnym)
  if (Array.isArray(s.completedStages) && s.completedStages.length) {
    const maxId = Math.max(...s.completedStages);
    s.completedStages.forEach((id) => {
      if (!s.unlockedStages.includes(id)) s.unlockedStages.push(id);
    });
    for (let id = 1; id < maxId; id++) {
      if (s.stageStars[String(id)] === undefined) s.stageStars[String(id)] = 1;
    }
    delete s.completedStages;
  }
  return s;
}

export function saveStats(s: DuoStats) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* brak miejsca — ignorujemy */
  }
}
