/**
 * COMPLIANCE & CYBER-LAW AUDIT — data for all standards/laws.
 * Each entry drives the sidebar + its own detail page at /compliance/:slug.
 * Images are Zeel's own CyberNexora brand images (loaded via URL).
 */

export interface ComplianceStandard {
  slug: string;
  short: string; // sidebar label
  name: string; // full name / hero title
  region: string;
  tagline: string;
  heroImage: string;
  midImage: string;
  intro: string;
  why: string[];
  process: { title: string; desc: string }[];
  testGroups: { title: string; items: string[] }[];
  deliverables: string[];
}

export const complianceStandards: ComplianceStandard[] = [
  {
    slug: "dpdp-act",
    short: "DPDP Act",
    name: "DPDP Act (India)",
    region: "India",
    tagline:
      "Digital Personal Data Protection Act readiness — with real penalties now in force.",
    heroImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-15-2026-06_58_06-PM.png",
    midImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-15-2026-06_57_43-PM.png",
    intro:
      "India's DPDP Act, 2023 governs how businesses collect, store and process personal data. I assess your personal-data handling practices, privacy controls and governance against DPDP requirements — identifying gaps before regulators or clients do.",
    why: [
      "Assess alignment with DPDP Act requirements",
      "Identify privacy and data-protection gaps",
      "Evaluate personal-data handling practices",
      "Improve compliance readiness and governance",
      "Reduce regulatory and operational risk",
      "Strengthen customer trust and data protection",
    ],
    process: [
      { title: "Data Processing Review", desc: "Review how personal data is collected, processed, stored and managed." },
      { title: "Privacy Control Assessment", desc: "Assess privacy measures and data-protection practices." },
      { title: "Compliance Gap Analysis", desc: "Identify gaps against DPDP compliance requirements." },
      { title: "Governance Evaluation", desc: "Review privacy governance, accountability and compliance processes." },
      { title: "Risk Assessment", desc: "Assess privacy-related risks and compliance concerns." },
      { title: "Recommendations", desc: "Practical steps to strengthen compliance readiness." },
    ],
    testGroups: [
      { title: "Personal Data Management", items: ["Data collection practices", "Data processing activities", "Data retention practices", "Data handling controls"] },
      { title: "Privacy Governance", items: ["Privacy policies", "Consent management", "Data-subject rights", "Governance controls"] },
      { title: "Security & Compliance", items: ["Data-protection controls", "Access management", "Security measures", "Compliance practices"] },
      { title: "Risk Assessment", items: ["Privacy risks", "Compliance gaps", "Governance weaknesses", "Regulatory concerns"] },
    ],
    deliverables: ["DPDP Compliance Assessment Report", "Privacy Gap Analysis", "Compliance Findings Summary", "Risk Assessment Report", "Compliance Recommendations", "Improvement Roadmap"],
  },
  {
    slug: "gdpr",
    short: "GDPR",
    name: "GDPR (EU)",
    region: "European Union",
    tagline:
      "EU General Data Protection Regulation — including the 72-hour breach clock.",
    heroImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-15-2026-07_12_08-PM.png",
    midImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-15-2026-07_10_12-PM.png",
    intro:
      "GDPR is the EU's data-protection law and applies to any business handling EU residents' data. I evaluate your data-processing activities, privacy controls and accountability against GDPR — so you can sell into Europe with confidence.",
    why: [
      "Assess alignment with GDPR requirements",
      "Identify privacy and data-protection gaps",
      "Evaluate personal-data processing practices",
      "Improve compliance readiness and accountability",
      "Reduce regulatory and privacy-related risk",
      "Strengthen trust and data-protection governance",
    ],
    process: [
      { title: "Data Processing Review", desc: "Review how personal data is collected, processed, stored and shared." },
      { title: "Privacy Control Assessment", desc: "Assess privacy measures and data-protection practices." },
      { title: "Compliance Gap Analysis", desc: "Identify gaps against GDPR requirements and obligations." },
      { title: "Governance Evaluation", desc: "Review accountability, privacy governance and compliance processes." },
      { title: "Risk Assessment", desc: "Assess privacy-related risks and compliance concerns." },
      { title: "Recommendations", desc: "Practical steps to strengthen GDPR readiness." },
    ],
    testGroups: [
      { title: "Personal Data Management", items: ["Data collection practices", "Data processing activities", "Data retention controls", "Data sharing practices"] },
      { title: "Privacy Governance", items: ["Privacy policies", "Consent management", "Data-subject rights", "Accountability measures"] },
      { title: "Security & Compliance", items: ["Data-protection controls", "Access management", "Security measures", "Compliance practices"] },
      { title: "Risk Assessment", items: ["Privacy risks", "Compliance gaps", "Governance weaknesses", "Regulatory concerns"] },
    ],
    deliverables: ["GDPR Compliance Assessment Report", "Privacy Gap Analysis", "Compliance Findings Summary", "Risk Assessment Report", "Compliance Recommendations", "Improvement Roadmap"],
  },
  {
    slug: "hipaa",
    short: "HIPAA",
    name: "HIPAA (Healthcare)",
    region: "United States",
    tagline:
      "Protect PHI under HIPAA's Security, Privacy and Breach-Notification rules.",
    heroImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-15-2026-07_23_22-PM.png",
    midImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-15-2026-07_29_06-PM.png",
    intro:
      "HIPAA governs how healthcare and medical-billing businesses handle Protected Health Information (PHI). I assess your safeguards, privacy practices and governance against HIPAA — essential for anyone acting as a Business Associate.",
    why: [
      "Assess alignment with HIPAA requirements",
      "Identify healthcare data-protection gaps",
      "Evaluate safeguards for protected health information (PHI)",
      "Improve compliance readiness and governance",
      "Reduce privacy and security risk",
      "Strengthen trust in healthcare data handling",
    ],
    process: [
      { title: "Compliance Review", desc: "Review HIPAA-related requirements, policies and procedures." },
      { title: "Security Control Assessment", desc: "Assess safeguards protecting sensitive healthcare information." },
      { title: "Privacy Evaluation", desc: "Review privacy practices and handling of PHI." },
      { title: "Gap Analysis", desc: "Identify compliance weaknesses and improvement opportunities." },
      { title: "Risk Assessment", desc: "Assess privacy, security and compliance-related risks." },
      { title: "Recommendations", desc: "Practical steps to strengthen HIPAA readiness." },
    ],
    testGroups: [
      { title: "Healthcare Data Protection", items: ["Protected Health Information (PHI)", "Data handling practices", "Data retention controls", "Information protection measures"] },
      { title: "Privacy & Security Controls", items: ["Access controls", "Authentication measures", "Security safeguards", "Privacy practices"] },
      { title: "Governance & Compliance", items: ["HIPAA policies", "Compliance procedures", "Workforce awareness", "Governance controls"] },
      { title: "Risk Assessment", items: ["Compliance gaps", "Privacy risks", "Security weaknesses", "Regulatory concerns"] },
    ],
    deliverables: ["HIPAA Compliance Assessment Report", "Compliance Gap Analysis", "Risk Assessment Summary", "Security & Privacy Review", "Compliance Recommendations", "Improvement Roadmap"],
  },
  {
    slug: "it-act-2000",
    short: "IT Act 2000",
    name: "IT Act 2000 (India)",
    region: "India",
    tagline:
      "India's core cyber law — reasonable security practices and data-protection duties.",
    heroImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-15-2026-07_48_23-PM.png",
    midImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-15-2026-07_48_27-PM.png",
    intro:
      "The Information Technology Act 2000/2008 is India's foundational cyber law, defining reasonable security practices and liabilities. I evaluate your security practices, governance and compliance against applicable IT Act provisions.",
    why: [
      "Assess alignment with applicable IT Act requirements",
      "Identify cybersecurity and compliance gaps",
      "Evaluate information-security practices",
      "Improve regulatory readiness and governance",
      "Reduce legal, operational and security risk",
      "Strengthen organizational security posture",
    ],
    process: [
      { title: "Compliance Review", desc: "Review applicable IT Act requirements, policies and governance." },
      { title: "Security Assessment", desc: "Assess security controls and information-protection measures." },
      { title: "Governance Evaluation", desc: "Review compliance processes, accountability and oversight." },
      { title: "Gap Analysis", desc: "Identify compliance weaknesses and improvement opportunities." },
      { title: "Risk Assessment", desc: "Assess regulatory, operational and security-related risks." },
      { title: "Recommendations", desc: "Practical steps to strengthen compliance readiness." },
    ],
    testGroups: [
      { title: "Regulatory Compliance", items: ["IT Act requirements", "Compliance obligations", "Governance practices", "Documentation controls"] },
      { title: "Information Security", items: ["Security controls", "Data-protection practices", "Access management", "Security governance"] },
      { title: "Policy & Procedures", items: ["Security policies", "Operational procedures", "Compliance controls", "Risk-management practices"] },
      { title: "Risk Assessment", items: ["Compliance gaps", "Security risks", "Governance weaknesses", "Regulatory concerns"] },
    ],
    deliverables: ["IT Act Compliance Assessment Report", "Compliance Gap Analysis", "Risk Assessment Summary", "Security & Governance Review", "Compliance Recommendations", "Improvement Roadmap"],
  },
  {
    slug: "cert-in",
    short: "CERT-In",
    name: "CERT-In Guidelines",
    region: "India",
    tagline:
      "India's cyber incident reporting, logging and security-control requirements.",
    heroImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-15-2026-07_59_05-PM-1.png",
    midImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-15-2026-01_43_10-PM-1.png",
    intro:
      "CERT-In directions set India's mandatory incident-reporting timelines, logging and security-control expectations. I assess your monitoring, incident readiness and security controls against CERT-In guidance to strengthen cyber resilience.",
    why: [
      "Assess alignment with CERT-In security recommendations",
      "Identify monitoring and reporting gaps",
      "Evaluate incident readiness and security controls",
      "Improve cyber resilience and preparedness",
      "Strengthen security governance and visibility",
      "Reduce cybersecurity and compliance-related risk",
    ],
    process: [
      { title: "Security Review", desc: "Review cybersecurity controls, monitoring and governance measures." },
      { title: "Control Assessment", desc: "Assess security controls and operational security practices." },
      { title: "Incident Readiness", desc: "Review incident management and response preparedness." },
      { title: "Gap Analysis", desc: "Identify security weaknesses and improvement opportunities." },
      { title: "Risk Assessment", desc: "Assess cybersecurity, operational and compliance-related risks." },
      { title: "Recommendations", desc: "Practical steps to strengthen maturity and resilience." },
    ],
    testGroups: [
      { title: "Cybersecurity Controls", items: ["Security controls", "Monitoring practices", "Access management", "Security governance"] },
      { title: "Incident Readiness", items: ["Incident management", "Security monitoring", "Event logging", "Response preparedness"] },
      { title: "Security Operations", items: ["Operational security", "Risk management", "Security procedures", "Control effectiveness"] },
      { title: "Risk Assessment", items: ["Security gaps", "Operational risks", "Governance weaknesses", "Cybersecurity concerns"] },
    ],
    deliverables: ["CERT-In Security Assessment Report", "Security Gap Analysis", "Risk Assessment Summary", "Security Controls Review", "Security Recommendations", "Improvement Roadmap"],
  },
  {
    slug: "owasp",
    short: "OWASP",
    name: "OWASP Security Standards",
    region: "Global",
    tagline:
      "Application testing mapped to OWASP Top 10, API Top 10 and ASVS.",
    heroImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-15-2026-09_16_01-PM.png",
    midImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-16-2026-08_15_00-AM.png",
    intro:
      "OWASP is the global benchmark for application security. I test your applications against the OWASP Top 10, API Security Top 10 and ASVS — the standard your enterprise clients and auditors expect.",
    why: [
      "Assess alignment with OWASP security best practices",
      "Identify common web-application security risks",
      "Evaluate application security controls",
      "Improve secure development and deployment",
      "Reduce application-related vulnerabilities",
      "Strengthen overall security posture",
    ],
    process: [
      { title: "Application Review", desc: "Review application security controls and configurations." },
      { title: "Control Assessment", desc: "Assess security controls and secure-coding practices." },
      { title: "Vulnerability Testing", desc: "Test against OWASP Top 10 and API Security Top 10." },
      { title: "Gap Analysis", desc: "Identify weaknesses and improvement opportunities." },
      { title: "Risk Assessment", desc: "Assess application, operational and compliance risks." },
      { title: "Recommendations", desc: "Practical steps to strengthen application security maturity." },
    ],
    testGroups: [
      { title: "Application Security", items: ["OWASP Top 10", "API Security Top 10", "Business-logic flaws", "Injection & access control"] },
      { title: "Secure Development", items: ["Secure-coding practices", "Configuration review", "Dependency risks", "Deployment security"] },
      { title: "Verification (ASVS)", items: ["Authentication", "Session management", "Access control", "Data protection"] },
      { title: "Risk Assessment", items: ["Security gaps", "Exploitable findings", "Severity & impact", "Remediation priority"] },
    ],
    deliverables: ["OWASP Security Assessment Report", "Vulnerability Findings (with PoC)", "Risk Assessment Summary", "Secure-coding Review", "Remediation Recommendations", "Re-test Verification"],
  },
  {
    slug: "iso",
    short: "ISO 27001",
    name: "ISO-Aligned Security Practices",
    region: "Global",
    tagline:
      "Governance and controls mapped to ISO/IEC 27001 information-security practices.",
    heroImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-16-2026-10_44_09-AM.png",
    midImage:
      "https://cybernexora.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-16-2026-10_45_51-AM.png",
    intro:
      "ISO/IEC 27001 is the international standard for information-security management. I evaluate your security governance, risk management and operational controls against ISO-aligned principles to raise your overall security maturity.",
    why: [
      "Assess alignment with recognized ISO security principles",
      "Identify security governance and control gaps",
      "Evaluate information-security management practices",
      "Improve risk management and operational resilience",
      "Strengthen security processes and accountability",
      "Enhance overall security maturity",
    ],
    process: [
      { title: "Governance Review", desc: "Review security governance structures, policies and responsibilities." },
      { title: "Control Assessment", desc: "Assess administrative, technical and operational controls." },
      { title: "Risk Management", desc: "Review risk-management practices and security oversight." },
      { title: "Gap Analysis", desc: "Identify security weaknesses and improvement opportunities." },
      { title: "Findings Validation", desc: "Validate observations and assess business impact." },
      { title: "Recommendations", desc: "Practical steps to strengthen security maturity." },
    ],
    testGroups: [
      { title: "Security Governance", items: ["Security policies", "Governance frameworks", "Roles & responsibilities", "Security oversight"] },
      { title: "Risk Management", items: ["Risk identification", "Risk-assessment processes", "Risk treatment", "Security planning"] },
      { title: "Security Controls", items: ["Access controls", "Information protection", "Operational security", "Security monitoring"] },
      { title: "Continuous Improvement", items: ["Security reviews", "Process effectiveness", "Control improvements", "Security maturity"] },
    ],
    deliverables: ["ISO-Aligned Security Assessment Report", "Security Gap Analysis", "Risk Assessment Summary", "Security Controls Review", "Security Recommendations", "Improvement Roadmap"],
  },
];

export function getStandard(slug: string) {
  return complianceStandards.find((s) => s.slug === slug);
}