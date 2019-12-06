import React, { FC } from 'react'
import { Link } from 'gatsby'
import { ResourceType } from '../types'
import { Wrapper, Title, Description, Img } from './styled'

interface Props {
  resource: ResourceType
}

const Resource: FC<Props> = ({ resource }) => (
  <Wrapper as={Link} to={resource.link}>
    <Img src={resource.image} alt={resource.alt} />
    <Title>{resource.title}</Title>
    <Description>{resource.description}</Description>
  </Wrapper>
)

export default Resource
