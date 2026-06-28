import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/ui/PageHeader";
import { Reveal, MagneticButton } from "@/components/ui/primitives";
import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck, FileCheck, ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import Faqs from "@/components/sections/Faqs";
import { industryFaqs } from "@/data/faqs";

export default function IndustrySolutions() {
  return (
    <Layout>
      <Seo
        title="Industry Solutions — Cybersecurity by Sector"
        description="Industry-specific cybersecurity in Surat & Gujarat for healthcare & hospitals, education, the diamond and textile industries, manufacturing, finance & fintech, e-commerce, hospitality, enterprise and startups — VAPT, compliance and security guidance by Zeel Kumbhani."
        path="/industry-solutions"
      />
      <PageHeader
        eyebrow="Industry Solutions"
        title={
          <>
            Security mapped to{" "}
            <span className="gradient-text">your industry's risks</span>
          </>
        }
        subtitle="Different sectors face different threats and compliance pressures. Here's how common risks play out — and how I can help. (Informational only, not legal advice.)"
      />

      <section className="section pt-8">
        <div className="container grid gap-6 md:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 2) * 0.06}>
              <motion.article
                whileHover={{ y: -5 }}
                className="group glass-card relative flex h-full flex-col overflow-hidden p-0"
              >
                {/* themed image banner with title overlaid */}
                <div className="relative h-44 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(/images/industries/${ind.slug}.jpg)` }}
                    aria-hidden="true"
                  />
                  {/* readability gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-card/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 flex items-center gap-3 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 backdrop-blur-sm">
                      <ind.icon size={24} />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-white drop-shadow-lg">
                        {ind.name}
                      </h2>
                      <p className="text-sm text-slate-300 drop-shadow">{ind.summary}</p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-1 flex-col space-y-5 p-7 text-sm">
                  <div>
                    <p className="flex items-center gap-2 font-semibold text-foreground">
                      <AlertTriangle size={15} className="text-amber-400" />
                      Common cyber risks
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {ind.risks.map((r) => (
                        <li key={r} className="text-muted-foreground">
                          • {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Business impact</p>
                    <p className="mt-1.5 leading-relaxed text-muted-foreground">
                      {ind.impact}
                    </p>
                  </div>

                  <div>
                    <p className="flex items-center gap-2 font-semibold text-foreground">
                      <FileCheck size={15} className="text-primary" />
                      Relevant frameworks
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {ind.compliance.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto rounded-xl border border-primary/15 bg-primary/5 p-4">
                    <p className="flex items-center gap-2 font-semibold text-primary">
                      <ShieldCheck size={15} />
                      How I can help
                    </p>
                    <p className="mt-1.5 leading-relaxed text-muted-foreground">
                      {ind.help}
                    </p>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <MagneticButton to="/book-consultation">
            Discuss your industry
            <ArrowRight size={16} />
          </MagneticButton>
        </Reveal>
      </section>

      <Faqs
        faqs={industryFaqs}
        eyebrow="Industry FAQ"
        title={
          <>
            Industry security <span className="gradient-text">questions</span>
          </>
        }
        subtitle="Common questions about sector-specific cyber risk, compliance and how engagements work."
      />
    </Layout>
  );
}
