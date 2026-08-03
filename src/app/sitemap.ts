import type { MetadataRoute } from 'next'
import { siteUrl } from '@/data/profile'
import { projects } from '@/data/projects'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.id}/`,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ]
}
