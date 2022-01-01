import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { THEMES } from './types'

const initialState = {
  theme: 'light',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<THEMES>) => {
      state.theme = action.payload
    },
  },
})

export const { setTheme } = appSlice.actions

export const appReducer = appSlice.reducer
