// materialProgress.ts - Wspólny dostęp do postępu materiałów (klucz trig_mat_<dzial>).
// Używany przez widok Materiałów oraz trener działowy (fiszka „Zgadłem" → ✓ w Zadaniach).

import type { Material } from "../data/types";

export interface MaterialProgress {
  theory: Record<string, boolean>;
  tasks: Record<string, boolean>;
}

export function loadMaterialProgress(dzialId: string): MaterialProgress {
  try {
    const raw = localStorage.getItem("trig_mat_" + dzialId);
    if (raw) {
      const p = JSON.parse(raw) as Partial<MaterialProgress>;
      return { theory: p.theory ?? {}, tasks: p.tasks ?? {} };
    }
  } catch {
    /* świeży start */
  }
  return { theory: {}, tasks: {} };
}

function saveMaterialProgress(dzialId: string, p: MaterialProgress) {
  try {
    localStorage.setItem("trig_mat_" + dzialId, JSON.stringify(p));
  } catch {
    /* brak miejsca — ignorujemy */
  }
}

/** Odhaczenie zadania z zewnątrz (np. trener działowy po samocenie „Zgadłem"). */
export function markTaskDone(dzialId: string, taskId: string): void {
  const p = loadMaterialProgress(dzialId);
  if (!p.tasks[taskId]) {
    p.tasks[taskId] = true;
    saveMaterialProgress(dzialId, p);
  }
}

/** Typ materiału używany też przez trener działowy (fiszki = zadania). */
export type { Material };
