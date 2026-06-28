import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/ui/PageHeader";
import { Reveal, MagneticButton } from "@/components/ui/primitives";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site";
import Faqs from "@/components/sections/Faqs";
import { servicesFaqs } from "@/data/faqs";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Person", name: siteConfig.name },
  areaServed: "Worldwide",
  serviceType: services.map((s) => s.title),
};

export default function Services() {
  return (
    <Layout>
      <Seo
        title="Cybersecurity Services — VAPT, Web Security & More"
        description="Explore Zeel Kumbhani's cybersecurity services: VAPT, web & application security, malware removal, SEO spam recovery, incident response, consulting and awareness training."
        path="/services"
        jsonLd={jsonLd}
      />
      <PageHeader
        eyebrow="Services"
        title={
          <>
            End-to-end <span className="gradient-text">cybersecurity services</span>
          </>
        }
        subtitle="Practical, manually-validated security work delivered with clear reporting — for businesses of every size, across India and worldwide."
      />

      <section className="section pt-8">
        <div className="container grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group glass-card relative flex h-full flex-col overflow-hidden p-8"
              >
                {/* faint cyber glow behind content */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.09]"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--primary)/0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.6) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <s.icon size={26} />
                </div>
                <h2 className="relative z-10 mt-5 font-display text-xl font-semibold">{s.title}</h2>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <ul className="relative z-10 mt-5 grid gap-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <div className="glass-card mx-auto max-w-2xl p-10">
            <h3 className="font-display text-2xl font-bold">
              Not sure where to start?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Book a consultation and we'll figure out the right first step
              together — no obligation.
            </p>
            <MagneticButton to="/book-consultation" className="mt-7">
              Book a Consultation
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </Reveal>
      </section>

      <Faqs
        faqs={servicesFaqs}
        eyebrow="Services FAQ"
        title={<>Common <span className="gradient-text">service questions</span></>}
        subtitle="Pricing, reporting, timelines and how VAPT engagements work."
      />
    </Layout>
  );
}
