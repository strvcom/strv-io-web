import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
// import querystring from 'query-string'
// import { Banner, HeadLine, HeadLineTail, Main, BannerInfo } from './styled'
// import List from './List'
// import Navigation from './Navigation'
// import Header from 'components/Header'
// import Footer from 'components/Footer'

const StyledTools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

class Tools extends Component {
  render() {
    const { data } = this.props
    console.log(data)
    return (
      <StyledTools>Tools Hrere</StyledTools>
    )
  }
}

Tools.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
}

// export const query = graphql`
//   query IndexQuery {
//   }
// `

export default Tools
