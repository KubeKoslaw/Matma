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

---

# FUNKCJA LINIOWA — ZADANIA

---

### Zadanie 4.1
**Treść zadania:**
Naszkicuj wykres funkcji $f$:
a) $f(x)=x$;
b) $f(x)=-x$;
c) $f(x)=2$;
d) $f(x)=0{,}5x-1$;
e) $f(x)=-2x+2$;
f) $f(x)=2x+1$, gdzie $x \in [-2; 1]$;
g) $f(x) = \begin{cases} x-2 & \text{dla } x \ge 3 \\ -\frac{1}{3}x & \text{dla } x < 3 \end{cases}$

**Odpowiedź i Rozwiązanie krok po kroku:**
*Wskazówka.* Aby naszkicować wykres funkcji liniowej, należy znaleźć dwa punkty należące do jej wykresu, zaznaczyć je na płaszczyźnie z układem współrzędnych i poprowadzić prostą przechodzącą przez zaznaczone punkty.
**Odpowiedź:** a) Rys. 1/4; b) Rys. 2/4; c) Rys. 3/4; d) Rys. 4/4; e) Rys. 5/4; f) Rys. 6/4; g) Rys. 7/4.

---

### Zadanie 4.2 [R]
**Treść zadania:**
Naszkicuj wykres funkcji $f$:
a) $f(x)=|x|$;
b) $f(x)=|x-1|+1$;
c) $f(x)=|x-1|+x$;
d) $f(x)=|x-1|+|x|$;
e) $f(x)=\sqrt{x^2-2x+1}-|x|$.

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
a) *I SPOSÓB.* Wykres funkcji $f$ można otrzymać, szkicując najpierw wykres funkcji $g(x)=x$, a następnie odbijając względem osi $OX$ ten fragment wykresu funkcji $g$, który znajduje się pod osią $OX$.
*UWAGA.* Umiejętność rysowania wykresu $y=|f(x)|$ na podstawie wykresu funkcji $f$ nie jest obecnie wymagana.

*II SPOSÓB.* Z definicji wartości bezwzględnej wiemy, że wzór funkcji można zapisać w postaci:
$$f(x) = \begin{cases} x & \text{dla } x \ge 0 \\ -x & \text{dla } x < 0 \end{cases}$$

b) Naszkicuj wykres funkcji $g(x)=|x|$, a następnie przesuń wykres funkcji $g$ o wektor $[1, 1]$.

c) Gdy $x \ge 1$, to $|x-1|=x-1$, gdy $x < 1$, to $|x-1|=-(x-1)$. Zatem:
$$f(x) = \begin{cases} 2x-1 & \text{dla } x \ge 1 \\ 1 & \text{dla } x < 1 \end{cases}$$

d) Gdy $x < 0$, to $|x-1|=-(x-1)$ i $|x|=-x$, gdy $x \in [0; 1)$, to $|x-1|=-(x-1)$ i $|x|=x$, a gdy $x \ge 1$, to $|x-1|=x-1$ i $|x|=x$. Zatem:
$$f(x) = \begin{cases} -2x+1 & \text{dla } x < 0 \\ 1 & \text{dla } x \in [0; 1) \\ 2x-1 & \text{dla } x \ge 1 \end{cases}$$

e) $\sqrt{x^2-2x+1} = \sqrt{(x-1)^2} = |x-1|$, więc wzór funkcji $f$ można zapisać w postaci $f(x)=|x-1|-|x|$. Postępując tak, jak w punkcie d), otrzymujemy:
$$f(x) = \begin{cases} 1 & \text{dla } x < 0 \\ -2x+1 & \text{dla } x \in [0; 1) \\ -1 & \text{dla } x \ge 1 \end{cases}$$
**Odpowiedź:** a) Rys. 8/4; b) Rys. 9/4; c) Rys. 10/4; d) Rys. 11/4; e) Rys. 12/4.

---

### Zadanie 4.3 [R]
**Treść zadania:**
Prosta $k$ określona jest równaniem $y=\frac{\sqrt{3}}{3}x+33$.
a) Czy funkcja $f$, której wykresem jest prosta $k$, jest rosnąca?
b) Podaj miarę kąta nachylenia prostej $k$ do osi $Ox$.
c) Czy prosta $l$ o równaniu $y=\frac{\sqrt{3}}{3}x-55$ jest równoległa do prostej $k$?
d) Czy prosta $p$ o równaniu $y=-\sqrt{3}x-22$ jest prostopadła do prostej $k$?
e) Podaj współrzędne punktu wspólnego prostej $k$ i osi $Oy$.

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
a) Prosta $k$ jest wykresem funkcji liniowej $f(x)=\frac{\sqrt{3}}{3}x+33$. We wzorze funkcji $f$ współczynnik przy $x$ (czyli współczynnik kierunkowy prostej $k$) jest dodatni, więc funkcja $f$ jest rosnąca.
b) Kąt nachylenia prostej $k$ do osi $OX$ jest równy $30^\circ$, ponieważ $\operatorname{tg} 30^\circ = \frac{\sqrt{3}}{3}$.
c) Współczynniki kierunkowe prostych $k$ i $l$ są równe, więc prosta $l$ jest równoległa do prostej $k$.
d) Prosta $p$ jest prostopadła do prostej $k$, ponieważ iloczyn współczynników kierunkowych prostych $k$ i $p$ jest równy $-1$: $\frac{\sqrt{3}}{3} \cdot (-\sqrt{3}) = -\frac{3}{3} = -1$.
e) Każdy punkt położony na osi $OY$ ma odciętą $x$ równą $0$. Wobec tego $y=\frac{\sqrt{3}}{3} \cdot 0 + 33 = 33$. Współrzędne szukanego punktu: $(0, 33)$.
**Odpowiedź:** a) Tak. b) $30^\circ$. c) Tak. d) Tak. e) $(0, 33)$.

---

### Zadanie 4.4 [R]
**Treść zadania:**
Znajdź wzór funkcji liniowej $f$ wiedząc, że
a) $f(-1)=2$ i $f(3)=-2$;
b) jej wykres przecina oś $Oy$ w punkcie o rzędnej $4$, a $2$ jest miejscem zerowym funkcji $f$;
c) jej wykres przechodzi przez punkty $A=(1, 2)$ i $B=(5, 6)$.
d) jej wykres przechodzi przez punkt $C=(4, 3)$ i jest równoległy do wykresu funkcji $g(x)=3x+7$;
e) jej wykres jest nachylony do osi $Ox$ pod kątem $60^\circ$ i przechodzi przez punkt $D=(1, 3)$.
f) $f$ nie przyjmuje wartości dodatnich i $f(22)=-3$.
g) jej wykres przechodzi przez punkt $E=(12, 5)$ i jest prostopadły do wykresu funkcji $h(x)=6x-4$.

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
a) Wzór funkcji $f$ ma postać $f(x)=ax+b$, musimy zatem znaleźć współczynniki $a$ i $b$. Wiemy, że $f(-1)=2$, więc $-a+b=2$ i że $f(3)=-2$, więc $3a+b=-2$. Otrzymaliśmy układ równań:
$$\begin{cases} -a+b=2 \\ 3a+b=-2 \end{cases}$$
Rozwiązaniem tego układu jest para liczb $a=-1$, $b=1$, zatem funkcja $f$ ma wzór $f(x)=-x+1$.

b) Wykres funkcji $f$ przecina oś $OY$ w punkcie o rzędnej $4$, więc $f(0)=4$. Liczba $2$ jest miejscem zerowym funkcji $f$, więc $f(2)=0$. Postępując tak, jak w punkcie a), otrzymamy układ równań:
$$\begin{cases} b=4 \\ 2a+b=0 \end{cases}$$
a po jego rozwiązaniu wzór funkcji $f$: $f(x)=-2x+4$.

c) Wzór funkcji $f$ możemy znaleźć, rozwiązując układ równań:
$$\begin{cases} a+b=2 \\ 5a+b=6 \end{cases}$$
Możemy też wykorzystać wzór na równanie prostej przechodzącej przez dane dwa punkty. Wykresem funkcji $f$ jest prosta, do której należą punkty $A$ i $B$, więc korzystając z tego wzoru mamy:
$$(y-2)(5-1)=(6-2)(x-1)$$
a po przekształceniach otrzymujemy $y=x+1$. Zatem funkcja $f$ określona jest wzorem $f(x)=x+1$.

d) Jeśli wykres funkcji $f$ jest równoległy do wykresu funkcji $g$, to oba wykresy są nachylone do osi $OX$ pod tym samym kątem, a to oznacza, że współczynniki kierunkowe we wzorach obu funkcji są równe $3$. Zatem wzór funkcji $f$ ma postać $f(x)=3x+b$. Ponieważ punkt $C=(4, 3)$ należy do wykresu funkcji $f$, to $3 \cdot 4 + b = 3$. Stąd mamy $b=-9$, więc $f(x)=3x-9$.

e) Wykres funkcji $f$ jest nachylony do osi $OX$ pod kątem $60^\circ$, więc współczynnik kierunkowy we wzorze funkcji $f$ jest równy $\operatorname{tg} 60^\circ = \sqrt{3}$. Zatem wzór funkcji $f$ ma postać $f(x)=\sqrt{3}x+b$. Postępując dalej tak, jak w punkcie d), otrzymamy $b=3-\sqrt{3}$ i $f(x)=\sqrt{3}x+3-\sqrt{3}$.

f) Zbiorem wartości funkcji $f(x)=ax+b$ jest albo zbiór liczb rzeczywistych (wtedy, gdy $a \neq 0$), albo zbiór, do którego należy tylko jedna liczba (wtedy, gdy $a=0$, czyli gdy $f$ jest funkcją stałą). Ponieważ funkcja $f$ nie przyjmuje wartości dodatnich, a przyjmuje wartość $-3$, to jest funkcją stałą określoną wzorem $f(x)=-3$.

g) $y=ax+b$ — równanie prostej będącej wykresem funkcji $f$. Wykresami funkcji $f$ i $h$ są proste prostopadłe, więc iloczyn współczynników kierunkowych tych prostych równy jest $-1$. Zatem $6a=-1$, czyli $a=-\frac{1}{6}$. Do prostej o równaniu $y=-\frac{1}{6}x+b$ należy punkt $E=(12, 5)$, więc $5=-\frac{1}{6} \cdot 12 + b$. Stąd wyznaczamy $b=7$. Funkcja $f$ określona jest wzorem $f(x)=-\frac{1}{6}x+7$.
**Odpowiedź:** a) $f(x)=-x+1$; b) $f(x)=-2x+4$; c) $f(x)=x+1$; d) $f(x)=3x-9$; e) $f(x)=\sqrt{3}x+3-\sqrt{3}$; f) $f(x)=-3$; g) $f(x)=-\frac{1}{6}x+7$.

---

### Zadanie 4.5 [R]
**Treść zadania:**
Znajdź te liczby $m$, dla których proste o równaniach $y=mx+7$ i $y=(4m-5)x-7$ są
a) równoległe;
b) prostopadłe.

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
a) Dwie proste są równoległe wtedy i tylko wtedy, gdy ich współczynniki kierunkowe są równe: $m=4m-5$. Stąd $m=\frac{5}{3}$.
b) Dwie proste są prostopadłe wtedy i tylko wtedy, gdy iloczyn ich współczynników kierunkowych równy jest $-1$: $m(4m-5)=-1$. Równanie to ma dwa rozwiązania $m=1$ oraz $m=\frac{1}{4}$.
**Odpowiedź:** a) $m=1\frac{2}{3}$; b) $m=1$ lub $m=\frac{1}{4}$.

---

### Zadanie 4.6 [R]
**Treść zadania:**
Dla jakich liczb rzeczywistych $p$ funkcja $f(x)=(7p+3)x-2p-8$ jest rosnąca?

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
Funkcja $f$ ma być rosnąca, więc współczynnik $7p+3$ musi być dodatni. Rozwiązaniami nierówności $7p+3 > 0$ są liczby $p > -\frac{3}{7}$.
**Odpowiedź:** $p \in \left(-\frac{3}{7}; +\infty\right)$.

---

### Zadanie 4.7
**Treść zadania:**
Przez które ćwiartki płaszczyzny z układem współrzędnych przechodzi wykres funkcji $f(x)=ax+b$, jeżeli
a) $a>0$ i $b=0$;
b) $a=0$ i $b>0$;
c) $a>0$ i $b<0$;
d) $a<0$ i $b>0$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** a) Przez I i III. b) Przez I i II. c) Przez I, III i IV. d) Przez I, II i IV.

---

### Zadanie 4.8
**Treść zadania:**
Określ liczbę rozwiązań równania:
a) $2(x+5)=5(x-2)$;
b) $2(x+5)=5(x-2)-3x$;
c) $2(x+5)=5(x-2)-3x+20$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** a) Równanie ma jedno rozwiązanie; b) równanie nie ma rozwiązań; c) równanie ma nieskończenie wiele rozwiązań.

---

### Zadanie 4.9
**Treść zadania:**
Określ liczbę rozwiązań danego równania w zależności od wartości parametru $a$. Dla tych wartości parametru $a$, dla których istnieją rozwiązania, podaj te rozwiązania.
a) R $2x+3=3x-5a$;
b) R $2x-a^2=a+ax-6$;
c) $ax+5=5x-a$;
d) $a^2x-3=9x+a$.

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
a) Z danego równania wyznaczamy $x$: $x=5a-3$. Widzimy, że jeśli w miejsce $a$ wstawimy dowolną liczbę, to zawsze otrzymamy jedno rozwiązanie (np. dla $a=2$ rozwiązaniem tym jest $x=7$).
b) Dane równanie sprowadzamy do postaci $x(2-a)=a^2+a-6$.
Jeżeli $a=2$, to mamy równanie $x \cdot (2-2) = 2^2+2-6$, czyli równanie $x \cdot 0 = 0$, które spełnia każda liczba rzeczywista.
Jeżeli $a \neq 2$, to obie strony równania $x(2-a)=a^2+a-6$ możemy podzielić przez $2-a$ (przy założeniu $a \neq 2$ mamy pewność, że nie dzielimy przez $0$), otrzymując $x = \frac{a^2+a-6}{2-a}$. Zatem dla każdej wartości $a \neq 2$ równanie ma jedno rozwiązanie równe $\frac{a^2+a-6}{2-a} = \frac{(a-2)(a+3)}{-(a-2)} = -a-3$.
**Odpowiedź:** a) Dla każdej wartości parametru $a$ równanie ma jedno rozwiązanie $x=5a+3$.
b) Gdy $a \neq 2$, to równanie ma jedno rozwiązanie $x=-a-3$, gdy $a=2$, to rozwiązaniem jest każda liczba rzeczywista.
c) Gdy $a \neq 5$, to równanie ma jedno rozwiązanie $x=\frac{a+5}{5-a}$, gdy $a=5$, to równanie nie ma rozwiązań.
d) Gdy $a \neq -3$ i $a \neq 3$, to równanie ma jedno rozwiązanie $x=\frac{1}{a-3}$, gdy $a=-3$, to rozwiązaniem równania jest każda liczba rzeczywista, gdy $a=3$, to równanie nie ma rozwiązań.

---

### Zadanie 4.10
**Treść zadania:**
Określ liczbę rozwiązań równania w zależności od wartości parametrów $a$ i $b$. Dla tych wartości parametrów, dla których istnieją rozwiązania, podaj te rozwiązania.
a) R $ax-3=x+b$;
b) $a(x+1)=b(x+2)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
a) Dane równanie sprowadzamy do postaci $x(a-1)=b+3$. Jeśli $a=1$, to mamy równanie $x \cdot 0 = b+3$. Jeśli teraz parametr $b$ będzie miał wartość różną od $-3$, to otrzymamy równanie sprzeczne, a jeśli parametr $b$ będzie miał wartość $-3$, to będziemy mieli równanie $x \cdot 0 = 0$, którego rozwiązaniem jest każda liczba rzeczywista. Jeśli $a \neq 1$, to obie strony równania możemy podzielić przez $a-1$, otrzymując $x=\frac{b+3}{a-1}$. Zatem równanie ma jedno rozwiązanie równe $\frac{b+3}{a-1}$ bez względu na wartość parametru $b$.
**Odpowiedź:** a) Gdy $a \neq 1$ i $b \in \mathbb{R}$, to równanie ma jedno rozwiązanie $x=\frac{b+3}{a-1}$, gdy $a=1$ i $b \neq -3$, to równanie nie ma rozwiązań, gdy $a=1$ i $b=-3$, to rozwiązaniem równania jest każda liczba rzeczywista;
b) gdy $a \neq b$, to równanie ma jedno rozwiązanie: $x=\frac{2b-a}{a-b}$, gdy $a=b$ i $a \neq 0$, to równanie nie ma rozwiązań, gdy $a=b=0$, to rozwiązaniem równania jest każda liczba rzeczywista.

---

### Zadanie 4.11
**Treść zadania:**
Rozwiąż nierówność $m(x-3)+6 \ge 2x$, gdzie $x$ jest niewiadomą, w zależności od wartości parametru $m$.

**Odpowiedź i Rozwiązanie krok po kroku:**
*Wskazówka.* Daną nierówność można zapisać na przykład w postaci $(m-2)x \ge 3(m-2)$.
**Odpowiedź:** Gdy $m=2$, to nierówność spełnia każda liczba rzeczywista, gdy $m>2$, to zbiorem rozwiązań jest przedział $[3; +\infty)$, gdy $m<2$, to zbiorem rozwiązań jest przedział $(-\infty; 3]$.

---

### Zadanie 4.12 [R]
**Treść zadania:**
Rozwiąż równanie:
a) $|x-6|=2$;
b) $||x-3|-2|=1$;
c) $|x|+|2x+1|=1$;
d) $|x-1|+|x+3|=4$;
e) $\sqrt{x^2+4x+4}+3x+8=0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
a) *I SPOSÓB.* Jeżeli $x$ i $a$ są liczbami zaznaczonymi na osi liczbowej, to liczba $|x-a|$ jest równa odległości liczby $x$ od liczby $a$. Należy więc wskazać takie liczby $x$, których odległość od liczby $6$ jest równa $2$. Liczbami tymi są $4$ i $8$.
*II SPOSÓB.* $|x-6|=2 \iff (x-6=2 \lor x-6=-2) \iff (x=8 \lor x=4)$.

b) $||x-3|-2|=1 \iff (|x-3|-2=1 \lor |x-3|-2=-1) \iff (|x-3|=3 \lor |x-3|=1) \iff (x-3=3 \lor x-3=-3 \lor x-3=1 \lor x-3=-1) \iff (x=6 \lor x=0 \lor x=4 \lor x=2)$.

c) Gdy $x \in [0; +\infty)$, to $|x|+|2x+1|=x+1$, gdy $x \in [0; +\infty)$, to $|x|+2x+1=3x+1$.
Szukamy rozwiązań równania $|x|+2x+1=0$ w przedziale $(-\infty; 0)$: $x+1=0 \iff x=-1$. $-1 \in (-\infty; 0)$, więc równanie ma rozwiązanie należące do przedziału $(-\infty; 0)$, jest nim $-1$. Szukamy rozwiązań równania w przedziale $[0; +\infty)$: $3x+1=0 \iff x=-\frac{1}{3}$. $-\frac{1}{3} \notin [0; +\infty)$, więc w przedziale $[0; +\infty)$ równanie $|x|+2x+1=0$ nie ma rozwiązań. Zatem dane równanie ma jedno rozwiązanie $x=-1$.

d) Gdy $x \in (-\infty; -3)$, to $|x-1|+|x+3|=-(x-1)-(x+3)=-2x-2$,
gdy $x \in [-3; 1)$, to $|x-1|+|x+3|=-(x-1)+x+3=4$,
gdy $x \in [1; +\infty)$, to $|x-1|+|x+3|=x-1+x+3=2x+2$.
Szukamy rozwiązań równania $|x-1|+|x+3|=4$ w przedziale $(-\infty; -3)$: $-2x-2=4 \iff x=-3$. $-3 \notin (-\infty; -3)$, więc w przedziale $(-\infty; -3)$ równanie nie ma rozwiązań. Dla $x \in [-3; 1)$ dane równanie ma postać $4=4$, więc każda liczba z przedziału $[-3; 1)$ jest jego rozwiązaniem. Szukamy rozwiązań równania $|x-1|+|x+3|=4$ w przedziale $[1; +\infty)$: $2x+2=4 \iff x=1$. $1 \in [1; +\infty)$, więc jest rozwiązaniem danego równania. Zatem rozwiązaniem równania jest każda liczba $x \in [-3; 1]$.
*UWAGA.* Zbiór rozwiązań znajdziemy natychmiast, postępując tak, jak w a) I SPOSÓB.

e) $\sqrt{x^2+4x+4}=\sqrt{(x+2)^2}=|x+2|$, więc rozwiązań równania należy szukać w przedziałach $(-\infty; -2)$ i $[-2; +\infty)$. W przedziale $(-\infty; -2)$ rozwiązaniem jest $-3$, a w przedziale $[-2; +\infty)$ równanie nie ma rozwiązań.
**Odpowiedź:** a) $x=4$ lub $x=8$; b) $x=0$ lub $x=2$ lub $x=4$ lub $x=6$; c) $x=-1$; d) $x \in [-3; 1]$; e) $x=-3$.

---

### Zadanie 4.13 [R]
**Treść zadania:**
Znajdź wszystkie rozwiązania nierówności $|x|-2 \cdot |x-4| > 1$ należące do
a) przedziału $(-\infty; 0)$;
b) przedziału $[0; 4)$;
c) przedziału $[4; +\infty)$;
d) zbioru $\mathbb{R}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
$|x| = \begin{cases} x, & \text{gdy } x \ge 0 \\ -x, & \text{gdy } x < 0 \end{cases}$, $|x-4| = \begin{cases} x-4, & \text{gdy } x \ge 4 \\ -x+4, & \text{gdy } x < 4 \end{cases}$

a) Dla $x \in (-\infty; 0)$ nierówność $|x|-2|x-4|>1$ ma postać $-x-2(-x+4)>1$. Rozwiązaniem nierówności są liczby $x>9$, co oznacza, że w przedziale $(-\infty; 0)$ nierówność nie ma rozwiązań.
b) Dla $x \in [0; 4)$ nierówność $|x|-2|x-4|>1$ ma postać $x-2(-x+4)>1$. Rozwiązaniem nierówności są liczby $x>3$, co oznacza, że w przedziale $[0; 4)$ rozwiązaniami nierówności są liczby $x \in (3; 4)$.
c) Dla $x \in [4; +\infty)$ nierówność $|x|-2|x-4|>1$ ma postać $x-2(x-4)>1$. Rozwiązaniem nierówności są liczby $x<7$, co oznacza, że w przedziale $[4; +\infty)$ rozwiązaniami nierówności są liczby $x \in [4; 7)$.
d) Z rozwiązań a)–c) wynika, że $x \in (3; 4) \cup [4; 7)$, czyli $x \in (3; 7)$.
**Odpowiedź:** a) Nie ma rozwiązań; b) $x \in (3; 4)$; c) $x \in [4; 7)$; d) $x \in (3; 7)$.

---

### Zadanie 4.14 [R]
**Treść zadania:**
Rozwiąż nierówność:
a) $|x| \ge 3$;
b) $|x+2| < 1$;
c) $|x|+x-2 \le 0$;
d) $2|x-1|+x < 4$.

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
a) *I SPOSÓB.* Jeżeli $x$ i $a$ są liczbami zaznaczonymi na osi liczbowej, to liczba $|x-a|$ jest równa odległości liczby $x$ od liczby $a$. Należy więc wskazać takie liczby $x$, których odległość od liczby $0$ jest nie mniejsza od $3$. Zatem $x \in (-\infty; -3] \cup [3; +\infty)$.
*II SPOSÓB.* $|x| \ge 3 \iff (x \le -3 \lor x \ge 3)$.

b) *I SPOSÓB.* Jeżeli $x$ i $a$ są liczbami zaznaczonymi na osi liczbowej, to liczba $|x-a|$ jest równa odległości liczby $x$ od liczby $a$. Należy więc wskazać takie liczby $x$, których odległość od liczby $-2$ jest mniejsza od $1$. Liczbami tymi są wszystkie liczby należące do przedziału $(-3; -1)$.
*II SPOSÓB.* $|p| < 1 \iff (p > -1 \land p < 1)$. Zatem $|x+2| < 1 \iff (x+2 > -1 \land x+2 < 1) \iff (x > -3 \land x < -1) \iff x \in (-3; -1)$.

c) Gdy $x \in (-\infty; 0)$, to $|x|+x-2 = -2$, gdy $x \in [0; +\infty)$, to $|x|+x-2 = 2x-2$. Dla $x \in (-\infty; 0)$ dana nierówność ma postać $-2 \le 0$, więc każda liczba z przedziału $(-\infty; 0)$ jest jej rozwiązaniem. Szukamy rozwiązań nierówności $|x|+x-2 \le 0$ w przedziale $[0; +\infty)$: $2x-2 \le 0 \iff x \le 1$. Liczbami z przedziału $[0; +\infty)$, które są mniejsze lub równe $1$, są liczby $x \in [0; 1]$. Zatem rozwiązaniami nierówności $|x|+x-2 \le 0$ są liczby $x \in (-\infty; 1]$.

d) Rozwiązań nierówności $2|x-1|+x < 4$ szukamy w przedziałach $(-\infty; 1)$ i $[1; +\infty)$. Liczbami z przedziału $(-\infty; 1)$, które spełniają daną nierówność są $x \in (-2; 1)$, a z przedziału $[1; +\infty)$ liczby $x \in [1; 2)$. Zatem rozwiązaniami nierówności $2|x-1|+x < 4$ są liczby $x \in (-2; 2)$.
**Odpowiedź:** a) $x \in (-\infty; -3] \cup [3; +\infty)$; b) $x \in (-3; -1)$; c) $x \in (-\infty; 1]$; d) $x \in (-2; 2)$.

---

### Zadanie 4.15 [R]
**Treść zadania:**
Dla jakich wartości parametru $m$ równanie $|x-2|=2m+1$ ma:
a) jedno rozwiązanie;
b) dwa rozwiązania?

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
a) Równanie ma jedno rozwiązanie wtedy, gdy $2m+1=0$, czyli gdy $m=-0{,}5$ (wówczas rozwiązaniem jest $x=2$).
b) Równanie ma dwa rozwiązania wtedy, gdy $2m+1>0$, czyli gdy $m>-0{,}5$ (wówczas $|x-2|=2m+1 \iff (x-2=2m+1 \lor x-2=-(2m+1)) \iff x=2m+3 \lor x=-2m+1)$.
**Odpowiedź:** a) $m=-0{,}5$; b) $m \in (-0{,}5; +\infty)$.

---

### Zadanie 4.16
**Treść zadania:**
Układ równań $\begin{cases} x+2y=1 \\ 2x-3y=16 \end{cases}$ ma jedno rozwiązanie.
a) Sprawdź, czy para liczb $(x, y)=(2, -4)$ spełnia jedno z równań danego układu równań.
b) Podaj parę liczb $(x, y)$, która spełnia pierwsze równanie i nie spełnia drugiego równania danego układu równań.
c) Sprawdź, czy para liczb $(x, y)=(5, -2)$ spełnia dany układ równań, a następnie podaj rozwiązanie układu.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** a) Spełnia drugie równanie; b) np. $(x, y)=(3, -1)$; c) para liczb $(5, -2)$ spełnia układ równań, więc jest jego rozwiązaniem.

---

### Zadanie 4.17 [R]
**Treść zadania:**
Rozwiąż (algebraicznie) układ równań:
a) $\begin{cases} 3x+2y=9 \\ 2x+y=7 \end{cases}$;
b) $\begin{cases} 6x+7y=8 \\ 7x+9y=5 \end{cases}$;
c) $\begin{cases} 2x-y=x+1 \\ y=x-1 \end{cases}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
a) Dany układ równań rozwiążemy metodą podstawiania. Z drugiego równania układu wyznaczamy $y$: $y=7-2x$. Podstawiając $7-2x$ w miejsce $y$ do pierwszego równania, otrzymujemy $3x+2(7-2x)=9$. Stąd wyznaczamy $x$: $x=5$. Teraz znajdziemy wartość $y$, podstawiając $x=5$ do równania $y=7-2x$: $y=7-2 \cdot 5 = -3$. Rozwiązaniem układu jest więc para $(x, y)=(5, -3)$.

b) Dany układ równań rozwiążemy metodą przeciwnych współczynników. Mnożąc obie strony równania pierwszego przez $7$, a drugiego przez $-6$, otrzymamy układ:
$$\begin{cases} 42x+49y=56 \\ -42x-54y=-30 \end{cases}$$
Dodając stronami oba równania, dostaniemy równanie $42x-42x+49y-54y=56-30$. Stąd wyznaczamy $y$: $y=-5{,}2$. Teraz znajdziemy wartość $x$, podstawiając $y=-5{,}2$ do równania $6x+7y=8$: $6x+7 \cdot (-5{,}2)=8$, stąd $y=7{,}4$. Rozwiązaniem układu jest więc para $(x, y)=(-5{,}2;\ 7{,}4)$.

c) Dany układ równań rozwiążemy metodą podstawiania. Z drugiego równania układu mamy $y=x-1$. Podstawiając do pierwszego równania $x-1$ w miejsce $y$, otrzymujemy równanie z niewiadomą $x$: $2x-(x-1)=x+1$. Stąd mamy równanie $x+1=x+1$, które jest prawdziwe dla każdej liczby rzeczywistej $x$. Oznacza to, że aby para liczb $(x, y)$ spełniała dany układ równań, $x$ może przyjmować dowolną wartość, natomiast $y$ wyznaczymy z zależności $y=x-1$. Zatem rozwiązaniem układu jest każda para liczb postaci $(x, x-1)$, gdzie $x$ jest dowolną liczbą rzeczywistą.
**Odpowiedź:** a) $(x, y)=(5, -3)$; b) $(x, y)=(7\frac{2}{5}; -5\frac{1}{5})$; c) rozw. układu jest każda para liczb $(x, y)=(a, a-1)$, gdzie $a$ jest dowolną liczbą rzeczywistą.

---

### Zadanie 4.18
**Treść zadania:**
Wyznacz współrzędne punktu wspólnego prostych o równaniach $y=x+3$ i $y=2x-4$.

**Odpowiedź i Rozwiązanie krok po kroku:**
*Wskazówka.* Jeżeli punkt należy do obu prostych, to jego współrzędne spełniają równanie $y=x+3$ i spełniają równanie $y=2x-4$. Zatem współrzędne punktu wspólnego tych prostych to rozwiązanie układu równań $\begin{cases} y=x+3 \\ y=2x-4 \end{cases}$.
**Odpowiedź:** $(7, 10)$.

---

### Zadanie 4.19
**Treść zadania:**
Nie rozwiązując układu równań, określ, czy ma rozwiązania.
a) R $\begin{cases} y=4x-1 \\ y=4x+1 \end{cases}$;
b) $\begin{cases} y=-x+2 \\ y=x-4 \end{cases}$;
c) $\begin{cases} y=3x-1 \\ 2y-6x=-2 \end{cases}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
*Wskazówka.* Układ równań ma tyle rozwiązań, ile punktów wspólnych mają proste opisane równaniami układu.
**Rozwiązanie:**
a) Proste o równaniach $y=4x-1$ i $y=4x+1$ są równoległe i różne, więc nie mają punktów wspólnych. Zatem układ równań nie ma rozwiązań.
**Odpowiedź:** a) Nie ma rozwiązań. b) Ma rozwiązanie (jedno). c) Ma rozwiązania (nieskończenie wiele rozwiązań).

---

### Zadanie 4.20 [R]
**Treść zadania:**
Rozwiąż układ równań:
a) $\begin{cases} |2x+y|=1 \\ x+y=2 \end{cases}$;
b) $\begin{cases} 2x-y+4=0 \\ |y+1|=|x-2| \end{cases}$;
c) $\begin{cases} |x|-y=2 \\ |x-|y||=0 \end{cases}$;
d) $\begin{cases} |x|+|y|=3 \\ 2x-y=3 \end{cases}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
a) Wyznaczając z drugiego równania układu $y=2-x$ i podstawiając do pierwszego, otrzymujemy równanie $|x+2|=1$, które spełniają liczby $x=-3$ i $x=-1$. Jeśli $x=-3$, to $y=5$ (bo $y=2-x$), a jeśli $x=-1$, to $y=3$. Zatem układ równań ma dwa rozwiązania $(x, y)=(-3, 5)$ i $(x, y)=(-1, 3)$.

b) Wyznaczając z pierwszego równania układu $y=2x+4$ i podstawiając do drugiego, otrzymujemy równanie $2x+5=|x-2|$. Rozwiązaniem otrzymanego równania w przedziale $(-\infty; 2)$ jest $x=-1$, w przedziale $[2; +\infty)$ równanie to nie ma rozwiązań. Zatem jedynym rozwiązaniem układu jest para liczb $(x, y)=(-1, 2)$.

c) Wyznaczając z drugiego równania układu $x=|y|$ i podstawiając do pierwszego, otrzymujemy równanie $||y||-y=2$. Dla każdej liczby rzeczywistej $y$ zachodzi równość $||y||=|y|$, więc mamy do rozwiązania równanie $|y|-y=2$. Równanie to w przedziale $(-\infty; 0)$ ma rozwiązanie $y=-1$, a w przedziale $[0; +\infty)$ nie ma rozwiązań. Zatem jedynym rozwiązaniem układu jest para liczb $(x, y)=(1, -1)$.

d) Wyznaczając z drugiego równania układu $y=2x-3$ i podstawiając do pierwszego, otrzymujemy równanie $|x|+|2x-3|=3$. Szukając rozwiązań otrzymanego równania w przedziałach $(-\infty; 0)$, $[0; 1{,}5)$ i $[1{,}5; +\infty)$, znajdujemy $x=0$ i $x=2$. Zatem rozwiązaniami układu są pary liczb $(x, y)=(0, -3)$, $(x, y)=(2, 1)$.
**Odpowiedź:** a) $(x, y)=(-3, 5)$ lub $(x, y)=(-1, 3)$; b) $(x, y)=(-1, 2)$; c) $(x, y)=(1, -1)$; d) $(x, y)=(0, -3)$ lub $(x, y)=(2, 1)$.

---

### Zadanie 4.21 [R]
**Treść zadania:**
Za $36\text{ dag}$ kiełbasy wiejskiej pan Andrzej zapłacił $12\text{ zł } 96\text{ gr}$. Jaka była cena kilograma kiełbasy wiejskiej kupionej przez pana Andrzeja?

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
$c$ – cena kilograma kiełbasy. $36\text{ dag} = 0{,}36\text{ kg}$. $0{,}36c = 12{,}96$, stąd $c = 36\text{ (zł)}$.
**Odpowiedź:** $36\text{ zł}$.

---

### Zadanie 4.22 [R]
**Treść zadania:**
Rozmieniono $10\text{ złotych}$ na monety $50$-groszowe i $20$-groszowe otrzymując razem $35\text{ monet}$. Oblicz, ile otrzymano monet każdego rodzaju.

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
Oznaczenia: $p$ – liczba monet $50$-groszowych, $d$ – liczba monet $20$-groszowych. Otrzymano $35\text{ monet}$, więc $p+d=35$.
Rozmieniono $10\text{ zł}$, więc $0{,}5p+0{,}2d=10$. Rozwiązując układ równań:
$$\begin{cases} p+d=35 \\ 0{,}5p+0{,}2d=10 \end{cases}$$
otrzymamy $p=10$ i $d=25$.
**Odpowiedź:** $10\text{ monet po } 50\text{ gr}$ i $25\text{ monet po } 20\text{ gr}$.

---

### Zadanie 4.23 [R]
**Treść zadania:**
Właściciel drukarni zaopatruje się w papier w odległych o $250\text{ km}$ zakładach papierniczych lub w oddalonej o $20\text{ km}$ hurtowni. U producenta cena jednej ryzy papieru to $60\text{ zł}$, a w hurtowni jest o $30\%$ wyższa. Zakupiony papier przywozi do drukarni firma transportowa, która pobiera opłatę w wysokości $4\text{ zł } 80\text{ gr}$ za kilometr (niezależnie od wielkości ładunku). Niech $K_P(n)$, $K_H(n)$ oznaczają całkowite koszty zakupu $n$ ryz papieru (wraz z kosztami transportu) odpowiednio u producenta i w hurtowni.
a) Podaj wzory funkcji $K_P$ i $K_H$.
b) Przy jakiej liczbie ryz dla właściciela drukarni korzystniej jest zaopatrywać się w papier u producenta?

**Odpowiedź i Rozwiązanie krok po kroku:**
**Rozwiązanie:**
a) Kupując $n$ ryz papieru u producenta, drukarz zapłaci $60n\text{ (zł)}$ za papier i $4{,}8 \cdot 250\text{ (zł)}$ za transport, więc $K_P(n) = 60n + 1200$.
Kupując papieru w hurtowni, drukarz zapłaci $1{,}3 \cdot 60\text{ (zł)}$ za ryzę, czyli $78n\text{ (zł)}$ za $n$ ryz papieru i $4{,}8 \cdot 20\text{ (zł)}$ za transport, zatem $K_H(n) = 78n + 96$.

b) Musimy znaleźć takie liczby naturalne $n$, dla których $K_P(n) < K_H(n)$:
$$60n + 1200 < 78n + 96 \iff 18n > 1104 \iff n > 61\frac{1}{3}$$
więc $n \ge 62$.
**Odpowiedź:** a) $K_P(n)=60n+1200$, $K_H(n)=78n+96$; b) przy zakupie co najmniej $62\text{ ryz}$.

---

### Zadanie 123
**Treść zadania:**
Niech $A$ będzie zbiorem rozwiązań nierówności $x - \frac{x-4}{3} < 2x - 8$. Podaj najmniejszą liczbę całkowitą należącą do zbioru $A$, która przy dzieleniu przez $4$ daje resztę $3$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 124
**Treść zadania:**
Rozwiąż nierówność $\frac{(x+1)^2}{2} - \frac{(x-1)(x+1)}{6} < 2x + 4 + \frac{(x+2)^2}{3}$ i zaznacz zbiór rozwiązań na osi liczbowej.
Podaj najmniejszą liczbę całkowitą spełniającą tę nierówność.
*Egzamin wstępny do szkół średnich w woj. olsztyńskim w roku 1995*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 125 [R]
**Treść zadania:**
Rozwiąż równanie $(2-3\sqrt{3})(x-2\sqrt{3}) = x+8$. Rozwiązanie zapisz w postaci $a+b\sqrt{c}$, gdzie $a, b, c$ są liczbami całkowitymi.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 126
**Treść zadania:**
Nierówność $|6x-1| < |2x+1|$ możemy rozwiązać w następujący sposób:
- zauważmy, że dla każdego $x \in \mathbb{R}$ wartości wyrażeń $|6x-1|$ i $|2x+1|$ są nieujemne, dlatego podnosząc obie strony danej nierówności do kwadratu, otrzymujemy nierówność równoważną: $|6x-1|^2 < |2x+1|^2$;
- korzystając z własności wartości bezwzględnej: dla każdej liczby rzeczywistej $a$ zachodzi równość $|a|^2 = a^2$, dostajemy nierówność kwadratową $(6x-1)^2 < (2x+1)^2$;
- rozwiązujemy otrzymaną nierówność: $(6x-1)^2 < (2x+1)^2 \iff (6x-1)^2 - (2x+1)^2 < 0 \iff (6x-1+2x+1)(6x-1-2x-1) < 0 \iff 8x(4x-2) < 0 \iff x \in (0; 0{,}5)$;
- zatem zbiorem rozwiązań danej nierówności jest przedział $(0; 0{,}5)$.

Stosując przedstawioną wyżej metodę, rozwiąż nierówność $|3x-7| \le |5x-9|$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 127
**Treść zadania:**
Rozwiąż równanie $\sqrt{4x^2+20x+25}+3x+8=0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 128
**Treść zadania:**
Rozwiąż równanie $|x|+|x-3|=3$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 129
**Treść zadania:**
(0–4) Rozwiąż nierówność $|2x-1|+x \le 5+|x+5|$.
*CKE, matura – poziom rozszerzony (egzamin w starej formule), czerwiec 2018*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 130
**Treść zadania:**
(0–5) Rozwiąż nierówność $\sqrt{x^2+4x+4} \ge 11-\sqrt{x^2-6x+9}$.
*CKE, matura – poziom rozszerzony, czerwiec 2013*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 131
**Treść zadania:**
(0–2) Zbiorem rozwiązań nierówności $ax+4 \ge 0$ z niewiadomą $x$ jest przedział $(-\infty, 2]$. Wyznacz $a$.
*CKE, Egzamin maturalny od roku szkolnego 2014/2015 – przykładowy zestaw zadań (poziom podstawowy)*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 132
**Treść zadania:**
(0–3) Wyznacz wszystkie wartości parametru $a$, dla których równanie $|x-5| = (a-1)^2 - 4$ ma dwa różne rozwiązania dodatnie.
*CKE, matura – poziom rozszerzony, maj 2020*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 133
**Treść zadania:**
Dla jakich wartości parametru $a$ równanie $|x-2|=a^2-3a-2$ ma dwa pierwiastki różnych znaków?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 134 [R]
**Treść zadania:**
Równanie $a(x+1)+x=b(x-1)+5$, gdzie $x$ jest niewiadomą, ma nieskończenie wiele rozwiązań. Znajdź liczby $a$ i $b$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 135
**Treść zadania:**
Rozwiąż równanie $a^2(x-1)-ab=b^2(x+1)+ab$, gdzie $a$ i $b$ są parametrami.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 136
**Treść zadania:**
Punkt $S=\left(\frac{3}{4}, \frac{1}{2}\right)$ należy do prostej $k$, która jest równoległa do prostej o równaniu $y=-2x-7$. Znajdź równanie prostej $k$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 137
**Treść zadania:**
Prosta $k$ przecina oś $OY$ w punkcie $P=(0, 7)$ i jest prostopadła do prostej o równaniu $y=0{,}4x+0{,}6$. Znajdź równanie prostej $k$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 138
**Treść zadania:**
Prosta $k$ zawiera odcinek, którego końcami są punkty $A=(0, -3)$ i $B=(1, 1)$. Znajdź równanie prostej $k$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 139
**Treść zadania:**
Sprawdź, czy punkty $A=(0, -4)$, $B=(2, 0)$, $C=(202, 400)$ są współliniowe.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 140
**Treść zadania:**
Znajdź współrzędne takiego punktu należącego do prostej o równaniu $y=3x+2$, którego rzędna jest o $10$ większa od odciętej.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 141
**Treść zadania:**
Znajdź wszystkie pary liczb całkowitych $k$ i $n$, dla których proste o równaniach $y=(k+n)x+1$ i $y=(2k+3n)x+2$ są prostopadłe.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 142
**Treść zadania:**
Rozwiąż układ równań:
$$\begin{cases} y=(x+3)^2-(x-2)^2 \\ 4 \cdot (5x+3)=(y+1)^2-(y-1)(y+1) \end{cases}$$

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 143 [R]
**Treść zadania:**
Rozwiązaniem układu równań $\begin{cases} (n+2)x+y=5-m \\ 4x+(0{,}5n+2)y=1-m \end{cases}$ jest para liczb $x=-1$ i $y=2$. Znajdź liczby $m$ i $n$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 144
**Treść zadania:**
Na rysunku obok przedstawiono ilustrację graficzną pewnego układu dwóch równań liniowych z dwiema niewiadomymi.
a) Znajdź równania tego układu.
b) Rozwiąż algebraicznie znaleziony układ równań.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 145
**Treść zadania:**
Układ równań z niewiadomymi $x$ i $y$ ma postać $\begin{cases} 3x-2y=8 \\ ax+4y=c \end{cases}$.
a) Rozwiąż układ równań, gdy $a=-6$ i $c=-2$.
b) Dobierz współczynniki $a$ i $c$ tak, aby układ równań miał nieskończenie wiele rozwiązań. Rozwiąż otrzymany układ równań.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 146 [R]
**Treść zadania:**
Rozwiąż układ równań:
$$\begin{cases} 3|x|+2y=1 \\ 2x-|y|=4 \end{cases}$$

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 147 [R]
**Treść zadania:**
Rozwiąż algebraicznie i graficznie układ równań:
$$\begin{cases} |x|-y=1 \\ -x+|y|=1 \end{cases}$$

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 148
**Treść zadania:**
Rozwiąż układ równań:
$$\begin{cases} 2|x-2|+3|y+1|=4 \\ 2x-y=3 \end{cases}$$

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 149 [R]
**Treść zadania:**
Funkcja $f$ określona jest wzorem $f(x)=\pi x+\pi^2$. Prosta $k$ jest wykresem funkcji $f$.
a) Wyznacz te argumenty, dla których funkcja $f$ przyjmuje wartości nieujemne.
b) Oblicz współrzędne punktu przecięcia prostej $k$ z wykresem funkcji $g(x)=x+\pi$.
c) Znajdź równanie prostej przechodzącej przez punkt $K=(-1, \pi)$ i równoległej do prostej $k$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 150
**Treść zadania:**
Znajdź wzór malejącej funkcji $f(x)=ax+b$ wiedząc, że wykres funkcji $f$ nie przechodzi przez początek układu współrzędnych, a współczynniki $a$ i $b$ są różnymi rozwiązaniami równania $2z^3-z^2-z=0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 151
**Treść zadania:**
Dane są funkcje $f(x)=3x-2$, $g(x)=-\frac{1}{2}x+5$ i $h(x)=ax+3$. Dla jakiej liczby $a$ wykresy funkcji $f$, $g$, $h$ przecinają się w jednym punkcie?
*Egzamin wstępny do liceów ogólnokształcących w woj. wałbrzyskim w roku 1988*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 152 [R]
**Treść zadania:**
Odcinek o końcach $A=(-2, 5)$ i $B=(3, 1)$ jest wykresem funkcji $f$. Znajdź współrzędne punktu wspólnego wykresu funkcji $f$ i osi $OY$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 153
**Treść zadania:**
Do wykresu funkcji $f(x)=-0{,}5x+b$ należy punkt $P=(2, -3)$, a wykres funkcji $g(x)=cx-5$ nachylony jest do osi $OX$ pod kątem $45^\circ$.
a) Wyznacz wartości współczynników $b$ i $c$.
b) Wyznacz zbiór tych argumentów, dla których obie funkcje przyjmują jednocześnie wartości ujemne.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 154 [R]
**Treść zadania:**
Funkcja $f$ określona jest wzorem $f(x)=3x+b$.
a) Wyznacz te wartości współczynnika $b$, dla których wartość funkcji $f$ przyjmowana dla argumentu $2$ jest mniejsza od $2$.
b) Wyznacz te wartości współczynnika $b$, dla których miejsce zerowe funkcji $f$ jest większe od $3\frac{1}{3}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 155 [R]
**Treść zadania:**
Funkcja liniowa $f$ dla argumentu $-2$ przyjmuje wartość $8$, a dla argumentu $2$ wartość $-4$. Wyznacz najmniejszą wartość funkcji $f$ osiąganą w przedziale $[-3; 3]$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 156 [R]
**Treść zadania:**
Funkcja $f$ jest liniowa. Zbiorem rozwiązań nierówności $f(x)>8$ jest przedział $(-\infty; -1)$, a zbiorem rozwiązań nierówności $f(x) \le -2$ jest przedział $[4; +\infty)$. Znajdź wzór funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 157
**Treść zadania:**
Funkcja liniowa $f$ określona jest wzorem $f(x)=ax+b$ dla $x \in \mathbb{R}$.
a) Dla $a=2008$ i $b=2009$ zbadaj, czy do wykresu tej funkcji należy punkt $P=(2009, 2009^2)$.
b) Narysuj w układzie współrzędnych zbiór $A=\{(x, y): x \in [-1; 3] \text{ i } y=-0{,}5x+b \text{ i } b \in [-2; 1]\}$.
*CKE, matura – Arkusz II, maj 2009*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 158
**Treść zadania:**
Znajdź wzór funkcji liniowej $f$ wiedząc, że dla każdej liczby rzeczywistej $x$ zachodzi równość:
$$f(x)+f(x+1)=4(x+1)$$

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 159
**Treść zadania:**
Funkcja $f$ określona jest wzorem:
$$f(x) = \begin{cases} 0{,}5x+2 & \text{dla } x \le 2 \\ 5-x & \text{dla } x > 2 \end{cases}$$
a) Naszkicuj wykres funkcji $f$.
b) W Rozwiąż równanie $f(x)=2x-4$.
c) Rozwiąż nierówność $f(x)>-2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 160
**Treść zadania:**
Dla jakich wartości współczynnika $m$ współrzędne punktu przecięcia wykresów funkcji $f(x)=-2x+m$ i $g(x)=-\frac{1}{3}x+\frac{2}{3}$ są parą liczb
a) dodatnich;
b) różnych znaków?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 161
**Treść zadania:**
(0–4) Wyznacz wszystkie wartości parametru $a$, dla których wykresy funkcji $f$ i $g$, określonych wzorami $f(x)=x-2$ oraz $g(x)=5-ax$, przecinają się w punkcie o obu współrzędnych dodatnich.
*CKE, matura – poziom rozszerzony, maj 2016*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 162
**Treść zadania:**
Niech $P=(a, b)$ będzie dowolnym punktem wykresu funkcji $f(x)=-x+2$.
a) Wyraź sumę odległości punktu $P$ od osi układu współrzędnych jako funkcję zmiennej $a$ i naszkicuj wykres tej funkcji.
b) Znajdź współrzędne takiego punktu należącego do wykresu funkcji $f$, którego suma odległości od osi układu współrzędnych jest równa $16$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 163
**Treść zadania:**
Proste $k$ i $l$ określone są równaniami $y=2x-1$ i $y=0{,}5x+2$. Prosta $y=t$ przecina proste $k$ i $l$ odpowiednio w punktach $A$ i $B$ (zobacz rysunek).
a) Długość odcinka $AB$ wyraź jako funkcję zmiennej $t$.
b) Wyznacz takie punkty $A$ i $B$, aby długość odcinka $AB$ była równa $3$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 164 [R]
**Treść zadania:**
Funkcje $f(x)=ax+8$ i $g(x)=3x+b$, gdzie $a, b$ są liczbami naturalnymi i $a \in (50; 75)$, wartość $2010$ przyjmują dla tego samego argumentu. Wyznacz wartości współczynników $a$ i $b$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 165 [R]
**Treść zadania:**
W lidze piłkarskiej zespół za zwycięstwo otrzymuje $3\text{ punkty}$, za remis $1\text{ punkt}$, a za porażkę nie otrzymuje punktów. W sezonie 2003/2004 zespół Amica Wronki w dwudziestu sześciu meczach ligowych zdobył $48\text{ punktów}$. Wiedząc, że drużyna z Wronek sześć razy schodziła z boiska pokonana, oblicz ile odniosła zwycięstw.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 166 [R]
**Treść zadania:**
W pewnej klasie dziewczęta stanowiły $25\%$ liczby uczniów. Do klasy przybyła jedna osoba i wówczas odsetek dziewcząt wzrósł do $28\%$. Ilu chłopców jest w tej klasie?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 167
**Treść zadania:**
Uczniowie klasy trzeciej zamierzają wynająć autokar na wycieczkę. Gdyby uczniowie zapłacili po $12\text{ zł } 50\text{ gr}$, to do pokrycia kosztów wynajmu autokaru zabrakłoby $100\text{ zł}$, a jeżeli każdy uczeń zapłaci $16\text{ zł}$, to po opłaceniu kosztów wynajęcia autokaru zostanie $12\text{ zł}$.
a) Ile osób planuje wyjazd na tę wycieczkę?
b) Jaki jest koszt wynajęcia autokaru?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 168
**Treść zadania:**
Gdyby w klasie IIIA maturę z matematyki wybrało o dwóch uczniów więcej, to wszyscy uczniowie tej klasy zdający maturę z matematyki stanowiliby połowę klasy, a gdyby spośród osób, które wybrały matematykę, jedna zrezygnowała, to maturę z matematyki zdawałaby jedna trzecia uczniów klasy IIIA. Ilu uczniów liczy klasa IIIA?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 169
**Treść zadania:**
W dwóch zbiornikach $Z_1$ i $Z_2$ znajduje się woda. Ze zbiornika $Z_1$ przepompowano do zbiornika $Z_2$ tyle wody, że ilość wody w $Z_2$ podwoiła się. Następnie ze zbiornika $Z_2$ przepompowano do zbiornika $Z_1$ tyle wody, że ilość wody w $Z_1$ potroiła się. Okazało się wówczas, że w obu zbiornikach jest po $450\text{ litrów}$ wody. Oblicz, ile wody było na początku w każdym zbiorniku.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 170
**Treść zadania:**
Z dwóch miejscowości odległych o $35\text{ km}$ wyjechały jednocześnie na spotkanie dwie koleżanki. Gdy spotkały się, obliczyły, że pierwsza z nich jechała ze średnią prędkością $12\text{ km/godz.}$, a druga ze średnią prędkością $16\text{ km/godz.}$ Ile kilometrów przejechała każda z dziewcząt?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 171 [R]
**Treść zadania:**
Statek wycieczkowy, płynąc z prądem rzeki, pokonuje trasę z miasta $A$ do miasta $B$ w ciągu dwóch godzin, natomiast z powrotem płynie o pół godziny dłużej. Ile czasu będzie płynąć tratwa z miasta $A$ do miasta $B$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 172
**Treść zadania:**
Motorówka wyruszyła o godzinie $9$ w górę rzeki i w tym samym czasie wyrzucono z motorówki do wody piłkę. O godz. $9\text{ min. } 15$ motorówka zawróciła i popłynęła w dół rzeki. O której godzinie motorówka dogoni piłkę?
*Egzamin wstępny na AGH w Krakowie (Wydział Maszyn Górniczych i Hutniczych) w roku 1958*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 173
**Treść zadania:**
Kuba pożyczył od taty samochód, którym wyruszył z domu na spotkanie ze swoją dziewczyną. Przed wyjazdem obliczył, że jadąc ze średnią prędkością $60\text{ km/godz.}$ przybędzie na spotkanie dokładnie o umówionej godzinie. Po przejechaniu (z zaplanowaną prędkością) $60\%$ drogi „złapał gumę”, a zmiana koła zajęła mu $16\text{ minut}$. Teraz, aby zdążyć na spotkanie, musiałby jechać z prędkością $120\text{ km/godz.}$ Oblicz odległość od domu Kuby do miejsca spotkania z ukochaną.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 174 [R]
**Treść zadania:**
Stężenie roztworu kwasu solnego wynosi $5\%$. Ile kilogramów wody należy dodać do $44\text{ kg}$ tego roztworu, aby stężenie roztworu zmniejszyło się do $2\%$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 175
**Treść zadania:**
Ile kilogramów $10$-procentowego kwasu siarkowego i ile kilogramów $20$-procentowego kwasu siarkowego należy zmieszać, aby otrzymać $20\text{ kg}$ kwasu siarkowego o stężeniu $16\%$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 176 [R]
**Treść zadania:**
Mamy trzy roztwory, każdy zawierający chlorek sodu i chlorek potasu. Procentową zawartość obu chlorków w roztworach podano w tabeli. W jakim stosunku należy zmieszać wszystkie trzy roztwory, aby otrzymać roztwór, w którym stężenie każdego z chlorków wynosić będzie $6\%$?

| Roztwór | Chlorek sodu (NaCl) | Chlorek potasu (KCl) |
| :---: | :---: | :---: |
| I | $14{,}1\%$ | $2{,}5\%$ |
| II | $8{,}7\%$ | $8{,}2\%$ |
| III | $1{,}5\%$ | $5{,}7\%$ |

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 177
**Treść zadania:**
W miasteczku działają dwie korporacje taksówkarskie. Cennik opłat obu korporacji zamieszczony został w poniższej tabeli.

| Nazwa korporacji | Opłata stała (za „trzaśnięcie drzwiami”) | Opłata za $1\text{ km}$ |
| :--- | :---: | :---: |
| *Alfa* | $4\text{ zł}$ | $2{,}60\text{ zł}$ |
| *Omega* | $6{,}40\text{ zł}$ | $2{,}30\text{ zł}$ |

a) Zapisz w postaci wzoru zależność między kosztem przejazdu (w złotych) taksówką korporacji *Alfa*, a liczbą przejechanych kilometrów.
b) Pasażer zamierza udać się do miejsca oddalonego o $7\text{ km}$. Taksówkę której korporacji powinien wybrać, aby mniej zapłacić za przejazd?
c) Przy jakiej długości trasy koszt przejazdu taksówką korporacji *Alfa* jest niższy niż koszt przejazdu taksówką korporacji *Omega*?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 178
**Treść zadania:**
Zależność między temperaturą wyrażoną w stopniach Fahrenheita, a wyrażoną w stopniach Celsjusza jest zależnością liniową.
a) Znajdź tę zależność wiedząc, że $32^\circ\text{F}$ to $0^\circ\text{C}$, a $5^\circ\text{F}$ to $-15^\circ\text{C}$.
b) Przeziębiony pan Smith zmierzył temperaturę. Okazało się, że ma $100^\circ\text{F}$. Temperaturę ciała pana Smitha wyraź w stopniach Celsjusza. Odpowiedź podaj po zaokrągleniu do pierwszego miejsca po przecinku.
c) 22 lipca w San Diego temperatura o godz. $12^{00}$ była o $12{,}5^\circ\text{C}$ wyższa niż temperatura o godz. $6^{00}$. Wyraź wzrost temperatury w stopniach Fahrenheita.
d) 15 stycznia w miejscowości Point Lay na Alasce dwa termometry wskazywały tę samą temperaturę mimo, że jeden pokazywał temperaturę w $^\circ\text{C}$, a drugi w $^\circ\text{F}$. Jaka temperatura panowała w Point Lay?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

# FUNKCJA KWADRATOWA — ZADANIA

### Zadanie 5.1
**Treść zadania:**
Znajdź miejsca zerowe funkcji $f$, jeśli:
a) [R] $f(x)=2x^2+3x-5$;
b) $f(x)=4x^2+12x+9$;
c) $f(x)=-x^2+x-1$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Szukamy tych argumentów $x$, dla których funkcja $f$ przyjmuje wartość $0$, czyli tych, które spełniają równanie kwadratowe $2x^2+3x-5=0$. Rozwiązujemy to równanie:
$$\Delta = 3^2 - 4 \cdot 2 \cdot (-5) = 9 + 40 = 49, \quad \sqrt{\Delta} = 7$$
$$x_1 = \frac{-3-7}{2 \cdot 2} = -2{,}5, \quad x_2 = \frac{-3+7}{2 \cdot 2} = 1$$
Zatem miejscami zerowymi funkcji $f$ są liczby $-2{,}5$ i $1$.

b) $4x^2+12x+9 = 0 \iff (2x+3)^2 = 0 \iff 2x+3=0 \iff x = -1{,}5$.

c) $\Delta = 1^2 - 4 \cdot (-1) \cdot (-1) = 1 - 4 = -3 < 0$, zatem funkcja nie ma miejsc zerowych.

**Odpowiedź:** a) $-2{,}5$ i $1$; b) $-1{,}5$; c) funkcja nie ma miejsc zerowych.

---

### Zadanie 5.2 [R]
**Treść zadania:**
Jednym z miejsc zerowych funkcji $f(x)=ax^2-2x-21$ jest $3$. Znajdź drugie miejsce zerowe funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Liczba $3$ jest miejscem zerowym funkcji $f$, więc $f(3)=0$, stąd zachodzi równość:
$$a \cdot 3^2 - 2 \cdot 3 - 21 = 0 \iff 9a - 27 = 0 \iff a = 3$$
Jeśli $a=3$, to funkcja $f$ określona jest wzorem $f(x)=3x^2-2x-21$, a jej miejscami zerowymi są rozwiązania równania $3x^2-2x-21=0$. Rozwiązujemy to równanie:
$$\Delta = (-2)^2 - 4 \cdot 3 \cdot (-21) = 4 + 252 = 256, \quad \sqrt{\Delta} = 16$$
$$x_1 = \frac{2-16}{2 \cdot 3} = -\frac{14}{6} = -2\frac{1}{3}, \quad x_2 = \frac{2+16}{6} = 3$$
Zatem drugim miejscem zerowym funkcji $f$ jest liczba $-2\frac{1}{3}$.

**Odpowiedź:** $$-2\frac{1}{3}$$

---

### Zadanie 5.3 [R]
**Treść zadania:**
Wyznacz te wartości współczynnika $b$, dla których funkcja $f(x)=x^2+bx+1$ ma:
a) jedno miejsce zerowe;
b) dwa miejsca zerowe;
c) co najwyżej jedno miejsce zerowe;

**Odpowiedź i Rozwiązanie krok po kroku:**
Wyznaczamy wyróżnik trójmianu: $\Delta = b^2 - 4 \cdot 1 \cdot 1 = b^2 - 4$.
a) Funkcja $f$ będzie miała jedno miejsce zerowe wtedy, gdy $\Delta = 0$:
$$b^2 - 4 = 0 \iff b = -2 \lor b = 2$$
b) Funkcja $f$ będzie miała dwa miejsca zerowe wtedy, gdy $\Delta > 0$:
$$b^2 - 4 > 0 \iff b \in (-\infty; -2) \cup (2; +\infty)$$
c) Funkcja $f$ będzie miała co najwyżej jedno miejsce zerowe wtedy, gdy $\Delta \le 0$:
$$b^2 - 4 \le 0 \iff b \in [-2; 2]$$

**Odpowiedź:** a) $b = -2$ lub $b = 2$; b) $b \in (-\infty; -2) \cup (2; +\infty)$; c) $b \in [-2; 2]$.

---

### Zadanie 5.4
**Treść zadania:**
Zapisz w postaci ogólnej wzór funkcji kwadratowej $f$, jeśli:
a) [R] $f(x)=3(x+1)^2+2$;
b) $f(x)=-2(x-1)(x+3)$;

**Odpowiedź i Rozwiązanie krok po kroku:**
Wzór funkcji należy sprowadzić do postaci ogólnej, czyli do postaci $f(x)=ax^2+bx+c$.
a) $3(x+1)^2+2 = 3(x^2+2x+1)+2 = 3x^2+6x+3+2 = 3x^2+6x+5$.
b) $-2(x-1)(x+3) = -2(x^2+2x-3) = -2x^2-4x+6$.

**Odpowiedź:** a) $f(x)=3x^2+6x+5$; b) $f(x)=-2x^2-4x+6$.

---

### Zadanie 5.5 [R]
**Treść zadania:**
Zapisz wzór funkcji $f$ w postaci kanonicznej i (o ile to możliwe) w postaci iloczynowej:
a) $f(x)=2x^2+3x-5$;
b) $f(x)=-5x^2+10x-5$;
c) $f(x)=x^2-4x+5$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Dla $f(x)=2x^2+3x-5$:
$\Delta = 3^2 - 4 \cdot 2 \cdot (-5) = 49$.
Współrzędne wierzchołka: $p = -\frac{3}{4} = -0{,}75$, $q = -\frac{49}{8} = -6{,}125$.
Postać kanoniczna: $f(x) = 2(x+0{,}75)^2 - 6{,}125$.
Pierwiastki: $x_1 = \frac{-3-7}{4} = -2{,}5$, $x_2 = \frac{-3+7}{4} = 1$.
Postać iloczynowa: $f(x) = 2(x+2{,}5)(x-1)$.

b) Dla $f(x)=-5x^2+10x-5$:
Wyłączamy $-5$ przed nawias: $-5(x^2-2x+1)$. Korzystając ze wzoru skróconego mnożenia na kwadrat różnicy, otrzymujemy $f(x) = -5(x-1)^2$. Jest to postać kanoniczna, a zarazem postać iloczynowa wzoru funkcji $f$.

c) Dla $f(x)=x^2-4x+5$:
$\Delta = (-4)^2 - 4 \cdot 1 \cdot 5 = -4 < 0$.
Funkcja nie ma miejsc zerowych, więc wzoru funkcji $f$ nie można zapisać w postaci iloczynowej.
Postać kanoniczna: $p = 2$, $q = 1$, czyli $f(x) = (x-2)^2+1$.

**Odpowiedź:** a) postać kanoniczna: $f(x)=2(x+0{,}75)^2-6{,}125$, postać iloczynowa: $f(x)=2(x+2{,}5)(x-1)$; b) postać kanoniczna i iloczynowa: $f(x)=-5(x-1)^2$; c) postać kanoniczna: $f(x)=(x-2)^2+1$, brak postaci iloczynowej.

---

### Zadanie 5.6 [R]
**Treść zadania:**
Punkty $A=(0, 5)$ i $B=(1, 12)$ należą do wykresu funkcji $f(x)=x^2+bx+c$. Zapisz wzór funkcji $f$ w postaci:
a) ogólnej;
b) kanonicznej;
c) iloczynowej.

**Odpowiedź i Rozwiązanie krok po kroku:**
Punkt $A = (0, 5)$ należy do wykresu funkcji $f$ (więc $f(0) = 5$), zatem $0^2 + b \cdot 0 + c = 5$, stąd $c = 5$.
Punkt $B = (1, 12)$ należy do wykresu funkcji $f$ (więc $f(1) = 12$), zatem $1^2 + b \cdot 1 + c = 12$. Wiemy, że $c = 5$, więc $1 + b + 5 = 12 \iff b = 6$.
Zatem $a = 1, b = 6, c = 5$.
a) Postać ogólna: $f(x) = x^2+6x+5$.
b) $\Delta = 6^2 - 4 \cdot 1 \cdot 5 = 16$.
$p = -\frac{6}{2} = -3$, $q = -\frac{16}{4} = -4$.
Postać kanoniczna: $f(x) = (x+3)^2-4$.
c) Miejsca zerowe funkcji $f$, czyli rozwiązania równania $x^2+6x+5=0$, to liczby: $x_1 = -1, x_2 = -5$.
Postać iloczynowa: $f(x) = (x+1)(x+5)$.

**Odpowiedź:** a) $f(x)=x^2+6x+5$; b) $f(x)=(x+3)^2-4$; c) $f(x)=(x+1)(x+5)$.

---

### Zadanie 5.7 [R]
**Treść zadania:**
Wierzchołkiem paraboli, która jest wykresem funkcji $g(x)=2x^2+bx+c$, jest punkt $W=(3, 4)$. Wyznacz wartości współczynników $b$ i $c$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wiemy, że $a = 2$ i $W = (3, 4)$. Możemy więc zapisać wzór funkcji $g$ w postaci kanonicznej:
$$g(x) = 2(x-3)^2 + 4$$
Sprowadzamy wzór funkcji $g$ do postaci ogólnej:
$$g(x) = 2(x^2 - 6x + 9) + 4 = 2x^2 - 12x + 18 + 4 = 2x^2 - 12x + 22$$
Zatem $b = -12$, $c = 22$.

**Odpowiedź:** $b = -12, c = 22$.

---

### Zadanie 5.8 [R]
**Treść zadania:**
Funkcja kwadratowa $h$, której miejscami zerowymi są liczby $-1$ i $2$, dla argumentu $1$ przyjmuje wartość $6$. Wyznacz wzór funkcji $h$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Liczby $-1$ i $2$ są miejscami zerowymi funkcji $h$, zapiszmy więc wzór funkcji w postaci iloczynowej:
$$h(x) = a(x - (-1))(x - 2) = a(x+1)(x-2)$$
Wiemy, że $h(1) = 6$, więc:
$$a(1+1)(1-2) = 6 \iff a \cdot 2 \cdot (-1) = 6 \iff -2a = 6 \iff a = -3$$
Zatem $h(x) = -3(x+1)(x-2) = -3(x^2 - x - 2) = -3x^2 + 3x + 6$.

**Odpowiedź:** $h(x) = -3(x+1)(x-2)$ (lub $h(x) = -3x^2+3x+6$).

---

### Zadanie 5.9
**Treść zadania:**
Obok zamieszczony został wykres funkcji kwadratowej $f$.
a) Podaj zbiór wartości funkcji $f$.
b) Podaj przedziały monotoniczności funkcji $f$.
c) Podaj te argumenty, dla których funkcja $f$ przyjmuje wartości niedodatnie.
d) [R] Znajdź wzór funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Odczytujemy z wykresu wierzchołek paraboli $W = (-4, -1)$ oraz punkty przecięcia z osiami: $(-6, 0)$, $(-2, 0)$ oraz $(0, 3)$.
a) Zbiór wartości: $\langle -1; +\infty)$.
b) Funkcja $f$ jest malejąca w przedziale $(-\infty; -4\rangle$, a rosnąca w przedziale $\langle -4; +\infty)$.
c) Funkcja przyjmuje wartości niedodatnie dla $x \in \langle -6; -2\rangle$.
d) I SPOSÓB. Wierzchołkiem paraboli będącej wykresem funkcji $f$ jest punkt $W = (-4, -1)$, więc wzór funkcji $f$ w postaci kanonicznej ma postać $f(x) = a(x+4)^2 - 1$. Do wykresu funkcji $f$ należy punkt $(0, 3)$, więc $f(0) = a(0+4)^2 - 1 = 3$. Z równania $16a - 1 = 3$ znajdujemy $a = 0{,}25$.
Funkcja $f$ określona jest więc wzorem $f(x) = 0{,}25(x+4)^2 - 1 = 0{,}25(x^2+8x+16) - 1 = 0{,}25x^2 + 2x + 3$.
II SPOSÓB. Wykorzystując miejsca zerowe $x_1 = -6, x_2 = -2$: $f(x) = a(x+6)(x+2)$. Dla punktu $(0, 3)$: $3 = a \cdot 6 \cdot 2 = 12a \implies a = 0{,}25$.

**Odpowiedź:** a) $\langle -1; +\infty)$; b) malejąca w $(-\infty; -4\rangle$, rosnąca w $\langle -4; +\infty)$; c) $x \in \langle -6; -2\rangle$; d) $f(x)=0{,}25x^2+2x+3$.

---

### Zadanie 5.10
**Treść zadania:**
Funkcja $f$ określona jest wzorem $f(x)=-x^2+4x-3$.
a) Znajdź miejsca zerowe funkcji $f$.
b) Znajdź punkt przecięcia wykresu funkcji $f$ z osią $OY$.
c) Oblicz współrzędne wierzchołka paraboli będącej wykresem funkcji $f$.
d) Naszkicuj wykres funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) $-x^2+4x-3=0 \iff x^2-4x+3=0 \iff (x-1)(x-3)=0$, stąd $x_1 = 1, x_2 = 3$.
b) Punkt przecięcia z osią $OY$: $f(0) = -3$, zatem jest to punkt $(0, -3)$.
c) Współrzędne wierzchołka $W = (p, q)$:
$$p = -\frac{b}{2a} = -\frac{4}{-2} = 2, \quad q = f(2) = -(2)^2 + 4(2) - 3 = -4 + 8 - 3 = 1$$
Zatem $W = (2, 1)$.
d) Szkic wykresu: parabola o ramionach skierowanych w dół z wierzchołkiem w $(2, 1)$, przechodząca przez punkty $(1, 0)$, $(3, 0)$ oraz $(0, -3)$.

**Odpowiedź:** a) $1$ i $3$; b) $(0, -3)$; c) $(2, 1)$; d) (szkic wykresu w książce).

---

### Zadanie 5.11 [W]
**Treść zadania:**
Naszkicuj wykres funkcji $f(x)=x^2+4x+5$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wskazówka. Aby naszkicować wykres funkcji kwadratowej należy znaleźć miejsca zerowe funkcji, współrzędne wierzchołka paraboli będącej wykresem funkcji i współrzędne punktu przecięcia wykresu funkcji z osią $OY$. Jeśli funkcja nie ma miejsc zerowych, znajdujemy współrzędne kilku (np. dwóch) punktów należących do wykresu funkcji, różnych od tych, które już zostały znalezione.
Rozwiązanie:
$\Delta = 4^2 - 4 \cdot 1 \cdot 5 = 16 - 20 = -4 < 0$, więc funkcja nie ma miejsc zerowych.
Współrzędne wierzchołka: $p = -\frac{4}{2} = -2$, $q = f(-2) = (-2)^2 + 4(-2) + 5 = 4 - 8 + 5 = 1$, czyli $W = (-2, 1)$.
Punkt przecięcia z osią $OY$: $(0, f(0)) = (0, 5)$. Z symetrii paraboli punkt $(-4, 5)$ również należy do wykresu.
Ramiona paraboli skierowane są do góry.

**Odpowiedź:** (szkic wykresu w książce)

---

### Zadanie 5.12 [R]
**Treść zadania:**
Określ zbiór wartości i przedziały monotoniczności funkcji $f$ określonej wzorem:
a) $f(x)=-2x^2+3$;
b) $f(x)=5(x-3)^2$;
c) $f(x)=4(x-2)^2+3$;
d) $f(x)=-x^2+8x-15$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Zbiór wartości i przedziały monotoniczności funkcji kwadratowej łatwo jest określić, gdy wiemy jak wygląda jej wykres. Istotne są tu dwie cechy paraboli będącej wykresem funkcji: 1) kierunek, w którym skierowane są jej ramiona, 2) współrzędne jej wierzchołka.
UWAGA. W przykładach a) – c) wzór funkcji $f$ zapisany jest w postaci kanonicznej, więc współrzędne wierzchołka paraboli, która jest wykresem funkcji $f$, określamy nie korzystając ze wzorów na współrzędne wierzchołka.
a) Wykresem funkcji $f(x)=-2(x-0)^2+3$ jest parabola o ramionach skierowanych do dołu i wierzchołku $W=(0, 3)$. Zatem zbiorem wartości funkcji $f$ jest przedział $(-\infty; 3]$, funkcja rośnie w przedziale $(-\infty; 0]$ i maleje w przedziale $[0; +\infty)$.
b) Wykresem funkcji $f(x)=5(x-3)^2+0$ jest parabola o ramionach skierowanych do góry i wierzchołku $W=(3, 0)$. Zatem zbiorem wartości funkcji $f$ jest przedział $[0; +\infty)$, funkcja maleje w przedziale $(-\infty; 3]$ i rośnie w przedziale $[3; +\infty)$.
c) Wykresem funkcji $f(x)=4(x-2)^2+3$ jest parabola o ramionach skierowanych do góry i wierzchołku $W=(2, 3)$. Zatem zbiorem wartości funkcji $f$ jest przedział $[3; +\infty)$, funkcja maleje w przedziale $(-\infty; 2]$ i rośnie w przedziale $[2; +\infty)$.
d) Ramiona paraboli, która jest wykresem funkcji $f$, są skierowane do dołu. Obliczamy rzędną (czyli drugą współrzędną) wierzchołka paraboli będącej wykresem funkcji $f$: $\Delta = 4$, $y_w = 1$, więc zbiorem wartości funkcji $f$ jest przedział $(-\infty; 1]$. Obliczamy odciętą: $x_w = 4$, więc funkcja rośnie w przedziale $(-\infty; 4]$ i maleje w przedziale $[4; +\infty)$.

**Odpowiedź:** a) Zbiór wartości: $(-\infty; 3]$, $f$ rosnąca w $(-\infty; 0]$, malejąca w $[0; +\infty)$; b) Zbiór wartości: $[0; +\infty)$, $f$ rosnąca w $[3; +\infty)$, malejąca w $(-\infty; 3]$; c) Zbiór wartości: $[3; +\infty)$, $f$ rosnąca w $[2; +\infty)$, malejąca w $(-\infty; 2]$; d) Zbiór wartości: $(-\infty; 1]$, $f$ rosnąca w $(-\infty; 4]$, malejąca w $[4; +\infty)$.

---

### Zadanie 5.13 [R]
**Treść zadania:**
Wyznacz taką wartość współczynnika $b$, aby funkcja $f(x)=x^2+bx+10$ była malejąca w przedziale $(-\infty; 3\rangle$ i rosnąca w przedziale $\langle 3; +\infty)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Ramiona paraboli będącej wykresem funkcji $f$ są skierowane do góry, więc funkcja ta jest malejąca w przedziale $(-\infty; x_w\rangle$ i rosnąca w przedziale $\langle x_w; +\infty)$, gdzie $x_w$ jest odciętą wierzchołka tej paraboli. Zatem $x_w = 3$. Korzystając ze wzoru na odciętą wierzchołka paraboli otrzymujemy równość:
$$-\frac{b}{2 \cdot 1} = 3 \iff -b = 6 \iff b = -6$$

**Odpowiedź:** $b = -6$.

---

### Zadanie 5.14 [W]
**Treść zadania:**
Naszkicuj wykres funkcji:
a) $f(x)=x^2-3|x|+2$;
b) $f(x)=x|x-4|$;
c) $f(x)=|x^2-4|+3x$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wskazówka. a) Łatwo zauważyć, że funkcja $f$ dla przeciwnych argumentów przyjmuje tę samą wartość. Zatem jej wykres jest symetryczny względem osi $OY$. Wystarczy więc naszkicować wykres funkcji $f$ dla $x \ge 0$ (wtedy funkcja określona jest wzorem $f(x)=x^2-3x+2$) i otrzymany wykres odbić symetrycznie względem osi $OY$.
b), c) Wzór funkcji $f$ można zapisać w postaci:
b) $$f(x) = \begin{cases} x^2-4x & \text{dla } x \ge 4 \\ -(x^2-4x) & \text{dla } x < 4 \end{cases}$$
c) $$f(x) = \begin{cases} x^2+3x-4 & \text{dla } x \in (-\infty; -2\rangle \cup \langle 2; +\infty) \\ -x^2+3x+4 & \text{dla } x \in (-2; 2) \end{cases}$$

**Odpowiedź:** (szkic wykresu w książce)

---

### Zadanie 5.15 [R]
**Treść zadania:**
Funkcja $f$ określona jest wzorem $f(x)=mx^2+mx-1$. Wyznacz te wartości parametru $m$, dla których:
a) funkcja $f$ przyjmuje tylko wartości ujemne;
b) zbiorem wartości funkcji $f$ jest przedział $(-\infty; 0\rangle$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) I. Jeśli $m = 0$, to $f$ jest funkcją stałą $f(x) = -1$. Wówczas $f$ przyjmuje tylko ujemne wartości, więc $m = 0$ jest jedną z szukanych wartości parametru $m$.
II. Jeśli $m \ne 0$, to ramiona paraboli będącej wykresem funkcji $f$ muszą być skierowane do dołu i $f$ nie może mieć miejsc zerowych. Zatem $m < 0$ i $\Delta = m^2 + 4m < 0$. Rozwiązując nierówność $m(m+4) < 0$, otrzymujemy $m \in (-4; 0)$.
Ostatecznie: $m = 0$ lub $m \in (-4; 0)$, czyli $m \in (-4; 0\rangle$.

b) $f$ musi być funkcją kwadratową, ramiona paraboli będącej jej wykresem muszą być skierowane do dołu i $f$ musi mieć jedno miejsce zerowe. Zatem:
$$m < 0 \land \Delta = m^2 + 4m = 0 \iff m < 0 \land m(m+4) = 0 \iff m = -4$$

**Odpowiedź:** a) $m \in (-4; 0\rangle$; b) $m = -4$.

---

### Zadanie 5.16 [R]
**Treść zadania:**
Dana jest funkcja kwadratowa $f(x)=(p-3)x^2+2x-1$. Wyznacz te wartości parametru $p$, dla których:
a) największa wartość funkcji $f$ jest liczbą ujemną;
b) najmniejsza wartość funkcji $f$ jest mniejsza od $-2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Parabola, która jest wykresem funkcji $f$, musi mieć ramiona skierowane do dołu i $f$ nie może mieć miejsc zerowych. Zatem:
$$p - 3 < 0 \iff p < 3$$
$$\Delta = 2^2 - 4(p-3)(-1) = 4 + 4(p-3) = 4p - 8 < 0 \iff 4p < 8 \iff p < 2$$
Część wspólna: $p \in (-\infty; 2)$.

b) Funkcja kwadratowa osiąga wartość najmniejszą wtedy, gdy parabola ma ramiona skierowane do góry. Wartość najmniejsza jest równa rzędnej wierzchołka tej paraboli:
$$p - 3 > 0 \iff p > 3$$
$$y_w = -\frac{\Delta}{4a} = -\frac{4p-8}{4(p-3)} = -\frac{p-2}{p-3} < -2 \iff \frac{p-2}{p-3} > 2 \iff \frac{p-2 - 2(p-3)}{p-3} > 0 \iff \frac{4-p}{p-3} > 0$$
Stąd $(4-p)(p-3) > 0 \iff p \in (3; 4)$.
Ponieważ dla $p \in (3; 4)$ warunek $p > 3$ jest spełniony, rozwiązaniem jest $p \in (3; 4)$.

**Odpowiedź:** a) $p \in (-\infty; 2)$; b) $p \in (3; 4)$.

---

### Zadanie 5.17 [R]
**Treść zadania:**
Wyznacz wszystkie takie wartości parametru $k \in \mathbb{R}$, aby liczba $2$ znajdowała się między miejscami zerowymi funkcji $f(x)=x^2+4x+k$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Ramiona paraboli będącej wykresem funkcji $f$ są skierowane do góry ($a = 1 > 0$), więc liczba $2$ leży między miejscami zerowymi wtedy i tylko wtedy, gdy dla argumentu $2$ funkcja $f$ przyjmuje wartość ujemną:
$$f(2) < 0 \iff 2^2 + 4 \cdot 2 + k < 0 \iff 4 + 8 + k < 0 \iff k < -12$$
Zatem $k \in (-\infty; -12)$.

**Odpowiedź:** $k \in (-\infty; -12)$.

---

### Zadanie 5.18 [R]
**Treść zadania:**
Znajdź te wartości parametru $m$, dla których funkcja $f(x)=x^2+mx+9$ ma dwa miejsca zerowe większe od $2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
I SPOSÓB. Funkcja $f$ musi mieć dwa miejsca zerowe, wierzchołek paraboli musi być położony „na prawo” od $2$ i parabola musi przechodzić „nad” $2$:
1) $\Delta > 0 \iff m^2 - 36 > 0 \iff m \in (-\infty; -6) \cup (6; +\infty)$,
2) $x_w > 2 \iff -\frac{m}{2} > 2 \iff m < -4$,
3) $f(2) > 0 \iff 2^2 + 2m + 9 > 0 \iff 2m + 13 > 0 \iff m > -6{,}5$.
Część wspólna warunków 1), 2) i 3):
$$m \in (-6{,}5; -6)$$

II SPOSÓB. $(\Delta > 0 \land x_1 > 2 \land x_2 > 2) \iff (\Delta > 0 \land x_1 - 2 > 0 \land x_2 - 2 > 0)$.
Liczby $x_1 - 2$ i $x_2 - 2$ są dodatnie wtedy i tylko wtedy, gdy ich iloczyn i ich suma są dodatnie:
$$(x_1 - 2)(x_2 - 2) = x_1 x_2 - 2(x_1 + x_2) + 4 > 0$$
$$(x_1 - 2) + (x_2 - 2) = x_1 + x_2 - 4 > 0$$
Ze wzorów Viète'a: $x_1 + x_2 = -m$, $x_1 x_2 = 9$.
Stąd: $9 - 2(-m) + 4 = 2m + 13 > 0 \implies m > -6{,}5$ oraz $-m - 4 > 0 \implies m < -4$.
Wraz z $\Delta > 0$ otrzymujemy $m \in (-6{,}5; -6)$.

**Odpowiedź:** $m \in (-6{,}5; -6)$.

---

### Zadanie 5.19 [R]
**Treść zadania:**
Funkcja $f(x)=x^2+2x-3$ określona jest w przedziale $\langle -3; 0\rangle$. Naszkicuj wykres funkcji $f$ i określ jej zbiór wartości.

**Odpowiedź i Rozwiązanie krok po kroku:**
Naszkicujemy najpierw wykres funkcji $g(x)=x^2+2x-3$ określonej w zbiorze liczb rzeczywistych. Wykresem $f$ jest część wykresu funkcji $g$ – zbiór tych punktów wykresu $g$, których odcięta $x$ należy do przedziału $[-3; 0]$.
Współrzędne wierzchołka: $x_w = -\frac{2}{2} = -1 \in [-3; 0]$, $y_w = g(-1) = 1 - 2 - 3 = -4$.
Wartości na krańcach przedziału:
$$f(-3) = (-3)^2 + 2(-3) - 3 = 9 - 6 - 3 = 0$$
$$f(0) = 0^2 + 2(0) - 3 = -3$$
Ponieważ ramiona paraboli skierowane są do góry, najmniejszą wartością funkcji $f$ jest $y_w = -4$, a największą $f(-3) = 0$.
Zatem zbiorem wartości funkcji $f$ jest przedział $\langle -4; 0\rangle$.

**Odpowiedź:** Zbiór wartości: $\langle -4; 0\rangle$, (szkic wykresu w książce).

---

### Zadanie 5.20 [R]
**Treść zadania:**
Znajdź największą i najmniejszą wartość funkcji $f$ osiąganą w przedziale $\langle 1; 4\rangle$, jeżeli:
a) $f(x)=x^2+6x+5$;
b) $f(x)=x^2-6x+5$;
c) $f(x)=-2x^2+8x+1$.

**Odpowiedź i Rozwiązanie krok po kroku:**
W każdym przykładzie rozwiązanie rozpoczynamy od sprawdzenia, czy odcięta $x_w$ wierzchołka paraboli będącej wykresem funkcji $f$ należy do przedziału $[1; 4]$:
a) $x_w = -\frac{6}{2} = -3 \notin [1; 4]$. Ramiona paraboli skierowane są do góry, więc funkcja jest rosnąca w $[1; 4]$:
- wartość najmniejsza: $f(1) = 1 + 6 + 5 = 12$,
- wartość największa: $f(4) = 16 + 24 + 5 = 45$.

b) $x_w = -\frac{-6}{2} = 3 \in [1; 4]$. Ramiona paraboli skierowane są do góry:
- wartość najmniejsza: $f(3) = 9 - 18 + 5 = -4$,
- wartości na krańcach: $f(1) = 1 - 6 + 5 = 0$, $f(4) = 16 - 24 + 5 = -3$.
Zatem wartość największa to $0$.

c) $x_w = -\frac{8}{2 \cdot (-2)} = 2 \in [1; 4]$. Ramiona paraboli skierowane są do dołu:
- wartość największa: $f(2) = -2(4) + 8(2) + 1 = -8 + 16 + 1 = 9$,
- wartości na krańcach: $f(1) = -2 + 8 + 1 = 7$, $f(4) = -2(16) + 32 + 1 = 1$.
Zatem wartość najmniejsza to $1$.

**Odpowiedź:** a) wartość najmniejsza: $12$, największa: $45$; b) wartość najmniejsza: $-4$, największa: $0$; c) wartość najmniejsza: $1$, największa: $9$.

---

### Zadanie 5.21 [R]
**Treść zadania:**
Znajdź współrzędne takiego punktu należącego do wykresu funkcji $f(x)=x^2+5x+1$, którego suma współrzędnych jest najmniejsza.

**Odpowiedź i Rozwiązanie krok po kroku:**
Każdy punkt należący do wykresu funkcji $f$ ma współrzędne $(x, f(x))$, gdzie $x$ jest dowolną liczbą rzeczywistą. Musimy znaleźć taką liczbę $x$, aby suma $s = x + f(x)$ była najmniejsza:
$$s(x) = x + (x^2+5x+1) = x^2+6x+1$$
Otrzymaliśmy funkcję kwadratową $s(x) = x^2+6x+1$, której ramiona skierowane są do góry ($a = 1 > 0$). Funkcja ta przyjmuje najmniejszą wartość w wierzchołku paraboli:
$$x_w = -\frac{6}{2 \cdot 1} = -3$$
Obliczamy rzędną punktu dla argumentu $x = -3$:
$$f(-3) = (-3)^2 + 5(-3) + 1 = 9 - 15 + 1 = -5$$
Zatem szukanym punktem jest $A = (-3, -5)$.

**Odpowiedź:** $A = (-3, -5)$.

---

### Zadanie 5.22 [R]
**Treść zadania:**
Rozważamy prostokąty takie, że suma długości jednego boku i potrojonej długości sąsiedniego boku jest równa $36$. Wyznacz długości boków tego z rozważanych prostokątów, który ma największe pole.

**Odpowiedź i Rozwiązanie krok po kroku:**
Pole prostokąta: $P = ab$. Wiemy, że $a + 3b = 36$, stąd $a = 36 - 3b$.
Zatem $P = (36 - 3b)b = -3b^2 + 36b$.
Liczby $a, b$ są długościami boków, więc $a > 0$ i $b > 0$:
$$36 - 3b > 0 \iff b < 12, \quad \text{czyli } b \in (0; 12)$$
Otrzymaliśmy funkcję $P(b) = -3b^2 + 36b$ dla $b \in (0; 12)$, której wykresem jest fragment paraboli o ramionach skierowanych do dołu. Pierwsza współrzędna wierzchołka:
$$b_w = -\frac{36}{2 \cdot (-3)} = 6 \in (0; 12)$$
Zatem największą wartość funkcja $P$ osiąga dla $b = 6$.
Wtedy długość drugiego boku wynosi $a = 36 - 3 \cdot 6 = 18$.

**Odpowiedź:** $18$ i $6$.

---

### Zadanie 5.23 [R]
**Treść zadania:**
Wyznacz taką wartość parametru $m$, aby największa wartość funkcji $f(x)=-x^2+mx+m$ była najmniejsza z możliwych.

**Odpowiedź i Rozwiązanie krok po kroku:**
Funkcja $f$ ma ramiona skierowane do dołu ($a = -1 < 0$), więc jej największa wartość jest osiągana w wierzchołku i wynosi:
$$y_w = -\frac{\Delta}{4a} = -\frac{m^2 - 4(-1)m}{4(-1)} = \frac{m^2 + 4m}{4} = \frac{1}{4}m^2 + m$$
Rozpatrzmy funkcję $g(m) = \frac{1}{4}m^2 + m$ dla $m \in \mathbb{R}$. Jest to funkcja kwadratowa o ramionach skierowanych do góry, która osiąga swoją najmniejszą wartość w wierzchołku:
$$m_w = -\frac{1}{2 \cdot \frac{1}{4}} = -\frac{1}{\frac{1}{2}} = -2$$

**Odpowiedź:** $m = -2$.

---

### Zadanie 5.24 [R]
**Treść zadania:**
Wyznacz te wartości parametru $m$, dla których równanie ma jedno rozwiązanie:
a) $x^2+mx+m=0$;
b) $(m-2)x^2+6x+1=0$;
c) $(m-2)x^2+(m-2)x+1=0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Równanie dla każdego $m \in \mathbb{R}$ jest kwadratowe, więc ma jedno rozwiązanie wtedy i tylko wtedy, gdy $\Delta = 0$:
$$\Delta = m^2 - 4m = 0 \iff m(m-4) = 0 \iff m \in \{0, 4\}$$

b) I. Jeśli $m = 2$, to otrzymujemy równanie liniowe $6x + 1 = 0$, które ma jedno rozwiązanie $x = -\frac{1}{6}$. Zatem $m = 2$ spełnia warunki zadania.
II. Jeśli $m \ne 2$, to dane równanie jest kwadratowe. Ma jedno rozwiązanie wtedy i tylko wtedy, gdy $\Delta = 0$:
$$\Delta = 6^2 - 4(m-2) \cdot 1 = 36 - 4m + 8 = 44 - 4m = 0 \iff 4m = 44 \iff m = 11$$
Ostatecznie: $m \in \{2, 11\}$.

c) I. Jeśli $m = 2$, to otrzymujemy równanie $1 = 0$, które nie ma rozwiązań, więc $m = 2$ nie jest szukaną wartością.
II. Jeśli $m \ne 2$, to równanie jest kwadratowe i $\Delta = 0$:
$$\Delta = (m-2)^2 - 4(m-2) \cdot 1 = (m-2)(m-2-4) = (m-2)(m-6) = 0$$
Ponieważ $m \ne 2$, otrzymujemy $m = 6$.

**Odpowiedź:** a) $m = 0$ lub $m = 4$; b) $m = 2$ lub $m = 11$; c) $m = 6$.

---

### Zadanie 5.25 [R]
**Treść zadania:**
Znajdź zbiór tych wartości parametru $k$, dla których dane równanie ma dwa różne pierwiastki:
a) $x^2+(k-3)x-1=0$;
b) $(k+2)x^2+4x+1=0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Równanie ma dwa różne pierwiastki wtedy i tylko wtedy, gdy $\Delta > 0$:
$$\Delta = (k-3)^2 - 4 \cdot 1 \cdot (-1) = (k-3)^2 + 4$$
Ponieważ $(k-3)^2 \ge 0$ dla każdego $k \in \mathbb{R}$, to $(k-3)^2 + 4 \ge 4 > 0$ dla każdego $k \in \mathbb{R}$. Zatem równanie ma dwa różne pierwiastki dla $k \in \mathbb{R}$.

b) Równanie ma dwa różne pierwiastki wtedy i tylko wtedy, gdy jest kwadratowe ($k+2 \ne 0$) oraz $\Delta > 0$:
$$k \ne -2$$
$$\Delta = 4^2 - 4(k+2) \cdot 1 = 16 - 4k - 8 = 8 - 4k > 0 \iff 4k < 8 \iff k < 2$$
Uwzględniając $k \ne -2$, otrzymujemy $k \in (-\infty; 2) \setminus \{-2\}$.

**Odpowiedź:** a) $k \in \mathbb{R}$; b) $k \in (-\infty; 2) \setminus \{-2\}$.

---

### Zadanie 5.26 [R]
**Treść zadania:**
Dla jakich wartości parametru $m$ równanie $mx^2-6x-1=0$ ma co najmniej jedno rozwiązanie?

**Odpowiedź i Rozwiązanie krok po kroku:**
I. Gdy $m = 0$, to mamy równanie liniowe:
$$-6x - 1 = 0 \iff x = -\frac{1}{6}$$
Równanie to ma jedno rozwiązanie, więc $m = 0$ jest jedną z szukanych wartości parametru $m$.

II. Gdy $m \ne 0$, równanie jest kwadratowe i ma co najmniej jedno rozwiązanie wtedy i tylko wtedy, gdy $\Delta \ge 0$:
$$\Delta = (-6)^2 - 4 \cdot m \cdot (-1) = 36 + 4m \ge 0 \iff 4m \ge -36 \iff m \ge -9$$
Zatem $m \in [-9; +\infty) \setminus \{0\}$.

Łącząc oba przypadki:
$$m = 0 \lor m \in [-9; +\infty) \setminus \{0\} \iff m \in [-9; +\infty)$$

**Odpowiedź:** $m \in [-9; +\infty)$.

---

### Zadanie 5.27
**Treść zadania:**
Określ liczbę rozwiązań równania $px^2+px+0{,}5=0$ w zależności od wartości parametru $p$, a następnie naszkicuj wykres funkcji $f$, która każdej wartości parametru $p$ przyporządkowuje liczbę rozwiązań tego równania.

**Odpowiedź i Rozwiązanie krok po kroku:**
I. Gdy $p = 0$, otrzymujemy równanie $0{,}5 = 0$, które nie ma rozwiązań ($0$ rozwiązań).
II. Gdy $p \ne 0$, równanie jest kwadratowe. Badamy znak wyróżnika $\Delta$:
$$\Delta = p^2 - 4 \cdot p \cdot 0{,}5 = p^2 - 2p = p(p-2)$$
- Dwa rozwiązania: $\Delta > 0 \iff p(p-2) > 0 \iff p \in (-\infty; 0) \cup (2; +\infty)$.
- Jedno rozwiązanie: $\Delta = 0 \iff p(p-2) = 0 \land p \ne 0 \iff p = 2$.
- Brak rozwiązań: $\Delta < 0 \iff p(p-2) < 0 \iff p \in (0; 2)$.

Łącząc przypadek $p = 0$ z przypadkiem $\Delta < 0$, dla $p \in [0; 2)$ równanie nie ma rozwiązań.
Funkcja $f(p)$ określona jest wzorem:
$$f(p) = \begin{cases} 2 & \text{dla } p \in (-\infty; 0) \cup (2; +\infty) \\ 1 & \text{dla } p = 2 \\ 0 & \text{dla } p \in [0; 2) \end{cases}$$

**Odpowiedź:** Dla $p \in (-\infty; 0) \cup (2; +\infty)$ – dwa rozwiązania, dla $p = 2$ – jedno rozwiązanie, dla $p \in [0; 2)$ – brak rozwiązań.

---

### Zadanie 5.28 [R]
**Treść zadania:**
Nie obliczając pierwiastków równania $2x^2-5x-6=0$, oblicz:
a) iloczyn pierwiastków tego równania;
b) sumę odwrotności pierwiastków tego równania;
c) sumę kwadratów pierwiastków tego równania;
d) sumę odwrotności kwadratów pierwiastków tego równania;
e) sumę trzecich potęg pierwiastków tego równania.

**Odpowiedź i Rozwiązanie krok po kroku:**
Sprawdzamy istnienie pierwiastków:
$$\Delta = (-5)^2 - 4 \cdot 2 \cdot (-6) = 25 + 48 = 73 > 0$$
Równanie ma dwa różne pierwiastki. Współczynniki: $a = 2, b = -5, c = -6$.
Ze wzorów Viète'a:
$$x_1 + x_2 = -\frac{b}{a} = \frac{5}{2} = 2{,}5, \quad x_1 x_2 = \frac{c}{a} = -\frac{6}{2} = -3$$

a) $x_1 x_2 = -3$.
b) $\frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1 x_2} = \frac{2{,}5}{-3} = -\frac{5}{6}$.
c) $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 = (2{,}5)^2 - 2(-3) = 6{,}25 + 6 = 12{,}25 = 12\frac{1}{4}$.
d) $\frac{1}{x_1^2} + \frac{1}{x_2^2} = \frac{x_1^2 + x_2^2}{(x_1 x_2)^2} = \frac{12{,}25}{(-3)^2} = \frac{\frac{49}{4}}{9} = \frac{49}{36} = 1\frac{13}{36}$.
e) $x_1^3 + x_2^3 = (x_1 + x_2)(x_1^2 - x_1 x_2 + x_2^2) = (2{,}5)(12{,}25 - (-3)) = 2{,}5 \cdot 15{,}25 = \frac{5}{2} \cdot \frac{61}{4} = \frac{305}{8} = 38\frac{1}{8}$.

**Odpowiedź:** a) $-3$; b) $-\frac{5}{6}$; c) $12\frac{1}{4}$; d) $1\frac{13}{36}$; e) $38\frac{1}{8}$.

---

### Zadanie 5.29 [R]
**Treść zadania:**
Wyznacz te wartości parametru $m$, dla których równanie $x^2+mx+m=0$ ma dwa różne pierwiastki takie, że ich iloczyn jest mniejszy od $6$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Warunki zadania:
1) $\Delta > 0 \iff m^2 - 4m > 0 \iff m(m-4) > 0 \iff m \in (-\infty; 0) \cup (4; +\infty)$,
2) $x_1 x_2 < 6$. Ze wzorów Viète'a $x_1 x_2 = \frac{c}{a} = m$, stąd $m < 6$.

Wyznaczamy część wspólną obu warunków:
$$m \in ((-\infty; 0) \cup (4; +\infty)) \cap (-\infty; 6) = (-\infty; 0) \cup (4; 6)$$

**Odpowiedź:** $m \in (-\infty; 0) \cup (4; 6)$.

---

### Zadanie 5.30 [R]
**Treść zadania:**
Dla jakich wartości parametru $a$ równanie $x^2+8x+a+2=0$ ma dwa różne pierwiastki jednakowych znaków?

**Odpowiedź i Rozwiązanie krok po kroku:**
Dwie liczby mają jednakowe znaki wtedy i tylko wtedy, gdy ich iloczyn jest dodatni:
1) $\Delta > 0 \iff 8^2 - 4 \cdot 1 \cdot (a+2) > 0 \iff 64 - 4a - 8 > 0 \iff 56 - 4a > 0 \iff a < 14$,
2) $x_1 x_2 > 0 \iff \frac{a+2}{1} > 0 \iff a > -2$.

Część wspólna obu warunków:
$$a \in (-2; 14)$$

**Odpowiedź:** $a \in (-2; 14)$.

---

### Zadanie 5.31 [R]
**Treść zadania:**
Dla jakich wartości parametru $k$ równanie $(k+1)x^2+2x+1=0$ ma dwa rozwiązania przeciwnych znaków?

**Odpowiedź i Rozwiązanie krok po kroku:**
Równanie kwadratowe ma dwa rozwiązania różnych (przeciwnych) znaków wtedy i tylko wtedy, gdy:
1) $k+1 \ne 0 \iff k \ne -1$,
2) $\Delta > 0 \iff 2^2 - 4(k+1) \cdot 1 = 4 - 4k - 4 = -4k > 0 \iff k < 0$,
3) $x_1 x_2 < 0 \iff \frac{1}{k+1} < 0 \iff k+1 < 0 \iff k < -1$.

Część wspólna warunków $k \ne -1$, $k < 0$ oraz $k < -1$:
$$k < -1 \iff k \in (-\infty; -1)$$

**Odpowiedź:** $k \in (-\infty; -1)$.

---

### Zadanie 5.32 [R]
**Treść zadania:**
Wyznacz te wartości parametru $m$, dla których równanie $x^2+mx+m+\frac{5}{4}=0$ ma dwa różne pierwiastki:
a) ujemne;
b) nieujemne.

**Odpowiedź i Rozwiązanie krok po kroku:**
Najpierw wyznaczamy wyróżnik:
$$\Delta = m^2 - 4 \cdot 1 \cdot \left(m + \frac{5}{4}\right) = m^2 - 4m - 5 = (m-5)(m+1)$$
Warunek $\Delta > 0 \iff m \in (-\infty; -1) \cup (5; +\infty)$.

a) Dwa pierwiastki są ujemne wtedy i tylko wtedy, gdy $\Delta > 0$, $x_1 x_2 > 0$ oraz $x_1 + x_2 < 0$:
- $x_1 x_2 = m + \frac{5}{4} > 0 \iff m > -1{,}25$,
- $x_1 + x_2 = -m < 0 \iff m > 0$.
Część wspólna: $m \in (-\infty; -1) \cup (5; +\infty)$, $m > -1{,}25$ oraz $m > 0$:
$$m \in (5; +\infty)$$

b) Szukamy takich wartości parametru $m$, dla których rozwiązania są nieujemne ($x_1, x_2 \ge 0$), przy czym są różne (więc co najwyżej jedno może być równe $0$):
$$\begin{cases} \Delta > 0 \\ x_1 x_2 \ge 0 \\ x_1 + x_2 > 0 \end{cases}$$
- $\Delta > 0 \iff m \in (-\infty; -1) \cup (5; +\infty)$,
- $x_1 x_2 = m + 1{,}25 \ge 0 \iff m \ge -1{,}25$,
- $x_1 + x_2 = -m > 0 \iff m < 0$.
Część wspólna:
$$m \in [-1{,}25; -1)$$

**Odpowiedź:** a) $m \in (5; +\infty)$; b) $m \in [-1{,}25; -1)$.

---

### Zadanie 5.33 [R]
**Treść zadania:**
Podaj wzór i naszkicuj wykres funkcji $f$ przyporządkowującej każdej wartości parametru $m$, dla której istnieją dwa różne pierwiastki równania $x^2+2x+m=0$, iloczyn pierwiastków tego równania.

**Odpowiedź i Rozwiązanie krok po kroku:**
Dziedziną $D$ funkcji $f$ jest zbiór tych wartości parametru $m$, dla których równanie ma dwa różne pierwiastki, czyli $\Delta > 0$:
$$\Delta = 2^2 - 4 \cdot 1 \cdot m = 4 - 4m > 0 \iff 4m < 4 \iff m < 1$$
Zatem $D = (-\infty; 1)$.
Funkcja $f$ każdej wartości parametru $m \in D$ przyporządkowuje iloczyn pierwiastków $x_1 x_2$. Ze wzorów Viète'a:
$$x_1 x_2 = \frac{m}{1} = m$$
Zatem $f(m) = m$ dla $m \in (-\infty; 1)$. Wykresem jest półprosta (bez punktu $(1, 1)$) leżąca na prostej $y = x$.

**Odpowiedź:** $f(m) = m$ dla $m \in (-\infty; 1)$, (szkic wykresu w książce).

---

### Zadanie 5.34 [W]
**Treść zadania:**
Wyznacz te wartości parametru $m$, dla których równanie $x^2+mx+9=0$ ma dwa rozwiązania mniejsze od $-1$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wskazówka. Patrz rozwiązanie zadania 5.18.
Rozwiązanie:
Równanie ma dwa pierwiastki mniejsze od $-1$ wtedy i tylko wtedy, gdy:
1) $\Delta > 0 \iff m^2 - 36 > 0 \iff m \in (-\infty; -6) \cup (6; +\infty)$,
2) Odcięta wierzchołka leży na lewo od $-1$:
$$x_w < -1 \iff -\frac{m}{2} < -1 \iff m > 2$$
3) Wartość trójmianu w punkcie $-1$ jest dodatnia:
$$f(-1) > 0 \iff (-1)^2 + m(-1) + 9 > 0 \iff 10 - m > 0 \iff m < 10$$
Wyznaczamy część wspólną warunków:
$$m \in (6; 10)$$

**Odpowiedź:** $m \in (6; 10)$.

---

### Zadanie 5.35 [R]
**Treść zadania:**
Wyznacz te wartości parametru $a$, dla których zbiorem rozwiązań nierówności jest zbiór liczb rzeczywistych:
a) $x^2+3x+a-2>0$;
b) $ax^2+4ax+a-3<0$;
c) $(a-1)x^2+x+0{,}25\ge 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Ramiona paraboli skierowane są do góry ($1 > 0$), więc nierówność jest spełniona dla wszystkich $x \in \mathbb{R}$ wtedy i tylko wtedy, gdy trójmian nie ma pierwiastków ($\Delta < 0$):
$$\Delta = 3^2 - 4 \cdot 1 \cdot (a-2) = 9 - 4a + 8 = 17 - 4a < 0 \iff 4a > 17 \iff a > \frac{17}{4} = 4{,}25$$
Zatem $a \in (4{,}25; +\infty)$.

b) I. Jeśli $a = 0$, to otrzymujemy nierówność $0 \cdot x^2 + 0 \cdot x - 3 < 0 \iff -3 < 0$, która jest prawdziwa dla każdej liczby rzeczywistej $x$. Zatem $a = 0$ spełnia warunki zadania.
II. Jeśli $a \ne 0$, nierówność kwadratowa jest spełniona dla wszystkich $x \in \mathbb{R}$ wtedy i tylko wtedy, gdy ramiona skierowane są w dół oraz trójmian nie ma pierwiastków:
$$a < 0 \quad \land \quad \Delta < 0$$
$$\Delta = (4a)^2 - 4 \cdot a \cdot (a-3) = 16a^2 - 4a^2 + 12a = 12a^2 + 12a = 12a(a+1) < 0$$
Ponieważ $a(a+1) < 0$, mamy $a \in (-1; 0)$.
Łącząc I i II: $a \in (-1; 0\rangle$.

c) I. Jeśli $a - 1 = 0 \iff a = 1$, to nierówność przyjmuje postać $x + 0{,}25 \ge 0 \iff x \ge -0{,}25$, co nie jest spełnione dla wszystkich $x \in \mathbb{R}$.
II. Jeśli $a \ne 1$, to parabola musi mieć ramiona skierowane w górę ($a - 1 > 0$) oraz $\Delta \le 0$:
$$a > 1$$
$$\Delta = 1^2 - 4(a-1) \cdot 0{,}25 = 1 - (a-1) = 2 - a \le 0 \iff a \ge 2$$
Część wspólna: $a \in [2; +\infty)$.

**Odpowiedź:** a) $a \in (4{,}25; +\infty)$; b) $a \in (-1; 0\rangle$; c) $a \in [2; +\infty)$.

---

### Zadanie 5.36 [W]
**Treść zadania:**
Dla jakich wartości parametru $k$ dziedziną funkcji $f(x)=\sqrt{x^2+x+k}$ jest zbiór liczb rzeczywistych?

**Odpowiedź i Rozwiązanie krok po kroku:**
Wskazówka. Nierówność $x^2 + x + k \ge 0$ musi zachodzić dla każdej liczby rzeczywistej $x$.
Rozwiązanie:
Ponieważ współczynnik przy $x^2$ jest równy $1 > 0$, nierówność $x^2+x+k \ge 0$ jest spełniona dla wszystkich $x \in \mathbb{R}$ wtedy i tylko wtedy, gdy wyróżnik $\Delta \le 0$:
$$\Delta = 1^2 - 4 \cdot 1 \cdot k = 1 - 4k \le 0 \iff 4k \ge 1 \iff k \ge \frac{1}{4}$$
Zatem $k \in [0{,}25; +\infty)$.

**Odpowiedź:** $k \in [0{,}25; +\infty)$.

---

### Zadanie 5.37
**Treść zadania:**
Rozwiąż algebraicznie każdy z podanych układów równań. Układ a) rozwiąż także graficznie.
a) [R] $\begin{cases} y=x^2-4x+3 \\ x-y-1=0 \end{cases}$;
b) $\begin{cases} xy=6 \\ 2x+y=8 \end{cases}$;
c) $\begin{cases} x^2+y^2-4x-2y+4=0 \\ x-2y+2=0 \end{cases}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
a) Algebraicznie: Z drugiego równania wyznaczamy $y = x - 1$. Podstawiając do pierwszego równania, otrzymujemy:
$$x - 1 = x^2 - 4x + 3 \iff x^2 - 5x + 4 = 0 \iff (x-1)(x-4) = 0$$
Stąd $x = 1$ lub $x = 4$.
Dla $x = 1$: $y = 1 - 1 = 0$.
Dla $x = 4$: $y = 4 - 1 = 3$.
Układ ma dwa rozwiązania: $(x, y) = (1, 0)$ oraz $(x, y) = (4, 3)$.
Graficznie: Wykresem pierwszego równania jest parabola o wierzchołku $(2, -1)$ i miejscach zerowych $1$ i $3$. Wykresem drugiego jest prosta $y = x - 1$. Punkty przecięcia tych wykresów to $(1, 0)$ oraz $(4, 3)$.

b) Z drugiego równania $y = 8 - 2x$. Podstawiając do pierwszego:
$$x(8 - 2x) = 6 \iff 8x - 2x^2 = 6 \iff 2x^2 - 8x + 6 = 0 \iff x^2 - 4x + 3 = 0 \iff (x-1)(x-3) = 0$$
Dla $x = 1$: $y = 8 - 2(1) = 6$.
Dla $x = 3$: $y = 8 - 2(3) = 2$.
Rozwiązania: $(x, y) = (1, 6)$ oraz $(x, y) = (3, 2)$.

c) Z drugiego równania $x = 2y - 2$. Podstawiając do pierwszego:
$$(2y - 2)^2 + y^2 - 4(2y - 2) - 2y + 4 = 0$$
$$4y^2 - 8y + 4 + y^2 - 8y + 8 - 2y + 4 = 0 \iff 5y^2 - 18y + 16 = 0$$
$$\Delta = (-18)^2 - 4 \cdot 5 \cdot 16 = 324 - 320 = 4, \quad \sqrt{\Delta} = 2$$
$$y_1 = \frac{18 - 2}{10} = 1{,}6 \implies x_1 = 2(1{,}6) - 2 = 1{,}2$$
$$y_2 = \frac{18 + 2}{10} = 2 \implies x_2 = 2(2) - 2 = 2$$
Rozwiązania: $(x, y) = (1{,}2; 1{,}6)$ oraz $(x, y) = (2, 2)$.

**Odpowiedź:** a) $(1, 0)$ i $(4, 3)$; b) $(1, 6)$ i $(3, 2)$; c) $(1{,}2; 1{,}6)$ i $(2, 2)$.

---

### Zadanie 5.38
**Treść zadania:**
Dla jakich wartości parametru $m$ układ równań $\begin{cases} y=6x+m \\ y=3x^2-1 \end{cases}$ ma:
a) [R] jedno rozwiązanie;
b) dwa rozwiązania.

**Odpowiedź i Rozwiązanie krok po kroku:**
Porównując prawe strony równań, otrzymujemy:
$$3x^2 - 1 = 6x + m \iff 3x^2 - 6x - (m+1) = 0$$
Równanie to jest kwadratowe ($a = 3 \ne 0$). Wyznaczamy wyróżnik:
$$\Delta = (-6)^2 - 4 \cdot 3 \cdot (-(m+1)) = 36 + 12(m+1) = 36 + 12m + 12 = 12m + 48$$
a) Układ ma jedno rozwiązanie wtedy i tylko wtedy, gdy $\Delta = 0$:
$$12m + 48 = 0 \iff 12m = -48 \iff m = -4$$
b) Układ ma dwa rozwiązania wtedy i tylko wtedy, gdy $\Delta > 0$:
$$12m + 48 > 0 \iff 12m > -48 \iff m > -4 \iff m \in (-4; +\infty)$$

**Odpowiedź:** a) $m = -4$; b) $m \in (-4; +\infty)$.

---


# ZADANIA MATURALNE — FUNKCJE

### Zadanie 92 [R]
**Treść zadania:**
Funkcja $f$ określona jest następująco:
$$f(x) = \begin{cases} x^2+x-6 & \text{dla } x < 1 \\ x^2-4x & \text{dla } x \ge 1 \end{cases}$$
a) Oblicz wartość funkcji $f$ dla argumentu $1$.
b) Sprawdź, która z liczb $-3, 0, 2, 4$ jest miejscem zerowym funkcji $f$.
c) Wyznacz te argumenty, dla których funkcja $f$ przyjmuje wartość $-4$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 93 [R]
**Treść zadania:**
Funkcja $f$, określona w zbiorze liczb rzeczywistych dodatnich, każdej liczbie $x \in \mathbb{R}_+$ przyporządkowuje jej odwrotność pomnożoną przez $18$.
a) Podaj wzór funkcji $f$.
b) Uzasadnij, że wszystkie punkty wykresu funkcji $f$ znajdują się w I ćwiartce układu współrzędnych.
c) Wyznacz wszystkie te punkty należące do wykresu funkcji $f$, których obie współrzędne są liczbami naturalnymi.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 94
**Treść zadania:**
Dziedziną funkcji $f$ jest zbiór $D = \{-2, -1, 0, 1, 2, 3, 4\}$. Funkcja $f$ każdej liczbie ujemnej $k \in D$ przyporządkowuje jej wartość bezwzględną, a każdej liczbie nieujemnej $m \in D$ przyporządkowuje sumę liczby $m$ i liczby o $6$ od niej mniejszej.
a) Oblicz $f(-1)$ i $f(1)$.
b) Podaj wszystkie argumenty $x$, dla których zachodzi równość $f(x) = 2$.
c) Podaj wszystkie argumenty $x$ spełniające nierówność $f(x) \le 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 95 [R]
**Treść zadania:**
Na płaszczyźnie z układem współrzędnych dane są dwa zbiory punktów:
$$A = \{(-3, 3), (0, 4), (2, 5), (2, 0), (3, -7), (4, 9)\}, \quad B = \{(-3, 4), (0, 4), (2, -2), (3, 0), (4, -1)\}$$
Jeden z tych zbiorów jest wykresem pewnej funkcji $f \colon \{-3, 0, 2, 3, 4\} \to \mathbb{R}$.
a) Wskaż zbiór, który jest wykresem funkcji $f$ i uzasadnij, że drugi ze zbiorów nie jest wykresem żadnej funkcji, której dziedziną jest zbiór $\{-3, 0, 2, 3, 4\}$.
b) Podaj najmniejszą wartość funkcji $f$.
c) Podaj miejsca zerowe funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 96
**Treść zadania:**
Obok zamieszczono wykresy funkcji $f$ i $g$.
a) Określ zbiór wartości funkcji $f$ oraz funkcji $g$.
b) Podaj zbiór tych wartości funkcji $g$, które nie są wartościami funkcji $f$.
c) Podaj te argumenty, dla których wartości obu funkcji są równe.
d) Podaj zbiór tych argumentów, dla których wartości funkcji $f$ są większe od wartości funkcji $g$.
e) Podaj te argumenty $x$, dla których $f(x) < 0$ i $g(x) < 0$.
f) Podaj te argumenty $x$, dla których $f(x) \cdot g(x) = 0$.
g) [W] Podaj te argumenty $x$, dla których $f(x) \cdot g(x) < 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 97 [R]
**Treść zadania:**
Funkcja $f$ określona jest za pomocą poniższej tabelki:

| $x$ | $-3$ | $-\sqrt{3}$ | $0$ | $1{,}2$ | $3$ | $4\sqrt{5}$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $f(x)$ | $-2$ | $-2$ | $-2$ | $0$ | $0$ | $2$ |

Przedstaw za pomocą tabelki funkcję $g$, która każdej liczbie $w$, należącej do zbioru wartości funkcji $f$, przyporządkowuje liczbę argumentów, dla których funkcja $f$ przyjmuje wartość $w$. Sporządź wykres funkcji $g$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 98
**Treść zadania:**
Funkcja rosnąca $f \colon \{0, 1, 2, 3, 4, 5, 6, 7\} \to \mathbb{Z}$ została częściowo określona za pomocą tabelki:

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $f(x)$ | $-2$ | | $0$ | $5$ | $9$ | | | $12$ |

a) Uzupełnij tabelkę.
b) Podaj punkty wspólne wykresu funkcji $f$ z osiami układu współrzędnych.
c) [R] Podaj ten argument $a$, dla którego zachodzi równość $f(f(a)) + 2 = 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 99 [R]
**Treść zadania:**
Dziedziną funkcji $f$ jest zbiór wszystkich dodatnich liczb wymiernych $\mathbb{Q}_+$. Funkcja $f$ każdej liczbie $w \in \mathbb{Q}_+$ przyporządkowuje licznik ułamka $\frac{p}{q}$, gdzie $\frac{p}{q} = w$, $\frac{p}{q}$ jest ułamkiem nieskracalnym i $p, q$ są liczbami całkowitymi dodatnimi.
a) Oblicz wartość funkcji $f$ dla argumentów $3$, $2{,}49$, $\sqrt{6\frac{1}{4}}$.
b) Dla którego argumentu, $\frac{48}{84}$ czy $\frac{51}{68}$, funkcja $f$ przyjmuje większą wartość?
c) Podaj zbiór wartości funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 100
**Treść zadania:**
Funkcja $f$ każdej naturalnej liczbie trzycyfrowej przyporządkowuje sumę jej cyfr.
a) Podaj wszystkie argumenty, dla których funkcja $f$ przyjmuje wartość $2$.
b) [W] Dla pewnego argumentu $a$ funkcja $f$ przyjmuje wartość $15$. Uzasadnij, że $a$ jest podzielny przez $3$.
c) Podaj najmniejszą liczbę $a$ taką, że $f(a) = 20$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 101
**Treść zadania:**
Funkcja $f$ każdej liczbie rzeczywistej $x$ przyporządkowuje największą liczbę parzystą mniejszą od $x$.
a) Oblicz $f(\pi)$ i $f(10)$.
b) Podaj zbiór wszystkich miejsc zerowych funkcji $f$.
c) Określ zbiór wartości funkcji $f$.
d) Naszkicuj wykres funkcji $f$ dla $x \in [2; 8]$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 102
**Treść zadania:**
Funkcja $f$ każdej liczbie naturalnej $n$ przyporządkowuje liczbę cyfr potrzebnych do jej zapisania w zapisie dziesiętnym, np. $f(7285) = 4$.
a) Podaj zbiór wartości funkcji $f$.
b) Dla ilu argumentów funkcja $f$ przyjmuje wartość $3$?
c) Podaj wszystkie argumenty $n < 3000$, dla których zachodzi równość $f(n+1) = f(n) + 1$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 103
**Treść zadania:**
Funkcja $f$, określona na zbiorze liczb naturalnych większych od $9$, przyporządkowuje każdej liczbie $n$ cyfrę dziesiątek liczby $n$.
a) Określ zbiór wartości funkcji $f$.
b) Dla ilu argumentów mniejszych od $999$ funkcja $f$ przyjmuje wartość $5$?
c) Dla jakich $k \in \mathbb{Z}$, liczba $10k$ jest miejscem zerowym funkcji $f$?
d) Dla jakich $n$ nie zachodzi równość $f(n+1) = f(n)$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 104
**Treść zadania:**
Funkcja $f$ każdej liczbie całkowitej dodatniej przyporządkowuje liczbę jej dzielników naturalnych.
a) Oblicz $f(12)$.
b) Funkcja $g$ określona jest następująco: $g(n) = f(n) - 2$ dla każdej liczby całkowitej dodatniej $n$. Ile miejsc zerowych należących do zbioru $\{1, 2, 3, \ldots, 20\}$ ma funkcja $g$?
c) Jaką własność mają te liczby $n$, dla których $f(n)$ jest liczbą nieparzystą?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 105
**Treść zadania:**
Funkcja $g$ każdej liczbie całkowitej dodatniej $k$ mniejszej od $100$ przyporządkowuje mniejszą z liczb $k$, $100 - 2k$.
a) [R] Oblicz $g(40)$.
b) Znajdź te argumenty, dla których funkcja $g$ przyjmuje wartość $18$.
c) Podaj najmniejszą i największą wartość funkcji $g$.
d) Dla ilu liczb $n$ zachodzi równość $g(n) = n$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 106
**Treść zadania:**
Funkcja $f$ określona jest w zbiorze $\mathbb{R}$ w następujący sposób: jeśli $a \in [2n-1; 2n+1)$ dla pewnej liczby $n \in \mathbb{Z}$, to $f(a)$ jest liczbą parzystą należącą do zbioru $[2n-1; 2n+1)$.
a) [R] Wyznacz $f(8)$, $f(-5)$, $f(11{,}5)$.
b) Podaj zbiór wartości funkcji $f$.
c) Podaj miejsca zerowe funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 107 [R]
**Treść zadania:**
Funkcja $f$ każdej liczbie całkowitej przyporządkowuje resztę z dzielenia przez $8$ jej kwadratu.
a) Uzasadnij, że jeśli $n$ jest liczbą nieparzystą, to $f(n) = 1$.
b) Wyznacz zbiór wartości funkcji $f$.
c) Ile miejsc zerowych należących do przedziału $[0; 80]$ ma funkcja $f$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 108
**Treść zadania:**
Wyznacz zbiór wartości funkcji $f \colon \mathbb{N} \to \mathbb{Z}$ określonej wzorem:
$$f(n) = \begin{cases} (-1)^n \cdot \frac{n}{2}, & \text{gdy } n \text{ jest liczbą parzystą} \\ (-1)^n \cdot \frac{n+1}{2}, & \text{gdy } n \text{ jest liczbą nieparzystą} \end{cases}$$

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 109
**Treść zadania:**
Na pewnym przejściu granicznym w dniach $1-8$ lutego celnicy odprawiali dziennie $200$ samochodów ciężarowych. Na wykresie pokazano liczby ciężarówek oczekujących na odprawę celną o godzinie $24^{00}$ w dniach $31\text{ I} - 8\text{ II}$.
a) Wymień te dni, w których stanęło w kolejce do odprawy celnej co najmniej $200$ samochodów ciężarowych?
b) [R] Pewnego dnia o północy związkowcy z „Samoobrony” zablokowali na $24$ godziny dojazd do przejścia granicznego. Kiedy miała miejsce ta blokada?
c) Dziedziną funkcji $f$ jest zbiór $\{1\text{ II}, 2\text{ II}, \ldots, 8\text{ II}\}$. Funkcja $f$ każdemu argumentowi przyporządkowuje liczbę ciężarówek, które w danym dniu stanęły w kolejce do odprawy celnej. Sporządź (w narysowanym obok układzie współrzędnych) wykres funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 110
**Treść zadania:**
Na wykresie obok pokazano, jak zmieniała się w zależności od czasu droga, którą przebył pan Kowalski udając się pewnego dnia do pracy. Pierwszy odcinek drogi (z domu do stacji kolejowej) pan Kowalski pokonał piechotą i zajęło mu to $20\text{ min}$. Kolejny etap pokonał pociągiem, a ostatni autobusem.
a) Odpowiedz na pytania:
1) jak daleko mieszka pan Kowalski od stacji kolejowej?
2) ile minut jechał pan Kowalski pociągiem?
3) jak długo czekał pan Kowalski na autobus?
b) Uzupełnij tabelę:

| Przedział czasu (w min) | $(0; 25)$ | $(25; 40)$ | $(40; 45)$ | $(45; 60)$ |
| :--- | :---: | :---: | :---: | :---: |
| Przebyta droga (w km) | | | | |

c) Oblicz, z jaką przeciętną prędkością pokonałby pan Kowalski drogę z domu do pracy, gdyby nie musiał czekać ani na pociąg, ani na autobus.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 111
**Treść zadania:**
Pan Nowak wyruszył samochodem na wczasy. Na wykresie pokazano, jak zmieniała się prędkość samochodu w czasie pierwszych $10$ minut podróży.
a) Z jaką maksymalną prędkością jechał pan Nowak w rozpatrywanym przedziale czasu? Wynik podaj w $\text{km/godz.}$
b) W piątej minucie pan Nowak przejeżdżał przez teren zabudowany. Ustal, czy nie złamał przepisów, jeżeli wiadomo, że w tym miejscu obowiązywało ograniczenie prędkości do $60\text{ km/godz.}$
c) W kilka minut po rozpoczęciu podróży pan Nowak musiał zatrzymać się przed przejazdem kolejowym. Jak długo trwał ten nieplanowany postój?
d) Wiadomo, że droga przebyta od momentu $t_1$ do momentu $t_2$ jest równa polu obszaru ograniczonego wykresem prędkości będącej funkcją czasu, osią $OX$ i prostymi $x=t_1, x=t_2$. Sprawdź, w którym pan Nowak pokonał większą odległość: w ciągu $2$ i $3$ minuty jazdy czy w ciągu $6$ i $7$ minuty jazdy.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 112
**Treść zadania:**
Podczas napełniania zbiornika uszkodzony został zawór odpływowy, przez który zaczęła wydostawać się woda z prędkością $10\text{ m}^3/\text{min}$. Awarię usunięto po $9$ minutach. Na wykresie pokazano, jak zmieniała się ilość wody w zbiorniku od momentu wystąpienia awarii do momentu jej usunięcia.
a) Oblicz:
1) ile $\text{m}^3$ wody dostarczono do zbiornika w ciągu dwóch początkowych minut,
2) z jaką prędkością (w $\text{m}^3/\text{min}$) dostarczano wodę do zbiornika w ciągu piątej i szóstej minuty,
3) ile $\text{m}^3$ wody wydostało się ze zbiornika w czasie trwania awarii.
b) W jakim przedziale czasu dostarczano wodę do zbiornika z prędkością $10\text{ m}^3/\text{min}$?
c) W którym momencie przestano dostarczać wodę do zbiornika?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 113
**Treść zadania:**
Wykres funkcji $f(x)=3x-6$ przesunięto o $2010$ jednostek w górę otrzymując wykres funkcji $g$.
a) Zapisz wzór funkcji $g$.
b) [R] Wykres funkcji $g$ można otrzymać również przesuwając wykres funkcji $f$ wzdłuż osi $OX$. O ile jednostek wzdłuż osi $OX$ i w którą stronę należy przesunąć wykres funkcji $f$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 114
**Treść zadania:**
Na rysunku obok zamieszczono wykres funkcji $f \colon [-6, 7] \to \mathbb{R}$.
a) Podaj najmniejszą i największą wartość funkcji $f$ w przedziale $[-4; 4]$.
b) Podaj zbiór wszystkich argumentów, dla których wartość funkcji $f$ jest z przedziału $[-1; 3]$.
c) Podaj miejsca zerowe funkcji $g(x)=f(x+3)$.
d) Naszkicuj wykres funkcji $g$ takiej, że $g(x)=f(-x)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 115 [R]
**Treść zadania:**
Dziedziną funkcji $g$ jest zbiór liczb rzeczywistych. Wykres funkcji $f(x)=x^4-3x^3-2x^2+6x$ otrzymamy przesuwając wykres funkcji $g$ wzdłuż osi $Ox$ o $2010$ jednostek w lewo.
a) Oblicz $g(2009)$.
b) Znajdź miejsca zerowe funkcji $g$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 116
**Treść zadania:**
Wykres funkcji $f(x) = \frac{x-3}{x^2-x-6}$ przesunięto o wektor $\vec{u} = [-2, 1]$, a następnie przesunięty wykres odbito symetrycznie względem początku układu współrzędnych. Otrzymano wykres pewnej funkcji $g$. Znajdź wzór i wyznacz dziedzinę funkcji $g$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 117 [W]
**Treść zadania:**
Funkcja $f$ określona jest wzorem $f(x) = \frac{x^2+4x+5}{x^2+4x}$. Wykres funkcji $f$ przesunięto o wektor $\vec{u} = [p, 0]$, otrzymując wykres funkcji $g$. Znajdź wzór funkcji $g$ i współrzędne wektora $\vec{u}$ wiedząc, że oś $OY$ jest osią symetrii wykresu funkcji $g$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 118
**Treść zadania:**
(0–2) Funkcja $f$ jest określona wzorem $f(x) = \frac{2x-b}{x-9}$ dla $x \ne 9$, a $f(14) = 5$. Oblicz współczynnik $b$.
*CKE, matura – poziom podstawowy, czerwiec 2011*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 119
**Treść zadania:**
Znajdź wszystkie argumenty, dla których funkcje $g(x) = x+8$ i $h(x) = -\frac{16}{x}$ przyjmują tę samą wartość.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 120
**Treść zadania:**
Funkcja $f$, określona w zbiorze $\mathbb{R}$, jest malejąca. Funkcję $g$ dla każdej liczby rzeczywistej $x$ określa równość $g(x) = f(x^3 - 3x)$.
a) Która liczba jest większa, $f(-1)$ czy $g(1)$?
b) [R] Znajdź te argumenty, dla których wartości obu funkcji są równe.
c) Liczba $2$ jest miejscem zerowym funkcji $f$. Znajdź miejsca zerowe funkcji $g$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 121 [R]
**Treść zadania:**
Funkcja $f$ określona jest wzorem $f(x) = \frac{2x}{x^2+1}$. Udowodnij, że zbiór wartości funkcji $f$ zawiera się w przedziale $[-1; 1]$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 122
**Treść zadania:**
Funkcja $f$ określona jest wzorem $f(x) = \frac{x^3+1}{x^2}$. Wykaż, że jeżeli dla dwóch ujemnych liczb $a$ i $b$ zachodzi równość $f(a) = f(b)$, to liczby $a$ i $b$ są równe.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 179 [W]
**Treść zadania:**
Funkcja $f$ określona jest wzorem $f(x) = -3(x+3)(x-2)$.
a) Wyznacz te argumenty, dla których funkcja $f$ przyjmuje wartości nieujemne.
b) Podaj przedziały monotoniczności funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 180
**Treść zadania:**
Funkcja $f$ dana jest wzorem $f(x) = x^2 - 4\pi x + 3\pi^2$.
a) Znajdź wszystkie liczby całkowite, dla których funkcja $f$ przyjmuje wartości ujemne.
b) Zapisz wzór funkcji $f$ w postaci iloczynowej.
c) Wyznacz największą i najmniejszą wartość funkcji $f$ osiąganą w przedziale $[0; 5\pi]$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 181 [R]
**Treść zadania:**
Wykres funkcji $f(x) = -2x^2$ przesunięto o $8$ jednostek w prawo i $2$ jednostki do dołu, otrzymując wykres funkcji $g$.
a) Określ zbiór wartości funkcji $g$.
b) Określ przedziały monotoniczności funkcji $g$.
c) Zapisz wzór funkcji $g$ w postaci kanonicznej.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 182 [R]
**Treść zadania:**
Wykres funkcji $f(x) = 3x^2$ przesunięto o wektor $\vec{v}$, otrzymując wykres funkcji $g$, której miejscami zerowymi są liczby $-3$ i $1$. Znajdź współrzędne wektora $\vec{v}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 183
**Treść zadania:**
Funkcja $f$ określona jest wzorem $f(x) = x^2 - 6x + 4$.
a) Przez wierzchołek paraboli, będącej wykresem funkcji $f$, poprowadzono prostą równoległą do osi $OY$. Podaj równanie tej prostej.
b) Znajdź te argumenty, dla których wartości funkcji $f$ należą do przedziału $[-4; 4]$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 184
**Treść zadania:**
Dane są funkcje $f(x) = x^2 - 6x + 9$ i $g(x) = x + 7$.
a) Znajdź te argumenty, dla których wartość funkcji $f$ jest pięć razy większa od wartości funkcji $g$.
b) Znajdź te argumenty, dla których zarówno funkcja $f$, jak i funkcja $g$ przyjmują wartości dodatnie.
c) Uzasadnij, że dla każdej liczby całkowitej $m$ liczba $f(m)$ jest kwadratem liczby całkowitej. Kwadratem jakiej liczby naturalnej jest $f(m)$, jeżeli $m = 123\,456$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 185 [R]
**Treść zadania:**
Korzystając z wykresu funkcji $f(x) = ax^2 + bx + c$, określ znak liczby:
a) $a$;
b) $b$;
c) $c$;
d) $a^2 - bc$;
e) $b^2 - ac$.
Odpowiedź uzasadnij.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 186
**Treść zadania:**
Wiedząc, że liczby $2$ i $3$ są miejscami zerowymi funkcji kwadratowej $f(x) = ax^2 + bx + c$, obliczymy iloraz $\frac{f(6)}{f(5)}$.
- Zapisujemy wzór funkcji $f$ w postaci iloczynowej: $f(x) = a(x-2)(x-3)$.
- Korzystając z zapisu funkcji $f$ w postaci iloczynowej, otrzymujemy: $f(6) = a(6-2)(6-3) = 12a$ oraz $f(5) = a(5-2)(5-3) = 6a$.
- Zatem $\frac{f(6)}{f(5)} = \frac{12a}{6a} = 2$.

Wiedząc, że liczby $-3$ i $4$ są miejscami zerowymi funkcji kwadratowej $f$, oblicz iloraz $\frac{f(6)}{f(-2)}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 187
**Treść zadania:**
Funkcja $f$ określona jest w następujący sposób:
$$f(x) = \begin{cases} x^2-4 & \text{dla } x < 2 \\ -x^2+4x & \text{dla } x \ge 2 \end{cases}$$
a) Znajdź miejsca zerowe funkcji $f$.
b) Naszkicuj wykres funkcji $f$.
c) Podaj zbiór tych wartości funkcji $f$, które przyjmowane są dla trzech argumentów.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 188 [W]
**Treść zadania:**
Naszkicuj wykres funkcji $f(x) = |x^2-4|-2x$. Określ liczbę rozwiązań równania $f(x)=m$ w zależności od wartości parametru $m$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 189
**Treść zadania:**
Dana jest funkcja $f(x) = \min(3, \, x^2-5x+7)$, gdzie $\min(a, b)$ oznacza nie większą z liczb $a, b$.
a) Oblicz wartość funkcji $f$ dla argumentów $0, 2$ i $4$.
b) Wyznacz zbiór wartości funkcji $f$.
c) Dla $x \in [-2; 5]$ naszkicuj wykres funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 190 [R]
**Treść zadania:**
Dana jest funkcja $f(x) = x^2-3$. Znajdź miejsca zerowe funkcji $g(x) = [f(x)]$, gdzie $[a]$ oznacza największą liczbę całkowitą nie większą od $a$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 191
**Treść zadania:**
Punkty $K=(-3, -2)$ i $L=(1, 18)$ należą do wykresu funkcji $f(x) = x^2+bx+c$.
a) Wyznacz współczynniki $b$ i $c$.
b) Znajdź punkty wspólne wykresu funkcji $f$ i prostej o równaniu $y=40$.
c) [R] Podaj równanie prostej będącej osią symetrii wykresu funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 192
**Treść zadania:**
Obok zamieszczony został wykres funkcji $f(x) = ax^2+bx+c$.
a) [R] Wyznacz wartość współczynnika $c$.
b) [R] Wyznacz wartości współczynników $a$ i $b$.
c) Określ przedziały monotoniczności funkcji $f$.
d) Wyznacz zbiór wartości funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 193
**Treść zadania:**
Obok przedstawiony został wykres funkcji kwadratowej $f$.
a) [W] Znajdź wzór funkcji $f$.
b) Wyznacz te argumenty, dla których funkcja $f$ przyjmuje wartości dodatnie.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 194 [R]
**Treść zadania:**
Funkcja $f(x) = x^2+bx+c$ jest malejąca w przedziale $(-\infty; 3]$ i rosnąca w przedziale $[3; +\infty)$. Wierzchołek paraboli będącej wykresem funkcji $f$ należy do prostej o równaniu $y=-2x+2$.
a) Wyznacz najmniejszą wartość funkcji $f$.
b) Znajdź współrzędne punktów wspólnych wykresu funkcji $f$ i osi układu współrzędnych.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 195
**Treść zadania:**
Funkcje $f$ i $g$ określone są wzorami $f(x)=2x^2+6x+c$ i $g(x)=-x^2+bx-25$. Funkcja $f$ ma jedno miejsce zerowe, zaś funkcja $g$ osiąga największą wartość dla argumentu $5$.
a) Oblicz wartości współczynników $b$ i $c$.
b) Rozwiąż nierówność $f(-x) + 4g(x) \ge 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 196 [R]
**Treść zadania:**
Funkcja $f$ określona jest wzorem $f(x)=x^2+2x+c$.
a) Wyznacz te wartości współczynnika $c$, dla których wykres funkcji $f$ przecina oś $OX$ w dwóch punktach.
b) Wyznacz te wartości współczynnika $c$, dla których najmniejsza wartość funkcji $f$ jest równa $3$.
c) Wyznacz te wartości współczynnika $c$, dla których wierzchołek paraboli, będącej wykresem funkcji $f$, należy do paraboli o równaniu $y=2x^2-7x+1$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 197
**Treść zadania:**
Wykresem funkcji kwadratowej $f(x)=2x^2+bx+c$ jest parabola, której wierzchołkiem jest punkt $W=(4, 0)$. Oblicz wartości współczynników $b$ i $c$.
*CKE, matura – poziom podstawowy, maj 2014*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 198
**Treść zadania:**
Funkcja kwadratowa $f$ określona jest wzorem $f(x)=(3m-5)x^2-(2m-1)x+0{,}25(3m-5)$. Wyznacz te wartości parametru $m \in \mathbb{R}$, dla których najmniejsza wartość funkcji $f$ jest liczbą dodatnią.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 199
**Treść zadania:**
Znajdź wszystkie wartości $m$, dla których funkcja $f(x)=(m^2-1)x^2+2(m-1)x+2$ przyjmuje wartość dodatnią dla każdej liczby rzeczywistej $x$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 200
**Treść zadania:**
Wyznacz wszystkie całkowite wartości $k$, dla których funkcja $f(x)=\frac{k-2}{k-4}x^2-(k-2)x+k-4$ osiąga najmniejszą wartość i ma co najwyżej jedno miejsce zerowe.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 201 [R]
**Treść zadania:**
Dla jakich wartości parametru $m$ wartości funkcji $f(x)=(2m+1)x^2+(m-1)x+3m$ są dla każdego argumentu $x$ mniejsze od odpowiednich wartości funkcji $g(x)=(1-m)x+3$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 202*
**Treść zadania:**
Dla jakich wartości parametru $m$ funkcja
$$f(x) = \begin{cases} (m-1)x+m & \text{dla } x < 1 \\ x^2+(m-2)x+4-2m & \text{dla } x \ge 1 \end{cases}$$
przyjmuje tylko dodatnie wartości?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 203
**Treść zadania:**
Wyznacz wszystkie wartości parametru $m$, dla których funkcja $f(x)=(m^2-1)x^2-2mx+4m+5$ jest rosnąca w przedziale $(-\infty; 1]$ i malejąca w przedziale $[1; +\infty)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 204 [R]
**Treść zadania:**
Wykaż, że dla dowolnych liczb rzeczywistych $a, b, c$ funkcja
$$f(x) = (x-a)(x-b) + (x-b)(x-c) + (x-c)(x-a)$$
ma co najmniej jedno miejsce zerowe.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 205* [R]
**Treść zadania:**
Wykaż, że jeżeli funkcje $f(x)=x^2+px+q$ i $g(x)=x^2+qx+p$, gdzie $p \ne q$, mają wspólne miejsce zerowe, to $p+q=-1$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 206*
**Treść zadania:**
Uzasadnić, że jeżeli równanie $x^2+px+q=0$ ma pierwiastki rzeczywiste, to równanie
$$x^2+p\left(a+\frac{1}{a}\right)x+q\left(a-\frac{1}{a}\right)^2=0,$$
gdzie $p, q, a$ są liczbami rzeczywistymi, ma też pierwiastki rzeczywiste.
*Egzamin wstępny na Politechnikę Białostocką (kierunki: informatyka, zarządzanie i marketing) w roku 1997*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 207
**Treść zadania:**
Jednym z rozwiązań równania $x^2-4x+c=0$ jest liczba $2+\sqrt{5}$.
a) Wyznacz wartość współczynnika $c$.
b) Znajdź drugie rozwiązanie tego równania.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 208
**Treść zadania:**
Rozwiąż nierówność $\pi x^2 - \frac{1}{4}x > 0$.
*Egzamin wstępny do liceów ogólnokształcących w woj. łódzkim w roku 1988*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 209 [R]
**Treść zadania:**
Oblicz współczynniki $b$ i $c$ trójmianu $y=x^2+bx+c$ wiedząc, że zbiorem rozwiązań nierówności $x^2+bx+c < 0$ jest przedział $(-2; 5)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 210 [R]
**Treść zadania:**
Znajdź te wartości współczynnika $c$, dla których równania $x^2+x+c=0$ i $x^2-5x+6=0$ mają wspólny pierwiastek.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 211
**Treść zadania:**
Równanie $|x^2+6x-19| = |x^2-1|$ możemy rozwiązać w następujący sposób:
- korzystając z własności wartości bezwzględnej: $|a|=|b| \iff (a=b \lor a=-b)$, dostajemy alternatywę równań: $x^2+6x-19=x^2-1$ lub $x^2+6x-19=-(x^2-1)$;
- rozwiązujemy oba równania: rozwiązaniem pierwszego jest $3$, zaś drugiego $-5$ i $2$;
- zatem rozwiązaniami równania $|x^2+6x-19|=|x^2-1|$ są liczby $-5, 2, 3$.

Rozwiąż w ten sam sposób równanie $|2x^2-3| = |3x^2-7|$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 212
**Treść zadania:**
Dane jest równanie $x^2+(m+1)x+3m-2=0$ z niewiadomą $x$.
a) Uzasadnij, że $-3$ nie jest rozwiązaniem tego równania dla żadnej wartości parametru $m$.
b) Dla jakich wartości parametru $m$ równanie ma dwa różne rozwiązania należące do zbioru $\mathbb{R} \setminus \{-2, 2\}$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 213
**Treść zadania:**
Określ liczbę pierwiastków równania $(k^2-1)x^2-(k+1)x-0{,}5=0$ w zależności od wartości parametru $k$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 214
**Treść zadania:**
Dane jest równanie $(m-1)x^2+m\sqrt{7}x+m^2+m+1=0$ z niewiadomą $x$. Sporządź wykres funkcji $m \to f(m)$, gdzie $f(m)$ oznacza liczbę pierwiastków danego równania.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 215 [R]
**Treść zadania:**
Znajdź te wartości parametru $a$, dla których równanie $(2-0{,}5x)(2x-a)=0$ ma dwa rozwiązania takie, że większe z nich jest mniejsze od $5$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 216
**Treść zadania:**
(0–4) Rozwiąż nierówność $|x^2-3x+2| \ge |x-1|$.
*CKE, matura – poziom rozszerzony, czerwiec 2016*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 217 [W]
**Treść zadania:**
Określ liczbę rozwiązań równania $|x^2+3x|+1=k$ w zależności od wartości parametru $k$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 218
**Treść zadania:**
Dla jakich wartości parametru $m$ równanie $|x^2-9|+|x^2-16|=m$ ma dokładnie dwa dodatnie rozwiązania?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 219
**Treść zadania:**
Uzasadnij, że jeżeli $a$ i $b$ są liczbami różnych znaków, to równanie $(x-a)(x+b)+(x+a)(x-b)=0$ nie ma rozwiązań.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 220
**Treść zadania:**
Wykaż, że dla dowolnych liczb rzeczywistych $a, b, c$ równanie $x^2+(a+b)x+ab-c^2=0$ ma co najmniej jedno rozwiązanie. Jakie warunki muszą spełniać liczby $a, b, c$, aby równanie miało dokładnie jedno rozwiązanie?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 221* [R]
**Treść zadania:**
Wykaż, że jeżeli między współczynnikami trójmianów $x^2+px+q$ i $x^2+mx+n$ zachodzi związek $mp=2(n+q)$, to przynajmniej jedno z równań $x^2+px+q=0$ i $x^2+mx+n=0$ ma rozwiązanie.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 222 [W]
**Treść zadania:**
Nie obliczając pierwiastków równania $x^2-5x-3=0$, oblicz sumę odwrotności czwartych potęg jego pierwiastków.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 223
**Treść zadania:**
Liczby $p$ i $q$ są pierwiastkami równania $x^2+20x-19=0$. Nie obliczając pierwiastków tego równania, oblicz wartość wyrażenia:
a) $p^2+q^2+2(pq+p+q)$;
b) $\frac{1}{p+1} + \frac{1}{q+1}$;
c) $\frac{q-9}{p+3} + \frac{p-9}{q+3}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 224
**Treść zadania:**
Dane jest równanie $x^2-(m-4)x+m^2-7m+12=0$ z niewiadomą $x$. Wyznacz te wartości parametru $m$, dla których iloczyn różnych pierwiastków danego równania jest równy połowie sumy tych pierwiastków.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 225
**Treść zadania:**
Dla jakich wartości parametru $m$ równanie $x^2-mx+m^2-2m+1=0$ ma dwa różne pierwiastki rzeczywiste, których suma jest o jeden większa od ich iloczynu?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 226
**Treść zadania:**
Dla jakich wartości parametru $a$ równanie $2ax^2-(a+2)x+1=0$ ma dwa pierwiastki, których suma jest liczbą z przedziału $[-1; 1]$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 227
**Treść zadania:**
Dane jest równanie $(2m+1)x^2-(m+3)x+2m+1=0$ z niewiadomą $x$. Wyznacz te wartości parametru $m$, dla których suma odwrotności różnych pierwiastków danego równania jest większa od $1$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 228
**Treść zadania:**
Wyznacz te wartości parametru $m$, dla których równanie $x^2+mx+m=0$ ma takie dwa pierwiastki, że suma ich kwadratów jest mniejsza od $15$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 229
**Treść zadania:**
(0–4) Dane jest równanie kwadratowe $x^2-(3m+2)x+2m^2+7m-15=0$ z niewiadomą $x$. Wyznacz wszystkie wartości parametru $m$, dla których różne rozwiązania $x_1$ i $x_2$ tego równania istnieją i spełniają warunek $2x_1^2+5x_1x_2+2x_2^2=2$.
*CKE, matura – poziom rozszerzony, maj 2020*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 230
**Treść zadania:**
(0–5) Wyznacz wszystkie wartości parametru $m$, dla których równanie $x^2-(m+1)x+m=0$ ma dwa różne rozwiązania rzeczywiste $x_1$ oraz $x_2$, spełniające warunki: $x_1 \ne 0, x_2 \ne 0$ oraz $\frac{1}{x_1}+\frac{1}{x_2}+2 = \frac{1}{x_1^2}+\frac{1}{x_2^2}$.
*CKE, matura – poziom rozszerzony, maj 2021*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 231
**Treść zadania:**
Dla jakich wartości parametru $m$ równanie $x^2+3x-\frac{m-2}{m-3}=0$ ma pierwiastki rzeczywiste? Wyznacz tę wartość parametru $m$, dla której suma sześcianów pierwiastków tego równania jest równa $-9$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 232
**Treść zadania:**
(0–6) Oblicz wszystkie wartości parametru $m$, dla których równanie $x^2-(m+2)x+m+4=0$ ma dwa różne pierwiastki rzeczywiste $x_1, x_2$ takie, że $x_1^4+x_2^4=4m^3+6m^2-32m+12$.
*CKE, matura – poziom rozszerzony, maj 2012*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 233 [W]
**Treść zadania:**
Wyznacz te wartości parametru $a$, dla których różne pierwiastki $x_1, x_2$ równania $x^2-3x-a+1=0$ spełniają warunek $3x_1-2x_2=4$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 234 [R]
**Treść zadania:**
Liczba $a$ jest odwrotnością liczby $b$ i obie liczby spełniają równanie $x^2+(3m-2)x+2m-3=0$, gdzie $x$ jest niewiadomą. Znajdź te liczby.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 235 [R]
**Treść zadania:**
Punkt $(p, q)$ należy do zbioru $A$ wtedy i tylko wtedy, gdy równanie $x^2-2px+q=0$ ma dwa różne rozwiązania $x_1, x_2$ takie, że $x_1^3+x_2^3=2$. Zaznacz w układzie współrzędnych zbiór $A$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 236 [W]
**Treść zadania:**
Dla jakich wartości parametru $m$ równanie $mx^2-(m-3)x+1=0$ ma różne pierwiastki $x_1$ i $x_2$ spełniające warunek $|x_1|+|x_2|\le 1$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 237
**Treść zadania:**
Dla jakich wartości parametru $m$ równanie $x^2-(m-5)x+m^2-6m+5=0$ ma dwa pierwiastki różnych znaków?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 238
**Treść zadania:**
Wyznacz te wartości parametru $m$, dla których równanie $(2m^2+m-1)x^2+(5-m)x-6=0$ ma dwa różne pierwiastki tego samego znaku.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 239
**Treść zadania:**
Dla jakich wartości parametru $k$ równanie $x^2-2x-\frac{k-5}{k+3}=0$ ma takie dwa pierwiastki jednakowych znaków, których suma kwadratów jest nie mniejsza od $3$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 240
**Treść zadania:**
Dla jakich wartości parametru $p$ równanie $x^2+(2-3p)x+2p^2-5p-3=0$ ma dwa dodatnie pierwiastki?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 241
**Treść zadania:**
Dla jakich wartości parametru $k$ równanie $(k-2)x^2-(k+1)x-k=0$ ma tylko ujemne rozwiązania?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 242
**Treść zadania:**
Wyznacz te wartości parametru $m$, dla których równanie $mx^2+(m-3)x-m+2=0$ ma co najmniej jedno dodatnie rozwiązanie.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 243 [W]
**Treść zadania:**
Dane są funkcje $f(x)=2x^2+x-m$ i $g(x)=mx^2-2mx+3$. Dla jakich wartości parametru $m$ wykresy funkcji $f$ i $g$ przecinają się w dwóch punktach, których odcięte mają różne znaki?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 244
**Treść zadania:**
Dla jakich wartości parametru $a$ prosta $y=ax+b$ przechodzi przez punkt $P=(3, 0)$ i przecina parabolę o równaniu $y=-x^2+x+2$ w dwóch punktach o dodatnich odciętych?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 245 [W]
**Treść zadania:**
Równanie $2x^2+bx+5=0$ ma dwa dodatnie pierwiastki. Kwadrat różnicy pierwiastków tego równania jest równy $6$. Wyznacz wartość współczynnika $b$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 246 [R]
**Treść zadania:**
Funkcja $f(x)=3x^2+bx+21$ ma dwa miejsca zerowe, które są liczbami całkowitymi ujemnymi. Wyznacz wartość współczynnika $b$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 247* [R]
**Treść zadania:**
Wyznacz te wartości parametru $m$, dla których równanie $x^2+m|x|+1{,}25=0$ ma cztery rozwiązania.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 248 [R]
**Treść zadania:**
Znajdź te wartości parametru $m$, dla których liczba $2$ nie należy do zbioru rozwiązań nierówności $x^2+(m^3+3)x-6m^2-18m+44 > 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 249
**Treść zadania:**
(0–5) Wyznacz wszystkie wartości parametru $m$, dla których nierówność $(m^2+4m-5)x^2+2x > 2mx-2$ jest prawdziwa dla każdej liczby rzeczywistej $x$.
*CKE, matura – poziom rozszerzony, czerwiec 2020*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 250
**Treść zadania:**
Wyznacz te wartości parametru $p$, dla których nierówność $(p-2)x^2+(p-2)x+p-1 < 0$ nie ma rozwiązań.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 251
**Treść zadania:**
(0–3) Udowodnij, że dla każdej liczby rzeczywistej $x$ i każdej liczby rzeczywistej $m$ prawdziwa jest nierówność $20x^2-24mx+18m^2 \ge 4x+12m-5$.
*CKE, „Egzamin maturalny od roku szkolnego 2014/2015” – przykładowy zestaw zadań (poziom rozszerzony)*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 252 [R]
**Treść zadania:**
Wyznacz wszystkie wartości $x$, dla których nierówność $(m^2-1)x^2+2(m-1)x+2 > 0$ jest prawdziwa dla każdego $m \in \mathbb{R}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 253
**Treść zadania:**
W 2000 roku pan Kowalski wpłacił na rachunek bankowy kwotę $1000\text{ zł}$. Po sześciu miesiącach wpłacił na ten rachunek $1000\text{ zł}$, a po upływie kolejnych sześciu miesięcy podjął całą kwotę, która z odsetkami wyniosła $2310\text{ zł}$. Oblicz, jakie było oprocentowanie tego rachunku w skali roku, jeżeli nie ulegało ono zmianie, a bank kapitalizował odsetki co sześć miesięcy (w 2000 roku nie było podatku od odsetek bankowych).

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 254 [R]
**Treść zadania:**
W 1995 roku pan Nowak wpłacił $10\,000\text{ zł}$ na dwuletnią lokatę z roczną kapitalizacją odsetek. Po roku bank obniżył roczną stopę procentową o dwa punkty procentowe. Po dwóch latach pan Nowak wypłacił całą kwotę, która wraz z odsetkami wyniosła $16\,640\text{ zł}$. Oblicz, jakie było oprocentowanie lokaty w pierwszym roku, a jakie w drugim (w latach dziewięćdziesiątych nie było podatku od odsetek bankowych).

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 255 [R]
**Treść zadania:**
Sklep zakupił za $8160\text{ zł}$ pewną ilość cukru. Gdy cukier potaniał o $4\text{ gr}$ na kilogramie, to za tę samą kwotę zakupiono o $80\text{ kg}$ cukru więcej. Ile kg i po jakiej cenie za kg kupiono cukier za pierwszym razem?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 256
**Treść zadania:**
(0–5) Trasę etapu wyścigu kolarskiego o długości $150\text{ km}$ pan Nowak pokonał w czasie o $1\text{ godzinę i } 50\text{ minut}$ krótszym niż jego kolega z drużyny, pan Kowalski. Średnia wartość prędkości, z jaką pan Nowak jechał na tym etapie, była o $11\text{ km/h}$ większa od średniej wartości prędkości pana Kowalskiego na tej trasie. Oblicz średnie wartości prędkości, z jakimi przejechali całą trasę obaj zawodnicy.
*CKE, matura – poziom podstawowy, czerwiec 2014*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 257
**Treść zadania:**
(0–5) Grupa znajomych wykupiła wspólnie dostęp do Internetu na okres jednego roku. Opłata miesięczna wynosiła $120\text{ złotych}$. Podzielono tę kwotę na równe części, by każdy ze znajomych płacił tyle samo. Po upływie miesiąca do grupy dołączyły jeszcze dwie osoby i wówczas opłata miesięczna przypadająca na każdego użytkownika zmniejszyła się o $5\text{ złotych}$. Ile osób liczyła ta grupa w pierwszym miesiącu użytkowania Internetu?
*CKE, matura – poziom podstawowy, czerwiec 2013*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 258
**Treść zadania:**
Dla uczczenia Kongresu Młodzieży Polskiej uczniowie pewnego liceum podjęli zobowiązanie ułożenia $800\text{ m}^2$ chodnika. Praca została wykonana na $8$ dni przed terminem, gdyż młodzież przekraczała stale dzienny plan o $5\text{ m}^2$. Oblicz, w ilu dniach miało być wykonane zobowiązanie oraz o ile procent przekraczano plan każdego dnia.
*Egzamin dojrzałości (LO – profil humanistyczny) w woj. częstochowskim w roku 1976*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 259
**Treść zadania:**
Suma dwóch liczb równa jest $6$. Znajdź te liczby, jeśli wiadomo, że suma podwojonego kwadratu jednej z nich i kwadratu drugiej jest najmniejsza z możliwych.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 260
**Treść zadania:**
Dane są funkcje $f(x)=2x-4$ i $g(x)=x+1$.
a) Oblicz iloczyn wartości funkcji $f$ i $g$ przyjmowanych dla argumentu $\frac{1}{2}(1+\sqrt{3})$.
b) Znajdź taki argument $x$, aby iloczyn wartości przyjmowanych dla tego argumentu przez funkcję $f$ i funkcję $g$ był najmniejszy z możliwych. Oblicz ten iloczyn.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 261 [R]
**Treść zadania:**
Supermarket sprzedając jabłka w cenie $3\text{ zł}$ za kilogram, dziennie sprzedawał $400\text{ kg}$. Zauważono, że przy obniżce ceny o każde $10\text{ gr}$ sprzedaż rośnie o $100\text{ kg}$. Supermarket kupuje jabłka od sadownika po $1{,}20\text{ zł}$ za $\text{kg}$, a inne koszty (magazynowanie, utrzymanie stoiska, itp.) przypadające na $1\text{ kg}$ jabłek wynoszą $20\text{ gr}$. Przy jakiej cenie jabłek dzienna sprzedaż przyniesie największy zysk?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 262
**Treść zadania:**
Znajdź tę wartość parametru $m$, dla której iloczyn pierwiastków równania $x^2-2mx+m^2-4m+1=0$ jest najmniejszy.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 263
**Treść zadania:**
Wyznacz tę wartość parametru $k$, dla której suma kwadratów pierwiastków równania $x^2+2kx+3k^2-6k-2=0$ jest największa z możliwych.
*UWAGA. Inne zadania optymalizacyjne znajdują się w Tomie II książki w rozdziale Zadania optymalizacyjne.*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 264 [W]
**Treść zadania:**
Dla jakich wartości parametru $m$ funkcja $f(x)=(m-4)x^2-4x+m-3$ ma dwa miejsca zerowe, z których jedno jest mniejsze od $1$, a drugie większe od $1$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 265 [W]
**Treść zadania:**
(0–6) Wyznacz wszystkie wartości parametru $m$, dla których równanie $x^2-3mx+2m^2+1=0$ ma dwa różne rozwiązania takie, że każde należy do przedziału $(-\infty; 3)$.
*CKE, matura – poziom rozszerzony, czerwiec 2017*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 266
**Treść zadania:**
Dla jakich wartości parametru $m$ równanie $mx^2+2x+m-2=0$ ma dwa pierwiastki mniejsze od $1$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 267
**Treść zadania:**
Wyznacz te wartości parametru $k$, dla których równanie $(k+1)x^2-2x+k-1=0$ ma dwa różne rozwiązania należące do przedziału $(0; 2)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 268
**Treść zadania:**
Dla jakich wartości parametru $a$ zbiór rozwiązań nierówności $x^2-3x+2 < 0$ jest zawarty w zbiorze rozwiązań nierówności $ax^2-(3a+1)x+3 > 0$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 269
**Treść zadania:**
(0–2) Wykaż, że jeżeli $c < 0$, to trójmian kwadratowy $y=x^2+bx+c$ ma dwa różne miejsca zerowe.
*CKE, matura – poziom podstawowy, sierpień 2012*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 270
**Treść zadania:**
(0–2) Funkcja kwadratowa $f(x)=x^2+bx+c$ nie ma miejsc zerowych. Wykaż, że $1+c > b$.
*CKE, matura próbna – poziom podstawowy, marzec 2021*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 271 [R]
**Treść zadania:**
Funkcja $f(x)=x^2+bx+c$ ma jedno miejsce zerowe. Do wykresu funkcji $f$ należy punkt $A=(4, 1)$ i nie należy punkt $B=(1, 4)$. Znajdź punkt przecięcia wykresu funkcji $f$ z osią rzędnych.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 272
**Treść zadania:**
Funkcja $f$ określona jest wzorem $f(x)=ax^2+bx+1$. Znajdź współczynniki $a$ i $b$ wiedząc, że dla każdej liczby rzeczywistej $x$ zachodzi równość $f(x-2)=f(x)-4x-2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 273 [R]
**Treść zadania:**
Liczba $a$ jest najmniejszą liczbą taką, że jednym z miejsc zerowych funkcji kwadratowej $f$ określonej wzorem $f(x)=(a+2)x^2+(a^2+4a+5)x+4a+6$ jest liczba $2$. Znajdź drugie miejsce zerowe funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 274 [R]
**Treść zadania:**
Znajdź taką liczbę rzeczywistą $a$, aby funkcja kwadratowa $f(x)=(a+2)x^2+(a^2+4a+5)x+4a+6$ najmniejszą wartość przyjmowała dla argumentu $2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 275 [R]
**Treść zadania:**
Funkcja $f$ określona jest wzorem $f(x)=(a+2)x^2+(a^2+4a+5)x+4a+6$. Znajdź taką liczbę $a$, aby wartość funkcji $f$ przyjmowana dla argumentu $2$ była najmniejsza z możliwych.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 276 [W]
**Treść zadania:**
Znajdź wszystkie liczby naturalne $n$, dla których $n^2-9n+20$ jest liczbą pierwszą.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 277 [W]
**Treść zadania:**
Znajdź takie wartości parametru $m$, aby równanie $(m-2)x^2-(m-4)x+m=3$ miało dwa różne rozwiązania i połowa jednego pierwiastka była równa odwrotności drugiego.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 278 [W]
**Treść zadania:**
Podaj wszystkie wartości parametru $m$, dla których równanie $|x^2-6x+5|+m-2=0$ ma dokładnie dwa dodatnie rozwiązania.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 279
**Treść zadania:**
Określ, w zależności od wartości parametru $m$, liczbę pierwiastków równania $|x^2-2x|=m$ należących do przedziału $[-2; 2]$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 280
**Treść zadania:**
Wyznacz te wartości parametru $m$, dla których równanie $x^2-(m-3)x+m-1=0$ ma dwa rozwiązania $x_1$ i $x_2$ spełniające warunek $x_1^2 \cdot x_2 + x_1 \cdot x_2^2 + x_1 \cdot x_2 = 2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 281
**Treść zadania:**
Dla jakich wartości parametru $k$ równanie $-x^2+(k-2)x-k^2+6k-8=0$ ma dwa pierwiastki różnych znaków i suma tych pierwiastków nie należy do przedziału $(-1\frac{1}{2}; 1\frac{1}{4})$?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 282
**Treść zadania:**
Wyznacz dziedzinę i narysuj wykres funkcji $f(m)=x_1^2+x_2^2$, gdzie $x_1$ i $x_2$ są różnymi pierwiastkami równania $x^2-mx+m^2-2m+1=0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 283
**Treść zadania:**
Funkcja kwadratowa $g$ ma dwa miejsca zerowe. Ich iloczyn jest równy $2$, a suma ich sześcianów równa jest $35$. Znajdź równanie prostej, która jest osią symetrii wykresu funkcji $g$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 284
**Treść zadania:**
Uzasadnij, że dla każdej liczby całkowitej $m$ równanie $x^2+(m+1)x-2m-6=0$ ma tylko całkowite pierwiastki.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 285
**Treść zadania:**
Wyznacz wszystkie wartości parametru $m$, dla których równanie $2x^2+(3-2m)x-m+1=0$ ma dwa różne pierwiastki $x_1, x_2$ takie, że $|x_1-x_2|=3$.
*CKE, matura – poziom rozszerzony, czerwiec 2012*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 286
**Treść zadania:**
(0–6) Dany jest trójmian kwadratowy $f(x)=x^2+2(m+1)x+6m+1$. Wyznacz wszystkie rzeczywiste wartości parametru $m$, dla których ten trójmian ma dwa różne pierwiastki $x_1, x_2$ tego samego znaku, spełniające warunek $|x_1-x_2|<3$.
*CKE, matura – poziom rozszerzony, maj 2016*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 287
**Treść zadania:**
(0–5) Wyznacz wszystkie wartości parametru $m$, dla których równanie $4x^2-6mx+(2m+3)(m-3)=0$ ma dwa różne rozwiązania rzeczywiste $x_1$ i $x_2$, przy czym $x_1 < x_2$, spełniające warunek $(4x_1-4x_2-1)(4x_1-4x_2+1)<0$.
*CKE, matura – poziom rozszerzony, maj 2017*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 288 [R]
**Treść zadania:**
Wykres funkcji liniowej $f$ przechodzi przez punkt $A=(-1, 3)$ i ma dokładnie jeden punkt wspólny z parabolą o równaniu $y=-x^2$. Znajdź wzór funkcji $f$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 289
**Treść zadania:**
Liczby $x_1=5+\sqrt{23}$ i $x_2=5-\sqrt{23}$ są rozwiązaniami równania $x^2-(p^2+q^2)x+(p+q)=0$ z niewiadomą $x$. Oblicz wartości $p$ i $q$.
*CKE, matura – poziom rozszerzony, maj 2008*

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 290 [R]
**Treść zadania:**
Funkcja $f$ określona jest wzorem $f(x)=\sqrt{(x-p-1)(x+p+3)}$. Wyznacz te wartości parametru $p$, dla których liczba $5$ należy do dziedziny funkcji.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 291
**Treść zadania:**
Dla jakich wartości parametru $k$ dziedziną funkcji $f(x)=\sqrt{(1-k)x^2-2(k+3)x-k+3}$ jest zbiór liczb rzeczywistych?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 292
**Treść zadania:**
Wyznacz wszystkie wartości parametru $m \in \mathbb{R}$, dla których dziedziną funkcji $f$, określonej wzorem $f(x)=\frac{2x}{\sqrt{(m-5)x^2-2(m-1)x+2(m-1)}}$, jest zbiór liczb rzeczywistych.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 293 [W]
**Treść zadania:**
Dla jakich wartości parametru $a$ do zbioru rozwiązań nierówności $x^2+(a+2)x-a<0$ należą tylko ujemne liczby?

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 294 [R]
**Treść zadania:**
Wyznacz wszystkie całkowite wartości parametru $k$, dla których funkcja $f(x)=(k-2)x^2-(k+1)x-k$ ma dwa miejsca zerowe i ich iloczyn jest liczbą całkowitą.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 295
**Treść zadania:**
Znajdź wszystkie wartości parametru $m$, dla których zbiór $(1; +\infty)$ zawiera się w zbiorze rozwiązań nierówności $x^2-mx+m>0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---

### Zadanie 296* [W]
**Treść zadania:**
Zbadaj liczbę rozwiązań równania $\sqrt{2|x|-x^2}=a$ w zależności od wartości parametru $a$.

**Odpowiedź i Rozwiązanie krok po kroku:**
(rozwiązanie w książce)
**Odpowiedź:** (rozwiązanie w książce)

---
