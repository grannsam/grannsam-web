import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { PUBLIC_PATHS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_PATHS.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/appen" || path === "/jamfor" ? 0.8 : 0.6,
  }));
}
