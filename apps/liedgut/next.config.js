module.exports = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    // not sure we need that, but otherwise it breaks
    config.resolve.alias.zlib = 'zlib-browserify'

    return config
  },
}
