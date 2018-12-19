import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import querystring from 'query-string'
import { Banner, HeadLine, HeadLineTail, Main, BannerInfo } from 'components/Home/styled'
import List from 'components/Home/List'
import Navigation from 'components/Home/Navigation'
import Header from 'components/Header'
import Footer from 'components/Footer'

class Home extends Component {
  render() {
    const items = this.props.data.allItemsJson.edges

    const { search } = this.props.location
    const query = querystring.parse(search)
    
    // Show All as default
    const category = query.filter || 'all'

    return (
      <Fragment>
        <Header />
        <Banner>
          <BannerInfo>
            <HeadLine className="reveal">Open source libraries</HeadLine>
            <HeadLineTail className="reveal--delay1">
              Curated by STRV developers
            </HeadLineTail>
          </BannerInfo>
        </Banner>
        <Navigation activeCategory={category} />
        <Main>
          <List items={items} activeCategory={category} />
        </Main>
        <Footer />
      </Fragment>
    )
  }
}

Home.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
}


export const query = graphql`
  query IndexQuery {
    allItemsJson {
      edges {
        node {
          id
          name
          url
          description
          category
          icon
        }
      }
    }
  }
`

export default Home