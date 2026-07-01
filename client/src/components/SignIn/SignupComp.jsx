import React, { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {registerThunk, clearAuthError} from "../../store/authSlice"

export const SignupComp = () => {
    const navigate =useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [img,setImg]= useState("")

    const dispatch=useDispatch()

    const {loading,error} =useSelector((state)=>state.auth)

    const handleSubmit=async(e)=>{
      e.preventDefault()

      const result=await dispatch(registerThunk({name,email,password,img}))
      if(registerThunk.fulfilled.match(result)){
        navigate('/')
      }
    }

    const handleInputChange = (setter) => (e) => {
    if (error) dispatch(clearAuthError())
    setter(e.target.value)
  }

  return (
        <div className='flex flex-col items-center justify-center py-8 gap-8' >
             <div >
               <p className='text-3xl font-bold'>SignUp to Sweet Delights</p>
             </div>
             <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-content-center'>
             <div className='flex flex-col gap-4'>
              <form onSubmit={handleSubmit}>
               <p className='text-xl font-semibold'>Enter your details</p>
               <div className='flex flex-col gap-4'>
               <Input label="Name" placeholder='Your Name' onChange={handleInputChange(setName)} value={name} />
               <Input label="Email" placeholder='your.email@example.com'onChange={handleInputChange(setEmail)} value={email}/>
               <Input label="Password" placeholder='********' onChange={handleInputChange(setPassword)} value={password}/>
               <Input label="ImageUrl" placeholder='***.jpg' onChange={handleInputChange(setImg)} value={img}/>
               <div>
               </div>
               </div>
               <Button text='Register' type='submit'  className='bg-[#b76e79] text-white'/>
               <h2 className=''>Already Registered? <span  className='text-[#b76e79] cursor-pointer' onClick={()=>navigate('/signin')}>Sign In</span></h2>
               </form>
             </div>
       
             <div className='flex flex-col gap-4'>
               <img src="https://tse1.explicit.bing.net/th/id/OIP.0wfrh4LXvHaev05IPVgvBQHaJK?rs=1&pid=ImgDetMain&o=7&rm=3" className='w-full object-cover max-w-xs'></img>
             </div>
           </div>
           </div>
  )
}
