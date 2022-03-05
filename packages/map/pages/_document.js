import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { createStyleRenderer } from '@bdp-rps/ui'
import { renderToNodeList } from 'react-fela'

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
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossorigin=""
          />
        </Head>
        <body>
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
