import {
  HeartPulse,
  GraduationCap,
  Gem,
  Shirt,
  Factory,
  Landmark,
  ShoppingCart,
  Hotel,
  Network,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  slug: string;
  icon: LucideIcon;
  name: string;
  summary: string;
  risks: string[];
  impact: string;
  compliance: string[];
  help: string;
}

// Consolidated, no duplicates: medical (healthcare+hospitals+pharma) = Healthcare;
// schools+colleges = Education; SMEs+startups+enterprise = Enterprise & Startups.
export const industries: Industry[] = [
  {
    slug: "healthcare",
    icon: HeartPulse,
    name: "Healthcare & Hospitals",
    summary:
      "Protecting patient data, hospital networks, pharma systems and connected medical devices.",
    risks: [
      "Ransomware shutting down critical care systems",
      "Patient-record theft & data breaches",
      "Insecure medical & IoT devices",
      "Phishing targeting clinical and admin staff",
    ],
    impact:
      "A breach in healthcare is not just costly — downtime can directly affect patient safety, expose sensitive health records and severely damage trust.",
    compliance: ["HIPAA (where applicable)", "ISO/IEC 27001", "India's DPDP Act"],
    help: "Network and application VAPT, segmentation guidance, staff awareness training and incident-response planning so critical care and pharma systems stay available and compliant.",
  },
  {
    slug: "education",
    icon: GraduationCap,
    name: "Education",
    summary:
      "Securing schools, colleges and universities — student data, portals and large user bases.",
    risks: [
      "Student & staff data exposure",
      "Vulnerable learning portals and ERP systems",
      "Account takeover across large user bases",
      "Phishing and exam/result tampering",
    ],
    impact:
      "Education platforms hold thousands of identities and records. A breach disrupts learning, exposes minors' data and invites regulatory and reputational damage.",
    compliance: ["ISO/IEC 27001", "India's DPDP Act"],
    help: "Web application VAPT for portals and ERPs, access-control reviews, and security-awareness sessions for students and staff.",
  },
  {
    slug: "diamond",
    icon: Gem,
    name: "Diamond Industry",
    summary:
      "Protecting high-value trade, transactions and design data for the diamond and gem trade.",
    risks: [
      "Business-email compromise & invoice fraud",
      "Inventory and design-data theft",
      "Supply-chain and vendor risk",
      "Wire-transfer / payment redirection scams",
    ],
    impact:
      "A single fraudulent transaction or leaked design can mean huge financial loss in the diamond trade, where deals are high-value and trust-based.",
    compliance: ["ISO/IEC 27001", "India's DPDP Act"],
    help: "Email security hardening, fraud-prevention guidance, security assessments and staff awareness — protecting every diamond and every transaction.",
  },
  {
    slug: "textile",
    icon: Shirt,
    name: "Textile Industry",
    summary: "Securing manufacturing, supply-chain and design operations for textile businesses.",
    risks: [
      "Ransomware halting production lines",
      "Design and pattern intellectual-property theft",
      "Supply-chain & vendor compromise",
      "Weak ERP and inventory-system security",
    ],
    impact:
      "Downtime stops production and delivery; stolen designs hand competitors an unfair edge. Both hit revenue and reputation hard.",
    compliance: ["ISO/IEC 27001", "India's DPDP Act"],
    help: "OT/IT security assessments, ERP and supply-chain hardening, and resilience planning tailored to textile manufacturers.",
  },
  {
    slug: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    summary: "Protecting OT, ERP and connected operations on the factory floor.",
    risks: [
      "Ransomware on OT / production systems",
      "Legacy & unpatched industrial infrastructure",
      "Third-party / vendor access risk",
      "IP and process-data theft",
    ],
    impact:
      "A cyber incident can stop the entire line, delay shipments and cause safety issues — manufacturing downtime is measured in lakhs per hour.",
    compliance: ["ISO/IEC 27001", "IEC 62443 (ICS)", "India's DPDP Act"],
    help: "IT/OT segmentation, industrial VAPT, patch-strategy guidance and incident-response planning to keep production running safely.",
  },
  {
    slug: "finance",
    icon: Landmark,
    name: "Finance & Fintech",
    summary: "Hardening systems that handle money, payments and customer identity.",
    risks: [
      "Payment fraud & account takeover",
      "API and web-application vulnerabilities",
      "Data breaches of financial records",
      "Regulatory non-compliance penalties",
    ],
    impact:
      "In finance, a breach means direct monetary loss, regulatory action and shattered customer trust — the stakes are as high as it gets.",
    compliance: ["PCI DSS", "ISO/IEC 27001", "RBI guidelines", "India's DPDP Act"],
    help: "Web, API and network VAPT, secure-code and architecture review, and continuous security guidance aligned to financial regulations.",
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    name: "E-commerce",
    summary: "Securing online stores, payments and customer data end-to-end.",
    risks: [
      "Payment-data theft & card skimming",
      "Web-application attacks (XSS, SQLi, IDOR)",
      "Account takeover and fake orders",
      "Malware and SEO-spam injection",
    ],
    impact:
      "A compromised store leaks customer and payment data, loses sales during downtime and gets blacklisted by search engines — directly hitting revenue.",
    compliance: ["PCI DSS", "ISO/IEC 27001", "India's DPDP Act"],
    help: "Full web-application VAPT, payment-flow review, malware and SEO-spam recovery, and ongoing monitoring guidance for online stores.",
  },
  {
    slug: "hospitality",
    icon: Hotel,
    name: "Hotels & Hospitality",
    summary: "Protecting guest data, bookings and payment systems across properties.",
    risks: [
      "Guest PII & payment-card theft",
      "Booking-engine and POS vulnerabilities",
      "Wi-Fi and IoT exposure across properties",
      "Phishing targeting front-desk staff",
    ],
    impact:
      "Hotels store identity and payment data at scale. A breach damages brand reputation, invites fines and erodes guest confidence.",
    compliance: ["PCI DSS", "ISO/IEC 27001", "India's DPDP Act"],
    help: "Web and network VAPT, POS and Wi-Fi security reviews, and staff awareness training across single or multi-property groups.",
  },
  {
    slug: "enterprise",
    icon: Network,
    name: "Enterprise & Startups",
    summary:
      "Right-sized security for SMEs, fast-moving startups and large enterprises alike.",
    risks: [
      "Broad attack surface across cloud & on-prem",
      "Misconfigured cloud and exposed services",
      "Supply-chain and third-party risk",
      "Under-resourced internal security",
    ],
    impact:
      "Attackers target startups and SMEs assuming weaker defences, and enterprises for their data. Either way, one incident can threaten the whole business.",
    compliance: ["ISO/IEC 27001", "SOC 2", "India's DPDP Act"],
    help: "Scalable VAPT, cloud-security review, and a practical security roadmap — founder-led and right-sized to your stage and budget.",
  },
];
