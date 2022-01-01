import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit'
import {
  User,
  LoginActionPayload,
  AuthActions,
  RegisterActionPayload,
} from './types'

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
