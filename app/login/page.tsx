'use client'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async () => {
    // 執行登入，將用戶名和密碼提交
    const result = await signIn('credentials', {
      username,
      password,
      redirect: false, // 如果驗證成功，我們將在後面處理重定向
    })

    if (result && !result.error) {
      // 登入成功，處理重定向
      console.log('成功')
      router.push('/') // 這裡示範跳轉到首頁
    } else {
      // 登入失敗，顯示錯誤訊息
      console.error('Sign in error:', result ? result.error : 'Unknown error')
    }
  }
  return (
    <div className="w-full max-w-md m-auto mt-32 h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className=" mt-3 mb-3 p-5 rounded-md border-0 text-white bg-neutral-700 font-bold flex justify-center	items-center cursor-pointer	" onClick={() => signIn('github')}>
          singn in the github
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSignIn}>
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
