import styled from 'styled-components'

export const Ul = styled.ul`
  width: 227px;
  display: flex;
  margin: 0 auto;
  padding: 77px 0 92px 0;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`

export const Link = styled.a`
  position: relative;
  display: inline-block;
  outline: none;
  cursor: pointer;

  path {
    opacity: 0.5;
    transition: opacity 0.4s ease;
  }

  &:hover {
    path {
      opacity: 1;
    }
  }
`

export const Title = styled.span`
  position: absolute;
  width: 0;
  overflow: hidden;
`
