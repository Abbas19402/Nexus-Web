import { SWITCH_LAYOUT } from '@/Redux/Reducers/LayoutSwitch';
import Avatar from '@/components/Avatar';
import { useState } from 'react';
import ChatHeaderMenu from '@/components/Context/ChatHeaderMenu';
import Icons from '@/components/Icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '@/components/Modals';

const ChatHeader = ({ chatSelected , setChatSelected }) => {
  const dispatch = useDispatch();
  const activeChatUser = useSelector(state => state.chat.activeUser)

  console.log(activeChatUser);

  const [ contextStatus , setContextStatus ] = useState(false);

  return (
    <div className='w-full h-full p-2 z-10' onClick={()=> {if(contextStatus) setContextStatus(false)}}>
      <div className="w-full h-full flex flex-row items-center justify-between px-4">
        <div className='w-fit flex flex-row justify-center items-center gap-x-4'>    
          <Icons.Back className="w-7 h-9 aspect-auto fill-white lg:hidden" onClick={()=> {
            dispatch(SWITCH_LAYOUT('core'))
            setChatSelected(false)
          }}/>
          <Avatar.regular 
            imageUrl={`https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`} 
          />
          <div className="mx-2">
            <span className="text-white tracking-wide font-medium">{activeChatUser? activeChatUser.displayName : 'Currently No active chats'}</span>
          </div>
        </div>
        <div className="flex justify-end items-center gap-x-3">
          
          <div className='p-2'>
            <Icons.More className="fill-white h-5 w-5" onClick={()=> setContextStatus(!contextStatus)}/>
          </div>
        </div>
        <div className={`${contextStatus ? 'opacity-100 scale-100' : 'scale-90 opacity-0'} transition-all duration-300 top-16 right-16 absolute`}>
          <ChatHeaderMenu />
        </div>
      </div>
    </div>
  )
}

export default ChatHeader