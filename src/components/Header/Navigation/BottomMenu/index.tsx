import React from 'react'
import { Wrapper, SocialStyles } from './styled'
import Social from 'components/Social'

const BottomMenu = () => (
  <Wrapper isMenuOpen>
    <Social styles={SocialStyles} />
  </Wrapper>
)

export default BottomMenu
