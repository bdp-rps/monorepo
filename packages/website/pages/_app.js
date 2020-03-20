import { FelaProvider } from '@bdp-rps/ui'
import theme from '@bdp-rps/ui/lib/themes/light'

export default function App({ Component, pageProps, renderer }) {
  return (
    <FelaProvider renderer={renderer} theme={theme}>
      <Component {...pageProps} />
    </FelaProvider>
  )
}
