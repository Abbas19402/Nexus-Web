import React from 'react'

const Button = (props) => {
  return (
    <div className={`ring-white ring-2 min-w-28 w-fit h-fit text-white lg:hidden flex justify-center items-center p-[4px] rounded-md group hover:cursor-pointer ${props.className}`} {...props}>
        <div className="group-hover:bg-gray-900 rounded-md px-4">
            <span className="text-xl">{props.title}</span>
        </div>
    </div>
  )
}

export default Button