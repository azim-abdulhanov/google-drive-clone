import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { db } from '@/lib/firebase'
import { IFolder } from '@/types'
import { doc, setDoc } from 'firebase/firestore'
import {
  Download,
  MoreVertical,
  Pencil,
  Star,
  Trash,
  UserPlus
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

interface Props {
  folder: IFolder
  onStartEditing?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function FolderAction({ folder, onStartEditing }: Props) {
  const { refresh } = useRouter()

  const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()

    const ref = doc(db, 'folders', folder.id)
    const promise = setDoc(ref, {
      ...folder,
      isArchived: true,
      deletedAt: new Date()
    }).then(() => refresh())

    toast.promise(promise, {
      loading: 'Moving folder to trash...',
      success: 'Folder moved to trash',
      error: 'Failed to move folder to trash'
    })
  }

  const onAddStar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()

    const ref = doc(db, 'folders', folder.id)

    const promise = setDoc(ref, {
      ...folder,
      isStar: true
    }).then(() => refresh())

    toast.promise(promise, {
      loading: 'Starring folder...',
      success: 'Folder starred',
      error: 'Failed to star folder'
    })
  }

  const onRemoveStar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()

    const ref = doc(db, 'folders', folder.id)

    const promise = setDoc(ref, {
      ...folder,
      isStar: false
    }).then(() => refresh())

    toast.promise(promise, {
      loading: 'Unstarring folder...',
      success: 'Folder unstarred',
      error: 'Failed to unstar folder'
    })
  }

  const onDownload = () => {
    toast.error('Download feature is not implemented yet')
  }

  const onShare = () => {
    navigator.clipboard.writeText(folder.name)

    toast.success('Folder name copied to clipboard')
  }

  return (
    <div className='flex items-center gap-1'>
      <Button
        className='rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity'
        variant='ghost'
        size='icon'
        onClick={onDelete}>
        <Trash className='w-4 h-4 opacity-50' />
      </Button>
      {folder.isStar ? (
        <Button
          className='rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity'
          variant='ghost'
          size='icon'
          onClick={onRemoveStar}>
          <Star className='w-4 h-4 fill-amber-400 text-amber-400' />
        </Button>
      ) : (
        <Button
          className='rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity'
          variant='ghost'
          size='icon'
          onClick={onAddStar}>
          <Star className='w-4 h-4 opacity-50' />
        </Button>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className='rounded-full cursor-pointer'
            variant='ghost'
            size='icon'>
            <MoreVertical className='w-4 h-4' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-50 px-0 py-2'>
          <ul className='flex flex-col'>
            <li className='w-full'>
              <Button
                variant='ghost'
                size='sm'
                className='w-full justify-start items-center gap-2 px-3 text-sm rounded-none hover:bg-secondary dark:hover:bg-background cursor-pointer'
                onClick={onDownload}>
                <Download className='w-4 h-4' />
                <span>Download</span>
              </Button>
            </li>
            <li className='w-full'>
              <Button
                variant='ghost'
                size='sm'
                className='w-full justify-start items-center gap-2 px-3 text-sm rounded-none hover:bg-secondary dark:hover:bg-background cursor-pointer'
                onClick={onStartEditing}>
                <Pencil className='w-4 h-4' />
                <span>Rename</span>
              </Button>
            </li>
            <Separator className='my-1' />
            <li className='w-full'>
              <Button
                variant='ghost'
                size='sm'
                className='w-full justify-start items-center gap-2 px-3 text-sm rounded-none hover:bg-secondary dark:hover:bg-background cursor-pointer'
                onClick={onShare}>
                <UserPlus className='w-4 h-4' />
                <span>Share</span>
              </Button>
            </li>
            <li className='w-full'>
              <Button
                variant='ghost'
                size='sm'
                className='w-full justify-start items-center gap-2 px-3 text-sm rounded-none hover:bg-secondary dark:hover:bg-background cursor-pointer'
                onClick={onDelete}>
                <Trash className='w-4 h-4' />
                <span>Move to trash</span>
              </Button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  )
}
