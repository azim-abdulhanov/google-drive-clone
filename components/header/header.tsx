import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

export function Header() {
  return (
    <header className='flex justify-end items-center p-4 gap-4 h-16'>
      <Show when='signed-out'>
        <SignInButton />
        <SignUpButton>
          <button className='bg-blue-600 text-white rounded-full font-medium text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-5 cursor-pointer'>
            Sign Up
          </button>
        </SignUpButton>
      </Show>
      <Show when='signed-in'>
        <UserButton />
      </Show>
    </header>
  )
}
