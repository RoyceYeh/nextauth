import React from 'react'

const Footer = () => {
  return (
    <div className="pt-10 bg-[#f0f0f0]">
      <div className="container max-w-[1580px] mx-auto pr-4 pl-4 ">
        <div className="content flex flex-col items-center justify-between lg:flex-row ">
          <a href="#" className="text-4xl font-bold mb-6">
            My Site
          </a>
          <ul className="flex items-center gap-[5%]  justify-start max-w-[310px] w-[100%] flex-wrap lg:max-w-[100%] lg:w-[40%] lg:flex-nowrap lg:justify-end">
            <li className="w-[45%] pl-5">
              <a href="#" className="text-lg flex text-[#333] font-bold  items-center gap-[10px] pb-1 ">
                <span className="text-sm bg-gradient-to-br from-[#ef5d35] to-[#ffdd80] bg-clip-text text-transparent	">●</span>
                NEWS
              </a>
            </li>
            <li className="w-[45%] pl-5">
              <a href="#" className="text-lg flex text-[#333] font-bold items-center	 gap-[10px] pb-1">
                <span className="text-sm bg-gradient-to-br from-[#ef5d35] to-[#ffdd80] bg-clip-text text-transparent	">●</span>
                Works
              </a>
            </li>
            <li className="w-[45%] pl-5">
              <a href="#" className="text-lg flex text-[#333] font-bold items-center	 gap-[10px] pb-1">
                <span className="text-sm bg-gradient-to-br from-[#ef5d35] to-[#ffdd80] bg-clip-text text-transparent	">●</span>
                About
              </a>
            </li>
            <li className="w-[45%] pl-5">
              <a href="#" className="text-lg flex text-[#333] font-bold  items-center gap-[10px] pb-1">
                <span className="text-sm bg-gradient-to-br from-[#ef5d35] to-[#ffdd80] bg-clip-text text-transparent	">●</span>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div className="container max-w-[1580px] mx-auto pr-4 pl-4 py-4 mt-5 ">
          <p className="text-center	 text-sm color-[#333]">Copyright © 2023 傑森全球整合行銷股份有限公司</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
