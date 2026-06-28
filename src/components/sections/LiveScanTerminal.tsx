import { useEffect, useRef, useState } from "react";
import { Terminal, ShieldAlert, ShieldCheck } from "lucide-react";

/**
 * A live, animated "security scan" terminal. Lines stream in to convey an
 * active engagement — pure presentation, no real scanning. Pauses offscreen.
 */
const script: { t: string; kind?: "ok" | "warn" | "info" | "cmd" }[] = [
  { t: "nmap -sV -sC --open target.scope", kind: "cmd" },
  { t: "Discovered open port 443/tcp  https", kind: "info" },
  { t: "Discovered open port 22/tcp   ssh", kind: "info" },
  { t: "Enumerating web technologies...", kind: "info" },
  { t: "Testing OWASP Top 10 (manual)...", kind: "info" },
  { t: "Possible IDOR on /api/v1/orders", kind: "warn" },
  { t: "Validating finding with PoC...", kind: "info" },
  { t: "Confirmed — broken object authorisation", kind: "warn" },
  { t: "Mapping to remediation + risk rating", kind: "info" },
  { t: "Re-test scheduled after fix", kind: "ok" },
  { t: "Report generated — 0 false positives", kind: "ok" },
];

export default function LiveScanTerminal() {
  const [lines, setLines] = useState<typeof script>([]);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const i = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setLines(script);
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      setLines((prev) => {
        const next = [...prev, script[i.current % script.length]];
        return next.slice(-8);
      });
      i.current += 1;
      timer = setTimeout(tick, 1100);
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-primary/20 bg-[#0a0e16] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
        <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <Terminal size={12} /> live-scan — authorised engagement
        </span>
      </div>
      <div ref={wrapRef} className="h-[300px] space-y-1.5 overflow-hidden p-5 font-mono text-[13px]">
        {lines.map((l, idx) => (
          <div key={idx} className="flex items-start gap-2">
            {l.kind === "cmd" ? (
              <>
                <span className="text-green-400">zeel@scan</span>
                <span className="text-muted-foreground">:~$</span>
                <span className="text-foreground">{l.t}</span>
              </>
            ) : l.kind === "warn" ? (
              <span className="flex items-start gap-2 text-amber-400">
                <ShieldAlert size={14} className="mt-0.5 shrink-0" /> {l.t}
              </span>
            ) : l.kind === "ok" ? (
              <span className="flex items-start gap-2 text-green-400">
                <ShieldCheck size={14} className="mt-0.5 shrink-0" /> {l.t}
              </span>
            ) : (
              <span className="text-muted-foreground">
                <span className="text-primary/70">[*]</span> {l.t}
              </span>
            )}
          </div>
        ))}
        <div className="flex items-center gap-1.5">
          <span className="text-green-400">zeel@scan</span>
          <span className="text-muted-foreground">:~$</span>
          <span className="inline-block h-4 w-2 animate-pulse bg-primary" />
        </div>
      </div>
    </div>
  );
}
