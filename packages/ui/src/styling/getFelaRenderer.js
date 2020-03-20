import { createRenderer } from 'fela'
import plugins from 'fela-preset-web'
import responsiveValue from 'fela-plugin-responsive-value'

import staticStyle from './staticStyle'

export const responsiveProps = {
  padding: true,
  paddingLeft: true,
  paddingRight: true,
  paddingBottom: true,
  paddingTop: true,
  margin: true,
  marginLeft: true,
  marginRight: true,
  marginBottom: true,
  marginTop: true,
  width: true,
  height: true,
  minWidth: true,
  minHeight: true,
  maxWidth: true,
  maxHeight: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  alignSelf: true,
  alignItems: true,
  alignContent: true,
  justifyContent: true,
  flexDirection: true,
  flexWrap: true,
  order: true,
  display: true,
}

const getResponsiveMediaQueries = (values, props) => {
  const { small, medium, large, huge } = props.theme.breakpoints

  const mediaQueryMap = {
    2: [small],
    3: [small, medium],
    4: [small, medium, large],
    5: [small, medium, large, huge],
  }

  return mediaQueryMap[values.length]
}

export default function getFelaRenderer() {
  const renderer = createRenderer({
    plugins: [
      responsiveValue(getResponsiveMediaQueries, responsiveProps),
      ...plugins,
    ],
  })

  staticStyle.forEach(rule => renderer.renderStatic(rule.style, rule.selector))
  renderer.renderFont('Aleo', ['/fonts/Aleo-Regular.ttf'], {
    fontWeight: 400,
  })
  renderer.renderFont('Aleo', ['/fonts/Aleo-Italic.ttf'], {
    fontWeight: 400,
    fontStyle: 'italic',
  })
  renderer.renderFont('Aleo', ['/fonts/Aleo-Bold.ttf'], {
    fontWeight: 700,
  })
  renderer.renderFont('Aleo', ['/fonts/Aleo-BoldItalic.ttf'], {
    fontWeight: 700,
    fontStyle: 'italic',
  })
  renderer.renderFont('Aleo', ['/fonts/Aleo-Light.ttf'], {
    fontWeight: 200,
  })
  renderer.renderFont('Aleo', ['/fonts/Aleo-LightItalic.ttf'], {
    fontWeight: 200,
    fontStyle: 'italic',
  })

  renderer.renderFont('Immenhausen', ['/fonts/Immenhausen-Regular.ttf'])

  return renderer
}
