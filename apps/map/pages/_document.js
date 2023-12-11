import React from 'react'
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
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
            integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
            crossorigin=""
          />
          <script
            src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
            integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
            crossorigin=""></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script async defer src="https://sa.bdp-rps.app/latest.js"></script>
          <noscript>
            <img src="https://sa.bdp-rps.app/noscript.gif" alt="" />
          </noscript> */}
        </body>
      </Html>
    )
  }
}
