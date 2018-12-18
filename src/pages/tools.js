import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
// import querystring from 'query-string'
// import { Banner, HeadLine, HeadLineTail, Main, BannerInfo } from './styled'
// import List from './List'
// import Navigation from './Navigation'
// import Header from 'components/Header'
// import Footer from 'components/Footer'

// const StyledTools = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
// `

class Tools extends Component {
  render() {
    const { edges } = this.props.data.allItemsJson
    console.log(edges)

    const image = {__html: 'First &middot; Second'};

    return (
      <div>
        <h3>Tools HEre</h3>
        <ul>
          {edges.map(tool => (
            <li key={tool.node.id}>
              <div dangerouslySetInnerHTML={{__html: tool.node.icon}} />
              <div>{tool.node.name}</div>
              <div>{tool.node.description}</div>
              <div>{tool.node.category}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

Tools.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
}

export const query = graphql`
  query ToolsQuery {
    allItemsJson {
      edges {
        node {
          id
          name
          description
          category
          icon
        }
      }
    }
  }
`

export default Tools
