import { Navbar } from '@/components/shared/navbar'
import { Sidebar } from '@/components/shared/sidebar'
import { ChildProps } from '@/types'

export default function AuthLayout({ children }: ChildProps) {
  return (
    <div className='relative'>
      <Navbar />
      <Sidebar />
      <main className='flex items-center justify-center w-full h-[90vh] z-50 relative'>
        {children}
      </main>
    </div>
  )
}
