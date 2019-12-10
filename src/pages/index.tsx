import React, { FC } from 'react'
import {
  Banner,
  HomeHeadline,
  BannerInfo,
  HomeHeadLineTail,
} from 'components/Page/styled'
import Layout from 'components/Layout'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ResourceList from 'components/ResourceList'
import { resources } from 'constants/resources'

const Home: FC = () => (
  <Layout>
    <Header />
    <Banner>
      <BannerInfo>
        <HomeHeadline>Dev resources</HomeHeadline>
        <HomeHeadLineTail>Brought to you by STRV Developers</HomeHeadLineTail>
      </BannerInfo>
    </Banner>
    <ResourceList resources={resources} />
    <Footer />
  </Layout>
)

export default Home
