import React , { useState } from 'react'
import ChatHeader from './Header/ChatHeader'
import MessageBox from './Message Box'
import { useSelector } from 'react-redux'

const Chat = ({ chatSelected , setChatSelected }) => {
  const [ chats , setChats ] = useState([]);
  return (
    <div className="w-full h-full flex flex-col divide-y-[1px] divide-gray-700 px-2 bg-black">
      <div className="h-full w-full">
        {/* Chat Header */}
        <div className="h-20 w-full">
          <ChatHeader chatSelected={chatSelected} setChatSelected={setChatSelected}/>
        </div>

        {/* Chats */}
        <div id='chatBox' className='w-full h-[80vh] md:h-[calc(100vh-10rem)] overflow-y-scroll flex flex-col align-bottom'>
          {chats.map( (item, index) => (
            <div key={index} id={item.messageFrom} className="w-full my-2 h-fit text-gray-300">
              <div className={`flex flex-col w-fit m-2 rounded ${item.messageFrom == 'sender' ? 'float-right bg-gray-800' : 'float-left bg-sky-800'}`}>
                <div className={`w-fit max-w-[12rem] lg:max-w-xs h-full flex flex-col gap-y-2 justify-start items-start py-2 text-wrap relative mx-2`}>
                  <span className='text-sm font-bold tracking-tight'>{item.senderName}</span>
                  <span>{item.message}</span>
                </div>
              </div>
            </div>
          ) )}
        </div>
      </div>

      {/* Message Typing Box */}
      <div className='text-white w-full h-[4rem] flex flex-col justify-end pb-1'>
        <MessageBox chatBox={document.getElementById('chatBox')} setChats={setChats}/>
      </div>
    </div>
  )
}

export default Chat