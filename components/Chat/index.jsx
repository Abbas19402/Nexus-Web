import React , { useEffect, useState } from 'react'
import ChatHeader from './Header/ChatHeader'
import Icons from '../Icons'
import MessageBox from './Message Box'

const Chat = ({ chatSelected , setChatSelected }) => {
  const [ message , setMessage ] = useState(null);
  const [ chats , setChats ] = useState([
    {
      message: 'How are you doing?',
      messageFrom: 'sender'
    },
    {
      message: 'Im Fine!!',
      messageFrom: 'reciever'
    },
    {
      message: 'Good Man!!',
      messageFrom: 'sender'
    },
  ]);
  return (
    <div className="w-full h-full flex flex-col divide-y-[1px] divide-gray-700 px-2">
      <div className="h-full w-full">
        {/* Chat Header */}
        <div className="h-20 w-full">
          <ChatHeader chatSelected={chatSelected} setChatSelected={setChatSelected}/>
        </div>

        {/* Chats */}
        <div id='chatBox' className='w-full h-[calc(100vh-10rem)] border-2 overflow-y-scroll flex flex-col align-bottom'>
          {chats.map( (item, index) => (
            <div key={index} id={item.messageFrom} className="w-full my-2 h-fit text-gray-300">
              <div className={`w-fit max-w-xs h-full rounded-lg flex justify-start items-center px-2 py-2 text-wrap relative mx-2 ${item.messageFrom == 'sender' ? 'float-right bg-gray-800' : 'float-left bg-sky-800'}`}>
                {item.message}
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