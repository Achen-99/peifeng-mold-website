export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Peifeng Precision",
    alternateName: "Peifeng Precision Hardware Mold Co., Ltd.",
    description:
      "Mold engineering and manufacturing management. In-house DFM and QC, audited factory partners. Injection, die-casting, and blow molds. Shenzhen, China.",
    url: "https://www.peifengmold.com",
    email: "info@peifengmold.com",
    foundingDate: "2015",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shenzhen",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
    areaServed: [
      "United States",
      "Germany",
      "United Kingdom",
      "Australia",
      "Canada",
      "France",
      "Italy",
      "Spain",
      "Netherlands",
      "Poland",
      "Japan",
      "South Korea",
      "Brazil",
      "Mexico",
      "India",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Injection Mold Engineering",
          description:
            "Precision injection molds for thermoplastics — from single cavity to high-volume multi-cavity systems.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Die-Casting Mold Engineering",
          description:
            "High-pressure die-casting molds for aluminum, zinc, and magnesium alloys.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Blow Mold Engineering",
          description:
            "Extrusion and injection blow molds for bottles, containers, and hollow parts.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
