import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { FileUp, Folder, FolderUp } from 'lucide-react'

export function PopoverActions() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2 hover:bg-secondary transition text-sm'>
        <Button
          variant='ghost'
          className='flex items-center gap-3 cursor-pointer'>
          <Folder className='w-5 h-5' />
          <span>New Folder</span>
        </Button>
      </div>
      <Separator />
      <div className='flex items-center gap-2 hover:bg-secondary transition text-sm'>
        <Button
          variant='ghost'
          className='flex items-center gap-3 cursor-pointer'>
          <FileUp className='w-5 h-5' />
          <span>File Upload</span>
        </Button>
      </div>
      <div className='flex items-center gap-2 hover:bg-secondary transition text-sm'>
        <Button
          variant='ghost'
          className='flex items-center gap-3 cursor-pointer'>
          <FolderUp className='w-5 h-5' />
          <span>Folder Upload</span>
        </Button>
      </div>
    </div>
  )
}
