import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imagesList: [],
};

const imagesListSlice = createSlice({
  name: 'imagesList',
  initialState,
  reducers: {
    setImagesList(state, action) {
      return { ...state, imagesList: action.payload };
    },
  },
});

export const { setImagesList } = imagesListSlice.actions;
export const selectImagesList = (state: any) => state.imagesList;
export default imagesListSlice.reducer;
