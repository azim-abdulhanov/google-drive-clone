import { SignUp } from '@clerk/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up - Google Drive',
  description: 'Create an account to start using Google drive'
}

export default function Page() {
  return <SignUp />
}
