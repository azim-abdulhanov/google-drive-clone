import { ChildProps } from '@/types'

export default function AuthLayout({ children }: ChildProps) {
  return (
    <div className='flex items-center justify-center h-screen'>{children}</div>
  )
}
