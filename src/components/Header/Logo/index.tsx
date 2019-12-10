import React, { FC } from 'react'
import { Wrapper } from './styled'

interface Props {
  isMenuOpen?: boolean
}

const Logo: FC<Props> = ({ isMenuOpen }) => (
  <Wrapper hide={isMenuOpen} href="/" aria-label="strv">
    <span />
  </Wrapper>
)

export default Logo
