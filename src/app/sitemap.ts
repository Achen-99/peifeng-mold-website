import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.peifengmold.com";

  const staticPages = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/services/injection-molds", priority: 0.8 },
    { path: "/services/die-casting-molds", priority: 0.8 },
    { path: "/services/blow-molds", priority: 0.8 },
    { path: "/services/rapid-prototyping", priority: 0.8 },
    { path: "/process", priority: 0.7 },
    { path: "/quality", priority: 0.7 },
    { path: "/case-studies", priority: 0.7 },
    { path: "/case-studies/automotive-sensor-housing", priority: 0.6 },
    { path: "/case-studies/medical-device-enclosure", priority: 0.6 },
    { path: "/case-studies/aluminum-die-cast-housing", priority: 0.6 },
    { path: "/blog", priority: 0.8 },
    { path: "/blog/import-injection-molds-from-china", priority: 0.7 },
    { path: "/blog/injection-mold-cost-breakdown", priority: 0.7 },
    { path: "/blog/mold-steel-selection-guide", priority: 0.7 },
    { path: "/blog/mold-base-standards-explained", priority: 0.7 },
    { path: "/blog/questions-to-ask-mold-supplier", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
    { path: "/about", priority: 0.6 },
    { path: "/faq", priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));

  return [...staticPages];
}
