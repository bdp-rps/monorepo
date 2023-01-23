const slug = require('rehype-slug')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === true,
})

const config = {
  experimental: {
    granularChunks: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        // redirect link aus ohrwurm
        source: '/der-landesverband/liedgut',
        destination: '/landesverband/liedgut',
        permanent: true,
      },
    ]
  },
}

module.exports = withBundleAnalyzer(config)
