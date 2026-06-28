import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import Hero from "@/components/sections/Hero";
import ToolsArsenal from "@/components/sections/ToolsArsenal";
import Faqs from "@/components/sections/Faqs";
import { generalFaqs } from "@/data/faqs";
import {
  StatsStrip,
  AboutSection,
  WhyChooseMe,
} from "@/components/sections/HomeSections";
import {
  ServicesPreview,
  IndustriesPreview,
  ProjectsPreview,
  ActivitiesPreview,
  CtaSection,
} from "@/components/sections/HomePreviews";
import { siteConfig } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.domain}/#person`,
      name: siteConfig.name,
      jobTitle: "Founder & CEO, Cybersecurity Consultant",
      description: siteConfig.description,
      url: siteConfig.domain,
      email: siteConfig.email,
      telephone: siteConfig.phoneRaw,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        addressCountry: "India",
      },
      worksFor: { "@type": "Organization", "@id": `${siteConfig.domain}/#org` },
      sameAs: [siteConfig.socials.linkedin, siteConfig.socials.company],
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.domain}/#org`,
      name: siteConfig.brand,
      url: siteConfig.socials.company,
      slogan: siteConfig.brandTagline,
      founder: { "@type": "Person", "@id": `${siteConfig.domain}/#person` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.domain}/#service`,
      name: "Zeel Kumbhani — Cybersecurity Services",
      description:
        "Cybersecurity consulting, VAPT, web/network/API/mobile penetration testing, incident response and security-awareness training in Surat, Gujarat, serving clients across India and worldwide.",
      url: siteConfig.domain,
      image: `${siteConfig.domain}/images/zeel-portrait.jpg`,
      email: siteConfig.email,
      telephone: siteConfig.phoneRaw,
      priceRange: "$$",
      areaServed: ["Surat", "Gujarat", "India", "Worldwide"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      provider: { "@type": "Person", "@id": `${siteConfig.domain}/#person` },
      knowsAbout: [
        "VAPT",
        "Penetration Testing",
        "Web Application Security",
        "Network Security",
        "API Security",
        "Incident Response",
        "Ethical Hacking",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.domain}/#website`,
      url: siteConfig.domain,
      name: `${siteConfig.name} — Cybersecurity Portfolio`,
      publisher: { "@type": "Person", "@id": `${siteConfig.domain}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Cybersecurity Expert in Surat, Gujarat | VAPT & Ethical Hacking"
        description={siteConfig.description}
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <StatsStrip />
      <AboutSection />
      <WhyChooseMe />
      <ToolsArsenal />
      <ServicesPreview />
      <IndustriesPreview />
      <ProjectsPreview />
      <ActivitiesPreview />
      <Faqs faqs={generalFaqs} />
      <CtaSection />
    </Layout>
  );
}
