// HtmlWithMath.tsx - Blok HTML + automatyczny render KaTeX przy montowaniu/zmianie.
import { useEffect, useRef } from "react";
import { renderMath } from "../lib/katex";

export default function HtmlWithMath({ html, className }: { html: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) renderMath(ref.current);
  }, [html]);
  return <div ref={ref} className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
