import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import MetaHead from 'components/MetaHead'

const Layout = ({ children }) => (
  <Fragment>
    <MetaHead />
    {children}
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
