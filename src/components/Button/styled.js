import styled from 'styled-components'
import theme from 'styles/theme'

export const StyledButton = styled.button`
  font-family: ${theme.fonts.primary};
  font-size: 1.2rem;
  color: ${theme.colors.white};
  background-color: ${props =>
    props.isPrimary ? theme.colors.primary : theme.colors.black};
  letter-spacing: 1.6px;
  text-align: center;
  border-radius: 24px;
  text-transform: uppercase;
  transition: all 0.4s ease;
  font-weight: ${theme.fontWeight.semibold};
  outline: none;
  cursor: pointer;
  display: inline-block;
  padding: 0 3rem;
  line-height: 4.8rem;
  height: 4.8rem;
  border: solid 1px
    ${props =>
      props.isPrimary ? theme.colors.primary : 'rgba(255,255,255, 0.2)'};

  &:hover {
    background-color: ${theme.colors.primary};
    border: solid 1px ${theme.colors.primary};
  }
`

export const StyledA = StyledButton.withComponent('a')
