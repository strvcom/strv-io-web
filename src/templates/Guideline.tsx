import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Page from 'components/Page'
import { Data } from 'common/types'

interface Props {
  data: Data
  pageContext: {
    category: string
  }
}

const Guideline: FC<Props> = ({ data, pageContext }) => (
  <Page
    pageRoot="guidelines"
    title="Guidelines"
    description="Brought to you by STRV Engineers"
    data={data.allGuidelines.edges}
    category={pageContext.category || 'all'}
  />
)

export const indexQuery = graphql`
  {
    allGuidelines(sort: { fields: [isFeatured], order: [DESC] }) {
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

export default Guideline
