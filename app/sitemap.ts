import type { MetadataRoute } from 'next'

const baseUrl = 'https://rekodedigital.com'

export default function sitemap (): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/portfolio',
    '/contact',
    '/pricing',
    '/how-it-works'
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7
  }))
}
