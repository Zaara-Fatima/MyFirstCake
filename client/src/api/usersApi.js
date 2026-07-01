import api from "./apiInstance"

export const fetchUserProfile = async () => {
  const { data } = await axiosInstance.get("/users/profile")
  return data
}

export const updateUserProfile = async (userData) => {
  const { data } = await axiosInstance.put("/users/profile", userData)
  return data
}


export const fetchAllUsers = async () => {
  const { data } = await axiosInstance.get("/users/profiles")
  return data
}