interface NavigationItem {
  id: string
  title: string
  link: string
  external?: boolean
}

export interface NavigationType {
  main: NavigationItem[]
  secondary: NavigationItem[]
}
