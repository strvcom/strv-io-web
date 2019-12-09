import React from 'react'
import { TopHeader } from './styled'
import Logo from './Logo'
import Hamburger from './Hamburger'
import Navigation from './Navigation'

const Header = () => (
  <>
    <TopHeader>
      <Logo isMenuOpen />
      <Hamburger isMenuOpen />
    </TopHeader>
    <Navigation isMenuOpen />
  </>
)

export default Header
