module.exports = {
  components: './src/index.js',
  outputPath: '../website/public/playroom',

  // Optional:
  title: 'BdP LV RPS Design System',
  frameComponent: './setup/FelaWrapper.js',
  widths: [320, 1024],
  port: 9000,
  openBrowser: true,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.js$/i,
          use: {
            loader: 'babel-loader',
          },
          include: __dirname,
          exclude: /node_modules/,
        },
      ],
    },
  }),
}
