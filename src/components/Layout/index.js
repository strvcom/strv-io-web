import React from 'react'
import PropTypes from 'prop-types'
import MetaHead from 'components/MetaHead'
import { Wrap } from './styled'

const Layout = ({ children }) => (
  <Wrap>
    <MetaHead />
    {children}
  </Wrap>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
