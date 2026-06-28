import { motion } from "framer-motion";
import type { ReactNode } from "react";
import MatrixRain from "@/components/three/MatrixRain";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-6 pt-10 lg:pb-10 lg:pt-16">
      <div className="pointer-events-none absolute inset-0">
        <MatrixRain density={0.45} speed={0.9} />
        <div className="glow-blob absolute -left-20 -top-10 h-72 w-72 rounded-full bg-primary/15" />
        <div className="glow-blob absolute right-0 top-0 h-72 w-72 rounded-full bg-accent/15" />
        <div className="absolute inset-0 cyber-grid-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
      <div className="container relative">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
