import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updatePost } from "./postSlice";

export const fetchProducts = createAsyncThunk("products/fetchProducts",async()=>{
    const response = await fetch("/api/products")
    return response.json()
})

const initialState ={
    items:[],
    status: 'idle',
    error:null,
}

const productsSlice =createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct(state,action){
            state.items.push(action.payload)
        },
        updateProduct(state,action){
            const {id, name, price, description}=action.payload
            const product=state.items.find(p=>p.id==id)
            if (product){
                product.name=name
                product.description=description
                product.price=price
            }
        },
        removeProduct(state,action){
            state.items=state.items.filter(p=>p.id!==action.payload)
        }
    },
    extraReducers:(builder)=>builder
    .addCase(fetchProducts.pending,(state)=>{
        state.status='loading'
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.status='succeeded'
        state.items= action.payload
    })
    .addCase(fetchProducts.rejected,(state,action)=>{
        state.status='failed'
        state.error =action.error.message;
    })
})

export const { addProduct, updateProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
