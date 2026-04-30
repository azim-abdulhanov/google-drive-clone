'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useFolder } from '@/hooks/use-folder'
import { FileUp, Folder, FolderUp } from 'lucide-react'

export function PopoverActions() {
  const { onOpen } = useFolder()

  return (
    <ul className='flex flex-col'>
      <li className='w-full'>
        <Button
          variant='ghost'
          size='sm'
          className='w-full justify-start px-3 text-sm rounded-none hover:bg-secondary dark:hover:bg-background cursor-pointer'
          onClick={onOpen}>
          <Folder className='mr-2' />
          New Folder
        </Button>
      </li>
      <Separator className='my-2' />
      <li className='w-full'>
        <Button
          variant='ghost'
          size='sm'
          className='w-full justify-start px-3 text-sm rounded-none hover:bg-secondary dark:hover:bg-background cursor-pointer'>
          <FileUp className='mr-2' />
          Upload File
        </Button>
      </li>
      <li className='w-full'>
        <Button
          variant='ghost'
          size='sm'
          className='w-full justify-start px-3 text-sm rounded-none hover:bg-secondary dark:hover:bg-background cursor-pointer'>
          <FolderUp className='mr-2' />
          Upload Folder
        </Button>
      </li>
    </ul>
  )
}
