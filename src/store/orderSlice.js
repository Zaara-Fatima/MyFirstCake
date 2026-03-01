import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch orders
export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async () => {
    const response = await fetch('/api/orders'); // Replace with your API endpoint
    return response.json();
  }
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    status: 'idle',
    error: null
  },
  reducers: {
    placeOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    cancelOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    },
    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload;
      const order = state.orders.find(o => o.id === id);
      if (order) {
        order.status = status;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { placeOrder, cancelOrder, updateOrderStatus } = ordersSlice.actions;
export default ordersSlice.reducer;