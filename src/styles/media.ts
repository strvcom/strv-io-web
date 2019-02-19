interface Breakpoints {
  [key: string]: number
  tablet: number
  tabletWide: number
  desktop: number
  desktopWide: number
}

interface MediaQuery {
  [key: string]: string
  tablet: string
  tabletWide: string
  desktop: string
  desktopWide: string
}

export const breakpoints: Breakpoints = {
  tablet: 768,
  tabletWide: 1024,
  desktop: 1200,
  desktopWide: 1800,
}

export const mq: MediaQuery = Object.keys(breakpoints).reduce(
  (accumulator: MediaQuery, label: string): MediaQuery => {
    const emSize = breakpoints[label] / 16

    accumulator[label] = `@media (min-width: ${emSize}em)`

    return accumulator
  },
  {
    tablet: '',
    tabletWide: '',
    desktop: '',
    desktopWide: '',
  }
)
