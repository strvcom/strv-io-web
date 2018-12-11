import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Ul, Li } from './styled'
import categories from 'data/categories'
import Button from 'components/Button'
import routes from 'common/routes'

const Navigation = ({ activeCategory }) => (
  <Wrapper className="reveal--delay1">
    <Ul>
      {categories.map(val => (
        <Li key={val}>
          <Button
            href={routes.homeWithFilter(val)}
            replace
            scroll={false}
            isPrimary={activeCategory === val}
          >
            {val}
          </Button>
        </Li>
      ))}
    </Ul>
  </Wrapper>
)

Navigation.propTypes = {
  activeCategory: PropTypes.oneOf(categories).isRequired,
}

export default Navigation
