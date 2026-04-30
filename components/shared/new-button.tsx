'use client'

import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Plus } from 'lucide-react'
import { PopoverActions } from './popover-actions'

export function NewButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='flex items-center gap-3 w-28 h-12 rounded-3xl mb-6 cursor-pointer'>
          <Plus className='w-5 h-5' />
          <span>New</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align='start'
        alignOffset={-1}
        className='bg-white dark:bg-secondary px-0 py-2 rounded'>
        <PopoverActions />
      </PopoverContent>
    </Popover>
  )
}
