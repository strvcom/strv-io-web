import React from 'react'
import styled from 'styled-components'
import variables from 'common/styleVariables'
import PropTypes from 'prop-types'
import { mq } from 'common/media'

const SvgIcon = () => (
  <svg
    width="60px"
    height="60px"
    viewBox="0 0 60 60"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-290.000000, -1338.000000)" strokeWidth="2">
        <g transform="translate(130.000000, 1328.000000)">
          <g transform="translate(150.000000, 0.000000)">
            <g transform="translate(11.000000, 11.000000)">
              <rect stroke="#FFFFFF" x="0" y="48" width="10" height="10" />
              <rect stroke="#FFFFFF" x="24" y="48" width="10" height="10" />
              <rect stroke="#EF0D33" x="24" y="0" width="10" height="10" />
              <rect stroke="#FFFFFF" x="48" y="48" width="10" height="10" />
              <path d="M29,14 L29,42" stroke="#FFFFFF" strokeLinecap="round" />
              <polyline
                stroke="#FFFFFF"
                strokeLinecap="round"
                points="5 42 5 29 53 29 53 44"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

const Wrapper = styled.a`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  ${mq.tablet`
  width: 50%;
`};
  ${mq.desktop`
width: 33.333%;
`};
  &:hover {
    h2 {
      color: ${variables.colors.primary};
    }
  }
`
const Name = styled.h2`
  font-family: ${variables.fonts.primary};
  font-size: 20px;
  font-weight: bold;
  color: ${variables.colors.white};
  letter-spacing: 0.1px;
  text-align: center;
  line-height: 32px;
  transition: color 0.4s ease;
`
const Description = styled.div`
  font-family: ${variables.fonts.primary};
  font-size: 16px;
  color: #888888;
  text-align: center;
  height: 50px;
`
const Category = styled.div`
  padding-top: 15px;
  font-family: ${variables.fonts.primary};
  font-size: 12px;
  color: #555555;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  text-align: center;
`

const RepoItem = ({ repo }) => (
  <Wrapper href={repo.html_url} target="_blank">
    <SvgIcon />
    <Name>{repo.name}</Name>
    <Description>{repo.description}</Description>
    <Category>{repo.category}</Category>
  </Wrapper>
)

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
