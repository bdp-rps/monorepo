import core from './core'

const fonts = {
  content: 'Aleo, Helvetica Neue, Helvetica, Arial, sans-serif',
  heading: 'Immenhausen, Helvetica Neue, Helvetica, Arial, sans-serif',
}

const colors = {
  yellow: 'rgb(255, 203, 4)',
  yellowLight: 'rgb(245, 193, 0)',
  yellowLighter: 'rgb(255, 215, 80)',
  blue: 'rgb(29, 72, 153)',
  blueLight: 'rgb(39, 82, 163)',
  blueLighter: 'rgb(82, 129, 200)',
  brown: 'rgb(107, 92, 72)',
  red: 'rgb(211, 0, 20)',
  redLight: 'rgb(221, 10, 30)',
  redLighter: 'rgb(240, 71, 80)',
  green: 'rgb(84, 139, 49)',
  greenLight: 'rgb(132, 188, 97)',
}

export default {
  maxReadWidth: 800,
  maxContentWidth: 1000,
  fonts,
  colors: {
    ...colors,
    foreground: {
      primary: core.colors.grey1,
      destructive: colors.red,
    },
  },
  tokens: {
    primary: colors.blue,
    primaryLight: colors.blueLight,
    secondary: colors.yellow,
    secondaryLight: colors.yellowLight,
    tertiary: colors.green,
    tertiaryLight: colors.greenLight,
    destructive: colors.red,
    destructiveLight: colors.redLight,
    foreground: core.colors.grey1,
    background: core.colors.white,
    inputPaddingVertical: '12px',
    inputPaddingHorizontal: '10px',
    inputDisabledBackground: core.colors.grey8,
    inputDisabledForeground: core.colors.grey2,
    inputBorder: core.colors.grey5,
    inputForeground: core.colors.grey1,
  },
  typography: {
    defaultVariant: 'body',
    defaultColor: 'grey1',
    variants: {
      note: {
        fontFamily: fonts.content,
        fontSize: 14,
        lineHeight: 16 / 14,
        color: colors.grey3,
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
        lineHeight: 16 / 16,
        color: colors.grey3,
      },
      body: {
        fontFamily: 'Arial, sans-serif',
        fontSize: 16,
        lineHeight: 24 / 16,
        color: colors.grey1,
        subStyle: {
          emphasis: {
            fontWeight: 700,
          },
        },
      },
      category: {
        fontFamily: fonts.content,
        fontSize: 18,
        lineHeight: 22 / 18,
        fontWeight: 700,
        color: colors.blue,
      },
      subtitle: {
        fontFamily: fonts.heading,
        fontSize: 32,
        lineHeight: 40 / 32,
        fontWeight: 400,
        color: colors.grey1,
      },
      title: {
        fontFamily: fonts.heading,
        fontWeight: 900,
        fontSize: 40,
        lineHeight: 40 / 40,
        color: colors.grey1,
      },
    },
  },
}
