import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const publicRoutes = ["", "/auth"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
