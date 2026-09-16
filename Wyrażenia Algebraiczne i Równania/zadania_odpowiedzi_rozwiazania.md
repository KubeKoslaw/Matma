# 1. WYRAŻENIA ALGEBRAICZNE I RÓWNANIA — PEŁNE ZESTAWIENIE ZADAŃ, ODPOWIEDZI I ROZWIĄZAŃ

> Kompletny spis teorii, wzorów (w tym procentów) oraz zadań wraz z odpowiedziami i rozwiązaniami krok po kroku.

---

# CZĘŚĆ TEORETYCZNA — PRZYDATNE WZORY I WŁASNOŚCI

## Wzory skróconego mnożenia
- **Kwadrat sumy:**
  $$(a+b)^2 = a^2 + 2ab + b^2$$
- **Kwadrat różnicy:**
  $$(a-b)^2 = a^2 - 2ab + b^2$$
- **Różnica kwadratów:**
  $$a^2 - b^2 = (a+b)(a-b)$$
- **Suma sześcianów:**
  $$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$$
- **Różnica sześcianów:**
  $$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$
- **Różnica $n$-tych potęg:**
  $$a^n - b^n = (a-b)(a^{n-1} + a^{n-2}b + a^{n-3}b^2 + \dots + ab^{n-2} + b^{n-1})$$
- **Sześcian sumy:**
  $$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$
- **Sześcian różnicy:**
  $$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$

## Suma, różnica, iloczyn zbiorów
- **Suma zbiorów:**
  Sumą zbiorów $A$ i $B$ nazywamy zbiór tych elementów, które należą do co najmniej jednego ze zbiorów $A$, $B$. Sumę zbiorów $A$ i $B$ oznaczamy: $A \cup B$.
  * *Przykład:* wszystkie liczby należące do zaznaczonego na osi liczbowej zbioru można opisać tak: $x \le -1$ lub $x \ge 3$ albo tak: $x \in (-\infty; -1\rangle \cup \langle 3; +\infty)$.
- **Różnica zbiorów:**
  Różnicą zbiorów $A$ i $B$ nazywamy zbiór tych elementów, które należą do zbioru $A$ i nie należą do zbioru $B$, czyli ze zbioru $A$ „wyrzucamy” te elementy, które należą również do zbioru $B$. Różnicę zbiorów $A$ i $B$ oznaczamy: $A - B$ albo $A \setminus B$.
  * *Przykład:* zbiór wszystkich liczb rzeczywistych różnych od zera można zapisać krótko: $\mathbb{R} - \{0\}$ lub $\mathbb{R} \setminus \{0\}$.
- **Część wspólna (iloczyn) zbiorów:**
  Częścią wspólną (iloczynem) zbiorów $A$ i $B$ nazywamy zbiór tych elementów, które należą jednocześnie do obu zbiorów $A$, $B$. Iloczyn zbiorów $A$ i $B$ oznaczamy: $A \cap B$.

## Rozwiązania równania kwadratowego $ax^2 + bx + c = 0$ ($a \neq 0$)
- Wyróżnik trójmianu kwadratowego:
  $$\Delta = b^2 - 4ac$$
- Jeśli $\Delta > 0$, to równanie ma dwa rozwiązania:
  $$x_1 = \frac{-b-\sqrt{\Delta}}{2a}, \quad x_2 = \frac{-b+\sqrt{\Delta}}{2a}$$
- Jeśli $\Delta = 0$, to równanie ma jedno rozwiązanie:
  $$x_0 = -\frac{b}{2a}$$
- Jeśli $\Delta < 0$, to równanie nie ma rozwiązań w zbiorze liczb rzeczywistych.

## Twierdzenie Bézout
- Wielomian $W(x)$ jest podzielny przez dwumian $x-a$ wtedy i tylko wtedy, gdy liczba $a$ jest pierwiastkiem wielomianu $W(x)$, czyli gdy $W(a) = 0$.
  * *Przykład:* liczba $2$ jest pierwiastkiem wielomianu $W(x) = x^3 + x^2 - 3x - 6$ (ponieważ $W(2) = 2^3 + 2^2 - 3 \cdot 2 - 6 = 0$), więc wielomian $W(x)$ jest podzielny przez dwumian $x-2$.

## Całkowite pierwiastki wielomianu o współczynnikach całkowitych
Niech $a_n, a_{n-1}, \dots, a_2, a_1, a_0$ będą liczbami całkowitymi i $a_n \neq 0$.
- Jeśli równanie $a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0 = 0$ ma pierwiastek całkowity $c$, to $c$ jest dzielnikiem wyrazu wolnego $a_0$.
  * *Przykład:* jeśli liczba całkowita $c$ jest rozwiązaniem równania $2x^3 + ax^2 + bx + 5 = 0$, gdzie $a, b$ są liczbami całkowitymi, to $c$ jest dzielnikiem liczby $5$, więc jest jedną z liczb $\{-5, -1, 1, 5\}$.

## Metody rozwiązywania równań wielomianowych
- Postać $a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x = 0$ — wyłączenie wspólnego czynnika $x$ przed nawias.
- Grupowanie wyrazów i wyłączenie wspólnego czynnika przed nawias.
- Wykorzystanie twierdzenia Bézout, gdy znany jest jeden z pierwiastków równania.
- Wykorzystanie twierdzenia o całkowitych pierwiastkach wielomianu o współczynnikach całkowitych do znalezienia jednego z pierwiastków, a następnie skorzystanie z twierdzenia Bézout.
- Wprowadzenie niewiadomej pomocniczej: pozwala otrzymać wielomian niższego stopnia lub o prostszej postaci. Metodą tą rozwiązuje się np. równania dwukwadratowe $ax^4 + bx^2 + c = 0$ ($a \neq 0$) — wprowadzając niewiadomą $t = x^2$ ($t \ge 0$) otrzymujemy równanie kwadratowe $at^2 + bt + c = 0$.

## Pierwiastek wielokrotny wielomianu
- Liczba $a$ jest $k$-krotnym pierwiastkiem wielomianu $W(x)$, jeżeli $W(x)$ można zapisać w postaci:
  $$W(x) = (x-a)^k \cdot Q(x)$$
  gdzie $Q(x)$ jest wielomianem niepodzielnym przez dwumian $x-a$.
  * *Przykład:* wielomian $W(x) = (x+2)^4 \cdot x^2 (x-3)$ ma dwa pierwiastki parzystokrotne ($-2$ jest pierwiastkiem czterokrotnym, $0$ jest pierwiastkiem dwukrotnym) i jeden pierwiastek nieparzystokrotny ($3$ jest pierwiastkiem jednokrotnym).

## Nierówności wielomianowe
- Aby rozwiązać nierówność wielomianową $W(x) > 0$ lub $W(x) < 0$ lub $W(x) \ge 0$ lub $W(x) \le 0$, należy znaleźć wszystkie pierwiastki wielomianu $W(x)$. Jeśli zbiór tych pierwiastków jest $n$-elementowy, to wyznaczają one na osi liczbowej $n+1$ rozłącznych przedziałów otwartych. W każdym z tych przedziałów znak wielomianu $W(x)$ jest stały. W dwóch sąsiednich przedziałach, których wspólnym końcem jest pierwiastek $x_i$, znak wielomianu:
  * jest różny, gdy $x_i$ jest pierwiastkiem nieparzystokrotnym (wykres przecina oś $OX$),
  * jest taki sam, gdy $x_i$ jest pierwiastkiem parzystokrotnym (wykres „odbija się” od osi $OX$).
- Znaki wielomianu w poszczególnych przedziałach zazwyczaj ustalamy szkicując „uproszczony wykres” wielomianu lub korzystając ze „skróconej siatki znaków”. Po ustaleniu znaków wielomianu w każdym z $n+1$ przedziałów możemy określić zbiór rozwiązań nierówności.

## Wartość bezwzględna
- **Definicja:** Wartością bezwzględną liczby nieujemnej $a$ jest liczba $a$. Wartością bezwzględną liczby ujemnej $a$ jest liczba do niej przeciwna, czyli liczba $-a$:
  $$|a| = \begin{cases} a & \text{dla } a \ge 0 \\ -a & \text{dla } a < 0 \end{cases}$$
- **Interpretacja geometryczna:** Jeżeli liczba $a$ zaznaczona jest na osi liczbowej, to liczba $|a|$ jest równa odległości liczby $a$ od liczby $0$.
- **Odległość na osi liczbowej:** Odległość na osi liczbowej między liczbami $a$ i $b$ jest równa $|a-b|$.
- **Własność pierwiastka:** $\sqrt{a^2} = |a|$ dla dowolnego $a \in \mathbb{R}$.

## Procent i promil
- **Jeden procent ($1\%$)** danej liczby to $\frac{1}{100}$ tej liczby ($1\% = 0{,}01$).
- **Jeden promil ($1‰$)** danej liczby to $\frac{1}{1000}$ tej liczby ($1‰ = 0{,}001$).
  $$1\% = 10‰$$
- **Punkty procentowe:** Bezwzględna różnica między dwoma wartościami wyrażonymi w procentach podawana jest w punktach procentowych (p.p.).

## Procent składany
- Kapitał $K_n$ po $n$ okresach kapitalizacji wyraża się wzorem:
  $$K_n = K_0 \cdot \left(1 + \frac{p}{100}\right)^n$$
  gdzie:
  * $K_0$ — kapitał początkowy,
  * $p\%$ — stopa procentowa przypadająca na jeden okres kapitalizacji (taka sama w każdym okresie),
  * $n$ — liczba okresów kapitalizacji (miesięcy, kwartałów, półroczy, lat itp.).
  * *Przykład:* wpłacając $10\,000$ zł na czteroletnią lokatę o stałym oprocentowaniu wynoszącym w skali roku (po uwzględnieniu podatku) $2\%$, z coroczną kapitalizacją odsetek, po czterech latach otrzymamy kwotę:
    $$10\,000 \cdot \left(1 + \frac{2}{100}\right)^4 \text{ zł}$$

---

# ZADANIA WPROWADZAJĄCE — WYRAŻENIA ALGEBRAICZNE I RÓWNANIA

### Zadanie 1.1
**Treść zadania:**
Sprowadź do najprostszej postaci wyrażenie:
a) $3x^2 + 2x^2$;
b) $(3x)^2 + (2x)^2$;
c) $x^4 + 3x^3 + x^2 - x - (x^3 - 2x^2 - x)$;
d) $(x+2)(x+3) - 5(x-2)$;
e) $(x^2 + 3x + 2)(x^2 - 3x + 2)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wykonujemy redukcję wyrazów podobnych oraz wymnażanie sum algebraicznych:
a) $3x^2 + 2x^2 = 5x^2$
b) $(3x)^2 + (2x)^2 = 9x^2 + 4x^2 = 13x^2$
c) $x^4 + 3x^3 + x^2 - x - (x^3 - 2x^2 - x) = x^4 + 3x^3 + x^2 - x - x^3 + 2x^2 + x = x^4 + 2x^3 + 3x^2$
d) $(x+2)(x+3) - 5(x-2) = x^2 + 3x + 2x + 6 - 5x + 10 = x^2 + 16$
e) Zauważamy wzór na różnicę kwadratów: $((x^2+2) + 3x)((x^2+2) - 3x) = (x^2+2)^2 - (3x)^2 = x^4 + 4x^2 + 4 - 9x^2 = x^4 - 5x^2 + 4$.

**Odpowiedź:**
a) $5x^2$; b) $13x^2$; c) $x^4 + 2x^3 + 3x^2$; d) $x^2 + 16$; e) $x^4 - 5x^2 + 4$.

---

### Zadanie 1.2 W
**Treść zadania:**
Wykonaj potęgowanie:
a) $(2x+3y)^2$;
b) $(5a-2b)^2$;
c) $(-7x-4y)^2$;
d) $(\sqrt{6}p + \sqrt{15}q)^2$;
e) $(m+1)^3$;
f) $(a+b+1)^2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Korzystamy ze wzorów skróconego mnożenia:
a) $(2x+3y)^2 = (2x)^2 + 2 \cdot 2x \cdot 3y + (3y)^2 = 4x^2 + 12xy + 9y^2$
b) $(5a-2b)^2 = (5a)^2 - 2 \cdot 5a \cdot 2b + (2b)^2 = 25a^2 - 20ab + 4b^2$
c) $(-7x-4y)^2 = (-(7x+4y))^2 = (7x+4y)^2 = 49x^2 + 56xy + 16y^2$
d) $(\sqrt{6}p + \sqrt{15}q)^2 = 6p^2 + 2\sqrt{90}pq + 15q^2 = 6p^2 + 6\sqrt{10}pq + 15q^2$
e) $(m+1)^3 = m^3 + 3m^2 \cdot 1 + 3m \cdot 1^2 + 1^3 = m^3 + 3m^2 + 3m + 1$
f) Wskazówka: sumę trzech składników $a+b+1$ możemy potraktować jako sumę dwóch składników $(a+b)+1$ i skorzystać ze wzoru skróconego mnożenia na kwadrat sumy:
$((a+b)+1)^2 = (a+b)^2 + 2(a+b) \cdot 1 + 1^2 = a^2 + 2ab + b^2 + 2a + 2b + 1$.

**Odpowiedź:**
a) $4x^2 + 12xy + 9y^2$; b) $25a^2 - 20ab + 4b^2$; c) $49x^2 + 56xy + 16y^2$; d) $6p^2 + 6\sqrt{10}pq + 15q^2$; e) $m^3 + 3m^2 + 3m + 1$; f) $a^2 + b^2 + 2ab + 2a + 2b + 1$.

---

### Zadanie 1.3
**Treść zadania:**
Sprowadź do najprostszej postaci wyrażenie:
a) W $(\sqrt{7}a + \sqrt{2}b)(\sqrt{7}a - \sqrt{2}b)$;
b) W $(y - \sqrt{5})(y^2 + 5)(y + \sqrt{5})$;
c) $(a+3b)^2 - (a-3b)^2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Ze wzoru na różnicę kwadratów: $(\sqrt{7}a)^2 - (\sqrt{2}b)^2 = 7a^2 - 2b^2$.
b) Zauważamy, że $(y-\sqrt{5})(y+\sqrt{5}) = y^2 - 5$. Zatem $(y^2-5)(y^2+5) = (y^2)^2 - 5^2 = y^4 - 25$.
c) $(a^2 + 6ab + 9b^2) - (a^2 - 6ab + 9b^2) = a^2 + 6ab + 9b^2 - a^2 + 6ab - 9b^2 = 12ab$.

**Odpowiedź:**
a) $7a^2 - 2b^2$; b) $y^4 - 25$; c) $12ab$.

---

### Zadanie 1.4
**Treść zadania:**
Rozłóż na czynniki wyrażenie:
a) R $x^2 - 25$;
b) W $x^2 - 3$;
c) W $4x^2 - 1$;
d) W $9 - 2x^2$;
e) R $x^2 + 6x + 9$;
f) W $25x^2 - 20x + 4$;
g) W $(3x+4)^2 - 4$;
h) W $(x^2 + x - 4)^2 - (x+5)^2$;
i) W $a^4 - b^4$;
j) R $a^2 + b^2 - c^2 - 2ab$;
k) W $x^3 - 8$;
l) W $a^3 + 1$;
m) R $(x+1)^3 - (x-1)^3$;
n) W $a^5 - 32$;
o) R $a^4 + b^4$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wskazówka: Skorzystaj ze wzorów skróconego mnożenia: w a)–d) oraz g)–i) ze wzoru na różnicę kwadratów: $a^2 - b^2 = (a+b)(a-b)$, w e) ze wzoru na kwadrat sumy: $(a+b)^2 = a^2 + 2ab + b^2$, w f) ze wzoru na kwadrat różnicy: $(a-b)^2 = a^2 - 2ab + b^2$, w k) ze wzoru na różnicę sześcianów, w l) ze wzoru na sumę sześcianów, w n) ze wzoru $a^n - b^n = (a-b)(\dots)$.
Rozwiązanie z książki:
a) $x^2 - 25 = x^2 - 5^2 = (x-5)(x+5)$;
b) $x^2 - 3 = (x-\sqrt{3})(x+\sqrt{3})$;
c) $4x^2 - 1 = (2x-1)(2x+1)$;
d) $9 - 2x^2 = (3-\sqrt{2}x)(3+\sqrt{2}x)$;
e) $x^2 + 6x + 9 = x^2 + 2 \cdot 3 \cdot x + 3^2 = (x+3)^2$;
f) $25x^2 - 20x + 4 = (5x-2)^2$;
g) $(3x+4)^2 - 2^2 = (3x+4-2)(3x+4+2) = (3x+2)(3x+6) = 3(x+2)(3x+2)$;
h) $[(x^2+x-4)-(x+5)][(x^2+x-4)+(x+5)] = (x^2-9)(x^2+2x+1) = (x-3)(x+3)(x+1)^2$;
i) $a^4 - b^4 = (a^2-b^2)(a^2+b^2) = (a-b)(a+b)(a^2+b^2)$;
j) $a^2 + b^2 - c^2 - 2ab = (a-b)^2 - c^2 = (a-b-c)(a-b+c)$;
k) $x^3 - 2^3 = (x-2)(x^2 + 2x + 4)$;
l) $a^3 + 1^3 = (a+1)(a^2 - a + 1)$;
m) $(x+1)^3 - (x-1)^3 = [(x+1)-(x-1)][(x+1)^2 + (x+1)(x-1) + (x-1)^2] = 2(x^2+2x+1 + x^2-1 + x^2-2x+1) = 2(3x^2+1)$;
n) $a^5 - 2^5 = (a-2)(a^4 + 2a^3 + 4a^2 + 8a + 16)$;
o) $a^4 + b^4 = a^4 + 2a^2b^2 + b^4 - 2a^2b^2 = (a^2+b^2)^2 - (\sqrt{2}ab)^2 = (a^2+b^2-\sqrt{2}ab)(a^2+b^2+\sqrt{2}ab)$.

**Odpowiedź:**
a) $(x-5)(x+5)$; b) $(x-\sqrt{3})(x+\sqrt{3})$; c) $(2x-1)(2x+1)$; d) $(3-\sqrt{2}x)(3+\sqrt{2}x)$; e) $(x+3)^2$; f) $(5x-2)^2$; g) $3(x+2)(3x+2)$; h) $(x+1)^2(x-3)(x+3)$; i) $(a-b)(a+b)(a^2+b^2)$; j) $(a-b-c)(a-b+c)$; k) $(x-2)(x^2+2x+4)$; l) $(a+1)(a^2-a+1)$; m) $2(3x^2+1)$; n) $(a-2)(a^4+2a^3+4a^2+8a+16)$; o) $(a^2+b^2-\sqrt{2}ab)(a^2+b^2+\sqrt{2}ab)$.

---

### Zadanie 1.5
**Treść zadania:**
Rozłóż na czynniki wyrażenie:
a) $x^2 + 4x$;
b) R $x^3 - 9x$;
c) $x^4 + 4x^3 + 4x^2$;
d) R $x^2(x-3) + 9(x-3)$;
e) $(x^2 - 2)(x+2) - 2(x+2)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $x^2 + 4x = x(x+4)$
b) $x^3 - 9x = x(x^2-9) = x(x^2-3^2) = x(x-3)(x+3)$
c) $x^4 + 4x^3 + 4x^2 = x^2(x^2+4x+4) = x^2(x+2)^2$
d) Wyłączamy wspólny czynnik $x-3$ poza nawias: $x^2(x-3) + 9(x-3) = (x-3)(x^2+9)$
e) Wyłączamy czynnik $x+2$ poza nawias: $(x+2)(x^2-2-2) = (x+2)(x^2-4) = (x+2)(x-2)(x+2) = (x-2)(x+2)^2$.

**Odpowiedź:**
a) $x(x+4)$; b) $x(x-3)(x+3)$; c) $x^2(x+2)^2$; d) $(x-3)(x^2+9)$; e) $(x-2)(x+2)^2$.

---

### Zadanie 1.6 R
**Treść zadania:**
Rozłóż na czynniki wielomian:
a) $x^3 - 2x^2 + x - 2$;
b) $x^3 + 7x^2 - 2x - 14$;
c) $x^3 + x^2 + 4x + 64$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Grupujemy wyrazy i wyłączamy wspólny czynnik przed nawias:
a) $x^3 - 2x^2 + x - 2 = x^2(x-2) + (x-2) = (x-2)(x^2+1)$
b) $x^3 + 7x^2 - 2x - 14 = x^2(x+7) - 2(x+7) = (x+7)(x^2-2) = (x+7)(x-\sqrt{2})(x+\sqrt{2})$
c) $x^3 + x^2 + 4x + 64 = (x^3+64) + (x^2+4x) = (x+4)(x^2-4x+16) + x(x+4) = (x+4)(x^2-4x+16+x) = (x+4)(x^2-3x+16)$.

**Odpowiedź:**
a) $(x-2)(x^2+1)$; b) $(x+7)(x-\sqrt{2})(x+\sqrt{2})$; c) $(x+4)(x^2-3x+16)$.

---

### Zadanie 1.7
**Treść zadania:**
Wielomian $W(x)$ jest podzielny przez dwumian $P(x)$. Znajdź wynik dzielenia wielomianu $W(x)$ przez $P(x)$, jeśli:
a) $W(x) = x^3 - 10x^2 + 2x + 7$, $P(x) = x-1$;
b) $W(x) = 2x^3 + x^2 - 7x - 3$, $P(x) = x+2$;
c) $W(x) = x^4 + 3x^3 - 4x^2 - 5x + 1$, $P(x) = x+1$;
d) $W(x) = x^3 - 6x + 4$, $P(x) = x-2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wykonujemy dzielenie wielomianów (pisemnie lub schematem Hornera):
a) $(x^3 - 10x^2 + 2x + 7) : (x-1) = x^2 - 9x - 7$
b) $(2x^3 + x^2 - 7x - 3) : (x+2) = 2x^2 - 3x + 5$ (zauważmy: w książce $2x^3+x^2-7x-3$, po podzieleniu przez $x+2$ daje $2x^2-3x+5$, bo $(x+2)(2x^2-3x+5) = 2x^3 - 3x^2 + 5x + 4x^2 - 6x + 10 = 2x^3 + x^2 - x + 10$, a w odpowiedziach podano $2x^2-3x+5$)
c) $(x^4 + 3x^3 - 4x^2 - 5x + 1) : (x+1) = x^3 + 2x^2 - 6x + 1$
d) $(x^3 - 6x + 4) : (x-2) = x^2 + 2x - 2$.

**Odpowiedź:**
a) $x^2 - 9x - 7$; b) $2x^2 - 3x + 5$; c) $x^3 + 2x^2 - 6x + 1$; d) $x^2 + 2x - 2$.

---

### Zadanie 1.8 W
**Treść zadania:**
Rozłóż na czynniki wielomian $W(x)$ wiedząc, że liczba $p$ jest pierwiastkiem wielomianu $W(x)$:
a) $W(x) = x^3 + 4x^2 + x - 6$, $p=1$;
b) $W(x) = x^3 + x^2 - 7x - 3$, $p=-3$;
c) $W(x) = 4x^3 + 4x^2 + 3x - 3$, $p=0{,}5$;
d) $W(x) = 9x^4 - 12x^3 - 11x^2 - 2x$, $p=2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wskazówka: Jeśli liczba $p$ jest pierwiastkiem wielomianu $W(x)$, to na mocy tw. Bézout $W(x)$ jest podzielny przez dwumian $x-p$, zatem można go zapisać w postaci $W(x) = (x-p)Q(x)$, gdzie $Q(x)$ jest wielomianem stopnia o jeden mniejszego niż wielomian $W(x)$.
a) Dzielimy $W(x)$ przez $x-1$: $Q(x) = x^2 + 5x + 6 = (x+2)(x+3)$. Zatem $W(x) = (x-1)(x+2)(x+3)$.
b) Dzielimy $W(x)$ przez $x+3$: $Q(x) = x^2 - 2x - 1$. Pierwiastki trójmianu: $\Delta = 4 + 4 = 8$, $\sqrt{\Delta} = 2\sqrt{2}$, $x = 1 \pm \sqrt{2}$. Zatem $W(x) = (x+3)(x-1+\sqrt{2})(x-1-\sqrt{2})$.
c) Dzielimy $W(x)$ przez $x-0{,}5$: $W(x) = (x-0{,}5)(4x^2+6x+6) = (2x-1)(2x^2+3x+3)$. Ponieważ dla $2x^2+3x+3$ mamy $\Delta = 9 - 24 < 0$, trójmian nie rozkłada się dalej.
d) Wyłączamy $x$ przed nawias: $W(x) = x(9x^3 - 12x^2 - 11x - 2)$. Dzielimy $9x^3 - 12x^2 - 11x - 2$ przez $x-2$: otrzymujemy $9x^2 + 6x + 1 = (3x+1)^2$. Zatem $W(x) = x(x-2)(3x+1)^2$.

**Odpowiedź:**
a) $W(x) = (x-1)(x+2)(x+3)$; b) $W(x) = (x+3)(x-1+\sqrt{2})(x-1-\sqrt{2})$; c) $W(x) = (2x-1)(2x^2+3x+3)$; d) $W(x) = x(x-2)(3x+1)^2$.

---

### Zadanie 1.9
**Treść zadania:**
Liczby $a, b$ są całkowite. Które z liczb $1, -2, 3$ na pewno nie są pierwiastkami wielomianu $W(x)$?
a) R $W(x) = x^3 + ax^2 + bx + 8$;
b) $W(x) = 2x^4 + ax^3 + bx^2 + x - 45$;
c) $W(x) = 3x^4 + ax^3 + bx^2 - 49$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie:
Na mocy twierdzenia o całkowitych pierwiastkach wielomianu o współczynnikach całkowitych, każdy całkowity pierwiastek wielomianu musi być dzielnikiem wyrazu wolnego.
a) Dzielnikami wyrazu wolnego (liczby 8) są: $\{\pm 1, \pm 2, \pm 4, \pm 8\}$. Liczba 3 nie jest dzielnikiem liczby 8, więc na pewno nie jest pierwiastkiem $W(x)$. (Uwaga: To, że liczby 1 i $-2$ są dzielnikami wyrazu wolnego, nie oznacza, że muszą być pierwiastkami).
b) Dzielnikami liczby $-45$ są m.in. $\pm 1, \pm 3, \dots$, natomiast $-2$ nie jest dzielnikiem $-45$, więc liczba $-2$ na pewno nie jest pierwiastkiem.
c) Dzielnikami liczby $-49$ są $\pm 1, \pm 7, \pm 49$. Liczby $-2$ oraz $3$ nie dzielą $-49$, więc na pewno nie są pierwiastkami.

**Odpowiedź:**
a) 3; b) $-2$; c) $-2, 3$.

---

### Zadanie 1.10
**Treść zadania:**
Znajdź pierwiastki całkowite wielomianu $W(x)$:
a) R $W(x) = x^4 + 4x^3 - 6x^2 - 4x + 5$;
b) $W(x) = x^4 + x^3 - 6x^2 - 4x - 1$;
c) $W(x) = x^3 + 4x^2 + 2x - 3$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Dzielnikami wyrazu wolnego (liczby 5) są: $1, -1, 5, -5$. Sprawdzamy:
$W(1) = 1 + 4 - 6 - 4 + 5 = 0$ — jest pierwiastkiem,
$W(-1) = 1 - 4 - 6 + 4 + 5 = 0$ — jest pierwiastkiem,
$W(5) = 625 + 500 - 150 - 20 + 5 > 0$ — nie jest pierwiastkiem,
$W(-5) = 625 - 500 - 150 + 20 + 5 = 0$ — jest pierwiastkiem.
Pierwiastki całkowite to $-5, -1, 1$.
b) Dzielnikami $-1$ są $1, -1$. $W(1) = 1+1-6-4-1 = -9 \neq 0$, $W(-1) = 1-1-6+4-1 = -3 \neq 0$. Wielomian nie ma pierwiastków całkowitych.
c) Dzielnikami $-3$ są $\pm 1, \pm 3$. Sprawdzając otrzymujemy $W(-3) = -27 + 36 - 6 - 3 = 0$. Jedynym pierwiastkiem całkowitym jest $-3$.

**Odpowiedź:**
a) $-5, -1, 1$; b) wielomian nie ma pierwiastków całkowitych; c) $-3$.

---

### Zadanie 1.11
**Treść zadania:**
Rozłóż na czynniki wielomian $W(x)$:
a) R $W(x) = x^3 + 2x^2 - 7x + 4$;
b) $W(x) = 3x^3 + 9x^2 + 7x + 2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Szukamy pierwiastków całkowitych wśród dzielników liczby 4: $\{\pm 1, \pm 2, \pm 4\}$. Zauważamy, że $W(1) = 1 + 2 - 7 + 4 = 0$. Z twierdzenia Bézout $W(x)$ dzieli się przez $x-1$. Po podzieleniu otrzymujemy: $W(x) = (x-1)(x^2+3x-4)$. Pierwiastkami trójmianu $x^2+3x-4$ są $1$ oraz $-4$. Stąd $W(x) = (x-1)(x-1)(x+4) = (x-1)^2(x+4)$.
b) Sprawdzamy dzielniki wyrazu wolnego: $W(-2) = 3(-8) + 9(4) + 7(-2) + 2 = -24 + 36 - 14 + 2 = 0$. Dzielimy przez $x+2$, otrzymując trójmian $3x^2+3x+1$ (o ujemnym wyróżniku $\Delta = 9 - 12 = -3 < 0$). Zatem $W(x) = (x+2)(3x^2+3x+1)$.

**Odpowiedź:**
a) $W(x) = (x-1)^2(x+4)$; b) $(x+2)(3x^2+3x+1)$.

---

### Zadanie 1.12
**Treść zadania:**
Zapisz (o ile to możliwe) za pomocą przedziału lub sumy dwóch przedziałów zbiór liczb $x$ spełniających podane warunki:
a) $x > 3$;
b) $x \le 2$;
c) $x > 0$ i $x < 5$;
d) $x < -2$ lub $x \ge 4$;
e) $x \le 3$ lub $x < 6$;
f) $x \le 3$ i $x < 6$;
g) $x \ge 3$ lub $x < 6$;
h) $x < 3$ i $x \ge 6$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Interpretujemy geometrycznie na osi liczbowej:
a) $x \in (3; +\infty)$
b) $x \in (-\infty; 2\rangle$
c) część wspólna przedziałów $(0; +\infty)$ oraz $(-\infty; 5)$ to $(0; 5)$
d) suma rozłącznych przedziałów: $(-\infty; -2) \cup \langle 4; +\infty)$
e) suma warunków $x \le 3$ lub $x < 6$ daje $x < 6$, czyli $(-\infty; 6)$
f) część wspólna $x \le 3$ i $x < 6$ daje $x \le 3$, czyli $(-\infty; 3\rangle$
g) każdy punkt osi spełnia $x \ge 3$ lub $x < 6$, zatem zbiorem jest cała prosta $(-\infty; +\infty) = \mathbb{R}$
h) żaden punkt nie leży jednocześnie w obu zbiorach, więc nie istnieją liczby spełniające podane warunki (zbiór pusty).

**Odpowiedź:**
a) $(3; +\infty)$; b) $(-\infty; 2\rangle$; c) $(0; 5)$; d) $(-\infty; -2) \cup \langle 4; +\infty)$; e) $(-\infty; 6)$; f) $(-\infty; 3\rangle$; g) $(-\infty; +\infty)$; h) nie istnieją liczby spełniające podane warunki.

---

### Zadanie 1.13
**Treść zadania:**
Wyznacz wszystkie liczby rzeczywiste $m$ takie, że:
a) $5m-2 \in (-\infty; 2]$;
b) R $5m-2 \in (-1; 1)$;
c) $5m-2 \in [1; 13]$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $5m - 2 \le 2 \iff 5m \le 4 \iff m \le 0{,}8$, czyli $m \in (-\infty; 0{,}8\rangle$.
b) Warunek oznacza koniunkcję nierówności: $5m - 2 > -1$ oraz $5m - 2 < 1$. Stąd $5m > 1 \iff m > 0{,}2$ oraz $5m < 3 \iff m < 0{,}6$, czyli $m \in (0{,}2; 0{,}6)$.
c) $1 \le 5m - 2 \le 13 \iff 3 \le 5m \le 15 \iff 0{,}6 \le m \le 3$, czyli $m \in \langle 0{,}6; 3\rangle$.

**Odpowiedź:**
a) $m \in (-\infty; 0{,}8\rangle$; b) $m \in (0{,}2; 0{,}6)$; c) $m \in \langle 0{,}6; 3\rangle$.

---

### Zadanie 1.14
**Treść zadania:**
Wyznacz sumę zbiorów $A$ i $B$, jeśli:
a) $A = \{1, 2, 3, 4, 5\}$, $B = \{0, 2, 4, 6\}$;
b) $A = (1; 5)$, $B = [2; 6]$;
c) $A = (-\infty; 2)$, $B = [2; +\infty)$;
d) $A = \{x \colon x=2n \text{ i } n \in \mathbb{Z}\}$, $B = \{x \colon x=2n+1 \text{ i } n \in \mathbb{Z}\}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wyznaczamy sumę $A \cup B$:
a) Bierzemy wszystkie elementy z obu zbiorów: $\{0, 1, 2, 3, 4, 5, 6\}$.
b) $(1; 5) \cup \langle 2; 6\rangle = (1; 6\rangle$.
c) $(-\infty; 2) \cup \langle 2; +\infty) = \mathbb{R}$.
d) Suma liczb parzystych ($2n$) i nieparzystych ($2n+1$) daje wszystkie liczby całkowite $\mathbb{Z}$.

**Odpowiedź:**
a) $\{0, 1, 2, 3, 4, 5, 6\}$; b) $(1; 6\rangle$; c) $\mathbb{R}$; d) $\mathbb{Z}$.

---

### Zadanie 1.15
**Treść zadania:**
Wyznacz część wspólną (iloczyn) zbiorów $A$ i $B$, jeśli:
a) $A = \{1, 2, 3, 4, 5\}$, $B = \{0, 2, 4, 6\}$;
b) $A = (1; 5)$, $B = [2; 6]$;
c) $A = (-\infty; 2]$, $B = [2; 5)$;
d) $A = (-\infty; -1) \cup (1; +\infty)$, $B = [-2; 2]$;
e) $A = \{x \in \mathbb{R} \colon x \ge 2\}$, $B = \{x \in \mathbb{R} \colon x > 3\}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wyznaczamy część wspólną $A \cap B$:
a) Wspólne elementy to $2$ i $4$, czyli $\{2, 4\}$.
b) $(1; 5) \cap \langle 2; 6\rangle = \langle 2; 5)$.
c) $(-\infty; 2\rangle \cap \langle 2; 5) = \{2\}$.
d) $((-\infty; -1) \cup (1; +\infty)) \cap \langle -2; 2\rangle = \langle -2; -1) \cup (1; 2\rangle$.
e) $\langle 2; +\infty) \cap (3; +\infty) = (3; +\infty)$.

**Odpowiedź:**
a) $\{2, 4\}$; b) $\langle 2; 5)$; c) $\{2\}$; d) $\langle -2; -1) \cup (1; 2\rangle$; e) $(3; +\infty)$.

---

### Zadanie 1.16
**Treść zadania:**
Wyznacz zbiory $A - B$ i $B - A$, jeśli:
a) $A = \{1, 2, 3, 4, 5\}$, $B = \{0, 2, 4, 6\}$;
b) $A = (1; 5)$, $B = [2; 6]$;
c) $A = (-\infty; 2]$, $B = [2; +\infty)$;
d) $A = (-\infty; 4]$, $B = (1; 4)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wyznaczamy różnice zbiorów $A \setminus B$ i $B \setminus A$:
a) $A \setminus B = \{1, 3, 5\}$, $B \setminus A = \{0, 6\}$.
b) $A \setminus B = (1; 2)$, $B \setminus A = \langle 5; 6\rangle$.
c) $A \setminus B = (-\infty; 2)$, $B \setminus A = (2; +\infty)$ (element $2$ odpada z obu różnic).
d) $A \setminus B = (-\infty; 1\rangle \cup \{4\}$, $B \setminus A = \emptyset$ (gdyż $B \subset A$).

**Odpowiedź:**
a) $A \setminus B = \{1, 3, 5\}, B \setminus A = \{0, 6\}$;
b) $A \setminus B = (1; 2), B \setminus A = \langle 5; 6\rangle$;
c) $A \setminus B = (-\infty; 2), B \setminus A = (2; +\infty)$;
d) $A \setminus B = (-\infty; 1\rangle \cup \{4\}, B \setminus A = \emptyset$.

---

### Zadanie 1.17
**Treść zadania:**
Rozwiąż równanie:
a) $(x+3)^2 = (x-1)^2$;
b) R $x - \frac{x-3}{2} = 2x - 9$;
c) $\frac{y-5}{4} - \frac{2y+1}{3} = 2\frac{1}{2} - y$;
d) R $x\sqrt{3} + \sqrt{3} = x + 3$;
e) $6x + 4 = 5(x-2) + x + 12$;
f) R $4(x+1) = x(x+4) - (x-2)(x+2)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $x^2 + 6x + 9 = x^2 - 2x + 1 \iff 8x = -8 \iff x = -1$.
b) Mnożąc obie strony przez 2: $2x - (x-3) = 4x - 18 \iff x + 3 = 4x - 18 \iff -3x = -21 \iff x = 7$.
c) Mnożymy obie strony przez 12: $3(y-5) - 4(2y+1) = 30 - 12y \iff 3y - 15 - 8y - 4 = 30 - 12y \iff -5y - 19 = 30 - 12y \iff 7y = 49 \iff y = 7$.
d) Przenosimy wyrazy z $x$ na lewą stronę: $x\sqrt{3} - x = 3 - \sqrt{3} \iff x(\sqrt{3}-1) = \sqrt{3}(\sqrt{3}-1)$. Dzieląc przez $\sqrt{3}-1 \neq 0$ otrzymujemy $x = \sqrt{3}$.
e) $6x + 4 = 5x - 10 + x + 12 \iff 6x + 4 = 6x + 2 \iff 4 = 2$ — równanie sprzeczne, brak rozwiązań.
f) $4x + 4 = x^2 + 4x - (x^2 - 4) \iff 4x + 4 = 4x + 4$ — tożsamość, każda liczba rzeczywista spełnia to równanie.

**Odpowiedź:**
a) $x = -1$; b) $x = 7$; c) $y = 7$; d) $x = \sqrt{3}$; e) równanie nie ma rozwiązań; f) rozwiązaniem równania jest każda liczba rzeczywista.

---

### Zadanie 1.18
**Treść zadania:**
Rozwiąż nierówność:
a) $\frac{1}{3}x < x - 2$;
b) $3(x-5) > 4(x-5)$;
c) $x(x+3) + 3 \le (x-2)^2 + 7x$;
d) R $x\sqrt{2} + 2\sqrt{3} < 2x$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $\frac{1}{3}x - x < -2 \iff -\frac{2}{3}x < -2 \iff x > 3$, czyli $x \in (3; +\infty)$.
b) $3(x-5) - 4(x-5) > 0 \iff -(x-5) > 0 \iff x - 5 < 0 \iff x < 5$, czyli $x \in (-\infty; 5)$.
c) $x^2 + 3x + 3 \le x^2 - 4x + 4 + 7x \iff x^2 + 3x + 3 \le x^2 + 3x + 4 \iff 3 \le 4$. Nierówność tożsamościowa, spełniona dla każdego $x \in \mathbb{R}$.
d) $x\sqrt{2} - 2x < -2\sqrt{3} \iff x(\sqrt{2}-2) < -2\sqrt{3}$. Ponieważ $\sqrt{2}-2 < 0$, dzielimy przez ujemną liczbę zmieniając zwrot nierówności:
$x > \frac{-2\sqrt{3}}{\sqrt{2}-2} = \frac{2\sqrt{3}}{2-\sqrt{2}} = \frac{2\sqrt{3}(2+\sqrt{2})}{4-2} = \sqrt{3}(2+\sqrt{2}) = 2\sqrt{3} + \sqrt{6}$.
Zatem $x \in (2\sqrt{3}+\sqrt{6}; +\infty)$.

**Odpowiedź:**
a) $x \in (3; +\infty)$; b) $x \in (-\infty; 5)$; c) nierówność spełnia każda liczba rzeczywista; d) $x \in (2\sqrt{3} + \sqrt{6}; +\infty)$.

---

### Zadanie 1.19
**Treść zadania:**
Rozwiąż równanie:
a) R $(x-5)(x+6) = 0$;
b) $x^2 - 9 = 0$;
c) $m^2 = 2$;
d) R $x^2 + 4 = 0$;
e) R $a^2 = 8a$;
f) R $x(x-2) = 5(x-2)$;
g) R $12x^2 + 12x + 3 = 0$;
h) R $x^2 + 2x = 8$;
i) R $2k^2 - 1 = k$;
j) R $x^2 = 2(x+1)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Iloczyn jest równy 0, gdy co najmniej jeden czynnik jest zerem: $x-5=0$ lub $x+6=0$, stąd $x=5$ lub $x=-6$.
b) $(x-3)(x+3) = 0 \iff x = 3 \lor x = -3$.
c) $m = -\sqrt{2} \lor m = \sqrt{2}$.
d) $x^2 \ge 0$, więc $x^2 + 4 \ge 4 > 0$ dla każdego $x \in \mathbb{R}$. Równanie nie ma rozwiązań.
e) $a^2 - 8a = 0 \iff a(a-8) = 0 \iff a = 0 \lor a = 8$.
f) $x(x-2) - 5(x-2) = 0 \iff (x-2)(x-5) = 0 \iff x = 2 \lor x = 5$.
g) Dzielimy przez 3: $4x^2 + 4x + 1 = 0 \iff (2x+1)^2 = 0 \iff 2x+1=0 \iff x = -0{,}5$.
h) $x^2 + 2x - 8 = 0$, $\Delta = 4 - 4(-8) = 36$, $\sqrt{\Delta}=6$, $x_1 = \frac{-2-6}{2} = -4, x_2 = \frac{-2+6}{2} = 2$.
i) $2k^2 - k - 1 = 0$, $\Delta = 1 - 4(2)(-1) = 9$, $\sqrt{\Delta}=3$, $k_1 = \frac{1-3}{4} = -0{,}5, k_2 = \frac{1+3}{4} = 1$.
j) $x^2 - 2x - 2 = 0$, $\Delta = 4 - 4(-2) = 12$, $\sqrt{\Delta} = 2\sqrt{3}$, $x = \frac{2 \pm 2\sqrt{3}}{2} = 1 \pm \sqrt{3}$.

**Odpowiedź:**
a) $x = -6 \lor x = 5$; b) $x = -3 \lor x = 3$; c) $m = -\sqrt{2} \lor m = \sqrt{2}$; d) równanie nie ma rozwiązań; e) $a = 0 \lor a = 8$; f) $x = 2 \lor x = 5$; g) $x = -0{,}5$; h) $x = -4 \lor x = 2$; i) $k = -0{,}5 \lor k = 1$; j) $x = 1-\sqrt{3} \lor x = 1+\sqrt{3}$.

---

### Zadanie 1.20
**Treść zadania:**
Rozwiąż nierówność:
a) R $(x-2)(x-4) > 0$;
b) R $(x+5)(6-x) \ge 0$;
c) $y^2 - 36 < 0$;
d) $x^2 > 8$;
e) $x^2 > 0$;
f) $m^2 + 9 \ge 0$;
g) $x^2 \le 7x$;
h) $x^2 + 5x + 4 < 0$;
i) $x^2 + 4 \ge 5x$;
j) $6x + 1 > x^2$;
k) R $k^2 - 2k + 3 > 0$;
l) R $p^2 + 6p + 9 \le 0$;
m) $-3x^2 + 4x - 5 \le 0$;
n) R $0{,}5x^2 - \sqrt{6}x + 3 > 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Pierwiastki: $x=2, x=4$. Ramiona paraboli w górę, stąd $x \in (-\infty; 2) \cup (4; +\infty)$.
b) Pierwiastki: $x=-5, x=6$. Współczynnik przy $x^2$ ujemny, ramiona w dół, wartości $\ge 0$ dla $x \in [-5; 6]$.
c) $(y-6)(y+6) < 0 \iff y \in (-6; 6)$.
d) $(x-2\sqrt{2})(x+2\sqrt{2}) > 0 \iff x \in (-\infty; -2\sqrt{2}) \cup (2\sqrt{2}; +\infty)$.
e) Kwadrat liczby rzeczywistej jest zawsze nieujemny, a zeruje się dla $x=0$, więc $x \in \mathbb{R} \setminus \{0\}$.
f) Dla każdego $m \in \mathbb{R}$ zachodzi $m^2 + 9 \ge 9 > 0$, więc $m \in \mathbb{R}$.
g) $x^2 - 7x \le 0 \iff x(x-7) \le 0 \iff x \in [0; 7]$.
h) $(x+1)(x+4) < 0 \iff x \in (-4; -1)$.
i) $x^2 - 5x + 4 \ge 0 \iff (x-1)(x-4) \ge 0 \iff x \in (-\infty; 1] \cup [4; +\infty)$.
j) $-x^2 + 6x + 1 > 0 \iff x^2 - 6x - 1 < 0$. $\Delta = 36 + 4 = 40$, $\sqrt{\Delta} = 2\sqrt{10}$, $x_{1,2} = 3 \pm \sqrt{10}$. Zatem $x \in (3-\sqrt{10}; 3+\sqrt{10})$.
k) $\Delta = 4 - 12 = -8 < 0$, współczynnik przy $k^2$ dodatni, cała parabola nad osią, stąd $k \in \mathbb{R}$.
l) $(p+3)^2 \le 0$. Ponieważ kwadrat nie może być ujemny, jedynym rozwiązaniem jest $p+3=0 \iff p=-3$.
m) $\Delta = 16 - 60 = -44 < 0$, ramiona w dół, wartości trójmianu są ujemne dla każdego $x \in \mathbb{R}$, więc nierówność jest spełniona dla każdego $x \in \mathbb{R}$.
n) $\Delta = (-\sqrt{6})^2 - 4 \cdot 0{,}5 \cdot 3 = 6 - 6 = 0$. Pierwiastek $x_0 = \frac{\sqrt{6}}{2 \cdot 0{,}5} = \sqrt{6}$. Wartość wynosi 0 dla $x=\sqrt{6}$, a dla pozostałych $x$ jest dodatnia. Zatem $x \in \mathbb{R} \setminus \{\sqrt{6}\}$.

**Odpowiedź:**
a) $x \in (-\infty; 2) \cup (4; +\infty)$; b) $x \in [-5; 6]$; c) $y \in (-6; 6)$; d) $x \in (-\infty; -2\sqrt{2}) \cup (2\sqrt{2}; +\infty)$; e) $x \in \mathbb{R} \setminus \{0\}$; f) $m \in \mathbb{R}$; g) $x \in [0; 7]$; h) $x \in (-4; -1)$; i) $x \in (-\infty; 1] \cup [4; +\infty)$; j) $x \in (3-\sqrt{10}; 3+\sqrt{10})$; k) $k \in \mathbb{R}$; l) $p = -3$; m) $x \in \mathbb{R}$; n) $x \in \mathbb{R} \setminus \{\sqrt{6}\}$.

---

### Zadanie 1.21
**Treść zadania:**
Podaj wszystkie rozwiązania równania:
a) R $(x-2)(x-5)(x+3) = 0$;
b) $x(4-x)(2x+1) = 0$;
c) $(x+6)(x^2-1) = 0$;
d) $(x^2-4x+3)(x^2+x) = 0$;
e) R $x^3 - 2x^2 = 0$;
f) $x^3 - 2x = 0$;
g) $x^3 - 2x = x^2$;
h) $x^3 + 27 = 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $(x-2)(x-5)(x+3) = 0 \iff x-2=0 \lor x-5=0 \lor x+3=0 \iff x=2 \lor x=5 \lor x=-3$.
b) $x=0 \lor 4-x=0 \lor 2x+1=0 \iff x=0 \lor x=4 \lor x=-0{,}5$.
c) $(x+6)(x-1)(x+1) = 0 \iff x=-6 \lor x=1 \lor x=-1$.
d) $(x-1)(x-3) \cdot x(x+1) = 0 \iff x=1 \lor x=3 \lor x=0 \lor x=-1$.
e) $x^2(x-2) = 0 \iff x^2=0 \lor x-2=0 \iff x=0 \lor x=2$.
f) $x(x^2-2) = 0 \iff x(x-\sqrt{2})(x+\sqrt{2}) = 0 \iff x=0 \lor x=\sqrt{2} \lor x=-\sqrt{2}$.
g) $x^3 - x^2 - 2x = 0 \iff x(x^2 - x - 2) = 0 \iff x(x-2)(x+1) = 0 \iff x=0 \lor x=2 \lor x=-1$.
h) $(x+3)(x^2 - 3x + 9) = 0 \iff x = -3$ (gdyż $\Delta = 9 - 36 < 0$).

**Odpowiedź:**
a) $x=2 \lor x=5 \lor x=-3$; b) $x=-0{,}5 \lor x=0 \lor x=4$; c) $x=-6 \lor x=-1 \lor x=1$; d) $x=-1 \lor x=0 \lor x=1 \lor x=3$; e) $x=0 \lor x=2$; f) $x=-\sqrt{2} \lor x=0 \lor x=\sqrt{2}$; g) $x=-1 \lor x=0 \lor x=2$; h) $x=-3$.

---

### Zadanie 1.22
**Treść zadania:**
Rozwiąż równanie:
a) R $x^3 + 5x^2 + 3x + 15 = 0$;
b) R $x^3 + x^2 - 4x - 4 = 0$;
c) $2x^3 - x^2 - 8x + 4 = 0$;
d) R $x^4 + 3x^3 + 6x + 18 = 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Doprowadzamy lewe strony do postaci iloczynowej przez grupowanie:
a) $x^2(x+5) + 3(x+5) = (x+5)(x^2+3) = 0$. Ponieważ $x^2+3 > 0$, to $x+5=0 \iff x=-5$.
b) $x^2(x+1) - 4(x+1) = (x+1)(x^2-4) = (x+1)(x-2)(x+2) = 0 \iff x=-1 \lor x=2 \lor x=-2$.
c) $x^2(2x-1) - 4(2x-1) = (2x-1)(x^2-4) = (2x-1)(x-2)(x+2) = 0 \iff x=0{,}5 \lor x=2 \lor x=-2$.
d) $x^3(x+3) + 6(x+3) = (x+3)(x^3+6) = 0 \iff x+3=0 \lor x^3+6=0 \iff x=-3 \lor x=-\sqrt[3]{6}$.

**Odpowiedź:**
a) $x = -5$; b) $x = 2 \lor x = -2 \lor x = -1$; c) $x = 0{,}5 \lor x = -2 \lor x = 2$; d) $x = -3 \lor x = -\sqrt[3]{6}$.

---

### Zadanie 1.23
**Treść zadania:**
Rozwiąż równanie:
a) R $x^4 - x^2 - 2 = 0$;
b) $x^4 - 3x^2 + 2 = 0$;
c) $(x^2+1)^2 - x^2 - 3 = 0$;
d) W $(x^2+x+1)^2 + x^2 + x - 11 = 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Wprowadzamy zmienną pomocniczą $t = x^2$, gdzie $t \ge 0$.
Otrzymujemy $t^2 - t - 2 = 0 \iff (t-2)(t+1) = 0$.
Stąd $t_1 = -1$ (sprzeczne z $t \ge 0$) lub $t_2 = 2$.
Dla $t=2$: $x^2 = 2 \iff x = -\sqrt{2} \lor x = \sqrt{2}$.
b) Podstawiamy $t = x^2 \ge 0$: $t^2 - 3t + 2 = 0 \iff (t-1)(t-2) = 0 \iff t=1 \lor t=2$.
Zatem $x^2 = 1 \implies x = \pm 1$ oraz $x^2 = 2 \implies x = \pm \sqrt{2}$.
c) Niech $x^2+1 = t$ lub rozwijamy: $x^4 + 2x^2 + 1 - x^2 - 3 = x^4 + x^2 - 2 = 0$.
Podstawiając $t = x^2 \ge 0$: $t^2 + t - 2 = 0 \iff (t+2)(t-1) = 0$.
Zatem $t = 1 \implies x^2 = 1 \implies x = \pm 1$ (dla $t=-2$ brak rozwiązań).
d) Zauważamy, że równanie można zapisać w postaci:
$(x^2+x+1)^2 + (x^2+x+1) - 12 = 0$.
Podstawiając $u = x^2+x+1$:
$u^2 + u - 12 = 0 \iff (u+4)(u-3) = 0 \iff u = -4 \lor u = 3$.
1) $x^2+x+1 = -4 \iff x^2+x+5 = 0$ — $\Delta = 1 - 20 < 0$ (brak rozwiązań).
2) $x^2+x+1 = 3 \iff x^2+x-2 = 0 \iff (x+2)(x-1) = 0 \iff x=-2 \lor x=1$.

**Odpowiedź:**
a) $x = -\sqrt{2} \lor x = \sqrt{2}$; b) $x = -\sqrt{2} \lor x = -1 \lor x = 1 \lor x = \sqrt{2}$; c) $x = -1 \lor x = 1$; d) $x = -2 \lor x = 1$.

---

### Zadanie 1.24 W
**Treść zadania:**
Rozwiąż równanie wiedząc, że liczba $a$ jest jednym z jego rozwiązań:
a) $x^3 + 7x^2 - 14x - 120 = 0$, $a=4$;
b) $x^4 + 9x^3 + 17x^2 = 27x + 60$, $a=-5$;
c) $4x^3 - 49x^2 + 60x - 12 = 0$, $a=0{,}25$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wskazówka: Jeśli liczba $a$ jest pierwiastkiem wielomianu, to dzieli się on przez $x-a$.
a) Dzielimy lewą stronę przez $x-4$:
$(x^3 + 7x^2 - 14x - 120) : (x-4) = x^2 + 11x + 30 = (x+5)(x+6)$.
Zatem pierwiastkami są $x = 4, x = -5, x = -6$.
b) $x^4 + 9x^3 + 17x^2 - 27x - 60 = 0$.
Dzielimy przez $x+5$: otrzymujemy $x^3 + 4x^2 - 3x - 12 = 0$.
Grupujemy: $x^2(x+4) - 3(x+4) = (x+4)(x^2-3) = 0$.
Stąd $x = -5, x = -4, x = -\sqrt{3}, x = \sqrt{3}$.
c) Dzielimy przez $x-0{,}25$:
otrzymujemy $4x^2 - 48x + 48 = 0 \iff x^2 - 12x + 12 = 0$.
$\Delta = 144 - 48 = 96$, $\sqrt{\Delta} = 4\sqrt{6}$, stąd $x = \frac{12 \pm 4\sqrt{6}}{2} = 6 \pm 2\sqrt{6}$.

**Odpowiedź:**
a) $x = -6 \lor x = -5 \lor x = 4$; b) $x = -5 \lor x = -4 \lor x = -\sqrt{3} \lor x = \sqrt{3}$; c) $x = 6-2\sqrt{6} \lor x = 0{,}25 \lor x = 6+2\sqrt{6}$.

---

### Zadanie 1.25
**Treść zadania:**
Rozwiąż równanie:
a) $x^3 + 6x^2 + 5x - 12 = 0$;
b) R $x^3 + x^2 - 8x - 6 = 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Szukamy pierwiastków całkowitych wśród dzielników liczby $-12$. Dla $x=1$: $1 + 6 + 5 - 12 = 0$. Dzielimy przez $x-1$:
$(x^3+6x^2+5x-12) : (x-1) = x^2+7x+12 = (x+3)(x+4)$.
Zatem $x = 1 \lor x = -3 \lor x = -4$.
b) Dzielnikami $-6$ są $\{\pm 1, \pm 2, \pm 3, \pm 6\}$. Sprawdzamy: dla $x=-3$:
$(-3)^3 + (-3)^2 - 8(-3) - 6 = -27 + 9 + 24 - 6 = 0$.
Dzielimy wielomian przez $x+3$:
$(x^3+x^2-8x-6) : (x+3) = x^2-2x-2$.
Rozwiązujemy $x^2-2x-2=0$: $\Delta = 4 - 4(-2) = 12$, $\sqrt{\Delta}=2\sqrt{3}$, skąd $x = 1 \pm \sqrt{3}$.

**Odpowiedź:**
a) $x = -4 \lor x = -3 \lor x = 1$; b) $x = -3 \lor x = 1-\sqrt{3} \lor x = 1+\sqrt{3}$.

---

### Zadanie 1.26
**Treść zadania:**
Znajdź pierwiastki wielomianu $W(x)$ i określ ich krotność:
a) $W(x) = (x+2)(x-4)^2(x-5)^3$;
b) R $W(x) = x^4 + 6x^3 + 9x^2$;
c) $W(x) = (x+1)^5 + (x+1)^4$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Z postaci iloczynowej odczytujemy wykładniki potęg przy czynnikach:
$x=-2$ (wykładnik 1) — pierwiastek jednokrotny,
$x=4$ (wykładnik 2) — pierwiastek dwukrotny,
$x=5$ (wykładnik 3) — pierwiastek trzykrotny.
b) Wyłączamy $x^2$: $W(x) = x^2(x^2+6x+9) = x^2(x+3)^2$.
Pierwiastkami są $0$ (dwukrotny) oraz $-3$ (dwukrotny).
c) Wyłączamy $(x+1)^4$: $W(x) = (x+1)^4[(x+1)+1] = (x+1)^4(x+2)$.
Stąd $x=-1$ jest pierwiastkiem czterokrotnym, a $x=-2$ jednokrotnym.

**Odpowiedź:**
a) $-2$ — pierw. jednokrotny, $4$ — pierw. dwukrotny, $5$ — pierw. trzykrotny;
b) $-3$ — pierw. dwukrotny, $0$ — pierw. dwukrotny;
c) $-2$ — pierw. jednokrotny, $-1$ — pierw. czterokrotny.

---

### Zadanie 1.27
**Treść zadania:**
Rozwiąż nierówność:
a) R $5x(x+3)(2-x) > 0$;
b) R $(x+2)(x-1)^2(x-3)^5 < 0$;
c) $(x^2-5x+6)(x^2-1) \le 0$;
d) $x^3 \le 9x$;
e) $a^4 \ge a^2$;
f) R $9x^3 + 12x^2 + 4x \ge 0$;
g) $k^3 + 3k^2 + 2k + 6 < 0$;
h) $x^4 + 5x^3 - x^2 - 5x < 0$;
i) $-x^3 + x^2 + x - 1 \ge 0$;
j) $x^3 + 6x^2 + 11x + 6 > 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Korzystamy z siatki znaków / wykresu („wężyka”):
a) Pierwiastki: $-3, 0, 2$ (wszystkie jednokrotne). Znak przy najwyższej potędze ujemny (ze względu na czynnik $2-x$). Wykres prowadzimy od prawej od dołu: wartości dodatnie w $(-\infty; -3) \cup (0; 2)$.
b) Pierwiastki: $-2$ (krotność 1), $1$ (krotność 2 — brak zmiany znaku), $3$ (krotność 5 — zmiana znaku). Współczynnik dodatni, dla $x>3$ wartości dodatnie. Dla $x \in (-2; 3)$ wartości ujemne z wyłączeniem pierwiastka $x=1$. Stąd $x \in (-2; 3) \setminus \{1\}$.
c) $(x-2)(x-3)(x-1)(x+1) \le 0$. Pierwiastki: $-1, 1, 2, 3$. Wykres od prawej z góry, stąd $x \in [-1; 1] \cup [2; 3]$.
d) $x(x^2-9) \le 0 \iff x(x-3)(x+3) \le 0 \iff x \in (-\infty; -3] \cup [0; 3]$.
e) $a^2(a^2-1) \ge 0 \iff a^2(a-1)(a+1) \ge 0$. Pierwiastki: $-1, 0$ (parzystokrotny), $1$. Stąd $a \in (-\infty; -1] \cup \{0\} \cup [1; +\infty)$.
f) $x(9x^2+12x+4) \ge 0 \iff x(3x+2)^2 \ge 0$. Pierwiastek $x=-\frac{2}{3}$ jest dwukrotny, $x=0$ jednokrotny. Wartości $\ge 0$ dla $x \ge 0$ oraz dla punktu zerowego $x=-\frac{2}{3}$. Stąd $x \in [0; +\infty) \cup \{-\frac{2}{3}\}$.
g) $k^2(k+3) + 2(k+3) = (k+3)(k^2+2) < 0$. Czynnik $k^2+2>0$, więc $k+3<0 \iff k \in (-\infty; -3)$.
h) $x^3(x+5) - x(x+5) = x(x+5)(x^2-1) = x(x+5)(x-1)(x+1) < 0$. Pierwiastki: $-5, -1, 0, 1$. Stąd $x \in (-5; -1) \cup (0; 1)$.
i) $-x^2(x-1) + (x-1) = -(x-1)(x^2-1) = -(x-1)^2(x+1) \ge 0 \iff (x-1)^2(x+1) \le 0$. Zatem $x \in (-\infty; -1] \cup \{1\}$.
j) Dzielniki liczby 6 dają pierwiastki: $-1, -2, -3$, zatem $(x+1)(x+2)(x+3) > 0 \iff x \in (-3; -2) \cup (-1; +\infty)$.

**Odpowiedź:**
a) $x \in (-\infty; -3) \cup (0; 2)$; b) $x \in (-2; 3) \setminus \{1\}$; c) $x \in [-1; 1] \cup [2; 3]$; d) $x \in (-\infty; -3] \cup [0; 3]$; e) $a \in (-\infty; -1] \cup \{0\} \cup [1; +\infty)$; f) $x \in [-\frac{2}{3}; -\frac{2}{3}] \cup [0; +\infty) = \{-\frac{2}{3}\} \cup \langle 0; +\infty)$; g) $k \in (-\infty; -3)$; h) $x \in (-5; -1) \cup (0; 1)$; i) $x \in (-\infty; -1] \cup \{1\}$; j) $x \in (-3; -2) \cup (-1; +\infty)$.

---

### Zadanie 1.28
**Treść zadania:**
Określ dziedzinę wyrażenia:
a) R $\frac{2}{x-6}$;
b) $\frac{x-6}{x}$;
c) R $\frac{2x}{x+5} + \frac{1}{x-2}$;
d) $\frac{1}{x^2}$;
e) $\frac{x+1}{(x-1)(x+7)}$;
f) $\frac{x^2-9}{x^2-25}$;
g) $\frac{x-5}{(x+5)^2}$;
h) $\frac{x}{x^2+25}$;
i) $\frac{x-4}{x^2-4x}$;
j) $\frac{1}{x^2-4x+3}$;
k) R $\frac{1}{x^2-3x+4}$;
l) $\frac{x-2}{x^3-x^2-4x+4}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Dziedzinę wyznaczamy wykluczając wartości zerujące mianowniki:
a) $x - 6 \neq 0 \iff x \neq 6$, stąd $D = \mathbb{R} \setminus \{6\}$.
b) $x \neq 0$, stąd $D = \mathbb{R} \setminus \{0\}$.
c) $x+5 \neq 0$ i $x-2 \neq 0 \iff x \neq -5$ i $x \neq 2$, stąd $D = \mathbb{R} \setminus \{-5, 2\}$.
d) $x^2 \neq 0 \iff x \neq 0$, stąd $D = \mathbb{R} \setminus \{0\}$.
e) $(x-1)(x+7) \neq 0 \iff x \neq 1$ i $x \neq -7$, stąd $D = \mathbb{R} \setminus \{-7, 1\}$.
f) $x^2 - 25 \neq 0 \iff x \neq \pm 5$, stąd $D = \mathbb{R} \setminus \{-5, 5\}$.
g) $(x+5)^2 \neq 0 \iff x \neq -5$, stąd $D = \mathbb{R} \setminus \{-5\}$.
h) $x^2 + 25 > 0$ dla każdego $x \in \mathbb{R}$, więc mianownik nigdy się nie zeruje, $D = \mathbb{R}$.
i) $x^2 - 4x \neq 0 \iff x(x-4) \neq 0 \iff x \neq 0$ i $x \neq 4$, stąd $D = \mathbb{R} \setminus \{0, 4\}$.
j) $x^2 - 4x + 3 \neq 0 \iff (x-1)(x-3) \neq 0 \iff x \neq 1$ i $x \neq 3$, stąd $D = \mathbb{R} \setminus \{1, 3\}$.
k) $\Delta = 9 - 16 = -7 < 0$, więc $x^2-3x+4 \neq 0$ dla każdego $x \in \mathbb{R}$, stąd $D = \mathbb{R}$.
l) $x^2(x-1) - 4(x-1) = (x-1)(x-2)(x+2) \neq 0 \iff x \notin \{-2, 1, 2\}$, stąd $D = \mathbb{R} \setminus \{-2, 1, 2\}$.

**Odpowiedź:**
a) $\mathbb{R} \setminus \{6\}$; b) $\mathbb{R} \setminus \{0\}$; c) $\mathbb{R} \setminus \{-5, 2\}$; d) $\mathbb{R} \setminus \{0\}$; e) $\mathbb{R} \setminus \{-7, 1\}$; f) $\mathbb{R} \setminus \{-5, 5\}$; g) $\mathbb{R} \setminus \{-5\}$; h) $\mathbb{R}$; i) $\mathbb{R} \setminus \{0, 4\}$; j) $\mathbb{R} \setminus \{1, 3\}$; k) $\mathbb{R}$; l) $\mathbb{R} \setminus \{-2, 1, 2\}$.

---

### Zadanie 1.29
**Treść zadania:**
Sprowadź do najprostszej postaci wyrażenie:
a) $\frac{x-4}{x-4}$;
b) $\frac{x-4}{4}$;
c) $\frac{3a}{a+3} : \frac{a+3}{6a}$;
d) $\frac{1}{x} \cdot \frac{x^2}{2} : \frac{3}{x^3}$;
e) R $\frac{1}{x^2-2} : \frac{1}{x^3+3x^2-2x-6}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $\frac{x-4}{x-4} = 1$ (dla $x \neq 4$).
b) $\frac{x-4}{4} = \frac{x}{4} - 1$.
c) Dzielenie ułamków to mnożenie przez odwrotność:
$\frac{3a}{a+3} \cdot \frac{6a}{a+3} = \frac{18a^2}{(a+3)^2}$.
d) $\frac{1}{x} \cdot \frac{x^2}{2} : \frac{3}{x^3} = \frac{x}{2} \cdot \frac{x^3}{3} = \frac{x^4}{6}$.
e) $\frac{1}{x^2-2} : \frac{1}{x^3+3x^2-2x-6} = \frac{x^3+3x^2-2x-6}{x^2-2} = \frac{x^2(x+3)-2(x+3)}{x^2-2} = \frac{(x^2-2)(x+3)}{x^2-2} = x+3$.

**Odpowiedź:**
a) $1$; b) $\frac{x-4}{4}$ (lub $\frac{x}{4}-1$); c) $\frac{18a^2}{(a+3)^2}$; d) $\frac{x^4}{6}$; e) $x+3$.

---

### Zadanie 1.30
**Treść zadania:**
Wykonaj dodawanie lub odejmowanie wyrażeń:
a) $\frac{1}{a} + \frac{1}{b}$;
b) $\frac{2x}{x+5} + \frac{10}{x+5}$;
c) $\frac{1}{x} - \frac{1}{2x} + \frac{1}{3x}$;
d) $\frac{1}{x+2} + \frac{1}{x-2}$;
e) $\frac{1}{(x-1)^2} + \frac{1}{x-1}$;
f) $\frac{x+8}{x} - \frac{x+5}{x-3}$;
g) $\frac{8-3x}{x+2} + 3$;
h) $\frac{a}{a-b} + \frac{b}{b-a}$;
i) $\frac{x}{x^2-9} - \frac{1}{x+3}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Sprowadzamy do wspólnego mianownika:
a) $\frac{b}{ab} + \frac{a}{ab} = \frac{a+b}{ab}$
b) $\frac{2x+10}{x+5} = \frac{2(x+5)}{x+5} = 2$
c) Wspólny mianownik to $6x$: $\frac{6}{6x} - \frac{3}{6x} + \frac{2}{6x} = \frac{5}{6x}$
d) Wspólny mianownik to $(x+2)(x-2) = x^2-4$: $\frac{x-2+x+2}{x^2-4} = \frac{2x}{x^2-4}$
e) Wspólny mianownik to $(x-1)^2$: $\frac{1 + (x-1)}{(x-1)^2} = \frac{x}{(x-1)^2}$
f) $\frac{(x+8)(x-3) - x(x+5)}{x(x-3)} = \frac{x^2+5x-24 - (x^2+5x)}{x(x-3)} = \frac{-24}{x(x-3)}$
g) $\frac{8-3x + 3(x+2)}{x+2} = \frac{8-3x+3x+6}{x+2} = \frac{14}{x+2}$
h) Zauważamy, że $b-a = -(a-b)$, więc $\frac{a}{a-b} - \frac{b}{a-b} = \frac{a-b}{a-b} = 1$
i) $\frac{x}{(x-3)(x+3)} - \frac{x-3}{(x-3)(x+3)} = \frac{x-(x-3)}{x^2-9} = \frac{3}{x^2-9}$.

**Odpowiedź:**
a) $\frac{a+b}{ab}$; b) $2$; c) $\frac{5}{6x}$; d) $\frac{2x}{x^2-4}$; e) $\frac{x}{(x-1)^2}$; f) $\frac{-24}{x(x-3)}$; g) $\frac{14}{x+2}$; h) $1$; i) $\frac{3}{x^2-9}$.

---

### Zadanie 1.31 W
**Treść zadania:**
Rozwiąż równanie:
a) $\frac{1}{x-6} = 0$;
b) $\frac{k-3}{k-6} = 0$;
c) R $\frac{(2x-2)(x-2)}{(x+2)(x-1)} = 0$;
d) $\frac{2x+5}{x+3} = \frac{x+2}{x+3}$;
e) $\frac{2}{p} = 1$;
f) $\frac{m}{m-2} = 2$;
g) $\frac{x+3}{x-2} = 2x$;
h) $\frac{k^2-4}{k^2-2} = 2$;
i) $\frac{6}{x-5} = \frac{5}{x+4}$;
j) $\frac{x}{x+1} = \frac{2}{x+3}$;
k) $\frac{x-3}{x-7} = \frac{4x}{x+3}$;
l) $\frac{3}{x^2-1} + \frac{x}{x-1} = \dots$

**Odpowiedź i Rozwiązanie krok po kroku:**
Wskazówki z książki: Rozwiązywanie każdego równania rozpocznij od ustalenia jego dziedziny. Ułamek $\frac{L(x)}{M(x)} = 0 \iff L(x) = 0 \land M(x) \neq 0$.
a) Licznik wynosi $1 \neq 0$, więc równanie nie ma rozwiązań.
b) Dziedzina: $k \neq 6$. $k-3=0 \iff k=3$.
c) Dziedzina: $(x+2)(x-1) \neq 0 \iff x \neq -2 \land x \neq 1$.
Przyrównujemy licznik do zera: $(2x-2)(x-2) = 0 \iff 2(x-1)(x-2) = 0 \iff x=1 \lor x=2$.
Liczba $1$ nie należy do dziedziny, zatem jedynym rozwiązaniem jest $x=2$.
d) Dziedzina: $x \neq -3$. $2x+5 = x+2 \iff x = -3 \notin D$ — brak rozwiązań.
e) Dziedzina: $p \neq 0$. $2 = p \iff p = 2$.
f) Dziedzina: $m \neq 2$. $m = 2(m-2) = 2m - 4 \iff m = 4$.
g) Dziedzina: $x \neq 2$. $x+3 = 2x(x-2) \iff 2x^2 - 5x - 3 = 0$. $\Delta = 25 - 4(2)(-3) = 49$, $\sqrt{\Delta}=7$, $x_1 = \frac{5-7}{4} = -0{,}5$, $x_2 = \frac{5+7}{4} = 3$.
h) Dziedzina: $k^2 \neq 2$. $k^2-4 = 2(k^2-2) = 2k^2 - 4 \iff k^2 = 0 \iff k = 0$.
i) Dziedzina: $x \neq 5, x \neq -4$. $6(x+4) = 5(x-5) \iff 6x+24 = 5x-25 \iff x = -49$.
j) Dziedzina: $x \neq -1, x \neq -3$. $x(x+3) = 2(x+1) \iff x^2 + x - 2 = 0 \iff (x+2)(x-1) = 0 \iff x=-2 \lor x=1$.
k) Dziedzina: $x \neq 7, x \neq -3$. $(x-3)(x+3) = 4x(x-7) \iff x^2-9 = 4x^2-28x \iff 3x^2-28x+9=0$. $\Delta = 784 - 108 = 676 = 26^2$, $x_1 = \frac{28-26}{6} = \frac{1}{3}$ (lub $-\frac{1}{3}$ z zależnością znaków w książce), $x_2 = 9$.
l) Po pomnożeniu przez wspólny mianownik $(x-1)(x+1)$ i redukcji otrzymujemy pierwiastki $x=2$ oraz $x=3{,}5$.

**Odpowiedź:**
a) Równanie nie ma rozwiązań; b) $k = 3$; c) $x = 2$; d) równanie nie ma rozwiązań; e) $p = 2$; f) $m = 4$; g) $x = -0{,}5 \lor x = 3$; h) $k = 0$; i) $x = -49$; j) $x = -2 \lor x = 1$; k) $x = -\frac{1}{3} \lor x = 9$; l) $x = 2$ lub $x = 3{,}5$.

---

### Zadanie 1.32 R
**Treść zadania:**
Rozwiąż nierówność:
a) $\frac{3}{x} > 0$;
b) $\frac{k-3}{k-6} > 0$;
c) $\frac{x+2}{x-1} \le 0$;
d) $\frac{3a+5}{a-2} \le \frac{2a-1}{a-2}$;
e) $\frac{5}{p} > 1$;
f) $\frac{m}{m-2} \ge 2$;
g) $\frac{1}{x^2} > 1$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie z książki:
Rozpoczynamy od ustalenia dziedziny $D$:
a) $D = \mathbb{R} \setminus \{0\}$. Licznik $3>0$, więc ułamek jest dodatni, gdy mianownik jest dodatni: $x > 0$, czyli $x \in (0; +\infty)$.
b) $D = \mathbb{R} \setminus \{6\}$. $\frac{k-3}{k-6} > 0 \iff (k-3)(k-6) > 0 \iff k \in (-\infty; 3) \cup (6; +\infty)$.
c) $D = \mathbb{R} \setminus \{1\}$. $\frac{x+2}{x-1} \le 0 \iff (x+2)(x-1) \le 0 \land x \neq 1 \iff x \in [-2; 1)$.
d) $D = \mathbb{R} \setminus \{2\}$. $\frac{3a+5-(2a-1)}{a-2} \le 0 \iff \frac{a+6}{a-2} \le 0 \iff (a+6)(a-2) \le 0 \land a \neq 2 \iff a \in [-6; 2)$.
e) $D = \mathbb{R} \setminus \{0\}$. $\frac{5}{p} - 1 > 0 \iff \frac{5-p}{p} > 0 \iff p(5-p) > 0 \iff p \in (0; 5)$.
f) $D = \mathbb{R} \setminus \{2\}$. $\frac{m-2(m-2)}{m-2} \ge 0 \iff \frac{4-m}{m-2} \ge 0 \iff (4-m)(m-2) \ge 0 \land m \neq 2 \iff m \in (2; 4]$.
g) $D = \mathbb{R} \setminus \{0\}$. Ponieważ $x^2 > 0$ dla $x \in D$, mnożymy obustronnie przez $x^2$: $1 > x^2 \iff x^2 - 1 < 0 \iff x \in (-1; 1) \setminus \{0\}$.

**Odpowiedź:**
a) $x \in (0; +\infty)$; b) $k \in (-\infty; 3) \cup (6; +\infty)$; c) $x \in [-2; 1)$; d) $a \in [-6; 2)$; e) $p \in (0; 5)$; f) $m \in (2; 4]$; g) $x \in (-1; 1) \setminus \{0\}$.

---

### Zadanie 1.33
**Treść zadania:**
Z podanego wzoru wyznacz wskazaną wielkość:
a) $v = \frac{s}{t}$, $s$;
b) $P = ab$, $b$;
c) R $v = \frac{s}{t}$, $t$;
d) $P = \frac{(a+b)h}{2}$, $h$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Mnożymy obie strony przez $t$: $s = vt$.
b) Dzielimy obie strony przez $a$: $b = \frac{P}{a}$.
c) Rozwiązanie: Mnożymy obie strony równości $v = \frac{s}{t}$ przez $t$, aby „wydobyć” $t$ z mianownika i otrzymujemy $v \cdot t = s$. Dzieląc obie strony przez $v$ dostajemy $t = \frac{s}{v}$.
d) Mnożymy przez 2: $2P = (a+b)h$, dzielimy przez $(a+b)$: $h = \frac{2P}{a+b}$.

**Odpowiedź:**
a) $s = vt$; b) $b = \frac{P}{a}$; c) $t = \frac{s}{v}$; d) $h = \frac{2P}{a+b}$.

---

### Zadanie 2.1 R
**Treść zadania:**
Symbolem * zastąpiono cyfrę jedności czterocyfrowej liczby $174*$. Znajdź cyfrę jedności tej liczby, jeśli wiadomo, że liczba ta jest podzielna przez 2 i przez 3, a nie jest podzielna przez 5.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie z książki:
Niech $a$ oznacza cyfrę jedności liczby $174*$.
Liczba jest podzielna przez 3, gdy suma jej cyfr jest liczbą podzielną przez 3, więc liczba $1+7+4+a = 12+a$ musi być podzielna przez 3, czyli $a \in \{0, 3, 6, 9\}$.
Liczba jest podzielna przez 2, gdy jej cyfra jedności jest parzysta, czyli $a \in \{0, 2, 4, 6, 8\}$.
Stąd $a \in \{0, 3, 6, 9\} \cap \{0, 2, 4, 6, 8\} = \{0, 6\}$.
Dodatkowo liczba nie jest podzielna przez 5, więc jej cyfra jedności nie może być równa 0. Zatem $a = 6$.

**Odpowiedź:**
6

---

### Zadanie 2.2
**Treść zadania:**
Wyznacz resztę $r$ z dzielenia liczby $a$ przez liczbę $b$, a następnie zapisz liczbę $a$ w postaci $b \cdot q + r$.
a) $a = 17, b = 5$;
b) $a = 69, b = 7$;
c) $a = 51, b = 3$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $17 : 5 = 3$ reszty 2, więc $r = 2$ oraz $17 = 5 \cdot 3 + 2$.
b) $69 : 7 = 9$ reszty 6, więc $r = 6$ oraz $69 = 7 \cdot 9 + 6$.
c) $51 : 3 = 17$ reszty 0, więc $r = 0$ oraz $51 = 3 \cdot 17 + 0$.

**Odpowiedź:**
a) $r = 2, 17 = 5 \cdot 3 + 2$; b) $r = 6, 69 = 7 \cdot 9 + 6$; c) $r = 0, 51 = 3 \cdot 17$.

---

### Zadanie 2.3
**Treść zadania:**
Ułamek dziesiętny zamień na nieskracalny ułamek zwykły:
a) $0{,}4$;
b) $0{,}45$;
c) $0{,}08$;
d) $0{,}375$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Zapisujemy ułamki w postaci ułamków o mianownikach 10, 100, 1000 i skracamy:
a) $0{,}4 = \frac{4}{10} = \frac{2}{5}$
b) $0{,}45 = \frac{45}{100} = \frac{9}{20}$
c) $0{,}08 = \frac{8}{100} = \frac{2}{25}$
d) $0{,}375 = \frac{375}{1000} = \frac{3}{8}$.

**Odpowiedź:**
a) $\frac{2}{5}$; b) $\frac{9}{20}$; c) $\frac{2}{25}$; d) $\frac{3}{8}$.

---

### Zadanie 2.4
**Treść zadania:**
Zamień ułamek zwykły na ułamek dziesiętny okresowy (możesz użyć kalkulatora):
a) $\frac{2}{3}$;
b) $\frac{5}{7}$;
c) $\frac{11}{90}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wykonujemy dzielenie licznika przez mianownik:
a) $2 : 3 = 0{,}6666\dots = 0{,}(6)$
b) $5 : 7 = 0{,}714285714285\dots = 0{,}(714285)$
c) $11 : 90 = 0{,}12222\dots = 0{,}1(2)$.

**Odpowiedź:**
a) $0{,}(6)$; b) $0{,}(714285)$; c) $0{,}1(2)$.

---

### Zadanie 2.5
**Treść zadania:**
Oblicz:
a) $\frac{1}{8} + \frac{2}{18} + \frac{3}{24}$;
b) $\frac{1}{2} - \frac{1}{3} - \frac{1}{4}$;
c) $\frac{1}{2} - (\frac{1}{3} - \frac{1}{4})$;
d) $\frac{1}{2} - \frac{1}{3} \cdot \frac{1}{4}$;
e) $(\frac{1}{2} : \frac{2}{3}) \cdot \frac{3}{4}$;
f) $\frac{1}{2} : (\frac{2}{3} \cdot \frac{3}{4})$;
g) $2\frac{2}{3} + 1{,}4$;
h) $2\frac{2}{3} \cdot 1{,}125$;
i) $(-5\frac{1}{3}) : 2\frac{2}{3}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $\frac{1}{8} + \frac{1}{9} + \frac{1}{8} = \frac{2}{8} + \frac{1}{9} = \frac{1}{4} + \frac{1}{9} = \frac{9+4}{36} = \frac{13}{36}$.
b) $\frac{6-4-3}{12} = -\frac{1}{12}$.
c) $\frac{1}{2} - \frac{4-3}{12} = \frac{6}{12} - \frac{1}{12} = \frac{5}{12}$.
d) $\frac{1}{2} - \frac{1}{12} = \frac{6-1}{12} = \frac{5}{12}$.
e) $(\frac{1}{2} \cdot \frac{3}{2}) \cdot \frac{3}{4} = \frac{3}{4} \cdot \frac{3}{4} = \frac{9}{16}$.
f) $\frac{1}{2} : \frac{1}{2} = 1$.
g) $\frac{8}{3} + \frac{7}{5} = \frac{40+21}{15} = \frac{61}{15} = 4\frac{1}{15}$.
h) $\frac{8}{3} \cdot \frac{9}{8} = 3$.
i) $(-\frac{16}{3}) : \frac{8}{3} = -\frac{16}{3} \cdot \frac{3}{8} = -2$.

**Odpowiedź:**
a) $\frac{13}{36}$; b) $-\frac{1}{12}$; c) $\frac{5}{12}$; d) $\frac{5}{12}$; e) $\frac{9}{16}$; f) $1$; g) $4\frac{1}{15}$; h) $3$; i) $-2$.

---

### Zadanie 2.6
**Treść zadania:**
Oblicz:
a) $\sqrt{121}$;
b) $\sqrt[3]{-343}$;
c) $\sqrt[4]{81}$;
d) $\sqrt[5]{-243}$;
e) $\sqrt[7]{-128}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $\sqrt{121} = 11$, bo $11^2 = 121$.
b) $\sqrt[3]{-343} = -7$, bo $(-7)^3 = -343$.
c) $\sqrt[4]{81} = 3$, bo $3^4 = 81$.
d) $\sqrt[5]{-243} = -3$, bo $(-3)^5 = -243$.
e) $\sqrt[7]{-128} = -2$, bo $(-2)^7 = -128$.

**Odpowiedź:**
a) $11$; b) $-7$; c) $3$; d) $-3$; e) $-2$.

---

### Zadanie 2.7
**Treść zadania:**
Zapisz w prostszej postaci liczbę:
a) R $\sqrt{2} + \sqrt{8} + \sqrt{32}$;
b) $\sqrt{12} - \sqrt{75}$;
c) $\sqrt[3]{5} + \sqrt[3]{-40} + \sqrt[3]{135}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wyłączamy czynnik przed znak pierwiastka:
a) $\sqrt{2} + \sqrt{4 \cdot 2} + \sqrt{16 \cdot 2} = \sqrt{2} + 2\sqrt{2} + 4\sqrt{2} = 7\sqrt{2}$.
b) $\sqrt{4 \cdot 3} - \sqrt{25 \cdot 3} = 2\sqrt{3} - 5\sqrt{3} = -3\sqrt{3}$.
c) $\sqrt[3]{5} - 2\sqrt[3]{5} + 3\sqrt[3]{5} = 2\sqrt[3]{5}$.

**Odpowiedź:**
a) $7\sqrt{2}$; b) $-3\sqrt{3}$; c) $2\sqrt[3]{5}$.

---

### Zadanie 2.8
**Treść zadania:**
Liczbę $(\sqrt{2} + \sqrt{7})^2$ zapisz w postaci $k + \sqrt{n}$, gdzie liczby $k$ i $n$ są liczbami całkowitymi.

**Odpowiedź i Rozwiązanie krok po kroku:**
Stosujemy wzór skróconego mnożenia na kwadrat sumy:
$(\sqrt{2} + \sqrt{7})^2 = (\sqrt{2})^2 + 2\sqrt{2}\sqrt{7} + (\sqrt{7})^2 = 2 + 2\sqrt{14} + 7 = 9 + \sqrt{4 \cdot 14} = 9 + \sqrt{56}$.
Liczby $k = 9$ oraz $n = 56$ są liczbami całkowitymi.

**Odpowiedź:**
$9 + \sqrt{56}$

---

### Zadanie 2.9
**Treść zadania:**
Zapisz daną liczbę bez niewymierności w mianowniku:
a) R $\frac{1}{\sqrt{2}}$;
b) $\frac{\sqrt{2}}{\sqrt{3}}$;
c) R $\frac{2}{\sqrt{7}+1} + \frac{2}{\sqrt{7}-1}$;
d) R $\frac{1}{\sqrt{5}-\sqrt{2}}$;
e) R $\frac{4}{\sqrt{3}+\sqrt{2}+1}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie z książki:
a) $\frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{\sqrt{2} \cdot \sqrt{2}} = \frac{\sqrt{2}}{2}$.
b) $\frac{\sqrt{2} \cdot \sqrt{3}}{\sqrt{3} \cdot \sqrt{3}} = \frac{\sqrt{6}}{3}$.
c) $\frac{2(\sqrt{7}-1)}{(\sqrt{7}+1)(\sqrt{7}-1)} + \frac{2(\sqrt{7}+1)}{(\sqrt{7}-1)(\sqrt{7}+1)} = \frac{2(\sqrt{7}-1)}{7-1} + \frac{2(\sqrt{7}+1)}{7-1} = \frac{2\sqrt{7}-2+2\sqrt{7}+2}{6} = \frac{4\sqrt{7}}{6} = \frac{2\sqrt{7}}{3}$.
d) $\frac{\sqrt{5}+\sqrt{2}}{(\sqrt{5}-\sqrt{2})(\sqrt{5}+\sqrt{2})} = \frac{\sqrt{5}+\sqrt{2}}{5-2} = \frac{\sqrt{5}+\sqrt{2}}{3}$.
e) $\frac{4((\sqrt{3}+\sqrt{2})-1)}{((\sqrt{3}+\sqrt{2})+1)((\sqrt{3}+\sqrt{2})-1)} = \frac{4(\sqrt{3}+\sqrt{2}-1)}{(\sqrt{3}+\sqrt{2})^2 - 1} = \frac{4(\sqrt{3}+\sqrt{2}-1)}{3+2\sqrt{6}+2-1} = \frac{4(\sqrt{3}+\sqrt{2}-1)}{4+2\sqrt{6}} = \frac{2(\sqrt{3}+\sqrt{2}-1)}{2+\sqrt{6}}$.
Mnożymy licznik i mianownik przez $2-\sqrt{6}$:
$\frac{2(\sqrt{3}+\sqrt{2}-1)(2-\sqrt{6})}{4-6} = \frac{2(2\sqrt{3}-\sqrt{18}+2\sqrt{2}-\sqrt{12}-2+\sqrt{6})}{-2} = -(2\sqrt{3}-3\sqrt{2}+2\sqrt{2}-2\sqrt{3}-2+\sqrt{6}) = -(-\sqrt{2}-2+\sqrt{6}) = \sqrt{2}-\sqrt{6}+2$.

**Odpowiedź:**
a) $\frac{\sqrt{2}}{2}$; b) $\frac{\sqrt{6}}{3}$; c) $\frac{2\sqrt{7}}{3}$; d) $\frac{\sqrt{5}+\sqrt{2}}{3}$; e) $\sqrt{2}-\sqrt{6}+2$.

---

### Zadanie 2.10
**Treść zadania:**
Oblicz wartość bezwzględną liczby:
a) $6$;
b) $-0{,}23$;
c) $0$;
d) R $\sqrt{5} - \sqrt{6}$;
e) $3{,}14 - \pi$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Z definicji wartości bezwzględnej:
a) $|6| = 6$.
b) $|-0{,}23| = 0{,}23$.
c) $|0| = 0$.
d) Ponieważ $\sqrt{5} < \sqrt{6}$, liczba $\sqrt{5}-\sqrt{6}$ jest ujemna, zatem $|\sqrt{5}-\sqrt{6}| = -(\sqrt{5}-\sqrt{6}) = \sqrt{6}-\sqrt{5}$.
e) Ponieważ $3{,}14 < \pi$, liczba $3{,}14-\pi$ jest ujemna, więc $|3{,}14-\pi| = \pi - 3{,}14$.

**Odpowiedź:**
a) $6$; b) $0{,}23$; c) $0$; d) $\sqrt{6}-\sqrt{5}$; e) $\pi - 3{,}14$.

---

### Zadanie 2.11
**Treść zadania:**
Podaj wszystkie liczby spełniające równanie:
a) $|x| = 4$;
b) $|x| = 0$;
c) R $|x - 2{,}4| = 0{,}7$;
d) W $|x + 3| = 5$;
e) $|x - 4| = -2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $x = -4 \lor x = 4$.
b) $x = 0$.
c) Rozwiązanie:
I SPOSÓB: $|x-2{,}4|$ to odległość liczby $x$ od $2{,}4$ na osi liczbowej. Szukamy liczb odległych o $0{,}7$: $x = 2{,}4 + 0{,}7 = 3{,}1$ oraz $x = 2{,}4 - 0{,}7 = 1{,}7$.
II SPOSÓB: $x - 2{,}4 = 0{,}7 \implies x = 3{,}1$ lub $x - 2{,}4 = -0{,}7 \implies x = 1{,}7$.
d) Wskazówka: $|x-(-3)| = 5 \iff x+3 = 5 \lor x+3 = -5 \iff x = 2 \lor x = -8$.
e) Wartość bezwzględna nie może być liczbą ujemną, więc nie istnieje liczba spełniająca to równanie.

**Odpowiedź:**
a) $-4, 4$; b) $0$; c) $1{,}7, 3{,}1$; d) $-8, 2$; e) nie istnieje liczba spełniająca równanie.

---

### Zadanie 2.12
**Treść zadania:**
Liczby $x=3$ i $x=11$ spełniają równanie $|x-a| = r$. Podaj liczby $a$ oraz $r$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie z książki:
I SPOSÓB: Odległość na osi liczbowej liczby 3 od liczby 11 jest równa $11 - 3 = 8$. Liczby te są jednakowo odległe od liczby $a$, więc ich odległość od $a$ wynosi $r = \frac{8}{2} = 4$. Środek odcinka wynosi $a = 3 + 4 = 7$.
II SPOSÓB: Jeśli $|x-a| = r$, to $x = a+r$ lub $x = a-r$. Ponieważ $a-r < a+r$, to $a-r = 3$ i $a+r = 11$. Dodając stronami: $2a = 14 \implies a = 7$, skąd $r = 4$.

**Odpowiedź:**
$a = 7, r = 4$

---

### Zadanie 2.13
**Treść zadania:**
Zapisz za pomocą przedziału lub sumy przedziałów zbiór liczb spełniających nierówność:
a) $|x| \le 3$;
b) $|x| > 2$;
c) $|x - 2| < 3$;
d) $|x + 4| \ge 2$;
e) $|x - 6| > 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Odległość od 0 jest mniejsza bądź równa 3: $x \in [-3; 3]$.
b) Odległość od 0 jest większa od 2: $x < -2 \lor x > 2$, czyli $x \in (-\infty; -2) \cup (2; +\infty)$.
c) Odległość od 2 jest mniejsza od 3: $2 - 3 < x < 2 + 3 \iff -1 < x < 5$, czyli $x \in (-1; 5)$.
d) Odległość od $-4$ jest większa bądź równa 2: $x \le -4-2 \lor x \ge -4+2 \iff x \le -6 \lor x \ge -2$, czyli $x \in (-\infty; -6] \cup [-2; +\infty)$.
e) Nierówność spełniają wszystkie liczby poza punktem zerowym $x=6$, czyli $x \in (-\infty; 6) \cup (6; +\infty)$.

**Odpowiedź:**
a) $[-3; 3]$; b) $(-\infty; -2) \cup (2; +\infty)$; c) $(-1; 5)$; d) $(-\infty; -6] \cup [-2; +\infty)$; e) $(-\infty; 6) \cup (6; +\infty)$.

---

### Zadanie 2.14
**Treść zadania:**
Sprowadź dane wyrażenie do najprostszej postaci wiedząc, że $x \in (1; 3)$:
a) $|x|$;
b) R $|x - 8|$;
c) $|3 - x| + |x - 1| - 2|x - 4|$;
d) $|x^2 - 4x + 3| - |x^2 - 9|$;
e) W $\sqrt{x^2 - 10x + 25}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Dla $x \in (1; 3)$:
a) $x > 0$, więc $|x| = x$.
b) $x - 8 < 0$, więc $|x-8| = -(x-8) = 8-x$.
c) $3-x > 0$, $x-1 > 0$, $x-4 < 0$. Stąd:
$|3-x| + |x-1| - 2|x-4| = (3-x) + (x-1) - 2(-(x-4)) = 2 + 2(x-4) = 2 + 2x - 8 = 2x - 6$.
d) $x^2 - 4x + 3 = (x-1)(x-3) < 0$ w przedziale $(1; 3)$, a $x^2 - 9 < 0$. Stąd:
$-(x^2-4x+3) - (-(x^2-9)) = -x^2 + 4x - 3 + x^2 - 9 = 4x - 12$.
e) $\sqrt{x^2 - 10x + 25} = \sqrt{(x-5)^2} = |x-5|$. Dla $x \in (1; 3)$ mamy $x-5 < 0$, więc $|x-5| = 5-x$.

**Odpowiedź:**
a) $x$; b) $8-x$; c) $2x-6$; d) $4x-12$; e) $5-x$.

---

### Zadanie 2.15
**Treść zadania:**
Daną liczbę zapisz w postaci $a + b\sqrt{c}$, gdzie liczby $a, b, c$ są liczbami całkowitymi:
a) R $\sqrt{11 + 6\sqrt{2}}$;
b) $\sqrt{7 + 2\sqrt{10}}$;
c) R $\sqrt{11 - 4\sqrt{7}}$;
d) $\sqrt{9 - 4\sqrt{2}}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Zwijamy wyrażenia podpierwiastkowe do kwadratu sumy lub różnicy:
a) $\sqrt{11+6\sqrt{2}} = \sqrt{9 + 2 \cdot 3 \cdot \sqrt{2} + 2} = \sqrt{(3+\sqrt{2})^2} = 3+\sqrt{2}$.
b) $\sqrt{7+2\sqrt{10}} = \sqrt{5 + 2\sqrt{10} + 2} = \sqrt{(\sqrt{5}+\sqrt{2})^2} = \sqrt{5}+\sqrt{2}$ (lub $5+\sqrt{2}$ jak w kluczu).
c) $\sqrt{11-4\sqrt{7}} = \sqrt{4 - 2 \cdot 2 \cdot \sqrt{7} + 7} = \sqrt{(2-\sqrt{7})^2} = |2-\sqrt{7}| = \sqrt{7}-2 = -2 + \sqrt{7}$.
d) $\sqrt{9-4\sqrt{2}} = \sqrt{8 - 4\sqrt{2} + 1} = \sqrt{(2\sqrt{2}-1)^2} = 2\sqrt{2}-1 = -1 + 2\sqrt{2}$.

**Odpowiedź:**
a) $3+\sqrt{2}$; b) $\sqrt{5}+\sqrt{2}$; c) $\sqrt{7}-2$; d) $2\sqrt{2}-1$.

---

### Zadanie 2.16
**Treść zadania:**
Zaokrąglij daną liczbę do części dziesiętnych:
a) $0{,}678$;
b) $1{,}23$;
c) $2{,}559$;
d) $3{,}65$;
e) $4{,}449$;
f) $5{,}(5)$;
g) $7{,}048$;
h) $0{,}997$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Patrzymy na cyfrę części setnych (gdy $\ge 5$, zaokrąglamy w górę):
a) $0{,}678 \approx 0{,}7$
b) $1{,}23 \approx 1{,}2$
c) $2{,}559 \approx 2{,}6$
d) $3{,}65 \approx 3{,}7$
e) $4{,}449 \approx 4{,}4$
f) $5{,}(5) = 5{,}555\dots \approx 5{,}6$
g) $7{,}048 \approx 7{,}0$
h) $0{,}997 \approx 1{,}0$.

**Odpowiedź:**
a) $0{,}7$; b) $1{,}2$; c) $2{,}6$; d) $3{,}7$; e) $4{,}4$; f) $5{,}6$; g) $7{,}0$; h) $1{,}0$.

---

### Zadanie 2.17
**Treść zadania:**
Zaokrąglij daną liczbę do tysięcy:
a) $12\,864$;
b) $12\,468$;
c) $123\,456$;
d) $123\,521$;
e) $1\,265\,499$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Patrzymy na cyfrę setek:
a) $12\,864 \approx 13\,000$
b) $12\,468 \approx 12\,000$
c) $123\,456 \approx 123\,000$
d) $123\,521 \approx 124\,000$
e) $1\,265\,499 \approx 1\,265\,000$.

**Odpowiedź:**
a) $13\,000$; b) $12\,000$; c) $123\,000$; d) $124\,000$; e) $1\,265\,000$.

---

### Zadanie 2.18 W
**Treść zadania:**
Naczynie $A$ ma objętość $3{,}2$ litra, a objętość naczynia $B$ jest równa $640\text{ cm}^3$. Ile razy objętość naczynia $A$ jest większa od objętości naczynia $B$?

**Odpowiedź i Rozwiązanie krok po kroku:**
Wskazówka: $1\text{ litr} = 1000\text{ cm}^3$.
Objętość naczynia $A$ wynosi $3{,}2 \cdot 1000\text{ cm}^3 = 3200\text{ cm}^3$.
Obliczamy stosunek objętości:
$\frac{3200\text{ cm}^3}{640\text{ cm}^3} = 5$.

**Odpowiedź:**
5 razy

---

### Zadanie 2.19 W
**Treść zadania:**
Powierzchnie działek $D_1, D_2$ i $D_3$ są odpowiednio równe $26\text{ a}$, $2{,}3\text{ ha}$ i $280\text{ m}^2$. Która z tych działek ma największą powierzchnię, a która najmniejszą?

**Odpowiedź i Rozwiązanie krok po kroku:**
Wskazówka: $1\text{ a} = 100\text{ m}^2$, $1\text{ ha} = 10\,000\text{ m}^2$.
Przeliczamy powierzchnie na metry kwadratowe:
- $D_1 = 26\text{ a} = 2600\text{ m}^2$
- $D_2 = 2{,}3\text{ ha} = 23\,000\text{ m}^2$
- $D_3 = 280\text{ m}^2$.
Porównując: $280\text{ m}^2 < 2600\text{ m}^2 < 23\,000\text{ m}^2$.

**Odpowiedź:**
Największą powierzchnię ma działka $D_2$, a najmniejszą $D_3$.

---

### Zadanie 2.20 W
**Treść zadania:**
Sprinter biegnie ze średnią prędkością $10\text{ m/s}$, równocześnie rowerzysta jedzie z prędkością $24\text{ km/godz.}$. Który z nich porusza się z większą prędkością?

**Odpowiedź i Rozwiązanie krok po kroku:**
Wskazówka: $1\text{ m/s} = 3{,}6\text{ km/h}$.
Prędkość sprintera: $10\text{ m/s} = 10 \cdot 3{,}6\text{ km/h} = 36\text{ km/h}$.
Prędkość rowerzysty wynosi $24\text{ km/h}$ (czyli ok. $6{,}67\text{ m/s}$).
Ponieważ $36\text{ km/h} > 24\text{ km/h}$, sprinter porusza się z większą prędkością.

**Odpowiedź:**
Sprinter

---

### Zadanie 2.21 R
**Treść zadania:**
W klasie III A dziewczęta stanowią $\frac{5}{8}$, a w III B $65\%$ liczby uczniów swojej klasy. W której z tych dwóch klas odsetek dziewcząt jest większy?

**Odpowiedź i Rozwiązanie krok po kroku:**
Zamieniamy ułamek zwykły na procenty:
$\frac{5}{8} \cdot 100\% = 62{,}5\%$.
W klasie III B dziewczęta stanowią $65\%$.
Ponieważ $62{,}5\% < 65\%$, odsetek dziewcząt jest większy w klasie III B.

**Odpowiedź:**
W III B

---

### Zadanie 2.22
**Treść zadania:**
Oblicz:
a) R $30\%$ liczby $70$;
b) $36\%$ liczby $85$;
c) R $3{,}2\%$ liczby $17{,}5$;
d) $145\%$ liczby $48$;
e) R $7‰$ liczby $1200$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $\frac{30}{100} \cdot 70 = 21$.
b) $\frac{36}{100} \cdot 85 = 30{,}6$.
c) $\frac{3{,}2}{100} \cdot 17{,}5 = 0{,}56$.
d) $\frac{145}{100} \cdot 48 = 69{,}6$.
e) $\frac{7}{1000} \cdot 1200 = 8{,}4$.

**Odpowiedź:**
a) $21$; b) $30{,}6$; c) $0{,}56$; d) $69{,}6$; e) $8{,}4$.

---

### Zadanie 2.23 R
**Treść zadania:**
Aby zdać próbną maturę z matematyki na poziomie podstawowym wystarczy otrzymać $30\%$ z $40$ punktów możliwych do uzyskania. Jaka jest minimalna liczba punktów gwarantująca zdanie tego egzaminu?

**Odpowiedź i Rozwiązanie krok po kroku:**
Obliczamy $30\%$ z 40 punktów:
$30\% \cdot 40 = \frac{30}{100} \cdot 40 = 12$.

**Odpowiedź:**
Co najmniej 12 punktów.

---

### Zadanie 2.24
**Treść zadania:**
Na początku roku szkolnego w bibliotece szkolnej były $13\,872$ książki. Dzięki poczynionym zakupom, na koniec roku szkolnego liczba książek wzrosła o $6{,}25\%$. Ile książek było w bibliotece na koniec roku szkolnego?

**Odpowiedź i Rozwiązanie krok po kroku:**
Obliczamy nową liczbę książek:
$13\,872 \cdot (1 + 0{,}0625) = 13\,872 \cdot 1{,}0625 = 14\,739$.

**Odpowiedź:**
$14\,739$

---

### Zadanie 2.25
**Treść zadania:**
Znajdź liczbę $x$, jeśli:
a) R $55\%$ liczby $x$ jest równe $44$;
b) $24\%$ liczby $x$ jest równe $17{,}28$;
c) $0{,}2\%$ liczby $x$ jest równe $3$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $0{,}55x = 44 \iff x = \frac{44}{0{,}55} = 80$.
b) $0{,}24x = 17{,}28 \iff x = \frac{17{,}28}{0{,}24} = 72$.
c) $0{,}002x = 3 \iff x = \frac{3}{0{,}002} = 1500$.

**Odpowiedź:**
a) $80$; b) $72$; c) $1500$.

---

### Zadanie 2.26 R
**Treść zadania:**
Na wycieczkę pojechało 7 dziewczyn, które stanowiły $43{,}75\%$ liczby wszystkich uczestników wycieczki. Ile osób pojechało na wycieczkę?

**Odpowiedź i Rozwiązanie krok po kroku:**
Niech $n$ oznacza liczbę uczestników wycieczki.
$43{,}75\% \cdot n = 7 \iff \frac{43{,}75}{100}n = 7 \iff n = \frac{700}{43{,}75} = 16$.

**Odpowiedź:**
16

---

### Zadanie 2.27
**Treść zadania:**
Po czterdziestoprocentowej posezonowej obniżce cen buty kosztowały 99 zł. Jaka była cena butów przed obniżką?

**Odpowiedź i Rozwiązanie krok po kroku:**
Po obniżce o $40\%$ nowa cena stanowiła $60\%$ ceny początkowej $c$:
$0{,}60 \cdot c = 99 \iff c = \frac{99}{0{,}6} = 165\text{ zł}$.

**Odpowiedź:**
165 zł

---

### Zadanie 2.28
**Treść zadania:**
Jaki procent liczby $a$ stanowi liczba $b$, jeśli:
a) R $a=68, b=51$;
b) $a=25, b=8{,}2$;
c) $a=60, b=134{,}4$?

**Odpowiedź i Rozwiązanie krok po kroku:**
Obliczamy $\frac{b}{a} \cdot 100\%$:
a) $\frac{51}{68} \cdot 100\% = \frac{3}{4} \cdot 100\% = 75\%$.
b) $\frac{8{,}2}{25} \cdot 100\% = 8{,}2 \cdot 4\% = 32{,}8\%$.
c) $\frac{134{,}4}{60} \cdot 100\% = 2{,}24 \cdot 100\% = 224\%$.

**Odpowiedź:**
a) $75\%$; b) $32{,}8\%$; c) $224\%$.

---

### Zadanie 2.29
**Treść zadania:**
O ile procent liczba $b$ jest większa od liczby $a$, jeśli:
a) $a=40, b=50$;
b) R $a=52, b=91$;
c) $a=56, b=119$?

**Odpowiedź i Rozwiązanie krok po kroku:**
Obliczamy $\frac{b-a}{a} \cdot 100\%$:
a) $\frac{50-40}{40} \cdot 100\% = \frac{10}{40} \cdot 100\% = 25\%$.
b) Różnica wynosi $91-52 = 39$. $\frac{39}{52} \cdot 100\% = \frac{3}{4} \cdot 100\% = 75\%$.
c) $\frac{119-56}{56} \cdot 100\% = \frac{63}{56} \cdot 100\% = \frac{9}{8} \cdot 100\% = 112{,}5\%$.

**Odpowiedź:**
a) $25\%$; b) $75\%$; c) $112{,}5\%$.

---

### Zadanie 2.30
**Treść zadania:**
O ile procent liczba $a$ jest mniejsza od liczby $b$, jeśli:
a) $a=40, b=50$;
b) R $a=52, b=91$;
c) $a=56, b=119$?
Wynik zaokrąglij do pełnego procentu.

**Odpowiedź i Rozwiązanie krok po kroku:**
Obliczamy $\frac{b-a}{b} \cdot 100\%$:
a) $\frac{50-40}{50} \cdot 100\% = \frac{10}{50} \cdot 100\% = 20\%$.
b) $\frac{91-52}{91} \cdot 100\% = \frac{39}{91} \cdot 100\% = \frac{3}{7} \cdot 100\% \approx 42{,}86\% \approx 43\%$.
c) $\frac{119-56}{119} \cdot 100\% = \frac{63}{119} \cdot 100\% = \frac{9}{17} \cdot 100\% \approx 52{,}94\% \approx 53\%$.

**Odpowiedź:**
a) o $20\%$; b) o $43\%$; c) o $53\%$.

---

### Zadanie 2.31
**Treść zadania:**
Pogłowie wielbłądów na świecie wynosi 19,4 mln sztuk, z czego 6,1 mln to wielbłądy żyjące w Somalii (dane z 1997 r). Jaki procent światowego pogłowia wielbłądów żyje w Somalii? Wynik zaokrąglij do dziesiątej części procentu.

**Odpowiedź i Rozwiązanie krok po kroku:**
Obliczamy stosunek:
$\frac{6{,}1}{19{,}4} \cdot 100\% \approx 31{,}443\% \approx 31{,}4\%$.

**Odpowiedź:**
$31{,}4\%$

---

### Zadanie 2.32 R
**Treść zadania:**
Pan Piotr złożył w banku 2400 zł na trzymiesięczną lokatę o stałym oprocentowaniu. Odsetki (przed opodatkowaniem) po trzech miesiącach wyniosły 19 zł 20 gr. Jakie było oprocentowanie tej lokaty w skali roku?

**Odpowiedź i Rozwiązanie krok po kroku:**
Niech $p\%$ oznacza oprocentowanie lokaty w skali roku. Okres 3 miesięcy to $\frac{1}{4}$ roku.
Wzór na odsetki:
$\frac{1}{4} \cdot \frac{p}{100} \cdot 2400 = 19{,}20 \iff 6p = 19{,}20 \iff p = 3{,}2$.

**Odpowiedź:**
$3{,}2\%$

---

### Zadanie 2.33
**Treść zadania:**
Cena kilograma jabłek w sklepie wynosi 3 zł 20 gr, a kilogram takich samych jabłek u sadownika kosztuje 2 zł.
a) O ile procent kilogram jabłek jest tańszy u sadownika niż w sklepie?
b) O ile procent kilogram jabłek jest droższy w sklepie niż u sadownika?

**Odpowiedź i Rozwiązanie krok po kroku:**
Różnica cen: $3{,}20 - 2{,}00 = 1{,}20\text{ zł}$.
a) Odnosimy do ceny w sklepie: $\frac{1{,}20}{3{,}20} \cdot 100\% = \frac{3}{8} \cdot 100\% = 37{,}5\%$.
b) Odnosimy do ceny u sadownika: $\frac{1{,}20}{2{,}00} \cdot 100\% = 60\%$.

**Odpowiedź:**
a) $37{,}5\%$; b) $60\%$.

---

### Zadanie 2.34 R
**Treść zadania:**
Zimą kurtki puchowe w sklepach Alex i Bolex miały tę samą cenę. Wiosną oba sklepy dokonały obniżki cen. W sklepie Alex cenę kurtek najpierw obniżono o 20%, a po pewnym czasie jeszcze o 15%. W sklepie Bolex kurtki staniały od razu o 35%.
a) Uzasadnij, że po obniżkach kurtki puchowe były tańsze w sklepie Bolex.
b) O ile procent obniżka ceny kurtek w sklepie Bolex była większa od obniżki ceny w sklepie Alex?

**Odpowiedź i Rozwiązanie krok po kroku:**
Niech $x$ oznacza cenę początkową kurtki.
a) W sklepie Alex:
- po pierwszej obniżce: $x - 0{,}20x = 0{,}80x$,
- po drugiej obniżce: $0{,}80x - 0{,}15 \cdot 0{,}80x = 0{,}80x - 0{,}12x = 0{,}68x$. Łączna obniżka wyniosła $0{,}32x$ ($32\%$).
W sklepie Bolex: cena po obniżce o $35\%$ wynosi $x - 0{,}35x = 0{,}65x$.
Ponieważ $0{,}65x < 0{,}68x$, kurtki w sklepie Bolex były tańsze.
b) W sklepie Alex cena została obniżona o $0{,}32x$, a w Bolex o $0{,}35x$.
Różnica w obniżce wynosi $0{,}35x - 0{,}32x = 0{,}03x$.
Obliczamy, o ile procent obniżka w Bolex była większa od obniżki w Alex:
$\frac{0{,}03x}{0{,}32x} \cdot 100\% = \frac{3}{32} \cdot 100\% = 9{,}375\%$.

**Odpowiedź:**
a) W sklepie Alex cenę obniżono o $32\%$, a w sklepie Bolex o $35\%$, stąd cena w Bolex ($0{,}65x$) była niższa niż w Alex ($0{,}68x$);
b) o $9{,}375\%$.

---

### Zadanie 2.35 R
**Treść zadania:**
W pewnym małżeństwie dochody męża są o 80% wyższe od dochodów żony. Jaki procent dochodów w tym małżeństwie stanowią dochody żony? Wynik zaokrąglij do dziesiątej części procentu.

**Odpowiedź i Rozwiązanie krok po kroku:**
Niech $z$ oznacza dochody żony, a $m$ dochody męża.
$m = z + 0{,}80z = 1{,}8z$.
Łączny dochód małżeństwa: $m + z = 1{,}8z + z = 2{,}8z$.
Udział dochodów żony:
$\frac{z}{2{,}8z} \cdot 100\% = \frac{1}{2{,}8} \cdot 100\% = \frac{10}{28} \cdot 100\% \approx 35{,}714\% \approx 35{,}7\%$.

**Odpowiedź:**
$35{,}7\%$

---

### Zadanie 2.36
**Treść zadania:**
Na początku roku szkolnego do klasy humanistycznej uczęszczało 20 dziewcząt i 12 chłopców.
a) Jaki procent klasy stanowili chłopcy?
b) Oblicz, ile osób z tej klasy uczyło się j. hiszpańskiego wiedząc, że 12,5% uczniów tej klasy uczęszczało na zajęcia z tego przedmiotu.
c) O ile procent liczba dziewcząt w tej klasie była większa od liczby chłopców?
d) O ile procent liczba chłopców w tej klasie była mniejsza od liczby dziewcząt?
e) Po pierwszym semestrze kilka dziewcząt przeniosło się do klasy matematycznej. Wówczas chłopcy stanowili 40% klasy. Ile dziewcząt pozostało w klasie humanistycznej?

**Odpowiedź i Rozwiązanie krok po kroku:**
Łączna liczba uczniów: $20 + 12 = 32$.
a) $\frac{12}{32} \cdot 100\% = \frac{3}{8} \cdot 100\% = 37{,}5\%$.
b) $12{,}5\% \cdot 32 = \frac{1}{8} \cdot 32 = 4$ osoby.
c) $\frac{20-12}{12} \cdot 100\% = \frac{8}{12} \cdot 100\% = 66\frac{2}{3}\%$.
d) $\frac{20-12}{20} \cdot 100\% = \frac{8}{20} \cdot 100\% = 40\%$.
e) Liczba chłopców nie zmieniła się i wynosi 12. Jeśli stanowią oni $40\%$ nowej liczby uczniów $N$, to:
$0{,}40 \cdot N = 12 \iff N = 30$.
Liczba pozostałych dziewcząt: $30 - 12 = 18$.

**Odpowiedź:**
a) $37{,}5\%$; b) 4; c) o $66\frac{2}{3}\%$; d) o $40\%$; e) 18.

---

### Zadanie 2.37
**Treść zadania:**
Przed miesiącem za jedną akcję firmy A trzeba było zapłacić 110 zł. W ciągu miesiąca cena akcji tej firmy spadła o 68%.
a) Oblicz aktualną cenę akcji firmy A.
b) O ile procent musiałaby wzrosnąć cena jednej akcji tej firmy, aby ponownie wynosiła 110 zł?
c) Cena akcji firmy B jest teraz o 60% wyższa od ceny akcji firmy A. Oblicz cenę akcji firmy B.
d) Cena akcji firmy A jest teraz o 60% niższa od ceny akcji firmy C. Oblicz cenę akcji firmy C.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $110 \cdot (1 - 0{,}68) = 110 \cdot 0{,}32 = 35{,}20\text{ zł}$.
b) Różnica to $110 - 35{,}20 = 74{,}80\text{ zł}$.
$\frac{74{,}80}{35{,}20} \cdot 100\% = 2{,}125 \cdot 100\% = 212{,}5\%$.
c) Cena akcji firmy B: $35{,}20 \cdot (1 + 0{,}60) = 35{,}20 \cdot 1{,}6 = 56{,}32\text{ zł}$.
d) Cena akcji A stanowi $40\%$ ceny akcji C: $0{,}40 \cdot C = 35{,}20 \iff C = \frac{35{,}20}{0{,}4} = 88\text{ zł}$.

**Odpowiedź:**
a) 35 zł 20 gr; b) o $212{,}5\%$; c) 56 zł 32 gr; d) 88 zł.

---

### Zadanie 2.38
**Treść zadania:**
Według sondażu przeprowadzonego we wrześniu, na partię Czwarta Droga chciało zagłosować 30% badanych. W sierpniu gotowość oddania głosu na tę partię deklarowało 24% obywateli uprawnionych do głosowania.
a) O ile punktów procentowych wzrosło poparcie dla partii Czwarta Droga?
b) O ile procent wzrosło poparcie dla partii Czwarta Droga?

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Różnica bezwzględna: $30\% - 24\% = 6$ punktów procentowych.
b) Wzrost względny: $\frac{30 - 24}{24} \cdot 100\% = \frac{6}{24} \cdot 100\% = 25\%$.

**Odpowiedź:**
a) O 6 punktów procentowych; b) o $25\%$.

---

### Zadanie 2.39
**Treść zadania:**
Oprocentowanie kredytu mieszkaniowego w Banku Rozwoju wynosiło dotychczas 6%. Zarząd banku podniósł wysokość oprocentowania tego kredytu o 20%. O ile punktów procentowych wzrosło oprocentowanie kredytu mieszkaniowego?

**Odpowiedź i Rozwiązanie krok po kroku:**
Obliczamy wielkość podwyżki:
$20\% \cdot 6\% = 0{,}20 \cdot 6\% = 1{,}2$ punktu procentowego.
(Nowe oprocentowanie wynosi $6\% + 1{,}2\% = 7{,}2\%$).

**Odpowiedź:**
O 1,2 punktu procentowego.

---

### Zadanie 2.40 R
**Treść zadania:**
W 2020 roku zbiory zbóż w gospodarstwie pana Kargula wyniosły 25 ton. W czterech kolejnych latach każdy zbiór był o 20% większy od zbiorów z roku poprzedniego. Ile ton zbóż zebrał pan Kargul w 2024 roku? Wynik podaj po zaokrągleniu do jedności.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie z książki:
Pewna wielkość w takich samych okresach (tu rocznych) zwiększa się o ten sam procent. Korzystamy ze wzoru na procent składany:
$K_n = K_0 \cdot (1 + \frac{p}{100})^n$, gdzie $K_0 = 25\text{ ton}$, $p\% = 20\%$, $n = 4$.
$K_4 = 25 \cdot (1 + 0{,}20)^4 = 25 \cdot (\frac{6}{5})^4 = 25 \cdot \frac{1296}{625} = \frac{1296}{25} = 51{,}84 \approx 52\text{ tony}$.

**Odpowiedź:**
52 tony

---

### Zadanie 2.41 R
**Treść zadania:**
Przedsiębiorca pożyczył od kolegi pewną kwotę, z zamiarem zainwestowania pieniędzy w bardzo ryzykowne przedsięwzięcie. Panowie umówili się, że pożyczka nie będzie spłacana w ratach, ale cała kwota wraz z odsetkami zostanie zwrócona jednorazowo. Ustalono, że oprocentowanie pożyczki wynosić będzie 50% w skali roku, z roczną kapitalizacją odsetek. Jaką kwotę pożyczył przedsiębiorca, jeżeli po pięciu latach zwrócił koledze 243 000 zł?

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie:
Niech $k$ oznacza pożyczoną kwotę.
$k \cdot (1 + \frac{50}{100})^5 = 243\,000$
$k \cdot (\frac{3}{2})^5 = 243\,000$
$k \cdot \frac{243}{32} = 243\,000 \iff k = 1000 \cdot 32 = 32\,000\text{ zł}$.

**Odpowiedź:**
32 000 zł

---

### Zadanie 2.42 R
**Treść zadania:**
Pan Leo Messi wpłacił do banku w Buenos Aires 200 000 $ na czteroletnią lokatę o stałym oprocentowaniu z roczną kapitalizacją odsetek. Po czterech latach na jego koncie znajdowała się kwota 414 720 $. Jakie było oprocentowanie tej lokaty?

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie z książki:
Niech $p$ oznacza roczne oprocentowanie lokaty.
$200\,000 \cdot (1 + \frac{p}{100})^4 = 414\,720$
$(1 + \frac{p}{100})^4 = \frac{414\,720}{200\,000} = \frac{20736}{10000} = \frac{1296}{625} = (\frac{6}{5})^4$.
Ponieważ $p > 0$, to:
$1 + \frac{p}{100} = \frac{6}{5} = 1{,}2 \iff \frac{p}{100} = 0{,}2 \iff p = 20$.

**Odpowiedź:**
$20\%$

---

### Zadanie 2.43 R
**Treść zadania:**
Uzasadnij, że dla każdej liczby całkowitej $n$ liczba $n^3 - n$ jest podzielna przez 6.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie z książki:
Rozkładamy wyrażenie na czynniki:
$n^3 - n = n(n^2 - 1) = (n-1)n(n+1)$.
Wyrażenie to jest iloczynem trzech kolejnych liczb całkowitych.
Wśród trzech kolejnych liczb całkowitych:
- co najmniej jedna jest parzysta (podzielna przez 2),
- dokładnie jedna jest podzielna przez 3.
Ponieważ liczby 2 i 3 są względnie pierwsze, ich iloczyn jest podzielny przez $2 \cdot 3 = 6$. Zatem liczba $n^3 - n$ jest podzielna przez 6.

**Odpowiedź:**
Liczba $n^3 - n = (n-1)n(n+1)$ jako iloczyn trzech kolejnych liczb całkowitych jest podzielna przez 2 i przez 3, a więc jest podzielna przez 6.

---

### Zadanie 2.44 R
**Treść zadania:**
Wykaż, że suma czterech kolejnych nieparzystych liczb całkowitych jest podzielna przez 8.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie z książki:
Każdą liczbę nieparzystą można zapisać w postaci $2k+1$, gdzie $k \in \mathbb{Z}$.
Cztery kolejne liczby nieparzyste to: $2k+1, 2k+3, 2k+5, 2k+7$.
Ich suma wynosi:
$(2k+1) + (2k+3) + (2k+5) + (2k+7) = 8k + 16 = 8(k+2)$.
Ponieważ $k \in \mathbb{Z}$, liczba $k+2$ jest liczbą całkowitą.
Zatem suma jest wielokrotnością liczby 8, co dowodzi podzielności przez 8.

**Odpowiedź:**
Suma wynosi $8(k+2)$, co stanowi liczbę podzielną przez 8 dla dowolnego $k \in \mathbb{Z}$.

---

### Zadanie 2.45 R
**Treść zadania:**
Udowodnij, że jeżeli liczba całkowita przy dzieleniu przez 5 daje resztę 3, to kwadrat tej liczby przy dzieleniu przez 5 daje resztę 4.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie z książki:
Niech dana liczba całkowita ma postać $5k+3$, gdzie $k \in \mathbb{Z}$.
Podnosimy ją do kwadratu:
$(5k+3)^2 = 25k^2 + 30k + 9 = 25k^2 + 30k + 5 + 4 = 5(5k^2 + 6k + 1) + 4$.
Liczba $m = 5k^2 + 6k + 1$ jest liczbą całkowitą jako suma i iloczyn liczb całkowitych.
Zatem kwadrat tej liczby ma postać $5m + 4$, co oznacza, że przy dzieleniu przez 5 daje resztę 4.

**Odpowiedź:**
$(5k+3)^2 = 5(5k^2+6k+1)+4$, co dowodzi, że reszta z dzielenia przez 5 jest równa 4.

---

### Zadanie 2.46 R
**Treść zadania:**
Udowodnij, że jeżeli liczba całkowita przy dzieleniu przez 4 daje resztę 2, to kwadrat tej liczby przy dzieleniu przez 32 daje resztę 4.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie z książki:
Liczbę dającą przy dzieleniu przez 4 resztę 2 możemy zapisać w postaci $4k+2$, gdzie $k \in \mathbb{Z}$.
Obliczamy jej kwadrat:
$(4k+2)^2 = 16k^2 + 16k + 4 = 16k(k+1) + 4$.
Iloczyn $k(k+1)$ to iloczyn dwóch kolejnych liczb całkowitych, z których jedna jest parzysta (podzielna przez 2). Zatem $k(k+1) = 2m$ dla pewnego $m \in \mathbb{Z}$.
Wstawiając otrzymujemy:
$(4k+2)^2 = 16 \cdot 2m + 4 = 32m + 4$, gdzie $m \in \mathbb{Z}$.
Oznacza to, że kwadrat tej liczby przy dzieleniu przez 32 daje resztę 4.

**Odpowiedź:**
$(4k+2)^2 = 32m + 4$, co dowodzi, że reszta z dzielenia przez 32 wynosi 4.

---

### Zadanie 2.47 R
**Treść zadania:**
Wykaż, że kwadrat liczby całkowitej niepodzielnej przez 3 przy dzieleniu przez 3 daje resztę 1.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie z książki:
Liczba całkowita niepodzielna przez 3 przy dzieleniu przez 3 daje resztę 1 lub 2, zatem można ją zapisać w postaci $3n+1$ lub $3n-1$ ($3n \pm 1$), gdzie $n \in \mathbb{Z}$.
Podnosząc do kwadratu otrzymujemy:
$(3n \pm 1)^2 = 9n^2 \pm 6n + 1 = 3(3n^2 \pm 2n) + 1$.
Ponieważ $3n^2 \pm 2n \in \mathbb{Z}$, liczba ta jest postaci $3k+1$, co oznacza, że przy dzieleniu przez 3 daje resztę 1.

**Odpowiedź:**
$(3n \pm 1)^2 = 3(3n^2 \pm 2n) + 1$, co daje resztę 1 przy dzieleniu przez 3.

---

### Zadanie 2.48 W
**Treść zadania:**
Wykaż, że dla każdej liczby całkowitej $n$ liczba $n^3 + 5n$ jest podzielna przez 3.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie:
Przekształcamy wyrażenie:
$n^3 + 5n = n^3 - n + 6n = n(n^2 - 1) + 6n = (n-1)n(n+1) + 6n$.
Iloczyn $(n-1)n(n+1)$ to iloczyn trzech kolejnych liczb całkowitych, z których co najmniej jedna jest podzielna przez 3.
Składnik $6n = 3 \cdot 2n$ jest również podzielny przez 3.
Suma dwóch liczb podzielnych przez 3 jest podzielna przez 3, co kończy dowód.

**Odpowiedź:**
$n^3+5n = (n-1)n(n+1) + 6n$, co stanowi sumę składników podzielnych przez 3.

---

### Zadanie 2.49 R
**Treść zadania:**
Udowodnij, że dla dowolnych liczb rzeczywistych $x, y$ zachodzi nierówność $x^2 + y^2 \ge 2xy$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie z książki:
Przekształcamy nierówność równoważnie:
$x^2 + y^2 \ge 2xy \iff x^2 - 2xy + y^2 \ge 0 \iff (x-y)^2 \ge 0$.
Kwadrat dowolnej liczby rzeczywistej jest nieujemny, więc nierówność $(x-y)^2 \ge 0$ zachodzi dla wszystkich $x, y \in \mathbb{R}$.

**Odpowiedź:**
$(x-y)^2 \ge 0$, co jest prawdziwe dla dowolnych liczb rzeczywistych $x, y$.

---

### Zadanie 2.50 W
**Treść zadania:**
Uzasadnij, że jeżeli $a$ jest liczbą ujemną, to $a + \frac{1}{a} \le -2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wskazówka: Pomnóż obie strony nierówności przez $a$.
Ponieważ $a < 0$, mnożąc obie strony przez $a$ zmieniamy zwrot nierówności:
$a + \frac{1}{a} \le -2 \iff a^2 + 1 \ge -2a \iff a^2 + 2a + 1 \ge 0 \iff (a+1)^2 \ge 0$.
Nierówność $(a+1)^2 \ge 0$ jest zawsze prawdziwa dla dowolnej liczby rzeczywistej $a$. Równość zachodzi dla $a = -1$.

**Odpowiedź:**
Nierówność po przekształceniu przyjmuje postać $(a+1)^2 \ge 0$, która jest prawdziwa dla każdej liczby rzeczywistej, w tym dla ujemnej.

---

### Zadanie 2.51 R
**Treść zadania:**
Uzasadnij, że jeżeli suma liczb $a$ i $b$ jest nieujemna, to $(a-b)(a^2 - b^2) \ge 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Rozwiązanie z książki:
Przekształcamy lewą stronę nierówności:
$(a-b)(a^2 - b^2) = (a-b)(a-b)(a+b) = (a-b)^2(a+b)$.
Z założenia $a+b \ge 0$.
Ponadto kwadrat $(a-b)^2 \ge 0$ dla dowolnych liczb rzeczywistych $a, b$.
Iloczyn dwóch liczb nieujemnych jest liczbą nieujemną, zatem $(a-b)^2(a+b) \ge 0$.

**Odpowiedź:**
$(a-b)(a^2-b^2) = (a-b)^2(a+b) \ge 0$, co wynika z nieujemności kwadratu oraz założenia $a+b \ge 0$.

---

### Zadanie 2.52
**Treść zadania:**
Wykaż, że jeśli $a$ i $b$ są liczbami tego samego znaku, to $\frac{a}{b} + \frac{b}{a} \ge 2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

# ZADANIA MATURALNE — WYRAŻENIA ALGEBRAICZNE I LICZBY RZECZYWISTE

### Zadanie 1
**Treść zadania:**
Sprawdź, czy liczba spełniająca równanie $\frac{2a+1}{14} - \frac{3a+4}{7} = \frac{a-1}{2}$ należy do zbioru rozwiązań nierówności $-1 < 4x - 3 \le 9$.
*Egzamin wstępny do szkół średnich w woj. tarnobrzeskim w roku 1997*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 2
**Treść zadania:**
(0–2) Rozwiąż nierówność $(x-\frac{1}{2})x > 3(x-\frac{1}{2})(x+\frac{1}{3})$.
*CKE, matura – poziom podstawowy, czerwiec 2017*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 3
**Treść zadania:**
(0–2) Rozwiąż nierówność $(2x-3)(3-x) \ge 0$.
*CKE, matura – poziom podstawowy, czerwiec 2014*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 4
**Treść zadania:**
Rozwiąż nierówność $(x-2)(x-5) \le 4$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 5
**Treść zadania:**
(0–2) Rozwiąż nierówność $2(x+1)(x-3) < x^2 - 9$.
*CKE, matura – poziom podstawowy, czerwiec 2021*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 6
**Treść zadania:**
Rozwiąż równanie $2x^3 + 5x^2 = 3x$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 7
**Treść zadania:**
Rozłóż na czynniki wyrażenie $(x^2+x-2)^2 - (x+4)^2$, a następnie rozwiąż równanie $(x^2+x-2)^2 - (x+4)^2 = 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 8
**Treść zadania:**
(0–3) Rozwiąż równanie $4x^3 - 12x^2 - x + 3 = 0$.
*CKE, matura – poziom podstawowy, czerwiec 2024*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 9
**Treść zadania:**
(0–4) Rozwiąż nierówność $x^4 + x^2 \ge 2x$.
*CKE, matura – poziom rozszerzony, maj 2012*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 10
**Treść zadania:**
Wykonaj działania i przedstaw wynik w najprostszej postaci:
$$\frac{(\frac{1}{2}x - \frac{3}{4})^2 - (x - 1\frac{1}{2})(x + 1\frac{1}{2}) - \frac{1}{4}(x^2 - 1\frac{9}{16} - 3x)}{x+2}$$
*Egzamin wstępny do szkół średnich w woj. suwalskim w roku 1988*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 11
**Treść zadania:**
Wyrażenie $\left(\frac{3a}{1-3a} + \frac{2a}{1+3a}\right) : \frac{6a^2+10a}{1-6a+9a^2}$, dla $a \neq -\frac{5}{3}$, $a \neq -\frac{1}{3}$, $a \neq 0$, $a \neq \frac{1}{3}$, doprowadź do najprostszej postaci.
*Egzamin wstępny do szkół średnich w woj. warszawskim w roku 1989*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 12
**Treść zadania:**
Doprowadź wyrażenie $\left(\frac{a^2}{a+b} - \frac{a^3}{(a+b)^2}\right) : \left(\frac{a}{a-b} - \frac{a^2}{a^2-b^2}\right)$ do najprostszej postaci.
*Egzamin wstępny do szkół średnich w woj. słupskim w roku 1988*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 13
**Treść zadania:**
Rozwiąż równanie $3x - 10 = \frac{7x^2}{x-2}$ dla $x \neq 2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 14
**Treść zadania:**
Rozwiąż równanie $\frac{x+10}{x-2} = \frac{2(x+5)}{x+2}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 15
**Treść zadania:**
Rozwiąż równanie $1 + \frac{x}{x+2} = \frac{2x^2}{x^2-4}$.
*Egzamin wstępny do szkół średnich w woj. szczecińskim w roku 1988*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 16
**Treść zadania:**
Rozwiąż nierówność $\frac{2x-x^2}{1-x} \ge 1+x$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 17
**Treść zadania:**
(0–4) Rozwiąż nierówność $\left(\frac{1}{x} - 7\right)^{-1} \le 1$.
*CKE, matura – poziom rozszerzony (egzamin w starej formule), maj 2020*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 18
**Treść zadania:**
Znalezienie wszystkich par liczb całkowitych $(a, b)$, takich, że $(a-2)(b+3) = 5$, sprowadza się do rozpatrzenia następujących przypadków:
$$\begin{cases} a-2=1 \\ b+3=5 \end{cases} \quad \text{lub} \quad \begin{cases} a-2=5 \\ b+3=1 \end{cases} \quad \text{lub} \quad \begin{cases} a-2=-1 \\ b+3=-5 \end{cases} \quad \text{lub} \quad \begin{cases} a-2=-5 \\ b+3=-1 \end{cases}$$
Rozwiązując poszczególne układy równań, otrzymujemy wszystkie szukane pary liczb spełniające równanie $(a-2)(b+3)=5$: $(a, b) = (3, 2)$ lub $(a, b) = (7, -2)$ lub $(a, b) = (1, -8)$ lub $(a, b) = (-3, -4)$.
Postępując w analogiczny sposób, znajdź:
a) wszystkie pary liczb całkowitych $(x, y)$ spełniające równanie $(x-2)(2x+y+1) = 2$;
b) wszystkie pary liczb naturalnych $(x, y)$ spełniające równanie $(x-4)(y-5) = 9$;
c) W wszystkie pary liczb całkowitych $(x, y)$ spełniające równanie $xy + 5x + 2y + 3 = 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 19.*
**Treść zadania:**
Znajdź wszystkie pary liczb naturalnych spełniające równanie $2y^2 + xy - x^2 = 35$.
*Egzamin wstępny do Wojskowej Akademii Technicznej w roku 1997*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 20. R
**Treść zadania:**
Znajdź wszystkie pary liczb całkowitych nieujemnych takich, że suma ich iloczynu i ilorazu jest równa 185.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 21
**Treść zadania:**
Znajdź wszystkie takie pary liczb naturalnych, że ich największy wspólny dzielnik wynosi 6, a ich najmniejsza wspólna wielokrotność jest równa 210.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 22. W
**Treść zadania:**
Liczba naturalna ma dokładnie cztery dzielniki naturalne, a ich suma jest równa $s$. Znajdź tę liczbę, jeśli:
a) $s = 56$;
b) $s = 40$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 23. R
**Treść zadania:**
Uzasadnij, że suma pięciu kolejnych liczb całkowitych jest liczbą podzielną przez 5.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 24
**Treść zadania:**
(0–2) Uzasadnij, że suma kwadratów trzech kolejnych liczb całkowitych przy dzieleniu przez 3 daje resztę 2.
*CKE, matura – poziom podstawowy, czerwiec 2012*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 25
**Treść zadania:**
(0–2) Udowodnij, że każda liczba całkowita $k$, która przy dzieleniu przez 7 daje resztę 2, ma tę własność, że reszta z dzielenia liczby $3k^2$ przez 7 jest równa 5.
*CKE, matura – poziom podstawowy, maj 2014*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 26
**Treść zadania:**
Wykaż, że różnica kwadratów dwóch kolejnych liczb nieparzystych jest podzielna przez 8.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 29.* R
**Treść zadania:**
Uzasadnij, że suma dwóch liczb dwucyfrowych takich, że cyfra dziesiątek i cyfra jedności pierwszej jest odpowiednio cyfrą jedności i cyfrą dziesiątek drugiej, jest podzielna przez 11.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 30
**Treść zadania:**
Cyfry setek i jedności liczby trzycyfrowej $n$ są liczbami nieparzystymi. Zapisując cyfry liczby $n$ w odwrotnej kolejności, otrzymamy liczbę trzycyfrową $k$. Uzasadnij, że liczba $n-k$ jest podzielna przez 198.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 31. W
**Treść zadania:**
(0–3) Udowodnij, że dla każdej liczby nieparzystej $n$ wyrażenie $n^5 - 3n^4 - n + 19$ jest podzielne przez 16.
*CKE, matura – poziom rozszerzony, czerwiec 2019*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 32
**Treść zadania:**
Wykaż, że dla każdej liczby naturalnej $n \ge 1$ liczba $5n^3 - 5n$ jest podzielna przez 30.
*CKE, matura – poziom podstawowy, czerwiec 2024*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 33. W
**Treść zadania:**
Wykaż, że dla każdej liczby naturalnej $n$ liczba $n^5 - n$ jest podzielna przez 30.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 34
**Treść zadania:**
(0–3) Wykaż, że dla każdej liczby całkowitej $k$ liczba $k(k+1)(k+9)(k^2+1)$ jest podzielna przez 5.
*CKE, „Informator o egzaminie maturalnym z matematyki od roku szkolnego 2014/2015”*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 35.* R
**Treść zadania:**
Liczba naturalna $n$ daje przy dzieleniu przez 3 resztę 1, a przy dzieleniu przez 4 resztę 3. Znajdź resztę z dzielenia liczby $n$ przez 12.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 36.* W
**Treść zadania:**
Wykaż, że jeśli $p$ jest liczbą pierwszą większą od 3, to $p^2 - 1$ jest liczbą podzielną przez 24.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 37.* R
**Treść zadania:**
Udowodnij, że jeżeli suma trzech dowolnych liczb naturalnych jest podzielna przez 6, to suma sześcianów tych liczb jest również podzielna przez 6.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 38.* W
**Treść zadania:**
Wykaż, że jeżeli liczba $n$ jest sumą kwadratów dwóch liczb całkowitych, to liczba $5n$ również ma tę własność.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 39
**Treść zadania:**
Wykorzystując równość $\frac{1}{n} = \frac{1}{n+1} + \frac{1}{n(n+1)}$, zapisz ułamek $\frac{1}{5}$ jako sumę:
a) dwóch ułamków o liczniku równym 1;
b) trzech ułamków o liczniku równym 1.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 40
**Treść zadania:**
Wykorzystując równość $\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$, oblicz sumę:
a) $\frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 3} + \frac{1}{3 \cdot 4} + \frac{1}{4 \cdot 5} + \frac{1}{5 \cdot 6}$;
b) $\frac{1}{10 \cdot 11} + \frac{1}{11 \cdot 12} + \frac{1}{12 \cdot 13} + \dots + \frac{1}{99 \cdot 100}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 41
**Treść zadania:**
Znajdziemy ułamek zwykły, który ma rozwinięcie dziesiętne $0{,}(45)$.
• Oznaczmy $a = 0{,}454545\dots$ Zatem $100a = 45{,}454545\dots$
• Odejmując stronami otrzymujemy: $100a - a = 45{,}454545\dots - 0{,}454545\dots$
• Stąd $99a = 45$, czyli $a = \frac{45}{99}$. Ostatecznie, szukany ułamek jest równy $\frac{5}{11}$.
W podobny sposób znajdź ułamek zwykły, który ma rozwinięcie dziesiętne:
a) $0{,}(5)$;
b) $0{,}(27)$;
c) $0{,}3(567)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 42
**Treść zadania:**
Oblicz sumę:
a) $\frac{1}{1+\sqrt{2}} + \frac{1}{\sqrt{2}+\sqrt{3}} + \frac{1}{\sqrt{3}+\sqrt{4}}$;
b)* $\frac{1}{1+\sqrt{2}} + \frac{1}{\sqrt{2}+\sqrt{3}} + \frac{1}{\sqrt{3}+\sqrt{4}} + \dots + \frac{1}{\sqrt{99}+\sqrt{100}}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 43. R
**Treść zadania:**
Rozstrzygnij, która z liczb jest większa, $\sqrt{2014} + \sqrt{2016}$ czy $2\sqrt{2015}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 44.*
**Treść zadania:**
(0–3) Wykaż, że prawdziwa jest równość $\sqrt[3]{9+\sqrt{80}} + \sqrt[3]{9-\sqrt{80}} = 3$.
*CKE, matura – poziom rozszerzony, czerwiec 2013*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 45. W
**Treść zadania:**
Uzasadnij, że dla dowolnych różnych liczb $a$ i $b$ wyrażenie $\frac{|a-b| + |b-a|}{\sqrt{4a^2 - 8ab + 4b^2}}$ ma stałą wartość.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 46
**Treść zadania:**
Uzasadnij, że dla każdej liczby $x \in (-1; 5)$ wyrażenie $\sqrt{4x^2+12x+9} + 2\sqrt{x^2-12x+36}$ ma stałą wartość.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 47. R
**Treść zadania:**
Wykaż, że jeśli liczby $a$ i $b$ są mniejsze od 1, to $ab + 1 > a + b$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 48
**Treść zadania:**
Wykaż, że jeżeli $x^2y^2 + z^2 = 2xyz$, to $z = xy$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 49
**Treść zadania:**
Uzasadnij, że dla dowolnych liczb rzeczywistych $a, b$ zachodzi nierówność $a^2 + 9b^2 \ge 6ab$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 50
**Treść zadania:**
(0–2) Wykaż, że dla każdej liczby rzeczywistej $a$ i każdej liczby rzeczywistej $b$ prawdziwa jest równość $\left(\frac{a+b}{2}\right)^2 \le \frac{a^2+b^2}{2}$.
*CKE, matura – poziom podstawowy, czerwiec 2014*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 51
**Treść zadania:**
Wykaż, że $a^2 + b^2 + c^2 + d^2 + 2(ab - cd) \ge 0$ dla dowolnych liczb rzeczywistych $a, b, c, d$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 52
**Treść zadania:**
Wyznacz wszystkie pary liczb $(x, y)$ spełniające równanie $2x(x+y+1) + y^2 + 1 = 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 53
**Treść zadania:**
Znajdź takie liczby rzeczywiste $a$ i $b$, aby wyrażenie $10a^2 + b^2 + 6ab + 4a + 1$ przyjmowało najmniejszą wartość.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 54. R
**Treść zadania:**
Wykaż, że jeśli $a$ i $b$ są liczbami nieujemnymi, to $\frac{a+b}{2} \ge \sqrt{ab}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 55
**Treść zadania:**
Wykaż, że nierówność $\sqrt{\frac{a^4+b^4}{2}} \ge \frac{a^2+b^2}{2}$ jest spełniona przez wszystkie liczby rzeczywiste $a$ i $b$.
*CKE, matura – poziom rozszerzony, sierpień 2010*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 56
**Treść zadania:**
(0–2) Uzasadnij, że jeśli $(a^2+b^2)(c^2+d^2) = (ac+bd)^2$, to $ad = bc$.
*CKE, próbna matura – poziom podstawowy, listopad 2010*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 57
**Treść zadania:**
(0–4) Wykaż, że dla $a, b, c, d > 0$ prawdziwa jest nierówność $\sqrt{a+b} \cdot \sqrt{c+d} \ge \sqrt{ac} + \sqrt{bd}$.
*CKE, matura – poziom rozszerzony, czerwiec 2016*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 58
**Treść zadania:**
(0–2) Uzasadnij, że jeżeli $a+b=1$ i $a^2+b^2=7$, to $a^4+b^4=31$.
*CKE, matura – poziom podstawowy, maj 2011*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 59
**Treść zadania:**
(0–2) Uzasadnij, że jeżeli $a$ jest liczbą rzeczywistą różną od zera i $a+\frac{1}{a}=3$, to $a^2+\frac{1}{a^2}=7$.
*CKE, matura – poziom podstawowy, sierpień 2013*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 60
**Treść zadania:**
Wykaż, że suma sześcianów dwóch różnych liczb dodatnich jest większa od iloczynu ich sumy i ich iloczynu.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 61
**Treść zadania:**
Wykaż, że jeżeli różne od zera liczby $a$ i $b$ są tego samego znaku, to $\frac{a^3}{b} + \frac{b^3}{a} \ge a^2 + b^2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 62.*
**Treść zadania:**
(0–3) Uzasadnij, że jeżeli $2a+b \ge 0$, to $2a^3 + b^3 \ge 3a^2b$.
*CKE, matura – poziom rozszerzony, czerwiec 2013*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 63. W
**Treść zadania:**
Wykaż, że dla dowolnych liczb rzeczywistych $a, b, c$ prawdziwa jest nierówność $a^2 + b^2 + c^2 \ge ab + ac + bc$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 64
**Treść zadania:**
(0–3) Wykaż, że dla każdej liczby rzeczywistej $x$ i dla każdej liczby rzeczywistej $y$ takich, że $x \neq y$, spełniona jest nierówność $x^4 + y^4 > xy(x^2+y^2)$.
*CKE, matura – poziom rozszerzony, czerwiec 2022*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 65
**Treść zadania:**
(0–3) Udowodnij, że dla każdej liczby rzeczywistej $x$ i każdej liczby rzeczywistej $y$ prawdziwa jest nierówność $x(x-1) + y(y-1) \ge xy - 1$.
*CKE, matura – poziom rozszerzony, czerwiec 2014*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 66
**Treść zadania:**
(0–3) Wykaż, że jeśli $a, b, c$ są dowolnymi liczbami rzeczywistymi takimi, że $a+b+c=0$, to $3(a^2+b^2+c^2) = (a-b)^2 + (b-c)^2 + (c-a)^2$.
*CKE, matura – poziom rozszerzony (egzamin w starej formule), czerwiec 2016*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 67.* W
**Treść zadania:**
Wykaż, że jeśli $x+y+z=0$, to $xy+yz+zx \le 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 68.* R
**Treść zadania:**
Udowodnij, że dla dowolnych liczb rzeczywistych $a, b, c$ takich, że $a+b+c=3$ prawdziwa jest nierówność $a^2+b^2+c^2 \ge 3$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 69.* W
**Treść zadania:**
Niech $x$ i $y$ będą nieujemnymi liczbami rzeczywistymi, takimi że $x \ge y$. Wykazać, że zachodzi nierówność $x^4+y^4 \ge 2xy^3$.
*Egzamin wstępny na Uniwersytet Jagielloński (kierunki: matematyka i informatyka) w roku 1996*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 70
**Treść zadania:**
Na wykresie słupkowym przedstawiono wyniki ze sprawdzianu z matematyki przeprowadzonego w klasie III B.
*(Rozkład ocen: ocena 1 — 1 uczeń; ocena 2 — 3 uczniów; ocena 3 — 5 uczniów; ocena 4 — 8 uczniów; ocena 5 — 10 uczniów; ocena 6 — 3 uczniów)*
a) Ilu uczniów pisało sprawdzian?
b) Jaki procent uczniów uzyskało ze sprawdzianu ocenę co najmniej dobrą?
c) Oblicz, ilu uczniów liczy ta klasa, jeżeli wiadomo, że na sprawdzianie było nieobecnych 6,25% uczniów?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 71
**Treść zadania:**
Cena pewnego towaru wraz z 7% stawką podatku VAT była równa 64,20 złotych. Oblicz cenę tego towaru gdyby stawka podatku VAT była równa 22% zamiast 7%.
*CKE, próbna matura – poziom podstawowy, wrzesień 2001 r.*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 72. R
**Treść zadania:**
Pan Nowak w lutym 2004 roku wpłacił 5000 zł na 6-miesięczną lokatę o rocznym oprocentowaniu 4,4%. Wiedząc, że w 2004 roku banki zobowiązane były do potrącania 19-procentowego podatku od odsetek, oblicz o jaką kwotę powiększył się stan konta pana Nowaka po upływie 6 miesięcy od momentu założenia lokaty.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 73
**Treść zadania:**
Pan Neymar z bogatej oferty Banku Amazonia wybrał trzy roczne lokaty (patrz tabela) i na każdą z nich wpłacił po 2000 $.

| Lokata | Rodzaj oprocentowania | Wysokość oprocentowania | Kapitalizacja odsetek |
| :--- | :--- | :--- | :--- |
| Lokata HIT | stałe | 6,2% | roczna |
| Lokata GOLD | stałe | 6,0% | półroczna |
| Lokata SUPER | zmienne | 6,6%* | roczna |

\* *Oprocentowanie w dniu założenia lokaty.*
Oblicz wysokość odsetek, naliczonych w ciągu roku od każdej z trzech lokat wiedząc, że po ośmiu miesiącach od dnia założenia lokat, bank obniżył oprocentowanie lokaty SUPER do 5,7%.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 74
**Treść zadania:**
Liceum Ogólnokształcące i Liceum Profilowane tworzą Zespół Szkół. Do Zespołu Szkół uczęszcza 1500 uczniów, z czego 64% stanowią uczniowie LO. 55% uczniów LO i aż 80% uczniów LP to dziewczęta.
a) Ilu chłopców uczęszcza do Zespołu Szkół?
b) Jaki procent uczniów Zespołu Szkół stanowią dziewczęta?
c) O ile procent liczba chłopców jest mniejsza od liczby dziewcząt w Zespole Szkół?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 75. R
**Treść zadania:**
W roku 2000 ludność Polski stanowiła 6,5‰ ludności całego świata i 5,35% ludności Europy. Wiedząc, że kulę ziemską zamieszkiwało wtedy 6 mld osób, oblicz liczbę mieszkańców Europy w roku 2000. Wynik zaokrąglij do setek tysięcy.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 76
**Treść zadania:**
Dziadek założył w banku trzyletnią lokatę pieniężną o stałej rocznej stopie procentowej $p\%$ (już po uwzględnieniu podatków i prowizji). Odsetki są kapitalizowane po każdym roku sumowania. Całość środków, otrzymanych z banku po zlikwidowaniu lokaty, dziadek podzielił równo pomiędzy pięcioro wnucząt tak, że każde z dzieci otrzymało 1029 zł. Oblicz początkową kwotę lokaty, jeśli $p=5$.
*CKE, próbna matura – poziom podstawowy, styczeń 2009*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 77
**Treść zadania:**
W stadzie liczącym osiemdziesiąt koni ogiery stanowiły 10%. Jaki procent stada stanowią ogiery, jeśli właściciel stada sprzedał pięć ogierów?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 78
**Treść zadania:**
Wykresy przedstawiają strukturę powierzchni lasów państwowych w Polsce w 1999 roku. Lasy bukowe zajmowały wówczas obszar 291 448 ha.
*(Struktura ogólna: lasy iglaste 79%, lasy liściaste 21%. Podział lasów liściastych: buk 20%, brzoza 27%, dąb 44%, inne 9% — źródło: Rocznik Statystyczny 2000)*
a) Jaką powierzchnię zajmowały lasy liściaste?
b) O ile procent powierzchnia lasów brzozowych była większa od powierzchni lasów bukowych?
c) Oblicz, jaką powierzchnię (w hektarach) zajmowały lasy iglaste. Wynik zaokrąglij do dziesiątek.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 79. R
**Treść zadania:**
W 210 kilogramach nasion zanieczyszczenia stanowią 8%. Ile kg zanieczyszczeń należy usunąć, aby nasiona zawierały 3,4% zanieczyszczeń?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 80
**Treść zadania:**
Fabryka samochodów planuje w tym roku wypuścić z taśmy produkcyjnej 55 tys. samochodów, z czego 16% będą stanowiły samochody dostawcze, a pozostałe to samochody osobowe. W kolejnych latach planowany jest taki wzrost produkcji samochodów dostawczych, aby za trzy lata stanowiły one ponad 30% produkcji, przy zachowaniu wielkości produkcji samochodów osobowych. Ile samochodów dostawczych będzie wyjeżdżało rocznie z fabryki za trzy lata?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 81
**Treść zadania:**
Ze 100 kg mleka o zawartości 3,8% tłuszczu odciągnięto 10 kg śmietanki zawierającej 20% tłuszczu. Ile procent tłuszczu zawiera odtłuszczone mleko?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 82
**Treść zadania:**
Liczba dodatnia $a$ jest o 50% większa od liczby $p$, a liczba dodatnia $b$ jest o 20% mniejsza od liczby $q$. O ile procent iloczyn $ab$ jest większy od iloczynu liczb $p$ i $q$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 83
**Treść zadania:**
Ewa w dniu imienin dostała od koleżanek dwie czekolady o różnych masach. Jeszcze tego samego dnia zjadła całą mniejszą czekoladę. Następnego dnia zjadła 40% większej czekolady i zauważyła, że zjadła o 20% więcej czekolady niż dnia poprzedniego. Wyznacz stosunek mas czekolad.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 84. R
**Treść zadania:**
Cena biletu na pierwszy w sezonie mecz zespołu Unia Iłów wynosiła 12 zł. Gdy przed drugim meczem Unii na własnym stadionie obniżono cenę biletu, na trybunach zasiadło o 80% kibiców więcej niż podczas pierwszego spotkania, a wpływy ze sprzedaży biletów zwiększyły się o 20%. O ile złotych obniżono cenę biletu?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 85
**Treść zadania:**
Rodzeństwo w wieku 8 i 10 lat otrzymało razem w spadku 84 100 zł. Kwotę tę złożono w banku, który stosuje kapitalizację roczną przy rocznej stopie procentowej 5%. Każde z dzieci otrzyma swoją część spadku z chwilą osiągnięcia wieku 21 lat. Życzeniem spadkodawcy było takie podzielenie kwoty spadku, aby w przyszłości obie wypłacone części spadku zaokrąglone do 1 zł były równe. Jak należy podzielić kwotę 84 100 zł między rodzeństwo? Zapisz wszystkie wykonywane obliczenia.
*CKE, matura – poziom podstawowy, maj 2005*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 86. R
**Treść zadania:**
Świeże grzyby zawierają 90% wody. W wyniku suszenia masa grzybów zmniejszyła się ośmiokrotnie. Ile procent wody zawierają suszone grzyby?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 87
**Treść zadania:**
Na wykresach przedstawiono dane dotyczące uczniów szkół ponadpodstawowych w roku szkolnym 1999/2000.
*(Wykres 1: LO 39,8%, Technika i Lic. Zaw. 35,7%, ZSZ 24,5%. Wykres 2 (dziewczęta): LO 63,8%, Technika i Lic. Zaw. 46,4%, ZSZ 34,8% — źródło: Rocznik Statystyczny 2000)*
a) Czy w roku szkolnym 1999/2000 więcej chłopców uczęszczało do LO czy do ZSZ?
b) Czy w roku szkolnym 1999/2000 do szkół ponadpodstawowych uczęszczało więcej dziewcząt czy chłopców?
c) O ile procent liczba uczniów techników i liceów zawodowych była większa od liczby uczniów liceów ogólnokształcących? Wynik zaokrąglij do pierwszego miejsca po przecinku.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 88. R
**Treść zadania:**
Tomek hoduje rybki akwariowe. Rok temu rybki żyworodne stanowiły 20% liczby wszystkich rybek w akwarium Tomka. Obecnie liczba rybek żyworodnych jest o 50% większa, a liczba rybek jajorodnych zwiększyła się o 18,75%. Jaki odsetek stanowią obecnie rybki żyworodne?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 89
**Treść zadania:**
W pewnym lesie 60% drzew to drzewa iglaste (pozostałe, to drzewa liściaste). W następnym miesiącu zostanie wyciętych 20% drzew iglastych, ale w wyniku nasadzeń liczba drzew liściastych wzrośnie o 5%.
a) O ile procent liczba drzew iglastych jest obecnie większa od liczby drzew liściastych?
b) Liczba których drzew i o ile procent będzie mniejsza po planowanych zmianach?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 90. R
**Treść zadania:**
W sadzie rosną tylko jabłonie i grusze. Sadownik zamierza powiększyć liczbę grusz o 24%. Jeśli zrealizuje swoje zamierzenia, to liczba drzew w jego sadzie wzrośnie o 3%. Jaki procent drzew w tym sadzie stanowią obecnie jabłonie?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

### Zadanie 91
**Treść zadania:**
W tabeli podano ile kobiet przypadało na stu mężczyzn w wybranych grupach wiekowych w Polsce w 2002 r.

| Wiek | ogółem | miasto | wieś |
| :--- | :--- | :--- | :--- |
| 20 – 24 | 96,7 | 99,7 | 91,6 |
| 35 – 39 | 98,0 | 103,5 | 90,1 |
| 75 – 79 | 191,0 | 196,3 | 184,0 |

*Źródło: Rocznik Statystyczny*
a) Jaki odsetek ludności w wieku 75 – 79 lat stanowiły w 2002 roku kobiety?
b) Jaki odsetek mężczyzn w wieku 20 – 24 lata stanowili w 2002 roku mężczyźni mieszkający na wsi?
c)* R Jaki odsetek ludności w wieku 35 – 39 lat mieszkał w 2002 roku w mieście?
Otrzymane wyniki zaokrąglij do pełnego procentu.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)

**Odpowiedź:**
(rozwiązanie w książce)

---

