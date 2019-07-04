import styled from 'styled-components'
import { mq } from 'styles/media'

export const Main = styled.main`
  margin: 0 auto;
  padding: 0 30px;

  ${mq.tabletWide} {
    padding: 0;
  }
`
