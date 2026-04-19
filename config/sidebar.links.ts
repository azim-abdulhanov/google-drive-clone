import { Clock, Cloud, Star, Tablet, Trash } from 'lucide-react'

export const SIDEBAR_LINKS = [
  {
    label: 'My drive',
    path: '/',
    icon: Tablet
  },
  {
    label: 'Starred',
    path: '/starred',
    icon: Star
  },
  {
    label: 'Recent',
    path: '/recent',
    icon: Clock
  },
  {
    label: 'Trash',
    path: '/trash',
    icon: Trash
  },
  {
    label: 'Storage',
    path: '/storage',
    icon: Cloud
  }
]
