import axios from "axios"

const api = axios.create({
    baseURl: "http://localhost:5000/api",
    timeout: 100000,
     headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
})

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token")
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
},(error)=>{
   return Promise.reject(error)
})

api.interceptors.response.use(
    (response)=>response,
    (error)=>{
        if(error.respone?.status===401){
            localStorage.removeItem("token")
            window.location.href('\login')
        }

    }
)

export default api