import { MetadataRoute } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.garyhardyansyah.xyz";

  const projectRoutes: MetadataRoute.Sitemap = RESUME_DATA.projects.map(
    (project) => ({
      url: `${siteUrl}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
