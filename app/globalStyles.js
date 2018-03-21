import { injectGlobal } from 'styled-components'
import TrumpGothicEastBoldTtf from 'assets/fonts/TrumpGothicEast_bold.ttf'
import TrumpGothicEastBoldWoff from 'assets/fonts/TrumpGothicEast_bold.woff'
import TrumpGothicEastBoldWoff2 from 'assets/fonts/TrumpGothicEast_bold.woff2'
import MaisonNeueBoldItalicOtf from 'assets/fonts/MaisonNeue_Bold_Italic.otf'
import MaisonNeueBoldItalicWoff from 'assets/fonts/MaisonNeue_Bold_Italic.woff'
import MaisonNeueBoldItalicWoff2 from 'assets/fonts/MaisonNeue_Bold_Italic.woff2'
import MaisonNeueBoldOtf from 'assets/fonts/MaisonNeue_Bold.otf'
import MaisonNeueBoldWoff from 'assets/fonts/MaisonNeue_Bold.woff'
import MaisonNeueBoldWoff2 from 'assets/fonts/MaisonNeue_Bold.woff2'
import MaisonNeueLightOtf from 'assets/fonts/MaisonNeue_Light.otf'
import MaisonNeueBookOtf from 'assets/fonts/MaisonNeue_Book.otf'
import MaisonNeueBookWoff from 'assets/fonts/MaisonNeue_Book.woff'
import MaisonNeueBookWoff2 from 'assets/fonts/MaisonNeue_Book.woff2'
import MaisonNeueMediumOtf from 'assets/fonts/MaisonNeue_Medium.otf'
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
  @font-face {
    font-family: 'Maison Neue';
    font-weight: 300;
    src:
      url(${MaisonNeueBookWoff2}) format('woff2'),
      url(${MaisonNeueBookWoff}) format('woff'),
      url(${MaisonNeueBookOtf}) format('opentype');
  }
  @font-face {
    font-family: 'Maison Neue';
    font-weight: 700;
    src:
      url(${MaisonNeueBoldWoff2}) format('woff2'),
      url(${MaisonNeueBoldWoff}) format('woff'),
      url(${MaisonNeueBoldOtf}) format('opentype');
  }
  @font-face {
    font-family: 'Maison Neue';
    font-style: normal;
    font-weight: 100;
    src: url(${MaisonNeueLightOtf}) format('opentype');
  }
  @font-face {
    font-family: 'Maison Neue';
    font-style: normal;
    font-weight: 400;
    src: url(${MaisonNeueMediumOtf}) format('opentype');
  }
  @font-face {
    font-family: 'Maison Neue';
    font-style: italic;
    font-weight: 700;
    src:
      url(${MaisonNeueBoldItalicWoff2}) format('woff2'),
      url(${MaisonNeueBoldItalicWoff}) format('woff'),
      url(${MaisonNeueBoldItalicOtf}) format('opentype');
  }
  @font-face {
    font-family: 'Trump Gothic East';
    font-weight: 700;
    src:
      url(${TrumpGothicEastBoldWoff2}) format('woff2'),
      url(${TrumpGothicEastBoldWoff}) format('woff'),
      url(${TrumpGothicEastBoldTtf}) format('truetype');
  }
`
