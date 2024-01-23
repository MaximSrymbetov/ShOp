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

// export const deleteProduct = createAsyncThunk('delete/product', (productId: ProductId) =>
//   api.fetchDeleteProduct(productId),
// );

export const updateOrder = createAsyncThunk('update/order', (order: Order) =>
  api.fetchUpdateOrder(order),
);

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
      })

      // .addCase(deleteProduct.fulfilled, (state, action) => {
      //   state.products = state.products.filter((product) => product.id !== +action.payload.id);
      // })
      // .addCase(deleteProduct.rejected, (state, action) => {
      //   state.error = action.error.message;
      // })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.orders = state.orders.map((order) =>
          order.id === +action.payload.order.id ? action.payload.order : order,
        );
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
