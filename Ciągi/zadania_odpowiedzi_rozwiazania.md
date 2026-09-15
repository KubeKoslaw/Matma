# 1. CIĄGI — PEŁNE ZESTAWIENIE ZADAŃ, ODPOWIEDZI I ROZWIĄZAŃ

> Kompletny spis teorii, przydatnych wzorów oraz zadań wprowadzających wraz z odpowiedziami i rozwiązaniami krok po kroku.

---

# CZĘŚĆ TEORETYCZNA — PRZYDATNE WZORY I WŁASNOŚCI

## 1. Pojęcie ciągu liczbowego

- **Ciąg liczbowy** to funkcja przyporządkowująca każdej liczbie naturalnej dodatniej $n \in \mathbb{N}_+$ pewną liczbę rzeczywistą $a_n$.
- **Ciąg monotoniczny:**
  - *Rosnący:* $a_{n+1} - a_n > 0$ dla każdego $n \ge 1$.
  - *Malejący:* $a_{n+1} - a_n < 0$ dla każdego $n \ge 1$.
  - *Stały:* $a_{n+1} - a_n = 0$ dla każdego $n \ge 1$.

---

## 2. Ciąg arytmetyczny

Ciąg $(a_n)$, w którym różnica kolejnych wyrazów jest stała: $a_{n+1} - a_n = r$ (gdzie $r$ to różnica ciągu).

- **Wzór na $n$-ty wyraz:**
  $$a_n = a_1 + (n - 1)r$$

- **Zależność między trzema kolejnymi wyrazami:**
  $$a_n = \frac{a_{n-1} + a_{n+1}}{2}$$
  (każdy wyraz oprócz pierwszego jest średnią arytmetyczną wyrazów sąsiednich).

- **Suma $n$ pierwszych wyrazów ($S_n$):**
  $$S_n = \frac{a_1 + a_n}{2} \cdot n = \frac{2a_1 + (n - 1)r}{2} \cdot n$$

---

## 3. Ciąg geometryczny

Ciąg $(a_n)$, w którym iloraz kolejnych wyrazów jest stały: $\frac{a_{n+1}}{a_n} = q$ (dla $a_n \ne 0$, gdzie $q$ to iloraz ciągu).

- **Wzór na $n$-ty wyraz:**
  $$a_n = a_1 \cdot q^{n-1}$$

- **Zależność między trzema kolejnymi wyrazami:**
  $$a_n^2 = a_{n-1} \cdot a_{n+1}$$
  (kwadrat wyrazu środkowego jest iloczynem wyrazów sąsiednich).

- **Suma $n$ pierwszych wyrazów ($S_n$):**
  - Dla $q \ne 1$:
    $$S_n = a_1 \cdot \frac{1 - q^n}{1 - q}$$
  - Dla $q = 1$:
    $$S_n = n \cdot a_1$$

---

## 4. Procent składany i lokaty

Wzór na kapitał końcowy $K_n$ po $n$ okresach oszczędzania przy stopie procentowej $r$ na okres lokaty:
$$K_n = K_0 \left(1 + \frac{r}{100}\right)^n$$
gdzie $K_0$ to kapitał początkowy.

---

# ZADANIA WPROWADZAJĄCE DO DZIAŁU CIĄGI

---

### Zadanie 1.1
**Treść zadania:**
W ciągu arytmetycznym dany jest pierwszy wyraz $a_1 = 3$ oraz różnica $r = 4$. Oblicz dziesiąty wyraz tego ciągu ($a_{10}$) oraz sumę dziesięciu pierwszych wyrazów ($S_{10}$).

**Odpowiedź i Rozwiązanie krok po kroku:**
1. Obliczamy $a_{10}$:
$$a_{10} = a_1 + 9r = 3 + 9 \cdot 4 = 3 + 36 = 39$$
2. Obliczamy sumę $S_{10}$:
$$S_{10} = \frac{a_1 + a_{10}}{2} \cdot 10 = \frac{3 + 39}{2} \cdot 10 = 21 \cdot 10 = 210$$
**Odpowiedź:** $a_{10} = 39$, $S_{10} = 210$.

---

### Zadanie 1.2
**Treść zadania:**
Liczby $x + 1, 2x + 4, 4x + 3$ tworzą w podanej kolejności ciąg arytmetyczny. Oblicz $x$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wykorzystujemy własność sąsiednich wyrazów ciągu arytmetycznego:
$$2x + 4 = \frac{(x + 1) + (4x + 3)}{2}$$
Mnożymy obie strony przez 2:
$$2(2x + 4) = 5x + 4 \implies 4x + 8 = 5x + 4 \implies x = 4$$
Sprawdzenie: wyraz 1: 5, wyraz 2: 12, wyraz 3: 19 ($r = 7$).
**Odpowiedź:** $x = 4$.

---

### Zadanie 1.3
**Treść zadania:**
W ciągu geometrycznym pierwszy wyraz wynosi $a_1 = 5$, a iloraz $q = 2$. Oblicz szósty wyraz $a_6$ oraz sumę $S_6$.

**Odpowiedź i Rozwiązanie krok po kroku:**
1. Wyraz $a_6$:
$$a_6 = a_1 \cdot q^5 = 5 \cdot 2^5 = 5 \cdot 32 = 160$$
2. Suma $S_6$:
$$S_6 = a_1 \cdot \frac{1 - q^6}{1 - q} = 5 \cdot \frac{1 - 2^6}{1 - 2} = 5 \cdot \frac{1 - 64}{-1} = 5 \cdot 63 = 315$$
**Odpowiedź:** $a_6 = 160$, $S_6 = 315$.

---

### Zadanie 1.4
**Treść zadania:**
Liczby $2, x, 18$ są dodatnimi wyrazami ciągu geometrycznego. Oblicz $x$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Stosujemy własność ciągu geometrycznego:
$$x^2 = 2 \cdot 18 = 36$$
Ponieważ wyraz ma być dodatni:
$$x = \sqrt{36} = 6$$
**Odpowiedź:** $x = 6$.

---

### Zadanie 1.5
**Treść zadania:**
Zbadaj monotoniczność ciągu o wyrazie ogólnym $a_n = 3n - 7$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Obliczamy różnicę $a_{n+1} - a_n$:
$$a_{n+1} = 3(n + 1) - 7 = 3n + 3 - 7 = 3n - 4$$
$$a_{n+1} - a_n = (3n - 4) - (3n - 7) = 3n - 4 - 3n + 7 = 3$$
Ponieważ $a_{n+1} - a_n = 3 > 0$ dla każdego $n \ge 1$, ciąg jest rosnący.
**Odpowiedź:** Ciąg jest rosnący.
