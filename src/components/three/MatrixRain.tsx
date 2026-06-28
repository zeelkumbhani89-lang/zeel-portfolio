import { useEffect, useRef } from "react";

/**
 * Professional cyber network background:
 * slow-drifting nodes + connecting lines + glowing "data pulses"
 * that travel along the links. Subtle, premium, hacker-grade.
 * Same component name + props, so it works everywhere already used.
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

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;

    type Node = { x: number; y: number; vx: number; vy: number };
    type Pulse = { a: number; b: number; t: number; sp: number };
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];

    const LINK = 150;

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

      const count = Math.max(12, Math.round((w * h) / 32000 * density));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18 * speed,
        vy: (Math.random() - 0.5) * 0.18 * speed,
      }));
      pulses = [];
    };

    const spawnPulse = () => {
      if (nodes.length < 2) return;
      const a = (Math.random() * nodes.length) | 0;
      // pick a nearby node as target
      let b = -1;
      let best = LINK;
      for (let j = 0; j < nodes.length; j++) {
        if (j === a) continue;
        const d = Math.hypot(nodes[a].x - nodes[j].x, nodes[a].y - nodes[j].y);
        if (d < best) {
          best = d;
          b = j;
        }
      }
      if (b >= 0) pulses.push({ a, b, t: 0, sp: 0.012 + Math.random() * 0.02 });
    };

    let frame = 0;
    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      frame++;

      // move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK) {
            ctx.strokeStyle = `rgba(${color}, ${0.12 * (1 - dist / LINK)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${color}, 0.6)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // occasionally spawn a travelling data pulse
      if (frame % 35 === 0 && pulses.length < 6) spawnPulse();

      // draw + advance pulses
      pulses = pulses.filter((p) => {
        const a = nodes[p.a];
        const b = nodes[p.b];
        if (!a || !b) return false;
        p.t += p.sp;
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 6);
        glow.addColorStop(0, `rgba(${color}, 0.9)`);
        glow.addColorStop(1, `rgba(${color}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
        return p.t < 1;
      });

      raf = requestAnimationFrame(draw);
    };

    setup();
    if (!reduced) {
      draw();
    } else {
      running = false;
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${color}, 0.35)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
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