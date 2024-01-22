import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Authentication, Registration, User } from './type';
import * as api from '../../../App/api';

type StateUser = {
  user: undefined | User;
  error: undefined | string;
};

const initialState: StateUser = {
  user: undefined,
  error: undefined,
};

export const authentication = createAsyncThunk('auth/authentication', (obj: Authentication) => {
  api.FetchAuthUser(obj).catch((err) => console.error(err));
});

export const registration = createAsyncThunk('auth/registration', (obj: Registration) => {
  api.FetchRegistration(obj).catch((err) => console.error(err));
});

export const logout = createAsyncThunk('auth/logout', () => {});

export const checkUser = createAsyncThunk('auth/check', () => {});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authentication.fulfilled, (state, action) => {
        state.user = action.payload !== null ? undefined : action.payload;
      })
      .addCase(authentication.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload !== null ? undefined : action.payload;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = undefined;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.user = action.payload !== null ? undefined : action.payload;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
