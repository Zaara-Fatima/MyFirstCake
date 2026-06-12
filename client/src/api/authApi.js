import api from "./apiInstance";

export const registerUser= async(userData)=>{
    const {data}=await api.post('/register',userData)
    localStorage.setItem("token",data.token)
    return data
}

export const loginUser=async(userData)=>{
    const {data}=await api.post('/login',userData)
    localStorage.setItem("token",data.token)
    return data
}

export const logoutUser=()=>{
    localStorage.removeItem("token")
}