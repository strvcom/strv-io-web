import React from 'react'
import Helmet from 'react-helmet'
import { SITE_METADATA } from 'common/constants'

const MetaHead = () => {
  const { DESCRIPTION, SITE_URL, TITLE } = SITE_METADATA
  return (
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:image" content="/static/assets/share-banner.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={SITE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default MetaHead
