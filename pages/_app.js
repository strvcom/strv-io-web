import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'

const meta = {
  title: "STRV's Open Source Libraries",
  description:
    'Over the years STRV’s developers have built up quite a lot of open source libraries. This is the place where you’ll find all of them. Have fun.',
  ogImage: 'https://strv.io/static/assets/share-banner.png',
  ogUrl: 'https://strv.io',
}

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:type" content="website" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:url" content={meta.ogUrl} />
          <meta property="og:image" content={meta.ogImage} />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
