'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TableCell, TableRow } from '@/components/ui/table'
import { IFolder } from '@/types'
import { useUser } from '@clerk/nextjs'
import { format } from 'date-fns'
import { FolderIcon } from 'lucide-react'
import { FolderAction } from './folder-action'

interface Props {
  folder: IFolder
}

export function FolderItem({ folder }: Props) {
  const { user } = useUser()

  return (
    <TableRow>
      <TableCell className='flex items-center gap-2'>
        <FolderIcon className='w-4 h-4' />
        <span>{folder.name}</span>
      </TableCell>
      <TableCell>
        <Avatar>
          <AvatarImage src={user?.imageUrl} alt='Username' />
          <AvatarFallback>{user?.firstName?.[0]}</AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell>
        {format(new Date(folder.createdAt.seconds * 1000), 'MMM dd, yyyy')}
      </TableCell>
      <TableCell className='flex justify-end items-center gap-2 group'>
        <FolderAction folder={folder} />
      </TableCell>
    </TableRow>
  )
}
