import styled from 'styled-components'

export const TopHeader = styled.header`
  position: relative;
  z-index: 15;

  > * {
    :first-child {
      position: absolute;
      top: 4.9rem;
      left: 4.9rem;
    }

    :last-child {
      position: absolute;
      top: 4.9rem;
      right: 4.9rem;
    }
  }
`
