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
import { ResourceType } from 'components/ResourceList/types'

const resources: ResourceType[] = [
  {
    id: '1',
    image: 'assets/home/open-knowledge.png',
    alt: 'Open Knowledge',
    title: 'Open Knowledge',
    description:
      'Online course for learning React including lectures and example code.',
    link: '#',
  },
  {
    id: '2',
    image: 'assets/home/open-source.png',
    alt: 'Open Source Libraries',
    title: 'Open Source Libraries',
    description:
      'Online course for learning React including lectures and example code.',
    link: 'repositories',
  },
  {
    id: '3',
    image: 'assets/home/guidelines.png',
    alt: 'Guidelines',
    title: 'Guidelines',
    description:
      'Online course for learning React including lectures and example code.',
    link: '#',
  },
]

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
