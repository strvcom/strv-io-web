import { ResourceType } from 'components/ResourceList/types'

export const resources: ResourceType[] = [
  {
    id: 'open-knowledge',
    image: 'assets/home/open-knowledge.png',
    alt: 'Open Knowledge',
    title: 'Open Knowledge',
    description:
      'Online courses for learning main stack STRV technologies.',
    link: '/knowledge',
  },
  {
    id: 'open-source',
    image: 'assets/home/open-source.png',
    alt: 'Open Source Libraries',
    title: 'Open Source Libraries',
    description:
      'Internal libraries and tools helping us building rock-solid apps and avoiding boilerplate.',
    link: '/tools',
  },
  {
    id: 'guidelines',
    image: 'assets/home/guidelines.png',
    alt: 'Guidelines',
    title: 'Guidelines',
    description:
      'Set of conventions and best practices straight from STRV\'s engineering team.',
    link: '/guidelines',
  },
]
