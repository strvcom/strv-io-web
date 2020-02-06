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

const Tool: FC<Props> = ({ data, pageContext }) => (
  <Page
    pageRoot="tools"
    title="Open source libraries"
    description="Brought to you by STRV Engineering"
    data={data.allTools.edges}
    category={pageContext.category || 'all'}
  />
)

export const indexQuery = graphql`
  {
    allTools(sort: { fields: [isFeatured], order: [DESC] }) {
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

export default Tool
