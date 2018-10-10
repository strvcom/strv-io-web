import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document' // eslint-disable-line
import { ServerStyleSheet } from 'styled-components'
import '../app/globalStyles'

export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/static/assets/favicon.ico" />
          <link rel="manifest" href="static/manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
