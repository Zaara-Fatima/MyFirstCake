import api from "./apiInstance";

export const addToCart = async(itemsdata)=>{
    const {data}= await api.post("/carts",itemsdata)
    return data
}

export const removeFromCart = async(id)=>{
    const {data}=await api.delete(`/carts/${id}`)
    return data
}

export const updateCartQuantity = async(id, quantity)=>{
    const {data}=await api.put(`/carts/${id}`,{quantity})
    return data
}