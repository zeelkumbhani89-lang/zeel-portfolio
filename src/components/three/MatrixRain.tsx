import { useEffect, useRef } from "react";

/**
 * "AI Threat Grid" background — layered for a high-tech hacker vibe:
 *  • faint data-stream columns (AI processing feel)
 *  • world threat-map hubs with travelling attack arcs (cyan / red / violet)
 *  • a slow horizontal scan sweep + occasional glitch flicker
 * Same component name + props, drops in everywhere already used.
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

    const CITIES: [number, number][] = [
      [0.12, 0.34], [0.17, 0.42], [0.22, 0.30], [0.27, 0.55],
      [0.30, 0.68], [0.33, 0.40], [0.20, 0.50],
      [0.47, 0.30], [0.50, 0.38], [0.52, 0.26], [0.55, 0.45],
      [0.49, 0.55], [0.53, 0.62],
      [0.62, 0.36], [0.68, 0.42], [0.72, 0.33], [0.66, 0.50],
      [0.74, 0.55], [0.78, 0.40], [0.82, 0.60], [0.70, 0.28],
      [0.84, 0.66], [0.60, 0.30], [0.58, 0.52],
    ];

    const ACCENT = color;
    const RED = "248, 113, 113";
    const VIOLET = "139, 92, 246";
    const glyphs = "01ｱｲｳｴｵｶ<>/{}[]#$%XYZ█▓".split("");

    let w = 0, h = 0, raf = 0, running = true, frame = 0;
    let pts: { x: number; y: number }[] = [];
    type Arc = { from: number; to: number; t: number; sp: number; hue: string };
    let arcs: Arc[] = [];
    type Col = { x: number; y: number; sp: number; ch: string };
    let cols: Col[] = [];
    let scan = 0;
    let glitch = 0;

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
      // sparse falling data glyph columns
      const n = Math.max(8, Math.round((w / 60) * density));
      cols = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        sp: (0.4 + Math.random() * 0.9) * speed,
        ch: glyphs[(Math.random() * glyphs.length) | 0],
      }));
      scan = 0;
    };

    const spawnArc = () => {
      if (pts.length < 2) return;
      const from = (Math.random() * pts.length) | 0;
      let to = (Math.random() * pts.length) | 0;
      if (to === from) to = (to + 1) % pts.length;
      const palette = [ACCENT, ACCENT, RED, VIOLET, ACCENT];
      arcs.push({
        from, to, t: 0,
        sp: (0.006 + Math.random() * 0.012) * speed,
        hue: palette[(Math.random() * palette.length) | 0],
      });
    };

    const qp = (a: any, c: any, b: any, tt: number) => {
      const u = 1 - tt;
      return {
        x: u * u * a.x + 2 * u * tt * c.x + tt * tt * b.x,
        y: u * u * a.y + 2 * u * tt * c.y + tt * tt * b.y,
      };
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      frame++;

      // 1) faint AI data-stream glyph columns
      ctx.font = "12px monospace";
      for (const c of cols) {
        c.y += c.sp;
        if (c.y > h + 14) {
          c.y = -14;
          c.x = Math.random() * w;
          c.ch = glyphs[(Math.random() * glyphs.length) | 0];
        }
        if (Math.random() > 0.92) c.ch = glyphs[(Math.random() * glyphs.length) | 0];
        ctx.fillStyle = `rgba(${ACCENT}, 0.10)`;
        ctx.fillText(c.ch, c.x, c.y);
      }

      // 2) threat-map hubs
      for (const p of pts) {
        ctx.fillStyle = `rgba(${ACCENT}, 0.5)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${ACCENT}, 0.07)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3) attack arcs
      const maxArcs = Math.round(7 * density) + 4;
      if (frame % 20 === 0 && arcs.length < maxArcs) spawnArc();
      arcs = arcs.filter((arc) => {
        const a = pts[arc.from], b = pts[arc.to];
        if (!a || !b) return false;
        arc.t += arc.sp;
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        const lift = Math.hypot(b.x - a.x, b.y - a.y) * 0.22;
        const c = { x: mx, y: my - lift };

        ctx.strokeStyle = `rgba(${arc.hue}, 0.10)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(c.x, c.y, b.x, b.y);
        ctx.stroke();

        const t = Math.min(arc.t, 1);
        const t0 = Math.max(0, t - 0.12);
        const s = qp(a, c, b, t0), e = qp(a, c, b, t);
        const g = ctx.createLinearGradient(s.x, s.y, e.x, e.y);
        g.addColorStop(0, `rgba(${arc.hue}, 0)`);
        g.addColorStop(1, `rgba(${arc.hue}, 0.9)`);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        for (let i = 1; i <= 8; i++) {
          const pnt = qp(a, c, b, t0 + ((t - t0) * i) / 8);
          ctx.lineTo(pnt.x, pnt.y);
        }
        ctx.stroke();

        const glow = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, 7);
        glow.addColorStop(0, `rgba(${arc.hue}, 1)`);
        glow.addColorStop(1, `rgba(${arc.hue}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(e.x, e.y, 7, 0, Math.PI * 2);
        ctx.fill();

        if (t >= 1) {
          ctx.strokeStyle = `rgba(${arc.hue}, 0.5)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
          ctx.stroke();
        }
        return arc.t < 1.05;
      });

      // 4) slow scan sweep
      scan += 0.6 * speed;
      if (scan > h) scan = 0;
      const sg = ctx.createLinearGradient(0, scan - 40, 0, scan + 40);
      sg.addColorStop(0, `rgba(${ACCENT}, 0)`);
      sg.addColorStop(0.5, `rgba(${ACCENT}, 0.06)`);
      sg.addColorStop(1, `rgba(${ACCENT}, 0)`);
      ctx.fillStyle = sg;
      ctx.fillRect(0, scan - 40, w, 80);
      ctx.strokeStyle = `rgba(${ACCENT}, 0.12)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, scan);
      ctx.lineTo(w, scan);
      ctx.stroke();

      // 5) occasional glitch flicker bars
      if (glitch > 0) {
        for (let i = 0; i < 3; i++) {
          const gy = Math.random() * h;
          ctx.fillStyle = `rgba(${Math.random() > 0.5 ? RED : ACCENT}, 0.07)`;
          ctx.fillRect(0, gy, w, 1 + Math.random() * 2);
        }
        glitch--;
      } else if (Math.random() > 0.992) {
        glitch = 4 + ((Math.random() * 5) | 0);
      }

      raf = requestAnimationFrame(draw);
    };

    setup();
    if (!reduced) {
      draw();
    } else {
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