import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://peifengmold.com";

  const staticPages = [
    "",
    "/services",
    "/services/injection-molds",
    "/services/die-casting-molds",
    "/services/blow-molds",
    "/services/rapid-prototyping",
    "/process",
    "/quality",
    "/case-studies",
    "/blog",
    "/contact",
    "/about",
    "/faq",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  return [...staticPages];
}
