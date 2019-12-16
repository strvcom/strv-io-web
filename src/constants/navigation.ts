import { NavigationType } from 'components/Header/Navigation/types'

export const navigation: NavigationType = {
  main: [
    {
      id: 'open-knowledge',
      title: 'Open Knowledge',
      link: '/knowledge',
    },
    {
      id: 'open-source',
      title: 'Open Source Libraries',
      link: '/tools',
    },
    {
      id: 'guidelines',
      title: 'Guidelines',
      link: '/guidelines',
    },
  ],
  secondary: [
    {
      id: 'strv-page',
      title: 'Strv.com',
      link: 'https://strv.com',
      external: true,
    },
    {
      id: 'blog',
      title: 'Blog',
      link: '/#',
    },
    {
      id: 'training-and-workshops',
      title: 'Training and Workshops',
      link: '/#',
    },
  ],
}
