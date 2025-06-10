const slug = require('rehype-slug')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === true,
})

const config = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
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
      {
        // redirect link aus ohrwurm
        destination: '/landesverband/weltreise',
        source: '/weltreise',
        permanent: true,
      },
    ]
  },
}

module.exports = withBundleAnalyzer(config)
