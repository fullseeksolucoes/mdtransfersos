import type { MetadataRoute } from "next";
import { cityPages, site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  // Joinville é canonicalizada para a home, então fica fora do sitemap.
  const cities = cityPages
    .filter((city) => city.slug !== "joinville")
    .map((city) => ({
      url: `${baseUrl}/cidade/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...cities,
  ];
}
