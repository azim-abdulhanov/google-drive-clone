import { Timestamp } from 'firebase/firestore'
import { ReactNode } from 'react'

export interface ChildProps {
  children: ReactNode
}

export interface IFolder {
  id: string
  name: string
  userId: string
  createdAt: Timestamp
  archivedTime: Timestamp
}
