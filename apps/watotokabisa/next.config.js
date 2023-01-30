const slug = require('rehype-slug')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [slug],
  },
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === true,
})

const config = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
}

module.exports = withBundleAnalyzer(withMDX(config))
