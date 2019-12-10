import React, { FC } from 'react'
import { Wrapper } from './styled'
import Menu from './Menu'
import BottomMenu from './BottomMenu'
import { NavigationType } from './types'

interface Props {
  navigationData: NavigationType
  isMenuOpen?: boolean
}

const Navigation: FC<Props> = ({ navigationData, isMenuOpen }) => (
  <Wrapper isMenuOpen={isMenuOpen}>
    <Menu navigationData={navigationData} isMenuOpen={isMenuOpen} />
    <BottomMenu isMenuOpen={isMenuOpen} />
  </Wrapper>
)

export default Navigation
