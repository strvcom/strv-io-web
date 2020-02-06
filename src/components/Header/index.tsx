import React, { useState, useCallback } from 'react'
import { Location as ReachLocation } from '@reach/router'
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
    <ReachLocation>
      {/* eslint-disable-next-line no-shadow */}
      {({ location }) => (
        <>
          <TopHeader>
            <Logo isMenuOpen={isMenuOpen} />
            <Hamburger isMenuOpen={isMenuOpen} onClick={toggleMenu} />
          </TopHeader>
          <Navigation
            currentLocation={location}
            navigationData={navigation}
            isMenuOpen={isMenuOpen}
          />
        </>
      )}
    </ReachLocation>
  )
}

export default Header
