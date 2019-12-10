import React, { FC } from 'react'
import { WindowLocation } from '@reach/router'
import { NavigationType } from '../types'
import { Wrapper, Main, Secondary } from './styled'
import Item from './Item'

interface Props {
  navigationData: NavigationType
  currentLocation?: WindowLocation
  isMenuOpen?: boolean
}

const Menu: FC<Props> = ({ navigationData, isMenuOpen, currentLocation }) => (
  <Wrapper>
    <Main isMenuOpen={isMenuOpen}>
      {navigationData.main.map(item => (
        <Item
          key={item.id}
          title={item.title}
          link={item.link}
          externalLink={item.external}
          active={location && location.pathname.includes(item.link)}
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
          externalLink={item.external}
        />
      ))}
    </Secondary>
  </Wrapper>
)

export default Menu
