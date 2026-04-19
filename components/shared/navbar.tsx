import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { HelpCircle, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export function Navbar() {
  // const { userId } = auth()

  return (
    <div className='sticky top-0 z-50 w-full h-16 bg-[#f6f9fc] dark:bg-[#1b1b1b] flex items-center justify-between px-6 border-b'>
      <Link href='/' className='flex items-center gap-2'>
        <Image
          className='w-9 h-9'
          src='/logo.svg'
          alt='Logo'
          width={36}
          height={36}
        />
        <span className='text-xl opacity-80'>Drive</span>
      </Link>

      <div className='flex items-center gap-3'>
        <ModeToggle />

        <div className='flex items-center gap-2'>
          <Button variant='ghost' className='cursor-pointer'>
            <HelpCircle />
          </Button>
          <Button variant='ghost' className='cursor-pointer'>
            <Settings />
          </Button>
        </div>

        <UserButton />
      </div>
    </div>
  )
}
