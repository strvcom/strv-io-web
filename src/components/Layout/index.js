import React from 'react'
import PropTypes from 'prop-types'
import { Router } from "@reach/router"

import Header from '../Header'
import Footer from '../Footer'

import { Wrap } from './styled'
import MetaHead from '../MetaHead'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Wrap>
        <MetaHead />
        <Header />

        {children}
        {/* <Footer /> */}
      </Wrap>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
