/* eslint-disable no-unused-expressions */
import { createGlobalStyle } from 'styled-components'
import theme from 'styles/theme'
import fontFaces from 'styles/fontFaces'

export default createGlobalStyle`
  ${fontFaces};

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
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
    color: white;
    margin: 0;

    @media print {
      transform: scale(0.8);
      transform-origin: 0 0;
      width: 125%;
    }
  }

  #___gatsby {
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
