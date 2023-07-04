import React from 'react'

const ChatCard = () => {
  return (
    <div className="ring-2 ring-gray-600 p-[3px] rounded-xl w-full h-fit ">
        <div className="bg-gray-900 w-full py-2 lg:py-2.5 rounded-xl flex flex-row justify-start gap-x-4 items-center px-4">
            <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            />
            <span className='text-white'>Peter Parker</span>
        </div>
    </div>
  )
}

export default ChatCard