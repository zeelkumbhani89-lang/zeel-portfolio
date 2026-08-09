import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/ui/PageHeader";
import { Reveal, MagneticButton } from "@/components/ui/primitives";
import Faqs from "@/components/sections/Faqs";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ShieldCheck, FileText, RefreshCw } from "lucide-react";
import { complianceStandards } from "@/data/compliance";
import { siteConfig } from "@/lib/site";
import type { Faq } from "@/data/faqs";

const faqs: Faq[] = [
  {
    q: "Which laws and standards do you audit against?",
    a: "The DPDP Act (India), GDPR, HIPAA, IT Act 2000, CERT-In guidelines, OWASP standards and ISO-aligned practices. The testing method stays consistent; the compliance mapping changes per standard.",
  },
  {
    q: "Is this a legal certification?",
    a: "This is a technical security audit and compliance-readiness assessment, not a legal opinion. I test your systems, map findings to the relevant standard and give you a clear roadmap so you and your legal team can close the gaps.",
  },
  {
    q: "What do I get after the audit?",
    a: "An executive summary, a standard-mapped report, risk ratings, findings, a prioritised remediation roadmap and improvement recommendations.",
  },
  {
    q: "Why does compliance matter now?",
    a: "Laws like India's DPDP Act now carry real financial penalties for mishandling personal data. Enterprise clients also increasingly require proof of compliance before signing. A clean audit is both risk reduction and a sales advantage.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Cybersecurity Compliance & Cyber-Law Audit",
  provider: { "@type": "Person", name: siteConfig.name },
  areaServed: "Worldwide",
};

export default function Compliance() {
  return (
    <Layout>
      <Seo
        title="Compliance & Cyber-Law Audit — DPDP, GDPR, HIPAA, OWASP"
        description="Cybersecurity compliance and cyber-law audits by Zeel Kumbhani, mapped to the DPDP Act, GDPR, HIPAA, IT Act 2000, CERT-In, OWASP and ISO — with clear reporting and remediation."
        path="/compliance"
        jsonLd={jsonLd}
      />
      <PageHeader
        eyebrow="Compliance & Cyber-Law Audit"
        title={
          <>
            Audit that speaks the language of{" "}
            <span className="gradient-text">the law</span>
          </>
        }
        subtitle="Security testing mapped to the standards and cyber-laws that carry real penalties today — DPDP, GDPR, HIPAA, IT Act, CERT-In, OWASP and ISO."
      />

      <section className="section pt-6">
        <div className="container">
          <Reveal>
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Governments now issue real financial penalties for mishandling
              personal data, and enterprise clients demand proof of compliance
              before they sign. Pick a standard below to see exactly how I audit
              against it — and what you receive.
            </p>
          </Reveal>

          {/* Standards grid with real images */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {complianceStandards.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link to={`/compliance/${s.slug}`} className="block h-full">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group glass-card flex h-full flex-col overflow-hidden p-0"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <img
                        src={s.heroImage}
                        alt={s.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                        {s.region}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-semibold">
                        {s.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {s.tagline}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                        View audit details
                        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Trust row */}
          <Reveal delay={0.1}>
            <div className="glass-card mt-12 grid gap-6 p-8 text-center sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <ShieldCheck size={28} className="text-primary" />
                <p className="mt-3 font-display text-lg font-semibold">Law-mapped findings</p>
                <p className="mt-1 text-sm text-muted-foreground">Every issue tied to a specific standard or legal duty.</p>
              </div>
              <div className="flex flex-col items-center">
                <FileText size={28} className="text-primary" />
                <p className="mt-3 font-display text-lg font-semibold">Regulator-ready reports</p>
                <p className="mt-1 text-sm text-muted-foreground">Documentation your clients and auditors accept.</p>
              </div>
              <div className="flex flex-col items-center">
                <RefreshCw size={28} className="text-primary" />
                <p className="mt-3 font-display text-lg font-semibold">Free re-test</p>
                <p className="mt-1 text-sm text-muted-foreground">Fixes verified after remediation, at no extra cost.</p>
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.1}>
            <div className="glass-card mx-auto mt-12 max-w-3xl p-10 text-center">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Turn compliance into a competitive edge
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Get an audit that proves you take data protection seriously — and
                gives your clients a reason to choose you.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <MagneticButton to="/book-consultation">
                  Request a Compliance Audit
                  <ArrowRight size={16} />
                </MagneticButton>
                <MagneticButton href={`tel:${siteConfig.phoneRaw}`} variant="ghost">
                  {siteConfig.phone}
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Faqs
        faqs={faqs}
        eyebrow="Compliance FAQ"
        title={<>Compliance questions, <span className="gradient-text">answered</span></>}
        subtitle="How cyber-law audits work, what you receive and why they matter now."
      />
    </Layout>
  );
}
