import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Wrapper, NavLink, Ul, Li } from './styled'
import categories from 'data/categories'

const Navigation = ({ activeItem }) => (
  <Wrapper className="reveal--delay1">
    <Ul>
      {categories.map(val => (
        <Li key={val}>
          <Link href={`?view=${val}`} replace scroll={false}>
            <NavLink primary={activeItem === val}>{val}</NavLink>
          </Link>
        </Li>
      ))}
    </Ul>
  </Wrapper>
)

Navigation.propTypes = {
  activeItem: PropTypes.oneOf(categories).isRequired,
}

export default Navigation
