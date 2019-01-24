import React from 'react'
import PropTypes from 'prop-types'
import routes from 'common/routes'
import { CATEGORIES } from 'common/constants'
import Button from 'components/Button'
import { Wrapper, Ul, Li } from './styled'

const Navigation = ({ activeCategory }) => (
  <Wrapper className="reveal--delay1">
    <Ul>
      {Object.keys(CATEGORIES).map(categoryKey => {
        const category = CATEGORIES[categoryKey]
        return (
          <Li key={category}>
            <Button
              href={routes.homeWithFilter(category)}
              replace
              isPrimary={activeCategory === category}
            >
              {category}
            </Button>
          </Li>
        )
      })}
    </Ul>
  </Wrapper>
)

// @TODO Avoid using Object.values by switching to Typescript
Navigation.propTypes = {
  activeCategory: PropTypes.oneOf(Object.values(CATEGORIES)).isRequired,
}

export default Navigation
