import { SignIn } from '@clerk/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In - Google Drive',
  description: 'Sign in to your account to start using Google drive'
}

export default function Page() {
  return <SignIn />
}
