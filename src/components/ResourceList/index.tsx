import React, { FC } from 'react'
import Fade from 'react-reveal/Fade'
import { Wrapper } from './styled'
import Resource from './Resource'
import { ResourceType } from './types'

interface Props {
  resources: ResourceType[]
}
const ResourceList: FC<Props> = ({ resources }) => {
  return (
    <Wrapper>
      {resources.map(resource => (
        <Fade key={resource.id} duration={2000}>
          <Resource resource={resource} />
        </Fade>
      ))}
    </Wrapper>
  )
}

export default ResourceList
