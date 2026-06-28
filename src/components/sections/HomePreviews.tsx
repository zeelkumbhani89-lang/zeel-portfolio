import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading, MagneticButton } from "@/components/ui/primitives";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { projects } from "@/data/projects";
import { activities } from "@/data/about";

/* ---------------- Services preview ---------------- */
export function ServicesPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What I do"
          title={
            <>
              Cybersecurity <span className="gradient-text">services</span>
            </>
          }
          subtitle="From penetration testing to recovery and training — end-to-end security for modern businesses."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <motion.div whileHover={{ y: -6 }} className="glass-card group h-full p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.short}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <MagneticButton to="/services" variant="ghost">
            Explore all services
            <ArrowRight size={16} />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Industries preview ---------------- */
export function IndustriesPreview() {
  return (
    <section className="section">
      <div className="pointer-events-none absolute inset-0 cyber-grid-bg opacity-40" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Industry solutions"
          title={
            <>
              Tailored security for{" "}
              <span className="gradient-text">your industry</span>
            </>
          }
          subtitle="Every sector faces different threats. I map the right protection to your specific risks and compliance needs."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.slice(0, 9).map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.04}>
              <Link
                to="/industry-solutions"
                className="glass-card group flex h-full flex-col items-start gap-3 p-5 transition-transform hover:-translate-y-1.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ind.icon size={20} />
                </div>
                <h3 className="font-display text-sm font-semibold">{ind.name}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {ind.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <MagneticButton to="/industry-solutions" variant="ghost">
            View all industries
            <ArrowRight size={16} />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Projects preview ---------------- */
export function ProjectsPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Case studies & <span className="gradient-text">research</span>
            </>
          }
          subtitle="Real, ethical engagements — presented honestly, without unauthorised access or fabricated results."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07}>
              <Link
                to={`/projects/${p.slug}`}
                className="glass-card group flex h-full flex-col p-7 transition-transform hover:-translate-y-1.5"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {p.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read case study
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Activities preview ---------------- */
export function ActivitiesPreview() {
  return (
    <section className="section">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            center={false}
            eyebrow="On the ground"
            title={
              <>
                Seminars, talks & <span className="gradient-text">awareness</span>
              </>
            }
            subtitle="Beyond testing, I help teams and communities build everyday security habits through sessions, workshops and business talks."
          />
          <div className="mt-8 space-y-4">
            {activities.slice(0, 3).map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="glass-card flex items-start gap-4 p-5">
                  <div className="mt-0.5 rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {a.type}
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold">{a.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{a.venue}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <MagneticButton to="/activities" variant="ghost" className="mt-8">
              See all activities
              <ArrowRight size={16} />
            </MagneticButton>
          </Reveal>
        </div>

        <Reveal>
          <div className="cyber-glow relative overflow-hidden rounded-3xl border border-primary/20">
            <img
              src="/images/zeel-speaking.jpg"
              alt="Zeel Kumbhani presenting at GPBO business event"
              className="h-[460px] w-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
export function CtaSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="glass-card relative overflow-hidden p-10 text-center sm:p-16">
            <div className="glow-blob absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/20" />
            <div className="glow-blob absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-balance sm:text-4xl">
                Ready to find and fix your{" "}
                <span className="gradient-text">real cyber risk?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Book a no-pressure consultation. We'll talk through your concerns
                and the most practical next step for your business.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <MagneticButton to="/book-consultation">
                  Book a Consultation
                  <ArrowRight size={16} />
                </MagneticButton>
                <MagneticButton to="/contact" variant="ghost">
                  Get in touch
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
