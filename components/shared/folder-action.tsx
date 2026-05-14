import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { IFolder } from '@/types'
import {
  Download,
  MoreVertical,
  Pencil,
  Star,
  Trash,
  UserPlus
} from 'lucide-react'

interface Props {
  folder: IFolder
}

export function FolderAction({ folder }: Props) {
  return (
    <div className='flex items-center gap-1'>
      <Button
        className='rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity'
        variant='ghost'
        size='icon'>
        <Trash className='w-4 h-4 opacity-50' />
      </Button>
      <Button
        className='rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity'
        variant='ghost'
        size='icon'>
        <Star className='w-4 h-4 opacity-50' />
      </Button>
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
                className='w-full justify-start items-center gap-2 px-3 text-sm rounded-none hover:bg-secondary dark:hover:bg-background cursor-pointer'>
                <Download className='w-4 h-4' />
                <span>Download</span>
              </Button>
            </li>
            <li className='w-full'>
              <Button
                variant='ghost'
                size='sm'
                className='w-full justify-start items-center gap-2 px-3 text-sm rounded-none hover:bg-secondary dark:hover:bg-background cursor-pointer'>
                <Pencil className='w-4 h-4' />
                <span>Rename</span>
              </Button>
            </li>
            <Separator className='my-1' />
            <li className='w-full'>
              <Button
                variant='ghost'
                size='sm'
                className='w-full justify-start items-center gap-2 px-3 text-sm rounded-none hover:bg-secondary dark:hover:bg-background cursor-pointer'>
                <UserPlus className='w-4 h-4' />
                <span>Share</span>
              </Button>
            </li>
            <li className='w-full'>
              <Button
                variant='ghost'
                size='sm'
                className='w-full justify-start items-center gap-2 px-3 text-sm rounded-none hover:bg-secondary dark:hover:bg-background cursor-pointer'>
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
