import api from "./apiInstance";

export const getProduct = async()=>{
    const {data}= await api.get('/products')
    return data
}

export const getProductById= async(id)=>{
    const {data}=await api.get(`/products/${id}`)
    return data
}

export const createProduct =async(productData)=>{
    const {data}=await api.post("/products",productData)
    return data
}

export const updateProduct= async(productData,id)=>{
    const {data}= await api.put(`/products/${id}`,productData)
    return data
}

export const deleteProduct = async (id) => {
  const { data } = await axiosInstance.delete(`/products/${id}`)
  return data
}