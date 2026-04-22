'use client'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useClerk, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export function UserBox() {
  const { user } = useUser()
  const { signOut } = useClerk()
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.imageUrl} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' alignOffset={11} forceMount>
        <DropdownMenuItem>
          <span className='text-xs font-medium text-muted-foreground'>
            {user?.emailAddresses[0].emailAddress}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Avatar>
            <AvatarImage src={user?.imageUrl} />
          </Avatar>
          <span className='text-sm font-medium'>{user?.fullName}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => {
            signOut()
            router.push('/sign-in')
          }}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
