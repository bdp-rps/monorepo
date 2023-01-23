const slug = require('rehype-slug')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === true,
})

const config = {
  experimental: {
    granularChunks: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

module.exports = withBundleAnalyzer(config)
