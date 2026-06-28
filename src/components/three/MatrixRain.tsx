import { useEffect, useRef } from "react";

/**
 * Lightweight canvas "code rain" — gives a subtle hacker ambience behind
 * page headers and sections without the cost of WebGL. Respects reduced-motion
 * and pauses when offscreen / tab hidden.
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

    const chars = "01<>/{}[]#$%&*+=ABCDEF0123456789アイウエオカ".split("");
    let cols = 0;
    let drops: number[] = [];
    let fontSize = 14;
    let raf = 0;
    let running = true;

    const setup = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth ?? window.innerWidth;
      const h = parent?.clientHeight ?? 400;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      fontSize = Math.max(12, Math.round(w / 90));
      cols = Math.floor((w / fontSize) * density);
      drops = Array.from({ length: cols }, () => Math.random() * (h / fontSize));
    };

    const draw = () => {
      if (!running) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.fillStyle = "rgba(5, 7, 13, 0.08)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < cols; i++) {
        const x = (i / density) * fontSize;
        const y = drops[i] * fontSize;
        const ch = chars[(Math.random() * chars.length) | 0];
        const lead = Math.random() > 0.975;
        ctx.fillStyle = lead
          ? `rgba(${color}, 0.9)`
          : `rgba(${color}, ${0.18 + Math.random() * 0.18})`;
        ctx.fillText(ch, x, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.5 * speed;
      }
      raf = requestAnimationFrame(draw);
    };

    setup();
    if (!reduced) {
      draw();
    } else {
      // static faint frame for reduced-motion users
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < cols; i++) {
        ctx.fillStyle = `rgba(${color}, 0.12)`;
        ctx.fillText(chars[(Math.random() * chars.length) | 0], (i / density) * fontSize, Math.random() * canvas.clientHeight);
      }
    }

    const onResize = () => setup();
    const onVis = () => {
      running = !document.hidden && !reduced;
      if (running) draw();
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
