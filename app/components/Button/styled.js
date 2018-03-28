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
      ? `solid 1px ${variables.colors.primary}`
      : 'solid 1px rgba(255,255,255, 0.2)'};

  &:hover {
    background-color: ${variables.colors.primary};
    border: solid 1px ${variables.colors.primary};
  }
  cursor: pointer;
`

export default Button
