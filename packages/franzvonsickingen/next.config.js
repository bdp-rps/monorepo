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
}

module.exports = withBundleAnalyzer(withMDX(config))
