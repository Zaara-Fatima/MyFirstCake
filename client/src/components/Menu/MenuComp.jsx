import React from 'react'
import { Button } from '../Button'
import { cakes } from '../Home/Hero'
import { ProductCard } from './ProductCard'

export const MenuComp = () => {
    const menu_opt=[{
        name:"All",
        icon: "cake"
    },
    {
        name:"Birthday Cakes",
        icon: "cake"
    },
    {
        name:"Wedding Cakes",
        icon: "favorite"
    },
    {
        name:"Cakes",
        icon: "cake"
    },
    {
        name:"Pasteries",
        icon: "bakery_dining"
    },
    
]
    
  return (
    <div className='flex flex-col justify-center items-center gap-10 py-8 min-h-screen'>
        <div className='flex flex-col gap-2 max-w-xl'>
            <div className='text-center text-xl font-bold' >Our Delicious Menu</div>
            <p className='text-center text-lg font-medium text-[#5a5a5a]'>Explore our delightful selection of handcrafted cakes, pastries, and desserts, perfect for any occasiion. Freshly baked with love, everyday. </p>
        </div>
        <div className='flex flex-wrap gap-2 justify-center items-center'>
            {menu_opt.map((item,index)=>
            <div className="bg-[#ffeb89] rounded-2xl hover:bg-[#b76e79] hover:text-white" key={index}>
            <Button  text={item.name} icon={item.icon}/></div>)}
        </div>
        <div className='md:max-w-4xl sm:max-w-lg max-w-sm'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
            {cakes.map((cake,index)=>
            <div key={index}>
            <ProductCard title={cake.title} featured_img={cake.img} price={cake.price} button/></div>)}
        </div>
        </div>
    </div>
  )
}
