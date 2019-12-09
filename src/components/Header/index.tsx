import React, { useState, useCallback } from 'react'
import { TopHeader } from './styled'
import Logo from './Logo'
import Hamburger from './Hamburger'
import Navigation from './Navigation'

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
      <Navigation isMenuOpen={isMenuOpen} />
    </>
  )
}

export default Header
