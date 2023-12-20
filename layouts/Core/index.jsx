import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'
import Styles from "@/styles/Scrollbar.module.css"
import Chat from '@/components/Chat'

const CoreLayout = ({ children }) => {
  const [ chatSelected , setChatSelected ] = useState(false)
  return (
    <div className="bg-[#000002] scroll-smooth h-screen overflow-hidden">
      <div
        className="fixed inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[0rem]"
        aria-hidden="true"
      >
        <div
          className="relative top-[10vh] -z-10 aspect-[1015/492] w-[36.125rem] max-w-none rotate-[10deg] bg-gradient-to-bl from-[#001a5b] to-[#00611a] opacity-70 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='w-full h-full flex flex-row backdrop-blur-lg saturate-100 lg:divide-x-[1.5px] divide-gray-600'>
        <div className='w-full lg:w-[40%] divide-y-[1.5px] divide-gray-600 lg:px-2'>
          <div className="w-full h-20">
            <Header/>
          </div>
          <div className={`min-h-screen h-full lg:w-full overflow-y-auto ${Styles.customScrollbar}`}>
            <div className="w-full h-full lg:hidden ">
              {chatSelected ? <Chat
                setChatSelected={setChatSelected} 
                chatSelected={chatSelected}
              /> : <Sidebar 
                setChatSelected={setChatSelected} 
                chatSelected={chatSelected}
              />}
            </div>
            <div className="hidden lg:block ">
              <Sidebar 
                setChatSelected={setChatSelected} 
                chatSelected={chatSelected}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[100vh] flex-row hidden lg:flex">
          {children}
        </div>
      </div>
    </div>
   
  )
}

export default CoreLayout