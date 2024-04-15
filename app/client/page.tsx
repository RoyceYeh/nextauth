'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function ClientPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/client')
    },
  })

  if (status === 'authenticated') {
    return <p>Signed in as {session.user?.email}</p>
  }
}
