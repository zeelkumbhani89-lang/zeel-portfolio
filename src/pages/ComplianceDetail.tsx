import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { Reveal, MagneticButton } from "@/components/ui/primitives";
import { motion } from "framer-motion";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { complianceStandards, getStandard } from "@/data/compliance";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/* Sticky sidebar listing every standard */
function ComplianceSidebar({ activeSlug }: { activeSlug: string }) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="glass-card p-4">
        <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-primary">
          Standards & Laws
        </p>
        <nav className="flex flex-col gap-1">
          {complianceStandards.map((s) => (
            <Link
              key={s.slug}
              to={`/compliance/${s.slug}`}
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                s.slug === activeSlug
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {s.short}
              <span className="ml-2 text-[10px] uppercase tracking-wide text-muted-foreground/70">
                {s.region}
              </span>
            </Link>
          ))}
        </nav>
        <Link
          to="/compliance"
          className="mt-3 flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={13} />
          All compliance
        </Link>
      </div>
    </aside>
  );
}

export default function ComplianceDetail() {
  const { slug = "" } = useParams();
  const std = getStandard(slug);

  if (!std) return <Navigate to="/compliance" replace />;

  return (
    <Layout>
      <Seo
        title={`${std.name} Compliance Audit & Gap Assessment`}
        description={`${std.name} compliance and security audit by Zeel Kumbhani — ${std.tagline}. Gap assessment, remediation and reporting for businesses in India and worldwide.`}
        path={`/compliance/${std.slug}`}
      />

      <section className="section pt-28">
        <div className="container grid gap-10 lg:grid-cols-[260px_1fr]">
          <ComplianceSidebar activeSlug={std.slug} />

          <div className="min-w-0">
            {/* Hero */}
            <Reveal>
              <span className="eyebrow">{std.region} · Compliance Audit</span>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                {std.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {std.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative mt-8 overflow-hidden rounded-2xl border border-primary/20">
                <img
                  src={std.heroImage}
                  alt={std.name}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </Reveal>

            {/* Intro */}
            <Reveal delay={0.05}>
              <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {std.intro}
              </p>
            </Reveal>

            {/* Why */}
            <Reveal>
              <h2 className="mt-12 font-display text-2xl font-bold">
                Why <span className="gradient-text">{std.short}</span>?
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {std.why.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check size={13} />
                    </span>
                    <span className="text-muted-foreground">{w}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Process */}
            <Reveal>
              <h2 className="mt-12 font-display text-2xl font-bold">
                My testing <span className="gradient-text">process</span>
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {std.process.map((p, i) => (
                  <div key={p.title} className="glass-card flex gap-4 p-5">
                    <span className="text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* What we test */}
            <Reveal>
              <h2 className="mt-12 font-display text-2xl font-bold">
                What I <span className="gradient-text">test</span>
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {std.testGroups.map((g) => (
                  <motion.div
                    key={g.title}
                    whileHover={{ y: -4 }}
                    className="glass-card p-6"
                  >
                    <h3 className="font-display text-base font-semibold text-primary">
                      {g.title}
                    </h3>
                    <ul className="mt-3 grid gap-2">
                      {g.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm">
                          <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                          <span className="text-muted-foreground">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            {/* Deliverables + image */}
            <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
              <Reveal>
                <h2 className="font-display text-2xl font-bold">
                  What you <span className="gradient-text">receive</span>
                </h2>
                <ul className="mt-5 grid gap-3">
                  {std.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check size={13} />
                      </span>
                      <span className="text-muted-foreground">{d}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="relative overflow-hidden rounded-2xl border border-primary/20">
                  <img
                    src={std.midImage}
                    alt={`${std.name} report`}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              </Reveal>
            </div>

            {/* CTA */}
            <Reveal>
              <div className="glass-card mt-12 p-8 text-center">
                <h3 className="font-display text-xl font-bold sm:text-2xl">
                  Ready to check your {std.short} compliance?
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
                  Get a clear, prioritised audit and a roadmap to close every gap.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <MagneticButton to="/book-consultation">
                    Request this Audit
                    <ArrowRight size={16} />
                  </MagneticButton>
                  <MagneticButton href={`tel:${siteConfig.phoneRaw}`} variant="ghost">
                    {siteConfig.phone}
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
