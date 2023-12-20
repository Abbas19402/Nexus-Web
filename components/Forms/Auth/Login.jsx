import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LOGIN } from '@/Redux/Reducers/Auth/authReducer'
import { SWITCH_LAYOUT } from '@/Redux/Reducers/LayoutSwitch'
import { useRouter } from 'next/router'

const Login = ({ isSignupComplted }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [error, setError] = useState("")

  const loginUser = async(e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const values = {}
    for(var pair of form.entries()) {
      values[pair[0]] = pair[1]
    }
    try {
      const {data:response} = await axios.request({
        method: 'POST',
        url: 'http://localhost:5000/api/auth/login',
        data: {
          email: values.email,
          password: values.password
        }
      })
      e.target.reset();
      dispatch(LOGIN(response.data))
      dispatch(SWITCH_LAYOUT('chat'))
      router.push('/')
      console.log(response)
    } catch(err) {
      setError(err)
      console.log(err);
    }
  }

  return (
    <form className='py-2 text-white' onSubmit={loginUser}>
      <div className="w-full h-fit py-2 flex flex-col gap-y-2">
          <label htmlFor="email" className='text-gray-500 text-lg  font-medium tracking-wide'>E-mail</label>
          <input type="email" name="email" id="email" className='bg-transparent border-[2px] border-gray-400 focus:outline-0 rounded-md' />
      </div>
      <div className="w-full h-fit py-2 flex flex-col gap-y-2">
          <label className='text-gray-500 text-lg  font-medium tracking-wide'>Password</label>
          <input type="text" name="password" id="password" className='bg-transparent border-[2px] border-gray-400 focus:outline-0 rounded-md' />
      </div>
      <div className="w-full my-2">
        <span className="text-md tracking-wide text-red-700">{error.message}</span>
      </div>
      <button className='w-full h-8 bg-stone-400 rounded-md my-3'>
          <span className='font-bold tracking-wider text-black'>Login</span>
      </button>
    </form>
  )
}

export default Login