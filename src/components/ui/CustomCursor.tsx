import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on fine-pointer (desktop) devices
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);

    let rx = 0,
      ry = 0,
      mx = 0,
      my = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
      const t = e.target as HTMLElement;
      const interactive = t.closest("a,button,[role=button],input,textarea,select");
      if (ring.current) {
        ring.current.style.width = interactive ? "52px" : "30px";
        ring.current.style.height = interactive ? "52px" : "30px";
        ring.current.style.borderColor = interactive
          ? "hsl(196 100% 50% / 0.9)"
          : "hsl(196 100% 50% / 0.4)";
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-primary"
        style={{ mixBlendMode: "screen" }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[15px] -mt-[15px] h-[30px] w-[30px] rounded-full border transition-[width,height,border-color] duration-200"
        style={{ borderColor: "hsl(196 100% 50% / 0.4)" }}
      />
    </>
  );
}
