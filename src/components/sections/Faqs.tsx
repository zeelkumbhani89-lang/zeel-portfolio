import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/primitives";
import type { Faq } from "@/data/faqs";

interface FaqsProps {
  faqs: Faq[];
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  /** when false, the JSON-LD is omitted (use if another FAQPage is already on the route) */
  withSchema?: boolean;
}

export default function Faqs({
  faqs,
  eyebrow = "FAQ",
  title,
  subtitle,
  withSchema = true,
}: FaqsProps) {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="section">
      <div className="container max-w-3xl">
        <SectionHeading
          eyebrow={eyebrow}
          title={title ?? <>Frequently asked <span className="gradient-text">questions</span></>}
          subtitle={subtitle}
        />

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <HelpCircle
                    size={18}
                    className={`shrink-0 transition-colors ${isOpen ? "text-primary" : "text-muted-foreground"}`}
                  />
                  <span className="flex-1 font-medium text-foreground">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-primary"
                  >
                    <Plus size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="px-5 pb-5 pl-[3.25rem] text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {withSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
      )}
    </section>
  );
}
