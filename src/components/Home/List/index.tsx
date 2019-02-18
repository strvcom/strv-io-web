import React from 'react'
import Fade from 'react-reveal/Fade'
import { Category } from 'common/enums'
import { RepoNode } from 'common/types'
import Item from './Item'
import { Ul, Li } from './styled'

interface Props {
  activeCategory: Category
  items: RepoNode[]
}

const List: React.SFC<Props> = ({ activeCategory, items }) => {
  const data =
    activeCategory === Category.All
      ? items
      : items.filter(repo => repo.node.category === activeCategory)

  return (
    <Ul>
      {data
        .sort((repo1, repo2) => repo1.node.order - repo2.node.order)
        .map(repo => (
          <Li
            className="reveal--delay2"
            key={`repo-item-${repo.node.name}-${activeCategory}`}
          >
            <Fade duration={2000}>
              <Item repo={repo.node} />
            </Fade>
          </Li>
        ))}
    </Ul>
  )
}

export default List
