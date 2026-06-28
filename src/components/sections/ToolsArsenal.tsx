import { useEffect, useRef } from "react";

/**
 * Globe + Matrix rain background.
 * Accepts className, density, speed, color props (used by Hero, PageHeader, ProjectDetail).
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

    const ACCENT = color;
    const RED = "248, 113, 113";

    let w = 0, h = 0, raf = 0, running = true, frame = 0;
    let cx = 0, cy = 0, R = 0;

    type Drop = { x: number; y: number; sp: number; chars: string[] };
    let drops: Drop[] = [];
    const fontSize = 14;

    type P3 = { x: number; y: number; z: number };
    const grid: P3[] = [];
    const cities: P3[] = [];
    const LAT = 12, LON = 24;
    const sph = (latF: number, lonF: number): P3 => {
      const theta = latF * Math.PI;
      const phi = lonF * Math.PI * 2;
      return {
        x: Math.sin(theta) * Math.cos(phi),
        y: Math.cos(theta),
        z: Math.sin(theta) * Math.sin(phi),
      };
    };
    for (let i = 1; i < LAT; i++)
      for (let j = 0; j < LON; j++) grid.push(sph(i / LAT, j / LON));
    const cityCoords: [number, number][] = [
      [0.30, 0.10], [0.34, 0.18], [0.40, 0.05], [0.38, 0.55],
      [0.45, 0.62], [0.32, 0.78], [0.50, 0.30], [0.55, 0.85],
      [0.42, 0.40], [0.60, 0.20], [0.36, 0.92], [0.48, 0.70],
    ];
    cityCoords.forEach(([la, lo]) => cities.push(sph(la, lo)));

    type Arc = { a: number; b: number; t: number; sp: number; hue: string };
    let arcs: Arc[] = [];

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
      cx = w * 0.5;
      cy = h * 0.5;
      R = Math.min(w, h) * 0.42;
      arcs = [];

      const cols = Math.floor((w / fontSize) * density);
      drops = Array.from({ length: cols }, (_, i) => ({
        x: i * fontSize * (1 / density),
        y: Math.random() * h,
        sp: (0.6 + Math.random() * 1.2) * speed,
        chars: Array.from({ length: 6 + ((Math.random() * 8) | 0) }, () =>
          Math.random() > 0.5 ? "1" : "0"
        ),
      }));
    };

    const rot = (p: P3, ay: number) => {
      const cosY = Math.cos(ay), sinY = Math.sin(ay);
      const x1 = p.x * cosY - p.z * sinY;
      const z1 = p.x * sinY + p.z * cosY;
      const tilt = -0.35;
      const y1 = p.y * Math.cos(tilt) - z1 * Math.sin(tilt);
      const z2 = p.y * Math.sin(tilt) + z1 * Math.cos(tilt);
      return { x: x1, y: y1, z: z2 };
    };
    const project = (p: P3) => ({ x: cx + p.x * R, y: cy + p.y * R, z: p.z });

    const spawnArc = () => {
      if (cities.length < 2) return;
      const a = (Math.random() * cities.length) | 0;
      let b = (Math.random() * cities.length) | 0;
      if (b === a) b = (b + 1) % cities.length;
      arcs.push({
        a, b, t: 0,
        sp: (0.006 + Math.random() * 0.01) * speed,
        hue: Math.random() > 0.6 ? RED : ACCENT,
      });
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      frame++;
      const ay = frame * 0.0016 * speed;

      // falling binary matrix
      ctx.font = `${fontSize}px monospace`;
      for (const d of drops) {
        d.y += d.sp;
        if (d.y - d.chars.length * fontSize > h) {
          d.y = -Math.random() * 80;
          if (Math.random() > 0.6)
            d.chars = Array.from({ length: 6 + ((Math.random() * 8) | 0) }, () =>
              Math.random() > 0.5 ? "1" : "0"
            );
        }
        for (let k = 0; k < d.chars.length; k++) {
          const yy = d.y - k * fontSize;
          if (yy < 0 || yy > h) continue;
          const a = k === 0 ? 0.45 : Math.max(0, 0.22 - k * 0.03);
          ctx.fillStyle = `rgba(${ACCENT}, ${a.toFixed(3)})`;
          ctx.fillText(d.chars[k], d.x, yy);
        }
      }

      // globe wireframe dots
      for (const g of grid) {
        const r = rot(g, ay);
        const p = project(r);
        const front = (r.z + 1) / 2;
        ctx.fillStyle = `rgba(${ACCENT}, ${(0.04 + front * 0.10).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.9, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.strokeStyle = `rgba(${ACCENT}, 0.08)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      const cproj = cities.map((c) => project(rot(c, ay)));
      for (const c of cproj) {
        if (c.z < -0.2) continue;
        const front = (c.z + 1) / 2;
        ctx.fillStyle = `rgba(${ACCENT}, ${(0.3 + front * 0.5).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(c.x, c.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      const maxArcs = Math.round(6 * density) + 3;
      if (frame % 24 === 0 && arcs.length < maxArcs) spawnArc();
      arcs = arcs.filter((arc) => {
        const A = cproj[arc.a], B = cproj[arc.b];
        if (!A || !B) return false;
        arc.t += arc.sp;
        const mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2;
        const lift = Math.hypot(B.x - A.x, B.y - A.y) * 0.3;
        const C = { x: mx, y: my - lift };
        const qp = (tt: number) => {
          const u = 1 - tt;
          return {
            x: u * u * A.x + 2 * u * tt * C.x + tt * tt * B.x,
            y: u * u * A.y + 2 * u * tt * C.y + tt * tt * B.y,
          };
        };
        ctx.strokeStyle = `rgba(${arc.hue}, 0.08)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.quadraticCurveTo(C.x, C.y, B.x, B.y);
        ctx.stroke();
        const t = Math.min(arc.t, 1);
        const e = qp(t), s = qp(Math.max(0, t - 0.1));
        const grad = ctx.createLinearGradient(s.x, s.y, e.x, e.y);
        grad.addColorStop(0, `rgba(${arc.hue}, 0)`);
        grad.addColorStop(1, `rgba(${arc.hue}, 0.85)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(e.x, e.y);
        ctx.stroke();
        const glow = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, 5);
        glow.addColorStop(0, `rgba(${arc.hue}, 0.9)`);
        glow.addColorStop(1, `rgba(${arc.hue}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(e.x, e.y, 5, 0, Math.PI * 2);
        ctx.fill();
        return arc.t < 1.05;
      });

      raf = requestAnimationFrame(draw);
    };

    setup();
    if (!reduced) draw();
    else {
      running = false;
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = `rgba(${ACCENT}, 0.12)`;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();
    }

    const onResize = () => setup();
    const onVis = () => {
      const shouldRun = !document.hidden && !reduced;
      if (shouldRun && !running) { running = true; draw(); }
      else if (!shouldRun) { running = false; cancelAnimationFrame(raf); }
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