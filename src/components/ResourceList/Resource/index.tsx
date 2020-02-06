import React, { useMemo, FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { ResourceType } from '../types'
import { Wrapper, Title, Description, Img } from './styled'
import LinkWithTracking from 'components/LinkWithTracking'

interface Props {
  resource: ResourceType
}

const Resource: FC<Props> = ({ resource }) => {
  const src = resource.image

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () => data.allFile.edges.find(({ node }) => src === node.relativePath),
    [data.allFile.edges, src]
  )

  return (
    <Fade duration={2000}>
      <Wrapper as={LinkWithTracking} to={resource.link} label={resource.title}>
        <Img fluid={match.node.childImageSharp.fluid} alt={resource.alt} />
        <Title>{resource.title}</Title>
        <Description>{resource.description}</Description>
      </Wrapper>
    </Fade>
  )
}

export default Resource
