import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { FileUp, Folder, FolderUp } from 'lucide-react'

export function PopoverActions() {
  return (
    <>
      <ul className='flex flex-col gap-2'>
        <li>
          <Button className='w-full cursor-pointer'>
            <Folder />
            <span>New Folder</span>
          </Button>
        </li>
        <Separator />
        <li>
          <Button className='w-full cursor-pointer'>
            <FileUp />
            <span>File Upload</span>
          </Button>
        </li>
        <li>
          <Button className='w-full cursor-pointer'>
            <FolderUp />
            <span>Folder Upload</span>
          </Button>
        </li>
      </ul>
    </>
  )
}
