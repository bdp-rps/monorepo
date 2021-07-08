const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === true,
})

const config = {
  target: 'serverless',
}

module.exports = withBundleAnalyzer(config)
