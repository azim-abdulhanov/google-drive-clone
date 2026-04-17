import { Navbar } from '@/components/shared/navbar'
import { ChildProps } from '@/types'

export function AuthLayout({ children }: ChildProps) {
  return (
    <>
      <Navbar />
      <div>Sidebar</div>
      {children}
    </>
  )
}
