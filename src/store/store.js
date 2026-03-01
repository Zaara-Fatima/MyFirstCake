import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import postSlice from './postSlice'
import ordersSlice from './orderSlice'
import productsSlice from './productSlice'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer:{
        auth: authSlice,
        post: postSlice,
        order: ordersSlice,
        product: productsSlice,
        cart: cartSlice
    }
})

export default store