# 2. GEOMETRIA ANALITYCZNA — PEŁNE ZESTAWIENIE ZADAŃ, ODPOWIEDZI I ROZWIĄZAŃ

> Kompletny spis teorii, przydatnych wzorów, zadań wprowadzających oraz zadań maturalnych wraz z oficjalnymi odpowiedziami i rozwiązaniami krok po kroku na podstawie podręcznika.

---

# CZĘŚĆ TEORETYCZNA — PRZYDATNE WZORY I WŁASNOŚCI

W poniższych wzorach przyjmujemy oznaczenia punktów i wektorów w kartezjańskim układzie współrzędnych:
- $A = (x_A, y_A)$, $B = (x_B, y_B)$
- $\vec{v} = [v_x, v_y]$, $\vec{u} = [u_x, u_y]$

---

## 1. Wektory

- **Współrzędne wektora o początku w punkcie $A$ i końcu w punkcie $B$:**
  $$\vec{AB} = [x_B - x_A, y_B - y_A]$$

- **Równość wektorów:**
  $$\vec{v} = \vec{u} \iff v_x = u_x \land v_y = u_y$$

- **Długość wektora $\vec{v}$:**
  $$|\vec{v}| = \sqrt{v_x^2 + v_y^2}$$

- **Mnożenie wektora przez liczbę (skalar) $k \in \mathbb{R}$:**
  - *Analitycznie:*
    $$k \cdot \vec{v} = [k \cdot v_x, k \cdot v_y]$$
  - *Geometrycznie:* Iloczynem niezerowego wektora $\vec{v}$ przez liczbę $k \ne 0$ nazywamy wektor $\vec{w}$ spełniający warunki:
    1. $|\vec{w}| = |k| \cdot |\vec{v}|$
    2. jeżeli $k > 0$, to zwrot wektora $\vec{w}$ jest zgodny ze zwrotem wektora $\vec{v}$; jeżeli $k < 0$, to zwrot wektora $\vec{w}$ jest przeciwny do zwrotu wektora $\vec{v}$.

- **Dodawanie wektorów:**
  - *Analitycznie:*
    $$\vec{v} + \vec{u} = [v_x + u_x, v_y + u_y]$$
  - *Geometrycznie:* Konstrukcja sumy wektorów metodą trójkąta lub równoległoboku (wektor $\vec{w}$ jest sumą wektorów $\vec{v}$ i $\vec{u}$).

---

## 2. Odcinek

- **Długość odcinka $AB$:**
  $$|AB| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$

- **Współrzędne środka $S = (x_S, y_S)$ odcinka $AB$:**
  $$x_S = \frac{x_A + x_B}{2}, \quad y_S = \frac{y_A + y_B}{2}$$

---

## 3. Równanie prostej przechodzącej przez dwa punkty $A$ oraz $B$

Jeżeli $x_B \ne x_A$, to prosta przechodząca przez punkty $A$ i $B$ określona jest wzorem:
$$y - y_A = a(x - x_A), \quad \text{gdzie } a = \frac{y_B - y_A}{x_B - x_A}$$

---

## 4. Równanie kierunkowe prostej

$$y = ax + b$$

- **Kąt nachylenia:** Jeśli prosta $y = ax + b$ jest nachylona do dodatniej półosi $Ox$ pod kątem $\alpha$, to współczynnik kierunkowy wynosi:
  $$a = \operatorname{tg}\alpha$$

- **Warunek równoległości:**  
  Proste o równaniach $y = ax + b$ i $y = cx + d$ są równoległe wtedy i tylko wtedy, gdy ich współczynniki kierunkowe są równe:
  $$a = c$$

- **Warunek prostopadłości:**  
  Proste o równaniach $y = ax + b$ i $y = cx + d$ są prostopadłe wtedy i tylko wtedy, gdy iloczyn ich współczynników kierunkowych jest równy $-1$:
  $$a \cdot c = -1 \iff c = -\frac{1}{a}$$

---

## 5. Postać ogólna równania prostej

$$Ax + By + C = 0, \quad \text{gdzie } A^2 + B^2 > 0$$

- **Przejście do postaci kierunkowej:**  
  Jeżeli $B \ne 0$, to równanie ogólne można sprowadzić do postaci kierunkowej:
  $$By = -Ax - C \implies y = -\frac{A}{B}x - \frac{C}{B}$$
  *Przykład:* $3x + 5y - 10 = 0 \implies 5y = -3x + 10 \implies y = -\frac{3}{5}x + 2$.

- **Proste pionowe:** Każdą prostą na płaszczyźnie można opisać za pomocą równania ogólnego. W szczególności prosta o równaniu $x + C = 0$ (czyli $x = -C$) jest prostą pionową, prostopadłą do osi $Ox$ i równoległą do osi $Oy$ (np. prosta $x + 5 = 0 \iff x = -5$).

- **Warunek równoległości w postaci ogólnej:**  
  Proste o równaniach $A_1 x + B_1 y + C_1 = 0$ i $A_2 x + B_2 y + C_2 = 0$ są równoległe wtedy i tylko wtedy, gdy:
  $$A_1 B_2 - A_2 B_1 = 0$$
  *W szczególności:* Dla dowolnej liczby $D$, prosta $Ax + By + D = 0$ jest równoległa do prostej $Ax + By + C = 0$.

- **Warunek prostopadłości w postaci ogólnej:**  
  Proste o równaniach $A_1 x + B_1 y + C_1 = 0$ i $A_2 x + B_2 y + C_2 = 0$ są prostopadłe wtedy i tylko wtedy, gdy:
  $$A_1 A_2 + B_1 B_2 = 0$$
  *W szczególności:* Dla dowolnej liczby $D$, prosta $Bx - Ay + D = 0$ (a także $-Bx + Ay + D = 0$) jest prostopadła do prostej $Ax + By + C = 0$.

---

## 6. Prosta prostopadła do wektora (wektor normalny)

Dla dowolnej liczby $C$, prosta o równaniu:
$$Ax + By + C = 0$$
jest prostopadła do wektora $\vec{w} = [A, B]$. Wektor ten nazywamy wektorem normalnym prostej.

---

## 7. Odległość punktu od prostej

Odległość $d$ punktu $P = (x_P, y_P)$ od prostej o równaniu ogólnym $Ax + By + C = 0$ wyraża się wzorem:
$$d = \frac{|A x_P + B y_P + C|}{\sqrt{A^2 + B^2}}$$

---

## 8. Równanie okręgu

Równanie okręgu o środku $S = (a, b)$ i promieniu $r > 0$:
$$(x - a)^2 + (y - b)^2 = r^2$$

---

## 9. Pole trójkąta

Pole trójkąta o wierzchołkach $A, B, C$, rozpiętego przez wektory $\vec{v} = \vec{AB} = [v_x, v_y]$ i $\vec{u} = \vec{AC} = [u_x, u_y]$ mające wspólny początek w punkcie $A$:
$$P = \frac{1}{2} |v_x u_y - v_y u_x|$$

---


<!-- SEKCJA ZADAŃ 1 -->
# GEOMETRIA ANALITYCZNA

---

## CZĘŚĆ TEORETYCZNA

> **UWAGA:** W poniższych wzorach przyjmujemy, że:
> - Punkty: $A = (x_A, y_A)$ oraz $B = (x_B, y_B)$,
> - Wektory: $\vec{v} = [v_X, v_Y]$ oraz $\vec{u} = [u_X, u_Y]$.

---

### 1. Wektory

* **Współrzędne wektora $\vec{AB}$:**
  $$\vec{AB} = [x_B - x_A,\; y_B - y_A]$$
  Współrzędne wektora otrzymujemy, odejmując współrzędne początku wektora ($A$) od współrzędnych jego końca ($B$).

* **Równość wektorów $\vec{v}$ i $\vec{u}$:**
  $$\vec{v} = \vec{u} \iff (v_X = u_X \quad \land \quad v_Y = u_Y)$$
  Dwa wektory są równe wtedy i tylko wtedy, gdy ich odpowiednie współrzędne są równe.

* **Długość wektora $\vec{v}$:**
  $$|\vec{v}| = \sqrt{v_X^2 + v_Y^2}$$

* **Mnożenie wektora $\vec{v}$ przez liczbę $k \in \mathbb{R}$:**
  * **Analitycznie:**
    $$k \cdot \vec{v} = [k \cdot v_X,\; k \cdot v_Y]$$
  * **Geometrycznie:**
    Iloczynem niezerowego wektora $\vec{v}$ przez liczbę $k \neq 0$ nazywamy wektor $\vec{w} = k \cdot \vec{v}$ spełniający warunki:
    1. $|\vec{w}| = |k| \cdot |\vec{v}|$ (długość nowego wektora jest równa iloczynowi wartości bezwzględnej liczby $k$ i długości wektora $\vec{v}$),
    2. Jeżeli $k > 0$, to zwrot wektora $\vec{w}$ jest **zgodny** ze zwrotem wektora $\vec{v}$,
    3. Jeżeli $k < 0$, to zwrot wektora $\vec{w}$ jest **przeciwny** do zwrotu wektora $\vec{v}$.
    *(Dla $k = 0$ lub $\vec{v} = \vec{0}$ otrzymujemy wektor zerowy $\vec{0} = [0, 0]$)*.

* **Dodawanie wektorów $\vec{v}$ i $\vec{u}$:**
  * **Analitycznie:**
    $$\vec{v} + \vec{u} = [v_X + u_X,\; v_Y + u_Y]$$
  * **Geometrycznie (reguła trójkąta):**
    Aby dodać wektory $\vec{v}$ i $\vec{u}$, zaczepiamy początek wektora $\vec{u}$ w końcu wektora $\vec{v}$. Wektor $\vec{w}$, którego początkiem jest początek wektora $\vec{v}$, a końcem koniec wektora $\vec{u}$, jest sumą tych wektorów: $\vec{w} = \vec{v} + \vec{u}$.

---

### 2. Odcinek

* **Długość odcinka $AB$:**
  $$|AB| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$
  *(Długość odcinka $AB$ jest równa długości wektora $\vec{AB}$)*.

* **Współrzędne środka $S = (x_S, y_S)$ odcinka $AB$:**
  $$x_S = \frac{x_A + x_B}{2}, \qquad y_S = \frac{y_A + y_B}{2}$$
  Środek odcinka jest średnią arytmetyczną współrzędnych jego końców.

---

### 3. Równanie prostej przechodzącej przez dane punkty $A$ oraz $B$

* Jeżeli $x_B \neq x_A$, to prosta przechodząca przez punkty $A$ i $B$ określona jest wzorem:
  $$y - y_A = a(x - x_A), \qquad \text{gdzie } a = \frac{y_B - y_A}{x_B - x_A}$$
* Jeżeli $x_A = x_B$, prosta jest pionowa (prostopadła do osi $Ox$, równoległa do osi $Oy$) i jej równanie ma postać:
  $$x = x_A$$

---

### 4. Równanie kierunkowe prostej: $y = ax + b$

* **Współczynnik kierunkowy $a$:**
  Jeśli prosta $y = ax + b$ jest nachylona do dodatniej półosi osi $Ox$ pod kątem $\alpha$ (gdzie $\alpha \in [0^\circ, 180^\circ) \setminus \{90^\circ\}$), to:
  $$\operatorname{tg}\alpha = a$$
* **Wyraz wolny $b$:**
  Punkt przecięcia prostej z osią $Oy$ to $(0, b)$.
* **Warunek równoległości prostych w postaci kierunkowej:**
  Proste o równaniach $y = ax + b$ oraz $y = cx + d$ są równoległe wtedy i tylko wtedy, gdy ich współczynniki kierunkowe są równe:
  $$k \parallel l \iff a = c$$
* **Warunek prostopadłości prostych w postaci kierunkowej:**
  Proste o równaniach $y = ax + b$ oraz $y = cx + d$ są prostopadłe wtedy i tylko wtedy, gdy iloczyn ich współczynników kierunkowych jest równy $-1$:
  $$k \perp l \iff a \cdot c = -1 \iff c = -\frac{1}{a}$$

---

### 5. Postać ogólna równania prostej: $Ax + By + C = 0$ ($A^2 + B^2 > 0$)

* **Przejście z postaci ogólnej do kierunkowej:**
  Jeżeli $B \neq 0$, to równanie $Ax + By + C = 0$ można sprowadzić do postaci kierunkowej:
  $$By = -Ax - C \implies y = -\frac{A}{B}x - \frac{C}{B}$$
  *Przykład:* Aby sprowadzić równanie $3x + 5y - 10 = 0$ do postaci kierunkowej, przenosimy (zmieniając znak) składniki $3x$ oraz $-10$ na drugą stronę równania:
  $$5y = -3x + 10$$
  a następnie obie strony otrzymanego równania dzielimy przez 5:
  $$y = -\frac{3}{5}x + 2$$
* **Uniwersalność postaci ogólnej:**
  Każdą prostą na płaszczyźnie można opisać za pomocą równania ogólnego. W szczególności prosta pionowa nie ma postaci kierunkowej, ale posiada postać ogólną $x + C = 0$ (czyli $x = -C$), która jest równaniem prostej równoległej do osi $Oy$ przecinającej oś $Ox$ w punkcie $(-C, 0)$.
  *Przykład:* Prosta o równaniu $x + 5 = 0$, czyli $x = -5$, jest równoległa do osi $Oy$ i przecina oś $Ox$ w punkcie $(-5, 0)$.
* **Warunki równoległości prostych w postaci ogólnej:**
  Proste o równaniach $A_1x + B_1y + C_1 = 0$ oraz $A_2x + B_2y + C_2 = 0$ są równoległe, gdy:
  $$A_1B_2 - A_2B_1 = 0$$
  *W szczególności:* Dla dowolnej liczby $D$, prosta $Ax + By + D = 0$ jest równoległa do prostej $Ax + By + C = 0$.
* **Warunki prostopadłości prostych w postaci ogólnej:**
  Proste o równaniach $A_1x + B_1y + C_1 = 0$ oraz $A_2x + B_2y + C_2 = 0$ są prostopadłe, gdy:
  $$A_1A_2 + B_1B_2 = 0$$
  *W szczególności:* Dla dowolnej liczby $D$, prosta $Bx - Ay + D = 0$ (a także prosta $-Bx + Ay + D = 0$) jest prostopadła do prostej $Ax + By + C = 0$.

---

### 6. Prosta prostopadła do wektora (wektor normalny)

* Dla dowolnej liczby $C$, prosta o równaniu:
  $$Ax + By + C = 0$$
  jest prostopadła do wektora:
  $$\vec{w} = [A, B]$$
  Wektor $\vec{w} = [A, B]$ nazywamy **wektorem normalnym** prostej.

---

### 7. Odległość punktu od prostej

* Odległość $d$ punktu $P = (x_P, y_P)$ od prostej $k$ o równaniu ogólnym $Ax + By + C = 0$ wyraża się wzorem:
  $$d(P, k) = \frac{|A x_P + B y_P + C|}{\sqrt{A^2 + B^2}}$$

---

### 8. Równanie okręgu

* **Postać kanoniczna:**
  Równanie okręgu o środku $S = (a, b)$ i promieniu $r > 0$:
  $$(x - a)^2 + (y - b)^2 = r^2$$
* **Postać ogólna:**
  Po rozwinięciu kwadratów:
  $$x^2 - 2ax + a^2 + y^2 - 2by + b^2 - r^2 = 0 \iff x^2 + y^2 - 2ax - 2by + c = 0$$
  gdzie $c = a^2 + b^2 - r^2$, przy założeniu, że $a^2 + b^2 - c > 0$ (wtedy $r = \sqrt{a^2 + b^2 - c}$).

---

### 9. Pole trójkąta

* Pole trójkąta rozpiętego przez wektory $\vec{v} = [v_X, v_Y]$ oraz $\vec{u} = [u_X, u_Y]$ o wspólnym początku:
  $$P = \frac{1}{2} \cdot |v_X u_Y - v_Y u_X|$$
* Jeżeli wierzchołkami trójkąta są punkty $A = (x_A, y_A)$, $B = (x_B, y_B)$ i $C = (x_C, y_C)$, to przyjmując $\vec{AB} = [x_B - x_A,\; y_B - y_A]$ oraz $\vec{AC} = [x_C - x_A,\; y_C - y_A]$, otrzymujemy wzór:
  $$P_{\triangle ABC} = \frac{1}{2} \cdot |(x_B - x_A)(y_C - y_A) - (y_B - y_A)(x_C - x_A)|$$

---

## ZADANIA WPROWADZAJĄCE (2.1 – 2.34)

---

### Zadanie 2.1
**Treść zadania:**
Dane równanie prostej zapisz w postaci ogólnej i (o ile to możliwe) w postaci kierunkowej:
a) $4x = 2y + 5$;
b) $12y = 72$;
c) $7x = 8$.

**Odpowiedź i Rozwiązanie krok po kroku:**

* **Podpunkt a)** $4x = 2y + 5$
  1. **Postać ogólna ($Ax + By + C = 0$):**
     Przenosimy wszystkie wyrazy na lewą stronę:
     $$4x - 2y - 5 = 0$$
  2. **Postać kierunkowa ($y = ax + b$):**
     Wyznaczamy zmienną $y$:
     $$2y = 4x - 5 \implies y = 2x - \frac{5}{2} = 2x - 2{,}5$$
  *Odpowiedź a):* Postać ogólna: $4x - 2y - 5 = 0$; postać kierunkowa: $y = 2x - 2{,}5$.

* **Podpunkt b)** $12y = 72$
  1. **Postać ogólna:**
     $$12y - 72 = 0 \iff y - 6 = 0$$
     (obie wersje są poprawne, w formie nieskróconej $12y - 72 = 0$ lub unormowanej $y - 6 = 0$).
  2. **Postać kierunkowa:**
     Dzielimy obie strony przez 12:
     $$y = 6 \quad (\text{czyli } y = 0x + 6)$$
  *Odpowiedź b):* Postać ogólna: $y - 6 = 0$ (lub $12y - 72 = 0$); postać kierunkowa: $y = 6$.

* **Podpunkt c)** $7x = 8$
  1. **Postać ogólna:**
     $$7x - 8 = 0 \iff x - \frac{8}{7} = 0$$
  2. **Postać kierunkowa:**
     Prosta $x = \frac{8}{7}$ jest prostą pionową (prostopadłą do osi $Ox$). Dla takiej prostej kąt nachylenia $\alpha = 90^\circ$, a $\operatorname{tg} 90^\circ$ nie istnieje. Zatem prosta ta **nie posiada postaci kierunkowej**.
  *Odpowiedź c):* Postać ogólna: $7x - 8 = 0$; postać kierunkowa: brak (nie istnieje).

---

### Zadanie 2.2
**Treść zadania:**
Równanie $y = 0{,}25x - 1{,}5$ zapisz w postaci $Ax + By + C = 0$ tak, aby:
a) [R] współczynnik $A$ był równy 3,
b) [R] współczynnik $B$ był równy 2,
c) współczynnik $C$ był równy $-6$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Przekształćmy równanie wyjściowe do bazowej postaci ogólnej:
$$y = 0{,}25x - 1{,}5 \iff 0{,}25x - y - 1{,}5 = 0$$
Mnożąc obustronnie przez 4, otrzymujemy postać o współczynnikach całkowitych:
$$x - 4y - 6 = 0$$
Każde równanie postaci $k \cdot (x - 4y - 6) = 0$ dla $k \neq 0$ opisuje tę samą prostą:
$$kx - 4ky - 6k = 0$$
gdzie $A = k$, $B = -4k$, $C = -6k$.

* **Podpunkt a) Współczynnik $A = 3$:**
  Przyjmujemy $A = k = 3$.
  Wtedy:
  $$B = -4 \cdot 3 = -12, \qquad C = -6 \cdot 3 = -18$$
  Równanie ma postać:
  $$3x - 12y - 18 = 0$$

* **Podpunkt b) Współczynnik $B = 2$:**
  Mamy warunek $B = -4k = 2 \implies k = -\frac{2}{4} = -0{,}5$.
  Obliczamy pozostałe współczynniki:
  $$A = k = -0{,}5, \qquad C = -6 \cdot (-0{,}5) = 3$$
  Równanie ma postać:
  $$-0{,}5x + 2y + 3 = 0$$

* **Podpunkt c) Współczynnik $C = -6$:**
  Mamy warunek $C = -6k = -6 \implies k = 1$.
  Wtedy:
  $$A = 1, \qquad B = -4$$
  Równanie ma postać:
  $$x - 4y - 6 = 0$$

*Odpowiedź:*
a) $3x - 12y - 18 = 0$;
b) $-0{,}5x + 2y + 3 = 0$;
c) $x - 4y - 6 = 0$.

---

### Zadanie 2.3
**Treść zadania:**
Ustal, czy dane równania opisują parę prostych równoległych:
a) [R] $y = 7x + 5$ i $y = -7x + 5$;
b) $y = -7x - 5$ i $y = -7x + 5$;
c) [R] $y = -0{,}25$ i $y = 4$;
d) $x - 4 = 0$ i $x = -2$;
e) [R] $-4x + 6y + 1 = 0$ i $6x - 9y + 3 = 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Dwie proste $k$ i $l$ są równoległe ($k \parallel l$):
- w postaci kierunkowej $y = a_1x + b_1$ oraz $y = a_2x + b_2$ wtedy i tylko wtedy, gdy $a_1 = a_2$;
- w postaci ogólnej $A_1x + B_1y + C_1 = 0$ oraz $A_2x + B_2y + C_2 = 0$ wtedy i tylko wtedy, gdy $A_1B_2 - A_2B_1 = 0$.

* **Podpunkt a)** $y = 7x + 5$ i $y = -7x + 5$
  $$a_1 = 7, \qquad a_2 = -7$$
  Ponieważ $a_1 \neq a_2$ ($7 \neq -7$), proste **nie są równoległe** (przecinają się w punkcie $(0, 5)$).

* **Podpunkt b)** $y = -7x - 5$ i $y = -7x + 5$
  $$a_1 = -7, \qquad a_2 = -7$$
  Ponieważ $a_1 = a_2 = -7$, proste **są równoległe** (są rozłączne, bo $b_1 = -5 \neq 5 = b_2$).

* **Podpunkt c)** $y = -0{,}25$ i $y = 4$
  Są to proste poziome, równoległe do osi $Ox$:
  $$a_1 = 0, \qquad a_2 = 0$$
  Ponieważ $a_1 = a_2 = 0$, proste **są równoległe**.

* **Podpunkt d)** $x - 4 = 0 \iff x = 4$ oraz $x = -2$
  Oba równania opisują proste pionowe, czyli równoległe do osi $Oy$. Dwie proste prostopadłe do osi $Ox$ są wzajemnie równoległe. Zatem proste **są równoległe**.

* **Podpunkt e)** $-4x + 6y + 1 = 0$ oraz $6x - 9y + 3 = 0$
  Sprawdzamy warunek wyznacznikowy:
  $$A_1 B_2 - A_2 B_1 = (-4) \cdot (-9) - 6 \cdot 6 = 36 - 36 = 0$$
  Sprowadźmy także do postaci kierunkowej:
  $$6y = 4x - 1 \implies y = \frac{2}{3}x - \frac{1}{6} \implies a_1 = \frac{2}{3}$$
  $$-9y = -6x - 3 \implies y = \frac{2}{3}x + \frac{1}{3} \implies a_2 = \frac{2}{3}$$
  Współczynniki kierunkowe są równe ($a_1 = a_2 = \frac{2}{3}$), więc proste **są równoległe**.

*Odpowiedź:*
a) Nie; b) Tak; c) Tak; d) Tak; e) Tak.

---

### Zadanie 2.4
**Treść zadania:**
Ustal, czy dane równania opisują parę prostych prostopadłych:
a) [R] $y = 5x + 4$ i $y = 0{,}2x + 4$;
b) $y = -0{,}25x$ i $y = 4x + 1$;
c) $y = 4$ i $x = -2$;
d) [R] $y = (1 - \sqrt{2})x$ i $y = (1 + \sqrt{2})x$;
e) [R] $4x - 6y + 1 = 0$ i $9x + 6y + 3 = 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Dwie proste $k$ i $l$ są prostopadłe ($k \perp l$):
- w postaci kierunkowej: $a_1 \cdot a_2 = -1$;
- w postaci ogólnej: $A_1A_2 + B_1B_2 = 0$;
- para prosta pozioma ($y = c$) i prosta pionowa ($x = d$) jest zawsze prostopadła.

* **Podpunkt a)** $y = 5x + 4$ i $y = 0{,}2x + 4$
  $$a_1 = 5, \qquad a_2 = 0{,}2 = \frac{1}{5}$$
  $$a_1 \cdot a_2 = 5 \cdot \frac{1}{5} = 1 \neq -1$$
  Iloczyn wynosi $1$, a nie $-1$. Proste **nie są prostopadłe**.

* **Podpunkt b)** $y = -0{,}25x$ i $y = 4x + 1$
  $$a_1 = -0{,}25 = -\frac{1}{4}, \qquad a_2 = 4$$
  $$a_1 \cdot a_2 = -\frac{1}{4} \cdot 4 = -1$$
  Warunek jest spełniony. Proste **są prostopadłe**.

* **Podpunkt c)** $y = 4$ i $x = -2$
  Prosta $y = 4$ jest równoległa do osi $Ox$ (pozioma), a prosta $x = -2$ jest prostopadła do osi $Ox$ (pionowa). Ponieważ osie układu współrzędnych są wzajemnie prostopadłe, proste te również **są prostopadłe**.

* **Podpunkt d)** $y = (1 - \sqrt{2})x$ i $y = (1 + \sqrt{2})x$
  $$a_1 = 1 - \sqrt{2}, \qquad a_2 = 1 + \sqrt{2}$$
  Korzystamy ze wzoru skróconego mnożenia na różnicę kwadratów:
  $$a_1 \cdot a_2 = (1 - \sqrt{2})(1 + \sqrt{2}) = 1^2 - (\sqrt{2})^2 = 1 - 2 = -1$$
  Iloczyn wynosi $-1$. Proste **są prostopadłe**.

* **Podpunkt e)** $4x - 6y + 1 = 0$ i $9x + 6y + 3 = 0$
  Sprawdzamy warunek w postaci ogólnej:
  $$A_1A_2 + B_1B_2 = 4 \cdot 9 + (-6) \cdot 6 = 36 - 36 = 0$$
  (Również ze współczynników kierunkowych: $a_1 = \frac{4}{6} = \frac{2}{3}$, $a_2 = -\frac{9}{6} = -\frac{3}{2}$, stąd $a_1 a_2 = \frac{2}{3} \cdot \left(-\frac{3}{2}\right) = -1$).
  Warunek jest spełniony. Proste **są prostopadłe**.

*Odpowiedź:*
a) Nie; b) Tak; c) Tak; d) Tak; e) Tak.

---

### Zadanie 2.5 [R]
**Treść zadania:**
Wyznacz współrzędne punktów wspólnych prostych o równaniach:
a) $y = 2x + 4$ i $y = -x + 7$;
b) $y = 4x - 3$ i $y = 4x + 2$;
c) $x = -2$ i $y = -5$;
d) $4x + 2y - 1 = 0$ i $12x = 3 - 6y$.

**Odpowiedź i Rozwiązanie krok po kroku:**

* **Podpunkt a)**
  Rozwiązujemy układ równań:
  $$\begin{cases} y = 2x + 4 \\ y = -x + 7 \end{cases}$$
  Przyrównujemy prawe strony:
  $$2x + 4 = -x + 7 \implies 3x = 3 \implies x = 1$$
  Podstawiamy do pierwszego równania:
  $$y = 2 \cdot 1 + 4 = 6$$
  *Odpowiedź a):* Proste przecinają się w punkcie $(1, 6)$.

* **Podpunkt b)**
  $$\begin{cases} y = 4x - 3 \\ y = 4x + 2 \end{cases}$$
  Przyrównujemy prawe strony:
  $$4x - 3 = 4x + 2 \implies -3 = 2 \quad (\text{sprzeczność})$$
  Proste mają jednakowy współczynnik kierunkowy ($a_1 = a_2 = 4$) i różne wyrazy wolne, są więc równoległe i rozłączne.
  *Odpowiedź b):* Brak punktów wspólnych (układ sprzeczny, zbiór pusty $\emptyset$).

* **Podpunkt c)**
  $$\begin{cases} x = -2 \\ y = -5 \end{cases}$$
  Współrzędne punktu przecięcia prostej pionowej $x = -2$ i poziomej $y = -5$ są podane bezpośrednio w równaniach.
  *Odpowiedź c):* Punkt wspólny to $(-2, -5)$.

* **Podpunkt d)**
  $$\begin{cases} 4x + 2y - 1 = 0 \\ 12x = 3 - 6y \end{cases}$$
  Przekształcamy drugie równanie do postaci ogólnej:
  $$12x + 6y - 3 = 0$$
  Dzielimy drugie równanie obustronnie przez 3:
  $$4x + 2y - 1 = 0$$
  Oba równania są identyczne. Oznacza to, że proste pokrywają się.
  *Odpowiedź d):* Nieskończenie wiele punktów wspólnych — wszystkie punkty należące do prostej $4x + 2y - 1 = 0$ (czyli $y = -2x + 0{,}5$).

---

### Zadanie 2.6 [R]
**Treść zadania:**
Znajdź równanie prostej przechodzącej przez punkty $A$ i $B$, jeżeli:
a) $A = (0, 0)$, $B = (1, 2)$;
b) $A = (-1, -4)$, $B = (1, 2)$;
c) $A = (-4, 2)$, $B = (1, 2)$;
d) $A = (1, -4)$, $B = (1, 2)$.

**Odpowiedź i Rozwiązanie krok po kroku:**

* **Podpunkt a)** $A = (0, 0)$, $B = (1, 2)$
  Współczynnik kierunkowy:
  $$a = \frac{y_B - y_A}{x_B - x_A} = \frac{2 - 0}{1 - 0} = 2$$
  Prosta przechodzi przez początek układu $(0, 0)$, więc $b = 0$.
  *Odpowiedź a):* $y = 2x$ (w postaci ogólnej: $2x - y = 0$).

* **Podpunkt b)** $A = (-1, -4)$, $B = (1, 2)$
  $$a = \frac{2 - (-4)}{1 - (-1)} = \frac{6}{2} = 3$$
  Korzystamy z równania $y - y_B = a(x - x_B)$:
  $$y - 2 = 3(x - 1) \implies y = 3x - 3 + 2 \implies y = 3x - 1$$
  *Odpowiedź b):* $y = 3x - 1$ (w postaci ogólnej: $3x - y - 1 = 0$).

* **Podpunkt c)** $A = (-4, 2)$, $B = (1, 2)$
  Zauważmy, że rzędne punktów są równe: $y_A = y_B = 2$.
  Współczynnik kierunkowy:
  $$a = \frac{2 - 2}{1 - (-4)} = \frac{0}{5} = 0$$
  Jest to prosta pozioma:
  $$y = 2$$
  *Odpowiedź c):* $y = 2$ (w postaci ogólnej: $y - 2 = 0$).

* **Podpunkt d)** $A = (1, -4)$, $B = (1, 2)$
  Zauważmy, że odcięte obu punktów są jednakowe: $x_A = x_B = 1$.
  Ponieważ $x_B - x_A = 0$, nie można obliczyć współczynnika kierunkowego (dzielenie przez zero). Prosta jest pionowa.
  *Odpowiedź d):* $x = 1$ (w postaci ogólnej: $x - 1 = 0$).

---

### Zadanie 2.7 [W]
**Treść zadania:**
Zbadaj, czy punkty $A, B, C$ są współliniowe, jeśli:
a) $A = (-4, -6)$, $B = (-1, 2)$, $C = (5, 6)$;
b) $A = (-5, -2)$, $B = (2, -1)$, $C = (8, 0)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Trzy punkty $A, B, C$ są współliniowe wtedy i tylko wtedy, gdy wektory $\vec{AB}$ i $\vec{AC}$ są równoległe (współliniowe), co jest równoważne warunkowi, że wyznacznik par wektorów wynosi $0$:
$$v_X u_Y - v_Y u_X = 0$$
(lub równoważnie: współczynniki kierunkowe prostych $AB$ i $BC$ są równe: $a_{AB} = a_{BC}$).

* **Podpunkt a)** $A = (-4, -6)$, $B = (-1, 2)$, $C = (5, 6)$
  Wyznaczamy współrzędne wektorów:
  $$\vec{AB} = [-1 - (-4),\; 2 - (-6)] = [3, 8]$$
  $$\vec{AC} = [5 - (-4),\; 6 - (-6)] = [9, 12]$$
  Sprawdzamy warunek równoległości wektorów:
  $$v_X u_Y - v_Y u_X = 3 \cdot 12 - 8 \cdot 9 = 36 - 72 = -36 \neq 0$$
  Współczynniki kierunkowe:
  $$a_{AB} = \frac{8}{3}, \qquad a_{BC} = \frac{6 - 2}{5 - (-1)} = \frac{4}{6} = \frac{2}{3} \neq \frac{8}{3}$$
  *Odpowiedź a):* Punkty $A, B, C$ **nie są współliniowe** (tworzą trójkąt o polu $\frac{1}{2}|-36| = 18$).

* **Podpunkt b)** $A = (-5, -2)$, $B = (2, -1)$, $C = (8, 0)$
  Wyznaczamy wektory:
  $$\vec{AB} = [2 - (-5),\; -1 - (-2)] = [7, 1]$$
  $$\vec{BC} = [8 - 2,\; 0 - (-1)] = [6, 1]$$
  $$\vec{AC} = [8 - (-5),\; 0 - (-2)] = [13, 2]$$
  Sprawdzamy wyznacznik wektorów $\vec{AB}$ i $\vec{AC}$:
  $$7 \cdot 2 - 1 \cdot 13 = 14 - 13 = 1 \neq 0$$
  Współczynniki kierunkowe:
  $$a_{AB} = \frac{1}{7}, \qquad a_{BC} = \frac{1}{6} \neq \frac{1}{7}$$
  *Odpowiedź b):* Punkty $A, B, C$ **nie są współliniowe**.

---

### Zadanie 2.8 [R]
**Treść zadania:**
Wyznacz równanie prostej równoległej do prostej $k$ i przechodzącej przez punkt $P = (2, 4)$, jeżeli prosta $k$ określona jest równaniem:
a) $y = 3x - 5$;
b) $y = -2$;
c) $x = -2$;
d) $2x + 3y + 7 = 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**

* **Podpunkt a)** $y = 3x - 5$
  Współczynnik kierunkowy prostej $k$ wynosi $a = 3$. Prosta równoległa ma ten sam współczynnik $a = 3$ i przechodzi przez $P(2, 4)$:
  $$y - 4 = 3(x - 2) \implies y = 3x - 6 + 4 \implies y = 3x - 2$$
  *Odpowiedź a):* $y = 3x - 2$ (w postaci ogólnej: $3x - y - 2 = 0$).

* **Podpunkt b)** $y = -2$
  Prosta $k$ jest pozioma ($a = 0$). Prosta do niej równoległa przechodząca przez $P(2, 4)$ również musi być pozioma:
  $$y = 4$$
  *Odpowiedź b):* $y = 4$ (w postaci ogólnej: $y - 4 = 0$).

* **Podpunkt c)** $x = -2$
  Prosta $k$ jest pionowa. Prosta równoległa przechodząca przez $P(2, 4)$ ma równanie:
  $$x = 2$$
  *Odpowiedź c):* $x = 2$ (w postaci ogólnej: $x - 2 = 0$).

* **Podpunkt d)** $2x + 3y + 7 = 0$
  Prosta równoległa w postaci ogólnej ma te same współczynniki przy $x$ i $y$:
  $$2x + 3y + C = 0$$
  Wstawiamy współrzędne punktu $P(2, 4)$:
  $$2(2) + 3(4) + C = 0 \implies 4 + 12 + C = 0 \implies C = -16$$
  *Odpowiedź d):* $2x + 3y - 16 = 0$ (w postaci kierunkowej: $y = -\frac{2}{3}x + \frac{16}{3}$).

---

### Zadanie 2.9 [R]
**Treść zadania:**
Wyznacz równanie prostej prostopadłej do prostej $k$ i przechodzącej przez punkt $P = (2, 4)$, jeżeli prosta $k$ określona jest równaniem:
a) $y = 3x - 5$;
b) $y = -2$;
c) $x = -2$;
d) $2x + 3y + 7 = 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**

* **Podpunkt a)** $y = 3x - 5$
  Współczynnik kierunkowy prostej $k$ to $a_k = 3$. Współczynnik prostej prostopadłej:
  $$a_\perp = -\frac{1}{a_k} = -\frac{1}{3}$$
  Równanie prostej przechodzącej przez $P(2, 4)$:
  $$y - 4 = -\frac{1}{3}(x - 2) \implies y = -\frac{1}{3}x + \frac{2}{3} + 4 \implies y = -\frac{1}{3}x + \frac{14}{3}$$
  *Odpowiedź a):* $y = -\frac{1}{3}x + \frac{14}{3}$ (w postaci ogólnej: $x + 3y - 14 = 0$).

* **Podpunkt b)** $y = -2$
  Prosta $k$ jest pozioma, więc prosta do niej prostopadła przechodząca przez $P(2, 4)$ jest pionowa:
  $$x = 2$$
  *Odpowiedź b):* $x = 2$ (w postaci ogólnej: $x - 2 = 0$).

* **Podpunkt c)** $x = -2$
  Prosta $k$ jest pionowa, więc prosta do niej prostopadła przechodząca przez $P(2, 4)$ jest pozioma:
  $$y = 4$$
  *Odpowiedź c):* $y = 4$ (w postaci ogólnej: $y - 4 = 0$).

* **Podpunkt d)** $2x + 3y + 7 = 0$
  Prosta prostopadła do $Ax + By + C = 0$ ma postać ogólną $Bx - Ay + D = 0$:
  $$3x - 2y + D = 0$$
  Podstawiamy współrzędne punktu $P(2, 4)$:
  $$3(2) - 2(4) + D = 0 \implies 6 - 8 + D = 0 \implies D = 2$$
  *Odpowiedź d):* $3x - 2y + 2 = 0$ (w postaci kierunkowej: $y = \frac{3}{2}x + 1$).

---

### Zadanie 2.10
**Treść zadania:**
Wyznacz równanie prostej nachylonej do osi $Ox$ pod kątem o mierze $\alpha$ i przechodzącej przez punkt $P = (2, 4)$, jeżeli:
a) [R] $\alpha = 60^\circ$;
b) $\alpha = 45^\circ$;
c) $\alpha = 135^\circ$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Współczynnik kierunkowy wynosi $a = \operatorname{tg}\alpha$. Równanie prostej wyznaczamy ze wzoru:
$$y - y_P = a(x - x_P) \implies y - 4 = a(x - 2)$$

* **Podpunkt a) $\alpha = 60^\circ$:**
  $$a = \operatorname{tg} 60^\circ = \sqrt{3}$$
  $$y - 4 = \sqrt{3}(x - 2) \implies y = \sqrt{3}x + 4 - 2\sqrt{3}$$
  *Odpowiedź a):* $y = \sqrt{3}x + 4 - 2\sqrt{3}$ (lub $\sqrt{3}x - y + 4 - 2\sqrt{3} = 0$).

* **Podpunkt b) $\alpha = 45^\circ$:**
  $$a = \operatorname{tg} 45^\circ = 1$$
  $$y - 4 = 1(x - 2) \implies y = x + 2$$
  *Odpowiedź b):* $y = x + 2$ (lub $x - y + 2 = 0$).

* **Podpunkt c) $\alpha = 135^\circ$:**
  $$a = \operatorname{tg} 135^\circ = \operatorname{tg}(180^\circ - 45^\circ) = -\operatorname{tg} 45^\circ = -1$$
  $$y - 4 = -1(x - 2) \implies y = -x + 2 + 4 \implies y = -x + 6$$
  *Odpowiedź c):* $y = -x + 6$ (lub $x + y - 6 = 0$).

---

### Zadanie 2.11
**Treść zadania:**
Oblicz długość odcinka $AB$, jeżeli:
a) [R] $A = (-3, 4)$ i $B = (0, 0)$;
b) $A = (-2, -1)$ i $B = (10, 4)$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Korzystamy ze wzoru $|AB| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.

* **Podpunkt a)** $A = (-3, 4)$ i $B = (0, 0)$
  $$|AB| = \sqrt{(0 - (-3))^2 + (0 - 4)^2} = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$
  *Odpowiedź a):* $|AB| = 5$.

* **Podpunkt b)** $A = (-2, -1)$ i $B = (10, 4)$
  $$|AB| = \sqrt{(10 - (-2))^2 + (4 - (-1))^2} = \sqrt{12^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13$$
  *Odpowiedź b):* $|AB| = 13$.

---

### Zadanie 2.12 [R]
**Treść zadania:**
Oblicz odległość punktu $A = (-2, -1)$ od prostej o równaniu:
a) $y = -0{,}5x + 3$;
b) $y = 4$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Stosujemy wzór na odległość punktu $P(x_0, y_0)$ od prostej $Ax + By + C = 0$:
$$d = \frac{|A x_0 + B y_0 + C|}{\sqrt{A^2 + B^2}}$$

* **Podpunkt a)** $y = -0{,}5x + 3$
  Sprowadzamy do postaci ogólnej:
  $$0{,}5x + y - 3 = 0 \iff x + 2y - 6 = 0$$
  Tutaj $A = 1$, $B = 2$, $C = -6$, a punkt to $A(-2, -1)$:
  $$d = \frac{|1 \cdot (-2) + 2 \cdot (-1) - 6|}{\sqrt{1^2 + 2^2}} = \frac{|-2 - 2 - 6|}{\sqrt{1 + 4}} = \frac{|-10|}{\sqrt{5}} = \frac{10}{\sqrt{5}} = \frac{10\sqrt{5}}{5} = 2\sqrt{5}$$
  *Odpowiedź a):* $d = 2\sqrt{5}$.

* **Podpunkt b)** $y = 4$
  Postać ogólna to $0x + 1y - 4 = 0$.
  $$d = \frac{|0 \cdot (-2) + 1 \cdot (-1) - 4|}{\sqrt{0^2 + 1^2}} = \frac{|-5|}{1} = 5$$
  *(Geometrycznie: odległość punktu o rzędnej $-1$ od prostej poziomej $y = 4$ wynosi $|4 - (-1)| = 5$)*.
  *Odpowiedź b):* $d = 5$.

---

### Zadanie 2.13 [W]
**Treść zadania:**
Punkty $A = (1, -2)$, $B = (4, 1)$, $C = (3, 4)$ są wierzchołkami trójkąta $ABC$. Oblicz długość wysokości tego trójkąta poprowadzonej z wierzchołka $C$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Długość wysokości $h_C$ poprowadzonej z wierzchołka $C$ jest równa odległości punktu $C$ od prostej zawierającej bok $AB$.

* **Krok 1: Równanie prostej $AB$**
  Współczynnik kierunkowy prostej $AB$:
  $$a = \frac{y_B - y_A}{x_B - x_A} = \frac{1 - (-2)}{4 - 1} = \frac{3}{3} = 1$$
  Równanie prostej $AB$:
  $$y - y_B = a(x - x_B) \implies y - 1 = 1(x - 4) \implies y = x - 3$$
  Zapisujemy w postaci ogólnej:
  $$x - y - 3 = 0$$
  gdzie $A = 1, B = -1, C_0 = -3$.

* **Krok 2: Obliczenie odległości punktu $C(3, 4)$ od prostej $AB$**
  $$h_C = d(C, \text{pr. } AB) = \frac{|1 \cdot 3 + (-1) \cdot 4 - 3|}{\sqrt{1^2 + (-1)^2}} = \frac{|3 - 4 - 3|}{\sqrt{1 + 1}} = \frac{|-4|}{\sqrt{2}} = \frac{4}{\sqrt{2}} = 2\sqrt{2}$$

* **Weryfikacja za pomocą pola trójkąta:**
  Wektory: $\vec{AB} = [4 - 1, 1 - (-2)] = [3, 3]$, $\vec{AC} = [3 - 1, 4 - (-2)] = [2, 6]$.
  Pole trójkąta ze wzoru wyznacznikowego:
  $$P = \frac{1}{2}|3 \cdot 6 - 3 \cdot 2| = \frac{1}{2}|18 - 6| = \frac{1}{2} \cdot 12 = 6$$
  Długość podstawy $|AB| = \sqrt{3^2 + 3^2} = \sqrt{18} = 3\sqrt{2}$.
  Ze wzoru na pole:
  $$P = \frac{1}{2} |AB| \cdot h_C \implies 6 = \frac{1}{2} \cdot 3\sqrt{2} \cdot h_C \implies h_C = \frac{12}{3\sqrt{2}} = \frac{4}{\sqrt{2}} = 2\sqrt{2}$$

*Odpowiedź:* Długość wysokości wynosi $2\sqrt{2}$.

---

### Zadanie 2.14
**Treść zadania:**
Dane są wektory $\vec{u} = [-3, -2]$ i $\vec{w} = [-1, 4]$. Oblicz współrzędne wektora $\vec{v}$, jeśli:
a) [R] $\vec{v} = \vec{u} + \vec{w}$;
b) $\vec{v} = -\vec{u}$;
c) [R] $\vec{v} = 5\vec{w}$;
d) $\vec{v} = 3\vec{w} - 4\vec{u}$;
e) $\vec{v} = 2(\vec{u} - 3\vec{w}) - \vec{u}$.

**Odpowiedź i Rozwiązanie krok po kroku:**

* **Podpunkt a)** $\vec{v} = \vec{u} + \vec{w}$
  $$\vec{v} = [-3 + (-1),\; -2 + 4] = [-4, 2]$$
  *Odpowiedź a):* $\vec{v} = [-4, 2]$.

* **Podpunkt b)** $\vec{v} = -\vec{u}$
  $$\vec{v} = -[-3, -2] = [3, 2]$$
  *Odpowiedź b):* $\vec{v} = [3, 2]$.

* **Podpunkt c)** $\vec{v} = 5\vec{w}$
  $$\vec{v} = 5 \cdot [-1, 4] = [5 \cdot (-1),\; 5 \cdot 4] = [-5, 20]$$
  *Odpowiedź c):* $\vec{v} = [-5, 20]$.

* **Podpunkt d)** $\vec{v} = 3\vec{w} - 4\vec{u}$
  $$3\vec{w} = 3[-1, 4] = [-3, 12]$$
  $$4\vec{u} = 4[-3, -2] = [-12, -8]$$
  $$\vec{v} = [-3 - (-12),\; 12 - (-8)] = [9, 20]$$
  *Odpowiedź d):* $\vec{v} = [9, 20]$.

* **Podpunkt e)** $\vec{v} = 2(\vec{u} - 3\vec{w}) - \vec{u}$
  Upraszczamy wyrażenie algebraicznie:
  $$\vec{v} = 2\vec{u} - 6\vec{w} - \vec{u} = \vec{u} - 6\vec{w}$$
  Obliczamy współrzędne:
  $$\vec{u} - 6\vec{w} = [-3, -2] - 6[-1, 4] = [-3, -2] - [-6, 24] = [-3 - (-6),\; -2 - 24] = [3, -26]$$
  *Odpowiedź e):* $\vec{v} = [3, -26]$.

---

### Zadanie 2.15
**Treść zadania:**
Dane są punkty $A = (1, 3)$, $B = (3, 7)$ i $C = (5, 8)$.
a) [R] Oblicz współrzędne wektorów $\vec{AB}$ i $\vec{BA}$.
b) [R] Oblicz długość wektora $\vec{AB}$.
c) [R] Znajdź taki punkt $D$, aby wektory $\vec{AB}$ i $\vec{CD}$ były równe.
d) Znajdź taki punkt $E$, aby czworokąt $ACBE$ był równoległobokiem.
e) [R] Podaj współrzędne wektora, który jest sumą wektorów $\vec{AH}$ i $\vec{HB}$, gdzie $H$ jest środkiem wysokości trójkąta $ABC$ poprowadzonej z wierzchołka $C$.

**Odpowiedź i Rozwiązanie krok po kroku:**

* **Podpunkt a)**
  $$\vec{AB} = [x_B - x_A,\; y_B - y_A] = [3 - 1,\; 7 - 3] = [2, 4]$$
  $$\vec{BA} = [x_A - x_B,\; y_A - y_B] = [1 - 3,\; 3 - 7] = [-2, -4]$$
  *(Zauważmy, że $\vec{BA} = -\vec{AB}$)*.
  *Odpowiedź a):* $\vec{AB} = [2, 4]$, $\vec{BA} = [-2, -4]$.

* **Podpunkt b)**
  $$|\vec{AB}| = \sqrt{2^2 + 4^2} = \sqrt{4 + 16} = \sqrt{20} = 2\sqrt{5}$$
  *Odpowiedź b):* $|\vec{AB}| = 2\sqrt{5}$.

* **Podpunkt c)**
  Niech $D = (x_D, y_D)$. Wektor $\vec{CD} = [x_D - 5,\; y_D - 8]$.
  $$\vec{CD} = \vec{AB} \iff [x_D - 5,\; y_D - 8] = [2, 4]$$
  $$\begin{cases} x_D - 5 = 2 \implies x_D = 7 \\ y_D - 8 = 4 \implies y_D = 12 \end{cases}$$
  *Odpowiedź c):* $D = (7, 12)$.

* **Podpunkt d)**
  Czworokąt $ACBE$ ma kolejne wierzchołki $A, C, B, E$.
  Czworokąt jest równoległobokiem wtedy i tylko wtedy, gdy wektory przeciwległych boków są równe:
  $$\vec{AC} = \vec{EB}$$
  Obliczamy wektor $\vec{AC}$:
  $$\vec{AC} = [5 - 1,\; 8 - 3] = [4, 5]$$
  Niech $E = (x_E, y_E)$. Wtedy $\vec{EB} = [3 - x_E,\; 7 - y_E]$.
  $$\begin{cases} 3 - x_E = 4 \implies x_E = -1 \\ 7 - y_E = 5 \implies y_E = 2 \end{cases}$$
  *Odpowiedź d):* $E = (-1, 2)$.

* **Podpunkt e)**
  Zgodnie z regułą trójkąta (definicją dodawania wektorów):
  Dla dowolnego punktu $H$ na płaszczyźnie zachodzi:
  $$\vec{AH} + \vec{HB} = \vec{AB}$$
  Położenie punktu $H$ nie ma wpływu na sumę tych wektorów. Ponieważ z podpunktu a) $\vec{AB} = [2, 4]$, otrzymujemy:
  $$\vec{AH} + \vec{HB} = [2, 4]$$
  *Odpowiedź e):* $\vec{AH} + \vec{HB} = [2, 4]$.

---

### Zadanie 2.16
**Treść zadania:**
Punkty $A, B, C, D$ są kolejnymi wierzchołkami równoległoboku. Zapisz wektory $\vec{AD}$ i $\vec{AB}$ za pomocą wektorów $\vec{AC}$ i $\vec{BD}$.

**Odpowiedź i Rozwiązanie krok po kroku:**
W równoległoboku $ABCD$ wektory boków to $\vec{AB}$ oraz $\vec{AD}$.
Wektory przekątnych można wyrazić jako:
1. $\vec{AC} = \vec{AB} + \vec{BC} = \vec{AB} + \vec{AD}$ (ponieważ $\vec{BC} = \vec{AD}$),
2. $\vec{BD} = \vec{BA} + \vec{AD} = -\vec{AB} + \vec{AD}$.

Mamy zatem układ równań wektorowych:
$$\begin{cases} \vec{AC} = \vec{AB} + \vec{AD} \\ \vec{BD} = -\vec{AB} + \vec{AD} \end{cases}$$

* **Wyznaczenie $\vec{AD}$:**
  Dodajemy oba równania stronami:
  $$\vec{AC} + \vec{BD} = (\vec{AB} - \vec{AB}) + 2\vec{AD} = 2\vec{AD}$$
  $$\vec{AD} = \frac{1}{2}(\vec{AC} + \vec{BD})$$

* **Wyznaczenie $\vec{AB}$:**
  Odejmujemy drugie równanie od pierwszego:
  $$\vec{AC} - \vec{BD} = \vec{AB} - (-\vec{AB}) + (\vec{AD} - \vec{AD}) = 2\vec{AB}$$
  $$\vec{AB} = \frac{1}{2}(\vec{AC} - \vec{BD})$$

*Odpowiedź:*
$$\vec{AD} = \frac{1}{2}\vec{AC} + \frac{1}{2}\vec{BD}, \qquad \vec{AB} = \frac{1}{2}\vec{AC} - \frac{1}{2}\vec{BD}$$

---

### Zadanie 2.17 [R]
**Treść zadania:**
Dwa punkty dzielą odcinek o końcach $A = (17, 31)$ i $B = (53, 58)$ na trzy równe części. Znajdź współrzędne tych punktów.

**Odpowiedź i Rozwiązanie krok po kroku:**
Niech punktami podziału będą $P_1$ oraz $P_2$, leżące na odcinku $AB$ w kolejności $A, P_1, P_2, B$.
Wyznaczamy wektor $\vec{AB}$:
$$\vec{AB} = [53 - 17,\; 58 - 31] = [36, 27]$$

Wektor przesunięcia o jedną trzecią długości odcinka wynosi:
$$\vec{v} = \frac{1}{3}\vec{AB} = \left[\frac{36}{3},\; \frac{27}{3}\right] = [12, 9]$$

* **Współrzędne pierwszego punktu $P_1$:**
  $$P_1 = A + \vec{v} = (17 + 12,\; 31 + 9) = (29, 40)$$

* **Współrzędne drugiego punktu $P_2$:**
  $$P_2 = P_1 + \vec{v} = (29 + 12,\; 40 + 9) = (41, 49)$$
  *(Sprawdzenie: $P_2 + \vec{v} = (41 + 12, 49 + 9) = (53, 58) = B$)*.

*Odpowiedź:* Szukane punkty to $(29, 40)$ oraz $(41, 49)$.

---

### Zadanie 2.18
**Treść zadania:**
Dane są wektory $\vec{u} = [3, 5]$ i $\vec{v} = [-2, 6]$. Wyznacz takie liczby $a$ i $b$, aby $a \cdot \vec{u} + b \cdot \vec{v} = [10, 5]$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Zapisujemy równanie wektorowe we współrzędnych:
$$a[3, 5] + b[-2, 6] = [10, 5]$$
$$[3a - 2b,\; 5a + 6b] = [10, 5]$$
Otrzymujemy układ równań liniowych:
$$\begin{cases} 3a - 2b = 10 \\ 5a + 6b = 5 \end{cases}$$
Mnożymy pierwsze równanie przez 3:
$$\begin{cases} 9a - 6b = 30 \\ 5a + 6b = 5 \end{cases}$$
Dodajemy równania stronami:
$$14a = 35 \implies a = \frac{35}{14} = \frac{5}{2} = 2{,}5$$
Wyznaczamy $b$ z pierwszego równania:
$$3 \cdot \frac{5}{2} - 2b = 10 \implies \frac{15}{2} - 10 = 2b \implies 2b = -\frac{5}{2} \implies b = -\frac{5}{4} = -1{,}25$$

*Sprawdzenie w drugim równaniu:*
$$5 \cdot \left(\frac{5}{2}\right) + 6 \cdot \left(-\frac{5}{4}\right) = \frac{25}{2} - \frac{15}{2} = \frac{10}{2} = 5$$
Układ został rozwiązany poprawnie.

*Odpowiedź:* $a = \frac{5}{2} = 2{,}5$, $b = -\frac{5}{4} = -1{,}25$.

---

### Zadanie 2.19 [R]
**Treść zadania:**
Dane są punkty $A = (1, 3)$ i $B = (3, 7)$.
a) Oblicz współrzędne środka odcinka $AB$.
b) Wyznacz współrzędne takiego punktu $K$, aby punkt $B$ był środkiem odcinka $AK$.
c) Znajdź równanie symetralnej odcinka $AB$.

**Odpowiedź i Rozwiązanie krok po kroku:**

* **Podpunkt a) Środek odcinka $AB$:**
  $$S = \left(\frac{x_A + x_B}{2},\; \frac{y_A + y_B}{2}\right) = \left(\frac{1 + 3}{2},\; \frac{3 + 7}{2}\right) = (2, 5)$$
  *Odpowiedź a):* $S = (2, 5)$.

* **Podpunkt b) Punkt $K$ taki, że $B$ jest środkiem $AK$:**
  Skoro $B$ jest środkiem odcinka $AK$, to:
  $$x_B = \frac{x_A + x_K}{2} \implies x_K = 2x_B - x_A = 2(3) - 1 = 5$$
  $$y_B = \frac{y_A + y_K}{2} \implies y_K = 2y_B - y_A = 2(7) - 3 = 11$$
  *(Wektorowo: $\vec{BK} = \vec{AB} = [2, 4] \implies K = B + [2, 4] = (3+2, 7+4) = (5, 11)$)*.
  *Odpowiedź b):* $K = (5, 11)$.

* **Podpunkt c) Symetralna odcinka $AB$:**
  Symetralna jest prostopadła do prostej $AB$ i przechodzi przez środek odcinka $S(2, 5)$.
  Współczynnik kierunkowy prostej $AB$:
  $$a_{AB} = \frac{7 - 3}{3 - 1} = \frac{4}{2} = 2$$
  Współczynnik kierunkowy symetralnej:
  $$a_s = -\frac{1}{a_{AB}} = -\frac{1}{2}$$
  Równanie symetralnej przechodzącej przez $S(2, 5)$:
  $$y - 5 = -\frac{1}{2}(x - 2) \implies y = -\frac{1}{2}x + 1 + 5 \implies y = -\frac{1}{2}x + 6$$
  W postaci ogólnej:
  $$x + 2y - 12 = 0$$
  *Odpowiedź c):* $y = -\frac{1}{2}x + 6$ (lub $x + 2y - 12 = 0$).

---

### Zadanie 2.20 [W]
**Treść zadania:**
Punkt $A = (-1, 5)$ jest wierzchołkiem trójkąta $ABC$, którego środkowe przecinają się w punkcie $S = (7, 12)$. Wyznacz współrzędne środka boku $BC$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Niech punkt $M$ będzie środkiem boku $BC$.
Odcinek $AM$ jest środkową trójkąta poprowadzoną z wierzchołka $A$.
Środek ciężkości $S$ dzieli środkową $AM$ w stosunku $2 : 1$, licząc od wierzchołka:
$$|AS| : |SM| = 2 : 1 \implies \vec{AS} = 2\vec{SM} \implies \vec{SM} = \frac{1}{2}\vec{AS}$$
Wyznaczamy wektor $\vec{AS}$:
$$\vec{AS} = [x_S - x_A,\; y_S - y_A] = [7 - (-1),\; 12 - 5] = [8, 7]$$
Wtedy:
$$\vec{SM} = \frac{1}{2}[8, 7] = [4;\; 3{,}5]$$
Współrzędne punktu $M$:
$$M = S + \vec{SM} = (7 + 4,\; 12 + 3{,}5) = (11;\; 15{,}5) = \left(11, \frac{31}{2}\right)$$

*Weryfikacja ze wzoru na współrzędne środka ciężkości trójkąta:*
$$x_S = \frac{x_A + x_B + x_C}{3} = \frac{x_A + 2x_M}{3} \implies 7 = \frac{-1 + 2x_M}{3} \implies 21 = -1 + 2x_M \implies x_M = 11$$
$$y_S = \frac{y_A + y_B + y_C}{3} = \frac{y_A + 2y_M}{3} \implies 12 = \frac{5 + 2y_M}{3} \implies 36 = 5 + 2y_M \implies 2y_M = 31 \implies y_M = \frac{31}{2}$$
*Odpowiedź:* Środek boku $BC$ ma współrzędne $\left(11, \frac{31}{2}\right) = (11;\; 15{,}5)$.

---

### Zadanie 2.21 [R]
**Treść zadania:**
Zapisz równanie okręgu, którego środkiem jest punkt $S$, a promień ma długość $r$, jeżeli:
a) $S = (0, 3)$, $r = 5$;
b) $S = (2, -1)$, $r = 2$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Korzystamy z postaci kanonicznej $(x - a)^2 + (y - b)^2 = r^2$.

* **Podpunkt a)** $S = (0, 3)$, $r = 5$
  $$(x - 0)^2 + (y - 3)^2 = 5^2 \implies x^2 + (y - 3)^2 = 25$$
  *Odpowiedź a):* $x^2 + (y - 3)^2 = 25$.

* **Podpunkt b)** $S = (2, -1)$, $r = 2$
  $$(x - 2)^2 + (y - (-1))^2 = 2^2 \implies (x - 2)^2 + (y + 1)^2 = 4$$
  *Odpowiedź b):* $(x - 2)^2 + (y + 1)^2 = 4$.

---

### Zadanie 2.22
**Treść zadania:**
Podaj długość promienia i współrzędne środka okręgu o równaniu:
a) $(x - 7)^2 + (y - 8)^2 = 3^2$;
b) $x^2 + y^2 = 4$;
c) $(x - 4)^2 + (y + 1)^2 = 5$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Przyrównujemy równanie do postaci $(x - a)^2 + (y - b)^2 = r^2$, gdzie $S = (a, b)$ oraz $r > 0$.

* **Podpunkt a)** $(x - 7)^2 + (y - 8)^2 = 3^2$
  $$a = 7, \quad b = 8, \quad r = 3$$
  *Odpowiedź a):* Środek $S = (7, 8)$, promień $r = 3$.

* **Podpunkt b)** $x^2 + y^2 = 4$
  $$(x - 0)^2 + (y - 0)^2 = 2^2 \implies a = 0, \quad b = 0, \quad r = 2$$
  *Odpowiedź b):* Środek $S = (0, 0)$, promień $r = 2$.

* **Podpunkt c)** $(x - 4)^2 + (y + 1)^2 = 5$
  $$(x - 4)^2 + (y - (-1))^2 = (\sqrt{5})^2 \implies a = 4, \quad b = -1, \quad r = \sqrt{5}$$
  *Odpowiedź c):* Środek $S = (4, -1)$, promień $r = \sqrt{5}$.

---

### Zadanie 2.23 [R]
**Treść zadania:**
Dany jest okrąg o równaniu $(x + 2)^2 + (y + 5)^2 = 13$ oraz punkty $P = (1, -3)$ i $Q = (-4, -9)$.
a) Sprawdź, czy punkty $P, Q$ należą do danego okręgu.
b) Znajdź równanie prostej $k$ stycznej do danego okręgu i przechodzącej przez punkt $P$.
c) Znajdź równanie okręgu o środku w punkcie $P$ i przechodzącego przez punkt $Q$.

**Odpowiedź i Rozwiązanie krok po kroku:**

* **Podpunkt a) Przynależność punktów $P$ i $Q$:**
  - Dla punktu $P(1, -3)$:
    $$L = (1 + 2)^2 + (-3 + 5)^2 = 3^2 + 2^2 = 9 + 4 = 13 = P$$
    Punkt $P$ **należy** do okręgu ($P \in o$).
  - Dla punktu $Q(-4, -9)$:
    $$L = (-4 + 2)^2 + (-9 + 5)^2 = (-2)^2 + (-4)^2 = 4 + 16 = 20 \neq 13$$
    Punkt $Q$ **nie należy** do okręgu ($Q \notin o$, leży na zewnątrz okręgu).
  *Odpowiedź a):* Punkt $P$ należy do okręgu, punkt $Q$ nie należy do okręgu.

* **Podpunkt b) Styczna w punkcie $P$:**
  Środkiem okręgu jest punkt $S = (-2, -5)$.
  Promień $SP$ jest prostopadły do prostej stycznej $k$ w punkcie $P(1, -3)$.
  Wektor $\vec{SP}$ jest wektorem normalnym szukanej stycznej:
  $$\vec{SP} = [1 - (-2),\; -3 - (-5)] = [3, 2]$$
  Równanie prostej prostopadłej do $\vec{SP}$:
  $$3x + 2y + C = 0$$
  Podstawiamy współrzędne punktu $P(1, -3)$:
  $$3(1) + 2(-3) + C = 0 \implies 3 - 6 + C = 0 \implies C = 3$$
  Równanie stycznej $k$:
  $$3x + 2y + 3 = 0 \iff y = -\frac{3}{2}x - \frac{3}{2}$$
  *Odpowiedź b):* $3x + 2y + 3 = 0$ (lub $y = -1{,}5x - 1{,}5$).

* **Podpunkt c) Okrąg o środku $P$ przechodzący przez $Q$:**
  Środek: $P = (1, -3)$.
  Kwadrat promienia $R^2$ jest równy kwadratowi odległości między $P$ a $Q$:
  $$R^2 = |PQ|^2 = (-4 - 1)^2 + (-9 - (-3))^2 = (-5)^2 + (-6)^2 = 25 + 36 = 61$$
  Równanie okręgu:
  $$(x - 1)^2 + (y + 3)^2 = 61$$
  *Odpowiedź c):* $(x - 1)^2 + (y + 3)^2 = 61$.

---

### Zadanie 2.24 [W]
**Treść zadania:**
Prosta o równaniu $y = -x + 3$ jest styczna do okręgu o środku w punkcie $S = (4, 5)$. Znajdź równanie tego okręgu.

**Odpowiedź i Rozwiązanie krok po kroku:**
Prosta jest styczna do okręgu wtedy i tylko wtedy, gdy odległość środka okręgu $S$ od tej prostej jest równa promieniowi okręgu $r$:
$$d(S, k) = r$$
1. Zapisujemy równanie prostej w postaci ogólnej:
   $$y = -x + 3 \iff x + y - 3 = 0$$
   gdzie $A = 1, B = 1, C = -3$.
2. Obliczamy odległość punktu $S(4, 5)$ od prostej $x + y - 3 = 0$:
   $$r = \frac{|1 \cdot 4 + 1 \cdot 5 - 3|}{\sqrt{1^2 + 1^2}} = \frac{|4 + 5 - 3|}{\sqrt{2}} = \frac{6}{\sqrt{2}} = 3\sqrt{2}$$
3. Wyznaczamy $r^2$:
   $$r^2 = (3\sqrt{2})^2 = 9 \cdot 2 = 18$$
4. Zapisujemy równanie okręgu o środku $S(4, 5)$ i $r^2 = 18$:
   $$(x - 4)^2 + (y - 5)^2 = 18$$

*Odpowiedź:* $(x - 4)^2 + (y - 5)^2 = 18$.

---

### Zadanie 2.25
**Treść zadania:**
Znajdź równanie stycznej do okręgu o równaniu $x^2 + y^2 = 5$:
a) [R] przechodzącej przez punkt $B = (0, 5)$;
b) [R] równoległej do prostej o równaniu $2x - y = 0$;
c) prostopadłej do prostej o równaniu $2x - y = 0$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Dany okrąg ma środek $S = (0, 0)$ i promień $r = \sqrt{5}$.

* **Podpunkt a) Styczna przechodząca przez punkt $B(0, 5)$:**
  Punkt $B(0, 5)$ nie leży na okręgu ($0^2 + 5^2 = 25 > 5$).
  Prosta pionowa $x = 0$ przechodzi przez $B$, ale zawiera średnicę okręgu, więc nie jest styczna.
  Szukamy prostej o równaniu kierunkowym $y = ax + 5$, czyli w postaci ogólnej:
  $$ax - y + 5 = 0$$
  Warunek styczności $d(S, k) = r = \sqrt{5}$:
  $$\frac{|a \cdot 0 - 0 + 5|}{\sqrt{a^2 + (-1)^2}} = \sqrt{5} \implies \frac{5}{\sqrt{a^2 + 1}} = \sqrt{5}$$
  Podnosimy obustronnie do kwadratu:
  $$\frac{25}{a^2 + 1} = 5 \implies a^2 + 1 = 5 \implies a^2 = 4 \implies a = 2 \quad \lor \quad a = -2$$
  *Odpowiedź a):* Istnieją dwie takie styczne: $y = 2x + 5$ oraz $y = -2x + 5$ (w postaci ogólnej: $2x - y + 5 = 0$ oraz $2x + y - 5 = 0$).

* **Podpunkt b) Styczna równoległa do $2x - y = 0$:**
  Prosta równoległa ma postać ogólną:
  $$2x - y + C = 0$$
  Warunek styczności z okręgiem o środku $(0, 0)$ i promieniu $\sqrt{5}$:
  $$\frac{|2 \cdot 0 - 0 + C|}{\sqrt{2^2 + (-1)^2}} = \sqrt{5} \implies \frac{|C|}{\sqrt{5}} = \sqrt{5} \implies |C| = 5 \implies C = 5 \quad \lor \quad C = -5$$
  *Odpowiedź b):* $2x - y + 5 = 0$ oraz $2x - y - 5 = 0$ (w postaci kierunkowej: $y = 2x + 5$ oraz $y = 2x - 5$).

* **Podpunkt c) Styczna prostopadła do $2x - y = 0$:**
  Prosta prostopadła ma postać ogólną:
  $$x + 2y + C = 0$$
  Warunek styczności:
  $$\frac{|1 \cdot 0 + 2 \cdot 0 + C|}{\sqrt{1^2 + 2^2}} = \sqrt{5} \implies \frac{|C|}{\sqrt{5}} = \sqrt{5} \implies |C| = 5 \implies C = 5 \quad \lor \quad C = -5$$
  *Odpowiedź c):* $x + 2y + 5 = 0$ oraz $x + 2y - 5 = 0$ (w postaci kierunkowej: $y = -\frac{1}{2}x - \frac{5}{2}$ oraz $y = -\frac{1}{2}x + \frac{5}{2}$).

---

### Zadanie 2.26
**Treść zadania:**
Określ wzajemne położenie okręgów o równaniach:
a) [R] $(x - 1)^2 + (y - 1)^2 = 16$ i $(x - 4)^2 + y^2 = 1$;
b) [R] $(x - 2\sqrt{2})^2 + y^2 = 128$ i $x^2 + y^2 = 200$;
c) $(x - 1)^2 + (y - 1)^2 = 16$ i $(x + 1)^2 + (y + 1)^2 = 10$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Wzajemne położenie dwóch okręgów o środkach $S_1, S_2$ i promieniach $r_1, r_2$ ustalamy, porównując odległość środków $d = |S_1S_2|$ z sumą $r_1 + r_2$ oraz różnicą $|r_1 - r_2|$ promieni:
- $d > r_1 + r_2$ — okręgi rozłączne zewnętrznie (0 punktów wspólnych);
- $d = r_1 + r_2$ — okręgi styczne zewnętrznie (1 punkt wspólny);
- $|r_1 - r_2| < d < r_1 + r_2$ — okręgi przecinające się (2 punkty wspólne);
- $d = |r_1 - r_2|$ ($d > 0$) — okręgi styczne wewnętrznie (1 punkt wspólny);
- $d < |r_1 - r_2|$ — okręgi rozłączne wewnętrznie (0 punktów wspólnych);
- $d = 0$ i $r_1 = r_2$ — okręgi pokrywające się.

* **Podpunkt a)**
  - Okrąg 1: środek $S_1 = (1, 1)$, promień $r_1 = \sqrt{16} = 4$.
  - Okrąg 2: środek $S_2 = (4, 0)$, promień $r_2 = \sqrt{1} = 1$.
  - Odległość środków:
    $$d = |S_1S_2| = \sqrt{(4 - 1)^2 + (0 - 1)^2} = \sqrt{3^2 + (-1)^2} = \sqrt{9 + 1} = \sqrt{10} \approx 3{,}16$$
  - Relacje promieni:
    $$r_1 + r_2 = 4 + 1 = 5 = \sqrt{25}$$
    $$|r_1 - r_2| = 4 - 1 = 3 = \sqrt{9}$$
  Ponieważ $\sqrt{9} < \sqrt{10} < \sqrt{25}$, czyli $|r_1 - r_2| < d < r_1 + r_2$, okręgi **przecinają się** (mają dwa punkty wspólne).
  *Odpowiedź a):* Okręgi przecinają się.

* **Podpunkt b)**
  - Okrąg 1: środek $S_1 = (2\sqrt{2}, 0)$, promień $r_1 = \sqrt{128} = \sqrt{64 \cdot 2} = 8\sqrt{2}$.
  - Okrąg 2: środek $S_2 = (0, 0)$, promień $r_2 = \sqrt{200} = \sqrt{100 \cdot 2} = 10\sqrt{2}$.
  - Odległość środków:
    $$d = |S_1S_2| = \sqrt{(2\sqrt{2} - 0)^2 + (0 - 0)^2} = 2\sqrt{2}$$
  - Różnica promieni:
    $$|r_1 - r_2| = |8\sqrt{2} - 10\sqrt{2}| = 2\sqrt{2}$$
  Ponieważ $d = |r_1 - r_2| = 2\sqrt{2} > 0$, okręgi są **styczne wewnętrznie** (mają jeden punkt wspólny).
  *Odpowiedź b):* Okręgi są styczne wewnętrznie.

* **Podpunkt c)**
  - Okrąg 1: środek $S_1 = (1, 1)$, promień $r_1 = 4$.
  - Okrąg 2: środek $S_2 = (-1, -1)$, promień $r_2 = \sqrt{10} \approx 3{,}16$.
  - Odległość środków:
    $$d = |S_1S_2| = \sqrt{(-1 - 1)^2 + (-1 - 1)^2} = \sqrt{(-2)^2 + (-2)^2} = \sqrt{4 + 4} = \sqrt{8} = 2\sqrt{2} \approx 2{,}83$$
  - Relacje promieni:
    $$r_1 + r_2 = 4 + \sqrt{10} \approx 7{,}16$$
    $$|r_1 - r_2| = 4 - \sqrt{10} \approx 4 - 3{,}16 = 0{,}84$$
  Ponieważ $4 - \sqrt{10} < 2\sqrt{2} < 4 + \sqrt{10}$, czyli $|r_1 - r_2| < d < r_1 + r_2$, okręgi **przecinają się** (mają dwa punkty wspólne).
  *Odpowiedź c):* Okręgi przecinają się.

---

### Zadanie 2.27 [R]
**Treść zadania:**
Rozwiąż układ równań:
$$\begin{cases} x^2 + y^2 - 3x + 5y = 4 \\ x^2 + y^2 + x - 7y = 0 \end{cases}$$

**Odpowiedź i Rozwiązanie krok po kroku:**
Jest to układ równań dwóch okręgów. Odejmujemy drugie równanie od pierwszego stronami, aby wyeliminować wyrazy kwadratowe $x^2$ i $y^2$:
$$(x^2 + y^2 - 3x + 5y) - (x^2 + y^2 + x - 7y) = 4 - 0$$
$$-4x + 12y = 4$$
Dzielimy obustronnie przez $-4$:
$$x - 3y = -1 \implies x = 3y - 1$$
Otrzymaliśmy równanie prostej przechodzącej przez punkty wspólne obu okręgów. Podstawiamy wyznaczone $x = 3y - 1$ do drugiego równania:
$$(3y - 1)^2 + y^2 + (3y - 1) - 7y = 0$$
Rozwijamy kwadrat:
$$(9y^2 - 6y + 1) + y^2 + 3y - 1 - 7y = 0$$
Redukujemy wyrazy podobne:
$$10y^2 - 10y = 0$$
Dzielimy przez 10:
$$y^2 - y = 0 \iff y(y - 1) = 0$$
Stąd:
$$y_1 = 0 \qquad \lor \qquad y_2 = 1$$

Wyznaczamy odpowiadające wartości $x$ ze wzoru $x = 3y - 1$:
- Dla $y_1 = 0$:
  $$x_1 = 3(0) - 1 = -1 \implies (x, y) = (-1, 0)$$
- Dla $y_2 = 1$:
  $$x_2 = 3(1) - 1 = 2 \implies (x, y) = (2, 1)$$

*Sprawdzenie w pierwszym równaniu:*
- Dla $(-1, 0)$: $(-1)^2 + 0^2 - 3(-1) + 5(0) = 1 + 3 = 4$ (zgadza się).
- Dla $(2, 1)$: $2^2 + 1^2 - 3(2) + 5(1) = 4 + 1 - 6 + 5 = 4$ (zgadza się).

*Odpowiedź:* Rozwiązaniem układu równań są dwie pary liczb:
$$\begin{cases} x = -1 \\ y = 0 \end{cases} \qquad \lor \qquad \begin{cases} x = 2 \\ y = 1 \end{cases}$$

---

### Zadanie 2.28 [R]
**Treść zadania:**
Wyznacz współrzędne punktów wspólnych okręgu o równaniu $(x - 1{,}5)^2 + (y + 2{,}5)^2 = 12{,}5$:
a) i prostej o równaniu $x + 2y - 4 = 0$;
b) i osi układu współrzędnych.

**Odpowiedź i Rozwiązanie krok po kroku:**
Zapiszmy równanie okręgu w postaci ułamków zwykłych:
$$\left(x - \frac{3}{2}\right)^2 + \left(y + \frac{5}{2}\right)^2 = \frac{25}{2}$$

* **Podpunkt a) Punkty wspólne z prostą $x + 2y - 4 = 0$:**
  Z równania prostej wyznaczamy $x$:
  $$x = 4 - 2y$$
  Wstawiamy do wyrażenia $x - \frac{3}{2}$:
  $$x - \frac{3}{2} = 4 - 2y - \frac{3}{2} = \frac{5}{2} - 2y$$
  Podstawiamy do równania okręgu:
  $$\left(\frac{5}{2} - 2y\right)^2 + \left(y + \frac{5}{2}\right)^2 = \frac{25}{2}$$
  Rozwijamy kwadraty:
  $$\frac{25}{4} - 10y + 4y^2 + y^2 + 5y + \frac{25}{4} = \frac{25}{2}$$
  $$5y^2 - 5y + \frac{50}{4} = \frac{25}{2}$$
  Ponieważ $\frac{50}{4} = \frac{25}{2}$, wyrazy wolne się redukują:
  $$5y^2 - 5y = 0 \iff 5y(y - 1) = 0$$
  Stąd:
  $$y_1 = 0 \qquad \lor \qquad y_2 = 1$$
  Obliczamy $x = 4 - 2y$:
  - Dla $y_1 = 0$: $x_1 = 4 - 0 = 4 \implies (4, 0)$,
  - Dla $y_2 = 1$: $x_2 = 4 - 2(1) = 2 \implies (2, 1)$.
  *Odpowiedź a):* Punkty wspólne to $(4, 0)$ oraz $(2, 1)$.

* **Podpunkt b) Punkty wspólne z osiami układu współrzędnych:**
  1. **Z osią $Ox$ (gdzie $y = 0$):**
     $$\left(x - \frac{3}{2}\right)^2 + \left(0 + \frac{5}{2}\right)^2 = \frac{25}{2}$$
     $$\left(x - \frac{3}{2}\right)^2 + \frac{25}{4} = \frac{50}{4}$$
     $$\left(x - \frac{3}{2}\right)^2 = \frac{25}{4}$$
     Stąd:
     $$x - \frac{3}{2} = \frac{5}{2} \implies x = \frac{8}{2} = 4$$
     $$x - \frac{3}{2} = -\frac{5}{2} \implies x = -\frac{2}{2} = -1$$
     Punkty przecięcia z osią $Ox$: $(4, 0)$ oraz $(-1, 0)$.

  2. **Z osią $Oy$ (gdzie $x = 0$):**
     $$\left(0 - \frac{3}{2}\right)^2 + \left(y + \frac{5}{2}\right)^2 = \frac{25}{2}$$
     $$\frac{9}{4} + \left(y + \frac{5}{2}\right)^2 = \frac{50}{4}$$
     $$\left(y + \frac{5}{2}\right)^2 = \frac{50}{4} - \frac{9}{4} = \frac{41}{4}$$
     Stąd:
     $$y + \frac{5}{2} = \frac{\sqrt{41}}{2} \implies y = \frac{-5 + \sqrt{41}}{2}$$
     $$y + \frac{5}{2} = -\frac{\sqrt{41}}{2} \implies y = \frac{-5 - \sqrt{41}}{2}$$
     Punkty przecięcia z osią $Oy$: $\left(0, \frac{-5 + \sqrt{41}}{2}\right)$ oraz $\left(0, \frac{-5 - \sqrt{41}}{2}\right)$.

  *Odpowiedź b):* Punkty wspólne z osią $Ox$: $(4, 0)$ i $(-1, 0)$; z osią $Oy$: $\left(0, \frac{-5 + \sqrt{41}}{2}\right)$ i $\left(0, \frac{-5 - \sqrt{41}}{2}\right)$.

---

### Zadanie 2.29 [W]
**Treść zadania:**
Wyznacz punkty wspólne okręgów o równaniach:
a) $x^2 + (y - 1)^2 = 18$ i $(x - 3)^2 + (y - 4)^2 = 18$;
b) $(x + 12)^2 + (y + 5)^2 = 100$ i $x^2 + y^2 = 25$.

**Odpowiedź i Rozwiązanie krok po kroku:**

* **Podpunkt a)**
  Rozpisujemy oba równania:
  1. $x^2 + y^2 - 2y + 1 = 18 \implies x^2 + y^2 - 2y = 17$
  2. $x^2 - 6x + 9 + y^2 - 8y + 16 = 18 \implies x^2 + y^2 - 6x - 8y + 25 = 18 \implies x^2 + y^2 - 6x - 8y = -7$

  Odejmujemy drugie równanie od pierwszego:
  $$(x^2 + y^2 - 2y) - (x^2 + y^2 - 6x - 8y) = 17 - (-7)$$
  $$6x + 6y = 24 \implies x + y = 4 \implies y = 4 - x$$
  Podstawiamy $y = 4 - x$ do pierwszego równania:
  $$x^2 + (4 - x - 1)^2 = 18$$
  $$x^2 + (3 - x)^2 = 18$$
  $$x^2 + 9 - 6x + x^2 = 18$$
  $$2x^2 - 6x - 9 = 0$$
  Obliczamy wyróżnik trójmianu:
  $$\Delta = (-6)^2 - 4 \cdot 2 \cdot (-9) = 36 + 72 = 108 = 36 \cdot 3$$
  $$\sqrt{\Delta} = 6\sqrt{3}$$
  Pierwiastki:
  $$x_1 = \frac{6 - 6\sqrt{3}}{4} = \frac{3 - 3\sqrt{3}}{2}, \qquad x_2 = \frac{6 + 6\sqrt{3}}{4} = \frac{3 + 3\sqrt{3}}{2}$$
  Obliczamy rzędne punktów ze wzoru $y = 4 - x$:
  $$y_1 = 4 - \frac{3 - 3\sqrt{3}}{2} = \frac{8 - 3 + 3\sqrt{3}}{2} = \frac{5 + 3\sqrt{3}}{2}$$
  $$y_2 = 4 - \frac{3 + 3\sqrt{3}}{2} = \frac{8 - 3 - 3\sqrt{3}}{2} = \frac{5 - 3\sqrt{3}}{2}$$
  *Odpowiedź a):* Punkty wspólne to:
  $$\left(\frac{3 - 3\sqrt{3}}{2},\; \frac{5 + 3\sqrt{3}}{2}\right) \qquad \text{oraz} \qquad \left(\frac{3 + 3\sqrt{3}}{2},\; \frac{5 - 3\sqrt{3}}{2}\right)$$

* **Podpunkt b)**
  Układ równań:
  $$\begin{cases} (x + 12)^2 + (y + 5)^2 = 100 \\ x^2 + y^2 = 25 \end{cases}$$
  Rozwijamy pierwsze równanie:
  $$x^2 + 24x + 144 + y^2 + 10y + 25 = 100$$
  $$(x^2 + y^2) + 24x + 10y + 169 = 100$$
  Podstawiamy $x^2 + y^2 = 25$:
  $$25 + 24x + 10y + 169 = 100$$
  $$24x + 10y + 194 = 100 \implies 24x + 10y = -94$$
  Dzielimy przez 2:
  $$12x + 5y = -47 \implies 5y = -12x - 47 \implies y = -\frac{12x + 47}{5}$$
  Podstawiamy do równania $x^2 + y^2 = 25$:
  $$x^2 + \left(-\frac{12x + 47}{5}\right)^2 = 25$$
  $$x^2 + \frac{144x^2 + 1128x + 2209}{25} = 25$$
  Mnożymy obustronnie przez 25:
  $$25x^2 + 144x^2 + 1128x + 2209 = 625$$
  $$169x^2 + 1128x + 1584 = 0$$
  Obliczamy wyróżnik:
  $$\Delta = 1128^2 - 4 \cdot 169 \cdot 1584 = 1\,272\,384 - 1\,070\,784 = 201\,600 = 144 \cdot 1400 = 14400 \cdot 14$$
  $$\sqrt{\Delta} = 120\sqrt{14}$$
  Pierwiastki:
  $$x = \frac{-1128 \pm 120\sqrt{14}}{2 \cdot 169} = \frac{-564 \pm 60\sqrt{14}}{169}$$
  Odpowiadające rzędne wyznaczamy z zależności $y = -\frac{12x + 47}{5}$:
  $$y = \frac{-47 - 12 \left(\frac{-564 \pm 60\sqrt{14}}{169}\right)}{5} = \frac{-7943 + 6768 \mp 720\sqrt{14}}{5 \cdot 169} = \frac{-1175 \mp 720\sqrt{14}}{845} = \frac{-235 \mp 144\sqrt{14}}{169}$$
  *Odpowiedź b):* Punkty wspólne to:
  $$\left(\frac{-564 + 60\sqrt{14}}{169},\; \frac{-235 - 144\sqrt{14}}{169}\right) \qquad \text{oraz} \qquad \left(\frac{-564 - 60\sqrt{14}}{169},\; \frac{-235 + 144\sqrt{14}}{169}\right)$$

---

### Zadanie 2.30 [R]
**Treść zadania:**
Wyznacz te wartości parametru $m$, dla których prosta o równaniu $4x + 3y + m = 0$ ma z okręgiem o równaniu $(x - 2)^2 + (y + 5)^2 = 9$ dwa punkty wspólne.

**Odpowiedź i Rozwiązanie krok po kroku:**
1. **Własności okręgu:**
   Z równania $(x - 2)^2 + (y + 5)^2 = 9$ odczytujemy:
   - Środek okręgu: $S = (2, -5)$,
   - Promień okręgu: $r = \sqrt{9} = 3$.

2. **Warunek geometryczny:**
   Prosta jest sieczną okręgu (ma z nim dokładnie 2 punkty wspólne) wtedy i tylko wtedy, gdy odległość $d$ środka okręgu od tej prostej jest mniejsza od promienia okręgu:
   $$d(S, k) < r$$

3. **Obliczenie odległości $d(S, k)$:**
   $$d = \frac{|4 \cdot 2 + 3 \cdot (-5) + m|}{\sqrt{4^2 + 3^2}} = \frac{|8 - 15 + m|}{\sqrt{16 + 9}} = \frac{|m - 7|}{\sqrt{25}} = \frac{|m - 7|}{5}$$

4. **Rozwiązanie nierówności:**
   $$\frac{|m - 7|}{5} < 3 \iff |m - 7| < 15$$
   $$-15 < m - 7 < 15$$
   Dodajemy 7 do wszystkich stron:
   $$-8 < m < 22$$

*Odpowiedź:* Prosta ma z okręgiem dwa punkty wspólne dla $m \in (-8, 22)$.

---

### Zadanie 2.31
**Treść zadania:**
Wyznacz te wartości parametru $m$, dla których układ równań:
$$\begin{cases} x^2 + (y - 2)^2 = 4 \\ (x - 2)^2 + y^2 = 4m \end{cases}$$
ma jedno rozwiązanie.

**Odpowiedź i Rozwiązanie krok po kroku:**
Układ równań ma jedno rozwiązanie wtedy i tylko wtedy, gdy figury opisane tymi równaniami mają dokładnie jeden punkt wspólny.
1. **Analiza figur:**
   - Pierwsze równanie przedstawia okrąg $o_1$ o środku $S_1 = (0, 2)$ i promieniu $r_1 = \sqrt{4} = 2$.
   - Aby drugie równanie opisywało figurę niepustą, musi zachodzić $4m \ge 0 \implies m \ge 0$.
     - Jeśli $m = 0$, równanie $(x - 2)^2 + y^2 = 0$ opisuje pojedynczy punkt $(2, 0)$. Sprawdzamy, czy punkt ten leży na okręgu $o_1$:
       $$2^2 + (0 - 2)^2 = 4 + 4 = 8 \neq 4$$
       Punkt $(2, 0)$ nie leży na $o_1$, więc dla $m = 0$ układ ma 0 rozwiązań.
     - Zatem $m > 0$. Wtedy drugie równanie opisuje okrąg $o_2$ o środku $S_2 = (2, 0)$ i promieniu:
       $$r_2 = \sqrt{4m} = 2\sqrt{m}$$

2. **Odległość między środkami okręgów:**
   $$d = |S_1S_2| = \sqrt{(2 - 0)^2 + (0 - 2)^2} = \sqrt{2^2 + (-2)^2} = \sqrt{4 + 4} = \sqrt{8} = 2\sqrt{2}$$

3. **Warunki na dokładnie jeden punkt wspólny:**
   Dwa okręgi mają dokładnie jeden punkt wspólny wtedy i tylko wtedy, gdy są styczne (zewnętrznie lub wewnętrznie).

   * **Przypadek 1: Styczność zewnętrzna ($d = r_1 + r_2$)**
     $$2\sqrt{2} = 2 + 2\sqrt{m}$$
     Dzielimy obustronnie przez 2:
     $$\sqrt{2} = 1 + \sqrt{m} \implies \sqrt{m} = \sqrt{2} - 1$$
     Ponieważ $\sqrt{2} - 1 > 0$, podnosimy do kwadratu:
     $$m = (\sqrt{2} - 1)^2 = 2 - 2\sqrt{2} + 1 = 3 - 2\sqrt{2}$$

   * **Przypadek 2: Styczność wewnętrzna ($d = |r_1 - r_2|$)**
     $$2\sqrt{2} = |2 - 2\sqrt{m}|$$
     Dzielimy obustronnie przez 2:
     $$\sqrt{2} = |1 - \sqrt{m}|$$
     Równanie z wartością bezwzględną daje dwa warianty:
     - $1 - \sqrt{m} = \sqrt{2} \implies \sqrt{m} = 1 - \sqrt{2} < 0$ (brak rozwiązań, gdyż $\sqrt{m} \ge 0$),
     - $\sqrt{m} - 1 = \sqrt{2} \implies \sqrt{m} = \sqrt{2} + 1$.
     Podnosimy obustronnie do kwadratu:
     $$m = (\sqrt{2} + 1)^2 = 2 + 2\sqrt{2} + 1 = 3 + 2\sqrt{2}$$

*Odpowiedź:* Układ równań ma jedno rozwiązanie dla:
$$m = 3 - 2\sqrt{2} \qquad \text{lub} \qquad m = 3 + 2\sqrt{2}$$

---

### Zadanie 2.32
**Treść zadania:**
Podaj współrzędne punktu, który jest obrazem punktu $P = (3, -2)$:
a) w symetrii osiowej względem osi $OY$;
b) w symetrii osiowej względem osi $OX$;
c) w symetrii środkowej względem początku układu współrzędnych.

**Odpowiedź i Rozwiązanie krok po kroku:**

* **Podpunkt a) Symetria względem osi $Oy$ ($S_{Oy}$):**
  W symetrii osiowej względem osi $Oy$ pierwsza współrzędna zmienia znak na przeciwny, a druga pozostaje bez zmian:
  $$(x, y) \xrightarrow{S_{Oy}} (-x, y)$$
  Dla punktu $P(3, -2)$:
  $$P' = (-3, -2)$$
  *Odpowiedź a):* $P' = (-3, -2)$.

* **Podpunkt b) Symetria względem osi $Ox$ ($S_{Ox}$):**
  W symetrii osiowej względem osi $Ox$ druga współrzędna zmienia znak na przeciwny, a pierwsza pozostaje bez zmian:
  $$(x, y) \xrightarrow{S_{Ox}} (x, -y)$$
  Dla punktu $P(3, -2)$:
  $$P' = (3, -(-2)) = (3, 2)$$
  *Odpowiedź b):* $P' = (3, 2)$.

* **Podpunkt c) Symetria środkowa względem początku układu współrzędnych ($S_{(0,0)}$):**
  W symetrii względem punktu $(0, 0)$ obie współrzędne zmieniają znaki na przeciwne:
  $$(x, y) \xrightarrow{S_{(0,0)}} (-x, -y)$$
  Dla punktu $P(3, -2)$:
  $$P' = (-3, -(-2)) = (-3, 2)$$
  *Odpowiedź c):* $P' = (-3, 2)$.

---

### Zadanie 2.33 [W]
**Treść zadania:**
Podaj równanie okręgu, który jest obrazem okręgu o równaniu $(x + 4)^2 + (y - 2)^2 = 5$:
a) w symetrii osiowej względem osi $OY$;
b) w symetrii osiowej względem osi $OX$;
c) w symetrii środkowej względem początku układu współrzędnych.

**Odpowiedź i Rozwiązanie krok po kroku:**
Dany okrąg ma środek $S = (-4, 2)$ i promień $r = \sqrt{5}$.
Każde z rozważanych przekształceń jest izometrią, a więc nie zmienia promienia okręgu ($r' = r = \sqrt{5}$, czyli $r'^2 = 5$). Aby wyznaczyć równanie okręgu po przekształceniu, wystarczy znaleźć obraz środka $S' = (a', b')$.

* **Podpunkt a) Symetria względem osi $Oy$ ($S_{Oy}$):**
  $$S = (-4, 2) \xrightarrow{S_{Oy}} S' = (-(-4), 2) = (4, 2)$$
  Równanie okręgu:
  $$(x - 4)^2 + (y - 2)^2 = 5$$
  *Odpowiedź a):* $(x - 4)^2 + (y - 2)^2 = 5$.

* **Podpunkt b) Symetria względem osi $Ox$ ($S_{Ox}$):**
  $$S = (-4, 2) \xrightarrow{S_{Ox}} S' = (-4, -2)$$
  Równanie okręgu:
  $$(x - (-4))^2 + (y - (-2))^2 = 5 \implies (x + 4)^2 + (y + 2)^2 = 5$$
  *Odpowiedź b):* $(x + 4)^2 + (y + 2)^2 = 5$.

* **Podpunkt c) Symetria środkowa względem początku układu ($S_{(0,0)}$):**
  $$S = (-4, 2) \xrightarrow{S_{(0,0)}} S' = (4, -2)$$
  Równanie okręgu:
  $$(x - 4)^2 + (y - (-2))^2 = 5 \implies (x - 4)^2 + (y + 2)^2 = 5$$
  *Odpowiedź c):* $(x - 4)^2 + (y + 2)^2 = 5$.

---

### Zadanie 2.34 [W]
**Treść zadania:**
Znajdź równanie prostej $k$, która jest obrazem prostej o równaniu $y = 2x - 5$:
a) w symetrii osiowej względem osi $OY$;
b) w symetrii osiowej względem osi $OX$;
c) w symetrii środkowej względem początku układu współrzędnych.

**Odpowiedź i Rozwiązanie krok po kroku:**

* **Podpunkt a) Symetria względem osi $Oy$ ($S_{Oy}$):**
  Przekształcenie punktów to $(x, y) \to (-x, y)$. W równaniu prostej podstawiamy $-x$ w miejsce $x$:
  $$y = 2(-x) - 5 \implies y = -2x - 5$$
  *Odpowiedź a):* $y = -2x - 5$ (lub w postaci ogólnej: $2x + y + 5 = 0$).

* **Podpunkt b) Symetria względem osi $Ox$ ($S_{Ox}$):**
  Przekształcenie punktów to $(x, y) \to (x, -y)$. W równaniu prostej podstawiamy $-y$ w miejsce $y$:
  $$-y = 2x - 5 \implies y = -2x + 5$$
  *Odpowiedź b):* $y = -2x + 5$ (lub w postaci ogólnej: $2x + y - 5 = 0$).

* **Podpunkt c) Symetria środkowa względem początku układu ($S_{(0,0)}$):**
  Przekształcenie punktów to $(x, y) \to (-x, -y)$. Podstawiamy $-x$ w miejsce $x$ oraz $-y$ w miejsce $y$:
  $$-y = 2(-x) - 5 \implies -y = -2x - 5 \implies y = 2x + 5$$
  *Odpowiedź c):* $y = 2x + 5$ (lub w postaci ogólnej: $2x - y + 5 = 0$).

---


<!-- SEKCJA ZADAŃ 2 -->
# Geometria Analityczna – Zadania Maturalne (od 202 do 250)

---

### Zadanie 202 [Egzamin wstępny do szkół średnich w woj. poznańskim w roku 1993]

**Treść zadania:**  
Dane są punkty: $A=(-3,-2)$, $B=(1,2)$, $C=(3,-2)$. Znajdź równanie prostej równoległej do prostej $AB$ i przechodzącej przez punkt $C$.

**Odpowiedź:**  
$y=x-5$

**Rozwiązanie krok po kroku:**  
1. Wyznaczamy współczynnik kierunkowy prostej $AB$ przechodzącej przez punkty $A=(-3,-2)$ i $B=(1,2)$:
   $$a_{AB} = \frac{y_B - y_A}{x_B - x_A} = \frac{2 - (-2)}{1 - (-3)} = \frac{4}{4} = 1$$
2. Prosta równoległa do prostej $AB$ ma ten sam współczynnik kierunkowy $a = 1$. Zatem jej równanie kierunkowe ma postać:
   $$y = x + b$$
3. Prosta ta przechodzi przez punkt $C=(3,-2)$. Podstawiamy współrzędne punktu $C$:
   $$-2 = 1 \cdot 3 + b \implies b = -5$$
4. Stąd równanie szukanej prostej to:
   $$y = x - 5 \quad (\text{lub w postaci ogólnej: } x - y - 5 = 0)$$

---

### Zadanie 203 [W]

**Treść zadania:**  
Sprawdź, czy punkt $P=(5,-2)$ należy do symetralnej odcinka o końcach $A=(1,5)$ i $B=(-3,-1)$.

**Odpowiedź:**  
Należy.  
*Wskazówka:* Sprawdź, czy odległości punktu $P$ od punktów $A$ i $B$ są równe.

**Rozwiązanie krok po kroku:**  
**Sposób I (z definicji symetralnej odcinka):**  
Symetralna odcinka to zbiór wszystkich punktów płaszczyzny jednakowo oddalonych od jego końców. Wystarczy sprawdzić, czy $|PA| = |PB|$.
1. Obliczamy odległość punktu $P$ od punktu $A$:
   $$|PA| = \sqrt{(1 - 5)^2 + (5 - (-2))^2} = \sqrt{(-4)^2 + 7^2} = \sqrt{16 + 49} = \sqrt{65}$$
2. Obliczamy odległość punktu $P$ od punktu $B$:
   $$|PB| = \sqrt{(-3 - 5)^2 + (-1 - (-2))^2} = \sqrt{(-8)^2 + 1^2} = \sqrt{64 + 1} = \sqrt{65}$$
3. Ponieważ $|PA| = |PB| = \sqrt{65}$, punkt $P$ leży w równej odległości od obu końców odcinka $AB$, a zatem należy do symetralnej odcinka $AB$.

**Sposób II (analityczny):**  
1. Wyznaczamy środek $S$ odcinka $AB$:
   $$S = \left(\frac{1 + (-3)}{2}, \frac{5 + (-1)}{2}\right) = (-1, 2)$$
2. Obliczamy współczynnik kierunkowy prostej $AB$:
   $$a_{AB} = \frac{-1 - 5}{-3 - 1} = \frac{-6}{-4} = \frac{3}{2}$$
3. Współczynnik kierunkowy symetralnej wynosi:
   $$a_s = -\frac{1}{a_{AB}} = -\frac{2}{3}$$
4. Równanie symetralnej przechodzącej przez punkt $S(-1, 2)$:
   $$y - 2 = -\frac{2}{3}(x - (-1)) \iff y = -\frac{2}{3}x + \frac{4}{3}$$
5. Podstawiamy współrzędne punktu $P(5, -2)$:
   $$L = -2, \quad P = -\frac{2}{3} \cdot 5 + \frac{4}{3} = -\frac{10}{3} + \frac{4}{3} = -\frac{6}{3} = -2$$
   Ponieważ $L = P$, punkt $P$ należy do symetralnej.

---

### Zadanie 204 [W]

**Treść zadania:**  
Prosta o równaniu $y=3x+5$ przecina oś $Oy$ w punkcie $A$, prosta o równaniu $y=\frac{2}{9}x-\frac{10}{3}$ przecina oś $Ox$ w punkcie $B$, a obie proste przecinają się w punkcie $C$.  
a) Znajdź współrzędne punktów $A$, $B$ i $C$.  
b) [W] Uzasadnij, że odcinki $AB$ i $AC$ są prostopadłe.

**Odpowiedź:**  
a) $A=(0,5)$, $B=(15,0)$ i $C=(-3,-4)$.  
*Wskazówka:* b) I SPOSÓB. Wykorzystaj tw. odwrotne do tw. Pitagorasa.  
II SPOSÓB. (poziom rozszerzony) Znajdź współczynnik kierunkowy prostej $AB$.

**Rozwiązanie krok po kroku:**  
**a)**  
1. Punkt $A$ to punkt przecięcia prostej $y = 3x + 5$ z osią $Oy$ ($x = 0$):
   $$y = 3 \cdot 0 + 5 = 5 \implies A = (0, 5)$$
2. Punkt $B$ to punkt przecięcia prostej $y = \frac{2}{9}x - \frac{10}{3}$ z osią $Ox$ ($y = 0$):
   $$0 = \frac{2}{9}x - \frac{10}{3} \implies \frac{2}{9}x = \frac{10}{3} \implies x = \frac{10}{3} \cdot \frac{9}{2} = 15 \implies B = (15, 0)$$
3. Punkt $C$ to punkt przecięcia obu prostych:
   $$3x + 5 = \frac{2}{9}x - \frac{10}{3}$$
   Mnożymy obustronnie przez 9:
   $$27x + 45 = 2x - 30 \implies 25x = -75 \implies x = -3$$
   $$y = 3(-3) + 5 = -9 + 5 = -4 \implies C = (-3, -4)$$

**b)**  
*Sposób I (iloczyn współczynników kierunkowych):*  
Współczynnik kierunkowy prostej $AB$:
$$a_{AB} = \frac{y_B - y_A}{x_B - x_A} = \frac{0 - 5}{15 - 0} = -\frac{5}{15} = -\frac{1}{3}$$
Prosta $AC$ to prosta o równaniu $y = 3x + 5$, a zatem jej współczynnik kierunkowy to $a_{AC} = 3$.  
Obliczamy iloczyn współczynników kierunkowych:
$$a_{AB} \cdot a_{AC} = -\frac{1}{3} \cdot 3 = -1$$
Ponieważ iloczyn współczynników wynosi $-1$, proste $AB$ i $AC$ są prostopadłe, co dowodzi, że odcinki $AB$ i $AC$ są prostopadłe ($AB \perp AC$).

*Sposób II (twierdzenie odwrotne do twierdzenia Pitagorasa):*  
Obliczamy kwadraty długości boków trójkąta $ABC$:
$$|AB|^2 = (15 - 0)^2 + (0 - 5)^2 = 225 + 25 = 250$$
$$|AC|^2 = (-3 - 0)^2 + (-4 - 5)^2 = 9 + 81 = 90$$
$$|BC|^2 = (-3 - 15)^2 + (-4 - 0)^2 = (-18)^2 + (-4)^2 = 324 + 16 = 340$$
Zauważmy, że:
$$|AB|^2 + |AC|^2 = 250 + 90 = 340 = |BC|^2$$
Z twierdzenia odwrotnego do twierdzenia Pitagorasa trójkąt $ABC$ jest trójkątem prostokątnym o przeciwprostokątnej $BC$, skąd kąt przy wierzchołku $A$ jest prosty, czyli $AB \perp AC$.

---

### Zadanie 205

**Treść zadania:**  
Prosta $k$ o równaniu $y=\frac{\sqrt{3}}{3}x+\sqrt{6}$ jest nachylona do osi $Ox$ pod kątem $\alpha$. Prosta $l$ przechodzi przez punkt $A=(2\sqrt{3},5)$ i jest nachylona do osi $Ox$ pod kątem $2\alpha$. Znajdź równanie prostej $l$.

**Odpowiedź:**  
$y=\sqrt{3}x-1$

**Rozwiązanie krok po kroku:**  
1. Współczynnik kierunkowy prostej $k$ wynosi $a_k = \frac{\sqrt{3}}{3}$.  
   Z definicji współczynnika kierunkowego:
   $$\operatorname{tg} \alpha = \frac{\sqrt{3}}{3}$$
   Dla kąta nachylenia prostej $\alpha \in [0^\circ, 180^\circ)$ otrzymujemy $\alpha = 30^\circ$.
2. Kąt nachylenia prostej $l$ do osi $Ox$ ma miarę $2\alpha = 2 \cdot 30^\circ = 60^\circ$.
3. Współczynnik kierunkowy prostej $l$ wynosi:
   $$a_l = \operatorname{tg}(60^\circ) = \sqrt{3}$$
4. Prosta $l$ przechodzi przez punkt $A=(2\sqrt{3}, 5)$, więc jej równanie ma postać:
   $$y - 5 = \sqrt{3}(x - 2\sqrt{3})$$
   $$y - 5 = \sqrt{3}x - 6 \implies y = \sqrt{3}x - 1$$

---

### Zadanie 206

**Treść zadania:**  
Dane są proste o równaniach $x-y=0$, $3x-y-8=0$, $2x+y-12=0$. Uzasadnij, że istnieje taki punkt $P$, który należy do każdej z danych prostych.

**Odpowiedź:**  
$P=(4,4)$

**Rozwiązanie krok po kroku:**  
1. Wyznaczamy punkt przecięcia pierwszych dwóch prostych, rozwiązując układ równań:
   $$\begin{cases} x - y = 0 \\ 3x - y - 8 = 0 \end{cases}$$
   Z pierwszego równania: $y = x$. Podstawiamy do drugiego:
   $$3x - x - 8 = 0 \implies 2x = 8 \implies x = 4$$
   Wtedy $y = 4$. Zatem punktem przecięcia pierwszych dwóch prostych jest $P = (4, 4)$.
2. Sprawdzamy, czy punkt $P(4, 4)$ spełnia równanie trzeciej prostej $2x + y - 12 = 0$:
   $$L = 2 \cdot 4 + 4 - 12 = 8 + 4 - 12 = 0 = P$$
3. Punkt $P=(4,4)$ spełnia równania wszystkich trzech prostych, co dowodzi, że należy do każdej z nich (proste są współpękowe).

---

### Zadanie 207

**Treść zadania:**  
Znajdź wszystkie liczby rzeczywiste $p$ takie, aby proste o równaniach $y=(p-5)x+5$ i $y=(p+5)x-5$ były prostopadłe.

**Odpowiedź:**  
$p \in \{-2\sqrt{6}, 2\sqrt{6}\}$

**Rozwiązanie krok po kroku:**  
1. Współczynniki kierunkowe danych prostych to:
   $$a_1 = p - 5, \quad a_2 = p + 5$$
2. Dwie proste o równaniach kierunkowych są prostopadłe wtedy i tylko wtedy, gdy iloczyn ich współczynników kierunkowych wynosi $-1$:
   $$a_1 \cdot a_2 = -1$$
3. Układamy i rozwiązujemy równanie:
   $$(p - 5)(p + 5) = -1$$
   $$p^2 - 25 = -1$$
   $$p^2 = 24$$
   $$p = \sqrt{24} = 2\sqrt{6} \quad \text{lub} \quad p = -\sqrt{24} = -2\sqrt{6}$$
4. Zatem $p \in \{-2\sqrt{6}, 2\sqrt{6}\}$.

---

### Zadanie 208

**Treść zadania:**  
Przez punkt $A=(2,3)$ poprowadzono prostą odcinającą na półosiach układu współrzędnych odcinki równej długości. Znajdź równanie tej prostej.

**Odpowiedź:**  
$y=x+1$ lub $y=-x+5$

**Rozwiązanie krok po kroku:**  
1. Niech prosta przecina oś $Ox$ w punkcie $(x_0, 0)$ oraz oś $Oy$ w punkcie $(0, y_0)$, gdzie $x_0 \neq 0$ i $y_0 \neq 0$.  
   Długości odcinków odciętych na osiach to $|x_0|$ oraz $|y_0|$. Z warunku zadania:
   $$|x_0| = |y_0|$$
   Oznacza to, że $y_0 = x_0$ lub $y_0 = -x_0$.
2. **Przypadek 1:** $y_0 = -x_0$ (odcinki o przeciwnych znakach).  
   Współczynnik kierunkowy prostej wynosi:
   $$a = \frac{y_0 - 0}{0 - x_0} = \frac{-x_0}{-x_0} = 1$$
   Równanie prostej o współczynniku $a = 1$ przechodzącej przez $A(2,3)$:
   $$y - 3 = 1(x - 2) \implies y = x + 1$$
   Punkty przecięcia z osiami to $(-1, 0)$ oraz $(0, 1)$. Długości odcinków na półosiach wynoszą $|-1| = 1$ oraz $|1| = 1$ (są równe).
3. **Przypadek 2:** $y_0 = x_0$ (odcinki o tych samych znakach).  
   Współczynnik kierunkowy prostej wynosi:
   $$a = \frac{y_0 - 0}{0 - x_0} = \frac{x_0}{-x_0} = -1$$
   Równanie prostej o współczynniku $a = -1$ przechodzącej przez $A(2,3)$:
   $$y - 3 = -1(x - 2) \implies y = -x + 5$$
   Punkty przecięcia z osiami to $(5, 0)$ oraz $(0, 5)$. Długości odcinków na półosiach wynoszą $|5| = 5$ oraz $|5| = 5$ (są równe).
4. Szukane proste to: $y = x + 1$ lub $y = -x + 5$.

---

### Zadanie 209

**Treść zadania:**  
Prosta $k$ przechodzi przez punkt $A=(3,2)$ i przecina dodatnie półosie układu współrzędnych w takich punktach, że iloczyn ich odległości od punktu $(0,0)$ jest równy 25. Wyznacz równanie prostej $k$.

**Odpowiedź:**  
$x+y-5=0$ lub $4x+9y-30=0$

**Rozwiązanie krok po kroku:**  
1. Niech punktami przecięcia prostej $k$ z dodatnimi półosiami będą $P=(p, 0)$ na osi $Ox$ oraz $Q=(0, q)$ na osi $Oy$, gdzie $p > 0$ i $q > 0$.
2. Odległości od początku układu współrzędnych to $p$ i $q$. Z treści zadania:
   $$p \cdot q = 25 \implies q = \frac{25}{p}$$
3. Równanie odcinkowe prostej ma postać:
   $$\frac{x}{p} + \frac{y}{q} = 1$$
4. Ponieważ prosta przechodzi przez punkt $A(3,2)$, wstawiamy $x = 3$ i $y = 2$:
   $$\frac{3}{p} + \frac{2}{q} = 1 \iff \frac{3}{p} + \frac{2}{\frac{25}{p}} = 1 \iff \frac{3}{p} + \frac{2p}{25} = 1$$
5. Mnożymy obustronnie przez $25p$ ($p > 0$):
   $$75 + 2p^2 = 25p \iff 2p^2 - 25p + 75 = 0$$
6. Rozwiązujemy równanie kwadratowe:
   $$\Delta = (-25)^2 - 4 \cdot 2 \cdot 75 = 625 - 600 = 25, \quad \sqrt{\Delta} = 5$$
   $$p_1 = \frac{25 - 5}{4} = 5, \quad p_2 = \frac{25 + 5}{4} = \frac{15}{2} = 7{,}5$$
7. Obliczamy odpowiadające wartości $q$:
   - Dla $p_1 = 5$:
     $$q_1 = \frac{25}{5} = 5$$
     Równanie: $\frac{x}{5} + \frac{y}{5} = 1 \iff x + y - 5 = 0$.
   - Dla $p_2 = \frac{15}{2}$:
     $$q_2 = \frac{25}{\frac{15}{2}} = \frac{50}{15} = \frac{10}{3}$$
     Równanie: $\frac{x}{\frac{15}{2}} + \frac{y}{\frac{10}{3}} = 1 \iff \frac{2x}{15} + \frac{3y}{10} = 1$.  
     Mnożąc przez 30:
     $$4x + 9y = 30 \iff 4x + 9y - 30 = 0$$

---

### Zadanie 210 [W]

**Treść zadania:**  
Dane są punkty $A=(4,5)$, $B=(-4,-1)$ i prosta $k$ o równaniu $y=\frac{1}{3}x-3$.  
a) [W] Na prostej $k$ znajdź punkt $C$ jednakowo oddalony od punktów $A$ i $B$.  
b) Znajdź równanie prostej przechodzącej przez punkt $A$ i nachylonej do osi $Ox$ pod kątem o mierze dwa razy większej niż miara kąta nachylenia do osi $Ox$ prostej $k$.

**Odpowiedź:**  
a) $(3,-2)$; b) $y=\frac{3}{4}x+2$.  
*Wskazówka:* a) Zbiorem wszystkich punktów jednakowo oddalonych od punktów $A$ i $B$ jest symetralna odcinka $AB$.

**Rozwiązanie krok po kroku:**  
**a)**  
1. Zgodnie ze wskazówką punkt $C$ leży na symetralnej odcinka $AB$.
2. Wyznaczamy środek $S$ odcinka $AB$:
   $$S = \left(\frac{4 + (-4)}{2}, \frac{5 + (-1)}{2}\right) = (0, 2)$$
3. Obliczamy współczynnik kierunkowy prostej $AB$:
   $$a_{AB} = \frac{-1 - 5}{-4 - 4} = \frac{-6}{-8} = \frac{3}{4}$$
4. Współczynnik kierunkowy symetralnej $s$:
   $$a_s = -\frac{1}{a_{AB}} = -\frac{4}{3}$$
5. Równanie symetralnej przechodzącej przez $S(0, 2)$:
   $$y = -\frac{4}{3}x + 2$$
6. Punkt $C$ jest punktem przecięcia symetralnej i prostej $k: y = \frac{1}{3}x - 3$:
   $$\frac{1}{3}x - 3 = -\frac{4}{3}x + 2 \implies \frac{5}{3}x = 5 \implies x = 3$$
   $$y = \frac{1}{3} \cdot 3 - 3 = 1 - 3 = -2$$
   Zatem $C = (3, -2)$.

**b)**  
1. Niech $\alpha$ oznacza kąt nachylenia prostej $k$ do osi $Ox$. Wtedy $\operatorname{tg}\alpha = \frac{1}{3}$.
2. Kąt nachylenia szukanej prostej wynosi $2\alpha$. Korzystamy ze wzoru na tangens kąta podwojonego:
   $$\operatorname{tg}(2\alpha) = \frac{2\operatorname{tg}\alpha}{1 - \operatorname{tg}^2\alpha} = \frac{2 \cdot \frac{1}{3}}{1 - \left(\frac{1}{3}\right)^2} = \frac{\frac{2}{3}}{1 - \frac{1}{9}} = \frac{\frac{2}{3}}{\frac{8}{9}} = \frac{2}{3} \cdot \frac{9}{8} = \frac{3}{4}$$
3. Szukana prosta ma współczynnik kierunkowy $a = \frac{3}{4}$ i przechodzi przez $A(4,5)$:
   $$y - 5 = \frac{3}{4}(x - 4) \implies y - 5 = \frac{3}{4}x - 3 \implies y = \frac{3}{4}x + 2$$

---

### Zadanie 211

**Treść zadania:**  
Dany jest punkt $A=(-1,2)$.  
a) Wyznacz równanie tej prostej, na której osie układu współrzędnych ograniczają odcinek o środku w punkcie $A$.  
b) Wyznacz równanie takiej prostej przechodzącej przez punkt $A$, że odległość początku układu współrzędnych od tej prostej jest równa 1.

**Odpowiedź:**  
a) $2x-y+4=0$; b) $3x+4y-5=0$ lub $x=-1$.

**Rozwiązanie krok po kroku:**  
**a)**  
1. Niech prosta przecina oś $Ox$ w punkcie $P=(x_0, 0)$ oraz oś $Oy$ w punkcie $Q=(0, y_0)$.
2. Punkt $A=(-1,2)$ jest środkiem odcinka $PQ$:
   $$\frac{x_0 + 0}{2} = -1 \implies x_0 = -2$$
   $$\frac{0 + y_0}{2} = 2 \implies y_0 = 4$$
3. Zatem punkty przecięcia z osiami to $P=(-2,0)$ i $Q=(0,4)$.
4. Wyznaczamy równanie prostej:
   $$a = \frac{4 - 0}{0 - (-2)} = 2, \quad b = 4 \implies y = 2x + 4 \iff 2x - y + 4 = 0$$

**b)**  
1. Rozpatrujemy prostą pionową przechodzącą przez punkt $A(-1,2)$:
   $$x = -1 \iff x + 1 = 0$$
   Odległość początku układu współrzędnych $(0,0)$ od prostej $x = -1$ wynosi:
   $$d = |0 - (-1)| = 1$$
   Zatem prosta $x = -1$ spełnia warunki zadania.
2. Rozpatrujemy prostą niepionową o równaniu:
   $$y - 2 = a(x + 1) \iff ax - y + a + 2 = 0$$
3. Odległość punktu $(0,0)$ od tej prostej wynosi 1:
   $$\frac{|a \cdot 0 - 0 + a + 2|}{\sqrt{a^2 + (-1)^2}} = 1 \iff \frac{|a + 2|}{\sqrt{a^2 + 1}} = 1$$
4. Podnosimy obustronnie do kwadratu:
   $$(a + 2)^2 = a^2 + 1$$
   $$a^2 + 4a + 4 = a^2 + 1 \implies 4a = -3 \implies a = -\frac{3}{4}$$
5. Wstawiamy $a = -\frac{3}{4}$ do równania prostej:
   $$-\frac{3}{4}x - y - \frac{3}{4} + 2 = 0 \iff -\frac{3}{4}x - y + \frac{5}{4} = 0$$
   Mnożąc przez $-4$:
   $$3x + 4y - 5 = 0$$
6. Otrzymujemy dwie proste: $3x + 4y - 5 = 0$ lub $x = -1$.

---

### Zadanie 212 [CKE, matura – poziom rozszerzony, maj 2014]

**Treść zadania:**  
(0–6) Wyznacz wszystkie wartości parametru $m$, dla których funkcja kwadratowa $f$, określona wzorem $f(x)=x^2-(2m+2)x+2m+5$, ma dwa różne pierwiastki $x_1, x_2$ takie, że suma kwadratów odległości punktów $A=(x_1, 0)$ i $B=(x_2, 0)$ od prostej o równaniu $x+y+1=0$ jest równa 6.

**Odpowiedź:**  
$m=-3$

**Rozwiązanie krok po kroku:**  
1. **Warunek 1: Istnienie dwóch różnych pierwiastków ($\Delta > 0$):**
   $$\Delta = [-(2m+2)]^2 - 4 \cdot 1 \cdot (2m+5) = 4(m^2 + 2m + 1) - 8m - 20 = 4m^2 - 16$$
   $$\Delta > 0 \iff 4m^2 - 16 > 0 \iff m^2 > 4 \iff m \in (-\infty, -2) \cup (2, +\infty)$$
2. **Warunek 2: Suma kwadratów odległości równa 6:**  
   Odległość punktu $(x_0, 0)$ od prostej $x + y + 1 = 0$:
   $$d = \frac{|x_0 + 0 + 1|}{\sqrt{1^2 + 1^2}} = \frac{|x_0 + 1|}{\sqrt{2}}$$
   Kwadraty odległości punktów $A$ i $B$:
   $$d_A^2 = \frac{(x_1 + 1)^2}{2}, \quad d_B^2 = \frac{(x_2 + 1)^2}{2}$$
   Suma kwadratów odległości:
   $$d_A^2 + d_B^2 = \frac{(x_1 + 1)^2 + (x_2 + 1)^2}{2} = 6 \iff (x_1 + 1)^2 + (x_2 + 1)^2 = 12$$
3. Przekształcamy wyrażenie:
   $$(x_1^2 + 2x_1 + 1) + (x_2^2 + 2x_2 + 1) = 12$$
   $$(x_1^2 + x_2^2) + 2(x_1 + x_2) + 2 = 12$$
   $$(x_1 + x_2)^2 - 2x_1 x_2 + 2(x_1 + x_2) - 10 = 0$$
4. Ze wzorów Viète'a:
   $$x_1 + x_2 = 2m + 2, \quad x_1 x_2 = 2m + 5$$
5. Podstawiamy do równania:
   $$(2m + 2)^2 - 2(2m + 5) + 2(2m + 2) - 10 = 0$$
   $$4m^2 + 8m + 4 - 4m - 10 + 4m + 4 - 10 = 0$$
   $$4m^2 + 8m - 12 = 0 \iff m^2 + 2m - 3 = 0$$
6. Rozwiązujemy równanie kwadratowe:
   $$(m + 3)(m - 1) = 0 \implies m = -3 \quad \text{lub} \quad m = 1$$
7. Konfrontujemy wyniki z warunkiem $\Delta > 0$ ($m \in (-\infty, -2) \cup (2, +\infty)$):
   - $m = 1 \notin (-\infty, -2) \cup (2, +\infty)$ (odrzucamy)
   - $m = -3 \in (-\infty, -2) \cup (2, +\infty)$ (spełnia warunek)
8. Ostatecznie: $m = -3$.

---

### Zadanie 213 [R]

**Treść zadania:**  
Znajdź równanie prostej przechodzącej przez punkt $P=(2,4)$ i przecinającej proste $3x+y=0$ oraz $x-y+4=0$ w punktach odpowiednio $M$ i $N$ w taki sposób, że punkt $P$ jest środkiem odcinka $MN$.

**Odpowiedź:**  
$y=2x$  
*Rozwiązanie oficjalne:* Punkty $M$ i $N$ należą do prostych odpowiednio $y=-3x$ i $y=x+4$, więc $M=(m,-3m)$ i $N=(n,n+4)$, gdzie $m$ i $n$ są pewnymi liczbami rzeczywistymi. Punkt $P=(2,4)$ jest środkiem odcinka $MN$, więc $2=\frac{m+n}{2}$ i $4=\frac{-3m+n+4}{2}$. Otrzymaliśmy układ równań, którego rozwiązaniem jest para liczb $m=0$ i $n=4$. Zatem $M=(0,0)$ i $N=(4,8)$. Znając współrzędne punktów $M$ i $N$, łatwo znajdujemy równanie prostej $MN$: $y=2x$.

**Rozwiązanie krok po kroku:**  
1. Zapisujemy równania danych prostych w postaci kierunkowej:
   - Prosta $3x + y = 0 \iff y = -3x$, stąd punkt $M = (m, -3m)$.
   - Prosta $x - y + 4 = 0 \iff y = x + 4$, stąd punkt $N = (n, n + 4)$.
2. Punkt $P(2,4)$ jest środkiem odcinka $MN$, więc:
   $$\begin{cases} \frac{m + n}{2} = 2 \\ \frac{-3m + (n + 4)}{2} = 4 \end{cases} \iff \begin{cases} m + n = 4 \\ -3m + n + 4 = 8 \end{cases} \iff \begin{cases} m + n = 4 \\ -3m + n = 4 \end{cases}$$
3. Odejmując drugie równanie od pierwszego:
   $$4m = 0 \implies m = 0$$
   Wtedy $n = 4 - 0 = 4$.
4. Wyznaczamy współrzędne punktów $M$ i $N$:
   $$M = (0, 0), \quad N = (4, 8)$$
5. Równanie prostej przechodzącej przez punkty $M(0,0)$, $P(2,4)$ i $N(4,8)$:
   $$y = ax + b \implies b = 0, \quad a = \frac{8 - 0}{4 - 0} = 2 \implies y = 2x$$

---

### Zadanie 214 [R]

**Treść zadania:**  
Przez początek układu współrzędnych oraz przez punkt $A=(1,3)$ przechodzą dwie proste równoległe. Wyznacz równania tych prostych, wiedząc, że odległość między nimi jest równa $\sqrt{5}$.

**Odpowiedź:**  
$x-2y=0$, $x-2y+5=0$ lub $2x+y=0$, $2x+y-5=0$.  
*Rozwiązanie oficjalne:* Jedna z prostych przechodzi przez punkt $(0,0)$, więc jej równanie możemy zapisać w postaci $y=ax$ (gdyby prosta była pionowa: $x=0$, odległość punktu $(1,3)$ wynosiłaby 1, a nie $\sqrt{5}$). Druga prosta jest równoległa do pierwszej, więc jej równanie kierunkowe ma ten sam współczynnik kierunkowy $a$, i przechodzi przez punkt $(1,3)$, więc jej równanie możemy zapisać w postaci $y=ax+3-a$. Odległość między prostymi o równaniach $ax-y=0$ i $ax-y+3-a=0$ jest równa $\sqrt{5}$, zatem $\frac{|0-(3-a)|}{\sqrt{a^2+(-1)^2}}=\sqrt{5}$. Podnosząc obie strony otrzymanego równania do kwadratu, otrzymujemy równanie $\frac{(3-a)^2}{a^2+1}=5$, którego rozwiązaniami są liczby $a=-2$ i $a=0{,}5$. Zatem proste mają równania $y=-2x$, $y=-2x+5$ lub równania $y=0{,}5x$, $y=0{,}5x+2{,}5$.

**Rozwiązanie krok po kroku:**  
1. Prosta przechodząca przez początek układu $(0,0)$ nie może być prostą pionową $x = 0$, gdyż prosta do niej równoległa przechodząca przez $A(1,3)$ to $x = 1$, a odległość między nimi wynosi $1 \neq \sqrt{5}$.
2. Zatem prosta ma równanie $y = ax \iff ax - y = 0$.
3. Druga prosta jest równoległa i przechodzi przez $A(1,3)$:
   $$y - 3 = a(x - 1) \iff ax - y + 3 - a = 0$$
4. Odległość między dwiema prostymi równoległymi $ax - y = 0$ i $ax - y + (3 - a) = 0$:
   $$d = \frac{|3 - a - 0|}{\sqrt{a^2 + (-1)^2}} = \frac{|3 - a|}{\sqrt{a^2 + 1}} = \sqrt{5}$$
5. Podnosimy obustronnie do kwadratu:
   $$\frac{(3 - a)^2}{a^2 + 1} = 5 \iff 9 - 6a + a^2 = 5a^2 + 5 \iff 4a^2 + 6a - 4 = 0 \iff 2a^2 + 3a - 2 = 0$$
6. Rozwiązujemy równanie kwadratowe:
   $$\Delta = 3^2 - 4 \cdot 2 \cdot (-2) = 25, \quad \sqrt{\Delta} = 5$$
   $$a_1 = \frac{-3 - 5}{4} = -2, \quad a_2 = \frac{-3 + 5}{4} = \frac{1}{2} = 0{,}5$$
7. Zapisujemy równania par prostych:
   - Dla $a = -2$:
     $$y = -2x \iff 2x + y = 0$$
     $$y = -2x + 5 \iff 2x + y - 5 = 0$$
   - Dla $a = \frac{1}{2}$:
     $$y = \frac{1}{2}x \iff x - 2y = 0$$
     $$y = \frac{1}{2}x + \frac{5}{2} \iff x - 2y + 5 = 0$$

---

### Zadanie 215 [CKE, matura – poziom rozszerzony, czerwiec 2014]

**Treść zadania:**  
(0–6) Odcinek $AB$ o długości 4 jest zawarty w prostej o równaniu $y=\frac{3}{4}x-\frac{3}{2}$. Symetralna odcinka $AB$ przecina oś $Oy$ w punkcie $P=(0,6)$. Oblicz współrzędne końców odcinka $AB$.

**Odpowiedź:**  
$(2,0)$, $(5\frac{1}{5}, 2\frac{2}{5})$ [czyli $(2,0)$ i $(\frac{26}{5}, \frac{12}{5})$]

**Rozwiązanie krok po kroku:**  
1. Prosta zawierająca odcinek $AB$ ma równanie $k: y = \frac{3}{4}x - \frac{3}{2}$. Jej współczynnik kierunkowy to $a_k = \frac{3}{4}$.
2. Symetralna $s$ odcinka $AB$ jest prostopadła do prostej $k$:
   $$a_s = -\frac{1}{a_k} = -\frac{4}{3}$$
3. Symetralna przecina oś $Oy$ w punkcie $P(0,6)$, zatem jej równanie to:
   $$y = -\frac{4}{3}x + 6$$
4. Środek $S$ odcinka $AB$ jest punktem przecięcia prostej $k$ i symetralnej $s$:
   $$\frac{3}{4}x - \frac{3}{2} = -\frac{4}{3}x + 6$$
   Mnożymy obustronnie przez 12:
   $$9x - 18 = -16x + 72 \implies 25x = 90 \implies x = \frac{18}{5}$$
   $$y = -\frac{4}{3} \cdot \frac{18}{5} + 6 = -\frac{24}{5} + \frac{30}{5} = \frac{6}{5}$$
   Zatem $S = \left(\frac{18}{5}, \frac{6}{5}\right)$.
5. Długość odcinka $AB$ wynosi 4, więc odległość każdego z końców $A$ i $B$ od środka $S$ wynosi:
   $$|AS| = |BS| = \frac{|AB|}{2} = 2$$
6. Końce odcinka leżą na prostej $k$, więc mają współrzędne $\left(x, \frac{3}{4}x - \frac{3}{2}\right)$.  
   Kwadrat odległości od środka $S\left(\frac{18}{5}, \frac{6}{5}\right)$ wynosi $2^2 = 4$:
   $$\left(x - \frac{18}{5}\right)^2 + \left(\frac{3}{4}x - \frac{3}{2} - \frac{6}{5}\right)^2 = 4$$
   Zauważmy, że:
   $$\frac{3}{4}x - \frac{27}{10} = \frac{3}{4}\left(x - \frac{18}{5}\right)$$
   Podstawiając:
   $$\left(x - \frac{18}{5}\right)^2 + \frac{9}{16}\left(x - \frac{18}{5}\right)^2 = 4 \iff \frac{25}{16}\left(x - \frac{18}{5}\right)^2 = 4$$
   $$\left(x - \frac{18}{5}\right)^2 = \frac{64}{25} \implies \left|x - \frac{18}{5}\right| = \frac{8}{5}$$
7. Otrzymujemy dwa rozwiązania na współrzędną $x$:
   $$x_1 = \frac{18}{5} - \frac{8}{5} = \frac{10}{5} = 2 \implies y_1 = \frac{3}{4}(2) - \frac{3}{2} = 0$$
   $$x_2 = \frac{18}{5} + \frac{8}{5} = \frac{26}{5} = 5\frac{1}{5} \implies y_2 = \frac{3}{4}\left(\frac{26}{5}\right) - \frac{3}{2} = \frac{39}{10} - \frac{15}{10} = \frac{24}{10} = \frac{12}{5} = 2\frac{2}{5}$$
8. Zatem końce odcinka $AB$ to punkty $(2,0)$ oraz $\left(5\frac{1}{5}, 2\frac{2}{5}\right)$.

---

### Zadanie 216

**Treść zadania:**  
Punkty $A=(3,2)$ i $B=(6,-5)$ są końcami średnicy koła $k$.  
a) Oblicz pole koła $k$.  
b) Znajdź równanie stycznej do koła $k$ w punkcie $A$.

**Odpowiedź:**  
a) $14{,}5\pi$; b) $y=\frac{3}{7}x+\frac{5}{7}$.

**Rozwiązanie krok po kroku:**  
**a)**  
1. Długość średnicy $d = |AB|$ koła wynosi:
   $$d = \sqrt{(6 - 3)^2 + (-5 - 2)^2} = \sqrt{3^2 + (-7)^2} = \sqrt{9 + 49} = \sqrt{58}$$
2. Promień koła to $r = \frac{d}{2} = \frac{\sqrt{58}}{2}$, skąd $r^2 = \frac{58}{4} = \frac{29}{2} = 14{,}5$.
3. Pole koła wynosi:
   $$P = \pi r^2 = 14{,}5\pi$$

**b)**  
1. Styczna do koła w punkcie $A$ jest prostopadła do średnicy $AB$.
2. Współczynnik kierunkowy prostej $AB$:
   $$a_{AB} = \frac{-5 - 2}{6 - 3} = \frac{-7}{3} = -\frac{7}{3}$$
3. Współczynnik kierunkowy stycznej:
   $$a_s = -\frac{1}{a_{AB}} = \frac{3}{7}$$
4. Równanie stycznej przechodzącej przez $A(3,2)$:
   $$y - 2 = \frac{3}{7}(x - 3) \iff y = \frac{3}{7}x - \frac{9}{7} + \frac{14}{7} \iff y = \frac{3}{7}x + \frac{5}{7}$$

---

### Zadanie 217 [R]

**Treść zadania:**  
Dany jest punkt $A=(0,3)$ oraz okrąg o środku w punkcie $S=(1,\frac{3}{2})$ i średnicy o długości $\sqrt{13}$.  
a) Uzasadnij, że prosta o równaniu $y=\frac{7}{4}x-\frac{1}{4}$ zawiera średnicę danego okręgu.  
b) Uzasadnij, że punkt $A$ należy do danego okręgu.

**Odpowiedź:**  
*Rozwiązanie oficjalne:*  
a) Sprawdzamy, czy punkt $S=(1, 1{,}5)$ należy do prostej o równaniu $y=\frac{7}{4}x-\frac{1}{4}$: $\frac{7}{4}\cdot 1 - \frac{1}{4} = \frac{6}{4}=\frac{3}{2}$, współrzędne punktu $S$ spełniają równanie danej prostej, więc punkt $S$ do niej należy, a to oznacza, że prosta ta zawiera pewną średnicę okręgu.  
b) Sprawdzamy, czy odległość punktu $A$ od punktu $S$ jest równa $\frac{\sqrt{13}}{2}$, czyli równa długości promienia danego okręgu. $|AS|=\sqrt{(1-0)^2+(1{,}5-3)^2}=\sqrt{\frac{13}{4}}=\frac{\sqrt{13}}{2}$, więc punkt $A$ należy do danego okręgu.

**Rozwiązanie krok po kroku:**  
**a)**  
1. Każda prosta zawierająca średnicę okręgu musi przechodzić przez jego środek.
2. Sprawdzamy, czy punkt $S\left(1, \frac{3}{2}\right)$ spełnia równanie prostej $y = \frac{7}{4}x - \frac{1}{4}$:
   $$L = \frac{3}{2}$$
   $$P = \frac{7}{4} \cdot 1 - \frac{1}{4} = \frac{6}{4} = \frac{3}{2}$$
   Ponieważ $L = P$, środek $S$ leży na danej prostej, co oznacza, że prosta ta zawiera średnicę danego okręgu.

**b)**  
1. Promień okręgu wynosi $r = \frac{d}{2} = \frac{\sqrt{13}}{2}$.
2. Obliczamy odległość punktu $A(0,3)$ od środka okręgu $S\left(1, \frac{3}{2}\right)$:
   $$|AS| = \sqrt{(1 - 0)^2 + \left(\frac{3}{2} - 3\right)^2} = \sqrt{1^2 + \left(-\frac{3}{2}\right)^2} = \sqrt{1 + \frac{9}{4}} = \sqrt{\frac{13}{4}} = \frac{\sqrt{13}}{2}$$
3. Ponieważ $|AS| = r$, punkt $A$ leży na danym okręgu.

---

### Zadanie 218

**Treść zadania:**  
Proste o równaniach $2x-y+5=0$ i $x-y+3=0$ zawierają średnice okręgu $o$, do którego należy punkt $P=(3,2)$. Znajdź równanie okręgu $o$.

**Odpowiedź:**  
$(x+2)^2+(y-1)^2=26$

**Rozwiązanie krok po kroku:**  
1. Średnice okręgu przecinają się w jego środku $S$. Rozwiązujemy układ równań:
   $$\begin{cases} 2x - y + 5 = 0 \\ x - y + 3 = 0 \end{cases}$$
2. Odejmując drugie równanie od pierwszego:
   $$(2x - x) + (5 - 3) = 0 \implies x + 2 = 0 \implies x = -2$$
   Podstawiamy $x = -2$ do drugiego równania:
   $$-2 - y + 3 = 0 \implies y = 1$$
   Zatem środek okręgu to $S = (-2, 1)$.
3. Punkt $P(3,2)$ należy do okręgu, więc kwadrat promienia $r^2$ wynosi:
   $$r^2 = |SP|^2 = (3 - (-2))^2 + (2 - 1)^2 = 5^2 + 1^2 = 25 + 1 = 26$$
4. Równanie okręgu ma postać:
   $$(x + 2)^2 + (y - 1)^2 = 26$$

---

### Zadanie 219 [CKE, matura – poziom rozszerzony, czerwiec 2013]

**Treść zadania:**  
(0–4) Punkty $A=(2,0)$ i $B=(4,2)$ leżą na okręgu o równaniu $(x-1)^2+(y-3)^2=10$. Wyznacz na okręgu taki punkt $C$, aby trójkąt $ABC$ był trójkątem równoramiennym o podstawie $AB$.

**Odpowiedź:**  
$C_1=(1-\sqrt{5}, 3+\sqrt{5})$, $C_2=(1+\sqrt{5}, 3-\sqrt{5})$

**Rozwiązanie krok po kroku:**  
1. Trójkąt $ABC$ jest równoramienny o podstawie $AB$, gdy $|AC| = |BC|$, co oznacza, że wierzchołek $C$ musi leżeć na symetralnej odcinka $AB$.
2. Wyznaczamy środek odcinka $AB$:
   $$S_{AB} = \left(\frac{2 + 4}{2}, \frac{0 + 2}{2}\right) = (3, 1)$$
3. Współczynnik kierunkowy prostej $AB$:
   $$a_{AB} = \frac{2 - 0}{4 - 2} = \frac{2}{2} = 1$$
4. Współczynnik kierunkowy symetralnej $s$:
   $$a_s = -\frac{1}{a_{AB}} = -1$$
5. Równanie symetralnej przechodzącej przez $S_{AB}(3,1)$:
   $$y - 1 = -1(x - 3) \implies y = -x + 4$$
6. Punkt $C$ leży na okręgu $(x-1)^2+(y-3)^2=10$ oraz na prostej $y = -x + 4$.  
   Podstawiamy $y - 3 = (-x + 4) - 3 = -(x - 1)$:
   $$(x - 1)^2 + [-(x - 1)]^2 = 10 \iff 2(x - 1)^2 = 10 \iff (x - 1)^2 = 5$$
   $$x - 1 = \sqrt{5} \quad \text{lub} \quad x - 1 = -\sqrt{5}$$
7. Obliczamy współrzędne punktów:
   - Dla $x_1 = 1 - \sqrt{5}$:
     $$y_1 = -(1 - \sqrt{5}) + 4 = 3 + \sqrt{5} \implies C_1 = (1 - \sqrt{5}, 3 + \sqrt{5})$$
   - Dla $x_2 = 1 + \sqrt{5}$:
     $$y_2 = -(1 + \sqrt{5}) + 4 = 3 - \sqrt{5} \implies C_2 = (1 + \sqrt{5}, 3 - \sqrt{5})$$
8. Oba punkty nie pokrywają się z $A$ ani $B$, więc spełniają warunki zadania.

---

### Zadanie 220

**Treść zadania:**  
Napisz równanie okręgu symetrycznego do okręgu o równaniu $(x-1)^2+(y-2)^2=1$ względem prostej o równaniu $x-y-3=0$.

**Odpowiedź:**  
$(x-5)^2+(y+2)^2=1$

**Rozwiązanie krok po kroku:**  
1. Dany okrąg ma środek $S=(1,2)$ i promień $r=1$.
2. W symetrii osiowej promień nie ulega zmianie ($r' = 1$), a środek nowego okręgu $S'=(x', y')$ jest obrazem punktu $S(1,2)$ w symetrii względem prostej $k: x - y - 3 = 0 \iff y = x - 3$.
3. Wyznaczamy równanie prostej $l$ prostopadłej do prostej $k$ i przechodzącej przez $S(1,2)$:
   Współczynnik $a_k = 1 \implies a_l = -1$.
   $$y - 2 = -1(x - 1) \implies y = -x + 3$$
4. Wyznaczamy punkt $M$ przecięcia prostych $k$ i $l$:
   $$x - 3 = -x + 3 \implies 2x = 6 \implies x = 3$$
   $$y = 3 - 3 = 0 \implies M = (3, 0)$$
5. Punkt $M(3,0)$ jest środkiem odcinka $SS'$:
   $$\frac{1 + x'}{2} = 3 \implies x' = 5$$
   $$\frac{2 + y'}{2} = 0 \implies y' = -2$$
   Zatem $S' = (5, -2)$.
6. Równanie szukanego okręgu:
   $$(x - 5)^2 + (y + 2)^2 = 1$$

---

### Zadanie 221 [CKE, matura – poziom rozszerzony, czerwiec 2018]

**Treść zadania:**  
(0–4) Dany jest nieskończony ciąg okręgów $(o_n)$ o równaniach $x^2+y^2=2^{11-n}$, $n \ge 1$. Niech $P_k$ będzie pierścieniem ograniczonym zewnętrznym okręgiem $o_{2k-1}$ i wewnętrznym okręgiem $o_{2k}$. Oblicz sumę pól wszystkich pierścieni $P_k$, gdzie $k \ge 1$.

**Odpowiedź:**  
$\frac{2^{11}}{3}\pi$ (czyli $\frac{2048}{3}\pi$)

**Rozwiązanie krok po kroku:**  
1. Równanie okręgu $o_n$ ma postać $x^2 + y^2 = 2^{11-n}$, co oznacza, że kwadrat promienia wynosi $r_n^2 = 2^{11-n}$.  
   Pole koła ograniczonego tym okręgiem wynosi:
   $$K_n = \pi r_n^2 = \pi \cdot 2^{11-n}$$
2. Pierścień $P_k$ (dla $k \ge 1$) jest ograniczony okręgami $o_{2k-1}$ i $o_{2k}$. Jego pole wynosi:
   $$|P_k| = K_{2k-1} - K_{2k} = \pi \cdot 2^{11-(2k-1)} - \pi \cdot 2^{11-2k} = \pi \cdot 2^{12-2k} - \pi \cdot 2^{11-2k}$$
   $$|P_k| = \pi \cdot 2^{11-2k}(2 - 1) = \pi \cdot 2^{11-2k}$$
3. Kolejne pola pierścieni tworzą nieskończony ciąg geometryczny $(a_k)$:
   - Dla $k=1$:
     $$a_1 = |P_1| = \pi \cdot 2^{11-2} = \pi \cdot 2^9 = 512\pi$$
   - Dla $k=2$:
     $$a_2 = |P_2| = \pi \cdot 2^{11-4} = \pi \cdot 2^7 = 128\pi$$
   - Iloraz ciągu:
     $$q = \frac{a_2}{a_1} = \frac{2^7}{2^9} = \frac{1}{4}$$
4. Ponieważ $|q| = \frac{1}{4} < 1$, szereg geometryczny jest zbieżny. Jego suma wynosi:
   $$S = \frac{a_1}{1 - q} = \frac{\pi \cdot 2^9}{1 - \frac{1}{4}} = \frac{512\pi}{\frac{3}{4}} = \frac{2048}{3}\pi = \frac{2^{11}}{3}\pi$$

---

### Zadanie 222 [R]

**Treść zadania:**  
Znajdź równanie okręgu opisanego na trójkącie o wierzchołkach $A=(1,5)$, $B=(8,-2)$ i $C=(9,1)$.

**Odpowiedź:**  
$(x-4)^2+(y-1)^2=25$  
*Rozwiązanie oficjalne:* Środkiem $S$ okręgu opisanego na trójkącie jest punkt przecięcia symetralnych jego boków.  
Symetralna boku $AB$ ma równanie: (1) $y=x-3$. Symetralna boku $AC$ ma równanie: (2) $y=2x-7$.  
Rozwiązaniem układu równań (1) i (2) jest para liczb $x=4$, $y=1$, więc środkiem okręgu jest punkt $S=(4,1)$.  
Obliczamy kwadrat długości promienia okręgu: $r^2=|SC|^2=(9-4)^2+(1-1)^2=25$.  
Okrąg opisany na trójkącie $ABC$ ma równanie $(x-4)^2+(y-1)^2=25$.

**Rozwiązanie krok po kroku:**  
1. Środek okręgu opisanego $S$ leży na przecięciu symetralnych boków trójkąta.
2. **Symetralna boku $AB$:**
   - Środek odcinka $AB$: $S_{AB} = \left(\frac{1 + 8}{2}, \frac{5 + (-2)}{2}\right) = \left(\frac{9}{2}, \frac{3}{2}\right)$.
   - Współczynnik kierunkowy $AB$: $a_{AB} = \frac{-2 - 5}{8 - 1} = \frac{-7}{7} = -1$.
   - Współczynnik symetralnej: $a_1 = -\frac{1}{-1} = 1$.
   - Równanie symetralnej $AB$: $y - \frac{3}{2} = 1\left(x - \frac{9}{2}\right) \implies y = x - 3$.
3. **Symetralna boku $AC$:**
   - Środek odcinka $AC$: $S_{AC} = \left(\frac{1 + 9}{2}, \frac{5 + 1}{2}\right) = (5, 3)$.
   - Współczynnik kierunkowy $AC$: $a_{AC} = \frac{1 - 5}{9 - 1} = \frac{-4}{8} = -\frac{1}{2}$.
   - Współczynnik symetralnej: $a_2 = -\frac{1}{-\frac{1}{2}} = 2$.
   - Równanie symetralnej $AC$: $y - 3 = 2(x - 5) \implies y = 2x - 7$.
4. **Punkt przecięcia symetralnych (środek $S$):**
   $$2x - 7 = x - 3 \implies x = 4$$
   $$y = 4 - 3 = 1 \implies S = (4, 1)$$
5. **Kwadrat promienia okręgu:**
   $$r^2 = |SC|^2 = (9 - 4)^2 + (1 - 1)^2 = 5^2 + 0^2 = 25$$
6. Stąd równanie okręgu opisanego:
   $$(x - 4)^2 + (y - 1)^2 = 25$$

---

### Zadanie 223

**Treść zadania:**  
Środek okręgu przechodzącego przez punkty $A=(3,0)$ i $B=(0,1)$ należy do prostej $y=x+2$. Znajdź równanie tego okręgu.

**Odpowiedź:**  
$(x-3)^2+(y-5)^2=25$

**Rozwiązanie krok po kroku:**  
1. Środek okręgu $S$ leży na prostej $y = x + 2$, więc ma współrzędne postaci $S = (x, x + 2)$.
2. Ponieważ punkty $A(3,0)$ i $B(0,1)$ należą do okręgu, zachodzi równość $|SA|^2 = |SB|^2 = r^2$:
   $$(x - 3)^2 + (x + 2 - 0)^2 = (x - 0)^2 + (x + 2 - 1)^2$$
   $$(x - 3)^2 + (x + 2)^2 = x^2 + (x + 1)^2$$
3. Rozwijamy kwadraty:
   $$x^2 - 6x + 9 + x^2 + 4x + 4 = x^2 + x^2 + 2x + 1$$
   $$2x^2 - 2x + 13 = 2x^2 + 2x + 1$$
   $$-4x = -12 \implies x = 3$$
4. Wyznaczamy drugą współrzędną środka:
   $$y = 3 + 2 = 5 \implies S = (3, 5)$$
5. Obliczamy kwadrat promienia:
   $$r^2 = |SA|^2 = (3 - 3)^2 + (5 - 0)^2 = 25$$
6. Równanie okręgu to:
   $$(x - 3)^2 + (y - 5)^2 = 25$$

---

### Zadanie 224 [Egzamin dojrzałości (LO – profil podstawowy) w woj. warszawskim w roku 1992]

**Treść zadania:**  
Okrąg przechodzący przez punkt $A=(-1,1)$ jest styczny do prostej o równaniu $y=x-2$ w punkcie $P=(4,2)$. Wyznacz równanie tego okręgu.

**Odpowiedź:**  
$(x-\frac{3}{4})^2+(y-\frac{21}{4})^2=\frac{169}{8}$

**Rozwiązanie krok po kroku:**  
1. Promień łączący środek okręgu $S$ z punktem styczności $P(4,2)$ jest prostopadły do stycznej $y = x - 2$.  
   Współczynnik kierunkowy stycznej to $a = 1$, więc prosta zawierająca środek (normalna) ma współczynnik $a_n = -1$.
2. Równanie prostej prostopadłej przechodzącej przez $P(4,2)$:
   $$y - 2 = -1(x - 4) \implies y = -x + 6$$
   Zatem środek okręgu ma współrzędne $S = (x, -x + 6)$.
3. Punkty $A(-1,1)$ i $P(4,2)$ leżą na okręgu, więc $|SA|^2 = |SP|^2$:
   $$(x - (-1))^2 + (-x + 6 - 1)^2 = (x - 4)^2 + (-x + 6 - 2)^2$$
   $$(x + 1)^2 + (5 - x)^2 = (x - 4)^2 + (4 - x)^2$$
4. Rozwijamy:
   $$(x^2 + 2x + 1) + (x^2 - 10x + 25) = (x^2 - 8x + 16) + (x^2 - 8x + 16)$$
   $$2x^2 - 8x + 26 = 2x^2 - 16x + 32$$
   $$8x = 6 \implies x = \frac{6}{8} = \frac{3}{4}$$
5. Druga współrzędna środka:
   $$y = -\frac{3}{4} + 6 = \frac{21}{4} \implies S = \left(\frac{3}{4}, \frac{21}{4}\right)$$
6. Obliczamy kwadrat promienia $r^2 = |SP|^2$:
   $$r^2 = \left(4 - \frac{3}{4}\right)^2 + \left(2 - \frac{21}{4}\right)^2 = \left(\frac{13}{4}\right)^2 + \left(-\frac{13}{4}\right)^2 = \frac{169}{16} + \frac{169}{16} = \frac{338}{16} = \frac{169}{8}$$
7. Równanie okręgu to:
   $$\left(x - \frac{3}{4}\right)^2 + \left(y - \frac{21}{4}\right)^2 = \frac{169}{8}$$

---

### Zadanie 225 [CKE, matura – poziom rozszerzony, maj 2013]

**Treść zadania:**  
(0–4) Prosta o równaniu $3x-4y-36=0$ przecina okrąg o środku $S=(3,12)$ w punktach $A$ i $B$. Długość odcinka $AB$ jest równa 40. Wyznacz równanie tego okręgu.

**Odpowiedź:**  
$(x-3)^2+(y-12)^2=625$

**Rozwiązanie krok po kroku:**  
1. Obliczamy odległość $d$ środka okręgu $S(3,12)$ od prostej siecznej $3x - 4y - 36 = 0$:
   $$d = \frac{|3 \cdot 3 - 4 \cdot 12 - 36|}{\sqrt{3^2 + (-4)^2}} = \frac{|9 - 48 - 36|}{\sqrt{25}} = \frac{|-75|}{5} = 15$$
2. Cięciwa $AB$ ma długość $|AB| = 40$. Odległość $d$ dzieli cięciwę na dwie równe części o długości:
   $$\frac{|AB|}{2} = \frac{40}{2} = 20$$
3. Z twierdzenia Pitagorasa w trójkącie prostokątnym o bokach $d$, $\frac{|AB|}{2}$ i przeciwprostokątnej $r$:
   $$r^2 = d^2 + \left(\frac{|AB|}{2}\right)^2 = 15^2 + 20^2 = 225 + 400 = 625$$
4. Równanie okręgu o środku $S(3,12)$ i kwadracie promienia $r^2 = 625$:
   $$(x - 3)^2 + (y - 12)^2 = 625$$

---

### Zadanie 226

**Treść zadania:**  
Napisz równanie okręgu o promieniu $\sqrt{5}$ stycznego do prostej o równaniu $x-2y-1=0$ w punkcie $A=(3,1)$.

**Odpowiedź:**  
$(x-2)^2+(y-3)^2=5$ lub $(x-4)^2+(y+1)^2=5$

**Rozwiązanie krok po kroku:**  
1. Prosta styczna ma postać $x - 2y - 1 = 0 \iff y = \frac{1}{2}x - \frac{1}{2}$. Jej współczynnik kierunkowy to $a = \frac{1}{2}$.
2. Prosta normalna (prostopadła do stycznej w punkcie $A(3,1)$), na której leży środek okręgu $S$, ma współczynnik:
   $$a_\perp = -\frac{1}{\frac{1}{2}} = -2$$
3. Równanie prostej normalnej:
   $$y - 1 = -2(x - 3) \implies y = -2x + 7$$
   Zatem środek okręgu ma postać $S = (x_0, -2x_0 + 7)$.
4. Odległość środka $S$ od punktu $A(3,1)$ wynosi $r = \sqrt{5}$, więc $|SA|^2 = 5$:
   $$(x_0 - 3)^2 + (-2x_0 + 7 - 1)^2 = 5$$
   $$(x_0 - 3)^2 + (-2(x_0 - 3))^2 = 5$$
   $$(x_0 - 3)^2 + 4(x_0 - 3)^2 = 5 \implies 5(x_0 - 3)^2 = 5 \implies (x_0 - 3)^2 = 1$$
5. Stąd:
   $$x_0 - 3 = -1 \implies x_0 = 2 \implies y_0 = -2(2) + 7 = 3 \implies S_1 = (2, 3)$$
   $$x_0 - 3 = 1 \implies x_0 = 4 \implies y_0 = -2(4) + 7 = -1 \implies S_2 = (4, -1)$$
6. Szukane okręgi to:
   $$(x - 2)^2 + (y - 3)^2 = 5 \quad \text{lub} \quad (x - 4)^2 + (y + 1)^2 = 5$$

---

### Zadanie 227 [Egzamin dojrzałości (LO – profil podstawowy) w woj. szczecińskim w roku 1989]

**Treść zadania:**  
Napisz równanie okręgu o promieniu $r=\sqrt{5}$ wiedząc, że jego środek należy do prostej o równaniu $x-y+1=0$ i okrąg ten jest styczny do prostej o równaniu $2x+y-1=0$.

**Odpowiedź:**  
$(x+\frac{5}{3})^2+(y+\frac{2}{3})^2=5$ lub $(x-\frac{5}{3})^2+(y-\frac{8}{3})^2=5$  
*(W druku odpowiedzi w książce pojawiła się drobna literówka: $(x+\frac{2}{3})^2$ zamiast $(y+\frac{2}{3})^2$)*.

**Rozwiązanie krok po kroku:**  
1. Środek okręgu $S=(x_0, y_0)$ leży na prostej $x - y + 1 = 0 \iff y = x + 1$, a zatem $S = (x_0, x_0 + 1)$.
2. Odległość środka $S$ od prostej stycznej $2x + y - 1 = 0$ jest równa promieniowi $r = \sqrt{5}$:
   $$d = \frac{|2x_0 + (x_0 + 1) - 1|}{\sqrt{2^2 + 1^2}} = \frac{|3x_0|}{\sqrt{5}} = \sqrt{5}$$
3. Mnożąc obustronnie przez $\sqrt{5}$:
   $$|3x_0| = 5 \implies |x_0| = \frac{5}{3}$$
4. Stąd:
   - Dla $x_0 = -\frac{5}{3}$:
     $$y_0 = -\frac{5}{3} + 1 = -\frac{2}{3} \implies S_1 = \left(-\frac{5}{3}, -\frac{2}{3}\right)$$
     Równanie okręgu: $\left(x + \frac{5}{3}\right)^2 + \left(y + \frac{2}{3}\right)^2 = 5$.
   - Dla $x_0 = \frac{5}{3}$:
     $$y_0 = \frac{5}{3} + 1 = \frac{8}{3} \implies S_2 = \left(\frac{5}{3}, \frac{8}{3}\right)$$
     Równanie okręgu: $\left(x - \frac{5}{3}\right)^2 + \left(y - \frac{8}{3}\right)^2 = 5$.

---

### Zadanie 228 [W]

**Treść zadania:**  
Okrąg styczny do osi $Ox$ w punkcie $A=(-3,0)$ odcina na dodatniej półosi osi $Oy$ cięciwę o długości 8.  
a) [W] Oblicz długość promienia okręgu i podaj współrzędne środka okręgu.  
b) Podaj współrzędne punktów, w których okrąg przecina oś $Oy$.

**Odpowiedź:**  
a) Środek: $(-3,5)$, promień: 5; b) $(0,1)$, $(0,9)$.  
*Wskazówka:* Ile jest równa odległość środka okręgu od cięciwy, o której mowa w zadaniu?

**Rozwiązanie krok po kroku:**  
**a)**  
1. Skoro okrąg jest styczny do osi $Ox$ w punkcie $A(-3,0)$, prosta prostopadła do osi $Ox$ w punkcie styczności to $x = -3$. Na tej prostej leży środek okręgu $S$, zatem $x_S = -3$.
2. Okrąg przecina dodatnią półoś $Oy$, więc środek ma dodatnią rzędną $y_S > 0$.  
   Styczność z osią $Ox$ oznacza, że promień okręgu jest równy $r = y_S$, czyli $S = (-3, r)$.
3. Cięciwa leży na osi $Oy$ (prosta $x = 0$). Odległość środka $S(-3, r)$ od osi $Oy$ wynosi:
   $$d = |x_S| = |-3| = 3$$
4. Odległość od cięciwy dzieli ją na dwie połowy o długości $\frac{8}{2} = 4$.
5. W trójkącie prostokątnym o przyprostokątnych $d = 3$ i $4$ oraz przeciwprostokątnej $r$:
   $$r^2 = 3^2 + 4^2 = 9 + 16 = 25 \implies r = 5$$
6. Zatem promień wynosi $r = 5$, a współrzędne środka to $S = (-3, 5)$.

**b)**  
1. Równanie okręgu ma postać:
   $$(x + 3)^2 + (y - 5)^2 = 25$$
2. Punkty przecięcia z osią $Oy$ wyznaczamy dla $x = 0$:
   $$(0 + 3)^2 + (y - 5)^2 = 25 \iff 9 + (y - 5)^2 = 25 \iff (y - 5)^2 = 16$$
   $$y - 5 = -4 \implies y = 1$$
   $$y - 5 = 4 \implies y = 9$$
3. Punkty przecięcia z osią $Oy$ to $(0, 1)$ oraz $(0, 9)$.

---

### Zadanie 229 [Egzamin dojrzałości (LO – profil podstawowy) w woj. tarnowskim w roku 1989]

**Treść zadania:**  
Napisz równanie okręgu stycznego do prostej o równaniu $y=\sqrt{3}x-2(\sqrt{3}+1)$ i dodatnich półosi układu współrzędnych.

**Odpowiedź:**  
$(x-2)^2+(y-2)^2=4$

**Rozwiązanie krok po kroku:**  
1. Okrąg jest styczny do obu dodatnich półosi układu współrzędnych, więc jego środek ma współrzędne $S=(r, r)$, gdzie $r > 0$ jest promieniem okręgu.
2. Zapisujemy równanie prostej w postaci ogólnej:
   $$\sqrt{3}x - y - 2(\sqrt{3}+1) = 0$$
3. Odległość środka $S(r, r)$ od tej prostej musi być równa $r$:
   $$\frac{|\sqrt{3}r - r - 2(\sqrt{3}+1)|}{\sqrt{(\sqrt{3})^2 + (-1)^2}} = r$$
   $$\frac{|(\sqrt{3}-1)r - 2(\sqrt{3}+1)|}{\sqrt{3+1}} = r \iff \frac{|(\sqrt{3}-1)r - 2(\sqrt{3}+1)|}{2} = r$$
   $$|(\sqrt{3}-1)r - 2(\sqrt{3}+1)| = 2r$$
4. Rozpatrujemy dwa przypadki:
   - $(\sqrt{3}-1)r - 2(\sqrt{3}+1) = 2r \implies (\sqrt{3}-3)r = 2(\sqrt{3}+1) \implies r = \frac{2(\sqrt{3}+1)}{\sqrt{3}-3} < 0$ (sprzeczność z $r > 0$).
   - $(\sqrt{3}-1)r - 2(\sqrt{3}+1) = -2r \implies (\sqrt{3}-1+2)r = 2(\sqrt{3}+1) \implies (\sqrt{3}+1)r = 2(\sqrt{3}+1) \implies r = 2$.
5. Otrzymujemy promień $r = 2$ oraz środek $S = (2, 2)$.
6. Równanie okręgu to:
   $$(x - 2)^2 + (y - 2)^2 = 4$$

---

### Zadanie 230 [CKE, matura – poziom podstawowy, czerwiec 2011]

**Treść zadania:**  
(0–4) Wyznacz równanie okręgu przechodzącego przez punkt $A=(1,8)$ i stycznego do obu osi układu współrzędnych. Rozważ wszystkie przypadki.

**Odpowiedź:**  
$(x-5)^2+(y-5)^2=25$ lub $(x-13)^2+(y-13)^2=169$

**Rozwiązanie krok po kroku:**  
1. Punkt $A(1,8)$ leży w I ćwiartce układu współrzędnych, więc okrąg styczny do obu osi również musi znajdować się w I ćwiartce.
2. Środek takiego okręgu ma współrzędne $S=(r, r)$, gdzie $r > 0$, a równanie okręgu ma postać:
   $$(x - r)^2 + (y - r)^2 = r^2$$
3. Punkt $A(1,8)$ leży na okręgu, więc jego współrzędne spełniają to równanie:
   $$(1 - r)^2 + (8 - r)^2 = r^2$$
   $$(1 - 2r + r^2) + (64 - 16r + r^2) = r^2$$
   $$r^2 - 18r + 65 = 0$$
4. Rozwiązujemy równanie kwadratowe:
   $$\Delta = (-18)^2 - 4 \cdot 1 \cdot 65 = 324 - 260 = 64, \quad \sqrt{\Delta} = 8$$
   $$r_1 = \frac{18 - 8}{2} = 5, \quad r_2 = \frac{18 + 8}{2} = 13$$
5. Otrzymujemy dwa przypadki:
   - Dla $r = 5$: środek $S_1=(5,5)$, równanie okręgu: $(x - 5)^2 + (y - 5)^2 = 25$.
   - Dla $r = 13$: środek $S_2=(13,13)$, równanie okręgu: $(x - 13)^2 + (y - 13)^2 = 169$.

---

### Zadanie 231

**Treść zadania:**  
Okrąg przedstawiony na rysunku jest styczny do osi $Ox$ w punkcie $(2,0)$, a prosta $k$ przechodzi przez punkt $A=(-6,0)$ i jest styczna do okręgu w punkcie $B$.  
a) Jaką długość ma odcinek $AB$?  
b) Znajdź równanie stycznej $k$ wiedząc dodatkowo, że punkt $A$ znajduje się w odległości $6\sqrt{2}$ od środka okręgu.

**Odpowiedź:**  
a) $|AB|=8$; b) $4\sqrt{2}x-7y+24\sqrt{2}=0$.

**Rozwiązanie krok po kroku:**  
**a)**  
1. Niech $P=(2,0)$ będzie punktem styczności okręgu z osią $Ox$.
2. Z punktu $A=(-6,0)$ poprowadzono dwie styczne do tego samego okręgu: oś $Ox$ ze stycznością w $P(2,0)$ oraz prostą $k$ ze stycznością w punkcie $B$.
3. Z twierdzenia o odcinkach stycznych poprowadzonych z jednego punktu zewnętrznego:
   $$|AB| = |AP|$$
4. Obliczamy odległość $|AP|$:
   $$|AP| = |2 - (-6)| = 8 \implies |AB| = 8$$

**b)**  
1. Środek okręgu $S$ leży na prostej $x = 2$ prostopadłej do osi $Ox$ w punkcie $P(2,0)$, więc $S = (2, r)$, gdzie $r > 0$.
2. W trójkącie prostokątnym $APS$ o przyprostokątnych $|AP| = 8$ i $|PS| = r$ oraz przeciwprostokątnej $|AS| = 6\sqrt{2}$:
   $$|AP|^2 + |PS|^2 = |AS|^2$$
   $$8^2 + r^2 = (6\sqrt{2})^2 \implies 64 + r^2 = 72 \implies r^2 = 8 \implies r = 2\sqrt{2}$$
   Zatem $S = (2, 2\sqrt{2})$.
3. Prosta $k$ przechodzi przez $A(-6,0)$, więc jej równanie ogólne ma postać:
   $$y - 0 = a(x + 6) \iff ax - y + 6a = 0$$
4. Odległość środka $S(2, 2\sqrt{2})$ od prostej $k$ wynosi $r = 2\sqrt{2}$:
   $$\frac{|2a - 2\sqrt{2} + 6a|}{\sqrt{a^2 + 1}} = 2\sqrt{2} \iff \frac{|8a - 2\sqrt{2}|}{\sqrt{a^2 + 1}} = 2\sqrt{2} \iff \frac{|4a - \sqrt{2}|}{\sqrt{a^2 + 1}} = \sqrt{2}$$
5. Podnosimy do kwadratu:
   $$(4a - \sqrt{2})^2 = 2(a^2 + 1) \iff 16a^2 - 8\sqrt{2}a + 2 = 2a^2 + 2$$
   $$14a^2 - 8\sqrt{2}a = 0 \iff 2a(7a - 4\sqrt{2}) = 0$$
6. Mamy dwa rozwiązania:
   - $a = 0$ (odpowiada osi $Ox$),
   - $a = \frac{4\sqrt{2}}{7}$ (odpowiada prostej $k$).
7. Wstawiamy $a = \frac{4\sqrt{2}}{7}$ do równania prostej:
   $$\frac{4\sqrt{2}}{7}x - y + 6 \cdot \frac{4\sqrt{2}}{7} = 0 \iff 4\sqrt{2}x - 7y + 24\sqrt{2} = 0$$

---

### Zadanie 232 [CKE, matura – poziom rozszerzony, czerwiec 2012]

**Treść zadania:**  
(0–4) Okrąg jest styczny do osi układu współrzędnych w punktach $A=(0,2)$ i $B=(2,0)$ oraz jest styczny do prostej $l$ w punkcie $C=(1,a)$, gdzie $a>1$. Wyznacz równanie prostej $l$.

**Odpowiedź:**  
$x-\sqrt{3}y+2\sqrt{3}+2=0$

**Rozwiązanie krok po kroku:**  
1. Okrąg jest styczny do osi $Oy$ w $A(0,2)$ i do osi $Ox$ w $B(2,0)$, więc jego środek to $S=(2,2)$, a promień $r=2$.  
   Równanie okręgu:
   $$(x - 2)^2 + (y - 2)^2 = 4$$
2. Punkt $C(1,a)$ należy do tego okręgu:
   $$(1 - 2)^2 + (a - 2)^2 = 4 \iff 1 + (a - 2)^2 = 4 \iff (a - 2)^2 = 3$$
   Ponieważ $a > 1$, wybieramy $a - 2 = \sqrt{3} \implies a = 2 + \sqrt{3}$.  
   Zatem punkt styczności to $C = (1, 2 + \sqrt{3})$.
3. Prosta $l$ jest prostopadła do promienia $SC$ w punkcie $C$.  
   Wektor $\vec{SC}$ wynosi:
   $$\vec{SC} = [1 - 2, 2 + \sqrt{3} - 2] = [-1, \sqrt{3}]$$
   Wektor $\vec{SC}$ jest wektorem normalnym szukanej prostej $l$.
4. Równanie prostej $l$:
   $$-1 \cdot (x - 1) + \sqrt{3} \cdot (y - (2 + \sqrt{3})) = 0$$
   $$-x + 1 + \sqrt{3}y - 2\sqrt{3} - 3 = 0 \iff -x + \sqrt{3}y - 2\sqrt{3} - 2 = 0$$
   Mnożąc przez $-1$:
   $$x - \sqrt{3}y + 2\sqrt{3} + 2 = 0$$

---

### Zadanie 233 [CKE, matura – poziom rozszerzony, maj 2014]

**Treść zadania:**  
(0–4) Punkty $A, B, C, D, E, F$ są kolejnymi wierzchołkami sześciokąta foremnego, przy czym $A=(0,2\sqrt{3})$, $B=(2,0)$, a $C$ leży na osi $Ox$. Wyznacz równanie stycznej do okręgu opisanego na tym sześciokącie przechodzącej przez wierzchołek $E$.

**Odpowiedź:**  
$y=-\frac{\sqrt{3}}{3}x+6\sqrt{3}$

**Rozwiązanie krok po kroku:**  
1. Obliczamy długość boku sześciokąta foremnego $a = |AB|$:
   $$a = \sqrt{(2 - 0)^2 + (0 - 2\sqrt{3})^2} = \sqrt{4 + 12} = \sqrt{16} = 4$$
2. Wierzchołek $C$ leży na osi $Ox$, więc $C = (x_C, 0)$.  
   Ponieważ $|BC| = a = 4$, mamy $|x_C - 2| = 4 \implies x_C = 6$ lub $x_C = -2$.  
   Kąt wewnętrzny sześciokąta foremnego $\angle ABC = 120^\circ$.  
   Wektor $\vec{BA} = [-2, 2\sqrt{3}]$.  
   Dla $C(6,0)$: $\vec{BC} = [4, 0]$.  
   Iloczyn skalarny: $\vec{BA} \circ \vec{BC} = -2 \cdot 4 + 2\sqrt{3} \cdot 0 = -8$.  
   $\cos \angle ABC = \frac{-8}{4 \cdot 4} = -\frac{1}{2}$, co odpowiada kątowi $120^\circ$. Zatem $C = (6, 0)$.
3. Wyznaczamy środek $S$ okręgu opisanego na sześciokącie:  
   W sześciokącie foremnym trójkąt $SBC$ jest równoboczny o boku 4, a czworokąt $ABCS$ ma wierzchołek $S$ taki, że $\vec{BS} = \vec{BA} + \vec{BC}$:
   $$\vec{BS} = [-2, 2\sqrt{3}] + [4, 0] = [2, 2\sqrt{3}]$$
   $$S = B + \vec{BS} = (2 + 2, 0 + 2\sqrt{3}) = (4, 2\sqrt{3})$$
4. Wierzchołek $E$ jest symetryczny do wierzchołka $B$ względem środka $S$:
   $$E = 2S - B = (2 \cdot 4 - 2, 2 \cdot 2\sqrt{3} - 0) = (6, 4\sqrt{3})$$
5. Promień $\vec{SE}$ poprowadzony do punktu $E$ ma wektor:
   $$\vec{SE} = [6 - 4, 4\sqrt{3} - 2\sqrt{3}] = [2, 2\sqrt{3}]$$
   Współczynnik kierunkowy prostej $SE$:
   $$a_{SE} = \frac{2\sqrt{3}}{2} = \sqrt{3}$$
6. Styczna do okręgu w punkcie $E$ jest prostopadła do promienia $SE$, więc jej współczynnik wynosi:
   $$a_s = -\frac{1}{\sqrt{3}} = -\frac{\sqrt{3}}{3}$$
7. Równanie stycznej przechodzącej przez $E(6, 4\sqrt{3})$:
   $$y - 4\sqrt{3} = -\frac{\sqrt{3}}{3}(x - 6) \iff y - 4\sqrt{3} = -\frac{\sqrt{3}}{3}x + 2\sqrt{3} \iff y = -\frac{\sqrt{3}}{3}x + 6\sqrt{3}$$

---

### Zadanie 234 [CKE, Przykładowy zestaw zadań 2014/2015 – poziom rozszerzony]

**Treść zadania:**  
(0–3) Wyznacz wszystkie wartości parametru $m$, dla których prosta o równaniu $y=mx+(2m+3)$ ma dokładnie dwa punkty wspólne z okręgiem o środku w punkcie $S=(0,0)$ i promieniu $r=3$.

**Odpowiedź:**  
$m \in (-\infty, 0) \cup (2{,}4; +\infty)$

**Rozwiązanie krok po kroku:**  
1. Prosta ma dokładnie dwa punkty wspólne z okręgiem (jest sieczną) wtedy i tylko wtedy, gdy odległość $d$ środka okręgu $S(0,0)$ od prostej jest mniejsza od promienia $r = 3$:
   $$d < 3$$
2. Zapisujemy równanie prostej w postaci ogólnej:
   $$mx - y + (2m + 3) = 0$$
3. Obliczamy odległość punktu $S(0,0)$ od prostej:
   $$d = \frac{|m \cdot 0 - 0 + 2m + 3|}{\sqrt{m^2 + (-1)^2}} = \frac{|2m + 3|}{\sqrt{m^2 + 1}}$$
4. Rozwiązujemy nierówność $d < 3$:
   $$\frac{|2m + 3|}{\sqrt{m^2 + 1}} < 3 \iff |2m + 3| < 3\sqrt{m^2 + 1}$$
5. Ponieważ obie strony są dodatnie, podnosimy do kwadratu:
   $$(2m + 3)^2 < 9(m^2 + 1)$$
   $$4m^2 + 12m + 9 < 9m^2 + 9$$
   $$0 < 5m^2 - 12m \iff m(5m - 12) > 0$$
6. Miejsca zerowe to $m = 0$ oraz $m = \frac{12}{5} = 2{,}4$.  
   Znak nierówności jest dodatni, więc rozwiązaniem jest:
   $$m \in (-\infty, 0) \cup (2{,}4; +\infty)$$

---

### Zadanie 235

**Treść zadania:**  
Znajdź te wartości parametru $m$, dla których okręgi $(x+2)^2+(y-m)^2=4$ i $x^2+y^2=2$ są styczne.

**Odpowiedź:**  
$m=-\sqrt{4\sqrt{2}+2}$ lub $m=\sqrt{4\sqrt{2}+2}$

**Rozwiązanie krok po kroku:**  
1. Odczytujemy środki i promienie okręgów:
   - $o_1$: środek $S_1 = (-2, m)$, promień $r_1 = \sqrt{4} = 2$.
   - $o_2$: środek $S_2 = (0, 0)$, promień $r_2 = \sqrt{2}$.
2. Kwadrat odległości między środkami:
   $$|S_1 S_2|^2 = (0 - (-2))^2 + (0 - m)^2 = 4 + m^2$$
3. Okręgi są styczne, gdy:
   - są styczne zewnętrznie: $|S_1 S_2| = r_1 + r_2 = 2 + \sqrt{2}$,
   - lub są styczne wewnętrznie: $|S_1 S_2| = |r_1 - r_2| = 2 - \sqrt{2}$.
4. **Styczność zewnętrzna:**
   $$|S_1 S_2|^2 = (2 + \sqrt{2})^2 = 4 + 4\sqrt{2} + 2 = 6 + 4\sqrt{2}$$
   $$4 + m^2 = 6 + 4\sqrt{2} \implies m^2 = 2 + 4\sqrt{2}$$
   Ponieważ $2 + 4\sqrt{2} > 0$:
   $$m = \sqrt{4\sqrt{2} + 2} \quad \text{lub} \quad m = -\sqrt{4\sqrt{2} + 2}$$
5. **Styczność wewnętrzna:**
   $$|S_1 S_2|^2 = (2 - \sqrt{2})^2 = 4 - 4\sqrt{2} + 2 = 6 - 4\sqrt{2}$$
   $$4 + m^2 = 6 - 4\sqrt{2} \implies m^2 = 2 - 4\sqrt{2}$$
   Zauważmy, że $4\sqrt{2} = \sqrt{32} \approx 5{,}66 > 2$, więc $2 - 4\sqrt{2} < 0$. Równanie to nie ma rozwiązań rzeczywistych.
6. Ostatecznie: $m \in \{-\sqrt{4\sqrt{2}+2}, \sqrt{4\sqrt{2}+2}\}$.

---

### Zadanie 236

**Treść zadania:**  
Znajdź równanie prostej równoległej do prostej o równaniu $3x+4y+1=0$ i stycznej do okręgu o równaniu $(x-2)^2+(y-1)^2=1$.

**Odpowiedź:**  
$3x+4y-5=0$ lub $3x+4y-15=0$

**Rozwiązanie krok po kroku:**  
1. Prosta równoległa do $3x + 4y + 1 = 0$ ma postać ogólną:
   $$3x + 4y + C = 0$$
2. Z równania okręgu odczytujemy środek $S=(2,1)$ oraz promień $r=1$.
3. Prosta jest styczna do okręgu wtedy i tylko wtedy, gdy odległość środka $S$ od tej prostej wynosi $r = 1$:
   $$\frac{|3 \cdot 2 + 4 \cdot 1 + C|}{\sqrt{3^2 + 4^2}} = 1 \iff \frac{|10 + C|}{5} = 1 \iff |10 + C| = 5$$
4. Rozwiązujemy dwa przypadki:
   $$10 + C = 5 \implies C = -5$$
   $$10 + C = -5 \implies C = -15$$
5. Szukane równania prostych to:
   $$3x + 4y - 5 = 0 \quad \text{lub} \quad 3x + 4y - 15 = 0$$

---

### Zadanie 237 [W] [CKE, matura – poziom rozszerzony, maj 2011]

**Treść zadania:**  
(0–4) [W] Oblicz miarę kąta między stycznymi do okręgu $(x+1)^2+(y-1)^2=5$ poprowadzonymi przez punkt $A=(2,0)$.

**Odpowiedź:**  
$90^\circ$  
*Wskazówka:* I SPOSÓB. $S$ – środek okręgu, $P$ – punkt wspólny okręgu i jednej ze stycznych przechodzących przez punkt $A$. Znając długości boków trójkąta prostokątnego $PAS$ możemy obliczyć wartość dowolnej funkcji trygonometrycznej kąta $PAS$.  
II SPOSÓB. Znajdź równania stycznych do okręgu przechodzących przez punkt $A$.

**Rozwiązanie krok po kroku:**  
**Sposób I (trygonometryczny):**  
1. Środek okręgu to $S=(-1,1)$, a jego promień to $r = \sqrt{5}$.
2. Obliczamy odległość punktu $A(2,0)$ od środka $S(-1,1)$:
   $$|AS| = \sqrt{(2 - (-1))^2 + (0 - 1)^2} = \sqrt{3^2 + (-1)^2} = \sqrt{9 + 1} = \sqrt{10}$$
3. Niech $P$ będzie punktem styczności okręgu z jedną ze stycznych poprowadzonych z $A$. Trójkąt $APS$ jest prostokątny z kątem prostym przy wierzchołku $P$ ($SP \perp AP$).  
   Boki trójkąta to: przeciwprostokątna $|AS| = \sqrt{10}$, przyprostokątna $|SP| = r = \sqrt{5}$.
4. Niech $\beta = \angle PAS$ oznacza połowę kąta między stycznymi:
   $$\sin \beta = \frac{|SP|}{|AS|} = \frac{\sqrt{5}}{\sqrt{10}} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$$
5. Ponieważ $\beta \in (0^\circ, 90^\circ)$, mamy $\beta = 45^\circ$.
6. Kąt między obydwoma stycznymi wynosi $2\beta = 2 \cdot 45^\circ = 90^\circ$.

**Sposób II (analityczny):**  
1. Prosta przechodząca przez $A(2,0)$ o współczynniku kierunkowym $a$ ma postać $y = a(x - 2) \iff ax - y - 2a = 0$.  
   (Dla prostej pionowej $x = 2$ odległość od $S(-1,1)$ wynosi 3, a nie $\sqrt{5}$).
2. Odległość od $S(-1,1)$ jest równa $r = \sqrt{5}$:
   $$\frac{|-a - 1 - 2a|}{\sqrt{a^2 + 1}} = \sqrt{5} \iff \frac{|3a + 1|}{\sqrt{a^2 + 1}} = \sqrt{5}$$
3. Podnosimy do kwadratu:
   $$(3a + 1)^2 = 5(a^2 + 1) \iff 9a^2 + 6a + 1 = 5a^2 + 5 \iff 4a^2 + 6a - 4 = 0 \iff 2a^2 + 3a - 2 = 0$$
   $$a_1 = \frac{1}{2}, \quad a_2 = -2$$
4. Zauważmy, że $a_1 \cdot a_2 = \frac{1}{2} \cdot (-2) = -1$, co oznacza, że styczne są wzajemnie prostopadłe. Miara kąta między nimi wynosi $90^\circ$.

---

### Zadanie 238 [W]

**Treść zadania:**  
Wyznacz równanie okręgu przechodzącego przez punkt $M=(0,1)$ i stycznego do dwóch prostych o równaniach $x+y-2=0$ i $x+y+3=0$.

**Odpowiedź:**  
$(x+\frac{7}{4})^2+(y-\frac{5}{4})^2=\frac{25}{8}$ lub $(x-\frac{1}{4})^2+(y+\frac{3}{4})^2=\frac{25}{8}$  
*Wskazówka:* Środek szukanego okręgu leży na prostej równoległej do danych prostych i przechodzącej przez środek dowolnego odcinka, którego jeden koniec leży na prostej $x+y-2=0$ (np. punkt $(0,2)$), a drugi na prostej $x+y+3=0$ (np. punkt $(0,-3)$).

**Rozwiązanie krok po kroku:**  
1. Odległość między prostymi równoległymi $x+y-2=0$ i $x+y+3=0$ jest równa średnicy szukanego okręgu $2r$:
   $$2r = \frac{|-2 - 3|}{\sqrt{1^2 + 1^2}} = \frac{5}{\sqrt{2}} \implies r = \frac{5}{2\sqrt{2}} \implies r^2 = \frac{25}{8}$$
2. Środek okręgu $S$ leży na osi symetrii obu prostych, czyli na prostej równoległej leżącej dokładnie pośrodku nich:
   $$x + y + \frac{-2 + 3}{2} = 0 \iff x + y + \frac{1}{2} = 0 \iff y = -x - \frac{1}{2}$$
   Zatem środek ma współrzędne $S = \left(x_0, -x_0 - \frac{1}{2}\right)$.
3. Punkt $M(0,1)$ należy do okręgu, więc $|SM|^2 = r^2$:
   $$(x_0 - 0)^2 + \left(-x_0 - \frac{1}{2} - 1\right)^2 = \frac{25}{8}$$
   $$x_0^2 + \left(x_0 + \frac{3}{2}\right)^2 = \frac{25}{8} \iff x_0^2 + x_0^2 + 3x_0 + \frac{9}{4} = \frac{25}{8}$$
   $$2x_0^2 + 3x_0 - \frac{7}{8} = 0$$
   Mnożymy przez 8:
   $$16x_0^2 + 24x_0 - 7 = 0$$
4. Rozwiązujemy równanie kwadratowe:
   $$\Delta = 24^2 - 4 \cdot 16 \cdot (-7) = 576 + 448 = 1024 = 32^2$$
   $$x_{0,1} = \frac{-24 - 32}{32} = -\frac{56}{32} = -\frac{7}{4}$$
   $$x_{0,2} = \frac{-24 + 32}{32} = \frac{8}{32} = \frac{1}{4}$$
5. Wyznaczamy drugie współrzędne:
   - Dla $x_{0,1} = -\frac{7}{4}$:
     $$y_{0,1} = -\left(-\frac{7}{4}\right) - \frac{1}{2} = \frac{7}{4} - \frac{2}{4} = \frac{5}{4} \implies S_1 = \left(-\frac{7}{4}, \frac{5}{4}\right)$$
     Równanie: $\left(x + \frac{7}{4}\right)^2 + \left(y - \frac{5}{4}\right)^2 = \frac{25}{8}$.
   - Dla $x_{0,2} = \frac{1}{4}$:
     $$y_{0,2} = -\frac{1}{4} - \frac{1}{2} = -\frac{3}{4} \implies S_2 = \left(\frac{1}{4}, -\frac{3}{4}\right)$$
     Równanie: $\left(x - \frac{1}{4}\right)^2 + \left(y + \frac{3}{4}\right)^2 = \frac{25}{8}$.

---

### Zadanie 239 [*] [R]

**Treść zadania:**  
Znajdź współrzędne środków okręgów stycznych do prostych o równaniach $x+2y+9=0$ i $2x-y-2=0$ i przechodzących przez początek układu współrzędnych.

**Odpowiedź:**  
$S_1=(-4{,}4,\, 6{,}2)$, $S_2=(-2,-1)$  
*Rozwiązanie oficjalne:* Oznaczenia: $S=(a,b)$ – środek okręgu, $A=(0,0)$, $r$ – długość promienia okręgu, $d_1$ – odległość punktu $S$ od prostej $x+2y+9=0$, $d_2$ – odległość punktu $S$ od prostej $2x-y-2=0$.  
Liczby $d_1=\frac{|a+2b+9|}{\sqrt{5}}$, $d_2=\frac{|2a-b-2|}{\sqrt{5}}$, $|SA|=\sqrt{a^2+b^2}$ są równe.  
$d_1=d_2 \iff |a+2b+9|=|2a-b-2| \iff [a+2b+9=2a-b-2 \lor a+2b+9=-(2a-b-2)] \iff (a=3b+11 \lor b=-3a-7)$.  
$d_1=|SA| \iff |a+2b+9|=\sqrt{5(a^2+b^2)}$.  
Zatem (1) $(a=3b+11 \land |a+2b+9|=\sqrt{5(a^2+b^2)})$ lub (2) $(b=-3a-7 \land |a+2b+9|=\sqrt{5(a^2+b^2)})$.  
Rozwiązujemy układ (1). Podstawiamy do drugiego równania $3b+11$ w miejsce $a$: $5|b+4|=\sqrt{5(10b^2+66b+121)}$, podnosimy do kwadratu obie strony: $5(b+4)^2=10b^2+66b+121$, sprowadzamy otrzymane równanie do postaci $5b^2+26b+41=0$, ostatnie równanie nie ma rozwiązań ($\Delta < 0$), więc układ (1) nie ma rozwiązań.  
Rozwiązujemy układ (2). Podstawiamy do drugiego równania $-3a-7$ w miejsce $b$: $5|a+1|=\sqrt{5(10a^2+42a+49)}$, podnosimy do kwadratu: $5(a+1)^2=10a^2+42a+49$, sprowadzamy otrzymane równanie do postaci $5a^2+32a+44=0$, rozwiązaniami ostatniego równania są liczby $-4{,}4$ i $-2$, więc rozwiązaniami układu (2) są pary liczb $(a,b)=(-4{,}4,\, 6{,}2)$ i $(a,b)=(-2,-1)$. Zatem środkami okręgów są punkty $S_1=(-4{,}4,\, 6{,}2)$ i $S_2=(-2,-1)$.

**Rozwiązanie krok po kroku:**  
1. Niech $S=(a,b)$ będzie środkiem okręgu. Odległości od prostych $k_1: x+2y+9=0$ oraz $k_2: 2x-y-2=0$ wynoszą:
   $$d_1 = \frac{|a + 2b + 9|}{\sqrt{1^2 + 2^2}} = \frac{|a + 2b + 9|}{\sqrt{5}}$$
   $$d_2 = \frac{|2a - b - 2|}{\sqrt{2^2 + (-1)^2}} = \frac{|2a - b - 2|}{\sqrt{5}}$$
2. Okrąg jest styczny do obu prostych, więc $d_1 = d_2$:
   $$|a + 2b + 9| = |2a - b - 2|$$
   Daje to dwa przypadki dwusiecznych kątów między prostymi:
   - $a + 2b + 9 = 2a - b - 2 \implies a = 3b + 11$
   - $a + 2b + 9 = -(2a - b - 2) \implies 3a + b + 7 = 0 \implies b = -3a - 7$
3. Okrąg przechodzi przez punkt $(0,0)$, więc jego promień wynosi $r = \sqrt{a^2 + b^2}$. Zatem $d_1 = r$:
   $$\frac{|a + 2b + 9|}{\sqrt{5}} = \sqrt{a^2 + b^2} \iff |a + 2b + 9| = \sqrt{5(a^2 + b^2)}$$
4. **Przypadek 1:** $a = 3b + 11$.  
   Wtedy $a + 2b + 9 = 3b + 11 + 2b + 9 = 5b + 20 = 5(b + 4)$.  
   Z kolei $a^2 + b^2 = (3b + 11)^2 + b^2 = 10b^2 + 66b + 121$.  
   Podstawiając i podnosząc do kwadratu:
   $$[5(b + 4)]^2 = 5(10b^2 + 66b + 121)$$
   $$25(b^2 + 8b + 16) = 50b^2 + 330b + 605$$
   Dzieląc przez 5:
   $$5(b^2 + 8b + 16) = 10b^2 + 66b + 121$$
   $$5b^2 + 40b + 80 = 10b^2 + 66b + 121 \iff 5b^2 + 26b + 41 = 0$$
   Wyróżnik: $\Delta = 26^2 - 4 \cdot 5 \cdot 41 = 676 - 820 = -144 < 0$. Brak rozwiązań rzeczywistych.
5. **Przypadek 2:** $b = -3a - 7$.  
   Wtedy $a + 2b + 9 = a + 2(-3a - 7) + 9 = -5a - 5 = -5(a + 1)$.  
   Z kolei $a^2 + b^2 = a^2 + (-3a - 7)^2 = a^2 + 9a^2 + 42a + 49 = 10a^2 + 42a + 49$.  
   Podstawiając i podnosząc do kwadratu:
   $$[-5(a + 1)]^2 = 5(10a^2 + 42a + 49)$$
   $$25(a^2 + 2a + 1) = 5(10a^2 + 42a + 49)$$
   Dzieląc przez 5:
   $$5(a^2 + 2a + 1) = 10a^2 + 42a + 49$$
   $$5a^2 + 10a + 5 = 10a^2 + 42a + 49 \iff 5a^2 + 32a + 44 = 0$$
   Wyróżnik: $\Delta = 32^2 - 4 \cdot 5 \cdot 44 = 1024 - 880 = 144 = 12^2$.
   $$a_1 = \frac{-32 - 12}{10} = -\frac{44}{10} = -4{,}4$$
   $$a_2 = \frac{-32 + 12}{10} = -\frac{20}{10} = -2$$
6. Wyznaczamy odpowiadające wartości $b$:
   - Dla $a = -4{,}4$:
     $$b = -3(-4{,}4) - 7 = 13{,}2 - 7 = 6{,}2 \implies S_1 = (-4{,}4,\, 6{,}2)$$
   - Dla $a = -2$:
     $$b = -3(-2) - 7 = 6 - 7 = -1 \implies S_2 = (-2, -1)$$
7. Środkami okręgów są punkty $S_1 = (-4{,}4,\, 6{,}2)$ oraz $S_2 = (-2, -1)$.

---

### Zadanie 240

**Treść zadania:**  
Punkty $A=(12,6)$ i $B=(16,3)$ są wierzchołkami trójkąta $ABC$. Oblicz długość odcinka łączącego środki boków $AC$ i $BC$.

**Odpowiedź:**  
$2{,}5$

**Rozwiązanie krok po kroku:**  
1. Niech $M$ oznacza środek boku $AC$, a $N$ środek boku $BC$.
2. Z twierdzenia o odcinku łączącym środki dwóch boków trójkąta (linii środkowej trójkąta), odcinek $MN$ jest równoległy do trzeciego boku $AB$, a jego długość jest równa połowie długości boku $AB$:
   $$|MN| = \frac{1}{2}|AB|$$
3. Obliczamy długość boku $AB$:
   $$|AB| = \sqrt{(16 - 12)^2 + (3 - 6)^2} = \sqrt{4^2 + (-3)^2} = \sqrt{16 + 9} = \sqrt{25} = 5$$
4. Obliczamy szukaną długość odcinka $MN$:
   $$|MN| = \frac{1}{2} \cdot 5 = 2{,}5$$

---

### Zadanie 241

**Treść zadania:**  
Punkty $B=(2,-6)$ i $C=(4,14)$ są wierzchołkami trójkąta $ABC$, a punkt $P=(1,-2)$ jest środkiem boku $AB$. Wyznacz równanie prostej zawierającej bok $AC$.

**Odpowiedź:**  
$y=3x+2$ (lub $3x-y+2=0$)

**Rozwiązanie krok po kroku:**  
1. Punkt $P(1,-2)$ jest środkiem odcinka $AB$, gdzie $B=(2,-6)$. Niech $A=(x_A, y_A)$. Ze wzoru na współrzędne środka odcinka:
   $$1 = \frac{x_A + 2}{2} \implies x_A + 2 = 2 \implies x_A = 0$$
   $$-2 = \frac{y_A - 6}{2} \implies y_A - 6 = -4 \implies y_A = 2$$
   Zatem wierzchołek $A$ ma współrzędne $A=(0,2)$.
2. Prosta zawierająca bok $AC$ przechodzi przez punkty $A(0,2)$ i $C(4,14)$.
3. Obliczamy współczynnik kierunkowy prostej $AC$:
   $$a = \frac{y_C - y_A}{x_C - x_A} = \frac{14 - 2}{4 - 0} = \frac{12}{4} = 3$$
4. Ponieważ prosta przecina oś $Oy$ w punkcie $A(0,2)$, jej wyraz wolny to $b = 2$.
5. Równanie prostej zawierającej bok $AC$ to:
   $$y = 3x + 2 \quad (\text{w postaci ogólnej: } 3x - y + 2 = 0)$$

---

### Zadanie 242 [CKE, Przykładowy zestaw zadań 2014/2015 – poziom podstawowy]

**Treść zadania:**  
(0–2) Proste $l$ i $k$ przecinają się w punkcie $A=(0,4)$. Prosta $l$ wyznacza wraz z dodatnimi półosiami układu współrzędnych trójkąt o polu 8, zaś prosta $k$ – trójkąt o polu 10. Oblicz pole trójkąta, którego wierzchołkami są: punkt $A$ oraz punkty przecięcia prostych $l$ i $k$ z osią $Ox$.

**Odpowiedź:**  
Pole trójkąta wynosi 2.

**Rozwiązanie krok po kroku:**  
1. Punkt $A=(0,4)$ leży na osi $Oy$, więc w obu trójkątach prostokątnych odcinek na osi $Oy$ ma długość $h = 4$.
2. Niech $X_l = (x_l, 0)$ będzie punktem przecięcia prostej $l$ z dodatnią półosią $Ox$ ($x_l > 0$).  
   Pole trójkąta ograniczonego prostą $l$ i dodatnimi półosiami:
   $$P_l = \frac{1}{2} \cdot x_l \cdot 4 = 8 \implies 2x_l = 8 \implies x_l = 4$$
   Zatem punkt przecięcia to $(4, 0)$.
3. Niech $X_k = (x_k, 0)$ będzie punktem przecięcia prostej $k$ z dodatnią półosią $Ox$ ($x_k > 0$).  
   Pole trójkąta ograniczonego prostą $k$ i dodatnimi półosiami:
   $$P_k = \frac{1}{2} \cdot x_k \cdot 4 = 10 \implies 2x_k = 10 \implies x_k = 5$$
   Zatem punkt przecięcia to $(5, 0)$.
4. Rozważany trójkąt ma wierzchołki $A(0,4)$, $X_l(4,0)$ oraz $X_k(5,0)$.  
   Jego podstawa leży na osi $Ox$ i ma długość:
   $$a = |x_k - x_l| = |5 - 4| = 1$$
   Wysokość opuszczona z wierzchołka $A(0,4)$ na prostą zawierającą podstawę (oś $Ox$) wynosi $h = 4$.
5. Obliczamy pole trójkąta:
   $$P = \frac{1}{2} \cdot a \cdot h = \frac{1}{2} \cdot 1 \cdot 4 = 2$$

---

### Zadanie 243 [Egzamin wstępny do szkół średnich w woj. koszalińskim w roku 1997]

**Treść zadania:**  
Prosta o równaniu $y=x+2$ przechodzi przez punkty $A=(0,a)$, $B=(b,0)$. Oblicz pole trójkąta $ABC$, w którym $C=(b-a, 0)$.

**Odpowiedź:**  
$2$

**Rozwiązanie krok po kroku:**  
1. Punkt $A(0,a)$ leży na prostej $y = x + 2$:
   $$a = 0 + 2 = 2 \implies A = (0, 2)$$
2. Punkt $B(b,0)$ leży na prostej $y = x + 2$:
   $$0 = b + 2 \implies b = -2 \implies B = (-2, 0)$$
3. Wyznaczamy współrzędne punktu $C$:
   $$C = (b - a, 0) = (-2 - 2, 0) = (-4, 0)$$
4. Wierzchołki $B(-2, 0)$ i $C(-4, 0)$ leżą na osi $Ox$. Długość podstawy $BC$ wynosi:
   $$|BC| = |-2 - (-4)| = 2$$
5. Wysokość trójkąta opuszczona z wierzchołka $A(0, 2)$ na oś $Ox$ wynosi:
   $$h = |y_A| = 2$$
6. Pole trójkąta $ABC$ wynosi:
   $$P = \frac{1}{2} \cdot |BC| \cdot h = \frac{1}{2} \cdot 2 \cdot 2 = 2$$

---

### Zadanie 244

**Treść zadania:**  
Punkty $A=(5,-2)$ i $B=(17,2)$ są wierzchołkami trójkąta prostokątnego $ABC$ o kącie prostym przy wierzchołku $A$. Wierzchołek $C$ należy do prostej o równaniu $y=2x+3$.  
a) Wyznacz współrzędne punktu $C$.  
b) Oblicz pole trójkąta $ABC$.

**Odpowiedź:**  
a) $C=(2,7)$; b) $60$.

**Rozwiązanie krok po kroku:**  
**a)**  
1. Obliczamy współczynnik kierunkowy prostej zawierającej bok $AB$:
   $$a_{AB} = \frac{2 - (-2)}{17 - 5} = \frac{4}{12} = \frac{1}{3}$$
2. Ponieważ trójkąt ma kąt prosty przy wierzchołku $A$, prosta $AC$ jest prostopadła do $AB$:
   $$a_{AC} = -\frac{1}{a_{AB}} = -3$$
3. Prosta $AC$ przechodzi przez $A(5,-2)$, więc jej równanie ma postać:
   $$y - (-2) = -3(x - 5) \implies y + 2 = -3x + 15 \implies y = -3x + 13$$
4. Wierzchołek $C$ jest punktem przecięcia prostej $AC$ i prostej $y = 2x + 3$:
   $$2x + 3 = -3x + 13 \implies 5x = 10 \implies x = 2$$
   $$y = 2(2) + 3 = 7$$
   Zatem $C = (2, 7)$.

**b)**  
1. Obliczamy długości przyprostokątnych $AB$ i $AC$:
   $$|AB| = \sqrt{(17 - 5)^2 + (2 - (-2))^2} = \sqrt{12^2 + 4^2} = \sqrt{144 + 16} = \sqrt{160} = 4\sqrt{10}$$
   $$|AC| = \sqrt{(2 - 5)^2 + (7 - (-2))^2} = \sqrt{(-3)^2 + 9^2} = \sqrt{9 + 81} = \sqrt{90} = 3\sqrt{10}$$
2. Pole trójkąta prostokątnego $ABC$ wynosi:
   $$P = \frac{1}{2} \cdot |AB| \cdot |AC| = \frac{1}{2} \cdot 4\sqrt{10} \cdot 3\sqrt{10} = \frac{1}{2} \cdot 12 \cdot 10 = 60$$

---

### Zadanie 245 [W]

**Treść zadania:**  
Dany jest trójkąt o wierzchołkach $A=(-1,0)$, $B=(3,0)$, $C=(2,\sqrt{3})$. Wyznacz miary kątów trójkąta $ABC$.

**Odpowiedź:**  
$30^\circ, 60^\circ, 90^\circ$  
*Wskazówka:* Poprowadź wysokość trójkąta z wierzchołka $C$, a następnie oblicz tangens kąta $BAC$ i tangens kąta $ABC$.

**Rozwiązanie krok po kroku:**  
1. Punkty $A=(-1,0)$ i $B=(3,0)$ leżą na osi $Ox$. Rzutem prostokątnym wierzchołka $C(2,\sqrt{3})$ na oś $Ox$ jest punkt $D=(2,0)$, który leży wewnątrz odcinka $AB$.
2. Odcinek $CD$ jest wysokością trójkąta opuszczoną z wierzchołka $C$:
   $$|CD| = \sqrt{3}$$
3. Długości odcinków na osi $Ox$:
   $$|AD| = |2 - (-1)| = 3$$
   $$|DB| = |3 - 2| = 1$$
4. W trójkącie prostokątnym $ADC$:
   $$\operatorname{tg}(\angle BAC) = \frac{|CD|}{|AD|} = \frac{\sqrt{3}}{3} \implies \angle BAC = 30^\circ$$
5. W trójkącie prostokątnym $BDC$:
   $$\operatorname{tg}(\angle ABC) = \frac{|CD|}{|DB|} = \frac{\sqrt{3}}{1} = \sqrt{3} \implies \angle ABC = 60^\circ$$
6. Suma kątów w trójkącie wynosi $180^\circ$, więc miara trzeciego kąta przy wierzchołku $C$ to:
   $$\angle ACB = 180^\circ - (30^\circ + 60^\circ) = 90^\circ$$
7. Miary kątów trójkąta to: $30^\circ, 60^\circ, 90^\circ$.

---

### Zadanie 246

**Treść zadania:**  
Dwie wysokości trójkąta $ABC$, gdzie $A=(-2,-3)$, zawarte są w prostych o równaniach $x=2$ i $y=-\frac{2}{3}x+\frac{1}{3}$. Oblicz współrzędne pozostałych wierzchołków tego trójkąta.

**Odpowiedź:**  
$(5,-3)$ i $(2,3)$ [czyli $B=(5,-3)$, $C=(2,3)$ lub $B=(2,3)$, $C=(5,-3)$]

**Rozwiązanie krok po kroku:**  
1. Sprawdzamy, czy wierzchołek $A(-2,-3)$ leży na którejś z podanych prostych:
   - Prosta $x = 2$: $-2 \neq 2$.
   - Prosta $y = -\frac{2}{3}x + \frac{1}{3}$: $-\frac{2}{3}(-2) + \frac{1}{3} = \frac{4}{3} + \frac{1}{3} = \frac{5}{3} \neq -3$.  
   Zatem żadna z tych prostych nie jest wysokością wychodzącą z wierzchołka $A$. Są to wysokości poprowadzone z wierzchołków $B$ i $C$.
2. Niech wysokość $h_C$ poprowadzona z wierzchołka $C$ zawiera się w prostej $x = 2$, a wysokość $h_B$ z wierzchołka $B$ w prostej $y = -\frac{2}{3}x + \frac{1}{3}$.
3. Wierzchołek $C$ leży na wysokości $h_C$, więc $x_C = 2$.  
   Bok $AB$ jest prostopadły do wysokości $h_C: x = 2$. Ponieważ prosta $x = 2$ jest pionowa, prosta zawierająca bok $AB$ musi być pozioma:
   $$y = \text{const}$$
   Skoro przechodzi przez $A(-2,-3)$, jej równanie to:
   $$y = -3$$
4. Wierzchołek $B$ leży na boku $AB$ ($y = -3$) oraz na wysokości $h_B$ ($y = -\frac{2}{3}x + \frac{1}{3}$):
   $$-3 = -\frac{2}{3}x + \frac{1}{3} \implies -\frac{10}{3} = -\frac{2}{3}x \implies x = 5$$
   Zatem $B = (5, -3)$.
5. Bok $AC$ jest prostopadły do wysokości $h_B: y = -\frac{2}{3}x + \frac{1}{3}$.  
   Współczynnik kierunkowy prostej $AC$:
   $$a_{AC} = -\frac{1}{-\frac{2}{3}} = \frac{3}{2}$$
   Prosta $AC$ przechodzi przez $A(-2,-3)$:
   $$y - (-3) = \frac{3}{2}(x - (-2)) \implies y + 3 = \frac{3}{2}x + 3 \implies y = \frac{3}{2}x$$
6. Wierzchołek $C$ jest punktem przecięcia prostej $AC$ ($y = \frac{3}{2}x$) i wysokości $h_C$ ($x = 2$):
   $$x = 2 \implies y = \frac{3}{2} \cdot 2 = 3$$
   Zatem $C = (2, 3)$.
7. Pozostałe wierzchołki trójkąta to $(5,-3)$ i $(2,3)$.

---

### Zadanie 247 [W]

**Treść zadania:**  
Punkty $A=(-2,-2)$ i $B=(4,1)$ są wierzchołkami trójkąta $ABC$, a punkt $D=(0,1)$ punktem przecięcia jego wysokości. Znajdź współrzędne wierzchołka $C$.

**Odpowiedź:**  
$C=(-2,5)$  
*Wskazówka:* Prosta $BC$ jest prostopadła do prostej $AD$, prosta $AC$ jest prostopadła do prostej $BD$.

**Rozwiązanie krok po kroku:**  
1. Punkt $D(0,1)$ to ortocentrum trójkąta $ABC$. Prosta $AD$ zawiera wysokość opuszczoną z wierzchołka $A$, a prosta $BD$ zawiera wysokość opuszczoną z wierzchołka $B$.
2. **Wyznaczenie prostej zawierającej bok $BC$:**  
   Prosta $BC$ jest prostopadła do prostej $AD$ i przechodzi przez punkt $B(4,1)$.  
   Współczynnik kierunkowy prostej $AD$:
   $$a_{AD} = \frac{y_D - y_A}{x_D - x_A} = \frac{1 - (-2)}{0 - (-2)} = \frac{3}{2}$$
   Współczynnik kierunkowy prostej $BC$:
   $$a_{BC} = -\frac{1}{a_{AD}} = -\frac{2}{3}$$
   Równanie prostej $BC$ przechodzącej przez $B(4,1)$:
   $$y - 1 = -\frac{2}{3}(x - 4) \iff y = -\frac{2}{3}x + \frac{8}{3} + 1 \iff y = -\frac{2}{3}x + \frac{11}{3}$$
3. **Wyznaczenie prostej zawierającej bok $AC$:**  
   Prosta $AC$ jest prostopadła do prostej $BD$ i przechodzi przez punkt $A(-2,-2)$.  
   Zauważmy, że $y_B = 1$ oraz $y_D = 1$, zatem prosta $BD$ jest prostą poziomą o równaniu $y = 1$.  
   Prosta prostopadła do prostej poziomej jest prostą pionową. Przechodzi przez $A(-2,-2)$, więc jej równanie to:
   $$x = -2$$
4. **Wyznaczenie wierzchołka $C$:**  
   Wierzchołek $C$ jest punktem przecięcia prostych $AC$ i $BC$:
   $$x = -2 \implies y = -\frac{2}{3}(-2) + \frac{11}{3} = \frac{4}{3} + \frac{11}{3} = \frac{15}{3} = 5$$
5. Zatem wierzchołek $C$ ma współrzędne $C = (-2, 5)$.

---

### Zadanie 248

**Treść zadania:**  
Proste o równaniach $y=\frac{3}{2}x+1$ i $y=x+2$ zawierają dwa boki pewnego trójkąta, a prosta o równaniu $y=2x-1$ zawiera jedną z jego środkowych. Znajdź równanie prostej zawierającej trzeci bok trójkąta.

**Odpowiedź:**  
$5x-3y=0$ lub $x-4=0$

**Rozwiązanie krok po kroku:**  
1. Niech $k_1: y = \frac{3}{2}x + 1$ oraz $k_2: y = x + 2$ będą prostymi zawierającymi dwa boki trójkąta, a $m: y = 2x - 1$ prostą zawierającą środkową.
2. Wyznaczamy punkt przecięcia prostych $k_1$ i $k_2$, czyli jeden z wierzchołków trójkąta, powiedzmy $A$:
   $$\frac{3}{2}x + 1 = x + 2 \implies \frac{1}{2}x = 1 \implies x = 2$$
   $$y = 2 + 2 = 4 \implies A = (2, 4)$$
3. Sprawdzamy, czy wierzchołek $A(2,4)$ leży na prostej zawierającej środkową $m$:
   $$2 \cdot 2 - 1 = 3 \neq 4$$
   Punkt $A$ nie leży na środkowej, co oznacza, że środkowa wychodzi z jednego z pozostałych wierzchołków trójkąta: $B \in k_1$ lub $C \in k_2$.
4. **Przypadek 1: Środkowa wychodzi z wierzchołka $B \in k_1$ i dzieli bok $AC$ na połowy.**  
   Wierzchołek $B$ jest punktem przecięcia prostej $k_1$ i środkowej $m$:
   $$2x - 1 = \frac{3}{2}x + 1 \implies \frac{1}{2}x = 2 \implies x = 4$$
   $$y = 2(4) - 1 = 7 \implies B = (4, 7)$$
   Wierzchołek $C$ leży na prostej $k_2: y = x + 2$, więc $C = (c, c + 2)$.  
   Środek $M_{AC}$ boku $AC$ ma współrzędne:
   $$M_{AC} = \left(\frac{2 + c}{2}, \frac{4 + c + 2}{2}\right) = \left(\frac{c + 2}{2}, \frac{c + 6}{2}\right)$$
   Środek ten musi leżeć na prostej $m: y = 2x - 1$:
   $$\frac{c + 6}{2} = 2 \cdot \frac{c + 2}{2} - 1 \iff \frac{c + 6}{2} = c + 1 \iff c + 6 = 2c + 2 \iff c = 4$$
   Zatem $C = (4, 4 + 2) = (4, 6)$.  
   Prosta zawierająca trzeci bok $BC$ przechodzi przez punkty $B(4,7)$ i $C(4,6)$.  
   Ponieważ oba punkty mają odciętą $x = 4$, równanie prostej $BC$ to:
   $$x = 4 \iff x - 4 = 0$$
5. **Przypadek 2: Środkowa wychodzi z wierzchołka $C \in k_2$ i dzieli bok $AB$ na połowy.**  
   Wierzchołek $C$ jest punktem przecięcia prostej $k_2$ i środkowej $m$:
   $$2x - 1 = x + 2 \implies x = 3$$
   $$y = 3 + 2 = 5 \implies C = (3, 5)$$
   Wierzchołek $B$ leży na prostej $k_1: y = \frac{3}{2}x + 1$, więc $B = \left(b, \frac{3}{2}b + 1\right)$.  
   Środek $M_{AB}$ boku $AB$ ma współrzędne:
   $$M_{AB} = \left(\frac{2 + b}{2}, \frac{4 + \frac{3}{2}b + 1}{2}\right) = \left(\frac{b + 2}{2}, \frac{\frac{3}{2}b + 5}{2}\right)$$
   Środek ten leży na prostej $m: y = 2x - 1$:
   $$\frac{\frac{3}{2}b + 5}{2} = 2 \cdot \frac{b + 2}{2} - 1 \iff \frac{3}{4}b + \frac{5}{2} = b + 1 \iff \frac{1}{4}b = \frac{3}{2} \iff b = 6$$
   Wtedy $y_B = \frac{3}{2}(6) + 1 = 10$, zatem $B = (6, 10)$.  
   Prosta zawierająca trzeci bok $BC$ przechodzi przez punkty $C(3,5)$ i $B(6,10)$:
   $$a_{BC} = \frac{10 - 5}{6 - 3} = \frac{5}{3}$$
   $$y - 5 = \frac{5}{3}(x - 3) \iff y = \frac{5}{3}x \iff 5x - 3y = 0$$
6. Ostatecznie równanie prostej zawierającej trzeci bok to: $x - 4 = 0$ lub $5x - 3y = 0$.

---

### Zadanie 249 [W] [CKE, matura – poziom podstawowy, maj 2021]

**Treść zadania:**  
(0–5) [W] Punkty $A=(-20,12)$ i $B=(7,3)$ są wierzchołkami trójkąta $ABC$, w którym $|AC|=|BC|$. Wierzchołek $C$ leży na osi $Oy$ układu współrzędnych. Oblicz współrzędne wierzchołka $C$ oraz obwód tego trójkąta.

**Odpowiedź:**  
$C=(0,27)$, $9\sqrt{10}+50$  
*Wskazówki:* I. $C=(0,c)$. II. Długości odcinków $AC$ i $BC$ są równe.

**Rozwiązanie krok po kroku:**  
1. Wierzchołek $C$ leży na osi $Oy$, więc jego pierwsza współrzędna wynosi 0:
   $$C = (0, c)$$
2. Z warunku równoramienności trójkąta $|AC| = |BC|$, skąd $|AC|^2 = |BC|^2$:
   $$(0 - (-20))^2 + (c - 12)^2 = (0 - 7)^2 + (c - 3)^2$$
   $$20^2 + (c^2 - 24c + 144) = (-7)^2 + (c^2 - 6c + 9)$$
   $$400 + c^2 - 24c + 144 = 49 + c^2 - 6c + 9$$
   $$544 - 24c = 58 - 6c$$
   $$-18c = 58 - 544 \implies -18c = -486 \implies c = 27$$
   Zatem $C = (0, 27)$.
3. Obliczamy długości ramion $AC$ i $BC$:
   $$|AC| = \sqrt{20^2 + (27 - 12)^2} = \sqrt{400 + 15^2} = \sqrt{400 + 225} = \sqrt{625} = 25$$
   $$|BC| = |AC| = 25$$
4. Obliczamy długość podstawy $AB$:
   $$|AB| = \sqrt{(7 - (-20))^2 + (3 - 12)^2} = \sqrt{27^2 + (-9)^2} = \sqrt{729 + 81} = \sqrt{810} = \sqrt{81 \cdot 10} = 9\sqrt{10}$$
5. Obwód trójkąta $ABC$ wynosi:
   $$\operatorname{Obw} = |AB| + |BC| + |AC| = 9\sqrt{10} + 25 + 25 = 9\sqrt{10} + 50$$

---

### Zadanie 250 [*] [Egzamin dojrzałości (technika na podbudowie ZSZ) w woj. warszawskim w roku 1988]

**Treść zadania:**  
[*] Punkt $C=(-1,4)$ jest wierzchołkiem trójkąta równoramiennego $ABC$, którego podstawa $AB$ zawarta jest w prostej o równaniu $y=2x-4$. Znajdź współrzędne pozostałych wierzchołków trójkąta wiedząc, że długość podstawy $AB$ jest równa długości wysokości tego trójkąta opuszczonej z wierzchołka $C$.

**Odpowiedź:**  
$(2,0)$ i $(4,4)$  
*Rozwiązanie oficjalne (szkic):*  
$CS$ – wysokość trójkąta $ABC$.  
Znajdujemy równanie prostej $CS$: $y=-\frac{1}{2}x+3\frac{1}{2}$.  
Wyznaczamy współrzędne punktu $S$: $S=(3, 2)$.  
Obliczamy długość wysokości $CS$: $|CS|=2\sqrt{5}$.  
Punkty $A, B$ należą do prostej $y=2x-4$, więc ich współrzędne można zapisać w postaci $(x, 2x-4)$.  
$|AB|=|CS|$, więc $|AS|=|SB|=\sqrt{5}$. Zatem $\sqrt{(x-3)^2+(2x-4-2)^2}=\sqrt{5}$.  
Rozwiązaniami równania $(x-3)^2+(2x-6)^2=5$ są liczby 2 i 4.  
Jeśli $x=2$, to $y=0$, a jeśli $x=4$, to $y=4$, więc końce podstawy mają współrzędne: $(2,0)$ i $(4,4)$.

**Rozwiązanie krok po kroku:**  
1. W trójkącie równoramiennym $ABC$ o podstawie $AB$ wysokość opuszczona z wierzchołka $C$ dzieli podstawę $AB$ na dwie równe części w punkcie $S$ będącym środkiem boku $AB$.
2. Wysokość $CS$ zawiera się w prostej prostopadłej do prostej $AB: y = 2x - 4$ i przechodzącej przez $C(-1,4)$:
   $$a_{CS} = -\frac{1}{2}$$
   $$y - 4 = -\frac{1}{2}(x - (-1)) \iff y = -\frac{1}{2}x - \frac{1}{2} + 4 \iff y = -\frac{1}{2}x + \frac{7}{2}$$
3. Spodek wysokości $S$ to punkt przecięcia prostej $AB$ i prostej $CS$:
   $$2x - 4 = -\frac{1}{2}x + \frac{7}{2}$$
   $$\frac{5}{2}x = \frac{15}{2} \implies x = 3$$
   $$y = 2(3) - 4 = 2 \implies S = (3, 2)$$
4. Obliczamy długość wysokości $|CS|$:
   $$|CS| = \sqrt{(3 - (-1))^2 + (2 - 4)^2} = \sqrt{4^2 + (-2)^2} = \sqrt{16 + 4} = \sqrt{20} = 2\sqrt{5}$$
5. Z treści zadania długość podstawy jest równa długości wysokości:
   $$|AB| = |CS| = 2\sqrt{5}$$
   Zatem odległość wierzchołków $A$ i $B$ od środka $S$ wynosi:
   $$|AS| = |BS| = \frac{|AB|}{2} = \sqrt{5}$$
6. Wierzchołki $A$ i $B$ leżą na prostej $y = 2x - 4$, więc ich współrzędne mają postać $(x, 2x - 4)$.  
   Wyznaczamy je z warunku $|XS|^2 = (\sqrt{5})^2 = 5$:
   $$(x - 3)^2 + (2x - 4 - 2)^2 = 5$$
   $$(x - 3)^2 + (2x - 6)^2 = 5$$
   $$(x - 3)^2 + 4(x - 3)^2 = 5 \implies 5(x - 3)^2 = 5 \implies (x - 3)^2 = 1$$
   $$x - 3 = -1 \implies x = 2$$
   $$x - 3 = 1 \implies x = 4$$
7. Obliczamy odpowiadające rzędne:
   - Dla $x = 2$: $y = 2(2) - 4 = 0 \implies (2, 0)$
   - Dla $x = 4$: $y = 2(4) - 4 = 4 \implies (4, 4)$
8. Końce podstawy (pozostałe wierzchołki trójkąta) mają współrzędne: $(2, 0)$ i $(4, 4)$.

---


<!-- SEKCJA ZADAŃ 3 -->
# Geometria Analityczna – Zadania Maturalne (251–296)

---

## TRÓJKĄT

---

### Zadanie 251
**Treść zadania:**
W trójkącie równoramiennym $ABC$, w którym $|AB| = |AC|$, dane są wierzchołki $B = (1, -1)$ i $C = (4, 0)$. Jedno z ramion trójkąta zawiera się w prostej $x + 2y - 4 = 0$. Na boku $AB$ obrano taki punkt $P$, że $|AP| : |PB| = 3 : 2$. Znajdź równanie okręgu o środku w punkcie $P$, stycznego do boku $AC$.

**Odpowiedź:**
$$\left(x - \frac{7}{5}\right)^2 + \left(y + \frac{1}{5}\right)^2 = \frac{9}{5}$$

**Rozwiązanie krok po kroku:**
1. **Identyfikacja prostej zawierającej ramię trójkąta:**
   Dana jest prosta $k: x + 2y - 4 = 0$.
   Sprawdzamy, który z danych wierzchołków leży na tej prostej:
   - Dla $B(1, -1)$: $1 + 2(-1) - 4 = 1 - 2 - 4 = -5 \neq 0 \implies B \notin k$.
   - Dla $C(4, 0)$: $4 + 2\cdot 0 - 4 = 0 \implies C \in k$.
   
   Ramionami trójkąta o równej długości są boki $AB$ i $AC$ ($|AB| = |AC|$). Ponieważ punkt $C$ należy do prostej $k$, a punkt $B$ do niej nie należy, prosta $k$ zawiera ramię $AC$. Zatem prosta $AC$ ma równanie:
   $$x + 2y - 4 = 0 \iff x = 4 - 2y$$

2. **Wyznaczenie współrzędnych wierzchołka $A$:**
   Wierzchołek $A$ leży na prostej $AC$, zatem jego współrzędne mają postać $A = (4 - 2y_A, y_A)$.
   Z treści zadania trójkąt $ABC$ jest równoramienny i $|AB| = |AC|$, co oznacza, że $|AB|^2 = |AC|^2$.
   Obliczamy kwadraty odległości:
   $$|AC|^2 = (4 - 2y_A - 4)^2 + (y_A - 0)^2 = (-2y_A)^2 + y_A^2 = 4y_A^2 + y_A^2 = 5y_A^2$$
   $$|AB|^2 = (4 - 2y_A - 1)^2 + (y_A - (-1))^2 = (3 - 2y_A)^2 + (y_A + 1)^2 = 9 - 12y_A + 4y_A^2 + y_A^2 + 2y_A + 1 = 5y_A^2 - 10y_A + 10$$
   Przyrównujemy oba wyrażenia:
   $$5y_A^2 = 5y_A^2 - 10y_A + 10 \iff -10y_A + 10 = 0 \iff 10y_A = 10 \iff y_A = 1$$
   Odcięta punktu $A$:
   $$x_A = 4 - 2(1) = 2$$
   Zatem $A = (2, 1)$ (punkt $A$ jest różny od $C(4, 0)$).

3. **Wyznaczenie współrzędnych punktu $P$:**
   Punkt $P$ leży na boku $AB$ i dzieli go w stosunku $|AP| : |PB| = 3 : 2$. Oznacza to, że:
   $$\vec{AP} = \frac{3}{5}\vec{AB}$$
   Wyznaczamy wektor $\vec{AB}$:
   $$\vec{AB} = [x_B - x_A, y_B - y_A] = [1 - 2, -1 - 1] = [-1, -2]$$
   Stąd:
   $$\vec{AP} = \frac{3}{5}[-1, -2] = \left[-\frac{3}{5}, -\frac{6}{5}\right]$$
   Współrzędne punktu $P$:
   $$x_P = x_A + \left(-\frac{3}{5}\right) = 2 - \frac{3}{5} = \frac{7}{5}$$
   $$y_P = y_A + \left(-\frac{6}{5}\right) = 1 - \frac{6}{5} = -\frac{1}{5}$$
   Zatem środek okręgu to $P = \left(\frac{7}{5}, -\frac{1}{5}\right)$.

4. **Wyznaczenie promienia okręgu:**
   Okrąg jest styczny do prostej zawierającej bok $AC$ ($x + 2y - 4 = 0$). Promień $r$ okręgu jest równy odległości punktu $P$ od prostej $AC$:
   $$r = \frac{\left|1\cdot \frac{7}{5} + 2\cdot\left(-\frac{1}{5}\right) - 4\right|}{\sqrt{1^2 + 2^2}} = \frac{\left|\frac{7}{5} - \frac{2}{5} - 4\right|}{\sqrt{5}} = \frac{|1 - 4|}{\sqrt{5}} = \frac{3}{\sqrt{5}}$$
   Kwadrat promienia wynosi:
   $$r^2 = \left(\frac{3}{\sqrt{5}}\right)^2 = \frac{9}{5}$$

5. **Równanie okręgu:**
   Równanie okręgu o środku $P\left(\frac{7}{5}, -\frac{1}{5}\right)$ i promieniu $r = \frac{3}{\sqrt{5}}$:
   $$\left(x - \frac{7}{5}\right)^2 + \left(y + \frac{1}{5}\right)^2 = \frac{9}{5}$$

---

### Zadanie 252 [W]
**Treść zadania:**
Podstawa $AB$ trójkąta równoramiennego $ABC$ zawarta jest w prostej $x + y + 1 = 0$, a ramię $BC$ zawiera się w prostej $2x - y - 1 = 0$. Wyznacz równanie prostej $k$ zawierającej ramię $AC$, wiedząc, że punkt $P = (-4, 0)$ należy do prostej $k$.

**Odpowiedź:**
$$x - 2y + 4 = 0$$
*(Wskazówka ze zbioru: Wykonaj rysunek. Poprowadź prostą równoległą do boku $AB$ przechodzącą przez punkt $P$.)*

**Rozwiązanie krok po kroku:**
1. **Wyznaczenie wierzchołka $B$:**
   Wierzchołek $B$ jest punktem przecięcia prostej podstawy $AB: x + y + 1 = 0$ oraz ramienia $BC: 2x - y - 1 = 0$.
   Rozwiązujemy układ równań:
   $$\begin{cases} y = -x - 1 \\ 2x - (-x - 1) - 1 = 0 \end{cases} \iff \begin{cases} 3x = 0 \implies x = 0 \\ y = -1 \end{cases}$$
   Zatem wierzchołek $B = (0, -1)$.

2. **Wykorzystanie równości kątów przy podstawie:**
   W trójkącie równoramiennym $ABC$ o ramionach $AC$ i $BC$ zachodzi $|AC| = |BC|$, co oznacza, że kąty przy podstawie $AB$ są równe: $\angle CAB = \angle CBA = \beta$.
   Współczynnik kierunkowy prostej zawierającej podstawę $AB$ ($y = -x - 1$) to $a_1 = -1$.
   Współczynnik kierunkowy prostej zawierającej ramię $BC$ ($y = 2x - 1$) to $a_2 = 2$.
   Tangens kąta nachylenia między prostą $BC$ i $AB$:
   $$\operatorname{tg} \beta = \left|\frac{a_2 - a_1}{1 + a_1 a_2}\right| = \left|\frac{2 - (-1)}{1 + (-1)\cdot 2}\right| = \left|\frac{3}{-1}\right| = 3$$
   Niech $a$ oznacza współczynnik kierunkowy prostej $k$ zawierającej ramię $AC$. Kąt między prostą $k$ a podstawą $AB$ również jest równy $\beta$, zatem:
   $$\left|\frac{a - (-1)}{1 + a\cdot(-1)}\right| = 3 \iff \left|\frac{a + 1}{1 - a}\right| = 3$$
   Rozpatrujemy dwa przypadki:
   - $\frac{a + 1}{1 - a} = 3 \implies a + 1 = 3 - 3a \implies 4a = 2 \implies a = \frac{1}{2}$
   - $\frac{a + 1}{1 - a} = -3 \implies a + 1 = -3 + 3a \implies -2a = -4 \implies a = 2$
   Wartość $a = 2$ odpowiada prostej zawierającej ramię $BC$, więc współczynnik kierunkowy prostej $AC$ to $a = \frac{1}{2}$.

3. **Równanie prostej $k$ zawierającej ramię $AC$:**
   Prosta $k$ przechodzi przez punkt $P(-4, 0)$ i ma współczynnik kierunkowy $a = \frac{1}{2}$:
   $$y - 0 = \frac{1}{2}(x - (-4)) \iff y = \frac{1}{2}x + 2 \iff 2y = x + 4 \iff x - 2y + 4 = 0$$

---

### Zadanie 253 [R]
**Treść zadania:**
Punkt $S = (-1, 2)$ jest środkiem okręgu opisanego na trójkącie $ABC$. Wierzchołek $A$ ma współrzędne $(-4, 1)$, a bok $BC$ jest zawarty w prostej o równaniu $2x + y - 5 = 0$. Wyznacz współrzędne pozostałych wierzchołków trójkąta $ABC$.

**Odpowiedź:**
$$(0, 5), \quad (2, 1)$$

**Rozwiązanie krok po kroku:**
1. **Obliczenie promienia okręgu opisanego:**
   Środek okręgu to $S(-1, 2)$, a punkt $A(-4, 1)$ leży na okręgu, zatem promień $R = |SA|$:
   $$R^2 = |SA|^2 = (-4 - (-1))^2 + (1 - 2)^2 = (-3)^2 + (-1)^2 = 9 + 1 = 10$$
   Równanie okręgu opisanego na trójkącie $ABC$ ma postać:
   $$(x + 1)^2 + (y - 2)^2 = 10$$

2. **Wyznaczenie punktów wspólnych prostej $BC$ i okręgu:**
   Wierzchołki $B$ i $C$ leżą zarówno na prostej $2x + y - 5 = 0 \iff y = -2x + 5$, jak i na okręgu opisanym.
   Podstawiamy $y = -2x + 5$ do równania okręgu:
   $$(x + 1)^2 + (-2x + 5 - 2)^2 = 10$$
   $$(x + 1)^2 + (-2x + 3)^2 = 10$$
   $$x^2 + 2x + 1 + 4x^2 - 12x + 9 = 10$$
   $$5x^2 - 10x + 10 = 10 \iff 5x^2 - 10x = 0 \iff 5x(x - 2) = 0$$
   Stąd:
   $$x_1 = 0 \quad \text{lub} \quad x_2 = 2$$

3. **Obliczenie rzędnych wierzchołków:**
   - Dla $x = 0$: $y = -2(0) + 5 = 5$, co daje punkt $(0, 5)$.
   - Dla $x = 2$: $y = -2(2) + 5 = 1$, co daje punkt $(2, 1)$.

   Zatem współrzędne pozostałych wierzchołków trójkąta $ABC$ to:
   $$(0, 5) \quad \text{oraz} \quad (2, 1)$$

---

### Zadanie 254 [R]
**Treść zadania:**
Dane są punkty $A = (1, -1)$ i $B = (3, 3)$ oraz prosta $k$ o równaniu $y = x + 3$. Wyznacz na prostej $k$ taki punkt $C$, aby pole $P$ trójkąta $ABC$ było równe $6$.

**Odpowiedź:**
$$C = (0, 3) \quad \text{lub} \quad C = (12, 15)$$

**Rozwiązanie krok po kroku:**
1. **Długość podstawy $AB$:**
   $$|AB| = \sqrt{(3 - 1)^2 + (3 - (-1))^2} = \sqrt{2^2 + 4^2} = \sqrt{4 + 16} = \sqrt{20} = 2\sqrt{5}$$

2. **Równanie prostej zawierającej bok $AB$:**
   Współczynnik kierunkowy prostej $AB$:
   $$a = \frac{3 - (-1)}{3 - 1} = \frac{4}{2} = 2$$
   Równanie w postaci kierunkowej i ogólnej:
   $$y - 3 = 2(x - 3) \iff y = 2x - 3 \iff 2x - y - 3 = 0$$

3. **Wysokość opuszczona z wierzchołka $C$ na bok $AB$:**
   Pole trójkąta wynosi $P = 6$. Ze wzoru $P = \frac{1}{2} |AB| \cdot h$:
   $$6 = \frac{1}{2} \cdot 2\sqrt{5} \cdot h \iff h\sqrt{5} = 6 \iff h = \frac{6}{\sqrt{5}}$$

4. **Wyznaczenie współrzędnych punktu $C$:**
   Punkt $C$ leży na prostej $k: y = x + 3$, więc ma współrzędne $C = (p, p + 3)$, gdzie $p \in \mathbb{R}$.
   Wysokość $h$ jest równa odległości punktu $C$ od prostej $AB: 2x - y - 3 = 0$:
   $$h = \frac{|2p - (p + 3) - 3|}{\sqrt{2^2 + (-1)^2}} = \frac{|p - 6|}{\sqrt{5}}$$
   Przyrównujemy do wyliczonej wartości $h$:
   $$\frac{|p - 6|}{\sqrt{5}} = \frac{6}{\sqrt{5}} \iff |p - 6| = 6$$
   Rozwiązujemy równanie z wartością bezwzględną:
   - $p - 6 = 6 \implies p = 12 \implies C = (12, 12 + 3) = (12, 15)$
   - $p - 6 = -6 \implies p = 0 \implies C = (0, 0 + 3) = (0, 3)$

   Zatem szukany punkt to $C = (0, 3)$ lub $C = (12, 15)$.

---

### Zadanie 255 [W]
**Treść zadania:**
W równoramiennym trójkącie prostokątnym punkt $A = (3, 1)$ jest wierzchołkiem kąta ostrego. Przeciwległa do niego przyprostokątna zawiera się w prostej o równaniu $x - y + 1 = 0$. Napisz równania prostych zawierających pozostałe boki trójkąta.

**Odpowiedź:**
$$y = -x + 4, \quad y = 1 \quad \text{lub} \quad y = -x + 4, \quad x = 3$$

**Rozwiązanie krok po kroku:**
1. **Identyfikacja przyprostokątnych:**
   Niech wierzchołkami trójkąta będą $A$, $B$, $C$, przy czym $C$ jest wierzchołkiem kąta prostego, a $A(3, 1)$ wierzchołkiem kąta ostrego.
   Przyprostokątna przeciwległa do wierzchołka $A$ to odcinek $BC$, zawarty w prostej $l: x - y + 1 = 0 \iff y = x + 1$.
   Druga przyprostokątna $AC$ wychodzi z wierzchołka $A$ i jest prostopadła do boku $BC$.

2. **Równanie prostej zawierającej przyprostokątną $AC$:**
   Prosta $BC$ ma współczynnik kierunkowy $a_{BC} = 1$. Prosta $AC$ jest do niej prostopadła, więc jej współczynnik kierunkowy wynosi:
   $$a_{AC} = -\frac{1}{1} = -1$$
   Prosta $AC$ przechodzi przez $A(3, 1)$:
   $$y - 1 = -1(x - 3) \iff y = -x + 4$$

3. **Wyznaczenie wierzchołka kąta prostego $C$:**
   Punkt $C$ jest punktem przecięcia prostych $AC$ i $BC$:
   $$\begin{cases} y = -x + 4 \\ y = x + 1 \end{cases} \implies -x + 4 = x + 1 \iff 2x = 3 \iff x = \frac{3}{2}, \quad y = \frac{5}{2}$$
   Zatem $C = \left(\frac{3}{2}, \frac{5}{2}\right)$.

4. **Długości przyprostokątnych:**
   $$|AC| = \sqrt{\left(3 - \frac{3}{2}\right)^2 + \left(1 - \frac{5}{2}\right)^2} = \sqrt{\left(\frac{3}{2}\right)^2 + \left(-\frac{3}{2}\right)^2} = \sqrt{\frac{9}{4} + \frac{9}{4}} = \frac{3\sqrt{2}}{2}$$
   Trójkąt jest równoramienny, zatem $|BC| = |AC| = \frac{3\sqrt{2}}{2}$.

5. **Wyznaczenie wierzchołka $B$:**
   Punkt $B$ leży na prostej $BC: y = x + 1$, czyli $B = (x_B, x_B + 1)$.
   Odległość $|BC|^2 = \frac{9}{2}$:
   $$\left(x_B - \frac{3}{2}\right)^2 + \left(x_B + 1 - \frac{5}{2}\right)^2 = 2\left(x_B - \frac{3}{2}\right)^2 = \frac{9}{2} \iff \left(x_B - \frac{3}{2}\right)^2 = \frac{9}{4}$$
   Stąd:
   $$x_B - \frac{3}{2} = \pm \frac{3}{2} \implies x_B = 3 \quad \text{lub} \quad x_B = 0$$
   - Jeśli $x_B = 3$, to $y_B = 3 + 1 = 4$, czyli $B_1 = (3, 4)$.
   - Jeśli $x_B = 0$, to $y_B = 0 + 1 = 1$, czyli $B_2 = (0, 1)$.

6. **Równanie przeciwprostokątnej $AB$:**
   - Dla $A(3, 1)$ i $B_1(3, 4)$: prosta przechodząca przez oba punkty ma równanie pionowe $x = 3$.
   - Dla $A(3, 1)$ i $B_2(0, 1)$: prosta przechodząca przez oba punkty ma równanie poziome $y = 1$.

   Zatem równania prostych zawierających pozostałe boki to:
   $$y = -x + 4 \quad \text{oraz} \quad y = 1 \qquad \text{lub} \qquad y = -x + 4 \quad \text{oraz} \quad x = 3$$

---

### Zadanie 256
**Treść zadania:**
W równoramiennym trójkącie prostokątnym punkt $C = (3, -1)$ jest wierzchołkiem kąta prostego. Przeciwprostokątna trójkąta zawiera się w prostej $3x - y + 2 = 0$. Wyznacz współrzędne pozostałych wierzchołków tego trójkąta.

**Odpowiedź:**
$$\left(\frac{3}{5}, \frac{19}{5}\right), \quad \left(-\frac{9}{5}, -\frac{17}{5}\right)$$

**Rozwiązanie krok po kroku:**
1. **Własności geometryczne trójkąta:**
   W trójkącie prostokątnym równoramiennym o wierzchołku kąta prostego $C$, wysokość $h = |CS|$ opuszczona na przeciwprostokątną $AB$ trafia dokładnie w jej środek $S$ i jest równa połowie długości przeciwprostokątnej:
   $$|AS| = |BS| = |CS| = h$$

2. **Wyznaczenie spodka wysokości $S$:**
   Punkt $S$ jest rzutem prostokątnym wierzchołka $C(3, -1)$ na prostą przeciwprostokątnej $k: 3x - y + 2 = 0$.
   Prosta prostopadła do $k$ przechodząca przez punkt $C$:
   Współczynnik prostej $k$ wynosi $3$, więc prostopadła ma współczynnik kierunkowy $-\frac{1}{3}$:
   $$y - (-1) = -\frac{1}{3}(x - 3) \iff y + 1 = -\frac{1}{3}x + 1 \iff x + 3y = 0 \iff x = -3y$$
   Podstawiamy $x = -3y$ do równania prostej $k$:
   $$3(-3y) - y + 2 = 0 \iff -10y + 2 = 0 \iff 10y = 2 \iff y = \frac{1}{5}$$
   Wtedy:
   $$x = -3\left(\frac{1}{5}\right) = -\frac{3}{5}$$
   Zatem środek przeciwprostokątnej to $S = \left(-\frac{3}{5}, \frac{1}{5}\right)$.

3. **Obliczenie wysokości $h = |CS|$:**
   $$h = \sqrt{\left(3 - \left(-\frac{3}{5}\right)\right)^2 + \left(-1 - \frac{1}{5}\right)^2} = \sqrt{\left(\frac{18}{5}\right)^2 + \left(-\frac{6}{5}\right)^2} = \sqrt{\frac{324 + 36}{25}} = \sqrt{\frac{360}{25}} = \frac{6\sqrt{10}}{5}$$

4. **Wyznaczenie wierzchołków $A$ i $B$:**
   Wierzchołki $A$ i $B$ leżą na prostej $3x - y + 2 = 0$ w odległości $h = \frac{6\sqrt{10}}{5}$ od środka $S$.
   Wektor kierunkowy prostej $3x - y + 2 = 0$ to $\vec{v} = [1, 3]$. Jego długość wynosi $|\vec{v}| = \sqrt{1^2 + 3^2} = \sqrt{10}$.
   Wersor kierunkowy prostej:
   $$\vec{u} = \left[\frac{1}{\sqrt{10}}, \frac{3}{\sqrt{10}}\right]$$
   Wektor przesunięcia od punktu $S$ do wierzchołków:
   $$\vec{w} = h \cdot \vec{u} = \frac{6\sqrt{10}}{5} \cdot \left[\frac{1}{\sqrt{10}}, \frac{3}{\sqrt{10}}\right] = \left[\frac{6}{5}, \frac{18}{5}\right]$$
   Stąd:
   $$A = S + \vec{w} = \left(-\frac{3}{5} + \frac{6}{5}, \frac{1}{5} + \frac{18}{5}\right) = \left(\frac{3}{5}, \frac{19}{5}\right)$$
   $$B = S - \vec{w} = \left(-\frac{3}{5} - \frac{6}{5}, \frac{1}{5} - \frac{18}{5}\right) = \left(-\frac{9}{5}, -\frac{17}{5}\right)$$

---

### Zadanie 257 [W]
**Treść zadania:**
Punkt $C = (1, -3)$ jest wierzchołkiem trójkąta równobocznego $ABC$, zaś punkt $S = (3, -1)$ jest środkiem okręgu wpisanego w ten trójkąt. Wyznacz współrzędne wierzchołków $A$ i $B$.

**Odpowiedź:**
$$(4 - \sqrt{3}, \sqrt{3}), \quad (4 + \sqrt{3}, -\sqrt{3})$$
*(Wskazówki ze zbioru: I. P – środek boku AB, Q – środek odcinka CS. Znając współrzędne punktów S i Q można obliczyć współrzędne punktu P. Współrzędne punktu P możemy także obliczyć z równości $\vec{CS} = 2 \cdot \vec{SP}$. II. Punkty A i B są punktami wspólnymi prostej AB i okręgu opisanego na trójkącie ABC.)*

**Rozwiązanie krok po kroku:**
1. **Wyznaczenie środka podstawy $P$:**
   W trójkącie równobocznym środek okręgu wpisanego $S$ pokrywa się ze środkiem ciężkości trójkąta. Dzieli on każdą wysokość (w tym wysokość $CP$ opuszczoną z wierzchołka $C$ na bok $AB$) w stosunku $2 : 1$, licząc od wierzchołka:
   $$\vec{CS} = 2 \cdot \vec{SP} \iff \vec{SP} = \frac{1}{2} \vec{CS}$$
   Obliczamy wektor $\vec{CS}$:
   $$\vec{CS} = [3 - 1, -1 - (-3)] = [2, 2]$$
   Stąd:
   $$\vec{SP} = \frac{1}{2}[2, 2] = [1, 1]$$
   Współrzędne środka boku $AB$:
   $$P = S + \vec{SP} = (3 + 1, -1 + 1) = (4, 0)$$

2. **Długości elementów trójkąta równobocznego:**
   Wysokość trójkąta $h = |CP|$:
   $$h = \sqrt{(4 - 1)^2 + (0 - (-3))^2} = \sqrt{3^2 + 3^2} = 3\sqrt{2}$$
   Zależność między wysokością a bokiem $a$ w trójkącie równobocznym:
   $$h = \frac{a\sqrt{3}}{2} \implies a = \frac{2h}{\sqrt{3}} = \frac{6\sqrt{2}}{\sqrt{3}} = 2\sqrt{6}$$
   Połowa boku wynosi:
   $$|AP| = |BP| = \frac{a}{2} = \sqrt{6}$$

3. **Równanie prostej zawierającej bok $AB$:**
   Bok $AB$ jest prostopadły do wysokości $CP$ i przechodzi przez punkt $P(4, 0)$.
   Wektor $\vec{CP} = [3, 3] = 3[1, 1]$ jest wektorem normalnym prostej $AB$:
   $$1\cdot(x - 4) + 1\cdot(y - 0) = 0 \iff x + y - 4 = 0 \iff y = 4 - x$$

4. **Wyznaczenie wierzchołków $A$ i $B$:**
   Wierzchołki $A$ i $B$ leżą na prostej $y = 4 - x$ w odległości $\sqrt{6}$ od punktu $P(4, 0)$:
   $$(x - 4)^2 + (y - 0)^2 = 6$$
   Podstawiając $y = 4 - x$:
   $$(x - 4)^2 + (4 - x)^2 = 6 \iff 2(x - 4)^2 = 6 \iff (x - 4)^2 = 3 \iff x - 4 = \pm \sqrt{3}$$
   Stąd:
   - $x_1 = 4 - \sqrt{3} \implies y_1 = 4 - (4 - \sqrt{3}) = \sqrt{3}$
   - $x_2 = 4 + \sqrt{3} \implies y_2 = 4 - (4 + \sqrt{3}) = -\sqrt{3}$

   Zatem wierzchołki $A$ i $B$ mają współrzędne:
   $$(4 - \sqrt{3}, \sqrt{3}) \quad \text{oraz} \quad (4 + \sqrt{3}, -\sqrt{3})$$

---

### Zadanie 258 [Egzamin dojrzałości 1992]
**Treść zadania:**
W trójkącie $ABC$ dany jest wierzchołek $A = (-4, -1)$, środek $S = (2, 1)$ boku $AB$ i wektor $\vec{BC} = [-4, 4]$. Znajdź równanie symetralnej boku $BC$.
*Egzamin dojrzałości (LO – profil podstawowy) w woj. sieradzkim w roku 1992*

**Odpowiedź:**
$$x - y - 1 = 0$$

**Rozwiązanie krok po kroku:**
1. **Wyznaczenie współrzędnych wierzchołka $B$:**
   Punkt $S(2, 1)$ jest środkiem boku $AB$, więc:
   $$S = \frac{A + B}{2} \implies B = 2S - A$$
   $$x_B = 2\cdot 2 - (-4) = 4 + 4 = 8$$
   $$y_B = 2\cdot 1 - (-1) = 2 + 1 = 3$$
   Zatem $B = (8, 3)$.

2. **Wyznaczenie współrzędnych wierzchołka $C$:**
   Wykorzystujemy dany wektor $\vec{BC} = [-4, 4]$:
   $$C = B + \vec{BC} = (8 + (-4), 3 + 4) = (4, 7)$$

3. **Wyznaczenie środka boku $BC$:**
   Niech $M$ będzie środkiem odcinka $BC$:
   $$M = \left(\frac{x_B + x_C}{2}, \frac{y_B + y_C}{2}\right) = \left(\frac{8 + 4}{2}, \frac{3 + 7}{2}\right) = (6, 5)$$

4. **Równanie symetralnej boku $BC$:**
   Symetralna odcinka $BC$ jest prostą prostopadłą do wektora $\vec{BC} = [-4, 4]$ i przechodzącą przez środek $M(6, 5)$.
   Wektor $\vec{BC} = [-4, 4] = -4[1, -1]$ jest wektorem prostopadłym do symetralnej, zatem wektor $[1, -1]$ jest wektorem normalnym szukanej prostej:
   $$1\cdot(x - 6) - 1\cdot(y - 5) = 0 \iff x - 6 - y + 5 = 0 \iff x - y - 1 = 0$$

---

### Zadanie 259
**Treść zadania:**
Dany jest trójkąt $ABC$, w którym $A = (-2, -1)$, $\vec{AB} = [8, 4]$, a punkt przecięcia środkowych ma współrzędne $(1, 4)$. Znajdź współrzędne pozostałych wierzchołków trójkąta.

**Odpowiedź:**
$$B = (6, 3), \quad C = (-1, 10)$$

**Rozwiązanie krok po kroku:**
1. **Wyznaczenie wierzchołka $B$:**
   Mając dany wierzchołek $A(-2, -1)$ oraz wektor $\vec{AB} = [8, 4]$:
   $$B = A + \vec{AB} = (-2 + 8, -1 + 4) = (6, 3)$$

2. **Wyznaczenie wierzchołka $C$ ze środka ciężkości:**
   Punkt przecięcia środkowych $M = (1, 4)$ jest środkiem ciężkości trójkąta $ABC$, którego współrzędne są średnimi arytmetycznymi współrzędnych wierzchołków:
   $$x_M = \frac{x_A + x_B + x_C}{3} \implies 1 = \frac{-2 + 6 + x_C}{3} \iff 3 = 4 + x_C \iff x_C = -1$$
   $$y_M = \frac{y_A + y_B + y_C}{3} \implies 4 = \frac{-1 + 3 + y_C}{3} \iff 12 = 2 + y_C \iff y_C = 10$$
   Zatem $C = (-1, 10)$.

---

### Zadanie 260 [R]
**Treść zadania:**
Bok $AB$ trójkąta $ABC$ zawiera się w prostej $y = 2x + 2$, a środkowa poprowadzona z wierzchołka $C$ zawiera się w prostej $x - 3y + 21 = 0$. Oblicz współrzędne wierzchołków trójkąta $ABC$ wiedząc, że $\vec{BC} = [4, -2]$.

**Odpowiedź:**
$$A = (1, 4), \quad B = (5, 12), \quad C = (9, 10)$$

**Rozwiązanie krok po kroku:**
1. **Wyznaczenie środka boku $AB$:**
   Środkowa poprowadzona z wierzchołka $C$ łączy wierzchołek $C$ ze środkiem $S$ przeciwległego boku $AB$. Punkt $S$ jest zatem punktem przecięcia prostej $AB$ oraz prostej środkowej:
   $$\begin{cases} y = 2x + 2 \\ x - 3y + 21 = 0 \end{cases}$$
   Podstawiamy $y = 2x + 2$ do drugiego równania:
   $$x - 3(2x + 2) + 21 = 0 \iff x - 6x - 6 + 21 = 0 \iff -5x + 15 = 0 \iff x = 3$$
   Wtedy $y = 2(3) + 2 = 8$. Zatem $S = (3, 8)$.

2. **Wykorzystanie wektora $\vec{BC}$ i prostej środkowej:**
   Wierzchołek $B$ leży na prostej $AB: y = 2x + 2$, więc $B = (b, 2b + 2)$ dla pewnej liczby $b \in \mathbb{R}$.
   Współrzędne wierzchołka $C$ otrzymujemy z wektora $\vec{BC} = [4, -2]$:
   $$C = B + \vec{BC} = (b + 4, 2b + 2 - 2) = (b + 4, 2b)$$
   Wierzchołek $C$ leży na prostej środkowej $x - 3y + 21 = 0$:
   $$(b + 4) - 3(2b) + 21 = 0 \iff b + 4 - 6b + 21 = 0 \iff -5b + 25 = 0 \iff b = 5$$
   Stąd:
   $$B = (5, 2\cdot 5 + 2) = (5, 12)$$
   $$C = (5 + 4, 2\cdot 5) = (9, 10)$$

3. **Wyznaczenie wierzchołka $A$:**
   Punkt $S(3, 8)$ jest środkiem odcinka $AB$:
   $$S = \frac{A + B}{2} \implies A = 2S - B$$
   $$x_A = 2\cdot 3 - 5 = 1$$
   $$y_A = 2\cdot 8 - 12 = 4$$
   Zatem $A = (1, 4)$.

---

### Zadanie 261
**Treść zadania:**
Wierzchołek $C$ trójkąta ostrokątnego $ABC$ ma współrzędne $(2, 7)$. Prosta o równaniu $2x + y - 1 = 0$ jest symetralną wysokości $CD$, a prosta o równaniu $x + 3y - 8 = 0$ zawiera środkową trójkąta poprowadzoną z wierzchołka $A$. Oblicz współrzędne punktów $A$, $B$ i $D$.

**Odpowiedź:**
$$A = (-7, 5), \quad B = (-4, -1), \quad D = (-6, 3)$$

**Rozwiązanie krok po kroku:**
1. **Wyznaczenie punktu $D$ (spodka wysokości):**
   Punkt $D$ leży na prostej wysokości $CD$ i jest obrazem symetrycznym punktu $C(2, 7)$ względem symetralnej tej wysokości, czyli prostej $s: 2x + y - 1 = 0 \iff y = -2x + 1$.
   Prosta zawierająca wysokość $CD$ jest prostopadła do symetralnej $s$, więc jej współczynnik kierunkowy to $a_{CD} = \frac{1}{2}$.
   Przechodzi przez punkt $C(2, 7)$:
   $$y - 7 = \frac{1}{2}(x - 2) \iff y = \frac{1}{2}x + 6 \iff x - 2y + 12 = 0$$
   Środek odcinka $CD$ (oznaczmy go $M$) jest punktem przecięcia $CD$ z symetralną $s$:
   $$\begin{cases} y = -2x + 1 \\ y = \frac{1}{2}x + 6 \end{cases} \implies -2x + 1 = \frac{1}{2}x + 6 \iff -\frac{5}{2}x = 5 \iff x = -2, \quad y = 5$$
   Zatem $M = (-2, 5)$.
   Współrzędne punktu $D$:
   $$D = 2M - C = (2(-2) - 2, 2\cdot 5 - 7) = (-6, 3)$$

2. **Równanie prostej zawierającej bok $AB$:**
   Bok $AB$ jest prostopadły do wysokości $CD$ (współczynnik $a_{CD} = \frac{1}{2}$) i przechodzi przez spodek wysokości $D(-6, 3)$.
   Współczynnik kierunkowy prostej $AB$ wynosi $a_{AB} = -2$:
   $$y - 3 = -2(x - (-6)) \iff y = -2x - 9 \iff 2x + y + 9 = 0$$

3. **Wyznaczenie wierzchołka $A$:**
   Wierzchołek $A$ jest punktem przecięcia boku $AB$ oraz środkowej poprowadzonej z $A$ ($x + 3y - 8 = 0$):
   $$\begin{cases} 2x + y + 9 = 0 \implies y = -2x - 9 \\ x + 3y - 8 = 0 \end{cases}$$
   $$x + 3(-2x - 9) - 8 = 0 \iff x - 6x - 27 - 8 = 0 \iff -5x = 35 \iff x = -7$$
   $$y = -2(-7) - 9 = 14 - 9 = 5$$
   Zatem $A = (-7, 5)$.

4. **Wyznaczenie wierzchołka $B$:**
   Punkt $B$ leży na prostej $AB$, więc $B = (x_B, -2x_B - 9)$.
   Środek boku $BC$ (oznaczmy go $S_{BC}$) leży na środkowej z wierzchołka $A$ ($x + 3y - 8 = 0$).
   Współrzędne środka $S_{BC}$ dla $B(x_B, -2x_B - 9)$ i $C(2, 7)$:
   $$S_{BC} = \left(\frac{x_B + 2}{2}, \frac{-2x_B - 9 + 7}{2}\right) = \left(\frac{x_B + 2}{2}, -x_B - 1\right)$$
   Podstawiamy współrzędne $S_{BC}$ do równania prostej $x + 3y - 8 = 0$:
   $$\frac{x_B + 2}{2} + 3(-x_B - 1) - 8 = 0$$
   Mnożymy przez 2:
   $$x_B + 2 - 6x_B - 6 - 16 = 0 \iff -5x_B - 20 = 0 \iff x_B = -4$$
   Wtedy $y_B = -2(-4) - 9 = 8 - 9 = -1$.
   Zatem $B = (-4, -1)$.

---

### Zadanie 262 [R]
**Treść zadania:**
W trójkącie $ABC$ dany jest wierzchołek $A = (2, -5)$ oraz równania prostych zawierających dwie jego środkowe: $4x + 5y = 0$ i $x - 3y = 0$. Wyznacz współrzędne pozostałych wierzchołków trójkąta $ABC$.

**Odpowiedź:**
$$(-5, 4), \quad (3, 1)$$

**Rozwiązanie krok po kroku:**
1. **Identyfikacja środkowych:**
   Sprawdzamy, czy wierzchołek $A(2, -5)$ leży na którejś z danych prostych:
   - $4(2) + 5(-5) = 8 - 25 = -17 \neq 0$
   - $2 - 3(-5) = 2 + 15 = 17 \neq 0$
   Punkt $A$ nie leży na żadnej z tych prostych, co oznacza, że są to środkowe poprowadzone z wierzchołków $B$ i $C$.

2. **Wyznaczenie środka ciężkości $S$:**
   Środek ciężkości $S$ jest punktem przecięcia środkowych:
   $$\begin{cases} 4x + 5y = 0 \\ x - 3y = 0 \implies x = 3y \end{cases} \implies 4(3y) + 5y = 0 \iff 17y = 0 \iff y = 0, \quad x = 0$$
   Zatem $S = (0, 0)$.

3. **Wyznaczenie środka boku $BC$:**
   Niech $K$ będzie środkiem boku $BC$. Ze znanej własności środka ciężkości trójkąta:
   $$\vec{AS} = 2 \cdot \vec{SK} \iff \vec{SK} = \frac{1}{2}\vec{AS}$$
   Ponieważ $A = (2, -5)$ i $S = (0, 0)$, wektor $\vec{AS} = [0 - 2, 0 - (-5)] = [-2, 5]$.
   Stąd:
   $$\vec{SK} = \left[-1, \frac{5}{2}\right] \implies K = S + \left[-1, \frac{5}{2}\right] = \left(-1, \frac{5}{2}\right)$$

4. **Wyznaczenie wierzchołków $B$ i $C$:**
   Niech wierzchołek $B$ leży na prostej $4x + 5y = 0 \iff y = -0,8x$, czyli $B = (b, -0,8b)$.
   Wierzchołek $C$ leży na prostej $x - 3y = 0 \iff x = 3y$, czyli $C = (3c, c)$.
   Punkt $K\left(-1, \frac{5}{2}\right)$ jest środkiem odcinka $BC$:
   $$\begin{cases} \frac{b + 3c}{2} = -1 \iff b + 3c = -2 \\ \frac{-0,8b + c}{2} = \frac{5}{2} \iff -0,8b + c = 5 \implies c = 0,8b + 5 \end{cases}$$
   Podstawiamy $c$ do pierwszego równania:
   $$b + 3(0,8b + 5) = -2 \iff b + 2,4b + 15 = -2 \iff 3,4b = -17 \iff b = -5$$
   Wtedy:
   $$c = 0,8(-5) + 5 = -4 + 5 = 1$$
   Stąd współrzędne wierzchołków:
   $$B = (-5, -0,8(-5)) = (-5, 4)$$
   $$C = (3\cdot 1, 1) = (3, 1)$$

---

### Zadanie 263
**Treść zadania:**
Dany jest punkt $P = (3, 2)$. Znaleźć równanie prostej przechodzącej przez punkt $P$ i odcinającej na dodatnich półosiach układu współrzędnych odcinki $OA$ i $OB$ takie, że pole trójkąta $AOB$ jest równe $12$.

**Odpowiedź:**
$$y = -\frac{2}{3}x + 4$$

**Rozwiązanie krok po kroku:**
1. **Postać odcinkowa prostej:**
   Prosta przecina dodatnie półosie w punktach $A(a, 0)$ oraz $B(0, b)$, gdzie $a > 0$ i $b > 0$.
   Równanie odcinkowe prostej ma postać:
   $$\frac{x}{a} + \frac{y}{b} = 1$$

2. **Zależność z pola trójkąta:**
   Pole trójkąta prostokątnego $AOB$ wynosi:
   $$P = \frac{1}{2}ab = 12 \implies ab = 24 \implies b = \frac{24}{a}$$

3. **Wykorzystanie punktu $P(3, 2)$:**
   Punkt $P$ leży na prostej, więc spełnia jej równanie:
   $$\frac{3}{a} + \frac{2}{b} = 1$$
   Podstawiamy $b = \frac{24}{a}$:
   $$\frac{3}{a} + \frac{2}{\frac{24}{a}} = 1 \iff \frac{3}{a} + \frac{2a}{24} = 1 \iff \frac{3}{a} + \frac{a}{12} = 1$$
   Mnożymy obustronnie przez $12a$ (dla $a > 0$):
   $$36 + a^2 = 12a \iff a^2 - 12a + 36 = 0 \iff (a - 6)^2 = 0 \iff a = 6$$
   Wtedy:
   $$b = \frac{24}{6} = 4$$

4. **Równanie prostej:**
   Podstawiamy $a = 6$ i $b = 4$:
   $$\frac{x}{6} + \frac{y}{4} = 1 \iff 2x + 3y = 12 \iff 3y = -2x + 12 \iff y = -\frac{2}{3}x + 4$$

---

### Zadanie 264 [W (0–6) / CKE maj 2018]
**Treść zadania:**
Punkt $A = (7, -1)$ jest wierzchołkiem trójkąta równoramiennego $ABC$, w którym $|AC| = |BC|$. Obie współrzędne wierzchołka $C$ są liczbami ujemnymi. Okrąg wpisany w trójkąt $ABC$ ma równanie $x^2 + y^2 = 10$. Oblicz współrzędne wierzchołków $B$ i $C$ tego trójkąta.
*CKE, matura – poziom rozszerzony, maj 2018*

**Odpowiedź:**
$$B = \left(-\frac{17}{5}, \frac{31}{5}\right), \quad C = \left(-3, -\frac{13}{3}\right)$$

**Rozwiązanie krok po kroku:**
1. **Styczne do okręgu przechodzące przez wierzchołek $A(7, -1)$:**
   Okrąg wpisany ma środek $O(0, 0)$ i promień $r = \sqrt{10}$.
   Boki $AB$ (podstawa) i $AC$ (ramię) wychodzą z punktu $A$ i są styczne do okręgu wpisanego.
   Prosta pionowa $x = 7$ nie jest styczna, bo jej odległość od $(0, 0)$ to $7 \neq \sqrt{10}$.
   Równanie prostej przez $A(7, -1)$:
   $$y - (-1) = m(x - 7) \iff mx - y - 7m - 1 = 0$$
   Odległość prostej od środka $O(0, 0)$ jest równa $\sqrt{10}$:
   $$\frac{|-7m - 1|}{\sqrt{m^2 + 1}} = \sqrt{10} \iff (7m + 1)^2 = 10(m^2 + 1)$$
   $$49m^2 + 14m + 1 = 10m^2 + 10 \iff 39m^2 + 14m - 9 = 0$$
   $$\Delta = 14^2 - 4\cdot 39\cdot (-9) = 196 + 1404 = 1600, \quad \sqrt{\Delta} = 40$$
   $$m_1 = \frac{-14 - 40}{78} = -\frac{54}{78} = -\frac{9}{13}, \quad m_2 = \frac{-14 + 40}{78} = \frac{26}{78} = \frac{1}{3}$$
   Otrzymujemy dwie styczne:
   - $k_1: y = -\frac{9}{13}x + \frac{50}{13} \iff 9x + 13y - 50 = 0$
   - $k_2: y = \frac{1}{3}x - \frac{10}{3} \iff x - 3y - 10 = 0$

2. **Identyfikacja ramienia $AC$ i podstawy $AB$:**
   W trójkącie równoramiennym o ramionach $|AC| = |BC|$, wierzchołek $C$ leży na osi symetrii trójkąta (prostej prostopadłej do podstawy $AB$ przechodzącej przez środek okręgu wpisanego $O(0, 0)$).
   Wierzchołek $C$ ma obie współrzędne ujemne ($x_C < 0, y_C < 0$) i leży na ramieniu $AC$.
   - Jeśli $AC$ leży na prostej $k_2: y = \frac{1}{3}x - \frac{10}{3}$, to dla $x < 0$ mamy $y < 0$.
   - Wówczas podstawa $AB$ leży na prostej $k_1: 9x + 13y - 50 = 0$.

3. **Oś symetrii trójkąta i wierzchołek $C$:**
   Wysokość z wierzchołka $C$ jest prostopadła do podstawy $AB$ ($9x + 13y - 50 = 0$) i przechodzi przez środek okręgu $O(0, 0)$.
   Wektor prostopadły do wektora normalnego $[9, 13]$ to $[13, -9]$, zatem prosta $OC$ ma równanie:
   $$13x - 9y = 0 \iff y = \frac{13}{9}x$$
   Wierzchołek $C$ jest punktem przecięcia prostej $AC$ ($x - 3y - 10 = 0$) oraz prostej $OC$ ($13x - 9y = 0$):
   $$x - 3\left(\frac{13}{9}x\right) - 10 = 0 \iff x - \frac{13}{3}x = 10 \iff -\frac{10}{3}x = 10 \iff x = -3$$
   $$y = \frac{13}{9}(-3) = -\frac{13}{3}$$
   Zatem $C = \left(-3, -\frac{13}{3}\right)$ (obie współrzędne są ujemne, co zgadza się z założeniem).

4. **Wyznaczenie wierzchołka $B$:**
   W trójkącie równoramiennym punkt styczności okręgu wpisanego z podstawą $AB$ jest jednocześnie środkiem podstawy $S_{AB}$.
   Punkt $S_{AB}$ jest punktem przecięcia podstawy $AB: 9x + 13y - 50 = 0$ i wysokości $OC: 13x - 9y = 0 \iff x = \frac{9}{13}y$:
   $$9\left(\frac{9}{13}y\right) + 13y - 50 = 0 \iff \frac{81 + 169}{13}y = 50 \iff \frac{250}{13}y = 50 \iff y = \frac{13}{5}$$
   $$x = \frac{9}{13}\cdot \frac{13}{5} = \frac{9}{5}$$
   Zatem $S_{AB} = \left(\frac{9}{5}, \frac{13}{5}\right)$.
   Wierzchołek $B$ wyznaczamy ze wzoru na środek odcinka:
   $$B = 2S_{AB} - A = \left(2\cdot\frac{9}{5} - 7, 2\cdot\frac{13}{5} - (-1)\right) = \left(\frac{18}{5} - \frac{35}{5}, \frac{26}{5} + \frac{5}{5}\right) = \left(-\frac{17}{5}, \frac{31}{5}\right)$$

---

### Zadanie 265 [CKE maj 2007]
**Treść zadania:**
Wierzchołki trójkąta równobocznego $ABC$ są punktami paraboli $y = -x^2 + 6x$. Punkt $C$ jest jej wierzchołkiem, a bok $AB$ jest równoległy do osi $Ox$. Sporządź rysunek w układzie współrzędnych i wyznacz współrzędne wierzchołków tego trójkąta.
*CKE, matura – poziom rozszerzony, maj 2007*

**Odpowiedź:**
$$A = (3 - \sqrt{3}, 6), \quad B = (3 + \sqrt{3}, 6), \quad C = (3, 9)$$

**Rozwiązanie krok po kroku:**
1. **Wierzchołek paraboli $C$:**
   Funkcja kwadratowa dana jest wzorem $y = -x^2 + 6x = -(x^2 - 6x + 9) + 9 = -(x - 3)^2 + 9$.
   Współrzędne wierzchołka paraboli:
   $$p = -\frac{b}{2a} = -\frac{6}{2(-1)} = 3, \quad q = -(3)^2 + 6\cdot 3 = 9$$
   Zatem $C = (3, 9)$. Osią symetrii paraboli jest prosta $x = 3$.

2. **Współrzędne wierzchołków $A$ i $B$:**
   Bok $AB$ jest równoległy do osi $Ox$, więc wierzchołki $A$ i $B$ mają tę samą rzędną $y_0 < 9$ i leżą symetrycznie względem osi paraboli $x = 3$.
   Niech $d > 0$. Wtedy:
   $$A = (3 - d, y_0), \quad B = (3 + d, y_0)$$
   Długość boku trójkąta:
   $$a = |AB| = (3 + d) - (3 - d) = 2d$$
   Wysokość trójkąta opuszczona z wierzchołka $C$:
   $$h = y_C - y_0 = 9 - y_0$$

3. **Wykorzystanie własności trójkąta równobocznego:**
   W trójkącie równobocznym $h = \frac{a\sqrt{3}}{2}$:
   $$h = \frac{2d\sqrt{3}}{2} = d\sqrt{3}$$
   Stąd $y_0 = 9 - d\sqrt{3}$.

4. **Wykorzystanie równania paraboli:**
   Punkt $B(3 + d, y_0)$ leży na paraboli $y = -(x - 3)^2 + 9$:
   $$y_0 = -((3 + d) - 3)^2 + 9 = -d^2 + 9$$
   Przyrównujemy oba wzory na $y_0$:
   $$9 - d\sqrt{3} = -d^2 + 9 \iff d^2 - d\sqrt{3} = 0 \iff d(d - \sqrt{3}) = 0$$
   Ponieważ $d > 0$, otrzymujemy:
   $$d = \sqrt{3}$$
   Wtedy:
   $$y_0 = 9 - (\sqrt{3})^2 = 9 - 3 = 6$$
   Współrzędne wierzchołków:
   $$A = (3 - \sqrt{3}, 6), \quad B = (3 + \sqrt{3}, 6), \quad C = (3, 9)$$

---

### Zadanie 266 [W (0–4) / CKE czerwiec 2023]
**Treść zadania:**
W okrąg o równaniu $(x - 1)^2 + (y - 2)^2 = 25$ wpisano trójkąt $ABC$. Bok $AB$ tego trójkąta jest zawarty w prostej o równaniu $4x - 3y + 2 = 0$. Wysokość $CD$ tego trójkąta dzieli bok $AB$ tak, że $|AD| = 4 \cdot |DB|$. Oblicz pole trójkąta $ABC$.
*CKE, matura – poziom rozszerzony, czerwiec 2023*

**Odpowiedź:**
$$P_{ABC} = 20$$

**Rozwiązanie krok po kroku:**
1. **Analiza położenia boku $AB$ względem okręgu:**
   Okrąg ma środek $S(1, 2)$ oraz promień $R = \sqrt{25} = 5$.
   Obliczamy odległość środka $S(1, 2)$ od prostej zawierającej bok $AB$ ($4x - 3y + 2 = 0$):
   $$d = \frac{|4\cdot 1 - 3\cdot 2 + 2|}{\sqrt{4^2 + (-3)^2}} = \frac{|4 - 6 + 2|}{5} = \frac{0}{5} = 0$$
   Środek okręgu $S$ leży na prostej $AB$, co oznacza, że bok $AB$ jest średnicą okręgu.
   Długość boku $AB$:
   $$|AB| = 2R = 2\cdot 5 = 10$$
   Trójkąt $ABC$ wpisany w okrąg, którego bok jest średnicą, jest trójkątem prostokątnym o kącie prostym przy wierzchołku $C$ ($\angle ACB = 90^\circ$).

2. **Podział boku $AB$ przez spodek wysokości $D$:**
   Z treści zadania $|AD| = 4|DB|$. Ponieważ $|AD| + |DB| = |AB| = 10$:
   $$4|DB| + |DB| = 10 \iff 5|DB| = 10 \iff |DB| = 2, \quad |AD| = 8$$

3. **Obliczenie wysokości $CD$:**
   W trójkącie prostokątnym wysokość $h = |CD|$ opuszczona na przeciwprostokątną spełnia zależność:
   $$h^2 = |AD| \cdot |DB| = 8 \cdot 2 = 16 \implies h = |CD| = 4$$

4. **Obliczenie pola trójkąta $ABC$:**
   $$P_{ABC} = \frac{1}{2} |AB| \cdot |CD| = \frac{1}{2} \cdot 10 \cdot 4 = 20$$

---

### Zadanie 267 [* W (0–5) / CKE czerwiec 2018]
**Treść zadania:**
Wierzchołki $A$ i $B$ trójkąta prostokątnego $ABC$ leżą na osi $Oy$ układu współrzędnych. Okrąg wpisany w ten trójkąt jest styczny do boków $AB$, $BC$ i $CA$ w punktach, odpowiednio $P = (0, 10)$, $Q = (8, 6)$ i $R = (9, 13)$. Oblicz współrzędne wierzchołków $A$, $B$ i $C$ tego trójkąta.
*CKE, matura – poziom rozszerzony, czerwiec 2018*

**Odpowiedź:**
$$A = (0, 0), \quad B = (0, 25), \quad C = (12, 9) \quad \text{(lub } A = (0, 25), B = (0, 0)\text{)}$$

**Rozwiązanie krok po kroku:**
1. **Własność odcinków stycznych:**
   Z twierdzenia o odcinkach stycznych wiemy, że długości odcinków od wierzchołka do odpowiednich punktów styczności są równe:
   $$|AP| = |AR|, \quad |BP| = |BQ|, \quad |CQ| = |CR|$$

2. **Wyznaczenie wierzchołków $A$ i $B$ na osi $Oy$:**
   Wierzchołki $A$ i $B$ leżą na osi $Oy$, więc ich współrzędne to $A = (0, y_A)$ i $B = (0, y_B)$.
   - Dla wierzchołka stycznego do punktów $P(0, 10)$ i $R(9, 13)$:
     $$|y - 10|^2 = (0 - 9)^2 + (y - 13)^2$$
     $$y^2 - 20y + 100 = 81 + y^2 - 26y + 169 \iff 6y = 150 \iff y = 25$$
     Otrzymujemy wierzchołek $(0, 25)$.
   - Dla wierzchołka stycznego do punktów $P(0, 10)$ i $Q(8, 6)$:
     $$|y - 10|^2 = (0 - 8)^2 + (y - 6)^2$$
     $$y^2 - 20y + 100 = 64 + y^2 - 12y + 36 \iff -20y + 100 = -12y + 100 \iff -8y = 0 \iff y = 0$$
     Otrzymujemy wierzchołek $(0, 0)$.

   Zatem (przyjmując standardowe przyporządkowanie punktów styczności do boków $CA$ i $BC$):
   $$A = (0, 0), \quad B = (0, 25)$$

3. **Wyznaczenie wierzchołka $C$:**
   Wierzchołek $C$ leży na przecięciu prostej $AC$ (zawierającej punkt styczności $Q$ lub $R$) i $BC$:
   - Prosta przechodząca przez $(0, 0)$ i $Q(8, 6)$:
     $$y = \frac{6}{8}x = \frac{3}{4}x \iff 3x - 4y = 0$$
   - Prosta przechodząca przez $(0, 25)$ i $R(9, 13)$:
     $$a = \frac{13 - 25}{9 - 0} = -\frac{12}{9} = -\frac{4}{3} \implies y = -\frac{4}{3}x + 25 \iff 4x + 3y - 75 = 0$$
   Zauważmy, że $\frac{3}{4} \cdot \left(-\frac{4}{3}\right) = -1$, co potwierdza, że kąt przy wierzchołku $C$ jest prosty.
   Rozwiązujemy układ równań:
   $$\begin{cases} y = \frac{3}{4}x \\ 4x + 3\left(\frac{3}{4}x\right) = 75 \end{cases} \implies \frac{25}{4}x = 75 \implies x = 12$$
   $$y = \frac{3}{4}\cdot 12 = 9$$
   Zatem $C = (12, 9)$.

---

### Zadanie 268 [* W]
**Treść zadania:**
Prosta $x - y - 5 = 0$ zawiera bok $AB$ trójkąta $ABC$, prosta $2x + y - 13 = 0$ zawiera bok $BC$, natomiast prosta $3x - y - 7 = 0$ zawiera dwusieczną kąta $BAC$. Znajdź wierzchołki tego trójkąta.

**Odpowiedź:**
$$A = (1, -4), \quad B = (6, 1), \quad C = (-2, 17)$$

**Rozwiązanie krok po kroku:**
1. **Wyznaczenie wierzchołka $B$:**
   Wierzchołek $B$ jest punktem przecięcia boków $AB$ i $BC$:
   $$\begin{cases} x - y - 5 = 0 \implies y = x - 5 \\ 2x + y - 13 = 0 \end{cases}$$
   $$2x + (x - 5) - 13 = 0 \iff 3x - 18 = 0 \iff x = 6, \quad y = 6 - 5 = 1$$
   Zatem $B = (6, 1)$.

2. **Wyznaczenie wierzchołka $A$:**
   Wierzchołek $A$ jest punktem przecięcia boku $AB$ oraz dwusiecznej kąta $BAC$:
   $$\begin{cases} x - y - 5 = 0 \\ 3x - y - 7 = 0 \end{cases}$$
   Odejmujemy pierwsze równanie od drugiego:
   $$(3x - y - 7) - (x - y - 5) = 0 \iff 2x - 2 = 0 \iff x = 1$$
   $$y = 1 - 5 = -4$$
   Zatem $A = (1, -4)$.

3. **Wyznaczenie prostej zawierającej bok $AC$:**
   Dwusieczna kąta $BAC$ ($d: 3x - y - 7 = 0$) jest osią symetrii ramion kąta $AB$ i $AC$. Obraz dowolnego punktu prostej $AB$ w symetrii względem prostej $d$ leży na prostej $AC$.
   Znajdźmy obraz punktu $B(6, 1)$ w symetrii względem prostej $d$:
   - Prosta prostopadła do $d$ przechodząca przez $B(6, 1)$ ma współczynnik kierunkowy $-\frac{1}{3}$:
     $$y - 1 = -\frac{1}{3}(x - 6) \iff x + 3y - 9 = 0$$
   - Rzut $S_B$ punktu $B$ na dwusieczną $d$:
     $$\begin{cases} y = 3x - 7 \\ x + 3(3x - 7) - 9 = 0 \end{cases} \iff 10x - 30 = 0 \iff x = 3, \quad y = 3(3) - 7 = 2$$
     Stąd $S_B = (3, 2)$.
   - Obraz punktu $B$:
     $$B' = 2S_B - B = (2\cdot 3 - 6, 2\cdot 2 - 1) = (0, 3)$$
   - Prosta $AC$ przechodzi przez punkty $A(1, -4)$ i $B'(0, 3)$:
     Współczynnik kierunkowy: $a_{AC} = \frac{3 - (-4)}{0 - 1} = -7$.
     Równanie prostej $AC$:
     $$y = -7x + 3 \iff 7x + y - 3 = 0$$

4. **Wyznaczenie wierzchołka $C$:**
   Punkt $C$ jest punktem przecięcia boku $AC$ i boku $BC$ ($2x + y - 13 = 0$):
   $$\begin{cases} 7x + y - 3 = 0 \\ 2x + y - 13 = 0 \end{cases}$$
   Odejmując równania stronami:
   $$5x + 10 = 0 \iff x = -2$$
   $$y = 13 - 2(-2) = 17$$
   Zatem $C = (-2, 17)$.

---

## RÓWNOLEGŁOBOKI

### prostokąt

---

### Zadanie 269
**Treść zadania:**
Punkty $A = (-4, -4)$ i $B = (8, 2)$ są sąsiednimi wierzchołkami prostokąta $ABCD$, którego środkiem symetrii jest punkt $S = (1, 1)$.
a) Znajdź równanie prostej zawierającej przekątną $AC$.
b) [R] Wyznacz współrzędne wierzchołków $C$ i $D$.

**Odpowiedź:**
a) $y = x$
b) $C = (6, 6), \quad D = (-6, 0)$

**Rozwiązanie krok po kroku:**
- **Podpunkt a):**
  Przekątna $AC$ przechodzi przez wierzchołek $A(-4, -4)$ oraz środek symetrii $S(1, 1)$.
  Współczynnik kierunkowy prostej $AC$:
  $$a = \frac{1 - (-4)}{1 - (-4)} = \frac{5}{5} = 1$$
  Równanie prostej $AC$:
  $$y - 1 = 1(x - 1) \iff y = x$$

- **Podpunkt b):**
  Środek symetrii prostokąta $S(1, 1)$ jest środkiem obu jego przekątnych $AC$ i $BD$:
  $$C = 2S - A = (2\cdot 1 - (-4), 2\cdot 1 - (-4)) = (6, 6)$$
  $$D = 2S - B = (2\cdot 1 - 8, 2\cdot 1 - 2) = (-6, 0)$$

---

### Zadanie 270
**Treść zadania:**
Prostokąt $ABCD$ jest wpisany w okrąg $(x + 2)^2 + (y + 3)^2 = 25$. Bok $AB$ zawarty jest w prostej o równaniu $2x + y - 3 = 0$. Wyznacz współrzędne wierzchołków prostokąta.

**Odpowiedź:**
$$(3, -3), \quad (1, 1), \quad (-7, -3), \quad (-5, -7)$$

**Rozwiązanie krok po kroku:**
1. **Wyznaczenie wierzchołków $A$ i $B$:**
   Wierzchołki $A$ i $B$ są punktami przecięcia prostej $AB: y = 3 - 2x$ z okręgiem:
   $$(x + 2)^2 + (3 - 2x + 3)^2 = 25$$
   $$(x + 2)^2 + (6 - 2x)^2 = 25$$
   $$x^2 + 4x + 4 + 36 - 24x + 4x^2 = 25$$
   $$5x^2 - 20x + 15 = 0 \iff x^2 - 4x + 3 = 0 \iff (x - 1)(x - 3) = 0$$
   Stąd:
   - $x_1 = 3 \implies y_1 = 3 - 2(3) = -3$, co daje punkt $(3, -3)$
   - $x_2 = 1 \implies y_2 = 3 - 2(1) = 1$, co daje punkt $(1, 1)$
   Przyjmijmy $A = (3, -3)$ oraz $B = (1, 1)$.

2. **Wyznaczenie wierzchołków $C$ i $D$ z symetrii środkowej:**
   Środek okręgu $S(-2, -3)$ jest środkiem symetrii wpisanego prostokąta, a więc środkiem przekątnych $AC$ i $BD$:
   $$C = 2S - A = (2(-2) - 3, 2(-3) - (-3)) = (-7, -3)$$
   $$D = 2S - B = (2(-2) - 1, 2(-3) - 1) = (-5, -7)$$

   Zatem współrzędne wierzchołków prostokąta to:
   $$(3, -3), \quad (1, 1), \quad (-7, -3), \quad (-5, -7)$$

---

### Zadanie 271
**Treść zadania:**
Punkt $A = (1, -1)$ jest wierzchołkiem kwadratu opisanego na okręgu o równaniu $x^2 + (y - 2)^2 = 5$. Znajdź współrzędne pozostałych wierzchołków tego kwadratu.

**Odpowiedź:**
$$(-1, 5), \quad (-3, 1), \quad (3, 3)$$

**Rozwiązanie krok po kroku:**
1. **Środek kwadratu i wierzchołek przeciwległy:**
   Środek okręgu wpisanego $S(0, 2)$ jest jednocześnie środkiem symetrii opisanego kwadratu.
   Wierzchołek $C$ przeciwległy do $A(1, -1)$ jest symetryczny do $A$ względem $S$:
   $$C = 2S - A = (2\cdot 0 - 1, 2\cdot 2 - (-1)) = (-1, 5)$$

2. **Wyznaczenie wierzchołków $B$ i $D$ za pomocą obrotu wektora:**
   Wektor $\vec{SA}$ łączący środek z wierzchołkiem $A$:
   $$\vec{SA} = [1 - 0, -1 - 2] = [1, -3]$$
   W kwadracie przekątne są prostopadłe, równej długości i przecinają się w punkcie $S$. Obrót wektora $[u_x, u_y]$ o kąt $\pm 90^\circ$ daje wektory $[-u_y, u_x]$ oraz $[u_y, -u_x]$.
   Dla $\vec{SA} = [1, -3]$ wektorami prostopadłymi o tej samej długości są:
   $$\vec{v}_1 = [3, 1], \quad \vec{v}_2 = [-3, -1]$$
   Stąd:
   $$B = S + \vec{v}_1 = (0 + 3, 2 + 1) = (3, 3)$$
   $$D = S + \vec{v}_2 = (0 - 3, 2 - 1) = (-3, 1)$$

   Pozostałe wierzchołki kwadratu to: $(-1, 5), (-3, 1), (3, 3)$.

---

### Zadanie 272 [W / Egzamin dojrzałości 1994]
**Treść zadania:**
W prostej o równaniu $2x + y - 6 = 0$ zawiera się bok kwadratu opisanego na okręgu o równaniu $x^2 + (y - 1)^2 = 5$. Oblicz współrzędne wierzchołków tego kwadratu.
*Egzamin dojrzałości (LO – profil mat-fiz) w woj. opolskim w roku 1994*

**Odpowiedź:**
$$(1, 4), \quad (3, 0), \quad (-1, -2), \quad (-3, 2)$$

**Rozwiązanie krok po kroku:**
1. **Analiza okręgu i boku kwadratu:**
   Okrąg ma środek $S(0, 1)$ i promień $r = \sqrt{5}$.
   Odległość środka $S(0, 1)$ od prostej $k: 2x + y - 6 = 0$:
   $$d = \frac{|2(0) + 1 - 6|}{\sqrt{2^2 + 1^2}} = \frac{|-5|}{\sqrt{5}} = \sqrt{5} = r$$
   Prosta $k$ jest rzeczywiście styczna do okręgu.

2. **Punkt styczności (środek boku kwadratu):**
   W kwadracie opisanym na okręgu punkt styczności jest środkiem odpowiedniego boku.
   Prosta prostopadła do $k$ przechodząca przez środek $S(0, 1)$ ma równanie:
   $$y - 1 = \frac{1}{2}x \iff x - 2y + 2 = 0$$
   Punkt styczności $P$ wyznaczamy z układu równań:
   $$\begin{cases} y = 6 - 2x \\ x - 2(6 - 2x) + 2 = 0 \end{cases} \iff 5x - 10 = 0 \iff x = 2, \quad y = 2$$
   Zatem $P = (2, 2)$.

3. **Wierzchołki leżące na prostej $k$:**
   Długość boku kwadratu to $a = 2r = 2\sqrt{5}$, a połowa boku to $\frac{a}{2} = \sqrt{5}$.
   Wektor kierunkowy prostej $2x + y - 6 = 0$ to $[1, -2]$, a jego długość wynosi $\sqrt{1^2 + (-2)^2} = \sqrt{5}$.
   Zatem przesunięcie od środka boku $P(2, 2)$ o wektor $\pm [1, -2]$ daje dwa wierzchołki kwadratu:
   $$A = P - [1, -2] = (2 - 1, 2 - (-2)) = (1, 4)$$
   $$B = P + [1, -2] = (2 + 1, 2 - 2) = (3, 0)$$

4. **Pozostałe dwa wierzchołki:**
   Pozostałe wierzchołki $C$ i $D$ są symetryczne do $A$ i $B$ względem środka okręgu $S(0, 1)$:
   $$C = 2S - A = (2\cdot 0 - 1, 2\cdot 1 - 4) = (-1, -2)$$
   $$D = 2S - B = (2\cdot 0 - 3, 2\cdot 1 - 0) = (-3, 2)$$

   Współrzędne wierzchołków kwadratu: $(1, 4), (3, 0), (-1, -2), (-3, 2)$.

---

### Zadanie 273 [W]
**Treść zadania:**
Przekątna kwadratu opisanego na okręgu o równaniu $(x - 1)^2 + y^2 = 5$ zawiera się w prostej o równaniu $2x - y - 2 = 0$. Wyznacz współrzędne wierzchołków tego kwadratu.

**Odpowiedź:**
$$(1 - \sqrt{2}, -2\sqrt{2}), \quad (1 + \sqrt{2}, 2\sqrt{2}), \quad (1 - 2\sqrt{2}, \sqrt{2}), \quad (1 + 2\sqrt{2}, -\sqrt{2})$$

**Rozwiązanie krok po kroku:**
1. **Środek okręgu i odległość wierzchołków:**
   Okrąg ma środek $S(1, 0)$ i promień $r = \sqrt{5}$.
   Zauważmy, że punkt $S(1, 0)$ leży na prostej przekątnej: $2(1) - 0 - 2 = 0$.
   W kwadracie opisanym na okręgu o promieniu $r$, odległość każdego wierzchołka od środka $S$ wynosi:
   $$R = r\sqrt{2} = \sqrt{5}\cdot\sqrt{2} = \sqrt{10}$$

2. **Wierzchołki leżące na danej przekątnej:**
   Dana przekątna ma prostą $2x - y - 2 = 0 \iff y = 2(x - 1)$.
   Wektor kierunkowy prostej to $\vec{v} = [1, 2]$, a jego długość to $|\vec{v}| = \sqrt{1^2 + 2^2} = \sqrt{5}$.
   Wersor kierunkowy prostej to $\vec{u} = \left[\frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}}\right]$.
   Wektor przesunięcia od punktu $S(1, 0)$ o odległość $R = \sqrt{10}$:
   $$\vec{w}_1 = R \cdot \vec{u} = \sqrt{10} \cdot \left[\frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}}\right] = \sqrt{2}[1, 2] = [\sqrt{2}, 2\sqrt{2}]$$
   Stąd dwa wierzchołki to:
   $$A = S - \vec{w}_1 = (1 - \sqrt{2}, -2\sqrt{2})$$
   $$C = S + \vec{w}_1 = (1 + \sqrt{2}, 2\sqrt{2})$$

3. **Wierzchołki leżące na drugiej przekątnej:**
   Druga przekątna jest prostopadła do pierwszej i przechodzi przez $S(1, 0)$.
   Wektor do niej prostopadły o tej samej długości $\sqrt{10}$ otrzymujemy przez obrót:
   $$\vec{w}_2 = [-2\sqrt{2}, \sqrt{2}]$$
   Stąd pozostałe dwa wierzchołki to:
   $$B = S + \vec{w}_2 = (1 - 2\sqrt{2}, \sqrt{2})$$
   $$D = S - \vec{w}_2 = (1 + 2\sqrt{2}, -\sqrt{2})$$

---

### romb

---

### Zadanie 274
**Treść zadania:**
Punkty $A = (2, 1)$ i $C = (4, 3)$ są przeciwległymi wierzchołkami rombu $ABCD$. Wierzchołek $D$ leży na osi $Oy$.
a) Wyznacz współrzędne wierzchołków $B$ i $D$.
b) Oblicz pole rombu.

**Odpowiedź:**
a) $B = (6, -1), \quad D = (0, 5)$
b) pole rombu: $12$

**Rozwiązanie krok po kroku:**
- **Podpunkt a):**
  1. Środek przekątnej $AC$ (środek symetrii rombu $S$):
     $$S = \left(\frac{2 + 4}{2}, \frac{1 + 3}{2}\right) = (3, 2)$$
  2. Przekątna $BD$ jest prostopadła do $AC$ i przechodzi przez $S(3, 2)$.
     Współczynnik kierunkowy prostej $AC$:
     $$a_{AC} = \frac{3 - 1}{4 - 2} = \frac{2}{2} = 1$$
     Współczynnik kierunkowy prostej $BD$: $a_{BD} = -1$.
     Równanie prostej $BD$:
     $$y - 2 = -1(x - 3) \iff y = -x + 5$$
  3. Wierzchołek $D$ leży na osi $Oy$, więc $x_D = 0$:
     $$y_D = -0 + 5 = 5 \implies D = (0, 5)$$
  4. Punkt $S(3, 2)$ jest środkiem przekątnej $BD$, więc $B = 2S - D$:
     $$x_B = 2\cdot 3 - 0 = 6, \quad y_B = 2\cdot 2 - 5 = -1 \implies B = (6, -1)$$

- **Podpunkt b):**
  Długości przekątnych:
  $$d_1 = |AC| = \sqrt{(4 - 2)^2 + (3 - 1)^2} = \sqrt{4 + 4} = 2\sqrt{2}$$
  $$d_2 = |BD| = \sqrt{(6 - 0)^2 + (-1 - 5)^2} = \sqrt{36 + 36} = 6\sqrt{2}$$
  Pole rombu:
  $$P = \frac{1}{2} d_1 d_2 = \frac{1}{2} \cdot 2\sqrt{2} \cdot 6\sqrt{2} = 12$$

---

### Zadanie 275 [W]
**Treść zadania:**
Punkty $A = (-3, -1)$, $B = (4, 0)$ są wierzchołkami rombu $ABCD$, którego wierzchołek $D$ leży na prostej o równaniu $y = -x + 6$. Wyznacz współrzędne wierzchołka $C$.

**Odpowiedź:**
$$C = (9, 5)$$

**Rozwiązanie krok po kroku:**
1. **Długość boku rombu:**
   Wszystkie boki rombu mają tę samą długość. Obliczamy $|AB|$:
   $$|AB| = \sqrt{(4 - (-3))^2 + (0 - (-1))^2} = \sqrt{7^2 + 1^2} = \sqrt{49 + 1} = \sqrt{50} = 5\sqrt{2}$$

2. **Wyznaczenie wierzchołka $D$:**
   Wierzchołek $D$ leży na prostej $y = -x + 6$, zatem $D = (x_D, -x_D + 6)$.
   Ponieważ $|AD| = |AB| = \sqrt{50}$, mamy:
   $$(x_D - (-3))^2 + (-x_D + 6 - (-1))^2 = 50$$
   $$(x_D + 3)^2 + (7 - x_D)^2 = 50$$
   $$x_D^2 + 6x_D + 9 + 49 - 14x_D + x_D^2 = 50$$
   $$2x_D^2 - 8x_D + 58 = 50 \iff 2x_D^2 - 8x_D + 8 = 0 \iff 2(x_D - 2)^2 = 0 \iff x_D = 2$$
   Wtedy $y_D = -2 + 6 = 4$. Zatem $D = (2, 4)$.

3. **Wyznaczenie wierzchołka $C$ z równości wektorów:**
   W rombie zachodzi $\vec{DC} = \vec{AB}$:
   $$\vec{AB} = [4 - (-3), 0 - (-1)] = [7, 1]$$
   Stąd:
   $$C = D + \vec{AB} = (2 + 7, 4 + 1) = (9, 5)$$

---

### Zadanie 276
**Treść zadania:**
Punkty $A = (2, -6)$, $C = (4, 8)$ są przeciwległymi wierzchołkami rombu $ABCD$ o boku długości $10$. Wyznacz współrzędne pozostałych wierzchołków tego rombu.

**Odpowiedź:**
$$(-4, 2), \quad (10, 0)$$

**Rozwiązanie krok po kroku:**
1. **Środek rombu i długość przekątnej $AC$:**
   Środek rombu $S$ jest środkiem przekątnej $AC$:
   $$S = \left(\frac{2 + 4}{2}, \frac{-6 + 8}{2}\right) = (3, 1)$$
   Długość przekątnej $AC$:
   $$|AC| = \sqrt{(4 - 2)^2 + (8 - (-6))^2} = \sqrt{2^2 + 14^2} = \sqrt{4 + 196} = \sqrt{200} = 10\sqrt{2}$$
   Połowa długości przekątnej $AC$:
   $$|AS| = \frac{|AC|}{2} = 5\sqrt{2}$$

2. **Długość drugiej przekątnej $BD$:**
   Trójkąt $ASB$ jest prostokątny o przeciwprostokątnej równej bokowi rombu $a = 10$.
   Z twierdzenia Pitagorasa:
   $$|AS|^2 + |BS|^2 = a^2 \iff (5\sqrt{2})^2 + |BS|^2 = 10^2 \iff 50 + |BS|^2 = 100 \iff |BS|^2 = 50 \implies |BS| = 5\sqrt{2}$$

3. **Wyznaczenie wierzchołków $B$ i $D$:**
   Wektor $\vec{AC} = [4 - 2, 8 - (-6)] = [2, 14]$.
   Wektor prostopadły do $\vec{AC}$ o tej samej długości $10\sqrt{2}$ to $[-14, 2]$ lub $[14, -2]$.
   Wektor przesunięcia od środka $S$ do wierzchołków $B$ i $D$ ma długość $|BS| = 5\sqrt{2}$ (czyli połowę długości powyższego wektora):
   $$\vec{w} = \frac{1}{2}[-14, 2] = [-7, 1]$$
   Stąd:
   $$B = S + \vec{w} = (3 - 7, 1 + 1) = (-4, 2)$$
   $$D = S - \vec{w} = (3 + 7, 1 - 1) = (10, 0)$$

---

### Zadanie 277 [(0–6) / CKE czerwiec 2020]
**Treść zadania:**
Punkt $A = (-2, 6)$ jest wierzchołkiem rombu $ABCD$ o polu równym $82,5$. Przekątna $BD$ tego rombu zawiera się w prostej $l$ o równaniu $2x - y - 5 = 0$. Wyznacz współrzędne pozostałych wierzchołków tego rombu.
*CKE, matura – poziom rozszerzony, czerwiec 2020*

**Odpowiedź:**
$$\left(1\frac{1}{4}, -2\frac{1}{2}\right), \quad (10, 0), \quad \left(6\frac{3}{4}, 8\frac{1}{2}\right)$$

**Rozwiązanie krok po kroku:**
1. **Środek rombu $S$ i wierzchołek $C$:**
   Środek rombu $S$ jest rzutem prostokątnym wierzchołka $A(-2, 6)$ na prostą zawierającą przekątną $BD$ ($l: 2x - y - 5 = 0$).
   Prosta zawierająca przekątną $AC$ jest prostopadła do $l$, więc jej współczynnik kierunkowy wynosi $-\frac{1}{2}$:
   $$y - 6 = -\frac{1}{2}(x - (-2)) \iff y = -\frac{1}{2}x + 5 \iff x + 2y - 10 = 0$$
   Punkt $S$ wyznaczamy z układu równań:
   $$\begin{cases} y = 2x - 5 \\ x + 2(2x - 5) - 10 = 0 \end{cases} \iff 5x - 20 = 0 \iff x = 4, \quad y = 3$$
   Zatem $S = (4, 3)$.
   Wierzchołek $C$ jest symetryczny do $A$ względem $S$:
   $$C = 2S - A = (2\cdot 4 - (-2), 2\cdot 3 - 6) = (10, 0)$$

2. **Długości przekątnych:**
   Długość przekątnej $AC$:
   $$|AC| = \sqrt{(10 - (-2))^2 + (0 - 6)^2} = \sqrt{12^2 + (-6)^2} = \sqrt{144 + 36} = \sqrt{180} = 6\sqrt{5}$$
   Pole rombu wynosi $P = 82,5 = \frac{165}{2}$. Ze wzoru $P = \frac{1}{2} |AC| \cdot |BD|$:
   $$\frac{165}{2} = \frac{1}{2} \cdot 6\sqrt{5} \cdot |BD| \iff 3\sqrt{5} \cdot |BD| = \frac{165}{2} \iff |BD| = \frac{55}{2\sqrt{5}} = \frac{11\sqrt{5}}{2}$$
   Połowa długości przekątnej $BD$:
   $$|BS| = |DS| = \frac{|BD|}{2} = \frac{11\sqrt{5}}{4}$$

3. **Wyznaczenie wierzchołków $B$ i $D$:**
   Wierzchołki $B$ i $D$ leżą na prostej $l: 2x - y - 5 = 0$.
   Wektor kierunkowy prostej $l$ to $\vec{v} = [1, 2]$, a jego długość wynosi $\sqrt{1^2 + 2^2} = \sqrt{5}$.
   Wersor kierunkowy to $\vec{u} = \left[\frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}}\right]$.
   Wektor przesunięcia od środka $S(4, 3)$ o odległość $|BS| = \frac{11\sqrt{5}}{4}$:
   $$\vec{w} = \frac{11\sqrt{5}}{4} \cdot \left[\frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}}\right] = \left[\frac{11}{4}, \frac{11}{2}\right]$$
   Stąd:
   $$B = S - \vec{w} = \left(4 - \frac{11}{4}, 3 - \frac{11}{2}\right) = \left(\frac{5}{4}, -\frac{5}{2}\right) = \left(1\frac{1}{4}, -2\frac{1}{2}\right)$$
   $$D = S + \vec{w} = \left(4 + \frac{11}{4}, 3 + \frac{11}{2}\right) = \left(\frac{27}{4}, \frac{17}{2}\right) = \left(6\frac{3}{4}, 8\frac{1}{2}\right)$$

---

### Zadanie 278
**Treść zadania:**
Punkty $B = (0, 0)$ i $D = (4, 2)$ są wierzchołkami kątów rozwartych rombu $ABCD$. Wyznacz równanie okręgu wpisanego w ten romb wiedząc, że kąt ostry rombu ma miarę $60^\circ$.

**Odpowiedź:**
$$(x - 2)^2 + (y - 1)^2 = \frac{15}{4}$$

**Rozwiązanie krok po kroku:**
1. **Środek okręgu wpisanego:**
   Środek okręgu wpisanego w romb to punkt przecięcia jego przekątnych, czyli środek odcinka $BD$:
   $$S = \left(\frac{0 + 4}{2}, \frac{0 + 2}{2}\right) = (2, 1)$$

2. **Długość boku rombu:**
   Przekątna $BD$ łączy wierzchołki kątów rozwartych (o mierze $120^\circ$), więc jest krótszą przekątną rombu.
   W rombie o kącie ostrym $60^\circ$ krótsza przekątna dzieli romb na dwa trójkąty równoboczne. Zatem bok rombu $a$ jest równy długości przekątnej $BD$:
   $$a = |BD| = \sqrt{(4 - 0)^2 + (2 - 0)^2} = \sqrt{16 + 4} = \sqrt{20} = 2\sqrt{5}$$

3. **Promień okręgu wpisanego:**
   Wysokość rombu $h$ jest równa wysokości trójkąta równobocznego o boku $a = 2\sqrt{5}$:
   $$h = \frac{a\sqrt{3}}{2} = \frac{2\sqrt{5}\cdot\sqrt{3}}{2} = \sqrt{15}$$
   Promień okręgu wpisanego to połowa wysokości rombu:
   $$r = \frac{h}{2} = \frac{\sqrt{15}}{2}$$
   Kwadrat promienia wynosi:
   $$r^2 = \left(\frac{\sqrt{15}}{2}\right)^2 = \frac{15}{4}$$

4. **Równanie okręgu:**
   $$(x - 2)^2 + (y - 1)^2 = \frac{15}{4}$$

---

### Zadanie 279 [* R]
**Treść zadania:**
Na okręgu o równaniu $x^2 + y^2 = 8$ opisano romb o polu $33\frac{1}{3}$. Dłuższa przekątna rombu zawiera się w prostej o równaniu $y = x$. Oblicz współrzędne wierzchołków kątów ostrych tego rombu.

**Odpowiedź:**
$$\left(-\frac{10}{3}, -\frac{10}{3}\right), \quad \left(\frac{10}{3}, \frac{10}{3}\right)$$

**Rozwiązanie krok po kroku:**
1. **Wysokość i bok rombu:**
   Okrąg wpisany ma środek w punkcie $S(0, 0)$ i promień $r = \sqrt{8} = 2\sqrt{2}$.
   Wysokość rombu jest równa średnicy okręgu wpisanego:
   $$h = 2r = 4\sqrt{2}$$
   Pole rombu wynosi $P = 33\frac{1}{3} = \frac{100}{3}$. Z wzoru $P = a \cdot h$:
   $$a = \frac{P}{h} = \frac{\frac{100}{3}}{4\sqrt{2}} = \frac{25}{3\sqrt{2}} = \frac{25\sqrt{2}}{6}$$

2. **Długość dłuższej przekątnej $p$:**
   Dłuższa przekątna rombu łączy wierzchołki kątów ostrych.
   Oznaczmy przekątne rombu przez $p$ i $q$ (gdzie $p > q$).
   Pole rombu:
   $$P = \frac{1}{2}pq = \frac{100}{3} \implies pq = \frac{200}{3} \implies q = \frac{200}{3p}$$
   Z twierdzenia Pitagorasa dla trójkąta prostokątnego utworzonego przez połówki przekątnych:
   $$\left(\frac{p}{2}\right)^2 + \left(\frac{q}{2}\right)^2 = a^2 \iff p^2 + q^2 = 4a^2$$
   $$4a^2 = 4 \cdot \left(\frac{25}{3\sqrt{2}}\right)^2 = 4 \cdot \frac{625}{18} = \frac{1250}{9}$$
   Podstawiamy $q = \frac{200}{3p}$:
   $$p^2 + \frac{40000}{9p^2} = \frac{1250}{9}$$
   Mnożąc obustronnie przez $9p^2$:
   $$9(p^2)^2 - 1250(p^2) + 40000 = 0$$
   Wyróżnik:
   $$\Delta = 1250^2 - 4\cdot 9\cdot 40000 = 1562500 - 1440000 = 122500 = 350^2$$
   Dla dłuższej przekątnej ($p > q$):
   $$p^2 = \frac{1250 + 350}{18} = \frac{1600}{18} = \frac{800}{9}$$
   Stąd:
   $$p = \frac{\sqrt{800}}{3} = \frac{20\sqrt{2}}{3}$$
   Połowa długości dłuższej przekątnej wynosi:
   $$\frac{p}{2} = \frac{10\sqrt{2}}{3}$$

3. **Współrzędne wierzchołków kątów ostrych:**
   Wierzchołki te leżą na prostej $y = x$ w odległości $\frac{p}{2}$ od środka układu $(0, 0)$:
   $$x^2 + y^2 = \left(\frac{10\sqrt{2}}{3}\right)^2 \iff 2x^2 = \frac{200}{9} \iff x^2 = \frac{100}{9} \iff x = \pm \frac{10}{3}$$
   Ponieważ $y = x$, współrzędne wierzchołków to:
   $$\left(-\frac{10}{3}, -\frac{10}{3}\right) \quad \text{oraz} \quad \left(\frac{10}{3}, \frac{10}{3}\right)$$

---

### inne równoległoboki

---

### Zadanie 280
**Treść zadania:**
Punkt $C = (11, 20)$ jest wierzchołkiem równoległoboku $ABCD$. Prosta o równaniu $x - y - 3 = 0$ zawiera bok $AB$, a prosta o równaniu $3x + y - 9 = 0$ zawiera bok $AD$ tego równoległoboku. Oblicz współrzędne pozostałych wierzchołków równoległoboku $ABCD$.

**Odpowiedź:**
$$A = (3, 0), \quad B = (14, 11), \quad D = (0, 9)$$

**Rozwiązanie krok po kroku:**
1. **Wyznaczenie wierzchołka $A$:**
   Wierzchołek $A$ jest punktem przecięcia prostych zawierających boki $AB$ i $AD$:
   $$\begin{cases} x - y - 3 = 0 \\ 3x + y - 9 = 0 \end{cases}$$
   Dodając oba równania:
   $$4x - 12 = 0 \iff x = 3, \quad y = 3 - 3 = 0$$
   Zatem $A = (3, 0)$.

2. **Wyznaczenie wierzchołka $D$:**
   Bok $CD$ jest równoległy do boku $AB$ ($x - y - 3 = 0$) i przechodzi przez $C(11, 20)$:
   $$x - y + C_1 = 0 \implies 11 - 20 + C_1 = 0 \implies C_1 = 9 \implies x - y + 9 = 0$$
   Wierzchołek $D$ jest punktem przecięcia prostej $CD$ i prostej $AD$ ($3x + y - 9 = 0$):
   $$\begin{cases} x - y + 9 = 0 \\ 3x + y - 9 = 0 \end{cases} \implies 4x = 0 \implies x = 0, \quad y = 9$$
   Zatem $D = (0, 9)$.

3. **Wyznaczenie wierzchołka $B$:**
   W równoległoboku zachodzi $\vec{AB} = \vec{DC}$:
   $$\vec{DC} = [11 - 0, 20 - 9] = [11, 11]$$
   Stąd:
   $$B = A + \vec{DC} = (3 + 11, 0 + 11) = (14, 11)$$

---

### Zadanie 281 [(0–4) / CKE sierpień 2013]
**Treść zadania:**
Punkty $A = (-1, -5)$, $B = (3, -1)$ i $C = (2, 4)$ są kolejnymi wierzchołkami równoległoboku $ABCD$. Oblicz pole tego równoległoboku.
*CKE, matura – poziom podstawowy, sierpień 2013*

**Odpowiedź:**
$$24$$

**Rozwiązanie krok po kroku:**
1. **Wyznaczenie wektorów rozpinających równoległobok:**
   Wybieramy wierzchołek $B$ i tworzymy wektory boków $\vec{BA}$ i $\vec{BC}$:
   $$\vec{BA} = [x_A - x_B, y_A - y_B] = [-1 - 3, -5 - (-1)] = [-4, -4]$$
   $$\vec{BC} = [x_C - x_B, y_C - y_B] = [2 - 3, 4 - (-1)] = [-1, 5]$$

2. **Obliczenie pola równoległoboku ze wzoru wyznacznikowego:**
   Pole równoległoboku rozpiętego na wektorach $\vec{u} = [u_x, u_y]$ i $\vec{v} = [v_x, v_y]$ jest równe wartości bezwzględnej ich wyznacznika:
   $$P = |\det(\vec{BA}, \vec{BC})| = |u_x v_y - u_y v_x| = |(-4)\cdot 5 - (-4)\cdot (-1)| = |-20 - 4| = |-24| = 24$$

---

### Zadanie 282 [(0–4) / CKE sierpień 2024]
**Treść zadania:**
W kartezjańskim układzie współrzędnych $(x, y)$ przekątne równoległoboku $ABCD$ przecinają się w punkcie $S = (9, 11)$. Bok $AB$ tego równoległoboku zawiera się w prostej o równaniu $y = 0,5x - 1$, a bok $AD$ zawiera się w prostej o równaniu $y = 2x - 4$. Oblicz współrzędne wierzchołka $B$.
*CKE, matura – poziom podstawowy, sierpień 2024*

**Odpowiedź:**
$$B = (6, 2)$$

**Rozwiązanie krok po kroku:**
1. **Wyznaczenie wierzchołka $A$:**
   Wierzchołek $A$ jest punktem przecięcia prostych $AB$ i $AD$:
   $$2x - 4 = 0,5x - 1 \iff 1,5x = 3 \iff x = 2$$
   $$y = 2(2) - 4 = 0 \implies A = (2, 0)$$

2. **Wyznaczenie wierzchołka $C$:**
   Punkt $S(9, 11)$ jest środkiem przekątnej $AC$:
   $$C = 2S - A = (2\cdot 9 - 2, 2\cdot 11 - 0) = (16, 22)$$

3. **Równanie prostej zawierającej bok $BC$:**
   Bok $BC$ jest równoległy do boku $AD$ ($y = 2x - 4$), więc ma współczynnik kierunkowy $a = 2$.
   Przechodzi przez punkt $C(16, 22)$:
   $$y - 22 = 2(x - 16) \iff y = 2x - 10$$

4. **Wyznaczenie wierzchołka $B$:**
   Wierzchołek $B$ jest punktem przecięcia prostych $AB$ ($y = 0,5x - 1$) i $BC$ ($y = 2x - 10$):
   $$2x - 10 = 0,5x - 1 \iff 1,5x = 9 \iff x = 6$$
   $$y = 2(6) - 10 = 2$$
   Zatem $B = (6, 2)$.

---

### Zadanie 283
**Treść zadania:**
Punkt $S = (0, 0)$ jest środkiem boku $AD$ równoległoboku $ABCD$. Oblicz współrzędne wierzchołków tego równoległoboku oraz jego pole wiedząc, że $\vec{AB} = [4, 3]$ i $\vec{BC} = [6, 2]$.

**Odpowiedź:**
$$A = (-3, -1), \quad B = (1, 2), \quad C = (7, 4), \quad D = (3, 1), \quad \text{Pole: } 10$$

**Rozwiązanie krok po kroku:**
1. **Wyznaczenie wierzchołków $A$ i $D$:**
   W równoległoboku $\vec{AD} = \vec{BC} = [6, 2]$.
   Środek odcinka $AD$ to $S(0, 0)$. Zatem:
   $$\vec{SA} = -\frac{1}{2}\vec{AD} = -\frac{1}{2}[6, 2] = [-3, -1] \implies A = (-3, -1)$$
   $$\vec{SD} = \frac{1}{2}\vec{AD} = \frac{1}{2}[6, 2] = [3, 1] \implies D = (3, 1)$$

2. **Wyznaczenie wierzchołków $B$ i $C$:**
   $$B = A + \vec{AB} = (-3 + 4, -1 + 3) = (1, 2)$$
   $$C = B + \vec{BC} = (1 + 6, 2 + 2) = (7, 4)$$

3. **Obliczenie pola równoległoboku:**
   Pole wyznaczamy z iloczynu wektorowego (wyznacznika) wektorów $\vec{AB} = [4, 3]$ i $\vec{AD} = [6, 2]$:
   $$P = |\det(\vec{AB}, \vec{AD})| = |4\cdot 2 - 3\cdot 6| = |8 - 18| = |-10| = 10$$

---

### Zadanie 284 [(0–6) / CKE czerwiec 2024]
**Treść zadania:**
W kartezjańskim układzie współrzędnych $(x, y)$ prosta o równaniu $3x + y + 2 = 0$ przecina parabolę o równaniu $y = x^2 - 2x - 8$ w punktach $A$ oraz $B$, które są kolejnymi wierzchołkami równoległoboku $ABCD$. Wierzchołek $A$ ma pierwszą współrzędną ujemną. Wierzchołek $C$ leży na prostej o równaniu $x + 2y - 2 = 0$ i ma pierwszą współrzędną dodatnią. Odległość punktu $C$ od prostej zawierającej bok $AB$ równoległoboku jest równa $\frac{9\sqrt{10}}{5}$. Oblicz długość boku $BC$ tego równoległoboku. Zapisz obliczenia.
*CKE, matura – poziom rozszerzony, czerwiec 2024*

**Odpowiedź:**
$$|BC| = 2\sqrt{13}$$

**Rozwiązanie krok po kroku:**
1. **Wyznaczenie wierzchołków $A$ i $B$:**
   Punkty $A$ i $B$ są punktami wspólnymi prostej $y = -3x - 2$ oraz paraboli $y = x^2 - 2x - 8$:
   $$x^2 - 2x - 8 = -3x - 2 \iff x^2 + x - 6 = 0 \iff (x + 3)(x - 2) = 0$$
   - Dla $x = -3$: $y = -3(-3) - 2 = 7 \implies A = (-3, 7)$ (bo pierwsza współrzędna punktu $A$ jest ujemna).
   - Dla $x = 2$: $y = -3(2) - 2 = -8 \implies B = (2, -8)$.

2. **Wyznaczenie współrzędnych wierzchołka $C$:**
   Punkt $C$ leży na prostej $x + 2y - 2 = 0 \iff x = 2 - 2y$ i ma $x_C > 0$.
   Odległość punktu $C(2 - 2y, y)$ od prostej $AB: 3x + y + 2 = 0$ wynosi $\frac{9\sqrt{10}}{5}$:
   $$d = \frac{|3(2 - 2y) + y + 2|}{\sqrt{3^2 + 1^2}} = \frac{|6 - 6y + y + 2|}{\sqrt{10}} = \frac{|8 - 5y|}{\sqrt{10}}$$
   Przyrównujemy do danej odległości:
   $$\frac{|8 - 5y|}{\sqrt{10}} = \frac{9\sqrt{10}}{5} \iff |8 - 5y| = \frac{9\cdot 10}{5} = 18$$
   Rozpatrujemy dwa przypadki:
   - $8 - 5y = 18 \implies -5y = 10 \implies y = -2 \implies x = 2 - 2(-2) = 6 > 0$ (warunek $x_C > 0$ spełniony).
   - $8 - 5y = -18 \implies -5y = -26 \implies y = \frac{26}{5} \implies x = 2 - 2\cdot \frac{26}{5} = -\frac{42}{5} < 0$ (sprzeczność z $x_C > 0$).
   Zatem $C = (6, -2)$.

3. **Obliczenie długości boku $BC$:**
   Mając $B(2, -8)$ oraz $C(6, -2)$:
   $$|BC| = \sqrt{(6 - 2)^2 + (-2 - (-8))^2} = \sqrt{4^2 + 6^2} = \sqrt{16 + 36} = \sqrt{52} = 2\sqrt{13}$$

---

## TRAPEZY

---

### Zadanie 285
**Treść zadania:**
Czworokąt $ABCD$ pokazany jest na rysunku.
a) Uzasadnij, że czworokąt $ABCD$ jest trapezem.
b) Znajdź równania prostych zawierających przekątne tego czworokąta.
c) Oblicz pole czworokąta $ABCD$.

**Odpowiedź:**
a) Pr. $AD$ i pr. $BC$ są równoległe (pr. $AD: y = x + 4$, pr. $BC: y = x - 3$)
b) $x = 1, \quad x - 8y + 4 = 0$
c) pole: $28$

**Rozwiązanie krok po kroku:**
- **Odczytanie współrzędnych wierzchołków z rysunku:**
  Z siatki kwadratowej o jednostce $1$ odczytujemy:
  $$A = (-4, 0), \quad B = (1, -2), \quad C = (4, 1), \quad D = (1, 5)$$

- **Podpunkt a):**
  Wyznaczamy równania prostych zawierających boki $AD$ i $BC$:
  - Prosta $AD$ przechodzi przez $A(-4, 0)$ i $D(1, 5)$:
    Współczynnik kierunkowy: $a_{AD} = \frac{5 - 0}{1 - (-4)} = \frac{5}{5} = 1$.
    Równanie: $y - 0 = 1(x + 4) \iff y = x + 4$.
  - Prosta $BC$ przechodzi przez $B(1, -2)$ i $C(4, 1)$:
    Współczynnik kierunkowy: $a_{BC} = \frac{1 - (-2)}{4 - 1} = \frac{3}{3} = 1$.
    Równanie: $y - 1 = 1(x - 4) \iff y = x - 3$.
  Ponieważ współczynniki kierunkowe są równe ($a_{AD} = a_{BC} = 1$), boki $AD$ i $BC$ są równoległe ($AD \parallel BC$). Czworokąt posiadający parę przeciwległych boków równoległych jest trapezem.

- **Podpunkt b):**
  Przekątne to odcinki $BD$ i $AC$:
  - Przekątna $BD$: $B = (1, -2)$ i $D = (1, 5)$. Obie odcięte są równe $1$, więc równanie prostej to:
    $$x = 1$$
  - Przekątna $AC$: $A = (-4, 0)$ i $C = (4, 1)$.
    Współczynnik kierunkowy: $a_{AC} = \frac{1 - 0}{4 - (-4)} = \frac{1}{8}$.
    Równanie:
    $$y - 0 = \frac{1}{8}(x + 4) \iff 8y = x + 4 \iff x - 8y + 4 = 0$$

- **Podpunkt c):**
  Pionowa przekątna $BD$ ma długość:
  $$|BD| = 5 - (-2) = 7$$
  Dzieli ona czworokąt na dwa trójkąty: $ABD$ (na lewo od prostej $x = 1$) oraz $CBD$ (na prawo od prostej $x = 1$).
  Wysokość trójkąta $ABD$ opuszczona na $BD$: $h_1 = 1 - (-4) = 5$.
  Wysokość trójkąta $CBD$ opuszczona na $BD$: $h_2 = 4 - 1 = 3$.
  Pole czworokąta wynosi:
  $$P = P_{ABD} + P_{CBD} = \frac{1}{2} \cdot |BD| \cdot h_1 + \frac{1}{2} \cdot |BD| \cdot h_2 = \frac{1}{2} \cdot 7 \cdot (5 + 3) = \frac{1}{2} \cdot 7 \cdot 8 = 28$$

---

### Zadanie 286 [Egzamin wstępny 1993]
**Treść zadania:**
Oblicz pole czworokąta ograniczonego prostymi o równaniach: $y = 2x - 2$, $y = -\frac{4}{3}x + 10$, $y = 0$, $y = 2$.
*Egzamin wstępny do szkół średnich w woj. jeleniogórskim w roku 1993*

**Odpowiedź:**
$$10,5$$

**Rozwiązanie krok po kroku:**
1. **Identyfikacja czworokąta:**
   Proste $y = 0$ oraz $y = 2$ są wzajemnie równoległe (poziome), zatem czworokąt jest trapezem o podstawach leżących na tych prostych i wysokości $h = 2 - 0 = 2$.

2. **Wyznaczenie wierzchołków na dolnej podstawie ($y = 0$):**
   - Punkt $A$ (przecięcie $y = 2x - 2$ z $y = 0$):
     $$2x - 2 = 0 \iff x = 1 \implies A = (1, 0)$$
   - Punkt $B$ (przecięcie $y = -\frac{4}{3}x + 10$ z $y = 0$):
     $$-\frac{4}{3}x + 10 = 0 \iff \frac{4}{3}x = 10 \iff x = \frac{30}{4} = 7,5 \implies B = (7,5; 0)$$
   Długość dolnej podstawy:
   $$a = |AB| = 7,5 - 1 = 6,5$$

3. **Wyznaczenie wierzchołków na górnej podstawie ($y = 2$):**
   - Punkt $D$ (przecięcie $y = 2x - 2$ z $y = 2$):
     $$2x - 2 = 2 \iff 2x = 4 \iff x = 2 \implies D = (2, 2)$$
   - Punkt $C$ (przecięcie $y = -\frac{4}{3}x + 10$ z $y = 2$):
     $$-\frac{4}{3}x + 10 = 2 \iff -\frac{4}{3}x = -8 \iff x = 6 \implies C = (6, 2)$$
   Długość górnej podstawy:
   $$b = |CD| = 6 - 2 = 4$$

4. **Obliczenie pola trapezu:**
   $$P = \frac{a + b}{2} \cdot h = \frac{6,5 + 4}{2} \cdot 2 = 10,5$$

---

### Zadanie 287
**Treść zadania:**
Punkty $A = (0, -5)$, $B = (4, 3)$ i $C = (-1, 3)$ są wierzchołkami trapezu równoramiennego $ABCD$ o podstawach $AB$ i $CD$. Wyznacz współrzędne wierzchołka $D$ wiedząc, że $ABCD$ nie jest równoległobokiem.

**Odpowiedź:**
$$D = (-3, -1)$$

**Rozwiązanie krok po kroku:**
1. **Równanie prostej zawierającej podstawę $CD$:**
   Podstawa $AB$ ma współczynnik kierunkowy:
   $$a_{AB} = \frac{3 - (-5)}{4 - 0} = \frac{8}{4} = 2$$
   Podstawa $CD$ jest równoległa do $AB$, więc jej współczynnik kierunkowy również wynosi $2$. Przechodzi przez punkt $C(-1, 3)$:
   $$y - 3 = 2(x - (-1)) \iff y = 2x + 5$$
   Zatem punkt $D$ leży na tej prostej: $D = (d, 2d + 5)$.

2. **Warunek równoramienności trapezu:**
   W trapezie równoramiennym długości ramion są równe: $|AD| = |BC|$.
   Obliczamy długość ramienia $BC$:
   $$|BC| = \sqrt{(-1 - 4)^2 + (3 - 3)^2} = \sqrt{(-5)^2 + 0} = 5$$
   Stąd $|AD|^2 = 25$:
   $$(d - 0)^2 + (2d + 5 - (-5))^2 = 25$$
   $$d^2 + (2d + 10)^2 = 25 \iff d^2 + 4d^2 + 40d + 100 = 25$$
   $$5d^2 + 40d + 75 = 0 \iff d^2 + 8d + 15 = 0 \iff (d + 3)(d + 5) = 0$$
   Mamy dwie wartości:
   - Dla $d = -5$: $y = 2(-5) + 5 = -5 \implies D_1 = (-5, -5)$.
     Wtedy wektor $\vec{D_1C} = [-1 - (-5), 3 - (-5)] = [4, 8] = \vec{AB}$. Wówczas czworokąt byłby równoległobokiem, co wyklucza treść zadania.
   - Dla $d = -3$: $y = 2(-3) + 5 = -1 \implies D = (-3, -1)$.
     Wtedy wektor $\vec{DC} = [-1 - (-3), 3 - (-1)] = [2, 4] \neq \vec{AB}$, a zatem czworokąt jest właściwym trapezem równoramiennym.

   Zatem szukany wierzchołek to $D = (-3, -1)$.

---

### Zadanie 288
**Treść zadania:**
Punkty $A = (-5, 0)$, $B = (0, 0)$, $C = (0, 3)$, $D = (x, 3)$, gdzie $x < 0$, są kolejnymi wierzchołkami trapezu $ABCD$. Dla jakich wartości $x$ w trapez ten można wpisać okrąg?

**Odpowiedź:**
$$x = -2\frac{1}{7}$$

**Rozwiązanie krok po kroku:**
1. **Długości boków trapezu:**
   - Podstawa $AB$ leży na osi $Ox$ ($y = 0$): $A(-5, 0)$, $B(0, 0) \implies |AB| = 0 - (-5) = 5$.
   - Podstawa $CD$ leży na prostej $y = 3$: $C(0, 3)$, $D(x, 3)$, gdzie $x < 0 \implies |CD| = 0 - x = -x$.
   - Ramię $BC$ leży na osi $Oy$: od $(0, 0)$ do $(0, 3) \implies |BC| = 3$.
   - Ramię $AD$ łączy $A(-5, 0)$ z $D(x, 3)$:
     $$|AD| = \sqrt{(x - (-5))^2 + (3 - 0)^2} = \sqrt{(x + 5)^2 + 9}$$

2. **Warunek wpisywalności okręgu w czworokąt:**
   W czworokąt można wpisać okrąg wtedy i tylko wtedy, gdy sumy długości przeciwległych boków są równe:
   $$|AB| + |CD| = |BC| + |AD|$$
   $$5 + (-x) = 3 + \sqrt{(x + 5)^2 + 9} \iff 2 - x = \sqrt{(x + 5)^2 + 9}$$
   Ponieważ $x < 0$, lewa strona $2 - x > 2 > 0$. Podnosimy obie strony do kwadratu:
   $$(2 - x)^2 = (x + 5)^2 + 9$$
   $$4 - 4x + x^2 = x^2 + 10x + 25 + 9$$
   $$4 - 4x = 10x + 34 \iff -14x = 30 \iff x = -\frac{30}{14} = -\frac{15}{7} = -2\frac{1}{7}$$

---

### Zadanie 289 [W]
**Treść zadania:**
Odcinek o końcach $A = (3, 3)$ i $B = (0, 0)$ jest podstawą trapezu $ABCD$. Druga podstawa trapezu jest cztery razy dłuższa i ma środek w punkcie $K = (3, -1)$. Wyznacz współrzędne wierzchołków $C$ i $D$ tego trapezu oraz oblicz jego pole.

**Odpowiedź:**
$$C = (-3, -7), \quad D = (9, 5), \quad \text{Pole trapezu: } 30$$
*(Wskazówka ze zbioru: $\vec{KC} = 2 \cdot \vec{AB}$.)*

**Rozwiązanie krok po kroku:**
1. **Długość i wektor podstawy $AB$:**
   $$\vec{AB} = [0 - 3, 0 - 3] = [-3, -3]$$
   Długość podstawy $AB$:
   $$|AB| = \sqrt{(-3)^2 + (-3)^2} = \sqrt{18} = 3\sqrt{2}$$

2. **Wyznaczenie wierzchołków $C$ i $D$:**
   Podstawa $CD$ jest 4 razy dłuższa od podstawy $AB$, czyli $|CD| = 4|AB| = 12\sqrt{2}$.
   Ponieważ wierzchołki czworokąta są uporządkowane kolejno $A, B, C, D$, wektor $\vec{DC}$ ma ten sam zwrot co wektor $\vec{AB}$:
   $$\vec{DC} = 4\vec{AB} = 4[-3, -3] = [-12, -12]$$
   Punkt $K(3, -1)$ jest środkiem podstawy $CD$, więc:
   $$\vec{KC} = \frac{1}{2}\vec{DC} = 2\vec{AB} = 2[-3, -3] = [-6, -6]$$
   $$\vec{KD} = -\vec{KC} = [6, 6]$$
   Stąd:
   $$C = K + \vec{KC} = (3 - 6, -1 - 6) = (-3, -7)$$
   $$D = K + \vec{KD} = (3 + 6, -1 + 6) = (9, 5)$$

3. **Wysokość trapezu $h$:**
   Prosta zawierająca podstawę $AB$ przechodzi przez punkty $(0, 0)$ i $(3, 3)$, ma więc równanie:
   $$y = x \iff x - y = 0$$
   Wysokość trapezu jest odległością środka drugiej podstawy $K(3, -1)$ od prostej $AB$:
   $$h = \frac{|3 - (-1)|}{\sqrt{1^2 + (-1)^2}} = \frac{4}{\sqrt{2}} = 2\sqrt{2}$$

4. **Pole trapezu:**
   $$P = \frac{|AB| + |CD|}{2} \cdot h = \frac{3\sqrt{2} + 12\sqrt{2}}{2} \cdot 2\sqrt{2} = 15\sqrt{2} \cdot \sqrt{2} = 30$$

---

## ZBIORY PUNKTÓW O DANEJ WŁASNOŚCI

---

### Zadanie 290
**Treść zadania:**
Wyznaczymy zbiór punktów $(x, y)$, których odległość od punktu $A = (5, 1)$ i od prostej $y = 3$ jest jednakowa.
- Odległość punktu $(x, y)$ od punktu $A = (5, 1)$ jest równa $\sqrt{(x - 5)^2 + (y - 1)^2}$.
- Odległość punktu $(x, y)$ od prostej $y = 3$ wynosi $|y - 3|$.
- Stąd otrzymujemy równość $\sqrt{(x - 5)^2 + (y - 1)^2} = |y - 3|$.
- Podnosząc do kwadratu obie strony tej równości, dostajemy równanie $(x - 5)^2 + (y - 1)^2 = (y - 3)^2$, a po przekształceniach otrzymujemy równanie $y = -\frac{1}{4}x^2 + 2\frac{1}{2}x - 4\frac{1}{4}$.
- Zatem szukanym zbiorem jest parabola o równaniu $y = -\frac{1}{4}x^2 + 2\frac{1}{2}x - 4\frac{1}{4}$.

Postępując w pokazany sposób, znajdź zbiór tych punktów, których odległość od punktu $A = (-6, 2)$ i od prostej o równaniu $y = -4$ jest jednakowa.

**Odpowiedź:**
Parabola o równaniu $$y = \frac{1}{12}x^2 + x + 2$$

**Rozwiązanie krok po kroku:**
1. Niech $P(x, y)$ będzie dowolnym punktem szukanego zbioru.
2. Odległość punktu $P$ od punktu $A(-6, 2)$ wynosi:
   $$d(P, A) = \sqrt{(x - (-6))^2 + (y - 2)^2} = \sqrt{(x + 6)^2 + (y - 2)^2}$$
3. Odległość punktu $P$ od prostej $y = -4$ wynosi:
   $$d(P, l) = |y - (-4)| = |y + 4|$$
4. Zgodnie z warunkiem zadania odległości te są równe:
   $$\sqrt{(x + 6)^2 + (y - 2)^2} = |y + 4|$$
5. Obie strony są nieujemne, podnosimy je do kwadratu:
   $$(x + 6)^2 + (y - 2)^2 = (y + 4)^2$$
   $$x^2 + 12x + 36 + y^2 - 4y + 4 = y^2 + 8y + 16$$
   $$x^2 + 12x + 40 - 4y = 8y + 16$$
   $$12y = x^2 + 12x + 24$$
   Dzielimy obustronnie przez $12$:
   $$y = \frac{1}{12}x^2 + x + 2$$

---

### Zadanie 291
**Treść zadania:**
Zbiór $A$ jest zbiorem tych punktów płaszczyzny, których odległość od początku układu współrzędnych jest dwa razy większa niż odległość od prostej $x - y\sqrt{3} = 0$. Wyznacz zbiór $A$.

**Odpowiedź:**
Zbiór $A$ jest sumą dwóch prostych o równaniach:
$$y = 0 \quad \text{i} \quad y - x\sqrt{3} = 0$$

**Rozwiązanie krok po kroku:**
1. Niech $P(x, y) \in A$.
   Odległość punktu $P$ od początku układu $O(0, 0)$:
   $$d(P, O) = \sqrt{x^2 + y^2}$$
2. Odległość punktu $P$ od prostej $k: x - \sqrt{3}y = 0$:
   $$d(P, k) = \frac{|x - y\sqrt{3}|}{\sqrt{1^2 + (-\sqrt{3})^2}} = \frac{|x - y\sqrt{3}|}{\sqrt{1 + 3}} = \frac{|x - y\sqrt{3}|}{2}$$
3. Z warunku zadania $d(P, O) = 2 \cdot d(P, k)$:
   $$\sqrt{x^2 + y^2} = 2 \cdot \frac{|x - y\sqrt{3}|}{2} \iff \sqrt{x^2 + y^2} = |x - y\sqrt{3}|$$
4. Podnosimy obie strony do kwadratu:
   $$x^2 + y^2 = (x - y\sqrt{3})^2$$
   $$x^2 + y^2 = x^2 - 2\sqrt{3}xy + 3y^2$$
   $$y^2 = -2\sqrt{3}xy + 3y^2 \iff 2y^2 - 2\sqrt{3}xy = 0 \iff 2y(y - x\sqrt{3}) = 0$$
5. Stąd otrzymujemy alternatywę dwóch równań liniowych:
   $$y = 0 \quad \text{lub} \quad y - x\sqrt{3} = 0$$
   Zatem zbiór $A$ jest sumą dwóch prostych o powyższych równaniach.

---

### Zadanie 292 [CKE maj 2008]
**Treść zadania:**
Uzasadnij, że każdy punkt paraboli $y = 0,25x^2 + 1$ jest równoodległy od osi $Ox$ i od punktu $F = (0, 2)$.
*CKE, matura – poziom rozszerzony, maj 2008*

**Odpowiedź:**
Rozwiązanie dowodowe (wykazano, że dla każdego punktu $P$ paraboli odległość od osi $Ox$ oraz od punktu $F$ wynosi $\frac{1}{4}x^2 + 1$).

**Rozwiązanie krok po kroku:**
1. Niech $P(x, y)$ będzie dowolnym punktem należącym do paraboli $y = 0,25x^2 + 1 = \frac{1}{4}x^2 + 1$.
   Zauważmy, że dla każdego $x \in \mathbb{R}$ zachodzi:
   $$y = \frac{1}{4}x^2 + 1 \ge 1 > 0$$

2. **Odległość punktu $P$ od osi $Ox$:**
   Oś $Ox$ jest prostą o równaniu $y = 0$. Odległość punktu $P(x, y)$ od tej prostej wynosi:
   $$d(P, Ox) = |y| = y = \frac{1}{4}x^2 + 1$$

3. **Odległość punktu $P$ od punktu $F(0, 2)$:**
   $$d(P, F) = \sqrt{(x - 0)^2 + (y - 2)^2} = \sqrt{x^2 + (y - 2)^2}$$
   Z równania paraboli wyznaczamy $x^2$:
   $$y - 1 = \frac{1}{4}x^2 \iff x^2 = 4(y - 1) = 4y - 4$$
   Podstawiamy to wyrażenie pod pierwiastek:
   $$d(P, F) = \sqrt{4y - 4 + (y^2 - 4y + 4)} = \sqrt{y^2} = |y|$$
   Ponieważ $y \ge 1 > 0$, otrzymujemy:
   $$d(P, F) = y = \frac{1}{4}x^2 + 1$$

4. **Wniosek:**
   Dla każdego punktu paraboli zachodzi $d(P, Ox) = d(P, F) = y$, co kończy dowód (parabola ta jest zbiorem punktów równoodległych od ogniska $F(0, 2)$ i kierownicy $y = 0$).

---

### Zadanie 293
**Treść zadania:**
Znajdź równanie krzywej, którą tworzą wszystkie punkty jednakowo odległe od okręgu $x^2 + (y - 1)^2 = 1$ i od prostej $y + 1 = 0$.

**Odpowiedź:**
Parabola o równaniu $$x^2 - 6y - 3 = 0$$

**Rozwiązanie krok po kroku:**
1. **Analiza danych figur:**
   Dany okrąg ma środek $S(0, 1)$ i promień $R = 1$.
   Dana prosta ma równanie $y = -1$.
   Zauważmy, że najniższym punktem okręgu jest $(0, 0)$, a prosta leży poniżej niego ($y = -1$). Szukane punkty $P(x, y)$ leżące na zewnątrz okręgu i ponad prostą $y = -1$ spełniają $y > -1$.

2. **Odległość punktu od prostej:**
   Odległość punktu $P(x, y)$ od prostej $y = -1$ wynosi:
   $$d(P, l) = y - (-1) = y + 1$$

3. **Odległość punktu od okręgu:**
   Odległość punktu $P(x, y)$ (znajdującego się na zewnątrz okręgu) od okręgu o środku $S(0, 1)$ i promieniu $R = 1$ to odległość od środka pomniejszona o promień:
   $$d(P, \text{okrąg}) = |PS| - R = \sqrt{x^2 + (y - 1)^2} - 1$$

4. **Wyznaczenie równania krzywej:**
   Przyrównujemy odległości:
   $$\sqrt{x^2 + (y - 1)^2} - 1 = y + 1 \iff \sqrt{x^2 + (y - 1)^2} = y + 2$$
   Dla $y > -1$ prawa strona $y + 2 > 1 > 0$. Podnosimy obie strony do kwadratu:
   $$x^2 + (y - 1)^2 = (y + 2)^2$$
   $$x^2 + y^2 - 2y + 1 = y^2 + 4y + 4$$
   $$x^2 - 2y + 1 = 4y + 4 \iff x^2 - 6y - 3 = 0$$
   Jest to równanie paraboli $y = \frac{1}{6}x^2 - \frac{1}{2}$.

---

### Zadanie 294 [W]
**Treść zadania:**
Znajdź zbiór środków wszystkich okręgów stycznych wewnętrznie do okręgu o równaniu $x^2 + y^2 = 4$ i stycznych do prostej o równaniu $y = 0$. Podaj ilustrację graficzną rozwiązania.

**Odpowiedź:**
$$\left\{(x, y): \left(y = -\frac{1}{4}x^2 + 1 \;\vee\; y = \frac{1}{4}x^2 - 1\right) \wedge x \in (-2; 2) \wedge y \in \mathbb{R}\right\}$$
*(Wskazówka ze zbioru: Jeśli punkt $(x, y)$ jest środkiem okręgu $o$ stycznego wewnętrznie do okręgu o równaniu $x^2 + y^2 = 4$ i stycznego do prostej o równaniu $y = 0$, to promień okręgu $o$ ma długość $|y|$, odległość punktu styczności okręgu $o$ z osią $Oy$ od punktu $(0, 0)$ jest równa $|x|$, a odległość środka okręgu $o$ od punktu $(0, 0)$ jest równa $2 - |y|$.)*

**Rozwiązanie krok po kroku:**
1. **Analiza warunków styczności:**
   Dany jest okrąg $O_1$ o środku w początku układu $S_1(0, 0)$ i promieniu $R = 2$.
   Niech szukany okrąg $o$ ma środek w punkcie $P(x, y)$ i promień $r > 0$.
   - Ponieważ okrąg $o$ jest styczny do prostej $y = 0$ (osi $Ox$), jego promień jest równy odległości środka $P$ od tej prostej:
     $$r = |y|$$
   - Ponieważ okrąg $o$ jest styczny wewnętrznie do okręgu $O_1$, odległość między ich środkami wynosi:
     $$|S_1P| = R - r \iff \sqrt{x^2 + y^2} = 2 - |y|$$

2. **Warunki istnienia i dziedzina:**
   Aby okrąg leżał wewnątrz okręgu o promieniu $2$, musi zachodzić:
   $$2 - |y| > 0 \iff |y| < 2$$
   Ponadto promień $r = |y| > 0$, więc $y \neq 0$.

3. **Przekształcenie algebraiczne:**
   Podnosimy obie strony równania $\sqrt{x^2 + y^2} = 2 - |y|$ do kwadratu:
   $$x^2 + y^2 = (2 - |y|)^2 = 4 - 4|y| + y^2$$
   $$x^2 = 4 - 4|y| \iff 4|y| = 4 - x^2 \iff |y| = 1 - \frac{1}{4}x^2$$
   Ponieważ $|y| > 0$, musi zachodzić $1 - \frac{1}{4}x^2 > 0 \iff x^2 < 4 \iff x \in (-2, 2)$.
   Opuszczając wartość bezwzględną:
   - Dla $y > 0$: $y = -\frac{1}{4}x^2 + 1$ dla $x \in (-2, 2)$.
   - Dla $y < 0$: $y = \frac{1}{4}x^2 - 1$ dla $x \in (-2, 2)$.

4. **Ilustracja graficzna:**
   Zbiór tworzą dwa łuki parabol symetryczne względem osi $Ox$:
   - górny łuk paraboli o wierzchołku $(0, 1)$ z ramionami skierowanymi w dół, kończący się w punktach $(-2, 0)$ i $(2, 0)$ (bez tych punktów),
   - dolny łuk paraboli o wierzchołku $(0, -1)$ z ramionami skierowanymi w górę, kończący się w punktach $(-2, 0)$ i $(2, 0)$ (bez tych punktów).

---

### Zadanie 295
**Treść zadania:**
Wyznacz równanie zbioru środków wszystkich okręgów stycznych zewnętrznie do okręgu $x^2 + (y - 2)^2 = 1$ i stycznych do prostej $y = -2$.

**Odpowiedź:**
Parabola o równaniu $$y = \frac{1}{10}x^2 - \frac{1}{2}$$

**Rozwiązanie krok po kroku:**
1. **Analiza położeń figur:**
   Dany okrąg ma środek $S(0, 2)$ i promień $R = 1$.
   Najniższy punkt tego okręgu ma współrzędne $(0, 1)$.
   Dana prosta to $l: y = -2$.
   Każdy okrąg styczny zewnętrznie do tego okręgu i styczny do prostej $y = -2$ musi leżeć w pasie powyżej prostej $y = -2$, czyli jego środek $P(x, y)$ ma rzędną $y > -2$.

2. **Promień szukanego okręgu:**
   Promień $r$ okręgu o środku $P(x, y)$ stycznego do prostej $y = -2$ wynosi:
   $$r = y - (-2) = y + 2$$

3. **Warunek styczności zewnętrznej:**
   Odległość środków okręgów jest równa sumie ich promieni:
   $$|PS| = R + r \iff \sqrt{x^2 + (y - 2)^2} = 1 + (y + 2) = y + 3$$

4. **Wyznaczenie równania krzywej:**
   Ponieważ $y > -2$, mamy $y + 3 > 1 > 0$. Podnosimy obie strony do kwadratu:
   $$x^2 + (y - 2)^2 = (y + 3)^2$$
   $$x^2 + y^2 - 4y + 4 = y^2 + 6y + 9$$
   $$x^2 - 4y + 4 = 6y + 9 \iff 10y = x^2 - 5 \iff y = \frac{1}{10}x^2 - \frac{1}{2}$$
   Szukanym zbiorem jest parabola o równaniu $y = \frac{1}{10}x^2 - \frac{1}{2}$.

---

### Zadanie 296 [* W]
**Treść zadania:**
Wyznacz figurę, która jest zbiorem środków cięciw paraboli o równaniu $y = x^2 - 1$ przechodzących przez początek układu współrzędnych.

**Odpowiedź:**
Parabola o równaniu $$y = 2x^2$$
*(Wskazówki ze zbioru: Jeśli prosta przechodzi przez punkt $(0, 0)$, to jej równanie ma postać $y = ax$. Jeśli punkty $(x_1, y_1)$ i $(x_2, y_2)$ są końcami cięciwy paraboli o równaniu $y = x^2 - 1$ i należą do prostej $y = ax$, to odcięte tych punktów są rozwiązaniami równania $x^2 - 1 = ax$, a odcięta środka cięciwy jest równa $\frac{x_1 + x_2}{2}$.)*

**Rozwiązanie krok po kroku:**
1. **Równanie prostej przechodzącej przez $(0, 0)$:**
   Prosta przechodząca przez początek układu współrzędnych ma postać:
   - $x = 0$ (oś $Oy$): przecina parabolę $y = x^2 - 1$ tylko w jednym punkcie $(0, -1)$, więc nie wyznacza cięciwy.
   - $y = ax$, gdzie $a \in \mathbb{R}$.

2. **Punkty przecięcia prostej z parabolą:**
   Przyrównujemy równania:
   $$x^2 - 1 = ax \iff x^2 - ax - 1 = 0$$
   Wyróżnik tego równania:
   $$\Delta = (-a)^2 - 4\cdot 1\cdot (-1) = a^2 + 4$$
   Dla każdego $a \in \mathbb{R}$ zachodzi $\Delta = a^2 + 4 \ge 4 > 0$, więc równanie ma zawsze dwa różne rozwiązania rzeczywiste $x_1, x_2$. Prosta zawsze przecina parabolę w dwóch punktach $P_1(x_1, y_1)$ i $P_2(x_2, y_2)$, tworząc cięciwę $P_1P_2$.

3. **Współrzędne środka cięciwy:**
   Niech $M(x_M, y_M)$ będzie środkiem cięciwy $P_1P_2$.
   Ze wzorów Viète'a dla równania $x^2 - ax - 1 = 0$:
   $$x_1 + x_2 = a$$
   Odcięta środka odcinka:
   $$x_M = \frac{x_1 + x_2}{2} = \frac{a}{2} \implies a = 2x_M$$
   Punkt $M$ leży na prostej $y = ax$, zatem jego rzędna wynosi:
   $$y_M = a \cdot x_M = (2x_M) \cdot x_M = 2x_M^2$$

4. **Wnioski i podsumowanie:**
   Ponieważ współczynnik kierunkowy $a$ może przyjmować dowolną wartość ze zbioru liczb rzeczywistych ($a \in \mathbb{R}$), odcięta środka $x_M = \frac{a}{2}$ przyjmuje wszystkie wartości rzeczywiste ($x_M \in \mathbb{R}$).
   Zatem zbiorem wszystkich środków cięciw jest krzywa o równaniu:
   $$y = 2x^2$$
   czyli parabola o wierzchołku w punkcie $(0, 0)$ i ramionach skierowanych w górę.

---
