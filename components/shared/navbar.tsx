import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <div className='bg-[#f6f9fc] shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='flex items-center justify-between py-4 px-6'>
        <Link href='/' className='flex items-center gap-2'>
          <Image src='/logo.svg' alt='Logo' width={40} height={40} />
          <span className='text-xl text-gray-700 font-medium opacity-75'>
            Drive
          </span>
        </Link>
      </div>
    </div>
  )
}
