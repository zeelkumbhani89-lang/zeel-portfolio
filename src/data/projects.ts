export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  context: string;
  approach: string[];
  outcome: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "web-application-vapt",
    title: "Web Application VAPT",
    category: "Web VAPT",
    summary:
      "End-to-end vulnerability assessment and penetration testing of business web applications, manually validated against OWASP Top 10.",
    context:
      "Businesses rely on web apps for customers, payments and internal operations. An authorised web-application VAPT finds the flaws an attacker would exploit — before they do.",
    approach: [
      "Authorised, scoped testing agreed in writing with the owner",
      "Tested authentication, session handling, access control and business logic",
      "Manually validated OWASP Top 10 issues (SQLi, XSS, IDOR, SSRF, etc.)",
      "Delivered risk-rated findings with proof-of-concept and fixes",
    ],
    outcome: [
      "Clear, prioritised report — no scanner noise",
      "Every finding manually verified with a PoC",
      "Developer-friendly remediation guidance",
      "Free re-test after fixes to confirm closure",
    ],
    tags: ["Web VAPT", "OWASP Top 10", "Manual Testing"],
  },
  {
    slug: "network-vapt",
    title: "Network Penetration Testing",
    category: "Network VAPT",
    summary:
      "Internal and external network VAPT to find exposed services, misconfigurations and lateral-movement paths.",
    context:
      "A network is only as strong as its weakest exposed service. Authorised network penetration testing maps the real attack surface across internal and external infrastructure.",
    approach: [
      "Discovery and enumeration of live hosts and services",
      "Identification of exposed, outdated or misconfigured services",
      "Safe exploitation to demonstrate real impact, within scope",
      "Segmentation and hardening recommendations",
    ],
    outcome: [
      "Full picture of the external & internal attack surface",
      "Prioritised, exploitable findings — not theory",
      "Practical segmentation and patching roadmap",
      "Re-test to confirm remediation",
    ],
    tags: ["Network VAPT", "Infrastructure", "Hardening"],
  },
  {
    slug: "api-security-testing",
    title: "API Security Testing",
    category: "API VAPT",
    summary:
      "Security testing of REST and modern APIs against the OWASP API Security Top 10.",
    context:
      "APIs power mobile apps, integrations and modern web apps — and are a fast-growing attack surface. Authorised API testing finds broken authorisation, data exposure and abuse paths.",
    approach: [
      "Reviewed authentication, authorisation and rate-limiting",
      "Tested for broken object-level authorisation (BOLA/IDOR)",
      "Checked excessive data exposure and mass-assignment",
      "Validated findings with safe proof-of-concept requests",
    ],
    outcome: [
      "Coverage mapped to OWASP API Security Top 10",
      "Concrete, reproducible findings",
      "Guidance to fix authorisation and data-exposure flaws",
      "Confirmation re-test after remediation",
    ],
    tags: ["API VAPT", "OWASP API Top 10", "Authorisation"],
  },
  {
    slug: "mobile-app-vapt",
    title: "Mobile Application VAPT",
    category: "Mobile VAPT",
    summary:
      "Security assessment of Android/iOS apps — storage, communication, and API back-end testing.",
    context:
      "Mobile apps store tokens, cache sensitive data and talk to back-end APIs. An authorised mobile VAPT checks the app and its server-side the way a real attacker would.",
    approach: [
      "Reviewed local data storage and secrets handling",
      "Inspected network communication and certificate handling",
      "Tested the back-end APIs the app depends on",
      "Aligned checks with OWASP MASVS guidance",
    ],
    outcome: [
      "Client-side and server-side risks surfaced together",
      "Clear remediation for app and back-end teams",
      "Reduced risk of data leakage from the app",
      "Re-test to verify fixes",
    ],
    tags: ["Mobile VAPT", "Android / iOS", "OWASP MASVS"],
  },
  {
    slug: "wordpress-malware-recovery",
    title: "WordPress Malware & Backdoor Recovery",
    category: "Incident Response",
    summary:
      "Cleaned a compromised WordPress business site, removed persistent backdoors and hardened it against re-infection.",
    context:
      "A business website running on WordPress had been compromised, with malicious code injected into core and theme files and visitors occasionally redirected to unwanted pages.",
    approach: [
      "Inventoried core, theme and plugin files to locate injected code",
      "Removed web-shells, backdoors and malicious redirects",
      "Identified the likely root cause (outdated plugin & weak credentials)",
      "Hardened the install: updates, least-privilege accounts and security headers",
    ],
    outcome: [
      "Site restored to a clean, trusted state",
      "Persistence mechanisms removed",
      "Hardening applied to reduce re-infection risk",
      "Owner given a simple ongoing-maintenance checklist",
    ],
    tags: ["WordPress", "Malware Removal", "Hardening"],
  },
  {
    slug: "ecommerce-security-assessment",
    title: "E-commerce Web Application Security Assessment",
    category: "Security Assessment",
    summary:
      "Performed an authorised security assessment of an online store, surfacing and prioritising web-application risks.",
    context:
      "An e-commerce operator wanted assurance that their storefront and customer accounts were reasonably protected before a marketing push.",
    approach: [
      "Scoped and conducted an authorised assessment with the owner's consent",
      "Reviewed authentication, session handling and access control",
      "Checked for common OWASP Top 10 categories of weakness",
      "Documented findings with clear, prioritised remediation steps",
    ],
    outcome: [
      "Prioritised list of issues with business context",
      "Practical remediation guidance for the dev team",
      "Improved confidence ahead of the campaign",
      "Re-test offered to confirm fixes",
    ],
    tags: ["E-commerce", "OWASP", "VAPT"],
  },
  {
    slug: "responsible-security-research",
    title: "Responsible Security Research & Disclosure",
    category: "Research",
    summary:
      "Ongoing ethical security research — when real-world issues are found, they are reported responsibly to the affected organisation through coordinated disclosure.",
    context:
      "Alongside authorised engagements, I research live, real-world systems within legally permitted boundaries (such as public bug-bounty and responsible-disclosure programs). When a genuine issue is found, the affected company is notified privately so they can fix it before it can be abused — helping even large organisations improve their security.",
    approach: [
      "Working within authorised programs and permitted scope only",
      "Reporting findings privately to the affected organisation first",
      "Following coordinated, responsible-disclosure principles and timelines",
      "Sharing only sanitised lessons publicly, never sensitive details",
    ],
    outcome: [
      "Real organisations made aware of issues before attackers exploit them",
      "Coordinated, ethics-first disclosure every time",
      "Knowledge shared back through awareness content",
      "No unauthorised access — strictly within permitted scope",
    ],
    tags: ["Ethical Hacking", "Responsible Disclosure", "Bug Bounty"],
  },
];
