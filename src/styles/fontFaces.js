import { css } from 'styled-components'

export default css`
  @font-face {
    font-family: 'Maison Neue';
    font-weight: 300;
    font-display: optional;
    src: url('/static/assets/fonts/MaisonNeueBook.woff2') format('woff2'),
      url('/static/assets/fonts/MaisonNeueBook.woff') format('woff');
  }

  @font-face {
    font-family: 'Maison Neue';
    font-style: normal;
    font-weight: 400;
    font-display: optional;
    src: url('/static/assets/fonts/MaisonNeueMedium.woff2') format('woff2'),
      url('/static/assets/fonts/MaisonNeueMedium.woff') format('woff');
  }

  @font-face {
    font-family: 'Maison Neue';
    font-style: normal;
    font-weight: 600;
    font-display: optional;
    src: url('/static/assets/fonts/MaisonNeueDemi.woff2') format('woff2'),
      url('/static/assets/fonts/MaisonNeueDemi.woff') format('woff');
  }

  @font-face {
    font-family: 'Maison Neue';
    font-weight: 700;
    font-display: optional;
    src: url('/static/assets/fonts/MaisonNeueBold.woff2') format('woff2'),
      url('/static/assets/fonts/MaisonNeueBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Playfair Display';
    font-weight: 400;
    font-style: normal;
    font-display: optional;
    src: url('/static/assets/fonts/PlayfairDisplayRegular.woff2')
        format('woff2'),
      url('/static/assets/fonts/PlayfairDisplayRegular.woff') format('woff');
  }

  @font-face {
    font-family: 'Trump Gothic East';
    font-weight: 700;
    font-style: normal;
    font-display: optional;
    src: url('/static/assets/fonts/TrumpGothicEastBold.woff2') format('woff2'),
      url('/static/assets/fonts/TrumpGothicEastBold.woff') format('woff');
  }
`
