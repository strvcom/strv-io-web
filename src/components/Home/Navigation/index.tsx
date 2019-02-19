import React from 'react'
import queryString from 'query-string'
import ROUTES from 'common/routes'
import { Category } from 'common/enums'
import Button from 'components/Button'
import { Wrapper, Ul, Li } from './styled'

interface Props {
  activeCategory: Category
}

const Navigation: React.SFC<Props> = ({ activeCategory }) => (
  <Wrapper className="reveal--delay1">
    <Ul>
      {Object.keys(Category).map(categoryKey => {
        const category = Category[categoryKey]
        const newQueryString = queryString.stringify({
          filter: category,
        })
        return (
          <Li key={category}>
            <Button
              href={`${ROUTES.HOME}?${newQueryString}`}
              replace={true}
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

export default Navigation
