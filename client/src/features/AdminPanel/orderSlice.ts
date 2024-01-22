import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Order } from './types/type';
import * as api from './api';

export type StateOrder = {
  orders: Order[];
  error: undefined | string;
};

const initialState: StateOrder = {
  orders: [],
  error: undefined,
};

export const allorders = createAsyncThunk('order/load', () => api.FetchOrderall());

// export const addProducts = createAsyncThunk(
//   'add/products',
//   (product: {
//     categoryid: number;
//     genderid: number;
//     name: string;
//     description: string;
//     price: string;
//   }) => api.fetchAddProducts(product),
// );

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allorders.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(allorders.rejected, (state, action) => {
        state.error = action.error.message;
      });
    // .addCase(addProducts.fulfilled, (state, action) => {
    //   state.products.push(action.payload.product);
    // })
    // .addCase(addProducts.rejected, (state, action) => {
    //   state.error = action.error.message;
    // })
  },
});

export default orderSlice.reducer;
