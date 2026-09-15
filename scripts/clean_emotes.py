#!/usr/bin/env python3
# clean_emotes.py (v2) - Czyszczenie emotek chibi:
#  1) flood-fill od pikseli przezroczystych — zjada tło połączone z zewnątrz:
#     a) jasne/białe (resztki białego tła)
#     b) średnio-jasne szarości/teale (np. kwadrat tła w card_pray)
#     Obrysy postaci są ciemne (max < 100) — Flood ich nie rusza.
#  2) defringe półprzezroczystych jasnych pikseli przy krawędzi.
#  3) trim do treści + 2 px marginesu.
from PIL import Image
import os
from collections import deque

DIR = "public/assets/emotes"

def is_bg_color(p):
    r, g, b, a = p
    if a == 0:
        return False
    mx, mn = max(r, g, b), min(r, g, b)
    sat = mx - mn
    # białe/jałowe tło
    if mx > 195 and sat < 52:
        return True
    # kwadraty tła w średnich szarościach/tealu (obrysy postaci mają max < 100)
    if 105 < mx < 175 and sat < 55:
        return True
    return False

for f in sorted(os.listdir(DIR)):
    if not f.endswith(".png"):
        continue
    path = os.path.join(DIR, f)
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    px = im.load()

    visited = [[False] * w for _ in range(h)]
    q = deque()
    for y in range(h):
        for x in range(w):
            if px[x, y][3] < 250:
                visited[y][x] = True
                q.append((x, y))
    removed = 0
    while q:
        x, y = q.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                p = px[nx, ny]
                if p[3] > 250:
                    visited[ny][nx] = True
                    if is_bg_color(p):
                        px[nx, ny] = (p[0], p[1], p[2], 0)
                        removed += 1
                        q.append((nx, ny))
                else:
                    visited[ny][nx] = True

    # defringe
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if 0 < a < 250 and max(r, g, b) > 190 and (max(r, g, b) - min(r, g, b)) < 55:
                near_trans = any(
                    0 <= x + dx < w and 0 <= y + dy < h and px[x + dx, y + dy][3] < 120
                    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1))
                )
                if near_trans:
                    px[x, y] = (r, g, b, int(a * 0.55))

    bbox = im.getbbox()
    if bbox:
        l, t, r_, b_ = bbox
        l = max(0, l - 2); t = max(0, t - 2)
        r_ = min(w, r_ + 2); b_ = min(h, b_ + 2)
        im = im.crop((l, t, r_, b_))

    im.save(path)
    print(f"{f}: usunieto {removed} px, rozmiar {im.size}")

print("done")
