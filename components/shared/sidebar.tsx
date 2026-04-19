import { Button } from '@/components/ui/button'
import { SIDEBAR_LINKS } from '@/config/sidebar.links'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
  return (
    <div className='w-72 h-full bg-[#f6f9fc] dark:bg-[#1b1b1b] p-5 border-r'>
      <div className='flex flex-col'>
        <Button className='w-fit h-12 rounded-full px-4 mb-8 cursor-pointer'>
          <Plus />
          <span>New</span>
        </Button>

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
      </div>
    </div>
  )
}
