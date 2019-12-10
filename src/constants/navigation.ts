import { NavigationType } from 'components/Header/Navigation/types'

export const navigation: NavigationType = {
  main: [
    {
      id: 'open-knowledge',
      title: 'Open Knowledge',
      link: '#',
    },
    {
      id: 'open-source',
      title: 'Open Source Libraries',
      link: '/repositories',
    },
    {
      id: 'guidelines',
      title: 'Guidelines',
      link: '#',
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
      link: '#',
    },
    {
      id: 'training-and-workshops',
      title: 'Training and Workshops',
      link: '#',
    },
  ],
}
