import React, { FC } from 'react'
import LinkWithTracking from 'components/LinkWithTracking'
import Fade from 'react-reveal/Fade'
import { ResourceType } from '../types'
import { Wrapper, Title, Description, Img } from './styled'

interface Props {
  resource: ResourceType
}

const Resource: FC<Props> = ({ resource }) => (
  <Wrapper
    as={LinkWithTracking}
    to={resource.link}
    label={resource.title}
  >
    <Fade duration={2000}>
      <Img src={resource.image} alt={resource.alt} />
      <Title>{resource.title}</Title>
      <Description>{resource.description}</Description>
    </Fade>
  </Wrapper>
)

export default Resource
