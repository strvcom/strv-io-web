import React from 'react'
import { Wrapper, Ul, Li } from './styled'
import { Category } from 'common/enums'
import { StyledButton } from 'components/Button/styled'

interface Props {
  pageRoot: string
  activeCategory: string | string[]
}

export const Filter: React.SFC<Props> = ({ pageRoot, activeCategory }) => (
  <Wrapper>
    <Ul>
      {Object.keys(Category).map(categoryKey => {
        const category = Category[categoryKey]

        return (
          <Li key={category}>
            <StyledButton
              to={`/${pageRoot}/${category}`}
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
