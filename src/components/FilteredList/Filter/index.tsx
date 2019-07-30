import React from 'react'
import { Category } from 'common/enums'
import Button from 'components/Button'
import { Wrapper, Ul, Li } from './styled'

interface Props {
  activeCategory: string | string[]
  handleFilter: (categoryName: Category) => void
}

export const Filter: React.SFC<Props> = ({ activeCategory, handleFilter }) => (
  <Wrapper>
    <Ul>
      {Object.keys(Category).map(categoryKey => {
        const category = Category[categoryKey]

        return (
          <Li key={category}>
            <Button
              onClick={() => handleFilter(category)}
              isPrimary={activeCategory === category}
              aria-label={category}
            >
              {category}
            </Button>
          </Li>
        )
      })}
    </Ul>
  </Wrapper>
)
