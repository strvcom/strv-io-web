import React from 'react'
import { Repo } from 'common/types'
import {
  Ul,
  Li,
  Link,
  Name,
  Description,
  Category,
  IconWrapper,
} from './styled'

interface Props {
  repo: Repo
}

const Item: React.SFC<Props> = ({ repo }) => (
  <Link
    href={repo.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={repo.name}
  >
    <IconWrapper dangerouslySetInnerHTML={{ __html: repo.icon }} />
    <Name>{repo.name}</Name>
    <Description>{repo.description}</Description>
    <Category>{repo.category}</Category>
  </Link>
)

export const List: React.SFC = ({ data }) => (
  <Ul>
    {data.map(repo => (
      <Li key={repo.node.name}>
        <Item repo={repo.node} />
      </Li>
    ))}
  </Ul>
)
