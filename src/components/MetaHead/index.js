import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const MetaHead = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:image" content="/static/assets/banner.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="628" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content="https://www.joust.com" />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
)

MetaHead.defaultProps = {
  title: 'Joust - The all-inclusive banking toolkit for entrepreneurs',
  description:
    'Joust, the all-inclusive banking toolkit for entrepreneurs and freelancers. We do banking, payments and invoices so you can do what matters.',
}

MetaHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default MetaHead
