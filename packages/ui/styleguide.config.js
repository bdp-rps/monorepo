var path = require('path')

module.exports = {
  title: 'BdP LV RPS Styleguide',
  assetsDir: path.resolve(__dirname, 'public'),
  pagePerSection: true,
  exampleMode: 'expand',
  usageMode: 'expand',
  components: 'src/components/**/index.js',
  context: {
    Box: path.resolve(__dirname, 'src/components/box/index.js'),
  },
  template: {
    head: {
      raw:
        '<style>[name=rsg-code-editor],[data-testid=preview-wrapper]+div,footer{display:none!important}</style>',
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'stories/FelaWrapper'),
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
      usageMode: 'hide',
    },
    {
      name: 'Documentation',
      sectionDepth: 1,
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
          description: 'The description for the installation section',
        },
        {
          name: 'Styling',
          content: 'docs/styling.md',
        },
      ],
    },
    {
      name: 'Components',
      components: 'src/components/**/index.js',
      sectionDepth: 1,
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
