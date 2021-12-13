import core from './core'

const fonts = {
  content: 'Roboto, Helvetica Neue, Helvetica, Arial, sans-serif',
  heading: 'Amatic, Helvetica Neue, Helvetica, Arial, sans-serif',
}

const colors = {
  yellow: 'rgb(255, 203, 4)',
  yellowLight: 'rgb(245, 193, 0)',
  blue: 'rgb(29, 72, 153)',
  blueLight: 'rgb(39, 82, 163)',
  brown: 'rgb(107, 92, 72)',
  red: 'rgb(211, 0, 20)',
  redLight: 'rgb(221, 10, 30)',

  desert: 'rgb(255, 250, 232)',
  redSalsa: 'rgb(249, 65, 68)',
  orangeRed: 'rgb(243, 114, 44)',
  // yellowOrange: 'rgb(248, 150, 30)',
  yellowOrange: 'rgb(235, 160, 68)',
  mangoTango: 'rgb(249, 132, 74)',
  maizeCrayola: 'rgb(249, 199, 79)',
  pistachio: 'rgb(144, 190, 109)',
  zomp: 'rgb(67, 170, 139)',
  cadetBlue: 'rgb(77, 144, 142)',
  queenBlue: 'rgb(87, 117, 144)',
  queenBlueLight: 'rgb(127, 172, 212)',
  cgBlue: 'rgb(39, 125, 161)',
  cgBlueTransparent: 'rgba(39, 125, 161, 0.6)',
}

export default {
  fonts,
  maxReadWidth: 900,
  maxContentWidth: 1100,
  colors: {
    ...colors,
    foreground: {
      primary: core.colors.grey1,
      destructive: colors.red,
    },
    background: {
      primary: colors.desert,
      secondary: colors.yellowOrange,
      accent: colors.cgBlue,
      image: colors.cgBlueTransparent,
      info: core.colors.grey7,
    },
  },
  tokens: {
    primary: colors.cgBlue,
    primaryLight: colors.queenBlueLight,
    secondary: colors.yellowOrange,
    secondaryLight: colors.yellowOrange,
    destructive: colors.redSalsa,
    destructiveLight: colors.redLight,
    foreground: core.colors.grey1,
    background: core.colors.white,
    inputPaddingVertical: '10px',
    inputPaddingHorizontal: '10px',
    inputDisabledBackground: core.colors.grey8,
    inputDisabledForeground: core.colors.grey2,
    inputBorder: core.colors.grey5,
    inputForeground: core.colors.grey1,
    borderRadius: '2% 6% 5% 4% / 1% 1% 2% 4%',
    textOnImageShadow:
      '0 0 2px rgba(0,0,0,0.7), 0 0 10px rgba(0,0,0,0.4), 0 0 40px rgba(0,0,0,0.35)',
  },
  typography: {
    defaultVariant: 'body',
    defaultColor: 'foreground.primary',
    variants: {
      note: {
        fontFamily: fonts.content,
        fontSize: 14,
        lineHeight: 16 / 14,
        color: core.colors.grey3,
        subStyle: {
          info: {
            textTransform: 'lowercase',
            fontVariant: 'small-caps',
            fontWeight: 500,
          },
        },
      },
      label: {
        fontFamily: fonts.content,
        fontSize: 16,
        lineHeight: 18 / 16,
        color: core.colors.grey3,
      },
      subline: {
        fontFamily: fonts.content,
        fontSize: 16,
        lineHeight: 22 / 16,
        subStyle: {
          emphasis: {
            fontWeight: 700,
          },
        },
      },
      body: {
        fontFamily: fonts.content,
        fontSize: 18,
        lineHeight: 26 / 18,
        subStyle: {
          emphasis: {
            fontWeight: 700,
          },
        },
      },
      category: {
        fontFamily: fonts.content,
        fontSize: 20,
        lineHeight: 24 / 20,
        fontWeight: 700,
      },
      heading: {
        fontFamily: fonts.heading,
        fontSize: 32,
        lineHeight: 40 / 32,
        fontWeight: 700,
      },
      subtitle: {
        fontFamily: fonts.heading,
        fontSize: 40,
        lineHeight: 48 / 40,
        fontWeight: 700,
      },
      title: {
        fontFamily: fonts.heading,
        fontWeight: 700,
        fontSize: 84,
        lineHeight: 102 / 84,
      },
    },
  },
}
