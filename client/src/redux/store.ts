import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/allproducts/productSlice';
import orderSlice from '../features/AdminPanel/orderSlice';
import authSlice from '../features/Auth/types/authSlice';

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    orders: orderSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
