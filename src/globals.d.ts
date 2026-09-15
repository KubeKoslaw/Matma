// globals.d.ts - Kontrakty window odziedziczone z legacy (celebrate / PR2 moduły)
interface Window {
  renderMath?: (target?: HTMLElement) => void;
  showToast?: (message: string, duration?: number) => void;
  launchConfetti?: () => void;
  trainerSounds?: {
    muted: boolean;
    playCorrect: () => void;
    playWrong: () => void;
    playLevelUp: () => void;
  };
}
