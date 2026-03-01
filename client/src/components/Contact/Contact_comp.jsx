import React from 'react'
import { Input } from '../Input'
import {Button} from "../Button"
import { ContactDetail } from './ContactDetail'

export const Contact_comp = () => {
  return (
    <div className='flex flex-col items-center justify-center py-8 gap-8' >
      <div >
        <p className='text-3xl font-bold'>Get in Touch with Sweet Delights</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-content-center'>
      <div className='flex flex-col gap-4'>
        <p className='text-xl font-semibold'>Send Us a Message</p>
        <div className='flex flex-col gap-4'>
        <Input label="Name" placeholder='Your Name'/>
        <Input label="Email" placeholder='your.email@example.com'/>
        <div>
        <label htmlFor="">Message</label>
        <textarea placeholder="Type Your Message here....." className="w-full min-w-0 px-3 py-2 rounded-xl border-[#797878c1] border text-[#5a5a5a]  outline-none" id='message' name='Message'>
        </textarea>
        </div>
        </div>
        <Button text='Send Message'  className='bg-[#b76e79] text-white'/>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='text-xl font-semibold'>Our Location And Details</p>
        <img src="https://img.freepik.com/free-vector/road-location-map_23-2147533442.jpg" className='w-full object-cover max-w-xs'></img>

        <ContactDetail className="flex flex-col gap-2"/>
      </div>
    </div>
    </div>
  )
}
