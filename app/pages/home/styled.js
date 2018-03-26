import styled from 'styled-components'
import variables from 'common/styleVariables'
import { mq } from 'common/media'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

export const Banner = styled.div`
  position: relative;
  height: 411px;
  background-image: url('static/assets/banner.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 30px;
  ${mq.tablet`
  height: 462px;
`};
  ${mq.tabletWide`
height: 538px;
`};
`

export const BannerInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  ${mq.tabletWide`
  justify-content: unset;
`};
`

export const BannerImage = styled.div`
  position absolute;
  flex: 1;
 left: 0;
 right: 0;
 top:0;
 bottom: 0;
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
  line-height: 48px;
  font-size: 48px;
  text-transform: uppercase;
  margin: 0 0 26px 0;
  font-weight: 700;
  z-index: 2;
  margin-top: 61px;
  ${mq.tablet`
  line-height: 76px;
  margin-top: 82px;
  font-size: 76px;
`};
  ${mq.tabletWide`
  margin: 213px 0 26px 0;
  line-height: 96px;
  font-size: 96px;
`};
`

export const HeadLineTail = styled.div`
  font-family: ${variables.fonts.subHeadline};
  color: ${variables.colors.white};
  line-height: 38px;
  font-size: 26px;
  letter-spacing: 0;
  text-align: center;
  padding: 30px 0 0 0;
  visibility: none;
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
  ${mq.tabletWide`
line-height: 48px;
font-size: 32px;
`};
`

export const RepoWrapper = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  ${mq.tabletWide`
  padding: 0;
`};
`

export const RepoFilters = styled.div`
  text-align: center;
  ${mq.tablet`
  display: flex;
  justify-content: center;
  flex-direction: row;
`};
  button {
    margin 5px 5px 5px 5px;
  }
`

export const RepoList = styled.div`
  margin: 50px auto 0 auto;
  width: 100%;
  text-align: center;
  ${mq.tabletWide`
  width: 780px;
a {
  &:nth-child(even) {
    margin: 0 0 0 20px;
  }
}
`};
  ${mq.desktop`
width: 1180px;
a {
  margin: 0 !important;
  &:nth-child(3n + 2) {
    margin: 0 20px !important;
  }
}
`};
`
