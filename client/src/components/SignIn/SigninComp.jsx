import React, { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk, clearAuthError } from '../../store/authSlice'


export const SigninComp = () => {
    const navigate = useNavigate()
    const [email, setEmail]=useState("")
    const [password, setPassword] =useState("")
    const dispatch= useDispatch()
    const {loading, error}= useSelector((state)=>state.auth)
    
    const handleSubmit =async(e)=>{
      e.preventDefault()
      const result = await dispatch(loginThunk({email, password}))
      if(loginThunk.fulfilled.match(result)){
        navigate("/")
      }
    }

     const handleInputChange = (setter) => (e) => {
        if (error) dispatch(clearAuthError())
        setter(e.target.value)
      }
  return (
        <div className='flex flex-col items-center justify-center py-8 gap-8' >
             <div >
               <p className='text-3xl font-bold'>SignIn to Sweet Delights</p>
             </div>
             <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-content-center'>
             <div className='flex flex-col gap-4'>
              <form onSubmit={handleSubmit}>
               <p className='text-xl font-semibold'>Enter your details</p>
               <div className='flex flex-col gap-4'>
              
               <Input label="Email" placeholder='your.email@example.com' value={email} onChange={handleInputChange(setEmail)}/>
               <Input label="Password" placeholder='********' value={password} onChange={handleInputChange(setPassword)}/>
               <div>
               </div>
               </div>
               <Button text='Log In' type='submit' className='bg-[#b76e79] text-white'/>
                <h2 className=''>New User? <span  className='text-[#b76e79] cursor-pointer' onClick={()=>navigate('/signup')}>Sign Up</span></h2>
              </form>
             </div>
       
             <div className='flex flex-col gap-4'>
               <img src="https://tse2.mm.bing.net/th/id/OIP.FmAxTddV1lbVgREsuyPh7QHaJr?rs=1&pid=ImgDetMain&o=7&rm=3" className='w-full object-cover max-w-xs'></img>
             </div>
           </div>
           </div>
  )
}
