import React from 'react'
import { graphql } from 'gatsby'
import { canUseWebP } from 'react-img-webp'
import Layout from 'components/Layout'
import { Data } from 'common/types'
import Header from 'components/Header'
import {
  Banner,
  HeadLine,
  HeadLineTail,
  BannerInfo,
} from 'components/Home/styled'
import { FilteredList } from 'components/FilteredList'
import Footer from 'components/Footer'

const bgImage = {
  src: require('images/banner.png'),
  webP: require('images/banner.webp'),
}

const Home: React.FunctionComponent<Data> = ({ data }) => {
  const webP = canUseWebP()

  return (
    <Layout>
      <Header />
      <Banner bgImage={webP ? bgImage.webP : bgImage.src}>
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
