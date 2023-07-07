import React from 'react'

const Login = ({ isSignupComplted }) => {
  return (
    <form className='py-2'>
      <div className="w-full h-fit py-2 flex flex-col gap-y-2">
          <label className='text-gray-500 text-lg  font-medium tracking-wide'>Username</label>
          <input type="text" name="username" id="username" className='bg-transparent border-[2px] border-gray-400 focus:outline-0 rounded-md' />
      </div>
      <div className="w-full h-fit py-2 flex flex-col gap-y-2">
          <label className='text-gray-500 text-lg  font-medium tracking-wide'>Password</label>
          <input type="text" name="password" id="password" className='bg-transparent border-[2px] border-gray-400 focus:outline-0 rounded-md' />
      </div>
      <button className='w-full h-8 bg-stone-400 rounded-md my-3'>
          <span className='font-bold tracking-wider'>Login</span>
      </button>
    </form>
  )
}

export default Login