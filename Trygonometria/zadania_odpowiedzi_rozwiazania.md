# 10. TRYGONOMETRIA — PEŁNE ZESTAWIENIE ZADAŃ, ODPOWIEDZI I ROZWIĄZAŃ

> Kompletny spis teorii, przydatnych wzorów, zadań wprowadzających oraz zadań maturalnych wraz z oficjalnymi odpowiedziami i rozwiązaniami krok po kroku na podstawie podręcznika.

---

# CZĘŚĆ TEORETYCZNA — PRZYDATNE WZORY I WŁASNOŚCI

## 1. Definicje funkcji trygonometrycznych w trójkącie prostokątnym

Dla trójkąta prostokątnego o przyprostokątnych $a$ (leżącej przy kącie $\alpha$), $b$ (leżącej naprzeciw kąta $\alpha$) oraz przeciwprostokątnej $c$:

$$\sin\alpha = \frac{b}{c} = \frac{\text{przyprostokątna naprzeciw kąta}}{\text{przeciwprostokątna}}$$

$$\cos\alpha = \frac{a}{c} = \frac{\text{przyprostokątna przyległa do kąta}}{\text{przeciwprostokątna}}$$

$$\operatorname{tg}\alpha = \frac{b}{a} = \frac{\text{przyprostokątna naprzeciw kąta}}{\text{przyprostokątna przyległa do kąta}}$$

---

## 2. Definicje funkcji trygonometrycznych dowolnego kąta w układzie współrzędnych

Niech $\alpha$ będzie kątem skierowanym w układzie współrzędnych $Oxy$, którego początkowe ramię pokrywa się z dodatnią półosią $Ox$, a końcowe ramię przechodzi przez punkt $P = (a, b)$ różny od początku układu $O(0, 0)$.  
Promień wodzący punktu $P$ wynosi:
$$c = |OP| = \sqrt{a^2 + b^2} > 0$$

Wówczas:
- $\sin\alpha = \frac{b}{c}$
- $\cos\alpha = \frac{a}{c}$
- $\operatorname{tg}\alpha = \frac{b}{a}$, gdzie $a \ne 0$

---

## 3. Wykresy funkcji trygonometrycznych

### Sinus: $f(x) = \sin x$
- **Dziedzina:** $D = \mathbb{R}$
- **Zbiór wartości:** $ZW = [-1, 1]$
- **Okres podstawowy:** $T = 2\pi$
- **Miejsca zerowe:** $x = k\pi$, gdzie $k \in \mathbb{Z}$
- **Parzystość:** funkcja nieparzysta, $\sin(-x) = -\sin x$

### Cosinus: $f(x) = \cos x$
- **Dziedzina:** $D = \mathbb{R}$
- **Zbiór wartości:** $ZW = [-1, 1]$
- **Okres podstawowy:** $T = 2\pi$
- **Miejsca zerowe:** $x = \frac{\pi}{2} + k\pi$, gdzie $k \in \mathbb{Z}$
- **Parzystość:** funkcja parzysta, $\cos(-x) = \cos x$

### Tangens: $f(x) = \operatorname{tg} x$
- **Dziedzina:** $D = \mathbb{R} \setminus \left\{ \frac{\pi}{2} + k\pi : k \in \mathbb{Z} \right\}$
- **Zbiór wartości:** $ZW = \mathbb{R}$
- **Okres podstawowy:** $T = \pi$
- **Miejsca zerowe:** $x = k\pi$, gdzie $k \in \mathbb{Z}$
- **Asymptoty pionowe:** proste o równaniach $x = \frac{\pi}{2} + k\pi$, gdzie $k \in \mathbb{Z}$
- **Parzystość:** funkcja nieparzysta, $\operatorname{tg}(-x) = -\operatorname{tg} x$

---

## 4. Związek między miarą stopniową i miarą łukową kąta

Niech $\alpha_S$ będzie miarą kąta wyrażoną w stopniach, a $\alpha_R$ miarą tego samego kąta wyrażoną w radianach.

- **Wzór na zamianę stopni na radiany:**
  $$\alpha_R = \frac{\alpha_S}{180^\circ} \cdot \pi$$
  *Przykład:* Jeżeli $\alpha_S = 180^\circ$, to $\alpha_R = \pi$.

- **Wzór na zamianę radianów na stopnie:**
  $$\alpha_S = \frac{\alpha_R}{\pi} \cdot 180^\circ$$
  *Przykład:* Jeżeli $\alpha_R = \frac{\pi}{6}$, to $\alpha_S = \frac{\frac{\pi}{6}}{\pi} \cdot 180^\circ = 30^\circ$.

---

## 5. Wartości funkcji trygonometrycznych dla kątów szczególnych

| Kąt $\alpha$ | $0^\circ$ ($0$ rad) | $30^\circ$ ($\frac{\pi}{6}$ rad) | $45^\circ$ ($\frac{\pi}{4}$ rad) | $60^\circ$ ($\frac{\pi}{3}$ rad) | $90^\circ$ ($\frac{\pi}{2}$ rad) | $180^\circ$ ($\pi$ rad) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$\sin\alpha$** | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $0$ |
| **$\cos\alpha$** | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-1$ |
| **$\operatorname{tg}\alpha$** | $0$ | $\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | *nie istnieje* | $0$ |

---

## 6. Podstawowe związki między funkcjami trygonometrycznymi (tożsamości)

- **Kofunkcje kąta dopełniającego:**
  $$\cos\alpha = \sin(90^\circ - \alpha), \quad \sin\alpha = \cos(90^\circ - \alpha)$$
  *Przykład:* $\sin 70^\circ = \cos(90^\circ - 70^\circ) = \cos 20^\circ$.

- **Iloraz sinusa i cosinusa:**
  $$\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha}, \quad \text{dla } \cos\alpha \ne 0$$

- **Jedynka trygonometryczna:**
  $$\sin^2\alpha + \cos^2\alpha = 1$$
  *Uwaga o zapisie:* $\sin^2\alpha = (\sin\alpha)^2$, $\cos^2\alpha = (\cos\alpha)^2$, $\operatorname{tg}^2\alpha = (\operatorname{tg}\alpha)^2$.  
  *Przykład:* $\sin^2 30^\circ = (\sin 30^\circ)^2 = \left(\frac{1}{2}\right)^2 = \frac{1}{4}$.

---

## 7. Funkcje trygonometryczne sumy i różnicy kątów

$$\sin(x + y) = \sin x \cos y + \cos x \sin y$$
$$\sin(x - y) = \sin x \cos y - \cos x \sin y$$
$$\cos(x + y) = \cos x \cos y - \sin x \sin y$$
$$\cos(x - y) = \cos x \cos y + \sin x \sin y$$
$$\operatorname{tg}(x + y) = \frac{\operatorname{tg} x + \operatorname{tg} y}{1 - \operatorname{tg} x \operatorname{tg} y}$$
$$\operatorname{tg}(x - y) = \frac{\operatorname{tg} x - \operatorname{tg} y}{1 + \operatorname{tg} x \operatorname{tg} y}$$

---

## 8. Wzory redukcyjne i parzystość

Poniższe wzory wynikają bezpośrednio ze wzorów na funkcje trygonometryczne sumy i różnicy:

- **Parzystość i nieparzystość:**
  $$\cos(-x) = \cos x, \quad \sin(-x) = -\sin x, \quad \operatorname{tg}(-x) = -\operatorname{tg} x$$

- **Wzory dla $\frac{\pi}{2} \pm x$:**
  $$\sin\left(\frac{\pi}{2} - x\right) = \cos x, \quad \cos\left(\frac{\pi}{2} - x\right) = \sin x$$
  $$\sin\left(\frac{\pi}{2} + x\right) = \cos x, \quad \cos\left(\frac{\pi}{2} + x\right) = -\sin x$$

- **Wzory dla $\pi \pm x$:**
  $$\sin(\pi - x) = \sin x, \quad \cos(\pi - x) = -\cos x$$
  $$\sin(\pi + x) = -\sin x, \quad \cos(\pi + x) = -\cos x$$

---

## 9. Funkcje trygonometryczne podwojonego argumentu

- **Sinus podwojonego kąta:**
  $$\sin 2x = 2\sin x \cos x$$

- **Cosinus podwojonego kąta (3 równoważne postacie):**
  $$\cos 2x = \cos^2 x - \sin^2 x$$
  $$\cos 2x = 2\cos^2 x - 1$$
  $$\cos 2x = 1 - 2\sin^2 x$$

- **Wzory z użyciem $\operatorname{tg} x$:**
  $$\sin 2x = \frac{2\operatorname{tg} x}{1 + \operatorname{tg}^2 x}$$
  $$\cos 2x = \frac{1 - \operatorname{tg}^2 x}{1 + \operatorname{tg}^2 x}$$
  $$\operatorname{tg} 2x = \frac{2\operatorname{tg} x}{1 - \operatorname{tg}^2 x}$$

---


<!-- SEKCJA ZADAŃ 1 -->
# TRYGONOMETRIA

## CZĘŚĆ TEORETYCZNA

### 1. Definicje funkcji trygonometrycznych w trójkącie prostokątnym

Dla trójkąta prostokątnego o przyprostokątnych $a$ (leżącej przy kącie $\alpha$), $b$ (leżącej naprzeciw kąta $\alpha$) oraz przeciwprostokątnej $c$:

$$\sin\alpha = \frac{b}{c} = \frac{\text{długość przyprostokątnej naprzeciw kąta } \alpha}{\text{długość przeciwprostokątnej}}$$

$$\cos\alpha = \frac{a}{c} = \frac{\text{długość przyprostokątnej przyległej do kąta } \alpha}{\text{długość przeciwprostokątnej}}$$

$$\operatorname{tg}\alpha = \frac{b}{a} = \frac{\text{długość przyprostokątnej naprzeciw kąta } \alpha}{\text{długość przyprostokątnej przyległej do kąta } \alpha}$$

---

### 2. Definicje funkcji trygonometrycznych dowolnego kąta w układzie współrzędnych

Niech $\alpha$ będzie kątem skierowanym w kartezjańskim układzie współrzędnych $Oxy$, którego początkowe ramię pokrywa się z dodatnią półosią $Ox$, a na końcowym ramieniu leży punkt $P = (a, b)$ różny od początku układu $O(0, 0)$.

Promień wodzący punktu $P$ (odległość punktu $P$ od początku układu $O$) wynosi:
$$c = |OP| = \sqrt{a^2 + b^2} > 0$$

Wówczas definiujemy:
- $$\sin\alpha = \frac{b}{c} = \frac{\text{rzędna punktu } P}{\text{promień wodzący}}$$
- $$\cos\alpha = \frac{a}{c} = \frac{\text{odcięta punktu } P}{\text{promień wodzący}}$$
- $$\operatorname{tg}\alpha = \frac{b}{a} = \frac{\text{rzędna punktu } P}{\text{odcięta punktu } P}, \quad \text{dla } a \ne 0$$

#### Znaki funkcji trygonometrycznych w ćwiartkach:

| Ćwiartka | Kąt $\alpha$ | $\sin\alpha$ | $\cos\alpha$ | $\operatorname{tg}\alpha$ |
| :---: | :---: | :---: | :---: | :---: |
| **I ćwiartka** | $\left(0, \frac{\pi}{2}\right)$ | $+$ | $+$ | $+$ |
| **II ćwiartka** | $\left(\frac{\pi}{2}, \pi\right)$ | $+$ | $-$ | $-$ |
| **III ćwiartka** | $\left(\pi, \frac{3\pi}{2}\right)$ | $-$ | $-$ | $+$ |
| **IV ćwiartka** | $\left(\frac{3\pi}{2}, 2\pi\right)$ | $-$ | $+$ | $-$ |

*Tradycyjny wierszyk ułatwiający zapamiętanie:*  
„W pierwszej ćwiartce same plusy,  
w drugiej tylko sinus,  
w trzeciej tangens i cotangens,  
a w czwartej cosinus.”

---

### 3. Wykresy i własności funkcji trygonometrycznych

#### Funkcja sinus: $f(x) = \sin x$
- **Dziedzina:** $D = \mathbb{R}$
- **Zbiór wartości:** $ZW = [-1, 1]$
- **Okres podstawowy:** $T = 2\pi$
- **Miejsca zerowe:** $x = k\pi$, gdzie $k \in \mathbb{Z}$
- **Parzystość:** funkcja nieparzysta, $\sin(-x) = -\sin x$
- **Ekstrema lokalne:**
  - Wartość maksymalna $y = 1$ dla $x = \frac{\pi}{2} + 2k\pi, \; k \in \mathbb{Z}$
  - Wartość minimalna $y = -1$ dla $x = -\frac{\pi}{2} + 2k\pi, \; k \in \mathbb{Z}$

#### Funkcja cosinus: $f(x) = \cos x$
- **Dziedzina:** $D = \mathbb{R}$
- **Zbiór wartości:** $ZW = [-1, 1]$
- **Okres podstawowy:** $T = 2\pi$
- **Miejsca zerowe:** $x = \frac{\pi}{2} + k\pi$, gdzie $k \in \mathbb{Z}$
- **Parzystość:** funkcja parzysta, $\cos(-x) = \cos x$
- **Ekstrema lokalne:**
  - Wartość maksymalna $y = 1$ dla $x = 2k\pi, \; k \in \mathbb{Z}$
  - Wartość minimalna $y = -1$ dla $x = \pi + 2k\pi, \; k \in \mathbb{Z}$

#### Funkcja tangens: $f(x) = \operatorname{tg} x$
- **Dziedzina:** $D = \mathbb{R} \setminus \left\{ \frac{\pi}{2} + k\pi : k \in \mathbb{Z} \right\}$
- **Zbiór wartości:** $ZW = \mathbb{R}$
- **Okres podstawowy:** $T = \pi$
- **Miejsca zerowe:** $x = k\pi$, gdzie $k \in \mathbb{Z}$
- **Asymptoty pionowe:** proste o równaniach $x = \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$
- **Parzystość:** funkcja nieparzysta, $\operatorname{tg}(-x) = -\operatorname{tg} x$
- **Monotoniczność:** funkcja przedziałami ściśle rosnąca w każdym przedziale $\left(-\frac{\pi}{2} + k\pi, \frac{\pi}{2} + k\pi\right)$

---

### 4. Związek między miarą stopniową i miarą łukową kąta

Niech $\alpha_S$ będzie miarą kąta wyrażoną w stopniach, zaś $\alpha_R$ miarą tego samego kąta wyrażoną w radianach.

- **Wzór na zamianę stopni na radiany:**
  $$\alpha_R = \frac{\alpha_S}{180^\circ} \cdot \pi$$
  *Przykład:* Jeżeli $\alpha_S = 180^\circ$, to $\alpha_R = \pi$.

- **Wzór na zamianę radianów na stopnie:**
  $$\alpha_S = \frac{\alpha_R}{\pi} \cdot 180^\circ$$
  *Przykład:* Jeżeli $\alpha_R = \frac{\pi}{6}$, to $\alpha_S = \frac{\frac{\pi}{6}}{\pi} \cdot 180^\circ = 30^\circ$.

---

### 5. Wartości funkcji trygonometrycznych dla kątów szczególnych

| Kąt $\alpha$ (stopnie) | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $180^\circ$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Kąt $\alpha$ (radiany)** | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\pi$ |
| **$\sin\alpha$** | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $0$ |
| **$\cos\alpha$** | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-1$ |
| **$\operatorname{tg}\alpha$** | $0$ | $\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | *nie istnieje* | $0$ |

---

### 6. Podstawowe związki między funkcjami trygonometrycznymi (tożsamości)

- **Kofunkcje kąta dopełniającego:**
  $$\cos\alpha = \sin(90^\circ - \alpha), \qquad \sin\alpha = \cos(90^\circ - \alpha)$$
  *Przykład:* $\sin 70^\circ = \cos(90^\circ - 70^\circ) = \cos 20^\circ$.

- **Zależność między tangensem, sinusem i kosinusem:**
  $$\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha}, \quad \text{dla } \cos\alpha \ne 0$$

- **Jedynka trygonometryczna:**
  $$\sin^2\alpha + \cos^2\alpha = 1$$
  *UWAGA O ZAPISIE:* Zapis $\sin^2\alpha$ oznacza to samo co zapis $(\sin\alpha)^2$. Podobnie $\cos^2\alpha = (\cos\alpha)^2$ i $\operatorname{tg}^2\alpha = (\operatorname{tg}\alpha)^2$.  
  *Przykład:* $\sin^2 30^\circ = (\sin 30^\circ)^2 = \left(\frac{1}{2}\right)^2 = \frac{1}{4}$.

---

### 7. Funkcje trygonometryczne sumy i różnicy kątów

$$\sin(x + y) = \sin x \cos y + \cos x \sin y$$
$$\sin(x - y) = \sin x \cos y - \cos x \sin y$$
$$\cos(x + y) = \cos x \cos y - \sin x \sin y$$
$$\cos(x - y) = \cos x \cos y + \sin x \sin y$$
$$\operatorname{tg}(x + y) = \frac{\operatorname{tg} x + \operatorname{tg} y}{1 - \operatorname{tg} x \operatorname{tg} y}$$
$$\operatorname{tg}(x - y) = \frac{\operatorname{tg} x - \operatorname{tg} y}{1 + \operatorname{tg} x \operatorname{tg} y}$$

---

### 8. Inne wzory (wzory redukcyjne i parzystość)

*UWAGA:* Poniższe wzory wynikają bezpośrednio ze wzorów na funkcje trygonometryczne sumy i różnicy.

- **Parzystość i nieparzystość:**
  $$\cos(-x) = \cos x, \qquad \sin(-x) = -\sin x, \qquad \operatorname{tg}(-x) = -\operatorname{tg} x$$

- **Wzory redukcyjne dla kątów postaci $\frac{\pi}{2} \pm x$ ($90^\circ \pm x$):**
  $$\sin\left(\frac{\pi}{2} - x\right) = \cos x, \qquad \cos\left(\frac{\pi}{2} - x\right) = \sin x$$
  $$\sin\left(\frac{\pi}{2} + x\right) = \cos x, \qquad \cos\left(\frac{\pi}{2} + x\right) = -\sin x$$

- **Wzory redukcyjne dla kątów postaci $\pi \pm x$ ($180^\circ \pm x$):**
  $$\sin(\pi - x) = \sin x, \qquad \cos(\pi - x) = -\cos x, \qquad \operatorname{tg}(\pi - x) = -\operatorname{tg} x$$
  $$\sin(\pi + x) = -\sin x, \qquad \cos(\pi + x) = -\cos x, \qquad \operatorname{tg}(\pi + x) = \operatorname{tg} x$$

- **Wzory redukcyjne dla kątów postaci $\frac{3\pi}{2} \pm x$ ($270^\circ \pm x$):**
  $$\sin\left(\frac{3\pi}{2} - x\right) = -\cos x, \qquad \cos\left(\frac{3\pi}{2} - x\right) = -\sin x$$
  $$\sin\left(\frac{3\pi}{2} + x\right) = -\cos x, \qquad \cos\left(\frac{3\pi}{2} + x\right) = \sin x$$

- **Okresowość ($2k\pi$ dla sin i cos, $k\pi$ dla tg):**
  $$\sin(x + 2k\pi) = \sin x, \qquad \cos(x + 2k\pi) = \cos x, \qquad \operatorname{tg}(x + k\pi) = \operatorname{tg} x, \quad k \in \mathbb{Z}$$

---

### 9. Funkcje trygonometryczne podwojonego argumentu

- **Sinus podwojonego kąta:**
  $$\sin 2x = 2\sin x \cos x$$

- **Cosinus podwojonego kąta (trzy równoważne postacie):**
  $$\cos 2x = \cos^2 x - \sin^2 x$$
  $$\cos 2x = 2\cos^2 x - 1$$
  $$\cos 2x = 1 - 2\sin^2 x$$

- **Wzory z użyciem $\operatorname{tg} x$:**
  $$\sin 2x = \frac{2\operatorname{tg} x}{1 + \operatorname{tg}^2 x}$$
  $$\cos 2x = \frac{1 - \operatorname{tg}^2 x}{1 + \operatorname{tg}^2 x}$$
  $$\operatorname{tg} 2x = \frac{2\operatorname{tg} x}{1 - \operatorname{tg}^2 x}$$

---

## ZADANIA WPROWADZAJĄCE (10.1 – 10.29)

### Zadanie 10.1 [R]

**Treść zadania:**  
Podane miary stopniowe kątów wyraź w radianach:  
a) $360^\circ$  
b) $90^\circ$  
c) [R] $18^\circ$  
d) $5^\circ$

**Odpowiedź:**  
a) $2\pi$  
b) $\frac{\pi}{2}$  
c) $\frac{\pi}{10}$  
d) $\frac{\pi}{36}$

**Rozwiązanie krok po kroku:**  
W celu zamiany miary stopniowej kąta $\alpha_S$ na miarę łukową (w radianach) $\alpha_R$ korzystamy ze wzoru:
$$\alpha_R = \frac{\alpha_S}{180^\circ} \cdot \pi$$

a) Dla kąta $360^\circ$:
$$\alpha_R = \frac{360^\circ}{180^\circ} \cdot \pi = 2\pi$$

b) Dla kąta $90^\circ$:
$$\alpha_R = \frac{90^\circ}{180^\circ} \cdot \pi = \frac{1}{2}\pi = \frac{\pi}{2}$$

c) Dla kąta $18^\circ$:
$$\alpha_R = \frac{18^\circ}{180^\circ} \cdot \pi = \frac{1}{10}\pi = \frac{\pi}{10}$$

d) Dla kąta $5^\circ$:
$$\alpha_R = \frac{5^\circ}{180^\circ} \cdot \pi = \frac{5}{180}\pi = \frac{1}{36}\pi = \frac{\pi}{36}$$

---

### Zadanie 10.2 [R]

**Treść zadania:**  
Podane miary łukowe kątów wyraź w stopniach:  
a) $3\pi$  
b) [R] $0{,}75\pi$  
c) $\frac{\pi}{3}$  
d) $\frac{5\pi}{6}$  
e) [R] $\frac{\pi}{18}$

**Odpowiedź:**  
a) $540^\circ$  
b) $135^\circ$  
c) $60^\circ$  
d) $150^\circ$  
e) $10^\circ$

**Rozwiązanie krok po kroku:**  
W celu zamiany miary łukowej $\alpha_R$ na miarę stopniową $\alpha_S$ korzystamy ze wzoru:
$$\alpha_S = \frac{\alpha_R}{\pi} \cdot 180^\circ$$
lub bezpośrednio podstawiamy $\pi = 180^\circ$.

a) Dla kąta $3\pi$:
$$\alpha_S = 3 \cdot 180^\circ = 540^\circ$$

b) Dla kąta $0{,}75\pi$:
$$\alpha_S = 0{,}75 \cdot 180^\circ = \frac{3}{4} \cdot 180^\circ = 3 \cdot 45^\circ = 135^\circ$$
*(lub ze wzoru: $\frac{0{,}75\pi}{\pi} \cdot 180^\circ = 0{,}75 \cdot 180^\circ = 135^\circ$)*

c) Dla kąta $\frac{\pi}{3}$:
$$\alpha_S = \frac{180^\circ}{3} = 60^\circ$$

d) Dla kąta $\frac{5\pi}{6}$:
$$\alpha_S = 5 \cdot \frac{180^\circ}{6} = 5 \cdot 30^\circ = 150^\circ$$

e) Dla kąta $\frac{\pi}{18}$:
$$\alpha_S = \frac{180^\circ}{18} = 10^\circ$$

---

### Zadanie 10.3 [R]

**Treść zadania:**  
Przyprostokątne $AB$ i $AC$ trójkąta prostokątnego $ABC$ mają długości równe odpowiednio 5 i 3. Oblicz:  
a) tangens kąta $ABC$  
b) tangens kąta $ACB$  
c) sinus kąta $ABC$

**Odpowiedź:**  
a) $\operatorname{tg}(\sphericalangle ABC) = \frac{3}{5}$  
b) $\operatorname{tg}(\sphericalangle ACB) = \frac{5}{3}$  
c) $\sin(\sphericalangle ABC) = \frac{3}{\sqrt{34}} = \frac{3\sqrt{34}}{34}$

**Rozwiązanie krok po kroku:**  
W trójkącie prostokątnym $ABC$ kąt prosty znajduje się przy wierzchołku $A$ (ponieważ boki $AB$ i $AC$ są przyprostokątnymi). Mamy dane:
$$|AB| = 5, \qquad |AC| = 3$$

a) Kąt $ABC$ leży przy boku $AB$, naprzeciwko boku $AC$. Z definicji tangensa kąta ostrego w trójkącie prostokątnym:
$$\operatorname{tg}(\sphericalangle ABC) = \frac{|AC|}{|AB|} = \frac{3}{5} = 0{,}6$$

b) Kąt $ACB$ leży przy boku $AC$, naprzeciwko boku $AB$:
$$\operatorname{tg}(\sphericalangle ACB) = \frac{|AB|}{|AC|} = \frac{5}{3} = 1\frac{2}{3}$$

c) Aby wyznaczyć sinus kąta $ABC$, potrzebujemy długości przeciwprostokątnej $BC$. Korzystamy z twierdzenia Pitagorasa:
$$|BC|^2 = |AB|^2 + |AC|^2 = 5^2 + 3^2 = 25 + 9 = 34 \implies |BC| = \sqrt{34}$$
Z definicji sinusa (stosunek przyprostokątnej leżącej naprzeciw kąta do przeciwprostokątnej):
$$\sin(\sphericalangle ABC) = \frac{|AC|}{|BC|} = \frac{3}{\sqrt{34}} = \frac{3\sqrt{34}}{34}$$

---

### Zadanie 10.4 [R]

**Treść zadania:**  
Półprosta $p$ ma początek w punkcie $(0, 0)$, przechodzi przez punkt $A$ i jest ramieniem wypukłego kąta $\alpha$, którego drugie ramię zawiera się w dodatniej półosi $OX$.  
a) Oblicz $\operatorname{tg}\alpha$, jeżeli $A = (3, 7)$;  
b) [R] Oblicz $\cos\alpha$, jeżeli $A = (12, 5)$;  
c) [R] Oblicz $\operatorname{tg}\alpha$, jeżeli $A = (-4, 3)$;  
d) Oblicz $\sin\alpha$ i $\cos\alpha$, jeżeli $A = (24, -7)$.

**Odpowiedź:**  
a) $\operatorname{tg}\alpha = \frac{7}{3}$  
b) $\cos\alpha = \frac{12}{13}$  
c) $\operatorname{tg}\alpha = -\frac{3}{4}$  
d) $\sin\alpha = -\frac{7}{25}$, $\cos\alpha = \frac{24}{25}$

**Rozwiązanie krok po kroku:**  
Dla dowolnego punktu $A(x, y)$ leżącego na końcowym ramieniu kąta skierowanego $\alpha$, odległość $c$ punktu $A$ od początku układu współrzędnych $O(0, 0)$ (promień wodzący) wynosi:
$$c = \sqrt{x^2 + y^2} > 0$$
Z definicji funkcji trygonometrycznych dowolnego kąta w układzie współrzędnych:
$$\sin\alpha = \frac{y}{c}, \qquad \cos\alpha = \frac{x}{c}, \qquad \operatorname{tg}\alpha = \frac{y}{x} \quad (x \ne 0)$$

a) Dla punktu $A(3, 7)$: $x = 3$, $y = 7$.
$$\operatorname{tg}\alpha = \frac{y}{x} = \frac{7}{3}$$

b) Dla punktu $A(12, 5)$: $x = 12$, $y = 5$.
Obliczamy promień wodzący:
$$c = \sqrt{12^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13$$
Stąd:
$$\cos\alpha = \frac{x}{c} = \frac{12}{13}$$

c) Dla punktu $A(-4, 3)$: $x = -4$, $y = 3$.
$$\operatorname{tg}\alpha = \frac{y}{x} = \frac{3}{-4} = -\frac{3}{4}$$

d) Dla punktu $A(24, -7)$: $x = 24$, $y = -7$.
Obliczamy promień wodzący:
$$c = \sqrt{24^2 + (-7)^2} = \sqrt{576 + 49} = \sqrt{625} = 25$$
Stąd:
$$\sin\alpha = \frac{y}{c} = \frac{-7}{25} = -\frac{7}{25}, \qquad \cos\alpha = \frac{x}{c} = \frac{24}{25}$$

---

### Zadanie 10.5 [R]

**Treść zadania:**  
Jedno ramię kąta $\alpha$ zawiera się w dodatniej półosi $OX$, a drugie leży w II ćwiartce układu współrzędnych i zawiera się w prostej o równaniu $y = -\frac{2}{3}x$.  
a) Podaj wartość tangensa kąta $\alpha$.  
b) Oblicz $\sin\alpha$ i $\cos\alpha$, wykorzystując definicje funkcji sinus i kosinus.

**Odpowiedź:**  
a) $\operatorname{tg}\alpha = -\frac{2}{3}$  
b) $\sin\alpha = \frac{2}{\sqrt{13}} = \frac{2\sqrt{13}}{13}$, $\cos\alpha = -\frac{3}{\sqrt{13}} = -\frac{3\sqrt{13}}{13}$

**Rozwiązanie krok po kroku:**  
a) Prosta przechodząca przez początek układu współrzędnych ma postać $y = ax$, gdzie współczynnik kierunkowy $a$ jest równy tangensowi kąta nachylenia prostej do dodatniej półosi osi $OX$. Zatem:
$$\operatorname{tg}\alpha = a = -\frac{2}{3}$$

b) Aby wyznaczyć $\sin\alpha$ i $\cos\alpha$ z definicji, wybieramy dowolny punkt $P(x, y)$ leżący na prostej $y = -\frac{2}{3}x$ w II ćwiartce układu współrzędnych (gdzie $x < 0$ oraz $y > 0$).  
Przyjmijmy np. $x = -3$. Wtedy:
$$y = -\frac{2}{3} \cdot (-3) = 2$$
Otrzymujemy punkt $P(-3, 2)$.  
Odległość punktu $P$ od początku układu $O(0, 0)$ wynosi:
$$|OP| = c = \sqrt{(-3)^2 + 2^2} = \sqrt{9 + 4} = \sqrt{13}$$
Z definicji funkcji sinus i kosinus dowolnego kąta:
$$\sin\alpha = \frac{y}{c} = \frac{2}{\sqrt{13}} = \frac{2\sqrt{13}}{13}$$
$$\cos\alpha = \frac{x}{c} = \frac{-3}{\sqrt{13}} = -\frac{3\sqrt{13}}{13}$$

---

### Zadanie 10.6 [R]

**Treść zadania:**  
Korzystając z definicji funkcji trygonometrycznych, określ znak każdej z liczb: $\sin\alpha, \cos\alpha, \operatorname{tg}\alpha$, jeżeli:  
a) $\alpha \in \left(0; \frac{1}{2}\pi\right)$  
b) [R] $\alpha \in (2; 3)$  
c) $\alpha \in \left(\pi; \frac{3}{2}\pi\right)$  
d) $\alpha \in (5; 6)$

**Odpowiedź:**  
a) $\sin\alpha > 0$, $\cos\alpha > 0$, $\operatorname{tg}\alpha > 0$  
b) $\sin\alpha > 0$, $\cos\alpha < 0$, $\operatorname{tg}\alpha < 0$  
c) $\sin\alpha < 0$, $\cos\alpha < 0$, $\operatorname{tg}\alpha > 0$  
d) $\sin\alpha < 0$, $\cos\alpha > 0$, $\operatorname{tg}\alpha < 0$

**Rozwiązanie krok po kroku:**  
Z definicji funkcji trygonometrycznych dla punktu $P(x, y)$ leżącego na końcowym ramieniu kąta $\alpha$ oraz promienia wodzącego $c = \sqrt{x^2+y^2} > 0$:
- $\operatorname{sgn}(\sin\alpha) = \operatorname{sgn}(y)$
- $\operatorname{sgn}(\cos\alpha) = \operatorname{sgn}(x)$
- $\operatorname{sgn}(\operatorname{tg}\alpha) = \operatorname{sgn}\left(\frac{y}{x}\right)$

a) Przedział $\alpha \in \left(0; \frac{\pi}{2}\right)$ to **I ćwiartka** układu współrzędnych ($x > 0, y > 0$).  
Wszystkie funkcje przyjmują wartości dodatnie:
$$\sin\alpha > 0 (+), \qquad \cos\alpha > 0 (+), \qquad \operatorname{tg}\alpha > 0 (+)$$

b) Przybliżone wartości to $\frac{\pi}{2} \approx 1{,}57$ oraz $\pi \approx 3{,}14$.  
Ponieważ $1{,}57 < 2 < 3 < 3{,}14$, to przedział $(2; 3) \subset \left(\frac{\pi}{2}; \pi\right)$, co oznacza, że kąt $\alpha$ leży w **II ćwiartce** układu współrzędnych ($x < 0, y > 0$).  
Dlatego:
$$\sin\alpha = \frac{y}{c} > 0 (+), \qquad \cos\alpha = \frac{x}{c} < 0 (-), \qquad \operatorname{tg}\alpha = \frac{y}{x} < 0 (-)$$

c) Przedział $\alpha \in \left(\pi; \frac{3}{2}\pi\right)$ to **III ćwiartka** układu współrzędnych ($x < 0, y < 0$).  
Mamy:
$$\sin\alpha < 0 (-), \qquad \cos\alpha < 0 (-), \qquad \operatorname{tg}\alpha > 0 (+)$$

d) Przybliżone wartości to $\frac{3\pi}{2} \approx 4{,}71$ oraz $2\pi \approx 6{,}28$.  
Ponieważ $4{,}71 < 5 < 6 < 6{,}28$, to $(5; 6) \subset \left(\frac{3\pi}{2}; 2\pi\right)$, czyli kąt $\alpha$ leży w **IV ćwiartce** układu współrzędnych ($x > 0, y < 0$).  
Stąd:
$$\sin\alpha < 0 (-), \qquad \cos\alpha > 0 (+), \qquad \operatorname{tg}\alpha < 0 (-)$$

---

### Zadanie 10.7 [R]

**Treść zadania:**  
Sprowadź podane wyrażenie do najprostszej postaci:  
a) $\operatorname{tg}\alpha \cos\alpha$  
b) $(1 + \sin\beta)(1 - \sin\beta)$  
c) $\cos^2 x \cdot \sin x + \sin^3 x$  
d) $\frac{\sin\beta}{\sin(90^\circ - \beta)}$  
e) $\frac{1 + \operatorname{tg} x}{\sin x + \cos x}$  
f) $\sin^4 y + \sin^2 y \cos^2 y + \cos^2 y$  
g) $\frac{1 - 2\cos^2 x}{2\sin^2 x - 1}$  
h) $\frac{\sin^2 x}{1 - \cos x}$

**Odpowiedź:**  
a) $\sin\alpha$  
b) $\cos^2\beta$  
c) $\sin x$  
d) $\operatorname{tg}\beta$  
e) $\frac{1}{\cos x}$  
f) $1$  
g) $1$  
h) $1 + \cos x$

**Rozwiązanie krok po kroku:**  
a) Korzystamy ze wzoru $\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha}$:
$$\operatorname{tg}\alpha \cos\alpha = \frac{\sin\alpha}{\cos\alpha} \cdot \cos\alpha = \sin\alpha$$

b) Korzystamy ze wzoru skróconego mnożenia $(a+b)(a-b) = a^2 - b^2$ oraz jedynki trygonometrycznej:
$$(1 + \sin\beta)(1 - \sin\beta) = 1 - \sin^2\beta = \cos^2\beta$$

c) Wyłączamy $\sin x$ przed nawias:
$$\cos^2 x \sin x + \sin^3 x = \sin x(\cos^2 x + \sin^2 x) = \sin x \cdot 1 = \sin x$$

d) Korzystamy ze wzoru redukcyjnego $\sin(90^\circ - \beta) = \cos\beta$:
$$\frac{\sin\beta}{\sin(90^\circ - \beta)} = \frac{\sin\beta}{\cos\beta} = \operatorname{tg}\beta$$

e) Przekształcamy licznik do postaci wspólnego mianownika:
$$1 + \operatorname{tg} x = 1 + \frac{\sin x}{\cos x} = \frac{\cos x + \sin x}{\cos x}$$
Dzielimy przez mianownik:
$$\frac{1 + \operatorname{tg} x}{\sin x + \cos x} = \frac{\frac{\cos x + \sin x}{\cos x}}{\sin x + \cos x} = \frac{\cos x + \sin x}{\cos x} \cdot \frac{1}{\sin x + \cos x} = \frac{1}{\cos x}$$

f) Wyłączamy $\sin^2 y$ przed nawias z pierwszych dwóch składników:
$$\sin^4 y + \sin^2 y \cos^2 y + \cos^2 y = \sin^2 y(\sin^2 y + \cos^2 y) + \cos^2 y = \sin^2 y \cdot 1 + \cos^2 y = \sin^2 y + \cos^2 y = 1$$

g) Korzystamy z jedynki trygonometrycznej $1 = \sin^2 x + \cos^2 x$:
W liczniku:
$$1 - 2\cos^2 x = (\sin^2 x + \cos^2 x) - 2\cos^2 x = \sin^2 x - \cos^2 x$$
W mianowniku:
$$2\sin^2 x - 1 = 2\sin^2 x - (\sin^2 x + \cos^2 x) = \sin^2 x - \cos^2 x$$
Zatem:
$$\frac{1 - 2\cos^2 x}{2\sin^2 x - 1} = \frac{\sin^2 x - \cos^2 x}{\sin^2 x - \cos^2 x} = 1$$

h) Z jedynki trygonometrycznej $\sin^2 x = 1 - \cos^2 x = (1 - \cos x)(1 + \cos x)$:
$$\frac{\sin^2 x}{1 - \cos x} = \frac{1 - \cos^2 x}{1 - \cos x} = \frac{(1 - \cos x)(1 + \cos x)}{1 - \cos x} = 1 + \cos x$$

---

### Zadanie 10.8 [R]

**Treść zadania:**  
Zapisz daną liczbę w prostszej postaci:  
a) $(\cos 111^\circ)^2 + (\sin 111^\circ)^2$  
b) $\cos 34^\circ - \sin 56^\circ$  
c) $\sin 55^\circ \cdot \cos 55^\circ \cdot \operatorname{tg} 55^\circ$  
d) $\frac{1 - \cos^2 77^\circ}{\cos^2 77^\circ}$

**Odpowiedź:**  
a) $1$  
b) $0$  
c) $\sin^2 55^\circ$  
d) $\operatorname{tg}^2 77^\circ$

**Rozwiązanie krok po kroku:**  
a) Z jedynki trygonometrycznej dla dowolnego kąta $\alpha$ zachodzi tożsamość:
$$\sin^2\alpha + \cos^2\alpha = 1$$
Dla $\alpha = 111^\circ$:
$$(\cos 111^\circ)^2 + (\sin 111^\circ)^2 = \cos^2 111^\circ + \sin^2 111^\circ = 1$$

b) Korzystamy ze wzoru na kofunkcję kąta dopełniającego $\sin(90^\circ - \alpha) = \cos\alpha$:
$$\sin 56^\circ = \cos(90^\circ - 56^\circ) = \cos 34^\circ$$
Zatem:
$$\cos 34^\circ - \sin 56^\circ = \cos 34^\circ - \cos 34^\circ = 0$$

c) Rozpisujemy tangens jako iloraz $\operatorname{tg} 55^\circ = \frac{\sin 55^\circ}{\cos 55^\circ}$:
$$\sin 55^\circ \cdot \cos 55^\circ \cdot \operatorname{tg} 55^\circ = \sin 55^\circ \cdot \cos 55^\circ \cdot \frac{\sin 55^\circ}{\cos 55^\circ} = \sin 55^\circ \cdot \sin 55^\circ = \sin^2 55^\circ$$

d) Z jedynki trygonometrycznej $1 - \cos^2 77^\circ = \sin^2 77^\circ$:
$$\frac{1 - \cos^2 77^\circ}{\cos^2 77^\circ} = \frac{\sin^2 77^\circ}{\cos^2 77^\circ} = \left(\frac{\sin 77^\circ}{\cos 77^\circ}\right)^2 = \operatorname{tg}^2 77^\circ$$

---

### Zadanie 10.9 [R]

**Treść zadania:**  
Uzasadnij, że dla każdego kąta ostrego $\alpha$ zachodzi równość:  
a) $(\sin\alpha + \cos\alpha)^2 + (\sin\alpha - \cos\alpha)^2 = 2$  
b) $(1 + \operatorname{tg}^2\alpha) \cdot \cos^2\alpha = 1$  
c) $\frac{\cos^2\alpha - 1}{\sin^2\alpha - 1} = \operatorname{tg}^2\alpha$  
d) $\frac{\operatorname{tg}\alpha}{1 + \operatorname{tg}^2\alpha} = \sin\alpha\cos\alpha$  
e) $\cos^4\alpha - \sin^4\alpha = \cos^2\alpha - \sin^2\alpha$  
f) $\frac{\sin\alpha}{1 + \cos\alpha} + \frac{1 + \cos\alpha}{\sin\alpha} = \frac{2}{\sin\alpha}$

**Odpowiedź:**  
Wszystkie podane równości są tożsamościami prawdziwymi dla każdego kąta ostrego $\alpha$.

**Rozwiązanie krok po kroku:**  
a) Rozwijamy oba kwadraty sumy i różnicy za pomocą wzorów skróconego mnożenia:
$$L = (\sin^2\alpha + 2\sin\alpha\cos\alpha + \cos^2\alpha) + (\sin^2\alpha - 2\sin\alpha\cos\alpha + \cos^2\alpha)$$
Wyrazy podwojonego iloczynu $2\sin\alpha\cos\alpha$ redukują się:
$$L = 2\sin^2\alpha + 2\cos^2\alpha = 2(\sin^2\alpha + \cos^2\alpha)$$
Ponieważ $\sin^2\alpha + \cos^2\alpha = 1$:
$$L = 2 \cdot 1 = 2 = P$$

b) Przekształcamy lewą stronę, korzystając z $\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha}$:
$$L = (1 + \operatorname{tg}^2\alpha)\cos^2\alpha = \cos^2\alpha + \operatorname{tg}^2\alpha \cdot \cos^2\alpha = \cos^2\alpha + \frac{\sin^2\alpha}{\cos^2\alpha} \cdot \cos^2\alpha = \cos^2\alpha + \sin^2\alpha = 1 = P$$

c) Korzystamy z jedynki trygonometrycznej: $\cos^2\alpha - 1 = -\sin^2\alpha$ oraz $\sin^2\alpha - 1 = -\cos^2\alpha$:
$$L = \frac{\cos^2\alpha - 1}{\sin^2\alpha - 1} = \frac{-\sin^2\alpha}{-\cos^2\alpha} = \frac{\sin^2\alpha}{\cos^2\alpha} = \left(\frac{\sin\alpha}{\cos\alpha}\right)^2 = \operatorname{tg}^2\alpha = P$$

d) Przekształcamy mianownik lewej strony:
$$1 + \operatorname{tg}^2\alpha = 1 + \frac{\sin^2\alpha}{\cos^2\alpha} = \frac{\cos^2\alpha + \sin^2\alpha}{\cos^2\alpha} = \frac{1}{\cos^2\alpha}$$
Podstawiamy do ułamka:
$$L = \frac{\operatorname{tg}\alpha}{1 + \operatorname{tg}^2\alpha} = \frac{\frac{\sin\alpha}{\cos\alpha}}{\frac{1}{\cos^2\alpha}} = \frac{\sin\alpha}{\cos\alpha} \cdot \cos^2\alpha = \sin\alpha\cos\alpha = P$$

e) Stosujemy wzór na różnicę kwadratów $a^2 - b^2 = (a-b)(a+b)$ dla $a = \cos^2\alpha$ i $b = \sin^2\alpha$:
$$L = \cos^4\alpha - \sin^4\alpha = (\cos^2\alpha)^2 - (\sin^2\alpha)^2 = (\cos^2\alpha - \sin^2\alpha)(\cos^2\alpha + \sin^2\alpha)$$
Ponieważ $\cos^2\alpha + \sin^2\alpha = 1$:
$$L = (\cos^2\alpha - \sin^2\alpha) \cdot 1 = \cos^2\alpha - \sin^2\alpha = P$$

f) Sprowadzamy lewą stronę do wspólnego mianownika $(1 + \cos\alpha)\sin\alpha$:
$$L = \frac{\sin\alpha \cdot \sin\alpha + (1 + \cos\alpha)(1 + \cos\alpha)}{(1 + \cos\alpha)\sin\alpha} = \frac{\sin^2\alpha + (1 + 2\cos\alpha + \cos^2\alpha)}{(1 + \cos\alpha)\sin\alpha}$$
Grupujemy $\sin^2\alpha + \cos^2\alpha = 1$:
$$L = \frac{(\sin^2\alpha + \cos^2\alpha) + 1 + 2\cos\alpha}{(1 + \cos\alpha)\sin\alpha} = \frac{1 + 1 + 2\cos\alpha}{(1 + \cos\alpha)\sin\alpha} = \frac{2 + 2\cos\alpha}{(1 + \cos\alpha)\sin\alpha}$$
Wyłączamy 2 przed nawias w liczniku i upraszczamy:
$$L = \frac{2(1 + \cos\alpha)}{(1 + \cos\alpha)\sin\alpha} = \frac{2}{\sin\alpha} = P$$

---

### Zadanie 10.10 [R]

**Treść zadania:**  
Oblicz wartości pozostałych funkcji trygonometrycznych kąta ostrego $\alpha$, tzn. tangens oraz sinus albo kosinus, wiedząc, że:  
a) [R] $\sin\alpha = 0{,}6$  
b) $\cos\alpha = \frac{\sqrt{2}}{3}$

**Odpowiedź:**  
a) $\cos\alpha = \frac{4}{5} = 0{,}8$, $\operatorname{tg}\alpha = \frac{3}{4} = 0{,}75$  
b) $\sin\alpha = \frac{\sqrt{7}}{3}$, $\operatorname{tg}\alpha = \frac{\sqrt{14}}{2}$

**Rozwiązanie krok po kroku:**  
Kąt $\alpha$ jest kątem ostrym, dlatego $\sin\alpha > 0$, $\cos\alpha > 0$ oraz $\operatorname{tg}\alpha > 0$.

a) $\sin\alpha = 0{,}6 = \frac{3}{5}$.  
- **I SPOSÓB (algebraiczny — z jedynki trygonometrycznej):**  
  $$\sin^2\alpha + \cos^2\alpha = 1 \implies (0{,}6)^2 + \cos^2\alpha = 1$$
  $$\cos^2\alpha = 1 - 0{,}36 = 0{,}64$$
  Ponieważ $\alpha$ jest ostry, $\cos\alpha > 0$:
  $$\cos\alpha = \sqrt{0{,}64} = 0{,}8 = \frac{4}{5}$$
  Obliczamy tangens:
  $$\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{0{,}6}{0{,}8} = \frac{3}{4} = 0{,}75$$

- **II SPOSÓB (geometryczny — z trójkąta prostokątnego):**  
  Sinus kąta ostrego $\alpha$ wynosi $\frac{3}{5}$, co odpowiada stosunkowi przyprostokątnej leżącej naprzeciw kąta ($b = 3$) do przeciwprostokątnej ($c = 5$).  
  Z twierdzenia Pitagorasa wyznaczamy długość drugiej przyprostokątnej $a$:
  $$a^2 + 3^2 = 5^2 \implies a^2 = 25 - 9 = 16 \implies a = 4$$
  Wówczas:
  $$\cos\alpha = \frac{a}{c} = \frac{4}{5} = 0{,}8, \qquad \operatorname{tg}\alpha = \frac{b}{a} = \frac{3}{4} = 0{,}75$$

b) $\cos\alpha = \frac{\sqrt{2}}{3}$.  
Z jedynki trygonometrycznej:
$$\sin^2\alpha + \left(\frac{\sqrt{2}}{3}\right)^2 = 1 \implies \sin^2\alpha + \frac{2}{9} = 1 \implies \sin^2\alpha = 1 - \frac{2}{9} = \frac{7}{9}$$
Ponieważ $\alpha$ jest kątem ostrym ($\sin\alpha > 0$):
$$\sin\alpha = \sqrt{\frac{7}{9}} = \frac{\sqrt{7}}{3}$$
Obliczamy tangens:
$$\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{\frac{\sqrt{7}}{3}}{\frac{\sqrt{2}}{3}} = \frac{\sqrt{7}}{\sqrt{2}} = \frac{\sqrt{7} \cdot \sqrt{2}}{2} = \frac{\sqrt{14}}{2}$$

### Zadanie 10.11 [W]

**Treść zadania:**  
Oblicz sinus i kosinus kąta ostrego $\alpha$, wiedząc, że:  
a) [W] $\operatorname{tg}\alpha = \frac{5}{12}$  
b) [W] $\operatorname{tg}\alpha = \sqrt{15}$

**Odpowiedź:**  
a) $\sin\alpha = \frac{5}{13}$, $\cos\alpha = \frac{12}{13}$  
b) $\sin\alpha = \frac{\sqrt{15}}{4}$, $\cos\alpha = \frac{1}{4}$

**Rozwiązanie krok po kroku:**  
Kąt $\alpha$ jest kątem ostrym, więc $\sin\alpha > 0$ oraz $\cos\alpha > 0$.

a) $\operatorname{tg}\alpha = \frac{5}{12}$.  
- **I SPOSÓB (geometryczny — z trójkąta prostokątnego):**  
  Tangens kąta ostrego w trójkącie prostokątnym to stosunek przyprostokątnej leżącej naprzeciw kąta ($b = 5$) do przyprostokątnej przyległej ($a = 12$).  
  Z twierdzenia Pitagorasa wyznaczamy długość przeciwprostokątnej $c$:
  $$c^2 = a^2 + b^2 = 12^2 + 5^2 = 144 + 25 = 169 \implies c = 13$$
  Z definicji sinusa i kosinusa:
  $$\sin\alpha = \frac{b}{c} = \frac{5}{13}, \qquad \cos\alpha = \frac{a}{c} = \frac{12}{13}$$

- **II SPOSÓB (algebraiczny — z układu równań):**  
  Z definicji $\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{5}{12} \implies \sin\alpha = \frac{5}{12}\cos\alpha$.  
  Wstawiamy do jedynki trygonometrycznej:
  $$\left(\frac{5}{12}\cos\alpha\right)^2 + \cos^2\alpha = 1 \implies \frac{25}{144}\cos^2\alpha + \cos^2\alpha = 1$$
  $$\frac{169}{144}\cos^2\alpha = 1 \implies \cos^2\alpha = \frac{144}{169}$$
  Ponieważ $\alpha$ jest kątem ostrym ($\cos\alpha > 0$):
  $$\cos\alpha = \sqrt{\frac{144}{169}} = \frac{12}{13}$$
  Wtedy:
  $$\sin\alpha = \frac{5}{12}\cos\alpha = \frac{5}{12} \cdot \frac{12}{13} = \frac{5}{13}$$

b) $\operatorname{tg}\alpha = \sqrt{15} = \frac{\sqrt{15}}{1}$.  
Budujemy trójkąt prostokątny o przyprostokątnych $b = \sqrt{15}$ oraz $a = 1$.  
Długość przeciwprostokątnej $c$ z twierdzenia Pitagorasa:
$$c^2 = (\sqrt{15})^2 + 1^2 = 15 + 1 = 16 \implies c = 4$$
Zatem:
$$\sin\alpha = \frac{b}{c} = \frac{\sqrt{15}}{4}, \qquad \cos\alpha = \frac{a}{c} = \frac{1}{4}$$

---

### Zadanie 10.12 [R]

**Treść zadania:**  
Dany jest kąt o mierze $\alpha$ taki, że $\sin\alpha = \frac{\sqrt{2}}{3}$ i $90^\circ < \alpha < 180^\circ$. Oblicz $\cos\alpha$ i $\operatorname{tg}\alpha$.

**Odpowiedź:**  
$\cos\alpha = -\frac{\sqrt{7}}{3}$, $\operatorname{tg}\alpha = -\frac{\sqrt{14}}{7}$

**Rozwiązanie krok po kroku:**  
Kąt $\alpha$ leży w przedziale $(90^\circ, 180^\circ)$, czyli w **II ćwiartce** układu współrzędnych.  
W II ćwiartce cosinus i tangens są liczbami ujemnymi:
$$\cos\alpha < 0, \qquad \operatorname{tg}\alpha < 0$$

Z jedynki trygonometrycznej:
$$\sin^2\alpha + \cos^2\alpha = 1 \implies \left(\frac{\sqrt{2}}{3}\right)^2 + \cos^2\alpha = 1$$
$$\frac{2}{9} + \cos^2\alpha = 1 \implies \cos^2\alpha = 1 - \frac{2}{9} = \frac{7}{9}$$
Ponieważ $\cos\alpha < 0$:
$$\cos\alpha = -\sqrt{\frac{7}{9}} = -\frac{\sqrt{7}}{3}$$

Obliczamy wartość tangensa:
$$\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{\frac{\sqrt{2}}{3}}{-\frac{\sqrt{7}}{3}} = -\frac{\sqrt{2}}{\sqrt{7}} = -\frac{\sqrt{2} \cdot \sqrt{7}}{7} = -\frac{\sqrt{14}}{7}$$

---

### Zadanie 10.13 [R]

**Treść zadania:**  
Prosta $k$ przechodzi przez punkt $P = (14, 18)$ i jest nachylona do osi $Ox$ pod kątem ostrym, którego sinus jest równy $\frac{24}{25}$. Znajdź równanie prostej $k$.

**Odpowiedź:**  
$y = \frac{24}{7}x - 30$

**Rozwiązanie krok po kroku:**  
Równanie kierunkowe prostej ma postać:
$$y = ax + b$$
gdzie współczynnik kierunkowy $a$ jest równy tangensowi kąta $\alpha$ nachylenia prostej do osi $Ox$:
$$a = \operatorname{tg}\alpha$$

Kąt $\alpha$ jest kątem ostrym, zatem $\cos\alpha > 0$ oraz $\operatorname{tg}\alpha > 0$.  
Mamy dany $\sin\alpha = \frac{24}{25}$. Z jedynki trygonometrycznej:
$$\cos^2\alpha = 1 - \sin^2\alpha = 1 - \left(\frac{24}{25}\right)^2 = 1 - \frac{576}{625} = \frac{49}{625}$$
Ponieważ kąt $\alpha$ jest ostry:
$$\cos\alpha = \sqrt{\frac{49}{625}} = \frac{7}{25}$$

Obliczamy współczynnik kierunkowy prostej $k$:
$$a = \operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{\frac{24}{25}}{\frac{7}{25}} = \frac{24}{25} \cdot \frac{25}{7} = \frac{24}{7}$$
Równanie prostej ma zatem postać:
$$y = \frac{24}{7}x + b$$

Punkt $P(14, 18)$ należy do prostej $k$, więc jego współrzędne spełniają to równanie:
$$18 = \frac{24}{7} \cdot 14 + b$$
$$18 = 24 \cdot 2 + b$$
$$18 = 48 + b \implies b = 18 - 48 = -30$$

Ostatecznie równanie prostej $k$ wynosi:
$$y = \frac{24}{7}x - 30$$

---

### Zadanie 10.14 [R]

**Treść zadania:**  
Oblicz:  
a) [R] $\sin\alpha$ i $\operatorname{tg}\alpha$, jeżeli $\cos\alpha = \frac{1}{7}$ i $\alpha \in \left(\frac{3}{2}\pi; 2\pi\right)$;  
b) $\sin\alpha$ i $\cos\alpha$, jeżeli $\operatorname{tg}\alpha = -2$ i $\alpha \in \left(\frac{1}{2}\pi; \pi\right)$.

**Odpowiedź:**  
a) $\sin\alpha = -\frac{4\sqrt{3}}{7}$, $\operatorname{tg}\alpha = -4\sqrt{3}$  
b) $\sin\alpha = \frac{2\sqrt{5}}{5}$, $\cos\alpha = -\frac{\sqrt{5}}{5}$

**Rozwiązanie krok po kroku:**  
a) Kąt $\alpha \in \left(\frac{3}{2}\pi; 2\pi\right)$ leży w **IV ćwiartce** układu współrzędnych.  
W IV ćwiartce sinus i tangens są ujemne:
$$\sin\alpha < 0, \qquad \operatorname{tg}\alpha < 0$$
Z jedynki trygonometrycznej:
$$\sin^2\alpha = 1 - \cos^2\alpha = 1 - \left(\frac{1}{7}\right)^2 = 1 - \frac{1}{49} = \frac{48}{49}$$
Ponieważ $\sin\alpha < 0$:
$$\sin\alpha = -\sqrt{\frac{48}{49}} = -\frac{\sqrt{16 \cdot 3}}{7} = -\frac{4\sqrt{3}}{7}$$
Obliczamy tangens:
$$\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{-\frac{4\sqrt{3}}{7}}{\frac{1}{7}} = -4\sqrt{3}$$

b) Kąt $\alpha \in \left(\frac{1}{2}\pi; \pi\right)$ leży w **II ćwiartce** układu współrzędnych.  
W II ćwiartce:
$$\sin\alpha > 0, \qquad \cos\alpha < 0$$
Z definicji tangensa:
$$\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha} = -2 \implies \sin\alpha = -2\cos\alpha$$
Podstawiamy do jedynki trygonometrycznej:
$$(-2\cos\alpha)^2 + \cos^2\alpha = 1 \implies 4\cos^2\alpha + \cos^2\alpha = 1 \implies 5\cos^2\alpha = 1 \implies \cos^2\alpha = \frac{1}{5}$$
Ponieważ $\cos\alpha < 0$:
$$\cos\alpha = -\frac{1}{\sqrt{5}} = -\frac{\sqrt{5}}{5}$$
Wtedy:
$$\sin\alpha = -2\cos\alpha = -2 \cdot \left(-\frac{\sqrt{5}}{5}\right) = \frac{2\sqrt{5}}{5}$$

---

### Zadanie 10.15 [R]

**Treść zadania:**  
Analizując wykresy odpowiednich funkcji trygonometrycznych, określ znak liczby:  
a) $\cos 40^\circ - \cos 50^\circ$  
b) $\sin 100^\circ - \sin 200^\circ$  
c) $\operatorname{tg} 2 + \cos 3$  
d) $\operatorname{tg} 1 + \cos\pi$

**Odpowiedź:**  
a) liczba dodatnia ($> 0$)  
b) liczba dodatnia ($> 0$)  
c) liczba ujemna ($< 0$)  
d) liczba dodatnia ($> 0$)

**Rozwiązanie krok po kroku:**  
a) Rozważamy wykres funkcji $f(x) = \cos x$.  
W przedziale $\langle 0^\circ, 180^\circ \rangle$ funkcja cosinus jest ściśle malejąca.  
Ponieważ $40^\circ < 50^\circ$, to:
$$\cos 40^\circ > \cos 50^\circ \implies \cos 40^\circ - \cos 50^\circ > 0$$
Zatem dana liczba jest **dodatnia**.

b) Rozważamy wykres funkcji $f(x) = \sin x$.  
- Kąt $100^\circ \in (0^\circ, 180^\circ)$ (II ćwiartka), więc $\sin 100^\circ > 0$.  
- Kąt $200^\circ \in (180^\circ, 360^\circ)$ (III ćwiartka), więc $\sin 200^\circ < 0$.  
Różnica liczby dodatniej i ujemnej jest dodatnia:
$$\sin 100^\circ - \sin 200^\circ > 0$$
Zatem dana liczba jest **dodatnia**.

c) Argumenty podane są w radianach. Znamy przybliżenia $\frac{\pi}{2} \approx 1{,}57$ oraz $\pi \approx 3{,}14$.  
- Argument $2 \in \left(\frac{\pi}{2}, \pi\right)$ (II ćwiartka), w której funkcja tangens przyjmuje wartości ujemne: $\operatorname{tg} 2 < 0$.  
- Argument $3 \in \left(\frac{\pi}{2}, \pi\right)$ (II ćwiartka), w której funkcja cosinus przyjmuje wartości ujemne: $\cos 3 < 0$.  
Suma dwóch liczb ujemnych jest liczbą ujemną:
$$\operatorname{tg} 2 + \cos 3 < 0$$
Zatem dana liczba jest **ujemna**.

d) Argument 1 jest w radianach. Ponieważ $\frac{\pi}{4} \approx 0{,}785$ oraz $\frac{\pi}{2} \approx 1{,}57$, to $1 \in \left(\frac{\pi}{4}, \frac{\pi}{2}\right)$.  
W przedziale $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ funkcja $f(x) = \operatorname{tg} x$ jest ściśle rosnąca, więc:
$$\operatorname{tg} 1 > \operatorname{tg}\frac{\pi}{4} = 1$$
Znamy dokładną wartość $\cos\pi = -1$.  
Wobec tego:
$$\operatorname{tg} 1 + \cos\pi > 1 + (-1) = 0$$
Zatem dana liczba jest **dodatnia**.

---

### Zadanie 10.16 [R]

**Treść zadania:**  
Określ zbiór wartości funkcji $f: D \to \mathbb{R}$ i naszkicuj jej wykres, jeżeli:  
a) $D = [-\pi; \pi]$, $f(x) = \cos x - 1$;  
b) $D = [-\pi; \pi]$, $f(x) = \sin\left(x - \frac{\pi}{4}\right)$;  
c) $D = [-\pi; \pi] \setminus \left\{-\frac{\pi}{2}, \frac{\pi}{2}\right\}$, $f(x) = \cos x \cdot \sqrt{1 + \operatorname{tg}^2 x}$.

**Odpowiedź:**  
a) Zbiór wartości: $[-2; 0]$  
b) Zbiór wartości: $[-1; 1]$  
c) Zbiór wartości: $\{-1, 1\}$

**Rozwiązanie krok po kroku:**  
a) Wykres funkcji $f(x) = \cos x - 1$ w przedziale $[-\pi; \pi]$ otrzymujemy przez przesunięcie wykresu podstawowej funkcji $g(x) = \cos x$ wzdłuż osi $Oy$ o 1 jednostkę w dół (o wektor $\vec{v} = [0, -1]$).  
Dla $x \in [-\pi; \pi]$ funkcja cosinus przyjmuje wszystkie wartości od $-1$ do $1$:
$$-1 \le \cos x \le 1$$
Odejmując 1 od wszystkich stron nierówności:
$$-2 \le \cos x - 1 \le 0$$
Zatem zbiór wartości to:
$$ZW_f = [-2; 0]$$
*Punkty charakterystyczne wykresu:*  
$(-\pi, -2)$, $\left(-\frac{\pi}{2}, -1\right)$, $(0, 0)$, $\left(\frac{\pi}{2}, -1\right)$, $(\pi, -2)$.

b) Wykres funkcji $f(x) = \sin\left(x - \frac{\pi}{4}\right)$ w przedziale $[-\pi; \pi]$ otrzymujemy przez przesunięcie wykresu funkcji $g(x) = \sin x$ o wektor $\vec{v} = \left[\frac{\pi}{4}, 0\right]$ (o $\frac{\pi}{4}$ w prawo).  
Gdy $x$ przebiega przedział $[-\pi; \pi]$, to argument $t = x - \frac{\pi}{4}$ przebiega przedział:
$$t \in \left[-\pi - \frac{\pi}{4}; \pi - \frac{\pi}{4}\right] = \left[-\frac{5\pi}{4}; \frac{3\pi}{4}\right]$$
Długość tego przedziału wynosi $\frac{3\pi}{4} - \left(-\frac{5\pi}{4}\right) = 2\pi$, co odpowiada pełnemu okresowi funkcji sinus. Funkcja osiąga w tym przedziale zarówno wartość minimalną $-1$ (dla $t = -\frac{\pi}{2} \iff x = -\frac{\pi}{4}$), jak i maksymalną $1$ (dla $t = \frac{\pi}{2} \iff x = \frac{3\pi}{4}$).  
Zatem zbiór wartości wynosi:
$$ZW_f = [-1; 1]$$
*Wartości na krańcach przedziału:*  
$f(-\pi) = \sin\left(-\frac{5\pi}{4}\right) = \frac{\sqrt{2}}{2}$, $f(\pi) = \sin\left(\frac{3\pi}{4}\right) = \frac{\sqrt{2}}{2}$, miejsce zerowe $x = \frac{\pi}{4}$.

c) Przekształcamy wyrażenie pod pierwiastkiem za pomocą definicji tangensa:
$$1 + \operatorname{tg}^2 x = 1 + \frac{\sin^2 x}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x}$$
Stąd:
$$\sqrt{1 + \operatorname{tg}^2 x} = \sqrt{\frac{1}{\cos^2 x}} = \frac{1}{|\cos x|}$$
Wzór funkcji dla każdego $x \in D$ upraszcza się do:
$$f(x) = \cos x \cdot \frac{1}{|\cos x|} = \frac{\cos x}{|\cos x|}$$
Korzystamy z definicji wartości bezwzględnej:
- Gdy $\cos x > 0$, czyli dla $x \in \left(-\frac{\pi}{2}; \frac{\pi}{2}\right)$, zachodzi $|\cos x| = \cos x$, więc:
  $$f(x) = \frac{\cos x}{\cos x} = 1$$
- Gdy $\cos x < 0$, czyli dla $x \in \left[-\pi; -\frac{\pi}{2}\right) \cup \left(\frac{\pi}{2}; \pi\right]$, zachodzi $|\cos x| = -\cos x$, więc:
  $$f(x) = \frac{\cos x}{-\cos x} = -1$$
Funkcja przyjmuje wyłącznie dwie wartości: $1$ oraz $-1$.  
Zatem zbiór wartości jest zbiorem dwuelementowym:
$$ZW_f = \{-1, 1\}$$
*Opis wykresu:* Wykres składa się z trzech poziomych odcinków z „otwartymi kółkami” w punktach $x = -\frac{\pi}{2}$ oraz $x = \frac{\pi}{2}$ (poza dziedziną):
1. Odcinek na wysokości $y = -1$ dla $x \in \left[-\pi, -\frac{\pi}{2}\right)$ (domknięty w $-\pi$, otwarty w $-\frac{\pi}{2}$).
2. Odcinek na wysokości $y = 1$ dla $x \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ (obustronnie otwarty).
3. Odcinek na wysokości $y = -1$ dla $x \in \left(\frac{\pi}{2}, \pi\right]$ (otwarty w $\frac{\pi}{2}$, domknięty w $\pi$).

---

### Zadanie 10.17 [R]

**Treść zadania:**  
Oblicz:  
a) [R] $\sin 15^\circ$  
b) $\cos 105^\circ$  
c) $\operatorname{tg} 105^\circ$

**Odpowiedź:**  
a) $\frac{\sqrt{6} - \sqrt{2}}{4}$  
b) $-\frac{\sqrt{6} - \sqrt{2}}{4} = \frac{\sqrt{2} - \sqrt{6}}{4}$  
c) $-(2 + \sqrt{3}) = -2 - \sqrt{3}$

**Rozwiązanie krok po kroku:**  
a) Zapisujemy kąt $15^\circ$ jako różnicę kątów szczególnych $45^\circ - 30^\circ$ i stosujemy wzór na sinus różnicy:
$$\sin(x - y) = \sin x \cos y - \cos x \sin y$$
$$\sin 15^\circ = \sin(45^\circ - 30^\circ) = \sin 45^\circ \cos 30^\circ - \cos 45^\circ \sin 30^\circ$$
Podstawiamy wartości z tabeli:
$$\sin 15^\circ = \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} - \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6}}{4} - \frac{\sqrt{2}}{4} = \frac{\sqrt{6} - \sqrt{2}}{4}$$

b) Kąt $105^\circ$ możemy zapisać jako sumę kątów szczególnych $60^\circ + 45^\circ$:
$$\cos(x + y) = \cos x \cos y - \sin x \sin y$$
$$\cos 105^\circ = \cos(60^\circ + 45^\circ) = \cos 60^\circ \cos 45^\circ - \sin 60^\circ \sin 45^\circ$$
$$= \frac{1}{2} \cdot \frac{\sqrt{2}}{2} - \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{2}}{2} = \frac{\sqrt{2} - \sqrt{6}}{4} = -\frac{\sqrt{6} - \sqrt{2}}{4}$$
*(Alternatywnie ze wzoru redukcyjnego: $\cos 105^\circ = \cos(90^\circ + 15^\circ) = -\sin 15^\circ = -\frac{\sqrt{6}-\sqrt{2}}{4}$).*

c) Zapisujemy $105^\circ = 60^\circ + 45^\circ$ i stosujemy wzór na tangens sumy kątów:
$$\operatorname{tg}(x + y) = \frac{\operatorname{tg} x + \operatorname{tg} y}{1 - \operatorname{tg} x \operatorname{tg} y}$$
$$\operatorname{tg} 105^\circ = \operatorname{tg}(60^\circ + 45^\circ) = \frac{\operatorname{tg} 60^\circ + \operatorname{tg} 45^\circ}{1 - \operatorname{tg} 60^\circ \operatorname{tg} 45^\circ} = \frac{\sqrt{3} + 1}{1 - \sqrt{3} \cdot 1} = \frac{\sqrt{3} + 1}{1 - \sqrt{3}}$$
Usuwamy niewymierność z mianownika, mnożąc licznik i mianownik przez $1 + \sqrt{3}$:
$$= \frac{(\sqrt{3} + 1)(1 + \sqrt{3})}{(1 - \sqrt{3})(1 + \sqrt{3})} = \frac{(\sqrt{3} + 1)^2}{1^2 - (\sqrt{3})^2} = \frac{3 + 2\sqrt{3} + 1}{1 - 3} = \frac{4 + 2\sqrt{3}}{-2} = -(2 + \sqrt{3}) = -2 - \sqrt{3}$$

---

### Zadanie 10.18 [R]

**Treść zadania:**  
Uprość wyrażenie:  
a) [R] $\sin(4\pi + \alpha)$  
b) $\operatorname{tg}(\alpha - 3\pi)$  
c) $\sin(\pi - \alpha)$  
d) [R] $\cos(\pi + \alpha)$  
e) [R] $\operatorname{tg}(\pi - \alpha)$  
f) $\cos\left(\frac{3}{2}\pi + \alpha\right)$  
g) $\sin\left(\alpha - \frac{1}{2}\pi\right)$

**Odpowiedź:**  
a) $\sin\alpha$  
b) $\operatorname{tg}\alpha$  
c) $\sin\alpha$  
d) $-\cos\alpha$  
e) $-\operatorname{tg}\alpha$  
f) $\sin\alpha$  
g) $-\cos\alpha$

**Rozwiązanie krok po kroku:**  
a) Okres podstawowy funkcji sinus to $T = 2\pi$. Liczba $4\pi = 2 \cdot 2\pi$ jest całkowitą wielokrotnością okresu:
$$\sin(4\pi + \alpha) = \sin(\alpha + 2 \cdot 2\pi) = \sin\alpha$$

b) Okres podstawowy funkcji tangens wynosi $T = \pi$. Odejmując lub dodając całkowitą wielokrotność $\pi$, wartość funkcji nie zmienia się:
$$\operatorname{tg}(\alpha - 3\pi) = \operatorname{tg}(\alpha - 3\pi + 3\pi) = \operatorname{tg}\alpha$$
*(Alternatywnie ze wzoru na tangens różnicy: $\operatorname{tg}(\alpha - 3\pi) = \frac{\operatorname{tg}\alpha - \operatorname{tg} 3\pi}{1 + \operatorname{tg}\alpha \operatorname{tg} 3\pi} = \frac{\operatorname{tg}\alpha - 0}{1 + 0} = \operatorname{tg}\alpha$).*

c) Ze wzoru redukcyjnego dla kąta $\pi - \alpha$ (lub wzoru na sinus różnicy):
$$\sin(\pi - \alpha) = \sin\pi \cos\alpha - \cos\pi \sin\alpha = 0 \cdot \cos\alpha - (-1) \cdot \sin\alpha = \sin\alpha$$

d) Ze wzoru redukcyjnego dla kąta $\pi + \alpha$ (lub wzoru na cosinus sumy):
$$\cos(\pi + \alpha) = \cos\pi \cos\alpha - \sin\pi \sin\alpha = (-1) \cdot \cos\alpha - 0 \cdot \sin\alpha = -\cos\alpha$$

e) Ze wzoru redukcyjnego dla kąta $\pi - \alpha$ (lub wzoru na tangens różnicy):
$$\operatorname{tg}(\pi - \alpha) = \frac{\operatorname{tg}\pi - \operatorname{tg}\alpha}{1 + \operatorname{tg}\pi \operatorname{tg}\alpha} = \frac{0 - \operatorname{tg}\alpha}{1 + 0 \cdot \operatorname{tg}\alpha} = -\operatorname{tg}\alpha$$

f) Stosujemy wzór na cosinus sumy:
$$\cos\left(\frac{3}{2}\pi + \alpha\right) = \cos\left(\frac{3\pi}{2}\right)\cos\alpha - \sin\left(\frac{3\pi}{2}\right)\sin\alpha$$
Ponieważ $\cos\left(\frac{3\pi}{2}\right) = 0$ oraz $\sin\left(\frac{3\pi}{2}\right) = -1$:
$$= 0 \cdot \cos\alpha - (-1) \cdot \sin\alpha = \sin\alpha$$

g) Korzystamy z nieparzystości funkcji sinus $\sin(-t) = -\sin t$:
$$\sin\left(\alpha - \frac{1}{2}\pi\right) = -\sin\left(\frac{\pi}{2} - \alpha\right)$$
Następnie ze wzoru redukcyjnego $\sin\left(\frac{\pi}{2} - \alpha\right) = \cos\alpha$:
$$-\sin\left(\frac{\pi}{2} - \alpha\right) = -\cos\alpha$$

---

### Zadanie 10.19 [R]

**Treść zadania:**  
Oblicz:  
a) [R] $\cos 720^\circ$  
b) [R] $\sin 150^\circ$  
c) $\operatorname{tg}\frac{3}{4}\pi$  
d) $\operatorname{tg} 330^\circ$  
e) $\cos\frac{4}{3}\pi$  
f) $\sin(-120^\circ)$  
g) [R] $\cos(-1110^\circ)$  
h) [R] $\sin^2 10^\circ + \sin^2 80^\circ$

**Odpowiedź:**  
a) $1$  
b) $\frac{1}{2}$  
c) $-1$  
d) $-\frac{\sqrt{3}}{3}$  
e) $-\frac{1}{2}$  
f) $-\frac{\sqrt{3}}{2}$  
g) $\frac{\sqrt{3}}{2}$  
h) $1$

**Rozwiązanie krok po kroku:**  
a) Kąt $720^\circ = 2 \cdot 360^\circ$ jest wielokrotnością pełnego obrotu ($2\pi$):
$$\cos 720^\circ = \cos(2 \cdot 360^\circ + 0^\circ) = \cos 0^\circ = 1$$

b) Zapisujemy $150^\circ = 180^\circ - 30^\circ$ i stosujemy wzór redukcyjny:
$$\sin 150^\circ = \sin(180^\circ - 30^\circ) = \sin 30^\circ = \frac{1}{2}$$

c) Zapisujemy $\frac{3}{4}\pi = \pi - \frac{\pi}{4}$ i stosujemy wzór redukcyjny dla tangensa:
$$\operatorname{tg}\left(\frac{3}{4}\pi\right) = \operatorname{tg}\left(\pi - \frac{\pi}{4}\right) = -\operatorname{tg}\frac{\pi}{4} = -1$$

d) Zapisujemy $330^\circ = 360^\circ - 30^\circ$:
$$\operatorname{tg} 330^\circ = \operatorname{tg}(360^\circ - 30^\circ) = -\operatorname{tg} 30^\circ = -\frac{\sqrt{3}}{3}$$

e) Zapisujemy $\frac{4}{3}\pi = \pi + \frac{\pi}{3}$ i stosujemy wzór redukcyjny:
$$\cos\left(\frac{4}{3}\pi\right) = \cos\left(\pi + \frac{\pi}{3}\right) = -\cos\frac{\pi}{3} = -\frac{1}{2}$$

f) Korzystamy z nieparzystości funkcji sinus $\sin(-x) = -\sin x$, a następnie ze wzoru redukcyjnego:
$$\sin(-120^\circ) = -\sin 120^\circ = -\sin(180^\circ - 60^\circ) = -\sin 60^\circ = -\frac{\sqrt{3}}{2}$$

g) Korzystamy z parzystości funkcji cosinus $\cos(-x) = \cos x$ oraz okresowości $T = 360^\circ$:
$$1110^\circ = 3 \cdot 360^\circ + 30^\circ$$
Zatem:
$$\cos(-1110^\circ) = \cos(1110^\circ) = \cos(3 \cdot 360^\circ + 30^\circ) = \cos 30^\circ = \frac{\sqrt{3}}{2}$$

h) Korzystamy ze wzoru na kofunkcję kąta dopełniającego $\sin 80^\circ = \cos(90^\circ - 80^\circ) = \cos 10^\circ$:
$$\sin^2 10^\circ + \sin^2 80^\circ = \sin^2 10^\circ + \cos^2 10^\circ = 1$$

---

### Zadanie 10.20 [R]

**Treść zadania:**  
Oblicz:  
a) [R] $\cos 2x$ wiedząc, że $\cos x = \frac{1}{4}$;  
b) $\sin 2x$ wiedząc, że $\sin x = \frac{24}{25}$ i $x \in \left(\frac{1}{2}\pi; \pi\right)$;  
c) [R] $\operatorname{tg} 3x$ wiedząc, że $\operatorname{tg} x = 3$.

**Odpowiedź:**  
a) $-\frac{7}{8}$  
b) $-\frac{336}{625}$  
c) $\frac{9}{13}$

**Rozwiązanie krok po kroku:**  
a) Stosujemy wzór na cosinus podwojonego kąta zależny bezpośrednio od $\cos x$:
$$\cos 2x = 2\cos^2 x - 1$$
Podstawiamy $\cos x = \frac{1}{4}$:
$$\cos 2x = 2 \cdot \left(\frac{1}{4}\right)^2 - 1 = 2 \cdot \frac{1}{16} - 1 = \frac{1}{8} - 1 = -\frac{7}{8}$$

b) Kąt $x \in \left(\frac{\pi}{2}; \pi\right)$ (II ćwiartka), w której cosinus jest ujemny: $\cos x < 0$.  
Z jedynki trygonometrycznej:
$$\cos^2 x = 1 - \sin^2 x = 1 - \left(\frac{24}{25}\right)^2 = 1 - \frac{576}{625} = \frac{49}{625}$$
Ponieważ $\cos x < 0$:
$$\cos x = -\sqrt{\frac{49}{625}} = -\frac{7}{25}$$
Stosujemy wzór na sinus podwojonego kąta $\sin 2x = 2\sin x \cos x$:
$$\sin 2x = 2 \cdot \frac{24}{25} \cdot \left(-\frac{7}{25}\right) = -\frac{2 \cdot 24 \cdot 7}{625} = -\frac{336}{625}$$

c) Najpierw wyznaczamy $\operatorname{tg} 2x$ za pomocą wzoru na tangens podwojonego kąta:
$$\operatorname{tg} 2x = \frac{2\operatorname{tg} x}{1 - \operatorname{tg}^2 x} = \frac{2 \cdot 3}{1 - 3^2} = \frac{6}{1 - 9} = \frac{6}{-8} = -\frac{3}{4}$$
Następnie przedstawiamy $3x$ jako sumę $2x + x$ i stosujemy wzór na tangens sumy:
$$\operatorname{tg} 3x = \operatorname{tg}(2x + x) = \frac{\operatorname{tg} 2x + \operatorname{tg} x}{1 - \operatorname{tg} 2x \operatorname{tg} x}$$
Podstawiamy wartości $\operatorname{tg} 2x = -\frac{3}{4}$ oraz $\operatorname{tg} x = 3$:
$$\operatorname{tg} 3x = \frac{-\frac{3}{4} + 3}{1 - \left(-\frac{3}{4}\right) \cdot 3} = \frac{\frac{9}{4}}{1 + \frac{9}{4}} = \frac{\frac{9}{4}}{\frac{13}{4}} = \frac{9}{13}$$

### Zadanie 10.21

**Treść zadania:**  
Prosta $k$ jest nachylona do osi $Ox$ pod kątem, którego miara jest o $45^\circ$ większa od miary kąta nachylenia do osi $Ox$ prostej o równaniu $y = 2x + 4$. Oblicz współczynnik kierunkowy prostej $k$.

**Odpowiedź:**  
$-3$

**Rozwiązanie krok po kroku:**  
Niech:
- $\beta$ oznacza miarę kąta nachylenia do osi $Ox$ prostej o równaniu $y = 2x + 4$. Współczynnik kierunkowy tej prostej to $a_1 = 2$, stąd:
  $$\operatorname{tg}\beta = 2$$
- $\alpha$ oznacza miarę kąta nachylenia szukanej prostej $k$ do osi $Ox$. Z treści zadania:
  $$\alpha = \beta + 45^\circ$$
Współczynnik kierunkowy prostej $k$ jest równy $a_k = \operatorname{tg}\alpha$.  
Stosujemy wzór na tangens sumy kątów:
$$\operatorname{tg}\alpha = \operatorname{tg}(\beta + 45^\circ) = \frac{\operatorname{tg}\beta + \operatorname{tg} 45^\circ}{1 - \operatorname{tg}\beta \cdot \operatorname{tg} 45^\circ}$$
Wiedząc, że $\operatorname{tg} 45^\circ = 1$ oraz $\operatorname{tg}\beta = 2$, podstawiamy:
$$a_k = \frac{2 + 1}{1 - 2 \cdot 1} = \frac{3}{1 - 2} = \frac{3}{-1} = -3$$
Zatem współczynnik kierunkowy prostej $k$ wynosi $-3$.

---

### Zadanie 10.22 [R, W]

**Treść zadania:**  
Sprawdź, czy podane równości są tożsamościami trygonometrycznymi:  
a) $1 - \sin 2x = (\sin x - \cos x)^2$  
b) $\frac{1}{\cos x + \sin x} + \frac{1}{\cos x - \sin x} = \frac{2\cos x}{\cos 2x}$  
c) [W] $4\sin\left(x + \frac{\pi}{6}\right)\sin\left(x - \frac{\pi}{6}\right) = 3 - 4\cos^2 x$  
d) [R] $\cos x - \cos 3x = 4\sin^2 x \cos x$

**Odpowiedź:**  
Każda z podanych równości jest tożsamością trygonometryczną.

**Rozwiązanie krok po kroku:**  
a) Przekształcamy prawą stronę równości, korzystając ze wzoru skróconego mnożenia $(a-b)^2 = a^2 - 2ab + b^2$:
$$P = (\sin x - \cos x)^2 = \sin^2 x - 2\sin x \cos x + \cos^2 x$$
Grupujemy wyrazy:
$$P = (\sin^2 x + \cos^2 x) - 2\sin x \cos x$$
Korzystamy z jedynki trygonometrycznej $\sin^2 x + \cos^2 x = 1$ oraz ze wzoru na sinus podwojonego kąta $2\sin x \cos x = \sin 2x$:
$$P = 1 - \sin 2x = L$$
Równość zachodzi dla każdego $x \in \mathbb{R}$, więc jest tożsamością trygonometryczną.

b) Dziedzina tożsamości: $\cos x + \sin x \ne 0$, $\cos x - \sin x \ne 0$ oraz $\cos 2x \ne 0$.  
Sprowadzamy ułamki po lewej stronie do wspólnego mianownika:
$$L = \frac{1}{\cos x + \sin x} + \frac{1}{\cos x - \sin x} = \frac{(\cos x - \sin x) + (\cos x + \sin x)}{(\cos x + \sin x)(\cos x - \sin x)}$$
W liczniku redukujemy wyrazy przeciwne $-\sin x$ i $\sin x$:
$$(\cos x - \sin x) + (\cos x + \sin x) = 2\cos x$$
W mianowniku stosujemy wzór na różnicę kwadratów:
$$(\cos x + \sin x)(\cos x - \sin x) = \cos^2 x - \sin^2 x$$
Zauważmy, że ze wzoru na cosinus podwojonego kąta $\cos^2 x - \sin^2 x = \cos 2x$:
$$L = \frac{2\cos x}{\cos^2 x - \sin^2 x} = \frac{2\cos x}{\cos 2x} = P$$
Zatem równość jest tożsamością trygonometryczną.

c) Stosujemy wzory na sinus sumy i sinus różnicy dla kątów $x$ i $\frac{\pi}{6}$:
$$\sin\left(x + \frac{\pi}{6}\right) = \sin x \cos\frac{\pi}{6} + \cos x \sin\frac{\pi}{6} = \frac{\sqrt{3}}{2}\sin x + \frac{1}{2}\cos x$$
$$\sin\left(x - \frac{\pi}{6}\right) = \sin x \cos\frac{\pi}{6} - \cos x \sin\frac{\pi}{6} = \frac{\sqrt{3}}{2}\sin x - \frac{1}{2}\cos x$$
Mnożymy oba wyrażenia, stosując wzór na różnicę kwadratów $(a+b)(a-b) = a^2 - b^2$:
$$\sin\left(x + \frac{\pi}{6}\right)\sin\left(x - \frac{\pi}{6}\right) = \left(\frac{\sqrt{3}}{2}\sin x\right)^2 - \left(\frac{1}{2}\cos x\right)^2 = \frac{3}{4}\sin^2 x - \frac{1}{4}\cos^2 x$$
Mnożymy otrzymany wynik przez 4 (lewa strona):
$$L = 4\left(\frac{3}{4}\sin^2 x - \frac{1}{4}\cos^2 x\right) = 3\sin^2 x - \cos^2 x$$
Chcemy doprowadzić wyrażenie do postaci zależnej od $\cos^2 x$, więc stosujemy jedynkę trygonometryczną $\sin^2 x = 1 - \cos^2 x$:
$$L = 3(1 - \cos^2 x) - \cos^2 x = 3 - 3\cos^2 x - \cos^2 x = 3 - 4\cos^2 x = P$$
Zatem $L = P$, co oznacza, że równość jest tożsamością trygonometryczną dla każdego $x \in \mathbb{R}$.

d) Zapisujemy kąt $3x$ jako $2x + x$ oraz kąt $x$ jako $2x - x$:
$$\cos x = \cos(2x - x) = \cos 2x \cos x + \sin 2x \sin x$$
$$\cos 3x = \cos(2x + x) = \cos 2x \cos x - \sin 2x \sin x$$
Przekształcamy lewą stronę równości:
$$L = \cos x - \cos 3x = (\cos 2x \cos x + \sin 2x \sin x) - (\cos 2x \cos x - \sin 2x \sin x)$$
$$L = 2\sin 2x \sin x$$
Stosujemy wzór na sinus podwojonego kąta $\sin 2x = 2\sin x \cos x$:
$$L = 2(2\sin x \cos x)\sin x = 4\sin^2 x \cos x = P$$
Zatem $L = P$, co dowodzi, że równość jest tożsamością trygonometryczną dla każdego $x \in \mathbb{R}$.

---

### Zadanie 10.23 [R]

**Treść zadania:**  
Wyrażenie $\frac{\cos\alpha - \sqrt{3}\sin\alpha}{2}$ zapisz w postaci $\cos\beta$.

**Odpowiedź:**  
$\cos(60^\circ + \alpha)$ lub $\cos\left(\alpha + \frac{\pi}{3}\right)$

**Rozwiązanie krok po kroku:**  
Rozbijamy ułamek na różnicę dwóch składników:
$$\frac{\cos\alpha - \sqrt{3}\sin\alpha}{2} = \frac{1}{2}\cos\alpha - \frac{\sqrt{3}}{2}\sin\alpha$$
Zauważmy, że:
$$\frac{1}{2} = \cos 60^\circ = \cos\frac{\pi}{3}, \qquad \frac{\sqrt{3}}{2} = \sin 60^\circ = \sin\frac{\pi}{3}$$
Podstawiamy te wartości do wyrażenia:
$$\frac{1}{2}\cos\alpha - \frac{\sqrt{3}}{2}\sin\alpha = \cos 60^\circ \cos\alpha - \sin 60^\circ \sin\alpha$$
Korzystamy ze wzoru na cosinus sumy kątów $\cos(x+y) = \cos x \cos y - \sin x \sin y$:
$$\cos 60^\circ \cos\alpha - \sin 60^\circ \sin\alpha = \cos(60^\circ + \alpha)$$
W mierze łukowej możemy zapisać ten wynik równoważnie jako:
$$\cos\left(\alpha + \frac{\pi}{3}\right)$$

---

### Zadanie 10.24 [W]

**Treść zadania:**  
Rozwiąż równanie:  
a) $\sin x = 0$  
b) $\cos x = -1$  
c) $\operatorname{tg} x = 1$  
d) $\sin x = \frac{1}{2}$  
e) $\cos x = \frac{\sqrt{2}}{2}$  
f) $\sin x = -\frac{\sqrt{3}}{2}$  
g) $\cos x = -\frac{1}{2}$

**Odpowiedź:**  
a) $x = k\pi, \; k \in \mathbb{Z}$  
b) $x = \pi + 2k\pi, \; k \in \mathbb{Z}$  
c) $x = \frac{\pi}{4} + k\pi, \; k \in \mathbb{Z}$  
d) $x = \frac{\pi}{6} + 2k\pi \quad \lor \quad x = \frac{5\pi}{6} + 2k\pi, \; k \in \mathbb{Z}$  
e) $x = -\frac{\pi}{4} + 2k\pi \quad \lor \quad x = \frac{\pi}{4} + 2k\pi, \; k \in \mathbb{Z}$ (czyli $x = \pm\frac{\pi}{4} + 2k\pi$)  
f) $x = -\frac{\pi}{3} + 2k\pi \quad \lor \quad x = \frac{4\pi}{3} + 2k\pi, \; k \in \mathbb{Z}$  
g) $x = -\frac{2\pi}{3} + 2k\pi \quad \lor \quad x = \frac{2\pi}{3} + 2k\pi, \; k \in \mathbb{Z}$ (czyli $x = \pm\frac{2\pi}{3} + 2k\pi$)

**Rozwiązanie krok po kroku:**  
*(We wszystkich podpunktach $k \in \mathbb{Z}$ oznacza dowolną liczbę całkowitą).*

Reguły ogólne rozwiązywania podstawowych równań trygonometrycznych:
1. Dla $\sin x = a$ (gdzie $a \in [-1, 1]$): jeśli $p$ jest jednym z rozwiązań, to ogólne serie rozwiązań to:
   $$x = p + 2k\pi \quad \lor \quad x = \pi - p + 2k\pi$$
2. Dla $\cos x = a$ (gdzie $a \in [-1, 1]$): jeśli $p$ jest jednym z rozwiązań, to:
   $$x = p + 2k\pi \quad \lor \quad x = -p + 2k\pi \iff x = \pm p + 2k\pi$$
3. Dla $\operatorname{tg} x = a$: jeśli $p$ jest rozwiązaniem w przedziale $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, to z okresowości tangensa:
   $$x = p + k\pi$$

a) $\sin x = 0$: Miejscami zerowymi funkcji sinus są całkowite wielokrotności liczby $\pi$:
$$x = k\pi, \quad k \in \mathbb{Z}$$

b) $\cos x = -1$: Funkcja cosinus osiąga wartość $-1$ dla kąta $\pi$ i powtarza się co okres podstawowy $2\pi$:
$$x = \pi + 2k\pi, \quad k \in \mathbb{Z}$$

c) $\operatorname{tg} x = 1$: Rozwiązaniem w przedziale $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ jest $x = \frac{\pi}{4}$. Okres funkcji tangens wynosi $\pi$:
$$x = \frac{\pi}{4} + k\pi, \quad k \in \mathbb{Z}$$

d) $\sin x = \frac{1}{2}$:  
Rozwiązaniem szczególnym z I ćwiartki jest $p = \frac{\pi}{6}$.  
Drugie rozwiązanie w przedziale $[0, 2\pi]$ to $\pi - \frac{\pi}{6} = \frac{5\pi}{6}$.  
Zatem:
$$x = \frac{\pi}{6} + 2k\pi \quad \lor \quad x = \frac{5\pi}{6} + 2k\pi, \quad k \in \mathbb{Z}$$

e) $\cos x = \frac{\sqrt{2}}{2}$:  
Rozwiązaniem szczególnym z I ćwiartki jest $p = \frac{\pi}{4}$.  
Z parzystości funkcji cosinus drugie rozwiązanie to $-p = -\frac{\pi}{4}$.  
Zatem:
$$x = \frac{\pi}{4} + 2k\pi \quad \lor \quad x = -\frac{\pi}{4} + 2k\pi \iff x = \pm\frac{\pi}{4} + 2k\pi, \quad k \in \mathbb{Z}$$

f) $\sin x = -\frac{\sqrt{3}}{2}$:  
Wartość $\frac{\sqrt{3}}{2}$ sinus przyjmuje dla kąta $\frac{\pi}{3}$, stąd ze wzoru $\sin(-t) = -\sin t$ jednym z rozwiązań jest $p = -\frac{\pi}{3}$.  
Druga seria wynika ze wzoru $\pi - p$: $\pi - \left(-\frac{\pi}{3}\right) = \frac{4\pi}{3}$.  
Zatem:
$$x = -\frac{\pi}{3} + 2k\pi \quad \lor \quad x = \frac{4\pi}{3} + 2k\pi, \quad k \in \mathbb{Z}$$

g) $\cos x = -\frac{1}{2}$:  
Wartość $\frac{1}{2}$ cosinus przyjmuje dla $\frac{\pi}{3}$. W II ćwiartce cosinus jest ujemny dla kąta $\pi - \frac{\pi}{3} = \frac{2\pi}{3}$.  
Z parzystości:
$$x = \frac{2\pi}{3} + 2k\pi \quad \lor \quad x = -\frac{2\pi}{3} + 2k\pi \iff x = \pm\frac{2\pi}{3} + 2k\pi, \quad k \in \mathbb{Z}$$

---

### Zadanie 10.25 [R]

**Treść zadania:**  
Rozwiąż równanie:  
a) [R] $\sin 5x = 1$  
b) $\operatorname{tg}\left(3x - \frac{\pi}{3}\right) = \sqrt{3}$  
c) [R] $\operatorname{tg} 3x = 1$ w zbiorze $(0; \pi)$  
d) $\cos\left(2x + \frac{\pi}{3}\right) = 1$ w zbiorze $[0; 2\pi]$

**Odpowiedź:**  
a) $x = \frac{\pi}{10} + \frac{2k\pi}{5}, \; k \in \mathbb{Z}$  
b) $x = \frac{2\pi}{9} + \frac{k\pi}{3}, \; k \in \mathbb{Z}$  
c) $x = \frac{\pi}{12} \quad \lor \quad x = \frac{5\pi}{12} \quad \lor \quad x = \frac{3\pi}{4}$  
d) $x = \frac{5\pi}{6} \quad \lor \quad x = \frac{11\pi}{6}$

**Rozwiązanie krok po kroku:**  
a) Funkcja sinus przyjmuje wartość $1$ dla argumentu równego $\frac{\pi}{2} + 2k\pi$:
$$5x = \frac{\pi}{2} + 2k\pi, \quad k \in \mathbb{Z}$$
Dzielimy obie strony równania przez 5:
$$x = \frac{\pi}{10} + \frac{2k\pi}{5}, \quad k \in \mathbb{Z}$$

b) Funkcja tangens przyjmuje wartość $\sqrt{3}$ dla argumentu $\frac{\pi}{3} + k\pi$:
$$3x - \frac{\pi}{3} = \frac{\pi}{3} + k\pi, \quad k \in \mathbb{Z}$$
Dodajemy $\frac{\pi}{3}$ do obu stron:
$$3x = \frac{2\pi}{3} + k\pi$$
Dzielimy przez 3:
$$x = \frac{2\pi}{9} + \frac{k\pi}{3}, \quad k \in \mathbb{Z}$$

c) Szukamy rozwiązań równania $\operatorname{tg} 3x = 1$ w przedziale $(0; \pi)$.  
Dziedzina: $3x \ne \frac{\pi}{2} + k\pi \iff x \ne \frac{\pi}{6} + \frac{k\pi}{3}$.  
Rozwiązanie ogólne równania:
$$3x = \frac{\pi}{4} + k\pi \implies x = \frac{\pi}{12} + \frac{k\pi}{3}, \quad k \in \mathbb{Z}$$
Szukamy wartości $k \in \mathbb{Z}$, dla których $x \in (0; \pi)$:
$$0 < \frac{\pi}{12} + \frac{k\pi}{3} < \pi$$
Dzielimy przez $\pi$:
$$0 < \frac{1}{12} + \frac{k}{3} < 1$$
Odejmujemy $\frac{1}{12}$:
$$-\frac{1}{12} < \frac{k}{3} < \frac{11}{12}$$
Mnożymy przez 3:
$$-\frac{1}{4} < k < \frac{11}{4} = 2{,}75$$
Ponieważ $k \in \mathbb{Z}$, otrzymujemy $k \in \{0, 1, 2\}$.  
Wyznaczamy odpowiadające wartości $x$:
- Dla $k = 0$:
  $$x = \frac{\pi}{12}$$
- Dla $k = 1$:
  $$x = \frac{\pi}{12} + \frac{\pi}{3} = \frac{\pi + 4\pi}{12} = \frac{5\pi}{12}$$
- Dla $k = 2$:
  $$x = \frac{\pi}{12} + \frac{2\pi}{3} = \frac{\pi + 8\pi}{12} = \frac{9\pi}{12} = \frac{3\pi}{4}$$
Wszystkie znalezione liczby należą do przedziału $(0; \pi)$ i spełniają założenia dziedziny.  
Zatem rozwiązania to: $x \in \left\{\frac{\pi}{12}, \frac{5\pi}{12}, \frac{3\pi}{4}\right\}$.

d) Szukamy rozwiązań równania $\cos\left(2x + \frac{\pi}{3}\right) = 1$ w przedziale $[0; 2\pi]$.  
Funkcja cosinus osiąga wartość $1$ dla całkowitych wielokrotności $2\pi$:
$$2x + \frac{\pi}{3} = 2k\pi, \quad k \in \mathbb{Z}$$
Odejmujemy $\frac{\pi}{3}$:
$$2x = -\frac{\pi}{3} + 2k\pi$$
Dzielimy przez 2:
$$x = -\frac{\pi}{6} + k\pi, \quad k \in \mathbb{Z}$$
Wyznaczamy wartości $k$, dla których $x \in [0; 2\pi]$:
$$0 \le -\frac{\pi}{6} + k\pi \le 2\pi$$
Dzielimy przez $\pi$:
$$0 \le -\frac{1}{6} + k \le 2 \implies \frac{1}{6} \le k \le 2\frac{1}{6}$$
Ponieważ $k \in \mathbb{Z}$, możliwe wartości to $k = 1$ oraz $k = 2$:
- Dla $k = 1$:
  $$x = -\frac{\pi}{6} + \pi = \frac{5\pi}{6} \in [0; 2\pi]$$
- Dla $k = 2$:
  $$x = -\frac{\pi}{6} + 2\pi = \frac{11\pi}{6} \in [0; 2\pi]$$
Zatem rozwiązania to: $x = \frac{5\pi}{6}$ oraz $x = \frac{11\pi}{6}$.

---

### Zadanie 10.26 [R, W]

**Treść zadania:**  
Rozwiąż równanie:  
a) [R] $2\sin^2 x + \sin x - 1 = 0$  
b) [R] $\sin^2 x - 3\cos x - 3 = 0$  
c) [W] $\operatorname{tg}^4 x - 4\operatorname{tg}^2 x + 3 = 0$

**Odpowiedź:**  
a) $x = -\frac{\pi}{2} + 2k\pi \quad \lor \quad x = \frac{\pi}{6} + 2k\pi \quad \lor \quad x = \frac{5\pi}{6} + 2k\pi, \; k \in \mathbb{Z}$  
b) $x = \pi + 2k\pi, \; k \in \mathbb{Z}$  
c) $x = \pm\frac{\pi}{4} + k\pi \quad \lor \quad x = \pm\frac{\pi}{3} + k\pi, \; k \in \mathbb{Z}$

**Rozwiązanie krok po kroku:**  
a) Wprowadzamy zmienną pomocniczą $t = \sin x$, gdzie $t \in [-1; 1]$.  
Równanie przyjmuje postać równania kwadratowego:
$$2t^2 + t - 1 = 0$$
Obliczamy wyróżnik $\Delta$ i pierwiastki:
$$\Delta = 1^2 - 4 \cdot 2 \cdot (-1) = 1 + 8 = 9, \qquad \sqrt{\Delta} = 3$$
$$t_1 = \frac{-1 - 3}{4} = -1, \qquad t_2 = \frac{-1 + 3}{4} = \frac{2}{4} = \frac{1}{2}$$
Oba rozwiązania należą do przedziału $[-1; 1]$. Wracamy do podstawienia:
1. $\sin x = -1$:
   $$x = -\frac{\pi}{2} + 2k\pi, \quad k \in \mathbb{Z}$$
2. $\sin x = \frac{1}{2}$:
   $$x = \frac{\pi}{6} + 2k\pi \quad \lor \quad x = \frac{5\pi}{6} + 2k\pi, \quad k \in \mathbb{Z}$$
Zbiór rozwiązań to suma powyższych serii.

b) Korzystamy z jedynki trygonometrycznej, aby zapisać równanie wyłącznie za pomocą $\cos x$:
$$\sin^2 x = 1 - \cos^2 x$$
Wstawiamy do równania:
$$(1 - \cos^2 x) - 3\cos x - 3 = 0$$
$$-\cos^2 x - 3\cos x - 2 = 0 \iff \cos^2 x + 3\cos x + 2 = 0$$
Wprowadzamy pomocniczą zmienną $t = \cos x$, gdzie $t \in [-1; 1]$:
$$t^2 + 3t + 2 = 0$$
Rozkładamy na czynniki:
$$(t + 1)(t + 2) = 0 \implies t_1 = -1 \quad \lor \quad t_2 = -2$$
Ponieważ $t_2 = -2 \notin [-1; 1]$, odrzucamy to rozwiązanie.  
Pozostaje:
$$\cos x = -1 \iff x = \pi + 2k\pi, \quad k \in \mathbb{Z}$$

c) Dziedzina: $x \ne \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$.  
Wprowadzamy zmienną pomocniczą $u = \operatorname{tg}^2 x$, gdzie $u \ge 0$:
$$u^2 - 4u + 3 = 0$$
Rozkładamy na czynniki:
$$(u - 1)(u - 3) = 0 \implies u_1 = 1 \quad \lor \quad u_2 = 3$$
Oba pierwiastki spełniają warunek $u \ge 0$. Wracamy do podstawienia:
1. $\operatorname{tg}^2 x = 1 \iff \operatorname{tg} x = 1 \;\lor\; \operatorname{tg} x = -1$:
   - $\operatorname{tg} x = 1 \iff x = \frac{\pi}{4} + k\pi$
   - $\operatorname{tg} x = -1 \iff x = -\frac{\pi}{4} + k\pi$
   Można to zapisać łącznie jako: $x = \pm\frac{\pi}{4} + k\pi, \; k \in \mathbb{Z}$.
2. $\operatorname{tg}^2 x = 3 \iff \operatorname{tg} x = \sqrt{3} \;\lor\; \operatorname{tg} x = -\sqrt{3}$:
   - $\operatorname{tg} x = \sqrt{3} \iff x = \frac{\pi}{3} + k\pi$
   - $\operatorname{tg} x = -\sqrt{3} \iff x = -\frac{\pi}{3} + k\pi$
   Można to zapisać łącznie jako: $x = \pm\frac{\pi}{3} + k\pi, \; k \in \mathbb{Z}$.
Wszystkie rozwiązania należą do dziedziny.  
Ostatecznie:
$$x = \pm\frac{\pi}{4} + k\pi \quad \lor \quad x = \pm\frac{\pi}{3} + k\pi, \quad k \in \mathbb{Z}$$

---

### Zadanie 10.27 [R, W]

**Treść zadania:**  
Rozwiąż równanie:  
a) [R] $(\sin x + \cos x)^2 = 1$  
b) [W] $\sin x - \cos x = 0$  
c) [R] $\operatorname{tg} x = 2\sin x$  
d) [R] $\sin 2x - 2\sin x = 0$  
e) [R] $\cos 2x + 2\cos x + 1 = 0$  
f) [R] $\cos x \cdot \operatorname{tg} x + \sin x = 2$

**Odpowiedź:**  
a) $x = \frac{k\pi}{2}, \; k \in \mathbb{Z}$  
b) $x = \frac{\pi}{4} + k\pi, \; k \in \mathbb{Z}$  
c) $x = k\pi \quad \lor \quad x = \pm\frac{\pi}{3} + 2k\pi, \; k \in \mathbb{Z}$  
d) $x = k\pi, \; k \in \mathbb{Z}$  
e) $x = \frac{\pi}{2} + k\pi \quad \lor \quad x = \pi + 2k\pi, \; k \in \mathbb{Z}$  
f) równanie nie ma rozwiązań ($x \in \emptyset$)

**Rozwiązanie krok po kroku:**  
a) Rozwijamy lewą stronę ze wzoru na kwadrat sumy:
$$(\sin x + \cos x)^2 = \sin^2 x + 2\sin x \cos x + \cos^2 x = (\sin^2 x + \cos^2 x) + 2\sin x \cos x = 1 + 2\sin x \cos x$$
Równanie ma postać:
$$1 + 2\sin x \cos x = 1 \iff 2\sin x \cos x = 0$$
Stąd:
$$\sin x = 0 \quad \lor \quad \cos x = 0$$
- $\sin x = 0 \iff x = k\pi, \; k \in \mathbb{Z}$
- $\cos x = 0 \iff x = \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$
Łącząc obie serie (punkty co $\frac{\pi}{2}$ na okręgu jednostkowym):
$$x = \frac{k\pi}{2}, \quad k \in \mathbb{Z}$$
*(Równoważnie: $2\sin x \cos x = \sin 2x = 0 \iff 2x = k\pi \iff x = \frac{k\pi}{2}$).*

b) Przenosimy $\cos x$ na prawą stronę:
$$\sin x = \cos x$$
Gdyby $\cos x = 0$, to musiałoby zachodzić $\sin x = 0$, co stoi w sprzeczności z jedynką trygonometryczną $\sin^2 x + \cos^2 x = 1 \ne 0$. Zatem $\cos x \ne 0$.  
Dzielimy obie strony równania przez $\cos x$:
$$\frac{\sin x}{\cos x} = 1 \iff \operatorname{tg} x = 1$$
Stąd:
$$x = \frac{\pi}{4} + k\pi, \quad k \in \mathbb{Z}$$

c) Dziedzina równania: $x \ne \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$.  
Zapisujemy $\operatorname{tg} x = \frac{\sin x}{\cos x}$:
$$\frac{\sin x}{\cos x} = 2\sin x \iff \frac{\sin x}{\cos x} - 2\sin x = 0 \iff \frac{\sin x(1 - 2\cos x)}{\cos x} = 0$$
Ułamek jest równy zero, gdy licznik jest równy zero:
$$\sin x(1 - 2\cos x) = 0 \iff \sin x = 0 \quad \lor \quad \cos x = \frac{1}{2}$$
- $\sin x = 0 \iff x = k\pi, \; k \in \mathbb{Z}$
- $\cos x = \frac{1}{2} \iff x = \pm\frac{\pi}{3} + 2k\pi, \; k \in \mathbb{Z}$
Wszystkie otrzymane wartości spełniają warunek dziedziny ($x \ne \frac{\pi}{2} + k\pi$).  
Zatem:
$$x = k\pi \quad \lor \quad x = \pm\frac{\pi}{3} + 2k\pi, \quad k \in \mathbb{Z}$$

d) Stosujemy wzór na sinus podwojonego kąta $\sin 2x = 2\sin x \cos x$:
$$2\sin x \cos x - 2\sin x = 0 \iff 2\sin x(\cos x - 1) = 0$$
$$\sin x = 0 \quad \lor \quad \cos x = 1$$
- $\sin x = 0 \iff x = k\pi, \; k \in \mathbb{Z}$
- $\cos x = 1 \iff x = 2k\pi, \; k \in \mathbb{Z}$
Zbiór rozwiązań $x = 2k\pi$ zawiera się w zbiorze $x = k\pi$ (odpowiada parzystym wartościom parametru $k$).  
Ostatecznie:
$$x = k\pi, \quad k \in \mathbb{Z}$$

e) Stosujemy wzór na cosinus podwojonego kąta $\cos 2x = 2\cos^2 x - 1$:
$$(2\cos^2 x - 1) + 2\cos x + 1 = 0 \iff 2\cos^2 x + 2\cos x = 0$$
Wyłączamy $2\cos x$ przed nawias:
$$2\cos x(\cos x + 1) = 0 \iff \cos x = 0 \quad \lor \quad \cos x = -1$$
- $\cos x = 0 \iff x = \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$
- $\cos x = -1 \iff x = \pi + 2k\pi, \; k \in \mathbb{Z}$
Rozwiązaniem jest suma tych dwóch serii:
$$x = \frac{\pi}{2} + k\pi \quad \lor \quad x = \pi + 2k\pi, \quad k \in \mathbb{Z}$$

f) Wyznaczamy dziedzinę równania (warunek istnienia funkcji tangens):
$$D: \; x \ne \frac{\pi}{2} + k\pi, \quad k \in \mathbb{Z}$$
Dla każdego $x \in D$ zachodzi tożsamość $\cos x \cdot \operatorname{tg} x = \cos x \cdot \frac{\sin x}{\cos x} = \sin x$.  
Wstawiamy do równania:
$$\sin x + \sin x = 2 \iff 2\sin x = 2 \iff \sin x = 1$$
Rozwiązujemy równanie $\sin x = 1$:
$$x = \frac{\pi}{2} + 2k\pi, \quad k \in \mathbb{Z}$$
Porównujemy otrzymane wartości z dziedziną $D$:  
Liczby postaci $x = \frac{\pi}{2} + 2k\pi$ należą do zbioru $\left\{\frac{\pi}{2} + k\pi : k \in \mathbb{Z}\right\}$, czyli są wyłączone z dziedziny równania (dla tych argumentów $\cos x = 0$, więc $\operatorname{tg} x$ nie istnieje).  
Zatem żadna liczba nie spełnia równania.  
**Równanie nie ma rozwiązań ($x \in \emptyset$).**

---

### Zadanie 10.28 [R, W]

**Treść zadania:**  
Rozwiąż równanie:  
a) [W] $\cos x \cdot \cos 2x = \cos 3x$  
b) [W] $\sin 5x + \sin x = 0$  
c) [W] $\sin x + \cos x = 1$  
d) [R] $\cos x - \cos\left(x + \frac{\pi}{3}\right) = 0$

**Odpowiedź:**  
a) $x = \frac{k\pi}{2}, \; k \in \mathbb{Z}$  
b) $x = \frac{k\pi}{3} \quad \lor \quad x = \frac{\pi}{4} + \frac{k\pi}{2}, \; k \in \mathbb{Z}$  
c) $x = 2k\pi \quad \lor \quad x = \frac{\pi}{2} + 2k\pi, \; k \in \mathbb{Z}$  
d) $x = -\frac{\pi}{6} + k\pi, \; k \in \mathbb{Z}$

**Rozwiązanie krok po kroku:**  
a) Zapisujemy $3x$ jako sumę $2x + x$ i stosujemy wzór na cosinus sumy:
$$\cos 3x = \cos(2x + x) = \cos 2x \cos x - \sin 2x \sin x$$
Podstawiamy do równania:
$$\cos x \cos 2x = \cos 2x \cos x - \sin 2x \sin x$$
Odejmując $\cos x \cos 2x$ od obu stron, otrzymujemy:
$$\sin 2x \sin x = 0$$
Rozpisujemy $\sin 2x = 2\sin x \cos x$:
$$2\sin^2 x \cos x = 0 \iff \sin x = 0 \quad \lor \quad \cos x = 0$$
- $\sin x = 0 \iff x = k\pi, \; k \in \mathbb{Z}$
- $\cos x = 0 \iff x = \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$
Łącząc obie serie w jedną:
$$x = \frac{k\pi}{2}, \quad k \in \mathbb{Z}$$

b) **I SPOSÓB (metodą z podręcznika):**  
Przedstawiamy kąty w postaci $5x = 3x + 2x$ oraz $x = 3x - 2x$:
$$\sin 5x = \sin(3x + 2x) = \sin 3x \cos 2x + \cos 3x \sin 2x$$
$$\sin x = \sin(3x - 2x) = \sin 3x \cos 2x - \cos 3x \sin 2x$$
Dodajemy te równości stronami:
$$\sin 5x + \sin x = 2\sin 3x \cos 2x$$
Równanie sprowadza się do:
$$2\sin 3x \cos 2x = 0 \iff \sin 3x = 0 \quad \lor \quad \cos 2x = 0$$
- $\sin 3x = 0 \iff 3x = k\pi \iff x = \frac{k\pi}{3}, \; k \in \mathbb{Z}$
- $\cos 2x = 0 \iff 2x = \frac{\pi}{2} + k\pi \iff x = \frac{\pi}{4} + \frac{k\pi}{2}, \; k \in \mathbb{Z}$  
**II SPOSÓB (ze wzoru na sumę sinusów):**  
$$\sin 5x + \sin x = 2\sin\frac{5x+x}{2}\cos\frac{5x-x}{2} = 2\sin 3x \cos 2x = 0$$
co natychmiast daje ten sam wynik.

c) Mnożymy obie strony równania przez $\frac{\sqrt{2}}{2}$:
$$\frac{\sqrt{2}}{2}\sin x + \frac{\sqrt{2}}{2}\cos x = \frac{\sqrt{2}}{2}$$
Zauważmy, że $\cos\frac{\pi}{4} = \frac{\sqrt{2}}{2}$ oraz $\sin\frac{\pi}{4} = \frac{\sqrt{2}}{2}$:
$$\sin x \cos\frac{\pi}{4} + \cos x \sin\frac{\pi}{4} = \frac{\sqrt{2}}{2}$$
Lewą stronę zwijamy ze wzoru na sinus sumy kątów:
$$\sin\left(x + \frac{\pi}{4}\right) = \frac{\sqrt{2}}{2}$$
Rozwiązujemy to równanie elementarne:
1. $x + \frac{\pi}{4} = \frac{\pi}{4} + 2k\pi \iff x = 2k\pi, \; k \in \mathbb{Z}$
2. $x + \frac{\pi}{4} = \pi - \frac{\pi}{4} + 2k\pi = \frac{3\pi}{4} + 2k\pi \iff x = \frac{3\pi}{4} - \frac{\pi}{4} + 2k\pi = \frac{\pi}{2} + 2k\pi, \; k \in \mathbb{Z}$  
Zatem:
$$x = 2k\pi \quad \lor \quad x = \frac{\pi}{2} + 2k\pi, \quad k \in \mathbb{Z}$$

d) **I SPOSÓB (metodą z podręcznika):**  
Rozpisujemy cosinus sumy:
$$\cos\left(x + \frac{\pi}{3}\right) = \cos x \cos\frac{\pi}{3} - \sin x \sin\frac{\pi}{3} = \frac{1}{2}\cos x - \frac{\sqrt{3}}{2}\sin x$$
Wstawiamy do równania:
$$\cos x - \left(\frac{1}{2}\cos x - \frac{\sqrt{3}}{2}\sin x\right) = 0$$
$$\frac{1}{2}\cos x + \frac{\sqrt{3}}{2}\sin x = 0$$
Zauważmy, że $\frac{1}{2} = \cos\frac{\pi}{3}$ oraz $\frac{\sqrt{3}}{2} = \sin\frac{\pi}{3}$. Zatem lewa strona to:
$$\cos x \cos\frac{\pi}{3} + \sin x \sin\frac{\pi}{3} = \cos\left(x - \frac{\pi}{3}\right)$$
Równanie ma postać:
$$\cos\left(x - \frac{\pi}{3}\right) = 0$$
Stąd:
$$x - \frac{\pi}{3} = \frac{\pi}{2} + k\pi \iff x = \frac{\pi}{2} + \frac{\pi}{3} + k\pi = \frac{5\pi}{6} + k\pi, \quad k \in \mathbb{Z}$$
Ponieważ $\frac{5\pi}{6} = \pi - \frac{\pi}{6}$, możemy to równoważnie zapisać jako:
$$x = -\frac{\pi}{6} + (k+1)\pi \iff x = -\frac{\pi}{6} + k\pi, \quad k \in \mathbb{Z}$$  
**II SPOSÓB (ze wzoru na różnicę cosinusów):**  
$$\cos x - \cos\left(x + \frac{\pi}{3}\right) = -2\sin\left(x + \frac{\pi}{6}\right)\sin\left(-\frac{\pi}{6}\right) = 2\sin\left(x + \frac{\pi}{6}\right) \cdot \frac{1}{2} = \sin\left(x + \frac{\pi}{6}\right) = 0$$
Stąd:
$$x + \frac{\pi}{6} = k\pi \iff x = -\frac{\pi}{6} + k\pi, \quad k \in \mathbb{Z}$$

---

### Zadanie 10.29 [R]

**Treść zadania:**  
Zbadaj, dla jakich wartości parametru $m$ istnieją rozwiązania równania:  
a) $\cos x = m$  
b) $\sin(4x + 1) = 2m + 3$  
c) $\sqrt{3}\sin x + \cos x = m$

**Odpowiedź:**  
a) $m \in [-1; 1]$  
b) $m \in [-2; -1]$  
c) $m \in [-2; 2]$

**Rozwiązanie krok po kroku:**  
a) Funkcja $f(x) = \cos x$ przyjmuje wartości ze zbioru $ZW = [-1; 1]$.  
Równanie $\cos x = m$ posiada rozwiązania rzeczywiste wtedy i tylko wtedy, gdy liczba $m$ należy do zbioru wartości funkcji cosinus:
$$m \in [-1; 1]$$

b) Dla każdego $x \in \mathbb{R}$ wyrażenie $4x + 1$ przyjmuje wszystkie wartości rzeczywiste. Zbiorem wartości funkcji $g(x) = \sin(4x + 1)$ jest przedział $[-1; 1]$.  
Zatem równanie $\sin(4x + 1) = 2m + 3$ ma rozwiązanie wtedy i tylko wtedy, gdy:
$$-1 \le 2m + 3 \le 1$$
Rozwiązujemy tę nierówność podwójną:
Odejmujemy 3 od wszystkich stron:
$$-4 \le 2m \le -2$$
Dzielimy przez 2:
$$-2 \le m \le -1$$
Stąd:
$$m \in [-2; -1]$$

c) Przekształcamy lewą stronę równania, wyłączając liczbę 2 przed nawias:
$$\sqrt{3}\sin x + \cos x = 2\left(\frac{\sqrt{3}}{2}\sin x + \frac{1}{2}\cos x\right)$$
Ponieważ $\frac{\sqrt{3}}{2} = \cos 30^\circ = \cos\frac{\pi}{6}$ oraz $\frac{1}{2} = \sin 30^\circ = \sin\frac{\pi}{6}$:
$$2\left(\sin x \cos\frac{\pi}{6} + \cos x \sin\frac{\pi}{6}\right) = 2\sin\left(x + \frac{\pi}{6}\right)$$
Zbiorem wartości funkcji $\sin\left(x + \frac{\pi}{6}\right)$ jest przedział $[-1; 1]$.  
Po pomnożeniu przez 2 zbiór wartości lewej strony równania wynosi:
$$ZW = [-2; 2]$$
Równanie $2\sin\left(x + \frac{\pi}{6}\right) = m$ ma co najmniej jedno rozwiązanie wtedy i tylko wtedy, gdy:
$$m \in [-2; 2]$$

---


<!-- SEKCJA ZADAŃ 2 -->
# Trygonometria – Zadania maturalne (465 – 505)

---

### Zadanie 465
**Treść zadania:**  
Uzasadnij, że liczby $\sqrt[3]{3^{3\sin 3^\circ}}$, $3^{\sqrt{1-\cos^2 3^\circ}}$, $(3^{\cos 3^\circ})^{\operatorname{tg} 3^\circ}$ są równe.

**Odpowiedź:**  
Wszystkie liczby są równe $3^{\sin 3^\circ}$.

**Rozwiązanie krok po kroku:**  
Dla kąta ostrego $\alpha = 3^\circ$ badamy kolejne wyrażenia:

1. Pierwsza liczba:
$$\sqrt[3]{3^{3\sin 3^\circ}} = \left(3^{3\sin 3^\circ}\right)^{\frac{1}{3}} = 3^{3\sin 3^\circ \cdot \frac{1}{3}} = 3^{\sin 3^\circ}$$

2. Druga liczba:
$$3^{\sqrt{1-\cos^2 3^\circ}} = 3^{\sqrt{\sin^2 3^\circ}} = 3^{|\sin 3^\circ|}$$
Ponieważ kąt $3^\circ \in (0^\circ, 90^\circ)$, wartość $\sin 3^\circ > 0$, zatem $|\sin 3^\circ| = \sin 3^\circ$. Stąd:
$$3^{\sqrt{1-\cos^2 3^\circ}} = 3^{\sin 3^\circ}$$

3. Trzecia liczba:
$$(3^{\cos 3^\circ})^{\operatorname{tg} 3^\circ} = 3^{\cos 3^\circ \cdot \operatorname{tg} 3^\circ} = 3^{\cos 3^\circ \cdot \frac{\sin 3^\circ}{\cos 3^\circ}} = 3^{\sin 3^\circ}$$

Wszystkie trzy liczby sprowadzają się do tej samej wartości $3^{\sin 3^\circ}$, co dowodzi ich równości.

---

### Zadanie 466
**Treść zadania:**  
Kosinus kąta ostrego $\alpha$ jest równy $\sqrt{\sqrt{2}-1}$. Uzasadnij, że tangens kąta $\alpha$ równy jest $\sqrt[4]{2}$.

**Odpowiedź:**  
$\operatorname{tg}\alpha = \sqrt[4]{2}$ (uzasadnienie poniżej).

**Rozwiązanie krok po kroku:**  
1. Z treści zadania wiemy, że kąt $\alpha$ jest ostry, czyli $\alpha \in (0^\circ, 90^\circ)$, oraz:
$$\cos\alpha = \sqrt{\sqrt{2}-1}$$
2. Podnosimy tę równość obustronnie do kwadratu:
$$\cos^2\alpha = \sqrt{2}-1$$
3. Korzystając z jedynki trygonometrycznej $\sin^2\alpha + \cos^2\alpha = 1$, wyznaczamy $\sin^2\alpha$:
$$\sin^2\alpha = 1 - \cos^2\alpha = 1 - (\sqrt{2}-1) = 2 - \sqrt{2}$$
4. Obliczamy kwadrat tangensa kąta $\alpha$:
$$\operatorname{tg}^2\alpha = \frac{\sin^2\alpha}{\cos^2\alpha} = \frac{2-\sqrt{2}}{\sqrt{2}-1}$$
Wyłączamy $\sqrt{2}$ w liczniku przed nawias:
$$\operatorname{tg}^2\alpha = \frac{\sqrt{2}(\sqrt{2}-1)}{\sqrt{2}-1} = \sqrt{2}$$
5. Ponieważ kąt $\alpha$ jest ostry, to $\operatorname{tg}\alpha > 0$. Pierwiastkując obustronnie, otrzymujemy:
$$\operatorname{tg}\alpha = \sqrt{\sqrt{2}} = \sqrt[4]{2}$$
co należało uzasadnić.

---

### Zadanie 467 [CKE sierpień 2013, poziom podstawowy]
**Treść zadania:**  
(0–2) Kąt $\alpha$ jest ostry i $\operatorname{tg}\alpha = 2$. Oblicz $\frac{\sin\alpha - \cos\alpha}{\sin\alpha + \cos\alpha}$.

**Odpowiedź:**  
$\frac{1}{3}$

**Rozwiązanie krok po kroku:**  
Ponieważ kąt $\alpha$ jest ostry, to $\cos\alpha \neq 0$. Dzielimy licznik i mianownik danego ułamka przez $\cos\alpha$:
$$\frac{\sin\alpha - \cos\alpha}{\sin\alpha + \cos\alpha} = \frac{\frac{\sin\alpha}{\cos\alpha} - \frac{\cos\alpha}{\cos\alpha}}{\frac{\sin\alpha}{\cos\alpha} + \frac{\cos\alpha}{\cos\alpha}} = \frac{\operatorname{tg}\alpha - 1}{\operatorname{tg}\alpha + 1}$$
Podstawiamy daną wartość $\operatorname{tg}\alpha = 2$:
$$\frac{2 - 1}{2 + 1} = \frac{1}{3}$$

---

### Zadanie 468 [R]
**Treść zadania:**  
Wiedząc, że $4\sin^2\alpha - 3\cos^2\alpha = 3$ i $\alpha$ jest kątem ostrym, oblicz $\operatorname{tg}\alpha$.

**Odpowiedź:**  
$\operatorname{tg}\alpha = \sqrt{6}$

**Rozwiązanie krok po kroku:**  
1. Korzystając z jedynki trygonometrycznej, prawą stronę zapisujemy jako $3(\sin^2\alpha + \cos^2\alpha)$:
$$4\sin^2\alpha - 3\cos^2\alpha = 3(\sin^2\alpha + \cos^2\alpha)$$
$$4\sin^2\alpha - 3\cos^2\alpha = 3\sin^2\alpha + 3\cos^2\alpha$$
2. Przenosimy wyrazy z $\sin^2\alpha$ na lewą stronę, a z $\cos^2\alpha$ na prawą stronę:
$$\sin^2\alpha = 6\cos^2\alpha$$
3. Kąt $\alpha$ jest kątem ostrym, zatem $\cos\alpha \neq 0$. Dzielimy obie strony przez $\cos^2\alpha$:
$$\frac{\sin^2\alpha}{\cos^2\alpha} = 6 \iff \operatorname{tg}^2\alpha = 6$$
4. Ponieważ $\alpha \in (0^\circ, 90^\circ)$, tangens przyjmuje wartość dodatnią:
$$\operatorname{tg}\alpha = \sqrt{6}$$

---

### Zadanie 469 [R]
**Treść zadania:**  
Sinus kąta ostrego $\alpha$ jest o 77% mniejszy od kosinusa tego kąta. Oblicz tangens kąta $\alpha$.

**Odpowiedź:**  
$0{,}23$

**Rozwiązanie krok po kroku:**  
1. Zapisujemy warunek podany w zadaniu:
$$\sin\alpha = \cos\alpha - 0{,}77\cos\alpha = 0{,}23\cos\alpha$$
2. Ponieważ $\alpha$ jest kątem ostrym, $\cos\alpha \neq 0$. Dzielimy obie strony przez $\cos\alpha$:
$$\frac{\sin\alpha}{\cos\alpha} = 0{,}23$$
3. Z definicji tangensa $\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha}$, zatem:
$$\operatorname{tg}\alpha = 0{,}23$$

---

### Zadanie 470
**Treść zadania:**  
Sinus kąta ostrego $\alpha$ jest o $\frac{\sqrt{2}}{2}$ większy od kosinusa tego kąta. Oblicz $\cos\alpha$.

**Odpowiedź:**  
$\cos\alpha = \frac{\sqrt{6}-\sqrt{2}}{4}$

**Rozwiązanie krok po kroku:**  
1. Z treści zadania:
$$\sin\alpha - \cos\alpha = \frac{\sqrt{2}}{2} \iff \sin\alpha = \cos\alpha + \frac{\sqrt{2}}{2}$$
2. Wstawiamy wyznaczone wyrażenie na $\sin\alpha$ do jedynki trygonometrycznej $\sin^2\alpha + \cos^2\alpha = 1$:
$$\left(\cos\alpha + \frac{\sqrt{2}}{2}\right)^2 + \cos^2\alpha = 1$$
$$\cos^2\alpha + 2 \cdot \cos\alpha \cdot \frac{\sqrt{2}}{2} + \left(\frac{\sqrt{2}}{2}\right)^2 + \cos^2\alpha = 1$$
$$2\cos^2\alpha + \sqrt{2}\cos\alpha + \frac{1}{2} - 1 = 0$$
$$2\cos^2\alpha + \sqrt{2}\cos\alpha - \frac{1}{2} = 0$$
Mnożymy obustronnie przez 2:
$$4\cos^2\alpha + 2\sqrt{2}\cos\alpha - 1 = 0$$
3. Wprowadzamy zmienną pomocniczą $t = \cos\alpha$. Ponieważ $\alpha$ jest kątem ostrym, $t \in (0, 1)$:
$$4t^2 + 2\sqrt{2}t - 1 = 0$$
$$\Delta = (2\sqrt{2})^2 - 4 \cdot 4 \cdot (-1) = 8 + 16 = 24$$
$$\sqrt{\Delta} = \sqrt{24} = 2\sqrt{6}$$
4. Obliczamy pierwiastki:
$$t_1 = \frac{-2\sqrt{2} - 2\sqrt{6}}{8} < 0 \quad \text{(odrzucamy, gdyż } t > 0\text{)}$$
$$t_2 = \frac{-2\sqrt{2} + 2\sqrt{6}}{8} = \frac{2(\sqrt{6}-\sqrt{2})}{8} = \frac{\sqrt{6}-\sqrt{2}}{4}$$
Zatem:
$$\cos\alpha = \frac{\sqrt{6}-\sqrt{2}}{4}$$

---

### Zadanie 471 [CKE sierpień 2015, poziom podstawowy]
**Treść zadania:**  
(0–2) Kąt $\alpha$ jest ostry i spełnia równość $\operatorname{tg}\alpha + \frac{1}{\operatorname{tg}\alpha} = \frac{7}{2}$. Oblicz wartość wyrażenia $\sin\alpha \cdot \cos\alpha$.

**Odpowiedź:**  
$\frac{2}{7}$

**Rozwiązanie krok po kroku:**  
1. Przekształcamy lewą stronę równości, korzystając z $\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha}$:
$$\operatorname{tg}\alpha + \frac{1}{\operatorname{tg}\alpha} = \frac{\sin\alpha}{\cos\alpha} + \frac{\cos\alpha}{\sin\alpha} = \frac{\sin^2\alpha + \cos^2\alpha}{\sin\alpha\cos\alpha}$$
2. Na mocy jedynki trygonometrycznej $\sin^2\alpha + \cos^2\alpha = 1$:
$$\frac{1}{\sin\alpha\cos\alpha} = \frac{7}{2}$$
3. Odwracając oba ułamki:
$$\sin\alpha\cos\alpha = \frac{2}{7}$$

---

### Zadanie 472
**Treść zadania:**  
Uzasadnij, że liczba $\frac{80 + \sin^2 80^\circ + \sin^2 10^\circ}{10 - \cos^2 10^\circ - \cos^2 80^\circ}$ jest całkowita.

**Odpowiedź:**  
Liczba ta jest równa 9, a więc jest liczbą całkowitą.

**Rozwiązanie krok po kroku:**  
1. Korzystamy ze wzorów redukcyjnych dla kątów dopełniających:
$$\sin 80^\circ = \cos(90^\circ - 80^\circ) = \cos 10^\circ$$
$$\cos 80^\circ = \sin(90^\circ - 80^\circ) = \sin 10^\circ$$
2. Upraszczamy licznik:
$$80 + \sin^2 80^\circ + \sin^2 10^\circ = 80 + \cos^2 10^\circ + \sin^2 10^\circ = 80 + 1 = 81$$
3. Upraszczamy mianownik:
$$10 - \cos^2 10^\circ - \cos^2 80^\circ = 10 - (\cos^2 10^\circ + \cos^2 80^\circ) = 10 - (\cos^2 10^\circ + \sin^2 10^\circ) = 10 - 1 = 9$$
4. Wartość ułamka wynosi:
$$\frac{81}{9} = 9$$
Ponieważ $9 \in \mathbb{Z}$, liczba ta jest całkowita, co kończy uzasadnienie.

---

### Zadanie 473 [R]
**Treść zadania:**  
Uzasadnij, że jeżeli $\alpha$ jest kątem ostrym, to $\sin\alpha \cdot (\sin\alpha \cdot \operatorname{tg}\alpha + \cos\alpha) = \operatorname{tg}\alpha$.

**Odpowiedź:**  
Równość jest tożsamością trygonometryczną (dowód poniżej).

**Rozwiązanie krok po kroku:**  
Przekształcamy lewą stronę równości, stosując $\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha}$:
$$L = \sin\alpha \cdot (\sin\alpha \cdot \operatorname{tg}\alpha + \cos\alpha) = \sin\alpha \cdot \left(\sin\alpha \cdot \frac{\sin\alpha}{\cos\alpha} + \cos\alpha\right)$$
$$= \sin\alpha \cdot \left(\frac{\sin^2\alpha}{\cos\alpha} + \cos\alpha\right)$$
Sprowadzamy wyrażenie w nawiasie do wspólnego mianownika:
$$= \sin\alpha \cdot \frac{\sin^2\alpha + \cos^2\alpha}{\cos\alpha}$$
Z jedynki trygonometrycznej $\sin^2\alpha + \cos^2\alpha = 1$:
$$= \sin\alpha \cdot \frac{1}{\cos\alpha} = \frac{\sin\alpha}{\cos\alpha} = \operatorname{tg}\alpha = P$$
Otrzymaliśmy $L = P$, co dowodzi prawdziwości równości.

---

### Zadanie 474 [W]
**Treść zadania:**  
Uzasadnij, że dla dowolnych kątów $\alpha, \beta$ spełniających warunki $0^\circ < \alpha < 180^\circ$ i $0^\circ < \beta < 180^\circ$ zachodzi równość $\sin^2\alpha\cos^2\beta - \sin^2\beta\cos^2\alpha = \sin^2\alpha - \sin^2\beta$.

**Odpowiedź:**  
Równość jest tożsamością (dowód poniżej).

**Rozwiązanie krok po kroku:**  
Przekształcamy lewą stronę równości, korzystając z tożsamości $\cos^2 x = 1 - \sin^2 x$:
$$L = \sin^2\alpha\cos^2\beta - \sin^2\beta\cos^2\alpha$$
$$= \sin^2\alpha(1 - \sin^2\beta) - \sin^2\beta(1 - \sin^2\alpha)$$
Wymnażamy wyrażenia:
$$= \sin^2\alpha - \sin^2\alpha\sin^2\beta - \sin^2\beta + \sin^2\beta\sin^2\alpha$$
Redukujemy wyrazy przeciwne:
$$= \sin^2\alpha - \sin^2\beta = P$$
Otrzymaliśmy $L = P$, co kończy uzasadnienie.

---

### Zadanie 475
**Treść zadania:**  
Uzasadnij, że jeżeli $\alpha$ jest kątem ostrym, to $\frac{(\cos\alpha + \sin\alpha)(\cos\alpha - \sin\alpha)}{\cos^2\alpha} = 1 - \operatorname{tg}^2\alpha$.

**Odpowiedź:**  
Równość jest tożsamością trygonometryczną (dowód poniżej).

**Rozwiązanie krok po kroku:**  
1. W liczniku lewej strony stosujemy wzór skróconego mnożenia na różnicę kwadratów:
$$(\cos\alpha + \sin\alpha)(\cos\alpha - \sin\alpha) = \cos^2\alpha - \sin^2\alpha$$
2. Wstawiamy do ułamka:
$$L = \frac{\cos^2\alpha - \sin^2\alpha}{\cos^2\alpha}$$
3. Dzielimy każdy składnik licznika przez mianownik:
$$L = \frac{\cos^2\alpha}{\cos^2\alpha} - \frac{\sin^2\alpha}{\cos^2\alpha} = 1 - \left(\frac{\sin\alpha}{\cos\alpha}\right)^2 = 1 - \operatorname{tg}^2\alpha = P$$
Dla kąta ostrego $\cos\alpha \neq 0$, zatem równość $L = P$ jest spełniona, co kończy uzasadnienie.

---

### Zadanie 476
**Treść zadania:**  
Uzasadnij, że dla każdego kąta ostrego $\alpha$ wyrażenie $\left(\frac{1}{\sin\alpha} - \sin\alpha\right)\left(\frac{1}{\cos\alpha} - \cos\alpha\right)\left(\frac{1}{\operatorname{tg}\alpha} + \operatorname{tg}\alpha\right)$ przyjmuje tę samą wartość.

**Odpowiedź:**  
Wyrażenie ma stałą wartość równą 1.

**Rozwiązanie krok po kroku:**  
Przekształcamy po kolei każdy czynnik iloczynu:
1. Pierwszy czynnik:
$$\frac{1}{\sin\alpha} - \sin\alpha = \frac{1 - \sin^2\alpha}{\sin\alpha} = \frac{\cos^2\alpha}{\sin\alpha}$$
2. Drugi czynnik:
$$\frac{1}{\cos\alpha} - \cos\alpha = \frac{1 - \cos^2\alpha}{\cos\alpha} = \frac{\sin^2\alpha}{\cos\alpha}$$
3. Trzeci czynnik:
$$\frac{1}{\operatorname{tg}\alpha} + \operatorname{tg}\alpha = \frac{\cos\alpha}{\sin\alpha} + \frac{\sin\alpha}{\cos\alpha} = \frac{\cos^2\alpha + \sin^2\alpha}{\sin\alpha\cos\alpha} = \frac{1}{\sin\alpha\cos\alpha}$$
4. Wymnażamy wszystkie trzy czynniki:
$$W = \frac{\cos^2\alpha}{\sin\alpha} \cdot \frac{\sin^2\alpha}{\cos\alpha} \cdot \frac{1}{\sin\alpha\cos\alpha} = \frac{\sin^2\alpha\cos^2\alpha}{\sin^2\alpha\cos^2\alpha} = 1$$
Wartość wyrażenia wynosi stale 1 dla każdego kąta ostrego $\alpha$, co dowodzi tezy.

---

### Zadanie 477
**Treść zadania:**  
Uzasadnij, że dla każdego kąta ostrego $\alpha$ zachodzi równość $\frac{\operatorname{tg}^2\alpha - \sin^2\alpha}{1 - \operatorname{tg}^2\alpha\cos^2\alpha} = \operatorname{tg}^4\alpha$.

**Odpowiedź:**  
Równość jest prawdziwa (dowód poniżej).

**Rozwiązanie krok po kroku:**  
Przekształcamy lewą stronę równości:
1. Przekształcamy licznik:
$$\operatorname{tg}^2\alpha - \sin^2\alpha = \frac{\sin^2\alpha}{\cos^2\alpha} - \sin^2\alpha = \sin^2\alpha\left(\frac{1}{\cos^2\alpha} - 1\right) = \sin^2\alpha \cdot \frac{1-\cos^2\alpha}{\cos^2\alpha} = \sin^2\alpha \cdot \frac{\sin^2\alpha}{\cos^2\alpha} = \sin^2\alpha\operatorname{tg}^2\alpha$$
2. Przekształcamy mianownik:
$$1 - \operatorname{tg}^2\alpha\cos^2\alpha = 1 - \frac{\sin^2\alpha}{\cos^2\alpha} \cdot \cos^2\alpha = 1 - \sin^2\alpha = \cos^2\alpha$$
3. Obliczamy wartość całego ułamka:
$$L = \frac{\sin^2\alpha\operatorname{tg}^2\alpha}{\cos^2\alpha} = \frac{\sin^2\alpha}{\cos^2\alpha} \cdot \operatorname{tg}^2\alpha = \operatorname{tg}^2\alpha \cdot \operatorname{tg}^2\alpha = \operatorname{tg}^4\alpha = P$$
Otrzymaliśmy $L = P$, co kończy uzasadnienie tożsamości.

---

### Zadanie 478 [R]
**Treść zadania:**  
Udowodnij, że jeżeli $\alpha$ jest kątem ostrym, to $\frac{1}{\cos\alpha} - \frac{\cos\alpha}{1+\sin\alpha} = \operatorname{tg}\alpha$.

**Odpowiedź:**  
Równość jest tożsamością trygonometryczną (dowód poniżej).

**Rozwiązanie krok po kroku:**  
Sprowadzamy ułamki po lewej stronie do wspólnego mianownika:
$$L = \frac{1}{\cos\alpha} - \frac{\cos\alpha}{1+\sin\alpha} = \frac{1+\sin\alpha - \cos^2\alpha}{\cos\alpha(1+\sin\alpha)}$$
Z jedynki trygonometrycznej $1 - \cos^2\alpha = \sin^2\alpha$:
$$= \frac{\sin\alpha + \sin^2\alpha}{\cos\alpha(1+\sin\alpha)} = \frac{\sin\alpha(1+\sin\alpha)}{\cos\alpha(1+\sin\alpha)}$$
Skracamy przez $(1+\sin\alpha) \neq 0$:
$$= \frac{\sin\alpha}{\cos\alpha} = \operatorname{tg}\alpha = P$$
Co kończy dowód.

---

### Zadanie 479 [Egzamin wstępny do szkół średnich w woj. zamojskim 1992]
**Treść zadania:**  
Doprowadź do najprostszej postaci wyrażenie $\left(\frac{\sqrt{1-\cos^2\alpha}}{1+\cos\alpha} + \frac{1+\sqrt{1-\sin^2\alpha}}{\sin\alpha}\right)\cdot\sqrt{1-\cos^2\alpha}$, gdzie $0^\circ < \alpha < 90^\circ$.

**Odpowiedź:**  
$2$

**Rozwiązanie krok po kroku:**  
Dla kąta ostrego $\alpha \in (0^\circ, 90^\circ)$ zachodzi $\sin\alpha > 0$ oraz $\cos\alpha > 0$, stąd:
$$\sqrt{1-\cos^2\alpha} = \sqrt{\sin^2\alpha} = \sin\alpha$$
$$\sqrt{1-\sin^2\alpha} = \sqrt{\cos^2\alpha} = \cos\alpha$$
Wstawiamy te zależności do danego wyrażenia:
$$W = \left(\frac{\sin\alpha}{1+\cos\alpha} + \frac{1+\cos\alpha}{\sin\alpha}\right)\cdot\sin\alpha$$
Sprowadzamy wyrażenie w nawiasie do wspólnego mianownika:
$$W = \frac{\sin^2\alpha + (1+\cos\alpha)^2}{(1+\cos\alpha)\sin\alpha} \cdot \sin\alpha$$
Skracamy czynnik $\sin\alpha$:
$$W = \frac{\sin^2\alpha + 1 + 2\cos\alpha + \cos^2\alpha}{1+\cos\alpha}$$
Ponieważ $\sin^2\alpha + \cos^2\alpha = 1$:
$$W = \frac{1 + 1 + 2\cos\alpha}{1+\cos\alpha} = \frac{2 + 2\cos\alpha}{1+\cos\alpha} = \frac{2(1+\cos\alpha)}{1+\cos\alpha} = 2$$

---

### Zadanie 480 [R]
**Treść zadania:**  
Kąt $\alpha$ jest kątem ostrym, jaki tworzy prosta o równaniu $y = 2x+5$ z osią $OX$. Oblicz wartość wyrażenia $\frac{\sin\alpha(\cos\alpha+\sin\alpha)}{\cos^2\alpha}$.

**Odpowiedź:**  
$6$

**Rozwiązanie krok po kroku:**  
1. Współczynnik kierunkowy prostej $y = ax+b$ jest równy tangensowi kąta nachylenia prostej do osi $OX$:
$$a = \operatorname{tg}\alpha \implies \operatorname{tg}\alpha = 2$$
2. Przekształcamy badane wyrażenie:
$$\frac{\sin\alpha(\cos\alpha+\sin\alpha)}{\cos^2\alpha} = \frac{\sin\alpha\cos\alpha + \sin^2\alpha}{\cos^2\alpha} = \frac{\sin\alpha\cos\alpha}{\cos^2\alpha} + \frac{\sin^2\alpha}{\cos^2\alpha} = \frac{\sin\alpha}{\cos\alpha} + \left(\frac{\sin\alpha}{\cos\alpha}\right)^2$$
Ponieważ $\frac{\sin\alpha}{\cos\alpha} = \operatorname{tg}\alpha$:
$$= \operatorname{tg}\alpha + \operatorname{tg}^2\alpha$$
3. Podstawiamy wartość $\operatorname{tg}\alpha = 2$:
$$2 + 2^2 = 2 + 4 = 6$$

---

### Zadanie 481 [R]
**Treść zadania:**  
Sinus kąta ostrego $\alpha$ jest równy $0{,}3\sqrt{11}$. Oblicz wartość wyrażenia $\log(\sin\alpha+\cos\alpha) - \log(1+\operatorname{tg}\alpha)$.

**Odpowiedź:**  
$-1$

**Rozwiązanie krok po kroku:**  
1. Korzystając z własności różnicy logarytmów:
$$\log(\sin\alpha+\cos\alpha) - \log(1+\operatorname{tg}\alpha) = \log\left(\frac{\sin\alpha+\cos\alpha}{1+\operatorname{tg}\alpha}\right)$$
2. Rozwijamy mianownik:
$$1+\operatorname{tg}\alpha = 1+\frac{\sin\alpha}{\cos\alpha} = \frac{\cos\alpha+\sin\alpha}{\cos\alpha}$$
Zatem:
$$\frac{\sin\alpha+\cos\alpha}{1+\operatorname{tg}\alpha} = \frac{\sin\alpha+\cos\alpha}{\frac{\sin\alpha+\cos\alpha}{\cos\alpha}} = \cos\alpha$$
Szukana wartość to $\log(\cos\alpha)$.
3. Obliczamy $\cos\alpha$:
$$\sin\alpha = 0{,}3\sqrt{11} = \frac{3\sqrt{11}}{10}$$
$$\cos^2\alpha = 1 - \sin^2\alpha = 1 - \left(\frac{3\sqrt{11}}{10}\right)^2 = 1 - \frac{99}{100} = \frac{1}{100}$$
Kąt $\alpha$ jest ostry, więc $\cos\alpha > 0$:
$$\cos\alpha = \sqrt{\frac{1}{100}} = \frac{1}{10}$$
4. Obliczamy logarytm:
$$\log(\cos\alpha) = \log\left(\frac{1}{10}\right) = -1$$

---

### Zadanie 482
**Treść zadania:**  
Wiedząc, że $\sin(6\pi+\alpha) > 0$ i $\cos(\pi+\alpha) = \frac{5}{13}$, oblicz $\operatorname{tg}\alpha$.

**Odpowiedź:**  
$\operatorname{tg}\alpha = -2{,}4 = -\frac{12}{5}$

**Rozwiązanie krok po kroku:**  
1. Z okresowości funkcji sinus:
$$\sin(6\pi+\alpha) = \sin\alpha > 0$$
2. Ze wzoru redukcyjnego dla funkcji cosinus:
$$\cos(\pi+\alpha) = -\cos\alpha = \frac{5}{13} \implies \cos\alpha = -\frac{5}{13}$$
3. Ponieważ $\sin\alpha > 0$ i $\cos\alpha < 0$, kąt $\alpha$ należy do II ćwiartki.
Z jedynki trygonometrycznej wyznaczamy $\sin\alpha$:
$$\sin^2\alpha = 1 - \cos^2\alpha = 1 - \left(-\frac{5}{13}\right)^2 = 1 - \frac{25}{169} = \frac{144}{169} \implies \sin\alpha = \frac{12}{13}$$
4. Obliczamy $\operatorname{tg}\alpha$:
$$\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{\frac{12}{13}}{-\frac{5}{13}} = -\frac{12}{5} = -2{,}4$$

---

### Zadanie 483 [R]
**Treść zadania:**  
Twierdzenie. Dla każdej liczby rzeczywistej $\alpha$ zachodzi równość $\sin 3\alpha = 3\sin\alpha - 4\sin^3\alpha$.  
Wykorzystując podane twierdzenie, wykaż, że liczba $\sin 10^\circ$ jest pierwiastkiem wielomianu $W(x) = 8x^3 - 6x + 1$.

**Odpowiedź:**  
Liczba $\sin 10^\circ$ jest pierwiastkiem wielomianu $W(x)$ (dowód poniżej).

**Rozwiązanie krok po kroku:**  
1. Przekształcamy wielomian $W(x)$:
$$W(x) = 8x^3 - 6x + 1 = -2(3x - 4x^3) + 1$$
2. Obliczamy wartość wielomianu dla $x = \sin 10^\circ$:
$$W(\sin 10^\circ) = -2(3\sin 10^\circ - 4\sin^3 10^\circ) + 1$$
3. Stosując dane twierdzenie dla $\alpha = 10^\circ$:
$$3\sin 10^\circ - 4\sin^3 10^\circ = \sin(3 \cdot 10^\circ) = \sin 30^\circ$$
4. Wstawiamy wartość $\sin 30^\circ = \frac{1}{2}$:
$$W(\sin 10^\circ) = -2 \cdot \sin 30^\circ + 1 = -2 \cdot \frac{1}{2} + 1 = -1 + 1 = 0$$
Skoro $W(\sin 10^\circ) = 0$, to liczba $\sin 10^\circ$ jest pierwiastkiem wielomianu $W(x)$, co kończy dowód.

---

### Zadanie 484 [CKE czerwiec 2017, poziom podstawowy]
**Treść zadania:**  
(0–2) Kąt $\alpha$ jest ostry i zachodzi równość $\sin\alpha + \cos\alpha = \frac{\sqrt{7}}{2}$. Oblicz wartość wyrażenia $(\sin\alpha - \cos\alpha)^2$.

**Odpowiedź:**  
$0{,}25 = \frac{1}{4}$

**Rozwiązanie krok po kroku:**  
1. Podnosimy obustronnie równość $\sin\alpha + \cos\alpha = \frac{\sqrt{7}}{2}$ do kwadratu:
$$(\sin\alpha + \cos\alpha)^2 = \left(\frac{\sqrt{7}}{2}\right)^2$$
$$\sin^2\alpha + 2\sin\alpha\cos\alpha + \cos^2\alpha = \frac{7}{4}$$
$$1 + 2\sin\alpha\cos\alpha = \frac{7}{4} \implies 2\sin\alpha\cos\alpha = \frac{7}{4} - 1 = \frac{3}{4}$$
2. Obliczamy szukaną wartość wyrażenia:
$$(\sin\alpha - \cos\alpha)^2 = \sin^2\alpha - 2\sin\alpha\cos\alpha + \cos^2\alpha = 1 - 2\sin\alpha\cos\alpha$$
$$= 1 - \frac{3}{4} = \frac{1}{4} = 0{,}25$$

---

### Zadanie 485 [CKE czerwiec 2012, poziom rozszerzony]
**Treść zadania:**  
(0–5) Kąt $\alpha$ jest taki, że $\cos\alpha + \sin\alpha = \frac{4}{3}$. Oblicz wartość wyrażenia $|\cos\alpha - \sin\alpha|$.

**Odpowiedź:**  
$\frac{\sqrt{2}}{3}$

**Rozwiązanie krok po kroku:**  
1. Podnosimy obustronnie zależność $\cos\alpha + \sin\alpha = \frac{4}{3}$ do kwadratu:
$$(\cos\alpha + \sin\alpha)^2 = \left(\frac{4}{3}\right)^2$$
$$\cos^2\alpha + 2\sin\alpha\cos\alpha + \sin^2\alpha = \frac{16}{9}$$
$$1 + 2\sin\alpha\cos\alpha = \frac{16}{9} \implies 2\sin\alpha\cos\alpha = \frac{16}{9} - 1 = \frac{7}{9}$$
2. Obliczamy kwadrat wyrażenia $|\cos\alpha - \sin\alpha|$:
$$|\cos\alpha - \sin\alpha|^2 = (\cos\alpha - \sin\alpha)^2 = \cos^2\alpha - 2\sin\alpha\cos\alpha + \sin^2\alpha = 1 - 2\sin\alpha\cos\alpha$$
$$= 1 - \frac{7}{9} = \frac{2}{9}$$
3. Ponieważ wartość bezwzględna jest nieujemna, pierwiastkujemy obustronnie:
$$|\cos\alpha - \sin\alpha| = \sqrt{\frac{2}{9}} = \frac{\sqrt{2}}{3}$$

---

### Zadanie 486
**Treść zadania:**  
Sprawdź, czy równość $\frac{1-\operatorname{tg}^2 x}{1+\operatorname{tg}^2 x} = \cos 2x$ jest tożsamością trygonometryczną.

**Odpowiedź:**  
Równość jest tożsamością trygonometryczną (dla $x \neq \frac{\pi}{2} + k\pi$, $k \in \mathbb{Z}$).

**Rozwiązanie krok po kroku:**  
1. Dziedzina: tangens jest określony dla $x \neq \frac{\pi}{2} + k\pi$ ($k \in \mathbb{Z}$), a mianownik $1+\operatorname{tg}^2 x \ge 1 > 0$ dla każdego $x$ z dziedziny.
2. Przekształcamy lewą stronę równości za pomocą $\operatorname{tg} x = \frac{\sin x}{\cos x}$:
$$L = \frac{1 - \frac{\sin^2 x}{\cos^2 x}}{1 + \frac{\sin^2 x}{\cos^2 x}} = \frac{\frac{\cos^2 x - \sin^2 x}{\cos^2 x}}{\frac{\cos^2 x + \sin^2 x}{\cos^2 x}}$$
3. Skracamy $\cos^2 x$ w mianownikach ułamków piętrowych:
$$L = \frac{\cos^2 x - \sin^2 x}{\cos^2 x + \sin^2 x}$$
4. Korzystając z $\cos^2 x + \sin^2 x = 1$ oraz $\cos 2x = \cos^2 x - \sin^2 x$:
$$L = \frac{\cos 2x}{1} = \cos 2x = P$$
Równość jest tożsamością trygonometryczną w całej swojej dziedzinie.

---

### Zadanie 487 [CKE czerwiec 2013, poziom rozszerzony]
**Treść zadania:**  
(0–3) Wykaż, że dla dowolnego kąta $\alpha$ prawdziwa jest tożsamość $\sin^4\alpha + \cos^4\alpha = \frac{1+\cos^2 2\alpha}{2}$.

**Odpowiedź:**  
Tożsamość udowodniona.

**Rozwiązanie krok po kroku:**  
1. Dopełniamy lewą stronę tożsamości do pełnego kwadratu:
$$L = \sin^4\alpha + \cos^4\alpha = (\sin^2\alpha + \cos^2\alpha)^2 - 2\sin^2\alpha\cos^2\alpha$$
2. Korzystamy z jedynki trygonometrycznej $\sin^2\alpha + \cos^2\alpha = 1$ oraz ze wzoru na sinus kąta podwojonego $\sin 2\alpha = 2\sin\alpha\cos\alpha$:
$$L = 1^2 - 2 \cdot \left(\frac{\sin 2\alpha}{2}\right)^2 = 1 - 2 \cdot \frac{\sin^2 2\alpha}{4} = 1 - \frac{1}{2}\sin^2 2\alpha$$
3. Wyrażamy $\sin^2 2\alpha$ przez cosinus: $\sin^2 2\alpha = 1 - \cos^2 2\alpha$:
$$L = 1 - \frac{1}{2}(1 - \cos^2 2\alpha) = 1 - \frac{1}{2} + \frac{1}{2}\cos^2 2\alpha = \frac{1}{2} + \frac{1}{2}\cos^2 2\alpha = \frac{1+\cos^2 2\alpha}{2} = P$$
Otrzymaliśmy $L = P$, co kończy dowód.

---

### Zadanie 488
**Treść zadania:**  
Uzasadnij, że wartość wyrażenia $\cos 2\alpha + 8\sin^2\frac{1}{2}\alpha\cdot\cos^2\frac{1}{2}\alpha$ nie zależy od wartości zmiennej $\alpha$.

**Odpowiedź:**  
Wartość wyrażenia wynosi stale 1, więc nie zależy od wartości zmiennej $\alpha$.

**Rozwiązanie krok po kroku:**  
1. Korzystamy ze wzoru na sinus podwojonego kąta: $2\sin\frac{\alpha}{2}\cos\frac{\alpha}{2} = \sin\alpha$.
Drugi składnik wyrażenia można zapisać jako:
$$8\sin^2\frac{\alpha}{2}\cos^2\frac{\alpha}{2} = 2 \cdot \left(2\sin\frac{\alpha}{2}\cos\frac{\alpha}{2}\right)^2 = 2(\sin\alpha)^2 = 2\sin^2\alpha$$
2. Ze wzoru na cosinus kąta podwojonego: $\cos 2\alpha = 1 - 2\sin^2\alpha$.
3. Sumujemy oba składniki:
$$\cos 2\alpha + 8\sin^2\frac{\alpha}{2}\cos^2\frac{\alpha}{2} = (1 - 2\sin^2\alpha) + 2\sin^2\alpha = 1$$
Wartość wyrażenia jest równa 1 niezależnie od $\alpha$, co dowodzi tezy.

---

### Zadanie 489 [CKE Informator 2014/2015, poziom rozszerzony]
**Treść zadania:**  
(0–3) Wykaż, że dla każdego kąta $\alpha$ prawdziwa jest równość: $4(\sin^6\alpha + \cos^6\alpha) = 1 + 3\cos^2 2\alpha$.

**Odpowiedź:**  
Równość wykazana.

**Rozwiązanie krok po kroku:**  
1. Stosujemy wzór na sumę sześcianów $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ dla $a = \sin^2\alpha$, $b = \cos^2\alpha$:
$$\sin^6\alpha + \cos^6\alpha = (\sin^2\alpha + \cos^2\alpha)(\sin^4\alpha - \sin^2\alpha\cos^2\alpha + \cos^4\alpha)$$
Ponieważ $\sin^2\alpha + \cos^2\alpha = 1$:
$$= \sin^4\alpha + \cos^4\alpha - \sin^2\alpha\cos^2\alpha$$
2. Dopełniamy do kwadratu sumy:
$$\sin^4\alpha + \cos^4\alpha = (\sin^2\alpha + \cos^2\alpha)^2 - 2\sin^2\alpha\cos^2\alpha = 1 - 2\sin^2\alpha\cos^2\alpha$$
Zatem:
$$\sin^6\alpha + \cos^6\alpha = 1 - 3\sin^2\alpha\cos^2\alpha = 1 - 3\left(\frac{\sin 2\alpha}{2}\right)^2 = 1 - \frac{3}{4}\sin^2 2\alpha$$
3. Mnożymy lewą stronę przez 4:
$$L = 4\left(1 - \frac{3}{4}\sin^2 2\alpha\right) = 4 - 3\sin^2 2\alpha$$
4. Zamieniamy $\sin^2 2\alpha = 1 - \cos^2 2\alpha$:
$$L = 4 - 3(1 - \cos^2 2\alpha) = 4 - 3 + 3\cos^2 2\alpha = 1 + 3\cos^2 2\alpha = P$$
Co kończy dowód tożsamości.

---

### Zadanie 490 [Egzamin wstępny na Politechnikę Wrocławską 1959]
**Treść zadania:**  
Udowodnić tożsamość $\frac{1-2\sin^2\alpha}{1+\sin 2\alpha} = \frac{1-\operatorname{tg}\alpha}{1+\operatorname{tg}\alpha}$.

**Odpowiedź:**  
Tożsamość udowodniona.

**Rozwiązanie krok po kroku:**  
1. Dziedzina: $\cos\alpha \neq 0$ (istnienie tangensa), $\operatorname{tg}\alpha \neq -1$ oraz $1+\sin 2\alpha \neq 0$.
2. Przekształcamy licznik lewej strony, wykorzystując jedynkę trygonometryczną:
$$1 - 2\sin^2\alpha = (\cos^2\alpha + \sin^2\alpha) - 2\sin^2\alpha = \cos^2\alpha - \sin^2\alpha = (\cos\alpha - \sin\alpha)(\cos\alpha + \sin\alpha)$$
3. Przekształcamy mianownik lewej strony:
$$1 + \sin 2\alpha = \cos^2\alpha + \sin^2\alpha + 2\sin\alpha\cos\alpha = (\cos\alpha + \sin\alpha)^2$$
4. Upraszczamy ułamek po lewej stronie:
$$L = \frac{(\cos\alpha - \sin\alpha)(\cos\alpha + \sin\alpha)}{(\cos\alpha + \sin\alpha)^2} = \frac{\cos\alpha - \sin\alpha}{\cos\alpha + \sin\alpha}$$
5. Dzielimy licznik i mianownik przez $\cos\alpha \neq 0$:
$$L = \frac{\frac{\cos\alpha}{\cos\alpha} - \frac{\sin\alpha}{\cos\alpha}}{\frac{\cos\alpha}{\cos\alpha} + \frac{\sin\alpha}{\cos\alpha}} = \frac{1 - \operatorname{tg}\alpha}{1 + \operatorname{tg}\alpha} = P$$
Otrzymaliśmy $L = P$, co kończy dowód.

---

### Zadanie 491 [Egzamin dojrzałości w woj. krakowskim 1989]
**Treść zadania:**  
Wykazać, że $\frac{\sin 2\alpha}{1+\cos 2\alpha} \cdot \frac{\cos\alpha}{1+\cos\alpha} = \operatorname{tg}\frac{1}{2}\alpha$.

**Odpowiedź:**  
Równość wykazana.

**Rozwiązanie krok po kroku:**  
1. Stosujemy wzory kąta podwojonego w pierwszym ułamku:
$$\sin 2\alpha = 2\sin\alpha\cos\alpha$$
$$1 + \cos 2\alpha = 1 + (2\cos^2\alpha - 1) = 2\cos^2\alpha$$
Zatem:
$$\frac{\sin 2\alpha}{1+\cos 2\alpha} = \frac{2\sin\alpha\cos\alpha}{2\cos^2\alpha} = \frac{\sin\alpha}{\cos\alpha}$$
2. Mnożymy przez drugi czynnik:
$$L = \frac{\sin\alpha}{\cos\alpha} \cdot \frac{\cos\alpha}{1+\cos\alpha} = \frac{\sin\alpha}{1+\cos\alpha}$$
3. Stosujemy wzory kąta połówkowego $\frac{\alpha}{2}$:
$$\sin\alpha = 2\sin\frac{\alpha}{2}\cos\frac{\alpha}{2}$$
$$1 + \cos\alpha = 1 + \left(2\cos^2\frac{\alpha}{2} - 1\right) = 2\cos^2\frac{\alpha}{2}$$
4. Wstawiamy do ułamka:
$$L = \frac{2\sin\frac{\alpha}{2}\cos\frac{\alpha}{2}}{2\cos^2\frac{\alpha}{2}} = \frac{\sin\frac{\alpha}{2}}{\cos\frac{\alpha}{2}} = \operatorname{tg}\frac{\alpha}{2} = P$$
Co dowodzi tożsamości.

---

### Zadanie 492 [W]
**Treść zadania:**  
Uzasadnij, że liczba $\sin 10^\circ \cdot \cos 10^\circ \cdot \cos 20^\circ \cdot \cos 40^\circ$ jest 8 razy mniejsza od liczby $\sin 80^\circ$.

**Odpowiedź:**  
$\sin 10^\circ \cdot \cos 10^\circ \cdot \cos 20^\circ \cdot \cos 40^\circ = \frac{1}{8}\sin 80^\circ$ (uzasadnienie poniżej).

**Rozwiązanie krok po kroku:**  
Oznaczmy badany iloczyn przez $A$:
$$A = \sin 10^\circ \cdot \cos 10^\circ \cdot \cos 20^\circ \cdot \cos 40^\circ$$
Stosujemy wzór na sinus podwojonego kąta $\sin x\cos x = \frac{1}{2}\sin 2x$:
1. Dla pierwszych dwóch czynników:
$$\sin 10^\circ\cos 10^\circ = \frac{1}{2}\sin 20^\circ$$
Wstawiamy:
$$A = \frac{1}{2}\sin 20^\circ \cos 20^\circ \cos 40^\circ$$
2. Ponownie stosujemy wzór podwojonego kąta dla $20^\circ$:
$$\sin 20^\circ\cos 20^\circ = \frac{1}{2}\sin 40^\circ$$
Wstawiamy:
$$A = \frac{1}{2} \cdot \left(\frac{1}{2}\sin 40^\circ\right) \cos 40^\circ = \frac{1}{4}\sin 40^\circ\cos 40^\circ$$
3. Stosujemy wzór dla $40^\circ$:
$$\sin 40^\circ\cos 40^\circ = \frac{1}{2}\sin 80^\circ$$
Otrzymujemy:
$$A = \frac{1}{4} \cdot \left(\frac{1}{2}\sin 80^\circ\right) = \frac{1}{8}\sin 80^\circ$$
Zatem liczba $A$ jest równa $\frac{1}{8}\sin 80^\circ$, czyli jest 8 razy mniejsza od $\sin 80^\circ$.

---

### Zadanie 493 [R]
**Treść zadania:**  
Wykaż, że dla dowolnych liczb rzeczywistych $x$ i $y$ zachodzi równość $\sin^2 x - \sin^2 y = \sin(x+y)\cdot\sin(x-y)$.

**Odpowiedź:**  
Równość wykazana.

**Rozwiązanie krok po kroku:**  
Przekształcamy prawą stronę równości za pomocą wzorów na sinus sumy i różnicy kątów:
$$\sin(x+y) = \sin x\cos y + \cos x\sin y$$
$$\sin(x-y) = \sin x\cos y - \cos x\sin y$$
Mnożymy oba wyrażenia, korzystając ze wzoru na różnicę kwadratów:
$$P = (\sin x\cos y + \cos x\sin y)(\sin x\cos y - \cos x\sin y) = \sin^2 x\cos^2 y - \cos^2 x\sin^2 y$$
Podstawiamy $\cos^2 y = 1 - \sin^2 y$ oraz $\cos^2 x = 1 - \sin^2 x$:
$$P = \sin^2 x(1 - \sin^2 y) - (1 - \sin^2 x)\sin^2 y$$
$$= \sin^2 x - \sin^2 x\sin^2 y - \sin^2 y + \sin^2 x\sin^2 y$$
$$= \sin^2 x - \sin^2 y = L$$
Otrzymaliśmy $L = P$, co kończy dowód.

---

### Zadanie 494
**Treść zadania:**  
Wykaż, że dla dowolnych kątów $\alpha, \beta$ zachodzi równość $(\cos\alpha + \cos\beta)^2 + (\sin\alpha + \sin\beta)^2 = 4\cos^2\frac{\alpha-\beta}{2}$.

**Odpowiedź:**  
Równość wykazana.

**Rozwiązanie krok po kroku:**  
1. Rozwijamy kwadraty sum po lewej stronie:
$$L = (\cos^2\alpha + 2\cos\alpha\cos\beta + \cos^2\beta) + (\sin^2\alpha + 2\sin\alpha\sin\beta + \sin^2\beta)$$
2. Grupujemy wyrazy:
$$L = (\sin^2\alpha + \cos^2\alpha) + (\sin^2\beta + \cos^2\beta) + 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta)$$
3. Korzystamy z jedynki trygonometrycznej oraz wzoru na cosinus różnicy kątów $\cos(\alpha-\beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta$:
$$L = 1 + 1 + 2\cos(\alpha-\beta) = 2 + 2\cos(\alpha-\beta) = 2(1 + \cos(\alpha-\beta))$$
4. Korzystamy ze wzoru połówkowego $1 + \cos x = 2\cos^2\frac{x}{2}$ dla $x = \alpha - \beta$:
$$L = 2 \cdot 2\cos^2\frac{\alpha-\beta}{2} = 4\cos^2\frac{\alpha-\beta}{2} = P$$
Co kończy dowód.

---

### Zadanie 495 [W]
**Treść zadania:**  
Wykaż, że równość $\sin 2x + \sin 2y + \sin 2(x+y) = 4\cos x \cdot \cos y \cdot \sin(x+y)$ prawdziwa jest dla dowolnych liczb rzeczywistych $x$ i $y$.

**Odpowiedź:**  
Równość wykazana.

**Rozwiązanie krok po kroku:**  
1. Stosujemy wzór na sumę sinusów $\sin a + \sin b = 2\sin\frac{a+b}{2}\cos\frac{a-b}{2}$ do pierwszych dwóch wyrazów:
$$\sin 2x + \sin 2y = 2\sin\frac{2x+2y}{2}\cos\frac{2x-2y}{2} = 2\sin(x+y)\cos(x-y)$$
2. Dla trzeciego wyrazu stosujemy wzór na sinus podwojonego argumentu:
$$\sin 2(x+y) = 2\sin(x+y)\cos(x+y)$$
3. Wstawiamy do lewej strony i wyłączamy wspólny czynnik $2\sin(x+y)$ przed nawias:
$$L = 2\sin(x+y)\cos(x-y) + 2\sin(x+y)\cos(x+y) = 2\sin(x+y)\left[\cos(x-y) + \cos(x+y)\right]$$
4. Stosujemy wzór na sumę cosinusów:
$$\cos(x-y) + \cos(x+y) = 2\cos\frac{(x-y)+(x+y)}{2}\cos\frac{(x-y)-(x+y)}{2} = 2\cos x\cos(-y)$$
Ponieważ funkcja cosinus jest parzysta, $\cos(-y) = \cos y$:
$$\cos(x-y) + \cos(x+y) = 2\cos x\cos y$$
5. Wstawiamy z powrotem:
$$L = 2\sin(x+y) \cdot [2\cos x\cos y] = 4\cos x\cos y\sin(x+y) = P$$
Co kończy dowód tożsamości.

---

### Zadanie 496 [R]
**Treść zadania:**  
Wyznacz miarę kąta ostrego $\alpha$ wiedząc, że $\sin\alpha$ jest rozwiązaniem równania $2x^2 - 7x + 3 = 0$.

**Odpowiedź:**  
$\alpha = 30^\circ$ (lub $\alpha = \frac{\pi}{6}$)

**Rozwiązanie krok po kroku:**  
1. Rozwiązujemy równanie kwadratowe $2x^2 - 7x + 3 = 0$:
$$\Delta = (-7)^2 - 4 \cdot 2 \cdot 3 = 49 - 24 = 25, \quad \sqrt{\Delta} = 5$$
$$x_1 = \frac{7 - 5}{4} = \frac{2}{4} = 0{,}5$$
$$x_2 = \frac{7 + 5}{4} = \frac{12}{4} = 3$$
2. Ponieważ $\alpha$ jest kątem ostrym, to $\sin\alpha \in (0, 1)$. Zatem $x_2 = 3$ nie spełnia warunków zadania ($\sin\alpha \le 1$).
3. Stąd:
$$\sin\alpha = 0{,}5 = \frac{1}{2} \implies \alpha = 30^\circ$$

---

### Zadanie 497
**Treść zadania:**  
Funkcje $f$ i $g$, określone w przedziale $[-\pi, 2\pi]$, dane są wzorami $f(x) = \sin x$ i $g(x) = x^2 - \pi x$.  
a) W jednym układzie współrzędnych naszkicuj wykresy obu funkcji.  
b) Oblicz kwadrat sumy i sumę kwadratów miejsc zerowych funkcji $f$.  
c) Podaj zbiór rozwiązań nierówności $\sin x \le x^2 - \pi x$.

**Odpowiedź:**  
b) Kwadrat sumy: $4\pi^2$, suma kwadratów: $6\pi^2$.  
c) $[-\pi, 0] \cup [\pi, 2\pi]$

**Rozwiązanie krok po kroku:**  
a) **Charakterystyka wykresów w przedziale $[-\pi, 2\pi]$:**
- Wykres funkcji $f(x) = \sin x$:
  - Miejsca zerowe: $x \in \{-\pi, 0, \pi, 2\pi\}$.
  - Maksimum: $f\left(\frac{\pi}{2}\right) = 1$.
  - Minima: $f\left(-\frac{\pi}{2}\right) = -1$, $f\left(\frac{3\pi}{2}\right) = -1$.
- Wykres funkcji $g(x) = x^2 - \pi x = x(x - \pi)$:
  - Ramiona paraboli skierowane w górę ($a = 1 > 0$).
  - Miejsca zerowe: $x = 0$ oraz $x = \pi$.
  - Wierzchołek paraboli: $x_w = \frac{\pi}{2}$, $y_w = g\left(\frac{\pi}{2}\right) = \left(\frac{\pi}{2}\right)^2 - \pi \cdot \frac{\pi}{2} = -\frac{\pi^2}{4} \approx -2{,}47$.
  - Wartości na krańcach: $g(-\pi) = 2\pi^2 \approx 19{,}74$, $g(2\pi) = 2\pi^2 \approx 19{,}74$.

b) **Miejsca zerowe funkcji $f$ w przedziale $[-\pi, 2\pi]$:**
Są to: $x_1 = -\pi$, $x_2 = 0$, $x_3 = \pi$, $x_4 = 2\pi$.
- Suma miejsc zerowych:
$$S = (-\pi) + 0 + \pi + 2\pi = 2\pi$$
Kwadrat sumy:
$$S^2 = (2\pi)^2 = 4\pi^2$$
- Suma kwadratów miejsc zerowych:
$$(-\pi)^2 + 0^2 + \pi^2 + (2\pi)^2 = \pi^2 + 0 + \pi^2 + 4\pi^2 = 6\pi^2$$

c) **Nierówność $\sin x \le x^2 - \pi x$:**
- W przedziale $[-\pi, 0]$: $\sin x \le 0$, a $g(x) = x(x-\pi) \ge 0$ (iloczyn dwóch liczb niedodatnich). Stąd $\sin x \le 0 \le g(x)$ dla każdego $x \in [-\pi, 0]$.
- W przedziale $(0, \pi)$: $\sin x > 0$, a $g(x) < 0$ (parabola poniżej osi $OX$). Nierówność nie zachodzi.
- W przedziale $[\pi, 2\pi]$: $\sin x \le 0$, a $g(x) = x(x-\pi) \ge 0$ (iloczyn dwóch liczb nieujemnych). Stąd $\sin x \le 0 \le g(x)$ dla każdego $x \in [\pi, 2\pi]$.
- W punktach $x = 0$ i $x = \pi$ zachodzi równość $0 = 0$, która spełnia nierówność.

Zbiorem rozwiązań jest więc:
$$x \in [-\pi, 0] \cup [\pi, 2\pi]$$

---

### Zadanie 498 [CKE maj 2007, poziom rozszerzony]
**Treść zadania:**  
(0–4) Dana jest funkcja $f$ określona wzorem $f(x) = \frac{\sin^2 x - |\sin x|}{\sin x}$ dla $x \in (0, \pi) \cup (\pi, 2\pi)$.  
a) Naszkicuj wykres funkcji $f$.  
b) Wyznacz miejsca zerowe funkcji $f$.

**Odpowiedź:**  
a) $f(x) = \sin x - 1$ dla $x \in (0, \pi)$ oraz $f(x) = \sin x + 1$ dla $x \in (\pi, 2\pi)$.  
b) Miejsca zerowe: $x = \frac{\pi}{2}$ oraz $x = \frac{3\pi}{2}$.

**Rozwiązanie krok po kroku:**  
Dziedzina funkcji: $D = (0, \pi) \cup (\pi, 2\pi)$.

a) **Postać funkcji w poszczególnych przedziałach:**
- Dla $x \in (0, \pi)$: $\sin x > 0$, zatem $|\sin x| = \sin x$:
$$f(x) = \frac{\sin^2 x - \sin x}{\sin x} = \frac{\sin x(\sin x - 1)}{\sin x} = \sin x - 1$$
Wykres to wykres funkcji $\sin x$ przesunięty w dół o 1 jednostkę na przedziale $(0, \pi)$.  
Punkty krańcowe nie należą do wykresu (kółka otwarte): $(0, -1)$, $(\pi, -1)$.
Wierzchołek: $\left(\frac{\pi}{2}, 0\right)$.

- Dla $x \in (\pi, 2\pi)$: $\sin x < 0$, zatem $|\sin x| = -\sin x$:
$$f(x) = \frac{\sin^2 x - (-\sin x)}{\sin x} = \frac{\sin^2 x + \sin x}{\sin x} = \frac{\sin x(\sin x + 1)}{\sin x} = \sin x + 1$$
Wykres to wykres funkcji $\sin x$ przesunięty w górę o 1 jednostkę na przedziale $(\pi, 2\pi)$.  
Punkty krańcowe otwarte: $(\pi, 1)$, $(2\pi, 1)$.
Wierzchołek: $\left(\frac{3\pi}{2}, 0\right)$.

b) **Wyznaczenie miejsc zerowych:**
- Dla $x \in (0, \pi)$:
$$\sin x - 1 = 0 \iff \sin x = 1 \implies x = \frac{\pi}{2} \in (0, \pi)$$
- Dla $x \in (\pi, 2\pi)$:
$$\sin x + 1 = 0 \iff \sin x = -1 \implies x = \frac{3\pi}{2} \in (\pi, 2\pi)$$

Miejscami zerowymi są zatem $x = \frac{\pi}{2}$ oraz $x = \frac{3\pi}{2}$.

---

### Zadanie 499 [R]
**Treść zadania:**  
Wyznacz zbiór wartości funkcji $f(x) = 4\sin^2 x - 4\sin x + 5$.

**Odpowiedź:**  
Zbiór wartości: $[4, 13]$.

**Rozwiązanie krok po kroku:**  
1. Podstawiamy zmienną pomocniczą $t = \sin x$. Ponieważ $x \in \mathbb{R}$, zbiorem wartości sinusa jest przedział $[-1, 1]$, czyli $t \in [-1, 1]$.
2. Badamy funkcję kwadratową:
$$g(t) = 4t^2 - 4t + 5 \quad \text{dla } t \in [-1, 1]$$
Ponieważ współczynnik $a = 4 > 0$, ramiona paraboli są skierowane w górę.
3. Wyznaczamy pierwszą współrzędną wierzchołka paraboli:
$$t_w = -\frac{b}{2a} = -\frac{-4}{2 \cdot 4} = \frac{4}{8} = 0{,}5$$
Wierzchołek należy do rozpatrywanego przedziału ($0{,}5 \in [-1, 1]$), więc najmniejsza wartość funkcji wynosi:
$$g(0{,}5) = 4(0{,}5)^2 - 4(0{,}5) + 5 = 4 \cdot 0{,}25 - 2 + 5 = 1 - 2 + 5 = 4$$
4. Wartość największa osiągana jest na jednym z brzegów przedziału $[-1, 1]$:
$$g(-1) = 4(-1)^2 - 4(-1) + 5 = 4 + 4 + 5 = 13$$
$$g(1) = 4(1)^2 - 4(1) + 5 = 4 - 4 + 5 = 5$$
Większa z tych wartości to $g(-1) = 13$.
5. Zatem zbiorem wartości funkcji $g(t)$, a zarazem funkcji $f(x)$, jest przedział domknięty:
$$Z_w = [4, 13]$$

---

### Zadanie 500
**Treść zadania:**  
Znajdź najmniejszą i największą wartość funkcji $f(x) = -\cos^2 x - 4\cos x + 5$.

**Odpowiedź:**  
Najmniejsza wartość: $0$ (dla $\cos x = 1$), największa wartość: $8$ (dla $\cos x = -1$).

**Rozwiązanie krok po kroku:**  
1. Podstawiamy $t = \cos x$, gdzie $t \in [-1, 1]$.
2. Rozpatrujemy funkcję kwadratową:
$$g(t) = -t^2 - 4t + 5 \quad \text{dla } t \in [-1, 1]$$
Ramiona paraboli są skierowane w dół ($a = -1 < 0$).
3. Wyznaczamy odciętą wierzchołka paraboli:
$$t_w = -\frac{b}{2a} = -\frac{-4}{2 \cdot (-1)} = \frac{4}{-2} = -2$$
Zauważamy, że $t_w = -2 \notin [-1, 1]$.
4. Ponieważ $t_w = -2 < -1$, dla $t \ge -2$ funkcja $g(t)$ jest ściśle malejąca. Zatem na przedziale $[-1, 1]$ funkcja osiąga swoje wartości skrajne na krańcach:
- Wartość największa (dla $t = -1$, czyli $\cos x = -1$):
$$g(-1) = -(-1)^2 - 4(-1) + 5 = -1 + 4 + 5 = 8$$
- Wartość najmniejsza (dla $t = 1$, czyli $\cos x = 1$):
$$g(1) = -(1)^2 - 4(1) + 5 = -1 - 4 + 5 = 0$$
Ostatecznie najmniejsza wartość funkcji wynosi $0$, a największa $8$.

---

### Zadanie 501 [CKE maj 2017, poziom rozszerzony]
**Treść zadania:**  
(0–4) Rozwiąż równanie $\cos 2x + 3\cos x = -2$ w przedziale $[0, 2\pi]$.

**Odpowiedź:**  
$x = \pi$ lub $x = \frac{2\pi}{3}$ lub $x = \frac{4\pi}{3}$

**Rozwiązanie krok po kroku:**  
1. Stosujemy wzór na cosinus kąta podwojonego $\cos 2x = 2\cos^2 x - 1$:
$$2\cos^2 x - 1 + 3\cos x = -2$$
$$2\cos^2 x + 3\cos x + 1 = 0$$
2. Wprowadzamy zmienną pomocniczą $t = \cos x$, gdzie $t \in [-1, 1]$:
$$2t^2 + 3t + 1 = 0$$
$$\Delta = 3^2 - 4 \cdot 2 \cdot 1 = 9 - 8 = 1, \quad \sqrt{\Delta} = 1$$
$$t_1 = \frac{-3 - 1}{4} = -1, \quad t_2 = \frac{-3 + 1}{4} = -\frac{1}{2}$$
Oba pierwiastki należą do przedziału $[-1, 1]$.
3. Wracamy do podstawienia w przedziale $[0, 2\pi]$:
- Dla $\cos x = -1$:
$$x = \pi$$
- Dla $\cos x = -\frac{1}{2}$:
W I ćwiartce $\cos\frac{\pi}{3} = \frac{1}{2}$. Cosinus jest ujemny w II i III ćwiartce:
$$x = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$$
$$x = \pi + \frac{\pi}{3} = \frac{4\pi}{3}$$
4. Rozwiązaniami równania w zadanym przedziale są:
$$x \in \left\{\frac{2\pi}{3}, \pi, \frac{4\pi}{3}\right\}$$

---

### Zadanie 502 [CKE maj 2020, poziom rozszerzony]
**Treść zadania:**  
(0–4) Rozwiąż równanie $3\cos 2x + 10\cos^2 x = 24\sin x - 3$ dla $x \in [0, 2\pi]$.

**Odpowiedź:**  
$x = \frac{\pi}{6}$ lub $x = \frac{5\pi}{6}$

**Rozwiązanie krok po kroku:**  
1. Sprowadzamy równanie do jednej funkcji $\sin x$, korzystając ze wzorów $\cos 2x = 1 - 2\sin^2 x$ oraz $\cos^2 x = 1 - \sin^2 x$:
$$3(1 - 2\sin^2 x) + 10(1 - \sin^2 x) = 24\sin x - 3$$
$$3 - 6\sin^2 x + 10 - 10\sin^2 x = 24\sin x - 3$$
$$13 - 16\sin^2 x = 24\sin x - 3$$
2. Porządkujemy wyrazy:
$$16\sin^2 x + 24\sin x - 16 = 0$$
Dzielimy obie strony równania przez 8:
$$2\sin^2 x + 3\sin x - 2 = 0$$
3. Wprowadzamy zmienną $t = \sin x$, gdzie $t \in [-1, 1]$:
$$2t^2 + 3t - 2 = 0$$
$$\Delta = 3^2 - 4 \cdot 2 \cdot (-2) = 9 + 16 = 25, \quad \sqrt{\Delta} = 5$$
$$t_1 = \frac{-3 - 5}{4} = -2 \notin [-1, 1] \quad \text{(brak rozwiązań)}$$
$$t_2 = \frac{-3 + 5}{4} = \frac{2}{4} = \frac{1}{2} \in [-1, 1]$$
4. Rozwiązujemy $\sin x = \frac{1}{2}$ dla $x \in [0, 2\pi]$:
W I ćwiartce:
$$x = \frac{\pi}{6}$$
W II ćwiartce:
$$x = \pi - \frac{\pi}{6} = \frac{5\pi}{6}$$
Zatem rozwiązaniami w przedziale $[0, 2\pi]$ są $x = \frac{\pi}{6}$ oraz $x = \frac{5\pi}{6}$.

---

### Zadanie 503 [W]
**Treść zadania:**  
Rozwiąż równanie $2\sin x + \sqrt{3}\operatorname{tg} x = 0$.

**Odpowiedź:**  
$x = k\pi$ lub $x = -\frac{5\pi}{6} + 2k\pi$ lub $x = \frac{5\pi}{6} + 2k\pi$, gdzie $k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. Dziedzina równania: $\cos x \neq 0 \iff x \neq \frac{\pi}{2} + k\pi$, gdzie $k \in \mathbb{Z}$.
2. Zapisujemy $\operatorname{tg} x = \frac{\sin x}{\cos x}$:
$$2\sin x + \sqrt{3} \cdot \frac{\sin x}{\cos x} = 0$$
3. Wyłączamy $\sin x$ przed nawias:
$$\sin x \left(2 + \frac{\sqrt{3}}{\cos x}\right) = 0$$
4. Rozpatrujemy dwa przypadki:
- **Przypadek 1:**
$$\sin x = 0 \iff x = k\pi, \quad k \in \mathbb{Z}$$
Dla tych wartości $\cos(k\pi) = \pm 1 \neq 0$, więc należą one do dziedziny.
- **Przypadek 2:**
$$2 + \frac{\sqrt{3}}{\cos x} = 0 \iff \frac{\sqrt{3}}{\cos x} = -2 \iff \cos x = -\frac{\sqrt{3}}{2}$$
Rozwiązujemy to równanie w zbiorze liczb rzeczywistych:
$$x = \frac{5\pi}{6} + 2k\pi \quad \text{lub} \quad x = -\frac{5\pi}{6} + 2k\pi, \quad k \in \mathbb{Z}$$
(Wartości te również należą do dziedziny, bo $\cos x \neq 0$).
5. Ostatecznie zbiorem rozwiązań są:
$$x = k\pi \quad \text{lub} \quad x = -\frac{5\pi}{6} + 2k\pi \quad \text{lub} \quad x = \frac{5\pi}{6} + 2k\pi, \quad k \in \mathbb{Z}$$

---

### Zadanie 504 [W]
**Treść zadania:**  
Rozwiąż równanie $\operatorname{tg}^4 x - 2\operatorname{tg}^3 x - 2\operatorname{tg}^2 x + 6\operatorname{tg} x - 3 = 0$.

**Odpowiedź:**  
$x = \frac{\pi}{4} + k\pi$ lub $x = -\frac{\pi}{3} + k\pi$ lub $x = \frac{\pi}{3} + k\pi$, gdzie $k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. Dziedzina: $x \neq \frac{\pi}{2} + k\pi$, gdzie $k \in \mathbb{Z}$.
2. Wprowadzamy zmienną pomocniczą $t = \operatorname{tg} x$, gdzie $t \in \mathbb{R}$:
$$t^4 - 2t^3 - 2t^2 + 6t - 3 = 0$$
3. Rozkładamy wielomian na czynniki metodą grupowania:
$$t^4 - 2t^3 - 2t^2 + 6t - 3 = (t^4 - t^3) - (t^3 - t^2) - (3t^2 - 3t) + (3t - 3)$$
$$= t^3(t-1) - t^2(t-1) - 3t(t-1) + 3(t-1) = (t-1)(t^3 - t^2 - 3t + 3)$$
Grupujemy drugi nawias:
$$t^3 - t^2 - 3t + 3 = t^2(t-1) - 3(t-1) = (t-1)(t^2 - 3)$$
Otrzymujemy postać iloczynową:
$$(t-1)^2(t^2 - 3) = 0$$
4. Wyznaczamy pierwiastki:
- $(t-1)^2 = 0 \iff t = 1$
- $t^2 - 3 = 0 \iff t = \sqrt{3}$ lub $t = -\sqrt{3}$
5. Rozwiązujemy równania elementarne dla $x$:
- $\operatorname{tg} x = 1 \implies x = \frac{\pi}{4} + k\pi, \quad k \in \mathbb{Z}$
- $\operatorname{tg} x = \sqrt{3} \implies x = \frac{\pi}{3} + k\pi, \quad k \in \mathbb{Z}$
- $\operatorname{tg} x = -\sqrt{3} \implies x = -\frac{\pi}{3} + k\pi, \quad k \in \mathbb{Z}$
Wszystkie te wartości należą do dziedziny równania.
6. Podsumowując:
$$x = \frac{\pi}{4} + k\pi \quad \text{lub} \quad x = -\frac{\pi}{3} + k\pi \quad \text{lub} \quad x = \frac{\pi}{3} + k\pi, \quad k \in \mathbb{Z}$$

---

### Zadanie 505
**Treść zadania:**  
Rozwiąż równanie $\sin x \cos x + \operatorname{tg} x = 2{,}5\sin x$.

**Odpowiedź:**  
$x = k\pi$ lub $x = -\frac{\pi}{3} + 2k\pi$ lub $x = \frac{\pi}{3} + 2k\pi$, gdzie $k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. Dziedzina równania: $\cos x \neq 0 \iff x \neq \frac{\pi}{2} + k\pi$, $k \in \mathbb{Z}$.
2. Zastępujemy $\operatorname{tg} x$ przez $\frac{\sin x}{\cos x}$ i przenosimy wyrazy na jedną stronę:
$$\sin x \cos x + \frac{\sin x}{\cos x} - \frac{5}{2}\sin x = 0$$
3. Wyłączamy $\sin x$ przed nawias:
$$\sin x \left(\cos x + \frac{1}{\cos x} - \frac{5}{2}\right) = 0$$
4. Rozpatrujemy dwa przypadki:
- **Przypadek 1:**
$$\sin x = 0 \iff x = k\pi, \quad k \in \mathbb{Z}$$
(Spełnia założenie $\cos x \neq 0$).
- **Przypadek 2:**
$$\cos x + \frac{1}{\cos x} - \frac{5}{2} = 0$$
Mnożymy obustronnie przez $2\cos x \neq 0$:
$$2\cos^2 x - 5\cos x + 2 = 0$$
Podstawiamy $u = \cos x$, gdzie $u \in [-1, 1]$:
$$2u^2 - 5u + 2 = 0$$
$$\Delta = (-5)^2 - 4 \cdot 2 \cdot 2 = 25 - 16 = 9, \quad \sqrt{\Delta} = 3$$
$$u_1 = \frac{5 - 3}{4} = \frac{2}{4} = \frac{1}{2}$$
$$u_2 = \frac{5 + 3}{4} = 2 \notin [-1, 1] \quad \text{(brak rozwiązań)}$$
Rozwiązujemy $\cos x = \frac{1}{2}$:
$$x = \frac{\pi}{3} + 2k\pi \quad \text{lub} \quad x = -\frac{\pi}{3} + 2k\pi, \quad k \in \mathbb{Z}$$
5. Zestawiając wszystkie serie rozwiązań:
$$x = k\pi \quad \text{lub} \quad x = -\frac{\pi}{3} + 2k\pi \quad \text{lub} \quad x = \frac{\pi}{3} + 2k\pi, \quad k \in \mathbb{Z}$$

---


<!-- SEKCJA ZADAŃ 3 -->
# Trygonometria — Zadania Maturalne (506 – 546)

---

### Zadanie 506 [W]
**Treść zadania:**  
Rozwiąż równanie $\sin x - \cos x + 1 = \sin x \cos x$.

**Odpowiedź:**  
$x = 2k\pi \quad \text{lub} \quad x = -\frac{\pi}{2} + 2k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. Przenosimy wszystkie wyrażenia na lewą stronę równania:
   $$\sin x - \cos x + 1 - \sin x \cos x = 0$$
2. Stosujemy metodę grupowania wyrazów:
   $$(\sin x - \sin x \cos x) + (1 - \cos x) = 0$$
   $$\sin x(1 - \cos x) + 1 \cdot (1 - \cos x) = 0$$
   $$(1 - \cos x)(\sin x + 1) = 0$$
3. Iloczyn jest równy zero, gdy co najmniej jeden z czynników jest równy zero:
   - $1 - \cos x = 0 \iff \cos x = 1 \iff x = 2k\pi, \; k \in \mathbb{Z}$
   - $\sin x + 1 = 0 \iff \sin x = -1 \iff x = -\frac{\pi}{2} + 2k\pi, \; k \in \mathbb{Z}$
4. Podsumowanie:
   $$x = 2k\pi \quad \text{lub} \quad x = -\frac{\pi}{2} + 2k\pi, \quad k \in \mathbb{Z}$$

---

### Zadanie 507
**Treść zadania:**  
Rozwiąż równanie $\sin x \cdot \operatorname{tg} x - \sqrt{3} = \operatorname{tg} x - \sqrt{3}\sin x$.

**Odpowiedź:**  
$x = -\frac{\pi}{3} + k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. **Dziedzina równania:** Ze względu na występowanie funkcji tangens zakładamy:
   $$\cos x \neq 0 \iff x \neq \frac{\pi}{2} + k\pi, \quad k \in \mathbb{Z}$$
2. Przenosimy wszystkie wyrazy na lewą stronę:
   $$\sin x \cdot \operatorname{tg} x + \sqrt{3}\sin x - \operatorname{tg} x - \sqrt{3} = 0$$
3. Grupujemy wyrazy:
   $$\sin x(\operatorname{tg} x + \sqrt{3}) - 1 \cdot (\operatorname{tg} x + \sqrt{3}) = 0$$
   $$(\operatorname{tg} x + \sqrt{3})(\sin x - 1) = 0$$
4. Przyrównujemy czynniki do zera:
   - $\operatorname{tg} x + \sqrt{3} = 0 \iff \operatorname{tg} x = -\sqrt{3} \iff x = -\frac{\pi}{3} + k\pi, \; k \in \mathbb{Z}$
   - $\sin x - 1 = 0 \iff \sin x = 1 \iff x = \frac{\pi}{2} + 2k\pi, \; k \in \mathbb{Z}$
5. **Uwzględnienie dziedziny:** Dla $x = \frac{\pi}{2} + 2k\pi$ funkcja $\cos x = 0$, więc $\operatorname{tg} x$ nie istnieje. Rozwiązania te odrzucamy jako nienależące do dziedziny.
6. Ostateczna odpowiedź:
   $$x = -\frac{\pi}{3} + k\pi, \quad k \in \mathbb{Z}$$

---

### Zadanie 508 [(0-4) CKE, matura - poziom rozszerzony, czerwiec 2020]
**Treść zadania:**  
Rozwiąż równanie $4\sin^3 x + \sin 2x = 2\sin^2 x \cdot (2\cos x + 1)$.

**Odpowiedź:**  
$x = k\pi \lor x = \frac{\pi}{4} + k\pi \lor x = \frac{\pi}{6} + 2k\pi \lor x = \frac{5\pi}{6} + 2k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.  
*(Uwaga: W oficjalnym kluczu podręcznika podano $x = -\frac{\pi}{4} + k\pi$ zamiast $\frac{\pi}{4} + k\pi$, co odpowiada literówce w znaku w druku).*

**Rozwiązanie krok po kroku:**  
1. Korzystamy ze wzoru na sinus podwojonego kąta $\sin 2x = 2\sin x \cos x$.
2. Wymnażamy prawą stronę i przenosimy wszystkie wyrazy na lewą stronę:
   $$4\sin^3 x + 2\sin x \cos x = 4\sin^2 x \cos x + 2\sin^2 x$$
   $$4\sin^3 x - 4\sin^2 x \cos x - 2\sin^2 x + 2\sin x \cos x = 0$$
3. Grupujemy wyrazami:
   $$4\sin^2 x(\sin x - \cos x) - 2\sin x(\sin x - \cos x) = 0$$
   $$(\sin x - \cos x)(4\sin^2 x - 2\sin x) = 0$$
   $$2\sin x(\sin x - \cos x)(2\sin x - 1) = 0$$
4. Przyrównujemy czynniki do zera:
   - $2\sin x = 0 \iff \sin x = 0 \iff x = k\pi, \; k \in \mathbb{Z}$
   - $2\sin x - 1 = 0 \iff \sin x = \frac{1}{2} \iff x = \frac{\pi}{6} + 2k\pi \lor x = \frac{5\pi}{6} + 2k\pi, \; k \in \mathbb{Z}$
   - $\sin x - \cos x = 0 \iff \sin x = \cos x$. Dzieląc przez $\cos x \neq 0$ (dla $\cos x = 0$ równość nie zachodzi):
     $$\operatorname{tg} x = 1 \iff x = \frac{\pi}{4} + k\pi, \; k \in \mathbb{Z}$$

---

### Zadanie 509
**Treść zadania:**  
Rozwiąż równanie $\left(\operatorname{tg} x + \frac{1}{\cos x}\right)^2 + \left(\frac{1}{\cos x} - \operatorname{tg} x\right)^2 = 14$.

**Odpowiedź:**  
$x = -\frac{\pi}{3} + k\pi \quad \text{lub} \quad x = \frac{\pi}{3} + k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. **Dziedzina równania:** $\cos x \neq 0 \iff x \neq \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$.
2. Rozwijamy kwadraty sumy i różnicy po lewej stronie:
   $$\left(\operatorname{tg} x + \frac{1}{\cos x}\right)^2 = \operatorname{tg}^2 x + \frac{2\operatorname{tg} x}{\cos x} + \frac{1}{\cos^2 x}$$
   $$\left(\frac{1}{\cos x} - \operatorname{tg} x\right)^2 = \frac{1}{\cos^2 x} - \frac{2\operatorname{tg} x}{\cos x} + \operatorname{tg}^2 x$$
3. Sumujemy oba wyrażenia (wyrazy mieszane się redukują):
   $$2\operatorname{tg}^2 x + \frac{2}{\cos^2 x} = 14$$
   Dzielimy obustronnie przez 2:
   $$\operatorname{tg}^2 x + \frac{1}{\cos^2 x} = 7$$
4. Stosujemy tożsamość trygonometryczną:
   $$\frac{1}{\cos^2 x} = \frac{\sin^2 x + \cos^2 x}{\cos^2 x} = \operatorname{tg}^2 x + 1$$
5. Podstawiamy do równania:
   $$\operatorname{tg}^2 x + (\operatorname{tg}^2 x + 1) = 7 \iff 2\operatorname{tg}^2 x = 6 \iff \operatorname{tg}^2 x = 3$$
6. Stąd:
   $$\operatorname{tg} x = \sqrt{3} \implies x = \frac{\pi}{3} + k\pi, \; k \in \mathbb{Z}$$
   $$\operatorname{tg} x = -\sqrt{3} \implies x = -\frac{\pi}{3} + k\pi, \; k \in \mathbb{Z}$$
   Obie serie rozwiązań należą do dziedziny.

---

### Zadanie 510 [R]
**Treść zadania:**  
Rozwiąż równanie $\frac{\sin x}{\cos x} + \frac{\cos x}{\sin x} = \frac{8\sin 2x}{3}$.

**Odpowiedź:**  
$x = \frac{\pi}{6} + k\pi \lor x = \frac{\pi}{3} + k\pi \lor x = -\frac{\pi}{6} + k\pi \lor x = -\frac{\pi}{3} + k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. **Założenia:**
   $$\cos x \neq 0 \iff x \neq \frac{\pi}{2} + k\pi \quad \text{oraz} \quad \sin x \neq 0 \iff x \neq k\pi$$
   Czyli:
   $$x \neq \frac{k\pi}{2}, \quad k \in \mathbb{Z}$$
2. Sprowadzamy lewą stronę do wspólnego mianownika:
   $$\frac{\sin x}{\cos x} + \frac{\cos x}{\sin x} = \frac{\sin^2 x + \cos^2 x}{\sin x \cos x} = \frac{1}{\sin x \cos x}$$
3. Ponieważ $\sin 2x = 2\sin x \cos x$, mamy $\sin x \cos x = \frac{1}{2}\sin 2x$:
   $$\frac{1}{\frac{1}{2}\sin 2x} = \frac{2}{\sin 2x}$$
4. Wstawiamy do równania:
   $$\frac{2}{\sin 2x} = \frac{8\sin 2x}{3}$$
   Mnożymy na krzyż (dla $\sin 2x \neq 0$):
   $$8\sin^2 2x = 6 \iff \sin^2 2x = \frac{6}{8} = \frac{3}{4}$$
5. Zatem:
   $$\sin 2x = \frac{\sqrt{3}}{2} \quad \lor \quad \sin 2x = -\frac{\sqrt{3}}{2}$$
   - Dla $\sin 2x = \frac{\sqrt{3}}{2}$:
     $$2x = \frac{\pi}{3} + 2k\pi \iff x = \frac{\pi}{6} + k\pi$$
     $$2x = \frac{2\pi}{3} + 2k\pi \iff x = \frac{\pi}{3} + k\pi$$
   - Dla $\sin 2x = -\frac{\sqrt{3}}{2}$:
     $$2x = -\frac{\pi}{3} + 2k\pi \iff x = -\frac{\pi}{6} + k\pi$$
     $$2x = -\frac{2\pi}{3} + 2k\pi \iff x = -\frac{\pi}{3} + k\pi$$
   Wszystkie wyznaczone rozwiązania spełniają założenie $x \neq \frac{k\pi}{2}$.

---

### Zadanie 511
**Treść zadania:**  
Rozwiąż równanie $\frac{\cos x}{1 - \sin x} + \frac{1 - \sin x}{\cos x} = 4$.

**Odpowiedź:**  
$x = -\frac{\pi}{3} + 2k\pi \quad \text{lub} \quad x = \frac{\pi}{3} + 2k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. **Dziedzina równania:**
   $$1 - \sin x \neq 0 \iff \sin x \neq 1 \iff x \neq \frac{\pi}{2} + 2k\pi$$
   $$\cos x \neq 0 \iff x \neq \frac{\pi}{2} + k\pi$$
   Łącznie: $x \neq \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$.
2. Sprowadzamy lewą stronę do wspólnego mianownika:
   $$\frac{\cos^2 x + (1 - \sin x)^2}{\cos x(1 - \sin x)} = \frac{\cos^2 x + 1 - 2\sin x + \sin^2 x}{\cos x(1 - \sin x)}$$
   Korzystając z jedynki trygonometrycznej $\cos^2 x + \sin^2 x = 1$:
   $$= \frac{2 - 2\sin x}{\cos x(1 - \sin x)} = \frac{2(1 - \sin x)}{\cos x(1 - \sin x)} = \frac{2}{\cos x}$$
3. Równanie przyjmuje postać:
   $$\frac{2}{\cos x} = 4 \iff \cos x = \frac{1}{2}$$
4. Rozwiązanie równania elementarnego:
   $$x = \frac{\pi}{3} + 2k\pi \quad \text{lub} \quad x = -\frac{\pi}{3} + 2k\pi, \quad k \in \mathbb{Z}$$
   Obie serie należą do dziedziny.

---

### Zadanie 512 [W]
**Treść zadania:**  
Rozwiąż równanie $2(\sin x + \cos x) = \operatorname{tg} x + 1$.

**Odpowiedź:**  
$x = -\frac{\pi}{3} + 2k\pi \lor x = \frac{\pi}{3} + 2k\pi \lor x = -\frac{\pi}{4} + k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. **Dziedzina:** $\cos x \neq 0 \iff x \neq \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$.
2. Przekształcamy prawą stronę równania:
   $$\operatorname{tg} x + 1 = \frac{\sin x}{\cos x} + 1 = \frac{\sin x + \cos x}{\cos x}$$
3. Przenosimy na lewą stronę i wyłączamy wspólny czynnik:
   $$2(\sin x + \cos x) - \frac{\sin x + \cos x}{\cos x} = 0$$
   $$(\sin x + \cos x)\left(2 - \frac{1}{\cos x}\right) = 0$$
4. Przyrównujemy czynniki do zera:
   - $\sin x + \cos x = 0 \iff \sin x = -\cos x \iff \operatorname{tg} x = -1 \iff x = -\frac{\pi}{4} + k\pi, \; k \in \mathbb{Z}$
   - $2 - \frac{1}{\cos x} = 0 \iff \cos x = \frac{1}{2} \iff x = \frac{\pi}{3} + 2k\pi \lor x = -\frac{\pi}{3} + 2k\pi, \; k \in \mathbb{Z}$
5. Wszystkie rozwiązania należą do dziedziny.

---

### Zadanie 513
**Treść zadania:**  
Rozwiąż równanie $(\cos x - \sin x)^2 + \operatorname{tg} x = 2\sin^2 x$.

**Odpowiedź:**  
$x = \frac{\pi}{4} + \frac{k\pi}{2}, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. **Dziedzina:** $\cos x \neq 0 \iff x \neq \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$.
2. Rozwijamy kwadrat i wstawiamy $\operatorname{tg} x = \frac{\sin x}{\cos x}$:
   $$\cos^2 x - 2\sin x \cos x + \sin^2 x + \frac{\sin x}{\cos x} - 2\sin^2 x = 0$$
   $$\cos^2 x - \sin^2 x - 2\sin x \cos x + \frac{\sin x}{\cos x} = 0$$
3. Mnożymy obustronnie przez $\cos x \neq 0$:
   $$\cos x(\cos^2 x - \sin^2 x) - 2\sin x \cos^2 x + \sin x = 0$$
4. Zauważmy, że:
   $$\sin x - 2\sin x \cos^2 x = \sin x(1 - 2\cos^2 x) = -\sin x(\cos^2 x - \sin^2 x)$$
   Wstawiając to:
   $$\cos x(\cos^2 x - \sin^2 x) - \sin x(\cos^2 x - \sin^2 x) = 0$$
   $$(\cos x - \sin x)(\cos^2 x - \sin^2 x) = 0$$
   $$(\cos x - \sin x)^2 (\cos x + \sin x) = 0$$
5. Przyrównujemy czynniki do zera:
   - $\cos x - \sin x = 0 \iff \operatorname{tg} x = 1 \iff x = \frac{\pi}{4} + k\pi, \; k \in \mathbb{Z}$
   - $\cos x + \sin x = 0 \iff \operatorname{tg} x = -1 \iff x = -\frac{\pi}{4} + k\pi, \; k \in \mathbb{Z}$
6. Łącząc obie serie (punkty na okręgu co $\frac{\pi}{2}$):
   $$x = \frac{\pi}{4} + \frac{k\pi}{2}, \quad k \in \mathbb{Z}$$

---

### Zadanie 514
**Treść zadania:**  
Rozwiąż równanie $(1 - \operatorname{tg} x) \cdot (1 + \sin 2x) = 1 + \operatorname{tg} x$.

**Odpowiedź:**  
$x = -\frac{\pi}{4} + k\pi \quad \text{lub} \quad x = k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. **Dziedzina:** $\cos x \neq 0 \iff x \neq \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$.
2. Przekształcamy wyrażenia:
   $$1 + \sin 2x = \sin^2 x + 2\sin x \cos x + \cos^2 x = (\cos x + \sin x)^2$$
   $$1 - \operatorname{tg} x = \frac{\cos x - \sin x}{\cos x}, \qquad 1 + \operatorname{tg} x = \frac{\cos x + \sin x}{\cos x}$$
3. Równanie ma postać:
   $$\frac{\cos x - \sin x}{\cos x} \cdot (\cos x + \sin x)^2 = \frac{\cos x + \sin x}{\cos x}$$
4. Mnożymy przez $\cos x$ i przenosimy wszystko na lewą stronę:
   $$(\cos x + \sin x)\big[(\cos x - \sin x)(\cos x + \sin x) - 1\big] = 0$$
   $$(\cos x + \sin x)(\cos^2 x - \sin^2 x - 1) = 0$$
5. Korzystając z $\cos^2 x - 1 = -\sin^2 x$, otrzymujemy:
   $$(\cos x + \sin x)(-2\sin^2 x) = 0$$
6. Stąd:
   - $\sin x = 0 \iff x = k\pi, \; k \in \mathbb{Z}$
   - $\cos x + \sin x = 0 \iff \operatorname{tg} x = -1 \iff x = -\frac{\pi}{4} + k\pi, \; k \in \mathbb{Z}$
   Wszystkie rozwiązania należą do dziedziny.

---

### Zadanie 515 [* W]
**Treść zadania:**  
Rozwiąż równanie $\sin^3 x + \cos^3 x = 1$.

**Odpowiedź:**  
$x = 2k\pi \quad \text{lub} \quad x = \frac{\pi}{2} + 2k\pi, \quad \text{gdzie } k \text{ jest liczbą całkowitą}$.

**Rozwiązanie krok po kroku:**  
1. Zastępujemy liczbę $1$ po prawej stronie przez jedynkę trygonometryczną: $1 = \sin^2 x + \cos^2 x$:
   $$\sin^3 x + \cos^3 x = \sin^2 x + \cos^2 x$$
2. Przenosimy na lewą stronę i grupujemy:
   $$\sin^2 x(1 - \sin x) + \cos^2 x(1 - \cos x) = 0$$
3. Analiza znaków składników:
   Dla każdego $x \in \mathbb{R}$ zachodzi $\sin x \le 1$ oraz $\cos x \le 1$, co oznacza:
   $$1 - \sin x \ge 0 \quad \text{oraz} \quad 1 - \cos x \ge 0$$
   Ponadto $\sin^2 x \ge 0$ oraz $\cos^2 x \ge 0$.
4. Zatem oba składniki sumy są nieujemne. Ich suma wynosi zero wtedy i tylko wtedy, gdy oba składniki są jednocześnie równe zero:
   $$\begin{cases} \sin^2 x(1 - \sin x) = 0 \\ \cos^2 x(1 - \cos x) = 0 \end{cases}$$
5. Badamy możliwe przypadki:
   - $\sin x = 1 \implies 1 - \sin x = 0$, a wtedy z jedynki trygonometrycznej $\cos x = 0$, więc również $\cos^2 x(1 - \cos x) = 0$. Spełnione!  
     Stąd $x = \frac{\pi}{2} + 2k\pi, \; k \in \mathbb{Z}$.
   - $\cos x = 1 \implies 1 - \cos x = 0$, a wtedy $\sin x = 0$, więc również $\sin^2 x(1 - \sin x) = 0$. Spełnione!  
     Stąd $x = 2k\pi, \; k \in \mathbb{Z}$.
   - Gdyby $\sin x < 1$ i $\cos x < 1$, to ponieważ $\sin^2 x + \cos^2 x = 1$ (nie mogą być jednocześnie zerami), co najmniej jeden składnik byłby ściśle dodatni.
6. Ostatecznie:
   $$x = 2k\pi \quad \text{lub} \quad x = \frac{\pi}{2} + 2k\pi, \quad k \in \mathbb{Z}$$

---

### Zadanie 516 [(0-6) CKE, matura - poziom rozszerzony, maj 2018]
**Treść zadania:**  
Rozwiąż równanie $\sin 6x + \cos 3x = 2\sin 3x + 1$ w przedziale $[0, \pi]$.

**Odpowiedź:**  
$x = 0 \lor x = \frac{2\pi}{3} \lor x = \frac{7\pi}{18} \lor x = \frac{11\pi}{18}$.  
*(Uwaga: w druku odpowiedzi podręcznika omyłkowo wpisano $\frac{2\pi}{9}$ zamiast $\frac{2\pi}{3}$).*

**Rozwiązanie krok po kroku:**  
1. Stosujemy wzór na sinus podwojonego kąta: $\sin 6x = 2\sin 3x \cos 3x$.
2. Przenosimy wszystkie wyrazy na lewą stronę i grupujemy:
   $$2\sin 3x \cos 3x + \cos 3x - 2\sin 3x - 1 = 0$$
   $$\cos 3x(2\sin 3x + 1) - (2\sin 3x + 1) = 0$$
   $$(2\sin 3x + 1)(\cos 3x - 1) = 0$$
3. Przyrównujemy czynniki do zera:
   - $\cos 3x = 1 \iff 3x = 2k\pi \iff x = \frac{2k\pi}{3}, \; k \in \mathbb{Z}$
     W przedziale $[0, \pi]$:
     - dla $k = 0$: $x = 0$
     - dla $k = 1$: $x = \frac{2\pi}{3}$
   - $2\sin 3x + 1 = 0 \iff \sin 3x = -\frac{1}{2}$:
     - seria I: $3x = -\frac{\pi}{6} + 2k\pi \iff x = -\frac{\pi}{18} + \frac{2k\pi}{3} = \frac{12k - 1}{18}\pi$
       dla $k = 1$: $x = \frac{11\pi}{18} \in [0, \pi]$
     - seria II: $3x = \frac{7\pi}{6} + 2k\pi \iff x = \frac{7\pi}{18} + \frac{2k\pi}{3} = \frac{12k + 7}{18}\pi$
       dla $k = 0$: $x = \frac{7\pi}{18} \in [0, \pi]$
4. Wszystkie rozwiązania w przedziale $[0, \pi]$:
   $$x \in \left\{ 0, \; \frac{7\pi}{18}, \; \frac{11\pi}{18}, \; \frac{2\pi}{3} \right\}$$

---

### Zadanie 517
**Treść zadania:**  
Rozwiąż równanie $\cos 2x + \sin 2x + 1 = 0$.

**Odpowiedź:**  
$x = -\frac{1}{4}\pi + k\pi \quad \text{lub} \quad x = \frac{1}{2}\pi + k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. Stosujemy wzory: $\cos 2x = 2\cos^2 x - 1$ oraz $\sin 2x = 2\sin x \cos x$.
2. Wstawiamy do równania:
   $$(2\cos^2 x - 1) + 2\sin x \cos x + 1 = 0$$
   $$2\cos^2 x + 2\sin x \cos x = 0$$
3. Wyłączamy wspólny czynnik $2\cos x$:
   $$2\cos x(\cos x + \sin x) = 0$$
4. Rozwiązujemy alternatywę równań:
   - $\cos x = 0 \iff x = \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$
   - $\cos x + \sin x = 0 \iff \sin x = -\cos x \iff \operatorname{tg} x = -1 \iff x = -\frac{\pi}{4} + k\pi, \; k \in \mathbb{Z}$

---

### Zadanie 518 [W]
**Treść zadania:**  
Rozwiąż równanie $\frac{1 - \cos 8x}{1 + \operatorname{tg} x} = 0$.

**Odpowiedź:**  
$x = \frac{k\pi}{2} \lor x = \frac{\pi}{4} + k\pi, \quad \text{gdzie } k \in \mathbb{Z}$  
*(Uwaga: w ścisłym matematycznym ujęciu dziedziny funkcja $\operatorname{tg} x$ wymaga $\cos x \neq 0$, co eliminuje $x = \frac{\pi}{2} + k\pi$, dając $x = k\pi \lor x = \frac{\pi}{4} + k\pi$; odpowiedź powyższa jest oficjalnym zapisem z klucza podręcznika).*

**Rozwiązanie krok po kroku:**  
1. **Dziedzina równania:**
   - Istnienie tangensa: $\cos x \neq 0 \iff x \neq \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$
   - Mianownik niezerowy: $1 + \operatorname{tg} x \neq 0 \iff \operatorname{tg} x \neq -1 \iff x \neq -\frac{\pi}{4} + k\pi, \; k \in \mathbb{Z}$
2. Ułamek jest równy zero wtedy i tylko wtedy, gdy licznik jest równy zero:
   $$1 - \cos 8x = 0 \iff \cos 8x = 1$$
   $$8x = 2m\pi \iff x = \frac{m\pi}{4}, \quad m \in \mathbb{Z}$$
3. Wartości $x = \frac{m\pi}{4}$ w okresie $[0, \pi)$:
   - $m = 0 \implies x = 0$ (spełnia)
   - $m = 1 \implies x = \frac{\pi}{4}$ (spełnia)
   - $m = 2 \implies x = \frac{\pi}{2}$ ($\cos x = 0$ — brak tangensa)
   - $m = 3 \implies x = \frac{3\pi}{4}$ ($\operatorname{tg} x = -1$ — mianownik równy zero)
4. W kluczu odpowiedzi autorzy pominęli warunek $\cos x \neq 0$, wykluczając jedynie $1 + \operatorname{tg} x = 0$, co pozostawiło punkty $m \in \{0, 2\} \pmod 4$ jako $x = \frac{k\pi}{2}$ oraz $m = 1 \pmod 4$ jako $x = \frac{\pi}{4} + k\pi$.

---

### Zadanie 519 [W (0-4) CKE, matura - poziom rozszerzony, czerwiec 2017]
**Treść zadania:**  
Rozwiąż równanie $3\sin\left(x - \frac{\pi}{4}\right) + \cos\left(x + \frac{\pi}{4}\right) = 1$ w przedziale $[0; 2\pi]$.

**Odpowiedź:**  
$x = \frac{5\pi}{12} \quad \text{lub} \quad x = \frac{13\pi}{12}$.

**Rozwiązanie krok po kroku:**  
1. Zauważmy powiązanie między argumentami:
   $$x + \frac{\pi}{4} = \frac{\pi}{2} + \left(x - \frac{\pi}{4}\right)$$
2. Korzystamy ze wzoru redukcyjnego $\cos\left(\frac{\pi}{2} + \alpha\right) = -\sin\alpha$:
   $$\cos\left(x + \frac{\pi}{4}\right) = -\sin\left(x - \frac{\pi}{4}\right)$$
3. Wstawiamy do równania:
   $$3\sin\left(x - \frac{\pi}{4}\right) - \sin\left(x - \frac{\pi}{4}\right) = 1$$
   $$2\sin\left(x - \frac{\pi}{4}\right) = 1 \iff \sin\left(x - \frac{\pi}{4}\right) = \frac{1}{2}$$
4. Rozwiązujemy dla argumentu:
   - $x - \frac{\pi}{4} = \frac{\pi}{6} + 2k\pi \iff x = \frac{\pi}{4} + \frac{\pi}{6} + 2k\pi = \frac{5\pi}{12} + 2k\pi$
   - $x - \frac{\pi}{4} = \frac{5\pi}{6} + 2k\pi \iff x = \frac{\pi}{4} + \frac{5\pi}{6} + 2k\pi = \frac{13\pi}{12} + 2k\pi$
5. Wyznaczamy rozwiązania w przedziale $[0; 2\pi]$:
   - dla $k = 0$ w I serii: $x = \frac{5\pi}{12}$
   - dla $k = 0$ w II serii: $x = \frac{13\pi}{12}$
   Oba rozwiązania należą do zadanego przedziału.

---

### Zadanie 520 [W (0-4) CKE, matura - poziom rozszerzony, maj 2019]
**Treść zadania:**  
Rozwiąż równanie $\left[\sin\left(x - \frac{\pi}{3}\right) + \sin\left(x + \frac{\pi}{3}\right)\right]\cos x = \frac{1}{2}\sin x$.

**Odpowiedź:**  
$x = k\pi \lor x = \frac{\pi}{3} + 2k\pi \lor x = -\frac{\pi}{3} + 2k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. Stosujemy wzór na sumę sinusów $\sin\alpha + \sin\beta = 2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$:
   $$\sin\left(x - \frac{\pi}{3}\right) + \sin\left(x + \frac{\pi}{3}\right) = 2\sin x \cos\left(-\frac{\pi}{3}\right) = 2\sin x \cdot \frac{1}{2} = \sin x$$
2. Wstawiamy do równania:
   $$\sin x \cos x = \frac{1}{2}\sin x$$
3. Przenosimy na jedną stronę i wyłączamy $\sin x$:
   $$\sin x\left(\cos x - \frac{1}{2}\right) = 0$$
4. Przyrównujemy czynniki do zera:
   - $\sin x = 0 \iff x = k\pi, \; k \in \mathbb{Z}$
   - $\cos x - \frac{1}{2} = 0 \iff \cos x = \frac{1}{2} \iff x = \frac{\pi}{3} + 2k\pi \lor x = -\frac{\pi}{3} + 2k\pi, \; k \in \mathbb{Z}$

---

### Zadanie 521 [(0-4) CKE, matura - poziom rozszerzony, czerwiec 2019]
**Treść zadania:**  
Rozwiąż równanie $4\sin 7x \cos 2x = 2\sin 9x - 1$ w przedziale $[0; \pi]$.

**Odpowiedź:**  
$x = \frac{7\pi}{30} \lor x = \frac{11\pi}{30} \lor x = \frac{19\pi}{30} \lor x = \frac{23\pi}{30}$.

**Rozwiązanie krok po kroku:**  
1. Korzystamy ze wzoru na iloczyn sinusa i cosinusa: $2\sin\alpha\cos\beta = \sin(\alpha+\beta) + \sin(\alpha-\beta)$:
   $$4\sin 7x \cos 2x = 2 \cdot (2\sin 7x \cos 2x) = 2(\sin 9x + \sin 5x) = 2\sin 9x + 2\sin 5x$$
2. Podstawiamy do wyjściowego równania:
   $$2\sin 9x + 2\sin 5x = 2\sin 9x - 1$$
3. Redukujemy wyraz $2\sin 9x$:
   $$2\sin 5x = -1 \iff \sin 5x = -\frac{1}{2}$$
4. Rozwiązujemy dla $5x$:
   - $5x = -\frac{\pi}{6} + 2k\pi \iff x = -\frac{\pi}{30} + \frac{2k\pi}{5}$
   - $5x = \frac{7\pi}{6} + 2k\pi \iff x = \frac{7\pi}{30} + \frac{2k\pi}{5}$
5. Wyznaczamy rozwiązania w przedziale $[0, \pi]$:
   - Z pierwszej serii:
     - dla $k = 1$: $x = -\frac{\pi}{30} + \frac{12\pi}{30} = \frac{11\pi}{30}$
     - dla $k = 2$: $x = -\frac{\pi}{30} + \frac{24\pi}{30} = \frac{23\pi}{30}$
   - Z drugiej serii:
     - dla $k = 0$: $x = \frac{7\pi}{30}$
     - dla $k = 1$: $x = \frac{7\pi}{30} + \frac{12\pi}{30} = \frac{19\pi}{30}$
6. Ostatecznie:
   $$x \in \left\{ \frac{7\pi}{30}, \; \frac{11\pi}{30}, \; \frac{19\pi}{30}, \; \frac{23\pi}{30} \right\}$$

---

### Zadanie 522 [(0-4) CKE, matura - poziom rozszerzony, maj 2014]
**Treść zadania:**  
Rozwiąż równanie $\sqrt{3}\cdot\cos x = 1 + \sin x$ w przedziale $[0; 2\pi]$.

**Odpowiedź:**  
$x = \frac{\pi}{6} \quad \text{lub} \quad x = \frac{3\pi}{2}$.  
*(Zadanie pominięte w sekcji odpowiedzi podręcznika; rozwiązanie w pełni zgodne z oficjalnym kluczem CKE).*

**Rozwiązanie krok po kroku:**  
1. Przenosimy wyrazy z funkcjami trygonometrycznymi na lewą stronę:
   $$\sqrt{3}\cos x - \sin x = 1$$
2. Dzielimy obustronnie przez 2:
   $$\frac{\sqrt{3}}{2}\cos x - \frac{1}{2}\sin x = \frac{1}{2}$$
3. Zauważmy, że $\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$ oraz $\sin\frac{\pi}{6} = \frac{1}{2}$. Korzystamy ze wzoru na cosinus sumy:
   $$\cos\left(x + \frac{\pi}{6}\right) = \frac{1}{2}$$
4. Dla $x \in [0, 2\pi]$ mamy $x + \frac{\pi}{6} \in \left[\frac{\pi}{6}, \frac{13\pi}{6}\right]$.
   W tym przedziale:
   - $x + \frac{\pi}{6} = \frac{\pi}{3} \iff x = \frac{\pi}{6}$
   - $x + \frac{\pi}{6} = \frac{5\pi}{3} \iff x = \frac{5\pi}{3} - \frac{\pi}{6} = \frac{9\pi}{6} = \frac{3\pi}{2}$
5. Sprawdzenie:
   - dla $x = \frac{\pi}{6}$: $L = \sqrt{3} \cdot \frac{\sqrt{3}}{2} = \frac{3}{2}$, $P = 1 + \frac{1}{2} = \frac{3}{2}$ ($L = P$)
   - dla $x = \frac{3\pi}{2}$: $L = \sqrt{3} \cdot 0 = 0$, $P = 1 + (-1) = 0$ ($L = P$)
6. Ostateczne rozwiązania w przedziale $[0; 2\pi]$:
   $$x = \frac{\pi}{6} \quad \text{lub} \quad x = \frac{3\pi}{2}$$

---

### Zadanie 523 [W]
**Treść zadania:**  
Rozwiązać równanie $\sin 3x + \sin x = \sin 2x$.

**Odpowiedź:**  
$x = \frac{k\pi}{2} \lor x = \frac{\pi}{3} + 2k\pi \lor x = -\frac{\pi}{3} + 2k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. Stosujemy wzór na sumę sinusów:
   $$\sin 3x + \sin x = 2\sin\frac{3x + x}{2}\cos\frac{3x - x}{2} = 2\sin 2x \cos x$$
2. Podstawiamy do równania:
   $$2\sin 2x \cos x = \sin 2x$$
3. Przenosimy na lewą stronę i wyłączamy $\sin 2x$:
   $$\sin 2x(2\cos x - 1) = 0$$
4. Przyrównujemy czynniki do zera:
   - $\sin 2x = 0 \iff 2x = k\pi \iff x = \frac{k\pi}{2}, \; k \in \mathbb{Z}$
   - $2\cos x - 1 = 0 \iff \cos x = \frac{1}{2} \iff x = \frac{\pi}{3} + 2k\pi \lor x = -\frac{\pi}{3} + 2k\pi, \; k \in \mathbb{Z}$

---

### Zadanie 524 [(0-4) CKE, matura - poziom rozszerzony, czerwiec 2024]
**Treść zadania:**  
Rozwiąż równanie $\sin(6x) + \sqrt{3}\cdot\sin(5x) + \sin(4x) = 0$.

**Odpowiedź:**  
$x = \frac{k\pi}{5} \lor x = -\frac{5\pi}{6} + 2k\pi \lor x = \frac{5\pi}{6} + 2k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. Grupujemy pierwszy i trzeci wyraz, a następnie stosujemy wzór na sumę sinusów:
   $$\sin 6x + \sin 4x = 2\sin\frac{6x + 4x}{2}\cos\frac{6x - 4x}{2} = 2\sin 5x \cos x$$
2. Wstawiamy do wyjściowego równania:
   $$2\sin 5x \cos x + \sqrt{3}\sin 5x = 0$$
3. Wyłączamy wspólny czynnik $\sin 5x$:
   $$\sin 5x (2\cos x + \sqrt{3}) = 0$$
4. Przyrównujemy czynniki do zera:
   - $\sin 5x = 0 \iff 5x = k\pi \iff x = \frac{k\pi}{5}, \; k \in \mathbb{Z}$
   - $2\cos x + \sqrt{3} = 0 \iff \cos x = -\frac{\sqrt{3}}{2} \iff x = \frac{5\pi}{6} + 2k\pi \lor x = -\frac{5\pi}{6} + 2k\pi, \; k \in \mathbb{Z}$

---

### Zadanie 525 [* W Egzamin wstępny na politechniki (wydziały mechaniczne i elektryczne) w roku 1952]
**Treść zadania:**  
Rozwiązać równanie $\sin^2 x + \sin^2 2x = \sin^2 3x$.

**Odpowiedź:**  
$x = k \cdot \frac{\pi}{2} \lor x = \frac{\pi}{6} + k\pi \lor x = -\frac{\pi}{6} + k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. Przenosimy $\sin^2 x$ na prawą stronę:
   $$\sin^2 2x = \sin^2 3x - \sin^2 x$$
2. Rozkładamy prawą stronę ze wzoru na różnicę kwadratów:
   $$\sin^2 3x - \sin^2 x = (\sin 3x - \sin x)(\sin 3x + \sin x)$$
3. Korzystamy ze wzorów na różnicę i sumę sinusów:
   $$\sin 3x - \sin x = 2\sin x \cos 2x$$
   $$\sin 3x + \sin x = 2\sin 2x \cos x$$
   Iloczyn tych wyrażeń:
   $$(\sin 3x - \sin x)(\sin 3x + \sin x) = (2\sin x \cos x)(2\sin 2x \cos 2x) = \sin 2x \sin 4x$$
4. Równanie przyjmuje postać:
   $$\sin^2 2x = \sin 2x \sin 4x \iff \sin 2x(\sin 4x - \sin 2x) = 0$$
5. Stosujemy wzór na różnicę sinusów $\sin 4x - \sin 2x = 2\sin x \cos 3x$:
   $$2\sin 2x \sin x \cos 3x = 0$$
6. Rozwiązujemy:
   - $\sin 2x = 0 \iff 2x = k\pi \iff x = \frac{k\pi}{2}, \; k \in \mathbb{Z}$
   - $\sin x = 0 \iff x = k\pi$ (zawiera się w serii powyżej)
   - $\cos 3x = 0 \iff 3x = \frac{\pi}{2} + k\pi \iff x = \frac{\pi}{6} + \frac{k\pi}{3}, \; k \in \mathbb{Z}$
7. Seria $x = \frac{\pi}{6} + \frac{k\pi}{3}$ daje:
   - dla $k = 3m$: $x = \frac{\pi}{6} + m\pi$
   - dla $k = 3m + 1$: $x = \frac{\pi}{2} + m\pi$ (zawiera się w $x = \frac{k\pi}{2}$)
   - dla $k = 3m + 2$: $x = \frac{5\pi}{6} + m\pi = -\frac{\pi}{6} + (m+1)\pi$
8. Ostatecznie:
   $$x = k \cdot \frac{\pi}{2} \quad \text{lub} \quad x = \frac{\pi}{6} + k\pi \quad \text{lub} \quad x = -\frac{\pi}{6} + k\pi, \quad k \in \mathbb{Z}$$

---

### Zadanie 526
**Treść zadania:**  
Rozwiąż równanie:
a) $\sin x = \frac{|x|}{x}$  
b) [R] $\cos\frac{x - |x|}{2} = 1$

**Odpowiedź:**  
a) $x = \frac{\pi}{2} + 2k\pi$, gdzie $k \in \mathbb{Z}_+ \cup \{0\}$ lub $x = -\frac{\pi}{2} + 2k\pi$, gdzie $k \in \mathbb{Z}_- \cup \{0\}$;  
b) $x \ge 0$ lub $x = 2k\pi$, gdzie $k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
**Część a):**  
1. Dziedzina: $x \neq 0$.
2. Badamy dwa przypadki w zależności od znaku $x$:
   - Dla $x > 0$: $\frac{|x|}{x} = 1$, zatem:
     $$\sin x = 1 \iff x = \frac{\pi}{2} + 2k\pi, \quad k \in \mathbb{Z}$$
     Warunek $x > 0$ wymusza $k \in \mathbb{Z}_+ \cup \{0\} = \{0, 1, 2, \dots\}$.
   - Dla $x < 0$: $\frac{|x|}{x} = -1$, zatem:
     $$\sin x = -1 \iff x = -\frac{\pi}{2} + 2k\pi, \quad k \in \mathbb{Z}$$
     Warunek $x < 0$ wymusza $k \in \mathbb{Z}_- \cup \{0\} = \{0, -1, -2, \dots\}$.

**Część b):**  
1. Dziedzina: $x \in \mathbb{R}$.
2. Rozpatrujemy zbiory:
   - Dla $x < 0$: $|x| = -x$, zatem $\frac{x - |x|}{2} = \frac{x - (-x)}{2} = x$.  
     Równanie ma postać $\cos x = 1 \iff x = 2k\pi, \; k \in \mathbb{Z}$.  
     Ponieważ szukamy ujemnych rozwiązań, otrzymujemy $x = 2k\pi$, gdzie $k \in \mathbb{Z}_-$.
   - Dla $x \ge 0$: $|x| = x$, zatem $\frac{x - |x|}{2} = \frac{x - x}{2} = 0$.  
     Równanie ma postać $\cos 0 = 1 \iff 1 = 1$. Równość jest spełniona tożsamościowo dla każdej liczby $x \ge 0$.
3. Ostatecznie:
   $$x \ge 0 \quad \text{lub} \quad x = 2k\pi, \quad k \in \mathbb{Z}$$

---

### Zadanie 527
**Treść zadania:**  
Rozwiąż równanie $\sin 2x = \cos x + |\cos x|$ w zbiorze $[0; 2\pi]$.

**Odpowiedź:**  
$x = \frac{\pi}{2} \quad \text{lub} \quad x = \pi \quad \text{lub} \quad x = \frac{3\pi}{2}$.

**Rozwiązanie krok po kroku:**  
1. Definicja wartości bezwzględnej dla $\cos x$ w przedziale $[0, 2\pi]$:
   - **Przypadek 1:** $\cos x \ge 0 \iff x \in \left[0, \frac{\pi}{2}\right] \cup \left[\frac{3\pi}{2}, 2\pi\right]$.
     Wtedy $|\cos x| = \cos x$, a równanie przyjmuje postać:
     $$\sin 2x = \cos x + \cos x = 2\cos x$$
     $$2\sin x \cos x - 2\cos x = 0 \iff 2\cos x(\sin x - 1) = 0$$
     - $\cos x = 0 \implies x = \frac{\pi}{2} \lor x = \frac{3\pi}{2}$ (obie wartości spełniają $\cos x \ge 0$)
     - $\sin x = 1 \implies x = \frac{\pi}{2}$ (już uwzględnione)
   - **Przypadek 2:** $\cos x < 0 \iff x \in \left(\frac{\pi}{2}, \frac{3\pi}{2}\right)$.
     Wtedy $|\cos x| = -\cos x$, a równanie przyjmuje postać:
     $$\sin 2x = \cos x - \cos x = 0$$
     $$\sin 2x = 0 \iff 2x = k\pi \iff x = \frac{k\pi}{2}$$
     Wewnątrz przedziału $\left(\frac{\pi}{2}, \frac{3\pi}{2}\right)$ leży wyłącznie punkt $x = \pi$. Sprawdzamy: $\cos\pi = -1 < 0$ (spełnia założenie).
2. Łącząc rozwiązania:
   $$x \in \left\{ \frac{\pi}{2}, \; \pi, \; \frac{3\pi}{2} \right\}$$

---

### Zadanie 528
**Treść zadania:**  
Ile rozwiązań równania $\cos(\pi \log x) = 1$ należy do przedziału $[1; 100^{2000}]$?

**Odpowiedź:**  
2001 rozwiązań (rozwiązaniem równania jest każda liczba postaci $100^k$, gdzie $k \in \mathbb{Z}$).

**Rozwiązanie krok po kroku:**  
1. **Dziedzina:** $x > 0$.
2. Rozwiązujemy równanie:
   $$\cos(\pi \log x) = 1 \iff \pi \log x = 2k\pi, \quad k \in \mathbb{Z}$$
   Dzielimy przez $\pi$:
   $$\log x = 2k \iff x = 10^{2k} = (10^2)^k = 100^k$$
3. Sprawdzamy warunek przynależności do przedziału $[1; 100^{2000}]$:
   $$1 \le 100^k \le 100^{2000}$$
   Zapisując $1 = 100^0$:
   $$100^0 \le 100^k \le 100^{2000} \iff 0 \le k \le 2000$$
4. Liczba całkowitych wartości $k \in \{0, 1, 2, \dots, 2000\}$ wynosi:
   $$2000 - 0 + 1 = 2001$$

---

## Parametr w funkcjach trygonometrycznych

---

### Zadanie 529
**Treść zadania:**  
Dane jest równanie $\cos\alpha \cdot x^2 + 2\sin\alpha \cdot x = \cos\alpha$, gdzie $x$ jest niewiadomą.  
a) Wykaż, że jeśli $\alpha$ jest kątem ostrym, to równanie ma dwa rozwiązania.  
b) Znajdź te wartości parametru $\alpha$, dla których dane równanie ma dwa rozwiązania takie, że suma ich odwrotności jest większa od 2.

**Odpowiedź:**  
b) $\alpha \in \left(\frac{\pi}{4} + k\pi; \frac{\pi}{2} + k\pi\right)$, gdzie $k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
Zapisujemy równanie w postaci ogólnej:
$$\cos\alpha \cdot x^2 + 2\sin\alpha \cdot x - \cos\alpha = 0$$
Współczynniki trójmianu: $a = \cos\alpha$, $b = 2\sin\alpha$, $c = -\cos\alpha$.

**Podpunkt a):**  
1. Warunek kwadratowości równania: $a \neq 0 \iff \cos\alpha \neq 0$.
   Dla kąta ostrego $\alpha \in \left(0, \frac{\pi}{2}\right)$ zachodzi $\cos\alpha > 0$, zatem $a \neq 0$.
2. Obliczamy wyróżnik $\Delta$:
   $$\Delta = b^2 - 4ac = (2\sin\alpha)^2 - 4(\cos\alpha)(-\cos\alpha) = 4\sin^2\alpha + 4\cos^2\alpha = 4(\sin^2\alpha + \cos^2\alpha) = 4$$
3. Ponieważ $\Delta = 4 > 0$ dla każdego $\alpha$, równanie ma dokładnie dwa różne rozwiązania rzeczywiste. Co kończy dowód.

**Podpunkt b):**  
1. Równanie ma dwa rozwiązania, gdy:
   - $a \neq 0 \iff \cos\alpha \neq 0 \iff \alpha \neq \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}$
   - $\Delta = 4 > 0$ (spełnione tożsamościowo)
2. Aby istniały odwrotności pierwiastków, żaden z nich nie może być zerem:
   $$x_1 \cdot x_2 = \frac{c}{a} = \frac{-\cos\alpha}{\cos\alpha} = -1 \neq 0 \quad (\text{zawsze spełnione})$$
3. Suma odwrotności pierwiastków wynosi:
   $$\frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1 x_2}$$
   Ze wzorów Viète'a:
   $$x_1 + x_2 = -\frac{b}{a} = -\frac{2\sin\alpha}{\cos\alpha} = -2\operatorname{tg}\alpha$$
   Zatem:
   $$\frac{1}{x_1} + \frac{1}{x_2} = \frac{-2\operatorname{tg}\alpha}{-1} = 2\operatorname{tg}\alpha$$
4. Rozwiązujemy zadaną nierówność:
   $$2\operatorname{tg}\alpha > 2 \iff \operatorname{tg}\alpha > 1$$
5. Stąd:
   $$\alpha \in \left(\frac{\pi}{4} + k\pi; \frac{\pi}{2} + k\pi\right), \quad k \in \mathbb{Z}$$

---

### Zadanie 530
**Treść zadania:**  
Funkcja $g$ określona jest wzorem $g(x) = x^2 + \cos\alpha \cdot x + \sin\alpha + 3$. Wyznacz te wartości parametru $\alpha$, dla których najmniejsza wartość funkcji $g$ jest równa 2.

**Odpowiedź:**  
$\alpha = -\frac{\pi}{2} + 2k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. Funkcja $g(x)$ jest trójmianem kwadratowym o współczynniku $a = 1 > 0$. Ramiona paraboli są skierowane w górę, więc najmniejsza wartość funkcji jest osiągana w wierzchołku paraboli:
   $$q = -\frac{\Delta}{4a}$$
2. Obliczamy wyróżnik $\Delta$:
   $$\Delta = \cos^2\alpha - 4 \cdot 1 \cdot (\sin\alpha + 3) = \cos^2\alpha - 4\sin\alpha - 12$$
3. Wartość najmniejsza $q$:
   $$q = -\frac{\cos^2\alpha - 4\sin\alpha - 12}{4} = \frac{12 + 4\sin\alpha - \cos^2\alpha}{4}$$
4. Przyrównujemy $q$ do 2:
   $$\frac{12 + 4\sin\alpha - \cos^2\alpha}{4} = 2 \iff 12 + 4\sin\alpha - \cos^2\alpha = 8$$
5. Korzystamy z jedynki trygonometrycznej $\cos^2\alpha = 1 - \sin^2\alpha$:
   $$12 + 4\sin\alpha - (1 - \sin^2\alpha) = 8$$
   $$\sin^2\alpha + 4\sin\alpha + 11 = 8 \iff \sin^2\alpha + 4\sin\alpha + 3 = 0$$
6. Rozkładamy na czynniki:
   $$(\sin\alpha + 1)(\sin\alpha + 3) = 0$$
   Ponieważ $\sin\alpha \ge -1$, czynnik $\sin\alpha + 3 \ge 2 > 0$.
   Zatem:
   $$\sin\alpha + 1 = 0 \iff \sin\alpha = -1$$
7. Stąd:
   $$\alpha = -\frac{\pi}{2} + 2k\pi, \quad k \in \mathbb{Z}$$

---

### Zadanie 531
**Treść zadania:**  
Dla jakich wartości parametru $\alpha$ suma kwadratów różnych pierwiastków równania $x^2 - 2x\sin\alpha - \cos^2\alpha = 0$ jest równa 3?

**Odpowiedź:**  
$\alpha = \frac{\pi}{4} + \frac{k\pi}{2}, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. **Warunek istnienia dwóch różnych pierwiastków:** $\Delta > 0$:
   $$\Delta = (-2\sin\alpha)^2 - 4 \cdot 1 \cdot (-\cos^2\alpha) = 4\sin^2\alpha + 4\cos^2\alpha = 4(\sin^2\alpha + \cos^2\alpha) = 4$$
   Ponieważ $\Delta = 4 > 0$, równanie ma dwa różne pierwiastki dla każdego $\alpha \in \mathbb{R}$.
2. Suma kwadratów pierwiastków wyraża się przez wzory Viète'a:
   $$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2$$
   Ze wzorów Viète'a:
   $$x_1 + x_2 = 2\sin\alpha, \qquad x_1 x_2 = -\cos^2\alpha$$
3. Wstawiamy do wzoru:
   $$x_1^2 + x_2^2 = (2\sin\alpha)^2 - 2(-\cos^2\alpha) = 4\sin^2\alpha + 2\cos^2\alpha$$
4. Przyrównujemy do 3:
   $$4\sin^2\alpha + 2\cos^2\alpha = 3$$
   $$2\sin^2\alpha + 2(\sin^2\alpha + \cos^2\alpha) = 3$$
   $$2\sin^2\alpha + 2 = 3 \iff 2\sin^2\alpha = 1 \iff \sin^2\alpha = \frac{1}{2}$$
5. Otrzymujemy:
   $$\sin\alpha = \frac{\sqrt{2}}{2} \quad \lor \quad \sin\alpha = -\frac{\sqrt{2}}{2}$$
   Kąty te leżą co $\frac{\pi}{2}$:
   $$\alpha = \frac{\pi}{4} + \frac{k\pi}{2}, \quad k \in \mathbb{Z}$$

---

## Równania trygonometryczne z parametrem

---

### Zadanie 532
**Treść zadania:**  
Wyznacz te wartości parametru $k$, dla których równanie $\cos 3x = \frac{2k + 3}{k - 3}$ ma rozwiązania.

**Odpowiedź:**  
$k \in [-6; 0]$.

**Rozwiązanie krok po kroku:**  
1. Dziedzina parametru: mianownik nie może być zerem, czyli $k \neq 3$.
2. Zbiór wartości funkcji cosinus to $[-1, 1]$. Równanie ma rozwiązania wtedy i tylko wtedy, gdy:
   $$-1 \le \frac{2k + 3}{k - 3} \le 1$$
3. Rozwiązujemy układ dwóch nierówności:
   - **Część 1:**
     $$\frac{2k + 3}{k - 3} \ge -1 \iff \frac{2k + 3 + (k - 3)}{k - 3} \ge 0 \iff \frac{3k}{k - 3} \ge 0$$
     Iloczyn $3k(k - 3) \ge 0 \implies k \in (-\infty, 0] \cup (3, +\infty)$.
   - **Część 2:**
     $$\frac{2k + 3}{k - 3} \le 1 \iff \frac{2k + 3 - (k - 3)}{k - 3} \le 0 \iff \frac{k + 6}{k - 3} \le 0$$
     Iloczyn $(k + 6)(k - 3) \le 0 \implies k \in [-6, 3)$.
4. Wyznaczamy część wspólną:
   $$k \in \Big((-\infty, 0] \cup (3, +\infty)\Big) \cap [-6, 3) = [-6, 0]$$

---

### Zadanie 533 [R]
**Treść zadania:**  
Znajdź te wartości parametru $m$, dla których równanie $(1 - \sin x)m^2 + 2m + 4\sin x - 8 = 0$ ma rozwiązania.

**Odpowiedź:**  
$m \in (-\infty; -3] \cup \{2\}$.

**Rozwiązanie krok po kroku:**  
1. Przekształcamy równanie, porządkując je względem $\sin x$:
   $$m^2 - m^2\sin x + 2m + 4\sin x - 8 = 0$$
   $$(4 - m^2)\sin x = -(m^2 + 2m - 8)$$
   $$(m^2 - 4)\sin x = m^2 + 2m - 8 \quad (*)$$
2. Rozpatrujemy przypadki:
   - **Przypadek I: $m = -2$**  
     Równanie $(*)$ przyjmuje postać $0 \cdot \sin x = -8$, co jest sprzecznością. Brak rozwiązań.
   - **Przypadek II: $m = 2$**  
     Równanie $(*)$ przyjmuje postać $0 \cdot \sin x = 0$, co jest tożsamością prawdziwą dla każdego $x \in \mathbb{R}$. Zatem $m = 2$ jest rozwiązaniem.
   - **Przypadek III: $m \in \mathbb{R} \setminus \{-2, 2\}$**  
     Dzielimy obie strony przez $m^2 - 4$:
     $$\sin x = \frac{m^2 + 2m - 8}{m^2 - 4} = \frac{(m + 4)(m - 2)}{(m + 2)(m - 2)} = \frac{m + 4}{m + 2}$$
     Równanie ma rozwiązania wtedy i tylko wtedy, gdy $\frac{m + 4}{m + 2} \in [-1, 1]$:
     - $\frac{m + 4}{m + 2} \ge -1 \iff \frac{2m + 6}{m + 2} \ge 0 \iff (m + 3)(m + 2) \ge 0 \implies m \in (-\infty, -3] \cup (-2, +\infty)$
     - $\frac{m + 4}{m + 2} \le 1 \iff \frac{2}{m + 2} \le 0 \iff m + 2 < 0 \implies m < -2$
     Część wspólna: $m \in (-\infty, -3]$.
3. Łącząc przypadki:
   $$m \in (-\infty; -3] \cup \{2\}$$

---

### Zadanie 534 [* R Egzamin dojrzałości (LO - profil podstawowy) w województwie warszawskim w roku 1990]
**Treść zadania:**  
Dla jakich wartości parametru $m$ równanie $\sin^2 x + \sin x + m = 0$ ma rozwiązania?

**Odpowiedź:**  
$m \in \left[-2; \frac{1}{4}\right]$.

**Rozwiązanie krok po kroku:**  
1. Podstawiamy $t = \sin x$, gdzie $t \in [-1, 1]$.  
   Otrzymujemy równanie kwadratowe:
   $$t^2 + t + m = 0$$
   Równanie wyjściowe ma rozwiązanie wtedy i tylko wtedy, gdy funkcja $g(t) = t^2 + t + m$ ma co najmniej jedno miejsce zerowe w przedziale $[-1, 1]$.
2. Własności paraboli $g(t)$:
   - Ramiona skierowane w górę ($a = 1 > 0$).
   - Odcięta wierzchołka paraboli:
     $$t_w = -\frac{b}{2a} = -\frac{1}{2} = -0{,}5 \in [-1, 1]$$
     Wierzchołek leży wewnątrz przedziału $[-1, 1]$.
3. Warunki istnienia rozwiązań:
   - Istnienie pierwiastków rzeczywistych:
     $$\Delta = 1 - 4m \ge 0 \iff m \le \frac{1}{4} = 0{,}25$$
   - Ponieważ wierzchołek leży w $-0{,}5$, najmniejsza wartość funkcji wynosi $g(-0{,}5) \le 0$ (tożsame z $\Delta \ge 0$). Aby co najmniej jeden pierwiastek mieścił się w przedziale $[-1, 1]$, wartość funkcji w dalszym od wierzchołka krańcu przedziału (czyli dla $t = 1$) musi być nieujemna:
     $$g(1) \ge 0 \iff 1^2 + 1 + m \ge 0 \iff m \ge -2$$
4. Łącząc warunki:
   $$m \in \left[-2; \frac{1}{4}\right]$$

---

### Zadanie 535 [W]
**Treść zadania:**  
Dla jakich wartości parametru $m$ równanie $\cos x + \sqrt{3}\sin x = \log m^2$ ma rozwiązania?

**Odpowiedź:**  
$m \in [-10; -0{,}1] \cup [0{,}1; 10]$.

**Rozwiązanie krok po kroku:**  
1. **Dziedzina:** $m^2 > 0 \iff m \neq 0$.
2. Przekształcamy lewą stronę równania:
   $$\cos x + \sqrt{3}\sin x = 2\left(\frac{1}{2}\cos x + \frac{\sqrt{3}}{2}\sin x\right) = 2\sin\left(x + \frac{\pi}{6}\right)$$
3. Zbiór wartości lewej strony to $[-2, 2]$. Równanie ma rozwiązania wtedy i tylko wtedy, gdy:
   $$-2 \le \log m^2 \le 2$$
4. Ponieważ $\log$ oznacza logarytm dziesiętny o podstawie $10 > 1$:
   $$10^{-2} \le m^2 \le 10^2 \iff 0{,}01 \le m^2 \le 100$$
5. Rozwiązujemy układ nierówności:
   - $m^2 \le 100 \iff |m| \le 10 \iff m \in [-10, 10]$
   - $m^2 \ge 0{,}01 \iff |m| \ge 0{,}1 \iff m \in (-\infty, -0{,}1] \cup [0{,}1, +\infty)$
6. Część wspólna obu warunków:
   $$m \in [-10; -0{,}1] \cup [0{,}1; 10]$$

---

## Zadania różne

---

### Zadanie 536
**Treść zadania:**  
Wykresem funkcji $f$ jest prosta $k$ o równaniu $y = 2\cos 30^\circ x + \operatorname{tg} 30^\circ$.  
a) Podaj miarę kąta ostrego, jaki prosta $k$ tworzy z osią $OY$.  
b) Znajdź miejsce zerowe funkcji $f$.

**Odpowiedź:**  
a) $30^\circ$;  
b) $-\frac{1}{3}$.

**Rozwiązanie krok po kroku:**  
1. Obliczamy wartości funkcji trygonometrycznych:
   $$\cos 30^\circ = \frac{\sqrt{3}}{2}, \qquad \operatorname{tg} 30^\circ = \frac{\sqrt{3}}{3}$$
2. Równanie prostej przyjmuje postać:
   $$y = 2 \cdot \frac{\sqrt{3}}{2} x + \frac{\sqrt{3}}{3} = \sqrt{3}x + \frac{\sqrt{3}}{3}$$

**Podpunkt a):**  
- Współczynnik kierunkowy wynosi $a = \sqrt{3} = \operatorname{tg}\varphi$, gdzie $\varphi$ jest kątem nachylenia prostej do dodatniej półosi $OX$.
- Zatem $\varphi = 60^\circ$.
- Kąt ostry, jaki prosta tworzy z osią $OY$, jest kątem dopełniającym do $90^\circ$:
  $$90^\circ - 60^\circ = 30^\circ$$

**Podpunkt b):**  
- Wyznaczamy miejsce zerowe:
  $$\sqrt{3}x + \frac{\sqrt{3}}{3} = 0 \iff \sqrt{3}x = -\frac{\sqrt{3}}{3} \iff x = -\frac{1}{3}$$

---

### Zadanie 537
**Treść zadania:**  
Oblicz miary kątów ostrych $\alpha$ i $\beta$, wiedząc, że $\sin(\alpha - \beta) = \frac{1}{2}$ i $\cos(\alpha + \beta) = \frac{1}{2}$.

**Odpowiedź:**  
$\alpha = 45^\circ$, $\beta = 15^\circ$.

**Rozwiązanie krok po kroku:**  
1. Kąty $\alpha$ i $\beta$ są kątami ostrymi, czyli $\alpha, \beta \in (0^\circ, 90^\circ)$.  
   Stąd:
   $$\alpha - \beta \in (-90^\circ, 90^\circ), \qquad \alpha + \beta \in (0^\circ, 180^\circ)$$
2. Rozwiązujemy równania w tych przedziałach:
   - $\sin(\alpha - \beta) = \frac{1}{2} \implies \alpha - \beta = 30^\circ$
   - $\cos(\alpha + \beta) = \frac{1}{2} \implies \alpha + \beta = 60^\circ$
3. Tworzymy układ równań:
   $$\begin{cases} \alpha - \beta = 30^\circ \\ \alpha + \beta = 60^\circ \end{cases}$$
4. Dodając równania stronami:
   $$2\alpha = 90^\circ \iff \alpha = 45^\circ$$
   Odejmując:
   $$2\beta = 30^\circ \iff \beta = 15^\circ$$
   Oba kąty są ostre i spełniają warunki zadania.

---

### Zadanie 538
**Treść zadania:**  
Liczba $\frac{2}{3}$ jest sinusem kąta ostrego $\alpha$ i rozwiązaniem równania $9x^2 + bx + c = 0$. Drugim rozwiązaniem tego równania jest kosinus kąta $\alpha$.  
a) Ile jest równa suma kwadratów pierwiastków danego równania?  
b) Znajdź liczby $b$ i $c$.

**Odpowiedź:**  
a) 1;  
b) $b = -3(\sqrt{5} + 2)$, $c = 2\sqrt{5}$.

**Rozwiązanie krok po kroku:**  
Niech $x_1 = \sin\alpha = \frac{2}{3}$ oraz $x_2 = \cos\alpha$.  
Kąt $\alpha$ jest ostry, więc $\cos\alpha > 0$:
$$x_2 = \cos\alpha = \sqrt{1 - \sin^2\alpha} = \sqrt{1 - \left(\frac{2}{3}\right)^2} = \sqrt{1 - \frac{4}{9}} = \frac{\sqrt{5}}{3}$$

**Podpunkt a):**  
Suma kwadratów pierwiastków wynosi:
$$x_1^2 + x_2^2 = \sin^2\alpha + \cos^2\alpha = 1$$

**Podpunkt b):**  
Stosujemy wzory Viète'a dla równania kwadratowego $9x^2 + bx + c = 0$:
$$x_1 + x_2 = -\frac{b}{9}, \qquad x_1 \cdot x_2 = \frac{c}{9}$$
1. Suma pierwiastków:
   $$x_1 + x_2 = \frac{2}{3} + \frac{\sqrt{5}}{3} = \frac{2 + \sqrt{5}}{3}$$
   $$-\frac{b}{9} = \frac{2 + \sqrt{5}}{3} \iff b = -9 \cdot \frac{2 + \sqrt{5}}{3} = -3(2 + \sqrt{5}) = -3(\sqrt{5} + 2)$$
2. Iloczyn pierwiastków:
   $$x_1 \cdot x_2 = \frac{2}{3} \cdot \frac{\sqrt{5}}{3} = \frac{2\sqrt{5}}{9}$$
   $$\frac{c}{9} = \frac{2\sqrt{5}}{9} \iff c = 2\sqrt{5}$$

---

### Zadanie 539
**Treść zadania:**  
Uporządkuj rosnąco liczby $a = 10^{\log\sqrt{2}}$, $b = \sin^3 89^\circ + \cos 1^\circ \cdot \cos^2 89^\circ$, $c = \frac{\sqrt[3]{16}\cdot\sqrt[6]{128}}{\sqrt{32}}$.

**Odpowiedź:**  
$b = \sin 89^\circ < 1 = c < \sqrt{2} = a$.

**Rozwiązanie krok po kroku:**  
1. Obliczamy liczbę $a$:
   $$a = 10^{\log_{10}\sqrt{2}} = \sqrt{2} \approx 1{,}414$$
2. Upraszczamy liczbę $b$:
   Zauważmy, że ze wzoru redukcyjnego $\cos 1^\circ = \cos(90^\circ - 89^\circ) = \sin 89^\circ$.  
   Zatem:
   $$b = \sin^3 89^\circ + \sin 89^\circ \cdot \cos^2 89^\circ = \sin 89^\circ (\sin^2 89^\circ + \cos^2 89^\circ) = \sin 89^\circ \cdot 1 = \sin 89^\circ$$
   Ponieważ sinus w przedziale $(0^\circ, 90^\circ)$ jest funkcją rosnącą:
   $$0 < b = \sin 89^\circ < \sin 90^\circ = 1$$
3. Upraszczamy liczbę $c$, przedstawiając czynniki w postaci potęg liczby 2:
   $$\sqrt[3]{16} = (2^4)^{1/3} = 2^{4/3}$$
   $$\sqrt[6]{128} = (2^7)^{1/6} = 2^{7/6}$$
   $$\sqrt{32} = (2^5)^{1/2} = 2^{5/2}$$
   Wykładnik potęgi:
   $$\frac{4}{3} + \frac{7}{6} - \frac{5}{2} = \frac{8}{6} + \frac{7}{6} - \frac{15}{6} = 0$$
   Zatem:
   $$c = 2^0 = 1$$
4. Porównanie liczb:
   $$b < 1 = c < \sqrt{2} = a \implies b < c < a$$

---

### Zadanie 540 [Egzamin wstępny na politechniki w roku 1955]
**Treść zadania:**  
Obliczyć bez użycia tablic:
$$\frac{9\sin 140^\circ - 4\cos 230^\circ + 12\sin 580^\circ}{3\sin 40^\circ - 2\cos 410^\circ}$$

**Odpowiedź:**  
1.

**Rozwiązanie krok po kroku:**  
Sprowadzamy wszystkie funkcje do kąta $40^\circ$ za pomocą wzorów redukcyjnych:
1. $\sin 140^\circ = \sin(180^\circ - 40^\circ) = \sin 40^\circ$
2. $\cos 230^\circ = \cos(180^\circ + 50^\circ) = -\cos 50^\circ = -\cos(90^\circ - 40^\circ) = -\sin 40^\circ$
3. $\sin 580^\circ = \sin(360^\circ + 220^\circ) = \sin 220^\circ = \sin(180^\circ + 40^\circ) = -\sin 40^\circ$
4. $\cos 410^\circ = \cos(360^\circ + 50^\circ) = \cos 50^\circ = \sin 40^\circ$

Podstawiamy do licznika:
$$L = 9\sin 40^\circ - 4(-\sin 40^\circ) + 12(-\sin 40^\circ) = 9\sin 40^\circ + 4\sin 40^\circ - 12\sin 40^\circ = \sin 40^\circ$$

Podstawiamy do mianownika:
$$M = 3\sin 40^\circ - 2\sin 40^\circ = \sin 40^\circ$$

Wartość ułamka:
$$\frac{L}{M} = \frac{\sin 40^\circ}{\sin 40^\circ} = 1$$

---

### Zadanie 541
**Treść zadania:**  
Rozwiąż równanie $\sin^2 5x = k$, gdzie $k$ jest rozwiązaniem równania $4x^3 - 5x^2 - 7x + 2 = 0$.

**Odpowiedź:**  
$x = -\frac{\pi}{6} + \frac{2}{5}k\pi \lor x = -\frac{\pi}{30} + \frac{2}{5}k\pi \lor x = \frac{\pi}{6} + \frac{2}{5}k\pi \lor x = \frac{\pi}{30} + \frac{2}{5}k\pi, \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. Rozwiązujemy równanie wielomianowe $4x^3 - 5x^2 - 7x + 2 = 0$:
   Sprawdzamy $x = 2$:
   $$4(2)^3 - 5(2)^2 - 7(2) + 2 = 32 - 20 - 14 + 2 = 0$$
   Zatem $x = 2$ jest pierwiastkiem. Dzielimy wielomian przez $x - 2$:
   $$4x^3 - 5x^2 - 7x + 2 = (x - 2)(4x^2 + 3x - 1)$$
   Rozwiązujemy trójmian $4x^2 + 3x - 1 = 0$:
   $$\Delta = 9 - 4(4)(-1) = 25 \implies x = \frac{-3 \pm 5}{8} \implies x = \frac{1}{4} \lor x = -1$$
   Zatem pierwiastkami są liczby: $k \in \left\{ -1, \; \frac{1}{4}, \; 2 \right\}$.
2. Równanie trygonometryczne $\sin^2 5x = k$:
   Ponieważ dla każdego $x$ zachodzi $\sin^2 5x \in [0, 1]$:
   - dla $k = -1$ oraz $k = 2$ równanie nie ma rozwiązań,
   - dla $k = \frac{1}{4}$:
     $$\sin^2 5x = \frac{1}{4} \iff \sin 5x = \frac{1}{2} \quad \lor \quad \sin 5x = -\frac{1}{2}$$
3. Wyznaczamy rozwiązania:
   - $\sin 5x = \frac{1}{2}$:
     $$5x = \frac{\pi}{6} + 2m\pi \iff x = \frac{\pi}{30} + \frac{2}{5}m\pi$$
     $$5x = \frac{5\pi}{6} + 2m\pi \iff x = \frac{\pi}{6} + \frac{2}{5}m\pi$$
   - $\sin 5x = -\frac{1}{2}$:
     $$5x = -\frac{\pi}{6} + 2m\pi \iff x = -\frac{\pi}{30} + \frac{2}{5}m\pi$$
     $$5x = -\frac{5\pi}{6} + 2m\pi \iff x = -\frac{\pi}{6} + \frac{2}{5}m\pi$$
   gdzie $m \in \mathbb{Z}$.

---

### Zadanie 542
**Treść zadania:**  
Wykaż, że największe wartości funkcji $y = (\log_2 3)^{\sin x}$ oraz $y = (\log_3 2)^{\cos x}$ są sobie równe.

**Odpowiedź:**  
Dowód w rozwiązaniu (obie największe wartości są równe $\log_2 3$).

**Rozwiązanie krok po kroku:**  
1. Badamy pierwszą funkcję $f(x) = (\log_2 3)^{\sin x}$:
   - Ponieważ $3 > 2$, podstawa logarytmu $\log_2 3 > \log_2 2 = 1$.
   - Funkcja wykładnicza $t \mapsto (\log_2 3)^t$ o podstawie większej od 1 jest ściśle rosnąca.
   - Osiąga więc wartość największą dla największej wartości wykładnika, czyli gdy $\sin x = 1$:
     $$f_{\max} = (\log_2 3)^1 = \log_2 3$$
2. Badamy drugą funkcję $g(x) = (\log_3 2)^{\cos x}$:
   - Ponieważ $1 < 2 < 3$, podstawa logarytmu $0 < \log_3 2 < \log_3 3 = 1$.
   - Funkcja wykładnicza $t \mapsto (\log_3 2)^t$ o podstawie z przedziału $(0, 1)$ jest ściśle malejąca.
   - Osiąga więc wartość największą dla najmniejszej wartości wykładnika, czyli gdy $\cos x = -1$:
     $$g_{\max} = (\log_3 2)^{-1} = \frac{1}{\log_3 2}$$
3. Stosujemy wzór na zamianę podstaw logarytmu: $\frac{1}{\log_a b} = \log_b a$:
   $$\frac{1}{\log_3 2} = \log_2 3$$
4. Porównując oba wyniki:
   $$f_{\max} = g_{\max} = \log_2 3$$
   Największe wartości obu funkcji są równe, co należało wykazać.

---

### Zadanie 543
**Treść zadania:**  
Wyznacz dziedzinę funkcji $f(x) = \frac{\log_{x-1}\sqrt{16 - x^2}}{\operatorname{tg} x}$.

**Odpowiedź:**  
$(1; 4) \setminus \left\{ \frac{\pi}{2}, 2, \pi \right\}$.

**Rozwiązanie krok po kroku:**  
Wyznaczamy warunki określoności wyrażenia:
1. **Podstawa logarytmu:**
   $$x - 1 > 0 \land x - 1 \neq 1 \iff x > 1 \land x \neq 2$$
2. **Liczba logarytmowana:**
   $$\sqrt{16 - x^2} > 0 \iff 16 - x^2 > 0 \iff x^2 < 16 \iff x \in (-4, 4)$$
   Z warunków 1 i 2 mamy:
   $$x \in (1, 4) \setminus \{2\}$$
3. **Istnienie tangensa w mianowniku:**
   $$\cos x \neq 0 \iff x \neq \frac{\pi}{2} + k\pi, \quad k \in \mathbb{Z}$$
   W przedziale $(1, 4)$ leży liczba $\frac{\pi}{2} \approx 1{,}57$. Wykluczamy $x = \frac{\pi}{2}$.
4. **Mianownik ułamka różny od zera:**
   $$\operatorname{tg} x \neq 0 \iff \sin x \neq 0 \iff x \neq k\pi, \quad k \in \mathbb{Z}$$
   W przedziale $(1, 4)$ leży liczba $\pi \approx 3{,}14$. Wykluczamy $x = \pi$.
5. Ostateczna dziedzina to część wspólna wszystkich warunków:
   $$D = (1; 4) \setminus \left\{ \frac{\pi}{2}, \; 2, \; \pi \right\}$$

---

### Zadanie 544 [* W]
**Treść zadania:**  
Wykaż, że dla każdej liczby $x$ zachodzi nierówność $\sin^8 x + \cos^8 x \ge \frac{1}{8}$.

**Odpowiedź:**  
Dowód w rozwiązaniu.

**Rozwiązanie krok po kroku:**  
1. Wprowadzamy oznaczenia $u = \sin^2 x$ oraz $v = \cos^2 x$. Wiemy, że $u + v = 1$ oraz:
   $$uv = \sin^2 x \cos^2 x = \frac{1}{4}(2\sin x \cos x)^2 = \frac{1}{4}\sin^2 2x$$
2. Obliczamy $\sin^4 x + \cos^4 x = u^2 + v^2$:
   $$u^2 + v^2 = (u + v)^2 - 2uv = 1 - 2 \cdot \frac{1}{4}\sin^2 2x = 1 - \frac{1}{2}\sin^2 2x$$
3. Obliczamy $\sin^8 x + \cos^8 x = u^4 + v^4$:
   $$u^4 + v^4 = (u^2 + v^2)^2 - 2(uv)^2 = \left(1 - \frac{1}{2}\sin^2 2x\right)^2 - 2\left(\frac{1}{4}\sin^2 2x\right)^2$$
   $$= 1 - \sin^2 2x + \frac{1}{4}\sin^4 2x - \frac{1}{8}\sin^4 2x = \frac{1}{8}\sin^4 2x - \sin^2 2x + 1$$
4. Niech $t = \sin^2 2x$. Ponieważ $\sin 2x \in [-1, 1]$, mamy $t \in [0, 1]$.
   Definiujemy funkcję:
   $$h(t) = \frac{1}{8}t^2 - t + 1, \quad t \in [0, 1]$$
5. Badamy funkcję $h(t)$:
   Odcięta wierzchołka paraboli wynosi:
   $$t_w = -\frac{b}{2a} = -\frac{-1}{2 \cdot \frac{1}{8}} = 4$$
   Ponieważ $t_w = 4 > 1$, a ramiona paraboli są skierowane w górę ($a = \frac{1}{8} > 0$), funkcja $h(t)$ jest ściśle malejąca w całym przedziale $[0, 1]$.
6. Wobec tego najmniejszą wartość funkcja osiąga na prawym końcu przedziału, czyli dla $t = 1$:
   $$h_{\min} = h(1) = \frac{1}{8}(1)^2 - 1 + 1 = \frac{1}{8}$$
7. Zatem dla każdego $t \in [0, 1]$ zachodzi:
   $$h(t) \ge \frac{1}{8} \implies \sin^8 x + \cos^8 x \ge \frac{1}{8}$$
   Nierówność jest prawdziwa dla wszystkich liczb rzeczywistych $x$, co kończy dowód.

---

### Zadanie 545 [* R]
**Treść zadania:**  
Rozwiąż równanie $\cos(x - 2) = x^2 - 4x + 5$.

**Odpowiedź:**  
$x = 2$.

**Rozwiązanie krok po kroku:**  
1. Zbadajmy zbiór wartości prawej strony równania:
   $$g(x) = x^2 - 4x + 5 = (x - 2)^2 + 1$$
   Dla każdego $x \in \mathbb{R}$ kwadrat $(x - 2)^2 \ge 0$, więc:
   $$g(x) \ge 1$$
   Najmniejsza wartość funkcji $g$ wynosi $g_{\min} = 1$ i jest przyjmowana wyłącznie dla $x = 2$.
2. Zbadajmy zbiór wartości lewej strony równania:
   $$f(x) = \cos(x - 2)$$
   Zbiór wartości funkcji cosinus to $[-1, 1]$, co oznacza, że dla każdego $x \in \mathbb{R}$:
   $$f(x) \le 1$$
   Największa możliwa wartość funkcji $f$ wynosi $f_{\max} = 1$.
3. Równość $f(x) = g(x)$ może zachodzić tylko wtedy, gdy obie strony są jednocześnie równe 1:
   $$\begin{cases} (x - 2)^2 + 1 = 1 \\ \cos(x - 2) = 1 \end{cases}$$
4. Z pierwszego równania:
   $$(x - 2)^2 = 0 \iff x = 2$$
5. Sprawdzamy drugie równanie dla $x = 2$:
   $$\cos(2 - 2) = \cos 0 = 1$$
   Równość jest spełniona.
6. Jedynym rozwiązaniem równania jest $x = 2$.

---

### Zadanie 546 [* W Egzamin dojrzałości (LO - profil matematyczno-fizyczny) w województwie słupskim w roku 1994]
**Treść zadania:**  
Rozwiąż równanie $2\cos x = \log y + \frac{1}{\log y}$.

**Odpowiedź:**  
$(x = 2k\pi \land y = 10) \quad \text{lub} \quad (x = \pi + 2k\pi \land y = 0{,}1), \quad \text{gdzie } k \in \mathbb{Z}$.

**Rozwiązanie krok po kroku:**  
1. **Dziedzina:**
   Argument logarytmu musi być dodatni: $y > 0$, a mianownik różny od zera: $\log y \neq 0 \iff y \neq 1$.
   Zatem $y \in (0, 1) \cup (1, +\infty)$, $x \in \mathbb{R}$.
2. **Zbiór wartości lewej strony:**
   Ponieważ $\cos x \in [-1, 1]$, mamy:
   $$L(x) = 2\cos x \in [-2, 2]$$
3. **Zbiór wartości prawej strony:**
   Niech $a = \log y \neq 0$. Badamy wyrażenie $P = a + \frac{1}{a}$:
   - Jeśli $a > 0$, to z nierówności między średnią arytmetyczną a geometryczną (lub z $\left(\sqrt{a} - \frac{1}{\sqrt{a}}\right)^2 \ge 0$):
     $$a + \frac{1}{a} \ge 2$$
     Równość zachodzi wtedy i tylko wtedy, gdy $a = 1$.
   - Jeśli $a < 0$, to podstawiając $b = -a > 0$:
     $$a + \frac{1}{a} = -\left(b + \frac{1}{b}\right) \le -2$$
     Równość zachodzi wtedy i tylko wtedy, gdy $a = -1$.
   Zatem zbiór wartości prawej strony to $(-\infty, -2] \cup [2, +\infty)$.
4. **Rozwiązanie równania:**
   Część wspólna zbioru wartości lewej strony $[-2, 2]$ i prawej strony $(-\infty, -2] \cup [2, +\infty)$ składa się z dwóch pojedynczych liczb: $\{-2, 2\}$.
   - **Przypadek I: obie strony są równe 2:**
     $$\begin{cases} 2\cos x = 2 \\ \log y + \frac{1}{\log y} = 2 \end{cases} \iff \begin{cases} \cos x = 1 \\ \log y = 1 \end{cases} \iff \begin{cases} x = 2k\pi, \; k \in \mathbb{Z} \\ y = 10^1 = 10 \end{cases}$$
   - **Przypadek II: obie strony są równe -2:**
     $$\begin{cases} 2\cos x = -2 \\ \log y + \frac{1}{\log y} = -2 \end{cases} \iff \begin{cases} \cos x = -1 \\ \log y = -1 \end{cases} \iff \begin{cases} x = \pi + 2k\pi, \; k \in \mathbb{Z} \\ y = 10^{-1} = 0{,}1 \end{cases}$$
5. Ostatecznie:
   $$(x = 2k\pi \text{ i } y = 10) \quad \text{lub} \quad (x = \pi + 2k\pi \text{ i } y = 0{,}1), \quad k \in \mathbb{Z}$$

---
