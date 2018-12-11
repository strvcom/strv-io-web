import React from 'react'
import PropTypes from 'prop-types'
import { Ul, Li } from './styled'
import Item from './Item'
import repositories from 'data/repositories'
import categories from 'data/categories'

const List = ({ activeCategory }) => {
  const data =
    activeCategory === 'all'
      ? repositories
      : repositories.filter(repo => repo.category === activeCategory)

  return (
    <Ul>
      {data.map(repo => (
        <Li
          className="reveal--delay2"
          key={`repo-item-${repo.name}-${activeCategory}`}
        >
          <Item repo={repo} />
        </Li>
      ))}
    </Ul>
  )
}

List.propTypes = {
  activeCategory: PropTypes.oneOf(categories).isRequired,
}

export default List
