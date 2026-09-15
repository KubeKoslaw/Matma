# 1. PRAWDOPODOBIEŃSTWO I STATYSTYKA — PEŁNE ZESTAWIENIE ZADAŃ, ODPOWIEDZI I ROZWIĄZAŃ

> Kompletny spis teorii, przydatnych wzorów oraz zadań wprowadzających wraz z odpowiedziami i rozwiązaniami krok po kroku.

---

# CZĘŚĆ TEORETYCZNA — PRZYDATNE WZORY I WŁASNOŚCI

## 1. Kombinatoryka

- **Reguła mnożenia:** Jeśli wybór pierwszego elementu jest możliwy na $n_1$ sposobów, a drugiego na $n_2$ sposobów, to wyboru pary dokonać można na $n_1 \cdot n_2$ sposobów.
- **Permutacje:** Liczba wszystkich przestawień zbioru $n$-elementowego:
  $$P_n = n! = 1 \cdot 2 \cdot \dots \cdot n$$
- **Wariacje z powtórzeniami:** $n$-elementowych ciągów ze zbioru $k$-elementowego: $W_k^n = n^k$.
- **Kombinacje (symbol Newtona):** Wybór $k$ elementów z $n$-elementowego zbioru bez względu na kolejność:
  $$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$

---

## 2. Prawdopodobieństwo klasyczne

Niech $\Omega$ oznacza skończoną przestrzeń zdarzeń elementarnych o jednakowych prawdopodobieństwach (model klasyczny).
Prawdopodobieństwo zdarzenia $A \subseteq \Omega$ wynosi:
$$P(A) = \frac{|A|}{|\Omega|}$$
gdzie $|A|$ oznacza liczbę zdarzeń sprzyjających, a $|\Omega|$ moc całej przestrzeni zdarzeń.

- **Własności prawdopodobieństwa:**
  - $0 \le P(A) \le 1$
  - $P(\Omega) = 1, \quad P(\emptyset) = 0$
  - Zdarzenie przeciwne $A'$: $P(A') = 1 - P(A)$
  - Suma zdarzeń: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

---

## 3. Statystyka opisowa

- **Średnia arytmetyczna** zestawu danych $x_1, x_2, \dots, x_n$:
  $$\bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n}$$

- **Średnia ważona** z wagami $w_1, w_2, \dots, w_n$:
  $$\bar{x}_w = \frac{w_1 x_1 + w_2 x_2 + \dots + w_n x_n}{w_1 + w_2 + \dots + w_n}$$

- **Mediana ($M_e$):** Środkowa wartość w uporządkowanym rosnąco ciągu danych.
  - Jeśli liczba danych $n$ jest nieparzysta: $M_e = x_{\frac{n+1}{2}}$.
  - Jeśli liczba danych $n$ jest parzysta: $M_e = \frac{x_{\frac{n}{2}} + x_{\frac{n}{2} + 1}}{2}$.

- **Dominanta (moda, $D$):** Wartość występująca w zestawie danych najczęściej.

- **Wariancja ($\sigma^2$) i odchylenie standardowe ($\sigma$):**
  $$\sigma^2 = \frac{(x_1 - \bar{x})^2 + (x_2 - \bar{x})^2 + \dots + (x_n - \bar{x})^2}{n}$$
  $$\sigma = \sqrt{\sigma^2}$$

---

# ZADANIA WPROWADZAJĄCE DO DZIAŁU PRAWDOPODOBIEŃSTWO I STATYSTYKA

---

### Zadanie 1.1
**Treść zadania:**
Rzucamy dwukrotnie symetryczną sześcienną kostką do gry. Oblicz prawdopodobieństwo zdarzenia $A$, że suma wyrzuconych oczek wynosi 8.

**Odpowiedź i Rozwiązanie krok po kroku:**
1. Moc przestrzeni zdarzeń elementarnych: $|\Omega| = 6 \cdot 6 = 36$.
2. Wypisujemy zdarzenia sprzyjające zdarzeniu $A$ (suma oczek 8):
$$A = \{(2,6), (3,5), (4,4), (5,3), (6,2)\}$$
Moc zdarzenia $A$: $|A| = 5$.
3. Obliczamy prawdopodobieństwo:
$$P(A) = \frac{|A|}{|\Omega|} = \frac{5}{36}$$
**Odpowiedź:** $P(A) = \frac{5}{36}$.

---

### Zadanie 1.2
**Treść zadania:**
Ze zbioru cyfr $\{1, 2, 3, 4, 5\}$ losujemy bez zwracania kolejno dwie cyfry, tworząc liczbę dwucyfrową. Oblicz, ile jest wszystkich takich liczb dwucyfrowych.

**Odpowiedź i Rozwiązanie krok po kroku:**
Cyfrę dziesiątek możemy wybrać na 5 sposobów (dowolna cyfra ze zbioru).
Cyfrę jedności możemy wybrać na 4 sposoby (gdyż losowanie jest bez zwracania).
Z reguły mnożenia liczba wszystkich takich liczb wynosi:
$$N = 5 \cdot 4 = 20$$
**Odpowiedź:** 20.

---

### Zadanie 1.3
**Treść zadania:**
Oblicz średnią arytmetyczną i medianę zestawu ocen: $3, 4, 2, 5, 4, 6, 4$.

**Odpowiedź i Rozwiązanie krok po kroku:**
1. Liczba ocen $n = 7$.
Suma ocen: $3 + 4 + 2 + 5 + 4 + 6 + 4 = 28$.
Średnia arytmetyczna:
$$\bar{x} = \frac{28}{7} = 4$$
2. Porządkujemy zestaw ocen rosnąco:
$$2, 3, 4, 4, 4, 5, 6$$
Ponieważ $n = 7$ jest nieparzyste, mediana to element środkowy (czwarty):
$$M_e = 4$$
**Odpowiedź:** Średnia arytmetyczna: 4, mediana: 4.

---

### Zadanie 1.4
**Treść zadania:**
W pewnej grupie prawdopodobieństwo zdarzenia $A$ wynosi $P(A) = 0{,}75$. Oblicz prawdopodobieństwo zdarzenia przeciwnego $A'$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Stosujemy wzór na prawdopodobieństwo zdarzenia przeciwnego:
$$P(A') = 1 - P(A) = 1 - 0{,}75 = 0{,}25$$
**Odpowiedź:** $P(A') = 0{,}25$.

---

### Zadanie 1.5
**Treść zadania:**
Oblicz odchylenie standardowe dla zestawu liczb: $2, 4, 6, 8$.

**Odpowiedź i Rozwiązanie krok po kroku:**
1. Średnia arytmetyczna:
$$\bar{x} = \frac{2 + 4 + 6 + 8}{4} = \frac{20}{4} = 5$$
2. Wariancja $\sigma^2$:
$$\sigma^2 = \frac{(2 - 5)^2 + (4 - 5)^2 + (6 - 5)^2 + (8 - 5)^2}{4} = \frac{(-3)^2 + (-1)^2 + 1^2 + 3^2}{4} = \frac{9 + 1 + 1 + 9}{4} = \frac{20}{4} = 5$$
3. Odchylenie standardowe:
$$\sigma = \sqrt{5}$$
**Odpowiedź:** $\sigma = \sqrt{5} \approx 2{,}24$.
