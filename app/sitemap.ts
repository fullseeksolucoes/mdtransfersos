import type { MetadataRoute } from "next";
import { cityPages } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mdtransfersos.com.br";

  const cities = cityPages.map((city) => ({
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
