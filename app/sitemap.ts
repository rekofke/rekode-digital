import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.rekodedigital.com'

export default function sitemap (): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${baseUrl}/summit-ridge`,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/high-desert`,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/silver-state`,
      changeFrequency: 'monthly',
      priority: 0.6
    }
  ]
}
