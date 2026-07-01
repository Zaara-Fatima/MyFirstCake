import api from "./apiInstance";

export const registerUser= async(userData)=>{
    const {data}=await api.post('/users/register',userData)
    localStorage.setItem("token",data.token)
    return data
}

export const loginUser=async(userData)=>{
    const {data}= await api.post('/users/login',userData)
    localStorage.setItem("token",data.token)
    return data
}

export const logoutUser=()=>{
    localStorage.removeItem("token")
}