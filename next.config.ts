import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects () {
    return [
      {
        source: '/go/fb',
        destination:
          '/free-visibility-review?utm_source=facebook&utm_medium=social&utm_campaign=free_visibility_review',
        permanent: false
      },
      {
        source: '/go/ig',
        destination:
          '/free-visibility-review?utm_source=instagram&utm_medium=social&utm_campaign=free_visibility_review',
        permanent: false
      },
      {
        source: '/go/li',
        destination:
          '/free-visibility-review?utm_source=linkedin&utm_medium=social&utm_campaign=free_visibility_review',
        permanent: false
      },
      {
        source: '/go/x',
        destination:
          '/free-visibility-review?utm_source=x&utm_medium=social&utm_campaign=free_visibility_review',
        permanent: false
      }
    ]
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
}

export default nextConfig
