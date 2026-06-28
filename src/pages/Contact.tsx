import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/primitives";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Newspaper,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const inputCls =
  "w-full rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      form.subject || "Website enquiry"
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <Layout>
      <Seo
        title="Contact"
        description="Get in touch with Zeel Kumbhani for cybersecurity consulting, VAPT, incident response or security awareness training. Based in Surat, Gujarat — serving clients worldwide."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's talk <span className="gradient-text">security</span>
          </>
        }
        subtitle="Have a question or a project in mind? Send a message and I'll get back to you personally."
      />

      <section className="section pt-8">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <Reveal>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phoneRaw}` },
                { icon: MapPin, label: "Location", value: siteConfig.location },
              ].map((c) => (
                <div key={c.label} className="glass-card flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <c.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a href={c.href} className="font-medium hover:text-primary">
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-medium">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="glass-card p-5">
                <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                  Find me on
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: siteConfig.socials.linkedin },
                    { icon: Globe, label: "CyberNexora", href: siteConfig.socials.company },
                    { icon: Newspaper, label: "News", href: siteConfig.socials.blog },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-secondary px-3.5 py-2 text-xs font-medium text-muted-foreground transition hover:bg-primary/15 hover:text-primary"
                    >
                      <s.icon size={15} /> {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08}>
            <form onSubmit={submit} className="glass-card space-y-4 p-8">
              {sent && (
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm text-primary">
                  <CheckCircle2 size={18} />
                  Thanks! Your email client should open — or reach me directly at{" "}
                  {siteConfig.email}.
                </div>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Name</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handle}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handle}
                    placeholder="you@company.com"
                    className={inputCls}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handle}
                  placeholder="How can I help?"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handle}
                  rows={5}
                  placeholder="Tell me a little about your needs..."
                  className={inputCls}
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send message <Send size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
