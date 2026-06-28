import { useEffect, useRef } from "react";

/**
 * "AI Sentinel" background — a single cinematic cyber scene:
 *  • a rotating 3D wireframe head (AI / deepfake identity)
 *  • scanning sweep analysing the face (biometric / detection)
 *  • incoming attack arcs that get intercepted by a protective shield pulse
 *  • faint data-stream glyphs for ambience
 * Same component name + props — drops in everywhere already used.
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
    const VIOLET = "139, 92, 246";
    const GREEN = "52, 211, 153";
    const glyphs = "01ｱｲｳｴｵｶ<>/{}[]#$%".split("");

    let w = 0, h = 0, raf = 0, running = true, frame = 0;
    let cx = 0, cy = 0, R = 0;

    // --- build a simple 3D head point cloud (sphere + jaw taper) ---
    type P3 = { x: number; y: number; z: number };
    const verts: P3[] = [];
    const edges: [number, number][] = [];
    const LAT = 9, LON = 14;
    for (let i = 0; i <= LAT; i++) {
      const theta = (i / LAT) * Math.PI; // 0..PI
      for (let j = 0; j < LON; j++) {
        const phi = (j / LON) * Math.PI * 2;
        let x = Math.sin(theta) * Math.cos(phi);
        let y = Math.cos(theta);
        let z = Math.sin(theta) * Math.sin(phi);
        // taper lower half into a chin (face-like)
        if (y < 0) { x *= 1 + y * 0.35; z *= 1 + y * 0.35; y *= 1.18; }
        verts.push({ x, y, z });
      }
    }
    const idx = (i: number, j: number) => i * LON + (j % LON);
    for (let i = 0; i < LAT; i++) {
      for (let j = 0; j < LON; j++) {
        edges.push([idx(i, j), idx(i, j + 1)]);
        edges.push([idx(i, j), idx(i + 1, j)]);
      }
    }

    type Arc = { ang: number; dist: number; t: number; sp: number; hue: string; blocked: boolean };
    let arcs: Arc[] = [];
    type Col = { x: number; y: number; sp: number; ch: string };
    let cols: Col[] = [];
    let scanA = 0;
    let shield = 0; // shield pulse intensity

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
      R = Math.min(w, h) * 0.26;
      arcs = [];
      const n = Math.max(6, Math.round((w / 70) * density));
      cols = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        sp: (0.4 + Math.random() * 0.8) * speed,
        ch: glyphs[(Math.random() * glyphs.length) | 0],
      }));
    };

    const spawnArc = () => {
      const palette = [RED, RED, VIOLET, ACCENT];
      arcs.push({
        ang: Math.random() * Math.PI * 2,
        dist: Math.max(w, h) * 0.6,
        t: 0,
        sp: (0.008 + Math.random() * 0.012) * speed,
        hue: palette[(Math.random() * palette.length) | 0],
        blocked: false,
      });
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      frame++;
      const time = frame * 0.01;

      // 1) ambient data glyph columns
      ctx.font = "12px monospace";
      for (const c of cols) {
        c.y += c.sp;
        if (c.y > h + 14) { c.y = -14; c.x = Math.random() * w; }
        if (Math.random() > 0.94) c.ch = glyphs[(Math.random() * glyphs.length) | 0];
        ctx.fillStyle = `rgba(${ACCENT}, 0.08)`;
        ctx.fillText(c.ch, c.x, c.y);
      }

      // 2) rotating 3D wireframe head
      const ay = time * 0.6;            // yaw
      const ax = Math.sin(time * 0.4) * 0.25; // slight nod
      const cosY = Math.cos(ay), sinY = Math.sin(ay);
      const cosX = Math.cos(ax), sinX = Math.sin(ax);
      const proj = verts.map((v) => {
        let x = v.x, y = v.y, z = v.z;
        // rotate Y
        let x1 = x * cosY - z * sinY;
        let z1 = x * sinY + z * cosY;
        // rotate X
        let y1 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;
        const persp = 1 / (1 + z2 * 0.35);
        return { x: cx + x1 * R * persp, y: cy + y1 * R * persp, z: z2, persp };
      });

      for (const [a, b] of edges) {
        const p = proj[a], q = proj[b];
        const depth = (p.z + q.z) / 2; // -1..1
        const alpha = 0.06 + (depth + 1) * 0.10; // front brighter
        ctx.strokeStyle = `rgba(${ACCENT}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = depth > 0 ? 1.1 : 0.6;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
      }
      // node points
      for (const p of proj) {
        if (p.z < 0) continue;
        ctx.fillStyle = `rgba(${ACCENT}, ${(0.2 + p.z * 0.4).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3) biometric scan sweep across the face
      scanA += 0.9 * speed;
      const sy = cy - R + ((scanA % (R * 2)));
      const sg = ctx.createLinearGradient(0, sy - 16, 0, sy + 16);
      sg.addColorStop(0, `rgba(${GREEN}, 0)`);
      sg.addColorStop(0.5, `rgba(${GREEN}, 0.10)`);
      sg.addColorStop(1, `rgba(${GREEN}, 0)`);
      ctx.fillStyle = sg;
      ctx.fillRect(cx - R * 1.3, sy - 16, R * 2.6, 32);
      ctx.strokeStyle = `rgba(${GREEN}, 0.25)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - R * 1.3, sy);
      ctx.lineTo(cx + R * 1.3, sy);
      ctx.stroke();

      // 4) protective shield ring around the head (pulses)
      shield *= 0.94;
      const ringR = R * 1.45;
      ctx.strokeStyle = `rgba(${ACCENT}, ${(0.12 + shield * 0.5).toFixed(3)})`;
      ctx.lineWidth = 1 + shield * 2;
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
      ctx.stroke();
      // dashed inner ring rotating
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time);
      ctx.strokeStyle = `rgba(${ACCENT}, 0.10)`;
      ctx.setLineDash([6, 10]);
      ctx.beginPath();
      ctx.arc(0, 0, ringR - 10, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // 5) incoming attacks intercepted by the shield
      const maxArcs = Math.round(5 * density) + 3;
      if (frame % 26 === 0 && arcs.length < maxArcs) spawnArc();
      arcs = arcs.filter((arc) => {
        arc.t += arc.sp;
        const d = arc.dist * (1 - arc.t);
        const x = cx + Math.cos(arc.ang) * d;
        const y = cy + Math.sin(arc.ang) * d;

        // trail
        const tx = cx + Math.cos(arc.ang) * (d + 26);
        const ty = cy + Math.sin(arc.ang) * (d + 26);
        const g = ctx.createLinearGradient(tx, ty, x, y);
        g.addColorStop(0, `rgba(${arc.hue}, 0)`);
        g.addColorStop(1, `rgba(${arc.hue}, 0.9)`);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(x, y);
        ctx.stroke();

        const glow = ctx.createRadialGradient(x, y, 0, x, y, 6);
        glow.addColorStop(0, `rgba(${arc.hue}, 1)`);
        glow.addColorStop(1, `rgba(${arc.hue}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();

        // hit the shield -> block + spark
        if (d <= ringR && !arc.blocked) {
          arc.blocked = true;
          shield = 1;
          for (let i = 0; i < 6; i++) {
            const sa = arc.ang + (Math.random() - 0.5) * 1.2;
            const sl = 8 + Math.random() * 12;
            ctx.strokeStyle = `rgba(${GREEN}, 0.7)`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(sa) * sl, y + Math.sin(sa) * sl);
            ctx.stroke();
          }
          return false; // blocked, remove
        }
        return arc.t < 1;
      });

      raf = requestAnimationFrame(draw);
    };

    setup();
    if (!reduced) {
      draw();
    } else {
      running = false;
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = `rgba(${ACCENT}, 0.15)`;
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