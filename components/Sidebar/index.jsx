import React, { useEffect, useState } from 'react'
import Card from '../Card'
import { useDispatch } from 'react-redux'
import { SWITCH_LAYOUT } from '@/Redux/Reducers/LayoutSwitch';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SET_ACTIVE_CHAT_USER } from '@/Redux/Reducers/Chat/chatReducer';

const Sidebar = ({ setChatSelected , chatSelected }) => {
  const dispatch = useDispatch();
  const router = useRouter()

  const [ chats,  setChats  ] = useState([])
  const [ activeChat, setActiveChat ] = useState({
    status: false,
    chat_index: -1
  })

  const user = useSelector(state => state.auth.user)
  const loginStatus = useSelector(state => state.auth.loginStatus)

  const fetchChats = async() => {
    console.log(user)
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

  useEffect(()=> {
    if(loginStatus) fetchChats()
  },[])
  return (
    <div className='w-full h-full flex flex-col justify-start px-2 py-2 gap-y-3.5'>
      {chats.map((item,key) => {
        return <div onClick={() => {
          setChatSelected(true)
          router.push('/')
          dispatch(SWITCH_LAYOUT('chat'))
          dispatch(SET_ACTIVE_CHAT_USER(item.user_2))
        }}>
          <div onClick={()=> {
            setActiveChat({
              status: true,
              chat_index:key
            })
          }}>
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