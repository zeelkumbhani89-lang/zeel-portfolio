import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/ui/PageHeader";
import { Reveal, MagneticButton } from "@/components/ui/primitives";
import { motion } from "framer-motion";
import { Award, Users, BadgeCheck, ArrowRight } from "lucide-react";
import { certifications, memberships, timeline } from "@/data/about";

export default function Community() {
  const experience = timeline.filter(
    (t) => t.title.includes("Analyst") || t.title.includes("CEO")
  );

  return (
    <Layout>
      <Seo
        title="Community & Certifications"
        description="Genuine certifications, experience and community participation of Zeel Kumbhani — Cyber Octet, TryHackMe, OWASP API Top 10, AWS Security and GPBO membership."
        path="/community"
      />
      <PageHeader
        eyebrow="Community & Certifications"
        title={
          <>
            Credentials & <span className="gradient-text">community</span>
          </>
        }
        subtitle="Real, verifiable learning and genuine participation — no invented achievements, badges or titles."
      />

      <section className="section pt-8">
        <div className="container grid gap-8 lg:grid-cols-2">
          {/* Certifications */}
          <Reveal>
            <div className="glass-card h-full p-8">
              <div className="flex items-center gap-3">
                <Award className="text-primary" size={24} />
                <h2 className="font-display text-xl font-semibold">
                  Certifications & training
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {certifications.map((c, i) => (
                  <Reveal key={c} delay={i * 0.05}>
                    <li className="flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-3.5 text-sm">
                      <BadgeCheck
                        size={17}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span className="text-muted-foreground">{c}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Experience + Memberships */}
          <div className="space-y-8">
            <Reveal delay={0.05}>
              <div className="glass-card p-8">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="text-primary" size={24} />
                  <h2 className="font-display text-xl font-semibold">
                    Professional experience
                  </h2>
                </div>
                <div className="mt-6 space-y-5">
                  {experience.map((e) => (
                    <div key={e.title}>
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">
                        {e.period}
                      </p>
                      <h3 className="mt-0.5 font-display text-base font-semibold">
                        {e.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{e.org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-card p-8">
                <div className="flex items-center gap-3">
                  <Users className="text-primary" size={24} />
                  <h2 className="font-display text-xl font-semibold">
                    Community & memberships
                  </h2>
                </div>
                <div className="mt-6 space-y-4">
                  {memberships.map((m) => (
                    <motion.div
                      key={m.name}
                      whileHover={{ x: 4 }}
                      className="rounded-xl border border-border bg-secondary/50 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-sm font-semibold">
                          {m.name}
                        </h3>
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary">
                          {m.role}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {m.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-14 text-center">
          <MagneticButton to="/contact" variant="ghost">
            Connect with me
            <ArrowRight size={16} />
          </MagneticButton>
        </Reveal>
      </section>
    </Layout>
  );
}
