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
      <html>
        <Head>
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width,height=device-height,initial-scale=1, viewport-fit=cover"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/favicons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/favicons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/favicons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/favicons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/favicons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/favicons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/favicons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/favicons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/favicon/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            defer
            src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
          <noscript>
            <img
              src="https://queue.simpleanalyticscdn.com/noscript.gif"
              alt=""
              referrerpolicy="no-referrer-when-downgrade"
            />
          </noscript>
        </body>
      </html>
    )
  }
}
