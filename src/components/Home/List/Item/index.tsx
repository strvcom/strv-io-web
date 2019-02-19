import React from 'react'
import { Repo } from 'common/types'
import { Link, Name, Description, Category, IconWrapper } from './styled'

interface Props {
  repo: Repo
}

const Item: React.SFC<Props> = ({ repo }) => (
  <Link href={repo.url} target="_blank" rel="noopener noreferrer">
    <IconWrapper dangerouslySetInnerHTML={{ __html: repo.icon }} />
    <Name>{repo.name}</Name>
    <Description>{repo.description}</Description>
    <Category>{repo.category}</Category>
  </Link>
)

export default Item
