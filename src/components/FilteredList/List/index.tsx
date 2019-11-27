import React from 'react'
import Fade from 'react-reveal/Fade'
import {
  Ul,
  Li,
  Link,
  Name,
  Description,
  Category,
  IconWrapper,
} from './styled'
import { Repo, RepoNode } from 'common/types'
import { Category as CategoryEnum } from 'common/enums'

interface ItemProps {
  repo: Repo
}

interface ListProps {
  data: RepoNode[]
  filter: string
}

export const Item: React.FunctionComponent<ItemProps> = ({ repo }) => (
  <Link
    href={repo.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={repo.name}
  >
    <IconWrapper dangerouslySetInnerHTML={{ __html: repo.icon }} />
    <Name>{repo.name}</Name>
    <Description>{repo.description}</Description>
    <Category>{repo.category.join(' - ')}</Category>
  </Link>
)

export const List: React.FunctionComponent<ListProps> = ({ data, filter }) => {
  const activeData =
    filter === CategoryEnum.All
      ? data
      : data.filter(repo => repo.node.category.includes(filter))

  return (
    <Ul>
      {activeData.map(repo => (
        <Li className="reveal--delay2" key={repo.node.name}>
          <Fade duration={2000}>
            <Item repo={repo.node} />
          </Fade>
        </Li>
      ))}
    </Ul>
  )
}
