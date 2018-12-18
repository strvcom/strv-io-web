import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import { Ul, Li } from './styled'
import Item from './Item'
import repositories from 'data/repositories'
import categories from 'data/categories'

const List = ({ activeCategory, items }) => {
  const data =
    activeCategory === 'all'
      ? items
      : items.filter(repo => repo.node.category === activeCategory)

  return (
    <Ul>
      {data.map(repo => (
        <Li
          className="reveal--delay2"
          key={`repo-item-${repo.node.name}-${activeCategory}`}
        >
          <Fade duration={2000}><Item repo={repo.node} /></Fade>
        </Li>
      ))}
    </Ul>
  )
}

List.propTypes = {
  activeCategory: PropTypes.oneOf(categories).isRequired,
}

export default List
