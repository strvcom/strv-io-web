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
  src: require('images/banner.jpg'),
  webP: require('images/banner.webp'),
}

const Home: React.FunctionComponent<
  Data & { pageContext: { category: string } }
> = ({ data, pageContext }) => {
  const webP = canUseWebP()
  const category = pageContext.category || 'all'

  return (
    <Layout>
      <Header />
      <Banner bgImage={webP ? bgImage.webP : bgImage.src}>
        <BannerInfo>
          <HeadLine>Open source libraries</HeadLine>
          <HeadLineTail>Curated by STRV developers</HeadLineTail>
        </BannerInfo>
      </Banner>
      <FilteredList data={data} category={category} />
      <Footer />
    </Layout>
  )
}

export const indexQuery = graphql`
  query IndexQuery {
    allItemsJson(sort: { fields: [isFeatured], order: [DESC] }) {
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
