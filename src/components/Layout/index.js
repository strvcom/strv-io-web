import React from 'react'
import PropTypes from 'prop-types'

import { Wrap } from './styled'
import MetaHead from '../MetaHead'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Wrap>
        <MetaHead />
        {children}
      </Wrap>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
