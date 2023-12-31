import Forms from '@/components/Forms'
import { useRouter } from 'next/router'
import React , { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
// import Styles from "@/styles/Scrollbar.module.css"

const AuthenticationPage = () => {
    const router = useRouter();

    const loginStatus = useSelector(state => state.auth.loginStatus)
    useEffect(()=> {
        if(loginStatus) {
            setSignupCompleted(true)
        } else {
            setSignupCompleted(false)
        }
    },[]) 
    const [ isSignupCompleted , setSignupCompleted ] = useState(false)
  return (
    <div className='w-screen h-full flex flex-col justify-center items-center overflow-hidden'>
        <div className="w-full h-[30vh] flex justify-center items-center">
            <span className="text-6xl font-thin text-white tracking-widest uppercase underline underline-offset-8">NEXUS</span>
        </div>
        <div className="w-[90vw] md:w-[45vw] scale-90">
            <div className="w-full h-16 flex flex-row gap-2 border-[1.5px] rounded-xl p-2 border-stone-600">
                <div className={`h-full w-[50%] ${isSignupCompleted ? ' bg-stone-600 ' : 'bg-stone-800'} rounded-lg flex justify-center items-center hover:cursor-pointer`} onClick={()=> setSignupCompleted(true)}>
                    <span className='text-lg text-white tracking-widest uppercase font-medium'>Login</span>
                </div>
                <div className={`h-full w-[50%] ${isSignupCompleted ? 'bg-stone-800' : 'bg-stone-600 '} rounded-lg flex justify-center items-center hover:cursor-pointer`} onClick={()=> setSignupCompleted(false)}>
                    <span className='text-lg text-white tracking-widest uppercase font-medium'>Signup</span>
                </div>
            </div>
        </div>
        <div className={`w-[90vw] md:w-[45vw] overflow-x-hidden md:h-[40vh] overflow-y-auto flex flex-col p-2 scale-90`}>
            <div className="w-full h-fit">
                {isSignupCompleted ? <Forms.Login /> : <Forms.Signup isSignupCompleted={isSignupCompleted} setSignupCompleted={setSignupCompleted}/>}
            </div>
        </div>  
    </div>
  )
}

export default AuthenticationPage