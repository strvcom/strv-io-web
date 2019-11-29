import React from 'react'
import MetaHead from 'components/MetaHead'
import GlobalStyles from 'styles/global'

interface Props {
  children: React.ReactNode
}

const Layout: React.SFC<Props> = ({ children }) => (
  <>
    <GlobalStyles />
    <MetaHead />
    {children}
  </>
)

export default Layout
