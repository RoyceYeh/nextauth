'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function ProfilePage() {
  const {
    data: session,
    status,
    update,
  } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/client')
    },
  })

  if (status === 'authenticated') {
    if (!session || !session.user) {
      return <p>Loading...</p> // 或其他提示，視情況而定
    }
    return (
      <>
        <p>Signed in as {session.user.name}</p>
        {console.log(session, status)}

        {/* Update the value by sending it to the backend. */}
        <button onClick={() => update({ name: 'John Doe' })}>Edit name</button>

        <button onClick={() => update()}>Edit name</button>
      </>
    )
  }

  return <a href="/api/auth/signin">Sign in</a>
}
