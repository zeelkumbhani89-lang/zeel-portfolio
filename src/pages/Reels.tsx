import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/ui/PageHeader";
import { Reveal, MagneticButton } from "@/components/ui/primitives";
import { Instagram, ArrowUpRight } from "lucide-react";
import { reels } from "@/data/reels";

/** Load Instagram embed script once and (re)process embeds. */
function useInstagramEmbeds(dep: number) {
  useEffect(() => {
    const process = () => {
      // @ts-expect-error injected by Instagram at runtime
      if (window.instgrm?.Embeds) window.instgrm.Embeds.process();
    };
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]'
    );
    if (existing) {
      process();
      return;
    }
    const s = document.createElement("script");
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    s.onload = process;
    document.body.appendChild(s);
  }, [dep]);
}

export default function Reels() {
  useInstagramEmbeds(reels.length);
  const igProfile = "https://www.instagram.com/cyberexpertzeel/";

  return (
    <Layout>
      <Seo
        title="Cyber Awareness Reels"
        description="Daily cyber-awareness reels by Zeel Kumbhani - short videos on online scams, AI voice-clone fraud, fake e-commerce, deepfakes and how to stay safe. Watch and share."
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
        subtitle="Short, daily reels breaking down real Indian cyber scams - AI voice clones, fake e-commerce, deepfakes and more. Watch, learn and forward to someone who needs it."
      />

      <section className="section pt-6 sm:pt-8">
        <div className="container">
          <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {reels.map((reel, i) => (
              <Reveal
                key={reel.url}
                delay={(i % 3) * 0.08}
                className="flex w-full justify-center"
              >
                <div className="glass-card flex h-full w-full max-w-[340px] flex-col overflow-hidden p-2.5 sm:p-3">
                  <div className="mb-3 flex items-center justify-between px-1">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {reel.theme}
                    </span>
                    <Instagram size={16} className="text-muted-foreground" />
                  </div>

                  {/* Instagram embed - centered, fits card on every screen */}
                  <div className="ig-frame w-full overflow-hidden rounded-xl [&_.instagram-media]:!m-0 [&_.instagram-media]:!min-w-0 [&_.instagram-media]:!w-full">
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
                        maxWidth: "100%",
                        minWidth: 0,
                      }}
                    />
                  </div>

                  <h2 className="mt-4 px-1 pb-1 font-display text-sm font-semibold leading-snug">
                    {reel.title}
                  </h2>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="glass-card mx-auto mt-12 flex max-w-4xl flex-col items-center gap-5 p-6 text-center sm:flex-row sm:justify-between sm:p-8 sm:text-left">
              <div>
                <h3 className="font-display text-lg font-bold sm:text-xl">
                  New reel every day
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Follow along on Instagram for fresh cyber-awareness content and
                  scam alerts.
                </p>
              </div>
              <MagneticButton href={igProfile} variant="primary" className="shrink-0">
                <Instagram size={16} />
                Follow on Instagram
                <ArrowUpRight size={16} />
              </MagneticButton>
            </div>
          </Reveal>

          <p className="mx-auto mt-6 max-w-md text-center text-xs text-muted-foreground">
            Reels load directly from Instagram. If one doesn&apos;t appear,
            refresh the page.
          </p>
        </div>
      </section>
    </Layout>
  );
}
