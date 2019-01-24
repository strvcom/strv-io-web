import React from 'react'
import PropTypes from 'prop-types'
import MetaHead from 'components/MetaHead'
import { Wrap } from './styled'

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
