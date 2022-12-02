import { configureStore } from '@reduxjs/toolkit';

import chatMiddleware from './middlewares/chatMiddleware';

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
