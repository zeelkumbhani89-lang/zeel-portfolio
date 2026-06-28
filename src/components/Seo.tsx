import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/lib/site";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  type?: string;
  jsonLd?: object;
}

export default function Seo({
  title,
  description,
  path = "",
  type = "website",
  jsonLd,
}: SeoProps) {
  const url = `${siteConfig.domain}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;
  const ogImage = `${siteConfig.domain}/images/zeel-portrait.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={`${siteConfig.name} — ${siteConfig.brand}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
