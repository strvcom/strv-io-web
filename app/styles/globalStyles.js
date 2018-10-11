/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components'
import theme from 'styles/theme'
import fontFaces from 'styles/fontFaces'

injectGlobal`
  ${fontFaces};

  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscaled;
    text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    font-size: 62.5%;
  }

  body {
    background: ${theme.colors.black};
    font-family: ${theme.fonts.primary};

    @media print {
      transform: scale(0.8);
      transform-origin: 0 0;
      width: 125%;
    }
  }

  #__next {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .reveal,
  .reveal--delay1,
  .reveal--delay2, {
    visibility: hidden;
  }
`
