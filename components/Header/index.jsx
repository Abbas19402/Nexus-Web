import Avatar from "../Avatar"
import Icons from "../Icons"
import { useState } from "react";
import CoreContextMenu from "../Context/CoreContextMenu";
import { useSelector } from "react-redux";
import Modal from "../Modals";

const Header = () => {
  const [ headerContextStatus, setHeaderContextStatus ] = useState(false);
  const [ createChatModalStatus, setCreateChatModalStatus ] = useState(false)
  const user = useSelector(state => state.auth.user)

  return (
    <div className="w-full h-full" onClick={()=> {
      if(headerContextStatus) {
        setHeaderContextStatus(false)
      }
    }}>
      <div className="w-full h-full flex flex-row items-center justify-between px-4">
        <div className="flex flex-row justify-start items-center gap-x-3">
          <Avatar.regular 
            imageUrl={`https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`} 
          />
          <span className="mx-3 text-white">{user.displayName}</span>
        </div>
        <div className="flex flex-row justify-end items-center gap-x-2">
          <div className='p-2 rounded-full hover:bg-neutral-800 transition-all'>
            <Icons.Add className="fill-white h-5 w-5" onClick={()=> setCreateChatModalStatus(true)}/>
          </div>
          <div className="hover:bg-neutral-800 p-2 rounded-full" onClick={()=> setHeaderContextStatus(!headerContextStatus)}>
            <Icons.Menu className="fill-white p-1 md:h-7 md:w-7 h-9 w-9"/>
          </div>
        </div>
        <div className={`${headerContextStatus ? 'opacity-100 scale-100' : 'scale-90 opacity-0'} z-50 transition-all duration-300 absolute right-2 lg:left-96 top-16`}>
          <CoreContextMenu />
        </div>
      </div>
      <div className="absolute top-0 left-0">
        <Modal.createChat createChatModalStatus={createChatModalStatus} setCreateChatModalStatus={setCreateChatModalStatus}/>
      </div>
    </div>
  )
}

export default Header