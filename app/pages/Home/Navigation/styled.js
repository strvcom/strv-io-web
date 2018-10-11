import styled from 'styled-components'
import { mq } from 'styles/media'

export const Wrapper = styled.nav`
  text-align: center;
  padding: 0 30px;

  ${mq.tabletWide} {
    padding: 0;
  }
`

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  padding: 0;
  margin: 0;
`

export const Li = styled.li`
  margin: 5px;
`
