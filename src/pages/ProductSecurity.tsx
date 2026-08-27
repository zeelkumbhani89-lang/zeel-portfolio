import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/ui/PageHeader";
import { Reveal, MagneticButton } from "@/components/ui/primitives";
import Faqs from "@/components/sections/Faqs";
import { motion } from "framer-motion";
import {
  Boxes,
  Brain,
  Cloud,
  Code2,
  Smartphone,
  Network,
  Check,
  ArrowRight,
  ClipboardList,
  Target,
  Layers,
  Bug,
  ShieldCheck,
  FileCheck2,
  RefreshCw,
  Search,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import type { Faq } from "@/data/faqs";

const HERO_IMG =
  "https://cybernexora.com/wp-content/uploads/2026/07/ai-and-saas-security-1024x683.png";
const MID_IMG =
  "https://cybernexora.com/wp-content/uploads/2026/07/saas-product-testing.png";

/* What we test */
const surfaces = [
  {
    icon: Boxes,
    title: "SaaS Platforms",
    desc: "Multi-tenant apps, subscription logic, roles and data isolation tested end-to-end.",
  },
  {
    icon: Brain,
    title: "AI & LLM Applications",
    desc: "Prompt injection, model abuse, data leakage and insecure LLM integrations.",
  },
  {
    icon: Network,
    title: "APIs",
    desc: "REST & modern APIs against OWASP API Top 10 — auth, BOLA/IDOR and data exposure.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Misconfigurations, IAM, exposed services and insecure storage across your cloud.",
  },
  {
    icon: Code2,
    title: "Web & Software Products",
    desc: "Business logic, authentication and injection flaws in your core product.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Android/iOS storage, communication and the back-end APIs the app relies on.",
  },
];

/* Our process */
const process = [
  { icon: ClipboardList, title: "Asset & Scope Review", desc: "Identify applications, APIs and cloud assets, and agree the testing scope in writing." },
  { icon: Target, title: "Threat Modeling", desc: "Map likely attack paths and prioritise the highest-impact security risks first." },
  { icon: Layers, title: "Architecture Review", desc: "Review application design, cloud infrastructure and existing security controls." },
  { icon: Bug, title: "Manual Penetration Testing", desc: "Simulate real-world attacks to find genuinely exploitable vulnerabilities." },
  { icon: Cloud, title: "API & Cloud Testing", desc: "Assess APIs, cloud configuration, authentication and access controls." },
  { icon: Brain, title: "AI & LLM Assessment", desc: "Evaluate AI apps, LLM integrations, prompts and model-level security." },
  { icon: Search, title: "Risk Validation & Reporting", desc: "Validate every finding and deliver clear, prioritised remediation guidance." },
  { icon: RefreshCw, title: "Remediation & Re-Testing", desc: "Verify your fixes and confirm each vulnerability is fully resolved." },
];

/* Deliverables */
const deliverables = [
  "Executive Summary",
  "Technical Security Report",
  "Risk Prioritisation (CVSS)",
  "Proof of Concept (PoC)",
  "Remediation Guidance",
  "AI, API & Cloud Findings",
  "Re-Testing Verification",
];

const faqs: Faq[] = [
  {
    q: "What is SaaS, AI & Product Security?",
    a: "It identifies and fixes vulnerabilities across SaaS platforms, AI applications, APIs, cloud infrastructure and software products before attackers can exploit them.",
  },
  {
    q: "What products do you test?",
    a: "SaaS platforms, AI and LLM applications, web and mobile apps, APIs, cloud infrastructure and enterprise software.",
  },
  {
    q: "Why is manual penetration testing important?",
    a: "Manual testing uncovers complex business-logic flaws, authentication issues, API weaknesses and AI-specific risks that automated scanners routinely miss.",
  },
  {
    q: "What will I receive after the assessment?",
    a: "An executive summary, technical report, proof of concept, CVSS-based risk ratings, remediation guidance and re-testing verification.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "SaaS, AI & Product Security Testing",
  provider: { "@type": "Person", name: siteConfig.name },
  areaServed: "Worldwide",
  description:
    "Expert-led penetration testing and product security assessments for SaaS platforms, AI applications, APIs, cloud infrastructure and software products.",
};

export default function ProductSecurity() {
  return (
    <Layout>
      <Seo
        title="AI, LLM & SaaS Security Testing | Product Pentest"
                description="AI, LLM, SaaS, API and cloud security testing by Zeel Kumbhani — prompt injection testing, product penetration testing and application security assessments for modern software products in India and worldwide."
        path="/product-security"
        jsonLd={jsonLd}
      />
      <PageHeader
        eyebrow="SaaS, AI & Product Security"
        title={
          <>
            Secure your <span className="gradient-text">SaaS, AI & products</span>{" "}
            before attackers do
          </>
        }
        subtitle="Expert-led penetration testing and product security assessments across SaaS platforms, AI applications, APIs, cloud infrastructure and modern software."
      />

      {/* Intro + hero image */}
      <section className="section pt-6">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              What is SaaS, AI &amp; Product Security?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Modern digital products face increasingly sophisticated threats
              across SaaS platforms, AI systems, APIs, cloud infrastructure and
              software supply chains.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I help you identify, validate and remediate security
              vulnerabilities before attackers can exploit them — combining
              manual penetration testing with proven methodologies to strengthen
              your product across its whole lifecycle.
            </p>
            <MagneticButton to="/book-consultation" className="mt-7">
              Test Your Product Security
              <ArrowRight size={16} />
            </MagneticButton>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-primary/20">
              <img
                src={HERO_IMG}
                alt="SaaS, AI and product security testing"
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we test */}
      <section className="section pt-0">
        <div className="container">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              What I <span className="gradient-text">test</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              End-to-end coverage across every layer of your modern product.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {surfaces.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card h-full p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <s.icon size={22} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="section pt-0">
        <div className="container">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              My <span className="gradient-text">process</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              A structured methodology to find, validate and fix vulnerabilities
              before they become real-world threats.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.06}>
                <div className="glass-card flex h-full gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <p.icon size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-base font-semibold">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + image */}
      <section className="section pt-0">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-primary/20">
              <img
                src={MID_IMG}
                alt="Product security testing deliverables"
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              What you <span className="gradient-text">receive</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Every assessment ends with clear findings, validated risks and
              actionable fixes.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check size={13} />
                  </span>
                  <span className="text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Trust badges row */}
      <section className="section pt-0">
        <div className="container">
          <Reveal>
            <div className="glass-card grid gap-6 p-8 text-center sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <ShieldCheck size={28} className="text-primary" />
                <p className="mt-3 font-display text-lg font-semibold">
                  Manually validated
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  No scanner noise — every finding proven with a PoC.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FileCheck2 size={28} className="text-primary" />
                <p className="mt-3 font-display text-lg font-semibold">
                  Compliance-ready
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Reports that support DPDP, HIPAA, GDPR &amp; OWASP alignment.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <RefreshCw size={28} className="text-primary" />
                <p className="mt-3 font-display text-lg font-semibold">
                  Free re-test
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fixes verified after remediation, at no extra cost.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="container">
          <Reveal>
            <div className="glass-card mx-auto max-w-3xl p-10 text-center">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Protect your business before attackers do
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Expert-led penetration testing to identify, validate and
                remediate real security risks across your applications, cloud,
                APIs and AI systems.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <MagneticButton to="/book-consultation">
                  Get a Security Review
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
        eyebrow="Product Security FAQ"
        title={
          <>
            Secure your products with{" "}
            <span className="gradient-text">confidence</span>
          </>
        }
        subtitle="Answers about SaaS, AI, API, cloud and product security testing."
      />
    </Layout>
  );
}
