import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: false,
};

const themeChangeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state) {
      state.theme = !state.theme;
    },
  },
});

export const { setTheme } = themeChangeSlice.actions;
export const selectTheme = (state: any) => state.theme;
export default themeChangeSlice.reducer;
