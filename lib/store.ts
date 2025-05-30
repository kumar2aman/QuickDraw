'use client'


import { configureStore } from '@reduxjs/toolkit'

import statesSlice from './features/states/statesSlice'


export const store = () => {
  return configureStore({
    reducer: {
       counter:statesSlice,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']