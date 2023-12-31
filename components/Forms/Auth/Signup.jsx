import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const Signup = ({ isSignupCompleted, setSignupCompleted }) => {
  const signup = async(e) => {
    e.preventDefault()
    const signInDetails = new FormData(e.currentTarget)
    let values = {};
    for(var pair of signInDetails) {
      values[pair[0]] = pair[1];
    }
    console.log(values);
    try{
      const res = await axios.request({
        method: 'POST',
        url: 'http://localhost:5000/api/auth/signup',
        data: {
          displayName: values.displayName,
          username: values.username,
          email: values.email,
          password: values.password
        }
      })
      setSignupCompleted(true)
      toast('API Hit successfully!!!')
      console.log(res);
    } catch(error) {
      console.log(error);
    }
  } 
  return (
    <form onSubmit={signup} className='py-2'>
      <div className="w-full flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[49%] h-fit py-2 flex flex-col gap-y-2">
          <label className='text-gray-500 text-lg font-medium tracking-wide'>Display Name</label>
          <input type="text" name="displayName" autoComplete=" " id="displayName" className='capitalize text-gray-200 px-1 tracking-wider bg-transparent border-[2px] border-gray-400 focus:outline-0 rounded-md p-1'/>
        </div>
        <div className="w-full lg:w-[49%] h-fit py-2 flex flex-col gap-y-2">
          <label className='text-gray-500 text-lg font-medium tracking-wide'>Username</label>
          <input type="text" name="username" id="username" autoComplete=" " className='text-gray-200 px-1 tracking-wider bg-transparent border-[2px] border-gray-400 focus:outline-0 rounded-md p-1'/>
        </div>
      </div>
      <div className="w-full lg:w-full h-fit py-2 flex flex-col gap-y-2">
        <label className='text-gray-500 text-lg font-medium tracking-wide'>E-mail</label>
        <input type="mail" name="email" id="email" autoComplete=" " className='text-gray-200 px-1 tracking-wider bg-transparent border-[2px] border-gray-400 focus:outline-0 rounded-md p-1'/>
      </div>
      <div className="w-full h-fit py-2 flex flex-col gap-y-2">
          <label className='text-gray-500 text-lg font-medium tracking-wide'>Password</label>
          <input type="password" name="password" id="password" autoComplete=" " className='text-gray-200 px-1 tracking-wider bg-transparent border-[2px] border-gray-400 focus:outline-0 rounded-md p-1' />
      </div>
      <div className="w-full h-fit py-2 flex flex-col gap-y-2">
          <label className='text-gray-500 text-lg  font-medium tracking-wide'>Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" className='text-gray-200 px-1 tracking-wider bg-transparent border-[2px] border-gray-400 focus:outline-0 rounded-md p-1' />
      </div>
      <button type='submit' className='w-full h-8 bg-stone-400 rounded-md my-3'>
          <span className='font-bold tracking-wider'>Sign In</span>
      </button>
    </form>
  )
}

export default Signup