import React, { FC } from 'react'
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
        <Resource key={resource.id} resource={resource} />
      ))}
    </Wrapper>
  )
}

export default ResourceList
