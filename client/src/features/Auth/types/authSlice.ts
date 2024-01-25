import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Authorization, Registration, User } from './type';
import * as api from '../../../App/api';

type StateAuth = {
  user: User | undefined;
  error: string | undefined;
  message: string | undefined;
  loading: boolean;
};

const initialState: StateAuth = {
  user: undefined,
  error: undefined,
  message: undefined,
  loading: false,
};

export const login = createAsyncThunk('auth/login', (obj: Authorization) => api.FetchLogin(obj));

export const signin = createAsyncThunk('auth/signin', (obj: Registration) => api.FetchSignin(obj));

export const logout = createAsyncThunk('auth/logout', () => api.FetchLogout());

export const checkUser = createAsyncThunk('auth/check', () => api.FetchCheckUser());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(signin.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = undefined;
        state.message = action.payload.message;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.message = action.payload.message;
        state.loading = false;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(checkUser.pending, (state) => {
        state.loading = true;
      });
  },
});

export default authSlice.reducer;
