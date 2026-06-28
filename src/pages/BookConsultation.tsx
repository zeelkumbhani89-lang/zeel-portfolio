import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/primitives";
import { CalendarCheck, CheckCircle2, Clock, ShieldCheck, Send } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site";

const inputCls =
  "w-full rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

const perks = [
  { icon: Clock, text: "30-minute, no-pressure conversation" },
  { icon: ShieldCheck, text: "Honest assessment of your priorities" },
  { icon: CheckCircle2, text: "Clear, practical next step — no jargon" },
];

export default function BookConsultation() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: services[0].title,
    date: "",
    notes: "",
  });

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Consultation request\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nPreferred date: ${form.date}\n\nNotes:\n${form.notes}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      "Consultation request — " + form.name
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <Layout>
      <Seo
        title="Book a Consultation"
        description="Book a free cybersecurity consultation with Zeel Kumbhani. A short, no-pressure conversation to find the most practical next step for your business."
        path="/book-consultation"
      />
      <PageHeader
        eyebrow="Book Consultation"
        title={
          <>
            Book your <span className="gradient-text">free consultation</span>
          </>
        }
        subtitle="Tell me a little about your needs and pick a preferred time. I'll personally confirm and follow up."
      />

      <section className="section pt-8">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <CalendarCheck size={26} />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold">
                What to expect
              </h2>
              <ul className="mt-6 space-y-4">
                {perks.map((p) => (
                  <li key={p.text} className="flex items-start gap-3 text-sm">
                    <p.icon size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{p.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border border-primary/15 bg-primary/5 p-5 text-sm text-muted-foreground">
                Prefer email? Reach me directly at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-primary"
                >
                  {siteConfig.email}
                </a>
                .
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={submit} className="glass-card space-y-4 p-8">
              {sent && (
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm text-primary">
                  <CheckCircle2 size={18} />
                  Request ready — your email client should open to send it.
                </div>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Name</label>
                  <input required name="name" value={form.name} onChange={handle} placeholder="Your name" className={inputCls} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Email</label>
                  <input required type="email" name="email" value={form.email} onChange={handle} placeholder="you@company.com" className={inputCls} />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Company</label>
                  <input name="company" value={form.company} onChange={handle} placeholder="Optional" className={inputCls} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Preferred date</label>
                  <input type="date" name="date" value={form.date} onChange={handle} className={inputCls} />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Service of interest
                </label>
                <select name="service" value={form.service} onChange={handle} className={inputCls}>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Notes</label>
                <textarea name="notes" value={form.notes} onChange={handle} rows={4} placeholder="Anything you'd like me to know in advance..." className={inputCls} />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Request consultation <Send size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
