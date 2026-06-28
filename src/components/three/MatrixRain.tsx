import { useEffect, useRef } from "react";

/**
 * Live cyber "threat map" background — a stylised world dotted with city nodes,
 * with glowing attack arcs constantly travelling between them. CrowdStrike-style.
 * Same component name + props, so it drops in everywhere it's already used.
 */
export default function MatrixRain({
  className = "",
  density = 0.5,
  speed = 1,
  color = "56, 189, 248",
}: {
  className?: string;
  density?: number;
  speed?: number;
  color?: string;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Approx world map as normalised "city" hubs (x:0-1, y:0-1)
    const CITIES: [number, number][] = [
      [0.12, 0.34], [0.17, 0.42], [0.22, 0.30], [0.27, 0.55], // Americas
      [0.30, 0.68], [0.33, 0.40], [0.20, 0.50],
      [0.47, 0.30], [0.50, 0.38], [0.52, 0.26], [0.55, 0.45], // Europe/Africa
      [0.49, 0.55], [0.53, 0.62],
      [0.62, 0.36], [0.68, 0.42], [0.72, 0.33], [0.66, 0.50], // Asia
      [0.74, 0.55], [0.78, 0.40], [0.82, 0.60], [0.70, 0.28], // Asia/Oceania
      [0.84, 0.66], [0.60, 0.30], [0.58, 0.52],
    ];

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let frame = 0;

    type Arc = { from: number; to: number; t: number; sp: number; hue: string };
    let arcs: Arc[] = [];
    let pts: { x: number; y: number }[] = [];

    const ACCENT = color;
    const RED = "248, 113, 113";
    const VIOLET = "139, 92, 246";

    const setup = () => {
      const parent = canvas.parentElement;
      w = parent?.clientWidth ?? window.innerWidth;
      h = parent?.clientHeight ?? 400;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts = CITIES.map(([nx, ny]) => ({ x: nx * w, y: ny * h }));
      arcs = [];
    };

    const spawnArc = () => {
      if (pts.length < 2) return;
      const from = (Math.random() * pts.length) | 0;
      let to = (Math.random() * pts.length) | 0;
      if (to === from) to = (to + 1) % pts.length;
      const palette = [ACCENT, ACCENT, ACCENT, RED, VIOLET];
      const hue = palette[(Math.random() * palette.length) | 0];
      arcs.push({ from, to, t: 0, sp: (0.006 + Math.random() * 0.012) * speed, hue });
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      frame++;

      // city dots + soft halo
      for (const p of pts) {
        ctx.fillStyle = `rgba(${ACCENT}, 0.5)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${ACCENT}, 0.08)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // spawn arcs over time
      const maxArcs = Math.round(7 * density) + 4;
      if (frame % 22 === 0 && arcs.length < maxArcs) spawnArc();

      // draw arcs
      arcs = arcs.filter((arc) => {
        const a = pts[arc.from];
        const b = pts[arc.to];
        if (!a || !b) return false;
        arc.t += arc.sp;

        // control point above the midpoint -> curved arc
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2;
        const lift = Math.hypot(b.x - a.x, b.y - a.y) * 0.22;
        const cx = mx;
        const cy = my - lift;

        // faint full path
        ctx.strokeStyle = `rgba(${arc.hue}, 0.10)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(cx, cy, b.x, b.y);
        ctx.stroke();

        // bright travelling segment (the "attack")
        const t = Math.min(arc.t, 1);
        const trail = 0.12;
        const t0 = Math.max(0, t - trail);
        const qp = (tt: number) => {
          const u = 1 - tt;
          return {
            x: u * u * a.x + 2 * u * tt * cx + tt * tt * b.x,
            y: u * u * a.y + 2 * u * tt * cy + tt * tt * b.y,
          };
        };
        const s = qp(t0);
        const e = qp(t);
        const grad = ctx.createLinearGradient(s.x, s.y, e.x, e.y);
        grad.addColorStop(0, `rgba(${arc.hue}, 0)`);
        grad.addColorStop(1, `rgba(${arc.hue}, 0.9)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        const steps = 8;
        for (let i = 1; i <= steps; i++) {
          const tt = t0 + ((t - t0) * i) / steps;
          const pnt = qp(tt);
          ctx.lineTo(pnt.x, pnt.y);
        }
        ctx.stroke();

        // glowing head
        const glow = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, 7);
        glow.addColorStop(0, `rgba(${arc.hue}, 1)`);
        glow.addColorStop(1, `rgba(${arc.hue}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(e.x, e.y, 7, 0, Math.PI * 2);
        ctx.fill();

        // impact ring when arc lands
        if (t >= 1) {
          ctx.strokeStyle = `rgba(${arc.hue}, 0.5)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
          ctx.stroke();
        }
        return arc.t < 1.05;
      });

      raf = requestAnimationFrame(draw);
    };

    setup();
    if (!reduced) {
      draw();
    } else {
      // static frame
      running = false;
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        ctx.fillStyle = `rgba(${ACCENT}, 0.4)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const onResize = () => setup();
    const onVis = () => {
      const shouldRun = !document.hidden && !reduced;
      if (shouldRun && !running) {
        running = true;
        draw();
      } else if (!shouldRun) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [density, speed, color]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}