// icons.ts - Mapa nazw ikon (stringi w rejestrze działów) na komponenty lucide-react.
// Jawne importy zamiast pełnego rejestru ikon — tree-shaking utrzymuje bundle małym.
import {
  ArrowLeft, BookOpen, Calculator, ChartLine, Check, ChevronDown, ChevronRight,
  CircleDot, Construction, Dice5, FileCheck, Flame, GraduationCap, Lightbulb,
  ListChecks, ListOrdered, Loader, Moon, Ruler, Search, Shapes, Sigma, Sun, Table
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const ICONS = {
  "arrow-left": ArrowLeft,
  "book-open": BookOpen,
  calculator: Calculator,
  "chart-line": ChartLine,
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  "circle-dot": CircleDot,
  construction: Construction,
  "dice-5": Dice5,
  "file-check": FileCheck,
  flame: Flame,
  "graduation-cap": GraduationCap,
  lightbulb: Lightbulb,
  "list-checks": ListChecks,
  "list-ordered": ListOrdered,
  loader: Loader,
  moon: Moon,
  ruler: Ruler,
  search: Search,
  shapes: Shapes,
  sigma: Sigma,
  sun: Sun,
  table: Table
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = ICONS[name as IconName] ?? Construction;
  return <Cmp className={className} />;
}
