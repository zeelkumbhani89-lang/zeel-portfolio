// FAQ content powers both the on-page accordions and FAQPage JSON-LD (AEO).
// Keep answers factual, concise and genuinely useful — no filler.

export interface Faq {
  q: string;
  a: string;
}

// Industry Solutions page
export const industryFaqs: Faq[] = [
  {
    q: "Which industries do you provide cybersecurity services for?",
    a: "I work with healthcare and hospitals, schools, colleges and universities, the diamond and textile industries, manufacturing, finance and fintech, e-commerce, hotels and hospitality, pharma, SMEs, startups and larger enterprises. The testing approach stays the same; the threat model and compliance focus change per sector.",
  },
  {
    q: "Do different industries really face different cyber risks?",
    a: "Yes. A hospital's biggest risk is ransomware taking critical systems offline, while a diamond trader is more exposed to business-email compromise and invoice fraud, and an e-commerce store worries about payment-data theft and web attacks. Security work should be mapped to the risks and regulations that actually apply to your sector.",
  },
  {
    q: "Which compliance frameworks apply to my business in India?",
    a: "It depends on your sector and data. Common ones include India's DPDP Act for personal data, PCI DSS for card payments, ISO/IEC 27001 for an information-security management system, and HIPAA where US health data is involved. This is informational guidance, not legal advice — I help you understand and work toward the relevant controls.",
  },
  {
    q: "I run a small business or startup. Is professional security testing worth it?",
    a: "Yes — attackers often target SMEs and startups precisely because they assume security is weaker. Founder-led, right-sized testing finds the issues that matter most without enterprise-level cost, so you fix real risk before it becomes a breach.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "We start with a short scoping call to understand your systems and concerns, agree scope and authorisation in writing, then I perform manual, ethical testing. You get a clear report with risk-rated findings, proof-of-concept and prioritised fixes — followed by a re-test after remediation.",
  },
];

// General / Home page
export const generalFaqs: Faq[] = [
  {
    q: "Who is Zeel Kumbhani?",
    a: "Zeel Kumbhani is a cybersecurity consultant and the Founder & CEO of CyberNexora, based in Surat, Gujarat, India. He specialises in VAPT (vulnerability assessment and penetration testing), web and application security, malware recovery and security-awareness training for businesses across India and worldwide.",
  },
  {
    q: "What is VAPT and do I need it?",
    a: "VAPT stands for Vulnerability Assessment and Penetration Testing — finding security weaknesses and then safely proving how an attacker could exploit them. If you handle customer data, take payments, or run web and cloud systems, VAPT helps you find and fix real risk before attackers do.",
  },
  {
    q: "Do you only work with clients in Surat or Gujarat?",
    a: "No. While based in Surat, Gujarat, I work with businesses across India and internationally. Security testing and consulting are delivered remotely, with clear communication and reporting throughout.",
  },
  {
    q: "How is your work different from an automated scanner?",
    a: "Automated scanners produce noisy lists with many false positives. I manually validate every finding, provide a clear proof-of-concept, and prioritise fixes by real business risk — so your team spends time on issues that actually matter.",
  },
  {
    q: "How do I get started?",
    a: "Book a consultation or send a message describing your systems and concerns. We'll agree scope and authorisation, and I'll outline the right first step — with no obligation.",
  },
];

// Services page
export const servicesFaqs: Faq[] = [
  {
    q: "What cybersecurity services do you offer?",
    a: "Website and web-application VAPT, network penetration testing, API security testing, mobile-app VAPT, cloud-security review, malware and SEO-spam recovery, incident response, security consulting and staff security-awareness training — for businesses across India and worldwide.",
  },
  {
    q: "What is the difference between VAPT and a vulnerability scan?",
    a: "A vulnerability scan is automated and lists potential issues, often with false positives. VAPT adds manual penetration testing — I verify each issue by safely exploiting it within scope, prove the real impact, and prioritise fixes. You get accuracy, not noise.",
  },
  {
    q: "Do you provide a report after testing?",
    a: "Yes. Every engagement ends with a clear, risk-rated report: what was found, a proof-of-concept for each issue, the business impact, and prioritised, developer-friendly remediation steps — plus a free re-test after you fix them.",
  },
  {
    q: "How much does a security assessment cost?",
    a: "It depends on scope — the size of the application or network and the depth of testing. I keep pricing founder-led, transparent and right-sized for SMEs and startups, not enterprise-inflated. Book a consultation for a no-obligation quote.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "A focused web-app or network test is often completed within a few days to a couple of weeks depending on scope. We agree timelines up front during scoping so there are no surprises.",
  },
];

// Projects page
export const projectFaqs: Faq[] = [
  {
    q: "Is your security testing legal and authorised?",
    a: "Always. Every test is performed only with explicit written authorisation and within an agreed scope. For real-world research, I work strictly inside permitted programs such as public bug-bounty and responsible-disclosure programs — never unauthorised access.",
  },
  {
    q: "Do you report issues you find in real companies' systems?",
    a: "Yes — through coordinated, responsible disclosure. When I find a genuine issue within a permitted program, I report it privately to the affected organisation so they can fix it before it can be abused. Sensitive details are never published.",
  },
  {
    q: "Why are client names not shown in the case studies?",
    a: "To protect client privacy and security. The case studies describe the type of work, the approach and the outcome honestly, without exposing identifying details or fabricated numbers.",
  },
  {
    q: "Can you test my website or app specifically?",
    a: "Yes. Whether it's a website, web app, API, mobile app, network or cloud setup, I can scope an authorised VAPT engagement tailored to your system. Book a consultation to get started.",
  },
];
