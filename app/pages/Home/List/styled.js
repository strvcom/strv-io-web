import styled from 'styled-components'
// import variables from 'common/styleVariables'
import { mq } from 'common/media'

export const Ul = styled.ul`
  margin: 50px auto 0 auto;
  padding: 0;
  width: 100%;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;

  ${mq.tabletWide} {
    width: 780px;
  }

  ${mq.desktop} {
    width: 1180px;
  }
`

export const Li = styled.li`
  &:nth-child(even) {
    margin: 0 0 0 20px;
  }

  ${mq.desktop} {
    &:nth-child(even) {
      margin: 0;
    }

    &:nth-child(3n + 2) {
      margin: 0 20px;
    }
  }
`
