import styled from 'styled-components'
import variables from 'common/styleVariables'

export const Wrapper = styled.footer`
  margin: 0 auto;
  text-align: center;
  padding: 0 30px;
  max-width: 580px;
`

export const ContinueButton = styled.div`
  font-family: ${variables.fonts.primary};
  font-size: 20px;
  color: #ffffff;
  text-align: left;
  padding: 136px 0 29px 0;
`

export const ArticleLink = styled.a`
  color: ${variables.colors.primary};
  font-family: ${variables.fonts.primary};
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.1px;
  width: 100%;
  border-top: solid 1px rgba(136, 136, 136, 0.2);
  border-bottom: solid 1px rgba(136, 136, 136, 0.2);
  background-image: url(data:image/svg+xml;base64,ICA8c3ZnIHdpZHRoPSIxM3B4IiBoZWlnaHQ9IjEzcHgiIHZpZXdCb3g9IjAgMCAxMyAxMyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICAgICAgPGRlZnM+PC9kZWZzPiAgICAgICAgPGcgaWQ9IkZpbmFsIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgICAgICA8ZyBpZD0iMDMtMS0xLVNlcnZpY2VzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTk1LjAwMDAwMCwgLTIwNTYuMDAwMDAwKSIgZmlsbD0icmdiKDI1NSwyMzksMjM5KSI+ICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTk1LjAwMDAwMCwgMjA1Ni4wMDAwMDApIj4gICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNDciIHg9IjMiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyIj48L3JlY3Q+ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTQ3LUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgNS4wMDAwMDApIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTEyLjAwMDAwMCwgLTUuMDAwMDAwKSAiIHg9IjciIHk9IjQiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyIj48L3JlY3Q+ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTQ3LUNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi40NzQ4NzQsIDYuNDc0ODc0KSByb3RhdGUoLTQ1LjAwMDAwMCkgdHJhbnNsYXRlKC02LjQ3NDg3NCwgLTYuNDc0ODc0KSAiIHg9Ii0xLjY4MTk4MDUyIiB5PSI1LjQ3NDg3MzczIiB3aWR0aD0iMTYuMzEzNzA4NSIgaGVpZ2h0PSIyIj48L3JlY3Q+ICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvc3ZnPg==);
  background-position: center right;
  background-repeat: no-repeat;
  padding: 20px 20px 20px 0;
  display: inline-block;
  text-align: left;
`
