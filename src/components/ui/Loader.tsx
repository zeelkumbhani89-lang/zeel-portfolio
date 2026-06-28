import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site";
import MatrixRain from "@/components/three/MatrixRain";

const BOOT = [
  "$ initializing secure shell ...",
  "$ loading cyber defense modules ...",
  "$ auth: key accepted ✓",
  "$ establishing encrypted tunnel ...",
  "$ system ready ▸",
];

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [bootLine, setBootLine] = useState(0);

  useEffect(() => {
    const seen = sessionStorage.getItem("zk_loaded");
    if (seen) {
      setDone(true);
      return;
    }
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => {
          sessionStorage.setItem("zk_loaded", "1");
          setDone(true);
        }, 450);
      }
      setProgress(Math.min(p, 100));
      setBootLine(Math.min(BOOT.length - 1, Math.floor((p / 100) * BOOT.length)));
    }, 180);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden bg-background"
        >
          {/* hacker matrix background */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <MatrixRain density={0.6} speed={1.1} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mb-8"
          >
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-primary/20" />
            <div className="glass-card cyber-glow flex h-24 w-24 items-center justify-center rounded-2xl">
              <img src="/images/logo-shield.png" alt="Zeel Kumbhani" className="h-14 w-14 object-contain" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 font-display text-lg font-semibold tracking-tight"
          >
            {siteConfig.name}
          </motion.h1>
          <p className="relative z-10 mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {siteConfig.brandTagline}
          </p>

          {/* boot line */}
          <p className="relative z-10 mt-5 h-4 font-mono text-xs text-primary/80">
            {BOOT[bootLine]}
          </p>

          <div className="relative z-10 mt-4 h-[3px] w-56 overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="relative z-10 mt-3 font-mono text-xs text-muted-foreground">
            {Math.round(progress)}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}