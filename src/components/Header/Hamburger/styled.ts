import styled, { css } from 'styled-components'
import theme from 'styles/theme'

interface Props {
  opened?: boolean
}

export const Button = styled.button<Props>`
  position: relative;
  width: 6.4rem;
  height: 4.8rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    background-color: ${theme.colors.white};
    left: 15px;
    height: 0.3rem;
    width: 3.2rem;
    transition: 0.25s ease-in-out, background-color 0.3s ease-out;

    &:nth-child(1) {
      top: 13px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 21px;
    }

    &:nth-child(4) {
      top: 29px;
    }
  }

  :hover {
    span {
      background-color: ${theme.colors.primary};
    }
  }

  ${({ opened }) =>
    opened &&
    css`
      span {
        :nth-child(1),
        :nth-child(4) {
          top: 21px;
          width: 0;
          left: 50%;
        }

        :nth-child(2) {
          transform: rotate(45deg);
        }

        :nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    `};
`
