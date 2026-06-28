import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/primitives";
import { motion } from "framer-motion";
import { Mic, Users, Presentation, Network } from "lucide-react";
import { activities, timeline } from "@/data/about";

const gallery = [
  { src: "/images/zeel-speaking.jpg", caption: "Presenting at GPBO, Sardardham Surat" },
  { src: "/images/zeel-gpbo.jpg", caption: "GPBO business network, Surat" },
  { src: "/images/zeel-portrait.jpg", caption: "Founder & CEO, CyberNexora" },
];

const typeIcon: Record<string, typeof Mic> = {
  "Business Presentation": Presentation,
  "Awareness Session": Users,
  Workshop: Mic,
  Networking: Network,
};

export default function Activities() {
  return (
    <Layout>
      <Seo
        title="Activities & Seminars"
        description="Seminars, awareness sessions, workshops and business presentations by Zeel Kumbhani — including talks at GPBO, Sardardham Surat."
        path="/activities"
      />
      <PageHeader
        eyebrow="Activities & Seminars"
        title={
          <>
            Talks, workshops & <span className="gradient-text">awareness</span>
          </>
        }
        subtitle="Sharing practical cybersecurity knowledge with businesses and communities through seminars, sessions and live presentations."
      />

      {/* Activity cards */}
      <section className="section pt-8">
        <div className="container grid gap-6 sm:grid-cols-2">
          {activities.map((a, i) => {
            const Icon = typeIcon[a.type] || Mic;
            return (
              <Reveal key={a.title} delay={(i % 2) * 0.08}>
                <motion.div whileHover={{ y: -5 }} className="glass-card h-full p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                      {a.type}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-lg font-semibold">
                    {a.title}
                  </h2>
                  <p className="mt-1 text-xs text-primary">{a.venue}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {a.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="section pt-0">
        <div className="container">
          <Reveal>
            <h2 className="font-display text-2xl font-bold">Journey & timeline</h2>
          </Reveal>
          <div className="relative mt-10 space-y-8 before:absolute before:left-[7px] before:top-2 before:h-full before:w-px before:bg-border lg:before:left-[9px]">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div className="relative pl-8 lg:pl-10">
                  <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background lg:h-5 lg:w-5" />
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {t.period}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold">
                    {t.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t.org}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {t.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section pt-0">
        <div className="container">
          <Reveal>
            <h2 className="font-display text-2xl font-bold">Gallery</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Moments from seminars, talks and business events.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl border border-border">
                  <img
                    src={g.src}
                    alt={g.caption}
                    className="h-72 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-sm font-medium">
                    {g.caption}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
