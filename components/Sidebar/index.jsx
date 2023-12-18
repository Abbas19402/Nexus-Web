import React from 'react'
import Card from '../Card'
import { useDispatch } from 'react-redux'
import { SWITCH_LAYOUT } from '@/Redux/Reducers/LayoutSwitch';
import { useRouter } from 'next/router';

const Sidebar = ({ setChatSelected , chatSelected }) => {
  const dispatch = useDispatch();
  const router = useRouter()
  return (
    <div className='w-full h-full flex flex-col justify-start px-2 py-2 gap-y-3.5'>
      {[...Array(10)].map((_,key) => {
        return <div onClick={() => {
          setChatSelected(true)
          router.push('/')
          dispatch(SWITCH_LAYOUT('chat'))
        }}>
          <Card.Chat key={key}/>
        </div>
      })}
    </div>
  )
}

export default Sidebar