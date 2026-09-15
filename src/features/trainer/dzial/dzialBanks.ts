// dzialBanks.ts - Rejestr banków pytań trenerów działowych. Pełny bank
// (wzory + generatory obliczeń) jest per dział — fiszki działają zawsze
// (korzystają z zadań materiału danego działu).

import type { QuizQuestion } from "../quizEngine";
import { genFormulaQuestion } from "./formulaBank";
import { CALC_GENS } from "./generators";

export interface DzialTrainerBank {
  genFormulaQuestion: () => QuizQuestion;
  generators: Array<() => QuizQuestion>;
}

const BANKS: Record<string, DzialTrainerBank> = {
  "geometria-analityczna": { genFormulaQuestion, generators: CALC_GENS }
};

/** Bank dla działu albo undefined, gdy dział ma na razie tylko tryb fiszek. */
export function getDzialTrainerBank(dzialId: string): DzialTrainerBank | undefined {
  return BANKS[dzialId];
}
