import Avatar from "../Avatar"
import Icons from "../Icons"

const Header = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-row items-center justify-between px-4">
        <Avatar.regular 
          imageUrl={`https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`} 
        />
        <div className="border-2 border-gray-600 md:h-7 md:w-7 h-9 w-9 rounded-md">
          <Icons.Menu className="fill-white p-1"/>
        </div>
      </div>
    </div>
  )
}

export default Header