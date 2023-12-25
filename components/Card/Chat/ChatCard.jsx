import React from 'react'

const ChatCard = ({ name, activeChat, currentIndex }) => {
  return (
    <div className= {`ring-2 ring-transparent p-[3px] rounded-xl w-full h-fit ${activeChat.status && activeChat.chat_index == currentIndex ? 'bg-neutral-900/50' : 'bg-transparent'} hover:bg-neutral-900/50 hover:cursor-pointer transition-all duration-300`} >
        <div className="w-full py-1 lg:py-1 rounded-xl flex flex-row justify-start gap-x-4 items-center px-4">
            <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            />
            <span className={`${activeChat.status && activeChat.chat_index == currentIndex ? 'text-white' : 'text-neutral-400'} font-medium tracking-wide transition-all duration-300 select-none`}>{name}</span>
        </div>
    </div>
  )
}

export default ChatCard