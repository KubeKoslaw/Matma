import os
import re
import sys
from pathlib import Path

PROJECT_ROOT = Path("/home/kuba/Documents/Matma").resolve()

def safe_join(base, *parts):
    """Złącza ścieżkę pod katalogiem base i pilnuje, by wynik
    (po normalizacji segmentów względnych i dowiązań) nie wychodził
    poza katalog projektu."""
    path = os.path.normpath(os.path.join(base, *parts))
    if not (path == str(PROJECT_ROOT) or path.startswith(str(PROJECT_ROOT) + os.sep)):
        raise ValueError(f"Ścieżka poza katalogiem projektu: {path}")
    return path

def check_and_merge_trig():
    base = safe_join(str(PROJECT_ROOT), "Trygonometria")
    theory_file = safe_join(base, "teoria_wzory.md")
    parts = [
        safe_join(base, "part1_teoria_wprowadzajace.md"),
        safe_join(base, "part2_maturalne_465_505.md"),
        safe_join(base, "part3_maturalne_506_546.md"),
    ]
    target = safe_join(base, "zadania_odpowiedzi_rozwiazania.md")

    missing = [p for p in parts if not os.path.exists(p)]
    if missing:
        print(f"[Trygonometria] Still waiting for: {[os.path.basename(m) for m in missing]}")
        return False

    content = []
    content.append("# 10. TRYGONOMETRIA — PEŁNE ZESTAWIENIE ZADAŃ, ODPOWIEDZI I ROZWIĄZAŃ\n")
    content.append("> Kompletny spis teorii, przydatnych wzorów, zadań wprowadzających oraz zadań maturalnych wraz z oficjalnymi odpowiedziami i rozwiązaniami krok po kroku na podstawie podręcznika.\n\n---\n")

    if os.path.exists(theory_file):
        with open(theory_file, "r", encoding="utf-8") as f:
            content.append(f.read().strip() + "\n\n---\n")

    for i, p in enumerate(parts, 1):
        with open(p, "r", encoding="utf-8") as f:
            c = f.read().strip()
            content.append(f"\n<!-- SEKCJA ZADAŃ {i} -->\n" + c + "\n\n---\n")

    full_text = "\n".join(content)
    out = (PROJECT_ROOT / "Trygonometria" / "zadania_odpowiedzi_rozwiazania.md").resolve()
    if PROJECT_ROOT not in out.parents:
        raise ValueError(f"Ścieżka poza katalogiem projektu: {out}")
    out.write_text(full_text, encoding="utf-8")

    tasks_found = set(re.findall(r"### Zadanie\s+([0-9\.]+)", full_text))
    print(f"[Trygonometria] SUCCESS! Merged into {target}")
    print(f"[Trygonometria] Total size: {len(full_text):,} bytes, Total unique tasks identified: {len(tasks_found)}")
    return True

def check_and_merge_geom():
    base = safe_join(str(PROJECT_ROOT), "Geometria Analiityczna")
    theory_file = safe_join(base, "teoria_wzory.md")
    parts = [
        safe_join(base, "part1_teoria_wprowadzajace.md"),
        safe_join(base, "part2_maturalne_202_250.md"),
        safe_join(base, "part3_maturalne_251_296.md"),
    ]
    target = safe_join(base, "zadania_odpowiedzi_rozwiazania.md")

    missing = [p for p in parts if not os.path.exists(p)]
    if missing:
        print(f"[Geometria Analityczna] Still waiting for: {[os.path.basename(m) for m in missing]}")
        return False

    content = []
    content.append("# 2. GEOMETRIA ANALITYCZNA — PEŁNE ZESTAWIENIE ZADAŃ, ODPOWIEDZI I ROZWIĄZAŃ\n")
    content.append("> Kompletny spis teorii, przydatnych wzorów, zadań wprowadzających oraz zadań maturalnych wraz z oficjalnymi odpowiedziami i rozwiązaniami krok po kroku na podstawie podręcznika.\n\n---\n")

    if os.path.exists(theory_file):
        with open(theory_file, "r", encoding="utf-8") as f:
            content.append(f.read().strip() + "\n\n---\n")

    for i, p in enumerate(parts, 1):
        with open(p, "r", encoding="utf-8") as f:
            c = f.read().strip()
            content.append(f"\n<!-- SEKCJA ZADAŃ {i} -->\n" + c + "\n\n---\n")

    full_text = "\n".join(content)
    out = (PROJECT_ROOT / "Geometria Analiityczna" / "zadania_odpowiedzi_rozwiazania.md").resolve()
    if PROJECT_ROOT not in out.parents:
        raise ValueError(f"Ścieżka poza katalogiem projektu: {out}")
    out.write_text(full_text, encoding="utf-8")

    tasks_found = set(re.findall(r"### Zadanie\s+([0-9\.]+)", full_text))
    print(f"[Geometria Analityczna] SUCCESS! Merged into {target}")
    print(f"[Geometria Analityczna] Total size: {len(full_text):,} bytes, Total unique tasks identified: {len(tasks_found)}")
    return True

if __name__ == "__main__":
    t_ok = check_and_merge_trig()
    g_ok = check_and_merge_geom()
    if t_ok and g_ok:
        print("ALL COMPLETED!")
        sys.exit(0)
    else:
        sys.exit(1)
