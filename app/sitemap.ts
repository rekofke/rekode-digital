import type { MetadataRoute } from 'next'

const baseUrl = 'https://rekodedigital.com'

export default function sitemap (): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/portfolio',
    '/about',
    '/contact',
    '/pricing'
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7
  }))
}
