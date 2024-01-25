/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Product, ProductId, ProductWithoutOwnerPhoto } from './types/type';
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

export const addProducts = createAsyncThunk('add/products', (formData: FormData) =>
  api.fetchAddProducts(formData),
);

export const deleteProduct = createAsyncThunk('delete/product', (productId: ProductId) =>
  api.fetchDeleteProduct(productId),
);

export const updateProduct = createAsyncThunk('update/product', (obj: ProductWithoutOwnerPhoto) =>
  api.fetchUpdateProducts(obj),
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allproducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(allproducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(allproducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(addProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== Number(action.payload.id),
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        console.log(action.payload);

        state.products = state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product,
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
