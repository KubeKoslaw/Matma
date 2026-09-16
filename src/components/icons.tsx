// icons.ts - Mapa nazw ikon (stringi w rejestrze działów) na komponenty lucide-react.
// Jawne importy zamiast pełnego rejestru ikon — tree-shaking utrzymuje bundle małym.
import {
  ArrowLeft, ArrowLeftRight, ArrowRight, ArrowRightLeft, BookOpen, Calculator,
  ChartLine, Check, ChevronDown, ChevronRight, CircleDot, Construction,
  Crosshair, Crown, Dice5, Eye, FileCheck, Flame, Gem, GraduationCap, Heart,
  Lightbulb, ListChecks, ListOrdered, Loader, Map, Moon, Ruler, Search,
  Shapes, Sigma, Sprout, Star, Sun, Table, Timer, Triangle, Variable, Volume2,
  VolumeX, X, Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const ICONS = {
  "arrow-left": ArrowLeft,
  "arrow-left-right": ArrowLeftRight,
  "arrow-right": ArrowRight,
  "arrow-right-left": ArrowRightLeft,
  "book-open": BookOpen,
  calculator: Calculator,
  "chart-line": ChartLine,
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  "circle-dot": CircleDot,
  construction: Construction,
  crosshair: Crosshair,
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
  star: Star,
  sun: Sun,
  table: Table,
  timer: Timer,
  triangle: Triangle,
  variable: Variable,
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
