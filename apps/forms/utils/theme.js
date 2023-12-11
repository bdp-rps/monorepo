const colors = {
  primary: 'red',
  secondary: 'blue',
  grey1: '#333333',
}

const fonts = {
  BELL_GOTHIC: {
    family: 'Bell Gothic',
    files: [
      {
        src: 'https://bdp-rps.de/fonts/Bell_Gothic.ttf',
      },
      {
        src: 'https://bdp-rps.de/fonts/Bell_Gothic_Bold.ttf',
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
      fontFamily: fonts.BELL_GOTHIC,
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
    heading: {
      fontFamily: fonts.BELL_GOTHIC,
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.4,
      marginBottom: 15,
    },
    subheading: {
      fontFamily: fonts.BELL_GOTHIC,
      fontSize: 24,
      lineHeight: 1.2,
      marginBottom: 20,
    },
  },
}
