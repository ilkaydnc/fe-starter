import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IAuthState, LoginActionPayload } from './types'

const initialState: IAuthState = {
  user: null,
  loading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<LoginActionPayload>) => {
      state.user = action.payload
    },
  },
  extraReducers: {
    'auth/login/pending': state => {
      state.loading = true
      state.error = undefined
    },
    'auth/login/fulfilled': (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    'auth/login/rejected': (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    'auth/register/pending': state => {
      state.loading = true
      state.error = undefined
    },
    'auth/register/fulfilled': (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    'auth/register/rejected': (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const authReducer = authSlice.reducer
