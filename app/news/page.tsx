'use client'
import { redirect, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

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
          <div className="title">
            <div className="container ml-auto mr-0 max-w-[1740px] w-[90%] pl-4 pr-4">
              <h2 className=" text-6xl font-bold">NEWS</h2>
              <p className=" text-xl font-bold text-[#333]">最新消息</p>
              {/* Breadcrumb */}
              <div className="flex mb-2 justify-end lg:max-w-[1440px] lg:w-[95%] lg:pl-[8vw] lg:ml-auto lg:mr-0 lg:pr-[16vw] ">
                <ol className="inline-flex items-center space-x-1 lg:space-x-2">
                  <li className="inline-flex items-center">
                    <a href="#" className="text-gray-700 hover:text-gray-900 inline-flex items-center text-base">
                      <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                      首頁
                    </a>
                  </li>
                  <li>/</li>
                  <li>
                    <div className="flex items-center">
                      <a href="#" className="text-gray-700 text-base hover:text-gray-900 ml-1 lg:ml-2 -sm font-medium">
                        最新消息
                      </a>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="content ml-auto mr-auto pt-[3.25vw] pb-[5.25vw] bg-[#fff] max-w-[1740px] w-[90%] lg:ml-auto lg:mr-0 lg:pt-16 lg:pr-[15vw] lg:pb-20 lg:pl-[6vw]">
            <div className="container ml-auto mr-auto max-w-[1412px] w-[100%] pl-4 pr-4">
              <ul>
                <li>
                  <a href="#" className=" py-6 pb-2 flex flex-col relative border-b group lg:py-6 lg:flex-row	">
                    {/* pic */}
                    <div className="max-w-[100%] h-[52vw] w-[100%] mr-7 lg:max-w-[230px] lg:h-[175px] ">
                      <div className="bg-[url('https://images.unsplash.com/photo-1713283365745-a727fb26c52f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-full bg-cover bg-center bg-no-repeat"></div>
                    </div>
                    {/* date */}
                    <div className=" mt-4 w-full text-base	leading-normal font-semibold text-gray-500 lg:w-[15%]">Dec 18.2023</div>
                    <p className=" mt-4 max-w-[1240px] text-lg font-semibold text-justify lg:w-[60%] ">原民會首次舉辦「2023年南島民族女性意見領袖論壇」 實地走訪原民部落交流體驗</p>
                    <span className="duration-500 ease-linear text-4xl text-[#333] leading-normal flex justify-end group-hover:text-[#ff7212] lg:items-end">→</span>
                  </a>
                </li>
                <li>
                  <a href="#" className=" py-6 pb-2 flex flex-col relative border-b group lg:py-6 lg:flex-row	">
                    {/* pic */}
                    <div className="max-w-[100%] h-[52vw] w-[100%] mr-7 lg:max-w-[230px] lg:h-[175px] ">
                      <div className="bg-[url('https://images.unsplash.com/photo-1713283365745-a727fb26c52f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-full bg-cover bg-center bg-no-repeat"></div>
                    </div>
                    {/* date */}
                    <div className=" mt-4 w-full text-base	leading-normal font-semibold text-gray-500 lg:w-[15%]">Dec 18.2023</div>
                    <p className=" mt-4 max-w-[1240px] text-lg font-semibold text-justify lg:w-[60%] ">原民會首次舉辦「2023年南島民族女性意見領袖論壇」 實地走訪原民部落交流體驗</p>
                    <span className="duration-500 ease-linear text-4xl text-[#333] leading-normal flex justify-end group-hover:text-[#ff7212] lg:items-end">→</span>
                  </a>
                </li>
                <li>
                  <a href="#" className=" py-6 pb-2 flex flex-col relative border-b group lg:py-6 lg:flex-row	">
                    {/* pic */}
                    <div className="max-w-[100%] h-[52vw] w-[100%] mr-7 lg:max-w-[230px] lg:h-[175px] ">
                      <div className="bg-[url('https://images.unsplash.com/photo-1713283365745-a727fb26c52f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-full bg-cover bg-center bg-no-repeat"></div>
                    </div>
                    {/* date */}
                    <div className=" mt-4 w-full text-base	leading-normal font-semibold text-gray-500 lg:w-[15%]">Dec 18.2023</div>
                    <p className=" mt-4 max-w-[1240px] text-lg font-semibold text-justify lg:w-[60%] ">原民會首次舉辦「2023年南島民族女性意見領袖論壇」 實地走訪原民部落交流體驗</p>
                    <span className="duration-500 ease-linear text-4xl text-[#333] leading-normal flex justify-end group-hover:text-[#ff7212] lg:items-end">→</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    )
  }
}
