import styled from 'styled-components'
import theme from 'styles/theme'

const Button = styled.button`
  font-family: ${theme.fonts.primary};
  font-size: 1.2rem;
  color: ${theme.colors.white};
  background-color: ${props =>
    props.primary ? theme.colors.primary : theme.colors.black};
  letter-spacing: 1.6px;
  text-align: center;
  border-radius: 24px;
  text-transform: uppercase;
  transition: all 0.4s ease;
  font-weight: 600;
  outline: none;
  display: inline-block;
  padding: 13px 30px;
  line-height: 20px;
  border: ${props =>
    props.primary
      ? `solid 1px ${theme.colors.primary}`
      : 'solid 1px rgba(255,255,255, 0.2)'};

  &:hover {
    background-color: ${theme.colors.primary};
    border: solid 1px ${theme.colors.primary};
  }
  cursor: pointer;
`

export default Button
