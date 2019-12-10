import styled, { css, keyframes } from 'styled-components'
import theme from 'styles/theme'
import { mq } from 'styles/media'

const animateInLayer = keyframes`
  from {
      transform: translate3d(-100%, 0, 0);
  }
  to {
      transform: translate3d(0, 0, 0);
  }
`

const animateOutLayer = keyframes`
  from {
      transform: translate3d(0, 0, 0);
  }
  to {
      transform: translate3d(100%, 0, 0);
  }
`

const animateInText = keyframes`
  from {
      transform: translate3d(100%, 0, 0);
  }
  to {
      transform: translate3d(0, 0, 0);
  }
`

const animateOutText = keyframes`
  from {
      transform: translate3d(0, 0, 0);
  }
  to {
      transform: translate3d(-100%, 0, 0);
  }
`

export const Wrapper = styled.li`
  padding: 0;
  margin: 0;
`

interface LinkProps {
  active?: boolean
  animate?: boolean
  main?: boolean
  isPrimary?: boolean
  to?: string
  replace?: boolean
}

export const Link = styled.a<LinkProps>`
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeight.light};
  font-size: 1.8rem;
  line-height: 1.77;
  text-decoration: none;
  color: ${theme.colors.grey};
  transition: 0.2s color;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  ${mq.desktop} {
    font-size: 2rem;
  }

  :hover {
    color: ${theme.colors.white};
  }

  ${({ active }) =>
    active &&
    css`
      color: ${theme.colors.primary};
    `};
  ${({ animate }) =>
    animate &&
    css`
     .layer {
      display: block;
      position: absolute;
      left: 0;
      overflow: hidden;
      background-color: ${theme.colors.black};
      width: 100%;
      transform: translate3d(-100%, 0, 0);
      animation: ${animateOutLayer} 0.3s ease-out;
      backface-visibility: hidden;

       :before {
        background-color: ${theme.colors.black};
        content: attr(data-text);
        width: 100%;
        display: block;
        transform: translate3d(100%,0, 0);
        color: ${theme.colors.primary};
        animation ${animateOutText} 0.3s ease-out;
        backface-visibility: hidden;
       }
     }
     &:hover {
      .layer {
        animation: ${animateInLayer} .3s ease forwards;
      }
      .layer::before {
        animation: ${animateInText} .3s ease forwards;
      }
     }
    `};
  ${({ main }) =>
    main &&
    css`
      font-family: ${theme.fonts.headline};
      font-weight: ${theme.fontWeight.bold};
      font-size: 3.2rem;
      text-transform: uppercase;
      line-height: 1.22;
      color: ${theme.colors.white};

      ${mq.tablet} {
        font-size: 4.8rem;
      }
    `};
`
