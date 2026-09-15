# 📐 Matematyka — zakres rozszerzony

> Interaktywna aplikacja do nauki matematyki w zakresie rozszerzonym: **6 działów** z teorią, wzorami i zadaniami z rozwiązaniami krok po kroku.

![Platform](https://img.shields.io/badge/platform-Android%207%2B%20%7C%20Web%20%7C%20PWA-3b82f6)
![Release](https://img.shields.io/badge/release-v1.2.0-f59e0b)
![Poziom](https://img.shields.io/badge/poziom-rozszerzony-ef4444)
![Build](https://img.shields.io/badge/React%2019%20%2B%20Vite%20%2B%20TypeScript-8b5cf6)

Aplikacja łączy **okrąg trygonometryczny z obsługą dotyku**, pełną **tabelę wartości 0–360°**, **kompendium wzorów** z weryfikatorem tożsamości, **bazy zadań** oraz **trener quiz w stylu Duolingo** — wszystko w jednym, offline-first, w pełni po polsku.

---

## 🖼 Ekrany

| Menu działów | Okrąg trygonometryczny | Trener quiz |
|:---:|:---:|:---:|
| ![Menu działów](docs/screenshots/hub.png) | ![Okrąg](docs/screenshots/okrag.png) | ![Trener](docs/screenshots/trener.png) |

| Tabela 0–360° (co 1°) | Motyw jasny |
|:---:|:---:|
| ![Tabela](docs/screenshots/tabela.png) | ![Motyw jasny](docs/screenshots/okrag_light.png) |

---

## ✨ Funkcje

### 🎯 Menu startowe (hub)
Sześć działów do wyboru, każdy z własnym zestawem podstron (teoria / wzory / zadania / trener):
- **Trygonometria** — okrąg, tabela 0–360°, wzory z weryfikatorem, 111 zadań, trener z 8-etapową ścieżką
- **Geometria analityczna** — teoria, wzory i 129 zadań z rozwiązaniami + dedykowany trener
- **Funkcje, Planimetria, Ciągi, Probabilitata i statystyka** — teoria i zestawy startowe (kolejne zadania w przygotowaniu)

### 📊 Okrąg trygonometryczny
- Płynne przeciąganie palcem z **przyciąganiem do kątów charakterystycznych** (±3°)
- Rzutowania sin/cos, styczna tg/ctg, wierszyk o ćwiartkach zmieniany dynamicznie
- Canvas rysowany w rozdzielczości **HiDPI** (ostry na każdym ekranie), paleta czytana z aktualnego motywu

### 📋 Tabela wartości 0–360°
- Tryb **„Dokładne"** — kąty charakterystyczne z pierwiastkami (KaTeX)
- Tryb **„Co 1°"** — 361 wierszy na czystych liczbach, render natychmiastowy
- Wyszukiwarka (`45`, `π/3`, `III`…), filtry ćwiartek, tapnięcie wiersza = kopiowanie wartości

### 📚 Wzory i zadania
- Kompendium wzorów z wyszukiwarką i kategoriami
- **Weryfikator tożsamości L = P** i kalkulator wzorów redukcyjnych z krokami
- Baza zadań z arkuszy z podpowiedziami i rozwiązaniami krok po kroku
- **Pełne zestawienia działów** (teoria + wzory + zadania z rozwiązaniami) wbudowane w aplikację — Trygonometria (111 zadań) i Geometria analityczna (129 zadań), z nawigacją po sekcjach

### 🔥 Trener 
- Trygonometria: 4 tryby — *Kąty 0–360°, Ćwiartki & znaki, Wzory redukcyjne, Zadania maturalne* + **Ścieżka 8 etapów** z progresją gwiazdek (2 poprawne odpowiedzi = ⭐)
- Geometria analityczna: *Wzory i własności, Obliczenia (generatory), Zadania (fiszki)* z samoceną synchronizującą ✓ z bazą zadań
- **XP, poziomy, serie (combo), serduszka** (wspólne dla trenerów), tryb na czas (30/15/8 s) i konfetti

### 🧮 Kalkulatory
- Trójkąt prostokątny, punkt P(a, b) w układzie współrzędnych, konwerter **stopnie ⇄ radiany** — wszystkie z żywą wizualizacją SVG

---

## 📥 Instalacja (Android)

1. Wejdź w [**Releases**](https://github.com/KubeKoslaw/Matma/releases)
2. Pobierz APK z najnowszej wersji
3. Zezwól na instalację z nieznanych źródeł i zainstaluj

> Wymagany **Android 7.0+** (minSdk 24). Aplikacja działa **w pełni offline** — wszystkie treści (w tym renderer wzorów KaTeX) są wbudowane.

---

## 🛠 Budowanie ze źródeł

```bash
npm install
npm run build        # build:materials + vite build → android/app/src/main/assets/www
cd android
./gradlew assembleDebug
# APK: android/app/build/outputs/apk/debug/app-debug.apk
```

**Web / PWA (tryb dev):**
```bash
npm run dev          # serwer Vite z HMR
```
Produkcyjny build web ląduje w `android/app/src/main/assets/www` — można go serwować dowolnym serwerem statycznym (np. `npx vite preview --outDir android/app/src/main/assets/www`).

---

## 🗂 Struktura projektu

```
├── index.html, vite.config.ts, tsconfig.json
├── public/                  # manifest PWA, ikona, service worker (generowany)
├── src/
│   ├── App.tsx              # powłoka: routing ekranów, nagłówek, nawigacja, motywy
│   ├── dzialy.ts            # rejestr działów (pojedyncze źródło prawdy)
│   ├── components/          # hub, materiały, okrąg, tabela, wzory, zadania, kalkulatory
│   ├── features/trainer/    # trenerzy (wspólny silnik + trygonometria + działowy)
│   ├── lib/                 # markdown, KaTeX, konfetti, dźwięki, toasty, motywy SVG
│   └── data/generated/      # dane materiałów z markdownu (npm run build:materials)
├── Trygonometria/, Geometria Analityczna/, …
│                            # źródła markdown działów (zadania_odpowiedzi_rozwiazania.md)
│                            # + zdjęcia referencyjne (poza gitem)
├── android/                 # natywna powłoka Android (WebView); www/ budowana w CI
├── scripts/                 # build_materials, konwersje danych, narzędzia
└── docs/screenshots/        # zrzuty ekranu do README
```

Warstwa Android to minimalny wrapper: `WebView` + `WebViewAssetLoader` (bezpieczny lokalny origin), insety systemowe przekazywane do strony jako zmienne CSS (`--safe-top` / `--safe-bottom` / `--kb-bottom`). Build Vite trafia wprost do `android/app/src/main/assets/www` (katalog poza gitem, budowany w CI).

---

## 🧰 Technologie

| Warstwa | Technologia |
|---|---|
| UI | React 19 + Vite 7 + TypeScript (strict) |
| Wzory | [KaTeX](https://katex.org) (npm) |
| Ikony | [Lucide](https://lucide.dev) (lucide-react) |
| Grafika interaktywna | Canvas 2D (okrąg), SVG (kalkulatory) |
| PWA | vite-plugin-pwa (precache z haszami, autoUpdate) |
| Android | WebView + WebViewAssetLoader, Gradle Kotlin DSL, minSdk 24 / target 36 |

---

## 🗺 Roadmapa

- [x] Trygonometria (kompletna)
- [x] Geometria analityczna — teoria, wzory i 129 zadań z rozwiązaniami
- [x] Funkcje, Planimetria, Ciągi, Probabilitata i statystyka — teoria i zestawy startowe
- [ ] Rozbudowa zestawów zadań dla pozostałych działów
- [ ] Trenerzy dla kolejnych działów
- [ ] Tryb nauki pytaniami otwartymi z oceną kroków

---

*© 2026 KubeKoslaw — projekt edukacyjny: matematyka w zakresie rozszerzonym.*
