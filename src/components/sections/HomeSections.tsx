import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/primitives";
import { useCountUp } from "@/hooks/useCountUp";
import { stats, aboutBio, whyChooseMe } from "@/data/about";

/* ---------------- Stats ---------------- */
function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div className="glass-card p-6 text-center">
      <span ref={ref} className="font-display text-4xl font-bold gradient-text">
        {v}
        {suffix}
      </span>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section className="container -mt-10 relative z-20">
      <Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- About ---------------- */
export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="glow-blob absolute -left-10 -top-6 h-56 w-56 rounded-full bg-primary/15" />
            <div className="cyber-glow relative overflow-hidden rounded-3xl border border-primary/20">
              <img
                src="/images/zeel-gpbo.jpg"
                alt="Zeel Kumbhani at GPBO, Sardardham Surat"
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="glass absolute bottom-4 left-4 rounded-xl px-4 py-2.5">
                <p className="text-sm font-semibold">Zeel Kumbhani</p>
                <p className="text-xs text-muted-foreground">
                  Founder & CEO, CyberNexora
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <span className="eyebrow mb-4">
            <Sparkles size={14} />
            About Zeel
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
            Honest, founder-led cybersecurity you can{" "}
            <span className="gradient-text">actually act on</span>
          </h2>
          <div className="mt-6 space-y-4">
            {aboutBio.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-wrap gap-3">
              {["VAPT Analyst", "Ethical Hacking", "Incident Response", "OWASP"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
            <Link
              to="/community"
              className="btn-ghost mt-7"
            >
              See certifications & experience
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why choose me ---------------- */
export function WhyChooseMe() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Why work with me"
          title={
            <>
              Security that's <span className="gradient-text">clear, real and fair</span>
            </>
          }
          subtitle="No scanner dumps, no scare tactics, no inflated claims — just practical protection delivered with genuine ownership."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseMe.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card h-full p-7 transition-shadow hover:cyber-glow"
              >
                <CheckCircle2 className="text-primary" size={26} />
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
