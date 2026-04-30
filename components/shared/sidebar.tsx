import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { SIDEBAR_LINKS } from '@/config/sidebar.links'
import Link from 'next/link'
import { NewButton } from './new-button'

export function Sidebar() {
  return (
    <div className='w-72 h-full bg-[#f6f9fc] dark:bg-[#1b1b1b] p-5 border-r'>
      <div className='flex flex-col'>
        <NewButton />

        <div className='flex flex-col gap-6'>
          {SIDEBAR_LINKS.map(link => (
            <Link
              href={link.path}
              key={link.label}
              className='flex items-center gap-3 text-sm rounded-full px-4 p-2 hover:bg-background dark:hover:bg-secondary'>
              <link.icon className='w-4 h-4' />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        <div className='flex flex-col gap-3 mt-6'>
          <Progress value={30} />
          <span className='text-sm opacity-80'>20 MB of 1.5 GB used</span>
          <Button className='h-12 rounded-2xl cursor-pointer' variant='outline'>
            Get more storage
          </Button>
        </div>
      </div>
    </div>
  )
}
