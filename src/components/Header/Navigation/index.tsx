import React, { FC } from 'react'
import { WindowLocation } from '@reach/router'
import { Wrapper } from './styled'
import Menu from './Menu'
import BottomMenu from './BottomMenu'
import { NavigationType } from './types'

interface Props {
  navigationData: NavigationType
  currentLocation?: WindowLocation
  isMenuOpen?: boolean
}

const Navigation: FC<Props> = ({
  navigationData,
  isMenuOpen,
  currentLocation,
}) => (
  <Wrapper isMenuOpen={isMenuOpen}>
    <Menu
      currentLocation={currentLocation}
      navigationData={navigationData}
      isMenuOpen={isMenuOpen}
    />
    <BottomMenu isMenuOpen={isMenuOpen} />
  </Wrapper>
)

export default Navigation
