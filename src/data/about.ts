export interface Activity {
  title: string;
  type: string;
  venue: string;
  description: string;
  image?: string;
}

export const activities: Activity[] = [
  {
    title: "Business Presentation at GPBO, Sardardham",
    type: "Business Presentation",
    venue: "Sardardham, GPBO Surat",
    description:
      "Presented CyberNexora and the importance of cybersecurity for businesses to the Global Patidar Business Organisation (GPBO) network in Surat.",
    image: "/images/zeel-speaking.jpg",
  },
  {
    title: "Cyber Awareness Sessions",
    type: "Awareness Session",
    venue: "Community & Business Groups",
    description:
      "Interactive sessions helping business owners and teams recognise phishing, fraud and everyday cyber risks in plain language.",
    image: "/images/zeel-gpbo.jpg",
  },
  {
    title: "Hands-on Security Workshops",
    type: "Workshop",
    venue: "Teams & Organisations",
    description:
      "Practical workshops covering safe online habits, password hygiene and how to respond when something goes wrong.",
  },
  {
    title: "Founder Networking & Speaking",
    type: "Networking",
    venue: "Business Organisations",
    description:
      "Active participation in business networks, sharing how affordable, founder-led security helps small and mid-sized companies.",
  },
];

export const timeline = [
  {
    period: "2025",
    title: "Founder & CEO — CyberNexora",
    org: "CyberNexora",
    detail:
      "Founded CyberNexora to deliver founder-led penetration testing, web security and incident response for businesses in India and worldwide.",
  },
  {
    period: "Jul 2025 – Sep 2025",
    title: "VAPT Analyst",
    org: "TechDefence Labs Solutions Ltd, Ahmedabad",
    detail:
      "Conducted vulnerability assessments and penetration tests for enterprise clients, validating findings and guiding remediation.",
  },
  {
    period: "Mar 2025 – Jun 2025",
    title: "Cybersecurity Analyst",
    org: "CID Crime Branch – Gujarat Police, Gandhinagar",
    detail:
      "Supported investigations into phishing, fraud and cybercrime cases, handling digital evidence and threat monitoring.",
  },
  {
    period: "2024 – 2025",
    title: "Diploma in Cyber Security & Ethical Hacking",
    org: "Cyber Octet",
    detail:
      "Specialised training in ethical hacking, penetration testing and defensive security.",
  },
  {
    period: "2022 – 2025",
    title: "BCA — Bachelor of Computer Applications",
    org: "Chimanbhai Patel College, Gujarat University",
    detail: "Built strong computing and application-development foundations.",
  },
];

export const certifications = [
  "Cyber Octet — Ethical Hacking & Cybersecurity (Diploma)",
  "TryHackMe — Pre-Security Learning Path",
  "TryHackMe — Cybersecurity 101",
  "TryHackMe — Network Security",
  "TryHackMe — Advent of Cyber (Completed)",
  "OWASP API Security Top 10",
  "AWS Security Fundamentals",
];

export const memberships = [
  {
    name: "Global Patidar Business Organisation (GPBO)",
    role: "Member",
    detail: "Active participation in the Sardardham GPBO business network, Surat.",
  },
  {
    name: "CyberNexora News",
    role: "Founder",
    detail:
      "Runs a cybersecurity news & awareness publication sharing incidents, laws and protection tips.",
  },
  {
    name: "Responsible Disclosure Community",
    role: "Contributor",
    detail:
      "Practises and advocates ethical, responsible security research and disclosure.",
  },
];

export const stats = [
  { value: 8, suffix: "+", label: "Security Services" },
  { value: 14, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "%", label: "Manual Validation" },
  { value: 24, suffix: "/7", label: "Incident Support" },
];

export const whyChooseMe = [
  {
    title: "Founder-Led, Personal Attention",
    detail:
      "You work directly with the founder — not a faceless queue. Every engagement gets genuine ownership.",
  },
  {
    title: "Manual, Real-World Testing",
    detail:
      "Findings are manually validated with clear proof-of-concept, so you fix real risk — not scanner noise.",
  },
  {
    title: "Clear, Business-Friendly Reports",
    detail:
      "Reports are written to be understood by both developers and decision-makers, with prioritised next steps.",
  },
  {
    title: "Ethics-First Approach",
    detail:
      "Strictly authorised testing and responsible disclosure. No unauthorised access, no inflated claims.",
  },
  {
    title: "Affordable for SMEs & Startups",
    detail:
      "Right-sized engagements that bring enterprise-grade security within reach of growing businesses.",
  },
  {
    title: "Local Roots, Global Reach",
    detail:
      "Based in Surat, Gujarat — serving clients across India and worldwide, online and on-site.",
  },
];

export const aboutBio = [
  "I'm Zeel Kumbhani — a cybersecurity consultant and the Founder & CEO of CyberNexora. I help businesses understand their real cyber risk and fix it in a practical, affordable way.",
  "My work spans vulnerability assessment and penetration testing, web and application security, malware and website recovery, incident response and security-awareness training. I've worked as a VAPT Analyst at TechDefence Labs and supported cybercrime investigations with the CID Crime Branch, Gujarat Police.",
  "I believe good security should be honest, understandable and within reach — especially for SMEs and startups. That means manual, ethical testing, clear reporting and no exaggerated claims. Just real protection you can act on.",
];
