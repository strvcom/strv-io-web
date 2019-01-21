import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const MetaHead = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:image" content="/static/assets/share-banner.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="628" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content="https://strv.io" />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
)

MetaHead.defaultProps = {
  title: "STRV's Open Source Libraries",
  description:
    'Over the years STRV’s developers have built up quite a lot of open source libraries. This is the place where you’ll find all of them. Have fun.',
}

MetaHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default MetaHead
