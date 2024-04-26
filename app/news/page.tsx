'use client'
import { redirect, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function NewsPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/client')
    },
  })
  if (status === 'authenticated') {
    return (
      <>
        <section className=" pt-10 bg-[#f0f0f0]">
          <div className="content ml-auto mr-auto pt-[3.25vw] pb-[5.25vw] bg-[#fff] max-w-[1336px] w-[90%] lg:ml-auto lg:mr-auto lg:pt-16 lg:pr-[15vw] lg:pb-20 lg:pl-[6vw]">
            <div className="container ml-auto mr-auto max-w-[1412px] w-[100%] pl-4 pr-4">
              <ul>
                <li>
                  <Link href="/post" className=" py-6 pb-2 flex flex-col relative border-b group lg:py-6 lg:flex-row	">
                    {/* pic */}
                    <div className="max-w-[100%] h-[52vw] w-[100%] mr-7 lg:max-w-[230px] lg:h-[175px] ">
                      <div className="bg-[url('https://images.unsplash.com/photo-1713283365745-a727fb26c52f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-full bg-cover bg-center bg-no-repeat"></div>
                    </div>
                    {/* date */}
                    <div className=" mt-4 w-full text-base	leading-normal font-semibold text-gray-500 lg:w-[15%]">Dec 18.2023</div>
                    <p className=" mt-4 max-w-[1240px] text-lg font-semibold text-justify lg:w-[60%] ">原民會首次舉辦「2023年南島民族女性意見領袖論壇」 實地走訪原民部落交流體驗</p>
                    <span className="duration-500 ease-linear text-4xl text-[#333] leading-normal flex justify-end group-hover:text-[#ff7212] lg:items-end">→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/post" className=" py-6 pb-2 flex flex-col relative border-b group lg:py-6 lg:flex-row	">
                    {/* pic */}
                    <div className="max-w-[100%] h-[52vw] w-[100%] mr-7 lg:max-w-[230px] lg:h-[175px] ">
                      <div className="bg-[url('https://images.unsplash.com/photo-1713283365745-a727fb26c52f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-full bg-cover bg-center bg-no-repeat"></div>
                    </div>
                    {/* date */}
                    <div className=" mt-4 w-full text-base	leading-normal font-semibold text-gray-500 lg:w-[15%]">Dec 18.2023</div>
                    <p className=" mt-4 max-w-[1240px] text-lg font-semibold text-justify lg:w-[60%] ">原民會首次舉辦「2023年南島民族女性意見領袖論壇」 實地走訪原民部落交流體驗</p>
                    <span className="duration-500 ease-linear text-4xl text-[#333] leading-normal flex justify-end group-hover:text-[#ff7212] lg:items-end">→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/post" className=" py-6 pb-2 flex flex-col relative border-b group lg:py-6 lg:flex-row	">
                    {/* pic */}
                    <div className="max-w-[100%] h-[52vw] w-[100%] mr-7 lg:max-w-[230px] lg:h-[175px] ">
                      <div className="bg-[url('https://images.unsplash.com/photo-1713283365745-a727fb26c52f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-full bg-cover bg-center bg-no-repeat"></div>
                    </div>
                    {/* date */}
                    <div className=" mt-4 w-full text-base	leading-normal font-semibold text-gray-500 lg:w-[15%]">Dec 18.2023</div>
                    <p className=" mt-4 max-w-[1240px] text-lg font-semibold text-justify lg:w-[60%] ">原民會首次舉辦「2023年南島民族女性意見領袖論壇」 實地走訪原民部落交流體驗</p>
                    <span className="duration-500 ease-linear text-4xl text-[#333] leading-normal flex justify-end group-hover:text-[#ff7212] lg:items-end">→</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    )
  }
}
