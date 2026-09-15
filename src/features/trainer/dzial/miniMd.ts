// miniMd.ts - Mini-formatowanie treści zadań dla fiszek (port z legacy dzialTrainer.js):
// pogrubienia + nowa linia; matematyka ($…$ / $$…$$) schowana na placeholdery,
// żeby pogrubienia nie rozdzielały par dolarów (KaTeX wziąłby zdania jako wzór).

function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function miniMd(s: string): string {
  const math: string[] = [];
  const text = String(s).replace(/(\$\$[^$]*\$\$|\$[^$]*\$)/g, (m) => {
    math.push(m);
    return `\x00M${math.length - 1}\x00`;
  });
  const formatted = escapeHtml(text)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<strong>$1</strong>")
    .replace(/^[\*\-]\s+(.*)$/gm, "• $1")
    .replace(/\r?\n/g, "<br>");
  return formatted.replace(/\x00M(\d+)\x00/g, (_, i) => math[Number(i)]);
}
