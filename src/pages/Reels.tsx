import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/primitives";
import { MagneticButton } from "@/components/ui/primitives";
import { Instagram, ArrowUpRight } from "lucide-react";
import { reels } from "@/data/reels";
import { siteConfig } from "@/lib/site";

/** Instagram embed script — loaded once, re-processes embeds on mount. */
function useInstagramEmbeds() {
  useEffect(() => {
    const process = () => {
      // @ts-expect-error – injected by Instagram's script at runtime
      if (window.instgrm?.Embeds) window.instgrm.Embeds.process();
    };

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    if (existing) {
      process();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = process;
    document.body.appendChild(script);
  }, []);
}

export default function Reels() {
  useInstagramEmbeds();

  const igProfile = "https://www.instagram.com/cyberexpertzeel/"; // update to your handle if different

  return (
    <Layout>
      <Seo
        title="Cyber Awareness Reels"
        description="Daily cyber-awareness reels by Zeel Kumbhani — short videos on online scams, AI voice-clone fraud, fake e-commerce, deepfakes and how to stay safe. Watch and share."
        path="/reels"
      />
      <PageHeader
        eyebrow="Cyber Awareness Reels"
        title={
          <>
            Spot the scam before it{" "}
            <span className="gradient-text">spots you</span>
          </>
        }
        subtitle="Short, daily reels breaking down real Indian cyber scams — AI voice clones, fake e-commerce, deepfakes and more. Watch, learn and forward to someone who needs it."
      />

      {/* Reels grid */}
      <section className="section pt-8">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reels.map((reel, i) => (
              <Reveal key={reel.url} delay={(i % 3) * 0.08}>
                <div className="glass-card flex h-full flex-col overflow-hidden p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {reel.theme}
                    </span>
                    <Instagram size={16} className="text-muted-foreground" />
                  </div>

                  {/* Instagram embed — plays inline on the page */}
                  <div className="ig-embed overflow-hidden rounded-xl">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={reel.url}
                      data-instgrm-version="14"
                      style={{
                        background: "transparent",
                        border: 0,
                        margin: 0,
                        padding: 0,
                        width: "100%",
                      }}
                    />
                  </div>

                  <h2 className="mt-4 font-display text-sm font-semibold leading-snug">
                    {reel.title}
                  </h2>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Follow CTA */}
          <Reveal delay={0.1}>
            <div className="glass-card mt-12 flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <h3 className="font-display text-xl font-bold">
                  New reel every day
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Follow along on Instagram for fresh cyber-awareness content and
                  scam alerts.
                </p>
              </div>
              <MagneticButton href={igProfile} variant="primary">
                <Instagram size={16} />
                Follow on Instagram
                <ArrowUpRight size={16} />
              </MagneticButton>
            </div>
          </Reveal>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Reels load from Instagram. If a reel doesn&apos;t appear, refresh the
            page or open it directly on Instagram.
          </p>
        </div>
      </section>
    </Layout>
  );
}
