import api from "./apiInstance";    


export const createOrder = async (orderData) => {
  const { data } = await axiosInstance.post("/orders", orderData)
  return data
}

export const fetchMyOrders = async () => {
  const { data } = await axiosInstance.get("/orders/myorders")
  return data
}

export const fetchOrderById = async (id) => {
  const { data } = await axiosInstance.get(`/orders/${id}`)
  return data
}

export const payOrder = async (id, paymentResult) => {
  const { data } = await axiosInstance.put(`/orders/${id}/pay`, paymentResult)
  return data
}

export const fetchAllOrders = async (page = 1) => {
  const { data } = await axiosInstance.get(`/orders?page=${page}`)
  return data
}

export const deliverOrder = async (id) => {
  const { data } = await axiosInstance.put(`/orders/${id}/deliver`)
  return data
}

export const updateOrderStatus = async (id, status) => {
  const { data } = await axiosInstance.put(`/orders/${id}/status`, { status })
  return data
}