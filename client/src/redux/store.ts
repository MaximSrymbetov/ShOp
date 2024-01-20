import { useDispatch } from 'react-redux';
import {  configureStore } from '@reduxjs/toolkit';


type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const store = configureStore({
  reducer: {
  
  },
});
export type RootState = ReturnType<typeof store.getState>;
