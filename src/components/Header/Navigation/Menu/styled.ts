import styled, { keyframes, css } from 'styled-components'
import { mq } from 'styles/media'

const showNavigation = keyframes`
  0% {
    transform: translate3d(0, -40px, 0);
    opacity: 0;
  }

  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`

export const Wrapper = styled.nav`
  margin-left: 30px;
  padding-top: 3rem;

  ${mq.tablet} {
    margin-left: 60%;
    padding-top: 11rem;
  }
`

const menuStyling = css`
  list-style: none;
  padding: 0;
  margin: 0 0 2.6rem;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s opacity ease-in;
`

interface Props {
  isMenuOpen?: boolean
}

export const Main = styled.ul<Props>`
  ${menuStyling};
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      animation: ${showNavigation} 0.9s ease forwards;
      visibility: visible;
    `}
`

export const Secondary = styled.ul<Props>`
  ${menuStyling};
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      animation: ${showNavigation} 0.9s 0.2s ease forwards;
      visibility: visible;
    `}
`
