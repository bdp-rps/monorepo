import { StyleProvider } from '@bdp-rps/ui'
import theme from '@bdp-rps/ui/lib/themes/raus'

export default function App({ Component, pageProps, renderer }) {
  if (renderer) {
    renderer.renderFont('Immenhausen', ['/fonts/Immenhausen-Regular.ttf'])
  }

  return (
    <StyleProvider renderer={renderer} theme={theme}>
      <Component {...pageProps} />
    </StyleProvider>
  )
}
