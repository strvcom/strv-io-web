import React, { FC } from 'react'
import { Ul, Link, Title } from './styled'
import { NETWORKS } from './constants'

interface Props {
  styles?: React.ComponentProps<typeof Ul>['styles']
}

const Social: FC<Props> = ({ styles }) => (
  <Ul styles={styles}>
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
