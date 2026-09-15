# 1. PLANIMETRIA — PEŁNE ZESTAWIENIE ZADAŃ, ODPOWIEDZI I ROZWIĄZAŃ

> Kompletny spis teorii, przydatnych wzorów oraz zadań wprowadzających wraz z odpowiedziami i rozwiązaniami krok po kroku.

---

# CZĘŚĆ TEORETYCZNA — PRZYDATNE WZORY I WŁASNOŚCI

## 1. Trójkąty — własności i wzory na pole

- **Suma kątów w trójkącie:** $\alpha + \beta + \gamma = 180^\circ$.
- **Wzory na pole trójkąta ($P$):**
  - Standardowy: $P = \frac{1}{2} a \cdot h_a$
  - Z wykorzystaniem kąta: $P = \frac{1}{2} a b \sin\gamma$
  - Wzór Herona: $P = \sqrt{p(p - a)(p - b)(p - c)}$, gdzie $p = \frac{a + b + c}{2}$
  - Z promieniem okręgu wpisanego $r$: $P = p \cdot r$
  - Z promieniem okręgu opisanego $R$: $P = \frac{abc}{4R}$

---

## 2. Trójkąt równoboczny

Dla trójkąta równobocznego o boku $a$:
- Wysokość: $h = \frac{a\sqrt{3}}{2}$
- Pole: $P = \frac{a^2\sqrt{3}}{4}$
- Promień okręgu wpisanego: $r = \frac{1}{3}h = \frac{a\sqrt{3}}{6}$
- Promień okręgu opisanego: $R = \frac{2}{3}h = \frac{a\sqrt{3}}{3}$

---

## 3. Twierdzenie Pitagorasa, Sinusów i Cosinusów

- **Twierdzenie Pitagorasa (w trójkącie prostokątnym):** $a^2 + b^2 = c^2$.
- **Twierdzenie Sinusów:**
  $$\frac{a}{\sin\alpha} = \frac{b}{\sin\beta} = \frac{c}{\sin\gamma} = 2R$$
- **Twierdzenie Cosinusów:**
  $$c^2 = a^2 + b^2 - 2ab\cos\gamma$$

---

## 4. Czworokąty

- **Równoległobok:** $P = a \cdot h = ab\sin\alpha$, przekątne dzielą się na połowy.
- **Romb:** $P = a \cdot h = a^2\sin\alpha = \frac{e \cdot f}{2}$ (gdzie $e, f$ to przekątne). Przekątne są prostopadłe i dzielą kąty na połowy.
- **Trapez:** $P = \frac{a + b}{2} \cdot h$.
- **Okrąg opisany na czworokącie:** opisać okrąg można wtedy i tylko wtedy, gdy sumy przeciwległych kątów są równe $180^\circ$ ($\alpha + \gamma = \beta + \delta = 180^\circ$).
- **Okrąg wpisany w czworokąt:** wpisać okrąg można wtedy i tylko wtedy, gdy sumy długości przeciwległych boków są równe ($a + c = b + d$).

---

## 5. Okrąg i koło

- Długość okręgu: $L = 2\pi r$, Pole koła: $P = \pi r^2$.
- **Kąt środkowy i wpisany:** Kąt środkowy oparty na tym samym łuku jest dwa razy większy od kąta wpisanego. Kąt wpisany oparty na średnicy jest kątem prostym ($90^\circ$).

---

# ZADANIA WPROWADZAJĄCE DO DZIAŁU PLANIMETRIA

---

### Zadanie 1.1
**Treść zadania:**
Oblicz pole trójkąta o bokach długości $a = 6$, $b = 10$ oraz kącie między nimi $\gamma = 30^\circ$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Stosujemy wzór na pole trójkąta z sinusem kąta:
$$P = \frac{1}{2} a b \sin\gamma = \frac{1}{2} \cdot 6 \cdot 10 \cdot \sin 30^\circ$$
Ponieważ $\sin 30^\circ = \frac{1}{2}$:
$$P = 3 \cdot 10 \cdot \frac{1}{2} = 15$$
**Odpowiedź:** $P = 15$.

---

### Zadanie 1.2
**Treść zadania:**
Trójkąt równoboczny ma bok o długości $a = 4\sqrt{3}$. Oblicz wysokość $h$, pole $P$ oraz promień okręgu wpisanego $r$.

**Odpowiedź i Rozwiązanie krok po kroku:**
1. Wysokość $h = \frac{a\sqrt{3}}{2} = \frac{4\sqrt{3} \cdot \sqrt{3}}{2} = \frac{4 \cdot 3}{2} = 6$.
2. Pole $P = \frac{a^2\sqrt{3}}{4} = \frac{(4\sqrt{3})^2\sqrt{3}}{4} = \frac{48\sqrt{3}}{4} = 12\sqrt{3}$.
3. Promień okręgu wpisanego $r = \frac{1}{3}h = \frac{1}{3} \cdot 6 = 2$.
**Odpowiedź:** $h = 6$, $P = 12\sqrt{3}$, $r = 2$.

---

### Zadanie 1.3
**Treść zadania:**
W trójkącie boki mają długości $a = 5$ oraz $b = 8$, a kąt między nimi wynosi $\gamma = 60^\circ$. Oblicz długość trzeciego boku $c$.

**Odpowiedź i Rozwiązanie krok po kroku:**
Stosujemy twierdzenie cosinusów:
$$c^2 = a^2 + b^2 - 2ab\cos 60^\circ$$
$$c^2 = 5^2 + 8^2 - 2 \cdot 5 \cdot 8 \cdot \frac{1}{2} = 25 + 64 - 40 = 49$$
$$c = \sqrt{49} = 7$$
**Odpowiedź:** $c = 7$.

---

### Zadanie 1.4
**Treść zadania:**
Przekątne rombu mają długości $e = 12$ cm i $f = 16$ cm. Oblicz pole rombu oraz długość jego boku $a$.

**Odpowiedź i Rozwiązanie krok po kroku:**
1. Pole rombu:
$$P = \frac{e \cdot f}{2} = \frac{12 \cdot 16}{2} = 96\text{ cm}^2$$
2. Przekątne rombu przecinają się pod kątem prostym i dzielą na połowy. Rozważamy trójkąt prostokątny o przyprostokątnych $\frac{e}{2} = 6$ oraz $\frac{f}{2} = 8$ i przeciwprostokątnej $a$:
$$a^2 = 6^2 + 8^2 = 36 + 64 = 100 \implies a = 10\text{ cm}$$
**Odpowiedź:** $P = 96\text{ cm}^2$, $a = 10\text{ cm}$.

---

### Zadanie 1.5
**Treść zadania:**
Kąt środkowy oparty na pewnym łuku okręgu ma miarę $110^\circ$. Oblicz miarę kąta wpisanego opartego na tym samym łuku.

**Odpowiedź i Rozwiązanie krok po kroku:**
Z twierdzenia o kącie wpisanym i środkowym wiemy, że kąt wpisany jest równy połowie kąta środkowego opartego na tym samym łuku:
$$\alpha = \frac{1}{2} \cdot 110^\circ = 55^\circ$$
**Odpowiedź:** $55^\circ$.
