import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/primitives";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { projects } from "@/data/projects";
import LiveScanTerminal from "@/components/sections/LiveScanTerminal";
import Faqs from "@/components/sections/Faqs";
import { projectFaqs } from "@/data/faqs";

export default function Projects() {
  return (
    <Layout>
      <Seo
        title="Projects & Case Studies"
        description="Ethical cybersecurity case studies by Zeel Kumbhani: WordPress malware recovery, e-commerce security assessment and responsible security research — presented honestly."
        path="/projects"
      />
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Case studies & <span className="gradient-text">ethical research</span>
          </>
        }
        subtitle="Real engagements, presented honestly — no unauthorised access, no fabricated numbers, just the work and the outcomes."
      />

      <section className="section pt-8">
        <div className="container">
          <Reveal className="mb-10">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl font-bold sm:text-3xl">
                  Full-spectrum <span className="gradient-text">VAPT</span>, A to Z
                </h2>
                <p className="mt-4 text-muted-foreground">
                  From websites and web apps to networks, APIs, mobile apps and
                  cloud — I cover the complete penetration-testing lifecycle.
                  Every engagement is authorised, manually validated, and
                  delivered with a clear proof-of-concept and prioritised fixes.
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
                  {["Website VAPT", "Web App VAPT", "Network VAPT", "API VAPT", "Mobile VAPT", "Cloud Security"].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-muted-foreground">
                      <ShieldCheck size={15} className="shrink-0 text-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <LiveScanTerminal />
            </div>
          </Reveal>

          <Reveal className="mb-10">
            <div className="glass-card flex items-start gap-3 p-5">
              <ShieldCheck className="mt-0.5 shrink-0 text-primary" size={20} />
              <p className="text-sm text-muted-foreground">
                All work shown here was performed with authorisation and follows
                responsible-disclosure principles. Sensitive client details are
                omitted to protect privacy.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to={`/projects/${p.slug}`}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className="glass-card group flex h-full flex-col p-7"
                  >
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                      {p.category}
                    </span>
                    <h2 className="mt-3 font-display text-lg font-semibold">
                      {p.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Read case study
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </motion.article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faqs
        faqs={projectFaqs}
        eyebrow="Projects FAQ"
        title={<>Questions about <span className="gradient-text">my work</span></>}
        subtitle="How engagements, authorisation and responsible disclosure work."
      />
    </Layout>
  );
}
