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
        enhanceApp: App => props => <App {...props} renderer={renderer} />,
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
