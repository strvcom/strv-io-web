import React, { FC } from 'react'
import { Wrapper } from './styled'
import Menu from './Menu'
import BottomMenu from './BottomMenu'

interface Props {
  isMenuOpen?: boolean
}

const Navigation: FC<Props> = ({ isMenuOpen }) => (
  <Wrapper isMenuOpen={isMenuOpen}>
    <Menu isMenuOpen={isMenuOpen} />
    <BottomMenu isMenuOpen={isMenuOpen} />
  </Wrapper>
)

export default Navigation
