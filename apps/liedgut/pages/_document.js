import React from 'react'
import Script from 'next/script'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { createStyleRenderer, renderToNodeList } from '@bdp-rps/ui'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const renderer = createStyleRenderer()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App {...props} renderer={renderer} />,
      })

    const initialProps = await Document.getInitialProps(ctx)
    const styles = renderToNodeList(renderer)

    return {
      ...initialProps,
      styles: [...initialProps.styles, ...styles],
    }
  }

  render() {
    return (
      <Html lang="de">
        <Head>
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width,height=device-height,initial-scale=1, viewport-fit=cover"
          />
        </Head>
        <body>
          <Script
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]}`,
            }}
          />
          <Main />
          <NextScript />
          <script async defer src="https://sa.bdp-rps.app/latest.js"></script>
          <noscript>
            <img src="https://sa.bdp-rps.app/noscript.gif" alt="" />
          </noscript>
        </body>
      </Html>
    )
  }
}
