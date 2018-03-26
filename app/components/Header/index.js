import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { mq } from 'common/media'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2;
  padding: 0 30px;
  height: 92px;
  ${mq.tablet`
  height: 132px;
  padding: 0 49px;
`};
`

const Logo = styled.a`
  positon: relative;
  span {
    display: inline-block;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA2NCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TG9nbzwvdGl0bGU+PHBhdGggZD0iTTYwIDMxLjJoLTZMNTAuMi44aDQuMUw1NyAyNS42IDU5LjcuOGg0LjFMNjAgMzEuMnptLTE3LjQgMEwzOSAxOC42aC0xLjZ2MTIuNmgtNC4yVi44aDcuM2MxLjYgMCAyLjkuNSA0IDEuNSAxIDEgMS42IDIuNiAxLjYgNC45djQuN2MwIDEuNS0uMyAyLjgtLjggMy44LS42IDEtMS4zIDEuNy0yLjIgMi4xTDQ3IDMxLjNoLTQuNHYtLjF6bS0uOC0yMy41YzAtMS4xLS4yLTEuOS0uNi0yLjQtLjQtLjUtMS0uNy0xLjgtLjdoLTIuMXYxMGgyLjFjLjggMCAxLjQtLjIgMS44LS43LjQtLjUuNi0xLjIuNi0yLjRWNy43em0tMTctMi45djI2LjRoLTQuMVY0LjhoLTQuM3YtNGgxMi44djRoLTQuNHpNMTEgMzBjLTEuMiAxLTIuNyAxLjUtNC42IDEuNS0xLjkgMC0zLjQtLjUtNC42LTEuNi0xLjItMS0xLjgtMi43LTEuOC00Ljh2LTQuM2g0LjF2My44YzAgMS4xLjIgMS45LjcgMi40LjUuNSAxIC43IDEuNi43LjYgMCAxLjEtLjIgMS42LS43LjUtLjUuNy0xLjIuNy0yLjR2LTIuNWMwLS42LS4yLTEuMS0uNi0xLjctLjQtLjUtMS0xLjEtMS42LTEuNy0uNi0uNi0xLjMtMS4yLTIuMS0xLjgtLjgtLjYtMS41LTEuMy0yLjEtMi0uNi0uNy0xLjItMS41LTEuNi0yLjMtLjQtLjgtLjYtMS43LS42LTIuN1Y2LjRjMC0xLjEuMi0yLjEuNS0yLjkuMy0uOC44LTEuNSAxLjQtMkMyLjYgMSAzLjMuNiA0IC40IDQuOC4yIDUuNiAwIDYuNSAwYy45IDAgMS43LjEgMi41LjQuOC4yIDEuNS42IDIgMS4xLjYuNSAxLjEgMS4yIDEuNCAyIC4zLjguNSAxLjguNSAyLjl2NC40SDguOFY2LjljMC0xLjEtLjItMS45LS43LTIuNC0uNS0uNS0xLS43LTEuNi0uNy0uNiAwLTEuMS4yLTEuNi43LS41LjUtLjcgMS4yLS43IDIuNHYyLjJjMCAuOC4yIDEuNS42IDIuMS40LjYgMSAxLjIgMS42IDEuOC42LjYgMS4zIDEuMSAyLjEgMS43LjguNiAxLjUgMS4xIDIuMSAxLjguNi42IDEuMiAxLjMgMS42IDIgLjQuNy42IDEuNi42IDIuNnYzLjhjMCAyLjUtLjYgNC4xLTEuOCA1LjF6IiBmaWxsPSIjRUYwRDMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);
    width: 64px;
    height: 32px;
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    transform: translate3d(125%, 0, 0);
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA2NCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TG9nbzwvdGl0bGU+PHBhdGggZD0iTTYwIDMxLjJoLTZMNTAuMi44aDQuMUw1NyAyNS42IDU5LjcuOGg0LjFMNjAgMzEuMnptLTE3LjQgMEwzOSAxOC42aC0xLjZ2MTIuNmgtNC4yVi44aDcuM2MxLjYgMCAyLjkuNSA0IDEuNSAxIDEgMS42IDIuNiAxLjYgNC45djQuN2MwIDEuNS0uMyAyLjgtLjggMy44LS42IDEtMS4zIDEuNy0yLjIgMi4xTDQ3IDMxLjNoLTQuNHYtLjF6bS0uOC0yMy41YzAtMS4xLS4yLTEuOS0uNi0yLjQtLjQtLjUtMS0uNy0xLjgtLjdoLTIuMXYxMGgyLjFjLjggMCAxLjQtLjIgMS44LS43LjQtLjUuNi0xLjIuNi0yLjRWNy43em0tMTctMi45djI2LjRoLTQuMVY0LjhoLTQuM3YtNGgxMi44djRoLTQuNHpNMTEgMzBjLTEuMiAxLTIuNyAxLjUtNC42IDEuNS0xLjkgMC0zLjQtLjUtNC42LTEuNi0xLjItMS0xLjgtMi43LTEuOC00Ljh2LTQuM2g0LjF2My44YzAgMS4xLjIgMS45LjcgMi40LjUuNSAxIC43IDEuNi43LjYgMCAxLjEtLjIgMS42LS43LjUtLjUuNy0xLjIuNy0yLjR2LTIuNWMwLS42LS4yLTEuMS0uNi0xLjctLjQtLjUtMS0xLjEtMS42LTEuNy0uNi0uNi0xLjMtMS4yLTIuMS0xLjgtLjgtLjYtMS41LTEuMy0yLjEtMi0uNi0uNy0xLjItMS41LTEuNi0yLjMtLjQtLjgtLjYtMS43LS42LTIuN1Y2LjRjMC0xLjEuMi0yLjEuNS0yLjkuMy0uOC44LTEuNSAxLjQtMkMyLjYgMSAzLjMuNiA0IC40IDQuOC4yIDUuNiAwIDYuNSAwYy45IDAgMS43LjEgMi41LjQuOC4yIDEuNS42IDIgMS4xLjYuNSAxLjEgMS4yIDEuNCAyIC4zLjguNSAxLjguNSAyLjl2NC40SDguOFY2LjljMC0xLjEtLjItMS45LS43LTIuNC0uNS0uNS0xLS43LTEuNi0uNy0uNiAwLTEuMS4yLTEuNi43LS41LjUtLjcgMS4yLS43IDIuNHYyLjJjMCAuOC4yIDEuNS42IDIuMS40LjYgMSAxLjIgMS42IDEuOC42LjYgMS4zIDEuMSAyLjEgMS43LjguNiAxLjUgMS4xIDIuMSAxLjguNi42IDEuMiAxLjMgMS42IDIgLjQuNy42IDEuNi42IDIuNnYzLjhjMCAyLjUtLjYgNC4xLTEuOCA1LjF6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);
    width: 64px;
    height: 32px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  }
  &:hover {
    span {
      transform: translate3d(-50%, 0, 0);
      opacity: 0;
    }
    &:after {
      visibility: visible;
      opacity: 1;
      transform: translate3d(47%, 0, 0);
      ${mq.tabletWide`
      transform: translate3d(75%, 0 , 0);
    `};
    }
  }
`

const Header = () => (
  <Wrapper>
    <Link prefetch href="/" passHref>
      <Logo>
        <span />
      </Logo>
    </Link>
  </Wrapper>
)

export default Header
