import React, { FC } from 'react'
import { Wrapper, SocialStyles } from './styled'
import Social from 'components/Social'

interface Props {
  isMenuOpen?: boolean
}

const BottomMenu: FC<Props> = ({ isMenuOpen }) => (
  <Wrapper isMenuOpen={isMenuOpen}>
    <Social styles={SocialStyles} />
  </Wrapper>
)

export default BottomMenu
