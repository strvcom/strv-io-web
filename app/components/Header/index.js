import React from 'react'
import Link from 'next/link'
import { Logo, Wrapper } from './styled'

const Header = () => (
  <Wrapper>
    <Link prefetch href="/" passHref>
      <Logo>
        <span />
      </Logo>
    </Link>
  </Wrapper>
)

export default Header
