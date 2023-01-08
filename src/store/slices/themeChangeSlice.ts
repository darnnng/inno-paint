import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkTheme: false,
};

const themeChangeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { setTheme } = themeChangeSlice.actions;
export const selectTheme = (state: any) => state.darkTheme;
export default themeChangeSlice.reducer;
