import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
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
  location: any
}

enum CategoryPriority {
  backend = 1,
  android = 2,
  ios = 3,
  iot = 4,
}

const sortItems = (repos: RepoNode[]): RepoNode[] =>
  repos
    .sort((repo1, repo2) =>
      repo1.node.isFeatured === repo2.node.isFeatured
        ? 0
        : repo1.node.isFeatured
        ? -1
        : 1
    )
    .sort(
      (repo1, repo2) =>
        CategoryPriority[repo1.node.category] -
        CategoryPriority[repo2.node.category]
    )

const Home: React.SFC<Props> = ({ data, location }) => {
  const items = sortItems(data.allItemsJson.edges)

  const query = queryString.parse((location || {}).search)

  // Show all as default
  const categories = Object.keys(Category).map(
    categoryKey => Category[categoryKey]
  )
  const category =
    query.filter && categories.indexOf(query.filter) >= 0
      ? query.filter
      : Category.All

  return (
    <Layout>
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
    </Layout>
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
          isFeatured
        }
      }
    }
  }
`

export default Home
