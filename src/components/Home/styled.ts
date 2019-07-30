import styled from 'styled-components'
import theme from 'styles/theme'
import { mq } from 'styles/media'

type BannerProps = {
  bgImage: string
}

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

export const Banner = styled.div<BannerProps>`
  position: relative;
  background-image: url(${p => p.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 30px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(17, 21, 23, 0) 0%,
      rgba(17, 21, 23, 0.99) 99%,
      rgba(17, 21, 23, 1) 100%
    );
    filter: dximagetransform.microsoft.gradient(
      startColorstr= '#00111517',
      endColorstr= '#111517',
      GradientType=0
    );
  }
`

export const BannerInfo = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: 17.5rem;
  padding-bottom: 10.7rem;

  ${mq.tabletWide} {
    padding-bottom: 16.2rem;
  }
`

export const HeadLine = styled.h1`
  font-family: ${theme.fonts.headline};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: 1px;
  text-align: center;
  line-height: 48px;
  font-size: 4.8rem;
  text-transform: uppercase;
  z-index: 2;
  margin: 0;
  position: relative;
  padding-bottom: 30px;

  ${mq.tablet} {
    line-height: 76px;
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
    background-color: ${theme.colors.primary};
  }
`

export const HeadLineTail = styled.h2`
  font-family: ${theme.fonts.subHeadline};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.regular};
  line-height: 38px;
  font-size: 2.6rem;
  letter-spacing: 0;
  text-align: center;
  padding: 27px 0 0 0;
  margin: 0;
  visibility: none;
  z-index: 2;

  ${mq.tabletWide} {
    line-height: 48px;
    font-size: 3.2rem;
  }
`
