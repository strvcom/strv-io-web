import styled from 'styled-components'
import variables from 'common/styleVariables'
import { mq } from 'common/media'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

export const InnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`

export const Title = styled.h2`
  font-family: ${variables.fonts.headline};
  color: ${variables.colors.white};
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 36px;
  text-transform: uppercase;
  margin: 82px 0 0 0;
  ${mq.tablet`
  font-size: 4.8rem;
  line-height: 48px;
  margin: 102px 0 0 0;
  `};

  ${mq.tabletWide`
  font-size: 7.2rem;
  line-height: 72px;
  `};
`

export const Message = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 2rem;
  line-height: 26px;
  color: ${variables.colors.white};
  font-family: ${variables.fonts.primary};
  text-align: center;

  ${mq.tabletWide`
  font-size: 2.4rem;
  line-height: 32px;
  `};
`

export const Yoda = styled.div`
  height: 212px;
  width: 135px;
  background-image: url('/static/assets/yoda.png');
  background-size: cover;
  ${mq.tablet`
  height:212px;
  width: 135px;
  `};

  ${mq.tabletWide`
  height: 425px;
  width: 270px;
  `};
`
