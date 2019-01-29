import React from 'react'
import { Link } from 'gatsby'
import { StyledButton } from './styled'

interface Props {
  children: React.ReactNode
  href?: string
  isPrimary?: boolean
  type?: string
  [key: string]: any
}

const Button: React.SFC<Props> = ({
  type = 'button',
  href = null,
  children,
  isPrimary = false,
  ...props
}) => {
  if (href) {
    return (
      <Link to={href} {...props}>
        <StyledButton isPrimary={isPrimary}>{children}</StyledButton>
      </Link>
    )
  }

  return (
    <StyledButton type={type} isPrimary={isPrimary}>
      {children}
    </StyledButton>
  )
}

export default Button
