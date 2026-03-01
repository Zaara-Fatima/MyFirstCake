import React from 'react'
import { CheckOutProd } from './CheckOutProd'
import { CheckoutForm } from './CheckoutForm'

export const CartComp = () => {
  return (
    <div className='px-10 py-10 min-h-screen '>
    <p className='text-xl font-bold text-center '>Your Cart & Checkout</p>
    <div className='grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3  gap-4 place-content-center px-10' >
      <div className='flex flex-col gap-2 md:col-span-2'>
        <p className='text-lg font-semibold'>Your Cart</p>
        <div className='flex flex-col gap-4' >
        <CheckOutProd/>
        <CheckOutProd/>
        <CheckOutProd/>
        </div>
        <div className='grid grid-cols-2 w-full  rounded-xl shadow-[#797777] bg-white px-4 py-3 shadow-sm '>
          <p className='col-span-full font-medium'>Order Summary</p>
          <div className='
          text-md '>
            <p>Subtotal</p>
            <p>Tax (8%)</p>
            <p>Shipping</p>
            <p>Order Total</p>
          </div>
          <div className='text-md font-normal text-right text-[#5a5a5a]'>
            <p>$60.50</p>
            <p>$4.84</p>
            <p>$5.00</p>
            <p>$70.34</p>
          </div>
        </div>
      </div>
      <div>
        <p className='text-lg font-semibold'>Checkout Details</p>
        <CheckoutForm/>
      </div>
    </div>
    </div>
  )
}
