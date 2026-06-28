import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight, Lock, Cpu, Zap, Terminal } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { MagneticButton } from "@/components/ui/primitives";
import MatrixRain from "@/components/three/MatrixRain";

const HeroScene = lazy(() => import("@/components/three/HeroScene"));

export default function Hero() {
  return (
    <section className="relative flex min-h-[94vh] items-center overflow-hidden pt-24 pb-16">
      {/* background blobs + grid */}
      <div className="pointer-events-none absolute inset-0">
        <MatrixRain density={0.4} speed={0.8} className="opacity-50" />
        <div className="glow-blob absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary/20" />
        <div className="glow-blob absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/20" />
        <div className="absolute inset-0 cyber-grid-bg opacity-60" />
        <div className="scanline absolute inset-0" />
      </div>

      {/* 3D scene on the right (attack network) */}
      <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <ShieldCheck size={14} />
            {siteConfig.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl lg:text-[4.1rem]"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-4 text-xl font-medium sm:text-2xl"
          >
            <span className="gradient-text">Cybersecurity Consultant</span>
            <span className="mx-2 text-muted-foreground">·</span>
            <span className="text-foreground">VAPT</span>
            <span className="mx-2 text-muted-foreground">·</span>
            <span className="text-foreground">Incident Response</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I help businesses across India and worldwide find and fix real cyber
            risk — through manual, ethical penetration testing, web & application
            security, malware recovery and awareness training. Founder-led, honest
            and affordable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <MagneticButton to="/book-consultation">
              Book a Consultation
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton to="/projects" variant="ghost">
              View Case Studies
            </MagneticButton>
          </motion.div>

          {/* mini terminal line for hacker feel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-black/40 px-3 py-2 font-mono text-xs text-primary/90"
          >
            <Terminal size={13} />
            <span className="text-muted-foreground">$</span>
            <span className="typing-caret">nmap -sV --script vuln target.host</span>
          </motion.div>
        </div>

        {/* Portrait — half-cut, transparent, floating in the dark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          // className="relative mx-auto hidden w-full max-w-md lg:block"
          className="relative mx-auto w-full max-w-xs lg:max-w-md mt-8 lg:mt-0"

        >
          {/* rotating ring */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
            <svg viewBox="0 0 400 400" className="h-full w-full opacity-40">
              <circle cx="200" cy="200" r="188" fill="none" stroke="hsl(196 100% 50%)" strokeWidth="1" strokeDasharray="14 12" />
              <circle cx="200" cy="200" r="150" fill="none" stroke="hsl(258 90% 66%)" strokeWidth="1" strokeDasharray="4 16" />
            </svg>
          </div>

          {/* glow behind subject */}
          <div className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[90px]" />

          <img
            src="/images/zeel-hero-cut.png"
            alt="Zeel Kumbhani — Cybersecurity Consultant & Founder of CyberNexora"
            className="relative z-10 mx-auto block max-h-[560px] w-auto object-contain object-center drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            loading="eager"
          />

          {/* floating chips */}
          <div className="glass-card absolute left-0 top-16 z-20 flex items-center gap-2 rounded-xl p-3 animate-float">
            <Lock size={16} className="text-primary" />
            <span className="text-xs font-medium">VAPT</span>
          </div>
          <div className="glass-card absolute right-0 top-1/3 z-20 flex items-center gap-2 rounded-xl p-3 animate-float-slow">
            <Zap size={16} className="text-accent" />
            <span className="text-xs font-medium">Incident Response</span>
          </div>
          <div className="glass-card absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 backdrop-blur-xl">
            <Cpu size={14} className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
              {siteConfig.brandTagline}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
