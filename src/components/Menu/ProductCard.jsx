import React from 'react'
import { Button } from '../Button'
import { cake1 } from '../../assets/images/images'

export const ProductCard = ({className="", title="", price="", button, featured_img="" }) => {
  return (
    <div className={`flex flex-col shadow-sm shadow-[#5a5a5a59] justify-center items-center overflow-hidden h-full w-full rounded-lg ${className}`}>
        <img className="w-full aspect-4/3 object-cover rounded-t-lg" src={featured_img} alt="cake_img"/>
        <div className='flex flex-col justify-center items-center gap-1 bg-white w-full py-2'>
        <h3 className='text-sm font-medium text-center'>{title}</h3>
        <h5 className={`text-xs text-[#5a5a5a] ${button && `text-[#b76e79]`}`}>{price}</h5>
        <div>
        {button && <Button className="bg-[#b76e79] w-full md:w-auto shrink-0 text-white  " text="Add to Cart" icon='shopping_cart'/>}
        </div>
        </div>
    </div>
  )
}

const cakes = [
  {
    title: "Chocolate Fudge Cake",
    img: "https://tse2.mm.bing.net/th/id/OIP.FmAxTddV1lbVgREsuyPh7QHaJr?rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "$45.00",
  },
  {
    title: "Red Velvet Cake",
    img: "https://thescranline.com/wp-content/uploads/2023/06/RED-VELVET-CAKE-23-S-01.jpg",
    price: "$50.00",
  },
  {
    title: "Vanilla Cream Cake",
    img: "https://th.bing.com/th/id/OIP.RVfvOwCXRWmbgKBDMBdMNgHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "$40.00",
  },
  {
    title: "Strawberry Dream Cake",
    img: "https://tse1.explicit.bing.net/th/id/OIP.0wfrh4LXvHaev05IPVgvBQHaJK?rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "$45.00",
  },
  {
    title: "Elegent tired Wedding Cake",
    img: "https://i.pinimg.com/originals/b1/4d/8a/b14d8a0530bd8e701b894696e02811c5.jpg",
    price: "$180.00",
  },
  {
    title: "Chocolate Croissant",
    img: "https://i.pinimg.com/originals/9f/8f/7b/9f8f7b25b8eed73ac8091ac6856093ee.jpg",
    price: "$4.25",
  },
  
];
