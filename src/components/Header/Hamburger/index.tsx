import React, { FC } from 'react'
import { Button } from './styled'

interface Props {
  onClick?: React.ComponentProps<typeof Button>['onClick']
  isMenuOpen?: boolean
}

const Hamburger: FC<Props> = ({ onClick, isMenuOpen }) => (
  <Button onClick={onClick} opened={isMenuOpen}>
    <span />
    <span />
    <span />
    <span />
  </Button>
)

export default Hamburger
