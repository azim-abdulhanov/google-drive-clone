import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'
import { SIDEBAR_LINKS } from '@/config/sidebar.links'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { PopoverActions } from './popover-actions'

export function Sidebar() {
  return (
    <div className='w-72 h-full bg-[#f6f9fc] dark:bg-[#1b1b1b] p-5 border-r'>
      <div className='flex flex-col'>
        <Popover>
          <PopoverTrigger asChild>
            <Button className='w-fit h-12 rounded-full px-4 mb-8 cursor-pointer'>
              <Plus />
              <span>New</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className='p-3 bg-white dark:bg-[#2a2a2a] rounded-lg shadow-md'>
            <PopoverActions />
          </PopoverContent>
        </Popover>

        <div className='flex flex-col gap-6'>
          {SIDEBAR_LINKS.map(link => (
            <Link
              href={link.path}
              key={link.label}
              className='flex items-center gap-3 text-sm font-medium hover:bg-secondary rounded-lg p-2 opacity-80 hover:opacity-100 transition-colors'>
              <link.icon className='w-5 h-5' />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        <div className='flex flex-col gap-2 mt-6'>
          <Progress value={30} />
          <span>20 MB of 1.5 GB used</span>
          <Button className='h-12 rounded-full cursor-pointer'>
            Get more storage
          </Button>
        </div>
      </div>
    </div>
  )
}
