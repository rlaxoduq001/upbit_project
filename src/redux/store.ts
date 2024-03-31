import { configureStore } from '@reduxjs/toolkit';
import upbitReducer from './reducer/upbitReducer';

export const store = configureStore({
  reducer: {
    upbit: upbitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
