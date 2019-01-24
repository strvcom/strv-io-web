import React from 'react'
import { Ul, Li, Link, Title } from './styled'
import { NETWORKS } from './constants'

const Social = () => (
  <Ul>
    {NETWORKS.map(val => (
      <Li key={val.title}>
        <Link target="_blank" rel="noopener noreferrer" href={val.url}>
          {val.icon}
          <Title>{val.title}</Title>
        </Link>
      </Li>
    ))}
  </Ul>
)

export default Social
