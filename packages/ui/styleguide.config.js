var path = require('path')

module.exports = {
  title: 'BdP LV RPS Styleguide',
  assetsDir: path.resolve(__dirname, 'public'),
  styleguideDir: './public',
  pagePerSection: true,
  exampleMode: 'expand',
  usageMode: 'expand',
  components: 'src/components/**/index.js',
  skipComponentsWithoutExample: true,
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.plugins[3].dangerouslyAllowCleanPatternsOutsideProject = true
    return webpackConfig
  },
  context: {
    Box: path.resolve(__dirname, 'src/components/box/index.js'),
    Button: path.resolve(__dirname, 'src/components/button/index.js'),
    TabNavItem: path.resolve(__dirname, 'src/components/tabNavItem/index.js'),
    NavBarItem: path.resolve(__dirname, 'src/components/navBarItem/index.js'),
  },
  template: {
    head: {
      raw:
        '<style>[name=rsg-code-editor],[data-testid=preview-wrapper]+div,footer{display:none!important}</style>',
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'setup/FelaWrapper'),
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },

    {
      name: 'Setup',
      content: 'docs/setup.md',
    },
    {
      name: 'Styling',
      content: 'docs/styling.md',
    },
    {
      name: 'Components',
      components: 'src/components/**/index.js',
      sectionDepth: 1,
    },
    {
      name: 'Playroom',
      external: true,
      href: 'http://playroom.bdp-rps.app',
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
}
