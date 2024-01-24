import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Authorization, Registration, User } from './type';
import * as api from '../../../App/api';

type StateAuth = {
  user: User | undefined;
  error: string | undefined;
  message: string | undefined;
};

const initialState: StateAuth = {
  user: undefined,
  error: undefined,
  message: undefined,
};

export const login = createAsyncThunk('auth/login', (obj: Authorization) => {
  api.FetchLogin(obj).catch((err) => console.error(err, 'loginErr'));
});

export const signin = createAsyncThunk('auth/signin', (obj: Registration) => {
  api.FetchSignin(obj).catch((err) => console.error(err));
});

export const logout = createAsyncThunk('auth/logout', () => {});

export const checkUser = createAsyncThunk('auth/check', () => {});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // signin: (state, action) => {
    //   console.log(action, 'rdc');
    //   state.message = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload !== null ? undefined : action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(signin.fulfilled, (state, action) => {
        console.log(action.meta);
        state.user = action.payload !== null ? undefined : action.payload;
        // state.message = action.payload.message !== null ? undefined : action.payload;
      })
      .addCase(signin.rejected, (state, action) => {
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
