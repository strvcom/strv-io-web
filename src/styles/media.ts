export const breakpoints = {
  tablet: 768,
  tabletWide: 1024,
  desktop: 1200,
  desktopWide: 1800,
}

export const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  const emSize = breakpoints[label] / 16

  accumulator[label] = `@media (min-width: ${emSize}em)`

  return accumulator
}, {})
