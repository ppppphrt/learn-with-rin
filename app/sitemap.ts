import { MetadataRoute } from "next"
import { articles } from "@/lib/articles"

const BASE_URL = "https://learn-with-rin-m252.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const articlePages = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articlePages,
  ]
}
