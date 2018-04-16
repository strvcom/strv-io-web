import { injectGlobal } from 'styled-components'
import variables from 'common/styleVariables'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: ${variables.colors.black};
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscaled;
    text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    overflow-x: hidden;
    background: ${variables.colors.black};
    color: ${variables.colors.black};
    font-family: ${variables.fonts.primary};
    > div#__next {
      height: 100%;
      width: 100%;
    }

    @media print {
      transform: scale(0.8);
      transform-origin: 0 0;
      width: 125%;
    }
  }
  .reveal,
  .reveal--delay1,
  .reveal--delay2, {
    visibility: hidden;
  }

  @font-face {
    font-family: 'Maison Neue';
    font-weight: 300;
    src:
      url('/static/assets/fonts/MaisonNeueBook.woff2') format('woff2'),
      url('/static/assets/fonts/MaisonNeueBook.woff') format('woff'),
      url('/static/assets/fonts/MaisonNeueBook.otf') format('opentype');
  }

  @font-face {
    font-family: 'Maison Neue';
    font-weight: 700;
    src:
      url('/static/assets/fonts/MaisonNeueBold.woff2') format('woff2'),
      url('/static/assets/fonts/MaisonNeueBold.woff') format('woff'),
      url('/static/assets/fonts/MaisonNeueBold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Playfair Display';
    font-weight: 400;
    font-style: normal;
    src:
      url('/static/assets/fonts/PlayfairDisplayRegular.woff2') format('woff2'),
      url('/static/assets/fonts/PlayfairDisplayRegular.woff') format('woff'),
      url('/static/assets/fonts/PlayfairDisplayRegular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Maison Neue';
    font-style: normal;
    font-weight: 400;
    src: url('/static/assets/fonts/MaisonNeueMedium.otf') format('opentype');
  }

  @font-face {
    font-family: 'Maison Neue';
    font-weight: 600;
    font-style: normal;
    src: url('/static/assets/fonts/MaisonNeueDemi.otf') format('opentype');
  }

  @font-face {
    font-family: 'Trump Gothic East';
    font-weight: 700;
    font-style: normal;
    src:
      url('/static/assets/fonts/TrumpGothicEastBold.woff2') format('woff2'),
      url('/static/assets/fonts/TrumpGothicEastBold.woff') format('woff'),
      url('/static/assets/fonts/TrumpGothicEastBold.ttf') format('truetype');
  }
`
