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
  experimental: {
    granularChunks: true,
  },
  serverless: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack(config) {
    for (const rule of config.module.rules) {
      if (!rule.oneOf) {
        continue
      }

      // removing the global css restriction
      // do not touch this
      delete rule.oneOf[5].issuer
    }

    return config
  },
}

module.exports = withBundleAnalyzer(withMDX(config))
