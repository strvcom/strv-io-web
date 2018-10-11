import styled from 'styled-components'
import variables from 'common/styleVariables'
import { mq } from 'common/media'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

export const Banner = styled.div`
  position: relative;
  background-image: url('static/assets/banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 30px;

  ${mq.tabletWide} {
    height: 538px;
  }
`

export const BannerInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;

  ${mq.tabletWide} {
    justify-content: unset;
  }
`

export const BannerImage = styled.div`
  position: absolute;
  flex: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: -moz-linear-gradient(
    top,
    rgba(17, 21, 23, 0) 0%,
    rgba(17, 21, 23, 0.99) 99%,
    rgba(17, 21, 23, 1) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(17, 21, 23, 0) 0%,
    rgba(17, 21, 23, 0.99) 99%,
    rgba(17, 21, 23, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(17, 21, 23, 0) 0%,
    rgba(17, 21, 23, 0.99) 99%,
    rgba(17, 21, 23, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
    startColorstr='#00111517',
    endColorstr='#111517',
    GradientType=0
  );
`

export const HeadLine = styled.h1`
  font-family: ${variables.fonts.headline};
  color: ${variables.colors.white};
  font-weight: ${variables.fontWeight.bold};
  letter-spacing: 1px;
  text-align: center;
  line-height: 48px;
  font-size: 4.8rem;
  text-transform: uppercase;
  z-index: 2;
  margin: 175px 0 0 0;
  position: relative;
  padding-bottom: 30px;

  ${mq.tablet} {
    line-height: 76px;
    margin-top: 193px 0 0 0;
    font-size: 7.6rem;
  }

  ${mq.tabletWide} {
    line-height: 96px;
    font-size: 9.6rem;
  }

  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 4px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: ${variables.colors.primary};
  }
`

export const HeadLineTail = styled.h2`
  font-family: ${variables.fonts.subHeadline};
  color: ${variables.colors.white};
  font-weight: ${variables.fontWeight.regular};
  line-height: 38px;
  font-size: 2.6rem;
  letter-spacing: 0;
  text-align: center;
  padding: 27px 0 0 0;
  margin-top: 0;
  visibility: none;
  z-index: 2;
  margin-bottom: 107px;

  ${mq.tabletWide} {
    margin-bottom: 0;
    line-height: 48px;
    font-size: 3.2rem;
  }
`

export const RepoWrapper = styled.div`
  margin: 0 auto;
  padding: 0 30px;

  ${mq.tabletWide} {
    padding: 0;
  }
`

export const RepoFilters = styled.div`
  text-align: center;

  ${mq.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  button {
    margin: 5px 5px 5px 5px;
  }
`

export const RepoList = styled.div`
  margin: 50px auto 0 auto;
  width: 100%;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;

  ${mq.tabletWide} {
    width: 780px;
  }

  a {
    &:nth-child(even) {
      margin: 0 0 0 20px;
    }
  }

  ${mq.desktop} {
    width: 1180px;

    a {
      margin: 0 !important;

      &:nth-child(3n + 2) {
        margin: 0 20px !important;
      }
    }
  }
`
