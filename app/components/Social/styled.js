import styled from 'styled-components'

export const IconWrapper = styled.a`
  display: inline-block;
  outline: none;
  cursor: pointer;
  g {
    transition: fill 0.4s ease;
  }
  &:hover {
    g {
      fill: #fff;
    }
  }
`

export const Wrapper = styled.div`
  width: 227px;
  display: flex;
  margin: 0 auto;
  padding: 77px 0 92px 0;
  align-items: center;
  justify-content: space-between;
`
