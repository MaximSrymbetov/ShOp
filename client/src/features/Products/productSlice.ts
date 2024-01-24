import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Product } from './types/type';
import * as api from './api';

export type StateProduct = {
  products: Product[];
  error: undefined | string;
};

const initialState: StateProduct = {
  products: [],
  error: undefined,
};

export const allproducts = createAsyncThunk('product/load', () => api.FetchProductall());

export const addProducts = createAsyncThunk(
  'add/products',
  (formData:FormData)=>api.fetchAddProducts(formData)
  
  
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allproducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(allproducts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.products.push(action.payload.product);
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
