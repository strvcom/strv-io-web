import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Wrapper, NavLink, Ul, Li } from './styled'
import categories from 'data/categories'

const Navigation = ({ activeCategory }) => (
  <Wrapper className="reveal--delay1">
    <Ul>
      {categories.map(val => (
        <Li key={val}>
          <Link href={`?view=${val}`} replace scroll={false}>
            <NavLink primary={activeCategory === val}>{val}</NavLink>
          </Link>
        </Li>
      ))}
    </Ul>
  </Wrapper>
)

Navigation.propTypes = {
  activeCategory: PropTypes.oneOf(categories).isRequired,
}

export default Navigation
