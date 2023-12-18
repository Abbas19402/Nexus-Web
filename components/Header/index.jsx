import Avatar from "../Avatar"
import Icons from "../Icons"
import { useState } from "react";
import CoreContextMenu from "../Context/CoreContextMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const [ headerContextStatus, setHeaderContextStatus ] = useState(false);
  const user = useSelector(state => state.auth.user)

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-row items-center justify-between px-4">
        <div className="flex flex-row justify-start items-center gap-x-3">
          <Avatar.regular 
            imageUrl={`https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`} 
          />
          <span className="mx-3 text-white">{user.displayName}</span>
        </div>
        <div className="border-2 border-gray-600 md:h-7 md:w-7 h-9 w-9 rounded-md" onClick={()=> setHeaderContextStatus(!headerContextStatus)}>
          <Icons.Menu className="fill-white p-1"/>
        </div>
        <div className={`${headerContextStatus ? 'opacity-100 scale-100' : 'scale-90 opacity-0'} z-50 transition-all duration-300 top-16 left-96 absolute`}>
          <CoreContextMenu />
        </div>
      </div>
    </div>
  )
}

export default Header