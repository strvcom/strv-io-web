import React from 'react'
import { Ul, Link, Title } from './styled'
import { NETWORKS } from './constants'

const Social = () => (
  <Ul>
    {NETWORKS.map(val => (
      <li key={val.title}>
        <Link target="_blank" rel="noopener noreferrer" href={val.url}>
          {val.icon}
          <Title>{val.title}</Title>
        </Link>
      </li>
    ))}
  </Ul>
)

export default Social
