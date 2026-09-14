// hub.js - Menu startowe: wybór działu matematyki
// Dodanie nowego działu = nowy wpis w DZIALY + podpięcie modułu w app.js (openDzial)

const DZIALY = [
  {
    id: "trygonometria",
    title: "Trygonometria",
    desc: "Okrąg • Tabela 0-360° • Wzory • Zadania • Trener",
    icon: "sigma",
    available: true
  },
  {
    id: "funkcje",
    title: "Funkcje",
    desc: "Przygotowuję zadania ze zbiorów CKE",
    icon: "chart-line",
    available: false
  },
  {
    id: "planimetria",
    title: "Planimetria",
    desc: "Przygotowuję zadania ze zbiorów CKE",
    icon: "shapes",
    available: false
  },
  {
    id: "geometria-analityczna",
    title: "Geometria analityczna",
    desc: "Teoria, wzory i 129 zadań z rozwiązaniami",
    icon: "ruler",
    available: true
  },
  {
    id: "ciagi",
    title: "Ciągi",
    desc: "Przygotowuję zadania ze zbiorów CKE",
    icon: "list-ordered",
    available: false
  },
  {
    id: "probabilitata",
    title: "Probabilitata i statystyka",
    desc: "Przygotowuję zadania ze zbiorów CKE",
    icon: "dice-5",
    available: false
  }
];

export function initHub(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="hub-header">
      <h2>Matematyka</h2>
      <p>Wybierz dział, aby rozpocząć naukę</p>
    </div>

    <div class="hub-list">
      ${DZIALY.map(d => `
        <div class="hub-card ${d.available ? "available" : "soon"}" data-dzial="${d.id}" role="button" tabindex="${d.available ? 0 : -1}">
          <div class="hub-icon"><i data-lucide="${d.icon}"></i></div>
          <div class="hub-info">
            <h3>${d.title} ${d.available ? "" : '<span class="hub-soon-badge">Wkrótce</span>'}</h3>
            <p>${d.desc}</p>
          </div>
          ${d.available ? '<i data-lucide="chevron-right" class="hub-chevron"></i>' : ""}
        </div>
      `).join("")}
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  container.querySelectorAll(".hub-card.available").forEach(card => {
    const open = () => window.openDzial?.(card.dataset.dzial);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });
  });

  container.querySelectorAll(".hub-card.soon").forEach(card => {
    card.addEventListener("click", () => {
      const tytul = card.querySelector("h3")?.textContent.replace("Wkrótce", "").trim();
      window.showToast?.(`„${tytul}” będzie dostępny wkrótce 🚧`);
    });
  });
}
