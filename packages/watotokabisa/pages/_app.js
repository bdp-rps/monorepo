import { StyleProvider } from '@bdp-rps/ui'
import theme from '@bdp-rps/ui/lib/themes/kabisa'

export default function App({ Component, pageProps, renderer }) {
  return (
    <StyleProvider renderer={renderer} theme={theme}>
      <Component {...pageProps} />
    </StyleProvider>
  )
}
