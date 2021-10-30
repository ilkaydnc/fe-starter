import { SerializedError } from '@reduxjs/toolkit'

export enum AuthActions {
  LOGIN = 'auth/login',
  REGISTER = 'auth/register',
  LOGOUT = 'auth/logout',
}

export type User = {
  email: string
  password: string
}

export interface IAuthState {
  user: User | null
  error?: SerializedError
  loading: boolean
}

export type LoginActionPayload = {
  email: string
  password: string
}

export type RegisterActionPayload = {
  email: string
  password: string
  confirmPassword: string
}
