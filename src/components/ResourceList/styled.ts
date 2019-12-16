import styled from 'styled-components'
import { mq } from 'styles/media'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${mq.tablet} {
    flex-direction: row;
  }
`
