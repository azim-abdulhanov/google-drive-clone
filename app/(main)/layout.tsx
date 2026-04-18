import { Navbar } from '@/components/shared/navbar'
import { Sidebar } from '@/components/shared/sidebar'
import React from 'react'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Sidebar />
      <Navbar />
      {children}
    </div>
  )
}
