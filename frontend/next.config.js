const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  trailingSlash: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    domains: ["cdn.dribbble.com", "rl-portfolio.s3.ap-south-1.amazonaws.com"],
  },
}

const nextPlugins = [
  [withBundleAnalyzer],
]

module.exports = withPlugins([...nextPlugins], nextConfig)
