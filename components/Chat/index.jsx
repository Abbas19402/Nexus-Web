import React , { useState } from 'react'
import ChatHeader from './Header/ChatHeader'
import MessageBox from './Message Box'
import { useSelector } from 'react-redux'
import jwt from 'jsonwebtoken'

const Chat = ({ chatSelected , setChatSelected }) => {
  const user = useSelector(state => state.auth.user);

  const [ message , setMessage ] = useState(null);
  const [ chats , setChats ] = useState([
    {
      message: 'How are you doing?',
      messageFrom: 'sender',
      sentBy: ''
    },
    {
      message: 'Im Fine!!',
      messageFrom: 'reciever',
      sentBy: ''
    },
    {
      message: 'Good Man!!',
      messageFrom: 'sender',
      sentBy: ''
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
              <div className={`flex flex-col w-fit m-2 rounded ${item.messageFrom == 'sender' ? 'float-right bg-gray-800' : 'float-left bg-sky-800'}`}>
                <div className={`w-fit max-w-xs h-full flex justify-start items-center py-2 text-wrap relative mx-2`}>
                  {item.message}
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