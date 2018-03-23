import { injectGlobal } from 'styled-components'
import variables from 'common/styleVariables'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    font-size: 62.5%;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: ${variables.colors.black}
  }
  *{
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  @page {
    size: A4;
    margin: 0;
  }
  body {
    overflow-x: hidden;
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fonts.primary};
    --webkit-text-size-adjust: 100%;
    --ms-text-size-adjust: 100%;
    --webkit-font-smoothing: antialiased;
    > div#__next{
      height: 100%;
      width: 100%;
    }
    @media print {
      transform: scale(0.8);
      transform-origin: 0 0;
      width: 125%;
    }
  }
  body.fontLoaded {
    font-family:
      ${props => props.theme.fonts.primary},
      Open Sans,
      Helvetica Neue,
      sans-serif;
  }
  #app {
    min-height: 100%;
    min-width: 100%;
  }
  .reveal,
   .reveal--card,
    .reveal--delay1,
     .reveal--delay2,
      .reveal--delay3,
       .reveal--delay4,
        .reveal--item,
         .reveal--left,
          .reveal--right
           {
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
    font-weight: normal;
    src:
      url('/static/assets/fonts/PlayfairDisplayRegular.woff2') format('woff2'),
      url('/static/assets/fonts/PlayfairDisplayRegular.woff') format('woff'),
      url('/static/assets/fonts/PlayfairDisplayRegular.ttf') format('truetype');
  }PlayfairDisplayRegular
  @font-face {
    font-family: 'Maison Neue';
    font-style: normal;
    font-weight: 400;
    src: url('/static/assets/fonts/MaisonNeueMedium.otf') format('opentype');
  }

    @font-face {
    font-family: 'Maison Neue';
    font-weight: 600;
    src:
      url('/static/assets/fonts/MaisonNeueDemi.otf') format('opentype');
  }

  @font-face {
    font-family: 'Trump Gothic East';
    font-weight: 700;
    src:
      url('/static/assets/fonts/TrumpGothicEastBold.woff2') format('woff2'),
      url('/static/assets/fonts/TrumpGothicEastBold.woff') format('woff'),
      url('/static/assets/fonts/TrumpGothicEastBold.ttf') format('truetype');
  }
`
