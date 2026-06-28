import {
  Shield,
  Bug,
  Globe,
  Server,
  Search,
  AlertTriangle,
  GraduationCap,
  FileSearch,
  Lock,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  points: string[];
}

export const services: Service[] = [
  {
    slug: "vapt",
    icon: Bug,
    title: "Vulnerability Assessment & Penetration Testing",
    short: "Manual + automated VAPT that finds real, exploitable risk.",
    description:
      "End-to-end VAPT for web apps, APIs, networks and cloud. Every finding is manually validated and delivered with a clear proof-of-concept and prioritised remediation plan — not just a noisy scanner dump.",
    points: [
      "Web, API, network & cloud testing",
      "Manual validation of every finding",
      "Risk-rated, developer-friendly reports",
      "Re-test after remediation",
    ],
  },
  {
    slug: "web-app-security",
    icon: Globe,
    title: "Web & Application Security",
    short: "OWASP-aligned testing for modern web applications.",
    description:
      "Deep security review of your web and mobile applications against the OWASP Top 10 and API Security Top 10, covering authentication, access control, business logic and injection flaws.",
    points: [
      "OWASP Top 10 & API Top 10 coverage",
      "Authentication & access-control review",
      "Business-logic testing",
      "Secure-by-design recommendations",
    ],
  },
  {
    slug: "malware-removal",
    icon: AlertTriangle,
    title: "Malware Removal & Website Recovery",
    short: "Clean up hacked sites and harden them against re-infection.",
    description:
      "Rapid cleanup of compromised WordPress and CMS websites — removing malicious code, backdoors and injected spam, then hardening the platform so the attacker cannot return.",
    points: [
      "WordPress & CMS cleanup",
      "Backdoor & web-shell removal",
      "Root-cause analysis",
      "Post-cleanup hardening",
    ],
  },
  {
    slug: "seo-spam-recovery",
    icon: Search,
    title: "SEO Spam & Blackhat Injection Recovery",
    short: "Recover rankings lost to pharma & spam injections.",
    description:
      "Identify and remove blackhat SEO spam, hidden redirects and pharma injections that hijack your search results, then support clean re-indexing so legitimate traffic returns.",
    points: [
      "Spam & pharma injection removal",
      "Hidden redirect & cloaking cleanup",
      "Search Console clean-up guidance",
      "Re-indexing support",
    ],
  },
  {
    slug: "incident-response",
    icon: Server,
    title: "Incident Response & Forensics Support",
    short: "Contain, investigate and recover from active incidents.",
    description:
      "Structured incident response to help you contain a breach, understand what happened, preserve evidence and recover safely — with clear documentation for stakeholders.",
    points: [
      "Breach containment",
      "Evidence preservation",
      "Timeline & impact analysis",
      "Recovery & hardening roadmap",
    ],
  },
  {
    slug: "security-consulting",
    icon: Shield,
    title: "Security Consulting & Advisory",
    short: "Practical, founder-led security strategy for your business.",
    description:
      "Ongoing advisory for businesses that need a security partner — from secure architecture reviews to policy guidance and a pragmatic roadmap that fits your budget and risk profile.",
    points: [
      "Secure architecture review",
      "Security roadmap & prioritisation",
      "Vendor & tooling guidance",
      "Compliance-readiness support",
    ],
  },
  {
    slug: "awareness-training",
    icon: GraduationCap,
    title: "Cyber Awareness Training",
    short: "Turn your team into the first line of defence.",
    description:
      "Interactive awareness sessions, workshops and seminars that teach teams to spot phishing, social engineering and everyday cyber risks — delivered in plain, practical language.",
    points: [
      "Phishing & social-engineering training",
      "Workshops & live seminars",
      "Tailored to non-technical teams",
      "Actionable everyday practices",
    ],
  },
  {
    slug: "security-assessment",
    icon: FileSearch,
    title: "Security Posture Assessment",
    short: "Know where you stand before attackers do.",
    description:
      "A focused review of your current security posture across systems, processes and people — giving you a clear, prioritised picture of gaps and quick wins.",
    points: [
      "Posture & gap analysis",
      "Quick-win identification",
      "Process & people review",
      "Executive-ready summary",
    ],
  },
];
