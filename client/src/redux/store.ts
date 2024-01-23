import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/Auth/types/userSlice';
import productSlice from '../features/Products/productSlice';
import orderSlice from '../features/AdminPanel/orderSlice';

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const store = configureStore({
  reducer: {
    auth: userSlice,
    products: productSlice,
    orders: orderSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
