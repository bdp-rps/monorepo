module.exports = {
  components: './src/components',
  outputPath: './public',

  // Optional:
  title: 'BdP LV RPS Design System',
  frameComponent: './src/FelaWrapper.js',
  widths: [320, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `<Box height="100vh" extend={{ backgroundColor: "rgb(230, 230, 230)" }}>
  <Box padding={4} space={4}>
    <TextInput label="Vorname" value="Peter" />
    <TextInput
      label="Nachname"
      value={null}
      errorMessage="Nachname ist ein Pflichtfeld."
      isValid={false}
    />
    <Checkbox label="Newsletter abonnieren" />
    <Button>Abschicken</Button>
  </Box>
  <Box padding={4}>
    <Tile
      title="Auslandsfahrt"
      image="https://mediafiles.urlaubsguru.de/wp-content/uploads/2019/06/schweden_haus_see_baueme_12052921.jpg"
    >
      Dieses Jahr waren wir unterwegs im Norden.
    </Tile>
  </Box>
</Box>
`,
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
