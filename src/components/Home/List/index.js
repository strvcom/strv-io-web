import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import { CATEGORIES } from 'common/constants'
import Item from './Item'
import { Ul, Li } from './styled'

const List = ({ activeCategory, items }) => {
  const data
    = activeCategory === CATEGORIES.ALL
      ? items
      : items.filter(repo => repo.node.category === activeCategory)

  return (
    <Ul>
      {data.map(repo => (
        <Li className="reveal--delay2" key={`repo-item-${repo.node.name}-${activeCategory}`}>
          <Fade duration={2000}>
            <Item repo={repo.node} />
          </Fade>
        </Li>
      ))}
    </Ul>
  )
}

// @TODO Avoid using Object.values by switching to Typescript
List.propTypes = {
  activeCategory: PropTypes.oneOf(Object.values(CATEGORIES)).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default List
