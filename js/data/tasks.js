// tasks.js - Baza zadań i pełnych rozwiązań ze zdjęć podręcznika "10. Trygonometria"

export const TASK_CATEGORIES = [
  { id: "all", name: "Wszystkie zadania" },
  { id: "intro_angles", name: "Stopnie i radiany (10.1-10.2)" },
  { id: "intro_triangle", name: "Trójkąt i punkt P(a,b) (10.3-10.5)" },
  { id: "intro_signs", name: "Ćwiartki i tożsamości (10.6-10.9)" },
  { id: "intro_calc", name: "Wyznaczanie wartości (10.10-10.14)" },
  { id: "intro_plots", name: "Wykresy i własności (10.15-10.16)" },
  { id: "intro_reduction", name: "Wzory redukcyjne (10.17-10.19)" },
  { id: "intro_sum_double", name: "Suma kątów i kąt 2x (10.20-10.23)" },
  { id: "intro_equations", name: "Równania i parametr (10.24-10.29)" },
  { id: "matura_identities", name: "Matura: Tożsamości (465-495)" },
  { id: "matura_plots", name: "Matura: Własności i zbiory (496-500)" },
  { id: "matura_equations", name: "Matura: Równania (501-528)" },
  { id: "matura_param", name: "Matura: Parametr m (529-535)" },
  { id: "matura_challenge", name: "Zadania różne & Egzaminy (536-546)" }
];

export const TASKS = [
  // --- ZADANIA WPROWADZAJĄCE (10.1 - 10.29) ---
  {
    id: "10.1",
    section: "Zadania wprowadzające",
    category: "intro_angles",
    title: "Zadanie 10.1 - Zamiana stopni na radiany",
    difficulty: "Podstawowy",
    examType: "Matura podstawowa",
    question: "Podane miary stopniowe kątów wyraź w radianach:\na) 360°\nb) 90°\nc) 18° [R]\nd) 5°",
    hint: "Skorzystaj ze wzoru: \\alpha_R = \\frac{\\alpha_S}{180^\\circ} \\cdot \\pi.",
    answer: "a) 2π,  b) π/2,  c) π/10,  d) π/36",
    solution: `**Rozwiązanie krok po kroku:**
Korzystamy ze wzoru: $\\alpha_R = \\frac{\\alpha_S}{180^\\circ} \\cdot \\pi$.

a) Dla $360^\\circ$:
$$\\alpha_R = \\frac{360^\\circ}{180^\\circ} \\cdot \\pi = 2\\pi$$

b) Dla $90^\\circ$:
$$\\alpha_R = \\frac{90^\\circ}{180^\\circ} \\cdot \\pi = \\frac{\\pi}{2}$$

c) Dla $18^\\circ$:
$$\\alpha_R = \\frac{18^\\circ}{180^\\circ} \\cdot \\pi = \\frac{1}{10}\\pi = \\frac{\\pi}{10}$$

d) Dla $5^\\circ$:
$$\\alpha_R = \\frac{5^\\circ}{180^\\circ} \\cdot \\pi = \\frac{5}{180}\\pi = \\frac{\\pi}{36}$$`
  },
  {
    id: "10.2",
    section: "Zadania wprowadzające",
    category: "intro_angles",
    title: "Zadanie 10.2 - Zamiana radianów na stopnie",
    difficulty: "Podstawowy",
    examType: "Matura podstawowa",
    question: "Podane miary łukowe kątów wyraź w stopniach:\na) 3π\nb) 0,75π [R]\nc) π/3\nd) 5π/6\ne) π/18 [R]",
    hint: "Skorzystaj ze wzoru: \\alpha_S = \\frac{\\alpha_R}{\\pi} \\cdot 180^\\circ, lub podstaw za π wartość 180°.",
    answer: "a) 540°,  b) 135°,  c) 60°,  d) 150°,  e) 10°",
    solution: `**Rozwiązanie krok po kroku:**
Podstawiamy $\\pi = 180^\\circ$:

a) $3\\pi = 3 \\cdot 180^\\circ = 540^\\circ$
b) $0{,}75\\pi = \\frac{3}{4} \\cdot 180^\\circ = 3 \\cdot 45^\\circ = 135^\\circ$
c) $\\frac{\\pi}{3} = \\frac{180^\\circ}{3} = 60^\\circ$
d) $\\frac{5\\pi}{6} = 5 \\cdot \\frac{180^\\circ}{6} = 5 \\cdot 30^\\circ = 150^\\circ$
e) $\\frac{\\pi}{18} = \\frac{180^\\circ}{18} = 10^\\circ$`
  },
  {
    id: "10.3",
    section: "Zadania wprowadzające",
    category: "intro_triangle",
    title: "Zadanie 10.3 - Trójkąt prostokątny ABC",
    difficulty: "Podstawowy",
    examType: "Matura podstawowa",
    question: "Przyprostokątne AB i AC trójkąta prostokątnego ABC mają długości równe odpowiednio 5 i 3. Oblicz:\na) tg kąta ABC\nb) tg kąta ACB\nc) sin kąta ABC",
    hint: "Z twierdzenia Pitagorasa: |BC|² = |AB|² + |AC|² = 5² + 3² = 34.",
    answer: "a) tg(∡ABC) = 3/5,  b) tg(∡ACB) = 5/3,  c) sin(∡ABC) = 3/√34",
    solution: `**Rozwiązanie:**
Mamy przyprostokątne: $|AB| = 5$, $|AC| = 3$. Kąt prosty znajduje się przy wierzchołku $A$.

a) $\\text{tg}(\\sphericalangle ABC) = \\frac{|AC|}{|AB|} = \\frac{3}{5} = 0{,}6$
b) $\\text{tg}(\\sphericalangle ACB) = \\frac{|AB|}{|AC|} = \\frac{5}{3}$
c) Z twierdzenia Pitagorasa przeciwprostokątna wynosi:
$$|BC|^2 = 5^2 + 3^2 = 25 + 9 = 34 \\implies |BC| = \\sqrt{34}$$
Stąd:
$$\\sin(\\sphericalangle ABC) = \\frac{|AC|}{|BC|} = \\frac{3}{\\sqrt{34}} = \\frac{3\\sqrt{34}}{34}$$`
  },
  {
    id: "10.4",
    section: "Zadania wprowadzające",
    category: "intro_triangle",
    title: "Zadanie 10.4 - Kąt skierowany i punkt A(x, y)",
    difficulty: "Podstawowy / Rozszerzony",
    examType: "Matura podstawa / rozszerzenie",
    question: "Półprosta p ma początek w punkcie (0, 0), przechodzi przez punkt A i jest ramieniem wypukłego kąta α, którego drugie ramię zawiera się w dodatniej półosi OX.\na) Oblicz tg α, jeżeli A=(3, 7);\nb) Oblicz cos α, jeżeli A=(12, 5);\nc) Oblicz tg α, jeżeli A=(-4, 3) [R];\nd) Oblicz sin α i cos α, jeżeli A=(24, -7).",
    hint: "Z definicji: tg α = y/x, cos α = x/r, sin α = y/r, gdzie r = √(x² + y²).",
    answer: "a) tg α = 7/3,  b) cos α = 12/13,  c) tg α = -3/4,  d) sin α = -7/25, cos α = 24/25",
    solution: `**Rozwiązanie:**
Punkt $A(x, y)$, promień wodzący $c = \\sqrt{x^2 + y^2}$.

a) Dla $A(3, 7)$:
$$\\text{tg}\\alpha = \\frac{y}{x} = \\frac{7}{3}$$

b) Dla $A(12, 5)$:
$$c = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$$
$$\\cos\\alpha = \\frac{x}{c} = \\frac{12}{13}$$

c) Dla $A(-4, 3)$:
$$\\text{tg}\\alpha = \\frac{y}{x} = \\frac{3}{-4} = -\\frac{3}{4}$$

d) Dla $A(24, -7)$:
$$c = \\sqrt{24^2 + (-7)^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25$$
$$\\sin\\alpha = \\frac{y}{c} = \\frac{-7}{25} = -\\frac{7}{25}, \\qquad \\cos\\alpha = \\frac{x}{c} = \\frac{24}{25}$$`
  },
  {
    id: "10.5",
    section: "Zadania wprowadzające",
    category: "intro_triangle",
    title: "Zadanie 10.5 - Kąt w II ćwiartce na prostej y = -2/3 x",
    difficulty: "Rozszerzony",
    examType: "Matura rozszerzona",
    question: "Jedno ramię kąta α zawiera się w dodatniej półosi OX, a drugie leży w II ćwiartce układu współrzędnych i zawiera się w prostej o równaniu y = -2/3 x.\na) Podaj wartość tangensa kąta α.\nb) Oblicz sin α i cos α, wykorzystując definicje funkcji sinus i kosinus.",
    hint: "Współczynnik kierunkowy prostej y = ax to a = tg α. Wybierz punkt np. x = -3, y = 2.",
    answer: "a) tg α = -2/3,  b) sin α = 2/√13, cos α = -3/√13",
    solution: `**Rozwiązanie:**
a) Ponieważ prosta przechodzi przez początek układu, współczynnik kierunkowy prostej jest równy tangensowi kąta nachylenia:
$$\\text{tg}\\alpha = -\\frac{2}{3}$$

b) Wybieramy dowolny punkt na tej prostej leżący w II ćwiartce (czyli $x < 0, y > 0$). Niech $x = -3$, wtedy $y = -\\frac{2}{3}(-3) = 2$. Punkt $P(-3, 2)$.
Odległość od początku układu:
$$|OP| = \\sqrt{(-3)^2 + 2^2} = \\sqrt{9 + 4} = \\sqrt{13}$$
Z definicji:
$$\\sin\\alpha = \\frac{y}{|OP|} = \\frac{2}{\\sqrt{13}} = \\frac{2\\sqrt{13}}{13}$$
$$\\cos\\alpha = \\frac{x}{|OP|} = \\frac{-3}{\\sqrt{13}} = -\\frac{3\\sqrt{13}}{13}$$`
  },
  {
    id: "10.6",
    section: "Zadania wprowadzające",
    category: "intro_signs",
    title: "Zadanie 10.6 - Znaki funkcji w ćwiartkach",
    difficulty: "Podstawowy",
    examType: "Matura podstawowa",
    question: "Korzystając z definicji funkcji trygonometrycznych, określ znak każdej z liczb: sin α, cos α, tg α, jeżeli:\na) α ∈ (0; π/2)\nb) α ∈ (2; 3) [R]\nc) α ∈ (π; 3/2 π)\nd) α ∈ (5; 6)",
    hint: "Pamiętaj, że π ≈ 3.14, π/2 ≈ 1.57, 3/2 π ≈ 4.71, 2π ≈ 6.28.",
    answer: "a) +, +, +  b) +, -, -  c) -, -, +  d) -, +, -",
    solution: `**Rozwiązanie:**
Pamiętamy wierszyk:
- I ćwiartka: same plusy
- II ćwiartka: tylko sinus (+)
- III ćwiartka: tangens i cotangens (+)
- IV ćwiartka: tylko cosinus (+)

a) $\\alpha \\in (0, \\frac{\\pi}{2})$ -> I ćwiartka:
$\\sin\\alpha > 0 (+), \\quad \\cos\\alpha > 0 (+), \\quad \\text{tg}\\alpha > 0 (+)$

b) $\\alpha \\in (2, 3)$. Ponieważ $\\frac{\\pi}{2} \\approx 1{,}57$ oraz $\\pi \\approx 3{,}14$, to kąt $\\alpha$ leży w II ćwiartce:
$\\sin\\alpha > 0 (+), \\quad \\cos\\alpha < 0 (-), \\quad \\text{tg}\\alpha < 0 (-)$

c) $\\alpha \\in (\\pi, \\frac{3}{2}\\pi)$ -> III ćwiartka:
$\\sin\\alpha < 0 (-), \\quad \\cos\\alpha < 0 (-), \\quad \\text{tg}\\alpha > 0 (+)$

d) $\\alpha \\in (5, 6)$. Ponieważ $\\frac{3}{2}\\pi \\approx 4{,}71$ oraz $2\\pi \\approx 6{,}28$, kąt leży w IV ćwiartce:
$\\sin\\alpha < 0 (-), \\quad \\cos\\alpha > 0 (+), \\quad \\text{tg}\\alpha < 0 (-)$`
  },
  {
    id: "10.7",
    section: "Zadania wprowadzające",
    category: "intro_signs",
    title: "Zadanie 10.7 - Upraszczanie wyrażeń trygonometrycznych",
    difficulty: "Rozszerzony",
    examType: "Matura rozszerzona",
    question: "Sprowadź podane wyrażenie do najprostszej postaci:\na) tg α · cos α\nb) (1 + sin β)(1 - sin β)\nc) cos² x · sin x + sin³ x\nd) sin β / sin(90° - β)\ne) (1 + tg x) / (sin x + cos x)\nf) sin⁴ y + sin² y · cos² y + cos² y\ng) (1 - 2cos² x) / (2sin² x - 1)\nh) sin² x / (1 - cos x)",
    hint: "Stosuj: sin²x + cos²x = 1, tg x = sin x / cos x, wzory skróconego mnożenia.",
    answer: "a) sin α,  b) cos² β,  c) sin x,  d) tg β,  e) 1/cos x,  f) 1,  g) 1,  h) 1 + cos x",
    solution: `**Rozwiązania podpunktów:**
a) $\\text{tg}\\alpha \\cdot \\cos\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} \\cdot \\cos\\alpha = \\sin\\alpha$

b) $(1 + \\sin\\beta)(1 - \\sin\\beta) = 1 - \\sin^2\\beta = \\cos^2\\beta$

c) $\\cos^2 x \\sin x + \\sin^3 x = \\sin x(\\cos^2 x + \\sin^2 x) = \\sin x \\cdot 1 = \\sin x$

d) Ze wzorów redukcyjnych $\\sin(90^\\circ - \\beta) = \\cos\\beta$, więc:
$$\\frac{\\sin\\beta}{\\sin(90^\\circ - \\beta)} = \\frac{\\sin\\beta}{\\cos\\beta} = \\text{tg}\\beta$$

e) Przekształcamy licznik:
$$1 + \\text{tg} x = 1 + \\frac{\\sin x}{\\cos x} = \\frac{\\cos x + \\sin x}{\\cos x}$$
Dzielimy przez mianownik $(\\sin x + \\cos x)$:
$$\\frac{\\frac{\\sin x + \\cos x}{\\cos x}}{\\sin x + \\cos x} = \\frac{1}{\\cos x}$$

f) Wyłączamy $\\sin^2 y$ przed nawias z pierwszych dwóch składników:
$$\\sin^4 y + \\sin^2 y\\cos^2 y + \\cos^2 y = \\sin^2 y(\\sin^2 y + \\cos^2 y) + \\cos^2 y = \\sin^2 y \\cdot 1 + \\cos^2 y = 1$$

g) Korzystamy z jedynki: $1 = \\sin^2 x + \\cos^2 x$:
$$1 - 2\\cos^2 x = \\sin^2 x + \\cos^2 x - 2\\cos^2 x = \\sin^2 x - \\cos^2 x$$
$$2\\sin^2 x - 1 = 2\\sin^2 x - (\\sin^2 x + \\cos^2 x) = \\sin^2 x - \\cos^2 x$$
Zatem:
$$\\frac{1 - 2\\cos^2 x}{2\\sin^2 x - 1} = \\frac{\\sin^2 x - \\cos^2 x}{\\sin^2 x - \\cos^2 x} = 1$$

h) $\\sin^2 x = 1 - \\cos^2 x = (1 - \\cos x)(1 + \\cos x)$:
$$\\frac{\\sin^2 x}{1 - \\cos x} = \\frac{(1 - \\cos x)(1 + \\cos x)}{1 - \\cos x} = 1 + \\cos x$$`
  },
  {
    id: "10.8",
    section: "Zadania wprowadzające",
    category: "intro_signs",
    title: "Zadanie 10.8 - Zapis w najprostszej postaci (kąty)",
    difficulty: "Podstawowy / Rozszerzony",
    examType: "Matura podstawa",
    question: "Zapisz daną liczbę w prostszej postaci:\na) (cos 111°)² + (sin 111°)²\nb) cos 34° - sin 56°\nc) sin 55° · cos 55° · tg 55°\nd) (1 - cos² 77°) / cos² 77°",
    hint: "a) jedynka trygonometryczna, b) sin 56° = cos(90°-56°) = cos 34°.",
    answer: "a) 1,  b) 0,  c) sin² 55°,  d) tg² 77°",
    solution: `**Rozwiązanie:**
a) Z jedynki trygonometrycznej $\\sin^2\\alpha + \\cos^2\\alpha = 1$ dla każdego $\\alpha$, stąd dla $\\alpha = 111^\\circ$:
$$(\\cos 111^\\circ)^2 + (\\sin 111^\\circ)^2 = 1$$

b) Kąty dopełniające: $\\sin 56^\\circ = \\cos(90^\\circ - 56^\\circ) = \\cos 34^\\circ$:
$$\\cos 34^\\circ - \\sin 56^\\circ = \\cos 34^\\circ - \\cos 34^\\circ = 0$$

c) $\\text{tg} 55^\\circ = \\frac{\\sin 55^\\circ}{\\cos 55^\\circ}$:
$$\\sin 55^\\circ \\cdot \\cos 55^\\circ \\cdot \\frac{\\sin 55^\\circ}{\\cos 55^\\circ} = \\sin^2 55^\\circ$$

d) Z jedynki $1 - \\cos^2 77^\\circ = \\sin^2 77^\\circ$:
$$\\frac{1 - \\cos^2 77^\\circ}{\\cos^2 77^\\circ} = \\frac{\\sin^2 77^\\circ}{\\cos^2 77^\\circ} = \\left(\\frac{\\sin 77^\\circ}{\\cos 77^\\circ}\\right)^2 = \\text{tg}^2 77^\\circ$$`
  },
  {
    id: "10.9",
    section: "Zadania wprowadzające",
    category: "intro_signs",
    title: "Zadanie 10.9 - Dowodzenie tożsamości trygonometrycznych",
    difficulty: "Rozszerzony",
    examType: "Matura rozszerzona",
    question: "Uzasadnij, że dla każdego kąta ostrego α zachodzi równość:\na) (sin α + cos α)² + (sin α - cos α)² = 2\nb) (1 + tg² α) · cos² α = 1\nc) (cos² α - 1) / (sin² α - 1) = tg² α\nd) tg α / (1 + tg² α) = sin α · cos α\ne) cos⁴ α - sin⁴ α = cos² α - sin² α\nf) sin α / (1 + cos α) + (1 + cos α) / sin α = 2 / sin α",
    hint: "Podnieś do kwadratu w a); w b) i d) rozpisz tg α = sin α / cos α; w c) użyj jedynki trygonometrycznej.",
    answer: "Tożsamości są prawdziwe dla każdego kąta ostrego α.",
    solution: `**Uzasadnienia:**
a) Rozwijamy kwadraty:
$$L = (\\sin^2\\alpha + 2\\sin\\alpha\\cos\\alpha + \\cos^2\\alpha) + (\\sin^2\\alpha - 2\\sin\\alpha\\cos\\alpha + \\cos^2\\alpha)$$
Wyrazy mieszane redukują się:
$$L = 2(\\sin^2\\alpha + \\cos^2\\alpha) = 2 \\cdot 1 = 2 = P$$

b) Rozpisujemy tangens:
$$L = \\left(1 + \\frac{\\sin^2\\alpha}{\\cos^2\\alpha}\\right)\\cos^2\\alpha = \\cos^2\\alpha + \\sin^2\\alpha = 1 = P$$

c) Z jedynki trygonometrycznej $\\cos^2\\alpha - 1 = -\\sin^2\\alpha$ oraz $\\sin^2\\alpha - 1 = -\\cos^2\\alpha$:
$$L = \\frac{-\\sin^2\\alpha}{-\\cos^2\\alpha} = \\frac{\\sin^2\\alpha}{\\cos^2\\alpha} = \\text{tg}^2\\alpha = P$$

d) Mianownik: $1 + \\text{tg}^2\\alpha = 1 + \\frac{\\sin^2\\alpha}{\\cos^2\\alpha} = \\frac{\\cos^2\\alpha + \\sin^2\\alpha}{\\cos^2\\alpha} = \\frac{1}{\\cos^2\\alpha}$.
Zatem:
$$L = \\frac{\\frac{\\sin\\alpha}{\\cos\\alpha}}{\\frac{1}{\\cos^2\\alpha}} = \\frac{\\sin\\alpha}{\\cos\\alpha} \\cdot \\cos^2\\alpha = \\sin\\alpha\\cos\\alpha = P$$

e) Różnica kwadratów: $a^2 - b^2 = (a-b)(a+b)$:
$$\\cos^4\\alpha - \\sin^4\\alpha = (\\cos^2\\alpha - \\sin^2\\alpha)(\\cos^2\\alpha + \\sin^2\\alpha) = (\\cos^2\\alpha - \\sin^2\\alpha) \\cdot 1 = \\cos^2\\alpha - \\sin^2\\alpha$$

f) Wspólny mianownik $\\sin\\alpha(1 + \\cos\\alpha)$:
$$L = \\frac{\\sin^2\\alpha + (1 + \\cos\\alpha)^2}{\\sin\\alpha(1 + \\cos\\alpha)} = \\frac{\\sin^2\\alpha + 1 + 2\\cos\\alpha + \\cos^2\\alpha}{\\sin\\alpha(1 + \\cos\\alpha)} = \\frac{2 + 2\\cos\\alpha}{\\sin\\alpha(1 + \\cos\\alpha)} = \\frac{2(1 + \\cos\\alpha)}{\\sin\\alpha(1 + \\cos\\alpha)} = \\frac{2}{\\sin\\alpha} = P$$`
  },
  {
    id: "10.10",
    section: "Zadania wprowadzające",
    category: "intro_calc",
    title: "Zadanie 10.10 - Obliczanie pozostałych funkcji kąta ostrego",
    difficulty: "Podstawowy",
    examType: "Matura podstawowa",
    question: "Oblicz wartości pozostałych funkcji trygonometrycznych kąta ostrego α, wiedząc, że:\na) sin α = 0,6 [R]\nb) cos α = √2 / 3",
    hint: "I SPOSÓB: Z jedynki trygonometrycznej sin²α + cos²α = 1. II SPOSÓB: Z trójkąta prostokątnego o bokach 3, 4, 5.",
    answer: "a) cos α = 4/5 = 0,8, tg α = 3/4 = 0,75;  b) sin α = √7 / 3, tg α = √14 / 2",
    solution: `**Rozwiązanie:**
Kąt $\\alpha$ jest ostry, więc wszystkie wartości są dodatnie.

a) $\\sin\\alpha = 0{,}6 = \\frac{3}{5}$.
Z jedynki trygonometrycznej:
$$\\cos^2\\alpha = 1 - (0{,}6)^2 = 1 - 0{,}36 = 0{,}64 \\implies \\cos\\alpha = 0{,}8 = \\frac{4}{5}$$
Tangens:
$$\\text{tg}\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{0{,}6}{0{,}8} = \\frac{3}{4} = 0{,}75$$

b) $\\cos\\alpha = \\frac{\\sqrt{2}}{3}$.
$$\\sin^2\\alpha = 1 - \\left(\\frac{\\sqrt{2}}{3}\\right)^2 = 1 - \\frac{2}{9} = \\frac{7}{9} \\implies \\sin\\alpha = \\frac{\\sqrt{7}}{3}$$
Tangens:
$$\\text{tg}\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{\\frac{\\sqrt{7}}{3}}{\\frac{\\sqrt{2}}{3}} = \\frac{\\sqrt{7}}{\\sqrt{2}} = \\frac{\\sqrt{14}}{2}$$`
  },
  {
    id: "10.11",
    section: "Zadania wprowadzające",
    category: "intro_calc",
    title: "Zadanie 10.11 - Obliczanie sinusa i cosinusa ze znajomości tangensa",
    difficulty: "Podstawowy / Rozszerzony",
    examType: "Matura podstawa",
    question: "Oblicz sinus i kosinus kąta ostrego α, wiedząc, że:\na) tg α = 5/12 [W]\nb) tg α = √15 [W]",
    hint: "Przyprostokątne trójkąta to 5 i 12, przeciwprostokątna c = √(5² + 12²) = 13.",
    answer: "a) sin α = 5/13, cos α = 12/13;  b) sin α = √15 / 4, cos α = 1/4",
    solution: `**Rozwiązanie:**
a) Dla kąta ostrego budujemy trójkąt prostokątny o przyprostokątnych $a = 12$, $b = 5$:
$$c^2 = 5^2 + 12^2 = 25 + 144 = 169 \\implies c = 13$$
Stąd:
$$\\sin\\alpha = \\frac{5}{13}, \\qquad \\cos\\alpha = \\frac{12}{13}$$

b) $\\text{tg}\\alpha = \\sqrt{15} = \\frac{\\sqrt{15}}{1}$.
Przyprostokątne $b = \\sqrt{15}$, $a = 1$:
$$c^2 = (\\sqrt{15})^2 + 1^2 = 15 + 1 = 16 \\implies c = 4$$
Stąd:
$$\\sin\\alpha = \\frac{\\sqrt{15}}{4}, \\qquad \\cos\\alpha = \\frac{1}{4}$$`
  },
  {
    id: "10.12",
    section: "Zadania wprowadzające",
    category: "intro_calc",
    title: "Zadanie 10.12 - Funkcje w II ćwiartce",
    difficulty: "Rozszerzony",
    examType: "Matura rozszerzona",
    question: "Dany jest kąt o mierze α taki, że sin α = √2 / 3 i 90° < α < 180°. Oblicz cos α i tg α.",
    hint: "W II ćwiartce cosinus i tangens są UJEMNE!",
    answer: "cos α = -√7 / 3,  tg α = -√14 / 7",
    solution: `**Rozwiązanie:**
Kąt $\\alpha \\in (90^\\circ, 180^\\circ)$ (II ćwiartka), więc $\\cos\\alpha < 0$ oraz $\\text{tg}\\alpha < 0$.
Z jedynki trygonometrycznej:
$$\\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - \\left(\\frac{\\sqrt{2}}{3}\\right)^2 = 1 - \\frac{2}{9} = \\frac{7}{9}$$
Ponieważ $\\alpha$ leży w II ćwiartce:
$$\\cos\\alpha = -\\frac{\\sqrt{7}}{3}$$
Tangens:
$$\\text{tg}\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{\\frac{\\sqrt{2}}{3}}{-\\frac{\\sqrt{7}}{3}} = -\\frac{\\sqrt{2}}{\\sqrt{7}} = -\\frac{\\sqrt{14}}{7}$$`
  },
  {
    id: "10.13",
    section: "Zadania wprowadzające",
    category: "intro_calc",
    title: "Zadanie 10.13 - Równanie prostej z sinusem kąta nachylenia",
    difficulty: "Rozszerzony",
    examType: "Matura rozszerzona",
    question: "Prosta k przechodzi przez punkt P=(14, 18) i jest nachylona do osi Ox pod kątem ostrym, którego sinus jest równy 24/25. Znajdź równanie prostej k.",
    hint: "Współczynnik kierunkowy prostej y = ax + b to a = tg α. Wyznacz cos α, a potem a = tg α = sin α / cos α.",
    answer: "y = (24/7)x - 30",
    solution: `**Rozwiązanie:**
Kąt $\\alpha$ jest ostry. Znamy $\\sin\\alpha = \\frac{24}{25}$.
Obliczamy $\\cos\\alpha$:
$$\\cos^2\\alpha = 1 - \\left(\\frac{24}{25}\\right)^2 = 1 - \\frac{576}{625} = \\frac{49}{625} \\implies \\cos\\alpha = \\frac{7}{25}$$
Współczynnik kierunkowy prostej $k$:
$$a = \\text{tg}\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{\\frac{24}{25}}{\\frac{7}{25}} = \\frac{24}{7}$$
Równanie prostej ma postać $y = \\frac{24}{7}x + b$.
Punkt $P(14, 18)$ należy do prostej:
$$18 = \\frac{24}{7} \\cdot 14 + b \\implies 18 = 48 + b \\implies b = 18 - 48 = -30$$
Zatem równanie prostej $k$:
$$y = \\frac{24}{7}x - 30$$`
  },
  {
    id: "10.17",
    section: "Zadania wprowadzające",
    category: "intro_reduction",
    title: "Zadanie 10.17 - Wartości funkcji dla kątów 15° i 105°",
    difficulty: "Rozszerzony",
    examType: "Matura rozszerzona",
    question: "Oblicz:\na) sin 15° [R]\nb) cos 105°\nc) tg 105°",
    hint: "15° = 45° - 30° lub 60° - 45°; 105° = 60° + 45° lub 90° + 15°.",
    answer: "a) (√6 - √2)/4,  b) -(√6 - √2)/4,  c) -(2 + √3)",
    solution: `**Rozwiązanie:**
a) $\\sin 15^\\circ = \\sin(45^\\circ - 30^\\circ) = \\sin 45^\\circ\\cos 30^\\circ - \\cos 45^\\circ\\sin 30^\\circ$:
$$= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$$

b) $\\cos 105^\\circ = \\cos(90^\\circ + 15^\\circ) = -\\sin 15^\\circ$:
$$= -\\frac{\\sqrt{6} - \\sqrt{2}}{4}$$

c) $\\text{tg} 105^\\circ = \\text{tg}(60^\\circ + 45^\\circ) = \\frac{\\text{tg} 60^\\circ + \\text{tg} 45^\\circ}{1 - \\text{tg} 60^\\circ\\text{tg} 45^\\circ} = \\frac{\\sqrt{3} + 1}{1 - \\sqrt{3}}$:
Usuwamy niewymierność mnożąc przez $(1 + \\sqrt{3})$:
$$= \\frac{(\\sqrt{3} + 1)^2}{1 - 3} = \\frac{3 + 2\\sqrt{3} + 1}{-2} = \\frac{4 + 2\\sqrt{3}}{-2} = -(2 + \\sqrt{3})$$`
  },
  {
    id: "10.19",
    section: "Zadania wprowadzające",
    category: "intro_reduction",
    title: "Zadanie 10.19 - Obliczanie wartości z redukcją i okresowością",
    difficulty: "Rozszerzony",
    examType: "Matura rozszerzona",
    question: "Oblicz:\na) cos 720° [R]\nb) sin 150° [R]\nc) tg(3/4 π)\nd) tg 330°\ne) cos(4/3 π)\nf) sin(-120°)\ng) cos(-1110°) [R]\nh) sin² 10° + sin² 80° [R]",
    hint: "Wykorzystaj okresowość (k·360° dla sin/cos, k·180° dla tg) i parzystość cosinusa.",
    answer: "a) 1,  b) 1/2,  c) -1,  d) -√3/3,  e) -1/2,  f) -√3/2,  g) √3/2,  h) 1",
    solution: `**Rozwiązanie:**
a) $\\cos 720^\\circ = \\cos(2 \\cdot 360^\\circ) = \\cos 0^\\circ = 1$
b) $\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$
c) $\\text{tg}\\left(\\frac{3}{4}\\pi\\right) = \\text{tg}\\left(\\pi - \\frac{\\pi}{4}\\right) = -\\text{tg}\\frac{\\pi}{4} = -1$
d) $\\text{tg} 330^\\circ = \\text{tg}(360^\\circ - 30^\\circ) = -\\text{tg} 30^\\circ = -\\frac{\\sqrt{3}}{3}$
e) $\\cos\\left(\\frac{4}{3}\\pi\\right) = \\cos\\left(\\pi + \\frac{\\pi}{3}\\right) = -\\cos\\frac{\\pi}{3} = -\\frac{1}{2}$
f) $\\sin(-120^\\circ) = -\\sin 120^\\circ = -\\sin(180^\\circ - 60^\\circ) = -\\sin 60^\\circ = -\\frac{\\sqrt{3}}{2}$
g) $\\cos(-1110^\\circ) = \\cos(1110^\\circ) = \\cos(3 \\cdot 360^\\circ + 30^\\circ) = \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$
h) $\\sin 80^\\circ = \\cos(90^\\circ - 80^\\circ) = \\cos 10^\\circ$, zatem:
$$\\sin^2 10^\\circ + \\sin^2 80^\\circ = \\sin^2 10^\\circ + \\cos^2 10^\\circ = 1$$`
  },
  {
    id: "10.20",
    section: "Zadania wprowadzające",
    category: "intro_sum_double",
    title: "Zadanie 10.20 - Zastosowanie wzorów podwojonego argumentu",
    difficulty: "Rozszerzony",
    examType: "Matura rozszerzona",
    question: "Oblicz:\na) cos 2x wiedząc, że cos x = 1/4 [R]\nb) sin 2x wiedząc, że sin x = 24/25 i x ∈ (π/2, π)\nc) tg 3x wiedząc, że tg x = 3 [R]",
    hint: "a) cos 2x = 2cos²x - 1; b) x jest w II ćwiartce, więc cos x < 0; c) tg 2x = 2tg x / (1 - tg²x), a potem tg(2x + x).",
    answer: "a) -7/8,  b) -336/625,  c) 9/13",
    solution: `**Rozwiązanie:**
a) Stosujemy wzór $\\cos 2x = 2\\cos^2 x - 1$:
$$\\cos 2x = 2 \\cdot \\left(\\frac{1}{4}\\right)^2 - 1 = 2 \\cdot \\frac{1}{16} - 1 = \\frac{1}{8} - 1 = -\\frac{7}{8}$$

b) Skoro $x \\in (\\frac{\\pi}{2}, \\pi)$, to $\\cos x < 0$:
$$\\cos x = -\\sqrt{1 - \\sin^2 x} = -\\sqrt{1 - \\left(\\frac{24}{25}\\right)^2} = -\\sqrt{\\frac{49}{625}} = -\\frac{7}{25}$$
Wtedy:
$$\\sin 2x = 2\\sin x\\cos x = 2 \\cdot \\frac{24}{25} \\cdot \\left(-\\frac{7}{25}\\right) = -\\frac{336}{625}$$

c) Najpierw $\\text{tg} 2x$:
$$\\text{tg} 2x = \\frac{2\\text{tg} x}{1 - \\text{tg}^2 x} = \\frac{2 \\cdot 3}{1 - 3^2} = \\frac{6}{-8} = -\\frac{3}{4}$$
Teraz tangens sumy kątów $\\text{tg} 3x = \\text{tg}(2x + x)$:
$$\\text{tg} 3x = \\frac{\\text{tg} 2x + \\text{tg} x}{1 - \\text{tg} 2x\\text{tg} x} = \\frac{-\\frac{3}{4} + 3}{1 - \\left(-\\frac{3}{4}\\right) \\cdot 3} = \\frac{\\frac{9}{4}}{1 + \\frac{9}{4}} = \\frac{\\frac{9}{4}}{\\frac{13}{4}} = \\frac{9}{13}$$`
  },
  {
    id: "10.24",
    section: "Zadania wprowadzające",
    category: "intro_equations",
    title: "Zadanie 10.24 - Podstawowe równania trygonometryczne",
    difficulty: "Podstawowy / Rozszerzony",
    examType: "Matura podstawa / rozszerzenie",
    question: "Rozwiąż równanie:\na) sin x = 0\nb) cos x = -1\nc) tg x = 1\nd) sin x = 1/2\ne) cos x = √2 / 2\nf) sin x = -√3 / 2\ng) cos x = -1/2",
    hint: "Pamiętaj o okresowości: 2kπ dla sin/cos, kπ dla tg.",
    answer: "a) x = kπ; b) x = π + 2kπ; c) x = π/4 + kπ; d) x = π/6 + 2kπ lub x = 5π/6 + 2kπ; e) x = ±π/4 + 2kπ; f) x = -π/3 + 2kπ lub x = 4π/3 + 2kπ; g) x = ±2π/3 + 2kπ",
    solution: `**Rozwiązanie (k ∈ Z):**
a) $\\sin x = 0 \\iff x = k\\pi$
b) $\\cos x = -1 \\iff x = \\pi + 2k\\pi$
c) $\\text{tg} x = 1 \\iff x = \\frac{\\pi}{4} + k\\pi$
d) $\\sin x = \\frac{1}{2} \\iff x = \\frac{\\pi}{6} + 2k\\pi \\quad \\lor \\quad x = \\pi - \\frac{\\pi}{6} + 2k\\pi = \\frac{5\\pi}{6} + 2k\\pi$
e) $\\cos x = \\frac{\\sqrt{2}}{2} \\iff x = \\frac{\\pi}{4} + 2k\\pi \\quad \\lor \\quad x = -\\frac{\\pi}{4} + 2k\\pi$
f) $\\sin x = -\\frac{\\sqrt{3}}{2} \\iff x = -\\frac{\\pi}{3} + 2k\\pi \\quad \\lor \\quad x = \\pi - \\left(-\\frac{\\pi}{3}\\right) + 2k\\pi = \\frac{4\\pi}{3} + 2k\\pi$
g) $\\cos x = -\\frac{1}{2} \\iff x = \\pi - \\frac{\\pi}{3} + 2k\\pi = \\frac{2\\pi}{3} + 2k\\pi \\quad \\lor \\quad x = -\\frac{2\\pi}{3} + 2k\\pi$`
  },
  {
    id: "10.29",
    section: "Zadania wprowadzające",
    category: "intro_equations",
    title: "Zadanie 10.29 - Równania z parametrem m",
    difficulty: "Rozszerzony",
    examType: "Matura rozszerzona",
    question: "Zbadaj, dla jakich wartości parametru m istnieją rozwiązania równania:\na) cos x = m [R]\nb) sin(4x + 1) = 2m + 3\nc) √3 sin x + cos x = m",
    hint: "Zbiór wartości funkcji sin x i cos x to [-1, 1]. W c) podziel obustronnie przez 2 i zwiń w sinus sumy.",
    answer: "a) m ∈ [-1, 1],  b) m ∈ [-2, -1],  c) m ∈ [-2, 2]",
    solution: `**Rozwiązanie:**
a) Zbiorem wartości funkcji $f(x) = \\cos x$ jest przedział $[-1, 1]$. Zatem równanie ma rozwiązanie wtedy i tylko wtedy, gdy:
$$m \\in [-1, 1]$$

b) Zbiorem wartości funkcji $y = \\sin(4x + 1)$ jest $[-1, 1]$. Stąd:
$$-1 \\le 2m + 3 \\le 1$$
Odejmujemy 3:
$$-4 \\le 2m \\le -2$$
Dzielimy przez 2:
$$-2 \\le m \\le -1 \\iff m \\in [-2, -1]$$

c) Dzielimy lewą stronę przez 2 (lub wyłączamy 2):
$$\\sqrt{3}\\sin x + \\cos x = 2\\left(\\frac{\\sqrt{3}}{2}\\sin x + \\frac{1}{2}\\cos x\\right) = 2(\\sin x\\cos 30^\\circ + \\cos x\\sin 30^\\circ) = 2\\sin(x + 30^\\circ)$$
Zbiorem wartości $2\\sin(x + 30^\\circ)$ jest przedział $[-2, 2]$. Zatem:
$$m \\in [-2, 2]$$`
  },

  // --- ZADANIA MATURALNE ZE ZDJĘĆ (465 - 546) ---
  {
    id: "465",
    section: "Zadania maturalne",
    category: "matura_identities",
    title: "Zadanie 465 - Związki między funkcjami i potęgi",
    difficulty: "Rozszerzony",
    examType: "Zadanie maturalne",
    question: "Uzasadnij, że liczby 3^{3sin 3°}, 3^{√(1 - cos² 3°)}, (3^{cos 3°})^{tg 3°} są równe.",
    hint: "Uprość wykładniki: √(1 - cos² 3°) = sin 3° oraz cos 3° · tg 3° = sin 3°.",
    answer: "Wszystkie liczby są równe 3^{sin 3°}.",
    solution: `**Rozwiązanie:**
Badamy wykładniki potęg o podstawie 3 dla kąta $\\alpha = 3^\\circ$:

1. Druga liczba:
$$3^{\\sqrt{1 - \\cos^2 3^\\circ}} = 3^{\\sqrt{\\sin^2 3^\\circ}} = 3^{|\\sin 3^\\circ|}$$
Ponieważ $3^\\circ$ jest kątem I ćwiartki, $\\sin 3^\\circ > 0$, zatem $|\\sin 3^\\circ| = \\sin 3^\\circ$.
Liczba ta wynosi $3^{\\sin 3^\\circ}$.

2. Trzecia liczba:
$$(3^{\\cos 3^\\circ})^{\\text{tg} 3^\\circ} = 3^{\\cos 3^\\circ \\cdot \\text{tg} 3^\\circ} = 3^{\\cos 3^\\circ \\cdot \\frac{\\sin 3^\\circ}{\\cos 3^\\circ}} = 3^{\\sin 3^\\circ}$$

Wszystkie trzy liczby w treści podręcznika sprowadzają się do tej samej wartości $3^{\\sin 3^\\circ}$, co dowodzi ich równości.`
  },
  {
    id: "467",
    section: "Zadania maturalne",
    category: "matura_identities",
    title: "Zadanie 467 - Wartość ułamka (CKE sierpień 2013)",
    difficulty: "Podstawowy",
    examType: "CKE matura podstawowa",
    question: "(0-2 pkt) Kąt α jest ostry i tg α = 2. Oblicz wartość wyrażenia:\n(sin α - cos α) / (sin α + cos α)",
    hint: "Podziel licznik i mianownik przez cos α, aby otrzymać wyrażenie zależne tylko od tg α.",
    answer: "1/3",
    solution: `**Rozwiązanie krok po kroku:**
Dzielimy licznik i mianownik przez $\\cos\\alpha \\neq 0$:
$$\\frac{\\sin\\alpha - \\cos\\alpha}{\\sin\\alpha + \\cos\\alpha} = \\frac{\\frac{\\sin\\alpha}{\\cos\\alpha} - 1}{\\frac{\\sin\\alpha}{\\cos\\alpha} + 1} = \\frac{\\text{tg}\\alpha - 1}{\\text{tg}\\alpha + 1}$$
Podstawiamy $\\text{tg}\\alpha = 2$:
$$= \\frac{2 - 1}{2 + 1} = \\frac{1}{3}$$`
  },
  {
    id: "468",
    section: "Zadania maturalne",
    category: "matura_identities",
    title: "Zadanie 468 - Obliczanie tg α z równania kwadratowego",
    difficulty: "Rozszerzony",
    examType: "Zadanie maturalne [R]",
    question: "Wiedząc, że 4sin² α - 3cos² α = 3 i α jest kątem ostrym, oblicz tg α.",
    hint: "Podstaw 3 = 3(sin²α + cos²α) lub zamień cos²α na 1 - sin²α.",
    answer: "tg α = √6",
    solution: `**Rozwiązanie:**
Korzystając z jedynki trygonometrycznej, prawą stronę zapisujemy jako $3(\\sin^2\\alpha + \\cos^2\\alpha)$:
$$4\\sin^2\\alpha - 3\\cos^2\\alpha = 3(\\sin^2\\alpha + \\cos^2\\alpha)$$
$$4\\sin^2\\alpha - 3\\cos^2\\alpha = 3\\sin^2\\alpha + 3\\cos^2\\alpha$$
Porządkujemy wyrazy:
$$\\sin^2\\alpha = 6\\cos^2\\alpha$$
Dzielimy obustronnie przez $\\cos^2\\alpha > 0$:
$$\\frac{\\sin^2\\alpha}{\\cos^2\\alpha} = 6 \\iff \\text{tg}^2\\alpha = 6$$
Ponieważ $\\alpha$ jest kątem ostrym, $\\text{tg}\\alpha > 0$, zatem:
$$\\text{tg}\\alpha = \\sqrt{6}$$`
  },
  {
    id: "471",
    section: "Zadania maturalne",
    category: "matura_identities",
    title: "Zadanie 471 - Wyrażenie tg α + 1/tg α (CKE sierpień 2015)",
    difficulty: "Podstawowy",
    examType: "CKE matura podstawowa",
    question: "(0-2 pkt) Kąt α jest ostry i spełnia równość tg α + 1/tg α = 7/2. Oblicz wartość wyrażenia sin α · cos α.",
    hint: "tg α + 1/tg α = sin/cos + cos/sin = (sin² + cos²) / (sin·cos) = 1 / (sin·cos).",
    answer: "2/7",
    solution: `**Rozwiązanie:**
Rozpisujemy lewą stronę:
$$\\text{tg}\\alpha + \\frac{1}{\\text{tg}\\alpha} = \\frac{\\sin\\alpha}{\\cos\\alpha} + \\frac{\\cos\\alpha}{\\sin\\alpha} = \\frac{\\sin^2\\alpha + \\cos^2\\alpha}{\\sin\\alpha\\cos\\alpha} = \\frac{1}{\\sin\\alpha\\cos\\alpha}$$
Z treści zadania:
$$\\frac{1}{\\sin\\alpha\\cos\\alpha} = \\frac{7}{2}$$
Odwracając ułamek:
$$\\sin\\alpha\\cos\\alpha = \\frac{2}{7}$$`
  },
  {
    id: "484",
    section: "Zadania maturalne",
    category: "matura_identities",
    title: "Zadanie 484 - Wartość (sin α - cos α)² (CKE czerwiec 2017)",
    difficulty: "Podstawowy",
    examType: "CKE matura podstawa",
    question: "(0-2 pkt) Kąt α jest ostry i zachodzi równość sin α + cos α = √7 / 2. Oblicz wartość wyrażenia (sin α - cos α)².",
    hint: "Podnieś obie strony danej równości do kwadratu, aby wyznaczyć 2 sin α cos α.",
    answer: "0,25 = 1/4",
    solution: `**Rozwiązanie:**
Podnosimy obustronnie równość $\\sin\\alpha + \\cos\\alpha = \\frac{\\sqrt{7}}{2}$ do kwadratu:
$$(\\sin\\alpha + \\cos\\alpha)^2 = \\left(\\frac{\\sqrt{7}}{2}\\right)^2$$
$$\\sin^2\\alpha + 2\\sin\\alpha\\cos\\alpha + \\cos^2\\alpha = \\frac{7}{4}$$
$$1 + 2\\sin\\alpha\\cos\\alpha = \\frac{7}{4} \\implies 2\\sin\\alpha\\cos\\alpha = \\frac{7}{4} - 1 = \\frac{3}{4}$$
Teraz obliczamy szukane wyrażenie:
$$(\\sin\\alpha - \\cos\\alpha)^2 = \\sin^2\\alpha - 2\\sin\\alpha\\cos\\alpha + \\cos^2\\alpha = 1 - 2\\sin\\alpha\\cos\\alpha$$
$$= 1 - \\frac{3}{4} = \\frac{1}{4} = 0{,}25$$`
  },
  {
    id: "485",
    section: "Zadania maturalne",
    category: "matura_identities",
    title: "Zadanie 485 - Wartość |cos α - sin α| (CKE czerwiec 2012)",
    difficulty: "Rozszerzony",
    examType: "CKE matura rozszerzona",
    question: "(0-5 pkt) Kąt α jest taki, że cos α + sin α = 4/3. Oblicz wartość wyrażenia |cos α - sin α|.",
    hint: "Oblicz najpierw kwadrat wyrażenia (|cos α - sin α|)² = 1 - 2 sin α cos α.",
    answer: "√2 / 3",
    solution: `**Rozwiązanie:**
Kwadratujemy sumę:
$$(\\cos\\alpha + \\sin\\alpha)^2 = \\left(\\frac{4}{3}\\right)^2$$
$$1 + 2\\sin\\alpha\\cos\\alpha = \\frac{16}{9} \\implies 2\\sin\\alpha\\cos\\alpha = \\frac{16}{9} - 1 = \\frac{7}{9}$$
Obliczamy kwadrat modułu różnicy:
$$|\\cos\\alpha - \\sin\\alpha|^2 = \\cos^2\\alpha - 2\\sin\\alpha\\cos\\alpha + \\sin^2\\alpha = 1 - 2\\sin\\alpha\\cos\\alpha = 1 - \\frac{7}{9} = \\frac{2}{9}$$
Pierwiastkujemy:
$$|\\cos\\alpha - \\sin\\alpha| = \\sqrt{\\frac{2}{9}} = \\frac{\\sqrt{2}}{3}$$`
  },
  {
    id: "487",
    section: "Zadania maturalne",
    category: "matura_identities",
    title: "Zadanie 487 - Tożsamość sin⁴ α + cos⁴ α (CKE czerwiec 2013)",
    difficulty: "Rozszerzony",
    examType: "CKE matura rozszerzona",
    question: "(0-3 pkt) Wykaż, że dla dowolnego kąta α prawdziwa jest tożsamość:\nsin⁴ α + cos⁴ α = (1 + cos² 2α) / 2",
    hint: "Zapisz sin⁴α + cos⁴α = (sin²α + cos²α)² - 2 sin²α cos²α = 1 - (1/2) sin² 2α, a następnie sin² 2α = 1 - cos² 2α.",
    answer: "Tożsamość udowodniona.",
    solution: `**Dowód:**
Lewa strona:
$$L = \\sin^4\\alpha + \\cos^4\\alpha = (\\sin^2\\alpha + \\cos^2\\alpha)^2 - 2\\sin^2\\alpha\\cos^2\\alpha$$
Ponieważ $\\sin^2\\alpha + \\cos^2\\alpha = 1$ oraz $2\\sin\\alpha\\cos\\alpha = \\sin 2\\alpha$, to:
$$L = 1^2 - 2\\left(\\frac{\\sin 2\\alpha}{2}\\right)^2 = 1 - 2 \\cdot \\frac{\\sin^2 2\\alpha}{4} = 1 - \\frac{1}{2}\\sin^2 2\\alpha$$
Podstawiamy $\\sin^2 2\\alpha = 1 - \\cos^2 2\\alpha$:
$$L = 1 - \\frac{1}{2}(1 - \\cos^2 2\\alpha) = 1 - \\frac{1}{2} + \\frac{1}{2}\\cos^2 2\\alpha = \\frac{1}{2} + \\frac{1}{2}\\cos^2 2\\alpha = \\frac{1 + \\cos^2 2\\alpha}{2} = P$$
Co kończy dowód.`
  },
  {
    id: "489",
    section: "Zadania maturalne",
    category: "matura_identities",
    title: "Zadanie 489 - Tożsamość z 6. potęgami (CKE Informator)",
    difficulty: "Rozszerzony",
    examType: "CKE matura rozszerzona",
    question: "(0-3 pkt) Wykaż, że dla każdego kąta α prawdziwa jest równość:\n4(sin⁶ α + cos⁶ α) = 1 + 3cos² 2α",
    hint: "Użyj wzoru a³ + b³ = (a+b)(a² - ab + b²) dla a = sin²α, b = cos²α.",
    answer: "Tożsamość udowodniona.",
    solution: `**Dowód:**
Rozpisujemy sumę sześcianów:
$$\\sin^6\\alpha + \\cos^6\\alpha = (\\sin^2\\alpha + \\cos^2\\alpha)(\\sin^4\\alpha - \\sin^2\\alpha\\cos^2\\alpha + \\cos^4\\alpha)$$
Ponieważ $\\sin^2\\alpha + \\cos^2\\alpha = 1$:
$$= (\\sin^2\\alpha + \\cos^2\\alpha)^2 - 3\\sin^2\\alpha\\cos^2\\alpha = 1 - 3\\left(\\frac{\\sin 2\\alpha}{2}\\right)^2 = 1 - \\frac{3}{4}\\sin^2 2\\alpha$$
Mnożymy przez 4:
$$L = 4\\left(1 - \\frac{3}{4}\\sin^2 2\\alpha\\right) = 4 - 3\\sin^2 2\\alpha$$
Stosujemy $\\sin^2 2\\alpha = 1 - \\cos^2 2\\alpha$:
$$= 4 - 3(1 - \\cos^2 2\\alpha) = 4 - 3 + 3\\cos^2 2\\alpha = 1 + 3\\cos^2 2\\alpha = P$$
Równość została wykazana.`
  },
  {
    id: "501",
    section: "Zadania maturalne",
    category: "matura_equations",
    title: "Zadanie 501 - Równanie cos 2x + 3cos x = -2 (CKE maj 2017)",
    difficulty: "Rozszerzony",
    examType: "CKE matura rozszerzona",
    question: "(0-4 pkt) Rozwiąż równanie cos 2x + 3cos x = -2 w przedziale [0, 2π].",
    hint: "Podstaw cos 2x = 2cos²x - 1, otrzymując równanie kwadratowe względem t = cos x.",
    answer: "x = π lub x = 2π/3 lub x = 4π/3",
    solution: `**Rozwiązanie krok po kroku:**
1. Stosujemy wzór na cosinus podwojonego argumentu: $\\cos 2x = 2\\cos^2 x - 1$:
$$2\\cos^2 x - 1 + 3\\cos x + 2 = 0$$
$$2\\cos^2 x + 3\\cos x + 1 = 0$$

2. Wprowadzamy zmienną pomocniczą $t = \\cos x$, gdzie $t \\in [-1, 1]$:
$$2t^2 + 3t + 1 = 0$$
$$\\Delta = 3^2 - 4 \\cdot 2 \\cdot 1 = 9 - 8 = 1, \\quad \\sqrt{\\Delta} = 1$$
$$t_1 = \\frac{-3 - 1}{4} = -1, \\qquad t_2 = \\frac{-3 + 1}{4} = -\\frac{1}{2}$$
Oba rozwiązania należą do przedziału $[-1, 1]$.

3. Wracamy do podstawienia w przedziale $[0, 2\\pi]$:
- Dla $\\cos x = -1$:
$$x = \\pi$$
- Dla $\\cos x = -\\frac{1}{2}$:
W I ćwiartce $\\cos(\\frac{\\pi}{3}) = \\frac{1}{2}$. Cosinus jest ujemny w II i III ćwiartce:
$$x = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$$
$$x = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}$$

Ostatecznie rozwiązaniami w przedziale $[0, 2\\pi]$ są:
$$x \\in \\left\\{\\frac{2\\pi}{3}, \\pi, \\frac{4\\pi}{3}\\right\\}$$`
  },
  {
    id: "521",
    section: "Zadania maturalne",
    category: "matura_equations",
    title: "Zadanie 521 - Równanie 4sin 7x cos 2x = 2sin 9x - 1 (CKE czerwiec 2019)",
    difficulty: "Rozszerzony",
    examType: "CKE matura rozszerzona",
    question: "(0-4 pkt) Rozwiąż równanie 4sin 7x · cos 2x = 2sin 9x - 1 w przedziale [0, π].",
    hint: "Zastosuj wzór na iloczyn sinusa i cosinusa: 2 sin 7x cos 2x = sin 9x + sin 5x.",
    answer: "x = 7π/30 lub x = 11π/30 lub x = 19π/30 lub x = 23π/30",
    solution: `**Rozwiązanie:**
Lewą stronę zapisujemy jako:
$$4\\sin 7x\\cos 2x = 2 \\cdot (2\\sin 7x\\cos 2x) = 2(\\sin(7x + 2x) + \\sin(7x - 2x)) = 2(\\sin 9x + \\sin 5x)$$
Wstawiamy do równania:
$$2\\sin 9x + 2\\sin 5x = 2\\sin 9x - 1$$
Redukujemy $2\\sin 9x$:
$$2\\sin 5x = -1 \\iff \\sin 5x = -\\frac{1}{2}$$
Rozwiązujemy dla $5x$:
$$5x = -\\frac{\\pi}{6} + 2k\\pi \\iff x = -\\frac{\\pi}{30} + \\frac{2k\\pi}{5}$$
lub
$$5x = \\frac{7\\pi}{6} + 2k\\pi \\iff x = \\frac{7\\pi}{30} + \\frac{2k\\pi}{5}$$
Szukamy rozwiązań w przedziale $[0, \\pi]$:
- z pierwszej serii: dla $k=1 \\implies x = \\frac{11\\pi}{30}$; dla $k=2 \\implies x = \\frac{23\\pi}{30}$
- z drugiej serii: dla $k=0 \\implies x = \\frac{7\\pi}{30}$; dla $k=1 \\implies x = \\frac{19\\pi}{30}$`
  },
  {
    id: "534",
    section: "Zadania maturalne",
    category: "matura_param",
    title: "Zadanie 534 - Równanie sin² x + sin x + m = 0 z parametrem",
    difficulty: "Wyzwanie",
    examType: "Egzamin dojrzałości (profil podstawowy, 1990)",
    question: "Dla jakich wartości parametru m równanie sin² x + sin x + m = 0 ma rozwiązania?",
    hint: "Podstawienie t = sin x ∈ [-1, 1]. Równanie kwadratowe t² + t + m = 0 musi mieć co najmniej jeden pierwiastek w przedziale [-1, 1].",
    answer: "m ∈ [-2, 1/4]",
    solution: `**Rozwiązanie krok po kroku:**
1. Podstawiamy $t = \\sin x$, gdzie $t \\in [-1, 1]$.
Otrzymujemy równanie:
$$t^2 + t + m = 0$$
Równanie wyjściowe ma rozwiązanie wtedy i tylko wtedy, gdy funkcja $g(t) = t^2 + t + m$ ma co najmniej jedno miejsce zerowe w przedziale $[-1, 1]$.

2. Współrzędne wierzchołka paraboli $g(t)$:
$$t_w = -\\frac{b}{2a} = -\\frac{1}{2} = -0{,}5 \\in [-1, 1]$$
Ponieważ wierzchołek leży wewnątrz przedziału $[-1, 1]$ i ramiona paraboli są skierowane w górę ($a = 1 > 0$):
- Aby istniały pierwiastki rzeczywiste: $\\Delta \\ge 0$:
$$\\Delta = 1^2 - 4 \\cdot 1 \\cdot m = 1 - 4m \\ge 0 \\implies m \\le \\frac{1}{4}$$
- Aby co najmniej jeden pierwiastek leżał w przedziale $[-1, 1]$, wartość w wierzchołku musi być $\\le 0$ (spełnione przez $\\Delta \\ge 0$), a przynajmniej w jednym końcu przedziału $g(t) \\ge 0$:
Większa wartość jest dla $t = 1$:
$$g(1) = 1^2 + 1 + m = 2 + m \\ge 0 \\implies m \\ge -2$$

Łącząc warunki:
$$m \\in \\left[-2, \\frac{1}{4}\\right]$$`
  },
  {
    id: "540",
    section: "Zadania maturalne",
    category: "matura_challenge",
    title: "Zadanie 540 - Wyrażenie bez użycia tablic (Politechnika 1955)",
    difficulty: "Wyzwanie",
    examType: "Egzamin wstępny na politechniki w roku 1955",
    question: "Obliczyć bez użycia tablic:\n(9sin 140° - 4cos 230° + 12sin 580°) / (3sin 40° - 2cos 410°)",
    hint: "Zredukuj wszystkie kąty do kąta 40°: 140° = 180° - 40°, 230° = 270° - 40°, 580° = 360° + 180° + 40°.",
    answer: "1",
    solution: `**Rozwiązanie krok po kroku:**
Sprowadzamy wszystkie funkcje do kąta $40^\\circ$:

1. $\\sin 140^\\circ = \\sin(180^\\circ - 40^\\circ) = \\sin 40^\\circ$
2. $\\cos 230^\\circ = \\cos(180^\\circ + 50^\\circ) = -\\cos 50^\\circ = -\\sin 40^\\circ$
3. $\\sin 580^\\circ = \\sin(360^\\circ + 220^\\circ) = \\sin 220^\\circ = \\sin(180^\\circ + 40^\\circ) = -\\sin 40^\\circ$
4. $\\cos 410^\\circ = \\cos(360^\\circ + 50^\\circ) = \\cos 50^\\circ = \\sin 40^\\circ$

Podstawiamy do licznika:
$$L = 9\\sin 40^\\circ - 4(-\\sin 40^\\circ) + 12(-\\sin 40^\\circ)$$
$$L = 9\\sin 40^\\circ + 4\\sin 40^\\circ - 12\\sin 40^\\circ = 1\\sin 40^\\circ = \\sin 40^\\circ$$

Podstawiamy do mianownika:
$$M = 3\\sin 40^\\circ - 2(\\sin 40^\\circ) = \\sin 40^\\circ$$

Wartość całego ułamka:
$$\\frac{L}{M} = \\frac{\\sin 40^\\circ}{\\sin 40^\\circ} = 1$$`
  },
  {
    id: "545",
    section: "Zadania maturalne",
    category: "matura_challenge",
    title: "Zadanie 545 - Równanie cos(x - 2) = x² - 4x + 5",
    difficulty: "Wyzwanie",
    examType: "Zadanie z gwiazdką (*)",
    question: "Rozwiąż równanie cos(x - 2) = x² - 4x + 5.",
    hint: "Zbadaj zbiór wartości lewej i prawej strony: x² - 4x + 5 = (x - 2)² + 1.",
    answer: "x = 2",
    solution: `**Rozwiązanie:**
1. Prawa strona to trójmian kwadratowy:
$$g(x) = x^2 - 4x + 5 = (x - 2)^2 + 1$$
Dla każdego $x \\in \\mathbb{R}$, $(x - 2)^2 \\ge 0$, zatem:
$$g(x) \\ge 1$$
Najmniejszą wartość $g_{min} = 1$ funkcja $g$ przyjmuje wyłącznie dla $x = 2$.

2. Lewa strona to funkcja cosinus:
$$f(x) = \\cos(x - 2)$$
Zbiór wartości cosinusa to $[-1, 1]$, co oznacza, że:
$$f(x) \\le 1$$
Największa możliwa wartość $f(x)$ wynosi $1$.

3. Równość $f(x) = g(x)$ może zajść tylko wtedy, gdy obie strony są jednocześnie równe 1:
$$\\begin{cases} (x - 2)^2 + 1 = 1 \\\\ \\cos(x - 2) = 1 \\end{cases}$$
Z pierwszego równania $x = 2$.
Sprawdzamy drugie równanie dla $x = 2$:
$$\\cos(2 - 2) = \\cos 0 = 1$$
Równość jest spełniona!

Jedynym rozwiązaniem równania jest $x = 2$.`
  }
];
