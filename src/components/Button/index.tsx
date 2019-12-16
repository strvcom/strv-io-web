import React, { SyntheticEvent } from 'react'
import { StyledButton } from './styled'

type Props = {
  children: React.ReactNode
  onClick?: () => void
  isPrimary?: boolean
}

const handleClick = (onClick: any) => (buttonEvent: SyntheticEvent) => {
  if (onClick) {
    buttonEvent.preventDefault()
    onClick()
  }
}

const Button: React.SFC<Props> = ({ onClick, children, isPrimary = false }) => (
  <StyledButton
    type="button"
    isPrimary={isPrimary}
    onClick={handleClick(onClick)}
  >
    {children}
  </StyledButton>
)

export default Button
