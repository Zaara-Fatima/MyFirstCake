import React from 'react'

export const ValueCard = ({icon="", heading="", text=""}) => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center bg-white rounded-xl py-4 px-4 shadow '>
        <span className='material-symbols-outlined text-[#b76e79]'>{icon}</span>
        <h1 className='text-lg font-semibold text-center'>{heading}</h1>
        <p className='text-medium text-center text-[#5a5a5a]'>{text}</p>
    </div>
  )
}
