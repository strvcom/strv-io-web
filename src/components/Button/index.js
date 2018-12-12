import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import { StyledButton } from './styled'

const Button = ({ type, href, children, isPrimary, ...props }) => {
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

Button.defaultProps = {
  type: 'button',
  href: null,
  isPrimary: false,
}

Button.propTypes = {
  href: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  isPrimary: PropTypes.bool,
}

export default Button
