import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Product } from './types/type';
import * as api from './api';

export type StateProduct = {
  products: Product[];
  error: undefined | string;
  loading: false | true;
};

const initialState: StateProduct = {
  products: [],
  error: undefined,
  loading: false,
};

export const allproducts = createAsyncThunk('product/load', () => api.FetchProductall());

export const addProducts = createAsyncThunk(
  'add/products',
  (product: {
    category_id: number;
    gender_id: number;
    name: string;
    description: string;
    price: string;
  }) => api.fetchAddProducts(product),
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allproducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(allproducts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(allproducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(addProducts.fulfilled, (state, action) => {
        state.products.push(action.payload.product);
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { stopLoading } = productSlice.actions;

export default productSlice.reducer;
