import { HelpCircle, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ModeToggle } from './mode-toggle'

export function Navbar() {
  // const { userId } = auth()

  return (
    <div className='border-b bg-background/50 backdrop-blur-sm sticky top-0 z-10'>
      <div className='flex items-center justify-between py-4 px-6'>
        <Link href='/' className='flex items-center gap-2.5'>
          <Image
            className='w-9 h-9'
            src='/logo.svg'
            alt='Logo'
            width={36}
            height={36}
          />
          <span className='text-2xl opacity-70'>Drive</span>
        </Link>

        <div className='flex items-center gap-2'>
          <ModeToggle />

          <div className='flex items-center gap-2'>
            <Button variant='outline'>
              <HelpCircle />
            </Button>
            <Button variant='outline'>
              <Settings />
            </Button>
          </div>

          {/* {userId ? (
            <UserBox />
          ) : (
            <Avatar>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )} */}
        </div>
      </div>
    </div>
  )
}
