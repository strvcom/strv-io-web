import React from 'react'
import { Link } from 'gatsby'

import { Category } from 'common/enums'
import { Wrapper, Ul, Li } from './styled'
import { StyledButton } from 'components/Button/styled'

interface Props {
  activeCategory: string | string[]
}

export const Filter: React.SFC<Props> = ({ activeCategory }) => (
  <Wrapper>
    <Ul>
      {Object.keys(Category).map(categoryKey => {
        const category = Category[categoryKey]

        return (
          <Li key={category}>
            <StyledButton
              as={Link}
              to={`/repositories/${category}`}
              isPrimary={activeCategory === category}
              aria-label={category}
              replace
            >
              {category}
            </StyledButton>
          </Li>
        )
      })}
    </Ul>
  </Wrapper>
)
