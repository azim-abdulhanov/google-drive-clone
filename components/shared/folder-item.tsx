'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TableCell, TableRow } from '@/components/ui/table'
import { db } from '@/lib/firebase'
import { IFolder } from '@/types'
import { useUser } from '@clerk/nextjs'
import { format } from 'date-fns'
import { doc, setDoc } from 'firebase/firestore'
import { FolderIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { FolderAction } from './folder-action'

interface Props {
  folder: IFolder
}

export function FolderItemRow({ folder }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(folder.name)

  const inputRef = useRef<HTMLInputElement>(null)

  const { refresh } = useRouter()

  const { user } = useUser()

  const onStartEditing = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation()
    setIsEditing(true)
    setTimeout(() => {
      inputRef.current?.focus()
      inputRef.current?.setSelectionRange(0, value.length)
    }, 0)
  }

  const onSave = () => {
    if (value === folder.name) return

    const ref = doc(db, 'folders', folder.id)

    const promise = setDoc(ref, {
      ...folder,
      name: value
    }).then(() => {
      setIsEditing(false)
      refresh()
    })

    toast.promise(promise, {
      loading: 'Saving folder name...',
      success: 'Folder name updated',
      error: 'Failed to update folder name'
    })
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSave()
    } else if (e.key === 'Escape') {
      setIsEditing(false)
    }
  }

  return (
    <TableRow>
      <TableCell className='flex items-center gap-2'>
        {isEditing ? (
          <Input
            className='w-48'
            ref={inputRef}
            value={value}
            onChange={e => setValue(e.target.value)}
            onBlur={onSave}
            onKeyDown={onKeyDown}
          />
        ) : (
          <Button variant='ghost' size='sm' onClick={onStartEditing}>
            <FolderIcon className='w-4 h-4' />
            <span>{folder.name}</span>
          </Button>
        )}
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
        <FolderAction folder={folder} onStartEditing={onStartEditing} />
      </TableCell>
    </TableRow>
  )
}

export function FolderItemCard({ folder }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(folder.name)

  const inputRef = useRef<HTMLInputElement>(null)

  const { refresh } = useRouter()

  const { user } = useUser()

  const onStartEditing = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation()
    setIsEditing(true)
    setTimeout(() => {
      inputRef.current?.focus()
      inputRef.current?.setSelectionRange(0, value.length)
    }, 0)
  }

  const onSave = () => {
    if (value === folder.name) return

    const ref = doc(db, 'folders', folder.id)

    const promise = setDoc(ref, {
      ...folder,
      name: value
    }).then(() => {
      setIsEditing(false)
      refresh()
    })

    toast.promise(promise, {
      loading: 'Saving folder name...',
      success: 'Folder name updated',
      error: 'Failed to update folder name'
    })
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSave()
    } else if (e.key === 'Escape') {
      setIsEditing(false)
    }
  }

  return (
    <div className='group p-4 border rounded-md hover:bg-secondary transition-colors'>
      {isEditing ? (
        <Input
          className='w-full mb-4'
          ref={inputRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={onSave}
          onKeyDown={onKeyDown}
        />
      ) : (
        <Button
          variant='ghost'
          size='sm'
          onClick={onStartEditing}
          className='justify-start w-full mb-4'>
          <FolderIcon className='w-4 h-4' />
          <span>{folder.name}</span>
        </Button>
      )}
      <div className='flex items-center gap-2 mb-2'>
        <Avatar>
          <AvatarImage src={user?.imageUrl} alt='Username' />
          <AvatarFallback>{user?.firstName?.[0]}</AvatarFallback>
        </Avatar>
        <span>{user?.firstName}</span>
      </div>
      <div className='text-sm text-muted-foreground'>
        {format(new Date(folder.createdAt.seconds * 1000), 'MMM dd, yyyy')}
      </div>
      <div className='flex justify-end items-center gap-2 group'>
        <FolderAction folder={folder} onStartEditing={onStartEditing} />
      </div>
    </div>
  )
}
