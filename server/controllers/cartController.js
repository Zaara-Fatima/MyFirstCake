
import Cart from "../models/Cart.js";

import mongoose from "mongoose";

export const addToCart = async(req,res)=>{
   
try {
     console.log("Controller reached");
        console.log(req.body);
    if(Array.isArray(req.body)){
        const cartItems = req.body.map((items)=>({
            ...items,
            user:req.user._id,
        }))
        const  items= await Cart.insertMany(cartItems)
        return res.status(200).json(items)
    }
    
    const {name, price, image, quantity} = req.body
    const item=new Cart({
        name,
        price,
        image,
        quantity: quantity || 1
    })
       console.log("Saved:");
    const addedToCart =await item.save()
    res.status(200).json(addedToCart)
} catch (error) {
    console.log(error.message)
    res.status(500).json({message:error.message})
}
}

export const removeFromCart= async(req,res)=>{
    try {
        const item = await Cart.findById(req.params.id)
        if(!item){
            return res.status(404).json({
                message:"Item Not Found"
            })
        }

        await item.deletone()
        res.json({message: "Item removed"})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message:"Server Error"
        })
    }
}