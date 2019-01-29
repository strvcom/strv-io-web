import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import queryString from 'query-string'
import { Category } from 'common/enums'
import { RepoNode } from 'common/types'
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

interface Props {
  data: {
    allItemsJson: {
      edges: RepoNode[]
    }
  }
}

const Home: React.SFC<Props> = ({ data }) => {
  const items = data.allItemsJson.edges

  const { search } = location
  const query = queryString.parse(search)

  // Show all as default
  const categories = Object.keys(Category).map(
    categoryKey => Category[categoryKey]
  )
  const category =
    query.filter && categories.indexOf(query.filter) >= 0
      ? query.filter
      : Category.All

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
