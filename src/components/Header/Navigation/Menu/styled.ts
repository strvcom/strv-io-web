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

interface Props {
  isMenuOpen?: boolean
}

export const Main = styled.ul<Props>`
  list-style: none;
  padding: 0;
  margin: 0 0 2.6rem;
  visibility: hidden;
  transition: 0.2s opacity ease-in;
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      animation: ${showNavigation} 0.9s ease forwards;
      visibility: visible;
    `}
`

export const Secondary = styled(Main)`
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      animation: ${showNavigation} 0.9s 0.2s ease forwards;
    `}
`
