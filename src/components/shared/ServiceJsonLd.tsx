export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Peifeng Precision",
      url: "https://www.peifengmold.com",
    },
    areaServed: [
      "United States", "Germany", "United Kingdom", "Australia",
      "Canada", "France", "Italy", "Spain", "Netherlands",
      "Poland", "Japan", "South Korea", "Brazil", "Mexico",
    ],
    serviceType: "Mold Engineering",
    offers: {
      "@type": "Offer",
      url,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
