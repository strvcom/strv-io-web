import React, { useState, useCallback } from 'react'
import { TopHeader } from './styled'
import Logo from './Logo'
import Hamburger from './Hamburger'
import Navigation from './Navigation'
import { navigation } from 'constants/navigation'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev)
  }, [])

  return (
    <>
      <TopHeader>
        <Logo isMenuOpen={isMenuOpen} />
        <Hamburger isMenuOpen={isMenuOpen} onClick={toggleMenu} />
      </TopHeader>
      <Navigation navigationData={navigation} isMenuOpen={isMenuOpen} />
    </>
  )
}

export default Header
