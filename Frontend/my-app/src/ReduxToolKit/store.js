import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './Slice/CounterSlice'
import AccessModeSlice from './Slice/AccessModeSlice';

  const store = configureStore({
  reducer: {
    counter: CounterSlice,
    accessmode:AccessModeSlice,
  },
})
export  default store;