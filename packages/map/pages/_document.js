import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { getStyleRenderer, StyleTags } from '@bdp-rps/ui'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const renderer = getStyleRenderer()

    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => <App {...props} renderer={renderer} />,
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      renderer,
    }
  }

  render() {
    const { renderer, isProduction } = this.props

    return (
      <html>
        <Head>
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width,height=device-height,initial-scale=1, viewport-fit=cover"
          />
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossOrigin="" />
          <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
            crossOrigin=""></script>
          <StyleTags renderer={renderer} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
