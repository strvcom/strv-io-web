import React, { FC } from 'react'
import { Banner, HeadLine, HeadLineTail, BannerInfo } from './styled'
import Layout from 'components/Layout'
import { RepoNode } from 'common/types'
import Header from 'components/Header'
import { FilteredList } from 'components/FilteredList'
import Footer from 'components/Footer'

interface Props {
  pageRoot: string
  title: string
  description: string
  data: RepoNode[]
  category: string
}

const Page: FC<Props> = ({ pageRoot, title, description, data, category }) => {
  return (
    <Layout>
      <Header />
      <Banner>
        <BannerInfo>
          <HeadLine>{title}</HeadLine>
          <HeadLineTail>{description}</HeadLineTail>
        </BannerInfo>
      </Banner>
      <FilteredList pageRoot={pageRoot} data={data} category={category} />
      <Footer />
    </Layout>
  )
}

export default Page
