import React, { FC } from 'react'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { ResourceType } from '../types'
import { Wrapper, Title, Description, Img } from './styled'

interface Props {
  resource: ResourceType
}

const Resource: FC<Props> = ({ resource }) => (
  <Wrapper as={Link} to={resource.link}>
    <Fade duration={2000}>
      <Img src={resource.image} alt={resource.alt} />
      <Title>{resource.title}</Title>
      <Description>{resource.description}</Description>
    </Fade>
  </Wrapper>
)

export default Resource
