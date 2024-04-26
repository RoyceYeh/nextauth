import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className=" pt-10 bg-white">
        <div className=" max-w-[1336px] mx-auto ">
          <div className="flex justify-evenly">
            <main className="max-w-[728px] min-w-[728px] ">
              <div className="pt-12  ">
                <div>
                  <Link href="#" className="flex justify-between border-b border-x-slate-100">
                    <div className="text max-w-[508px] pb-8">
                      <div className="flex pb-4 gap-4">
                        <div className=" text-sm text-[#242424]">fatfish fatfish</div>
                        <div className="text-sm">2023/07/08</div>
                      </div>
                      <div className="title font-bold text-xl pb-4">18 JavaScript One-Liners That’ll Make You Look Like a Pro</div>
                      <div className="text-ellipsis line-clamp-2">A list of one-liners you should know to up your knowledge of JavaScript. — In just a few minutes, step up your JS knowledgeA list of one-liners you should know to up your knowledge of JavaScript. — In just a few minutes, step up your JS knowledge. 1</div>
                    </div>
                    <div className="pic relative w-[125px] h-[125px] mt-9">
                      <Image alt="img" src="/evgen.jpg" fill className=" w-full"></Image>
                    </div>
                  </Link>
                </div>
              </div>
            </main>
            <div className="max-w-[368px] min-w-[368px] min-h-[100vh] border-l border-slate-100 pr-6 pl-10">
              <div className=" relative inline-block w-full h-full ">
                <div className=" top-14 sticky block ">
                  <div className="flex flex-col " style={{ minHeight: `calc(-57px + 100vh)` }}>
                    <div className="w-full">
                      <div className="pb-4 font-bold">Recommended topics</div>
                      <div className="flex  items-start">
                        <div className="flex mb-3 flex-wrap gap-y-4">
                          <Link href="#" className="mr-2 ">
                            <div className="whitespace-nowrap px-4 py-2 rounded-[100px] border">Programming</div>
                          </Link>
                          <Link href="#" className="mr-2 ">
                            <div className="whitespace-nowrap px-4 py-2 rounded-[100px] border">Programming</div>
                          </Link>
                          <Link href="#" className="mr-2 ">
                            <div className="whitespace-nowrap px-4 py-2 rounded-[100px] border">Programming</div>
                          </Link>
                          <Link href="#" className="mr-2 ">
                            <div className="whitespace-nowrap px-4 py-2 rounded-[100px] border">Programming</div>
                          </Link>
                          <Link href="#" className="mr-2 ">
                            <div className="whitespace-nowrap px-4 py-2 rounded-[100px] border">Programming</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
