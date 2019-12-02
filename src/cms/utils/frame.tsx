import React, { useState, useEffect, FC } from 'react'
import { StyleSheetManager } from 'styled-components'
import GlobalStyles from 'styles/global'

export const StyledFrame: FC = ({ children }) => {
  const [iframeRef, setIframeRef] = useState<HTMLHeadElement | null>(null)

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0]
    if (iframe !== null && iframe.contentDocument !== null) {
      const iframeHeadElem = iframe.contentDocument.head
      setIframeRef(iframeHeadElem)
    }
  }, [])

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>
        <>
          <GlobalStyles />
          {children}
        </>
      </StyleSheetManager>
    )
  )
}
