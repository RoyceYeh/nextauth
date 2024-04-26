'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import { useState } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import styles from './styles.module.css'

const WritePage = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'], // 粗體, 斜體, 底線, 刪除線
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
      [{ header: 1 }, { header: 2 }, { header: 3 }], // 標題
      [{ size: ['small', false, 'large', 'huge'] }], // 內文尺寸，false 表示預設值
    ],
  }

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/client')
    },
  })
  if (status === 'authenticated') {
    return (
      <section className="bg-[#f0f0f0] pt-8">
        <div className="container ml-auto mr-auto max-w-[1280px]  flex flex-col bg-[#fff] p-9 w-[90%]">
          <input type="text" placeholder="Title" className="text-3xl pb-4" />
          <div className="flex gap-5 h-full relative flex-col pt-5">
            <button className="w-9 h-9 rounded-full bg-transparent border flex items-center justify-center cursor-pointer" onClick={() => setOpen(!open)}>
              <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
            {open && (
              <div className="flex gap-5 absolute z-10 w-[100%] left-12">
                <button className="w-9 h-9 rounded-full bg-transparent border flex items-center justify-center cursor-pointer bg-[#1a8917]">
                  <label htmlFor="image">
                    <Image src="/image.png" alt="" width={16} height={16} />
                  </label>
                </button>
                <button className="w-9 h-9 rounded-full bg-transparent border flex items-center justify-center cursor-pointer bg-[#1a8917]">
                  <Image src="/external.png" alt="" width={16} height={16} />
                </button>
                <button className="w-9 h-9 rounded-full bg-transparent border flex items-center justify-center cursor-pointer bg-[#1a8917]">
                  <Image src="/video.png" alt="" width={16} height={16} />
                </button>
              </div>
            )}
            <ReactQuill className={`w-[100%] text-xl h-[1000px]  ${styles.bubble}`} theme="bubble" value={value} onChange={setValue} placeholder="Tell your story..."></ReactQuill>
            <button className="absolute top-0 right-0 px-4 py-2 border-none bg-[#000] text-zinc-50 cursor-pointer  rounded-full z-20">Publish</button>
          </div>
        </div>
      </section>
    )
  }
}

export default WritePage
