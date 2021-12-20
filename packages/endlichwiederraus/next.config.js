const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === true,
})

const config = {
  target: 'serverless',
  trailingSlash: true,
}

module.exports = withBundleAnalyzer(config)
