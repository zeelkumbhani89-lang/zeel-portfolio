import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Terminal, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/primitives";

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

type Line = { text: string; cls?: string };
const PROMPT = "zeel@cybernexora:~$";

function runCommand(raw: string): Line[] {
  const cmd = raw.trim();
  const lower = cmd.toLowerCase();
  if (!cmd) return [];

  if (lower === "help")
    return [
      { text: "Available commands:", cls: "text-primary" },
      { text: "  help      → show this menu" },
      { text: "  whoami    → who am I" },
      { text: "  ls        → list available tools" },
      { text: "  about     → about Zeel Kumbhani" },
      { text: "  services  → what I offer" },
      { text: "  scan      → run a demo security scan" },
      { text: "  nmap      → sample nmap output" },
      { text: "  contact   → how to reach me" },
      { text: "  clear     → clear the screen" },
    ];
  if (lower === "whoami")
    return [{ text: "cybersecurity-consultant", cls: "text-green-400" }];
  if (lower === "ls" || lower.startsWith("ls ")) {
    const out: Line[] = [{ text: "tools/", cls: "text-primary" }];
    tools.forEach((t) => out.push({ text: `  ${t.name.padEnd(18, " ")} ${t.use}` }));
    return out;
  }
  if (lower === "about")
    return [
      { text: "Zeel Kumbhani — Cybersecurity Consultant & Founder of CyberNexora.", cls: "text-foreground" },
      { text: "Surat, Gujarat · serving India & worldwide." },
      { text: "Focus: manual VAPT, real exploitation, clear reports." },
    ];
  if (lower === "services")
    return [
      { text: "Web VAPT · Network VAPT · API VAPT · Mobile VAPT", cls: "text-foreground" },
      { text: "Malware recovery · Incident response · Awareness training" },
      { text: "Type 'contact' to get started." },
    ];
  if (lower === "contact")
    return [
      { text: "email   : zeel@cybernexora.com", cls: "text-green-400" },
      { text: "site    : zeelkumbhani.com" },
      { text: "Book a consultation from the menu above." },
    ];
  if (lower === "nmap" || lower.startsWith("nmap "))
    return [
      { text: "Starting Nmap scan ...", cls: "text-muted-foreground" },
      { text: "PORT     STATE  SERVICE", cls: "text-primary" },
      { text: "22/tcp   open   ssh" },
      { text: "80/tcp   open   http" },
      { text: "443/tcp  open   https" },
      { text: "Scan complete · 3 open ports found", cls: "text-green-400" },
    ];
  if (lower === "scan")
    return [
      { text: "[*] Enumerating target ...", cls: "text-muted-foreground" },
      { text: "[*] Testing OWASP Top 10 (manual) ...", cls: "text-muted-foreground" },
      { text: "[!] Possible IDOR on /api/v1/orders", cls: "text-amber-400" },
      { text: "[+] Validated with PoC · risk: HIGH", cls: "text-amber-400" },
      { text: "[✓] Report generated · 0 false positives", cls: "text-green-400" },
    ];
  if (lower === "clear") return [{ text: "__CLEAR__" }];
  if (lower === "sudo" || lower.startsWith("sudo "))
    return [{ text: "Nice try 😏 — authorised testing only.", cls: "text-amber-400" }];
  return [
    { text: `command not found: ${cmd}`, cls: "text-red-400" },
    { text: "type 'help' to see available commands.", cls: "text-muted-foreground" },
  ];
}

// mechanical keyboard "click" using Web Audio (no files needed)
function useBeep() {
  const ctxRef = useRef<AudioContext | null>(null);
  return useCallback(() => {
    try {
      if (!ctxRef.current)
        ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      const ac = ctxRef.current;
      const now = ac.currentTime;

      // sharp click body
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.type = "square";
      o.frequency.setValueAtTime(180 + Math.random() * 80, now);
      o.frequency.exponentialRampToValueAtTime(60, now + 0.03);
      g.gain.setValueAtTime(0.06, now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
      o.connect(g);
      g.connect(ac.destination);
      o.start(now);
      o.stop(now + 0.05);

      // tiny high "tick" for the mechanical snap
      const o2 = ac.createOscillator();
      const g2 = ac.createGain();
      o2.type = "triangle";
      o2.frequency.setValueAtTime(2200 + Math.random() * 600, now);
      g2.gain.setValueAtTime(0.03, now);
      g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);
      o2.connect(g2);
      g2.connect(ac.destination);
      o2.start(now);
      o2.stop(now + 0.03);
    } catch {
      /* ignore */
    }
  }, []);
}

export default function ToolsArsenal() {
  const [history, setHistory] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const beep = useBeep();

  // boot sequence (auto types) on first view
  useEffect(() => {
    const boot: Line[] = [
      { text: "[ booting CyberNexora secure shell ]", cls: "text-primary" },
      { text: "loading modules ... ok", cls: "text-muted-foreground" },
      { text: "auth: key accepted ✓", cls: "text-green-400" },
      { text: `${PROMPT} whoami` },
      { text: "cybersecurity-consultant", cls: "text-green-400" },
      { text: `${PROMPT} cat ./focus.txt` },
      { text: "manual VAPT · real exploitation · clear reports" },
      { text: "type 'help' to begin ▸", cls: "text-muted-foreground" },
    ];
    let i = 0;
    const id = setInterval(() => {
      setHistory((h) => [...h, boot[i]]);
      i++;
      if (i >= boot.length) {
        clearInterval(id);
        setBooted(true);
      }
    }, 320);
    return () => clearInterval(id);
  }, []);

  const submit = (value: string) => {
    const out = runCommand(value);
    if (out.length === 1 && out[0].text === "__CLEAR__") {
      setHistory([]);
      return;
    }
    setHistory((h) => [...h, { text: `${PROMPT} ${value}` }, ...out]);
  };

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history]);

  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 cyber-grid-bg opacity-30" />
      <div className="container relative">
        <SectionHeading
          eyebrow="The Arsenal"
          title={<>Tools I use on <span className="gradient-text">real engagements</span></>}
          subtitle="An industry-standard offensive-security toolkit — the same stack used on Kali Linux, applied ethically and with authorisation. Try the live terminal: type 'help'."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div
              className="group overflow-hidden rounded-2xl border border-primary/25 bg-[#080b12] shadow-2xl shadow-primary/5 transition-shadow hover:shadow-primary/20"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <Terminal size={12} /> zeel@cybernexora: ~
                </span>
              </div>

              <div
                ref={bodyRef}
                className="terminal-scan relative h-[340px] space-y-1 overflow-y-auto p-5 font-mono text-[13px] leading-relaxed"
              >
                {history.map((l, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className={l.cls ?? "text-foreground"}
                  >
                    {l.text}
                  </motion.div>
                ))}

                {booted && (
                  <div className="flex items-center gap-2">
                    <span className="shrink-0 text-green-400 drop-shadow-[0_0_4px_rgba(52,211,153,0.5)]">
                      {PROMPT}
                    </span>
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value);
                        beep();
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          submit(input);
                          setInput("");
                        }
                      }}
                      spellCheck={false}
                      autoComplete="off"
                      className="flex-1 bg-transparent text-primary caret-primary outline-none placeholder:text-muted-foreground/50"
                      placeholder="type 'help' …"
                      aria-label="terminal input"
                    />
                  </div>
                )}
              </div>
            </div>
          </Reveal>

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
                      <p className="truncate font-mono text-sm font-medium text-foreground">{t.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{t.use}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                All testing is performed only with explicit written authorisation and within agreed scope.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}