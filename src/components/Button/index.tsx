import React, { SyntheticEvent } from 'react'
import { StyledButton } from './styled'

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: (href: string) => void
  isPrimary?: boolean
  type?: string
  [key: string]: any
}

const handleClick = (href: string, onClick: void) => (
  event: SyntheticEvent
) => {
  if (onClick) {
    event.preventDefault()
    onClick(href)
  }
}

const Button: React.SFC<Props> = ({
  type = 'button',
  href = '/',
  onClick,
  children,
  isPrimary = false,
  ...props
}) => {
  if (href) {
    return (
      <a href={href} onClick={handleClick(href, onClick)} {...props}>
        <StyledButton isPrimary={isPrimary}>{children}</StyledButton>
      </a>
    )
  }

  return (
    <StyledButton type={type} isPrimary={isPrimary}>
      {children}
    </StyledButton>
  )
}

export default Button
