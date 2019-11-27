import React from 'react'
import GlobalStyles from 'styles/global'
import Layout from 'components/Layout'
import 'styles/fonts.css'

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </>
)

export const shouldUpdateScroll = ({ prevRouterProps, routerProps }) => {
  const testRegEx = /^\/repositories/u
  if (
    testRegEx.test(prevRouterProps.location.pathname) &&
    testRegEx.test(routerProps.location.pathname)
  ) {
    return false
  }

  return true
}
