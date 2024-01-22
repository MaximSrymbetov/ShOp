import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Product, ProductId } from './types/type';
import * as api from '../../App/api';

type StateProducts = {
  products: Product[];
  error: undefined | string;
};

const initialState: adminSlice = {
  products: [],
  error: undefined,
};

// export const loadProducts = createAsyncThunk('load/products', () => api.fetchProducts());

export const addProducts = createAsyncThunk(
  'add/products',
  (product: { title: string; image: string; price: string }) => api.fetchAddProducts(product),
);

// export const deleteProduct = createAsyncThunk('delete/product', (productId: ProductId) =>
//   api.fetchDeleteProduct(productId),
// );

// export const updateProduct = createAsyncThunk('update/product', (product: Product) =>
//   api.fetchUpdateProducts(product),
// );

const productSLice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
//       .addCase(loadProducts.fulfilled, (state, action) => {
//         state.products = action.payload;
//       })
//       .addCase(loadProducts.rejected, (state, action) => {
//         state.error = action.error.message;
//       })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.products.push(action.payload.product);
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.error = action.error.message;
      })
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         state.products = state.products.filter((product) => product.id !== +action.payload.id);
//       })
//       .addCase(deleteProduct.rejected, (state, action) => {
//         state.error = action.error.message;
//       })
//       .addCase(updateProduct.fulfilled, (state, action) => {
//         state.products = state.products.map((product) =>
//           product.id === +action.payload.product.id ? action.payload.product : product,
//         );
//       })
//       .addCase(updateProduct.rejected, (state, action) => {
//         state.error = action.error.message;
      // });
  },
});

export default adminSlice.reducer;
