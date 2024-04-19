import Link from 'next/link'
import AuthLinks from '../AuthLinks/AuthLinks'

export default function Navbar() {
  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <Link href="/" className="text-xl">
          My Site
        </Link>
      </div>
      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li className="md:p-4 py-3 px-0 block">
              <Link href="/">Home</Link>
            </li>
            <li className="md:p-4 py-3 px-0 block">
              <Link href="/profile">Profile</Link>
            </li>
            <li className="md:p-4 py-3 px-0 block">
              <Link href="/post">Post</Link>
            </li>
            <li className="md:p-4 py-3 px-0 block">
              <Link href="/news">News</Link>
            </li>
            <li className="md:p-4 py-3 px-0 block">
              <AuthLinks />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
