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
