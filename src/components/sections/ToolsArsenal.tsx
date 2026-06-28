import { motion } from "framer-motion";
import { Terminal, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/primitives";

/**
 * Hacker-style "arsenal" panel — the security tooling used during engagements.
 * Mirrors a Kali Linux toolkit so visitors instantly read "real offensive security".
 */
const tools: { name: string; use: string }[] = [
  { name: "Nmap", use: "Network & service discovery" },
  { name: "Burp Suite", use: "Web app / API testing" },
  { name: "Metasploit", use: "Exploit validation" },
  { name: "Wireshark", use: "Traffic & packet analysis" },
  { name: "Nikto", use: "Web server scanning" },
  { name: "sqlmap", use: "SQL injection testing" },
  { name: "Nessus / OpenVAS", use: "Vulnerability scanning" },
  { name: "Gobuster / ffuf", use: "Content & dir discovery" },
  { name: "Hydra", use: "Auth brute-force testing" },
  { name: "John / Hashcat", use: "Password cracking" },
  { name: "OWASP ZAP", use: "Automated web scanning" },
  { name: "Aircrack-ng", use: "Wi-Fi security testing" },
];

const lines = [
  { p: "zeel@cybernexora", c: "~", cmd: "whoami", out: "cybersecurity-consultant" },
  { p: "zeel@cybernexora", c: "~", cmd: "cat ./focus.txt", out: "manual VAPT · real exploitation · clear reports" },
];

export default function ToolsArsenal() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 cyber-grid-bg opacity-30" />
      <div className="container relative">
        <SectionHeading
          eyebrow="The Arsenal"
          title={
            <>
              Tools I use on{" "}
              <span className="gradient-text">real engagements</span>
            </>
          }
          subtitle="An industry-standard offensive-security toolkit — the same stack used by professional penetration testers on Kali Linux — applied ethically and with authorisation."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* terminal panel */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-[#0a0e16] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <Terminal size={12} /> zeel@cybernexora: ~
                </span>
              </div>
              <div className="space-y-3 p-5 font-mono text-sm">
                {lines.map((l) => (
                  <div key={l.cmd}>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-green-400">{l.p}</span>
                      <span className="text-muted-foreground">:</span>
                      <span className="text-primary">{l.c}</span>
                      <span className="text-muted-foreground">$</span>
                      <span className="text-foreground">{l.cmd}</span>
                    </div>
                    <div className="mt-1 text-muted-foreground">{l.out}</div>
                  </div>
                ))}
                <div className="flex items-center gap-1.5">
                  <span className="text-green-400">zeel@cybernexora</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-primary">~</span>
                  <span className="text-muted-foreground">$</span>
                  <span className="typing-caret text-foreground">nmap -sV -sC target.host</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* tools grid */}
          <Reveal delay={0.1}>
            <div className="glass-card h-full p-6">
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Wrench size={16} className="text-primary" />
                Security toolkit
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {tools.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
                    className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 transition hover:border-primary/30 hover:bg-primary/5"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                    <div className="min-w-0">
                      <p className="truncate font-mono text-sm font-medium text-foreground">
                        {t.name}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">{t.use}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                All testing is performed only with explicit written authorisation
                and within agreed scope.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
