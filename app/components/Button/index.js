import styled from 'styled-components'
import variables from 'common/styleVariables'

const Button = styled.button`
  font-family: ${variables.fonts.primary};
  font-size: 12px;
  color: ${variables.colors.white};
  background-color: ${props =>
    props.primary ? variables.colors.primary : variables.colors.black};
  letter-spacing: 1.6px;
  text-align: center;
  line-height: 20px;
  border-radius: 24px;
  text-transform: uppercase;
  padding: 10px 20px;
  transition: all 0.4s ease;
  font-weight: 600;
  outline: none;
  display: inline-block;
  border: ${props =>
    props.primary
      ? `solid 2px ${variables.colors.primary}`
      : `solid 2px ${variables.colors.greyBorder}`};

  &:hover {
    background-color: ${variables.colors.primary};
    border: solid 2px ${variables.colors.primary};
  }
  cursor: pointer;
`

export default Button
