// types.ts - Struktura danych materiałów (generowanych z markdownu przez build:materials)

export interface TheoryCard {
  title: string;
  md: string;
}

export interface MaterialTask {
  id: string;
  group: string;
  flaggedR: boolean;
  question: string;
  answer: string | null;
  solution: string | null;
}

export interface Material {
  theory: TheoryCard[];
  tasks: MaterialTask[];
}

export type MaterialTab = "theory" | "tasks";
