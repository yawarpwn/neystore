/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://m.media-amazon.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
