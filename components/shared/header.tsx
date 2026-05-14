'use client'

import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { useLayout } from '@/hooks/use-layout'
import {
  ChevronDown,
  Info,
  LayoutPanelLeft,
  TableProperties
} from 'lucide-react'
import { PopoverActions } from './popover-actions'

interface Props {
  label: string
  isHome?: boolean
}

export function Header({ label, isHome }: Props) {
  const { layout, setLayout } = useLayout()

  return (
    <div className='flex items-center justify-between mb-4'>
      {isHome ? (
        <Popover>
          <PopoverTrigger>
            <div className='flex items-center gap-2 px-4 py-2 hover:bg-secondary rounded-full cursor-pointer transition-colors'>
              <h2 className='text-xl tracking-tight'>{label}</h2>
              <ChevronDown />
            </div>
          </PopoverTrigger>
          <PopoverContent className='px-0 py-2'>
            <PopoverActions />
          </PopoverContent>
        </Popover>
      ) : (
        <h2 className='text-xl tracking-tight'>{label}</h2>
      )}

      {isHome && (
        <div className='flex items-center gap-2'>
          {layout === 'list' ? (
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setLayout('grid')}>
              <TableProperties className='w-4 h-4' />
            </Button>
          ) : (
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setLayout('list')}>
              <LayoutPanelLeft className='w-4 h-4' />
            </Button>
          )}
          <Button variant='ghost' size='icon' onClick={() => setLayout('list')}>
            <Info className='w-4 h-4' />
          </Button>
        </div>
      )}
    </div>
  )
}
