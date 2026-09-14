// angles.js - Tabela wartości funkcji trygonometrycznych 0°-360°

export const SPECIAL_ANGLES = [
  {
    deg: 0,
    radLatex: "0",
    radDecimal: 0,
    quadrant: "Oś",
    sinLatex: "0", sinVal: 0,
    cosLatex: "1", cosVal: 1,
    tgLatex: "0", tgVal: 0,
    ctgLatex: "\\text{brak}", ctgVal: null,
    wierszyk: "Oś dodatnia OX"
  },
  {
    deg: 15,
    radLatex: "\\frac{\\pi}{12}",
    radDecimal: 0.2618,
    quadrant: "I",
    sinLatex: "\\frac{\\sqrt{6}-\\sqrt{2}}{4}", sinVal: (Math.sqrt(6) - Math.sqrt(2)) / 4,
    cosLatex: "\\frac{\\sqrt{6}+\\sqrt{2}}{4}", cosVal: (Math.sqrt(6) + Math.sqrt(2)) / 4,
    tgLatex: "2-\\sqrt{3}", tgVal: 2 - Math.sqrt(3),
    ctgLatex: "2+\\sqrt{3}", ctgVal: 2 + Math.sqrt(3),
    wierszyk: "I ćwiartka: same plusy (+)"
  },
  {
    deg: 30,
    radLatex: "\\frac{\\pi}{6}",
    radDecimal: 0.5236,
    quadrant: "I",
    sinLatex: "\\frac{1}{2}", sinVal: 0.5,
    cosLatex: "\\frac{\\sqrt{3}}{2}", cosVal: Math.sqrt(3) / 2,
    tgLatex: "\\frac{\\sqrt{3}}{3}", tgVal: Math.sqrt(3) / 3,
    ctgLatex: "\\sqrt{3}", ctgVal: Math.sqrt(3),
    wierszyk: "I ćwiartka: same plusy (+)"
  },
  {
    deg: 45,
    radLatex: "\\frac{\\pi}{4}",
    radDecimal: 0.7854,
    quadrant: "I",
    sinLatex: "\\frac{\\sqrt{2}}{2}", sinVal: Math.SQRT2 / 2,
    cosLatex: "\\frac{\\sqrt{2}}{2}", cosVal: Math.SQRT2 / 2,
    tgLatex: "1", tgVal: 1,
    ctgLatex: "1", ctgVal: 1,
    wierszyk: "I ćwiartka: same plusy (+)"
  },
  {
    deg: 60,
    radLatex: "\\frac{\\pi}{3}",
    radDecimal: 1.0472,
    quadrant: "I",
    sinLatex: "\\frac{\\sqrt{3}}{2}", sinVal: Math.sqrt(3) / 2,
    cosLatex: "\\frac{1}{2}", cosVal: 0.5,
    tgLatex: "\\sqrt{3}", tgVal: Math.sqrt(3),
    ctgLatex: "\\frac{\\sqrt{3}}{3}", ctgVal: Math.sqrt(3) / 3,
    wierszyk: "I ćwiartka: same plusy (+)"
  },
  {
    deg: 75,
    radLatex: "\\frac{5\\pi}{12}",
    radDecimal: 1.3090,
    quadrant: "I",
    sinLatex: "\\frac{\\sqrt{6}+\\sqrt{2}}{4}", sinVal: (Math.sqrt(6) + Math.sqrt(2)) / 4,
    cosLatex: "\\frac{\\sqrt{6}-\\sqrt{2}}{4}", cosVal: (Math.sqrt(6) - Math.sqrt(2)) / 4,
    tgLatex: "2+\\sqrt{3}", tgVal: 2 + Math.sqrt(3),
    ctgLatex: "2-\\sqrt{3}", ctgVal: 2 - Math.sqrt(3),
    wierszyk: "I ćwiartka: same plusy (+)"
  },
  {
    deg: 90,
    radLatex: "\\frac{\\pi}{2}",
    radDecimal: 1.5708,
    quadrant: "Oś",
    sinLatex: "1", sinVal: 1,
    cosLatex: "0", cosVal: 0,
    tgLatex: "\\text{brak}", tgVal: null,
    ctgLatex: "0", ctgVal: 0,
    wierszyk: "Oś dodatnia OY (asymptota tg)"
  },
  {
    deg: 105,
    radLatex: "\\frac{7\\pi}{12}",
    radDecimal: 1.8326,
    quadrant: "II",
    sinLatex: "\\frac{\\sqrt{6}+\\sqrt{2}}{4}", sinVal: (Math.sqrt(6) + Math.sqrt(2)) / 4,
    cosLatex: "-\\frac{\\sqrt{6}-\\sqrt{2}}{4}", cosVal: -(Math.sqrt(6) - Math.sqrt(2)) / 4,
    tgLatex: "-(2+\\sqrt{3})", tgVal: -(2 + Math.sqrt(3)),
    ctgLatex: "-(2-\\sqrt{3})", ctgVal: -(2 - Math.sqrt(3)),
    wierszyk: "II ćwiartka: tylko sinus (+)"
  },
  {
    deg: 120,
    radLatex: "\\frac{2\\pi}{3}",
    radDecimal: 2.0944,
    quadrant: "II",
    sinLatex: "\\frac{\\sqrt{3}}{2}", sinVal: Math.sqrt(3) / 2,
    cosLatex: "-\\frac{1}{2}", cosVal: -0.5,
    tgLatex: "-\\sqrt{3}", tgVal: -Math.sqrt(3),
    ctgLatex: "-\\frac{\\sqrt{3}}{3}", ctgVal: -Math.sqrt(3) / 3,
    wierszyk: "II ćwiartka: tylko sinus (+)"
  },
  {
    deg: 135,
    radLatex: "\\frac{3\\pi}{4}",
    radDecimal: 2.3562,
    quadrant: "II",
    sinLatex: "\\frac{\\sqrt{2}}{2}", sinVal: Math.SQRT2 / 2,
    cosLatex: "-\\frac{\\sqrt{2}}{2}", cosVal: -Math.SQRT2 / 2,
    tgLatex: "-1", tgVal: -1,
    ctgLatex: "-1", ctgVal: -1,
    wierszyk: "II ćwiartka: tylko sinus (+)"
  },
  {
    deg: 150,
    radLatex: "\\frac{5\\pi}{6}",
    radDecimal: 2.6180,
    quadrant: "II",
    sinLatex: "\\frac{1}{2}", sinVal: 0.5,
    cosLatex: "-\\frac{\\sqrt{3}}{2}", cosVal: -Math.sqrt(3) / 2,
    tgLatex: "-\\frac{\\sqrt{3}}{3}", tgVal: -Math.sqrt(3) / 3,
    ctgLatex: "-\\sqrt{3}", ctgVal: -Math.sqrt(3),
    wierszyk: "II ćwiartka: tylko sinus (+)"
  },
  {
    deg: 165,
    radLatex: "\\frac{11\\pi}{12}",
    radDecimal: 2.8798,
    quadrant: "II",
    sinLatex: "\\frac{\\sqrt{6}-\\sqrt{2}}{4}", sinVal: (Math.sqrt(6) - Math.sqrt(2)) / 4,
    cosLatex: "-\\frac{\\sqrt{6}+\\sqrt{2}}{4}", cosVal: -(Math.sqrt(6) + Math.sqrt(2)) / 4,
    tgLatex: "-(2-\\sqrt{3})", tgVal: -(2 - Math.sqrt(3)),
    ctgLatex: "-(2+\\sqrt{3})", ctgVal: -(2 + Math.sqrt(3)),
    wierszyk: "II ćwiartka: tylko sinus (+)"
  },
  {
    deg: 180,
    radLatex: "\\pi",
    radDecimal: Math.PI,
    quadrant: "Oś",
    sinLatex: "0", sinVal: 0,
    cosLatex: "-1", cosVal: -1,
    tgLatex: "0", tgVal: 0,
    ctgLatex: "\\text{brak}", ctgVal: null,
    wierszyk: "Oś ujemna OX"
  },
  {
    deg: 195,
    radLatex: "\\frac{13\\pi}{12}",
    radDecimal: 3.4034,
    quadrant: "III",
    sinLatex: "-\\frac{\\sqrt{6}-\\sqrt{2}}{4}", sinVal: -(Math.sqrt(6) - Math.sqrt(2)) / 4,
    cosLatex: "-\\frac{\\sqrt{6}+\\sqrt{2}}{4}", cosVal: -(Math.sqrt(6) + Math.sqrt(2)) / 4,
    tgLatex: "2-\\sqrt{3}", tgVal: 2 - Math.sqrt(3),
    ctgLatex: "2+\\sqrt{3}", ctgVal: 2 + Math.sqrt(3),
    wierszyk: "III ćwiartka: tangens i cotangens (+)"
  },
  {
    deg: 210,
    radLatex: "\\frac{7\\pi}{6}",
    radDecimal: 3.6652,
    quadrant: "III",
    sinLatex: "-\\frac{1}{2}", sinVal: -0.5,
    cosLatex: "-\\frac{\\sqrt{3}}{2}", cosVal: -Math.sqrt(3) / 2,
    tgLatex: "\\frac{\\sqrt{3}}{3}", tgVal: Math.sqrt(3) / 3,
    ctgLatex: "\\sqrt{3}", ctgVal: Math.sqrt(3),
    wierszyk: "III ćwiartka: tangens i cotangens (+)"
  },
  {
    deg: 225,
    radLatex: "\\frac{5\\pi}{4}",
    radDecimal: 3.9270,
    quadrant: "III",
    sinLatex: "-\\frac{\\sqrt{2}}{2}", sinVal: -Math.SQRT2 / 2,
    cosLatex: "-\\frac{\\sqrt{2}}{2}", cosVal: -Math.SQRT2 / 2,
    tgLatex: "1", tgVal: 1,
    ctgLatex: "1", ctgVal: 1,
    wierszyk: "III ćwiartka: tangens i cotangens (+)"
  },
  {
    deg: 240,
    radLatex: "\\frac{4\\pi}{3}",
    radDecimal: 4.1888,
    quadrant: "III",
    sinLatex: "-\\frac{\\sqrt{3}}{2}", sinVal: -Math.sqrt(3) / 2,
    cosLatex: "-\\frac{1}{2}", cosVal: -0.5,
    tgLatex: "\\sqrt{3}", tgVal: Math.sqrt(3),
    ctgLatex: "\\frac{\\sqrt{3}}{3}", ctgVal: Math.sqrt(3) / 3,
    wierszyk: "III ćwiartka: tangens i cotangens (+)"
  },
  {
    deg: 255,
    radLatex: "\\frac{17\\pi}{12}",
    radDecimal: 4.4506,
    quadrant: "III",
    sinLatex: "-\\frac{\\sqrt{6}+\\sqrt{2}}{4}", sinVal: -(Math.sqrt(6) + Math.sqrt(2)) / 4,
    cosLatex: "-\\frac{\\sqrt{6}-\\sqrt{2}}{4}", cosVal: -(Math.sqrt(6) - Math.sqrt(2)) / 4,
    tgLatex: "2+\\sqrt{3}", tgVal: 2 + Math.sqrt(3),
    ctgLatex: "2-\\sqrt{3}", ctgVal: 2 - Math.sqrt(3),
    wierszyk: "III ćwiartka: tangens i cotangens (+)"
  },
  {
    deg: 270,
    radLatex: "\\frac{3\\pi}{2}",
    radDecimal: 4.7124,
    quadrant: "Oś",
    sinLatex: "-1", sinVal: -1,
    cosLatex: "0", cosVal: 0,
    tgLatex: "\\text{brak}", tgVal: null,
    ctgLatex: "0", ctgVal: 0,
    wierszyk: "Oś ujemna OY (asymptota tg)"
  },
  {
    deg: 285,
    radLatex: "\\frac{19\\pi}{12}",
    radDecimal: 4.9742,
    quadrant: "IV",
    sinLatex: "-\\frac{\\sqrt{6}+\\sqrt{2}}{4}", sinVal: -(Math.sqrt(6) + Math.sqrt(2)) / 4,
    cosLatex: "\\frac{\\sqrt{6}-\\sqrt{2}}{4}", cosVal: (Math.sqrt(6) - Math.sqrt(2)) / 4,
    tgLatex: "-(2+\\sqrt{3})", tgVal: -(2 + Math.sqrt(3)),
    ctgLatex: "-(2-\\sqrt{3})", ctgVal: -(2 - Math.sqrt(3)),
    wierszyk: "IV ćwiartka: tylko cosinus (+)"
  },
  {
    deg: 300,
    radLatex: "\\frac{5\\pi}{3}",
    radDecimal: 5.2360,
    quadrant: "IV",
    sinLatex: "-\\frac{\\sqrt{3}}{2}", sinVal: -Math.sqrt(3) / 2,
    cosLatex: "\\frac{1}{2}", cosVal: 0.5,
    tgLatex: "-\\sqrt{3}", tgVal: -Math.sqrt(3),
    ctgLatex: "-\\frac{\\sqrt{3}}{3}", ctgVal: -Math.sqrt(3) / 3,
    wierszyk: "IV ćwiartka: tylko cosinus (+)"
  },
  {
    deg: 315,
    radLatex: "\\frac{7\\pi}{4}",
    radDecimal: 5.4978,
    quadrant: "IV",
    sinLatex: "-\\frac{\\sqrt{2}}{2}", sinVal: -Math.SQRT2 / 2,
    cosLatex: "\\frac{\\sqrt{2}}{2}", cosVal: Math.SQRT2 / 2,
    tgLatex: "-1", tgVal: -1,
    ctgLatex: "-1", ctgVal: -1,
    wierszyk: "IV ćwiartka: tylko cosinus (+)"
  },
  {
    deg: 330,
    radLatex: "\\frac{11\\pi}{6}",
    radDecimal: 5.7596,
    quadrant: "IV",
    sinLatex: "-\\frac{1}{2}", sinVal: -0.5,
    cosLatex: "\\frac{\\sqrt{3}}{2}", cosVal: Math.sqrt(3) / 2,
    tgLatex: "-\\frac{\\sqrt{3}}{3}", tgVal: -Math.sqrt(3) / 3,
    ctgLatex: "-\\sqrt{3}", ctgVal: -Math.sqrt(3),
    wierszyk: "IV ćwiartka: tylko cosinus (+)"
  },
  {
    deg: 345,
    radLatex: "\\frac{23\\pi}{12}",
    radDecimal: 6.0214,
    quadrant: "IV",
    sinLatex: "-\\frac{\\sqrt{6}-\\sqrt{2}}{4}", sinVal: -(Math.sqrt(6) - Math.sqrt(2)) / 4,
    cosLatex: "\\frac{\\sqrt{6}+\\sqrt{2}}{4}", cosVal: (Math.sqrt(6) + Math.sqrt(2)) / 4,
    tgLatex: "-(2-\\sqrt{3})", tgVal: -(2 - Math.sqrt(3)),
    ctgLatex: "-(2+\\sqrt{3})", ctgVal: -(2 + Math.sqrt(3)),
    wierszyk: "IV ćwiartka: tylko cosinus (+)"
  },
  {
    deg: 360,
    radLatex: "2\\pi",
    radDecimal: 2 * Math.PI,
    quadrant: "Oś",
    sinLatex: "0", sinVal: 0,
    cosLatex: "1", cosVal: 1,
    tgLatex: "0", tgVal: 0,
    ctgLatex: "\\text{brak}", ctgVal: null,
    wierszyk: "Pełny obrót (360°)"
  }
];

function getPiFraction(deg) {
  if (deg === 0) return "0";
  if (deg === 360) return "2\\pi";
  if (deg === 180) return "\\pi";

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const div = gcd(deg, 180);
  const num = deg / div;
  const den = 180 / div;

  if (den === 1) return `${num}\\pi`;
  if (num === 1) return `\\frac{\\pi}{${den}}`;
  return `\\frac{${num}\\pi}{${den}}`;
}

export function generateFullTable() {
  const specialMap = new Map(SPECIAL_ANGLES.map(a => [a.deg, a]));
  const full = [];

  for (let deg = 0; deg <= 360; deg++) {
    const rad = (deg * Math.PI) / 180;
    const isSpecial = specialMap.has(deg);
    const spec = specialMap.get(deg);

    let quadrant = "I";
    let wierszyk = "I: same plusy (+)";
    if (deg === 0 || deg === 180 || deg === 360) {
      quadrant = "Oś X";
      wierszyk = "Granica ćwiartek";
    } else if (deg === 90 || deg === 270) {
      quadrant = "Oś Y";
      wierszyk = "Granica ćwiartek";
    } else if (deg > 0 && deg < 90) {
      quadrant = "I";
      wierszyk = "I: same plusy (+)";
    } else if (deg > 90 && deg < 180) {
      quadrant = "II";
      wierszyk = "II: tylko sinus (+)";
    } else if (deg > 180 && deg < 270) {
      quadrant = "III";
      wierszyk = "III: tangens i cotangens (+)";
    } else if (deg > 270 && deg < 360) {
      quadrant = "IV";
      wierszyk = "IV: tylko cosinus (+)";
    }

    const sinVal = Math.sin(rad);
    const cosVal = Math.cos(rad);
    
    const cleanSin = Math.abs(sinVal) < 1e-12 ? 0 : sinVal;
    const cleanCos = Math.abs(cosVal) < 1e-12 ? 0 : cosVal;

    let tgVal = null;
    let ctgVal = null;

    if (deg !== 90 && deg !== 270) {
      tgVal = Math.tan(rad);
    }

    if (deg !== 0 && deg !== 180 && deg !== 360) {
      ctgVal = 1 / Math.tan(rad);
    }

    full.push({
      deg,
      radLatex: getPiFraction(deg),
      radDecimal: Number(rad.toFixed(4)),
      quadrant,
      wierszyk,
      isSpecial,
      sinVal: Number(cleanSin.toFixed(4)),
      cosVal: Number(cleanCos.toFixed(4)),
      tgVal: tgVal !== null ? Number(tgVal.toFixed(4)) : null,
      ctgVal: ctgVal !== null ? Number(ctgVal.toFixed(4)) : null,
      sinLatex: isSpecial ? spec.sinLatex : cleanSin.toFixed(4),
      cosLatex: isSpecial ? spec.cosLatex : cleanCos.toFixed(4),
      tgLatex: isSpecial ? spec.tgLatex : (tgVal !== null ? tgVal.toFixed(4) : "\\text{brak}"),
      ctgLatex: isSpecial ? spec.ctgLatex : (ctgVal !== null ? ctgVal.toFixed(4) : "\\text{brak}")
    });
  }

  return full;
}
