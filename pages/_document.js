import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import '../app/globalStyles'

const meta = {
  title: "STRV's Open Source Libraries",
  description:
    'Over the years STRV’s developers have built up quite a lot of open source libraries. This is the place where you’ll find all of them. Have fun.',
  ogImage: 'https://strv.io/static/assets/share-banner.png',
  ogUrl: 'https://strv.io',
}

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    /* eslint-disable */
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    /* eslint-enable */
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/static/assets/favicon.ico" />
          <link rel="manifest" href="static/manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />
          {this.props.styleTags}
          <meta property="og:title" content={meta.title} />
          <meta property="og:type" content="website" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:url" content={meta.ogUrl} />
          <meta property="og:image" content={meta.ogImage} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument
