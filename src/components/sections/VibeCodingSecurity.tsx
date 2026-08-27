import { motion } from "framer-motion";
import { AlertTriangle, Code2, ShieldAlert, Bug, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/primitives";

const flow = [
  { label: "AI Prompt", sub: "\"Build me an app\"", icon: Code2, color: "text-cyan-400", ring: "ring-cyan-400/30", glow: "bg-cyan-400/10" },
  { label: "Copy → Paste", sub: "Straight into production", icon: Code2, color: "text-blue-400", ring: "ring-blue-400/30", glow: "bg-blue-400/10" },
  { label: "Deploy", sub: "Nobody reviews the code", icon: Bug, color: "text-amber-400", ring: "ring-amber-400/30", glow: "bg-amber-400/10" },
  { label: "Vulnerability", sub: "API leaks · auth bypass · data exposed", icon: ShieldAlert, color: "text-red-500", ring: "ring-red-500/40", glow: "bg-red-500/15", danger: true },
];

const risks = [
  "Exposed API keys & secrets in AI-generated code",
  "Broken authentication & access control",
  "Data leakage from unreviewed logic",
  "Injection flaws copied straight from prompts",
  "No security testing before going live",
  "Hard-coded credentials pushed to production",
];

export default function VibeCodingSecurity() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden="true" />

      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Vibe-Coding Security"
          title={
            <>
              Built with AI?{" "}
              <span className="gradient-text">Someone still has to check the code.</span>
            </>
          }
          subtitle="Today most products are built with AI and vibe coding — prompt, copy, paste, deploy. Nobody reads the code. That's exactly where the dangerous bugs hide. We test the code no one else looks at."
        />

        {/* before → after images */}
        <div className="mt-14 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <motion.div whileHover={{ y: -6 }} className="relative">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-cyan-400/10 blur-2xl" aria-hidden="true" />
              <img
                src="/images/vibe-coder.png"
                alt="Developer using AI vibe coding to build and deploy an app without reviewing the code"
                className="relative z-10 w-full drop-shadow-2xl"
                loading="lazy"
              />
              <p className="relative z-10 mt-3 text-center text-sm font-medium text-cyan-400">
                Build fast with AI — copy, paste, deploy
              </p>
            </motion.div>
          </Reveal>

          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden text-3xl text-red-500 md:block"
          >
            →
          </motion.div>

          <Reveal delay={0.15}>
            <motion.div whileHover={{ y: -6 }} className="relative">
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-red-500/15 blur-2xl"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
              <img
                src="/images/vibe-hacked.png"
                alt="Hacked application leaking API keys, database records and personal data from unreviewed AI-generated code"
                className="relative z-10 w-full drop-shadow-2xl"
                loading="lazy"
              />
              <p className="relative z-10 mt-3 text-center text-sm font-medium text-red-500">
                Unchecked code → data breach
              </p>
            </motion.div>
          </Reveal>
        </div>

        {/* animated flow */}
        <div className="mt-14 flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-center">
          {flow.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center gap-4 md:flex-row">
              <motion.div
                initial={{ opacity: 0, y: 26, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.25, duration: 0.55, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative w-full md:w-48"
              >
                <motion.div
                  className={`pointer-events-none absolute inset-0 rounded-2xl blur-xl ${step.glow}`}
                  animate={
                    step.danger
                      ? { opacity: [0.3, 0.8, 0.3], scale: [1, 1.08, 1] }
                      : { opacity: [0.15, 0.35, 0.15] }
                  }
                  transition={{ duration: step.danger ? 1.6 : 3, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                <div className={`glass-card relative flex flex-col items-center p-6 text-center ring-1 ${step.ring}`}>
                  <motion.div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 ring-1 ${step.ring} ${step.color}`}
                    animate={step.danger ? { rotate: [0, -8, 8, -8, 0] } : {}}
                    transition={step.danger ? { duration: 0.6, repeat: Infinity, repeatDelay: 1.8 } : {}}
                  >
                    <step.icon size={26} />
                  </motion.div>
                  <h3 className="mt-4 font-display text-base font-semibold">{step.label}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.sub}</p>
                </div>
              </motion.div>

              {i < flow.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.25 + 0.3, duration: 0.4 }}
                  className="text-muted-foreground/50"
                >
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                    className="rotate-90 md:rotate-0"
                  >
                    <ArrowRight size={22} />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* danger callout */}
        <Reveal delay={0.3}>
          <motion.div
            className="mt-14 glass-card relative overflow-hidden border border-red-500/20 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-red-500/10 blur-3xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <AlertTriangle className="text-red-500" size={24} />
              </motion.div>
              <h3 className="font-display text-lg font-semibold">
                What we find in AI-generated &amp; vibe-coded apps
              </h3>
            </div>
            <ul className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
              {risks.map((r, i) => (
                <motion.li
                  key={r}
                  className="flex items-start gap-2.5 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Bug size={16} className="mt-0.5 shrink-0 text-red-500" />
                  <span className="text-muted-foreground">{r}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}