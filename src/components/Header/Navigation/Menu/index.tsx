import React, { FC } from 'react'
import { NavigationType } from '../types'
import { Wrapper, Main, Secondary } from './styled'
import Item from './Item'

interface Props {
  navigationData: NavigationType
  isMenuOpen?: boolean
}

const Menu: FC<Props> = ({ navigationData, isMenuOpen }) => (
  <Wrapper>
    <Main isMenuOpen={isMenuOpen}>
      {navigationData.main.map(item => (
        <Item
          key={item.id}
          title={item.title}
          link={item.link}
          external={item.external}
          main
          animate
        />
      ))}
    </Main>
    <Secondary isMenuOpen={isMenuOpen}>
      {navigationData.secondary.map(item => (
        <Item
          key={item.id}
          title={item.title}
          link={item.link}
          external={item.external}
        />
      ))}
    </Secondary>
  </Wrapper>
)

export default Menu
