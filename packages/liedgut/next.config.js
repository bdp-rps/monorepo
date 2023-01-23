module.exports = {
  webpack(config) {
    // not sure we need that, but otherwise it breaks
    config.resolve.alias.zlib = 'zlib-browserify'

    return config
  },
}
