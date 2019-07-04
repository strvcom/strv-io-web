import React from 'react'
import { Category } from 'common/enums'
import Button from 'components/Button'
import { Wrapper, Ul, Li } from './styled'

type Props = {
  activeCategory: Category
  handleFilterChange: (href: string) => void
}

export const Filter: React.SFC<Props> = ({
  activeCategory,
  handleFilterChange,
}) => (
  <Wrapper>
    <Ul>
      {Object.keys(Category).map(categoryKey => {
        const category = Category[categoryKey]

        return (
          <Li key={category}>
            <Button
              href={category}
              replace={true}
              onClick={handleFilterChange}
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
