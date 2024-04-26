'use client'
import Link from 'next/link'
import AuthLinks from '../AuthLinks/AuthLinks'
import Image from 'next/image'
import { useState } from 'react'
export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 border-b border-slate-100	">
      <div className="flex-1 flex justify-between items-center">
        <Link href="/" className="text-xl">
          My Site
        </Link>
      </div>
      {!toggle ? (
        <div
          className="pointer-cursor md:hidden block "
          onClick={() => {
            setToggle(true)
          }}
        >
          <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </div>
      ) : (
        <div
          className="pointer-cursor md:hidden block "
          onClick={() => {
            setToggle(false)
          }}
        >
          <Image alt="x" src="./x_icon.svg" width={30} height={30}></Image>
        </div>
      )}
      {!toggle ? (
        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li className="md: py-2 px-3 block">
                <Link href="/">Home</Link>
              </li>
              <li className="md: py-2 px-3 block">
                <Link href="/profile">Profile</Link>
              </li>
              <li className="md: py-2 px-3 block">
                <Link href="/news">News</Link>
              </li>
              <li className="md: py-2 px-3 block">
                <Link href="/write" className="flex items-center gap-2">
                  <Image src="/write.svg" width={20} height={20} alt="write icon" />
                  Write
                </Link>
              </li>
              <li className="md: py-2 px-3 block">
                <AuthLinks />
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="w-full h-[100vh] mt-4 border-t flex flex-col items-center  md:hidden " id="menu">
          <nav className="pt-[20vh]">
            <ul className="flex items-center  flex-col text-base text-gray-700 pt-4">
              <li className="py-4 px-3 block">
                <Link href="/" className="text-2xl">
                  Home
                </Link>
              </li>
              <li className="py-4 px-3 block">
                <Link href="/profile" className="text-2xl">
                  Profile
                </Link>
              </li>
              <li className="py-4 px-3 block">
                <Link href="/news" className="text-2xl">
                  News
                </Link>
              </li>
              <li className="py-4 px-3 block">
                <Link href="/write" className="flex items-center gap-2 text-2xl">
                  <Image src="/write.svg" width={20} height={20} alt="write icon" />
                  Write
                </Link>
              </li>
              <li className="py-4 px-3 block">
                <AuthLinks />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
