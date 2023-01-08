import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import canvasReducer from './slices/canvasSlice';
import toolsReducer from './slices/toolSlice';
import themeChangeReducer from './slices/themeChangeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    canvas: canvasReducer,
    tool: toolsReducer,
    theme: themeChangeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
