import React from 'react'
import { CheckOutProd } from './CheckOutProd'
import { CheckoutForm } from './CheckoutForm'
import { useSelector } from 'react-redux'

export const CartComp = () => {
  const {cartItems, totalPrice, totalQuantity} =useSelector((state)=>state.cart)
  console.log(cartItems)
  return (
    <div className='px-10 py-10 min-h-screen '>
    <p className='text-xl font-bold text-center '>Your Cart & Checkout</p>
    <div className='grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3  gap-4 place-content-center px-10' >
      <div className='flex flex-col gap-2 md:col-span-2'>
        <p className='text-lg font-semibold'>Your Cart</p>
        <div className='flex flex-col gap-4' >
          {cartItems.map((items)=>(
            <div key={items._id}>
             <CheckOutProd key={items.id} image={items.image} name={items.name} price={items.price}  quantity={items.quantity}/>
             </div>
          ))}
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
            
             <div>
              <p>${totalPrice.toFixed(2)}.00</p>
            <p>$4.84</p>
            <p>$5.00</p>
            <p>{totalPrice.toFixed(2) + 4.84 + 5.00}</p>
            </div>

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
