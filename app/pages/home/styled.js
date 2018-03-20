import styled from 'styled-components'
import variables from 'common/styleVariables'
import { mq } from 'common/media'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65%;
  background-image: url('static/assets/banner.jpg');
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
`

export const BannerImage = styled.div`
  position absolute;
  height: 100%;
  width: 100%;
  z-index: 0;
background: -moz-linear-gradient(top, rgba(17,21,23,0) 0%, rgba(17,21,23,0.99) 99%, rgba(17,21,23,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(17,21,23,0) 0%,rgba(17,21,23,0.99) 99%,rgba(17,21,23,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(17,21,23,0) 0%,rgba(17,21,23,0.99) 99%,rgba(17,21,23,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00111517', endColorstr='#111517',GradientType=0 ); /* IE6-9 */
`

export const HeadLine = styled.h1`
  font-family: ${variables.fonts.headline};
  color: ${variables.colors.white};
  letter-spacing: 1px;
  text-align: center;
  line-height: 36px;
  font-size: 36px;
  text-transform: uppercase;
  margin: 40px 0;
  z-index: 2;
  ${mq.tablet`
  line-height: 48px;
  font-size: 48px;
`};
  ${mq.desktop`
  line-height: 96px;
  font-size: 96px;
`};
`

export const HeadLineTail = styled.div`
  font-family: ${variables.fonts.secondary};
  color: ${variables.colors.white};
  font-size: 24px;
  letter-spacing: 0;
  text-align: center;
  line-height: 24px;
  padding: 40px 0 0 0;
  background-image: url('data:image/svg+xml;utf8,
  <svg width="40px" height="4px" viewBox="0 0 40 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-700.000000, -335.000000)" fill="#EF0D33">
              <rect x="700" y="335" width="40" height="4"></rect>
          </g>
      </g>
  </svg>');
  background-repeat: no-repeat;
  background-position: top center;
  z-index: 2;
  ${mq.desktop`
  line-height: 32px;
  font-size: 32px;
`};
`

export const RepoWrapper = styled.div`
  margin: 0 auto;
  max-width: 1020px;
`

export const RepoFilters = styled.div`
  ${mq.tablet`
  display: flex;
  justify-content: center;
  flex-direction: row;
`};
  button {
    margin: 5px;
    padding: 7.5px 15px;
    ${mq.tablet`
    min-width: 60px;
    box-sizing: content-box;
  `};
  }
`

export const RepoList = styled.div`
  margin: 50px 0;
`
