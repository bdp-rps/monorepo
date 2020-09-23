module.exports = {
  experimental: {
    granularChunks: true,
  },
  serverless: true,
  pageExtensions: ['js', 'jsx'],
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
