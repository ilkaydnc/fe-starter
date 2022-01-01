import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { appReducer } from '@/app/store/slice'
import { authReducer } from '@/modules/auth/store'

export function makeStore() {
  return configureStore({
    reducer: {
      app: appReducer,
      auth: authReducer,
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
