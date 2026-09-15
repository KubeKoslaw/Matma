# 1. FUNKCJE — PEŁNE ZESTAWIENIE ZADAŃ, ODPOWIEDZI I ROZWIĄZAŃ

> Kompletny spis teorii, przydatnych wzorów oraz zadań wprowadzających wraz z odpowiedziami i rozwiązaniami krok po kroku.

---

# CZĘŚĆ TEORETYCZNA — PRZYDATNE WZORY I WŁASNOŚCI

## 1. Definicja funkcji i podstawowe pojęcia

- **Funkcja** ze zbioru $X$ w zbiór $Y$ to przyporządkowanie, które każdemu elementowi $x \in X$ przypisuje dokładnie jeden element $y \in Y$.
- **Dziedzina funkcji ($D$):** zbiór wszystkich argumentów $x$, dla których funkcja jest określona.
- **Zbiór wartości ($ZW$):** zbiór wszystkich wartości $y$, które funkcja przyjmuje dla argumentów ze swojej dziedziny.
- **Miejsce zerowe:** argument $x_0 \in D$, dla którego $f(x_0) = 0$.

---

## 2. Własności funkcji

- **Monotoniczność:**
  - *Rosnąca:* dla dowolnych $x_1, x_2 \in D$, jeśli $x_1 < x_2$, to $f(x_1) < f(x_2)$.
  - *Malejąca:* dla dowolnych $x_1, x_2 \in D$, jeśli $x_1 < x_2$, to $f(x_1) > f(x_2)$.
  - *Stała:* dla dowolnych $x_1, x_2 \in D$, $f(x_1) = f(x_2)$.

- **Parzystość i nieparzystość:**
  - Dziedzina musi być symetryczna względem zera ($x \in D \iff -x \in D$).
  - *Funkcja parzysta:* $f(-x) = f(x)$ dla każdego $x \in D$. Wykres jest symetryczny względem osi $Oy$.
  - *Funkcja nieparzysta:* $f(-x) = -f(x)$ dla każdego $x \in D$. Wykres jest symetryczny względem punktu $(0,0)$.

- **Różnowartościowość:**
  - Funkcja jest różnowartościowa, jeśli dla dowolnych $x_1, x_2 \in D$, z tego że $x_1 \ne x_2$ wynika $f(x_1) \ne f(x_2)$.

---

## 3. Przekształcenia wykresów funkcji $y = f(x)$

- $y = f(x) + q$ — przesunięcie o wektor $[0, q]$ (w górę o $q$ dla $q > 0$, w dół dla $q < 0$).
- $y = f(x - p)$ — przesunięcie o wektor $[p, 0]$ (w prawo o $p$ dla $p > 0$, w lewo dla $p < 0$).
- $y = f(x - p) + q$ — przesunięcie o wektor $[p, q]$.
- $y = -f(x)$ — symetria osiowa względem osi $Ox$.
- $y = f(-x)$ — symetria osiowa względem osi $Oy$.
- $y = |f(x)|$ — odbicie części wykresu leżącej pod osią $Ox$ nad osie $Ox$.

---

## 4. Funkcja kwadratowa $f(x) = ax^2 + bx + c$ ($a \ne 0$)

- **W wyróżnik równania (delta):** $\Delta = b^2 - 4ac$.
- **Wierzchołek paraboli $W = (p, q)$:**
  $$p = -\frac{b}{2a}, \quad q = -\frac{\Delta}{4a} = f(p)$$
- **Postać kanoniczna:** $f(x) = a(x - p)^2 + q$.
- **Postać iloczynowa:**
  - Dla $\Delta > 0$: $f(x) = a(x - x_1)(x - x_2)$, gdzie $x_{1,2} = \frac{-b \mp \sqrt{\Delta}}{2a}$.
  - Dla $\Delta = 0$: $f(x) = a(x - x_0)^2$, gdzie $x_0 = -\frac{b}{2a}$.
  - Dla $\Delta < 0$: postać iloczynowa nie istnieje w zbiorze liczb rzeczywistych.
- **Wzory Viète'a:** dla równania $ax^2 + bx + c = 0$ z pierwiastkami $x_1, x_2$:
  $$x_1 + x_2 = -\frac{b}{a}, \quad x_1 \cdot x_2 = \frac{c}{a}$$

---

# ZADANIA WPROWADZAJĄCE DO DZIAŁU FUNKCJE

---

### Zadanie 1.1
**Treść zadania:**
Wyznacz dziedzinę funkcji $f(x) = \frac{2x + 1}{x^2 - 9}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Mianownik ułamka nie może być równy zero:
$$x^2 - 9 \ne 0 \iff (x - 3)(x + 3) \ne 0 \iff x \ne 3 \land x \ne -3$$
Zatem dziedzina funkcji to $D = \mathbb{R} \setminus \{-3, 3\}$.
**Odpowiedź:** $D = \mathbb{R} \setminus \{-3, 3\}$.

---

### Zadanie 1.2
**Treść zadania:**
Wyznacz miejsca zerowe funkcji $f(x) = \frac{x^2 - 4}{x + 2}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
1. Ustalamy dziedzinę: $x + 2 \ne 0 \iff x \ne -2$, czyli $D = \mathbb{R} \setminus \{-2\}$.
2. Przyrównujemy licznik do zera:
$$x^2 - 4 = 0 \iff x = 2 \lor x = -2$$
3. Weryfikujemy z dziedziną: $x = -2 \notin D$, stąd jedynym miejscem zerowym jest $x = 2$.
**Odpowiedź:** $x = 2$.

---

### Zadanie 1.3
**Treść zadania:**
Wyznacz współrzędne wierzchołka paraboli o równaniu $f(x) = 2x^2 - 8x + 5$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Dla funkcji kwadratowej w postaci ogólnej $a = 2, b = -8, c = 5$.
Obliczamy współrzędne wierzchołka $W = (p, q)$:
$$p = -\frac{b}{2a} = -\frac{-8}{2 \cdot 2} = \frac{8}{4} = 2$$
$$q = f(p) = f(2) = 2(2)^2 - 8(2) + 5 = 2 \cdot 4 - 16 + 5 = 8 - 16 + 5 = -3$$
Wierzchołek paraboli znajduje się w punkcie $W = (2, -3)$.
**Odpowiedź:** $W = (2, -3)$.

---

### Zadanie 1.4
**Treść zadania:**
Zapisz funkcję kwadratową $f(x) = x^2 - 6x + 8$ w postaci kanonicznej oraz w postaci iloczynowej.

**Odpowiedź i Rozwiązanie krok po kroku:**
1. Współczynniki: $a = 1, b = -6, c = 8$.
2. $\Delta = b^2 - 4ac = (-6)^2 - 4 \cdot 1 \cdot 8 = 36 - 32 = 4$.
3. Obliczamy $p$ i $q$:
$$p = -\frac{-6}{2 \cdot 1} = 3, \quad q = -\frac{4}{4 \cdot 1} = -1$$
Postać kanoniczna $f(x) = a(x - p)^2 + q$:
$$f(x) = (x - 3)^2 - 1$$
4. Pierwiastki:
$$x_1 = \frac{6 - \sqrt{4}}{2} = \frac{6 - 2}{2} = 2, \quad x_2 = \frac{6 + 2}{2} = 4$$
Postać iloczynowa $f(x) = a(x - x_1)(x - x_2)$:
$$f(x) = (x - 2)(x - 4)$$
**Odpowiedź:** Postać kanoniczna: $f(x) = (x - 3)^2 - 1$, postać iloczynowa: $f(x) = (x - 2)(x - 4)$.

---

### Zadanie 1.5
**Treść zadania:**
Wykres funkcji $f(x) = 3x^2$ przesunięto o wektor $\vec{u} = [-2, 5]$. Podaj wzór otrzymanej funkcji $g(x)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Przesunięcie wykresu funkcji $f(x)$ o wektor $[p, q]$ daje funkcję $g(x) = f(x - p) + q$.
Dla $p = -2$ oraz $q = 5$:
$$g(x) = f(x - (-2)) + 5 = f(x + 2) + 5 = 3(x + 2)^2 + 5$$
**Odpowiedź:** $g(x) = 3(x + 2)^2 + 5$.
