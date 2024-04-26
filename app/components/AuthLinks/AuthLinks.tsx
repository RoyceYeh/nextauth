'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const AuthLinks = () => {
  const router = useRouter()
  const { data: session, status, data: loading } = useSession()

  useEffect(() => {
    if (!session && !loading) {
      router.push('/')
    }
  }, [session, loading, router])

  return (
    <>
      {status === 'authenticated' ? (
        <Link href="/" onClick={() => signOut()} className="text-2xl md:text-base">
          Logout
        </Link>
      ) : (
        <Link href="/login" className="text-2xl md:text-base">
          Login
        </Link>
      )}
    </>
  )
}

export default AuthLinks
