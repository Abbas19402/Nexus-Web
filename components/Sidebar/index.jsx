import React, { useContext, useEffect, useState } from 'react'
import Card from '../Card'
import { useDispatch } from 'react-redux'
import { SWITCH_LAYOUT } from '@/Redux/Reducers/LayoutSwitch';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SET_ACTIVE_CHAT_USER } from '@/Redux/Reducers/Chat/chatReducer';
import { SocketContext } from '@/context/Socket/SocketContext';

const Sidebar = ({ setChatSelected , chatSelected }) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const socket = useContext(SocketContext)
  const currentLayout = useSelector(state => state.layoutSwitch.layout)

  const [ chats,  setChats  ] = useState([])
  const [ recipientSocket, setRecipientSocket ] = useState("")
  const [ activeChat, setActiveChat ] = useState({
    status: false,
    chat_index: -1
  })

  const user = useSelector(state => state.auth.user)
  const loginStatus = useSelector(state => state.auth.loginStatus)

  const fetchChats = async() => {
    const { data:fetchedChatsAsCreator } = await axios.request({
      method: 'POST',
      url: "http://localhost:5000/api/chat/fetch",
      data: {
        uid: user.user_id,
        type: 'owner'
      }
    })
    const { data:fetchedChatsAsRecipient } = await axios.request({
      method: 'POST',
      url: "http://localhost:5000/api/chat/fetch",
      data: {
        uid: user.user_id,
        type: 'member'
      }
    })
    setChats([...fetchedChatsAsCreator.data,...fetchedChatsAsRecipient.data])
  }

  const handleChat = (index) => {
    console.log(chats[index])
    setChatSelected(true)
    if(currentLayout !== 'chat') dispatch(SWITCH_LAYOUT('chat'))
    dispatch(SET_ACTIVE_CHAT_USER({
      user: chats[index].user_2,
      room: chats[index].room_id
    }))
    setActiveChat({
      status: true,
      chat_index:index
    })
    socket.emit('getRecipientSocketId',{recipientUserId: chats[index].user_2.user_id},(recipientSID) => { 
      console.log("RSID -> ",recipientSID)
      setRecipientSocket(recipientSID)
    })
    socket.emit('joinRoom',{
      room_id: chats[index].room_id,
      recipientSocket: recipientSocket
    })
    router.push('/')
  }

  useEffect(()=> {
    if(loginStatus) fetchChats()
  },[])
  return (
    <div className='w-full h-full flex flex-col justify-start px-2 py-2 gap-y-3.5'>
      {chats.map((item,key) => {
        return <div onClick={() => {
            if(socket) {
              handleChat(key)
            }
          }}>
          <div>
            <Card.Chat key={key}
              name={item.user_2.displayName}
              activeChat={activeChat}
              setActiveChat={setActiveChat}
              currentIndex={key}
            />
          </div>
        </div>
      })}
    </div>
  )
}

export default Sidebar