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

const Knowledge: FC<Props> = ({ data, pageContext }) => (
  <Page
    pageRoot="knowledge"
    title="Open Knowledge"
    description="Brought to you by STRV Engineers"
    data={data.allKnowledge.edges}
    category={pageContext.category || 'all'}
  />
)

export const indexQuery = graphql`
  {
    allKnowledge(sort: { fields: [isFeatured], order: [DESC] }) {
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

export default Knowledge
