const colors = {
  yellow: 'rgb(255, 203, 4)',
  yellowLight: 'rgb(245, 193, 0)',
  yellowLighter: 'rgb(255, 215, 80)',
  blue: 'rgb(29, 72, 153)',
  blueLight: 'rgb(39, 82, 163)',
  blueLighter: 'rgb(82, 129, 200)',
}

const fonts = {
  ALEO: {
    family: 'ALEO',
    files: [
      {
        src: 'https://bdp-rps.de/fonts/Aleo-Regular.ttf',
      },
      {
        src: 'https://bdp-rps.de/fonts/Aleo-Bold.ttf',
        fontWeight: 'bold',
      },
    ],
  },
}

export default {
  colors,
  baselineGrid: 4,

  fonts,
  typography: {
    defaultVariant: 'body',
    body: {
      fontFamily: fonts.ALEO,
      fontSize: 14,
      lineHeight: 1.2,
      variants: {
        standard: {
          fontWeight: 400,
        },
        emphasis: {
          fontWeight: 700,
        },
      },
    },
    paragraph: {
      fontFamily: fonts.ALEO,
      fontSize: 12,
      lineHeight: 1.2,
      variants: {
        standard: {
          fontWeight: 400,
        },
        emphasis: {
          fontWeight: 700,
        },
      },
    },
    address: {
      fontFamily: fonts.ALEO,
      fontSize: 10,
      lineHeight: 1.2,
      variants: {
        standard: {
          fontWeight: 400,
        },
        emphasis: {
          fontWeight: 700,
        },
      },
    },
    note: {
      fontFamily: fonts.ALEO,
      fontSize: 8,
      lineHeight: 1.2,
      variants: {
        standard: {
          fontWeight: 400,
        },
        emphasis: {
          fontWeight: 700,
        },
      },
    },
    heading: {
      fontFamily: fonts.ALEO,
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.4,
      marginBottom: 15,
    },
    subheading: {
      fontFamily: fonts.ALEO,
      fontSize: 24,
      lineHeight: 1.2,
      marginBottom: 20,
    },
  },
}
