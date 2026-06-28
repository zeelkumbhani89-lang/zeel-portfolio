import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

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
    }, 180);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-primary/20" />
            <div className="glass-card cyber-glow flex h-24 w-24 items-center justify-center rounded-2xl">
              <ShieldCheck className="text-primary" size={40} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-display text-lg font-semibold tracking-tight"
          >
            {siteConfig.name}
          </motion.h1>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {siteConfig.brandTagline}
          </p>

          <div className="mt-7 h-[3px] w-56 overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="mt-3 font-mono text-xs text-muted-foreground">
            {Math.round(progress)}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
