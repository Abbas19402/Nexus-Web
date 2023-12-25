import { LOGOUT } from "@/Redux/Reducers/Auth/authReducer"
import { SET_CHAT_INACTIVE } from "@/Redux/Reducers/Chat/chatReducer"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"

const CoreContextMenu = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    return  (
        <div className="min-w-56 w-56 h-fit rounded-lg border-stone-700 border-[1px] flex flex-col bg-neutral-900 backdrop-blur-3xl p-1">
            <div className="w-full h-fit py-0.5 hover:cursor-pointer px-6 my-0.5 hover:bg-neutral-700 rounded-sm transition-all duration-150" onClick={()=>router.push('/settings/profile')}>
                <span className="text-sm tracking-tight text-white">Profile</span>
            </div>
            <div className="w-full h-fit py-0.5 hover:cursor-pointer px-6 my-0.5 hover:bg-neutral-700 rounded-sm transition-all duration-150">
                <span className="text-sm tracking-tight text-white">Block</span>
            </div>
            <div className="w-full h-fit py-0.5 hover:cursor-pointer px-6 my-0.5 hover:bg-neutral-700 rounded-sm transition-all duration-150">
                <span className="text-sm tracking-tight text-white">Report</span>
            </div>
            <div className="w-full h-fit py-0.5 hover:cursor-pointer px-6 my-0.5 hover:bg-neutral-700 rounded-sm transition-all duration-150">
                <span className="text-sm tracking-tight text-white">More</span>
            </div>
            <div className="w-full h-fit py-0.5 hover:cursor-pointer px-6 my-0.5 hover:bg-neutral-700 rounded-sm transition-all duration-150" onClick={()=> {
                dispatch(LOGOUT())
                dispatch(SET_CHAT_INACTIVE())
            }}>
                <span className="text-sm tracking-tight text-white">Logout</span>
            </div>
        </div>
    )
}

export default CoreContextMenu