import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit'

import {
  AuthActions,
  IAuthState,
  LoginActionPayload,
  RegisterActionPayload,
  User,
} from './types'

const initialState: IAuthState = {
  user: null,
  loading: false,
}

export const login = createAsyncThunk<
  User,
  LoginActionPayload,
  { rejectValue: SerializedError }
>(
  AuthActions.LOGIN,
  async ({ email, password }, { rejectWithValue }) =>
    new Promise(resolve => {
      setTimeout(() => {
        {
          try {
            resolve({
              email,
              password,
            })
          } catch (error: any) {
            resolve(rejectWithValue(error.response.data))
          }
        }
      }, 1000)
    })
)

export const register = createAsyncThunk<
  User,
  RegisterActionPayload,
  { rejectValue: string }
>(
  AuthActions.REGISTER,
  async ({ email, password, confirmPassword }, { rejectWithValue }) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        {
          try {
            if (password !== confirmPassword)
              resolve(rejectWithValue('Passwords are mismatch!'))

            resolve({
              email,
              password,
            })
          } catch (error: any) {
            reject(rejectWithValue(error.message))
          }
        }
      }, 1000)
    })
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<LoginActionPayload>) => {
      state.user = action.payload
    },
  },
  extraReducers: {
    [(login.pending as unknown) as string]: state => {
      state.loading = true
    },
    [(login.fulfilled as unknown) as string]: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    [(login.rejected as unknown) as string]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    [(register.pending as unknown) as string]: state => {
      state.loading = true
      state.error = undefined
    },
    [(register.fulfilled as unknown) as string]: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    [(register.rejected as unknown) as string]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export default authSlice.reducer
