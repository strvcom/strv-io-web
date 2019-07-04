import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import { RepoNode } from 'common/types'
import Header from 'components/Header'
import {
  Banner,
  HeadLine,
  HeadLineTail,
  Main,
  BannerInfo,
} from 'components/Home/styled'
import { FilteredList } from 'components/FilteredList'
import Footer from 'components/Footer'

const Home: React.SFC<Props> = ({ data }) => {
  return (
    <Layout>
      <Header />
      <Banner>
        <BannerInfo>
          <HeadLine>Open source libraries</HeadLine>
          <HeadLineTail>Curated by STRV developers</HeadLineTail>
        </BannerInfo>
      </Banner>
      <FilteredList data={data} />
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
