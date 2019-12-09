import styled, { css, keyframes } from 'styled-components'
import { mq } from 'styles/media'

const showSocials = keyframes`
  0% {
    transform: translate3d(0, -40px, 0);
    opacity: 0;
  }

  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`

interface Props {
  isMenuOpen?: boolean
}

export const Wrapper = styled.div<Props>`
  margin-left: 0.8rem;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s opacity ease-in;

  ${mq.tablet} {
    margin-left: 60%;
    margin-bottom: 9rem;
  }

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      animation: ${showSocials} 0.9s ease 0.4s forwards;
      visibility: visible;
    `}
`

export const SocialStyles = css`
  margin: 0 0 2rem;
  padding: 0;
  flex-wrap: wrap;
  justify-content: initial;

  ${mq.tablet} {
    margin: 0;
    height: 12rem;
    flex-wrap: nowrap;
  }

  li {
    margin: 2.2rem 0;
    padding: 0 2.6rem;

    ${mq.tablet} {
      margin: 0 1.2rem;
      padding: 0;

      :first-child {
        margin-left: 0;
      }
    }
  }
`
