// icons.ts - Mapa nazw ikon (stringi w rejestrze działów) na komponenty lucide-react.
// Jawne importy zamiast pełnego rejestru ikon — tree-shaking utrzymuje bundle małym.
import {
  ArrowLeft, ArrowRight, BookOpen, Calculator, ChartLine, Check, ChevronDown,
  ChevronRight, CircleDot, Construction, Crown, Dice5, Eye, FileCheck, Flame,
  Gem, GraduationCap, Heart, Lightbulb, ListChecks, ListOrdered, Loader, Map,
  Moon, Ruler, Search, Shapes, Sigma, Sprout, Sun, Table, Timer, Volume2,
  VolumeX, X, Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const ICONS = {
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "book-open": BookOpen,
  calculator: Calculator,
  "chart-line": ChartLine,
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  "circle-dot": CircleDot,
  construction: Construction,
  crown: Crown,
  "dice-5": Dice5,
  eye: Eye,
  "file-check": FileCheck,
  flame: Flame,
  gem: Gem,
  "graduation-cap": GraduationCap,
  heart: Heart,
  lightbulb: Lightbulb,
  "list-checks": ListChecks,
  "list-ordered": ListOrdered,
  loader: Loader,
  map: Map,
  moon: Moon,
  ruler: Ruler,
  search: Search,
  shapes: Shapes,
  sigma: Sigma,
  sprout: Sprout,
  sun: Sun,
  table: Table,
  timer: Timer,
  "volume-2": Volume2,
  "volume-x": VolumeX,
  x: X,
  zap: Zap
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = ICONS[name as IconName] ?? Construction;
  return <Cmp className={className} />;
}
