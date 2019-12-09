import styled, { css } from 'styled-components'
import theme from 'styles/theme'

interface WrapperProps {
  isMenuOpen?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: ${theme.colors.black};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s opacity ease, 0.2s visibility ease;
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `};
`
