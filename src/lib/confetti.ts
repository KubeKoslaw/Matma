// confetti.ts - Port czystego JS konfetti z legacy/js/modules/trainer.js.
// Kontrakt: window.launchConfetti() — wołane z materialy (celebrate) i trenera.
// Canvas #confetti-canvas renderuje <App/> (position: fixed w app.css).

let particles: Array<{
  x: number; y: number; vx: number; vy: number;
  size: number; color: string; rotation: number; rotationSpeed: number; alpha: number;
}> = [];
let animId: number | null = null;
let ctx: CanvasRenderingContext2D | null = null;

function render() {
  if (!ctx) return;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  let alive = false;

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.35; // grawitacja
    p.rotation += p.rotationSpeed;
    p.alpha -= 0.015;

    if (p.alpha > 0) {
      alive = true;
      ctx!.save();
      ctx!.globalAlpha = Math.max(0, p.alpha);
      ctx!.translate(p.x, p.y);
      ctx!.rotate((p.rotation * Math.PI) / 180);
      ctx!.fillStyle = p.color;
      ctx!.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx!.restore();
    }
  });

  if (alive) {
    animId = requestAnimationFrame(render);
  } else {
    ctx!.clearRect(0, 0, ctx!.canvas.width, ctx!.canvas.height);
  }
}

export function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas") as HTMLCanvasElement | null;
  if (!canvas) return;
  if (!ctx) ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  particles = [];
  const colors = ["#38bdf8", "#34d399", "#c084fc", "#fbbf24", "#f43f5e", "#60a5fa"];
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 14,
      size: Math.random() * 8 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      alpha: 1
    });
  }

  if (animId) cancelAnimationFrame(animId);
  render();
}

window.launchConfetti = launchConfetti;
