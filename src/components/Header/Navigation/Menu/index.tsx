import React, { FC } from 'react'
import { Wrapper, Main, Secondary } from './styled'
import Item from './Item'

interface Props {
  isMenuOpen?: boolean
}

const Menu: FC<Props> = ({ isMenuOpen }) => (
  <Wrapper>
    <Main isMenuOpen={isMenuOpen}>
      <Item text="test" main animate />
      <Item text="test" main animate />
      <Item text="test" main animate />
    </Main>
    <Secondary isMenuOpen={isMenuOpen}>
      <Item text="test" />
      <Item text="test" />
      <Item text="test" />
    </Secondary>
  </Wrapper>
)

export default Menu
