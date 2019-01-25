import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import queryString from 'query-string'
import { CATEGORIES } from 'common/constants'
import Header from 'components/Header'
import {
  Banner,
  HeadLine,
  HeadLineTail,
  Main,
  BannerInfo,
} from 'components/Home/styled'
import Navigation from 'components/Home/Navigation'
import List from 'components/Home/List'
import Footer from 'components/Footer'

const Home = ({ data }) => {
  const items = data.allItemsJson.edges

  const { search } = location
  const query = queryString.parse(search)

  // Show all as default
  const category = query.filter || CATEGORIES.ALL

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

Home.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
}

export const indexQuery = graphql`
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
