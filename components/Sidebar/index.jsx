import React from 'react'
import Card from '../Card'
import { useDispatch } from 'react-redux'
import { setLayout } from '@/Redux/Reducers/LayoutSwitch';

const Sidebar = ({ setChatSelected , chatSelected }) => {
  const dispatch = useDispatch();
  return (
    <div className='w-full h-full flex flex-col justify-start px-2 py-2 gap-y-3.5'>
      {[...Array(10)].map((_,key) => {
        return <div onClick={() => {
          setChatSelected(true)
          dispatch(setLayout('chat'))
        }}>
          <Card.Chat key={key}/>
        </div>
      })}
    </div>
  )
}

export default Sidebar